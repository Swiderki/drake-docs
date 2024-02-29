---
title: Quaternions
description: All u need to know about quaternions
---

## Types

### Quaternion
```typescript
/**
 * Represents a quaternion, used for 3D rotations without suffering gimbal lock.
 */
export type Quaternion = {
  x: number;
  y: number;
  z: number;
  w: number;
};
```

## Functions

### Initialize Quaternion
```typescript
/**
 * Initializes a quaternion with specified values.
 */
export function init(quaternion: Quaternion, x = 0, y = 0, z = 0, w = 1): void {}
```

### Set Quaternion from Axis Angle
```typescript
/**
 * Sets a quaternion based on a rotation around a given axis by a specific angle.
 */
export function setFromAxisAngle(quaternion: Quaternion, axis: { x: number; y: number; z: number }, angle: number): void {}
```

### Normalize Quaternion
```typescript
/**
 * Normalizes a quaternion to unit length, ensuring it represents a valid rotation.
 */
export function normalize(quaternion: Quaternion): void {}
```

### Multiply Quaternions
```typescript
/**
 * Multiplies two quaternions, storing the result in a third quaternion.
 */
export function multiply(q1: Quaternion, q2: Quaternion, result: Quaternion): void {}
```

### Rotate Vector by Quaternion
```typescript
/**
 * Rotates a vector by a quaternion, altering the vector's direction.
 */
export function rotateVector(quaternion: Quaternion, vector: { x: number; y: number; z: number }, result: { x: number; y: number; z: number }): void {}
```

### Convert Quaternion to Euler Angles
```typescript
/**
 * Converts a quaternion to Euler angles (roll, pitch, yaw).
 */
export function toEulerAngles(quaternion: Quaternion): { x: number; y: number; z: number } {}
```

### Angle Between Quaternions
```typescript
/**
 * Calculates the angle between two quaternions.
 */
export function angleBetween(q1: Quaternion, q2: Quaternion): number {}
```

### Spherical Linear Interpolation (SLERP)
```typescript
/**
 * Performs spherical linear interpolation between two quaternions.
 */
export function slerp(qa: Quaternion, qb: Quaternion, t: number, result: Quaternion): void {}
```

## Example Usage

### Rotation Quaternion Initialization
```typescript
const quaternion = { x: 0, y: 0, z: 0, w: 1 };
QuaternionUtils.init(quaternion, 0, 0, 0, 1);
```

### Applying Rotation to a Quaternion
```typescript
QuaternionUtils.setFromAxisAngle(quaternion, { x: 0, y: 1, z: 0 }, Math.PI / 2);
```

### Rotating a Vector
```typescript
const vector = { x: 1, y: 0, z: 0 };
const resultVector = { x: 0, y: 0, z: 0 };
QuaternionUtils.rotateVector(quaternion, vector, resultVector);
```
