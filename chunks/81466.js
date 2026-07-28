e.d(a, { C: () => l });
var h = e(477900);
e(582128);
var i = e(661531),
    t = e(996682),
    c = e(27989);
function l(s) {
    let {
            size: a = "md",
            width: e,
            height: l,
            color: d = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...p
        } = s,
        v = (0, c.J)(a),
        o = v?.width ?? e,
        r = v?.height ?? l;
    return (0, h.jsxs)("svg", {
        ...(0, t.A)(p),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: r,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, h.jsx)("path", {
                fill: "string" == typeof d ? d : d.css,
                d: "M7 1a1 1 0 0 1 1 1v.75c0 .14.11.25.25.25h7.5c.14 0 .25-.11.25-.25V2a1 1 0 1 1 2 0v.75c0 .14.11.25.25.25H19a3 3 0 0 1 3 3 1 1 0 0 1-1 1H3a1 1 0 0 1-1-1 3 3 0 0 1 3-3h.75c.14 0 .25-.11.25-.25V2a1 1 0 0 1 1-1Z",
                className: n,
            }),
            (0, h.jsx)("path", {
                fill: "string" == typeof d ? d : d.css,
                fillRule: "evenodd",
                d: "M2 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9Zm3.5 2a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Z",
                clipRule: "evenodd",
                className: n,
            }),
        ],
    });
}
