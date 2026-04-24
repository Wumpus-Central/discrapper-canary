n.d(t, { A: () => r });
var a = n(64700),
    i = n(17928),
    l = n(775602);
function r(e, t) {
    let n = (0, i.bG)([l.A], () => l.A.useReducedMotion);
    a.useEffect(() => {
        if (!t) return;
        let a = e.current;
        if (null == a) return;
        let i = requestAnimationFrame(() => {
            a.scrollIntoView({ behavior: n ? "auto" : "smooth" });
        });
        return () => cancelAnimationFrame(i);
    }, [e, t, n]);
}
