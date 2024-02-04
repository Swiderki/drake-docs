---
title: GUIText
description: Quaternion magick don't ask me
---
### Constructor

```jsx
new GUIText(text: string, fontSize: number, fontFamily: string, color: string, fontWeight: number);
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

### Members

```jsx
public text: string; // Holds current text value
```

```jsx
public fontSize: number; // Holds current font size value
```

```jsx
public fontFamily: string; // Holds CSS-like font family value
```

```jsx
public fontWeight: number; // Holds CSS-like font family value
```

```jsx
public color: string; // Holds CSS-like color value
```

```jsx
// Holds position as an { x: number; y: number } object
// Default value: { x: 0, y: 0 }
public position: { x: number; y: number } = { x: 0, y: 0 };
```

```jsx
// Returns current text width
// Calculated with the object's function
get width(void): number;
```

```jsx
// Returns current text height
// Calculated with the object's function
get height(void): number;
```

```jsx
// It calculates text with using a false canvas
// Used byt width getter
protected getTextWidth(void): number;
```

```jsx
// It calculates text with using a false canvas
// Used byt width getter
protected getTextWidth(void): number;
```

```jsx
// It's called whenever engine renders the element
// It comes from GuiElement interface
// *PARAMS*
// ctx: CanvasRenderingContext2D - context used to render the element on the canvas context of the game instance
public render(ctx: CanvasRenderingContext2D): void;
```