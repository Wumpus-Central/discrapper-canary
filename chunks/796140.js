n.d(t, { c: () => r });
var l = n(627968);
n(64700);
var s = n(661531),
    i = n(996682),
    a = n(27989);
let r = (e) => {
    let {
            size: t = "md",
            width: n,
            height: r,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
        } = e,
        d = (0, a.J)(t),
        h = d?.width ?? n,
        m = d?.height ?? r;
    return (0, l.jsx)("svg", {
        ...(0, i.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            fillRule: "evenodd",
            d: "M4.45 6.9 5 6.61v4.88c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5V10a2 2 0 1 1 4 0v1.5c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5V6.62l.55.27a1 1 0 1 0 .9-1.78l-7.1-3.56a3 3 0 0 0-2.7 0l-7.1 3.56a1 1 0 1 0 .9 1.78ZM13 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3 13a1 1 0 1 0 0 2h1.59L9 19.41V22a1 1 0 1 0 2 0v-1h2v1a1 1 0 1 0 2 0v-2.59L19.41 15H21a1 1 0 1 0 0-2H3Zm13.59 2H15v1.59L16.59 15ZM13 19v-1h-2v1h2Zm-4-2.41L7.41 15H9v1.59Zm4-.59v-1h-2v1h2Z",
            clipRule: "evenodd",
            className: c,
        }),
    });
};
