"use strict";
n.d(t, { A: () => l });
var r = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(964486);
let o = 1e3 / 24,
    l = function (e) {
        let {
                minInterval: t = o,
                allowableMinInterval: n,
                droppedFramesCallbackThreshold: i,
                droppedFramesCallback: l,
                droppedFramesResetTime: u = 3e3,
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            c = r.useRef(t),
            d = r.useRef(0),
            _ = r.useRef(void 0),
            f = r.useRef(void 0),
            p = r.useRef(!0),
            h = r.useRef(0),
            E = r.useRef(void 0),
            m = r.useCallback(() => {
                (h.current = 0), null != E.current && (clearTimeout(E.current), (E.current = void 0));
            }, []),
            g = r.useCallback(() => {
                (p.current = !1), cancelAnimationFrame(d.current), clearTimeout(E.current);
            }, []),
            A = r.useCallback(
                (t) => {
                    if (!p.current) return;
                    null == _.current && (_.current = t), null == f.current && (f.current = t);
                    let r = t - f.current;
                    t - _.current > 1.5 * Math.min(n ?? 120, c.current) &&
                        ((h.current += 1),
                        null != E.current && clearTimeout(E.current),
                        (E.current = setTimeout(m, u)),
                        null != i &&
                            h.current > i &&
                            (s()(
                                null != l,
                                "useClock - If you set a dropped frames threshold, you must provide a droppedFramesCallback to do something when that threshold is hit",
                            ),
                            l() && (h.current = 0))),
                        (_.current = t),
                        r >= c.current - 3 && ((f.current = t), e(r)),
                        (d.current = requestAnimationFrame(A));
                },
                [n, m, u, i, l, e],
            ),
            I = r.useCallback(() => {
                (p.current = !0), (f.current = void 0), (d.current = requestAnimationFrame(A));
            }, [A]);
        return (
            r.useEffect(() => {
                c.current = t;
            }, [t]),
            (0, a.Ay)(() => ((d.current = requestAnimationFrame(A)), () => g())),
            { stop: g, reset: I, ticking: p }
        );
    };
