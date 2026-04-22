n.d(t, { f: () => i });
var a = n(64700),
    r = n(166532),
    l = n(566980);
function i(e) {
    let { purchaseState: t, currentStep: n, initialScene: i, purchaseScene: s, errorScene: o, successScene: u } = e,
        [c, d] = (0, a.useState)(i);
    return (
        (0, a.useEffect)(() => {
            t === l.h.PURCHASING ? d(s) : t === l.h.FAIL && d(o);
        }, [t, s, o]),
        (0, a.useEffect)(() => {
            n === r.pn.CONFIRM && d(u);
        }, [n, u]),
        [c, d]
    );
}
