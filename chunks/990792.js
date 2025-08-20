t.d(n, { Z: () => p }), t(388685);
var a = t(951288),
    l = t(647438),
    i = t(120356),
    r = t.n(i),
    o = t(392711),
    s = t(780384),
    u = t(481060),
    c = t(410030),
    d = t(44315),
    f = t(293501),
    m = t(943351),
    h = t(231338),
    g = t(782445);
let p = l.memo(function (e) {
    let { file: n, audio: t, className: i, waveformSettings: p } = e,
        [y, b] = l.useState({
            width: 0,
            height: 0,
        }),
        v = l.useRef(null),
        x = l.useMemo(() => {
            var e;
            let n = null != (e = null == t ? void 0 : t.duration) ? e : 1;
            return (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        a = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (a = a.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            }),
                        )),
                        a.forEach(function (n) {
                            var a;
                            (a = t[n]),
                                n in e
                                    ? Object.defineProperty(e, n, {
                                          value: a,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[n] = a);
                        });
                }
                return e;
            })(
                {
                    fineTuning: -1,
                    fineTuningResolution: n / m.nl.fineTuningScale,
                    duration: n,
                },
                null != p ? p : {},
            );
        }, [t, p]),
        j = (0, f.b1)(n),
        _ = (0, f.NN)(j, v.current, x),
        w = (0, c.ZP)(),
        N = (0, d.Sl)((0, s.wj)(w) ? h.Il.PRIMARY_300 : h.Il.PRIMARY_700),
        C = null == j || null == _,
        S = (0 === y.width || 0 === y.height || C) && null != n,
        O = l.useCallback(() => {
            null != v.current &&
                b({
                    width: v.current.offsetWidth,
                    height: v.current.offsetHeight,
                });
        }, []);
    return (
        l.useEffect(() => {
            if (null != v.current) {
                let e = new ResizeObserver((0, o.debounce)(O, 50));
                return (
                    e.observe(v.current),
                    () => {
                        e.disconnect();
                    }
                );
            }
        }, [O]),
        l.useEffect(() => {
            if (null == v.current) return;
            let e = v.current,
                n = e.getContext("2d");
            if (null == n) return;
            let { width: t, height: a } = e;
            if (0 !== y.width && 0 !== y.height && null != _ && _.length > 0) {
                let e = t / _.length,
                    l = -(e * (m.nl.waveformBarWidth - 1));
                n.clearRect(0, 0, t, a), (n.fillStyle = N.hex);
                for (let t = 0; t < _.length; t++) {
                    let i = _[t] * a,
                        r = t * e + l,
                        o = a / 2 - i / 2;
                    n.fillRect(r, o, e - l, i);
                }
            }
        }, [N, y, w, _]),
        (0, a.jsxs)("div", {
            className: r()(g.container, i),
            children: [
                (0, a.jsx)("canvas", {
                    className: g.waveformCanvas,
                    ref: v,
                    width: 4 * y.width,
                    height: 4 * y.height,
                }),
                S &&
                    (0, a.jsx)("div", {
                        className: g.loading,
                        children: (0, a.jsx)(u.$jN, { type: u.RAz.SPINNING_CIRCLE }),
                    }),
            ],
        })
    );
});
