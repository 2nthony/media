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
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    '@semantic-release/npm'
  ]
}