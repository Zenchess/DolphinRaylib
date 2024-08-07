# DolphinRaylib
Raylib bindings for Dolphin Smalltalk

Tested on Dolphin 7.2 branch.  Get dolphin from git or use the installer in dolphin smalltalk core image repo. 

Requirements: raylib.dll 32 bit dll file preferably built with msvc.  You can build the visual studio 2022 solution for raylib
build release 32 bit.

modified dll file in /resources

Modifications: 

```
rlgl.h modified from: 
void rlOrtho(double left, double right, double bottom, double top, double znear, double zfar)
{
    // NOTE: If left-right and top-botton values are equal it could create a division by zero,
    // response to it is platform/compiler dependant
    Matrix matOrtho = { 0 };

    float rl = (float)(right - left);
    float tb = (float)(top - bottom);
    float fn = (float)(zfar - znear);

    matOrtho.m0 = 2.0f/rl;
    matOrtho.m1 = 0.0f;
    matOrtho.m2 = 0.0f;
    matOrtho.m3 = 0.0f;
    matOrtho.m4 = 0.0f;
    matOrtho.m5 = 2.0f/tb;
    matOrtho.m6 = 0.0f;
    matOrtho.m7 = 0.0f;
    matOrtho.m8 = 0.0f;
    matOrtho.m9 = 0.0f;
    matOrtho.m10 = -2.0f/fn;
    matOrtho.m11 = 0.0f;
    matOrtho.m12 = -((float)left + (float)right)/rl;
    matOrtho.m13 = -((float)top + (float)bottom)/tb;
    matOrtho.m14 = -((float)zfar + (float)znear)/fn;
    matOrtho.m15 = 1.0f;

    *RLGL.State.currentMatrix = rlMatrixMultiply(*RLGL.State.currentMatrix, matOrtho);
}

to:

  void rlOrtho(double left, double right, double bottom, double top, double znear, double zfar)
{
    // NOTE: If left-right and top-botton values are equal it could create a division by zero,
    // response to it is platform/compiler dependant
    Matrix matOrtho = { 0 };

    float rl = (float)(right - left);
    float tb = (float)(top - bottom);
    float fn = (float)(zfar - znear);

	if ((right - left == 0) || (bottom - top == 0)) {
		*RLGL.State.currentMatrix = rlMatrixIdentity();
		return;
	}
	
    matOrtho.m0 = 2.0f/rl;
    matOrtho.m1 = 0.0f;
    matOrtho.m2 = 0.0f;
    matOrtho.m3 = 0.0f;
    matOrtho.m4 = 0.0f;
    matOrtho.m5 = 2.0f/tb;
    matOrtho.m6 = 0.0f;
    matOrtho.m7 = 0.0f;
    matOrtho.m8 = 0.0f;
    matOrtho.m9 = 0.0f;
    matOrtho.m10 = -2.0f/fn;
    matOrtho.m11 = 0.0f;
    matOrtho.m12 = -((float)left + (float)right)/rl;
    matOrtho.m13 = -((float)top + (float)bottom)/tb;
    matOrtho.m14 = -((float)zfar + (float)znear)/fn;
    matOrtho.m15 = 1.0f;

    *RLGL.State.currentMatrix = rlMatrixMultiply(*RLGL.State.currentMatrix, matOrtho);
}
```
	Only 3 lines of code added to the official project. 

	This prevents dolphin from crashes if the window is minimized.  I have made an issue on the official repo and possibly in the future
	this modification will no longer be necessary.  
	
# Installation
	Place a 32 bit raylib.dll compiled with msvc (you can try other build options but I don't know if they will work).
	Copy a fresh dolphin image to the root of the git repo, and install package "Raylib".
	BunnyMark example in RaylibExamples.  I get about 100 fps at 20,000 bunnies.  
	
# Usage 

	BunnyMark startDemoFullscreen for Borderless Windowed Fullscreen example.
	Hold click to spawn bunnies.
	or
	BunnyMark startDemoWindowed (1920@1080 window).
	
# Api Coverage
	
	Many methods not yet wrapped.  Should not be too hard to add more methods if you need them by looking at the examples in RaylibLibrary
	and referencing with the "Raylib cheatsheet".  Pull requests welcome.  
	
# Tutorial
	I will be making a tutorial on how to build a game on youtube at https://www.youtube.com/@zenchess.  In general, you can work off 
	any raylib example and just call the same methods in RaylibLibrary.  
	
# Roadmap

	Right now it is just a bare wrapper for the dll file.  There is no ease of use wrapper methods that handle type conversion and give the
	project a more smalltalk-like api.  A more fully featured implementation is coming.
