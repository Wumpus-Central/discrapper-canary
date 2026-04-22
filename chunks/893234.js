n.d(t, { y: () => s });
var l = n(627968);
n(64700);
var i = n(292666),
    a = n(812745),
    r = n(985018);
let s = (e) => {
    let { className: t, submitting: n, stripePaymentMethod: s } = e,
        { card: o } = s ?? {},
        u = null != o ? a.Ay.getType(o.brand) : a.Ay.Types.UNKNOWN;
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsx)(i.k, {
            label: r.intl.string(r.t["mmDvV+"]),
            leading: { type: "image", src: (0, a.Nj)(u) },
            value: n && null != o ? r.intl.formatToPlainString(r.t.bCynoK, o) : void 0,
            readOnly: !0,
            placeholder: r.intl.string(r.t.bWMH78),
        }),
    });
};
