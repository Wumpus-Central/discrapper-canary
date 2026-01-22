n.d(t, { X: () => l }), n(896048);
var r = n(64700);
function l(e) {
    let { slideCount: t, intervalMs: n = 3000 } = e,
        [l, a] = (0, r.useState)(0),
        [i, s] = (0, r.useState)(!1),
        c = (0, r.useCallback)(
            (e) => {
                i ||
                    e < 0 ||
                    e >= t ||
                    (s(!0),
                    setTimeout(() => {
                        a(e), s(!1);
                    }, 300));
            },
            [i, t, 300],
        );
    return (
        (0, r.useEffect)(() => {
            if (t <= 1) return;
            let e = setInterval(() => {
                c((l + 1) % t);
            }, n);
            return () => clearInterval(e);
        }, [t, n, l, c]),
        {
            activeSlide: l,
            isTransitioning: i,
        }
    );
}
