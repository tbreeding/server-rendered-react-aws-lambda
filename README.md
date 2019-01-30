## Search Server Rendered React App

Starter code for react app rendered fron a node server on AWS lambda, using the serverless-framework.

The blog article for this code can be found here https://tinyurl.com/yb5grk7b

We do not make use of express in this repo, only plain node.

Ensure you have serverless installed globally on your machine https://serverless.com/framework/docs/providers/aws/guide/installation/

Then `cd react-ssr` and run `npm install` followed by `npm start`

App will be running locally on `http://localhost:3012`.

The lambda function serving the application can be found in `/react-ssr/src/index.tsx`

The build script takes all the `src` code and creates a `build` folder which can be deployed using `serverless deploy`
