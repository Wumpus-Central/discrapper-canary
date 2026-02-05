n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(397927),
    l = n(366999),
    o = n(927578),
    c = n(788868),
    d = n(985018),
    u = n(802937);
function _(e) {
    let { showChargingUpState: t, rowValueText: n, endsAt: s, fractionalState: l, activationDate: o } = e,
        _ = t ? d.intl.string(d.t["hT6i/0"]) : d.intl.string(d.t["3G0CTC"]),
        m = t
            ? void 0 === o
                ? null
                : d.intl.format(d.t["0Vwb/l"], { activateDate: o })
            : l === c.xc.FP_SUB_PAUSED
              ? d.intl.format(d.t.MMvaIG, { resumeDate: s.toDate() })
              : null,
        A = r()({ [u.Hs]: t, [u.mT]: !t }),
        g = r()({ [u.CQ]: t, [u.ZM]: !t }),
        E = r()({ [u.EM]: !t });
    return (0, i.jsxs)("div", {
        className: u.r6,
        children: [
            (0, i.jsxs)("div", {
                className: u.Nv,
                children: [
                    (0, i.jsx)(a.Heading, { variant: "heading-md/semibold", className: E, children: _ }),
                    null !== m && (0, i.jsx)(a.Text, { variant: "text-sm/normal", children: m }),
                ],
            }),
            (0, i.jsx)("div", {
                className: u.ZS,
                children: (0, i.jsx)("div", {
                    className: A,
                    children: (0, i.jsx)(a.Text, { variant: "text-sm/semibold", className: g, children: n }),
                }),
            }),
        ],
    });
}
let m = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: s } = e,
        c = (0, o.kX)(t),
        m = c.length > 0,
        A = (0, l.Ay)(t.endsAt, l.yE.SHORT_TIME),
        g = m ? c : A;
    return (0, i.jsx)("div", {
        children: (0, i.jsxs)("div", {
            className: r()(n, u.f8),
            children: [
                (0, i.jsx)("div", {
                    className: u.J_,
                    children: (0, i.jsxs)("div", {
                        className: u.Bh,
                        children: [
                            (0, i.jsx)("div", {
                                className: u.xt,
                                children: (0, i.jsx)(a.tvc, { size: "md", color: "white", className: u.T8 }),
                            }),
                            (0, i.jsx)("div", {
                                className: u.pt,
                                children: (0, i.jsx)(a.Heading, {
                                    variant: "heading-md/semibold",
                                    children: d.intl.string(d.t.DFMPWS),
                                }),
                            }),
                            (0, i.jsx)(a.Text, {
                                className: u.PJ,
                                variant: "text-md/semibold",
                                children: c.length > 0 ? c : d.intl.string(d.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(_, {
                    showChargingUpState: m,
                    rowValueText: g,
                    endsAt: t.endsAt,
                    fractionalState: t.fractionalState,
                    activationDate: s,
                }),
            ],
        }),
    });
};
