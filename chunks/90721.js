n.d(t, { A: () => a });
var r = n(582128);
let l = "requestVideoFrameCallback" in HTMLVideoElement.prototype;
function a(e) {
    let { videoRef: t, canvasRef: n, enabled: a, canvasWidth: i = 10, canvasHeight: u = 6 } = e;
    r.useEffect(() => {
        if (!a) return;
        let e = t.current,
            r = n.current;
        if (null == e || null == r) return;
        ((r.width = i), (r.height = u));
        let o = r.getContext("2d");
        if (null == o) return;
        let s = !1;
        function c() {
            s || e.readyState < 2 || o.drawImage(e, 0, 0, i, u);
        }
        if (l) {
            let t;
            function d() {
                s || (c(), (t = e.requestVideoFrameCallback(d)));
            }
            function m() {
                t = e.requestVideoFrameCallback(d);
            }
            function f() {
                e.cancelVideoFrameCallback(t);
            }
            return (
                e.addEventListener("play", m),
                e.addEventListener("pause", f),
                e.addEventListener("ended", f),
                e.addEventListener("seeked", c),
                e.addEventListener("loadeddata", c),
                e.paused ? e.readyState >= 2 && c() : (t = e.requestVideoFrameCallback(d)),
                () => {
                    ((s = !0),
                        e.cancelVideoFrameCallback(t),
                        e.removeEventListener("play", m),
                        e.removeEventListener("pause", f),
                        e.removeEventListener("ended", f),
                        e.removeEventListener("seeked", c),
                        e.removeEventListener("loadeddata", c));
                }
            );
        }
        {
            let t;
            function p() {
                s || (c(), (t = requestAnimationFrame(p)));
            }
            function h() {
                t = requestAnimationFrame(p);
            }
            function x() {
                cancelAnimationFrame(t);
            }
            return (
                e.addEventListener("play", h),
                e.addEventListener("pause", x),
                e.addEventListener("ended", x),
                e.addEventListener("seeked", c),
                e.addEventListener("loadeddata", c),
                e.paused ? e.readyState >= 2 && c() : (t = requestAnimationFrame(p)),
                () => {
                    ((s = !0),
                        cancelAnimationFrame(t),
                        e.removeEventListener("play", h),
                        e.removeEventListener("pause", x),
                        e.removeEventListener("ended", x),
                        e.removeEventListener("seeked", c),
                        e.removeEventListener("loadeddata", c));
                }
            );
        }
    }, [t, n, a, i, u]);
}
