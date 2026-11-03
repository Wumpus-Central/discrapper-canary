l.d(e, { A: () => t });
var s = l(477900),
    i = l(582128),
    a = l(834730),
    r = l(55135);
function t(n) {
    let { title: e, className: l, children: t } = n,
        d = i.useId();
    return (0, s.jsxs)("section", {
        "aria-labelledby": d,
        className: l,
        children: [
            (0, s.jsx)(a.E, {
                id: d,
                variant: "body-sm/normal",
                color: "text-muted",
                className: r.D,
                role: "heading",
                "aria-level": 3,
                children: e,
            }),
            t,
        ],
    });
}
