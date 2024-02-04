---
title: GUIElement
description: Implemented by classes to create GUI elements.
---

### Constructor

```tsx
// Built like:
interface GuiElement {
  public height: number;
  public width: number;
  public position: { x: number; y: number };

  public render(ctx: CanvasRenderingContext2D): void;
}
```

### Members

```tsx
public height: number; // Represents GUI element height
```

```tsx
public width: number; // Represents GUI element width
```

```tsx
// An { x: number; y: number } object
// Represents 
public position: { x: number; y: number };
```

```tsx
// It's called when engine renders the element
// *PARAMS*
// ctx: CanvasRenderingContext2D - context to render the element on. Properly, the game's ctx
public render(ctx: CanvasRenderingContext2D): void;
```