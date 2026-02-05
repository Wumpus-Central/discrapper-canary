n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(397927),
    l = n(780964),
    o = n(840065),
    c = n(975571),
    d = n(927578),
    u = n(526292),
    _ = n(788868),
    m = n(652215),
    A = n(985018),
    g = n(158793);
let E = (e) => {
    let t,
        n,
        { premiumSubscription: s, className: E, textColor: h } = e,
        p = (0, u.ar)();
    if (null == s) return null;
    let C = null != s ? d.Ay.getPremiumPlanItem(s) : null;
    if (
        (d.Ay.isBoostOnlySubscription(s)
            ? (t = A.intl.string(A.t.Uj0md3))
            : null != C && (t = d.Ay.getTierDisplayNameByPlanId(C.planId)),
        null == t)
    )
        return null;
    let x = () => (0, o.openUserSettings)(l.X.SUBSCRIPTIONS_PANEL, { section: m.nc_.SUBSCRIPTIONS }),
        T = (null != C ? d.Ay.getSkuIdForPlan(C.planId) : null) === _.pe.TIER_1;
    return (
        (n = null != h ? h : p ? "always-white" : "text-default"),
        (0, i.jsxs)(a.ZpM, {
            className: r()(g.kL, E, { [g.He]: p }),
            type: a.ZpM.Types.CUSTOM,
            children: [
                (0, i.jsx)(a.EpV, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: r()(g.Kk, { [g.Pt]: p }),
                }),
                (0, i.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    color: n,
                    children: T
                        ? A.intl.format(A.t["tYuv+T"], {
                              helpdeskArticle: c.A.getArticleURL(m.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: x,
                          })
                        : A.intl.format(A.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: x }),
                }),
            ],
        })
    );
};
