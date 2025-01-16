r.d(t, {
    Z: function () {
        return a;
    }
}),
    r(47120);
var n = r(192379);
function a() {
    var e, t;
    let [r, a] = n.useState({
        width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
        height: null !== (t = window.innerHeight) && void 0 !== t ? t : 1080
    });
    return (
        n.useLayoutEffect(() => {
            function e() {
                let e = window.innerWidth;
                a({
                    width: e,
                    height: window.innerHeight
                });
            }
            return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
        }, []),
        r
    );
}
