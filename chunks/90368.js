"use strict";
n.d(t, { A: () => c });
var r = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(964486);
let o = 1e3 / 24,
    l = 3,
    u = 3e3,
    c = function (e) {
        let {
                minInterval: t = o,
                allowableMinInterval: n,
                droppedFramesCallbackThreshold: i,
                droppedFramesCallback: c,
                droppedFramesResetTime: d = u,
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            _ = r.useRef(t),
            f = r.useRef(0),
            p = r.useRef(void 0),
            h = r.useRef(void 0),
            m = r.useRef(!0),
            E = r.useRef(0),
            g = r.useRef(void 0),
            A = r.useCallback(() => {
                (E.current = 0), null != g.current && (clearTimeout(g.current), (g.current = void 0));
            }, []),
            I = r.useCallback(() => {
                (m.current = !1), cancelAnimationFrame(f.current), clearTimeout(g.current);
            }, []),
            T = r.useCallback(
                (t) => {
                    if (!m.current) return;
                    null == p.current && (p.current = t), null == h.current && (h.current = t);
                    let r = t - h.current;
                    t - p.current > 1.5 * Math.min(n ?? 120, _.current) &&
                        ((E.current += 1),
                        null != g.current && clearTimeout(g.current),
                        (g.current = setTimeout(A, d)),
                        null != i &&
                            E.current > i &&
                            (s()(
                                null != c,
                                "useClock - If you set a dropped frames threshold, you must provide a droppedFramesCallback to do something when that threshold is hit",
                            ),
                            c() && (E.current = 0))),
                        (p.current = t),
                        r >= _.current - l && ((h.current = t), e(r)),
                        (f.current = requestAnimationFrame(T));
                },
                [n, A, d, i, c, e],
            ),
            S = r.useCallback(() => {
                (m.current = !0), (h.current = void 0), (f.current = requestAnimationFrame(T));
            }, [T]);
        return (
            r.useEffect(() => {
                _.current = t;
            }, [t]),
            (0, a.Ay)(() => ((f.current = requestAnimationFrame(T)), () => I())),
            { stop: I, reset: S, ticking: m }
        );
    };
