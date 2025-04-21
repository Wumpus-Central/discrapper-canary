n.d(t, { Z: () => i }), n(388685);
var r = n(192379);
function i(e) {
    var t;
    let [n, i] = r.useState(e),
        l = r.useRef(null);
    return (
        r.useEffect(() => {
            var t, n;
            i(null != (n = null == (t = l.current) ? void 0 : t.offsetHeight) ? n : e);
        }, [e, null == (t = l.current) ? void 0 : t.offsetHeight]),
        {
            headerHeight: n,
            headerRef: l
        }
    );
}
