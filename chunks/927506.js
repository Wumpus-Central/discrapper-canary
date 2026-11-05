t.r(i);
var h = t(477900);
t(582128);
var c = t(646514),
    e = t(996682),
    n = t(27989);
t.d(
    i,
    {},
    {
        EmojiFrowningFaceWithOpenMouthIcon: function (s) {
            let {
                    size: i = "md",
                    width: t,
                    height: o,
                    color: r = c.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: a = "",
                    ...p
                } = s,
                d = (0, n.J)(i),
                w = d?.width ?? t,
                l = d?.height ?? o;
            return (0, h.jsx)("svg", {
                ...(0, e.A)(p),
                xmlns: "http://www.w3.org/2000/svg",
                width: w,
                height: l,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, h.jsx)("path", {
                    fill: "string" == typeof r ? r : r.css,
                    d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 15c-1.4 0-2.6.9-2.97 2.15-.14.46.27.85.76.85h4.42c.5 0 .9-.4.76-.85A3.09 3.09 0 0 0 12 16Zm-5.5-6c-.83 0-1.5.9-1.5 2s.67 2 1.5 2S8 13.1 8 12s-.67-2-1.5-2Zm11 0c-.83 0-1.5.9-1.5 2s.67 2 1.5 2 1.5-.9 1.5-2-.67-2-1.5-2Z",
                    className: a,
                }),
            });
        },
    },
);
