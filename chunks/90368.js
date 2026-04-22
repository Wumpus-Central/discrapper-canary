t.d(r, { A: () => c });
var n = t(64700),
    a = t(284009),
    u = t.n(a),
    l = t(964486);
let s = 1e3 / 24,
    c = function (e) {
        let {
                minInterval: r = s,
                allowableMinInterval: t,
                droppedFramesCallbackThreshold: a,
                droppedFramesCallback: c,
                droppedFramesResetTime: o = 3e3,
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = n.useRef(r),
            f = n.useRef(0),
            d = n.useRef(void 0),
            A = n.useRef(void 0),
            T = n.useRef(!0),
            m = n.useRef(0),
            E = n.useRef(void 0),
            I = n.useCallback(() => {
                (m.current = 0), null != E.current && (clearTimeout(E.current), (E.current = void 0));
            }, []),
            h = n.useCallback(() => {
                (T.current = !1), cancelAnimationFrame(f.current), clearTimeout(E.current);
            }, []),
            p = n.useCallback(
                (r) => {
                    if (!T.current) return;
                    null == d.current && (d.current = r), null == A.current && (A.current = r);
                    let n = r - A.current;
                    r - d.current > 1.5 * Math.min(t ?? 120, i.current) &&
                        ((m.current += 1),
                        null != E.current && clearTimeout(E.current),
                        (E.current = setTimeout(I, o)),
                        null != a &&
                            m.current > a &&
                            (u()(
                                null != c,
                                "useClock - If you set a dropped frames threshold, you must provide a droppedFramesCallback to do something when that threshold is hit",
                            ),
                            c() && (m.current = 0))),
                        (d.current = r),
                        n >= i.current - 3 && ((A.current = r), e(n)),
                        (f.current = requestAnimationFrame(p));
                },
                [t, I, o, a, c, e],
            ),
            N = n.useCallback(() => {
                (T.current = !0), (A.current = void 0), (f.current = requestAnimationFrame(p));
            }, [p]);
        return (
            n.useEffect(() => {
                i.current = r;
            }, [r]),
            (0, l.Ay)(() => ((f.current = requestAnimationFrame(p)), () => h())),
            { stop: h, reset: N, ticking: T }
        );
    };
