class AIReActAgent:
    def __init__(self):
        self.knowledge_base = {
            "waterfall": "This is the Private Equity Waterfall model.",
            "lbo": "This is the Leveraged Buyout model.",
            "monte_carlo": "This is the Monte Carlo Simulation model."
        }

    def handle_query(self, query):
        for key, response in self.knowledge_base.items():
            if key in query.lower():
                return {"response": response}
        return {"response": "I am unsure how to respond to that. Can you clarify?"}
