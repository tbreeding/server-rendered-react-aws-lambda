## Search Server Rendered React App

This is a simple react app rendered fron a node server on AWS lambda, using the serverless-framework.

We do not make use of express in this repo, only plain node.

Ensure you have serverless installed globally on your machine https://serverless.com/framework/docs/providers/aws/guide/installation/

Then `cd react-ssr` and run `npm install` followed by `npm start`

App will be running locally on `http://localhost:3012`.

The build script takes all the `src` code and creates a `build` folder which can be deployed using `serverless deploy`
