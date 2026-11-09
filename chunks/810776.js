(n.r(t), n.d(t, { default: () => tI, waitForCSSLoad: () => t_ }));
var r = n(477900),
    i = n(582128),
    l = n(855986),
    s = n(684013),
    o = n(964486),
    a = n(573435),
    u = n(626584),
    d = n(293432),
    c = n(853757),
    h = n(83880),
    f = n(309010),
    g = n(531685),
    p = n(723702),
    m = n(253400),
    A = n(9302),
    y = n(365971),
    v = n(777334),
    E = n(41984),
    x = n(973196),
    w = n(870373);
n(321073);
var b = n(503698),
    C = n.n(b),
    N = n(192308),
    O = n(939249),
    _ = n(825484),
    D = n(821609),
    S = n(632015),
    I = n(952270),
    j = n(663417),
    T = n(138134),
    k = n(972213),
    R = n(328162),
    P = n(616667),
    L = n(442433),
    M = n(793574),
    G = n(688810),
    U = n(607470),
    K = n(880144),
    W = n(616356),
    B = n(734057),
    F = n(71393),
    V = n(754712),
    H = n(532624),
    Y = n(373954),
    z = n(188567),
    J = n(350535),
    $ = n(589051),
    X = n(223251),
    Q = n(834730),
    q = n(257581);
function Z(e) {
    let { onClick: t, keybind: n, className: i, IconComponent: l, "data-testid": s } = e;
    return (0, r.jsxs)("div", {
        className: C()(q.UD, i),
        "data-testid": s,
        children: [
            (0, r.jsx)(O.D, {
                className: q.x6,
                onClick: t,
                "aria-hidden": !0,
                children: (0, r.jsx)(l, { size: "md", color: "currentColor", "aria-hidden": !0 }),
            }),
            null != n
                ? (0, r.jsx)(Q.E, {
                      className: q.P,
                      "aria-hidden": !0,
                      variant: "footnote/semibold",
                      color: "interactive-text-default",
                      children: n,
                  })
                : null,
        ],
    });
}
var ee = n(554146),
    et = n(534514),
    en = n(352255),
    er = n(782603),
    ei = n(428689),
    el = n(7807),
    es = n(263775),
    eo = n(49999),
    ea = n(792996),
    eu = n(831931);
function ed(e) {
    let { locked: t } = e,
        [n, l] = (0, es.kn)(t ? [] : [ee.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX], { bypassAutoDismiss: !0 });
    return (i.useEffect(() => {
        if (!t && n === ee.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
            return () => {
                n === ee.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX && l(eo.i.AUTO_DISMISS);
            };
    }, [t, l, n]),
    t || n !== ee.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
        ? null
        : (0, r.jsx)("div", {
              className: eu.A,
              children: (0, r.jsxs)("div", {
                  className: eu.rs,
                  children: [
                      (0, r.jsxs)("div", {
                          className: eu.vJ,
                          children: [
                              (0, r.jsx)(et.D, {
                                  variant: "heading-xl/medium",
                                  color: "text-strong",
                                  children: ea.intl.string(ea.t.jzjJQg),
                              }),
                              (0, r.jsx)(Q.E, {
                                  variant: "body-md/normal",
                                  color: "text-muted",
                                  children: ea.intl.string(ea.t["5dOfxb"]),
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: eu.S1,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: eu.bS,
                                  children: [
                                      (0, r.jsx)(en.WidgetsPlusIcon, {}),
                                      (0, r.jsx)(Q.E, {
                                          variant: "body-md/medium",
                                          color: "interactive-text-default",
                                          children: ea.intl.string(ea.t.S6VRyK),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eu.bS,
                                  children: [
                                      (0, r.jsx)(er.BellIcon, {}),
                                      (0, r.jsx)(Q.E, {
                                          variant: "body-md/medium",
                                          color: "interactive-text-default",
                                          children: ea.intl.string(ea.t.xq8CKY),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eu.bS,
                                  children: [
                                      (0, r.jsx)(ei.VideoIcon, {}),
                                      (0, r.jsx)(Q.E, {
                                          variant: "body-md/medium",
                                          color: "interactive-text-default",
                                          children: ea.intl.string(ea.t.GwpRe0),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eu.bS,
                                  children: [
                                      (0, r.jsx)(el.SoundboardIcon, {}),
                                      (0, r.jsx)(Q.E, {
                                          variant: "body-md/medium",
                                          color: "interactive-text-default",
                                          children: ea.intl.string(ea.t.VUoC5F),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var ec = n(232554),
    eh = n(351906),
    ef = n(243612),
    eg = n(391973),
    ep = n(881957),
    em = n(5463),
    eA = n(129537),
    ey = n(127242),
    ev = n(968898),
    eE = n(481484),
    ex = n(545807),
    ew = n(652215),
    eb = n(361729),
    eC = n(645280);
let eN = [],
    eO = i.memo(function (e) {
        let {
                widget: t,
                renderWidget: n,
                renderTitle: s,
                renderButtons: a,
                resizeValidation: u,
                containerRenderGate: d,
                inGameVisibility: c,
                className: f,
                dragContainerClassName: p,
            } = e,
            m = (0, l.bG)([h.A], () => h.A.getWidgetConfig(t.type), [t.type]),
            A = (0, ev.RE)(t.id, 7e3),
            v = (0, eE.A)(),
            [x, b] = i.useState(() => d?.stores ?? eN);
        (0, o.Ay)(() => {
            b(d?.stores ?? eN);
        });
        let N = (0, l.bG)(x, () => d?.shouldRender({ widget: t, locked: v }) ?? !0, [d, v, t]),
            [O] = i.useState(() => c?.stores ?? eN),
            _ = (0, l.bG)(O, () => c?.isShownInGame(t) ?? t.pinned, [c, t]),
            D = (0, ex.A)(),
            S = (0, l.bG)([g.A], () => g.A.windowSize((0, y.Q2)(D))),
            I = i.useCallback((e, t, n, r, i) => {
                let l = g.A.windowSize((0, y.Q2)((0, ex.b)())),
                    s = (0, em.NO)(n, l),
                    o = (0, em.R9)(r, l);
                ((0, eg.uD)(t), (0, eg.Ju)({ widgetId: t, anchor: s, size: o }));
                let a = e === eA.P.MOVE,
                    u = (0, em.Ly)(n, l.width, l.height, i.width, i.height);
                (0, w.g)(ew.HAw.OVERLAY_LAYOUT_UPDATED, {
                    was_resized: !a,
                    was_dragged: a,
                    widget_type: h.A.getWidgetType(t),
                    window_width: l.width,
                    window_height: l.height,
                    widget_width: i.width,
                    widget_height: i.height,
                    widget_left: u.left,
                    widget_top: u.top,
                });
            }, []),
            j = i.useCallback((e) => {
                (0, eg.uD)(e);
            }, []),
            { id: T, zIndex: k, size: R, anchor: P, minSize: L } = t,
            M = i.useMemo(() => (0, em.fd)(R, S), [R, S]),
            G = (0, em.Nv)(P, S),
            { resizeX: U, resizeY: K, dragAnywhere: W, constrainAutoSizeToExplicitResizeEvents: B } = m ?? {},
            F = !v,
            V = _ || !v,
            H = i.useMemo(() => ({ minX: 0, minY: 0, maxX: S.width, maxY: S.height }), [S]),
            Y = i.useCallback(
                (e) => n({ ...e, widget: t, dragging: null != e.dragOperation, className: f }),
                [t, n, f],
            ),
            z = null != m && m.layoutPolicy !== ep.X.DEBUG,
            J = i.useCallback(
                (e) =>
                    null != s || null != a || z
                        ? (0, r.jsxs)("div", {
                              className: C()(eC.vJ, A && eC.vw),
                              children: [
                                  s?.(t),
                                  a?.(t, e),
                                  z
                                      ? (0, r.jsx)(ev.hM, {
                                            label: ea.intl.string(eb.default.uF5NtC),
                                            onClick: () => (0, eg.sx)([t.id], !0),
                                        })
                                      : null,
                              ],
                          })
                        : null,
                [t, s, A, a, z],
            ),
            $ = (0, l.bG)([ey.A], () => ey.A.hasRenderDebugMode(E.x7.WidgetAreas)),
            X = i.useMemo(() => {
                if (null != u) return (e) => u({ ...e, widget: t });
            }, [u, t]);
        return N
            ? (0, r.jsx)(eA.A, {
                  className: C()({ [eC.Yz]: $, [eC.xu]: $ && !_, [eC.E]: $ && _ }, p),
                  id: T,
                  size: M,
                  anchor: G,
                  container: H,
                  minSize: L ?? { width: 0, height: 0 },
                  hidden: !V,
                  locked: v,
                  resizeX: U ?? !1,
                  resizeY: K ?? !1,
                  style: { zIndex: k },
                  dragAnywhere: W ?? !1,
                  constrainAutoSizeToExplicitResizeEvents: B ?? !1,
                  active: F,
                  onUpdate: I,
                  onClick: j,
                  targetWindow: D,
                  forceShowExtras: A,
                  renderExtras: J,
                  resizeValidation: X,
                  children: Y,
              })
            : null;
    });
var e_ = n(415173),
    eD = n(644434);
function eS(e) {
    return e.widget.id;
}
function eI(e, t, n, i) {
    return n === ec.wL.YEETED ? null : (0, r.jsx)(eO, { ...t, transitionState: n, cleanUp: i }, e);
}
let ej = [];
function eT() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.A,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.A,
        n = e.getLayout(eD.GJ);
    if (null == n) return ej;
    let r = [];
    for (let i of n.widgets) {
        let n = e.getWidget(i);
        if (null == n || n.hidden) continue;
        let l = e_.A[n.type];
        null != l &&
            (null == l.predicate || l.predicate()) &&
            (t.isOverlayWidgetDisabled(n.type) || r.push({ widget: n, ...l }));
    }
    return r;
}
let ek = i.memo(function (e) {
    let { className: t } = e,
        n = (0, ex.A)(),
        s = (0, l.bG)([g.A], () => g.A.windowSize((0, y.Q2)(n))),
        o = (0, l.bG)([h.A, eh.A], () => eT(h.A, eh.A), [], ef.VC),
        a = i.useCallback((e) => (0, r.jsx)("div", { className: t, style: s, children: e }), [t, s]);
    return (0, r.jsx)(ec.F, { items: o, renderItem: eI, getItemKey: eS, wrapChildren: a });
});
var eR = n(887287),
    eP = n(222506);
let eL = new Set(["shift", "ctrl", "control", "alt", "meta", "os"]);
function eM(e) {
    let { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: l } = e;
    return { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: l };
}
function eG(e, t) {
    return (
        e.keyCode === t.keyCode &&
        e.shiftKey === t.shiftKey &&
        e.metaKey === t.metaKey &&
        e.altKey === t.altKey &&
        e.ctrlKey === t.ctrlKey
    );
}
var eU = n(302614),
    eK = n(861862),
    eW = n(592598),
    eB = n(237984),
    eF = n(394072),
    eV = n(667419),
    eH = n(528772),
    eY = n(944775),
    ez = n(177303),
    eJ = n(427603),
    e$ = n(980504),
    eX = n(355870);
let eQ = i.memo(function () {
    let [e, t] = (0, l.yK)([eH.A], () => [eH.A.enabled, eH.A.keepOpen]),
        n = (0, l.bG)([f.Ay], () => f.Ay.getVoiceChannelId()),
        i = (0, l.bG)([B.A], () => B.A.getChannel(n), [n]),
        s = i?.getGuildId();
    return e && null != i
        ? (0, r.jsx)(eU.A, {
              className: eX.k,
              children: (0, r.jsx)(ez.A, {
                  width: e$.ed.width,
                  height: e$.ed.height,
                  guildId: s,
                  channel: i,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, eJ.A)();
                      null != e && (0, eY.Lk)(e);
                  },
                  analyticsSource: "overlay",
              }),
          })
        : null;
});
var eq = n(934058),
    eZ = n(190488),
    e0 = n(630398),
    e1 = n(233470),
    e2 = n(743082),
    e3 = n(897720),
    e8 = n(312130),
    e5 = n(856988),
    e4 = n(155037),
    e6 = n(73153),
    e7 = n(46653);
let e9 = { users: {} };
class te extends l.Ay.DeviceSettingsStore {
    static displayName = "ConjureServerOverlayWidgetNoticeStore";
    static persistKey = "ConjureServerOverlayWidgetNoticeStore";
    initialize(e) {
        (this.waitFor(e7.default), (e9 = { users: e?.users ?? {} }));
    }
    isDismissed(e) {
        let t = e7.default.getId();
        return null != t && (e9.users[t]?.includes(e) ?? !1);
    }
    getUserAgnosticState() {
        return e9;
    }
}
let tt = new te(e6.h, {
    CONJURE_SERVER_OVERLAY_WIDGET_NOTICE_DISMISS: function (e) {
        let { applicationId: t } = e,
            n = e7.default.getId();
        if (null == n) return !1;
        let r = e9.users[n] ?? [];
        if (r.includes(t)) return !1;
        e9 = { users: { ...e9.users, [n]: [...r, t].slice(-200) } };
    },
});
var tn = n(331322),
    tr = n(255324);
let ti = Array.from(new Set(Object.values(e_.A).flatMap((e) => e?.containerRenderGate?.stores ?? []))),
    tl = [h.A, eh.A, ...ti];
function ts(e) {
    let { onBrowse: t } = e;
    return (0, l.bG)(tl, () =>
        eT(h.A, eh.A).every((e) => {
            let { widget: t, containerRenderGate: n } = e;
            return n?.shouldRender({ widget: t, locked: !1 }) === !1;
        }),
    )
        ? (0, r.jsx)(eU.A, {
              className: tr.p$,
              children: (0, r.jsxs)(tn.B, {
                  align: "center",
                  gap: 12,
                  "data-testid": "overlay-widgets-empty-state",
                  children: [
                      (0, r.jsx)(S.WidgetsIcon, { size: "lg", color: "currentColor" }),
                      (0, r.jsxs)(tn.B, {
                          align: "center",
                          gap: 4,
                          children: [
                              (0, r.jsx)(et.D, {
                                  variant: "heading-lg/semibold",
                                  color: "text-strong",
                                  children: ea.intl.string(eb.default.Fgbxdv),
                              }),
                              (0, r.jsx)(Q.E, {
                                  variant: "body-md/normal",
                                  color: "text-muted",
                                  children: ea.intl.string(eb.default.Flw3aW),
                              }),
                          ],
                      }),
                      (0, r.jsx)(D.$, {
                          variant: "overlay-primary",
                          icon: S.WidgetsIcon,
                          text: ea.intl.string(eb.default["Qk/rJB"]),
                          onClick: t,
                      }),
                  ],
              }),
          })
        : null;
}
var to = n(776162),
    ta = n(672396),
    tu = n(558606);
let td = !p.isPlatformEmbedded && !1,
    tc = td
        ? (0, r.jsx)(U.A, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: tu.pN,
              autoPlay: !0,
              loop: !0,
              muted: !0,
          })
        : null;
function th(e) {
    e.preventDefault();
}
function tf(e) {
    (0, L.L3)(
        e,
        async () => {
            let { default: e } = await n.e(386437).then(n.bind(n, 171300));
            return (t) => (0, r.jsx)(e, { ...t, layoutId: eD.GJ, version: 4 });
        },
        { context: ew.BRT.OVERLAY },
    );
}
let tg = i.memo(function (e) {
        let { keybind: t, onClick: n, locked: i, widgetsPanelOpen: l, onToggleWidgetsPanel: s } = e;
        return (0, r.jsx)(O.D, {
            "data-testid": "overlay-background",
            "data-locked": i,
            className: C()(tu.LK, { [tu.Zo]: !i, [tu.vZ]: i }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: r, button: i } = e;
                i === ew.hE4.PRIMARY && t === r && n();
            },
            onContextMenu: tf,
            children: i
                ? null
                : (0, r.jsxs)(eU.A, {
                      className: tu.BE,
                      children: [
                          (0, r.jsxs)(_.e, {
                              size: "sm",
                              children: [
                                  (0, r.jsx)(D.$, {
                                      "data-testid": "overlay-widgets-browse-button",
                                      variant: l ? "overlay-primary" : "overlay-secondary",
                                      icon: S.WidgetsIcon,
                                      text: ea.intl.string(eb.default["Qk/rJB"]),
                                      "aria-expanded": l,
                                      onClick: s,
                                  }),
                                  (0, r.jsx)(D.$, {
                                      "data-testid": "overlay-widgets-hide-all-button",
                                      variant: "overlay-secondary",
                                      icon: I.EyeSlashIcon,
                                      text: ea.intl.string(eb.default.MpBSOt),
                                      onClick: eV.ff,
                                  }),
                                  (0, r.jsx)(D.$, {
                                      "data-testid": "overlay-widgets-reset-button",
                                      variant: "overlay-secondary",
                                      icon: j.RefreshIcon,
                                      text: ea.intl.string(ea.t["hW+EMu"]),
                                      onClick: eV.eL,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(Z, {
                              "data-testid": "overlay-report-button",
                              onClick: () => (0, eB.b)(M.A.OVERLAY, ew.BRT.OVERLAY),
                              IconComponent: T.FlagIcon,
                          }),
                          (0, r.jsx)(Z, {
                              "data-testid": "overlay-close-button",
                              keybind: t,
                              onClick: n,
                              IconComponent: k.XLargeIcon,
                          }),
                      ],
                  }),
        });
    }),
    tp = i.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, r.jsx)(eU.A, {
                  className: tu.BE,
                  children: (0, r.jsx)(Z, {
                      "data-testid": "overlay-unlock-button",
                      onClick: () => s.A.setInputLocked(!1, eR.A.getTargetPID()),
                      IconComponent: R.LockUnlockedIcon,
                  }),
              })
            : null;
    });
function tm() {
    s.A.setInputLocked(!0, eR.A.getTargetPID());
}
function tA(e) {
    let t = eP.A.isInputLocked(eR.A.getTargetPID());
    ("alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? z._.dispatch(ew.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && z._.dispatch(ew.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })),
        (function (e, t) {
            if (t || "keydown" !== e.type.toLowerCase()) return;
            let n = e.key.toLowerCase();
            ("escape" === n || "esc" === n) && s.A.setInputLocked(!0, eR.A.getTargetPID());
        })(e, t),
        (td || (0, eF.SE)()) &&
            (function (e) {
                if ("keydown" !== e.type.toLowerCase() || e.repeat) return !1;
                let t = H.Ay.getOverlayKeybind();
                return (
                    !!t.enabled &&
                    0 !== t.shortcut.length &&
                    (0, J.pi)(t.shortcut).some(
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
            (e.preventDefault(), e.stopPropagation(), s.A.setInputLocked(!t, eR.A.getTargetPID())));
}
let ty = i.memo(function () {
        return (0, l.bG)([ey.A], () => ey.A.hasRenderDebugMode(E.x7.WindowContainer))
            ? (0, r.jsx)("div", { className: tu.N1 })
            : null;
    }),
    tv = i.memo(function () {
        let e = (0, ex.A)(),
            t = (0, l.bG)([eR.A], () => eR.A.getTargetPID()),
            n = (0, l.bG)([eP.A], () => eP.A.isInputLocked(t), [t]),
            s = (0, l.bG)([eR.A], () => eR.A.isFocused(t), [t]),
            o = (0, l.bG)(
                [H.Ay],
                () => (null != H.Ay.getOverlayKeybind() ? (0, J.dI)(H.Ay.getOverlayKeybind()?.shortcut, !0) : "???"),
                [],
            );
        i.useEffect(() => {
            if ((z._.dispatch(ew.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), n))
                return (
                    (0, N.K3)("popout"),
                    e.addEventListener("contextmenu", th, !1),
                    () => {
                        e.removeEventListener("contextmenu", th, !1);
                    }
                );
            e.removeEventListener("contextmenu", th, !1);
        }, [n, e]);
        let [a, u] = i.useState(!1);
        n && a && u(!1);
        let d = i.useCallback(() => u((e) => !e), []),
            c = i.useCallback(() => u(!0), []),
            h = i.useCallback(() => u(!1), []);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tg, { locked: n, keybind: o, onClick: tm, widgetsPanelOpen: a, onToggleWidgetsPanel: d }),
                (0, r.jsx)(ek, { className: C()({ [tu.ZK]: n, [tu.al]: !n }) }),
                n || a ? null : (0, r.jsx)(ts, { onBrowse: c }),
                !n && a ? (0, r.jsx)(to.Ay, { onClose: h }) : null,
                (td || (0, eF.SE)()) && (0, r.jsx)(tp, { locked: n, focused: s }),
                (0, r.jsx)(ed, { locked: n }),
            ],
        });
    });
function tE() {
    var e, t;
    let n,
        a,
        u,
        d,
        c,
        p,
        m,
        A,
        v,
        E,
        x,
        w,
        b,
        C,
        N,
        O,
        _,
        D,
        S,
        I,
        j,
        T,
        k,
        R,
        L,
        U = (0, ex.A)(),
        z = (0, l.bG)([Y.default], () => Y.default.incompatibleApp),
        Q = (0, l.bG)(
            [g.A],
            () => {
                let e = (0, y.Q2)(U),
                    t = g.A.windowSize(e);
                return t.height < 360 || t.width < 640;
            },
            [U],
        ),
        { analyticsLocations: q } = (0, G.Ay)(M.A.OVERLAY);
    return (
        (n = (0, ex.A)()),
        (a = (0, l.bG)([eR.A], () => eR.A.getTargetPID(), [])),
        (u = (0, l.bG)(
            [H.Ay],
            () => {
                let e = H.Ay.getOverlayKeybind();
                return null != e ? e.shortcut : [];
            },
            [],
        )),
        (d = (0, l.bG)([eP.A], () => eP.A.isInputLocked(a), [a])),
        (c = (0, l.bG)(
            [g.A],
            () => {
                let e = (0, y.Q2)(n);
                return g.A.isVisible(e) && g.A.isFocused(e);
            },
            [n],
        )),
        (p = i.useRef([])),
        (m = i.useMemo(() => (0, J.pi)(u).map((e) => eM(e)), [u])),
        (A = i.useMemo(() => u.length > 0, [u])),
        (v = !d && A && c),
        i.useEffect(() => {
            p.current = [];
        }, [d, m]),
        i.useEffect(() => {
            if (!v) {
                p.current = [];
                return;
            }
            function e(e) {
                let t = eM(e),
                    n = p.current,
                    r = n.some((e) => eG(e, t)),
                    i = (function (e) {
                        let t = e.key.toLowerCase();
                        for (let e of eL) if (t.includes(e)) return !0;
                        return !1;
                    })(e);
                (r || i || n.push(t),
                    0 !== m.length &&
                        n.length === m.length &&
                        m.every((e) => n.some((t) => eG(e, t))) &&
                        (e.preventDefault(), e.stopPropagation()));
            }
            function t(e) {
                let t = eM(e),
                    n = p.current,
                    r = n.findIndex((e) => eG(e, t));
                r > -1 && n.splice(r, 1);
            }
            return (
                n.addEventListener("keydown", e, !0),
                n.addEventListener("keyup", t, !0),
                () => {
                    (n.removeEventListener("keydown", e, !0), n.removeEventListener("keyup", t, !0));
                }
            );
        }, [v, m, n]),
        (0, o.Ay)(() => {
            (0, $.E)();
        }),
        (E = (0, ex.A)()),
        (e = () => {
            (s.A.overlayReady(eR.A.getTargetPID()),
                E.addEventListener("keydown", tA, !0),
                E.addEventListener("keyup", tA));
        }),
        (t = () => {
            (E.removeEventListener("keydown", tA, !0), E.removeEventListener("keyup", tA));
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
        (w = i.useRef(null)),
        (0, o.Ay)(() => {
            let e = (0, ef.qv)(),
                t = f.Ay.getVoiceChannelId(),
                n = B.A.getChannel(t),
                r = null != n ? F.A.getGuild(n.guild_id) : null,
                i = null != W.A.getCurrentUserActiveStream(),
                l = null != t,
                o = (0, K.A)(V.Ay) && !i && null != e,
                a = l && null != r && null != t,
                u = eR.A.getTargetPID();
            if (eK.default.hasChangedRenderMode(u)) return;
            let d = eW.A.isNotificationDisabled(ta.KS.WelcomeNudge),
                c = eW.A.isNotificationDisabled(ta.KS.GoLiveNudge),
                h = eW.A.isNotificationDisabled(ta.KS.ActivityInvite),
                g = [];
            (!d &&
                (g.push({ type: ta.Jr.WELCOME }),
                !c &&
                    (o && a
                        ? g.push({ type: ta.Jr.GO_LIVE_VOICE, game: e, voiceChannelId: t, voiceGuild: r })
                        : o && g.push({ type: ta.Jr.GO_LIVE_NON_VOICE, game: e })),
                h || g.push({ type: ta.Jr.CONTENT_INVENTORY, entries: [] })),
                null != w.current && clearTimeout(w.current),
                (w.current = setTimeout(() => {
                    s.A.overlayMounted(...g);
                }, 1e3)));
        }),
        (0, o.l0)(() => {
            null != w.current && (clearTimeout(w.current), (w.current = null));
        }),
        ((b = (0, e8.H)()),
        i.useEffect(() => {
            b && (0, e1.listProjects)();
        }, [b]),
        (0, e0.A)({ refetchOnMount: !1 }),
        (C = (0, eE.A)()),
        (N = (0, l.yK)([eq.A, tt, F.A], () =>
            eq.A.getServerProjects().filter((e) => {
                let t = e.application_id;
                return (
                    null != e.guild_id &&
                    null != F.A.getGuild(e.guild_id) &&
                    !eq.A.isServerProjectEnabled(t) &&
                    !tt.isDismissed(t)
                );
            }),
        )),
        (O = i.useRef(new Set())),
        i.useEffect(() => {
            if (C) return void O.current.clear();
            for (let e of N) {
                if (O.current.size >= 3) return;
                let t = e.application_id;
                O.current.has(t) ||
                    (O.current.add(t), e6.h.dispatch({ type: "CONJURE_SERVER_OVERLAY_WIDGET_NOTIFY", project: e }));
            }
        }, [C, N]),
        (_ = (0, l.bG)([eq.A], () => eq.A.hasOwnedFetchSucceeded())),
        (D = (0, l.bG)([eq.A], () => eq.A.hasServerFetchSucceeded())),
        (S = (0, l.bG)([eq.A], () => eq.A.getProjects())),
        (I = i.useMemo(() => (b ? S : S.filter(eZ.j)), [b, S])),
        (j = b && _),
        (T = (0, l.bG)([h.A], () => null != h.A.getLayout(eD.GJ))),
        (k = i.useMemo(() => I.filter((e) => !(0, eZ.j)(e)), [I])),
        i.useEffect(() => {
            for (let e of k) (0, e2.fD)(e.id);
        }, [k]),
        (R = (0, eE.A)()),
        i.useEffect(() => {
            R || (0, e2.mw)(k.map((e) => e.id));
        }, [R, k]),
        (L = (0, l.yK)([h.A], () => h.A.getWidgetsByTypeAndLayout(ew.uss.CONJURE, eD.GJ))),
        i.useEffect(() => {
            if ((!j && !D) || !T) return;
            let e = h.A.getWidgetDefaultSettings(ew.uss.CONJURE);
            if (null == e) return;
            let t = (0, e5.c3)({
                layoutId: eD.GJ,
                listed: I,
                existing: L,
                layoutSize: g.A.windowSize((0, y.Q2)((0, ex.b)())),
                defaultSettings: e,
                removable: { owned: j, server: D },
            });
            if (!(0, e5.P$)(t)) {
                for (let e of t.deleteWidgetIds) (0, eg.uv)(e);
                for (let { widgetId: e, meta: n } of t.metaUpdates) (0, eg.cC)(e, { ...n });
                for (let { widgetId: e, minSize: n } of t.minSizeUpdates) (0, eg.Ju)({ widgetId: e, minSize: n });
                if ((t.create.length > 0 && (0, eg.uF)(t.create), t.deleteWidgetIds.length > 0)) {
                    let e = new Set();
                    for (let t of h.A.getWidgetsByTypeAndLayout(ew.uss.CONJURE, eD.GJ))
                        (0, e3.Du)(t) && e.add(t.meta.applicationId);
                    (0, e4.A)(e);
                }
            }
        }, [j, D, T, I, L]),
        Q || z)
            ? null
            : (0, r.jsx)(G.f5, {
                  value: q,
                  children: (0, r.jsxs)("div", {
                      id: "overlay-container",
                      className: tu.Lw,
                      children: [
                          tc,
                          (0, r.jsx)(tv, {}),
                          (0, r.jsx)(eQ, {}),
                          (0, r.jsx)(X.A, {}),
                          (0, r.jsx)(P.N, { appContext: ew.BRT.OVERLAY }),
                          (0, r.jsx)(ty, {}),
                      ],
                  }),
              })
    );
}
var tx = n(661886),
    tw = n(682763);
function tb(e, t) {
    tx.A.getPopoutInitializationStages()[e] !== t &&
        e6.h.dispatch({ type: "OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED", update: { [e]: t } });
}
n(96175);
var tC = n(366032);
(n(847181), n(921955));
let tN = !p.isPlatformEmbedded && !1,
    tO = new u.A("AppOverlay");
function t_(e, t) {
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
function tD() {
    s.A.setFocusedPID(A.DEV_PID, null);
}
function tS() {
    s.A.setFocusedPID(null, null);
}
let tI = i.memo(function (e) {
    let t,
        { withTitleBar: n, windowKey: u } = e;
    ((t = (0, l.bG)([d.A], () => d.A.getWindow(u))),
        (0, o.Ay)(() => {
            if (null == t) return;
            let e = tN || (0, eF.SE)();
            return (
                e &&
                    (t.document.hasFocus() && s.A.setFocusedPID(A.DEV_PID, null),
                    t.addEventListener("focus", tD),
                    t.addEventListener("blur", tS)),
                () => {
                    e && (t.removeEventListener("focus", tD), t.removeEventListener("blur", tS));
                }
            );
        }));
    let b = (function (e, t) {
            let n,
                r,
                a = (0, l.bG)(
                    [tx.A],
                    () => !!(!p.isPlatformEmbedded || (0, eF.SE)()) || tx.A.isWindowHandleInitialized(),
                ),
                u = (0, l.bG)([d.A], () => d.A.getWindow(e)),
                c = (0, l.bG)([eR.A], () => eR.A.getFocusedPID()),
                A = i.useMemo(() => !!(!p.isPlatformEmbedded || (0, eF.SE)()) || (null != c && -1 !== c), [c]),
                [x, b] = i.useState(!1),
                C = i.useRef(!1),
                N = i.useCallback(() => {
                    let e = eR.A.getTargetPID(),
                        n = null != f.Ay.getVoiceChannelId();
                    ((0, w.g)(ew.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: eR.A.isPinned(ew.uss.TEXT),
                        overlay_render_method: E.Ue[eK.default.getOverlayMethod(e)],
                        unpinned_widget_types: h.A.getAllUnpinnedPinnedWidgets(t),
                    }),
                        (0, tw.Fd)());
                }, [t]),
                O = i.useRef(!1),
                _ = i.useRef(null),
                D = i.useCallback(
                    async (e, t) => {
                        try {
                            if ((await t_(e, _), O.current)) return;
                            tb("cssLoaded", !0);
                        } catch (e) {
                            (tO.error("Timed out waiting for CSS to load", e),
                                s.A.setOverlayCrashed(eR.A.getTargetPID(), e),
                                tb("errorMessage", "CSS failed load"));
                            return;
                        }
                        try {
                            if (
                                (await (async function (e, t) {
                                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
                                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
                                    if (p.isPlatformEmbedded) {
                                        try {
                                            await m.Ay.isAlwaysOnTop(t);
                                        } catch (e) {
                                            (tO.error("Window does not exist while trying to show inactive", e),
                                                (0, v.pj)(e, E.Ue.OutOfProcess));
                                        }
                                        for (let i = 0; i < r; i++)
                                            try {
                                                if (!(await m.Ay.waitForIPCReady(n, e))) throw Error("IPC not ready");
                                                m.Ay.showInactive(t);
                                                return;
                                            } catch (e) {
                                                if (e.message?.includes("IPC") && i < r - 1) {
                                                    let t = (n / 2) * Math.pow(2, i + 1);
                                                    (tO.error(`Failed to show inactive, retrying in ${t}ms`, e),
                                                        await new Promise((e) => setTimeout(e, t)));
                                                } else throw ((0, v.pj)(e, E.Ue.OutOfProcess), e);
                                            }
                                    }
                                })(e, t),
                                O.current)
                            )
                                return;
                            (0, tw.Mq)();
                        } catch (e) {
                            (s.A.setOverlayCrashed(eR.A.getTargetPID(), e), tb("errorMessage", "showInactive failed"));
                            return;
                        }
                        (await new Promise((t) => {
                            e.setTimeout(() => t(), 100);
                        }),
                            O.current || (b(!0), N()));
                    },
                    [N],
                ),
                S = i.useRef(!1);
            return (
                i.useEffect(() => {
                    if (!C.current && (tb("hasUseEffectFired", !0), tb("trackedPidFocused", A), a)) {
                        if (null == u) return void tb("errorMessage", "No targetOverlayWindow");
                        if (!A) {
                            S.current ||
                                (s.A.updateOverlayState(
                                    eR.A.getTargetPID(),
                                    E.AR.WAITING_FOR_PID_FOCUS,
                                    "AppOverlay - not focused",
                                ),
                                (S.current = !0));
                            return;
                        }
                        ((C.current = !0), tb("reactInitializationStarted", !0), D(u, e));
                    }
                }, [D, A, e, u, a]),
                (0, o.l0)(() => {
                    (clearInterval(_.current), (O.current = !0));
                }),
                (n = (0, l.bG)([g.A], () => g.A.windowSize(null != u ? (0, y.Q2)(u) : void 0))),
                (r = (0, l.bG)([eR.A], () => eR.A.getFocusedWindowHandle())),
                i.useEffect(() => {
                    let e, t;
                    if (null != u && x && u.innerHeight === n.height && u.innerWidth === n.width)
                        return (
                            (e = u.requestAnimationFrame(() => {
                                e = u.requestAnimationFrame(() => {
                                    (u.clearTimeout(t), s.A.overlayUIFocusedPid(c ?? -1, r));
                                });
                            })),
                            (t = u.setTimeout(() => {
                                (u.cancelAnimationFrame(e), s.A.overlayUIFocusedPid(c ?? -1, r));
                            }, 500)),
                            () => {
                                (u.cancelAnimationFrame(e), u.clearTimeout(t));
                            }
                        );
                }, [x, u, c, r, n]),
                x
            );
        })(u, eD.GJ),
        C = (0, l.bG)([eR.A], () => eR.A.getFocusedPID()),
        N = (0, l.bG)([eP.A], () => eP.A.isInputLocked(C), [C]),
        O = (0, l.bG)([eK.default, eR.A], () =>
            (0, tC.S)(eR.A.getNativeLimitedInteraction(), eK.default.getOverlayMethod(eR.A.getTargetPID())),
        );
    return b
        ? (0, r.jsx)(x.p, {
              disabled: O,
              children: (0, r.jsxs)(c.A, {
                  themeOverride: ew.NJ8.ONYX,
                  appContext: ew.BRT.OVERLAY,
                  withTitleBar: n,
                  windowKey: u,
                  title: "Discord Overlay",
                  hideModals: N,
                  children: [(0, r.jsx)(tE, {}), (0, r.jsx)(a.Al, {})],
              }),
          })
        : null;
});
