(n.d(t, { g: () => iQ, A: () => iJ }), n(321073));
var l = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    s = n(435558),
    o = n.n(s),
    u = n(350835),
    d = n(855986),
    c = n(554146),
    m = n(451988),
    h = n(97808),
    f = n(778712),
    p = n(265872),
    g = n(939249),
    A = n(140735),
    v = n(312138);
if (221552 == n.j) var x = n(192308);
var E = n(442433),
    C = n(820284),
    _ = n(717558),
    y = n(964486),
    T = n(220839),
    N = n(397244),
    b = n(342312),
    j = n(160808),
    I = n(736819),
    S = n(866323),
    R = n(120842);
function M(e) {
    let { text: t } = e,
        n = (0, S.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, l.jsx)("div", {
        className: R.k,
        children: n((e, t) => (0, l.jsx)(I.animated.div, { className: R.H, style: e, children: t })),
    });
}
var O = n(29160),
    w = n(793574),
    P = n(688810),
    L = n(643056),
    k = n(158390),
    D = n(927813),
    U = n(682618),
    F = n(864197),
    G = n(982240),
    V = n(988341),
    H = n(521502),
    B = n(380610),
    W = n(628983),
    Z = n(18235),
    z = n(183184),
    K = n(384059),
    q = n(480890),
    Y = n(601255),
    Q = n(562819),
    $ = n(449582),
    X = n(351952),
    J = n(88686),
    ee = n(214881),
    et = n(302223),
    en = n(609425),
    el = n(922301),
    ei = n(16371),
    ea = n(643501),
    er = n(826673),
    es = n(617617),
    eo = n(798091),
    eu = n(355097),
    ed = n(382633),
    ec = n(552122),
    em = n(74848),
    eh = n(607399),
    ef = n(305866),
    ep = n(707554),
    eg = n(95362),
    eA = n(22231),
    ev = n(805251),
    ex = n(935154),
    eE = n(780338);
if (221552 != n.j) var x = n(192308);
var eC = n(224640),
    e_ = n(165862),
    ey = n(877784),
    eT = n(26137),
    eN = n(473935),
    eb = n(765671),
    ej = n(470739),
    eI = n(142617),
    eS = n(289873),
    eR = n(366056),
    eM = n(477782),
    eO = n(320448),
    ew = n(834730),
    eP = n(993401),
    eL = n(792996),
    ek = n(211450);
function eD(e) {
    return (0, l.jsx)("div", {
        className: ek.wE,
        children: (0, l.jsx)(e_.W, {
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
            icon: a,
            label: r,
            sublabel: s,
            trailing: o,
            renderSubmenu: u,
            ref: d,
            submenuTargetElementRef: c,
            submenuAlign: m,
        } = e,
        h = null != n,
        f = (0, eP.rE)({ action: t, onClick: n }),
        [A, v] = i.useState(!1),
        E = i.useRef(null),
        C = d ?? E,
        _ = null != u,
        y = _ && h,
        T = i.useCallback(() => {
            v(!0);
        }, []),
        N = i.useCallback(() => {
            (0, x.ue)() || v(!1);
        }, []);
    function b() {
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("div", { className: ek.iA, children: (0, l.jsx)(a, { size: "xs", color: "currentColor" }) }),
                (0, l.jsxs)("div", {
                    className: ek.$H,
                    children: [
                        (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(ew.E, {
                                    color: "currentColor",
                                    variant: "body-sm/medium",
                                    className: ek.W1,
                                    children: r,
                                }),
                                (0, l.jsx)(ew.E, { color: "currentColor", variant: "body-xs/medium", children: s }),
                            ],
                        }),
                        o,
                    ],
                }),
            ],
        });
    }
    function j(e) {
        let t;
        return (
            (t = y
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(g.D, { className: ek.ef, onClick: f, children: b() }),
                          (0, l.jsx)(g.D, {
                              className: ek.ap,
                              "aria-label": eL.intl.string(eL.t.PdRCRg),
                              ...e,
                              onClick: T,
                              children: (0, l.jsx)(eO._, { size: "xs", color: "currentColor" }),
                          }),
                      ],
                  })
                : _
                  ? (0, l.jsxs)(g.D, {
                        className: ek.ef,
                        ...e,
                        onClick: T,
                        children: [
                            b(),
                            (0, l.jsx)("div", {
                                className: ek.ap,
                                children: (0, l.jsx)(eO._, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    })
                  : (0, l.jsx)(g.D, { className: ek.ef, onClick: f, children: b() })),
            (0, l.jsx)("div", { ref: C, className: ek.jG, children: t })
        );
    }
    return _
        ? (0, l.jsx)("li", {
              className: ek.j$,
              onMouseEnter: T,
              onMouseLeave: N,
              children: (0, l.jsx)(p.Y, {
                  targetElementRef: c ?? C,
                  align: m,
                  spacing: 0,
                  renderPopout: u,
                  shouldShow: A,
                  onRequestClose: N,
                  children: j,
              }),
          })
        : (0, l.jsx)("li", { className: ek.j$, children: j() });
}
function eF(e) {
    let { children: t, "aria-label": n } = e;
    return (0, l.jsx)("ul", { "aria-label": n, children: t });
}
var eG = n(719718),
    eV = n(828187),
    eH = n(796104),
    eB = n(148295),
    eW = n(858899);
function eZ(e, t) {
    (0, eW.P0)({ text: e, variant: "success" === t ? "success" : "critical" });
}
var ez = n(96494);
function eK(e, t, n, l) {
    return { id: e, label: t, description: n, action: () => (0, eV.D)("qa_menu", l !== eB.S.NO_PERSONAL_DATA, l) };
}
let eq = [
    eK("open", ez.default.yLZjcu),
    {
        id: "reset",
        label: ez.default["2DL3aX"],
        action: async () => {
            (await (0, eH.sm)())
                ? eZ(eL.intl.string(ez.default.D5x6qE), "success")
                : eZ(eL.intl.string(ez.default.EkMBfH), "failure");
        },
    },
    eK("open-fake-data", ez.default.kPBZ5M, ez.default.cf0nfD, eB.S.DEFAULT),
    eK("open-global-stats", ez.default.UwiUbM, ez.default["+5dICr"], eB.S.NO_PERSONAL_DATA),
    eK("open-zero-stats", ez.default.BYW9oX, ez.default.NffC17, eB.S.ZERO_DATA),
];
var eY = n(852717),
    eQ = n(641214);
function e$() {
    return (0, l.jsx)(eS.y, { type: eS.t.SPINNING_CIRCLE_SIMPLE, className: eQ.u1, itemClassName: eQ.$N });
}
function eX(e) {
    let { onClose: t } = e,
        n = (0, eI.TX)("CheckpointUserStatusMenuItem"),
        i = (0, d.bG)([eG.A], () => eG.A.isFetching);
    return (0, l.jsx)(eU, {
        icon: i ? e$ : eR.M,
        label: eL.intl.string(eY.default["8hclXY"]),
        sublabel: (0, l.jsx)("span", { className: eQ.$B, children: eL.intl.string(eY.default.BFc4lY) }),
        onClick: async function () {
            (await (0, eV.D)("user_profile_account_popout"), t());
        },
        renderSubmenu: n
            ? (e) => {
                  let { closePopout: n } = e;
                  return (0, l.jsx)(eD, {
                      navId: "checkpoint-qa-submenu",
                      "aria-label": eL.intl.string(ez.default["9dS734"]),
                      className: eQ.gn,
                      onClose: n,
                      children: eq.map((e) =>
                          (0, l.jsx)(
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
    e5 = n(419490),
    e6 = n(409067),
    e8 = n(271597),
    e7 = n(534514),
    e4 = n(475358),
    e9 = n(866665),
    te = n(408278),
    tt = n(625903),
    tn = n(404778),
    tl = n(516521),
    ti = n(821609),
    ta = n(532624),
    tr = n(879631),
    ts = n(350535),
    to = n(341923),
    tu = n(572164),
    td = n(953932),
    tc = n(280483),
    tm = n(890856),
    th = n(713517),
    tf = n(609174),
    tp = n(151184);
function tg(e) {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        a = (0, tf.Y_)(),
        r = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), t?.(), (0, e8.p)({ initialEditingClipId: a.id }));
            },
            [a, t],
        );
    return (0, l.jsx)(ti.$, {
        onClick: r,
        icon: eA.PencilIcon,
        variant: n,
        size: "sm",
        text: eL.intl.string(eL.t.bt75uw),
        fullWidth: !0,
    });
}
var tA = n(82716),
    tv = n(449397),
    tx = n(399053),
    tE = n(285072),
    tC = n(575172);
let t_ = i.memo(function (e) {
    let { clip: t, isNew: n, onClose: a, className: s } = e,
        o = i.useRef(null),
        { isHoveringOrFocusing: u } = (0, th.A)(o),
        d = i.useCallback(() => {
            (a?.(), (0, e8.p)({ initialEditingClipId: t.id }));
        }, [t.id, a]);
    return (0, l.jsx)(tf.Cl, {
        clip: t,
        children: (0, l.jsx)(tm.s, {
            ref: o,
            "aria-label": eL.intl.string(eL.t.bt75uw),
            onClick: d,
            className: r()(tC.Z1, s),
            children: (0, l.jsxs)(tx.d, {
                isStatic: !0,
                children: [
                    n &&
                        (0, l.jsx)("div", {
                            className: tC.Ad,
                            children: (0, l.jsx)(ev.E, { type: "new", variant: "primary" }),
                        }),
                    (0, l.jsxs)(tE.h, {
                        isVisible: u,
                        className: tC.Lw,
                        children: [
                            (0, l.jsxs)("div", {
                                className: tC.mY,
                                children: [(0, l.jsx)(tA.z, {}), (0, l.jsx)(tp.k, {})],
                            }),
                            (0, l.jsxs)("div", {
                                className: tC.E_,
                                children: [
                                    (0, l.jsx)(tg, { onBeforeEdit: a, variant: "overlay-secondary" }),
                                    (0, l.jsx)(tv.e, {}),
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
    tT = n(652215),
    tN = n(753070),
    tb = n(683825),
    tj = n(48127);
function tI(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: a, setPopoutRef: r } = e;
    (0, tc.A)();
    let s = (0, d.yK)([e5.Ay], () => Object.values(e5.Ay.getClips())),
        o = (0, d.bG)([e5.Ay], () => e5.Ay.getSettings()),
        u = (0, d.bG)([e5.Ay], () => e5.Ay.getNewClipIds()),
        c = (0, to.H)(),
        m = (0, d.bG)([e5.Ay], () => e5.Ay.getEnableAutoclipping()),
        h = (0, d.bG)([ta.Ay], () => ta.Ay.getKeybindForAction(tT.hCu.SAVE_CLIP)),
        f = i.useCallback(
            (e) => {
                r?.(e);
            },
            [r],
        ),
        p = !o.showPovClipsInGallery,
        g = i.useMemo(() => {
            let e = s.filter((e) => e.type === ty.nQ.CLIP && "" !== e.thumbnail && (!p || !(0, e6.kD)(e)));
            return (e.sort((e, t) => t.createdAt - e.createdAt), e);
        }, [s, p]),
        A = i.useMemo(() => g.slice(0, 16), [g]),
        v = g.length > 16,
        x = null != h ? ts.dI(h.shortcut, !0) : null,
        E = [
            (0, tr.$)(o.clipsLength / D.A.Millis.SECOND),
            (0, tN.zr)(o.clipsQuality.resolution),
            eL.intl.formatToPlainString(eL.t.Qb44XH, { fps: o.clipsQuality.frameRate }),
        ];
    return (
        c && E.push(eL.intl.string(tb.default.XWkJoi)),
        (0, l.jsxs)("div", {
            ref: f,
            className: tj.SW,
            role: "dialog",
            "aria-label": eL.intl.string(eL.t.z2jK6X),
            children: [
                (0, l.jsxs)("div", {
                    className: tj.wx,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tj.$,
                            children: [
                                (0, l.jsx)(e7.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    children: eL.intl.string(eL.t.z2jK6X),
                                }),
                                null != x && (0, l.jsx)(e4.e, { className: tj.P, shortcut: x }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: tj.$s,
                            children: [
                                (0, l.jsx)(e9.m, {
                                    text: eL.intl.string(eL.t["3D5yo/"]),
                                    children: (0, l.jsx)(te.K, {
                                        onClick: () => n(),
                                        icon: tt.SettingsIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eL.intl.string(eL.t["3D5yo/"]),
                                    }),
                                }),
                                (0, l.jsx)(e9.m, {
                                    text: eL.intl.string(tb.default["55C2MH"]),
                                    children: (0, l.jsx)(te.K, {
                                        onClick: () => t(),
                                        icon: eJ.x,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eL.intl.string(tb.default["55C2MH"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tj.ov,
                    children: [
                        E.map((e, t) =>
                            (0, l.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        t > 0 && (0, l.jsx)("span", { className: tj.LO, children: "\u2022" }),
                                        (0, l.jsx)(ew.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            tag: "span",
                                            className: tj.c5,
                                            children: e,
                                        }),
                                    ],
                                },
                                e,
                            ),
                        ),
                        c &&
                            (0, l.jsx)(ew.E, {
                                variant: "body-xs/semibold",
                                color: m ? "text-strong" : "text-feedback-critical",
                                tag: "span",
                                className: tj.wS,
                                children: m ? eL.intl.string(tb.default.lTwKmt) : eL.intl.string(tb.default.GNDqtf),
                            }),
                    ],
                }),
                (0, l.jsx)(tn.c, {}),
                A.length > 0
                    ? (0, l.jsxs)(tl.Ch, {
                          className: tj.Vg,
                          fade: !0,
                          disableFocusRingScope: !0,
                          children: [
                              A.map((e) => (0, l.jsx)(t_, { clip: e, isNew: u.includes(e.id), onClose: a }, e.id)),
                              v &&
                                  (0, l.jsx)("div", {
                                      className: tj.qr,
                                      children: (0, l.jsx)(ti.$, {
                                          onClick: () => t(),
                                          text: eL.intl.string(tb.default["55C2MH"]),
                                          variant: "secondary",
                                          size: "sm",
                                      }),
                                  }),
                          ],
                      })
                    : (0, l.jsx)(tS, { keybindString: x }),
            ],
        })
    );
}
function tS(e) {
    let { keybindString: t } = e,
        n = (0, tu.E)();
    return (0, l.jsxs)("div", {
        className: tj.p$,
        children: [
            (0, l.jsx)(ew.E, {
                variant: "body-md/medium",
                color: "text-default",
                className: tj.qO,
                children: eL.intl.string(tb.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, l.jsx)(ew.E, {
                      variant: "body-sm/medium",
                      color: "text-muted",
                      className: tj.CZ,
                      children: eL.intl.format(tb.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, l.jsx)(
                                  ew.E,
                                  {
                                      variant: "body-sm/medium",
                                      color: "text-feedback-positive",
                                      tag: "span",
                                      children: e,
                                  },
                                  "protip",
                              ),
                          keybind: (0, l.jsx)(e4.e, { shortcut: t }, "keybind"),
                      }),
                  })
                : (0, l.jsx)(td.A, {}),
        ],
    });
}
function tR(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        a = (0, e3.sw)(),
        r = !(0, d.bG)([e5.Ay], () => e5.Ay.getSettings().showPovClipsInGallery),
        s = (0, d.bG)(
            [e5.Ay],
            () => {
                let e = e5.Ay.getNewClipIds();
                return r
                    ? e.filter((e) => {
                          let t = e5.Ay.getClipById(e);
                          return null != t && !(0, e6.kD)(t);
                      }).length
                    : e.length;
            },
            [r],
        ),
        o = i.useCallback(
            (e) => {
                (t(), (0, e8.p)({ initialEditingClipId: e }));
            },
            [t],
        ),
        u = i.useCallback(() => {
            (t(), (0, e2.openUserSettings)(e1.X.CLIPS_PANEL));
        }, [t]);
    return a
        ? (0, l.jsx)(eU, {
              action: "PRESS_CLIPS",
              icon: eJ.x,
              label: eL.intl.string(eL.t.z2jK6X),
              trailing: s > 0 ? (0, l.jsx)(e0.hV, { count: s }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, l.jsx)(tI, { ...e, onOpenGallery: o, onOpenSettings: u, onClose: t }),
          })
        : null;
}
var tM = n(971217),
    tO = n(577390),
    tw = n(287727),
    tP = n(31956),
    tL = n(744808),
    tk = n(645507),
    tD = n(263775),
    tU = n(970931),
    tF = n(315710),
    tG = n(789645),
    tV = n(775602),
    tH = n(832248),
    tB = n(462887),
    tW = n(736653),
    tZ = n(439174),
    tz = n(879610),
    tK = n(105909),
    tq = n(682901);
function tY() {
    let e = (0, tK.Xb)(),
        t = (0, tz.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tq.sp.length - 1; t >= 0; t--) {
        let l = tq.VD[tq.sp[t]],
            i = new Date(e);
        if ((i.setMonth(i.getMonth() + l.tenureReqNumMonths), i.setHours(i.getHours() + 30), n > i.getTime()))
            if (n - i.getTime() < 6048e5) return l.id;
            else break;
    }
    return null;
}
let tQ = {
        [tq.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tq.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tq.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tq.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tq.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tq.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tq.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tq.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    t$ = {
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
var tX = n(570484);
let tJ = i.lazy(() => Promise.all([n.e(969274), n.e(924832)]).then(n.bind(n, 748579)));
function t0() {
    let e = (0, d.bG)([tV.Ay], () => tV.Ay.useReducedMotion),
        t = (0, tH.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tY(),
                t = (0, tB.M)((0, tW.Ay)());
            if (null == e) return null;
            let n = tQ[e],
                l = t$[e],
                i = {
                    currentBadge: (0, tZ.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? l?.dark : l?.light,
                },
                a = tq.sp.indexOf(e);
            if (a > 0) {
                let e = tq.sp[a - 1],
                    n = tQ[e];
                ((i.prevBadge = (0, tZ.e0)(e)), (i.prevBadgeTextGradient = t ? n?.dark : n?.light));
            }
            return i;
        })(),
        [a, r] = i.useState(null);
    return (null != n && null == a && r(n), e || !t || null == a) ? null : (0, l.jsx)(t1, { levelUpData: a });
}
function t1(e) {
    let { levelUpData: t } = e,
        n = i.useRef(null),
        a = i.useCallback(() => {
            tH.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, l.jsx)(tF.Ok, {
        containerRef: n,
        children: (0, l.jsxs)("div", {
            className: tX.i,
            children: [
                (0, l.jsx)("div", {
                    className: tX.b,
                    children: (0, l.jsx)(e9.m, {
                        text: eL.intl.string(eL.t.cpT0Cq),
                        children: (0, l.jsx)(te.K, {
                            icon: tG.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: a,
                            "aria-label": eL.intl.string(eL.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, l.jsx)(i.Suspense, { fallback: null, children: (0, l.jsx)(tJ, { levelUpData: t }) }),
            ],
        }),
    });
}
var t2 = n(397562),
    t3 = n(206835),
    t5 = n(183555),
    t6 = n(465318),
    t8 = n(527212),
    t7 = n(702476),
    t4 = n(718019),
    t9 = n(567556),
    ne = n(915614),
    nt = n(560296),
    nn = n(559506),
    nl = n(646986),
    ni = n(312294),
    na = n(946356),
    nr = n(465829),
    ns = n(624479),
    no = n(206845),
    nu = n(957565),
    nd = n(427262),
    nc = n(62119);
function nm(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: i } = (0, t5.NJ)();
    return nu.p5
        ? (0, l.jsx)(no.A, {
              text: eL.intl.string(eL.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: nd.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => i({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, l.jsx)(g.D, {
                      ...e,
                      className: r()(nc.c, { [nc.R]: n }),
                      "aria-label": eL.intl.string(eL.t.y5MwJy),
                      children: (0, l.jsx)(ns.CopyIcon, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var nh = n(680581),
    nf = n(442228),
    np = n(253932),
    ng = n(362862),
    nA = n(621466),
    nv = n(318254),
    nx = n(863610),
    nE = n(421773),
    nC = n(318346),
    n_ = n(923138),
    ny = n(309954),
    nT = n(673125),
    nN = n(150849),
    nb = n(769001);
function nj(e) {
    let { popoutContainerRef: t, scrollerRef: n, shouldScrollIntoView: a, onCloseAccountPopout: s } = e;
    (0, n_.I)({ enabled: !0 });
    let { balance: o } = (0, ny.W)(),
        u = (0, d.bG)([nT.Ay], () =>
            nT.Ay.userOpenedWalletViaProfileDCF ? nT.Y0.NEW_ACHIEVEMENT : nT.Ay.clientUnreadNotificationType,
        );
    i.useEffect(
        () => () => {
            nT.Ay.setUserOpenedWalletViaProfileDCF(!1);
        },
        [],
    );
    let { isHovered: c, onMouseEnter: m, onMouseLeave: h, setIsHovered: f, cancelTimers: A } = (0, nE.A)(0, 500),
        v = i.useCallback(() => {
            (0, x.ue)() || h();
        }, [h]),
        E = i.useRef(null),
        C = i.useRef(null),
        _ = i.useRef(null),
        y = i.useCallback(
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
    (i.useEffect(() => () => _.current?.disconnect(), []),
        i.useEffect(() => {
            if (c)
                return (document.addEventListener("mouseover", e), () => document.removeEventListener("mouseover", e));
            function e(e) {
                if ((0, x.ue)()) return;
                let t = (0, nA.vq)(e.target, Element) ? e.target : null,
                    n = t?.closest(`.${ek.j$}`);
                null != n && n !== E.current && (A(), f(!1));
            }
        }, [c, A, f]));
    let T = i.useRef(!1);
    i.useEffect(() => {
        c || (T.current = !1);
    }, [c]);
    let N = i.useCallback(() => {
            (T.current ||
                ((T.current = !0),
                (0, nC.Y)({
                    pageType: w.A.USER_PROFILE_ACCOUNT_POPOUT,
                    sectionType: w.A.ORB_WALLET,
                    ctaObject: w.A.ORB_WALLET_OPEN_FROM_PROFILE,
                })),
                m());
        }, [m]),
        b = (0, eP.rE)({ action: "PRESS_ORBS", onClick: N });
    i.useEffect(() => {
        let e = n?.current,
            t = E.current;
        if (!a || null == e || null == t) return;
        function l() {
            if (null == e || null == t) return;
            let n = e.getBoundingClientRect(),
                l = t.getBoundingClientRect(),
                i = l.bottom + 24 - n.bottom,
                a = n.top - (l.top - 24);
            i > 0 ? (e.scrollTop += i) : a > 0 && (e.scrollTop -= a);
        }
        let i = requestAnimationFrame(l),
            r = new ResizeObserver(l);
        for (let t of (r.observe(e), Array.from(e.children))) r.observe(t);
        function s() {
            (r.disconnect(), clearTimeout(o));
        }
        let o = setTimeout(s, 3e3);
        return (
            e.addEventListener("wheel", s, { once: !0 }),
            e.addEventListener("pointerdown", s, { once: !0 }),
            () => {
                (cancelAnimationFrame(i),
                    s(),
                    e.removeEventListener("wheel", s),
                    e.removeEventListener("pointerdown", s));
            }
        );
    }, [a, n]);
    let j = i.useMemo(
            () =>
                null != o
                    ? eL.intl.format(eL.t["8xDISf"], { balance: String(o) })
                    : (0, l.jsx)(nx.n, { dotRadius: 3.5, themed: !0, className: nb.K }),
            [o],
        ),
        I = i.useMemo(
            () =>
                u === nT.Y0.NEW_ACHIEVEMENT
                    ? (0, l.jsx)(ev.E, { type: "new", variant: "primary" })
                    : u === nT.Y0.UNCLAIMED_ACHIEVEMENT
                      ? (0, l.jsx)(ev.E, { type: { text: eL.intl.string(eL.t.O13yhz) }, variant: "primary" })
                      : null,
            [u],
        ),
        S = i.useCallback(() => {
            (A(), f(!1), s());
        }, [A, f, s]),
        R = i.useCallback(
            (e) => {
                let { relatedTarget: t } = e;
                (0, nA.vq)(t, Node) && null != E.current && E.current.contains(t) && A();
            },
            [A],
        );
    return (0, l.jsx)("li", {
        ref: E,
        className: ek.j$,
        onMouseEnter: N,
        onMouseLeave: v,
        children: (0, l.jsx)(p.Y, {
            targetElementRef: t,
            align: "bottom",
            spacing: -16,
            renderPopout: () =>
                (0, l.jsx)("div", {
                    ref: y,
                    onMouseEnter: m,
                    onMouseLeave: R,
                    children: (0, l.jsx)(nN.vG, { onCloseWallet: S, returnRef: C, isProfilePopout: !0 }),
                }),
            shouldShow: c,
            onRequestClose: v,
            children: (e) =>
                (0, l.jsx)("div", {
                    className: ek.jG,
                    children: (0, l.jsxs)(g.D, {
                        innerRef: C,
                        className: ek.ef,
                        ...e,
                        onClick: b,
                        children: [
                            (0, l.jsx)("div", {
                                className: ek.iA,
                                children: (0, l.jsx)(nv.C, { color: "currentColor", size: "xs" }),
                            }),
                            (0, l.jsx)("div", {
                                className: ek.$H,
                                children: (0, l.jsx)("div", {
                                    children: (0, l.jsx)(ew.E, {
                                        color: "currentColor",
                                        variant: "body-sm/medium",
                                        className: ek.W1,
                                        children: j,
                                    }),
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: r()(ek.ap, nb._),
                                children: [I, (0, l.jsx)(eO._, { size: "xs", color: "currentColor" })],
                            }),
                        ],
                    }),
                }),
        }),
    });
}
var nI = n(290863),
    nS = n(351906),
    nR = n(403362),
    nM = n(562153),
    nO = n(646514),
    nw = n(628284),
    nP = n(695366),
    nL = n(413599),
    nk = n(619019),
    nD = n(287809),
    nU = n(129230),
    nF = n(429707),
    nG = n(274303),
    nV = n(994125),
    nH = n(347853),
    nB = n(573879),
    nW = n(559117),
    nZ = n(43105),
    nz = n(661439),
    nK = n(385113),
    nq = n(352003),
    nY = n(429913),
    nQ = n(334074),
    n$ = n(633075),
    nX = n(667049),
    nJ = n(46653),
    n0 = n(90165),
    n1 = n(49999),
    n2 = n(518477);
function n3(e) {
    let { targetElementRef: t, onClose: a } = e,
        [r, s] = i.useState(!1),
        o = (0, d.bG)([nJ.default], () => nJ.default.getId()),
        { eligibleApplications: u, markAsDismissed: m } = (function () {
            let e = (0, d.yK)([nK.A], () => nK.A.getFeaturedApplicationIds());
            ((0, nq.A)(e),
                i.useEffect(() => {
                    (0, nz.X)();
                }, []));
            let t = (0, d.bG)([nJ.default], () => nJ.default.getId()),
                n = (0, nX.A)(t),
                l = i.useMemo(() => n.filter((e) => e instanceof n$.R), [n]),
                a = (0, nY.A)(e),
                r = i.useMemo(() => a.filter(nR.Vq), [a]),
                s = (0, d.cf)([n0.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = r.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = n0.A.getLastPlayedDateTime(e));
                    }
                    return t;
                }),
                o = i.useMemo(() => {
                    let e = Date.now();
                    return r.filter((t) => {
                        if (l.some((e) => e.applicationId === t.id)) return !1;
                        let n = s[t.id];
                        return null != n && e - n < 7776e6;
                    });
                }, [r, l, s]),
                { eligibleToShow: u, markAsDismissed: m } = (0, nQ.hj)({
                    applications: o,
                    dismissibleContent: c.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: nQ.SH,
                });
            return {
                eligibleApplications: i.useMemo(() => o.filter((e) => u.includes(e.id)), [o, u]),
                markAsDismissed: m,
            };
        })();
    return ((0, i.useEffect)(() => {
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
                n.e(59599),
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
                n.e(363874),
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
                n.e(373122),
                n.e(649408),
                n.e(221856),
                n.e(186212),
                n.e(755936),
                n.e(147662),
                n.e(312820),
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
                n.e(591538),
                n.e(576909),
                n.e(830228),
                n.e(27355),
                n.e(953665),
                n.e(406174),
                n.e(776273),
                n.e(492762),
                n.e(885533),
                n.e(282833),
                n.e(393766),
                n.e(572963),
                n.e(229787),
                n.e(521930),
                n.e(307575),
                n.e(554241),
                n.e(724303),
                n.e(53102),
                n.e(88599),
                n.e(95340),
                n.e(354044),
                n.e(437065),
                n.e(709640),
                n.e(952548),
                n.e(636373),
                n.e(230664),
                n.e(655708),
                n.e(553984),
                n.e(884601),
                n.e(782969),
                n.e(776766),
                n.e(504370),
                n.e(428967),
                n.e(174025),
                n.e(129080),
                n.e(238232),
                n.e(608032),
                n.e(477970),
                n.e(823300),
                n.e(136204),
                n.e(252229),
                n.e(523276),
                n.e(77473),
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
                n.e(203930),
                n.e(903663),
                n.e(246969),
                n.e(566976),
                n.e(908081),
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
                n.e(247339),
                n.e(540077),
                n.e(659624),
                n.e(825951),
                n.e(736637),
                n.e(653308),
                n.e(272887),
                n.e(803410),
                n.e(949001),
                n.e(677407),
                n.e(550260),
                n.e(671367),
                n.e(166222),
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
        : (0, l.jsx)(nZ.A, {
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
                      loading: r,
                      onClick: function () {
                          (s(!0),
                              (0, t7.openUserProfileModal)({ userId: o, tabSection: n2.RP.WIDGETS })
                                  .then(() => {
                                      let e = u.map((e) => e.id);
                                      ((0, x.mM)(
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
                                                  (0, l.jsx)(t, {
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
                                          a());
                                  })
                                  .finally(() => s(!1)));
                      },
                  },
              ],
          });
}
var n5 = n(894768),
    n6 = n(818348),
    n8 = n(709516);
function n7() {
    let e = (0, d.bG)([n5.A], () => n5.A.getStatus()),
        t = (0, nd.MU)(e) ?? "",
        n = e === n6.cl.INVISIBLE || e === n6.cl.OFFLINE;
    return (0, l.jsxs)("div", {
        className: n8.k,
        children: [
            (0, l.jsxs)(A.A, { tag: "div", children: [eL.intl.string(eL.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, l.jsx)(e9.m, {
                    text: eL.intl.string(eL.t.L99HQm),
                    children: (0, l.jsx)(nP.E, {
                        size: "xs",
                        color: nO.A.colors.STATUS_WARNING,
                        "aria-label": eL.intl.string(eL.t.L99HQm),
                    }),
                }),
        ],
    });
}
var n4 = n(146901),
    n9 = n(827827);
let le = [
        { duration: 15 * D.A.Millis.MINUTE, label: () => eL.intl.string(eL.t["8ot6gv"]) },
        { duration: D.A.Millis.HOUR, label: () => eL.intl.string(eL.t.UMWBZr) },
        { duration: 8 * D.A.Millis.HOUR, label: () => eL.intl.string(eL.t.EpAXPC) },
        { duration: D.A.Millis.DAY, label: () => eL.intl.string(eL.t["755t4q"]) },
        { duration: 3 * D.A.Millis.DAY, label: () => eL.intl.string(eL.t["f3/1ch"]) },
        { duration: void 0, label: () => eL.intl.string(eL.t["46dqJY"]) },
    ],
    lt = "forever";
function ln(e) {
    let { status: t, currentStatus: n, description: i } = e,
        a = t !== tT.clD.ONLINE,
        r = (0, l.jsx)(l.Fragment, {
            children: le.map((e) => {
                let { duration: i, label: a } = e;
                return (0, l.jsx)(
                    eM.Dr,
                    {
                        id: `${t}-${i}`,
                        label: a(),
                        action: () => (0, n9.A)({ nextStatus: t, prevStatus: n, durationMillis: i }),
                        dontCloseOnAction: !0,
                    },
                    i ?? lt,
                );
            }),
        });
    return (0, l.jsx)(eM.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: a,
        label: (0, nd.MU)(t),
        subtext: i,
        iconLeft: () => (0, l.jsx)(ex.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, n9.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: a ? r : void 0,
    });
}
function ll(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: l } = (0, n4._)(e);
    return "today" === t
        ? eL.intl.formatToPlainString(eL.t.ZxxHIO, { timeString: l })
        : eL.intl.formatToPlainString(eL.t["9OFjSe"], { dateString: n, timeString: l });
}
var li = n(996988),
    la = n(207634),
    lr = n(47453);
function ls(e) {
    let { currentUser: t, onClose: n, setPopoutRef: a, highlightBadge: s, openedAt: o, className: u } = e,
        m = __OVERLAY__,
        p = (0, t8.Ay)(t.id, void 0),
        { analyticsLocations: g } = (0, P.Ay)(w.A.USER_PROFILE_ACCOUNT_POPOUT),
        v = (0, t5.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 });
    (0, t2.A)(g, p, n2.R7.ACCOUNT_POPOUT);
    let { ref: E } = (0, eb.Ay)(),
        { isHoveringOrFocusing: C, isHovering: _ } = (0, th.A)(E);
    (i.useEffect(() => {
        a?.(E.current);
    }, [E, a]),
        i.useEffect(
            () => (
                tH.A.setState({ isOpen: !0 }),
                () => tH.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1, shouldScrollToOrbsMenuItem: !1 })
            ),
            [],
        ));
    let y = (0, d.bG)([nI.A], () => nI.A.getStatus(t.id)),
        T = ll(np.CY.useSetting()),
        N = (0, d.bG)([nS.A], () => nS.A.hidePersonalInformation),
        b = (0, tU.kB)(),
        j = np.Q_.useSetting(),
        I = (function (e) {
            let t = np.CY.useSetting(),
                n = (0, tU.kB)(),
                i = np.Jr.useSetting();
            function a(l) {
                let i = ll(t);
                if (e === l && null != i) return i;
                switch (l) {
                    case tT.clD.DND:
                        return n ? eL.intl.string(eL.t.day5A6) : eL.intl.string(eL.t["tq/fMK"]);
                    case tT.clD.INVISIBLE:
                        return eL.intl.string(eL.t.zPc6Mc);
                    default:
                        return;
                }
            }
            let r = (0, l.jsx)(l.Fragment, {
                    children: le.map((t) => {
                        let { duration: n, label: i } = t;
                        return (0, l.jsx)(
                            eM.Dr,
                            {
                                id: `${e}-${n}`,
                                label: i(),
                                action: () => {
                                    (0, tU.ES)(!0, n);
                                },
                                dontCloseOnAction: !0,
                            },
                            n ?? lt,
                        );
                    }),
                }),
                s = ln({ status: tT.clD.ONLINE, currentStatus: e }),
                o = ln({ status: tT.clD.IDLE, currentStatus: e, description: a(tT.clD.IDLE) }),
                u = ln({ status: tT.clD.DND, currentStatus: e, description: a(tT.clD.DND) }),
                d = ln({ status: tT.clD.INVISIBLE, currentStatus: e, description: a(tT.clD.INVISIBLE) });
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    s,
                    (0, l.jsx)(eM.bX, {}, "menu-separator-statuses"),
                    o,
                    u,
                    d,
                    n
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(eM.bX, {}, "menu-separator-statuses"),
                                  (0, l.jsx)(
                                      eM.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: eL.intl.string(eL.t.gJRnwK),
                                          iconLeft: eE.BellSlashIcon,
                                          leadingAccessory: { type: "icon", icon: eE.BellSlashIcon },
                                          badge: { text: eL.intl.string(eL.t.ApAu9f) },
                                          subtext:
                                              null != i && "0" !== i
                                                  ? eL.intl.format(eL.t.BWD8fs, {
                                                        endTime: new Date(Number(i)).toLocaleString(
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
                                          children: r,
                                      },
                                      "quiet-mode",
                                  ),
                              ],
                          })
                        : null,
                ],
            });
        })(y),
        S = (function (e) {
            let t = (0, d.bG)([nD.default], () => nD.default.getCurrentUser()),
                n = (0, d.bG)([nS.A], () => nS.A.hidePersonalInformation),
                i = (0, d.bG)([nL.A], () => (0, tB.M)(nL.A.theme)),
                { multiAccountUsers: a } = (0, nV.K)(),
                r = a.map((a) => {
                    let r = new nk.A(a),
                        s = r.id === t?.id,
                        o = a.tokenStatus === nG.U.INVALID,
                        u = n ? null : `#${r.discriminator}`;
                    return (0, l.jsx)(
                        eM.Dr,
                        {
                            id: r.id,
                            focusedClassName: nW.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, l.jsxs)("div", {
                                    className: nW.ci,
                                    children: [
                                        (0, l.jsx)(h.eu, {
                                            src: r.getAvatarURL(void 0, 40),
                                            size: f._3.SIZE_24,
                                            "aria-label": a.username,
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: nW.DD,
                                            children: [
                                                (0, l.jsx)(ew.E, {
                                                    className: nW.gE,
                                                    variant: "body-sm/normal",
                                                    children: nd.Ay.getUserTag(r, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !r.hasUniqueUsername() &&
                                                    (0, l.jsx)(ew.E, {
                                                        className: nW.df,
                                                        variant: "body-sm/normal",
                                                        children: u,
                                                    }),
                                            ],
                                        }),
                                        s &&
                                            (0, l.jsx)(nw.y, {
                                                size: "sm",
                                                color: t
                                                    ? nO.A.unsafe_rawColors.WHITE.css
                                                    : nO.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && i) || (t && !i)
                                                        ? nO.A.unsafe_rawColors.BRAND_500.css
                                                        : nO.A.unsafe_rawColors.WHITE.css,
                                                className: nW.s0,
                                            }),
                                        o &&
                                            (0, l.jsx)(nP.E, {
                                                color: nO.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && i) || (t && !i)
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
                                    (n = r.id) !== t?.id &&
                                        (nU.default.track(tT.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tT.JJy.USER_PROFILE },
                                        }),
                                        nF.Mx(n, void 0, nB.WX.MULTI_ACCOUNT_MENU));
                                }
                            },
                        },
                        r.id,
                    );
                });
            return (
                r.push(
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(eM.bX, {}),
                            (0, l.jsx)(eM.Dr, {
                                id: "manage-accounts",
                                label: eL.intl.string(eL.t.WbFpq4),
                                action: () => {
                                    (e?.(), (0, nH.A)());
                                },
                            }),
                        ],
                    }),
                ),
                r
            );
        })(n),
        R = (0, t3.A)({ analyticsLocations: g }),
        M = (0, tz.TW)(t),
        O = (0, L.d)({ location: "UserProfileAccountPopout" }),
        k = i.useRef(null),
        D = i.useRef(null),
        U = i.useRef(null),
        F = (0, tw.A)(p?.profileFrame?.skuId),
        G = (0, tO.A)(p?.profileFrame?.skuId);
    (0, tP.A)({ skuId: p?.profileFrame?.skuId, openedAt: o, context: v, analyticsLocations: g });
    let V = i.useRef((0, tH.A)((e) => e.shouldRenderTenureLevelUp)),
        H = i.useMemo(() => (0, tk.A)(), []),
        [B, W] = i.useState(() => tH.A.getState().shouldRenderTenureLevelUp);
    function Z(e) {
        (n?.(), (0, t7.openUserProfileModal)({ customStatusPrompt: H, sourceAnalyticsLocations: g, ...v, ...e }));
    }
    i.useEffect(() => {
        let e = setTimeout(() => {
            W(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let z = p?.widgets != null && p.widgets.length > 0,
        K = i.useCallback(() => {
            n();
        }, [n]),
        q = i.useCallback(() => {
            (R(), K());
        }, [R, K]),
        Y = t6.A.useConfig({ location: "UserProfileAccountPopout" }).enabled,
        Q = (0, ng.Hy)({ location: "UserProfileAccountPopout" }),
        $ = (0, eI.FX)("UserProfileAccountPopout"),
        X = (0, tH.A)((e) => e.shouldScrollToOrbsMenuItem),
        [J, ee] = (0, tD.kn)(
            [
                c.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE,
                Y ? c.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK : void 0,
            ].filter(nR.Vq),
            { groupName: void 0, bypassAutoDismiss: !0 },
        ),
        et = i.useId();
    return (0, l.jsx)(P.f5, {
        value: g,
        children: (0, l.jsx)(t5.of, {
            value: v,
            openedAt: o,
            fetchStartedAt: p?.fetchStartedAt,
            fetchEndedAt: p?.fetchEndedAt,
            isLoaded: p?.isLoaded,
            children: (0, l.jsxs)(ef.l, {
                ref: E,
                "aria-labelledby": et,
                className: r()(ek.jC, u),
                "data-layer": "base",
                children: [
                    (0, l.jsx)(A.A, {
                        children: (0, l.jsx)(ep.H, { id: et, children: eL.intl.string(eL.t["5fWB8U"]) }),
                    }),
                    (0, l.jsxs)(ep.F, {
                        children: [
                            (0, l.jsxs)(na.A, {
                                className: ek.BK,
                                user: t,
                                displayProfile: p,
                                themeType: li.d.POPOUT,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: lr.wx,
                                        children: [
                                            (0, l.jsx)(ne.A, { user: t, displayProfile: p, themeType: li.d.POPOUT }),
                                            (0, l.jsx)(t4.A, {
                                                user: t,
                                                displayProfile: p,
                                                avatarSize: la.T[li.d.POPOUT].avatarSize,
                                                onOpenProfile: m ? void 0 : Z,
                                            }),
                                            (0, l.jsx)(nh.A, {
                                                ref: k,
                                                user: t,
                                                themeType: li.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: H,
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(eg.Ip, {
                                        ref: U,
                                        className: ek.rf,
                                        style: { pointerEvents: B ? "none" : void 0 },
                                        children: [
                                            (0, l.jsx)(nn.A, { userId: t.id }),
                                            (0, l.jsx)(nr.Ay, {
                                                className: ek.eF,
                                                user: t,
                                                displayName: nM.Ay.getName(void 0, null, t),
                                                onClickName: m ? void 0 : Z,
                                                displayNameTrailing: (0, l.jsx)(nm, { user: t, isVisible: C }),
                                                pronouns: p?.pronouns,
                                                trailing: (0, l.jsx)(t9.A, {
                                                    displayProfile: p,
                                                    themeType: li.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != s ? (e) => e === s : void 0,
                                                    shouldGlowTenureBadge: V.current,
                                                }),
                                            }),
                                            (0, l.jsx)(nt.A, { isPremiumUser: M, onInteraction: n }),
                                            (0, l.jsx)(nf.A, {
                                                userId: t.id,
                                                userBio: p?.bio,
                                                hidePersonalInformation: N,
                                                onClose: n,
                                            }),
                                            z &&
                                                (0, l.jsx)(ni.A, {
                                                    user: t,
                                                    widgets: p?.widgets,
                                                    onOpenUserProfileModal: Z,
                                                }),
                                            (0, l.jsx)(nl.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: Z,
                                                onClose: n,
                                            }),
                                            (0, l.jsxs)("div", {
                                                className: ek.T_,
                                                children: [
                                                    $ &&
                                                        (0, l.jsx)(na.A.Overlay, {
                                                            className: ek.g0,
                                                            children: (0, l.jsx)(eF, {
                                                                children: (0, l.jsx)(eX, { onClose: n }),
                                                            }),
                                                        }),
                                                    (0, l.jsx)(na.A.Overlay, {
                                                        className: ek.g0,
                                                        children: (0, l.jsxs)(eF, {
                                                            children: [
                                                                (0, l.jsx)(eU, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: eL.intl.string(eL.t.s5vZlQ),
                                                                    icon: eA.PencilIcon,
                                                                    trailing:
                                                                        null != J
                                                                            ? (0, l.jsx)("div", {
                                                                                  className: ek.IO,
                                                                                  "aria-hidden": !0,
                                                                                  children: (0, l.jsx)(ev.E, {
                                                                                      type: "new",
                                                                                      variant: "primary",
                                                                                  }),
                                                                              })
                                                                            : null,
                                                                    onClick: () => {
                                                                        (J ===
                                                                            c.M
                                                                                .DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE &&
                                                                            ee(n1.i.TAKE_ACTION),
                                                                            q());
                                                                    },
                                                                    ref: D,
                                                                }),
                                                                (0, l.jsx)(eU, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, l.jsx)(n7, {}),
                                                                    sublabel: null != T && T,
                                                                    icon: () =>
                                                                        (0, l.jsx)(ex.nW, { status: y, size: 12 }),
                                                                    trailing:
                                                                        (b || y === tT.clD.DND) &&
                                                                        (0, l.jsx)(eE.BellSlashIcon, { size: "xxs" }),
                                                                    renderSubmenu: eh.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, l.jsx)(eD, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: ek.hQ,
                                                                                  "aria-label": eL.intl.string(
                                                                                      eL.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: I,
                                                                              });
                                                                          },
                                                                    onClick: eh.Fr
                                                                        ? () => {
                                                                              (n(),
                                                                                  (0, x.mM)(
                                                                                      () =>
                                                                                          new Promise((e) =>
                                                                                              e((e) => {
                                                                                                  let {
                                                                                                      onClose: t,
                                                                                                      ...n
                                                                                                  } = e;
                                                                                                  return (0, l.jsx)(
                                                                                                      eC.d,
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
                                                                                                          l.jsx)(e_.W, {
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
                                                                                                                  I,
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
                                                                    (0, l.jsx)(eU, {
                                                                        action: "PRESS_VIEW_BADGES",
                                                                        icon: ey.q,
                                                                        label: eL.intl.string(eL.t.l6w3Vj),
                                                                        onClick: () => {
                                                                            (n(),
                                                                                (0, ej.openBadgeDirectoryModal)({
                                                                                    viewingCurrentUserBadges: !0,
                                                                                }));
                                                                        },
                                                                    }),
                                                                (0, l.jsx)(tR, { onClose: n, popoutContainerRef: E }),
                                                                Q &&
                                                                    (0, l.jsx)(nj, {
                                                                        popoutContainerRef: E,
                                                                        scrollerRef: U,
                                                                        shouldScrollIntoView: X,
                                                                        onCloseAccountPopout: n,
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, l.jsx)(na.A.Overlay, {
                                                        className: ek.g0,
                                                        children: (0, l.jsxs)(eF, {
                                                            children: [
                                                                (0, l.jsx)(eU, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eT.r,
                                                                    label: eL.intl.string(eL.t.oMNyYN),
                                                                    onClick: () => {
                                                                        (n(), (0, nH.A)());
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, l.jsx)(eD, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": eL.intl.string(eL.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: S,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    nu.p5 &&
                                                                    j &&
                                                                    (0, l.jsx)(eU, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eN.L,
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
                                    p?.profileEffect != null &&
                                        !V.current &&
                                        (0, l.jsx)(tM.A, { skuId: p.profileEffect.skuId, isHovering: _ }),
                                    null != F && (0, l.jsx)(tL.A, { frame: F, fadeIn: G }),
                                ],
                            }),
                            (0, l.jsx)(n3, { targetElementRef: D, onClose: n }),
                            (0, l.jsx)(t0, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var lo = n(201805),
    lu = n(209932),
    ld = n(655116),
    lc = n(365958),
    lm = n(342296),
    lh = n(852712),
    lf = n(389960),
    lp = n(173660),
    lg = n(616356),
    lA = n(734057),
    lv = n(629016),
    lx = n(186111),
    lE = n(718197),
    lC = n(495867),
    l_ = n(967198),
    ly = n(485296),
    lT = n(486020),
    lN = n(188567),
    lb = n(536194),
    lj = n(253400),
    lI = n(994314),
    lS = n(485599),
    lR = n(116833);
function lM(e) {
    let t = "progress" === e.variant,
        n = t
            ? {
                  title: eL.intl.string(eL.t.uwDBSq),
                  body: eL.intl.formatToPlainString(eL.t.Mk5nzZ, { count: e.newBadgeCount }),
              }
            : { title: eL.intl.string(eL.t["5GD53o"]), body: eL.intl.string(eL.t["2Rb7tE"]) };
    return (0, l.jsx)(nZ.A, {
        targetElementRef: e.targetElementRef,
        shouldShow: !0,
        position: "top",
        alignmentStrategy: "edge",
        align: "left",
        caretConfig: { align: "start" },
        size: "lg",
        graphic: {
            type: "dynamic",
            component: lR.DynamicGraphicComponent.BADGE_DIRECTORY_NUX,
            props: { hasProgress: t, badgeIconUrls: t ? e.badgeIconUrls : void 0 },
            aspectRatio: "21/9",
        },
        title: n.title,
        body: n.body,
        actions: [{ variant: "primary", text: eL.intl.string(eL.t.pHo9tZ), onClick: e.onPrimaryAction }],
        onRequestClose: e.onRequestClose,
    });
}
function lO(e) {
    let { variantProps: t, targetElementRef: n, markAsDismissed: i } = e;
    return (0, l.jsx)(lM, {
        ...t,
        onPrimaryAction: () => {
            (i(n1.i.TAKE_ACTION), (0, ej.openBadgeDirectoryModal)());
        },
        onRequestClose: () => i(n1.i.USER_DISMISS),
        targetElementRef: n,
    });
}
var lw = n(206248);
function lP(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: i, position: a, shouldShow: r = !0, children: s } = e,
        o = (0, e3.sw)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            s,
            r && o
                ? (0, l.jsx)(lw.H, {
                      targetElementRef: t,
                      title: eL.intl.string(tb.default.Qn21R6),
                      body: eL.intl.string(tb.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: a,
                      caretConfig: { align: "center" },
                      action: {
                          text: eL.intl.string(eL.t.RzWDqY),
                          onClick: function () {
                              (n(n1.i.TAKE_ACTION), i());
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
var lL = n(379848),
    lk = n(626584),
    lD = n(757036),
    lU = n(591179),
    lF = n(531685),
    lG = n(259065),
    lV = n(842671),
    lH = n(78294);
let lB = new lk.A("DisplayNameStylesFlywheelCoachmark");
function lW(e) {
    let { markAsDismissed: t, targetElementRef: n, children: a } = e,
        { analyticsLocations: r } = (0, P.Ay)(),
        s = (0, i.useRef)(null),
        o = (0, d.bG)([lF.A], () => lF.A.isFocused()),
        u = (0, lD.L)(tq.PremiumTypes.TIER_2),
        c = (0, lU.X)("DisplayNameStylesFlywheelCoachmark"),
        m = (0, i.useCallback)(() => {
            t(n1.i.TAKE_ACTION);
            let e = nD.default.getCurrentUser();
            c && null != e
                ? (0, t7.openUserProfileModal)({
                      userId: e.id,
                      sourceAnalyticsLocations: r,
                      onModalOpen: () => {
                          (0, lG.L)({ analyticsLocations: r, stackingBehavior: "stack" });
                      },
                  })
                : (0, e2.openUserSettings)(e1.X.PROFILE_PANEL, { analyticsLocations: r }, () => {
                      (0, lG.L)({ analyticsLocations: r });
                  });
        }, [t, r, c]),
        h = (0, i.useCallback)(() => {
            t(n1.i.USER_DISMISS);
        }, [t]);
    (0, i.useEffect)(() => {
        o && s.current?.paused ? s.current?.play().catch(lB.error) : o || s.current?.pause();
    }, [o]);
    let f = u ? [eL.intl.string(lV.default.TyUdka)] : [eL.intl.string(lV.default.dluV0R)];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            a,
            (0, l.jsx)(nZ.A, {
                targetElementRef: n,
                shouldShow: !0,
                onRequestClose: h,
                align: "right",
                position: "top",
                caretConfig: { align: "center" },
                gradientColor: "nitro-pink",
                graphic: { type: "video", ref: s, src: lH.A, aspectRatio: "21/9", loop: !0 },
                size: "lg",
                title: eL.intl.string(lV.default.cYwrp8),
                body: f,
                actions: [{ text: eL.intl.string(eL.t["4P5I8V"]), variant: "primary", onClick: m }],
            }),
        ],
    });
}
var lZ = n(45780),
    lz = n(696451),
    lK = n(71393),
    lq = n(685073),
    lY = n(73153);
let lQ = { lastSeenInfos: {} },
    l$ = lQ;
class lX extends d.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        l$ = e ?? lQ;
    }
    getState() {
        return l$;
    }
    getGuildLastSeenInfo(e) {
        return l$.lastSeenInfos[e] ?? null;
    }
}
let lJ = new lX(lY.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        l$.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        l$ = lQ;
    },
});
var l0 = n(514661);
let l1 = new lk.A("GuildTagAvailableCoachmark");
function l2(e) {
    let t = (0, d.bG)([lK.A], () => lK.A.getGuild(e.guildId));
    function n(n) {
        (t?.profile?.tag != null &&
            lY.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n));
    }
    let { isAdopting: i, onAdoptTag: a, onEditProfile: r } = (0, l0.A)(t?.id ?? null, () => n(n1.i.TAKE_ACTION));
    if (null == t || !(0, lq.q0)(t))
        return (l1.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children);
    let s = [
        { text: eL.intl.string(eL.t.jwEaiX), loading: i, onClick: a, variant: "primary" },
        { text: eL.intl.string(eL.t.s5vZlQ), onClick: r, variant: "secondary" },
    ];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            e.children,
            (0, l.jsx)(nZ.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: lR.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
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
function l3(e) {
    let t = (0, d.bG)([lK.A], () => lK.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: i, onAdoptTag: a, onEditProfile: r } = (0, l0.A)(t?.id ?? null, () => n(n1.i.TAKE_ACTION));
    if (null == t || !(0, lq.q0)(t))
        return (l1.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children);
    let s = [
        { text: eL.intl.string(eL.t.jwEaiX), loading: i, onClick: a, variant: "primary" },
        { text: eL.intl.string(eL.t.s5vZlQ), onClick: r, variant: "secondary" },
    ];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            e.children,
            (0, l.jsx)(nZ.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: lR.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
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
var l5 = n(843010),
    l6 = n(764231),
    l8 = n(208223);
function l7(e) {
    let { groupName: t, targetElementRef: n } = e,
        i = tY(),
        a = (0, d.bG)([tV.Ay], () => tV.Ay.useReducedMotion),
        r = (0, tH.A)((e) => e.isOpen),
        s = (0, l5.G)();
    return a || null == i || r || s
        ? null
        : (0, l.jsx)(lL.zJ, {
              contentType: c.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: a } = e;
                  return (0, l.jsx)(l4, {
                      recentlyLeveledTenureBadge: i,
                      markAsDismissed: a,
                      targetElementRef: n,
                      shouldShow: t === c.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function l4(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: a, shouldShow: r } = e,
        s = tq.sp.indexOf(t),
        o = (0, l8.I)(tq.sp[s > 0 ? s - 1 : s]).ambient,
        u = (0, i.useCallback)(() => {
            (n(n1.i.TAKE_ACTION),
                tH.A.setState({ shouldRenderTenureLevelUp: !0 }),
                lN._.dispatch(tT.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
        }, [n]),
        d = (0, i.useCallback)(() => {
            n(n1.i.USER_DISMISS);
        }, [n]),
        c = tq.VD[t],
        m = eL.intl.formatToPlainString(eL.t.ewkaVR, {
            timeMilestone: (0, l6.T)(c.id, c.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        h = [{ text: eL.intl.string(eL.t.RzWDqY), variant: "primary", onClick: u }];
    return (0, l.jsx)(nZ.A, {
        targetElementRef: a,
        onRequestClose: d,
        shouldShow: r,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: eL.intl.string(eL.t.VoDxsV),
        body: m,
        actions: h,
    });
}
var l9 = n(764014);
function ie(e) {
    let { targetElementRef: t } = e,
        n = (0, tH.A)((e) => e.isOpen),
        [i, a] = (0, tD.kn)(n ? [] : [c.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK], {
            groupName: n1.m.ACCOUNT_NAME_ZONE,
            bypassAutoDismiss: !0,
        });
    return i === c.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK
        ? (0, l.jsx)(nZ.A, {
              targetElementRef: t,
              graphic: { type: "image", src: l9.A },
              position: "top",
              alignmentStrategy: "edge",
              align: "left",
              caretConfig: { align: "start" },
              title: eL.intl.string(eL.t["Q+dH5r"]),
              body: eL.intl.string(eL.t.YKJw4W),
              onRequestClose: () => a(n1.i.USER_DISMISS),
              actions: [
                  {
                      text: eL.intl.string(eL.t.dcOuei),
                      onClick: function () {
                          (a(n1.i.TAKE_ACTION),
                              tH.A.setState({ shouldScrollToOrbsMenuItem: !0 }),
                              nT.Ay.setUserOpenedWalletViaProfileDCF(!0),
                              lN._.dispatch(tT.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
                      },
                  },
              ],
          })
        : null;
}
function it(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, lo.c9)(),
        i = null != e.targetElementRef.current && t && n,
        [a, r] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                l = (0, lZ.G$)(c.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? ""),
                i = (0, d.bG)(
                    [lK.A, nD.default, lz.Ay],
                    () => {
                        if (null === e) return !1;
                        let t = lK.A.getGuild(e);
                        if (void 0 === t || !(0, lq.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                        let n = nD.default.getCurrentUser();
                        if (
                            void 0 === n ||
                            (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                        )
                            return !1;
                        let l = lz.Ay.getMember(e, n.id);
                        return null != l && !l.isPending;
                    },
                    [e],
                );
            return (0, tD.ww)(i && n && !l ? [c.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? "null");
        })(e.guildId, { shouldShow: i }),
        [s, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                l = e?.primaryGuild,
                i = l?.identityGuildId ?? null,
                a = (0, d.bG)([lJ], () => (null === i ? null : lJ.getGuildLastSeenInfo(i))),
                r = (0, d.bG)([lK.A], () => lK.A.getGuild(i)?.profile?.tag),
                s = null != r && l?.identityGuildId === i && l?.tag === null,
                o = null != i && a?.tag === r,
                u = null !== i && s && !o;
            return (0, tD.Wl)(u && n ? c.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: i });
    return i
        ? a === c.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, l.jsx)(l3, {
                  guildId: e.guildId,
                  onDismiss: r,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : s === c.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, l.jsx)(l2, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(l7, { groupName: n1.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        e.isOrbchievementsEnabled && (0, l.jsx)(ie, { targetElementRef: e.targetElementRef }),
                        (0, l.jsx)(lL.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: n1.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: i } = t;
                                switch (n) {
                                    case c.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK:
                                        return (0, l.jsx)(lW, {
                                            markAsDismissed: i,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case c.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, l.jsx)(lP, {
                                            markAsDismissed: i,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: e8.p,
                                            children: e.children,
                                        });
                                    case c.M.BADGE_DIRECTORY_NUX_POPOVER:
                                        return (0, l.jsxs)(l.Fragment, {
                                            children: [
                                                e.children,
                                                (0, l.jsx)(lO, {
                                                    variantProps: e.badgeDirectoryNuxPopoverVariant,
                                                    markAsDismissed: i,
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
var il = n(348858),
    ii = n(615675),
    ia = n(900797),
    ir = n(847374),
    is = n(617354),
    io = n(96020),
    iu = n(42473),
    id = n(731854),
    ic = n(516171),
    im = n(577755);
function ih(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: a,
            onClick: s,
            iconForeground: o,
            nameplate: u,
            shouldShowOutputDeviceChangedTooltip: d,
            dismissTooltips: c,
        } = e,
        m = t || n,
        {
            Component: h,
            play: f,
            events: { onMouseEnter: g, onMouseLeave: A },
        } = (0, il.I)(m ? "undeafen" : "deafen"),
        v = n ? ii.T : h,
        { name: x } = (0, em.x5)(id.oh.AUDIO_OUTPUT),
        E = (0, is.A)(t, n, a),
        { analyticsLocations: C } = (0, P.Ay)(w.A.AUDIO_OUTPUT_BUTTON),
        _ = i.useRef(null);
    return (
        i.useEffect(() => () => f(), [m, f]),
        (0, l.jsx)(P.f5, {
            value: C,
            children: (0, l.jsx)(p.Y, {
                targetElementRef: _,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        c(),
                        (0, l.jsx)(P.f5, {
                            value: C,
                            children: (0, l.jsx)(io.A, {
                                onInteraction: (0, q.s)("AudioDeviceMenu", w.A.ACCOUNT),
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
                animation: p.Y.Animation.FADE,
                spacing: 4,
                children: (e, t) => {
                    let { onClick: i } = e,
                        { isShown: c } = t,
                        h = c ? ia.t : ir.a;
                    return (0, l.jsxs)("div", {
                        ref: _,
                        className: r()(ic.Lh, { [ic.v8]: m, [ic.q6]: c }),
                        children: [
                            (0, l.jsx)(iu.A, {
                                "aria-checked": m,
                                "aria-label": eL.intl.string(eL.t.wjcRFX),
                                className: ic.eT,
                                disabled: a,
                                icon: (0, l.jsx)(v, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: m ? nO.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: m ? im.o : void 0,
                                innerClassName: r()({ [im.T]: n }),
                                onClick: s,
                                onContextMenu: i,
                                onMouseEnter: g,
                                onMouseLeave: A,
                                plated: null != u,
                                redGlow: m,
                                role: "switch",
                                tooltipText: E,
                            }),
                            (0, l.jsx)(iu.A, {
                                className: r()(ic.UT, { [ic.q6]: c }),
                                disabled: a,
                                icon: (0, l.jsx)(h, {
                                    className: ic.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: m ? nO.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: i,
                                onContextMenu: i,
                                plated: null != u,
                                redGlow: m,
                                tooltipType: d ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: d,
                                tooltipPositionKey: d
                                    ? eL.intl.formatToPlainString(eL.t["f+DDY/"], { outputDeviceName: x })
                                    : void 0,
                                tooltipShouldShow: !c,
                                tooltipText: d
                                    ? eL.intl.format(eL.t["f+DDY/"], { outputDeviceName: x })
                                    : eL.intl.string(eL.t.aA4Vce),
                                "aria-label": d
                                    ? eL.intl.formatToPlainString(eL.t["f+DDY/"], { outputDeviceName: x })
                                    : eL.intl.string(eL.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var ip = n(523875),
    ig = n(666654),
    iA = n(993719);
let iv = {};
class ix extends d.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return iv[e] ?? !1;
    }
}
let iE = new ix(lY.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        iv[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        iv[t] = !1;
    },
});
var iC = n(362823),
    i_ = n(980923),
    iy = n(796262),
    iT = n(222176),
    iN = n(973324);
function ib(e) {
    let t,
        {
            selfMute: n,
            serverMute: a,
            suppress: s,
            awaitingRemote: o,
            iconForeground: u,
            onMouseEnter: c,
            onMouseLeave: m,
            onClick: h,
            nameplate: f,
            shouldShowSpeakingWhileMutedTooltip: g,
            shouldShowSpeakingWhilePTTTooltip: A,
            shouldShowInputDeviceChangedTooltip: v,
            shouldShowPTTJoinTooltip: x,
            dismissTooltips: E,
            speaking: C,
        } = e,
        _ = (0, d.bG)([lE.Ay], () => lE.Ay.getMode() === id.TB.PUSH_TO_TALK),
        y = (0, d.bG)([lE.Ay], () => lE.Ay.getSettings().modeOptions.shortcut),
        T = (0, d.bG)([iE], () => iE.getIsTutorialActive(iC.v.MUTE_TUTORIAL)),
        N = (0, d.bG)([lC.A], () => null != lC.A.getChannelId()),
        { name: b } = (0, em.x5)(id.oh.AUDIO_INPUT),
        { enabledInputProfiles: j } = (0, lh.d)({ location: "MicrophoneButton" }),
        I = i.useRef(null),
        S = n || s || a,
        R = (0, ip.L)(S ? "unmute" : "mute"),
        { analyticsLocations: M } = (0, P.Ay)(w.A.AUDIO_INPUT_BUTTON),
        { Component: O, events: L, play: k } = R,
        D = a || s ? ig.O : O;
    i.useEffect(() => () => k(), [S, k]);
    let U = (0, i_.A)(n, a, s, o);
    t = g
        ? { tooltipType: "green_void_do_not_use", tooltipText: eL.intl.string(eL.t["29gnR4"]), tooltipForceOpen: !0 }
        : x || A
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: eL.intl.format(eL.t.c1qUOQ, { keybind: ts.dI(y).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: U };
    let F = _ && N,
        G = S ? nO.A.colors.ICON_VOICE_MUTED : "currentColor",
        V = i.useCallback(() => {
            (h(), T && iA.N(iC.v.MUTE_TUTORIAL));
        }, [h, T]);
    return (0, l.jsxs)(P.f5, {
        value: M,
        children: [
            (0, l.jsx)(p.Y, {
                targetElementRef: I,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        E(),
                        (0, l.jsx)(P.f5, {
                            value: M,
                            children: (0, l.jsx)(io.A, {
                                onInteraction: (0, q.s)("AudioDeviceMenu", w.A.ACCOUNT),
                                onClose: t,
                                maybeRenderPTTCheckbox: !0,
                                renderInputProfiles: j.length > 0,
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
                    let { onClick: i } = e,
                        { isShown: a } = n,
                        s = a ? ia.t : ir.a;
                    return (0, l.jsxs)("div", {
                        ref: I,
                        className: r()(ic.Lh, { [ic.v8]: S, [ic.q6]: a }),
                        children: [
                            (0, l.jsx)(iu.A, {
                                "aria-checked": S,
                                "aria-label": eL.intl.string(eL.t.w4m945),
                                className: ic.eT,
                                disabled: o,
                                icon: (0, l.jsx)(D, { size: "custom", width: 20, height: 20, color: G, className: u }),
                                onClick: V,
                                onContextMenu: i,
                                onMouseEnter: () => {
                                    (c(), L.onMouseEnter());
                                },
                                onMouseLeave: () => {
                                    (m(), L.onMouseLeave());
                                },
                                plated: null != f,
                                redGlow: S,
                                role: "switch",
                                ...t,
                                children: F ? (0, l.jsx)("div", { className: r()(iT.U, { [iT.z]: C }) }) : null,
                            }),
                            (0, l.jsx)(iu.A, {
                                "aria-label": v
                                    ? eL.intl.formatToPlainString(eL.t["18wnuD"], { inputDeviceName: b })
                                    : eL.intl.string(eL.t.fRzCbB),
                                className: r()(ic.UT, { [ic.q6]: a }),
                                disabled: o,
                                icon: (0, l.jsx)(s, {
                                    className: ic.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: G,
                                }),
                                onClick: i,
                                onContextMenu: i,
                                onMouseEnter: c,
                                onMouseLeave: m,
                                plated: null != f,
                                redGlow: S,
                                tooltipType: v ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: v,
                                tooltipPositionKey: v
                                    ? eL.intl.formatToPlainString(eL.t["18wnuD"], { inputDeviceName: b })
                                    : void 0,
                                tooltipShouldShow: !a,
                                tooltipText: v
                                    ? eL.intl.format(eL.t["18wnuD"], { inputDeviceName: b })
                                    : eL.intl.string(eL.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, l.jsx)(nZ.A, {
                targetElementRef: I,
                shouldShow: T,
                graphic: { type: "image", src: iN.A },
                onRequestClose: () => {
                    iA.N(iC.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: eL.intl.string(iy.default.VG4zAf),
                body: eL.intl.string(iy.default["8VIRzR"]),
            }),
        ],
    });
}
var ij = n(935399),
    iI = n(505312),
    iS = n(848847),
    iR = n(975807),
    iM = n(425565),
    iO = n(321671);
function iw(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        a = i.useMemo(
            () => [
                {
                    text: eL.intl.string(iO.default["j4n5/K"]),
                    variant: "primary",
                    onClick: () => {
                        ((0, iR.A)(iM.C), t(n1.i.TAKE_ACTION));
                    },
                },
            ],
            [t],
        ),
        r = i.useCallback(() => {
            t(n1.i.USER_DISMISS);
        }, [t]);
    return (0, l.jsx)(nZ.A, {
        targetElementRef: n,
        size: "video",
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/147b33df1db170b53e140d7ad45552731aa0b9b16b7a7358cb9916634167ee02.png",
            aspectRatio: "16/9",
        },
        title: eL.intl.string(iO.default.tmst3F),
        body: eL.intl.string(iO.default.sJHQqC),
        position: "top",
        caretConfig: { align: "end" },
        actions: a,
        onRequestClose: r,
    });
}
function iP(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        { analyticsLocations: i } = (0, P.Ay)(w.A.HOLIDAY_COACHMARK);
    return (0, l.jsx)(nZ.A, {
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
                    ((0, e2.openUserSettings)(e1.X.NOTIFICATION_HOLIDAY_SOUNDPACK, { analyticsLocations: i }),
                        t(n1.i.TAKE_ACTION));
                },
            },
        ],
        gradientColor: "purple",
        onRequestClose: () => t(n1.i.USER_DISMISS),
    });
}
var iL = n(88001),
    ik = n(107198),
    iD = n(438705);
function iU(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: a } = e,
        r = i.useCallback(() => {
            (a(), (0, e2.openUserSettings)(e1.X.SUBSCRIPTIONS_PANEL));
        }, [a]);
    return (0, l.jsx)(nZ.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: iD },
        shouldShow: n,
        title: eL.intl.format(ik.default.bx8sR9, { premiumGroupProductName: (0, iL.DP)() }),
        body: eL.intl.format(ik.default.Pw4OFZ, { premiumGroupProductName: (0, iL.DP)() }),
        onRequestClose: a,
        actions: [{ text: eL.intl.string(ik.default.DD26QR), onClick: r }],
    });
}
var iF = n(873298),
    iG = n(840387);
function iV(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        a = (0, iG.Z)(),
        r = np.KP.useSetting(),
        s = a && r !== iF.KP.FRIENDS_AND_ALL_GUILDS,
        o = i.useCallback(() => {
            (t(n1.i.TAKE_ACTION), (0, e2.openUserSettings)(e1.X.PROFILE_PRIVACY_CATEGORY));
        }, [t]),
        u = i.useCallback(() => {
            t(n1.i.USER_DISMISS);
        }, [t]),
        d = s
            ? r === iF.KP.FRIENDS_ONLY
                ? eL.intl.string(eL.t["/hogEy"])
                : eL.intl.string(eL.t["6hEfm1"])
            : eL.intl.string(eL.t.bnNxW1);
    return (0, l.jsx)(nZ.A, {
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
        body: d,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: eL.intl.string(eL.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
var iH = n(415443);
function iB(e) {
    let t,
        n,
        {
            webBuildOverride: a,
            onClick: r,
            onContextMenu: s,
            dismissibleContents: o,
            iconForeground: u,
            nameplate: d,
        } = e,
        m = i.useRef(null),
        [h, f] = i.useState(!1);
    (0, ij.Ay)(() => {
        function e() {
            return f(!0);
        }
        return (
            lN._.subscribe(tT.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                lN._.unsubscribe(tT.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let p = i.useCallback(() => {
            (f(!1), r());
        }, [r]),
        g = ed.A.coachmarkDismissibleContent;
    if (null != a) {
        let e = (0, iH.A)("1793810071327", !0);
        t =
            null != e
                ? eL.intl.formatToPlainString(eL.t.wve4kg, { webBuildOverride: a.id, builtAt: e })
                : eL.intl.formatToPlainString(eL.t.Gzh6ZP, { webBuildOverride: a.id });
    } else t = eL.intl.string(eL.t.cduTBL);
    let A = tt.SettingsIcon,
        v = (0, iI.w)();
    return (
        (A = null != a ? iS.H : v.Component),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(iu.A, {
                    ref: m,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: p,
                    onContextMenu: s,
                    "aria-label": eL.intl.string(eL.t.cduTBL),
                    icon: (0, l.jsx)(A, { size: "refresh_sm", color: "currentColor", className: u }),
                    ...v.events,
                    plated: null != d,
                }),
                (0, l.jsx)(iU, { targetElementRef: m, shouldShow: h, onDismiss: () => f(!1) }),
                (0, l.jsx)(lL.Ay, {
                    contentTypes: o,
                    groupName: n1.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === c.M.TINY_BRONCO && null != j.PL
                            ? (0, l.jsx)(i.Suspense, {
                                  fallback: null,
                                  children: (0, l.jsx)(j.PL, { markAsDismissed: n, targetElementRef: m }),
                              })
                            : t === c.M.PRIVATE_PROFILE_COACHMARK
                              ? (0, l.jsx)(iV, { markAsDismissed: n, targetElementRef: m })
                              : t === c.M.GIFT_CARDS_MARKETING_COACHMARK
                                ? (0, l.jsx)(iw, { markAsDismissed: n, targetElementRef: m })
                                : null != g && t === g
                                  ? (0, l.jsx)(iP, { markAsDismissed: n, targetElementRef: m })
                                  : null;
                    },
                }),
            ],
        })
    );
}
var iW = n(358285);
let iZ = lj.Ay.getEnableHardwareAcceleration() ? h.Js : h.eu,
    iz = 2.5 * D.A.Millis.SECOND,
    iK = 2 * D.A.Millis.MINUTE,
    iq = 5 * D.A.Millis.SECOND;
function iY(e) {
    let {
            ref: t,
            speaking: n,
            playingSoundboard: a,
            voiceDb: s = -1 / 0,
            streaming: o,
            currentUser: u,
            status: d,
            handleClick: c,
            handleMouseLeave: m,
            renderNameTag: h,
            nameplate: A,
            avatarDecoration: v,
            "data-jump-section": x,
        } = e,
        E = i.useRef(null),
        _ = t ?? E,
        y = (0, lT.F_)({ avatarDecoration: v, size: (0, Q.Te)(f._3.SIZE_32) }),
        N = (0, en.A)(),
        {
            updateOpenPopoutRef: b,
            highlightBadge: j,
            setHighlightBadge: I,
        } = (function () {
            let e = i.useRef(null),
                t = i.useCallback((t) => {
                    e.current = () => {
                        (t.onMouseDown(), t.onClick());
                    };
                }, []),
                [n, l] = i.useState(),
                [a, r] = i.useState(!1);
            return (
                (0, T.A)(() => r(!0), 750),
                i.useEffect(() => {
                    function t(t) {
                        let { highlightBadge: n } = t;
                        (null != n && l(n), e.current?.());
                    }
                    return (
                        lN._.subscribe(tT.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            lN._.unsubscribe(tT.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: a ? n : void 0, setHighlightBadge: l }
            );
        })(),
        S = (0, X.K)(A);
    return null == u
        ? null
        : (0, l.jsx)(C.A, {
              object: tT.ZSU.AVATAR,
              children: (0, l.jsx)(lm.A, {
                  user: u,
                  targetElementRef: _,
                  clickTrap: !0,
                  preload: () =>
                      (0, lc.A)(u.id, u.getAvatarURL(void 0, lm.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: i } = e;
                      return (0, l.jsx)(ls, {
                          currentUser: u,
                          highlightBadge: j,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: i,
                          className: iW.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: p.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      (m(), I(void 0));
                  },
                  children: (e) => {
                      b(e);
                      let { onMouseEnter: t, onMouseDown: i, ...m } = e;
                      return (0, l.jsxs)("div", {
                          ref: _,
                          style: S,
                          onMouseEnter: t,
                          onMouseDown: i,
                          onClick: (t) => {
                              (e.onClick?.(t), c?.(t));
                          },
                          className: r()(iW.Q9, { [iW.ZQ]: null != A }),
                          children: [
                              (0, l.jsx)(g.D, {
                                  ...m,
                                  onClick: (t) => {
                                      (t.stopPropagation(), e.onClick?.(t), c?.(t));
                                  },
                                  "aria-label": eL.intl.string(eL.t["5fWB8U"]),
                                  focusProps: { ringTarget: _ },
                                  className: iW.$n,
                                  "data-jump-section": x,
                              }),
                              (0, l.jsx)(iZ, {
                                  size: f._3.SIZE_32,
                                  src: u.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: y,
                                  status: o ? tT.clD.STREAMING : d,
                                  voiceStatus: (0, f.n$)(n, a),
                                  voiceDb: s,
                                  className: iW.my,
                                  "aria-hidden": !0,
                              }),
                              (0, l.jsx)("div", { className: iW.oM, children: h(N) }),
                          ],
                      });
                  },
              }),
          });
}
class iQ extends i.PureComponent {
    speakingWhileMutedTooltipTimeout = new m.Ep();
    lastSpeakingWhileMutedNotificationTime = void 0;
    state = { hovered: !1, shouldShowNametagTooltip: !1, shouldShowSpeakingWhileMutedTooltip: !1, hoveringOnMute: !1 };
    containerRef = i.createRef();
    avatarWithPopoutRef = i.createRef();
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, occluded: n } = e,
            { speakingWhileMuted: l, occluded: i } = this.props;
        (i !== n && this.handleOccludedChanged(), l !== t && this.handleSpeakingWhileMutedChanged());
    }
    componentWillUnmount() {
        this.speakingWhileMutedTooltipTimeout.stop();
    }
    handleToggleSelfMute = () => {
        let { serverMute: e, suppress: t, selfMute: n } = this.props;
        ((0, z.A)(e, t, tT.JJy.ACCOUNT_PANEL), (0, K.XJ)(w.A.ACCOUNT, K.OP.MIC, n));
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        ((0, Z.A)(e, tT.JJy.ACCOUNT_PANEL), (0, K.XJ)(w.A.ACCOUNT, K.OP.DEAFEN, !t));
    };
    handleOpenAccountSettings = () => {
        (this.dismissTooltips(),
            lC.A.isConnected() ? (0, e2.openUserSettings)(e1.X.VOICE_AND_VIDEO_PANEL) : (0, e2.openUserSettings)());
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, E.L3)(e, async () => {
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
                    n.e(363874),
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
                    n.e(533781),
                    n.e(328276),
                    n.e(592e3),
                    n.e(524434),
                    n.e(854326),
                    n.e(984),
                    n.e(226229),
                    n.e(981833),
                    n.e(614929),
                    n.e(570473),
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
                    n.e(553627),
                    n.e(59599),
                    n.e(46238),
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
                    n.e(794638),
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
                    n.e(135144),
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
                    n.e(373122),
                    n.e(649408),
                    n.e(221856),
                    n.e(186212),
                    n.e(755936),
                    n.e(147662),
                    n.e(312820),
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
                    n.e(591538),
                    n.e(576909),
                    n.e(830228),
                    n.e(27355),
                    n.e(953665),
                    n.e(406174),
                    n.e(481647),
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
                    n.e(844780),
                    n.e(811310),
                    n.e(571210),
                    n.e(572963),
                    n.e(676418),
                    n.e(70833),
                    n.e(897073),
                    n.e(648365),
                    n.e(166495),
                    n.e(521930),
                    n.e(307575),
                    n.e(88342),
                    n.e(49782),
                    n.e(570849),
                    n.e(45072),
                    n.e(942724),
                    n.e(139970),
                    n.e(173764),
                    n.e(940258),
                    n.e(858164),
                    n.e(357688),
                    n.e(308555),
                    n.e(323624),
                    n.e(977547),
                    n.e(554241),
                    n.e(311802),
                    n.e(724303),
                    n.e(698965),
                    n.e(885434),
                    n.e(53102),
                    n.e(586127),
                    n.e(470068),
                    n.e(179049),
                    n.e(132737),
                    n.e(146070),
                    n.e(344502),
                    n.e(88599),
                    n.e(836863),
                    n.e(382563),
                    n.e(203589),
                    n.e(854622),
                    n.e(95340),
                    n.e(629482),
                    n.e(590365),
                    n.e(989088),
                    n.e(37977),
                    n.e(136149),
                    n.e(354044),
                    n.e(817989),
                    n.e(437065),
                    n.e(720590),
                    n.e(709640),
                    n.e(235313),
                    n.e(147626),
                    n.e(613867),
                    n.e(952548),
                    n.e(585503),
                    n.e(636373),
                    n.e(382465),
                    n.e(294857),
                    n.e(230664),
                    n.e(15481),
                    n.e(179745),
                    n.e(655708),
                    n.e(676156),
                    n.e(553984),
                    n.e(335395),
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
                    n.e(170104),
                    n.e(491793),
                    n.e(902564),
                    n.e(428967),
                    n.e(275716),
                    n.e(704727),
                    n.e(174025),
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
                    n.e(695358),
                    n.e(767837),
                    n.e(579245),
                    n.e(473384),
                    n.e(432209),
                    n.e(996868),
                    n.e(368062),
                    n.e(859991),
                    n.e(603998),
                    n.e(823300),
                    n.e(709371),
                    n.e(599719),
                    n.e(136204),
                    n.e(531741),
                    n.e(939171),
                    n.e(987478),
                    n.e(465157),
                    n.e(490010),
                    n.e(252229),
                    n.e(523276),
                    n.e(77473),
                    n.e(550033),
                    n.e(692513),
                    n.e(916758),
                    n.e(691671),
                    n.e(812042),
                    n.e(612287),
                    n.e(547801),
                    n.e(720064),
                    n.e(460773),
                    n.e(729963),
                    n.e(793438),
                    n.e(830938),
                    n.e(208018),
                    n.e(589916),
                    n.e(538513),
                    n.e(305557),
                    n.e(919726),
                    n.e(36227),
                    n.e(104202),
                    n.e(975933),
                    n.e(325047),
                    n.e(907424),
                    n.e(50097),
                    n.e(229666),
                    n.e(188545),
                    n.e(92295),
                    n.e(848625),
                    n.e(458273),
                    n.e(298107),
                    n.e(968763),
                    n.e(163069),
                    n.e(883952),
                    n.e(26001),
                    n.e(159957),
                    n.e(526778),
                    n.e(838056),
                    n.e(590814),
                    n.e(414591),
                    n.e(652111),
                    n.e(144179),
                    n.e(258709),
                    n.e(819193),
                    n.e(896804),
                    n.e(708536),
                    n.e(411353),
                    n.e(508829),
                    n.e(203930),
                    n.e(935948),
                    n.e(903663),
                    n.e(741111),
                    n.e(954289),
                    n.e(295998),
                    n.e(480945),
                    n.e(201243),
                    n.e(215920),
                    n.e(246969),
                    n.e(356675),
                    n.e(664702),
                    n.e(228850),
                    n.e(566976),
                    n.e(437961),
                    n.e(908081),
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
                    n.e(780407),
                    n.e(574678),
                    n.e(462010),
                    n.e(781949),
                    n.e(66580),
                    n.e(504098),
                    n.e(78465),
                    n.e(746479),
                    n.e(872893),
                    n.e(127659),
                    n.e(557940),
                    n.e(341701),
                    n.e(9205),
                    n.e(42834),
                    n.e(144989),
                    n.e(604172),
                    n.e(468083),
                    n.e(548730),
                    n.e(871467),
                    n.e(992478),
                    n.e(276814),
                    n.e(568881),
                    n.e(51892),
                    n.e(841838),
                    n.e(830351),
                    n.e(396854),
                    n.e(225612),
                    n.e(350949),
                    n.e(763096),
                    n.e(472789),
                    n.e(967874),
                    n.e(137937),
                    n.e(760989),
                    n.e(79216),
                    n.e(803191),
                    n.e(369501),
                    n.e(303710),
                    n.e(949013),
                    n.e(860003),
                    n.e(396325),
                    n.e(808979),
                    n.e(749736),
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
                    n.e(102657),
                    n.e(576415),
                    n.e(983947),
                    n.e(944727),
                    n.e(705871),
                    n.e(527462),
                    n.e(501888),
                    n.e(186546),
                    n.e(960816),
                    n.e(168031),
                    n.e(271203),
                    n.e(932011),
                    n.e(384820),
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
                    n.e(483518),
                    n.e(185928),
                    n.e(454085),
                    n.e(531997),
                    n.e(649351),
                    n.e(809940),
                    n.e(798384),
                    n.e(787462),
                    n.e(986629),
                    n.e(943534),
                    n.e(124564),
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
                    n.e(791602),
                    n.e(352351),
                    n.e(734090),
                    n.e(311525),
                    n.e(671710),
                    n.e(483102),
                    n.e(580890),
                    n.e(902552),
                    n.e(689588),
                    n.e(524084),
                    n.e(44264),
                    n.e(821403),
                    n.e(444790),
                    n.e(87641),
                    n.e(874913),
                    n.e(488292),
                    n.e(239734),
                    n.e(515818),
                    n.e(645671),
                    n.e(214451),
                    n.e(993720),
                    n.e(654658),
                    n.e(175481),
                    n.e(233049),
                    n.e(569443),
                    n.e(439518),
                    n.e(543456),
                    n.e(908501),
                ]).then(n.bind(n, 351988));
                return (t) =>
                    (0, l.jsx)(e, { ...t, onClose: E.Z_, onInteraction: (0, q.s)("UserSettingsMenu", w.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, q.s)("AudioDeviceMenu", w.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        (this.dismissTooltips(),
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e(360536), n.e(678827)]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, lh.d)({ location: "Account" });
                    return (0, l.jsx)(P.f5, {
                        value: t,
                        children: (0, l.jsx)(e, {
                            onClose: E.Z_,
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
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e(360536), n.e(678827)]).then(n.bind(n, 385318));
                return () =>
                    (0, l.jsx)(P.f5, {
                        value: t,
                        children: (0, l.jsx)(e, {
                            onClose: E.Z_,
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
                speakingWhileMuted: l,
                occluded: i,
                deviceChangedTooltipType: a,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            s =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > iK;
        l
            ? r ||
              !e ||
              t ||
              n ||
              i ||
              !s ||
              null != a ||
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                  ((this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(iz, () =>
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
                currentUser: i,
                status: a,
                userTag: r,
                voiceChannel: s,
            } = this.props;
        if (null == i) return null;
        if ((0, N.A)({ activities: t, status: a, applicationStream: n, voiceChannel: s }))
            return (0, l.jsxs)(O.A, {
                hoverText: r,
                forceHover: e,
                children: [
                    (0, l.jsx)(A.A, { children: nd.Ay.humanizeStatus(a) }),
                    (0, l.jsx)(b.A, {
                        user: i,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: s,
                        textClassName: iW.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let o = t?.find((e) => {
            let { type: t } = e;
            return t === u.$.CUSTOM_STATUS;
        });
        return null != o
            ? (0, l.jsxs)(O.A, {
                  hoverText: r,
                  forceHover: e,
                  children: [
                      (0, l.jsx)(A.A, { children: nd.Ay.humanizeStatus(a) }),
                      (0, l.jsx)(et.A, { activity: o, emojiClassName: iW.Zg, className: iW.WO }),
                  ],
              })
            : null != a && a !== tT.clD.UNKNOWN && i.hasUniqueUsername()
              ? (0, l.jsx)(O.A, {
                    hoverText: r,
                    forceHover: e,
                    children: (0, l.jsx)(M, { text: nd.Ay.humanizeStatus(a) }),
                })
              : r;
    }
    renderNameTag = (e) => {
        let { currentUser: t, username: n } = this.props;
        return null == t
            ? null
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)("div", {
                          className: iW.eW,
                          children: (0, l.jsx)(lS.A, {
                              className: r()({ [iW.e8]: null != e }),
                              children: (0, l.jsx)(ei.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? el.G.ANIMATED : el.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, l.jsx)("div", {
                          className: iW.XP,
                          children: (0, l.jsx)(lI.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let {
            badgeDirectoryNuxPopoverVariant: t,
            currentUser: n,
            dismissibleContents: i,
            isOrbchievementsEnabled: a,
        } = this.props;
        return null == n
            ? null
            : (0, l.jsx)(it, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: n,
                  targetElementRef: this.avatarWithPopoutRef,
                  badgeDirectoryNuxPopoverVariant: t,
                  additionalDCs: i.avatar,
                  isOrbchievementsEnabled: a,
                  children: (0, l.jsx)(iY, {
                      ...this.props,
                      ref: this.avatarWithPopoutRef,
                      handleMouseLeave: this.handleMouseLeave,
                      renderNameTag: this.renderNameTag,
                      "data-jump-section": e["data-jump-section"],
                  }),
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: i, isListenAlongVisible: a } = this.props,
            s = this.state.hovered;
        return null == e
            ? null
            : (0, l.jsx)(v.sk, {
                  children: (e) =>
                      (0, l.jsxs)("div", {
                          ref: this.containerRef,
                          className: r()(iW.kL, { [iW.UG]: null != n, [iW.bc]: !i, [iW.G5]: a }),
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              (0, l.jsx)(ee.A, { nameplate: t, hovered: s, placement: J.u.ACCOUNT }),
                              this.renderNameZone(e),
                              (0, l.jsx)(i$, {
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
function i$(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: a,
            serverMute: r,
            serverDeaf: s,
            suppress: o,
            shouldShowSpeakingWhileMutedTooltip: u,
            webBuildOverride: d,
            handleMouseEnterMute: c,
            handleMouseLeaveMute: m,
            handleToggleSelfDeaf: h,
            handleToggleSelfMute: f,
            handleInputAudioContextMenu: p,
            handleOutputAudioContextMenu: g,
            handleOpenAccountSettings: A,
            handleOpenSettingsContextMenu: v,
            dismissibleContents: x,
            occluded: E,
            nameplate: C,
            accountContainerRef: _,
            deviceChangedTooltipType: y,
            dismissTooltips: T,
            speaking: N,
        } = e,
        b = (0, X.K)(C);
    function I() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return (0, l.jsx)(iB, {
            webBuildOverride: d,
            onClick: A,
            onContextMenu: v,
            dismissibleContents: [...x.settings, ...e],
            iconForeground: null != C ? iW.t4 : void 0,
            nameplate: C,
        });
    }
    return (0, l.jsxs)("div", {
        className: iW.Uo,
        style: b,
        children: [
            (0, l.jsx)(ib, {
                accountContainerRef: _,
                selfMute: n,
                serverMute: r,
                suppress: o,
                awaitingRemote: a,
                onMouseEnter: c,
                onMouseLeave: m,
                onClick: f,
                onContextMenu: p,
                iconForeground: null != C ? iW.t4 : void 0,
                nameplate: C,
                shouldShowSpeakingWhileMutedTooltip: u,
                shouldShowInputDeviceChangedTooltip: !u && "input" === y,
                dismissTooltips: T,
                speaking: N,
            }),
            (0, l.jsx)(ih, {
                selfDeaf: t,
                serverDeaf: s,
                onClick: h,
                onContextMenu: g,
                awaitingRemote: a,
                iconForeground: null != C ? iW.t4 : void 0,
                nameplate: C,
                shouldShowOutputDeviceChangedTooltip: "output" === y,
                dismissTooltips: T,
            }),
            null != j.Lf
                ? (0, l.jsx)(i.Suspense, { fallback: I(), children: (0, l.jsx)(j.Lf, { occluded: E, children: I }) })
                : I(),
        ],
    });
}
function iX(e) {
    let t = (0, d.bG)([lC.A], () => null != lC.A.getChannelId()),
        n = (0, em.Py)(e),
        l = i.useRef(new m.Ep()),
        [a, r] = i.useState(!1);
    i.useEffect(() => {
        t &&
            n &&
            (r(!0),
            l.current.start(iq, () => {
                r(!1);
            }));
    }, [t, n]);
    let s = i.useCallback(() => {
        (r(!1), l.current.stop());
    }, []);
    return (
        (0, y.l0)(() => {
            l.current.stop();
        }),
        { shouldShowTooltip: a, dismissTooltip: s }
    );
}
function iJ() {
    let e,
        t,
        n,
        a,
        r = (0, d.bG)([nD.default], () => nD.default.getCurrentUser()),
        s = (0, d.bG)([nJ.default], () => nJ.default.getId()),
        {
            activities: m,
            streaming: h,
            status: f,
        } = (0, d.cf)([n5.A], () => {
            let e = n5.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === u.$.STREAMING;
                    }),
                status: n5.A.getStatus(),
            };
        }),
        p = (0, d.bG)([lg.A], () => lg.A.getAnyStreamForUser(s)),
        g = (0, _.A)({ userId: s }),
        A = (0, d.bG)([lu.A], () => lu.A.isUserPlayingSounds(s)),
        v = (0, d.bG)([ly.A], () => ly.A.getVoiceVolume(s)),
        E = nd.Ay.useUserTag(r, { decoration: "never" }),
        C = (0, d.bG)([lC.A, lA.A], () => {
            let e = lC.A.getChannelId();
            return null != e ? lA.A.getChannel(e) : null;
        }),
        { mute: y, selfMute: T, suppress: N } = (0, lp.A)(C),
        { selfDeaf: b, deaf: j } = (0, lf.A)(C),
        I = (0, d.bG)([H.A], () => ((0, B.kK)() ? H.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        S = (0, d.bG)([lE.Ay], () => lE.Ay.getSpeakingWhileMuted()),
        R = (0, d.bG)([W.A], () => W.A.isFullscreenInContext()),
        M = (0, d.bG)([lx.A], () => lx.A.hasLayers()),
        O = (0, x.re)(x.DX) || M || lb.P.isDisallowPopupsSet() || R,
        Z = (0, d.bG)([ea.default], () => null != ea.default.getAwaitingRemoteSessionInfo()),
        z = (0, d.bG)([l_.A], () => l_.A.getGuildId()),
        K = r?.avatarDecoration,
        q = (0, Y.A)(K),
        Q = nd.Ay.useName(r) ?? "",
        { analyticsLocations: X } = (0, P.Ay)(w.A.ACCOUNT),
        J = (0, $.r)({ user: r, guildId: void 0 }),
        { isQuestBarEmpty: ee } = (0, lo.c9)(),
        et = (0, d.bG)([ld.A, nD.default, lv.A], () => {
            let e,
                t = ld.A.getSyncingWith(),
                n = ld.A.getActivity(),
                l = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (l = o()(Array.from(lv.A.getParty(e) ?? []))
                        .map((e) => nD.default.getUser(e))
                        .filter(nR.Vq)
                        .value()),
                l.length > 1
            );
        }),
        en = { avatar: [], settings: [] },
        el = (0, ng.Hy)({ location: "Account" }) && !O,
        ei = ec.A.useIsEligible(),
        em = ed.A.coachmarkDismissibleContent,
        eh = (0, L.d)({ location: "AccountCoachmark" }),
        ef =
            ((e = (0, d.bG)([es.A], () => es.A.hasLoaded(eu.oD.PRELOADED_USER_SETTINGS))),
            (t = (0, er.HX)(c.M.GIFT_CARDS_MARKETING_COACHMARK)),
            (n = e && !t),
            (a = (0, eo.y)({ location: "AccountCoachmark", countGiftCardWallet: !0, canFetchPaymentSources: n })),
            n && a),
        ep = (function (e) {
            let { currentUserId: t, enabled: n, fetchCatalog: l = !0 } = e,
                a = n ? t : null,
                r = (0, d.bG)([G.Ay], () => null != a && G.Ay.hasCatalogFor(a), [a]),
                s = (0, d.bG)([G.Ay], () => null != a && G.Ay.hasCatalogFetchErrorFor(a), [a]),
                [o] = i.useState(() => new k.A(5 * D.A.Millis.SECOND, 5 * D.A.Millis.MINUTE)),
                u = i.useRef(null);
            i.useEffect(() => {
                if (null != a && l) {
                    if (r) return void o.succeed();
                    if (s) {
                        if (o.fails >= 3) return;
                        return (o.fail(() => (0, U.RS)(a, { isRetry: !0 })), () => o.cancel());
                    }
                    u.current !== a && ((u.current = a), (0, U.RS)(a));
                }
            }, [a, l, r, s, o]);
            let c = (0, d.bG)(
                    [G.Ay],
                    () => (null != a ? G.Ay.getBadges(a).filter((e) => V.sC.has(e.badge_id) && e.owned).length : 0),
                    [a],
                ),
                m = (0, d.yK)([G.Ay], () => (null != a ? (0, F.z)(G.Ay.getBadges(a)) : []), [a]),
                h = i.useMemo(
                    () =>
                        null != a && r
                            ? c > 0
                                ? { variant: "progress", newBadgeCount: c, badgeIconUrls: m }
                                : { variant: "no-progress" }
                            : null,
                    [a, r, c, m],
                ),
                f = l && o.fails < 3;
            return { variantProps: h, isPending: null != a && !r && (!s || f) };
        })({ currentUserId: r?.id, enabled: eh }).variantProps;
    O ||
        (en.avatar.push(c.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
        null != ep && en.avatar.push(c.M.BADGE_DIRECTORY_NUX_POPOVER),
        ei && null != em && en.settings.push(em),
        ef && en.settings.push(c.M.GIFT_CARDS_MARKETING_COACHMARK),
        en.settings.push(c.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: eg, dismissTooltip: eA } = iX(id.oh.AUDIO_INPUT),
        { shouldShowTooltip: ev, dismissTooltip: ex } = iX(id.oh.AUDIO_OUTPUT),
        eE = i.useMemo(() => (eg ? "input" : ev ? "output" : void 0), [eg, ev]),
        eC = i.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        eA();
                        break;
                    case "output":
                        ex();
                }
            },
            [eA, ex],
        );
    return (0, l.jsx)(P.f5, {
        value: X,
        children: (0, l.jsx)(iQ, {
            currentUser: r,
            username: Q,
            activities: m,
            applicationStream: p,
            voiceChannel: C,
            dismissibleContents: en,
            badgeDirectoryNuxPopoverVariant: ep,
            isOrbchievementsEnabled: el,
            userTag: E,
            occluded: O,
            selfDeaf: b,
            selfMute: T,
            serverDeaf: j,
            serverMute: y,
            speaking: g,
            playingSoundboard: A,
            voiceDb: v,
            speakingWhileMuted: S,
            status: f,
            streaming: h,
            suppress: N,
            webBuildOverride: I,
            awaitingRemote: Z,
            nameplate: J,
            selectedGuildId: z,
            avatarDecoration: q,
            isQuestBarEmpty: ee,
            isListenAlongVisible: et,
            deviceChangedTooltipType: eE,
            onDismissDeviceChangedTooltip: () => eC(eE),
        }),
    });
}
