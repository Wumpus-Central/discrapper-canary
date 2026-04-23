n.r(t), n.d(t, { waitForCSSLoad: () => e5, default: () => e8 });
var r = n(627968),
    i = n(64700),
    a = n(17928),
    l = n(684013),
    o = n(964486),
    d = n(573435),
    c = n(626584),
    s = n(567249),
    _ = n(979186),
    u = n(38502),
    f = n(309010),
    h = n(531685),
    b = n(723702),
    A = n(19575),
    p = n(9302),
    g = n(365971),
    m = n(777334),
    v = n(41984);
n(321073);
var y = n(503698),
    x = n.n(y),
    C = n(192308),
    w = n(939249),
    E = n(138134),
    I = n(972213),
    L = n(328162),
    O = n(231723),
    k = n(988393),
    S = n(442433),
    D = n(793574),
    P = n(688810),
    T = n(607470),
    N = n(880144),
    R = n(616356),
    j = n(734057),
    G = n(71393),
    M = n(969341),
    B = n(532624),
    W = n(256415),
    U = n(625494),
    V = n(350535),
    K = n(589051),
    Y = n(223251),
    F = n(834730),
    H = n(696048);
function z(e) {
    let { onClick: t, keybind: n, className: i, IconComponent: a } = e;
    return (0, r.jsxs)("div", {
        className: x()(H.UD, i),
        children: [
            (0, r.jsx)(w.D, {
                className: H.x6,
                onClick: t,
                "aria-hidden": !0,
                children: (0, r.jsx)(a, { size: "md", color: "currentColor", "aria-hidden": !0 }),
            }),
            null != n
                ? (0, r.jsx)(F.E, {
                      className: H.P,
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
    J = n(534514),
    Z = n(352255),
    Q = n(782603),
    q = n(428689),
    $ = n(7807),
    ee = n(932001),
    et = n(49999),
    en = n(985018),
    er = n(632244);
function ei(e) {
    let { locked: t } = e,
        [n, a] = (0, ee.kn)(t ? [] : [X.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX], void 0, !0);
    return (i.useEffect(() => {
        if (!t && n === X.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
            return () => {
                n === X.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX && a(et.i.AUTO_DISMISS);
            };
    }, [t, a, n]),
    t || n !== X.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
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
                              (0, r.jsx)(F.E, {
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
                                      (0, r.jsx)(Z.X, {}),
                                      (0, r.jsx)(F.E, {
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
                                      (0, r.jsx)(F.E, {
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
                                      (0, r.jsx)(F.E, {
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
                                      (0, r.jsx)(F.E, {
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
    eo = n(243612),
    ed = n(391973),
    ec = n(5463),
    es = n(129537),
    e_ = n(127242),
    eu = n(968898),
    ef = n(481484),
    eh = n(545807),
    eb = n(652215),
    eA = n(685411);
let ep = [],
    eg = i.memo(function (e) {
        let {
                widget: t,
                renderWidget: n,
                renderTitle: d,
                renderButtons: c,
                resizeValidation: s,
                containerRenderGate: _,
                className: f,
                dragContainerClassName: b,
            } = e,
            A = (0, a.bG)([u.A], () => u.A.getWidgetConfig(t.type), [t.type]),
            p = (0, eu.RE)(t.id, eu.X1),
            m = (0, ef.A)(),
            [y, C] = i.useState(() => _?.stores ?? ep);
        (0, o.Ay)(() => {
            C(_?.stores ?? ep);
        });
        let w = (0, a.bG)(y, () => _?.shouldRender({ widget: t, locked: m }) ?? !0, [_, m, t]),
            E = (0, eh.A)(),
            I = (0, a.bG)([h.A], () => h.A.windowSize((0, g.Q2)(E))),
            L = i.useCallback((e, t, n, r, i) => {
                let a = h.A.windowSize((0, g.Q2)((0, eh.b)())),
                    o = (0, ec.NO)(n, a),
                    d = (0, ec.R9)(r, a);
                (0, ed.uD)(t), (0, ed.Ju)({ widgetId: t, anchor: o, size: d });
                let c = e === es.P.MOVE,
                    s = (0, ec.Ly)(n, a.width, a.height, i.width, i.height);
                l.A.track(eb.HAw.OVERLAY_LAYOUT_UPDATED, {
                    was_resized: !c,
                    was_dragged: c,
                    widget_type: u.A.getWidgetType(t),
                    window_width: a.width,
                    window_height: a.height,
                    widget_width: i.width,
                    widget_height: i.height,
                    widget_left: s.left,
                    widget_top: s.top,
                });
            }, []),
            O = i.useCallback((e) => {
                (0, ed.uD)(e);
            }, []),
            { id: k, pinned: S, zIndex: D, size: P, anchor: T, minSize: N } = t,
            R = i.useMemo(() => (0, ec.fd)(P, I), [P, I]),
            j = (0, ec.Nv)(T, I),
            { resizeX: G, resizeY: M, dragAnywhere: B, constrainAutoSizeToExplicitResizeEvents: W } = A ?? {},
            U = !m,
            V = S || !m,
            K = i.useMemo(() => ({ minX: 0, minY: 0, maxX: I.width, maxY: I.height }), [I]),
            Y = i.useCallback(
                (e) => n({ ...e, widget: t, dragging: null != e.dragOperation, className: f }),
                [t, n, f],
            ),
            F = i.useCallback(
                (e) =>
                    null != d || null != c
                        ? (0, r.jsxs)("div", { className: x()(eA.vJ, p && eA.vw), children: [d?.(t), c?.(t, e)] })
                        : null,
                [t, d, p, c],
            ),
            H = (0, a.bG)([e_.A], () => e_.A.hasRenderDebugMode(v.x7.WidgetAreas)),
            z = i.useMemo(() => {
                if (null != s) return (e) => s({ ...e, widget: t });
            }, [s, t]);
        return w
            ? (0, r.jsx)(es.A, {
                  className: x()({ [eA.Yz]: H, [eA.xu]: H && !S, [eA.E]: H && S }, b),
                  id: k,
                  size: R,
                  anchor: j,
                  container: K,
                  minSize: N ?? { width: 0, height: 0 },
                  hidden: !V,
                  locked: m,
                  resizeX: G ?? !1,
                  resizeY: M ?? !1,
                  style: { zIndex: D },
                  dragAnywhere: B ?? !1,
                  constrainAutoSizeToExplicitResizeEvents: W ?? !1,
                  active: U,
                  onUpdate: L,
                  onClick: O,
                  targetWindow: E,
                  forceShowExtras: p,
                  renderExtras: F,
                  resizeValidation: z,
                  children: Y,
              })
            : null;
    });
var em = n(349230),
    ev = n(644434);
function ey(e) {
    return e.widget.id;
}
function ex(e, t, n, i) {
    return n === ea.wL.YEETED ? null : (0, r.jsx)(eg, { ...t, transitionState: n, cleanUp: i }, e);
}
let eC = [],
    ew = i.memo(function (e) {
        let { className: t } = e,
            n = (0, eh.A)(),
            l = (0, a.bG)([h.A], () => h.A.windowSize((0, g.Q2)(n))),
            o = (0, a.bG)(
                [u.A, el.A],
                () => {
                    let e = u.A.getLayout(ev.G);
                    if (null == e) return eC;
                    let t = [];
                    for (let n of e.widgets) {
                        let e = u.A.getWidget(n);
                        if (null == e) continue;
                        let r = em.A[e.type];
                        null != r &&
                            (null == r.predicate || r.predicate()) &&
                            (el.A.isOverlayWidgetDisabled(e.type) || t.push({ widget: e, ...r }));
                    }
                    return t;
                },
                [],
                eo.VC,
            ),
            d = i.useCallback((e) => (0, r.jsx)("div", { className: t, style: l, children: e }), [t, l]);
        return (0, r.jsx)(ea.F, { items: o, renderItem: ex, getItemKey: ey, wrapChildren: d });
    });
var eE = n(489277),
    eI = n(222506);
let eL = new Set(["shift", "ctrl", "control", "alt", "meta", "os"]);
function eO(e) {
    let { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: a } = e;
    return { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: a };
}
function ek(e, t) {
    return (
        e.keyCode === t.keyCode &&
        e.shiftKey === t.shiftKey &&
        e.metaKey === t.metaKey &&
        e.altKey === t.altKey &&
        e.ctrlKey === t.ctrlKey
    );
}
var eS = n(302614),
    eD = n(833551),
    eP = n(592598),
    eT = n(237984),
    eN = n(528772),
    eR = n(944775),
    ej = n(317084),
    eG = n(427603),
    eM = n(980504),
    eB = n(923779);
let eW = i.memo(function () {
    let [e, t] = (0, a.yK)([eN.A], () => [eN.A.enabled, eN.A.keepOpen]),
        n = (0, a.bG)([f.A], () => f.A.getVoiceChannelId()),
        i = (0, a.bG)([j.A], () => j.A.getChannel(n), [n]),
        l = i?.getGuildId();
    return e && null != i
        ? (0, r.jsx)(eS.A, {
              className: eB.k,
              children: (0, r.jsx)(ej.A, {
                  width: eM.ed.width,
                  height: eM.ed.height,
                  guildId: l,
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
var eU = n(672396),
    eV = n(649831);
let eK = !b.isPlatformEmbedded && !1,
    eY = eK
        ? (0, r.jsx)(T.A, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: eV.pN,
              autoPlay: !0,
              loop: !0,
              muted: !0,
          })
        : null;
function eF(e) {
    e.preventDefault();
}
function eH(e) {
    (0, S.L3)(
        e,
        async () => {
            let { default: e } = await n.e("86437").then(n.bind(n, 171300));
            return (t) => (0, r.jsx)(e, { ...t, layoutId: ev.G, version: 4 });
        },
        { context: eb.BRT.OVERLAY },
    );
}
let ez = i.memo(function (e) {
        let { keybind: t, onClick: n, locked: i } = e;
        return (0, r.jsx)(w.D, {
            className: x()(eV.LK, { [eV.Zo]: !i, [eV.vZ]: i }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: r, button: i } = e;
                i === eb.hE4.PRIMARY && t === r && n();
            },
            onContextMenu: eH,
            children: i
                ? null
                : (0, r.jsxs)(eS.A, {
                      className: eV.BE,
                      children: [
                          (0, r.jsx)(z, { onClick: () => (0, eT.b)(D.A.OVERLAY, eb.BRT.OVERLAY), IconComponent: E.i }),
                          (0, r.jsx)(z, { keybind: t, onClick: n, IconComponent: I.d }),
                      ],
                  }),
        });
    }),
    eX = i.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, r.jsx)(eS.A, {
                  className: eV.BE,
                  children: (0, r.jsx)(z, {
                      onClick: () => l.A.setInputLocked(!1, eE.A.getTargetPID()),
                      IconComponent: L.w,
                  }),
              })
            : null;
    });
function eJ() {
    l.A.setInputLocked(!0, eE.A.getTargetPID());
}
function eZ(e) {
    let t = eI.A.isInputLocked(eE.A.getTargetPID());
    "alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? U._.dispatch(eb.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && U._.dispatch(eb.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })),
        (function (e, t) {
            if (t || "keydown" !== e.type.toLowerCase()) return;
            let n = e.key.toLowerCase();
            ("escape" === n || "esc" === n) && l.A.setInputLocked(!0, eE.A.getTargetPID());
        })(e, t),
        eK &&
            (function (e) {
                if ("keydown" !== e.type.toLowerCase() || e.repeat) return !1;
                let t = B.Ay.getOverlayKeybind();
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
            (e.preventDefault(), e.stopPropagation(), l.A.setInputLocked(!t, eE.A.getTargetPID()));
}
let eQ = i.memo(function () {
        return (0, a.bG)([e_.A], () => e_.A.hasRenderDebugMode(v.x7.WindowContainer))
            ? (0, r.jsx)("div", { className: eV.N1 })
            : null;
    }),
    eq = i.memo(function () {
        let e = (0, eh.A)(),
            t = (0, a.bG)([eE.A], () => eE.A.getTargetPID()),
            n = (0, a.bG)([eI.A], () => eI.A.isInputLocked(t), [t]),
            l = (0, a.bG)([eE.A], () => eE.A.isFocused(t), [t]),
            o = (0, a.bG)(
                [B.Ay],
                () => (null != B.Ay.getOverlayKeybind() ? (0, V.dI)(B.Ay.getOverlayKeybind()?.shortcut, !0) : "???"),
                [],
            );
        return (
            i.useEffect(() => {
                if ((U._.dispatch(eb.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), n))
                    return (
                        (0, C.closeAllModalsInContext)(O.KX),
                        e.addEventListener("contextmenu", eF, !1),
                        () => {
                            e.removeEventListener("contextmenu", eF, !1);
                        }
                    );
                e.removeEventListener("contextmenu", eF, !1);
            }, [n, e]),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(ez, { locked: n, keybind: o, onClick: eJ }),
                    (0, r.jsx)(ew, { className: x()({ [eV.ZK]: n, [eV.al]: !n }) }),
                    eK && (0, r.jsx)(eX, { locked: n, focused: l }),
                    (0, r.jsx)(ei, { locked: n }),
                ],
            })
        );
    });
function e$() {
    var e, t;
    let n,
        d,
        c,
        s,
        _,
        u,
        b,
        A,
        p,
        m,
        v,
        y,
        x = (0, eh.A)(),
        C = (0, a.bG)([W.default], () => W.default.incompatibleApp),
        w = (0, a.bG)([h.A], () => {
            let e = (0, g.Q2)(x),
                t = h.A.windowSize(e);
            return t.height < 360 || t.width < 640;
        }, [x]),
        { analyticsLocations: E } = (0, P.Ay)(D.A.OVERLAY);
    return (
        (n = (0, eh.A)()),
        (d = (0, a.bG)([eE.A], () => eE.A.getTargetPID(), [])),
        (c = (0, a.bG)([B.Ay], () => {
            let e = B.Ay.getOverlayKeybind();
            return null != e ? e.shortcut : [];
        }, [])),
        (s = (0, a.bG)([eI.A], () => eI.A.isInputLocked(d), [d])),
        (_ = (0, a.bG)([h.A], () => {
            let e = (0, g.Q2)(n);
            return h.A.isVisible(e) && h.A.isFocused(e);
        }, [n])),
        (u = i.useRef([])),
        (b = i.useMemo(() => (0, V.pi)(c).map((e) => eO(e)), [c])),
        (A = i.useMemo(() => c.length > 0, [c])),
        (p = !s && A && _),
        i.useEffect(() => {
            u.current = [];
        }, [s, b]),
        i.useEffect(() => {
            if (!p) {
                u.current = [];
                return;
            }
            let e = (e) => {
                    let t = eO(e),
                        n = u.current,
                        r = n.some((e) => ek(e, t)),
                        i = (function (e) {
                            let t = e.key.toLowerCase();
                            for (let e of eL) if (t.includes(e)) return !0;
                            return !1;
                        })(e);
                    r || i || n.push(t),
                        0 !== b.length &&
                            n.length === b.length &&
                            b.every((e) => n.some((t) => ek(e, t))) &&
                            (e.preventDefault(), e.stopPropagation());
                },
                t = (e) => {
                    let t = eO(e),
                        n = u.current,
                        r = n.findIndex((e) => ek(e, t));
                    r > -1 && n.splice(r, 1);
                };
            return (
                n.addEventListener("keydown", e, !0),
                n.addEventListener("keyup", t, !0),
                () => {
                    n.removeEventListener("keydown", e, !0), n.removeEventListener("keyup", t, !0);
                }
            );
        }, [p, b, n]),
        (0, o.Ay)(() => {
            (0, K.E)();
        }),
        (m = (0, eh.A)()),
        (e = () => {
            l.A.overlayReady(eE.A.getTargetPID()),
                m.addEventListener("keydown", eZ, !0),
                m.addEventListener("keyup", eZ);
        }),
        (t = () => {
            m.removeEventListener("keydown", eZ, !0), m.removeEventListener("keyup", eZ);
        }),
        (v = i.useRef({ mount: e, unmount: t })),
        i.useEffect(() => {
            v.current = { mount: e, unmount: t };
        }),
        i.useEffect(
            () => (
                v.current.mount(),
                () => {
                    v.current.unmount();
                }
            ),
            [],
        ),
        ((y = i.useRef(null)),
        (0, o.Ay)(() => {
            let e = (0, eo.qv)(),
                t = f.A.getVoiceChannelId(),
                n = j.A.getChannel(t),
                r = null != n ? G.A.getGuild(n.guild_id) : null,
                i = null != R.A.getCurrentUserActiveStream(),
                a = null != t,
                o = (0, N.A)(M.Ay) && !i && null != e,
                d = a && null != r && null != t,
                c = eE.A.getTargetPID();
            if (eD.default.hasChangedRenderMode(c)) return;
            let s = eP.A.isNotificationDisabled(eU.KS.WelcomeNudge),
                _ = eP.A.isNotificationDisabled(eU.KS.GoLiveNudge),
                u = eP.A.isNotificationDisabled(eU.KS.ActivityInvite),
                h = [];
            !s &&
                (h.push({ type: eU.Jr.WELCOME }),
                !_ &&
                    (o && d
                        ? h.push({ type: eU.Jr.GO_LIVE_VOICE, game: e, voiceChannelId: t, voiceGuild: r })
                        : o && h.push({ type: eU.Jr.GO_LIVE_NON_VOICE, game: e })),
                u || h.push({ type: eU.Jr.CONTENT_INVENTORY, entries: [] })),
                null != y.current && clearTimeout(y.current),
                (y.current = setTimeout(() => {
                    l.A.overlayMounted(...h);
                }, 1e3));
        }),
        (0, o.l0)(() => {
            null != y.current && (clearTimeout(y.current), (y.current = null));
        }),
        w || C)
            ? null
            : (0, r.jsx)(P.f5, {
                  value: E,
                  children: (0, r.jsxs)("div", {
                      id: "overlay-container",
                      className: eV.Lw,
                      children: [
                          eY,
                          (0, r.jsx)(eq, {}),
                          (0, r.jsx)(eW, {}),
                          (0, r.jsx)(Y.A, {}),
                          (0, r.jsx)(k.N, { appContext: eb.BRT.OVERLAY }),
                          (0, r.jsx)(eQ, {}),
                      ],
                  }),
              })
    );
}
var e0 = n(682763),
    e3 = n(228366);
function e1(e, t) {
    eE.A.getPopoutInitializationStages()[e] !== t &&
        e3.h.dispatch({ type: "OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED", update: { [e]: t } });
}
n(96175), n(21076), n(921955);
let e6 = !b.isPlatformEmbedded && !1,
    e2 = new c.A("AppOverlay");
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
    if (b.isPlatformEmbedded) {
        try {
            await A.Ay.isAlwaysOnTop(t);
        } catch (e) {
            e2.error("Window does not exist while trying to show inactive", e), (0, m.pj)(e, v.Ue.OutOfProcess);
        }
        for (let i = 0; i < r; i++)
            try {
                if (!(await A.Ay.waitForIPCReady(n, e))) throw Error("IPC not ready");
                A.Ay.showInactive(t);
                return;
            } catch (e) {
                if (e.message?.includes("IPC") && i < r - 1) {
                    let t = (n / 2) * Math.pow(2, i + 1);
                    e2.error(`Failed to show inactive, retrying in ${t}ms`, e),
                        await new Promise((e) => setTimeout(e, t));
                } else throw ((0, m.pj)(e, v.Ue.OutOfProcess), e);
            }
    }
}
function e4() {
    l.A.setFocusedPID(p.DEV_PID, null);
}
function e7() {
    l.A.setFocusedPID(null, null);
}
let e8 = i.memo(function (e) {
    let t,
        { withTitleBar: n, windowKey: c } = e;
    (t = (0, a.bG)([s.A], () => s.A.getWindow(c))),
        (0, o.Ay)(() => {
            if (null != t)
                return (
                    e6 &&
                        (t.document.hasFocus() && l.A.setFocusedPID(p.DEV_PID, null),
                        t.addEventListener("focus", e4),
                        t.addEventListener("blur", e7)),
                    () => {
                        e6 && (t.removeEventListener("focus", e4), t.removeEventListener("blur", e7));
                    }
                );
        });
    let A = (function (e, t) {
            let n,
                r,
                d = (0, a.bG)([eE.A], () => !b.isPlatformEmbedded || eE.A.isWindowHandleInitialized()),
                c = (0, a.bG)([s.A], () => s.A.getWindow(e)),
                _ = (0, a.bG)([eE.A], () => eE.A.getFocusedPID()),
                A = i.useMemo(() => !b.isPlatformEmbedded || (null != _ && _ !== p.UNSET_PID), [_]),
                [m, y] = i.useState(!1),
                x = i.useRef(!1),
                C = i.useCallback(() => {
                    let e = eE.A.getTargetPID(),
                        n = null != f.A.getVoiceChannelId();
                    l.A.track(eb.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: eE.A.isPinned(eb.uss.TEXT),
                        overlay_render_method: v.Ue[eD.default.getOverlayMethod(e)],
                        unpinned_widget_types: u.A.getAllUnpinnedPinnedWidgets(t),
                    }),
                        (0, e0.Fd)();
                }, [t]),
                w = i.useRef(!1),
                E = i.useRef(null),
                I = i.useCallback(
                    async (e, t) => {
                        try {
                            if ((await e5(e, E), w.current)) return;
                            e1("cssLoaded", !0);
                        } catch (e) {
                            e2.error("Timed out waiting for CSS to load", e),
                                l.A.setOverlayCrashed(eE.A.getTargetPID(), e),
                                e1("errorMessage", "CSS failed load");
                            return;
                        }
                        try {
                            if ((await e9(e, t), w.current)) return;
                            (0, e0.Mq)();
                        } catch (e) {
                            l.A.setOverlayCrashed(eE.A.getTargetPID(), e), e1("errorMessage", "showInactive failed");
                            return;
                        }
                        await new Promise((t) => {
                            e.setTimeout(() => t(), 100);
                        }),
                            w.current || (y(!0), C());
                    },
                    [C],
                ),
                L = i.useRef(!1);
            return (
                i.useEffect(() => {
                    if (!x.current && (e1("hasUseEffectFired", !0), e1("trackedPidFocused", A), d)) {
                        if (null == c) return void e1("errorMessage", "No targetOverlayWindow");
                        if (!A) {
                            L.current ||
                                (l.A.updateOverlayState(
                                    eE.A.getTargetPID(),
                                    v.AR.WAITING_FOR_PID_FOCUS,
                                    "AppOverlay - not focused",
                                ),
                                (L.current = !0));
                            return;
                        }
                        (x.current = !0), e1("reactInitializationStarted", !0), I(c, e);
                    }
                }, [I, A, e, c, d]),
                (0, o.l0)(() => {
                    clearInterval(E.current), (w.current = !0);
                }),
                (n = (0, a.bG)([h.A], () => h.A.windowSize(null != c ? (0, g.Q2)(c) : void 0))),
                (r = (0, a.bG)([eE.A], () => eE.A.getFocusedWindowHandle())),
                i.useEffect(() => {
                    let e, t;
                    if (null != c && m && c.innerHeight === n.height && c.innerWidth === n.width)
                        return (
                            (e = c.requestAnimationFrame(() => {
                                e = c.requestAnimationFrame(() => {
                                    c.clearTimeout(t), l.A.overlayUIFocusedPid(_ ?? p.UNSET_PID, r);
                                });
                            })),
                            (t = c.setTimeout(() => {
                                c.cancelAnimationFrame(e), l.A.overlayUIFocusedPid(_ ?? p.UNSET_PID, r);
                            }, 500)),
                            () => {
                                c.cancelAnimationFrame(e), c.clearTimeout(t);
                            }
                        );
                }, [m, c, _, r, n]),
                m
            );
        })(c, ev.G),
        m = (0, a.bG)([eE.A], () => eE.A.getFocusedPID()),
        y = (0, a.bG)([eI.A], () => eI.A.isInputLocked(m), [m]);
    return A
        ? (0, r.jsxs)(_.A, {
              themeOverride: eb.NJ8.MIDNIGHT,
              appContext: eb.BRT.OVERLAY,
              withTitleBar: n,
              windowKey: c,
              title: "Discord Overlay",
              hideModals: y,
              children: [(0, r.jsx)(e$, {}), (0, r.jsx)(d.Al, {})],
          })
        : null;
});
