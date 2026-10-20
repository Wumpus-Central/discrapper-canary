n.d(t, { A: () => l });
var r = n(582128);
function l(e) {
    let { videoRef: t, canvasRef: n, enabled: l, canvasWidth: a = 10, canvasHeight: i = 6 } = e;
    r.useEffect(() => {
        if (!l) return;
        let e = t.current,
            r = n.current;
        if (null == e || null == r) return;
        ((r.width = a), (r.height = i));
        let u = r.getContext("2d");
        if (null == u) return;
        let o = !1,
            s = -1 / 0;
        function c() {
            o || e.readyState < 2 || u.drawImage(e, 0, 0, a, i);
        }
        function d(e) {
            e - s < 100 || ((s = e), c());
        }
        if ("function" == typeof e.requestVideoFrameCallback) {
            let t;
            function m(n) {
                o || (d(n), (t = e.requestVideoFrameCallback(m)));
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
                    ((o = !0),
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
                o || (d(e), (t = requestAnimationFrame(h)));
            }
            function v() {
                t = requestAnimationFrame(h);
            }
            function x() {
                cancelAnimationFrame(t);
            }
            return (
                e.addEventListener("play", v),
                e.addEventListener("pause", x),
                e.addEventListener("ended", x),
                e.addEventListener("seeked", c),
                e.addEventListener("loadeddata", c),
                e.paused ? e.readyState >= 2 && c() : (t = requestAnimationFrame(h)),
                () => {
                    ((o = !0),
                        cancelAnimationFrame(t),
                        e.removeEventListener("play", v),
                        e.removeEventListener("pause", x),
                        e.removeEventListener("ended", x),
                        e.removeEventListener("seeked", c),
                        e.removeEventListener("loadeddata", c));
                }
            );
        }
    }, [t, n, l, a, i]);
}
