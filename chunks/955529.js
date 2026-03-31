"use strict";
n.d(t, { A: () => a });
var r = n(64700),
    i = n(311907),
    s = n(97352);
function a() {
    let [e, t] = r.useState(void 0),
        [n, a] = r.useState(void 0);
    return {
        selectedSkuId: e,
        selectedPlan: (0, i.bG)([s.A], () => (null != n ? s.A.get(n) : null)),
        setSelectedSkuId: t,
        setSelectedPlanId: a,
    };
}
