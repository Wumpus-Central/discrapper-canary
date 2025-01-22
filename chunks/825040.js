r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(665443),
    s = r.n(o),
    l = r(970838),
    u = r(376398);
function c(e) {
    let { streamId: n, paused: r, onReady: o, onResize: c, className: d, ...f } = e,
        p = a.useRef(null),
        h = a.useRef({
            width: 0,
            height: 0
        });
    a.useLayoutEffect(() => {
        let e = p.current;
        if (null != e)
            return (
                (0, l.rY)(n),
                (e.srcObject = (0, u.aG)(n)),
                () => {
                    (0, l.Bw)(n), (e.srcObject = null), e.load();
                }
            );
    }, [n]),
        a.useEffect(() => {
            var e, i;
            return (
                r ? (null === (e = p.current) || void 0 === e || e.pause(), (0, l.Bw)(n)) : null === (i = p.current) || void 0 === i || i.play().catch(() => {}),
                () => {
                    r && (0, l.rY)(n);
                }
            );
        }, [r]);
    let _ = a.useCallback(() => {
        var e, n, r, i;
        let { width: a, height: o } = h.current,
            s = null !== (r = null === (e = p.current) || void 0 === e ? void 0 : e.videoWidth) && void 0 !== r ? r : 0,
            l = null !== (i = null === (n = p.current) || void 0 === n ? void 0 : n.videoHeight) && void 0 !== i ? i : 0;
        if (a !== s || o !== l) {
            let e = {
                width: s,
                height: l
            };
            null == c || c(e), (h.current = e);
        }
    }, [c]);
    a.useLayoutEffect(() => {
        let e = p.current;
        if (null != e) return e.addEventListener('resize', _), () => e.removeEventListener('resize', _);
    }, [_]);
    let m = a.useCallback(() => {
            null == o || o();
        }, [o]),
        g = a.useCallback(
            (e) => {
                !r && e.currentTarget.play();
            },
            [r]
        );
    return (0, i.jsx)('video', {
        className: s()('media-engine-video', d),
        ref: p,
        autoPlay: !0,
        onPause: g,
        onCanPlayThrough: m,
        muted: !0,
        ...f
    });
}
c.defaultProps = { paused: !1 };
