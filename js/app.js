let main = `<div class="header2">
<h1>Hello</h1>
<p>Welcome to my site.</p>
</div>
<div>
<p class="text">
    My name is Michael. I am a developer who specializes in designing and creating games. 
    I'm also working on obtaining a multi-device web certificate. 
    It means that I can develop my own websites. 
    <br>My education experience consists of being a student at Indiana University Purdue University Indianapolis at the School of Informatics and Computing. 
    <br><br>The navigation at the top will show you some of the stuff I've made. 
    <br>I have experience with Unreal Engine 4, Unity, and JavaScript. 
    <br>I have an itch.io page. There isn't much on it right now, but I'll post my content there when I have finished game projects that are ready to present. 
    <br><a href="https://borkens.itch.io" target="_blank"><b>itch.io Page</b></a>
    <br><br>This website was designed and developed by me. Again, I know some HTML and CSS. 
    <br>Website Repo: <a href="https://github.com/mmarckwo/Portfolio-Website" target="_blank"><b>https://github.com/mmarckwo/Portfolio-Website</b></a>
</p>
</div>`;

let projects = `<div class="header5">
<h1>Projects</h1>
<p>Some stuff that I've worked on.<br>Updates over time.</p>
</div>
<div>
<div class="text" id="projects">
    <div class="split-row">
        <div class="icon-image">
            <a id="MoA" href="#">
                <img src="icon-images/map-crop.png"></img>
                <div class="img-txt">Mix of Ages</div>
            </a>
        </div>
        <div class="icon-image">
            <a id="breakout" href="#">
                <img src="icon-images/breakout.png">
                <div class="img-txt">Breakout</div>
            </a>
        </div>
    </div>
    <div class="split-row">
        <div class="icon-image">
            <a id="firstUE4" href="#">
                <img src="icon-images/1ue4.png"></img>
                <div class="img-txt">First Unreal Engine 4 Project</div>
            </a>
        </div>
        <div class="icon-image">
            <a id="personalUE4" href="#">
                <img src="icon-images/pue4.png"></img>
                <div class="img-txt">Personal Unreal Engine 4 Project</div>
            </a>
        </div>
    </div>
    <div class="split-row">
        <div class="icon-image">
            <a id="multiplayerUnity" href="#">
                <img src="icon-images/group-unity.png"></img>
                <div class="img-txt">Multiplayer Unity Game</div>
            </a>
        </div>
        <div class="icon-image">
            <a id="spellgrounds" href="#">
                <img src="icon-images/spellgrounds.png"></img>
                <div class="img-txt">Spellgrounds (Multiplayer)</div>
            </a>
        </div>
    </div>
    <div class="split-row">
        <div class="icon-image">
            <a id="grimPickings" href="#">
                <img src="icon-images/gp.png"></img>
                <div class="img-txt">Grim Pickings (WIP)</div>
            </a>
        </div>
        <div class="icon-image">
            <a id="imcuPrototype" href="#">
                <img src="icon-images/board-preview.png"></img>
                <div class="img-txt">IMCU Board Game (Prototype)</div>
            </a>
        </div>
    </div>
</div>`;

let design = `<div class="header6">
<h1>Design Journal</h1>
<p>Some ideas I have.</p>
</div>

<p class="text">
These are admittedly crude drawings, but hopefully they get the point across.
</p>

<div class="idea-image">
<img src="idea-images/den.png">
</div>
<p class="small-text">Outside in a desert.</p>
<p class="text">This shows the layout of an outdoor area and some items that can be collected in the game. I have more information about and a prototype of this project in the '<b>WIP UE4 Level</b>' tab.</p>

<div class="idea-image">
<img src="idea-images/boat.png">
</div>
<p class="small-text">Explore an ocean.</p>
<p class="text">This game would be about collecting parts of a raft to create your own section of a larger raft as a whole. Everyone would then come together to travel to different islands while working with one another. It's meant to be a relaxing and cozy experience.
<br>I plan to create this using GB Studio.</p>
</div>

<div class="idea-image">
<img src="idea-images/TrainNight.png">
</div>
<p class="small-text">A cheap overnight stay.</p>
<p class="text">The planned story of this game is that you're walking around late at night, and you need to find a place to stay. You come across a placed called the 'Subway Motel' and decide to check it out. Learning of its affordable and convenient price, you stay for the night. When you arrive to your 'room', you see why it was so cheap. Your room is a subway platform with a train that roars by every so often.
<br>The goal of this game is to balance your belongings onto your platform so that the train that comes by doesn't sweep your stuff away. Each time the train passes, a new round begins. More of your stuff gets added for each new round, so the challenge is to keep everything by the end of the game. 
<br>This game is based on a dream I had long ago.
</p>

<div class="idea-image">
<img src="idea-images/NoTalkCo-op.png">
</div>
<p class="small-text">Work together with limited communication abilities.</p>
<p class="text">The idea for this game is to have two players working together to overcome various challenges. The catch to this is that the players cannot communicate with traditional voice or text chat. They must use the provided in-game solutions, such as stickers to express emotions or ideas, or a rare whiteboard that a player can write on.</p>

<div class="idea-image">
<img src="idea-images/board-game.png">
</div>
<p class="small-text">A racing board game.</p>
<p class="text">A board game for 2-4 players. Players start on the lap space, then race to be the first to make 3 laps. Some spaces that are landed on give items that can boost the player or slow down other players. Players move by flicking a triangle on a device that vaguely resembles an RPM gauge. Players who get boosted get to flick an additional boost gauge, while players who are slowed down need to flick an additional drag gauge.</p>

<div class="idea-image">
<img src="idea-images/marble-racers.png">
</div>
<p class="small-text">Roll as fast as you can.</p>
<p class="text">Control a marble and get through the obstacle course as fast as you can. Compete with other players in the same race and try to get first place! Levels consist of floating tracks in a variety of environments. The above image takes place in the sky.</p>

<div class="idea-image">
<img src="idea-images/escape.png">
</div>
<p class="small-text">Exit before the danger becomes too great.</p>
<p class="text">Some accident occured at the facility you were visiting, and all that you know now is that you need to run. Each round may have a different path to take than the last one. Different alternative paths will be available randomly for added variety. Different events may occur too. The gameplay is expected to be fast paced with quick rounds.</p>

<div class="idea-image">
<img src="idea-images/pd.png">
</div>
<p class="small-text">Adventure together.</p>
<p class="text">Play with 2-4 players to accomplish various quests. Environments can take place either inside or outside. Inspired by classic The Legend of Zelda.</p>

<div class="idea-image">
<img src="idea-images/4p.png">
</div>
<p class="small-text">Learn your stories then get together.</p>
<p class="text">Each player plays as a character with their own introduction in the game. They'll each play the character's beginning story and levels, and at the end of it the players will run into each other and form a group. Then they begin to share their own story together in the game. They'll get assigned tasks to accomplish around the land (and even out of the land) by a group for some greater cause. This game can be played with 1-4 players. Some of the replayability comes from choosing a different character for each new game.</p>

<div class="idea-image">
<img src="idea-images/researcher.png">
</div>
<p class="small-text">A dangerous and isolated land.</p>
<p class="text">You are an intern who was sent off to investigate strange occurrences up in the north. Bizarre and dangerous worm-like creatures have begun appearing there, and scans of the area indicate that unknown devices have shown up too. Set off into a desolate land of ice and water, and discover the truth behind these new events. It's a precarious task someone as new as you, but none of the experienced researchers seem willing to do the job...</p>
</div>`;

let contact = `<div class="header4">
<h1>Contact</h1>
<p>Say hello.</p>
</div>
<div>
<p class="text">
    If you want to send me a message about something, you can email me at: 
    <br><b>michaelmarckwordt [at] gmail [dot] com</b> 
    <br>I'll get back to you as soon as I can.
</p>
</div>`;

let MoA = `<div class="header">
<h1>Mix of Ages</h1>
<p>A board game where you travel to the past to fight in a war by using weapons of the future.</p>
</div>

<div>
<p class="small-text">(This game was developed remotely during the COVID-19 pandemic, so physical assets do not exist.)</p>
<p class="text">
    Mix of Ages is a 4-player board game where players battle each other to prevent (or succeed in) the rewriting of history. <br>
    Players must defend their castle, claim spaces of land to use its resources, and strategically plan how to move their units and when to use their items.
</p>
</div>

<div class="image map-image">
<img src="images/map.png">
</div>
<p class="small-text">A map of the board.</p>
<p class="text">This game was developed by 3 people. 
<br>My role was the game designer. I worked with the writer and artist to make the gameplay comply with the story. 
<br><br>I developed how the game is played. The game's main mechanics involve: 
<ul>
    <li>Castles</li>
    <li>Land resources</li>
    <li>Player troops</li>
    <li>Card items</li>
</ul>
</p>
<p class="text">
Players attack and defend castles to keep them in the game. If a player's castle is destroyed, then the player is out. Castles begin with a lot of health, so it's unlikely for a player to immediately lose. Castles can be fortified to have better defense as the game progresses.
</p>
<p class="text">
Some spaces on the board contain resources that help the player who claimed the spot. Village spaces produce more units for the player, mines produce more money per round for the player, farms generate helpful items for the player to use, and airports, which were brought from the future, let a player travel from one area of the board to another quickly. 
<br>Players must use the right items to claim a space of land. Players who are trying to take over another player's claimed space can steal it by force. 
<br>One way to win the game is by having the most claimed spaces of land at the end of the game.
</p>
<p class="text">
Players have their own troops to control. They can divide their units however they want to move around the board. The larger a group, the stronger it is. Sometimes, though, it's best to split up. Players move their troops to attack castles or to claim spaces in the land. If a player moves all of their troops away from their castle, it leaves the castle defenseless. Players must think carefully about how they want to divide their units and where to position themselves.
</p>
<p class="text">
Card items are the items players have that they can use on their turn. Card items can be bought with money after every round. Certain card items can be made by combining two certain cards. These cards have various effects, so they can provide offense, defense, or health restoration. The items represented on the cards come from both the past and the future. Some cards feature swords, while others feature ray guns. While items from the future are much more powerful, they are also much more rare. It's up to you when the best time to use one is.
</p>

<div class="double-image">
<div class="image-area">
    <div class="cardcolors"><img src="images/cardcolors.png"></div>
    <div class="carditems"><img src="images/carditems.png"></div>
</div>
</div>
<p class="small-text">Cards are colored to match their type. Cards can be combined to make new cards too.</p>
<p class="text">Cards are color coded to represent the kind of item they have. Blue cards are for defense, green cards are for health restoration, red cards are for offense, and brown cards are for miscellaneous items.</p>
<p class="text">
The above image on the right shows three cards being combined to create a new card. Alcohol, rag, and strength cards can be fused to make a molotov card item. Many card items can only be obtained through fusing, so you're likely to discover a new combination for each new game. 
<br>A list of item combinations is available in the game.
</p>

<div class="image other-image">
<img src="images/pieces.png">
</div>
<p class="small-text">Coins, player tokens, and player flags.</p>
<p class="text">Players place tokens representing their side around the board to show where they have placed their troops. A player's flag is placed on a space that has been claimed by them. The amount of coins generated per round for a player depends on what spaces they have claimed, in addition to a base amount.</p>
</div>

<h1>Development</h1>
<p class="text">The game went through many iterations before it reached its final state. 
<br>The game's development lasted for about a month.
<br><br>Challenges I faced as the game designer include how to balance the game for each player, how player movement on the game board should work, and determining the winning conditions for a player.
</p>
<p class="text">
These issues were overcame through frequent testing and iterating. If some cards were more powerful than others, I would adjust the card appropriately. 
<br><br>The winning conditions were play tested to see if a player could unfairly win, and in the end the best results of winning were to either be the last player standing or by having the most spaced claimed spaces at the end of the game. That way, aggressive players won't be able to steal wins every game if there is more than one way to win.
<br><br>Deciding player movement was the most difficult part. I initially had it too complex by needing to consider the size of a group to determine how many spaces they could move, but in the end a simple dice roll was sufficient to stop it from being too confusing.
</p>`;

let breakout = `<div class="header3">
<h1>Breakout JS</h1>
<p>Breakout remade in p5.js</p>
</div>

<p class="text">
The colors generated for each brick is random every new round.
<br>Refresh the page to restart.
<br>Source code: <a href="https://github.com/mmarckwo/Portfolio-Website/tree/main/Breakout/js" target="_blank">https://github.com/mmarckwo/Portfolio-Website/tree/main/Breakout/js</a>
<br><br>Controls: Left Arrow and Right Arrow to move. 
<br>Click the button below to play in your browser!
</p>

<div id="breakoutDiv" class="breakoutDiv">
<a href="breakout.html"><button><b>Play</b></button></a>
</div>`;

let firstUE4 = `<div class="header4">
<h1>My First Level in UE4</h1>
<p>A basic and simple level.</p>
</div>

<p class="text">
    This was my first attempt at creating a game in Unreal Engine 4. Idea, design, and blueprinting were all from me. 
    <br>All of the sounds were taken from freesound.org. 
    <br>Boat model taken from an online resource.
</p>

<h1>Objective</h1>
<p class="text">
    You must launch the cannon before the falling meteor crashes into your home. 
    <br>Optionally, you can collect and clean moss along the way.
</p>

<h1>Story</h1>
<p class="text">
    You decided to buy a house in the middle of the ocean for some peace and quiet, and better yet, it was cheap! But why was it cheap? You learn that the house is situated on a spot that is prone to meteor impacts.
    <br>Fortunately, the house comes with an Anti-Meteor Cannon Defense System (AMCDS) installed. However, for security, you were too lazy to have to remember a 4-digit password, so you opted into having the cannon locked behind an obstacle course. It hasn't been used in some time, so some moss has grown on some areas.
    <br>You must reach the cannon before the time limit to save your house. Can you do it?
</p>

<h1>Video</h1>
<p class="text"><iframe width="560" height="315" src="https://www.youtube.com/embed/dF9oezMp63E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>`;

let personalUE4 = `<div class="header5">
<h1>Second UE4 Project (WIP)</h1>
<p>I don't know what to name it. 
<br>It'll be done eventually.</p>
</div>

<p class="text">
This is my personal project I'm making in Unreal Engine 4. I have a prototype complete. In terms of progress, most of the complex stuff is complete, while the easier functionality should not take too long to add. However, I still need to design and model the levels, so that will be the next big step. 
<br>Imported models and sprite assets were made by me.
<br><br>This project is currently on pause due to school. 
</p>

<h1>Story</h1>
<p class="text">
You are on a trip to the desert with your friends to see a rare red moon. As you arrive to the destination that's near a town, one of your friends tells you to retrieve some items from their car. When you open the door, something runs off with one of the items and scurries into a hole in a rock. You follow the creature in and discover what secrets hide under the town...
</p>

<h1>Features</h1>
<p class="text">
A short experience planned to consist of:
<ul>
    <li>A lighthearted story.</li>
    <li>2D characters.</li>
    <li>Small puzzles.</li>
    <li>Items such as:</li>
    <ul>
        <li>A sticky hand to grab distant items or activate distance switches.</li>
        <li>A scooter to move quickly.</li>
        <li>An umbrella to fall slowly.</li>
        <li>Spring shoes to jump high.</li>
    </ul>
    <li>And the usage of multiple items at once to combine their abilities.</li>
</ul>
</p>

<h1>Video (Prototype)</h1>
<p class="text">
Showing off character interaction functionality and a small objective being completed. 
<br>(Showcased text elements and textbox design are placeholders and will change.)
</p>
<p class="text"><iframe width="560" height="315" src="https://www.youtube.com/embed/wtcjAskzSvk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<h1>Video (Code)</h1>
<p class="text">
A scroll through the game's current actors and blueprinting.
</p>
<p class="text">
<iframe width="560" height="315" src="https://www.youtube.com/embed/2E_S2p02qyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p>`; 

let multiplayerUnity = `<div class="header7">
<h1>Multiplayer Unity Game</h1>
<p>3 players against 1.</p>
</div>

<div>
<p class="text">
This game was made by a team of 4 members (including myself). 
<br>It's a game where 3 players need to outrun and defend themselves from the 1 enemy player. 
The enemy player has to chase and catch the running players, but the running players can use traps and doors to slow the chasing player down. 
The buttons are only on one side of the door, so you're able to cut off players who are chasing you.
<br>The game was networked using Photon Engine. 
</p>

<h1>My Contribution</h1>
<p class="text">
I developed the doors in this game. Every door is tied to a button that opens and closes the door. 
The button is green when the door is open, and turns red when it's closed. 
The buttons and doors are networked so that the toggle occurs in every player's instance of the game; players can see other players opening and closing doors. 
<br><br>I also sourced all the audio in this game, both the sound effects and the music (though I did not implement them).
<br>The music is from <a href="https://incompetech.com/" target="_blank"><b>incompetech.com</b></a> 
and the sound effects were taken from <a href="https://freesound.org/" target="_blank"><b>freesound.org</b></a>
</p>

<h1>Showcase</h1>
<p class="text">
Gameplay footage. Again, the door functionality was made by me, and all of the sounds and music were found by me. 
<br>(Gameplay begins at 1:26. Also, my voice is not present in this. Commentary is provided by the other 3 team members.)
</p>
<p class="text"><iframe width="560" height="315" src="https://www.youtube.com/embed/L1-eNgiVVGk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
</div>`;

let spellgrounds = `<div class="header5">
<h1>Spellgrounds</h1>
<p>An online 2-player 1v1 arena battle.</p>
</div>

<div>
<p class="text">
This game was made primarily by me, in Unity, with some code contributions by another team member. 
<br>It's a game where two players battle each other with spells to defeat the other player. Players earn points by killing the other player or pushing them off the arena. The first player to 3 points wins. 
<br>Players can cast 3 different spells. 
<ul>
    <li>(Red) Attack Spell: A basic attack. Hit the other player to decrease their HP.</li>
    <li>(Light yellow) Impulse Spell: Pushes the hit player back with a strong force.</li>
    <li>(Blue) Speed Spell: Increase the hit player's speed. Use this to make the other player slip off with their gradually increasing speed.</li>
</ul>
The game's networking was done by using Photon Engine. 
</p>

<h1>My Work</h1>
<p class="text">
I created most of the player controller and the player camera. I also created the spells and their effects on the other player. The items in levels and the menus were made by me as well. The sky level that appears in the video below was created by me. I made my own simple models with Blender and imported them to make a basic arena level. 
<br>The online networking for the game was done by me. I had to adapt the game so that each player can host and join a room and control their own character. They're also able to attack the other player. The scoring system used in game is updated by both players and tells which player won and lost after one of them gets to three points. 
<br>I am responsible for a majority of the scripting in the game. 
<br><br>I also sourced and added all audio in the game, which includes sounds and music.
<br>The music is from <a href="https://incompetech.com/" target="_blank"><b>incompetech.com</b></a> 
and the sound effects were taken from <a href="https://freesound.org/" target="_blank"><b>freesound.org</b></a>

<br><br>
The scripts I made can be found here: 
<a href="https://github.com/mmarckwo/N330SpellgroundsReal/tree/main/Assets/script" target="_blank">
    <b>https://github.com/mmarckwo/N330SpellgroundsReal/tree/main/Assets/script</b>
</a>
</p>

<h1>Showcase</h1>
<p class="text">
Side-by-side gameplay footage of one player battling another player. I recorded this by myself by launching the game twice and letting both players join and play via networking. This video more shows off features rather than actual gameplay.
<br>(Audio comes from player on the left.)
</p>
<p class="text"><iframe width="560" height="315" src="https://www.youtube.com/embed/LgsJmsyl628" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
</div>`;

let grimPickings = `<div class="header2">
<h1>Grim Pickings (Work in Progress)</h1>
<p>A digital adaption of a class board game project.</p>
</div>

<div>
<p class="text">
Grim Pickings is a board game developed by a team of 14 students. There are groups dedicated to certain aspects of game development, and I am on the tech development team along with 3 other members. Our team is responsible for creating a digital version of the game so that it can be played on a large touchscreen table at a convention. However, we also wanted to do a bit more than that. We looked into experimental technology that could make for an enticing booth at the convention, and we found hand tracking tech from Ultraleap. We ordered a few hand tracking cameras (Leap Motion Controllers) and got to work implementing new tech into our game.

<h1>My Work</h1>
<p class="text">
I had to learn how to use a Leap Motion Controller with Unity. There are not many resources available online on how to use the controller in the way we wanted, so I had to thoroughly examine the official documentation for it and figure out how to read data from it in Unity. Once I got it working, I added a masked render texture to the UI so that players are able to see their own hands as the camera detects them. When the player needs to roll the dice, they can do a hand gesture to roll. When the player digs up a card from one of the card spots, they can do a hand gesture to pull the card into their inventory.
<br><br>I also added functionality for the player to pick up parts. It is not implemented into the main game yet, but in one of the videos below, you can see it working in a test scene. The button runs a function to pick a random part from a list of body parts and adds the associated image and stats onto the player. Body parts that are replaced have their stats replaced as well by the new part.
</a>

<p class="text">The scripting for the game isn't publicly available at this moment, but I can show a snippet of simple code that reads and uses hand tracking data.
<div class="general-image"><img src="images/hand-motion-code-example.png"></div>
</p>

<h1>Showcase (Hand Tracking)</h1>
<p class="text">
This video shows hand tracking functionality as explained above. Players can see their own hands when it is detected by the camera, and they can use hand gestures to roll the dice and to store cards into their inventory. The console in the video shows when hand gestures are being awaited for and when they are detected.
<br>(The game in the video is not complete yet, so there are some placeholder assets being used.)
</p>
<p class="text"><iframe width="560" height="315" src="https://www.youtube.com/embed/tJWRqrfRKTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<h1>Showcase (Body Picker)</h1>
<p class="text">
This short video shows a test scene for functionality for adding body parts onto the character. When the button is clicked, a random part is selected from a large list of body parts, the player recieves the part, reads what kind of body part is it, then adds it to the appropriate limb and adds up the total stats. 
<br>In the console, you can see the name of the body part, where on the body it goes, and the health, attack, and speed stats of that part. 
<br>Arms and legs are randomly assigned to either the left or right side.
<br>(The official art assets have not been created yet, so placeholder images are used instead.)
</p>
<p class="text"><iframe width="560" height="315" src="https://www.youtube.com/embed/iqGBCC2ivqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
</div>`;

let imcuPrototype = `<div class="header">
<h1>IMCU Board Game</h1>
<p>A digital board game for a credit union about financial literacy.</p>
</div>

<div>
<p class="text">
I worked in a team of 3 other members to create a prototype of a game for Indiana Members Credit Union (IMCU). This was my first time working with a real-world client. We communicated regularly with the client to come up with a game to suit their needs. They wanted an educational game to teach people around ages 18 - 25 financial literacy.
<br><br>What we came up with is a mobile app board game that can be played between 2 - 4 players. Players have to travel to the end of the board whilst making wise financial decisions, avoiding debt, and staying out of jail. Players have to manage their money between their savings and checking accounts and keep themselves safe from loan sharks and other scams. At some spots on the board, a player will receive a scenario card. The scenario card describes a scene and the player has to choose between actions to take for the scenario. Players have to use their best judgement to determine what the best option is. Will they make the right choice? 
<br><br>Scenario cards are based off of events that are likely to happen in the real world. They're meant to make players recognize what good and bad opportunities look like and what the consequences of their decisions could lead to. The managment of a savings and checking account in the game also familiarizes inexperienced players with operating such accounts and how they work.
</p>

<h1>My Work</h1>
<p class="text">
This project was focused on design work. I worked with my team to create the game concept and the game rules. I made the gameplay design for the prototype, which can be viewed in the section below. I contributed some scenario cards and game mechanics regarding checking and savings accounts. 
<br>A sample of those contents can be viewed here: <b><a href="https://docs.google.com/document/d/155Ok_BknOdKmegogWuK366TEL3pnqhFkdSNUycxizA8/edit?usp=sharing" target="_blank">Google Doc Sample</a></b>
<br>The layout of the prototype looks like this: <div class="general-image"><img src="images/prototype_preview.png"></div> 
</p>
<p class="text">
To get a better look of the prototype and to go through it, please check the section below.
</p>

<h1>Showcase</h1>
<p class="text">
Here is a link to the prototype made in Adobe Xd. Because it is a prototype, it uses fixed choices and outcomes.
<br><br>(Note: The "View & Pay Debts" button is clickable on player 1's 2nd turn. The "Transfer" button is clickable on player 2's 2nd turn.) 
<br>(I did not create the background art of the board.)
<br><br>
<b>
<a href="https://xd.adobe.com/view/d690fce1-b599-4898-a800-70e5d3dd3bda-83c3/" target="_blank">https://xd.adobe.com/view/d690fce1-b599-4898-a800-70e5d3dd3bda-83c3/</a>
</b>
</p>
</div>`;

function init() {
    // click listener.
    $("nav a").click(function() {
        let btnID = this.id;
        console.log("click", btnID);

        if(btnID == "projects") {
            $("#projects").ready(function() {
                console.log("projects page is ready");
                projectClicker();
            })
        }

        $("#content").html(eval(btnID));
    });
}

// listen to clicks on projects page.
function projectClicker() {
    $("#projects a").click(function() {
        let btnID = this.id;
        console.log("click", btnID);

        $("#content").html(eval(btnID));
    });
}

// checks for all the elements to be read by the browser.
$(document).ready(function() {
    init();
});