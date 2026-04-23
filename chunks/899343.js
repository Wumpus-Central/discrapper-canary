n.d(t, { f: () => o });
var r = n(64700),
    a = n(166532),
    i = n(566980);
function o(e) {
    let { purchaseState: t, currentStep: n, initialScene: o, purchaseScene: l, errorScene: s, successScene: d } = e,
        [u, c] = (0, r.useState)(o);
    return (
        (0, r.useEffect)(() => {
            t === i.h.PURCHASING ? c(l) : t === i.h.FAIL && c(s);
        }, [t, l, s]),
        (0, r.useEffect)(() => {
            n === a.pn.CONFIRM && c(d);
        }, [n, d]),
        [u, c]
    );
}
