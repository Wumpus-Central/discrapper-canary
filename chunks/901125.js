n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(780964),
    l = n(840065),
    c = n(975571),
    u = n(927578),
    d = n(526292),
    f = n(788868),
    p = n(652215),
    _ = n(985018),
    h = n(158793);
let m = (e) => {
    let t,
        n,
        { premiumSubscription: i, className: m, textColor: g } = e,
        E = (0, d.ar)();
    if (null == i) return null;
    let b = null != i ? u.Ay.getPremiumPlanItem(i) : null;
    if (
        (u.Ay.isBoostOnlySubscription(i)
            ? (t = _.intl.string(_.t.Uj0md3))
            : null != b && (t = u.Ay.getTierDisplayNameByPlanId(b.planId)),
        null == t)
    )
        return null;
    let y = () => (0, l.openUserSettings)(o.X.SUBSCRIPTIONS_PANEL, { section: p.nc_.SUBSCRIPTIONS }),
        O = (null != b ? u.Ay.getSkuIdForPlan(b.planId) : null) === f.pe.TIER_1;
    return (
        (n = null != g ? g : E ? "always-white" : "text-default"),
        (0, r.jsxs)(s.ZpM, {
            className: a()(h.kL, m, { [h.He]: E }),
            type: s.ZpM.Types.CUSTOM,
            children: [
                (0, r.jsx)(s.EpV, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: a()(h.Kk, { [h.Pt]: E }),
                }),
                (0, r.jsx)(s.Text, {
                    variant: "text-sm/medium",
                    color: n,
                    children: O
                        ? _.intl.format(_.t["tYuv+T"], {
                              helpdeskArticle: c.A.getArticleURL(p.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: y,
                          })
                        : _.intl.format(_.t.xHRgU2, {
                              subscriptionName: t,
                              onSubscriptionsClick: y,
                          }),
                }),
            ],
        })
    );
};
