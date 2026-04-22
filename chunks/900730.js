n.d(t, { c: () => c });
var a = n(627968);
n(64700);
var r = n(683071),
    l = n(518977),
    i = n(46054),
    s = n(327105),
    o = n(985018),
    u = n(558981);
function c(e) {
    let { relocationCountry: t, relocationCurrencyCode: n, willForfeitGiftCardBalance: c = !1 } = e,
        d = (0, l.j7)(t),
        m = c ? s.default["DE+C4G"] : s.default.vcs3zU,
        p = o.intl.formatToMarkdownString(m, {
            country: d,
            currency: n?.toUpperCase() ?? "",
            willForfeitGiftCardBalance: c ? "true" : "false",
        });
    return (0, a.jsx)(r.w, {
        type: "warning",
        children: (0, a.jsx)("div", { className: u.Q, children: i.A.parse(p, !1, { allowList: !0 }) }),
    });
}
