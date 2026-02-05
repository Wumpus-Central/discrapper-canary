"use strict";
n.d(t, { A: () => i });
var r = n(64700);
function i() {
    let [e, t] = r.useState(null),
        n = r.useRef(null);
    return (
        r.useEffect(() => {
            null != e && null != n.current && n.current.scrollIntoView({ behavior: "smooth" });
        }, [e]),
        { purchaseError: e, setPurchaseError: t, purchaseErrorBlockRef: n }
    );
}
