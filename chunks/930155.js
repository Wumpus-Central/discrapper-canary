e.d(t, {
    H: function () {
        return a;
    }
}),
    e(47120),
    e(411104);
var i = e(192379),
    l = e(442837),
    r = e(821849),
    u = e(509545);
function a(n) {
    let [t, e] = i.useState(!1),
        a = (0, l.Wu)([u.Z], () => u.Z.getForSKU(n), [n]),
        o = (0, l.e7)([u.Z], () => u.Z.isFetchingForSKU(n), [n]);
    return (
        i.useEffect(() => {
            !u.Z.isFetchingForSKU(n) &&
                (e(!1),
                (0, r.GZ)(n)
                    .then(() => {
                        e(!1);
                    })
                    .catch(() => {
                        e(!0);
                    }));
        }, [n]),
        {
            data: a,
            isLoading: o,
            error: t ? Error('SubscriptionPlans failed to fetch') : void 0
        }
    );
}
