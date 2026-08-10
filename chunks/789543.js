n.d(t, { g: () => lL, A: () => lG }), n(321073);
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
if (21552 == n.j) var v = n(192308);
var C = n(442433),
    E = n(820284),
    T = n(717558),
    _ = n(964486),
    I = n(220839),
    j = n(397244),
    N = n(394871),
    y = n(682577),
    S = n(866323),
    b = n(746306);
function M(e) {
    let { text: t } = e,
        n = (0, S.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, i.jsx)("div", {
        className: b.k,
        children: n((e, t) => (0, i.jsx)(y.animated.div, { className: b.H, style: e, children: t })),
    });
}
var R = n(29160),
    w = n(793574),
    k = n(688810),
    O = n(992526),
    P = n(682618),
    L = n(982240),
    D = n(70283);
let U = [D.$.STREAMING, D.$.GAME_VARIETY, D.$.GAME_TIME, D.$.ACCOUNT_AGE];
var G = n(116833),
    F = n(43105),
    H = n(375708);
function V(e) {
    let t = "progress" === e.variant,
        n = t
            ? {
                  title: H.intl.string(H.t.uwDBSq),
                  body: H.intl.formatToPlainString(H.t.Mk5nzZ, { count: e.newBadgeCount }),
              }
            : { title: H.intl.string(H.t["5GD53o"]), body: H.intl.string(H.t["2Rb7tE"]) };
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
        actions: [{ variant: "primary", text: H.intl.string(H.t.pHo9tZ), onClick: e.onPrimaryAction }],
        onRequestClose: e.onRequestClose,
    });
}
var B = n(470739),
    W = n(92111),
    Z = n(49999);
function z(e) {
    let { variantProps: t, targetElementRef: n, markAsDismissed: l } = e;
    return (0, i.jsx)(V, {
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
    Y = n(313961),
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
    e_ = n(186491);
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
        (0, i.jsx)(y.animated.div, {
            style: { transform: (0, y.to)([h.x, h.y], (e, t) => `translate3d(${e}px, ${t}px, 0)`) },
            className: s()(e_.T, t),
        })
    );
}
var eN = n(364163);
function ey(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: l } = e,
        a = eC.A.useIsEligible(),
        s = (0, eg.HX)(t),
        r = null != n,
        o = null != l ? { color: l } : void 0,
        { analyticsLocations: d } = (0, k.Ay)(w.A.HOLIDAY_COACHMARK);
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
                                          children: H.intl.string(H.t["6CxPoB"]),
                                      }),
                                      (0, i.jsx)(em.E, {
                                          variant: "text-xs/normal",
                                          color: "text-overlay-light",
                                          children: H.intl.format(H.t.IVzJ8G, {
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
function eS() {
    return null == ev.A.coachmarkDismissibleContent
        ? null
        : (0, i.jsx)(ey, {
              dismissibleContent: ev.A.coachmarkDismissibleContent,
              backgroundColor: ev.A.coachmarkBackgroundColor,
              specialTextColor: ev.A.coachmarkSpecialTextColor,
          });
}
var eb = n(74848),
    eM = n(607399),
    eR = n(707554),
    ew = n(224640),
    ek = n(305866),
    eO = n(364522),
    eP = n(22231),
    eL = n(812993),
    eD = n(935154),
    eU = n(780338);
if (21552 != n.j) var v = n(192308);
var eG = n(980707),
    eF = n(26137),
    eH = n(473935),
    eV = n(765671),
    eB = n(176781),
    eW = n(320448),
    eZ = n(993401),
    ez = n(890717);
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
    function y(e) {
        let t;
        return (
            (t = _
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(f.D, { className: ez.ef, onClick: p, children: N() }),
                          (0, i.jsx)(f.D, {
                              className: ez.ap,
                              "aria-label": H.intl.string(H.t.PdRCRg),
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
                  children: y,
              }),
          })
        : (0, i.jsx)("li", { className: ez.j$, children: y() });
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
    e6 = n(821609),
    e4 = n(532624),
    e8 = n(927813),
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
    return (0, i.jsx)(e6.$, {
        onClick: s,
        icon: eP.R,
        variant: n,
        size: "sm",
        text: H.intl.string(H.t.bt75uw),
        fullWidth: !0,
    });
}
var tc = n(82716),
    tu = n(585579),
    th = n(930317),
    tm = n(285072),
    tp = n(13769);
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
            "aria-label": H.intl.string(H.t.bt75uw),
            onClick: c,
            className: s()(tp.Z1, r),
            children: (0, i.jsxs)(th.d, {
                isStatic: !0,
                children: [
                    n && (0, i.jsx)(eL.Lp, { className: tp.Ad, text: H.intl.string(H.t.y2b7CA) }),
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
    tv = n(16590),
    tC = n(301414);
function tE(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: a, setPopoutRef: s } = e;
    (0, tl.A)();
    let r = (0, c.yK)([eX.Ay], () => Object.values(eX.Ay.getClips())),
        o = (0, c.bG)([eX.Ay], () => eX.Ay.getSettings()),
        d = (0, c.bG)([eX.Ay], () => eX.Ay.getNewClipIds()),
        u = (0, tt.aJ)("ClipsPopout"),
        h = (0, c.bG)([eX.Ay], () => eX.Ay.getEnableAutoclipping()),
        m = (0, c.bG)([e4.Ay], () => e4.Ay.getKeybindForAction(tA.hCu.SAVE_CLIP)),
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
            (0, e9.$)(o.clipsLength / e8.A.Millis.SECOND),
            (0, tx.zr)(o.clipsQuality.resolution),
            H.intl.formatToPlainString(H.t.Qb44XH, { fps: o.clipsQuality.frameRate }),
        ];
    return (
        u && C.push(H.intl.string(tv.default.XWkJoi)),
        (0, i.jsxs)("div", {
            ref: p,
            className: tC.SW,
            role: "dialog",
            "aria-label": H.intl.string(H.t.z2jK6X),
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
                                    children: H.intl.string(H.t.z2jK6X),
                                }),
                                null != v && (0, i.jsx)(e0.e, { className: tC.P, shortcut: v }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tC.$s,
                            children: [
                                (0, i.jsx)(e1.m, {
                                    text: H.intl.string(H.t["3D5yo/"]),
                                    children: (0, i.jsx)(e2.K, {
                                        onClick: () => n(),
                                        icon: e3.Z,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": H.intl.string(H.t["3D5yo/"]),
                                    }),
                                }),
                                (0, i.jsx)(e1.m, {
                                    text: H.intl.string(tv.default["55C2MH"]),
                                    children: (0, i.jsx)(e2.K, {
                                        onClick: () => t(),
                                        icon: eB.x,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": H.intl.string(tv.default["55C2MH"]),
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
                                children: h ? H.intl.string(tv.default.lTwKmt) : H.intl.string(tv.default.GNDqtf),
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
                                      children: (0, i.jsx)(e6.$, {
                                          onClick: () => t(),
                                          text: H.intl.string(tv.default["55C2MH"]),
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
                children: H.intl.string(tv.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(em.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: tC.CZ,
                      children: H.intl.format(tv.default.y4zC7j, {
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
              label: H.intl.string(H.t.z2jK6X),
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
    ty = n(31956),
    tS = n(744808),
    tb = n(645507),
    tM = n(131607),
    tR = n(970931),
    tw = n(315710),
    tk = n(832248),
    tO = n(462887),
    tP = n(736653),
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
let tH = {
        [tG.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tG.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tG.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tG.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tG.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tG.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tG.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tG.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tV = {
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
var tB = n(620701);
let tW = l.lazy(() => Promise.all([n.e("3379"), n.e("24832")]).then(n.bind(n, 748579)));
function tZ() {
    let e = (0, c.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        t = (0, tk.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tF(),
                t = (0, tO.M)((0, tP.Ay)());
            if (null == e) return null;
            let n = tH[e],
                i = tV[e],
                l = {
                    currentBadge: (0, tL.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                a = tG.sp.indexOf(e);
            if (a > 0) {
                let e = tG.sp[a - 1],
                    n = tH[e];
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
            tk.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, i.jsx)(tw.Ok, {
        containerRef: n,
        children: (0, i.jsxs)("div", {
            className: tB.i,
            children: [
                (0, i.jsx)("div", {
                    className: tB.b,
                    children: (0, i.jsx)(e1.m, {
                        text: H.intl.string(H.t.cpT0Cq),
                        children: (0, i.jsx)(e2.K, {
                            icon: ep.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: a,
                            "aria-label": H.intl.string(H.t.cpT0Cq),
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
    tY = n(999291),
    t$ = n(975732),
    tX = n(718019),
    tJ = n(413492),
    tQ = n(915614),
    t0 = n(744753),
    t1 = n(559506),
    t2 = n(646986),
    t3 = n(563608),
    t5 = n(946356),
    t7 = n(465829),
    t6 = n(624479),
    t4 = n(206845),
    t8 = n(957565),
    t9 = n(427262),
    ne = n(966184);
function nt(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: l } = (0, tq.NJ)();
    return t8.p5
        ? (0, i.jsx)(t4.A, {
              text: H.intl.string(H.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: t9.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => l({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(f.D, {
                      ...e,
                      className: s()(ne.c, { [ne.R]: n }),
                      "aria-label": H.intl.string(H.t.y5MwJy),
                      children: (0, i.jsx)(t6.T, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var nn = n(983495),
    ni = n(442228),
    nl = n(885386),
    na = n(290863),
    ns = n(351906),
    nr = n(562153),
    no = n(661531),
    nd = n(477782),
    nc = n(628284),
    nu = n(695366),
    nh = n(363195),
    nm = n(889227),
    np = n(287809),
    ng = n(174459),
    nf = n(429707),
    nA = n(274303),
    nx = n(994125),
    nv = n(347853),
    nC = n(573879),
    nE = n(570660),
    nT = n(661439),
    n_ = n(385113),
    nI = n(352003),
    nj = n(429913),
    nN = n(334074),
    ny = n(633075),
    nS = n(667049),
    nb = n(280450),
    nM = n(90165),
    nR = n(403362),
    nw = n(518477);
function nk(e) {
    let { targetElementRef: t, onClose: a } = e,
        [s, r] = l.useState(!1),
        o = (0, c.bG)([nb.default], () => nb.default.getId()),
        { eligibleApplications: d, markAsDismissed: h } = (function () {
            let e = (0, c.yK)([n_.A], () => n_.A.getFeaturedApplicationIds());
            (0, nI.A)(e),
                l.useEffect(() => {
                    (0, nT.X)();
                }, []);
            let t = (0, c.bG)([nb.default], () => nb.default.getId()),
                n = (0, nS.A)(t),
                i = l.useMemo(() => n.filter((e) => e instanceof ny.R), [n]),
                a = (0, nj.A)(e),
                s = l.useMemo(() => a.filter(nR.Vq), [a]),
                r = (0, c.cf)([nM.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = s.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = nM.A.getLastPlayedDateTime(e));
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
                { eligibleToShow: d, markAsDismissed: h } = (0, nN.hj)({
                    applications: o,
                    dismissibleContent: u.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: nN.SH,
                });
            return {
                eligibleApplications: l.useMemo(() => o.filter((e) => d.includes(e.id)), [o, d]),
                markAsDismissed: h,
            };
        })();
    return ((0, l.useEffect)(() => {
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
                n.e("19579"),
                n.e("1787"),
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
                n.e("93637"),
                n.e("45807"),
                n.e("26572"),
                n.e("39737"),
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
                n.e("55112"),
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
                n.e("88070"),
                n.e("53984"),
                n.e("43780"),
                n.e("51224"),
                n.e("29963"),
                n.e("92075"),
                n.e("23532"),
                n.e("63123"),
                n.e("67022"),
                n.e("99292"),
                n.e("50097"),
                n.e("9966"),
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
                n.e("65527"),
                n.e("71294"),
                n.e("96574"),
                n.e("86546"),
                n.e("82969"),
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
                n.e("57402"),
                n.e("36140"),
                n.e("86470"),
                n.e("53308"),
                n.e("14501"),
                n.e("27880"),
                n.e("8032"),
                n.e("77970"),
                n.e("90407"),
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
        : (0, i.jsx)(F.A, {
              targetElementRef: t,
              position: "right",
              gradientColor: "blue",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/ea1ea066f1312b56d74e16232ca7da602ee5fc0206f0ea9ecc130e5094334683.svg",
              },
              title: H.intl.string(H.t.HMWL9c),
              body: H.intl.string(H.t["9hfy3A"]),
              onRequestClose: () =>
                  h(
                      d.map((e) => e.id),
                      Z.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: H.intl.string(H.t.VSLDly),
                      loading: s,
                      onClick: function () {
                          r(!0),
                              (0, t$.openUserProfileModal)({ userId: o, tabSection: nw.RP.WIDGETS })
                                  .then(() => {
                                      let e = d.map((e) => e.id);
                                      (0, v.openModalLazy)(
                                          async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("84126"),
                                                  n.e("33473"),
                                                  n.e("8888"),
                                                  n.e("4098"),
                                                  n.e("65527"),
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
var nO = n(461213),
    nP = n(818348),
    nL = n(373765);
function nD() {
    let e = (0, c.bG)([nO.A], () => nO.A.getStatus()),
        t = (0, t9.MU)(e) ?? "",
        n = e === nP.cl.INVISIBLE || e === nP.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: nL.k,
        children: [
            (0, i.jsxs)(A.A, { tag: "div", children: [H.intl.string(H.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(e1.m, {
                    text: H.intl.string(H.t.L99HQm),
                    children: (0, i.jsx)(nu.E, {
                        size: "xs",
                        color: no.A.colors.STATUS_WARNING,
                        "aria-label": H.intl.string(H.t.L99HQm),
                    }),
                }),
        ],
    });
}
var nU = n(379848),
    nG = n(321191);
let nF = (0, n(945810).mj)({
    name: "2025-12-social-layer-storefront-wishlist-user-account-popout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var nH = n(501838),
    nV = n(760716),
    nB = n(915089),
    nW = n(284600);
function nZ(e) {
    let {
            markAsDismissed: t,
            heading: n,
            subheading: a,
            children: r,
            height: o,
            className: d,
            contentClassName: c,
        } = e,
        u = (0, nB.GV)(),
        h = l.useRef(null),
        m = (0, eE.z)({
            from: { transform: "translate3d(-110%, 0, 0)", height: o },
            to: { transform: "translate3d(0, 0, 0)", height: o },
            config: { mass: 1, stiffness: 100, damping: 15 },
            onRest: () => {
                null != h.current && h.current.focus();
            },
        });
    return (0, i.jsx)(y.animated.div, {
        className: s()(nW.kL, d),
        style: m,
        children: (0, i.jsxs)("aside", {
            "aria-labelledby": u,
            className: nW.Qs,
            children: [
                (0, i.jsxs)("div", {
                    className: nW.U1,
                    children: [
                        (0, i.jsx)(f.D, {
                            innerRef: h,
                            "aria-label": H.intl.string(H.t.WAI6xu),
                            className: nW.b,
                            onClick: () => {
                                t(Z.i.USER_DISMISS);
                            },
                            children: (0, i.jsx)(ep.P, { color: "currentColor" }),
                        }),
                        (0, i.jsx)(eh.D, { id: u, variant: "heading-lg/semibold", children: n }),
                    ],
                }),
                null != a && (0, i.jsx)(em.E, { variant: "text-md/normal", color: "text-subtle", children: a }),
                (0, i.jsx)(eO.Ip, {
                    className: nW.XG,
                    fade: !0,
                    children: (0, i.jsx)("div", { className: s()(nW.gT, c), children: r }),
                }),
            ],
        }),
    });
}
var nz = n(889586),
    nK = n(973912),
    nq = n(871123),
    nY = n(44724),
    n$ = n(522445);
function nX() {
    (0, nY.default)({ guildId: (0, nq.zf)() });
}
function nJ(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: l } = e;
    return null == t ? null : (0, i.jsx)(nQ, { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: l });
}
function nQ(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: l } = e,
        { analyticsLocations: a } = (0, k.Ay)([w.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]),
        { items: s } = (0, nz.L)({ userId: t, numWishlistItemsToRecommend: 9 });
    return 0 === s.length
        ? null
        : (0, i.jsxs)(nZ, {
              heading: H.intl.string(H.t["vy/61K"]),
              subheading: H.intl.string(H.t.tEee9t),
              markAsDismissed: l,
              className: n$.Zj,
              contentClassName: n$.hQ,
              height: 560,
              children: [
                  (0, i.jsx)(nK.A, {
                      items: s,
                      analyticsLocations: a,
                      handleOpenUserProfileModal: n,
                      className: n$.KN,
                  }),
                  (0, i.jsx)("div", {
                      className: n$.UD,
                      children: (0, i.jsx)(e6.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text: H.intl.string(H.t.rg9FQp),
                          onClick: nX,
                      }),
                  }),
              ],
          });
}
function n0(e) {
    let { displayProfile: t, handleOpenUserProfileModal: n, height: a } = e,
        s = (function (e) {
            let { location: t } = e,
                n = (function (e) {
                    let { location: t } = e;
                    return nF.useConfig({ location: t }).enabled;
                })({ location: t }),
                i = (0, c.bG)([np.default], () => np.default.getCurrentUser()),
                a = (0, c.bG)([nG.A], () => (null != i ? nG.A.getFirstWishlistId(i.id) : null)),
                s = (0, nV.i)((e) => e.recommendationApplicationIds),
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
    return (0, i.jsx)(nU.Ay, {
        contentTypes: o,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: l, markAsDismissed: s } = e;
            return null == a
                ? null
                : l === u.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                  ? (0, i.jsx)(nJ, { profileUserId: t?.userId, handleOpenUserProfileModal: n, markAsDismissed: s })
                  : null;
        },
    });
}
var n1 = n(146901),
    n2 = n(827827);
let n3 = [
        { duration: 15 * e8.A.Millis.MINUTE, label: () => H.intl.string(H.t["8ot6gv"]) },
        { duration: e8.A.Millis.HOUR, label: () => H.intl.string(H.t.UMWBZr) },
        { duration: 8 * e8.A.Millis.HOUR, label: () => H.intl.string(H.t.EpAXPC) },
        { duration: e8.A.Millis.DAY, label: () => H.intl.string(H.t["755t4q"]) },
        { duration: 3 * e8.A.Millis.DAY, label: () => H.intl.string(H.t["f3/1ch"]) },
        { duration: void 0, label: () => H.intl.string(H.t["46dqJY"]) },
    ],
    n5 = "forever";
function n7(e) {
    let { status: t, currentStatus: n, description: l } = e,
        a = t !== tA.clD.ONLINE,
        s = (0, i.jsx)(i.Fragment, {
            children: n3.map((e) => {
                let { duration: l, label: a } = e;
                return (0, i.jsx)(
                    nd.Dr,
                    {
                        id: `${t}-${l}`,
                        label: a(),
                        action: () => (0, n2.A)({ nextStatus: t, prevStatus: n, durationMillis: l }),
                        dontCloseOnAction: !0,
                    },
                    l ?? n5,
                );
            }),
        });
    return (0, i.jsx)(nd.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: a,
        label: (0, t9.MU)(t),
        subtext: l,
        iconLeft: () => (0, i.jsx)(eD.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, n2.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: a ? s : void 0,
    });
}
function n6(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, n1._)(e);
    return "today" === t
        ? H.intl.formatToPlainString(H.t.ZxxHIO, { timeString: i })
        : H.intl.formatToPlainString(H.t["9OFjSe"], { dateString: n, timeString: i });
}
var n4 = n(996988),
    n8 = n(83260);
function n9(e) {
    let { currentUser: t, onClose: n, setPopoutRef: a, highlightBadge: r, openedAt: o, className: d } = e,
        h = __OVERLAY__,
        g = (0, tY.Ay)(t.id, void 0),
        { analyticsLocations: f } = (0, k.Ay)(w.A.USER_PROFILE_ACCOUNT_POPOUT),
        x = (0, tq.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 }),
        { ref: C, height: E } = (0, eV.Ay)(),
        { isHoveringOrFocusing: T, isHovering: _ } = (0, ts.A)(C);
    l.useEffect(() => {
        a?.(C.current);
    }, [C, a]),
        l.useEffect(
            () => (tk.A.setState({ isOpen: !0 }), () => tk.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1 })),
            [],
        );
    let I = (0, c.bG)([na.A], () => na.A.getStatus(t.id)),
        j = n6(nl.CY.useSetting()),
        N = (0, c.bG)([ns.A], () => ns.A.hidePersonalInformation),
        y = (0, tR.kB)(),
        S = nl.Q_.useSetting(),
        b = (function (e) {
            let t = nl.CY.useSetting(),
                n = (0, tR.kB)(),
                l = nl.Jr.useSetting();
            function a(i) {
                let l = n6(t);
                if (e === i && null != l) return l;
                switch (i) {
                    case tA.clD.DND:
                        return n ? H.intl.string(H.t.day5A6) : H.intl.string(H.t["tq/fMK"]);
                    case tA.clD.INVISIBLE:
                        return H.intl.string(H.t.zPc6Mc);
                    default:
                        return;
                }
            }
            let s = (0, i.jsx)(i.Fragment, {
                    children: n3.map((t) => {
                        let { duration: n, label: l } = t;
                        return (0, i.jsx)(
                            nd.Dr,
                            {
                                id: `${e}-${n}`,
                                label: l(),
                                action: () => {
                                    (0, tR.ES)(!0, n);
                                },
                                dontCloseOnAction: !0,
                            },
                            n ?? n5,
                        );
                    }),
                }),
                r = n7({ status: tA.clD.ONLINE, currentStatus: e }),
                o = n7({ status: tA.clD.IDLE, currentStatus: e, description: a(tA.clD.IDLE) }),
                d = n7({ status: tA.clD.DND, currentStatus: e, description: a(tA.clD.DND) }),
                c = n7({ status: tA.clD.INVISIBLE, currentStatus: e, description: a(tA.clD.INVISIBLE) });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    r,
                    (0, i.jsx)(nd.bX, {}, "menu-separator-statuses"),
                    o,
                    d,
                    c,
                    n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(nd.bX, {}, "menu-separator-statuses"),
                                  (0, i.jsx)(
                                      nd.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: H.intl.string(H.t.gJRnwK),
                                          iconLeft: eU.a,
                                          leadingAccessory: { type: "icon", icon: eU.a },
                                          badge: { text: H.intl.string(H.t.ApAu9f) },
                                          subtext:
                                              null != l && "0" !== l
                                                  ? H.intl.format(H.t.BWD8fs, {
                                                        endTime: new Date(Number(l)).toLocaleString(
                                                            H.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : H.intl.string(H.t["Br1q+x"]),
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
            let t = (0, c.bG)([np.default], () => np.default.getCurrentUser()),
                n = (0, c.bG)([ns.A], () => ns.A.hidePersonalInformation),
                l = (0, c.bG)([nh.A], () => (0, tO.M)(nh.A.theme)),
                { multiAccountUsers: a } = (0, nx.K)(),
                s = a.map((a) => {
                    let s = new nm.A(a),
                        r = s.id === t?.id,
                        o = a.tokenStatus === nA.U.INVALID,
                        d = n ? null : `#${s.discriminator}`;
                    return (0, i.jsx)(
                        nd.Dr,
                        {
                            id: s.id,
                            focusedClassName: nE.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: nE.ci,
                                    children: [
                                        (0, i.jsx)(m.eu, {
                                            src: s.getAvatarURL(void 0, 40),
                                            size: p._3.SIZE_24,
                                            "aria-label": a.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: nE.DD,
                                            children: [
                                                (0, i.jsx)(em.E, {
                                                    className: nE.gE,
                                                    variant: "text-sm/normal",
                                                    children: t9.Ay.getUserTag(s, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !s.hasUniqueUsername() &&
                                                    (0, i.jsx)(em.E, {
                                                        className: nE.df,
                                                        variant: "text-sm/normal",
                                                        children: d,
                                                    }),
                                            ],
                                        }),
                                        r &&
                                            (0, i.jsx)(nc.y, {
                                                size: "sm",
                                                color: t
                                                    ? no.A.unsafe_rawColors.WHITE.css
                                                    : no.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? no.A.unsafe_rawColors.BRAND_500.css
                                                        : no.A.unsafe_rawColors.WHITE.css,
                                                className: nE.s0,
                                            }),
                                        o &&
                                            (0, i.jsx)(nu.E, {
                                                color: no.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? no.A.unsafe_rawColors.BRAND_500.css
                                                        : no.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: nE.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, nv.A)();
                                else {
                                    var n;
                                    (n = s.id) !== t?.id &&
                                        (ng.default.track(tA.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tA.JJy.USER_PROFILE },
                                        }),
                                        nf.Mx(n, void 0, nC.WX.MULTI_ACCOUNT_MENU));
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
                            (0, i.jsx)(nd.bX, {}),
                            (0, i.jsx)(nd.Dr, {
                                id: "manage-accounts",
                                label: H.intl.string(H.t.WbFpq4),
                                action: () => {
                                    e?.(), (0, nv.A)();
                                },
                            }),
                        ],
                    }),
                ),
                s
            );
        })(n),
        R = (0, tK.A)({ analyticsLocations: f }),
        O = (0, tD.TW)(t),
        P = l.useRef(null),
        L = l.useRef(null),
        D = (0, tN.A)(g?.profileFrame?.skuId, "UserProfileAccountPopout"),
        U = (0, tj.A)(g?.profileFrame?.skuId);
    (0, ty.A)({ skuId: g?.profileFrame?.skuId, openedAt: o, context: x, analyticsLocations: f });
    let G = l.useRef((0, tk.A)((e) => e.shouldRenderTenureLevelUp)),
        F = l.useMemo(() => (0, tb.A)(), []),
        [V, B] = l.useState(() => tk.A.getState().shouldRenderTenureLevelUp);
    function W(e) {
        n?.(), (0, t$.openUserProfileModal)({ customStatusPrompt: F, sourceAnalyticsLocations: f, ...x, ...e });
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
        [$, X] = (0, tM.kn)(Y ? [u.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE] : []),
        J = $ === u.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE,
        Q = l.useId();
    return (0, i.jsx)(k.f5, {
        value: f,
        children: (0, i.jsx)(tq.of, {
            value: x,
            openedAt: o,
            fetchStartedAt: g?.fetchStartedAt,
            fetchEndedAt: g?.fetchEndedAt,
            isLoaded: g?.isLoaded,
            children: (0, i.jsxs)(ek.l, {
                ref: C,
                "aria-labelledby": Q,
                className: s()(ez.jC, d),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(A.A, { children: (0, i.jsx)(eR.H, { id: Q, children: H.intl.string(H.t["5fWB8U"]) }) }),
                    (0, i.jsxs)(eR.F, {
                        children: [
                            (0, i.jsx)(n0, { displayProfile: g, handleOpenUserProfileModal: W, height: E }),
                            (0, i.jsxs)(t5.A, {
                                className: ez.BK,
                                user: t,
                                displayProfile: g,
                                themeType: n4.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: n8.wx,
                                        children: [
                                            (0, i.jsx)(tQ.A, { user: t, displayProfile: g, themeType: n4.d.POPOUT }),
                                            (0, i.jsx)(tX.A, {
                                                user: t,
                                                displayProfile: g,
                                                themeType: n4.d.POPOUT,
                                                onOpenProfile: h ? void 0 : W,
                                            }),
                                            (0, i.jsx)(nn.A, {
                                                ref: P,
                                                user: t,
                                                themeType: n4.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: F,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(eO.Ip, {
                                        className: ez.rf,
                                        style: { pointerEvents: V ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(t1.A, { userId: t.id }),
                                            (0, i.jsx)(t7.Ay, {
                                                className: ez.eF,
                                                user: t,
                                                displayName: nr.Ay.getName(void 0, null, t),
                                                onClickName: h ? void 0 : W,
                                                displayNameTrailing: (0, i.jsx)(nt, { user: t, isVisible: T }),
                                                pronouns: g?.pronouns,
                                                trailing: (0, i.jsx)(tJ.A, {
                                                    displayProfile: g,
                                                    themeType: n4.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != r ? (e) => e === r : void 0,
                                                    shouldGlowTenureBadge: G.current,
                                                }),
                                            }),
                                            (0, i.jsx)(t0.A, { isPremiumUser: O, onInteraction: n }),
                                            (0, i.jsx)(ni.A, {
                                                userId: t.id,
                                                userBio: g?.bio,
                                                hidePersonalInformation: N,
                                                onClose: n,
                                            }),
                                            z &&
                                                (0, i.jsx)(t3.A, {
                                                    user: t,
                                                    widgets: g?.widgets,
                                                    onOpenUserProfileModal: W,
                                                }),
                                            (0, i.jsx)(t2.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: W,
                                                onClose: n,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: ez.T_,
                                                children: [
                                                    (0, i.jsx)(t5.A.Overlay, {
                                                        className: ez.g0,
                                                        children: (0, i.jsxs)(eY, {
                                                            children: [
                                                                (0, i.jsx)(eq, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: H.intl.string(H.t.s5vZlQ),
                                                                    icon: eP.R,
                                                                    trailing:
                                                                        J &&
                                                                        (0, i.jsx)(eL.Lp, {
                                                                            text: H.intl.string(H.t.y2b7CA),
                                                                            "aria-hidden": !0,
                                                                        }),
                                                                    onClick: () => {
                                                                        J && X(Z.i.TAKE_ACTION), q();
                                                                    },
                                                                    ref: L,
                                                                }),
                                                                (0, i.jsx)(eq, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(nD, {}),
                                                                    sublabel: null != j && j,
                                                                    icon: () =>
                                                                        (0, i.jsx)(eD.nW, { status: I, size: 12 }),
                                                                    trailing:
                                                                        (y || I === tA.clD.DND) &&
                                                                        (0, i.jsx)(eU.a, { size: "xxs" }),
                                                                    renderSubmenu: eM.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(eK, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: ez.hQ,
                                                                                  "aria-label": H.intl.string(
                                                                                      H.t.E13trI,
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
                                                                                                      ew.d,
                                                                                                      {
                                                                                                          onClose: t,
                                                                                                          ...n,
                                                                                                          size: "sm",
                                                                                                          "aria-label":
                                                                                                              H.intl.string(
                                                                                                                  H.t[
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
                                                                                                                  H.intl.string(
                                                                                                                      H
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
                                                    (0, i.jsx)(t5.A.Overlay, {
                                                        className: ez.g0,
                                                        children: (0, i.jsxs)(eY, {
                                                            children: [
                                                                (0, i.jsx)(eq, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eF.r,
                                                                    label: H.intl.string(H.t.oMNyYN),
                                                                    onClick: () => {
                                                                        n(), (0, nv.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(eK, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": H.intl.string(H.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: M,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    t8.p5 &&
                                                                    S &&
                                                                    (0, i.jsx)(eq, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eH.L,
                                                                        label: H.intl.string(H.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            (0, t8.C)(t.id), n();
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
                                    null != D && (0, i.jsx)(tS.A, { frame: D, fadeIn: U }),
                                ],
                            }),
                            (0, i.jsx)(nk, { targetElementRef: L, onClose: n }),
                            (0, i.jsx)(tZ, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var ie = n(764336),
    it = n(655116),
    ii = n(106531),
    il = n(454719),
    ia = n(342296),
    is = n(852712),
    ir = n(167579),
    io = n(173660),
    id = n(505643),
    ic = n(763827),
    iu = n(499156),
    ih = n(731854);
let im = 2.5 * e8.A.Millis.SECOND,
    ip = +e8.A.Millis.HOUR;
var ig = n(459838),
    iA = n(485296);
let ix = 3 * e8.A.Millis.SECOND,
    iv = +e8.A.Millis.DAY;
var iC = n(616356),
    iE = n(734057),
    iT = n(629016),
    i_ = n(186111),
    iI = n(967198),
    ij = n(486020),
    iN = n(625494),
    iy = n(536194),
    iS = n(19575),
    ib = n(994314),
    iM = n(485599),
    iR = n(338854);
function iw(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: l, position: a, shouldShow: s = !0, children: r } = e,
        o = (0, e$.sw)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r,
            s && o
                ? (0, i.jsx)(iR.H, {
                      targetElementRef: t,
                      title: H.intl.string(tv.default.Qn21R6),
                      body: H.intl.string(tv.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: a,
                      caretConfig: { align: "center" },
                      action: {
                          text: H.intl.string(H.t.RzWDqY),
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
    iO = n(757036),
    iP = n(591179),
    iL = n(531685),
    iD = n(259065),
    iU = n(864386);
let iG = new ik.A("DisplayNameStylesFlywheelCoachmark");
function iF(e) {
    let { markAsDismissed: t, targetElementRef: n, children: a } = e,
        { analyticsLocations: s } = (0, k.Ay)(),
        r = (0, l.useRef)(null),
        o = (0, c.bG)([iL.A], () => iL.A.isFocused()),
        d = (0, iO.L)(tG.PremiumTypes.TIER_2),
        u = (0, iP.X)("DisplayNameStylesFlywheelCoachmark"),
        h = (0, l.useCallback)(() => {
            t(Z.i.TAKE_ACTION);
            let e = np.default.getCurrentUser();
            u && null != e
                ? (0, t$.openUserProfileModal)({
                      userId: e.id,
                      sourceAnalyticsLocations: s,
                      onModalOpen: () => {
                          (0, iD.L)({ analyticsLocations: s, stackingBehavior: "stack" });
                      },
                  })
                : (0, ex.openUserSettings)(eA.X.PROFILE_PANEL, { analyticsLocations: s }, () => {
                      (0, iD.L)({ analyticsLocations: s });
                  });
        }, [t, s, u]),
        m = (0, l.useCallback)(() => {
            t(Z.i.USER_DISMISS);
        }, [t]);
    (0, l.useEffect)(() => {
        o && r.current?.paused ? r.current?.play().catch(iG.error) : o || r.current?.pause();
    }, [o]);
    let p = d ? [H.intl.string(iU.default.TyUdka)] : [H.intl.string(iU.default.dluV0R)];
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
                badge: { type: "beta", variant: "expressive" },
                title: H.intl.string(iU.default.cYwrp8),
                body: p,
                actions: [{ text: H.intl.string(H.t["4P5I8V"]), variant: "primary", onClick: h }],
            }),
        ],
    });
}
var iH = n(45780),
    iV = n(696451),
    iB = n(71393),
    iW = n(685073),
    iZ = n(228366);
let iz = { lastSeenInfos: {} },
    iK = iz;
class iq extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        iK = e ?? iz;
    }
    getState() {
        return iK;
    }
    getGuildLastSeenInfo(e) {
        return iK.lastSeenInfos[e] ?? null;
    }
}
let iY = new iq(iZ.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        iK.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        iK = iz;
    },
});
var i$ = n(514661);
let iX = new ik.A("GuildTagAvailableCoachmark");
function iJ(e) {
    let t = (0, c.bG)([iB.A], () => iB.A.getGuild(e.guildId));
    function n(n) {
        t?.profile?.tag != null &&
            iZ.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n);
    }
    let { isAdopting: l, onAdoptTag: a, onEditProfile: s } = (0, i$.A)(t?.id ?? null, () => n(Z.i.TAKE_ACTION));
    if (null == t || !(0, iW.q0)(t))
        return iX.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: H.intl.string(H.t.jwEaiX), loading: l, onClick: a, variant: "primary" },
        { text: H.intl.string(H.t.s5vZlQ), onClick: s, variant: "secondary" },
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
                title: H.intl.formatToPlainString(H.t["m/Tc3n"], { guildName: t.name }),
                body: H.intl.string(H.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(Z.i.USER_DISMISS),
            }),
        ],
    });
}
function iQ(e) {
    let t = (0, c.bG)([iB.A], () => iB.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: l, onAdoptTag: a, onEditProfile: s } = (0, i$.A)(t?.id ?? null, () => n(Z.i.TAKE_ACTION));
    if (null == t || !(0, iW.q0)(t))
        return iX.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: H.intl.string(H.t.jwEaiX), loading: l, onClick: a, variant: "primary" },
        { text: H.intl.string(H.t.s5vZlQ), onClick: s, variant: "secondary" },
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
                title: H.intl.formatToPlainString(H.t.VFqnyU, { guildName: t.name }),
                body: H.intl.string(H.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(Z.i.USER_DISMISS),
            }),
        ],
    });
}
var i0 = n(843010),
    i1 = n(764231),
    i2 = n(425713);
function i3(e) {
    let { groupName: t, targetElementRef: n } = e,
        l = tF(),
        a = (0, c.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        s = (0, tk.A)((e) => e.isOpen),
        r = (0, i0.G)();
    return a || null == l || s || r
        ? null
        : (0, i.jsx)(nU.zJ, {
              contentType: u.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: a } = e;
                  return (0, i.jsx)(i5, {
                      recentlyLeveledTenureBadge: l,
                      markAsDismissed: a,
                      targetElementRef: n,
                      shouldShow: t === u.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function i5(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: a, shouldShow: s } = e,
        r = tG.sp.indexOf(t),
        o = (0, i2.I)(tG.sp[r > 0 ? r - 1 : r]).ambient,
        d = (0, l.useCallback)(() => {
            n(Z.i.TAKE_ACTION),
                tk.A.setState({ shouldRenderTenureLevelUp: !0 }),
                iN._.dispatch(tA.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n]),
        c = (0, l.useCallback)(() => {
            n(Z.i.USER_DISMISS);
        }, [n]),
        u = tG.VD[t],
        h = H.intl.formatToPlainString(H.t.ewkaVR, {
            timeMilestone: (0, i1.T)(u.id, u.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        m = [{ text: H.intl.string(H.t.RzWDqY), variant: "primary", onClick: d }];
    return (0, i.jsx)(F.A, {
        targetElementRef: a,
        onRequestClose: c,
        shouldShow: s,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: H.intl.string(H.t.VoDxsV),
        body: h,
        actions: m,
    });
}
function i7(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, ie.c9)(),
        l = null != e.targetElementRef.current && t && n,
        [a, s] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, iH.G$)(u.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? tA.dJq),
                l = (0, c.bG)([iB.A, np.default, iV.Ay], () => {
                    if (null === e) return !1;
                    let t = iB.A.getGuild(e);
                    if (void 0 === t || !(0, iW.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                    let n = np.default.getCurrentUser();
                    if (
                        void 0 === n ||
                        (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                    )
                        return !1;
                    let i = iV.Ay.getMember(e, n.id);
                    return null != i && !i.isPending;
                }, [e]);
            return (0, tM.ww)(l && n && !i ? [u.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? tA.eGj);
        })(e.guildId, { shouldShow: l }),
        [r, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                l = i?.identityGuildId ?? null,
                a = (0, c.bG)([iY], () => (null === l ? null : iY.getGuildLastSeenInfo(l))),
                s = (0, c.bG)([iB.A], () => iB.A.getGuild(l)?.profile?.tag),
                r = null != s && i?.identityGuildId === l && i?.tag === null,
                o = null != l && a?.tag === s,
                d = null !== l && r && !o;
            return (0, tM.Wl)(d && n ? u.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: l });
    return l
        ? a === u.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(iQ, {
                  guildId: e.guildId,
                  onDismiss: s,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : r === u.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(iJ, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(i3, { groupName: Z.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(nU.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: Z.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: l } = t;
                                switch (n) {
                                    case u.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK:
                                        return (0, i.jsx)(iF, {
                                            markAsDismissed: l,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case u.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, i.jsx)(iw, {
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
    i4 = n(900797),
    i8 = n(847374),
    i9 = n(348858),
    le = n(617354),
    lt = n(829773),
    ln = n(42473),
    li = n(495976),
    ll = n(238450);
function la(e) {
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
        } = (0, i9.I)(h ? "undeafen" : "deafen"),
        x = n ? i6.T : m,
        { name: v } = (0, eb.x5)(ih.oh.AUDIO_OUTPUT),
        C = (0, le.A)(t, n, a),
        { analyticsLocations: E } = (0, k.Ay)(w.A.AUDIO_OUTPUT_BUTTON),
        T = l.useRef(null);
    return (
        l.useEffect(() => () => p(), [h, p]),
        (0, i.jsx)(k.f5, {
            value: E,
            children: (0, i.jsx)(g.Y, {
                targetElementRef: T,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        u(),
                        (0, i.jsx)(k.f5, {
                            value: E,
                            children: (0, i.jsx)(lt.A, {
                                onInteraction: (0, Q.s)("AudioDeviceMenu", w.A.ACCOUNT),
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
                        m = u ? i4.t : i8.a;
                    return (0, i.jsxs)("div", {
                        ref: T,
                        className: s()(li.Lh, { [li.v8]: h, [li.q6]: u }),
                        children: [
                            (0, i.jsx)(ln.A, {
                                "aria-checked": h,
                                "aria-label": H.intl.string(H.t.wjcRFX),
                                className: li.eT,
                                disabled: a,
                                icon: (0, i.jsx)(x, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: h ? no.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: h ? ll.o : void 0,
                                innerClassName: s()({ [ll.T]: n }),
                                onClick: r,
                                onContextMenu: l,
                                onMouseEnter: f,
                                onMouseLeave: A,
                                plated: null != d,
                                redGlow: h,
                                role: "switch",
                                tooltipText: C,
                            }),
                            (0, i.jsx)(ln.A, {
                                className: s()(li.UT, { [li.q6]: u }),
                                disabled: a,
                                icon: (0, i.jsx)(m, {
                                    className: li.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: h ? no.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: l,
                                onContextMenu: l,
                                plated: null != d,
                                redGlow: h,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? H.intl.formatToPlainString(H.t["f+DDY/"], { outputDeviceName: v })
                                    : void 0,
                                tooltipShouldShow: !u,
                                tooltipText: c
                                    ? H.intl.format(H.t["f+DDY/"], { outputDeviceName: v })
                                    : H.intl.string(H.t.aA4Vce),
                                "aria-label": c
                                    ? H.intl.formatToPlainString(H.t["f+DDY/"], { outputDeviceName: v })
                                    : H.intl.string(H.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var ls = n(666654),
    lr = n(523875),
    lo = n(993719);
let ld = {};
class lc extends c.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return ld[e] ?? !1;
    }
}
let lu = new lc(iZ.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        ld[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        ld[t] = !1;
    },
});
var lh = n(362823),
    lm = n(980923),
    lp = n(224585),
    lg = n(321429),
    lf = n(973324);
function lA(e) {
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
        { showPTTIconIndicator: T } = iu.A.useConfig({ location: "MicrophoneButton" }),
        _ = (0, c.bG)([id.Ay], () => id.Ay.getMode() === ih.TB.PUSH_TO_TALK),
        I = (0, c.bG)([id.Ay], () => id.Ay.getSettings().modeOptions.shortcut),
        j = (0, c.bG)([lu], () => lu.getIsTutorialActive(lh.v.MUTE_TUTORIAL)),
        N = (0, c.bG)([ic.A], () => null != ic.A.getChannelId()),
        { name: y } = (0, eb.x5)(ih.oh.AUDIO_INPUT),
        { enabledInputProfiles: S } = (0, is.d)({ location: "MicrophoneButton" }),
        b = l.useRef(null),
        M = n || r || a,
        R = (0, lr.L)(M ? "unmute" : "mute"),
        { analyticsLocations: O } = (0, k.Ay)(w.A.AUDIO_INPUT_BUTTON),
        { Component: P, events: L, play: D } = R,
        U = a || r ? ls.O : P;
    l.useEffect(() => () => D(), [M, D]);
    let G = (0, lm.A)(n, a, r, o);
    t = f
        ? { tooltipType: "green_void_do_not_use", tooltipText: H.intl.string(H.t["29gnR4"]), tooltipForceOpen: !0 }
        : v || A
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: H.intl.format(H.t.c1qUOQ, { keybind: te.dI(I).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: G };
    let V = T && _ && N,
        B = M ? no.A.colors.ICON_VOICE_MUTED : "currentColor",
        W = l.useCallback(() => {
            m(), j && lo.N(lh.v.MUTE_TUTORIAL);
        }, [m, j]);
    return (0, i.jsxs)(k.f5, {
        value: O,
        children: [
            (0, i.jsx)(g.Y, {
                targetElementRef: b,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        C(),
                        (0, i.jsx)(k.f5, {
                            value: O,
                            children: (0, i.jsx)(lt.A, {
                                onInteraction: (0, Q.s)("AudioDeviceMenu", w.A.ACCOUNT),
                                onClose: t,
                                maybeRenderPTTCheckbox: !0,
                                renderInputProfiles: S.length > 0,
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
                        r = a ? i4.t : i8.a;
                    return (0, i.jsxs)("div", {
                        ref: b,
                        className: s()(li.Lh, { [li.v8]: M, [li.q6]: a }),
                        children: [
                            (0, i.jsx)(ln.A, {
                                "aria-checked": M,
                                "aria-label": H.intl.string(H.t.w4m945),
                                className: li.eT,
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
                                children: V ? (0, i.jsx)("div", { className: s()(lg.U, { [lg.z]: E }) }) : null,
                            }),
                            (0, i.jsx)(ln.A, {
                                "aria-label": x
                                    ? H.intl.formatToPlainString(H.t["18wnuD"], { inputDeviceName: y })
                                    : H.intl.string(H.t.fRzCbB),
                                className: s()(li.UT, { [li.q6]: a }),
                                disabled: o,
                                icon: (0, i.jsx)(r, {
                                    className: li.$$,
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
                                    ? H.intl.formatToPlainString(H.t["18wnuD"], { inputDeviceName: y })
                                    : void 0,
                                tooltipShouldShow: !a,
                                tooltipText: x
                                    ? H.intl.format(H.t["18wnuD"], { inputDeviceName: y })
                                    : H.intl.string(H.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(F.A, {
                targetElementRef: b,
                shouldShow: j,
                graphic: { type: "image", src: lf.A },
                onRequestClose: () => {
                    lo.N(lh.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: H.intl.string(lp.default.VG4zAf),
                body: H.intl.string(lp.default["8VIRzR"]),
            }),
        ],
    });
}
var lx = n(935399),
    lv = n(505312),
    lC = n(848847),
    lE = n(88001),
    lT = n(466919),
    l_ = n(438705);
function lI(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: a } = e,
        s = l.useCallback(() => {
            a(), (0, ex.openUserSettings)(eA.X.SUBSCRIPTIONS_PANEL);
        }, [a]);
    return (0, i.jsx)(F.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: l_ },
        shouldShow: n,
        title: H.intl.format(lT.default.bx8sR9, { premiumGroupProductName: (0, lE.DP)() }),
        body: H.intl.format(lT.default.Pw4OFZ, { premiumGroupProductName: (0, lE.DP)() }),
        onRequestClose: a,
        actions: [{ text: H.intl.string(lT.default.DD26QR), onClick: s }],
    });
}
var lj = n(873298),
    lN = n(840387);
function ly(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        a = (0, lN.Z)(),
        s = nl.KP.useSetting(),
        r = a && s !== lj.KP.FRIENDS_AND_ALL_GUILDS,
        o = (0, l.useCallback)(() => {
            t(Z.i.TAKE_ACTION), (0, ex.openUserSettings)(eA.X.PROFILE_PRIVACY_CATEGORY);
        }, [t]),
        d = (0, l.useCallback)(() => {
            t(Z.i.USER_DISMISS);
        }, [t]),
        c = r
            ? s === lj.KP.FRIENDS_ONLY
                ? H.intl.string(H.t["/hogEy"])
                : H.intl.string(H.t["6hEfm1"])
            : H.intl.string(H.t.bnNxW1);
    return (0, i.jsx)(F.A, {
        targetElementRef: n,
        shouldShow: !0,
        onRequestClose: d,
        align: "center",
        position: "top",
        caretConfig: { align: "end" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/0710b4aac8339f9213d3c43a8976071c26abe2b3236ccd8817180ce465f33673.svg",
        },
        title: H.intl.string(H.t.Ve4nS1),
        body: c,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: H.intl.string(H.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
function lS(e) {
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
    (0, lx.Ay)(() => {
        function e() {
            return p(!0);
        }
        return (
            iN._.subscribe(tA.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                iN._.unsubscribe(tA.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let g = l.useCallback(() => {
        p(!1), s();
    }, [s]);
    t = null != a ? H.intl.formatToPlainString(H.t.Gzh6ZP, { webBuildOverride: a.id }) : H.intl.string(H.t.cduTBL);
    let f = e3.Z,
        A = (0, lv.w)();
    return (
        (f = null != a ? lC.H : A.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ln.A, {
                    ref: h,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: g,
                    onContextMenu: r,
                    "aria-label": H.intl.string(H.t.cduTBL),
                    icon: (0, i.jsx)(f, { size: "refresh_sm", color: "currentColor", className: d }),
                    ...A.events,
                    plated: null != c,
                }),
                (0, i.jsx)(lI, { targetElementRef: h, shouldShow: m, onDismiss: () => p(!1) }),
                (0, i.jsx)(nU.Ay, {
                    contentTypes: o,
                    groupName: Z.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === u.M.PRIVATE_PROFILE_COACHMARK
                            ? (0, i.jsx)(ly, { markAsDismissed: n, targetElementRef: h })
                            : null;
                    },
                }),
            ],
        })
    );
}
var lb = n(948198);
let lM = iS.Ay.getEnableHardwareAcceleration() ? m.Js : m.eu,
    lR = 2.5 * e8.A.Millis.SECOND,
    lw = 2 * e8.A.Millis.MINUTE,
    lk = 2 * e8.A.Millis.MINUTE,
    lO = 5 * e8.A.Millis.SECOND;
function lP(e) {
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
        T = (0, ij.F_)({ avatarDecoration: A, size: (0, et.Te)(p._3.SIZE_32) }),
        _ = (0, eo.A)(),
        {
            updateOpenPopoutRef: j,
            highlightBadge: N,
            setHighlightBadge: y,
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
                        iN._.subscribe(tA.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            iN._.unsubscribe(tA.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: a ? n : void 0, setHighlightBadge: i }
            );
        })(),
        S = (0, ei.K)(m);
    return null == o
        ? null
        : (0, i.jsx)(E.A, {
              object: tA.ZSU.AVATAR,
              children: (0, i.jsx)(ia.A, {
                  user: o,
                  targetElementRef: C,
                  clickTrap: !0,
                  preload: () =>
                      (0, il.A)(o.id, o.getAvatarURL(void 0, ia.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: l } = e;
                      return (0, i.jsx)(n9, {
                          currentUser: o,
                          highlightBadge: N,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: l,
                          className: lb.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: g.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      u(), y(void 0);
                  },
                  children: (e) => {
                      j(e);
                      let { onMouseEnter: t, onMouseDown: l, ...u } = e;
                      return (0, i.jsxs)("div", {
                          ref: C,
                          style: S,
                          onMouseEnter: t,
                          onMouseDown: l,
                          onClick: (t) => {
                              e.onClick?.(t), c?.(t);
                          },
                          className: s()(lb.Q9, { [lb.ZQ]: null != m }),
                          children: [
                              (0, i.jsx)(f.D, {
                                  ...u,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), c?.(t);
                                  },
                                  "aria-label": H.intl.string(H.t["5fWB8U"]),
                                  focusProps: { ringTarget: C },
                                  className: lb.$n,
                                  "data-jump-section": x,
                              }),
                              (0, i.jsx)(lM, {
                                  size: p._3.SIZE_32,
                                  src: o.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: T,
                                  status: r ? tA.clD.STREAMING : d,
                                  isSpeaking: n,
                                  voiceDb: a,
                                  className: lb.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: lb.oM, children: h(_) }),
                          ],
                      });
                  },
              }),
          });
}
class lL extends l.PureComponent {
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
        (0, X.A)(e, t, tA.JJy.ACCOUNT_PANEL), (0, J.X)(w.A.ACCOUNT, J.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, $.A)(e, tA.JJy.ACCOUNT_PANEL), (0, J.X)(w.A.ACCOUNT, J.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            ic.A.isConnected() ? (0, ex.openUserSettings)(eA.X.VOICE_AND_VIDEO_PANEL) : (0, ex.openUserSettings)();
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, C.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("36533"),
                    n.e("66512"),
                    n.e("19351"),
                    n.e("40351"),
                    n.e("89304"),
                    n.e("44551"),
                    n.e("36736"),
                    n.e("39411"),
                    n.e("17909"),
                    n.e("41152"),
                    n.e("48391"),
                    n.e("74725"),
                    n.e("78015"),
                    n.e("70758"),
                    n.e("25236"),
                    n.e("50392"),
                    n.e("66370"),
                    n.e("47899"),
                    n.e("75091"),
                    n.e("83200"),
                    n.e("25499"),
                    n.e("1248"),
                    n.e("24092"),
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
                    n.e("93637"),
                    n.e("45807"),
                    n.e("26572"),
                    n.e("39737"),
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
                    n.e("69977"),
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
                    n.e("55"),
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
                    n.e("22570"),
                    n.e("99998"),
                    n.e("80759"),
                    n.e("33587"),
                    n.e("88391"),
                    n.e("988"),
                    n.e("54540"),
                    n.e("8511"),
                    n.e("2959"),
                    n.e("70539"),
                    n.e("23904"),
                    n.e("82826"),
                    n.e("64477"),
                    n.e("65700"),
                    n.e("15223"),
                    n.e("51410"),
                    n.e("6229"),
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
                    n.e("76279"),
                    n.e("45309"),
                    n.e("8991"),
                    n.e("16994"),
                    n.e("47451"),
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
                    n.e("59908"),
                    n.e("21792"),
                    n.e("57504"),
                    n.e("64636"),
                    n.e("56486"),
                    n.e("84126"),
                    n.e("67732"),
                    n.e("76880"),
                    n.e("15597"),
                    n.e("57417"),
                    n.e("25965"),
                    n.e("99417"),
                    n.e("14755"),
                    n.e("61603"),
                    n.e("3969"),
                    n.e("40804"),
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
                    n.e("71540"),
                    n.e("94614"),
                    n.e("56275"),
                    n.e("93781"),
                    n.e("85413"),
                    n.e("41542"),
                    n.e("68066"),
                    n.e("40942"),
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
                    n.e("49362"),
                    n.e("91922"),
                    n.e("57533"),
                    n.e("81015"),
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
                    n.e("55112"),
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
                    n.e("11310"),
                    n.e("76602"),
                    n.e("7170"),
                    n.e("21921"),
                    n.e("7575"),
                    n.e("40402"),
                    n.e("72963"),
                    n.e("52511"),
                    n.e("54241"),
                    n.e("24303"),
                    n.e("53930"),
                    n.e("42724"),
                    n.e("93766"),
                    n.e("13823"),
                    n.e("71210"),
                    n.e("21930"),
                    n.e("59460"),
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
                    n.e("7788"),
                    n.e("49653"),
                    n.e("47626"),
                    n.e("88070"),
                    n.e("82644"),
                    n.e("3589"),
                    n.e("24689"),
                    n.e("53984"),
                    n.e("43780"),
                    n.e("20590"),
                    n.e("4848"),
                    n.e("31267"),
                    n.e("80830"),
                    n.e("51224"),
                    n.e("79745"),
                    n.e("29963"),
                    n.e("80854"),
                    n.e("35395"),
                    n.e("74630"),
                    n.e("35313"),
                    n.e("45413"),
                    n.e("46844"),
                    n.e("39075"),
                    n.e("63235"),
                    n.e("86672"),
                    n.e("75029"),
                    n.e("48948"),
                    n.e("94427"),
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
                    n.e("19558"),
                    n.e("63123"),
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
                    n.e("9966"),
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
                    n.e("10943"),
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
                    n.e("36140"),
                    n.e("31997"),
                    n.e("96329"),
                    n.e("86629"),
                    n.e("98384"),
                    n.e("13582"),
                    n.e("49111"),
                    n.e("24564"),
                    n.e("66601"),
                    n.e("34428"),
                    n.e("39721"),
                    n.e("19631"),
                    n.e("82384"),
                    n.e("76892"),
                    n.e("16799"),
                    n.e("52694"),
                    n.e("23815"),
                    n.e("32482"),
                    n.e("62883"),
                    n.e("38249"),
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
                    n.e("23773"),
                    n.e("33049"),
                    n.e("43184"),
                    n.e("21403"),
                    n.e("69443"),
                    n.e("39518"),
                    n.e("43456"),
                    n.e("44491"),
                ]).then(n.bind(n, 907206));
                return (t) =>
                    (0, i.jsx)(e, { ...t, onClose: C.Z_, onInteraction: (0, Q.s)("UserSettingsMenu", w.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, Q.s)("AudioDeviceMenu", w.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, C.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("60536"), n.e("78827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, is.d)({ location: "Account" });
                    return (0, i.jsx)(k.f5, {
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
                let { default: e } = await Promise.all([n.e("60536"), n.e("78827")]).then(n.bind(n, 385318));
                return () =>
                    (0, i.jsx)(k.f5, {
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
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > lw;
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
                      this.speakingWhileMutedTooltipTimeout.start(lR, () =>
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
                      this.speakingWhilePTTTooltipTimeout.start(lR, () =>
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
                    (0, i.jsx)(A.A, { children: t9.Ay.humanizeStatus(a) }),
                    (0, i.jsx)(N.A, {
                        user: l,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: r,
                        textClassName: lb.XD,
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
                      (0, i.jsx)(A.A, { children: t9.Ay.humanizeStatus(a) }),
                      (0, i.jsx)(es.A, { activity: o, emojiClassName: lb.Zg, className: lb.WO }),
                  ],
              })
            : null != a && a !== tA.clD.UNKNOWN && l.hasUniqueUsername()
              ? (0, i.jsx)(R.A, {
                    hoverText: s,
                    forceHover: e,
                    children: (0, i.jsx)(M, { text: t9.Ay.humanizeStatus(a) }),
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
                          className: lb.eW,
                          children: (0, i.jsx)(iM.A, {
                              className: s()({ [lb.e8]: null != e }),
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
                          className: lb.XP,
                          children: (0, i.jsx)(ib.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let { badgeDirectoryNuxPopoverVariant: t, currentUser: n, dismissibleContents: l } = this.props;
        return null == n
            ? null
            : (0, i.jsx)(i7, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: n,
                  targetElementRef: this.avatarWithPopoutRef,
                  badgeDirectoryNuxPopoverVariant: t,
                  additionalDCs: l.avatar,
                  children: (0, i.jsx)(lP, {
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
                                  className: s()(lb.kL, { [lb.UG]: null != n, [lb.bc]: !l, [lb.G5]: a }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(ea.A, { nameplate: t, hovered: r, placement: el.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(lD, {
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
                      (0, i.jsx)(eS, {}),
                  ],
              });
    }
}
function lD(e) {
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
        className: lb.Uo,
        style: N,
        children: [
            (0, i.jsx)(lA, {
                accountContainerRef: E,
                selfMute: n,
                serverMute: a,
                suppress: r,
                awaitingRemote: l,
                onMouseEnter: u,
                onMouseLeave: h,
                onClick: p,
                onContextMenu: g,
                iconForeground: null != C ? lb.t4 : void 0,
                nameplate: C,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowInputDeviceChangedTooltip: !o && "input" === T,
                shouldShowSpeakingWhilePTTTooltip: d,
                shouldShowPTTJoinTooltip: _,
                dismissTooltips: I,
                speaking: j,
            }),
            (0, i.jsx)(la, {
                selfDeaf: t,
                serverDeaf: s,
                onClick: m,
                onContextMenu: f,
                awaitingRemote: l,
                iconForeground: null != C ? lb.t4 : void 0,
                nameplate: C,
                shouldShowOutputDeviceChangedTooltip: "output" === T,
                dismissTooltips: I,
            }),
            (0, i.jsx)(lS, {
                webBuildOverride: c,
                onClick: A,
                onContextMenu: x,
                dismissibleContents: v.settings,
                iconForeground: null != C ? lb.t4 : void 0,
                nameplate: C,
            }),
        ],
    });
}
function lU(e) {
    let t = (0, c.bG)([ic.A], () => null != ic.A.getChannelId()),
        n = (0, eb.Py)(e),
        i = l.useRef(new h.Ep()),
        [a, s] = l.useState(!1);
    l.useEffect(() => {
        t &&
            n &&
            (s(!0),
            i.current.start(lO, () => {
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
function lG() {
    let e = (0, c.bG)([np.default], () => np.default.getCurrentUser()),
        t = (0, c.bG)([nb.default], () => nb.default.getId()),
        {
            activities: n,
            streaming: a,
            status: s,
        } = (0, c.cf)([nO.A], () => {
            let e = nO.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === tA.$pd.STREAMING;
                    }),
                status: nO.A.getStatus(),
            };
        }),
        r = (0, c.bG)([iC.A], () => iC.A.getAnyStreamForUser(t)),
        d = (0, T.A)({ userId: t }),
        m = (0, c.bG)([iA.A], () => iA.A.getVoiceVolume(t)),
        p = t9.Ay.useUserTag(e, { decoration: "never" }),
        g = (0, c.bG)([ic.A, iE.A], () => {
            let e = ic.A.getChannelId();
            return null != e ? iE.A.getChannel(e) : null;
        }),
        { mute: f, selfMute: A, suppress: x } = (0, io.A)(g),
        { selfDeaf: C, deaf: E } = (0, ir.A)(g),
        I = (0, c.bG)([K.A], () => ((0, q.kK)() ? K.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        j = (0, c.bG)([id.Ay], () => id.Ay.getSpeakingWhileMuted()),
        N = (0, c.bG)([Y.A], () => Y.A.isFullscreenInContext()),
        y = (0, c.bG)([i_.A], () => i_.A.hasLayers()),
        S = (0, v.useModalsStore)(v.hasAnyModalOpenSelector) || y || iy.P.isDisallowPopupsSet() || N,
        b = (0, c.bG)([eu.default], () => null != eu.default.getAwaitingRemoteSessionInfo()),
        M = (0, c.bG)([iI.A], () => iI.A.getGuildId()),
        R = e?.avatarDecoration,
        D = (0, ee.A)(R),
        G = t9.Ay.useName(e) ?? "",
        { analyticsLocations: F } = (0, k.Ay)(w.A.ACCOUNT),
        H = (0, en.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: V } = (0, ie.c9)(),
        B = (0, c.bG)([it.A, np.default, iT.A], () => {
            let e,
                t = it.A.getSyncingWith(),
                n = it.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = o()(Array.from(iT.A.getParty(e) ?? []))
                        .map((e) => np.default.getUser(e))
                        .filter(nR.Vq)
                        .value()),
                i.length > 1
            );
        }),
        Z = { avatar: [], settings: [] },
        z = (0, ii.lX)("AccountCoachmark"),
        $ = (0, er.ux)("AccountCoachmark"),
        X = (0, O.VV)({ location: "AccountCoachmark" }),
        J = (function (e) {
            let { currentUserId: t, enabled: n } = e;
            l.useEffect(() => {
                null != t && n && !L.Ay.hasCatalogFor(t) && (0, P.RS)(t);
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
    !S &&
        ($ && Z.avatar.push(u.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
        null != J && Z.avatar.push(u.M.BADGE_DIRECTORY_NUX_POPOVER),
        z && Z.settings.push(u.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: Q, dismissTooltip: et } = lU(ih.oh.AUDIO_INPUT),
        { shouldShowTooltip: ei, dismissTooltip: el } = lU(ih.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: ea, dismissTooltip: es } = (function () {
            let [e, t] = l.useState(!1),
                n = (0, c.bG)([id.Ay], () => id.Ay.getMode() === ih.TB.PUSH_TO_TALK),
                i = (0, c.bG)(
                    [ic.A],
                    () => null != ic.A.getChannelId() && (ic.A.getDuration() ?? Number.MAX_VALUE) < im,
                ),
                [a, s] = l.useState(!1),
                { showPTTJoinTooltip: r } = iu.A.useConfig({ location: "usePTTJoinTooltip" }),
                o = l.useRef(new h.Ep()),
                d = l.useRef(new h.Ep());
            l.useEffect(() => {
                if (i && n && !e) {
                    if ((iu.A.getConfig({ location: "usePTTJoinTooltip:couldDisplayTooltip" }), !r)) return;
                    s(!0),
                        t(!0),
                        d.current.start(ip, () => {
                            t(!1);
                        }),
                        o.current.start(im, () => {
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
            let { showPTTSpeakingIndicator: e } = iu.A.useConfig({ location: "useSpeakingWhilePTT" }),
                [t, n] = l.useState(!1),
                i = (0, c.bG)([id.Ay], () => id.Ay.getMode() === ih.TB.PUSH_TO_TALK),
                a = (0, c.bG)([ic.A], () => ic.A.getRTCConnectionId()),
                s = (0, c.bG)([id.Ay], () => {
                    let e = id.Ay.getModeOptions().updatedAt;
                    return null != e && Date.now() - e < iv;
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
                        let a = (i & ih.ME.VOICE) === ih.ME.VOICE,
                            s = iA.A.isCurrentUserPTTActive();
                        a && !s
                            ? ++t >= 6 &&
                              (n(!0),
                              l.start(ix, () => {
                                  n(!1);
                              }))
                            : (t = 0);
                    }
                    return (
                        s && e && i && null != a && id.Ay.getMediaEngine().on(ig.bg.VoiceActivity, o),
                        () => {
                            id.Ay.getMediaEngine().removeListener(ig.bg.VoiceActivity, o), l.stop();
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
    return (0, i.jsx)(k.f5, {
        value: F,
        children: (0, i.jsx)(lL, {
            currentUser: e,
            username: G,
            activities: n,
            applicationStream: r,
            voiceChannel: g,
            dismissibleContents: Z,
            badgeDirectoryNuxPopoverVariant: J,
            userTag: p,
            occluded: S,
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
            nameplate: H,
            selectedGuildId: M,
            avatarDecoration: D,
            isQuestBarEmpty: V,
            isListenAlongVisible: B,
            deviceChangedTooltipType: ed,
            onDismissDeviceChangedTooltip: () => ec(ed),
            shouldShowPTTJoinTooltip: ea,
            dismissPTTJoinTooltip: es,
        }),
    });
}
