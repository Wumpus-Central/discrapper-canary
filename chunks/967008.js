l.d(t, { b: () => u, c: () => o });
var n = l(712808),
    a = l(395592),
    i = l(248675),
    r = l(375708);
let s = { ok: !1, code: "failed", message: "" };
async function u(e, t) {
    return (await (0, a.x)(e, () => t().catch(() => s))) ?? s;
}
function o(e, t) {
    return u(e, () => (0, n.$D)(e, t.id)).then((e) =>
        e.ok ? null : r.intl.string("unconfirmed" === e.code ? i.default.iqN7YA : i.default.Npmmnp),
    );
}
