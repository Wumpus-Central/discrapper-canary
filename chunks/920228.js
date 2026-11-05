var r = n(582128);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { videoRef: t, enabled: n, onPipPause: l, onHiddenPause: a } = e,
                i = r.useRef(l),
                o = r.useRef(a),
                u = r.useRef(!1);
            (r.useEffect(() => {
                ((i.current = l), (o.current = a));
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
                              ? o.current()
                              : (u.current = !1);
                    }
                    function a() {
                        u.current = !0;
                    }
                }, [t, n]));
        },
    },
);
