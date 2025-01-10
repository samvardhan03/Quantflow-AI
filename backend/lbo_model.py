import numpy as np
import pandas as pd

def run_lbo_model(data):
    initial_debt = data['initial_debt']
    initial_equity = data['initial_equity']
    cash_flows = np.array(data['cash_flows'])
    interest_rate = data['interest_rate']
    exit_multiple = data['exit_multiple']

    equity_values = []
    debt = initial_debt
    equity = initial_equity

    for cash_flow in cash_flows:
        repayment = min(debt, cash_flow)
        debt -= repayment
        equity += repayment
        equity_values.append(equity + debt * (1 + interest_rate) * (exit_multiple - 1))

    return {
        "equity_values": equity_values,
        "final_debt": debt,
        "final_equity": equity
    }
