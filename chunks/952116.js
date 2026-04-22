s.d(t, { A: () => u });
var r = s(627968);
s(64700);
var n = s(834730),
    l = s(821609),
    a = s(235986),
    i = s(13008),
    o = s(854378),
    c = s(985018),
    h = s(904435),
    d = s(373378);
function u(e) {
    let { title: t, subtitle: s, error: u, onSubmit: p, onCancel: m } = e;
    return (0, r.jsxs)(a.A, {
        direction: a.A.Direction.VERTICAL,
        children: [
            (0, r.jsx)(o.hE, { className: d.QB, children: t }),
            (0, r.jsx)(o.tK, { className: h.p6, children: s }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(i.A, { inputClassName: h.IX, onSubmit: p }),
                    null != u ? (0, r.jsx)(n.E, { className: h.z3, variant: "text-sm/normal", children: u }) : null,
                ],
            }),
            null != m &&
                (0, r.jsx)("div", {
                    className: h.x6,
                    children: (0, r.jsx)(l.$, {
                        text: c.intl.string(c.t["ETE/oC"]),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: m,
                    }),
                }),
        ],
    });
}
