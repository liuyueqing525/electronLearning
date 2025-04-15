module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    defineEmits: "readonly",
    defineProps: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    eqeqeq: 2,
    "array-callback-return": 2,
    "for-direction": 2,
    "guard-for-in": 2,
    "no-dupe-else-if": 2,
    "no-duplicate-case": 2,
    "no-ex-assign": 2,
    // "no-param-reassign": 2,
    "no-self-assign": 2,
    "no-self-compare": 2,
    "no-shadow-restricted-names": 2,
    "no-sparse-arrays": 2,
    "no-var": 2,
    semi: "error", // 使用句末分号
    "array-bracket-spacing": [2, "never"],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      },
    ],
    // 控制逗号前后的空格
    "comma-spacing": [
      2,
      {
        before: false,
        after: true,
      },
    ],
    // 控制逗号在行尾出现还是在行首出现
    "comma-style": [2, "last"],
    //关闭驼峰命名
    "vue/multi-word-component-names": "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // vue3 规则
    "vue/no-dupe-keys": 2,
    "vue/no-export-in-script-setup": 2,
    "vue/no-textarea-mustache": 2,
    "vue/require-v-for-key": 2,
    "vue/return-in-computed-property": 2,
  },
};
