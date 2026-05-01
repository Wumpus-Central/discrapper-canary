n.d(t, { A: () => r });
var o = n(64700);
function r() {
    let [e, t] = o.useState(null),
        n = o.useRef(null);
    return (
        o.useEffect(() => {
            null != e && null != n.current && n.current.scrollIntoView({ behavior: "smooth" });
        }, [e]),
        { purchaseError: e, setPurchaseError: t, purchaseErrorBlockRef: n }
    );
}
