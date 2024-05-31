import plugin, { TurboMount } from "turbo-mount/react";
import { registerComponents } from "turbo-mount/registerComponents/vite";

const turboMount = new TurboMount();

const controllers = import.meta.glob("./**/*_controller.js", { eager: true });
const components = import.meta.glob("/components/**/*.jsx", { eager: true });

registerComponents({ plugin, turboMount, components, controllers });
