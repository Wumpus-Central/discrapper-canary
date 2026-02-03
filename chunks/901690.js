n.d(t, {
    A: () => N,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(735438),
    o = n(92674),
    c = n(451988),
    u = n(435371),
    d = n(397927),
    h = n(765671),
    p = n(964486),
    f = n(652896),
    m = n(834757),
    g = n(461782),
    A = n(290863),
    b = n(954571),
    _ = n(426179),
    y = n(401901),
    v = n(652215),
    E = n(985018),
    O = n(463689),
    C = n(139208);

function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}

function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = {
        x: 0,
        y: 0,
    },
    I = (0, s.debounce)((e, t, n) => {
        let l = null,
            r = null;
        if (null != n && (0, f.wL)(n)) {
            var i, a;
            let e = (0, f.Iy)(n),
                t = (0, m.Ee)(e, A.A);
            (l = null != (i = null == t ? void 0 : t.name) ? i : null),
                (r = null != (a = null == t ? void 0 : t.id) ? a : null);
        }
        b.default.track(v.HAw.VIDEO_STREAM_ZOOM_CHANGED, {
            zoom_level: e,
            method: t,
            share_application_name: l,
            share_application_id: r,
        });
    }, 2e3);

function T(e, t, n) {
    return Math.min(Math.max(t, e), n);
}
let N = r.memo(function (e) {
    let { enableZoom: t = !1, minZoom: n = 1, maxZoom: i = 5, controlsBottom: s = 8, idle: f = !1 } = e,
        m = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
                    (l = n[r]),
                        !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        r = {},
                        i = Object.getOwnPropertyNames(e);
                    for (l = 0; l < i.length; l++)
                        (n = i[l]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                    return r;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                    (l = n[r]),
                        !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
            return i;
        })(e, ["enableZoom", "minZoom", "maxZoom", "controlsBottom", "idle"]),
        { streamId: A, streamKey: b, onResize: v, wrapperClassName: N, videoComponent: P, mirror: w, paused: R } = m,
        { onActive: D, onPreventIdle: M, onAllowIdle: k } = r.useContext(g.k3),
        [L, U] = r.useState(!1),
        [G, F] = r.useState(null),
        [H, B] = r.useState(null),
        [V, K] = r.useState(0),
        [W, z] = r.useState(j),
        [Y, q] = r.useState(null),
        [J, Z] = r.useState(null),
        [X, Q] = r.useState(!1),
        [$, ee] = r.useState(n),
        [et, en] = r.useState(!1),
        [el, er] = r.useState(!1),
        [ei, ea] = r.useState(16 / 9),
        [es, eo] = r.useState(!1),
        [ec, eu] = r.useState(!1),
        ed = r.useRef(new c.Ep()),
        eh = r.useRef(new c.Ep()),
        ep = r.useRef(new c.Ep()),
        ef = r.useRef(new c.Ep()),
        em = r.useRef(null),
        eg = r.useRef(null),
        eA = r.useRef(null),
        eb = (0, d.zhh)(
            {
                value: s,
                config: x(S({}, o.config.stiff), {
                    clamp: !0,
                }),
            },
            "animate-always",
        ),
        e_ = $ > n,
        ey = r.useCallback(
            (e) => {
                e.width > 0 && e.height > 0 && ea(e.width / e.height), null == v || v(e);
            },
            [v],
        ),
        ev = r.useCallback((e) => {
            if (null == em.current) return j;
            let t = em.current.getBoundingClientRect();
            return {
                x: e.clientX - t.left - t.width / 2,
                y: e.clientY - t.top - t.height / 2,
            };
        }, []),
        eE = r.useCallback(
            (e, t) => {
                if (null == em.current) return j;
                let n = null != t ? t : $,
                    l = em.current.clientWidth,
                    r = em.current.clientHeight,
                    i = (l * (n - 1)) / 2,
                    a = (r * (n - 1)) / 2;
                return {
                    x: T(e.x, -i, i),
                    y: T(e.y, -a, a),
                };
            },
            [$],
        ),
        eO = r.useCallback(
            (e, t, l) => {
                let r = T(e, n, i);
                if (null == em.current || null == t || r === $) return;
                eu(!0);
                let a = r / $;
                z((e) =>
                    eE(
                        {
                            x: (e.x - t.x) * a + t.x,
                            y: (e.y - t.y) * a + t.y,
                        },
                        r,
                    ),
                ),
                    ee(r),
                    I(r, l, b),
                    ef.current.start(2e3, () => {
                        eu(!1);
                    });
            },
            [eE, i, n, b, $],
        ),
        eC = r.useCallback(
            (e) => {
                if (!e_) return;
                e.preventDefault(), e.stopPropagation();
                let t = ev(e);
                U(!0), B(t), F(t), K(Date.now()), Z(t), q(W);
            },
            [ev, e_, W],
        ),
        eS = r.useCallback(
            (e) => {
                if (((t || e_) && D(), !L || !e_ || null == J || null == Y)) return;
                e.preventDefault(), e.stopPropagation();
                let n = ev(e),
                    l = n.x - J.x,
                    r = n.y - J.y;
                z(
                    eE({
                        x: Y.x + l,
                        y: Y.y + r,
                    }),
                ),
                    F(n);
            },
            [eE, J, Y, t, ev, L, e_, D],
        ),
        ex = r.useCallback((e) => {
            e.preventDefault(), e.stopPropagation(), U(!1), Z(null), q(null);
        }, []),
        ej = r.useCallback(
            (e) => {
                if (e_ && null != H && null != G) {
                    let { x: t, y: n } = H,
                        { x: l, y: r } = G;
                    (Math.sqrt((l - t) ** 2 + (r - n) ** 2) > 0.01 || Date.now() - V >= 500) &&
                        (e.preventDefault(), e.stopPropagation());
                }
            },
            [e_, H, V, G],
        ),
        eI = r.useCallback(() => {
            U(!1), Z(null), q(null);
        }, []),
        eT = r.useCallback(
            (e) => {
                t &&
                    (en(!0),
                    eO($ - e.deltaY / 100, ev(e), "wheel"),
                    D(),
                    ed.current.start(100, () => {
                        en(!1);
                    }));
            },
            [t, eO, $, ev, D],
        ),
        eN = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), eO($ + 0.25, j, "button");
            },
            [eO, $],
        ),
        eP = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), eO($ - 0.25, j, "button");
            },
            [eO, $],
        ),
        ew = r.useCallback(
            (e) => {
                er(!0),
                    eO(e, j, "slider"),
                    D(),
                    eh.current.start(100, () => {
                        er(!1);
                    });
            },
            [eO, D],
        ),
        eR = r.useCallback(() => {
            M("interact");
        }, [M]),
        eD = r.useCallback(() => {
            Q(!1), k("interact");
        }, [k]),
        eM = r.useCallback((e) => {
            e.preventDefault(), e.stopPropagation();
        }, []),
        ek = r.useCallback(
            (e) => {
                if (null == eg.current || null == em.current) return;
                let t = eg.current.getBoundingClientRect(),
                    n = em.current.clientWidth,
                    l = em.current.clientHeight,
                    r = e.x - t.left,
                    i = e.y - t.top;
                z(
                    eE({
                        x: (0.5 - r / t.width) * n * $,
                        y: (0.5 - i / t.height) * l * $,
                    }),
                );
            },
            [eE, $],
        ),
        eL = r.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    Q(!0),
                    ek({
                        x: e.clientX,
                        y: e.clientY,
                    });
            },
            [ek],
        ),
        eU = r.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    X &&
                        ek({
                            x: e.clientX,
                            y: e.clientY,
                        });
            },
            [X, ek],
        ),
        eG = r.useCallback((e) => {
            e.preventDefault(), e.stopPropagation(), Q(!1);
        }, []),
        eF = r.useCallback((e) => {
            e.preventDefault(), e.stopPropagation();
        }, []);
    (0, h.i4)(
        em,
        r.useCallback(
            (e) => {
                let { width: t, height: n } = e;
                if (!e_ || null == t || null == n) return;
                let l = eA.current;
                if (null == l) {
                    eA.current = {
                        width: t,
                        height: n,
                    };
                    return;
                }
                let { width: r, height: i } = l;
                (1 > Math.abs(t - r) && 1 > Math.abs(n - i)) ||
                    (eo(!0),
                    z((e) => {
                        let l = (r * ($ - 1)) / 2,
                            a = (i * ($ - 1)) / 2,
                            s = (t * ($ - 1)) / 2,
                            o = (n * ($ - 1)) / 2;
                        return eE({
                            x: (0 !== l ? e.x / l : 0) * s,
                            y: (0 !== a ? e.y / a : 0) * o,
                        });
                    }),
                    (eA.current = {
                        width: t,
                        height: n,
                    }),
                    ep.current.start(100, () => {
                        eo(!1);
                    }));
            },
            [eE, e_, $],
        ),
        [e_, $],
    ),
        (0, p.l0)(() => {
            ed.current.stop(), eh.current.stop(), ep.current.stop(), ef.current.stop();
        }),
        r.useEffect(() => {
            null != A && (0, _.c)(A, void 0, t && e_ ? $ : 1);
        }, [t, e_, A, $]);
    let eH = r.useMemo(() => {
            let e = eE(W);
            return {
                "--custom-zoom-scale": $,
                "--custom-pan-x": "".concat(e.x, "px"),
                "--custom-pan-y": "".concat(e.y, "px"),
                "--custom-zoom-transition": L || es || et || el ? "none" : "transform 0.15s ease-out",
            };
        }, [eE, L, es, et, el, W, $]),
        eB = r.useMemo(() => {
            let e = 120 * Math.min(ei, 32 / 9);
            return {
                "--custom-zoom-minimap-width": "".concat(e, "px"),
                "--custom-zoom-minimap-height": "".concat(120, "px"),
            };
        }, [ei]),
        eV = r.useMemo(() => {
            let e = null != em.current ? em.current.clientWidth : 1,
                t = null != em.current ? em.current.clientHeight : 1,
                n = 1 / $,
                l = 1 / $,
                r = 0.5 - W.x / (e * $),
                i = 0.5 - W.y / (t * $);
            return {
                "--custom-zoom-indicator-left": "".concat(100 * T(r - n / 2, 0, 1 - n), "%"),
                "--custom-zoom-indicator-top": "".concat(100 * T(i - l / 2, 0, 1 - l), "%"),
                "--custom-zoom-indicator-width": "".concat(100 * n, "%"),
                "--custom-zoom-indicator-height": "".concat(100 * l, "%"),
                "--custom-zoom-indicator-transition":
                    L || X || et || el
                        ? "none"
                        : "top 0.1s ease-out, left 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out",
            };
        }, [L, X, et, el, W, $]);
    return (0, l.jsxs)("div", {
        ref: em,
        className: a()(C.iE, N, {
            [C.rc]: t && e_,
            [C.d$]: L,
        }),
        onMouseDown: eC,
        onMouseMove: eS,
        onMouseUp: ex,
        onMouseLeave: eI,
        onWheel: eT,
        children: [
            (0, l.jsx)(d.DUT, {
                onClick: ej,
                children:
                    null != A &&
                    (0, l.jsx)("div", {
                        className: a()(C.j, C.L2),
                        style: eH,
                        children: (0, l.jsx)(
                            y.A,
                            x(S({}, m), {
                                onResize: ey,
                                wrapperClassName: void 0,
                            }),
                        ),
                    }),
            }),
            t &&
                null != A &&
                (0, l.jsx)(o.animated.div, {
                    className: a()(C.Vp, {
                        [C.N7]: f,
                    }),
                    style: {
                        bottom: eb.value,
                    },
                    children: (0, l.jsxs)("div", {
                        className: a()(C.mu, {
                            [C.He]: ec || e_,
                        }),
                        onMouseEnter: eR,
                        onMouseLeave: eD,
                        onClick: eM,
                        children: [
                            (ec || e_) &&
                                (0, l.jsx)(d.DUT, {
                                    onClick: eF,
                                    onMouseEnter: eR,
                                    onMouseLeave: eD,
                                    children: (0, l.jsxs)("div", {
                                        ref: eg,
                                        className: C.Wc,
                                        style: eB,
                                        onMouseDown: eL,
                                        onMouseMove: eU,
                                        onMouseUp: eG,
                                        children: [
                                            (0, l.jsx)(P, {
                                                className: a()(C.BZ, {
                                                    [O.mirror]: w,
                                                }),
                                                streamId: A,
                                                paused: R,
                                                reportContainerResized: !1,
                                            }),
                                            (0, l.jsx)("div", {
                                                className: C.xq,
                                                style: eV,
                                            }),
                                        ],
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                className: C.GK,
                                children: [
                                    (ec || e_) &&
                                        (0, l.jsxs)(l.Fragment, {
                                            children: [
                                                (0, l.jsx)(u.m_, {
                                                    text: E.intl.string(E.t.M6Cmwy),
                                                    position: "top",
                                                    children: (0, l.jsx)(d.K0, {
                                                        icon: d.V0_,
                                                        onClick: eP,
                                                        disabled: $ <= n,
                                                        variant: "overlay-secondary",
                                                        size: "sm",
                                                        "aria-label": E.intl.string(E.t.M6Cmwy),
                                                    }),
                                                }),
                                                (0, l.jsx)(d.Apm, {
                                                    minValue: n,
                                                    maxValue: i,
                                                    initialValue: $,
                                                    value: $,
                                                    asValueChanges: ew,
                                                    onValueRender: (e) => "".concat(Math.round(100 * e), "%"),
                                                    "aria-label": E.intl.string(E.t.grzPmr),
                                                }),
                                            ],
                                        }),
                                    (0, l.jsx)(u.m_, {
                                        text: E.intl.string(E.t["9hMafy"]),
                                        position: "top",
                                        children: (0, l.jsx)(d.K0, {
                                            icon: d.r1u,
                                            onClick: eN,
                                            disabled: $ >= i,
                                            variant: "overlay-secondary",
                                            size: "sm",
                                            "aria-label": E.intl.string(E.t["9hMafy"]),
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
