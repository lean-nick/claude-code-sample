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

    const table = new sst.aws.Dynamo("SingleTable", {
      fields: {
        input: "string",
        embedding: "string",
      },
      primaryIndex: { hashKey: "input", rangeKey: "embedding" }
    });

    const server = new sst.aws.Function("Server", {
      link: [vector, table],
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