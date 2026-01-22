n.d(t, { A: () => i }), n(896048);
var r = n(64700);
function i(e) {
    var t;
    let [n, i] = r.useState(e),
        l = r.useRef(null);
    return (
        r.useEffect(() => {
            var t, n;
            i(null != (t = null == (n = l.current) ? void 0 : n.offsetHeight) ? t : e);
        }, [e, null == (t = l.current) ? void 0 : t.offsetHeight]),
        {
            headerHeight: n,
            headerRef: l,
        }
    );
}
