---
title: PhysicalGameObject
description: GameObjct with basic physics
---
### Constructor

```jsx
new PhysicalObject(meshPath: string, config: PhysicalObjectInitialConfig)
```

| Name | Type | Description |
| --- | --- | --- |
| meshPath | string | path to .obj file, file should be stored in /public directory |
| config? | <pre lang="ts">PhysicalObjectInitialConfig {&#13;allowUsingCachedMesh?: boolean;&#13;position?: Vec3DTuple;&#13; rotation?: Vec3DTuple;&#13; size?: Vec3DTuple;&#13; velocity?: Vec3D;&#13; acceleration?: Vec3D;&#13; mass?: number;&#13;} </pre>| initial configuration of PhysicalObject |

### Members

```jsx
// returns new PhysicalObjectInstance based on GameObject passed
static createFromGameObject(gameObject: GameObject, initialConfig?: PhysicalObjectInitialConfig)
```

```jsx
// increment acceleration of PGO
applyForce(force: Vec3D) {}
```

<aside>
💡 U can freely change acceleration, velocity casue they are public properties

</aside>

```jsx
public velocity: Vec3D; // represent object velocity
public acceleration: Vec3D = { x: 0, y: 0, z: 0 }; // represents object acceleration
public mass: number; // represents object mass
```