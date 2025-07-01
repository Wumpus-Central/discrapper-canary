(n.d(t, { F: () => l }), n(388685));
var r = n(73800),
    i = n(295141);
let l = () => {
    let [e, t] = r.useState(!1),
        [n, l] = r.useState(null);
    return {
        loading: e,
        error: n,
        getTrialPurchaseEligibility: r.useCallback(async (e, n, r) => {
            (t(!0), l(null));
            try {
                return await (0, i.LB)(e, n, r);
            } catch (e) {
                l(e);
            } finally {
                t(!1);
            }
        }, [])
    };
};
