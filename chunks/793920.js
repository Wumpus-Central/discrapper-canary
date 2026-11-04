s.d(t, { S: () => r });
var a = s(477900);
s(582128);
var i = s(661531),
    n = s(996682),
    l = s(27989);
function r(e) {
    let {
            size: t = "md",
            width: s,
            height: r,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: h = "",
            ...u
        } = e,
        d = (0, l.J)(t),
        c = d?.width ?? s,
        p = d?.height ?? r;
    return (0, a.jsx)("svg", {
        ...(0, n.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: c,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, a.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.18 15.36c-.55.35-1.18-.12-1.18-.78v-.27c0-.36.2-.67.45-.93a2 2 0 0 0 0-2.76c-.24-.26-.45-.57-.45-.93v-.27c0-.66.63-1.13 1.18-.78a4 4 0 0 1 0 6.72Z",
            className: h,
        }),
    });
}
