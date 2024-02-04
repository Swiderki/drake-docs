---
title: GUI
description: Holds all GUI elements for scene 
---

### Construtor
```tsx
new GUI(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D);
```

| Name | Type | Description |
| --- | --- | --- |
| canvas | HTMLCanvasElement | Canvas, mostly game canvas. Used, for example, to hide the cursor. |
| ctx | CanvasRenderingContext2D | Canvas context, mostly canvas context, games. Used, for example, to draw GUI elements. |


### Members

```tsx
// Keeps all the GUI Elements, key is an ID
private _elements: Map<number, GuiElement> = new Map();
```

```tsx
private _idGenerator = new IdGenerator(); // Used to generate IDs
```

```tsx
private _hideCursor: boolean = false; // Show mouse cursor or not
```

```tsx
private canvas: HTMLCanvasElement; // Must be here to toggle the cursor
```

```tsx
private ctx: CanvasRenderingContext2D; // A 2D context to draw on
```

```tsx
private ctx: CanvasRenderingContext2D; // A 2D context to draw on
```

```tsx
public get hideCursor(void): boolean; // Returns GUI._hideCursor
```

```tsx
// It must be setter to handle some actions on a cursor toggle
public set hideCursor(value: boolean): void;
```

```tsx
// Returns all the GUI elements
public get elements(void): Map<number, GuiElement>;
```

```tsx
// Adds element and returns its id
public addElement(element: GuiElement): number;
```

```tsx
// Removes element from GUI
// THROWS ERROR IF ID DOES NOT EXIST
public removeElement(elementId: number);
```

```tsx
// Used to render the GUI
// Iterate through all the GUI Elements and calls their own render() 
public render(void): void;
```

### Usage
```tsx
const mainSceneGUI = new GUI(this.getCanvas, this.getCanvas.getContext("2d")!); // Values from the game
mainSceneGUI.hideCursor = true; // We sets the cursor
mainSceneGUI.addElement(this.icon); // GUI Element
```