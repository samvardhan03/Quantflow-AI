def calculate_lbo(data):
    """
    Calculate leveraged buyout (LBO) model.
    Args:
        data (dict): Acquisition price, debt-equity ratio, cash flows, and exit multiple.
    Returns:
        dict: LBO model results including debt schedule, equity return, and IRR.
    """
    acquisition_price = data['acquisition_price']
    debt_equity_ratio = data['debt_equity_ratio']
    projected_cash_flows = data['projected_cash_flows']
    exit_multiple = data['exit_multiple']

    debt = acquisition_price * debt_equity_ratio
    equity = acquisition_price - debt

    debt_schedule = []
    remaining_debt = debt
    for cash in projected_cash_flows:
        repayment = min(remaining_debt, cash)
        remaining_debt -= repayment
        debt_schedule.append({"repayment": repayment, "remaining_debt": remaining_debt})

    exit_value = projected_cash_flows[-1] * exit_multiple
    equity_return = exit_value - remaining_debt

    irr = ((equity_return / equity) ** (1 / len(projected_cash_flows))) - 1

    return {
        "debt_schedule": debt_schedule,
        "equity_return": equity_return,
        "irr": irr
    }
