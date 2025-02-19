n.d(t, { Z: () => p });
var r = n(200651),
    i = n(192379),
    o = n(665443),
    a = n.n(o),
    s = n(970838),
    l = n(376398);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = f(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function p(e) {
    var { streamId: t, paused: n, onReady: o, onResize: c, className: f } = e,
        p = d(e, ['streamId', 'paused', 'onReady', 'onResize', 'className']);
    let _ = i.useRef(null),
        h = i.useRef({
            width: 0,
            height: 0
        });
    i.useLayoutEffect(() => {
        let e = _.current;
        if (null != e)
            return (
                (0, s.rY)(t),
                (e.srcObject = (0, l.aG)(t)),
                () => {
                    (0, s.Bw)(t), (e.srcObject = null), e.load();
                }
            );
    }, [t]),
        i.useEffect(() => {
            var e, r;
            return (
                n ? (null === (e = _.current) || void 0 === e || e.pause(), (0, s.Bw)(t)) : null === (r = _.current) || void 0 === r || r.play().catch(() => {}),
                () => {
                    n && (0, s.rY)(t);
                }
            );
        }, [n]);
    let m = i.useCallback(() => {
        var e, t, n, r;
        let { width: i, height: o } = h.current,
            a = null !== (n = null === (e = _.current) || void 0 === e ? void 0 : e.videoWidth) && void 0 !== n ? n : 0,
            s = null !== (r = null === (t = _.current) || void 0 === t ? void 0 : t.videoHeight) && void 0 !== r ? r : 0;
        if (i !== a || o !== s) {
            let e = {
                width: a,
                height: s
            };
            null == c || c(e), (h.current = e);
        }
    }, [c]);
    i.useLayoutEffect(() => {
        let e = _.current;
        if (null != e) return e.addEventListener('resize', m), () => e.removeEventListener('resize', m);
    }, [m]);
    let g = i.useCallback(() => {
            null == o || o();
        }, [o]),
        E = i.useCallback(
            (e) => {
                n || e.currentTarget.play();
            },
            [n]
        );
    return (0, r.jsx)(
        'video',
        u(
            {
                className: a()('media-engine-video', f),
                ref: _,
                autoPlay: !0,
                onPause: E,
                onCanPlayThrough: g,
                muted: !0
            },
            p
        )
    );
}
p.defaultProps = { paused: !1 };
