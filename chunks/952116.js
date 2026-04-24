s.d(t, { A: () => h });
var l = s(627968);
s(64700);
var n = s(834730),
    a = s(821609),
    r = s(235986),
    i = s(13008),
    o = s(854378),
    c = s(985018),
    u = s(91443),
    d = s(818050);
function h(e) {
    let { title: t, subtitle: s, error: h, onSubmit: p, onCancel: f } = e;
    return (0, l.jsxs)(r.A, {
        direction: r.A.Direction.VERTICAL,
        children: [
            (0, l.jsx)(o.hE, { className: d.QB, children: t }),
            (0, l.jsx)(o.tK, { className: u.p6, children: s }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(i.A, { inputClassName: u.IX, onSubmit: p }),
                    null != h ? (0, l.jsx)(n.E, { className: u.z3, variant: "text-sm/normal", children: h }) : null,
                ],
            }),
            null != f &&
                (0, l.jsx)("div", {
                    className: u.x6,
                    children: (0, l.jsx)(a.$, {
                        text: c.intl.string(c.t["ETE/oC"]),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: f,
                    }),
                }),
        ],
    });
}
