> **NOTE: My personal preference of the design system implementation is [Tailwind](https://tailwindcss.com/), but following the tech requirement - `Custom styling (avoid using styles provided by external libraries)` I have to use plain CSS.**

## Concept

Store all design related values in a single place. Allows to keep the design consistent across the whole application and simplifies design changes in the future. Use abstract naming convention.

## Design Tokens

Create CSS variable for the following key design tokens:
- Colors:
```css
.container {
  background-color: var(--color-primary);
}
```
- Spacing:
```css
.container {
  padding: var(--lg);
}
```
- Typography:
```css
:root {
  --head-1-font-size: 40px;
  --head-1-line-height: 50px;
  --head-1-font-weight: 700;
}

.typo-head-1 {
  font-size: var(--head-1-font-size);
  line-height: var(--head-1-line-height);
  font-weight: var(--head-1-font-weight);
}

...

<h1 className="typo-head-1">My Title</h1>
```

## Responsive Design

Use `@media` queries to make the design responsive.
