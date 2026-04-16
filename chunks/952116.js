s.d(t, { A: () => d });
var r = s(627968);
s(64700);
var n = s(397927),
    a = s(235986),
    i = s(13008),
    l = s(854378),
    o = s(985018),
    c = s(91443),
    h = s(818050);
function d(e) {
    let { title: t, subtitle: s, error: d, onSubmit: u, onCancel: p } = e;
    return (0, r.jsxs)(a.A, {
        direction: a.A.Direction.VERTICAL,
        children: [
            (0, r.jsx)(l.hE, { className: h.QB, children: t }),
            (0, r.jsx)(l.tK, { className: c.p6, children: s }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(i.A, { inputClassName: c.IX, onSubmit: u }),
                    null != d ? (0, r.jsx)(n.Text, { className: c.z3, variant: "text-sm/normal", children: d }) : null,
                ],
            }),
            null != p &&
                (0, r.jsx)("div", {
                    className: c.x6,
                    children: (0, r.jsx)(n.Button, {
                        text: o.intl.string(o.t["ETE/oC"]),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: p,
                    }),
                }),
        ],
    });
}
