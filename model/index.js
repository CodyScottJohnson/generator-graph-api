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
          console.log(answers.endpointName);
          this.endpointName = answers.endpointName;
          this.modelType = answers.modelName;
        }.bind(this));
    },
    configuring: function() {
    },
    default: function() {
        console.log('default');
    },
    writing: function() {
        this.fs.copyTpl(
            this.templatePath('_endpoint.js'),
            this.destinationPath('api/server/models/sql/' + this.endpointName + '.js'), {
                endpointName: this.endpointName
            }
        )
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
