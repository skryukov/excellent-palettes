import { TurboMount } from "turbo-mount";
import { registerComponent } from "turbo-mount/react";
import { Workbook } from "@fortune-sheet/react";

const turboMount = new TurboMount();

// to register a component use:
registerComponent(turboMount, "Workbook", Workbook);

// to override the default controller use:
// registerComponent(turboMount, "Hello", Hello, HelloController); // where HelloController is a Stimulus controller extended from TurboMountController
