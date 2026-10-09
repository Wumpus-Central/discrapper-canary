n.d(t, { b: () => u, c: () => o });
var l = n(712808),
    r = n(395592),
    a = n(248675),
    i = n(660183);
let s = { ok: !1, code: "failed", message: "" };
async function u(e, t) {
    return (await (0, r.x)(e, () => t().catch(() => s))) ?? s;
}
function o(e, t) {
    return u(e, () => (0, l.$D)(e, t.id)).then((e) =>
        e.ok ? null : i.intl.string("unconfirmed" === e.code ? a.default.iqN7YA : a.default.Npmmnp),
    );
}
