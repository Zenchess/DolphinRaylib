| package |
package := Package name: 'RaylibExamples'.
package paxVersion: 1;
	basicComment: ''.

package classNames
	add: #Bunny;
	add: #BunnyMark;
	add: #RaylibDemo;
	yourself.

package binaryGlobalNames: (Set new
	yourself).

package globalAliases: (Set new
	yourself).

package setPrerequisites: #(
	'..\Core\Object Arts\Dolphin\Base\Dolphin'
	'..\Core\Object Arts\Dolphin\System\Random\Dolphin Random Stream'
	'..\RayLib\RayLib').

package!

"Class Definitions"!

Object subclass: #Bunny
	instanceVariableNames: 'positionX positionY speedX speedY color position speed'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!

Object subclass: #RaylibDemo
	instanceVariableNames: 'shouldTerminate rl random width height whiteColor lightGray process windowTitle monitorWidth monitorHeight beFullscreen'
	classVariableNames: ''
	poolDictionaries: 'RaylibConfigFlags'
	classInstanceVariableNames: ''!

RaylibDemo subclass: #BunnyMark
	instanceVariableNames: 'bunnies maxBunnies texBunny icon'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!

"End of package definition"!

"Source Globals"!

"Classes"!

Bunny guid: (GUID fromString: '{5f9234ea-6326-47ba-a4fe-2811b57acd12}')!

Bunny comment: ''!

!Bunny categoriesForClass!Kernel-Objects! !

!Bunny methodsFor!

color
	^color!

color: anObject
	color := anObject!

initialize	
	!

moveAndCheck: maxWidth maxHeight: maxHeight
	positionX := positionX + speedX.
	positionY := positionY + speedY.

	"Also remove numeric calculations here for small extra gain"
	(positionX > maxWidth or: [positionX < 0]) ifTrue: [speedX := speedX * -1].
	(positionY > maxHeight or: [positionY < 0]) ifTrue: [speedY := speedY * -1]!

position
	^position!

position: anObject
	position := anObject!

positionX
	^positionX!

positionX: anObject
	positionX := anObject!

positionY
	^positionY!

positionY: anObject
	positionY := anObject!

speed
	^speed!

speed: anObject
	speed := anObject!

speedX
	^speedX!

speedX: anObject
	speedX := anObject!

speedY
	^speedY!

speedY: anObject
	speedY := anObject! !

!Bunny categoriesForMethods!
color!accessing!private! !
color:!accessing!private! !
initialize!public! !
moveAndCheck:maxHeight:!public! !
position!accessing!private! !
position:!accessing!private! !
positionX!accessing!private! !
positionX:!accessing!private! !
positionY!accessing!private! !
positionY:!accessing!private! !
speed!accessing!private! !
speed:!accessing!private! !
speedX!accessing!private! !
speedX:!accessing!private! !
speedY!accessing!private! !
speedY:!accessing!private! !
!

RaylibDemo guid: (GUID fromString: '{18dc8bc3-210b-4c64-8176-93af180d4f38}')!

RaylibDemo comment: ''!

!RaylibDemo categoriesForClass!Kernel-Objects! !

!RaylibDemo methodsFor!

beFullscreen 
	^beFullscreen!

beFullscreen: aBoolean
	beFullscreen := aBoolean!

initWindow
	| windowRez |
	windowRez := self windowedRes.
	beFullscreen
		ifTrue: 
			[rl
				initWindow: 0
				height: 0
				title: 'Dolphin Smalltalk Raylib Test'.
			monitorWidth := rl getMonitorWidth: 0.
			monitorHeight := rl getMonitorHeight: 0.
			rl setWindowPosition: 0 y: 0.
			rl toggleBorderlessWindowed]
		ifFalse: 
			[| iconImage |
			rl
				initWindow: windowRez x
				height: windowRez y
				title: 'Dolphin Smalltalk Raylib Test'.
			monitorWidth := windowRez x.
			monitorHeight := windowRez y.
			iconImage := rl loadImage: 'resources/ico2.png' asParameter.
			rl setWindowIcon: iconImage]!

mainLoop
	rl windowShouldClose
		ifTrue: 
			[rl closeWindow.
			shouldTerminate := true.
			^self].
	self processInput.
	self processLogic.
	self render.!

processInput!

processLogic!

render
	rl BeginDrawing.
	rl ClearBackground: whiteColor.
	rl DrawFps: 10 posY: 10.
	rl EndDrawing.!

run
	rl := RaylibLibrary default.	
	whiteColor := ColorRaylib new
				r: 245;
				g: 245;
				b: 245;
				a: 255;
				yourself.
	lightGray := ColorRaylib new r: 200; g: 200; b: 200; a: 255; yourself.
	shouldTerminate := false.
	
	random := RandomParkMiller new.
	self initWindow.
	self setup.
	[shouldTerminate] whileFalse: [self mainLoop].!

setup
	!

windowedRes
	^1920@1080! !

!RaylibDemo categoriesForMethods!
beFullscreen!public! !
beFullscreen:!public! !
initWindow!public! !
mainLoop!public! !
processInput!public! !
processLogic!public! !
render!public! !
run!public! !
setup!public! !
windowedRes!public! !
!

!RaylibDemo class methodsFor!

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
	self startDemo: true.!

startDemoWindowed
	self startDemo: false.! !

!RaylibDemo class categoriesForMethods!
startDemo!public! !
startDemo:!public! !
startDemoFullscreen!public! !
startDemoWindowed!public! !
!

BunnyMark guid: (GUID fromString: '{f0f71bdc-083d-43fd-aeac-b797fb8b6eb6}')!

BunnyMark comment: ''!

!BunnyMark categoriesForClass!Unclassified! !

!BunnyMark methodsFor!

processInput
	(rl isMouseButtonDown: MOUSE_LEFT_BUTTON)
		ifTrue: 
			[1 to: 10
				do: 
					[:index |
					bunnies size < maxBunnies
						ifTrue: 
							[ |bunny|
							bunny := Bunny new.
							bunny
								positionX: random next * monitorWidth;
								positionY: random next * monitorHeight.
							bunny speedX: random next * 2.
							bunny speedY: random next * 2.
							bunny color: (ColorRaylib new
										r: (random next * 255) asInteger;
										g: (random next * 255) asInteger;
										b: (random next * 255) asInteger;
										a: 244;
										yourself).
							bunnies add: bunny]]]!

processLogic
	bunnies do: 
			[:each |
			each moveAndCheck: monitorWidth maxHeight: monitorHeight ].!

render
	rl beginDrawing.
	rl clearBackground: whiteColor.
	bunnies do: 
			[:each |
			rl
				drawTextureV: texBunny position: (Vector2 new x: each positionX; y: each positionY; yourself) tint: each color].
	rl
		drawText: 'bunnies: ' , bunnies size printString
		posX: 120
		posY: 10
		fontSize: 20
		color: lightGray.
	rl drawFps: 10 posY: 10.
	rl endDrawing!

setup	
	bunnies := OrderedCollection new.
	maxBunnies := 100000.
	texBunny := rl loadTexture: 'resources/wabbit_alpha.png' asParameter.
	! !

!BunnyMark categoriesForMethods!
processInput!public! !
processLogic!public! !
render!public! !
setup!public! !
!

!BunnyMark class methodsFor!

startDemo: fullscreenBool
	|app|
	app := self new.
	fullscreenBool ifTrue: [app beFullscreen: true]
				ifFalse: [app beFullscreen: false].
	app run.
	^app!

startDemoFullscreen
	"	self startDemoFullscreen		"
	self startDemo: true.!

startDemoWindowed
	"	self startDemoWindowed 	"
	self startDemo: false.! !

!BunnyMark class categoriesForMethods!
startDemo:!public! !
startDemoFullscreen!public! !
startDemoWindowed!public! !
!

"Binary Globals"!

