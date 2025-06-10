n.d(t, { Z: () => p }), n(388685);
var l = n(255367),
    a = n(73800),
    i = n(120356),
    r = n.n(i),
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
    let { file: t, audio: n, className: i, waveformSettings: p } = e,
        [y, b] = a.useState({
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
        w = (0, f.NN)(j, v.current, x),
        N = (0, c.ZP)(),
        C = (0, d.Sl)((0, o.wj)(N) ? h.Il.PRIMARY_300 : h.Il.PRIMARY_700),
        S = null == j || null == w,
        O = (0 === y.width || 0 === y.height || S) && null != t,
        P = a.useCallback(() => {
            null != v.current &&
                b({
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
            if (0 !== y.width && 0 !== y.height && null != w && w.length > 0) {
                let e = n / w.length,
                    a = -(e * (m.nl.waveformBarWidth - 1));
                t.clearRect(0, 0, n, l), (t.fillStyle = C.hex);
                for (let n = 0; n < w.length; n++) {
                    let i = w[n] * l,
                        r = n * e + a,
                        s = l / 2 - i / 2;
                    t.fillRect(r, s, e - a, i);
                }
            }
        }, [C, y, N, w]),
        (0, l.jsxs)('div', {
            className: r()(g.container, i),
            children: [
                (0, l.jsx)('canvas', {
                    className: g.waveformCanvas,
                    ref: v,
                    width: 4 * y.width,
                    height: 4 * y.height
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
