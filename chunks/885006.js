r.d(t, { Z: () => i }), r(388685);
var n = r(192379);
function i() {
    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    let [e, t] = n.useState(
        (function () {
            var e, t;
            return (
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                {
                    width: null != (e = window.innerWidth) ? e : 1080,
                    height: null != (t = window.innerHeight) ? t : 1080
                }
            );
        })()
    );
    return (
        n.useLayoutEffect(() => {
            function e() {
                t({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }
            return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
        }, []),
        e
    );
}
