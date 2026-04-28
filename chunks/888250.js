n.r(t), n.d(t, { waitForCSSLoad: () => e5, default: () => e7 });
var r = n(627968),
    i = n(64700),
    l = n(17928),
    s = n(684013),
    a = n(964486),
    o = n(573435),
    d = n(626584),
    u = n(567249),
    c = n(979186),
    A = n(38502),
    h = n(309010),
    m = n(531685),
    f = n(723702),
    g = n(19575),
    y = n(9302),
    v = n(365971),
    p = n(777334),
    w = n(41984);
n(321073);
var E = n(503698),
    x = n.n(E),
    I = n(192308),
    O = n(939249),
    C = n(138134),
    _ = n(972213),
    b = n(328162),
    L = n(231723),
    j = n(988393),
    N = n(442433),
    k = n(793574),
    D = n(688810),
    P = n(607470),
    T = n(880144),
    R = n(616356),
    S = n(734057),
    G = n(71393),
    M = n(969341),
    V = n(532624),
    K = n(256415),
    W = n(625494),
    Y = n(350535),
    F = n(589051),
    U = n(223251),
    z = n(834730),
    X = n(696048);
function B(e) {
    let { onClick: t, keybind: n, className: i, IconComponent: l } = e;
    return (0, r.jsxs)("div", {
        className: x()(X.UD, i),
        children: [
            (0, r.jsx)(O.D, {
                className: X.x6,
                onClick: t,
                "aria-hidden": !0,
                children: (0, r.jsx)(l, { size: "md", color: "currentColor", "aria-hidden": !0 }),
            }),
            null != n
                ? (0, r.jsx)(z.E, {
                      className: X.P,
                      "aria-hidden": !0,
                      variant: "text-xxs/bold",
                      color: "interactive-text-default",
                      children: n,
                  })
                : null,
        ],
    });
}
var H = n(554146),
    J = n(534514),
    Q = n(352255),
    Z = n(782603),
    q = n(428689),
    $ = n(7807),
    ee = n(932001),
    et = n(49999),
    en = n(985018),
    er = n(632244);
function ei(e) {
    let { locked: t } = e,
        [n, l] = (0, ee.kn)(t ? [] : [H.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX], void 0, !0);
    return (i.useEffect(() => {
        if (!t && n === H.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
            return () => {
                n === H.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX && l(et.i.AUTO_DISMISS);
            };
    }, [t, l, n]),
    t || n !== H.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
        ? null
        : (0, r.jsx)("div", {
              className: er.A,
              children: (0, r.jsxs)("div", {
                  className: er.rs,
                  children: [
                      (0, r.jsxs)("div", {
                          className: er.vJ,
                          children: [
                              (0, r.jsx)(J.D, {
                                  variant: "heading-xl/medium",
                                  color: "text-strong",
                                  children: en.intl.string(en.t.jzjJQg),
                              }),
                              (0, r.jsx)(z.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: en.intl.string(en.t["5dOfxb"]),
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: er.S1,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: er.bS,
                                  children: [
                                      (0, r.jsx)(Q.X, {}),
                                      (0, r.jsx)(z.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: en.intl.string(en.t.S6VRyK),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: er.bS,
                                  children: [
                                      (0, r.jsx)(Z.X, {}),
                                      (0, r.jsx)(z.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: en.intl.string(en.t.xq8CKY),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: er.bS,
                                  children: [
                                      (0, r.jsx)(q.n, {}),
                                      (0, r.jsx)(z.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: en.intl.string(en.t.GwpRe0),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: er.bS,
                                  children: [
                                      (0, r.jsx)($.J, {}),
                                      (0, r.jsx)(z.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: en.intl.string(en.t.VUoC5F),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var el = n(518009),
    es = n(351906),
    ea = n(243612),
    eo = n(391973),
    ed = n(5463),
    eu = n(129537),
    ec = n(127242),
    eA = n(968898),
    eh = n(481484),
    em = n(545807),
    ef = n(652215),
    eg = n(685411);
let ey = [],
    ev = i.memo(function (e) {
        let {
                widget: t,
                renderWidget: n,
                renderTitle: o,
                renderButtons: d,
                resizeValidation: u,
                containerRenderGate: c,
                className: h,
                dragContainerClassName: f,
            } = e,
            g = (0, l.bG)([A.A], () => A.A.getWidgetConfig(t.type), [t.type]),
            y = (0, eA.RE)(t.id, eA.X1),
            p = (0, eh.A)(),
            [E, I] = i.useState(() => c?.stores ?? ey);
        (0, a.Ay)(() => {
            I(c?.stores ?? ey);
        });
        let O = (0, l.bG)(E, () => c?.shouldRender({ widget: t, locked: p }) ?? !0, [c, p, t]),
            C = (0, em.A)(),
            _ = (0, l.bG)([m.A], () => m.A.windowSize((0, v.Q2)(C))),
            b = i.useCallback((e, t, n, r, i) => {
                let l = m.A.windowSize((0, v.Q2)((0, em.b)())),
                    a = (0, ed.NO)(n, l),
                    o = (0, ed.R9)(r, l);
                (0, eo.uD)(t), (0, eo.Ju)({ widgetId: t, anchor: a, size: o });
                let d = e === eu.P.MOVE,
                    u = (0, ed.Ly)(n, l.width, l.height, i.width, i.height);
                s.A.track(ef.HAw.OVERLAY_LAYOUT_UPDATED, {
                    was_resized: !d,
                    was_dragged: d,
                    widget_type: A.A.getWidgetType(t),
                    window_width: l.width,
                    window_height: l.height,
                    widget_width: i.width,
                    widget_height: i.height,
                    widget_left: u.left,
                    widget_top: u.top,
                });
            }, []),
            L = i.useCallback((e) => {
                (0, eo.uD)(e);
            }, []),
            { id: j, pinned: N, zIndex: k, size: D, anchor: P, minSize: T } = t,
            R = i.useMemo(() => (0, ed.fd)(D, _), [D, _]),
            S = (0, ed.Nv)(P, _),
            { resizeX: G, resizeY: M, dragAnywhere: V, constrainAutoSizeToExplicitResizeEvents: K } = g ?? {},
            W = !p,
            Y = N || !p,
            F = i.useMemo(() => ({ minX: 0, minY: 0, maxX: _.width, maxY: _.height }), [_]),
            U = i.useCallback(
                (e) => n({ ...e, widget: t, dragging: null != e.dragOperation, className: h }),
                [t, n, h],
            ),
            z = i.useCallback(
                (e) =>
                    null != o || null != d
                        ? (0, r.jsxs)("div", { className: x()(eg.vJ, y && eg.vw), children: [o?.(t), d?.(t, e)] })
                        : null,
                [t, o, y, d],
            ),
            X = (0, l.bG)([ec.A], () => ec.A.hasRenderDebugMode(w.x7.WidgetAreas)),
            B = i.useMemo(() => {
                if (null != u) return (e) => u({ ...e, widget: t });
            }, [u, t]);
        return O
            ? (0, r.jsx)(eu.A, {
                  className: x()({ [eg.Yz]: X, [eg.xu]: X && !N, [eg.E]: X && N }, f),
                  id: j,
                  size: R,
                  anchor: S,
                  container: F,
                  minSize: T ?? { width: 0, height: 0 },
                  hidden: !Y,
                  locked: p,
                  resizeX: G ?? !1,
                  resizeY: M ?? !1,
                  style: { zIndex: k },
                  dragAnywhere: V ?? !1,
                  constrainAutoSizeToExplicitResizeEvents: K ?? !1,
                  active: W,
                  onUpdate: b,
                  onClick: L,
                  targetWindow: C,
                  forceShowExtras: y,
                  renderExtras: z,
                  resizeValidation: B,
                  children: U,
              })
            : null;
    });
var ep = n(349230),
    ew = n(644434);
function eE(e) {
    return e.widget.id;
}
function ex(e, t, n, i) {
    return n === el.wL.YEETED ? null : (0, r.jsx)(ev, { ...t, transitionState: n, cleanUp: i }, e);
}
let eI = [],
    eO = i.memo(function (e) {
        let { className: t } = e,
            n = (0, em.A)(),
            s = (0, l.bG)([m.A], () => m.A.windowSize((0, v.Q2)(n))),
            a = (0, l.bG)(
                [A.A, es.A],
                () => {
                    let e = A.A.getLayout(ew.G);
                    if (null == e) return eI;
                    let t = [];
                    for (let n of e.widgets) {
                        let e = A.A.getWidget(n);
                        if (null == e) continue;
                        let r = ep.A[e.type];
                        null != r &&
                            (null == r.predicate || r.predicate()) &&
                            (es.A.isOverlayWidgetDisabled(e.type) || t.push({ widget: e, ...r }));
                    }
                    return t;
                },
                [],
                ea.VC,
            ),
            o = i.useCallback((e) => (0, r.jsx)("div", { className: t, style: s, children: e }), [t, s]);
        return (0, r.jsx)(el.F, { items: a, renderItem: ex, getItemKey: eE, wrapChildren: o });
    });
var eC = n(489277),
    e_ = n(222506);
let eb = new Set(["shift", "ctrl", "control", "alt", "meta", "os"]);
function eL(e) {
    let { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: l } = e;
    return { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: l };
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
var eN = n(302614),
    ek = n(833551),
    eD = n(592598),
    eP = n(237984),
    eT = n(528772),
    eR = n(944775),
    eS = n(317084),
    eG = n(427603),
    eM = n(980504),
    eV = n(923779);
let eK = i.memo(function () {
    let [e, t] = (0, l.yK)([eT.A], () => [eT.A.enabled, eT.A.keepOpen]),
        n = (0, l.bG)([h.A], () => h.A.getVoiceChannelId()),
        i = (0, l.bG)([S.A], () => S.A.getChannel(n), [n]),
        s = i?.getGuildId();
    return e && null != i
        ? (0, r.jsx)(eN.A, {
              className: eV.k,
              children: (0, r.jsx)(eS.A, {
                  width: eM.ed.width,
                  height: eM.ed.height,
                  guildId: s,
                  channel: i,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, eG.A)();
                      null != e && (0, eR.Lk)(e);
                  },
                  analyticsSource: "overlay",
              }),
          })
        : null;
});
var eW = n(672396),
    eY = n(649831);
let eF = !f.isPlatformEmbedded && !1,
    eU = eF
        ? (0, r.jsx)(P.A, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: eY.pN,
              autoPlay: !0,
              loop: !0,
              muted: !0,
          })
        : null;
function ez(e) {
    e.preventDefault();
}
function eX(e) {
    (0, N.L3)(
        e,
        async () => {
            let { default: e } = await n.e("86437").then(n.bind(n, 171300));
            return (t) => (0, r.jsx)(e, { ...t, layoutId: ew.G, version: 4 });
        },
        { context: ef.BRT.OVERLAY },
    );
}
let eB = i.memo(function (e) {
        let { keybind: t, onClick: n, locked: i } = e;
        return (0, r.jsx)(O.D, {
            className: x()(eY.LK, { [eY.Zo]: !i, [eY.vZ]: i }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: r, button: i } = e;
                i === ef.hE4.PRIMARY && t === r && n();
            },
            onContextMenu: eX,
            children: i
                ? null
                : (0, r.jsxs)(eN.A, {
                      className: eY.BE,
                      children: [
                          (0, r.jsx)(B, { onClick: () => (0, eP.b)(k.A.OVERLAY, ef.BRT.OVERLAY), IconComponent: C.i }),
                          (0, r.jsx)(B, { keybind: t, onClick: n, IconComponent: _.d }),
                      ],
                  }),
        });
    }),
    eH = i.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, r.jsx)(eN.A, {
                  className: eY.BE,
                  children: (0, r.jsx)(B, {
                      onClick: () => s.A.setInputLocked(!1, eC.A.getTargetPID()),
                      IconComponent: b.w,
                  }),
              })
            : null;
    });
function eJ() {
    s.A.setInputLocked(!0, eC.A.getTargetPID());
}
function eQ(e) {
    let t = e_.A.isInputLocked(eC.A.getTargetPID());
    "alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? W._.dispatch(ef.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && W._.dispatch(ef.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })),
        (function (e, t) {
            if (t || "keydown" !== e.type.toLowerCase()) return;
            let n = e.key.toLowerCase();
            ("escape" === n || "esc" === n) && s.A.setInputLocked(!0, eC.A.getTargetPID());
        })(e, t),
        eF &&
            (function (e) {
                if ("keydown" !== e.type.toLowerCase() || e.repeat) return !1;
                let t = V.Ay.getOverlayKeybind();
                return (
                    !!t.enabled &&
                    0 !== t.shortcut.length &&
                    (0, Y.pi)(t.shortcut).some(
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
            (e.preventDefault(), e.stopPropagation(), s.A.setInputLocked(!t, eC.A.getTargetPID()));
}
let eZ = i.memo(function () {
        return (0, l.bG)([ec.A], () => ec.A.hasRenderDebugMode(w.x7.WindowContainer))
            ? (0, r.jsx)("div", { className: eY.N1 })
            : null;
    }),
    eq = i.memo(function () {
        let e = (0, em.A)(),
            t = (0, l.bG)([eC.A], () => eC.A.getTargetPID()),
            n = (0, l.bG)([e_.A], () => e_.A.isInputLocked(t), [t]),
            s = (0, l.bG)([eC.A], () => eC.A.isFocused(t), [t]),
            a = (0, l.bG)(
                [V.Ay],
                () => (null != V.Ay.getOverlayKeybind() ? (0, Y.dI)(V.Ay.getOverlayKeybind()?.shortcut, !0) : "???"),
                [],
            );
        return (
            i.useEffect(() => {
                if ((W._.dispatch(ef.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), n))
                    return (
                        (0, I.closeAllModalsInContext)(L.KX),
                        e.addEventListener("contextmenu", ez, !1),
                        () => {
                            e.removeEventListener("contextmenu", ez, !1);
                        }
                    );
                e.removeEventListener("contextmenu", ez, !1);
            }, [n, e]),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(eB, { locked: n, keybind: a, onClick: eJ }),
                    (0, r.jsx)(eO, { className: x()({ [eY.ZK]: n, [eY.al]: !n }) }),
                    eF && (0, r.jsx)(eH, { locked: n, focused: s }),
                    (0, r.jsx)(ei, { locked: n }),
                ],
            })
        );
    });
function e$() {
    var e, t;
    let n,
        o,
        d,
        u,
        c,
        A,
        f,
        g,
        y,
        p,
        w,
        E,
        x = (0, em.A)(),
        I = (0, l.bG)([K.default], () => K.default.incompatibleApp),
        O = (0, l.bG)([m.A], () => {
            let e = (0, v.Q2)(x),
                t = m.A.windowSize(e);
            return t.height < 360 || t.width < 640;
        }, [x]),
        { analyticsLocations: C } = (0, D.Ay)(k.A.OVERLAY);
    return (
        (n = (0, em.A)()),
        (o = (0, l.bG)([eC.A], () => eC.A.getTargetPID(), [])),
        (d = (0, l.bG)([V.Ay], () => {
            let e = V.Ay.getOverlayKeybind();
            return null != e ? e.shortcut : [];
        }, [])),
        (u = (0, l.bG)([e_.A], () => e_.A.isInputLocked(o), [o])),
        (c = (0, l.bG)([m.A], () => {
            let e = (0, v.Q2)(n);
            return m.A.isVisible(e) && m.A.isFocused(e);
        }, [n])),
        (A = i.useRef([])),
        (f = i.useMemo(() => (0, Y.pi)(d).map((e) => eL(e)), [d])),
        (g = i.useMemo(() => d.length > 0, [d])),
        (y = !u && g && c),
        i.useEffect(() => {
            A.current = [];
        }, [u, f]),
        i.useEffect(() => {
            if (!y) {
                A.current = [];
                return;
            }
            let e = (e) => {
                    let t = eL(e),
                        n = A.current,
                        r = n.some((e) => ej(e, t)),
                        i = (function (e) {
                            let t = e.key.toLowerCase();
                            for (let e of eb) if (t.includes(e)) return !0;
                            return !1;
                        })(e);
                    r || i || n.push(t),
                        0 !== f.length &&
                            n.length === f.length &&
                            f.every((e) => n.some((t) => ej(e, t))) &&
                            (e.preventDefault(), e.stopPropagation());
                },
                t = (e) => {
                    let t = eL(e),
                        n = A.current,
                        r = n.findIndex((e) => ej(e, t));
                    r > -1 && n.splice(r, 1);
                };
            return (
                n.addEventListener("keydown", e, !0),
                n.addEventListener("keyup", t, !0),
                () => {
                    n.removeEventListener("keydown", e, !0), n.removeEventListener("keyup", t, !0);
                }
            );
        }, [y, f, n]),
        (0, a.Ay)(() => {
            (0, F.E)();
        }),
        (p = (0, em.A)()),
        (e = () => {
            s.A.overlayReady(eC.A.getTargetPID()),
                p.addEventListener("keydown", eQ, !0),
                p.addEventListener("keyup", eQ);
        }),
        (t = () => {
            p.removeEventListener("keydown", eQ, !0), p.removeEventListener("keyup", eQ);
        }),
        (w = i.useRef({ mount: e, unmount: t })),
        i.useEffect(() => {
            w.current = { mount: e, unmount: t };
        }),
        i.useEffect(
            () => (
                w.current.mount(),
                () => {
                    w.current.unmount();
                }
            ),
            [],
        ),
        ((E = i.useRef(null)),
        (0, a.Ay)(() => {
            let e = (0, ea.qv)(),
                t = h.A.getVoiceChannelId(),
                n = S.A.getChannel(t),
                r = null != n ? G.A.getGuild(n.guild_id) : null,
                i = null != R.A.getCurrentUserActiveStream(),
                l = null != t,
                a = (0, T.A)(M.Ay) && !i && null != e,
                o = l && null != r && null != t,
                d = eC.A.getTargetPID();
            if (ek.default.hasChangedRenderMode(d)) return;
            let u = eD.A.isNotificationDisabled(eW.KS.WelcomeNudge),
                c = eD.A.isNotificationDisabled(eW.KS.GoLiveNudge),
                A = eD.A.isNotificationDisabled(eW.KS.ActivityInvite),
                m = [];
            !u &&
                (m.push({ type: eW.Jr.WELCOME }),
                !c &&
                    (a && o
                        ? m.push({ type: eW.Jr.GO_LIVE_VOICE, game: e, voiceChannelId: t, voiceGuild: r })
                        : a && m.push({ type: eW.Jr.GO_LIVE_NON_VOICE, game: e })),
                A || m.push({ type: eW.Jr.CONTENT_INVENTORY, entries: [] })),
                null != E.current && clearTimeout(E.current),
                (E.current = setTimeout(() => {
                    s.A.overlayMounted(...m);
                }, 1e3));
        }),
        (0, a.l0)(() => {
            null != E.current && (clearTimeout(E.current), (E.current = null));
        }),
        O || I)
            ? null
            : (0, r.jsx)(D.f5, {
                  value: C,
                  children: (0, r.jsxs)("div", {
                      id: "overlay-container",
                      className: eY.Lw,
                      children: [
                          eU,
                          (0, r.jsx)(eq, {}),
                          (0, r.jsx)(eK, {}),
                          (0, r.jsx)(U.A, {}),
                          (0, r.jsx)(j.N, { appContext: ef.BRT.OVERLAY }),
                          (0, r.jsx)(eZ, {}),
                      ],
                  }),
              })
    );
}
var e0 = n(682763),
    e1 = n(228366);
function e2(e, t) {
    eC.A.getPopoutInitializationStages()[e] !== t &&
        e1.h.dispatch({ type: "OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED", update: { [e]: t } });
}
n(96175), n(21076), n(921955);
let e3 = !f.isPlatformEmbedded && !1,
    e4 = new d.A("AppOverlay");
function e5(e, t) {
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
    if (f.isPlatformEmbedded) {
        try {
            await g.Ay.isAlwaysOnTop(t);
        } catch (e) {
            e4.error("Window does not exist while trying to show inactive", e), (0, p.pj)(e, w.Ue.OutOfProcess);
        }
        for (let i = 0; i < r; i++)
            try {
                if (!(await g.Ay.waitForIPCReady(n, e))) throw Error("IPC not ready");
                g.Ay.showInactive(t);
                return;
            } catch (e) {
                if (e.message?.includes("IPC") && i < r - 1) {
                    let t = (n / 2) * Math.pow(2, i + 1);
                    e4.error(`Failed to show inactive, retrying in ${t}ms`, e),
                        await new Promise((e) => setTimeout(e, t));
                } else throw ((0, p.pj)(e, w.Ue.OutOfProcess), e);
            }
    }
}
function e8() {
    s.A.setFocusedPID(y.DEV_PID, null);
}
function e6() {
    s.A.setFocusedPID(null, null);
}
let e7 = i.memo(function (e) {
    let t,
        { withTitleBar: n, windowKey: d } = e;
    (t = (0, l.bG)([u.A], () => u.A.getWindow(d))),
        (0, a.Ay)(() => {
            if (null != t)
                return (
                    e3 &&
                        (t.document.hasFocus() && s.A.setFocusedPID(y.DEV_PID, null),
                        t.addEventListener("focus", e8),
                        t.addEventListener("blur", e6)),
                    () => {
                        e3 && (t.removeEventListener("focus", e8), t.removeEventListener("blur", e6));
                    }
                );
        });
    let g = (function (e, t) {
            let n,
                r,
                o = (0, l.bG)([eC.A], () => !f.isPlatformEmbedded || eC.A.isWindowHandleInitialized()),
                d = (0, l.bG)([u.A], () => u.A.getWindow(e)),
                c = (0, l.bG)([eC.A], () => eC.A.getFocusedPID()),
                g = i.useMemo(() => !f.isPlatformEmbedded || (null != c && c !== y.UNSET_PID), [c]),
                [p, E] = i.useState(!1),
                x = i.useRef(!1),
                I = i.useCallback(() => {
                    let e = eC.A.getTargetPID(),
                        n = null != h.A.getVoiceChannelId();
                    s.A.track(ef.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: eC.A.isPinned(ef.uss.TEXT),
                        overlay_render_method: w.Ue[ek.default.getOverlayMethod(e)],
                        unpinned_widget_types: A.A.getAllUnpinnedPinnedWidgets(t),
                    }),
                        (0, e0.Fd)();
                }, [t]),
                O = i.useRef(!1),
                C = i.useRef(null),
                _ = i.useCallback(
                    async (e, t) => {
                        try {
                            if ((await e5(e, C), O.current)) return;
                            e2("cssLoaded", !0);
                        } catch (e) {
                            e4.error("Timed out waiting for CSS to load", e),
                                s.A.setOverlayCrashed(eC.A.getTargetPID(), e),
                                e2("errorMessage", "CSS failed load");
                            return;
                        }
                        try {
                            if ((await e9(e, t), O.current)) return;
                            (0, e0.Mq)();
                        } catch (e) {
                            s.A.setOverlayCrashed(eC.A.getTargetPID(), e), e2("errorMessage", "showInactive failed");
                            return;
                        }
                        await new Promise((t) => {
                            e.setTimeout(() => t(), 100);
                        }),
                            O.current || (E(!0), I());
                    },
                    [I],
                ),
                b = i.useRef(!1);
            return (
                i.useEffect(() => {
                    if (!x.current && (e2("hasUseEffectFired", !0), e2("trackedPidFocused", g), o)) {
                        if (null == d) return void e2("errorMessage", "No targetOverlayWindow");
                        if (!g) {
                            b.current ||
                                (s.A.updateOverlayState(
                                    eC.A.getTargetPID(),
                                    w.AR.WAITING_FOR_PID_FOCUS,
                                    "AppOverlay - not focused",
                                ),
                                (b.current = !0));
                            return;
                        }
                        (x.current = !0), e2("reactInitializationStarted", !0), _(d, e);
                    }
                }, [_, g, e, d, o]),
                (0, a.l0)(() => {
                    clearInterval(C.current), (O.current = !0);
                }),
                (n = (0, l.bG)([m.A], () => m.A.windowSize(null != d ? (0, v.Q2)(d) : void 0))),
                (r = (0, l.bG)([eC.A], () => eC.A.getFocusedWindowHandle())),
                i.useEffect(() => {
                    let e, t;
                    if (null != d && p && d.innerHeight === n.height && d.innerWidth === n.width)
                        return (
                            (e = d.requestAnimationFrame(() => {
                                e = d.requestAnimationFrame(() => {
                                    d.clearTimeout(t), s.A.overlayUIFocusedPid(c ?? y.UNSET_PID, r);
                                });
                            })),
                            (t = d.setTimeout(() => {
                                d.cancelAnimationFrame(e), s.A.overlayUIFocusedPid(c ?? y.UNSET_PID, r);
                            }, 500)),
                            () => {
                                d.cancelAnimationFrame(e), d.clearTimeout(t);
                            }
                        );
                }, [p, d, c, r, n]),
                p
            );
        })(d, ew.G),
        p = (0, l.bG)([eC.A], () => eC.A.getFocusedPID()),
        E = (0, l.bG)([e_.A], () => e_.A.isInputLocked(p), [p]);
    return g
        ? (0, r.jsxs)(c.A, {
              themeOverride: ef.NJ8.MIDNIGHT,
              appContext: ef.BRT.OVERLAY,
              withTitleBar: n,
              windowKey: d,
              title: "Discord Overlay",
              hideModals: E,
              children: [(0, r.jsx)(e$, {}), (0, r.jsx)(o.Al, {})],
          })
        : null;
});
