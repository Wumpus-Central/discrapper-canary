n.d(t, { A: () => l });
var r = n(582128);
function l(e) {
    let { videoRef: t, enabled: n, onPipPause: l, onHiddenPause: a } = e,
        i = r.useRef(l),
        s = r.useRef(a),
        u = r.useRef(!1);
    (r.useEffect(() => {
        ((i.current = l), (s.current = a));
    }, [l, a]),
        r.useEffect(() => {
            if (!n) return;
            let e = t.current;
            if (null != e)
                return (
                    e.addEventListener("enterpictureinpicture", r),
                    e.addEventListener("play", l),
                    e.addEventListener("pause", a),
                    () => {
                        (e.removeEventListener("enterpictureinpicture", r),
                            e.removeEventListener("play", l),
                            e.removeEventListener("pause", a));
                    }
                );
            function r() {
                u.current || i.current();
            }
            function l() {
                document.pictureInPictureElement === e
                    ? i.current()
                    : "hidden" === document.visibilityState
                      ? s.current()
                      : (u.current = !1);
            }
            function a() {
                u.current = !0;
            }
        }, [t, n]));
}
