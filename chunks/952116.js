n.d(t, { A: () => h });
var s = n(627968);
n(64700);
var r = n(834730),
    a = n(821609),
    i = n(235986),
    l = n(13008),
    o = n(854378),
    c = n(375708),
    d = n(91443),
    u = n(818050);
function h(e) {
    let { title: t, subtitle: n, error: h, onSubmit: p, onCancel: m } = e;
    return (0, s.jsxs)(i.A, {
        direction: i.A.Direction.VERTICAL,
        children: [
            (0, s.jsx)(o.hE, { className: u.QB, children: t }),
            (0, s.jsx)(o.tK, { className: d.p6, children: n }),
            (0, s.jsxs)("div", {
                children: [
                    (0, s.jsx)(l.A, { inputClassName: d.IX, onSubmit: p }),
                    null != h ? (0, s.jsx)(r.E, { className: d.z3, variant: "text-sm/normal", children: h }) : null,
                ],
            }),
            null != m &&
                (0, s.jsx)("div", {
                    className: d.x6,
                    children: (0, s.jsx)(a.$, {
                        text: c.intl.string(c.t["ETE/oC"]),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: m,
                    }),
                }),
        ],
    });
}
