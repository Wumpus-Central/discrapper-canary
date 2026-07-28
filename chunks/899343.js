n.d(t, { f: () => a });
var s = n(582128),
    r = n(166532),
    i = n(566980);
function a(e) {
    let { purchaseState: t, currentStep: n, initialScene: a, purchaseScene: l, errorScene: u, successScene: c } = e,
        [o, d] = (0, s.useState)(a);
    return (
        (0, s.useEffect)(() => {
            t === i.h.PURCHASING ? d(l) : t === i.h.FAIL && d(u);
        }, [t, l, u]),
        (0, s.useEffect)(() => {
            n === r.pn.CONFIRM && d(c);
        }, [n, c]),
        [o, d]
    );
}
