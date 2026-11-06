(n.d(t, { g: () => l$, A: () => lJ }), n(321073));
var i = n(477900),
    l = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(435558),
    o = n.n(s),
    u = n(350835),
    c = n(855986),
    d = n(554146),
    m = n(451988),
    f = n(97808),
    p = n(778712),
    h = n(265872),
    g = n(939249),
    A = n(140735),
    C = n(312138);
if (221552 == n.j) var E = n(192308);
var x = n(442433),
    v = n(820284),
    _ = n(717558),
    y = n(964486),
    b = n(220839),
    T = n(397244),
    S = n(342312),
    I = n(160808),
    j = n(120692),
    N = n(866323),
    R = n(120842);
function M(e) {
    let { text: t } = e,
        n = (0, N.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, i.jsx)("div", {
        className: R.k,
        children: n((e, t) => (0, i.jsx)(j.animated.div, { className: R.H, style: e, children: t })),
    });
}
var O = n(29160),
    P = n(793574),
    k = n(688810),
    L = n(643056),
    D = n(158390),
    w = n(927813),
    U = n(682618),
    G = n(864197),
    F = n(982240),
    B = n(988341),
    H = n(521502),
    V = n(380610),
    W = n(628983),
    z = n(18235),
    K = n(183184),
    Y = n(384059),
    q = n(480890),
    Q = n(601255),
    $ = n(562819),
    X = n(449582),
    Z = n(351952),
    J = n(88686),
    ee = n(214881),
    et = n(302223),
    en = n(609425),
    ei = n(922301),
    el = n(16371),
    er = n(643501),
    ea = n(826673),
    es = n(617617),
    eo = n(798091),
    eu = n(355097),
    ec = n(382633),
    ed = n(552122),
    em = n(74848),
    ef = n(607399),
    ep = n(305866),
    eh = n(707554),
    eg = n(95362),
    eA = n(22231),
    eC = n(805251),
    eE = n(935154),
    ex = n(780338);
if (221552 != n.j) var E = n(192308);
var ev = n(224640),
    e_ = n(165862),
    ey = n(877784),
    eb = n(26137),
    eT = n(473935),
    eS = n(765671),
    eI = n(470739),
    ej = n(142617),
    eN = n(289873),
    eR = n(366056),
    eM = n(477782),
    eO = n(320448),
    eP = n(834730),
    ek = n(993401),
    eL = n(792996),
    eD = n(211450);
function ew(e) {
    return (0, i.jsx)("div", {
        className: eD.wE,
        children: (0, i.jsx)(e_.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function eU(e) {
    let {
            action: t,
            onClick: n,
            icon: r,
            label: a,
            sublabel: s,
            trailing: o,
            renderSubmenu: u,
            ref: c,
            submenuTargetElementRef: d,
            submenuAlign: m,
        } = e,
        f = null != n,
        p = (0, ek.rE)({ action: t, onClick: n }),
        [A, C] = l.useState(!1),
        x = l.useRef(null),
        v = c ?? x,
        _ = null != u,
        y = _ && f,
        b = l.useCallback(() => {
            C(!0);
        }, []),
        T = l.useCallback(() => {
            (0, E.ue)() || C(!1);
        }, []);
    function S() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: eD.iA, children: (0, i.jsx)(r, { size: "xs", color: "currentColor" }) }),
                (0, i.jsxs)("div", {
                    className: eD.$H,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(eP.E, {
                                    color: "currentColor",
                                    variant: "body-sm/medium",
                                    className: eD.W1,
                                    children: a,
                                }),
                                (0, i.jsx)(eP.E, { color: "currentColor", variant: "body-xs/medium", children: s }),
                            ],
                        }),
                        o,
                    ],
                }),
            ],
        });
    }
    function I(e) {
        let t;
        return (
            (t = y
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.D, { className: eD.ef, onClick: p, children: S() }),
                          (0, i.jsx)(g.D, {
                              className: eD.ap,
                              "aria-label": eL.intl.string(eL.t.PdRCRg),
                              ...e,
                              onClick: b,
                              children: (0, i.jsx)(eO.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                          }),
                      ],
                  })
                : _
                  ? (0, i.jsxs)(g.D, {
                        className: eD.ef,
                        ...e,
                        onClick: b,
                        children: [
                            S(),
                            (0, i.jsx)("div", {
                                className: eD.ap,
                                children: (0, i.jsx)(eO.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    })
                  : (0, i.jsx)(g.D, { className: eD.ef, onClick: p, children: S() })),
            (0, i.jsx)("div", { ref: v, className: eD.jG, children: t })
        );
    }
    return _
        ? (0, i.jsx)("li", {
              className: eD.j$,
              onMouseEnter: b,
              onMouseLeave: T,
              children: (0, i.jsx)(h.Y, {
                  targetElementRef: d ?? v,
                  align: m,
                  spacing: 0,
                  renderPopout: u,
                  shouldShow: A,
                  onRequestClose: T,
                  children: I,
              }),
          })
        : (0, i.jsx)("li", { className: eD.j$, children: I() });
}
function eG(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var eF = n(719718),
    eB = n(925433),
    eH = n(796104),
    eV = n(148295),
    eW = n(858899);
function ez(e, t) {
    (0, eW.P0)({ text: e, variant: "success" === t ? "success" : "critical" });
}
var eK = n(96494);
function eY(e, t, n, i) {
    return { id: e, label: t, description: n, action: () => (0, eB.D)("qa_menu", i !== eV.S.NO_PERSONAL_DATA, i) };
}
let eq = [
    eY("open", eK.default.yLZjcu),
    {
        id: "reset",
        label: eK.default["2DL3aX"],
        action: async () => {
            (await (0, eH.sm)())
                ? ez(eL.intl.string(eK.default.D5x6qE), "success")
                : ez(eL.intl.string(eK.default.EkMBfH), "failure");
        },
    },
    eY("open-fake-data", eK.default.kPBZ5M, eK.default.cf0nfD, eV.S.DEFAULT),
    eY("open-global-stats", eK.default.UwiUbM, eK.default["+5dICr"], eV.S.NO_PERSONAL_DATA),
    eY("open-zero-stats", eK.default.BYW9oX, eK.default.NffC17, eV.S.ZERO_DATA),
];
var eQ = n(852717),
    e$ = n(641214);
function eX() {
    return (0, i.jsx)(eN.y, { type: eN.t.SPINNING_CIRCLE_SIMPLE, className: e$.u1, itemClassName: e$.$N });
}
function eZ(e) {
    let { onClose: t } = e,
        n = (0, ej.TX)("CheckpointUserStatusMenuItem"),
        l = (0, c.bG)([eF.A], () => eF.A.isFetching);
    return (0, i.jsx)(eU, {
        icon: l ? eX : eR.ExperimentalCheckpointIcon,
        label: eL.intl.string(eQ.default["8hclXY"]),
        sublabel: (0, i.jsx)("span", { className: e$.$B, children: eL.intl.string(eQ.default.BFc4lY) }),
        onClick: async function () {
            (await (0, eB.D)("user_profile_account_popout"), t());
        },
        renderSubmenu: n
            ? (e) => {
                  let { closePopout: n } = e;
                  return (0, i.jsx)(ew, {
                      navId: "checkpoint-qa-submenu",
                      "aria-label": eL.intl.string(eK.default["9dS734"]),
                      className: e$.gn,
                      onClose: n,
                      children: eq.map((e) =>
                          (0, i.jsx)(
                              eM.Dr,
                              {
                                  id: e.id,
                                  label: eL.intl.string(e.label),
                                  subtext: null != e.description ? eL.intl.string(e.description) : void 0,
                                  action: () => {
                                      (t(), e.action());
                                  },
                              },
                              e.id,
                          ),
                      ),
                  });
              }
            : void 0,
    });
}
var eJ = n(176781),
    e0 = n(812993),
    e1 = n(780964),
    e2 = n(766075),
    e3 = n(734066),
    e6 = n(419490),
    e8 = n(409067),
    e5 = n(271597),
    e7 = n(534514),
    e9 = n(475358),
    e4 = n(866665),
    te = n(408278),
    tt = n(625903),
    tn = n(404778),
    ti = n(516521),
    tl = n(821609),
    tr = n(532624),
    ta = n(879631),
    ts = n(350535),
    to = n(341923),
    tu = n(572164),
    tc = n(953932),
    td = n(280483),
    tm = n(890856),
    tf = n(713517),
    tp = n(609174),
    th = n(151184);
function tg(e) {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        r = (0, tp.Y_)(),
        a = l.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), t?.(), (0, e5.p)({ initialEditingClipId: r.id }));
            },
            [r, t],
        );
    return (0, i.jsx)(tl.$, {
        onClick: a,
        icon: eA.PencilIcon,
        variant: n,
        size: "sm",
        text: eL.intl.string(eL.t.bt75uw),
        fullWidth: !0,
    });
}
var tA = n(82716),
    tC = n(449397),
    tE = n(399053),
    tx = n(285072),
    tv = n(575172);
let t_ = l.memo(function (e) {
    let { clip: t, isNew: n, onClose: r, className: s } = e,
        o = l.useRef(null),
        { isHoveringOrFocusing: u } = (0, tf.A)(o),
        c = l.useCallback(() => {
            (r?.(), (0, e5.p)({ initialEditingClipId: t.id }));
        }, [t.id, r]);
    return (0, i.jsx)(tp.Cl, {
        clip: t,
        children: (0, i.jsx)(tm.s, {
            ref: o,
            "aria-label": eL.intl.string(eL.t.bt75uw),
            onClick: c,
            className: a()(tv.Z1, s),
            children: (0, i.jsxs)(tE.d, {
                isStatic: !0,
                children: [
                    n &&
                        (0, i.jsx)("div", {
                            className: tv.Ad,
                            children: (0, i.jsx)(eC.E, { type: "new", variant: "primary" }),
                        }),
                    (0, i.jsxs)(tx.h, {
                        isVisible: u,
                        className: tv.Lw,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tv.mY,
                                children: [(0, i.jsx)(tA.z, {}), (0, i.jsx)(th.k, {})],
                            }),
                            (0, i.jsxs)("div", {
                                className: tv.E_,
                                children: [
                                    (0, i.jsx)(tg, { onBeforeEdit: r, variant: "overlay-secondary" }),
                                    (0, i.jsx)(tC.e, {}),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
var ty = n(696016),
    tb = n(652215),
    tT = n(753070),
    tS = n(683825),
    tI = n(48127);
function tj(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: r, setPopoutRef: a } = e;
    (0, td.A)();
    let s = (0, c.yK)([e6.Ay], () => Object.values(e6.Ay.getClips())),
        o = (0, c.bG)([e6.Ay], () => e6.Ay.getSettings()),
        u = (0, c.bG)([e6.Ay], () => e6.Ay.getNewClipIds()),
        d = (0, to.H)(),
        m = (0, c.bG)([e6.Ay], () => e6.Ay.getEnableAutoclipping()),
        f = (0, c.bG)([tr.Ay], () => tr.Ay.getKeybindForAction(tb.hCu.SAVE_CLIP)),
        p = l.useCallback(
            (e) => {
                a?.(e);
            },
            [a],
        ),
        h = !o.showPovClipsInGallery,
        g = l.useMemo(() => {
            let e = s.filter((e) => e.type === ty.nQ.CLIP && "" !== e.thumbnail && (!h || !(0, e8.kD)(e)));
            return (e.sort((e, t) => t.createdAt - e.createdAt), e);
        }, [s, h]),
        A = l.useMemo(() => g.slice(0, 16), [g]),
        C = g.length > 16,
        E = null != f ? ts.dI(f.shortcut, !0) : null,
        x = [
            (0, ta.$)(o.clipsLength / w.A.Millis.SECOND),
            (0, tT.zr)(o.clipsQuality.resolution),
            eL.intl.formatToPlainString(eL.t.Qb44XH, { fps: o.clipsQuality.frameRate }),
        ];
    return (
        d && x.push(eL.intl.string(tS.default.XWkJoi)),
        (0, i.jsxs)("div", {
            ref: p,
            className: tI.SW,
            role: "dialog",
            "aria-label": eL.intl.string(eL.t.z2jK6X),
            children: [
                (0, i.jsxs)("div", {
                    className: tI.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tI.$,
                            children: [
                                (0, i.jsx)(e7.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    children: eL.intl.string(eL.t.z2jK6X),
                                }),
                                null != E && (0, i.jsx)(e9.e, { className: tI.P, shortcut: E }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tI.$s,
                            children: [
                                (0, i.jsx)(e4.m, {
                                    text: eL.intl.string(eL.t["3D5yo/"]),
                                    children: (0, i.jsx)(te.K, {
                                        onClick: () => n(),
                                        icon: tt.SettingsIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eL.intl.string(eL.t["3D5yo/"]),
                                    }),
                                }),
                                (0, i.jsx)(e4.m, {
                                    text: eL.intl.string(tS.default["55C2MH"]),
                                    children: (0, i.jsx)(te.K, {
                                        onClick: () => t(),
                                        icon: eJ.ClipsIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eL.intl.string(tS.default["55C2MH"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: tI.ov,
                    children: [
                        x.map((e, t) =>
                            (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        t > 0 && (0, i.jsx)("span", { className: tI.LO, children: "\u2022" }),
                                        (0, i.jsx)(eP.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            tag: "span",
                                            className: tI.c5,
                                            children: e,
                                        }),
                                    ],
                                },
                                e,
                            ),
                        ),
                        d &&
                            (0, i.jsx)(eP.E, {
                                variant: "body-xs/semibold",
                                color: m ? "text-strong" : "text-feedback-critical",
                                tag: "span",
                                className: tI.wS,
                                children: m ? eL.intl.string(tS.default.lTwKmt) : eL.intl.string(tS.default.GNDqtf),
                            }),
                    ],
                }),
                (0, i.jsx)(tn.c, {}),
                A.length > 0
                    ? (0, i.jsxs)(ti.Ch, {
                          className: tI.Vg,
                          fade: !0,
                          disableFocusRingScope: !0,
                          children: [
                              A.map((e) => (0, i.jsx)(t_, { clip: e, isNew: u.includes(e.id), onClose: r }, e.id)),
                              C &&
                                  (0, i.jsx)("div", {
                                      className: tI.qr,
                                      children: (0, i.jsx)(tl.$, {
                                          onClick: () => t(),
                                          text: eL.intl.string(tS.default["55C2MH"]),
                                          variant: "secondary",
                                          size: "sm",
                                      }),
                                  }),
                          ],
                      })
                    : (0, i.jsx)(tN, { keybindString: E }),
            ],
        })
    );
}
function tN(e) {
    let { keybindString: t } = e,
        n = (0, tu.E)();
    return (0, i.jsxs)("div", {
        className: tI.p$,
        children: [
            (0, i.jsx)(eP.E, {
                variant: "body-md/medium",
                color: "text-default",
                className: tI.qO,
                children: eL.intl.string(tS.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(eP.E, {
                      variant: "body-sm/medium",
                      color: "text-muted",
                      className: tI.CZ,
                      children: eL.intl.format(tS.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, i.jsx)(
                                  eP.E,
                                  {
                                      variant: "body-sm/medium",
                                      color: "text-feedback-positive",
                                      tag: "span",
                                      children: e,
                                  },
                                  "protip",
                              ),
                          keybind: (0, i.jsx)(e9.e, { shortcut: t }, "keybind"),
                      }),
                  })
                : (0, i.jsx)(tc.A, {}),
        ],
    });
}
function tR(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        r = (0, e3.sw)(),
        a = !(0, c.bG)([e6.Ay], () => e6.Ay.getSettings().showPovClipsInGallery),
        s = (0, c.bG)(
            [e6.Ay],
            () => {
                let e = e6.Ay.getNewClipIds();
                return a
                    ? e.filter((e) => {
                          let t = e6.Ay.getClipById(e);
                          return null != t && !(0, e8.kD)(t);
                      }).length
                    : e.length;
            },
            [a],
        ),
        o = l.useCallback(
            (e) => {
                (t(), (0, e5.p)({ initialEditingClipId: e }));
            },
            [t],
        ),
        u = l.useCallback(() => {
            (t(), (0, e2.openUserSettings)(e1.X.CLIPS_PANEL));
        }, [t]);
    return r
        ? (0, i.jsx)(eU, {
              action: "PRESS_CLIPS",
              icon: eJ.ClipsIcon,
              label: eL.intl.string(eL.t.z2jK6X),
              trailing: s > 0 ? (0, i.jsx)(e0.hV, { count: s }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, i.jsx)(tj, { ...e, onOpenGallery: o, onOpenSettings: u, onClose: t }),
          })
        : null;
}
var tM = n(971217),
    tO = n(577390),
    tP = n(287727),
    tk = n(31956),
    tL = n(744808),
    tD = n(645507),
    tw = n(263775),
    tU = n(970931),
    tG = n(315710),
    tF = n(789645),
    tB = n(775602),
    tH = n(832248),
    tV = n(462887),
    tW = n(736653),
    tz = n(439174),
    tK = n(722178),
    tY = n(105909),
    tq = n(682901);
function tQ() {
    let e = (0, tY.Xb)(),
        t = (0, tK.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tq.sp.length - 1; t >= 0; t--) {
        let i = tq.VD[tq.sp[t]],
            l = new Date(e);
        if ((l.setMonth(l.getMonth() + i.tenureReqNumMonths), l.setHours(l.getHours() + 30), n > l.getTime()))
            if (n - l.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let t$ = {
        [tq.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tq.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tq.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tq.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tq.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tq.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tq.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tq.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tX = {
        [tq.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [tq.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [tq.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [tq.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [tq.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [tq.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [tq.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [tq.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var tZ = n(570484);
let tJ = l.lazy(() => Promise.all([n.e(969274), n.e(924832)]).then(n.bind(n, 748579)));
function t0() {
    let e = (0, c.bG)([tB.Ay], () => tB.Ay.useReducedMotion),
        t = (0, tH.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tQ(),
                t = (0, tV.M)((0, tW.Ay)());
            if (null == e) return null;
            let n = t$[e],
                i = tX[e],
                l = {
                    currentBadge: (0, tz.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                r = tq.sp.indexOf(e);
            if (r > 0) {
                let e = tq.sp[r - 1],
                    n = t$[e];
                ((l.prevBadge = (0, tz.e0)(e)), (l.prevBadgeTextGradient = t ? n?.dark : n?.light));
            }
            return l;
        })(),
        [r, a] = l.useState(null);
    return (null != n && null == r && a(n), e || !t || null == r) ? null : (0, i.jsx)(t1, { levelUpData: r });
}
function t1(e) {
    let { levelUpData: t } = e,
        n = l.useRef(null),
        r = l.useCallback(() => {
            tH.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, i.jsx)(tG.Ok, {
        containerRef: n,
        children: (0, i.jsxs)("div", {
            className: tZ.i,
            children: [
                (0, i.jsx)("div", {
                    className: tZ.b,
                    children: (0, i.jsx)(e4.m, {
                        text: eL.intl.string(eL.t.cpT0Cq),
                        children: (0, i.jsx)(te.K, {
                            icon: tF.XSmallIcon,
                            variant: "secondary",
                            size: "sm",
                            onClick: r,
                            "aria-label": eL.intl.string(eL.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, i.jsx)(l.Suspense, { fallback: null, children: (0, i.jsx)(tJ, { levelUpData: t }) }),
            ],
        }),
    });
}
var t2 = n(397562),
    t3 = n(206835),
    t6 = n(183555),
    t8 = n(465318),
    t5 = n(527212),
    t7 = n(702476),
    t9 = n(718019),
    t4 = n(567556),
    ne = n(915614),
    nt = n(560296),
    nn = n(559506),
    ni = n(646986),
    nl = n(312294),
    nr = n(946356),
    na = n(465829),
    ns = n(624479),
    no = n(206845),
    nu = n(957565),
    nc = n(427262),
    nd = n(62119);
function nm(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: l } = (0, t6.NJ)();
    return nu.p5
        ? (0, i.jsx)(no.A, {
              text: eL.intl.string(eL.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: nc.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => l({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(g.D, {
                      ...e,
                      className: a()(nd.c, { [nd.R]: n }),
                      "aria-label": eL.intl.string(eL.t.y5MwJy),
                      children: (0, i.jsx)(ns.CopyIcon, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var nf = n(680581),
    np = n(442228),
    nh = n(253932),
    ng = n(362862),
    nA = n(621466),
    nC = n(318254),
    nE = n(863610),
    nx = n(421773),
    nv = n(318346),
    n_ = n(923138),
    ny = n(309954),
    nb = n(673125),
    nT = n(150849),
    nS = n(769001);
function nI(e) {
    let { popoutContainerRef: t, scrollerRef: n, shouldScrollIntoView: r, onCloseAccountPopout: s } = e;
    (0, n_.I)({ enabled: !0 });
    let { balance: o } = (0, ny.W)(),
        u = (0, c.bG)([nb.Ay], () =>
            nb.Ay.userOpenedWalletViaProfileDCF ? nb.Y0.NEW_ACHIEVEMENT : nb.Ay.clientUnreadNotificationType,
        );
    l.useEffect(
        () => () => {
            nb.Ay.setUserOpenedWalletViaProfileDCF(!1);
        },
        [],
    );
    let { isHovered: d, onMouseEnter: m, onMouseLeave: f, setIsHovered: p, cancelTimers: A } = (0, nx.A)(0, 500),
        C = l.useCallback(() => {
            (0, E.ue)() || f();
        }, [f]),
        x = l.useRef(null),
        v = l.useRef(null),
        _ = l.useRef(null),
        y = l.useCallback(
            (e) => {
                (_.current?.disconnect(),
                    (_.current = null),
                    null != e &&
                        ((_.current = new ResizeObserver(() => {
                            A();
                        })),
                        _.current.observe(e)));
            },
            [A],
        );
    (l.useEffect(() => () => _.current?.disconnect(), []),
        l.useEffect(() => {
            if (d)
                return (document.addEventListener("mouseover", e), () => document.removeEventListener("mouseover", e));
            function e(e) {
                if ((0, E.ue)()) return;
                let t = (0, nA.vq)(e.target, Element) ? e.target : null,
                    n = t?.closest(`.${eD.j$}`);
                null != n && n !== x.current && (A(), p(!1));
            }
        }, [d, A, p]));
    let b = l.useRef(!1);
    l.useEffect(() => {
        d || (b.current = !1);
    }, [d]);
    let T = l.useCallback(() => {
            (b.current ||
                ((b.current = !0),
                (0, nv.Y)({
                    pageType: P.A.USER_PROFILE_ACCOUNT_POPOUT,
                    sectionType: P.A.ORB_WALLET,
                    ctaObject: P.A.ORB_WALLET_OPEN_FROM_PROFILE,
                })),
                m());
        }, [m]),
        S = (0, ek.rE)({ action: "PRESS_ORBS", onClick: T });
    l.useEffect(() => {
        let e = n?.current,
            t = x.current;
        if (!r || null == e || null == t) return;
        function i() {
            if (null == e || null == t) return;
            let n = e.getBoundingClientRect(),
                i = t.getBoundingClientRect(),
                l = i.bottom + 24 - n.bottom,
                r = n.top - (i.top - 24);
            l > 0 ? (e.scrollTop += l) : r > 0 && (e.scrollTop -= r);
        }
        let l = requestAnimationFrame(i),
            a = new ResizeObserver(i);
        for (let t of (a.observe(e), Array.from(e.children))) a.observe(t);
        function s() {
            (a.disconnect(), clearTimeout(o));
        }
        let o = setTimeout(s, 3e3);
        return (
            e.addEventListener("wheel", s, { once: !0 }),
            e.addEventListener("pointerdown", s, { once: !0 }),
            () => {
                (cancelAnimationFrame(l),
                    s(),
                    e.removeEventListener("wheel", s),
                    e.removeEventListener("pointerdown", s));
            }
        );
    }, [r, n]);
    let I = l.useMemo(
            () =>
                null != o
                    ? eL.intl.format(eL.t["8xDISf"], { balance: String(o) })
                    : (0, i.jsx)(nE.n, { dotRadius: 3.5, themed: !0, className: nS.K }),
            [o],
        ),
        j = l.useMemo(
            () =>
                u === nb.Y0.NEW_ACHIEVEMENT
                    ? (0, i.jsx)(eC.E, { type: "new", variant: "primary" })
                    : u === nb.Y0.UNCLAIMED_ACHIEVEMENT
                      ? (0, i.jsx)(eC.E, { type: { text: eL.intl.string(eL.t.O13yhz) }, variant: "primary" })
                      : null,
            [u],
        ),
        N = l.useCallback(() => {
            (A(), p(!1), s());
        }, [A, p, s]),
        R = l.useCallback(
            (e) => {
                let { relatedTarget: t } = e;
                (0, nA.vq)(t, Node) && null != x.current && x.current.contains(t) && A();
            },
            [A],
        );
    return (0, i.jsx)("li", {
        ref: x,
        className: eD.j$,
        onMouseEnter: T,
        onMouseLeave: C,
        children: (0, i.jsx)(h.Y, {
            targetElementRef: t,
            align: "bottom",
            spacing: -16,
            renderPopout: () =>
                (0, i.jsx)("div", {
                    ref: y,
                    onMouseEnter: m,
                    onMouseLeave: R,
                    children: (0, i.jsx)(nT.vG, { onCloseWallet: N, returnRef: v, isProfilePopout: !0 }),
                }),
            shouldShow: d,
            onRequestClose: C,
            children: (e) =>
                (0, i.jsx)("div", {
                    className: eD.jG,
                    children: (0, i.jsxs)(g.D, {
                        innerRef: v,
                        className: eD.ef,
                        ...e,
                        onClick: S,
                        children: [
                            (0, i.jsx)("div", {
                                className: eD.iA,
                                children: (0, i.jsx)(nC.OrbsIcon, { color: "currentColor", size: "xs" }),
                            }),
                            (0, i.jsx)("div", {
                                className: eD.$H,
                                children: (0, i.jsx)("div", {
                                    children: (0, i.jsx)(eP.E, {
                                        color: "currentColor",
                                        variant: "body-sm/medium",
                                        className: eD.W1,
                                        children: I,
                                    }),
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: a()(eD.ap, nS._),
                                children: [
                                    j,
                                    (0, i.jsx)(eO.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                                ],
                            }),
                        ],
                    }),
                }),
        }),
    });
}
var nj = n(290863),
    nN = n(351906),
    nR = n(403362),
    nM = n(562153),
    nO = n(646514),
    nP = n(628284),
    nk = n(695366),
    nL = n(413599),
    nD = n(619019),
    nw = n(287809),
    nU = n(129230),
    nG = n(429707),
    nF = n(274303),
    nB = n(994125),
    nH = n(347853),
    nV = n(573879),
    nW = n(559117),
    nz = n(43105),
    nK = n(661439),
    nY = n(385113),
    nq = n(352003),
    nQ = n(429913),
    n$ = n(334074),
    nX = n(633075),
    nZ = n(667049),
    nJ = n(46653),
    n0 = n(90165),
    n1 = n(49999),
    n2 = n(518477);
function n3(e) {
    let { targetElementRef: t, onClose: r } = e,
        [a, s] = l.useState(!1),
        o = (0, c.bG)([nJ.default], () => nJ.default.getId()),
        { eligibleApplications: u, markAsDismissed: m } = (function () {
            let e = (0, c.yK)([nY.A], () => nY.A.getFeaturedApplicationIds());
            ((0, nq.A)(e),
                l.useEffect(() => {
                    (0, nK.X)();
                }, []));
            let t = (0, c.bG)([nJ.default], () => nJ.default.getId()),
                n = (0, nZ.A)(t),
                i = l.useMemo(() => n.filter((e) => e instanceof nX.R), [n]),
                r = (0, nQ.A)(e),
                a = l.useMemo(() => r.filter(nR.Vq), [r]),
                s = (0, c.cf)([n0.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = a.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = n0.A.getLastPlayedDateTime(e));
                    }
                    return t;
                }),
                o = l.useMemo(() => {
                    let e = Date.now();
                    return a.filter((t) => {
                        if (i.some((e) => e.applicationId === t.id)) return !1;
                        let n = s[t.id];
                        return null != n && e - n < 7776e6;
                    });
                }, [a, i, s]),
                { eligibleToShow: u, markAsDismissed: m } = (0, n$.hj)({
                    applications: o,
                    dismissibleContent: d.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: n$.SH,
                });
            return {
                eligibleApplications: l.useMemo(() => o.filter((e) => u.includes(e.id)), [o, u]),
                markAsDismissed: m,
            };
        })();
    return ((0, l.useEffect)(() => {
        0 !== u.length &&
            Promise.all([
                n.e(459257),
                n.e(535308),
                n.e(393514),
                n.e(816027),
                n.e(562772),
                n.e(970604),
                n.e(399275),
                n.e(677624),
                n.e(165291),
                n.e(796668),
                n.e(953327),
                n.e(733814),
                n.e(106980),
                n.e(839772),
                n.e(814431),
                n.e(763214),
                n.e(291103),
                n.e(439120),
                n.e(488602),
                n.e(426737),
                n.e(607468),
                n.e(440636),
                n.e(568960),
                n.e(315289),
                n.e(372883),
                n.e(396635),
                n.e(339715),
                n.e(149697),
                n.e(128804),
                n.e(60882),
                n.e(71151),
                n.e(985301),
                n.e(981059),
                n.e(790484),
                n.e(211004),
                n.e(269714),
                n.e(62849),
                n.e(489020),
                n.e(670058),
                n.e(527798),
                n.e(892877),
                n.e(322497),
                n.e(249918),
                n.e(123981),
                n.e(862543),
                n.e(759086),
                n.e(422037),
                n.e(412117),
                n.e(263406),
                n.e(1955),
                n.e(341161),
                n.e(410526),
                n.e(202985),
                n.e(603619),
                n.e(175927),
                n.e(470126),
                n.e(227853),
                n.e(286615),
                n.e(735042),
                n.e(311541),
                n.e(274227),
                n.e(870088),
                n.e(300641),
                n.e(571163),
                n.e(586662),
                n.e(831377),
                n.e(709976),
                n.e(860596),
                n.e(279774),
                n.e(763945),
                n.e(261204),
                n.e(686731),
                n.e(807432),
                n.e(873532),
                n.e(590088),
                n.e(807003),
                n.e(46083),
                n.e(152133),
                n.e(747802),
                n.e(626353),
                n.e(71169),
                n.e(906470),
                n.e(736663),
                n.e(419121),
                n.e(919789),
                n.e(669130),
                n.e(802890),
                n.e(82937),
                n.e(987221),
                n.e(157064),
                n.e(156957),
                n.e(918786),
                n.e(701335),
                n.e(257935),
                n.e(724086),
                n.e(358937),
                n.e(448738),
                n.e(206189),
                n.e(804439),
                n.e(84978),
                n.e(894292),
                n.e(153302),
                n.e(88683),
                n.e(694414),
                n.e(923981),
                n.e(750370),
                n.e(972281),
                n.e(307107),
                n.e(896622),
                n.e(466592),
                n.e(73946),
                n.e(228271),
                n.e(387970),
                n.e(847445),
                n.e(547510),
                n.e(966366),
                n.e(983513),
                n.e(76928),
                n.e(699250),
                n.e(528311),
                n.e(377109),
                n.e(74886),
                n.e(713273),
                n.e(546547),
                n.e(102075),
                n.e(412408),
                n.e(193457),
                n.e(892937),
                n.e(420446),
                n.e(490449),
                n.e(148758),
                n.e(36026),
                n.e(709546),
                n.e(825661),
                n.e(119766),
                n.e(589154),
                n.e(888499),
                n.e(839182),
                n.e(52727),
                n.e(423117),
                n.e(465650),
                n.e(166171),
                n.e(595990),
                n.e(218781),
                n.e(324469),
                n.e(70379),
                n.e(417333),
                n.e(127962),
                n.e(834552),
                n.e(993103),
                n.e(863232),
                n.e(708757),
                n.e(295507),
                n.e(332447),
                n.e(959880),
                n.e(174016),
                n.e(22921),
                n.e(910471),
                n.e(11301),
                n.e(430858),
                n.e(861060),
                n.e(364827),
                n.e(77333),
                n.e(626565),
                n.e(257980),
                n.e(960235),
                n.e(585968),
                n.e(486137),
                n.e(80421),
                n.e(206027),
                n.e(393471),
                n.e(177641),
                n.e(198329),
                n.e(678157),
                n.e(942374),
                n.e(223219),
                n.e(130795),
                n.e(10866),
                n.e(313537),
                n.e(40291),
                n.e(733115),
                n.e(397270),
                n.e(406222),
                n.e(761597),
                n.e(373122),
                n.e(649408),
                n.e(221856),
                n.e(186212),
                n.e(755936),
                n.e(147662),
                n.e(316344),
                n.e(396705),
                n.e(274501),
                n.e(544571),
                n.e(692990),
                n.e(714496),
                n.e(305834),
                n.e(745959),
                n.e(858529),
                n.e(481987),
                n.e(595653),
                n.e(958038),
                n.e(532039),
                n.e(719466),
                n.e(885553),
                n.e(576909),
                n.e(830228),
                n.e(27355),
                n.e(953665),
                n.e(406174),
                n.e(713708),
                n.e(776273),
                n.e(492762),
                n.e(885533),
                n.e(282833),
                n.e(393766),
                n.e(572963),
                n.e(188689),
                n.e(229787),
                n.e(521930),
                n.e(554241),
                n.e(724303),
                n.e(53102),
                n.e(918024),
                n.e(88599),
                n.e(780262),
                n.e(354044),
                n.e(437065),
                n.e(709640),
                n.e(952548),
                n.e(893917),
                n.e(636373),
                n.e(230664),
                n.e(655708),
                n.e(889638),
                n.e(553984),
                n.e(142867),
                n.e(884601),
                n.e(782969),
                n.e(776766),
                n.e(504370),
                n.e(620656),
                n.e(495786),
                n.e(428967),
                n.e(782791),
                n.e(129080),
                n.e(238232),
                n.e(608032),
                n.e(477970),
                n.e(823300),
                n.e(136204),
                n.e(736926),
                n.e(252229),
                n.e(523276),
                n.e(77473),
                n.e(440142),
                n.e(812042),
                n.e(547801),
                n.e(729963),
                n.e(830938),
                n.e(538513),
                n.e(919726),
                n.e(325047),
                n.e(907424),
                n.e(50097),
                n.e(188545),
                n.e(144179),
                n.e(838090),
                n.e(536973),
                n.e(203930),
                n.e(903663),
                n.e(246969),
                n.e(566976),
                n.e(908081),
                n.e(914248),
                n.e(922606),
                n.e(646284),
                n.e(829260),
                n.e(965061),
                n.e(504098),
                n.e(746479),
                n.e(604172),
                n.e(568881),
                n.e(582486),
                n.e(350949),
                n.e(671367),
                n.e(134504),
                n.e(248985),
                n.e(553683),
                n.e(280098),
                n.e(181162),
                n.e(704374),
                n.e(186546),
                n.e(547298),
                n.e(571294),
                n.e(598421),
                n.e(443256),
                n.e(373566),
                n.e(114633),
                n.e(909063),
                n.e(720161),
                n.e(825650),
                n.e(247339),
                n.e(540077),
                n.e(607222),
                n.e(659624),
                n.e(736637),
                n.e(653308),
                n.e(272887),
                n.e(803410),
                n.e(949001),
                n.e(677407),
                n.e(550260),
                n.e(984884),
                n.e(69658),
                n.e(634786),
                n.e(569443),
                n.e(49282),
                n.e(235683),
                n.e(936572),
            ]).then(n.bind(n, 148540));
    }, [u.length]),
    0 === u.length)
        ? null
        : (0, i.jsx)(nz.A, {
              targetElementRef: t,
              position: "right",
              gradientColor: "blue",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/c7446f4156b0cb7fde3b34dd50bb48a7f4699c72a5b2e42ba16091f8c8a93a13.svg",
              },
              title: eL.intl.string(eL.t.HMWL9c),
              body: eL.intl.string(eL.t["9hfy3A"]),
              onRequestClose: () =>
                  m(
                      u.map((e) => e.id),
                      n1.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: eL.intl.string(eL.t.VSLDly),
                      loading: a,
                      onClick: function () {
                          (s(!0),
                              (0, t7.openUserProfileModal)({ userId: o, tabSection: n2.RP.WIDGETS })
                                  .then(() => {
                                      let e = u.map((e) => e.id);
                                      ((0, E.mM)(
                                          async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e(546547),
                                                  n.e(102075),
                                                  n.e(412408),
                                                  n.e(193457),
                                                  n.e(892937),
                                                  n.e(166171),
                                                  n.e(487697),
                                                  n.e(492762),
                                                  n.e(136204),
                                                  n.e(504098),
                                                  n.e(181162),
                                                  n.e(547298),
                                                  n.e(720161),
                                                  n.e(949001),
                                                  n.e(360545),
                                              ]).then(n.bind(n, 414904));
                                              return (n) =>
                                                  (0, i.jsx)(t, {
                                                      ...n,
                                                      trackUserProfileEditAction: () => {},
                                                      highlightedApplicationIds: e,
                                                  });
                                          },
                                          { stackingBehavior: "stack" },
                                      ),
                                          m(
                                              u.map((e) => e.id),
                                              n1.i.TAKE_ACTION,
                                          ),
                                          r());
                                  })
                                  .finally(() => s(!1)));
                      },
                  },
              ],
          });
}
var n6 = n(894768),
    n8 = n(818348),
    n5 = n(709516);
function n7() {
    let e = (0, c.bG)([n6.A], () => n6.A.getStatus()),
        t = (0, nc.MU)(e) ?? "",
        n = e === n8.cl.INVISIBLE || e === n8.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: n5.k,
        children: [
            (0, i.jsxs)(A.A, { tag: "div", children: [eL.intl.string(eL.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(e4.m, {
                    text: eL.intl.string(eL.t.L99HQm),
                    children: (0, i.jsx)(nk.CircleErrorIcon, {
                        size: "xs",
                        color: nO.A.colors.STATUS_WARNING,
                        "aria-label": eL.intl.string(eL.t.L99HQm),
                    }),
                }),
        ],
    });
}
var n9 = n(146901),
    n4 = n(827827);
let ie = [
        { duration: 15 * w.A.Millis.MINUTE, label: () => eL.intl.string(eL.t["8ot6gv"]) },
        { duration: w.A.Millis.HOUR, label: () => eL.intl.string(eL.t.UMWBZr) },
        { duration: 8 * w.A.Millis.HOUR, label: () => eL.intl.string(eL.t.EpAXPC) },
        { duration: w.A.Millis.DAY, label: () => eL.intl.string(eL.t["755t4q"]) },
        { duration: 3 * w.A.Millis.DAY, label: () => eL.intl.string(eL.t["f3/1ch"]) },
        { duration: void 0, label: () => eL.intl.string(eL.t["46dqJY"]) },
    ],
    it = "forever";
function ii(e) {
    let { status: t, currentStatus: n, description: l } = e,
        r = t !== tb.clD.ONLINE,
        a = (0, i.jsx)(i.Fragment, {
            children: ie.map((e) => {
                let { duration: l, label: r } = e;
                return (0, i.jsx)(
                    eM.Dr,
                    {
                        id: `${t}-${l}`,
                        label: r(),
                        action: () => (0, n4.A)({ nextStatus: t, prevStatus: n, durationMillis: l }),
                        dontCloseOnAction: !0,
                    },
                    l ?? it,
                );
            }),
        });
    return (0, i.jsx)(eM.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: r,
        label: (0, nc.MU)(t),
        subtext: l,
        iconLeft: () => (0, i.jsx)(eE.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, n4.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: r ? a : void 0,
    });
}
function il(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, n9._)(e);
    return "today" === t
        ? eL.intl.formatToPlainString(eL.t.ZxxHIO, { timeString: i })
        : eL.intl.formatToPlainString(eL.t["9OFjSe"], { dateString: n, timeString: i });
}
var ir = n(996988),
    ia = n(207634),
    is = n(47453);
function io(e) {
    let { currentUser: t, onClose: n, setPopoutRef: r, highlightBadge: s, openedAt: o, className: u } = e,
        m = __OVERLAY__,
        h = (0, t5.Ay)(t.id, void 0),
        { analyticsLocations: g } = (0, k.Ay)(P.A.USER_PROFILE_ACCOUNT_POPOUT),
        C = (0, t6.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 });
    (0, t2.A)(g, h, n2.R7.ACCOUNT_POPOUT);
    let { ref: x } = (0, eS.Ay)(),
        { isHoveringOrFocusing: v, isHovering: _ } = (0, tf.A)(x);
    (l.useEffect(() => {
        r?.(x.current);
    }, [x, r]),
        l.useEffect(
            () => (
                tH.A.setState({ isOpen: !0 }),
                () => tH.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1, shouldScrollToOrbsMenuItem: !1 })
            ),
            [],
        ));
    let y = (0, c.bG)([nj.A], () => nj.A.getStatus(t.id)),
        b = il(nh.CY.useSetting()),
        T = (0, c.bG)([nN.A], () => nN.A.hidePersonalInformation),
        S = (0, tU.kB)(),
        I = nh.Q_.useSetting(),
        j = (function (e) {
            let t = nh.CY.useSetting(),
                n = (0, tU.kB)(),
                l = nh.Jr.useSetting();
            function r(i) {
                let l = il(t);
                if (e === i && null != l) return l;
                switch (i) {
                    case tb.clD.DND:
                        return n ? eL.intl.string(eL.t.day5A6) : eL.intl.string(eL.t["tq/fMK"]);
                    case tb.clD.INVISIBLE:
                        return eL.intl.string(eL.t.zPc6Mc);
                    default:
                        return;
                }
            }
            let a = (0, i.jsx)(i.Fragment, {
                    children: ie.map((t) => {
                        let { duration: n, label: l } = t;
                        return (0, i.jsx)(
                            eM.Dr,
                            {
                                id: `${e}-${n}`,
                                label: l(),
                                action: () => {
                                    (0, tU.ES)(!0, n);
                                },
                                dontCloseOnAction: !0,
                            },
                            n ?? it,
                        );
                    }),
                }),
                s = ii({ status: tb.clD.ONLINE, currentStatus: e }),
                o = ii({ status: tb.clD.IDLE, currentStatus: e, description: r(tb.clD.IDLE) }),
                u = ii({ status: tb.clD.DND, currentStatus: e, description: r(tb.clD.DND) }),
                c = ii({ status: tb.clD.INVISIBLE, currentStatus: e, description: r(tb.clD.INVISIBLE) });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    s,
                    (0, i.jsx)(eM.bX, {}, "menu-separator-statuses"),
                    o,
                    u,
                    c,
                    n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(eM.bX, {}, "menu-separator-statuses"),
                                  (0, i.jsx)(
                                      eM.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: eL.intl.string(eL.t.gJRnwK),
                                          iconLeft: ex.BellSlashIcon,
                                          leadingAccessory: { type: "icon", icon: ex.BellSlashIcon },
                                          badge: { text: eL.intl.string(eL.t.ApAu9f) },
                                          subtext:
                                              null != l && "0" !== l
                                                  ? eL.intl.format(eL.t.BWD8fs, {
                                                        endTime: new Date(Number(l)).toLocaleString(
                                                            eL.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : eL.intl.string(eL.t["Br1q+x"]),
                                          action: () => {
                                              (0, tU.ES)(!n);
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
        })(y),
        N = (function (e) {
            let t = (0, c.bG)([nw.default], () => nw.default.getCurrentUser()),
                n = (0, c.bG)([nN.A], () => nN.A.hidePersonalInformation),
                l = (0, c.bG)([nL.A], () => (0, tV.M)(nL.A.theme)),
                { multiAccountUsers: r } = (0, nB.K)(),
                a = r.map((r) => {
                    let a = new nD.A(r),
                        s = a.id === t?.id,
                        o = r.tokenStatus === nF.U.INVALID,
                        u = n ? null : `#${a.discriminator}`;
                    return (0, i.jsx)(
                        eM.Dr,
                        {
                            id: a.id,
                            focusedClassName: nW.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: nW.ci,
                                    children: [
                                        (0, i.jsx)(f.eu, {
                                            src: a.getAvatarURL(void 0, 40),
                                            size: p._3.SIZE_24,
                                            "aria-label": r.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: nW.DD,
                                            children: [
                                                (0, i.jsx)(eP.E, {
                                                    className: nW.gE,
                                                    variant: "body-sm/normal",
                                                    children: nc.Ay.getUserTag(a, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !a.hasUniqueUsername() &&
                                                    (0, i.jsx)(eP.E, {
                                                        className: nW.df,
                                                        variant: "body-sm/normal",
                                                        children: u,
                                                    }),
                                            ],
                                        }),
                                        s &&
                                            (0, i.jsx)(nP.CircleCheckIcon, {
                                                size: "sm",
                                                color: t
                                                    ? nO.A.unsafe_rawColors.WHITE.css
                                                    : nO.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? nO.A.unsafe_rawColors.BRAND_500.css
                                                        : nO.A.unsafe_rawColors.WHITE.css,
                                                className: nW.s0,
                                            }),
                                        o &&
                                            (0, i.jsx)(nk.CircleErrorIcon, {
                                                color: nO.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? nO.A.unsafe_rawColors.BRAND_500.css
                                                        : nO.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: nW.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, nH.A)();
                                else {
                                    var n;
                                    (n = a.id) !== t?.id &&
                                        (nU.default.track(tb.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tb.JJy.USER_PROFILE },
                                        }),
                                        nG.Mx(n, void 0, nV.WX.MULTI_ACCOUNT_MENU));
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
                            (0, i.jsx)(eM.bX, {}),
                            (0, i.jsx)(eM.Dr, {
                                id: "manage-accounts",
                                label: eL.intl.string(eL.t.WbFpq4),
                                action: () => {
                                    (e?.(), (0, nH.A)());
                                },
                            }),
                        ],
                    }),
                ),
                a
            );
        })(n),
        R = (0, t3.A)({ analyticsLocations: g }),
        M = (0, tK.TW)(t),
        O = (0, L.d)({ location: "UserProfileAccountPopout" }),
        D = l.useRef(null),
        w = l.useRef(null),
        U = l.useRef(null),
        G = (0, tP.A)(h?.profileFrame?.skuId),
        F = (0, tO.A)(h?.profileFrame?.skuId);
    (0, tk.A)({ skuId: h?.profileFrame?.skuId, openedAt: o, context: C, analyticsLocations: g });
    let B = l.useRef((0, tH.A)((e) => e.shouldRenderTenureLevelUp)),
        H = l.useMemo(() => (0, tD.A)(), []),
        [V, W] = l.useState(() => tH.A.getState().shouldRenderTenureLevelUp);
    function z(e) {
        (n?.(), (0, t7.openUserProfileModal)({ customStatusPrompt: H, sourceAnalyticsLocations: g, ...C, ...e }));
    }
    l.useEffect(() => {
        let e = setTimeout(() => {
            W(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let K = h?.widgets != null && h.widgets.length > 0,
        Y = l.useCallback(() => {
            n();
        }, [n]),
        q = l.useCallback(() => {
            (R(), Y());
        }, [R, Y]),
        Q = t8.A.useConfig({ location: "UserProfileAccountPopout" }).enabled,
        $ = (0, ng.Hy)({ location: "UserProfileAccountPopout" }),
        X = (0, ej.FX)("UserProfileAccountPopout"),
        Z = (0, tH.A)((e) => e.shouldScrollToOrbsMenuItem),
        [J, ee] = (0, tw.kn)(
            [
                d.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE,
                Q ? d.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK : void 0,
            ].filter(nR.Vq),
            { groupName: void 0, bypassAutoDismiss: !0 },
        ),
        et = l.useId();
    return (0, i.jsx)(k.f5, {
        value: g,
        children: (0, i.jsx)(t6.of, {
            value: C,
            openedAt: o,
            fetchStartedAt: h?.fetchStartedAt,
            fetchEndedAt: h?.fetchEndedAt,
            isLoaded: h?.isLoaded,
            children: (0, i.jsxs)(ep.l, {
                ref: x,
                "aria-labelledby": et,
                className: a()(eD.jC, u),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(A.A, {
                        children: (0, i.jsx)(eh.H, { id: et, children: eL.intl.string(eL.t["5fWB8U"]) }),
                    }),
                    (0, i.jsxs)(eh.F, {
                        children: [
                            (0, i.jsxs)(nr.A, {
                                className: eD.BK,
                                user: t,
                                displayProfile: h,
                                themeType: ir.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: is.wx,
                                        children: [
                                            (0, i.jsx)(ne.A, { user: t, displayProfile: h, themeType: ir.d.POPOUT }),
                                            (0, i.jsx)(t9.A, {
                                                user: t,
                                                displayProfile: h,
                                                avatarSize: ia.T[ir.d.POPOUT].avatarSize,
                                                onOpenProfile: m ? void 0 : z,
                                            }),
                                            (0, i.jsx)(nf.A, {
                                                ref: D,
                                                user: t,
                                                themeType: ir.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: H,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(eg.Ip, {
                                        ref: U,
                                        className: eD.rf,
                                        style: { pointerEvents: V ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(nn.A, { userId: t.id }),
                                            (0, i.jsx)(na.Ay, {
                                                className: eD.eF,
                                                user: t,
                                                displayName: nM.Ay.getName(void 0, null, t),
                                                onClickName: m ? void 0 : z,
                                                displayNameTrailing: (0, i.jsx)(nm, { user: t, isVisible: v }),
                                                pronouns: h?.pronouns,
                                                trailing: (0, i.jsx)(t4.A, {
                                                    displayProfile: h,
                                                    themeType: ir.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != s ? (e) => e === s : void 0,
                                                    shouldGlowTenureBadge: B.current,
                                                }),
                                            }),
                                            (0, i.jsx)(nt.A, { isPremiumUser: M, onInteraction: n }),
                                            (0, i.jsx)(np.A, {
                                                userId: t.id,
                                                userBio: h?.bio,
                                                hidePersonalInformation: T,
                                                onClose: n,
                                            }),
                                            K &&
                                                (0, i.jsx)(nl.A, {
                                                    user: t,
                                                    widgets: h?.widgets,
                                                    onOpenUserProfileModal: z,
                                                }),
                                            (0, i.jsx)(ni.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: z,
                                                onClose: n,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: eD.T_,
                                                children: [
                                                    X &&
                                                        (0, i.jsx)(nr.A.Overlay, {
                                                            className: eD.g0,
                                                            children: (0, i.jsx)(eG, {
                                                                children: (0, i.jsx)(eZ, { onClose: n }),
                                                            }),
                                                        }),
                                                    (0, i.jsx)(nr.A.Overlay, {
                                                        className: eD.g0,
                                                        children: (0, i.jsxs)(eG, {
                                                            children: [
                                                                (0, i.jsx)(eU, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: eL.intl.string(eL.t.s5vZlQ),
                                                                    icon: eA.PencilIcon,
                                                                    trailing:
                                                                        null != J
                                                                            ? (0, i.jsx)("div", {
                                                                                  className: eD.IO,
                                                                                  "aria-hidden": !0,
                                                                                  children: (0, i.jsx)(eC.E, {
                                                                                      type: "new",
                                                                                      variant: "primary",
                                                                                  }),
                                                                              })
                                                                            : null,
                                                                    onClick: () => {
                                                                        (J ===
                                                                            d.M
                                                                                .DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE &&
                                                                            ee(n1.i.TAKE_ACTION),
                                                                            q());
                                                                    },
                                                                    ref: w,
                                                                }),
                                                                (0, i.jsx)(eU, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(n7, {}),
                                                                    sublabel: null != b && b,
                                                                    icon: () =>
                                                                        (0, i.jsx)(eE.nW, { status: y, size: 12 }),
                                                                    trailing:
                                                                        (S || y === tb.clD.DND) &&
                                                                        (0, i.jsx)(ex.BellSlashIcon, { size: "xxs" }),
                                                                    renderSubmenu: ef.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(ew, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: eD.hQ,
                                                                                  "aria-label": eL.intl.string(
                                                                                      eL.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: j,
                                                                              });
                                                                          },
                                                                    onClick: ef.Fr
                                                                        ? () => {
                                                                              (n(),
                                                                                  (0, E.mM)(
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
                                                                                                              eL.intl.string(
                                                                                                                  eL.t[
                                                                                                                      "3Uj+2p"
                                                                                                                  ],
                                                                                                              ),
                                                                                                          children: (0,
                                                                                                          i.jsx)(e_.W, {
                                                                                                              "data-menu-migrated":
                                                                                                                  !0,
                                                                                                              navId: "set-status-submenu-mobile-web",
                                                                                                              variant:
                                                                                                                  "fixed",
                                                                                                              "aria-label":
                                                                                                                  eL.intl.string(
                                                                                                                      eL
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
                                                                                                                  j,
                                                                                                          }),
                                                                                                      },
                                                                                                  );
                                                                                              }),
                                                                                          ),
                                                                                  ));
                                                                          }
                                                                        : void 0,
                                                                }),
                                                                O &&
                                                                    (0, i.jsx)(eU, {
                                                                        action: "PRESS_VIEW_BADGES",
                                                                        icon: ey.RibbonIcon,
                                                                        label: eL.intl.string(eL.t.l6w3Vj),
                                                                        onClick: () => {
                                                                            (n(),
                                                                                (0, eI.openBadgeDirectoryModal)({
                                                                                    viewingCurrentUserBadges: !0,
                                                                                }));
                                                                        },
                                                                    }),
                                                                (0, i.jsx)(tR, { onClose: n, popoutContainerRef: x }),
                                                                $ &&
                                                                    (0, i.jsx)(nI, {
                                                                        popoutContainerRef: x,
                                                                        scrollerRef: U,
                                                                        shouldScrollIntoView: Z,
                                                                        onCloseAccountPopout: n,
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(nr.A.Overlay, {
                                                        className: eD.g0,
                                                        children: (0, i.jsxs)(eG, {
                                                            children: [
                                                                (0, i.jsx)(eU, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eb.UserCircleIcon,
                                                                    label: eL.intl.string(eL.t.oMNyYN),
                                                                    onClick: () => {
                                                                        (n(), (0, nH.A)());
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(ew, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": eL.intl.string(eL.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: N,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    nu.p5 &&
                                                                    I &&
                                                                    (0, i.jsx)(eU, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eT.IdIcon,
                                                                        label: eL.intl.string(eL.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            ((0, nu.C)(t.id), n());
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
                                        !B.current &&
                                        (0, i.jsx)(tM.A, { skuId: h.profileEffect.skuId, isHovering: _ }),
                                    null != G && (0, i.jsx)(tL.A, { frame: G, fadeIn: F }),
                                ],
                            }),
                            (0, i.jsx)(n3, { targetElementRef: w, onClose: n }),
                            (0, i.jsx)(t0, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var iu = n(201805),
    ic = n(209932),
    id = n(655116),
    im = n(365958),
    ip = n(342296),
    ih = n(852712),
    ig = n(389960),
    iA = n(173660),
    iC = n(616356),
    iE = n(734057),
    ix = n(629016),
    iv = n(186111),
    i_ = n(754712),
    iy = n(495867),
    ib = n(967198),
    iT = n(485296),
    iS = n(486020),
    iI = n(188567),
    ij = n(536194),
    iN = n(253400),
    iR = n(994314),
    iM = n(485599),
    iO = n(116833);
function iP(e) {
    let t = "progress" === e.variant,
        n = t
            ? {
                  title: eL.intl.string(eL.t.uwDBSq),
                  body: eL.intl.formatToPlainString(eL.t.Mk5nzZ, { count: e.newBadgeCount }),
              }
            : { title: eL.intl.string(eL.t["5GD53o"]), body: eL.intl.string(eL.t["2Rb7tE"]) };
    return (0, i.jsx)(nz.A, {
        targetElementRef: e.targetElementRef,
        shouldShow: !0,
        position: "top",
        alignmentStrategy: "edge",
        align: "left",
        caretConfig: { align: "start" },
        size: "lg",
        graphic: {
            type: "dynamic",
            component: iO.DynamicGraphicComponent.BADGE_DIRECTORY_NUX,
            props: { hasProgress: t, badgeIconUrls: t ? e.badgeIconUrls : void 0 },
        },
        title: n.title,
        body: n.body,
        actions: [{ variant: "primary", text: eL.intl.string(eL.t.pHo9tZ), onClick: e.onPrimaryAction }],
        onRequestClose: e.onRequestClose,
    });
}
function ik(e) {
    let { variantProps: t, targetElementRef: n, markAsDismissed: l } = e;
    return (0, i.jsx)(iP, {
        ...t,
        onPrimaryAction: () => {
            (l(n1.i.TAKE_ACTION), (0, eI.openBadgeDirectoryModal)());
        },
        onRequestClose: () => l(n1.i.USER_DISMISS),
        targetElementRef: n,
    });
}
var iL = n(206248);
function iD(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: l, position: r, shouldShow: a = !0, children: s } = e,
        o = (0, e3.sw)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s,
            a && o
                ? (0, i.jsx)(iL.H, {
                      targetElementRef: t,
                      title: eL.intl.string(tS.default.Qn21R6),
                      body: eL.intl.string(tS.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: r,
                      caretConfig: { align: "center" },
                      action: {
                          text: eL.intl.string(eL.t.RzWDqY),
                          onClick: function () {
                              (n(n1.i.TAKE_ACTION), l());
                          },
                      },
                      onRequestClose: function () {
                          n(n1.i.USER_DISMISS);
                      },
                  })
                : null,
        ],
    });
}
var iw = n(379848),
    iU = n(626584),
    iG = n(757036),
    iF = n(591179),
    iB = n(531685),
    iH = n(259065),
    iV = n(842671),
    iW = n(78294);
let iz = new iU.A("DisplayNameStylesFlywheelCoachmark");
function iK(e) {
    let { markAsDismissed: t, targetElementRef: n, children: r } = e,
        { analyticsLocations: a } = (0, k.Ay)(),
        s = (0, l.useRef)(null),
        o = (0, c.bG)([iB.A], () => iB.A.isFocused()),
        u = (0, iG.L)(tq.PremiumTypes.TIER_2),
        d = (0, iF.X)("DisplayNameStylesFlywheelCoachmark"),
        m = (0, l.useCallback)(() => {
            t(n1.i.TAKE_ACTION);
            let e = nw.default.getCurrentUser();
            d && null != e
                ? (0, t7.openUserProfileModal)({
                      userId: e.id,
                      sourceAnalyticsLocations: a,
                      onModalOpen: () => {
                          (0, iH.L)({ analyticsLocations: a, stackingBehavior: "stack" });
                      },
                  })
                : (0, e2.openUserSettings)(e1.X.PROFILE_PANEL, { analyticsLocations: a }, () => {
                      (0, iH.L)({ analyticsLocations: a });
                  });
        }, [t, a, d]),
        f = (0, l.useCallback)(() => {
            t(n1.i.USER_DISMISS);
        }, [t]);
    (0, l.useEffect)(() => {
        o && s.current?.paused ? s.current?.play().catch(iz.error) : o || s.current?.pause();
    }, [o]);
    let p = u ? [eL.intl.string(iV.default.TyUdka)] : [eL.intl.string(iV.default.dluV0R)];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r,
            (0, i.jsx)(nz.A, {
                targetElementRef: n,
                shouldShow: !0,
                onRequestClose: f,
                align: "right",
                position: "top",
                caretConfig: { align: "center" },
                gradientColor: "nitro-pink",
                graphic: { type: "video", ref: s, src: iW.A, aspectRatio: "21/9", loop: !0 },
                size: "lg",
                title: eL.intl.string(iV.default.cYwrp8),
                body: p,
                actions: [{ text: eL.intl.string(eL.t["4P5I8V"]), variant: "primary", onClick: m }],
            }),
        ],
    });
}
var iY = n(45780),
    iq = n(696451),
    iQ = n(71393),
    i$ = n(685073),
    iX = n(73153);
let iZ = { lastSeenInfos: {} },
    iJ = iZ;
class i0 extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        iJ = e ?? iZ;
    }
    getState() {
        return iJ;
    }
    getGuildLastSeenInfo(e) {
        return iJ.lastSeenInfos[e] ?? null;
    }
}
let i1 = new i0(iX.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        iJ.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        iJ = iZ;
    },
});
var i2 = n(514661);
let i3 = new iU.A("GuildTagAvailableCoachmark");
function i6(e) {
    let t = (0, c.bG)([iQ.A], () => iQ.A.getGuild(e.guildId));
    function n(n) {
        (t?.profile?.tag != null &&
            iX.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n));
    }
    let { isAdopting: l, onAdoptTag: r, onEditProfile: a } = (0, i2.A)(t?.id ?? null, () => n(n1.i.TAKE_ACTION));
    if (null == t || !(0, i$.q0)(t))
        return (i3.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children);
    let s = [
        { text: eL.intl.string(eL.t.jwEaiX), loading: l, onClick: r, variant: "primary" },
        { text: eL.intl.string(eL.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(nz.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iO.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: eL.intl.formatToPlainString(eL.t["m/Tc3n"], { guildName: t.name }),
                body: eL.intl.string(eL.t.DrAXIr),
                actions: s,
                size: "md",
                onRequestClose: () => n(n1.i.USER_DISMISS),
            }),
        ],
    });
}
function i8(e) {
    let t = (0, c.bG)([iQ.A], () => iQ.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: l, onAdoptTag: r, onEditProfile: a } = (0, i2.A)(t?.id ?? null, () => n(n1.i.TAKE_ACTION));
    if (null == t || !(0, i$.q0)(t))
        return (i3.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children);
    let s = [
        { text: eL.intl.string(eL.t.jwEaiX), loading: l, onClick: r, variant: "primary" },
        { text: eL.intl.string(eL.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(nz.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iO.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: eL.intl.formatToPlainString(eL.t.VFqnyU, { guildName: t.name }),
                body: eL.intl.string(eL.t.DrAXIr),
                actions: s,
                size: "md",
                onRequestClose: () => n(n1.i.USER_DISMISS),
            }),
        ],
    });
}
var i5 = n(843010),
    i7 = n(764231),
    i9 = n(208223);
function i4(e) {
    let { groupName: t, targetElementRef: n } = e,
        l = tQ(),
        r = (0, c.bG)([tB.Ay], () => tB.Ay.useReducedMotion),
        a = (0, tH.A)((e) => e.isOpen),
        s = (0, i5.G)();
    return r || null == l || a || s
        ? null
        : (0, i.jsx)(iw.zJ, {
              contentType: d.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: r } = e;
                  return (0, i.jsx)(le, {
                      recentlyLeveledTenureBadge: l,
                      markAsDismissed: r,
                      targetElementRef: n,
                      shouldShow: t === d.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function le(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: r, shouldShow: a } = e,
        s = tq.sp.indexOf(t),
        o = (0, i9.I)(tq.sp[s > 0 ? s - 1 : s]).ambient,
        u = (0, l.useCallback)(() => {
            (n(n1.i.TAKE_ACTION),
                tH.A.setState({ shouldRenderTenureLevelUp: !0 }),
                iI._.dispatch(tb.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
        }, [n]),
        c = (0, l.useCallback)(() => {
            n(n1.i.USER_DISMISS);
        }, [n]),
        d = tq.VD[t],
        m = eL.intl.formatToPlainString(eL.t.ewkaVR, {
            timeMilestone: (0, i7.T)(d.id, d.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        f = [{ text: eL.intl.string(eL.t.RzWDqY), variant: "primary", onClick: u }];
    return (0, i.jsx)(nz.A, {
        targetElementRef: r,
        onRequestClose: c,
        shouldShow: a,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: eL.intl.string(eL.t.VoDxsV),
        body: m,
        actions: f,
    });
}
var lt = n(764014);
function ln(e) {
    let { targetElementRef: t } = e,
        n = (0, tH.A)((e) => e.isOpen),
        [l, r] = (0, tw.kn)(n ? [] : [d.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK], {
            groupName: n1.m.ACCOUNT_NAME_ZONE,
            bypassAutoDismiss: !0,
        });
    return l === d.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK
        ? (0, i.jsx)(nz.A, {
              targetElementRef: t,
              graphic: { type: "image", src: lt.A },
              position: "top",
              alignmentStrategy: "edge",
              align: "left",
              caretConfig: { align: "start" },
              title: eL.intl.string(eL.t["Q+dH5r"]),
              body: eL.intl.string(eL.t.YKJw4W),
              onRequestClose: () => r(n1.i.USER_DISMISS),
              actions: [
                  {
                      text: eL.intl.string(eL.t.dcOuei),
                      onClick: function () {
                          (r(n1.i.TAKE_ACTION),
                              tH.A.setState({ shouldScrollToOrbsMenuItem: !0 }),
                              nb.Ay.setUserOpenedWalletViaProfileDCF(!0),
                              iI._.dispatch(tb.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
                      },
                  },
              ],
          })
        : null;
}
function li(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, iu.c9)(),
        l = null != e.targetElementRef.current && t && n,
        [r, a] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, iY.G$)(d.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? ""),
                l = (0, c.bG)(
                    [iQ.A, nw.default, iq.Ay],
                    () => {
                        if (null === e) return !1;
                        let t = iQ.A.getGuild(e);
                        if (void 0 === t || !(0, i$.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                        let n = nw.default.getCurrentUser();
                        if (
                            void 0 === n ||
                            (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                        )
                            return !1;
                        let i = iq.Ay.getMember(e, n.id);
                        return null != i && !i.isPending;
                    },
                    [e],
                );
            return (0, tw.ww)(l && n && !i ? [d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? "null");
        })(e.guildId, { shouldShow: l }),
        [s, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                l = i?.identityGuildId ?? null,
                r = (0, c.bG)([i1], () => (null === l ? null : i1.getGuildLastSeenInfo(l))),
                a = (0, c.bG)([iQ.A], () => iQ.A.getGuild(l)?.profile?.tag),
                s = null != a && i?.identityGuildId === l && i?.tag === null,
                o = null != l && r?.tag === a,
                u = null !== l && s && !o;
            return (0, tw.Wl)(u && n ? d.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: l });
    return l
        ? r === d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(i8, {
                  guildId: e.guildId,
                  onDismiss: a,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : s === d.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(i6, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(i4, { groupName: n1.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        e.isOrbchievementsEnabled && (0, i.jsx)(ln, { targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(iw.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: n1.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: l } = t;
                                switch (n) {
                                    case d.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK:
                                        return (0, i.jsx)(iK, {
                                            markAsDismissed: l,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case d.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, i.jsx)(iD, {
                                            markAsDismissed: l,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: e5.p,
                                            children: e.children,
                                        });
                                    case d.M.BADGE_DIRECTORY_NUX_POPOVER:
                                        return (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                e.children,
                                                (0, i.jsx)(ik, {
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
var ll = n(348858),
    lr = n(615675),
    la = n(900797),
    ls = n(847374),
    lo = n(617354),
    lu = n(96020),
    lc = n(42473),
    ld = n(731854),
    lm = n(516171),
    lf = n(577755);
function lp(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: r,
            onClick: s,
            iconForeground: o,
            nameplate: u,
            shouldShowOutputDeviceChangedTooltip: c,
            dismissTooltips: d,
        } = e,
        m = t || n,
        {
            Component: f,
            play: p,
            events: { onMouseEnter: g, onMouseLeave: A },
        } = (0, ll.I)(m ? "undeafen" : "deafen"),
        C = n ? lr.HeadphonesDenyIcon : f,
        { name: E } = (0, em.x5)(ld.oh.AUDIO_OUTPUT),
        x = (0, lo.A)(t, n, r),
        { analyticsLocations: v } = (0, k.Ay)(P.A.AUDIO_OUTPUT_BUTTON),
        _ = l.useRef(null);
    return (
        l.useEffect(() => () => p(), [m, p]),
        (0, i.jsx)(k.f5, {
            value: v,
            children: (0, i.jsx)(h.Y, {
                targetElementRef: _,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        d(),
                        (0, i.jsx)(k.f5, {
                            value: v,
                            children: (0, i.jsx)(lu.A, {
                                onInteraction: (0, q.s)("AudioDeviceMenu", P.A.ACCOUNT),
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
                    let { onClick: l } = e,
                        { isShown: d } = t,
                        f = d ? la.ChevronSmallUpIcon : ls.ChevronSmallDownIcon;
                    return (0, i.jsxs)("div", {
                        ref: _,
                        className: a()(lm.Lh, { [lm.v8]: m, [lm.q6]: d }),
                        children: [
                            (0, i.jsx)(lc.A, {
                                "aria-checked": m,
                                "aria-label": eL.intl.string(eL.t.wjcRFX),
                                className: lm.eT,
                                disabled: r,
                                icon: (0, i.jsx)(C, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: m ? nO.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: m ? lf.o : void 0,
                                innerClassName: a()({ [lf.T]: n }),
                                onClick: s,
                                onContextMenu: l,
                                onMouseEnter: g,
                                onMouseLeave: A,
                                plated: null != u,
                                redGlow: m,
                                role: "switch",
                                tooltipText: x,
                            }),
                            (0, i.jsx)(lc.A, {
                                className: a()(lm.UT, { [lm.q6]: d }),
                                disabled: r,
                                icon: (0, i.jsx)(f, {
                                    className: lm.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: m ? nO.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: l,
                                onContextMenu: l,
                                plated: null != u,
                                redGlow: m,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? eL.intl.formatToPlainString(eL.t["f+DDY/"], { outputDeviceName: E })
                                    : void 0,
                                tooltipShouldShow: !d,
                                tooltipText: c
                                    ? eL.intl.format(eL.t["f+DDY/"], { outputDeviceName: E })
                                    : eL.intl.string(eL.t.aA4Vce),
                                "aria-label": c
                                    ? eL.intl.formatToPlainString(eL.t["f+DDY/"], { outputDeviceName: E })
                                    : eL.intl.string(eL.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var lh = n(523875),
    lg = n(666654),
    lA = n(993719);
let lC = {};
class lE extends c.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return lC[e] ?? !1;
    }
}
let lx = new lE(iX.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        lC[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        lC[t] = !1;
    },
});
var lv = n(362823),
    l_ = n(980923),
    ly = n(796262),
    lb = n(222176),
    lT = n(973324);
function lS(e) {
    let t,
        {
            selfMute: n,
            serverMute: r,
            suppress: s,
            awaitingRemote: o,
            iconForeground: u,
            onMouseEnter: d,
            onMouseLeave: m,
            onClick: f,
            nameplate: p,
            shouldShowSpeakingWhileMutedTooltip: g,
            shouldShowSpeakingWhilePTTTooltip: A,
            shouldShowInputDeviceChangedTooltip: C,
            shouldShowPTTJoinTooltip: E,
            dismissTooltips: x,
            speaking: v,
        } = e,
        _ = (0, c.bG)([i_.Ay], () => i_.Ay.getMode() === ld.TB.PUSH_TO_TALK),
        y = (0, c.bG)([i_.Ay], () => i_.Ay.getSettings().modeOptions.shortcut),
        b = (0, c.bG)([lx], () => lx.getIsTutorialActive(lv.v.MUTE_TUTORIAL)),
        T = (0, c.bG)([iy.A], () => null != iy.A.getChannelId()),
        { name: S } = (0, em.x5)(ld.oh.AUDIO_INPUT),
        { enabledInputProfiles: I } = (0, ih.d)({ location: "MicrophoneButton" }),
        j = l.useRef(null),
        N = n || s || r,
        R = (0, lh.L)(N ? "unmute" : "mute"),
        { analyticsLocations: M } = (0, k.Ay)(P.A.AUDIO_INPUT_BUTTON),
        { Component: O, events: L, play: D } = R,
        w = r || s ? lg.MicrophoneDenyIcon : O;
    l.useEffect(() => () => D(), [N, D]);
    let U = (0, l_.A)(n, r, s, o);
    t = g
        ? { tooltipType: "green_void_do_not_use", tooltipText: eL.intl.string(eL.t["29gnR4"]), tooltipForceOpen: !0 }
        : E || A
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: eL.intl.format(eL.t.c1qUOQ, { keybind: ts.dI(y).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: U };
    let G = _ && T,
        F = N ? nO.A.colors.ICON_VOICE_MUTED : "currentColor",
        B = l.useCallback(() => {
            (f(), b && lA.N(lv.v.MUTE_TUTORIAL));
        }, [f, b]);
    return (0, i.jsxs)(k.f5, {
        value: M,
        children: [
            (0, i.jsx)(h.Y, {
                targetElementRef: j,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        x(),
                        (0, i.jsx)(k.f5, {
                            value: M,
                            children: (0, i.jsx)(lu.A, {
                                onInteraction: (0, q.s)("AudioDeviceMenu", P.A.ACCOUNT),
                                onClose: t,
                                maybeRenderPTTCheckbox: !0,
                                renderInputProfiles: I.length > 0,
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
                    let { onClick: l } = e,
                        { isShown: r } = n,
                        s = r ? la.ChevronSmallUpIcon : ls.ChevronSmallDownIcon;
                    return (0, i.jsxs)("div", {
                        ref: j,
                        className: a()(lm.Lh, { [lm.v8]: N, [lm.q6]: r }),
                        children: [
                            (0, i.jsx)(lc.A, {
                                "aria-checked": N,
                                "aria-label": eL.intl.string(eL.t.w4m945),
                                className: lm.eT,
                                disabled: o,
                                icon: (0, i.jsx)(w, { size: "custom", width: 20, height: 20, color: F, className: u }),
                                onClick: B,
                                onContextMenu: l,
                                onMouseEnter: () => {
                                    (d(), L.onMouseEnter());
                                },
                                onMouseLeave: () => {
                                    (m(), L.onMouseLeave());
                                },
                                plated: null != p,
                                redGlow: N,
                                role: "switch",
                                ...t,
                                children: G ? (0, i.jsx)("div", { className: a()(lb.U, { [lb.z]: v }) }) : null,
                            }),
                            (0, i.jsx)(lc.A, {
                                "aria-label": C
                                    ? eL.intl.formatToPlainString(eL.t["18wnuD"], { inputDeviceName: S })
                                    : eL.intl.string(eL.t.fRzCbB),
                                className: a()(lm.UT, { [lm.q6]: r }),
                                disabled: o,
                                icon: (0, i.jsx)(s, {
                                    className: lm.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: F,
                                }),
                                onClick: l,
                                onContextMenu: l,
                                onMouseEnter: d,
                                onMouseLeave: m,
                                plated: null != p,
                                redGlow: N,
                                tooltipType: C ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: C,
                                tooltipPositionKey: C
                                    ? eL.intl.formatToPlainString(eL.t["18wnuD"], { inputDeviceName: S })
                                    : void 0,
                                tooltipShouldShow: !r,
                                tooltipText: C
                                    ? eL.intl.format(eL.t["18wnuD"], { inputDeviceName: S })
                                    : eL.intl.string(eL.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(nz.A, {
                targetElementRef: j,
                shouldShow: b,
                graphic: { type: "image", src: lT.A },
                onRequestClose: () => {
                    lA.N(lv.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: eL.intl.string(ly.default.VG4zAf),
                body: eL.intl.string(ly.default["8VIRzR"]),
            }),
        ],
    });
}
var lI = n(935399),
    lj = n(505312),
    lN = n(848847),
    lR = n(975807),
    lM = n(425565),
    lO = n(321671);
function lP(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        r = l.useMemo(
            () => [
                {
                    text: eL.intl.string(lO.default["j4n5/K"]),
                    variant: "primary",
                    onClick: () => {
                        ((0, lR.A)(lM.C), t(n1.i.TAKE_ACTION));
                    },
                },
            ],
            [t],
        ),
        a = l.useCallback(() => {
            t(n1.i.USER_DISMISS);
        }, [t]);
    return (0, i.jsx)(nz.A, {
        targetElementRef: n,
        size: "video",
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/147b33df1db170b53e140d7ad45552731aa0b9b16b7a7358cb9916634167ee02.png",
            aspectRatio: "16/9",
        },
        title: eL.intl.string(lO.default.tmst3F),
        body: eL.intl.string(lO.default.sJHQqC),
        position: "top",
        caretConfig: { align: "end" },
        actions: r,
        onRequestClose: a,
    });
}
function lk(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        { analyticsLocations: l } = (0, k.Ay)(P.A.HOLIDAY_COACHMARK);
    return (0, i.jsx)(nz.A, {
        targetElementRef: n,
        align: "center",
        position: "top",
        caretConfig: { align: "end" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/f5c1292fad8b7f3e1381e1a235d5f9ce22d791176d5f2fbd4d3dc461d1f895c0.png",
        },
        title: eL.intl.string(eL.t.Mjs8KR),
        body: eL.intl.string(eL.t.U0INks),
        actions: [
            {
                text: eL.intl.string(eL.t.NENZhS),
                onClick: () => {
                    ((0, e2.openUserSettings)(e1.X.NOTIFICATION_HOLIDAY_SOUNDPACK, { analyticsLocations: l }),
                        t(n1.i.TAKE_ACTION));
                },
            },
        ],
        gradientColor: "purple",
        onRequestClose: () => t(n1.i.USER_DISMISS),
    });
}
var lL = n(88001),
    lD = n(107198),
    lw = n(438705);
function lU(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: r } = e,
        a = l.useCallback(() => {
            (r(), (0, e2.openUserSettings)(e1.X.SUBSCRIPTIONS_PANEL));
        }, [r]);
    return (0, i.jsx)(nz.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: lw },
        shouldShow: n,
        title: eL.intl.format(lD.default.bx8sR9, { premiumGroupProductName: (0, lL.DP)() }),
        body: eL.intl.format(lD.default.Pw4OFZ, { premiumGroupProductName: (0, lL.DP)() }),
        onRequestClose: r,
        actions: [{ text: eL.intl.string(lD.default.DD26QR), onClick: a }],
    });
}
var lG = n(873298),
    lF = n(840387);
function lB(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        r = (0, lF.Z)(),
        a = nh.KP.useSetting(),
        s = r && a !== lG.KP.FRIENDS_AND_ALL_GUILDS,
        o = l.useCallback(() => {
            (t(n1.i.TAKE_ACTION), (0, e2.openUserSettings)(e1.X.PROFILE_PRIVACY_CATEGORY));
        }, [t]),
        u = l.useCallback(() => {
            t(n1.i.USER_DISMISS);
        }, [t]),
        c = s
            ? a === lG.KP.FRIENDS_ONLY
                ? eL.intl.string(eL.t["/hogEy"])
                : eL.intl.string(eL.t["6hEfm1"])
            : eL.intl.string(eL.t.bnNxW1);
    return (0, i.jsx)(nz.A, {
        targetElementRef: n,
        shouldShow: !0,
        onRequestClose: u,
        align: "center",
        position: "top",
        caretConfig: { align: "end" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/6127c744cb2822ba2b138271130d9493e2579c126af2ee58921b6f988c6a46d6.svg",
        },
        title: eL.intl.string(eL.t.Ve4nS1),
        body: c,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: eL.intl.string(eL.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
var lH = n(415443);
function lV(e) {
    let t,
        n,
        {
            webBuildOverride: r,
            onClick: a,
            onContextMenu: s,
            dismissibleContents: o,
            iconForeground: u,
            nameplate: c,
        } = e,
        m = l.useRef(null),
        [f, p] = l.useState(!1);
    (0, lI.Ay)(() => {
        function e() {
            return p(!0);
        }
        return (
            iI._.subscribe(tb.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                iI._.unsubscribe(tb.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let h = l.useCallback(() => {
            (p(!1), a());
        }, [a]),
        g = ec.A.coachmarkDismissibleContent;
    if (null != r) {
        let e = (0, lH.A)("1793947258351", !0);
        t =
            null != e
                ? eL.intl.formatToPlainString(eL.t.wve4kg, { webBuildOverride: r.id, builtAt: e })
                : eL.intl.formatToPlainString(eL.t.Gzh6ZP, { webBuildOverride: r.id });
    } else t = eL.intl.string(eL.t.cduTBL);
    let A = tt.SettingsIcon,
        C = (0, lj.w)();
    return (
        (A = null != r ? lN.SettingsInfoIcon : C.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(lc.A, {
                    ref: m,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: h,
                    onContextMenu: s,
                    "aria-label": eL.intl.string(eL.t.cduTBL),
                    icon: (0, i.jsx)(A, { size: "refresh_sm", color: "currentColor", className: u }),
                    ...C.events,
                    plated: null != c,
                }),
                (0, i.jsx)(lU, { targetElementRef: m, shouldShow: f, onDismiss: () => p(!1) }),
                (0, i.jsx)(iw.Ay, {
                    contentTypes: o,
                    groupName: n1.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === d.M.TINY_BRONCO && null != I.hm
                            ? (0, i.jsx)(l.Suspense, {
                                  fallback: null,
                                  children: (0, i.jsx)(I.hm, { markAsDismissed: n, targetElementRef: m }),
                              })
                            : t === d.M.PRIVATE_PROFILE_COACHMARK
                              ? (0, i.jsx)(lB, { markAsDismissed: n, targetElementRef: m })
                              : t === d.M.GIFT_CARDS_MARKETING_COACHMARK
                                ? (0, i.jsx)(lP, { markAsDismissed: n, targetElementRef: m })
                                : null != g && t === g
                                  ? (0, i.jsx)(lk, { markAsDismissed: n, targetElementRef: m })
                                  : null;
                    },
                }),
            ],
        })
    );
}
var lW = n(358285);
let lz = iN.Ay.getEnableHardwareAcceleration() ? f.Js : f.eu,
    lK = 2.5 * w.A.Millis.SECOND,
    lY = 2 * w.A.Millis.MINUTE,
    lq = 5 * w.A.Millis.SECOND;
function lQ(e) {
    let {
            ref: t,
            speaking: n,
            playingSoundboard: r,
            voiceDb: s = -1 / 0,
            streaming: o,
            currentUser: u,
            status: c,
            handleClick: d,
            handleMouseLeave: m,
            renderNameTag: f,
            nameplate: A,
            avatarDecoration: C,
            "data-jump-section": E,
        } = e,
        x = l.useRef(null),
        _ = t ?? x,
        y = (0, iS.F_)({ avatarDecoration: C, size: (0, $.Te)(p._3.SIZE_32) }),
        T = (0, en.A)(),
        {
            updateOpenPopoutRef: S,
            highlightBadge: I,
            setHighlightBadge: j,
        } = (function () {
            let e = l.useRef(null),
                t = l.useCallback((t) => {
                    e.current = () => {
                        (t.onMouseDown(), t.onClick());
                    };
                }, []),
                [n, i] = l.useState(),
                [r, a] = l.useState(!1);
            return (
                (0, b.A)(() => a(!0), 750),
                l.useEffect(() => {
                    function t(t) {
                        let { highlightBadge: n } = t;
                        (null != n && i(n), e.current?.());
                    }
                    return (
                        iI._.subscribe(tb.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            iI._.unsubscribe(tb.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: r ? n : void 0, setHighlightBadge: i }
            );
        })(),
        N = (0, Z.K)(A);
    return null == u
        ? null
        : (0, i.jsx)(v.A, {
              object: tb.ZSU.AVATAR,
              children: (0, i.jsx)(ip.A, {
                  user: u,
                  targetElementRef: _,
                  clickTrap: !0,
                  preload: () =>
                      (0, im.A)(u.id, u.getAvatarURL(void 0, ip.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: l } = e;
                      return (0, i.jsx)(io, {
                          currentUser: u,
                          highlightBadge: I,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: l,
                          className: lW.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: h.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      (m(), j(void 0));
                  },
                  children: (e) => {
                      S(e);
                      let { onMouseEnter: t, onMouseDown: l, ...m } = e;
                      return (0, i.jsxs)("div", {
                          ref: _,
                          style: N,
                          onMouseEnter: t,
                          onMouseDown: l,
                          onClick: (t) => {
                              (e.onClick?.(t), d?.(t));
                          },
                          className: a()(lW.Q9, { [lW.ZQ]: null != A }),
                          children: [
                              (0, i.jsx)(g.D, {
                                  ...m,
                                  onClick: (t) => {
                                      (t.stopPropagation(), e.onClick?.(t), d?.(t));
                                  },
                                  "aria-label": eL.intl.string(eL.t["5fWB8U"]),
                                  focusProps: { ringTarget: _ },
                                  className: lW.$n,
                                  "data-jump-section": E,
                              }),
                              (0, i.jsx)(lz, {
                                  size: p._3.SIZE_32,
                                  src: u.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: y,
                                  status: o ? tb.clD.STREAMING : c,
                                  voiceStatus: (0, p.n$)(n, r),
                                  voiceDb: s,
                                  className: lW.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: lW.oM, children: f(T) }),
                          ],
                      });
                  },
              }),
          });
}
class l$ extends l.PureComponent {
    speakingWhileMutedTooltipTimeout = new m.Ep();
    lastSpeakingWhileMutedNotificationTime = void 0;
    state = { hovered: !1, shouldShowNametagTooltip: !1, shouldShowSpeakingWhileMutedTooltip: !1, hoveringOnMute: !1 };
    containerRef = l.createRef();
    avatarWithPopoutRef = l.createRef();
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, occluded: n } = e,
            { speakingWhileMuted: i, occluded: l } = this.props;
        (l !== n && this.handleOccludedChanged(), i !== t && this.handleSpeakingWhileMutedChanged());
    }
    componentWillUnmount() {
        this.speakingWhileMutedTooltipTimeout.stop();
    }
    handleToggleSelfMute = () => {
        let { serverMute: e, suppress: t, selfMute: n } = this.props;
        ((0, K.A)(e, t, tb.JJy.ACCOUNT_PANEL), (0, Y.XJ)(P.A.ACCOUNT, Y.OP.MIC, n));
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        ((0, z.A)(e, tb.JJy.ACCOUNT_PANEL), (0, Y.XJ)(P.A.ACCOUNT, Y.OP.DEAFEN, !t));
    };
    handleOpenAccountSettings = () => {
        (this.dismissTooltips(),
            iy.A.isConnected() ? (0, e2.openUserSettings)(e1.X.VOICE_AND_VIDEO_PANEL) : (0, e2.openUserSettings)());
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, x.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e(578667),
                    n.e(71866),
                    n.e(891473),
                    n.e(412117),
                    n.e(263406),
                    n.e(1955),
                    n.e(341161),
                    n.e(410526),
                    n.e(202985),
                    n.e(603619),
                    n.e(175927),
                    n.e(470126),
                    n.e(149697),
                    n.e(128804),
                    n.e(60882),
                    n.e(71151),
                    n.e(227853),
                    n.e(286615),
                    n.e(735042),
                    n.e(311541),
                    n.e(274227),
                    n.e(870088),
                    n.e(300641),
                    n.e(571163),
                    n.e(586662),
                    n.e(831377),
                    n.e(709976),
                    n.e(860596),
                    n.e(279774),
                    n.e(763945),
                    n.e(261204),
                    n.e(686731),
                    n.e(807432),
                    n.e(873532),
                    n.e(590088),
                    n.e(807003),
                    n.e(46083),
                    n.e(152133),
                    n.e(747802),
                    n.e(626353),
                    n.e(71169),
                    n.e(906470),
                    n.e(736663),
                    n.e(419121),
                    n.e(489020),
                    n.e(919789),
                    n.e(669130),
                    n.e(802890),
                    n.e(82937),
                    n.e(987221),
                    n.e(157064),
                    n.e(156957),
                    n.e(918786),
                    n.e(701335),
                    n.e(257935),
                    n.e(724086),
                    n.e(358937),
                    n.e(448738),
                    n.e(206189),
                    n.e(804439),
                    n.e(84978),
                    n.e(894292),
                    n.e(153302),
                    n.e(88683),
                    n.e(694414),
                    n.e(923981),
                    n.e(750370),
                    n.e(972281),
                    n.e(307107),
                    n.e(896622),
                    n.e(466592),
                    n.e(73946),
                    n.e(228271),
                    n.e(387970),
                    n.e(847445),
                    n.e(547510),
                    n.e(966366),
                    n.e(983513),
                    n.e(76928),
                    n.e(699250),
                    n.e(528311),
                    n.e(411938),
                    n.e(653383),
                    n.e(277838),
                    n.e(9796),
                    n.e(952068),
                    n.e(768289),
                    n.e(772565),
                    n.e(758531),
                    n.e(533781),
                    n.e(328276),
                    n.e(592e3),
                    n.e(524434),
                    n.e(882304),
                    n.e(984),
                    n.e(226229),
                    n.e(118994),
                    n.e(516497),
                    n.e(24774),
                    n.e(326794),
                    n.e(670870),
                    n.e(684231),
                    n.e(570690),
                    n.e(886631),
                    n.e(435860),
                    n.e(426782),
                    n.e(406322),
                    n.e(942571),
                    n.e(464759),
                    n.e(763343),
                    n.e(194704),
                    n.e(231541),
                    n.e(274461),
                    n.e(830560),
                    n.e(384054),
                    n.e(267387),
                    n.e(816348),
                    n.e(165291),
                    n.e(109383),
                    n.e(818291),
                    n.e(243794),
                    n.e(519435),
                    n.e(10985),
                    n.e(171206),
                    n.e(546547),
                    n.e(102075),
                    n.e(828178),
                    n.e(45036),
                    n.e(974119),
                    n.e(434683),
                    n.e(572388),
                    n.e(505928),
                    n.e(752657),
                    n.e(747973),
                    n.e(314001),
                    n.e(885251),
                    n.e(857871),
                    n.e(529366),
                    n.e(990185),
                    n.e(752924),
                    n.e(849162),
                    n.e(660201),
                    n.e(770925),
                    n.e(179301),
                    n.e(918347),
                    n.e(102247),
                    n.e(689521),
                    n.e(237403),
                    n.e(10886),
                    n.e(84993),
                    n.e(592268),
                    n.e(374962),
                    n.e(439120),
                    n.e(736919),
                    n.e(440636),
                    n.e(568960),
                    n.e(459257),
                    n.e(790484),
                    n.e(339715),
                    n.e(985301),
                    n.e(981059),
                    n.e(631323),
                    n.e(464452),
                    n.e(243852),
                    n.e(714144),
                    n.e(816027),
                    n.e(458855),
                    n.e(305161),
                    n.e(845486),
                    n.e(401425),
                    n.e(120561),
                    n.e(880186),
                    n.e(58353),
                    n.e(17256),
                    n.e(377016),
                    n.e(226867),
                    n.e(754366),
                    n.e(657682),
                    n.e(600336),
                    n.e(535413),
                    n.e(172413),
                    n.e(145006),
                    n.e(998670),
                    n.e(239502),
                    n.e(38956),
                    n.e(302458),
                    n.e(556436),
                    n.e(256172),
                    n.e(102137),
                    n.e(375971),
                    n.e(655282),
                    n.e(792818),
                    n.e(861161),
                    n.e(579958),
                    n.e(27612),
                    n.e(669340),
                    n.e(657266),
                    n.e(622074),
                    n.e(587308),
                    n.e(903758),
                    n.e(768071),
                    n.e(96922),
                    n.e(292699),
                    n.e(373738),
                    n.e(531521),
                    n.e(786830),
                    n.e(446860),
                    n.e(28636),
                    n.e(24312),
                    n.e(622936),
                    n.e(216947),
                    n.e(301850),
                    n.e(926787),
                    n.e(870423),
                    n.e(727139),
                    n.e(993562),
                    n.e(464838),
                    n.e(274698),
                    n.e(40074),
                    n.e(733814),
                    n.e(726399),
                    n.e(377476),
                    n.e(597622),
                    n.e(746309),
                    n.e(883221),
                    n.e(97585),
                    n.e(305721),
                    n.e(921528),
                    n.e(214566),
                    n.e(109917),
                    n.e(727797),
                    n.e(368991),
                    n.e(688508),
                    n.e(422037),
                    n.e(377109),
                    n.e(656997),
                    n.e(828849),
                    n.e(74886),
                    n.e(713273),
                    n.e(944121),
                    n.e(245851),
                    n.e(459397),
                    n.e(652014),
                    n.e(643363),
                    n.e(980902),
                    n.e(157771),
                    n.e(648197),
                    n.e(43853),
                    n.e(102170),
                    n.e(401071),
                    n.e(721654),
                    n.e(283543),
                    n.e(715958),
                    n.e(560042),
                    n.e(824992),
                    n.e(110299),
                    n.e(860350),
                    n.e(769590),
                    n.e(580305),
                    n.e(161411),
                    n.e(966268),
                    n.e(25839),
                    n.e(683084),
                    n.e(927808),
                    n.e(771149),
                    n.e(991119),
                    n.e(389321),
                    n.e(809321),
                    n.e(365166),
                    n.e(716860),
                    n.e(888213),
                    n.e(150183),
                    n.e(394692),
                    n.e(272788),
                    n.e(91003),
                    n.e(3445),
                    n.e(465071),
                    n.e(595944),
                    n.e(45374),
                    n.e(10058),
                    n.e(859516),
                    n.e(684901),
                    n.e(30482),
                    n.e(257182),
                    n.e(465650),
                    n.e(49571),
                    n.e(434352),
                    n.e(599135),
                    n.e(942186),
                    n.e(242967),
                    n.e(557729),
                    n.e(463143),
                    n.e(363750),
                    n.e(28420),
                    n.e(477550),
                    n.e(71930),
                    n.e(97191),
                    n.e(385504),
                    n.e(310994),
                    n.e(770720),
                    n.e(195830),
                    n.e(338218),
                    n.e(846582),
                    n.e(589752),
                    n.e(53719),
                    n.e(992535),
                    n.e(737132),
                    n.e(207998),
                    n.e(442781),
                    n.e(817298),
                    n.e(311913),
                    n.e(868052),
                    n.e(106980),
                    n.e(974969),
                    n.e(310933),
                    n.e(114386),
                    n.e(65764),
                    n.e(29489),
                    n.e(269714),
                    n.e(445380),
                    n.e(212037),
                    n.e(846201),
                    n.e(213217),
                    n.e(680015),
                    n.e(585005),
                    n.e(684986),
                    n.e(527302),
                    n.e(423538),
                    n.e(700572),
                    n.e(14775),
                    n.e(915213),
                    n.e(530166),
                    n.e(594045),
                    n.e(324469),
                    n.e(70379),
                    n.e(417333),
                    n.e(127962),
                    n.e(503376),
                    n.e(494822),
                    n.e(926132),
                    n.e(834552),
                    n.e(993103),
                    n.e(863232),
                    n.e(708757),
                    n.e(295507),
                    n.e(332447),
                    n.e(959880),
                    n.e(174016),
                    n.e(22921),
                    n.e(910471),
                    n.e(11301),
                    n.e(430858),
                    n.e(861060),
                    n.e(364827),
                    n.e(77333),
                    n.e(626565),
                    n.e(257980),
                    n.e(960235),
                    n.e(585968),
                    n.e(486137),
                    n.e(80421),
                    n.e(206027),
                    n.e(393471),
                    n.e(177641),
                    n.e(198329),
                    n.e(678157),
                    n.e(942374),
                    n.e(223219),
                    n.e(130795),
                    n.e(10866),
                    n.e(313537),
                    n.e(40291),
                    n.e(733115),
                    n.e(397270),
                    n.e(406222),
                    n.e(761597),
                    n.e(373122),
                    n.e(649408),
                    n.e(221856),
                    n.e(186212),
                    n.e(755936),
                    n.e(147662),
                    n.e(316344),
                    n.e(396705),
                    n.e(274501),
                    n.e(544571),
                    n.e(692990),
                    n.e(714496),
                    n.e(305834),
                    n.e(393336),
                    n.e(745959),
                    n.e(858529),
                    n.e(481987),
                    n.e(595653),
                    n.e(958038),
                    n.e(532039),
                    n.e(719466),
                    n.e(885553),
                    n.e(576909),
                    n.e(830228),
                    n.e(27355),
                    n.e(953665),
                    n.e(406174),
                    n.e(126437),
                    n.e(481647),
                    n.e(713708),
                    n.e(776273),
                    n.e(749248),
                    n.e(704434),
                    n.e(900361),
                    n.e(391763),
                    n.e(492762),
                    n.e(885533),
                    n.e(282833),
                    n.e(393766),
                    n.e(21921),
                    n.e(811310),
                    n.e(258398),
                    n.e(844780),
                    n.e(571210),
                    n.e(572963),
                    n.e(676418),
                    n.e(70833),
                    n.e(897073),
                    n.e(648365),
                    n.e(188689),
                    n.e(161275),
                    n.e(166495),
                    n.e(761253),
                    n.e(521930),
                    n.e(88342),
                    n.e(49782),
                    n.e(570849),
                    n.e(45072),
                    n.e(942724),
                    n.e(139970),
                    n.e(173764),
                    n.e(940258),
                    n.e(830221),
                    n.e(858164),
                    n.e(357688),
                    n.e(308555),
                    n.e(323624),
                    n.e(977547),
                    n.e(554241),
                    n.e(311802),
                    n.e(724303),
                    n.e(508371),
                    n.e(698965),
                    n.e(885434),
                    n.e(53102),
                    n.e(586127),
                    n.e(41250),
                    n.e(179049),
                    n.e(918024),
                    n.e(132737),
                    n.e(146070),
                    n.e(344502),
                    n.e(88599),
                    n.e(836863),
                    n.e(68904),
                    n.e(780262),
                    n.e(382563),
                    n.e(658216),
                    n.e(854622),
                    n.e(629482),
                    n.e(590365),
                    n.e(989088),
                    n.e(37977),
                    n.e(136149),
                    n.e(470068),
                    n.e(354044),
                    n.e(817989),
                    n.e(437065),
                    n.e(891585),
                    n.e(720590),
                    n.e(709640),
                    n.e(235313),
                    n.e(147626),
                    n.e(613867),
                    n.e(952548),
                    n.e(689393),
                    n.e(893917),
                    n.e(727779),
                    n.e(412743),
                    n.e(585503),
                    n.e(203589),
                    n.e(636373),
                    n.e(382465),
                    n.e(294857),
                    n.e(230664),
                    n.e(15481),
                    n.e(179745),
                    n.e(655708),
                    n.e(676156),
                    n.e(889638),
                    n.e(668802),
                    n.e(631358),
                    n.e(459414),
                    n.e(553984),
                    n.e(335395),
                    n.e(142867),
                    n.e(884601),
                    n.e(782969),
                    n.e(882777),
                    n.e(945413),
                    n.e(146844),
                    n.e(402026),
                    n.e(163235),
                    n.e(776766),
                    n.e(632756),
                    n.e(564850),
                    n.e(504370),
                    n.e(941040),
                    n.e(124791),
                    n.e(35771),
                    n.e(648344),
                    n.e(170104),
                    n.e(491793),
                    n.e(620656),
                    n.e(902564),
                    n.e(495786),
                    n.e(428967),
                    n.e(275716),
                    n.e(704727),
                    n.e(782791),
                    n.e(538345),
                    n.e(214285),
                    n.e(248330),
                    n.e(373004),
                    n.e(803332),
                    n.e(129080),
                    n.e(238232),
                    n.e(938149),
                    n.e(408362),
                    n.e(741678),
                    n.e(608032),
                    n.e(852617),
                    n.e(477970),
                    n.e(256769),
                    n.e(102698),
                    n.e(125964),
                    n.e(737021),
                    n.e(775951),
                    n.e(254506),
                    n.e(874342),
                    n.e(138830),
                    n.e(757901),
                    n.e(976516),
                    n.e(400501),
                    n.e(985794),
                    n.e(596286),
                    n.e(695358),
                    n.e(767837),
                    n.e(579245),
                    n.e(473384),
                    n.e(432209),
                    n.e(996868),
                    n.e(368062),
                    n.e(859991),
                    n.e(667092),
                    n.e(225575),
                    n.e(603998),
                    n.e(823300),
                    n.e(709371),
                    n.e(787139),
                    n.e(466718),
                    n.e(330724),
                    n.e(599719),
                    n.e(136204),
                    n.e(531741),
                    n.e(390213),
                    n.e(736926),
                    n.e(939171),
                    n.e(987478),
                    n.e(465157),
                    n.e(490010),
                    n.e(252229),
                    n.e(523276),
                    n.e(77473),
                    n.e(550033),
                    n.e(916758),
                    n.e(660249),
                    n.e(440142),
                    n.e(691671),
                    n.e(812042),
                    n.e(612287),
                    n.e(547801),
                    n.e(720064),
                    n.e(729963),
                    n.e(733416),
                    n.e(793438),
                    n.e(830938),
                    n.e(692513),
                    n.e(538513),
                    n.e(305557),
                    n.e(321640),
                    n.e(938579),
                    n.e(652212),
                    n.e(919726),
                    n.e(36227),
                    n.e(104202),
                    n.e(975933),
                    n.e(325047),
                    n.e(907424),
                    n.e(460773),
                    n.e(93907),
                    n.e(944801),
                    n.e(50097),
                    n.e(229666),
                    n.e(188545),
                    n.e(92295),
                    n.e(208018),
                    n.e(589916),
                    n.e(848625),
                    n.e(458273),
                    n.e(968763),
                    n.e(163069),
                    n.e(883952),
                    n.e(26001),
                    n.e(159957),
                    n.e(838056),
                    n.e(414591),
                    n.e(652111),
                    n.e(144179),
                    n.e(838090),
                    n.e(536973),
                    n.e(590814),
                    n.e(896804),
                    n.e(708536),
                    n.e(298107),
                    n.e(411353),
                    n.e(258709),
                    n.e(508829),
                    n.e(526778),
                    n.e(603303),
                    n.e(781202),
                    n.e(203930),
                    n.e(935948),
                    n.e(903663),
                    n.e(741111),
                    n.e(954289),
                    n.e(295998),
                    n.e(819193),
                    n.e(480945),
                    n.e(276297),
                    n.e(365011),
                    n.e(780611),
                    n.e(201243),
                    n.e(950535),
                    n.e(215920),
                    n.e(246969),
                    n.e(269786),
                    n.e(688138),
                    n.e(228850),
                    n.e(566976),
                    n.e(437961),
                    n.e(908081),
                    n.e(720045),
                    n.e(914248),
                    n.e(458886),
                    n.e(951811),
                    n.e(922606),
                    n.e(527687),
                    n.e(646284),
                    n.e(557830),
                    n.e(904774),
                    n.e(78601),
                    n.e(726294),
                    n.e(829260),
                    n.e(342234),
                    n.e(81189),
                    n.e(200203),
                    n.e(965061),
                    n.e(377804),
                    n.e(559754),
                    n.e(780407),
                    n.e(168768),
                    n.e(624643),
                    n.e(574678),
                    n.e(124647),
                    n.e(15428),
                    n.e(151081),
                    n.e(462010),
                    n.e(781949),
                    n.e(66580),
                    n.e(504098),
                    n.e(78465),
                    n.e(746479),
                    n.e(872893),
                    n.e(127659),
                    n.e(525499),
                    n.e(377663),
                    n.e(557940),
                    n.e(341701),
                    n.e(9205),
                    n.e(42834),
                    n.e(144989),
                    n.e(604172),
                    n.e(468083),
                    n.e(548730),
                    n.e(39689),
                    n.e(871467),
                    n.e(788976),
                    n.e(992478),
                    n.e(276814),
                    n.e(368684),
                    n.e(568881),
                    n.e(51892),
                    n.e(763096),
                    n.e(841838),
                    n.e(830351),
                    n.e(396854),
                    n.e(225612),
                    n.e(350949),
                    n.e(472789),
                    n.e(967874),
                    n.e(137937),
                    n.e(760989),
                    n.e(79216),
                    n.e(803191),
                    n.e(369501),
                    n.e(303710),
                    n.e(545006),
                    n.e(419360),
                    n.e(528384),
                    n.e(949013),
                    n.e(202669),
                    n.e(886913),
                    n.e(860003),
                    n.e(396325),
                    n.e(808979),
                    n.e(141049),
                    n.e(749736),
                    n.e(14020),
                    n.e(587732),
                    n.e(645830),
                    n.e(512162),
                    n.e(733771),
                    n.e(866008),
                    n.e(531158),
                    n.e(946039),
                    n.e(995602),
                    n.e(850298),
                    n.e(548738),
                    n.e(578090),
                    n.e(896480),
                    n.e(569468),
                    n.e(966598),
                    n.e(146149),
                    n.e(360536),
                    n.e(986300),
                    n.e(686774),
                    n.e(138733),
                    n.e(228011),
                    n.e(759174),
                    n.e(175284),
                    n.e(886492),
                    n.e(576415),
                    n.e(983947),
                    n.e(944727),
                    n.e(774542),
                    n.e(705871),
                    n.e(527462),
                    n.e(501888),
                    n.e(186546),
                    n.e(960816),
                    n.e(168031),
                    n.e(271203),
                    n.e(932011),
                    n.e(384820),
                    n.e(538733),
                    n.e(102657),
                    n.e(154168),
                    n.e(506627),
                    n.e(443256),
                    n.e(340346),
                    n.e(888205),
                    n.e(373566),
                    n.e(864075),
                    n.e(815057),
                    n.e(702846),
                    n.e(991531),
                    n.e(818066),
                    n.e(521331),
                    n.e(269442),
                    n.e(762975),
                    n.e(10622),
                    n.e(523638),
                    n.e(819305),
                    n.e(864926),
                    n.e(450541),
                    n.e(647999),
                    n.e(465574),
                    n.e(679700),
                    n.e(195316),
                    n.e(220803),
                    n.e(195782),
                    n.e(659624),
                    n.e(646191),
                    n.e(262720),
                    n.e(454085),
                    n.e(483518),
                    n.e(185928),
                    n.e(531997),
                    n.e(649351),
                    n.e(809940),
                    n.e(798384),
                    n.e(787462),
                    n.e(986629),
                    n.e(943534),
                    n.e(124564),
                    n.e(918339),
                    n.e(666601),
                    n.e(661392),
                    n.e(582153),
                    n.e(313052),
                    n.e(639721),
                    n.e(419631),
                    n.e(82384),
                    n.e(903820),
                    n.e(876892),
                    n.e(334624),
                    n.e(971508),
                    n.e(816799),
                    n.e(356675),
                    n.e(791602),
                    n.e(352351),
                    n.e(734090),
                    n.e(311525),
                    n.e(671710),
                    n.e(483102),
                    n.e(580890),
                    n.e(902552),
                    n.e(689588),
                    n.e(96200),
                    n.e(524084),
                    n.e(990080),
                    n.e(44264),
                    n.e(444790),
                    n.e(983058),
                    n.e(87641),
                    n.e(156132),
                    n.e(939081),
                    n.e(874913),
                    n.e(710569),
                    n.e(717602),
                    n.e(101851),
                    n.e(488292),
                    n.e(239734),
                    n.e(515818),
                    n.e(645671),
                    n.e(214451),
                    n.e(993720),
                    n.e(800916),
                    n.e(654658),
                    n.e(38006),
                    n.e(233049),
                    n.e(569443),
                    n.e(809548),
                    n.e(543456),
                    n.e(908501),
                ]).then(n.bind(n, 351988));
                return (t) =>
                    (0, i.jsx)(e, { ...t, onClose: x.Z_, onInteraction: (0, q.s)("UserSettingsMenu", P.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, q.s)("AudioDeviceMenu", P.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        (this.dismissTooltips(),
            (0, x.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e(360536), n.e(678827)]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, ih.d)({ location: "Account" });
                    return (0, i.jsx)(k.f5, {
                        value: t,
                        children: (0, i.jsx)(e, {
                            onClose: x.Z_,
                            renderInputDevices: !0,
                            renderInputProfiles: n.length > 0,
                            renderInputVolume: !0,
                            minimal: !0,
                            onInteraction: this.audioOnInteractionHandler,
                        }),
                    });
                };
            }));
    };
    handleOutputAudioContextMenu = (e, t) => {
        (this.dismissTooltips(),
            (0, x.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e(360536), n.e(678827)]).then(n.bind(n, 385318));
                return () =>
                    (0, i.jsx)(k.f5, {
                        value: t,
                        children: (0, i.jsx)(e, {
                            onClose: x.Z_,
                            renderOutputDevices: !0,
                            renderOutputVolume: !0,
                            minimal: !0,
                            onInteraction: this.audioOnInteractionHandler,
                        }),
                    });
            }));
    };
    handleMouseEnter = () => {
        this.setState({ hovered: !0 });
    };
    handleMouseLeave = () => {
        this.setState({ hovered: !1 });
    };
    handleMouseEnterMute = () => {
        (this.setState({ hoveringOnMute: !0, shouldShowSpeakingWhileMutedTooltip: !1 }),
            this.speakingWhileMutedTooltipTimeout.stop());
    };
    handleMouseLeaveMute = () => {
        this.setState({ hoveringOnMute: !1 });
    };
    dismissSpeakingWhileMutedTooltip = () => {
        (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }), this.speakingWhileMutedTooltipTimeout.stop());
    };
    dismissTooltips = () => {
        (this.props.onDismissDeviceChangedTooltip?.(), this.dismissSpeakingWhileMutedTooltip());
    };
    handleOccludedChanged = () => {
        let { occluded: e } = this.props;
        e && this.setState({ shouldShowNametagTooltip: !1, shouldShowSpeakingWhileMutedTooltip: !1 });
    };
    handleSpeakingWhileMutedChanged = () => {
        let {
                selfMute: e,
                serverMute: t,
                suppress: n,
                speakingWhileMuted: i,
                occluded: l,
                deviceChangedTooltipType: r,
            } = this.props,
            { hoveringOnMute: a } = this.state,
            s =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > lY;
        i
            ? a ||
              !e ||
              t ||
              n ||
              l ||
              !s ||
              null != r ||
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                  ((this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(lK, () =>
                          this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                      ));
              })
            : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
              this.speakingWhileMutedTooltipTimeout.stop());
    };
    renderStatus() {
        let { hovered: e } = this.state,
            {
                activities: t,
                applicationStream: n,
                currentUser: l,
                status: r,
                userTag: a,
                voiceChannel: s,
            } = this.props;
        if (null == l) return null;
        if ((0, T.A)({ activities: t, status: r, applicationStream: n, voiceChannel: s }))
            return (0, i.jsxs)(O.A, {
                hoverText: a,
                forceHover: e,
                children: [
                    (0, i.jsx)(A.A, { children: nc.Ay.humanizeStatus(r) }),
                    (0, i.jsx)(S.A, {
                        user: l,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: s,
                        textClassName: lW.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let o = t?.find((e) => {
            let { type: t } = e;
            return t === u.$.CUSTOM_STATUS;
        });
        return null != o
            ? (0, i.jsxs)(O.A, {
                  hoverText: a,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(A.A, { children: nc.Ay.humanizeStatus(r) }),
                      (0, i.jsx)(et.A, { activity: o, emojiClassName: lW.Zg, className: lW.WO }),
                  ],
              })
            : null != r && r !== tb.clD.UNKNOWN && l.hasUniqueUsername()
              ? (0, i.jsx)(O.A, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(M, { text: nc.Ay.humanizeStatus(r) }),
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
                          className: lW.eW,
                          children: (0, i.jsx)(iM.A, {
                              className: a()({ [lW.e8]: null != e }),
                              children: (0, i.jsx)(el.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? ei.G.ANIMATED : ei.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: lW.XP,
                          children: (0, i.jsx)(iR.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let {
            badgeDirectoryNuxPopoverVariant: t,
            currentUser: n,
            dismissibleContents: l,
            isOrbchievementsEnabled: r,
        } = this.props;
        return null == n
            ? null
            : (0, i.jsx)(li, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: n,
                  targetElementRef: this.avatarWithPopoutRef,
                  badgeDirectoryNuxPopoverVariant: t,
                  additionalDCs: l.avatar,
                  isOrbchievementsEnabled: r,
                  children: (0, i.jsx)(lQ, {
                      ...this.props,
                      ref: this.avatarWithPopoutRef,
                      handleMouseLeave: this.handleMouseLeave,
                      renderNameTag: this.renderNameTag,
                      "data-jump-section": e["data-jump-section"],
                  }),
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: l, isListenAlongVisible: r } = this.props,
            s = this.state.hovered;
        return null == e
            ? null
            : (0, i.jsx)(C.sk, {
                  children: (e) =>
                      (0, i.jsxs)("div", {
                          ref: this.containerRef,
                          className: a()(lW.kL, { [lW.UG]: null != n, [lW.bc]: !l, [lW.G5]: r }),
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              (0, i.jsx)(ee.A, { nameplate: t, hovered: s, placement: J.u.ACCOUNT }),
                              this.renderNameZone(e),
                              (0, i.jsx)(lX, {
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
              });
    }
}
function lX(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: r,
            serverMute: a,
            serverDeaf: s,
            suppress: o,
            shouldShowSpeakingWhileMutedTooltip: u,
            webBuildOverride: c,
            handleMouseEnterMute: d,
            handleMouseLeaveMute: m,
            handleToggleSelfDeaf: f,
            handleToggleSelfMute: p,
            handleInputAudioContextMenu: h,
            handleOutputAudioContextMenu: g,
            handleOpenAccountSettings: A,
            handleOpenSettingsContextMenu: C,
            dismissibleContents: E,
            occluded: x,
            nameplate: v,
            accountContainerRef: _,
            deviceChangedTooltipType: y,
            dismissTooltips: b,
            speaking: T,
        } = e,
        S = (0, Z.K)(v);
    function j() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return (0, i.jsx)(lV, {
            webBuildOverride: c,
            onClick: A,
            onContextMenu: C,
            dismissibleContents: [...E.settings, ...e],
            iconForeground: null != v ? lW.t4 : void 0,
            nameplate: v,
        });
    }
    return (0, i.jsxs)("div", {
        className: lW.Uo,
        style: S,
        children: [
            (0, i.jsx)(lS, {
                accountContainerRef: _,
                selfMute: n,
                serverMute: a,
                suppress: o,
                awaitingRemote: r,
                onMouseEnter: d,
                onMouseLeave: m,
                onClick: p,
                onContextMenu: h,
                iconForeground: null != v ? lW.t4 : void 0,
                nameplate: v,
                shouldShowSpeakingWhileMutedTooltip: u,
                shouldShowInputDeviceChangedTooltip: !u && "input" === y,
                dismissTooltips: b,
                speaking: T,
            }),
            (0, i.jsx)(lp, {
                selfDeaf: t,
                serverDeaf: s,
                onClick: f,
                onContextMenu: g,
                awaitingRemote: r,
                iconForeground: null != v ? lW.t4 : void 0,
                nameplate: v,
                shouldShowOutputDeviceChangedTooltip: "output" === y,
                dismissTooltips: b,
            }),
            null != I.hE
                ? (0, i.jsx)(l.Suspense, { fallback: j(), children: (0, i.jsx)(I.hE, { occluded: x, children: j }) })
                : j(),
        ],
    });
}
function lZ(e) {
    let t = (0, c.bG)([iy.A], () => null != iy.A.getChannelId()),
        n = (0, em.Py)(e),
        i = l.useRef(new m.Ep()),
        [r, a] = l.useState(!1);
    l.useEffect(() => {
        t &&
            n &&
            (a(!0),
            i.current.start(lq, () => {
                a(!1);
            }));
    }, [t, n]);
    let s = l.useCallback(() => {
        (a(!1), i.current.stop());
    }, []);
    return (
        (0, y.l0)(() => {
            i.current.stop();
        }),
        { shouldShowTooltip: r, dismissTooltip: s }
    );
}
function lJ() {
    let e,
        t,
        n,
        r,
        a = (0, c.bG)([nw.default], () => nw.default.getCurrentUser()),
        s = (0, c.bG)([nJ.default], () => nJ.default.getId()),
        {
            activities: m,
            streaming: f,
            status: p,
        } = (0, c.cf)([n6.A], () => {
            let e = n6.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === u.$.STREAMING;
                    }),
                status: n6.A.getStatus(),
            };
        }),
        h = (0, c.bG)([iC.A], () => iC.A.getAnyStreamForUser(s)),
        g = (0, _.A)({ userId: s }),
        A = (0, c.bG)([ic.A], () => ic.A.isUserPlayingSounds(s)),
        C = (0, c.bG)([iT.A], () => iT.A.getVoiceVolume(s)),
        x = nc.Ay.useUserTag(a, { decoration: "never" }),
        v = (0, c.bG)([iy.A, iE.A], () => {
            let e = iy.A.getChannelId();
            return null != e ? iE.A.getChannel(e) : null;
        }),
        { mute: y, selfMute: b, suppress: T } = (0, iA.A)(v),
        { selfDeaf: S, deaf: I } = (0, ig.A)(v),
        j = (0, c.bG)([H.A], () => ((0, V.kK)() ? H.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        N = (0, c.bG)([i_.Ay], () => i_.Ay.getSpeakingWhileMuted()),
        R = (0, c.bG)([W.A], () => W.A.isFullscreenInContext()),
        M = (0, c.bG)([iv.A], () => iv.A.hasLayers()),
        O = (0, E.re)(E.DX) || M || ij.P.isDisallowPopupsSet() || R,
        z = (0, c.bG)([er.default], () => null != er.default.getAwaitingRemoteSessionInfo()),
        K = (0, c.bG)([ib.A], () => ib.A.getGuildId()),
        Y = a?.avatarDecoration,
        q = (0, Q.A)(Y),
        $ = nc.Ay.useName(a) ?? "",
        { analyticsLocations: Z } = (0, k.Ay)(P.A.ACCOUNT),
        J = (0, X.r)({ user: a, guildId: void 0 }),
        { isQuestBarEmpty: ee } = (0, iu.c9)(),
        et = (0, c.bG)([id.A, nw.default, ix.A], () => {
            let e,
                t = id.A.getSyncingWith(),
                n = id.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = o()(Array.from(ix.A.getParty(e) ?? []))
                        .map((e) => nw.default.getUser(e))
                        .filter(nR.Vq)
                        .value()),
                i.length > 1
            );
        }),
        en = { avatar: [], settings: [] },
        ei = (0, ng.Hy)({ location: "Account" }) && !O,
        el = ed.A.useIsEligible(),
        em = ec.A.coachmarkDismissibleContent,
        ef = (0, L.d)({ location: "AccountCoachmark" }),
        ep =
            ((e = (0, c.bG)([es.A], () => es.A.hasLoaded(eu.oD.PRELOADED_USER_SETTINGS))),
            (t = (0, ea.HX)(d.M.GIFT_CARDS_MARKETING_COACHMARK)),
            (n = e && !t),
            (r = (0, eo.y)({ location: "AccountCoachmark", countGiftCardWallet: !0, canFetchPaymentSources: n })),
            n && r),
        eh = (function (e) {
            let { currentUserId: t, enabled: n, fetchCatalog: i = !0 } = e,
                r = n ? t : null,
                a = (0, c.bG)([F.Ay], () => null != r && F.Ay.hasCatalogFor(r), [r]),
                s = (0, c.bG)([F.Ay], () => null != r && F.Ay.hasCatalogFetchErrorFor(r), [r]),
                [o] = l.useState(() => new D.A(5 * w.A.Millis.SECOND, 5 * w.A.Millis.MINUTE)),
                u = l.useRef(null);
            l.useEffect(() => {
                if (null != r && i) {
                    if (a) return void o.succeed();
                    if (s) {
                        if (o.fails >= 3) return;
                        return (o.fail(() => (0, U.RS)(r, { isRetry: !0 })), () => o.cancel());
                    }
                    u.current !== r && ((u.current = r), (0, U.RS)(r));
                }
            }, [r, i, a, s, o]);
            let d = (0, c.bG)(
                    [F.Ay],
                    () => (null != r ? F.Ay.getBadges(r).filter((e) => B.sC.has(e.badge_id) && e.owned).length : 0),
                    [r],
                ),
                m = (0, c.yK)([F.Ay], () => (null != r ? (0, G.z)(F.Ay.getBadges(r)) : []), [r]),
                f = l.useMemo(
                    () =>
                        null != r && a
                            ? d > 0
                                ? { variant: "progress", newBadgeCount: d, badgeIconUrls: m }
                                : { variant: "no-progress" }
                            : null,
                    [r, a, d, m],
                ),
                p = i && o.fails < 3;
            return { variantProps: f, isPending: null != r && !a && (!s || p) };
        })({ currentUserId: a?.id, enabled: ef }).variantProps;
    O ||
        (en.avatar.push(d.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
        null != eh && en.avatar.push(d.M.BADGE_DIRECTORY_NUX_POPOVER),
        el && null != em && en.settings.push(em),
        ep && en.settings.push(d.M.GIFT_CARDS_MARKETING_COACHMARK),
        en.settings.push(d.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: eg, dismissTooltip: eA } = lZ(ld.oh.AUDIO_INPUT),
        { shouldShowTooltip: eC, dismissTooltip: eE } = lZ(ld.oh.AUDIO_OUTPUT),
        ex = l.useMemo(() => (eg ? "input" : eC ? "output" : void 0), [eg, eC]),
        ev = l.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        eA();
                        break;
                    case "output":
                        eE();
                }
            },
            [eA, eE],
        );
    return (0, i.jsx)(k.f5, {
        value: Z,
        children: (0, i.jsx)(l$, {
            currentUser: a,
            username: $,
            activities: m,
            applicationStream: h,
            voiceChannel: v,
            dismissibleContents: en,
            badgeDirectoryNuxPopoverVariant: eh,
            isOrbchievementsEnabled: ei,
            userTag: x,
            occluded: O,
            selfDeaf: S,
            selfMute: b,
            serverDeaf: I,
            serverMute: y,
            speaking: g,
            playingSoundboard: A,
            voiceDb: C,
            speakingWhileMuted: N,
            status: p,
            streaming: f,
            suppress: T,
            webBuildOverride: j,
            awaitingRemote: z,
            nameplate: J,
            selectedGuildId: K,
            avatarDecoration: q,
            isQuestBarEmpty: ee,
            isListenAlongVisible: et,
            deviceChangedTooltipType: ex,
            onDismissDeviceChangedTooltip: () => ev(ex),
        }),
    });
}
