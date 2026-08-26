n.d(t, { A: () => s });
var a = n(582128),
    l = n(17928),
    r = n(775602);
function s(e, t) {
    let n = (0, l.bG)([r.Ay], () => r.Ay.useReducedMotion);
    a.useEffect(() => {
        if (!t) return;
        let a = e.current;
        if (null == a) return;
        let l = requestAnimationFrame(() => {
            a.scrollIntoView({ behavior: n ? "auto" : "smooth" });
        });
        return () => cancelAnimationFrame(l);
    }, [e, t, n]);
}
