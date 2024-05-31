import { TurboMount } from "turbo-mount";
import { registerComponents } from "turbo-mount/registerComponents/react";

const turboMount = new TurboMount();

const controllers = import.meta.glob("./**/*_controller.js", { eager: true });
const components = import.meta.glob("/components/**/*.jsx", { eager: true });

registerComponents({ turboMount, components, controllers });
