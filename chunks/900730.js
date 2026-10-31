n.d(t, { c: () => o });
var r = n(477900);
n(582128);
var i = n(683071),
    a = n(423764),
    l = n(46054),
    s = n(758476),
    u = n(105292),
    c = n(135734);
function o(e) {
    let { relocationCountry: t, relocationCurrencyCode: n, willForfeitGiftCardBalance: o = !1, role: d } = e,
        m = (0, a.j7)(t),
        f = o ? s.default["DE+C4G"] : s.default.vcs3zU,
        p = u.intl.formatToMarkdownString(f, {
            country: m,
            currency: n?.toUpperCase() ?? "",
            willForfeitGiftCardBalance: o ? "true" : "false",
        }),
        v = l.A.parse(p, !1, { allowList: !0 });
    return null == v
        ? null
        : (0, r.jsx)("div", { className: c.Q, children: (0, r.jsx)(i.w, { type: "warning", message: v, role: d }) });
}
