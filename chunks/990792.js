t.d(n, { Z: () => g }), t(388685);
var l = t(54381),
    a = t(473749),
    i = t(120356),
    r = t.n(i),
    s = t(392711),
    o = t(692547),
    u = t(481060),
    c = t(410030),
    d = t(293501),
    f = t(943351),
    m = t(782445);
let g = a.memo(function (e) {
    let { file: n, audio: t, className: i, waveformSettings: g } = e,
        [h, v] = a.useState({
            width: 0,
            height: 0,
        }),
        p = a.useRef(null),
        b = a.useMemo(() => {
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
                    fineTuningResolution: n / f.nl.fineTuningScale,
                    duration: n,
                },
                null != g ? g : {},
            );
        }, [t, g]),
        y = (0, d.b1)(n),
        j = (0, d.NN)(y, p.current, b),
        x = (0, c.ZP)(),
        N = (0, u.dQu)(o.Z.colors.ICON_PRIMARY).hex(),
        w = null == y || null == j,
        C = (0 === h.width || 0 === h.height || w) && null != n,
        S = a.useCallback(() => {
            null != p.current &&
                v({
                    width: p.current.offsetWidth,
                    height: p.current.offsetHeight,
                });
        }, []);
    return (
        a.useEffect(() => {
            if (null != p.current) {
                let e = new ResizeObserver((0, s.debounce)(S, 50));
                return (
                    e.observe(p.current),
                    () => {
                        e.disconnect();
                    }
                );
            }
        }, [S]),
        a.useEffect(() => {
            if (null == p.current) return;
            let e = p.current,
                n = e.getContext("2d");
            if (null == n) return;
            let { width: t, height: l } = e;
            if (0 !== h.width && 0 !== h.height && null != j && j.length > 0) {
                let e = t / j.length,
                    a = -(e * (f.nl.waveformBarWidth - 1));
                n.clearRect(0, 0, t, l), (n.fillStyle = N);
                for (let t = 0; t < j.length; t++) {
                    let i = j[t] * l,
                        r = t * e + a,
                        s = l / 2 - i / 2;
                    n.fillRect(r, s, e - a, i);
                }
            }
        }, [N, h, x, j]),
        (0, l.jsxs)("div", {
            className: r()(m.container, i),
            children: [
                (0, l.jsx)("canvas", {
                    className: m.waveformCanvas,
                    ref: p,
                    width: 4 * h.width,
                    height: 4 * h.height,
                }),
                C &&
                    (0, l.jsx)("div", {
                        className: m.loading,
                        children: (0, l.jsx)(u.$jN, { type: u.RAz.SPINNING_CIRCLE }),
                    }),
            ],
        })
    );
});
