c.r(a);
var t = c(477900);
c(582128);
var i = c(646514),
    l = c(996682),
    h = c(27989);
c.d(
    a,
    {},
    {
        CloudDownloadIcon: function (s) {
            let {
                    size: a = "md",
                    width: c,
                    height: e,
                    color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...n
                } = s,
                r = (0, h.J)(a),
                p = r?.width ?? c,
                w = r?.height ?? e;
            return (0, t.jsxs)("svg", {
                ...(0, l.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, t.jsx)("path", {
                        d: "M18.3 23.7a1 1 0 0 0 1.4 0l4-4a1 1 0 0 0-1.4-1.4L20 20.58V14.9a1 1 0 0 0-2 .1v5.59l-.73-.73-1.56-1.57a1 1 0 0 0-1.42 1.42l4 4Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: d,
                    }),
                    (0, t.jsx)("path", {
                        d: "M15.31 16.02a3 3 0 0 0-3.3 3.3c.04.34-.2.68-.55.68H6a5 5 0 0 1-3.2-8.85c.12-.1.2-.24.2-.4a6 6 0 0 1 4.55-5.57c.36-.1.64.26.57.62a6.03 6.03 0 0 0 .3 3.4c.12.32.58.15.58-.2a5.98 5.98 0 0 1 6-6 6 6 0 0 1 5.83 7.44c-.06.22.03.45.2.59a5 5 0 0 1 1.92 4.65c-.02.19-.19.32-.38.35-.28.04-.57-.16-.57-.45V15a3 3 0 0 0-6 0v.46c0 .35-.34.6-.69.56Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: d,
                    }),
                ],
            });
        },
    },
);
