raylib.dll is raylib 5.0 compiled with msvc 32 bit release build
Very small modification made to prevent crashing when the window is minimized in dolphin
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
