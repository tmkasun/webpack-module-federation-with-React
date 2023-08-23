# Microfrontend Architecture Demo using Webpack Module Federation

This repository contains a demonstration application that showcases the implementation of Microfrontend architecture using the Webpack Module Federation feature. The application is built using React and demonstrates how different parts of a web application can be developed and deployed independently while seamlessly integrating with each other.

# Features
- Integration of multiple independent frontend modules into a single application.
- Seamless communication between microfrontends.
- Lazy loading of microfrontends for optimized performance.
- Shared components and resources across microfrontends.
- Demonstrates the power of Webpack Module Federation in building microfrontend applications.

# Architecture Overview

The demo application consists of a main application and a microfrontend module.

- [![Netlify Status](https://api.netlify.com/api/v1/badges/4532a9ab-c87d-4e54-83e9-622e5812a488/deploy-status)](https://knnect-mf-app1.netlify.app) (Primary)
  - The entry point of the application that integrates the microfrontends and manages their communication.
- [![Netlify Status](https://api.netlify.com/api/v1/badges/352595ec-577c-4020-8b7a-ab910f9011de/deploy-status)](https://knnect-mf-app2.netlify.app) (Secondary)
  - An independent module showcasing a data table. It is loaded into the main application on-demand.

# Usage of Webpack Module Federation
Webpack Module Federation is utilized to enable the integration of microfrontends into the main application. It allows each microfrontend to expose selected components and consume components from other microfrontends, all while keeping their code and state separate.

The `webpack.config.js` files in the main application and each microfrontend module contain the federation configuration, enabling seamless module sharing.

Know issues

- https://github.com/webpack/webpack-dev-server/issues/2692
  -  https://github.com/styled-components/styled-components/issues/3302
- https://github.com/webpack/webpack/issues/11805#issuecomment-830211768
- https://github.com/webpack/webpack/issues/13287
  
# Guides

- https://module-federation.github.io/blog/get-started
- https://medium.com/swlh/webpack-5-module-federation-a-game-changer-to-javascript-architecture-bcdd30e02669
- https://webpack.js.org/concepts/module-federation/#modulefederationplugin-high-level
