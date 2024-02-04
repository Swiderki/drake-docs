---
title: GameObject
description: Introduction to GameObject instance.
---

### Constructor

```tsx
new GameObject(meshPath: string, config?: GameObjectInitialConfig)
```

| Name | Type | Description |
| --- | --- | --- |
| meshPath | string | path to .obj file, file should be stored in /public directory |
| config? | position?: Vec3DTuple; </br> size?: Vec3DTuple; </br> rotation?: Vec3DTuple; </br> allowUsingCachedMesh?:boolean | initial configuration of GameObject |

### Members

| Property | Description |
| --- | --- |
| readonly meshPath: string; | store path to .obj file with GameObject's model |
| readonly allowUsingCachedMesh: boolean; | when enabled, every model is fetched once and then its mesh is cached for future usage |
| mesh: Line[];
type Line = [Vec3D, Vec3D]; | a list of lines from which the model is built of |

### Example usage

```tsx
//...
this.myObject = new Drake.GameObject(
    "objects/path_to_my_object.obj",
    [0, 2, 0], // 2 units up in Y axis
    [1, 1, 1], // normal scale
    [Math.PI/2, 0, 0] // 90 deg in X axis
);
//...
```

<aside>
💡 There are few bultin Game object. You can read more about them here:


</aside>