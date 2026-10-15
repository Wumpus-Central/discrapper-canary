l.d(t, { c: () => d });
var n = l(477900);
l(582128);
var a = l(683071),
    r = l(423764),
    s = l(46054),
    i = l(649975),
    o = l(105292),
    c = l(135734);
function d(e) {
    let { relocationCountry: t, relocationCurrencyCode: l, willForfeitGiftCardBalance: d = !1 } = e,
        u = (0, r.j7)(t),
        m = d ? i.default["DE+C4G"] : i.default.vcs3zU,
        x = o.intl.formatToMarkdownString(m, {
            country: u,
            currency: l?.toUpperCase() ?? "",
            willForfeitGiftCardBalance: d ? "true" : "false",
        });
    return (0, n.jsx)(a.w, {
        type: "warning",
        children: (0, n.jsx)("div", { className: c.Q, children: s.A.parse(x, !1, { allowList: !0 }) }),
    });
}
