"use strict";
n.d(t, { y: () => o });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(812745),
    s = n(985018);
let o = (e) => {
    let { className: t, submitting: n, stripePaymentMethod: o } = e,
        { card: l } = o ?? {},
        u = null != l ? a.Ay.getType(l.brand) : a.Ay.Types.UNKNOWN;
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsx)(i.ksK, {
            label: s.intl.string(s.t["mmDvV+"]),
            leading: { type: "image", src: (0, a.Nj)(u) },
            value: n && null != l ? s.intl.formatToPlainString(s.t.bCynoK, l) : void 0,
            readOnly: !0,
            placeholder: s.intl.string(s.t.bWMH78),
        }),
    });
};
