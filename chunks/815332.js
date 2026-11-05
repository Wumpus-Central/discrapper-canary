var i = t(477900),
    s = t(582128),
    r = t(536637),
    a = t.n(r),
    l = t(793574),
    c = t(688810),
    u = t(781300),
    o = t(599941),
    d = t(322092),
    m = t(792996);
t.d(
    e,
    {},
    {
        A: function (n) {
            let { groupListingId: e, subscription: t, className: r } = n,
                { analyticsLocations: h } = (0, c.Ay)(l.A.PENDING_PLAN_CHANGE_NOTICE),
                {
                    resetRenewalMutation: p,
                    submitting: x,
                    error: f,
                } = (function (n) {
                    let [e, t] = s.useState(!1),
                        [i, r] = s.useState(null);
                    return {
                        resetRenewalMutation: async function (e) {
                            (t(!0), r(null));
                            try {
                                await (0, u.ZK)(e, n);
                            } catch (n) {
                                r(n);
                            } finally {
                                t(!1);
                            }
                        },
                        submitting: e,
                        error: i,
                    };
                })(h),
                g = (0, o.cY)(e, { includeSoftDeleted: !0 }),
                { currentListing: j, nextListing: v } = s.useMemo(() => {
                    if (t?.renewalMutations == null) return { currentListing: void 0, nextListing: void 0 };
                    let n = t.items[0].planId,
                        e = t.renewalMutations.items[0].planId;
                    return {
                        currentListing: g.find((e) => e.subscription_plans[0].id === n),
                        nextListing: g.find((n) => n.subscription_plans[0].id === e),
                    };
                }, [t, g]);
            if (null == t || null == j || null == v) return null;
            let N = a()(t.currentPeriodEnd).format("MMM DD, YYYY");
            return (0, i.jsx)(d.A, {
                message: m.intl.format(m.t.chw89X, { currentListing: j.name, nextListing: v.name, changeDate: N }),
                error: f?.message,
                onClick: function () {
                    if (null != t) return p(t);
                },
                submitting: x,
                ctaMessage: m.intl.string(m.t.De4wI8),
                className: r,
            });
        },
    },
);
