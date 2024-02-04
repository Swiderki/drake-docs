---
title: Quick Start
description: A quick start guide into Drake Engine.
---

### About

Drake engine is simple 3D engine created with typscript, for Motorola Science Cup competiotion.

### Install the libary

To use our engine install it via npm.

```bash
# Install via NPM
npm install drake-engine
```

<aside>
💡 **Good to know:** Using latest version of node and npm will prevent compatibility errors

</aside>

## Create your first game

To create your first game u have to create instance of Game class, that will inherit from Engine class. It will handle all aspects of the game's core functionality, such as rendering, scenes and state managment.

```tsx
import Cube from "./entities/game-objects/built-in/Cube";
import Drake from "./index";

const canvas = document.getElementById("app") as HTMLCanvasElement | null;
if (!canvas) throw new Error("unable to find canvas");

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

Maybe we cannot call it a true game, but everyone have to start somewhere. So thats how create basic instance of our engine, i you would like to create more complex stuff, please read rest of the docs❤️.