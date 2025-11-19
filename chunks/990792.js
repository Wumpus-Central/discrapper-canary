t.d(n, { Z: () => v }), t(388685);
var l = t(54381),
    a = t(473749),
    i = t(120356),
    r = t.n(i),
    s = t(392711),
    o = t(780384),
    u = t(481060),
    c = t(410030),
    d = t(44315),
    f = t(293501),
    m = t(943351),
    g = t(231338),
    h = t(994779);
let v = a.memo(function (e) {
    let { file: n, audio: t, className: i, waveformSettings: v } = e,
        [p, b] = a.useState({
            width: 0,
            height: 0,
        }),
        y = a.useRef(null),
        j = a.useMemo(() => {
            var e;
            let n = null != (e = null == t ? void 0 : t.duration) ? e : 1;
            return (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        l = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            }),
                        )),
                        l.forEach(function (n) {
                            var l;
                            (l = t[n]),
                                n in e
                                    ? Object.defineProperty(e, n, {
                                          value: l,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[n] = l);
                        });
                }
                return e;
            })(
                {
                    fineTuning: -1,
                    fineTuningResolution: n / m.nl.fineTuningScale,
                    duration: n,
                },
                null != v ? v : {},
            );
        }, [t, v]),
        x = (0, f.b1)(n),
        N = (0, f.NN)(x, y.current, j),
        w = (0, c.ZP)(),
        C = (0, d.Sl)((0, o.wj)(w) ? g.Il.PRIMARY_300 : g.Il.PRIMARY_700),
        S = null == x || null == N,
        O = (0 === p.width || 0 === p.height || S) && null != n,
        Z = a.useCallback(() => {
            null != y.current &&
                b({
                    width: y.current.offsetWidth,
                    height: y.current.offsetHeight,
                });
        }, []);
    return (
        a.useEffect(() => {
            if (null != y.current) {
                let e = new ResizeObserver((0, s.debounce)(Z, 50));
                return (
                    e.observe(y.current),
                    () => {
                        e.disconnect();
                    }
                );
            }
        }, [Z]),
        a.useEffect(() => {
            if (null == y.current) return;
            let e = y.current,
                n = e.getContext("2d");
            if (null == n) return;
            let { width: t, height: l } = e;
            if (0 !== p.width && 0 !== p.height && null != N && N.length > 0) {
                let e = t / N.length,
                    a = -(e * (m.nl.waveformBarWidth - 1));
                n.clearRect(0, 0, t, l), (n.fillStyle = C.hex);
                for (let t = 0; t < N.length; t++) {
                    let i = N[t] * l,
                        r = t * e + a,
                        s = l / 2 - i / 2;
                    n.fillRect(r, s, e - a, i);
                }
            }
        }, [C, p, w, N]),
        (0, l.jsxs)("div", {
            className: r()(h.container, i),
            children: [
                (0, l.jsx)("canvas", {
                    className: h.waveformCanvas,
                    ref: y,
                    width: 4 * p.width,
                    height: 4 * p.height,
                }),
                O &&
                    (0, l.jsx)("div", {
                        className: h.loading,
                        children: (0, l.jsx)(u.$jN, { type: u.RAz.SPINNING_CIRCLE }),
                    }),
            ],
        })
    );
});
