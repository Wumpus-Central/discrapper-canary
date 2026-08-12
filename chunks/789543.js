"use strict";
n.d(t, { g: () => rx, A: () => rV }), n(321073);
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(435558),
    o = n.n(l),
    d = n(158390),
    c = n(17928),
    u = n(554146),
    _ = n(451988),
    E = n(97808),
    A = n(778712),
    h = n(922016),
    I = n(939249),
    f = n(140735),
    p = n(312138),
    T = n(192308),
    m = n(442433),
    g = n(820284),
    S = n(717558),
    N = n(964486),
    C = n(220839),
    O = n(397244),
    R = n(394871),
    L = n(682577),
    D = n(866323),
    y = n(746306);
function v(e) {
    let { text: t } = e,
        n = (0, D.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, i.jsx)("div", {
        className: y.k,
        children: n((e, t) => (0, i.jsx)(L.animated.div, { className: y.H, style: e, children: t })),
    });
}
var b = n(29160),
    M = n(793574),
    P = n(688810),
    U = n(992526),
    w = n(682618),
    G = n(982240),
    x = n(70283);
let k = [x.$.STREAMING, x.$.GAME_VARIETY, x.$.GAME_TIME, x.$.ACCOUNT_AGE];
var F = n(116833),
    V = n(43105),
    B = n(375708);
function H(e) {
    let t = "progress" === e.variant,
        n = t
            ? {
                  title: B.intl.string(B.t.uwDBSq),
                  body: B.intl.formatToPlainString(B.t.Mk5nzZ, { count: e.newBadgeCount }),
              }
            : { title: B.intl.string(B.t["5GD53o"]), body: B.intl.string(B.t["2Rb7tE"]) };
    return (0, i.jsx)(V.A, {
        targetElementRef: e.targetElementRef,
        shouldShow: !0,
        position: "top",
        alignmentStrategy: "edge",
        align: "left",
        caretConfig: { align: "start" },
        size: "lg",
        graphic: {
            type: "dynamic",
            component: F.DynamicGraphicComponent.BADGE_DIRECTORY_NUX,
            props: { hasProgress: t, badgeIconUrls: t ? e.badgeIconUrls : void 0 },
            aspectRatio: "21/9",
        },
        title: n.title,
        body: n.body,
        actions: [{ variant: "primary", text: B.intl.string(B.t.pHo9tZ), onClick: e.onPrimaryAction }],
        onRequestClose: e.onRequestClose,
    });
}
var j = n(470739),
    W = n(92111),
    Y = n(49999);
function K(e) {
    let { variantProps: t, targetElementRef: n, markAsDismissed: r } = e;
    return (0, i.jsx)(H, {
        ...t,
        onPrimaryAction: () => {
            r(Y.i.TAKE_ACTION), (0, j._)();
        },
        onRequestClose: () => r(Y.i.USER_DISMISS),
        targetElementRef: n,
    });
}
var $ = n(521502),
    z = n(380610),
    q = n(198052),
    Z = n(18235),
    X = n(183184),
    Q = n(384059),
    J = n(480890),
    ee = n(601255),
    et = n(562819),
    en = n(449582),
    ei = n(351952),
    er = n(88686),
    ea = n(174755),
    es = n(302223),
    el = n(248778),
    eo = n(609425),
    ed = n(922301),
    ec = n(660184),
    eu = n(643501),
    e_ = n(297264),
    eE = n(834730),
    eA = n(789645),
    eh = n(826673),
    eI = n(750506),
    ef = n(780964),
    ep = n(766075),
    eT = n(417146),
    em = n(552122),
    eg = n(717421),
    eS = n(775602),
    eN = n(186491);
let eC = { mass: 10, tension: 550, friction: 140 };
function eO(e) {
    let { className: t, pageMultiplier: n } = e,
        a = (0, c.bG)([eS.Ay], () => eS.Ay.useReducedMotion),
        [l, d] = r.useState({ x: 0, y: 0 }),
        u = r.useMemo(
            () =>
                o().throttle((e) => {
                    a || d({ x: (window.innerWidth - e.pageX * n) / 90, y: (window.innerHeight - e.pageY * n) / 90 });
                }, 20),
            [n, a],
        );
    r.useEffect(() => (window.addEventListener("mousemove", u), () => window.removeEventListener("mousemove", u)), [u]);
    let [_, E] = (0, eg.z)(() => ({ x: 0, y: 0, config: eC }));
    return (
        r.useEffect(() => {
            E({ x: l.x, y: l.y });
        }, [l.x, l.y, E]),
        (0, i.jsx)(L.animated.div, {
            style: { transform: (0, L.to)([_.x, _.y], (e, t) => `translate3d(${e}px, ${t}px, 0)`) },
            className: s()(eN.T, t),
        })
    );
}
var eR = n(364163);
function eL(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: r } = e,
        a = em.A.useIsEligible(),
        s = (0, eh.HX)(t),
        l = null != n,
        o = null != r ? { color: r } : void 0,
        { analyticsLocations: d } = (0, P.Ay)(M.A.HOLIDAY_COACHMARK);
    function c(e) {
        (0, eh.Dr)(t, { dismissAction: e });
    }
    function u() {
        (0, ep.openUserSettings)(ef.X.NOTIFICATIONS_PANEL, { analyticsLocations: d }), c(Y.i.TAKE_ACTION);
    }
    return a && !s
        ? (0, i.jsx)(eI.Ay, {
              children: (0, i.jsxs)("div", {
                  className: eR.iE,
                  style: { backgroundColor: l ? n : void 0 },
                  children: [
                      !l &&
                          (0, i.jsxs)("div", {
                              className: eR.o5,
                              children: [
                                  (0, i.jsx)(eO, { className: eR.iL, pageMultiplier: 5 }),
                                  (0, i.jsx)("div", { className: eR.Np }),
                              ],
                          }),
                      (0, i.jsx)("div", { className: eR.c8 }),
                      (0, i.jsxs)("div", {
                          className: eR.Qs,
                          children: [
                              (0, i.jsxs)("div", {
                                  children: [
                                      (0, i.jsx)(e_.D, {
                                          variant: "heading-md/bold",
                                          color: null != o ? void 0 : "text-overlay-light",
                                          style: o,
                                          children: B.intl.string(B.t["6CxPoB"]),
                                      }),
                                      (0, i.jsx)(eE.E, {
                                          variant: "text-xs/normal",
                                          color: "text-overlay-light",
                                          children: B.intl.format(B.t.IVzJ8G, {
                                              settingsHook: (e, t) =>
                                                  (0, i.jsx)(
                                                      I.D,
                                                      {
                                                          tag: "span",
                                                          className: eR.nf,
                                                          style: o,
                                                          onClick: u,
                                                          children: e,
                                                      },
                                                      t,
                                                  ),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(I.D, {
                                  className: eR.l2,
                                  onClick: () => c(Y.i.USER_DISMISS),
                                  children: (0, i.jsx)(eA.P, { color: "currentColor", size: "xs" }),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
function eD() {
    return null == eT.A.coachmarkDismissibleContent
        ? null
        : (0, i.jsx)(eL, {
              dismissibleContent: eT.A.coachmarkDismissibleContent,
              backgroundColor: eT.A.coachmarkBackgroundColor,
              specialTextColor: eT.A.coachmarkSpecialTextColor,
          });
}
var ey = n(74848),
    ev = n(607399),
    eb = n(707554),
    eM = n(224640),
    eP = n(305866),
    eU = n(364522),
    ew = n(22231),
    eG = n(812993),
    ex = n(935154),
    ek = n(780338),
    eF = n(980707),
    eV = n(26137),
    eB = n(473935),
    eH = n(765671),
    ej = n(176781),
    eW = n(320448),
    eY = n(993401),
    eK = n(890717);
function e$(e) {
    return (0, i.jsx)("div", {
        className: eK.wE,
        children: (0, i.jsx)(eF.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function ez(e) {
    let {
            action: t,
            onClick: n,
            icon: a,
            label: s,
            sublabel: l,
            trailing: o,
            renderSubmenu: d,
            ref: c,
            submenuTargetElementRef: u,
            submenuAlign: _,
        } = e,
        E = null != n,
        A = (0, eY.rE)({ action: t, onClick: n }),
        [f, p] = r.useState(!1),
        m = r.useRef(null),
        g = c ?? m,
        S = null != d,
        N = S && E,
        C = r.useCallback(() => {
            p(!0);
        }, []),
        O = r.useCallback(() => {
            (0, T.hasAnyModalOpen)() || p(!1);
        }, []);
    function R() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: eK.iA, children: (0, i.jsx)(a, { size: "xs", color: "currentColor" }) }),
                (0, i.jsxs)("div", {
                    className: eK.$H,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(eE.E, {
                                    color: "currentColor",
                                    variant: "text-sm/medium",
                                    className: eK.W1,
                                    children: s,
                                }),
                                (0, i.jsx)(eE.E, { color: "currentColor", variant: "text-xs/medium", children: l }),
                            ],
                        }),
                        o,
                    ],
                }),
            ],
        });
    }
    function L(e) {
        let t;
        return (
            (t = N
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(I.D, { className: eK.ef, onClick: A, children: R() }),
                          (0, i.jsx)(I.D, {
                              className: eK.ap,
                              "aria-label": B.intl.string(B.t.PdRCRg),
                              ...e,
                              onClick: C,
                              children: (0, i.jsx)(eW._, { size: "xs", color: "currentColor" }),
                          }),
                      ],
                  })
                : S
                  ? (0, i.jsxs)(I.D, {
                        className: eK.ef,
                        ...e,
                        onClick: C,
                        children: [
                            R(),
                            (0, i.jsx)("div", {
                                className: eK.ap,
                                children: (0, i.jsx)(eW._, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    })
                  : (0, i.jsx)(I.D, { className: eK.ef, onClick: A, children: R() })),
            (0, i.jsx)("div", { ref: g, className: eK.jG, children: t })
        );
    }
    return S
        ? (0, i.jsx)("li", {
              className: eK.j$,
              onMouseEnter: C,
              onMouseLeave: O,
              children: (0, i.jsx)(h.Y, {
                  targetElementRef: u ?? g,
                  align: _,
                  spacing: 0,
                  renderPopout: d,
                  shouldShow: f,
                  onRequestClose: O,
                  children: L,
              }),
          })
        : (0, i.jsx)("li", { className: eK.j$, children: L() });
}
function eq(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var eZ = n(734066),
    eX = n(915725),
    eQ = n(409067),
    eJ = n(271597),
    e0 = n(475358),
    e1 = n(866665),
    e2 = n(408278),
    e3 = n(625903),
    e4 = n(404778),
    e5 = n(689175),
    e6 = n(821609),
    e7 = n(532624),
    e8 = n(927813),
    e9 = n(879631),
    te = n(350535),
    tt = n(974293),
    tn = n(572164),
    ti = n(953932),
    tr = n(280483),
    ta = n(890856),
    ts = n(713517),
    tl = n(609174),
    to = n(619744);
function td(e) {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        a = (0, tl.Y_)(),
        s = r.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), t?.(), (0, eJ.p)({ initialEditingClipId: a.id });
            },
            [a, t],
        );
    return (0, i.jsx)(e6.$, {
        onClick: s,
        icon: ew.R,
        variant: n,
        size: "sm",
        text: B.intl.string(B.t.bt75uw),
        fullWidth: !0,
    });
}
var tc = n(82716),
    tu = n(585579),
    t_ = n(930317),
    tE = n(285072),
    tA = n(13769);
let th = r.memo(function (e) {
    let { clip: t, isNew: n, onClose: a, className: l } = e,
        o = r.useRef(null),
        { isHoveringOrFocusing: d } = (0, ts.A)(o),
        c = r.useCallback(() => {
            a?.(), (0, eJ.p)({ initialEditingClipId: t.id });
        }, [t.id, a]);
    return (0, i.jsx)(tl.Cl, {
        clip: t,
        children: (0, i.jsx)(ta.s, {
            ref: o,
            "aria-label": B.intl.string(B.t.bt75uw),
            onClick: c,
            className: s()(tA.Z1, l),
            children: (0, i.jsxs)(t_.d, {
                isStatic: !0,
                children: [
                    n && (0, i.jsx)(eG.Lp, { className: tA.Ad, text: B.intl.string(B.t.y2b7CA) }),
                    (0, i.jsxs)(tE.h, {
                        isVisible: d,
                        className: tA.Lw,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tA.mY,
                                children: [(0, i.jsx)(tc.z, {}), (0, i.jsx)(to.k, {})],
                            }),
                            (0, i.jsxs)("div", {
                                className: tA.E_,
                                children: [
                                    (0, i.jsx)(td, { onBeforeEdit: a, variant: "overlay-secondary" }),
                                    (0, i.jsx)(tu.E, {}),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
var tI = n(696016),
    tf = n(652215),
    tp = n(753070),
    tT = n(16590),
    tm = n(301414);
function tg(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: a, setPopoutRef: s } = e;
    (0, tr.A)();
    let l = (0, c.yK)([eX.Ay], () => Object.values(eX.Ay.getClips())),
        o = (0, c.bG)([eX.Ay], () => eX.Ay.getSettings()),
        d = (0, c.bG)([eX.Ay], () => eX.Ay.getNewClipIds()),
        u = (0, tt.aJ)("ClipsPopout"),
        _ = (0, c.bG)([eX.Ay], () => eX.Ay.getEnableAutoclipping()),
        E = (0, c.bG)([e7.Ay], () => e7.Ay.getKeybindForAction(tf.hCu.SAVE_CLIP)),
        A = r.useCallback(
            (e) => {
                s?.(e);
            },
            [s],
        ),
        h = !o.showPovClipsInGallery,
        I = r.useMemo(() => {
            let e = l.filter((e) => e.type === tI.nQ.CLIP && "" !== e.thumbnail && (!h || !(0, eQ.kD)(e)));
            return e.sort((e, t) => t.createdAt - e.createdAt), e;
        }, [l, h]),
        f = r.useMemo(() => I.slice(0, 16), [I]),
        p = I.length > 16,
        T = null != E ? te.dI(E.shortcut, !0) : null,
        m = [
            (0, e9.$)(o.clipsLength / e8.A.Millis.SECOND),
            (0, tp.zr)(o.clipsQuality.resolution),
            B.intl.formatToPlainString(B.t.Qb44XH, { fps: o.clipsQuality.frameRate }),
        ];
    return (
        u && m.push(B.intl.string(tT.default.XWkJoi)),
        (0, i.jsxs)("div", {
            ref: A,
            className: tm.SW,
            role: "dialog",
            "aria-label": B.intl.string(B.t.z2jK6X),
            children: [
                (0, i.jsxs)("div", {
                    className: tm.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tm.$,
                            children: [
                                (0, i.jsx)(e_.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: B.intl.string(B.t.z2jK6X),
                                }),
                                null != T && (0, i.jsx)(e0.e, { className: tm.P, shortcut: T }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tm.$s,
                            children: [
                                (0, i.jsx)(e1.m, {
                                    text: B.intl.string(B.t["3D5yo/"]),
                                    children: (0, i.jsx)(e2.K, {
                                        onClick: () => n(),
                                        icon: e3.Z,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": B.intl.string(B.t["3D5yo/"]),
                                    }),
                                }),
                                (0, i.jsx)(e1.m, {
                                    text: B.intl.string(tT.default["55C2MH"]),
                                    children: (0, i.jsx)(e2.K, {
                                        onClick: () => t(),
                                        icon: ej.x,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": B.intl.string(tT.default["55C2MH"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: tm.ov,
                    children: [
                        m.map((e, t) =>
                            (0, i.jsxs)(
                                r.Fragment,
                                {
                                    children: [
                                        t > 0 && (0, i.jsx)("span", { className: tm.LO, children: "\u2022" }),
                                        (0, i.jsx)(eE.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            tag: "span",
                                            className: tm.c5,
                                            children: e,
                                        }),
                                    ],
                                },
                                e,
                            ),
                        ),
                        u &&
                            (0, i.jsx)(eE.E, {
                                variant: "text-xs/semibold",
                                color: _ ? "text-strong" : "text-feedback-critical",
                                tag: "span",
                                className: tm.wS,
                                children: _ ? B.intl.string(tT.default.lTwKmt) : B.intl.string(tT.default.GNDqtf),
                            }),
                    ],
                }),
                (0, i.jsx)(e4.c, {}),
                f.length > 0
                    ? (0, i.jsxs)(e5.Ch, {
                          className: tm.Vg,
                          fade: !0,
                          disableFocusRingScope: !0,
                          children: [
                              f.map((e) => (0, i.jsx)(th, { clip: e, isNew: d.includes(e.id), onClose: a }, e.id)),
                              p &&
                                  (0, i.jsx)("div", {
                                      className: tm.qr,
                                      children: (0, i.jsx)(e6.$, {
                                          onClick: () => t(),
                                          text: B.intl.string(tT.default["55C2MH"]),
                                          variant: "secondary",
                                          size: "sm",
                                      }),
                                  }),
                          ],
                      })
                    : (0, i.jsx)(tS, { keybindString: T }),
            ],
        })
    );
}
function tS(e) {
    let { keybindString: t } = e,
        n = (0, tn.Et)();
    return (0, i.jsxs)("div", {
        className: tm.p$,
        children: [
            (0, i.jsx)(eE.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: tm.qO,
                children: B.intl.string(tT.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(eE.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: tm.CZ,
                      children: B.intl.format(tT.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, i.jsx)(
                                  eE.E,
                                  {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-positive",
                                      tag: "span",
                                      children: e,
                                  },
                                  "protip",
                              ),
                          keybind: (0, i.jsx)(e0.e, { shortcut: t }),
                      }),
                  })
                : (0, i.jsx)(ti.A, {}),
        ],
    });
}
function tN(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        a = (0, eZ.sw)(),
        s = !(0, c.bG)([eX.Ay], () => eX.Ay.getSettings().showPovClipsInGallery),
        l = (0, c.bG)([eX.Ay], () => {
            let e = eX.Ay.getNewClipIds();
            return s
                ? e.filter((e) => {
                      let t = eX.Ay.getClipById(e);
                      return null != t && !(0, eQ.kD)(t);
                  }).length
                : e.length;
        }, [s]),
        o = r.useCallback(
            (e) => {
                t(), (0, eJ.p)({ initialEditingClipId: e });
            },
            [t],
        ),
        d = r.useCallback(() => {
            t(), (0, ep.openUserSettings)(ef.X.CLIPS_PANEL);
        }, [t]);
    return a
        ? (0, i.jsx)(ez, {
              action: "PRESS_CLIPS",
              icon: ej.x,
              label: B.intl.string(B.t.z2jK6X),
              trailing: l > 0 ? (0, i.jsx)(eG.hV, { count: l }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, i.jsx)(tg, { ...e, onOpenGallery: o, onOpenSettings: d, onClose: t }),
          })
        : null;
}
var tC = n(480335),
    tO = n(577390),
    tR = n(372320),
    tL = n(31956),
    tD = n(744808),
    ty = n(645507),
    tv = n(131607),
    tb = n(970931),
    tM = n(315710),
    tP = n(832248),
    tU = n(462887),
    tw = n(736653),
    tG = n(439174),
    tx = n(158045),
    tk = n(878784),
    tF = n(202541);
function tV() {
    let e = (0, tk.Xb)(),
        t = (0, tx.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tF.sp.length - 1; t >= 0; t--) {
        let i = tF.VD[tF.sp[t]],
            r = new Date(e);
        if ((r.setMonth(e.getMonth() + i.tenureReqNumMonths), r.setHours(r.getHours() + 30), n > r.getTime()))
            if (n - r.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let tB = {
        [tF.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tF.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tF.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tF.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tF.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tF.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tF.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tF.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tH = {
        [tF.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [tF.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [tF.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [tF.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [tF.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [tF.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [tF.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [tF.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var tj = n(620701);
let tW = r.lazy(() => Promise.all([n.e("3379"), n.e("24832")]).then(n.bind(n, 748579)));
function tY() {
    let e = (0, c.bG)([eS.Ay], () => eS.Ay.useReducedMotion),
        t = (0, tP.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tV(),
                t = (0, tU.M)((0, tw.Ay)());
            if (null == e) return null;
            let n = tB[e],
                i = tH[e],
                r = {
                    currentBadge: (0, tG.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                a = tF.sp.indexOf(e);
            if (a > 0) {
                let e = tF.sp[a - 1],
                    n = tB[e];
                (r.prevBadge = (0, tG.e0)(e)), (r.prevBadgeTextGradient = t ? n?.dark : n?.light);
            }
            return r;
        })(),
        [a, s] = r.useState(null);
    return (null != n && null == a && s(n), e || !t || null == a) ? null : (0, i.jsx)(tK, { levelUpData: a });
}
function tK(e) {
    let { levelUpData: t } = e,
        n = r.useRef(null),
        a = r.useCallback(() => {
            tP.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, i.jsx)(tM.Ok, {
        containerRef: n,
        children: (0, i.jsxs)("div", {
            className: tj.i,
            children: [
                (0, i.jsx)("div", {
                    className: tj.b,
                    children: (0, i.jsx)(e1.m, {
                        text: B.intl.string(B.t.cpT0Cq),
                        children: (0, i.jsx)(e2.K, {
                            icon: eA.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: a,
                            "aria-label": B.intl.string(B.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, i.jsx)(r.Suspense, { fallback: null, children: (0, i.jsx)(tW, { levelUpData: t }) }),
            ],
        }),
    });
}
var t$ = n(206835),
    tz = n(183555),
    tq = n(465318),
    tZ = n(999291),
    tX = n(975732),
    tQ = n(718019),
    tJ = n(413492),
    t0 = n(915614),
    t1 = n(744753),
    t2 = n(559506),
    t3 = n(646986),
    t4 = n(563608),
    t5 = n(946356),
    t6 = n(465829),
    t7 = n(624479),
    t8 = n(206845),
    t9 = n(957565),
    ne = n(427262),
    nt = n(966184);
function nn(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: r } = (0, tz.NJ)();
    return t9.p5
        ? (0, i.jsx)(t8.A, {
              text: B.intl.string(B.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: ne.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => r({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(I.D, {
                      ...e,
                      className: s()(nt.c, { [nt.R]: n }),
                      "aria-label": B.intl.string(B.t.y5MwJy),
                      children: (0, i.jsx)(t7.T, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var ni = n(983495),
    nr = n(442228),
    na = n(885386),
    ns = n(290863),
    nl = n(351906),
    no = n(403362),
    nd = n(562153),
    nc = n(661531),
    nu = n(477782),
    n_ = n(628284),
    nE = n(695366),
    nA = n(363195),
    nh = n(889227),
    nI = n(287809),
    nf = n(174459),
    np = n(429707),
    nT = n(274303),
    nm = n(994125),
    ng = n(347853),
    nS = n(573879),
    nN = n(570660),
    nC = n(661439),
    nO = n(385113),
    nR = n(352003),
    nL = n(429913),
    nD = n(334074),
    ny = n(633075),
    nv = n(667049),
    nb = n(280450),
    nM = n(90165),
    nP = n(518477);
function nU(e) {
    let { targetElementRef: t, onClose: a } = e,
        [s, l] = r.useState(!1),
        o = (0, c.bG)([nb.default], () => nb.default.getId()),
        { eligibleApplications: d, markAsDismissed: _ } = (function () {
            let e = (0, c.yK)([nO.A], () => nO.A.getFeaturedApplicationIds());
            (0, nR.A)(e),
                r.useEffect(() => {
                    (0, nC.X)();
                }, []);
            let t = (0, c.bG)([nb.default], () => nb.default.getId()),
                n = (0, nv.A)(t),
                i = r.useMemo(() => n.filter((e) => e instanceof ny.R), [n]),
                a = (0, nL.A)(e),
                s = r.useMemo(() => a.filter(no.Vq), [a]),
                l = (0, c.cf)([nM.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = s.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = nM.A.getLastPlayedDateTime(e));
                    }
                    return t;
                }),
                o = r.useMemo(() => {
                    let e = Date.now();
                    return s.filter((t) => {
                        if (i.some((e) => e.applicationId === t.id)) return !1;
                        let n = l[t.id];
                        return null != n && e - n < 7776e6;
                    });
                }, [s, i, l]),
                { eligibleToShow: d, markAsDismissed: _ } = (0, nD.hj)({
                    applications: o,
                    dismissibleContent: u.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: nD.SH,
                });
            return {
                eligibleApplications: r.useMemo(() => o.filter((e) => d.includes(e.id)), [o, d]),
                markAsDismissed: _,
            };
        })();
    return ((0, r.useEffect)(() => {
        0 !== d.length &&
            Promise.all([
                n.e("99136"),
                n.e("25162"),
                n.e("78931"),
                n.e("35285"),
                n.e("53969"),
                n.e("92515"),
                n.e("46099"),
                n.e("33707"),
                n.e("79238"),
                n.e("57533"),
                n.e("6915"),
                n.e("27324"),
                n.e("16331"),
                n.e("78386"),
                n.e("9140"),
                n.e("72781"),
                n.e("47413"),
                n.e("48333"),
                n.e("83607"),
                n.e("83663"),
                n.e("10211"),
                n.e("9398"),
                n.e("2285"),
                n.e("97726"),
                n.e("8571"),
                n.e("97422"),
                n.e("6782"),
                n.e("21035"),
                n.e("72150"),
                n.e("26441"),
                n.e("56150"),
                n.e("330"),
                n.e("47906"),
                n.e("65751"),
                n.e("41893"),
                n.e("57885"),
                n.e("57504"),
                n.e("29096"),
                n.e("41828"),
                n.e("36248"),
                n.e("33996"),
                n.e("83118"),
                n.e("98942"),
                n.e("31076"),
                n.e("68961"),
                n.e("69167"),
                n.e("14883"),
                n.e("23102"),
                n.e("42394"),
                n.e("44459"),
                n.e("98986"),
                n.e("37467"),
                n.e("60411"),
                n.e("61298"),
                n.e("45807"),
                n.e("26572"),
                n.e("65640"),
                n.e("87356"),
                n.e("85391"),
                n.e("56356"),
                n.e("18307"),
                n.e("5270"),
                n.e("42293"),
                n.e("60574"),
                n.e("83554"),
                n.e("53412"),
                n.e("18917"),
                n.e("94450"),
                n.e("86307"),
                n.e("3574"),
                n.e("711"),
                n.e("73153"),
                n.e("25457"),
                n.e("40981"),
                n.e("75030"),
                n.e("63576"),
                n.e("50693"),
                n.e("6487"),
                n.e("69794"),
                n.e("20661"),
                n.e("69190"),
                n.e("18315"),
                n.e("17776"),
                n.e("78969"),
                n.e("77770"),
                n.e("61275"),
                n.e("49557"),
                n.e("30072"),
                n.e("18629"),
                n.e("48227"),
                n.e("37175"),
                n.e("13920"),
                n.e("99424"),
                n.e("670"),
                n.e("99496"),
                n.e("44565"),
                n.e("88563"),
                n.e("24212"),
                n.e("20459"),
                n.e("54960"),
                n.e("55455"),
                n.e("778"),
                n.e("75683"),
                n.e("23864"),
                n.e("47519"),
                n.e("80197"),
                n.e("48132"),
                n.e("61686"),
                n.e("77873"),
                n.e("97312"),
                n.e("38469"),
                n.e("9937"),
                n.e("84126"),
                n.e("33473"),
                n.e("11351"),
                n.e("56649"),
                n.e("94373"),
                n.e("62332"),
                n.e("8607"),
                n.e("27962"),
                n.e("68201"),
                n.e("64827"),
                n.e("63232"),
                n.e("7167"),
                n.e("84569"),
                n.e("61060"),
                n.e("10471"),
                n.e("52457"),
                n.e("60235"),
                n.e("77333"),
                n.e("6338"),
                n.e("47834"),
                n.e("18573"),
                n.e("97595"),
                n.e("47662"),
                n.e("44057"),
                n.e("13736"),
                n.e("28504"),
                n.e("31988"),
                n.e("62156"),
                n.e("44571"),
                n.e("34303"),
                n.e("40291"),
                n.e("2368"),
                n.e("33115"),
                n.e("97270"),
                n.e("73122"),
                n.e("8304"),
                n.e("93159"),
                n.e("55936"),
                n.e("89088"),
                n.e("30760"),
                n.e("94723"),
                n.e("30316"),
                n.e("62931"),
                n.e("45959"),
                n.e("58529"),
                n.e("81987"),
                n.e("58038"),
                n.e("71202"),
                n.e("75201"),
                n.e("76909"),
                n.e("6174"),
                n.e("93103"),
                n.e("34552"),
                n.e("7170"),
                n.e("7575"),
                n.e("8757"),
                n.e("72963"),
                n.e("54241"),
                n.e("24303"),
                n.e("21930"),
                n.e("59460"),
                n.e("85968"),
                n.e("75842"),
                n.e("68403"),
                n.e("88599"),
                n.e("29787"),
                n.e("71273"),
                n.e("9640"),
                n.e("52548"),
                n.e("95596"),
                n.e("53984"),
                n.e("43780"),
                n.e("51224"),
                n.e("29963"),
                n.e("92075"),
                n.e("23532"),
                n.e("90417"),
                n.e("67022"),
                n.e("99292"),
                n.e("50097"),
                n.e("33184"),
                n.e("76273"),
                n.e("52229"),
                n.e("95340"),
                n.e("36877"),
                n.e("3930"),
                n.e("3663"),
                n.e("46430"),
                n.e("89523"),
                n.e("63584"),
                n.e("29260"),
                n.e("82486"),
                n.e("4098"),
                n.e("755"),
                n.e("21778"),
                n.e("80098"),
                n.e("41786"),
                n.e("4374"),
                n.e("53683"),
                n.e("23934"),
                n.e("71294"),
                n.e("96574"),
                n.e("86546"),
                n.e("82969"),
                n.e("41990"),
                n.e("95118"),
                n.e("37065"),
                n.e("43256"),
                n.e("81004"),
                n.e("41384"),
                n.e("41923"),
                n.e("82816"),
                n.e("19119"),
                n.e("73566"),
                n.e("84601"),
                n.e("61075"),
                n.e("86470"),
                n.e("53308"),
                n.e("54876"),
                n.e("14501"),
                n.e("27880"),
                n.e("8032"),
                n.e("77970"),
                n.e("32026"),
                n.e("71367"),
                n.e("75072"),
                n.e("69443"),
                n.e("49282"),
                n.e("35683"),
                n.e("2091"),
            ]).then(n.bind(n, 577593));
    }, [d.length]),
    0 === d.length)
        ? null
        : (0, i.jsx)(V.A, {
              targetElementRef: t,
              position: "right",
              gradientColor: "blue",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/06b7b29c0f2eac5ce71823e813f9989b2a53aba0998090a4fa1d0ab6241127a9.svg",
              },
              title: B.intl.string(B.t.HMWL9c),
              body: B.intl.string(B.t["9hfy3A"]),
              onRequestClose: () =>
                  _(
                      d.map((e) => e.id),
                      Y.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: B.intl.string(B.t.VSLDly),
                      loading: s,
                      onClick: function () {
                          l(!0),
                              (0, tX.openUserProfileModal)({ userId: o, tabSection: nP.RP.WIDGETS })
                                  .then(() => {
                                      let e = d.map((e) => e.id);
                                      (0, T.openModalLazy)(
                                          async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("84126"),
                                                  n.e("33473"),
                                                  n.e("8888"),
                                                  n.e("4098"),
                                                  n.e("23934"),
                                                  n.e("82816"),
                                                  n.e("26623"),
                                              ]).then(n.bind(n, 850370));
                                              return (n) =>
                                                  (0, i.jsx)(t, {
                                                      ...n,
                                                      trackUserProfileEditAction: () => {},
                                                      highlightedApplicationIds: e,
                                                  });
                                          },
                                          { stackingBehavior: "stack" },
                                      ),
                                          _(
                                              d.map((e) => e.id),
                                              Y.i.TAKE_ACTION,
                                          ),
                                          a();
                                  })
                                  .finally(() => l(!1));
                      },
                  },
              ],
          });
}
var nw = n(461213),
    nG = n(818348),
    nx = n(373765);
function nk() {
    let e = (0, c.bG)([nw.A], () => nw.A.getStatus()),
        t = (0, ne.MU)(e) ?? "",
        n = e === nG.cl.INVISIBLE || e === nG.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: nx.k,
        children: [
            (0, i.jsxs)(f.A, { tag: "div", children: [B.intl.string(B.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(e1.m, {
                    text: B.intl.string(B.t.L99HQm),
                    children: (0, i.jsx)(nE.E, {
                        size: "xs",
                        color: nc.A.colors.STATUS_WARNING,
                        "aria-label": B.intl.string(B.t.L99HQm),
                    }),
                }),
        ],
    });
}
var nF = n(379848),
    nV = n(321191);
let nB = (0, n(945810).mj)({
    name: "2025-12-social-layer-storefront-wishlist-user-account-popout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var nH = n(501838),
    nj = n(760716),
    nW = n(915089),
    nY = n(284600);
function nK(e) {
    let {
            markAsDismissed: t,
            heading: n,
            subheading: a,
            children: l,
            height: o,
            className: d,
            contentClassName: c,
        } = e,
        u = (0, nW.GV)(),
        _ = r.useRef(null),
        E = (0, eg.z)({
            from: { transform: "translate3d(-110%, 0, 0)", height: o },
            to: { transform: "translate3d(0, 0, 0)", height: o },
            config: { mass: 1, stiffness: 100, damping: 15 },
            onRest: () => {
                null != _.current && _.current.focus();
            },
        });
    return (0, i.jsx)(L.animated.div, {
        className: s()(nY.kL, d),
        style: E,
        children: (0, i.jsxs)("aside", {
            "aria-labelledby": u,
            className: nY.Qs,
            children: [
                (0, i.jsxs)("div", {
                    className: nY.U1,
                    children: [
                        (0, i.jsx)(I.D, {
                            innerRef: _,
                            "aria-label": B.intl.string(B.t.WAI6xu),
                            className: nY.b,
                            onClick: () => {
                                t(Y.i.USER_DISMISS);
                            },
                            children: (0, i.jsx)(eA.P, { color: "currentColor" }),
                        }),
                        (0, i.jsx)(e_.D, { id: u, variant: "heading-lg/semibold", children: n }),
                    ],
                }),
                null != a && (0, i.jsx)(eE.E, { variant: "text-md/normal", color: "text-subtle", children: a }),
                (0, i.jsx)(eU.Ip, {
                    className: nY.XG,
                    fade: !0,
                    children: (0, i.jsx)("div", { className: s()(nY.gT, c), children: l }),
                }),
            ],
        }),
    });
}
var n$ = n(889586),
    nz = n(973912),
    nq = n(871123),
    nZ = n(44724),
    nX = n(522445);
function nQ() {
    (0, nZ.default)({ guildId: (0, nq.zf)() });
}
function nJ(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: r } = e;
    return null == t ? null : (0, i.jsx)(n0, { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: r });
}
function n0(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: r } = e,
        { analyticsLocations: a } = (0, P.Ay)([M.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]),
        { items: s } = (0, n$.L)({ userId: t, numWishlistItemsToRecommend: 9 });
    return 0 === s.length
        ? null
        : (0, i.jsxs)(nK, {
              heading: B.intl.string(B.t["vy/61K"]),
              subheading: B.intl.string(B.t.tEee9t),
              markAsDismissed: r,
              className: nX.Zj,
              contentClassName: nX.hQ,
              height: 560,
              children: [
                  (0, i.jsx)(nz.A, {
                      items: s,
                      analyticsLocations: a,
                      handleOpenUserProfileModal: n,
                      className: nX.KN,
                  }),
                  (0, i.jsx)("div", {
                      className: nX.UD,
                      children: (0, i.jsx)(e6.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text: B.intl.string(B.t.rg9FQp),
                          onClick: nQ,
                      }),
                  }),
              ],
          });
}
function n1(e) {
    let { displayProfile: t, handleOpenUserProfileModal: n, height: a } = e,
        s = (function (e) {
            let { location: t } = e,
                n = (function (e) {
                    let { location: t } = e;
                    return nB.useConfig({ location: t }).enabled;
                })({ location: t }),
                i = (0, c.bG)([nI.default], () => nI.default.getCurrentUser()),
                a = (0, c.bG)([nV.A], () => (null != i ? nV.A.getFirstWishlistId(i.id) : null)),
                s = (0, nj.i)((e) => e.recommendationApplicationIds),
                o = (0, nH.rY)(),
                d = (0, nH.qx)();
            return r.useMemo(
                () => (null != s || (null == a && n) ? (0, l.uniq)([...(s ?? []), ...d, ...o]).sort() : []),
                [n, a, d, o, s],
            );
        })({ location: "AccountProfilePopoutUpsell" }),
        o = r.useMemo(() => {
            let e = [];
            return s.length > 0 && e.push(u.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e;
        }, [s]);
    return (0, i.jsx)(nF.Ay, {
        contentTypes: o,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: r, markAsDismissed: s } = e;
            return null == a
                ? null
                : r === u.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                  ? (0, i.jsx)(nJ, { profileUserId: t?.userId, handleOpenUserProfileModal: n, markAsDismissed: s })
                  : null;
        },
    });
}
var n2 = n(146901),
    n3 = n(827827);
let n4 = [
        { duration: 15 * e8.A.Millis.MINUTE, label: () => B.intl.string(B.t["8ot6gv"]) },
        { duration: e8.A.Millis.HOUR, label: () => B.intl.string(B.t.UMWBZr) },
        { duration: 8 * e8.A.Millis.HOUR, label: () => B.intl.string(B.t.EpAXPC) },
        { duration: e8.A.Millis.DAY, label: () => B.intl.string(B.t["755t4q"]) },
        { duration: 3 * e8.A.Millis.DAY, label: () => B.intl.string(B.t["f3/1ch"]) },
        { duration: void 0, label: () => B.intl.string(B.t["46dqJY"]) },
    ],
    n5 = "forever";
function n6(e) {
    let { status: t, currentStatus: n, description: r } = e,
        a = t !== tf.clD.ONLINE,
        s = (0, i.jsx)(i.Fragment, {
            children: n4.map((e) => {
                let { duration: r, label: a } = e;
                return (0, i.jsx)(
                    nu.Dr,
                    {
                        id: `${t}-${r}`,
                        label: a(),
                        action: () => (0, n3.A)({ nextStatus: t, prevStatus: n, durationMillis: r }),
                        dontCloseOnAction: !0,
                    },
                    r ?? n5,
                );
            }),
        });
    return (0, i.jsx)(nu.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: a,
        label: (0, ne.MU)(t),
        subtext: r,
        iconLeft: () => (0, i.jsx)(ex.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, n3.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: a ? s : void 0,
    });
}
function n7(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, n2._)(e);
    return "today" === t
        ? B.intl.formatToPlainString(B.t.ZxxHIO, { timeString: i })
        : B.intl.formatToPlainString(B.t["9OFjSe"], { dateString: n, timeString: i });
}
var n8 = n(996988),
    n9 = n(83260);
function ie(e) {
    let { currentUser: t, onClose: n, setPopoutRef: a, highlightBadge: l, openedAt: o, className: d } = e,
        _ = __OVERLAY__,
        h = (0, tZ.Ay)(t.id, void 0),
        { analyticsLocations: I } = (0, P.Ay)(M.A.USER_PROFILE_ACCOUNT_POPOUT),
        p = (0, tz.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 }),
        { ref: m, height: g } = (0, eH.Ay)(),
        { isHoveringOrFocusing: S, isHovering: N } = (0, ts.A)(m);
    r.useEffect(() => {
        a?.(m.current);
    }, [m, a]),
        r.useEffect(
            () => (tP.A.setState({ isOpen: !0 }), () => tP.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1 })),
            [],
        );
    let C = (0, c.bG)([ns.A], () => ns.A.getStatus(t.id)),
        O = n7(na.CY.useSetting()),
        R = (0, c.bG)([nl.A], () => nl.A.hidePersonalInformation),
        L = (0, tb.kB)(),
        D = na.Q_.useSetting(),
        y = (function (e) {
            let t = na.CY.useSetting(),
                n = (0, tb.kB)(),
                r = na.Jr.useSetting();
            function a(i) {
                let r = n7(t);
                if (e === i && null != r) return r;
                switch (i) {
                    case tf.clD.DND:
                        return n ? B.intl.string(B.t.day5A6) : B.intl.string(B.t["tq/fMK"]);
                    case tf.clD.INVISIBLE:
                        return B.intl.string(B.t.zPc6Mc);
                    default:
                        return;
                }
            }
            let s = (0, i.jsx)(i.Fragment, {
                    children: n4.map((t) => {
                        let { duration: n, label: r } = t;
                        return (0, i.jsx)(
                            nu.Dr,
                            {
                                id: `${e}-${n}`,
                                label: r(),
                                action: () => {
                                    (0, tb.ES)(!0, n);
                                },
                                dontCloseOnAction: !0,
                            },
                            n ?? n5,
                        );
                    }),
                }),
                l = n6({ status: tf.clD.ONLINE, currentStatus: e }),
                o = n6({ status: tf.clD.IDLE, currentStatus: e, description: a(tf.clD.IDLE) }),
                d = n6({ status: tf.clD.DND, currentStatus: e, description: a(tf.clD.DND) }),
                c = n6({ status: tf.clD.INVISIBLE, currentStatus: e, description: a(tf.clD.INVISIBLE) });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    l,
                    (0, i.jsx)(nu.bX, {}, "menu-separator-statuses"),
                    o,
                    d,
                    c,
                    n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(nu.bX, {}, "menu-separator-statuses"),
                                  (0, i.jsx)(
                                      nu.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: B.intl.string(B.t.gJRnwK),
                                          iconLeft: ek.a,
                                          leadingAccessory: { type: "icon", icon: ek.a },
                                          badge: { text: B.intl.string(B.t.ApAu9f) },
                                          subtext:
                                              null != r && "0" !== r
                                                  ? B.intl.format(B.t.BWD8fs, {
                                                        endTime: new Date(Number(r)).toLocaleString(
                                                            B.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : B.intl.string(B.t["Br1q+x"]),
                                          action: () => {
                                              (0, tb.ES)(!n);
                                          },
                                          dontCloseOnAction: !0,
                                          children: s,
                                      },
                                      "quiet-mode",
                                  ),
                              ],
                          })
                        : null,
                ],
            });
        })(C),
        v = (function (e) {
            let t = (0, c.bG)([nI.default], () => nI.default.getCurrentUser()),
                n = (0, c.bG)([nl.A], () => nl.A.hidePersonalInformation),
                r = (0, c.bG)([nA.A], () => (0, tU.M)(nA.A.theme)),
                { multiAccountUsers: a } = (0, nm.K)(),
                s = a.map((a) => {
                    let s = new nh.A(a),
                        l = s.id === t?.id,
                        o = a.tokenStatus === nT.U.INVALID,
                        d = n ? null : `#${s.discriminator}`;
                    return (0, i.jsx)(
                        nu.Dr,
                        {
                            id: s.id,
                            focusedClassName: nN.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: nN.ci,
                                    children: [
                                        (0, i.jsx)(E.eu, {
                                            src: s.getAvatarURL(void 0, 40),
                                            size: A._3.SIZE_24,
                                            "aria-label": a.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: nN.DD,
                                            children: [
                                                (0, i.jsx)(eE.E, {
                                                    className: nN.gE,
                                                    variant: "text-sm/normal",
                                                    children: ne.Ay.getUserTag(s, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !s.hasUniqueUsername() &&
                                                    (0, i.jsx)(eE.E, {
                                                        className: nN.df,
                                                        variant: "text-sm/normal",
                                                        children: d,
                                                    }),
                                            ],
                                        }),
                                        l &&
                                            (0, i.jsx)(n_.y, {
                                                size: "sm",
                                                color: t
                                                    ? nc.A.unsafe_rawColors.WHITE.css
                                                    : nc.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && r) || (t && !r)
                                                        ? nc.A.unsafe_rawColors.BRAND_500.css
                                                        : nc.A.unsafe_rawColors.WHITE.css,
                                                className: nN.s0,
                                            }),
                                        o &&
                                            (0, i.jsx)(nE.E, {
                                                color: nc.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && r) || (t && !r)
                                                        ? nc.A.unsafe_rawColors.BRAND_500.css
                                                        : nc.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: nN.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, ng.A)();
                                else {
                                    var n;
                                    (n = s.id) !== t?.id &&
                                        (nf.default.track(tf.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tf.JJy.USER_PROFILE },
                                        }),
                                        np.Mx(n, void 0, nS.WX.MULTI_ACCOUNT_MENU));
                                }
                            },
                        },
                        s.id,
                    );
                });
            return (
                s.push(
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(nu.bX, {}),
                            (0, i.jsx)(nu.Dr, {
                                id: "manage-accounts",
                                label: B.intl.string(B.t.WbFpq4),
                                action: () => {
                                    e?.(), (0, ng.A)();
                                },
                            }),
                        ],
                    }),
                ),
                s
            );
        })(n),
        b = (0, t$.A)({ analyticsLocations: I }),
        U = (0, tx.TW)(t),
        w = r.useRef(null),
        G = r.useRef(null),
        x = (0, tR.A)(h?.profileFrame?.skuId, "UserProfileAccountPopout"),
        k = (0, tO.A)(h?.profileFrame?.skuId);
    (0, tL.A)({ skuId: h?.profileFrame?.skuId, openedAt: o, context: p, analyticsLocations: I });
    let F = r.useRef((0, tP.A)((e) => e.shouldRenderTenureLevelUp)),
        V = r.useMemo(() => (0, ty.A)(), []),
        [H, j] = r.useState(() => tP.A.getState().shouldRenderTenureLevelUp);
    function W(e) {
        n?.(), (0, tX.openUserProfileModal)({ customStatusPrompt: V, sourceAnalyticsLocations: I, ...p, ...e });
    }
    r.useEffect(() => {
        let e = setTimeout(() => {
            j(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let K = h?.widgets != null && h.widgets.length > 0,
        $ = r.useCallback(() => {
            n();
        }, [n]),
        z = r.useCallback(() => {
            b(), $();
        }, [b, $]),
        q = (0, el.ux)("UserProfileAccountPopout"),
        Z = tq.A.useConfig({ location: "UserProfileAccountPopout" }).enabled,
        [X, Q] = (0, tv.kn)(
            [
                q ? u.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE : void 0,
                Z ? u.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK : void 0,
            ].filter(no.Vq),
            void 0,
            !0,
        ),
        J = r.useId();
    return (0, i.jsx)(P.f5, {
        value: I,
        children: (0, i.jsx)(tz.of, {
            value: p,
            openedAt: o,
            fetchStartedAt: h?.fetchStartedAt,
            fetchEndedAt: h?.fetchEndedAt,
            isLoaded: h?.isLoaded,
            children: (0, i.jsxs)(eP.l, {
                ref: m,
                "aria-labelledby": J,
                className: s()(eK.jC, d),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(f.A, { children: (0, i.jsx)(eb.H, { id: J, children: B.intl.string(B.t["5fWB8U"]) }) }),
                    (0, i.jsxs)(eb.F, {
                        children: [
                            (0, i.jsx)(n1, { displayProfile: h, handleOpenUserProfileModal: W, height: g }),
                            (0, i.jsxs)(t5.A, {
                                className: eK.BK,
                                user: t,
                                displayProfile: h,
                                themeType: n8.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: n9.wx,
                                        children: [
                                            (0, i.jsx)(t0.A, { user: t, displayProfile: h, themeType: n8.d.POPOUT }),
                                            (0, i.jsx)(tQ.A, {
                                                user: t,
                                                displayProfile: h,
                                                themeType: n8.d.POPOUT,
                                                onOpenProfile: _ ? void 0 : W,
                                            }),
                                            (0, i.jsx)(ni.A, {
                                                ref: w,
                                                user: t,
                                                themeType: n8.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: V,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(eU.Ip, {
                                        className: eK.rf,
                                        style: { pointerEvents: H ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(t2.A, { userId: t.id }),
                                            (0, i.jsx)(t6.Ay, {
                                                className: eK.eF,
                                                user: t,
                                                displayName: nd.Ay.getName(void 0, null, t),
                                                onClickName: _ ? void 0 : W,
                                                displayNameTrailing: (0, i.jsx)(nn, { user: t, isVisible: S }),
                                                pronouns: h?.pronouns,
                                                trailing: (0, i.jsx)(tJ.A, {
                                                    displayProfile: h,
                                                    themeType: n8.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != l ? (e) => e === l : void 0,
                                                    shouldGlowTenureBadge: F.current,
                                                }),
                                            }),
                                            (0, i.jsx)(t1.A, { isPremiumUser: U, onInteraction: n }),
                                            (0, i.jsx)(nr.A, {
                                                userId: t.id,
                                                userBio: h?.bio,
                                                hidePersonalInformation: R,
                                                onClose: n,
                                            }),
                                            K &&
                                                (0, i.jsx)(t4.A, {
                                                    user: t,
                                                    widgets: h?.widgets,
                                                    onOpenUserProfileModal: W,
                                                }),
                                            (0, i.jsx)(t3.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: W,
                                                onClose: n,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: eK.T_,
                                                children: [
                                                    (0, i.jsx)(t5.A.Overlay, {
                                                        className: eK.g0,
                                                        children: (0, i.jsxs)(eq, {
                                                            children: [
                                                                (0, i.jsx)(ez, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: B.intl.string(B.t.s5vZlQ),
                                                                    icon: ew.R,
                                                                    trailing:
                                                                        null != X
                                                                            ? (0, i.jsx)(eG.Lp, {
                                                                                  text: B.intl.string(B.t.y2b7CA),
                                                                                  "aria-hidden": !0,
                                                                              })
                                                                            : null,
                                                                    onClick: () => {
                                                                        X ===
                                                                            u.M
                                                                                .DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE &&
                                                                            Q(Y.i.TAKE_ACTION),
                                                                            z();
                                                                    },
                                                                    ref: G,
                                                                }),
                                                                (0, i.jsx)(ez, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(nk, {}),
                                                                    sublabel: null != O && O,
                                                                    icon: () =>
                                                                        (0, i.jsx)(ex.nW, { status: C, size: 12 }),
                                                                    trailing:
                                                                        (L || C === tf.clD.DND) &&
                                                                        (0, i.jsx)(ek.a, { size: "xxs" }),
                                                                    renderSubmenu: ev.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(e$, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: eK.hQ,
                                                                                  "aria-label": B.intl.string(
                                                                                      B.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: y,
                                                                              });
                                                                          },
                                                                    onClick: ev.Fr
                                                                        ? () => {
                                                                              n(),
                                                                                  (0, T.openModalLazy)(
                                                                                      () =>
                                                                                          new Promise((e) =>
                                                                                              e((e) => {
                                                                                                  let {
                                                                                                      onClose: t,
                                                                                                      ...n
                                                                                                  } = e;
                                                                                                  return (0, i.jsx)(
                                                                                                      eM.d,
                                                                                                      {
                                                                                                          onClose: t,
                                                                                                          ...n,
                                                                                                          size: "sm",
                                                                                                          "aria-label":
                                                                                                              B.intl.string(
                                                                                                                  B.t[
                                                                                                                      "3Uj+2p"
                                                                                                                  ],
                                                                                                              ),
                                                                                                          children: (0,
                                                                                                          i.jsx)(eF.W, {
                                                                                                              "data-menu-migrated":
                                                                                                                  !0,
                                                                                                              navId: "set-status-submenu-mobile-web",
                                                                                                              variant:
                                                                                                                  "fixed",
                                                                                                              "aria-label":
                                                                                                                  B.intl.string(
                                                                                                                      B
                                                                                                                          .t
                                                                                                                          .E13trI,
                                                                                                                  ),
                                                                                                              hideScroller:
                                                                                                                  !0,
                                                                                                              onClose:
                                                                                                                  t,
                                                                                                              onSelect:
                                                                                                                  void 0,
                                                                                                              children:
                                                                                                                  y,
                                                                                                          }),
                                                                                                      },
                                                                                                  );
                                                                                              }),
                                                                                          ),
                                                                                  );
                                                                          }
                                                                        : void 0,
                                                                }),
                                                                (0, i.jsx)(tN, { onClose: n, popoutContainerRef: m }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(t5.A.Overlay, {
                                                        className: eK.g0,
                                                        children: (0, i.jsxs)(eq, {
                                                            children: [
                                                                (0, i.jsx)(ez, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eV.r,
                                                                    label: B.intl.string(B.t.oMNyYN),
                                                                    onClick: () => {
                                                                        n(), (0, ng.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(e$, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": B.intl.string(B.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: v,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    t9.p5 &&
                                                                    D &&
                                                                    (0, i.jsx)(ez, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eB.L,
                                                                        label: B.intl.string(B.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            (0, t9.C)(t.id), n();
                                                                        },
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    h?.profileEffect != null &&
                                        !F.current &&
                                        (0, i.jsx)(tC.A, { skuId: h.profileEffect.skuId, isHovering: N }),
                                    null != x && (0, i.jsx)(tD.A, { frame: x, fadeIn: k }),
                                ],
                            }),
                            (0, i.jsx)(nU, { targetElementRef: G, onClose: n }),
                            (0, i.jsx)(tY, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var it = n(764336),
    ii = n(655116),
    ir = n(106531),
    ia = n(454719),
    is = n(342296),
    il = n(852712),
    io = n(167579),
    id = n(173660),
    ic = n(749983),
    iu = n(763827),
    i_ = n(499156),
    iE = n(731854);
let iA = 2.5 * e8.A.Millis.SECOND,
    ih = +e8.A.Millis.HOUR;
var iI = n(459838),
    ip = n(485296);
let iT = 3 * e8.A.Millis.SECOND,
    im = +e8.A.Millis.DAY;
var ig = n(616356),
    iS = n(734057),
    iN = n(629016),
    iC = n(186111),
    iO = n(967198),
    iR = n(486020),
    iL = n(625494),
    iD = n(536194),
    iy = n(19575),
    iv = n(994314),
    ib = n(485599),
    iM = n(338854);
function iP(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: r, position: a, shouldShow: s = !0, children: l } = e,
        o = (0, eZ.sw)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            l,
            s && o
                ? (0, i.jsx)(iM.H, {
                      targetElementRef: t,
                      title: B.intl.string(tT.default.Qn21R6),
                      body: B.intl.string(tT.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: a,
                      caretConfig: { align: "center" },
                      action: {
                          text: B.intl.string(B.t.RzWDqY),
                          onClick: function () {
                              n(Y.i.TAKE_ACTION), r();
                          },
                      },
                      onRequestClose: function () {
                          n(Y.i.USER_DISMISS);
                      },
                  })
                : null,
        ],
    });
}
var iU = n(626584),
    iw = n(757036),
    iG = n(591179),
    ix = n(531685),
    ik = n(259065),
    iF = n(864386);
let iV = new iU.A("DisplayNameStylesFlywheelCoachmark");
function iB(e) {
    let { markAsDismissed: t, targetElementRef: n, children: a } = e,
        { analyticsLocations: s } = (0, P.Ay)(),
        l = (0, r.useRef)(null),
        o = (0, c.bG)([ix.A], () => ix.A.isFocused()),
        d = (0, iw.L)(tF.PremiumTypes.TIER_2),
        u = (0, iG.X)("DisplayNameStylesFlywheelCoachmark"),
        _ = (0, r.useCallback)(() => {
            t(Y.i.TAKE_ACTION);
            let e = nI.default.getCurrentUser();
            u && null != e
                ? (0, tX.openUserProfileModal)({
                      userId: e.id,
                      sourceAnalyticsLocations: s,
                      onModalOpen: () => {
                          (0, ik.L)({ analyticsLocations: s, stackingBehavior: "stack" });
                      },
                  })
                : (0, ep.openUserSettings)(ef.X.PROFILE_PANEL, { analyticsLocations: s }, () => {
                      (0, ik.L)({ analyticsLocations: s });
                  });
        }, [t, s, u]),
        E = (0, r.useCallback)(() => {
            t(Y.i.USER_DISMISS);
        }, [t]);
    (0, r.useEffect)(() => {
        o && l.current?.paused ? l.current?.play().catch(iV.error) : o || l.current?.pause();
    }, [o]);
    let A = d ? [B.intl.string(iF.default.TyUdka)] : [B.intl.string(iF.default.dluV0R)];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            a,
            (0, i.jsx)(V.A, {
                targetElementRef: n,
                shouldShow: !0,
                onRequestClose: E,
                align: "right",
                position: "top",
                caretConfig: { align: "center" },
                gradientColor: "nitro-pink",
                graphic: {
                    type: "video",
                    ref: l,
                    src: "https://cdn.discordapp.com/assets/content/c0da8c4f64ef225b01b94a5c05d7fece18b9f36338c1f214ffb7b26299058973.webm",
                    aspectRatio: "21/9",
                    loop: !0,
                },
                size: "lg",
                title: B.intl.string(iF.default.cYwrp8),
                body: A,
                actions: [{ text: B.intl.string(B.t["4P5I8V"]), variant: "primary", onClick: _ }],
            }),
        ],
    });
}
var iH = n(45780),
    ij = n(696451),
    iW = n(71393),
    iY = n(685073),
    iK = n(228366);
let i$ = { lastSeenInfos: {} },
    iz = i$;
class iq extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        iz = e ?? i$;
    }
    getState() {
        return iz;
    }
    getGuildLastSeenInfo(e) {
        return iz.lastSeenInfos[e] ?? null;
    }
}
let iZ = new iq(iK.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        iz.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        iz = i$;
    },
});
var iX = n(514661);
let iQ = new iU.A("GuildTagAvailableCoachmark");
function iJ(e) {
    let t = (0, c.bG)([iW.A], () => iW.A.getGuild(e.guildId));
    function n(n) {
        t?.profile?.tag != null &&
            iK.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n);
    }
    let { isAdopting: r, onAdoptTag: a, onEditProfile: s } = (0, iX.A)(t?.id ?? null, () => n(Y.i.TAKE_ACTION));
    if (null == t || !(0, iY.q0)(t))
        return iQ.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let l = [
        { text: B.intl.string(B.t.jwEaiX), loading: r, onClick: a, variant: "primary" },
        { text: B.intl.string(B.t.s5vZlQ), onClick: s, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(V.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: F.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: B.intl.formatToPlainString(B.t["m/Tc3n"], { guildName: t.name }),
                body: B.intl.string(B.t.DrAXIr),
                actions: l,
                size: "md",
                onRequestClose: () => n(Y.i.USER_DISMISS),
            }),
        ],
    });
}
function i0(e) {
    let t = (0, c.bG)([iW.A], () => iW.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: r, onAdoptTag: a, onEditProfile: s } = (0, iX.A)(t?.id ?? null, () => n(Y.i.TAKE_ACTION));
    if (null == t || !(0, iY.q0)(t))
        return iQ.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let l = [
        { text: B.intl.string(B.t.jwEaiX), loading: r, onClick: a, variant: "primary" },
        { text: B.intl.string(B.t.s5vZlQ), onClick: s, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(V.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: F.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: B.intl.formatToPlainString(B.t.VFqnyU, { guildName: t.name }),
                body: B.intl.string(B.t.DrAXIr),
                actions: l,
                size: "md",
                onRequestClose: () => n(Y.i.USER_DISMISS),
            }),
        ],
    });
}
var i1 = n(843010),
    i2 = n(764231),
    i3 = n(425713);
function i4(e) {
    let { groupName: t, targetElementRef: n } = e,
        r = tV(),
        a = (0, c.bG)([eS.Ay], () => eS.Ay.useReducedMotion),
        s = (0, tP.A)((e) => e.isOpen),
        l = (0, i1.G)();
    return a || null == r || s || l
        ? null
        : (0, i.jsx)(nF.zJ, {
              contentType: u.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: a } = e;
                  return (0, i.jsx)(i5, {
                      recentlyLeveledTenureBadge: r,
                      markAsDismissed: a,
                      targetElementRef: n,
                      shouldShow: t === u.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function i5(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: a, shouldShow: s } = e,
        l = tF.sp.indexOf(t),
        o = (0, i3.I)(tF.sp[l > 0 ? l - 1 : l]).ambient,
        d = (0, r.useCallback)(() => {
            n(Y.i.TAKE_ACTION),
                tP.A.setState({ shouldRenderTenureLevelUp: !0 }),
                iL._.dispatch(tf.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n]),
        c = (0, r.useCallback)(() => {
            n(Y.i.USER_DISMISS);
        }, [n]),
        u = tF.VD[t],
        _ = B.intl.formatToPlainString(B.t.ewkaVR, {
            timeMilestone: (0, i2.T)(u.id, u.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        E = [{ text: B.intl.string(B.t.RzWDqY), variant: "primary", onClick: d }];
    return (0, i.jsx)(V.A, {
        targetElementRef: a,
        onRequestClose: c,
        shouldShow: s,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: B.intl.string(B.t.VoDxsV),
        body: _,
        actions: E,
    });
}
function i6(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, it.c9)(),
        r = null != e.targetElementRef.current && t && n,
        [a, s] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, iH.G$)(u.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? tf.dJq),
                r = (0, c.bG)([iW.A, nI.default, ij.Ay], () => {
                    if (null === e) return !1;
                    let t = iW.A.getGuild(e);
                    if (void 0 === t || !(0, iY.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                    let n = nI.default.getCurrentUser();
                    if (
                        void 0 === n ||
                        (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                    )
                        return !1;
                    let i = ij.Ay.getMember(e, n.id);
                    return null != i && !i.isPending;
                }, [e]);
            return (0, tv.ww)(r && n && !i ? [u.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? tf.eGj);
        })(e.guildId, { shouldShow: r }),
        [l, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                r = i?.identityGuildId ?? null,
                a = (0, c.bG)([iZ], () => (null === r ? null : iZ.getGuildLastSeenInfo(r))),
                s = (0, c.bG)([iW.A], () => iW.A.getGuild(r)?.profile?.tag),
                l = null != s && i?.identityGuildId === r && i?.tag === null,
                o = null != r && a?.tag === s,
                d = null !== r && l && !o;
            return (0, tv.Wl)(d && n ? u.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: r });
    return r
        ? a === u.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(i0, {
                  guildId: e.guildId,
                  onDismiss: s,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : l === u.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(iJ, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(i4, { groupName: Y.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(nF.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: Y.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: r } = t;
                                switch (n) {
                                    case u.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK:
                                        return (0, i.jsx)(iB, {
                                            markAsDismissed: r,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case u.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, i.jsx)(iP, {
                                            markAsDismissed: r,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: eJ.p,
                                            children: e.children,
                                        });
                                    case u.M.BADGE_DIRECTORY_NUX_POPOVER:
                                        return (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                e.children,
                                                (0, i.jsx)(K, {
                                                    variantProps: e.badgeDirectoryNuxPopoverVariant,
                                                    markAsDismissed: r,
                                                    targetElementRef: e.targetElementRef,
                                                }),
                                            ],
                                        });
                                    default:
                                        return e.children;
                                }
                            },
                        }),
                    ],
                })
        : e.children;
}
var i7 = n(615675),
    i8 = n(900797),
    i9 = n(847374),
    re = n(348858),
    rt = n(617354),
    rn = n(829773),
    ri = n(42473),
    rr = n(495976),
    ra = n(238450);
function rs(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: a,
            onClick: l,
            iconForeground: o,
            nameplate: d,
            shouldShowOutputDeviceChangedTooltip: c,
            dismissTooltips: u,
        } = e,
        _ = t || n,
        {
            Component: E,
            play: A,
            events: { onMouseEnter: I, onMouseLeave: f },
        } = (0, re.I)(_ ? "undeafen" : "deafen"),
        p = n ? i7.T : E,
        { name: T } = (0, ey.x5)(iE.oh.AUDIO_OUTPUT),
        m = (0, rt.A)(t, n, a),
        { analyticsLocations: g } = (0, P.Ay)(M.A.AUDIO_OUTPUT_BUTTON),
        S = r.useRef(null);
    return (
        r.useEffect(() => () => A(), [_, A]),
        (0, i.jsx)(P.f5, {
            value: g,
            children: (0, i.jsx)(h.Y, {
                targetElementRef: S,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        u(),
                        (0, i.jsx)(P.f5, {
                            value: g,
                            children: (0, i.jsx)(rn.A, {
                                onInteraction: (0, J.s)("AudioDeviceMenu", M.A.ACCOUNT),
                                onClose: t,
                                renderOutputDevices: !0,
                                renderOutputVolume: !0,
                                maybeRenderSpatialAudioCheckbox: !0,
                                renderSettingsButton: !0,
                            }),
                        })
                    );
                },
                position: "top",
                align: "left",
                animation: h.Y.Animation.FADE,
                spacing: 4,
                children: (e, t) => {
                    let { onClick: r } = e,
                        { isShown: u } = t,
                        E = u ? i8.t : i9.a;
                    return (0, i.jsxs)("div", {
                        ref: S,
                        className: s()(rr.Lh, { [rr.v8]: _, [rr.q6]: u }),
                        children: [
                            (0, i.jsx)(ri.A, {
                                "aria-checked": _,
                                "aria-label": B.intl.string(B.t.wjcRFX),
                                className: rr.eT,
                                disabled: a,
                                icon: (0, i.jsx)(p, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: _ ? nc.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: _ ? ra.o : void 0,
                                innerClassName: s()({ [ra.T]: n }),
                                onClick: l,
                                onContextMenu: r,
                                onMouseEnter: I,
                                onMouseLeave: f,
                                plated: null != d,
                                redGlow: _,
                                role: "switch",
                                tooltipText: m,
                            }),
                            (0, i.jsx)(ri.A, {
                                className: s()(rr.UT, { [rr.q6]: u }),
                                disabled: a,
                                icon: (0, i.jsx)(E, {
                                    className: rr.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: _ ? nc.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: r,
                                onContextMenu: r,
                                plated: null != d,
                                redGlow: _,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? B.intl.formatToPlainString(B.t["f+DDY/"], { outputDeviceName: T })
                                    : void 0,
                                tooltipShouldShow: !u,
                                tooltipText: c
                                    ? B.intl.format(B.t["f+DDY/"], { outputDeviceName: T })
                                    : B.intl.string(B.t.aA4Vce),
                                "aria-label": c
                                    ? B.intl.formatToPlainString(B.t["f+DDY/"], { outputDeviceName: T })
                                    : B.intl.string(B.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var rl = n(666654),
    ro = n(523875),
    rd = n(993719);
let rc = {};
class ru extends c.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return rc[e] ?? !1;
    }
}
let r_ = new ru(iK.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        rc[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        rc[t] = !1;
    },
});
var rE = n(362823),
    rA = n(980923),
    rh = n(224585),
    rI = n(321429),
    rf = n(973324);
function rp(e) {
    let t,
        {
            selfMute: n,
            serverMute: a,
            suppress: l,
            awaitingRemote: o,
            iconForeground: d,
            onMouseEnter: u,
            onMouseLeave: _,
            onClick: E,
            nameplate: A,
            shouldShowSpeakingWhileMutedTooltip: I,
            shouldShowSpeakingWhilePTTTooltip: f,
            shouldShowInputDeviceChangedTooltip: p,
            shouldShowPTTJoinTooltip: T,
            dismissTooltips: m,
            speaking: g,
        } = e,
        { showPTTIconIndicator: S } = i_.A.useConfig({ location: "MicrophoneButton" }),
        N = (0, c.bG)([ic.Ay], () => ic.Ay.getMode() === iE.TB.PUSH_TO_TALK),
        C = (0, c.bG)([ic.Ay], () => ic.Ay.getSettings().modeOptions.shortcut),
        O = (0, c.bG)([r_], () => r_.getIsTutorialActive(rE.v.MUTE_TUTORIAL)),
        R = (0, c.bG)([iu.A], () => null != iu.A.getChannelId()),
        { name: L } = (0, ey.x5)(iE.oh.AUDIO_INPUT),
        { enabledInputProfiles: D } = (0, il.d)({ location: "MicrophoneButton" }),
        y = r.useRef(null),
        v = n || l || a,
        b = (0, ro.L)(v ? "unmute" : "mute"),
        { analyticsLocations: U } = (0, P.Ay)(M.A.AUDIO_INPUT_BUTTON),
        { Component: w, events: G, play: x } = b,
        k = a || l ? rl.O : w;
    r.useEffect(() => () => x(), [v, x]);
    let F = (0, rA.A)(n, a, l, o);
    t = I
        ? { tooltipType: "green_void_do_not_use", tooltipText: B.intl.string(B.t["29gnR4"]), tooltipForceOpen: !0 }
        : T || f
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: B.intl.format(B.t.c1qUOQ, { keybind: te.dI(C).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: F };
    let H = S && N && R,
        j = v ? nc.A.colors.ICON_VOICE_MUTED : "currentColor",
        W = r.useCallback(() => {
            E(), O && rd.N(rE.v.MUTE_TUTORIAL);
        }, [E, O]);
    return (0, i.jsxs)(P.f5, {
        value: U,
        children: [
            (0, i.jsx)(h.Y, {
                targetElementRef: y,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        m(),
                        (0, i.jsx)(P.f5, {
                            value: U,
                            children: (0, i.jsx)(rn.A, {
                                onInteraction: (0, J.s)("AudioDeviceMenu", M.A.ACCOUNT),
                                onClose: t,
                                maybeRenderPTTCheckbox: !0,
                                renderInputProfiles: D.length > 0,
                                renderInputDevices: !0,
                                maybeRenderInputMeter: !0,
                                renderInputVolume: !0,
                                renderSettingsButton: !0,
                            }),
                        })
                    );
                },
                position: "top",
                align: "left",
                animation: h.Y.Animation.FADE,
                spacing: 4,
                children: (e, n) => {
                    let { onClick: r } = e,
                        { isShown: a } = n,
                        l = a ? i8.t : i9.a;
                    return (0, i.jsxs)("div", {
                        ref: y,
                        className: s()(rr.Lh, { [rr.v8]: v, [rr.q6]: a }),
                        children: [
                            (0, i.jsx)(ri.A, {
                                "aria-checked": v,
                                "aria-label": B.intl.string(B.t.w4m945),
                                className: rr.eT,
                                disabled: o,
                                icon: (0, i.jsx)(k, { size: "custom", width: 20, height: 20, color: j, className: d }),
                                onClick: W,
                                onContextMenu: r,
                                onMouseEnter: () => {
                                    u(), G.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    _(), G.onMouseLeave();
                                },
                                plated: null != A,
                                redGlow: v,
                                role: "switch",
                                ...t,
                                children: H ? (0, i.jsx)("div", { className: s()(rI.U, { [rI.z]: g }) }) : null,
                            }),
                            (0, i.jsx)(ri.A, {
                                "aria-label": p
                                    ? B.intl.formatToPlainString(B.t["18wnuD"], { inputDeviceName: L })
                                    : B.intl.string(B.t.fRzCbB),
                                className: s()(rr.UT, { [rr.q6]: a }),
                                disabled: o,
                                icon: (0, i.jsx)(l, {
                                    className: rr.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: j,
                                }),
                                onClick: r,
                                onContextMenu: r,
                                onMouseEnter: u,
                                onMouseLeave: _,
                                plated: null != A,
                                redGlow: v,
                                tooltipType: p ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: p,
                                tooltipPositionKey: p
                                    ? B.intl.formatToPlainString(B.t["18wnuD"], { inputDeviceName: L })
                                    : void 0,
                                tooltipShouldShow: !a,
                                tooltipText: p
                                    ? B.intl.format(B.t["18wnuD"], { inputDeviceName: L })
                                    : B.intl.string(B.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(V.A, {
                targetElementRef: y,
                shouldShow: O,
                graphic: { type: "image", src: rf.A },
                onRequestClose: () => {
                    rd.N(rE.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: B.intl.string(rh.default.VG4zAf),
                body: B.intl.string(rh.default["8VIRzR"]),
            }),
        ],
    });
}
var rT = n(935399),
    rm = n(505312),
    rg = n(848847),
    rS = n(88001),
    rN = n(466919),
    rC = n(438705);
function rO(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: a } = e,
        s = r.useCallback(() => {
            a(), (0, ep.openUserSettings)(ef.X.SUBSCRIPTIONS_PANEL);
        }, [a]);
    return (0, i.jsx)(V.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: rC },
        shouldShow: n,
        title: B.intl.format(rN.default.bx8sR9, { premiumGroupProductName: (0, rS.DP)() }),
        body: B.intl.format(rN.default.Pw4OFZ, { premiumGroupProductName: (0, rS.DP)() }),
        onRequestClose: a,
        actions: [{ text: B.intl.string(rN.default.DD26QR), onClick: s }],
    });
}
var rR = n(873298),
    rL = n(840387);
function rD(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        a = (0, rL.Z)(),
        s = na.KP.useSetting(),
        l = a && s !== rR.KP.FRIENDS_AND_ALL_GUILDS,
        o = (0, r.useCallback)(() => {
            t(Y.i.TAKE_ACTION), (0, ep.openUserSettings)(ef.X.PROFILE_PRIVACY_CATEGORY);
        }, [t]),
        d = (0, r.useCallback)(() => {
            t(Y.i.USER_DISMISS);
        }, [t]),
        c = l
            ? s === rR.KP.FRIENDS_ONLY
                ? B.intl.string(B.t["/hogEy"])
                : B.intl.string(B.t["6hEfm1"])
            : B.intl.string(B.t.bnNxW1);
    return (0, i.jsx)(V.A, {
        targetElementRef: n,
        shouldShow: !0,
        onRequestClose: d,
        align: "center",
        position: "top",
        caretConfig: { align: "end" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/6127c744cb2822ba2b138271130d9493e2579c126af2ee58921b6f988c6a46d6.svg",
        },
        title: B.intl.string(B.t.Ve4nS1),
        body: c,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: B.intl.string(B.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
function ry(e) {
    let t,
        n,
        {
            webBuildOverride: a,
            onClick: s,
            onContextMenu: l,
            dismissibleContents: o,
            iconForeground: d,
            nameplate: c,
        } = e,
        _ = r.useRef(null),
        [E, A] = r.useState(!1);
    (0, rT.Ay)(() => {
        function e() {
            return A(!0);
        }
        return (
            iL._.subscribe(tf.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                iL._.unsubscribe(tf.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let h = r.useCallback(() => {
        A(!1), s();
    }, [s]);
    t = null != a ? B.intl.formatToPlainString(B.t.Gzh6ZP, { webBuildOverride: a.id }) : B.intl.string(B.t.cduTBL);
    let I = e3.Z,
        f = (0, rm.w)();
    return (
        (I = null != a ? rg.H : f.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ri.A, {
                    ref: _,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: h,
                    onContextMenu: l,
                    "aria-label": B.intl.string(B.t.cduTBL),
                    icon: (0, i.jsx)(I, { size: "refresh_sm", color: "currentColor", className: d }),
                    ...f.events,
                    plated: null != c,
                }),
                (0, i.jsx)(rO, { targetElementRef: _, shouldShow: E, onDismiss: () => A(!1) }),
                (0, i.jsx)(nF.Ay, {
                    contentTypes: o,
                    groupName: Y.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === u.M.PRIVATE_PROFILE_COACHMARK
                            ? (0, i.jsx)(rD, { markAsDismissed: n, targetElementRef: _ })
                            : null;
                    },
                }),
            ],
        })
    );
}
var rv = n(948198);
let rb = iy.Ay.getEnableHardwareAcceleration() ? E.Js : E.eu,
    rM = 2.5 * e8.A.Millis.SECOND,
    rP = 2 * e8.A.Millis.MINUTE,
    rU = 2 * e8.A.Millis.MINUTE,
    rw = 5 * e8.A.Millis.SECOND;
function rG(e) {
    let {
            ref: t,
            speaking: n,
            voiceDb: a = -1 / 0,
            streaming: l,
            currentUser: o,
            status: d,
            handleClick: c,
            handleMouseLeave: u,
            renderNameTag: _,
            nameplate: E,
            avatarDecoration: f,
            "data-jump-section": p,
        } = e,
        T = r.useRef(null),
        m = t ?? T,
        S = (0, iR.F_)({ avatarDecoration: f, size: (0, et.Te)(A._3.SIZE_32) }),
        N = (0, eo.A)(),
        {
            updateOpenPopoutRef: O,
            highlightBadge: R,
            setHighlightBadge: L,
        } = (function () {
            let e = r.useRef(null),
                t = r.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, i] = r.useState(),
                [a, s] = r.useState(!1);
            return (
                (0, C.A)(() => s(!0), 750),
                r.useEffect(() => {
                    function t(t) {
                        let { highlightBadge: n } = t;
                        null != n && i(n), e.current?.();
                    }
                    return (
                        iL._.subscribe(tf.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            iL._.unsubscribe(tf.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: a ? n : void 0, setHighlightBadge: i }
            );
        })(),
        D = (0, ei.K)(E);
    return null == o
        ? null
        : (0, i.jsx)(g.A, {
              object: tf.ZSU.AVATAR,
              children: (0, i.jsx)(is.A, {
                  user: o,
                  targetElementRef: m,
                  clickTrap: !0,
                  preload: () =>
                      (0, ia.A)(o.id, o.getAvatarURL(void 0, is.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: r } = e;
                      return (0, i.jsx)(ie, {
                          currentUser: o,
                          highlightBadge: R,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: r,
                          className: rv.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: h.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      u(), L(void 0);
                  },
                  children: (e) => {
                      O(e);
                      let { onMouseEnter: t, onMouseDown: r, ...u } = e;
                      return (0, i.jsxs)("div", {
                          ref: m,
                          style: D,
                          onMouseEnter: t,
                          onMouseDown: r,
                          onClick: (t) => {
                              e.onClick?.(t), c?.(t);
                          },
                          className: s()(rv.Q9, { [rv.ZQ]: null != E }),
                          children: [
                              (0, i.jsx)(I.D, {
                                  ...u,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), c?.(t);
                                  },
                                  "aria-label": B.intl.string(B.t["5fWB8U"]),
                                  focusProps: { ringTarget: m },
                                  className: rv.$n,
                                  "data-jump-section": p,
                              }),
                              (0, i.jsx)(rb, {
                                  size: A._3.SIZE_32,
                                  src: o.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: S,
                                  status: l ? tf.clD.STREAMING : d,
                                  isSpeaking: n,
                                  voiceDb: a,
                                  className: rv.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: rv.oM, children: _(N) }),
                          ],
                      });
                  },
              }),
          });
}
class rx extends r.PureComponent {
    speakingWhileMutedTooltipTimeout = new _.Ep();
    speakingWhilePTTTooltipTimeout = new _.Ep();
    speakingWhilePTTInactiveBackoff = new d.A(rU, null, !1);
    lastSpeakingWhileMutedNotificationTime = void 0;
    lastSpeakingWhilePTTNotificationTime = void 0;
    state = {
        hovered: !1,
        shouldShowNametagTooltip: !1,
        shouldShowSpeakingWhileMutedTooltip: !1,
        shouldShowSpeakingWhilePTTTooltip: !1,
        hoveringOnMute: !1,
    };
    containerRef = r.createRef();
    avatarWithPopoutRef = r.createRef();
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, speakingWhilePTTInactive: n, occluded: i } = e,
            { speakingWhileMuted: r, occluded: a, speakingWhilePTTInactive: s } = this.props;
        a !== i && this.handleOccludedChanged(),
            r !== t && this.handleSpeakingWhileMutedChanged(),
            s !== n && this.handleSpeakingWhilePTTChanged();
    }
    componentWillUnmount() {
        this.speakingWhileMutedTooltipTimeout.stop(), this.speakingWhilePTTTooltipTimeout.stop();
    }
    handleToggleSelfMute = () => {
        let { serverMute: e, suppress: t, selfMute: n } = this.props;
        (0, X.A)(e, t, tf.JJy.ACCOUNT_PANEL), (0, Q.X)(M.A.ACCOUNT, Q.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, Z.A)(e, tf.JJy.ACCOUNT_PANEL), (0, Q.X)(M.A.ACCOUNT, Q.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            iu.A.isConnected() ? (0, ep.openUserSettings)(ef.X.VOICE_AND_VIDEO_PANEL) : (0, ep.openUserSettings)();
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, m.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("1248"),
                    n.e("27634"),
                    n.e("73297"),
                    n.e("33004"),
                    n.e("3557"),
                    n.e("83118"),
                    n.e("98942"),
                    n.e("31076"),
                    n.e("68961"),
                    n.e("69167"),
                    n.e("14883"),
                    n.e("23102"),
                    n.e("2285"),
                    n.e("97726"),
                    n.e("42394"),
                    n.e("44459"),
                    n.e("98986"),
                    n.e("37467"),
                    n.e("60411"),
                    n.e("61298"),
                    n.e("45807"),
                    n.e("26572"),
                    n.e("65640"),
                    n.e("87356"),
                    n.e("85391"),
                    n.e("56356"),
                    n.e("18307"),
                    n.e("5270"),
                    n.e("42293"),
                    n.e("60574"),
                    n.e("83554"),
                    n.e("53412"),
                    n.e("18917"),
                    n.e("94450"),
                    n.e("86307"),
                    n.e("3574"),
                    n.e("711"),
                    n.e("73153"),
                    n.e("25457"),
                    n.e("40981"),
                    n.e("75030"),
                    n.e("63576"),
                    n.e("50693"),
                    n.e("6487"),
                    n.e("69794"),
                    n.e("20661"),
                    n.e("69190"),
                    n.e("18315"),
                    n.e("17776"),
                    n.e("78969"),
                    n.e("77770"),
                    n.e("61275"),
                    n.e("49557"),
                    n.e("30072"),
                    n.e("18629"),
                    n.e("48227"),
                    n.e("37175"),
                    n.e("13920"),
                    n.e("99424"),
                    n.e("670"),
                    n.e("99496"),
                    n.e("44565"),
                    n.e("88563"),
                    n.e("24212"),
                    n.e("20459"),
                    n.e("54960"),
                    n.e("55455"),
                    n.e("778"),
                    n.e("75683"),
                    n.e("23864"),
                    n.e("47519"),
                    n.e("80197"),
                    n.e("48132"),
                    n.e("61686"),
                    n.e("77873"),
                    n.e("97312"),
                    n.e("38469"),
                    n.e("9009"),
                    n.e("80126"),
                    n.e("91072"),
                    n.e("43422"),
                    n.e("49181"),
                    n.e("23651"),
                    n.e("50766"),
                    n.e("33925"),
                    n.e("72723"),
                    n.e("65584"),
                    n.e("94149"),
                    n.e("55286"),
                    n.e("43325"),
                    n.e("72026"),
                    n.e("83536"),
                    n.e("66756"),
                    n.e("25167"),
                    n.e("3650"),
                    n.e("21532"),
                    n.e("25996"),
                    n.e("54948"),
                    n.e("85251"),
                    n.e("28634"),
                    n.e("39644"),
                    n.e("73432"),
                    n.e("39086"),
                    n.e("17104"),
                    n.e("18021"),
                    n.e("28212"),
                    n.e("11895"),
                    n.e("35353"),
                    n.e("48180"),
                    n.e("97551"),
                    n.e("10743"),
                    n.e("42745"),
                    n.e("70148"),
                    n.e("22878"),
                    n.e("74318"),
                    n.e("9"),
                    n.e("10887"),
                    n.e("99439"),
                    n.e("74362"),
                    n.e("13162"),
                    n.e("80904"),
                    n.e("75459"),
                    n.e("43300"),
                    n.e("32886"),
                    n.e("92111"),
                    n.e("64648"),
                    n.e("95013"),
                    n.e("76858"),
                    n.e("6819"),
                    n.e("96004"),
                    n.e("58921"),
                    n.e("19728"),
                    n.e("94373"),
                    n.e("35238"),
                    n.e("58818"),
                    n.e("61833"),
                    n.e("11689"),
                    n.e("14520"),
                    n.e("4142"),
                    n.e("19059"),
                    n.e("13586"),
                    n.e("4349"),
                    n.e("73763"),
                    n.e("98833"),
                    n.e("47352"),
                    n.e("38280"),
                    n.e("12345"),
                    n.e("23241"),
                    n.e("9172"),
                    n.e("35285"),
                    n.e("65420"),
                    n.e("3056"),
                    n.e("62329"),
                    n.e("12712"),
                    n.e("74725"),
                    n.e("78015"),
                    n.e("22570"),
                    n.e("99998"),
                    n.e("80759"),
                    n.e("33587"),
                    n.e("88391"),
                    n.e("988"),
                    n.e("54540"),
                    n.e("34355"),
                    n.e("2959"),
                    n.e("70539"),
                    n.e("23904"),
                    n.e("82826"),
                    n.e("64477"),
                    n.e("65700"),
                    n.e("15223"),
                    n.e("51410"),
                    n.e("20624"),
                    n.e("7460"),
                    n.e("67902"),
                    n.e("55045"),
                    n.e("17791"),
                    n.e("91968"),
                    n.e("59719"),
                    n.e("71454"),
                    n.e("93552"),
                    n.e("21107"),
                    n.e("52179"),
                    n.e("10855"),
                    n.e("99116"),
                    n.e("65671"),
                    n.e("76739"),
                    n.e("96518"),
                    n.e("33091"),
                    n.e("18016"),
                    n.e("40351"),
                    n.e("76279"),
                    n.e("45309"),
                    n.e("8991"),
                    n.e("16994"),
                    n.e("19802"),
                    n.e("60445"),
                    n.e("46933"),
                    n.e("25268"),
                    n.e("79238"),
                    n.e("64488"),
                    n.e("14406"),
                    n.e("98574"),
                    n.e("94629"),
                    n.e("99726"),
                    n.e("57788"),
                    n.e("11408"),
                    n.e("1444"),
                    n.e("9018"),
                    n.e("21792"),
                    n.e("57504"),
                    n.e("64636"),
                    n.e("56486"),
                    n.e("84126"),
                    n.e("67732"),
                    n.e("76880"),
                    n.e("23097"),
                    n.e("25236"),
                    n.e("50392"),
                    n.e("57417"),
                    n.e("25965"),
                    n.e("99417"),
                    n.e("14755"),
                    n.e("61603"),
                    n.e("47899"),
                    n.e("3969"),
                    n.e("40804"),
                    n.e("89304"),
                    n.e("1269"),
                    n.e("38096"),
                    n.e("37393"),
                    n.e("42903"),
                    n.e("56433"),
                    n.e("65123"),
                    n.e("31668"),
                    n.e("28687"),
                    n.e("88629"),
                    n.e("85781"),
                    n.e("97908"),
                    n.e("97582"),
                    n.e("50741"),
                    n.e("45181"),
                    n.e("67413"),
                    n.e("8066"),
                    n.e("63301"),
                    n.e("55907"),
                    n.e("65724"),
                    n.e("35876"),
                    n.e("96116"),
                    n.e("27392"),
                    n.e("79440"),
                    n.e("64404"),
                    n.e("26509"),
                    n.e("90580"),
                    n.e("17623"),
                    n.e("57727"),
                    n.e("53408"),
                    n.e("16337"),
                    n.e("30182"),
                    n.e("81269"),
                    n.e("8644"),
                    n.e("32056"),
                    n.e("72425"),
                    n.e("97487"),
                    n.e("80373"),
                    n.e("32744"),
                    n.e("9131"),
                    n.e("76625"),
                    n.e("24551"),
                    n.e("86345"),
                    n.e("54189"),
                    n.e("23296"),
                    n.e("74870"),
                    n.e("52757"),
                    n.e("85081"),
                    n.e("75091"),
                    n.e("49362"),
                    n.e("94848"),
                    n.e("643"),
                    n.e("5558"),
                    n.e("57533"),
                    n.e("65253"),
                    n.e("25499"),
                    n.e("6389"),
                    n.e("30477"),
                    n.e("21035"),
                    n.e("29959"),
                    n.e("14350"),
                    n.e("19613"),
                    n.e("51176"),
                    n.e("63102"),
                    n.e("63117"),
                    n.e("21273"),
                    n.e("95414"),
                    n.e("8553"),
                    n.e("18423"),
                    n.e("8596"),
                    n.e("26877"),
                    n.e("37895"),
                    n.e("49857"),
                    n.e("62332"),
                    n.e("8607"),
                    n.e("27962"),
                    n.e("68201"),
                    n.e("3376"),
                    n.e("56490"),
                    n.e("26132"),
                    n.e("64827"),
                    n.e("63232"),
                    n.e("7167"),
                    n.e("84569"),
                    n.e("61060"),
                    n.e("10471"),
                    n.e("52457"),
                    n.e("60235"),
                    n.e("77333"),
                    n.e("6338"),
                    n.e("47834"),
                    n.e("18573"),
                    n.e("97595"),
                    n.e("47662"),
                    n.e("44057"),
                    n.e("13736"),
                    n.e("28504"),
                    n.e("31988"),
                    n.e("62156"),
                    n.e("44571"),
                    n.e("34303"),
                    n.e("40291"),
                    n.e("2368"),
                    n.e("33115"),
                    n.e("97270"),
                    n.e("73122"),
                    n.e("8304"),
                    n.e("93159"),
                    n.e("55936"),
                    n.e("89088"),
                    n.e("30760"),
                    n.e("94723"),
                    n.e("30316"),
                    n.e("62931"),
                    n.e("45959"),
                    n.e("58529"),
                    n.e("81987"),
                    n.e("58038"),
                    n.e("71202"),
                    n.e("75201"),
                    n.e("76909"),
                    n.e("6174"),
                    n.e("93103"),
                    n.e("28367"),
                    n.e("81647"),
                    n.e("91763"),
                    n.e("34552"),
                    n.e("76602"),
                    n.e("7170"),
                    n.e("11310"),
                    n.e("21921"),
                    n.e("7575"),
                    n.e("40402"),
                    n.e("72963"),
                    n.e("52511"),
                    n.e("54241"),
                    n.e("24303"),
                    n.e("42724"),
                    n.e("93766"),
                    n.e("13823"),
                    n.e("71210"),
                    n.e("21930"),
                    n.e("59460"),
                    n.e("53930"),
                    n.e("39970"),
                    n.e("76418"),
                    n.e("40258"),
                    n.e("92583"),
                    n.e("43437"),
                    n.e("75842"),
                    n.e("66495"),
                    n.e("98329"),
                    n.e("68403"),
                    n.e("9205"),
                    n.e("8555"),
                    n.e("88342"),
                    n.e("30233"),
                    n.e("86127"),
                    n.e("46070"),
                    n.e("88599"),
                    n.e("36863"),
                    n.e("21200"),
                    n.e("72789"),
                    n.e("54622"),
                    n.e("76894"),
                    n.e("25949"),
                    n.e("44502"),
                    n.e("17249"),
                    n.e("71273"),
                    n.e("89421"),
                    n.e("67861"),
                    n.e("1518"),
                    n.e("79049"),
                    n.e("98965"),
                    n.e("9640"),
                    n.e("62422"),
                    n.e("90365"),
                    n.e("23354"),
                    n.e("66707"),
                    n.e("52548"),
                    n.e("17989"),
                    n.e("35027"),
                    n.e("37977"),
                    n.e("91671"),
                    n.e("49653"),
                    n.e("47626"),
                    n.e("95596"),
                    n.e("82644"),
                    n.e("3589"),
                    n.e("13867"),
                    n.e("53984"),
                    n.e("43780"),
                    n.e("20590"),
                    n.e("31267"),
                    n.e("86414"),
                    n.e("80830"),
                    n.e("51224"),
                    n.e("79745"),
                    n.e("29963"),
                    n.e("80854"),
                    n.e("35395"),
                    n.e("74630"),
                    n.e("92215"),
                    n.e("35313"),
                    n.e("45413"),
                    n.e("46844"),
                    n.e("39075"),
                    n.e("63235"),
                    n.e("86672"),
                    n.e("75029"),
                    n.e("48948"),
                    n.e("63244"),
                    n.e("32756"),
                    n.e("92075"),
                    n.e("64850"),
                    n.e("23532"),
                    n.e("70104"),
                    n.e("68214"),
                    n.e("44761"),
                    n.e("2564"),
                    n.e("71477"),
                    n.e("67878"),
                    n.e("90417"),
                    n.e("58946"),
                    n.e("14285"),
                    n.e("48330"),
                    n.e("91450"),
                    n.e("95752"),
                    n.e("35321"),
                    n.e("3332"),
                    n.e("8362"),
                    n.e("41678"),
                    n.e("72401"),
                    n.e("52617"),
                    n.e("67022"),
                    n.e("2698"),
                    n.e("4744"),
                    n.e("36227"),
                    n.e("99292"),
                    n.e("50097"),
                    n.e("37021"),
                    n.e("18465"),
                    n.e("33184"),
                    n.e("71430"),
                    n.e("76516"),
                    n.e("501"),
                    n.e("86243"),
                    n.e("85794"),
                    n.e("67837"),
                    n.e("73384"),
                    n.e("82783"),
                    n.e("32209"),
                    n.e("5557"),
                    n.e("68062"),
                    n.e("93438"),
                    n.e("9371"),
                    n.e("45437"),
                    n.e("50033"),
                    n.e("44780"),
                    n.e("39171"),
                    n.e("87478"),
                    n.e("36564"),
                    n.e("92513"),
                    n.e("83952"),
                    n.e("52229"),
                    n.e("3998"),
                    n.e("95340"),
                    n.e("89916"),
                    n.e("60773"),
                    n.e("59957"),
                    n.e("29666"),
                    n.e("8018"),
                    n.e("36877"),
                    n.e("68763"),
                    n.e("3930"),
                    n.e("58273"),
                    n.e("3663"),
                    n.e("20930"),
                    n.e("38056"),
                    n.e("26001"),
                    n.e("14591"),
                    n.e("52111"),
                    n.e("20379"),
                    n.e("77487"),
                    n.e("8536"),
                    n.e("57458"),
                    n.e("8829"),
                    n.e("19193"),
                    n.e("1243"),
                    n.e("15920"),
                    n.e("96804"),
                    n.e("97073"),
                    n.e("75133"),
                    n.e("80945"),
                    n.e("58164"),
                    n.e("96268"),
                    n.e("28850"),
                    n.e("95998"),
                    n.e("27659"),
                    n.e("46430"),
                    n.e("62875"),
                    n.e("37490"),
                    n.e("42234"),
                    n.e("66580"),
                    n.e("89523"),
                    n.e("63584"),
                    n.e("26294"),
                    n.e("74678"),
                    n.e("10147"),
                    n.e("29260"),
                    n.e("32737"),
                    n.e("81189"),
                    n.e("83230"),
                    n.e("98972"),
                    n.e("54030"),
                    n.e("203"),
                    n.e("39103"),
                    n.e("4774"),
                    n.e("49629"),
                    n.e("78601"),
                    n.e("80407"),
                    n.e("34546"),
                    n.e("41701"),
                    n.e("81949"),
                    n.e("4098"),
                    n.e("21455"),
                    n.e("20402"),
                    n.e("755"),
                    n.e("40985"),
                    n.e("25612"),
                    n.e("68083"),
                    n.e("48730"),
                    n.e("71467"),
                    n.e("60003"),
                    n.e("30167"),
                    n.e("49013"),
                    n.e("76814"),
                    n.e("51892"),
                    n.e("19457"),
                    n.e("37937"),
                    n.e("21778"),
                    n.e("18563"),
                    n.e("33448"),
                    n.e("3710"),
                    n.e("46149"),
                    n.e("96325"),
                    n.e("45830"),
                    n.e("8979"),
                    n.e("33771"),
                    n.e("82178"),
                    n.e("38260"),
                    n.e("46039"),
                    n.e("95602"),
                    n.e("34409"),
                    n.e("93004"),
                    n.e("12162"),
                    n.e("66008"),
                    n.e("22644"),
                    n.e("78717"),
                    n.e("29569"),
                    n.e("96480"),
                    n.e("95992"),
                    n.e("79006"),
                    n.e("89541"),
                    n.e("44727"),
                    n.e("5871"),
                    n.e("27462"),
                    n.e("1888"),
                    n.e("86546"),
                    n.e("22455"),
                    n.e("60816"),
                    n.e("68031"),
                    n.e("41990"),
                    n.e("97162"),
                    n.e("71203"),
                    n.e("84820"),
                    n.e("66598"),
                    n.e("6627"),
                    n.e("43256"),
                    n.e("60536"),
                    n.e("28011"),
                    n.e("73566"),
                    n.e("7408"),
                    n.e("46327"),
                    n.e("15057"),
                    n.e("2846"),
                    n.e("91531"),
                    n.e("75284"),
                    n.e("62318"),
                    n.e("44912"),
                    n.e("13052"),
                    n.e("64926"),
                    n.e("50541"),
                    n.e("47999"),
                    n.e("37886"),
                    n.e("46416"),
                    n.e("15622"),
                    n.e("61750"),
                    n.e("95782"),
                    n.e("61137"),
                    n.e("31997"),
                    n.e("86629"),
                    n.e("98384"),
                    n.e("13582"),
                    n.e("49111"),
                    n.e("24564"),
                    n.e("66601"),
                    n.e("54876"),
                    n.e("39721"),
                    n.e("19631"),
                    n.e("82384"),
                    n.e("76892"),
                    n.e("16799"),
                    n.e("52694"),
                    n.e("23815"),
                    n.e("32482"),
                    n.e("62883"),
                    n.e("40976"),
                    n.e("85216"),
                    n.e("83774"),
                    n.e("83102"),
                    n.e("80890"),
                    n.e("2552"),
                    n.e("89588"),
                    n.e("24084"),
                    n.e("17723"),
                    n.e("44790"),
                    n.e("87641"),
                    n.e("44264"),
                    n.e("74913"),
                    n.e("35476"),
                    n.e("1691"),
                    n.e("14451"),
                    n.e("7755"),
                    n.e("93720"),
                    n.e("54658"),
                    n.e("49409"),
                    n.e("38035"),
                    n.e("33049"),
                    n.e("43184"),
                    n.e("21403"),
                    n.e("69443"),
                    n.e("39518"),
                    n.e("43456"),
                    n.e("44491"),
                ]).then(n.bind(n, 907206));
                return (t) =>
                    (0, i.jsx)(e, { ...t, onClose: m.Z_, onInteraction: (0, J.s)("UserSettingsMenu", M.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, J.s)("AudioDeviceMenu", M.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, m.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("60536"), n.e("78827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, il.d)({ location: "Account" });
                    return (0, i.jsx)(P.f5, {
                        value: t,
                        children: (0, i.jsx)(e, {
                            onClose: m.Z_,
                            renderInputDevices: !0,
                            renderInputProfiles: n.length > 0,
                            renderInputVolume: !0,
                            minimal: !0,
                            onInteraction: this.audioOnInteractionHandler,
                        }),
                    });
                };
            });
    };
    handleOutputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, m.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("60536"), n.e("78827")]).then(n.bind(n, 385318));
                return () =>
                    (0, i.jsx)(P.f5, {
                        value: t,
                        children: (0, i.jsx)(e, {
                            onClose: m.Z_,
                            renderOutputDevices: !0,
                            renderOutputVolume: !0,
                            minimal: !0,
                            onInteraction: this.audioOnInteractionHandler,
                        }),
                    });
            });
    };
    handleMouseEnter = () => {
        this.setState({ hovered: !0 });
    };
    handleMouseLeave = () => {
        this.setState({ hovered: !1 });
    };
    handleMouseEnterMute = () => {
        this.setState({
            hoveringOnMute: !0,
            shouldShowSpeakingWhileMutedTooltip: !1,
            shouldShowSpeakingWhilePTTTooltip: !1,
        }),
            this.speakingWhileMutedTooltipTimeout.stop(),
            this.speakingWhilePTTTooltipTimeout.stop();
    };
    handleMouseLeaveMute = () => {
        this.setState({ hoveringOnMute: !1 });
    };
    dismissSpeakingWhileMutedTooltip = () => {
        this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }), this.speakingWhileMutedTooltipTimeout.stop();
    };
    dismissSpeakingWhilePTTTooltip = () => {
        this.setState({ shouldShowSpeakingWhilePTTTooltip: !1 }), this.speakingWhilePTTTooltipTimeout.stop();
    };
    dismissTooltips = () => {
        this.props.onDismissDeviceChangedTooltip?.(),
            this.props.dismissPTTJoinTooltip?.(),
            this.dismissSpeakingWhileMutedTooltip(),
            this.dismissSpeakingWhilePTTTooltip();
    };
    handleOccludedChanged = () => {
        let { occluded: e } = this.props;
        e &&
            this.setState({
                shouldShowNametagTooltip: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                shouldShowSpeakingWhilePTTTooltip: !1,
            });
    };
    handleSpeakingWhileMutedChanged = () => {
        let {
                selfMute: e,
                serverMute: t,
                suppress: n,
                speakingWhileMuted: i,
                occluded: r,
                shouldShowPTTJoinTooltip: a,
                deviceChangedTooltipType: s,
            } = this.props,
            { hoveringOnMute: l } = this.state,
            o =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > rP;
        i
            ? l ||
              !e ||
              t ||
              n ||
              r ||
              !o ||
              null != s ||
              a ||
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                  (this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(rM, () =>
                          this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                      );
              })
            : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
              this.speakingWhileMutedTooltipTimeout.stop());
    };
    handleSpeakingWhilePTTChanged = () => {
        let {
                selfMute: e,
                serverMute: t,
                suppress: n,
                speakingWhilePTTInactive: i,
                occluded: r,
                shouldShowPTTJoinTooltip: a,
                deviceChangedTooltipType: s,
            } = this.props,
            { hoveringOnMute: l } = this.state,
            o =
                void 0 === this.lastSpeakingWhilePTTNotificationTime ||
                performance.now() - this.lastSpeakingWhilePTTNotificationTime >
                    this.speakingWhilePTTInactiveBackoff.current;
        i
            ? l ||
              e ||
              t ||
              n ||
              r ||
              !o ||
              null != s ||
              a ||
              this.setState({ shouldShowSpeakingWhilePTTTooltip: !0 }, () => {
                  (this.lastSpeakingWhilePTTNotificationTime = performance.now()),
                      this.speakingWhilePTTInactiveBackoff.fail(),
                      this.speakingWhilePTTTooltipTimeout.start(rM, () =>
                          this.setState({ shouldShowSpeakingWhilePTTTooltip: !1 }),
                      );
              })
            : (this.setState({ shouldShowSpeakingWhilePTTTooltip: !1 }), this.speakingWhilePTTTooltipTimeout.stop());
    };
    renderStatus() {
        let { hovered: e } = this.state,
            {
                activities: t,
                applicationStream: n,
                currentUser: r,
                status: a,
                userTag: s,
                voiceChannel: l,
            } = this.props;
        if (null == r) return null;
        if ((0, O.A)({ activities: t, status: a, applicationStream: n, voiceChannel: l }))
            return (0, i.jsxs)(b.A, {
                hoverText: s,
                forceHover: e,
                children: [
                    (0, i.jsx)(f.A, { children: ne.Ay.humanizeStatus(a) }),
                    (0, i.jsx)(R.A, {
                        user: r,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: l,
                        textClassName: rv.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let o = t?.find((e) => {
            let { type: t } = e;
            return t === tf.$pd.CUSTOM_STATUS;
        });
        return null != o
            ? (0, i.jsxs)(b.A, {
                  hoverText: s,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(f.A, { children: ne.Ay.humanizeStatus(a) }),
                      (0, i.jsx)(es.A, { activity: o, emojiClassName: rv.Zg, className: rv.WO }),
                  ],
              })
            : null != a && a !== tf.clD.UNKNOWN && r.hasUniqueUsername()
              ? (0, i.jsx)(b.A, {
                    hoverText: s,
                    forceHover: e,
                    children: (0, i.jsx)(v, { text: ne.Ay.humanizeStatus(a) }),
                })
              : s;
    }
    renderNameTag = (e) => {
        let { currentUser: t, username: n } = this.props;
        return null == t
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", {
                          className: rv.eW,
                          children: (0, i.jsx)(ib.A, {
                              className: s()({ [rv.e8]: null != e }),
                              children: (0, i.jsx)(ec.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? ed.G.ANIMATED : ed.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: rv.XP,
                          children: (0, i.jsx)(iv.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let { badgeDirectoryNuxPopoverVariant: t, currentUser: n, dismissibleContents: r } = this.props;
        return null == n
            ? null
            : (0, i.jsx)(i6, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: n,
                  targetElementRef: this.avatarWithPopoutRef,
                  badgeDirectoryNuxPopoverVariant: t,
                  additionalDCs: r.avatar,
                  children: (0, i.jsx)(rG, {
                      ...this.props,
                      ref: this.avatarWithPopoutRef,
                      handleMouseLeave: this.handleMouseLeave,
                      renderNameTag: this.renderNameTag,
                      "data-jump-section": e["data-jump-section"],
                  }),
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: r, isListenAlongVisible: a } = this.props,
            l = this.state.hovered;
        return null == e
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(p.sk, {
                          children: (e) =>
                              (0, i.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: s()(rv.kL, { [rv.UG]: null != n, [rv.bc]: !r, [rv.G5]: a }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(ea.A, { nameplate: t, hovered: l, placement: er.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(rk, {
                                          ...this.props,
                                          ...this.state,
                                          accountContainerRef: this.containerRef,
                                          handleMouseEnterMute: this.handleMouseEnterMute,
                                          handleMouseLeaveMute: this.handleMouseLeaveMute,
                                          handleToggleSelfMute: this.handleToggleSelfMute,
                                          handleToggleSelfDeaf: this.handleToggleSelfDeaf,
                                          handleInputAudioContextMenu: this.handleInputAudioContextMenu,
                                          handleOutputAudioContextMenu: this.handleOutputAudioContextMenu,
                                          handleOpenAccountSettings: this.handleOpenAccountSettings,
                                          handleOpenSettingsContextMenu: this.handleOpenSettingsContextMenu,
                                          dismissTooltips: this.dismissTooltips,
                                      }),
                                  ],
                              }),
                      }),
                      (0, i.jsx)(eD, {}),
                  ],
              });
    }
}
function rk(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: r,
            serverMute: a,
            serverDeaf: s,
            suppress: l,
            shouldShowSpeakingWhileMutedTooltip: o,
            shouldShowSpeakingWhilePTTTooltip: d,
            webBuildOverride: c,
            handleMouseEnterMute: u,
            handleMouseLeaveMute: _,
            handleToggleSelfDeaf: E,
            handleToggleSelfMute: A,
            handleInputAudioContextMenu: h,
            handleOutputAudioContextMenu: I,
            handleOpenAccountSettings: f,
            handleOpenSettingsContextMenu: p,
            dismissibleContents: T,
            nameplate: m,
            accountContainerRef: g,
            deviceChangedTooltipType: S,
            shouldShowPTTJoinTooltip: N = !1,
            dismissTooltips: C,
            speaking: O,
        } = e,
        R = (0, ei.K)(m);
    return (0, i.jsxs)("div", {
        className: rv.Uo,
        style: R,
        children: [
            (0, i.jsx)(rp, {
                accountContainerRef: g,
                selfMute: n,
                serverMute: a,
                suppress: l,
                awaitingRemote: r,
                onMouseEnter: u,
                onMouseLeave: _,
                onClick: A,
                onContextMenu: h,
                iconForeground: null != m ? rv.t4 : void 0,
                nameplate: m,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowInputDeviceChangedTooltip: !o && "input" === S,
                shouldShowSpeakingWhilePTTTooltip: d,
                shouldShowPTTJoinTooltip: N,
                dismissTooltips: C,
                speaking: O,
            }),
            (0, i.jsx)(rs, {
                selfDeaf: t,
                serverDeaf: s,
                onClick: E,
                onContextMenu: I,
                awaitingRemote: r,
                iconForeground: null != m ? rv.t4 : void 0,
                nameplate: m,
                shouldShowOutputDeviceChangedTooltip: "output" === S,
                dismissTooltips: C,
            }),
            (0, i.jsx)(ry, {
                webBuildOverride: c,
                onClick: f,
                onContextMenu: p,
                dismissibleContents: T.settings,
                iconForeground: null != m ? rv.t4 : void 0,
                nameplate: m,
            }),
        ],
    });
}
function rF(e) {
    let t = (0, c.bG)([iu.A], () => null != iu.A.getChannelId()),
        n = (0, ey.Py)(e),
        i = r.useRef(new _.Ep()),
        [a, s] = r.useState(!1);
    r.useEffect(() => {
        t &&
            n &&
            (s(!0),
            i.current.start(rw, () => {
                s(!1);
            }));
    }, [t, n]);
    let l = r.useCallback(() => {
        s(!1), i.current.stop();
    }, []);
    return (
        (0, N.l0)(() => {
            i.current.stop();
        }),
        { shouldShowTooltip: a, dismissTooltip: l }
    );
}
function rV() {
    let e = (0, c.bG)([nI.default], () => nI.default.getCurrentUser()),
        t = (0, c.bG)([nb.default], () => nb.default.getId()),
        {
            activities: n,
            streaming: a,
            status: s,
        } = (0, c.cf)([nw.A], () => {
            let e = nw.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === tf.$pd.STREAMING;
                    }),
                status: nw.A.getStatus(),
            };
        }),
        l = (0, c.bG)([ig.A], () => ig.A.getAnyStreamForUser(t)),
        d = (0, S.A)({ userId: t }),
        E = (0, c.bG)([ip.A], () => ip.A.getVoiceVolume(t)),
        A = ne.Ay.useUserTag(e, { decoration: "never" }),
        h = (0, c.bG)([iu.A, iS.A], () => {
            let e = iu.A.getChannelId();
            return null != e ? iS.A.getChannel(e) : null;
        }),
        { mute: I, selfMute: f, suppress: p } = (0, id.A)(h),
        { selfDeaf: m, deaf: g } = (0, io.A)(h),
        C = (0, c.bG)([$.A], () => ((0, z.kK)() ? $.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        O = (0, c.bG)([ic.Ay], () => ic.Ay.getSpeakingWhileMuted()),
        R = (0, c.bG)([q.A], () => q.A.isFullscreenInContext()),
        L = (0, c.bG)([iC.A], () => iC.A.hasLayers()),
        D = (0, T.useModalsStore)(T.hasAnyModalOpenSelector) || L || iD.P.isDisallowPopupsSet() || R,
        y = (0, c.bG)([eu.default], () => null != eu.default.getAwaitingRemoteSessionInfo()),
        v = (0, c.bG)([iO.A], () => iO.A.getGuildId()),
        b = e?.avatarDecoration,
        x = (0, ee.A)(b),
        F = ne.Ay.useName(e) ?? "",
        { analyticsLocations: V } = (0, P.Ay)(M.A.ACCOUNT),
        B = (0, en.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: H } = (0, it.c9)(),
        j = (0, c.bG)([ii.A, nI.default, iN.A], () => {
            let e,
                t = ii.A.getSyncingWith(),
                n = ii.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = o()(Array.from(iN.A.getParty(e) ?? []))
                        .map((e) => nI.default.getUser(e))
                        .filter(no.Vq)
                        .value()),
                i.length > 1
            );
        }),
        Y = { avatar: [], settings: [] },
        K = (0, ir.lX)("AccountCoachmark"),
        Z = (0, el.ux)("AccountCoachmark"),
        X = (0, U.VV)({ location: "AccountCoachmark" }),
        Q = (function (e) {
            let { currentUserId: t, enabled: n } = e;
            r.useEffect(() => {
                null != t && n && !G.Ay.hasCatalogFor(t) && (0, w.RS)(t);
            }, [t, n]);
            let i = (0, c.bG)([G.Ay], () => null != t && G.Ay.hasCatalogFor(t), [t]),
                a = (0, c.bG)(
                    [G.Ay],
                    () => (null != t ? G.Ay.getBadges(t).filter((e) => W.sC.has(e.badge_id) && e.owned).length : 0),
                    [t],
                ),
                s = (0, c.yK)(
                    [G.Ay],
                    () =>
                        null != t
                            ? (function (e) {
                                  let t = new Map(e.map((e) => [e.badge_id, e])),
                                      n = [];
                                  for (let e of k) {
                                      let i = t.get(e);
                                      if (i?.owned !== !0 || null == i.current_tier) continue;
                                      let r = i.tiers.findIndex((e) => e.key === i.current_tier);
                                      if (-1 === r) continue;
                                      let a = i.tiers[r],
                                          s = a?.complex_icon_static_url ?? a?.simple_icon_url;
                                      null != s && n.push({ iconUrl: s, tierIndex: r });
                                  }
                                  return n
                                      .sort((e, t) => t.tierIndex - e.tierIndex)
                                      .slice(0, 3)
                                      .map((e) => e.iconUrl);
                              })(G.Ay.getBadges(t))
                            : [],
                    [t],
                );
            return n && null != t && i
                ? a > 0
                    ? { variant: "progress", newBadgeCount: a, badgeIconUrls: s }
                    : { variant: "no-progress" }
                : null;
        })({ currentUserId: e?.id, enabled: X });
    !D &&
        (Z && Y.avatar.push(u.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
        null != Q && Y.avatar.push(u.M.BADGE_DIRECTORY_NUX_POPOVER),
        K && Y.settings.push(u.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: J, dismissTooltip: et } = rF(iE.oh.AUDIO_INPUT),
        { shouldShowTooltip: ei, dismissTooltip: er } = rF(iE.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: ea, dismissTooltip: es } = (function () {
            let [e, t] = r.useState(!1),
                n = (0, c.bG)([ic.Ay], () => ic.Ay.getMode() === iE.TB.PUSH_TO_TALK),
                i = (0, c.bG)(
                    [iu.A],
                    () => null != iu.A.getChannelId() && (iu.A.getDuration() ?? Number.MAX_VALUE) < iA,
                ),
                [a, s] = r.useState(!1),
                { showPTTJoinTooltip: l } = i_.A.useConfig({ location: "usePTTJoinTooltip" }),
                o = r.useRef(new _.Ep()),
                d = r.useRef(new _.Ep());
            r.useEffect(() => {
                if (i && n && !e) {
                    if ((i_.A.getConfig({ location: "usePTTJoinTooltip:couldDisplayTooltip" }), !l)) return;
                    s(!0),
                        t(!0),
                        d.current.start(ih, () => {
                            t(!1);
                        }),
                        o.current.start(iA, () => {
                            s(!1);
                        });
                }
                i || s(!1);
            }, [i, n, l, e]);
            let u = r.useCallback(() => {
                s(!1), o.current.stop();
            }, []);
            return (
                (0, N.l0)(() => {
                    o.current.stop(), d.current.stop();
                }),
                { shouldShowTooltip: a, dismissTooltip: u }
            );
        })(),
        eo = (function () {
            let { showPTTSpeakingIndicator: e } = i_.A.useConfig({ location: "useSpeakingWhilePTT" }),
                [t, n] = r.useState(!1),
                i = (0, c.bG)([ic.Ay], () => ic.Ay.getMode() === iE.TB.PUSH_TO_TALK),
                a = (0, c.bG)([iu.A], () => iu.A.getRTCConnectionId()),
                s = (0, c.bG)([ic.Ay], () => {
                    let e = ic.Ay.getModeOptions().updatedAt;
                    return null != e && Date.now() - e < im;
                }),
                l = r.useRef(new _.Ep());
            return (
                r.useEffect(() => {
                    n(!1);
                }, [a]),
                r.useEffect(() => {
                    let t = 0,
                        r = l.current;
                    function o(e, i) {
                        let a = (i & iE.ME.VOICE) === iE.ME.VOICE,
                            s = ip.A.isCurrentUserPTTActive();
                        a && !s
                            ? ++t >= 6 &&
                              (n(!0),
                              r.start(iT, () => {
                                  n(!1);
                              }))
                            : (t = 0);
                    }
                    return (
                        s && e && i && null != a && ic.Ay.getMediaEngine().on(iI.bg.VoiceActivity, o),
                        () => {
                            ic.Ay.getMediaEngine().removeListener(iI.bg.VoiceActivity, o), r.stop();
                        }
                    );
                }, [e, i, s, a]),
                t
            );
        })(),
        ed = r.useMemo(() => (J ? "input" : ei ? "output" : void 0), [J, ei]),
        ec = r.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        et();
                        break;
                    case "output":
                        er();
                }
            },
            [et, er],
        );
    return (0, i.jsx)(P.f5, {
        value: V,
        children: (0, i.jsx)(rx, {
            currentUser: e,
            username: F,
            activities: n,
            applicationStream: l,
            voiceChannel: h,
            dismissibleContents: Y,
            badgeDirectoryNuxPopoverVariant: Q,
            userTag: A,
            occluded: D,
            selfDeaf: m,
            selfMute: f,
            serverDeaf: g,
            serverMute: I,
            speaking: d,
            voiceDb: E,
            speakingWhileMuted: O,
            speakingWhilePTTInactive: eo,
            status: s,
            streaming: a,
            suppress: p,
            webBuildOverride: C,
            awaitingRemote: y,
            nameplate: B,
            selectedGuildId: v,
            avatarDecoration: x,
            isQuestBarEmpty: H,
            isListenAlongVisible: j,
            deviceChangedTooltipType: ed,
            onDismissDeviceChangedTooltip: () => ec(ed),
            shouldShowPTTJoinTooltip: ea,
            dismissPTTJoinTooltip: es,
        }),
    });
}
