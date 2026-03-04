n.d(t, { A: () => s });
var i = n(64700),
    l = n(884362),
    r = n(311907),
    a = n(775602);
function s(e, t, n) {
    let s = (0, r.bG)([a.A], () => a.A.keyboardModeEnabled),
        o = i.useCallback(
            (e) => {
                let n = document.querySelector(e),
                    i = t.current;
                null != n && null != i && (n.focus(), i.scrollIntoViewNode({ node: n, padding: 80 }));
            },
            [t],
        ),
        c = i.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    if (null == n) return e();
                    n.scrollTo({ to: 0, callback: () => requestAnimationFrame(() => e()) });
                }),
            [t],
        ),
        _ = i.useCallback(
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
        isEnabled: s,
        setFocus: o,
        scrollToStart: c,
        scrollToEnd: _,
        orientation: n?.orientation,
    });
}
