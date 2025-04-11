n.d(t, { Z: () => p }), n(388685);
var l = n(200651),
    a = n(192379),
    r = n(120356),
    i = n.n(r),
    s = n(392711),
    o = n(780384),
    u = n(481060),
    c = n(410030),
    d = n(44315),
    f = n(293501),
    m = n(943351),
    h = n(231338),
    g = n(183519);
let p = a.memo(function (e) {
    let { file: t, audio: n, className: r, waveformSettings: p } = e,
        [b, y] = a.useState({
            width: 0,
            height: 0
        }),
        v = a.useRef(null),
        x = a.useMemo(() => {
            var e;
            let t = null != (e = null == n ? void 0 : n.duration) ? e : 1;
            return (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        l = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        l.forEach(function (t) {
                            var l;
                            (l = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: l,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = l);
                        });
                }
                return e;
            })(
                {
                    fineTuning: -1,
                    fineTuningResolution: t / m.nl.fineTuningScale,
                    duration: t
                },
                null != p ? p : {}
            );
        }, [n, p]),
        j = (0, f.b1)(t),
        N = (0, f.NN)(j, v.current, x),
        w = (0, c.ZP)(),
        C = (0, d.Sl)((0, o.wj)(w) ? h.Il.PRIMARY_300 : h.Il.PRIMARY_700),
        S = null == j || null == N,
        O = (0 === b.width || 0 === b.height || S) && null != t,
        P = a.useCallback(() => {
            null != v.current &&
                y({
                    width: v.current.offsetWidth,
                    height: v.current.offsetHeight
                });
        }, []);
    return (
        a.useEffect(() => {
            if (null != v.current) {
                let e = new ResizeObserver((0, s.debounce)(P, 50));
                return (
                    e.observe(v.current),
                    () => {
                        e.disconnect();
                    }
                );
            }
        }, [P]),
        a.useEffect(() => {
            if (null == v.current) return;
            let e = v.current,
                t = e.getContext('2d');
            if (null == t) return;
            let { width: n, height: l } = e;
            if (0 !== b.width && 0 !== b.height && null != N && N.length > 0) {
                let e = n / N.length,
                    a = -(e * (m.nl.waveformBarWidth - 1));
                t.clearRect(0, 0, n, l), (t.fillStyle = C.hex);
                for (let n = 0; n < N.length; n++) {
                    let r = N[n] * l,
                        i = n * e + a,
                        s = l / 2 - r / 2;
                    t.fillRect(i, s, e - a, r);
                }
            }
        }, [C, b, w, N]),
        (0, l.jsxs)('div', {
            className: i()(g.container, r),
            children: [
                (0, l.jsx)('canvas', {
                    className: g.waveformCanvas,
                    ref: v,
                    width: 4 * b.width,
                    height: 4 * b.height
                }),
                O &&
                    (0, l.jsx)('div', {
                        className: g.loading,
                        children: (0, l.jsx)(u.$jN, { type: u.RAz.SPINNING_CIRCLE })
                    })
            ]
        })
    );
});
