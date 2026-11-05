var i = n(477900),
    r = n(582128),
    s = n(62617),
    l = n(615939);
n.d(
    t,
    {},
    {
        I: function (e) {
            let { alt: t, ariaLabel: n, ariaHidden: a, role: o, width: c, height: d, className: u, style: h } = e,
                C = r.useMemo(
                    () => (0, s.H)({ width: c, height: d, intrinsicWidth: 288, intrinsicHeight: 192, style: h }),
                    [c, d, h],
                );
            return (0, i.jsx)("img", {
                style: C,
                src: l.A,
                className: (0, s.Z)(u),
                alt: t,
                "aria-label": n,
                "aria-hidden": a,
                role: o ?? "img",
            });
        },
    },
);
