"use strict";
n.d(t, { _: () => o });
var i = n(627968);
n(64700);
var r = n(661531),
    s = n(996682),
    a = n(27989);
let o = (e) => {
    let {
            size: t = "md",
            width: n,
            height: o,
            color: l = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...c
        } = e,
        d = (0, a.J)(t),
        _ = d?.width ?? n,
        f = d?.height ?? o;
    return (0, i.jsx)("svg", {
        ...(0, s.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            fillRule: "evenodd",
            d: "M10.23 2a4.3 4.3 0 0 1 3.74 6.4 4.28 4.28 0 0 1-1.5 1.55l.9 4.72h3.34a2 2 0 0 1 2 2 .5.5 0 0 0 .5.5 1.96 1.96 0 0 1 1.95 1.96v.82A2.05 2.05 0 0 1 19.12 22H5.05A2.05 2.05 0 0 1 3 19.96v-.83a1.96 1.96 0 0 1 1.96-1.96.49.49 0 0 0 .5-.5 2 2 0 0 1 2-2h2.85l-.8-4.15A4.29 4.29 0 0 1 10.23 2Zm1.51 1.56a.97.97 0 0 0-.98.48 1.02 1.02 0 0 0 .13 1.21 1 1 0 0 0 .81.43 1 1 0 0 0 .71-1.7c-.08-.12-.19-.2-.3-.28a.97.97 0 0 0-.37-.14Z",
            clipRule: "evenodd",
            className: u,
        }),
    });
};
