n.d(t, { Z: () => o });
var r = n(473749),
    i = n(442837),
    a = n(607070);
function o(e, t) {
    let n = (0, i.e7)([a.Z], () => a.Z.useReducedMotion);
    r.useEffect(() => {
        if (!t) return;
        let r = e.current;
        if (null == r) return;
        let i = requestAnimationFrame(() => {
            r.scrollIntoView({ behavior: n ? "auto" : "smooth" });
        });
        return () => cancelAnimationFrame(i);
    }, [e, t, n]);
}
