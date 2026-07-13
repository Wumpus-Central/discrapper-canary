l.d(a, { G: () => c });
var e = l(627968);
l(64700);
var t = l(661531),
    h = l(996682),
    i = l(27989);
let c = (s) => {
    let {
            size: a = "md",
            width: l,
            height: c,
            color: d = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...r
        } = s,
        n = (0, i.J)(a),
        o = n?.width ?? l,
        v = n?.height ?? c;
    return (0, e.jsxs)("svg", {
        ...(0, h.A)(r),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: v,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, e.jsx)("path", {
                fill: "string" == typeof d ? d : d.css,
                fillRule: "evenodd",
                d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm6.3.3a1 1 0 0 1 1.4 0L12 7.58l2.3-2.3a1 1 0 1 1 1.4 1.42L13.42 9l2.3 2.3a1 1 0 0 1-1.42 1.4L12 10.42l-2.3 2.3a1 1 0 0 1-1.4-1.42L10.58 9l-2.3-2.3a1 1 0 0 1 0-1.4Z",
                clipRule: "evenodd",
                className: p,
            }),
            (0, e.jsx)("path", {
                fill: "string" == typeof d ? d : d.css,
                d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
                className: p,
            }),
        ],
    });
};
