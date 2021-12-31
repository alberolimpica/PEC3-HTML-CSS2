module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'background-blue-start': '#17082e',
      'background-blue-end': '#0c1f4c',
      'background-blue-mid': '#1a0933',
      'nav-blue': '#44d9e8',
      'light-blue-text': '#32fbe2',
      'black': '#000000',
      'pink': '#ea39b8'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  "rules": {
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "tailwind",
          "apply",
          "responsive",
          "variants",
          "screen",
          "use"
        ]
      }
    ]
  }
}
