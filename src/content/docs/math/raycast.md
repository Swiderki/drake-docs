---
title: RayCast
description: Raycast function
---

# `rayCast` Function Documentation

Performs a ray casting operation to determine if a ray intersects a box collider in 3D space.

## Parameters

- `origin`: `Vec3D`
  - The origin point of the ray in 3D space, represented as a vector (`{x, y, z}`).
- `direction`: `Vec3D`
  - The direction vector of the ray in 3D space, which should be normalized.
- `boxCollider`: `Line3D`
  - An array of two `Vec3D` points representing the minimum and maximum corners of the box collider.

## Returns

- `boolean`
  - Returns `true` if the ray intersects the box collider, `false` otherwise.

## Description

The function calculates intersections using the AABB (Axis-Aligned Bounding Box) method. It projects the ray onto each axis (X, Y, Z) to find the intersection times (`tmin`, `tmax`) with the slabs defined by the box collider dimensions. Intersection is confirmed if the projected times overlap on all axes.

## Example Usage

```tsx
import { Vec3D, Line3D } from "..";
import { rayCast } from "./pathToRayCastFunction";

const origin: Vec3D = { x: 1, y: 2, z: 3 };
const direction: Vec3D = { x: 4, y: 5, z: 6 };
const boxCollider: Line3D = [
  { x: 0, y: 0, z: 0 },
  { x: 10, y: 10, z: 10 },
];

const intersects = rayCast(origin, direction, boxCollider);

console.log(intersects); // Outputs: true or false
```
