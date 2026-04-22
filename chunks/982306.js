a.d(l, { a: () => n });
var t = a(627968);
a(64700);
var s = a(996682),
    i = a(27989);
let n = (e) => {
    let { size: l = "md", width: a, height: n, color: c = "#D22A36", colorClass: h = "", ...r } = e,
        o = (0, i.J)(l),
        d = o?.width ?? a,
        v = o?.height ?? n;
    return (0, t.jsx)("svg", {
        ...(0, s.A)(r),
        xmlns: "http://www.w3.org/2000/svg",
        width: d,
        height: v,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "m12.5 20.96-1.02-2.58 9.92.5-.45 4.12-8.45-2.04ZM14.88 1 1 7.39 3.15 17h2.83l-.5-6.88.44-.13L7.62 17h2.95l-.11-8.38.43-.13 1.49 8.52h3.11l.74-10.14.43-.13.77 10.27h4.12L23 2.92 14.88 1Z",
            className: h,
        }),
    });
};
