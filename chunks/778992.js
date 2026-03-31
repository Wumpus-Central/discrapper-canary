n.d(t, { X: () => a });
var r = n(64700);
function a(e) {
    let { slideCount: t, intervalMs: n = 3e3 } = e,
        [a, i] = (0, r.useState)(0),
        [s, l] = (0, r.useState)(!1),
        o = (0, r.useCallback)(
            (e) => {
                s ||
                    e < 0 ||
                    e >= t ||
                    (l(!0),
                    setTimeout(() => {
                        i(e), l(!1);
                    }, 300));
            },
            [s, t, 300],
        );
    return (
        (0, r.useEffect)(() => {
            if (t <= 1) return;
            let e = setInterval(() => {
                o((a + 1) % t);
            }, n);
            return () => clearInterval(e);
        }, [t, n, a, o]),
        { activeSlide: a, isTransitioning: s }
    );
}
