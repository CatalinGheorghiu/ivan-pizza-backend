module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix src", "eslint src"],
  "**/*.ts?(x)": () => "yarn check-types",
  "*.{json,yaml}": ["prettier --write"],
};
