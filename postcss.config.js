module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  rules: [
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: "file-loader",
          loader: "url-loader",
          options: {
            limit: 8192,
          },
        },
      ],
    },
  ],
};
