r.d(t, { A: () => u });
var n = r(64700),
    i = r(17928),
    o = r(775602);
function u(e, t) {
    let r = (0, i.bG)([o.A], () => o.A.useReducedMotion);
    n.useEffect(() => {
        if (!t) return;
        let n = e.current;
        if (null == n) return;
        let i = requestAnimationFrame(() => {
            n.scrollIntoView({ behavior: r ? "auto" : "smooth" });
        });
        return () => cancelAnimationFrame(i);
    }, [e, t, r]);
}
