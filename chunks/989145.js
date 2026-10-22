(a.d(n, { PK: () => c, Vm: () => s, Y7: () => l, c9: () => u, gm: () => o, n6: () => f, vX: () => i }),
    a(323874),
    a(14289),
    a(35956));
var e = a(649121),
    r = a(688954);
function i(t, n) {
    return u(t, n, n.name, n.type);
}
async function l(t) {
    let n = await (0, r.h)(t, d());
    if (!n.ok) throw Error(`attachment list failed (${n.status})`);
    return (await n.json()).attachments;
}
async function o(t, n) {
    let a = await (0, r.h)(t, d("from-url"), { method: "POST", json: { url: n } }),
        e = await a.json().catch(() => null);
    if (!a.ok || null == e || !("id" in e))
        throw Error(null != e && "error" in e && "string" == typeof e.error ? e.error : "");
    return e;
}
async function u(t, n, a, e) {
    let i = await (0, r.h)(t, d(), {
        method: "POST",
        query: { name: a },
        headers: { "content-type": "" !== e ? e : "application/octet-stream" },
        body: n,
    });
    if (!i.ok) throw Error(`attachment upload failed (${i.status})`);
    return await i.json();
}
async function s(t, n) {
    let a = await (0, r.h)(t, d(n), { method: "DELETE", keepalive: !0 });
    if (!a.ok) throw Error(`attachment cleanup failed (${a.status})`);
}
async function c(t, n) {
    let { download: a = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { ticket: r, baseUrl: i } = await (0, e.BK)(t),
        l = new URLSearchParams({ ticket: r });
    return (a && l.set("download", "1"), `${i}${d(n)}?${l}`);
}
async function f(t, n) {
    async function a() {
        return fetch(await c(t, n), { method: "HEAD" });
    }
    let r = await a();
    if ((401 === r.status && ((0, e.yn)(t), (r = await a())), 404 === r.status)) return !1;
    if (!r.ok) throw Error(`attachment availability check failed (${r.status})`);
    return !0;
}
function d(t) {
    return null == t ? "/agent/attachments" : `/agent/attachments/${encodeURIComponent(t)}`;
}
