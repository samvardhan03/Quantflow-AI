import numpy as np

def run_scenarios(data):
    """
    Run multi-scenario analysis using Monte Carlo simulations.
    Args:
        data (dict): Includes scenarios with base cash flows, growth mean, and standard deviation.
    Returns:
        list: Results for each scenario.
    """
    scenarios = data['scenarios']
    results = []

    for scenario in scenarios:
        simulated_cash_flows = []
        for _ in range(1000):  # Monte Carlo iterations
            growth_rate = np.random.normal(scenario['growth_mean'], scenario['growth_std'])
            simulated_cash_flows.append(scenario['base_cash_flow'] * (1 + growth_rate))

        results.append({
            "scenario_name": scenario['name'],
            "mean_cash_flow": np.mean(simulated_cash_flows),
            "std_cash_flow": np.std(simulated_cash_flows),
            "simulated_cash_flows": simulated_cash_flows
        })

    return results
