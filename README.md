# `fifteen-kilos`

Exactly 15 kilos of data.

![Build Status](https://img.shields.io/badge/build-15%20kilos-brightgreen.svg) ![Coverage](https://img.shields.io/badge/coverage-15k-brightgreen.svg) ![npm version](https://img.shields.io/badge/npm-v15.kilos-blue.svg?style=flat-square) ![Downloads](https://img.shields.io/badge/downloads-15k-green.svg)

![Screenshot showing index.js is exactly 15kb in size](http://imgur.com/j0QZcIM.jpg)

## Usage

```
npm install --save fifteen-kilos
```

Now you have full access to all 15 kilos of data:

```JS
import fifteen from 'fifteen-kilos'
```

### Webpack Plugin

Thanks to @markdalgleish, you can now get the magic of `fifteen-kilos` in webpack automatically! 🎉

Simply `npm install --save-dev fifteen-kilos-webpack-plugin` and then add it to your plugins array:

```JS
plugins: [
	new FifteenKilosPlugin()
]
```

> Wrote a plugin for another build system? Please submit a PR adding it to the README!

### React Plugin

Also thanks to @markdalgleish, you can now get the magic of `fifteen-kilos` in your React app automatically! ⚛

Simply `npm install --save-dev react-fifteen-kilos` and then use it to decorate React:

```JS
import React from 'react'
import fifteenKilos from 'react-fifteen-kilos'
fifteenKilos(React)
```

> Wrote a plugin for another UI library? Please submit a PR adding it to the README!

### Live Demo

Now you can test live fifteen-kilos demo app:

[live demo](https://sm-react.github.io/storybook-addon-material-ui/?theme-ind=3&theme-sidebar=true&selectedKind=Compatible%20Projects&selectedStory=fifteen-kilos&full=0&down=1&left=1&panelRight=0&downPanel=sm%2Fstorybook-addon-material-ui%2Fmaterial-panel) with themes support

## Contributions

Contributions for this library are very much encouraged. Please submit PRs with either failing test cases to report a bug or an implemented feature to showcase why we need to merge that feature.

## License

Copyright © 2016 Maximilian Stoiber. Licensed under the MIT license.
