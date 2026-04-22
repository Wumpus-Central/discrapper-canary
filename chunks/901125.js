s.d(t, { A: () => f });
var r = s(627968);
s(64700);
var a = s(503698),
    i = s.n(a),
    n = s(359778),
    l = s(695366),
    o = s(834730),
    c = s(780964),
    d = s(858897),
    m = s(975571),
    u = s(927578),
    _ = s(526292),
    x = s(788868),
    p = s(652215),
    g = s(985018),
    h = s(824888);
let f = (e) => {
    let t,
        s,
        { premiumSubscription: a, className: f, textColor: C } = e,
        b = (0, _.ar)();
    if (null == a) return null;
    let j = null != a ? u.Ay.getPremiumPlanItem(a) : null;
    if (
        (u.Ay.isBoostOnlySubscription(a)
            ? (t = g.intl.string(g.t.Uj0md3))
            : null != j && (t = u.Ay.getTierDisplayNameByPlanId(j.planId)),
        null == t)
    )
        return null;
    let A = () => (0, d.openUserSettings)(c.X.SUBSCRIPTIONS_PANEL),
        N = (null != j ? u.Ay.getSkuIdForPlan(j.planId) : null) === x.pe.TIER_1;
    return (
        (s = null != C ? C : b ? "always-white" : "text-default"),
        (0, r.jsxs)(n.Z, {
            className: i()(h.kL, f, { [h.He]: b }),
            type: n.Z.Types.CUSTOM,
            children: [
                (0, r.jsx)(l.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: i()(h.Kk, { [h.Pt]: b }),
                }),
                (0, r.jsx)(o.E, {
                    variant: "text-sm/medium",
                    color: s,
                    children: N
                        ? g.intl.format(g.t["tYuv+T"], {
                              helpdeskArticle: m.A.getArticleURL(p.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: A,
                          })
                        : g.intl.format(g.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: A }),
                }),
            ],
        })
    );
};
