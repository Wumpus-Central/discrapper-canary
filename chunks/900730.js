n.d(t, { c: () => d });
var a = n(627968);
n(64700);
var r = n(683071),
    l = n(518977),
    i = n(46054),
    s = n(327105),
    o = n(985018),
    c = n(558981);
function d(e) {
    let { relocationCountry: t, relocationCurrencyCode: n, willForfeitGiftCardBalance: d = !1 } = e,
        u = (0, l.j7)(t),
        p = d ? s.default["DE+C4G"] : s.default.vcs3zU,
        _ = o.intl.formatToMarkdownString(p, {
            country: u,
            currency: n?.toUpperCase() ?? "",
            willForfeitGiftCardBalance: d ? "true" : "false",
        });
    return (0, a.jsx)(r.w, {
        type: "warning",
        children: (0, a.jsx)("div", { className: c.Q, children: i.A.parse(_, !1, { allowList: !0 }) }),
    });
}
