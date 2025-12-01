n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(970838),
    l = n(376398);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function p(e) {
    var { streamId: t, paused: n = !1, onReady: a, onResize: c, className: f } = e,
        p = d(e, ["streamId", "paused", "onReady", "onResize", "className"]);
    let _ = i.useRef(null),
        m = i.useRef({
            width: 0,
            height: 0,
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
                n
                    ? (null == (e = _.current) || e.pause(), (0, s.Bw)(t))
                    : null == (r = _.current) || r.play().catch(() => {}),
                () => {
                    n && (0, s.rY)(t);
                }
            );
        }, [n]);
    let h = i.useCallback(() => {
        var e, t, n, r;
        let { width: i, height: a } = m.current,
            o = null != (n = null == (e = _.current) ? void 0 : e.videoWidth) ? n : 0,
            s = null != (r = null == (t = _.current) ? void 0 : t.videoHeight) ? r : 0;
        if (i !== o || a !== s) {
            let e = {
                width: o,
                height: s,
            };
            null == c || c(e), (m.current = e);
        }
    }, [c]);
    i.useLayoutEffect(() => {
        let e = _.current;
        if (null != e) return e.addEventListener("resize", h), () => e.removeEventListener("resize", h);
    }, [h]);
    let g = i.useCallback(() => {
            null == a || a();
        }, [a]),
        E = i.useCallback(
            (e) => {
                n || e.currentTarget.play();
            },
            [n],
        );
    return (0, r.jsx)(
        "video",
        u(
            {
                className: o()("media-engine-video", f),
                ref: _,
                autoPlay: !0,
                onPause: E,
                onCanPlayThrough: g,
                muted: !0,
            },
            p,
        ),
    );
}
