(n.d(t, { JI: () => s, ho: () => a, y_: () => i }), n(323874), n(14289), n(35956));
var l = n(382541),
    r = n(785389);
function a(e) {
    return new Date(e.expiresAtMs).toLocaleTimeString(void 0, { hour: "numeric", minute: "2-digit" });
}
async function i(e) {
    let { regenerate: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { ticket: n, baseUrl: r } = await (0, l.d)(e),
        a = new URLSearchParams({ ticket: n });
    t && a.set("regenerate", "1");
    let i = await fetch(`${r}/agent/mcp-token?${a}`, { method: "POST" });
    if (!i.ok) throw Error(`mcp token failed (${i.status})`);
    let s = await i.json(),
        o = "number" == typeof s.expires_in ? Date.now() + 1e3 * s.expires_in : Date.parse(s.expires_at);
    return { url: s.url, expiresAtMs: o };
}
async function s(e, t) {
    let n, a;
    try {
        let { ticket: r, baseUrl: a } = await (0, l.d)(e);
        n = await fetch(`${a}/agent/external-auth/authorize-url?${new URLSearchParams({ ticket: r })}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ connection_type: t }),
        });
    } catch {
        return { type: "error", error: "unavailable" };
    }
    if (!n.ok) {
        let e = null;
        try {
            e = (0, r.rG)((await n.json())?.error);
        } catch {}
        return { type: "error", error: (0, r.ls)(n.status, e) };
    }
    try {
        a = (await n.json())?.url;
    } catch {
        return { type: "error", error: "unavailable" };
    }
    return "string" == typeof a && a.startsWith("https://")
        ? { type: "url", url: a }
        : { type: "error", error: "unavailable" };
}
