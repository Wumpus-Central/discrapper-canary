s.d(t, { f: () => i });
var n = s(582128),
    r = s(166532),
    a = s(566980);
function i(e) {
    let { purchaseState: t, currentStep: s, initialScene: i, purchaseScene: l, errorScene: c, successScene: u } = e,
        [o, d] = (0, n.useState)(i);
    return (
        (0, n.useEffect)(() => {
            t === a.h.PURCHASING ? d(l) : t === a.h.FAIL && d(c);
        }, [t, l, c]),
        (0, n.useEffect)(() => {
            s === r.pn.CONFIRM && d(u);
        }, [s, u]),
        [o, d]
    );
}
