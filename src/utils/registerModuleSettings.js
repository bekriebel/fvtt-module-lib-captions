import { MODULE_NAME } from "./constants.js";
import * as helpers from "./helpers.js";
import * as log from "./logging.js";

export default function registerModuleSettings() {
  helpers.registerModuleSetting({
    name: "timeout",
    scope: "client",
    config: true,
    default: 5,
    type: Number,
    range: {
      min: 1,
      max: 30,
      step: 1,
    },
    onChange: () => {},
  });

  helpers.registerModuleSetting({
    name: "fontSize",
    scope: "client",
    config: true,
    default: 14,
    type: Number,
    range: {
      min: 14,
      max: 60,
      step: 1,
    },
    onChange: () => {},
  });

  // Register debug logging setting
  helpers.registerModuleSetting({
    name: "debug",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    onChange: (value) => log.setDebug(value),
  });

  // Set the initial debug level
  log.setDebug(game.settings.get(MODULE_NAME, "debug"));
}
