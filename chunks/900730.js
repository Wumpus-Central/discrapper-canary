n.d(t, { c: () => c });
var l = n(477900);
n(582128);
var r = n(683071),
    a = n(423764),
    i = n(46054),
    s = n(583741),
    o = n(375708),
    u = n(135734);
function c(e) {
    let { relocationCountry: t, relocationCurrencyCode: n, willForfeitGiftCardBalance: c = !1 } = e,
        d = (0, a.j7)(t),
        m = c ? s.default["DE+C4G"] : s.default.vcs3zU,
        x = o.intl.formatToMarkdownString(m, {
            country: d,
            currency: n?.toUpperCase() ?? "",
            willForfeitGiftCardBalance: c ? "true" : "false",
        });
    return (0, l.jsx)(r.w, {
        type: "warning",
        children: (0, l.jsx)("div", { className: u.Q, children: i.A.parse(x, !1, { allowList: !0 }) }),
    });
}
