import Captions from "./Captions.js";

ui.captions = new Captions();

/* -------------------------------------------- */
/*  Hook calls                                  */
/* -------------------------------------------- */

Hooks.once("ready", () => {
  ui.captions.render(true);
});
