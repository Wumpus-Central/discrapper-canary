n.d(t, { A: () => R });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(735438),
    o = n(92674),
    c = n(451988),
    d = n(435371),
    u = n(397927),
    h = n(765671),
    m = n(964486),
    A = n(652896),
    p = n(834757),
    g = n(461782),
    f = n(290863),
    _ = n(954571),
    E = n(426179),
    C = n(401901),
    x = n(652215),
    S = n(985018),
    T = n(463689),
    I = n(139208);
let N = { x: 0, y: 0 };
function v(e) {
    return (1 & e.buttons) == 1;
}
let y = (0, r.debounce)((e, t, n) => {
    let i = null,
        l = null;
    if (null != n && (0, A.wL)(n)) {
        let e = (0, A.Iy)(n),
            t = (0, p.Ee)(e, f.A);
        (i = t?.name ?? null), (l = t?.id ?? null);
    }
    _.default.track(x.HAw.VIDEO_STREAM_ZOOM_CHANGED, {
        zoom_level: e,
        method: t,
        share_application_name: i,
        share_application_id: l,
    });
}, 2e3);
function b(e, t, n) {
    return Math.min(Math.max(t, e), n);
}
let R = l.memo(function (e) {
    let { enableZoom: t = !1, minZoom: n = 1, maxZoom: a = 5, controlsBottom: r = 8, idle: A = !1, ...p } = e,
        { streamId: f, streamKey: _, onResize: x, wrapperClassName: R, videoComponent: j, mirror: M, paused: D } = p,
        { onActive: O, onPreventIdle: L, onAllowIdle: P } = l.useContext(g.k3),
        [w, k] = l.useState(!1),
        [U, G] = l.useState(null),
        [F, H] = l.useState(null),
        [B, V] = l.useState(0),
        [W, K] = l.useState(N),
        [z, Y] = l.useState(null),
        [q, J] = l.useState(null),
        [$, Z] = l.useState(!1),
        [X, Q] = l.useState(n),
        [ee, et] = l.useState(!1),
        [en, ei] = l.useState(!1),
        [el, ea] = l.useState(16 / 9),
        [es, er] = l.useState(!1),
        [eo, ec] = l.useState(!1),
        ed = l.useRef(new c.Ep()),
        eu = l.useRef(new c.Ep()),
        eh = l.useRef(new c.Ep()),
        em = l.useRef(new c.Ep()),
        eA = l.useRef(null),
        ep = l.useRef(null),
        eg = l.useRef(null),
        ef = (0, u.zhh)({ value: r, config: { ...o.config.stiff, clamp: !0 } }, "animate-always"),
        e_ = X > n,
        eE = l.useCallback(
            (e) => {
                e.width > 0 && e.height > 0 && ea(e.width / e.height), x?.(e);
            },
            [x],
        ),
        eC = l.useCallback((e) => {
            if (null == eA.current) return N;
            let t = eA.current.getBoundingClientRect();
            return { x: e.clientX - t.left - t.width / 2, y: e.clientY - t.top - t.height / 2 };
        }, []),
        ex = l.useCallback(
            (e, t) => {
                if (null == eA.current) return N;
                let n = t ?? X,
                    i = eA.current.clientWidth,
                    l = eA.current.clientHeight,
                    a = (i * (n - 1)) / 2,
                    s = (l * (n - 1)) / 2;
                return { x: b(e.x, -a, a), y: b(e.y, -s, s) };
            },
            [X],
        ),
        eS = l.useCallback(
            (e, t, i) => {
                let l = b(e, n, a);
                if (null == eA.current || null == t || l === X) return;
                ec(!0);
                let s = l / X;
                K((e) => ex({ x: (e.x - t.x) * s + t.x, y: (e.y - t.y) * s + t.y }, l)),
                    Q(l),
                    y(l, i, _),
                    em.current.start(2e3, () => {
                        ec(!1);
                    });
            },
            [ex, a, n, _, X],
        ),
        eT = l.useCallback(
            (e) => {
                if (!e_ || !v(e)) return;
                e.preventDefault(), e.stopPropagation();
                let t = eC(e);
                k(!0), H(t), G(t), V(Date.now()), J(t), Y(W);
            },
            [eC, e_, W],
        ),
        eI = l.useCallback(
            (e) => {
                if (((t || e_) && O(), !w || !e_ || null == q || null == z)) return;
                e.preventDefault(), e.stopPropagation();
                let n = eC(e),
                    i = n.x - q.x,
                    l = n.y - q.y;
                K(ex({ x: z.x + i, y: z.y + l })), G(n);
            },
            [ex, q, z, t, eC, w, e_, O],
        ),
        eN = l.useCallback(
            (e) => {
                !w || v(e) || (e.preventDefault(), e.stopPropagation(), k(!1), J(null), Y(null));
            },
            [w],
        ),
        ev = l.useCallback(
            (e) => {
                if (e_ && null != F && null != U) {
                    let { x: t, y: n } = F,
                        { x: i, y: l } = U;
                    (Math.sqrt((i - t) ** 2 + (l - n) ** 2) > 0.01 || Date.now() - B >= 500) &&
                        (e.preventDefault(), e.stopPropagation());
                }
            },
            [e_, F, B, U],
        ),
        ey = l.useCallback(() => {
            k(!1), J(null), Y(null);
        }, []),
        eb = l.useCallback(
            (e) => {
                t &&
                    (et(!0),
                    eS(X - e.deltaY / 100, eC(e), "wheel"),
                    O(),
                    ed.current.start(100, () => {
                        et(!1);
                    }));
            },
            [t, eS, X, eC, O],
        ),
        eR = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), eS(X + 0.25, N, "button");
            },
            [eS, X],
        ),
        ej = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), eS(X - 0.25, N, "button");
            },
            [eS, X],
        ),
        eM = l.useCallback(
            (e) => {
                ei(!0),
                    eS(e, N, "slider"),
                    O(),
                    eu.current.start(100, () => {
                        ei(!1);
                    });
            },
            [eS, O],
        ),
        eD = l.useCallback(() => {
            L("interact");
        }, [L]),
        eO = l.useCallback(() => {
            Z(!1), P("interact");
        }, [P]),
        eL = l.useCallback((e) => {
            e.preventDefault(), e.stopPropagation();
        }, []),
        eP = l.useCallback(
            (e) => {
                if (null == ep.current || null == eA.current) return;
                let t = ep.current.getBoundingClientRect(),
                    n = eA.current.clientWidth,
                    i = eA.current.clientHeight,
                    l = e.x - t.left,
                    a = e.y - t.top;
                K(ex({ x: (0.5 - l / t.width) * n * X, y: (0.5 - a / t.height) * i * X }));
            },
            [ex, X],
        ),
        ew = l.useCallback(
            (e) => {
                v(e) && (e.preventDefault(), e.stopPropagation(), Z(!0), eP({ x: e.clientX, y: e.clientY }));
            },
            [eP],
        ),
        ek = l.useCallback(
            (e) => {
                $ && (e.preventDefault(), e.stopPropagation(), eP({ x: e.clientX, y: e.clientY }));
            },
            [$, eP],
        ),
        eU = l.useCallback(
            (e) => {
                !$ || v(e) || (e.preventDefault(), e.stopPropagation(), Z(!1));
            },
            [$],
        ),
        eG = l.useCallback((e) => {
            e.preventDefault(), e.stopPropagation();
        }, []);
    (0, h.i4)(
        eA,
        l.useCallback(
            (e) => {
                let { width: t, height: n } = e;
                if (!e_ || null == t || null == n) return;
                let i = eg.current;
                if (null == i) {
                    eg.current = { width: t, height: n };
                    return;
                }
                let { width: l, height: a } = i;
                (1 > Math.abs(t - l) && 1 > Math.abs(n - a)) ||
                    (er(!0),
                    K((e) => {
                        let i = (l * (X - 1)) / 2,
                            s = (a * (X - 1)) / 2,
                            r = (t * (X - 1)) / 2,
                            o = (n * (X - 1)) / 2;
                        return ex({ x: (0 !== i ? e.x / i : 0) * r, y: (0 !== s ? e.y / s : 0) * o });
                    }),
                    (eg.current = { width: t, height: n }),
                    eh.current.start(100, () => {
                        er(!1);
                    }));
            },
            [ex, e_, X],
        ),
        [e_, X],
    ),
        (0, m.l0)(() => {
            ed.current.stop(), eu.current.stop(), eh.current.stop(), em.current.stop();
        }),
        l.useEffect(() => {
            null != f && (0, E.c)(f, void 0, t && e_ ? X : 1);
        }, [t, e_, f, X]);
    let eF = l.useMemo(() => {
            let e = ex(W);
            return {
                "--custom-zoom-scale": X,
                "--custom-pan-x": `${e.x}px`,
                "--custom-pan-y": `${e.y}px`,
                "--custom-zoom-transition": w || es || ee || en ? "none" : "transform 0.15s ease-out",
            };
        }, [ex, w, es, ee, en, W, X]),
        eH = l.useMemo(() => {
            let e = 120 * Math.min(el, 32 / 9);
            return { "--custom-zoom-minimap-width": `${e}px`, "--custom-zoom-minimap-height": "120px" };
        }, [el]),
        eB = l.useMemo(() => {
            let e = null != eA.current ? eA.current.clientWidth : 1,
                t = null != eA.current ? eA.current.clientHeight : 1,
                n = 1 / X,
                i = 1 / X,
                l = 0.5 - W.x / (e * X),
                a = 0.5 - W.y / (t * X);
            return {
                "--custom-zoom-indicator-left": `${100 * b(l - n / 2, 0, 1 - n)}%`,
                "--custom-zoom-indicator-top": `${100 * b(a - i / 2, 0, 1 - i)}%`,
                "--custom-zoom-indicator-width": `${100 * n}%`,
                "--custom-zoom-indicator-height": `${100 * i}%`,
                "--custom-zoom-indicator-transition":
                    w || $ || ee || en
                        ? "none"
                        : "top 0.1s ease-out, left 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out",
            };
        }, [w, $, ee, en, W, X]);
    return (0, i.jsxs)("div", {
        ref: eA,
        className: s()(I.iE, R, { [I.rc]: t && e_, [I.d$]: w }),
        onMouseDown: eT,
        onMouseMove: eI,
        onMouseUp: eN,
        onMouseLeave: ey,
        onWheel: eb,
        onClick: ev,
        children: [
            null != f &&
                (0, i.jsx)("div", {
                    className: s()(I.j, I.L2),
                    style: eF,
                    children: (0, i.jsx)(C.A, { ...p, onResize: eE, wrapperClassName: void 0 }),
                }),
            t &&
                null != f &&
                (0, i.jsx)(o.animated.div, {
                    className: s()(I.Vp, { [I.N7]: A }),
                    style: { bottom: ef.value },
                    children: (0, i.jsxs)("div", {
                        className: s()(I.mu, { [I.He]: eo || e_ }),
                        onMouseEnter: eD,
                        onMouseLeave: eO,
                        onClick: eL,
                        children: [
                            (eo || e_) &&
                                (0, i.jsx)(u.DUT, {
                                    onClick: eG,
                                    onMouseEnter: eD,
                                    onMouseLeave: eO,
                                    children: (0, i.jsxs)("div", {
                                        ref: ep,
                                        className: I.Wc,
                                        style: eH,
                                        onMouseDown: ew,
                                        onMouseMove: ek,
                                        onMouseUp: eU,
                                        children: [
                                            (0, i.jsx)(j, {
                                                className: s()(I.BZ, { [T.mirror]: M }),
                                                streamId: f,
                                                paused: D,
                                                reportContainerResized: !1,
                                            }),
                                            (0, i.jsx)("div", { className: I.xq, style: eB }),
                                        ],
                                    }),
                                }),
                            (0, i.jsxs)("div", {
                                className: I.GK,
                                children: [
                                    (eo || e_) &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(d.m_, {
                                                    text: S.intl.string(S.t.M6Cmwy),
                                                    position: "top",
                                                    children: (0, i.jsx)(u.K0, {
                                                        icon: u.V0_,
                                                        onClick: ej,
                                                        disabled: X <= n,
                                                        variant: "overlay-secondary",
                                                        size: "sm",
                                                        "aria-label": S.intl.string(S.t.M6Cmwy),
                                                    }),
                                                }),
                                                (0, i.jsx)(u.Apm, {
                                                    minValue: n,
                                                    maxValue: a,
                                                    initialValue: X,
                                                    value: X,
                                                    asValueChanges: eM,
                                                    onValueRender: (e) => `${Math.round(100 * e)}%`,
                                                    "aria-label": S.intl.string(S.t.grzPmr),
                                                }),
                                            ],
                                        }),
                                    (0, i.jsx)(d.m_, {
                                        text: S.intl.string(S.t["9hMafy"]),
                                        position: "top",
                                        children: (0, i.jsx)(u.K0, {
                                            icon: u.r1u,
                                            onClick: eR,
                                            disabled: X >= a,
                                            variant: "overlay-secondary",
                                            size: "sm",
                                            "aria-label": S.intl.string(S.t["9hMafy"]),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
        ],
    });
});
