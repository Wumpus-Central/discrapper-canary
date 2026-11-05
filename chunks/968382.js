h.r(a);
var c = h(477900);
h(582128);
var t = h(646514),
    i = h(996682),
    e = h(27989);
h.d(
    a,
    {},
    {
        PuzzlePiecePlusIcon: function (s) {
            let {
                    size: a = "md",
                    width: h,
                    height: l,
                    color: r = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...p
                } = s,
                d = (0, e.J)(a),
                o = d?.width ?? h,
                v = d?.height ?? l;
            return (0, c.jsxs)("svg", {
                ...(0, i.A)(p),
                xmlns: "http://www.w3.org/2000/svg",
                width: o,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, c.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M16 4a3 3 0 1 1-5.98-.31c.03-.35-.21-.69-.56-.69H7a3 3 0 0 0-3 3v2.5c0 .28-.23.5-.5.54a3 3 0 0 0 0 5.92c.27.04.5.26.5.54V18a3 3 0 0 0 3 3h4.65c.43 0 .69-.55.54-.95A3 3 0 0 1 15 16h.5a.5.5 0 0 0 .5-.5V15a3 3 0 0 1 5.6-1.5c.03.06.1.1.19.1.11 0 .21-.09.21-.2V6a3 3 0 0 0-3-3h-2.46c-.35 0-.6.34-.56.69L16 4Z",
                        className: n,
                    }),
                    (0, c.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        className: n,
                    }),
                ],
            });
        },
    },
);
