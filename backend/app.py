from flask import Flask, request
import subprocess
import json
import os

app = Flask(__name__, static_folder='../build', static_url_path='/')


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

@app.route('/api/wordl_guess', methods=['POST', 'OPTIONS'])
def wordl_guess():

  data = request.get_data()

  if(data):
    # Get the wordle guesses the from request
    colors = request.get_json()['letters']
    letters = request.get_json()['colors']
    # Run the Python file and pass the argument as a command line argument  
    subprocess.run(['python', './wordle.py',json.dumps([colors,letters])])



  # Read the output from the file
  with open('./output.txt', 'r') as f:
    output = f.read()

  return output


if __name__=="__main__":
  print(os.getcwd())
  app.run();