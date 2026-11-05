l.r(i);
var s = l(477900);
l(582128);
var a = l(646514),
    t = l(996682),
    c = l(27989);
l.d(
    i,
    {},
    {
        EmojiWoozyFaceIcon: function (e) {
            let {
                    size: i = "md",
                    width: l,
                    height: h,
                    color: o = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...n
                } = e,
                r = (0, c.J)(i),
                p = r?.width ?? l,
                w = r?.height ?? h;
            return (0, s.jsx)("svg", {
                ...(0, t.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, s.jsx)("path", {
                    fill: "string" == typeof o ? o : o.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.02-11.07c.8-.21 1.21-1.25.93-2.32-.29-1.07-1.17-1.76-1.97-1.54-.8.21-1.21 1.25-.93 2.32.29 1.07 1.17 1.76 1.97 1.54ZM9.95 10.4c-.29 1.07-1.17 1.76-1.97 1.54-.8-.21-1.21-1.25-.93-2.32.29-1.07 1.17-1.76 1.97-1.54.8.21 1.21 1.25.93 2.32Zm-3.06 4.06a1 1 0 1 0-1.78-.9l-.03.06a3.46 3.46 0 0 0 4.65 4.64l1.66-.83a4 4 0 0 1 1.79-.42H17a3 3 0 0 0 3-3 1 1 0 1 0-2 0 1 1 0 0 1-1 1h-3.82a6 6 0 0 0-2.68.63l-1.67.84a1.46 1.46 0 0 1-1.96-1.97l.02-.05Z",
                    clipRule: "evenodd",
                    className: d,
                }),
            });
        },
    },
);
