n.d(t, { A: () => a });
var i = n(64700),
    l = n(884362),
    r = n(311907),
    s = n(775602);
function a(e, t, n) {
    let a = (0, r.bG)([s.A], () => s.A.keyboardModeEnabled),
        o = i.useCallback(
            (e) => {
                let n = document.querySelector(e),
                    i = t.current;
                null != n && null != i && (n.focus(), i.scrollIntoViewNode({ node: n, padding: 80 }));
            },
            [t],
        ),
        E = i.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    if (null == n) return e();
                    n.scrollTo({ to: 0, callback: () => requestAnimationFrame(() => e()) });
                }),
            [t],
        ),
        c = i.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    if (null == n) return e();
                    n.scrollTo({ to: Number.MAX_SAFE_INTEGER, callback: () => requestAnimationFrame(() => e()) });
                }),
            [t],
        );
    return (0, l.Ay)({
        id: e,
        isEnabled: a,
        setFocus: o,
        scrollToStart: E,
        scrollToEnd: c,
        orientation: n?.orientation,
    });
}
