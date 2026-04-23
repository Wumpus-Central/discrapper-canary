a.d(l, { q: () => c });
var t = a(627968);
a(64700);
var s = a(827734),
    i = a(996682),
    n = a(27989);
let c = (e) => {
    let {
            size: l = "md",
            width: a,
            height: c,
            color: h = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...o
        } = e,
        d = (0, n.J)(l),
        v = d?.width ?? a,
        g = d?.height ?? c;
    return (0, t.jsx)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof h ? h : h.css,
            fillRule: "evenodd",
            d: "M7.03 16.6c1.18 1.17 2.84 1.76 4.97 1.76s3.79-.59 4.97-1.76c1.2-1.18 1.79-3 1.79-5.46V2.5a.5.5 0 0 0-.5-.5H16.8a.5.5 0 0 0-.5.5v8.77c0 1.63-.38 2.84-1.14 3.64A4.1 4.1 0 0 1 12 16.1c-1.35 0-2.4-.4-3.17-1.2-.75-.8-1.12-2.01-1.12-3.64V2.5a.5.5 0 0 0-.5-.5H5.77a.5.5 0 0 0-.5.5v8.64c0 2.46.59 4.28 1.76 5.46ZM2.5 19.5a.5.5 0 0 0-.5.5v1.5c0 .28.22.5.5.5h19a.5.5 0 0 0 .5-.5V20a.5.5 0 0 0-.5-.5h-19Z",
            clipRule: "evenodd",
            className: r,
        }),
    });
};
