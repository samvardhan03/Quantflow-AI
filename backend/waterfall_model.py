import numpy as np
import pandas as pd

def run_waterfall_model(data):
    # Process input data
    capital_calls = np.array(data['capital_calls'])
    returns = np.array(data['returns'])
    carried_interest = data['carried_interest']
    
    # Calculate distributions
    lp_distribution = np.cumsum(capital_calls * returns * (1 - carried_interest))
    gp_distribution = np.cumsum(capital_calls * returns * carried_interest)
    total_distribution = lp_distribution + gp_distribution

    # Prepare output
    return {
        "lp_distribution": lp_distribution.tolist(),
        "gp_distribution": gp_distribution.tolist(),
        "total_distribution": total_distribution.tolist()
    }
