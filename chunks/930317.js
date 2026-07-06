"use strict";
n.d(t, { d: () => d });
var i = n(627968),
    r = n(64700),
    s = n(66455),
    a = n(607470),
    o = n(609174),
    l = n(367974),
    u = n(77729),
    c = n(204351);
let d = r.forwardRef((e, t) => {
    let { isStatic: n = !1, children: r, ...s } = e;
    return n ? (0, i.jsx)(_, { ref: t, children: r }) : (0, i.jsx)(h, { ref: t, ...s, children: r });
});
d.displayName = "ClipThumbnail";
let _ = r.forwardRef((e, t) => {
    let { children: n } = e,
        s = (0, o.Y_)();
    return (
        r.useImperativeHandle(t, () => ({ releaseSource() {} }), []),
        (0, i.jsxs)("div", {
            className: c.Q,
            children: [(0, i.jsx)("img", { alt: "", src: s.thumbnail, className: c.f, loading: "lazy" }), n],
        })
    );
});
_.displayName = "ClipStaticThumbnail";
let h = r.forwardRef((e, t) => {
    let { isPlaying: n = !1, scrubOnHover: d = !1, preload: _ = "metadata", onProgressChange: h, children: f } = e,
        E = (0, o.Y_)(),
        p = r.useRef(null),
        m = (0, s.A)(E.editMetadata?.start ?? 0);
    r.useImperativeHandle(
        t,
        () => ({
            releaseSource() {
                (0, l.A)(p.current);
            },
        }),
        [],
    );
    let g = (0, r.useMemo)(
            () =>
                null == E || null == u.A.clips.getClipProtocolURLFromPath
                    ? null
                    : u.A.clips.getClipProtocolURLFromPath(E.filepath),
            [E],
        ),
        A = 0 === E.length,
        I = r.useCallback(
            (e) => {
                let t = p.current;
                if (null == t) return;
                let n = E.editMetadata?.start ?? 0,
                    i = E.editMetadata?.end ?? t.duration;
                t.currentTime = Math.max(0, m.current + ((i - n) * e) / 100);
            },
            [p, m, E],
        ),
        T = r.useCallback(
            (e) => {
                if (!d || null == p.current) return;
                let t = p.current.getBoundingClientRect();
                I(((e.clientX - t.left) / t.width) * 100);
            },
            [p, d, I],
        ),
        S = r.useRef(null),
        N = r.useRef(n);
    return (
        r.useEffect(() => {
            if (((N.current = n), A)) return;
            let e = p.current;
            if (null != e)
                if (n) {
                    if (!e.paused) return;
                    e.currentTime = m.current;
                    let t = e.play();
                    (S.current = t), t.catch(() => {});
                } else {
                    let t = S.current;
                    (S.current = null), null != t ? t.then(() => N.current || e.pause()).catch(() => {}) : e.pause();
                }
        }, [n, p, A, m]),
        r.useEffect(() => {
            if (A || null == g) return;
            let e = p.current;
            if (null != e)
                return () => {
                    (0, l.A)(e);
                };
        }, [g, p, A]),
        r.useEffect(() => {
            let e = p?.current;
            if (null == e || A || null == h) return;
            let t = null,
                n = () => {
                    if (e.paused || e.ended) {
                        (t = null), h(0);
                        return;
                    }
                    let i = E.editMetadata?.start ?? 0,
                        r = E.editMetadata?.end ?? e.duration,
                        s = ((e.currentTime - i) / (r - i)) * 100;
                    h(isNaN(s) ? 0 : Math.max(0, Math.min(100, s))), (t = requestAnimationFrame(n));
                };
            function i() {
                null == t && (t = requestAnimationFrame(n));
            }
            let r = () => {
                null != t && (cancelAnimationFrame(t), (t = null), h(0));
            };
            return (
                e.addEventListener("play", i),
                e.addEventListener("pause", r),
                e.addEventListener("ended", r),
                e.paused || i(),
                () => {
                    null != t && (cancelAnimationFrame(t), h(0)),
                        e.removeEventListener("play", i),
                        e.removeEventListener("pause", r),
                        e.removeEventListener("ended", r);
                }
            );
        }, [p, A, E.editMetadata, h]),
        (0, i.jsxs)("div", {
            className: c.Q,
            onMouseMove: T,
            children: [
                A
                    ? (0, i.jsx)("img", { alt: "", src: E.thumbnail, className: c.f, loading: "lazy" })
                    : null != g
                      ? (0, i.jsx)(a.A, {
                            preload: _,
                            poster: E.thumbnail,
                            muted: !0,
                            src: g,
                            loop: !0,
                            className: c.f,
                            ref: p,
                        })
                      : null,
                f,
            ],
        })
    );
});
h.displayName = "ClipDynamicThumbnail";
