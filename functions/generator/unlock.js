const encoder = new TextEncoder();
async function sign(value, secret) {
  const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(value));
  return btoa(String.fromCharCode(...new Uint8Array(sig))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/g,"");
}
export async function onRequestPost({ request, env }) {
  if (!env.GENERATOR_ACCESS_CODE || !env.GENERATOR_SESSION_SECRET) return new Response("Access is not configured.", { status:503 });
  const form = await request.formData();
  const code = String(form.get("code") || "");
  if (code.length > 256 || code !== env.GENERATOR_ACCESS_CODE) return Response.redirect(new URL("/generator/?error=1", request.url), 303);
  const expires = String(Math.floor(Date.now()/1000) + 8*60*60);
  const signature = await sign(expires, env.GENERATOR_SESSION_SECRET);
  const headers = new Headers({ Location: "/generator/workspace.html", "Set-Cookie": `calx_generator_session=${expires}.${signature}; Path=/generator; Max-Age=28800; HttpOnly; Secure; SameSite=Lax` });
  return new Response(null, { status:303, headers });
}
