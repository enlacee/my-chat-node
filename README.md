# my-chat-node

 application create with : nojeJS, Express, socket.io
 chat basic on Node (conection, TCP and HTTP)

## Install Express Generator (01) (good)
Use the application generatot tool, for quickly create a application skeleton.

    $ npm install express-generator -g

Display help command option with the -h option:

    $ express -h

Create yor app

    $ express myapp

The install dependencies

    $ cd myapp
    $ npm install


## Create App CHAT nodeJS, Expres

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
    npm install --save ejs


## Installing APP in localhost:

    $ cd myapp
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



## Image reference

![image app chat](https://github.com/enlacee/my-chat-node/blob/master/docs/my-chat-node.jpg)