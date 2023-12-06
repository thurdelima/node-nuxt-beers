// plugins/bootstrap-icons.ts
import type { Plugin } from '@nuxt/types';

const bootstrapIconsPlugin: Plugin = ({ app }) => {
  if (process.client) {
    import('bootstrap-icons/font/bootstrap-icons.css');
  }

  if (app) {
    app.icons = {
      bootstrap: true,
    };
  }
};

export default bootstrapIconsPlugin;
