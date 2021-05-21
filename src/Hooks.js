import { LANG_NAME, MODULE_NAME } from "./Constants.js";

/* -------------------------------------------- */
/*  Hook calls                                  */
/* -------------------------------------------- */

Hooks.once("init", () => {
  game.settings.register(MODULE_NAME, "timeout", {
    name: `${LANG_NAME}.timeout`,
    hint: `${LANG_NAME}.timeoutHint`,
    scope: "client",
    config: true,
    type: Number,
    range: {
      min: 1,
      max: 30,
      step: 1,
    },
    default: 5,
    onChange: () => {},
  });
});

Hooks.once("ready", () => {
  ui.captions.render(true);
});

Hooks.on("renderCameraViews", (cameraViews, html) => {
  if (ui.captions) {
    ui.captions.moveAboveCameraViews(html);
  }
});
