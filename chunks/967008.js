n.d(t, { b: () => u, c: () => o });
var l = n(395592),
    r = n(12177),
    a = n(87501),
    i = n(105292);
let s = { ok: !1, code: "failed", message: "" };
async function u(e, t) {
    return (await (0, l.x)(e, () => t().catch(() => s))) ?? s;
}
function o(e, t) {
    return u(e, () => (0, r.$D)(e, t.id)).then((e) =>
        e.ok ? null : i.intl.string("unconfirmed" === e.code ? a.default.iqN7YA : a.default.Npmmnp),
    );
}
