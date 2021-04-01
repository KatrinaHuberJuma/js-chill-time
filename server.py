from flask import Flask, render_template, request
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
    result = random.choice(CSS_CLASSNAMES)

    print("*"*20)
    print(f"\nresult = {result}\n")
    print("*"*20)

    return result

@app.route("/post_name", methods=["POST"])
def post_name():

    user_name = request.form.get("cupcakes")

    print("*"*20)
    print(f"\nHello {user_name}, I'm in the post route\n")
    print("*"*20)

    return user_name

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")