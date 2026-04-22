n.d(t, { A: () => d });
var s = n(627968);
n(64700);
var a = n(534514),
    l = n(834730),
    i = n(303727),
    r = n(985018),
    o = n(711917);
function d(e) {
    let { Icon: t, header: n, tip: d, disableStars: c } = e;
    return (0, s.jsxs)("div", {
        className: o.kL,
        children: [
            (0, s.jsxs)("div", {
                className: o.zc,
                children: [
                    (0, s.jsx)(t, { color: "currentColor", size: "custom", className: o.Kk, width: 36, height: 36 }),
                    c ? null : (0, s.jsx)(i.A, { className: o.uf }),
                ],
            }),
            (0, s.jsx)(a.D, { className: o.wx, variant: "heading-xl/semibold", children: n }),
            (0, s.jsxs)(l.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: [
                    c
                        ? null
                        : (0, s.jsxs)(l.E, {
                              tag: "span",
                              className: o.PP,
                              variant: "text-xs/bold",
                              color: "text-feedback-positive",
                              children: [r.intl.string(r.t["8tvIiN"]), ":", " "],
                          }),
                    d,
                ],
            }),
        ],
    });
}
