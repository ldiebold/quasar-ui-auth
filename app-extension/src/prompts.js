/**
 * Quasar App Extension prompts script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/prompts-api
 *
 * Inquirer prompts
 * (answers are available as "api.prompts" in the other scripts)
 * https://www.npmjs.com/package/inquirer#question
 *
 * Example:

  return [
    {
      name: 'name',
      type: 'string',
      required: true,
      message: 'Quasar CLI Extension name (without prefix)',
    },
    {
      name: 'preset',
      type: 'checkbox',
      message: 'Check the features needed for your project:',
      choices: [
        {
          name: 'Install script',
          value: 'install'
        },
        {
          name: 'Prompts script',
          value: 'prompts'
        },
        {
          name: 'Uninstall script',
          value: 'uninstall'
        }
      ]
    }
  ]

 */

module.exports = function () {
  return [
    {
      name: 'default_auth_provider',
      type: 'list',
      message: 'Select an auth provider:',
      choices: [
        {
          name: 'Laravel Sanctum',
          value: 'sanctum'
        },
        {
          name: 'Firebase',
          value: 'firebase'
        }
      ]
    },
    {
      when (answers) {
        return answers.default_auth_provider === 'firebase'
      },
      type: 'editor',
      name: 'firebase_config',
      message: 'Paste your firebase credentials'
    }
    // What would you like to scaffold
  ]
}