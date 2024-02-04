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

### Example usage

```tsx
class MyGame extends Drake.Engine {
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
    const camera = new Drake.Camera(60, .1, 1000, [10, 5, -15], [0, 0, 1]);
    // create sample scene
    const mainScene = new Drake.Scene(
      this.width,
      this.height,
      this.idGenerator.id
    );
    
    mainScene.setCamera(camera); // add camera to scene
    // get id of the scene and use it to set is as current scene
    const mainSceneId = this.addScene(mainScene);
    this.setCurrentScene(mainSceneId); 
    
    // add cube to the scene
    mainScene.addSceneMesh(this.cube)

    document.addEventListener("keydown", this.handleCameraMove.bind(this)); 
  }

  override Update(): void {
    // Here we can put all the game logick
  }
}

// dont forget ro run the game
const game = new MyGame(canvas);
game.run();
```