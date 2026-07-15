n.d(t, { d: () => d });
var l = n(627968),
    a = n(64700),
    r = n(66455),
    i = n(607470),
    s = n(609174),
    u = n(367974),
    c = n(77729),
    o = n(204351);
let d = a.forwardRef((e, t) => {
    let { isStatic: n = !1, children: a, ...r } = e;
    return n ? (0, l.jsx)(p, { ref: t, children: a }) : (0, l.jsx)(f, { ref: t, ...r, children: a });
});
d.displayName = "ClipThumbnail";
let p = a.forwardRef((e, t) => {
    let { children: n } = e,
        r = (0, s.Y_)();
    return (
        a.useImperativeHandle(t, () => ({ releaseSource() {}, seek() {} }), []),
        (0, l.jsxs)("div", {
            className: o.Q,
            children: [(0, l.jsx)("img", { alt: "", src: r.thumbnail, className: o.f, loading: "lazy" }), n],
        })
    );
});
p.displayName = "ClipStaticThumbnail";
let f = a.forwardRef((e, t) => {
    let { isPlaying: n = !1, scrubOnHover: d = !1, preload: p = "metadata", onProgressChange: f, children: m } = e,
        v = (0, s.Y_)(),
        h = a.useRef(null),
        C = (0, r.A)(v.editMetadata?.start ?? 0),
        x = (0, a.useMemo)(
            () =>
                null == v || null == c.A.clips.getClipProtocolURLFromPath
                    ? null
                    : c.A.clips.getClipProtocolURLFromPath(v.filepath),
            [v],
        ),
        y = 0 === v.length,
        g = a.useCallback(
            (e) => {
                let t = h.current;
                if (null == t) return;
                let n = v.editMetadata?.start ?? 0,
                    l = v.editMetadata?.end ?? t.duration;
                t.currentTime = Math.max(0, C.current + ((l - n) * e) / 100);
            },
            [h, C, v],
        );
    a.useImperativeHandle(
        t,
        () => ({
            releaseSource() {
                (0, u.A)(h.current);
            },
            seek(e) {
                g(e);
            },
        }),
        [g],
    );
    let k = a.useCallback(
            (e) => {
                if (!d || null == h.current) return;
                let t = h.current.getBoundingClientRect();
                g(((e.clientX - t.left) / t.width) * 100);
            },
            [h, d, g],
        ),
        b = a.useRef(null),
        j = a.useRef(n);
    return (
        a.useEffect(() => {
            if (((j.current = n), y)) return;
            let e = h.current;
            if (null != e)
                if (n) {
                    if (!e.paused) return;
                    e.currentTime = C.current;
                    let t = e.play();
                    (b.current = t), t.catch(() => {});
                } else {
                    let t = b.current;
                    (b.current = null), null != t ? t.then(() => j.current || e.pause()).catch(() => {}) : e.pause();
                }
        }, [n, h, y, C]),
        a.useEffect(() => {
            if (y || null == x) return;
            let e = h.current;
            if (null != e)
                return () => {
                    (0, u.A)(e);
                };
        }, [x, h, y]),
        a.useEffect(() => {
            let e = h?.current;
            if (null == e || y || null == f) return;
            let t = null,
                n = () => {
                    if (e.paused || e.ended) {
                        (t = null), f(0);
                        return;
                    }
                    let l = v.editMetadata?.start ?? 0,
                        a = v.editMetadata?.end ?? e.duration,
                        r = ((e.currentTime - l) / (a - l)) * 100;
                    f(isNaN(r) ? 0 : Math.max(0, Math.min(100, r))), (t = requestAnimationFrame(n));
                };
            function l() {
                null == t && (t = requestAnimationFrame(n));
            }
            let a = () => {
                null != t && (cancelAnimationFrame(t), (t = null), f(0));
            };
            return (
                e.addEventListener("play", l),
                e.addEventListener("pause", a),
                e.addEventListener("ended", a),
                e.paused || l(),
                () => {
                    null != t && (cancelAnimationFrame(t), f(0)),
                        e.removeEventListener("play", l),
                        e.removeEventListener("pause", a),
                        e.removeEventListener("ended", a);
                }
            );
        }, [h, y, v.editMetadata, f]),
        (0, l.jsxs)("div", {
            className: o.Q,
            onMouseMove: k,
            children: [
                y
                    ? (0, l.jsx)("img", { alt: "", src: v.thumbnail, className: o.f, loading: "lazy" })
                    : null != x
                      ? (0, l.jsx)(i.A, {
                            preload: p,
                            poster: v.thumbnail,
                            muted: !0,
                            src: x,
                            loop: !0,
                            className: o.f,
                            ref: h,
                        })
                      : null,
                m,
            ],
        })
    );
});
f.displayName = "ClipDynamicThumbnail";
