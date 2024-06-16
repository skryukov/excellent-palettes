import { TurboMount } from "turbo-mount";
import plugin from "turbo-mount/react";
import { registerComponents } from "turbo-mount/registerComponents/esbuild";

const turboMount = new TurboMount();

import controllers from "./controllers/**/*_controller.js";
import components from "./components/**/*.jsx";

registerComponents({ plugin, turboMount, components, controllers });
