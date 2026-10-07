(n.r(t), n.d(t, { waitForCSSLoad: () => te, default: () => ti }));
var r = n(477900),
    i = n(582128),
    s = n(17928),
    l = n(684013),
    o = n(964486),
    a = n(573435),
    c = n(626584),
    u = n(567249),
    d = n(979186),
    h = n(38502),
    f = n(309010),
    g = n(531685),
    p = n(723702),
    m = n(19575),
    A = n(9302),
    y = n(365971),
    v = n(777334),
    x = n(41984),
    w = n(973196),
    E = n(870373);
n(321073);
var C = n(503698),
    b = n.n(C),
    N = n(192308),
    O = n(939249),
    _ = n(138134),
    D = n(972213),
    I = n(328162),
    T = n(231723),
    j = n(384018),
    S = n(442433),
    k = n(793574),
    L = n(688810),
    M = n(607470),
    P = n(880144),
    R = n(616356),
    U = n(734057),
    K = n(71393),
    G = n(192820),
    B = n(532624),
    F = n(532294),
    V = n(625494),
    W = n(350535),
    H = n(589051),
    Y = n(223251),
    z = n(834730),
    J = n(257581);
function X(e) {
    let { onClick: t, keybind: n, className: i, IconComponent: s, "data-testid": l } = e;
    return (0, r.jsxs)("div", {
        className: b()(J.UD, i),
        "data-testid": l,
        children: [
            (0, r.jsx)(O.D, {
                className: J.x6,
                onClick: t,
                "aria-hidden": !0,
                children: (0, r.jsx)(s, { size: "md", color: "currentColor", "aria-hidden": !0 }),
            }),
            null != n
                ? (0, r.jsx)(z.E, {
                      className: J.P,
                      "aria-hidden": !0,
                      variant: "text-xxs/bold",
                      color: "interactive-text-default",
                      children: n,
                  })
                : null,
        ],
    });
}
var $ = n(554146),
    Z = n(297264),
    q = n(352255),
    Q = n(782603),
    ee = n(428689),
    et = n(7807),
    en = n(131607),
    er = n(49999),
    ei = n(660183),
    es = n(831931);
function el(e) {
    let { locked: t } = e,
        [n, s] = (0, en.kn)(t ? [] : [$.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX], void 0, !0);
    return (i.useEffect(() => {
        if (!t && n === $.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
            return () => {
                n === $.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX && s(er.i.AUTO_DISMISS);
            };
    }, [t, s, n]),
    t || n !== $.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
        ? null
        : (0, r.jsx)("div", {
              className: es.A,
              children: (0, r.jsxs)("div", {
                  className: es.rs,
                  children: [
                      (0, r.jsxs)("div", {
                          className: es.vJ,
                          children: [
                              (0, r.jsx)(Z.D, {
                                  variant: "heading-xl/medium",
                                  color: "text-strong",
                                  children: ei.intl.string(ei.t.jzjJQg),
                              }),
                              (0, r.jsx)(z.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: ei.intl.string(ei.t["5dOfxb"]),
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: es.S1,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: es.bS,
                                  children: [
                                      (0, r.jsx)(q.X, {}),
                                      (0, r.jsx)(z.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: ei.intl.string(ei.t.S6VRyK),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: es.bS,
                                  children: [
                                      (0, r.jsx)(Q.BellIcon, {}),
                                      (0, r.jsx)(z.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: ei.intl.string(ei.t.xq8CKY),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: es.bS,
                                  children: [
                                      (0, r.jsx)(ee.VideoIcon, {}),
                                      (0, r.jsx)(z.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: ei.intl.string(ei.t.GwpRe0),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: es.bS,
                                  children: [
                                      (0, r.jsx)(et.J, {}),
                                      (0, r.jsx)(z.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: ei.intl.string(ei.t.VUoC5F),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var eo = n(232554),
    ea = n(351906),
    ec = n(243612),
    eu = n(391973),
    ed = n(5463),
    eh = n(129537),
    ef = n(127242),
    eg = n(968898),
    ep = n(481484),
    em = n(545807),
    eA = n(652215),
    ey = n(645280);
let ev = [],
    ex = i.memo(function (e) {
        let {
                widget: t,
                renderWidget: n,
                renderTitle: l,
                renderButtons: a,
                resizeValidation: c,
                containerRenderGate: u,
                className: d,
                dragContainerClassName: f,
            } = e,
            p = (0, s.bG)([h.A], () => h.A.getWidgetConfig(t.type), [t.type]),
            m = (0, eg.RE)(t.id, eg.X1),
            A = (0, ep.A)(),
            [v, w] = i.useState(() => u?.stores ?? ev);
        (0, o.Ay)(() => {
            w(u?.stores ?? ev);
        });
        let C = (0, s.bG)(v, () => u?.shouldRender({ widget: t, locked: A }) ?? !0, [u, A, t]),
            N = (0, em.A)(),
            O = (0, s.bG)([g.A], () => g.A.windowSize((0, y.Q2)(N))),
            _ = i.useCallback((e, t, n, r, i) => {
                let s = g.A.windowSize((0, y.Q2)((0, em.b)())),
                    l = (0, ed.NO)(n, s),
                    o = (0, ed.R9)(r, s);
                ((0, eu.uD)(t), (0, eu.Ju)({ widgetId: t, anchor: l, size: o }));
                let a = e === eh.P.MOVE,
                    c = (0, ed.Ly)(n, s.width, s.height, i.width, i.height);
                (0, E.g)(eA.HAw.OVERLAY_LAYOUT_UPDATED, {
                    was_resized: !a,
                    was_dragged: a,
                    widget_type: h.A.getWidgetType(t),
                    window_width: s.width,
                    window_height: s.height,
                    widget_width: i.width,
                    widget_height: i.height,
                    widget_left: c.left,
                    widget_top: c.top,
                });
            }, []),
            D = i.useCallback((e) => {
                (0, eu.uD)(e);
            }, []),
            { id: I, pinned: T, zIndex: j, size: S, anchor: k, minSize: L } = t,
            M = i.useMemo(() => (0, ed.fd)(S, O), [S, O]),
            P = (0, ed.Nv)(k, O),
            { resizeX: R, resizeY: U, dragAnywhere: K, constrainAutoSizeToExplicitResizeEvents: G } = p ?? {},
            B = !A,
            F = T || !A,
            V = i.useMemo(() => ({ minX: 0, minY: 0, maxX: O.width, maxY: O.height }), [O]),
            W = i.useCallback(
                (e) => n({ ...e, widget: t, dragging: null != e.dragOperation, className: d }),
                [t, n, d],
            ),
            H = i.useCallback(
                (e) =>
                    null != l || null != a
                        ? (0, r.jsxs)("div", { className: b()(ey.vJ, m && ey.vw), children: [l?.(t), a?.(t, e)] })
                        : null,
                [t, l, m, a],
            ),
            Y = (0, s.bG)([ef.A], () => ef.A.hasRenderDebugMode(x.x7.WidgetAreas)),
            z = i.useMemo(() => {
                if (null != c) return (e) => c({ ...e, widget: t });
            }, [c, t]);
        return C
            ? (0, r.jsx)(eh.A, {
                  className: b()({ [ey.Yz]: Y, [ey.xu]: Y && !T, [ey.E]: Y && T }, f),
                  id: I,
                  size: M,
                  anchor: P,
                  container: V,
                  minSize: L ?? { width: 0, height: 0 },
                  hidden: !F,
                  locked: A,
                  resizeX: R ?? !1,
                  resizeY: U ?? !1,
                  style: { zIndex: j },
                  dragAnywhere: K ?? !1,
                  constrainAutoSizeToExplicitResizeEvents: G ?? !1,
                  active: B,
                  onUpdate: _,
                  onClick: D,
                  targetWindow: N,
                  forceShowExtras: m,
                  renderExtras: H,
                  resizeValidation: z,
                  children: W,
              })
            : null;
    });
var ew = n(588857),
    eE = n(644434);
function eC(e) {
    return e.widget.id;
}
function eb(e, t, n, i) {
    return n === eo.wL.YEETED ? null : (0, r.jsx)(ex, { ...t, transitionState: n, cleanUp: i }, e);
}
let eN = [],
    eO = i.memo(function (e) {
        let { className: t } = e,
            n = (0, em.A)(),
            l = (0, s.bG)([g.A], () => g.A.windowSize((0, y.Q2)(n))),
            o = (0, s.bG)(
                [h.A, ea.A],
                () => {
                    let e = h.A.getLayout(eE.G);
                    if (null == e) return eN;
                    let t = [];
                    for (let n of e.widgets) {
                        let e = h.A.getWidget(n);
                        if (null == e) continue;
                        let r = ew.A[e.type];
                        null != r &&
                            (null == r.predicate || r.predicate()) &&
                            (ea.A.isOverlayWidgetDisabled(e.type) || t.push({ widget: e, ...r }));
                    }
                    return t;
                },
                [],
                ec.VC,
            ),
            a = i.useCallback((e) => (0, r.jsx)("div", { className: t, style: l, children: e }), [t, l]);
        return (0, r.jsx)(eo.F, { items: o, renderItem: eb, getItemKey: eC, wrapChildren: a });
    });
var e_ = n(233741),
    eD = n(222506);
let eI = new Set(["shift", "ctrl", "control", "alt", "meta", "os"]);
function eT(e) {
    let { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: s } = e;
    return { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: s };
}
function ej(e, t) {
    return (
        e.keyCode === t.keyCode &&
        e.shiftKey === t.shiftKey &&
        e.metaKey === t.metaKey &&
        e.altKey === t.altKey &&
        e.ctrlKey === t.ctrlKey
    );
}
var eS = n(302614),
    ek = n(296027),
    eL = n(592598),
    eM = n(237984),
    eP = n(394072),
    eR = n(528772),
    eU = n(944775),
    eK = n(317084),
    eG = n(427603),
    eB = n(980504),
    eF = n(355870);
let eV = i.memo(function () {
    let [e, t] = (0, s.yK)([eR.A], () => [eR.A.enabled, eR.A.keepOpen]),
        n = (0, s.bG)([f.Ay], () => f.Ay.getVoiceChannelId()),
        i = (0, s.bG)([U.A], () => U.A.getChannel(n), [n]),
        l = i?.getGuildId();
    return e && null != i
        ? (0, r.jsx)(eS.A, {
              className: eF.k,
              children: (0, r.jsx)(eK.A, {
                  width: eB.ed.width,
                  height: eB.ed.height,
                  guildId: l,
                  channel: i,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, eG.A)();
                      null != e && (0, eU.Lk)(e);
                  },
                  analyticsSource: "overlay",
              }),
          })
        : null;
});
var eW = n(672396),
    eH = n(558606);
let eY = !p.isPlatformEmbedded && !1,
    ez = eY
        ? (0, r.jsx)(M.A, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: eH.pN,
              autoPlay: !0,
              loop: !0,
              muted: !0,
          })
        : null;
function eJ(e) {
    e.preventDefault();
}
function eX(e) {
    (0, S.L3)(
        e,
        async () => {
            let { default: e } = await n.e("386437").then(n.bind(n, 171300));
            return (t) => (0, r.jsx)(e, { ...t, layoutId: eE.G, version: 4 });
        },
        { context: eA.BRT.OVERLAY },
    );
}
let e$ = i.memo(function (e) {
        let { keybind: t, onClick: n, locked: i } = e;
        return (0, r.jsx)(O.D, {
            "data-testid": "overlay-background",
            "data-locked": i,
            className: b()(eH.LK, { [eH.Zo]: !i, [eH.vZ]: i }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: r, button: i } = e;
                i === eA.hE4.PRIMARY && t === r && n();
            },
            onContextMenu: eX,
            children: i
                ? null
                : (0, r.jsxs)(eS.A, {
                      className: eH.BE,
                      children: [
                          (0, r.jsx)(X, {
                              "data-testid": "overlay-report-button",
                              onClick: () => (0, eM.b)(k.A.OVERLAY, eA.BRT.OVERLAY),
                              IconComponent: _.FlagIcon,
                          }),
                          (0, r.jsx)(X, {
                              "data-testid": "overlay-close-button",
                              keybind: t,
                              onClick: n,
                              IconComponent: D.XLargeIcon,
                          }),
                      ],
                  }),
        });
    }),
    eZ = i.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, r.jsx)(eS.A, {
                  className: eH.BE,
                  children: (0, r.jsx)(X, {
                      "data-testid": "overlay-unlock-button",
                      onClick: () => l.A.setInputLocked(!1, e_.A.getTargetPID()),
                      IconComponent: I.w,
                  }),
              })
            : null;
    });
function eq() {
    l.A.setInputLocked(!0, e_.A.getTargetPID());
}
function eQ(e) {
    let t = eD.A.isInputLocked(e_.A.getTargetPID());
    ("alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? V._.dispatch(eA.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && V._.dispatch(eA.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })),
        (function (e, t) {
            if (t || "keydown" !== e.type.toLowerCase()) return;
            let n = e.key.toLowerCase();
            ("escape" === n || "esc" === n) && l.A.setInputLocked(!0, e_.A.getTargetPID());
        })(e, t),
        (eY || (0, eP.SE)()) &&
            (function (e) {
                if ("keydown" !== e.type.toLowerCase() || e.repeat) return !1;
                let t = B.Ay.getOverlayKeybind();
                return (
                    !!t.enabled &&
                    0 !== t.shortcut.length &&
                    (0, W.pi)(t.shortcut).some(
                        (t) =>
                            0 !== t.keyCode &&
                            t.keyCode === e.keyCode &&
                            t.shiftKey === e.shiftKey &&
                            t.metaKey === e.metaKey &&
                            t.altKey === e.altKey &&
                            t.ctrlKey === e.ctrlKey,
                    )
                );
            })(e) &&
            (e.preventDefault(), e.stopPropagation(), l.A.setInputLocked(!t, e_.A.getTargetPID())));
}
let e0 = i.memo(function () {
        return (0, s.bG)([ef.A], () => ef.A.hasRenderDebugMode(x.x7.WindowContainer))
            ? (0, r.jsx)("div", { className: eH.N1 })
            : null;
    }),
    e1 = i.memo(function () {
        let e = (0, em.A)(),
            t = (0, s.bG)([e_.A], () => e_.A.getTargetPID()),
            n = (0, s.bG)([eD.A], () => eD.A.isInputLocked(t), [t]),
            l = (0, s.bG)([e_.A], () => e_.A.isFocused(t), [t]),
            o = (0, s.bG)(
                [B.Ay],
                () => (null != B.Ay.getOverlayKeybind() ? (0, W.dI)(B.Ay.getOverlayKeybind()?.shortcut, !0) : "???"),
                [],
            );
        return (
            i.useEffect(() => {
                if ((V._.dispatch(eA.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), n))
                    return (
                        (0, N.closeAllModalsInContext)(T.KX),
                        e.addEventListener("contextmenu", eJ, !1),
                        () => {
                            e.removeEventListener("contextmenu", eJ, !1);
                        }
                    );
                e.removeEventListener("contextmenu", eJ, !1);
            }, [n, e]),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(e$, { locked: n, keybind: o, onClick: eq }),
                    (0, r.jsx)(eO, { className: b()({ [eH.ZK]: n, [eH.al]: !n }) }),
                    (eY || (0, eP.SE)()) && (0, r.jsx)(eZ, { locked: n, focused: l }),
                    (0, r.jsx)(el, { locked: n }),
                ],
            })
        );
    });
function e2() {
    var e, t;
    let n,
        a,
        c,
        u,
        d,
        h,
        p,
        m,
        A,
        v,
        x,
        w,
        E = (0, em.A)(),
        C = (0, s.bG)([F.default], () => F.default.incompatibleApp),
        b = (0, s.bG)(
            [g.A],
            () => {
                let e = (0, y.Q2)(E),
                    t = g.A.windowSize(e);
                return t.height < 360 || t.width < 640;
            },
            [E],
        ),
        { analyticsLocations: N } = (0, L.Ay)(k.A.OVERLAY);
    return (
        (n = (0, em.A)()),
        (a = (0, s.bG)([e_.A], () => e_.A.getTargetPID(), [])),
        (c = (0, s.bG)(
            [B.Ay],
            () => {
                let e = B.Ay.getOverlayKeybind();
                return null != e ? e.shortcut : [];
            },
            [],
        )),
        (u = (0, s.bG)([eD.A], () => eD.A.isInputLocked(a), [a])),
        (d = (0, s.bG)(
            [g.A],
            () => {
                let e = (0, y.Q2)(n);
                return g.A.isVisible(e) && g.A.isFocused(e);
            },
            [n],
        )),
        (h = i.useRef([])),
        (p = i.useMemo(() => (0, W.pi)(c).map((e) => eT(e)), [c])),
        (m = i.useMemo(() => c.length > 0, [c])),
        (A = !u && m && d),
        i.useEffect(() => {
            h.current = [];
        }, [u, p]),
        i.useEffect(() => {
            if (!A) {
                h.current = [];
                return;
            }
            function e(e) {
                let t = eT(e),
                    n = h.current,
                    r = n.some((e) => ej(e, t)),
                    i = (function (e) {
                        let t = e.key.toLowerCase();
                        for (let e of eI) if (t.includes(e)) return !0;
                        return !1;
                    })(e);
                (r || i || n.push(t),
                    0 !== p.length &&
                        n.length === p.length &&
                        p.every((e) => n.some((t) => ej(e, t))) &&
                        (e.preventDefault(), e.stopPropagation()));
            }
            function t(e) {
                let t = eT(e),
                    n = h.current,
                    r = n.findIndex((e) => ej(e, t));
                r > -1 && n.splice(r, 1);
            }
            return (
                n.addEventListener("keydown", e, !0),
                n.addEventListener("keyup", t, !0),
                () => {
                    (n.removeEventListener("keydown", e, !0), n.removeEventListener("keyup", t, !0));
                }
            );
        }, [A, p, n]),
        (0, o.Ay)(() => {
            (0, H.E)();
        }),
        (v = (0, em.A)()),
        (e = () => {
            (l.A.overlayReady(e_.A.getTargetPID()),
                v.addEventListener("keydown", eQ, !0),
                v.addEventListener("keyup", eQ));
        }),
        (t = () => {
            (v.removeEventListener("keydown", eQ, !0), v.removeEventListener("keyup", eQ));
        }),
        (x = i.useRef({ mount: e, unmount: t })),
        i.useEffect(() => {
            x.current = { mount: e, unmount: t };
        }),
        i.useEffect(
            () => (
                x.current.mount(),
                () => {
                    x.current.unmount();
                }
            ),
            [],
        ),
        ((w = i.useRef(null)),
        (0, o.Ay)(() => {
            let e = (0, ec.qv)(),
                t = f.Ay.getVoiceChannelId(),
                n = U.A.getChannel(t),
                r = null != n ? K.A.getGuild(n.guild_id) : null,
                i = null != R.A.getCurrentUserActiveStream(),
                s = null != t,
                o = (0, P.A)(G.Ay) && !i && null != e,
                a = s && null != r && null != t,
                c = e_.A.getTargetPID();
            if (ek.default.hasChangedRenderMode(c)) return;
            let u = eL.A.isNotificationDisabled(eW.KS.WelcomeNudge),
                d = eL.A.isNotificationDisabled(eW.KS.GoLiveNudge),
                h = eL.A.isNotificationDisabled(eW.KS.ActivityInvite),
                g = [];
            (!u &&
                (g.push({ type: eW.Jr.WELCOME }),
                !d &&
                    (o && a
                        ? g.push({ type: eW.Jr.GO_LIVE_VOICE, game: e, voiceChannelId: t, voiceGuild: r })
                        : o && g.push({ type: eW.Jr.GO_LIVE_NON_VOICE, game: e })),
                h || g.push({ type: eW.Jr.CONTENT_INVENTORY, entries: [] })),
                null != w.current && clearTimeout(w.current),
                (w.current = setTimeout(() => {
                    l.A.overlayMounted(...g);
                }, 1e3)));
        }),
        (0, o.l0)(() => {
            null != w.current && (clearTimeout(w.current), (w.current = null));
        }),
        b || C)
            ? null
            : (0, r.jsx)(L.f5, {
                  value: N,
                  children: (0, r.jsxs)("div", {
                      id: "overlay-container",
                      className: eH.Lw,
                      children: [
                          ez,
                          (0, r.jsx)(e1, {}),
                          (0, r.jsx)(eV, {}),
                          (0, r.jsx)(Y.A, {}),
                          (0, r.jsx)(j.N, { appContext: eA.BRT.OVERLAY }),
                          (0, r.jsx)(e0, {}),
                      ],
                  }),
              })
    );
}
var e3 = n(661886),
    e8 = n(682763),
    e4 = n(73153);
function e5(e, t) {
    e3.A.getPopoutInitializationStages()[e] !== t &&
        e4.h.dispatch({ type: "OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED", update: { [e]: t } });
}
n(96175);
var e7 = n(366032);
(n(191701), n(921955));
let e6 = !p.isPlatformEmbedded && !1,
    e9 = new c.A("AppOverlay");
function te(e, t) {
    return new Promise((n, r) => {
        let i = Date.now();
        t.current = setInterval(() => {
            if (
                (function () {
                    let t = Array.from(e.document.querySelectorAll('link[rel="stylesheet"]')),
                        n = e.document.styleSheets,
                        r = new Map();
                    for (let e of n) null != e.href && r.set(e.href, e);
                    for (let e of t) {
                        if (null == e.href) continue;
                        let t = r.get(e.href);
                        if (null == t) return !1;
                        try {
                            if (0 === t.cssRules.length) return !1;
                        } catch (e) {}
                    }
                    return !0;
                })()
            ) {
                (n(), clearInterval(t.current));
                return;
            }
            Date.now() - i > 12e4 && (r(Error("Timed out waiting for CSS to load")), clearInterval(t.current));
        }, 200);
    });
}
async function tt(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (p.isPlatformEmbedded) {
        try {
            await m.Ay.isAlwaysOnTop(t);
        } catch (e) {
            (e9.error("Window does not exist while trying to show inactive", e), (0, v.pj)(e, x.Ue.OutOfProcess));
        }
        for (let i = 0; i < r; i++)
            try {
                if (!(await m.Ay.waitForIPCReady(n, e))) throw Error("IPC not ready");
                m.Ay.showInactive(t);
                return;
            } catch (e) {
                if (e.message?.includes("IPC") && i < r - 1) {
                    let t = (n / 2) * Math.pow(2, i + 1);
                    (e9.error(`Failed to show inactive, retrying in ${t}ms`, e),
                        await new Promise((e) => setTimeout(e, t)));
                } else throw ((0, v.pj)(e, x.Ue.OutOfProcess), e);
            }
    }
}
function tn() {
    l.A.setFocusedPID(A.DEV_PID, null);
}
function tr() {
    l.A.setFocusedPID(null, null);
}
let ti = i.memo(function (e) {
    let t,
        { withTitleBar: n, windowKey: c } = e;
    ((t = (0, s.bG)([u.A], () => u.A.getWindow(c))),
        (0, o.Ay)(() => {
            if (null == t) return;
            let e = e6 || (0, eP.SE)();
            return (
                e &&
                    (t.document.hasFocus() && l.A.setFocusedPID(A.DEV_PID, null),
                    t.addEventListener("focus", tn),
                    t.addEventListener("blur", tr)),
                () => {
                    e && (t.removeEventListener("focus", tn), t.removeEventListener("blur", tr));
                }
            );
        }));
    let m = (function (e, t) {
            let n,
                r,
                a = (0, s.bG)(
                    [e3.A],
                    () => !!(!p.isPlatformEmbedded || (0, eP.SE)()) || e3.A.isWindowHandleInitialized(),
                ),
                c = (0, s.bG)([u.A], () => u.A.getWindow(e)),
                d = (0, s.bG)([e_.A], () => e_.A.getFocusedPID()),
                m = i.useMemo(() => !!(!p.isPlatformEmbedded || (0, eP.SE)()) || (null != d && -1 !== d), [d]),
                [A, v] = i.useState(!1),
                w = i.useRef(!1),
                C = i.useCallback(() => {
                    let e = e_.A.getTargetPID(),
                        n = null != f.Ay.getVoiceChannelId();
                    ((0, E.g)(eA.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: e_.A.isPinned(eA.uss.TEXT),
                        overlay_render_method: x.Ue[ek.default.getOverlayMethod(e)],
                        unpinned_widget_types: h.A.getAllUnpinnedPinnedWidgets(t),
                    }),
                        (0, e8.Fd)());
                }, [t]),
                b = i.useRef(!1),
                N = i.useRef(null),
                O = i.useCallback(
                    async (e, t) => {
                        try {
                            if ((await te(e, N), b.current)) return;
                            e5("cssLoaded", !0);
                        } catch (e) {
                            (e9.error("Timed out waiting for CSS to load", e),
                                l.A.setOverlayCrashed(e_.A.getTargetPID(), e),
                                e5("errorMessage", "CSS failed load"));
                            return;
                        }
                        try {
                            if ((await tt(e, t), b.current)) return;
                            (0, e8.Mq)();
                        } catch (e) {
                            (l.A.setOverlayCrashed(e_.A.getTargetPID(), e), e5("errorMessage", "showInactive failed"));
                            return;
                        }
                        (await new Promise((t) => {
                            e.setTimeout(() => t(), 100);
                        }),
                            b.current || (v(!0), C()));
                    },
                    [C],
                ),
                _ = i.useRef(!1);
            return (
                i.useEffect(() => {
                    if (!w.current && (e5("hasUseEffectFired", !0), e5("trackedPidFocused", m), a)) {
                        if (null == c) return void e5("errorMessage", "No targetOverlayWindow");
                        if (!m) {
                            _.current ||
                                (l.A.updateOverlayState(
                                    e_.A.getTargetPID(),
                                    x.AR.WAITING_FOR_PID_FOCUS,
                                    "AppOverlay - not focused",
                                ),
                                (_.current = !0));
                            return;
                        }
                        ((w.current = !0), e5("reactInitializationStarted", !0), O(c, e));
                    }
                }, [O, m, e, c, a]),
                (0, o.l0)(() => {
                    (clearInterval(N.current), (b.current = !0));
                }),
                (n = (0, s.bG)([g.A], () => g.A.windowSize(null != c ? (0, y.Q2)(c) : void 0))),
                (r = (0, s.bG)([e_.A], () => e_.A.getFocusedWindowHandle())),
                i.useEffect(() => {
                    let e, t;
                    if (null != c && A && c.innerHeight === n.height && c.innerWidth === n.width)
                        return (
                            (e = c.requestAnimationFrame(() => {
                                e = c.requestAnimationFrame(() => {
                                    (c.clearTimeout(t), l.A.overlayUIFocusedPid(d ?? -1, r));
                                });
                            })),
                            (t = c.setTimeout(() => {
                                (c.cancelAnimationFrame(e), l.A.overlayUIFocusedPid(d ?? -1, r));
                            }, 500)),
                            () => {
                                (c.cancelAnimationFrame(e), c.clearTimeout(t));
                            }
                        );
                }, [A, c, d, r, n]),
                A
            );
        })(c, eE.G),
        v = (0, s.bG)([e_.A], () => e_.A.getFocusedPID()),
        C = (0, s.bG)([eD.A], () => eD.A.isInputLocked(v), [v]),
        b = (0, s.bG)([ek.default, e_.A], () =>
            (0, e7.S)(e_.A.getNativeLimitedInteraction(), ek.default.getOverlayMethod(e_.A.getTargetPID())),
        );
    return m
        ? (0, r.jsx)(w.p, {
              disabled: b,
              children: (0, r.jsxs)(d.A, {
                  themeOverride: eA.NJ8.ONYX,
                  appContext: eA.BRT.OVERLAY,
                  withTitleBar: n,
                  windowKey: c,
                  title: "Discord Overlay",
                  hideModals: C,
                  children: [(0, r.jsx)(e2, {}), (0, r.jsx)(a.Al, {})],
              }),
          })
        : null;
});
