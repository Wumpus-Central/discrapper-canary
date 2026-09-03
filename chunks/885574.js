n.d(t, { CircleInformationIcon: () => l });
var i = n(477900);
n(582128);
var r = n(661531),
    a = n(996682),
    s = n(27989);
function l(e) {
    let {
            size: t = "md",
            width: n,
            height: l,
            secondaryColor: o = "transparent",
            secondaryColorClass: d = "",
            color: c = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ..._
        } = e,
        E = (0, s.J)(t),
        A = E?.width ?? n,
        h = E?.height ?? l;
    return (0, i.jsxs)("svg", {
        ...(0, a.A)(_),
        xmlns: "http://www.w3.org/2000/svg",
        width: A,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("circle", { cx: "12", cy: "12", r: "10", fill: "string" == typeof o ? o : o.css, className: d }),
            (0, i.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                fillRule: "evenodd",
                d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.77 3.96a1 1 0 1 0-1.96-.42l-1.04 4.86a2.77 2.77 0 0 0 4.31 2.83l.24-.17a1 1 0 1 0-1.16-1.62l-.24.17a.77.77 0 0 1-1.2-.79l1.05-4.86Z",
                clipRule: "evenodd",
                className: u,
            }),
        ],
    });
}
