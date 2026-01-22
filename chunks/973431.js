n.d(t, { A: () => a });
var r = n(64700),
    l = n(723702);
function a(e) {
    let t = r.useRef(e);
    return (
        r.useEffect(() => {
            t.current = e;
        }, [e]),
        r.useCallback((e) => {
            let n = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
                r = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey),
                { disabled: a = !1, onSubmit: i } = t.current;
            "enter" === e.key.toLowerCase() && ("macos" === (0, l.getOS)() ? r : n) && !a && (e.preventDefault(), i());
        }, [])
    );
}
