t.d(n, { Z: () => p }), t(47120);
var l = t(200651),
    a = t(192379),
    i = t(120356),
    s = t.n(i),
    r = t(392711),
    u = t(780384),
    o = t(481060),
    d = t(410030),
    c = t(44315),
    f = t(293501),
    m = t(943351),
    h = t(231338),
    g = t(335351);
let p = a.memo(function (e) {
    let { file: n, audio: t, className: i, waveformSettings: p } = e,
        [x, v] = a.useState({
            width: 0,
            height: 0
        }),
        y = a.useRef(null),
        b = a.useMemo(() => {
            var e;
            let n = null !== (e = null == t ? void 0 : t.duration) && void 0 !== e ? e : 1;
            return {
                fineTuning: -1,
                fineTuningResolution: n / m.nl.fineTuningScale,
                duration: n,
                ...(null != p ? p : {})
            };
        }, [t, p]),
        N = (0, f.b1)(n),
        j = (0, f.NN)(N, y.current, b),
        w = (0, d.ZP)(),
        C = (0, c.Sl)((0, u.wj)(w) ? h.Il.PRIMARY_300 : h.Il.PRIMARY_700),
        S = null == N || null == j,
        Z = (0 === x.width || 0 === x.height || S) && null != n,
        M = a.useCallback(() => {
            null != y.current &&
                v({
                    width: y.current.offsetWidth,
                    height: y.current.offsetHeight
                });
        }, []);
    return (
        a.useEffect(() => {
            if (null != y.current) {
                let e = new ResizeObserver((0, r.debounce)(M, 50));
                return (
                    e.observe(y.current),
                    () => {
                        e.disconnect();
                    }
                );
            }
        }, [M]),
        a.useEffect(() => {
            if (null == y.current) return;
            let e = y.current,
                n = e.getContext('2d');
            if (null == n) return;
            let { width: t, height: l } = e;
            if (0 !== x.width && 0 !== x.height && null != j && j.length > 0) {
                let e = t / j.length,
                    a = -(e * (m.nl.waveformBarWidth - 1));
                n.clearRect(0, 0, t, l), (n.fillStyle = C.hex);
                for (let t = 0; t < j.length; t++) {
                    let i = j[t] * l,
                        s = t * e + a,
                        r = l / 2 - i / 2;
                    n.fillRect(s, r, e - a, i);
                }
            }
        }, [C, x, w, j]),
        (0, l.jsxs)('div', {
            className: s()(g.container, i),
            children: [
                (0, l.jsx)('canvas', {
                    className: g.waveformCanvas,
                    ref: y,
                    width: 4 * x.width,
                    height: 4 * x.height
                }),
                Z &&
                    (0, l.jsx)('div', {
                        className: g.loading,
                        children: (0, l.jsx)(o.$jN, { type: o.RAz.SPINNING_CIRCLE })
                    })
            ]
        })
    );
});
