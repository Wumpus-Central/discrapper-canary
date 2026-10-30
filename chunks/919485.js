n.d(t, { A: () => s });
var l = n(477900),
    a = n(582128),
    r = n(834730),
    i = n(55135);
function s(e) {
    let { title: t, className: n, children: s } = e,
        o = a.useId();
    return (0, l.jsxs)("section", {
        "aria-labelledby": o,
        className: n,
        children: [
            (0, l.jsx)(r.E, {
                id: o,
                variant: "text-sm/normal",
                color: "text-muted",
                className: i.D,
                role: "heading",
                "aria-level": 3,
                children: t,
            }),
            s,
        ],
    });
}
