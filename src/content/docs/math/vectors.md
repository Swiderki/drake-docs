---
title: Vector
description: All u need to know about vectors
---

### About
Vectors are used to represent all sorts of stuff from motion to points in space.
U can read more about vectors [here](https://en.wikipedia.org/wiki/Vector_(mathematics_and_physics))
### Types
```tsx

// represents 2D vector
type Vec2D = {
  x: number;
  y: number;
};

// represents 3D vector
type Vec3D = {
  x: number;
  y: number;
  z: number;
};

// represents u guessed it 4D vector
export type Vec4D = {
  x: number;
  y: number;
  z: number;
  w: number;
};

// More user friendly than Vec3D, becausue it's more clear to pass array as an argument than to pass an object.
type Vec3DTuple = [number, number, number];

// used to represent axis of Rotation  
type Rotation3D = {
  xAxis: number;
  yAxis: number;
  zAxis: number;
};

// More user friendly than Rotation3D, becausue it's more clear to pass array as an argument than to pass an object.
type Rotation3DTuple = [number, number, number];

// They are not vector by thyself, but they are heavily used with em so i thought i should put them here 
type Line3D = [Vec3D, Vec3D];
```

### Methods

```tsx
// Returns zero vector(0, 0, 0)
Vector.zero();
```

```tsx
// adds 2 vectors
Vector.add(vec1: Vec3D, vec2: Vec3D): Vec3D
```

```tsx
// subtract 2 vectors
Vector.subtract(vec1: Vec3D, vec2: Vec3D): Vec3D
```

```tsx
// multiply 2 vectors
Vector.multiply(vec: Vec3D, num: number): Vec3D
```

```tsx
// divides 2 vectors
// can throw division by 0 error
Vector.divide(vec: Vec3D, num: number): Vec3D
```

```tsx
// returns dotProduct od 2 vectors
Vector.dotP(vec1: Vec3D, vec2: Vec3D): number
```

```tsx
// return length of vector
Vector.length(vec: Vec3D): number
```

```tsx
// returns normalized vector(with length of 1)
Vector.normalize(vec: Vec3D): Vec3D
```

```tsx
// returns cross product of 2 vectors 
Vector.crossP(vec1: Vec3D, vec2: Vec3D): Vec3D
```

```tsx
// resizes vector to desired width
Vector.resize(vec: Vec3D, magnitiude: number)
```

```tsx
// Returns vector create from Vec3DTuple
Vector.fromArray(arr: Vec3DTuple)
```