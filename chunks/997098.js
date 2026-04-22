l.d(t, { A: () => g });
var n = l(627968),
    a = l(64700),
    i = l(503698),
    s = l.n(i),
    r = l(735438),
    u = l(827734),
    o = l(602853),
    d = l(289873),
    c = l(736653),
    m = l(30875),
    f = l(335416),
    h = l(455141);
let g = a.memo(function (e) {
    let { file: t, audio: l, className: i, waveformSettings: g } = e,
        [x, v] = a.useState({ width: 0, height: 0 }),
        j = a.useRef(null),
        p = a.useMemo(() => {
            let e = l?.duration ?? 1;
            return { fineTuning: -1, fineTuningResolution: e / f.Jh.fineTuningScale, duration: e, ...(g ?? {}) };
        }, [l, g]),
        N = (0, m.AX)(t),
        A = (0, m.$t)(N, j.current, p),
        C = (0, c.Ay)(),
        b = (0, o.r)(u.A.colors.ICON_STRONG).hex(),
        y = null == N || null == A,
        w = (0 === x.width || 0 === x.height || y) && null != t,
        E = a.useCallback(() => {
            null != j.current && v({ width: j.current.offsetWidth, height: j.current.offsetHeight });
        }, []);
    return (
        a.useEffect(() => {
            if (null != j.current) {
                let e = new ResizeObserver((0, r.debounce)(E, 50));
                return (
                    e.observe(j.current),
                    () => {
                        e.disconnect();
                    }
                );
            }
        }, [E]),
        a.useEffect(() => {
            if (null == j.current) return;
            let e = j.current,
                t = e.getContext("2d");
            if (null == t) return;
            let { width: l, height: n } = e;
            if (0 !== x.width && 0 !== x.height && null != A && A.length > 0) {
                let e = l / A.length,
                    a = -(e * (f.Jh.waveformBarWidth - 1));
                t.clearRect(0, 0, l, n), (t.fillStyle = b);
                for (let l = 0; l < A.length; l++) {
                    let i = A[l] * n,
                        s = l * e + a,
                        r = n / 2 - i / 2;
                    t.fillRect(s, r, e - a, i);
                }
            }
        }, [b, x, C, A]),
        (0, n.jsxs)("div", {
            className: s()(h.kL, i),
            children: [
                (0, n.jsx)("canvas", { className: h.s4, ref: j, width: 4 * x.width, height: 4 * x.height }),
                w && (0, n.jsx)("div", { className: h.Lq, children: (0, n.jsx)(d.y, { type: d.t.SPINNING_CIRCLE }) }),
            ],
        })
    );
});
