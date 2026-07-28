n.d(t, { Q: () => a });
var i = n(627968);
n(64700);
var l = n(661531),
    r = n(996682),
    s = n(27989);
function a(e) {
    let {
            size: t = "md",
            width: n,
            height: a,
            color: E = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...c
        } = e,
        u = (0, s.J)(t),
        _ = u?.width ?? n,
        A = u?.height ?? a;
    return (0, i.jsxs)("svg", {
        ...(0, r.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: A,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: "string" == typeof E ? E : E.css,
                d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                className: o,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof E ? E : E.css,
                fillRule: "evenodd",
                d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM7.74 9.3A2 2 0 0 1 9.3 7.75l7.22-1.45a1 1 0 0 1 1.18 1.18l-1.45 7.22a2 2 0 0 1-1.57 1.57l-7.22 1.45a1 1 0 0 1-1.18-1.18L7.74 9.3Z",
                clipRule: "evenodd",
                className: o,
            }),
        ],
    });
}
