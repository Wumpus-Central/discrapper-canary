(n.d(t, { PK: () => o, Vm: () => u, c9: () => s, gm: () => i, n6: () => d, vX: () => r }),
    n(323874),
    n(14289),
    n(35956));
var l = n(382541),
    a = n(649121);
function r(e, t) {
    return s(e, t, t.name, t.type);
}
async function i(e, t) {
    let { ticket: n, baseUrl: a } = await (0, l.d)(e),
        r = await fetch(`${c(a, "from-url")}?${new URLSearchParams({ ticket: n })}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ url: t }),
        }),
        i = await r.json().catch(() => null);
    if (!r.ok || null == i || !("id" in i))
        throw Error(null != i && "error" in i && "string" == typeof i.error ? i.error : "");
    return i;
}
async function s(e, t, n, a) {
    let { ticket: r, baseUrl: i } = await (0, l.d)(e),
        s = new URLSearchParams({ ticket: r, name: n }),
        u = await fetch(`${c(i)}?${s}`, {
            method: "POST",
            headers: { "content-type": "" !== a ? a : "application/octet-stream" },
            body: t,
        });
    if (!u.ok) throw Error(`attachment upload failed (${u.status})`);
    return await u.json();
}
async function u(e, t) {
    let { ticket: n, baseUrl: a } = await (0, l.d)(e),
        r = new URLSearchParams({ ticket: n }),
        i = await fetch(`${c(a, t)}?${r}`, { method: "DELETE", keepalive: !0 });
    if (!i.ok) throw Error(`attachment cleanup failed (${i.status})`);
}
async function o(e, t) {
    let { download: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { ticket: l, baseUrl: r } = await (0, a.BK)(e),
        i = new URLSearchParams({ ticket: l });
    return (n && i.set("download", "1"), `${c(r, t)}?${i}`);
}
async function d(e, t) {
    async function n() {
        return fetch(await o(e, t), { method: "HEAD" });
    }
    let l = await n();
    if ((401 === l.status && ((0, a.yn)(e), (l = await n())), 404 === l.status)) return !1;
    if (!l.ok) throw Error(`attachment availability check failed (${l.status})`);
    return !0;
}
function c(e, t) {
    return null == t ? `${e}/agent/attachments` : `${e}/agent/attachments/${encodeURIComponent(t)}`;
}
