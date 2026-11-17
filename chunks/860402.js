var l = n(688954),
    r = n(785389);
n.d(
    e,
    {},
    {
        JI: async function (t, e) {
            let n, i;
            try {
                n = await (0, l.h)(t, "/agent/external-auth/authorize-url", {
                    method: "POST",
                    json: { connection_type: e },
                });
            } catch {
                return { type: "error", error: "unavailable" };
            }
            if (!n.ok) {
                let t = null;
                try {
                    t = (0, r.rG)((await n.json())?.error);
                } catch {}
                return { type: "error", error: (0, r.ls)(n.status, t) };
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
        ho: function (t) {
            return new Date(t.expiresAtMs).toLocaleTimeString(void 0, { hour: "numeric", minute: "2-digit" });
        },
        y_: async function (t) {
            let { regenerate: e = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = await (0, l.h)(t, "/agent/mcp-token", { method: "POST", query: e ? { regenerate: "1" } : void 0 });
            if (!n.ok) throw Error(`mcp token failed (${n.status})`);
            let r = await n.json(),
                i = "number" == typeof r.expires_in ? Date.now() + 1e3 * r.expires_in : Date.parse(r.expires_at);
            return { url: r.url, expiresAtMs: i };
        },
    },
);
