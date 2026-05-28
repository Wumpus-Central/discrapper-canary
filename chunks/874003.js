"use strict";
n.d(t, { A: () => F });
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
    y = n(761853),
    N = n(763827),
    v = n(287809),
    C = n(977997),
    R = n(935208),
    O = n(829997),
    b = n(329139),
    D = n(375708),
    L = n(36482);
function w(e) {
    let { worldX: t, worldY: n, worldZ: i } = e;
    return { x: t, y: n, z: i };
}
function M(e, t) {
    let n = 7 / t,
        i = e / 2;
    return { zoom: n, pan: { offsetX: i * (1 - n), offsetY: i - i * (1 - t / 14) * n } };
}
function P(e) {
    let {
            mode: t,
            users: n,
            guildId: s,
            onUserDragged: a,
            distance: o,
            view: l,
            setView: c,
            canvasSize: _,
            setCanvasSize: h,
        } = e,
        f = r.useRef(null),
        p = r.useRef(null),
        [E, m] = r.useState(null),
        [g, A] = r.useState(!1),
        T = (0, d.r)(u.A.colors.BACKGROUND_BASE_LOW).hex(),
        S = (0, d.r)(u.A.colors.BACKGROUND_MOD_MUTED).hex(),
        y = (0, d.r)(u.A.colors.STATUS_POSITIVE).hex(),
        N = (0, d.r)(u.A.colors.TEXT_DEFAULT).hex(),
        v = D.intl.string(b.default.chrbRg);
    (0, I.u5)(() => {
        let e = f.current;
        if (null == e) return;
        let t = !0,
            n = new ResizeObserver((e) => {
                let n = Math.floor(e[0].contentRect.width);
                n <= 0 || (t && ((t = !1), c(M(n, o))), h(n));
            });
        return n.observe(e), () => n.disconnect();
    }),
        r.useEffect(() => {
            let e = f.current;
            if (null == e) return;
            let t = (t) => {
                t.preventDefault();
                let n = e.getBoundingClientRect(),
                    i = t.clientX - n.left,
                    r = t.clientY - n.top;
                c((e) => {
                    let { zoom: n, pan: s } = e,
                        a = Math.max(x, Math.min(k, n * Math.exp(-t.deltaY * U))),
                        o = a / n;
                    return { zoom: a, pan: { offsetX: i - (i - s.offsetX) * o, offsetY: r - (r - s.offsetY) * o } };
                });
            };
            return e.addEventListener("wheel", t, { passive: !1 }), () => e.removeEventListener("wheel", t);
        }, [c]),
        r.useEffect(() => {
            let e = p.current;
            if (null == e || 0 === _) return;
            let t = e.getContext("2d");
            if (null != t) {
                t.setTransform(1, 0, 0, 1, 0, 0),
                    t.clearRect(0, 0, _, _),
                    (t.fillStyle = T),
                    t.fillRect(0, 0, _, _),
                    t.setTransform(l.zoom, 0, 0, l.zoom, l.pan.offsetX, l.pan.offsetY),
                    (t.strokeStyle = S),
                    (t.lineWidth = 1 / l.zoom);
                for (let e = 0; e <= 10; e++) {
                    let n = (e * _) / 10;
                    t.beginPath(),
                        t.moveTo(n, 0),
                        t.lineTo(n, _),
                        t.stroke(),
                        t.beginPath(),
                        t.moveTo(0, n),
                        t.lineTo(_, n),
                        t.stroke();
                }
                (t.fillStyle = y),
                    t.beginPath(),
                    t.arc(_ / 2, _ / 2, 10 / l.zoom, 0, 2 * Math.PI),
                    t.fill(),
                    (t.fillStyle = N),
                    (t.font = `bold ${11 / l.zoom}px gg sans`),
                    (t.textAlign = "center"),
                    t.fillText(v, _ / 2, _ / 2 - 16 / l.zoom);
            }
        }, [_, l, T, S, y, N, v]);
    let C = r.useCallback(
            (e, n) => {
                "manual" === t && 0 === e.button && (e.stopPropagation(), m(n));
            },
            [t],
        ),
        O = r.useCallback((e) => {
            0 === e.button && A(!0);
        }, []),
        w = r.useCallback(
            (e) => {
                if (g)
                    return void c((t) => ({
                        zoom: t.zoom,
                        pan: { offsetX: t.pan.offsetX + e.movementX, offsetY: t.pan.offsetY + e.movementY },
                    }));
                if (null == E) return;
                let t = p.current;
                if (null == t || 0 === _) return;
                let n = t.getBoundingClientRect();
                a(E, {
                    canvasX: (e.clientX - n.left - l.pan.offsetX) / l.zoom,
                    canvasY: (e.clientY - n.top - l.pan.offsetY) / l.zoom,
                });
            },
            [g, E, _, l.pan.offsetX, l.pan.offsetY, l.zoom, c, a],
        ),
        P = r.useCallback(() => {
            m(null), A(!1);
        }, []),
        F = g ? "grabbing" : "default";
    return (0, i.jsxs)("div", {
        ref: f,
        className: L.BW,
        style: { cursor: F },
        onMouseDown: O,
        onMouseMove: w,
        onMouseUp: P,
        onMouseLeave: P,
        onContextMenu: (e) => e.preventDefault(),
        children: [
            (0, i.jsx)("canvas", { ref: p, width: _, height: _, className: L.Ji }),
            R.default.entries(n).map((e) => {
                let [n, r] = e;
                return (0, i.jsx)(
                    G,
                    {
                        userId: n,
                        guildId: s,
                        position: {
                            canvasX: r.canvasX * l.zoom + l.pan.offsetX,
                            canvasY: r.canvasY * l.zoom + l.pan.offsetY,
                        },
                        draggable: "manual" === t,
                        handleMouseDown: C,
                    },
                    n,
                );
            }),
        ],
    });
}
let x = 0.25,
    k = 4,
    U = 0.002;
function G(e) {
    let { userId: t, guildId: n, position: s, draggable: a, handleMouseDown: l } = e,
        u = (0, o.bG)([v.default], () => v.default.getUser(t)),
        d = (0, A.A)({ userId: t }),
        [h, f] = r.useState(!1);
    return null == u
        ? null
        : (0, i.jsx)(c.m, {
              text: u.username,
              shouldShow: !h,
              hideOnClick: !1,
              children: (0, i.jsx)("div", {
                  className: L.my,
                  style: { left: s.canvasX - 12, top: s.canvasY - 12, cursor: a ? "grab" : "default" },
                  onMouseDown: (e) => {
                      f(!0), l(e, t);
                  },
                  onMouseUp: () => {
                      f(!1);
                  },
                  children: (0, i.jsx)(T.A, {
                      userId: t,
                      size: _._3.SIZE_24,
                      src: u.getAvatarURL(n, 24),
                      speaking: d,
                      ringing: !1,
                  }),
              }),
          });
}
function F() {
    let e = (0, o.bG)([y.Ay], () => y.Ay.getAudioMixerSettings()),
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
        { channelId: I, guildId: T } = (0, o.cf)([N.A], () => ({
            channelId: N.A.getChannelId(),
            guildId: N.A.getGuildId() ?? void 0,
        })),
        v = (0, o.bG)([S.default], () => S.default.getId()),
        R = (0, o.yK)(
            [C.A],
            () =>
                null == I
                    ? []
                    : Object.values(C.A.getVoiceStatesForChannel(I)).filter((e) => {
                          let { userId: t } = e;
                          return t !== v;
                      }),
            [I, v],
        ),
        x = e.mode,
        k = r.useMemo(
            () => ({
                line: (t) => {
                    if (1 === R.length) return { worldX: 0, worldY: 0, worldZ: -e.distance };
                    let n = t / (R.length - 1);
                    return { worldX: -e.spread / 2 + e.spread * n, worldY: 0, worldZ: -e.distance };
                },
                arc: (t) => {
                    if (1 === R.length) return { worldX: 0, worldY: 0, worldZ: -e.distance };
                    let n = (e.arcAngle * Math.PI) / 180,
                        i = Math.PI / 2 + n / 2 - (t / (R.length - 1)) * n;
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
            [e, R.length],
        ),
        [U, G] = r.useState(new Map()),
        F = r.useMemo(
            () =>
                0 === c
                    ? {}
                    : Object.fromEntries(
                          R.map((e, t) => {
                              let { userId: n } = e;
                              if ("manual" === x) {
                                  let e = U.get(n);
                                  return [n, e ?? { canvasX: c / 2, canvasY: c / 2 }];
                              }
                              return [n, _(k[x](t))];
                          }),
                      ),
            [c, U, x, R, k, _],
        );
    r.useEffect(() => {
        "manual" === x ||
            0 === c ||
            y.Ay.getMediaEngine().eachConnection((e) => {
                R.forEach((t, n) => {
                    let { userId: i } = t,
                        r = k[x](n);
                    e.setUserPosition(i, w(r));
                });
            });
    }, [e, c, x, R, k]);
    let V = r.useCallback(
            (e, t) => {
                G((n) => new Map(n).set(e, t)),
                    0 !== c &&
                        y.Ay.getMediaEngine().eachConnection((n) => {
                            n.setUserPosition(e, w(A(t)));
                        });
            },
            [c, A],
        ),
        B = r.useCallback(
            (n) => {
                g.A.setAudioMixerSettings({ ...e, ...n }, t);
            },
            [e, t],
        ),
        [H, j] = r.useState(e.roomSize),
        Y = r.useRef(null),
        W = r.useCallback(
            (e) => {
                j(e),
                    null !== Y.current && clearTimeout(Y.current),
                    (Y.current = window.setTimeout(() => {
                        B({ roomSize: e }), (Y.current = null);
                    }, 500));
            },
            [B],
        ),
        K = [
            { value: "line", label: D.intl.string(b.default.xwwX9a), ariaLabel: D.intl.string(b.default.Go69Wz) },
            { value: "arc", label: D.intl.string(b.default.k21Ys4), ariaLabel: D.intl.string(b.default["g8+1Gb"]) },
            { value: "grid", label: D.intl.string(b.default.nVAKlB), ariaLabel: D.intl.string(b.default.fxMbmH) },
            { value: "manual", label: D.intl.string(b.default.Wmv386), ariaLabel: D.intl.string(b.default.U9PON6) },
        ];
    return (0, i.jsxs)("div", {
        className: L.kL,
        children: [
            (0, i.jsxs)("div", {
                className: L.ne,
                children: [
                    (0, i.jsxs)("div", {
                        className: L.nM,
                        children: [
                            (0, i.jsx)(h.E, {
                                variant: "text-md/normal",
                                children: D.intl.string(b.default["p/J17q"]),
                            }),
                            (0, i.jsx)(f.d, {
                                checked: e.enabled,
                                onChange: (e) => B({ enabled: e }),
                                "aria-label": D.intl.string(b.default.gtmo6U),
                            }),
                        ],
                    }),
                    (0, i.jsx)(a.c, { className: L.yF }),
                    (0, i.jsx)(p.z, { className: L.Pf, children: D.intl.string(b.default.FCvOS0) }),
                    (0, i.jsx)(E.A, {
                        className: L.aw,
                        initialValue: e.spatialBlend,
                        value: e.spatialBlend,
                        minValue: 0,
                        maxValue: 1,
                        asValueChanges: (e) => B({ spatialBlend: e }),
                        onValueRender: (e) => `${Math.round(100 * e)}%`,
                        "aria-label": D.intl.string(b.default.FCvOS0),
                    }),
                    (0, i.jsx)(p.z, { className: L.Pf, children: D.intl.string(b.default["/GM1bA"]) }),
                    (0, i.jsx)(E.A, {
                        className: L.aw,
                        initialValue: H,
                        value: H,
                        minValue: 10,
                        maxValue: 150,
                        asValueChanges: W,
                        onValueRender: (e) => e.toFixed(0),
                        "aria-label": D.intl.string(b.default.l5XHLy),
                    }),
                    (0, i.jsx)(a.c, { className: L.yF }),
                    (0, i.jsx)(p.z, { className: L.Pf, children: D.intl.string(b.default.CMFya4) }),
                    (0, i.jsx)("div", {
                        className: L.XU,
                        role: "group",
                        "aria-label": D.intl.string(b.default.CMFya4),
                        children: K.map((t) => {
                            let { value: n, label: r, ariaLabel: s } = t;
                            return (0, i.jsx)(
                                "button",
                                {
                                    className: `${L._V} ${x === n ? L.cB : ""}`,
                                    "aria-label": s,
                                    "aria-pressed": x === n,
                                    onClick: () => {
                                        if ("manual" === n && "manual" !== x && c > 0) {
                                            let e = new Map();
                                            R.forEach((t, n) => {
                                                let { userId: i } = t;
                                                e.set(i, _(k[x](n)));
                                            }),
                                                G(e);
                                        }
                                        B({ mode: n }), c > 0 && u(M(c, e.distance));
                                    },
                                    children: r,
                                },
                                n,
                            );
                        }),
                    }),
                    "manual" !== x &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(p.z, { className: L.Pf, children: D.intl.string(b.default.i4BAoc) }),
                                (0, i.jsx)(E.A, {
                                    className: L.aw,
                                    initialValue: e.distance,
                                    value: e.distance,
                                    minValue: 1,
                                    maxValue: 10,
                                    asValueChanges: (e) => B({ distance: e }),
                                    onValueRender: (e) => e.toFixed(1),
                                    "aria-label": D.intl.string(b.default.i4BAoc),
                                }),
                            ],
                        }),
                    "line" === x &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(p.z, { className: L.Pf, children: D.intl.string(b.default["/ZoKQI"]) }),
                                (0, i.jsx)(E.A, {
                                    className: L.aw,
                                    initialValue: e.spread,
                                    value: e.spread,
                                    minValue: 0,
                                    maxValue: 10,
                                    asValueChanges: (e) => B({ spread: e }),
                                    onValueRender: (e) => e.toFixed(1),
                                    "aria-label": D.intl.string(b.default["/ZoKQI"]),
                                }),
                            ],
                        }),
                    "arc" === x &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(p.z, { className: L.Pf, children: D.intl.string(b.default.EOmtMO) }),
                                (0, i.jsx)(E.A, {
                                    className: L.aw,
                                    initialValue: e.arcAngle,
                                    value: e.arcAngle,
                                    minValue: 0,
                                    maxValue: 180,
                                    asValueChanges: (e) => B({ arcAngle: e }),
                                    onValueRender: (e) => `${e.toFixed(0)}\xb0`,
                                    "aria-label": D.intl.string(b.default.FbPuig),
                                }),
                            ],
                        }),
                    "grid" === x &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(p.z, { className: L.Pf, children: D.intl.string(b.default.Q5EMQe) }),
                                (0, i.jsx)(E.A, {
                                    className: L.aw,
                                    initialValue: e.gridColumns,
                                    value: e.gridColumns,
                                    minValue: 2,
                                    maxValue: 6,
                                    keyboardStep: 1,
                                    asValueChanges: (e) => B({ gridColumns: Math.round(e) }),
                                    onValueRender: (e) => e.toFixed(0),
                                    "aria-label": D.intl.string(b.default.Q5EMQe),
                                }),
                                (0, i.jsx)(p.z, { className: L.Pf, children: D.intl.string(b.default.lxrCwG) }),
                                (0, i.jsx)(E.A, {
                                    className: L.aw,
                                    initialValue: e.gridSpacing,
                                    value: e.gridSpacing,
                                    minValue: 0.5,
                                    maxValue: 3,
                                    asValueChanges: (e) => B({ gridSpacing: e }),
                                    onValueRender: (e) => e.toFixed(1),
                                    "aria-label": D.intl.string(b.default.LDP0hu),
                                }),
                            ],
                        }),
                    (0, i.jsx)(a.c, { className: L.yF }),
                    (0, i.jsx)(m.$, {
                        variant: "secondary",
                        size: "sm",
                        text: D.intl.string(b.default.HlbWSY),
                        onClick: () => {
                            let e = (0, s.omit)(O.b, ["enabled", "experimentOverride"]);
                            j(e.roomSize), c > 0 && u(M(c, e.distance)), B(e);
                        },
                    }),
                ],
            }),
            (0, i.jsx)(P, {
                mode: x,
                users: F,
                guildId: T,
                onUserDragged: V,
                distance: e.distance,
                view: n,
                setView: u,
                canvasSize: c,
                setCanvasSize: d,
            }),
        ],
    });
}
