n.d(t, { b: () => o, c: () => u });
var l = n(712808),
    a = n(395592),
    i = n(248675),
    r = n(375708);
let s = { ok: !1, code: "failed", message: "" };
async function o(e, t) {
    return (await (0, a.x)(e, () => t().catch(() => s))) ?? s;
}
function u(e, t) {
    return o(e, () => (0, l.$D)(e, t.id)).then((e) =>
        e.ok ? null : r.intl.string("unconfirmed" === e.code ? i.default.iqN7YA : i.default.Npmmnp),
    );
}
