n.d(t, { Z: () => a }), n(47120);
var r = n(192379);
function a() {
    var e, t;
    let [n, a] = r.useState({
        width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
        height: null !== (t = window.innerHeight) && void 0 !== t ? t : 1080
    });
    return (
        r.useLayoutEffect(() => {
            function e() {
                a({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }
            return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
        }, []),
        n
    );
}
