n.d(t, { d: () => d });
var a = n(477900),
    l = n(582128),
    r = n(66455),
    i = n(607470),
    s = n(609174),
    u = n(367974),
    c = n(77729),
    o = n(292490);
function d(e) {
    let { isStatic: t = !1, children: n, ref: l, ...r } = e;
    return t ? (0, a.jsx)(f, { ref: l, children: n }) : (0, a.jsx)(p, { ref: l, ...r, children: n });
}
function f(e) {
    let { children: t, ref: n } = e,
        r = (0, s.Y_)();
    return (
        l.useImperativeHandle(n, () => ({ releaseSource() {}, seek() {} }), []),
        (0, a.jsxs)("div", {
            className: o.Q,
            children: [(0, a.jsx)("img", { alt: "", src: r.thumbnail, className: o.f, loading: "lazy" }), t],
        })
    );
}
function p(e) {
    let {
            isPlaying: t = !1,
            scrubOnHover: n = !1,
            preload: d = "metadata",
            onProgressChange: f,
            children: p,
            ref: m,
        } = e,
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
        m,
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
                if (!n || null == h.current) return;
                let t = h.current.getBoundingClientRect();
                k(((e.clientX - t.left) / t.width) * 100);
            },
            [h, n, k],
        ),
        b = l.useRef(null),
        j = l.useRef(t);
    return (
        l.useEffect(() => {
            if (((j.current = t), C)) return;
            let e = h.current;
            if (null != e)
                if (t) {
                    if (!e.paused) return;
                    e.currentTime = x.current;
                    let t = e.play();
                    ((b.current = t), t.catch(() => {}));
                } else {
                    let t = b.current;
                    ((b.current = null), null != t ? t.then(() => j.current || e.pause()).catch(() => {}) : e.pause());
                }
        }, [t, h, C, x]),
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
            if (null == e || C || null == f) return;
            let t = null;
            function n() {
                if (null == e || null == f) return;
                if (e.paused || e.ended) {
                    ((t = null), f(0));
                    return;
                }
                let a = v.editMetadata?.start ?? 0,
                    l = v.editMetadata?.end ?? e.duration,
                    r = ((e.currentTime - a) / (l - a)) * 100;
                (f(isNaN(r) ? 0 : Math.max(0, Math.min(100, r))), (t = requestAnimationFrame(n)));
            }
            function a() {
                null == t && (t = requestAnimationFrame(n));
            }
            function l() {
                null != f && null != t && (cancelAnimationFrame(t), (t = null), f(0));
            }
            return (
                e.addEventListener("play", a),
                e.addEventListener("pause", l),
                e.addEventListener("ended", l),
                e.paused || a(),
                () => {
                    (null != t && (cancelAnimationFrame(t), f(0)),
                        e.removeEventListener("play", a),
                        e.removeEventListener("pause", l),
                        e.removeEventListener("ended", l));
                }
            );
        }, [h, C, v.editMetadata, f]),
        (0, a.jsxs)("div", {
            className: o.Q,
            onMouseMove: g,
            children: [
                C
                    ? (0, a.jsx)("img", { alt: "", src: v.thumbnail, className: o.f, loading: "lazy" })
                    : null != y
                      ? (0, a.jsx)(i.A, {
                            preload: d,
                            poster: v.thumbnail,
                            muted: !0,
                            src: y,
                            loop: !0,
                            className: o.f,
                            ref: h,
                        })
                      : null,
                p,
            ],
        })
    );
}
((d.displayName = "ClipThumbnail"), (f.displayName = "ClipStaticThumbnail"), (p.displayName = "ClipDynamicThumbnail"));
