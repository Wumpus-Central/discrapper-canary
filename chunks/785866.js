e.d(l, { _: () => n });
var s = e(477900);
e(582128);
var i = e(661531),
    a = e(996682),
    h = e(27989);
function n(t) {
    let {
            size: l = "md",
            width: e,
            height: n,
            color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...o
        } = t,
        v = (0, h.J)(l),
        A = v?.width ?? e,
        d = v?.height ?? n;
    return (0, s.jsx)("svg", {
        ...(0, a.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: A,
        height: d,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            fillRule: "evenodd",
            d: "M10.23 2a4.3 4.3 0 0 1 3.74 6.4 4.28 4.28 0 0 1-1.5 1.55l.9 4.72h3.34a2 2 0 0 1 2 2 .5.5 0 0 0 .5.5 1.96 1.96 0 0 1 1.95 1.96v.82A2.05 2.05 0 0 1 19.12 22H5.05A2.05 2.05 0 0 1 3 19.96v-.83a1.96 1.96 0 0 1 1.96-1.96.49.49 0 0 0 .5-.5 2 2 0 0 1 2-2h2.85l-.8-4.15A4.29 4.29 0 0 1 10.23 2Zm1.51 1.56a.97.97 0 0 0-.98.48 1.02 1.02 0 0 0 .13 1.21 1 1 0 0 0 .81.43 1 1 0 0 0 .71-1.7c-.08-.12-.19-.2-.3-.28a.97.97 0 0 0-.37-.14Z",
            clipRule: "evenodd",
            className: r,
        }),
    });
}
