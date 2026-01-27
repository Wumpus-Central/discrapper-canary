n.d(t, {
    A: () => p,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(397927),
    a = n(366999),
    o = n(927578),
    c = n(788868),
    d = n(985018),
    u = n(802937);

function _(e) {
    let { showChargingUpState: t, rowValueText: n, endsAt: i, fractionalState: a, activationDate: o } = e,
        _ = t ? d.intl.string(d.t["hT6i/0"]) : d.intl.string(d.t["3G0CTC"]),
        p = t
            ? void 0 === o
                ? null
                : d.intl.format(d.t["0Vwb/l"], {
                      activateDate: o,
                  })
            : a === c.xc.FP_SUB_PAUSED
              ? d.intl.format(d.t.MMvaIG, {
                    resumeDate: i.toDate(),
                })
              : null,
        m = l()({
            [u.Hs]: t,
            [u.mT]: !t,
        }),
        g = l()({
            [u.CQ]: t,
            [u.ZM]: !t,
        }),
        A = l()({
            [u.EM]: !t,
        });
    return (0, r.jsxs)("div", {
        className: u.r6,
        children: [
            (0, r.jsxs)("div", {
                className: u.Nv,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-md/semibold",
                        className: A,
                        children: _,
                    }),
                    null !== p &&
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: p,
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: u.ZS,
                children: (0, r.jsx)("div", {
                    className: m,
                    children: (0, r.jsx)(s.Text, {
                        variant: "text-sm/semibold",
                        className: g,
                        children: n,
                    }),
                }),
            }),
        ],
    });
}
let p = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i } = e,
        c = (0, o.kX)(t),
        p = c.length > 0,
        m = (0, a.Ay)(t.endsAt, a.yE.SHORT_TIME),
        g = p ? c : m;
    return (0, r.jsx)("div", {
        children: (0, r.jsxs)("div", {
            className: l()(n, u.f8),
            children: [
                (0, r.jsx)("div", {
                    className: u.J_,
                    children: (0, r.jsxs)("div", {
                        className: u.Bh,
                        children: [
                            (0, r.jsx)("div", {
                                className: u.xt,
                                children: (0, r.jsx)(s.tvc, {
                                    size: "md",
                                    color: "white",
                                    className: u.T8,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: u.pt,
                                children: (0, r.jsx)(s.Heading, {
                                    variant: "heading-md/semibold",
                                    children: d.intl.string(d.t.DFMPWS),
                                }),
                            }),
                            (0, r.jsx)(s.Text, {
                                className: u.PJ,
                                variant: "text-md/semibold",
                                children: c.length > 0 ? c : d.intl.string(d.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(_, {
                    showChargingUpState: p,
                    rowValueText: g,
                    endsAt: t.endsAt,
                    fractionalState: t.fractionalState,
                    activationDate: i,
                }),
            ],
        }),
    });
};
