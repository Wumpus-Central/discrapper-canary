n.d(t, { t: () => s });
var i = n(627968);
n(64700);
var l = n(827734),
    a = n(996682),
    r = n(27989);
let s = (e) => {
    let {
            size: t = "md",
            width: n,
            height: s,
            color: o = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
        } = e,
        u = (0, r.J)(t),
        g = u?.width ?? n,
        A = u?.height ?? s;
    return (0, i.jsx)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: g,
        height: A,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M10.67 1.33a9.33 9.33 0 0 1 7.77 14.5H15a2.5 2.5 0 0 0-2.49 2.25l-.01.25.01.26c.05.42.2.8.41 1.13a9.35 9.35 0 0 1-11.59-9.05 9.33 9.33 0 0 1 9.34-9.34Zm12.33 16a1 1 0 0 1 0 2h-8a1 1 0 0 1-.86-.49l-.01-.02a.99.99 0 0 1-.1-.22v-.03a1 1 0 0 1-.02-.08v-.03l-.01-.13a1 1 0 0 1 .44-.83l.08-.05a1 1 0 0 1 .48-.12h8Zm-8.69-4.82a.85.85 0 0 0-1.17.23 2.97 2.97 0 0 1-4.94 0 .85.85 0 1 0-1.41.94 4.66 4.66 0 0 0 7.76 0 .85.85 0 0 0-.24-1.17ZM6 8.97a1.27 1.27 0 1 0 0 2.54 1.27 1.27 0 0 0 0-2.54Zm9.33 0a1.27 1.27 0 1 0 0 2.55 1.27 1.27 0 0 0 0-2.55Z",
            className: d,
        }),
    });
};
