n.r(t), n.d(t, { waitForCSSLoad: () => e6, default: () => tn });
var r = n(477900),
    i = n(582128),
    s = n(17928),
    o = n(684013),
    l = n(964486),
    a = n(573435),
    c = n(626584),
    d = n(567249),
    u = n(979186),
    h = n(38502),
    f = n(309010),
    g = n(531685),
    p = n(723702),
    m = n(19575),
    A = n(9302),
    y = n(365971),
    v = n(777334),
    x = n(41984),
    w = n(973196);
n(321073);
var E = n(503698),
    C = n.n(E),
    b = n(192308),
    N = n(939249),
    O = n(138134),
    _ = n(972213),
    D = n(328162),
    I = n(231723),
    T = n(988393),
    j = n(442433),
    k = n(793574),
    S = n(688810),
    P = n(607470),
    L = n(880144),
    R = n(616356),
    M = n(734057),
    U = n(71393),
    K = n(453028),
    G = n(532624),
    F = n(184809),
    B = n(625494),
    V = n(350535),
    H = n(589051),
    W = n(223251),
    Y = n(834730),
    z = n(257581);
function J(e) {
    let { onClick: t, keybind: n, className: i, IconComponent: s, "data-testid": o } = e;
    return (0, r.jsxs)("div", {
        className: C()(z.UD, i),
        "data-testid": o,
        children: [
            (0, r.jsx)(N.D, {
                className: z.x6,
                onClick: t,
                "aria-hidden": !0,
                children: (0, r.jsx)(s, { size: "md", color: "currentColor", "aria-hidden": !0 }),
            }),
            null != n
                ? (0, r.jsx)(Y.E, {
                      className: z.P,
                      "aria-hidden": !0,
                      variant: "text-xxs/bold",
                      color: "interactive-text-default",
                      children: n,
                  })
                : null,
        ],
    });
}
var X = n(554146),
    $ = n(297264),
    Z = n(352255),
    q = n(782603),
    Q = n(428689),
    ee = n(7807),
    et = n(131607),
    en = n(49999),
    er = n(375708),
    ei = n(831931);
function es(e) {
    let { locked: t } = e,
        [n, s] = (0, et.kn)(t ? [] : [X.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX], void 0, !0);
    return (i.useEffect(() => {
        if (!t && n === X.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
            return () => {
                n === X.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX && s(en.i.AUTO_DISMISS);
            };
    }, [t, s, n]),
    t || n !== X.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
        ? null
        : (0, r.jsx)("div", {
              className: ei.A,
              children: (0, r.jsxs)("div", {
                  className: ei.rs,
                  children: [
                      (0, r.jsxs)("div", {
                          className: ei.vJ,
                          children: [
                              (0, r.jsx)($.D, {
                                  variant: "heading-xl/medium",
                                  color: "text-strong",
                                  children: er.intl.string(er.t.jzjJQg),
                              }),
                              (0, r.jsx)(Y.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: er.intl.string(er.t["5dOfxb"]),
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: ei.S1,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: ei.bS,
                                  children: [
                                      (0, r.jsx)(Z.X, {}),
                                      (0, r.jsx)(Y.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: er.intl.string(er.t.S6VRyK),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: ei.bS,
                                  children: [
                                      (0, r.jsx)(q.BellIcon, {}),
                                      (0, r.jsx)(Y.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: er.intl.string(er.t.xq8CKY),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: ei.bS,
                                  children: [
                                      (0, r.jsx)(Q.VideoIcon, {}),
                                      (0, r.jsx)(Y.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: er.intl.string(er.t.GwpRe0),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: ei.bS,
                                  children: [
                                      (0, r.jsx)(ee.J, {}),
                                      (0, r.jsx)(Y.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: er.intl.string(er.t.VUoC5F),
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
    el = n(351906),
    ea = n(243612),
    ec = n(391973),
    ed = n(5463),
    eu = n(129537),
    eh = n(127242),
    ef = n(968898),
    eg = n(481484),
    ep = n(545807),
    em = n(652215),
    eA = n(645280);
let ey = [],
    ev = i.memo(function (e) {
        let {
                widget: t,
                renderWidget: n,
                renderTitle: a,
                renderButtons: c,
                resizeValidation: d,
                containerRenderGate: u,
                className: f,
                dragContainerClassName: p,
            } = e,
            m = (0, s.bG)([h.A], () => h.A.getWidgetConfig(t.type), [t.type]),
            A = (0, ef.RE)(t.id, ef.X1),
            v = (0, eg.A)(),
            [w, E] = i.useState(() => u?.stores ?? ey);
        (0, l.Ay)(() => {
            E(u?.stores ?? ey);
        });
        let b = (0, s.bG)(w, () => u?.shouldRender({ widget: t, locked: v }) ?? !0, [u, v, t]),
            N = (0, ep.A)(),
            O = (0, s.bG)([g.A], () => g.A.windowSize((0, y.Q2)(N))),
            _ = i.useCallback((e, t, n, r, i) => {
                let s = g.A.windowSize((0, y.Q2)((0, ep.b)())),
                    l = (0, ed.NO)(n, s),
                    a = (0, ed.R9)(r, s);
                (0, ec.uD)(t), (0, ec.Ju)({ widgetId: t, anchor: l, size: a });
                let c = e === eu.P.MOVE,
                    d = (0, ed.Ly)(n, s.width, s.height, i.width, i.height);
                o.A.track(em.HAw.OVERLAY_LAYOUT_UPDATED, {
                    was_resized: !c,
                    was_dragged: c,
                    widget_type: h.A.getWidgetType(t),
                    window_width: s.width,
                    window_height: s.height,
                    widget_width: i.width,
                    widget_height: i.height,
                    widget_left: d.left,
                    widget_top: d.top,
                });
            }, []),
            D = i.useCallback((e) => {
                (0, ec.uD)(e);
            }, []),
            { id: I, pinned: T, zIndex: j, size: k, anchor: S, minSize: P } = t,
            L = i.useMemo(() => (0, ed.fd)(k, O), [k, O]),
            R = (0, ed.Nv)(S, O),
            { resizeX: M, resizeY: U, dragAnywhere: K, constrainAutoSizeToExplicitResizeEvents: G } = m ?? {},
            F = !v,
            B = T || !v,
            V = i.useMemo(() => ({ minX: 0, minY: 0, maxX: O.width, maxY: O.height }), [O]),
            H = i.useCallback(
                (e) => n({ ...e, widget: t, dragging: null != e.dragOperation, className: f }),
                [t, n, f],
            ),
            W = i.useCallback(
                (e) =>
                    null != a || null != c
                        ? (0, r.jsxs)("div", { className: C()(eA.vJ, A && eA.vw), children: [a?.(t), c?.(t, e)] })
                        : null,
                [t, a, A, c],
            ),
            Y = (0, s.bG)([eh.A], () => eh.A.hasRenderDebugMode(x.x7.WidgetAreas)),
            z = i.useMemo(() => {
                if (null != d) return (e) => d({ ...e, widget: t });
            }, [d, t]);
        return b
            ? (0, r.jsx)(eu.A, {
                  className: C()({ [eA.Yz]: Y, [eA.xu]: Y && !T, [eA.E]: Y && T }, p),
                  id: I,
                  size: L,
                  anchor: R,
                  container: V,
                  minSize: P ?? { width: 0, height: 0 },
                  hidden: !B,
                  locked: v,
                  resizeX: M ?? !1,
                  resizeY: U ?? !1,
                  style: { zIndex: j },
                  dragAnywhere: K ?? !1,
                  constrainAutoSizeToExplicitResizeEvents: G ?? !1,
                  active: F,
                  onUpdate: _,
                  onClick: D,
                  targetWindow: N,
                  forceShowExtras: A,
                  renderExtras: W,
                  resizeValidation: z,
                  children: H,
              })
            : null;
    });
var ex = n(588857),
    ew = n(644434);
function eE(e) {
    return e.widget.id;
}
function eC(e, t, n, i) {
    return n === eo.wL.YEETED ? null : (0, r.jsx)(ev, { ...t, transitionState: n, cleanUp: i }, e);
}
let eb = [],
    eN = i.memo(function (e) {
        let { className: t } = e,
            n = (0, ep.A)(),
            o = (0, s.bG)([g.A], () => g.A.windowSize((0, y.Q2)(n))),
            l = (0, s.bG)(
                [h.A, el.A],
                () => {
                    let e = h.A.getLayout(ew.G);
                    if (null == e) return eb;
                    let t = [];
                    for (let n of e.widgets) {
                        let e = h.A.getWidget(n);
                        if (null == e) continue;
                        let r = ex.A[e.type];
                        null != r &&
                            (null == r.predicate || r.predicate()) &&
                            (el.A.isOverlayWidgetDisabled(e.type) || t.push({ widget: e, ...r }));
                    }
                    return t;
                },
                [],
                ea.VC,
            ),
            a = i.useCallback((e) => (0, r.jsx)("div", { className: t, style: o, children: e }), [t, o]);
        return (0, r.jsx)(eo.F, { items: l, renderItem: eC, getItemKey: eE, wrapChildren: a });
    });
var eO = n(489277),
    e_ = n(222506);
let eD = new Set(["shift", "ctrl", "control", "alt", "meta", "os"]);
function eI(e) {
    let { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: s } = e;
    return { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: s };
}
function eT(e, t) {
    return (
        e.keyCode === t.keyCode &&
        e.shiftKey === t.shiftKey &&
        e.metaKey === t.metaKey &&
        e.altKey === t.altKey &&
        e.ctrlKey === t.ctrlKey
    );
}
var ej = n(302614),
    ek = n(296027),
    eS = n(592598),
    eP = n(237984),
    eL = n(394072),
    eR = n(528772),
    eM = n(944775),
    eU = n(317084),
    eK = n(427603),
    eG = n(980504),
    eF = n(355870);
let eB = i.memo(function () {
    let [e, t] = (0, s.yK)([eR.A], () => [eR.A.enabled, eR.A.keepOpen]),
        n = (0, s.bG)([f.Ay], () => f.Ay.getVoiceChannelId()),
        i = (0, s.bG)([M.A], () => M.A.getChannel(n), [n]),
        o = i?.getGuildId();
    return e && null != i
        ? (0, r.jsx)(ej.A, {
              className: eF.k,
              children: (0, r.jsx)(eU.A, {
                  width: eG.ed.width,
                  height: eG.ed.height,
                  guildId: o,
                  channel: i,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, eK.A)();
                      null != e && (0, eM.Lk)(e);
                  },
                  analyticsSource: "overlay",
              }),
          })
        : null;
});
var eV = n(672396),
    eH = n(558606);
let eW = !p.isPlatformEmbedded && !1,
    eY = eW
        ? (0, r.jsx)(P.A, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: eH.pN,
              autoPlay: !0,
              loop: !0,
              muted: !0,
          })
        : null;
function ez(e) {
    e.preventDefault();
}
function eJ(e) {
    (0, j.L3)(
        e,
        async () => {
            let { default: e } = await n.e("386437").then(n.bind(n, 171300));
            return (t) => (0, r.jsx)(e, { ...t, layoutId: ew.G, version: 4 });
        },
        { context: em.BRT.OVERLAY },
    );
}
let eX = i.memo(function (e) {
        let { keybind: t, onClick: n, locked: i } = e;
        return (0, r.jsx)(N.D, {
            "data-testid": "overlay-background",
            "data-locked": i,
            className: C()(eH.LK, { [eH.Zo]: !i, [eH.vZ]: i }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: r, button: i } = e;
                i === em.hE4.PRIMARY && t === r && n();
            },
            onContextMenu: eJ,
            children: i
                ? null
                : (0, r.jsxs)(ej.A, {
                      className: eH.BE,
                      children: [
                          (0, r.jsx)(J, {
                              "data-testid": "overlay-report-button",
                              onClick: () => (0, eP.b)(k.A.OVERLAY, em.BRT.OVERLAY),
                              IconComponent: O.FlagIcon,
                          }),
                          (0, r.jsx)(J, {
                              "data-testid": "overlay-close-button",
                              keybind: t,
                              onClick: n,
                              IconComponent: _.XLargeIcon,
                          }),
                      ],
                  }),
        });
    }),
    e$ = i.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, r.jsx)(ej.A, {
                  className: eH.BE,
                  children: (0, r.jsx)(J, {
                      "data-testid": "overlay-unlock-button",
                      onClick: () => o.A.setInputLocked(!1, eO.A.getTargetPID()),
                      IconComponent: D.w,
                  }),
              })
            : null;
    });
function eZ() {
    o.A.setInputLocked(!0, eO.A.getTargetPID());
}
function eq(e) {
    let t = e_.A.isInputLocked(eO.A.getTargetPID());
    "alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? B._.dispatch(em.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && B._.dispatch(em.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })),
        (function (e, t) {
            if (t || "keydown" !== e.type.toLowerCase()) return;
            let n = e.key.toLowerCase();
            ("escape" === n || "esc" === n) && o.A.setInputLocked(!0, eO.A.getTargetPID());
        })(e, t),
        (eW || (0, eL.SE)()) &&
            (function (e) {
                if ("keydown" !== e.type.toLowerCase() || e.repeat) return !1;
                let t = G.Ay.getOverlayKeybind();
                return (
                    !!t.enabled &&
                    0 !== t.shortcut.length &&
                    (0, V.pi)(t.shortcut).some(
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
            (e.preventDefault(), e.stopPropagation(), o.A.setInputLocked(!t, eO.A.getTargetPID()));
}
let eQ = i.memo(function () {
        return (0, s.bG)([eh.A], () => eh.A.hasRenderDebugMode(x.x7.WindowContainer))
            ? (0, r.jsx)("div", { className: eH.N1 })
            : null;
    }),
    e0 = i.memo(function () {
        let e = (0, ep.A)(),
            t = (0, s.bG)([eO.A], () => eO.A.getTargetPID()),
            n = (0, s.bG)([e_.A], () => e_.A.isInputLocked(t), [t]),
            o = (0, s.bG)([eO.A], () => eO.A.isFocused(t), [t]),
            l = (0, s.bG)(
                [G.Ay],
                () => (null != G.Ay.getOverlayKeybind() ? (0, V.dI)(G.Ay.getOverlayKeybind()?.shortcut, !0) : "???"),
                [],
            );
        return (
            i.useEffect(() => {
                if ((B._.dispatch(em.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), n))
                    return (
                        (0, b.closeAllModalsInContext)(I.KX),
                        e.addEventListener("contextmenu", ez, !1),
                        () => {
                            e.removeEventListener("contextmenu", ez, !1);
                        }
                    );
                e.removeEventListener("contextmenu", ez, !1);
            }, [n, e]),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(eX, { locked: n, keybind: l, onClick: eZ }),
                    (0, r.jsx)(eN, { className: C()({ [eH.ZK]: n, [eH.al]: !n }) }),
                    (eW || (0, eL.SE)()) && (0, r.jsx)(e$, { locked: n, focused: o }),
                    (0, r.jsx)(es, { locked: n }),
                ],
            })
        );
    });
function e1() {
    var e, t;
    let n,
        a,
        c,
        d,
        u,
        h,
        p,
        m,
        A,
        v,
        x,
        w,
        E = (0, ep.A)(),
        C = (0, s.bG)([F.default], () => F.default.incompatibleApp),
        b = (0, s.bG)([g.A], () => {
            let e = (0, y.Q2)(E),
                t = g.A.windowSize(e);
            return t.height < 360 || t.width < 640;
        }, [E]),
        { analyticsLocations: N } = (0, S.Ay)(k.A.OVERLAY);
    return (
        (n = (0, ep.A)()),
        (a = (0, s.bG)([eO.A], () => eO.A.getTargetPID(), [])),
        (c = (0, s.bG)([G.Ay], () => {
            let e = G.Ay.getOverlayKeybind();
            return null != e ? e.shortcut : [];
        }, [])),
        (d = (0, s.bG)([e_.A], () => e_.A.isInputLocked(a), [a])),
        (u = (0, s.bG)([g.A], () => {
            let e = (0, y.Q2)(n);
            return g.A.isVisible(e) && g.A.isFocused(e);
        }, [n])),
        (h = i.useRef([])),
        (p = i.useMemo(() => (0, V.pi)(c).map((e) => eI(e)), [c])),
        (m = i.useMemo(() => c.length > 0, [c])),
        (A = !d && m && u),
        i.useEffect(() => {
            h.current = [];
        }, [d, p]),
        i.useEffect(() => {
            if (!A) {
                h.current = [];
                return;
            }
            function e(e) {
                let t = eI(e),
                    n = h.current,
                    r = n.some((e) => eT(e, t)),
                    i = (function (e) {
                        let t = e.key.toLowerCase();
                        for (let e of eD) if (t.includes(e)) return !0;
                        return !1;
                    })(e);
                r || i || n.push(t),
                    0 !== p.length &&
                        n.length === p.length &&
                        p.every((e) => n.some((t) => eT(e, t))) &&
                        (e.preventDefault(), e.stopPropagation());
            }
            function t(e) {
                let t = eI(e),
                    n = h.current,
                    r = n.findIndex((e) => eT(e, t));
                r > -1 && n.splice(r, 1);
            }
            return (
                n.addEventListener("keydown", e, !0),
                n.addEventListener("keyup", t, !0),
                () => {
                    n.removeEventListener("keydown", e, !0), n.removeEventListener("keyup", t, !0);
                }
            );
        }, [A, p, n]),
        (0, l.Ay)(() => {
            (0, H.E)();
        }),
        (v = (0, ep.A)()),
        (e = () => {
            o.A.overlayReady(eO.A.getTargetPID()),
                v.addEventListener("keydown", eq, !0),
                v.addEventListener("keyup", eq);
        }),
        (t = () => {
            v.removeEventListener("keydown", eq, !0), v.removeEventListener("keyup", eq);
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
        (0, l.Ay)(() => {
            let e = (0, ea.qv)(),
                t = f.Ay.getVoiceChannelId(),
                n = M.A.getChannel(t),
                r = null != n ? U.A.getGuild(n.guild_id) : null,
                i = null != R.A.getCurrentUserActiveStream(),
                s = null != t,
                l = (0, L.A)(K.Ay) && !i && null != e,
                a = s && null != r && null != t,
                c = eO.A.getTargetPID();
            if (ek.default.hasChangedRenderMode(c)) return;
            let d = eS.A.isNotificationDisabled(eV.KS.WelcomeNudge),
                u = eS.A.isNotificationDisabled(eV.KS.GoLiveNudge),
                h = eS.A.isNotificationDisabled(eV.KS.ActivityInvite),
                g = [];
            !d &&
                (g.push({ type: eV.Jr.WELCOME }),
                !u &&
                    (l && a
                        ? g.push({ type: eV.Jr.GO_LIVE_VOICE, game: e, voiceChannelId: t, voiceGuild: r })
                        : l && g.push({ type: eV.Jr.GO_LIVE_NON_VOICE, game: e })),
                h || g.push({ type: eV.Jr.CONTENT_INVENTORY, entries: [] })),
                null != w.current && clearTimeout(w.current),
                (w.current = setTimeout(() => {
                    o.A.overlayMounted(...g);
                }, 1e3));
        }),
        (0, l.l0)(() => {
            null != w.current && (clearTimeout(w.current), (w.current = null));
        }),
        b || C)
            ? null
            : (0, r.jsx)(S.f5, {
                  value: N,
                  children: (0, r.jsxs)("div", {
                      id: "overlay-container",
                      className: eH.Lw,
                      children: [
                          eY,
                          (0, r.jsx)(e0, {}),
                          (0, r.jsx)(eB, {}),
                          (0, r.jsx)(W.A, {}),
                          (0, r.jsx)(T.N, { appContext: em.BRT.OVERLAY }),
                          (0, r.jsx)(eQ, {}),
                      ],
                  }),
              })
    );
}
var e2 = n(682763),
    e3 = n(228366);
function e8(e, t) {
    eO.A.getPopoutInitializationStages()[e] !== t &&
        e3.h.dispatch({ type: "OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED", update: { [e]: t } });
}
n(96175);
var e7 = n(366032);
n(191701), n(921955);
let e4 = !p.isPlatformEmbedded && !1,
    e5 = new c.A("AppOverlay");
function e6(e, t) {
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
                n(), clearInterval(t.current);
                return;
            }
            Date.now() - i > 12e4 && (r(Error("Timed out waiting for CSS to load")), clearInterval(t.current));
        }, 200);
    });
}
async function e9(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (p.isPlatformEmbedded) {
        try {
            await m.Ay.isAlwaysOnTop(t);
        } catch (e) {
            e5.error("Window does not exist while trying to show inactive", e), (0, v.pj)(e, x.Ue.OutOfProcess);
        }
        for (let i = 0; i < r; i++)
            try {
                if (!(await m.Ay.waitForIPCReady(n, e))) throw Error("IPC not ready");
                m.Ay.showInactive(t);
                return;
            } catch (e) {
                if (e.message?.includes("IPC") && i < r - 1) {
                    let t = (n / 2) * Math.pow(2, i + 1);
                    e5.error(`Failed to show inactive, retrying in ${t}ms`, e),
                        await new Promise((e) => setTimeout(e, t));
                } else throw ((0, v.pj)(e, x.Ue.OutOfProcess), e);
            }
    }
}
function te() {
    o.A.setFocusedPID(A.DEV_PID, null);
}
function tt() {
    o.A.setFocusedPID(null, null);
}
let tn = i.memo(function (e) {
    let t,
        { withTitleBar: n, windowKey: c } = e;
    (t = (0, s.bG)([d.A], () => d.A.getWindow(c))),
        (0, l.Ay)(() => {
            if (null == t) return;
            let e = e4 || (0, eL.SE)();
            return (
                e &&
                    (t.document.hasFocus() && o.A.setFocusedPID(A.DEV_PID, null),
                    t.addEventListener("focus", te),
                    t.addEventListener("blur", tt)),
                () => {
                    e && (t.removeEventListener("focus", te), t.removeEventListener("blur", tt));
                }
            );
        });
    let m = (function (e, t) {
            let n,
                r,
                a = (0, s.bG)(
                    [eO.A],
                    () => !!(!p.isPlatformEmbedded || (0, eL.SE)()) || eO.A.isWindowHandleInitialized(),
                ),
                c = (0, s.bG)([d.A], () => d.A.getWindow(e)),
                u = (0, s.bG)([eO.A], () => eO.A.getFocusedPID()),
                m = i.useMemo(() => !!(!p.isPlatformEmbedded || (0, eL.SE)()) || (null != u && u !== A.UNSET_PID), [u]),
                [v, w] = i.useState(!1),
                E = i.useRef(!1),
                C = i.useCallback(() => {
                    let e = eO.A.getTargetPID(),
                        n = null != f.Ay.getVoiceChannelId();
                    o.A.track(em.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: eO.A.isPinned(em.uss.TEXT),
                        overlay_render_method: x.Ue[ek.default.getOverlayMethod(e)],
                        unpinned_widget_types: h.A.getAllUnpinnedPinnedWidgets(t),
                    }),
                        (0, e2.Fd)();
                }, [t]),
                b = i.useRef(!1),
                N = i.useRef(null),
                O = i.useCallback(
                    async (e, t) => {
                        try {
                            if ((await e6(e, N), b.current)) return;
                            e8("cssLoaded", !0);
                        } catch (e) {
                            e5.error("Timed out waiting for CSS to load", e),
                                o.A.setOverlayCrashed(eO.A.getTargetPID(), e),
                                e8("errorMessage", "CSS failed load");
                            return;
                        }
                        try {
                            if ((await e9(e, t), b.current)) return;
                            (0, e2.Mq)();
                        } catch (e) {
                            o.A.setOverlayCrashed(eO.A.getTargetPID(), e), e8("errorMessage", "showInactive failed");
                            return;
                        }
                        await new Promise((t) => {
                            e.setTimeout(() => t(), 100);
                        }),
                            b.current || (w(!0), C());
                    },
                    [C],
                ),
                _ = i.useRef(!1);
            return (
                i.useEffect(() => {
                    if (!E.current && (e8("hasUseEffectFired", !0), e8("trackedPidFocused", m), a)) {
                        if (null == c) return void e8("errorMessage", "No targetOverlayWindow");
                        if (!m) {
                            _.current ||
                                (o.A.updateOverlayState(
                                    eO.A.getTargetPID(),
                                    x.AR.WAITING_FOR_PID_FOCUS,
                                    "AppOverlay - not focused",
                                ),
                                (_.current = !0));
                            return;
                        }
                        (E.current = !0), e8("reactInitializationStarted", !0), O(c, e);
                    }
                }, [O, m, e, c, a]),
                (0, l.l0)(() => {
                    clearInterval(N.current), (b.current = !0);
                }),
                (n = (0, s.bG)([g.A], () => g.A.windowSize(null != c ? (0, y.Q2)(c) : void 0))),
                (r = (0, s.bG)([eO.A], () => eO.A.getFocusedWindowHandle())),
                i.useEffect(() => {
                    let e, t;
                    if (null != c && v && c.innerHeight === n.height && c.innerWidth === n.width)
                        return (
                            (e = c.requestAnimationFrame(() => {
                                e = c.requestAnimationFrame(() => {
                                    c.clearTimeout(t), o.A.overlayUIFocusedPid(u ?? A.UNSET_PID, r);
                                });
                            })),
                            (t = c.setTimeout(() => {
                                c.cancelAnimationFrame(e), o.A.overlayUIFocusedPid(u ?? A.UNSET_PID, r);
                            }, 500)),
                            () => {
                                c.cancelAnimationFrame(e), c.clearTimeout(t);
                            }
                        );
                }, [v, c, u, r, n]),
                v
            );
        })(c, ew.G),
        v = (0, s.bG)([eO.A], () => eO.A.getFocusedPID()),
        E = (0, s.bG)([e_.A], () => e_.A.isInputLocked(v), [v]),
        C = (0, s.bG)([ek.default, eO.A], () =>
            (0, e7.S)(eO.A.getNativeLimitedInteraction(), ek.default.getOverlayMethod(eO.A.getTargetPID())),
        );
    return m
        ? (0, r.jsx)(w.p, {
              disabled: C,
              children: (0, r.jsxs)(u.A, {
                  themeOverride: em.NJ8.MIDNIGHT,
                  appContext: em.BRT.OVERLAY,
                  withTitleBar: n,
                  windowKey: c,
                  title: "Discord Overlay",
                  hideModals: E,
                  children: [(0, r.jsx)(e1, {}), (0, r.jsx)(a.Al, {})],
              }),
          })
        : null;
});
