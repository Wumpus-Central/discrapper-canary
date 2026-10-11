n.d(t, { b: () => o, c: () => u });
var l = n(395592),
    r = n(12177),
    a = n(248675),
    i = n(660183);
let s = { ok: !1, code: "failed", message: "" };
async function o(e, t) {
    return (await (0, l.x)(e, () => t().catch(() => s))) ?? s;
}
function u(e, t) {
    return o(e, () => (0, r.$D)(e, t.id)).then((e) =>
        e.ok ? null : i.intl.string("unconfirmed" === e.code ? a.default.iqN7YA : a.default.Npmmnp),
    );
}
