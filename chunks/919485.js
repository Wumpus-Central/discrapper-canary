n.d(t, { A: () => s });
var l = n(477900),
    a = n(582128),
    i = n(834730),
    r = n(55135);
function s(e) {
    let { title: t, className: n, children: s } = e,
        o = a.useId();
    return (0, l.jsxs)("section", {
        "aria-labelledby": o,
        className: n,
        children: [
            (0, l.jsx)(i.E, {
                id: o,
                variant: "text-sm/normal",
                color: "text-muted",
                className: r.D,
                role: "heading",
                "aria-level": 3,
                children: t,
            }),
            s,
        ],
    });
}
