n.d(t, { F: () => a }), n(47120);
var i = n(192379),
    l = n(295141);
let a = () => {
    let [e, t] = i.useState(!1),
        [n, a] = i.useState(null);
    return {
        loading: e,
        error: n,
        getTrialPurchaseEligibility: i.useCallback(async (e, n, i) => {
            t(!0), a(null);
            try {
                return await (0, l.LB)(e, n, i);
            } catch (e) {
                a(e);
            } finally {
                t(!1);
            }
        }, [])
    };
};
