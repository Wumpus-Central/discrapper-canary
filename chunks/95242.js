n.d(t, {
    Z: function () {
        return r;
    }
}),
    n(47120);
var i = n(192379);
function r(e) {
    var t;
    let [n, r] = i.useState(e),
        l = i.useRef(null);
    return (
        i.useEffect(() => {
            var t, n;
            r(null !== (n = null === (t = l.current) || void 0 === t ? void 0 : t.offsetHeight) && void 0 !== n ? n : e);
        }, [e, null === (t = l.current) || void 0 === t ? void 0 : t.offsetHeight]),
        {
            headerHeight: n,
            headerRef: l
        }
    );
}
