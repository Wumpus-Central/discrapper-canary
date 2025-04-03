r.d(t, { Z: () => a }), r(47120);
var n = r(192379);
function a() {
    var e, t;
    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    let [r, a] = n.useState({
        width: null != (e = window.innerWidth) ? e : 1080,
        height: null != (t = window.innerHeight) ? t : 1080
    });
    return (
        n.useLayoutEffect(() => {
            function e() {
                a({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }
            return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
        }, []),
        r
    );
}
