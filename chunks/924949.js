r.d(t, { _: () => o });
var n = r(241872),
    i = r(582128);
function o(e, t, r, o) {
    let a = (0, n.J)(r),
        s = null == r;
    (0, i.useEffect)(() => {
        if (s || !e.current) return;
        let r = e.current;
        return (
            r.addEventListener(t, a, o),
            () => {
                r.removeEventListener(t, a, o);
            }
        );
    }, [e, t, o, s]);
}
