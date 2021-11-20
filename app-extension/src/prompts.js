const firebasePrompts = require('./prompts/firebase')

module.exports = function () {
  return [
    {
      name: 'auth_provider_package',
      type: 'list',
      message: 'Select an auth provider:',
      choices: [
        {
          name: 'Laravel Sanctum',
          value: 'sanctum-composables'
        },
        {
          name: 'Firebase',
          value: 'firebase-composables'
        }
      ]
    },
    ...firebasePrompts
    // What would you like to scaffold
  ]
}
