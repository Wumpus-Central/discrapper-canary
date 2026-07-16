n.r(t), n.d(t, { waitForCSSLoad: () => e4, default: () => e9 });
var r = n(627968),
    i = n(64700),
    s = n(17928),
    o = n(684013),
    l = n(964486),
    a = n(573435),
    c = n(626584),
    u = n(567249),
    d = n(979186),
    h = n(38502),
    f = n(309010),
    p = n(531685),
    m = n(723702),
    g = n(19575),
    A = n(9302),
    y = n(365971),
    v = n(777334),
    x = n(41984);
n(321073);
var w = n(503698),
    E = n.n(w),
    C = n(192308),
    N = n(939249),
    b = n(138134),
    O = n(972213),
    _ = n(328162),
    D = n(231723),
    I = n(988393),
    T = n(442433),
    j = n(793574),
    k = n(688810),
    S = n(607470),
    L = n(880144),
    P = n(616356),
    M = n(734057),
    R = n(71393),
    U = n(186295),
    K = n(532624),
    G = n(184809),
    F = n(625494),
    V = n(350535),
    B = n(589051),
    H = n(223251),
    W = n(834730),
    Y = n(696048);
function z(e) {
    let { onClick: t, keybind: n, className: i, IconComponent: s } = e;
    return (0, r.jsxs)("div", {
        className: E()(Y.UD, i),
        children: [
            (0, r.jsx)(N.D, {
                className: Y.x6,
                onClick: t,
                "aria-hidden": !0,
                children: (0, r.jsx)(s, { size: "md", color: "currentColor", "aria-hidden": !0 }),
            }),
            null != n
                ? (0, r.jsx)(W.E, {
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
var J = n(554146),
    X = n(297264),
    $ = n(352255),
    Z = n(782603),
    q = n(428689),
    Q = n(7807),
    ee = n(131607),
    et = n(49999),
    en = n(375708),
    er = n(632244);
function ei(e) {
    let { locked: t } = e,
        [n, s] = (0, ee.kn)(t ? [] : [J.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX], void 0, !0);
    return (i.useEffect(() => {
        if (!t && n === J.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
            return () => {
                n === J.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX && s(et.i.AUTO_DISMISS);
            };
    }, [t, s, n]),
    t || n !== J.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
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
                              (0, r.jsx)(W.E, {
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
                                      (0, r.jsx)($.X, {}),
                                      (0, r.jsx)(W.E, {
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
                                      (0, r.jsx)(W.E, {
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
                                      (0, r.jsx)(W.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: en.intl.string(en.t.GwpRe0),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: er.bS,
                                  children: [
                                      (0, r.jsx)(Q.J, {}),
                                      (0, r.jsx)(W.E, {
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
var es = n(518009),
    eo = n(351906),
    el = n(243612),
    ea = n(391973),
    ec = n(5463),
    eu = n(129537),
    ed = n(127242),
    eh = n(968898),
    ef = n(481484),
    ep = n(545807),
    em = n(652215),
    eg = n(685411);
let eA = [],
    ey = i.memo(function (e) {
        let {
                widget: t,
                renderWidget: n,
                renderTitle: a,
                renderButtons: c,
                resizeValidation: u,
                containerRenderGate: d,
                className: f,
                dragContainerClassName: m,
            } = e,
            g = (0, s.bG)([h.A], () => h.A.getWidgetConfig(t.type), [t.type]),
            A = (0, eh.RE)(t.id, eh.X1),
            v = (0, ef.A)(),
            [w, C] = i.useState(() => d?.stores ?? eA);
        (0, l.Ay)(() => {
            C(d?.stores ?? eA);
        });
        let N = (0, s.bG)(w, () => d?.shouldRender({ widget: t, locked: v }) ?? !0, [d, v, t]),
            b = (0, ep.A)(),
            O = (0, s.bG)([p.A], () => p.A.windowSize((0, y.Q2)(b))),
            _ = i.useCallback((e, t, n, r, i) => {
                let s = p.A.windowSize((0, y.Q2)((0, ep.b)())),
                    l = (0, ec.NO)(n, s),
                    a = (0, ec.R9)(r, s);
                (0, ea.uD)(t), (0, ea.Ju)({ widgetId: t, anchor: l, size: a });
                let c = e === eu.P.MOVE,
                    u = (0, ec.Ly)(n, s.width, s.height, i.width, i.height);
                o.A.track(em.HAw.OVERLAY_LAYOUT_UPDATED, {
                    was_resized: !c,
                    was_dragged: c,
                    widget_type: h.A.getWidgetType(t),
                    window_width: s.width,
                    window_height: s.height,
                    widget_width: i.width,
                    widget_height: i.height,
                    widget_left: u.left,
                    widget_top: u.top,
                });
            }, []),
            D = i.useCallback((e) => {
                (0, ea.uD)(e);
            }, []),
            { id: I, pinned: T, zIndex: j, size: k, anchor: S, minSize: L } = t,
            P = i.useMemo(() => (0, ec.fd)(k, O), [k, O]),
            M = (0, ec.Nv)(S, O),
            { resizeX: R, resizeY: U, dragAnywhere: K, constrainAutoSizeToExplicitResizeEvents: G } = g ?? {},
            F = !v,
            V = T || !v,
            B = i.useMemo(() => ({ minX: 0, minY: 0, maxX: O.width, maxY: O.height }), [O]),
            H = i.useCallback(
                (e) => n({ ...e, widget: t, dragging: null != e.dragOperation, className: f }),
                [t, n, f],
            ),
            W = i.useCallback(
                (e) =>
                    null != a || null != c
                        ? (0, r.jsxs)("div", { className: E()(eg.vJ, A && eg.vw), children: [a?.(t), c?.(t, e)] })
                        : null,
                [t, a, A, c],
            ),
            Y = (0, s.bG)([ed.A], () => ed.A.hasRenderDebugMode(x.x7.WidgetAreas)),
            z = i.useMemo(() => {
                if (null != u) return (e) => u({ ...e, widget: t });
            }, [u, t]);
        return N
            ? (0, r.jsx)(eu.A, {
                  className: E()({ [eg.Yz]: Y, [eg.xu]: Y && !T, [eg.E]: Y && T }, m),
                  id: I,
                  size: P,
                  anchor: M,
                  container: B,
                  minSize: L ?? { width: 0, height: 0 },
                  hidden: !V,
                  locked: v,
                  resizeX: R ?? !1,
                  resizeY: U ?? !1,
                  style: { zIndex: j },
                  dragAnywhere: K ?? !1,
                  constrainAutoSizeToExplicitResizeEvents: G ?? !1,
                  active: F,
                  onUpdate: _,
                  onClick: D,
                  targetWindow: b,
                  forceShowExtras: A,
                  renderExtras: W,
                  resizeValidation: z,
                  children: H,
              })
            : null;
    });
var ev = n(588857),
    ex = n(644434);
function ew(e) {
    return e.widget.id;
}
function eE(e, t, n, i) {
    return n === es.wL.YEETED ? null : (0, r.jsx)(ey, { ...t, transitionState: n, cleanUp: i }, e);
}
let eC = [],
    eN = i.memo(function (e) {
        let { className: t } = e,
            n = (0, ep.A)(),
            o = (0, s.bG)([p.A], () => p.A.windowSize((0, y.Q2)(n))),
            l = (0, s.bG)(
                [h.A, eo.A],
                () => {
                    let e = h.A.getLayout(ex.G);
                    if (null == e) return eC;
                    let t = [];
                    for (let n of e.widgets) {
                        let e = h.A.getWidget(n);
                        if (null == e) continue;
                        let r = ev.A[e.type];
                        null != r &&
                            (null == r.predicate || r.predicate()) &&
                            (eo.A.isOverlayWidgetDisabled(e.type) || t.push({ widget: e, ...r }));
                    }
                    return t;
                },
                [],
                el.VC,
            ),
            a = i.useCallback((e) => (0, r.jsx)("div", { className: t, style: o, children: e }), [t, o]);
        return (0, r.jsx)(es.F, { items: l, renderItem: eE, getItemKey: ew, wrapChildren: a });
    });
var eb = n(489277),
    eO = n(222506);
let e_ = new Set(["shift", "ctrl", "control", "alt", "meta", "os"]);
function eD(e) {
    let { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: s } = e;
    return { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: s };
}
function eI(e, t) {
    return (
        e.keyCode === t.keyCode &&
        e.shiftKey === t.shiftKey &&
        e.metaKey === t.metaKey &&
        e.altKey === t.altKey &&
        e.ctrlKey === t.ctrlKey
    );
}
var eT = n(302614),
    ej = n(296027),
    ek = n(592598),
    eS = n(237984),
    eL = n(528772),
    eP = n(944775),
    eM = n(317084),
    eR = n(427603),
    eU = n(980504),
    eK = n(923779);
let eG = i.memo(function () {
    let [e, t] = (0, s.yK)([eL.A], () => [eL.A.enabled, eL.A.keepOpen]),
        n = (0, s.bG)([f.Ay], () => f.Ay.getVoiceChannelId()),
        i = (0, s.bG)([M.A], () => M.A.getChannel(n), [n]),
        o = i?.getGuildId();
    return e && null != i
        ? (0, r.jsx)(eT.A, {
              className: eK.k,
              children: (0, r.jsx)(eM.A, {
                  width: eU.ed.width,
                  height: eU.ed.height,
                  guildId: o,
                  channel: i,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, eR.A)();
                      null != e && (0, eP.Lk)(e);
                  },
                  analyticsSource: "overlay",
              }),
          })
        : null;
});
var eF = n(672396),
    eV = n(649831);
let eB = !m.isPlatformEmbedded && !1,
    eH = eB
        ? (0, r.jsx)(S.A, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: eV.pN,
              autoPlay: !0,
              loop: !0,
              muted: !0,
          })
        : null;
function eW(e) {
    e.preventDefault();
}
function eY(e) {
    (0, T.L3)(
        e,
        async () => {
            let { default: e } = await n.e("86437").then(n.bind(n, 171300));
            return (t) => (0, r.jsx)(e, { ...t, layoutId: ex.G, version: 4 });
        },
        { context: em.BRT.OVERLAY },
    );
}
let ez = i.memo(function (e) {
        let { keybind: t, onClick: n, locked: i } = e;
        return (0, r.jsx)(N.D, {
            className: E()(eV.LK, { [eV.Zo]: !i, [eV.vZ]: i }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: r, button: i } = e;
                i === em.hE4.PRIMARY && t === r && n();
            },
            onContextMenu: eY,
            children: i
                ? null
                : (0, r.jsxs)(eT.A, {
                      className: eV.BE,
                      children: [
                          (0, r.jsx)(z, { onClick: () => (0, eS.b)(j.A.OVERLAY, em.BRT.OVERLAY), IconComponent: b.i }),
                          (0, r.jsx)(z, { keybind: t, onClick: n, IconComponent: O.d }),
                      ],
                  }),
        });
    }),
    eJ = i.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, r.jsx)(eT.A, {
                  className: eV.BE,
                  children: (0, r.jsx)(z, {
                      onClick: () => o.A.setInputLocked(!1, eb.A.getTargetPID()),
                      IconComponent: _.w,
                  }),
              })
            : null;
    });
function eX() {
    o.A.setInputLocked(!0, eb.A.getTargetPID());
}
function e$(e) {
    let t = eO.A.isInputLocked(eb.A.getTargetPID());
    "alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? F._.dispatch(em.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && F._.dispatch(em.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })),
        (function (e, t) {
            if (t || "keydown" !== e.type.toLowerCase()) return;
            let n = e.key.toLowerCase();
            ("escape" === n || "esc" === n) && o.A.setInputLocked(!0, eb.A.getTargetPID());
        })(e, t),
        eB &&
            (function (e) {
                if ("keydown" !== e.type.toLowerCase() || e.repeat) return !1;
                let t = K.Ay.getOverlayKeybind();
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
            (e.preventDefault(), e.stopPropagation(), o.A.setInputLocked(!t, eb.A.getTargetPID()));
}
let eZ = i.memo(function () {
        return (0, s.bG)([ed.A], () => ed.A.hasRenderDebugMode(x.x7.WindowContainer))
            ? (0, r.jsx)("div", { className: eV.N1 })
            : null;
    }),
    eq = i.memo(function () {
        let e = (0, ep.A)(),
            t = (0, s.bG)([eb.A], () => eb.A.getTargetPID()),
            n = (0, s.bG)([eO.A], () => eO.A.isInputLocked(t), [t]),
            o = (0, s.bG)([eb.A], () => eb.A.isFocused(t), [t]),
            l = (0, s.bG)(
                [K.Ay],
                () => (null != K.Ay.getOverlayKeybind() ? (0, V.dI)(K.Ay.getOverlayKeybind()?.shortcut, !0) : "???"),
                [],
            );
        return (
            i.useEffect(() => {
                if ((F._.dispatch(em.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), n))
                    return (
                        (0, C.closeAllModalsInContext)(D.KX),
                        e.addEventListener("contextmenu", eW, !1),
                        () => {
                            e.removeEventListener("contextmenu", eW, !1);
                        }
                    );
                e.removeEventListener("contextmenu", eW, !1);
            }, [n, e]),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(ez, { locked: n, keybind: l, onClick: eX }),
                    (0, r.jsx)(eN, { className: E()({ [eV.ZK]: n, [eV.al]: !n }) }),
                    eB && (0, r.jsx)(eJ, { locked: n, focused: o }),
                    (0, r.jsx)(ei, { locked: n }),
                ],
            })
        );
    });
function eQ() {
    var e, t;
    let n,
        a,
        c,
        u,
        d,
        h,
        m,
        g,
        A,
        v,
        x,
        w,
        E = (0, ep.A)(),
        C = (0, s.bG)([G.default], () => G.default.incompatibleApp),
        N = (0, s.bG)([p.A], () => {
            let e = (0, y.Q2)(E),
                t = p.A.windowSize(e);
            return t.height < 360 || t.width < 640;
        }, [E]),
        { analyticsLocations: b } = (0, k.Ay)(j.A.OVERLAY);
    return (
        (n = (0, ep.A)()),
        (a = (0, s.bG)([eb.A], () => eb.A.getTargetPID(), [])),
        (c = (0, s.bG)([K.Ay], () => {
            let e = K.Ay.getOverlayKeybind();
            return null != e ? e.shortcut : [];
        }, [])),
        (u = (0, s.bG)([eO.A], () => eO.A.isInputLocked(a), [a])),
        (d = (0, s.bG)([p.A], () => {
            let e = (0, y.Q2)(n);
            return p.A.isVisible(e) && p.A.isFocused(e);
        }, [n])),
        (h = i.useRef([])),
        (m = i.useMemo(() => (0, V.pi)(c).map((e) => eD(e)), [c])),
        (g = i.useMemo(() => c.length > 0, [c])),
        (A = !u && g && d),
        i.useEffect(() => {
            h.current = [];
        }, [u, m]),
        i.useEffect(() => {
            if (!A) {
                h.current = [];
                return;
            }
            function e(e) {
                let t = eD(e),
                    n = h.current,
                    r = n.some((e) => eI(e, t)),
                    i = (function (e) {
                        let t = e.key.toLowerCase();
                        for (let e of e_) if (t.includes(e)) return !0;
                        return !1;
                    })(e);
                r || i || n.push(t),
                    0 !== m.length &&
                        n.length === m.length &&
                        m.every((e) => n.some((t) => eI(e, t))) &&
                        (e.preventDefault(), e.stopPropagation());
            }
            function t(e) {
                let t = eD(e),
                    n = h.current,
                    r = n.findIndex((e) => eI(e, t));
                r > -1 && n.splice(r, 1);
            }
            return (
                n.addEventListener("keydown", e, !0),
                n.addEventListener("keyup", t, !0),
                () => {
                    n.removeEventListener("keydown", e, !0), n.removeEventListener("keyup", t, !0);
                }
            );
        }, [A, m, n]),
        (0, l.Ay)(() => {
            (0, B.E)();
        }),
        (v = (0, ep.A)()),
        (e = () => {
            o.A.overlayReady(eb.A.getTargetPID()),
                v.addEventListener("keydown", e$, !0),
                v.addEventListener("keyup", e$);
        }),
        (t = () => {
            v.removeEventListener("keydown", e$, !0), v.removeEventListener("keyup", e$);
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
            let e = (0, el.qv)(),
                t = f.Ay.getVoiceChannelId(),
                n = M.A.getChannel(t),
                r = null != n ? R.A.getGuild(n.guild_id) : null,
                i = null != P.A.getCurrentUserActiveStream(),
                s = null != t,
                l = (0, L.A)(U.Ay) && !i && null != e,
                a = s && null != r && null != t,
                c = eb.A.getTargetPID();
            if (ej.default.hasChangedRenderMode(c)) return;
            let u = ek.A.isNotificationDisabled(eF.KS.WelcomeNudge),
                d = ek.A.isNotificationDisabled(eF.KS.GoLiveNudge),
                h = ek.A.isNotificationDisabled(eF.KS.ActivityInvite),
                p = [];
            !u &&
                (p.push({ type: eF.Jr.WELCOME }),
                !d &&
                    (l && a
                        ? p.push({ type: eF.Jr.GO_LIVE_VOICE, game: e, voiceChannelId: t, voiceGuild: r })
                        : l && p.push({ type: eF.Jr.GO_LIVE_NON_VOICE, game: e })),
                h || p.push({ type: eF.Jr.CONTENT_INVENTORY, entries: [] })),
                null != w.current && clearTimeout(w.current),
                (w.current = setTimeout(() => {
                    o.A.overlayMounted(...p);
                }, 1e3));
        }),
        (0, l.l0)(() => {
            null != w.current && (clearTimeout(w.current), (w.current = null));
        }),
        N || C)
            ? null
            : (0, r.jsx)(k.f5, {
                  value: b,
                  children: (0, r.jsxs)("div", {
                      id: "overlay-container",
                      className: eV.Lw,
                      children: [
                          eH,
                          (0, r.jsx)(eq, {}),
                          (0, r.jsx)(eG, {}),
                          (0, r.jsx)(H.A, {}),
                          (0, r.jsx)(I.N, { appContext: em.BRT.OVERLAY }),
                          (0, r.jsx)(eZ, {}),
                      ],
                  }),
              })
    );
}
var e0 = n(682763),
    e1 = n(228366);
function e2(e, t) {
    eb.A.getPopoutInitializationStages()[e] !== t &&
        e1.h.dispatch({ type: "OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED", update: { [e]: t } });
}
n(96175), n(191701), n(921955);
let e3 = !m.isPlatformEmbedded && !1,
    e6 = new c.A("AppOverlay");
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
async function e8(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (m.isPlatformEmbedded) {
        try {
            await g.Ay.isAlwaysOnTop(t);
        } catch (e) {
            e6.error("Window does not exist while trying to show inactive", e), (0, v.pj)(e, x.Ue.OutOfProcess);
        }
        for (let i = 0; i < r; i++)
            try {
                if (!(await g.Ay.waitForIPCReady(n, e))) throw Error("IPC not ready");
                g.Ay.showInactive(t);
                return;
            } catch (e) {
                if (e.message?.includes("IPC") && i < r - 1) {
                    let t = (n / 2) * Math.pow(2, i + 1);
                    e6.error(`Failed to show inactive, retrying in ${t}ms`, e),
                        await new Promise((e) => setTimeout(e, t));
                } else throw ((0, v.pj)(e, x.Ue.OutOfProcess), e);
            }
    }
}
function e7() {
    o.A.setFocusedPID(A.DEV_PID, null);
}
function e5() {
    o.A.setFocusedPID(null, null);
}
let e9 = i.memo(function (e) {
    let t,
        { withTitleBar: n, windowKey: c } = e;
    (t = (0, s.bG)([u.A], () => u.A.getWindow(c))),
        (0, l.Ay)(() => {
            if (null != t)
                return (
                    e3 &&
                        (t.document.hasFocus() && o.A.setFocusedPID(A.DEV_PID, null),
                        t.addEventListener("focus", e7),
                        t.addEventListener("blur", e5)),
                    () => {
                        e3 && (t.removeEventListener("focus", e7), t.removeEventListener("blur", e5));
                    }
                );
        });
    let g = (function (e, t) {
            let n,
                r,
                a = (0, s.bG)([eb.A], () => !m.isPlatformEmbedded || eb.A.isWindowHandleInitialized()),
                c = (0, s.bG)([u.A], () => u.A.getWindow(e)),
                d = (0, s.bG)([eb.A], () => eb.A.getFocusedPID()),
                g = i.useMemo(() => !m.isPlatformEmbedded || (null != d && d !== A.UNSET_PID), [d]),
                [v, w] = i.useState(!1),
                E = i.useRef(!1),
                C = i.useCallback(() => {
                    let e = eb.A.getTargetPID(),
                        n = null != f.Ay.getVoiceChannelId();
                    o.A.track(em.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: eb.A.isPinned(em.uss.TEXT),
                        overlay_render_method: x.Ue[ej.default.getOverlayMethod(e)],
                        unpinned_widget_types: h.A.getAllUnpinnedPinnedWidgets(t),
                    }),
                        (0, e0.Fd)();
                }, [t]),
                N = i.useRef(!1),
                b = i.useRef(null),
                O = i.useCallback(
                    async (e, t) => {
                        try {
                            if ((await e4(e, b), N.current)) return;
                            e2("cssLoaded", !0);
                        } catch (e) {
                            e6.error("Timed out waiting for CSS to load", e),
                                o.A.setOverlayCrashed(eb.A.getTargetPID(), e),
                                e2("errorMessage", "CSS failed load");
                            return;
                        }
                        try {
                            if ((await e8(e, t), N.current)) return;
                            (0, e0.Mq)();
                        } catch (e) {
                            o.A.setOverlayCrashed(eb.A.getTargetPID(), e), e2("errorMessage", "showInactive failed");
                            return;
                        }
                        await new Promise((t) => {
                            e.setTimeout(() => t(), 100);
                        }),
                            N.current || (w(!0), C());
                    },
                    [C],
                ),
                _ = i.useRef(!1);
            return (
                i.useEffect(() => {
                    if (!E.current && (e2("hasUseEffectFired", !0), e2("trackedPidFocused", g), a)) {
                        if (null == c) return void e2("errorMessage", "No targetOverlayWindow");
                        if (!g) {
                            _.current ||
                                (o.A.updateOverlayState(
                                    eb.A.getTargetPID(),
                                    x.AR.WAITING_FOR_PID_FOCUS,
                                    "AppOverlay - not focused",
                                ),
                                (_.current = !0));
                            return;
                        }
                        (E.current = !0), e2("reactInitializationStarted", !0), O(c, e);
                    }
                }, [O, g, e, c, a]),
                (0, l.l0)(() => {
                    clearInterval(b.current), (N.current = !0);
                }),
                (n = (0, s.bG)([p.A], () => p.A.windowSize(null != c ? (0, y.Q2)(c) : void 0))),
                (r = (0, s.bG)([eb.A], () => eb.A.getFocusedWindowHandle())),
                i.useEffect(() => {
                    let e, t;
                    if (null != c && v && c.innerHeight === n.height && c.innerWidth === n.width)
                        return (
                            (e = c.requestAnimationFrame(() => {
                                e = c.requestAnimationFrame(() => {
                                    c.clearTimeout(t), o.A.overlayUIFocusedPid(d ?? A.UNSET_PID, r);
                                });
                            })),
                            (t = c.setTimeout(() => {
                                c.cancelAnimationFrame(e), o.A.overlayUIFocusedPid(d ?? A.UNSET_PID, r);
                            }, 500)),
                            () => {
                                c.cancelAnimationFrame(e), c.clearTimeout(t);
                            }
                        );
                }, [v, c, d, r, n]),
                v
            );
        })(c, ex.G),
        v = (0, s.bG)([eb.A], () => eb.A.getFocusedPID()),
        w = (0, s.bG)([eO.A], () => eO.A.isInputLocked(v), [v]);
    return g
        ? (0, r.jsxs)(d.A, {
              themeOverride: em.NJ8.MIDNIGHT,
              appContext: em.BRT.OVERLAY,
              withTitleBar: n,
              windowKey: c,
              title: "Discord Overlay",
              hideModals: w,
              children: [(0, r.jsx)(eQ, {}), (0, r.jsx)(a.Al, {})],
          })
        : null;
});
