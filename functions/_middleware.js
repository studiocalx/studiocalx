const encoder = new TextEncoder();
const COOKIE = "calx_generator_session";
async function sign(value, secret) {
  const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(value));
  return btoa(String.fromCharCode(...new Uint8Array(sig))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/g,"");
}
function cookieValue(header) {
  const item = (header || "").split(";").map(v=>v.trim()).find(v=>v.startsWith(COOKIE+"="));
  return item ? decodeURIComponent(item.slice(COOKIE.length+1)) : "";
}
export async function onRequest({ request, env, next }) {
  const url = new URL(request.url);
  if (!url.pathname.startsWith("/generator/") && url.pathname !== "/generator") return next();
  if (url.pathname === "/generator/" || url.pathname === "/generator/index.html" || url.pathname === "/generator/unlock") return next();
  if (!env.GENERATOR_SESSION_SECRET) return new Response("Generator access is not configured.", { status: 503, headers: { "content-type":"text/plain; charset=utf-8", "cache-control":"no-store" } });
  const token = cookieValue(request.headers.get("Cookie"));
  const [expires, signature] = token.split(".");
  const exp = Number(expires);
  if (!expires || !signature || !Number.isFinite(exp) || exp < Date.now()/1000) return Response.redirect(new URL("/generator/", url), 302);
  const expected = await sign(expires, env.GENERATOR_SESSION_SECRET);
  if (signature !== expected) return Response.redirect(new URL("/generator/", url), 302);
  return next();
}
