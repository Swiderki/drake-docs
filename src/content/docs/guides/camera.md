---
title: Camera
description: Introduction to camera.
---

The `Camera` class represents a virtual camera in a 3D scene, defining the viewpoint from which the scene is rendered.

## Properties

### Position

```typescript
position: Vec3D = { x: 0, y: 0, z: -10 };
```

The camera's position in 3D space.

### Look Direction

```typescript
lookDir: Vec3D = { x: 0, y: 0, z: 1 };
```

The direction in which the camera is looking.

### Field of View

```typescript
fov: number;
```

The camera's field of view, in degrees.

### Near and Far Planes

```typescript
near: number;
far: number;
```

The distances to the closest and furthest points that the camera can render, respectively.

### Rotation Quaternion

```typescript
rotationQuaternion: QuaternionUtils.Quaternion = { x: 0, y: 0, z: 0, w: 0 };
```

The camera's orientation represented as a quaternion for rotation operations.

### Rotation

```typescript
private _rotation = { x: 0, y: 0, z: 0 };
```

Stores the cumulative rotation of the camera, accessible via a getter.

## Constructor

```typescript
/**
 * Initializes a new Camera instance with field of view, near and far planes, and optional position and look direction.
 */
constructor(fov: number, near: number, far: number, position?: Vec3DTuple, lookDir?: Vec3DTuple) {}
```

## Methods

### Move

```typescript
/**
 * Moves the camera by a specified amount along each axis.
 */
move(x: number, y: number, z: number): void {}
```

### Rotate

```typescript
/**
 * Rotates the camera around a given axis by a specified amount.
 */
rotate(axis: { x: number; y: number; z: number }, amount: number): void {}
```

## Example Usage

```typescript
// Creating a new Camera instance
const camera = new Camera(75, 0.1, 1000, [0, 0, 0], [0, 0, 1]);

// Moving the camera forward
camera.move(0, 0, 5);

// Rotating the camera to look upwards
camera.rotate({ x: 1, y: 0, z: 0 }, Math.PI / 6);
```
