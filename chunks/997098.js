n.d(t, {
    A: () => g,
}),
    n(896048);
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(735438),
    u = n(827734),
    o = n(397927),
    c = n(736653),
    d = n(30875),
    f = n(335416),
    m = n(62108);
let g = i.memo(function (e) {
    let { file: t, audio: n, className: a, waveformSettings: g } = e,
        [h, v] = i.useState({
            width: 0,
            height: 0,
        }),
        b = i.useRef(null),
        x = i.useMemo(() => {
            var e;
            let t = null != (e = null == n ? void 0 : n.duration) ? e : 1;
            return (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        l = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        l.forEach(function (t) {
                            var l;
                            (l = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: l,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = l);
                        });
                }
                return e;
            })(
                {
                    fineTuning: -1,
                    fineTuningResolution: t / f.Jh.fineTuningScale,
                    duration: t,
                },
                null != g ? g : {},
            );
        }, [n, g]),
        p = (0, d.AX)(t),
        j = (0, d.$t)(p, b.current, x),
        y = (0, c.Ay)(),
        w = (0, o.rdh)(u.A.colors.ICON_STRONG).hex(),
        N = null == p || null == j,
        O = (0 === h.width || 0 === h.height || N) && null != t,
        A = i.useCallback(() => {
            null != b.current &&
                v({
                    width: b.current.offsetWidth,
                    height: b.current.offsetHeight,
                });
        }, []);
    return (
        i.useEffect(() => {
            if (null != b.current) {
                let e = new ResizeObserver((0, s.debounce)(A, 50));
                return (
                    e.observe(b.current),
                    () => {
                        e.disconnect();
                    }
                );
            }
        }, [A]),
        i.useEffect(() => {
            if (null == b.current) return;
            let e = b.current,
                t = e.getContext("2d");
            if (null == t) return;
            let { width: n, height: l } = e;
            if (0 !== h.width && 0 !== h.height && null != j && j.length > 0) {
                let e = n / j.length,
                    i = -(e * (f.Jh.waveformBarWidth - 1));
                t.clearRect(0, 0, n, l), (t.fillStyle = w);
                for (let n = 0; n < j.length; n++) {
                    let a = j[n] * l,
                        r = n * e + i,
                        s = l / 2 - a / 2;
                    t.fillRect(r, s, e - i, a);
                }
            }
        }, [w, h, y, j]),
        (0, l.jsxs)("div", {
            className: r()(m.kL, a),
            children: [
                (0, l.jsx)("canvas", {
                    className: m.s4,
                    ref: b,
                    width: 4 * h.width,
                    height: 4 * h.height,
                }),
                O &&
                    (0, l.jsx)("div", {
                        className: m.Lq,
                        children: (0, l.jsx)(o.y$y, {
                            type: o.tVU.SPINNING_CIRCLE,
                        }),
                    }),
            ],
        })
    );
});
