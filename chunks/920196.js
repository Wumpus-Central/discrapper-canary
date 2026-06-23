"use strict";
n.d(t, { g: () => rb, A: () => rw }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(158390),
    c = n(17928),
    d = n(554146),
    _ = n(451988),
    h = n(97808),
    f = n(778712),
    p = n(922016),
    E = n(939249),
    m = n(140735),
    g = n(312138),
    A = n(192308),
    I = n(442433),
    T = n(820284),
    S = n(717558),
    y = n(964486),
    C = n(220839),
    N = n(397244),
    v = n(394871),
    R = n(308186),
    O = n(866323),
    b = n(449450);
function D(e) {
    let { text: t } = e,
        n = (0, O.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, i.jsx)("div", {
        className: b.k,
        children: n((e, t) => (0, i.jsx)(R.animated.div, { className: b.H, style: e, children: t })),
    });
}
var L = n(29160),
    w = n(793574),
    M = n(688810),
    P = n(521502),
    x = n(380610),
    k = n(313961),
    U = n(18235),
    G = n(183184),
    F = n(384059),
    V = n(480890),
    B = n(601255),
    j = n(562819),
    H = n(449582),
    Y = n(351952),
    W = n(88686),
    K = n(174755),
    $ = n(302223),
    z = n(609425),
    q = n(922301),
    Z = n(660184),
    X = n(643501),
    Q = n(534514),
    J = n(834730),
    ee = n(789645),
    et = n(826673),
    en = n(750506),
    ei = n(780964),
    er = n(766075),
    es = n(417146),
    ea = n(552122),
    eo = n(717421),
    el = n(775602),
    eu = n(993843);
let ec = { mass: 10, tension: 550, friction: 140 };
function ed(e) {
    let { className: t, pageMultiplier: n } = e,
        s = (0, c.bG)([el.Ay], () => el.Ay.useReducedMotion),
        [o, u] = r.useState({ x: 0, y: 0 }),
        d = r.useMemo(
            () =>
                l().throttle((e) => {
                    s || u({ x: (window.innerWidth - e.pageX * n) / 90, y: (window.innerHeight - e.pageY * n) / 90 });
                }, 20),
            [n, s],
        );
    r.useEffect(() => (window.addEventListener("mousemove", d), () => window.removeEventListener("mousemove", d)), [d]);
    let [_, h] = (0, eo.z)(() => ({ x: 0, y: 0, config: ec }));
    return (
        r.useEffect(() => {
            h({ x: o.x, y: o.y });
        }, [o.x, o.y, h]),
        (0, i.jsx)(R.animated.div, {
            style: { transform: (0, R.to)([_.x, _.y], (e, t) => `translate3d(${e}px, ${t}px, 0)`) },
            className: a()(eu.T, t),
        })
    );
}
var e_ = n(49999),
    eh = n(375708),
    ef = n(275883);
function ep(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: r } = e,
        s = ea.A.useIsEligible(),
        a = (0, et.JZ)(t),
        o = null != n,
        l = null != r ? { color: r } : void 0,
        { analyticsLocations: u } = (0, M.Ay)(w.A.HOLIDAY_COACHMARK),
        c = (e) => {
            (0, et.Dr)(t, { dismissAction: e });
        },
        d = () => {
            (0, er.openUserSettings)(ei.X.NOTIFICATIONS_PANEL, { analyticsLocations: u }), c(e_.i.TAKE_ACTION);
        };
    return s && !a
        ? (0, i.jsx)(en.Ay, {
              children: (0, i.jsxs)("div", {
                  className: ef.iE,
                  style: { backgroundColor: o ? n : void 0 },
                  children: [
                      !o &&
                          (0, i.jsxs)("div", {
                              className: ef.o5,
                              children: [
                                  (0, i.jsx)(ed, { className: ef.iL, pageMultiplier: 5 }),
                                  (0, i.jsx)("div", { className: ef.Np }),
                              ],
                          }),
                      (0, i.jsx)("div", { className: ef.c8 }),
                      (0, i.jsxs)("div", {
                          className: ef.Qs,
                          children: [
                              (0, i.jsxs)("div", {
                                  children: [
                                      (0, i.jsx)(Q.D, {
                                          variant: "heading-md/bold",
                                          color: null != l ? void 0 : "always-white",
                                          style: l,
                                          children: eh.intl.string(eh.t["6CxPoB"]),
                                      }),
                                      (0, i.jsx)(J.E, {
                                          variant: "text-xs/normal",
                                          color: "always-white",
                                          children: eh.intl.format(eh.t.IVzJ8G, {
                                              settingsHook: (e, t) =>
                                                  (0, i.jsx)(
                                                      E.D,
                                                      {
                                                          tag: "span",
                                                          className: ef.nf,
                                                          style: l,
                                                          onClick: d,
                                                          children: e,
                                                      },
                                                      t,
                                                  ),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(E.D, {
                                  className: ef.l2,
                                  onClick: () => c(e_.i.USER_DISMISS),
                                  children: (0, i.jsx)(ee.P, { color: "currentColor", size: "xs" }),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
function eE() {
    return null == es.A.coachmarkDismissibleContent
        ? null
        : (0, i.jsx)(ep, {
              dismissibleContent: es.A.coachmarkDismissibleContent,
              backgroundColor: es.A.coachmarkBackgroundColor,
              specialTextColor: es.A.coachmarkSpecialTextColor,
          });
}
var em = n(74848),
    eg = n(607399),
    eA = n(707554),
    eI = n(224640),
    eT = n(305866),
    eS = n(364522),
    ey = n(22231),
    eC = n(133171),
    eN = n(780338),
    ev = n(980707),
    eR = n(26137),
    eO = n(473935),
    eb = n(765671),
    eD = n(783041),
    eL = n(457965),
    ew = n(176781),
    eM = n(812993),
    eP = n(320448),
    ex = n(993401),
    ek = n(447349);
function eU(e) {
    return (0, i.jsx)("div", {
        className: ek.wE,
        children: (0, i.jsx)(ev.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function eG(e) {
    let {
            action: t,
            onClick: n,
            icon: s,
            label: a,
            sublabel: o,
            trailing: l,
            renderSubmenu: u,
            ref: c,
            submenuTargetElementRef: d,
            submenuAlign: _,
        } = e,
        h = null != n,
        f = (0, ex.rE)({ action: t, onClick: n }),
        [m, g] = r.useState(!1),
        I = r.useRef(null),
        T = c ?? I,
        S = null != u,
        y = S && h,
        C = r.useCallback(() => {
            g(!0);
        }, []),
        N = r.useCallback(() => {
            (0, A.hasAnyModalOpen)() || g(!1);
        }, []),
        v = () =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", {
                        className: ek.iA,
                        children: (0, i.jsx)(s, { size: "xs", color: "currentColor" }),
                    }),
                    (0, i.jsxs)("div", {
                        className: ek.$H,
                        children: [
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(J.E, {
                                        color: "currentColor",
                                        variant: "text-sm/medium",
                                        className: ek.W1,
                                        children: a,
                                    }),
                                    (0, i.jsx)(J.E, { color: "currentColor", variant: "text-xs/medium", children: o }),
                                ],
                            }),
                            l,
                        ],
                    }),
                ],
            }),
        R = (e) => {
            let t;
            return (
                (t = y
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(E.D, { className: ek.ef, onClick: f, children: v() }),
                              (0, i.jsx)(E.D, {
                                  className: ek.ap,
                                  "aria-label": eh.intl.string(eh.t.PdRCRg),
                                  ...e,
                                  onClick: C,
                                  children: (0, i.jsx)(eP._, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      })
                    : S
                      ? (0, i.jsxs)(E.D, {
                            className: ek.ef,
                            ...e,
                            onClick: C,
                            children: [
                                v(),
                                (0, i.jsx)("div", {
                                    className: ek.ap,
                                    children: (0, i.jsx)(eP._, { size: "xs", color: "currentColor" }),
                                }),
                            ],
                        })
                      : (0, i.jsx)(E.D, { className: ek.ef, onClick: f, children: v() })),
                (0, i.jsx)("div", { ref: T, className: ek.jG, children: t })
            );
        };
    return S
        ? (0, i.jsx)("li", {
              className: ek.j$,
              onMouseEnter: C,
              onMouseLeave: N,
              children: (0, i.jsx)(p.Y, {
                  targetElementRef: d ?? T,
                  align: _,
                  spacing: 0,
                  renderPopout: u,
                  shouldShow: m,
                  onRequestClose: N,
                  children: R,
              }),
          })
        : (0, i.jsx)("li", { className: ek.j$, children: R() });
}
function eF(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var eV = n(734066),
    eB = n(274372),
    ej = n(334686),
    eH = n(409067),
    eY = n(271597),
    eW = n(990078),
    eK = n(475358),
    e$ = n(408278),
    ez = n(625903),
    eq = n(404778),
    eZ = n(689175),
    eX = n(821609),
    eQ = n(532624),
    eJ = n(927813),
    e0 = n(879631),
    e1 = n(350535),
    e2 = n(372684),
    e3 = n(974293),
    e6 = n(572164),
    e4 = n(953932),
    e5 = n(280483),
    e7 = n(890856),
    e8 = n(713517),
    e9 = n(609174),
    te = n(619744);
let tt = (e) => {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        s = (0, e9.Y_)(),
        a = r.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), t?.(), (0, eY.p)({ initialEditingClipId: s.id });
            },
            [s, t],
        );
    return (0, i.jsx)(eX.$, {
        onClick: a,
        icon: ey.R,
        variant: n,
        size: "sm",
        text: eh.intl.string(eh.t.bt75uw),
        fullWidth: !0,
    });
};
var tn = n(82716),
    ti = n(585579),
    tr = n(226870),
    ts = n(285072),
    ta = n(316305);
let to = r.memo(function (e) {
    let { clip: t, isNew: n, onClose: s, className: o } = e,
        l = r.useRef(null),
        { isHoveringOrFocusing: u } = (0, e8.A)(l),
        c = r.useCallback(() => {
            s?.(), (0, eY.p)({ initialEditingClipId: t.id });
        }, [t.id, s]);
    return (0, i.jsx)(e9.Cl, {
        clip: t,
        children: (0, i.jsx)(e7.s, {
            ref: l,
            "aria-label": eh.intl.string(eh.t.bt75uw),
            onClick: c,
            className: a()(ta.Z1, o),
            children: (0, i.jsxs)(tr.d, {
                isStatic: !0,
                children: [
                    n && (0, i.jsx)(eM.Lp, { className: ta.Ad, text: eh.intl.string(eh.t.y2b7CA) }),
                    (0, i.jsxs)(ts.h, {
                        isVisible: u,
                        className: ta.Lw,
                        children: [
                            (0, i.jsxs)("div", {
                                className: ta.mY,
                                children: [(0, i.jsx)(tn.z, {}), (0, i.jsx)(te.k, {})],
                            }),
                            (0, i.jsxs)("div", {
                                className: ta.E_,
                                children: [
                                    (0, i.jsx)(tt, { onBeforeEdit: s, variant: "overlay-secondary" }),
                                    (0, i.jsx)(ti.E, {}),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
var tl = n(652215),
    tu = n(753070),
    tc = n(16590),
    td = n(550350);
function t_(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: s, setPopoutRef: a } = e;
    (0, e5.A)();
    let o = (0, c.yK)([eB.Ay], () => Object.values(eB.Ay.getClips())),
        l = (0, c.bG)([eB.Ay], () => eB.Ay.getSettings()),
        u = (0, c.bG)([eB.Ay], () => eB.Ay.getNewClipIds()),
        d = (0, e3.aJ)("ClipsPopout"),
        _ = (0, c.bG)([eB.Ay], () => eB.Ay.getEnableAutoclipping()),
        h = (0, c.bG)([eQ.Ay], () => eQ.Ay.getKeybindForAction(tl.hCu.SAVE_CLIP)),
        f = r.useRef(null),
        { enabled: p } = ej.O.useConfig({ location: "ClipsPopout" }),
        E = p && !l.showPovClipsInGallery,
        m = r.useMemo(() => {
            let e = o.filter((e) => e.type === e2.nQ.CLIP && "" !== e.thumbnail && (!E || !(0, eH.kD)(e)));
            return e.sort((e, t) => t.createdAt - e.createdAt), e;
        }, [o, E]),
        g = r.useMemo(() => m.slice(0, 16), [m]),
        A = m.length > 16,
        I = null != h ? e1.dI(h.shortcut, !0) : null,
        T = [
            (0, e0.$)(l.clipsLength / eJ.A.Millis.SECOND),
            (0, tu.zr)(l.clipsQuality.resolution),
            eh.intl.formatToPlainString(eh.t.Qb44XH, { fps: l.clipsQuality.frameRate }),
        ];
    return (
        d && T.push(eh.intl.string(tc.default.XWkJoi)),
        (0, i.jsxs)("div", {
            ref: (e) => {
                (f.current = e), a?.(e);
            },
            className: td.SW,
            role: "dialog",
            "aria-label": eh.intl.string(eh.t.z2jK6X),
            children: [
                (0, i.jsxs)("div", {
                    className: td.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: td.$,
                            children: [
                                (0, i.jsx)(Q.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: eh.intl.string(eh.t.z2jK6X),
                                }),
                                null != I && (0, i.jsx)(eK.e, { className: td.P, shortcut: I }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: td.$s,
                            children: [
                                (0, i.jsx)(eW.m, {
                                    text: eh.intl.string(eh.t["3D5yo/"]),
                                    children: (0, i.jsx)(e$.K, {
                                        onClick: () => n(),
                                        icon: ez.Z,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eh.intl.string(eh.t["3D5yo/"]),
                                    }),
                                }),
                                (0, i.jsx)(eW.m, {
                                    text: eh.intl.string(tc.default["55C2MH"]),
                                    children: (0, i.jsx)(e$.K, {
                                        onClick: () => t(),
                                        icon: ew.x,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eh.intl.string(tc.default["55C2MH"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: td.ov,
                    children: [
                        T.map((e, t) =>
                            (0, i.jsxs)(
                                r.Fragment,
                                {
                                    children: [
                                        t > 0 && (0, i.jsx)("span", { className: td.LO, children: "\u2022" }),
                                        (0, i.jsx)(J.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            tag: "span",
                                            className: td.c5,
                                            children: e,
                                        }),
                                    ],
                                },
                                e,
                            ),
                        ),
                        d &&
                            (0, i.jsx)(J.E, {
                                variant: "text-xs/semibold",
                                color: _ ? "text-strong" : "text-feedback-critical",
                                tag: "span",
                                className: td.wS,
                                children: _ ? eh.intl.string(tc.default.lTwKmt) : eh.intl.string(tc.default.GNDqtf),
                            }),
                    ],
                }),
                (0, i.jsx)(eq.c, {}),
                g.length > 0
                    ? (0, i.jsxs)(eZ.Ch, {
                          className: td.Vg,
                          fade: !0,
                          disableFocusRingScope: !0,
                          children: [
                              g.map((e) => (0, i.jsx)(to, { clip: e, isNew: u.includes(e.id), onClose: s }, e.id)),
                              A &&
                                  (0, i.jsx)("div", {
                                      className: td.qr,
                                      children: (0, i.jsx)(eX.$, {
                                          onClick: () => t(),
                                          text: eh.intl.string(tc.default["55C2MH"]),
                                          variant: "secondary",
                                          size: "sm",
                                      }),
                                  }),
                          ],
                      })
                    : (0, i.jsx)(th, { keybindString: I }),
            ],
        })
    );
}
function th(e) {
    let { keybindString: t } = e,
        n = (0, e6.Et)();
    return (0, i.jsxs)("div", {
        className: td.p$,
        children: [
            (0, i.jsx)(J.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: td.qO,
                children: eh.intl.string(tc.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(J.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: td.CZ,
                      children: eh.intl.format(tc.default.y4zC7j, {
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
                          keybind: (0, i.jsx)(eK.e, { shortcut: t }),
                      }),
                  })
                : (0, i.jsx)(e4.A, {}),
        ],
    });
}
function tf(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        s = (0, eV.sw)(),
        { enabled: a } = ej.O.useConfig({ location: "ClipsUserStatusMenuItem" }),
        o = (0, c.bG)([eB.Ay], () => eB.Ay.getSettings().showPovClipsInGallery),
        l = a && !o,
        u = (0, c.bG)([eB.Ay], () => {
            let e = eB.Ay.getNewClipIds();
            return l
                ? e.filter((e) => {
                      let t = eB.Ay.getClipById(e);
                      return null != t && !(0, eH.kD)(t);
                  }).length
                : e.length;
        }, [l]),
        d = r.useCallback(
            (e) => {
                t(), (0, eY.p)({ initialEditingClipId: e });
            },
            [t],
        ),
        _ = r.useCallback(() => {
            t(), (0, er.openUserSettings)(ei.X.CLIPS_PANEL);
        }, [t]);
    return s
        ? (0, i.jsx)(eG, {
              action: "PRESS_CLIPS",
              icon: ew.x,
              label: eh.intl.string(eh.t.z2jK6X),
              trailing: u > 0 ? (0, i.jsx)(eM.hV, { count: u }) : null,
              onClick: () => d(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, i.jsx)(t_, { ...e, onOpenGallery: d, onOpenSettings: _, onClose: t }),
          })
        : null;
}
var tp = n(480335),
    tE = n(31956),
    tm = n(361628),
    tg = n(744808),
    tA = n(645507),
    tI = n(970931),
    tT = n(315710),
    tS = n(832248),
    ty = n(462887),
    tC = n(736653),
    tN = n(439174),
    tv = n(428262),
    tR = n(878784),
    tO = n(788868);
function tb() {
    let e = (0, tR.Xb)(),
        t = (0, tv.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tO.sp.length - 1; t >= 0; t--) {
        let i = tO.VD[tO.sp[t]],
            r = new Date(e);
        if ((r.setMonth(e.getMonth() + i.tenureReqNumMonths), r.setHours(r.getHours() + 30), n > r.getTime()))
            if (n - r.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let tD = {
        [tO.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tO.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tO.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tO.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tO.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tO.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tO.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tO.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tL = {
        [tO.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [tO.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [tO.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [tO.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [tO.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [tO.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [tO.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [tO.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var tw = n(682165);
let tM = r.lazy(() => Promise.all([n.e("15323"), n.e("24832")]).then(n.bind(n, 748579)));
function tP() {
    let e = (0, c.bG)([el.Ay], () => el.Ay.useReducedMotion),
        t = (0, tS.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tb(),
                t = (0, ty.M)((0, tC.Ay)());
            if (null == e) return null;
            let n = tD[e],
                i = tL[e],
                r = {
                    currentBadge: (0, tN.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                s = tO.sp.indexOf(e);
            if (s > 0) {
                let e = tO.sp[s - 1],
                    n = tD[e];
                (r.prevBadge = (0, tN.e0)(e)), (r.prevBadgeTextGradient = t ? n?.dark : n?.light);
            }
            return r;
        })(),
        [s, a] = r.useState(null);
    return (null != n && null == s && a(n), e || !t || null == s) ? null : (0, i.jsx)(tx, { levelUpData: s });
}
function tx(e) {
    let { levelUpData: t } = e,
        n = r.useRef(null),
        s = r.useCallback(() => {
            tS.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, i.jsx)(tT.O, {
        containerRef: n,
        children: (0, i.jsxs)("div", {
            className: tw.i,
            children: [
                (0, i.jsx)("div", {
                    className: tw.b,
                    children: (0, i.jsx)(eW.m, {
                        text: eh.intl.string(eh.t.cpT0Cq),
                        children: (0, i.jsx)(e$.K, {
                            icon: ee.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: s,
                            "aria-label": eh.intl.string(eh.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, i.jsx)(r.Suspense, { fallback: null, children: (0, i.jsx)(tM, { levelUpData: t }) }),
            ],
        }),
    });
}
var tk = n(206835),
    tU = n(183555),
    tG = n(999291),
    tF = n(975732),
    tV = n(718019),
    tB = n(795873),
    tj = n(915614),
    tH = n(744753),
    tY = n(559506),
    tW = n(646986),
    tK = n(349419),
    t$ = n(946356),
    tz = n(878555),
    tq = n(624479),
    tZ = n(206845),
    tX = n(957565),
    tQ = n(427262),
    tJ = n(962352);
function t0(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: r } = (0, tU.NJ)();
    return tX.p5
        ? (0, i.jsx)(tZ.A, {
              text: eh.intl.string(eh.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: tQ.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => r({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(E.D, {
                      ...e,
                      className: a()(tJ.c, { [tJ.R]: n }),
                      "aria-label": eh.intl.string(eh.t.y5MwJy),
                      children: (0, i.jsx)(tq.T, { size: "xs", color: "currentColor" }),
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
    t7 = n(661531),
    t8 = n(477782),
    t9 = n(628284),
    ne = n(695366),
    nt = n(363195),
    nn = n(889227),
    ni = n(287809),
    nr = n(174459),
    ns = n(429707),
    na = n(274303),
    no = n(994125),
    nl = n(347853),
    nu = n(573879),
    nc = n(335020),
    nd = n(43105),
    n_ = n(704824),
    nh = n(46225),
    nf = n(429913),
    np = n(379848),
    nE = n(633075),
    nm = n(735321),
    ng = n(667049),
    nA = n(606758),
    nI = n(495544),
    nT = n(403362),
    nS = n(518477);
function ny(e) {
    let { targetElementRef: t, onClose: n } = e,
        [s, a] = r.useState(!1),
        { trackUserProfileEditAction: o } = (0, tU.NJ)(),
        l = (0, c.bG)([nI.default], () => nI.default.getId()),
        u = (function () {
            let e,
                t,
                n = (0, c.bG)([nI.default], () => nI.default.getId()),
                i = (0, ng.A)(n),
                s = r.useMemo(() => i.filter((e) => e instanceof nE.R), [i]),
                a =
                    ((e = (0, eL.VA)({ location: "UserProfileAccountPopoutApplicationWidgetCoachmark" })),
                    r.useMemo(() => e?.filter((e) => e.isEligibleForEditProfileUpsell()), [e])),
                o = r.useMemo(() => a?.map((e) => e.applicationId) ?? [], [a]),
                l = ((t = (0, nf.A)(o)), r.useMemo(() => t.filter(nT.Vq), [t])),
                { tokens: u, fetched: d } = (0, n_.j)(o),
                _ = (0, nh.U9)(l);
            return r.useMemo(() => {
                if (null == a || null == u || !d) return null;
                let e = [],
                    t = [];
                for (let n of a) {
                    let i = u.find((e) => e.application.id === n.applicationId),
                        r = s.find((e) => e.applicationId === n.applicationId),
                        a = l.find((e) => e.id === n.applicationId),
                        o = _.find((e) => e.context.application.id === n.applicationId);
                    if (null == a) return null;
                    null != i && null == r
                        ? e.push({
                              type: "linked",
                              config: n,
                              application: a,
                              dismissibleContent: n.editProfileLinkedDc,
                          })
                        : null == i &&
                          o?.preferredFlow != null &&
                          t.push({
                              type: "unlinked",
                              config: n,
                              application: a,
                              dismissibleContent: n.editProfileUnlinkedDc,
                              authFlow: o.preferredFlow,
                          });
                }
                return [...e, ...t];
            }, [a, u, d, s, l, _]);
        })(),
        { analyticsLocations: d } = (0, M.Ay)();
    return null == u || 0 === u.length
        ? null
        : (0, i.jsx)(np.Ay, {
              contentTypes: u.map((e) => e.dismissibleContent),
              children: (e) => {
                  let { visibleContent: r, markAsDismissed: c } = e,
                      _ = u.find((e) => e.dismissibleContent === r);
                  if (null == _) return null;
                  let h = "linked" === _.type,
                      f = () =>
                          (0, tF.openUserProfileModal)({ userId: l, tabSection: nS.RP.WIDGETS }).then(() => {
                              c(e_.i.TAKE_ACTION), n();
                          });
                  return (0, i.jsx)(nd.A, {
                      targetElementRef: t,
                      position: "right",
                      gradientColor: "blue",
                      graphic:
                          null != _.config.editProfileUpsellImage
                              ? { type: "image", src: _.config.editProfileUpsellImage }
                              : void 0,
                      title: eh.intl.format(eh.t.TXDztH, { applicationName: _.application.name }),
                      body: h ? eh.intl.string(eh.t["63Kso0"]) : eh.intl.string(eh.t.HwXoeC),
                      onRequestClose: () => c(e_.i.USER_DISMISS),
                      actions: [
                          h
                              ? {
                                    text: eh.intl.string(eh.t.VSLDly),
                                    onClick: () => {
                                        a(!0),
                                            f()
                                                .then(() => {
                                                    let e;
                                                    return (
                                                        (e = new nE.R({ applicationId: _.application.id })),
                                                        void ((0, nm.Y5)(e),
                                                        o({
                                                            action: "WIDGET_ADDED",
                                                            ...e.getProfileEditAnalyticsOptions(),
                                                        }),
                                                        (0, nA.XA)(nS.jM.WIDGET_ADDED))
                                                    );
                                                })
                                                .finally(() => a(!1));
                                    },
                                    loading: s,
                                }
                              : {
                                    text: eh.intl.string(eh.t["DSJi3+"]),
                                    onClick: () => {
                                        _.authFlow.initiate({
                                            onConfirm: () => {
                                                a(!0), f().finally(() => a(!1));
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
var nC = n(661439),
    nN = n(385113),
    nv = n(188951),
    nR = n(334074),
    nO = n(90165);
function nb(e) {
    let { targetElementRef: t, onClose: s } = e,
        [a, o] = r.useState(!1),
        l = (0, c.bG)([nI.default], () => nI.default.getId()),
        { eligibleApplications: u, markAsDismissed: _ } = (function () {
            let e = (0, c.yK)([nN.A], () => nN.A.getFeaturedApplicationIds());
            (0, nv.A)(e),
                r.useEffect(() => {
                    (0, nC.X)();
                }, []);
            let t = (0, c.bG)([nI.default], () => nI.default.getId()),
                n = (0, ng.A)(t),
                i = r.useMemo(() => n.filter((e) => e instanceof nE.R), [n]),
                s = (0, nf.A)(e),
                a = r.useMemo(() => s.filter(nT.Vq), [s]),
                o = (0, c.cf)([nO.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = a.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = nO.A.getLastPlayedDateTime(e));
                    }
                    return t;
                }),
                l = r.useMemo(() => {
                    let e = Date.now();
                    return a.filter((t) => {
                        if (i.some((e) => e.applicationId === t.id)) return !1;
                        let n = o[t.id];
                        return null != n && e - n < 7776e6;
                    });
                }, [a, i, o]),
                { eligibleToShow: u, markAsDismissed: _ } = (0, nR.hj)({
                    applications: l,
                    dismissibleContent: d.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: nR.SH,
                });
            return {
                eligibleApplications: r.useMemo(() => l.filter((e) => u.includes(e.id)), [l, u]),
                markAsDismissed: _,
            };
        })();
    return ((0, r.useEffect)(() => {
        0 !== u.length &&
            Promise.all([
                n.e("69944"),
                n.e("56000"),
                n.e("4589"),
                n.e("64578"),
                n.e("60361"),
                n.e("49451"),
                n.e("81483"),
                n.e("70402"),
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
                n.e("88634"),
                n.e("86122"),
                n.e("14831"),
                n.e("25821"),
                n.e("90645"),
                n.e("48997"),
                n.e("94970"),
                n.e("70486"),
                n.e("44400"),
                n.e("25781"),
                n.e("86047"),
                n.e("24685"),
                n.e("15166"),
                n.e("12375"),
                n.e("25711"),
                n.e("53417"),
                n.e("23549"),
                n.e("68201"),
                n.e("93103"),
                n.e("34552"),
                n.e("21921"),
                n.e("9233"),
                n.e("8757"),
                n.e("72963"),
                n.e("23625"),
                n.e("54037"),
                n.e("68403"),
                n.e("88599"),
                n.e("75842"),
                n.e("29787"),
                n.e("71273"),
                n.e("9640"),
                n.e("98765"),
                n.e("52548"),
                n.e("28083"),
                n.e("53984"),
                n.e("43780"),
                n.e("76273"),
                n.e("52229"),
                n.e("95340"),
                n.e("36877"),
                n.e("69747"),
                n.e("21930"),
                n.e("3930"),
                n.e("3663"),
                n.e("92077"),
                n.e("89523"),
                n.e("29260"),
                n.e("82486"),
                n.e("755"),
                n.e("93993"),
                n.e("54241"),
                n.e("41786"),
                n.e("24303"),
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
                n.e("79549"),
                n.e("78377"),
                n.e("53683"),
                n.e("84601"),
                n.e("9598"),
                n.e("45879"),
                n.e("86470"),
                n.e("53308"),
                n.e("54876"),
                n.e("40042"),
                n.e("14501"),
                n.e("27880"),
                n.e("8032"),
                n.e("77970"),
                n.e("88504"),
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
              title: eh.intl.string(eh.t.HMWL9c),
              body: eh.intl.string(eh.t["9hfy3A"]),
              onRequestClose: () =>
                  _(
                      u.map((e) => e.id),
                      e_.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: eh.intl.string(eh.t.VSLDly),
                      loading: a,
                      onClick: () => {
                          o(!0),
                              (0, tF.openUserProfileModal)({ userId: l, tabSection: nS.RP.WIDGETS })
                                  .then(() => {
                                      let e = u.map((e) => e.id);
                                      (0, A.openModalLazy)(
                                          async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("15166"),
                                                  n.e("12375"),
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
                                          _(
                                              u.map((e) => e.id),
                                              e_.i.TAKE_ACTION,
                                          ),
                                          s();
                                  })
                                  .finally(() => o(!1));
                      },
                  },
              ],
          });
}
var nD = n(461213),
    nL = n(818348),
    nw = n(466573);
function nM() {
    let e = (0, c.bG)([nD.A], () => nD.A.getStatus()),
        t = (0, tQ.MU)(e) ?? "",
        n = e === nL.cl.INVISIBLE || e === nL.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: nw.k,
        children: [
            (0, i.jsxs)(m.A, { tag: "div", children: [eh.intl.string(eh.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(eW.m, {
                    text: eh.intl.string(eh.t.L99HQm),
                    children: (0, i.jsx)(ne.E, {
                        size: "xs",
                        color: t7.A.colors.STATUS_WARNING,
                        "aria-label": eh.intl.string(eh.t.L99HQm),
                    }),
                }),
        ],
    });
}
var nP = n(841595);
let nx = (0, n(945810).mj)({
    name: "2025-12-social-layer-storefront-wishlist-user-account-popout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var nk = n(501838),
    nU = n(760716),
    nG = n(915089),
    nF = n(13808);
function nV(e) {
    let {
            markAsDismissed: t,
            heading: n,
            subheading: s,
            children: o,
            height: l,
            className: u,
            contentClassName: c,
        } = e,
        d = (0, nG.GV)(),
        _ = r.useRef(null),
        h = (0, eo.z)({
            from: { transform: "translate3d(-110%, 0, 0)", height: l },
            to: { transform: "translate3d(0, 0, 0)", height: l },
            config: { mass: 1, stiffness: 100, damping: 15 },
            onRest: () => {
                null != _.current && _.current.focus();
            },
        });
    return (0, i.jsx)(R.animated.div, {
        className: a()(nF.kL, u),
        style: h,
        children: (0, i.jsxs)("aside", {
            "aria-labelledby": d,
            className: nF.Qs,
            children: [
                (0, i.jsxs)("div", {
                    className: nF.U1,
                    children: [
                        (0, i.jsx)(E.D, {
                            innerRef: _,
                            "aria-label": eh.intl.string(eh.t.WAI6xu),
                            className: nF.b,
                            onClick: () => {
                                t(e_.i.USER_DISMISS);
                            },
                            children: (0, i.jsx)(ee.P, { color: "currentColor" }),
                        }),
                        (0, i.jsx)(Q.D, { id: d, variant: "heading-lg/semibold", children: n }),
                    ],
                }),
                null != s && (0, i.jsx)(J.E, { variant: "text-md/normal", color: "text-subtle", children: s }),
                (0, i.jsx)(eS.Ip, {
                    className: nF.XG,
                    fade: !0,
                    children: (0, i.jsx)("div", { className: a()(nF.gT, c), children: o }),
                }),
            ],
        }),
    });
}
var nB = n(973912),
    nj = n(871123),
    nH = n(44724),
    nY = n(501573);
function nW() {
    (0, nH.default)({ guildId: (0, nj.zf)() });
}
function nK(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: r } = e,
        { analyticsLocations: s } = (0, M.Ay)([w.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
    return null == t
        ? null
        : (0, i.jsxs)(nV, {
              heading: eh.intl.string(eh.t["vy/61K"]),
              subheading: eh.intl.string(eh.t.tEee9t),
              markAsDismissed: r,
              className: nY.Zj,
              contentClassName: nY.hQ,
              height: 560,
              children: [
                  (0, i.jsx)(nB.A, {
                      userId: t,
                      analyticsLocations: s,
                      handleOpenUserProfileModal: n,
                      numWishlistItemsToRecommend: 9,
                      className: nY.KN,
                  }),
                  (0, i.jsx)("div", {
                      className: nY.UD,
                      children: (0, i.jsx)(eX.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text: eh.intl.string(eh.t.rg9FQp),
                          onClick: nW,
                      }),
                  }),
              ],
          });
}
function n$(e) {
    let { displayProfile: t, handleOpenUserProfileModal: n, height: s } = e,
        a = (function (e) {
            let { location: t } = e,
                n = (function (e) {
                    let { location: t } = e;
                    return nx.useConfig({ location: t }).enabled;
                })({ location: t }),
                i = (0, c.bG)([ni.default], () => ni.default.getCurrentUser()),
                s = (0, c.bG)([nP.A], () => (null != i ? nP.A.getFirstWishlistId(i.id) : null)),
                a = (0, nU.i)((e) => e.recommendationApplicationIds),
                l = (0, nk.rY)(),
                u = (0, nk.qx)();
            return r.useMemo(
                () => (null != a || (null == s && n) ? (0, o.uniq)([...(a ?? []), ...u, ...l]).sort() : []),
                [n, s, u, l, a],
            );
        })({ location: "AccountProfilePopoutUpsell" }),
        l = r.useMemo(() => {
            let e = [];
            return a.length > 0 && e.push(d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e;
        }, [a]);
    return (0, i.jsx)(np.Ay, {
        contentTypes: l,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: r, markAsDismissed: a } = e;
            return null == s
                ? null
                : r === d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                  ? (0, i.jsx)(nK, { profileUserId: t?.userId, handleOpenUserProfileModal: n, markAsDismissed: a })
                  : null;
        },
    });
}
var nz = n(146901),
    nq = n(827827);
let nZ = [
        { duration: 15 * eJ.A.Millis.MINUTE, label: () => eh.intl.string(eh.t["8ot6gv"]) },
        { duration: eJ.A.Millis.HOUR, label: () => eh.intl.string(eh.t.UMWBZr) },
        { duration: 8 * eJ.A.Millis.HOUR, label: () => eh.intl.string(eh.t.EpAXPC) },
        { duration: eJ.A.Millis.DAY, label: () => eh.intl.string(eh.t["755t4q"]) },
        { duration: 3 * eJ.A.Millis.DAY, label: () => eh.intl.string(eh.t["f3/1ch"]) },
        { duration: void 0, label: () => eh.intl.string(eh.t["46dqJY"]) },
    ],
    nX = "forever";
function nQ(e) {
    let { status: t, currentStatus: n, description: r } = e,
        s = t !== tl.clD.ONLINE,
        a = (0, i.jsx)(i.Fragment, {
            children: nZ.map((e) => {
                let { duration: r, label: s } = e;
                return (0, i.jsx)(
                    t8.Dr,
                    {
                        id: `${t}-${r}`,
                        label: s(),
                        action: () => (0, nq.A)({ nextStatus: t, prevStatus: n, durationMillis: r }),
                        dontCloseOnAction: !0,
                    },
                    r ?? nX,
                );
            }),
        });
    return (0, i.jsx)(t8.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: s,
        label: (0, tQ.MU)(t),
        subtext: r,
        iconLeft: () => (0, i.jsx)(eC.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, nq.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: s ? a : void 0,
    });
}
function nJ(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, nz._)(e);
    return "today" === t
        ? eh.intl.formatToPlainString(eh.t.ZxxHIO, { timeString: i })
        : eh.intl.formatToPlainString(eh.t["9OFjSe"], { dateString: n, timeString: i });
}
var n0 = n(996988),
    n1 = n(656884);
function n2(e) {
    let t,
        n,
        s,
        o,
        l,
        u,
        d,
        _,
        p,
        { currentUser: E, onClose: g, setPopoutRef: I, highlightBadge: T, openedAt: S, className: y } = e,
        C = __OVERLAY__,
        N = (0, tG.Ay)(E.id, void 0),
        { analyticsLocations: v } = (0, M.Ay)(w.A.USER_PROFILE_ACCOUNT_POPOUT),
        R = (0, tU.pb)({ layout: "ACCOUNT_POPOUT", userId: E.id, guildId: void 0 }),
        { ref: O, height: b } = (0, eb.Ay)(),
        { isHoveringOrFocusing: D, isHovering: L } = (0, e8.A)(O);
    r.useEffect(() => {
        I?.(O.current);
    }, [O, I]),
        r.useEffect(
            () => (tS.A.setState({ isOpen: !0 }), () => tS.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1 })),
            [],
        );
    let P = (0, c.bG)([t6.A], () => t6.A.getStatus(E.id)),
        x = nJ(t3.CY.useSetting()),
        k = (0, c.bG)([t4.A], () => t4.A.hidePersonalInformation),
        U = (0, tI.kB)(),
        G = t3.Q_.useSetting(),
        F =
            ((t = t3.CY.useSetting()),
            (n = (0, tI.kB)()),
            (s = t3.Jr.useSetting()),
            (o = (e) => {
                let i = nJ(t);
                if (P === e && null != i) return i;
                switch (e) {
                    case tl.clD.DND:
                        return n ? eh.intl.string(eh.t.day5A6) : eh.intl.string(eh.t["tq/fMK"]);
                    case tl.clD.INVISIBLE:
                        return eh.intl.string(eh.t.zPc6Mc);
                    default:
                        return;
                }
            }),
            (l = (0, i.jsx)(i.Fragment, {
                children: nZ.map((e) => {
                    let { duration: t, label: n } = e;
                    return (0, i.jsx)(
                        t8.Dr,
                        {
                            id: `${P}-${t}`,
                            label: n(),
                            action: () => {
                                (0, tI.ES)(!0, t);
                            },
                            dontCloseOnAction: !0,
                        },
                        t ?? nX,
                    );
                }),
            })),
            (u = nQ({ status: tl.clD.ONLINE, currentStatus: P })),
            (d = nQ({ status: tl.clD.IDLE, currentStatus: P, description: o(tl.clD.IDLE) })),
            (_ = nQ({ status: tl.clD.DND, currentStatus: P, description: o(tl.clD.DND) })),
            (p = nQ({ status: tl.clD.INVISIBLE, currentStatus: P, description: o(tl.clD.INVISIBLE) })),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    u,
                    (0, i.jsx)(t8.bX, {}, "menu-separator-statuses"),
                    d,
                    _,
                    p,
                    n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(t8.bX, {}, "menu-separator-statuses"),
                                  (0, i.jsx)(
                                      t8.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: eh.intl.string(eh.t.gJRnwK),
                                          iconLeft: eN.a,
                                          leadingAccessory: { type: "icon", icon: eN.a },
                                          badge: { text: eh.intl.string(eh.t.ApAu9f) },
                                          subtext:
                                              null != s && "0" !== s
                                                  ? eh.intl.format(eh.t.BWD8fs, {
                                                        endTime: new Date(Number(s)).toLocaleString(
                                                            eh.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : eh.intl.string(eh.t["Br1q+x"]),
                                          action: () => {
                                              (0, tI.ES)(!n);
                                          },
                                          dontCloseOnAction: !0,
                                          children: l,
                                      },
                                      "quiet-mode",
                                  ),
                              ],
                          })
                        : null,
                ],
            })),
        V = (function (e) {
            let t = (0, c.bG)([ni.default], () => ni.default.getCurrentUser()),
                n = (0, c.bG)([t4.A], () => t4.A.hidePersonalInformation),
                r = (0, c.bG)([nt.A], () => (0, ty.M)(nt.A.theme)),
                { multiAccountUsers: s } = (0, no.K)(),
                a = s.map((s) => {
                    let a = new nn.A(s),
                        o = a.id === t?.id,
                        l = s.tokenStatus === na.U.INVALID,
                        u = n ? null : `#${a.discriminator}`;
                    return (0, i.jsx)(
                        t8.Dr,
                        {
                            id: a.id,
                            focusedClassName: nc.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: nc.ci,
                                    children: [
                                        (0, i.jsx)(h.eu, {
                                            src: a.getAvatarURL(void 0, 40),
                                            size: f._3.SIZE_24,
                                            "aria-label": s.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: nc.DD,
                                            children: [
                                                (0, i.jsx)(J.E, {
                                                    className: nc.gE,
                                                    variant: "text-sm/normal",
                                                    children: tQ.Ay.getUserTag(a, {
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
                                        o &&
                                            (0, i.jsx)(t9.y, {
                                                size: "sm",
                                                color: t
                                                    ? t7.A.unsafe_rawColors.WHITE.css
                                                    : t7.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && r) || (t && !r)
                                                        ? t7.A.unsafe_rawColors.BRAND_500.css
                                                        : t7.A.unsafe_rawColors.WHITE.css,
                                                className: nc.s0,
                                            }),
                                        l &&
                                            (0, i.jsx)(ne.E, {
                                                color: t7.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && r) || (t && !r)
                                                        ? t7.A.unsafe_rawColors.BRAND_500.css
                                                        : t7.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: nc.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), l)) (0, nl.A)();
                                else {
                                    var n;
                                    (n = a.id) !== t?.id &&
                                        (nr.default.track(tl.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tl.JJy.USER_PROFILE },
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
                            (0, i.jsx)(t8.bX, {}),
                            (0, i.jsx)(t8.Dr, {
                                id: "manage-accounts",
                                label: eh.intl.string(eh.t.WbFpq4),
                                action: () => {
                                    e?.(), (0, nl.A)();
                                },
                            }),
                        ],
                    }),
                ),
                a
            );
        })(g),
        B = (0, tk.A)({ analyticsLocations: v }),
        j = (0, tv.TW)(E),
        H = r.useRef(null),
        Y = r.useRef(null),
        W = (0, tm.A)(N?.profileFrame?.skuId, "UserProfileAccountPopout");
    (0, tE.A)({ skuId: N?.profileFrame?.skuId, openedAt: S, context: R, analyticsLocations: v });
    let K = r.useRef((0, tS.A)((e) => e.shouldRenderTenureLevelUp)),
        $ = r.useMemo(() => (0, tA.A)(), []),
        [z, q] = r.useState(() => tS.A.getState().shouldRenderTenureLevelUp);
    r.useEffect(() => {
        let e = setTimeout(() => {
            q(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let Z = (e) => {
            g?.(), (0, tF.openUserProfileModal)({ customStatusPrompt: $, sourceAnalyticsLocations: v, ...R, ...e });
        },
        X = N?.widgets != null && N.widgets.length > 0,
        Q = r.useCallback(() => {
            g();
        }, [g]),
        ee = r.useCallback(() => {
            B(), Q();
        }, [B, Q]),
        et = (0, eL.QR)({ location: "UserProfileAccountPopout" }),
        { enabled: en } = eD.A.useConfig({ location: "UserProfileAccountPopout" }),
        ei = (0, eL.zd)({ location: "UserProfileAccountPopout" }),
        er = r.useId();
    return (0, i.jsx)(M.f5, {
        value: v,
        children: (0, i.jsx)(tU.of, {
            value: R,
            openedAt: S,
            fetchStartedAt: N?.fetchStartedAt,
            fetchEndedAt: N?.fetchEndedAt,
            isLoaded: N?.isLoaded,
            children: (0, i.jsxs)(eT.l, {
                ref: O,
                "aria-labelledby": er,
                className: a()(ek.jC, y),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(m.A, {
                        children: (0, i.jsx)(eA.H, { id: er, children: eh.intl.string(eh.t["5fWB8U"]) }),
                    }),
                    (0, i.jsxs)(eA.F, {
                        children: [
                            (0, i.jsx)(n$, { displayProfile: N, handleOpenUserProfileModal: Z, height: b }),
                            (0, i.jsxs)(t$.A, {
                                className: ek.BK,
                                user: E,
                                displayProfile: N,
                                themeType: n0.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: n1.wx,
                                        children: [
                                            (0, i.jsx)(tj.A, { user: E, displayProfile: N, themeType: n0.d.POPOUT }),
                                            (0, i.jsx)(tV.A, {
                                                user: E,
                                                displayProfile: N,
                                                themeType: n0.d.POPOUT,
                                                onOpenProfile: C ? void 0 : Z,
                                            }),
                                            (0, i.jsx)(t1.A, {
                                                ref: H,
                                                user: E,
                                                themeType: n0.d.POPOUT,
                                                onCloseProfile: g,
                                                prompt: $,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(eS.Ip, {
                                        className: ek.rf,
                                        style: { pointerEvents: z ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(tY.A, { userId: E.id }),
                                            (0, i.jsx)(tz.Ay, {
                                                className: ek.eF,
                                                user: E,
                                                displayName: t5.Ay.getName(void 0, null, E),
                                                onClickName: C ? void 0 : Z,
                                                displayNameTrailing: (0, i.jsx)(t0, { user: E, isVisible: D }),
                                                pronouns: N?.pronouns,
                                                trailing: (0, i.jsx)(tB.A, {
                                                    displayProfile: N,
                                                    themeType: n0.d.POPOUT,
                                                    onClose: g,
                                                    shouldOpenBadgeTooltip: null != T ? (e) => e === T : void 0,
                                                    shouldGlowTenureBadge: K.current,
                                                }),
                                            }),
                                            (0, i.jsx)(tH.A, { isPremiumUser: j, onInteraction: g }),
                                            (0, i.jsx)(t2.A, {
                                                userId: E.id,
                                                userBio: N?.bio,
                                                hidePersonalInformation: k,
                                                onClose: g,
                                            }),
                                            X &&
                                                (0, i.jsx)(tK.A, {
                                                    user: E,
                                                    widgets: N?.widgets,
                                                    onOpenUserProfileModal: Z,
                                                }),
                                            (0, i.jsx)(tW.A, {
                                                user: E,
                                                currentUser: E,
                                                onOpenUserProfileModal: Z,
                                                onClose: g,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: ek.T_,
                                                children: [
                                                    (0, i.jsx)(t$.A.Overlay, {
                                                        className: ek.g0,
                                                        children: (0, i.jsxs)(eF, {
                                                            children: [
                                                                (0, i.jsx)(eG, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: eh.intl.string(eh.t.s5vZlQ),
                                                                    icon: ey.R,
                                                                    onClick: ee,
                                                                    ref: Y,
                                                                }),
                                                                (0, i.jsx)(eG, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(nM, {}),
                                                                    sublabel: null != x && x,
                                                                    icon: () =>
                                                                        (0, i.jsx)(eC.nW, { status: P, size: 12 }),
                                                                    trailing:
                                                                        (U || P === tl.clD.DND) &&
                                                                        (0, i.jsx)(eN.a, { size: "xxs" }),
                                                                    renderSubmenu: eg.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(eU, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: ek.hQ,
                                                                                  "aria-label": eh.intl.string(
                                                                                      eh.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: F,
                                                                              });
                                                                          },
                                                                    onClick: eg.Fr
                                                                        ? () => {
                                                                              g(),
                                                                                  (0, A.openModalLazy)(
                                                                                      () =>
                                                                                          new Promise((e) =>
                                                                                              e((e) => {
                                                                                                  let {
                                                                                                      onClose: t,
                                                                                                      ...n
                                                                                                  } = e;
                                                                                                  return (0, i.jsx)(
                                                                                                      eI.d,
                                                                                                      {
                                                                                                          onClose: t,
                                                                                                          ...n,
                                                                                                          size: "sm",
                                                                                                          "aria-label":
                                                                                                              eh.intl.string(
                                                                                                                  eh.t[
                                                                                                                      "3Uj+2p"
                                                                                                                  ],
                                                                                                              ),
                                                                                                          children: (0,
                                                                                                          i.jsx)(ev.W, {
                                                                                                              "data-menu-migrated":
                                                                                                                  !0,
                                                                                                              navId: "set-status-submenu-mobile-web",
                                                                                                              variant:
                                                                                                                  "fixed",
                                                                                                              "aria-label":
                                                                                                                  eh.intl.string(
                                                                                                                      eh
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
                                                                (0, i.jsx)(tf, { onClose: g, popoutContainerRef: O }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(t$.A.Overlay, {
                                                        className: ek.g0,
                                                        children: (0, i.jsxs)(eF, {
                                                            children: [
                                                                (0, i.jsx)(eG, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eR.r,
                                                                    label: eh.intl.string(eh.t.oMNyYN),
                                                                    onClick: () => {
                                                                        g(), (0, nl.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(eU, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": eh.intl.string(eh.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: V,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    tX.p5 &&
                                                                    G &&
                                                                    (0, i.jsx)(eG, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eO.L,
                                                                        label: eh.intl.string(eh.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            (0, tX.C)(E.id), g();
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
                                        (0, i.jsx)(tp.A, { skuId: N.profileEffect.skuId, isHovering: L }),
                                    null != W && (0, i.jsx)(tg.A, { frame: W }),
                                ],
                            }),
                            en
                                ? (0, i.jsx)(nb, { targetElementRef: Y, onClose: g })
                                : et && ei
                                  ? (0, i.jsx)(ny, { targetElementRef: Y, onClose: g })
                                  : null,
                            (0, i.jsx)(tP, {}),
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
    n5 = n(148411),
    n7 = n(342296),
    n8 = n(852712),
    n9 = n(167579),
    ie = n(173660),
    it = n(394459),
    ii = n(763827),
    ir = n(499156),
    is = n(731854);
let ia = 2.5 * eJ.A.Millis.SECOND,
    io = +eJ.A.Millis.HOUR;
var il = n(459838),
    iu = n(485296);
let ic = 3 * eJ.A.Millis.SECOND,
    id = +eJ.A.Millis.DAY;
var i_ = n(616356),
    ih = n(734057),
    ip = n(629016),
    iE = n(186111),
    im = n(967198),
    ig = n(486020),
    iA = n(625494),
    iI = n(536194),
    iT = n(19575),
    iS = n(994314),
    iy = n(485599),
    iC = n(338854);
function iN(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: r, position: s, shouldShow: a = !0, children: o } = e,
        l = (0, eV.sw)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            o,
            a && l
                ? (0, i.jsx)(iC.H, {
                      targetElementRef: t,
                      title: eh.intl.string(tc.default.Qn21R6),
                      body: eh.intl.string(tc.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: s,
                      caretConfig: { align: "center" },
                      action: {
                          text: eh.intl.string(eh.t.RzWDqY),
                          onClick: () => {
                              n(e_.i.TAKE_ACTION), r();
                          },
                      },
                      onRequestClose: () => {
                          n(e_.i.USER_DISMISS);
                      },
                  })
                : null,
        ],
    });
}
var iv = n(626584),
    iR = n(531685),
    iO = n(259065),
    ib = n(864386);
let iD = new iv.A("DisplayNameStylesCoachmark");
function iL(e) {
    let { markAsDismissed: t, targetElementRef: n, children: s } = e,
        { analyticsLocations: a } = (0, M.Ay)(),
        o = (0, r.useRef)(null),
        l = (0, c.bG)([iR.A], () => iR.A.isFocused()),
        u = (0, r.useCallback)(() => {
            t(e_.i.TAKE_ACTION),
                (0, er.openUserSettings)(ei.X.PROFILE_PANEL, { analyticsLocations: a }, () => {
                    (0, iO.L)({ analyticsLocations: a });
                });
        }, [t, a]),
        d = (0, r.useCallback)(() => {
            t(e_.i.USER_DISMISS);
        }, [t]);
    return (
        (0, r.useEffect)(() => {
            l && o.current?.paused ? o.current?.play().catch(iD.error) : l || o.current?.pause();
        }, [l]),
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
                        ref: o,
                        src: "https://cdn.discordapp.com/assets/content/5d90dc1e412ad3aa0b39088fba382025e32b718d7bf5d797512be9701b5f53b4.webm",
                        aspectRatio: "21/9",
                        loop: !0,
                    },
                    size: "lg",
                    title: eh.intl.string(ib.default["1AE464"]),
                    body: [eh.intl.string(ib.default.cNc1g9), eh.intl.string(eh.t["4JNXHG"])],
                    actions: [{ text: eh.intl.string(eh.t.uw9zI7), variant: "primary", onClick: u }],
                }),
            ],
        })
    );
}
var iw = n(131607),
    iM = n(45780),
    iP = n(696451),
    ix = n(71393),
    ik = n(685073),
    iU = n(228366);
let iG = { lastSeenInfos: {} },
    iF = iG;
class iV extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        iF = e ?? iG;
    }
    getState() {
        return iF;
    }
    getGuildLastSeenInfo(e) {
        return iF.lastSeenInfos[e] ?? null;
    }
}
let iB = new iV(iU.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        iF.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        iF = iG;
    },
});
var ij = n(116833),
    iH = n(514661);
let iY = new iv.A("GuildTagAvailableCoachmark");
function iW(e) {
    let t = (0, c.bG)([ix.A], () => ix.A.getGuild(e.guildId));
    function n(n) {
        t?.profile?.tag != null &&
            iU.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n);
    }
    let { isAdopting: r, onAdoptTag: s, onEditProfile: a } = (0, iH.A)(t?.id ?? null, () => n(e_.i.TAKE_ACTION));
    if (null == t || !(0, ik.q0)(t))
        return iY.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let o = [
        { text: eh.intl.string(eh.t.jwEaiX), loading: r, onClick: s, variant: "primary" },
        { text: eh.intl.string(eh.t.s5vZlQ), onClick: a, variant: "secondary" },
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
                    component: ij.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: eh.intl.formatToPlainString(eh.t["m/Tc3n"], { guildName: t.name }),
                body: eh.intl.string(eh.t.DrAXIr),
                actions: o,
                size: "md",
                onRequestClose: () => n(e_.i.USER_DISMISS),
            }),
        ],
    });
}
function iK(e) {
    let t = (0, c.bG)([ix.A], () => ix.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: r, onAdoptTag: s, onEditProfile: a } = (0, iH.A)(t?.id ?? null, () => n(e_.i.TAKE_ACTION));
    if (null == t || !(0, ik.q0)(t))
        return iY.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let o = [
        { text: eh.intl.string(eh.t.jwEaiX), loading: r, onClick: s, variant: "primary" },
        { text: eh.intl.string(eh.t.s5vZlQ), onClick: a, variant: "secondary" },
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
                    component: ij.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: eh.intl.formatToPlainString(eh.t.VFqnyU, { guildName: t.name }),
                body: eh.intl.string(eh.t.DrAXIr),
                actions: o,
                size: "md",
                onRequestClose: () => n(e_.i.USER_DISMISS),
            }),
        ],
    });
}
var i$ = n(843010),
    iz = n(764231),
    iq = n(425713);
function iZ(e) {
    let { groupName: t, targetElementRef: n } = e,
        r = tb(),
        s = (0, c.bG)([el.Ay], () => el.Ay.useReducedMotion),
        a = (0, tS.A)((e) => e.isOpen),
        o = (0, i$.G)();
    return s || null == r || a || o
        ? null
        : (0, i.jsx)(np.zJ, {
              contentType: d.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: s } = e;
                  return (0, i.jsx)(iX, {
                      recentlyLeveledTenureBadge: r,
                      markAsDismissed: s,
                      targetElementRef: n,
                      shouldShow: t === d.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function iX(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: s, shouldShow: a } = e,
        o = tO.sp.indexOf(t),
        l = (0, iq.I)(tO.sp[o > 0 ? o - 1 : o]).ambient,
        u = (0, r.useCallback)(() => {
            n(e_.i.TAKE_ACTION),
                tS.A.setState({ shouldRenderTenureLevelUp: !0 }),
                iA._.dispatch(tl.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n]),
        c = (0, r.useCallback)(() => {
            n(e_.i.USER_DISMISS);
        }, [n]),
        d = tO.VD[t],
        _ = eh.intl.formatToPlainString(eh.t.ewkaVR, {
            timeMilestone: (0, iz.T)(d.id, d.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        h = [{ text: eh.intl.string(eh.t.RzWDqY), variant: "primary", onClick: u }];
    return (0, i.jsx)(nd.A, {
        targetElementRef: s,
        onRequestClose: c,
        shouldShow: a,
        caretConfig: { align: "center" },
        graphic: null != l ? { type: "image", src: l, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: eh.intl.string(eh.t.VoDxsV),
        body: _,
        actions: h,
    });
}
function iQ(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, n3.c9)(),
        r = null != e.targetElementRef.current && t && n,
        [s, a] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, iM.G$)(d.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? tl.dJq),
                r = (0, c.bG)([ix.A, ni.default, iP.Ay], () => {
                    if (null === e) return !1;
                    let t = ix.A.getGuild(e);
                    if (void 0 === t || !(0, ik.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                    let n = ni.default.getCurrentUser();
                    if (
                        void 0 === n ||
                        (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                    )
                        return !1;
                    let i = iP.Ay.getMember(e, n.id);
                    return null != i && !i.isPending;
                }, [e]);
            return (0, iw.ww)(r && n && !i ? [d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? tl.eGj);
        })(e.guildId, { shouldShow: r }),
        [o, l] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                r = i?.identityGuildId ?? null,
                s = (0, c.bG)([iB], () => (null === r ? null : iB.getGuildLastSeenInfo(r))),
                a = (0, c.bG)([ix.A], () => ix.A.getGuild(r)?.profile?.tag),
                o = null != a && i?.identityGuildId === r && i?.tag === null,
                l = null != r && s?.tag === a,
                u = null !== r && o && !l;
            return (0, iw.Wl)(u && n ? d.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: r });
    return r
        ? s === d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(iK, {
                  guildId: e.guildId,
                  onDismiss: a,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : o === d.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(iW, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: l,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(iZ, { groupName: e_.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(np.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: e_.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: r } = t;
                                switch (n) {
                                    case d.M.DISPLAY_NAME_STYLES_COACHMARK:
                                        return (0, i.jsx)(iL, {
                                            markAsDismissed: r,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case d.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, i.jsx)(iN, {
                                            markAsDismissed: r,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: eY.p,
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
    i7 = n(967194);
function i8(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: s,
            onClick: o,
            iconForeground: l,
            nameplate: u,
            shouldShowOutputDeviceChangedTooltip: c,
            dismissTooltips: d,
        } = e,
        _ = t || n,
        {
            Component: h,
            play: f,
            events: { onMouseEnter: E, onMouseLeave: m },
        } = (0, i2.I)(_ ? "undeafen" : "deafen"),
        g = n ? iJ.T : h,
        { name: A } = (0, em.x5)(is.oh.AUDIO_OUTPUT),
        I = (0, i3.A)(t, n, s),
        { analyticsLocations: T } = (0, M.Ay)(w.A.AUDIO_OUTPUT_BUTTON),
        S = r.useRef(null);
    return (
        r.useEffect(() => () => f(), [_, f]),
        (0, i.jsx)(M.f5, {
            value: T,
            children: (0, i.jsx)(p.Y, {
                targetElementRef: S,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        d(),
                        (0, i.jsx)(M.f5, {
                            value: T,
                            children: (0, i.jsx)(i6.A, {
                                onInteraction: (0, V.s)("AudioDeviceMenu", w.A.ACCOUNT),
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
                animation: p.Y.Animation.FADE,
                spacing: 4,
                children: (e, t) => {
                    let { onClick: r } = e,
                        { isShown: d } = t,
                        h = d ? i0.t : i1.a;
                    return (0, i.jsxs)("div", {
                        ref: S,
                        className: a()(i5.Lh, { [i5.v8]: _, [i5.q6]: d }),
                        children: [
                            (0, i.jsx)(i4.A, {
                                "aria-checked": _,
                                "aria-label": eh.intl.string(eh.t.wjcRFX),
                                className: i5.eT,
                                disabled: s,
                                icon: (0, i.jsx)(g, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: _ ? t7.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: l,
                                }),
                                iconForeground: _ ? i7.o : void 0,
                                innerClassName: a()({ [i7.T]: n }),
                                onClick: o,
                                onContextMenu: r,
                                onMouseEnter: E,
                                onMouseLeave: m,
                                plated: null != u,
                                redGlow: _,
                                role: "switch",
                                tooltipText: I,
                            }),
                            (0, i.jsx)(i4.A, {
                                className: a()(i5.UT, { [i5.q6]: d }),
                                disabled: s,
                                icon: (0, i.jsx)(h, {
                                    className: i5.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: _ ? t7.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: r,
                                onContextMenu: r,
                                plated: null != u,
                                redGlow: _,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? eh.intl.formatToPlainString(eh.t["f+DDY/"], { outputDeviceName: A })
                                    : void 0,
                                tooltipShouldShow: !d,
                                tooltipText: c
                                    ? eh.intl.format(eh.t["f+DDY/"], { outputDeviceName: A })
                                    : eh.intl.string(eh.t.aA4Vce),
                                "aria-label": c
                                    ? eh.intl.formatToPlainString(eh.t["f+DDY/"], { outputDeviceName: A })
                                    : eh.intl.string(eh.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var i9 = n(666654),
    re = n(523875),
    rt = n(993719);
let rn = {};
class ri extends c.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return rn[e] ?? !1;
    }
}
let rr = new ri(iU.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        rn[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        rn[t] = !1;
    },
});
var rs = n(362823),
    ra = n(980923),
    ro = n(224585),
    rl = n(949341),
    ru = n(973324);
function rc(e) {
    let t,
        {
            selfMute: n,
            serverMute: s,
            suppress: o,
            awaitingRemote: l,
            iconForeground: u,
            onMouseEnter: d,
            onMouseLeave: _,
            onClick: h,
            nameplate: f,
            shouldShowSpeakingWhileMutedTooltip: E,
            shouldShowSpeakingWhilePTTTooltip: m,
            shouldShowInputDeviceChangedTooltip: g,
            shouldShowPTTJoinTooltip: A,
            dismissTooltips: I,
            speaking: T,
        } = e,
        { showPTTIconIndicator: S } = ir.A.useConfig({ location: "MicrophoneButton" }),
        y = (0, c.bG)([it.Ay], () => it.Ay.getMode() === is.TB.PUSH_TO_TALK),
        C = (0, c.bG)([it.Ay], () => it.Ay.getSettings().modeOptions.shortcut),
        N = (0, c.bG)([rr], () => rr.getIsTutorialActive(rs.v.MUTE_TUTORIAL)),
        v = (0, c.bG)([ii.A], () => null != ii.A.getChannelId()),
        { name: R } = (0, em.x5)(is.oh.AUDIO_INPUT),
        { enabledInputProfiles: O } = (0, n8.d)({ location: "MicrophoneButton" }),
        b = r.useRef(null),
        D = n || o || s,
        L = (0, re.L)(D ? "unmute" : "mute"),
        { analyticsLocations: P } = (0, M.Ay)(w.A.AUDIO_INPUT_BUTTON),
        { Component: x, events: k, play: U } = L,
        G = s || o ? i9.O : x;
    r.useEffect(() => () => U(), [D, U]);
    let F = (0, ra.A)(n, s, o, l);
    t = E
        ? { tooltipType: "green_void_do_not_use", tooltipText: eh.intl.string(eh.t["29gnR4"]), tooltipForceOpen: !0 }
        : A || m
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: eh.intl.format(eh.t.c1qUOQ, { keybind: e1.dI(C).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: F };
    let B = S && y && v,
        j = D ? t7.A.colors.ICON_VOICE_MUTED : "currentColor",
        H = r.useCallback(() => {
            h(), N && rt.N(rs.v.MUTE_TUTORIAL);
        }, [h, N]);
    return (0, i.jsxs)(M.f5, {
        value: P,
        children: [
            (0, i.jsx)(p.Y, {
                targetElementRef: b,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        I(),
                        (0, i.jsx)(M.f5, {
                            value: P,
                            children: (0, i.jsx)(i6.A, {
                                onInteraction: (0, V.s)("AudioDeviceMenu", w.A.ACCOUNT),
                                onClose: t,
                                maybeRenderPTTCheckbox: !0,
                                renderInputProfiles: O.length > 0,
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
                animation: p.Y.Animation.FADE,
                spacing: 4,
                children: (e, n) => {
                    let { onClick: r } = e,
                        { isShown: s } = n,
                        o = s ? i0.t : i1.a;
                    return (0, i.jsxs)("div", {
                        ref: b,
                        className: a()(i5.Lh, { [i5.v8]: D, [i5.q6]: s }),
                        children: [
                            (0, i.jsx)(i4.A, {
                                "aria-checked": D,
                                "aria-label": eh.intl.string(eh.t.w4m945),
                                className: i5.eT,
                                disabled: l,
                                icon: (0, i.jsx)(G, { size: "custom", width: 20, height: 20, color: j, className: u }),
                                onClick: H,
                                onContextMenu: r,
                                onMouseEnter: () => {
                                    d(), k.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    _(), k.onMouseLeave();
                                },
                                plated: null != f,
                                redGlow: D,
                                role: "switch",
                                ...t,
                                children: B ? (0, i.jsx)("div", { className: a()(rl.U, { [rl.z]: T }) }) : null,
                            }),
                            (0, i.jsx)(i4.A, {
                                "aria-label": g
                                    ? eh.intl.formatToPlainString(eh.t["18wnuD"], { inputDeviceName: R })
                                    : eh.intl.string(eh.t.fRzCbB),
                                className: a()(i5.UT, { [i5.q6]: s }),
                                disabled: l,
                                icon: (0, i.jsx)(o, {
                                    className: i5.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: j,
                                }),
                                onClick: r,
                                onContextMenu: r,
                                onMouseEnter: d,
                                onMouseLeave: _,
                                plated: null != f,
                                redGlow: D,
                                tooltipType: g ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: g,
                                tooltipPositionKey: g
                                    ? eh.intl.formatToPlainString(eh.t["18wnuD"], { inputDeviceName: R })
                                    : void 0,
                                tooltipShouldShow: !s,
                                tooltipText: g
                                    ? eh.intl.format(eh.t["18wnuD"], { inputDeviceName: R })
                                    : eh.intl.string(eh.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(nd.A, {
                targetElementRef: b,
                shouldShow: N,
                graphic: { type: "image", src: ru.A },
                onRequestClose: () => {
                    rt.N(rs.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: eh.intl.string(ro.default.VG4zAf),
                body: eh.intl.string(ro.default["8VIRzR"]),
            }),
        ],
    });
}
var rd = n(935399),
    r_ = n(505312),
    rh = n(848847),
    rf = n(88001),
    rp = n(466919),
    rE = n(438705);
let rm = (e) => {
    let { targetElementRef: t, shouldShow: n, onDismiss: s } = e,
        a = r.useCallback(() => {
            s(), (0, er.openUserSettings)(ei.X.SUBSCRIPTIONS_PANEL);
        }, [s]);
    return (0, i.jsx)(nd.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: rE },
        shouldShow: n,
        title: eh.intl.format(rp.default.bx8sR9, { premiumGroupProductName: (0, rf.DP)() }),
        body: eh.intl.format(rp.default.Pw4OFZ, { premiumGroupProductName: (0, rf.DP)() }),
        onRequestClose: s,
        actions: [{ text: eh.intl.string(rp.default.DD26QR), onClick: a }],
    });
};
var rg = n(873298),
    rA = n(840387);
function rI(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        s = (0, rA.Z)(),
        a = t3.KP.useSetting(),
        o = s && a !== rg.KP.FRIENDS_AND_ALL_GUILDS,
        l = (0, r.useCallback)(() => {
            t(e_.i.TAKE_ACTION), (0, er.openUserSettings)(ei.X.PROFILE_PRIVACY_CATEGORY);
        }, [t]),
        u = (0, r.useCallback)(() => {
            t(e_.i.USER_DISMISS);
        }, [t]),
        c = o
            ? a === rg.KP.FRIENDS_ONLY
                ? eh.intl.string(eh.t["/hogEy"])
                : eh.intl.string(eh.t["6hEfm1"])
            : eh.intl.string(eh.t.bnNxW1);
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
        title: eh.intl.string(eh.t.Ve4nS1),
        body: c,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: eh.intl.string(eh.t.eOoTMX), variant: "primary", onClick: l }],
    });
}
function rT(e) {
    let t,
        n,
        {
            webBuildOverride: s,
            onClick: a,
            onContextMenu: o,
            dismissibleContents: l,
            iconForeground: u,
            nameplate: c,
        } = e,
        _ = r.useRef(null),
        [h, f] = r.useState(!1);
    (0, rd.Ay)(() => {
        let e = () => f(!0);
        return (
            iA._.subscribe(tl.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                iA._.unsubscribe(tl.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let p = r.useCallback(() => {
        f(!1), a();
    }, [a]);
    t = null != s ? eh.intl.formatToPlainString(eh.t.Gzh6ZP, { webBuildOverride: s.id }) : eh.intl.string(eh.t.cduTBL);
    let E = ez.Z,
        m = (0, r_.w)();
    return (
        (E = null != s ? rh.H : m.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(i4.A, {
                    ref: _,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: p,
                    onContextMenu: o,
                    "aria-label": eh.intl.string(eh.t.cduTBL),
                    icon: (0, i.jsx)(E, { size: "refresh_sm", color: "currentColor", className: u }),
                    ...m.events,
                    plated: null != c,
                }),
                (0, i.jsx)(rm, { targetElementRef: _, shouldShow: h, onDismiss: () => f(!1) }),
                (0, i.jsx)(np.Ay, {
                    contentTypes: l,
                    groupName: e_.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === d.M.PRIVATE_PROFILE_COACHMARK
                            ? (0, i.jsx)(rI, { markAsDismissed: n, targetElementRef: _ })
                            : null;
                    },
                }),
            ],
        })
    );
}
var rS = n(489902);
let ry = iT.Ay.getEnableHardwareAcceleration() ? h.Js : h.eu,
    rC = 2.5 * eJ.A.Millis.SECOND,
    rN = 2 * eJ.A.Millis.MINUTE,
    rv = 2 * eJ.A.Millis.MINUTE,
    rR = 5 * eJ.A.Millis.SECOND;
function rO(e) {
    let {
            ref: t,
            speaking: n,
            voiceDb: s = -1 / 0,
            streaming: o,
            currentUser: l,
            status: u,
            handleClick: c,
            handleMouseLeave: d,
            renderNameTag: _,
            nameplate: h,
            avatarDecoration: m,
            "data-jump-section": g,
        } = e,
        A = r.useRef(null),
        I = t ?? A,
        S = (0, ig.F_)({ avatarDecoration: m, size: (0, j.Te)(f._3.SIZE_32) }),
        y = (0, z.A)(),
        {
            updateOpenPopoutRef: N,
            highlightBadge: v,
            setHighlightBadge: R,
        } = (function () {
            let e = r.useRef(null),
                t = r.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, i] = r.useState(),
                [s, a] = r.useState(!1);
            return (
                (0, C.A)(() => a(!0), 750),
                r.useEffect(() => {
                    let t = (t) => {
                        let { highlightBadge: n } = t;
                        null != n && i(n), e.current?.();
                    };
                    return (
                        iA._.subscribe(tl.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            iA._.unsubscribe(tl.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: s ? n : void 0, setHighlightBadge: i }
            );
        })(),
        O = (0, Y.K)(h);
    return null == l
        ? null
        : (0, i.jsx)(T.A, {
              object: tl.ZSU.AVATAR,
              children: (0, i.jsx)(n7.A, {
                  user: l,
                  targetElementRef: I,
                  clickTrap: !0,
                  preload: () =>
                      (0, n5.A)(l.id, l.getAvatarURL(void 0, n7.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: r } = e;
                      return (0, i.jsx)(n2, {
                          currentUser: l,
                          highlightBadge: v,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: r,
                          className: rS.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: p.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      d(), R(void 0);
                  },
                  children: (e) => {
                      N(e);
                      let { onMouseEnter: t, onMouseDown: r, ...d } = e;
                      return (0, i.jsxs)("div", {
                          ref: I,
                          style: O,
                          onMouseEnter: t,
                          onMouseDown: r,
                          onClick: (t) => {
                              e.onClick?.(t), c?.(t);
                          },
                          className: a()(rS.Q9, { [rS.ZQ]: null != h }),
                          children: [
                              (0, i.jsx)(E.D, {
                                  ...d,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), c?.(t);
                                  },
                                  "aria-label": eh.intl.string(eh.t["5fWB8U"]),
                                  focusProps: { ringTarget: I },
                                  className: rS.$n,
                                  "data-jump-section": g,
                              }),
                              (0, i.jsx)(ry, {
                                  size: f._3.SIZE_32,
                                  src: l.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: S,
                                  status: o ? tl.clD.STREAMING : u,
                                  isSpeaking: n,
                                  voiceDb: s,
                                  className: rS.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: rS.oM, children: _(y) }),
                          ],
                      });
                  },
              }),
          });
}
class rb extends r.PureComponent {
    speakingWhileMutedTooltipTimeout = new _.Ep();
    speakingWhilePTTTooltipTimeout = new _.Ep();
    speakingWhilePTTInactiveBackoff = new u.A(rv, null, !1);
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
            { speakingWhileMuted: r, occluded: s, speakingWhilePTTInactive: a } = this.props;
        s !== i && this.handleOccludedChanged(),
            r !== t && this.handleSpeakingWhileMutedChanged(),
            a !== n && this.handleSpeakingWhilePTTChanged();
    }
    componentWillUnmount() {
        this.speakingWhileMutedTooltipTimeout.stop(), this.speakingWhilePTTTooltipTimeout.stop();
    }
    handleToggleSelfMute = () => {
        let { serverMute: e, suppress: t, selfMute: n } = this.props;
        (0, G.A)(e, t, tl.JJy.ACCOUNT_PANEL), (0, F.X)(w.A.ACCOUNT, F.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, U.A)(e, tl.JJy.ACCOUNT_PANEL), (0, F.X)(w.A.ACCOUNT, F.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            ii.A.isConnected() ? (0, er.openUserSettings)(ei.X.VOICE_AND_VIDEO_PANEL) : (0, er.openUserSettings)();
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, I.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("26913"),
                    n.e("49905"),
                    n.e("89982"),
                    n.e("14144"),
                    n.e("97407"),
                    n.e("24856"),
                    n.e("93315"),
                    n.e("8813"),
                    n.e("78008"),
                    n.e("25610"),
                    n.e("42548"),
                    n.e("44190"),
                    n.e("41916"),
                    n.e("16261"),
                    n.e("18224"),
                    n.e("13114"),
                    n.e("16227"),
                    n.e("26543"),
                    n.e("95059"),
                    n.e("37634"),
                    n.e("812"),
                    n.e("99115"),
                    n.e("72386"),
                    n.e("30541"),
                    n.e("74187"),
                    n.e("62279"),
                    n.e("44667"),
                    n.e("42157"),
                    n.e("96636"),
                    n.e("85917"),
                    n.e("53727"),
                    n.e("57034"),
                    n.e("78220"),
                    n.e("85948"),
                    n.e("12940"),
                    n.e("52443"),
                    n.e("11266"),
                    n.e("4954"),
                    n.e("75954"),
                    n.e("45976"),
                    n.e("60654"),
                    n.e("70179"),
                    n.e("97690"),
                    n.e("87103"),
                    n.e("33973"),
                    n.e("52865"),
                    n.e("10581"),
                    n.e("57215"),
                    n.e("22535"),
                    n.e("2499"),
                    n.e("94970"),
                    n.e("48997"),
                    n.e("70486"),
                    n.e("59135"),
                    n.e("83140"),
                    n.e("18670"),
                    n.e("33238"),
                    n.e("8641"),
                    n.e("59204"),
                    n.e("8736"),
                    n.e("97242"),
                    n.e("98795"),
                    n.e("65123"),
                    n.e("23549"),
                    n.e("83566"),
                    n.e("86283"),
                    n.e("84183"),
                    n.e("28510"),
                    n.e("91752"),
                    n.e("8502"),
                    n.e("58493"),
                    n.e("58376"),
                    n.e("77569"),
                    n.e("21194"),
                    n.e("99272"),
                    n.e("20993"),
                    n.e("34161"),
                    n.e("69164"),
                    n.e("64578"),
                    n.e("92116"),
                    n.e("84200"),
                    n.e("33217"),
                    n.e("80050"),
                    n.e("37502"),
                    n.e("68316"),
                    n.e("76900"),
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
                    n.e("20469"),
                    n.e("21149"),
                    n.e("79093"),
                    n.e("6129"),
                    n.e("47334"),
                    n.e("11171"),
                    n.e("44448"),
                    n.e("19464"),
                    n.e("88429"),
                    n.e("90629"),
                    n.e("63251"),
                    n.e("25235"),
                    n.e("98369"),
                    n.e("88522"),
                    n.e("31333"),
                    n.e("96388"),
                    n.e("70402"),
                    n.e("39328"),
                    n.e("79886"),
                    n.e("79086"),
                    n.e("67696"),
                    n.e("37398"),
                    n.e("72196"),
                    n.e("1844"),
                    n.e("95820"),
                    n.e("78852"),
                    n.e("80851"),
                    n.e("4981"),
                    n.e("44400"),
                    n.e("70676"),
                    n.e("50814"),
                    n.e("24685"),
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
                    n.e("66969"),
                    n.e("83185"),
                    n.e("58388"),
                    n.e("73923"),
                    n.e("95932"),
                    n.e("81688"),
                    n.e("38342"),
                    n.e("69373"),
                    n.e("18270"),
                    n.e("21437"),
                    n.e("71455"),
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
                    n.e("72328"),
                    n.e("56762"),
                    n.e("44792"),
                    n.e("25006"),
                    n.e("14898"),
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
                    n.e("52511"),
                    n.e("72963"),
                    n.e("40402"),
                    n.e("43437"),
                    n.e("39970"),
                    n.e("76418"),
                    n.e("93766"),
                    n.e("40258"),
                    n.e("86127"),
                    n.e("42724"),
                    n.e("66495"),
                    n.e("71210"),
                    n.e("68403"),
                    n.e("8555"),
                    n.e("28095"),
                    n.e("88599"),
                    n.e("75842"),
                    n.e("36863"),
                    n.e("72789"),
                    n.e("50117"),
                    n.e("88342"),
                    n.e("6949"),
                    n.e("46070"),
                    n.e("17249"),
                    n.e("71273"),
                    n.e("53917"),
                    n.e("79049"),
                    n.e("9640"),
                    n.e("62422"),
                    n.e("90365"),
                    n.e("98765"),
                    n.e("89088"),
                    n.e("52548"),
                    n.e("89421"),
                    n.e("35027"),
                    n.e("67861"),
                    n.e("1518"),
                    n.e("15186"),
                    n.e("37977"),
                    n.e("98965"),
                    n.e("47626"),
                    n.e("23354"),
                    n.e("28083"),
                    n.e("82644"),
                    n.e("53984"),
                    n.e("43780"),
                    n.e("20590"),
                    n.e("65437"),
                    n.e("74810"),
                    n.e("80830"),
                    n.e("79745"),
                    n.e("3589"),
                    n.e("80854"),
                    n.e("35395"),
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
                    n.e("35313"),
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
                    n.e("71430"),
                    n.e("501"),
                    n.e("86243"),
                    n.e("85794"),
                    n.e("67837"),
                    n.e("35321"),
                    n.e("73384"),
                    n.e("82783"),
                    n.e("32209"),
                    n.e("21572"),
                    n.e("87478"),
                    n.e("50033"),
                    n.e("39171"),
                    n.e("36564"),
                    n.e("92513"),
                    n.e("83952"),
                    n.e("52229"),
                    n.e("3998"),
                    n.e("44780"),
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
                    n.e("59957"),
                    n.e("29666"),
                    n.e("58273"),
                    n.e("8018"),
                    n.e("6841"),
                    n.e("20930"),
                    n.e("38056"),
                    n.e("26001"),
                    n.e("14591"),
                    n.e("52111"),
                    n.e("36877"),
                    n.e("69747"),
                    n.e("20379"),
                    n.e("57458"),
                    n.e("59466"),
                    n.e("8829"),
                    n.e("1243"),
                    n.e("75133"),
                    n.e("19193"),
                    n.e("15920"),
                    n.e("58164"),
                    n.e("21930"),
                    n.e("3930"),
                    n.e("96804"),
                    n.e("3663"),
                    n.e("28850"),
                    n.e("95998"),
                    n.e("27659"),
                    n.e("77487"),
                    n.e("37490"),
                    n.e("42234"),
                    n.e("92077"),
                    n.e("26294"),
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
                    n.e("80407"),
                    n.e("42726"),
                    n.e("34546"),
                    n.e("10943"),
                    n.e("41701"),
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
                    n.e("94607"),
                    n.e("41838"),
                    n.e("18233"),
                    n.e("33448"),
                    n.e("3710"),
                    n.e("96325"),
                    n.e("45830"),
                    n.e("8979"),
                    n.e("33771"),
                    n.e("77602"),
                    n.e("82178"),
                    n.e("38260"),
                    n.e("46039"),
                    n.e("95602"),
                    n.e("34409"),
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
                    n.e("71530"),
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
                    n.e("71790"),
                    n.e("81754"),
                    n.e("43685"),
                    n.e("33049"),
                    n.e("21403"),
                    n.e("43456"),
                    n.e("44491"),
                ]).then(n.bind(n, 907206));
                return (t) =>
                    (0, i.jsx)(e, { ...t, onClose: I.Z_, onInteraction: (0, V.s)("UserSettingsMenu", w.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, V.s)("AudioDeviceMenu", w.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, I.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("60536"), n.e("78827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, n8.d)({ location: "Account" });
                    return (0, i.jsx)(M.f5, {
                        value: t,
                        children: (0, i.jsx)(e, {
                            onClose: I.Z_,
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
            (0, I.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("60536"), n.e("78827")]).then(n.bind(n, 385318));
                return () =>
                    (0, i.jsx)(M.f5, {
                        value: t,
                        children: (0, i.jsx)(e, {
                            onClose: I.Z_,
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
                shouldShowPTTJoinTooltip: s,
                deviceChangedTooltipType: a,
            } = this.props,
            { hoveringOnMute: o } = this.state,
            l =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > rN;
        i
            ? o ||
              !e ||
              t ||
              n ||
              r ||
              !l ||
              null != a ||
              s ||
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                  (this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(rC, () =>
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
                shouldShowPTTJoinTooltip: s,
                deviceChangedTooltipType: a,
            } = this.props,
            { hoveringOnMute: o } = this.state,
            l =
                void 0 === this.lastSpeakingWhilePTTNotificationTime ||
                performance.now() - this.lastSpeakingWhilePTTNotificationTime >
                    this.speakingWhilePTTInactiveBackoff.current;
        i
            ? o ||
              e ||
              t ||
              n ||
              r ||
              !l ||
              null != a ||
              s ||
              this.setState({ shouldShowSpeakingWhilePTTTooltip: !0 }, () => {
                  (this.lastSpeakingWhilePTTNotificationTime = performance.now()),
                      this.speakingWhilePTTInactiveBackoff.fail(),
                      this.speakingWhilePTTTooltipTimeout.start(rC, () =>
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
                status: s,
                userTag: a,
                voiceChannel: o,
            } = this.props;
        if (null == r) return null;
        if ((0, N.A)({ activities: t, status: s, applicationStream: n, voiceChannel: o }))
            return (0, i.jsxs)(L.A, {
                hoverText: a,
                forceHover: e,
                children: [
                    (0, i.jsx)(m.A, { children: tQ.Ay.humanizeStatus(s) }),
                    (0, i.jsx)(v.A, {
                        user: r,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: o,
                        textClassName: rS.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let l = t?.find((e) => {
            let { type: t } = e;
            return t === tl.$pd.CUSTOM_STATUS;
        });
        return null != l
            ? (0, i.jsxs)(L.A, {
                  hoverText: a,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(m.A, { children: tQ.Ay.humanizeStatus(s) }),
                      (0, i.jsx)($.A, { activity: l, emojiClassName: rS.Zg, className: rS.WO }),
                  ],
              })
            : null != s && s !== tl.clD.UNKNOWN && r.hasUniqueUsername()
              ? (0, i.jsx)(L.A, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(D, { text: tQ.Ay.humanizeStatus(s) }),
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
                          className: rS.eW,
                          children: (0, i.jsx)(iy.A, {
                              className: a()({ [rS.e8]: null != e }),
                              children: (0, i.jsx)(Z.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? q.G.ANIMATED : q.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: rS.XP,
                          children: (0, i.jsx)(iS.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let { currentUser: t, dismissibleContents: n } = this.props;
        return null == t
            ? null
            : (0, i.jsx)(iQ, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: t,
                  targetElementRef: this.avatarWithPopoutRef,
                  additionalDCs: n.avatar,
                  children: (0, i.jsx)(rO, {
                      ...this.props,
                      ref: this.avatarWithPopoutRef,
                      handleMouseLeave: this.handleMouseLeave,
                      renderNameTag: this.renderNameTag,
                      "data-jump-section": e["data-jump-section"],
                  }),
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: r, isListenAlongVisible: s } = this.props,
            o = this.state.hovered;
        return null == e
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(g.sk, {
                          children: (e) =>
                              (0, i.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: a()(rS.kL, { [rS.UG]: null != n, [rS.bc]: !r, [rS.G5]: s }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(K.A, { nameplate: t, hovered: o, placement: W.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(rD, {
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
                      (0, i.jsx)(eE, {}),
                  ],
              });
    }
}
function rD(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: r,
            serverMute: s,
            serverDeaf: a,
            suppress: o,
            shouldShowSpeakingWhileMutedTooltip: l,
            shouldShowSpeakingWhilePTTTooltip: u,
            webBuildOverride: c,
            handleMouseEnterMute: d,
            handleMouseLeaveMute: _,
            handleToggleSelfDeaf: h,
            handleToggleSelfMute: f,
            handleInputAudioContextMenu: p,
            handleOutputAudioContextMenu: E,
            handleOpenAccountSettings: m,
            handleOpenSettingsContextMenu: g,
            dismissibleContents: A,
            nameplate: I,
            accountContainerRef: T,
            deviceChangedTooltipType: S,
            shouldShowPTTJoinTooltip: y = !1,
            dismissTooltips: C,
            speaking: N,
        } = e,
        v = (0, Y.K)(I);
    return (0, i.jsxs)("div", {
        className: rS.Uo,
        style: v,
        children: [
            (0, i.jsx)(rc, {
                accountContainerRef: T,
                selfMute: n,
                serverMute: s,
                suppress: o,
                awaitingRemote: r,
                onMouseEnter: d,
                onMouseLeave: _,
                onClick: f,
                onContextMenu: p,
                iconForeground: null != I ? rS.t4 : void 0,
                nameplate: I,
                shouldShowSpeakingWhileMutedTooltip: l,
                shouldShowInputDeviceChangedTooltip: !l && "input" === S,
                shouldShowSpeakingWhilePTTTooltip: u,
                shouldShowPTTJoinTooltip: y,
                dismissTooltips: C,
                speaking: N,
            }),
            (0, i.jsx)(i8, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: h,
                onContextMenu: E,
                awaitingRemote: r,
                iconForeground: null != I ? rS.t4 : void 0,
                nameplate: I,
                shouldShowOutputDeviceChangedTooltip: "output" === S,
                dismissTooltips: C,
            }),
            (0, i.jsx)(rT, {
                webBuildOverride: c,
                onClick: m,
                onContextMenu: g,
                dismissibleContents: A.settings,
                iconForeground: null != I ? rS.t4 : void 0,
                nameplate: I,
            }),
        ],
    });
}
function rL(e) {
    let t = (0, c.bG)([ii.A], () => null != ii.A.getChannelId()),
        n = (0, em.Py)(e),
        i = r.useRef(new _.Ep()),
        [s, a] = r.useState(!1);
    r.useEffect(() => {
        t &&
            n &&
            (a(!0),
            i.current.start(rR, () => {
                a(!1);
            }));
    }, [t, n]);
    let o = r.useCallback(() => {
        a(!1), i.current.stop();
    }, []);
    return (
        (0, y.l0)(() => {
            i.current.stop();
        }),
        { shouldShowTooltip: s, dismissTooltip: o }
    );
}
function rw() {
    let e = (0, c.bG)([ni.default], () => ni.default.getCurrentUser()),
        t = (0, c.bG)([nI.default], () => nI.default.getId()),
        {
            activities: n,
            streaming: s,
            status: a,
        } = (0, c.cf)([nD.A], () => {
            let e = nD.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === tl.$pd.STREAMING;
                    }),
                status: nD.A.getStatus(),
            };
        }),
        o = (0, c.bG)([i_.A], () => i_.A.getAnyStreamForUser(t)),
        u = (0, S.A)({ userId: t }),
        h = (0, c.bG)([iu.A], () => iu.A.getVoiceVolume(t)),
        f = tQ.Ay.useUserTag(e, { decoration: "never" }),
        p = (0, c.bG)([ii.A, ih.A], () => {
            let e = ii.A.getChannelId();
            return null != e ? ih.A.getChannel(e) : null;
        }),
        { mute: E, selfMute: m, suppress: g } = (0, ie.A)(p),
        { selfDeaf: I, deaf: T } = (0, n9.A)(p),
        C = (0, c.bG)([P.A], () => ((0, x.kK)() ? P.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        N = (0, c.bG)([it.Ay], () => it.Ay.getSpeakingWhileMuted()),
        v = (0, c.bG)([k.A], () => k.A.isFullscreenInContext()),
        R = (0, c.bG)([iE.A], () => iE.A.hasLayers()),
        O = (0, A.useModalsStore)(A.hasAnyModalOpenSelector) || R || iI.P.isDisallowPopupsSet() || v,
        b = (0, c.bG)([X.default], () => null != X.default.getAwaitingRemoteSessionInfo()),
        D = (0, c.bG)([im.A], () => im.A.getGuildId()),
        L = e?.avatarDecoration,
        U = (0, B.A)(L),
        G = tQ.Ay.useName(e) ?? "",
        { analyticsLocations: F } = (0, M.Ay)(w.A.ACCOUNT),
        V = (0, H.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: j } = (0, n3.c9)(),
        Y = (0, c.bG)([n6.A, ni.default, ip.A], () => {
            let e,
                t = n6.A.getSyncingWith(),
                n = n6.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = l()(Array.from(ip.A.getParty(e) ?? []))
                        .map((e) => ni.default.getUser(e))
                        .filter(nT.Vq)
                        .value()),
                i.length > 1
            );
        }),
        W = { avatar: [], settings: [] },
        K = (0, n4.lX)("AccountCoachmark");
    !O && (W.avatar.push(d.M.DISPLAY_NAME_STYLES_COACHMARK), K && W.settings.push(d.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: $, dismissTooltip: z } = rL(is.oh.AUDIO_INPUT),
        { shouldShowTooltip: q, dismissTooltip: Z } = rL(is.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: Q, dismissTooltip: J } = (function () {
            let [e, t] = r.useState(!1),
                n = (0, c.bG)([it.Ay], () => it.Ay.getMode() === is.TB.PUSH_TO_TALK),
                i = (0, c.bG)(
                    [ii.A],
                    () => null != ii.A.getChannelId() && (ii.A.getDuration() ?? Number.MAX_VALUE) < ia,
                ),
                [s, a] = r.useState(!1),
                { showPTTJoinTooltip: o } = ir.A.useConfig({ location: "usePTTJoinTooltip" }),
                l = r.useRef(new _.Ep()),
                u = r.useRef(new _.Ep());
            r.useEffect(() => {
                if (i && n && !e) {
                    if ((ir.A.getConfig({ location: "usePTTJoinTooltip:couldDisplayTooltip" }), !o)) return;
                    a(!0),
                        t(!0),
                        u.current.start(io, () => {
                            t(!1);
                        }),
                        l.current.start(ia, () => {
                            a(!1);
                        });
                }
                i || a(!1);
            }, [i, n, o, e]);
            let d = r.useCallback(() => {
                a(!1), l.current.stop();
            }, []);
            return (
                (0, y.l0)(() => {
                    l.current.stop(), u.current.stop();
                }),
                { shouldShowTooltip: s, dismissTooltip: d }
            );
        })(),
        ee = (function () {
            let { showPTTSpeakingIndicator: e } = ir.A.useConfig({ location: "useSpeakingWhilePTT" }),
                [t, n] = r.useState(!1),
                i = (0, c.bG)([it.Ay], () => it.Ay.getMode() === is.TB.PUSH_TO_TALK),
                s = (0, c.bG)([ii.A], () => ii.A.getRTCConnectionId()),
                a = (0, c.bG)([it.Ay], () => {
                    let e = it.Ay.getModeOptions().updatedAt;
                    return null != e && Date.now() - e < id;
                }),
                o = r.useRef(new _.Ep());
            return (
                r.useEffect(() => {
                    n(!1);
                }, [s]),
                r.useEffect(() => {
                    let t = 0,
                        r = o.current;
                    function l(e, i) {
                        let s = (i & is.ME.VOICE) === is.ME.VOICE,
                            a = iu.A.isCurrentUserPTTActive();
                        s && !a
                            ? ++t >= 6 &&
                              (n(!0),
                              r.start(ic, () => {
                                  n(!1);
                              }))
                            : (t = 0);
                    }
                    return (
                        a && e && i && null != s && it.Ay.getMediaEngine().on(il.bg.VoiceActivity, l),
                        () => {
                            it.Ay.getMediaEngine().removeListener(il.bg.VoiceActivity, l), r.stop();
                        }
                    );
                }, [e, i, a, s]),
                t
            );
        })(),
        et = r.useMemo(() => ($ ? "input" : q ? "output" : void 0), [$, q]),
        en = r.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        z();
                        break;
                    case "output":
                        Z();
                }
            },
            [z, Z],
        );
    return (0, i.jsx)(M.f5, {
        value: F,
        children: (0, i.jsx)(rb, {
            currentUser: e,
            username: G,
            activities: n,
            applicationStream: o,
            voiceChannel: p,
            dismissibleContents: W,
            userTag: f,
            occluded: O,
            selfDeaf: I,
            selfMute: m,
            serverDeaf: T,
            serverMute: E,
            speaking: u,
            voiceDb: h,
            speakingWhileMuted: N,
            speakingWhilePTTInactive: ee,
            status: a,
            streaming: s,
            suppress: g,
            webBuildOverride: C,
            awaitingRemote: b,
            nameplate: V,
            selectedGuildId: D,
            avatarDecoration: U,
            isQuestBarEmpty: j,
            isListenAlongVisible: Y,
            deviceChangedTooltipType: et,
            onDismissDeviceChangedTooltip: () => en(et),
            shouldShowPTTJoinTooltip: Q,
            dismissPTTJoinTooltip: J,
        }),
    });
}
