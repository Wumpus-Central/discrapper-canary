n.d(t, { Z: () => r }), n(47120);
var a = n(192379);
function r() {
    var e, t;
    let [n, r] = a.useState({
        width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
        height: null !== (t = window.innerHeight) && void 0 !== t ? t : 1080
    });
    return (
        a.useLayoutEffect(() => {
            function e() {
                r({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }
            return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
        }, []),
        n
    );
}
