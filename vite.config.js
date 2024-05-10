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
        gradientborder: resolve(__dirname, "gradientborder.html"),
        apidatafetch: resolve(__dirname, "apidatafetch.html"),
        localstorage: resolve(__dirname, "localstorage.html"),
        gradientborder2: resolve(__dirname, "gradientborder2.html"),
        paramstabs: resolve(__dirname, "paramstabs.html"),
        quizapp: resolve(__dirname, "quizapp.html"),
      },
    },
  },
});
