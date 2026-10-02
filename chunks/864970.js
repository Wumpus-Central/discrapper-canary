n.d(t, { o: () => c });
var r = n(477900),
    o = n(582128),
    a = n(844222),
    l = n(834730),
    i = n(140735);
(n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162));
var u = n(146806),
    s = n(411239);
let c = o.memo(function (e) {
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
            ref: x,
        } = e,
        w = o.useRef(null),
        C = o.useRef(null),
        M = Array.isArray(t) ? t.join("\0") : t,
        A = o.useMemo(() => M.split("\0"), [M]),
        [N, R] = o.useState(0),
        { reducedMotion: v } = o.useContext(a.C),
        b = (function () {
            let [e, t] = o.useState(() => "u" < typeof document || document.hasFocus());
            return (
                o.useEffect(() => {
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
        E = o.useRef(0),
        S = o.useRef(null),
        $ = o.useRef(null),
        L = o.useRef(!0),
        T = o.useRef(h),
        F = o.useRef(p),
        j = o.useRef(A),
        q = o.useRef(m),
        B = o.useRef(v.enabled);
    o.useEffect(() => {
        ((T.current = h), (F.current = p), (j.current = A), (q.current = m), (B.current = v.enabled));
    });
    let [k, W] = o.useState(M);
    k !== M && (W(M), R(0));
    let z = A.length > 0 ? N % A.length : 0,
        D = A[z] ?? "",
        H = o.useCallback(() => {
            R((e) => e + 1);
        }, []);
    return (
        o.useImperativeHandle(x, () => ({ play: H, stop: () => C.current?.stop() }), [H]),
        o.useEffect(() => {
            let e = w.current;
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
                    o = null,
                    a = null,
                    l = [],
                    i = [],
                    s = [],
                    c = [],
                    d = new Uint8Array(0),
                    f = !1,
                    m = -1,
                    h = [],
                    p = [],
                    y = [],
                    g = [],
                    x = !1,
                    w = 0,
                    C = 0,
                    M = 0,
                    A = 0,
                    N = 0,
                    R = 0,
                    v = 0,
                    b = 0,
                    E = !1;
                function S() {
                    ((l = Array.from(n.from)),
                        (i = Array.from(n.to)),
                        (w = Math.max(l.length, i.length)),
                        ((o = document.createElement("span")).className = n.classNames.textLayer),
                        (x = !1),
                        (s = Array(w)),
                        (d = new Uint8Array(w)));
                    for (let e = 0; e < w; e++) {
                        let t = document.createElement("span");
                        ((t.className = n.classNames.char), (t.textContent = l[e] ?? ""), o.appendChild(t), (s[e] = t));
                    }
                    (((a = document.createElement("span")).className = n.classNames.glyphLayer),
                        (a.style.opacity = "0"),
                        (m = 0),
                        (e.textContent = ""),
                        e.appendChild(o),
                        e.appendChild(a),
                        (function () {
                            if (
                                ((h = Array(w).fill(0)),
                                (p = Array(w).fill(0)),
                                null == o || null == a || "function" != typeof getComputedStyle)
                            ) {
                                C = Math.max(1, w);
                                return;
                            }
                            let e = o.getBoundingClientRect().width;
                            for (let e = 0; e < w; e++) h[e] = s[e].getBoundingClientRect().width;
                            for (let e = 0; e < w; e++) s[e].textContent = i[e] ?? "";
                            let t = o.getBoundingClientRect().width;
                            for (let e = 0; e < w; e++) p[e] = s[e].getBoundingClientRect().width;
                            for (let e = 0; e < w; e++)
                                ((s[e].textContent = l[e] ?? ""), (s[e].style.width = `${h[e]}px`));
                            let r = parseFloat(getComputedStyle(a).fontSize),
                                c = Number.isFinite(r) && 0 !== r ? r : 16,
                                d = Math.max(e, t);
                            C = (0, u.xf)(d, c, w, n.trailingWidth);
                        })(),
                        (c = Array(C)),
                        (y = Array(C).fill(-1)),
                        (g = (0, u.k6)(C, n.rng)));
                    for (let e = 0; e < C; e++) {
                        let t = document.createElement("span");
                        ((t.className = n.classNames.glyphCell), a.appendChild(t), (c[e] = t));
                    }
                    ((v = 0),
                        (b = 0),
                        f ||
                            "u" < typeof document ||
                            null == document.fonts ||
                            ("loaded" !== document.fonts.status &&
                                ((f = !0),
                                document.fonts.ready.then(() => {
                                    if (((f = !1), null == o || 0 === w || E)) return;
                                    let e = 4 === d[w - 1];
                                    (S(), e && q());
                                }))));
                }
                function $(e, t) {
                    let r = d[e];
                    if (r === t) return;
                    let o = s[e];
                    ((o.textContent = (0, u.Hz)(l, i, e, t)),
                        (o.className =
                            2 === t
                                ? `${n.classNames.char} ${n.classNames.scrambled}`
                                : 1 === t || 3 === t
                                  ? `${n.classNames.char} ${n.classNames.shifted}`
                                  : n.classNames.char));
                    let a = (0, u.qR)(r),
                        c = (0, u.qR)(t);
                    (c !== a && (o.style.width = `${(c ? p : h)[e] ?? 0}px`), (d[e] = t));
                }
                function L(e) {
                    let t = Math.min(1, Math.max(0, (e - A) / n.duration)),
                        r = (0, u.xm)(t),
                        { start: o, end: l } = (0, u.py)(r, w),
                        i = Math.min(s.length, Math.max(l, b));
                    for (let e = Math.min(o, v); e < i; e++) $(e, (0, u.Xu)(e, r, w));
                    ((v = o),
                        (b = l),
                        (function (e) {
                            let t = Math.round(100 * (0, u.M8)(e));
                            t !== m && null != a && ((a.style.opacity = String(t / 100)), (m = t));
                            for (let t = 0; t < C; t++) {
                                let r = (0, u.GL)(t, e, C);
                                if (r !== y[t]) {
                                    var n;
                                    ((c[t].textContent = r < 0 ? "" : ((n = t), r < 6 ? "123456".charAt(r) : g[n])),
                                        (y[t] = r));
                                }
                            }
                        })(r),
                        r < 1 ? (M = requestAnimationFrame(L)) : (q(), (E = !1), n.onComplete?.()));
                }
                function T() {
                    (null != a && (a.style.opacity = "0"), (m = 0));
                    for (let e = 0; e < C; e++) -1 !== y[e] && ((c[e].textContent = ""), (y[e] = -1));
                }
                function F(e) {
                    x !== e &&
                        null != o &&
                        ((o.className = e
                            ? `${n.classNames.textLayer} ${n.classNames.hidden}`
                            : n.classNames.textLayer),
                        (x = e));
                }
                function j(e) {
                    null != o && (o.style.transition = e ? "opacity 220ms linear" : "");
                }
                function q() {
                    for (let e = 0; e < w; e++) $(e, 4);
                    (j(!1), F(!1), T(), (v = 0), (b = 0));
                }
                function B() {
                    (0 !== R && clearTimeout(R), (R = 0));
                }
                function k() {
                    (0 !== M && cancelAnimationFrame(M), (M = 0), B(), (N = 0), (E = !1), q());
                }
                return (
                    S(),
                    {
                        play: function () {
                            if ((0 !== M && cancelAnimationFrame(M), (M = 0), B(), 0 === w))
                                return void n.onComplete?.();
                            let e = n.reducedMotion ?? r?.matches === !0;
                            if (n.respectReducedMotion && e) {
                                (T(),
                                    j(!0),
                                    F(!0),
                                    (E = !0),
                                    n.onStart?.(),
                                    (R = window.setTimeout(() => {
                                        R = 0;
                                        for (let e = 0; e < w; e++) $(e, 4);
                                        ((v = 0),
                                            (b = 0),
                                            F(!1),
                                            (R = window.setTimeout(() => {
                                                ((R = 0), j(!1), (E = !1), n.onComplete?.());
                                            }, 220)));
                                    }, 220)));
                                return;
                            }
                            (j(!1),
                                (E = !0),
                                (N = 0),
                                (A = performance.now()),
                                n.onStart?.(),
                                (M = requestAnimationFrame(L)));
                        },
                        pause: function () {
                            E && 0 === N && 0 !== M && (cancelAnimationFrame(M), (M = 0), (N = performance.now()));
                        },
                        resume: function () {
                            E && 0 !== N && ((A += performance.now() - N), (N = 0), (M = requestAnimationFrame(L)));
                        },
                        stop: k,
                        setTransition: function (e, t) {
                            (k(), (n.from = e), (n.to = t), S());
                        },
                        setOptions: function (e) {
                            (void 0 !== e.duration && (n.duration = e.duration),
                                void 0 !== e.reducedMotion && (n.reducedMotion = e.reducedMotion),
                                void 0 !== e.trailingWidth && (n.trailingWidth = e.trailingWidth));
                        },
                        destroy: function () {
                            (0 !== M && cancelAnimationFrame(M),
                                (M = 0),
                                B(),
                                (N = 0),
                                (E = !1),
                                (e.textContent = n.to),
                                (x = !1),
                                (o = null),
                                (a = null),
                                (s = []),
                                (c = []),
                                (l = []),
                                (i = []),
                                (d = new Uint8Array(0)),
                                (h = []),
                                (p = []),
                                (y = []),
                                (g = []),
                                (w = 0),
                                (C = 0));
                        },
                        get running() {
                            return E;
                        },
                    }
                );
            })(e, {
                to: j.current[0] ?? "",
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
                onStart: () => F.current?.(),
            });
            return (
                (C.current = t),
                () => {
                    (t.destroy(), (C.current = null));
                }
            );
        }, []),
        o.useEffect(() => {
            C.current?.setOptions({ duration: m, reducedMotion: v.enabled, trailingWidth: y });
        }, [m, v.enabled, y]),
        o.useEffect(() => {
            let e = C.current;
            if (null == e) return;
            let t = `${M}:${N}`;
            if ($.current !== t) {
                $.current = t;
                let n = S.current;
                ((S.current = D),
                    (L.current = null == n),
                    null == n ? e.setTransition(D, D) : (e.setTransition(n, D), e.play()));
            }
            if (null != d) {
                let e = B.current ? 440 : q.current;
                E.current = L.current ? d + f : d + e;
            }
        }, [M, N, z, D, d, f]),
        o.useEffect(() => {
            let e = C.current;
            if (null == e) return;
            if (!b) return void e.pause();
            if ((e.resume(), null == d)) return;
            let t = Date.now() + E.current,
                n = window.setTimeout(H, E.current);
            return () => {
                (window.clearTimeout(n), (E.current = Math.max(0, t - Date.now())));
            };
        }, [b, N, H, d]),
        (0, r.jsxs)(l.E, {
            variant: n,
            color: c,
            tag: "span",
            className: g,
            children: [
                (0, r.jsx)("span", { ref: w, className: s.Hc, "aria-hidden": !0 }),
                (0, r.jsx)(i.A, { children: D }),
            ],
        })
    );
});
