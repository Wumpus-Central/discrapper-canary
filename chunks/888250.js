n.r(t), n.d(t, { waitForCSSLoad: () => e8, default: () => e9 });
var l = n(627968),
    r = n(64700),
    i = n(17928),
    a = n(684013),
    s = n(964486),
    o = n(573435),
    u = n(626584),
    d = n(567249),
    c = n(979186),
    h = n(38502),
    A = n(309010),
    f = n(531685),
    y = n(723702),
    m = n(19575),
    g = n(9302),
    x = n(365971),
    p = n(777334),
    v = n(41984);
n(321073);
var w = n(503698),
    E = n.n(w),
    I = n(192308),
    _ = n(939249),
    C = n(138134),
    O = n(972213),
    N = n(328162),
    b = n(231723),
    D = n(988393),
    j = n(442433),
    T = n(793574),
    L = n(688810),
    k = n(607470),
    M = n(880144),
    S = n(616356),
    P = n(734057),
    R = n(71393),
    G = n(235058),
    V = n(532624),
    U = n(184809),
    Y = n(625494),
    F = n(350535),
    K = n(589051),
    B = n(223251),
    W = n(834730),
    z = n(696048);
function X(e) {
    let { onClick: t, keybind: n, className: r, IconComponent: i } = e;
    return (0, l.jsxs)("div", {
        className: E()(z.UD, r),
        children: [
            (0, l.jsx)(_.D, {
                className: z.x6,
                onClick: t,
                "aria-hidden": !0,
                children: (0, l.jsx)(i, { size: "md", color: "currentColor", "aria-hidden": !0 }),
            }),
            null != n
                ? (0, l.jsx)(W.E, {
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
var H = n(554146),
    J = n(534514),
    Z = n(352255),
    Q = n(782603),
    q = n(428689),
    $ = n(7807),
    ee = n(131607),
    et = n(49999),
    en = n(375708),
    el = n(632244);
function er(e) {
    let { locked: t } = e,
        [n, i] = (0, ee.kn)(t ? [] : [H.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX], void 0, !0);
    return (r.useEffect(() => {
        if (!t && n === H.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
            return () => {
                n === H.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX && i(et.i.AUTO_DISMISS);
            };
    }, [t, i, n]),
    t || n !== H.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
        ? null
        : (0, l.jsx)("div", {
              className: el.A,
              children: (0, l.jsxs)("div", {
                  className: el.rs,
                  children: [
                      (0, l.jsxs)("div", {
                          className: el.vJ,
                          children: [
                              (0, l.jsx)(J.D, {
                                  variant: "heading-xl/medium",
                                  color: "text-strong",
                                  children: en.intl.string(en.t.jzjJQg),
                              }),
                              (0, l.jsx)(W.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: en.intl.string(en.t["5dOfxb"]),
                              }),
                          ],
                      }),
                      (0, l.jsxs)("div", {
                          className: el.S1,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: el.bS,
                                  children: [
                                      (0, l.jsx)(Z.X, {}),
                                      (0, l.jsx)(W.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: en.intl.string(en.t.S6VRyK),
                                      }),
                                  ],
                              }),
                              (0, l.jsxs)("div", {
                                  className: el.bS,
                                  children: [
                                      (0, l.jsx)(Q.X, {}),
                                      (0, l.jsx)(W.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: en.intl.string(en.t.xq8CKY),
                                      }),
                                  ],
                              }),
                              (0, l.jsxs)("div", {
                                  className: el.bS,
                                  children: [
                                      (0, l.jsx)(q.n, {}),
                                      (0, l.jsx)(W.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: en.intl.string(en.t.GwpRe0),
                                      }),
                                  ],
                              }),
                              (0, l.jsxs)("div", {
                                  className: el.bS,
                                  children: [
                                      (0, l.jsx)($.J, {}),
                                      (0, l.jsx)(W.E, {
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
var ei = n(518009),
    ea = n(351906),
    es = n(243612),
    eo = n(391973),
    eu = n(5463),
    ed = n(129537),
    ec = n(127242),
    eh = n(968898),
    eA = n(481484),
    ef = n(545807),
    ey = n(652215),
    em = n(685411);
let eg = [],
    ex = r.memo(function (e) {
        let {
                widget: t,
                renderWidget: n,
                renderTitle: o,
                renderButtons: u,
                resizeValidation: d,
                containerRenderGate: c,
                className: A,
                dragContainerClassName: y,
            } = e,
            m = (0, i.bG)([h.A], () => h.A.getWidgetConfig(t.type), [t.type]),
            g = (0, eh.RE)(t.id, eh.X1),
            p = (0, eA.A)(),
            [w, I] = r.useState(() => c?.stores ?? eg);
        (0, s.Ay)(() => {
            I(c?.stores ?? eg);
        });
        let _ = (0, i.bG)(w, () => c?.shouldRender({ widget: t, locked: p }) ?? !0, [c, p, t]),
            C = (0, ef.A)(),
            O = (0, i.bG)([f.A], () => f.A.windowSize((0, x.Q2)(C))),
            N = r.useCallback((e, t, n, l, r) => {
                let i = f.A.windowSize((0, x.Q2)((0, ef.b)())),
                    s = (0, eu.NO)(n, i),
                    o = (0, eu.R9)(l, i);
                (0, eo.uD)(t), (0, eo.Ju)({ widgetId: t, anchor: s, size: o });
                let u = e === ed.P.MOVE,
                    d = (0, eu.Ly)(n, i.width, i.height, r.width, r.height);
                a.A.track(ey.HAw.OVERLAY_LAYOUT_UPDATED, {
                    was_resized: !u,
                    was_dragged: u,
                    widget_type: h.A.getWidgetType(t),
                    window_width: i.width,
                    window_height: i.height,
                    widget_width: r.width,
                    widget_height: r.height,
                    widget_left: d.left,
                    widget_top: d.top,
                });
            }, []),
            b = r.useCallback((e) => {
                (0, eo.uD)(e);
            }, []),
            { id: D, pinned: j, zIndex: T, size: L, anchor: k, minSize: M } = t,
            S = r.useMemo(() => (0, eu.fd)(L, O), [L, O]),
            P = (0, eu.Nv)(k, O),
            { resizeX: R, resizeY: G, dragAnywhere: V, constrainAutoSizeToExplicitResizeEvents: U } = m ?? {},
            Y = !p,
            F = j || !p,
            K = r.useMemo(() => ({ minX: 0, minY: 0, maxX: O.width, maxY: O.height }), [O]),
            B = r.useCallback(
                (e) => n({ ...e, widget: t, dragging: null != e.dragOperation, className: A }),
                [t, n, A],
            ),
            W = r.useCallback(
                (e) =>
                    null != o || null != u
                        ? (0, l.jsxs)("div", { className: E()(em.vJ, g && em.vw), children: [o?.(t), u?.(t, e)] })
                        : null,
                [t, o, g, u],
            ),
            z = (0, i.bG)([ec.A], () => ec.A.hasRenderDebugMode(v.x7.WidgetAreas)),
            X = r.useMemo(() => {
                if (null != d) return (e) => d({ ...e, widget: t });
            }, [d, t]);
        return _
            ? (0, l.jsx)(ed.A, {
                  className: E()({ [em.Yz]: z, [em.xu]: z && !j, [em.E]: z && j }, y),
                  id: D,
                  size: S,
                  anchor: P,
                  container: K,
                  minSize: M ?? { width: 0, height: 0 },
                  hidden: !F,
                  locked: p,
                  resizeX: R ?? !1,
                  resizeY: G ?? !1,
                  style: { zIndex: T },
                  dragAnywhere: V ?? !1,
                  constrainAutoSizeToExplicitResizeEvents: U ?? !1,
                  active: Y,
                  onUpdate: N,
                  onClick: b,
                  targetWindow: C,
                  forceShowExtras: g,
                  renderExtras: W,
                  resizeValidation: X,
                  children: B,
              })
            : null;
    });
var ep = n(349230),
    ev = n(644434);
function ew(e) {
    return e.widget.id;
}
function eE(e, t, n, r) {
    return n === ei.wL.YEETED ? null : (0, l.jsx)(ex, { ...t, transitionState: n, cleanUp: r }, e);
}
let eI = [],
    e_ = r.memo(function (e) {
        let { className: t } = e,
            n = (0, ef.A)(),
            a = (0, i.bG)([f.A], () => f.A.windowSize((0, x.Q2)(n))),
            s = (0, i.bG)(
                [h.A, ea.A],
                () => {
                    let e = h.A.getLayout(ev.G);
                    if (null == e) return eI;
                    let t = [];
                    for (let n of e.widgets) {
                        let e = h.A.getWidget(n);
                        if (null == e) continue;
                        let l = ep.A[e.type];
                        null != l &&
                            (null == l.predicate || l.predicate()) &&
                            (ea.A.isOverlayWidgetDisabled(e.type) || t.push({ widget: e, ...l }));
                    }
                    return t;
                },
                [],
                es.VC,
            ),
            o = r.useCallback((e) => (0, l.jsx)("div", { className: t, style: a, children: e }), [t, a]);
        return (0, l.jsx)(ei.F, { items: s, renderItem: eE, getItemKey: ew, wrapChildren: o });
    });
var eC = n(489277),
    eO = n(222506);
let eN = new Set(["shift", "ctrl", "control", "alt", "meta", "os"]);
function eb(e) {
    let { keyCode: t, shiftKey: n, metaKey: l, altKey: r, ctrlKey: i } = e;
    return { keyCode: t, shiftKey: n, metaKey: l, altKey: r, ctrlKey: i };
}
function eD(e, t) {
    return (
        e.keyCode === t.keyCode &&
        e.shiftKey === t.shiftKey &&
        e.metaKey === t.metaKey &&
        e.altKey === t.altKey &&
        e.ctrlKey === t.ctrlKey
    );
}
var ej = n(302614),
    eT = n(296027),
    eL = n(592598),
    ek = n(237984),
    eM = n(528772),
    eS = n(944775),
    eP = n(317084),
    eR = n(427603),
    eG = n(980504),
    eV = n(923779);
let eU = r.memo(function () {
    let [e, t] = (0, i.yK)([eM.A], () => [eM.A.enabled, eM.A.keepOpen]),
        n = (0, i.bG)([A.A], () => A.A.getVoiceChannelId()),
        r = (0, i.bG)([P.A], () => P.A.getChannel(n), [n]),
        a = r?.getGuildId();
    return e && null != r
        ? (0, l.jsx)(ej.A, {
              className: eV.k,
              children: (0, l.jsx)(eP.A, {
                  width: eG.ed.width,
                  height: eG.ed.height,
                  guildId: a,
                  channel: r,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, eR.A)();
                      null != e && (0, eS.Lk)(e);
                  },
                  analyticsSource: "overlay",
              }),
          })
        : null;
});
var eY = n(672396),
    eF = n(649831);
let eK = !y.isPlatformEmbedded && !1,
    eB = eK
        ? (0, l.jsx)(k.A, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: eF.pN,
              autoPlay: !0,
              loop: !0,
              muted: !0,
          })
        : null;
function eW(e) {
    e.preventDefault();
}
function ez(e) {
    (0, j.L3)(
        e,
        async () => {
            let { default: e } = await n.e("86437").then(n.bind(n, 171300));
            return (t) => (0, l.jsx)(e, { ...t, layoutId: ev.G, version: 4 });
        },
        { context: ey.BRT.OVERLAY },
    );
}
let eX = r.memo(function (e) {
        let { keybind: t, onClick: n, locked: r } = e;
        return (0, l.jsx)(_.D, {
            className: E()(eF.LK, { [eF.Zo]: !r, [eF.vZ]: r }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: l, button: r } = e;
                r === ey.hE4.PRIMARY && t === l && n();
            },
            onContextMenu: ez,
            children: r
                ? null
                : (0, l.jsxs)(ej.A, {
                      className: eF.BE,
                      children: [
                          (0, l.jsx)(X, { onClick: () => (0, ek.b)(T.A.OVERLAY, ey.BRT.OVERLAY), IconComponent: C.i }),
                          (0, l.jsx)(X, { keybind: t, onClick: n, IconComponent: O.d }),
                      ],
                  }),
        });
    }),
    eH = r.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, l.jsx)(ej.A, {
                  className: eF.BE,
                  children: (0, l.jsx)(X, {
                      onClick: () => a.A.setInputLocked(!1, eC.A.getTargetPID()),
                      IconComponent: N.w,
                  }),
              })
            : null;
    });
function eJ() {
    a.A.setInputLocked(!0, eC.A.getTargetPID());
}
function eZ(e) {
    let t = eO.A.isInputLocked(eC.A.getTargetPID());
    "alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? Y._.dispatch(ey.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && Y._.dispatch(ey.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })),
        (function (e, t) {
            if (t || "keydown" !== e.type.toLowerCase()) return;
            let n = e.key.toLowerCase();
            ("escape" === n || "esc" === n) && a.A.setInputLocked(!0, eC.A.getTargetPID());
        })(e, t),
        eK &&
            (function (e) {
                if ("keydown" !== e.type.toLowerCase() || e.repeat) return !1;
                let t = V.Ay.getOverlayKeybind();
                return (
                    !!t.enabled &&
                    0 !== t.shortcut.length &&
                    (0, F.pi)(t.shortcut).some(
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
            (e.preventDefault(), e.stopPropagation(), a.A.setInputLocked(!t, eC.A.getTargetPID()));
}
let eQ = r.memo(function () {
        return (0, i.bG)([ec.A], () => ec.A.hasRenderDebugMode(v.x7.WindowContainer))
            ? (0, l.jsx)("div", { className: eF.N1 })
            : null;
    }),
    eq = r.memo(function () {
        let e = (0, ef.A)(),
            t = (0, i.bG)([eC.A], () => eC.A.getTargetPID()),
            n = (0, i.bG)([eO.A], () => eO.A.isInputLocked(t), [t]),
            a = (0, i.bG)([eC.A], () => eC.A.isFocused(t), [t]),
            s = (0, i.bG)(
                [V.Ay],
                () => (null != V.Ay.getOverlayKeybind() ? (0, F.dI)(V.Ay.getOverlayKeybind()?.shortcut, !0) : "???"),
                [],
            );
        return (
            r.useEffect(() => {
                if ((Y._.dispatch(ey.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), n))
                    return (
                        (0, I.closeAllModalsInContext)(b.KX),
                        e.addEventListener("contextmenu", eW, !1),
                        () => {
                            e.removeEventListener("contextmenu", eW, !1);
                        }
                    );
                e.removeEventListener("contextmenu", eW, !1);
            }, [n, e]),
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(eX, { locked: n, keybind: s, onClick: eJ }),
                    (0, l.jsx)(e_, { className: E()({ [eF.ZK]: n, [eF.al]: !n }) }),
                    eK && (0, l.jsx)(eH, { locked: n, focused: a }),
                    (0, l.jsx)(er, { locked: n }),
                ],
            })
        );
    });
function e$() {
    var e, t;
    let n,
        o,
        u,
        d,
        c,
        h,
        y,
        m,
        g,
        p,
        v,
        w,
        E = (0, ef.A)(),
        I = (0, i.bG)([U.default], () => U.default.incompatibleApp),
        _ = (0, i.bG)([f.A], () => {
            let e = (0, x.Q2)(E),
                t = f.A.windowSize(e);
            return t.height < 360 || t.width < 640;
        }, [E]),
        { analyticsLocations: C } = (0, L.Ay)(T.A.OVERLAY);
    return (
        (n = (0, ef.A)()),
        (o = (0, i.bG)([eC.A], () => eC.A.getTargetPID(), [])),
        (u = (0, i.bG)([V.Ay], () => {
            let e = V.Ay.getOverlayKeybind();
            return null != e ? e.shortcut : [];
        }, [])),
        (d = (0, i.bG)([eO.A], () => eO.A.isInputLocked(o), [o])),
        (c = (0, i.bG)([f.A], () => {
            let e = (0, x.Q2)(n);
            return f.A.isVisible(e) && f.A.isFocused(e);
        }, [n])),
        (h = r.useRef([])),
        (y = r.useMemo(() => (0, F.pi)(u).map((e) => eb(e)), [u])),
        (m = r.useMemo(() => u.length > 0, [u])),
        (g = !d && m && c),
        r.useEffect(() => {
            h.current = [];
        }, [d, y]),
        r.useEffect(() => {
            if (!g) {
                h.current = [];
                return;
            }
            let e = (e) => {
                    let t = eb(e),
                        n = h.current,
                        l = n.some((e) => eD(e, t)),
                        r = (function (e) {
                            let t = e.key.toLowerCase();
                            for (let e of eN) if (t.includes(e)) return !0;
                            return !1;
                        })(e);
                    l || r || n.push(t),
                        0 !== y.length &&
                            n.length === y.length &&
                            y.every((e) => n.some((t) => eD(e, t))) &&
                            (e.preventDefault(), e.stopPropagation());
                },
                t = (e) => {
                    let t = eb(e),
                        n = h.current,
                        l = n.findIndex((e) => eD(e, t));
                    l > -1 && n.splice(l, 1);
                };
            return (
                n.addEventListener("keydown", e, !0),
                n.addEventListener("keyup", t, !0),
                () => {
                    n.removeEventListener("keydown", e, !0), n.removeEventListener("keyup", t, !0);
                }
            );
        }, [g, y, n]),
        (0, s.Ay)(() => {
            (0, K.E)();
        }),
        (p = (0, ef.A)()),
        (e = () => {
            a.A.overlayReady(eC.A.getTargetPID()),
                p.addEventListener("keydown", eZ, !0),
                p.addEventListener("keyup", eZ);
        }),
        (t = () => {
            p.removeEventListener("keydown", eZ, !0), p.removeEventListener("keyup", eZ);
        }),
        (v = r.useRef({ mount: e, unmount: t })),
        r.useEffect(() => {
            v.current = { mount: e, unmount: t };
        }),
        r.useEffect(
            () => (
                v.current.mount(),
                () => {
                    v.current.unmount();
                }
            ),
            [],
        ),
        ((w = r.useRef(null)),
        (0, s.Ay)(() => {
            let e = (0, es.qv)(),
                t = A.A.getVoiceChannelId(),
                n = P.A.getChannel(t),
                l = null != n ? R.A.getGuild(n.guild_id) : null,
                r = null != S.A.getCurrentUserActiveStream(),
                i = null != t,
                s = (0, M.A)(G.Ay) && !r && null != e,
                o = i && null != l && null != t,
                u = eC.A.getTargetPID();
            if (eT.default.hasChangedRenderMode(u)) return;
            let d = eL.A.isNotificationDisabled(eY.KS.WelcomeNudge),
                c = eL.A.isNotificationDisabled(eY.KS.GoLiveNudge),
                h = eL.A.isNotificationDisabled(eY.KS.ActivityInvite),
                f = [];
            !d &&
                (f.push({ type: eY.Jr.WELCOME }),
                !c &&
                    (s && o
                        ? f.push({ type: eY.Jr.GO_LIVE_VOICE, game: e, voiceChannelId: t, voiceGuild: l })
                        : s && f.push({ type: eY.Jr.GO_LIVE_NON_VOICE, game: e })),
                h || f.push({ type: eY.Jr.CONTENT_INVENTORY, entries: [] })),
                null != w.current && clearTimeout(w.current),
                (w.current = setTimeout(() => {
                    a.A.overlayMounted(...f);
                }, 1e3));
        }),
        (0, s.l0)(() => {
            null != w.current && (clearTimeout(w.current), (w.current = null));
        }),
        _ || I)
            ? null
            : (0, l.jsx)(L.f5, {
                  value: C,
                  children: (0, l.jsxs)("div", {
                      id: "overlay-container",
                      className: eF.Lw,
                      children: [
                          eB,
                          (0, l.jsx)(eq, {}),
                          (0, l.jsx)(eU, {}),
                          (0, l.jsx)(B.A, {}),
                          (0, l.jsx)(D.N, { appContext: ey.BRT.OVERLAY }),
                          (0, l.jsx)(eQ, {}),
                      ],
                  }),
              })
    );
}
var e0 = n(682763),
    e1 = n(228366);
function e3(e, t) {
    eC.A.getPopoutInitializationStages()[e] !== t &&
        e1.h.dispatch({ type: "OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED", update: { [e]: t } });
}
n(96175), n(21076), n(921955);
let e2 = !y.isPlatformEmbedded && !1,
    e4 = new u.A("AppOverlay");
function e8(e, t) {
    return new Promise((n, l) => {
        let r = Date.now();
        t.current = setInterval(() => {
            if (
                (function () {
                    let t = Array.from(e.document.querySelectorAll('link[rel="stylesheet"]')),
                        n = e.document.styleSheets,
                        l = new Map();
                    for (let e of n) null != e.href && l.set(e.href, e);
                    for (let e of t) {
                        if (null == e.href) continue;
                        let t = l.get(e.href);
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
            Date.now() - r > 12e4 && (l(Error("Timed out waiting for CSS to load")), clearInterval(t.current));
        }, 200);
    });
}
async function e5(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (y.isPlatformEmbedded) {
        try {
            await m.Ay.isAlwaysOnTop(t);
        } catch (e) {
            e4.error("Window does not exist while trying to show inactive", e), (0, p.pj)(e, v.Ue.OutOfProcess);
        }
        for (let r = 0; r < l; r++)
            try {
                if (!(await m.Ay.waitForIPCReady(n, e))) throw Error("IPC not ready");
                m.Ay.showInactive(t);
                return;
            } catch (e) {
                if (e.message?.includes("IPC") && r < l - 1) {
                    let t = (n / 2) * Math.pow(2, r + 1);
                    e4.error(`Failed to show inactive, retrying in ${t}ms`, e),
                        await new Promise((e) => setTimeout(e, t));
                } else throw ((0, p.pj)(e, v.Ue.OutOfProcess), e);
            }
    }
}
function e6() {
    a.A.setFocusedPID(g.DEV_PID, null);
}
function e7() {
    a.A.setFocusedPID(null, null);
}
let e9 = r.memo(function (e) {
    let t,
        { withTitleBar: n, windowKey: u } = e;
    (t = (0, i.bG)([d.A], () => d.A.getWindow(u))),
        (0, s.Ay)(() => {
            if (null != t)
                return (
                    e2 &&
                        (t.document.hasFocus() && a.A.setFocusedPID(g.DEV_PID, null),
                        t.addEventListener("focus", e6),
                        t.addEventListener("blur", e7)),
                    () => {
                        e2 && (t.removeEventListener("focus", e6), t.removeEventListener("blur", e7));
                    }
                );
        });
    let m = (function (e, t) {
            let n,
                l,
                o = (0, i.bG)([eC.A], () => !y.isPlatformEmbedded || eC.A.isWindowHandleInitialized()),
                u = (0, i.bG)([d.A], () => d.A.getWindow(e)),
                c = (0, i.bG)([eC.A], () => eC.A.getFocusedPID()),
                m = r.useMemo(() => !y.isPlatformEmbedded || (null != c && c !== g.UNSET_PID), [c]),
                [p, w] = r.useState(!1),
                E = r.useRef(!1),
                I = r.useCallback(() => {
                    let e = eC.A.getTargetPID(),
                        n = null != A.A.getVoiceChannelId();
                    a.A.track(ey.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: eC.A.isPinned(ey.uss.TEXT),
                        overlay_render_method: v.Ue[eT.default.getOverlayMethod(e)],
                        unpinned_widget_types: h.A.getAllUnpinnedPinnedWidgets(t),
                    }),
                        (0, e0.Fd)();
                }, [t]),
                _ = r.useRef(!1),
                C = r.useRef(null),
                O = r.useCallback(
                    async (e, t) => {
                        try {
                            if ((await e8(e, C), _.current)) return;
                            e3("cssLoaded", !0);
                        } catch (e) {
                            e4.error("Timed out waiting for CSS to load", e),
                                a.A.setOverlayCrashed(eC.A.getTargetPID(), e),
                                e3("errorMessage", "CSS failed load");
                            return;
                        }
                        try {
                            if ((await e5(e, t), _.current)) return;
                            (0, e0.Mq)();
                        } catch (e) {
                            a.A.setOverlayCrashed(eC.A.getTargetPID(), e), e3("errorMessage", "showInactive failed");
                            return;
                        }
                        await new Promise((t) => {
                            e.setTimeout(() => t(), 100);
                        }),
                            _.current || (w(!0), I());
                    },
                    [I],
                ),
                N = r.useRef(!1);
            return (
                r.useEffect(() => {
                    if (!E.current && (e3("hasUseEffectFired", !0), e3("trackedPidFocused", m), o)) {
                        if (null == u) return void e3("errorMessage", "No targetOverlayWindow");
                        if (!m) {
                            N.current ||
                                (a.A.updateOverlayState(
                                    eC.A.getTargetPID(),
                                    v.AR.WAITING_FOR_PID_FOCUS,
                                    "AppOverlay - not focused",
                                ),
                                (N.current = !0));
                            return;
                        }
                        (E.current = !0), e3("reactInitializationStarted", !0), O(u, e);
                    }
                }, [O, m, e, u, o]),
                (0, s.l0)(() => {
                    clearInterval(C.current), (_.current = !0);
                }),
                (n = (0, i.bG)([f.A], () => f.A.windowSize(null != u ? (0, x.Q2)(u) : void 0))),
                (l = (0, i.bG)([eC.A], () => eC.A.getFocusedWindowHandle())),
                r.useEffect(() => {
                    let e, t;
                    if (null != u && p && u.innerHeight === n.height && u.innerWidth === n.width)
                        return (
                            (e = u.requestAnimationFrame(() => {
                                e = u.requestAnimationFrame(() => {
                                    u.clearTimeout(t), a.A.overlayUIFocusedPid(c ?? g.UNSET_PID, l);
                                });
                            })),
                            (t = u.setTimeout(() => {
                                u.cancelAnimationFrame(e), a.A.overlayUIFocusedPid(c ?? g.UNSET_PID, l);
                            }, 500)),
                            () => {
                                u.cancelAnimationFrame(e), u.clearTimeout(t);
                            }
                        );
                }, [p, u, c, l, n]),
                p
            );
        })(u, ev.G),
        p = (0, i.bG)([eC.A], () => eC.A.getFocusedPID()),
        w = (0, i.bG)([eO.A], () => eO.A.isInputLocked(p), [p]);
    return m
        ? (0, l.jsxs)(c.A, {
              themeOverride: ey.NJ8.MIDNIGHT,
              appContext: ey.BRT.OVERLAY,
              withTitleBar: n,
              windowKey: u,
              title: "Discord Overlay",
              hideModals: w,
              children: [(0, l.jsx)(e$, {}), (0, l.jsx)(o.Al, {})],
          })
        : null;
});
