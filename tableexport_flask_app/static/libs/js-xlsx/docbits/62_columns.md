#### Column Properties

Excel internally stores column widths in a nebulous "Max Digit Width" form.  The
Max Digit Width is the width of the largest digit when rendered.  The internal
width must be an integer multiple of the the width divided by 256.  ECMA-376
describes a formula for converting between pixels and the internal width.

Given the constraints, it is possible to determine the MDW without actually
inspecting the font!  The parsers guess the pixel width by converting from width
to pixels and back, repeating for all possible MDW and selecting the MDW that
minimizes the error.  XLML actually stores the pixel width, so the guess works
in the opposite direction.

The `!cols` array in each worksheet, if present, is a collection of `ColInfo`
objects which have the following properties:

```typescript
type ColInfo = {
	MDW?:number;  // Excel's "Max Digit Width" unit, always integral
	width:number; // width in Excel's "Max Digit Width", width*256 is integral
	wpx?:number;  // width in screen pixels
	wch?:number;  // intermediate character calculation
};
```

Even though all of the information is made available, writers are expected to
follow the priority order:

1) use `width` field if available
2) use `wpx` pixel width if available
3) use `wch` character count if available

