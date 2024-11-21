# Text Sizing and Alignment
## Text Sizing and Alignment
### 1. Text Sizing:
   > Text Sizing, ensures that text is displayed at the appropriate size on web pages. We use the font-size property to set the text size.
### A. Pixel (px) Sizing by Unit:
```
p {
     font-size: 12px;
    /* Set text size to 12 pixels */
}
```
> Another one example:
```
/* Increase text size and capitalise letter starts */
h1 {
     font-size: 36px;
    /* Text size 36px */
     text-transform: capitalize;
    /* Capitalising the initials of texts */
}
```
### B. Em (em) Sizing by Unit:
> em unit sizes according to the font size of the element containing the text.
```
 body {
     font-size: 16px;
    /* Set the default font size */
}
 p {
     font-size: 1.2em;
    /* Setting the text size to 1.2 em (1.2 * 16px = 19.2px) */
}
```
> Another one example:
```
/* Adjust the text size and set it as plain text (normal) */
p {
     font-size: 20px;
    /* Text size 20px */
     font-style: normal;
    /* Change the font to plain text */
}
```
### C. Sizing in Percent (%) Units:
> Like em units, percentage units instead of em units can effectively size text.
```
h1 {
     font-size: 150%;
    /* Increase text size by a percentage */
}
```
### 2. Text Alignment:

> Aligning text includes how to align text horizontally as well as how to align at the block level. We use the text-align and display properties to align text.
###  A. Horizontal Text Alignment:
```
 p {
     text-align: center;
    /* Horizontal align text in the centre */
}
 h1 {
     text-align: right;
    /* Horizontal align text to the right */
}
 h2 {
     text-align: justify;
    /* Justify text to both edges (justifies each line left and right) */
}
```
> Another One Example:
```
/* Align text in the centre and add a border */
.centered-text {
     text-align: center;
    /* Horizontal align text in the centre */
     border: 2px solid #FF5733;
    /* 2 px thick orange border */
     padding: 10px;
    /* Border leaving a gap inwards */
}
```
###   B. Text Alignment at Block Level:
> We can align text at the block level using the display property.
```
div {
     display: block;
    /* Align text as block element */
}
 span {
     display: inline;
    /* Align text as inline element */
}
```
> Another one example:
```
/* Align text in the centre and add an image to the background with a border */
.centered-image-text {
     text-align: center;
     border: 1px solid #007BFF;
    /* 1 pixel thick blue border */
     background-image: url("background-image.jpg");
    /* Add an image to the background */
     background-size: cover;
     padding: 20px;
    /* Border leaving a gap inwards */
     color: #FFFFFF;
    /* Change text color to white */
}
```
### 3. Centring Texts:
> We can use the vertical-align and text-align properties to centre text vertically and horizontally.
```
/* Align text in the centre horizontally */
 h1 {
     text-align: center;
}
/* Align text vertically in the centre */
 .vertical-center {
     display: flex;
     align-items: center;
     justify-content: center;
     height: 300px;
    /* It is important to indicate the height value */
}
```
> Another One Example:
```
/* Centre align multi-line text and adjust line height */
.multiline-center {
     text-align: center;
     line-height: 1.6;
    /* Determine line height */
}
```
> Another One Example:
```
/* Centre multi-line text vertically and horizontally */
.multiline-vertical-horizontal-center {
     display: flex;
     align-items: center;
    /* Vertical centred */
     justify-content: center;
    /* Horizontally centred */
     height: 300px;
    /* It is important to indicate the height value */
}
```
### 4. Multi-line Text Alignment:
> We can use the text-align and line-height properties to align multi-line texts.
```
/* Centre align multi-line text */
 .multiline-center {
     text-align: center;
     line-height: 1.6;
    /* It is important to determine the row height */
}
```
### Text Wrapping and Content Hiding
```
/* Scroll text and block content from appearing */
.scroll-hide-content {
     overflow: hidden;
    /* Blocking content from appearing */
     white-space: nowrap;
    /* Prevent text from being cut off at the end of a line */
     text-overflow: ellipsis;
    /* Display text with ... (if not all content is displayed) */
}
```
