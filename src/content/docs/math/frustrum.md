---
title: Frustum
description: All u need to know about Frustum
---

## Frustum Utilities

The `FrustumUtil` namespace provides functions for frustum culling and clipping.

- **`distanceToPoint(normal, point)`:** Computes the distance from a point to a plane.
- **`isPointInFrustum(point, viewMatrix, projectionMatrix)`:** Checks if a point is within the view frustum.
- **`clipPointAgainstPlain(line, plain)`:** Clips a point against a plane.
- **`clipLineAgainstPlain(line, plain)`:** Clips a line against a plane, returning the visible segment.

