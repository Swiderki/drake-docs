---
title: Quaternions
description: All u need to know about quaternions
---

### Quaternion

Represents a quaternion with four components: `x`, `y`, `z`, and `w`.

- **`x`**: number - The x component of the quaternion.
- **`y`**: number - The y component of the quaternion.
- **`z`**: number - The z component of the quaternion.
- **`w`**: number - The w component (scalar part) of the quaternion.

## Functions

```typescript
init(quaternion: Quaternion, x = 0, y = 0, z = 0, w = 1): void
```

Initializes or resets a quaternion with the specified components, rounding each to 4 decimal places.

- **Parameters:**
  - `quaternion`: Quaternion - The quaternion to initialize.
  - `x`: number (default = 0) - The x component.
  - `y`: number (default = 0) - The y component.
  - `z`: number (default = 0) - The z component.
  - `w`: number (default = 1) - The w component.

```typescript
setFromAxisAngle(quaternion: Quaternion, axis: {x: number, y: number, z: number}, angle: number): void
```

Sets a quaternion based on the rotation around a given axis by a specified angle in radians, normalizing the axis and rounding components to 4 decimal places.

- **Parameters:**
  - `quaternion`: Quaternion - The quaternion to set.
  - `axis`: object - The axis of rotation.
  - `angle`: number - The angle of rotation in radians.

```typescript
normalize(quaternion: Quaternion): void
```

Normalizes the quaternion to unit length, making it represent a valid rotation.

- **Parameters:**
  - `quaternion`: Quaternion - The quaternion to normalize.

```typescript
multiply(q1: Quaternion, q2: Quaternion, result: Quaternion): void
```

Multiplies two quaternions and stores the result in a third quaternion.

- **Parameters:**
  - `q1`: Quaternion - The first quaternion.
  - `q2`: Quaternion - The second quaternion.
  - `result`: Quaternion - The quaternion to store the result.

```typescript
rotateVector(quaternion: Quaternion, vector: {x: number, y: number, z: number}, result: {x: number, y: number, z: number}): void
```

Rotates a vector by a quaternion and stores the result in another vector.

- **Parameters:**
  - `quaternion`: Quaternion - The quaternion to use for rotation.
  - `vector`: object - The vector to rotate.
  - `result`: object - The vector to store the result.
