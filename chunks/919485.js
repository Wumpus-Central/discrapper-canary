l.d(e, { A: () => r });
var s = l(477900),
    i = l(582128),
    t = l(834730),
    a = l(55135);
function r(n) {
    let { title: e, className: l, children: r } = n,
        d = i.useId();
    return (0, s.jsxs)("section", {
        "aria-labelledby": d,
        className: l,
        children: [
            (0, s.jsx)(t.E, {
                id: d,
                variant: "text-sm/normal",
                color: "text-muted",
                className: a.D,
                role: "heading",
                "aria-level": 3,
                children: e,
            }),
            r,
        ],
    });
}
