const production = true;

import { terser } from "rollup-plugin-terser";

export default {
  input: "src/main.js",
  output: {
    file: "public/bundle.js",
    format: "iife"
  },
  plugins: [production && terser()]
};
