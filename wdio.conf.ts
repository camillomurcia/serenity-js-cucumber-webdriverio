import 'expect-webdriverio';

import { ConsoleReporter } from '@serenity-js/console-reporter';
import { ArtifactArchiver } from '@serenity-js/core';
import { SerenityBDDReporter } from '@serenity-js/serenity-bdd';
import { Photographer, TakePhotosOfFailures, WebdriverIOConfig } from '@serenity-js/webdriverio';

import { Actors } from './features/support';

export const config: WebdriverIOConfig = {
    logLevel: 'warn',
    framework: '@serenity-js/webdriverio',
    serenity: {
        actors: new Actors(),
        runner: 'cucumber',
        crew: [
            ArtifactArchiver.storingArtifactsAt(process.cwd(), 'target/site/serenity'),
            ConsoleReporter.forDarkTerminals(),
            new SerenityBDDReporter(),
            Photographer.whoWill(TakePhotosOfFailures)
        ]
    },
    specs: [
        './features/**/*.feature'
    ],
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: [
            './features/support/*.ts',
            './features/step_definitions/*.ts'
        ],
        // <string[]> (type[:path]) specify native Cucumber.js output format, if needed. Optionally supply PATH to redirect formatter output (repeatable)
        format: [ ],
        // <string> (name) specify the profile to use
        profile: '',
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string[] | string> (expression) only execute the features or scenarios with tags matching the expression
        tags: [],
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Fail if there are any undefined or pending steps.
    },
    capabilities: [{
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                // '--headless',
                '--disable-infobars',
                '--no-sandbox',
                '--disable-gpu',
                '--window-size=1024,768',
            ]  // run in headless mode on the CI server,
        }
    }]
};
