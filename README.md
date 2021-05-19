# libCaptions
Library module for providing captioning support to FoundryVTT. This module does not provide captioning services itself, but provides a way for other modules to display captions in the FVTT interface.

## Installation
You can install this module by using the following manifest URL: https://github.com/bekriebel/fvtt-module-lib-captions/releases/latest/download/module.json

## How to use
This is a library module meant to be used as a dependency for other modules that provide captioning services in FoundryVTT.

In your `module.json` file, add:
```json
  "dependencies": [
    {
      "name": "libCaptions",
      "manifest": "https://github.com/bekriebel/fvtt-module-lib-captions/releases/latest/download/module.json"
    }
  ]
```

Once added, captions can be displayed by using the method `ui.captions.caption`:

```js
ui.captions.caption(<caption-id>, <foundry-user-object>, <caption-text>);
```

Captions with the same `id` will update existing displayed text if it is still on the screen. This allows interim captions to be displayed while they are being processed.

## Support my work
[![Become a Patron](https://img.shields.io/badge/support-patreon-orange.svg?logo=patreon)](https://www.patreon.com/bekit)
[![Donate via Ko-Fi](https://img.shields.io/badge/donate-ko--fi-red.svg?logo=ko-fi)](https://ko-fi.com/bekit)
