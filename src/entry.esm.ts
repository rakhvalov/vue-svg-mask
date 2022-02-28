import { App, Plugin } from "vue";

import component from "@/vue-svg-mask.vue";

type InstallableComponent = typeof component & {
  install: Exclude<Plugin["install"], undefined>;
};

export default ((): InstallableComponent => {
  const installable = component as unknown as InstallableComponent;

  installable.install = (app: App) => {
    app.component("VueSvgMask", installable);
  };
  return installable;
})();
