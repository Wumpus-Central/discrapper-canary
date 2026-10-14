(n.d(t, { PK: () => d, Vm: () => o, c9: () => s, gm: () => r, n6: () => u, vX: () => i }),
    n(323874),
    n(14289),
    n(35956));
var l = n(649121),
    a = n(688954);
function i(e, t) {
    return s(e, t, t.name, t.type);
}
async function r(e, t) {
    let n = await (0, a.h)(e, c("from-url"), { method: "POST", json: { url: t } }),
        l = await n.json().catch(() => null);
    if (!n.ok || null == l || !("id" in l))
        throw Error(null != l && "error" in l && "string" == typeof l.error ? l.error : "");
    return l;
}
async function s(e, t, n, l) {
    let i = await (0, a.h)(e, c(), {
        method: "POST",
        query: { name: n },
        headers: { "content-type": "" !== l ? l : "application/octet-stream" },
        body: t,
    });
    if (!i.ok) throw Error(`attachment upload failed (${i.status})`);
    return await i.json();
}
async function o(e, t) {
    let n = await (0, a.h)(e, c(t), { method: "DELETE", keepalive: !0 });
    if (!n.ok) throw Error(`attachment cleanup failed (${n.status})`);
}
async function d(e, t) {
    let { download: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { ticket: a, baseUrl: i } = await (0, l.BK)(e),
        r = new URLSearchParams({ ticket: a });
    return (n && r.set("download", "1"), `${i}${c(t)}?${r}`);
}
async function u(e, t) {
    async function n() {
        return fetch(await d(e, t), { method: "HEAD" });
    }
    let a = await n();
    if ((401 === a.status && ((0, l.yn)(e), (a = await n())), 404 === a.status)) return !1;
    if (!a.ok) throw Error(`attachment availability check failed (${a.status})`);
    return !0;
}
function c(e) {
    return null == e ? "/agent/attachments" : `/agent/attachments/${encodeURIComponent(e)}`;
}
