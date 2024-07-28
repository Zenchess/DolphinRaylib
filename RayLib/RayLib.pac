| package |
package := Package name: 'RayLib'.
package paxVersion: 1;
	basicComment: ''.

package imageStripperBytes: (ByteArray fromBase64String: 'IVNUQiA0IEYWDQAGAAAASW1hZ2VTdHJpcHBlcgAAAABSAAAABgAAAFJheUxpYhIBAAAAAAAAmgAA
ABIBAAAIAAAARXhhbXBsZXMSAQAAEAAAAFJheWxpYkRlbW9EZXBsb3kN/SABAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=').
package classNames
	add: #Camera2D;
	add: #Camera3D;
	add: #ColorRaylib;
	add: #FontRaylib;
	add: #GlyphInfo;
	add: #ImageRaylib;
	add: #Material;
	add: #MaterialMap;
	add: #Matrix;
	add: #Mesh;
	add: #Model3D;
	add: #RaylibLibrary;
	add: #RectangleRaylib;
	add: #RenderTexture2D;
	add: #Shader;
	add: #Texture2D;
	add: #Vector2;
	add: #Vector3;
	add: #Vector4;
	yourself.

package globalNames
	add: #RaylibConfigFlags;
	add: #RaylibConstants;
	yourself.

package binaryGlobalNames: (Set new
	yourself).

package globalAliases: (Set new
	yourself).

package setPrerequisites: #(
	'..\Core\Object Arts\Dolphin\Base\Dolphin').

package!

"Class Definitions"!

ExternalLibrary subclass: #RaylibLibrary
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!

ExternalStructure subclass: #Camera2D
	instanceVariableNames: ''
	classVariableNames: '_OffsetOf_offset _OffsetOf_rotation _OffsetOf_target _OffsetOf_zoom'
	poolDictionaries: ''
	classInstanceVariableNames: ''!

ExternalStructure subclass: #Camera3D
	instanceVariableNames: ''
	classVariableNames: '_OffsetOf_fovy _OffsetOf_position _OffsetOf_target _OffsetOf_type _OffsetOf_up'
	poolDictionaries: ''
	classInstanceVariableNames: ''!

ExternalStructure subclass: #ColorRaylib
	instanceVariableNames: ''
	classVariableNames: '_OffsetOf_a _OffsetOf_b _OffsetOf_g _OffsetOf_r'
	poolDictionaries: ''
	classInstanceVariableNames: ''!

ExternalStructure subclass: #FontRaylib
	instanceVariableNames: ''
	classVariableNames: '_OffsetOf_baseSize _OffsetOf_glyphCount _OffsetOf_glyphPadding _OffsetOf_glyphs _OffsetOf_recs _OffsetOf_texture'
	poolDictionaries: ''
	classInstanceVariableNames: ''!

ExternalStructure subclass: #GlyphInfo
	instanceVariableNames: ''
	classVariableNames: '_OffsetOf_advanceX _OffsetOf_image _OffsetOf_offsetX _OffsetOf_offsetY _OffsetOf_value'
	poolDictionaries: ''
	classInstanceVariableNames: ''!

ExternalStructure subclass: #ImageRaylib
	instanceVariableNames: ''
	classVariableNames: '_OffsetOf_data _OffsetOf_format _OffsetOf_height _OffsetOf_mipmaps _OffsetOf_width'
	poolDictionaries: ''
	classInstanceVariableNames: ''!

ExternalStructure subclass: #Material
	instanceVariableNames: ''
	classVariableNames: '_OffsetOf_maps _OffsetOf_params _OffsetOf_shader'
	poolDictionaries: ''
	classInstanceVariableNames: ''!

ExternalStructure subclass: #MaterialMap
	instanceVariableNames: ''
	classVariableNames: '_OffsetOf_color _OffsetOf_texture _OffsetOf_value'
	poolDictionaries: ''
	classInstanceVariableNames: ''!

ExternalStructure subclass: #Matrix
	instanceVariableNames: ''
	classVariableNames: '_OffsetOf_m0 _OffsetOf_m1 _OffsetOf_m10 _OffsetOf_m11 _OffsetOf_m12 _OffsetOf_m13 _OffsetOf_m14 _OffsetOf_m15 _OffsetOf_m2 _OffsetOf_m3 _OffsetOf_m4 _OffsetOf_m5 _OffsetOf_m6 _OffsetOf_m7 _OffsetOf_m8 _OffsetOf_m9'
	poolDictionaries: ''
	classInstanceVariableNames: ''!

ExternalStructure subclass: #Mesh
	instanceVariableNames: ''
	classVariableNames: '_OffsetOf_animNormals _OffsetOf_animVertices _OffsetOf_boneIds _OffsetOf_boneWeights _OffsetOf_colors _OffsetOf_indices _OffsetOf_normals _OffsetOf_tangents _OffsetOf_texcoords _OffsetOf_texcoords2 _OffsetOf_triangleCount _OffsetOf_vaoId _OffsetOf_vboId _OffsetOf_vertexCount _OffsetOf_vertices'
	poolDictionaries: ''
	classInstanceVariableNames: ''!

ExternalStructure subclass: #Model3D
	instanceVariableNames: ''
	classVariableNames: '_OffsetOf_bindPose _OffsetOf_boneCount _OffsetOf_bones _OffsetOf_materialCount _OffsetOf_materials _OffsetOf_meshCount _OffsetOf_meshes _OffsetOf_transform'
	poolDictionaries: ''
	classInstanceVariableNames: ''!

ExternalStructure subclass: #RectangleRaylib
	instanceVariableNames: ''
	classVariableNames: '_OffsetOf_height _OffsetOf_width _OffsetOf_x _OffsetOf_y'
	poolDictionaries: ''
	classInstanceVariableNames: ''!

ExternalStructure subclass: #RenderTexture2D
	instanceVariableNames: ''
	classVariableNames: '_OffsetOf_depth _OffsetOf_id _OffsetOf_texture'
	poolDictionaries: ''
	classInstanceVariableNames: ''!

ExternalStructure subclass: #Shader
	instanceVariableNames: ''
	classVariableNames: '_OffsetOf_id _OffsetOf_locs'
	poolDictionaries: ''
	classInstanceVariableNames: ''!

ExternalStructure subclass: #Texture2D
	instanceVariableNames: ''
	classVariableNames: '_OffsetOf_format _OffsetOf_height _OffsetOf_id _OffsetOf_mipmaps _OffsetOf_width'
	poolDictionaries: ''
	classInstanceVariableNames: ''!

ExternalStructure subclass: #Vector2
	instanceVariableNames: ''
	classVariableNames: '_OffsetOf_x _OffsetOf_y'
	poolDictionaries: ''
	classInstanceVariableNames: ''!

ExternalStructure subclass: #Vector3
	instanceVariableNames: ''
	classVariableNames: '_OffsetOf_x _OffsetOf_y _OffsetOf_z'
	poolDictionaries: ''
	classInstanceVariableNames: ''!

ExternalStructure subclass: #Vector4
	instanceVariableNames: ''
	classVariableNames: '_OffsetOf_w _OffsetOf_x _OffsetOf_y _OffsetOf_z'
	poolDictionaries: ''
	classInstanceVariableNames: ''!

"End of package definition"!

"Source Globals"!

Smalltalk at: #RaylibConfigFlags put: (PoolConstantsDictionary named: #RaylibConfigFlags)!
RaylibConfigFlags at: 'CAMERA_FIRST_PERSON' put: 16r3!
RaylibConfigFlags at: 'CAMERA_FREE' put: 16r1!
RaylibConfigFlags at: 'CAMERA_PERSPECTIVE' put: 16r0!
RaylibConfigFlags at: 'FLAG_BORDERLESS_WINDOWED_MODE' put: 16r8000!
RaylibConfigFlags at: 'FLAG_FULLSCREEN_MODE' put: 16r2!
RaylibConfigFlags at: 'FLAG_MSAA_4X_HINT' put: 16r20!
RaylibConfigFlags at: 'FLAG_VSYNC_HINT' put: 16r40!
RaylibConfigFlags at: 'FLAG_WINDOW_ALWAYS_RUN' put: 16r100!
RaylibConfigFlags at: 'FLAG_WINDOW_RESIZABLE' put: 16r4!
RaylibConfigFlags at: 'FLAG_WINDOW_UNDECORATED' put: 16r8!
RaylibConfigFlags at: 'GAMEPAD_PLAYER1' put: 16r0!
RaylibConfigFlags at: 'LOC_MAP_ALBEDO' put: 16rE!
RaylibConfigFlags at: 'LOC_MAP_BRDF' put: 16r18!
RaylibConfigFlags at: 'LOC_MAP_EMISSION' put: 16r13!
RaylibConfigFlags at: 'LOC_MAP_HEIGHT' put: 16r14!
RaylibConfigFlags at: 'LOC_MAP_IRRADIANCE' put: 16r16!
RaylibConfigFlags at: 'LOC_MAP_METALNESS' put: 16rF!
RaylibConfigFlags at: 'LOC_MAP_NORMAL' put: 16r10!
RaylibConfigFlags at: 'LOC_MAP_OCCLUSION' put: 16r12!
RaylibConfigFlags at: 'LOC_MAP_PREFILTER' put: 16r17!
RaylibConfigFlags at: 'LOC_MAP_ROUGHNESS' put: 16r11!
RaylibConfigFlags at: 'LOC_MATRIX_MODEL' put: 16r7!
RaylibConfigFlags at: 'LOC_MATRIX_VIEW' put: 16r8!
RaylibConfigFlags at: 'LOC_VECTOR_VIEW' put: 16rA!
RaylibConfigFlags at: 'MAP_ALBEDO' put: 16r0!
RaylibConfigFlags at: 'MAP_DIFFUSE' put: 16r0!
RaylibConfigFlags at: 'MAP_METALNESS' put: 16r1!
RaylibConfigFlags at: 'MAP_NORMAL' put: 16r2!
RaylibConfigFlags at: 'MAP_OCCLUSION' put: 16r4!
RaylibConfigFlags at: 'MAP_ROUGHNESS' put: 16r3!
RaylibConfigFlags at: 'MOUSE_LEFT_BUTTON' put: 16r0!
RaylibConfigFlags at: 'MOUSE_MIDDLE_BUTTON' put: 16r2!
RaylibConfigFlags at: 'MOUSE_RIGHT_BUTTON' put: 16r1!
RaylibConfigFlags at: 'UNIFORM_FLOAT' put: 16r0!
RaylibConfigFlags at: 'UNIFORM_VEC2' put: 16r1!
RaylibConfigFlags at: 'UNIFORM_VEC3' put: 16r2!
RaylibConfigFlags shrink!

Smalltalk at: #RaylibConstants put: (PoolConstantsDictionary named: #RaylibConstants)!
RaylibConstants at: 'KEY_DOWN' put: 16r108!
RaylibConstants at: 'KEY_LEFT' put: 16r107!
RaylibConstants at: 'KEY_RIGHT' put: 16r106!
RaylibConstants at: 'KEY_UP' put: 16r109!
RaylibConstants shrink!

"Classes"!

RaylibLibrary guid: (GUID fromString: '{f40958b4-f8e5-42c7-b6d3-c7515700ed7a}')!

RaylibLibrary comment: ''!

!RaylibLibrary categoriesForClass!External-Libraries! !

!RaylibLibrary methodsFor!

beginBlendMode: intMode 
	<stdcall: void BeginBlendMode dword >
	^self invalidCall!

beginDrawing
	
	<stdcall: void BeginDrawing>
	^self invalidCall!

beginMode2D: camera2d 
	<stdcall: void BeginMode2D Camera2D>
	^self invalidCall!

beginMode3D: camera3d 
	<stdcall: void BeginMode3D Camera3D>
	^self invalidCall!

beginScissorMode: intX y: intY width: intWidth height: intHeight 
	<stdcall: void BeginScissorMode sdword sdword sdword sdword>
	^self invalidCall!

beginShaderMode: shader 
	<stdcall: void BeginShaderMode Shader >
	^self invalidCall!

beginTextureMode: shader 
	<stdcall: void BeginTextureMode RenderTexture2D >
	^self invalidCall!

beginVrDrawing
	
	<stdcall: void BeginVrDrawing>
	^self invalidCall!

clearBackground: colorRaylib
	"RLAPI void ClearBackground(Color color);                          // Set background color (framebuffer clear color)"
	<stdcall: void ClearBackground ColorRaylib>
	^self invalidCall!

clearWindowState: intFlag 
	<stdcall: void ClearWindowState dword >
	^self invalidCall!

closeVr
	<stdcall: void CloseVr>
	^self invalidCall!

closeWindow 
	"RLAPI void CloseWindow(void);                                     // Close window and unload OpenGL context"
	<stdcall: void CloseWindow>
	^self invalidCall!

disableCursor
	<stdcall: void DisableCursor>
	^self invalidCall!

disableEventWaiting
	<stdcall: void DisableEventWaiting>
	^self invalidCall!

drawCircle: intCenterx y: intCentery radius: float color: colorRaylib
	<stdcall: void DrawCircle sdword sdword float ColorRaylib>
	^self invalidCall!

drawCircleV: vector2Center radius: float color: colorRayLib
	<stdcall: void DrawCircleV Vector2 float ColorRaylib>
	^self invalidCall!

drawCube: Vector3Pos width: float height: floatHeight length: floatLength color: colorRaylib
	"Draw a plane XZ"
	<stdcall: void DrawCube Vector3 float float float ColorRaylib>
	^self invalidCall!

drawCubeWires: Vector3Pos width: float height: floatHeight length: floatLength color: colorRaylib
	"Draw a plane XZ"
	<stdcall: void DrawCubeWires Vector3 float float float ColorRaylib>
	^self invalidCall!

drawFps: intPosX posY: intPosY
	"RLAPI void DrawText(const char *text, int posX, int posY, int fontSize, Color color);       // Draw text (using default font)"
	<stdcall: void DrawFPS sdword sdword>
	^self invalidCall!

drawLine: StartPosX startPosY: StartPosY endPosX: endPosX endPosY: endPosY color: color
	<stdcall: void DrawLine dword dword dword dword ColorRaylib>
	^self invalidCall!

drawLineEx: startVector2 endVector2: endVector2 width: widthInt color: ColorRaylib
	<stdcall: void DrawLineEx Vector2 Vector2 sdword ColorRaylib>
	^self invalidCall!

drawLineV: startPosVector2 endPos: endPosVector2 color: aColorRaylib
<stdcall: void DrawLineV Vector2 Vector2 ColorRaylib>
	^self invalidCall!

drawModel: model position: Vec3Position scale: floatScale color: colorRaylibTint
	<stdcall: void DrawModel Model3D Vector3 float ColorRaylib>
	^self invalidCall!

drawPixel: intPosX posY: intPosY color: RaylibColor
	<stdcall: void DrawPixel sdword sdword ColorRaylib>
	^self invalidCall!

drawPlane: Vector3CenterPos size: Vector2Size color: colorRaylib
	"Draw a plane XZ"
	<stdcall: void DrawPlane Vector3 Vector2 ColorRaylib>
	^self invalidCall!

drawPoly: vector2Center sides: intSides radius: floatRadius rotation: floatRotation color: colorRayLib
	<stdcall: void DrawPoly Vector2 sdword float float ColorRaylib>
	^self invalidCall!

drawRectangle: posX posY: posY width: intWidth height: intHeight color: colorRayLib
	<stdcall: void DrawRectangle sdword sdword sdword sdword ColorRaylib >
	^self invalidCall!

drawRectanglePro: rectangleRaylib origin: Vector2Origin rotation: floatRotation color: colorRaylib
	<stdcall: void DrawRectanglePro RectangleRaylib Vector2 float ColorRaylib >
	^self invalidCall!

drawRectangleV: vector2Position size: Vector2Size color: colorRaylib
	<stdcall: void DrawRectangleV Vector2 Vector2 ColorRaylib >
	^self invalidCall!

drawText: stringText posX: dwordPosX posY: dwordPosY fontSize: dwordFontSize color: colorRaylib
	"RLAPI void DrawText(const char *text, int posX, int posY, int fontSize, Color color);       // Draw text (using default font)"
	<stdcall: void DrawText char* sdword sdword sdword ColorRaylib>
	^self invalidCall!

drawTexture: texture2D posX: intPosX posY: intPosY tint: ColorRayLib
	<stdcall: void DrawTexture Texture2D sdword sdword ColorRaylib >
	^self invalidCall!

drawTextureEx: texture2D position: aVector2 rotation: floatRotation scale: floatScale tint: colorRaylib
	<stdcall: void DrawTextureEx Texture2D Vector2 float float ColorRaylib >
	^self invalidCall!

drawTexturePro: texture2D source: RectangleSource dest: RectangleDest origin: Vector2Origin rotation: floatRotation color: ColorRayLib
	<stdcall: void DrawTexturePro Texture2D RectangleRaylib RectangleRaylib Vector2 float ColorRaylib >
	^self invalidCall!

drawTextureRec: texture2D rectangleSource: rec position: vector2 tint: ColorRayLib
	<stdcall: void DrawTextureRec Texture2D RectangleRaylib Vector2 ColorRaylib >
	^self invalidCall!

drawTextureV: texture2D position: aVector2 tint: ColorRayLib
	<stdcall: void DrawTextureV Texture2D Vector2 ColorRaylib >
	^self invalidCall!

enableCursor
	<stdcall: void EnableCursor>
	^self invalidCall!

enableEventWaiting
	<stdcall: void EnableEventWaiting>
	^self invalidCall!

endBlendMode
	<stdcall: void EndBlendMode>
	^self invalidCall!

endDrawing	
	<stdcall: void EndDrawing>
	^self invalidCall!

endMode2D
	<stdcall: void EndMode2D>
	^self invalidCall!

endMode3D
	<stdcall: void EndMode3D>
	^self invalidCall!

endScissorMode
	<stdcall: void EndScissorMode>
	^self invalidCall!

endShaderMode  
	<stdcall: void EndShaderMode >
	^self invalidCall!

endTextureMode  
	<stdcall: void EndTextureMode >
	^self invalidCall!

endVrDrawing	
	<stdcall: void EndVrDrawing>
	^self invalidCall!

getClipboardText
	<stdcall: lpstr GetClipboardText >
	^self invalidCall!

getCurrentMonitor
	<stdcall: sdword GetCurrentMonitor>
	^self invalidCall!

getFrameTime
	<stdcall: float GetFrameTime>
	^self invalidCall!

getGamepadAxisMovement: intGamepad axis: intAxis
	<cdecl: double GetGamepadAxisMovement sdword sdword>
	^self invalidCall!

getMonitorCount
	<stdcall: sdword GetMonitorCount>
	^self invalidCall!

getMonitorHeight: intMonitor
	<stdcall: sdword GetMonitorHeight sdword>
	^self invalidCall!

getMonitorName: intMonitor
	"Note: I cannot get this method to work in Smalltalk"
	<stdcall: char* GetMonitorName sdword>
	^self invalidCall!

getMonitorPhysicalHeight: intMonitor
	<stdcall: sdword GetMonitorPhysicalHeight sdword>
	^self invalidCall!

getMonitorPhysicalWidth: intMonitor
	<stdcall: sdword GetMonitorPhysicalWidth sdword>
	^self invalidCall!

getMonitorPosition: intMonitor
	<stdcall: Vector2 GetMonitorPosition sdword>
	^self invalidCall!

getMonitorRefreshRate: intMonitor
	<stdcall: sdword GetMonitorRefreshRate sdword>
	^self invalidCall!

getMonitorWidth: intMonitor
	<stdcall: sdword GetMonitorWidth sdword>
	^self invalidCall!

getMouseX
	<stdcall: sdword GetMouseX>
	^self invalidCall!

getMouseY
	<stdcall: sdword GetMouseY>
	^self invalidCall!

getRenderHeight
	<stdcall: sdword GetRenderHeight>
	^self invalidCall!

getRenderWidth
	<stdcall: sdword GetRenderWidth>
	^self invalidCall!

getScreenHeight
	<stdcall: sdword GetScreenHeight>
	^self invalidCall!

getScreenWidth
	<stdcall: sdword GetScreenWidth>
	^self invalidCall!

getShaderLocation: shader name: string 
	<stdcall: sdword GetShaderLocation Shader char* >
	^self invalidCall!

getShaderLocationAttrib: shader name: stringAttribName 
	<stdcall: sdword GetShaderLocationAttrib Shader char* >
	^self invalidCall!

getTime
	<stdcall: double GetTime>
	^self invalidCall!

getWindowHandle
	<stdcall: handle* GetWindowHandle>
	^self invalidCall!

getWindowPosition
	<stdcall: Vector2 GetWindowPosition>
	^self invalidCall!

getWindowScaleDPI
	<stdcall: Vector2 GetWindowScaleDPI>
	^self invalidCall!

guiButton: rectangleRaylib text: text
	<stdcall: bool GuiButton RectangleRaylib lpstr>
	^self invalidCall!

guiEnable
	<stdcall: void GuiEnable>
	^self invalidCall!

guiGrid: rectangleRaylib text: text spacing: float subdivs: int
	<stdcall: void GuiGrid RectangleRaylib *char float sdword >
	^self invalidCall!

guiSetFont: fontRaylib
	<stdcall: void GuiSetFont FontRaylib>
	^self invalidCall!

guiSetStyle: controlInt property: propertyInt value: valueInt
	<stdcall: void GuiSetStyle sdword sdword sdword>
	^self invalidCall!

guiTextBox: rectangleRaylib text: text textSize: intTextSize editMode: bool
	<stdcall: bool GuiTextBox RectangleRaylib lpstr sdword bool>
	^self invalidCall!

guiTextBoxMulti: rectangleRaylib text: text textSize: intTextSize editMode: bool
	<stdcall: bool GuiTextBoxMulti RectangleRaylib lpstr* sdword bool>
	^self invalidCall!

hideCursor
	<stdcall: void HideCursor>
	^self invalidCall!

hideWindow
	<stdcall: void HideWindow>
	^self invalidCall!

initVr
	<stdcall: void InitVr>
	^self invalidCall!

initWindow: IntWidth height: IntHeight title: StringTitle 
	"RLAPI void InitWindow(int width, int height, const char *title);  // Initialize window and OpenGL context"
	<stdcall: void InitWindow sdword sdword char*>
	^self invalidCall!

isCursorHidden
	<stdcall: bool IsCursorHidden>
	^self invalidCall!

isCursorOnScreen
	<stdcall: bool IsCursorOnScreen>
	^self invalidCall!

isGamepadAvailable: gamepadConstant
	<stdcall: bool IsGamepadAvailable sdword>
	^self invalidCall!

isGamepadButtonPressed: intGamepad button: intButton
	<stdcall: bool IsGamepadButtonPressed sdword sdword>
	^self invalidCall!

isGamepadeAvailable: gamepadConstant
	<stdcall: bool IsGamepadAvailable sdword>
	^self invalidCall!

isKeyDown: intKey
	<stdcall: bool IsKeyDown sdword>
	^self invalidCall!

isKeyPressed: intKey
	<stdcall: bool IsKeyPressed sdword>
	^self invalidCall!

isMouseButtonDown: intButton
	<stdcall: bool IsMouseButtonDown sdword>
	^self invalidCall!

isMouseButtonPressed: intButton
	<stdcall: bool IsMouseButtonPressed sdword>
	^self invalidCall!

isMouseButtonReleased: intButton
	<stdcall: bool IsMouseButtonReleased sdword>
	^self invalidCall!

isWindowFlags: intFlags
	<stdcall: bool IsWindowState dword >
	^self invalidCall!

isWindowFocused
	<stdcall: bool IsWindowFocused>
	^self invalidCall!

isWindowFullscreen
	<stdcall: bool IsWindowFullscreen>
	^self invalidCall!

isWindowHidden
	<stdcall: bool IsWindowHidden>
	^self invalidCall!

isWindowMaximized
	<stdcall: bool IsWindowMaximized>
	^self invalidCall!

isWindowMinimized
	<stdcall: bool IsWindowMinimized>
	^self invalidCall!

isWindowReady
	"Check if window has been initialized successfully"
	<stdcall: bool IsWindowReady>
	^self invalidCall!

isWindowResized
	<stdcall: bool IsWindowResized>
	^self invalidCall!

isWindowState: uIntFlag
	"bool IsWindowState(unsigned int flag);                      // Check if one specific window flag is enabled"
	<stdcall: bool IsWindowState dword>
	^self invalidCall!

loadFont: stringFontFile
	<stdcall: FontRaylib LoadFont char* >
	^self invalidCall!

loadImage: stringFileName
	<stdcall: ImageRaylib LoadImage lpvoid >
	^self invalidCall!

loadMaterialDefault
	<stdcall: Material LoadMaterialDefault >
	^self invalidCall!

loadModel: stringTextureFile
	<stdcall: Model3D LoadModel lpstr >
	^self invalidCall!

loadShader: vsFileName fsFileName: fsFileName
<stdcall: Shader LoadShader lpstr lpstr >
^self invalidCall!

loadShaderCode: stringVsCode fsCode: stringFsCode 
	<stdcall: Shader LoadShaderCode char* char* >
	^self invalidCall!

loadShaderFromMemory: stringVsCode fsCode: stringFsCode 
	<stdcall: Shader LoadShaderFromMemory lpvoid lpvoid >
	^self invalidCall!

loadTexture: stringTextureFile
	<stdcall: Texture2D LoadTexture lpvoid >
	^self invalidCall!

maximizeWindow
	<stdcall: void MaximizeWindow>
	^self invalidCall!

minimizeWindow
	<stdcall: void MinimizeWindow>
	^self invalidCall!

restoreWindow
	<stdcall: void RestoreWindow>
	^self invalidCall!

setCameraMode: camera3D type: cameraTypeInt 
	<stdcall: void SetCameraMode Camera3D sdword >
	^self invalidCall!

setClipboardText: string
	<stdcall: void SetClipboardText char* >
	^self invalidCall!

setConfigFlags: intFlag 
	<stdcall: void SetConfigFlags sdword >
	^self invalidCall!

setShaderValue: shader uniformLoc: intUniformLoc value: value uniformType: intUniformType 
	<stdcall: void SetShaderValue Shader sdword lpvoid* sdword >
	^self invalidCall!

setShaderValueV: shader uniformLoc: intUniformLoc value: value uniformType: intUniformType intCount: intCount 
	<stdcall: void SetShaderValueV Shader sdword lpvoid* sdword sdword >
	^self invalidCall!

setTargetFPS: intTarget 
	"RLAPI void SetTargetFPS(int fps);                                 // Set target FPS (maximum)"
	<stdcall: void SetTargetFPS sdword >
	^self invalidCall!

setWindowFocused 
	<stdcall: void SetWindowFocused>
	^self invalidCall!

setWindowIcon: imageRaylib 
	"Set icon for window (only PLATFORM_DESKTOP)"
	<stdcall: void SetWindowIcon ImageRaylib >
	^self invalidCall!

setWindowIcons: imagesArrayPointer count: intCount 
	"Set icon for window (only PLATFORM_DESKTOP)"
	<stdcall: void SetWindowIcons ExternalArray* dword>
	^self invalidCall!

setWindowMaxSize: intWidth height: intHeight 
	<stdcall: void SetWindowMaxSize sdword sdword >
	^self invalidCall!

setWindowMinSize: intWidth height: intHeight 
	<stdcall: void SetWindowMinSize sdword sdword >
	^self invalidCall!

setWindowMonitor: intX 
	<stdcall: void SetWindowMonitor sdword >
	^self invalidCall!

setWindowOpacity: floatOpacity 
	<stdcall: void SetWindowOpacity float >
	^self invalidCall!

setWindowPosition: intX y: intY 
	<stdcall: void SetWindowPosition sdword sdword >
	^self invalidCall!

setWindowSize: intWidth height: intHeight 
	<stdcall: void SetWindowSize sdword sdword >
	^self invalidCall!

setWindowState: intFlag 
	<stdcall: void SetWindowState dword >
	^self invalidCall!

setWindowTitle: stringTitle 
	<stdcall: void SetWindowTitle char* >
	^self invalidCall!

showCursor
	<stdcall: void ShowCursor>
	^self invalidCall!

toggleBorderlessWindowed
	<stdcall: void ToggleBorderlessWindowed>
	^self invalidCall!

toggleFullscreen
	<stdcall: void ToggleFullscreen>
	^self invalidCall!

traceLog: intLogType stringParameter: string
	<stdcall: void TraceLog sdword char*>
	^self invalidCall!

undecorateWindow
	<stdcall: void UndecorateWindow>
	^self invalidCall!

unhideWindow
	<stdcall: void UnhideWindow>
	^self invalidCall!

updateCamera: camera3dReference 
	<stdcall: void UpdateCamera Camera3D* >
	^self invalidCall!

windowShouldClose
	"RLAPI bool WindowShouldClose(void);                               // Check if KEY_ESCAPE pressed or Close icon pressed"
	<stdcall: bool WindowShouldClose>
	^self invalidCall! !

!RaylibLibrary categoriesForMethods!
beginBlendMode:!core!public! !
beginDrawing!core!public! !
beginMode2D:!core!public! !
beginMode3D:!core!public! !
beginScissorMode:y:width:height:!core!public! !
beginShaderMode:!core!public! !
beginTextureMode:!core!public! !
beginVrDrawing!core!public! !
clearBackground:!core!public! !
clearWindowState:!public! !
closeVr!core!public! !
closeWindow!core!public! !
disableCursor!core!public! !
disableEventWaiting!core!public! !
drawCircle:y:radius:color:!public! !
drawCircleV:radius:color:!public! !
drawCube:width:height:length:color:!public! !
drawCubeWires:width:height:length:color:!public! !
drawFps:posY:!public! !
drawLine:startPosY:endPosX:endPosY:color:!public! !
drawLineEx:endVector2:width:color:!public! !
drawLineV:endPos:color:!public! !
drawModel:position:scale:color:!public! !
drawPixel:posY:color:!public! !
drawPlane:size:color:!public! !
drawPoly:sides:radius:rotation:color:!public! !
drawRectangle:posY:width:height:color:!public! !
drawRectanglePro:origin:rotation:color:!public! !
drawRectangleV:size:color:!public! !
drawText:posX:posY:fontSize:color:!public! !
drawTexture:posX:posY:tint:!public! !
drawTextureEx:position:rotation:scale:tint:!public! !
drawTexturePro:source:dest:origin:rotation:color:!public! !
drawTextureRec:rectangleSource:position:tint:!public! !
drawTextureV:position:tint:!public! !
enableCursor!core!public! !
enableEventWaiting!core!public! !
endBlendMode!core!public! !
endDrawing!core!public! !
endMode2D!core!public! !
endMode3D!core!public! !
endScissorMode!core!public! !
endShaderMode!core!public! !
endTextureMode!core!public! !
endVrDrawing!core!public! !
getClipboardText!core!public! !
getCurrentMonitor!core!public! !
getFrameTime!public! !
getGamepadAxisMovement:axis:!core!public! !
getMonitorCount!core!public! !
getMonitorHeight:!core!public! !
getMonitorName:!core!public! !
getMonitorPhysicalHeight:!core!public! !
getMonitorPhysicalWidth:!core!public! !
getMonitorPosition:!core!public! !
getMonitorRefreshRate:!core!public! !
getMonitorWidth:!core!public! !
getMouseX!public! !
getMouseY!public! !
getRenderHeight!core!public! !
getRenderWidth!core!public! !
getScreenHeight!core!public! !
getScreenWidth!core!public! !
getShaderLocation:name:!core!public! !
getShaderLocationAttrib:name:!core!public! !
getTime!core!public! !
getWindowHandle!core!public! !
getWindowPosition!core!public! !
getWindowScaleDPI!core!public! !
guiButton:text:!public! !
guiEnable!public! !
guiGrid:text:spacing:subdivs:!public! !
guiSetFont:!public! !
guiSetStyle:property:value:!public! !
guiTextBox:text:textSize:editMode:!public! !
guiTextBoxMulti:text:textSize:editMode:!public! !
hideCursor!core!public! !
hideWindow!core!public! !
initVr!public! !
initWindow:height:title:!core!public! !
isCursorHidden!core!public! !
isCursorOnScreen!core!public! !
isGamepadAvailable:!public! !
isGamepadButtonPressed:button:!public! !
isGamepadeAvailable:!public! !
isKeyDown:!public! !
isKeyPressed:!public! !
isMouseButtonDown:!public! !
isMouseButtonPressed:!public! !
isMouseButtonReleased:!public! !
isWindowFlags:!public! !
isWindowFocused!core!public! !
isWindowFullscreen!core!public! !
isWindowHidden!core!public! !
isWindowMaximized!core!public! !
isWindowMinimized!core!public! !
isWindowReady!core!public! !
isWindowResized!core!public! !
isWindowState:!core!public! !
loadFont:!public! !
loadImage:!public! !
loadMaterialDefault!public! !
loadModel:!public! !
loadShader:fsFileName:!core!public! !
loadShaderCode:fsCode:!core!public! !
loadShaderFromMemory:fsCode:!core!public! !
loadTexture:!public! !
maximizeWindow!public! !
minimizeWindow!public! !
restoreWindow!public! !
setCameraMode:type:!public! !
setClipboardText:!core!public! !
setConfigFlags:!public! !
setShaderValue:uniformLoc:value:uniformType:!public! !
setShaderValueV:uniformLoc:value:uniformType:intCount:!public! !
setTargetFPS:!public! !
setWindowFocused!core!public! !
setWindowIcon:!core!public! !
setWindowIcons:count:!core!public! !
setWindowMaxSize:height:!core!public! !
setWindowMinSize:height:!core!public! !
setWindowMonitor:!core!public! !
setWindowOpacity:!public! !
setWindowPosition:y:!core!public! !
setWindowSize:height:!core!public! !
setWindowState:!public! !
setWindowTitle:!core!public! !
showCursor!core!public! !
toggleBorderlessWindowed!public! !
toggleFullscreen!public! !
traceLog:stringParameter:!core!public! !
undecorateWindow!public! !
unhideWindow!core!public! !
updateCamera:!core!public! !
windowShouldClose!core!public! !
!

!RaylibLibrary class methodsFor!

fileName
	^FileLocator imageRelative localFileSpecFor: 'raylib'! !

!RaylibLibrary class categoriesForMethods!
fileName!public! !
!

Camera2D guid: (GUID fromString: '{855a092e-a560-4580-b5ab-ea073f118a45}')!

Camera2D addClassConstant: '_OffsetOf_offset' value: 16r0!
Camera2D addClassConstant: '_OffsetOf_rotation' value: 16r10!
Camera2D addClassConstant: '_OffsetOf_target' value: 16r8!
Camera2D addClassConstant: '_OffsetOf_zoom' value: 16r14!

Camera2D comment: ''!

!Camera2D categoriesForClass!External-Data-Structured! !

!Camera2D methodsFor!

offset
	"Answer the <Vector2> value of the receiver's 'offset' field."

	^Vector2 fromAddress: bytes yourAddress!

offset: aVector2
	"Set the receiver's 'offset' field to the value of the argument, aVector2"

	aVector2
		replaceBytesOf: bytes
		from: ##(_OffsetOf_offset + 1)
		to: ##(_OffsetOf_offset + Vector2 basicByteSize)
		startingAt: 1!

rotation
	"Answer the <Float> value of the receiver's 'rotation' field."

	^bytes floatAtOffset: _OffsetOf_rotation!

rotation: aFloat
	"Set the receiver's 'rotation' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_rotation put: aFloat!

target
	"Answer the <Vector2> value of the receiver's 'target' field."

	^Vector2 fromAddress: bytes yourAddress + _OffsetOf_target!

target: aVector2
	"Set the receiver's 'target' field to the value of the argument, aVector2"

	aVector2
		replaceBytesOf: bytes
		from: ##(_OffsetOf_target + 1)
		to: ##(_OffsetOf_target + Vector2 basicByteSize)
		startingAt: 1!

zoom
	"Answer the <Float> value of the receiver's 'zoom' field."

	^bytes floatAtOffset: _OffsetOf_zoom!

zoom: aFloat
	"Set the receiver's 'zoom' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_zoom put: aFloat! !

!Camera2D categoriesForMethods!
offset!**compiled accessors**!public! !
offset:!**compiled accessors**!public! !
rotation!**compiled accessors**!public! !
rotation:!**compiled accessors**!public! !
target!**compiled accessors**!public! !
target:!**compiled accessors**!public! !
zoom!**compiled accessors**!public! !
zoom:!**compiled accessors**!public! !
!

!Camera2D class methodsFor!

defineFields	
	self 
		defineField: #offset type:  (StructureField type: Vector2);
		defineField: #target type: (StructureField type: Vector2);
		defineField: #rotation type: FLOATField new;
		defineField: #zoom type: FLOATField new.
	!

getFieldNames
	^#(#offset #target #rotation #zoom)! !

!Camera2D class categoriesForMethods!
defineFields!public! !
getFieldNames!**compiled accessors**!constants!private! !
!

Camera3D guid: (GUID fromString: '{ee3caa3c-a4ce-494f-a258-b44c9c21829e}')!

Camera3D addClassConstant: '_OffsetOf_fovy' value: 16r24!
Camera3D addClassConstant: '_OffsetOf_position' value: 16r0!
Camera3D addClassConstant: '_OffsetOf_target' value: 16rC!
Camera3D addClassConstant: '_OffsetOf_type' value: 16r28!
Camera3D addClassConstant: '_OffsetOf_up' value: 16r18!

Camera3D comment: ''!

!Camera3D categoriesForClass!Unclassified! !

!Camera3D methodsFor!

fovy
	"Answer the <Float> value of the receiver's 'fovy' field."

	^bytes floatAtOffset: _OffsetOf_fovy!

fovy: aFloat
	"Set the receiver's 'fovy' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_fovy put: aFloat!

position
	"Answer the <Vector3> value of the receiver's 'position' field."

	^Vector3 fromAddress: bytes yourAddress!

position: aVector3
	"Set the receiver's 'position' field to the value of the argument, aVector3"

	aVector3
		replaceBytesOf: bytes
		from: ##(_OffsetOf_position + 1)
		to: ##(_OffsetOf_position + Vector3 basicByteSize)
		startingAt: 1!

target
	"Answer the <Vector3> value of the receiver's 'target' field."

	^Vector3 fromAddress: bytes yourAddress + _OffsetOf_target!

target: aVector3
	"Set the receiver's 'target' field to the value of the argument, aVector3"

	aVector3
		replaceBytesOf: bytes
		from: ##(_OffsetOf_target + 1)
		to: ##(_OffsetOf_target + Vector3 basicByteSize)
		startingAt: 1!

type
	"Answer the <Integer> value of the receiver's 'type' field."

	^bytes sdwordAtOffset: _OffsetOf_type!

type: anInteger
	"Set the receiver's 'type' field to the value of the argument, anInteger"

	bytes sdwordAtOffset: _OffsetOf_type put: anInteger!

up
	"Answer the <Vector3> value of the receiver's 'up' field."

	^Vector3 fromAddress: bytes yourAddress + _OffsetOf_up!

up: aVector3
	"Set the receiver's 'up' field to the value of the argument, aVector3"

	aVector3
		replaceBytesOf: bytes
		from: ##(_OffsetOf_up + 1)
		to: ##(_OffsetOf_up + Vector3 basicByteSize)
		startingAt: 1! !

!Camera3D categoriesForMethods!
fovy!**compiled accessors**!public! !
fovy:!**compiled accessors**!public! !
position!**compiled accessors**!public! !
position:!**compiled accessors**!public! !
target!**compiled accessors**!public! !
target:!**compiled accessors**!public! !
type!**compiled accessors**!public! !
type:!**compiled accessors**!public! !
up!**compiled accessors**!public! !
up:!**compiled accessors**!public! !
!

!Camera3D class methodsFor!

defineFields	
	self 
		defineField: #position type:  (StructureField type: Vector3);
		defineField: #target type: (StructureField type: Vector3);
		defineField: #up type: (StructureField type: Vector3);
		defineField: #fovy type: FLOATField new;
		defineField: #type type: SDWORDField new.
	self byteSize: 44!

getFieldNames
	^#(#position #target #up #fovy #type)! !

!Camera3D class categoriesForMethods!
defineFields!public! !
getFieldNames!**compiled accessors**!constants!private! !
!

ColorRaylib guid: (GUID fromString: '{c5a2250e-cdb4-4e9e-b8ca-09b8d71885ac}')!

ColorRaylib addClassConstant: '_OffsetOf_a' value: 16r3!
ColorRaylib addClassConstant: '_OffsetOf_b' value: 16r2!
ColorRaylib addClassConstant: '_OffsetOf_g' value: 16r1!
ColorRaylib addClassConstant: '_OffsetOf_r' value: 16r0!

ColorRaylib comment: ''!

!ColorRaylib categoriesForClass!External-Data-Structured! !

!ColorRaylib methodsFor!

a
	"Answer the <Integer> value of the receiver's 'a' field."

	^bytes byteAtOffset: _OffsetOf_a!

a: anInteger
	"Set the receiver's 'a' field to the value of the argument, anInteger"

	bytes byteAtOffset: _OffsetOf_a put: anInteger!

b
	"Answer the <Integer> value of the receiver's 'b' field."

	^bytes byteAtOffset: _OffsetOf_b!

b: anInteger
	"Set the receiver's 'b' field to the value of the argument, anInteger"

	bytes byteAtOffset: _OffsetOf_b put: anInteger!

g
	"Answer the <Integer> value of the receiver's 'g' field."

	^bytes byteAtOffset: _OffsetOf_g!

g: anInteger
	"Set the receiver's 'g' field to the value of the argument, anInteger"

	bytes byteAtOffset: _OffsetOf_g put: anInteger!

r
	"Answer the <Integer> value of the receiver's 'r' field."

	^bytes byteAtOffset: _OffsetOf_r!

r: anInteger
	"Set the receiver's 'r' field to the value of the argument, anInteger"

	bytes byteAtOffset: _OffsetOf_r put: anInteger! !

!ColorRaylib categoriesForMethods!
a!**compiled accessors**!public! !
a:!**compiled accessors**!public! !
b!**compiled accessors**!public! !
b:!**compiled accessors**!public! !
g!**compiled accessors**!public! !
g:!**compiled accessors**!public! !
r!**compiled accessors**!public! !
r:!**compiled accessors**!public! !
!

!ColorRaylib class methodsFor!

defineFields	
	self defineField: #r type: BYTEField new ;
	defineField: #g type: BYTEField new ;
	defineField: #b type: BYTEField new ;
	defineField: #a type: BYTEField new .
	self byteSize: 4!

getFieldNames
	^#(#r #g #b #a)! !

!ColorRaylib class categoriesForMethods!
defineFields!public! !
getFieldNames!**compiled accessors**!constants!private! !
!

FontRaylib guid: (GUID fromString: '{28e05cc9-7563-4475-95a7-9bfc4c5e41a9}')!

FontRaylib addClassConstant: '_OffsetOf_baseSize' value: 16r0!
FontRaylib addClassConstant: '_OffsetOf_glyphCount' value: 16r4!
FontRaylib addClassConstant: '_OffsetOf_glyphPadding' value: 16r8!
FontRaylib addClassConstant: '_OffsetOf_glyphs' value: 16r24!
FontRaylib addClassConstant: '_OffsetOf_recs' value: 16r20!
FontRaylib addClassConstant: '_OffsetOf_texture' value: 16rC!

FontRaylib comment: ''!

!FontRaylib categoriesForClass!External-Data-Structured! !

!FontRaylib class methodsFor!

defineFields	
	self 
		defineField: #baseSize type: SDWORDField new;
		defineField: #glyphCount type: SDWORDField new;
		defineField: #glyphPadding type: SDWORDField new;
		defineField: #texture type: (StructureField type: Texture2D);
		defineField: #recs type: (StructureArrayPointerField type: RectangleRaylib lengthField: #glyphCount);
		defineField: #glyphs type: (StructureArrayPointerField type: GlyphInfo lengthField: #glyphCount).
		
	! !

!FontRaylib class categoriesForMethods!
defineFields!public! !
!

GlyphInfo guid: (GUID fromString: '{6ec4b046-afcb-43b0-9c2f-3a85649ff9b2}')!

GlyphInfo addClassConstant: '_OffsetOf_advanceX' value: 16rC!
GlyphInfo addClassConstant: '_OffsetOf_image' value: 16r10!
GlyphInfo addClassConstant: '_OffsetOf_offsetX' value: 16r4!
GlyphInfo addClassConstant: '_OffsetOf_offsetY' value: 16r8!
GlyphInfo addClassConstant: '_OffsetOf_value' value: 16r0!

GlyphInfo comment: ''!

!GlyphInfo categoriesForClass!External-Data-Structured! !

!GlyphInfo class methodsFor!

defineFields	
	self 
		defineField: #value type: SDWORDField new;
		defineField: #offsetX type: SDWORDField new;
		defineField: #offsetY type: SDWORDField new;
		defineField: #advanceX type: SDWORDField new;
		defineField: #image type: (StructureField type: ImageRaylib).
		
	! !

!GlyphInfo class categoriesForMethods!
defineFields!public! !
!

ImageRaylib guid: (GUID fromString: '{480596f0-7895-4255-b29a-3dd6813da563}')!

ImageRaylib addClassConstant: '_OffsetOf_data' value: 16r0!
ImageRaylib addClassConstant: '_OffsetOf_format' value: 16r10!
ImageRaylib addClassConstant: '_OffsetOf_height' value: 16r8!
ImageRaylib addClassConstant: '_OffsetOf_mipmaps' value: 16rC!
ImageRaylib addClassConstant: '_OffsetOf_width' value: 16r4!

ImageRaylib comment: ''!

!ImageRaylib categoriesForClass!External-Data-Structured! !

!ImageRaylib methodsFor!

data
	"Answer the <nil> value of the receiver's 'data' field."

	^bytes intPtrAtOffset: _OffsetOf_data!

data: anil
	"Set the receiver's 'data' field to the value of the argument, anil"

	bytes uintPtrAtOffset: _OffsetOf_data put: anil yourAddress!

format
	"Answer the <Integer> value of the receiver's 'format' field."

	^bytes sdwordAtOffset: _OffsetOf_format!

format: anInteger
	"Set the receiver's 'format' field to the value of the argument, anInteger"

	bytes sdwordAtOffset: _OffsetOf_format put: anInteger!

height
	"Answer the <Integer> value of the receiver's 'height' field."

	^bytes sdwordAtOffset: _OffsetOf_height!

height: anInteger
	"Set the receiver's 'height' field to the value of the argument, anInteger"

	bytes sdwordAtOffset: _OffsetOf_height put: anInteger!

mipmaps
	"Answer the <Integer> value of the receiver's 'mipmaps' field."

	^bytes sdwordAtOffset: _OffsetOf_mipmaps!

mipmaps: anInteger
	"Set the receiver's 'mipmaps' field to the value of the argument, anInteger"

	bytes sdwordAtOffset: _OffsetOf_mipmaps put: anInteger!

width
	"Answer the <Integer> value of the receiver's 'width' field."

	^bytes sdwordAtOffset: _OffsetOf_width!

width: anInteger
	"Set the receiver's 'width' field to the value of the argument, anInteger"

	bytes sdwordAtOffset: _OffsetOf_width put: anInteger! !

!ImageRaylib categoriesForMethods!
data!public! !
data:!public! !
format!**compiled accessors**!public! !
format:!**compiled accessors**!public! !
height!**compiled accessors**!public! !
height:!**compiled accessors**!public! !
mipmaps!**compiled accessors**!public! !
mipmaps:!**compiled accessors**!public! !
width!**compiled accessors**!public! !
width:!**compiled accessors**!public! !
!

!ImageRaylib class methodsFor!

defineFields	
	" self defineFields " 
	self 
		defineField: #data type: PointerField new offset: 0;
		defineField: #width type: SDWORDField new offset: 4;
		defineField: #height type: SDWORDField new offset: 8;
		defineField: #mipmaps type: SDWORDField new offset: 12;
		defineField: #format type: SDWORDField new offset: 16.
	self byteSize: 20!

getFieldNames
	^#(#data #width #height #mipmaps #format)! !

!ImageRaylib class categoriesForMethods!
defineFields!public! !
getFieldNames!**compiled accessors**!constants!private! !
!

Material guid: (GUID fromString: '{2c1d5463-4df9-4410-974c-76bf226c5ed6}')!

Material addClassConstant: '_OffsetOf_maps' value: 16r8!
Material addClassConstant: '_OffsetOf_params' value: 16rC!
Material addClassConstant: '_OffsetOf_shader' value: 16r0!

Material comment: ''!

!Material categoriesForClass!External-Data-Structured! !

!Material methodsFor!

maps
	"Answer the <StructureArray> value of the receiver's 'maps' field."

	^StructureArray
		fromAddress: (bytes intPtrAtOffset: _OffsetOf_maps)
		length: 12
		elementClass: MaterialMap!

maps: aStructureArray
	"Set the receiver's 'maps' field to the value of the argument, aStructureArray"

	bytes uintPtrAtOffset: _OffsetOf_maps put: aStructureArray yourAddress!

params
	"Answer the <FLOATArray> value of the receiver's 'params' field."

	^FLOATArray fromAddress: (bytes intPtrAtOffset: _OffsetOf_params) length: 12!

params: aFLOATArray
	"Set the receiver's 'params' field to the value of the argument, aFLOATArray"

	bytes uintPtrAtOffset: _OffsetOf_params put: aFLOATArray yourAddress!

shader
	"Answer the <Shader> value of the receiver's 'shader' field."

	^Shader fromAddress: bytes yourAddress!

shader: aShader
	"Set the receiver's 'shader' field to the value of the argument, aShader"

	aShader
		replaceBytesOf: bytes
		from: ##(_OffsetOf_shader + 1)
		to: ##(_OffsetOf_shader + Shader basicByteSize)
		startingAt: 1! !

!Material categoriesForMethods!
maps!**compiled accessors**!public! !
maps:!**compiled accessors**!public! !
params!**compiled accessors**!public! !
params:!**compiled accessors**!public! !
shader!**compiled accessors**!public! !
shader:!**compiled accessors**!public! !
!

!Material class methodsFor!

defineFields	
	self 
		defineField: #shader type: (StructureField type: Shader);
		defineField: #maps type: (StructureArrayPointerField type: MaterialMap length: 12);
		defineField: #params type: (ArrayPointerField type: FLOATArray length: 12).
		!

getFieldNames
	^#(#shader #maps #params)! !

!Material class categoriesForMethods!
defineFields!public! !
getFieldNames!**compiled accessors**!constants!private! !
!

MaterialMap guid: (GUID fromString: '{25708c1f-6a16-42b0-9054-a07462a4fec5}')!

MaterialMap addClassConstant: '_OffsetOf_color' value: 16r14!
MaterialMap addClassConstant: '_OffsetOf_texture' value: 16r0!
MaterialMap addClassConstant: '_OffsetOf_value' value: 16r18!

MaterialMap comment: ''!

!MaterialMap categoriesForClass!External-Data-Structured! !

!MaterialMap methodsFor!

color
	"Answer the <ColorRaylib> value of the receiver's 'color' field."

	^ColorRaylib fromAddress: bytes yourAddress + _OffsetOf_color!

color: aColorRaylib
	"Set the receiver's 'color' field to the value of the argument, aColorRaylib"

	aColorRaylib
		replaceBytesOf: bytes
		from: ##(_OffsetOf_color + 1)
		to: ##(_OffsetOf_color + ColorRaylib basicByteSize)
		startingAt: 1!

texture
	"Answer the <Texture2D> value of the receiver's 'texture' field."

	^Texture2D fromAddress: bytes yourAddress!

texture: aTexture2D
	"Set the receiver's 'texture' field to the value of the argument, aTexture2D"

	aTexture2D
		replaceBytesOf: bytes
		from: ##(_OffsetOf_texture + 1)
		to: ##(_OffsetOf_texture + Texture2D basicByteSize)
		startingAt: 1!

value
	"Answer the <Float> value of the receiver's 'value' field."

	^bytes floatAtOffset: _OffsetOf_value!

value: aFloat
	"Set the receiver's 'value' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_value put: aFloat! !

!MaterialMap categoriesForMethods!
color!**compiled accessors**!public! !
color:!**compiled accessors**!public! !
texture!**compiled accessors**!public! !
texture:!**compiled accessors**!public! !
value!**compiled accessors**!public! !
value:!**compiled accessors**!public! !
!

!MaterialMap class methodsFor!

defineFields	
	self 
		defineField: #texture type: (StructureField type: Texture2D);
		defineField: #color type: (StructureField type: ColorRaylib);
		defineField: #value type: FLOATField new.
	self byteSize: 20 + 4 + 4!

getFieldNames
	^#(#texture #color #value)! !

!MaterialMap class categoriesForMethods!
defineFields!public! !
getFieldNames!**compiled accessors**!constants!private! !
!

Matrix guid: (GUID fromString: '{3697ff93-fc8f-4fd1-8fd7-78c4766f485f}')!

Matrix addClassConstant: '_OffsetOf_m0' value: 16r0!
Matrix addClassConstant: '_OffsetOf_m1' value: 16r10!
Matrix addClassConstant: '_OffsetOf_m10' value: 16r28!
Matrix addClassConstant: '_OffsetOf_m11' value: 16r38!
Matrix addClassConstant: '_OffsetOf_m12' value: 16rC!
Matrix addClassConstant: '_OffsetOf_m13' value: 16r1C!
Matrix addClassConstant: '_OffsetOf_m14' value: 16r2C!
Matrix addClassConstant: '_OffsetOf_m15' value: 16r3C!
Matrix addClassConstant: '_OffsetOf_m2' value: 16r20!
Matrix addClassConstant: '_OffsetOf_m3' value: 16r30!
Matrix addClassConstant: '_OffsetOf_m4' value: 16r4!
Matrix addClassConstant: '_OffsetOf_m5' value: 16r14!
Matrix addClassConstant: '_OffsetOf_m6' value: 16r24!
Matrix addClassConstant: '_OffsetOf_m7' value: 16r34!
Matrix addClassConstant: '_OffsetOf_m8' value: 16r8!
Matrix addClassConstant: '_OffsetOf_m9' value: 16r18!

Matrix comment: ''!

!Matrix categoriesForClass!External-Data-Structured! !

!Matrix methodsFor!

m0
	"Answer the <Float> value of the receiver's 'm0' field."

	^bytes floatAtOffset: _OffsetOf_m0!

m0: aFloat
	"Set the receiver's 'm0' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_m0 put: aFloat!

m1
	"Answer the <Float> value of the receiver's 'm1' field."

	^bytes floatAtOffset: _OffsetOf_m1!

m1: aFloat
	"Set the receiver's 'm1' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_m1 put: aFloat!

m10
	"Answer the <Float> value of the receiver's 'm10' field."

	^bytes floatAtOffset: _OffsetOf_m10!

m10: aFloat
	"Set the receiver's 'm10' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_m10 put: aFloat!

m11
	"Answer the <Float> value of the receiver's 'm11' field."

	^bytes floatAtOffset: _OffsetOf_m11!

m11: aFloat
	"Set the receiver's 'm11' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_m11 put: aFloat!

m12
	"Answer the <Float> value of the receiver's 'm12' field."

	^bytes floatAtOffset: _OffsetOf_m12!

m12: aFloat
	"Set the receiver's 'm12' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_m12 put: aFloat!

m13
	"Answer the <Float> value of the receiver's 'm13' field."

	^bytes floatAtOffset: _OffsetOf_m13!

m13: aFloat
	"Set the receiver's 'm13' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_m13 put: aFloat!

m14
	"Answer the <Float> value of the receiver's 'm14' field."

	^bytes floatAtOffset: _OffsetOf_m14!

m14: aFloat
	"Set the receiver's 'm14' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_m14 put: aFloat!

m15
	"Answer the <Float> value of the receiver's 'm15' field."

	^bytes floatAtOffset: _OffsetOf_m15!

m15: aFloat
	"Set the receiver's 'm15' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_m15 put: aFloat!

m2
	"Answer the <Float> value of the receiver's 'm2' field."

	^bytes floatAtOffset: _OffsetOf_m2!

m2: aFloat
	"Set the receiver's 'm2' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_m2 put: aFloat!

m3
	"Answer the <Float> value of the receiver's 'm3' field."

	^bytes floatAtOffset: _OffsetOf_m3!

m3: aFloat
	"Set the receiver's 'm3' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_m3 put: aFloat!

m4
	"Answer the <Float> value of the receiver's 'm4' field."

	^bytes floatAtOffset: _OffsetOf_m4!

m4: aFloat
	"Set the receiver's 'm4' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_m4 put: aFloat!

m5
	"Answer the <Float> value of the receiver's 'm5' field."

	^bytes floatAtOffset: _OffsetOf_m5!

m5: aFloat
	"Set the receiver's 'm5' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_m5 put: aFloat!

m6
	"Answer the <Float> value of the receiver's 'm6' field."

	^bytes floatAtOffset: _OffsetOf_m6!

m6: aFloat
	"Set the receiver's 'm6' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_m6 put: aFloat!

m7
	"Answer the <Float> value of the receiver's 'm7' field."

	^bytes floatAtOffset: _OffsetOf_m7!

m7: aFloat
	"Set the receiver's 'm7' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_m7 put: aFloat!

m8
	"Answer the <Float> value of the receiver's 'm8' field."

	^bytes floatAtOffset: _OffsetOf_m8!

m8: aFloat
	"Set the receiver's 'm8' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_m8 put: aFloat!

m9
	"Answer the <Float> value of the receiver's 'm9' field."

	^bytes floatAtOffset: _OffsetOf_m9!

m9: aFloat
	"Set the receiver's 'm9' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_m9 put: aFloat! !

!Matrix categoriesForMethods!
m0!**compiled accessors**!public! !
m0:!**compiled accessors**!public! !
m1!**compiled accessors**!public! !
m1:!**compiled accessors**!public! !
m10!**compiled accessors**!public! !
m10:!**compiled accessors**!public! !
m11!**compiled accessors**!public! !
m11:!**compiled accessors**!public! !
m12!**compiled accessors**!public! !
m12:!**compiled accessors**!public! !
m13!**compiled accessors**!public! !
m13:!**compiled accessors**!public! !
m14!**compiled accessors**!public! !
m14:!**compiled accessors**!public! !
m15!**compiled accessors**!public! !
m15:!**compiled accessors**!public! !
m2!**compiled accessors**!public! !
m2:!**compiled accessors**!public! !
m3!**compiled accessors**!public! !
m3:!**compiled accessors**!public! !
m4!**compiled accessors**!public! !
m4:!**compiled accessors**!public! !
m5!**compiled accessors**!public! !
m5:!**compiled accessors**!public! !
m6!**compiled accessors**!public! !
m6:!**compiled accessors**!public! !
m7!**compiled accessors**!public! !
m7:!**compiled accessors**!public! !
m8!**compiled accessors**!public! !
m8:!**compiled accessors**!public! !
m9!**compiled accessors**!public! !
m9:!**compiled accessors**!public! !
!

!Matrix class methodsFor!

defineFields	
	self 
		defineField: #m0 type: FLOATField new;
		defineField: #m4 type: FLOATField new;
		defineField: #m8 type: FLOATField new;
		defineField: #m12 type: FLOATField new;

		defineField: #m1 type: FLOATField new;
		defineField: #m5 type: FLOATField new;
		defineField: #m9 type: FLOATField new;
		defineField: #m13 type: FLOATField new;

		defineField: #m2 type: FLOATField new;
		defineField: #m6 type: FLOATField new;
		defineField: #m10 type: FLOATField new;
		defineField: #m14 type: FLOATField new;

		defineField: #m3 type: FLOATField new;
		defineField: #m7 type: FLOATField new;
		defineField: #m11 type: FLOATField new;
		defineField: #m15 type: FLOATField new.
	self byteSize: (4 * 4 * 4)!

getFieldNames
	^#(#m0 #m4 #m8 #m12 #m1 #m5 #m9 #m13 #m2 #m6 #m10 #m14 #m3 #m7 #m11 #m15)! !

!Matrix class categoriesForMethods!
defineFields!public! !
getFieldNames!**compiled accessors**!constants!private! !
!

Mesh guid: (GUID fromString: '{c5d37e12-7925-4e2f-babd-1600ded5546b}')!

Mesh addClassConstant: '_OffsetOf_animNormals' value: 16r28!
Mesh addClassConstant: '_OffsetOf_animVertices' value: 16r24!
Mesh addClassConstant: '_OffsetOf_boneIds' value: 16r2C!
Mesh addClassConstant: '_OffsetOf_boneWeights' value: 16r30!
Mesh addClassConstant: '_OffsetOf_colors' value: 16r1C!
Mesh addClassConstant: '_OffsetOf_indices' value: 16r20!
Mesh addClassConstant: '_OffsetOf_normals' value: 16r14!
Mesh addClassConstant: '_OffsetOf_tangents' value: 16r18!
Mesh addClassConstant: '_OffsetOf_texcoords' value: 16rC!
Mesh addClassConstant: '_OffsetOf_texcoords2' value: 16r10!
Mesh addClassConstant: '_OffsetOf_triangleCount' value: 16r4!
Mesh addClassConstant: '_OffsetOf_vaoId' value: 16r34!
Mesh addClassConstant: '_OffsetOf_vboId' value: 16r38!
Mesh addClassConstant: '_OffsetOf_vertexCount' value: 16r0!
Mesh addClassConstant: '_OffsetOf_vertices' value: 16r8!

Mesh comment: ''!

!Mesh categoriesForClass!External-Data-Structured! !

!Mesh methodsFor!

animNormals
	"Answer the <FLOATArray> value of the receiver's 'animNormals' field."

	^FLOATArray fromAddress: (bytes intPtrAtOffset: _OffsetOf_animNormals) length: 19926!

animNormals: aFLOATArray
	"Set the receiver's 'animNormals' field to the value of the argument, aFLOATArray"

	bytes uintPtrAtOffset: _OffsetOf_animNormals put: aFLOATArray yourAddress!

animVertices
	"Answer the <FLOATArray> value of the receiver's 'animVertices' field."

	^FLOATArray fromAddress: (bytes intPtrAtOffset: _OffsetOf_animVertices) length: 19926!

animVertices: aFLOATArray
	"Set the receiver's 'animVertices' field to the value of the argument, aFLOATArray"

	bytes uintPtrAtOffset: _OffsetOf_animVertices put: aFLOATArray yourAddress!

boneIds
	"Answer the <ByteArray> value of the receiver's 'boneIds' field."

	^ByteArray fromAddress: (bytes intPtrAtOffset: _OffsetOf_boneIds) length: 255!

boneIds: aByteArray
	"Set the receiver's 'boneIds' field to the value of the argument, aByteArray"

	bytes uintPtrAtOffset: _OffsetOf_boneIds put: aByteArray yourAddress!

boneWeights
	"Answer the <FLOATArray> value of the receiver's 'boneWeights' field."

	^FLOATArray fromAddress: (bytes intPtrAtOffset: _OffsetOf_boneWeights) length: 26568!

boneWeights: aFLOATArray
	"Set the receiver's 'boneWeights' field to the value of the argument, aFLOATArray"

	bytes uintPtrAtOffset: _OffsetOf_boneWeights put: aFLOATArray yourAddress!

colors
	"Answer the <ByteArray> value of the receiver's 'colors' field."

	^ByteArray fromAddress: (bytes intPtrAtOffset: _OffsetOf_colors) length: 26568!

colors: aByteArray
	"Set the receiver's 'colors' field to the value of the argument, aByteArray"

	bytes uintPtrAtOffset: _OffsetOf_colors put: aByteArray yourAddress!

indices
	"Answer the <WORDArray> value of the receiver's 'indices' field."

	^WORDArray fromAddress: (bytes intPtrAtOffset: _OffsetOf_indices) length: 6642!

indices: aWORDArray
	"Set the receiver's 'indices' field to the value of the argument, aWORDArray"

	bytes uintPtrAtOffset: _OffsetOf_indices put: aWORDArray yourAddress!

normals
	"Answer the <FLOATArray> value of the receiver's 'normals' field."

	^FLOATArray fromAddress: (bytes intPtrAtOffset: _OffsetOf_normals) length: 19926!

normals: aFLOATArray
	"Set the receiver's 'normals' field to the value of the argument, aFLOATArray"

	bytes uintPtrAtOffset: _OffsetOf_normals put: aFLOATArray yourAddress!

tangents
	"Answer the <FLOATArray> value of the receiver's 'tangents' field."

	^FLOATArray fromAddress: (bytes intPtrAtOffset: _OffsetOf_tangents) length: 26568!

tangents: aFLOATArray
	"Set the receiver's 'tangents' field to the value of the argument, aFLOATArray"

	bytes uintPtrAtOffset: _OffsetOf_tangents put: aFLOATArray yourAddress!

texcoords
	"Answer the <FLOATArray> value of the receiver's 'texcoords' field."

	^FLOATArray fromAddress: (bytes intPtrAtOffset: _OffsetOf_texcoords) length: 13284!

texcoords: aFLOATArray
	"Set the receiver's 'texcoords' field to the value of the argument, aFLOATArray"

	bytes uintPtrAtOffset: _OffsetOf_texcoords put: aFLOATArray yourAddress!

texcoords2
	"Answer the <FLOATArray> value of the receiver's 'texcoords2' field."

	^FLOATArray fromAddress: (bytes intPtrAtOffset: _OffsetOf_texcoords2) length: 13284!

texcoords2: aFLOATArray
	"Set the receiver's 'texcoords2' field to the value of the argument, aFLOATArray"

	bytes uintPtrAtOffset: _OffsetOf_texcoords2 put: aFLOATArray yourAddress!

triangleCount
	"Answer the <Integer> value of the receiver's 'triangleCount' field."

	^bytes sdwordAtOffset: _OffsetOf_triangleCount!

triangleCount: anInteger
	"Set the receiver's 'triangleCount' field to the value of the argument, anInteger"

	bytes sdwordAtOffset: _OffsetOf_triangleCount put: anInteger!

vaoId
	"Answer the <Integer> value of the receiver's 'vaoId' field."

	^bytes dwordAtOffset: _OffsetOf_vaoId!

vaoId: anInteger
	"Set the receiver's 'vaoId' field to the value of the argument, anInteger"

	bytes dwordAtOffset: _OffsetOf_vaoId put: anInteger!

vboId
	"Answer the <DWORD> value of the receiver's 'vboId' field."

	^DWORD fromAddress: (bytes intPtrAtOffset: _OffsetOf_vboId)!

vboId: aDWORD
	"Set the receiver's 'vboId' field to the value of the argument, aDWORD"

	bytes uintPtrAtOffset: _OffsetOf_vboId put: aDWORD yourAddress!

vertexCount
	"Answer the <Integer> value of the receiver's 'vertexCount' field."

	^bytes sdwordAtOffset: _OffsetOf_vertexCount!

vertexCount: anInteger
	"Set the receiver's 'vertexCount' field to the value of the argument, anInteger"

	bytes sdwordAtOffset: _OffsetOf_vertexCount put: anInteger!

vertices
	"Answer the <FLOATArray> value of the receiver's 'vertices' field."

	^FLOATArray fromAddress: (bytes intPtrAtOffset: _OffsetOf_vertices) length: 19926!

vertices: aFLOATArray
	"Set the receiver's 'vertices' field to the value of the argument, aFLOATArray"

	bytes uintPtrAtOffset: _OffsetOf_vertices put: aFLOATArray yourAddress! !

!Mesh categoriesForMethods!
animNormals!**compiled accessors**!public! !
animNormals:!**compiled accessors**!public! !
animVertices!**compiled accessors**!public! !
animVertices:!**compiled accessors**!public! !
boneIds!**compiled accessors**!public! !
boneIds:!**compiled accessors**!public! !
boneWeights!**compiled accessors**!public! !
boneWeights:!**compiled accessors**!public! !
colors!**compiled accessors**!public! !
colors:!**compiled accessors**!public! !
indices!**compiled accessors**!public! !
indices:!**compiled accessors**!public! !
normals!**compiled accessors**!public! !
normals:!**compiled accessors**!public! !
tangents!**compiled accessors**!public! !
tangents:!**compiled accessors**!public! !
texcoords!**compiled accessors**!public! !
texcoords:!**compiled accessors**!public! !
texcoords2!**compiled accessors**!public! !
texcoords2:!**compiled accessors**!public! !
triangleCount!**compiled accessors**!public! !
triangleCount:!**compiled accessors**!public! !
vaoId!**compiled accessors**!public! !
vaoId:!**compiled accessors**!public! !
vboId!**compiled accessors**!public! !
vboId:!**compiled accessors**!public! !
vertexCount!**compiled accessors**!public! !
vertexCount:!**compiled accessors**!public! !
vertices!**compiled accessors**!public! !
vertices:!**compiled accessors**!public! !
!

!Mesh class methodsFor!

defineFields	
	self 
		defineField: #vertexCount type: SDWORDField new;
		defineField: #triangleCount type: SDWORDField new;
		defineField: #vertices type: (ArrayPointerField type: FLOATArray length:  6642 * 3);
		defineField: #texcoords type: (ArrayPointerField type: FLOATArray length: 6642 * 2);
		defineField: #texcoords2 type: (ArrayPointerField type: FLOATArray length: 6642 * 2);
		defineField: #normals type: (ArrayPointerField type: FLOATArray length: 6642 * 3);
		defineField: #tangents type: (ArrayPointerField type: FLOATArray length: 6642 * 4);
		defineField: #colors type: (ArrayPointerField type: ByteArray length: 6642 * 4);
		defineField: #indices type: (ArrayPointerField type: WORDArray length: 6642);
		defineField: #animVertices type: (ArrayPointerField type: FLOATArray length: 6642 * 3);
		defineField: #animNormals type: (ArrayPointerField type: FLOATArray length: 6642 * 3);
		defineField: #boneIds type: (ArrayPointerField type: ByteArray length: 255);
		defineField: #boneWeights type: (ArrayPointerField type: FLOATArray length: 6642 * 4);

		defineField: #vaoId type: DWORDField new;
		defineField: #vboId type: (PointerField type: DWORD).!

getFieldNames
	^#(#vertexCount #triangleCount #vertices #texcoords #texcoords2 #normals #tangents #colors #indices #animVertices #animNormals #boneIds #boneWeights #vaoId #vboId)! !

!Mesh class categoriesForMethods!
defineFields!public! !
getFieldNames!**compiled accessors**!constants!private! !
!

Model3D guid: (GUID fromString: '{38080adb-07d8-4632-8e59-83baeaafb143}')!

Model3D addClassConstant: '_OffsetOf_bindPose' value: 16r58!
Model3D addClassConstant: '_OffsetOf_boneCount' value: 16r50!
Model3D addClassConstant: '_OffsetOf_bones' value: 16r54!
Model3D addClassConstant: '_OffsetOf_materialCount' value: 16r44!
Model3D addClassConstant: '_OffsetOf_materials' value: 16r4C!
Model3D addClassConstant: '_OffsetOf_meshCount' value: 16r40!
Model3D addClassConstant: '_OffsetOf_meshes' value: 16r48!
Model3D addClassConstant: '_OffsetOf_transform' value: 16r0!

Model3D comment: ''!

!Model3D categoriesForClass!External-Data-Structured! !

!Model3D methodsFor!

materialCount
	"Answer the <Integer> value of the receiver's 'materialCount' field."

	^bytes sdwordAtOffset: _OffsetOf_materialCount!

materialCount: anInteger
	"Set the receiver's 'materialCount' field to the value of the argument, anInteger"

	bytes sdwordAtOffset: _OffsetOf_materialCount put: anInteger!

materials
	"Answer the <StructureArray> value of the receiver's 'materials' field."

	^StructureArray
		fromAddress: (bytes intPtrAtOffset: _OffsetOf_materials)
		length: self materialCount
		elementClass: Material!

materials: aStructureArray
	"Set the receiver's 'materials' field to the value of the argument, aStructureArray"

	bytes uintPtrAtOffset: _OffsetOf_materials put: aStructureArray yourAddress!

meshCount
	"Answer the <Integer> value of the receiver's 'meshCount' field."

	^bytes sdwordAtOffset: _OffsetOf_meshCount!

meshCount: anInteger
	"Set the receiver's 'meshCount' field to the value of the argument, anInteger"

	bytes sdwordAtOffset: _OffsetOf_meshCount put: anInteger!

meshes
	"Answer the <StructureArray> value of the receiver's 'meshes' field."

	^StructureArray
		fromAddress: (bytes intPtrAtOffset: _OffsetOf_meshes)
		length: self meshCount
		elementClass: Mesh!

meshes: aStructureArray
	"Set the receiver's 'meshes' field to the value of the argument, aStructureArray"

	bytes uintPtrAtOffset: _OffsetOf_meshes put: aStructureArray yourAddress!

transform
	"Answer the <Matrix> value of the receiver's 'transform' field."

	^Matrix fromAddress: bytes yourAddress!

transform: aMatrix
	"Set the receiver's 'transform' field to the value of the argument, aMatrix"

	aMatrix
		replaceBytesOf: bytes
		from: ##(_OffsetOf_transform + 1)
		to: ##(_OffsetOf_transform + Matrix basicByteSize)
		startingAt: 1! !

!Model3D categoriesForMethods!
materialCount!**compiled accessors**!public! !
materialCount:!**compiled accessors**!public! !
materials!**compiled accessors**!public! !
materials:!**compiled accessors**!public! !
meshCount!**compiled accessors**!public! !
meshCount:!**compiled accessors**!public! !
meshes!**compiled accessors**!public! !
meshes:!**compiled accessors**!public! !
transform!**compiled accessors**!public! !
transform:!**compiled accessors**!public! !
!

!Model3D class methodsFor!

defineFields	
	self 
		defineField: #transform type: (StructureField type: Matrix);
		defineField: #meshCount type: SDWORDField new;
		defineField: #materialCount type: SDWORDField new;
		defineField: #meshes type: (StructureArrayPointerField type: Mesh lengthField: #meshCount);
		defineField: #materials type: (StructureArrayPointerField type: Material lengthField: #materialCount);
		defineField: #boneCount type: (FillerField byteSize: 4);
		defineField: #bones type: (FillerField byteSize: 4);
		defineField: #bindPose type: (FillerField byteSize: 4).
		
		
	!

getFieldNames
	^#(#transform #meshCount #materialCount #meshes #materials)! !

!Model3D class categoriesForMethods!
defineFields!public! !
getFieldNames!**compiled accessors**!constants!private! !
!

RectangleRaylib guid: (GUID fromString: '{822731d7-534d-4742-90a0-87efe6095388}')!

RectangleRaylib addClassConstant: '_OffsetOf_height' value: 16rC!
RectangleRaylib addClassConstant: '_OffsetOf_width' value: 16r8!
RectangleRaylib addClassConstant: '_OffsetOf_x' value: 16r0!
RectangleRaylib addClassConstant: '_OffsetOf_y' value: 16r4!

RectangleRaylib comment: ''!

!RectangleRaylib categoriesForClass!External-Data-Structured! !

!RectangleRaylib methodsFor!

height
	"Answer the <Float> value of the receiver's 'height' field."

	^bytes floatAtOffset: _OffsetOf_height!

height: aFloat
	"Set the receiver's 'height' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_height put: aFloat!

width
	"Answer the <Float> value of the receiver's 'width' field."

	^bytes floatAtOffset: _OffsetOf_width!

width: aFloat
	"Set the receiver's 'width' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_width put: aFloat!

x
	"Answer the <Float> value of the receiver's 'x' field."

	^bytes floatAtOffset: _OffsetOf_x!

x: aFloat
	"Set the receiver's 'x' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_x put: aFloat!

y
	"Answer the <Float> value of the receiver's 'y' field."

	^bytes floatAtOffset: _OffsetOf_y!

y: aFloat
	"Set the receiver's 'y' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_y put: aFloat! !

!RectangleRaylib categoriesForMethods!
height!**compiled accessors**!public! !
height:!**compiled accessors**!public! !
width!**compiled accessors**!public! !
width:!**compiled accessors**!public! !
x!**compiled accessors**!public! !
x:!**compiled accessors**!public! !
y!**compiled accessors**!public! !
y:!**compiled accessors**!public! !
!

!RectangleRaylib class methodsFor!

defineFields	
	self 
		defineField: #x type: FLOATField new;
		defineField: #y type: FLOATField new;
		defineField: #width type: FLOATField new;
		defineField: #height type: FLOATField new.
	self byteSize: 16!

getFieldNames
	^#(#x #y #width #height)! !

!RectangleRaylib class categoriesForMethods!
defineFields!public! !
getFieldNames!**compiled accessors**!constants!private! !
!

RenderTexture2D guid: (GUID fromString: '{de2cbef2-4848-4771-9ad8-5b7ced7eba06}')!

RenderTexture2D addClassConstant: '_OffsetOf_depth' value: 16r18!
RenderTexture2D addClassConstant: '_OffsetOf_id' value: 16r0!
RenderTexture2D addClassConstant: '_OffsetOf_texture' value: 16r4!

RenderTexture2D comment: ''!

!RenderTexture2D categoriesForClass!External-Data-Structured! !

!RenderTexture2D class methodsFor!

defineFields	
	self 
		defineField: #id type: DWORDField new;
		defineField: #texture type: (StructureField type: Texture2D);
		defineField: #depth type: (StructureField type: Texture2D).
	! !

!RenderTexture2D class categoriesForMethods!
defineFields!public! !
!

Shader guid: (GUID fromString: '{a84bdd91-60e9-40af-bddc-d6b015957978}')!

Shader addClassConstant: '_OffsetOf_id' value: 16r0!
Shader addClassConstant: '_OffsetOf_locs' value: 16r4!

Shader comment: ''!

!Shader categoriesForClass!External-Data-Structured! !

!Shader methodsFor!

id
	"Answer the <Integer> value of the receiver's 'id' field."

	^bytes dwordAtOffset: _OffsetOf_id!

id: anInteger
	"Set the receiver's 'id' field to the value of the argument, anInteger"

	bytes dwordAtOffset: _OffsetOf_id put: anInteger!

locs
	"Answer the <SDWORDArray> value of the receiver's 'locs' field."

	^SDWORDArray fromAddress: (bytes intPtrAtOffset: _OffsetOf_locs) length: 32!

locs: aSDWORDArray
	"Set the receiver's 'locs' field to the value of the argument, aSDWORDArray"

	bytes uintPtrAtOffset: _OffsetOf_locs put: aSDWORDArray yourAddress! !

!Shader categoriesForMethods!
id!**compiled accessors**!public! !
id:!**compiled accessors**!public! !
locs!**compiled accessors**!public! !
locs:!**compiled accessors**!public! !
!

!Shader class methodsFor!

defineFields	
	self 
		defineField: #id type: DWORDField new;
		defineField: #locs type: (ArrayPointerField type: SDWORDArray length: 32).
	!

getFieldNames
	^#(#id #locs)! !

!Shader class categoriesForMethods!
defineFields!public! !
getFieldNames!**compiled accessors**!constants!private! !
!

Texture2D guid: (GUID fromString: '{7e453971-527e-4dfb-84f1-cf793a917ec0}')!

Texture2D addClassConstant: '_OffsetOf_format' value: 16r10!
Texture2D addClassConstant: '_OffsetOf_height' value: 16r8!
Texture2D addClassConstant: '_OffsetOf_id' value: 16r0!
Texture2D addClassConstant: '_OffsetOf_mipmaps' value: 16rC!
Texture2D addClassConstant: '_OffsetOf_width' value: 16r4!

Texture2D comment: 'Same as Texture'!

!Texture2D categoriesForClass!External-Data-Structured! !

!Texture2D methodsFor!

format
	"Answer the <Integer> value of the receiver's 'format' field."

	^bytes sdwordAtOffset: _OffsetOf_format!

format: anInteger
	"Set the receiver's 'format' field to the value of the argument, anInteger"

	bytes sdwordAtOffset: _OffsetOf_format put: anInteger!

height
	"Answer the <Integer> value of the receiver's 'height' field."

	^bytes sdwordAtOffset: _OffsetOf_height!

height: anInteger
	"Set the receiver's 'height' field to the value of the argument, anInteger"

	bytes sdwordAtOffset: _OffsetOf_height put: anInteger!

id
	"Answer the <Integer> value of the receiver's 'id' field."

	^bytes dwordAtOffset: _OffsetOf_id!

id: anInteger
	"Set the receiver's 'id' field to the value of the argument, anInteger"

	bytes dwordAtOffset: _OffsetOf_id put: anInteger!

mipmaps
	"Answer the <Integer> value of the receiver's 'mipmaps' field."

	^bytes sdwordAtOffset: _OffsetOf_mipmaps!

mipmaps: anInteger
	"Set the receiver's 'mipmaps' field to the value of the argument, anInteger"

	bytes sdwordAtOffset: _OffsetOf_mipmaps put: anInteger!

width
	"Answer the <Integer> value of the receiver's 'width' field."

	^bytes sdwordAtOffset: _OffsetOf_width!

width: anInteger
	"Set the receiver's 'width' field to the value of the argument, anInteger"

	bytes sdwordAtOffset: _OffsetOf_width put: anInteger! !

!Texture2D categoriesForMethods!
format!**compiled accessors**!public! !
format:!**compiled accessors**!public! !
height!**compiled accessors**!public! !
height:!**compiled accessors**!public! !
id!**compiled accessors**!public! !
id:!**compiled accessors**!public! !
mipmaps!**compiled accessors**!public! !
mipmaps:!**compiled accessors**!public! !
width!**compiled accessors**!public! !
width:!**compiled accessors**!public! !
!

!Texture2D class methodsFor!

defineFields	
	self 
		defineField: #id type: DWORDField new;
		defineField: #width type: SDWORDField new;
		defineField: #height type: SDWORDField new;
		defineField: #mipmaps type: SDWORDField new;
		defineField: #format type: SDWORDField new.
	self byteSize: 20!

getFieldNames
	^#(#id #width #height #mipmaps #format)! !

!Texture2D class categoriesForMethods!
defineFields!public! !
getFieldNames!**compiled accessors**!constants!private! !
!

Vector2 guid: (GUID fromString: '{4185de8e-5241-40fc-8daa-81d5e28e51cd}')!

Vector2 addClassConstant: '_OffsetOf_x' value: 16r0!
Vector2 addClassConstant: '_OffsetOf_y' value: 16r4!

Vector2 comment: ''!

!Vector2 categoriesForClass!External-Data-Structured! !

!Vector2 methodsFor!

x
	"Answer the <Float> value of the receiver's 'x' field."

	^bytes floatAtOffset: _OffsetOf_x!

x: aFloat
	"Set the receiver's 'x' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_x put: aFloat!

y
	"Answer the <Float> value of the receiver's 'y' field."

	^bytes floatAtOffset: _OffsetOf_y!

y: aFloat
	"Set the receiver's 'y' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_y put: aFloat! !

!Vector2 categoriesForMethods!
x!**compiled accessors**!public! !
x:!**compiled accessors**!public! !
y!**compiled accessors**!public! !
y:!**compiled accessors**!public! !
!

!Vector2 class methodsFor!

defineFields	
	self 
		defineField: #x type: FLOATField new;
		defineField: #y type: FLOATField new.
	self byteSize: 8!

getFieldNames
	^#(#x #y)! !

!Vector2 class categoriesForMethods!
defineFields!public! !
getFieldNames!**compiled accessors**!constants!private! !
!

Vector3 guid: (GUID fromString: '{5c055da5-f104-4087-9a03-750a33a6fdf5}')!

Vector3 addClassConstant: '_OffsetOf_x' value: 16r0!
Vector3 addClassConstant: '_OffsetOf_y' value: 16r4!
Vector3 addClassConstant: '_OffsetOf_z' value: 16r8!

Vector3 comment: ''!

!Vector3 categoriesForClass!External-Data-Structured! !

!Vector3 methodsFor!

x
	"Answer the <Float> value of the receiver's 'x' field."

	^bytes floatAtOffset: _OffsetOf_x!

x: aFloat
	"Set the receiver's 'x' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_x put: aFloat!

y
	"Answer the <Float> value of the receiver's 'y' field."

	^bytes floatAtOffset: _OffsetOf_y!

y: aFloat
	"Set the receiver's 'y' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_y put: aFloat!

z
	"Answer the <Float> value of the receiver's 'z' field."

	^bytes floatAtOffset: _OffsetOf_z!

z: aFloat
	"Set the receiver's 'z' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_z put: aFloat! !

!Vector3 categoriesForMethods!
x!**compiled accessors**!public! !
x:!**compiled accessors**!public! !
y!**compiled accessors**!public! !
y:!**compiled accessors**!public! !
z!**compiled accessors**!public! !
z:!**compiled accessors**!public! !
!

!Vector3 class methodsFor!

defineFields	
	self 
		defineField: #x type: FLOATField new;
		defineField: #y type: FLOATField new;
		defineField: #z type: FLOATField new.
	self byteSize: 12!

getFieldNames
	^#(#x #y #z)! !

!Vector3 class categoriesForMethods!
defineFields!public! !
getFieldNames!**compiled accessors**!constants!private! !
!

Vector4 guid: (GUID fromString: '{cdbc5210-e75b-4e49-9c18-915759b826d1}')!

Vector4 addClassConstant: '_OffsetOf_w' value: 16rC!
Vector4 addClassConstant: '_OffsetOf_x' value: 16r0!
Vector4 addClassConstant: '_OffsetOf_y' value: 16r4!
Vector4 addClassConstant: '_OffsetOf_z' value: 16r8!

Vector4 comment: ''!

!Vector4 categoriesForClass!External-Data-Structured! !

!Vector4 methodsFor!

w
	"Answer the <Float> value of the receiver's 'w' field."

	^bytes floatAtOffset: _OffsetOf_w!

w: aFloat
	"Set the receiver's 'w' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_w put: aFloat!

x
	"Answer the <Float> value of the receiver's 'x' field."

	^bytes floatAtOffset: _OffsetOf_x!

x: aFloat
	"Set the receiver's 'x' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_x put: aFloat!

y
	"Answer the <Float> value of the receiver's 'y' field."

	^bytes floatAtOffset: _OffsetOf_y!

y: aFloat
	"Set the receiver's 'y' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_y put: aFloat!

z
	"Answer the <Float> value of the receiver's 'z' field."

	^bytes floatAtOffset: _OffsetOf_z!

z: aFloat
	"Set the receiver's 'z' field to the value of the argument, aFloat"

	bytes floatAtOffset: _OffsetOf_z put: aFloat! !

!Vector4 categoriesForMethods!
w!**compiled accessors**!public! !
w:!**compiled accessors**!public! !
x!**compiled accessors**!public! !
x:!**compiled accessors**!public! !
y!**compiled accessors**!public! !
y:!**compiled accessors**!public! !
z!**compiled accessors**!public! !
z:!**compiled accessors**!public! !
!

!Vector4 class methodsFor!

defineFields	
	self 
		defineField: #x type: FLOATField new;
		defineField: #y type: FLOATField new;
		defineField: #z type: FLOATField new;
		defineField: #w type: FLOATField new.
	self byteSize: 16!

getFieldNames
	^#(#x #y #z #w)! !

!Vector4 class categoriesForMethods!
defineFields!public! !
getFieldNames!**compiled accessors**!constants!private! !
!

"Binary Globals"!

