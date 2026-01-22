n.d(t, { A: () => I }), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(735438),
    o = n(432022),
    c = n(451988),
    u = n(435371),
    d = n(397927),
    f = n(765671),
    p = n(964486),
    b = n(652896),
    g = n(834757),
    m = n(461782),
    h = n(290863),
    A = n(954571),
    y = n(426179),
    _ = n(401901),
    E = n(652215),
    v = n(985018),
    O = n(463689),
    x = n(139208);
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
function N(e, t) {
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
let C = {
        x: 0,
        y: 0,
    },
    j = (0, s.debounce)((e, t, n) => {
        let l = null,
            r = null;
        if (null != n && (0, b.wL)(n)) {
            var i, a;
            let e = (0, b.Iy)(n),
                t = (0, g.Ee)(e, h.A);
            (l = null != (i = null == t ? void 0 : t.name) ? i : null),
                (r = null != (a = null == t ? void 0 : t.id) ? a : null);
        }
        A.default.track(E.HAw.VIDEO_STREAM_ZOOM_CHANGED, {
            zoom_level: e,
            method: t,
            share_application_name: l,
            share_application_id: r,
        });
    }, 2000);
function T(e, t, n) {
    return Math.min(Math.max(t, e), n);
}
let I = r.memo(function (e) {
    let { enableZoom: t = !1, minZoom: n = 1, maxZoom: i = 5, controlsBottom: s = 8, idle: b = !1 } = e,
        g = (function (e, t) {
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
        { streamId: h, streamKey: A, onResize: E, wrapperClassName: I, videoComponent: w, mirror: R, paused: P } = g,
        { onActive: D, onPreventIdle: k, onAllowIdle: L } = r.useContext(m.k3),
        [M, U] = r.useState(!1),
        [V, F] = r.useState(null),
        [G, H] = r.useState(null),
        [B, Y] = r.useState(0),
        [W, z] = r.useState(C),
        [K, X] = r.useState(null),
        [Z, J] = r.useState(null),
        [q, Q] = r.useState(!1),
        [$, ee] = r.useState(n),
        [et, en] = r.useState(!1),
        [el, er] = r.useState(!1),
        [ei, ea] = r.useState(16 / 9),
        [es, eo] = r.useState(!1),
        [ec, eu] = r.useState(!1),
        ed = r.useRef(new c.Ep()),
        ef = r.useRef(new c.Ep()),
        ep = r.useRef(new c.Ep()),
        eb = r.useRef(new c.Ep()),
        eg = r.useRef(null),
        em = r.useRef(null),
        eh = r.useRef(null),
        eA = (0, d.zhh)(
            {
                value: s,
                config: N(S({}, o.config.stiff), { clamp: !0 }),
            },
            "animate-always",
        ),
        ey = $ > n,
        e_ = r.useCallback(
            (e) => {
                e.width > 0 && e.height > 0 && ea(e.width / e.height), null == E || E(e);
            },
            [E],
        ),
        eE = r.useCallback((e) => {
            if (null == eg.current) return C;
            let t = eg.current.getBoundingClientRect();
            return {
                x: e.clientX - t.left - t.width / 2,
                y: e.clientY - t.top - t.height / 2,
            };
        }, []),
        ev = r.useCallback(
            (e, t) => {
                if (null == eg.current) return C;
                let n = null != t ? t : $,
                    l = eg.current.clientWidth,
                    r = eg.current.clientHeight,
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
                if (null == eg.current || null == t || r === $) return;
                eu(!0);
                let a = r / $;
                z((e) =>
                    ev(
                        {
                            x: (e.x - t.x) * a + t.x,
                            y: (e.y - t.y) * a + t.y,
                        },
                        r,
                    ),
                ),
                    ee(r),
                    j(r, l, A),
                    eb.current.start(2000, () => {
                        eu(!1);
                    });
            },
            [ev, i, n, A, $],
        ),
        ex = r.useCallback(
            (e) => {
                if (!ey) return;
                e.preventDefault(), e.stopPropagation();
                let t = eE(e);
                U(!0), H(t), F(t), Y(Date.now()), J(t), X(W);
            },
            [eE, ey, W],
        ),
        eS = r.useCallback(
            (e) => {
                if (((t || ey) && D(), !M || !ey || null == Z || null == K)) return;
                e.preventDefault(), e.stopPropagation();
                let n = eE(e),
                    l = n.x - Z.x,
                    r = n.y - Z.y;
                z(
                    ev({
                        x: K.x + l,
                        y: K.y + r,
                    }),
                ),
                    F(n);
            },
            [ev, Z, K, t, eE, M, ey, D],
        ),
        eN = r.useCallback((e) => {
            e.preventDefault(), e.stopPropagation(), U(!1), J(null), X(null);
        }, []),
        eC = r.useCallback(
            (e) => {
                if (ey && null != G && null != V) {
                    let { x: t, y: n } = G,
                        { x: l, y: r } = V;
                    (Math.sqrt((l - t) ** 2 + (r - n) ** 2) > 0.01 || Date.now() - B >= 500) &&
                        (e.preventDefault(), e.stopPropagation());
                }
            },
            [ey, G, B, V],
        ),
        ej = r.useCallback(() => {
            U(!1), J(null), X(null);
        }, []),
        eT = r.useCallback(
            (e) => {
                t &&
                    (en(!0),
                    eO($ - e.deltaY / 100, eE(e), "wheel"),
                    D(),
                    ed.current.start(100, () => {
                        en(!1);
                    }));
            },
            [t, eO, $, eE, D],
        ),
        eI = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), eO($ + 0.25, C, "button");
            },
            [eO, $],
        ),
        ew = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), eO($ - 0.25, C, "button");
            },
            [eO, $],
        ),
        eR = r.useCallback(
            (e) => {
                er(!0),
                    eO(e, C, "slider"),
                    D(),
                    ef.current.start(100, () => {
                        er(!1);
                    });
            },
            [eO, D],
        ),
        eP = r.useCallback(() => {
            k("interact");
        }, [k]),
        eD = r.useCallback(() => {
            Q(!1), L("interact");
        }, [L]),
        ek = r.useCallback((e) => {
            e.preventDefault(), e.stopPropagation();
        }, []),
        eL = r.useCallback(
            (e) => {
                if (null == em.current || null == eg.current) return;
                let t = em.current.getBoundingClientRect(),
                    n = eg.current.clientWidth,
                    l = eg.current.clientHeight,
                    r = e.x - t.left,
                    i = e.y - t.top;
                z(
                    ev({
                        x: (0.5 - r / t.width) * n * $,
                        y: (0.5 - i / t.height) * l * $,
                    }),
                );
            },
            [ev, $],
        ),
        eM = r.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    Q(!0),
                    eL({
                        x: e.clientX,
                        y: e.clientY,
                    });
            },
            [eL],
        ),
        eU = r.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    q &&
                        eL({
                            x: e.clientX,
                            y: e.clientY,
                        });
            },
            [q, eL],
        ),
        eV = r.useCallback((e) => {
            e.preventDefault(), e.stopPropagation(), Q(!1);
        }, []),
        eF = r.useCallback((e) => {
            e.preventDefault(), e.stopPropagation();
        }, []);
    (0, f.i4)(
        eg,
        r.useCallback(
            (e) => {
                let { width: t, height: n } = e;
                if (!ey || null == t || null == n) return;
                let l = eh.current;
                if (null == l) {
                    eh.current = {
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
                        return ev({
                            x: (0 !== l ? e.x / l : 0) * s,
                            y: (0 !== a ? e.y / a : 0) * o,
                        });
                    }),
                    (eh.current = {
                        width: t,
                        height: n,
                    }),
                    ep.current.start(100, () => {
                        eo(!1);
                    }));
            },
            [ev, ey, $],
        ),
        [ey, $],
    ),
        (0, p.l0)(() => {
            ed.current.stop(), ef.current.stop(), ep.current.stop(), eb.current.stop();
        }),
        r.useEffect(() => {
            null != h && (0, y.c)(h, void 0, t && ey ? $ : 1);
        }, [t, ey, h, $]);
    let eG = r.useMemo(() => {
            let e = ev(W);
            return {
                "--custom-zoom-scale": $,
                "--custom-pan-x": "".concat(e.x, "px"),
                "--custom-pan-y": "".concat(e.y, "px"),
                "--custom-zoom-transition": M || es || et || el ? "none" : "transform 0.15s ease-out",
            };
        }, [ev, M, es, et, el, W, $]),
        eH = r.useMemo(() => {
            let e = 120 * Math.min(ei, 32 / 9);
            return {
                "--custom-zoom-minimap-width": "".concat(e, "px"),
                "--custom-zoom-minimap-height": "".concat(120, "px"),
            };
        }, [ei]),
        eB = r.useMemo(() => {
            let e = null != eg.current ? eg.current.clientWidth : 1,
                t = null != eg.current ? eg.current.clientHeight : 1,
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
                    M || q || et || el
                        ? "none"
                        : "top 0.1s ease-out, left 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out",
            };
        }, [M, q, et, el, W, $]);
    return (0, l.jsxs)("div", {
        ref: eg,
        className: a()(x.iE, I, {
            [x.rc]: t && ey,
            [x.d$]: M,
        }),
        onMouseDown: ex,
        onMouseMove: eS,
        onMouseUp: eN,
        onMouseLeave: ej,
        onWheel: eT,
        children: [
            (0, l.jsx)(d.DUT, {
                onClick: eC,
                children:
                    null != h &&
                    (0, l.jsx)("div", {
                        className: a()(x.j, x.L2),
                        style: eG,
                        children: (0, l.jsx)(
                            _.A,
                            N(S({}, g), {
                                onResize: e_,
                                wrapperClassName: void 0,
                            }),
                        ),
                    }),
            }),
            t &&
                null != h &&
                (0, l.jsx)(o.animated.div, {
                    className: a()(x.Vp, { [x.N7]: b }),
                    style: { bottom: eA.value },
                    children: (0, l.jsxs)("div", {
                        className: a()(x.mu, { [x.He]: ec || ey }),
                        onMouseEnter: eP,
                        onMouseLeave: eD,
                        onClick: ek,
                        children: [
                            (ec || ey) &&
                                (0, l.jsx)(d.DUT, {
                                    onClick: eF,
                                    onMouseEnter: eP,
                                    onMouseLeave: eD,
                                    children: (0, l.jsxs)("div", {
                                        ref: em,
                                        className: x.Wc,
                                        style: eH,
                                        onMouseDown: eM,
                                        onMouseMove: eU,
                                        onMouseUp: eV,
                                        children: [
                                            (0, l.jsx)(w, {
                                                className: a()(x.BZ, { [O.mirror]: R }),
                                                streamId: h,
                                                paused: P,
                                                reportContainerResized: !1,
                                            }),
                                            (0, l.jsx)("div", {
                                                className: x.xq,
                                                style: eB,
                                            }),
                                        ],
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                className: x.GK,
                                children: [
                                    (ec || ey) &&
                                        (0, l.jsxs)(l.Fragment, {
                                            children: [
                                                (0, l.jsx)(u.m_, {
                                                    text: v.intl.string(v.t.M6Cmwy),
                                                    position: "top",
                                                    children: (0, l.jsx)(d.K0, {
                                                        icon: d.V0_,
                                                        onClick: ew,
                                                        disabled: $ <= n,
                                                        variant: "overlay-secondary",
                                                        size: "sm",
                                                        "aria-label": v.intl.string(v.t.M6Cmwy),
                                                    }),
                                                }),
                                                (0, l.jsx)(d.Apm, {
                                                    minValue: n,
                                                    maxValue: i,
                                                    initialValue: $,
                                                    value: $,
                                                    asValueChanges: eR,
                                                    onValueRender: (e) => "".concat(Math.round(100 * e), "%"),
                                                    "aria-label": v.intl.string(v.t.grzPmr),
                                                }),
                                            ],
                                        }),
                                    (0, l.jsx)(u.m_, {
                                        text: v.intl.string(v.t["9hMafy"]),
                                        position: "top",
                                        children: (0, l.jsx)(d.K0, {
                                            icon: d.r1u,
                                            onClick: eI,
                                            disabled: $ >= i,
                                            variant: "overlay-secondary",
                                            size: "sm",
                                            "aria-label": v.intl.string(v.t["9hMafy"]),
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
