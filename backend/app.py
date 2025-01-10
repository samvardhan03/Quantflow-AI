from flask import Flask, request, jsonify
from waterfall_model import calculate_waterfall
from lbo_model import calculate_lbo
from scenario_analysis import run_scenarios
from data_loader import load_datasets

app = Flask(__name__)

@app.route('/waterfall', methods=['POST'])
def waterfall():
    """API endpoint for waterfall distribution."""
    data = request.json
    result = calculate_waterfall(data)
    return jsonify(result)

@app.route('/lbo', methods=['POST'])
def lbo():
    """API endpoint for LBO modeling."""
    data = request.json
    result = calculate_lbo(data)
    return jsonify(result)

@app.route('/scenarios', methods=['POST'])
def scenarios():
    """API endpoint for scenario analysis."""
    data = request.json
    result = run_scenarios(data)
    return jsonify(result)

@app.route('/datasets', methods=['GET'])
def datasets():
    """API endpoint to load and return dataset summaries."""
    datasets = load_datasets()
    return jsonify(datasets)

if __name__ == '__main__':
    app.run(debug=True)
