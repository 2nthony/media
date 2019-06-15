module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer', {
        releaseRules: [
          {
            type: 'style',
            release: 'patch'
          }
        ]
      }
    ]
  ]
}