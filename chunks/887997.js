n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    l = n(397927),
    r = n(366999),
    o = n(927578),
    c = n(788868),
    d = n(519412),
    u = n(985018),
    _ = n(802937);
function m(e) {
    let t,
        n,
        {
            showChargingUpState: s,
            rowValueText: r,
            endsAt: o,
            fractionalState: m,
            activationDate: A,
            hasPremiumGroup: g,
        } = e;
    g
        ? ((t = u.intl.string(d.default["/S02sx"])), (n = u.intl.string(d.default.OPJNST)))
        : s
          ? ((t = u.intl.string(u.t["hT6i/0"])),
            (n = null != A ? u.intl.format(u.t["0Vwb/l"], { activateDate: A }) : null))
          : ((t = u.intl.string(u.t["3G0CTC"])),
            (n = m === c.xc.FP_SUB_PAUSED ? u.intl.format(u.t.MMvaIG, { resumeDate: o.toDate() }) : null));
    let h = a()({ [_.Hs]: s, [_.mT]: !s }),
        x = a()({ [_.CQ]: s, [_.ZM]: !s }),
        p = a()({ [_.EM]: !s });
    return (0, i.jsxs)("div", {
        className: _.r6,
        children: [
            (0, i.jsxs)("div", {
                className: _.Nv,
                children: [
                    (0, i.jsx)(l.Heading, { variant: "heading-md/semibold", className: p, children: t }),
                    null !== n && (0, i.jsx)(l.Text, { variant: "text-sm/normal", children: n }),
                ],
            }),
            !g &&
                (0, i.jsx)("div", {
                    className: _.ZS,
                    children: (0, i.jsx)("div", {
                        className: h,
                        children: (0, i.jsx)(l.Text, { variant: "text-sm/semibold", className: x, children: r }),
                    }),
                }),
        ],
    });
}
let A = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: s, hasPremiumGroup: c } = e,
        d = (0, o.kX)(t),
        A = d.length > 0,
        g = (0, r.Ay)(t.endsAt, r.yE.SHORT_TIME),
        h = A ? d : g;
    return (0, i.jsx)("div", {
        children: (0, i.jsxs)("div", {
            className: a()(n, _.f8),
            children: [
                (0, i.jsx)("div", {
                    className: _.J_,
                    children: (0, i.jsxs)("div", {
                        className: _.Bh,
                        children: [
                            (0, i.jsx)("div", {
                                className: _.xt,
                                children: (0, i.jsx)(l.tvc, { size: "md", color: "white", className: _.T8 }),
                            }),
                            (0, i.jsx)("div", {
                                className: _.pt,
                                children: (0, i.jsx)(l.Heading, {
                                    variant: "heading-md/semibold",
                                    children: u.intl.string(u.t.DFMPWS),
                                }),
                            }),
                            (0, i.jsx)(l.Text, {
                                className: _.PJ,
                                variant: "text-md/semibold",
                                children: d.length > 0 ? d : u.intl.string(u.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(m, {
                    showChargingUpState: A,
                    rowValueText: h,
                    endsAt: t.endsAt,
                    fractionalState: t.fractionalState,
                    activationDate: s,
                    hasPremiumGroup: c,
                }),
            ],
        }),
    });
};
