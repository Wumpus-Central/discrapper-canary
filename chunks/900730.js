l.d(t, { c: () => d });
var n = l(477900);
l(582128);
var a = l(683071),
    r = l(423764),
    s = l(46054),
    i = l(583741),
    o = l(105292),
    c = l(135734);
function d(e) {
    let { relocationCountry: t, relocationCurrencyCode: l, willForfeitGiftCardBalance: d = !1, role: u } = e,
        m = (0, r.j7)(t),
        x = d ? i.default["DE+C4G"] : i.default.vcs3zU,
        f = o.intl.formatToMarkdownString(x, {
            country: m,
            currency: l?.toUpperCase() ?? "",
            willForfeitGiftCardBalance: d ? "true" : "false",
        }),
        p = s.A.parse(f, !1, { allowList: !0 });
    return null == p
        ? null
        : (0, n.jsx)("div", { className: c.Q, children: (0, n.jsx)(a.w, { type: "warning", message: p, role: u }) });
}
