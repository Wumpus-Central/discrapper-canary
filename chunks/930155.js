(n.d(e, { H: () => a }), n(388685), n(415506));
var i = n(73800),
    r = n(442837),
    l = n(821849),
    o = n(509545);
function a(t) {
    let [e, n] = i.useState(!1),
        a = (0, r.Wu)([o.Z], () => o.Z.getForSKU(t), [t]),
        s = (0, r.e7)([o.Z], () => o.Z.isFetchingForSKU(t), [t]);
    return (
        i.useEffect(() => {
            o.Z.isFetchingForSKU(t) ||
                (n(!1),
                (0, l.GZ)(t)
                    .then(() => {
                        n(!1);
                    })
                    .catch(() => {
                        n(!0);
                    }));
        }, [t]),
        {
            data: a,
            isLoading: s,
            error: e ? Error('SubscriptionPlans failed to fetch') : void 0
        }
    );
}
