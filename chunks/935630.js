n.d(t, { A: () => a });
var r = n(64700);
function a() {
    let [e, t] = r.useState(null),
        n = r.useRef(null);
    return (
        r.useEffect(() => {
            null != e && null != n.current && n.current.scrollIntoView({ behavior: "smooth" });
        }, [e]),
        { purchaseError: e, setPurchaseError: t, purchaseErrorBlockRef: n }
    );
}
