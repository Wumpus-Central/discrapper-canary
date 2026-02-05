n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    r = n(989349),
    a = n.n(r),
    l = n(384904),
    o = n(793574),
    c = n(688810),
    d = n(599941),
    u = n(322092),
    _ = n(985018);
function m(e) {
    let { groupListingId: t, subscription: n, className: r } = e,
        { analyticsLocations: m } = (0, c.Ay)(o.A.PENDING_PLAN_CHANGE_NOTICE),
        {
            resetRenewalMutation: A,
            submitting: g,
            error: E,
        } = ((e) => {
            let [t, n] = s.useState(!1),
                [i, r] = s.useState(null);
            return {
                resetRenewalMutation: async (t) => {
                    n(!0), r(null);
                    try {
                        await (0, l.ZK)(t, e);
                    } catch (e) {
                        r(e);
                    } finally {
                        n(!1);
                    }
                },
                submitting: t,
                error: i,
            };
        })(m),
        h = (0, d.cY)(t, { includeSoftDeleted: !0 }),
        { currentListing: p, nextListing: C } = s.useMemo(() => {
            if (n?.renewalMutations == null) return { currentListing: void 0, nextListing: void 0 };
            let e = n.items[0].planId,
                t = n.renewalMutations.items[0].planId;
            return {
                currentListing: h.find((t) => t.subscription_plans[0].id === e),
                nextListing: h.find((e) => e.subscription_plans[0].id === t),
            };
        }, [n, h]);
    if (null == n || null == p || null == C) return null;
    let x = a()(n.currentPeriodEnd).format("MMM DD, YYYY");
    return (0, i.jsx)(u.A, {
        message: _.intl.format(_.t.chw89X, { currentListing: p.name, nextListing: C.name, changeDate: x }),
        error: E?.message,
        onClick: () => A(n),
        submitting: g,
        ctaMessage: _.intl.string(_.t.De4wI8),
        className: r,
    });
}
