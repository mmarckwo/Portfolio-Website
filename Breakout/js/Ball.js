
/*
    Ball.js
    Set and manages properties of the ball and keeps it within the window's boundaries.
*/

class Ball {

    constructor(y, r, color, windowW, windowH) {    // properties of the ball.

        this._xCoord = Math.round((windowW/2));     // start the ball at the center of the window.
        this._yCoord = y;                           // set the y-coordinate to the given attribute.
        this._radius = r;                           // set the radius to the given attribute.
        this._color = color;                        // set the color to the given attribute.
        this._xSpeed = 2;                           // set ball x-speed.
        this._ySpeed = -2;                          // set ball y-speed.

        this._windowWidth = windowW;                // read the width of the window.
        this._windowHeight = windowH;               // read the height of the window.

    }

    get xCoord() {
        return this._xCoord;            // read x-coord.
    }

    get yCoord() {
        return this._yCoord;            // read y-coord.
    }

    get radius() {
        return this._radius;            // read radius.
    }

    get color() {
        return this._color;             // read color.
    }

    get xSpeed() {
        return this._xSpeed;            // read x-speed.
    }

    get ySpeed() {
        return this._ySpeed;            // read y-speed.
    }

    set xSpeed(value) {
        this._xSpeed = value;           // set x-speed to value.
    }

    set ySpeed(value) {
        this._ySpeed = value;           // set y-speed to value.
    }

    set xCoord(value) {

        if (value <= this._radius) {            // if the ball touches the left side,
            this._xSpeed *= -1;                 // flip the ball's x-direction.
            value = this._radius;               // keep the ball within the screen.
        }

        if (value >= this._windowWidth - this._radius){     // if the ball touches the right side,
            this._xSpeed *= -1;                             // flip the ball's x-direction.
            value = this._windowWidth - this._radius;       // keep the ball within the screen.
        }

        this._xCoord = value;       // set the x-coordinate of the ball to the value.
    }

    set yCoord(value) {

        if (value <= this._radius) this._ySpeed *= -1;                          // check if the ball touches the top side, and flip the y-direction if so.
        if (value >= this._windowHeight - this._radius) this._ySpeed *= -1;     // check if the ball touches the bottom side, and flip the y-direction if so.

        this._yCoord = value    // set the y-coordinate of the ball to the value.
    }

}