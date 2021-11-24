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

Hooks.on("renderCameraViews", async (cameraViews, html) => {
  if (ui.captions) {
    // Sleep to make sure the camera view is in it's final position
    await new Promise((resolve) => setTimeout(resolve, 100));
    ui.captions.moveAboveCameraViews(html);
  }
});
