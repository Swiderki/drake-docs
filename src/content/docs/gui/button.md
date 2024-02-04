---
title: Button
description: Used to create a button on a GUI
---
### Constructor
```tsx
new Button(text: string, fontSize: number, fontFamily: string, color: string, fontWeight: number = 400);
```

| Name | Type | Description |
| --- | --- | --- |
| text | string | Text to be displayed |
| fontsize | number | Font size in pixels |
| fontFamily | string | CSS font family |
| color | string | CSS text color |
| fontWeight | number | CSS font weight |

### Implements

- GUIElement
- Clickable

### Members

```tsx
// Holds current text value
// Comes from GUIText
public text: string;
```

```tsx
// Holds current font size value
// Comes from GUIText
public fontSize: number;
```

```tsx
// Holds CSS-like font family value
// Comes from GUIText
public fontFamily: string; 
```

```tsx
// Holds CSS-like font family value
// Comes from GUIText
public fontFamily: string; 
```

```tsx
// Holds CSS-like color value
// Comes from GUIText
public color: string; 
```

```tsx
// Holds position as an { x: number; y: number } object
// Default value: { x: 0, y: 0 }
// Comes from GuiElement
public position: { x: number; y: number } = { x: 0, y: 0 };
```

```tsx
// Returns current text width
// Calculated with the object's function
get width(void): number;
```

```tsx
// Returns current text height
// Calculated with the object's function
get height(void): number;
```

```tsx
// It calculates text with using a false canvas
// Used byt width getter
// Comes from GUIText
protected getTextWidth(void): number;
```

```tsx
// It calculates text height using a false canvas
// Used byt height getter
// Comes from GUIText
protected getTextHeight(void): number;
```

```tsx
// It's called when engine renders the element
// It comes from GuiElement interface
// *PARAMS*
// ctx: CanvasRenderingContext2D - context to render the element on. Properly, the game's ctx
public render(ctx: CanvasRenderingContext2D): void;
```

```tsx
// Represents Button border
// It does NOT extendes the with or height
// It is like box-sizing: border-box in CSS
// Default - 1px #fff for all the sides
public border: {
  top: { color: string; width: number };
  bottom: { color: string; width: number };
  left: { color: string; width: number };
  right: { color: string; width: number };
} = {
  top: { color: "#ffffff", width: 1 },
  bottom: { color: "#ffffff", width: 1 },
  left: { color: "#ffffff", width: 1 },
  right: { color: "#ffffff", width: 1 },
};
```

```tsx
// Represents Button border
// It does NOT extendes the with or height
// It is like box-sizing: border-box in CSS
// Default - 1px #fff for all the sides
public border: {
  top: { color: string; width: number };
  bottom: { color: string; width: number };
  left: { color: string; width: number };
  right: { color: string; width: number };
} = {
  top: { color: "#ffffff", width: 1 },
  bottom: { color: "#ffffff", width: 1 },
  left: { color: "#ffffff", width: 1 },
  right: { color: "#ffffff", width: 1 },
};
```

```tsx
// It is used to draw lines
// and in particular allows you to draw a border
private drawLine(
  ctx: CanvasRenderingContext2D,
  start: { x: number; y: number },
  end: { x: number; y: number },
  color: string,
  width: number
): void;
```

```tsx
// It is used to draw lines
// and in particular allows you to draw a border
private drawLine(
  ctx: CanvasRenderingContext2D,
  start: { x: number; y: number },
  end: { x: number; y: number },
  color: string,
  width: number
): void;
```

```tsx
// Tells if the given position is in the element
// It comes from Clickable
public isCoordInElement(x: number, y: number): boolean;
```

```tsx
// It is used to handle a click on the object
// Default it has a completely empty body
// The class must be extended to handle a click
public onClick(void): void {}
```

```tsx
// It is used to handle a click on the object
// Default it has a completely empty body
// The class must be extended to handle a click
public onClick(void): void {}
```

```tsx
// It is used to handle a click outside the object
// Default it has a completely empty body
// The class must be extended to handle a click
public onHover(void): void {}
```

### Example
```tsx
class MyButton extends Button {
  constructor() {
    super("Test btn", 24, "Arial", "#00ff00", 400);
    this.position.x = 100;
    this.position.y = 100;
    this.border.bottom.color = "#00ff00";
    this.border.top.color = "#00ff00";
    this.border.right.color = "#00ff00";
    this.border.left.color = "#00ff00";
  }

  override onClick(): void {
    if (this.color == "#ffffff") this.color = "#00ff00";
    else this.color = "#ffffff";
    console.log(this.width);
  }
}
```