'use strict';

var generators = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var _ = require('lodash');
module.exports = generators.extend({
    constructor: function() {
        generators.apply(this, arguments);
        //this.argument('appname', {type:String, required: true});
        //this.appname = _.kebabCase(this.appname)
        //this.log('appname: '+ this.appname);
    },
    initializing: function(){
      console.log('initializing');
    },
    prompting: function(){
      this.log(yosay('Welcome to our ' + chalk.yellow('graphql') +' api backend generator'));

          var prompt = [{
              type: 'input',
              name: 'apiName',
              message: chalk.green('Whats the Name of Your API:'),
          }];
          return this.prompt(prompt).then(function(answers){
            console.log(answers);
            this.apiName = answers.apiName

          }.bind(this));
    },
    configuring: function(){
      console.log('configuring');
    },
    default: function(){
      console.log('default');
    },
    writing: {
      git: function(){
        console.log('conflicts');
      },
      packageJSON: function(){
        var packageJson = {
          name: this.apiName,
          license: "MIT",
          version: "0.0.1",
          dependencies: {},
          devDependencies: {}
        };
        packageJson.dependencies['koa'] = "^2.0.1";
        this.fs.writeJSON('api/package.json', packageJson);
      },
      env: function(){
        console.log('conflicts');
      },
      docker: function(){
        console.log('conflicts');
      },
      appStaticFiles: function(){
        this.fs.copy(this.templatePath("api/server/models/_index.js"),this.destinationPath("api/server/models/sql/index.js"));
        this.fs.copy(this.templatePath("_docker-compose.yml"),this.destinationPath("docker-compose.yml"));
        this.fs.copyTpl(
            this.templatePath('_README.md'),
            this.destinationPath('README.md'), {
                apiName: this.apiName
            }
        )
      },
      appStaticFolders: function(){
        this.fs.copy(this.templatePath("api/server/endpoints"),this.destinationPath("api/server/endpoints"));
      }
    },
    conflicts: function(){
      console.log('conflicts');
    },
    install: function(){
      console.log('install');
    },
    end: function(){
      console.log('end');
    }

})
