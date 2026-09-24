n.d(t, { d: () => d });
var a = n(477900),
    l = n(582128),
    r = n(66455),
    i = n(607470),
    s = n(609174),
    u = n(367974),
    c = n(77729),
    o = n(292490);
let d = l.forwardRef((e, t) => {
    let { isStatic: n = !1, children: l, ...r } = e;
    return n ? (0, a.jsx)(f, { ref: t, children: l }) : (0, a.jsx)(p, { ref: t, ...r, children: l });
});
d.displayName = "ClipThumbnail";
let f = l.forwardRef((e, t) => {
    let { children: n } = e,
        r = (0, s.Y_)();
    return (
        l.useImperativeHandle(t, () => ({ releaseSource() {}, seek() {} }), []),
        (0, a.jsxs)("div", {
            className: o.Q,
            children: [(0, a.jsx)("img", { alt: "", src: r.thumbnail, className: o.f, loading: "lazy" }), n],
        })
    );
});
f.displayName = "ClipStaticThumbnail";
let p = l.forwardRef((e, t) => {
    let { isPlaying: n = !1, scrubOnHover: d = !1, preload: f = "metadata", onProgressChange: p, children: m } = e,
        v = (0, s.Y_)(),
        h = l.useRef(null),
        x = (0, r.A)(v.editMetadata?.start ?? 0),
        y = (0, l.useMemo)(
            () =>
                null == v || null == c.A.clips.getClipProtocolURLFromPath
                    ? null
                    : c.A.clips.getClipProtocolURLFromPath(v.filepath),
            [v],
        ),
        C = 0 === v.length,
        k = l.useCallback(
            (e) => {
                let t = h.current;
                if (null == t) return;
                let n = v.editMetadata?.start ?? 0,
                    a = v.editMetadata?.end ?? t.duration;
                t.currentTime = Math.max(0, x.current + ((a - n) * e) / 100);
            },
            [h, x, v],
        );
    l.useImperativeHandle(
        t,
        () => ({
            releaseSource() {
                (0, u.A)(h.current);
            },
            seek(e) {
                k(e);
            },
        }),
        [k],
    );
    let g = l.useCallback(
            (e) => {
                if (!d || null == h.current) return;
                let t = h.current.getBoundingClientRect();
                k(((e.clientX - t.left) / t.width) * 100);
            },
            [h, d, k],
        ),
        b = l.useRef(null),
        j = l.useRef(n);
    return (
        l.useEffect(() => {
            if (((j.current = n), C)) return;
            let e = h.current;
            if (null != e)
                if (n) {
                    if (!e.paused) return;
                    e.currentTime = x.current;
                    let t = e.play();
                    ((b.current = t), t.catch(() => {}));
                } else {
                    let t = b.current;
                    ((b.current = null), null != t ? t.then(() => j.current || e.pause()).catch(() => {}) : e.pause());
                }
        }, [n, h, C, x]),
        l.useEffect(() => {
            if (C || null == y) return;
            let e = h.current;
            if (null != e)
                return () => {
                    (0, u.A)(e);
                };
        }, [y, h, C]),
        l.useEffect(() => {
            let e = h?.current;
            if (null == e || C || null == p) return;
            let t = null;
            function n() {
                if (null == e || null == p) return;
                if (e.paused || e.ended) {
                    ((t = null), p(0));
                    return;
                }
                let a = v.editMetadata?.start ?? 0,
                    l = v.editMetadata?.end ?? e.duration,
                    r = ((e.currentTime - a) / (l - a)) * 100;
                (p(isNaN(r) ? 0 : Math.max(0, Math.min(100, r))), (t = requestAnimationFrame(n)));
            }
            function a() {
                null == t && (t = requestAnimationFrame(n));
            }
            function l() {
                null != p && null != t && (cancelAnimationFrame(t), (t = null), p(0));
            }
            return (
                e.addEventListener("play", a),
                e.addEventListener("pause", l),
                e.addEventListener("ended", l),
                e.paused || a(),
                () => {
                    (null != t && (cancelAnimationFrame(t), p(0)),
                        e.removeEventListener("play", a),
                        e.removeEventListener("pause", l),
                        e.removeEventListener("ended", l));
                }
            );
        }, [h, C, v.editMetadata, p]),
        (0, a.jsxs)("div", {
            className: o.Q,
            onMouseMove: g,
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
