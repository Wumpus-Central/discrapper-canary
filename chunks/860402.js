n.d(t, { JI: () => s, ho: () => i, y_: () => r });
var l = n(688954),
    a = n(785389);
function i(e) {
    return new Date(e.expiresAtMs).toLocaleTimeString(void 0, { hour: "numeric", minute: "2-digit" });
}
async function r(e) {
    let { regenerate: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = await (0, l.h)(e, "/agent/mcp-token", { method: "POST", query: t ? { regenerate: "1" } : void 0 });
    if (!n.ok) throw Error(`mcp token failed (${n.status})`);
    let a = await n.json(),
        i = "number" == typeof a.expires_in ? Date.now() + 1e3 * a.expires_in : Date.parse(a.expires_at);
    return { url: a.url, expiresAtMs: i };
}
async function s(e, t) {
    let n, i;
    try {
        n = await (0, l.h)(e, "/agent/external-auth/authorize-url", { method: "POST", json: { connection_type: t } });
    } catch {
        return { type: "error", error: "unavailable" };
    }
    if (!n.ok) {
        let e = null;
        try {
            e = (0, a.rG)((await n.json())?.error);
        } catch {}
        return { type: "error", error: (0, a.ls)(n.status, e) };
    }
    try {
        i = (await n.json())?.url;
    } catch {
        return { type: "error", error: "unavailable" };
    }
    return "string" == typeof i && i.startsWith("https://")
        ? { type: "url", url: i }
        : { type: "error", error: "unavailable" };
}
