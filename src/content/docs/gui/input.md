---
title: Input 
description: Used to create an input on a GUI. Input has overflow hidden.
---

### Constructor
```tsx
new Input(text: string, fontSize: number, fontFamily: string, color: string, fontWeight: number = 400, predefiniedHeight: number, predefinedWidth: number) 
```

| Name | Type | Description |
| --- | --- | --- |
| text | string | Text to be displayed |
| fontsize | number | Font size in pixels |
| fontFamily | string | CSS font family |
| color | string | CSS text color |
| fontWeight | number | CSS font weight |
| predefinedHeight | number | Input predefined height |
| predefinedWidth | number | Input predefined width |

### Implements

- GUIElement
- Clickable

### Members
```tsx
// Holds position as an { x: number; y: number } object
// Default value: { x: 0, y: 0 }
// Comes from GuiElement
public position: { x: number; y: number } = { x: 0, y: 0 };
```

```tsx
// A boolean variable to check is the input field currently focused
public isFocused: boolean = false;
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
};// Some code
```

<pre>
💡Padding is changing automatically based on predefined width and height
</pre>

```tsx
// It's called when engine renders the element
// It comes from GuiElement interface
// *PARAMS*
// ctx: CanvasRenderingContext2D - context to render the element on. Properly, the game's ctx
public render(ctx: CanvasRenderingContext2D): void;
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
public onClick(void): void { this.isFocused = true }
```

```tsx
// It is used to handle a click outside the object
// Default it has a completely empty body
// The class must be extended to handle a click
public onClickOutside(void): void { this.isFocused = false }
```

```tsx
// It is used to handle a click outside the object
// Default it has a completely empty body
// The class must be extended to handle a click
public onHover(void): void {}
```

```tsx
// Handles key down events for the input field.
handleKeyDown(event: KeyboardEvent) {
    if (!this.isFocused) return;
    if (event.key === 'Backspace') {
        this.text = this.text.slice(0, -1);
    } else if (event.key.length === 1) {
        this.text += event.key;
    }
}
```

### Example

```tsx
class MyInput extends Input{
  constructor() {
    super("Test input", 30, "Arial", "#00ff00", 400, 80, 200);
    this.position.x = 300;
    this.position.y = 100;
  }
}
```