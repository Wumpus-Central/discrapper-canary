l.d(t, { A: () => h });
var n = l(627968),
    a = l(64700),
    i = l(503698),
    s = l.n(i),
    r = l(735438),
    u = l(827734),
    o = l(397927),
    d = l(736653),
    c = l(30875),
    m = l(335416),
    f = l(756546);
let h = a.memo(function (e) {
    let { file: t, audio: l, className: i, waveformSettings: h } = e,
        [g, x] = a.useState({ width: 0, height: 0 }),
        v = a.useRef(null),
        j = a.useMemo(() => {
            let e = l?.duration ?? 1;
            return { fineTuning: -1, fineTuningResolution: e / m.Jh.fineTuningScale, duration: e, ...(h ?? {}) };
        }, [l, h]),
        p = (0, c.AX)(t),
        N = (0, c.$t)(p, v.current, j),
        b = (0, d.Ay)(),
        y = (0, o.rdh)(u.A.colors.ICON_STRONG).hex(),
        C = null == p || null == N,
        A = (0 === g.width || 0 === g.height || C) && null != t,
        w = a.useCallback(() => {
            null != v.current && x({ width: v.current.offsetWidth, height: v.current.offsetHeight });
        }, []);
    return (
        a.useEffect(() => {
            if (null != v.current) {
                let e = new ResizeObserver((0, r.debounce)(w, 50));
                return (
                    e.observe(v.current),
                    () => {
                        e.disconnect();
                    }
                );
            }
        }, [w]),
        a.useEffect(() => {
            if (null == v.current) return;
            let e = v.current,
                t = e.getContext("2d");
            if (null == t) return;
            let { width: l, height: n } = e;
            if (0 !== g.width && 0 !== g.height && null != N && N.length > 0) {
                let e = l / N.length,
                    a = -(e * (m.Jh.waveformBarWidth - 1));
                t.clearRect(0, 0, l, n), (t.fillStyle = y);
                for (let l = 0; l < N.length; l++) {
                    let i = N[l] * n,
                        s = l * e + a,
                        r = n / 2 - i / 2;
                    t.fillRect(s, r, e - a, i);
                }
            }
        }, [y, g, b, N]),
        (0, n.jsxs)("div", {
            className: s()(f.kL, i),
            children: [
                (0, n.jsx)("canvas", { className: f.s4, ref: v, width: 4 * g.width, height: 4 * g.height }),
                A &&
                    (0, n.jsx)("div", {
                        className: f.Lq,
                        children: (0, n.jsx)(o.y$y, { type: o.tVU.SPINNING_CIRCLE }),
                    }),
            ],
        })
    );
});
