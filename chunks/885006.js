n.d(t, {
    Z: function () {
        return i;
    }
}),
    n(47120);
var r = n(192379);
function i() {
    var e, t;
    let [n, i] = r.useState({
        width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
        height: null !== (t = window.innerHeight) && void 0 !== t ? t : 1080
    });
    return (
        r.useLayoutEffect(() => {
            function e() {
                let e = window.innerWidth;
                i({
                    width: e,
                    height: window.innerHeight
                });
            }
            return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
        }, []),
        n
    );
}
