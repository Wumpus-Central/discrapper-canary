a.d(t, { A: () => o });
var n = a(64700),
    i = a(884362),
    r = a(311907),
    l = a(775602);
function o(e, t, a) {
    let o = (0, r.bG)([l.A], () => l.A.keyboardModeEnabled),
        s = n.useCallback(
            (e) => {
                let a = document.querySelector(e),
                    n = t.current;
                null != a && null != n && (a.focus(), n.scrollIntoViewNode({ node: a, padding: 80 }));
            },
            [t],
        ),
        _ = n.useCallback(
            () =>
                new Promise((e) => {
                    let a = t.current;
                    if (null == a) return e();
                    a.scrollTo({ to: 0, callback: () => requestAnimationFrame(() => e()) });
                }),
            [t],
        ),
        c = n.useCallback(
            () =>
                new Promise((e) => {
                    let a = t.current;
                    if (null == a) return e();
                    a.scrollTo({ to: Number.MAX_SAFE_INTEGER, callback: () => requestAnimationFrame(() => e()) });
                }),
            [t],
        );
    return (0, i.Ay)({
        id: e,
        isEnabled: o,
        setFocus: s,
        scrollToStart: _,
        scrollToEnd: c,
        orientation: a?.orientation,
    });
}
