"use strict";
r.d(t, { X: () => i });
var n = r(64700);
function i(e) {
    let { slideCount: t, intervalMs: r = 3e3 } = e,
        [i, s] = (0, n.useState)(0),
        [a, l] = (0, n.useState)(!1),
        c = (0, n.useCallback)(
            (e) => {
                a ||
                    e < 0 ||
                    e >= t ||
                    (l(!0),
                    setTimeout(() => {
                        s(e), l(!1);
                    }, 300));
            },
            [a, t, 300],
        );
    return (
        (0, n.useEffect)(() => {
            if (t <= 1) return;
            let e = setInterval(() => {
                c((i + 1) % t);
            }, r);
            return () => clearInterval(e);
        }, [t, r, i, c]),
        { activeSlide: i, isTransitioning: a }
    );
}
