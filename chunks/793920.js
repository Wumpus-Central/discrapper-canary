s.r(t);
var a = s(477900);
s(582128);
var n = s(646514),
    i = s(996682),
    r = s(27989);
s.d(
    t,
    {},
    {
        VoiceLowIcon: function (e) {
            let {
                    size: t = "md",
                    width: s,
                    height: o,
                    color: l = n.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: h = "",
                    ...d
                } = e,
                u = (0, r.J)(t),
                p = u?.width ?? s,
                c = u?.height ?? o;
            return (0, a.jsx)("svg", {
                ...(0, i.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: c,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, a.jsx)("path", {
                    fill: "string" == typeof l ? l : l.css,
                    d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.18 15.36c-.55.35-1.18-.12-1.18-.78v-.27c0-.36.2-.67.45-.93a2 2 0 0 0 0-2.76c-.24-.26-.45-.57-.45-.93v-.27c0-.66.63-1.13 1.18-.78a4 4 0 0 1 0 6.72Z",
                    className: h,
                }),
            });
        },
    },
);
