/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "react-router-7-demo",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const vector = new sst.aws.Vector("VectorDB", {
      dimension: 1536
    });

    const server = new sst.aws.Function("Server", {
      link: [vector],
      url: true,
      handler: "./app/server/index.handler"
    })

    new sst.aws.React('Web', {
      link: [server],
      dev: {
        command: 'react-router dev'
      }
    })
  },
});