# Bootstrap 12-Column Grid System

## Overview
Bootstrap uses a CSS flexbox-based grid system to create responsive layouts. This grid system consists of three main components:

- **Container (`.container`)**
- **Rows (`.row`)**
- **Columns (`.col-*`)** (e.g., `.col-md-8`)

The grid system is based on 12 columns, and various layouts can be created by combining these columns in different ways.

---

## Column Class Names
Bootstrap provides predefined column classes to create responsive designs. These classes define how many columns an element will occupy for different screen sizes.

### Equal Columns
To create equal-width columns, you can use the following options:

- 12 columns, each 1-column wide (`.col-[className]-1`)
- 6 columns, each 2-columns wide (`.col-[className]-2`)
- 4 columns, each 3-columns wide (`.col-[className]-3`)
- 3 columns, each 4-columns wide (`.col-[className]-4`)
- 2 columns, each 6-columns wide (`.col-[className]-6`)
- 1 column, 12-columns wide (`.col-[className]-12`)

Alternatively, use the `.col` class to automatically create equal-width columns based on the number of elements.

#### Example

```html
<div class="row">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
</div>

<div class="row">
    <div class="col-4">Column</div>
    <div class="col-4">Column</div>
    <div class="col-4">Column</div>
</div>

<div class="row">
    <div class="col-6">Column</div>
    <div class="col-6">Column</div>
</div>
```

---

### Unequal Columns
Columns do not need to add up to 12. You can leave gaps or create layouts with fewer columns.

For example:
- A `col-2` column alongside a `col-10` column adds up to 12.
- You can also leave incomplete rows, such as `col-4` and `col-5`.

If the total column count exceeds 12, the extra columns will move to the next row. For instance, adding `col-8` and `col-6` will cause the `col-6` to wrap to the next line.

#### Adding Gaps Between Columns
Add margin classes (`ml-auto`, `mr-auto`) to leave space on the left or right of a column.

```html
<div class="row">
    <div class="col-4 mr-auto">4 Columns</div>
    <div class="col-5">5 Columns</div>
</div>
```

#### Example

```html
<div class="row">
    <div class="col-8">8 Columns</div>
    <div class="col-6">6 Columns</div>
</div>
```

---

### Column Ordering
Use `order-[number]` classes to change the order of columns. For example, `col-3 order-3` places a 3-column wide element in the third position.

#### Example

```html
<div class="row">
    <div class="col-3 order-3">3 Columns</div>
    <div class="col-4 order-2">4 Columns</div>
    <div class="col order-1">Remaining Columns</div>
</div>
```

---

### Nested Grid System
You can nest grids by adding a new row inside a column.

#### Example

```html
<div class="row">
    <div class="col-4">4 Columns</div>
    <div class="col-8">
        8 Columns
        <div class="row">
            <div class="col-6">6 Columns</div>
            <div class="col-6">6 Columns</div>
        </div>
    </div>
</div>
```

---

### Sources
- [Official Bootstrap Documentation](https://getbootstrap.com/)
