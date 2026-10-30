(a.d(n, { PK: () => l, Vm: () => s, Y7: () => o, c9: () => c, gm: () => u, n6: () => h, vX: () => r }),
    a(323874),
    a(14289),
    a(35956));
var e = a(649121),
    i = a(688954);
function r(t, n) {
    return c(t, n, n.name, n.type);
}
async function o(t) {
    let n = await (0, i.h)(t, d());
    if (!n.ok) throw Error(`attachment list failed (${n.status})`);
    return (await n.json()).attachments;
}
async function u(t, n) {
    let a = await (0, i.h)(t, d("from-url"), { method: "POST", json: { url: n } }),
        e = await a.json().catch(() => null);
    if (!a.ok || null == e || !("id" in e))
        throw Error(null != e && "error" in e && "string" == typeof e.error ? e.error : "");
    return e;
}
async function c(t, n, a, e) {
    let r = await (0, i.h)(t, d(), {
        method: "POST",
        query: { name: a },
        headers: { "content-type": "" !== e ? e : "application/octet-stream" },
        body: n,
    });
    if (!r.ok) throw Error(`attachment upload failed (${r.status})`);
    return await r.json();
}
async function s(t, n) {
    let a = await (0, i.h)(t, d(n), { method: "DELETE", keepalive: !0 });
    if (!a.ok) throw Error(`attachment cleanup failed (${a.status})`);
}
async function l(t, n) {
    let { download: a = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { ticket: i, baseUrl: r } = await (0, e.BK)(t),
        o = new URLSearchParams({ ticket: i });
    return (a && o.set("download", "1"), `${r}${d(n)}?${o}`);
}
async function h(t, n) {
    async function a() {
        return fetch(await l(t, n), { method: "HEAD" });
    }
    let i = await a();
    if ((401 === i.status && ((0, e.yn)(t), (i = await a())), 404 === i.status)) return !1;
    if (!i.ok) throw Error(`attachment availability check failed (${i.status})`);
    return !0;
}
function d(t) {
    return null == t ? "/agent/attachments" : `/agent/attachments/${encodeURIComponent(t)}`;
}
