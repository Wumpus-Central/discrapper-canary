"use strict";
n.d(t, { A: () => s });
var i = n(64700);
let r = "requestVideoFrameCallback" in HTMLVideoElement.prototype;
function s(e) {
    let { videoRef: t, canvasRef: n, enabled: s, canvasWidth: a = 10, canvasHeight: o = 6 } = e;
    i.useEffect(() => {
        if (!s) return;
        let e = t.current,
            i = n.current;
        if (null == e || null == i) return;
        (i.width = a), (i.height = o);
        let l = i.getContext("2d");
        if (null == l) return;
        let u = !1;
        function c() {
            u || e.readyState < 2 || l.drawImage(e, 0, 0, a, o);
        }
        if (r) {
            let t;
            function d() {
                u || (c(), (t = e.requestVideoFrameCallback(d)));
            }
            function _() {
                t = e.requestVideoFrameCallback(d);
            }
            function h() {
                e.cancelVideoFrameCallback(t);
            }
            return (
                e.addEventListener("play", _),
                e.addEventListener("pause", h),
                e.addEventListener("ended", h),
                e.addEventListener("seeked", c),
                e.addEventListener("loadeddata", c),
                e.paused ? e.readyState >= 2 && c() : (t = e.requestVideoFrameCallback(d)),
                () => {
                    (u = !0),
                        e.cancelVideoFrameCallback(t),
                        e.removeEventListener("play", _),
                        e.removeEventListener("pause", h),
                        e.removeEventListener("ended", h),
                        e.removeEventListener("seeked", c),
                        e.removeEventListener("loadeddata", c);
                }
            );
        }
        {
            let t;
            function f() {
                u || (c(), (t = requestAnimationFrame(f)));
            }
            function p() {
                t = requestAnimationFrame(f);
            }
            function E() {
                cancelAnimationFrame(t);
            }
            return (
                e.addEventListener("play", p),
                e.addEventListener("pause", E),
                e.addEventListener("ended", E),
                e.addEventListener("seeked", c),
                e.addEventListener("loadeddata", c),
                e.paused ? e.readyState >= 2 && c() : (t = requestAnimationFrame(f)),
                () => {
                    (u = !0),
                        cancelAnimationFrame(t),
                        e.removeEventListener("play", p),
                        e.removeEventListener("pause", E),
                        e.removeEventListener("ended", E),
                        e.removeEventListener("seeked", c),
                        e.removeEventListener("loadeddata", c);
                }
            );
        }
    }, [t, n, s, a, o]);
}
