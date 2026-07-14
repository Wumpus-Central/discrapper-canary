s.d(e, { O: () => d });
var t = s(627968);
s(64700);
var a = s(661531),
    i = s(996682),
    h = s(27989);
let d = (l) => {
    let {
            size: e = "md",
            width: s,
            height: d,
            color: r = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...n
        } = l,
        o = (0, h.J)(e),
        w = o?.width ?? s,
        p = o?.height ?? d;
    return (0, t.jsx)("svg", {
        ...(0, i.A)(n),
        xmlns: "http://www.w3.org/2000/svg",
        width: w,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M22.7 2.7a1 1 0 0 0-1.4-1.4l-20 20a1 1 0 1 0 1.4 1.4l20-20ZM9.2 20a.5.5 0 0 1-.35-.85l12.1-12.1a.5.5 0 0 1 .12-.09l.48-.24a1 1 0 0 1 1.45.9v8.76a1 1 0 0 1-1.45.9l-3-1.5a1 1 0 0 1-.55-.9V17a3 3 0 0 1-3 3H9.2ZM15.28 4.72c.27-.27.15-.71-.23-.72H4a3 3 0 0 0-3 3v10a3 3 0 0 0 .17.99c.1.3.49.35.72.12l13.4-13.4Z",
            className: c,
        }),
    });
};
