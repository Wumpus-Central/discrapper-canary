"use strict";
n.d(t, { m: () => r });
var l = n(627968);
n(64700);
var i = n(661531),
    s = n(996682),
    a = n(27989);
let r = (e) => {
    let {
            size: t = "md",
            width: n,
            height: r,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
        } = e,
        d = (0, a.J)(t),
        h = d?.width ?? n,
        m = d?.height ?? r;
    return (0, l.jsxs)("svg", {
        ...(0, s.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, l.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M21.65 13.63c.1.17.35.1.35-.1V10.5a.5.5 0 0 0-.5-.5H19a5 5 0 0 1-5-5V2.5a.5.5 0 0 0-.5-.5H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h5.49c.27 0 .5-.22.54-.5.06-.32.18-.65.37-.97l3.95-6.9a3.06 3.06 0 0 1 5.3 0Z",
                className: c,
            }),
            (0, l.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M21.7 7.94c.01.03 0 .06-.04.06H19a3 3 0 0 1-3-3V2.34c0-.03.03-.05.06-.04a3 3 0 0 1 .82.58l4.24 4.24a3 3 0 0 1 .58.82Z",
                className: c,
            }),
            (0, l.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                fillRule: "evenodd",
                d: "m14.13 21.52 3.96-6.9c.4-.68 1.43-.68 1.82 0l3.96 6.9c.38.67-.12 1.48-.91 1.48h-7.92c-.79 0-1.3-.81-.91-1.48Zm3.93-4.47a.5.5 0 0 1 .5-.55h.89c.3 0 .52.26.5.55l-.22 2.02c-.01.16-.17.26-.33.23a1.93 1.93 0 0 0-.8 0c-.16.03-.32-.07-.33-.23l-.21-2.02ZM19 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                clipRule: "evenodd",
                className: c,
            }),
        ],
    });
};
