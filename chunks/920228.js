n.d(t, { A: () => l });
var r = n(64700);
function l(e) {
    let { videoRef: t, enabled: n, onPipPause: l, onHiddenPause: a } = e,
        i = r.useRef(l),
        u = r.useRef(a),
        s = r.useRef(!1);
    r.useEffect(() => {
        (i.current = l), (u.current = a);
    }, [l, a]),
        r.useEffect(() => {
            if (!n) return;
            let e = t.current;
            if (null == e) return;
            let r = () => {
                    s.current || i.current();
                },
                l = () => {
                    document.pictureInPictureElement === e
                        ? i.current()
                        : "hidden" === document.visibilityState
                          ? u.current()
                          : (s.current = !1);
                },
                a = () => {
                    s.current = !0;
                };
            return (
                e.addEventListener("enterpictureinpicture", r),
                e.addEventListener("play", l),
                e.addEventListener("pause", a),
                () => {
                    e.removeEventListener("enterpictureinpicture", r),
                        e.removeEventListener("play", l),
                        e.removeEventListener("pause", a);
                }
            );
        }, [t, n]);
}
