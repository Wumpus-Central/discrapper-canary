t.d(n, {
    Z: function () {
        return i;
    }
}),
    t(47120);
var r = t(192379);
function i() {
    var e, n;
    let [t, i] = r.useState({
        width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
        height: null !== (n = window.innerHeight) && void 0 !== n ? n : 1080
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
        t
    );
}
