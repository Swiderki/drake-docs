---
title: Engine
description: Introduction to engine instance.
---

# `Engine` Class

Provides the core functionality for a 3D game engine, handling the game loop, rendering, and scene management.

### Constructor

```tsx
new Engine(canvas: HTMLCanvasElement) // Initializes a new Engine instance with a given canvas
```

| Name   | Type              | Description                                    |
| ------ | ----------------- | ---------------------------------------------- |
| canvas | HTMLCanvasElement | Reference to the canvas element for rendering. |

### Members

- **Private Properties:**

  - `_penultimateFrameEndTime`, `_prevFrameEndTime`, `_deltaTime`, `_frameNumber`: Used internally to manage frame timing and delta time calculations.
  - `_currentScene`: The currently active `Scene` object.
  - `_scenes`: A map of all scenes added to the engine.
  - `_canvas`, `_ctx`: Canvas and its 2D rendering context.
  - `_fpsDisplay`: HTMLElement for displaying the FPS counter.

- **Getters:**
  - `width`, `height`: Return the width and height of the canvas.
  - `canvas`, `getCanvas`: Return the canvas element. `getCanvas` is deprecated.
  - `scenes`: Returns a map of all scenes.
  - `currentScene`: Returns the currently active scene.
  - `mainCamera`: Returns the main camera of the current scene.
  - `deltaTime`: Returns the time interval between the last frame and the current one, in seconds.
  - `frameNumber`: Returns the current frame number.
  - `ctx`: Returns the canvas rendering context.

### Methods

```tsx
// Handles initial setup before the game starts. It sets up the FPS display
// and initializes event listeners for clicks and mouse movements.
// This method is part of the engine's startup sequence.
private async _BeforeStart(): Promise<void> {}
```

```tsx
// Placeholder method for custom startup logic. This method should be overridden
// by subclasses to include game-specific initialization logic. It gets called
// as part of the engine's startup sequence, after `_BeforeStart`.
Start(): void {}
```

```tsx
// Handles asynchronous tasks needed immediately after the game starts,
// such as loading meshes for game objects. This method is part of the
// engine's startup sequence, following the `Start` method.
private async _AfterStart(): Promise<void> {}
```

```tsx
// Prepares for rendering the next frame. This includes clearing the screen,
// rendering the current scene, and updating the frame timing information.
// This method is called at the beginning of each new frame.
private _BeforeUpdate(lastFrameEnd: number, frameNumber: number = 0): void {}
```

```tsx
// Placeholder for custom logic to be executed every frame. This method should
// be overridden by subclasses to include game-specific update logic.
// It is called after `_BeforeUpdate` in each frame.
Update(): void {}
```

```tsx
// Starts the engine, including the pre-start setup, the main game loop,
// and post-start tasks. This is the main entry point for beginning the
// game's execution.
async run(): Promise<void> {}
```

```tsx
// Sets the resolution of the engine's canvas. This method can be used to
// dynamically adjust the canvas size during the game.
setResolution(width: number, height: number): void {}
```

```tsx
// Clears the screen with the specified color. This is typically called at
// the beginning of each frame's rendering cycle to prepare the canvas for
// the next set of drawing operations.
clearScreen(color: string = "#000"): void {}
```

```tsx
// Adds a new scene to the engine and returns its unique identifier. Scenes
// are managed internally in a map, allowing for efficient retrieval and
// management.
addScene(scene: Scene): number {}
```

```tsx
// Removes a scene from the engine based on its identifier. This method ensures
// that the specified scene is fully removed from the engine's internal management
// structures.
removeScene(sceneID: number) {}
```

```tsx
// Sets the currently active scene to be rendered and interacted with. Only one
// scene can be active at a time, and this method facilitates switching between
// different scenes.
setCurrentScene(sceneID: number): void {}
```

```tsx
// Clears the currently active scene, leaving the engine in a state where no
// scene is active. This is useful for situations where the game needs to
// temporarily display no content, such as during a loading screen.
removeCurrentScene(): void {}
```

```tsx
// Draws a 3D line on the canvas using the specified color and shining effect.
// This is a low-level rendering method used by the engine to render individual
// lines as part of the larger scene rendering process.
private drawLine(line: Line3D, color: string, isShining: boolean): void {}
```

```tsx
// Renders the background of the currently active scene. This method handles
// the drawing of the scene's background elements, setting the stage for the
// rendering of game objects and GUI elements.
private drawSceneBackground(): void {}
```

```tsx
// The central rendering logic for the engine. This method orchestrates the
// rendering of the scene background, game objects, and GUI elements, ensuring
// that all visual elements are properly drawn to the canvas each frame.
private render(): void {}
```

### Example Usage

```tsx
const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const gameEngine = new Engine(canvas);

gameEngine.run().then(() => {
  // Engine is running
});
```
