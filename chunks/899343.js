"use strict";
n.d(t, { f: () => a });
var r = n(64700),
    i = n(166532),
    s = n(566980);
function a(e) {
    let { purchaseState: t, currentStep: n, initialScene: a, purchaseScene: o, errorScene: l, successScene: u } = e,
        [c, d] = (0, r.useState)(a);
    return (
        (0, r.useEffect)(() => {
            t === s.h.PURCHASING ? d(o) : t === s.h.FAIL && d(l);
        }, [t, o, l]),
        (0, r.useEffect)(() => {
            n === i.pn.CONFIRM && d(u);
        }, [n, u]),
        [c, d]
    );
}
