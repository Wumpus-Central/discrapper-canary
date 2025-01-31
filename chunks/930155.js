e.d(t, { H: () => s }), e(47120), e(411104);
var l = e(192379),
    i = e(442837),
    a = e(821849),
    r = e(509545);
function s(n) {
    let [t, e] = l.useState(!1),
        s = (0, i.Wu)([r.Z], () => r.Z.getForSKU(n), [n]),
        u = (0, i.e7)([r.Z], () => r.Z.isFetchingForSKU(n), [n]);
    return (
        l.useEffect(() => {
            r.Z.isFetchingForSKU(n) ||
                (e(!1),
                (0, a.GZ)(n)
                    .then(() => {
                        e(!1);
                    })
                    .catch(() => {
                        e(!0);
                    }));
        }, [n]),
        {
            data: s,
            isLoading: u,
            error: t ? Error('SubscriptionPlans failed to fetch') : void 0
        }
    );
}
