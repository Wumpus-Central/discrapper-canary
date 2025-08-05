(n.d(t, { H: () => s }), n(388685), n(415506));
var r = n(73800),
    i = n(442837),
    a = n(821849),
    o = n(509545);
function s(e) {
    let [t, n] = r.useState(!1),
        s = (0, i.Wu)([o.Z], () => o.Z.getForSKU(e), [e]),
        l = (0, i.e7)([o.Z], () => o.Z.isFetchingForSKU(e), [e]);
    return (
        r.useEffect(() => {
            o.Z.isFetchingForSKU(e) ||
                (n(!1),
                (0, a.GZ)(e)
                    .then(() => {
                        n(!1);
                    })
                    .catch(() => {
                        n(!0);
                    }));
        }, [e]),
        {
            data: s,
            isLoading: l,
            error: t ? Error('SubscriptionPlans failed to fetch') : void 0
        }
    );
}
