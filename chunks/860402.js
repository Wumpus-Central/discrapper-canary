n.d(t, { JI: () => s, ho: () => a, y_: () => i });
var l = n(688954),
    r = n(785389);
function a(e) {
    return new Date(e.expiresAtMs).toLocaleTimeString(void 0, { hour: "numeric", minute: "2-digit" });
}
async function i(e) {
    let { regenerate: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = await (0, l.h)(e, "/agent/mcp-token", { method: "POST", query: t ? { regenerate: "1" } : void 0 });
    if (!n.ok) throw Error(`mcp token failed (${n.status})`);
    let r = await n.json(),
        a = "number" == typeof r.expires_in ? Date.now() + 1e3 * r.expires_in : Date.parse(r.expires_at);
    return { url: r.url, expiresAtMs: a };
}
async function s(e, t) {
    let n, a;
    try {
        n = await (0, l.h)(e, "/agent/external-auth/authorize-url", { method: "POST", json: { connection_type: t } });
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
