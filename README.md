# force-app-name-prefix

A stylelint plugin that force it to have app name as prefix.

To avoid css naming conflicts between apps, suggest to separate css selectors by prefix. For each app, you can have a unique app name and this plugin will force you to prefix for each selector.

## Installation

```
npm install force-app-name-prefix
```

Be warned: this is only compatible with stylelint v3+.

## Usage

Add it to your stylelint config `plugins` array, then add `"plugin/force-app-name-prefix"` to your rules,
specifying your app name as `appName` in the primary option.

Like so:

```js
// .stylelintrc
{
  "plugins": [
    "force-app-name-prefix"
  ],
  "rules": {
    // ...
    "plugin/force-app-name-prefix": {
      appName: 'your-app-name'
    },
    // ...
  }
}
```

## Rule

Disallow missing prefix or namespace for selectors, keyframes name and custom font-family name.

```css
    .some-selector { ... }
/** ↑
 * Selector "some-selector" is out of control, please wrap within .your-app-name         plugin/force-app-name-prefix */

    @keyframes spin {
/** ↑
 * Keyframes name "spin" is out of control, please prefix with your-app-name       plugin/force-app-name-prefix */
        0% { ... }
        100% { ... }
    }

    @font-face {
        font-family: "my-font";
/**                   ↑
 * Custom font-family "my-font" is out of control, please prefix with your-app-name         plugin/force-app-name-prefix */
        ...
    }
```

## Option

`appName` is the name of your app. Should be a string of `a-zA-Z` or `-` or `_`.