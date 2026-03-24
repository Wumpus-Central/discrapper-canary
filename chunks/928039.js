"use strict";
a.d(t, { A: () => l });
var n = a(64700),
    i = a(884362),
    r = a(311907),
    s = a(775602);
function l(e, t, a) {
    let l = (0, r.bG)([s.A], () => s.A.keyboardModeEnabled),
        o = n.useCallback(
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
        isEnabled: l,
        setFocus: o,
        scrollToStart: _,
        scrollToEnd: c,
        orientation: a?.orientation,
    });
}
