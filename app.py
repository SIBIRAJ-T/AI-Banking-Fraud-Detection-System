from flask import Flask
from routes.auth import auth_routes
from routes.transaction import transaction_routes
from routes.predict import predict_routes

app = Flask(__name__)

app.register_blueprint(auth_routes)
app.register_blueprint(transaction_routes)
app.register_blueprint(predict_routes)

if __name__ == "__main__":
    app.run(debug=True)