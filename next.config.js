module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: ""
          },
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors https://admin.shopify.com https://*.myshopify.com"
          }
        ]
      }
    ];
  }
};
