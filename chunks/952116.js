r.d(t, { A: () => d });
var n = r(627968);
r(64700);
var s = r(397927),
    i = r(235986),
    a = r(13008),
    l = r(854378),
    o = r(985018),
    c = r(930774),
    u = r(473169);
function d(e) {
    let { title: t, subtitle: r, error: d, onSubmit: h, onCancel: p } = e;
    return (0, n.jsxs)(i.A, {
        direction: i.A.Direction.VERTICAL,
        children: [
            (0, n.jsx)(l.hE, {
                className: u.QB,
                children: t,
            }),
            (0, n.jsx)(l.tK, {
                className: c.p6,
                children: r,
            }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(a.A, {
                        inputClassName: c.IX,
                        onSubmit: h,
                    }),
                    null != d
                        ? (0, n.jsx)(s.Text, {
                              className: c.z3,
                              variant: "text-sm/normal",
                              children: d,
                          })
                        : null,
                ],
            }),
            null != p &&
                (0, n.jsx)("div", {
                    className: c.x6,
                    children: (0, n.jsx)(s.Button, {
                        text: o.intl.string(o.t["ETE/oC"]),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: p,
                    }),
                }),
        ],
    });
}
