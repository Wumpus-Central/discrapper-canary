n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(397927),
    r = n(780964),
    o = n(840065),
    d = n(975571),
    c = n(927578),
    u = n(526292),
    _ = n(788868),
    m = n(652215),
    g = n(985018),
    A = n(158793);
let h = (e) => {
    let t,
        n,
        { premiumSubscription: s, className: h, textColor: x } = e,
        p = (0, u.ar)();
    if (null == s) return null;
    let T = null != s ? c.Ay.getPremiumPlanItem(s) : null;
    if (
        (c.Ay.isBoostOnlySubscription(s)
            ? (t = g.intl.string(g.t.Uj0md3))
            : null != T && (t = c.Ay.getTierDisplayNameByPlanId(T.planId)),
        null == t)
    )
        return null;
    let E = () => (0, o.openUserSettings)(r.X.SUBSCRIPTIONS_PANEL),
        S = (null != T ? c.Ay.getSkuIdForPlan(T.planId) : null) === _.pe.TIER_1;
    return (
        (n = null != x ? x : p ? "always-white" : "text-default"),
        (0, i.jsxs)(a.ZpM, {
            className: l()(A.kL, h, { [A.He]: p }),
            type: a.ZpM.Types.CUSTOM,
            children: [
                (0, i.jsx)(a.EpV, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: l()(A.Kk, { [A.Pt]: p }),
                }),
                (0, i.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    color: n,
                    children: S
                        ? g.intl.format(g.t["tYuv+T"], {
                              helpdeskArticle: d.A.getArticleURL(m.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: E,
                          })
                        : g.intl.format(g.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: E }),
                }),
            ],
        })
    );
};
