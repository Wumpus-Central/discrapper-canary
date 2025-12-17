n.d(t, { Z: () => a }), n(953529);
var r = n(473749);
let i = Symbol();
function a(e, t) {
    let n = r.useRef(i),
        a = r.useRef(t);
    return r.useSyncExternalStore(
        r.useCallback(
            (t) =>
                e(() => {
                    (n.current = i), t();
                }),
            [e],
        ),
        r.useCallback(
            () => (
                a.current !== t && ((a.current = t), (n.current = i)), n.current === i && (n.current = t()), n.current
            ),
            [t],
        ),
    );
}
