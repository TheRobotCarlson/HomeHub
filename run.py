from flask import Flask, render_template, jsonify, send_from_directory
from random import *
from flask_cors import CORS
import requests
from os import listdir
from os.path import isfile, join

url = ""
app = Flask(__name__,
            static_folder = "./dist",
            template_folder = "./dist")
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('./dist/js', path)

@app.route('/css/<path:path>')
def send_js(path):
    return send_from_directory('./dist/css', path)

@app.route('/api/images/<path:path>')
def send_image(path):
    photos_dir = "./dist/photos"
    
    return send_from_directory(photos_dir, path)

@app.route('/api/images')
def image_list():
    photos_dir = "./dist/photos"
    photos_api = "/api/images/"
    images = [photos_api + f for f in listdir(photos_dir) if isfile(join(photos_dir, f))]
    response = {
        'imageList': images
    }
    return jsonify(response)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    if app.debug:
        return requests.get('http://localhost:8080/{}'.format(path)).text
    return render_template("index.html")
