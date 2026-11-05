e.r(s);
var i = e(477900);
e(582128);
var l = e(646514),
    t = e(996682),
    c = e(27989);
e.d(
    s,
    {},
    {
        StickerWink2Icon: function (a) {
            let {
                    size: s = "md",
                    width: e,
                    height: h,
                    color: d = l.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...r
                } = a,
                o = (0, c.J)(s),
                p = o?.width ?? e,
                v = o?.height ?? h;
            return (0, i.jsxs)("svg", {
                ...(0, t.A)(r),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M6 2h12a4 4 0 0 1 4 4v7.5a.5.5 0 0 1-.5.5H19a5 5 0 0 0-5 5v2.5a.5.5 0 0 1-.5.5H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm11.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-2.14 1.99c.15-.53-.3-.99-.86-.99h-5c-.55 0-1.01.46-.86.99a3.5 3.5 0 0 0 6.72 0ZM6.45 6.1a1 1 0 1 0-.9 1.78l1.21.61-1.2.6a1 1 0 1 0 .89 1.8l3-1.5a1 1 0 0 0 0-1.8l-3-1.5Z",
                        clipRule: "evenodd",
                        className: n,
                    }),
                    (0, i.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M21.66 16c.03 0 .05.03.04.06a3 3 0 0 1-.58.82l-4.24 4.24a3 3 0 0 1-.82.58.04.04 0 0 1-.06-.04V19a3 3 0 0 1 3-3h2.66Z",
                        className: n,
                    }),
                ],
            });
        },
    },
);
