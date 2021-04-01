from flask import Flask, render_template
import random

app = Flask(__name__)

CSS_CLASSNAMES = ["green-bg", "red-text", "mono-font"]

@app.route("/")
def show_index():
    # return "Heya"
    return render_template("index.html")
    # render template returns a string


@app.route("/get_style/api")
def return_stylename():
    # flask view functions must always return strings
    return random.choice(CSS_CLASSNAMES)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")