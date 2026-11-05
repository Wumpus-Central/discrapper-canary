s.r(h);
var i = s(477900);
s(582128);
var t = s(646514),
    c = s(996682),
    r = s(27989);
s.d(
    h,
    {},
    {
        GridVerticalIcon: function (a) {
            let {
                    size: h = "md",
                    width: s,
                    height: e,
                    color: d = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...l
                } = a,
                o = (0, r.J)(h),
                p = o?.width ?? s,
                v = o?.height ?? e;
            return (0, i.jsx)("svg", {
                ...(0, c.A)(l),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof d ? d : d.css,
                    d: "M4 22a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4ZM15 22a2 2 0 0 1-2-2v-5c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5ZM13 9c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v5Z",
                    className: n,
                }),
            });
        },
    },
);
