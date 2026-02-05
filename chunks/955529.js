"use strict";
n.d(t, { A: () => s });
var r = n(64700),
    i = n(311907),
    a = n(97352);
function s() {
    let [e, t] = r.useState(void 0),
        [n, s] = r.useState(void 0),
        [o, l] = r.useState(void 0);
    return {
        selectedSkuId: e,
        selectedPlan: (0, i.bG)([a.A], () => (null != n ? a.A.get(n) : null)),
        setSelectedSkuId: t,
        setSelectedPlanId: s,
        selectedPlanNotification: o,
        setSelectedPlanNotification: l,
    };
}
