"use strict";
n.d(t, { d: () => u });
var i = n(627968),
    r = n(64700),
    a = n(66455),
    s = n(607470),
    l = n(609174),
    o = n(367974),
    d = n(77729),
    c = n(204351);
let u = r.forwardRef((e, t) => {
    let { isStatic: n = !1, children: r, ...a } = e;
    return n ? (0, i.jsx)(_, { ref: t, children: r }) : (0, i.jsx)(E, { ref: t, ...a, children: r });
});
u.displayName = "ClipThumbnail";
let _ = r.forwardRef((e, t) => {
    let { children: n } = e,
        a = (0, l.Y_)();
    return (
        r.useImperativeHandle(t, () => ({ releaseSource() {} }), []),
        (0, i.jsxs)("div", {
            className: c.Q,
            children: [(0, i.jsx)("img", { alt: "", src: a.thumbnail, className: c.f, loading: "lazy" }), n],
        })
    );
});
_.displayName = "ClipStaticThumbnail";
let E = r.forwardRef((e, t) => {
    let { isPlaying: n = !1, scrubOnHover: u = !1, preload: _ = "metadata", onProgressChange: E, children: A } = e,
        h = (0, l.Y_)(),
        I = r.useRef(null),
        f = (0, a.A)(h.editMetadata?.start ?? 0);
    r.useImperativeHandle(
        t,
        () => ({
            releaseSource() {
                (0, o.A)(I.current);
            },
        }),
        [],
    );
    let p = (0, r.useMemo)(
            () =>
                null == h || null == d.A.clips.getClipProtocolURLFromPath
                    ? null
                    : d.A.clips.getClipProtocolURLFromPath(h.filepath),
            [h],
        ),
        T = 0 === h.length,
        m = r.useCallback(
            (e) => {
                let t = I.current;
                if (null == t) return;
                let n = h.editMetadata?.start ?? 0,
                    i = h.editMetadata?.end ?? t.duration;
                t.currentTime = Math.max(0, f.current + ((i - n) * e) / 100);
            },
            [I, f, h],
        ),
        g = r.useCallback(
            (e) => {
                if (!u || null == I.current) return;
                let t = I.current.getBoundingClientRect();
                m(((e.clientX - t.left) / t.width) * 100);
            },
            [I, u, m],
        ),
        S = r.useRef(null),
        N = r.useRef(n);
    return (
        r.useEffect(() => {
            if (((N.current = n), T)) return;
            let e = I.current;
            if (null != e)
                if (n) {
                    if (!e.paused) return;
                    e.currentTime = f.current;
                    let t = e.play();
                    (S.current = t), t.catch(() => {});
                } else {
                    let t = S.current;
                    (S.current = null), null != t ? t.then(() => N.current || e.pause()).catch(() => {}) : e.pause();
                }
        }, [n, I, T, f]),
        r.useEffect(() => {
            if (T || null == p) return;
            let e = I.current;
            if (null != e)
                return () => {
                    (0, o.A)(e);
                };
        }, [p, I, T]),
        r.useEffect(() => {
            let e = I?.current;
            if (null == e || T || null == E) return;
            let t = null,
                n = () => {
                    if (e.paused || e.ended) {
                        (t = null), E(0);
                        return;
                    }
                    let i = h.editMetadata?.start ?? 0,
                        r = h.editMetadata?.end ?? e.duration,
                        a = ((e.currentTime - i) / (r - i)) * 100;
                    E(isNaN(a) ? 0 : Math.max(0, Math.min(100, a))), (t = requestAnimationFrame(n));
                };
            function i() {
                null == t && (t = requestAnimationFrame(n));
            }
            let r = () => {
                null != t && (cancelAnimationFrame(t), (t = null), E(0));
            };
            return (
                e.addEventListener("play", i),
                e.addEventListener("pause", r),
                e.addEventListener("ended", r),
                e.paused || i(),
                () => {
                    null != t && (cancelAnimationFrame(t), E(0)),
                        e.removeEventListener("play", i),
                        e.removeEventListener("pause", r),
                        e.removeEventListener("ended", r);
                }
            );
        }, [I, T, h.editMetadata, E]),
        (0, i.jsxs)("div", {
            className: c.Q,
            onMouseMove: g,
            children: [
                T
                    ? (0, i.jsx)("img", { alt: "", src: h.thumbnail, className: c.f, loading: "lazy" })
                    : null != p
                      ? (0, i.jsx)(s.A, {
                            preload: _,
                            poster: h.thumbnail,
                            muted: !0,
                            src: p,
                            loop: !0,
                            className: c.f,
                            ref: I,
                        })
                      : null,
                A,
            ],
        })
    );
});
E.displayName = "ClipDynamicThumbnail";
