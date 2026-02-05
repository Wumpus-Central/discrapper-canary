n.d(t, { A: () => i });
var l = n(64700),
    a = n(723702);
function i(e) {
    let t = l.useRef(e);
    return (
        l.useEffect(() => {
            t.current = e;
        }, [e]),
        l.useCallback((e) => {
            let n = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
                l = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey),
                { disabled: i = !1, onSubmit: r } = t.current;
            "enter" === e.key.toLowerCase() && ("macos" === (0, a.getOS)() ? l : n) && !i && (e.preventDefault(), r());
        }, [])
    );
}
