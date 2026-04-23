n.d(t, { A: () => o });
var a = n(64700),
    r = n(887129),
    s = n(17928),
    l = n(775602);
function o(e, t, n) {
    let o = (0, s.bG)([l.A], () => l.A.keyboardModeEnabled),
        i = a.useCallback(
            (e) => {
                let n = document.querySelector(e),
                    a = t.current;
                null != n && null != a && (n.focus(), a.scrollIntoViewNode({ node: n, padding: 80 }));
            },
            [t],
        ),
        c = a.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    if (null == n) return e();
                    n.scrollTo({ to: 0, callback: () => requestAnimationFrame(() => e()) });
                }),
            [t],
        ),
        _ = a.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    if (null == n) return e();
                    n.scrollTo({ to: Number.MAX_SAFE_INTEGER, callback: () => requestAnimationFrame(() => e()) });
                }),
            [t],
        );
    return (0, r.Ay)({
        id: e,
        isEnabled: o,
        setFocus: i,
        scrollToStart: c,
        scrollToEnd: _,
        orientation: n?.orientation,
    });
}
