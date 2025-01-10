import numpy as np

def run_monte_carlo(data):
    initial_investment = data['initial_investment']
    mean_return = data['mean_return']
    std_dev = data['std_dev']
    num_periods = data['num_periods']
    num_simulations = data['num_simulations']

    simulations = []
    for _ in range(num_simulations):
        returns = np.random.normal(mean_return, std_dev, num_periods)
        portfolio_value = initial_investment + np.sum(returns)
        simulations.append(portfolio_value)

    return {
        "simulations": simulations,
        "average_return": np.mean(simulations),
        "std_dev_return": np.std(simulations)
    }
