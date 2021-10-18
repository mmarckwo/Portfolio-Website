
/*
    Paddle.js
    Makes and controls the paddle.
*/

class Paddle {

    constructor(y, w, h, color, windowW, windowH) {     // properties of the paddle.

        this._xCoord = Math.round((windowW/2)-(w/2));   // set starting x-position of paddle.
        this._yCoord = y;                               // set starting y-position of paddle.
        this._width = w;                                // set width of paddle.
        this._height = h;                               // set height of paddle.
        this._color = color;                            // set color of paddle.
        
        this._windowWidth = windowW;                    // read window's width.
        this._windowHeight = windowH;                   // read window's height.

    }

    get xCoord() {
        return this._xCoord;            // read x-coord.
    }

    get yCoord() {
        return this._yCoord;            // read y-coord.
    }

    get width() {
        return this._width;             // read width.
    }

    get height() {
        return this._height;            // read height.
    }

    get color() {
        return this._color;             // read color.
    }

    set xCoord(value) {

        let rightSide = this._windowWidth - this._width     // get the right edge limit for the paddle.

        if (value > rightSide) value = rightSide;           // paddle cannot move beyond the right edge of the window.
        if (value < 0) value = 0;                           // paddle cannot move beyond the left edge of the window.

        this._xCoord = value;       // set the x-coord to the value.

    }

}