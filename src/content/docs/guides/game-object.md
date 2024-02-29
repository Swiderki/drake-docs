---
title: GameObject
description: Introduction to GameObject instance.
---

## Constructor

```typescript
/**
 * Instantiates a GameObject with a specified mesh and an optional initial configuration.
 */
constructor(meshPath: string, initialConfig: GameObjectInitialConfig = {}) {}
```

## Properties

### Unique Identifier
```typescript
readonly id: number;
```
Automatically generated unique ID for the GameObject.

### Mesh Path
```typescript
readonly meshPath: string;
```
Path to the model's `.obj` file, intended to be located in the `/public` directory.

### Mesh Caching
```typescript
readonly allowUsingCachedMesh: boolean = true;
```
Determines if the mesh should be fetched once and cached for subsequent uses.

### Visual Properties
```typescript
color: string = "#fff";
isHollow: boolean = false;
isShining: boolean = false;
isVisible: boolean = true;
```
Defines the color, rendering style (hollow or solid), shining effect, and visibility of the GameObject.

### Collision Detection
```typescript
boxCollider: Line3D | null = null;
showBoxcollider: boolean = false;
autoupdateBoxCollider: boolean = false;
```
Manages the GameObject's bounding box for collision detection and visual debugging.

## Methods

### Initialization
```typescript
Start(): void {}
```
Intended for custom startup logic. Override in subclasses.

### Frame Update
```typescript
Update(deltaTime: number): void {}
```
Invoked on every frame to implement custom update logic.

### Mesh Management
```typescript
async loadMesh(): Promise<void> {}
```
Loads the GameObject's mesh from the specified `.obj` file and applies initial transformations.

### Transformation Methods

#### Move
```typescript
move(x: number, y: number, z: number): void {}
```
Moves the GameObject by a specified amount along each axis.

#### Set Position
```typescript
setPosition(x: number, y: number, z: number): void {}
```
Sets the GameObject's absolute position in the scene.

#### Scale
```typescript
scale(x: number, y: number, z: number): void {}
```
Scales the GameObject by specified factors along each axis.

#### Rotate
```typescript
rotate(xAxis: number, yAxis: number, zAxis: number): void {}
```
Rotates the GameObject around each axis by given angles (in radians).

#### Apply Quaternion Rotation
```typescript
applyQuaternion(quaternion: QuaternionUtils.Quaternion): void {}
```
Applies a quaternion rotation to the GameObject.

### Collision Detection

#### Generate Box Collider
```typescript
generateBoxCollider(): void {}
```
Calculates and updates the GameObject's bounding box based on its current geometry.

#### Get Box Collider Mesh
```typescript
getBoxColliderMesh(): Line3D[] | null {}
```
Returns the lines defining the GameObject's bounding box, if available.

## Example Usage

```typescript
// Instantiation with initial configuration
const myObject = new GameObject("objects/my_model.obj", {
  position: [0, 2, 0], // Position 2 units up in Y-axis
  size: [1, 1, 1], // Normal scale
  rotation: [Math.PI / 2, 0, 0], // Rotated 90 degrees around X-axis
});

// During the game loop
myObject.move(1, 0, 0); // Move 1 unit along the X-axis
```
