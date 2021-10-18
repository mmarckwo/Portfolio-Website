/*

    N220 Section 26446
    Michael Marckwordt
    Week 15 Lecture
    April 29, 2021

*/

"use strict";

const WindowSettings = {        // set and change window settings here.

    width: 700,                 // window width.
    height: 600,                // window height.
    background: "#d6ffe2",      // background color.
    div: "breakoutDiv",         // div to attach to.

}

const GameData = {              // track and maintain game information.

    paddle: "",                 // track the paddle.
    ball: "",                   // track the ball.

    bricks: [],                 // hold an array of all the bricks.
    rows: 5,                    // number of rows for the bricks.
    columns : 7,                // number of columns for the bricks.

    colors: ["#85D629", "#29D6D0", "#7A29D6", "#D6292F"],   // list of predetermined colors.
    score: 0,                                               // score count.
    lives: 3,                                               // lives count.
    gameCondition: "playing",                               // game condition, if it's over or not.

}

function setup() {

    let windowW = WindowSettings.width;         // set the width of the window to a variable.
    let windowH = WindowSettings.height;        // set the height of the window to a variable.

    let bDiv = createCanvas(windowW, windowH);  // make a canvas the size of the window.
    stroke("black");                            // set stroke to black.
    ellipseMode(RADIUS);                        // set how ellipses are made.
    textSize(32);                               // set font size of 32.
    bDiv.parent(WindowSettings.div);            // attach canvas to breakoutDiv.

    GameData.paddle = new Paddle((windowH - 100), 100, 20, "white", windowW, windowH);  // make a paddle with these attributes.

    GameData.ball = new Ball((windowH - 200), 14, "blue", windowW, windowH);            // make a ball with these attributes.

    let rows = GameData.rows;               // number of rows to make.
    let columns = GameData.columns;         // number of columns per row.

    for (let i = 0; i < rows; i++) {                                                    // for each row,
        for (let o = 0; o < columns; o++) {                                             // for each column,
            let width = 75;                                                             // set width.
            let height = 20;                                                            // set height.
            let xCoord = (width * o) + (Math.round((windowW/2)-((width/2)*columns)));   // set x-coordinate.
            let yCoord = (height * i) + 50;                                             // set y-coordinate.
            let color = random(GameData.colors);                                        // set random color from list.

            let brick = new Bricks(xCoord, yCoord, width, height, color);               // make a new brick with the assigned attributes.
            GameData.bricks.push(brick);                                                // add it to the brick list.
        }
    }

}

function draw() {

    if (GameData.gameCondition == "playing") {              // run the game as long as it's not ended.
        if (GameData.lives >= 0) {                          // play the game while the player still has lives remaining.

            background(WindowSettings.background);          // set background to color.
            
            PaddleControl(GameData.paddle);                 // control the paddle with the left or right arrow key.
            DrawPaddle(GameData.paddle);                    // draw the paddle after moving it.

            ObjectHit(GameData.ball, GameData.paddle);      // check if the ball hit the paddle.

            for (let i = 0; i < GameData.bricks.length; i++) {              // for each existing brick,
                ObjectHit(GameData.ball, GameData.bricks[i], "brick", i);   // check if the ball hit it.

                try {
                    DrawBrick(GameData.bricks[i]);      // draw every existing brick.
                }
                catch(error) {
                    // do nothing. this prevents the closest brick to the right from flickering when the closest one to the left gets destroyed.
                }  
            }

            BallLose(GameData.ball);        // check if the ball hit the bottom of the screen.
            MoveBall(GameData.ball);        // move and draw the ball.

            DrawScore();                    // draw the score.
            DrawLives();                    // draw the lives counter.

            CheckWin(GameData.bricks);      // check if all the bricks have been destroyed.

        }

        if (GameData.lives < 0) {                       // if the player loses all lives,
            background(WindowSettings.background);      // clear the background.
            DrawGameOver();                             // show the game over screen.
        }
    }
    
    if (GameData.gameCondition == "win") {          // if the game has been won,
        background(WindowSettings.background);      // clear the background.
        DrawWinScreen();                            // show the win screen.
    }
    
}

function PaddleControl(paddle) {        // control the paddle.

    if (keyIsDown(LEFT_ARROW)) {        // if left arrow is pressed,
        paddle.xCoord -= 5;             // move left 5 pixels.
    }

    if (keyIsDown(RIGHT_ARROW)) {       // if right arrow is pressed,
        paddle.xCoord += 5;             // move right 5 pixels.
    }

}

function MoveBall(ball) {               // move the ball according to its speed.

    ball.xCoord += ball.xSpeed;         // move the ball left or right depending on its x-speed.
    ball.yCoord += ball.ySpeed;         // move the ball up or down depending on its y-speed.

    fill(ball.color);                                               // get the ball's color.
    ellipse(ball.xCoord, ball.yCoord, ball.radius, ball.radius);    // draw the ball.

}

function ObjectHit(ball, object, type, index) {

    let objectHit = "false";                                // track if an object was hit.

    let ballY = ball.yCoord + ball.radius;                  // get the bottom side of the ball.
    let ballX = ball.xCoord - ball.radius;                  // get the left side of the ball.

    let objectLeft = object.xCoord - (ball.radius * 2);     // get the left side of the object with the ball's radius.
    let objectRight = object.xCoord + object.width          // get the right side of the object.

    let objectBottom = object.yCoord + object.height + (ball.radius * 2);   // get the bottom side of the object with the ball's radius.

    if ((ballY == object.yCoord && (ballX >= objectLeft && ballX <= objectRight)) && ball.ySpeed > 0) {     // top side collision.
        ball.ySpeed *= -1;                                                                                  // flip the ball's y-direction if hit.
        objectHit = "true";                                                                                 // notify that an object was hit.
    }

    if ((ballY == objectBottom && (ballX >= objectLeft && ballX <= objectRight)) && ball.ySpeed < 0) {      // bottom side collision.
        ball.ySpeed *= -1;                                                                                  // flip the ball's y-direction if hit.
        objectHit = "true";                                                                                 // notify that an object was hit.
    }

    if ((ballY > object.yCoord && ballY < objectBottom) && ballX >= objectLeft && ballX <= objectRight - object.width) {    // left side collision.
        if (ball.xSpeed > 0) ball.xSpeed *= -1;                      // if the ball is moving right as it hits the left side, flip its x-direction.
        ball.xCoord = objectLeft + ball.radius;                      // push the ball to the left side of the object (prevent getting locked inside paddle).
        objectHit = "true";                                          // notify that an object was hit.
    }

    if ((ballY > object.yCoord && ballY < objectBottom) && ballX >= objectLeft + object.width && ballX <= objectRight) {   // right side collision.
        if (ball.xSpeed < 0) ball.xSpeed *= -1;                      // if the ball is moving left as it hits the right side, flip its x-direction.
        ball.xCoord = objectRight + ball.radius;                     // push the ball to the right side of the object (prevent getting locked inside paddle).
        objectHit = "true";                                          // notify that an object was hit.
    }

    if (type == "brick" && objectHit == "true") {       // if an object that was hit was a brick,
        GameData.bricks.splice(index, 1);               // remove the brick,
        GameData.score += 100;                          // update the score.
    }

}

function BallLose(ball) {
    
    let ballY = ball.yCoord + ball.radius;              // get y-position of ball considering the radius.
    let resetX = Math.round(WindowSettings.width/2);    // get the center of the screen.
    let resetY = WindowSettings.height - 200;           // get 200 pixels from the bottom of the screen.

    if (ballY >= WindowSettings.height) {   // if the ball touches the bottom of the screen,
        ball.xCoord = resetX;               // reset it back to its horizontal starting position,
        ball.yCoord = resetY;               // reset it back to its vertical starting position,
        GameData.lives -= 1;                // decrease the lives counter by 1.
    }

}

function DrawPaddle(paddle) {           // draw the paddle to its color and position.

    fill(paddle.color);                                                 // get the paddle's color.
    rect(paddle.xCoord, paddle.yCoord, paddle.width, paddle.height);    // draw the paddle.

}

function DrawBrick(brick) {             // draw a brick to its color and position.

    fill(brick.color);                                              // get the brick's color.
    rect(brick.xCoord, brick.yCoord, brick.width, brick.height);    // draw the brick.

}

function DrawScore() {                  // show the score as text.

    fill("black");                                                      // set black text.
    text("Score: " + GameData.score, 20, WindowSettings.height - 20);   // display text of the score at the bottom left corner.

}

function DrawLives() {                  // show the number of lives as text.

    fill("black");                                                                              // set black text.
    text("Lives: " + GameData.lives, WindowSettings.width - 125, WindowSettings.height - 20);   // display text of the score at the bottom right corner.

}

function CheckWin(bricks) {                 // check if the game has been won.

    if (bricks.length == 0){                // if all the bricks have been destroyed,
        GameData.gameCondition = "win";     // set the game condition to "win".
    }

}

function DrawGameOver() {                           // game over screen.

    let centerH = WindowSettings.width / 4;         // set text positioning according to screen width.
    let centerV = WindowSettings.height / 2;        // set text positioning according to screen height.

    fill("black");                                              // set black text.
    textSize(50);                                               // set font size of 50.
    text("Game Over", centerH, centerV - 20);                   // show this text.
    textSize(32);                                               // set font size of 32.
    text("Score: " + GameData.score, centerH, centerV + 20);    // show the final score.

}

function DrawWinScreen() {                          // win screen.

    let centerH = WindowSettings.width / 4;         // set text positioning according to screen width.
    let centerV = WindowSettings.height / 2;        // set text positioning according to screen height.

    let lifeBonus = GameData.lives * 100;           // add a bonus to the score according to the player's remaining number of lives.

    fill("black");                                              // set black text.
    textSize(50);                                               // set font size of 50.
    text("You win!", centerH, centerV - 20);                    // show this text.
    textSize(32);                                               // set font size of 32.
    text("Life bonus: " + lifeBonus, centerH, centerV + 20)     // show life bonus score number.
    text("Final Score: " + (GameData.score + lifeBonus), centerH, centerV + 60);    // show the final score.

}