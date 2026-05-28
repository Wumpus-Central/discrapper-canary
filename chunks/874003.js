"use strict";
n.d(t, { A: () => V });
var i = n(627968),
    r = n(64700),
    s = n(735438),
    a = n(404778),
    o = n(17928),
    l = n(459838),
    u = n(661531),
    c = n(990078),
    d = n(602853),
    _ = n(778712),
    h = n(834730),
    f = n(243721),
    p = n(742158),
    E = n(106236),
    m = n(821609),
    g = n(827343),
    A = n(717558),
    I = n(964486),
    T = n(85448),
    S = n(495544),
    y = n(734057),
    N = n(761853),
    v = n(763827),
    C = n(287809),
    R = n(977997),
    O = n(935208),
    b = n(829997),
    D = n(329139),
    L = n(375708),
    w = n(36482);
function M(e) {
    let { worldX: t, worldY: n, worldZ: i } = e;
    return { x: t, y: n, z: i };
}
function P(e, t) {
    let n = 7 / t,
        i = e / 2;
    return { zoom: n, pan: { offsetX: i * (1 - n), offsetY: i - i * (1 - t / 14) * n } };
}
function x(e) {
    let { mode: t, users: n, onUserDragged: s, distance: a, view: o, setView: l, canvasSize: c, setCanvasSize: _ } = e,
        h = r.useRef(null),
        f = r.useRef(null),
        [p, E] = r.useState(null),
        [m, g] = r.useState(!1),
        A = (0, d.r)(u.A.colors.BACKGROUND_BASE_LOW).hex(),
        T = (0, d.r)(u.A.colors.BACKGROUND_MOD_MUTED).hex(),
        S = (0, d.r)(u.A.colors.STATUS_POSITIVE).hex(),
        y = (0, d.r)(u.A.colors.TEXT_DEFAULT).hex(),
        N = L.intl.string(D.default.chrbRg);
    (0, I.u5)(() => {
        let e = h.current;
        if (null == e) return;
        let t = !0,
            n = new ResizeObserver((e) => {
                let n = Math.floor(e[0].contentRect.width);
                n <= 0 || (t && ((t = !1), l(P(n, a))), _(n));
            });
        return n.observe(e), () => n.disconnect();
    }),
        r.useEffect(() => {
            let e = h.current;
            if (null == e) return;
            let t = (t) => {
                t.preventDefault();
                let n = e.getBoundingClientRect(),
                    i = t.clientX - n.left,
                    r = t.clientY - n.top;
                l((e) => {
                    let { zoom: n, pan: s } = e,
                        a = Math.max(k, Math.min(U, n * Math.exp(-t.deltaY * G))),
                        o = a / n;
                    return { zoom: a, pan: { offsetX: i - (i - s.offsetX) * o, offsetY: r - (r - s.offsetY) * o } };
                });
            };
            return e.addEventListener("wheel", t, { passive: !1 }), () => e.removeEventListener("wheel", t);
        }, [l]),
        r.useEffect(() => {
            let e = f.current;
            if (null == e || 0 === c) return;
            let t = e.getContext("2d");
            if (null != t) {
                t.setTransform(1, 0, 0, 1, 0, 0),
                    t.clearRect(0, 0, c, c),
                    (t.fillStyle = A),
                    t.fillRect(0, 0, c, c),
                    t.setTransform(o.zoom, 0, 0, o.zoom, o.pan.offsetX, o.pan.offsetY),
                    (t.strokeStyle = T),
                    (t.lineWidth = 1 / o.zoom);
                for (let e = 0; e <= 10; e++) {
                    let n = (e * c) / 10;
                    t.beginPath(),
                        t.moveTo(n, 0),
                        t.lineTo(n, c),
                        t.stroke(),
                        t.beginPath(),
                        t.moveTo(0, n),
                        t.lineTo(c, n),
                        t.stroke();
                }
                (t.fillStyle = S),
                    t.beginPath(),
                    t.arc(c / 2, c / 2, 10 / o.zoom, 0, 2 * Math.PI),
                    t.fill(),
                    (t.fillStyle = y),
                    (t.font = `bold ${11 / o.zoom}px gg sans`),
                    (t.textAlign = "center"),
                    t.fillText(N, c / 2, c / 2 - 16 / o.zoom);
            }
        }, [c, o, A, T, S, y, N]);
    let v = r.useCallback(
            (e, n) => {
                "manual" === t && 0 === e.button && (e.stopPropagation(), E(n));
            },
            [t],
        ),
        C = r.useCallback((e) => {
            0 === e.button && g(!0);
        }, []),
        R = r.useCallback(
            (e) => {
                if (m)
                    return void l((t) => ({
                        zoom: t.zoom,
                        pan: { offsetX: t.pan.offsetX + e.movementX, offsetY: t.pan.offsetY + e.movementY },
                    }));
                if (null == p) return;
                let t = f.current;
                if (null == t || 0 === c) return;
                let n = t.getBoundingClientRect();
                s(p, {
                    canvasX: (e.clientX - n.left - o.pan.offsetX) / o.zoom,
                    canvasY: (e.clientY - n.top - o.pan.offsetY) / o.zoom,
                });
            },
            [m, p, c, o.pan.offsetX, o.pan.offsetY, o.zoom, l, s],
        ),
        b = r.useCallback(() => {
            E(null), g(!1);
        }, []),
        M = m ? "grabbing" : "default";
    return (0, i.jsxs)("div", {
        ref: h,
        className: w.BW,
        style: { cursor: M },
        onMouseDown: C,
        onMouseMove: R,
        onMouseUp: b,
        onMouseLeave: b,
        onContextMenu: (e) => e.preventDefault(),
        children: [
            (0, i.jsx)("canvas", { ref: f, width: c, height: c, className: w.Ji }),
            O.default.entries(n).map((e) => {
                let [n, r] = e;
                return (0, i.jsx)(
                    F,
                    {
                        userId: n,
                        position: {
                            canvasX: r.canvasX * o.zoom + o.pan.offsetX,
                            canvasY: r.canvasY * o.zoom + o.pan.offsetY,
                        },
                        draggable: "manual" === t,
                        onMouseDown: v,
                    },
                    n,
                );
            }),
        ],
    });
}
let k = 0.25,
    U = 4,
    G = 0.002;
function F(e) {
    let { userId: t, position: n, draggable: r, onMouseDown: s } = e,
        a = (0, o.bG)([C.default], () => C.default.getUser(t)),
        l = (0, A.A)({ userId: t });
    return null == a
        ? null
        : (0, i.jsx)(c.m, {
              text: a.username,
              children: (0, i.jsx)("div", {
                  className: w.my,
                  style: { left: n.canvasX - 12, top: n.canvasY - 12, cursor: r ? "grab" : "default" },
                  onMouseDown: (e) => s(e, t),
                  children: (0, i.jsx)(T.A, {
                      userId: t,
                      size: _._3.SIZE_24,
                      src: a.getAvatarURL(void 0, 24),
                      speaking: l,
                      ringing: !1,
                  }),
              }),
          });
}
function V() {
    let e = (0, o.bG)([N.Ay], () => N.Ay.getAudioMixerSettings()),
        t = l.x.DEFAULT,
        [n, u] = r.useState({ zoom: 1, pan: { offsetX: 0, offsetY: 0 } }),
        [c, d] = r.useState(0),
        _ = r.useCallback(
            (e) => {
                let { worldX: t, worldZ: n } = e,
                    i = c / 2;
                return { canvasX: i + (t / 7) * i, canvasY: i + (n / 7) * i };
            },
            [c],
        ),
        A = r.useCallback(
            (e) => {
                let { canvasX: t, canvasY: n } = e,
                    i = c / 2;
                return { worldX: ((t - i) / i) * 7, worldY: 0, worldZ: ((n - i) / i) * 7 };
            },
            [c],
        ),
        I = (0, o.bG)([v.A, y.A], () => {
            let e = v.A.getChannelId();
            return null != e ? y.A.getChannel(e) : null;
        }),
        T = S.default.getId(),
        C = I?.id,
        O = (0, o.yK)(
            [R.A],
            () =>
                null == C
                    ? []
                    : Object.values(R.A.getVoiceStatesForChannel(C)).filter((e) => {
                          let { userId: t } = e;
                          return t !== T;
                      }),
            [C, T],
        ),
        k = e.mode,
        U = r.useMemo(
            () => ({
                line: (t) => {
                    if (1 === O.length) return { worldX: 0, worldY: 0, worldZ: -e.distance };
                    let n = t / (O.length - 1);
                    return { worldX: -e.spread / 2 + e.spread * n, worldY: 0, worldZ: -e.distance };
                },
                arc: (t) => {
                    if (1 === O.length) return { worldX: 0, worldY: 0, worldZ: -e.distance };
                    let n = (e.arcAngle * Math.PI) / 180,
                        i = Math.PI / 2 + n / 2 - (t / (O.length - 1)) * n;
                    return { worldX: e.distance * Math.cos(i), worldY: 0, worldZ: -e.distance * Math.sin(i) };
                },
                grid: (t) => {
                    let n = e.gridColumns,
                        i = Math.floor(t / n);
                    return {
                        worldX: ((t % n) - (n - 1) / 2) * e.gridSpacing,
                        worldY: 0,
                        worldZ: -(e.distance + i * e.gridSpacing),
                    };
                },
            }),
            [e, O.length],
        ),
        [G, F] = r.useState(new Map()),
        V = r.useMemo(
            () =>
                0 === c
                    ? {}
                    : Object.fromEntries(
                          O.map((e, t) => {
                              let { userId: n } = e;
                              if ("manual" === k) {
                                  let e = G.get(n);
                                  return [n, e ?? { canvasX: c / 2, canvasY: c / 2 }];
                              }
                              return [n, _(U[k](t))];
                          }),
                      ),
            [c, G, k, O, U, _],
        );
    r.useEffect(() => {
        "manual" === k ||
            0 === c ||
            N.Ay.getMediaEngine().eachConnection((e) => {
                O.forEach((t, n) => {
                    let { userId: i } = t,
                        r = U[k](n);
                    e.setUserPosition(i, M(r));
                });
            });
    }, [e, c, k, O, U]);
    let B = r.useCallback(
            (e, t) => {
                if ((F((n) => new Map(n).set(e, t)), 0 === c)) return;
                let n = A(t);
                N.Ay.getMediaEngine().eachConnection((t) => {
                    t.setUserPosition(e, M(n));
                });
            },
            [c, A],
        ),
        H = r.useCallback(
            (n) => {
                g.A.setAudioMixerSettings({ ...e, ...n }, t);
            },
            [e, t],
        ),
        [j, Y] = r.useState(e.roomSize),
        W = r.useRef(null),
        K = r.useCallback(
            (e) => {
                Y(e),
                    null !== W.current && clearTimeout(W.current),
                    (W.current = window.setTimeout(() => {
                        H({ roomSize: e }), (W.current = null);
                    }, 500));
            },
            [H],
        ),
        $ = [
            { value: "line", label: L.intl.string(D.default.xwwX9a), ariaLabel: L.intl.string(D.default.Go69Wz) },
            { value: "arc", label: L.intl.string(D.default.k21Ys4), ariaLabel: L.intl.string(D.default["g8+1Gb"]) },
            { value: "grid", label: L.intl.string(D.default.nVAKlB), ariaLabel: L.intl.string(D.default.fxMbmH) },
            { value: "manual", label: L.intl.string(D.default.Wmv386), ariaLabel: L.intl.string(D.default.U9PON6) },
        ];
    return (0, i.jsxs)("div", {
        className: w.kL,
        children: [
            (0, i.jsxs)("div", {
                className: w.ne,
                children: [
                    (0, i.jsxs)("div", {
                        className: w.nM,
                        children: [
                            (0, i.jsx)(h.E, {
                                variant: "text-md/normal",
                                children: L.intl.string(D.default["p/J17q"]),
                            }),
                            (0, i.jsx)(f.d, {
                                checked: e.enabled,
                                onChange: (e) => H({ enabled: e }),
                                "aria-label": L.intl.string(D.default.gtmo6U),
                            }),
                        ],
                    }),
                    (0, i.jsx)(a.c, { className: w.yF }),
                    (0, i.jsx)(p.z, { className: w.Pf, children: L.intl.string(D.default.FCvOS0) }),
                    (0, i.jsx)(E.A, {
                        className: w.aw,
                        initialValue: e.spatialBlend,
                        value: e.spatialBlend,
                        minValue: 0,
                        maxValue: 1,
                        asValueChanges: (e) => H({ spatialBlend: e }),
                        onValueRender: (e) => `${Math.round(100 * e)}%`,
                        "aria-label": L.intl.string(D.default.FCvOS0),
                    }),
                    (0, i.jsx)(p.z, { className: w.Pf, children: L.intl.string(D.default["/GM1bA"]) }),
                    (0, i.jsx)(E.A, {
                        className: w.aw,
                        initialValue: j,
                        value: j,
                        minValue: 10,
                        maxValue: 150,
                        asValueChanges: K,
                        onValueRender: (e) => e.toFixed(0),
                        "aria-label": L.intl.string(D.default.l5XHLy),
                    }),
                    (0, i.jsx)(a.c, { className: w.yF }),
                    (0, i.jsx)(p.z, { className: w.Pf, children: L.intl.string(D.default.CMFya4) }),
                    (0, i.jsx)("div", {
                        className: w.XU,
                        role: "group",
                        "aria-label": L.intl.string(D.default.CMFya4),
                        children: $.map((t) => {
                            let { value: n, label: r, ariaLabel: s } = t;
                            return (0, i.jsx)(
                                "button",
                                {
                                    className: `${w._V} ${k === n ? w.cB : ""}`,
                                    "aria-label": s,
                                    "aria-pressed": k === n,
                                    onClick: () => {
                                        if ("manual" === n && "manual" !== k && c > 0) {
                                            let e = new Map();
                                            O.forEach((t, n) => {
                                                let { userId: i } = t;
                                                e.set(i, _(U[k](n)));
                                            }),
                                                F(e);
                                        }
                                        H({ mode: n }), c > 0 && u(P(c, e.distance));
                                    },
                                    children: r,
                                },
                                n,
                            );
                        }),
                    }),
                    "manual" !== k &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(p.z, { className: w.Pf, children: L.intl.string(D.default.i4BAoc) }),
                                (0, i.jsx)(E.A, {
                                    className: w.aw,
                                    initialValue: e.distance,
                                    value: e.distance,
                                    minValue: 1,
                                    maxValue: 10,
                                    asValueChanges: (e) => H({ distance: e }),
                                    onValueRender: (e) => e.toFixed(1),
                                    "aria-label": L.intl.string(D.default.i4BAoc),
                                }),
                            ],
                        }),
                    "line" === k &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(p.z, { className: w.Pf, children: L.intl.string(D.default["/ZoKQI"]) }),
                                (0, i.jsx)(E.A, {
                                    className: w.aw,
                                    initialValue: e.spread,
                                    value: e.spread,
                                    minValue: 0,
                                    maxValue: 10,
                                    asValueChanges: (e) => H({ spread: e }),
                                    onValueRender: (e) => e.toFixed(1),
                                    "aria-label": L.intl.string(D.default["/ZoKQI"]),
                                }),
                            ],
                        }),
                    "arc" === k &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(p.z, { className: w.Pf, children: L.intl.string(D.default.EOmtMO) }),
                                (0, i.jsx)(E.A, {
                                    className: w.aw,
                                    initialValue: e.arcAngle,
                                    value: e.arcAngle,
                                    minValue: 0,
                                    maxValue: 180,
                                    asValueChanges: (e) => H({ arcAngle: e }),
                                    onValueRender: (e) => `${e.toFixed(0)}\xb0`,
                                    "aria-label": L.intl.string(D.default.FbPuig),
                                }),
                            ],
                        }),
                    "grid" === k &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(p.z, { className: w.Pf, children: L.intl.string(D.default.Q5EMQe) }),
                                (0, i.jsx)(E.A, {
                                    className: w.aw,
                                    initialValue: e.gridColumns,
                                    value: e.gridColumns,
                                    minValue: 2,
                                    maxValue: 6,
                                    keyboardStep: 1,
                                    asValueChanges: (e) => H({ gridColumns: Math.round(e) }),
                                    onValueRender: (e) => e.toFixed(0),
                                    "aria-label": L.intl.string(D.default.Q5EMQe),
                                }),
                                (0, i.jsx)(p.z, { className: w.Pf, children: L.intl.string(D.default.lxrCwG) }),
                                (0, i.jsx)(E.A, {
                                    className: w.aw,
                                    initialValue: e.gridSpacing,
                                    value: e.gridSpacing,
                                    minValue: 0.5,
                                    maxValue: 3,
                                    asValueChanges: (e) => H({ gridSpacing: e }),
                                    onValueRender: (e) => e.toFixed(1),
                                    "aria-label": L.intl.string(D.default.LDP0hu),
                                }),
                            ],
                        }),
                    (0, i.jsx)(a.c, { className: w.yF }),
                    (0, i.jsx)(m.$, {
                        variant: "secondary",
                        size: "sm",
                        text: L.intl.string(D.default.HlbWSY),
                        onClick: () => {
                            let e = (0, s.omit)(b.b, ["enabled", "experimentOverride"]);
                            Y(e.roomSize), c > 0 && u(P(c, e.distance)), H(e);
                        },
                    }),
                ],
            }),
            (0, i.jsx)(x, {
                mode: k,
                users: V,
                onUserDragged: B,
                distance: e.distance,
                view: n,
                setView: u,
                canvasSize: c,
                setCanvasSize: d,
            }),
        ],
    });
}
