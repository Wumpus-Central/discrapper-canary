"use strict";
n.d(t, { A: () => l });
var a = n(64700);
let i = "requestVideoFrameCallback" in HTMLVideoElement.prototype;
function l(e) {
    let { videoRef: t, canvasRef: n, enabled: l, canvasWidth: r = 10, canvasHeight: s = 6 } = e;
    a.useEffect(() => {
        if (!l) return;
        let e = t.current,
            a = n.current;
        if (null == e || null == a) return;
        (a.width = r), (a.height = s);
        let c = a.getContext("2d");
        if (null == c) return;
        let o = !1;
        function d() {
            o || e.readyState < 2 || c.drawImage(e, 0, 0, r, s);
        }
        if (i) {
            let t;
            function u() {
                o || (d(), (t = e.requestVideoFrameCallback(u)));
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
                    (o = !0),
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
                o || (d(), (t = requestAnimationFrame(h)));
            }
            function _() {
                t = requestAnimationFrame(h);
            }
            function g() {
                cancelAnimationFrame(t);
            }
            return (
                e.addEventListener("play", _),
                e.addEventListener("pause", g),
                e.addEventListener("ended", g),
                e.addEventListener("seeked", d),
                e.addEventListener("loadeddata", d),
                e.paused ? e.readyState >= 2 && d() : (t = requestAnimationFrame(h)),
                () => {
                    (o = !0),
                        cancelAnimationFrame(t),
                        e.removeEventListener("play", _),
                        e.removeEventListener("pause", g),
                        e.removeEventListener("ended", g),
                        e.removeEventListener("seeked", d),
                        e.removeEventListener("loadeddata", d);
                }
            );
        }
    }, [t, n, l, r, s]);
}
