module.exports = function answered (authProvider) {
  return (answers) => {
    return answers.auth_provider_package === authProvider
  }
}
