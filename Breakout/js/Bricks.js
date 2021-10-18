/*

    N220 Section 26446
    Michael Marckwordt
    Week 15 Lecture
    April 29, 2021

*/

/*
    Bricks.js
    Sets properties of a brick.
*/

class Bricks {

    constructor(x, y, w, h, color) {    // properties of the bricks.
        
        this._xCoord = x;               // x-coord attribute.
        this._yCoord = y;               // y-coord attribute.
        this._width = w;                // width attribute.
        this._height = h;               // height attribute.
        this._color = color;            // color attribute.

    }

    get xCoord() {
        return this._xCoord;        // read x-coord.
    }

    get yCoord() {
        return this._yCoord;        // read y-coord.
    }

    get width() {
        return this._width;         // read width.
    }

    get height() {
        return this._height;        // read height.
    }

    get color() {
        return this._color;         // read color.
    }

}