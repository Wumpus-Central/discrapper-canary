"use strict";
n.d(t, { A: () => l });
var a = n(64700),
    r = n(17928),
    i = n(775602);
function l(e, t) {
    let n = (0, r.bG)([i.A], () => i.A.useReducedMotion);
    a.useEffect(() => {
        if (!t) return;
        let a = e.current;
        if (null == a) return;
        let r = requestAnimationFrame(() => {
            a.scrollIntoView({ behavior: n ? "auto" : "smooth" });
        });
        return () => cancelAnimationFrame(r);
    }, [e, t, n]);
}
