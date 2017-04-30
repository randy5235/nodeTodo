const config =  require('./config');

module.exports = {
  getDbConnectionString: function() {
    return `mongodb://${config.username}:${config.password}@ds127341.mlab.com:27341/nodetodosample`;
  }
};