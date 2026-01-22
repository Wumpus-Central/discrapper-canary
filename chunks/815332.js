n.d(t, { A: () => h }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(989349),
    s = n.n(a),
    o = n(384904),
    l = n(793574),
    c = n(688810),
    u = n(599941),
    d = n(322092),
    f = n(985018);
let p = "MMM DD, YYYY",
    _ = (e) => {
        let [t, n] = i.useState(!1),
            [r, a] = i.useState(null);
        return {
            resetRenewalMutation: async (t) => {
                n(!0), a(null);
                try {
                    await (0, o.ZK)(t, e);
                } catch (e) {
                    a(e);
                } finally {
                    n(!1);
                }
            },
            submitting: t,
            error: r,
        };
    };
function h(e) {
    let { groupListingId: t, subscription: n, className: a } = e,
        { analyticsLocations: o } = (0, c.Ay)(l.A.PENDING_PLAN_CHANGE_NOTICE),
        { resetRenewalMutation: h, submitting: m, error: g } = _(o),
        E = (0, u.cY)(t, { includeSoftDeleted: !0 }),
        { currentListing: b, nextListing: y } = i.useMemo(() => {
            if ((null == n ? void 0 : n.renewalMutations) == null)
                return {
                    currentListing: void 0,
                    nextListing: void 0,
                };
            let e = n.items[0].planId,
                t = n.renewalMutations.items[0].planId;
            return {
                currentListing: E.find((t) => t.subscription_plans[0].id === e),
                nextListing: E.find((e) => e.subscription_plans[0].id === t),
            };
        }, [n, E]);
    if (null == n || null == b || null == y) return null;
    let O = () => h(n),
        A = s()(n.currentPeriodEnd).format(p);
    return (0, r.jsx)(d.A, {
        message: f.intl.format(f.t.chw89X, {
            currentListing: b.name,
            nextListing: y.name,
            changeDate: A,
        }),
        error: null == g ? void 0 : g.message,
        onClick: O,
        submitting: m,
        ctaMessage: f.intl.string(f.t.De4wI8),
        className: a,
    });
}
