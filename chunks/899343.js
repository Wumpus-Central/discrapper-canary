t.d(s, { f: () => a });
var n = t(582128),
    r = t(166532),
    i = t(566980);
function a(e) {
    let { purchaseState: s, currentStep: t, initialScene: a, purchaseScene: l, errorScene: c, successScene: u } = e,
        [o, d] = (0, n.useState)(a);
    return (
        (0, n.useEffect)(() => {
            s === i.h.PURCHASING ? d(l) : s === i.h.FAIL && d(c);
        }, [s, l, c]),
        (0, n.useEffect)(() => {
            t === r.pn.CONFIRM && d(u);
        }, [t, u]),
        [o, d]
    );
}
