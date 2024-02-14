---
title: Scene
description: Sfhsfhsfh
---
### Constructor

```tsx
new Scene();
```

### Members

```tsx
// Used to create ID for Meshes and GUIs
// Default as IdGenerator object
private idGenerator = new IdGenerator();
```

```tsx
// This map holds all the scene objects
// Number is an ID and GameObject is a game object
// Default st to new Map<number, GameObject>()
private _gameObjects: Map<number, GameObject> = new Map();
```

```tsx
// It is used to show the scene on the screen
// Default set to null, must be set by a programmer
// Holds a main camera or null
// Default set to null
protected _mainCamera: Camera | null = null;
```

```tsx
// This matrix is used by this._mainCamera to create a 2D projection
// Default set to a matrix full of zeros
private _projMatrix: Mat4x4 = Matrix.zeros();
```

```tsx
// This map holds all the scene's GUIS
// Number is an ID and GUI is a GUI
private _GUIs: Map<number, GUI> = new Map();
```

```tsx
// It is GUI that is currently displayed on a screen
// This object is also in this._GUIs
// Because of how TypeScript works, this is stored as a reference, 
// and this._GUIs has the exact same object 
// Default set to null (no GUI to display)
private _currentGUI: GUI | null = null;
```

```tsx
// Map object used to effectively store all scene overlaps 
private _overlaps: Map<number, Overlap> = new Map();
```

```tsx
// getter for overlaps
get overlaps() 
```

```tsx
// Returns overlap object of given id
// Throws an ERROR when object does not exists
getOverlap(overlapID: number): Overlap 
```

```tsx
// Adds overlap to the scene 
// Returns id of the overlap
addOverlap(overlap: Overlap): number 
```

```tsx
// Properties for the scene's width and height
// Set in the constructor
public width: number;
public height: number;
```

```tsx
// Getter for this._GUIs
public get GUIs(void): Map<number, GUI>;
```

```tsx
// Returns current GUI or null if current GUI has not been set yet
public get currentGUI(void): GUI | null;
```

```tsx
// Getter for this._mainCamera
// If this._mainCamera has not been set yet, it returns null 
public get sceneCamera(void): Camera | null;
```

```tsx
// Getter for this._gameObjects
public get gameObjects(void): Map<number, GameObject>;
```

```tsx
// Getter fot this._projMatrix
public get projMatrix(void): Mat4x4;
```

```tsx
// It can be used to set a GUI to display
// If the GUI has not been added yet,
// it throws new Error("GUIs array does not include the given gui.")
// *PARAMS*
// guiId - GUI id returned by this.addGUI when GUI was added
public setCurrentGUI(guiId: number): void;
```

```tsx
// It can be used to remove a GUI from this._GUIs
// If the GUI has not been added yet,
// it throws new Error("A GUI with the given id was not found.")
// If the GUI is set as a current GUI
// it throws new Error("The GUI you want to remove is now set as a current GUI. Remove current GUI first.")
// *PARAMS*
// guiId - GUI id returned by this.addGUI when GUI was added
public removeGUI(guiId: number): void;
```

```tsx
// It is used to set this._currentGUI to null
public removeCurrentGUI(void): void;
```

```tsx
// It adds a GUI object to the scene's GUIs
// Returns the id assigned for gui
// If the gui is already
// it throws new Error("The given gui is already added to the scene's GUIs")
public addGUI(gui: GUI): number;
```

```tsx
// Sets a camera for Scene and initializes the projection
// WARNING: Scene Does not store only 1 camera
// also takes render width and height as parameters
// Its recommended to pass canvas dimensions
public setMainCamera(camera: Camera, renderWidth: number, renderHeight: number): void;
```

```tsx
// It creates projection matrix for scene
// Projection can differ from scene to scene
// It gets itf params from mainCamera so it have to be added before call og the function
// It gets automatically called after setMainCamera 
public initProjection(void): void;
```

```tsx
// It is used to add objects to the scene
// returns gameObject's id
public addGameObject(gameObject: GameObject): number;
```

### Usage

```tsx
// ...

// Game start
override Start(): void {
  this.setResolution(1280, 720);
  
  const camera = new Drake.Camera(90, 0.1, 1000, [10, 10, -15], [0, 0, 1]);
  const mainSceneGUI = new GUI(this.getCanvas, this.getCanvas.getContext("2d")!);
  
  // this.icon is declared before
  mainSceneGUI.addElement(this.icon);

  const mainScene = new Drake.Scene(
    this.width,
    this.height,
  );

  const mainSceneGUIId = mainScene.addGUI(mainSceneGUI);
  mainScene.setCamera(camera);
  mainScene.setCurrentGUI(mainSceneGUIId);

  const mainSceneId = this.addScene(mainScene);
  this.setCurrentScene(mainSceneId);
}

// ...
```