var r = n(688954),
    l = n(785389);
n.d(
    t,
    {},
    {
        JI: async function (e, t) {
            let n, i;
            try {
                n = await (0, r.h)(e, "/agent/external-auth/authorize-url", {
                    method: "POST",
                    json: { connection_type: t },
                });
            } catch {
                return { type: "error", error: "unavailable" };
            }
            if (!n.ok) {
                let e = null;
                try {
                    e = (0, l.rG)((await n.json())?.error);
                } catch {}
                return { type: "error", error: (0, l.ls)(n.status, e) };
            }
            try {
                i = (await n.json())?.url;
            } catch {
                return { type: "error", error: "unavailable" };
            }
            return "string" == typeof i && i.startsWith("https://")
                ? { type: "url", url: i }
                : { type: "error", error: "unavailable" };
        },
        ho: function (e) {
            return new Date(e.expiresAtMs).toLocaleTimeString(void 0, { hour: "numeric", minute: "2-digit" });
        },
        y_: async function (e) {
            let { regenerate: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = await (0, r.h)(e, "/agent/mcp-token", { method: "POST", query: t ? { regenerate: "1" } : void 0 });
            if (!n.ok) throw Error(`mcp token failed (${n.status})`);
            let l = await n.json(),
                i = "number" == typeof l.expires_in ? Date.now() + 1e3 * l.expires_in : Date.parse(l.expires_at);
            return { url: l.url, expiresAtMs: i };
        },
    },
);
