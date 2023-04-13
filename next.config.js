const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withVanillaExtract({
  ...nextConfig,
  // add any additional configuration options you need here
});
