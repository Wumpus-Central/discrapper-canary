n.d(t, { A: () => l });
var r = n(582128);
function l(e) {
    let { videoRef: t, enabled: n, onPipPause: l, onHiddenPause: i } = e,
        a = r.useRef(l),
        u = r.useRef(i),
        o = r.useRef(!1);
    (r.useEffect(() => {
        ((a.current = l), (u.current = i));
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
                o.current || a.current();
            }
            function l() {
                document.pictureInPictureElement === e
                    ? a.current()
                    : "hidden" === document.visibilityState
                      ? u.current()
                      : (o.current = !1);
            }
            function i() {
                o.current = !0;
            }
        }, [t, n]));
}
