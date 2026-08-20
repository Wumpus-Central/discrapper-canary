n.d(t, { d: () => d });
var l = n(477900),
    r = n(582128),
    a = n(66455),
    i = n(607470),
    s = n(609174),
    u = n(367974),
    c = n(77729),
    o = n(292490);
let d = r.forwardRef((e, t) => {
    let { isStatic: n = !1, children: r, ...a } = e;
    return n ? (0, l.jsx)(f, { ref: t, children: r }) : (0, l.jsx)(p, { ref: t, ...a, children: r });
});
d.displayName = "ClipThumbnail";
let f = r.forwardRef((e, t) => {
    let { children: n } = e,
        a = (0, s.Y_)();
    return (
        r.useImperativeHandle(t, () => ({ releaseSource() {}, seek() {} }), []),
        (0, l.jsxs)("div", {
            className: o.Q,
            children: [(0, l.jsx)("img", { alt: "", src: a.thumbnail, className: o.f, loading: "lazy" }), n],
        })
    );
});
f.displayName = "ClipStaticThumbnail";
let p = r.forwardRef((e, t) => {
    let { isPlaying: n = !1, scrubOnHover: d = !1, preload: f = "metadata", onProgressChange: p, children: m } = e,
        v = (0, s.Y_)(),
        h = r.useRef(null),
        C = (0, a.A)(v.editMetadata?.start ?? 0),
        x = (0, r.useMemo)(
            () =>
                null == v || null == c.A.clips.getClipProtocolURLFromPath
                    ? null
                    : c.A.clips.getClipProtocolURLFromPath(v.filepath),
            [v],
        ),
        y = 0 === v.length,
        g = r.useCallback(
            (e) => {
                let t = h.current;
                if (null == t) return;
                let n = v.editMetadata?.start ?? 0,
                    l = v.editMetadata?.end ?? t.duration;
                t.currentTime = Math.max(0, C.current + ((l - n) * e) / 100);
            },
            [h, C, v],
        );
    r.useImperativeHandle(
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
    let k = r.useCallback(
            (e) => {
                if (!d || null == h.current) return;
                let t = h.current.getBoundingClientRect();
                g(((e.clientX - t.left) / t.width) * 100);
            },
            [h, d, g],
        ),
        b = r.useRef(null),
        j = r.useRef(n);
    return (
        r.useEffect(() => {
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
        r.useEffect(() => {
            if (y || null == x) return;
            let e = h.current;
            if (null != e)
                return () => {
                    (0, u.A)(e);
                };
        }, [x, h, y]),
        r.useEffect(() => {
            let e = h?.current;
            if (null == e || y || null == p) return;
            let t = null;
            function n() {
                if (null == e || null == p) return;
                if (e.paused || e.ended) {
                    (t = null), p(0);
                    return;
                }
                let l = v.editMetadata?.start ?? 0,
                    r = v.editMetadata?.end ?? e.duration,
                    a = ((e.currentTime - l) / (r - l)) * 100;
                p(isNaN(a) ? 0 : Math.max(0, Math.min(100, a))), (t = requestAnimationFrame(n));
            }
            function l() {
                null == t && (t = requestAnimationFrame(n));
            }
            function r() {
                null != p && null != t && (cancelAnimationFrame(t), (t = null), p(0));
            }
            return (
                e.addEventListener("play", l),
                e.addEventListener("pause", r),
                e.addEventListener("ended", r),
                e.paused || l(),
                () => {
                    null != t && (cancelAnimationFrame(t), p(0)),
                        e.removeEventListener("play", l),
                        e.removeEventListener("pause", r),
                        e.removeEventListener("ended", r);
                }
            );
        }, [h, y, v.editMetadata, p]),
        (0, l.jsxs)("div", {
            className: o.Q,
            onMouseMove: k,
            children: [
                y
                    ? (0, l.jsx)("img", { alt: "", src: v.thumbnail, className: o.f, loading: "lazy" })
                    : null != x
                      ? (0, l.jsx)(i.A, {
                            preload: f,
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
p.displayName = "ClipDynamicThumbnail";
