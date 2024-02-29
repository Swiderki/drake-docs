---
title: Icon
description: GUI Icon
---

# `Icon` Class Documentation

Represents an icon that can be rendered within a GUI using SVG paths.

## Constructor

```tsx
constructor(svgPath: string, width: number, height: number, position: Vec2D, strokeColor: string, fillColor?: string)
```

| Parameter     | Type                  | Description                           |
| ------------- | --------------------- | ------------------------------------- |
| `svgPath`     | `string`              | The SVG path data for the icon.       |
| `width`       | `number`              | The width of the icon.                |
| `height`      | `number`              | The height of the icon.               |
| `position`    | `Vec2D`               | The initial position of the icon.     |
| `strokeColor` | `string`              | The color used for the icon's stroke. |
| `fillColor`   | `string \| undefined` | The fill color of the icon. Optional. |

## Method

### `render(ctx: CanvasRenderingContext2D): void`

Renders the icon onto the specified canvas context.

- `ctx`: `CanvasRenderingContext2D`
  - The canvas rendering context where the icon will be drawn.

## Example Usage

```tsx
import Icon from "./Icon";
import { Vec2D } from "@/types/math";

const icon = new Icon(
  "M10 10 H 90 V 90 H 10 L 10 10",
  100,
  100,
  new Vec2D(50, 50),
  "#000",
  "#fff"
);
icon.render(ctx); // Assuming 'ctx' is your CanvasRenderingContext2D
```

