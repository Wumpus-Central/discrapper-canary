"use strict";
n.d(t, { f: () => a });
var i = n(64700),
    r = n(166532),
    s = n(566980);
function a(e) {
    let { purchaseState: t, currentStep: n, initialScene: a, purchaseScene: o, errorScene: l, successScene: u } = e,
        [c, d] = (0, i.useState)(a);
    return (
        (0, i.useEffect)(() => {
            t === s.h.PURCHASING ? d(o) : t === s.h.FAIL && d(l);
        }, [t, o, l]),
        (0, i.useEffect)(() => {
            n === r.pn.CONFIRM && d(u);
        }, [n, u]),
        [c, d]
    );
}
