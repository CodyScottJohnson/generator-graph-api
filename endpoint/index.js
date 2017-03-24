'use strict';

var generators = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var _ = require('lodash');

module.exports = generators.extend({
    constructor: function() {
        generators.apply(this, arguments);
        this.endpoint="toast";
        //this.argument('endpoint', {type:String, required: true});
        //this.endpoint = _.camelCase(this.endpoint)
        //console.log(this.endpoint);
    },
    initializing: function() {
        console.log('initializing');
    },
    prompting: function() {

        var prompt = [{
            type: 'input',
            name: 'endpointName',
            message: 'Endpoint Name:',
        }, {
            type: 'list',
            name: 'modelType',
            message: 'Select Model Type:',
            choices: [{
                    name: 'SQL',
                    value: 'sql',
                    checked: true
                },
                {
                    name: 'GraphQl',
                    value: 'graph',
                    checked: false
                }
            ]
        }];
        return this.prompt(prompt).then(function(answers){

          this.endpointName = answers.endpointName;
          this.modelType = answers.modelType;
        }.bind(this));
    },
    configuring: function() {
    },
    default: function() {
        console.log('default');
    },
    writing: function() {
      if(this.modelType === 'sql'){
        this.fs.copyTpl(
            this.templatePath('_'+this.modelType+'_endpoint.js'),
            this.destinationPath('api/server/models/sql/' + this.endpointName + '.js'), {
                endpointName: this.endpointName
            }
        )
      }
      if(this.modelType === 'graph'){
        this.fs.copyTpl(
            this.templatePath('graph/_graph_model.js'),
            this.destinationPath('api/server/models/graph/models/' + this.endpointName + '/schema.js'), {
                endpointName: _.camelCase(this.endpointName)
            }
        );
        this.fs.copyTpl(
            this.templatePath('graph/_graph_query.js'),
            this.destinationPath('api/server/models/graph/models/' + this.endpointName + '/query.js'), {
                endpointName: _.camelCase(this.endpointName)
            }
        );
        this.fs.copyTpl(
            this.templatePath('graph/_graph_mutation.js'),
            this.destinationPath('api/server/models/graph/models/' + this.endpointName + '/mutation.js'), {
                endpointName: this.endpointName,
                sampleMutation: _.capitalize(_.camelCase(this.endpointName))
            }
        );
      }
    },
    conflicts: function() {
        console.log('conflicts');
    },
    install: function() {
        console.log('install');
    },
    end: function() {
        console.log('end');
    }

})
