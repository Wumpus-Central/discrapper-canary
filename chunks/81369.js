a.d(t, { H: () => n });
var r = a(477900);
a(582128);
var s = a(661531),
    i = a(996682),
    c = a(27989);
function n(e) {
    let {
            size: t = "md",
            width: a,
            height: n,
            color: d = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: l = "",
            ...o
        } = e,
        u = (0, c.J)(t),
        h = u?.width ?? a,
        f = u?.height ?? n;
    return (0, r.jsxs)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, r.jsx)("path", {
                fill: "string" == typeof d ? d : d.css,
                d: "M13.82 21.7c.17.05.14.3-.04.3H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h7.5c.28 0 .5.22.5.5V5a5 5 0 0 0 5 5h2.5c.28 0 .5.22.5.5v2.3a.4.4 0 0 1-.68.27l-.2-.2a3 3 0 0 0-4.24 0l-4 4a3 3 0 0 0 0 4.25c.3.3.6.46.94.58Z",
                className: l,
            }),
            (0, r.jsx)("path", {
                fill: "string" == typeof d ? d : d.css,
                d: "M21.66 8c.03 0 .05-.03.04-.06a3 3 0 0 0-.58-.82l-4.24-4.24a3 3 0 0 0-.82-.58.04.04 0 0 0-.06.04V5a3 3 0 0 0 3 3h2.66ZM18.3 14.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L20 17.42V23a1 1 0 1 1-2 0v-5.59l-2.3 2.3a1 1 0 0 1-1.4-1.42l4-4Z",
                className: l,
            }),
        ],
    });
}
