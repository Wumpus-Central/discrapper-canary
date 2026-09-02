l.d(t, { c: () => o });
var n = l(477900);
l(582128);
var r = l(683071),
    i = l(423764),
    s = l(46054),
    a = l(583741),
    c = l(375708),
    u = l(135734);
function o(e) {
    let { relocationCountry: t, relocationCurrencyCode: l, willForfeitGiftCardBalance: o = !1 } = e,
        d = (0, i.j7)(t),
        m = o ? a.default["DE+C4G"] : a.default.vcs3zU,
        x = c.intl.formatToMarkdownString(m, {
            country: d,
            currency: l?.toUpperCase() ?? "",
            willForfeitGiftCardBalance: o ? "true" : "false",
        });
    return (0, n.jsx)(r.w, {
        type: "warning",
        children: (0, n.jsx)("div", { className: u.Q, children: s.A.parse(x, !1, { allowList: !0 }) }),
    });
}
