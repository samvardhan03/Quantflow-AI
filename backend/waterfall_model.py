def calculate_waterfall(data):
    """
    Calculate waterfall distribution for private equity.
    Args:
        data (dict): Includes fund size, hurdle rate, cash flows, and profit splits.
    Returns:
        dict: Waterfall distribution results.
    """
    fund_size = data['fund_size']
    hurdle_rate = data['hurdle_rate']
    cash_flows = data['cash_flows']
    profit_split = data['profit_split']  # LP/GP split as {'LP': 80, 'GP': 20}

    lp_share = profit_split['LP'] / 100
    gp_share = profit_split['GP'] / 100

    waterfall_distribution = []
    total_returned = 0

    for cash in cash_flows:
        hurdle_return = fund_size * hurdle_rate
        return_to_lp = min(cash, hurdle_return - total_returned)
        gp_catch_up = max(0, cash - return_to_lp)

        waterfall_distribution.append({
            "cash": cash,
            "lp_return": lp_share * return_to_lp,
            "gp_return": gp_share * gp_catch_up,
        })
        total_returned += cash

    return {"waterfall_distribution": waterfall_distribution}
