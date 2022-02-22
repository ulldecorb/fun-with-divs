# fun-with-divs
Retro game where victory is achieved by hitting two squares at the same time.

## Technologies
* React 17.0.2
* Eslint 8.8.0
* Jest 5.16.2
* testing-library 12.1.2

## Setup
After clone repository:
```bash
npm install
cd fun-with-divs
npm start
```

<!-- Not an exact answer, but the warning is coming from Blink which is Chrome's DOM implementation. https://chromium.googlesource.com/chromium/src/+/011c27ced479c76cffd5093ce107082e4da657f3/third_party/blink/renderer/core/html/forms/color_input_type.cc#190

If you create an <input type=color> and then set the .value to an unsupported value, it will issue that warning. There's no way to disable this warning, you can only avoid it by not setting the .value to an invalid value.

MDN explains this a bit too: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color#Value

Setting the value to anything that isn't a valid, fully-opaque, RGB color in hexadecimal notation will result in the value being set to #000000.

I can't speak for React, but maybe it does this sort of thing incidentally. -->
