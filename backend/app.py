from flask import Flask, request, jsonify
from models.waterfall_model import run_waterfall_model
from models.lbo_model import run_lbo_model
from models.monte_carlo import run_monte_carlo
from models.ai_agent import AIReActAgent

app = Flask(__name__)

# Routes
@app.route('/waterfall', methods=['POST'])
def waterfall():
    data = request.json
    result = run_waterfall_model(data)
    return jsonify(result)

@app.route('/lbo', methods=['POST'])
def lbo():
    data = request.json
    result = run_lbo_model(data)
    return jsonify(result)

@app.route('/monte_carlo', methods=['POST'])
def monte_carlo():
    data = request.json
    result = run_monte_carlo(data)
    return jsonify(result)

@app.route('/ai_agent', methods=['POST'])
def ai_agent():
    query = request.json.get('query')
    agent = AIReActAgent()
    result = agent.handle_query(query)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
