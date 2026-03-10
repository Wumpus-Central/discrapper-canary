"use strict";
a.d(t, { A: () => o });
var n = a(64700),
    r = a(884362),
    i = a(311907),
    s = a(775602);
function o(e, t, a) {
    let o = (0, i.bG)([s.A], () => s.A.keyboardModeEnabled),
        l = n.useCallback(
            (e) => {
                let a = document.querySelector(e),
                    n = t.current;
                null != a && null != n && (a.focus(), n.scrollIntoViewNode({ node: a, padding: 80 }));
            },
            [t],
        ),
        c = n.useCallback(
            () =>
                new Promise((e) => {
                    let a = t.current;
                    if (null == a) return e();
                    a.scrollTo({ to: 0, callback: () => requestAnimationFrame(() => e()) });
                }),
            [t],
        ),
        _ = n.useCallback(
            () =>
                new Promise((e) => {
                    let a = t.current;
                    if (null == a) return e();
                    a.scrollTo({ to: Number.MAX_SAFE_INTEGER, callback: () => requestAnimationFrame(() => e()) });
                }),
            [t],
        );
    return (0, r.Ay)({
        id: e,
        isEnabled: o,
        setFocus: l,
        scrollToStart: c,
        scrollToEnd: _,
        orientation: a?.orientation,
    });
}
