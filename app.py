from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

ENV = 'prod'

if ENV == 'dev':
    app.debug = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost/sentient'
else:
    app.debug = False
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://pbytdskogtbfnn:56daeb941f04ec560422cef656bd3e62ddd11c39c201e503f349bbe2eb6b9ea8@ec2-54-152-185-191.compute-1.amazonaws.com:5432/d5k7jhm72oaig5'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


class Consultation(db.Model):
    __tablename__ = 'consultation'
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(200))
    lastname = db.Column(db.String(200))
    email = db.Column(db.String(200))
    company = db.Column(db.String(200))
    department = db.Column(db.String(200))
    role = db.Column(db.String(200))
    details = db.Column(db.Text)

    def __init__(self, firstname, lastname, email, company, department, role, details):
        self.firstname = firstname
        self.lastname = lastname
        self.email = email
        self.company = company
        self.department = department
        self.role = role
        self.details = details


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/admin')
def admin():
    return render_template('admin.html')


@app.route('/consultation', methods=['POST'])
def consultation():
    if request.method == 'POST':
        firstname = request.form['fname']
        lastname = request.form['lname']
        email = request.form['email']
        company = request.form['company']
        department = request.form['department']
        role = request.form['role']
        details = request.form['details']

        if firstname and lastname and email and company and department and role == '':
            return render_template('index.html', message='Please fill in the required fields *')

        data = Consultation(firstname, lastname, email, company, department, role, details)
        db.session.add(data)
        db.session.commit()
        return render_template('thanks.html')


if __name__ == '__main__':
    app.run()
