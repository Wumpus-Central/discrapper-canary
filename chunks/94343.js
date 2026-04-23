l.d(e, { A: () => s });
var a = l(64700),
    n = l(311907),
    i = l(775602);
function s(t, e) {
    let l = (0, n.bG)([i.A], () => i.A.useReducedMotion);
    a.useEffect(() => {
        if (!e) return;
        let a = t.current;
        if (null == a) return;
        let n = requestAnimationFrame(() => {
            a.scrollIntoView({ behavior: l ? "auto" : "smooth" });
        });
        return () => cancelAnimationFrame(n);
    }, [t, e, l]);
}
