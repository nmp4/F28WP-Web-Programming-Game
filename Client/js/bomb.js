class Bomb{
    constructor(bomb, bombX, bombY){
        _bomb = bomb;
        _bombX = bombX;
        _bombY = bombY;
    }

    get bombX(){
        return this._bombX;
    }

    get bombY(){
        return this._bombY;
    }

    get bomb(){
        return this._bomb;
    }

    
}