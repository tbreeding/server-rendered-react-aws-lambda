import * as React from "react";
import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import * as path from 'path';
import * as fs from 'fs';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import env from './env/ServerEnv';
import App from './App';

const map = {
    '.ico': 'image/x-icon',
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.wav': 'audio/wav',
    '.mp3': 'audio/mpeg',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword'
};

const assets = {
  client: {
      css: '/static/browser.css',
      js: '/static/bundle.js',
      env: '/static/_dd/search/env.js'
    }
}

export const renderApp: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent, context: Context) : Promise<APIGatewayProxyResult> => {
    const url = event.path;
    const ext = path.extname(url);

    const staticRouterContext = {};
    const markup = renderToString(
        <StaticRouter context={staticRouterContext} location={url}>
            <App
              env={env}
            />
        </StaticRouter>
    );

    const html = `<!doctype html>
        <html lang="">
          <head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta charset="utf-8" />
            <title>Search-ssr</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
            ${assets.client.css ? `<link rel="stylesheet" href="${assets.client.css}">`
              : ''
            }
            <script src=${assets.client.env} defer></script>
            ${process.env.NODE_ENV === 'production'
              ? `<script src="${assets.client.js}" defer></script>`
              : `<script src="${assets.client.js}" defer crossorigin></script>`
            }
            ${process.env.NODE_ENV === 'production'
              ? `<script src=${assets.client.env} defer></script>`
              : `<script src=${assets.client.env} defer crossorigin></script>`
            }
          </head>
          <body>
            <div id="root">${markup}</div>

          </body>
        </html>`;

    const basePath = './build/public';
    let resource = (url === '/') ? (basePath + '/index.html') : (basePath + url);

    if (fs.existsSync(resource)) {
        return {
            statusCode: 200,
            headers: {
                'Content-Type': map[ext],
            },
            body: fs.readFileSync(resource, { encoding: 'utf8' })
        };
    }

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html',
        },
        body: html,
    };
};
