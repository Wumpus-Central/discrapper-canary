n.d(t, { c: () => c });
var r = n(477900);
n(582128);
var i = n(683071),
    a = n(423764),
    l = n(46054),
    s = n(758476),
    u = n(105292),
    o = n(135734);
function c(e) {
    let { relocationCountry: t, relocationCurrencyCode: n, willForfeitGiftCardBalance: c = !1, role: d } = e,
        m = (0, a.j7)(t),
        p = c ? s.default["DE+C4G"] : s.default.vcs3zU,
        f = u.intl.formatToMarkdownString(p, {
            country: m,
            currency: n?.toUpperCase() ?? "",
            willForfeitGiftCardBalance: c ? "true" : "false",
        }),
        v = l.A.parse(f, !1, { allowList: !0 });
    return null == v
        ? null
        : (0, r.jsx)("div", { className: o.Q, children: (0, r.jsx)(i.w, { type: "warning", message: v, role: d }) });
}
