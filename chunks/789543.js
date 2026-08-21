n.d(t, { g: () => lU, A: () => lV }), n(321073);
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(435558),
    o = n.n(r),
    d = n(158390),
    c = n(17928),
    u = n(554146),
    h = n(451988),
    m = n(97808),
    p = n(778712),
    g = n(922016),
    f = n(939249),
    A = n(140735),
    x = n(312138);
if (221552 == n.j) var v = n(192308);
var C = n(442433),
    E = n(820284),
    T = n(717558),
    _ = n(964486),
    I = n(220839),
    j = n(397244),
    N = n(394871),
    S = n(221877),
    y = n(866323),
    b = n(120842);
function M(e) {
    let { text: t } = e,
        n = (0, y.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, i.jsx)("div", {
        className: b.k,
        children: n((e, t) => (0, i.jsx)(S.animated.div, { className: b.H, style: e, children: t })),
    });
}
var R = n(29160),
    O = n(793574),
    w = n(688810),
    P = n(992526),
    k = n(682618),
    L = n(982240),
    D = n(70283);
let U = [D.$.STREAMING, D.$.GAME_VARIETY, D.$.GAME_TIME, D.$.ACCOUNT_AGE];
var G = n(116833),
    F = n(43105),
    V = n(375708);
function H(e) {
    let t = "progress" === e.variant,
        n = t
            ? {
                  title: V.intl.string(V.t.uwDBSq),
                  body: V.intl.formatToPlainString(V.t.Mk5nzZ, { count: e.newBadgeCount }),
              }
            : { title: V.intl.string(V.t["5GD53o"]), body: V.intl.string(V.t["2Rb7tE"]) };
    return (0, i.jsx)(F.A, {
        targetElementRef: e.targetElementRef,
        shouldShow: !0,
        position: "top",
        alignmentStrategy: "edge",
        align: "left",
        caretConfig: { align: "start" },
        size: "lg",
        graphic: {
            type: "dynamic",
            component: G.DynamicGraphicComponent.BADGE_DIRECTORY_NUX,
            props: { hasProgress: t, badgeIconUrls: t ? e.badgeIconUrls : void 0 },
            aspectRatio: "21/9",
        },
        title: n.title,
        body: n.body,
        actions: [{ variant: "primary", text: V.intl.string(V.t.pHo9tZ), onClick: e.onPrimaryAction }],
        onRequestClose: e.onRequestClose,
    });
}
var B = n(470739),
    W = n(92111),
    Z = n(49999);
function z(e) {
    let { variantProps: t, targetElementRef: n, markAsDismissed: l } = e;
    return (0, i.jsx)(H, {
        ...t,
        onPrimaryAction: () => {
            l(Z.i.TAKE_ACTION), (0, B._)();
        },
        onRequestClose: () => l(Z.i.USER_DISMISS),
        targetElementRef: n,
    });
}
var K = n(521502),
    q = n(380610),
    Y = n(198052),
    $ = n(18235),
    X = n(183184),
    J = n(384059),
    Q = n(480890),
    ee = n(601255),
    et = n(562819),
    en = n(449582),
    ei = n(351952),
    el = n(88686),
    ea = n(174755),
    es = n(302223),
    er = n(248778),
    eo = n(609425),
    ed = n(922301),
    ec = n(660184),
    eu = n(643501),
    eh = n(297264),
    em = n(834730),
    ep = n(789645),
    eg = n(826673),
    ef = n(750506),
    eA = n(780964),
    ex = n(766075),
    ev = n(417146),
    eC = n(552122),
    eE = n(717421),
    eT = n(775602),
    e_ = n(579800);
let eI = { mass: 10, tension: 550, friction: 140 };
function ej(e) {
    let { className: t, pageMultiplier: n } = e,
        a = (0, c.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        [r, d] = l.useState({ x: 0, y: 0 }),
        u = l.useMemo(
            () =>
                o().throttle((e) => {
                    a || d({ x: (window.innerWidth - e.pageX * n) / 90, y: (window.innerHeight - e.pageY * n) / 90 });
                }, 20),
            [n, a],
        );
    l.useEffect(() => (window.addEventListener("mousemove", u), () => window.removeEventListener("mousemove", u)), [u]);
    let [h, m] = (0, eE.z)(() => ({ x: 0, y: 0, config: eI }));
    return (
        l.useEffect(() => {
            m({ x: r.x, y: r.y });
        }, [r.x, r.y, m]),
        (0, i.jsx)(S.animated.div, {
            style: { transform: (0, S.to)([h.x, h.y], (e, t) => `translate3d(${e}px, ${t}px, 0)`) },
            className: s()(e_.T, t),
        })
    );
}
var eN = n(293556);
function eS(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: l } = e,
        a = eC.A.useIsEligible(),
        s = (0, eg.HX)(t),
        r = null != n,
        o = null != l ? { color: l } : void 0,
        { analyticsLocations: d } = (0, w.Ay)(O.A.HOLIDAY_COACHMARK);
    function c(e) {
        (0, eg.Dr)(t, { dismissAction: e });
    }
    function u() {
        (0, ex.openUserSettings)(eA.X.NOTIFICATIONS_PANEL, { analyticsLocations: d }), c(Z.i.TAKE_ACTION);
    }
    return a && !s
        ? (0, i.jsx)(ef.Ay, {
              children: (0, i.jsxs)("div", {
                  className: eN.iE,
                  style: { backgroundColor: r ? n : void 0 },
                  children: [
                      !r &&
                          (0, i.jsxs)("div", {
                              className: eN.o5,
                              children: [
                                  (0, i.jsx)(ej, { className: eN.iL, pageMultiplier: 5 }),
                                  (0, i.jsx)("div", { className: eN.Np }),
                              ],
                          }),
                      (0, i.jsx)("div", { className: eN.c8 }),
                      (0, i.jsxs)("div", {
                          className: eN.Qs,
                          children: [
                              (0, i.jsxs)("div", {
                                  children: [
                                      (0, i.jsx)(eh.D, {
                                          variant: "heading-md/bold",
                                          color: null != o ? void 0 : "text-overlay-light",
                                          style: o,
                                          children: V.intl.string(V.t["6CxPoB"]),
                                      }),
                                      (0, i.jsx)(em.E, {
                                          variant: "text-xs/normal",
                                          color: "text-overlay-light",
                                          children: V.intl.format(V.t.IVzJ8G, {
                                              settingsHook: (e, t) =>
                                                  (0, i.jsx)(
                                                      f.D,
                                                      {
                                                          tag: "span",
                                                          className: eN.nf,
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
                              (0, i.jsx)(f.D, {
                                  className: eN.l2,
                                  onClick: () => c(Z.i.USER_DISMISS),
                                  children: (0, i.jsx)(ep.P, { color: "currentColor", size: "xs" }),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
function ey() {
    return null == ev.A.coachmarkDismissibleContent
        ? null
        : (0, i.jsx)(eS, {
              dismissibleContent: ev.A.coachmarkDismissibleContent,
              backgroundColor: ev.A.coachmarkBackgroundColor,
              specialTextColor: ev.A.coachmarkSpecialTextColor,
          });
}
var eb = n(74848),
    eM = n(607399),
    eR = n(707554),
    eO = n(224640),
    ew = n(305866),
    eP = n(364522),
    ek = n(22231),
    eL = n(812993),
    eD = n(935154),
    eU = n(780338);
if (221552 != n.j) var v = n(192308);
var eG = n(980707),
    eF = n(26137),
    eV = n(473935),
    eH = n(765671),
    eB = n(176781),
    eW = n(320448),
    eZ = n(993401),
    ez = n(211450);
function eK(e) {
    return (0, i.jsx)("div", {
        className: ez.wE,
        children: (0, i.jsx)(eG.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function eq(e) {
    let {
            action: t,
            onClick: n,
            icon: a,
            label: s,
            sublabel: r,
            trailing: o,
            renderSubmenu: d,
            ref: c,
            submenuTargetElementRef: u,
            submenuAlign: h,
        } = e,
        m = null != n,
        p = (0, eZ.rE)({ action: t, onClick: n }),
        [A, x] = l.useState(!1),
        C = l.useRef(null),
        E = c ?? C,
        T = null != d,
        _ = T && m,
        I = l.useCallback(() => {
            x(!0);
        }, []),
        j = l.useCallback(() => {
            (0, v.hasAnyModalOpen)() || x(!1);
        }, []);
    function N() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: ez.iA, children: (0, i.jsx)(a, { size: "xs", color: "currentColor" }) }),
                (0, i.jsxs)("div", {
                    className: ez.$H,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(em.E, {
                                    color: "currentColor",
                                    variant: "text-sm/medium",
                                    className: ez.W1,
                                    children: s,
                                }),
                                (0, i.jsx)(em.E, { color: "currentColor", variant: "text-xs/medium", children: r }),
                            ],
                        }),
                        o,
                    ],
                }),
            ],
        });
    }
    function S(e) {
        let t;
        return (
            (t = _
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(f.D, { className: ez.ef, onClick: p, children: N() }),
                          (0, i.jsx)(f.D, {
                              className: ez.ap,
                              "aria-label": V.intl.string(V.t.PdRCRg),
                              ...e,
                              onClick: I,
                              children: (0, i.jsx)(eW._, { size: "xs", color: "currentColor" }),
                          }),
                      ],
                  })
                : T
                  ? (0, i.jsxs)(f.D, {
                        className: ez.ef,
                        ...e,
                        onClick: I,
                        children: [
                            N(),
                            (0, i.jsx)("div", {
                                className: ez.ap,
                                children: (0, i.jsx)(eW._, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    })
                  : (0, i.jsx)(f.D, { className: ez.ef, onClick: p, children: N() })),
            (0, i.jsx)("div", { ref: E, className: ez.jG, children: t })
        );
    }
    return T
        ? (0, i.jsx)("li", {
              className: ez.j$,
              onMouseEnter: I,
              onMouseLeave: j,
              children: (0, i.jsx)(g.Y, {
                  targetElementRef: u ?? E,
                  align: h,
                  spacing: 0,
                  renderPopout: d,
                  shouldShow: A,
                  onRequestClose: j,
                  children: S,
              }),
          })
        : (0, i.jsx)("li", { className: ez.j$, children: S() });
}
function eY(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var e$ = n(734066),
    eX = n(915725),
    eJ = n(409067),
    eQ = n(271597),
    e0 = n(475358),
    e1 = n(866665),
    e2 = n(408278),
    e3 = n(625903),
    e5 = n(404778),
    e7 = n(689175),
    e4 = n(821609),
    e8 = n(532624),
    e6 = n(927813),
    e9 = n(879631),
    te = n(350535),
    tt = n(974293),
    tn = n(572164),
    ti = n(953932),
    tl = n(280483),
    ta = n(890856),
    ts = n(713517),
    tr = n(609174),
    to = n(619744);
function td(e) {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        a = (0, tr.Y_)(),
        s = l.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), t?.(), (0, eQ.p)({ initialEditingClipId: a.id });
            },
            [a, t],
        );
    return (0, i.jsx)(e4.$, {
        onClick: s,
        icon: ek.PencilIcon,
        variant: n,
        size: "sm",
        text: V.intl.string(V.t.bt75uw),
        fullWidth: !0,
    });
}
var tc = n(82716),
    tu = n(585579),
    th = n(930317),
    tm = n(285072),
    tp = n(575172);
let tg = l.memo(function (e) {
    let { clip: t, isNew: n, onClose: a, className: r } = e,
        o = l.useRef(null),
        { isHoveringOrFocusing: d } = (0, ts.A)(o),
        c = l.useCallback(() => {
            a?.(), (0, eQ.p)({ initialEditingClipId: t.id });
        }, [t.id, a]);
    return (0, i.jsx)(tr.Cl, {
        clip: t,
        children: (0, i.jsx)(ta.s, {
            ref: o,
            "aria-label": V.intl.string(V.t.bt75uw),
            onClick: c,
            className: s()(tp.Z1, r),
            children: (0, i.jsxs)(th.d, {
                isStatic: !0,
                children: [
                    n && (0, i.jsx)(eL.Lp, { className: tp.Ad, text: V.intl.string(V.t.y2b7CA) }),
                    (0, i.jsxs)(tm.h, {
                        isVisible: d,
                        className: tp.Lw,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tp.mY,
                                children: [(0, i.jsx)(tc.z, {}), (0, i.jsx)(to.k, {})],
                            }),
                            (0, i.jsxs)("div", {
                                className: tp.E_,
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
var tf = n(696016),
    tA = n(652215),
    tx = n(753070),
    tv = n(711918),
    tC = n(48127);
function tE(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: a, setPopoutRef: s } = e;
    (0, tl.A)();
    let r = (0, c.yK)([eX.Ay], () => Object.values(eX.Ay.getClips())),
        o = (0, c.bG)([eX.Ay], () => eX.Ay.getSettings()),
        d = (0, c.bG)([eX.Ay], () => eX.Ay.getNewClipIds()),
        u = (0, tt.aJ)("ClipsPopout"),
        h = (0, c.bG)([eX.Ay], () => eX.Ay.getEnableAutoclipping()),
        m = (0, c.bG)([e8.Ay], () => e8.Ay.getKeybindForAction(tA.hCu.SAVE_CLIP)),
        p = l.useCallback(
            (e) => {
                s?.(e);
            },
            [s],
        ),
        g = !o.showPovClipsInGallery,
        f = l.useMemo(() => {
            let e = r.filter((e) => e.type === tf.nQ.CLIP && "" !== e.thumbnail && (!g || !(0, eJ.kD)(e)));
            return e.sort((e, t) => t.createdAt - e.createdAt), e;
        }, [r, g]),
        A = l.useMemo(() => f.slice(0, 16), [f]),
        x = f.length > 16,
        v = null != m ? te.dI(m.shortcut, !0) : null,
        C = [
            (0, e9.$)(o.clipsLength / e6.A.Millis.SECOND),
            (0, tx.zr)(o.clipsQuality.resolution),
            V.intl.formatToPlainString(V.t.Qb44XH, { fps: o.clipsQuality.frameRate }),
        ];
    return (
        u && C.push(V.intl.string(tv.default.XWkJoi)),
        (0, i.jsxs)("div", {
            ref: p,
            className: tC.SW,
            role: "dialog",
            "aria-label": V.intl.string(V.t.z2jK6X),
            children: [
                (0, i.jsxs)("div", {
                    className: tC.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tC.$,
                            children: [
                                (0, i.jsx)(eh.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: V.intl.string(V.t.z2jK6X),
                                }),
                                null != v && (0, i.jsx)(e0.e, { className: tC.P, shortcut: v }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tC.$s,
                            children: [
                                (0, i.jsx)(e1.m, {
                                    text: V.intl.string(V.t["3D5yo/"]),
                                    children: (0, i.jsx)(e2.K, {
                                        onClick: () => n(),
                                        icon: e3.SettingsIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": V.intl.string(V.t["3D5yo/"]),
                                    }),
                                }),
                                (0, i.jsx)(e1.m, {
                                    text: V.intl.string(tv.default["55C2MH"]),
                                    children: (0, i.jsx)(e2.K, {
                                        onClick: () => t(),
                                        icon: eB.x,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": V.intl.string(tv.default["55C2MH"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: tC.ov,
                    children: [
                        C.map((e, t) =>
                            (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        t > 0 && (0, i.jsx)("span", { className: tC.LO, children: "\u2022" }),
                                        (0, i.jsx)(em.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            tag: "span",
                                            className: tC.c5,
                                            children: e,
                                        }),
                                    ],
                                },
                                e,
                            ),
                        ),
                        u &&
                            (0, i.jsx)(em.E, {
                                variant: "text-xs/semibold",
                                color: h ? "text-strong" : "text-feedback-critical",
                                tag: "span",
                                className: tC.wS,
                                children: h ? V.intl.string(tv.default.lTwKmt) : V.intl.string(tv.default.GNDqtf),
                            }),
                    ],
                }),
                (0, i.jsx)(e5.c, {}),
                A.length > 0
                    ? (0, i.jsxs)(e7.Ch, {
                          className: tC.Vg,
                          fade: !0,
                          disableFocusRingScope: !0,
                          children: [
                              A.map((e) => (0, i.jsx)(tg, { clip: e, isNew: d.includes(e.id), onClose: a }, e.id)),
                              x &&
                                  (0, i.jsx)("div", {
                                      className: tC.qr,
                                      children: (0, i.jsx)(e4.$, {
                                          onClick: () => t(),
                                          text: V.intl.string(tv.default["55C2MH"]),
                                          variant: "secondary",
                                          size: "sm",
                                      }),
                                  }),
                          ],
                      })
                    : (0, i.jsx)(tT, { keybindString: v }),
            ],
        })
    );
}
function tT(e) {
    let { keybindString: t } = e,
        n = (0, tn.Et)();
    return (0, i.jsxs)("div", {
        className: tC.p$,
        children: [
            (0, i.jsx)(em.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: tC.qO,
                children: V.intl.string(tv.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(em.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: tC.CZ,
                      children: V.intl.format(tv.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, i.jsx)(
                                  em.E,
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
function t_(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        a = (0, e$.sw)(),
        s = !(0, c.bG)([eX.Ay], () => eX.Ay.getSettings().showPovClipsInGallery),
        r = (0, c.bG)([eX.Ay], () => {
            let e = eX.Ay.getNewClipIds();
            return s
                ? e.filter((e) => {
                      let t = eX.Ay.getClipById(e);
                      return null != t && !(0, eJ.kD)(t);
                  }).length
                : e.length;
        }, [s]),
        o = l.useCallback(
            (e) => {
                t(), (0, eQ.p)({ initialEditingClipId: e });
            },
            [t],
        ),
        d = l.useCallback(() => {
            t(), (0, ex.openUserSettings)(eA.X.CLIPS_PANEL);
        }, [t]);
    return a
        ? (0, i.jsx)(eq, {
              action: "PRESS_CLIPS",
              icon: eB.x,
              label: V.intl.string(V.t.z2jK6X),
              trailing: r > 0 ? (0, i.jsx)(eL.hV, { count: r }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, i.jsx)(tE, { ...e, onOpenGallery: o, onOpenSettings: d, onClose: t }),
          })
        : null;
}
var tI = n(480335),
    tj = n(577390),
    tN = n(372320),
    tS = n(31956),
    ty = n(744808),
    tb = n(645507),
    tM = n(131607),
    tR = n(970931),
    tO = n(315710),
    tw = n(832248),
    tP = n(462887),
    tk = n(736653),
    tL = n(439174),
    tD = n(158045),
    tU = n(878784),
    tG = n(202541);
function tF() {
    let e = (0, tU.Xb)(),
        t = (0, tD.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tG.sp.length - 1; t >= 0; t--) {
        let i = tG.VD[tG.sp[t]],
            l = new Date(e);
        if ((l.setMonth(e.getMonth() + i.tenureReqNumMonths), l.setHours(l.getHours() + 30), n > l.getTime()))
            if (n - l.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let tV = {
        [tG.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tG.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tG.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tG.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tG.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tG.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tG.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tG.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tH = {
        [tG.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [tG.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [tG.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [tG.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [tG.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [tG.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [tG.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [tG.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var tB = n(570484);
let tW = l.lazy(() => Promise.all([n.e("969274"), n.e("924832")]).then(n.bind(n, 748579)));
function tZ() {
    let e = (0, c.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        t = (0, tw.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tF(),
                t = (0, tP.M)((0, tk.Ay)());
            if (null == e) return null;
            let n = tV[e],
                i = tH[e],
                l = {
                    currentBadge: (0, tL.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                a = tG.sp.indexOf(e);
            if (a > 0) {
                let e = tG.sp[a - 1],
                    n = tV[e];
                (l.prevBadge = (0, tL.e0)(e)), (l.prevBadgeTextGradient = t ? n?.dark : n?.light);
            }
            return l;
        })(),
        [a, s] = l.useState(null);
    return (null != n && null == a && s(n), e || !t || null == a) ? null : (0, i.jsx)(tz, { levelUpData: a });
}
function tz(e) {
    let { levelUpData: t } = e,
        n = l.useRef(null),
        a = l.useCallback(() => {
            tw.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, i.jsx)(tO.Ok, {
        containerRef: n,
        children: (0, i.jsxs)("div", {
            className: tB.i,
            children: [
                (0, i.jsx)("div", {
                    className: tB.b,
                    children: (0, i.jsx)(e1.m, {
                        text: V.intl.string(V.t.cpT0Cq),
                        children: (0, i.jsx)(e2.K, {
                            icon: ep.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: a,
                            "aria-label": V.intl.string(V.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, i.jsx)(l.Suspense, { fallback: null, children: (0, i.jsx)(tW, { levelUpData: t }) }),
            ],
        }),
    });
}
var tK = n(206835),
    tq = n(183555),
    tY = n(465318),
    t$ = n(999291),
    tX = n(975732),
    tJ = n(718019),
    tQ = n(413492),
    t0 = n(915614),
    t1 = n(744753),
    t2 = n(559506),
    t3 = n(646986),
    t5 = n(563608),
    t7 = n(946356),
    t4 = n(465829),
    t8 = n(624479),
    t6 = n(206845),
    t9 = n(957565),
    ne = n(427262),
    nt = n(62119);
function nn(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: l } = (0, tq.NJ)();
    return t9.p5
        ? (0, i.jsx)(t6.A, {
              text: V.intl.string(V.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: ne.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => l({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(f.D, {
                      ...e,
                      className: s()(nt.c, { [nt.R]: n }),
                      "aria-label": V.intl.string(V.t.y5MwJy),
                      children: (0, i.jsx)(t8.CopyIcon, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var ni = n(983495),
    nl = n(442228),
    na = n(885386),
    ns = n(290863),
    nr = n(351906),
    no = n(403362),
    nd = n(562153),
    nc = n(661531),
    nu = n(477782),
    nh = n(628284),
    nm = n(695366),
    np = n(363195),
    ng = n(889227),
    nf = n(287809),
    nA = n(174459),
    nx = n(429707),
    nv = n(274303),
    nC = n(994125),
    nE = n(347853),
    nT = n(573879),
    n_ = n(559117),
    nI = n(661439),
    nj = n(385113),
    nN = n(352003),
    nS = n(429913),
    ny = n(334074),
    nb = n(633075),
    nM = n(667049),
    nR = n(280450),
    nO = n(90165),
    nw = n(518477);
function nP(e) {
    let { targetElementRef: t, onClose: a } = e,
        [s, r] = l.useState(!1),
        o = (0, c.bG)([nR.default], () => nR.default.getId()),
        { eligibleApplications: d, markAsDismissed: h } = (function () {
            let e = (0, c.yK)([nj.A], () => nj.A.getFeaturedApplicationIds());
            (0, nN.A)(e),
                l.useEffect(() => {
                    (0, nI.X)();
                }, []);
            let t = (0, c.bG)([nR.default], () => nR.default.getId()),
                n = (0, nM.A)(t),
                i = l.useMemo(() => n.filter((e) => e instanceof nb.R), [n]),
                a = (0, nS.A)(e),
                s = l.useMemo(() => a.filter(no.Vq), [a]),
                r = (0, c.cf)([nO.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = s.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = nO.A.getLastPlayedDateTime(e));
                    }
                    return t;
                }),
                o = l.useMemo(() => {
                    let e = Date.now();
                    return s.filter((t) => {
                        if (i.some((e) => e.applicationId === t.id)) return !1;
                        let n = r[t.id];
                        return null != n && e - n < 7776e6;
                    });
                }, [s, i, r]),
                { eligibleToShow: d, markAsDismissed: h } = (0, ny.hj)({
                    applications: o,
                    dismissibleContent: u.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: ny.SH,
                });
            return {
                eligibleApplications: l.useMemo(() => o.filter((e) => d.includes(e.id)), [o, d]),
                markAsDismissed: h,
            };
        })();
    return ((0, l.useEffect)(() => {
        0 !== d.length &&
            Promise.all([
                n.e("459257"),
                n.e("535308"),
                n.e("449361"),
                n.e("816027"),
                n.e("562772"),
                n.e("970604"),
                n.e("433400"),
                n.e("953327"),
                n.e("733814"),
                n.e("106980"),
                n.e("367536"),
                n.e("814431"),
                n.e("763214"),
                n.e("291103"),
                n.e("59599"),
                n.e("488602"),
                n.e("426737"),
                n.e("768933"),
                n.e("440636"),
                n.e("649975"),
                n.e("716445"),
                n.e("396635"),
                n.e("128804"),
                n.e("71151"),
                n.e("765073"),
                n.e("924697"),
                n.e("549009"),
                n.e("211004"),
                n.e("269714"),
                n.e("62849"),
                n.e("670058"),
                n.e("527798"),
                n.e("829172"),
                n.e("496404"),
                n.e("704451"),
                n.e("32776"),
                n.e("290608"),
                n.e("759086"),
                n.e("918221"),
                n.e("148758"),
                n.e("294387"),
                n.e("656123"),
                n.e("414571"),
                n.e("1955"),
                n.e("341161"),
                n.e("401696"),
                n.e("542516"),
                n.e("661630"),
                n.e("349687"),
                n.e("227853"),
                n.e("286615"),
                n.e("311541"),
                n.e("472847"),
                n.e("870088"),
                n.e("287353"),
                n.e("586662"),
                n.e("758053"),
                n.e("247471"),
                n.e("889002"),
                n.e("709976"),
                n.e("807432"),
                n.e("630954"),
                n.e("750955"),
                n.e("28945"),
                n.e("767311"),
                n.e("261204"),
                n.e("379134"),
                n.e("279774"),
                n.e("175997"),
                n.e("52978"),
                n.e("118686"),
                n.e("410470"),
                n.e("295570"),
                n.e("245726"),
                n.e("711562"),
                n.e("906470"),
                n.e("661157"),
                n.e("609110"),
                n.e("157064"),
                n.e("156957"),
                n.e("918786"),
                n.e("701335"),
                n.e("257935"),
                n.e("724086"),
                n.e("877223"),
                n.e("448738"),
                n.e("423549"),
                n.e("258407"),
                n.e("894292"),
                n.e("153302"),
                n.e("836576"),
                n.e("253453"),
                n.e("82937"),
                n.e("531547"),
                n.e("450926"),
                n.e("923981"),
                n.e("750370"),
                n.e("972281"),
                n.e("641278"),
                n.e("761973"),
                n.e("636909"),
                n.e("466592"),
                n.e("742752"),
                n.e("282050"),
                n.e("436101"),
                n.e("976888"),
                n.e("387970"),
                n.e("847445"),
                n.e("919659"),
                n.e("698136"),
                n.e("718368"),
                n.e("983513"),
                n.e("76928"),
                n.e("355502"),
                n.e("528311"),
                n.e("38012"),
                n.e("10181"),
                n.e("19430"),
                n.e("491760"),
                n.e("102886"),
                n.e("727551"),
                n.e("180644"),
                n.e("762332"),
                n.e("208607"),
                n.e("127962"),
                n.e("968201"),
                n.e("863232"),
                n.e("364827"),
                n.e("907167"),
                n.e("784569"),
                n.e("861060"),
                n.e("910471"),
                n.e("752457"),
                n.e("960235"),
                n.e("77333"),
                n.e("718573"),
                n.e("882722"),
                n.e("950106"),
                n.e("797595"),
                n.e("147662"),
                n.e("344057"),
                n.e("413736"),
                n.e("128504"),
                n.e("331988"),
                n.e("262156"),
                n.e("544571"),
                n.e("234303"),
                n.e("40291"),
                n.e("402368"),
                n.e("733115"),
                n.e("397270"),
                n.e("373122"),
                n.e("396656"),
                n.e("293159"),
                n.e("755936"),
                n.e("489088"),
                n.e("730760"),
                n.e("994723"),
                n.e("330316"),
                n.e("362931"),
                n.e("745959"),
                n.e("858529"),
                n.e("207264"),
                n.e("481987"),
                n.e("958038"),
                n.e("171202"),
                n.e("875201"),
                n.e("576909"),
                n.e("406174"),
                n.e("993103"),
                n.e("834552"),
                n.e("407170"),
                n.e("307575"),
                n.e("708757"),
                n.e("572963"),
                n.e("554241"),
                n.e("724303"),
                n.e("468403"),
                n.e("521930"),
                n.e("559460"),
                n.e("585968"),
                n.e("875842"),
                n.e("88599"),
                n.e("229787"),
                n.e("171273"),
                n.e("709640"),
                n.e("952548"),
                n.e("795596"),
                n.e("553984"),
                n.e("943780"),
                n.e("451224"),
                n.e("729963"),
                n.e("392075"),
                n.e("423532"),
                n.e("790417"),
                n.e("776273"),
                n.e("367022"),
                n.e("699292"),
                n.e("50097"),
                n.e("333184"),
                n.e("95340"),
                n.e("252229"),
                n.e("36877"),
                n.e("203930"),
                n.e("903663"),
                n.e("489523"),
                n.e("946430"),
                n.e("963584"),
                n.e("829260"),
                n.e("582486"),
                n.e("504098"),
                n.e("755"),
                n.e("421778"),
                n.e("280098"),
                n.e("741786"),
                n.e("704374"),
                n.e("553683"),
                n.e("723934"),
                n.e("979483"),
                n.e("571294"),
                n.e("437065"),
                n.e("186546"),
                n.e("782969"),
                n.e("347430"),
                n.e("395118"),
                n.e("375767"),
                n.e("443256"),
                n.e("981004"),
                n.e("641923"),
                n.e("182816"),
                n.e("819119"),
                n.e("373566"),
                n.e("884601"),
                n.e("441940"),
                n.e("286470"),
                n.e("653308"),
                n.e("754876"),
                n.e("414501"),
                n.e("227880"),
                n.e("608032"),
                n.e("477970"),
                n.e("623241"),
                n.e("671367"),
                n.e("375072"),
                n.e("569443"),
                n.e("49282"),
                n.e("235683"),
                n.e("702091"),
            ]).then(n.bind(n, 577593));
    }, [d.length]),
    0 === d.length)
        ? null
        : (0, i.jsx)(F.A, {
              targetElementRef: t,
              position: "right",
              gradientColor: "blue",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/06b7b29c0f2eac5ce71823e813f9989b2a53aba0998090a4fa1d0ab6241127a9.svg",
              },
              title: V.intl.string(V.t.HMWL9c),
              body: V.intl.string(V.t["9hfy3A"]),
              onRequestClose: () =>
                  h(
                      d.map((e) => e.id),
                      Z.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: V.intl.string(V.t.VSLDly),
                      loading: s,
                      onClick: function () {
                          r(!0),
                              (0, tX.openUserProfileModal)({ userId: o, tabSection: nw.RP.WIDGETS })
                                  .then(() => {
                                      let e = d.map((e) => e.id);
                                      (0, v.openModalLazy)(
                                          async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("19430"),
                                                  n.e("491760"),
                                                  n.e("450427"),
                                                  n.e("504098"),
                                                  n.e("723934"),
                                                  n.e("182816"),
                                                  n.e("426623"),
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
                                          h(
                                              d.map((e) => e.id),
                                              Z.i.TAKE_ACTION,
                                          ),
                                          a();
                                  })
                                  .finally(() => r(!1));
                      },
                  },
              ],
          });
}
var nk = n(461213),
    nL = n(818348),
    nD = n(709516);
function nU() {
    let e = (0, c.bG)([nk.A], () => nk.A.getStatus()),
        t = (0, ne.MU)(e) ?? "",
        n = e === nL.cl.INVISIBLE || e === nL.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: nD.k,
        children: [
            (0, i.jsxs)(A.A, { tag: "div", children: [V.intl.string(V.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(e1.m, {
                    text: V.intl.string(V.t.L99HQm),
                    children: (0, i.jsx)(nm.E, {
                        size: "xs",
                        color: nc.A.colors.STATUS_WARNING,
                        "aria-label": V.intl.string(V.t.L99HQm),
                    }),
                }),
        ],
    });
}
var nG = n(379848),
    nF = n(321191);
let nV = (0, n(945810).mj)({
    name: "2025-12-social-layer-storefront-wishlist-user-account-popout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var nH = n(501838),
    nB = n(760716),
    nW = n(915089),
    nZ = n(644391);
function nz(e) {
    let {
            markAsDismissed: t,
            heading: n,
            subheading: a,
            children: r,
            height: o,
            className: d,
            contentClassName: c,
        } = e,
        u = (0, nW.GV)(),
        h = l.useRef(null),
        m = (0, eE.z)({
            from: { transform: "translate3d(-110%, 0, 0)", height: o },
            to: { transform: "translate3d(0, 0, 0)", height: o },
            config: { mass: 1, stiffness: 100, damping: 15 },
            onRest: () => {
                null != h.current && h.current.focus();
            },
        });
    return (0, i.jsx)(S.animated.div, {
        className: s()(nZ.kL, d),
        style: m,
        children: (0, i.jsxs)("aside", {
            "aria-labelledby": u,
            className: nZ.Qs,
            children: [
                (0, i.jsxs)("div", {
                    className: nZ.U1,
                    children: [
                        (0, i.jsx)(f.D, {
                            innerRef: h,
                            "aria-label": V.intl.string(V.t.WAI6xu),
                            className: nZ.b,
                            onClick: () => {
                                t(Z.i.USER_DISMISS);
                            },
                            children: (0, i.jsx)(ep.P, { color: "currentColor" }),
                        }),
                        (0, i.jsx)(eh.D, { id: u, variant: "heading-lg/semibold", children: n }),
                    ],
                }),
                null != a && (0, i.jsx)(em.E, { variant: "text-md/normal", color: "text-subtle", children: a }),
                (0, i.jsx)(eP.Ip, {
                    className: nZ.XG,
                    fade: !0,
                    children: (0, i.jsx)("div", { className: s()(nZ.gT, c), children: r }),
                }),
            ],
        }),
    });
}
var nK = n(889586),
    nq = n(973912),
    nY = n(871123),
    n$ = n(44724),
    nX = n(699088);
function nJ() {
    (0, n$.default)({ guildId: (0, nY.zf)() });
}
function nQ(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: l } = e;
    return null == t ? null : (0, i.jsx)(n0, { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: l });
}
function n0(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: l } = e,
        { analyticsLocations: a } = (0, w.Ay)([O.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]),
        { items: s } = (0, nK.L)({ userId: t, numWishlistItemsToRecommend: 9 });
    return 0 === s.length
        ? null
        : (0, i.jsxs)(nz, {
              heading: V.intl.string(V.t["vy/61K"]),
              subheading: V.intl.string(V.t.tEee9t),
              markAsDismissed: l,
              className: nX.Zj,
              contentClassName: nX.hQ,
              height: 560,
              children: [
                  (0, i.jsx)(nq.A, {
                      items: s,
                      analyticsLocations: a,
                      handleOpenUserProfileModal: n,
                      className: nX.KN,
                  }),
                  (0, i.jsx)("div", {
                      className: nX.UD,
                      children: (0, i.jsx)(e4.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text: V.intl.string(V.t.rg9FQp),
                          onClick: nJ,
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
                    return nV.useConfig({ location: t }).enabled;
                })({ location: t }),
                i = (0, c.bG)([nf.default], () => nf.default.getCurrentUser()),
                a = (0, c.bG)([nF.A], () => (null != i ? nF.A.getFirstWishlistId(i.id) : null)),
                s = (0, nB.i)((e) => e.recommendationApplicationIds),
                o = (0, nH.rY)(),
                d = (0, nH.qx)();
            return l.useMemo(
                () => (null != s || (null == a && n) ? (0, r.uniq)([...(s ?? []), ...d, ...o]).sort() : []),
                [n, a, d, o, s],
            );
        })({ location: "AccountProfilePopoutUpsell" }),
        o = l.useMemo(() => {
            let e = [];
            return s.length > 0 && e.push(u.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e;
        }, [s]);
    return (0, i.jsx)(nG.Ay, {
        contentTypes: o,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: l, markAsDismissed: s } = e;
            return null == a
                ? null
                : l === u.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                  ? (0, i.jsx)(nQ, { profileUserId: t?.userId, handleOpenUserProfileModal: n, markAsDismissed: s })
                  : null;
        },
    });
}
var n2 = n(146901),
    n3 = n(827827);
let n5 = [
        { duration: 15 * e6.A.Millis.MINUTE, label: () => V.intl.string(V.t["8ot6gv"]) },
        { duration: e6.A.Millis.HOUR, label: () => V.intl.string(V.t.UMWBZr) },
        { duration: 8 * e6.A.Millis.HOUR, label: () => V.intl.string(V.t.EpAXPC) },
        { duration: e6.A.Millis.DAY, label: () => V.intl.string(V.t["755t4q"]) },
        { duration: 3 * e6.A.Millis.DAY, label: () => V.intl.string(V.t["f3/1ch"]) },
        { duration: void 0, label: () => V.intl.string(V.t["46dqJY"]) },
    ],
    n7 = "forever";
function n4(e) {
    let { status: t, currentStatus: n, description: l } = e,
        a = t !== tA.clD.ONLINE,
        s = (0, i.jsx)(i.Fragment, {
            children: n5.map((e) => {
                let { duration: l, label: a } = e;
                return (0, i.jsx)(
                    nu.Dr,
                    {
                        id: `${t}-${l}`,
                        label: a(),
                        action: () => (0, n3.A)({ nextStatus: t, prevStatus: n, durationMillis: l }),
                        dontCloseOnAction: !0,
                    },
                    l ?? n7,
                );
            }),
        });
    return (0, i.jsx)(nu.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: a,
        label: (0, ne.MU)(t),
        subtext: l,
        iconLeft: () => (0, i.jsx)(eD.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, n3.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: a ? s : void 0,
    });
}
function n8(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, n2._)(e);
    return "today" === t
        ? V.intl.formatToPlainString(V.t.ZxxHIO, { timeString: i })
        : V.intl.formatToPlainString(V.t["9OFjSe"], { dateString: n, timeString: i });
}
var n6 = n(996988),
    n9 = n(985253),
    ie = n(47453);
function it(e) {
    let { currentUser: t, onClose: n, setPopoutRef: a, highlightBadge: r, openedAt: o, className: d } = e,
        h = __OVERLAY__,
        g = (0, t$.Ay)(t.id, void 0),
        { analyticsLocations: f } = (0, w.Ay)(O.A.USER_PROFILE_ACCOUNT_POPOUT),
        x = (0, tq.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 }),
        { ref: C, height: E } = (0, eH.Ay)(),
        { isHoveringOrFocusing: T, isHovering: _ } = (0, ts.A)(C);
    l.useEffect(() => {
        a?.(C.current);
    }, [C, a]),
        l.useEffect(
            () => (tw.A.setState({ isOpen: !0 }), () => tw.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1 })),
            [],
        );
    let I = (0, c.bG)([ns.A], () => ns.A.getStatus(t.id)),
        j = n8(na.CY.useSetting()),
        N = (0, c.bG)([nr.A], () => nr.A.hidePersonalInformation),
        S = (0, tR.kB)(),
        y = na.Q_.useSetting(),
        b = (function (e) {
            let t = na.CY.useSetting(),
                n = (0, tR.kB)(),
                l = na.Jr.useSetting();
            function a(i) {
                let l = n8(t);
                if (e === i && null != l) return l;
                switch (i) {
                    case tA.clD.DND:
                        return n ? V.intl.string(V.t.day5A6) : V.intl.string(V.t["tq/fMK"]);
                    case tA.clD.INVISIBLE:
                        return V.intl.string(V.t.zPc6Mc);
                    default:
                        return;
                }
            }
            let s = (0, i.jsx)(i.Fragment, {
                    children: n5.map((t) => {
                        let { duration: n, label: l } = t;
                        return (0, i.jsx)(
                            nu.Dr,
                            {
                                id: `${e}-${n}`,
                                label: l(),
                                action: () => {
                                    (0, tR.ES)(!0, n);
                                },
                                dontCloseOnAction: !0,
                            },
                            n ?? n7,
                        );
                    }),
                }),
                r = n4({ status: tA.clD.ONLINE, currentStatus: e }),
                o = n4({ status: tA.clD.IDLE, currentStatus: e, description: a(tA.clD.IDLE) }),
                d = n4({ status: tA.clD.DND, currentStatus: e, description: a(tA.clD.DND) }),
                c = n4({ status: tA.clD.INVISIBLE, currentStatus: e, description: a(tA.clD.INVISIBLE) });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    r,
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
                                          label: V.intl.string(V.t.gJRnwK),
                                          iconLeft: eU.BellSlashIcon,
                                          leadingAccessory: { type: "icon", icon: eU.BellSlashIcon },
                                          badge: { text: V.intl.string(V.t.ApAu9f) },
                                          subtext:
                                              null != l && "0" !== l
                                                  ? V.intl.format(V.t.BWD8fs, {
                                                        endTime: new Date(Number(l)).toLocaleString(
                                                            V.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : V.intl.string(V.t["Br1q+x"]),
                                          action: () => {
                                              (0, tR.ES)(!n);
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
        })(I),
        M = (function (e) {
            let t = (0, c.bG)([nf.default], () => nf.default.getCurrentUser()),
                n = (0, c.bG)([nr.A], () => nr.A.hidePersonalInformation),
                l = (0, c.bG)([np.A], () => (0, tP.M)(np.A.theme)),
                { multiAccountUsers: a } = (0, nC.K)(),
                s = a.map((a) => {
                    let s = new ng.A(a),
                        r = s.id === t?.id,
                        o = a.tokenStatus === nv.U.INVALID,
                        d = n ? null : `#${s.discriminator}`;
                    return (0, i.jsx)(
                        nu.Dr,
                        {
                            id: s.id,
                            focusedClassName: n_.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: n_.ci,
                                    children: [
                                        (0, i.jsx)(m.eu, {
                                            src: s.getAvatarURL(void 0, 40),
                                            size: p._3.SIZE_24,
                                            "aria-label": a.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: n_.DD,
                                            children: [
                                                (0, i.jsx)(em.E, {
                                                    className: n_.gE,
                                                    variant: "text-sm/normal",
                                                    children: ne.Ay.getUserTag(s, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !s.hasUniqueUsername() &&
                                                    (0, i.jsx)(em.E, {
                                                        className: n_.df,
                                                        variant: "text-sm/normal",
                                                        children: d,
                                                    }),
                                            ],
                                        }),
                                        r &&
                                            (0, i.jsx)(nh.y, {
                                                size: "sm",
                                                color: t
                                                    ? nc.A.unsafe_rawColors.WHITE.css
                                                    : nc.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? nc.A.unsafe_rawColors.BRAND_500.css
                                                        : nc.A.unsafe_rawColors.WHITE.css,
                                                className: n_.s0,
                                            }),
                                        o &&
                                            (0, i.jsx)(nm.E, {
                                                color: nc.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? nc.A.unsafe_rawColors.BRAND_500.css
                                                        : nc.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: n_.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, nE.A)();
                                else {
                                    var n;
                                    (n = s.id) !== t?.id &&
                                        (nA.default.track(tA.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tA.JJy.USER_PROFILE },
                                        }),
                                        nx.Mx(n, void 0, nT.WX.MULTI_ACCOUNT_MENU));
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
                                label: V.intl.string(V.t.WbFpq4),
                                action: () => {
                                    e?.(), (0, nE.A)();
                                },
                            }),
                        ],
                    }),
                ),
                s
            );
        })(n),
        R = (0, tK.A)({ analyticsLocations: f }),
        P = (0, tD.TW)(t),
        k = l.useRef(null),
        L = l.useRef(null),
        D = (0, tN.A)(g?.profileFrame?.skuId, "UserProfileAccountPopout"),
        U = (0, tj.A)(g?.profileFrame?.skuId);
    (0, tS.A)({ skuId: g?.profileFrame?.skuId, openedAt: o, context: x, analyticsLocations: f });
    let G = l.useRef((0, tw.A)((e) => e.shouldRenderTenureLevelUp)),
        F = l.useMemo(() => (0, tb.A)(), []),
        [H, B] = l.useState(() => tw.A.getState().shouldRenderTenureLevelUp);
    function W(e) {
        n?.(), (0, tX.openUserProfileModal)({ customStatusPrompt: F, sourceAnalyticsLocations: f, ...x, ...e });
    }
    l.useEffect(() => {
        let e = setTimeout(() => {
            B(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let z = g?.widgets != null && g.widgets.length > 0,
        K = l.useCallback(() => {
            n();
        }, [n]),
        q = l.useCallback(() => {
            R(), K();
        }, [R, K]),
        Y = (0, er.ux)("UserProfileAccountPopout"),
        $ = tY.A.useConfig({ location: "UserProfileAccountPopout" }).enabled,
        [X, J] = (0, tM.kn)(
            [
                Y ? u.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE : void 0,
                $ ? u.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK : void 0,
            ].filter(no.Vq),
            void 0,
            !0,
        ),
        Q = l.useId();
    return (0, i.jsx)(w.f5, {
        value: f,
        children: (0, i.jsx)(tq.of, {
            value: x,
            openedAt: o,
            fetchStartedAt: g?.fetchStartedAt,
            fetchEndedAt: g?.fetchEndedAt,
            isLoaded: g?.isLoaded,
            children: (0, i.jsxs)(ew.l, {
                ref: C,
                "aria-labelledby": Q,
                className: s()(ez.jC, d),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(A.A, { children: (0, i.jsx)(eR.H, { id: Q, children: V.intl.string(V.t["5fWB8U"]) }) }),
                    (0, i.jsxs)(eR.F, {
                        children: [
                            (0, i.jsx)(n1, { displayProfile: g, handleOpenUserProfileModal: W, height: E }),
                            (0, i.jsxs)(t7.A, {
                                className: ez.BK,
                                user: t,
                                displayProfile: g,
                                themeType: n6.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: ie.wx,
                                        children: [
                                            (0, i.jsx)(t0.A, { user: t, displayProfile: g, themeType: n6.d.POPOUT }),
                                            (0, i.jsx)(tJ.A, {
                                                user: t,
                                                displayProfile: g,
                                                avatarSize: n9.T[n6.d.POPOUT].avatarSize,
                                                onOpenProfile: h ? void 0 : W,
                                            }),
                                            (0, i.jsx)(ni.A, {
                                                ref: k,
                                                user: t,
                                                themeType: n6.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: F,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(eP.Ip, {
                                        className: ez.rf,
                                        style: { pointerEvents: H ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(t2.A, { userId: t.id }),
                                            (0, i.jsx)(t4.Ay, {
                                                className: ez.eF,
                                                user: t,
                                                displayName: nd.Ay.getName(void 0, null, t),
                                                onClickName: h ? void 0 : W,
                                                displayNameTrailing: (0, i.jsx)(nn, { user: t, isVisible: T }),
                                                pronouns: g?.pronouns,
                                                trailing: (0, i.jsx)(tQ.A, {
                                                    displayProfile: g,
                                                    themeType: n6.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != r ? (e) => e === r : void 0,
                                                    shouldGlowTenureBadge: G.current,
                                                }),
                                            }),
                                            (0, i.jsx)(t1.A, { isPremiumUser: P, onInteraction: n }),
                                            (0, i.jsx)(nl.A, {
                                                userId: t.id,
                                                userBio: g?.bio,
                                                hidePersonalInformation: N,
                                                onClose: n,
                                            }),
                                            z &&
                                                (0, i.jsx)(t5.A, {
                                                    user: t,
                                                    widgets: g?.widgets,
                                                    onOpenUserProfileModal: W,
                                                }),
                                            (0, i.jsx)(t3.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: W,
                                                onClose: n,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: ez.T_,
                                                children: [
                                                    (0, i.jsx)(t7.A.Overlay, {
                                                        className: ez.g0,
                                                        children: (0, i.jsxs)(eY, {
                                                            children: [
                                                                (0, i.jsx)(eq, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: V.intl.string(V.t.s5vZlQ),
                                                                    icon: ek.PencilIcon,
                                                                    trailing:
                                                                        null != X
                                                                            ? (0, i.jsx)(eL.Lp, {
                                                                                  text: V.intl.string(V.t.y2b7CA),
                                                                                  "aria-hidden": !0,
                                                                              })
                                                                            : null,
                                                                    onClick: () => {
                                                                        X ===
                                                                            u.M
                                                                                .DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE &&
                                                                            J(Z.i.TAKE_ACTION),
                                                                            q();
                                                                    },
                                                                    ref: L,
                                                                }),
                                                                (0, i.jsx)(eq, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(nU, {}),
                                                                    sublabel: null != j && j,
                                                                    icon: () =>
                                                                        (0, i.jsx)(eD.nW, { status: I, size: 12 }),
                                                                    trailing:
                                                                        (S || I === tA.clD.DND) &&
                                                                        (0, i.jsx)(eU.BellSlashIcon, { size: "xxs" }),
                                                                    renderSubmenu: eM.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(eK, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: ez.hQ,
                                                                                  "aria-label": V.intl.string(
                                                                                      V.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: b,
                                                                              });
                                                                          },
                                                                    onClick: eM.Fr
                                                                        ? () => {
                                                                              n(),
                                                                                  (0, v.openModalLazy)(
                                                                                      () =>
                                                                                          new Promise((e) =>
                                                                                              e((e) => {
                                                                                                  let {
                                                                                                      onClose: t,
                                                                                                      ...n
                                                                                                  } = e;
                                                                                                  return (0, i.jsx)(
                                                                                                      eO.d,
                                                                                                      {
                                                                                                          onClose: t,
                                                                                                          ...n,
                                                                                                          size: "sm",
                                                                                                          "aria-label":
                                                                                                              V.intl.string(
                                                                                                                  V.t[
                                                                                                                      "3Uj+2p"
                                                                                                                  ],
                                                                                                              ),
                                                                                                          children: (0,
                                                                                                          i.jsx)(eG.W, {
                                                                                                              "data-menu-migrated":
                                                                                                                  !0,
                                                                                                              navId: "set-status-submenu-mobile-web",
                                                                                                              variant:
                                                                                                                  "fixed",
                                                                                                              "aria-label":
                                                                                                                  V.intl.string(
                                                                                                                      V
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
                                                                                                                  b,
                                                                                                          }),
                                                                                                      },
                                                                                                  );
                                                                                              }),
                                                                                          ),
                                                                                  );
                                                                          }
                                                                        : void 0,
                                                                }),
                                                                (0, i.jsx)(t_, { onClose: n, popoutContainerRef: C }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(t7.A.Overlay, {
                                                        className: ez.g0,
                                                        children: (0, i.jsxs)(eY, {
                                                            children: [
                                                                (0, i.jsx)(eq, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eF.r,
                                                                    label: V.intl.string(V.t.oMNyYN),
                                                                    onClick: () => {
                                                                        n(), (0, nE.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(eK, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": V.intl.string(V.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: M,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    t9.p5 &&
                                                                    y &&
                                                                    (0, i.jsx)(eq, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eV.L,
                                                                        label: V.intl.string(V.t["/AXYnE"]),
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
                                    g?.profileEffect != null &&
                                        !G.current &&
                                        (0, i.jsx)(tI.A, { skuId: g.profileEffect.skuId, isHovering: _ }),
                                    null != D && (0, i.jsx)(ty.A, { frame: D, fadeIn: U }),
                                ],
                            }),
                            (0, i.jsx)(nP, { targetElementRef: L, onClose: n }),
                            (0, i.jsx)(tZ, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var ii = n(201805),
    il = n(655116),
    ia = n(106531),
    is = n(454719),
    ir = n(342296),
    io = n(852712),
    id = n(389960),
    ic = n(173660),
    iu = n(453028),
    ih = n(763827),
    im = n(499156),
    ip = n(731854);
let ig = 2.5 * e6.A.Millis.SECOND,
    iA = +e6.A.Millis.HOUR;
var ix = n(459838),
    iv = n(485296);
let iC = 3 * e6.A.Millis.SECOND,
    iE = +e6.A.Millis.DAY;
var iT = n(616356),
    i_ = n(734057),
    iI = n(629016),
    ij = n(186111),
    iN = n(967198),
    iS = n(486020),
    iy = n(625494),
    ib = n(536194),
    iM = n(19575),
    iR = n(994314),
    iO = n(485599),
    iw = n(338854);
function iP(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: l, position: a, shouldShow: s = !0, children: r } = e,
        o = (0, e$.sw)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r,
            s && o
                ? (0, i.jsx)(iw.H, {
                      targetElementRef: t,
                      title: V.intl.string(tv.default.Qn21R6),
                      body: V.intl.string(tv.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: a,
                      caretConfig: { align: "center" },
                      action: {
                          text: V.intl.string(V.t.RzWDqY),
                          onClick: function () {
                              n(Z.i.TAKE_ACTION), l();
                          },
                      },
                      onRequestClose: function () {
                          n(Z.i.USER_DISMISS);
                      },
                  })
                : null,
        ],
    });
}
var ik = n(626584),
    iL = n(757036),
    iD = n(591179),
    iU = n(531685),
    iG = n(259065),
    iF = n(955298);
let iV = new ik.A("DisplayNameStylesFlywheelCoachmark");
function iH(e) {
    let { markAsDismissed: t, targetElementRef: n, children: a } = e,
        { analyticsLocations: s } = (0, w.Ay)(),
        r = (0, l.useRef)(null),
        o = (0, c.bG)([iU.A], () => iU.A.isFocused()),
        d = (0, iL.L)(tG.PremiumTypes.TIER_2),
        u = (0, iD.X)("DisplayNameStylesFlywheelCoachmark"),
        h = (0, l.useCallback)(() => {
            t(Z.i.TAKE_ACTION);
            let e = nf.default.getCurrentUser();
            u && null != e
                ? (0, tX.openUserProfileModal)({
                      userId: e.id,
                      sourceAnalyticsLocations: s,
                      onModalOpen: () => {
                          (0, iG.L)({ analyticsLocations: s, stackingBehavior: "stack" });
                      },
                  })
                : (0, ex.openUserSettings)(eA.X.PROFILE_PANEL, { analyticsLocations: s }, () => {
                      (0, iG.L)({ analyticsLocations: s });
                  });
        }, [t, s, u]),
        m = (0, l.useCallback)(() => {
            t(Z.i.USER_DISMISS);
        }, [t]);
    (0, l.useEffect)(() => {
        o && r.current?.paused ? r.current?.play().catch(iV.error) : o || r.current?.pause();
    }, [o]);
    let p = d ? [V.intl.string(iF.default.TyUdka)] : [V.intl.string(iF.default.dluV0R)];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            a,
            (0, i.jsx)(F.A, {
                targetElementRef: n,
                shouldShow: !0,
                onRequestClose: m,
                align: "right",
                position: "top",
                caretConfig: { align: "center" },
                gradientColor: "nitro-pink",
                graphic: {
                    type: "video",
                    ref: r,
                    src: "https://cdn.discordapp.com/assets/content/c0da8c4f64ef225b01b94a5c05d7fece18b9f36338c1f214ffb7b26299058973.webm",
                    aspectRatio: "21/9",
                    loop: !0,
                },
                size: "lg",
                title: V.intl.string(iF.default.cYwrp8),
                body: p,
                actions: [{ text: V.intl.string(V.t["4P5I8V"]), variant: "primary", onClick: h }],
            }),
        ],
    });
}
var iB = n(45780),
    iW = n(696451),
    iZ = n(71393),
    iz = n(685073),
    iK = n(228366);
let iq = { lastSeenInfos: {} },
    iY = iq;
class i$ extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        iY = e ?? iq;
    }
    getState() {
        return iY;
    }
    getGuildLastSeenInfo(e) {
        return iY.lastSeenInfos[e] ?? null;
    }
}
let iX = new i$(iK.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        iY.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        iY = iq;
    },
});
var iJ = n(514661);
let iQ = new ik.A("GuildTagAvailableCoachmark");
function i0(e) {
    let t = (0, c.bG)([iZ.A], () => iZ.A.getGuild(e.guildId));
    function n(n) {
        t?.profile?.tag != null &&
            iK.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n);
    }
    let { isAdopting: l, onAdoptTag: a, onEditProfile: s } = (0, iJ.A)(t?.id ?? null, () => n(Z.i.TAKE_ACTION));
    if (null == t || !(0, iz.q0)(t))
        return iQ.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: V.intl.string(V.t.jwEaiX), loading: l, onClick: a, variant: "primary" },
        { text: V.intl.string(V.t.s5vZlQ), onClick: s, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(F.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: G.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: V.intl.formatToPlainString(V.t["m/Tc3n"], { guildName: t.name }),
                body: V.intl.string(V.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(Z.i.USER_DISMISS),
            }),
        ],
    });
}
function i1(e) {
    let t = (0, c.bG)([iZ.A], () => iZ.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: l, onAdoptTag: a, onEditProfile: s } = (0, iJ.A)(t?.id ?? null, () => n(Z.i.TAKE_ACTION));
    if (null == t || !(0, iz.q0)(t))
        return iQ.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: V.intl.string(V.t.jwEaiX), loading: l, onClick: a, variant: "primary" },
        { text: V.intl.string(V.t.s5vZlQ), onClick: s, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(F.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: G.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: V.intl.formatToPlainString(V.t.VFqnyU, { guildName: t.name }),
                body: V.intl.string(V.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(Z.i.USER_DISMISS),
            }),
        ],
    });
}
var i2 = n(843010),
    i3 = n(764231),
    i5 = n(425713);
function i7(e) {
    let { groupName: t, targetElementRef: n } = e,
        l = tF(),
        a = (0, c.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        s = (0, tw.A)((e) => e.isOpen),
        r = (0, i2.G)();
    return a || null == l || s || r
        ? null
        : (0, i.jsx)(nG.zJ, {
              contentType: u.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: a } = e;
                  return (0, i.jsx)(i4, {
                      recentlyLeveledTenureBadge: l,
                      markAsDismissed: a,
                      targetElementRef: n,
                      shouldShow: t === u.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function i4(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: a, shouldShow: s } = e,
        r = tG.sp.indexOf(t),
        o = (0, i5.I)(tG.sp[r > 0 ? r - 1 : r]).ambient,
        d = (0, l.useCallback)(() => {
            n(Z.i.TAKE_ACTION),
                tw.A.setState({ shouldRenderTenureLevelUp: !0 }),
                iy._.dispatch(tA.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n]),
        c = (0, l.useCallback)(() => {
            n(Z.i.USER_DISMISS);
        }, [n]),
        u = tG.VD[t],
        h = V.intl.formatToPlainString(V.t.ewkaVR, {
            timeMilestone: (0, i3.T)(u.id, u.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        m = [{ text: V.intl.string(V.t.RzWDqY), variant: "primary", onClick: d }];
    return (0, i.jsx)(F.A, {
        targetElementRef: a,
        onRequestClose: c,
        shouldShow: s,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: V.intl.string(V.t.VoDxsV),
        body: h,
        actions: m,
    });
}
function i8(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, ii.c9)(),
        l = null != e.targetElementRef.current && t && n,
        [a, s] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, iB.G$)(u.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? tA.dJq),
                l = (0, c.bG)([iZ.A, nf.default, iW.Ay], () => {
                    if (null === e) return !1;
                    let t = iZ.A.getGuild(e);
                    if (void 0 === t || !(0, iz.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                    let n = nf.default.getCurrentUser();
                    if (
                        void 0 === n ||
                        (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                    )
                        return !1;
                    let i = iW.Ay.getMember(e, n.id);
                    return null != i && !i.isPending;
                }, [e]);
            return (0, tM.ww)(l && n && !i ? [u.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? tA.eGj);
        })(e.guildId, { shouldShow: l }),
        [r, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                l = i?.identityGuildId ?? null,
                a = (0, c.bG)([iX], () => (null === l ? null : iX.getGuildLastSeenInfo(l))),
                s = (0, c.bG)([iZ.A], () => iZ.A.getGuild(l)?.profile?.tag),
                r = null != s && i?.identityGuildId === l && i?.tag === null,
                o = null != l && a?.tag === s,
                d = null !== l && r && !o;
            return (0, tM.Wl)(d && n ? u.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: l });
    return l
        ? a === u.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(i1, {
                  guildId: e.guildId,
                  onDismiss: s,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : r === u.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(i0, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(i7, { groupName: Z.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(nG.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: Z.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: l } = t;
                                switch (n) {
                                    case u.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK:
                                        return (0, i.jsx)(iH, {
                                            markAsDismissed: l,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case u.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, i.jsx)(iP, {
                                            markAsDismissed: l,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: eQ.p,
                                            children: e.children,
                                        });
                                    case u.M.BADGE_DIRECTORY_NUX_POPOVER:
                                        return (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                e.children,
                                                (0, i.jsx)(z, {
                                                    variantProps: e.badgeDirectoryNuxPopoverVariant,
                                                    markAsDismissed: l,
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
var i6 = n(615675),
    i9 = n(900797),
    le = n(847374),
    lt = n(348858),
    ln = n(617354),
    li = n(829773),
    ll = n(42473),
    la = n(516171),
    ls = n(577755);
function lr(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: a,
            onClick: r,
            iconForeground: o,
            nameplate: d,
            shouldShowOutputDeviceChangedTooltip: c,
            dismissTooltips: u,
        } = e,
        h = t || n,
        {
            Component: m,
            play: p,
            events: { onMouseEnter: f, onMouseLeave: A },
        } = (0, lt.I)(h ? "undeafen" : "deafen"),
        x = n ? i6.T : m,
        { name: v } = (0, eb.x5)(ip.oh.AUDIO_OUTPUT),
        C = (0, ln.A)(t, n, a),
        { analyticsLocations: E } = (0, w.Ay)(O.A.AUDIO_OUTPUT_BUTTON),
        T = l.useRef(null);
    return (
        l.useEffect(() => () => p(), [h, p]),
        (0, i.jsx)(w.f5, {
            value: E,
            children: (0, i.jsx)(g.Y, {
                targetElementRef: T,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        u(),
                        (0, i.jsx)(w.f5, {
                            value: E,
                            children: (0, i.jsx)(li.A, {
                                onInteraction: (0, Q.s)("AudioDeviceMenu", O.A.ACCOUNT),
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
                animation: g.Y.Animation.FADE,
                spacing: 4,
                children: (e, t) => {
                    let { onClick: l } = e,
                        { isShown: u } = t,
                        m = u ? i9.t : le.a;
                    return (0, i.jsxs)("div", {
                        ref: T,
                        className: s()(la.Lh, { [la.v8]: h, [la.q6]: u }),
                        children: [
                            (0, i.jsx)(ll.A, {
                                "aria-checked": h,
                                "aria-label": V.intl.string(V.t.wjcRFX),
                                className: la.eT,
                                disabled: a,
                                icon: (0, i.jsx)(x, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: h ? nc.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: h ? ls.o : void 0,
                                innerClassName: s()({ [ls.T]: n }),
                                onClick: r,
                                onContextMenu: l,
                                onMouseEnter: f,
                                onMouseLeave: A,
                                plated: null != d,
                                redGlow: h,
                                role: "switch",
                                tooltipText: C,
                            }),
                            (0, i.jsx)(ll.A, {
                                className: s()(la.UT, { [la.q6]: u }),
                                disabled: a,
                                icon: (0, i.jsx)(m, {
                                    className: la.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: h ? nc.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: l,
                                onContextMenu: l,
                                plated: null != d,
                                redGlow: h,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? V.intl.formatToPlainString(V.t["f+DDY/"], { outputDeviceName: v })
                                    : void 0,
                                tooltipShouldShow: !u,
                                tooltipText: c
                                    ? V.intl.format(V.t["f+DDY/"], { outputDeviceName: v })
                                    : V.intl.string(V.t.aA4Vce),
                                "aria-label": c
                                    ? V.intl.formatToPlainString(V.t["f+DDY/"], { outputDeviceName: v })
                                    : V.intl.string(V.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var lo = n(666654),
    ld = n(523875),
    lc = n(993719);
let lu = {};
class lh extends c.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return lu[e] ?? !1;
    }
}
let lm = new lh(iK.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        lu[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        lu[t] = !1;
    },
});
var lp = n(362823),
    lg = n(980923),
    lf = n(404009),
    lA = n(222176),
    lx = n(973324);
function lv(e) {
    let t,
        {
            selfMute: n,
            serverMute: a,
            suppress: r,
            awaitingRemote: o,
            iconForeground: d,
            onMouseEnter: u,
            onMouseLeave: h,
            onClick: m,
            nameplate: p,
            shouldShowSpeakingWhileMutedTooltip: f,
            shouldShowSpeakingWhilePTTTooltip: A,
            shouldShowInputDeviceChangedTooltip: x,
            shouldShowPTTJoinTooltip: v,
            dismissTooltips: C,
            speaking: E,
        } = e,
        { showPTTIconIndicator: T } = im.A.useConfig({ location: "MicrophoneButton" }),
        _ = (0, c.bG)([iu.Ay], () => iu.Ay.getMode() === ip.TB.PUSH_TO_TALK),
        I = (0, c.bG)([iu.Ay], () => iu.Ay.getSettings().modeOptions.shortcut),
        j = (0, c.bG)([lm], () => lm.getIsTutorialActive(lp.v.MUTE_TUTORIAL)),
        N = (0, c.bG)([ih.A], () => null != ih.A.getChannelId()),
        { name: S } = (0, eb.x5)(ip.oh.AUDIO_INPUT),
        { enabledInputProfiles: y } = (0, io.d)({ location: "MicrophoneButton" }),
        b = l.useRef(null),
        M = n || r || a,
        R = (0, ld.L)(M ? "unmute" : "mute"),
        { analyticsLocations: P } = (0, w.Ay)(O.A.AUDIO_INPUT_BUTTON),
        { Component: k, events: L, play: D } = R,
        U = a || r ? lo.O : k;
    l.useEffect(() => () => D(), [M, D]);
    let G = (0, lg.A)(n, a, r, o);
    t = f
        ? { tooltipType: "green_void_do_not_use", tooltipText: V.intl.string(V.t["29gnR4"]), tooltipForceOpen: !0 }
        : v || A
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: V.intl.format(V.t.c1qUOQ, { keybind: te.dI(I).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: G };
    let H = T && _ && N,
        B = M ? nc.A.colors.ICON_VOICE_MUTED : "currentColor",
        W = l.useCallback(() => {
            m(), j && lc.N(lp.v.MUTE_TUTORIAL);
        }, [m, j]);
    return (0, i.jsxs)(w.f5, {
        value: P,
        children: [
            (0, i.jsx)(g.Y, {
                targetElementRef: b,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        C(),
                        (0, i.jsx)(w.f5, {
                            value: P,
                            children: (0, i.jsx)(li.A, {
                                onInteraction: (0, Q.s)("AudioDeviceMenu", O.A.ACCOUNT),
                                onClose: t,
                                maybeRenderPTTCheckbox: !0,
                                renderInputProfiles: y.length > 0,
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
                animation: g.Y.Animation.FADE,
                spacing: 4,
                children: (e, n) => {
                    let { onClick: l } = e,
                        { isShown: a } = n,
                        r = a ? i9.t : le.a;
                    return (0, i.jsxs)("div", {
                        ref: b,
                        className: s()(la.Lh, { [la.v8]: M, [la.q6]: a }),
                        children: [
                            (0, i.jsx)(ll.A, {
                                "aria-checked": M,
                                "aria-label": V.intl.string(V.t.w4m945),
                                className: la.eT,
                                disabled: o,
                                icon: (0, i.jsx)(U, { size: "custom", width: 20, height: 20, color: B, className: d }),
                                onClick: W,
                                onContextMenu: l,
                                onMouseEnter: () => {
                                    u(), L.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    h(), L.onMouseLeave();
                                },
                                plated: null != p,
                                redGlow: M,
                                role: "switch",
                                ...t,
                                children: H ? (0, i.jsx)("div", { className: s()(lA.U, { [lA.z]: E }) }) : null,
                            }),
                            (0, i.jsx)(ll.A, {
                                "aria-label": x
                                    ? V.intl.formatToPlainString(V.t["18wnuD"], { inputDeviceName: S })
                                    : V.intl.string(V.t.fRzCbB),
                                className: s()(la.UT, { [la.q6]: a }),
                                disabled: o,
                                icon: (0, i.jsx)(r, {
                                    className: la.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: B,
                                }),
                                onClick: l,
                                onContextMenu: l,
                                onMouseEnter: u,
                                onMouseLeave: h,
                                plated: null != p,
                                redGlow: M,
                                tooltipType: x ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: x,
                                tooltipPositionKey: x
                                    ? V.intl.formatToPlainString(V.t["18wnuD"], { inputDeviceName: S })
                                    : void 0,
                                tooltipShouldShow: !a,
                                tooltipText: x
                                    ? V.intl.format(V.t["18wnuD"], { inputDeviceName: S })
                                    : V.intl.string(V.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(F.A, {
                targetElementRef: b,
                shouldShow: j,
                graphic: { type: "image", src: lx.A },
                onRequestClose: () => {
                    lc.N(lp.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: V.intl.string(lf.default.VG4zAf),
                body: V.intl.string(lf.default["8VIRzR"]),
            }),
        ],
    });
}
var lC = n(935399),
    lE = n(505312),
    lT = n(848847),
    l_ = n(88001),
    lI = n(109447),
    lj = n(438705);
function lN(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: a } = e,
        s = l.useCallback(() => {
            a(), (0, ex.openUserSettings)(eA.X.SUBSCRIPTIONS_PANEL);
        }, [a]);
    return (0, i.jsx)(F.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: lj },
        shouldShow: n,
        title: V.intl.format(lI.default.bx8sR9, { premiumGroupProductName: (0, l_.DP)() }),
        body: V.intl.format(lI.default.Pw4OFZ, { premiumGroupProductName: (0, l_.DP)() }),
        onRequestClose: a,
        actions: [{ text: V.intl.string(lI.default.DD26QR), onClick: s }],
    });
}
var lS = n(873298),
    ly = n(840387);
function lb(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        a = (0, ly.Z)(),
        s = na.KP.useSetting(),
        r = a && s !== lS.KP.FRIENDS_AND_ALL_GUILDS,
        o = (0, l.useCallback)(() => {
            t(Z.i.TAKE_ACTION), (0, ex.openUserSettings)(eA.X.PROFILE_PRIVACY_CATEGORY);
        }, [t]),
        d = (0, l.useCallback)(() => {
            t(Z.i.USER_DISMISS);
        }, [t]),
        c = r
            ? s === lS.KP.FRIENDS_ONLY
                ? V.intl.string(V.t["/hogEy"])
                : V.intl.string(V.t["6hEfm1"])
            : V.intl.string(V.t.bnNxW1);
    return (0, i.jsx)(F.A, {
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
        title: V.intl.string(V.t.Ve4nS1),
        body: c,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: V.intl.string(V.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
function lM(e) {
    let t,
        n,
        {
            webBuildOverride: a,
            onClick: s,
            onContextMenu: r,
            dismissibleContents: o,
            iconForeground: d,
            nameplate: c,
        } = e,
        h = l.useRef(null),
        [m, p] = l.useState(!1);
    (0, lC.Ay)(() => {
        function e() {
            return p(!0);
        }
        return (
            iy._.subscribe(tA.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                iy._.unsubscribe(tA.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let g = l.useCallback(() => {
        p(!1), s();
    }, [s]);
    t = null != a ? V.intl.formatToPlainString(V.t.Gzh6ZP, { webBuildOverride: a.id }) : V.intl.string(V.t.cduTBL);
    let f = e3.SettingsIcon,
        A = (0, lE.w)();
    return (
        (f = null != a ? lT.H : A.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ll.A, {
                    ref: h,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: g,
                    onContextMenu: r,
                    "aria-label": V.intl.string(V.t.cduTBL),
                    icon: (0, i.jsx)(f, { size: "refresh_sm", color: "currentColor", className: d }),
                    ...A.events,
                    plated: null != c,
                }),
                (0, i.jsx)(lN, { targetElementRef: h, shouldShow: m, onDismiss: () => p(!1) }),
                (0, i.jsx)(nG.Ay, {
                    contentTypes: o,
                    groupName: Z.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === u.M.PRIVATE_PROFILE_COACHMARK
                            ? (0, i.jsx)(lb, { markAsDismissed: n, targetElementRef: h })
                            : null;
                    },
                }),
            ],
        })
    );
}
var lR = n(358285);
let lO = iM.Ay.getEnableHardwareAcceleration() ? m.Js : m.eu,
    lw = 2.5 * e6.A.Millis.SECOND,
    lP = 2 * e6.A.Millis.MINUTE,
    lk = 2 * e6.A.Millis.MINUTE,
    lL = 5 * e6.A.Millis.SECOND;
function lD(e) {
    let {
            ref: t,
            speaking: n,
            voiceDb: a = -1 / 0,
            streaming: r,
            currentUser: o,
            status: d,
            handleClick: c,
            handleMouseLeave: u,
            renderNameTag: h,
            nameplate: m,
            avatarDecoration: A,
            "data-jump-section": x,
        } = e,
        v = l.useRef(null),
        C = t ?? v,
        T = (0, iS.F_)({ avatarDecoration: A, size: (0, et.Te)(p._3.SIZE_32) }),
        _ = (0, eo.A)(),
        {
            updateOpenPopoutRef: j,
            highlightBadge: N,
            setHighlightBadge: S,
        } = (function () {
            let e = l.useRef(null),
                t = l.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, i] = l.useState(),
                [a, s] = l.useState(!1);
            return (
                (0, I.A)(() => s(!0), 750),
                l.useEffect(() => {
                    function t(t) {
                        let { highlightBadge: n } = t;
                        null != n && i(n), e.current?.();
                    }
                    return (
                        iy._.subscribe(tA.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            iy._.unsubscribe(tA.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: a ? n : void 0, setHighlightBadge: i }
            );
        })(),
        y = (0, ei.K)(m);
    return null == o
        ? null
        : (0, i.jsx)(E.A, {
              object: tA.ZSU.AVATAR,
              children: (0, i.jsx)(ir.A, {
                  user: o,
                  targetElementRef: C,
                  clickTrap: !0,
                  preload: () =>
                      (0, is.A)(o.id, o.getAvatarURL(void 0, ir.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: l } = e;
                      return (0, i.jsx)(it, {
                          currentUser: o,
                          highlightBadge: N,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: l,
                          className: lR.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: g.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      u(), S(void 0);
                  },
                  children: (e) => {
                      j(e);
                      let { onMouseEnter: t, onMouseDown: l, ...u } = e;
                      return (0, i.jsxs)("div", {
                          ref: C,
                          style: y,
                          onMouseEnter: t,
                          onMouseDown: l,
                          onClick: (t) => {
                              e.onClick?.(t), c?.(t);
                          },
                          className: s()(lR.Q9, { [lR.ZQ]: null != m }),
                          children: [
                              (0, i.jsx)(f.D, {
                                  ...u,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), c?.(t);
                                  },
                                  "aria-label": V.intl.string(V.t["5fWB8U"]),
                                  focusProps: { ringTarget: C },
                                  className: lR.$n,
                                  "data-jump-section": x,
                              }),
                              (0, i.jsx)(lO, {
                                  size: p._3.SIZE_32,
                                  src: o.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: T,
                                  status: r ? tA.clD.STREAMING : d,
                                  isSpeaking: n,
                                  voiceDb: a,
                                  className: lR.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: lR.oM, children: h(_) }),
                          ],
                      });
                  },
              }),
          });
}
class lU extends l.PureComponent {
    speakingWhileMutedTooltipTimeout = new h.Ep();
    speakingWhilePTTTooltipTimeout = new h.Ep();
    speakingWhilePTTInactiveBackoff = new d.A(lk, null, !1);
    lastSpeakingWhileMutedNotificationTime = void 0;
    lastSpeakingWhilePTTNotificationTime = void 0;
    state = {
        hovered: !1,
        shouldShowNametagTooltip: !1,
        shouldShowSpeakingWhileMutedTooltip: !1,
        shouldShowSpeakingWhilePTTTooltip: !1,
        hoveringOnMute: !1,
    };
    containerRef = l.createRef();
    avatarWithPopoutRef = l.createRef();
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, speakingWhilePTTInactive: n, occluded: i } = e,
            { speakingWhileMuted: l, occluded: a, speakingWhilePTTInactive: s } = this.props;
        a !== i && this.handleOccludedChanged(),
            l !== t && this.handleSpeakingWhileMutedChanged(),
            s !== n && this.handleSpeakingWhilePTTChanged();
    }
    componentWillUnmount() {
        this.speakingWhileMutedTooltipTimeout.stop(), this.speakingWhilePTTTooltipTimeout.stop();
    }
    handleToggleSelfMute = () => {
        let { serverMute: e, suppress: t, selfMute: n } = this.props;
        (0, X.A)(e, t, tA.JJy.ACCOUNT_PANEL), (0, J.X)(O.A.ACCOUNT, J.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, $.A)(e, tA.JJy.ACCOUNT_PANEL), (0, J.X)(O.A.ACCOUNT, J.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            ih.A.isConnected() ? (0, ex.openUserSettings)(eA.X.VOICE_AND_VIDEO_PANEL) : (0, ex.openUserSettings)();
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, C.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("618416"),
                    n.e("706073"),
                    n.e("227512"),
                    n.e("923108"),
                    n.e("891473"),
                    n.e("414571"),
                    n.e("1955"),
                    n.e("341161"),
                    n.e("401696"),
                    n.e("542516"),
                    n.e("661630"),
                    n.e("349687"),
                    n.e("128804"),
                    n.e("71151"),
                    n.e("227853"),
                    n.e("286615"),
                    n.e("311541"),
                    n.e("472847"),
                    n.e("870088"),
                    n.e("287353"),
                    n.e("586662"),
                    n.e("758053"),
                    n.e("247471"),
                    n.e("889002"),
                    n.e("709976"),
                    n.e("807432"),
                    n.e("630954"),
                    n.e("750955"),
                    n.e("28945"),
                    n.e("767311"),
                    n.e("261204"),
                    n.e("379134"),
                    n.e("279774"),
                    n.e("175997"),
                    n.e("52978"),
                    n.e("118686"),
                    n.e("410470"),
                    n.e("295570"),
                    n.e("245726"),
                    n.e("711562"),
                    n.e("906470"),
                    n.e("661157"),
                    n.e("609110"),
                    n.e("157064"),
                    n.e("156957"),
                    n.e("918786"),
                    n.e("701335"),
                    n.e("257935"),
                    n.e("724086"),
                    n.e("877223"),
                    n.e("448738"),
                    n.e("423549"),
                    n.e("258407"),
                    n.e("894292"),
                    n.e("153302"),
                    n.e("836576"),
                    n.e("253453"),
                    n.e("82937"),
                    n.e("531547"),
                    n.e("450926"),
                    n.e("923981"),
                    n.e("750370"),
                    n.e("972281"),
                    n.e("641278"),
                    n.e("761973"),
                    n.e("636909"),
                    n.e("466592"),
                    n.e("742752"),
                    n.e("282050"),
                    n.e("436101"),
                    n.e("976888"),
                    n.e("387970"),
                    n.e("847445"),
                    n.e("919659"),
                    n.e("698136"),
                    n.e("718368"),
                    n.e("983513"),
                    n.e("76928"),
                    n.e("355502"),
                    n.e("528311"),
                    n.e("38012"),
                    n.e("411938"),
                    n.e("653383"),
                    n.e("696490"),
                    n.e("31159"),
                    n.e("952068"),
                    n.e("451044"),
                    n.e("772565"),
                    n.e("533781"),
                    n.e("737853"),
                    n.e("461815"),
                    n.e("524434"),
                    n.e("854326"),
                    n.e("984"),
                    n.e("226229"),
                    n.e("981833"),
                    n.e("931937"),
                    n.e("516497"),
                    n.e("24774"),
                    n.e("326794"),
                    n.e("489565"),
                    n.e("684231"),
                    n.e("570690"),
                    n.e("886631"),
                    n.e("74336"),
                    n.e("978898"),
                    n.e("406322"),
                    n.e("942571"),
                    n.e("464759"),
                    n.e("763343"),
                    n.e("376991"),
                    n.e("194704"),
                    n.e("3942"),
                    n.e("403643"),
                    n.e("812793"),
                    n.e("293612"),
                    n.e("703728"),
                    n.e("519435"),
                    n.e("10985"),
                    n.e("171206"),
                    n.e("102075"),
                    n.e("828178"),
                    n.e("45036"),
                    n.e("480889"),
                    n.e("434683"),
                    n.e("920955"),
                    n.e("505928"),
                    n.e("752657"),
                    n.e("747973"),
                    n.e("314001"),
                    n.e("885251"),
                    n.e("914175"),
                    n.e("529366"),
                    n.e("990185"),
                    n.e("444038"),
                    n.e("849162"),
                    n.e("660201"),
                    n.e("180644"),
                    n.e("179301"),
                    n.e("918347"),
                    n.e("588861"),
                    n.e("689521"),
                    n.e("940226"),
                    n.e("942305"),
                    n.e("147637"),
                    n.e("84993"),
                    n.e("343298"),
                    n.e("564664"),
                    n.e("842631"),
                    n.e("852197"),
                    n.e("553627"),
                    n.e("218366"),
                    n.e("464452"),
                    n.e("381673"),
                    n.e("714144"),
                    n.e("816027"),
                    n.e("458855"),
                    n.e("305161"),
                    n.e("845486"),
                    n.e("401425"),
                    n.e("120561"),
                    n.e("880186"),
                    n.e("58353"),
                    n.e("17256"),
                    n.e("40416"),
                    n.e("76283"),
                    n.e("792513"),
                    n.e("292699"),
                    n.e("377016"),
                    n.e("226867"),
                    n.e("754366"),
                    n.e("657682"),
                    n.e("600336"),
                    n.e("535413"),
                    n.e("969003"),
                    n.e("145006"),
                    n.e("799951"),
                    n.e("302458"),
                    n.e("732130"),
                    n.e("102137"),
                    n.e("375971"),
                    n.e("655282"),
                    n.e("792818"),
                    n.e("861161"),
                    n.e("579958"),
                    n.e("27612"),
                    n.e("987313"),
                    n.e("657266"),
                    n.e("622074"),
                    n.e("556315"),
                    n.e("198877"),
                    n.e("531521"),
                    n.e("371874"),
                    n.e("873943"),
                    n.e("152263"),
                    n.e("982186"),
                    n.e("207322"),
                    n.e("622936"),
                    n.e("216947"),
                    n.e("686117"),
                    n.e("326233"),
                    n.e("2059"),
                    n.e("464838"),
                    n.e("772699"),
                    n.e("40074"),
                    n.e("733814"),
                    n.e("202342"),
                    n.e("988435"),
                    n.e("377476"),
                    n.e("766811"),
                    n.e("746309"),
                    n.e("883221"),
                    n.e("384236"),
                    n.e("64640"),
                    n.e("368991"),
                    n.e("223213"),
                    n.e("918221"),
                    n.e("656997"),
                    n.e("828849"),
                    n.e("19430"),
                    n.e("944121"),
                    n.e("524101"),
                    n.e("459397"),
                    n.e("652014"),
                    n.e("643363"),
                    n.e("980902"),
                    n.e("157771"),
                    n.e("669381"),
                    n.e("715958"),
                    n.e("560042"),
                    n.e("824992"),
                    n.e("827649"),
                    n.e("860350"),
                    n.e("769590"),
                    n.e("866539"),
                    n.e("161411"),
                    n.e("966268"),
                    n.e("25839"),
                    n.e("932696"),
                    n.e("683084"),
                    n.e("927808"),
                    n.e("771149"),
                    n.e("925807"),
                    n.e("959922"),
                    n.e("311992"),
                    n.e("876880"),
                    n.e("888213"),
                    n.e("150183"),
                    n.e("394692"),
                    n.e("272788"),
                    n.e("436988"),
                    n.e("3445"),
                    n.e("592378"),
                    n.e("10058"),
                    n.e("802273"),
                    n.e("30482"),
                    n.e("87648"),
                    n.e("48055"),
                    n.e("388474"),
                    n.e("774188"),
                    n.e("280999"),
                    n.e("372480"),
                    n.e("537014"),
                    n.e("628902"),
                    n.e("364685"),
                    n.e("485595"),
                    n.e("163968"),
                    n.e("480979"),
                    n.e("118191"),
                    n.e("885987"),
                    n.e("4461"),
                    n.e("477550"),
                    n.e("71930"),
                    n.e("97191"),
                    n.e("385504"),
                    n.e("310994"),
                    n.e("770720"),
                    n.e("195830"),
                    n.e("338218"),
                    n.e("846582"),
                    n.e("300726"),
                    n.e("53719"),
                    n.e("992535"),
                    n.e("737132"),
                    n.e("207998"),
                    n.e("442781"),
                    n.e("803511"),
                    n.e("955410"),
                    n.e("868052"),
                    n.e("106980"),
                    n.e("886935"),
                    n.e("257073"),
                    n.e("65764"),
                    n.e("29489"),
                    n.e("269714"),
                    n.e("445380"),
                    n.e("926018"),
                    n.e("120239"),
                    n.e("213217"),
                    n.e("951540"),
                    n.e("684986"),
                    n.e("527302"),
                    n.e("423538"),
                    n.e("700572"),
                    n.e("14775"),
                    n.e("446761"),
                    n.e("915213"),
                    n.e("530166"),
                    n.e("594045"),
                    n.e("762332"),
                    n.e("208607"),
                    n.e("127962"),
                    n.e("968201"),
                    n.e("503376"),
                    n.e("56490"),
                    n.e("494822"),
                    n.e("926132"),
                    n.e("863232"),
                    n.e("364827"),
                    n.e("907167"),
                    n.e("784569"),
                    n.e("861060"),
                    n.e("910471"),
                    n.e("752457"),
                    n.e("960235"),
                    n.e("77333"),
                    n.e("718573"),
                    n.e("882722"),
                    n.e("950106"),
                    n.e("797595"),
                    n.e("147662"),
                    n.e("344057"),
                    n.e("413736"),
                    n.e("128504"),
                    n.e("331988"),
                    n.e("262156"),
                    n.e("544571"),
                    n.e("234303"),
                    n.e("40291"),
                    n.e("402368"),
                    n.e("733115"),
                    n.e("397270"),
                    n.e("373122"),
                    n.e("396656"),
                    n.e("293159"),
                    n.e("755936"),
                    n.e("489088"),
                    n.e("730760"),
                    n.e("994723"),
                    n.e("330316"),
                    n.e("362931"),
                    n.e("745959"),
                    n.e("858529"),
                    n.e("207264"),
                    n.e("481987"),
                    n.e("958038"),
                    n.e("171202"),
                    n.e("875201"),
                    n.e("576909"),
                    n.e("406174"),
                    n.e("993103"),
                    n.e("481647"),
                    n.e("428367"),
                    n.e("834552"),
                    n.e("776602"),
                    n.e("140402"),
                    n.e("407170"),
                    n.e("811310"),
                    n.e("391763"),
                    n.e("21921"),
                    n.e("307575"),
                    n.e("572963"),
                    n.e("752511"),
                    n.e("554241"),
                    n.e("724303"),
                    n.e("942724"),
                    n.e("393766"),
                    n.e("913823"),
                    n.e("571210"),
                    n.e("468403"),
                    n.e("521930"),
                    n.e("559460"),
                    n.e("331549"),
                    n.e("139970"),
                    n.e("676418"),
                    n.e("940258"),
                    n.e("292583"),
                    n.e("343437"),
                    n.e("875842"),
                    n.e("166495"),
                    n.e("385653"),
                    n.e("401518"),
                    n.e("198329"),
                    n.e("9205"),
                    n.e("308555"),
                    n.e("88342"),
                    n.e("323354"),
                    n.e("930233"),
                    n.e("586127"),
                    n.e("146070"),
                    n.e("88599"),
                    n.e("836863"),
                    n.e("221200"),
                    n.e("472789"),
                    n.e("854622"),
                    n.e("976894"),
                    n.e("25949"),
                    n.e("344502"),
                    n.e("617249"),
                    n.e("171273"),
                    n.e("311802"),
                    n.e("179049"),
                    n.e("698965"),
                    n.e("709640"),
                    n.e("362422"),
                    n.e("590365"),
                    n.e("989088"),
                    n.e("952548"),
                    n.e("817989"),
                    n.e("934771"),
                    n.e("37977"),
                    n.e("691671"),
                    n.e("49653"),
                    n.e("147626"),
                    n.e("795596"),
                    n.e("382644"),
                    n.e("203589"),
                    n.e("613867"),
                    n.e("553984"),
                    n.e("943780"),
                    n.e("720590"),
                    n.e("31267"),
                    n.e("886414"),
                    n.e("480830"),
                    n.e("451224"),
                    n.e("179745"),
                    n.e("280854"),
                    n.e("335395"),
                    n.e("174630"),
                    n.e("692215"),
                    n.e("945413"),
                    n.e("235313"),
                    n.e("146844"),
                    n.e("539075"),
                    n.e("163235"),
                    n.e("486672"),
                    n.e("75029"),
                    n.e("448948"),
                    n.e("963244"),
                    n.e("632756"),
                    n.e("564850"),
                    n.e("729963"),
                    n.e("170104"),
                    n.e("868214"),
                    n.e("902564"),
                    n.e("371477"),
                    n.e("67878"),
                    n.e("758946"),
                    n.e("214285"),
                    n.e("248330"),
                    n.e("91450"),
                    n.e("795752"),
                    n.e("803332"),
                    n.e("392075"),
                    n.e("408362"),
                    n.e("741678"),
                    n.e("423532"),
                    n.e("772401"),
                    n.e("852617"),
                    n.e("102698"),
                    n.e("204744"),
                    n.e("36227"),
                    n.e("737021"),
                    n.e("632364"),
                    n.e("818465"),
                    n.e("790417"),
                    n.e("971430"),
                    n.e("976516"),
                    n.e("400501"),
                    n.e("886243"),
                    n.e("985794"),
                    n.e("767837"),
                    n.e("473384"),
                    n.e("282783"),
                    n.e("432209"),
                    n.e("305557"),
                    n.e("368062"),
                    n.e("367022"),
                    n.e("793438"),
                    n.e("709371"),
                    n.e("699292"),
                    n.e("50097"),
                    n.e("845437"),
                    n.e("333184"),
                    n.e("535321"),
                    n.e("844780"),
                    n.e("939171"),
                    n.e("987478"),
                    n.e("436564"),
                    n.e("692513"),
                    n.e("603998"),
                    n.e("550033"),
                    n.e("95340"),
                    n.e("883952"),
                    n.e("252229"),
                    n.e("229666"),
                    n.e("589916"),
                    n.e("460773"),
                    n.e("208018"),
                    n.e("968763"),
                    n.e("159957"),
                    n.e("458273"),
                    n.e("820930"),
                    n.e("838056"),
                    n.e("26001"),
                    n.e("414591"),
                    n.e("652111"),
                    n.e("120379"),
                    n.e("36877"),
                    n.e("993199"),
                    n.e("203930"),
                    n.e("708536"),
                    n.e("903663"),
                    n.e("457458"),
                    n.e("508829"),
                    n.e("819193"),
                    n.e("201243"),
                    n.e("215920"),
                    n.e("896804"),
                    n.e("275133"),
                    n.e("480945"),
                    n.e("897073"),
                    n.e("228850"),
                    n.e("295998"),
                    n.e("342234"),
                    n.e("489523"),
                    n.e("726294"),
                    n.e("574678"),
                    n.e("469155"),
                    n.e("81189"),
                    n.e("858164"),
                    n.e("98972"),
                    n.e("496268"),
                    n.e("200203"),
                    n.e("904774"),
                    n.e("249629"),
                    n.e("78601"),
                    n.e("780407"),
                    n.e("127659"),
                    n.e("946430"),
                    n.e("734546"),
                    n.e("30939"),
                    n.e("341701"),
                    n.e("837490"),
                    n.e("781949"),
                    n.e("66580"),
                    n.e("321455"),
                    n.e("840985"),
                    n.e("468083"),
                    n.e("963584"),
                    n.e("548730"),
                    n.e("871467"),
                    n.e("107671"),
                    n.e("829260"),
                    n.e("132737"),
                    n.e("51892"),
                    n.e("841838"),
                    n.e("818563"),
                    n.e("283230"),
                    n.e("431649"),
                    n.e("139103"),
                    n.e("504098"),
                    n.e("755"),
                    n.e("760989"),
                    n.e("225612"),
                    n.e("303710"),
                    n.e("860003"),
                    n.e("949013"),
                    n.e("276814"),
                    n.e("137937"),
                    n.e("421778"),
                    n.e("33448"),
                    n.e("146149"),
                    n.e("396325"),
                    n.e("645830"),
                    n.e("808979"),
                    n.e("733771"),
                    n.e("482178"),
                    n.e("238260"),
                    n.e("946039"),
                    n.e("995602"),
                    n.e("811817"),
                    n.e("660748"),
                    n.e("512162"),
                    n.e("866008"),
                    n.e("544901"),
                    n.e("901098"),
                    n.e("929569"),
                    n.e("896480"),
                    n.e("973611"),
                    n.e("479006"),
                    n.e("138733"),
                    n.e("983947"),
                    n.e("944727"),
                    n.e("705871"),
                    n.e("527462"),
                    n.e("501888"),
                    n.e("186546"),
                    n.e("322455"),
                    n.e("960816"),
                    n.e("168031"),
                    n.e("347430"),
                    n.e("597162"),
                    n.e("271203"),
                    n.e("384820"),
                    n.e("966598"),
                    n.e("506627"),
                    n.e("443256"),
                    n.e("360536"),
                    n.e("228011"),
                    n.e("373566"),
                    n.e("407408"),
                    n.e("846327"),
                    n.e("815057"),
                    n.e("702846"),
                    n.e("991531"),
                    n.e("175284"),
                    n.e("462318"),
                    n.e("595344"),
                    n.e("313052"),
                    n.e("864926"),
                    n.e("450541"),
                    n.e("647999"),
                    n.e("337886"),
                    n.e("46416"),
                    n.e("15622"),
                    n.e("61750"),
                    n.e("195782"),
                    n.e("483518"),
                    n.e("531997"),
                    n.e("986629"),
                    n.e("798384"),
                    n.e("113582"),
                    n.e("49111"),
                    n.e("124564"),
                    n.e("666601"),
                    n.e("754876"),
                    n.e("639721"),
                    n.e("419631"),
                    n.e("82384"),
                    n.e("876892"),
                    n.e("816799"),
                    n.e("852694"),
                    n.e("158965"),
                    n.e("632482"),
                    n.e("162883"),
                    n.e("540976"),
                    n.e("85216"),
                    n.e("783774"),
                    n.e("483102"),
                    n.e("580890"),
                    n.e("902552"),
                    n.e("689588"),
                    n.e("524084"),
                    n.e("317723"),
                    n.e("444790"),
                    n.e("87641"),
                    n.e("44264"),
                    n.e("874913"),
                    n.e("435476"),
                    n.e("759579"),
                    n.e("214451"),
                    n.e("407755"),
                    n.e("993720"),
                    n.e("654658"),
                    n.e("620280"),
                    n.e("233049"),
                    n.e("443184"),
                    n.e("821403"),
                    n.e("569443"),
                    n.e("439518"),
                    n.e("543456"),
                    n.e("44491"),
                ]).then(n.bind(n, 907206));
                return (t) =>
                    (0, i.jsx)(e, { ...t, onClose: C.Z_, onInteraction: (0, Q.s)("UserSettingsMenu", O.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, Q.s)("AudioDeviceMenu", O.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, C.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("360536"), n.e("678827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, io.d)({ location: "Account" });
                    return (0, i.jsx)(w.f5, {
                        value: t,
                        children: (0, i.jsx)(e, {
                            onClose: C.Z_,
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
            (0, C.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("360536"), n.e("678827")]).then(n.bind(n, 385318));
                return () =>
                    (0, i.jsx)(w.f5, {
                        value: t,
                        children: (0, i.jsx)(e, {
                            onClose: C.Z_,
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
                occluded: l,
                shouldShowPTTJoinTooltip: a,
                deviceChangedTooltipType: s,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            o =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > lP;
        i
            ? r ||
              !e ||
              t ||
              n ||
              l ||
              !o ||
              null != s ||
              a ||
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                  (this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(lw, () =>
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
                occluded: l,
                shouldShowPTTJoinTooltip: a,
                deviceChangedTooltipType: s,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            o =
                void 0 === this.lastSpeakingWhilePTTNotificationTime ||
                performance.now() - this.lastSpeakingWhilePTTNotificationTime >
                    this.speakingWhilePTTInactiveBackoff.current;
        i
            ? r ||
              e ||
              t ||
              n ||
              l ||
              !o ||
              null != s ||
              a ||
              this.setState({ shouldShowSpeakingWhilePTTTooltip: !0 }, () => {
                  (this.lastSpeakingWhilePTTNotificationTime = performance.now()),
                      this.speakingWhilePTTInactiveBackoff.fail(),
                      this.speakingWhilePTTTooltipTimeout.start(lw, () =>
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
                currentUser: l,
                status: a,
                userTag: s,
                voiceChannel: r,
            } = this.props;
        if (null == l) return null;
        if ((0, j.A)({ activities: t, status: a, applicationStream: n, voiceChannel: r }))
            return (0, i.jsxs)(R.A, {
                hoverText: s,
                forceHover: e,
                children: [
                    (0, i.jsx)(A.A, { children: ne.Ay.humanizeStatus(a) }),
                    (0, i.jsx)(N.A, {
                        user: l,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: r,
                        textClassName: lR.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let o = t?.find((e) => {
            let { type: t } = e;
            return t === tA.$pd.CUSTOM_STATUS;
        });
        return null != o
            ? (0, i.jsxs)(R.A, {
                  hoverText: s,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(A.A, { children: ne.Ay.humanizeStatus(a) }),
                      (0, i.jsx)(es.A, { activity: o, emojiClassName: lR.Zg, className: lR.WO }),
                  ],
              })
            : null != a && a !== tA.clD.UNKNOWN && l.hasUniqueUsername()
              ? (0, i.jsx)(R.A, {
                    hoverText: s,
                    forceHover: e,
                    children: (0, i.jsx)(M, { text: ne.Ay.humanizeStatus(a) }),
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
                          className: lR.eW,
                          children: (0, i.jsx)(iO.A, {
                              className: s()({ [lR.e8]: null != e }),
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
                          className: lR.XP,
                          children: (0, i.jsx)(iR.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let { badgeDirectoryNuxPopoverVariant: t, currentUser: n, dismissibleContents: l } = this.props;
        return null == n
            ? null
            : (0, i.jsx)(i8, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: n,
                  targetElementRef: this.avatarWithPopoutRef,
                  badgeDirectoryNuxPopoverVariant: t,
                  additionalDCs: l.avatar,
                  children: (0, i.jsx)(lD, {
                      ...this.props,
                      ref: this.avatarWithPopoutRef,
                      handleMouseLeave: this.handleMouseLeave,
                      renderNameTag: this.renderNameTag,
                      "data-jump-section": e["data-jump-section"],
                  }),
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: l, isListenAlongVisible: a } = this.props,
            r = this.state.hovered;
        return null == e
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(x.sk, {
                          children: (e) =>
                              (0, i.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: s()(lR.kL, { [lR.UG]: null != n, [lR.bc]: !l, [lR.G5]: a }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(ea.A, { nameplate: t, hovered: r, placement: el.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(lG, {
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
                      (0, i.jsx)(ey, {}),
                  ],
              });
    }
}
function lG(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: l,
            serverMute: a,
            serverDeaf: s,
            suppress: r,
            shouldShowSpeakingWhileMutedTooltip: o,
            shouldShowSpeakingWhilePTTTooltip: d,
            webBuildOverride: c,
            handleMouseEnterMute: u,
            handleMouseLeaveMute: h,
            handleToggleSelfDeaf: m,
            handleToggleSelfMute: p,
            handleInputAudioContextMenu: g,
            handleOutputAudioContextMenu: f,
            handleOpenAccountSettings: A,
            handleOpenSettingsContextMenu: x,
            dismissibleContents: v,
            nameplate: C,
            accountContainerRef: E,
            deviceChangedTooltipType: T,
            shouldShowPTTJoinTooltip: _ = !1,
            dismissTooltips: I,
            speaking: j,
        } = e,
        N = (0, ei.K)(C);
    return (0, i.jsxs)("div", {
        className: lR.Uo,
        style: N,
        children: [
            (0, i.jsx)(lv, {
                accountContainerRef: E,
                selfMute: n,
                serverMute: a,
                suppress: r,
                awaitingRemote: l,
                onMouseEnter: u,
                onMouseLeave: h,
                onClick: p,
                onContextMenu: g,
                iconForeground: null != C ? lR.t4 : void 0,
                nameplate: C,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowInputDeviceChangedTooltip: !o && "input" === T,
                shouldShowSpeakingWhilePTTTooltip: d,
                shouldShowPTTJoinTooltip: _,
                dismissTooltips: I,
                speaking: j,
            }),
            (0, i.jsx)(lr, {
                selfDeaf: t,
                serverDeaf: s,
                onClick: m,
                onContextMenu: f,
                awaitingRemote: l,
                iconForeground: null != C ? lR.t4 : void 0,
                nameplate: C,
                shouldShowOutputDeviceChangedTooltip: "output" === T,
                dismissTooltips: I,
            }),
            (0, i.jsx)(lM, {
                webBuildOverride: c,
                onClick: A,
                onContextMenu: x,
                dismissibleContents: v.settings,
                iconForeground: null != C ? lR.t4 : void 0,
                nameplate: C,
            }),
        ],
    });
}
function lF(e) {
    let t = (0, c.bG)([ih.A], () => null != ih.A.getChannelId()),
        n = (0, eb.Py)(e),
        i = l.useRef(new h.Ep()),
        [a, s] = l.useState(!1);
    l.useEffect(() => {
        t &&
            n &&
            (s(!0),
            i.current.start(lL, () => {
                s(!1);
            }));
    }, [t, n]);
    let r = l.useCallback(() => {
        s(!1), i.current.stop();
    }, []);
    return (
        (0, _.l0)(() => {
            i.current.stop();
        }),
        { shouldShowTooltip: a, dismissTooltip: r }
    );
}
function lV() {
    let e = (0, c.bG)([nf.default], () => nf.default.getCurrentUser()),
        t = (0, c.bG)([nR.default], () => nR.default.getId()),
        {
            activities: n,
            streaming: a,
            status: s,
        } = (0, c.cf)([nk.A], () => {
            let e = nk.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === tA.$pd.STREAMING;
                    }),
                status: nk.A.getStatus(),
            };
        }),
        r = (0, c.bG)([iT.A], () => iT.A.getAnyStreamForUser(t)),
        d = (0, T.A)({ userId: t }),
        m = (0, c.bG)([iv.A], () => iv.A.getVoiceVolume(t)),
        p = ne.Ay.useUserTag(e, { decoration: "never" }),
        g = (0, c.bG)([ih.A, i_.A], () => {
            let e = ih.A.getChannelId();
            return null != e ? i_.A.getChannel(e) : null;
        }),
        { mute: f, selfMute: A, suppress: x } = (0, ic.A)(g),
        { selfDeaf: C, deaf: E } = (0, id.A)(g),
        I = (0, c.bG)([K.A], () => ((0, q.kK)() ? K.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        j = (0, c.bG)([iu.Ay], () => iu.Ay.getSpeakingWhileMuted()),
        N = (0, c.bG)([Y.A], () => Y.A.isFullscreenInContext()),
        S = (0, c.bG)([ij.A], () => ij.A.hasLayers()),
        y = (0, v.useModalsStore)(v.hasAnyModalOpenSelector) || S || ib.P.isDisallowPopupsSet() || N,
        b = (0, c.bG)([eu.default], () => null != eu.default.getAwaitingRemoteSessionInfo()),
        M = (0, c.bG)([iN.A], () => iN.A.getGuildId()),
        R = e?.avatarDecoration,
        D = (0, ee.A)(R),
        G = ne.Ay.useName(e) ?? "",
        { analyticsLocations: F } = (0, w.Ay)(O.A.ACCOUNT),
        V = (0, en.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: H } = (0, ii.c9)(),
        B = (0, c.bG)([il.A, nf.default, iI.A], () => {
            let e,
                t = il.A.getSyncingWith(),
                n = il.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = o()(Array.from(iI.A.getParty(e) ?? []))
                        .map((e) => nf.default.getUser(e))
                        .filter(no.Vq)
                        .value()),
                i.length > 1
            );
        }),
        Z = { avatar: [], settings: [] },
        z = (0, ia.lX)("AccountCoachmark"),
        $ = (0, er.ux)("AccountCoachmark"),
        X = (0, P.VV)({ location: "AccountCoachmark" }),
        J = (function (e) {
            let { currentUserId: t, enabled: n } = e;
            l.useEffect(() => {
                null != t && n && !L.Ay.hasCatalogFor(t) && (0, k.RS)(t);
            }, [t, n]);
            let i = (0, c.bG)([L.Ay], () => null != t && L.Ay.hasCatalogFor(t), [t]),
                a = (0, c.bG)(
                    [L.Ay],
                    () => (null != t ? L.Ay.getBadges(t).filter((e) => W.sC.has(e.badge_id) && e.owned).length : 0),
                    [t],
                ),
                s = (0, c.yK)(
                    [L.Ay],
                    () =>
                        null != t
                            ? (function (e) {
                                  let t = new Map(e.map((e) => [e.badge_id, e])),
                                      n = [];
                                  for (let e of U) {
                                      let i = t.get(e);
                                      if (i?.owned !== !0 || null == i.current_tier) continue;
                                      let l = i.tiers.findIndex((e) => e.key === i.current_tier);
                                      if (-1 === l) continue;
                                      let a = i.tiers[l],
                                          s = a?.complex_icon_static_url ?? a?.simple_icon_url;
                                      null != s && n.push({ iconUrl: s, tierIndex: l });
                                  }
                                  return n
                                      .sort((e, t) => t.tierIndex - e.tierIndex)
                                      .slice(0, 3)
                                      .map((e) => e.iconUrl);
                              })(L.Ay.getBadges(t))
                            : [],
                    [t],
                );
            return n && null != t && i
                ? a > 0
                    ? { variant: "progress", newBadgeCount: a, badgeIconUrls: s }
                    : { variant: "no-progress" }
                : null;
        })({ currentUserId: e?.id, enabled: X });
    !y &&
        ($ && Z.avatar.push(u.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
        null != J && Z.avatar.push(u.M.BADGE_DIRECTORY_NUX_POPOVER),
        z && Z.settings.push(u.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: Q, dismissTooltip: et } = lF(ip.oh.AUDIO_INPUT),
        { shouldShowTooltip: ei, dismissTooltip: el } = lF(ip.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: ea, dismissTooltip: es } = (function () {
            let [e, t] = l.useState(!1),
                n = (0, c.bG)([iu.Ay], () => iu.Ay.getMode() === ip.TB.PUSH_TO_TALK),
                i = (0, c.bG)(
                    [ih.A],
                    () => null != ih.A.getChannelId() && (ih.A.getDuration() ?? Number.MAX_VALUE) < ig,
                ),
                [a, s] = l.useState(!1),
                { showPTTJoinTooltip: r } = im.A.useConfig({ location: "usePTTJoinTooltip" }),
                o = l.useRef(new h.Ep()),
                d = l.useRef(new h.Ep());
            l.useEffect(() => {
                if (i && n && !e) {
                    if ((im.A.getConfig({ location: "usePTTJoinTooltip:couldDisplayTooltip" }), !r)) return;
                    s(!0),
                        t(!0),
                        d.current.start(iA, () => {
                            t(!1);
                        }),
                        o.current.start(ig, () => {
                            s(!1);
                        });
                }
                i || s(!1);
            }, [i, n, r, e]);
            let u = l.useCallback(() => {
                s(!1), o.current.stop();
            }, []);
            return (
                (0, _.l0)(() => {
                    o.current.stop(), d.current.stop();
                }),
                { shouldShowTooltip: a, dismissTooltip: u }
            );
        })(),
        eo = (function () {
            let { showPTTSpeakingIndicator: e } = im.A.useConfig({ location: "useSpeakingWhilePTT" }),
                [t, n] = l.useState(!1),
                i = (0, c.bG)([iu.Ay], () => iu.Ay.getMode() === ip.TB.PUSH_TO_TALK),
                a = (0, c.bG)([ih.A], () => ih.A.getRTCConnectionId()),
                s = (0, c.bG)([iu.Ay], () => {
                    let e = iu.Ay.getModeOptions().updatedAt;
                    return null != e && Date.now() - e < iE;
                }),
                r = l.useRef(new h.Ep());
            return (
                l.useEffect(() => {
                    n(!1);
                }, [a]),
                l.useEffect(() => {
                    let t = 0,
                        l = r.current;
                    function o(e, i) {
                        let a = (i & ip.ME.VOICE) === ip.ME.VOICE,
                            s = iv.A.isCurrentUserPTTActive();
                        a && !s
                            ? ++t >= 6 &&
                              (n(!0),
                              l.start(iC, () => {
                                  n(!1);
                              }))
                            : (t = 0);
                    }
                    return (
                        s && e && i && null != a && iu.Ay.getMediaEngine().on(ix.bg.VoiceActivity, o),
                        () => {
                            iu.Ay.getMediaEngine().removeListener(ix.bg.VoiceActivity, o), l.stop();
                        }
                    );
                }, [e, i, s, a]),
                t
            );
        })(),
        ed = l.useMemo(() => (Q ? "input" : ei ? "output" : void 0), [Q, ei]),
        ec = l.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        et();
                        break;
                    case "output":
                        el();
                }
            },
            [et, el],
        );
    return (0, i.jsx)(w.f5, {
        value: F,
        children: (0, i.jsx)(lU, {
            currentUser: e,
            username: G,
            activities: n,
            applicationStream: r,
            voiceChannel: g,
            dismissibleContents: Z,
            badgeDirectoryNuxPopoverVariant: J,
            userTag: p,
            occluded: y,
            selfDeaf: C,
            selfMute: A,
            serverDeaf: E,
            serverMute: f,
            speaking: d,
            voiceDb: m,
            speakingWhileMuted: j,
            speakingWhilePTTInactive: eo,
            status: s,
            streaming: a,
            suppress: x,
            webBuildOverride: I,
            awaitingRemote: b,
            nameplate: V,
            selectedGuildId: M,
            avatarDecoration: D,
            isQuestBarEmpty: H,
            isListenAlongVisible: B,
            deviceChangedTooltipType: ed,
            onDismissDeviceChangedTooltip: () => ec(ed),
            shouldShowPTTJoinTooltip: ea,
            dismissPTTJoinTooltip: es,
        }),
    });
}
