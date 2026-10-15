s.d(t, { A: () => h });
var n = s(477900);
s(582128);
var r = s(834730),
    a = s(821609),
    i = s(235986),
    l = s(13008),
    o = s(854378),
    c = s(105292),
    d = s(128468),
    u = s(221851);
function h(e) {
    let { title: t, subtitle: s, error: h, onSubmit: p, onCancel: m } = e;
    return (0, n.jsxs)(i.A, {
        direction: i.A.Direction.VERTICAL,
        children: [
            (0, n.jsx)(o.hE, { className: u.QB, children: t }),
            (0, n.jsx)(o.tK, { className: d.p6, children: s }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(l.A, { inputClassName: d.IX, onSubmit: p }),
                    null != h ? (0, n.jsx)(r.E, { className: d.z3, variant: "text-sm/normal", children: h }) : null,
                ],
            }),
            null != m &&
                (0, n.jsx)("div", {
                    className: d.x6,
                    children: (0, n.jsx)(a.$, {
                        text: c.intl.string(c.t["ETE/oC"]),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: m,
                    }),
                }),
        ],
    });
}
