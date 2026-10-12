(n.d(t, { PK: () => d, Vm: () => o, c9: () => s, gm: () => r, n6: () => u, vX: () => i }),
    n(323874),
    n(14289),
    n(35956));
var l = n(382541),
    a = n(649121);
function i(e, t) {
    return s(e, t, t.name, t.type);
}
async function r(e, t) {
    let { ticket: n, baseUrl: a } = await (0, l.d)(e),
        i = await fetch(`${c(a, "from-url")}?${new URLSearchParams({ ticket: n })}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ url: t }),
        }),
        r = await i.json().catch(() => null);
    if (!i.ok || null == r || !("id" in r))
        throw Error(null != r && "error" in r && "string" == typeof r.error ? r.error : "");
    return r;
}
async function s(e, t, n, a) {
    let { ticket: i, baseUrl: r } = await (0, l.d)(e),
        s = new URLSearchParams({ ticket: i, name: n }),
        o = await fetch(`${c(r)}?${s}`, {
            method: "POST",
            headers: { "content-type": "" !== a ? a : "application/octet-stream" },
            body: t,
        });
    if (!o.ok) throw Error(`attachment upload failed (${o.status})`);
    return await o.json();
}
async function o(e, t) {
    let { ticket: n, baseUrl: a } = await (0, l.d)(e),
        i = new URLSearchParams({ ticket: n }),
        r = await fetch(`${c(a, t)}?${i}`, { method: "DELETE", keepalive: !0 });
    if (!r.ok) throw Error(`attachment cleanup failed (${r.status})`);
}
async function d(e, t) {
    let { download: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { ticket: l, baseUrl: i } = await (0, a.BK)(e),
        r = new URLSearchParams({ ticket: l });
    return (n && r.set("download", "1"), `${c(i, t)}?${r}`);
}
async function u(e, t) {
    async function n() {
        return fetch(await d(e, t), { method: "HEAD" });
    }
    let l = await n();
    if ((401 === l.status && ((0, a.yn)(e), (l = await n())), 404 === l.status)) return !1;
    if (!l.ok) throw Error(`attachment availability check failed (${l.status})`);
    return !0;
}
function c(e, t) {
    return null == t ? `${e}/agent/attachments` : `${e}/agent/attachments/${encodeURIComponent(t)}`;
}
