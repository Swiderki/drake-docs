---
title: Engine
description: Introduction to engine instance.
---
### Constructor

```tsx
new Engine(canvas: HTMLCanvasElement) // Creates new Engine instance
```

| Name | Type | Description |
| --- | --- | --- |
| canvas | HTMLCanvasElement | Refrence to canvas element, where graphic will be displayed |

### Memebers

```tsx
// gets called before Start func, after the run func
// handles things like eventListeners
private async _BeforeStart(): Promise<void>
```

```tsx
// gets called after run and _BeforeStart()
// used to set up all necessary things for game to begin
 Start(): void {}
```

```tsx
// gets called after Start() func
// used to load all meshes
private async _AfterStart():
```

```tsx
// gets called before every update
// handles things like render, delta Time and FPS counter 
private _BeforeUpdate(lastFrameEnd: number, frameNumber: number = 0): void
```

```tsx
// gets called every frame
// is up to dev to decide what should be here
// meant to override
Update(): void
```

```tsx
// gets called in constructor
// handles order of engine start functions
async run(): Promise<void>
```

```tsx
// set resolution of engine's canvas
setResolution(width: number, height: number): void
```

```tsx
// adds a scene to game
addScene(scene: Scene): number
```

```tsx
// removes scene
// scene id can be accessed by scene.id property 
removeScene(sceneID: number)
```

```tsx
// set currently visible scene
// only one scene can be visible at the time
// scene id can be accessed by scene.id property
setCurrentScene(sceneID: number): void
```

```tsx
// does exactly what it says 
removeCurrentScene(): void
```

```tsx
// handles all of the rendering
// gets called at the begging of the _BeforeUpdate();
private render(): void
```
### Example usage

```tsx
class MyGame extends Engine {
  cube: Cube;
  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    // assign cube object
    // we have refrence to it in case we would like to access it
    this.cube = new Cube([0, 0, 5]);
  }

  // simple camera movement
  handleCameraMove(e: KeyboardEvent) {
    if(!this.mainCamera) return;
    if (e.key === "w") this.mainCamera.move(0, 1, 0);
    if (e.key === "s") this.mainCamera.move(0, -1, 0);
    if (e.key === "a") this.mainCamera.move(-1, 0, 0);
    if (e.key === "d") this.mainCamera.move(1, 0, 0);
  }

  override Start(): void {
    this.setResolution(1280, 720);
    const camera = new Camera(60, .1, 1000, [10, 5, -15], [0, 0, 1]);
    // create sample scene
    const mainScene = new Scene();

    mainScene.setMainCamera(camera, this.width, this.height); // add camera to scene
    // get id of the scene and use it to set is as current scene
    const mainSceneId = this.addScene(mainScene);
    this.setCurrentScene(mainSceneId);

    // add cube to the scene
    mainScene.addGameObject(this.cube);

    document.addEventListener("keydown", this.handleCameraMove.bind(this));
  }

  override Update(): void {
    // Here we can put all the game logick
  }
}
```