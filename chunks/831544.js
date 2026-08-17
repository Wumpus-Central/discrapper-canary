t.d(a, { MicrophoneIcon: () => n });
var h = t(477900);
t(582128);
var i = t(661531),
    e = t(996682),
    c = t(27989);
function n(s) {
    let {
            size: a = "md",
            width: t,
            height: n,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...r
        } = s,
        l = (0, c.J)(a),
        d = l?.width ?? t,
        w = l?.height ?? n;
    return (0, h.jsxs)("svg", {
        ...(0, e.A)(r),
        xmlns: "http://www.w3.org/2000/svg",
        width: d,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, h.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z",
                className: p,
            }),
            (0, h.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M6 10a1 1 0 0 0-2 0 8 8 0 0 0 7 7.94V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.06A8 8 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
                className: p,
            }),
        ],
    });
}
