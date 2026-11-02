t.d(e, { A: () => u, Y: () => i });
var l = t(582128);
function i() {
    return (
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { width: window.innerWidth ?? 1080, height: window.innerHeight ?? 1080 }
    );
}
function u() {
    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    let [n, e] = l.useState(i());
    return (
        l.useLayoutEffect(() => {
            function n() {
                e({ width: window.innerWidth, height: window.innerHeight });
            }
            return (n(), window.addEventListener("resize", n), () => window.removeEventListener("resize", n));
        }, []),
        n
    );
}
