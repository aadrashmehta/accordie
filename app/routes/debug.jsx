import { json } from "@remix-run/node";

export async function loader({ request }) {
  const url = new URL(request.url);
  
  return json({
    currentUrl: request.url,
    host: url.host,
    protocol: url.protocol,
    envAppUrl: process.env.SHOPIFY_APP_URL,
    envApiKey: process.env.SHOPIFY_API_KEY ? "Set" : "Missing",
    envSecret: process.env.SHOPIFY_API_SECRET ? "Set" : "Missing",
    timestamp: new Date().toISOString(),
  });
}

export default function Debug() {
  return <div>Check the network tab for JSON response</div>;
}