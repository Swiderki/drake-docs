---
title: Clickable
description: Implemented to create clickable GUI elements
---
### Build
```tsx
// Built like:
export interface Clickable {
  public onClick(void): void;
  public onClickOutside(void): void
  public onHover(void): void;
  public isCoordInElement(x: number, y: number): boolean;
  public width: number;
  public height: number;
}
```

### Members
```tsx
// Used to handle click on an object
public onClick(void): void;
```

```tsx
// Used to handle click outside an object
public onClickOutside(void): void;
```

```tsx
// Used to handle hover on an object
public onHover(void): void;
```

```tsx
// It allows to check if the given position is inside the element
// *PARAMS*
// x, y - position coords
public isCoordInElement(x: number, y: number): boolean;
```

```tsx
// Clickable must have width and height
// For exaple to calculate the isCoordInElement(...) value
public width: number;
public height: number;
```

```tsx