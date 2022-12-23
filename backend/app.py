from flask import Flask, request
import subprocess
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
CORS(app, support_credentials=True)


@cross_origin(supports_credentials=True)
@app.route('/run_python_file', methods=['POST', 'OPTIONS'])
def run_python_file():

  data = request.get_data()

  if(data):
    # Get the wordle guesses the from request
    colors = request.get_json()['letters']
    letters = request.get_json()['colors']
    # Run the Python file and pass the argument as a command line argument  
    subprocess.run(['python', './wordle.py',json.dumps([colors,letters])])



  # Read the output from the file
  with open('output.txt', 'r') as f:
    output = f.read()

  return output


if __name__=="__main__":

  app.run(debug=True);