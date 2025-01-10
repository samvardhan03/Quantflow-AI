import pandas as pd

def load_datasets():
    """
    Load datasets and return summaries.
    Returns:
        dict: Dataset summaries.
    """
    datasets = {}

    # Example: Load historical returns
    datasets['historical_returns'] = pd.read_excel("../datasets/histretSP.xls").head().to_dict()

    # Example: Load country premiums
    datasets['country_premiums'] = pd.read_excel("../datasets/ctryprem.xlsx").head().to_dict()

    # Example: Load insider holdings
    datasets['insider_holdings'] = pd.read_excel("../datasets/insholdGlobal.xls").head().to_dict()

    return datasets
