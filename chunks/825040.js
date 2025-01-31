n.d(t, { Z: () => u });
var i = n(200651),
    r = n(192379),
    a = n(665443),
    s = n.n(a),
    o = n(970838),
    l = n(376398);
function u(e) {
    let { streamId: t, paused: n, onReady: a, onResize: u, className: c, ...d } = e,
        f = r.useRef(null),
        _ = r.useRef({
            width: 0,
            height: 0
        });
    r.useLayoutEffect(() => {
        let e = f.current;
        if (null != e)
            return (
                (0, o.rY)(t),
                (e.srcObject = (0, l.aG)(t)),
                () => {
                    (0, o.Bw)(t), (e.srcObject = null), e.load();
                }
            );
    }, [t]),
        r.useEffect(() => {
            var e, i;
            return (
                n ? (null === (e = f.current) || void 0 === e || e.pause(), (0, o.Bw)(t)) : null === (i = f.current) || void 0 === i || i.play().catch(() => {}),
                () => {
                    n && (0, o.rY)(t);
                }
            );
        }, [n]);
    let p = r.useCallback(() => {
        var e, t, n, i;
        let { width: r, height: a } = _.current,
            s = null !== (n = null === (e = f.current) || void 0 === e ? void 0 : e.videoWidth) && void 0 !== n ? n : 0,
            o = null !== (i = null === (t = f.current) || void 0 === t ? void 0 : t.videoHeight) && void 0 !== i ? i : 0;
        if (r !== s || a !== o) {
            let e = {
                width: s,
                height: o
            };
            null == u || u(e), (_.current = e);
        }
    }, [u]);
    r.useLayoutEffect(() => {
        let e = f.current;
        if (null != e) return e.addEventListener('resize', p), () => e.removeEventListener('resize', p);
    }, [p]);
    let h = r.useCallback(() => {
            null == a || a();
        }, [a]),
        m = r.useCallback(
            (e) => {
                n || e.currentTarget.play();
            },
            [n]
        );
    return (0, i.jsx)('video', {
        className: s()('media-engine-video', c),
        ref: f,
        autoPlay: !0,
        onPause: m,
        onCanPlayThrough: h,
        muted: !0,
        ...d
    });
}
u.defaultProps = { paused: !1 };
