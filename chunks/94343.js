n.d(t, {
    A: () => s,
});
var r = n(64700),
    i = n(311907),
    a = n(775602);

function s(e, t) {
    let n = (0, i.bG)([a.A], () => a.A.useReducedMotion);
    r.useEffect(() => {
        if (!t) return;
        let r = e.current;
        if (null == r) return;
        let i = requestAnimationFrame(() => {
            r.scrollIntoView({
                behavior: n ? "auto" : "smooth",
            });
        });
        return () => cancelAnimationFrame(i);
    }, [e, t, n]);
}
