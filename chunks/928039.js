r.d(l, { A: () => u });
var n = r(64700),
    t = r(887129),
    o = r(17928),
    a = r(775602);
function u(e, l, r) {
    let u = (0, o.bG)([a.Ay], () => a.Ay.keyboardModeEnabled),
        c = n.useCallback(
            (e) => {
                let r = document.querySelector(e),
                    n = l.current;
                null != r && null != n && (r.focus(), n.scrollIntoViewNode({ node: r, padding: 80 }));
            },
            [l],
        ),
        i = n.useCallback(
            () =>
                new Promise((e) => {
                    let r = l.current;
                    if (null == r) return e();
                    r.scrollTo({ to: 0, callback: () => requestAnimationFrame(() => e()) });
                }),
            [l],
        ),
        s = n.useCallback(
            () =>
                new Promise((e) => {
                    let r = l.current;
                    if (null == r) return e();
                    r.scrollTo({ to: Number.MAX_SAFE_INTEGER, callback: () => requestAnimationFrame(() => e()) });
                }),
            [l],
        );
    return (0, t.Ay)({
        id: e,
        isEnabled: u,
        setFocus: c,
        scrollToStart: i,
        scrollToEnd: s,
        orientation: r?.orientation,
    });
}
