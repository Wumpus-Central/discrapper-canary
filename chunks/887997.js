n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(403581),
    r = n(534514),
    o = n(834730),
    d = n(366999),
    u = n(927578),
    c = n(788868),
    g = n(466919),
    m = n(985018),
    _ = n(441924);
function A(e) {
    let t,
        n,
        {
            showChargingUpState: s,
            rowValueText: a,
            endsAt: d,
            fractionalState: u,
            activationDate: A,
            hasPremiumGroup: h,
        } = e;
    h
        ? ((t = m.intl.string(g.default["/S02sx"])), (n = m.intl.string(g.default.OPJNST)))
        : s
          ? ((t = m.intl.string(m.t["hT6i/0"])),
            (n = null != A ? m.intl.format(m.t["0Vwb/l"], { activateDate: A }) : null))
          : ((t = m.intl.string(m.t["3G0CTC"])),
            (n = u === c.xc.FP_SUB_PAUSED ? m.intl.format(m.t.MMvaIG, { resumeDate: d.toDate() }) : null));
    let p = l()({ [_.Hs]: s, [_.mT]: !s }),
        x = l()({ [_.CQ]: s, [_.ZM]: !s }),
        E = l()({ [_.EM]: !s });
    return (0, i.jsxs)("div", {
        className: _.r6,
        children: [
            (0, i.jsxs)("div", {
                className: _.Nv,
                children: [
                    (0, i.jsx)(r.D, { variant: "heading-md/semibold", className: E, children: t }),
                    null !== n && (0, i.jsx)(o.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
            !h &&
                (0, i.jsx)("div", {
                    className: _.ZS,
                    children: (0, i.jsx)("div", {
                        className: p,
                        children: (0, i.jsx)(o.E, { variant: "text-sm/semibold", className: x, children: a }),
                    }),
                }),
        ],
    });
}
let h = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: s, hasPremiumGroup: c } = e,
        g = (0, u.kX)(t),
        h = g.length > 0,
        p = (0, d.Ay)(t.endsAt, d.yE.SHORT_TIME),
        x = h ? g : p;
    return (0, i.jsx)("div", {
        children: (0, i.jsxs)("div", {
            className: l()(n, _.f8),
            children: [
                (0, i.jsx)("div", {
                    className: _.J_,
                    children: (0, i.jsxs)("div", {
                        className: _.Bh,
                        children: [
                            (0, i.jsx)("div", {
                                className: _.xt,
                                children: (0, i.jsx)(a.t, { size: "md", color: "white", className: _.T8 }),
                            }),
                            (0, i.jsx)("div", {
                                className: _.pt,
                                children: (0, i.jsx)(r.D, {
                                    variant: "heading-md/semibold",
                                    children: m.intl.string(m.t.DFMPWS),
                                }),
                            }),
                            (0, i.jsx)(o.E, {
                                className: _.PJ,
                                variant: "text-md/semibold",
                                children: g.length > 0 ? g : m.intl.string(m.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(A, {
                    showChargingUpState: h,
                    rowValueText: x,
                    endsAt: t.endsAt,
                    fractionalState: t.fractionalState,
                    activationDate: s,
                    hasPremiumGroup: c,
                }),
            ],
        }),
    });
};
