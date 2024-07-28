| package |
package := Package name: 'SpaceGame'.
package paxVersion: 1;
	basicComment: ''.

package classNames
	add: #Asteroid;
	add: #Bullet;
	add: #GameObject;
	add: #Player;
	add: #SpaceGame;
	yourself.

package binaryGlobalNames: (Set new
	yourself).

package globalAliases: (Set new
	yourself).

package setPrerequisites: #(
	'..\Core\Object Arts\Dolphin\Base\Dolphin'
	'..\RayLib\RayLib'
	'..\RaylibExamples\RaylibExamples').

package!

"Class Definitions"!

Object subclass: #GameObject
	instanceVariableNames: 'position velocity rotation'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!

GameObject subclass: #Asteroid
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!

GameObject subclass: #Bullet
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!

GameObject subclass: #Player
	instanceVariableNames: 'isThrusting isRotatingRight isRotatingLeft'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!

RaylibDemo subclass: #SpaceGame
	instanceVariableNames: 'blackColor asteroids bullets asteroidsTexture player'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!

"End of package definition"!

"Source Globals"!

"Classes"!

GameObject guid: (GUID fromString: '{21e9d7f2-f6e1-49ba-9bec-bf2fdaef6053}')!

GameObject comment: ''!

!GameObject categoriesForClass!Kernel-Objects! !

!GameObject methodsFor!

extent
	^0@0!

initialize
	position := 0@0.
	rotation := 0.
	velocity := 0@0.!

isCollidingWith: anotherObject
 
        | myLeft myRight myTop myBottom otherLeft otherRight otherTop otherBottom |
        myLeft := position x.
        myRight := position x + self extent x.
        myTop := position y.
        myBottom := position y + self extent y.
        
        otherLeft := anotherObject position x.
        otherRight := anotherObject position x + anotherObject extent x.
        otherTop := anotherObject position y.
        otherBottom := anotherObject position y + anotherObject extent y.
        
        ^ (myLeft < otherRight and: [myRight > otherLeft])
            and: [myTop < otherBottom and: [myBottom > otherTop]]
    
!

position
	^position!

position: anObject
	position := anObject!

rotation
	^rotation!

rotation: anObject
	rotation := anObject!

updateMovement
	position := position + velocity.!

velocity
	^velocity!

velocity: anObject
	velocity := anObject! !

!GameObject categoriesForMethods!
extent!public! !
initialize!public! !
isCollidingWith:!public! !
position!accessing!public! !
position:!accessing!public! !
rotation!accessing!public! !
rotation:!accessing!public! !
updateMovement!public! !
velocity!accessing!public! !
velocity:!accessing!public! !
!

!GameObject class methodsFor!

new
	^super new initialize! !

!GameObject class categoriesForMethods!
new!public! !
!

Asteroid guid: (GUID fromString: '{3b1e0658-e92f-4ccf-9340-027e03974c17}')!

Asteroid comment: ''!

!Asteroid categoriesForClass!Kernel-Objects! !

!Asteroid methodsFor!

extent
	^160@160! !

!Asteroid categoriesForMethods!
extent!public! !
!

Bullet guid: (GUID fromString: '{f3fd5ed1-9922-4f8f-91de-5f43d9ed094f}')!

Bullet comment: ''!

!Bullet categoriesForClass!Kernel-Objects! !

!Bullet methodsFor!

extent
	^32@32! !

!Bullet categoriesForMethods!
extent!public! !
!

Player guid: (GUID fromString: '{e1239189-6659-4ae4-b3c9-3a1f45999dcf}')!

Player comment: ''!

!Player categoriesForClass!Kernel-Objects! !

!Player methodsFor!

extent
	^64@64!

fireBullet!

initialize
	isRotatingRight := false.
	isRotatingLeft := false.
	isThrusting := false.!

isRotatingLeft
	^isRotatingLeft!

isRotatingLeft: aBoolean
	isRotatingLeft := aBoolean!

isRotatingRight
	^isRotatingRight!

isRotatingRight: anObject
	isRotatingRight := anObject!

isThrusting
	^isThrusting!

isThrusting: anObject
	isThrusting := anObject!

rotationSpeed
	^0.1!

thrustMagnitude
	^0.00001!

updateMovement
    | thrustVector |
    super updateMovement.
    isRotatingRight ifTrue: [rotation := rotation + self rotationSpeed].
    isRotatingLeft ifTrue: [rotation := rotation - self rotationSpeed].
    isThrusting ifTrue: [
        | rotationInRadians |
        rotationInRadians := rotation degreesToRadians.
        thrustVector := (self thrustMagnitude * rotationInRadians cos)
                        @ (self thrustMagnitude * rotationInRadians sin).
        velocity := velocity + thrustVector
    ].
    isRotatingRight := false.
    isRotatingLeft := false.
    isThrusting := false.
! !

!Player categoriesForMethods!
extent!public! !
fireBullet!public! !
initialize!public! !
isRotatingLeft!accessing!public! !
isRotatingLeft:!accessing!public! !
isRotatingRight!accessing!public! !
isRotatingRight:!accessing!public! !
isThrusting!accessing!public! !
isThrusting:!accessing!public! !
rotationSpeed!public! !
thrustMagnitude!public! !
updateMovement!public! !
!

!Player class methodsFor!

new
	^self basicNew initialize! !

!Player class categoriesForMethods!
new!public! !
!

SpaceGame guid: (GUID fromString: '{3a836e49-e56b-4054-95f5-48ae643d27c9}')!

SpaceGame comment: ''!

!SpaceGame categoriesForClass!Kernel-Objects! !

!SpaceGame methodsFor!

bulletThrustMagnitude
	^0.1!

fireBullet
	| bullet rotationInRadians thrustVector |
	bullet := Bullet new.
	bullet position: player position.
	rotationInRadians := player rotation degreesToRadians.
	thrustVector := (self bulletThrustMagnitude * rotationInRadians cos)
				@ (self bulletThrustMagnitude * rotationInRadians sin).
	bullet velocity: bullet velocity + thrustVector.
	bullets add: bullet!

processLogic
	asteroids do: [:each | 
		each updateMovement.
		(each isCollidingWith: player) ifTrue: [
			player position: 0@0.
			].
		bullets do: [:bullet|
			(bullet isCollidingWith: each) ifTrue: [
				asteroids remove: each
			].
		

		].






		].
	bullets do: [:each | each updateMovement].

	"left"
	(rl isKeyDown: KEY_LEFT ) ifTrue: [
		player isRotatingLeft: true
	].
	"right"
	(rl isKeyDown: KEY_RIGHT ) ifTrue: [
		player isRotatingRight: true
	].
	"down"
	(rl isKeyDown: KEY_DOWN ) ifTrue: [
		player isRotatingLeft.
	].
	"up"
	(rl isKeyDown: KEY_UP ) ifTrue: [
		player isThrusting: true.
	].
	"spacebar"
	(rl isKeyPressed: 32 ) ifTrue: [
		self fireBullet.
	].
	


	player updateMovement.
	!

render
	| playerRectangleSource playerRectangleDest playerCenter |
	rl beginDrawing.
	rl clearBackground: blackColor.
	asteroids do: 
			[:each |
			| rectangleSource rectangleDest vectorOrigin |
			rectangleSource := RectangleRaylib new
						x: 0;
						y: 0;
						width: 160;
						height: 160;
						yourself.
			rectangleDest := RectangleRaylib new
						x: each position x;
						y: each position y;
						width: 160;
						height: 160;
						yourself.
			vectorOrigin := Vector2 new
						x: 80;
						y: 80;
						yourself.
			rl
				drawTexturePro: asteroidsTexture
				source: rectangleSource
				dest: rectangleDest
				origin: vectorOrigin
				rotation: each rotation
				color: whiteColor].
	playerRectangleSource := RectangleRaylib new
				x: 192;
				y: 256;
				width: 96;
				height: 64;
				yourself.
	playerRectangleDest := RectangleRaylib new
				x: player position x;
				y: player position y;
				width: 96;
				height: 64;
				yourself.
	playerCenter := Vector2 new
				x: 96 / 2;
				y: 64 / 2;
				yourself.
		bullets do: 
			[:each |
			| rectangleSource rectangleDest vectorOrigin |
			rectangleSource := RectangleRaylib new
						x: 448;
						y: 288;
						width: 32;
						height: 32;
						yourself.
			rectangleDest := RectangleRaylib new
						x: each position x;
						y: each position y;
						width: 32;
						height: 32;
						yourself.
			vectorOrigin := Vector2 new
						x: 16;
						y: 16;
						yourself.
			rl
				drawTexturePro: asteroidsTexture
				source: rectangleSource
				dest: rectangleDest
				origin: vectorOrigin
				rotation: each rotation
				color: whiteColor].
	rl
		drawTexturePro: asteroidsTexture
		source: playerRectangleSource
		dest: playerRectangleDest
		origin: playerCenter
		rotation: player rotation
		color: whiteColor.


	rl endDrawing!

setup
	super setup.
	asteroids := OrderedCollection new.
	bullets := OrderedCollection new.
	blackColor := ColorRaylib new
				r: 0;
				g: 0;
				b: 0;
				a: 0;
				yourself.
	asteroids add: (Asteroid new
					position: 500@500;
					velocity: 0.1@0; 
					rotation: 0; 
					yourself).
	asteroids add: (Asteroid new
					position: 500@500;
					velocity: -0.01@0; 
					rotation: 0; 
					yourself).
	asteroidsTexture := rl loadTexture: 'resources/asteroids-2x.png' asParameter.
	player := Player new 
				position: 200@200; 
				rotation: 0;
				velocity: 0@0;
				yourself.! !

!SpaceGame categoriesForMethods!
bulletThrustMagnitude!public! !
fireBullet!public! !
processLogic!public! !
render!public! !
setup!public! !
!

!SpaceGame class methodsFor!

startDemo
"		self new run			"!

startDemo: fullscreenBool
	|app|
	app := self new.
	fullscreenBool ifTrue: [app beFullscreen: true]
				ifFalse: [app beFullscreen: false].
	app run.
	^app!

startDemoFullscreen
	" 	self startDemoFullscreen		"
	self startDemo: true.!

startDemoWindowed
	"	self startDemoWindowed	"
	self startDemo: false.! !

!SpaceGame class categoriesForMethods!
startDemo!public! !
startDemo:!public! !
startDemoFullscreen!public! !
startDemoWindowed!public! !
!

"Binary Globals"!

