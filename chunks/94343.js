n.d(t, { A: () => i });
var l = n(64700),
    r = n(17928),
    a = n(775602);
function i(e, t) {
    let n = (0, r.bG)([a.Ay], () => a.Ay.useReducedMotion);
    l.useEffect(() => {
        if (!t) return;
        let l = e.current;
        if (null == l) return;
        let r = requestAnimationFrame(() => {
            l.scrollIntoView({ behavior: n ? "auto" : "smooth" });
        });
        return () => cancelAnimationFrame(r);
    }, [e, t, n]);
}
