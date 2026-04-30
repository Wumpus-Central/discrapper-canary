n.d(t, { A: () => l });
var o = n(64700),
    r = n(94420),
    a = n(166532),
    i = n(566980);
function l(e) {
    let { purchaseState: t, setPurchaseState: n } = (0, r.t4)((e) => ({
        purchaseState: e.purchaseState,
        setPurchaseState: e.setPurchaseState,
    }));
    return (
        o.useEffect(() => {
            null != e && e !== a.pn.REVIEW && t !== i.h.WAITING && t !== i.h.COMPLETED && n(i.h.WAITING);
        }, [e, t, n]),
        [t, n]
    );
}
