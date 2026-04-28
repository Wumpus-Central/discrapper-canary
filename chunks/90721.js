n.d(t, { A: () => d });
var a = n(64700);
let r = "requestVideoFrameCallback" in HTMLVideoElement.prototype;
function d(e) {
    let { videoRef: t, canvasRef: n, enabled: d, canvasWidth: i = 10, canvasHeight: s = 6 } = e;
    a.useEffect(() => {
        if (!d) return;
        let e = t.current,
            a = n.current;
        if (null == e || null == a) return;
        (a.width = i), (a.height = s);
        let o = a.getContext("2d");
        if (null == o) return;
        let l = !1;
        function u() {
            l || e.readyState < 2 || o.drawImage(e, 0, 0, i, s);
        }
        if (r) {
            let t;
            function v() {
                l || (u(), (t = e.requestVideoFrameCallback(v)));
            }
            function c() {
                t = e.requestVideoFrameCallback(v);
            }
            function m() {
                e.cancelVideoFrameCallback(t);
            }
            return (
                e.addEventListener("play", c),
                e.addEventListener("pause", m),
                e.addEventListener("ended", m),
                e.addEventListener("seeked", u),
                e.addEventListener("loadeddata", u),
                e.paused ? e.readyState >= 2 && u() : (t = e.requestVideoFrameCallback(v)),
                () => {
                    (l = !0),
                        e.cancelVideoFrameCallback(t),
                        e.removeEventListener("play", c),
                        e.removeEventListener("pause", m),
                        e.removeEventListener("ended", m),
                        e.removeEventListener("seeked", u),
                        e.removeEventListener("loadeddata", u);
                }
            );
        }
        {
            let t;
            function E() {
                l || (u(), (t = requestAnimationFrame(E)));
            }
            function L() {
                t = requestAnimationFrame(E);
            }
            function p() {
                cancelAnimationFrame(t);
            }
            return (
                e.addEventListener("play", L),
                e.addEventListener("pause", p),
                e.addEventListener("ended", p),
                e.addEventListener("seeked", u),
                e.addEventListener("loadeddata", u),
                e.paused ? e.readyState >= 2 && u() : (t = requestAnimationFrame(E)),
                () => {
                    (l = !0),
                        cancelAnimationFrame(t),
                        e.removeEventListener("play", L),
                        e.removeEventListener("pause", p),
                        e.removeEventListener("ended", p),
                        e.removeEventListener("seeked", u),
                        e.removeEventListener("loadeddata", u);
                }
            );
        }
    }, [t, n, d, i, s]);
}
