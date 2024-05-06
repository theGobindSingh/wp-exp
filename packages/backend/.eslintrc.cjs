module.exports = {
  extends: ["@project/eslint-config/.eslintrc.cjs"],
  parserOptions: {
    project: true
  },
  rules: {
    "node/no-missing-import": "off"
  }
};
