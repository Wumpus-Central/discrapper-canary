"use strict";
n.d(t, { y: () => o });
var r = n(627968);
n(64700);
var i = n(292666),
    s = n(812745),
    a = n(985018);
let o = (e) => {
    let { className: t, submitting: n, stripePaymentMethod: o } = e,
        { card: l } = o ?? {},
        u = null != l ? s.Ay.getType(l.brand) : s.Ay.Types.UNKNOWN;
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsx)(i.k, {
            label: a.intl.string(a.t["mmDvV+"]),
            leading: { type: "image", src: (0, s.Nj)(u) },
            value: n && null != l ? a.intl.formatToPlainString(a.t.bCynoK, l) : void 0,
            readOnly: !0,
            placeholder: a.intl.string(a.t.bWMH78),
        }),
    });
};
