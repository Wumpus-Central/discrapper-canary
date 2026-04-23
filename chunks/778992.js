n.d(t, { X: () => i });
var r = n(64700);
function i(e) {
    let { slideCount: t, intervalMs: n = 3e3 } = e,
        [i, a] = (0, r.useState)(0),
        [l, s] = (0, r.useState)(!1),
        c = (0, r.useCallback)(
            (e) => {
                l ||
                    e < 0 ||
                    e >= t ||
                    (s(!0),
                    setTimeout(() => {
                        a(e), s(!1);
                    }, 300));
            },
            [l, t, 300],
        );
    return (
        (0, r.useEffect)(() => {
            if (t <= 1) return;
            let e = setInterval(() => {
                c((i + 1) % t);
            }, n);
            return () => clearInterval(e);
        }, [t, n, i, c]),
        { activeSlide: i, isTransitioning: l }
    );
}
