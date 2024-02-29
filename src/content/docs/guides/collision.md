---
title: Overlap
description: Introduction to overlap.
---

---

Provides collision detection between two `GameObject` instances using their box colliders.

## Constructor

```typescript
new Overlap(obj1: GameObject, obj2: GameObject)
```

### Parameters:

- `obj1: GameObject` - The first game object involved in the overlap.
- `obj2: GameObject` - The second game object involved in the overlap.

### Throws:

- An error if either `obj1` or `obj2` does not have a box collider set up.

## Properties

- `obj1: GameObject`  
  The first game object involved in the overlap.

- `obj2: GameObject`  
  The second game object involved in the overlap.

- `enabled: boolean = true`  
  Determines whether the overlap detection is active.

## Methods

### onOverlap(): void

Called when an overlap between `obj1` and `obj2` occurs. Meant to be overridden with custom logic for handling overlaps.

### isHappening(): boolean

Checks if there is an overlap between the box colliders of `obj1` and `obj2`.

#### Returns:

- `boolean` - `true` if the overlap is occurring, `false` otherwise.

## Example Usage

```typescript
import GameObject from "../entities/game-objects/GameObject";
import Overlap from "./Overlap";

// Assuming GameObjects player and enemy have been initialized and have box colliders
const overlap = new Overlap(player, enemy);

overlap.onOverlap = function () {
  console.log("Collision detected between player and enemy.");
};

if (overlap.isHappening()) {
  overlap.onOverlap();
}
```

---
