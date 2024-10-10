import ReactDOM from "react-dom/client";
import Counter, { CounterProps } from "./components/Counter";

export const normalizeAttribute = (attribute: string) => {
  return attribute.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
};

class CounterWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const props = this.getPropsFromAttributes<CounterProps>();
    const root = ReactDOM.createRoot(this.shadowRoot as ShadowRoot);
    root.render(<Counter {...props} />);
  }

  private getPropsFromAttributes<T>(): T {
    const props: Record<string, string> = {};

    for (let index = 0; index < this.attributes.length; index++) {
      const attribute = this.attributes[index];
      props[normalizeAttribute(attribute.name)] = attribute.value;
    }

    return props as T;
  }
}

export default CounterWebComponent;
