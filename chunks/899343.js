s.d(n, { f: () => l });
var t = s(64700),
    r = s(166532),
    i = s(566980);
function l(e) {
    let { purchaseState: n, currentStep: s, initialScene: l, purchaseScene: a, errorScene: c, successScene: u } = e,
        [d, o] = (0, t.useState)(l);
    return (
        (0, t.useEffect)(() => {
            n === i.h.PURCHASING ? o(a) : n === i.h.FAIL && o(c);
        }, [n, a, c]),
        (0, t.useEffect)(() => {
            s === r.pn.CONFIRM && o(u);
        }, [s, u]),
        [d, o]
    );
}
