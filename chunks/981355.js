n.d(t, { A: () => r }), n(896048);
var l = n(64700);
function r() {
    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    let [e, t] = l.useState(
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
        l.useLayoutEffect(() => {
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
