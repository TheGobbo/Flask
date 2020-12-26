from flask import Flask, render_template, request
app = Flask(__name__)

names = []

@app.route("/")
def index():
    paragraph = "Youkoso, Kami no Tou he!"
    return render_template("index.html", paragraph=paragraph)


@app.route("/submits", methods=["POST"])
def submits():
    name = request.form.get("usernames")
    if (name not in names): 
        names.append(name)
    return render_template("submits.html", names=names)



