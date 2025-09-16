export function middleware(request) {
  const response = new Response(null, {
    headers: {
      "Content-Security-Policy": "frame-ancestors https://admin.shopify.com https://*.myshopify.com",
      "X-Frame-Options": ""
    }
  });
  return response;
}

export const config = {
  matcher: "/:path*",
};
