l.d(t, { c: () => o });
var n = l(477900);
l(582128);
var r = l(683071),
    s = l(423764),
    i = l(46054),
    a = l(327105),
    c = l(375708),
    u = l(108989);
function o(e) {
    let { relocationCountry: t, relocationCurrencyCode: l, willForfeitGiftCardBalance: o = !1 } = e,
        d = (0, s.j7)(t),
        m = o ? a.default["DE+C4G"] : a.default.vcs3zU,
        x = c.intl.formatToMarkdownString(m, {
            country: d,
            currency: l?.toUpperCase() ?? "",
            willForfeitGiftCardBalance: o ? "true" : "false",
        });
    return (0, n.jsx)(r.w, {
        type: "warning",
        children: (0, n.jsx)("div", { className: u.Q, children: i.A.parse(x, !1, { allowList: !0 }) }),
    });
}
