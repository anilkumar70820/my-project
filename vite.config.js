import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        homepage: resolve(__dirname, "index.html"),
        select: resolve(__dirname, "select.html"),
        counter: resolve(__dirname, "counter.html"),
        savevalue: resolve(__dirname, "savevalue.html"),
        calculator: resolve(__dirname, "calculator.html"),
        advancedcalculator: resolve(__dirname, "advancedcalculator.html"),
        accordian: resolve(__dirname, "accordian.html"),
        tabs: resolve(__dirname, "tabs.html"),
        texteditor: resolve(__dirname, "texteditor.html"),
        taskapp: resolve(__dirname, "taskapp.html"),
      },
    },
  },
});
