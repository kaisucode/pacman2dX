import json
import time

from flask import Flask, render_template, request

app = Flask(__name__)
mapData = []

@app.route('/index')
@app.route('/')
def index():
  return render_template('index.html')

@app.route('/getMap', methods=('GET',))
def stream():
    return json.dumps(mapData)

if __name__ == '__main__':
    with open('mapGeneration/maze.json', 'r') as f:
        mapData = json.load(f)
    app.run(debug=True)
