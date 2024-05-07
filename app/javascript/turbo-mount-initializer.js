import { TurboMount } from "turbo-mount";
import { registerComponents as registerReact } from "turbo-mount/registerComponents/react";
import { registerComponents as registerSvelte } from "turbo-mount/registerComponents/svelte";
import { registerComponents as registerVue } from "turbo-mount/registerComponents/vue";

const turboMount = new TurboMount();

const controllers = import.meta.glob("./**/*_controller.js", { eager: true });
const reactComponents = import.meta.glob("/components/**/*.jsx", { eager: true });
const svelteComponents = import.meta.glob("/components/**/*.svelte", { eager: true });
const vueComponents = import.meta.glob("/components/**/*.vue", { eager: true });

registerReact({ turboMount, components: reactComponents, controllers });

registerSvelte({ turboMount, components: svelteComponents, controllers });

registerVue({ turboMount, components: vueComponents, controllers });
