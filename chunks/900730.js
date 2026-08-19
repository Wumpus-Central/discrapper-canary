l.d(t, { c: () => u });
var n = l(477900);
l(582128);
var r = l(683071),
    a = l(423764),
    i = l(46054),
    s = l(327105),
    o = l(375708),
    c = l(108989);
function u(e) {
    let { relocationCountry: t, relocationCurrencyCode: l, willForfeitGiftCardBalance: u = !1 } = e,
        d = (0, a.j7)(t),
        m = u ? s.default["DE+C4G"] : s.default.vcs3zU,
        x = o.intl.formatToMarkdownString(m, {
            country: d,
            currency: l?.toUpperCase() ?? "",
            willForfeitGiftCardBalance: u ? "true" : "false",
        });
    return (0, n.jsx)(r.w, {
        type: "warning",
        children: (0, n.jsx)("div", { className: c.Q, children: i.A.parse(x, !1, { allowList: !0 }) }),
    });
}
