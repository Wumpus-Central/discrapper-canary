e.r(l);
var h = e(477900);
e(582128);
var i = e(646514),
    s = e(996682),
    t = e(27989);
e.d(
    l,
    {},
    {
        ReceiptIcon: function (a) {
            let {
                    size: l = "md",
                    width: e,
                    height: d,
                    color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = a,
                p = (0, t.J)(l),
                r = p?.width ?? e,
                w = p?.height ?? d;
            return (0, h.jsx)("svg", {
                ...(0, s.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, h.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    fillRule: "evenodd",
                    d: "M21 21.93V2.07a1 1 0 0 0-1.27-.97l-2.5.7a3 3 0 0 1-1.46.04l-3.12-.7a3 3 0 0 0-1.3 0l-3.12.7a3 3 0 0 1-1.45-.04l-2.51-.7A1 1 0 0 0 3 2.07v19.86a1 1 0 0 0 1.27.97l2.5-.7a3 3 0 0 1 1.46-.04l3.12.7a3 3 0 0 0 1.3 0l3.12-.7a3 3 0 0 1 1.45.04l2.51.7a1 1 0 0 0 1.27-.97ZM7 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm1 3a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H8Zm-1 5a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1Zm8-1a1 1 0 0 0 0 2h1a1 1 0 1 0 0-2h-1Z",
                    clipRule: "evenodd",
                    className: n,
                }),
            });
        },
    },
);
