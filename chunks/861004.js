h.r(a);
var s = h(477900);
h(582128);
var i = h(646514),
    t = h(996682),
    c = h(27989);
h.d(
    a,
    {},
    {
        UserSquareIcon: function (e) {
            let {
                    size: a = "md",
                    width: h,
                    height: d,
                    color: l = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: r = "",
                    ...n
                } = e,
                o = (0, c.J)(a),
                p = o?.width ?? h,
                v = o?.height ?? d;
            return (0, s.jsx)("svg", {
                ...(0, t.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, s.jsx)("path", {
                    fill: "string" == typeof l ? l : l.css,
                    fillRule: "evenodd",
                    d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm10 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 9.83A5.83 5.83 0 0 1 11.83 12h.34A5.83 5.83 0 0 1 18 17.83c0 .65-.52 1.17-1.17 1.17h-.08a.52.52 0 0 1-.5-.4c-.22-.87-.54-1.69-.83-2.3-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.3.61-.61 1.43-.83 2.3a.52.52 0 0 1-.5.4h-.08C6.52 19 6 18.48 6 17.83Z",
                    clipRule: "evenodd",
                    className: r,
                }),
            });
        },
    },
);
