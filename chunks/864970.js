n.d(t, { o: () => c });
var r = n(477900),
    a = n(582128),
    o = n(844222),
    l = n(834730),
    u = n(140735);
(n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162));
var i = n(146806),
    s = n(411239);
let c = a.memo(function (e) {
    let {
            text: t,
            variant: n = "text-md/normal",
            color: c,
            delay: f = 3e3,
            initialDelay: d = 0,
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
        A = a.useMemo(() => x.split("\0"), [x]),
        [N, R] = a.useState(0),
        { reducedMotion: v } = a.useContext(o.C),
        E = (function () {
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
                            (window.removeEventListener("focus", e), window.removeEventListener("blur", n));
                        }
                    );
                }, []),
                e
            );
        })(),
        S = a.useRef(0),
        b = a.useRef(null),
        L = a.useRef(null),
        F = a.useRef(!0),
        T = a.useRef(h),
        $ = a.useRef(p),
        q = a.useRef(A),
        k = a.useRef(m),
        W = a.useRef(v.enabled);
    a.useEffect(() => {
        ((T.current = h), ($.current = p), (q.current = A), (k.current = m), (W.current = v.enabled));
    });
    let [B, j] = a.useState(x);
    B !== x && (j(x), R(0));
    let H = A.length > 0 ? N % A.length : 0,
        z = A[H] ?? "",
        U = a.useCallback(() => {
            R((e) => e + 1);
        }, []);
    return (
        a.useImperativeHandle(w, () => ({ play: U, stop: () => M.current?.stop() }), [U]),
        a.useEffect(() => {
            let e = C.current;
            if (null == e) return;
            let t = (function (e, t) {
                let n = {
                        from: t.from ?? t.to,
                        to: t.to,
                        classNames: t.classNames,
                        duration: t.duration ?? 880,
                        rng: t.rng ?? Math.random,
                        reducedMotion: t.reducedMotion,
                        respectReducedMotion: t.respectReducedMotion ?? !0,
                        onStart: t.onStart,
                        onComplete: t.onComplete,
                        trailingWidth: t.trailingWidth ?? 0,
                    },
                    r =
                        "u" > typeof window && "function" == typeof window.matchMedia
                            ? window.matchMedia("(prefers-reduced-motion: reduce)")
                            : null,
                    a = null,
                    o = null,
                    l = [],
                    u = [],
                    s = [],
                    c = [],
                    f = new Uint8Array(0),
                    d = !1,
                    m = -1,
                    h = [],
                    p = [],
                    y = [],
                    g = [],
                    w = !1,
                    C = 0,
                    M = 0,
                    x = 0,
                    A = 0,
                    N = 0,
                    R = 0,
                    v = 0,
                    E = 0,
                    S = !1;
                function b() {
                    ((l = Array.from(n.from)),
                        (u = Array.from(n.to)),
                        (C = Math.max(l.length, u.length)),
                        ((a = document.createElement("span")).className = n.classNames.textLayer),
                        (w = !1),
                        (s = Array(C)),
                        (f = new Uint8Array(C)));
                    for (let e = 0; e < C; e++) {
                        let t = document.createElement("span");
                        ((t.className = n.classNames.char), (t.textContent = l[e] ?? ""), a.appendChild(t), (s[e] = t));
                    }
                    (((o = document.createElement("span")).className = n.classNames.glyphLayer),
                        (o.style.opacity = "0"),
                        (m = 0),
                        (e.textContent = ""),
                        e.appendChild(a),
                        e.appendChild(o),
                        (function () {
                            if (
                                ((h = Array(C).fill(0)),
                                (p = Array(C).fill(0)),
                                null == a || null == o || "function" != typeof getComputedStyle)
                            ) {
                                M = Math.max(1, C);
                                return;
                            }
                            let e = a.getBoundingClientRect().width;
                            for (let e = 0; e < C; e++) h[e] = s[e].getBoundingClientRect().width;
                            for (let e = 0; e < C; e++) s[e].textContent = u[e] ?? "";
                            let t = a.getBoundingClientRect().width;
                            for (let e = 0; e < C; e++) p[e] = s[e].getBoundingClientRect().width;
                            for (let e = 0; e < C; e++)
                                ((s[e].textContent = l[e] ?? ""), (s[e].style.width = `${h[e]}px`));
                            let r = parseFloat(getComputedStyle(o).fontSize),
                                c = Number.isFinite(r) && 0 !== r ? r : 16,
                                f = Math.max(e, t);
                            M = (0, i.xf)(f, c, C, n.trailingWidth);
                        })(),
                        (c = Array(M)),
                        (y = Array(M).fill(-1)),
                        (g = (0, i.k6)(M, n.rng)));
                    for (let e = 0; e < M; e++) {
                        let t = document.createElement("span");
                        ((t.className = n.classNames.glyphCell), o.appendChild(t), (c[e] = t));
                    }
                    ((v = 0),
                        (E = 0),
                        d ||
                            "u" < typeof document ||
                            null == document.fonts ||
                            ("loaded" !== document.fonts.status &&
                                ((d = !0),
                                document.fonts.ready.then(() => {
                                    if (((d = !1), null == a || 0 === C || S)) return;
                                    let e = 4 === f[C - 1];
                                    (b(), e && k());
                                }))));
                }
                function L(e, t) {
                    let r = f[e];
                    if (r === t) return;
                    let a = s[e];
                    ((a.textContent = (0, i.Hz)(l, u, e, t)),
                        (a.className =
                            2 === t
                                ? `${n.classNames.char} ${n.classNames.scrambled}`
                                : 1 === t || 3 === t
                                  ? `${n.classNames.char} ${n.classNames.shifted}`
                                  : n.classNames.char));
                    let o = (0, i.qR)(r),
                        c = (0, i.qR)(t);
                    (c !== o && (a.style.width = `${(c ? p : h)[e] ?? 0}px`), (f[e] = t));
                }
                function F(e) {
                    let t = Math.min(1, Math.max(0, (e - A) / n.duration)),
                        r = (0, i.xm)(t),
                        { start: a, end: l } = (0, i.py)(r, C),
                        u = Math.min(s.length, Math.max(l, E));
                    for (let e = Math.min(a, v); e < u; e++) L(e, (0, i.Xu)(e, r, C));
                    ((v = a),
                        (E = l),
                        (function (e) {
                            let t = Math.round(100 * (0, i.M8)(e));
                            t !== m && null != o && ((o.style.opacity = String(t / 100)), (m = t));
                            for (let t = 0; t < M; t++) {
                                let r = (0, i.GL)(t, e, M);
                                if (r !== y[t]) {
                                    var n;
                                    ((c[t].textContent = r < 0 ? "" : ((n = t), r < 6 ? "123456".charAt(r) : g[n])),
                                        (y[t] = r));
                                }
                            }
                        })(r),
                        r < 1 ? (x = requestAnimationFrame(F)) : (k(), (S = !1), n.onComplete?.()));
                }
                function T() {
                    (null != o && (o.style.opacity = "0"), (m = 0));
                    for (let e = 0; e < M; e++) -1 !== y[e] && ((c[e].textContent = ""), (y[e] = -1));
                }
                function $(e) {
                    w !== e &&
                        null != a &&
                        ((a.className = e
                            ? `${n.classNames.textLayer} ${n.classNames.hidden}`
                            : n.classNames.textLayer),
                        (w = e));
                }
                function q(e) {
                    null != a && (a.style.transition = e ? "opacity 220ms linear" : "");
                }
                function k() {
                    for (let e = 0; e < C; e++) L(e, 4);
                    (q(!1), $(!1), T(), (v = 0), (E = 0));
                }
                function W() {
                    (0 !== R && clearTimeout(R), (R = 0));
                }
                function B() {
                    (0 !== x && cancelAnimationFrame(x), (x = 0), W(), (N = 0), (S = !1), k());
                }
                return (
                    b(),
                    {
                        play: function () {
                            if ((0 !== x && cancelAnimationFrame(x), (x = 0), W(), 0 === C))
                                return void n.onComplete?.();
                            let e = n.reducedMotion ?? r?.matches === !0;
                            if (n.respectReducedMotion && e) {
                                (T(),
                                    q(!0),
                                    $(!0),
                                    (S = !0),
                                    n.onStart?.(),
                                    (R = window.setTimeout(() => {
                                        R = 0;
                                        for (let e = 0; e < C; e++) L(e, 4);
                                        ((v = 0),
                                            (E = 0),
                                            $(!1),
                                            (R = window.setTimeout(() => {
                                                ((R = 0), q(!1), (S = !1), n.onComplete?.());
                                            }, 220)));
                                    }, 220)));
                                return;
                            }
                            (q(!1),
                                (S = !0),
                                (N = 0),
                                (A = performance.now()),
                                n.onStart?.(),
                                (x = requestAnimationFrame(F)));
                        },
                        pause: function () {
                            S && 0 === N && 0 !== x && (cancelAnimationFrame(x), (x = 0), (N = performance.now()));
                        },
                        resume: function () {
                            S && 0 !== N && ((A += performance.now() - N), (N = 0), (x = requestAnimationFrame(F)));
                        },
                        stop: B,
                        setTransition: function (e, t) {
                            (B(), (n.from = e), (n.to = t), b());
                        },
                        setOptions: function (e) {
                            (void 0 !== e.duration && (n.duration = e.duration),
                                void 0 !== e.reducedMotion && (n.reducedMotion = e.reducedMotion),
                                void 0 !== e.trailingWidth && (n.trailingWidth = e.trailingWidth));
                        },
                        destroy: function () {
                            (0 !== x && cancelAnimationFrame(x),
                                (x = 0),
                                W(),
                                (N = 0),
                                (S = !1),
                                (e.textContent = n.to),
                                (w = !1),
                                (a = null),
                                (o = null),
                                (s = []),
                                (c = []),
                                (l = []),
                                (u = []),
                                (f = new Uint8Array(0)),
                                (h = []),
                                (p = []),
                                (y = []),
                                (g = []),
                                (C = 0),
                                (M = 0));
                        },
                        get running() {
                            return S;
                        },
                    }
                );
            })(e, {
                to: q.current[0] ?? "",
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
                onComplete: () => T.current?.(),
                onStart: () => $.current?.(),
            });
            return (
                (M.current = t),
                () => {
                    (t.destroy(), (M.current = null));
                }
            );
        }, []),
        a.useEffect(() => {
            M.current?.setOptions({ duration: m, reducedMotion: v.enabled, trailingWidth: y });
        }, [m, v.enabled, y]),
        a.useEffect(() => {
            let e = M.current;
            if (null == e) return;
            let t = `${x}:${N}`;
            if (L.current !== t) {
                L.current = t;
                let n = b.current;
                ((b.current = z),
                    (F.current = null == n),
                    null == n ? e.setTransition(z, z) : (e.setTransition(n, z), e.play()));
            }
            if (null != f) {
                let e = W.current ? 440 : k.current;
                S.current = F.current ? f + d : f + e;
            }
        }, [x, N, H, z, f, d]),
        a.useEffect(() => {
            let e = M.current;
            if (null == e) return;
            if (!E) return void e.pause();
            if ((e.resume(), null == f)) return;
            let t = Date.now() + S.current,
                n = window.setTimeout(U, S.current);
            return () => {
                (window.clearTimeout(n), (S.current = Math.max(0, t - Date.now())));
            };
        }, [E, N, U, f]),
        (0, r.jsxs)(l.E, {
            variant: n,
            color: c,
            tag: "span",
            className: g,
            children: [
                (0, r.jsx)("span", { ref: C, className: s.Hc, "aria-hidden": !0 }),
                (0, r.jsx)(u.A, { children: z }),
            ],
        })
    );
});
