t.d(s, { f: () => i });
var n = t(582128),
    r = t(166532),
    a = t(566980);
function i(e) {
    let { purchaseState: s, currentStep: t, initialScene: i, purchaseScene: l, errorScene: c, successScene: u } = e,
        [o, d] = (0, n.useState)(i);
    return (
        (0, n.useEffect)(() => {
            s === a.h.PURCHASING ? d(l) : s === a.h.FAIL && d(c);
        }, [s, l, c]),
        (0, n.useEffect)(() => {
            t === r.pn.CONFIRM && d(u);
        }, [t, u]),
        [o, d]
    );
}
