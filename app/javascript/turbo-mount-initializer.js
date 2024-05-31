import { TurboMount } from "turbo-mount";
import { registerComponent } from "turbo-mount/react";
import { Workbook } from "@fortune-sheet/react";
import { HexColorPicker } from "react-colorful";
import ColorPickerController from "./controllers/color_picker_controller";

const turboMount = new TurboMount();

// to register a component use:
registerComponent(turboMount, "Workbook", Workbook);
registerComponent(turboMount, "ColorPicker", HexColorPicker, ColorPickerController);

// to override the default controller use:
// registerComponent(turboMount, "Hello", Hello, HelloController); // where HelloController is a Stimulus controller extended from TurboMountController
