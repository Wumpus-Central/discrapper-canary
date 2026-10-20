(n.d(t, { PK: () => d, Vm: () => o, Y7: () => i, c9: () => u, gm: () => s, n6: () => c, vX: () => r }),
    n(323874),
    n(14289),
    n(35956));
var l = n(649121),
    a = n(688954);
function r(e, t) {
    return u(e, t, t.name, t.type);
}
async function i(e) {
    let t = await (0, a.h)(e, m());
    if (!t.ok) throw Error(`attachment list failed (${t.status})`);
    return (await t.json()).attachments;
}
async function s(e, t) {
    let n = await (0, a.h)(e, m("from-url"), { method: "POST", json: { url: t } }),
        l = await n.json().catch(() => null);
    if (!n.ok || null == l || !("id" in l))
        throw Error(null != l && "error" in l && "string" == typeof l.error ? l.error : "");
    return l;
}
async function u(e, t, n, l) {
    let r = await (0, a.h)(e, m(), {
        method: "POST",
        query: { name: n },
        headers: { "content-type": "" !== l ? l : "application/octet-stream" },
        body: t,
    });
    if (!r.ok) throw Error(`attachment upload failed (${r.status})`);
    return await r.json();
}
async function o(e, t) {
    let n = await (0, a.h)(e, m(t), { method: "DELETE", keepalive: !0 });
    if (!n.ok) throw Error(`attachment cleanup failed (${n.status})`);
}
async function d(e, t) {
    let { download: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { ticket: a, baseUrl: r } = await (0, l.BK)(e),
        i = new URLSearchParams({ ticket: a });
    return (n && i.set("download", "1"), `${r}${m(t)}?${i}`);
}
async function c(e, t) {
    async function n() {
        return fetch(await d(e, t), { method: "HEAD" });
    }
    let a = await n();
    if ((401 === a.status && ((0, l.yn)(e), (a = await n())), 404 === a.status)) return !1;
    if (!a.ok) throw Error(`attachment availability check failed (${a.status})`);
    return !0;
}
function m(e) {
    return null == e ? "/agent/attachments" : `/agent/attachments/${encodeURIComponent(e)}`;
}
