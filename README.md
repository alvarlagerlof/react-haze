![Logo](banner.png)

# React Haze

Easily show a fade at edges of lists to indicate scrollability

## Features

- Set a pixel offset for when the fade is triggerd
- Choose the fade color and size
- Works horizontally or vertially

## Installation

Install with npm or yarn

```bash
npm install react-haze
yarn add react-haze
```

Import the `Haze` component

```jsx
import Haze from "react-haze";
```

Wrap a **non-scrolling container** with the haze component and choose props according to your preference.

```jsx
<Haze
  orientation="horizontal"
  scrollOffset={20}
  gradientSize={50}
  gradientColor="rgb(255, 254, 249)"
>
  {/* You content goes here */}
</Haze>
```

## Demo

There is a CodeSandBox demo [here](https://codesandbox.io/s/react-haze-0pd2u?file=/src/App.js)

## License

[MIT](LICENSE)

## Contributing

Contributions are always welcome!

See [CONTRIBUTING.md](CONTRIBUTING.md) for ways to get started.

## Feedback

If you have any feedback, please [create an issue](https://github.com/alvarlagerlof/react-haze/issues/new) reach me on [twitter](https://twitter.com/alvarlagerlof).
