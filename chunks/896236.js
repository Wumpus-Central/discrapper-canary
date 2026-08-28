n.r(t), n.d(t, { playgroundConfig: () => B, aiVisualIdentityCollection: () => k });
var a = n(477900),
    l = n(582128),
    r = n(834730),
    o = n(661531),
    s = n(503698),
    i = n.n(s),
    u = n(374839);
let c = ["1", "2", "3", "4", "5", "6", "7"],
    d = l.memo(function (e) {
        let { size: t = 16, "aria-label": n, className: l, ref: r, color: o = "currentColor" } = e;
        return (0, a.jsx)("div", {
            ref: r,
            className: i()(u.wG, l),
            style: { "--custom-ai-loader-size": `${t}px`, color: "string" == typeof o ? o : o.css },
            role: null == n ? void 0 : "img",
            "aria-label": n,
            "aria-hidden": null == n,
            children: Array.from({ length: 3 }, (e, t) =>
                (0, a.jsx)(
                    "span",
                    {
                        className: u.NI,
                        children: (0, a.jsx)("span", {
                            className: u.u4,
                            children: c.map((e) => (0, a.jsx)("span", { className: u.Vq, children: e }, e)),
                        }),
                    },
                    t,
                ),
            ),
        });
    });
var m = n(935651);
let f = [12, 16, 24, 32, 48, 64],
    x = [
        { label: "Default", className: void 0, note: "2400ms loop" },
        { label: "reduce-motion", className: "reduce-motion", note: "half speed (4800ms)" },
        { label: "stop-animation", className: "stop-animation", note: "frozen on the dot" },
    ],
    h = {
        title: "AILoader",
        stories: [
            {
                name: "AILoader",
                id: "ai-loader",
                component: function (e) {
                    let { size: t, color: n } = e;
                    return (0, a.jsx)("div", {
                        style: "" === n ? void 0 : { color: n },
                        children: (0, a.jsx)(d, { size: t }),
                    });
                },
                controls: {
                    size: {
                        label: "Size (px per glyph)",
                        type: "slider",
                        defaultValue: 32,
                        minValue: 8,
                        maxValue: 128,
                    },
                    color: {
                        label: "Color",
                        type: "select",
                        defaultValue: "var(--text-default)",
                        options: [
                            { label: "text-default", value: "var(--text-default)" },
                            { label: "text-muted", value: "var(--text-muted)" },
                            { label: "text-brand", value: "var(--text-brand)" },
                            { label: "white", value: "var(--white)" },
                        ],
                    },
                },
            },
            {
                name: "Sizes & Motion States",
                id: "ai-loader-matrix",
                component: function () {
                    return (0, a.jsxs)("div", {
                        className: m.UP,
                        children: [
                            (0, a.jsxs)("div", {
                                className: m.uW,
                                children: [
                                    (0, a.jsx)(r.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: "Sizes",
                                    }),
                                    (0, a.jsxs)(r.E, {
                                        variant: "text-xs/normal",
                                        color: "text-subtle",
                                        children: [
                                            "Glyphs should stay optically centered at every size, and the clip window should never reveal a neighbouring glyph. The dashed outline is the loader's own box: ",
                                            "size",
                                            " tall by 3.75 \xd7 ",
                                            "size",
                                            " wide.",
                                        ],
                                    }),
                                    (0, a.jsx)("div", {
                                        className: m.nM,
                                        children: f.map((e) =>
                                            (0, a.jsxs)(
                                                "div",
                                                {
                                                    className: m.Hn,
                                                    children: [
                                                        (0, a.jsx)(d, {
                                                            size: e,
                                                            className: m.O,
                                                            color: o.A.colors.TEXT_DEFAULT,
                                                        }),
                                                        (0, a.jsxs)(r.E, {
                                                            variant: "text-xs/normal",
                                                            color: "text-subtle",
                                                            children: [e, "px"],
                                                        }),
                                                    ],
                                                },
                                                e,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: m.uW,
                                children: [
                                    (0, a.jsx)(r.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: "Motion states",
                                    }),
                                    (0, a.jsx)(r.E, {
                                        variant: "text-xs/normal",
                                        color: "text-subtle",
                                        children:
                                            "Reduced motion slows the cycle rather than freezing it, so the loader still reads as \u201Cworking\u201D. The loader also stops entirely while the app is unfocused, matching Mana's Spinner.",
                                    }),
                                    (0, a.jsx)("div", {
                                        className: m.nM,
                                        children: x.map((e) => {
                                            let { label: t, className: n, note: l } = e;
                                            return (0, a.jsxs)(
                                                "div",
                                                {
                                                    className: m.Hn,
                                                    children: [
                                                        (0, a.jsx)("div", {
                                                            className: n,
                                                            children: (0, a.jsx)(d, {
                                                                size: 48,
                                                                color: o.A.colors.TEXT_DEFAULT,
                                                            }),
                                                        }),
                                                        (0, a.jsx)(r.E, {
                                                            variant: "text-xs/normal",
                                                            color: "text-subtle",
                                                            children: t,
                                                        }),
                                                        (0, a.jsx)(r.E, {
                                                            variant: "text-xs/normal",
                                                            color: "text-subtle",
                                                            children: l,
                                                        }),
                                                    ],
                                                },
                                                t,
                                            );
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
            },
        ],
    };
var p = n(844222),
    y = n(402386);
function v(e) {
    let {
            area: t = 0,
            glyphSize: n = 16,
            radius: r = { x: 5, y: 5 },
            color: s = o.A.colors.TEXT_DEFAULT,
            fpsLimit: i = 30,
            edgeBand: u = 3,
        } = e,
        c = l.useContext(p.C),
        {
            top: d = 0,
            bottom: m = 0,
            left: f = 0,
            right: x = 0,
        } = "number" == typeof t ? { top: t, bottom: t, left: t, right: t } : t;
    return (0, a.jsx)(y.j, {
        fit: "layout",
        style: {
            position: "absolute",
            left: -f,
            top: -d,
            width: `calc(100% + ${f}px + ${x}px)`,
            height: `calc(100% + ${d}px + ${m}px)`,
            pointerEvents: "none",
        },
        listenOnDocumentBody: !0,
        withReducedMotion: "play",
        dataBinding: {
            edgeBand: u,
            insetTop: d,
            insetBottom: m,
            insetLeft: f,
            insetRight: x,
            color: s,
            radiusX: "number" == typeof r ? r : r.x,
            radiusY: "number" == typeof r ? r : r.y,
            glyphSize: n,
            fpsLimit: i,
            reducedMotion: c.reducedMotion.enabled,
        },
    });
}
var b = n(860404);
let g = {
        "text-default": o.A.colors.TEXT_DEFAULT,
        "text-muted": o.A.colors.TEXT_MUTED,
        "text-brand": o.A.colors.TEXT_BRAND,
    },
    j = {
        title: "AISmallSurfaceAnimation",
        stories: [
            {
                name: "AISmallSurfaceAnimation",
                id: "ai-small-surface-animation",
                component: function (e) {
                    let {
                        placeholderElementArea: t,
                        areaSize: n,
                        top: l,
                        right: r,
                        bottom: o,
                        left: s,
                        glyphSize: i,
                        radius: u,
                        color: c,
                        edgeBand: d,
                    } = e;
                    return (0, a.jsx)("div", {
                        className: b.q,
                        children: (0, a.jsx)("div", {
                            className: b.M,
                            style: { "--__demo-area": `${t}px` },
                            children: (0, a.jsx)(v, {
                                area: { top: l ? n : 0, right: r ? n : 0, bottom: o ? n : 0, left: s ? n : 0 },
                                glyphSize: i,
                                radius: u,
                                color: g[c],
                                edgeBand: d,
                            }),
                        }),
                    });
                },
                controls: {
                    placeholderElementArea: {
                        label: "Placeholder element area",
                        type: "slider",
                        defaultValue: 400,
                        minValue: 100,
                        maxValue: 600,
                    },
                    areaSize: { label: "Animation area (px)", type: "number", defaultValue: 64, minValue: 0 },
                    top: { label: "Top", type: "boolean", defaultValue: !0 },
                    right: { label: "Right", type: "boolean", defaultValue: !0 },
                    bottom: { label: "Bottom", type: "boolean", defaultValue: !0 },
                    left: { label: "Left", type: "boolean", defaultValue: !0 },
                    glyphSize: { label: "Glyph size (px)", type: "number", defaultValue: 16, minValue: 8 },
                    radius: { label: "Reveal radius (glyphs)", type: "number", defaultValue: 3, minValue: 1 },
                    color: {
                        label: "Color",
                        type: "select",
                        defaultValue: "text-default",
                        options: Object.keys(g).map((e) => ({ label: e, value: e })),
                    },
                    edgeBand: { label: "Edge band (glyphs)", type: "number", defaultValue: 3, minValue: 0 },
                },
            },
        ],
    };
var w = n(331322),
    A = n(140735);
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
let N = [
        { offset: 0, span: 0.66, ease: 1.6 },
        { offset: 0.08, span: 0.78, ease: 1.6 },
        { offset: 0.08, span: 0.9, ease: 7.5 },
        { offset: 0.08, span: 0.92, ease: 9 },
    ],
    C = [0.5, 0.5, 0.45, 0.9];
function E(e, t, n) {
    let a = 1 - e;
    return 3 * a * a * e * t + 3 * a * e * e * n + e * e * e;
}
let M = "123456",
    T = "789ABC";
function S(e, t) {
    let n = e.charCodeAt(0);
    return n >= 65 && n <= 90
        ? String.fromCharCode(65 + ((n - 65 + t) % 26))
        : n >= 97 && n <= 122
          ? String.fromCharCode(97 + ((n - 97 + t) % 26))
          : n >= 48 && n <= 57
            ? String.fromCharCode(48 + ((n - 48 + t) % 10))
            : e;
}
function R(e, t) {
    let { offset: n, span: a, ease: l } = N[e],
        r = (t - n) / a;
    return r <= 0 ? 0 : r >= 1 ? 1 : r ** l;
}
var V = n(698873);
let z = l.memo(function (e) {
    let {
            text: t,
            variant: n = "text-md/normal",
            color: o,
            delay: s = 3e3,
            initialDelay: i = 0,
            duration: u = 1e3,
            onComplete: c,
            className: d,
            ref: m,
        } = e,
        f = l.useRef(null),
        x = l.useRef(null),
        h = Array.isArray(t) ? t.join("\0") : t,
        y = l.useMemo(() => h.split("\0"), [h]),
        [v, b] = l.useState(0),
        { reducedMotion: g } = l.useContext(p.C),
        j = (function () {
            let [e, t] = l.useState(() => "u" < typeof document || document.hasFocus());
            return (
                l.useEffect(() => {
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
        w = l.useRef(0),
        z = l.useRef(0),
        L = l.useRef(null),
        F = l.useRef(c),
        D = l.useRef(y);
    l.useEffect(() => {
        (F.current = c), (D.current = y);
    });
    let [$, k] = l.useState(h);
    $ !== h && (k(h), b(0));
    let B = y.length > 0 ? v % y.length : 0,
        I = y[B] ?? "",
        _ = l.useCallback(() => {
            b((e) => e + 1);
        }, []);
    return (
        l.useImperativeHandle(m, () => ({ play: _, stop: () => x.current?.stop() }), [_]),
        l.useEffect(() => {
            let e = f.current;
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
                    },
                    a =
                        "u" > typeof window && "function" == typeof window.matchMedia
                            ? window.matchMedia("(prefers-reduced-motion: reduce)")
                            : null,
                    l = null,
                    r = null,
                    o = [],
                    s = [],
                    i = [],
                    u = [],
                    c = new Uint8Array(0),
                    d = !1,
                    m = -1,
                    f = [],
                    x = [],
                    h = [],
                    p = [],
                    y = !1,
                    v = 0,
                    b = 0,
                    g = 0,
                    j = 0,
                    w = 0,
                    A = 0,
                    V = 0,
                    z = 0,
                    L = !1;
                function F() {
                    (o = Array.from(n.from)),
                        (s = Array.from(n.to)),
                        (v = Math.max(o.length, s.length)),
                        ((l = document.createElement("span")).className = n.classNames.textLayer),
                        (y = !1),
                        (i = Array(v)),
                        (c = new Uint8Array(v));
                    for (let e = 0; e < v; e++) {
                        let t = document.createElement("span");
                        (t.className = n.classNames.char), (t.textContent = o[e] ?? ""), l.appendChild(t), (i[e] = t);
                    }
                    ((r = document.createElement("span")).className = n.classNames.glyphLayer),
                        (r.style.opacity = "0"),
                        (m = 0),
                        (e.textContent = ""),
                        e.appendChild(l),
                        e.appendChild(r),
                        (function () {
                            if (
                                ((f = Array(v).fill(0)),
                                (x = Array(v).fill(0)),
                                null == l || null == r || "function" != typeof getComputedStyle)
                            ) {
                                b = Math.max(1, v);
                                return;
                            }
                            let e = l.getBoundingClientRect().width;
                            for (let e = 0; e < v; e++) f[e] = i[e].getBoundingClientRect().width;
                            for (let e = 0; e < v; e++) i[e].textContent = s[e] ?? "";
                            let t = l.getBoundingClientRect().width;
                            for (let e = 0; e < v; e++) x[e] = i[e].getBoundingClientRect().width;
                            for (let e = 0; e < v; e++)
                                (i[e].textContent = o[e] ?? ""), (i[e].style.width = `${f[e]}px`);
                            let n = parseFloat(getComputedStyle(r).fontSize),
                                a = Math.max(e, t);
                            b = 0 === a ? Math.max(1, v) : Math.max(1, Math.round(a / (0 !== n ? n : 16)));
                        })(),
                        (u = Array(b)),
                        (h = Array(b).fill(-1)),
                        (p = Array(b));
                    for (let e = 0; e < b; e++) {
                        let t = document.createElement("span");
                        (t.className = n.classNames.glyphCell),
                            r.appendChild(t),
                            (u[e] = t),
                            (p[e] = T.charAt((n.rng() * T.length) | 0));
                    }
                    (V = 0),
                        (z = 0),
                        d ||
                            "u" < typeof document ||
                            null == document.fonts ||
                            ("loaded" !== document.fonts.status &&
                                ((d = !0),
                                document.fonts.ready.then(() => {
                                    if (((d = !1), null == l || 0 === v || L)) return;
                                    let e = 4 === c[v - 1];
                                    F(), e && _();
                                })));
                }
                function D(e, t) {
                    let a = c[e];
                    if (a === t) return;
                    let l = i[e];
                    (l.textContent = (function (e, t) {
                        switch (t) {
                            case 0:
                                return o[e] ?? "";
                            case 1:
                            case 2:
                                return S(o[e] ?? "", 6);
                            case 3:
                                return S(s[e] ?? "", 6);
                            default:
                                return s[e] ?? "";
                        }
                    })(e, t)),
                        (l.className =
                            2 === t
                                ? `${n.classNames.char} ${n.classNames.scrambled}`
                                : 1 === t || 3 === t
                                  ? `${n.classNames.char} ${n.classNames.shifted}`
                                  : n.classNames.char);
                    let r = t >= 3;
                    r !== a >= 3 && (l.style.width = `${(r ? x : f)[e] ?? 0}px`), (c[e] = t);
                }
                function $(e) {
                    let t = (function (e) {
                            if (e <= 0) return 0;
                            if (e >= 1) return 1;
                            let [t, n, a, l] = C,
                                r = 0,
                                o = 1;
                            for (let n = 0; n < 20; n++) {
                                let n = (r + o) / 2;
                                E(n, t, a) < e ? (r = n) : (o = n);
                            }
                            return E((r + o) / 2, n, l);
                        })(Math.min(1, Math.max(0, (e - j) / n.duration))),
                        a = Math.max(0, Math.floor(R(3, t) * v)),
                        l = Math.min(v, Math.ceil(R(0, t) * v));
                    for (let e = Math.min(a, V); e < Math.max(l, z); e++)
                        D(
                            e,
                            (function (e, t, n) {
                                let a = 0;
                                for (let l = 0; l < N.length; l++) R(l, t) * n > e + 0.5 && (a = l + 1);
                                return a;
                            })(e, t, v),
                        );
                    (V = a),
                        (z = l),
                        (function (e) {
                            let t = Math.round(
                                100 *
                                    (function (e) {
                                        let t = R(1, e),
                                            n = t - R(2, e);
                                        if (n <= 0) return 0;
                                        let a = Math.min(1, n / (t < 1 ? 0.15 : 0.5));
                                        return a * a * (3 - 2 * a);
                                    })(e),
                            );
                            t !== m && null != r && ((r.style.opacity = String(t / 100)), (m = t));
                            for (let t = 0; t < b; t++) {
                                let a = (function (e, t, n) {
                                    let a = R(1, t) * n,
                                        l = R(2, t) * n,
                                        r = e + 0.5;
                                    return r >= a || r < l
                                        ? -1
                                        : Math.max(
                                              0,
                                              Math.min(Math.floor((Math.min(r - l, a - r) / 4) * M.length), M.length),
                                          );
                                })(t, e, b);
                                if (a !== h[t]) {
                                    var n;
                                    (u[t].textContent = a < 0 ? "" : ((n = t), a < M.length ? M.charAt(a) : p[n])),
                                        (h[t] = a);
                                }
                            }
                        })(t),
                        t < 1 ? (g = requestAnimationFrame($)) : (_(), (L = !1), n.onComplete?.());
                }
                function k() {
                    null != r && (r.style.opacity = "0"), (m = 0);
                    for (let e = 0; e < b; e++) -1 !== h[e] && ((u[e].textContent = ""), (h[e] = -1));
                }
                function B(e) {
                    y !== e &&
                        null != l &&
                        ((l.className = e
                            ? `${n.classNames.textLayer} ${n.classNames.hidden}`
                            : n.classNames.textLayer),
                        (y = e));
                }
                function I(e) {
                    null != l && (l.style.transition = e ? "opacity 220ms linear" : "");
                }
                function _() {
                    for (let e = 0; e < v; e++) D(e, 4);
                    I(!1), B(!1), k(), (V = 0), (z = 0);
                }
                function U() {
                    0 !== A && clearTimeout(A), (A = 0);
                }
                function q() {
                    0 !== g && cancelAnimationFrame(g), (g = 0), U(), (w = 0), (L = !1), _();
                }
                return (
                    F(),
                    {
                        play: function () {
                            if ((0 !== g && cancelAnimationFrame(g), (g = 0), U(), 0 === v))
                                return void n.onComplete?.();
                            let e = n.reducedMotion ?? a?.matches === !0;
                            if (n.respectReducedMotion && e) {
                                k(),
                                    I(!0),
                                    B(!0),
                                    (L = !0),
                                    n.onStart?.(),
                                    (A = window.setTimeout(() => {
                                        A = 0;
                                        for (let e = 0; e < v; e++) D(e, 4);
                                        (V = 0),
                                            (z = 0),
                                            B(!1),
                                            (A = window.setTimeout(() => {
                                                (A = 0), I(!1), (L = !1), n.onComplete?.();
                                            }, 220));
                                    }, 220));
                                return;
                            }
                            I(!1),
                                (L = !0),
                                (w = 0),
                                (j = performance.now()),
                                n.onStart?.(),
                                (g = requestAnimationFrame($));
                        },
                        pause: function () {
                            L && 0 === w && 0 !== g && (cancelAnimationFrame(g), (g = 0), (w = performance.now()));
                        },
                        resume: function () {
                            L && 0 !== w && ((j += performance.now() - w), (w = 0), (g = requestAnimationFrame($)));
                        },
                        stop: q,
                        setTransition: function (e, t) {
                            q(), (n.from = e), (n.to = t), F();
                        },
                        setOptions: function (e) {
                            void 0 !== e.duration && (n.duration = e.duration),
                                void 0 !== e.reducedMotion && (n.reducedMotion = e.reducedMotion);
                        },
                        destroy: function () {
                            0 !== g && cancelAnimationFrame(g),
                                (g = 0),
                                U(),
                                (w = 0),
                                (L = !1),
                                (e.textContent = n.to),
                                (y = !1),
                                (l = null),
                                (r = null),
                                (i = []),
                                (u = []),
                                (o = []),
                                (s = []),
                                (c = new Uint8Array(0)),
                                (f = []),
                                (x = []),
                                (h = []),
                                (p = []),
                                (v = 0),
                                (b = 0);
                        },
                        get running() {
                            return L;
                        },
                    }
                );
            })(e, {
                to: D.current[0] ?? "",
                classNames: {
                    textLayer: V.fo,
                    char: V.Tp,
                    glyphLayer: V.sq,
                    glyphCell: V.vF,
                    shifted: V.wI,
                    scrambled: V.Aq,
                    hidden: V.R,
                },
                onComplete: () => F.current?.(),
            });
            return (
                (x.current = t),
                () => {
                    t.destroy(), (x.current = null);
                }
            );
        }, []),
        l.useEffect(() => {
            z.current = B;
            let e = x.current;
            if (null == e) return;
            let t = L.current;
            L.current = I;
            let n = null == t;
            if (
                (e.setOptions({ duration: u, reducedMotion: g.enabled }),
                n ? e.setTransition(I, I) : (e.setTransition(t, I), e.play()),
                null != s)
            ) {
                let e = g.enabled ? 440 : u;
                w.current = n ? s + i : s + e;
            }
        }, [v, B, I, s, i, u, g.enabled]),
        l.useEffect(() => {
            let e = x.current;
            if (null == e) return;
            if (!j) return void e.pause();
            if ((e.resume(), null == s)) return;
            let t = Date.now() + w.current,
                n = window.setTimeout(_, w.current);
            return () => {
                window.clearTimeout(n), (w.current = Math.max(0, t - Date.now()));
            };
        }, [j, v, _, s]),
        (0, a.jsxs)(r.E, {
            variant: n,
            color: o,
            tag: "span",
            className: d,
            children: [
                (0, a.jsx)("span", { ref: f, className: V.Hc, "aria-hidden": !0 }),
                (0, a.jsx)(A.A, { children: I }),
            ],
        })
    );
});
var L = n(918846);
let F = ["Ask about day one survival strategies", "Ask how to build your first mineshaft", "Ask about Minecraft"];
function D(e) {
    let { children: t } = e,
        n = l.useContext(p.C),
        r = l.useMemo(() => ({ ...n, reducedMotion: { ...n.reducedMotion, enabled: !0 } }), [n]);
    return (0, a.jsx)(p.C.Provider, { value: r, children: t });
}
function $() {
    let e = l.useRef(null),
        t = l.useCallback(() => e.current?.play(), []);
    return (0, a.jsx)("div", {
        className: L.dw,
        tabIndex: 0,
        onMouseEnter: t,
        onFocus: t,
        children: (0, a.jsx)(z, { ref: e, text: F, delay: null }),
    });
}
let k = {
        id: "ai-visual-identity",
        name: "AI Visual Identity",
        groups: [
            h,
            j,
            {
                title: "AITextEffect",
                stories: [
                    {
                        name: "AITextEffect",
                        id: "ai-text-effect",
                        component: function () {
                            return (0, a.jsxs)(w.B, {
                                gap: 16,
                                children: [
                                    (0, a.jsx)(r.E, { variant: "text-md/normal", children: "Example showcase" }),
                                    (0, a.jsxs)("div", {
                                        className: L.GG,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: L.uW,
                                                children: [
                                                    (0, a.jsx)(r.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-default",
                                                        children: "Cycling placeholders",
                                                    }),
                                                    (0, a.jsx)(r.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-subtle",
                                                        children:
                                                            "Suggested prompts rotate after the configured delay.",
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: L.dw,
                                                        children: (0, a.jsx)(z, { text: F, delay: 1500 }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: L.uW,
                                                children: [
                                                    (0, a.jsx)(r.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-default",
                                                        children: "Staggered offsets",
                                                    }),
                                                    (0, a.jsx)(r.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-subtle",
                                                        children: "`initialDelay` offsets effects that start together.",
                                                    }),
                                                    (0, a.jsx)(z, { text: F, delay: 1500, initialDelay: 0 }),
                                                    (0, a.jsx)(z, { text: F, delay: 1500, initialDelay: 100 }),
                                                    (0, a.jsx)(z, { text: F, delay: 1500, initialDelay: 200 }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: L.uW,
                                                children: [
                                                    (0, a.jsx)(r.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-default",
                                                        children: "Reduced motion",
                                                    }),
                                                    (0, a.jsx)(r.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-subtle",
                                                        children:
                                                            "This example forces a simple cross-fade regardless of your system setting.",
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: L.dw,
                                                        children: (0, a.jsx)(D, {
                                                            children: (0, a.jsx)(z, { text: F, delay: 1500 }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: L.uW,
                                                children: [
                                                    (0, a.jsx)(r.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-default",
                                                        children: "Hover to play",
                                                    }),
                                                    (0, a.jsx)(r.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-subtle",
                                                        children:
                                                            "A `null` delay never cycles on its own; each hover or focus calls `play()` on the ref.",
                                                    }),
                                                    (0, a.jsx)($, {}),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: L.uW,
                                                children: [
                                                    (0, a.jsx)(r.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-default",
                                                        children: "Single line",
                                                    }),
                                                    (0, a.jsx)(r.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-subtle",
                                                        children:
                                                            "A single string animates back to itself after the initial delay.",
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: L.dw,
                                                        children: (0, a.jsx)(z, {
                                                            text: "Ask about day one survival strategies",
                                                            delay: 1500,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            });
                        },
                    },
                ],
            },
        ],
    },
    B = { collections: [k] };
