# Restaurant Reviews: Stage 1
 This is a web-based application created as a project for Udacity FEND Nanodegree.
## Table of Contents
 * [Getting started](#Getting-started)
 * [Live Version ](#Live-Version )
 * [About-Project ](#About-Project )
 * [Project-Dependencies](#Project-Dependencies)
 

## Getting-started
### How to run Application ?
#### Run Application Locally ####
 1. Download as .zip file or clone this project:.
     ```
     https://github.com/ebmhu2/mws-restaurant-stage-1.git
     ```
 2. In this folder, start up a simple HTTP server to serve up the site files on your local computer
 3. In a terminal, check the version of Python you have: `python -V`
     - If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.)
     - For Python 3.x, you can use `python3 -m http.server 8000`. 
     - If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
 4. With your server running, visit the site: `http://localhost:8000`.
#### Live-Version ####
https://ebmhu2.github.io/
#### About-Project ####
 restaurant reviews is responsive website on different sized displays and accessible for screen reader use.
 and uses service worker to cache website visited pages letting users view those pages and give users 
 a better experience in cases lie-fi, low connection, offline faster loading for pages in low 
 and high connection cases.
## Project-Dependencies
 * Map Api 
  ```
    <link rel="stylesheet" href="//normalize-css.googlecode.com/svn/trunk/normalize.css"/>
    <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/v0.46.0/mapbox-gl.css" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css"
              integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ=="
              crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js"
                integrity="sha512-/Nsx9X4HebavoBvEBuyp3I7od5tA0UzAxs+j83KgC8PU0kgB4XiK4Lfe4y4cgBtaRJQEIFCW+oC506aPT2L1zw=="
                crossorigin=""></script>
  ```
 * Icons
  ```
    <link rel="stylesheet prefetch" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/v4-shims.css">
  ```