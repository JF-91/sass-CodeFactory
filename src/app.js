const express = require('express');


class App{

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000
        this.path = '/'

        this.middlewares();

    }

    middlewares(){

        this.app.use(express.static('public'))
    }


    listener(){
        this.app.listen(this.port, ()=>{
            console.log(`server runn on port ${this.port}`);
        })
    }


}


module.exports = App