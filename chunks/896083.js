n.d(t, { F: () => a }), n(47120);
var r = n(192379),
    i = n(295141);
let a = () => {
    let [e, t] = r.useState(!1),
        [n, a] = r.useState(null);
    return {
        loading: e,
        error: n,
        getTrialPurchaseEligibility: r.useCallback(async (e, n, r) => {
            t(!0), a(null);
            try {
                return await (0, i.LB)(e, n, r);
            } catch (e) {
                a(e);
            } finally {
                t(!1);
            }
        }, [])
    };
};
