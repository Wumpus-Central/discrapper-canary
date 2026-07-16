"use strict";
n.d(t, { A: () => r });
var i = n(64700);
function r(e) {
    let { videoRef: t, enabled: n, onPipPause: r, onHiddenPause: a } = e,
        s = i.useRef(r),
        l = i.useRef(a),
        o = i.useRef(!1);
    i.useEffect(() => {
        (s.current = r), (l.current = a);
    }, [r, a]),
        i.useEffect(() => {
            if (!n) return;
            let e = t.current;
            if (null != e)
                return (
                    e.addEventListener("enterpictureinpicture", i),
                    e.addEventListener("play", r),
                    e.addEventListener("pause", a),
                    () => {
                        e.removeEventListener("enterpictureinpicture", i),
                            e.removeEventListener("play", r),
                            e.removeEventListener("pause", a);
                    }
                );
            function i() {
                o.current || s.current();
            }
            function r() {
                document.pictureInPictureElement === e
                    ? s.current()
                    : "hidden" === document.visibilityState
                      ? l.current()
                      : (o.current = !1);
            }
            function a() {
                o.current = !0;
            }
        }, [t, n]);
}
