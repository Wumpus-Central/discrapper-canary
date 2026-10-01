r.d(t, { k: () => a });
var l = r(477900);
r(582128);
var n = r(661531),
    i = r(996682),
    s = r(27989);
function a(e) {
    let {
            size: t = "md",
            width: r,
            height: a,
            color: c = n.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: h = "",
            ...u
        } = e,
        o = (0, s.J)(t),
        f = o?.width ?? r,
        d = o?.height ?? a;
    return (0, l.jsxs)("svg", {
        ...(0, i.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: f,
        height: d,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, l.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                d: "M4 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8.5a.5.5 0 0 0 .5-.5V19a3 3 0 0 1 1.46-2.58.6.6 0 0 0 .26-.32 4.5 4.5 0 0 1 6.96-2.22c.42.32 1.32.02 1.32-.5V7.62a1 1 0 0 0-1.45-.9l-3 1.5a1 1 0 0 0-.55.9V7a3 3 0 0 0-3-3H4Z",
                className: h,
            }),
            (0, l.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                fillRule: "evenodd",
                d: "M16 18h.5v-.5a2.5 2.5 0 0 1 5 0v.5h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm4-.5v.5h-2v-.5a1 1 0 1 1 2 0Z",
                clipRule: "evenodd",
                className: h,
            }),
        ],
    });
}
