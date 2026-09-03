n.d(t, { n: () => c });
var r = n(477900),
    a = n(582128),
    l = n(844222),
    o = n(834730),
    i = n(140735),
    u = n(224341),
    s = n(698873);
let c = a.memo(function (e) {
    let {
            text: t,
            variant: n = "text-md/normal",
            color: c,
            delay: d = 3e3,
            initialDelay: f = 0,
            duration: m = 1e3,
            onComplete: h,
            onStart: p,
            trailingWidth: y,
            className: g,
            ref: w,
        } = e,
        C = a.useRef(null),
        M = a.useRef(null),
        x = Array.isArray(t) ? t.join("\0") : t,
        N = a.useMemo(() => x.split("\0"), [x]),
        [A, v] = a.useState(0),
        { reducedMotion: R } = a.useContext(l.C),
        b = (function () {
            let [e, t] = a.useState(() => "u" < typeof document || document.hasFocus());
            return (
                a.useEffect(() => {
                    function e() {
                        t(!0);
                    }
                    function n() {
                        t(!1);
                    }
                    return (
                        window.addEventListener("focus", e),
                        window.addEventListener("blur", n),
                        () => {
                            window.removeEventListener("focus", e), window.removeEventListener("blur", n);
                        }
                    );
                }, []),
                e
            );
        })(),
        E = a.useRef(0),
        S = a.useRef(0),
        F = a.useRef(null),
        L = a.useRef(h),
        T = a.useRef(p),
        $ = a.useRef(N),
        j = a.useRef(m),
        q = a.useRef(R.enabled);
    a.useEffect(() => {
        (L.current = h), (T.current = p), ($.current = N), (j.current = m), (q.current = R.enabled);
    });
    let [W, k] = a.useState(x);
    W !== x && (k(x), v(0));
    let B = N.length > 0 ? A % N.length : 0,
        I = N[B] ?? "",
        U = a.useCallback(() => {
            v((e) => e + 1);
        }, []);
    return (
        a.useImperativeHandle(w, () => ({ play: U, stop: () => M.current?.stop() }), [U]),
        a.useEffect(() => {
            let e = C.current;
            if (null == e) return;
            let t = (0, u.bw)(e, {
                to: $.current[0] ?? "",
                trailingWidth: y,
                classNames: {
                    textLayer: s.fo,
                    char: s.Tp,
                    glyphLayer: s.sq,
                    glyphCell: s.vF,
                    shifted: s.wI,
                    scrambled: s.Aq,
                    hidden: s.R,
                },
                onComplete: () => L.current?.(),
                onStart: () => T.current?.(),
            });
            return (
                (M.current = t),
                () => {
                    t.destroy(), (M.current = null);
                }
            );
        }, []),
        a.useEffect(() => {
            M.current?.setOptions({ duration: m, reducedMotion: R.enabled, trailingWidth: y });
        }, [m, R.enabled, y]),
        a.useEffect(() => {
            S.current = B;
            let e = M.current;
            if (null == e) return;
            let t = F.current;
            F.current = I;
            let n = null == t;
            if ((n ? e.setTransition(I, I) : (e.setTransition(t, I), e.play()), null != d)) {
                let e = q.current ? u.t : j.current;
                E.current = n ? d + f : d + e;
            }
        }, [A, B, I, d, f]),
        a.useEffect(() => {
            let e = M.current;
            if (null == e) return;
            if (!b) return void e.pause();
            if ((e.resume(), null == d)) return;
            let t = Date.now() + E.current,
                n = window.setTimeout(U, E.current);
            return () => {
                window.clearTimeout(n), (E.current = Math.max(0, t - Date.now()));
            };
        }, [b, A, U, d]),
        (0, r.jsxs)(o.E, {
            variant: n,
            color: c,
            tag: "span",
            className: g,
            children: [
                (0, r.jsx)("span", { ref: C, className: s.Hc, "aria-hidden": !0 }),
                (0, r.jsx)(i.A, { children: I }),
            ],
        })
    );
});
