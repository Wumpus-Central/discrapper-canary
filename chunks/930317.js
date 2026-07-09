n.d(t, { d: () => d });
var a = n(627968),
    r = n(64700),
    l = n(66455),
    i = n(607470),
    s = n(609174),
    u = n(367974),
    c = n(77729),
    o = n(968063);
let d = r.forwardRef((e, t) => {
    let { isStatic: n = !1, children: r, ...l } = e;
    return n ? (0, a.jsx)(f, { ref: t, children: r }) : (0, a.jsx)(p, { ref: t, ...l, children: r });
});
d.displayName = "ClipThumbnail";
let f = r.forwardRef((e, t) => {
    let { children: n } = e,
        l = (0, s.Y_)();
    return (
        r.useImperativeHandle(t, () => ({ releaseSource() {} }), []),
        (0, a.jsxs)("div", {
            className: o.Q,
            children: [(0, a.jsx)("img", { alt: "", src: l.thumbnail, className: o.f, loading: "lazy" }), n],
        })
    );
});
f.displayName = "ClipStaticThumbnail";
let p = r.forwardRef((e, t) => {
    let { isPlaying: n = !1, scrubOnHover: d = !1, preload: f = "metadata", onProgressChange: p, children: m } = e,
        v = (0, s.Y_)(),
        h = r.useRef(null),
        x = (0, l.A)(v.editMetadata?.start ?? 0);
    r.useImperativeHandle(
        t,
        () => ({
            releaseSource() {
                (0, u.A)(h.current);
            },
        }),
        [],
    );
    let y = (0, r.useMemo)(
            () =>
                null == v || null == c.A.clips.getClipProtocolURLFromPath
                    ? null
                    : c.A.clips.getClipProtocolURLFromPath(v.filepath),
            [v],
        ),
        C = 0 === v.length,
        g = r.useCallback(
            (e) => {
                let t = h.current;
                if (null == t) return;
                let n = v.editMetadata?.start ?? 0,
                    a = v.editMetadata?.end ?? t.duration;
                t.currentTime = Math.max(0, x.current + ((a - n) * e) / 100);
            },
            [h, x, v],
        ),
        k = r.useCallback(
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
            if (((j.current = n), C)) return;
            let e = h.current;
            if (null != e)
                if (n) {
                    if (!e.paused) return;
                    e.currentTime = x.current;
                    let t = e.play();
                    (b.current = t), t.catch(() => {});
                } else {
                    let t = b.current;
                    (b.current = null), null != t ? t.then(() => j.current || e.pause()).catch(() => {}) : e.pause();
                }
        }, [n, h, C, x]),
        r.useEffect(() => {
            if (C || null == y) return;
            let e = h.current;
            if (null != e)
                return () => {
                    (0, u.A)(e);
                };
        }, [y, h, C]),
        r.useEffect(() => {
            let e = h?.current;
            if (null == e || C || null == p) return;
            let t = null,
                n = () => {
                    if (e.paused || e.ended) {
                        (t = null), p(0);
                        return;
                    }
                    let a = v.editMetadata?.start ?? 0,
                        r = v.editMetadata?.end ?? e.duration,
                        l = ((e.currentTime - a) / (r - a)) * 100;
                    p(isNaN(l) ? 0 : Math.max(0, Math.min(100, l))), (t = requestAnimationFrame(n));
                };
            function a() {
                null == t && (t = requestAnimationFrame(n));
            }
            let r = () => {
                null != t && (cancelAnimationFrame(t), (t = null), p(0));
            };
            return (
                e.addEventListener("play", a),
                e.addEventListener("pause", r),
                e.addEventListener("ended", r),
                e.paused || a(),
                () => {
                    null != t && (cancelAnimationFrame(t), p(0)),
                        e.removeEventListener("play", a),
                        e.removeEventListener("pause", r),
                        e.removeEventListener("ended", r);
                }
            );
        }, [h, C, v.editMetadata, p]),
        (0, a.jsxs)("div", {
            className: o.Q,
            onMouseMove: k,
            children: [
                C
                    ? (0, a.jsx)("img", { alt: "", src: v.thumbnail, className: o.f, loading: "lazy" })
                    : null != y
                      ? (0, a.jsx)(i.A, {
                            preload: f,
                            poster: v.thumbnail,
                            muted: !0,
                            src: y,
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
