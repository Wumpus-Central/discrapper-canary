"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    s = n(64700),
    r = n(990078),
    l = n(821609),
    a = n(985018),
    o = n(818050);
function c(e) {
    let { consentRequired: t, consent: n, registering: c } = e,
        d = s.useMemo(() => null != t && n, [t, n]);
    return (0, i.jsx)(r.m, {
        text: !n && t ? a.intl.string(a.t.AY4IVA) : null,
        children: (0, i.jsx)("div", {
            className: o.Ot,
            children: (0, i.jsx)(l.$, {
                text: a.intl.string(a.t["825cFy"]),
                variant: "primary",
                fullWidth: !0,
                type: "submit",
                loading: c,
                disabled: !d,
            }),
        }),
    });
}
