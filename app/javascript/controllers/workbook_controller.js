import { Controller } from "@hotwired/stimulus";
import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { Workbook } from "@fortune-sheet/react";

export default class extends Controller {
  static values = {
    props: Object
  }
  connect() {
    this.root = createRoot(this.element);
    this.root.render(createElement(Workbook, this.propsValue));
  }
  disconnect() {
    this.root.unmount();
  }
}
