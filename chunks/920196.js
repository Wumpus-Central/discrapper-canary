n.d(t, { g: () => lI, A: () => lw }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
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
    j = n(964486),
    _ = n(220839),
    N = n(397244),
    S = n(394871),
    y = n(922139),
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
    w = n(793574),
    O = n(688810),
    U = n(521502),
    D = n(380610),
    P = n(313961),
    k = n(18235),
    L = n(183184),
    F = n(384059),
    G = n(480890),
    V = n(601255),
    B = n(562819),
    H = n(449582),
    Q = n(351952),
    W = n(88686),
    z = n(174755),
    q = n(302223),
    Z = n(609425),
    K = n(922301),
    $ = n(660184),
    Y = n(643501),
    X = n(534514),
    J = n(834730),
    ee = n(789645),
    et = n(826673),
    en = n(750506),
    ei = n(780964),
    el = n(766075),
    es = n(417146),
    ea = n(552122),
    er = n(717421),
    eo = n(775602),
    eu = n(993843);
let ec = { mass: 10, tension: 550, friction: 140 };
function ed(e) {
    let { className: t, pageMultiplier: n } = e,
        s = (0, c.bG)([eo.Ay], () => eo.Ay.useReducedMotion),
        [r, u] = l.useState({ x: 0, y: 0 }),
        d = l.useMemo(
            () =>
                o().throttle((e) => {
                    s || u({ x: (window.innerWidth - e.pageX * n) / 90, y: (window.innerHeight - e.pageY * n) / 90 });
                }, 20),
            [n, s],
        );
    l.useEffect(() => (window.addEventListener("mousemove", d), () => window.removeEventListener("mousemove", d)), [d]);
    let [h, m] = (0, er.z)(() => ({ x: 0, y: 0, config: ec }));
    return (
        l.useEffect(() => {
            m({ x: r.x, y: r.y });
        }, [r.x, r.y, m]),
        (0, i.jsx)(y.animated.div, {
            style: { transform: (0, y.to)([h.x, h.y], (e, t) => `translate3d(${e}px, ${t}px, 0)`) },
            className: a()(eu.T, t),
        })
    );
}
var eh = n(49999),
    em = n(375708),
    ep = n(275883);
function ef(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: l } = e,
        s = ea.A.useIsEligible(),
        a = (0, et.JZ)(t),
        r = null != n,
        o = null != l ? { color: l } : void 0,
        { analyticsLocations: u } = (0, O.Ay)(w.A.HOLIDAY_COACHMARK),
        c = (e) => {
            (0, et.Dr)(t, { dismissAction: e });
        },
        d = () => {
            (0, el.openUserSettings)(ei.X.NOTIFICATIONS_PANEL, { analyticsLocations: u }), c(eh.i.TAKE_ACTION);
        };
    return s && !a
        ? (0, i.jsx)(en.Ay, {
              children: (0, i.jsxs)("div", {
                  className: ep.iE,
                  style: { backgroundColor: r ? n : void 0 },
                  children: [
                      !r &&
                          (0, i.jsxs)("div", {
                              className: ep.o5,
                              children: [
                                  (0, i.jsx)(ed, { className: ep.iL, pageMultiplier: 5 }),
                                  (0, i.jsx)("div", { className: ep.Np }),
                              ],
                          }),
                      (0, i.jsx)("div", { className: ep.c8 }),
                      (0, i.jsxs)("div", {
                          className: ep.Qs,
                          children: [
                              (0, i.jsxs)("div", {
                                  children: [
                                      (0, i.jsx)(X.D, {
                                          variant: "heading-md/bold",
                                          color: null != o ? void 0 : "always-white",
                                          style: o,
                                          children: em.intl.string(em.t["6CxPoB"]),
                                      }),
                                      (0, i.jsx)(J.E, {
                                          variant: "text-xs/normal",
                                          color: "always-white",
                                          children: em.intl.format(em.t.IVzJ8G, {
                                              settingsHook: (e, t) =>
                                                  (0, i.jsx)(
                                                      g.D,
                                                      {
                                                          tag: "span",
                                                          className: ep.nf,
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
                                  className: ep.l2,
                                  onClick: () => c(eh.i.USER_DISMISS),
                                  children: (0, i.jsx)(ee.P, { color: "currentColor", size: "xs" }),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
function eg() {
    return null == es.A.coachmarkDismissibleContent
        ? null
        : (0, i.jsx)(ef, {
              dismissibleContent: es.A.coachmarkDismissibleContent,
              backgroundColor: es.A.coachmarkBackgroundColor,
              specialTextColor: es.A.coachmarkSpecialTextColor,
          });
}
var eA = n(74848),
    ex = n(607399),
    eC = n(707554),
    eE = n(224640),
    ev = n(305866),
    eT = n(364522),
    ej = n(22231),
    e_ = n(133171),
    eN = n(780338);
if (21552 != n.j) var C = n(192308);
var eS = n(980707),
    ey = n(26137),
    eR = n(473935),
    eI = n(765671),
    eb = n(783041),
    eM = n(457965),
    ew = n(176781),
    eO = n(812993),
    eU = n(320448),
    eD = n(993401),
    eP = n(447349);
function ek(e) {
    return (0, i.jsx)("div", {
        className: eP.wE,
        children: (0, i.jsx)(eS.W, {
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
            icon: s,
            label: a,
            sublabel: r,
            trailing: o,
            renderSubmenu: u,
            ref: c,
            submenuTargetElementRef: d,
            submenuAlign: h,
        } = e,
        m = null != n,
        p = (0, eD.rE)({ action: t, onClick: n }),
        [A, x] = l.useState(!1),
        E = l.useRef(null),
        v = c ?? E,
        T = null != u,
        j = T && m,
        _ = l.useCallback(() => {
            x(!0);
        }, []),
        N = l.useCallback(() => {
            (0, C.hasAnyModalOpen)() || x(!1);
        }, []),
        S = () =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", {
                        className: eP.iA,
                        children: (0, i.jsx)(s, { size: "xs", color: "currentColor" }),
                    }),
                    (0, i.jsxs)("div", {
                        className: eP.$H,
                        children: [
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(J.E, {
                                        color: "currentColor",
                                        variant: "text-sm/medium",
                                        className: eP.W1,
                                        children: a,
                                    }),
                                    (0, i.jsx)(J.E, { color: "currentColor", variant: "text-xs/medium", children: r }),
                                ],
                            }),
                            o,
                        ],
                    }),
                ],
            }),
        y = (e) => {
            let t;
            return (
                (t = j
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(g.D, { className: eP.ef, onClick: p, children: S() }),
                              (0, i.jsx)(g.D, {
                                  className: eP.ap,
                                  "aria-label": em.intl.string(em.t.PdRCRg),
                                  ...e,
                                  onClick: _,
                                  children: (0, i.jsx)(eU._, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      })
                    : T
                      ? (0, i.jsxs)(g.D, {
                            className: eP.ef,
                            ...e,
                            onClick: _,
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
        };
    return T
        ? (0, i.jsx)("li", {
              className: eP.j$,
              onMouseEnter: _,
              onMouseLeave: N,
              children: (0, i.jsx)(f.Y, {
                  targetElementRef: d ?? v,
                  align: h,
                  spacing: 0,
                  renderPopout: u,
                  shouldShow: A,
                  onRequestClose: N,
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
    eB = n(271597),
    eH = n(990078),
    eQ = n(315710),
    eW = n(475358),
    ez = n(408278),
    eq = n(625903),
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
    e4 = n(280483),
    e5 = n(890856),
    e8 = n(713517),
    e7 = n(609174),
    e9 = n(619744);
let te = (e) => {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        s = (0, e7.Y_)(),
        a = l.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), t?.(), (0, eB.p)({ initialEditingClipId: s.id });
            },
            [s, t],
        );
    return (0, i.jsx)(e$.$, {
        onClick: a,
        icon: ej.R,
        variant: n,
        size: "sm",
        text: em.intl.string(em.t.bt75uw),
        fullWidth: !0,
    });
};
var tt = n(82716),
    tn = n(585579),
    ti = n(226870),
    tl = n(285072),
    ts = n(316305);
let ta = l.memo(function (e) {
    let { clip: t, isNew: n, onClose: s, className: r } = e,
        o = l.useRef(null),
        { isHoveringOrFocusing: u } = (0, e8.A)(o),
        c = l.useCallback(() => {
            s?.(), (0, eB.p)({ initialEditingClipId: t.id });
        }, [t.id, s]);
    return (0, i.jsx)(e7.Cl, {
        clip: t,
        children: (0, i.jsx)(e5.s, {
            ref: o,
            "aria-label": em.intl.string(em.t.bt75uw),
            onClick: c,
            className: a()(ts.Z1, r),
            children: (0, i.jsxs)(ti.d, {
                isStatic: !0,
                children: [
                    n && (0, i.jsx)(eO.Lp, { className: ts.Ad, text: em.intl.string(em.t.y2b7CA) }),
                    (0, i.jsxs)(tl.h, {
                        isVisible: u,
                        className: ts.Lw,
                        children: [
                            (0, i.jsxs)("div", {
                                className: ts.mY,
                                children: [(0, i.jsx)(tt.z, {}), (0, i.jsx)(e9.k, {})],
                            }),
                            (0, i.jsxs)("div", {
                                className: ts.E_,
                                children: [
                                    (0, i.jsx)(te, { onBeforeEdit: s, variant: "overlay-secondary" }),
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
    let { onOpenGallery: t, onOpenSettings: n, onClose: s, setPopoutRef: a } = e;
    (0, e4.A)();
    let r = (0, c.yK)([eV.Ay], () => eV.Ay.getClips()),
        o = (0, c.bG)([eV.Ay], () => eV.Ay.getPendingClips()),
        u = (0, c.bG)([eV.Ay], () => eV.Ay.getSettings()),
        d = (0, c.bG)([eV.Ay], () => eV.Ay.getNewClipIds()),
        h = (0, e2.aJ)("ClipsPopout"),
        m = (0, c.bG)([eV.Ay], () => eV.Ay.getEnableAutoclipping()),
        p = (0, c.bG)([eY.Ay], () => eY.Ay.getKeybindForAction(tr.hCu.SAVE_CLIP)),
        f = l.useRef(null),
        g = l.useMemo(() => {
            let e = [...o, ...r].filter((e) => e.type === e1.nQ.CLIP && "" !== e.thumbnail);
            return e.sort((e, t) => t.createdAt - e.createdAt), e;
        }, [r, o]),
        A = l.useMemo(() => g.slice(0, 16), [g]),
        x = g.length > 16,
        C = null != p ? e0.dI(p.shortcut, !0) : null;
    (0, eQ.t)(f);
    let E = [
        (0, eJ.$)(u.clipsLength / eX.A.Millis.SECOND),
        (0, to.zr)(u.clipsQuality.resolution),
        em.intl.formatToPlainString(em.t.Qb44XH, { fps: u.clipsQuality.frameRate }),
    ];
    return (
        h && E.push(em.intl.string(tu.default.XWkJoi)),
        (0, i.jsxs)("div", {
            ref: (e) => {
                (f.current = e), a?.(e);
            },
            className: tc.SW,
            role: "dialog",
            "aria-label": em.intl.string(em.t.z2jK6X),
            children: [
                (0, i.jsxs)("div", {
                    className: tc.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tc.$,
                            children: [
                                (0, i.jsx)(X.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: em.intl.string(em.t.z2jK6X),
                                }),
                                null != C && (0, i.jsx)(eW.e, { className: tc.P, shortcut: C }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tc.$s,
                            children: [
                                (0, i.jsx)(eH.m, {
                                    text: em.intl.string(em.t["3D5yo/"]),
                                    children: (0, i.jsx)(ez.K, {
                                        onClick: () => n(),
                                        icon: eq.Z,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": em.intl.string(em.t["3D5yo/"]),
                                    }),
                                }),
                                (0, i.jsx)(eH.m, {
                                    text: em.intl.string(tu.default["55C2MH"]),
                                    children: (0, i.jsx)(ez.K, {
                                        onClick: () => t(),
                                        icon: ew.x,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": em.intl.string(tu.default["55C2MH"]),
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
                                l.Fragment,
                                {
                                    children: [
                                        t > 0 && (0, i.jsx)("span", { className: tc.LO, children: "\u2022" }),
                                        (0, i.jsx)(J.E, {
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
                        h &&
                            (0, i.jsx)(J.E, {
                                variant: "text-xs/semibold",
                                color: m ? "text-strong" : "text-feedback-critical",
                                tag: "span",
                                className: tc.wS,
                                children: m ? em.intl.string(tu.default.lTwKmt) : em.intl.string(tu.default.GNDqtf),
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
                              A.map((e) => (0, i.jsx)(ta, { clip: e, isNew: d.includes(e.id), onClose: s }, e.id)),
                              x &&
                                  (0, i.jsx)("div", {
                                      className: tc.qr,
                                      children: (0, i.jsx)(e$.$, {
                                          onClick: () => t(),
                                          text: em.intl.string(tu.default["55C2MH"]),
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
            (0, i.jsx)(J.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: tc.qO,
                children: em.intl.string(tu.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(J.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: tc.CZ,
                      children: em.intl.format(tu.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, i.jsx)(
                                  J.E,
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
        s = (0, eG.sw)(),
        a = (0, c.bG)([eV.Ay], () => eV.Ay.getNewClipIds().length),
        r = l.useCallback(
            (e) => {
                t(), (0, eB.p)({ initialEditingClipId: e });
            },
            [t],
        ),
        o = l.useCallback(() => {
            t(), (0, el.openUserSettings)(ei.X.CLIPS_PANEL);
        }, [t]);
    return s
        ? (0, i.jsx)(eL, {
              action: "PRESS_CLIPS",
              icon: ew.x,
              label: em.intl.string(em.t.z2jK6X),
              trailing: a > 0 ? (0, i.jsx)(eO.hV, { count: a }) : null,
              onClick: () => r(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, i.jsx)(td, { ...e, onOpenGallery: r, onOpenSettings: o, onClose: t }),
          })
        : null;
}
var tp = n(480335),
    tf = n(31956),
    tg = n(361628),
    tA = n(744808),
    tx = n(875741),
    tC = n(645507),
    tE = n(970931),
    tv = n(832248),
    tT = n(462887),
    tj = n(736653),
    t_ = n(439174),
    tN = n(428262),
    tS = n(878784),
    ty = n(788868);
function tR() {
    let e = (0, tS.Xb)(),
        t = (0, tN.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = ty.sp.length - 1; t >= 0; t--) {
        let i = ty.VD[ty.sp[t]],
            l = new Date(e);
        if ((l.setMonth(e.getMonth() + i.tenureReqNumMonths), l.setHours(l.getHours() + 30), n > l.getTime()))
            if (n - l.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let tI = {
        [ty.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [ty.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [ty.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [ty.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [ty.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [ty.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [ty.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [ty.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tb = {
        [ty.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [ty.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [ty.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [ty.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [ty.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [ty.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [ty.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [ty.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var tM = n(682165);
let tw = l.lazy(() => Promise.all([n.e("15323"), n.e("24832")]).then(n.bind(n, 748579)));
function tO() {
    let e = (0, c.bG)([eo.Ay], () => eo.Ay.useReducedMotion),
        t = (0, tv.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tR(),
                t = (0, tT.M)((0, tj.Ay)());
            if (null == e) return null;
            let n = tI[e],
                i = tb[e],
                l = {
                    currentBadge: (0, t_.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                s = ty.sp.indexOf(e);
            if (s > 0) {
                let e = ty.sp[s - 1],
                    n = tI[e];
                (l.prevBadge = (0, t_.e0)(e)), (l.prevBadgeTextGradient = t ? n?.dark : n?.light);
            }
            return l;
        })(),
        [s, a] = l.useState(null);
    return (null != n && null == s && a(n), e || !t || null == s) ? null : (0, i.jsx)(tU, { levelUpData: s });
}
function tU(e) {
    let { levelUpData: t } = e,
        n = l.useRef(null),
        s = l.useCallback(() => {
            tv.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, i.jsx)(eQ.O, {
        containerRef: n,
        children: (0, i.jsxs)("div", {
            className: tM.i,
            children: [
                (0, i.jsx)("div", {
                    className: tM.b,
                    children: (0, i.jsx)(eH.m, {
                        text: em.intl.string(em.t.cpT0Cq),
                        children: (0, i.jsx)(ez.K, {
                            icon: ee.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: s,
                            "aria-label": em.intl.string(em.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, i.jsx)(l.Suspense, { fallback: null, children: (0, i.jsx)(tw, { levelUpData: t }) }),
            ],
        }),
    });
}
var tD = n(206835),
    tP = n(183555),
    tk = n(628779),
    tL = n(999291),
    tF = n(975732),
    tG = n(718019),
    tV = n(803362),
    tB = n(915614),
    tH = n(744753),
    tQ = n(559506),
    tW = n(646986),
    tz = n(349419),
    tq = n(946356),
    tZ = n(878555),
    tK = n(624479),
    t$ = n(206845),
    tY = n(957565),
    tX = n(427262),
    tJ = n(962352);
function t0(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: l } = (0, tP.NJ)();
    return tY.p5
        ? (0, i.jsx)(t$.A, {
              text: em.intl.string(em.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: tX.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => l({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(g.D, {
                      ...e,
                      className: a()(tJ.c, { [tJ.R]: n }),
                      "aria-label": em.intl.string(em.t.y5MwJy),
                      children: (0, i.jsx)(tK.T, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var t1 = n(983495),
    t2 = n(442228),
    t3 = n(885386),
    t6 = n(290863),
    t4 = n(351906),
    t5 = n(562153),
    t8 = n(661531),
    t7 = n(477782),
    t9 = n(628284),
    ne = n(695366),
    nt = n(363195),
    nn = n(889227),
    ni = n(287809),
    nl = n(174459),
    ns = n(429707),
    na = n(274303),
    nr = n(994125),
    no = n(347853),
    nu = n(573879),
    nc = n(335020),
    nd = n(43105),
    nh = n(704824),
    nm = n(46225),
    np = n(429913),
    nf = n(379848),
    ng = n(633075),
    nA = n(735321),
    nx = n(667049),
    nC = n(606758),
    nE = n(495544),
    nv = n(403362),
    nT = n(518477);
function nj(e) {
    let { targetElementRef: t, onClose: n } = e,
        [s, a] = l.useState(!1),
        { trackUserProfileEditAction: r } = (0, tP.NJ)(),
        o = (0, c.bG)([nE.default], () => nE.default.getId()),
        u = (function () {
            let e,
                t,
                n = (0, c.bG)([nE.default], () => nE.default.getId()),
                i = (0, nx.A)(n),
                s = l.useMemo(() => i.filter((e) => e instanceof ng.R), [i]),
                a =
                    ((e = (0, eM.VA)({ location: "UserProfileAccountPopoutApplicationWidgetCoachmark" })),
                    l.useMemo(() => e?.filter((e) => e.isEligibleForEditProfileUpsell()), [e])),
                r = l.useMemo(() => a?.map((e) => e.applicationId) ?? [], [a]),
                o = ((t = (0, np.A)(r)), l.useMemo(() => t.filter(nv.Vq), [t])),
                { tokens: u, fetched: d } = (0, nh.j)(r),
                h = (0, nm.U9)(o);
            return l.useMemo(() => {
                if (null == a || null == u || !d) return null;
                let e = [],
                    t = [];
                for (let n of a) {
                    let i = u.find((e) => e.application.id === n.applicationId),
                        l = s.find((e) => e.applicationId === n.applicationId),
                        a = o.find((e) => e.id === n.applicationId),
                        r = h.find((e) => e.context.application.id === n.applicationId);
                    if (null == a) return null;
                    null != i && null == l
                        ? e.push({
                              type: "linked",
                              config: n,
                              application: a,
                              dismissibleContent: n.editProfileLinkedDc,
                          })
                        : null == i &&
                          r?.preferredFlow != null &&
                          t.push({
                              type: "unlinked",
                              config: n,
                              application: a,
                              dismissibleContent: n.editProfileUnlinkedDc,
                              authFlow: r.preferredFlow,
                          });
                }
                return [...e, ...t];
            }, [a, u, d, s, o, h]);
        })(),
        { analyticsLocations: d } = (0, O.Ay)();
    return null == u || 0 === u.length
        ? null
        : (0, i.jsx)(nf.Ay, {
              contentTypes: u.map((e) => e.dismissibleContent),
              children: (e) => {
                  let { visibleContent: l, markAsDismissed: c } = e,
                      h = u.find((e) => e.dismissibleContent === l);
                  if (null == h) return null;
                  let m = "linked" === h.type,
                      p = () =>
                          (0, tF.openUserProfileModal)({ userId: o, tabSection: nT.RP.WIDGETS }).then(() => {
                              c(eh.i.TAKE_ACTION), n();
                          });
                  return (0, i.jsx)(nd.A, {
                      targetElementRef: t,
                      position: "right",
                      gradientColor: "blue",
                      graphic:
                          null != h.config.editProfileUpsellImage
                              ? { type: "image", src: h.config.editProfileUpsellImage }
                              : void 0,
                      title: em.intl.format(em.t.TXDztH, { applicationName: h.application.name }),
                      body: m ? em.intl.string(em.t["63Kso0"]) : em.intl.string(em.t.HwXoeC),
                      onRequestClose: () => c(eh.i.USER_DISMISS),
                      actions: [
                          m
                              ? {
                                    text: em.intl.string(em.t.VSLDly),
                                    onClick: () => {
                                        a(!0),
                                            p()
                                                .then(() => {
                                                    let e;
                                                    return (
                                                        (e = new ng.R({ applicationId: h.application.id })),
                                                        void ((0, nA.Y5)(e),
                                                        r({
                                                            action: "WIDGET_ADDED",
                                                            ...e.getProfileEditAnalyticsOptions(),
                                                        }),
                                                        (0, nC.XA)(nT.jM.WIDGET_ADDED))
                                                    );
                                                })
                                                .finally(() => a(!1));
                                    },
                                    loading: s,
                                }
                              : {
                                    text: em.intl.string(em.t["DSJi3+"]),
                                    onClick: () => {
                                        h.authFlow.initiate({
                                            onConfirm: () => {
                                                a(!0), p().finally(() => a(!1));
                                            },
                                            analyticsLocations: d,
                                        });
                                    },
                                    loading: s,
                                },
                      ],
                  });
              },
          });
}
var n_ = n(661439),
    nN = n(385113),
    nS = n(188951),
    ny = n(334074),
    nR = n(90165);
function nI(e) {
    let { targetElementRef: t, onClose: s } = e,
        [a, r] = l.useState(!1),
        o = (0, c.bG)([nE.default], () => nE.default.getId()),
        { eligibleApplications: u, markAsDismissed: h } = (function () {
            let e = (0, c.yK)([nN.A], () => nN.A.getFeaturedApplicationIds());
            (0, nS.A)(e),
                l.useEffect(() => {
                    (0, n_.X)();
                }, []);
            let t = (0, c.bG)([nE.default], () => nE.default.getId()),
                n = (0, nx.A)(t),
                i = l.useMemo(() => n.filter((e) => e instanceof ng.R), [n]),
                s = (0, np.A)(e),
                a = l.useMemo(() => s.filter(nv.Vq), [s]),
                r = (0, c.cf)([nR.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = a.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = nR.A.getLastPlayedDateTime(e));
                    }
                    return t;
                }),
                o = l.useMemo(() => {
                    let e = Date.now();
                    return a.filter((t) => {
                        if (i.some((e) => e.applicationId === t.id)) return !1;
                        let n = r[t.id];
                        return null != n && e - n < 7776e6;
                    });
                }, [a, i, r]),
                { eligibleToShow: u, markAsDismissed: h } = (0, ny.hj)({
                    applications: o,
                    dismissibleContent: d.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: ny.SH,
                });
            return {
                eligibleApplications: l.useMemo(() => o.filter((e) => u.includes(e.id)), [o, u]),
                markAsDismissed: h,
            };
        })();
    return ((0, l.useEffect)(() => {
        0 !== u.length &&
            Promise.all([
                n.e("41475"),
                n.e("87028"),
                n.e("28130"),
                n.e("33063"),
                n.e("89412"),
                n.e("76631"),
                n.e("73435"),
                n.e("26943"),
                n.e("21277"),
                n.e("4460"),
                n.e("47048"),
                n.e("22274"),
                n.e("24410"),
                n.e("18240"),
                n.e("81804"),
                n.e("19393"),
                n.e("4355"),
                n.e("84764"),
                n.e("70294"),
                n.e("72451"),
                n.e("11819"),
                n.e("34784"),
                n.e("46334"),
                n.e("26963"),
                n.e("38805"),
                n.e("24554"),
                n.e("80653"),
                n.e("51692"),
                n.e("17095"),
                n.e("8981"),
                n.e("91888"),
                n.e("6324"),
                n.e("96575"),
                n.e("6162"),
                n.e("13627"),
                n.e("50748"),
                n.e("38804"),
                n.e("23924"),
                n.e("42205"),
                n.e("71091"),
                n.e("68201"),
                n.e("10471"),
                n.e("63232"),
                n.e("11301"),
                n.e("61737"),
                n.e("60235"),
                n.e("68261"),
                n.e("64827"),
                n.e("7167"),
                n.e("96643"),
                n.e("92789"),
                n.e("2368"),
                n.e("21335"),
                n.e("47834"),
                n.e("11735"),
                n.e("3932"),
                n.e("84569"),
                n.e("62156"),
                n.e("6338"),
                n.e("85404"),
                n.e("44057"),
                n.e("19455"),
                n.e("28504"),
                n.e("38251"),
                n.e("62175"),
                n.e("7743"),
                n.e("44571"),
                n.e("45959"),
                n.e("60658"),
                n.e("8304"),
                n.e("18573"),
                n.e("55936"),
                n.e("8739"),
                n.e("8434"),
                n.e("31988"),
                n.e("39667"),
                n.e("34303"),
                n.e("28866"),
                n.e("2419"),
                n.e("73122"),
                n.e("58038"),
                n.e("93159"),
                n.e("25246"),
                n.e("13444"),
                n.e("94723"),
                n.e("62931"),
                n.e("50417"),
                n.e("9907"),
                n.e("6174"),
                n.e("34552"),
                n.e("93103"),
                n.e("8757"),
                n.e("21921"),
                n.e("9233"),
                n.e("72963"),
                n.e("85968"),
                n.e("68403"),
                n.e("29787"),
                n.e("88599"),
                n.e("75842"),
                n.e("71273"),
                n.e("9640"),
                n.e("98765"),
                n.e("52548"),
                n.e("28083"),
                n.e("53984"),
                n.e("43780"),
                n.e("76273"),
                n.e("23532"),
                n.e("52557"),
                n.e("4450"),
                n.e("5636"),
                n.e("33861"),
                n.e("68230"),
                n.e("58984"),
                n.e("72539"),
                n.e("52229"),
                n.e("95340"),
                n.e("36877"),
                n.e("69747"),
                n.e("38501"),
                n.e("21930"),
                n.e("3930"),
                n.e("3663"),
                n.e("92077"),
                n.e("89523"),
                n.e("29260"),
                n.e("82486"),
                n.e("755"),
                n.e("54241"),
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
                n.e("87791"),
                n.e("78377"),
                n.e("53683"),
                n.e("84601"),
                n.e("9598"),
                n.e("45879"),
                n.e("86470"),
                n.e("53308"),
                n.e("54876"),
                n.e("40042"),
                n.e("27870"),
                n.e("27880"),
                n.e("8032"),
                n.e("77970"),
                n.e("92405"),
                n.e("75072"),
                n.e("49282"),
                n.e("35683"),
                n.e("94775"),
            ]).then(n.bind(n, 438857));
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
              title: em.intl.string(em.t.HMWL9c),
              body: em.intl.string(em.t["9hfy3A"]),
              onRequestClose: () =>
                  h(
                      u.map((e) => e.id),
                      eh.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: em.intl.string(em.t.VSLDly),
                      loading: a,
                      onClick: () => {
                          r(!0),
                              (0, tF.openUserProfileModal)({ userId: o, tabSection: nT.RP.WIDGETS })
                                  .then(() => {
                                      let e = u.map((e) => e.id);
                                      (0, C.openModalLazy)(
                                          async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("24410"),
                                                  n.e("8978"),
                                                  n.e("78377"),
                                                  n.e("45879"),
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
                                              eh.i.TAKE_ACTION,
                                          ),
                                          s();
                                  })
                                  .finally(() => r(!1));
                      },
                  },
              ],
          });
}
var nb = n(461213),
    nM = n(818348),
    nw = n(466573);
function nO() {
    let e = (0, c.bG)([nb.A], () => nb.A.getStatus()),
        t = (0, tX.MU)(e) ?? "",
        n = e === nM.cl.INVISIBLE || e === nM.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: nw.k,
        children: [
            (0, i.jsxs)(A.A, { tag: "div", children: [em.intl.string(em.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(eH.m, {
                    text: em.intl.string(em.t.L99HQm),
                    children: (0, i.jsx)(ne.E, {
                        size: "xs",
                        color: t8.A.colors.STATUS_WARNING,
                        "aria-label": em.intl.string(em.t.L99HQm),
                    }),
                }),
        ],
    });
}
var nU = n(841595);
let nD = (0, n(945810).mj)({
    name: "2025-12-social-layer-storefront-wishlist-user-account-popout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var nP = n(501838),
    nk = n(760716),
    nL = n(915089),
    nF = n(13808);
function nG(e) {
    let {
            markAsDismissed: t,
            heading: n,
            subheading: s,
            children: r,
            height: o,
            className: u,
            contentClassName: c,
        } = e,
        d = (0, nL.GV)(),
        h = l.useRef(null),
        m = (0, er.z)({
            from: { transform: "translate3d(-110%, 0, 0)", height: o },
            to: { transform: "translate3d(0, 0, 0)", height: o },
            config: { mass: 1, stiffness: 100, damping: 15 },
            onRest: () => {
                null != h.current && h.current.focus();
            },
        });
    return (0, i.jsx)(y.animated.div, {
        className: a()(nF.kL, u),
        style: m,
        children: (0, i.jsxs)("aside", {
            "aria-labelledby": d,
            className: nF.Qs,
            children: [
                (0, i.jsxs)("div", {
                    className: nF.U1,
                    children: [
                        (0, i.jsx)(g.D, {
                            innerRef: h,
                            "aria-label": em.intl.string(em.t.WAI6xu),
                            className: nF.b,
                            onClick: () => {
                                t(eh.i.USER_DISMISS);
                            },
                            children: (0, i.jsx)(ee.P, { color: "currentColor" }),
                        }),
                        (0, i.jsx)(X.D, { id: d, variant: "heading-lg/semibold", children: n }),
                    ],
                }),
                null != s && (0, i.jsx)(J.E, { variant: "text-md/normal", color: "text-subtle", children: s }),
                (0, i.jsx)(eT.Ip, {
                    className: nF.XG,
                    fade: !0,
                    children: (0, i.jsx)("div", { className: a()(nF.gT, c), children: r }),
                }),
            ],
        }),
    });
}
var nV = n(973912),
    nB = n(871123),
    nH = n(44724),
    nQ = n(501573);
function nW() {
    (0, nH.default)({ guildId: (0, nB.zf)() });
}
function nz(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: l } = e,
        { analyticsLocations: s } = (0, O.Ay)([w.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
    return null == t
        ? null
        : (0, i.jsxs)(nG, {
              heading: em.intl.string(em.t["vy/61K"]),
              subheading: em.intl.string(em.t.tEee9t),
              markAsDismissed: l,
              className: nQ.Zj,
              contentClassName: nQ.hQ,
              height: 560,
              children: [
                  (0, i.jsx)(nV.A, {
                      userId: t,
                      analyticsLocations: s,
                      handleOpenUserProfileModal: n,
                      numWishlistItemsToRecommend: 9,
                      className: nQ.KN,
                  }),
                  (0, i.jsx)("div", {
                      className: nQ.UD,
                      children: (0, i.jsx)(e$.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text: em.intl.string(em.t.rg9FQp),
                          onClick: nW,
                      }),
                  }),
              ],
          });
}
function nq(e) {
    let { displayProfile: t, handleOpenUserProfileModal: n, height: s } = e,
        a = (function (e) {
            let { location: t } = e,
                n = (function (e) {
                    let { location: t } = e;
                    return nD.useConfig({ location: t }).enabled;
                })({ location: t }),
                i = (0, c.bG)([ni.default], () => ni.default.getCurrentUser()),
                s = (0, c.bG)([nU.A], () => (null != i ? nU.A.getFirstWishlistId(i.id) : null)),
                a = (0, nk.i)((e) => e.recommendationApplicationIds),
                o = (0, nP.rY)(),
                u = (0, nP.qx)();
            return l.useMemo(
                () => (null != a || (null == s && n) ? (0, r.uniq)([...(a ?? []), ...u, ...o]).sort() : []),
                [n, s, u, o, a],
            );
        })({ location: "AccountProfilePopoutUpsell" }),
        o = l.useMemo(() => {
            let e = [];
            return a.length > 0 && e.push(d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e;
        }, [a]);
    return (0, i.jsx)(nf.Ay, {
        contentTypes: o,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: l, markAsDismissed: a } = e;
            return null == s
                ? null
                : l === d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                  ? (0, i.jsx)(nz, { profileUserId: t?.userId, handleOpenUserProfileModal: n, markAsDismissed: a })
                  : null;
        },
    });
}
var nZ = n(146901),
    nK = n(827827);
let n$ = [
        { duration: 15 * eX.A.Millis.MINUTE, label: () => em.intl.string(em.t["8ot6gv"]) },
        { duration: eX.A.Millis.HOUR, label: () => em.intl.string(em.t.UMWBZr) },
        { duration: 8 * eX.A.Millis.HOUR, label: () => em.intl.string(em.t.EpAXPC) },
        { duration: eX.A.Millis.DAY, label: () => em.intl.string(em.t["755t4q"]) },
        { duration: 3 * eX.A.Millis.DAY, label: () => em.intl.string(em.t["f3/1ch"]) },
        { duration: void 0, label: () => em.intl.string(em.t["46dqJY"]) },
    ],
    nY = "forever";
function nX(e) {
    let { status: t, currentStatus: n, description: l } = e,
        s = t !== tr.clD.ONLINE,
        a = (0, i.jsx)(i.Fragment, {
            children: n$.map((e) => {
                let { duration: l, label: s } = e;
                return (0, i.jsx)(
                    t7.Dr,
                    {
                        id: `${t}-${l}`,
                        label: s(),
                        action: () => (0, nK.A)({ nextStatus: t, prevStatus: n, durationMillis: l }),
                        dontCloseOnAction: !0,
                    },
                    l ?? nY,
                );
            }),
        });
    return (0, i.jsx)(t7.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: s,
        label: (0, tX.MU)(t),
        subtext: l,
        iconLeft: () => (0, i.jsx)(e_.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, nK.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: s ? a : void 0,
    });
}
function nJ(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, nZ._)(e);
    return "today" === t
        ? em.intl.formatToPlainString(em.t.ZxxHIO, { timeString: i })
        : em.intl.formatToPlainString(em.t["9OFjSe"], { dateString: n, timeString: i });
}
var n0 = n(996988),
    n1 = n(656884);
function n2(e) {
    let t,
        n,
        s,
        r,
        o,
        u,
        d,
        h,
        f,
        { currentUser: g, onClose: x, setPopoutRef: E, highlightBadge: v, openedAt: T, className: j } = e,
        _ = __OVERLAY__,
        N = (0, tL.Ay)(g.id, void 0),
        { analyticsLocations: S } = (0, O.Ay)(w.A.USER_PROFILE_ACCOUNT_POPOUT),
        y = (0, tP.pb)({ layout: "ACCOUNT_POPOUT", userId: g.id, guildId: void 0 }),
        { ref: R, height: I } = (0, eI.Ay)(),
        { isHoveringOrFocusing: b, isHovering: M } = (0, e8.A)(R);
    l.useEffect(() => {
        E?.(R.current);
    }, [R, E]),
        l.useEffect(
            () => (tv.A.setState({ isOpen: !0 }), () => tv.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1 })),
            [],
        );
    let U = (0, c.bG)([t6.A], () => t6.A.getStatus(g.id)),
        D = nJ(t3.CY.useSetting()),
        P = (0, c.bG)([t4.A], () => t4.A.hidePersonalInformation),
        k = (0, tE.kB)(),
        L = t3.Q_.useSetting(),
        F =
            ((t = t3.CY.useSetting()),
            (n = (0, tE.kB)()),
            (s = t3.Jr.useSetting()),
            (r = (e) => {
                let i = nJ(t);
                if (U === e && null != i) return i;
                switch (e) {
                    case tr.clD.DND:
                        return n ? em.intl.string(em.t.day5A6) : em.intl.string(em.t["tq/fMK"]);
                    case tr.clD.INVISIBLE:
                        return em.intl.string(em.t.zPc6Mc);
                    default:
                        return;
                }
            }),
            (o = (0, i.jsx)(i.Fragment, {
                children: n$.map((e) => {
                    let { duration: t, label: n } = e;
                    return (0, i.jsx)(
                        t7.Dr,
                        {
                            id: `${U}-${t}`,
                            label: n(),
                            action: () => {
                                (0, tE.ES)(!0, t);
                            },
                            dontCloseOnAction: !0,
                        },
                        t ?? nY,
                    );
                }),
            })),
            (u = nX({ status: tr.clD.ONLINE, currentStatus: U })),
            (d = nX({ status: tr.clD.IDLE, currentStatus: U, description: r(tr.clD.IDLE) })),
            (h = nX({ status: tr.clD.DND, currentStatus: U, description: r(tr.clD.DND) })),
            (f = nX({ status: tr.clD.INVISIBLE, currentStatus: U, description: r(tr.clD.INVISIBLE) })),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    u,
                    (0, i.jsx)(t7.bX, {}, "menu-separator-statuses"),
                    d,
                    h,
                    f,
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
                                          label: em.intl.string(em.t.gJRnwK),
                                          iconLeft: eN.a,
                                          leadingAccessory: { type: "icon", icon: eN.a },
                                          badge: { text: em.intl.string(em.t.ApAu9f) },
                                          subtext:
                                              null != s && "0" !== s
                                                  ? em.intl.format(em.t.BWD8fs, {
                                                        endTime: new Date(Number(s)).toLocaleString(
                                                            em.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : em.intl.string(em.t["Br1q+x"]),
                                          action: () => {
                                              (0, tE.ES)(!n);
                                          },
                                          dontCloseOnAction: !0,
                                          children: o,
                                      },
                                      "quiet-mode",
                                  ),
                              ],
                          })
                        : null,
                ],
            })),
        G = (function (e) {
            let t = (0, c.bG)([ni.default], () => ni.default.getCurrentUser()),
                n = (0, c.bG)([t4.A], () => t4.A.hidePersonalInformation),
                l = (0, c.bG)([nt.A], () => (0, tT.M)(nt.A.theme)),
                { multiAccountUsers: s } = (0, nr.K)(),
                a = s.map((s) => {
                    let a = new nn.A(s),
                        r = a.id === t?.id,
                        o = s.tokenStatus === na.U.INVALID,
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
                                            "aria-label": s.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: nc.DD,
                                            children: [
                                                (0, i.jsx)(J.E, {
                                                    className: nc.gE,
                                                    variant: "text-sm/normal",
                                                    children: tX.Ay.getUserTag(a, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !a.hasUniqueUsername() &&
                                                    (0, i.jsx)(J.E, {
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
                                                    (t && l) || (t && !l)
                                                        ? t8.A.unsafe_rawColors.BRAND_500.css
                                                        : t8.A.unsafe_rawColors.WHITE.css,
                                                className: nc.s0,
                                            }),
                                        o &&
                                            (0, i.jsx)(ne.E, {
                                                color: t8.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
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
                                        (nl.default.track(tr.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tr.JJy.USER_PROFILE },
                                        }),
                                        ns.Mx(n, void 0, nu.WX.MULTI_ACCOUNT_MENU));
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
                                label: em.intl.string(em.t.WbFpq4),
                                action: () => {
                                    e?.(), (0, no.A)();
                                },
                            }),
                        ],
                    }),
                ),
                a
            );
        })(x),
        V = (0, tD.A)({ analyticsLocations: S }),
        B = (0, tN.TW)(g),
        H = l.useRef(null),
        Q = l.useRef(null),
        W = (0, tg.A)(N?.profileFrame?.skuId, "UserProfileAccountPopout"),
        { profileFrameStyle: z, profileFrameClassName: q } = (0, tx.A)(N?.profileFrame?.skuId),
        Z = (0, tk.$)("UserProfileAccountPopout");
    (0, tf.A)({ skuId: N?.profileFrame?.skuId, openedAt: T, context: y, analyticsLocations: S });
    let K = l.useRef((0, tv.A)((e) => e.shouldRenderTenureLevelUp)),
        $ = l.useMemo(() => (0, tC.A)(), []),
        [Y, X] = l.useState(() => tv.A.getState().shouldRenderTenureLevelUp);
    l.useEffect(() => {
        let e = setTimeout(() => {
            X(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let ee = (e) => {
            x?.(), (0, tF.openUserProfileModal)({ customStatusPrompt: $, sourceAnalyticsLocations: S, ...y, ...e });
        },
        et = N?.widgets != null && N.widgets.length > 0,
        en = l.useCallback(() => {
            x();
        }, [x]),
        ei = l.useCallback(() => {
            V(), en();
        }, [V, en]),
        el = (0, eM.QR)({ location: "UserProfileAccountPopout" }),
        { enabled: es } = eb.A.useConfig({ location: "UserProfileAccountPopout" }),
        ea = (0, eM.zd)({ location: "UserProfileAccountPopout" }),
        er = l.useId();
    return (0, i.jsx)(O.f5, {
        value: S,
        children: (0, i.jsx)(tP.of, {
            value: y,
            openedAt: T,
            fetchStartedAt: N?.fetchStartedAt,
            fetchEndedAt: N?.fetchEndedAt,
            isLoaded: N?.isLoaded,
            children: (0, i.jsxs)(ev.l, {
                ref: R,
                "aria-labelledby": er,
                className: a()(eP.jC, j),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(A.A, {
                        children: (0, i.jsx)(eC.H, { id: er, children: em.intl.string(em.t["5fWB8U"]) }),
                    }),
                    (0, i.jsxs)(eC.F, {
                        children: [
                            (0, i.jsx)(nq, { displayProfile: N, handleOpenUserProfileModal: ee, height: I }),
                            (0, i.jsxs)(tq.A, {
                                className: a()(eP.BK, q, Z && "user-profile-sidebar-redesign"),
                                style: z,
                                user: g,
                                displayProfile: N,
                                themeType: n0.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: n1.wx,
                                        children: [
                                            (0, i.jsx)(tB.A, {
                                                user: g,
                                                displayProfile: N,
                                                themeType: n0.d.POPOUT,
                                                specOverrides: Z ? { themePadding: 1 } : void 0,
                                            }),
                                            (0, i.jsx)(tG.A, {
                                                user: g,
                                                displayProfile: N,
                                                themeType: n0.d.POPOUT,
                                                onOpenProfile: _ ? void 0 : ee,
                                            }),
                                            (0, i.jsx)(t1.A, {
                                                ref: H,
                                                user: g,
                                                themeType: n0.d.POPOUT,
                                                onCloseProfile: x,
                                                prompt: $,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(eT.Ip, {
                                        className: eP.rf,
                                        style: { pointerEvents: Y ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(tQ.A, { userId: g.id }),
                                            (0, i.jsx)(tZ.Ay, {
                                                className: eP.eF,
                                                user: g,
                                                displayName: t5.Ay.getName(void 0, null, g),
                                                onClickName: _ ? void 0 : ee,
                                                displayNameTrailing: (0, i.jsx)(t0, { user: g, isVisible: b }),
                                                pronouns: N?.pronouns,
                                                trailing: (0, i.jsx)(tV.A, {
                                                    displayProfile: N,
                                                    themeType: n0.d.POPOUT,
                                                    onClose: x,
                                                    shouldOpenBadgeTooltip: null != v ? (e) => e === v : void 0,
                                                    shouldGlowTenureBadge: K.current,
                                                }),
                                            }),
                                            (0, i.jsx)(tH.A, { isPremiumUser: B, onInteraction: x }),
                                            (0, i.jsx)(t2.A, {
                                                userId: g.id,
                                                userBio: N?.bio,
                                                hidePersonalInformation: P,
                                                onClose: x,
                                            }),
                                            et &&
                                                (0, i.jsx)(tz.A, {
                                                    user: g,
                                                    widgets: N?.widgets,
                                                    onOpenUserProfileModal: ee,
                                                }),
                                            (0, i.jsx)(tW.A, {
                                                user: g,
                                                currentUser: g,
                                                onOpenUserProfileModal: ee,
                                                onClose: x,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: eP.T_,
                                                children: [
                                                    (0, i.jsx)(tq.A.Overlay, {
                                                        className: eP.g0,
                                                        children: (0, i.jsxs)(eF, {
                                                            children: [
                                                                (0, i.jsx)(eL, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: em.intl.string(em.t.s5vZlQ),
                                                                    icon: ej.R,
                                                                    onClick: ei,
                                                                    ref: Q,
                                                                }),
                                                                (0, i.jsx)(eL, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(nO, {}),
                                                                    sublabel: null != D && D,
                                                                    icon: () =>
                                                                        (0, i.jsx)(e_.nW, { status: U, size: 12 }),
                                                                    trailing:
                                                                        (k || U === tr.clD.DND) &&
                                                                        (0, i.jsx)(eN.a, { size: "xxs" }),
                                                                    renderSubmenu: ex.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(ek, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: eP.hQ,
                                                                                  "aria-label": em.intl.string(
                                                                                      em.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: F,
                                                                              });
                                                                          },
                                                                    onClick: ex.Fr
                                                                        ? () => {
                                                                              x(),
                                                                                  (0, C.openModalLazy)(
                                                                                      () =>
                                                                                          new Promise((e) =>
                                                                                              e((e) => {
                                                                                                  let {
                                                                                                      onClose: t,
                                                                                                      ...n
                                                                                                  } = e;
                                                                                                  return (0, i.jsx)(
                                                                                                      eE.d,
                                                                                                      {
                                                                                                          onClose: t,
                                                                                                          ...n,
                                                                                                          size: "sm",
                                                                                                          "aria-label":
                                                                                                              em.intl.string(
                                                                                                                  em.t[
                                                                                                                      "3Uj+2p"
                                                                                                                  ],
                                                                                                              ),
                                                                                                          children: (0,
                                                                                                          i.jsx)(eS.W, {
                                                                                                              "data-menu-migrated":
                                                                                                                  !0,
                                                                                                              navId: "set-status-submenu-mobile-web",
                                                                                                              variant:
                                                                                                                  "fixed",
                                                                                                              "aria-label":
                                                                                                                  em.intl.string(
                                                                                                                      em
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
                                                                                                                  F,
                                                                                                          }),
                                                                                                      },
                                                                                                  );
                                                                                              }),
                                                                                          ),
                                                                                  );
                                                                          }
                                                                        : void 0,
                                                                }),
                                                                (0, i.jsx)(tm, { onClose: x, popoutContainerRef: R }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(tq.A.Overlay, {
                                                        className: eP.g0,
                                                        children: (0, i.jsxs)(eF, {
                                                            children: [
                                                                (0, i.jsx)(eL, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: ey.r,
                                                                    label: em.intl.string(em.t.oMNyYN),
                                                                    onClick: () => {
                                                                        x(), (0, no.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(ek, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": em.intl.string(em.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: G,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    tY.p5 &&
                                                                    L &&
                                                                    (0, i.jsx)(eL, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eR.L,
                                                                        label: em.intl.string(em.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            (0, tY.C)(g.id), x();
                                                                        },
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    N?.profileEffect != null &&
                                        !K.current &&
                                        (0, i.jsx)(tp.A, { skuId: N.profileEffect.skuId, isHovering: M }),
                                    null != W && (0, i.jsx)(tA.A, { frame: W }),
                                ],
                            }),
                            es
                                ? (0, i.jsx)(nI, { targetElementRef: Q, onClose: x })
                                : el && ea
                                  ? (0, i.jsx)(nj, { targetElementRef: Q, onClose: x })
                                  : null,
                            (0, i.jsx)(tO, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var n3 = n(371912),
    n6 = n(655116),
    n4 = n(106531),
    n5 = n(454719),
    n8 = n(342296),
    n7 = n(852712),
    n9 = n(167579),
    ie = n(173660),
    it = n(136491),
    ii = n(763827),
    il = n(499156),
    is = n(731854);
let ia = 2.5 * eX.A.Millis.SECOND,
    ir = +eX.A.Millis.HOUR;
var io = n(459838),
    iu = n(485296);
let ic = 3 * eX.A.Millis.SECOND,
    id = +eX.A.Millis.DAY;
var ih = n(616356),
    im = n(734057),
    ip = n(629016),
    ig = n(186111),
    iA = n(967198),
    ix = n(486020),
    iC = n(625494),
    iE = n(536194),
    iv = n(19575),
    iT = n(994314),
    ij = n(485599),
    i_ = n(338854);
function iN(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: l, position: s, shouldShow: a = !0, children: r } = e,
        o = (0, eG.sw)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r,
            a && o
                ? (0, i.jsx)(i_.H, {
                      targetElementRef: t,
                      title: em.intl.string(tu.default.Qn21R6),
                      body: em.intl.string(tu.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: s,
                      caretConfig: { align: "center" },
                      action: {
                          text: em.intl.string(em.t.RzWDqY),
                          onClick: () => {
                              n(eh.i.TAKE_ACTION), l();
                          },
                      },
                      onRequestClose: () => {
                          n(eh.i.USER_DISMISS);
                      },
                  })
                : null,
        ],
    });
}
var iS = n(626584),
    iy = n(531685),
    iR = n(259065),
    iI = n(864386);
let ib = new iS.A("DisplayNameStylesCoachmark");
function iM(e) {
    let { markAsDismissed: t, targetElementRef: n, children: s } = e,
        { analyticsLocations: a } = (0, O.Ay)(),
        r = (0, l.useRef)(null),
        o = (0, c.bG)([iy.A], () => iy.A.isFocused()),
        u = (0, l.useCallback)(() => {
            t(eh.i.TAKE_ACTION),
                (0, el.openUserSettings)(ei.X.PROFILE_PANEL, { analyticsLocations: a }, () => {
                    (0, iR.L)({ analyticsLocations: a });
                });
        }, [t, a]),
        d = (0, l.useCallback)(() => {
            t(eh.i.USER_DISMISS);
        }, [t]);
    return (
        (0, l.useEffect)(() => {
            o && r.current?.paused ? r.current?.play().catch(ib.error) : o || r.current?.pause();
        }, [o]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                s,
                (0, i.jsx)(nd.A, {
                    targetElementRef: n,
                    shouldShow: !0,
                    onRequestClose: d,
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
                    title: em.intl.string(iI.default["1AE464"]),
                    body: [em.intl.string(iI.default.cNc1g9), em.intl.string(em.t["4JNXHG"])],
                    actions: [{ text: em.intl.string(em.t.uw9zI7), variant: "primary", onClick: u }],
                }),
            ],
        })
    );
}
var iw = n(131607),
    iO = n(45780),
    iU = n(696451),
    iD = n(71393),
    iP = n(685073),
    ik = n(228366);
let iL = { lastSeenInfos: {} },
    iF = iL;
class iG extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        iF = e ?? iL;
    }
    getState() {
        return iF;
    }
    getGuildLastSeenInfo(e) {
        return iF.lastSeenInfos[e] ?? null;
    }
}
let iV = new iG(ik.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        iF.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        iF = iL;
    },
});
var iB = n(116833),
    iH = n(514661);
let iQ = new iS.A("GuildTagAvailableCoachmark");
function iW(e) {
    let t = (0, c.bG)([iD.A], () => iD.A.getGuild(e.guildId));
    function n(n) {
        t?.profile?.tag != null &&
            ik.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n);
    }
    let { isAdopting: l, onAdoptTag: s, onEditProfile: a } = (0, iH.A)(t?.id ?? null, () => n(eh.i.TAKE_ACTION));
    if (null == t || !(0, iP.q0)(t))
        return iQ.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: em.intl.string(em.t.jwEaiX), loading: l, onClick: s, variant: "primary" },
        { text: em.intl.string(em.t.s5vZlQ), onClick: a, variant: "secondary" },
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
                    component: iB.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: em.intl.formatToPlainString(em.t["m/Tc3n"], { guildName: t.name }),
                body: em.intl.string(em.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(eh.i.USER_DISMISS),
            }),
        ],
    });
}
function iz(e) {
    let t = (0, c.bG)([iD.A], () => iD.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: l, onAdoptTag: s, onEditProfile: a } = (0, iH.A)(t?.id ?? null, () => n(eh.i.TAKE_ACTION));
    if (null == t || !(0, iP.q0)(t))
        return iQ.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: em.intl.string(em.t.jwEaiX), loading: l, onClick: s, variant: "primary" },
        { text: em.intl.string(em.t.s5vZlQ), onClick: a, variant: "secondary" },
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
                    component: iB.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: em.intl.formatToPlainString(em.t.VFqnyU, { guildName: t.name }),
                body: em.intl.string(em.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(eh.i.USER_DISMISS),
            }),
        ],
    });
}
var iq = n(843010),
    iZ = n(764231),
    iK = n(425713);
function i$(e) {
    let { groupName: t, targetElementRef: n } = e,
        l = tR(),
        s = (0, c.bG)([eo.Ay], () => eo.Ay.useReducedMotion),
        a = (0, tv.A)((e) => e.isOpen),
        r = (0, iq.G)();
    return s || null == l || a || r
        ? null
        : (0, i.jsx)(nf.zJ, {
              contentType: d.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: s } = e;
                  return (0, i.jsx)(iY, {
                      recentlyLeveledTenureBadge: l,
                      markAsDismissed: s,
                      targetElementRef: n,
                      shouldShow: t === d.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function iY(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: s, shouldShow: a } = e,
        r = ty.sp.indexOf(t),
        o = (0, iK.I)(ty.sp[r > 0 ? r - 1 : r]).ambient,
        u = (0, l.useCallback)(() => {
            n(eh.i.TAKE_ACTION),
                tv.A.setState({ shouldRenderTenureLevelUp: !0 }),
                iC._.dispatch(tr.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n]),
        c = (0, l.useCallback)(() => {
            n(eh.i.USER_DISMISS);
        }, [n]),
        d = ty.VD[t],
        h = em.intl.formatToPlainString(em.t.ewkaVR, {
            timeMilestone: (0, iZ.T)(d.id, d.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        m = [{ text: em.intl.string(em.t.RzWDqY), variant: "primary", onClick: u }];
    return (0, i.jsx)(nd.A, {
        targetElementRef: s,
        onRequestClose: c,
        shouldShow: a,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: em.intl.string(em.t.VoDxsV),
        body: h,
        actions: m,
    });
}
function iX(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, n3.c9)(),
        l = null != e.targetElementRef.current && t && n,
        [s, a] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, iO.G$)(d.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? tr.dJq),
                l = (0, c.bG)([iD.A, ni.default, iU.Ay], () => {
                    if (null === e) return !1;
                    let t = iD.A.getGuild(e);
                    if (void 0 === t || !(0, iP.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                    let n = ni.default.getCurrentUser();
                    if (
                        void 0 === n ||
                        (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                    )
                        return !1;
                    let i = iU.Ay.getMember(e, n.id);
                    return null != i && !i.isPending;
                }, [e]);
            return (0, iw.ww)(l && n && !i ? [d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? tr.eGj);
        })(e.guildId, { shouldShow: l }),
        [r, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                l = i?.identityGuildId ?? null,
                s = (0, c.bG)([iV], () => (null === l ? null : iV.getGuildLastSeenInfo(l))),
                a = (0, c.bG)([iD.A], () => iD.A.getGuild(l)?.profile?.tag),
                r = null != a && i?.identityGuildId === l && i?.tag === null,
                o = null != l && s?.tag === a,
                u = null !== l && r && !o;
            return (0, iw.Wl)(u && n ? d.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: l });
    return l
        ? s === d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(iz, {
                  guildId: e.guildId,
                  onDismiss: a,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : r === d.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(iW, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(i$, { groupName: eh.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(nf.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: eh.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: l } = t;
                                switch (n) {
                                    case d.M.DISPLAY_NAME_STYLES_COACHMARK:
                                        return (0, i.jsx)(iM, {
                                            markAsDismissed: l,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case d.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, i.jsx)(iN, {
                                            markAsDismissed: l,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: eB.p,
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
var iJ = n(615675),
    i0 = n(900797),
    i1 = n(847374),
    i2 = n(348858),
    i3 = n(617354),
    i6 = n(206018),
    i4 = n(42473),
    i5 = n(490704),
    i8 = n(967194);
function i7(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: s,
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
        } = (0, i2.I)(h ? "undeafen" : "deafen"),
        x = n ? iJ.T : m,
        { name: C } = (0, eA.x5)(is.oh.AUDIO_OUTPUT),
        E = (0, i3.A)(t, n, s),
        { analyticsLocations: v } = (0, O.Ay)(w.A.AUDIO_OUTPUT_BUTTON),
        T = l.useRef(null);
    return (
        l.useEffect(() => () => p(), [h, p]),
        (0, i.jsx)(O.f5, {
            value: v,
            children: (0, i.jsx)(f.Y, {
                targetElementRef: T,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        d(),
                        (0, i.jsx)(O.f5, {
                            value: v,
                            children: (0, i.jsx)(i6.A, {
                                onInteraction: (0, G.s)("AudioDeviceMenu", w.A.ACCOUNT),
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
                    let { onClick: l } = e,
                        { isShown: d } = t,
                        m = d ? i0.t : i1.a;
                    return (0, i.jsxs)("div", {
                        ref: T,
                        className: a()(i5.Lh, { [i5.v8]: h, [i5.q6]: d }),
                        children: [
                            (0, i.jsx)(i4.A, {
                                "aria-checked": h,
                                "aria-label": em.intl.string(em.t.wjcRFX),
                                className: i5.eT,
                                disabled: s,
                                icon: (0, i.jsx)(x, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: h ? t8.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: h ? i8.o : void 0,
                                innerClassName: a()({ [i8.T]: n }),
                                onClick: r,
                                onContextMenu: l,
                                onMouseEnter: g,
                                onMouseLeave: A,
                                plated: null != u,
                                redGlow: h,
                                role: "switch",
                                tooltipText: E,
                            }),
                            (0, i.jsx)(i4.A, {
                                className: a()(i5.UT, { [i5.q6]: d }),
                                disabled: s,
                                icon: (0, i.jsx)(m, {
                                    className: i5.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: h ? t8.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: l,
                                onContextMenu: l,
                                plated: null != u,
                                redGlow: h,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? em.intl.formatToPlainString(em.t["f+DDY/"], { outputDeviceName: C })
                                    : void 0,
                                tooltipShouldShow: !d,
                                tooltipText: c
                                    ? em.intl.format(em.t["f+DDY/"], { outputDeviceName: C })
                                    : em.intl.string(em.t.aA4Vce),
                                "aria-label": c
                                    ? em.intl.formatToPlainString(em.t["f+DDY/"], { outputDeviceName: C })
                                    : em.intl.string(em.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var i9 = n(666654),
    le = n(523875),
    lt = n(993719);
let ln = {};
class li extends c.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return ln[e] ?? !1;
    }
}
let ll = new li(ik.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        ln[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        ln[t] = !1;
    },
});
var ls = n(362823),
    la = n(980923),
    lr = n(224585),
    lo = n(949341),
    lu = n(973324);
function lc(e) {
    let t,
        {
            selfMute: n,
            serverMute: s,
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
        { showPTTIconIndicator: T } = il.A.useConfig({ location: "MicrophoneButton" }),
        j = (0, c.bG)([it.Ay], () => it.Ay.getMode() === is.TB.PUSH_TO_TALK),
        _ = (0, c.bG)([it.Ay], () => it.Ay.getSettings().modeOptions.shortcut),
        N = (0, c.bG)([ll], () => ll.getIsTutorialActive(ls.v.MUTE_TUTORIAL)),
        S = (0, c.bG)([ii.A], () => null != ii.A.getChannelId()),
        { name: y } = (0, eA.x5)(is.oh.AUDIO_INPUT),
        { enabledInputProfiles: R } = (0, n7.d)({ location: "MicrophoneButton" }),
        I = l.useRef(null),
        b = n || r || s,
        M = (0, le.L)(b ? "unmute" : "mute"),
        { analyticsLocations: U } = (0, O.Ay)(w.A.AUDIO_INPUT_BUTTON),
        { Component: D, events: P, play: k } = M,
        L = s || r ? i9.O : D;
    l.useEffect(() => () => k(), [b, k]);
    let F = (0, la.A)(n, s, r, o);
    t = g
        ? { tooltipType: "green_void_do_not_use", tooltipText: em.intl.string(em.t["29gnR4"]), tooltipForceOpen: !0 }
        : C || A
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: em.intl.format(em.t.c1qUOQ, { keybind: e0.dI(_).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: F };
    let V = T && j && S,
        B = b ? t8.A.colors.ICON_VOICE_MUTED : "currentColor",
        H = l.useCallback(() => {
            m(), N && lt.N(ls.v.MUTE_TUTORIAL);
        }, [m, N]);
    return (0, i.jsxs)(O.f5, {
        value: U,
        children: [
            (0, i.jsx)(f.Y, {
                targetElementRef: I,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        E(),
                        (0, i.jsx)(O.f5, {
                            value: U,
                            children: (0, i.jsx)(i6.A, {
                                onInteraction: (0, G.s)("AudioDeviceMenu", w.A.ACCOUNT),
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
                    let { onClick: l } = e,
                        { isShown: s } = n,
                        r = s ? i0.t : i1.a;
                    return (0, i.jsxs)("div", {
                        ref: I,
                        className: a()(i5.Lh, { [i5.v8]: b, [i5.q6]: s }),
                        children: [
                            (0, i.jsx)(i4.A, {
                                "aria-checked": b,
                                "aria-label": em.intl.string(em.t.w4m945),
                                className: i5.eT,
                                disabled: o,
                                icon: (0, i.jsx)(L, { size: "custom", width: 20, height: 20, color: B, className: u }),
                                onClick: H,
                                onContextMenu: l,
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
                                children: V ? (0, i.jsx)("div", { className: a()(lo.U, { [lo.z]: v }) }) : null,
                            }),
                            (0, i.jsx)(i4.A, {
                                "aria-label": x
                                    ? em.intl.formatToPlainString(em.t["18wnuD"], { inputDeviceName: y })
                                    : em.intl.string(em.t.fRzCbB),
                                className: a()(i5.UT, { [i5.q6]: s }),
                                disabled: o,
                                icon: (0, i.jsx)(r, {
                                    className: i5.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: B,
                                }),
                                onClick: l,
                                onContextMenu: l,
                                onMouseEnter: d,
                                onMouseLeave: h,
                                plated: null != p,
                                redGlow: b,
                                tooltipType: x ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: x,
                                tooltipPositionKey: x
                                    ? em.intl.formatToPlainString(em.t["18wnuD"], { inputDeviceName: y })
                                    : void 0,
                                tooltipShouldShow: !s,
                                tooltipText: x
                                    ? em.intl.format(em.t["18wnuD"], { inputDeviceName: y })
                                    : em.intl.string(em.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(nd.A, {
                targetElementRef: I,
                shouldShow: N,
                graphic: { type: "image", src: lu.A },
                onRequestClose: () => {
                    lt.N(ls.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: em.intl.string(lr.default.VG4zAf),
                body: em.intl.string(lr.default["8VIRzR"]),
            }),
        ],
    });
}
var ld = n(935399),
    lh = n(505312),
    lm = n(848847),
    lp = n(88001),
    lf = n(466919),
    lg = n(438705);
let lA = (e) => {
    let { targetElementRef: t, shouldShow: n, onDismiss: s } = e,
        a = l.useCallback(() => {
            s(), (0, el.openUserSettings)(ei.X.SUBSCRIPTIONS_PANEL);
        }, [s]);
    return (0, i.jsx)(nd.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: lg },
        shouldShow: n,
        title: em.intl.format(lf.default.bx8sR9, { premiumGroupProductName: (0, lp.DP)() }),
        body: em.intl.format(lf.default.Pw4OFZ, { premiumGroupProductName: (0, lp.DP)() }),
        onRequestClose: s,
        actions: [{ text: em.intl.string(lf.default.DD26QR), onClick: a }],
    });
};
var lx = n(873298),
    lC = n(840387);
function lE(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        s = (0, lC.Z)(),
        a = t3.KP.useSetting(),
        r = s && a !== lx.KP.FRIENDS_AND_ALL_GUILDS,
        o = (0, l.useCallback)(() => {
            t(eh.i.TAKE_ACTION), (0, el.openUserSettings)(ei.X.PROFILE_PRIVACY_CATEGORY);
        }, [t]),
        u = (0, l.useCallback)(() => {
            t(eh.i.USER_DISMISS);
        }, [t]),
        c = r
            ? a === lx.KP.FRIENDS_ONLY
                ? em.intl.string(em.t["/hogEy"])
                : em.intl.string(em.t["6hEfm1"])
            : em.intl.string(em.t.bnNxW1);
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
        title: em.intl.string(em.t.Ve4nS1),
        body: c,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: em.intl.string(em.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
function lv(e) {
    let t,
        n,
        {
            webBuildOverride: s,
            onClick: a,
            onContextMenu: r,
            dismissibleContents: o,
            iconForeground: u,
            nameplate: c,
        } = e,
        h = l.useRef(null),
        [m, p] = l.useState(!1);
    (0, ld.Ay)(() => {
        let e = () => p(!0);
        return (
            iC._.subscribe(tr.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                iC._.unsubscribe(tr.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let f = l.useCallback(() => {
        p(!1), a();
    }, [a]);
    t = null != s ? em.intl.formatToPlainString(em.t.Gzh6ZP, { webBuildOverride: s.id }) : em.intl.string(em.t.cduTBL);
    let g = eq.Z,
        A = (0, lh.w)();
    return (
        (g = null != s ? lm.H : A.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(i4.A, {
                    ref: h,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: f,
                    onContextMenu: r,
                    "aria-label": em.intl.string(em.t.cduTBL),
                    icon: (0, i.jsx)(g, { size: "refresh_sm", color: "currentColor", className: u }),
                    ...A.events,
                    plated: null != c,
                }),
                (0, i.jsx)(lA, { targetElementRef: h, shouldShow: m, onDismiss: () => p(!1) }),
                (0, i.jsx)(nf.Ay, {
                    contentTypes: o,
                    groupName: eh.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === d.M.PRIVATE_PROFILE_COACHMARK
                            ? (0, i.jsx)(lE, { markAsDismissed: n, targetElementRef: h })
                            : null;
                    },
                }),
            ],
        })
    );
}
var lT = n(489902);
let lj = iv.Ay.getEnableHardwareAcceleration() ? m.Js : m.eu,
    l_ = 2.5 * eX.A.Millis.SECOND,
    lN = 2 * eX.A.Millis.MINUTE,
    lS = 2 * eX.A.Millis.MINUTE,
    ly = 5 * eX.A.Millis.SECOND;
function lR(e) {
    let {
            ref: t,
            speaking: n,
            voiceDb: s = -1 / 0,
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
        C = l.useRef(null),
        E = t ?? C,
        T = (0, ix.F_)({ avatarDecoration: A, size: (0, B.Te)(p._3.SIZE_32) }),
        j = (0, Z.A)(),
        {
            updateOpenPopoutRef: N,
            highlightBadge: S,
            setHighlightBadge: y,
        } = (function () {
            let e = l.useRef(null),
                t = l.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, i] = l.useState(),
                [s, a] = l.useState(!1);
            return (
                (0, _.A)(() => a(!0), 750),
                l.useEffect(() => {
                    let t = (t) => {
                        let { highlightBadge: n } = t;
                        null != n && i(n), e.current?.();
                    };
                    return (
                        iC._.subscribe(tr.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            iC._.unsubscribe(tr.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: s ? n : void 0, setHighlightBadge: i }
            );
        })(),
        R = (0, Q.K)(m);
    return null == o
        ? null
        : (0, i.jsx)(v.A, {
              object: tr.ZSU.AVATAR,
              children: (0, i.jsx)(n8.A, {
                  user: o,
                  targetElementRef: E,
                  clickTrap: !0,
                  preload: () =>
                      (0, n5.A)(o.id, o.getAvatarURL(void 0, n8.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: l } = e;
                      return (0, i.jsx)(n2, {
                          currentUser: o,
                          highlightBadge: S,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: l,
                          className: lT.dI,
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
                      N(e);
                      let { onMouseEnter: t, onMouseDown: l, ...d } = e;
                      return (0, i.jsxs)("div", {
                          ref: E,
                          style: R,
                          onMouseEnter: t,
                          onMouseDown: l,
                          onClick: (t) => {
                              e.onClick?.(t), c?.(t);
                          },
                          className: a()(lT.Q9, { [lT.ZQ]: null != m }),
                          children: [
                              (0, i.jsx)(g.D, {
                                  ...d,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), c?.(t);
                                  },
                                  "aria-label": em.intl.string(em.t["5fWB8U"]),
                                  focusProps: { ringTarget: E },
                                  className: lT.$n,
                                  "data-jump-section": x,
                              }),
                              (0, i.jsx)(lj, {
                                  size: p._3.SIZE_32,
                                  src: o.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: T,
                                  status: r ? tr.clD.STREAMING : u,
                                  isSpeaking: n,
                                  voiceDb: s,
                                  className: lT.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: lT.oM, children: h(j) }),
                          ],
                      });
                  },
              }),
          });
}
class lI extends l.PureComponent {
    speakingWhileMutedTooltipTimeout = new h.Ep();
    speakingWhilePTTTooltipTimeout = new h.Ep();
    speakingWhilePTTInactiveBackoff = new u.A(lS, null, !1);
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
            { speakingWhileMuted: l, occluded: s, speakingWhilePTTInactive: a } = this.props;
        s !== i && this.handleOccludedChanged(),
            l !== t && this.handleSpeakingWhileMutedChanged(),
            a !== n && this.handleSpeakingWhilePTTChanged();
    }
    componentWillUnmount() {
        this.speakingWhileMutedTooltipTimeout.stop(), this.speakingWhilePTTTooltipTimeout.stop();
    }
    handleToggleSelfMute = () => {
        let { serverMute: e, suppress: t, selfMute: n } = this.props;
        (0, L.A)(e, t, tr.JJy.ACCOUNT_PANEL), (0, F.X)(w.A.ACCOUNT, F.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, k.A)(e, tr.JJy.ACCOUNT_PANEL), (0, F.X)(w.A.ACCOUNT, F.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            ii.A.isConnected() ? (0, el.openUserSettings)(ei.X.VOICE_AND_VIDEO_PANEL) : (0, el.openUserSettings)();
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("38873"),
                    n.e("76631"),
                    n.e("67515"),
                    n.e("60513"),
                    n.e("33063"),
                    n.e("2677"),
                    n.e("63635"),
                    n.e("44190"),
                    n.e("21277"),
                    n.e("16261"),
                    n.e("18224"),
                    n.e("13114"),
                    n.e("24554"),
                    n.e("64479"),
                    n.e("28130"),
                    n.e("99961"),
                    n.e("89209"),
                    n.e("18240"),
                    n.e("81804"),
                    n.e("19393"),
                    n.e("4355"),
                    n.e("84764"),
                    n.e("70294"),
                    n.e("72451"),
                    n.e("11819"),
                    n.e("34784"),
                    n.e("46334"),
                    n.e("26963"),
                    n.e("38805"),
                    n.e("80653"),
                    n.e("51692"),
                    n.e("17095"),
                    n.e("8981"),
                    n.e("24410"),
                    n.e("91888"),
                    n.e("6324"),
                    n.e("96575"),
                    n.e("6162"),
                    n.e("13627"),
                    n.e("50748"),
                    n.e("44667"),
                    n.e("83928"),
                    n.e("92702"),
                    n.e("53727"),
                    n.e("34796"),
                    n.e("34609"),
                    n.e("29244"),
                    n.e("69344"),
                    n.e("52033"),
                    n.e("85791"),
                    n.e("57006"),
                    n.e("83566"),
                    n.e("11328"),
                    n.e("58376"),
                    n.e("4460"),
                    n.e("45043"),
                    n.e("91165"),
                    n.e("6619"),
                    n.e("85725"),
                    n.e("22410"),
                    n.e("3926"),
                    n.e("15444"),
                    n.e("6957"),
                    n.e("79093"),
                    n.e("28510"),
                    n.e("47141"),
                    n.e("3210"),
                    n.e("51176"),
                    n.e("89412"),
                    n.e("98901"),
                    n.e("4981"),
                    n.e("90648"),
                    n.e("6683"),
                    n.e("65317"),
                    n.e("31194"),
                    n.e("83185"),
                    n.e("87193"),
                    n.e("18270"),
                    n.e("73941"),
                    n.e("3175"),
                    n.e("81275"),
                    n.e("15086"),
                    n.e("57205"),
                    n.e("94712"),
                    n.e("71964"),
                    n.e("14898"),
                    n.e("72244"),
                    n.e("94457"),
                    n.e("33495"),
                    n.e("30006"),
                    n.e("23924"),
                    n.e("42205"),
                    n.e("71091"),
                    n.e("19402"),
                    n.e("68201"),
                    n.e("13111"),
                    n.e("38939"),
                    n.e("3376"),
                    n.e("13554"),
                    n.e("26132"),
                    n.e("10471"),
                    n.e("63232"),
                    n.e("11301"),
                    n.e("61737"),
                    n.e("60235"),
                    n.e("68261"),
                    n.e("64827"),
                    n.e("7167"),
                    n.e("96643"),
                    n.e("92789"),
                    n.e("2368"),
                    n.e("21335"),
                    n.e("47834"),
                    n.e("11735"),
                    n.e("3932"),
                    n.e("84569"),
                    n.e("62156"),
                    n.e("6338"),
                    n.e("85404"),
                    n.e("44057"),
                    n.e("19455"),
                    n.e("28504"),
                    n.e("38251"),
                    n.e("62175"),
                    n.e("7743"),
                    n.e("44571"),
                    n.e("45959"),
                    n.e("60658"),
                    n.e("8304"),
                    n.e("18573"),
                    n.e("55936"),
                    n.e("8739"),
                    n.e("8434"),
                    n.e("31988"),
                    n.e("39667"),
                    n.e("34303"),
                    n.e("28866"),
                    n.e("2419"),
                    n.e("73122"),
                    n.e("58038"),
                    n.e("93159"),
                    n.e("25246"),
                    n.e("13444"),
                    n.e("94723"),
                    n.e("62931"),
                    n.e("50417"),
                    n.e("9907"),
                    n.e("6174"),
                    n.e("28367"),
                    n.e("34552"),
                    n.e("93103"),
                    n.e("81647"),
                    n.e("76602"),
                    n.e("21921"),
                    n.e("9233"),
                    n.e("91763"),
                    n.e("52511"),
                    n.e("72963"),
                    n.e("40402"),
                    n.e("93766"),
                    n.e("42724"),
                    n.e("43437"),
                    n.e("39970"),
                    n.e("76418"),
                    n.e("40258"),
                    n.e("68403"),
                    n.e("86127"),
                    n.e("66495"),
                    n.e("8555"),
                    n.e("28095"),
                    n.e("46070"),
                    n.e("88599"),
                    n.e("75842"),
                    n.e("36863"),
                    n.e("71210"),
                    n.e("72789"),
                    n.e("50117"),
                    n.e("6949"),
                    n.e("17249"),
                    n.e("71273"),
                    n.e("53917"),
                    n.e("79049"),
                    n.e("9640"),
                    n.e("62422"),
                    n.e("90365"),
                    n.e("88342"),
                    n.e("98765"),
                    n.e("89088"),
                    n.e("52548"),
                    n.e("35027"),
                    n.e("67861"),
                    n.e("1518"),
                    n.e("15186"),
                    n.e("37977"),
                    n.e("47626"),
                    n.e("23354"),
                    n.e("28083"),
                    n.e("82644"),
                    n.e("3589"),
                    n.e("89421"),
                    n.e("53984"),
                    n.e("43780"),
                    n.e("98965"),
                    n.e("20590"),
                    n.e("65437"),
                    n.e("74810"),
                    n.e("80830"),
                    n.e("79745"),
                    n.e("80854"),
                    n.e("35395"),
                    n.e("96325"),
                    n.e("46844"),
                    n.e("63235"),
                    n.e("45413"),
                    n.e("86672"),
                    n.e("90664"),
                    n.e("32756"),
                    n.e("64850"),
                    n.e("70104"),
                    n.e("2564"),
                    n.e("47417"),
                    n.e("19558"),
                    n.e("58946"),
                    n.e("48330"),
                    n.e("14285"),
                    n.e("95752"),
                    n.e("3332"),
                    n.e("8362"),
                    n.e("41678"),
                    n.e("72401"),
                    n.e("52617"),
                    n.e("4744"),
                    n.e("2698"),
                    n.e("37021"),
                    n.e("81314"),
                    n.e("35313"),
                    n.e("501"),
                    n.e("86243"),
                    n.e("67837"),
                    n.e("73384"),
                    n.e("82783"),
                    n.e("32209"),
                    n.e("23532"),
                    n.e("62862"),
                    n.e("52557"),
                    n.e("5043"),
                    n.e("35321"),
                    n.e("87478"),
                    n.e("4450"),
                    n.e("5636"),
                    n.e("33861"),
                    n.e("50033"),
                    n.e("68230"),
                    n.e("39171"),
                    n.e("36564"),
                    n.e("92513"),
                    n.e("58984"),
                    n.e("72539"),
                    n.e("83952"),
                    n.e("52229"),
                    n.e("3998"),
                    n.e("44780"),
                    n.e("95340"),
                    n.e("5557"),
                    n.e("62718"),
                    n.e("89916"),
                    n.e("60773"),
                    n.e("61156"),
                    n.e("91671"),
                    n.e("8018"),
                    n.e("92295"),
                    n.e("36877"),
                    n.e("68763"),
                    n.e("16767"),
                    n.e("59957"),
                    n.e("29666"),
                    n.e("58273"),
                    n.e("6841"),
                    n.e("69747"),
                    n.e("20930"),
                    n.e("38056"),
                    n.e("26001"),
                    n.e("14591"),
                    n.e("52111"),
                    n.e("20379"),
                    n.e("57458"),
                    n.e("59466"),
                    n.e("8829"),
                    n.e("19193"),
                    n.e("15920"),
                    n.e("1243"),
                    n.e("58164"),
                    n.e("21930"),
                    n.e("75133"),
                    n.e("77487"),
                    n.e("37490"),
                    n.e("3930"),
                    n.e("96804"),
                    n.e("3663"),
                    n.e("28850"),
                    n.e("95998"),
                    n.e("27659"),
                    n.e("42234"),
                    n.e("92077"),
                    n.e("12682"),
                    n.e("26294"),
                    n.e("89523"),
                    n.e("74678"),
                    n.e("29260"),
                    n.e("81189"),
                    n.e("66580"),
                    n.e("77467"),
                    n.e("83230"),
                    n.e("98972"),
                    n.e("203"),
                    n.e("39103"),
                    n.e("4774"),
                    n.e("49629"),
                    n.e("78601"),
                    n.e("80407"),
                    n.e("42726"),
                    n.e("34546"),
                    n.e("10943"),
                    n.e("41701"),
                    n.e("94607"),
                    n.e("21455"),
                    n.e("755"),
                    n.e("60989"),
                    n.e("79435"),
                    n.e("68083"),
                    n.e("48730"),
                    n.e("71467"),
                    n.e("60003"),
                    n.e("49013"),
                    n.e("30167"),
                    n.e("51892"),
                    n.e("41838"),
                    n.e("46045"),
                    n.e("33448"),
                    n.e("82178"),
                    n.e("38260"),
                    n.e("3710"),
                    n.e("42324"),
                    n.e("45830"),
                    n.e("8979"),
                    n.e("33771"),
                    n.e("77602"),
                    n.e("10637"),
                    n.e("46039"),
                    n.e("95602"),
                    n.e("5896"),
                    n.e("34409"),
                    n.e("22644"),
                    n.e("29569"),
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
                    n.e("91531"),
                    n.e("75284"),
                    n.e("64926"),
                    n.e("50541"),
                    n.e("47999"),
                    n.e("37886"),
                    n.e("59587"),
                    n.e("61750"),
                    n.e("20803"),
                    n.e("95782"),
                    n.e("96817"),
                    n.e("61137"),
                    n.e("27687"),
                    n.e("55839"),
                    n.e("18710"),
                    n.e("86629"),
                    n.e("98384"),
                    n.e("71492"),
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
                    n.e("71530"),
                    n.e("38249"),
                    n.e("40976"),
                    n.e("85216"),
                    n.e("26359"),
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
                    n.e("14451"),
                    n.e("1691"),
                    n.e("7755"),
                    n.e("93720"),
                    n.e("54658"),
                    n.e("49409"),
                    n.e("81754"),
                    n.e("42561"),
                    n.e("33049"),
                    n.e("21403"),
                    n.e("43456"),
                    n.e("44491"),
                ]).then(n.bind(n, 907206));
                return (t) =>
                    (0, i.jsx)(e, { ...t, onClose: E.Z_, onInteraction: (0, G.s)("UserSettingsMenu", w.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, G.s)("AudioDeviceMenu", w.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("60536"), n.e("78827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, n7.d)({ location: "Account" });
                    return (0, i.jsx)(O.f5, {
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
                    (0, i.jsx)(O.f5, {
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
                occluded: l,
                shouldShowPTTJoinTooltip: s,
                deviceChangedTooltipType: a,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            o =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > lN;
        i
            ? r ||
              !e ||
              t ||
              n ||
              l ||
              !o ||
              null != a ||
              s ||
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                  (this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(l_, () =>
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
                shouldShowPTTJoinTooltip: s,
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
              l ||
              !o ||
              null != a ||
              s ||
              this.setState({ shouldShowSpeakingWhilePTTTooltip: !0 }, () => {
                  (this.lastSpeakingWhilePTTNotificationTime = performance.now()),
                      this.speakingWhilePTTInactiveBackoff.fail(),
                      this.speakingWhilePTTTooltipTimeout.start(l_, () =>
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
                status: s,
                userTag: a,
                voiceChannel: r,
            } = this.props;
        if (null == l) return null;
        if ((0, N.A)({ activities: t, status: s, applicationStream: n, voiceChannel: r }))
            return (0, i.jsxs)(M.A, {
                hoverText: a,
                forceHover: e,
                children: [
                    (0, i.jsx)(A.A, { children: tX.Ay.humanizeStatus(s) }),
                    (0, i.jsx)(S.A, {
                        user: l,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: r,
                        textClassName: lT.XD,
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
                      (0, i.jsx)(A.A, { children: tX.Ay.humanizeStatus(s) }),
                      (0, i.jsx)(q.A, { activity: o, emojiClassName: lT.Zg, className: lT.WO }),
                  ],
              })
            : null != s && s !== tr.clD.UNKNOWN && l.hasUniqueUsername()
              ? (0, i.jsx)(M.A, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(b, { text: tX.Ay.humanizeStatus(s) }),
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
                          className: lT.eW,
                          children: (0, i.jsx)(ij.A, {
                              className: a()({ [lT.e8]: null != e }),
                              children: (0, i.jsx)($.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? K.G.ANIMATED : K.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: lT.XP,
                          children: (0, i.jsx)(iT.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let { currentUser: t, dismissibleContents: n } = this.props;
        return null == t
            ? null
            : (0, i.jsx)(iX, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: t,
                  targetElementRef: this.avatarWithPopoutRef,
                  additionalDCs: n.avatar,
                  children: (0, i.jsx)(lR, {
                      ...this.props,
                      ref: this.avatarWithPopoutRef,
                      handleMouseLeave: this.handleMouseLeave,
                      renderNameTag: this.renderNameTag,
                      "data-jump-section": e["data-jump-section"],
                  }),
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: l, isListenAlongVisible: s } = this.props,
            r = this.state.hovered;
        return null == e
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(x.sk, {
                          children: (e) =>
                              (0, i.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: a()(lT.kL, { [lT.UG]: null != n, [lT.bc]: !l, [lT.G5]: s }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(z.A, { nameplate: t, hovered: r, placement: W.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(lb, {
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
                      (0, i.jsx)(eg, {}),
                  ],
              });
    }
}
function lb(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: l,
            serverMute: s,
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
            shouldShowPTTJoinTooltip: j = !1,
            dismissTooltips: _,
            speaking: N,
        } = e,
        S = (0, Q.K)(E);
    return (0, i.jsxs)("div", {
        className: lT.Uo,
        style: S,
        children: [
            (0, i.jsx)(lc, {
                accountContainerRef: v,
                selfMute: n,
                serverMute: s,
                suppress: r,
                awaitingRemote: l,
                onMouseEnter: d,
                onMouseLeave: h,
                onClick: p,
                onContextMenu: f,
                iconForeground: null != E ? lT.t4 : void 0,
                nameplate: E,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowInputDeviceChangedTooltip: !o && "input" === T,
                shouldShowSpeakingWhilePTTTooltip: u,
                shouldShowPTTJoinTooltip: j,
                dismissTooltips: _,
                speaking: N,
            }),
            (0, i.jsx)(i7, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: m,
                onContextMenu: g,
                awaitingRemote: l,
                iconForeground: null != E ? lT.t4 : void 0,
                nameplate: E,
                shouldShowOutputDeviceChangedTooltip: "output" === T,
                dismissTooltips: _,
            }),
            (0, i.jsx)(lv, {
                webBuildOverride: c,
                onClick: A,
                onContextMenu: x,
                dismissibleContents: C.settings,
                iconForeground: null != E ? lT.t4 : void 0,
                nameplate: E,
            }),
        ],
    });
}
function lM(e) {
    let t = (0, c.bG)([ii.A], () => null != ii.A.getChannelId()),
        n = (0, eA.Py)(e),
        i = l.useRef(new h.Ep()),
        [s, a] = l.useState(!1);
    l.useEffect(() => {
        t &&
            n &&
            (a(!0),
            i.current.start(ly, () => {
                a(!1);
            }));
    }, [t, n]);
    let r = l.useCallback(() => {
        a(!1), i.current.stop();
    }, []);
    return (
        (0, j.l0)(() => {
            i.current.stop();
        }),
        { shouldShowTooltip: s, dismissTooltip: r }
    );
}
function lw() {
    let e = (0, c.bG)([ni.default], () => ni.default.getCurrentUser()),
        t = (0, c.bG)([nE.default], () => nE.default.getId()),
        {
            activities: n,
            streaming: s,
            status: a,
        } = (0, c.cf)([nb.A], () => {
            let e = nb.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === tr.$pd.STREAMING;
                    }),
                status: nb.A.getStatus(),
            };
        }),
        r = (0, c.bG)([ih.A], () => ih.A.getAnyStreamForUser(t)),
        u = (0, T.A)({ userId: t }),
        m = (0, c.bG)([iu.A], () => iu.A.getVoiceVolume(t)),
        p = tX.Ay.useUserTag(e, { decoration: "never" }),
        f = (0, c.bG)([ii.A, im.A], () => {
            let e = ii.A.getChannelId();
            return null != e ? im.A.getChannel(e) : null;
        }),
        { mute: g, selfMute: A, suppress: x } = (0, ie.A)(f),
        { selfDeaf: E, deaf: v } = (0, n9.A)(f),
        _ = (0, c.bG)([U.A], () => ((0, D.kK)() ? U.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        N = (0, c.bG)([it.Ay], () => it.Ay.getSpeakingWhileMuted()),
        S = (0, c.bG)([P.A], () => P.A.isFullscreenInContext()),
        y = (0, c.bG)([ig.A], () => ig.A.hasLayers()),
        R = (0, C.useModalsStore)(C.hasAnyModalOpenSelector) || y || iE.P.isDisallowPopupsSet() || S,
        I = (0, c.bG)([Y.default], () => null != Y.default.getAwaitingRemoteSessionInfo()),
        b = (0, c.bG)([iA.A], () => iA.A.getGuildId()),
        M = e?.avatarDecoration,
        k = (0, V.A)(M),
        L = tX.Ay.useName(e) ?? "",
        { analyticsLocations: F } = (0, O.Ay)(w.A.ACCOUNT),
        G = (0, H.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: B } = (0, n3.c9)(),
        Q = (0, c.bG)([n6.A, ni.default, ip.A], () => {
            let e,
                t = n6.A.getSyncingWith(),
                n = n6.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = o()(Array.from(ip.A.getParty(e) ?? []))
                        .map((e) => ni.default.getUser(e))
                        .filter(nv.Vq)
                        .value()),
                i.length > 1
            );
        }),
        W = { avatar: [], settings: [] },
        z = (0, n4.lX)("AccountCoachmark");
    !R && (W.avatar.push(d.M.DISPLAY_NAME_STYLES_COACHMARK), z && W.settings.push(d.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: q, dismissTooltip: Z } = lM(is.oh.AUDIO_INPUT),
        { shouldShowTooltip: K, dismissTooltip: $ } = lM(is.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: X, dismissTooltip: J } = (function () {
            let [e, t] = l.useState(!1),
                n = (0, c.bG)([it.Ay], () => it.Ay.getMode() === is.TB.PUSH_TO_TALK),
                i = (0, c.bG)(
                    [ii.A],
                    () => null != ii.A.getChannelId() && (ii.A.getDuration() ?? Number.MAX_VALUE) < ia,
                ),
                [s, a] = l.useState(!1),
                { showPTTJoinTooltip: r } = il.A.useConfig({ location: "usePTTJoinTooltip" }),
                o = l.useRef(new h.Ep()),
                u = l.useRef(new h.Ep());
            l.useEffect(() => {
                if (i && n && !e) {
                    if ((il.A.getConfig({ location: "usePTTJoinTooltip:couldDisplayTooltip" }), !r)) return;
                    a(!0),
                        t(!0),
                        u.current.start(ir, () => {
                            t(!1);
                        }),
                        o.current.start(ia, () => {
                            a(!1);
                        });
                }
                i || a(!1);
            }, [i, n, r, e]);
            let d = l.useCallback(() => {
                a(!1), o.current.stop();
            }, []);
            return (
                (0, j.l0)(() => {
                    o.current.stop(), u.current.stop();
                }),
                { shouldShowTooltip: s, dismissTooltip: d }
            );
        })(),
        ee = (function () {
            let { showPTTSpeakingIndicator: e } = il.A.useConfig({ location: "useSpeakingWhilePTT" }),
                [t, n] = l.useState(!1),
                i = (0, c.bG)([it.Ay], () => it.Ay.getMode() === is.TB.PUSH_TO_TALK),
                s = (0, c.bG)([ii.A], () => ii.A.getRTCConnectionId()),
                a = (0, c.bG)([it.Ay], () => {
                    let e = it.Ay.getModeOptions().updatedAt;
                    return null != e && Date.now() - e < id;
                }),
                r = l.useRef(new h.Ep());
            return (
                l.useEffect(() => {
                    n(!1);
                }, [s]),
                l.useEffect(() => {
                    let t = 0,
                        l = r.current;
                    function o(e, i) {
                        let s = (i & is.ME.VOICE) === is.ME.VOICE,
                            a = iu.A.isCurrentUserPTTActive();
                        s && !a
                            ? ++t >= 6 &&
                              (n(!0),
                              l.start(ic, () => {
                                  n(!1);
                              }))
                            : (t = 0);
                    }
                    return (
                        a && e && i && null != s && it.Ay.getMediaEngine().on(io.bg.VoiceActivity, o),
                        () => {
                            it.Ay.getMediaEngine().removeListener(io.bg.VoiceActivity, o), l.stop();
                        }
                    );
                }, [e, i, a, s]),
                t
            );
        })(),
        et = l.useMemo(() => (q ? "input" : K ? "output" : void 0), [q, K]),
        en = l.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        Z();
                        break;
                    case "output":
                        $();
                }
            },
            [Z, $],
        );
    return (0, i.jsx)(O.f5, {
        value: F,
        children: (0, i.jsx)(lI, {
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
            speakingWhileMuted: N,
            speakingWhilePTTInactive: ee,
            status: a,
            streaming: s,
            suppress: x,
            webBuildOverride: _,
            awaitingRemote: I,
            nameplate: G,
            selectedGuildId: b,
            avatarDecoration: k,
            isQuestBarEmpty: B,
            isListenAlongVisible: Q,
            deviceChangedTooltipType: et,
            onDismissDeviceChangedTooltip: () => en(et),
            shouldShowPTTJoinTooltip: X,
            dismissPTTJoinTooltip: J,
        }),
    });
}
