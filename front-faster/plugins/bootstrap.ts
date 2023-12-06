// plugins/bootstrap.ts
// plugins/bootstrap.ts
import type { Plugin } from '@nuxt/types';

if (process.client) {
  import('bootstrap/dist/css/bootstrap.css');
  import('bootstrap');
}

const bootstrapPlugin: Plugin = ({ app }) => {
  // You can use `app` to access the Vue instance and perform additional setup if needed
};

export default bootstrapPlugin;
