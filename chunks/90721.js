n.d(t, { A: () => i });
var l = n(64700);
let a = "requestVideoFrameCallback" in HTMLVideoElement.prototype;
function i(e) {
    let { videoRef: t, canvasRef: n, enabled: i, canvasWidth: r = 10, canvasHeight: s = 6 } = e;
    l.useEffect(() => {
        if (!i) return;
        let e = t.current,
            l = n.current;
        if (null == e || null == l) return;
        (l.width = r), (l.height = s);
        let o = l.getContext("2d");
        if (null == o) return;
        let c = !1;
        function d() {
            c || e.readyState < 2 || o.drawImage(e, 0, 0, r, s);
        }
        if (a) {
            let t;
            function u() {
                c || (d(), (t = e.requestVideoFrameCallback(u)));
            }
            function m() {
                t = e.requestVideoFrameCallback(u);
            }
            function f() {
                e.cancelVideoFrameCallback(t);
            }
            return (
                e.addEventListener("play", m),
                e.addEventListener("pause", f),
                e.addEventListener("ended", f),
                e.addEventListener("seeked", d),
                e.addEventListener("loadeddata", d),
                e.paused ? e.readyState >= 2 && d() : (t = e.requestVideoFrameCallback(u)),
                () => {
                    (c = !0),
                        e.cancelVideoFrameCallback(t),
                        e.removeEventListener("play", m),
                        e.removeEventListener("pause", f),
                        e.removeEventListener("ended", f),
                        e.removeEventListener("seeked", d),
                        e.removeEventListener("loadeddata", d);
                }
            );
        }
        {
            let t;
            function h() {
                c || (d(), (t = requestAnimationFrame(h)));
            }
            function x() {
                t = requestAnimationFrame(h);
            }
            function g() {
                cancelAnimationFrame(t);
            }
            return (
                e.addEventListener("play", x),
                e.addEventListener("pause", g),
                e.addEventListener("ended", g),
                e.addEventListener("seeked", d),
                e.addEventListener("loadeddata", d),
                e.paused ? e.readyState >= 2 && d() : (t = requestAnimationFrame(h)),
                () => {
                    (c = !0),
                        cancelAnimationFrame(t),
                        e.removeEventListener("play", x),
                        e.removeEventListener("pause", g),
                        e.removeEventListener("ended", g),
                        e.removeEventListener("seeked", d),
                        e.removeEventListener("loadeddata", d);
                }
            );
        }
    }, [t, n, i, r, s]);
}
