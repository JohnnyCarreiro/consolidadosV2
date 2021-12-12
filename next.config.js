const withVideos = require('next-videos')
const withImages = require('next-images')
const path = require('path');

module.exports = withVideos(), withImages({
  esModule: true,
  inlineImageLimit: false,
  webpack(config, options) {
    return config
  }
})
