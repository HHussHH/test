module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: "> 0.5%, not IE 11",
        },
        useBuiltIns: "usage",
        corejs: "3.16.0",
      },
    ],
  ];

  return {
    presets,
  };
};
