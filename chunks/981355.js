"use strict";
n.d(t, { A: () => i });
var a = n(64700);
function i() {
    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    let [e, t] = a.useState(
        (function () {
            return (
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                { width: window.innerWidth ?? 1080, height: window.innerHeight ?? 1080 }
            );
        })(),
    );
    return (
        a.useLayoutEffect(() => {
            function e() {
                t({ width: window.innerWidth, height: window.innerHeight });
            }
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        e
    );
}
