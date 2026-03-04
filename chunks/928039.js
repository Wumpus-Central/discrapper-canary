"use strict";
n.d(t, { A: () => l });
var a = n(64700),
    i = n(884362),
    r = n(311907),
    o = n(775602);
function l(e, t, n) {
    let l = (0, r.bG)([o.A], () => o.A.keyboardModeEnabled),
        c = a.useCallback(
            (e) => {
                let n = document.querySelector(e),
                    a = t.current;
                null != n && null != a && (n.focus(), a.scrollIntoViewNode({ node: n, padding: 80 }));
            },
            [t],
        ),
        s = a.useCallback(
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
    return (0, i.Ay)({
        id: e,
        isEnabled: l,
        setFocus: c,
        scrollToStart: s,
        scrollToEnd: _,
        orientation: n?.orientation,
    });
}
