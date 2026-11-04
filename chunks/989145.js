(n(323874), n(14289), n(35956));
var e = n(649121),
    r = n(688954);
async function i(t, a, n, e) {
    let i = await (0, r.h)(t, u(), {
        method: "POST",
        query: { name: n },
        headers: { "content-type": "" !== e ? e : "application/octet-stream" },
        body: a,
    });
    if (!i.ok) throw Error(`attachment upload failed (${i.status})`);
    return await i.json();
}
async function o(t, a) {
    let { download: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { ticket: r, baseUrl: i } = await (0, e.BK)(t),
        o = new URLSearchParams({ ticket: r });
    return (n && o.set("download", "1"), `${i}${u(a)}?${o}`);
}
function u(t) {
    return null == t ? "/agent/attachments" : `/agent/attachments/${encodeURIComponent(t)}`;
}
n.d(
    a,
    {},
    {
        PK: o,
        Vm: async function (t, a) {
            let n = await (0, r.h)(t, u(a), { method: "DELETE", keepalive: !0 });
            if (!n.ok) throw Error(`attachment cleanup failed (${n.status})`);
        },
        Y7: async function (t) {
            let a = await (0, r.h)(t, u());
            if (!a.ok) throw Error(`attachment list failed (${a.status})`);
            return (await a.json()).attachments;
        },
        c9: i,
        gm: async function (t, a) {
            let n = await (0, r.h)(t, u("from-url"), { method: "POST", json: { url: a } }),
                e = await n.json().catch(() => null);
            if (!n.ok || null == e || !("id" in e))
                throw Error(null != e && "error" in e && "string" == typeof e.error ? e.error : "");
            return e;
        },
        n6: async function (t, a) {
            async function n() {
                return fetch(await o(t, a), { method: "HEAD" });
            }
            let r = await n();
            if ((401 === r.status && ((0, e.yn)(t), (r = await n())), 404 === r.status)) return !1;
            if (!r.ok) throw Error(`attachment availability check failed (${r.status})`);
            return !0;
        },
        vX: function (t, a) {
            return i(t, a, a.name, a.type);
        },
    },
);
