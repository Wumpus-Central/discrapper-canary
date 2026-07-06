"use strict";
n.d(t, { A: () => a });
var i = n(64700),
    r = n(17928),
    s = n(775602);
function a(e, t) {
    let n = (0, r.bG)([s.Ay], () => s.Ay.useReducedMotion);
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
