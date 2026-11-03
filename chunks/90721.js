n.d(t, { A: () => l });
var r = n(582128);
function l(e) {
    let { videoRef: t, canvasRef: n, enabled: l, canvasWidth: i = 10, canvasHeight: a = 6 } = e;
    r.useEffect(() => {
        if (!l) return;
        let e = t.current,
            r = n.current;
        if (null == e || null == r) return;
        ((r.width = i), (r.height = a));
        let o = r.getContext("2d");
        if (null == o) return;
        let u = !1,
            s = -1 / 0;
        function c() {
            u || e.readyState < 2 || o.drawImage(e, 0, 0, i, a);
        }
        function d(e) {
            e - s < 100 || ((s = e), c());
        }
        if ("function" == typeof e.requestVideoFrameCallback) {
            let t;
            function m(n) {
                u || (d(n), (t = e.requestVideoFrameCallback(m)));
            }
            function f() {
                t = e.requestVideoFrameCallback(m);
            }
            function p() {
                e.cancelVideoFrameCallback(t);
            }
            return (
                e.addEventListener("play", f),
                e.addEventListener("pause", p),
                e.addEventListener("ended", p),
                e.addEventListener("seeked", c),
                e.addEventListener("loadeddata", c),
                e.paused ? e.readyState >= 2 && c() : (t = e.requestVideoFrameCallback(m)),
                () => {
                    ((u = !0),
                        e.cancelVideoFrameCallback(t),
                        e.removeEventListener("play", f),
                        e.removeEventListener("pause", p),
                        e.removeEventListener("ended", p),
                        e.removeEventListener("seeked", c),
                        e.removeEventListener("loadeddata", c));
                }
            );
        }
        {
            let t;
            function h(e) {
                u || (d(e), (t = requestAnimationFrame(h)));
            }
            function x() {
                t = requestAnimationFrame(h);
            }
            function v() {
                cancelAnimationFrame(t);
            }
            return (
                e.addEventListener("play", x),
                e.addEventListener("pause", v),
                e.addEventListener("ended", v),
                e.addEventListener("seeked", c),
                e.addEventListener("loadeddata", c),
                e.paused ? e.readyState >= 2 && c() : (t = requestAnimationFrame(h)),
                () => {
                    ((u = !0),
                        cancelAnimationFrame(t),
                        e.removeEventListener("play", x),
                        e.removeEventListener("pause", v),
                        e.removeEventListener("ended", v),
                        e.removeEventListener("seeked", c),
                        e.removeEventListener("loadeddata", c));
                }
            );
        }
    }, [t, n, l, i, a]);
}
