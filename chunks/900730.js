"use strict";
n.d(t, { c: () => c });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(518977),
    a = n(46054),
    o = n(523376),
    l = n(985018),
    u = n(434258);
function c(e) {
    let { relocationCountry: t, relocationCurrencyCode: n } = e,
        c = (0, s.j7)(t),
        d = l.intl.formatToMarkdownString(o.default["DE+C4G"], { country: c, currency: n.toUpperCase() });
    return (0, r.jsx)(i.wx6, {
        type: "warning",
        children: (0, r.jsx)("div", { className: u.Q, children: a.A.parse(d, !1, { allowList: !0 }) }),
    });
}
