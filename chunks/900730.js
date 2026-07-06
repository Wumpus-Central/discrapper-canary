l.d(t, { c: () => u });
var s = l(627968);
l(64700);
var n = l(683071),
    a = l(423764),
    r = l(46054),
    i = l(327105),
    d = l(375708),
    c = l(558981);
function u(e) {
    let { relocationCountry: t, relocationCurrencyCode: l, willForfeitGiftCardBalance: u = !1 } = e,
        o = (0, a.j7)(t),
        m = u ? i.default["DE+C4G"] : i.default.vcs3zU,
        x = d.intl.formatToMarkdownString(m, {
            country: o,
            currency: l?.toUpperCase() ?? "",
            willForfeitGiftCardBalance: u ? "true" : "false",
        });
    return (0, s.jsx)(n.w, {
        type: "warning",
        children: (0, s.jsx)("div", { className: c.Q, children: r.A.parse(x, !1, { allowList: !0 }) }),
    });
}
