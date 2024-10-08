import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "quotes": ["error", "double"],
    "vue/html-indent": ["error", 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: []
    }]
  }
}).override("nuxt/stylistic", {
  rules: {
    "@stylistic/indent": ["error", 2],
    "@stylistic/jsx-indent": ["error", 2],
    "@stylistic/quotes": ["error", "double"],
    "@stylistic/no-mixed-spaces-and-tabs": "error",
    "@stylistic/jsx-self-closing-comp": "off",
    "@stylistic/comma-dangle": "off",
    "@stylistic/semi": ["error", "always"],
    "@stylistic/no-trailing-spaces": "error",
    "@stylistic/template-curly-spacing": ["error", "always"],
    "@stylistic/no-multiple-empty-lines": ["error", { max: 2, maxEOF: 0 }]
  }
});
