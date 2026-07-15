t.d(s, { n: () => a });
var c = t(627968);
t(64700);
var i = t(661531),
    e = t(996682),
    l = t(27989);
let a = (h) => {
    let {
            size: s = "md",
            width: t,
            height: a,
            color: r = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...p
        } = h,
        n = (0, l.J)(s),
        w = n?.width ?? t,
        o = n?.height ?? a;
    return (0, c.jsx)("svg", {
        ...(0, e.A)(p),
        xmlns: "http://www.w3.org/2000/svg",
        width: w,
        height: o,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, c.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM11.53 11A9.53 9.53 0 0 0 2 20.53c0 .81.66 1.47 1.47 1.47h.22c.24 0 .44-.17.5-.4.29-1.12.84-2.17 1.32-2.91.14-.21.43-.1.4.15l-.26 2.61c-.02.3.2.55.5.55h11.7a.5.5 0 0 0 .5-.55l-.27-2.6c-.02-.26.27-.37.41-.16.48.74 1.03 1.8 1.32 2.9.06.24.26.41.5.41h.22c.81 0 1.47-.66 1.47-1.47A9.53 9.53 0 0 0 12.47 11h-.94Z",
            className: d,
        }),
    });
};
