(e.d(a, { PK: () => c, Vm: () => s, Y7: () => l, c9: () => u, gm: () => o, n6: () => h, vX: () => r }),
    e(323874),
    e(14289),
    e(35956));
var n = e(649121),
    i = e(688954);
function r(t, a) {
    return u(t, a, a.name, a.type);
}
async function l(t) {
    let a = await (0, i.h)(t, d());
    if (!a.ok) throw Error(`attachment list failed (${a.status})`);
    return (await a.json()).attachments;
}
async function o(t, a) {
    let e = await (0, i.h)(t, d("from-url"), { method: "POST", json: { url: a } }),
        n = await e.json().catch(() => null);
    if (!e.ok || null == n || !("id" in n))
        throw Error(null != n && "error" in n && "string" == typeof n.error ? n.error : "");
    return n;
}
async function u(t, a, e, n) {
    let r = await (0, i.h)(t, d(), {
        method: "POST",
        query: { name: e },
        headers: { "content-type": "" !== n ? n : "application/octet-stream" },
        body: a,
    });
    if (!r.ok) throw Error(`attachment upload failed (${r.status})`);
    return await r.json();
}
async function s(t, a) {
    let e = await (0, i.h)(t, d(a), { method: "DELETE", keepalive: !0 });
    if (!e.ok) throw Error(`attachment cleanup failed (${e.status})`);
}
async function c(t, a) {
    let { download: e = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { ticket: i, baseUrl: r } = await (0, n.BK)(t),
        l = new URLSearchParams({ ticket: i });
    return (e && l.set("download", "1"), `${r}${d(a)}?${l}`);
}
async function h(t, a) {
    async function e() {
        return fetch(await c(t, a), { method: "HEAD" });
    }
    let i = await e();
    if ((401 === i.status && ((0, n.yn)(t), (i = await e())), 404 === i.status)) return !1;
    if (!i.ok) throw Error(`attachment availability check failed (${i.status})`);
    return !0;
}
function d(t) {
    return null == t ? "/agent/attachments" : `/agent/attachments/${encodeURIComponent(t)}`;
}
