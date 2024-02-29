---
title: Scene
description: Sfhsfhsfh
---

Poniżej przedstawiam ulepszoną wersję dokumentacji klasy `Scene` z użyciem komentarzy TypeScript, bez bezpośredniego wskazywania `@param` i `@returns`.

```typescript
/**
 * Constructs a new Scene instance with an optional background configuration.
 */
constructor(background?: BackgroundObjectConfig) {}
```

```typescript
// Unique ID generator for scene objects.
private idGenerator: IDGenerator = new IDGenerator();

// Map of all game objects within the scene, indexed by their unique ID.
private _gameObjects: Map<number, GameObject> = new Map();

// The main camera used to display the scene, initially unset.
protected _mainCamera: Camera | null = null;

// Projection matrix for the main camera, initially zeroed out.
private _projMatrix: Mat4x4 = Matrix.zeros();

// Map of all GUI elements within the scene, indexed by their unique ID.
private _GUIs: Map<number, GUI> = new Map();

// Currently displayed GUI element, if any.
private _currentGUI: GUI | null = null;

// Map of all overlaps within the scene, allowing for collision detection.
private _overlaps: Map<number, Overlap> = new Map();
```

```typescript
// Accessor for scene overlaps.
public get overlaps() { return this._overlaps; }

// Accessor for GUI elements in the scene.
public get GUIs() { return this._GUIs; }

// Accessor for the currently active GUI element.
public get currentGUI() { return this._currentGUI; }

// Accessor for the scene's main camera.
public get mainCamera() { return this._mainCamera; }

// Accessor for all game objects in the scene.
public get gameObjects() { return this._gameObjects; }

// Accessor for the scene's projection matrix.
public get projMatrix() { return this._projMatrix; }
```

```typescript
/**
 * Adds a game object to the scene, assigning it a unique ID.
 */
public addGameObject(gameObject: GameObject): number {}

/**
 * Removes a game object from the scene by its ID.
 */
public removeGameObject(gameObjectID: number): void {}

/**
 * Adds a GUI to the scene, assigning it a unique ID.
 */
public addGUI(gui: GUI): number {}

/**
 * Removes a GUI from the scene by its ID.
 */
public removeGUI(guiID: number): void {}

/**
 * Sets a specific GUI as the currently displayed one on the screen.
 */
public setCurrentGUI(guiId: number): void {}

/**
 * Clears the current GUI, setting it to null.
 */
public removeCurrentGUI(): void {}
```

```typescript
/**
 * Sets the main camera for the scene and initializes its projection matrix.
 */
public setMainCamera(camera: Camera, renderWidth: number, renderHeight: number): void {}

/**
 * Initializes the projection matrix for the scene based on camera settings.
 */
public initProjection(renderWidth: number, renderHeight: number): void {}
```


```typescript
/**
 * Retrieves an overlap object by its ID, throwing an error if not found.
 */
public getOverlap(overlapID: number): Overlap {}

/**
 * Adds an overlap to the scene, returning its newly assigned ID.
 */
public addOverlap(overlap: Overlap): number {}

/**
 * Removes an overlap from the scene by its ID.
 */
public removeOverlap(overlapID: number): number {}
```
