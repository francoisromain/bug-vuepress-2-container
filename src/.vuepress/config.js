module.exports = {
  dest: "docs",
  plugins: [
    [
      "container",
      {
        type: "full",
        before: (info) =>
          info
            ? `<div class="img-full img-full-${info}">`
            : '<div class="img-full">',
        after: "</div>",
      },
    ],
  ],
};
