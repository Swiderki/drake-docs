---
title: PhysicalGameObject
description: GameObjct with basic physics
---

## Constructor

```typescript
/**
 * Constructs a PhysicalGameObject with a mesh path and an initial configuration that includes physical properties.
 */
constructor(meshPath: string, initialConfig: PhysicalObjectInitialConfig) {
  super(meshPath, initialConfig);
  // Initialize physical properties from the initial configuration
}
```

## Extended Properties

### Velocity
```typescript
velocity: Vec3D = { x: 0, y: 0, z: 0 };
```
The object's velocity in 3D space.

### Acceleration
```typescript
acceleration: Vec3D = { x: 0, y: 0, z: 0 };
```
The object's acceleration, affecting its velocity over time.

### Mass
```typescript
mass: number = 1;
```
The mass of the object, influencing how forces affect it.

## Methods

### Update Physics
```typescript
/**
 * Updates the object's position based on its current velocity and acceleration over the given time interval.
 */
updatePhysics(deltaTime: number): void {
  // Calculate new position and update velocity
}
```

### Apply Force
```typescript
/**
 * Applies a force to the object, modifying its acceleration based on the object's mass.
 */
applyForce(force: Vec3D): void {
  // Adjust acceleration according to the applied force and the object's mass
}
```

### Create from GameObject
```typescript
/**
 * Static method to create a PhysicalGameObject based on an existing GameObject and an optional physical configuration.
 */
static createFromGameObject(gameObject: GameObject, initialConfig: PhysicalObjectInitialConfig = {}): PhysicalGameObject {
  // Return a new PhysicalGameObject with properties copied and modified from the provided GameObject
}
```

## Example Usage

```typescript
const physicalObject = new PhysicalGameObject("path/to/model.obj", {
  position: [0, 10, 0],
  velocity: { x: 1, y: 0, z: 0 },
  acceleration: { x: 0, y: -9.8, z: 0 }, // Gravity
  mass: 2,
});

// In your game loop
const deltaTime = 1 / 60; // Assuming 60 FPS for simplicity
physicalObject.updatePhysics(deltaTime);
```
