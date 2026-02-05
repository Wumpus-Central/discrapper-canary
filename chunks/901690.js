n.d(t, { A: () => b });
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
let N = { x: 0, y: 0 },
    v = (0, r.debounce)((e, t, n) => {
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
function y(e, t, n) {
    return Math.min(Math.max(t, e), n);
}
let b = l.memo(function (e) {
    let { enableZoom: t = !1, minZoom: n = 1, maxZoom: a = 5, controlsBottom: r = 8, idle: A = !1, ...p } = e,
        { streamId: f, streamKey: _, onResize: x, wrapperClassName: b, videoComponent: R, mirror: j, paused: M } = p,
        { onActive: D, onPreventIdle: O, onAllowIdle: L } = l.useContext(g.k3),
        [P, w] = l.useState(!1),
        [k, U] = l.useState(null),
        [G, F] = l.useState(null),
        [H, B] = l.useState(0),
        [V, W] = l.useState(N),
        [K, z] = l.useState(null),
        [Y, q] = l.useState(null),
        [J, $] = l.useState(!1),
        [Z, X] = l.useState(n),
        [Q, ee] = l.useState(!1),
        [et, en] = l.useState(!1),
        [ei, el] = l.useState(16 / 9),
        [ea, es] = l.useState(!1),
        [er, eo] = l.useState(!1),
        ec = l.useRef(new c.Ep()),
        ed = l.useRef(new c.Ep()),
        eu = l.useRef(new c.Ep()),
        eh = l.useRef(new c.Ep()),
        em = l.useRef(null),
        eA = l.useRef(null),
        ep = l.useRef(null),
        eg = (0, u.zhh)({ value: r, config: { ...o.config.stiff, clamp: !0 } }, "animate-always"),
        ef = Z > n,
        e_ = l.useCallback(
            (e) => {
                e.width > 0 && e.height > 0 && el(e.width / e.height), x?.(e);
            },
            [x],
        ),
        eE = l.useCallback((e) => {
            if (null == em.current) return N;
            let t = em.current.getBoundingClientRect();
            return { x: e.clientX - t.left - t.width / 2, y: e.clientY - t.top - t.height / 2 };
        }, []),
        eC = l.useCallback(
            (e, t) => {
                if (null == em.current) return N;
                let n = t ?? Z,
                    i = em.current.clientWidth,
                    l = em.current.clientHeight,
                    a = (i * (n - 1)) / 2,
                    s = (l * (n - 1)) / 2;
                return { x: y(e.x, -a, a), y: y(e.y, -s, s) };
            },
            [Z],
        ),
        ex = l.useCallback(
            (e, t, i) => {
                let l = y(e, n, a);
                if (null == em.current || null == t || l === Z) return;
                eo(!0);
                let s = l / Z;
                W((e) => eC({ x: (e.x - t.x) * s + t.x, y: (e.y - t.y) * s + t.y }, l)),
                    X(l),
                    v(l, i, _),
                    eh.current.start(2e3, () => {
                        eo(!1);
                    });
            },
            [eC, a, n, _, Z],
        ),
        eS = l.useCallback(
            (e) => {
                if (!ef) return;
                e.preventDefault(), e.stopPropagation();
                let t = eE(e);
                w(!0), F(t), U(t), B(Date.now()), q(t), z(V);
            },
            [eE, ef, V],
        ),
        eT = l.useCallback(
            (e) => {
                if (((t || ef) && D(), !P || !ef || null == Y || null == K)) return;
                e.preventDefault(), e.stopPropagation();
                let n = eE(e),
                    i = n.x - Y.x,
                    l = n.y - Y.y;
                W(eC({ x: K.x + i, y: K.y + l })), U(n);
            },
            [eC, Y, K, t, eE, P, ef, D],
        ),
        eI = l.useCallback((e) => {
            e.preventDefault(), e.stopPropagation(), w(!1), q(null), z(null);
        }, []),
        eN = l.useCallback(
            (e) => {
                if (ef && null != G && null != k) {
                    let { x: t, y: n } = G,
                        { x: i, y: l } = k;
                    (Math.sqrt((i - t) ** 2 + (l - n) ** 2) > 0.01 || Date.now() - H >= 500) &&
                        (e.preventDefault(), e.stopPropagation());
                }
            },
            [ef, G, H, k],
        ),
        ev = l.useCallback(() => {
            w(!1), q(null), z(null);
        }, []),
        ey = l.useCallback(
            (e) => {
                t &&
                    (ee(!0),
                    ex(Z - e.deltaY / 100, eE(e), "wheel"),
                    D(),
                    ec.current.start(100, () => {
                        ee(!1);
                    }));
            },
            [t, ex, Z, eE, D],
        ),
        eb = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), ex(Z + 0.25, N, "button");
            },
            [ex, Z],
        ),
        eR = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), ex(Z - 0.25, N, "button");
            },
            [ex, Z],
        ),
        ej = l.useCallback(
            (e) => {
                en(!0),
                    ex(e, N, "slider"),
                    D(),
                    ed.current.start(100, () => {
                        en(!1);
                    });
            },
            [ex, D],
        ),
        eM = l.useCallback(() => {
            O("interact");
        }, [O]),
        eD = l.useCallback(() => {
            $(!1), L("interact");
        }, [L]),
        eO = l.useCallback((e) => {
            e.preventDefault(), e.stopPropagation();
        }, []),
        eL = l.useCallback(
            (e) => {
                if (null == eA.current || null == em.current) return;
                let t = eA.current.getBoundingClientRect(),
                    n = em.current.clientWidth,
                    i = em.current.clientHeight,
                    l = e.x - t.left,
                    a = e.y - t.top;
                W(eC({ x: (0.5 - l / t.width) * n * Z, y: (0.5 - a / t.height) * i * Z }));
            },
            [eC, Z],
        ),
        eP = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), $(!0), eL({ x: e.clientX, y: e.clientY });
            },
            [eL],
        ),
        ew = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), J && eL({ x: e.clientX, y: e.clientY });
            },
            [J, eL],
        ),
        ek = l.useCallback((e) => {
            e.preventDefault(), e.stopPropagation(), $(!1);
        }, []),
        eU = l.useCallback((e) => {
            e.preventDefault(), e.stopPropagation();
        }, []);
    (0, h.i4)(
        em,
        l.useCallback(
            (e) => {
                let { width: t, height: n } = e;
                if (!ef || null == t || null == n) return;
                let i = ep.current;
                if (null == i) {
                    ep.current = { width: t, height: n };
                    return;
                }
                let { width: l, height: a } = i;
                (1 > Math.abs(t - l) && 1 > Math.abs(n - a)) ||
                    (es(!0),
                    W((e) => {
                        let i = (l * (Z - 1)) / 2,
                            s = (a * (Z - 1)) / 2,
                            r = (t * (Z - 1)) / 2,
                            o = (n * (Z - 1)) / 2;
                        return eC({ x: (0 !== i ? e.x / i : 0) * r, y: (0 !== s ? e.y / s : 0) * o });
                    }),
                    (ep.current = { width: t, height: n }),
                    eu.current.start(100, () => {
                        es(!1);
                    }));
            },
            [eC, ef, Z],
        ),
        [ef, Z],
    ),
        (0, m.l0)(() => {
            ec.current.stop(), ed.current.stop(), eu.current.stop(), eh.current.stop();
        }),
        l.useEffect(() => {
            null != f && (0, E.c)(f, void 0, t && ef ? Z : 1);
        }, [t, ef, f, Z]);
    let eG = l.useMemo(() => {
            let e = eC(V);
            return {
                "--custom-zoom-scale": Z,
                "--custom-pan-x": `${e.x}px`,
                "--custom-pan-y": `${e.y}px`,
                "--custom-zoom-transition": P || ea || Q || et ? "none" : "transform 0.15s ease-out",
            };
        }, [eC, P, ea, Q, et, V, Z]),
        eF = l.useMemo(() => {
            let e = 120 * Math.min(ei, 32 / 9);
            return { "--custom-zoom-minimap-width": `${e}px`, "--custom-zoom-minimap-height": "120px" };
        }, [ei]),
        eH = l.useMemo(() => {
            let e = null != em.current ? em.current.clientWidth : 1,
                t = null != em.current ? em.current.clientHeight : 1,
                n = 1 / Z,
                i = 1 / Z,
                l = 0.5 - V.x / (e * Z),
                a = 0.5 - V.y / (t * Z);
            return {
                "--custom-zoom-indicator-left": `${100 * y(l - n / 2, 0, 1 - n)}%`,
                "--custom-zoom-indicator-top": `${100 * y(a - i / 2, 0, 1 - i)}%`,
                "--custom-zoom-indicator-width": `${100 * n}%`,
                "--custom-zoom-indicator-height": `${100 * i}%`,
                "--custom-zoom-indicator-transition":
                    P || J || Q || et
                        ? "none"
                        : "top 0.1s ease-out, left 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out",
            };
        }, [P, J, Q, et, V, Z]);
    return (0, i.jsxs)("div", {
        ref: em,
        className: s()(I.iE, b, { [I.rc]: t && ef, [I.d$]: P }),
        onMouseDown: eS,
        onMouseMove: eT,
        onMouseUp: eI,
        onMouseLeave: ev,
        onWheel: ey,
        children: [
            (0, i.jsx)(u.DUT, {
                onClick: eN,
                children:
                    null != f &&
                    (0, i.jsx)("div", {
                        className: s()(I.j, I.L2),
                        style: eG,
                        children: (0, i.jsx)(C.A, { ...p, onResize: e_, wrapperClassName: void 0 }),
                    }),
            }),
            t &&
                null != f &&
                (0, i.jsx)(o.animated.div, {
                    className: s()(I.Vp, { [I.N7]: A }),
                    style: { bottom: eg.value },
                    children: (0, i.jsxs)("div", {
                        className: s()(I.mu, { [I.He]: er || ef }),
                        onMouseEnter: eM,
                        onMouseLeave: eD,
                        onClick: eO,
                        children: [
                            (er || ef) &&
                                (0, i.jsx)(u.DUT, {
                                    onClick: eU,
                                    onMouseEnter: eM,
                                    onMouseLeave: eD,
                                    children: (0, i.jsxs)("div", {
                                        ref: eA,
                                        className: I.Wc,
                                        style: eF,
                                        onMouseDown: eP,
                                        onMouseMove: ew,
                                        onMouseUp: ek,
                                        children: [
                                            (0, i.jsx)(R, {
                                                className: s()(I.BZ, { [T.mirror]: j }),
                                                streamId: f,
                                                paused: M,
                                                reportContainerResized: !1,
                                            }),
                                            (0, i.jsx)("div", { className: I.xq, style: eH }),
                                        ],
                                    }),
                                }),
                            (0, i.jsxs)("div", {
                                className: I.GK,
                                children: [
                                    (er || ef) &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(d.m_, {
                                                    text: S.intl.string(S.t.M6Cmwy),
                                                    position: "top",
                                                    children: (0, i.jsx)(u.K0, {
                                                        icon: u.V0_,
                                                        onClick: eR,
                                                        disabled: Z <= n,
                                                        variant: "overlay-secondary",
                                                        size: "sm",
                                                        "aria-label": S.intl.string(S.t.M6Cmwy),
                                                    }),
                                                }),
                                                (0, i.jsx)(u.Apm, {
                                                    minValue: n,
                                                    maxValue: a,
                                                    initialValue: Z,
                                                    value: Z,
                                                    asValueChanges: ej,
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
                                            onClick: eb,
                                            disabled: Z >= a,
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
