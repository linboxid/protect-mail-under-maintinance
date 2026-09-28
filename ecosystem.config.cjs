module.exports = {
  apps: [
    {
      name: "protect-mail---under-maintenance",
      namespace: "protect-mail",
      script: "server.js",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
