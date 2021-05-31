import registerModuleSettings from "./registerModuleSettings.js";

/* -------------------------------------------- */
/*  Hook calls                                  */
/* -------------------------------------------- */

Hooks.once("init", () => {
  // Register module settings
  registerModuleSettings();
});

Hooks.once("ready", () => {
  ui.captions.render(true);
});

Hooks.on("renderCameraViews", (cameraViews, html) => {
  if (ui.captions) {
    ui.captions.moveAboveCameraViews(html);
  }
});
