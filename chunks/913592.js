e.r(a);
var i = e(477900);
e(582128);
var s = e(646514),
    t = e(996682),
    c = e(27989);
e.d(
    a,
    {},
    {
        EmojiAngryFaceWithHornsIcon: function (l) {
            let {
                    size: a = "md",
                    width: e,
                    height: h,
                    color: n = s.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...o
                } = l,
                r = (0, c.J)(a),
                p = r?.width ?? e,
                A = r?.height ?? h;
            return (0, i.jsx)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: A,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    fillRule: "evenodd",
                    d: "M23 12A11 11 0 1 1 2.74 6.06l-.78-2.87a1 1 0 0 1 1.23-1.23l2.87.78a10.95 10.95 0 0 1 11.88 0l2.87-.78a1 1 0 0 1 1.23 1.23l-.78 2.87A10.95 10.95 0 0 1 23 12Zm-6.5 3a1.5 1.5 0 0 0 .86-2.73l.96-.32a1 1 0 0 0-.64-1.9l-3 1a1 1 0 0 0 .4 1.95 1.5 1.5 0 0 0 1.42 2ZM6 13.5a1.5 1.5 0 1 0 2.91-.5 1 1 0 0 0 .4-1.95l-3-1a1 1 0 1 0-.63 1.9l.96.32A1.5 1.5 0 0 0 6 13.5Zm4.81 5.08a1 1 0 0 1-1.62-1.16A3.45 3.45 0 0 1 12 16c1.15 0 2.2.55 2.81 1.42a1 1 0 0 1-1.62 1.16A1.45 1.45 0 0 0 12 18c-.52 0-.95.24-1.19.58Z",
                    clipRule: "evenodd",
                    className: d,
                }),
            });
        },
    },
);
