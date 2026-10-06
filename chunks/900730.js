n.d(t, { c: () => d });
var l = n(477900);
n(582128);
var a = n(683071),
    r = n(423764),
    s = n(46054),
    i = n(583741),
    o = n(375708),
    c = n(135734);
function d(e) {
    let { relocationCountry: t, relocationCurrencyCode: n, willForfeitGiftCardBalance: d = !1 } = e,
        u = (0, r.j7)(t),
        m = d ? i.default["DE+C4G"] : i.default.vcs3zU,
        x = o.intl.formatToMarkdownString(m, {
            country: u,
            currency: n?.toUpperCase() ?? "",
            willForfeitGiftCardBalance: d ? "true" : "false",
        });
    return (0, l.jsx)(a.w, {
        type: "warning",
        children: (0, l.jsx)("div", { className: c.Q, children: s.A.parse(x, !1, { allowList: !0 }) }),
    });
}
