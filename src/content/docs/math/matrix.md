---
title: Matrix
description: All u need to know about matrixes
---

## Matrix Operations

The `Matrix` namespace includes functions for creating and manipulating matrices.

- **`zeros()`:** Returns a 4x4 matrix filled with zeros.
- **`multiplyVector(m, i)`:** Multiplies a matrix by a vector.
- **`makeIdentity()`:** Creates an identity matrix.
- **`makeRotationX(angleRad)`:** Creates a rotation matrix around the X-axis.
- **`makeRotationY(angleRad)`:** Creates a rotation matrix around the Y-axis.
- **`makeRotationZ(angleRad)`:** Creates a rotation matrix around the Z-axis.
- **`makeTranslation(x, y, z)`:** Creates a translation matrix.
- **`makeProjection(m, fov, aspectRatio, near, far)`:** Creates a projection matrix.
- **`multiplyMatrix(m1, m2)`:** Multiplies two matrices.
- **`lookAt(pos, target, up)`:** Creates a lookAt matrix.
- **`quickInverse(m)`:** Calculates the quick inverse of a matrix, optimized for rotation/translation matrices.

## Utility Functions

- **`transpose(m)`:** Transposes a matrix.
