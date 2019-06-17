module.exports = {
  plugins: [
    ['@semantic-release/commit-analyzer', {
      preset: 'angular',
      releaseRules: [
        {
          type: 'update',
          release: 'patch'
        }
      ]
    }],
    ['@semantic-release/release-notes-generator', {
      preset: 'angular',
      noteKeywords: [
        'update'
      ]
    }],
    '@semantic-release/github',
    '@semantic-release/npm'
  ]
}
