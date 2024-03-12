const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/CucumberReports',
	reportPath: 'cypress/CucumberReports/cucumber-htmlreport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '100'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'TIQTOQ Project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Mar 12th 2024, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'Mar 12th 2024, 02:32 PM EST'}
        ]
    }
});