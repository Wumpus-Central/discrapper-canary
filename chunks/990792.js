t(47120);
var l = t(200651),
    a = t(192379),
    i = t(120356),
    r = t.n(i),
    s = t(392711),
    o = t(780384),
    u = t(481060),
    c = t(410030),
    d = t(44315),
    f = t(293501),
    m = t(943351),
    h = t(231338),
    g = t(487751);
n.Z = a.memo(function (e) {
    let { file: n, audio: t, className: i, waveformSettings: p } = e,
        [v, x] = a.useState({
            width: 0,
            height: 0
        }),
        N = a.useRef(null),
        y = a.useMemo(() => {
            var e;
            let n = null !== (e = null == t ? void 0 : t.duration) && void 0 !== e ? e : 1;
            return {
                fineTuning: -1,
                fineTuningResolution: n / m.nl.fineTuningScale,
                duration: n,
                ...(null != p ? p : {})
            };
        }, [t, p]),
        b = (0, f.b1)(n),
        j = (0, f.NN)(b, N.current, y),
        C = (0, c.ZP)(),
        w = (0, d.Sl)((0, o.wj)(C) ? h.Il.PRIMARY_300 : h.Il.PRIMARY_700),
        S = null == b || null == j,
        I = (0 === v.width || 0 === v.height || S) && null != n,
        E = a.useCallback(() => {
            null != N.current &&
                x({
                    width: N.current.offsetWidth,
                    height: N.current.offsetHeight
                });
        }, []);
    return (
        a.useEffect(() => {
            if (null != N.current) {
                let e = new ResizeObserver((0, s.debounce)(E, 50));
                return (
                    e.observe(N.current),
                    () => {
                        e.disconnect();
                    }
                );
            }
        }, [E]),
        a.useEffect(() => {
            if (null == N.current) return;
            let e = N.current,
                n = e.getContext('2d');
            if (null == n) return;
            let { width: t, height: l } = e;
            if (0 !== v.width && 0 !== v.height) {
                if (null != j && j.length > 0) {
                    let e = t / j.length,
                        a = -(e * (m.nl.waveformBarWidth - 1));
                    n.clearRect(0, 0, t, l), (n.fillStyle = w.hex);
                    for (let t = 0; t < j.length; t++) {
                        let i = j[t] * l,
                            r = t * e + a,
                            s = l / 2 - i / 2;
                        n.fillRect(r, s, e - a, i);
                    }
                }
            }
        }, [w, v, C, j]),
        (0, l.jsxs)('div', {
            className: r()(g.container, i),
            children: [
                (0, l.jsx)('canvas', {
                    className: g.waveformCanvas,
                    ref: N,
                    width: 4 * v.width,
                    height: 4 * v.height
                }),
                I &&
                    (0, l.jsx)('div', {
                        className: g.loading,
                        children: (0, l.jsx)(u.Spinner, { type: u.SpinnerTypes.SPINNING_CIRCLE })
                    })
            ]
        })
    );
});
