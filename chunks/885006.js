n.d(t, { Z: () => i }), n(388685);
var a = n(473749);
function i() {
    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    let [e, t] = a.useState(
        (function () {
            var e, t;
            return (
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                {
                    width: null != (e = window.innerWidth) ? e : 1080,
                    height: null != (t = window.innerHeight) ? t : 1080,
                }
            );
        })(),
    );
    return (
        a.useLayoutEffect(() => {
            function e() {
                t({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        e
    );
}
