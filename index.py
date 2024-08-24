from flask import Flask,render_template,url_for

app = Flask(__name__,template_folder='templates',static_folder='static',static_url_path='/')

@app.route('/')
@app.route('/home')
def home():
    return render_template('portfolio.html')
@app.route('/about')
def about():
    return render_template('poAbout.html')
@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ =='__main__':
    app.run(host='127.0.0.1',port=5555,debug=True)