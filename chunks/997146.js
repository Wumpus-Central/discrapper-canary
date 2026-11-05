a.r(l);
var i = a(477900);
a(582128);
var s = a(646514),
    t = a(996682),
    d = a(27989);
a.d(
    l,
    {},
    {
        BookmarkOutlineIcon: function (e) {
            let {
                    size: l = "md",
                    width: a,
                    height: h,
                    color: n = s.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...r
                } = e,
                c = (0, d.J)(l),
                p = c?.width ?? a,
                u = c?.height ?? h;
            return (0, i.jsx)("svg", {
                ...(0, t.A)(r),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: u,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    fillRule: "evenodd",
                    d: "M17 4H7a1 1 0 0 0-1 1v13.74l3.99-3.61a3 3 0 0 1 4.02 0l3.99 3.6V5a1 1 0 0 0-1-1ZM7 2a3 3 0 0 0-3 3v16a1 1 0 0 0 1.67.74l5.66-5.13a1 1 0 0 1 1.34 0l5.66 5.13a1 1 0 0 0 1.67-.75V5a3 3 0 0 0-3-3H7Z",
                    clipRule: "evenodd",
                    className: o,
                }),
            });
        },
    },
);
