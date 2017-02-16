# tr-client


## Introduction
Used frameworks
 - AngularJs https://angularjs.org
 - Angular Material https://material.angularjs.org

## Installation
Requires the latest NodeJs/NPM to be installed globally
To install dependencies in the project root directory execute
`$ npm i --save`

Also, the tr-server is expected to be run on http://localhost:8081
However, this can be changed in https://github.com/adam-bubela/tr-client/blob/master/app/app.config.js
`_SERVER_BASE_URL = "http://localhost:8081";`

## Run application
From the project root directory execute
`$ npm start`

## Known issues
- missing hotel detail page but that can be fairly easy added as the project already contains structure `establishment-detail`
- I was unable to identify `TrpRating` property in the hotels.json hence the `UserRatingCount` has been used instead.
