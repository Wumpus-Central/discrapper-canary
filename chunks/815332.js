e.d(t, { A: () => h });
var i = e(627968),
    s = e(64700),
    a = e(989349),
    r = e.n(a),
    l = e(793574),
    c = e(688810),
    u = e(753390),
    o = e(599941),
    d = e(322092),
    m = e(375708);
function h(n) {
    let { groupListingId: t, subscription: e, className: a } = n,
        { analyticsLocations: h } = (0, c.Ay)(l.A.PENDING_PLAN_CHANGE_NOTICE),
        {
            resetRenewalMutation: x,
            submitting: p,
            error: g,
        } = (function (n) {
            let [t, e] = s.useState(!1),
                [i, a] = s.useState(null);
            return {
                resetRenewalMutation: async function (t) {
                    e(!0), a(null);
                    try {
                        await (0, u.ZK)(t, n);
                    } catch (n) {
                        a(n);
                    } finally {
                        e(!1);
                    }
                },
                submitting: t,
                error: i,
            };
        })(h),
        f = (0, o.cY)(t, { includeSoftDeleted: !0 }),
        { currentListing: j, nextListing: v } = s.useMemo(() => {
            if (e?.renewalMutations == null) return { currentListing: void 0, nextListing: void 0 };
            let n = e.items[0].planId,
                t = e.renewalMutations.items[0].planId;
            return {
                currentListing: f.find((t) => t.subscription_plans[0].id === n),
                nextListing: f.find((n) => n.subscription_plans[0].id === t),
            };
        }, [e, f]);
    if (null == e || null == j || null == v) return null;
    let N = r()(e.currentPeriodEnd).format("MMM DD, YYYY");
    return (0, i.jsx)(d.A, {
        message: m.intl.format(m.t.chw89X, { currentListing: j.name, nextListing: v.name, changeDate: N }),
        error: g?.message,
        onClick: () => x(e),
        submitting: p,
        ctaMessage: m.intl.string(m.t.De4wI8),
        className: a,
    });
}
