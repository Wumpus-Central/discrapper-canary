n.d(t, { A: () => a });
var l = n(64700),
    r = n(17928),
    i = n(775602);
function a(e, t) {
    let n = (0, r.bG)([i.Ay], () => i.Ay.useReducedMotion);
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
