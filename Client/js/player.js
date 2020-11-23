class Player{
    constructor(name, sprite, playerX, playerY){
        health = 100;
        _name = name;
        _sprite = sprite;
        _playerX = playerX;
        _playerY = playerY;
    }

    get playerX(){
        return this._playerX;
    }

    get playerY(){
        return this._playerY;
    }

    get playerName(){
        return this._name;
    }

    get sprite(){
        return this._sprite;
    }

    get health(){
        return this._health;
    }

    setPlayerName(input){
        _name = input;
    }

    setPlayerSprite(input){
        _sprite = input;
    }

    setPlayerX(input){
        _playerX = input;
    }

    setPlayerY(input){
        _playerY = input;
    }

    damage(input){
        this.health = this.health - input;
        return this.health;
    }

    hidePlayerSprite(){
        this._sprite.style.display = "none";
    }

    hidePlayerName(){
        this._name.style.display = "none";
    }

    showPlayerSprite(){
        this._sprite.style.display = "inline-block";
    }

    question(){
        this._sprite.style.position = "absolute"
    }
}