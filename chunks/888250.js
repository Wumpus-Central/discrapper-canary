"use strict";
n.r(t), n.d(t, { waitForCSSLoad: () => e4, default: () => e7 });
var r = n(627968),
    i = n(64700),
    a = n(17928),
    l = n(684013),
    s = n(964486),
    o = n(573435),
    d = n(626584),
    c = n(567249),
    u = n(979186),
    _ = n(38502),
    h = n(309010),
    f = n(531685),
    p = n(723702),
    A = n(19575),
    g = n(9302),
    m = n(365971),
    v = n(777334),
    y = n(41984);
n(321073);
var E = n(503698),
    b = n.n(E),
    I = n(192308),
    w = n(939249),
    x = n(138134),
    C = n(972213),
    T = n(328162),
    N = n(231723),
    O = n(988393),
    L = n(442433),
    S = n(793574),
    k = n(688810),
    D = n(607470),
    R = n(880144),
    P = n(616356),
    j = n(734057),
    M = n(71393),
    G = n(969341),
    U = n(532624),
    B = n(256415),
    W = n(625494),
    F = n(350535),
    V = n(589051),
    z = n(223251),
    H = n(834730),
    Y = n(696048);
function K(e) {
    let { onClick: t, keybind: n, className: i, IconComponent: a } = e;
    return (0, r.jsxs)("div", {
        className: b()(Y.UD, i),
        children: [
            (0, r.jsx)(w.D, {
                className: Y.x6,
                onClick: t,
                "aria-hidden": !0,
                children: (0, r.jsx)(a, { size: "md", color: "currentColor", "aria-hidden": !0 }),
            }),
            null != n
                ? (0, r.jsx)(H.E, {
                      className: Y.P,
                      "aria-hidden": !0,
                      variant: "text-xxs/bold",
                      color: "interactive-text-default",
                      children: n,
                  })
                : null,
        ],
    });
}
var Z = n(554146),
    X = n(534514),
    J = n(352255),
    Q = n(782603),
    q = n(428689),
    $ = n(7807),
    ee = n(932001),
    et = n(49999),
    en = n(985018),
    er = n(632244);
function ei(e) {
    let { locked: t } = e,
        [n, a] = (0, ee.kn)(t ? [] : [Z.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX], void 0, !0);
    return (i.useEffect(() => {
        if (!t && n === Z.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
            return () => {
                n === Z.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX && a(et.i.AUTO_DISMISS);
            };
    }, [t, a, n]),
    t || n !== Z.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
        ? null
        : (0, r.jsx)("div", {
              className: er.A,
              children: (0, r.jsxs)("div", {
                  className: er.rs,
                  children: [
                      (0, r.jsxs)("div", {
                          className: er.vJ,
                          children: [
                              (0, r.jsx)(X.D, {
                                  variant: "heading-xl/medium",
                                  color: "text-strong",
                                  children: en.intl.string(en.t.jzjJQg),
                              }),
                              (0, r.jsx)(H.E, {
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
                                      (0, r.jsx)(J.X, {}),
                                      (0, r.jsx)(H.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: en.intl.string(en.t.S6VRyK),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: er.bS,
                                  children: [
                                      (0, r.jsx)(Q.X, {}),
                                      (0, r.jsx)(H.E, {
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
                                      (0, r.jsx)(H.E, {
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
                                      (0, r.jsx)(H.E, {
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
var ea = n(518009),
    el = n(351906),
    es = n(243612),
    eo = n(391973),
    ed = n(5463),
    ec = n(129537),
    eu = n(127242),
    e_ = n(968898),
    eh = n(481484),
    ef = n(545807),
    ep = n(652215),
    eA = n(685411);
let eg = [],
    em = i.memo(function (e) {
        let {
                widget: t,
                renderWidget: n,
                renderTitle: o,
                renderButtons: d,
                resizeValidation: c,
                containerRenderGate: u,
                className: h,
                dragContainerClassName: p,
            } = e,
            A = (0, a.bG)([_.A], () => _.A.getWidgetConfig(t.type), [t.type]),
            g = (0, e_.RE)(t.id, e_.X1),
            v = (0, eh.A)(),
            [E, I] = i.useState(() => u?.stores ?? eg);
        (0, s.Ay)(() => {
            I(u?.stores ?? eg);
        });
        let w = (0, a.bG)(E, () => u?.shouldRender({ widget: t, locked: v }) ?? !0, [u, v, t]),
            x = (0, ef.A)(),
            C = (0, a.bG)([f.A], () => f.A.windowSize((0, m.Q2)(x))),
            T = i.useCallback((e, t, n, r, i) => {
                let a = f.A.windowSize((0, m.Q2)((0, ef.b)())),
                    s = (0, ed.NO)(n, a),
                    o = (0, ed.R9)(r, a);
                (0, eo.uD)(t), (0, eo.Ju)({ widgetId: t, anchor: s, size: o });
                let d = e === ec.P.MOVE,
                    c = (0, ed.Ly)(n, a.width, a.height, i.width, i.height);
                l.A.track(ep.HAw.OVERLAY_LAYOUT_UPDATED, {
                    was_resized: !d,
                    was_dragged: d,
                    widget_type: _.A.getWidgetType(t),
                    window_width: a.width,
                    window_height: a.height,
                    widget_width: i.width,
                    widget_height: i.height,
                    widget_left: c.left,
                    widget_top: c.top,
                });
            }, []),
            N = i.useCallback((e) => {
                (0, eo.uD)(e);
            }, []),
            { id: O, pinned: L, zIndex: S, size: k, anchor: D, minSize: R } = t,
            P = i.useMemo(() => (0, ed.fd)(k, C), [k, C]),
            j = (0, ed.Nv)(D, C),
            { resizeX: M, resizeY: G, dragAnywhere: U, constrainAutoSizeToExplicitResizeEvents: B } = A ?? {},
            W = !v,
            F = L || !v,
            V = i.useMemo(() => ({ minX: 0, minY: 0, maxX: C.width, maxY: C.height }), [C]),
            z = i.useCallback(
                (e) => n({ ...e, widget: t, dragging: null != e.dragOperation, className: h }),
                [t, n, h],
            ),
            H = i.useCallback(
                (e) =>
                    null != o || null != d
                        ? (0, r.jsxs)("div", { className: b()(eA.vJ, g && eA.vw), children: [o?.(t), d?.(t, e)] })
                        : null,
                [t, o, g, d],
            ),
            Y = (0, a.bG)([eu.A], () => eu.A.hasRenderDebugMode(y.x7.WidgetAreas)),
            K = i.useMemo(() => {
                if (null != c) return (e) => c({ ...e, widget: t });
            }, [c, t]);
        return w
            ? (0, r.jsx)(ec.A, {
                  className: b()({ [eA.Yz]: Y, [eA.xu]: Y && !L, [eA.E]: Y && L }, p),
                  id: O,
                  size: P,
                  anchor: j,
                  container: V,
                  minSize: R ?? { width: 0, height: 0 },
                  hidden: !F,
                  locked: v,
                  resizeX: M ?? !1,
                  resizeY: G ?? !1,
                  style: { zIndex: S },
                  dragAnywhere: U ?? !1,
                  constrainAutoSizeToExplicitResizeEvents: B ?? !1,
                  active: W,
                  onUpdate: T,
                  onClick: N,
                  targetWindow: x,
                  forceShowExtras: g,
                  renderExtras: H,
                  resizeValidation: K,
                  children: z,
              })
            : null;
    });
var ev = n(349230),
    ey = n(644434);
function eE(e) {
    return e.widget.id;
}
function eb(e, t, n, i) {
    return n === ea.wL.YEETED ? null : (0, r.jsx)(em, { ...t, transitionState: n, cleanUp: i }, e);
}
let eI = [],
    ew = i.memo(function (e) {
        let { className: t } = e,
            n = (0, ef.A)(),
            l = (0, a.bG)([f.A], () => f.A.windowSize((0, m.Q2)(n))),
            s = (0, a.bG)(
                [_.A, el.A],
                () => {
                    let e = _.A.getLayout(ey.G);
                    if (null == e) return eI;
                    let t = [];
                    for (let n of e.widgets) {
                        let e = _.A.getWidget(n);
                        if (null == e) continue;
                        let r = ev.A[e.type];
                        null != r &&
                            (null == r.predicate || r.predicate()) &&
                            (el.A.isOverlayWidgetDisabled(e.type) || t.push({ widget: e, ...r }));
                    }
                    return t;
                },
                [],
                es.VC,
            ),
            o = i.useCallback((e) => (0, r.jsx)("div", { className: t, style: l, children: e }), [t, l]);
        return (0, r.jsx)(ea.F, { items: s, renderItem: eb, getItemKey: eE, wrapChildren: o });
    });
var ex = n(489277),
    eC = n(222506);
let eT = new Set(["shift", "ctrl", "control", "alt", "meta", "os"]);
function eN(e) {
    let { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: a } = e;
    return { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: a };
}
function eO(e, t) {
    return (
        e.keyCode === t.keyCode &&
        e.shiftKey === t.shiftKey &&
        e.metaKey === t.metaKey &&
        e.altKey === t.altKey &&
        e.ctrlKey === t.ctrlKey
    );
}
var eL = n(302614),
    eS = n(833551),
    ek = n(592598),
    eD = n(237984),
    eR = n(528772),
    eP = n(944775),
    ej = n(317084),
    eM = n(427603),
    eG = n(980504),
    eU = n(923779);
let eB = i.memo(function () {
    let [e, t] = (0, a.yK)([eR.A], () => [eR.A.enabled, eR.A.keepOpen]),
        n = (0, a.bG)([h.A], () => h.A.getVoiceChannelId()),
        i = (0, a.bG)([j.A], () => j.A.getChannel(n), [n]),
        l = i?.getGuildId();
    return e && null != i
        ? (0, r.jsx)(eL.A, {
              className: eU.k,
              children: (0, r.jsx)(ej.A, {
                  width: eG.ed.width,
                  height: eG.ed.height,
                  guildId: l,
                  channel: i,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, eM.A)();
                      null != e && (0, eP.Lk)(e);
                  },
                  analyticsSource: "overlay",
              }),
          })
        : null;
});
var eW = n(672396),
    eF = n(649831);
let eV = !p.isPlatformEmbedded && !1,
    ez = eV
        ? (0, r.jsx)(D.A, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: eF.pN,
              autoPlay: !0,
              loop: !0,
              muted: !0,
          })
        : null;
function eH(e) {
    e.preventDefault();
}
function eY(e) {
    (0, L.L3)(
        e,
        async () => {
            let { default: e } = await n.e("86437").then(n.bind(n, 171300));
            return (t) => (0, r.jsx)(e, { ...t, layoutId: ey.G, version: 4 });
        },
        { context: ep.BRT.OVERLAY },
    );
}
let eK = i.memo(function (e) {
        let { keybind: t, onClick: n, locked: i } = e;
        return (0, r.jsx)(w.D, {
            className: b()(eF.LK, { [eF.Zo]: !i, [eF.vZ]: i }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: r, button: i } = e;
                i === ep.hE4.PRIMARY && t === r && n();
            },
            onContextMenu: eY,
            children: i
                ? null
                : (0, r.jsxs)(eL.A, {
                      className: eF.BE,
                      children: [
                          (0, r.jsx)(K, { onClick: () => (0, eD.b)(S.A.OVERLAY, ep.BRT.OVERLAY), IconComponent: x.i }),
                          (0, r.jsx)(K, { keybind: t, onClick: n, IconComponent: C.d }),
                      ],
                  }),
        });
    }),
    eZ = i.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, r.jsx)(eL.A, {
                  className: eF.BE,
                  children: (0, r.jsx)(K, {
                      onClick: () => l.A.setInputLocked(!1, ex.A.getTargetPID()),
                      IconComponent: T.w,
                  }),
              })
            : null;
    });
function eX() {
    l.A.setInputLocked(!0, ex.A.getTargetPID());
}
function eJ(e) {
    let t = eC.A.isInputLocked(ex.A.getTargetPID());
    "alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? W._.dispatch(ep.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && W._.dispatch(ep.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })),
        (function (e, t) {
            if (t || "keydown" !== e.type.toLowerCase()) return;
            let n = e.key.toLowerCase();
            ("escape" === n || "esc" === n) && l.A.setInputLocked(!0, ex.A.getTargetPID());
        })(e, t),
        eV &&
            (function (e) {
                if ("keydown" !== e.type.toLowerCase() || e.repeat) return !1;
                let t = U.Ay.getOverlayKeybind();
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
            (e.preventDefault(), e.stopPropagation(), l.A.setInputLocked(!t, ex.A.getTargetPID()));
}
let eQ = i.memo(function () {
        return (0, a.bG)([eu.A], () => eu.A.hasRenderDebugMode(y.x7.WindowContainer))
            ? (0, r.jsx)("div", { className: eF.N1 })
            : null;
    }),
    eq = i.memo(function () {
        let e = (0, ef.A)(),
            t = (0, a.bG)([ex.A], () => ex.A.getTargetPID()),
            n = (0, a.bG)([eC.A], () => eC.A.isInputLocked(t), [t]),
            l = (0, a.bG)([ex.A], () => ex.A.isFocused(t), [t]),
            s = (0, a.bG)(
                [U.Ay],
                () => (null != U.Ay.getOverlayKeybind() ? (0, F.dI)(U.Ay.getOverlayKeybind()?.shortcut, !0) : "???"),
                [],
            );
        return (
            i.useEffect(() => {
                if ((W._.dispatch(ep.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), n))
                    return (
                        (0, I.closeAllModalsInContext)(N.KX),
                        e.addEventListener("contextmenu", eH, !1),
                        () => {
                            e.removeEventListener("contextmenu", eH, !1);
                        }
                    );
                e.removeEventListener("contextmenu", eH, !1);
            }, [n, e]),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(eK, { locked: n, keybind: s, onClick: eX }),
                    (0, r.jsx)(ew, { className: b()({ [eF.ZK]: n, [eF.al]: !n }) }),
                    eV && (0, r.jsx)(eZ, { locked: n, focused: l }),
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
        c,
        u,
        _,
        p,
        A,
        g,
        v,
        y,
        E,
        b = (0, ef.A)(),
        I = (0, a.bG)([B.default], () => B.default.incompatibleApp),
        w = (0, a.bG)([f.A], () => {
            let e = (0, m.Q2)(b),
                t = f.A.windowSize(e);
            return t.height < 360 || t.width < 640;
        }, [b]),
        { analyticsLocations: x } = (0, k.Ay)(S.A.OVERLAY);
    return (
        (n = (0, ef.A)()),
        (o = (0, a.bG)([ex.A], () => ex.A.getTargetPID(), [])),
        (d = (0, a.bG)([U.Ay], () => {
            let e = U.Ay.getOverlayKeybind();
            return null != e ? e.shortcut : [];
        }, [])),
        (c = (0, a.bG)([eC.A], () => eC.A.isInputLocked(o), [o])),
        (u = (0, a.bG)([f.A], () => {
            let e = (0, m.Q2)(n);
            return f.A.isVisible(e) && f.A.isFocused(e);
        }, [n])),
        (_ = i.useRef([])),
        (p = i.useMemo(() => (0, F.pi)(d).map((e) => eN(e)), [d])),
        (A = i.useMemo(() => d.length > 0, [d])),
        (g = !c && A && u),
        i.useEffect(() => {
            _.current = [];
        }, [c, p]),
        i.useEffect(() => {
            if (!g) {
                _.current = [];
                return;
            }
            let e = (e) => {
                    let t = eN(e),
                        n = _.current,
                        r = n.some((e) => eO(e, t)),
                        i = (function (e) {
                            let t = e.key.toLowerCase();
                            for (let e of eT) if (t.includes(e)) return !0;
                            return !1;
                        })(e);
                    r || i || n.push(t),
                        0 !== p.length &&
                            n.length === p.length &&
                            p.every((e) => n.some((t) => eO(e, t))) &&
                            (e.preventDefault(), e.stopPropagation());
                },
                t = (e) => {
                    let t = eN(e),
                        n = _.current,
                        r = n.findIndex((e) => eO(e, t));
                    r > -1 && n.splice(r, 1);
                };
            return (
                n.addEventListener("keydown", e, !0),
                n.addEventListener("keyup", t, !0),
                () => {
                    n.removeEventListener("keydown", e, !0), n.removeEventListener("keyup", t, !0);
                }
            );
        }, [g, p, n]),
        (0, s.Ay)(() => {
            (0, V.E)();
        }),
        (v = (0, ef.A)()),
        (e = () => {
            l.A.overlayReady(ex.A.getTargetPID()),
                v.addEventListener("keydown", eJ, !0),
                v.addEventListener("keyup", eJ);
        }),
        (t = () => {
            v.removeEventListener("keydown", eJ, !0), v.removeEventListener("keyup", eJ);
        }),
        (y = i.useRef({ mount: e, unmount: t })),
        i.useEffect(() => {
            y.current = { mount: e, unmount: t };
        }),
        i.useEffect(
            () => (
                y.current.mount(),
                () => {
                    y.current.unmount();
                }
            ),
            [],
        ),
        ((E = i.useRef(null)),
        (0, s.Ay)(() => {
            let e = (0, es.qv)(),
                t = h.A.getVoiceChannelId(),
                n = j.A.getChannel(t),
                r = null != n ? M.A.getGuild(n.guild_id) : null,
                i = null != P.A.getCurrentUserActiveStream(),
                a = null != t,
                s = (0, R.A)(G.Ay) && !i && null != e,
                o = a && null != r && null != t,
                d = ex.A.getTargetPID();
            if (eS.default.hasChangedRenderMode(d)) return;
            let c = ek.A.isNotificationDisabled(eW.KS.WelcomeNudge),
                u = ek.A.isNotificationDisabled(eW.KS.GoLiveNudge),
                _ = ek.A.isNotificationDisabled(eW.KS.ActivityInvite),
                f = [];
            !c &&
                (f.push({ type: eW.Jr.WELCOME }),
                !u &&
                    (s && o
                        ? f.push({ type: eW.Jr.GO_LIVE_VOICE, game: e, voiceChannelId: t, voiceGuild: r })
                        : s && f.push({ type: eW.Jr.GO_LIVE_NON_VOICE, game: e })),
                _ || f.push({ type: eW.Jr.CONTENT_INVENTORY, entries: [] })),
                null != E.current && clearTimeout(E.current),
                (E.current = setTimeout(() => {
                    l.A.overlayMounted(...f);
                }, 1e3));
        }),
        (0, s.l0)(() => {
            null != E.current && (clearTimeout(E.current), (E.current = null));
        }),
        w || I)
            ? null
            : (0, r.jsx)(k.f5, {
                  value: x,
                  children: (0, r.jsxs)("div", {
                      id: "overlay-container",
                      className: eF.Lw,
                      children: [
                          ez,
                          (0, r.jsx)(eq, {}),
                          (0, r.jsx)(eB, {}),
                          (0, r.jsx)(z.A, {}),
                          (0, r.jsx)(O.N, { appContext: ep.BRT.OVERLAY }),
                          (0, r.jsx)(eQ, {}),
                      ],
                  }),
              })
    );
}
var e0 = n(682763),
    e1 = n(228366);
function e3(e, t) {
    ex.A.getPopoutInitializationStages()[e] !== t &&
        e1.h.dispatch({ type: "OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED", update: { [e]: t } });
}
n(96175), n(21076), n(921955);
let e2 = !p.isPlatformEmbedded && !1,
    e9 = new d.A("AppOverlay");
function e4(e, t) {
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
async function e5(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (p.isPlatformEmbedded) {
        try {
            await A.Ay.isAlwaysOnTop(t);
        } catch (e) {
            e9.error("Window does not exist while trying to show inactive", e), (0, v.pj)(e, y.Ue.OutOfProcess);
        }
        for (let i = 0; i < r; i++)
            try {
                if (!(await A.Ay.waitForIPCReady(n, e))) throw Error("IPC not ready");
                A.Ay.showInactive(t);
                return;
            } catch (e) {
                if (e.message?.includes("IPC") && i < r - 1) {
                    let t = (n / 2) * Math.pow(2, i + 1);
                    e9.error(`Failed to show inactive, retrying in ${t}ms`, e),
                        await new Promise((e) => setTimeout(e, t));
                } else throw ((0, v.pj)(e, y.Ue.OutOfProcess), e);
            }
    }
}
function e8() {
    l.A.setFocusedPID(g.DEV_PID, null);
}
function e6() {
    l.A.setFocusedPID(null, null);
}
let e7 = i.memo(function (e) {
    let t,
        { withTitleBar: n, windowKey: d } = e;
    (t = (0, a.bG)([c.A], () => c.A.getWindow(d))),
        (0, s.Ay)(() => {
            if (null != t)
                return (
                    e2 &&
                        (t.document.hasFocus() && l.A.setFocusedPID(g.DEV_PID, null),
                        t.addEventListener("focus", e8),
                        t.addEventListener("blur", e6)),
                    () => {
                        e2 && (t.removeEventListener("focus", e8), t.removeEventListener("blur", e6));
                    }
                );
        });
    let A = (function (e, t) {
            let n,
                r,
                o = (0, a.bG)([ex.A], () => !p.isPlatformEmbedded || ex.A.isWindowHandleInitialized()),
                d = (0, a.bG)([c.A], () => c.A.getWindow(e)),
                u = (0, a.bG)([ex.A], () => ex.A.getFocusedPID()),
                A = i.useMemo(() => !p.isPlatformEmbedded || (null != u && u !== g.UNSET_PID), [u]),
                [v, E] = i.useState(!1),
                b = i.useRef(!1),
                I = i.useCallback(() => {
                    let e = ex.A.getTargetPID(),
                        n = null != h.A.getVoiceChannelId();
                    l.A.track(ep.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: ex.A.isPinned(ep.uss.TEXT),
                        overlay_render_method: y.Ue[eS.default.getOverlayMethod(e)],
                        unpinned_widget_types: _.A.getAllUnpinnedPinnedWidgets(t),
                    }),
                        (0, e0.Fd)();
                }, [t]),
                w = i.useRef(!1),
                x = i.useRef(null),
                C = i.useCallback(
                    async (e, t) => {
                        try {
                            if ((await e4(e, x), w.current)) return;
                            e3("cssLoaded", !0);
                        } catch (e) {
                            e9.error("Timed out waiting for CSS to load", e),
                                l.A.setOverlayCrashed(ex.A.getTargetPID(), e),
                                e3("errorMessage", "CSS failed load");
                            return;
                        }
                        try {
                            if ((await e5(e, t), w.current)) return;
                            (0, e0.Mq)();
                        } catch (e) {
                            l.A.setOverlayCrashed(ex.A.getTargetPID(), e), e3("errorMessage", "showInactive failed");
                            return;
                        }
                        await new Promise((t) => {
                            e.setTimeout(() => t(), 100);
                        }),
                            w.current || (E(!0), I());
                    },
                    [I],
                ),
                T = i.useRef(!1);
            return (
                i.useEffect(() => {
                    if (!b.current && (e3("hasUseEffectFired", !0), e3("trackedPidFocused", A), o)) {
                        if (null == d) return void e3("errorMessage", "No targetOverlayWindow");
                        if (!A) {
                            T.current ||
                                (l.A.updateOverlayState(
                                    ex.A.getTargetPID(),
                                    y.AR.WAITING_FOR_PID_FOCUS,
                                    "AppOverlay - not focused",
                                ),
                                (T.current = !0));
                            return;
                        }
                        (b.current = !0), e3("reactInitializationStarted", !0), C(d, e);
                    }
                }, [C, A, e, d, o]),
                (0, s.l0)(() => {
                    clearInterval(x.current), (w.current = !0);
                }),
                (n = (0, a.bG)([f.A], () => f.A.windowSize(null != d ? (0, m.Q2)(d) : void 0))),
                (r = (0, a.bG)([ex.A], () => ex.A.getFocusedWindowHandle())),
                i.useEffect(() => {
                    let e, t;
                    if (null != d && v && d.innerHeight === n.height && d.innerWidth === n.width)
                        return (
                            (e = d.requestAnimationFrame(() => {
                                e = d.requestAnimationFrame(() => {
                                    d.clearTimeout(t), l.A.overlayUIFocusedPid(u ?? g.UNSET_PID, r);
                                });
                            })),
                            (t = d.setTimeout(() => {
                                d.cancelAnimationFrame(e), l.A.overlayUIFocusedPid(u ?? g.UNSET_PID, r);
                            }, 500)),
                            () => {
                                d.cancelAnimationFrame(e), d.clearTimeout(t);
                            }
                        );
                }, [v, d, u, r, n]),
                v
            );
        })(d, ey.G),
        v = (0, a.bG)([ex.A], () => ex.A.getFocusedPID()),
        E = (0, a.bG)([eC.A], () => eC.A.isInputLocked(v), [v]);
    return A
        ? (0, r.jsxs)(u.A, {
              themeOverride: ep.NJ8.MIDNIGHT,
              appContext: ep.BRT.OVERLAY,
              withTitleBar: n,
              windowKey: d,
              title: "Discord Overlay",
              hideModals: E,
              children: [(0, r.jsx)(e$, {}), (0, r.jsx)(o.Al, {})],
          })
        : null;
});
