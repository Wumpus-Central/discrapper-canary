n.d(t, { H: () => s });
var r = n(442837),
    i = n(821849),
    a = n(509545),
    o = n(981631);
let s = (0, r.Kb)(a.Z, {
    getQueryId: o.McO.SUBSCRIPTION_PLAN,
    get: (e) => {
        let t = a.Z.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (0, i.GZ)(e),
    getIsLoading: (e) => a.Z.isFetchingForSKU(e),
});
