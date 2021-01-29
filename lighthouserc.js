module.exports = {
  ci: {
    collect: {
      staticDistDir: '/',
    },
    upload: {
      target: 'temporary-public-storage',
      url: ['http://localhost:8080/index.html']
    },
  },
};
