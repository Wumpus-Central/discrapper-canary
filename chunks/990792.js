t.d(n, { Z: () => p }), t(47120);
var l = t(200651),
    a = t(192379),
    r = t(120356),
    i = t.n(r),
    s = t(392711),
    o = t(780384),
    u = t(481060),
    c = t(410030),
    d = t(44315),
    f = t(293501),
    m = t(943351),
    h = t(231338),
    g = t(183519);
let p = a.memo(function (e) {
    let { file: n, audio: t, className: r, waveformSettings: p } = e,
        [b, y] = a.useState({
            width: 0,
            height: 0
        }),
        v = a.useRef(null),
        x = a.useMemo(() => {
            var e;
            let n = null != (e = null == t ? void 0 : t.duration) ? e : 1;
            return (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        l = Object.keys(t);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            })
                        )),
                        l.forEach(function (n) {
                            var l;
                            (l = t[n]),
                                n in e
                                    ? Object.defineProperty(e, n, {
                                          value: l,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[n] = l);
                        });
                }
                return e;
            })(
                {
                    fineTuning: -1,
                    fineTuningResolution: n / m.nl.fineTuningScale,
                    duration: n
                },
                null != p ? p : {}
            );
        }, [t, p]),
        j = (0, f.b1)(n),
        N = (0, f.NN)(j, v.current, x),
        w = (0, c.ZP)(),
        C = (0, d.Sl)((0, o.wj)(w) ? h.Il.PRIMARY_300 : h.Il.PRIMARY_700),
        S = null == j || null == N,
        O = (0 === b.width || 0 === b.height || S) && null != n,
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
                n = e.getContext('2d');
            if (null == n) return;
            let { width: t, height: l } = e;
            if (0 !== b.width && 0 !== b.height && null != N && N.length > 0) {
                let e = t / N.length,
                    a = -(e * (m.nl.waveformBarWidth - 1));
                n.clearRect(0, 0, t, l), (n.fillStyle = C.hex);
                for (let t = 0; t < N.length; t++) {
                    let r = N[t] * l,
                        i = t * e + a,
                        s = l / 2 - r / 2;
                    n.fillRect(i, s, e - a, r);
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
