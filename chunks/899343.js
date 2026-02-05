"use strict";
n.d(t, { f: () => s });
var r = n(64700),
    i = n(166532),
    a = n(566980);
function s(e) {
    let { purchaseState: t, currentStep: n, initialScene: s, purchaseScene: o, errorScene: l, successScene: u } = e,
        [c, d] = (0, r.useState)(s);
    return (
        (0, r.useEffect)(() => {
            t === a.h.PURCHASING ? d(o) : t === a.h.FAIL && d(l);
        }, [t, o, l]),
        (0, r.useEffect)(() => {
            n === i.pn.CONFIRM && d(u);
        }, [n, u]),
        [c, d]
    );
}
