var n = r(688954),
    a = r(785389);
r.d(
    t,
    {},
    {
        JI: async function (e, t) {
            let r, o;
            try {
                r = await (0, n.h)(e, "/agent/external-auth/authorize-url", {
                    method: "POST",
                    json: { connection_type: t },
                });
            } catch {
                return { type: "error", error: "unavailable" };
            }
            if (!r.ok) {
                let e = null;
                try {
                    e = (0, a.rG)((await r.json())?.error);
                } catch {}
                return { type: "error", error: (0, a.ls)(r.status, e) };
            }
            try {
                o = (await r.json())?.url;
            } catch {
                return { type: "error", error: "unavailable" };
            }
            return "string" == typeof o && o.startsWith("https://")
                ? { type: "url", url: o }
                : { type: "error", error: "unavailable" };
        },
        ho: function (e) {
            return new Date(e.expiresAtMs).toLocaleTimeString(void 0, { hour: "numeric", minute: "2-digit" });
        },
        y_: async function (e) {
            let { regenerate: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = await (0, n.h)(e, "/agent/mcp-token", { method: "POST", query: t ? { regenerate: "1" } : void 0 });
            if (!r.ok) throw Error(`mcp token failed (${r.status})`);
            let a = await r.json(),
                o = "number" == typeof a.expires_in ? Date.now() + 1e3 * a.expires_in : Date.parse(a.expires_at);
            return { url: a.url, expiresAtMs: o };
        },
    },
);
