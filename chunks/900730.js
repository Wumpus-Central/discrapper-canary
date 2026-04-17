"use strict";
n.d(t, { c: () => c });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(518977),
    a = n(46054),
    o = n(327105),
    l = n(985018),
    u = n(558981);
function c(e) {
    let { relocationCountry: t, relocationCurrencyCode: n, willForfeitGiftCardBalance: c = !1 } = e,
        d = (0, s.j7)(t),
        _ = l.intl.formatToMarkdownString(o.default["DE+C4G"], {
            country: d,
            currency: n.toUpperCase(),
            willForfeitGiftCardBalance: c ? "true" : "false",
        });
    return (0, r.jsx)(i.wx6, {
        type: "warning",
        children: (0, r.jsx)("div", { className: u.Q, children: a.A.parse(_, !1, { allowList: !0 }) }),
    });
}
