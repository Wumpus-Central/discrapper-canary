n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(366999),
    l = n(927578),
    c = n(788868),
    u = n(985018),
    d = n(802937);
function f(e) {
    return (0, r.jsxs)("div", {
        className: d.Bh,
        children: [
            (0, r.jsx)("div", {
                className: d.xt,
                children: (0, r.jsx)(s.tvc, {
                    size: "md",
                    color: "white",
                    className: d.T8,
                }),
            }),
            (0, r.jsx)("div", {
                className: d.pt,
                children: (0, r.jsx)(s.Heading, {
                    variant: "heading-md/semibold",
                    children: u.intl.string(u.t.DFMPWS),
                }),
            }),
            (0, r.jsx)(s.Text, {
                className: d.PJ,
                variant: "text-md/semibold",
                children: e.length > 0 ? e : u.intl.string(u.t["B66Z+f"]),
            }),
        ],
    });
}
function p(e) {
    let { showChargingUpState: t, rowValueText: n, endsAt: i, fractionalState: o, activationDate: l } = e,
        f = t ? u.intl.string(u.t["hT6i/0"]) : u.intl.string(u.t["3G0CTC"]),
        p = t
            ? void 0 === l
                ? null
                : u.intl.format(u.t["0Vwb/l"], { activateDate: l })
            : o === c.xc.FP_SUB_PAUSED
              ? u.intl.format(u.t.MMvaIG, { resumeDate: i.toDate() })
              : null,
        _ = a()({
            [d.Hs]: t,
            [d.mT]: !t,
        }),
        h = a()({
            [d.CQ]: t,
            [d.ZM]: !t,
        }),
        m = a()({ [d.EM]: !t });
    return (0, r.jsxs)("div", {
        className: d.r6,
        children: [
            (0, r.jsxs)("div", {
                className: d.Nv,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-md/semibold",
                        className: m,
                        children: f,
                    }),
                    null !== p &&
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: p,
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: d.ZS,
                children: (0, r.jsx)("div", {
                    className: _,
                    children: (0, r.jsx)(s.Text, {
                        variant: "text-sm/semibold",
                        className: h,
                        children: n,
                    }),
                }),
            }),
        ],
    });
}
let _ = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i } = e,
        s = (0, l.kX)(t),
        c = s.length > 0,
        u = (0, o.Ay)(t.endsAt, o.yE.SHORT_TIME),
        _ = c ? s : u;
    return (0, r.jsx)("div", {
        children: (0, r.jsxs)("div", {
            className: a()(n, d.f8),
            children: [
                (0, r.jsx)("div", {
                    className: d.J_,
                    children: f(s),
                }),
                (0, r.jsx)(p, {
                    showChargingUpState: c,
                    rowValueText: _,
                    endsAt: t.endsAt,
                    fractionalState: t.fractionalState,
                    activationDate: i,
                }),
            ],
        }),
    });
};
