module.exports = {
  apps: [
    {
      name: "under-maintenance",
      script: "server.js",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
