n.d(t, { g: () => sj, A: () => sR }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(735438),
    o = n.n(r),
    u = n(158390),
    c = n(17928),
    d = n(554146),
    h = n(451988),
    m = n(97808),
    p = n(778712),
    f = n(922016),
    g = n(939249),
    A = n(140735),
    x = n(312138);
if (21552 == n.j) var C = n(192308);
var E = n(442433),
    v = n(820284),
    T = n(717558),
    _ = n(964486),
    N = n(220839),
    j = n(397244),
    S = n(394871),
    y = n(18005),
    R = n(866323),
    I = n(449450);
function b(e) {
    let { text: t } = e,
        n = (0, R.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, i.jsx)("div", {
        className: I.k,
        children: n((e, t) => (0, i.jsx)(y.animated.div, { className: I.H, style: e, children: t })),
    });
}
var M = n(29160),
    O = n(793574),
    w = n(688810),
    U = n(521502),
    k = n(380610),
    P = n(313961),
    D = n(18235),
    L = n(183184),
    F = n(384059),
    G = n(480890),
    V = n(601255),
    B = n(562819),
    H = n(449582),
    Q = n(351952),
    W = n(88686),
    q = n(174755),
    z = n(302223),
    Z = n(248778),
    K = n(609425),
    $ = n(922301),
    Y = n(660184),
    X = n(643501),
    J = n(534514),
    ee = n(834730),
    et = n(789645),
    en = n(826673),
    ei = n(750506),
    es = n(780964),
    el = n(766075),
    ea = n(417146),
    er = n(552122),
    eo = n(717421),
    eu = n(775602),
    ec = n(993843);
let ed = { mass: 10, tension: 550, friction: 140 };
function eh(e) {
    let { className: t, pageMultiplier: n } = e,
        l = (0, c.bG)([eu.Ay], () => eu.Ay.useReducedMotion),
        [r, u] = s.useState({ x: 0, y: 0 }),
        d = s.useMemo(
            () =>
                o().throttle((e) => {
                    l || u({ x: (window.innerWidth - e.pageX * n) / 90, y: (window.innerHeight - e.pageY * n) / 90 });
                }, 20),
            [n, l],
        );
    s.useEffect(() => (window.addEventListener("mousemove", d), () => window.removeEventListener("mousemove", d)), [d]);
    let [h, m] = (0, eo.z)(() => ({ x: 0, y: 0, config: ed }));
    return (
        s.useEffect(() => {
            m({ x: r.x, y: r.y });
        }, [r.x, r.y, m]),
        (0, i.jsx)(y.animated.div, {
            style: { transform: (0, y.to)([h.x, h.y], (e, t) => `translate3d(${e}px, ${t}px, 0)`) },
            className: a()(ec.T, t),
        })
    );
}
var em = n(49999),
    ep = n(375708),
    ef = n(275883);
function eg(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: s } = e,
        l = er.A.useIsEligible(),
        a = (0, en.JZ)(t),
        r = null != n,
        o = null != s ? { color: s } : void 0,
        { analyticsLocations: u } = (0, w.Ay)(O.A.HOLIDAY_COACHMARK);
    function c(e) {
        (0, en.Dr)(t, { dismissAction: e });
    }
    function d() {
        (0, el.openUserSettings)(es.X.NOTIFICATIONS_PANEL, { analyticsLocations: u }), c(em.i.TAKE_ACTION);
    }
    return l && !a
        ? (0, i.jsx)(ei.Ay, {
              children: (0, i.jsxs)("div", {
                  className: ef.iE,
                  style: { backgroundColor: r ? n : void 0 },
                  children: [
                      !r &&
                          (0, i.jsxs)("div", {
                              className: ef.o5,
                              children: [
                                  (0, i.jsx)(eh, { className: ef.iL, pageMultiplier: 5 }),
                                  (0, i.jsx)("div", { className: ef.Np }),
                              ],
                          }),
                      (0, i.jsx)("div", { className: ef.c8 }),
                      (0, i.jsxs)("div", {
                          className: ef.Qs,
                          children: [
                              (0, i.jsxs)("div", {
                                  children: [
                                      (0, i.jsx)(J.D, {
                                          variant: "heading-md/bold",
                                          color: null != o ? void 0 : "always-white",
                                          style: o,
                                          children: ep.intl.string(ep.t["6CxPoB"]),
                                      }),
                                      (0, i.jsx)(ee.E, {
                                          variant: "text-xs/normal",
                                          color: "always-white",
                                          children: ep.intl.format(ep.t.IVzJ8G, {
                                              settingsHook: (e, t) =>
                                                  (0, i.jsx)(
                                                      g.D,
                                                      {
                                                          tag: "span",
                                                          className: ef.nf,
                                                          style: o,
                                                          onClick: d,
                                                          children: e,
                                                      },
                                                      t,
                                                  ),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(g.D, {
                                  className: ef.l2,
                                  onClick: () => c(em.i.USER_DISMISS),
                                  children: (0, i.jsx)(et.P, { color: "currentColor", size: "xs" }),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
function eA() {
    return null == ea.A.coachmarkDismissibleContent
        ? null
        : (0, i.jsx)(eg, {
              dismissibleContent: ea.A.coachmarkDismissibleContent,
              backgroundColor: ea.A.coachmarkBackgroundColor,
              specialTextColor: ea.A.coachmarkSpecialTextColor,
          });
}
var ex = n(74848),
    eC = n(607399),
    eE = n(707554),
    ev = n(224640),
    eT = n(305866),
    e_ = n(364522),
    eN = n(22231),
    ej = n(133171),
    eS = n(780338);
if (21552 != n.j) var C = n(192308);
var ey = n(980707),
    eR = n(26137),
    eI = n(473935),
    eb = n(765671),
    eM = n(783041),
    eO = n(176781),
    ew = n(812993),
    eU = n(320448),
    ek = n(993401),
    eP = n(447349);
function eD(e) {
    return (0, i.jsx)("div", {
        className: eP.wE,
        children: (0, i.jsx)(ey.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function eL(e) {
    let {
            action: t,
            onClick: n,
            icon: l,
            label: a,
            sublabel: r,
            trailing: o,
            renderSubmenu: u,
            ref: c,
            submenuTargetElementRef: d,
            submenuAlign: h,
        } = e,
        m = null != n,
        p = (0, ek.rE)({ action: t, onClick: n }),
        [A, x] = s.useState(!1),
        E = s.useRef(null),
        v = c ?? E,
        T = null != u,
        _ = T && m,
        N = s.useCallback(() => {
            x(!0);
        }, []),
        j = s.useCallback(() => {
            (0, C.hasAnyModalOpen)() || x(!1);
        }, []);
    function S() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: eP.iA, children: (0, i.jsx)(l, { size: "xs", color: "currentColor" }) }),
                (0, i.jsxs)("div", {
                    className: eP.$H,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(ee.E, {
                                    color: "currentColor",
                                    variant: "text-sm/medium",
                                    className: eP.W1,
                                    children: a,
                                }),
                                (0, i.jsx)(ee.E, { color: "currentColor", variant: "text-xs/medium", children: r }),
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
                          (0, i.jsx)(g.D, { className: eP.ef, onClick: p, children: S() }),
                          (0, i.jsx)(g.D, {
                              className: eP.ap,
                              "aria-label": ep.intl.string(ep.t.PdRCRg),
                              ...e,
                              onClick: N,
                              children: (0, i.jsx)(eU._, { size: "xs", color: "currentColor" }),
                          }),
                      ],
                  })
                : T
                  ? (0, i.jsxs)(g.D, {
                        className: eP.ef,
                        ...e,
                        onClick: N,
                        children: [
                            S(),
                            (0, i.jsx)("div", {
                                className: eP.ap,
                                children: (0, i.jsx)(eU._, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    })
                  : (0, i.jsx)(g.D, { className: eP.ef, onClick: p, children: S() })),
            (0, i.jsx)("div", { ref: v, className: eP.jG, children: t })
        );
    }
    return T
        ? (0, i.jsx)("li", {
              className: eP.j$,
              onMouseEnter: N,
              onMouseLeave: j,
              children: (0, i.jsx)(f.Y, {
                  targetElementRef: d ?? v,
                  align: h,
                  spacing: 0,
                  renderPopout: u,
                  shouldShow: A,
                  onRequestClose: j,
                  children: y,
              }),
          })
        : (0, i.jsx)("li", { className: eP.j$, children: y() });
}
function eF(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var eG = n(734066),
    eV = n(274372),
    eB = n(409067),
    eH = n(271597),
    eQ = n(990078),
    eW = n(475358),
    eq = n(408278),
    ez = n(625903),
    eZ = n(404778),
    eK = n(689175),
    e$ = n(821609),
    eY = n(532624),
    eX = n(927813),
    eJ = n(879631),
    e0 = n(350535),
    e1 = n(372684),
    e2 = n(974293),
    e3 = n(572164),
    e6 = n(953932),
    e5 = n(280483),
    e4 = n(890856),
    e8 = n(713517),
    e7 = n(609174),
    e9 = n(619744);
function te(e) {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        l = (0, e7.Y_)(),
        a = s.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), t?.(), (0, eH.p)({ initialEditingClipId: l.id });
            },
            [l, t],
        );
    return (0, i.jsx)(e$.$, {
        onClick: a,
        icon: eN.R,
        variant: n,
        size: "sm",
        text: ep.intl.string(ep.t.bt75uw),
        fullWidth: !0,
    });
}
var tt = n(82716),
    tn = n(585579),
    ti = n(930317),
    ts = n(285072),
    tl = n(316305);
let ta = s.memo(function (e) {
    let { clip: t, isNew: n, onClose: l, className: r } = e,
        o = s.useRef(null),
        { isHoveringOrFocusing: u } = (0, e8.A)(o),
        c = s.useCallback(() => {
            l?.(), (0, eH.p)({ initialEditingClipId: t.id });
        }, [t.id, l]);
    return (0, i.jsx)(e7.Cl, {
        clip: t,
        children: (0, i.jsx)(e4.s, {
            ref: o,
            "aria-label": ep.intl.string(ep.t.bt75uw),
            onClick: c,
            className: a()(tl.Z1, r),
            children: (0, i.jsxs)(ti.d, {
                isStatic: !0,
                children: [
                    n && (0, i.jsx)(ew.Lp, { className: tl.Ad, text: ep.intl.string(ep.t.y2b7CA) }),
                    (0, i.jsxs)(ts.h, {
                        isVisible: u,
                        className: tl.Lw,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tl.mY,
                                children: [(0, i.jsx)(tt.z, {}), (0, i.jsx)(e9.k, {})],
                            }),
                            (0, i.jsxs)("div", {
                                className: tl.E_,
                                children: [
                                    (0, i.jsx)(te, { onBeforeEdit: l, variant: "overlay-secondary" }),
                                    (0, i.jsx)(tn.E, {}),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
var tr = n(652215),
    to = n(753070),
    tu = n(16590),
    tc = n(550350);
function td(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: l, setPopoutRef: a } = e;
    (0, e5.A)();
    let r = (0, c.yK)([eV.Ay], () => Object.values(eV.Ay.getClips())),
        o = (0, c.bG)([eV.Ay], () => eV.Ay.getSettings()),
        u = (0, c.bG)([eV.Ay], () => eV.Ay.getNewClipIds()),
        d = (0, e2.aJ)("ClipsPopout"),
        h = (0, c.bG)([eV.Ay], () => eV.Ay.getEnableAutoclipping()),
        m = (0, c.bG)([eY.Ay], () => eY.Ay.getKeybindForAction(tr.hCu.SAVE_CLIP)),
        p = s.useRef(null),
        f = !o.showPovClipsInGallery,
        g = s.useMemo(() => {
            let e = r.filter((e) => e.type === e1.nQ.CLIP && "" !== e.thumbnail && (!f || !(0, eB.kD)(e)));
            return e.sort((e, t) => t.createdAt - e.createdAt), e;
        }, [r, f]),
        A = s.useMemo(() => g.slice(0, 16), [g]),
        x = g.length > 16,
        C = null != m ? e0.dI(m.shortcut, !0) : null,
        E = [
            (0, eJ.$)(o.clipsLength / eX.A.Millis.SECOND),
            (0, to.zr)(o.clipsQuality.resolution),
            ep.intl.formatToPlainString(ep.t.Qb44XH, { fps: o.clipsQuality.frameRate }),
        ];
    return (
        d && E.push(ep.intl.string(tu.default.XWkJoi)),
        (0, i.jsxs)("div", {
            ref: (e) => {
                (p.current = e), a?.(e);
            },
            className: tc.SW,
            role: "dialog",
            "aria-label": ep.intl.string(ep.t.z2jK6X),
            children: [
                (0, i.jsxs)("div", {
                    className: tc.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tc.$,
                            children: [
                                (0, i.jsx)(J.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: ep.intl.string(ep.t.z2jK6X),
                                }),
                                null != C && (0, i.jsx)(eW.e, { className: tc.P, shortcut: C }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tc.$s,
                            children: [
                                (0, i.jsx)(eQ.m, {
                                    text: ep.intl.string(ep.t["3D5yo/"]),
                                    children: (0, i.jsx)(eq.K, {
                                        onClick: () => n(),
                                        icon: ez.Z,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": ep.intl.string(ep.t["3D5yo/"]),
                                    }),
                                }),
                                (0, i.jsx)(eQ.m, {
                                    text: ep.intl.string(tu.default["55C2MH"]),
                                    children: (0, i.jsx)(eq.K, {
                                        onClick: () => t(),
                                        icon: eO.x,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": ep.intl.string(tu.default["55C2MH"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: tc.ov,
                    children: [
                        E.map((e, t) =>
                            (0, i.jsxs)(
                                s.Fragment,
                                {
                                    children: [
                                        t > 0 && (0, i.jsx)("span", { className: tc.LO, children: "\u2022" }),
                                        (0, i.jsx)(ee.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            tag: "span",
                                            className: tc.c5,
                                            children: e,
                                        }),
                                    ],
                                },
                                e,
                            ),
                        ),
                        d &&
                            (0, i.jsx)(ee.E, {
                                variant: "text-xs/semibold",
                                color: h ? "text-strong" : "text-feedback-critical",
                                tag: "span",
                                className: tc.wS,
                                children: h ? ep.intl.string(tu.default.lTwKmt) : ep.intl.string(tu.default.GNDqtf),
                            }),
                    ],
                }),
                (0, i.jsx)(eZ.c, {}),
                A.length > 0
                    ? (0, i.jsxs)(eK.Ch, {
                          className: tc.Vg,
                          fade: !0,
                          disableFocusRingScope: !0,
                          children: [
                              A.map((e) => (0, i.jsx)(ta, { clip: e, isNew: u.includes(e.id), onClose: l }, e.id)),
                              x &&
                                  (0, i.jsx)("div", {
                                      className: tc.qr,
                                      children: (0, i.jsx)(e$.$, {
                                          onClick: () => t(),
                                          text: ep.intl.string(tu.default["55C2MH"]),
                                          variant: "secondary",
                                          size: "sm",
                                      }),
                                  }),
                          ],
                      })
                    : (0, i.jsx)(th, { keybindString: C }),
            ],
        })
    );
}
function th(e) {
    let { keybindString: t } = e,
        n = (0, e3.Et)();
    return (0, i.jsxs)("div", {
        className: tc.p$,
        children: [
            (0, i.jsx)(ee.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: tc.qO,
                children: ep.intl.string(tu.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(ee.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: tc.CZ,
                      children: ep.intl.format(tu.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, i.jsx)(
                                  ee.E,
                                  {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-positive",
                                      tag: "span",
                                      children: e,
                                  },
                                  "protip",
                              ),
                          keybind: (0, i.jsx)(eW.e, { shortcut: t }),
                      }),
                  })
                : (0, i.jsx)(e6.A, {}),
        ],
    });
}
function tm(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        l = (0, eG.sw)(),
        a = !(0, c.bG)([eV.Ay], () => eV.Ay.getSettings().showPovClipsInGallery),
        r = (0, c.bG)([eV.Ay], () => {
            let e = eV.Ay.getNewClipIds();
            return a
                ? e.filter((e) => {
                      let t = eV.Ay.getClipById(e);
                      return null != t && !(0, eB.kD)(t);
                  }).length
                : e.length;
        }, [a]),
        o = s.useCallback(
            (e) => {
                t(), (0, eH.p)({ initialEditingClipId: e });
            },
            [t],
        ),
        u = s.useCallback(() => {
            t(), (0, el.openUserSettings)(es.X.CLIPS_PANEL);
        }, [t]);
    return l
        ? (0, i.jsx)(eL, {
              action: "PRESS_CLIPS",
              icon: eO.x,
              label: ep.intl.string(ep.t.z2jK6X),
              trailing: r > 0 ? (0, i.jsx)(ew.hV, { count: r }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, i.jsx)(td, { ...e, onOpenGallery: o, onOpenSettings: u, onClose: t }),
          })
        : null;
}
var tp = n(480335),
    tf = n(577390),
    tg = n(474257),
    tA = n(31956),
    tx = n(744808),
    tC = n(645507),
    tE = n(970931),
    tv = n(315710),
    tT = n(832248),
    t_ = n(462887),
    tN = n(736653),
    tj = n(439174),
    tS = n(428262),
    ty = n(878784),
    tR = n(202541);
function tI() {
    let e = (0, ty.Xb)(),
        t = (0, tS.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tR.sp.length - 1; t >= 0; t--) {
        let i = tR.VD[tR.sp[t]],
            s = new Date(e);
        if ((s.setMonth(e.getMonth() + i.tenureReqNumMonths), s.setHours(s.getHours() + 30), n > s.getTime()))
            if (n - s.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let tb = {
        [tR.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tR.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tR.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tR.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tR.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tR.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tR.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tR.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tM = {
        [tR.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [tR.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [tR.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [tR.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [tR.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [tR.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [tR.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [tR.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var tO = n(682165);
let tw = s.lazy(() => Promise.all([n.e("15323"), n.e("24832")]).then(n.bind(n, 748579)));
function tU() {
    let e = (0, c.bG)([eu.Ay], () => eu.Ay.useReducedMotion),
        t = (0, tT.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tI(),
                t = (0, t_.M)((0, tN.Ay)());
            if (null == e) return null;
            let n = tb[e],
                i = tM[e],
                s = {
                    currentBadge: (0, tj.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                l = tR.sp.indexOf(e);
            if (l > 0) {
                let e = tR.sp[l - 1],
                    n = tb[e];
                (s.prevBadge = (0, tj.e0)(e)), (s.prevBadgeTextGradient = t ? n?.dark : n?.light);
            }
            return s;
        })(),
        [l, a] = s.useState(null);
    return (null != n && null == l && a(n), e || !t || null == l) ? null : (0, i.jsx)(tk, { levelUpData: l });
}
function tk(e) {
    let { levelUpData: t } = e,
        n = s.useRef(null),
        l = s.useCallback(() => {
            tT.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, i.jsx)(tv.Ok, {
        containerRef: n,
        children: (0, i.jsxs)("div", {
            className: tO.i,
            children: [
                (0, i.jsx)("div", {
                    className: tO.b,
                    children: (0, i.jsx)(eQ.m, {
                        text: ep.intl.string(ep.t.cpT0Cq),
                        children: (0, i.jsx)(eq.K, {
                            icon: et.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: l,
                            "aria-label": ep.intl.string(ep.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, i.jsx)(s.Suspense, { fallback: null, children: (0, i.jsx)(tw, { levelUpData: t }) }),
            ],
        }),
    });
}
var tP = n(206835),
    tD = n(183555),
    tL = n(999291),
    tF = n(975732),
    tG = n(718019),
    tV = n(413492),
    tB = n(915614),
    tH = n(744753),
    tQ = n(559506),
    tW = n(646986),
    tq = n(349419),
    tz = n(946356),
    tZ = n(878555),
    tK = n(624479),
    t$ = n(206845),
    tY = n(957565),
    tX = n(427262),
    tJ = n(962352);
function t0(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: s } = (0, tD.NJ)();
    return tY.p5
        ? (0, i.jsx)(t$.A, {
              text: ep.intl.string(ep.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: tX.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => s({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(g.D, {
                      ...e,
                      className: a()(tJ.c, { [tJ.R]: n }),
                      "aria-label": ep.intl.string(ep.t.y5MwJy),
                      children: (0, i.jsx)(tK.T, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var t1 = n(983495),
    t2 = n(442228),
    t3 = n(885386),
    t6 = n(290863),
    t5 = n(351906),
    t4 = n(562153),
    t8 = n(661531),
    t7 = n(477782),
    t9 = n(628284),
    ne = n(695366),
    nt = n(363195),
    nn = n(889227),
    ni = n(287809),
    ns = n(174459),
    nl = n(429707),
    na = n(274303),
    nr = n(994125),
    no = n(347853),
    nu = n(573879),
    nc = n(335020),
    nd = n(43105),
    nh = n(661439),
    nm = n(385113),
    np = n(352003),
    nf = n(429913),
    ng = n(334074),
    nA = n(633075),
    nx = n(667049),
    nC = n(495544),
    nE = n(90165),
    nv = n(403362),
    nT = n(518477);
function n_(e) {
    let { targetElementRef: t, onClose: l } = e,
        [a, r] = s.useState(!1),
        o = (0, c.bG)([nC.default], () => nC.default.getId()),
        { eligibleApplications: u, markAsDismissed: h } = (function () {
            let e = (0, c.yK)([nm.A], () => nm.A.getFeaturedApplicationIds());
            (0, np.A)(e),
                s.useEffect(() => {
                    (0, nh.X)();
                }, []);
            let t = (0, c.bG)([nC.default], () => nC.default.getId()),
                n = (0, nx.A)(t),
                i = s.useMemo(() => n.filter((e) => e instanceof nA.R), [n]),
                l = (0, nf.A)(e),
                a = s.useMemo(() => l.filter(nv.Vq), [l]),
                r = (0, c.cf)([nE.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = a.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = nE.A.getLastPlayedDateTime(e));
                    }
                    return t;
                }),
                o = s.useMemo(() => {
                    let e = Date.now();
                    return a.filter((t) => {
                        if (i.some((e) => e.applicationId === t.id)) return !1;
                        let n = r[t.id];
                        return null != n && e - n < 7776e6;
                    });
                }, [a, i, r]),
                { eligibleToShow: u, markAsDismissed: h } = (0, ng.hj)({
                    applications: o,
                    dismissibleContent: d.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: ng.SH,
                });
            return {
                eligibleApplications: s.useMemo(() => o.filter((e) => u.includes(e.id)), [o, u]),
                markAsDismissed: h,
            };
        })();
    return ((0, s.useEffect)(() => {
        0 !== u.length &&
            Promise.all([
                n.e("69944"),
                n.e("89381"),
                n.e("4589"),
                n.e("47173"),
                n.e("60361"),
                n.e("49451"),
                n.e("48626"),
                n.e("47623"),
                n.e("29205"),
                n.e("73435"),
                n.e("85319"),
                n.e("14211"),
                n.e("26943"),
                n.e("72197"),
                n.e("10949"),
                n.e("68501"),
                n.e("71519"),
                n.e("42335"),
                n.e("57507"),
                n.e("16334"),
                n.e("71406"),
                n.e("56985"),
                n.e("81619"),
                n.e("40324"),
                n.e("78692"),
                n.e("86122"),
                n.e("14831"),
                n.e("25821"),
                n.e("90645"),
                n.e("44400"),
                n.e("25781"),
                n.e("62646"),
                n.e("77756"),
                n.e("15166"),
                n.e("12375"),
                n.e("25711"),
                n.e("53417"),
                n.e("23549"),
                n.e("68201"),
                n.e("93103"),
                n.e("34552"),
                n.e("9233"),
                n.e("36877"),
                n.e("8757"),
                n.e("72963"),
                n.e("7575"),
                n.e("24303"),
                n.e("85968"),
                n.e("88599"),
                n.e("75842"),
                n.e("68403"),
                n.e("71273"),
                n.e("29787"),
                n.e("9640"),
                n.e("52548"),
                n.e("53984"),
                n.e("43780"),
                n.e("76273"),
                n.e("52229"),
                n.e("95340"),
                n.e("69747"),
                n.e("3930"),
                n.e("3663"),
                n.e("54241"),
                n.e("21930"),
                n.e("89523"),
                n.e("29260"),
                n.e("82486"),
                n.e("4098"),
                n.e("755"),
                n.e("41786"),
                n.e("96574"),
                n.e("46430"),
                n.e("4374"),
                n.e("86546"),
                n.e("82969"),
                n.e("55895"),
                n.e("37065"),
                n.e("43256"),
                n.e("41384"),
                n.e("43372"),
                n.e("19119"),
                n.e("73566"),
                n.e("45419"),
                n.e("48407"),
                n.e("87791"),
                n.e("78377"),
                n.e("53683"),
                n.e("84601"),
                n.e("9598"),
                n.e("92992"),
                n.e("86470"),
                n.e("53308"),
                n.e("54876"),
                n.e("90590"),
                n.e("14501"),
                n.e("27880"),
                n.e("8032"),
                n.e("77970"),
                n.e("75514"),
                n.e("71367"),
                n.e("75072"),
                n.e("49282"),
                n.e("35683"),
                n.e("2091"),
            ]).then(n.bind(n, 577593));
    }, [u.length]),
    0 === u.length)
        ? null
        : (0, i.jsx)(nd.A, {
              targetElementRef: t,
              position: "right",
              gradientColor: "blue",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/ea1ea066f1312b56d74e16232ca7da602ee5fc0206f0ea9ecc130e5094334683.svg",
              },
              title: ep.intl.string(ep.t.HMWL9c),
              body: ep.intl.string(ep.t["9hfy3A"]),
              onRequestClose: () =>
                  h(
                      u.map((e) => e.id),
                      em.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: ep.intl.string(ep.t.VSLDly),
                      loading: a,
                      onClick: function () {
                          r(!0),
                              (0, tF.openUserProfileModal)({ userId: o, tabSection: nT.RP.WIDGETS })
                                  .then(() => {
                                      let e = u.map((e) => e.id);
                                      (0, C.openModalLazy)(
                                          async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("15166"),
                                                  n.e("12375"),
                                                  n.e("8978"),
                                                  n.e("4098"),
                                                  n.e("48407"),
                                                  n.e("78377"),
                                                  n.e("92992"),
                                                  n.e("87591"),
                                              ]).then(n.bind(n, 333114));
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
                                              u.map((e) => e.id),
                                              em.i.TAKE_ACTION,
                                          ),
                                          l();
                                  })
                                  .finally(() => r(!1));
                      },
                  },
              ],
          });
}
var nN = n(461213),
    nj = n(818348),
    nS = n(466573);
function ny() {
    let e = (0, c.bG)([nN.A], () => nN.A.getStatus()),
        t = (0, tX.MU)(e) ?? "",
        n = e === nj.cl.INVISIBLE || e === nj.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: nS.k,
        children: [
            (0, i.jsxs)(A.A, { tag: "div", children: [ep.intl.string(ep.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(eQ.m, {
                    text: ep.intl.string(ep.t.L99HQm),
                    children: (0, i.jsx)(ne.E, {
                        size: "xs",
                        color: t8.A.colors.STATUS_WARNING,
                        "aria-label": ep.intl.string(ep.t.L99HQm),
                    }),
                }),
        ],
    });
}
var nR = n(379848),
    nI = n(321191);
let nb = (0, n(945810).mj)({
    name: "2025-12-social-layer-storefront-wishlist-user-account-popout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var nM = n(501838),
    nO = n(760716),
    nw = n(915089),
    nU = n(13808);
function nk(e) {
    let {
            markAsDismissed: t,
            heading: n,
            subheading: l,
            children: r,
            height: o,
            className: u,
            contentClassName: c,
        } = e,
        d = (0, nw.GV)(),
        h = s.useRef(null),
        m = (0, eo.z)({
            from: { transform: "translate3d(-110%, 0, 0)", height: o },
            to: { transform: "translate3d(0, 0, 0)", height: o },
            config: { mass: 1, stiffness: 100, damping: 15 },
            onRest: () => {
                null != h.current && h.current.focus();
            },
        });
    return (0, i.jsx)(y.animated.div, {
        className: a()(nU.kL, u),
        style: m,
        children: (0, i.jsxs)("aside", {
            "aria-labelledby": d,
            className: nU.Qs,
            children: [
                (0, i.jsxs)("div", {
                    className: nU.U1,
                    children: [
                        (0, i.jsx)(g.D, {
                            innerRef: h,
                            "aria-label": ep.intl.string(ep.t.WAI6xu),
                            className: nU.b,
                            onClick: () => {
                                t(em.i.USER_DISMISS);
                            },
                            children: (0, i.jsx)(et.P, { color: "currentColor" }),
                        }),
                        (0, i.jsx)(J.D, { id: d, variant: "heading-lg/semibold", children: n }),
                    ],
                }),
                null != l && (0, i.jsx)(ee.E, { variant: "text-md/normal", color: "text-subtle", children: l }),
                (0, i.jsx)(e_.Ip, {
                    className: nU.XG,
                    fade: !0,
                    children: (0, i.jsx)("div", { className: a()(nU.gT, c), children: r }),
                }),
            ],
        }),
    });
}
var nP = n(973912),
    nD = n(871123),
    nL = n(44724),
    nF = n(501573);
function nG() {
    (0, nL.default)({ guildId: (0, nD.zf)() });
}
function nV(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: s } = e,
        { analyticsLocations: l } = (0, w.Ay)([O.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
    return null == t
        ? null
        : (0, i.jsxs)(nk, {
              heading: ep.intl.string(ep.t["vy/61K"]),
              subheading: ep.intl.string(ep.t.tEee9t),
              markAsDismissed: s,
              className: nF.Zj,
              contentClassName: nF.hQ,
              height: 560,
              children: [
                  (0, i.jsx)(nP.A, {
                      userId: t,
                      analyticsLocations: l,
                      handleOpenUserProfileModal: n,
                      numWishlistItemsToRecommend: 9,
                      className: nF.KN,
                  }),
                  (0, i.jsx)("div", {
                      className: nF.UD,
                      children: (0, i.jsx)(e$.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text: ep.intl.string(ep.t.rg9FQp),
                          onClick: nG,
                      }),
                  }),
              ],
          });
}
function nB(e) {
    let { displayProfile: t, handleOpenUserProfileModal: n, height: l } = e,
        a = (function (e) {
            let { location: t } = e,
                n = (function (e) {
                    let { location: t } = e;
                    return nb.useConfig({ location: t }).enabled;
                })({ location: t }),
                i = (0, c.bG)([ni.default], () => ni.default.getCurrentUser()),
                l = (0, c.bG)([nI.A], () => (null != i ? nI.A.getFirstWishlistId(i.id) : null)),
                a = (0, nO.i)((e) => e.recommendationApplicationIds),
                o = (0, nM.rY)(),
                u = (0, nM.qx)();
            return s.useMemo(
                () => (null != a || (null == l && n) ? (0, r.uniq)([...(a ?? []), ...u, ...o]).sort() : []),
                [n, l, u, o, a],
            );
        })({ location: "AccountProfilePopoutUpsell" }),
        o = s.useMemo(() => {
            let e = [];
            return a.length > 0 && e.push(d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e;
        }, [a]);
    return (0, i.jsx)(nR.Ay, {
        contentTypes: o,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: s, markAsDismissed: a } = e;
            return null == l
                ? null
                : s === d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                  ? (0, i.jsx)(nV, { profileUserId: t?.userId, handleOpenUserProfileModal: n, markAsDismissed: a })
                  : null;
        },
    });
}
var nH = n(146901),
    nQ = n(827827);
let nW = [
        { duration: 15 * eX.A.Millis.MINUTE, label: () => ep.intl.string(ep.t["8ot6gv"]) },
        { duration: eX.A.Millis.HOUR, label: () => ep.intl.string(ep.t.UMWBZr) },
        { duration: 8 * eX.A.Millis.HOUR, label: () => ep.intl.string(ep.t.EpAXPC) },
        { duration: eX.A.Millis.DAY, label: () => ep.intl.string(ep.t["755t4q"]) },
        { duration: 3 * eX.A.Millis.DAY, label: () => ep.intl.string(ep.t["f3/1ch"]) },
        { duration: void 0, label: () => ep.intl.string(ep.t["46dqJY"]) },
    ],
    nq = "forever";
function nz(e) {
    let { status: t, currentStatus: n, description: s } = e,
        l = t !== tr.clD.ONLINE,
        a = (0, i.jsx)(i.Fragment, {
            children: nW.map((e) => {
                let { duration: s, label: l } = e;
                return (0, i.jsx)(
                    t7.Dr,
                    {
                        id: `${t}-${s}`,
                        label: l(),
                        action: () => (0, nQ.A)({ nextStatus: t, prevStatus: n, durationMillis: s }),
                        dontCloseOnAction: !0,
                    },
                    s ?? nq,
                );
            }),
        });
    return (0, i.jsx)(t7.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: l,
        label: (0, tX.MU)(t),
        subtext: s,
        iconLeft: () => (0, i.jsx)(ej.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, nQ.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: l ? a : void 0,
    });
}
function nZ(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, nH._)(e);
    return "today" === t
        ? ep.intl.formatToPlainString(ep.t.ZxxHIO, { timeString: i })
        : ep.intl.formatToPlainString(ep.t["9OFjSe"], { dateString: n, timeString: i });
}
var nK = n(996988),
    n$ = n(656884);
function nY(e) {
    let { currentUser: t, onClose: n, setPopoutRef: l, highlightBadge: r, openedAt: o, className: u } = e,
        d = __OVERLAY__,
        h = (0, tL.Ay)(t.id, void 0),
        { analyticsLocations: f } = (0, w.Ay)(O.A.USER_PROFILE_ACCOUNT_POPOUT),
        g = (0, tD.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 }),
        { ref: x, height: E } = (0, eb.Ay)(),
        { isHoveringOrFocusing: v, isHovering: T } = (0, e8.A)(x);
    s.useEffect(() => {
        l?.(x.current);
    }, [x, l]),
        s.useEffect(
            () => (tT.A.setState({ isOpen: !0 }), () => tT.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1 })),
            [],
        );
    let _ = (0, c.bG)([t6.A], () => t6.A.getStatus(t.id)),
        N = nZ(t3.CY.useSetting()),
        j = (0, c.bG)([t5.A], () => t5.A.hidePersonalInformation),
        S = (0, tE.kB)(),
        y = t3.Q_.useSetting(),
        R = (function (e) {
            let t = t3.CY.useSetting(),
                n = (0, tE.kB)(),
                s = t3.Jr.useSetting();
            function l(i) {
                let s = nZ(t);
                if (e === i && null != s) return s;
                switch (i) {
                    case tr.clD.DND:
                        return n ? ep.intl.string(ep.t.day5A6) : ep.intl.string(ep.t["tq/fMK"]);
                    case tr.clD.INVISIBLE:
                        return ep.intl.string(ep.t.zPc6Mc);
                    default:
                        return;
                }
            }
            let a = (0, i.jsx)(i.Fragment, {
                    children: nW.map((t) => {
                        let { duration: n, label: s } = t;
                        return (0, i.jsx)(
                            t7.Dr,
                            {
                                id: `${e}-${n}`,
                                label: s(),
                                action: () => {
                                    (0, tE.ES)(!0, n);
                                },
                                dontCloseOnAction: !0,
                            },
                            n ?? nq,
                        );
                    }),
                }),
                r = nz({ status: tr.clD.ONLINE, currentStatus: e }),
                o = nz({ status: tr.clD.IDLE, currentStatus: e, description: l(tr.clD.IDLE) }),
                u = nz({ status: tr.clD.DND, currentStatus: e, description: l(tr.clD.DND) }),
                c = nz({ status: tr.clD.INVISIBLE, currentStatus: e, description: l(tr.clD.INVISIBLE) });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    r,
                    (0, i.jsx)(t7.bX, {}, "menu-separator-statuses"),
                    o,
                    u,
                    c,
                    n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(t7.bX, {}, "menu-separator-statuses"),
                                  (0, i.jsx)(
                                      t7.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: ep.intl.string(ep.t.gJRnwK),
                                          iconLeft: eS.a,
                                          leadingAccessory: { type: "icon", icon: eS.a },
                                          badge: { text: ep.intl.string(ep.t.ApAu9f) },
                                          subtext:
                                              null != s && "0" !== s
                                                  ? ep.intl.format(ep.t.BWD8fs, {
                                                        endTime: new Date(Number(s)).toLocaleString(
                                                            ep.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : ep.intl.string(ep.t["Br1q+x"]),
                                          action: () => {
                                              (0, tE.ES)(!n);
                                          },
                                          dontCloseOnAction: !0,
                                          children: a,
                                      },
                                      "quiet-mode",
                                  ),
                              ],
                          })
                        : null,
                ],
            });
        })(_),
        I = (function (e) {
            let t = (0, c.bG)([ni.default], () => ni.default.getCurrentUser()),
                n = (0, c.bG)([t5.A], () => t5.A.hidePersonalInformation),
                s = (0, c.bG)([nt.A], () => (0, t_.M)(nt.A.theme)),
                { multiAccountUsers: l } = (0, nr.K)(),
                a = l.map((l) => {
                    let a = new nn.A(l),
                        r = a.id === t?.id,
                        o = l.tokenStatus === na.U.INVALID,
                        u = n ? null : `#${a.discriminator}`;
                    return (0, i.jsx)(
                        t7.Dr,
                        {
                            id: a.id,
                            focusedClassName: nc.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: nc.ci,
                                    children: [
                                        (0, i.jsx)(m.eu, {
                                            src: a.getAvatarURL(void 0, 40),
                                            size: p._3.SIZE_24,
                                            "aria-label": l.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: nc.DD,
                                            children: [
                                                (0, i.jsx)(ee.E, {
                                                    className: nc.gE,
                                                    variant: "text-sm/normal",
                                                    children: tX.Ay.getUserTag(a, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !a.hasUniqueUsername() &&
                                                    (0, i.jsx)(ee.E, {
                                                        className: nc.df,
                                                        variant: "text-sm/normal",
                                                        children: u,
                                                    }),
                                            ],
                                        }),
                                        r &&
                                            (0, i.jsx)(t9.y, {
                                                size: "sm",
                                                color: t
                                                    ? t8.A.unsafe_rawColors.WHITE.css
                                                    : t8.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && s) || (t && !s)
                                                        ? t8.A.unsafe_rawColors.BRAND_500.css
                                                        : t8.A.unsafe_rawColors.WHITE.css,
                                                className: nc.s0,
                                            }),
                                        o &&
                                            (0, i.jsx)(ne.E, {
                                                color: t8.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && s) || (t && !s)
                                                        ? t8.A.unsafe_rawColors.BRAND_500.css
                                                        : t8.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: nc.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, no.A)();
                                else {
                                    var n;
                                    (n = a.id) !== t?.id &&
                                        (ns.default.track(tr.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tr.JJy.USER_PROFILE },
                                        }),
                                        nl.Mx(n, void 0, nu.WX.MULTI_ACCOUNT_MENU));
                                }
                            },
                        },
                        a.id,
                    );
                });
            return (
                a.push(
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(t7.bX, {}),
                            (0, i.jsx)(t7.Dr, {
                                id: "manage-accounts",
                                label: ep.intl.string(ep.t.WbFpq4),
                                action: () => {
                                    e?.(), (0, no.A)();
                                },
                            }),
                        ],
                    }),
                ),
                a
            );
        })(n),
        b = (0, tP.A)({ analyticsLocations: f }),
        M = (0, tS.TW)(t),
        U = s.useRef(null),
        k = s.useRef(null),
        P = (0, tg.A)(h?.profileFrame?.skuId, "UserProfileAccountPopout"),
        D = (0, tf.A)(h?.profileFrame?.skuId);
    (0, tA.A)({ skuId: h?.profileFrame?.skuId, openedAt: o, context: g, analyticsLocations: f });
    let L = s.useRef((0, tT.A)((e) => e.shouldRenderTenureLevelUp)),
        F = s.useMemo(() => (0, tC.A)(), []),
        [G, V] = s.useState(() => tT.A.getState().shouldRenderTenureLevelUp);
    function B(e) {
        n?.(), (0, tF.openUserProfileModal)({ customStatusPrompt: F, sourceAnalyticsLocations: f, ...g, ...e });
    }
    s.useEffect(() => {
        let e = setTimeout(() => {
            V(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let H = h?.widgets != null && h.widgets.length > 0,
        Q = s.useCallback(() => {
            n();
        }, [n]),
        W = s.useCallback(() => {
            b(), Q();
        }, [b, Q]),
        { enabled: q } = eM.A.useConfig({ location: "UserProfileAccountPopout" }),
        z = s.useId();
    return (0, i.jsx)(w.f5, {
        value: f,
        children: (0, i.jsx)(tD.of, {
            value: g,
            openedAt: o,
            fetchStartedAt: h?.fetchStartedAt,
            fetchEndedAt: h?.fetchEndedAt,
            isLoaded: h?.isLoaded,
            children: (0, i.jsxs)(eT.l, {
                ref: x,
                "aria-labelledby": z,
                className: a()(eP.jC, u),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(A.A, {
                        children: (0, i.jsx)(eE.H, { id: z, children: ep.intl.string(ep.t["5fWB8U"]) }),
                    }),
                    (0, i.jsxs)(eE.F, {
                        children: [
                            (0, i.jsx)(nB, { displayProfile: h, handleOpenUserProfileModal: B, height: E }),
                            (0, i.jsxs)(tz.A, {
                                className: eP.BK,
                                user: t,
                                displayProfile: h,
                                themeType: nK.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: n$.wx,
                                        children: [
                                            (0, i.jsx)(tB.A, { user: t, displayProfile: h, themeType: nK.d.POPOUT }),
                                            (0, i.jsx)(tG.A, {
                                                user: t,
                                                displayProfile: h,
                                                themeType: nK.d.POPOUT,
                                                onOpenProfile: d ? void 0 : B,
                                            }),
                                            (0, i.jsx)(t1.A, {
                                                ref: U,
                                                user: t,
                                                themeType: nK.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: F,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(e_.Ip, {
                                        className: eP.rf,
                                        style: { pointerEvents: G ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(tQ.A, { userId: t.id }),
                                            (0, i.jsx)(tZ.Ay, {
                                                className: eP.eF,
                                                user: t,
                                                displayName: t4.Ay.getName(void 0, null, t),
                                                onClickName: d ? void 0 : B,
                                                displayNameTrailing: (0, i.jsx)(t0, { user: t, isVisible: v }),
                                                pronouns: h?.pronouns,
                                                trailing: (0, i.jsx)(tV.A, {
                                                    displayProfile: h,
                                                    themeType: nK.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != r ? (e) => e === r : void 0,
                                                    shouldGlowTenureBadge: L.current,
                                                }),
                                            }),
                                            (0, i.jsx)(tH.A, { isPremiumUser: M, onInteraction: n }),
                                            (0, i.jsx)(t2.A, {
                                                userId: t.id,
                                                userBio: h?.bio,
                                                hidePersonalInformation: j,
                                                onClose: n,
                                            }),
                                            H &&
                                                (0, i.jsx)(tq.A, {
                                                    user: t,
                                                    widgets: h?.widgets,
                                                    onOpenUserProfileModal: B,
                                                }),
                                            (0, i.jsx)(tW.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: B,
                                                onClose: n,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: eP.T_,
                                                children: [
                                                    (0, i.jsx)(tz.A.Overlay, {
                                                        className: eP.g0,
                                                        children: (0, i.jsxs)(eF, {
                                                            children: [
                                                                (0, i.jsx)(eL, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: ep.intl.string(ep.t.s5vZlQ),
                                                                    icon: eN.R,
                                                                    onClick: W,
                                                                    ref: k,
                                                                }),
                                                                (0, i.jsx)(eL, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(ny, {}),
                                                                    sublabel: null != N && N,
                                                                    icon: () =>
                                                                        (0, i.jsx)(ej.nW, { status: _, size: 12 }),
                                                                    trailing:
                                                                        (S || _ === tr.clD.DND) &&
                                                                        (0, i.jsx)(eS.a, { size: "xxs" }),
                                                                    renderSubmenu: eC.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(eD, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: eP.hQ,
                                                                                  "aria-label": ep.intl.string(
                                                                                      ep.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: R,
                                                                              });
                                                                          },
                                                                    onClick: eC.Fr
                                                                        ? () => {
                                                                              n(),
                                                                                  (0, C.openModalLazy)(
                                                                                      () =>
                                                                                          new Promise((e) =>
                                                                                              e((e) => {
                                                                                                  let {
                                                                                                      onClose: t,
                                                                                                      ...n
                                                                                                  } = e;
                                                                                                  return (0, i.jsx)(
                                                                                                      ev.d,
                                                                                                      {
                                                                                                          onClose: t,
                                                                                                          ...n,
                                                                                                          size: "sm",
                                                                                                          "aria-label":
                                                                                                              ep.intl.string(
                                                                                                                  ep.t[
                                                                                                                      "3Uj+2p"
                                                                                                                  ],
                                                                                                              ),
                                                                                                          children: (0,
                                                                                                          i.jsx)(ey.W, {
                                                                                                              "data-menu-migrated":
                                                                                                                  !0,
                                                                                                              navId: "set-status-submenu-mobile-web",
                                                                                                              variant:
                                                                                                                  "fixed",
                                                                                                              "aria-label":
                                                                                                                  ep.intl.string(
                                                                                                                      ep
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
                                                                                                                  R,
                                                                                                          }),
                                                                                                      },
                                                                                                  );
                                                                                              }),
                                                                                          ),
                                                                                  );
                                                                          }
                                                                        : void 0,
                                                                }),
                                                                (0, i.jsx)(tm, { onClose: n, popoutContainerRef: x }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(tz.A.Overlay, {
                                                        className: eP.g0,
                                                        children: (0, i.jsxs)(eF, {
                                                            children: [
                                                                (0, i.jsx)(eL, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eR.r,
                                                                    label: ep.intl.string(ep.t.oMNyYN),
                                                                    onClick: () => {
                                                                        n(), (0, no.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(eD, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": ep.intl.string(ep.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: I,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    tY.p5 &&
                                                                    y &&
                                                                    (0, i.jsx)(eL, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eI.L,
                                                                        label: ep.intl.string(ep.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            (0, tY.C)(t.id), n();
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
                                        !L.current &&
                                        (0, i.jsx)(tp.A, { skuId: h.profileEffect.skuId, isHovering: T }),
                                    null != P && (0, i.jsx)(tx.A, { frame: P, fadeIn: D }),
                                ],
                            }),
                            q && (0, i.jsx)(n_, { targetElementRef: k, onClose: n }),
                            (0, i.jsx)(tU, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var nX = n(371912),
    nJ = n(655116),
    n0 = n(106531),
    n1 = n(148411),
    n2 = n(342296),
    n3 = n(852712),
    n6 = n(167579),
    n5 = n(173660),
    n4 = n(451409),
    n8 = n(763827),
    n7 = n(499156),
    n9 = n(731854);
let ie = 2.5 * eX.A.Millis.SECOND,
    it = +eX.A.Millis.HOUR;
var ii = n(459838),
    is = n(485296);
let il = 3 * eX.A.Millis.SECOND,
    ia = +eX.A.Millis.DAY;
var ir = n(616356),
    io = n(734057),
    iu = n(629016),
    ic = n(186111),
    id = n(967198),
    ih = n(486020),
    im = n(625494),
    ip = n(536194),
    ig = n(19575),
    iA = n(994314),
    ix = n(485599),
    iC = n(338854);
function iE(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: s, position: l, shouldShow: a = !0, children: r } = e,
        o = (0, eG.sw)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r,
            a && o
                ? (0, i.jsx)(iC.H, {
                      targetElementRef: t,
                      title: ep.intl.string(tu.default.Qn21R6),
                      body: ep.intl.string(tu.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: l,
                      caretConfig: { align: "center" },
                      action: {
                          text: ep.intl.string(ep.t.RzWDqY),
                          onClick: function () {
                              n(em.i.TAKE_ACTION), s();
                          },
                      },
                      onRequestClose: function () {
                          n(em.i.USER_DISMISS);
                      },
                  })
                : null,
        ],
    });
}
var iv = n(626584),
    iT = n(757036),
    i_ = n(531685),
    iN = n(259065),
    ij = n(864386);
let iS = new iv.A("DisplayNameStylesFlywheelCoachmark");
function iy(e) {
    let { markAsDismissed: t, targetElementRef: n, children: l } = e,
        { analyticsLocations: a } = (0, w.Ay)(),
        r = (0, s.useRef)(null),
        o = (0, c.bG)([i_.A], () => i_.A.isFocused()),
        u = (0, iT.L)(tR.PremiumTypes.TIER_2),
        d = (0, s.useCallback)(() => {
            t(em.i.TAKE_ACTION),
                (0, el.openUserSettings)(es.X.PROFILE_PANEL, { analyticsLocations: a }, () => {
                    (0, iN.L)({ analyticsLocations: a });
                });
        }, [t, a]),
        h = (0, s.useCallback)(() => {
            t(em.i.USER_DISMISS);
        }, [t]);
    (0, s.useEffect)(() => {
        o && r.current?.paused ? r.current?.play().catch(iS.error) : o || r.current?.pause();
    }, [o]);
    let m = u ? [ep.intl.string(ij.default.TyUdka)] : [ep.intl.string(ij.default.dluV0R)];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            l,
            (0, i.jsx)(nd.A, {
                targetElementRef: n,
                shouldShow: !0,
                onRequestClose: h,
                align: "right",
                position: "top",
                caretConfig: { align: "center" },
                gradientColor: "nitro-pink",
                graphic: {
                    type: "video",
                    ref: r,
                    src: "https://cdn.discordapp.com/assets/content/5d90dc1e412ad3aa0b39088fba382025e32b718d7bf5d797512be9701b5f53b4.webm",
                    aspectRatio: "21/9",
                    loop: !0,
                },
                size: "lg",
                badge: { type: "beta", variant: "expressive" },
                title: ep.intl.string(ij.default.cYwrp8),
                body: m,
                actions: [{ text: ep.intl.string(ep.t["4P5I8V"]), variant: "primary", onClick: d }],
            }),
        ],
    });
}
var iR = n(131607),
    iI = n(45780),
    ib = n(696451),
    iM = n(71393),
    iO = n(685073),
    iw = n(228366);
let iU = { lastSeenInfos: {} },
    ik = iU;
class iP extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        ik = e ?? iU;
    }
    getState() {
        return ik;
    }
    getGuildLastSeenInfo(e) {
        return ik.lastSeenInfos[e] ?? null;
    }
}
let iD = new iP(iw.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        ik.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        ik = iU;
    },
});
var iL = n(116833),
    iF = n(514661);
let iG = new iv.A("GuildTagAvailableCoachmark");
function iV(e) {
    let t = (0, c.bG)([iM.A], () => iM.A.getGuild(e.guildId));
    function n(n) {
        t?.profile?.tag != null &&
            iw.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n);
    }
    let { isAdopting: s, onAdoptTag: l, onEditProfile: a } = (0, iF.A)(t?.id ?? null, () => n(em.i.TAKE_ACTION));
    if (null == t || !(0, iO.q0)(t))
        return iG.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: ep.intl.string(ep.t.jwEaiX), loading: s, onClick: l, variant: "primary" },
        { text: ep.intl.string(ep.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(nd.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iL.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: ep.intl.formatToPlainString(ep.t["m/Tc3n"], { guildName: t.name }),
                body: ep.intl.string(ep.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(em.i.USER_DISMISS),
            }),
        ],
    });
}
function iB(e) {
    let t = (0, c.bG)([iM.A], () => iM.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: s, onAdoptTag: l, onEditProfile: a } = (0, iF.A)(t?.id ?? null, () => n(em.i.TAKE_ACTION));
    if (null == t || !(0, iO.q0)(t))
        return iG.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: ep.intl.string(ep.t.jwEaiX), loading: s, onClick: l, variant: "primary" },
        { text: ep.intl.string(ep.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(nd.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iL.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: ep.intl.formatToPlainString(ep.t.VFqnyU, { guildName: t.name }),
                body: ep.intl.string(ep.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(em.i.USER_DISMISS),
            }),
        ],
    });
}
var iH = n(843010),
    iQ = n(764231),
    iW = n(425713);
function iq(e) {
    let { groupName: t, targetElementRef: n } = e,
        s = tI(),
        l = (0, c.bG)([eu.Ay], () => eu.Ay.useReducedMotion),
        a = (0, tT.A)((e) => e.isOpen),
        r = (0, iH.G)();
    return l || null == s || a || r
        ? null
        : (0, i.jsx)(nR.zJ, {
              contentType: d.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: l } = e;
                  return (0, i.jsx)(iz, {
                      recentlyLeveledTenureBadge: s,
                      markAsDismissed: l,
                      targetElementRef: n,
                      shouldShow: t === d.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function iz(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: l, shouldShow: a } = e,
        r = tR.sp.indexOf(t),
        o = (0, iW.I)(tR.sp[r > 0 ? r - 1 : r]).ambient,
        u = (0, s.useCallback)(() => {
            n(em.i.TAKE_ACTION),
                tT.A.setState({ shouldRenderTenureLevelUp: !0 }),
                im._.dispatch(tr.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n]),
        c = (0, s.useCallback)(() => {
            n(em.i.USER_DISMISS);
        }, [n]),
        d = tR.VD[t],
        h = ep.intl.formatToPlainString(ep.t.ewkaVR, {
            timeMilestone: (0, iQ.T)(d.id, d.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        m = [{ text: ep.intl.string(ep.t.RzWDqY), variant: "primary", onClick: u }];
    return (0, i.jsx)(nd.A, {
        targetElementRef: l,
        onRequestClose: c,
        shouldShow: a,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: ep.intl.string(ep.t.VoDxsV),
        body: h,
        actions: m,
    });
}
function iZ(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, nX.c9)(),
        s = null != e.targetElementRef.current && t && n,
        [l, a] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, iI.G$)(d.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? tr.dJq),
                s = (0, c.bG)([iM.A, ni.default, ib.Ay], () => {
                    if (null === e) return !1;
                    let t = iM.A.getGuild(e);
                    if (void 0 === t || !(0, iO.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                    let n = ni.default.getCurrentUser();
                    if (
                        void 0 === n ||
                        (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                    )
                        return !1;
                    let i = ib.Ay.getMember(e, n.id);
                    return null != i && !i.isPending;
                }, [e]);
            return (0, iR.ww)(s && n && !i ? [d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? tr.eGj);
        })(e.guildId, { shouldShow: s }),
        [r, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                s = i?.identityGuildId ?? null,
                l = (0, c.bG)([iD], () => (null === s ? null : iD.getGuildLastSeenInfo(s))),
                a = (0, c.bG)([iM.A], () => iM.A.getGuild(s)?.profile?.tag),
                r = null != a && i?.identityGuildId === s && i?.tag === null,
                o = null != s && l?.tag === a,
                u = null !== s && r && !o;
            return (0, iR.Wl)(u && n ? d.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: s });
    return s
        ? l === d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(iB, {
                  guildId: e.guildId,
                  onDismiss: a,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : r === d.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(iV, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(iq, { groupName: em.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(nR.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: em.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: s } = t;
                                switch (n) {
                                    case d.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK:
                                        return (0, i.jsx)(iy, {
                                            markAsDismissed: s,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case d.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, i.jsx)(iE, {
                                            markAsDismissed: s,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: eH.p,
                                            children: e.children,
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
var iK = n(615675),
    i$ = n(900797),
    iY = n(847374),
    iX = n(348858),
    iJ = n(617354),
    i0 = n(829773),
    i1 = n(42473),
    i2 = n(490704),
    i3 = n(967194);
function i6(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: l,
            onClick: r,
            iconForeground: o,
            nameplate: u,
            shouldShowOutputDeviceChangedTooltip: c,
            dismissTooltips: d,
        } = e,
        h = t || n,
        {
            Component: m,
            play: p,
            events: { onMouseEnter: g, onMouseLeave: A },
        } = (0, iX.I)(h ? "undeafen" : "deafen"),
        x = n ? iK.T : m,
        { name: C } = (0, ex.x5)(n9.oh.AUDIO_OUTPUT),
        E = (0, iJ.A)(t, n, l),
        { analyticsLocations: v } = (0, w.Ay)(O.A.AUDIO_OUTPUT_BUTTON),
        T = s.useRef(null);
    return (
        s.useEffect(() => () => p(), [h, p]),
        (0, i.jsx)(w.f5, {
            value: v,
            children: (0, i.jsx)(f.Y, {
                targetElementRef: T,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        d(),
                        (0, i.jsx)(w.f5, {
                            value: v,
                            children: (0, i.jsx)(i0.A, {
                                onInteraction: (0, G.s)("AudioDeviceMenu", O.A.ACCOUNT),
                                onClose: t,
                                renderOutputDevices: !0,
                                renderOutputVolume: !0,
                                renderSettingsButton: !0,
                            }),
                        })
                    );
                },
                position: "top",
                align: "left",
                animation: f.Y.Animation.FADE,
                spacing: 4,
                children: (e, t) => {
                    let { onClick: s } = e,
                        { isShown: d } = t,
                        m = d ? i$.t : iY.a;
                    return (0, i.jsxs)("div", {
                        ref: T,
                        className: a()(i2.Lh, { [i2.v8]: h, [i2.q6]: d }),
                        children: [
                            (0, i.jsx)(i1.A, {
                                "aria-checked": h,
                                "aria-label": ep.intl.string(ep.t.wjcRFX),
                                className: i2.eT,
                                disabled: l,
                                icon: (0, i.jsx)(x, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: h ? t8.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: h ? i3.o : void 0,
                                innerClassName: a()({ [i3.T]: n }),
                                onClick: r,
                                onContextMenu: s,
                                onMouseEnter: g,
                                onMouseLeave: A,
                                plated: null != u,
                                redGlow: h,
                                role: "switch",
                                tooltipText: E,
                            }),
                            (0, i.jsx)(i1.A, {
                                className: a()(i2.UT, { [i2.q6]: d }),
                                disabled: l,
                                icon: (0, i.jsx)(m, {
                                    className: i2.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: h ? t8.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: s,
                                onContextMenu: s,
                                plated: null != u,
                                redGlow: h,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? ep.intl.formatToPlainString(ep.t["f+DDY/"], { outputDeviceName: C })
                                    : void 0,
                                tooltipShouldShow: !d,
                                tooltipText: c
                                    ? ep.intl.format(ep.t["f+DDY/"], { outputDeviceName: C })
                                    : ep.intl.string(ep.t.aA4Vce),
                                "aria-label": c
                                    ? ep.intl.formatToPlainString(ep.t["f+DDY/"], { outputDeviceName: C })
                                    : ep.intl.string(ep.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var i5 = n(666654),
    i4 = n(523875),
    i8 = n(993719);
let i7 = {};
class i9 extends c.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return i7[e] ?? !1;
    }
}
let se = new i9(iw.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        i7[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        i7[t] = !1;
    },
});
var st = n(362823),
    sn = n(980923),
    si = n(224585),
    ss = n(949341),
    sl = n(973324);
function sa(e) {
    let t,
        {
            selfMute: n,
            serverMute: l,
            suppress: r,
            awaitingRemote: o,
            iconForeground: u,
            onMouseEnter: d,
            onMouseLeave: h,
            onClick: m,
            nameplate: p,
            shouldShowSpeakingWhileMutedTooltip: g,
            shouldShowSpeakingWhilePTTTooltip: A,
            shouldShowInputDeviceChangedTooltip: x,
            shouldShowPTTJoinTooltip: C,
            dismissTooltips: E,
            speaking: v,
        } = e,
        { showPTTIconIndicator: T } = n7.A.useConfig({ location: "MicrophoneButton" }),
        _ = (0, c.bG)([n4.Ay], () => n4.Ay.getMode() === n9.TB.PUSH_TO_TALK),
        N = (0, c.bG)([n4.Ay], () => n4.Ay.getSettings().modeOptions.shortcut),
        j = (0, c.bG)([se], () => se.getIsTutorialActive(st.v.MUTE_TUTORIAL)),
        S = (0, c.bG)([n8.A], () => null != n8.A.getChannelId()),
        { name: y } = (0, ex.x5)(n9.oh.AUDIO_INPUT),
        { enabledInputProfiles: R } = (0, n3.d)({ location: "MicrophoneButton" }),
        I = s.useRef(null),
        b = n || r || l,
        M = (0, i4.L)(b ? "unmute" : "mute"),
        { analyticsLocations: U } = (0, w.Ay)(O.A.AUDIO_INPUT_BUTTON),
        { Component: k, events: P, play: D } = M,
        L = l || r ? i5.O : k;
    s.useEffect(() => () => D(), [b, D]);
    let F = (0, sn.A)(n, l, r, o);
    t = g
        ? { tooltipType: "green_void_do_not_use", tooltipText: ep.intl.string(ep.t["29gnR4"]), tooltipForceOpen: !0 }
        : C || A
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: ep.intl.format(ep.t.c1qUOQ, { keybind: e0.dI(N).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: F };
    let V = T && _ && S,
        B = b ? t8.A.colors.ICON_VOICE_MUTED : "currentColor",
        H = s.useCallback(() => {
            m(), j && i8.N(st.v.MUTE_TUTORIAL);
        }, [m, j]);
    return (0, i.jsxs)(w.f5, {
        value: U,
        children: [
            (0, i.jsx)(f.Y, {
                targetElementRef: I,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        E(),
                        (0, i.jsx)(w.f5, {
                            value: U,
                            children: (0, i.jsx)(i0.A, {
                                onInteraction: (0, G.s)("AudioDeviceMenu", O.A.ACCOUNT),
                                onClose: t,
                                maybeRenderPTTCheckbox: !0,
                                renderInputProfiles: R.length > 0,
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
                animation: f.Y.Animation.FADE,
                spacing: 4,
                children: (e, n) => {
                    let { onClick: s } = e,
                        { isShown: l } = n,
                        r = l ? i$.t : iY.a;
                    return (0, i.jsxs)("div", {
                        ref: I,
                        className: a()(i2.Lh, { [i2.v8]: b, [i2.q6]: l }),
                        children: [
                            (0, i.jsx)(i1.A, {
                                "aria-checked": b,
                                "aria-label": ep.intl.string(ep.t.w4m945),
                                className: i2.eT,
                                disabled: o,
                                icon: (0, i.jsx)(L, { size: "custom", width: 20, height: 20, color: B, className: u }),
                                onClick: H,
                                onContextMenu: s,
                                onMouseEnter: () => {
                                    d(), P.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    h(), P.onMouseLeave();
                                },
                                plated: null != p,
                                redGlow: b,
                                role: "switch",
                                ...t,
                                children: V ? (0, i.jsx)("div", { className: a()(ss.U, { [ss.z]: v }) }) : null,
                            }),
                            (0, i.jsx)(i1.A, {
                                "aria-label": x
                                    ? ep.intl.formatToPlainString(ep.t["18wnuD"], { inputDeviceName: y })
                                    : ep.intl.string(ep.t.fRzCbB),
                                className: a()(i2.UT, { [i2.q6]: l }),
                                disabled: o,
                                icon: (0, i.jsx)(r, {
                                    className: i2.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: B,
                                }),
                                onClick: s,
                                onContextMenu: s,
                                onMouseEnter: d,
                                onMouseLeave: h,
                                plated: null != p,
                                redGlow: b,
                                tooltipType: x ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: x,
                                tooltipPositionKey: x
                                    ? ep.intl.formatToPlainString(ep.t["18wnuD"], { inputDeviceName: y })
                                    : void 0,
                                tooltipShouldShow: !l,
                                tooltipText: x
                                    ? ep.intl.format(ep.t["18wnuD"], { inputDeviceName: y })
                                    : ep.intl.string(ep.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(nd.A, {
                targetElementRef: I,
                shouldShow: j,
                graphic: { type: "image", src: sl.A },
                onRequestClose: () => {
                    i8.N(st.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: ep.intl.string(si.default.VG4zAf),
                body: ep.intl.string(si.default["8VIRzR"]),
            }),
        ],
    });
}
var sr = n(935399),
    so = n(505312),
    su = n(848847),
    sc = n(88001),
    sd = n(466919),
    sh = n(438705);
function sm(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: l } = e,
        a = s.useCallback(() => {
            l(), (0, el.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL);
        }, [l]);
    return (0, i.jsx)(nd.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: sh },
        shouldShow: n,
        title: ep.intl.format(sd.default.bx8sR9, { premiumGroupProductName: (0, sc.DP)() }),
        body: ep.intl.format(sd.default.Pw4OFZ, { premiumGroupProductName: (0, sc.DP)() }),
        onRequestClose: l,
        actions: [{ text: ep.intl.string(sd.default.DD26QR), onClick: a }],
    });
}
var sp = n(873298),
    sf = n(840387);
function sg(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        l = (0, sf.Z)(),
        a = t3.KP.useSetting(),
        r = l && a !== sp.KP.FRIENDS_AND_ALL_GUILDS,
        o = (0, s.useCallback)(() => {
            t(em.i.TAKE_ACTION), (0, el.openUserSettings)(es.X.PROFILE_PRIVACY_CATEGORY);
        }, [t]),
        u = (0, s.useCallback)(() => {
            t(em.i.USER_DISMISS);
        }, [t]),
        c = r
            ? a === sp.KP.FRIENDS_ONLY
                ? ep.intl.string(ep.t["/hogEy"])
                : ep.intl.string(ep.t["6hEfm1"])
            : ep.intl.string(ep.t.bnNxW1);
    return (0, i.jsx)(nd.A, {
        targetElementRef: n,
        shouldShow: !0,
        onRequestClose: u,
        align: "center",
        position: "top",
        caretConfig: { align: "end" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/0710b4aac8339f9213d3c43a8976071c26abe2b3236ccd8817180ce465f33673.svg",
        },
        title: ep.intl.string(ep.t.Ve4nS1),
        body: c,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: ep.intl.string(ep.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
function sA(e) {
    let t,
        n,
        {
            webBuildOverride: l,
            onClick: a,
            onContextMenu: r,
            dismissibleContents: o,
            iconForeground: u,
            nameplate: c,
        } = e,
        h = s.useRef(null),
        [m, p] = s.useState(!1);
    (0, sr.Ay)(() => {
        function e() {
            return p(!0);
        }
        return (
            im._.subscribe(tr.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                im._.unsubscribe(tr.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let f = s.useCallback(() => {
        p(!1), a();
    }, [a]);
    t = null != l ? ep.intl.formatToPlainString(ep.t.Gzh6ZP, { webBuildOverride: l.id }) : ep.intl.string(ep.t.cduTBL);
    let g = ez.Z,
        A = (0, so.w)();
    return (
        (g = null != l ? su.H : A.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(i1.A, {
                    ref: h,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: f,
                    onContextMenu: r,
                    "aria-label": ep.intl.string(ep.t.cduTBL),
                    icon: (0, i.jsx)(g, { size: "refresh_sm", color: "currentColor", className: u }),
                    ...A.events,
                    plated: null != c,
                }),
                (0, i.jsx)(sm, { targetElementRef: h, shouldShow: m, onDismiss: () => p(!1) }),
                (0, i.jsx)(nR.Ay, {
                    contentTypes: o,
                    groupName: em.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === d.M.PRIVATE_PROFILE_COACHMARK
                            ? (0, i.jsx)(sg, { markAsDismissed: n, targetElementRef: h })
                            : null;
                    },
                }),
            ],
        })
    );
}
var sx = n(489902);
let sC = ig.Ay.getEnableHardwareAcceleration() ? m.Js : m.eu,
    sE = 2.5 * eX.A.Millis.SECOND,
    sv = 2 * eX.A.Millis.MINUTE,
    sT = 2 * eX.A.Millis.MINUTE,
    s_ = 5 * eX.A.Millis.SECOND;
function sN(e) {
    let {
            ref: t,
            speaking: n,
            voiceDb: l = -1 / 0,
            streaming: r,
            currentUser: o,
            status: u,
            handleClick: c,
            handleMouseLeave: d,
            renderNameTag: h,
            nameplate: m,
            avatarDecoration: A,
            "data-jump-section": x,
        } = e,
        C = s.useRef(null),
        E = t ?? C,
        T = (0, ih.F_)({ avatarDecoration: A, size: (0, B.Te)(p._3.SIZE_32) }),
        _ = (0, K.A)(),
        {
            updateOpenPopoutRef: j,
            highlightBadge: S,
            setHighlightBadge: y,
        } = (function () {
            let e = s.useRef(null),
                t = s.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, i] = s.useState(),
                [l, a] = s.useState(!1);
            return (
                (0, N.A)(() => a(!0), 750),
                s.useEffect(() => {
                    function t(t) {
                        let { highlightBadge: n } = t;
                        null != n && i(n), e.current?.();
                    }
                    return (
                        im._.subscribe(tr.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            im._.unsubscribe(tr.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: l ? n : void 0, setHighlightBadge: i }
            );
        })(),
        R = (0, Q.K)(m);
    return null == o
        ? null
        : (0, i.jsx)(v.A, {
              object: tr.ZSU.AVATAR,
              children: (0, i.jsx)(n2.A, {
                  user: o,
                  targetElementRef: E,
                  clickTrap: !0,
                  preload: () =>
                      (0, n1.A)(o.id, o.getAvatarURL(void 0, n2.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: s } = e;
                      return (0, i.jsx)(nY, {
                          currentUser: o,
                          highlightBadge: S,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: s,
                          className: sx.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: f.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      d(), y(void 0);
                  },
                  children: (e) => {
                      j(e);
                      let { onMouseEnter: t, onMouseDown: s, ...d } = e;
                      return (0, i.jsxs)("div", {
                          ref: E,
                          style: R,
                          onMouseEnter: t,
                          onMouseDown: s,
                          onClick: (t) => {
                              e.onClick?.(t), c?.(t);
                          },
                          className: a()(sx.Q9, { [sx.ZQ]: null != m }),
                          children: [
                              (0, i.jsx)(g.D, {
                                  ...d,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), c?.(t);
                                  },
                                  "aria-label": ep.intl.string(ep.t["5fWB8U"]),
                                  focusProps: { ringTarget: E },
                                  className: sx.$n,
                                  "data-jump-section": x,
                              }),
                              (0, i.jsx)(sC, {
                                  size: p._3.SIZE_32,
                                  src: o.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: T,
                                  status: r ? tr.clD.STREAMING : u,
                                  isSpeaking: n,
                                  voiceDb: l,
                                  className: sx.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: sx.oM, children: h(_) }),
                          ],
                      });
                  },
              }),
          });
}
class sj extends s.PureComponent {
    speakingWhileMutedTooltipTimeout = new h.Ep();
    speakingWhilePTTTooltipTimeout = new h.Ep();
    speakingWhilePTTInactiveBackoff = new u.A(sT, null, !1);
    lastSpeakingWhileMutedNotificationTime = void 0;
    lastSpeakingWhilePTTNotificationTime = void 0;
    state = {
        hovered: !1,
        shouldShowNametagTooltip: !1,
        shouldShowSpeakingWhileMutedTooltip: !1,
        shouldShowSpeakingWhilePTTTooltip: !1,
        hoveringOnMute: !1,
    };
    containerRef = s.createRef();
    avatarWithPopoutRef = s.createRef();
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, speakingWhilePTTInactive: n, occluded: i } = e,
            { speakingWhileMuted: s, occluded: l, speakingWhilePTTInactive: a } = this.props;
        l !== i && this.handleOccludedChanged(),
            s !== t && this.handleSpeakingWhileMutedChanged(),
            a !== n && this.handleSpeakingWhilePTTChanged();
    }
    componentWillUnmount() {
        this.speakingWhileMutedTooltipTimeout.stop(), this.speakingWhilePTTTooltipTimeout.stop();
    }
    handleToggleSelfMute = () => {
        let { serverMute: e, suppress: t, selfMute: n } = this.props;
        (0, L.A)(e, t, tr.JJy.ACCOUNT_PANEL), (0, F.X)(O.A.ACCOUNT, F.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, D.A)(e, tr.JJy.ACCOUNT_PANEL), (0, F.X)(O.A.ACCOUNT, F.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            n8.A.isConnected() ? (0, el.openUserSettings)(es.X.VOICE_AND_VIDEO_PANEL) : (0, el.openUserSettings)();
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("79717"),
                    n.e("49905"),
                    n.e("41831"),
                    n.e("14144"),
                    n.e("97407"),
                    n.e("74791"),
                    n.e("93315"),
                    n.e("8813"),
                    n.e("78008"),
                    n.e("25610"),
                    n.e("42548"),
                    n.e("44190"),
                    n.e("41916"),
                    n.e("74387"),
                    n.e("16227"),
                    n.e("26543"),
                    n.e("95059"),
                    n.e("37634"),
                    n.e("812"),
                    n.e("85190"),
                    n.e("64622"),
                    n.e("47728"),
                    n.e("87089"),
                    n.e("51452"),
                    n.e("70298"),
                    n.e("82041"),
                    n.e("97238"),
                    n.e("30541"),
                    n.e("74187"),
                    n.e("62279"),
                    n.e("67454"),
                    n.e("42157"),
                    n.e("85148"),
                    n.e("4676"),
                    n.e("53727"),
                    n.e("57034"),
                    n.e("78220"),
                    n.e("85948"),
                    n.e("52777"),
                    n.e("52443"),
                    n.e("11266"),
                    n.e("12124"),
                    n.e("18712"),
                    n.e("99099"),
                    n.e("98892"),
                    n.e("97690"),
                    n.e("87103"),
                    n.e("46934"),
                    n.e("52865"),
                    n.e("87960"),
                    n.e("57215"),
                    n.e("22535"),
                    n.e("31481"),
                    n.e("41603"),
                    n.e("36017"),
                    n.e("33238"),
                    n.e("14254"),
                    n.e("27973"),
                    n.e("98795"),
                    n.e("65123"),
                    n.e("23549"),
                    n.e("83566"),
                    n.e("69722"),
                    n.e("80083"),
                    n.e("28510"),
                    n.e("78104"),
                    n.e("68323"),
                    n.e("45687"),
                    n.e("21194"),
                    n.e("99272"),
                    n.e("20993"),
                    n.e("34161"),
                    n.e("69164"),
                    n.e("47173"),
                    n.e("92116"),
                    n.e("84200"),
                    n.e("33217"),
                    n.e("80050"),
                    n.e("37502"),
                    n.e("68316"),
                    n.e("18078"),
                    n.e("42535"),
                    n.e("44819"),
                    n.e("72376"),
                    n.e("32802"),
                    n.e("32317"),
                    n.e("84209"),
                    n.e("40706"),
                    n.e("71453"),
                    n.e("56588"),
                    n.e("98902"),
                    n.e("81725"),
                    n.e("27655"),
                    n.e("61448"),
                    n.e("16607"),
                    n.e("50462"),
                    n.e("69848"),
                    n.e("6619"),
                    n.e("19019"),
                    n.e("89014"),
                    n.e("37870"),
                    n.e("93083"),
                    n.e("77335"),
                    n.e("67943"),
                    n.e("40775"),
                    n.e("38847"),
                    n.e("41185"),
                    n.e("21149"),
                    n.e("73515"),
                    n.e("6129"),
                    n.e("47334"),
                    n.e("11171"),
                    n.e("44448"),
                    n.e("19464"),
                    n.e("88429"),
                    n.e("1324"),
                    n.e("3210"),
                    n.e("63251"),
                    n.e("25235"),
                    n.e("20750"),
                    n.e("88522"),
                    n.e("31333"),
                    n.e("96388"),
                    n.e("47623"),
                    n.e("39328"),
                    n.e("79886"),
                    n.e("79086"),
                    n.e("21293"),
                    n.e("37398"),
                    n.e("72196"),
                    n.e("1844"),
                    n.e("95820"),
                    n.e("78852"),
                    n.e("52264"),
                    n.e("44400"),
                    n.e("70676"),
                    n.e("50814"),
                    n.e("77756"),
                    n.e("98444"),
                    n.e("91064"),
                    n.e("8261"),
                    n.e("23017"),
                    n.e("23045"),
                    n.e("87121"),
                    n.e("90003"),
                    n.e("52307"),
                    n.e("61229"),
                    n.e("66721"),
                    n.e("91533"),
                    n.e("62965"),
                    n.e("5288"),
                    n.e("64345"),
                    n.e("25695"),
                    n.e("83705"),
                    n.e("95595"),
                    n.e("50692"),
                    n.e("40759"),
                    n.e("8445"),
                    n.e("61725"),
                    n.e("13844"),
                    n.e("83185"),
                    n.e("58388"),
                    n.e("73923"),
                    n.e("95932"),
                    n.e("92884"),
                    n.e("33474"),
                    n.e("26142"),
                    n.e("39281"),
                    n.e("69152"),
                    n.e("82097"),
                    n.e("53079"),
                    n.e("33885"),
                    n.e("46819"),
                    n.e("85355"),
                    n.e("27289"),
                    n.e("82895"),
                    n.e("15086"),
                    n.e("56821"),
                    n.e("59800"),
                    n.e("33422"),
                    n.e("50037"),
                    n.e("51173"),
                    n.e("79555"),
                    n.e("16113"),
                    n.e("29205"),
                    n.e("16328"),
                    n.e("51437"),
                    n.e("84287"),
                    n.e("79247"),
                    n.e("17773"),
                    n.e("81619"),
                    n.e("24143"),
                    n.e("59046"),
                    n.e("40650"),
                    n.e("44792"),
                    n.e("25006"),
                    n.e("43453"),
                    n.e("8225"),
                    n.e("96137"),
                    n.e("40065"),
                    n.e("82662"),
                    n.e("97421"),
                    n.e("6095"),
                    n.e("30006"),
                    n.e("19402"),
                    n.e("68201"),
                    n.e("13111"),
                    n.e("38939"),
                    n.e("3376"),
                    n.e("13554"),
                    n.e("26132"),
                    n.e("93103"),
                    n.e("28367"),
                    n.e("81647"),
                    n.e("34552"),
                    n.e("76602"),
                    n.e("91763"),
                    n.e("21921"),
                    n.e("9233"),
                    n.e("40402"),
                    n.e("36877"),
                    n.e("72963"),
                    n.e("52511"),
                    n.e("7575"),
                    n.e("39970"),
                    n.e("76418"),
                    n.e("93766"),
                    n.e("40258"),
                    n.e("24303"),
                    n.e("43437"),
                    n.e("66495"),
                    n.e("71210"),
                    n.e("8555"),
                    n.e("86127"),
                    n.e("21957"),
                    n.e("88599"),
                    n.e("75842"),
                    n.e("36863"),
                    n.e("98329"),
                    n.e("68403"),
                    n.e("72789"),
                    n.e("88342"),
                    n.e("6949"),
                    n.e("28095"),
                    n.e("46070"),
                    n.e("17249"),
                    n.e("71273"),
                    n.e("21200"),
                    n.e("54622"),
                    n.e("9640"),
                    n.e("62422"),
                    n.e("28203"),
                    n.e("25949"),
                    n.e("90365"),
                    n.e("89088"),
                    n.e("52548"),
                    n.e("17989"),
                    n.e("89421"),
                    n.e("35027"),
                    n.e("67861"),
                    n.e("1518"),
                    n.e("79049"),
                    n.e("98965"),
                    n.e("47626"),
                    n.e("23354"),
                    n.e("82644"),
                    n.e("53984"),
                    n.e("37977"),
                    n.e("43780"),
                    n.e("20590"),
                    n.e("65437"),
                    n.e("80830"),
                    n.e("79745"),
                    n.e("3589"),
                    n.e("80854"),
                    n.e("35395"),
                    n.e("45413"),
                    n.e("46844"),
                    n.e("63235"),
                    n.e("12193"),
                    n.e("86672"),
                    n.e("32756"),
                    n.e("64850"),
                    n.e("70104"),
                    n.e("2564"),
                    n.e("71477"),
                    n.e("19558"),
                    n.e("58946"),
                    n.e("35313"),
                    n.e("14285"),
                    n.e("48330"),
                    n.e("95752"),
                    n.e("3332"),
                    n.e("8362"),
                    n.e("41678"),
                    n.e("72401"),
                    n.e("52617"),
                    n.e("4744"),
                    n.e("2698"),
                    n.e("95152"),
                    n.e("37021"),
                    n.e("81314"),
                    n.e("71430"),
                    n.e("501"),
                    n.e("86243"),
                    n.e("85794"),
                    n.e("67837"),
                    n.e("35321"),
                    n.e("73384"),
                    n.e("82783"),
                    n.e("32209"),
                    n.e("9371"),
                    n.e("13658"),
                    n.e("87478"),
                    n.e("50033"),
                    n.e("39171"),
                    n.e("36564"),
                    n.e("44780"),
                    n.e("92513"),
                    n.e("83952"),
                    n.e("52229"),
                    n.e("3998"),
                    n.e("93438"),
                    n.e("95340"),
                    n.e("5557"),
                    n.e("62718"),
                    n.e("61156"),
                    n.e("91671"),
                    n.e("89916"),
                    n.e("92295"),
                    n.e("60773"),
                    n.e("68763"),
                    n.e("16767"),
                    n.e("58273"),
                    n.e("8018"),
                    n.e("6841"),
                    n.e("20930"),
                    n.e("59957"),
                    n.e("38056"),
                    n.e("26001"),
                    n.e("29666"),
                    n.e("14591"),
                    n.e("52111"),
                    n.e("20379"),
                    n.e("57458"),
                    n.e("59466"),
                    n.e("69747"),
                    n.e("8829"),
                    n.e("1243"),
                    n.e("75133"),
                    n.e("19193"),
                    n.e("15920"),
                    n.e("58164"),
                    n.e("3930"),
                    n.e("96804"),
                    n.e("3663"),
                    n.e("28850"),
                    n.e("95998"),
                    n.e("54241"),
                    n.e("27659"),
                    n.e("77487"),
                    n.e("37490"),
                    n.e("42234"),
                    n.e("21930"),
                    n.e("89523"),
                    n.e("74678"),
                    n.e("29260"),
                    n.e("81189"),
                    n.e("66580"),
                    n.e("83230"),
                    n.e("98972"),
                    n.e("12682"),
                    n.e("203"),
                    n.e("39103"),
                    n.e("4774"),
                    n.e("49629"),
                    n.e("78601"),
                    n.e("26294"),
                    n.e("80407"),
                    n.e("42726"),
                    n.e("34546"),
                    n.e("10943"),
                    n.e("32737"),
                    n.e("41701"),
                    n.e("4098"),
                    n.e("21455"),
                    n.e("60989"),
                    n.e("755"),
                    n.e("79435"),
                    n.e("68083"),
                    n.e("48730"),
                    n.e("71467"),
                    n.e("60003"),
                    n.e("49013"),
                    n.e("30167"),
                    n.e("51892"),
                    n.e("94607"),
                    n.e("41838"),
                    n.e("18233"),
                    n.e("33448"),
                    n.e("3710"),
                    n.e("45830"),
                    n.e("8979"),
                    n.e("37937"),
                    n.e("33771"),
                    n.e("77602"),
                    n.e("82178"),
                    n.e("38260"),
                    n.e("46039"),
                    n.e("95602"),
                    n.e("34409"),
                    n.e("96325"),
                    n.e("22644"),
                    n.e("29569"),
                    n.e("83321"),
                    n.e("96480"),
                    n.e("46430"),
                    n.e("73611"),
                    n.e("79006"),
                    n.e("94888"),
                    n.e("89541"),
                    n.e("44727"),
                    n.e("46149"),
                    n.e("5871"),
                    n.e("27462"),
                    n.e("86546"),
                    n.e("22455"),
                    n.e("60816"),
                    n.e("68031"),
                    n.e("97162"),
                    n.e("10147"),
                    n.e("6627"),
                    n.e("43256"),
                    n.e("60536"),
                    n.e("73566"),
                    n.e("7408"),
                    n.e("46327"),
                    n.e("28011"),
                    n.e("15057"),
                    n.e("45419"),
                    n.e("75284"),
                    n.e("64926"),
                    n.e("50541"),
                    n.e("47999"),
                    n.e("37886"),
                    n.e("59587"),
                    n.e("61750"),
                    n.e("20803"),
                    n.e("95782"),
                    n.e("61137"),
                    n.e("27687"),
                    n.e("55839"),
                    n.e("31997"),
                    n.e("18710"),
                    n.e("86629"),
                    n.e("98384"),
                    n.e("71492"),
                    n.e("91531"),
                    n.e("24564"),
                    n.e("34428"),
                    n.e("54876"),
                    n.e("39721"),
                    n.e("19631"),
                    n.e("82384"),
                    n.e("76892"),
                    n.e("16799"),
                    n.e("52694"),
                    n.e("43148"),
                    n.e("71811"),
                    n.e("89572"),
                    n.e("38249"),
                    n.e("40976"),
                    n.e("85216"),
                    n.e("83774"),
                    n.e("83102"),
                    n.e("80890"),
                    n.e("2552"),
                    n.e("89588"),
                    n.e("24084"),
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
                    n.e("81754"),
                    n.e("52850"),
                    n.e("33049"),
                    n.e("21403"),
                    n.e("43456"),
                    n.e("44491"),
                ]).then(n.bind(n, 907206));
                return (t) =>
                    (0, i.jsx)(e, { ...t, onClose: E.Z_, onInteraction: (0, G.s)("UserSettingsMenu", O.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, G.s)("AudioDeviceMenu", O.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("60536"), n.e("78827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, n3.d)({ location: "Account" });
                    return (0, i.jsx)(w.f5, {
                        value: t,
                        children: (0, i.jsx)(e, {
                            onClose: E.Z_,
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
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("60536"), n.e("78827")]).then(n.bind(n, 385318));
                return () =>
                    (0, i.jsx)(w.f5, {
                        value: t,
                        children: (0, i.jsx)(e, {
                            onClose: E.Z_,
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
                occluded: s,
                shouldShowPTTJoinTooltip: l,
                deviceChangedTooltipType: a,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            o =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > sv;
        i
            ? r ||
              !e ||
              t ||
              n ||
              s ||
              !o ||
              null != a ||
              l ||
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                  (this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(sE, () =>
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
                occluded: s,
                shouldShowPTTJoinTooltip: l,
                deviceChangedTooltipType: a,
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
              s ||
              !o ||
              null != a ||
              l ||
              this.setState({ shouldShowSpeakingWhilePTTTooltip: !0 }, () => {
                  (this.lastSpeakingWhilePTTNotificationTime = performance.now()),
                      this.speakingWhilePTTInactiveBackoff.fail(),
                      this.speakingWhilePTTTooltipTimeout.start(sE, () =>
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
                currentUser: s,
                status: l,
                userTag: a,
                voiceChannel: r,
            } = this.props;
        if (null == s) return null;
        if ((0, j.A)({ activities: t, status: l, applicationStream: n, voiceChannel: r }))
            return (0, i.jsxs)(M.A, {
                hoverText: a,
                forceHover: e,
                children: [
                    (0, i.jsx)(A.A, { children: tX.Ay.humanizeStatus(l) }),
                    (0, i.jsx)(S.A, {
                        user: s,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: r,
                        textClassName: sx.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let o = t?.find((e) => {
            let { type: t } = e;
            return t === tr.$pd.CUSTOM_STATUS;
        });
        return null != o
            ? (0, i.jsxs)(M.A, {
                  hoverText: a,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(A.A, { children: tX.Ay.humanizeStatus(l) }),
                      (0, i.jsx)(z.A, { activity: o, emojiClassName: sx.Zg, className: sx.WO }),
                  ],
              })
            : null != l && l !== tr.clD.UNKNOWN && s.hasUniqueUsername()
              ? (0, i.jsx)(M.A, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(b, { text: tX.Ay.humanizeStatus(l) }),
                })
              : a;
    }
    renderNameTag = (e) => {
        let { currentUser: t, username: n } = this.props;
        return null == t
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", {
                          className: sx.eW,
                          children: (0, i.jsx)(ix.A, {
                              className: a()({ [sx.e8]: null != e }),
                              children: (0, i.jsx)(Y.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? $.G.ANIMATED : $.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: sx.XP,
                          children: (0, i.jsx)(iA.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let { currentUser: t, dismissibleContents: n } = this.props;
        return null == t
            ? null
            : (0, i.jsx)(iZ, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: t,
                  targetElementRef: this.avatarWithPopoutRef,
                  additionalDCs: n.avatar,
                  children: (0, i.jsx)(sN, {
                      ...this.props,
                      ref: this.avatarWithPopoutRef,
                      handleMouseLeave: this.handleMouseLeave,
                      renderNameTag: this.renderNameTag,
                      "data-jump-section": e["data-jump-section"],
                  }),
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: s, isListenAlongVisible: l } = this.props,
            r = this.state.hovered;
        return null == e
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(x.sk, {
                          children: (e) =>
                              (0, i.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: a()(sx.kL, { [sx.UG]: null != n, [sx.bc]: !s, [sx.G5]: l }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(q.A, { nameplate: t, hovered: r, placement: W.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(sS, {
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
                      (0, i.jsx)(eA, {}),
                  ],
              });
    }
}
function sS(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: s,
            serverMute: l,
            serverDeaf: a,
            suppress: r,
            shouldShowSpeakingWhileMutedTooltip: o,
            shouldShowSpeakingWhilePTTTooltip: u,
            webBuildOverride: c,
            handleMouseEnterMute: d,
            handleMouseLeaveMute: h,
            handleToggleSelfDeaf: m,
            handleToggleSelfMute: p,
            handleInputAudioContextMenu: f,
            handleOutputAudioContextMenu: g,
            handleOpenAccountSettings: A,
            handleOpenSettingsContextMenu: x,
            dismissibleContents: C,
            nameplate: E,
            accountContainerRef: v,
            deviceChangedTooltipType: T,
            shouldShowPTTJoinTooltip: _ = !1,
            dismissTooltips: N,
            speaking: j,
        } = e,
        S = (0, Q.K)(E);
    return (0, i.jsxs)("div", {
        className: sx.Uo,
        style: S,
        children: [
            (0, i.jsx)(sa, {
                accountContainerRef: v,
                selfMute: n,
                serverMute: l,
                suppress: r,
                awaitingRemote: s,
                onMouseEnter: d,
                onMouseLeave: h,
                onClick: p,
                onContextMenu: f,
                iconForeground: null != E ? sx.t4 : void 0,
                nameplate: E,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowInputDeviceChangedTooltip: !o && "input" === T,
                shouldShowSpeakingWhilePTTTooltip: u,
                shouldShowPTTJoinTooltip: _,
                dismissTooltips: N,
                speaking: j,
            }),
            (0, i.jsx)(i6, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: m,
                onContextMenu: g,
                awaitingRemote: s,
                iconForeground: null != E ? sx.t4 : void 0,
                nameplate: E,
                shouldShowOutputDeviceChangedTooltip: "output" === T,
                dismissTooltips: N,
            }),
            (0, i.jsx)(sA, {
                webBuildOverride: c,
                onClick: A,
                onContextMenu: x,
                dismissibleContents: C.settings,
                iconForeground: null != E ? sx.t4 : void 0,
                nameplate: E,
            }),
        ],
    });
}
function sy(e) {
    let t = (0, c.bG)([n8.A], () => null != n8.A.getChannelId()),
        n = (0, ex.Py)(e),
        i = s.useRef(new h.Ep()),
        [l, a] = s.useState(!1);
    s.useEffect(() => {
        t &&
            n &&
            (a(!0),
            i.current.start(s_, () => {
                a(!1);
            }));
    }, [t, n]);
    let r = s.useCallback(() => {
        a(!1), i.current.stop();
    }, []);
    return (
        (0, _.l0)(() => {
            i.current.stop();
        }),
        { shouldShowTooltip: l, dismissTooltip: r }
    );
}
function sR() {
    let e = (0, c.bG)([ni.default], () => ni.default.getCurrentUser()),
        t = (0, c.bG)([nC.default], () => nC.default.getId()),
        {
            activities: n,
            streaming: l,
            status: a,
        } = (0, c.cf)([nN.A], () => {
            let e = nN.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === tr.$pd.STREAMING;
                    }),
                status: nN.A.getStatus(),
            };
        }),
        r = (0, c.bG)([ir.A], () => ir.A.getAnyStreamForUser(t)),
        u = (0, T.A)({ userId: t }),
        m = (0, c.bG)([is.A], () => is.A.getVoiceVolume(t)),
        p = tX.Ay.useUserTag(e, { decoration: "never" }),
        f = (0, c.bG)([n8.A, io.A], () => {
            let e = n8.A.getChannelId();
            return null != e ? io.A.getChannel(e) : null;
        }),
        { mute: g, selfMute: A, suppress: x } = (0, n5.A)(f),
        { selfDeaf: E, deaf: v } = (0, n6.A)(f),
        N = (0, c.bG)([U.A], () => ((0, k.kK)() ? U.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        j = (0, c.bG)([n4.Ay], () => n4.Ay.getSpeakingWhileMuted()),
        S = (0, c.bG)([P.A], () => P.A.isFullscreenInContext()),
        y = (0, c.bG)([ic.A], () => ic.A.hasLayers()),
        R = (0, C.useModalsStore)(C.hasAnyModalOpenSelector) || y || ip.P.isDisallowPopupsSet() || S,
        I = (0, c.bG)([X.default], () => null != X.default.getAwaitingRemoteSessionInfo()),
        b = (0, c.bG)([id.A], () => id.A.getGuildId()),
        M = e?.avatarDecoration,
        D = (0, V.A)(M),
        L = tX.Ay.useName(e) ?? "",
        { analyticsLocations: F } = (0, w.Ay)(O.A.ACCOUNT),
        G = (0, H.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: B } = (0, nX.c9)(),
        Q = (0, c.bG)([nJ.A, ni.default, iu.A], () => {
            let e,
                t = nJ.A.getSyncingWith(),
                n = nJ.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = o()(Array.from(iu.A.getParty(e) ?? []))
                        .map((e) => ni.default.getUser(e))
                        .filter(nv.Vq)
                        .value()),
                i.length > 1
            );
        }),
        W = { avatar: [], settings: [] },
        q = (0, n0.lX)("AccountCoachmark"),
        z = (0, Z.ux)("AccountCoachmark");
    !R &&
        (z && W.avatar.push(d.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
        q && W.settings.push(d.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: K, dismissTooltip: $ } = sy(n9.oh.AUDIO_INPUT),
        { shouldShowTooltip: Y, dismissTooltip: J } = sy(n9.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: ee, dismissTooltip: et } = (function () {
            let [e, t] = s.useState(!1),
                n = (0, c.bG)([n4.Ay], () => n4.Ay.getMode() === n9.TB.PUSH_TO_TALK),
                i = (0, c.bG)(
                    [n8.A],
                    () => null != n8.A.getChannelId() && (n8.A.getDuration() ?? Number.MAX_VALUE) < ie,
                ),
                [l, a] = s.useState(!1),
                { showPTTJoinTooltip: r } = n7.A.useConfig({ location: "usePTTJoinTooltip" }),
                o = s.useRef(new h.Ep()),
                u = s.useRef(new h.Ep());
            s.useEffect(() => {
                if (i && n && !e) {
                    if ((n7.A.getConfig({ location: "usePTTJoinTooltip:couldDisplayTooltip" }), !r)) return;
                    a(!0),
                        t(!0),
                        u.current.start(it, () => {
                            t(!1);
                        }),
                        o.current.start(ie, () => {
                            a(!1);
                        });
                }
                i || a(!1);
            }, [i, n, r, e]);
            let d = s.useCallback(() => {
                a(!1), o.current.stop();
            }, []);
            return (
                (0, _.l0)(() => {
                    o.current.stop(), u.current.stop();
                }),
                { shouldShowTooltip: l, dismissTooltip: d }
            );
        })(),
        en = (function () {
            let { showPTTSpeakingIndicator: e } = n7.A.useConfig({ location: "useSpeakingWhilePTT" }),
                [t, n] = s.useState(!1),
                i = (0, c.bG)([n4.Ay], () => n4.Ay.getMode() === n9.TB.PUSH_TO_TALK),
                l = (0, c.bG)([n8.A], () => n8.A.getRTCConnectionId()),
                a = (0, c.bG)([n4.Ay], () => {
                    let e = n4.Ay.getModeOptions().updatedAt;
                    return null != e && Date.now() - e < ia;
                }),
                r = s.useRef(new h.Ep());
            return (
                s.useEffect(() => {
                    n(!1);
                }, [l]),
                s.useEffect(() => {
                    let t = 0,
                        s = r.current;
                    function o(e, i) {
                        let l = (i & n9.ME.VOICE) === n9.ME.VOICE,
                            a = is.A.isCurrentUserPTTActive();
                        l && !a
                            ? ++t >= 6 &&
                              (n(!0),
                              s.start(il, () => {
                                  n(!1);
                              }))
                            : (t = 0);
                    }
                    return (
                        a && e && i && null != l && n4.Ay.getMediaEngine().on(ii.bg.VoiceActivity, o),
                        () => {
                            n4.Ay.getMediaEngine().removeListener(ii.bg.VoiceActivity, o), s.stop();
                        }
                    );
                }, [e, i, a, l]),
                t
            );
        })(),
        ei = s.useMemo(() => (K ? "input" : Y ? "output" : void 0), [K, Y]),
        es = s.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        $();
                        break;
                    case "output":
                        J();
                }
            },
            [$, J],
        );
    return (0, i.jsx)(w.f5, {
        value: F,
        children: (0, i.jsx)(sj, {
            currentUser: e,
            username: L,
            activities: n,
            applicationStream: r,
            voiceChannel: f,
            dismissibleContents: W,
            userTag: p,
            occluded: R,
            selfDeaf: E,
            selfMute: A,
            serverDeaf: v,
            serverMute: g,
            speaking: u,
            voiceDb: m,
            speakingWhileMuted: j,
            speakingWhilePTTInactive: en,
            status: a,
            streaming: l,
            suppress: x,
            webBuildOverride: N,
            awaitingRemote: I,
            nameplate: G,
            selectedGuildId: b,
            avatarDecoration: D,
            isQuestBarEmpty: B,
            isListenAlongVisible: Q,
            deviceChangedTooltipType: ei,
            onDismissDeviceChangedTooltip: () => es(ei),
            shouldShowPTTJoinTooltip: ee,
            dismissPTTJoinTooltip: et,
        }),
    });
}
