n.d(t, { A: () => i });
var a = n(64700),
    l = n(723702);
function i(e) {
    let t = a.useRef(e);
    return (
        a.useEffect(() => {
            t.current = e;
        }, [e]),
        a.useCallback((e) => {
            let n = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
                a = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey),
                { disabled: i = !1, onSubmit: r } = t.current;
            "enter" === e.key.toLowerCase() && ("macos" === (0, l.getOS)() ? a : n) && !i && (e.preventDefault(), r());
        }, [])
    );
}
