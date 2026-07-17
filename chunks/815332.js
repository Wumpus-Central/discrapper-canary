e.d(t, { A: () => h });
var i = e(627968),
    s = e(64700),
    a = e(989349),
    r = e.n(a),
    l = e(793574),
    c = e(688810),
    u = e(277984),
    o = e(599941),
    d = e(322092),
    m = e(375708);
function h(n) {
    let { groupListingId: t, subscription: e, className: a } = n,
        { analyticsLocations: h } = (0, c.Ay)(l.A.PENDING_PLAN_CHANGE_NOTICE),
        {
            resetRenewalMutation: x,
            submitting: p,
            error: f,
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
        g = (0, o.cY)(t, { includeSoftDeleted: !0 }),
        { currentListing: j, nextListing: v } = s.useMemo(() => {
            if (e?.renewalMutations == null) return { currentListing: void 0, nextListing: void 0 };
            let n = e.items[0].planId,
                t = e.renewalMutations.items[0].planId;
            return {
                currentListing: g.find((t) => t.subscription_plans[0].id === n),
                nextListing: g.find((n) => n.subscription_plans[0].id === t),
            };
        }, [e, g]);
    if (null == e || null == j || null == v) return null;
    let N = r()(e.currentPeriodEnd).format("MMM DD, YYYY");
    return (0, i.jsx)(d.A, {
        message: m.intl.format(m.t.chw89X, { currentListing: j.name, nextListing: v.name, changeDate: N }),
        error: f?.message,
        onClick: function () {
            if (null != e) return x(e);
        },
        submitting: p,
        ctaMessage: m.intl.string(m.t.De4wI8),
        className: a,
    });
}
