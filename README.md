## Install Express Generator (01) (good)
Use the application generatot tool, for quickly create a application skeleton.

    $ npm install express-generator -g

Display rhe command option with the -h option:

    $ express -h

Create yor app

    $ express myapp

The install dependencies
    $ cd myapp
    $ npm install


## Installing Expres in your app
First to create a directory

    $ mkdir myapp
    $ cd myapp

create package.json

    npm init

Install all depencies (ref package.json) si ya tienes configurado las 
los paquetes y las versiones.

    npm install

Install only Express in the app directory (intall dependencies list)
version recomendada (para esta app)

    npm install --save express@4.10.2
    npm install --save socket.io


## Installing APP

    $ cd app
    $ npm install



### BUG : fix resoult with JADE

In you project Express  in the file : /views/layout.jade
set to :
    
    doctype html
    html
      head
        title= title
        link(rel='stylesheet', href='/stylesheets/style.css')
      body!= body