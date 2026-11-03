n.d(t, { A: () => l });
var r = n(582128);
function l(e) {
    let { videoRef: t, enabled: n, onPipPause: l, onHiddenPause: i } = e,
        a = r.useRef(l),
        o = r.useRef(i),
        u = r.useRef(!1);
    (r.useEffect(() => {
        ((a.current = l), (o.current = i));
    }, [l, i]),
        r.useEffect(() => {
            if (!n) return;
            let e = t.current;
            if (null != e)
                return (
                    e.addEventListener("enterpictureinpicture", r),
                    e.addEventListener("play", l),
                    e.addEventListener("pause", i),
                    () => {
                        (e.removeEventListener("enterpictureinpicture", r),
                            e.removeEventListener("play", l),
                            e.removeEventListener("pause", i));
                    }
                );
            function r() {
                u.current || a.current();
            }
            function l() {
                document.pictureInPictureElement === e
                    ? a.current()
                    : "hidden" === document.visibilityState
                      ? o.current()
                      : (u.current = !1);
            }
            function i() {
                u.current = !0;
            }
        }, [t, n]));
}
