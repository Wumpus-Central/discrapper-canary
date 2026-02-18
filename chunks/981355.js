i.d(t, { A: () => a });
var l = i(64700);
function a() {
    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    let [e, t] = l.useState(
        (function () {
            return (
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                { width: window.innerWidth ?? 1080, height: window.innerHeight ?? 1080 }
            );
        })(),
    );
    return (
        l.useLayoutEffect(() => {
            function e() {
                t({ width: window.innerWidth, height: window.innerHeight });
            }
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        e
    );
}
