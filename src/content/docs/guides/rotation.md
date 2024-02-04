---
title: Rotation
description: Quaternion magick don't ask me
---

# How it works

First initialize quaternion ( you don't need to know how quaternion work, don't ask me please🙈)

```tsx
rotationQuaternion = { x: 0, y: 0, z: 0, w: 0 };
```

Later set quaternion rotation

```tsx
setFromAxisAngle(quaternion: Quaternion, axis: { x: number; y: number; z: number }, angle: number): void {
```

Where axis are rotation axis and angle is angle of rotation

After this always normalize quaternion to prevent errors

```tsx
normalize(quaternion: Quaternion)
```

To apply quaternion to game object use applyQuaternion which is built into GameObject functions

```tsx
applyQuaternion(quaternion: QuaternionUtils.Quaternion)
```

### Example

```tsx
override Update(): void {
  const rotationSpeed = Math.PI / 2; 

  QuaternionUtils.setFromAxisAngle(
    this.rotationQuaternion, 
    { x: 0, y: 1, z: 0 },
    rotationSpeed * this.deltaTime 
  );
  QuaternionUtils.normalize(this.rotationQuaternion);

  this.cubes.forEach(cube => cube.applyQuaternion(this.rotationQuaternion));
 }
```