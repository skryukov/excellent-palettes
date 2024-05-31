import { TurboMountController } from "turbo-mount";

export default class extends TurboMountController {
  static targets = ["input", "mount"];

  get componentProps() {
    return {
      ...this.propsValue,
      onChange: this.onChange,
    };
  }

  onChange = (colors) => {
    this.setComponentProps({ ...this.componentProps, colors });
    this.inputTarget.value = colors.join(" ");
  };
}
