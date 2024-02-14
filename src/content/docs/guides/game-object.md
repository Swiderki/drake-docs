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

```tsx
// moves object relatively
// it actual moves each vertex of the mesh
move(x: number, y: number, z: number): void
```

```tsx
// sets position of gameObject absolutely
setPosition(x: number, y: number, z: number): void
```

```tsx
// scale game object relatively
scale(x: number, y: number, z: number)
```

```tsx
// apply quaternion's rotation to object 
applyQuaternion(quaternion: QuaternionUtils.Quaternion): void
```

```tsx
// returns boxCollider mesh if object has one
getBoxColliderMesh(): Line3D[] | null
```

```tsx
//loads game objects mesh and calls applyInitialParams() at the end
async loadMesh(): Promise<void>
```

```tsx
// gets called after the mesh load, appals all inital transformations like position and size 
applyInitialParams(): void
```

```tsx
// returns mesh of gameObject
getMesh(): Line3D[];
```

```tsx
// gets automatically called every frame
// deltaTime is time between previous frame on current one
Update(deltaTime: number): void;
```

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