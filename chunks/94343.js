"use strict";
n.d(t, { A: () => s });
var i = n(64700),
    r = n(17928),
    a = n(775602);
function s(e, t) {
    let n = (0, r.bG)([a.Ay], () => a.Ay.useReducedMotion);
    i.useEffect(() => {
        if (!t) return;
        let i = e.current;
        if (null == i) return;
        let r = requestAnimationFrame(() => {
            i.scrollIntoView({ behavior: n ? "auto" : "smooth" });
        });
        return () => cancelAnimationFrame(r);
    }, [e, t, n]);
}
