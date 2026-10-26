(n.d(t, { g: () => lP, A: () => lU }), n(321073));
var i = n(477900),
    l = n(582128),
    a = n(503698),
    r = n.n(a),
    s = n(435558),
    o = n.n(s),
    u = n(17928),
    d = n(554146),
    c = n(451988),
    m = n(97808),
    h = n(778712),
    f = n(265872),
    p = n(939249),
    g = n(140735),
    A = n(312138);
if (221552 == n.j) var v = n(192308);
var E = n(442433),
    x = n(820284),
    C = n(717558),
    _ = n(964486),
    T = n(220839),
    I = n(397244),
    S = n(394871),
    y = n(941143),
    N = n(866323),
    b = n(120842);
function j(e) {
    let { text: t } = e,
        n = (0, N.p)(t, {
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
    M = n(793574),
    O = n(688810),
    w = n(643056),
    L = n(158390),
    P = n(927813),
    k = n(682618),
    D = n(864197),
    U = n(982240),
    G = n(988341),
    F = n(521502),
    V = n(380610),
    H = n(198052),
    B = n(18235),
    W = n(183184),
    z = n(384059),
    Z = n(480890),
    K = n(601255),
    q = n(562819),
    Y = n(449582),
    $ = n(351952),
    X = n(88686),
    Q = n(214881),
    J = n(302223),
    ee = n(248778),
    et = n(609425),
    en = n(922301),
    ei = n(660184),
    el = n(643501),
    ea = n(826673),
    er = n(617617),
    es = n(417792),
    eo = n(355097),
    eu = n(771527),
    ed = n(552122),
    ec = n(74848),
    em = n(607399),
    eh = n(305866),
    ef = n(707554),
    ep = n(364522),
    eg = n(22231),
    eA = n(62010),
    ev = n(935154),
    eE = n(780338);
if (221552 != n.j) var v = n(192308);
var ex = n(224640),
    eC = n(980707),
    e_ = n(877784),
    eT = n(26137),
    eI = n(473935),
    eS = n(765671),
    ey = n(470739),
    eN = n(176781),
    eb = n(812993),
    ej = n(320448),
    eR = n(834730),
    eM = n(993401),
    eO = n(105292),
    ew = n(211450);
function eL(e) {
    return (0, i.jsx)("div", {
        className: ew.wE,
        children: (0, i.jsx)(eC.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function eP(e) {
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
        g = (0, eM.rE)({ action: t, onClick: n }),
        [A, E] = l.useState(!1),
        x = l.useRef(null),
        C = d ?? x,
        _ = null != u,
        T = _ && h,
        I = l.useCallback(() => {
            E(!0);
        }, []),
        S = l.useCallback(() => {
            (0, v.hasAnyModalOpen)() || E(!1);
        }, []);
    function y() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: ew.iA, children: (0, i.jsx)(a, { size: "xs", color: "currentColor" }) }),
                (0, i.jsxs)("div", {
                    className: ew.$H,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(eR.E, {
                                    color: "currentColor",
                                    variant: "text-sm/medium",
                                    className: ew.W1,
                                    children: r,
                                }),
                                (0, i.jsx)(eR.E, { color: "currentColor", variant: "text-xs/medium", children: s }),
                            ],
                        }),
                        o,
                    ],
                }),
            ],
        });
    }
    function N(e) {
        let t;
        return (
            (t = T
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(p.D, { className: ew.ef, onClick: g, children: y() }),
                          (0, i.jsx)(p.D, {
                              className: ew.ap,
                              "aria-label": eO.intl.string(eO.t.PdRCRg),
                              ...e,
                              onClick: I,
                              children: (0, i.jsx)(ej._, { size: "xs", color: "currentColor" }),
                          }),
                      ],
                  })
                : _
                  ? (0, i.jsxs)(p.D, {
                        className: ew.ef,
                        ...e,
                        onClick: I,
                        children: [
                            y(),
                            (0, i.jsx)("div", {
                                className: ew.ap,
                                children: (0, i.jsx)(ej._, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    })
                  : (0, i.jsx)(p.D, { className: ew.ef, onClick: g, children: y() })),
            (0, i.jsx)("div", { ref: C, className: ew.jG, children: t })
        );
    }
    return _
        ? (0, i.jsx)("li", {
              className: ew.j$,
              onMouseEnter: I,
              onMouseLeave: S,
              children: (0, i.jsx)(f.Y, {
                  targetElementRef: c ?? C,
                  align: m,
                  spacing: 0,
                  renderPopout: u,
                  shouldShow: A,
                  onRequestClose: S,
                  children: N,
              }),
          })
        : (0, i.jsx)("li", { className: ew.j$, children: N() });
}
function ek(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var eD = n(780964),
    eU = n(766075),
    eG = n(734066),
    eF = n(274372),
    eV = n(409067),
    eH = n(271597),
    eB = n(297264),
    eW = n(475358),
    ez = n(866665),
    eZ = n(408278),
    eK = n(625903),
    eq = n(404778),
    eY = n(689175),
    e$ = n(821609),
    eX = n(532624),
    eQ = n(879631),
    eJ = n(350535),
    e0 = n(974293),
    e1 = n(572164),
    e2 = n(953932),
    e3 = n(280483),
    e5 = n(890856),
    e6 = n(713517),
    e7 = n(609174),
    e8 = n(619744);
function e4(e) {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        a = (0, e7.Y_)(),
        r = l.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), t?.(), (0, eH.p)({ initialEditingClipId: a.id }));
            },
            [a, t],
        );
    return (0, i.jsx)(e$.$, {
        onClick: r,
        icon: eg.PencilIcon,
        variant: n,
        size: "sm",
        text: eO.intl.string(eO.t.bt75uw),
        fullWidth: !0,
    });
}
var e9 = n(82716),
    te = n(449397),
    tt = n(930317),
    tn = n(285072),
    ti = n(575172);
let tl = l.memo(function (e) {
    let { clip: t, isNew: n, onClose: a, className: s } = e,
        o = l.useRef(null),
        { isHoveringOrFocusing: u } = (0, e6.A)(o),
        d = l.useCallback(() => {
            (a?.(), (0, eH.p)({ initialEditingClipId: t.id }));
        }, [t.id, a]);
    return (0, i.jsx)(e7.Cl, {
        clip: t,
        children: (0, i.jsx)(e5.s, {
            ref: o,
            "aria-label": eO.intl.string(eO.t.bt75uw),
            onClick: d,
            className: r()(ti.Z1, s),
            children: (0, i.jsxs)(tt.d, {
                isStatic: !0,
                children: [
                    n &&
                        (0, i.jsx)("div", {
                            className: ti.Ad,
                            children: (0, i.jsx)(eA.E, { type: "new", variant: "primary" }),
                        }),
                    (0, i.jsxs)(tn.h, {
                        isVisible: u,
                        className: ti.Lw,
                        children: [
                            (0, i.jsxs)("div", {
                                className: ti.mY,
                                children: [(0, i.jsx)(e9.z, {}), (0, i.jsx)(e8.k, {})],
                            }),
                            (0, i.jsxs)("div", {
                                className: ti.E_,
                                children: [
                                    (0, i.jsx)(e4, { onBeforeEdit: a, variant: "overlay-secondary" }),
                                    (0, i.jsx)(te.e, {}),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
var ta = n(696016),
    tr = n(652215),
    ts = n(753070),
    to = n(268378),
    tu = n(48127);
function td(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: a, setPopoutRef: r } = e;
    (0, e3.A)();
    let s = (0, u.yK)([eF.Ay], () => Object.values(eF.Ay.getClips())),
        o = (0, u.bG)([eF.Ay], () => eF.Ay.getSettings()),
        d = (0, u.bG)([eF.Ay], () => eF.Ay.getNewClipIds()),
        c = (0, e0.aJ)("ClipsPopout"),
        m = (0, e1.E)(),
        h = (0, u.bG)([eX.Ay], () => eX.Ay.getKeybindForAction(tr.hCu.SAVE_CLIP)),
        f = l.useCallback(
            (e) => {
                r?.(e);
            },
            [r],
        ),
        p = !o.showPovClipsInGallery,
        g = l.useMemo(() => {
            let e = s.filter((e) => e.type === ta.nQ.CLIP && "" !== e.thumbnail && (!p || !(0, eV.kD)(e)));
            return (e.sort((e, t) => t.createdAt - e.createdAt), e);
        }, [s, p]),
        A = l.useMemo(() => g.slice(0, 16), [g]),
        v = g.length > 16,
        E = null != h ? eJ.dI(h.shortcut, !0) : null,
        x = [
            (0, eQ.$)(o.clipsLength / P.A.Millis.SECOND),
            (0, ts.zr)(o.clipsQuality.resolution),
            eO.intl.formatToPlainString(eO.t.Qb44XH, { fps: o.clipsQuality.frameRate }),
        ];
    return (
        c && x.push(eO.intl.string(to.default.XWkJoi)),
        (0, i.jsxs)("div", {
            ref: f,
            className: tu.SW,
            role: "dialog",
            "aria-label": eO.intl.string(eO.t.z2jK6X),
            children: [
                (0, i.jsxs)("div", {
                    className: tu.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tu.$,
                            children: [
                                (0, i.jsx)(eB.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: eO.intl.string(eO.t.z2jK6X),
                                }),
                                null != E && (0, i.jsx)(eW.e, { className: tu.P, shortcut: E }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tu.$s,
                            children: [
                                (0, i.jsx)(ez.m, {
                                    text: eO.intl.string(eO.t["3D5yo/"]),
                                    children: (0, i.jsx)(eZ.K, {
                                        onClick: () => n(),
                                        icon: eK.SettingsIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eO.intl.string(eO.t["3D5yo/"]),
                                    }),
                                }),
                                (0, i.jsx)(ez.m, {
                                    text: eO.intl.string(to.default["55C2MH"]),
                                    children: (0, i.jsx)(eZ.K, {
                                        onClick: () => t(),
                                        icon: eN.x,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eO.intl.string(to.default["55C2MH"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: tu.ov,
                    children: [
                        x.map((e, t) =>
                            (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        t > 0 && (0, i.jsx)("span", { className: tu.LO, children: "\u2022" }),
                                        (0, i.jsx)(eR.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            tag: "span",
                                            className: tu.c5,
                                            children: e,
                                        }),
                                    ],
                                },
                                e,
                            ),
                        ),
                        c &&
                            (0, i.jsx)(eR.E, {
                                variant: "text-xs/semibold",
                                color: m ? "text-strong" : "text-feedback-critical",
                                tag: "span",
                                className: tu.wS,
                                children: m ? eO.intl.string(to.default.lTwKmt) : eO.intl.string(to.default.GNDqtf),
                            }),
                    ],
                }),
                (0, i.jsx)(eq.c, {}),
                A.length > 0
                    ? (0, i.jsxs)(eY.Ch, {
                          className: tu.Vg,
                          fade: !0,
                          disableFocusRingScope: !0,
                          children: [
                              A.map((e) => (0, i.jsx)(tl, { clip: e, isNew: d.includes(e.id), onClose: a }, e.id)),
                              v &&
                                  (0, i.jsx)("div", {
                                      className: tu.qr,
                                      children: (0, i.jsx)(e$.$, {
                                          onClick: () => t(),
                                          text: eO.intl.string(to.default["55C2MH"]),
                                          variant: "secondary",
                                          size: "sm",
                                      }),
                                  }),
                          ],
                      })
                    : (0, i.jsx)(tc, { keybindString: E }),
            ],
        })
    );
}
function tc(e) {
    let { keybindString: t } = e,
        n = (0, e1.E)();
    return (0, i.jsxs)("div", {
        className: tu.p$,
        children: [
            (0, i.jsx)(eR.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: tu.qO,
                children: eO.intl.string(to.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(eR.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: tu.CZ,
                      children: eO.intl.format(to.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, i.jsx)(
                                  eR.E,
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
                : (0, i.jsx)(e2.A, {}),
        ],
    });
}
function tm(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        a = (0, eG.sw)(),
        r = !(0, u.bG)([eF.Ay], () => eF.Ay.getSettings().showPovClipsInGallery),
        s = (0, u.bG)(
            [eF.Ay],
            () => {
                let e = eF.Ay.getNewClipIds();
                return r
                    ? e.filter((e) => {
                          let t = eF.Ay.getClipById(e);
                          return null != t && !(0, eV.kD)(t);
                      }).length
                    : e.length;
            },
            [r],
        ),
        o = l.useCallback(
            (e) => {
                (t(), (0, eH.p)({ initialEditingClipId: e }));
            },
            [t],
        ),
        d = l.useCallback(() => {
            (t(), (0, eU.openUserSettings)(eD.X.CLIPS_PANEL));
        }, [t]);
    return a
        ? (0, i.jsx)(eP, {
              action: "PRESS_CLIPS",
              icon: eN.x,
              label: eO.intl.string(eO.t.z2jK6X),
              trailing: s > 0 ? (0, i.jsx)(eb.hV, { count: s }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, i.jsx)(td, { ...e, onOpenGallery: o, onOpenSettings: d, onClose: t }),
          })
        : null;
}
var th = n(480335),
    tf = n(577390),
    tp = n(372320),
    tg = n(31956),
    tA = n(744808),
    tv = n(645507),
    tE = n(131607),
    tx = n(970931),
    tC = n(315710),
    t_ = n(789645),
    tT = n(775602),
    tI = n(832248),
    tS = n(462887),
    ty = n(736653),
    tN = n(439174),
    tb = n(927578),
    tj = n(19886),
    tR = n(202541);
function tM() {
    let e = (0, tj.Xb)(),
        t = (0, tb.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tR.sp.length - 1; t >= 0; t--) {
        let i = tR.VD[tR.sp[t]],
            l = new Date(e);
        if ((l.setMonth(l.getMonth() + i.tenureReqNumMonths), l.setHours(l.getHours() + 30), n > l.getTime()))
            if (n - l.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let tO = {
        [tR.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tR.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tR.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tR.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tR.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tR.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tR.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tR.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tw = {
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
var tL = n(570484);
let tP = l.lazy(() => Promise.all([n.e("969274"), n.e("924832")]).then(n.bind(n, 748579)));
function tk() {
    let e = (0, u.bG)([tT.Ay], () => tT.Ay.useReducedMotion),
        t = (0, tI.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tM(),
                t = (0, tS.M)((0, ty.Ay)());
            if (null == e) return null;
            let n = tO[e],
                i = tw[e],
                l = {
                    currentBadge: (0, tN.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                a = tR.sp.indexOf(e);
            if (a > 0) {
                let e = tR.sp[a - 1],
                    n = tO[e];
                ((l.prevBadge = (0, tN.e0)(e)), (l.prevBadgeTextGradient = t ? n?.dark : n?.light));
            }
            return l;
        })(),
        [a, r] = l.useState(null);
    return (null != n && null == a && r(n), e || !t || null == a) ? null : (0, i.jsx)(tD, { levelUpData: a });
}
function tD(e) {
    let { levelUpData: t } = e,
        n = l.useRef(null),
        a = l.useCallback(() => {
            tI.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, i.jsx)(tC.Ok, {
        containerRef: n,
        children: (0, i.jsxs)("div", {
            className: tL.i,
            children: [
                (0, i.jsx)("div", {
                    className: tL.b,
                    children: (0, i.jsx)(ez.m, {
                        text: eO.intl.string(eO.t.cpT0Cq),
                        children: (0, i.jsx)(eZ.K, {
                            icon: t_.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: a,
                            "aria-label": eO.intl.string(eO.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, i.jsx)(l.Suspense, { fallback: null, children: (0, i.jsx)(tP, { levelUpData: t }) }),
            ],
        }),
    });
}
var tU = n(397562),
    tG = n(206835),
    tF = n(183555),
    tV = n(465318),
    tH = n(999291),
    tB = n(402860),
    tW = n(718019),
    tz = n(977059),
    tZ = n(915614),
    tK = n(744753),
    tq = n(559506),
    tY = n(646986),
    t$ = n(657538),
    tX = n(946356),
    tQ = n(465829),
    tJ = n(624479),
    t0 = n(206845),
    t1 = n(957565),
    t2 = n(427262),
    t3 = n(62119);
function t5(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: l } = (0, tF.NJ)();
    return t1.p5
        ? (0, i.jsx)(t0.A, {
              text: eO.intl.string(eO.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: t2.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => l({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(p.D, {
                      ...e,
                      className: r()(t3.c, { [t3.R]: n }),
                      "aria-label": eO.intl.string(eO.t.y5MwJy),
                      children: (0, i.jsx)(tJ.CopyIcon, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var t6 = n(394816),
    t7 = n(442228),
    t8 = n(885386),
    t4 = n(362862),
    t9 = n(621466),
    ne = n(318254),
    nt = n(863610),
    nn = n(421773),
    ni = n(318346),
    nl = n(923138),
    na = n(309954),
    nr = n(673125),
    ns = n(646731),
    no = n(769001);
function nu(e) {
    let { popoutContainerRef: t, scrollerRef: n, shouldScrollIntoView: a, onCloseAccountPopout: s } = e;
    (0, nl.I)({ enabled: !0 });
    let { balance: o } = (0, na.W)(),
        d = (0, u.bG)([nr.Ay], () =>
            nr.Ay.userOpenedWalletViaProfileDCF ? nr.Y0.NEW_ACHIEVEMENT : nr.Ay.clientUnreadNotificationType,
        );
    l.useEffect(
        () => () => {
            nr.Ay.setUserOpenedWalletViaProfileDCF(!1);
        },
        [],
    );
    let { isHovered: c, onMouseEnter: m, onMouseLeave: h, setIsHovered: g, cancelTimers: A } = (0, nn.A)(0, 500),
        E = l.useCallback(() => {
            (0, v.hasAnyModalOpen)() || h();
        }, [h]),
        x = l.useRef(null),
        C = l.useRef(null),
        _ = l.useRef(null),
        T = l.useCallback(
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
            if (c)
                return (document.addEventListener("mouseover", e), () => document.removeEventListener("mouseover", e));
            function e(e) {
                if ((0, v.hasAnyModalOpen)()) return;
                let t = (0, t9.vq)(e.target, Element) ? e.target : null,
                    n = t?.closest(`.${ew.j$}`);
                null != n && n !== x.current && (A(), g(!1));
            }
        }, [c, A, g]));
    let I = l.useRef(!1);
    l.useEffect(() => {
        c || (I.current = !1);
    }, [c]);
    let S = l.useCallback(() => {
            (I.current ||
                ((I.current = !0),
                (0, ni.Y)({
                    pageType: M.A.USER_PROFILE_ACCOUNT_POPOUT,
                    sectionType: M.A.ORB_WALLET,
                    ctaObject: M.A.ORB_WALLET_OPEN_FROM_PROFILE,
                })),
                m());
        }, [m]),
        y = (0, eM.rE)({ action: "PRESS_ORBS", onClick: S });
    l.useEffect(() => {
        let e = n?.current,
            t = x.current;
        if (!a || null == e || null == t) return;
        function i() {
            if (null == e || null == t) return;
            let n = e.getBoundingClientRect(),
                i = t.getBoundingClientRect(),
                l = i.bottom + 24 - n.bottom,
                a = n.top - (i.top - 24);
            l > 0 ? (e.scrollTop += l) : a > 0 && (e.scrollTop -= a);
        }
        let l = requestAnimationFrame(i),
            r = new ResizeObserver(i);
        for (let t of (r.observe(e), Array.from(e.children))) r.observe(t);
        function s() {
            (r.disconnect(), clearTimeout(o));
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
    }, [a, n]);
    let N = l.useMemo(
            () =>
                null != o
                    ? eO.intl.format(eO.t["8xDISf"], { balance: String(o) })
                    : (0, i.jsx)(nt.n, { dotRadius: 3.5, themed: !0, className: no.K }),
            [o],
        ),
        b = l.useMemo(
            () =>
                d === nr.Y0.NEW_ACHIEVEMENT
                    ? (0, i.jsx)(eA.E, { type: "new", variant: "primary" })
                    : d === nr.Y0.UNCLAIMED_ACHIEVEMENT
                      ? (0, i.jsx)(eA.E, { type: { text: eO.intl.string(eO.t.O13yhz) }, variant: "primary" })
                      : null,
            [d],
        ),
        j = l.useCallback(() => {
            (A(), g(!1), s());
        }, [A, g, s]),
        R = l.useCallback(
            (e) => {
                let { relatedTarget: t } = e;
                (0, t9.vq)(t, Node) && null != x.current && x.current.contains(t) && A();
            },
            [A],
        );
    return (0, i.jsx)("li", {
        ref: x,
        className: ew.j$,
        onMouseEnter: S,
        onMouseLeave: E,
        children: (0, i.jsx)(f.Y, {
            targetElementRef: t,
            align: "bottom",
            spacing: -16,
            renderPopout: () =>
                (0, i.jsx)("div", {
                    ref: T,
                    onMouseEnter: m,
                    onMouseLeave: R,
                    children: (0, i.jsx)(ns.vG, { onCloseWallet: j, returnRef: C, isProfilePopout: !0 }),
                }),
            shouldShow: c,
            onRequestClose: E,
            children: (e) =>
                (0, i.jsx)("div", {
                    className: ew.jG,
                    children: (0, i.jsxs)(p.D, {
                        innerRef: C,
                        className: ew.ef,
                        ...e,
                        onClick: y,
                        children: [
                            (0, i.jsx)("div", {
                                className: ew.iA,
                                children: (0, i.jsx)(ne.C, { color: "currentColor", size: "xs" }),
                            }),
                            (0, i.jsx)("div", {
                                className: ew.$H,
                                children: (0, i.jsx)("div", {
                                    children: (0, i.jsx)(eR.E, {
                                        color: "currentColor",
                                        variant: "text-sm/medium",
                                        className: ew.W1,
                                        children: N,
                                    }),
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: r()(ew.ap, no._),
                                children: [b, (0, i.jsx)(ej._, { size: "xs", color: "currentColor" })],
                            }),
                        ],
                    }),
                }),
        }),
    });
}
var nd = n(290863),
    nc = n(351906),
    nm = n(403362),
    nh = n(562153),
    nf = n(661531),
    np = n(477782),
    ng = n(628284),
    nA = n(695366),
    nv = n(363195),
    nE = n(889227),
    nx = n(287809),
    nC = n(174459),
    n_ = n(429707),
    nT = n(274303),
    nI = n(994125),
    nS = n(347853),
    ny = n(573879),
    nN = n(559117),
    nb = n(43105),
    nj = n(661439),
    nR = n(385113),
    nM = n(352003),
    nO = n(429913),
    nw = n(334074),
    nL = n(633075),
    nP = n(667049),
    nk = n(280450),
    nD = n(90165),
    nU = n(49999),
    nG = n(518477);
function nF(e) {
    let { targetElementRef: t, onClose: a } = e,
        [r, s] = l.useState(!1),
        o = (0, u.bG)([nk.default], () => nk.default.getId()),
        { eligibleApplications: c, markAsDismissed: m } = (function () {
            let e = (0, u.yK)([nR.A], () => nR.A.getFeaturedApplicationIds());
            ((0, nM.A)(e),
                l.useEffect(() => {
                    (0, nj.X)();
                }, []));
            let t = (0, u.bG)([nk.default], () => nk.default.getId()),
                n = (0, nP.A)(t),
                i = l.useMemo(() => n.filter((e) => e instanceof nL.R), [n]),
                a = (0, nO.A)(e),
                r = l.useMemo(() => a.filter(nm.Vq), [a]),
                s = (0, u.cf)([nD.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = r.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = nD.A.getLastPlayedDateTime(e));
                    }
                    return t;
                }),
                o = l.useMemo(() => {
                    let e = Date.now();
                    return r.filter((t) => {
                        if (i.some((e) => e.applicationId === t.id)) return !1;
                        let n = s[t.id];
                        return null != n && e - n < 7776e6;
                    });
                }, [r, i, s]),
                { eligibleToShow: c, markAsDismissed: m } = (0, nw.hj)({
                    applications: o,
                    dismissibleContent: d.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: nw.SH,
                });
            return {
                eligibleApplications: l.useMemo(() => o.filter((e) => c.includes(e.id)), [o, c]),
                markAsDismissed: m,
            };
        })();
    return ((0, l.useEffect)(() => {
        0 !== c.length &&
            Promise.all([
                n.e("459257"),
                n.e("535308"),
                n.e("393514"),
                n.e("816027"),
                n.e("562772"),
                n.e("970604"),
                n.e("399275"),
                n.e("677624"),
                n.e("165291"),
                n.e("796668"),
                n.e("953327"),
                n.e("733814"),
                n.e("106980"),
                n.e("839772"),
                n.e("814431"),
                n.e("763214"),
                n.e("291103"),
                n.e("59599"),
                n.e("488602"),
                n.e("426737"),
                n.e("607468"),
                n.e("440636"),
                n.e("568960"),
                n.e("315289"),
                n.e("372883"),
                n.e("396635"),
                n.e("339715"),
                n.e("149697"),
                n.e("128804"),
                n.e("60882"),
                n.e("71151"),
                n.e("985301"),
                n.e("981059"),
                n.e("790484"),
                n.e("211004"),
                n.e("269714"),
                n.e("62849"),
                n.e("489020"),
                n.e("670058"),
                n.e("527798"),
                n.e("892877"),
                n.e("322497"),
                n.e("249918"),
                n.e("123981"),
                n.e("585190"),
                n.e("862543"),
                n.e("759086"),
                n.e("422037"),
                n.e("101105"),
                n.e("263406"),
                n.e("1955"),
                n.e("341161"),
                n.e("410526"),
                n.e("202985"),
                n.e("603619"),
                n.e("833292"),
                n.e("222969"),
                n.e("515363"),
                n.e("227853"),
                n.e("286615"),
                n.e("70866"),
                n.e("311541"),
                n.e("795854"),
                n.e("870088"),
                n.e("300641"),
                n.e("571163"),
                n.e("586662"),
                n.e("831377"),
                n.e("709976"),
                n.e("750955"),
                n.e("953343"),
                n.e("279774"),
                n.e("763945"),
                n.e("261204"),
                n.e("686731"),
                n.e("807432"),
                n.e("873532"),
                n.e("590088"),
                n.e("807003"),
                n.e("46083"),
                n.e("152133"),
                n.e("747802"),
                n.e("626353"),
                n.e("71169"),
                n.e("906470"),
                n.e("736663"),
                n.e("419121"),
                n.e("919789"),
                n.e("669130"),
                n.e("802890"),
                n.e("82937"),
                n.e("987221"),
                n.e("157064"),
                n.e("156957"),
                n.e("918786"),
                n.e("701335"),
                n.e("257935"),
                n.e("724086"),
                n.e("358937"),
                n.e("448738"),
                n.e("700181"),
                n.e("804439"),
                n.e("84978"),
                n.e("894292"),
                n.e("153302"),
                n.e("88683"),
                n.e("363874"),
                n.e("923981"),
                n.e("750370"),
                n.e("972281"),
                n.e("307107"),
                n.e("896622"),
                n.e("466592"),
                n.e("73946"),
                n.e("282050"),
                n.e("440727"),
                n.e("387970"),
                n.e("847445"),
                n.e("547510"),
                n.e("966366"),
                n.e("983513"),
                n.e("76928"),
                n.e("355502"),
                n.e("528311"),
                n.e("232960"),
                n.e("74886"),
                n.e("713273"),
                n.e("777612"),
                n.e("193457"),
                n.e("892937"),
                n.e("420446"),
                n.e("490449"),
                n.e("148758"),
                n.e("36026"),
                n.e("291043"),
                n.e("119766"),
                n.e("589154"),
                n.e("888499"),
                n.e("839182"),
                n.e("52727"),
                n.e("493118"),
                n.e("166171"),
                n.e("595990"),
                n.e("218781"),
                n.e("348567"),
                n.e("452075"),
                n.e("900277"),
                n.e("127962"),
                n.e("76428"),
                n.e("834552"),
                n.e("993103"),
                n.e("863232"),
                n.e("708757"),
                n.e("517888"),
                n.e("959880"),
                n.e("174016"),
                n.e("907167"),
                n.e("910471"),
                n.e("11301"),
                n.e("811133"),
                n.e("861060"),
                n.e("364827"),
                n.e("77333"),
                n.e("56366"),
                n.e("217229"),
                n.e("477175"),
                n.e("960235"),
                n.e("585968"),
                n.e("910486"),
                n.e("198329"),
                n.e("678157"),
                n.e("942374"),
                n.e("147134"),
                n.e("331988"),
                n.e("10866"),
                n.e("236850"),
                n.e("40291"),
                n.e("733115"),
                n.e("397270"),
                n.e("190779"),
                n.e("373122"),
                n.e("217951"),
                n.e("221856"),
                n.e("755936"),
                n.e("147662"),
                n.e("609705"),
                n.e("899843"),
                n.e("904448"),
                n.e("833703"),
                n.e("256274"),
                n.e("544571"),
                n.e("692990"),
                n.e("362931"),
                n.e("745959"),
                n.e("858529"),
                n.e("481987"),
                n.e("595653"),
                n.e("958038"),
                n.e("532039"),
                n.e("719466"),
                n.e("178565"),
                n.e("630267"),
                n.e("576909"),
                n.e("27355"),
                n.e("406174"),
                n.e("715555"),
                n.e("776273"),
                n.e("28102"),
                n.e("407170"),
                n.e("229787"),
                n.e("572963"),
                n.e("307575"),
                n.e("521930"),
                n.e("554241"),
                n.e("724303"),
                n.e("53102"),
                n.e("88599"),
                n.e("95340"),
                n.e("354044"),
                n.e("437065"),
                n.e("709640"),
                n.e("952548"),
                n.e("636373"),
                n.e("726033"),
                n.e("655708"),
                n.e("553984"),
                n.e("884601"),
                n.e("782969"),
                n.e("14035"),
                n.e("504370"),
                n.e("428967"),
                n.e("953858"),
                n.e("859546"),
                n.e("432805"),
                n.e("608032"),
                n.e("477970"),
                n.e("386317"),
                n.e("523276"),
                n.e("252229"),
                n.e("77473"),
                n.e("812042"),
                n.e("25279"),
                n.e("729963"),
                n.e("830938"),
                n.e("538513"),
                n.e("147864"),
                n.e("122990"),
                n.e("276177"),
                n.e("50097"),
                n.e("484189"),
                n.e("93461"),
                n.e("203930"),
                n.e("903663"),
                n.e("36877"),
                n.e("908081"),
                n.e("829260"),
                n.e("248836"),
                n.e("489523"),
                n.e("327198"),
                n.e("504098"),
                n.e("920593"),
                n.e("604172"),
                n.e("568881"),
                n.e("582486"),
                n.e("350949"),
                n.e("354121"),
                n.e("134504"),
                n.e("908608"),
                n.e("741786"),
                n.e("553683"),
                n.e("280098"),
                n.e("704374"),
                n.e("181162"),
                n.e("186546"),
                n.e("723934"),
                n.e("571294"),
                n.e("598421"),
                n.e("443256"),
                n.e("496679"),
                n.e("373566"),
                n.e("114633"),
                n.e("720161"),
                n.e("247339"),
                n.e("171398"),
                n.e("659624"),
                n.e("384100"),
                n.e("736637"),
                n.e("653308"),
                n.e("414501"),
                n.e("819119"),
                n.e("740249"),
                n.e("64500"),
                n.e("486825"),
                n.e("671367"),
                n.e("666198"),
                n.e("69658"),
                n.e("375072"),
                n.e("569443"),
                n.e("49282"),
                n.e("235683"),
                n.e("702091"),
            ]).then(n.bind(n, 577593));
    }, [c.length]),
    0 === c.length)
        ? null
        : (0, i.jsx)(nb.A, {
              targetElementRef: t,
              position: "right",
              gradientColor: "blue",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/c7446f4156b0cb7fde3b34dd50bb48a7f4699c72a5b2e42ba16091f8c8a93a13.svg",
              },
              title: eO.intl.string(eO.t.HMWL9c),
              body: eO.intl.string(eO.t["9hfy3A"]),
              onRequestClose: () =>
                  m(
                      c.map((e) => e.id),
                      nU.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: eO.intl.string(eO.t.VSLDly),
                      loading: r,
                      onClick: function () {
                          (s(!0),
                              (0, tB.openUserProfileModal)({ userId: o, tabSection: nG.RP.WIDGETS })
                                  .then(() => {
                                      let e = c.map((e) => e.id);
                                      ((0, v.openModalLazy)(
                                          async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("777612"),
                                                  n.e("193457"),
                                                  n.e("892937"),
                                                  n.e("166171"),
                                                  n.e("487697"),
                                                  n.e("504098"),
                                                  n.e("181162"),
                                                  n.e("723934"),
                                                  n.e("720161"),
                                                  n.e("740249"),
                                                  n.e("911581"),
                                              ]).then(n.bind(n, 51820));
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
                                              c.map((e) => e.id),
                                              nU.i.TAKE_ACTION,
                                          ),
                                          a());
                                  })
                                  .finally(() => s(!1)));
                      },
                  },
              ],
          });
}
var nV = n(461213),
    nH = n(818348),
    nB = n(709516);
function nW() {
    let e = (0, u.bG)([nV.A], () => nV.A.getStatus()),
        t = (0, t2.MU)(e) ?? "",
        n = e === nH.cl.INVISIBLE || e === nH.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: nB.k,
        children: [
            (0, i.jsxs)(g.A, { tag: "div", children: [eO.intl.string(eO.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(ez.m, {
                    text: eO.intl.string(eO.t.L99HQm),
                    children: (0, i.jsx)(nA.E, {
                        size: "xs",
                        color: nf.A.colors.STATUS_WARNING,
                        "aria-label": eO.intl.string(eO.t.L99HQm),
                    }),
                }),
        ],
    });
}
var nz = n(146901),
    nZ = n(827827);
let nK = [
        { duration: 15 * P.A.Millis.MINUTE, label: () => eO.intl.string(eO.t["8ot6gv"]) },
        { duration: P.A.Millis.HOUR, label: () => eO.intl.string(eO.t.UMWBZr) },
        { duration: 8 * P.A.Millis.HOUR, label: () => eO.intl.string(eO.t.EpAXPC) },
        { duration: P.A.Millis.DAY, label: () => eO.intl.string(eO.t["755t4q"]) },
        { duration: 3 * P.A.Millis.DAY, label: () => eO.intl.string(eO.t["f3/1ch"]) },
        { duration: void 0, label: () => eO.intl.string(eO.t["46dqJY"]) },
    ],
    nq = "forever";
function nY(e) {
    let { status: t, currentStatus: n, description: l } = e,
        a = t !== tr.clD.ONLINE,
        r = (0, i.jsx)(i.Fragment, {
            children: nK.map((e) => {
                let { duration: l, label: a } = e;
                return (0, i.jsx)(
                    np.Dr,
                    {
                        id: `${t}-${l}`,
                        label: a(),
                        action: () => (0, nZ.A)({ nextStatus: t, prevStatus: n, durationMillis: l }),
                        dontCloseOnAction: !0,
                    },
                    l ?? nq,
                );
            }),
        });
    return (0, i.jsx)(np.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: a,
        label: (0, t2.MU)(t),
        subtext: l,
        iconLeft: () => (0, i.jsx)(ev.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, nZ.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: a ? r : void 0,
    });
}
function n$(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, nz._)(e);
    return "today" === t
        ? eO.intl.formatToPlainString(eO.t.ZxxHIO, { timeString: i })
        : eO.intl.formatToPlainString(eO.t["9OFjSe"], { dateString: n, timeString: i });
}
var nX = n(996988),
    nQ = n(207634),
    nJ = n(47453);
function n0(e) {
    let { currentUser: t, onClose: n, setPopoutRef: a, highlightBadge: s, openedAt: o, className: c } = e,
        f = __OVERLAY__,
        p = (0, tH.Ay)(t.id, void 0),
        { analyticsLocations: A } = (0, O.Ay)(M.A.USER_PROFILE_ACCOUNT_POPOUT),
        E = (0, tF.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 });
    (0, tU.A)(A, p, nG.R7.ACCOUNT_POPOUT);
    let { ref: x } = (0, eS.Ay)(),
        { isHoveringOrFocusing: C, isHovering: _ } = (0, e6.A)(x);
    (l.useEffect(() => {
        a?.(x.current);
    }, [x, a]),
        l.useEffect(
            () => (
                tI.A.setState({ isOpen: !0 }),
                () => tI.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1, shouldScrollToOrbsMenuItem: !1 })
            ),
            [],
        ));
    let T = (0, u.bG)([nd.A], () => nd.A.getStatus(t.id)),
        I = n$(t8.CY.useSetting()),
        S = (0, u.bG)([nc.A], () => nc.A.hidePersonalInformation),
        y = (0, tx.kB)(),
        N = t8.Q_.useSetting(),
        b = (function (e) {
            let t = t8.CY.useSetting(),
                n = (0, tx.kB)(),
                l = t8.Jr.useSetting();
            function a(i) {
                let l = n$(t);
                if (e === i && null != l) return l;
                switch (i) {
                    case tr.clD.DND:
                        return n ? eO.intl.string(eO.t.day5A6) : eO.intl.string(eO.t["tq/fMK"]);
                    case tr.clD.INVISIBLE:
                        return eO.intl.string(eO.t.zPc6Mc);
                    default:
                        return;
                }
            }
            let r = (0, i.jsx)(i.Fragment, {
                    children: nK.map((t) => {
                        let { duration: n, label: l } = t;
                        return (0, i.jsx)(
                            np.Dr,
                            {
                                id: `${e}-${n}`,
                                label: l(),
                                action: () => {
                                    (0, tx.ES)(!0, n);
                                },
                                dontCloseOnAction: !0,
                            },
                            n ?? nq,
                        );
                    }),
                }),
                s = nY({ status: tr.clD.ONLINE, currentStatus: e }),
                o = nY({ status: tr.clD.IDLE, currentStatus: e, description: a(tr.clD.IDLE) }),
                u = nY({ status: tr.clD.DND, currentStatus: e, description: a(tr.clD.DND) }),
                d = nY({ status: tr.clD.INVISIBLE, currentStatus: e, description: a(tr.clD.INVISIBLE) });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    s,
                    (0, i.jsx)(np.bX, {}, "menu-separator-statuses"),
                    o,
                    u,
                    d,
                    n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(np.bX, {}, "menu-separator-statuses"),
                                  (0, i.jsx)(
                                      np.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: eO.intl.string(eO.t.gJRnwK),
                                          iconLeft: eE.BellSlashIcon,
                                          leadingAccessory: { type: "icon", icon: eE.BellSlashIcon },
                                          badge: { text: eO.intl.string(eO.t.ApAu9f) },
                                          subtext:
                                              null != l && "0" !== l
                                                  ? eO.intl.format(eO.t.BWD8fs, {
                                                        endTime: new Date(Number(l)).toLocaleString(
                                                            eO.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : eO.intl.string(eO.t["Br1q+x"]),
                                          action: () => {
                                              (0, tx.ES)(!n);
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
        })(T),
        j = (function (e) {
            let t = (0, u.bG)([nx.default], () => nx.default.getCurrentUser()),
                n = (0, u.bG)([nc.A], () => nc.A.hidePersonalInformation),
                l = (0, u.bG)([nv.A], () => (0, tS.M)(nv.A.theme)),
                { multiAccountUsers: a } = (0, nI.K)(),
                r = a.map((a) => {
                    let r = new nE.A(a),
                        s = r.id === t?.id,
                        o = a.tokenStatus === nT.U.INVALID,
                        u = n ? null : `#${r.discriminator}`;
                    return (0, i.jsx)(
                        np.Dr,
                        {
                            id: r.id,
                            focusedClassName: nN.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: nN.ci,
                                    children: [
                                        (0, i.jsx)(m.eu, {
                                            src: r.getAvatarURL(void 0, 40),
                                            size: h._3.SIZE_24,
                                            "aria-label": a.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: nN.DD,
                                            children: [
                                                (0, i.jsx)(eR.E, {
                                                    className: nN.gE,
                                                    variant: "text-sm/normal",
                                                    children: t2.Ay.getUserTag(r, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !r.hasUniqueUsername() &&
                                                    (0, i.jsx)(eR.E, {
                                                        className: nN.df,
                                                        variant: "text-sm/normal",
                                                        children: u,
                                                    }),
                                            ],
                                        }),
                                        s &&
                                            (0, i.jsx)(ng.y, {
                                                size: "sm",
                                                color: t
                                                    ? nf.A.unsafe_rawColors.WHITE.css
                                                    : nf.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? nf.A.unsafe_rawColors.BRAND_500.css
                                                        : nf.A.unsafe_rawColors.WHITE.css,
                                                className: nN.s0,
                                            }),
                                        o &&
                                            (0, i.jsx)(nA.E, {
                                                color: nf.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? nf.A.unsafe_rawColors.BRAND_500.css
                                                        : nf.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: nN.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, nS.A)();
                                else {
                                    var n;
                                    (n = r.id) !== t?.id &&
                                        (nC.default.track(tr.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tr.JJy.USER_PROFILE },
                                        }),
                                        n_.Mx(n, void 0, ny.WX.MULTI_ACCOUNT_MENU));
                                }
                            },
                        },
                        r.id,
                    );
                });
            return (
                r.push(
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(np.bX, {}),
                            (0, i.jsx)(np.Dr, {
                                id: "manage-accounts",
                                label: eO.intl.string(eO.t.WbFpq4),
                                action: () => {
                                    (e?.(), (0, nS.A)());
                                },
                            }),
                        ],
                    }),
                ),
                r
            );
        })(n),
        R = (0, tG.A)({ analyticsLocations: A }),
        L = (0, tb.TW)(t),
        P = (0, w.d)({ location: "UserProfileAccountPopout" }),
        k = l.useRef(null),
        D = l.useRef(null),
        U = l.useRef(null),
        G = (0, tp.A)(p?.profileFrame?.skuId),
        F = (0, tf.A)(p?.profileFrame?.skuId);
    (0, tg.A)({ skuId: p?.profileFrame?.skuId, openedAt: o, context: E, analyticsLocations: A });
    let V = l.useRef((0, tI.A)((e) => e.shouldRenderTenureLevelUp)),
        H = l.useMemo(() => (0, tv.A)(), []),
        [B, W] = l.useState(() => tI.A.getState().shouldRenderTenureLevelUp);
    function z(e) {
        (n?.(), (0, tB.openUserProfileModal)({ customStatusPrompt: H, sourceAnalyticsLocations: A, ...E, ...e }));
    }
    l.useEffect(() => {
        let e = setTimeout(() => {
            W(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let Z = p?.widgets != null && p.widgets.length > 0,
        K = l.useCallback(() => {
            n();
        }, [n]),
        q = l.useCallback(() => {
            (R(), K());
        }, [R, K]),
        Y = (0, ee.u)("UserProfileAccountPopout"),
        $ = tV.A.useConfig({ location: "UserProfileAccountPopout" }).enabled,
        X = (0, t4.H)({ location: "UserProfileAccountPopout" }),
        Q = (0, tI.A)((e) => e.shouldScrollToOrbsMenuItem),
        [J, et] = (0, tE.kn)(
            [
                Y ? d.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE : void 0,
                $ ? d.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK : void 0,
            ].filter(nm.Vq),
            { groupName: void 0, bypassAutoDismiss: !0 },
        ),
        en = l.useId();
    return (0, i.jsx)(O.f5, {
        value: A,
        children: (0, i.jsx)(tF.of, {
            value: E,
            openedAt: o,
            fetchStartedAt: p?.fetchStartedAt,
            fetchEndedAt: p?.fetchEndedAt,
            isLoaded: p?.isLoaded,
            children: (0, i.jsxs)(eh.l, {
                ref: x,
                "aria-labelledby": en,
                className: r()(ew.jC, c),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(g.A, {
                        children: (0, i.jsx)(ef.H, { id: en, children: eO.intl.string(eO.t["5fWB8U"]) }),
                    }),
                    (0, i.jsxs)(ef.F, {
                        children: [
                            (0, i.jsxs)(tX.A, {
                                className: ew.BK,
                                user: t,
                                displayProfile: p,
                                themeType: nX.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: nJ.wx,
                                        children: [
                                            (0, i.jsx)(tZ.A, { user: t, displayProfile: p, themeType: nX.d.POPOUT }),
                                            (0, i.jsx)(tW.A, {
                                                user: t,
                                                displayProfile: p,
                                                avatarSize: nQ.T[nX.d.POPOUT].avatarSize,
                                                onOpenProfile: f ? void 0 : z,
                                            }),
                                            (0, i.jsx)(t6.A, {
                                                ref: k,
                                                user: t,
                                                themeType: nX.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: H,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(ep.Ip, {
                                        ref: U,
                                        className: ew.rf,
                                        style: { pointerEvents: B ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(tq.A, { userId: t.id }),
                                            (0, i.jsx)(tQ.Ay, {
                                                className: ew.eF,
                                                user: t,
                                                displayName: nh.Ay.getName(void 0, null, t),
                                                onClickName: f ? void 0 : z,
                                                displayNameTrailing: (0, i.jsx)(t5, { user: t, isVisible: C }),
                                                pronouns: p?.pronouns,
                                                trailing: (0, i.jsx)(tz.A, {
                                                    displayProfile: p,
                                                    themeType: nX.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != s ? (e) => e === s : void 0,
                                                    shouldGlowTenureBadge: V.current,
                                                }),
                                            }),
                                            (0, i.jsx)(tK.A, { isPremiumUser: L, onInteraction: n }),
                                            (0, i.jsx)(t7.A, {
                                                userId: t.id,
                                                userBio: p?.bio,
                                                hidePersonalInformation: S,
                                                onClose: n,
                                            }),
                                            Z &&
                                                (0, i.jsx)(t$.A, {
                                                    user: t,
                                                    widgets: p?.widgets,
                                                    onOpenUserProfileModal: z,
                                                }),
                                            (0, i.jsx)(tY.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: z,
                                                onClose: n,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: ew.T_,
                                                children: [
                                                    (0, i.jsx)(tX.A.Overlay, {
                                                        className: ew.g0,
                                                        children: (0, i.jsxs)(ek, {
                                                            children: [
                                                                (0, i.jsx)(eP, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: eO.intl.string(eO.t.s5vZlQ),
                                                                    icon: eg.PencilIcon,
                                                                    trailing:
                                                                        null != J
                                                                            ? (0, i.jsx)("div", {
                                                                                  className: ew.IO,
                                                                                  "aria-hidden": !0,
                                                                                  children: (0, i.jsx)(eA.E, {
                                                                                      type: "new",
                                                                                      variant: "primary",
                                                                                  }),
                                                                              })
                                                                            : null,
                                                                    onClick: () => {
                                                                        (J ===
                                                                            d.M
                                                                                .DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE &&
                                                                            et(nU.i.TAKE_ACTION),
                                                                            q());
                                                                    },
                                                                    ref: D,
                                                                }),
                                                                (0, i.jsx)(eP, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(nW, {}),
                                                                    sublabel: null != I && I,
                                                                    icon: () =>
                                                                        (0, i.jsx)(ev.nW, { status: T, size: 12 }),
                                                                    trailing:
                                                                        (y || T === tr.clD.DND) &&
                                                                        (0, i.jsx)(eE.BellSlashIcon, { size: "xxs" }),
                                                                    renderSubmenu: em.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(eL, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: ew.hQ,
                                                                                  "aria-label": eO.intl.string(
                                                                                      eO.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: b,
                                                                              });
                                                                          },
                                                                    onClick: em.Fr
                                                                        ? () => {
                                                                              (n(),
                                                                                  (0, v.openModalLazy)(
                                                                                      () =>
                                                                                          new Promise((e) =>
                                                                                              e((e) => {
                                                                                                  let {
                                                                                                      onClose: t,
                                                                                                      ...n
                                                                                                  } = e;
                                                                                                  return (0, i.jsx)(
                                                                                                      ex.d,
                                                                                                      {
                                                                                                          onClose: t,
                                                                                                          ...n,
                                                                                                          size: "sm",
                                                                                                          "aria-label":
                                                                                                              eO.intl.string(
                                                                                                                  eO.t[
                                                                                                                      "3Uj+2p"
                                                                                                                  ],
                                                                                                              ),
                                                                                                          children: (0,
                                                                                                          i.jsx)(eC.W, {
                                                                                                              "data-menu-migrated":
                                                                                                                  !0,
                                                                                                              navId: "set-status-submenu-mobile-web",
                                                                                                              variant:
                                                                                                                  "fixed",
                                                                                                              "aria-label":
                                                                                                                  eO.intl.string(
                                                                                                                      eO
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
                                                                                  ));
                                                                          }
                                                                        : void 0,
                                                                }),
                                                                P &&
                                                                    (0, i.jsx)(eP, {
                                                                        action: "PRESS_VIEW_BADGES",
                                                                        icon: e_.q,
                                                                        label: eO.intl.string(eO.t.l6w3Vj),
                                                                        onClick: () => {
                                                                            (n(),
                                                                                (0, ey.openBadgeDirectoryModal)({
                                                                                    viewingCurrentUserBadges: !0,
                                                                                }));
                                                                        },
                                                                    }),
                                                                (0, i.jsx)(tm, { onClose: n, popoutContainerRef: x }),
                                                                X &&
                                                                    (0, i.jsx)(nu, {
                                                                        popoutContainerRef: x,
                                                                        scrollerRef: U,
                                                                        shouldScrollIntoView: Q,
                                                                        onCloseAccountPopout: n,
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(tX.A.Overlay, {
                                                        className: ew.g0,
                                                        children: (0, i.jsxs)(ek, {
                                                            children: [
                                                                (0, i.jsx)(eP, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eT.r,
                                                                    label: eO.intl.string(eO.t.oMNyYN),
                                                                    onClick: () => {
                                                                        (n(), (0, nS.A)());
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(eL, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": eO.intl.string(eO.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: j,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    t1.p5 &&
                                                                    N &&
                                                                    (0, i.jsx)(eP, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eI.L,
                                                                        label: eO.intl.string(eO.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            ((0, t1.C)(t.id), n());
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
                                        (0, i.jsx)(th.A, { skuId: p.profileEffect.skuId, isHovering: _ }),
                                    null != G && (0, i.jsx)(tA.A, { frame: G, fadeIn: F }),
                                ],
                            }),
                            (0, i.jsx)(nF, { targetElementRef: D, onClose: n }),
                            (0, i.jsx)(tk, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var n1 = n(201805),
    n2 = n(209932),
    n3 = n(655116),
    n5 = n(438140),
    n6 = n(549831),
    n7 = n(342296),
    n8 = n(852712),
    n4 = n(389960),
    n9 = n(173660),
    ie = n(616356),
    it = n(734057),
    ii = n(629016),
    il = n(186111),
    ia = n(360906),
    ir = n(763827),
    is = n(967198),
    io = n(485296),
    iu = n(486020),
    id = n(625494),
    ic = n(536194),
    im = n(19575),
    ih = n(994314),
    ip = n(485599),
    ig = n(116833);
function iA(e) {
    let t = "progress" === e.variant,
        n = t
            ? {
                  title: eO.intl.string(eO.t.uwDBSq),
                  body: eO.intl.formatToPlainString(eO.t.Mk5nzZ, { count: e.newBadgeCount }),
              }
            : { title: eO.intl.string(eO.t["5GD53o"]), body: eO.intl.string(eO.t["2Rb7tE"]) };
    return (0, i.jsx)(nb.A, {
        targetElementRef: e.targetElementRef,
        shouldShow: !0,
        position: "top",
        alignmentStrategy: "edge",
        align: "left",
        caretConfig: { align: "start" },
        size: "lg",
        graphic: {
            type: "dynamic",
            component: ig.DynamicGraphicComponent.BADGE_DIRECTORY_NUX,
            props: { hasProgress: t, badgeIconUrls: t ? e.badgeIconUrls : void 0 },
            aspectRatio: "21/9",
        },
        title: n.title,
        body: n.body,
        actions: [{ variant: "primary", text: eO.intl.string(eO.t.pHo9tZ), onClick: e.onPrimaryAction }],
        onRequestClose: e.onRequestClose,
    });
}
function iv(e) {
    let { variantProps: t, targetElementRef: n, markAsDismissed: l } = e;
    return (0, i.jsx)(iA, {
        ...t,
        onPrimaryAction: () => {
            (l(nU.i.TAKE_ACTION), (0, ey.openBadgeDirectoryModal)());
        },
        onRequestClose: () => l(nU.i.USER_DISMISS),
        targetElementRef: n,
    });
}
var iE = n(206248);
function ix(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: l, position: a, shouldShow: r = !0, children: s } = e,
        o = (0, eG.sw)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s,
            r && o
                ? (0, i.jsx)(iE.H, {
                      targetElementRef: t,
                      title: eO.intl.string(to.default.Qn21R6),
                      body: eO.intl.string(to.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: a,
                      caretConfig: { align: "center" },
                      action: {
                          text: eO.intl.string(eO.t.RzWDqY),
                          onClick: function () {
                              (n(nU.i.TAKE_ACTION), l());
                          },
                      },
                      onRequestClose: function () {
                          n(nU.i.USER_DISMISS);
                      },
                  })
                : null,
        ],
    });
}
var iC = n(379848),
    i_ = n(626584),
    iT = n(757036),
    iI = n(591179),
    iS = n(531685),
    iy = n(259065),
    iN = n(701974),
    ib = n(78294);
let ij = new i_.A("DisplayNameStylesFlywheelCoachmark");
function iR(e) {
    let { markAsDismissed: t, targetElementRef: n, children: a } = e,
        { analyticsLocations: r } = (0, O.Ay)(),
        s = (0, l.useRef)(null),
        o = (0, u.bG)([iS.A], () => iS.A.isFocused()),
        d = (0, iT.L)(tR.PremiumTypes.TIER_2),
        c = (0, iI.X)("DisplayNameStylesFlywheelCoachmark"),
        m = (0, l.useCallback)(() => {
            t(nU.i.TAKE_ACTION);
            let e = nx.default.getCurrentUser();
            c && null != e
                ? (0, tB.openUserProfileModal)({
                      userId: e.id,
                      sourceAnalyticsLocations: r,
                      onModalOpen: () => {
                          (0, iy.L)({ analyticsLocations: r, stackingBehavior: "stack" });
                      },
                  })
                : (0, eU.openUserSettings)(eD.X.PROFILE_PANEL, { analyticsLocations: r }, () => {
                      (0, iy.L)({ analyticsLocations: r });
                  });
        }, [t, r, c]),
        h = (0, l.useCallback)(() => {
            t(nU.i.USER_DISMISS);
        }, [t]);
    (0, l.useEffect)(() => {
        o && s.current?.paused ? s.current?.play().catch(ij.error) : o || s.current?.pause();
    }, [o]);
    let f = d ? [eO.intl.string(iN.default.TyUdka)] : [eO.intl.string(iN.default.dluV0R)];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            a,
            (0, i.jsx)(nb.A, {
                targetElementRef: n,
                shouldShow: !0,
                onRequestClose: h,
                align: "right",
                position: "top",
                caretConfig: { align: "center" },
                gradientColor: "nitro-pink",
                graphic: { type: "video", ref: s, src: ib.A, aspectRatio: "21/9", loop: !0 },
                size: "lg",
                title: eO.intl.string(iN.default.cYwrp8),
                body: f,
                actions: [{ text: eO.intl.string(eO.t["4P5I8V"]), variant: "primary", onClick: m }],
            }),
        ],
    });
}
var iM = n(45780),
    iO = n(696451),
    iw = n(71393),
    iL = n(685073),
    iP = n(73153);
let ik = { lastSeenInfos: {} },
    iD = ik;
class iU extends u.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        iD = e ?? ik;
    }
    getState() {
        return iD;
    }
    getGuildLastSeenInfo(e) {
        return iD.lastSeenInfos[e] ?? null;
    }
}
let iG = new iU(iP.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        iD.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        iD = ik;
    },
});
var iF = n(514661);
let iV = new i_.A("GuildTagAvailableCoachmark");
function iH(e) {
    let t = (0, u.bG)([iw.A], () => iw.A.getGuild(e.guildId));
    function n(n) {
        (t?.profile?.tag != null &&
            iP.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n));
    }
    let { isAdopting: l, onAdoptTag: a, onEditProfile: r } = (0, iF.A)(t?.id ?? null, () => n(nU.i.TAKE_ACTION));
    if (null == t || !(0, iL.q0)(t))
        return (iV.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children);
    let s = [
        { text: eO.intl.string(eO.t.jwEaiX), loading: l, onClick: a, variant: "primary" },
        { text: eO.intl.string(eO.t.s5vZlQ), onClick: r, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(nb.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: ig.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: eO.intl.formatToPlainString(eO.t["m/Tc3n"], { guildName: t.name }),
                body: eO.intl.string(eO.t.DrAXIr),
                actions: s,
                size: "md",
                onRequestClose: () => n(nU.i.USER_DISMISS),
            }),
        ],
    });
}
function iB(e) {
    let t = (0, u.bG)([iw.A], () => iw.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: l, onAdoptTag: a, onEditProfile: r } = (0, iF.A)(t?.id ?? null, () => n(nU.i.TAKE_ACTION));
    if (null == t || !(0, iL.q0)(t))
        return (iV.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children);
    let s = [
        { text: eO.intl.string(eO.t.jwEaiX), loading: l, onClick: a, variant: "primary" },
        { text: eO.intl.string(eO.t.s5vZlQ), onClick: r, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(nb.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: ig.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: eO.intl.formatToPlainString(eO.t.VFqnyU, { guildName: t.name }),
                body: eO.intl.string(eO.t.DrAXIr),
                actions: s,
                size: "md",
                onRequestClose: () => n(nU.i.USER_DISMISS),
            }),
        ],
    });
}
var iW = n(843010),
    iz = n(764231),
    iZ = n(425713);
function iK(e) {
    let { groupName: t, targetElementRef: n } = e,
        l = tM(),
        a = (0, u.bG)([tT.Ay], () => tT.Ay.useReducedMotion),
        r = (0, tI.A)((e) => e.isOpen),
        s = (0, iW.G)();
    return a || null == l || r || s
        ? null
        : (0, i.jsx)(iC.zJ, {
              contentType: d.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: a } = e;
                  return (0, i.jsx)(iq, {
                      recentlyLeveledTenureBadge: l,
                      markAsDismissed: a,
                      targetElementRef: n,
                      shouldShow: t === d.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function iq(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: a, shouldShow: r } = e,
        s = tR.sp.indexOf(t),
        o = (0, iZ.I)(tR.sp[s > 0 ? s - 1 : s]).ambient,
        u = (0, l.useCallback)(() => {
            (n(nU.i.TAKE_ACTION),
                tI.A.setState({ shouldRenderTenureLevelUp: !0 }),
                id._.dispatch(tr.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
        }, [n]),
        d = (0, l.useCallback)(() => {
            n(nU.i.USER_DISMISS);
        }, [n]),
        c = tR.VD[t],
        m = eO.intl.formatToPlainString(eO.t.ewkaVR, {
            timeMilestone: (0, iz.T)(c.id, c.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        h = [{ text: eO.intl.string(eO.t.RzWDqY), variant: "primary", onClick: u }];
    return (0, i.jsx)(nb.A, {
        targetElementRef: a,
        onRequestClose: d,
        shouldShow: r,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: eO.intl.string(eO.t.VoDxsV),
        body: m,
        actions: h,
    });
}
var iY = n(764014);
function i$(e) {
    let { targetElementRef: t } = e,
        n = (0, tI.A)((e) => e.isOpen),
        [l, a] = (0, tE.kn)(n ? [] : [d.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK], {
            groupName: nU.m.ACCOUNT_NAME_ZONE,
            bypassAutoDismiss: !0,
        });
    return l === d.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK
        ? (0, i.jsx)(nb.A, {
              targetElementRef: t,
              graphic: { type: "image", src: iY.A },
              position: "top",
              alignmentStrategy: "edge",
              align: "left",
              caretConfig: { align: "start" },
              title: eO.intl.string(eO.t["Q+dH5r"]),
              body: eO.intl.string(eO.t.YKJw4W),
              onRequestClose: () => a(nU.i.USER_DISMISS),
              actions: [
                  {
                      text: eO.intl.string(eO.t.dcOuei),
                      onClick: function () {
                          (a(nU.i.TAKE_ACTION),
                              tI.A.setState({ shouldScrollToOrbsMenuItem: !0 }),
                              nr.Ay.setUserOpenedWalletViaProfileDCF(!0),
                              id._.dispatch(tr.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
                      },
                  },
              ],
          })
        : null;
}
function iX(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, n1.c9)(),
        l = null != e.targetElementRef.current && t && n,
        [a, r] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, iM.G$)(d.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? tr.dJq),
                l = (0, u.bG)(
                    [iw.A, nx.default, iO.Ay],
                    () => {
                        if (null === e) return !1;
                        let t = iw.A.getGuild(e);
                        if (void 0 === t || !(0, iL.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                        let n = nx.default.getCurrentUser();
                        if (
                            void 0 === n ||
                            (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                        )
                            return !1;
                        let i = iO.Ay.getMember(e, n.id);
                        return null != i && !i.isPending;
                    },
                    [e],
                );
            return (0, tE.ww)(l && n && !i ? [d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? tr.eGj);
        })(e.guildId, { shouldShow: l }),
        [s, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                l = i?.identityGuildId ?? null,
                a = (0, u.bG)([iG], () => (null === l ? null : iG.getGuildLastSeenInfo(l))),
                r = (0, u.bG)([iw.A], () => iw.A.getGuild(l)?.profile?.tag),
                s = null != r && i?.identityGuildId === l && i?.tag === null,
                o = null != l && a?.tag === r,
                c = null !== l && s && !o;
            return (0, tE.Wl)(c && n ? d.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: l });
    return l
        ? a === d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(iB, {
                  guildId: e.guildId,
                  onDismiss: r,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : s === d.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(iH, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(iK, { groupName: nU.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        e.isOrbchievementsEnabled && (0, i.jsx)(i$, { targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(iC.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: nU.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: l } = t;
                                switch (n) {
                                    case d.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK:
                                        return (0, i.jsx)(iR, {
                                            markAsDismissed: l,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case d.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, i.jsx)(ix, {
                                            markAsDismissed: l,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: eH.p,
                                            children: e.children,
                                        });
                                    case d.M.BADGE_DIRECTORY_NUX_POPOVER:
                                        return (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                e.children,
                                                (0, i.jsx)(iv, {
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
var iQ = n(348858),
    iJ = n(615675),
    i0 = n(900797),
    i1 = n(847374),
    i2 = n(617354),
    i3 = n(829773),
    i5 = n(42473),
    i6 = n(731854),
    i7 = n(516171),
    i8 = n(577755);
function i4(e) {
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
            play: p,
            events: { onMouseEnter: g, onMouseLeave: A },
        } = (0, iQ.I)(m ? "undeafen" : "deafen"),
        v = n ? iJ.T : h,
        { name: E } = (0, ec.x5)(i6.oh.AUDIO_OUTPUT),
        x = (0, i2.A)(t, n, a),
        { analyticsLocations: C } = (0, O.Ay)(M.A.AUDIO_OUTPUT_BUTTON),
        _ = l.useRef(null);
    return (
        l.useEffect(() => () => p(), [m, p]),
        (0, i.jsx)(O.f5, {
            value: C,
            children: (0, i.jsx)(f.Y, {
                targetElementRef: _,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        c(),
                        (0, i.jsx)(O.f5, {
                            value: C,
                            children: (0, i.jsx)(i3.A, {
                                onInteraction: (0, Z.s)("AudioDeviceMenu", M.A.ACCOUNT),
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
                animation: f.Y.Animation.FADE,
                spacing: 4,
                children: (e, t) => {
                    let { onClick: l } = e,
                        { isShown: c } = t,
                        h = c ? i0.t : i1.a;
                    return (0, i.jsxs)("div", {
                        ref: _,
                        className: r()(i7.Lh, { [i7.v8]: m, [i7.q6]: c }),
                        children: [
                            (0, i.jsx)(i5.A, {
                                "aria-checked": m,
                                "aria-label": eO.intl.string(eO.t.wjcRFX),
                                className: i7.eT,
                                disabled: a,
                                icon: (0, i.jsx)(v, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: m ? nf.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: m ? i8.o : void 0,
                                innerClassName: r()({ [i8.T]: n }),
                                onClick: s,
                                onContextMenu: l,
                                onMouseEnter: g,
                                onMouseLeave: A,
                                plated: null != u,
                                redGlow: m,
                                role: "switch",
                                tooltipText: x,
                            }),
                            (0, i.jsx)(i5.A, {
                                className: r()(i7.UT, { [i7.q6]: c }),
                                disabled: a,
                                icon: (0, i.jsx)(h, {
                                    className: i7.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: m ? nf.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: l,
                                onContextMenu: l,
                                plated: null != u,
                                redGlow: m,
                                tooltipType: d ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: d,
                                tooltipPositionKey: d
                                    ? eO.intl.formatToPlainString(eO.t["f+DDY/"], { outputDeviceName: E })
                                    : void 0,
                                tooltipShouldShow: !c,
                                tooltipText: d
                                    ? eO.intl.format(eO.t["f+DDY/"], { outputDeviceName: E })
                                    : eO.intl.string(eO.t.aA4Vce),
                                "aria-label": d
                                    ? eO.intl.formatToPlainString(eO.t["f+DDY/"], { outputDeviceName: E })
                                    : eO.intl.string(eO.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var i9 = n(523875),
    le = n(666654),
    lt = n(993719);
let ln = {};
class li extends u.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return ln[e] ?? !1;
    }
}
let ll = new li(iP.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        ln[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        ln[t] = !1;
    },
});
var la = n(362823),
    lr = n(980923),
    ls = n(573549),
    lo = n(222176),
    lu = n(973324);
function ld(e) {
    let t,
        {
            selfMute: n,
            serverMute: a,
            suppress: s,
            awaitingRemote: o,
            iconForeground: d,
            onMouseEnter: c,
            onMouseLeave: m,
            onClick: h,
            nameplate: p,
            shouldShowSpeakingWhileMutedTooltip: g,
            shouldShowSpeakingWhilePTTTooltip: A,
            shouldShowInputDeviceChangedTooltip: v,
            shouldShowPTTJoinTooltip: E,
            dismissTooltips: x,
            speaking: C,
        } = e,
        _ = (0, u.bG)([ia.Ay], () => ia.Ay.getMode() === i6.TB.PUSH_TO_TALK),
        T = (0, u.bG)([ia.Ay], () => ia.Ay.getSettings().modeOptions.shortcut),
        I = (0, u.bG)([ll], () => ll.getIsTutorialActive(la.v.MUTE_TUTORIAL)),
        S = (0, u.bG)([ir.A], () => null != ir.A.getChannelId()),
        { name: y } = (0, ec.x5)(i6.oh.AUDIO_INPUT),
        { enabledInputProfiles: N } = (0, n8.d)({ location: "MicrophoneButton" }),
        b = l.useRef(null),
        j = n || s || a,
        R = (0, i9.L)(j ? "unmute" : "mute"),
        { analyticsLocations: w } = (0, O.Ay)(M.A.AUDIO_INPUT_BUTTON),
        { Component: L, events: P, play: k } = R,
        D = a || s ? le.O : L;
    l.useEffect(() => () => k(), [j, k]);
    let U = (0, lr.A)(n, a, s, o);
    t = g
        ? { tooltipType: "green_void_do_not_use", tooltipText: eO.intl.string(eO.t["29gnR4"]), tooltipForceOpen: !0 }
        : E || A
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: eO.intl.format(eO.t.c1qUOQ, { keybind: eJ.dI(T).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: U };
    let G = _ && S,
        F = j ? nf.A.colors.ICON_VOICE_MUTED : "currentColor",
        V = l.useCallback(() => {
            (h(), I && lt.N(la.v.MUTE_TUTORIAL));
        }, [h, I]);
    return (0, i.jsxs)(O.f5, {
        value: w,
        children: [
            (0, i.jsx)(f.Y, {
                targetElementRef: b,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        x(),
                        (0, i.jsx)(O.f5, {
                            value: w,
                            children: (0, i.jsx)(i3.A, {
                                onInteraction: (0, Z.s)("AudioDeviceMenu", M.A.ACCOUNT),
                                onClose: t,
                                maybeRenderPTTCheckbox: !0,
                                renderInputProfiles: N.length > 0,
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
                        { isShown: a } = n,
                        s = a ? i0.t : i1.a;
                    return (0, i.jsxs)("div", {
                        ref: b,
                        className: r()(i7.Lh, { [i7.v8]: j, [i7.q6]: a }),
                        children: [
                            (0, i.jsx)(i5.A, {
                                "aria-checked": j,
                                "aria-label": eO.intl.string(eO.t.w4m945),
                                className: i7.eT,
                                disabled: o,
                                icon: (0, i.jsx)(D, { size: "custom", width: 20, height: 20, color: F, className: d }),
                                onClick: V,
                                onContextMenu: l,
                                onMouseEnter: () => {
                                    (c(), P.onMouseEnter());
                                },
                                onMouseLeave: () => {
                                    (m(), P.onMouseLeave());
                                },
                                plated: null != p,
                                redGlow: j,
                                role: "switch",
                                ...t,
                                children: G ? (0, i.jsx)("div", { className: r()(lo.U, { [lo.z]: C }) }) : null,
                            }),
                            (0, i.jsx)(i5.A, {
                                "aria-label": v
                                    ? eO.intl.formatToPlainString(eO.t["18wnuD"], { inputDeviceName: y })
                                    : eO.intl.string(eO.t.fRzCbB),
                                className: r()(i7.UT, { [i7.q6]: a }),
                                disabled: o,
                                icon: (0, i.jsx)(s, {
                                    className: i7.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: F,
                                }),
                                onClick: l,
                                onContextMenu: l,
                                onMouseEnter: c,
                                onMouseLeave: m,
                                plated: null != p,
                                redGlow: j,
                                tooltipType: v ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: v,
                                tooltipPositionKey: v
                                    ? eO.intl.formatToPlainString(eO.t["18wnuD"], { inputDeviceName: y })
                                    : void 0,
                                tooltipShouldShow: !a,
                                tooltipText: v
                                    ? eO.intl.format(eO.t["18wnuD"], { inputDeviceName: y })
                                    : eO.intl.string(eO.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(nb.A, {
                targetElementRef: b,
                shouldShow: I,
                graphic: { type: "image", src: lu.A },
                onRequestClose: () => {
                    lt.N(la.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: eO.intl.string(ls.default.VG4zAf),
                body: eO.intl.string(ls.default["8VIRzR"]),
            }),
        ],
    });
}
var lc = n(935399),
    lm = n(505312),
    lh = n(848847),
    lf = n(975807),
    lp = n(425565),
    lg = n(745188);
let lA = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="143" height="107"><rect x="1" y="1" width="141" height="105" fill="none" stroke="hotpink" stroke-width="2"/></svg>')}`;
function lv(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        a = l.useMemo(
            () => [
                {
                    text: eO.intl.string(lg.default["j4n5/K"]),
                    variant: "primary",
                    onClick: () => {
                        ((0, lf.A)(lp.C1), t(nU.i.TAKE_ACTION));
                    },
                },
            ],
            [t],
        ),
        r = l.useCallback(() => {
            t(nU.i.USER_DISMISS);
        }, [t]);
    return (0, i.jsx)(nb.A, {
        targetElementRef: n,
        graphic: { type: "image", src: lA, aspectRatio: "6/4" },
        title: eO.intl.string(lg.default.tmst3F),
        body: eO.intl.string(lg.default.sJHQqC),
        position: "top",
        caretConfig: { align: "end" },
        actions: a,
        onRequestClose: r,
    });
}
function lE(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        { analyticsLocations: l } = (0, O.Ay)(M.A.HOLIDAY_COACHMARK);
    return (0, i.jsx)(nb.A, {
        targetElementRef: n,
        align: "center",
        position: "top",
        caretConfig: { align: "end" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/f5c1292fad8b7f3e1381e1a235d5f9ce22d791176d5f2fbd4d3dc461d1f895c0.png",
        },
        title: eO.intl.string(eO.t.Mjs8KR),
        body: eO.intl.string(eO.t.U0INks),
        actions: [
            {
                text: eO.intl.string(eO.t.NENZhS),
                onClick: () => {
                    ((0, eU.openUserSettings)(eD.X.NOTIFICATION_HOLIDAY_SOUNDPACK, { analyticsLocations: l }),
                        t(nU.i.TAKE_ACTION));
                },
            },
        ],
        gradientColor: "purple",
        onRequestClose: () => t(nU.i.USER_DISMISS),
    });
}
var lx = n(88001),
    lC = n(148155),
    l_ = n(438705);
function lT(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: a } = e,
        r = l.useCallback(() => {
            (a(), (0, eU.openUserSettings)(eD.X.SUBSCRIPTIONS_PANEL));
        }, [a]);
    return (0, i.jsx)(nb.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: l_ },
        shouldShow: n,
        title: eO.intl.format(lC.default.bx8sR9, { premiumGroupProductName: (0, lx.DP)() }),
        body: eO.intl.format(lC.default.Pw4OFZ, { premiumGroupProductName: (0, lx.DP)() }),
        onRequestClose: a,
        actions: [{ text: eO.intl.string(lC.default.DD26QR), onClick: r }],
    });
}
var lI = n(873298),
    lS = n(840387);
function ly(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        a = (0, lS.Z)(),
        r = t8.KP.useSetting(),
        s = a && r !== lI.KP.FRIENDS_AND_ALL_GUILDS,
        o = l.useCallback(() => {
            (t(nU.i.TAKE_ACTION), (0, eU.openUserSettings)(eD.X.PROFILE_PRIVACY_CATEGORY));
        }, [t]),
        u = l.useCallback(() => {
            t(nU.i.USER_DISMISS);
        }, [t]),
        d = s
            ? r === lI.KP.FRIENDS_ONLY
                ? eO.intl.string(eO.t["/hogEy"])
                : eO.intl.string(eO.t["6hEfm1"])
            : eO.intl.string(eO.t.bnNxW1);
    return (0, i.jsx)(nb.A, {
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
        title: eO.intl.string(eO.t.Ve4nS1),
        body: d,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: eO.intl.string(eO.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
var lN = n(415443);
function lb(e) {
    let t,
        n,
        {
            webBuildOverride: a,
            onClick: r,
            onContextMenu: s,
            dismissibleContents: o,
            iconForeground: u,
            nameplate: c,
        } = e,
        m = l.useRef(null),
        [h, f] = l.useState(!1);
    (0, lc.Ay)(() => {
        function e() {
            return f(!0);
        }
        return (
            id._.subscribe(tr.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                id._.unsubscribe(tr.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let p = l.useCallback(() => {
            (f(!1), r());
        }, [r]),
        g = eu.A.coachmarkDismissibleContent;
    if (null != a) {
        let e = (0, lN.A)("1793042521818", !0);
        t =
            null != e
                ? eO.intl.formatToPlainString(eO.t.wve4kg, { webBuildOverride: a.id, builtAt: e })
                : eO.intl.formatToPlainString(eO.t.Gzh6ZP, { webBuildOverride: a.id });
    } else t = eO.intl.string(eO.t.cduTBL);
    let A = eK.SettingsIcon,
        v = (0, lm.w)();
    return (
        (A = null != a ? lh.H : v.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(i5.A, {
                    ref: m,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: p,
                    onContextMenu: s,
                    "aria-label": eO.intl.string(eO.t.cduTBL),
                    icon: (0, i.jsx)(A, { size: "refresh_sm", color: "currentColor", className: u }),
                    ...v.events,
                    plated: null != c,
                }),
                (0, i.jsx)(lT, { targetElementRef: m, shouldShow: h, onDismiss: () => f(!1) }),
                (0, i.jsx)(iC.Ay, {
                    contentTypes: o,
                    groupName: nU.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === d.M.TINY_BRONCO && null != n5.PL
                            ? (0, i.jsx)(l.Suspense, {
                                  fallback: null,
                                  children: (0, i.jsx)(n5.PL, { markAsDismissed: n, targetElementRef: m }),
                              })
                            : t === d.M.PRIVATE_PROFILE_COACHMARK
                              ? (0, i.jsx)(ly, { markAsDismissed: n, targetElementRef: m })
                              : t === d.M.GIFT_CARDS_MARKETING_COACHMARK
                                ? (0, i.jsx)(lv, { markAsDismissed: n, targetElementRef: m })
                                : null != g && t === g
                                  ? (0, i.jsx)(lE, { markAsDismissed: n, targetElementRef: m })
                                  : null;
                    },
                }),
            ],
        })
    );
}
var lj = n(358285);
let lR = im.Ay.getEnableHardwareAcceleration() ? m.Js : m.eu,
    lM = 2.5 * P.A.Millis.SECOND,
    lO = 2 * P.A.Millis.MINUTE,
    lw = 5 * P.A.Millis.SECOND;
function lL(e) {
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
            renderNameTag: g,
            nameplate: A,
            avatarDecoration: v,
            "data-jump-section": E,
        } = e,
        C = l.useRef(null),
        _ = t ?? C,
        I = (0, iu.F_)({ avatarDecoration: v, size: (0, q.Te)(h._3.SIZE_32) }),
        S = (0, et.A)(),
        {
            updateOpenPopoutRef: y,
            highlightBadge: N,
            setHighlightBadge: b,
        } = (function () {
            let e = l.useRef(null),
                t = l.useCallback((t) => {
                    e.current = () => {
                        (t.onMouseDown(), t.onClick());
                    };
                }, []),
                [n, i] = l.useState(),
                [a, r] = l.useState(!1);
            return (
                (0, T.A)(() => r(!0), 750),
                l.useEffect(() => {
                    function t(t) {
                        let { highlightBadge: n } = t;
                        (null != n && i(n), e.current?.());
                    }
                    return (
                        id._.subscribe(tr.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            id._.unsubscribe(tr.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: a ? n : void 0, setHighlightBadge: i }
            );
        })(),
        j = (0, $.K)(A);
    return null == u
        ? null
        : (0, i.jsx)(x.A, {
              object: tr.ZSU.AVATAR,
              children: (0, i.jsx)(n7.A, {
                  user: u,
                  targetElementRef: _,
                  clickTrap: !0,
                  preload: () =>
                      (0, n6.A)(u.id, u.getAvatarURL(void 0, n7.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: l } = e;
                      return (0, i.jsx)(n0, {
                          currentUser: u,
                          highlightBadge: N,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: l,
                          className: lj.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: f.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      (m(), b(void 0));
                  },
                  children: (e) => {
                      y(e);
                      let { onMouseEnter: t, onMouseDown: l, ...m } = e;
                      return (0, i.jsxs)("div", {
                          ref: _,
                          style: j,
                          onMouseEnter: t,
                          onMouseDown: l,
                          onClick: (t) => {
                              (e.onClick?.(t), c?.(t));
                          },
                          className: r()(lj.Q9, { [lj.ZQ]: null != A }),
                          children: [
                              (0, i.jsx)(p.D, {
                                  ...m,
                                  onClick: (t) => {
                                      (t.stopPropagation(), e.onClick?.(t), c?.(t));
                                  },
                                  "aria-label": eO.intl.string(eO.t["5fWB8U"]),
                                  focusProps: { ringTarget: _ },
                                  className: lj.$n,
                                  "data-jump-section": E,
                              }),
                              (0, i.jsx)(lR, {
                                  size: h._3.SIZE_32,
                                  src: u.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: I,
                                  status: o ? tr.clD.STREAMING : d,
                                  voiceStatus: (0, h.n$)(n, a),
                                  voiceDb: s,
                                  className: lj.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: lj.oM, children: g(S) }),
                          ],
                      });
                  },
              }),
          });
}
class lP extends l.PureComponent {
    speakingWhileMutedTooltipTimeout = new c.Ep();
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
        ((0, W.A)(e, t, tr.JJy.ACCOUNT_PANEL), (0, z.X)(M.A.ACCOUNT, z.O.MIC, n));
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        ((0, B.A)(e, tr.JJy.ACCOUNT_PANEL), (0, z.X)(M.A.ACCOUNT, z.O.DEAFEN, !t));
    };
    handleOpenAccountSettings = () => {
        (this.dismissTooltips(),
            ir.A.isConnected() ? (0, eU.openUserSettings)(eD.X.VOICE_AND_VIDEO_PANEL) : (0, eU.openUserSettings)());
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("839460"),
                    n.e("706073"),
                    n.e("227512"),
                    n.e("262564"),
                    n.e("71866"),
                    n.e("891473"),
                    n.e("101105"),
                    n.e("263406"),
                    n.e("1955"),
                    n.e("341161"),
                    n.e("410526"),
                    n.e("202985"),
                    n.e("603619"),
                    n.e("833292"),
                    n.e("222969"),
                    n.e("515363"),
                    n.e("149697"),
                    n.e("128804"),
                    n.e("60882"),
                    n.e("71151"),
                    n.e("227853"),
                    n.e("286615"),
                    n.e("70866"),
                    n.e("311541"),
                    n.e("795854"),
                    n.e("870088"),
                    n.e("300641"),
                    n.e("571163"),
                    n.e("586662"),
                    n.e("831377"),
                    n.e("709976"),
                    n.e("750955"),
                    n.e("953343"),
                    n.e("279774"),
                    n.e("763945"),
                    n.e("261204"),
                    n.e("686731"),
                    n.e("807432"),
                    n.e("873532"),
                    n.e("590088"),
                    n.e("807003"),
                    n.e("46083"),
                    n.e("152133"),
                    n.e("747802"),
                    n.e("626353"),
                    n.e("71169"),
                    n.e("906470"),
                    n.e("736663"),
                    n.e("419121"),
                    n.e("489020"),
                    n.e("919789"),
                    n.e("669130"),
                    n.e("802890"),
                    n.e("82937"),
                    n.e("987221"),
                    n.e("157064"),
                    n.e("156957"),
                    n.e("918786"),
                    n.e("701335"),
                    n.e("257935"),
                    n.e("724086"),
                    n.e("358937"),
                    n.e("448738"),
                    n.e("700181"),
                    n.e("804439"),
                    n.e("84978"),
                    n.e("894292"),
                    n.e("153302"),
                    n.e("88683"),
                    n.e("363874"),
                    n.e("923981"),
                    n.e("750370"),
                    n.e("972281"),
                    n.e("307107"),
                    n.e("896622"),
                    n.e("466592"),
                    n.e("73946"),
                    n.e("282050"),
                    n.e("440727"),
                    n.e("387970"),
                    n.e("847445"),
                    n.e("547510"),
                    n.e("966366"),
                    n.e("983513"),
                    n.e("76928"),
                    n.e("355502"),
                    n.e("528311"),
                    n.e("411938"),
                    n.e("653383"),
                    n.e("122026"),
                    n.e("31159"),
                    n.e("952068"),
                    n.e("768289"),
                    n.e("772565"),
                    n.e("533781"),
                    n.e("328276"),
                    n.e("592000"),
                    n.e("524434"),
                    n.e("854326"),
                    n.e("984"),
                    n.e("226229"),
                    n.e("981833"),
                    n.e("614929"),
                    n.e("570473"),
                    n.e("516497"),
                    n.e("24774"),
                    n.e("326794"),
                    n.e("489565"),
                    n.e("684231"),
                    n.e("570690"),
                    n.e("886631"),
                    n.e("435860"),
                    n.e("426782"),
                    n.e("406322"),
                    n.e("942571"),
                    n.e("464759"),
                    n.e("763343"),
                    n.e("194704"),
                    n.e("684290"),
                    n.e("274461"),
                    n.e("830560"),
                    n.e("526575"),
                    n.e("764601"),
                    n.e("725134"),
                    n.e("841152"),
                    n.e("165291"),
                    n.e("109383"),
                    n.e("818291"),
                    n.e("243794"),
                    n.e("519435"),
                    n.e("10985"),
                    n.e("171206"),
                    n.e("102075"),
                    n.e("828178"),
                    n.e("45036"),
                    n.e("974119"),
                    n.e("434683"),
                    n.e("920955"),
                    n.e("505928"),
                    n.e("752657"),
                    n.e("747973"),
                    n.e("314001"),
                    n.e("885251"),
                    n.e("857871"),
                    n.e("529366"),
                    n.e("990185"),
                    n.e("444038"),
                    n.e("849162"),
                    n.e("660201"),
                    n.e("770925"),
                    n.e("179301"),
                    n.e("918347"),
                    n.e("102247"),
                    n.e("689521"),
                    n.e("237403"),
                    n.e("10886"),
                    n.e("84993"),
                    n.e("343298"),
                    n.e("592268"),
                    n.e("374962"),
                    n.e("553627"),
                    n.e("59599"),
                    n.e("46238"),
                    n.e("736919"),
                    n.e("440636"),
                    n.e("568960"),
                    n.e("459257"),
                    n.e("790484"),
                    n.e("339715"),
                    n.e("985301"),
                    n.e("981059"),
                    n.e("631323"),
                    n.e("464452"),
                    n.e("74979"),
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
                    n.e("377016"),
                    n.e("226867"),
                    n.e("754366"),
                    n.e("657682"),
                    n.e("600336"),
                    n.e("535413"),
                    n.e("172413"),
                    n.e("145006"),
                    n.e("998670"),
                    n.e("15649"),
                    n.e("38956"),
                    n.e("302458"),
                    n.e("556436"),
                    n.e("256172"),
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
                    n.e("587308"),
                    n.e("903758"),
                    n.e("768071"),
                    n.e("96922"),
                    n.e("292699"),
                    n.e("198877"),
                    n.e("531521"),
                    n.e("786830"),
                    n.e("446860"),
                    n.e("28636"),
                    n.e("50324"),
                    n.e("622936"),
                    n.e("216947"),
                    n.e("301850"),
                    n.e("926787"),
                    n.e("870423"),
                    n.e("727139"),
                    n.e("993562"),
                    n.e("464838"),
                    n.e("772699"),
                    n.e("40074"),
                    n.e("733814"),
                    n.e("726399"),
                    n.e("377476"),
                    n.e("403032"),
                    n.e("746309"),
                    n.e("883221"),
                    n.e("97585"),
                    n.e("205406"),
                    n.e("64640"),
                    n.e("368991"),
                    n.e("688508"),
                    n.e("422037"),
                    n.e("232960"),
                    n.e("656997"),
                    n.e("828849"),
                    n.e("74886"),
                    n.e("713273"),
                    n.e("944121"),
                    n.e("114785"),
                    n.e("774899"),
                    n.e("643363"),
                    n.e("980902"),
                    n.e("157771"),
                    n.e("43853"),
                    n.e("102170"),
                    n.e("401071"),
                    n.e("721654"),
                    n.e("283543"),
                    n.e("715958"),
                    n.e("560042"),
                    n.e("824992"),
                    n.e("827649"),
                    n.e("860350"),
                    n.e("769590"),
                    n.e("580305"),
                    n.e("161411"),
                    n.e("966268"),
                    n.e("25839"),
                    n.e("683084"),
                    n.e("927808"),
                    n.e("273298"),
                    n.e("135144"),
                    n.e("959922"),
                    n.e("997926"),
                    n.e("180556"),
                    n.e("876880"),
                    n.e("369938"),
                    n.e("888213"),
                    n.e("150183"),
                    n.e("394692"),
                    n.e("272788"),
                    n.e("704570"),
                    n.e("595944"),
                    n.e("45374"),
                    n.e("10058"),
                    n.e("859516"),
                    n.e("30482"),
                    n.e("641794"),
                    n.e("493118"),
                    n.e("49571"),
                    n.e("434352"),
                    n.e("599135"),
                    n.e("942186"),
                    n.e("242967"),
                    n.e("557729"),
                    n.e("463143"),
                    n.e("363750"),
                    n.e("28420"),
                    n.e("477550"),
                    n.e("71930"),
                    n.e("97191"),
                    n.e("385504"),
                    n.e("310994"),
                    n.e("770720"),
                    n.e("195830"),
                    n.e("338218"),
                    n.e("846582"),
                    n.e("589752"),
                    n.e("53719"),
                    n.e("992535"),
                    n.e("737132"),
                    n.e("207998"),
                    n.e("442781"),
                    n.e("803511"),
                    n.e("955410"),
                    n.e("868052"),
                    n.e("106980"),
                    n.e("974969"),
                    n.e("310933"),
                    n.e("257073"),
                    n.e("179028"),
                    n.e("29489"),
                    n.e("269714"),
                    n.e("445380"),
                    n.e("212037"),
                    n.e("120239"),
                    n.e("213217"),
                    n.e("680015"),
                    n.e("585005"),
                    n.e("684986"),
                    n.e("527302"),
                    n.e("423538"),
                    n.e("700572"),
                    n.e("14775"),
                    n.e("446761"),
                    n.e("915213"),
                    n.e("530166"),
                    n.e("594045"),
                    n.e("348567"),
                    n.e("452075"),
                    n.e("900277"),
                    n.e("718126"),
                    n.e("127962"),
                    n.e("503376"),
                    n.e("494822"),
                    n.e("926132"),
                    n.e("76428"),
                    n.e("834552"),
                    n.e("993103"),
                    n.e("863232"),
                    n.e("708757"),
                    n.e("517888"),
                    n.e("959880"),
                    n.e("174016"),
                    n.e("907167"),
                    n.e("910471"),
                    n.e("11301"),
                    n.e("811133"),
                    n.e("861060"),
                    n.e("364827"),
                    n.e("77333"),
                    n.e("56366"),
                    n.e("217229"),
                    n.e("477175"),
                    n.e("960235"),
                    n.e("585968"),
                    n.e("910486"),
                    n.e("198329"),
                    n.e("678157"),
                    n.e("942374"),
                    n.e("147134"),
                    n.e("331988"),
                    n.e("10866"),
                    n.e("236850"),
                    n.e("40291"),
                    n.e("733115"),
                    n.e("397270"),
                    n.e("190779"),
                    n.e("373122"),
                    n.e("217951"),
                    n.e("221856"),
                    n.e("755936"),
                    n.e("147662"),
                    n.e("609705"),
                    n.e("899843"),
                    n.e("904448"),
                    n.e("833703"),
                    n.e("256274"),
                    n.e("544571"),
                    n.e("692990"),
                    n.e("362931"),
                    n.e("393336"),
                    n.e("745959"),
                    n.e("858529"),
                    n.e("481987"),
                    n.e("595653"),
                    n.e("958038"),
                    n.e("532039"),
                    n.e("719466"),
                    n.e("178565"),
                    n.e("630267"),
                    n.e("576909"),
                    n.e("27355"),
                    n.e("406174"),
                    n.e("715555"),
                    n.e("481647"),
                    n.e("776273"),
                    n.e("776602"),
                    n.e("391763"),
                    n.e("704434"),
                    n.e("140402"),
                    n.e("28102"),
                    n.e("21921"),
                    n.e("407170"),
                    n.e("969354"),
                    n.e("844780"),
                    n.e("571210"),
                    n.e("676418"),
                    n.e("572963"),
                    n.e("70833"),
                    n.e("897073"),
                    n.e("770291"),
                    n.e("913823"),
                    n.e("166495"),
                    n.e("307575"),
                    n.e("718667"),
                    n.e("88342"),
                    n.e("187110"),
                    n.e("942724"),
                    n.e("139970"),
                    n.e("393766"),
                    n.e("940258"),
                    n.e("858164"),
                    n.e("521930"),
                    n.e("292583"),
                    n.e("308555"),
                    n.e("425055"),
                    n.e("427032"),
                    n.e("173764"),
                    n.e("554241"),
                    n.e("311802"),
                    n.e("724303"),
                    n.e("698965"),
                    n.e("25949"),
                    n.e("53102"),
                    n.e("586127"),
                    n.e("836863"),
                    n.e("368358"),
                    n.e("9205"),
                    n.e("146070"),
                    n.e("344502"),
                    n.e("617249"),
                    n.e("88599"),
                    n.e("179049"),
                    n.e("854622"),
                    n.e("95340"),
                    n.e("362422"),
                    n.e("807936"),
                    n.e("856437"),
                    n.e("590365"),
                    n.e("989088"),
                    n.e("37977"),
                    n.e("136149"),
                    n.e("470068"),
                    n.e("354044"),
                    n.e("817989"),
                    n.e("437065"),
                    n.e("720590"),
                    n.e("709640"),
                    n.e("235313"),
                    n.e("147626"),
                    n.e("442901"),
                    n.e("613867"),
                    n.e("952548"),
                    n.e("164776"),
                    n.e("203589"),
                    n.e("636373"),
                    n.e("294857"),
                    n.e("726033"),
                    n.e("480830"),
                    n.e("179745"),
                    n.e("655708"),
                    n.e("64504"),
                    n.e("676156"),
                    n.e("553984"),
                    n.e("280854"),
                    n.e("335395"),
                    n.e("884601"),
                    n.e("782969"),
                    n.e("154469"),
                    n.e("945413"),
                    n.e("146844"),
                    n.e("163235"),
                    n.e("212055"),
                    n.e("14035"),
                    n.e("632756"),
                    n.e("564850"),
                    n.e("504370"),
                    n.e("170104"),
                    n.e("491793"),
                    n.e("902564"),
                    n.e("428967"),
                    n.e("397224"),
                    n.e("67878"),
                    n.e("953858"),
                    n.e("758946"),
                    n.e("214285"),
                    n.e("248330"),
                    n.e("731503"),
                    n.e("803332"),
                    n.e("859546"),
                    n.e("432805"),
                    n.e("938149"),
                    n.e("408362"),
                    n.e("741678"),
                    n.e("608032"),
                    n.e("852617"),
                    n.e("477970"),
                    n.e("102698"),
                    n.e("204744"),
                    n.e("737021"),
                    n.e("818465"),
                    n.e("971430"),
                    n.e("211185"),
                    n.e("976516"),
                    n.e("41332"),
                    n.e("400501"),
                    n.e("985794"),
                    n.e("732194"),
                    n.e("767837"),
                    n.e("436564"),
                    n.e("473384"),
                    n.e("432209"),
                    n.e("893349"),
                    n.e("368062"),
                    n.e("859991"),
                    n.e("603998"),
                    n.e("386317"),
                    n.e("709371"),
                    n.e("599719"),
                    n.e("523276"),
                    n.e("252229"),
                    n.e("868214"),
                    n.e("77473"),
                    n.e("939171"),
                    n.e("987478"),
                    n.e("550033"),
                    n.e("661814"),
                    n.e("96680"),
                    n.e("812042"),
                    n.e("25279"),
                    n.e("729963"),
                    n.e("830938"),
                    n.e("691671"),
                    n.e("612287"),
                    n.e("588070"),
                    n.e("692513"),
                    n.e("538513"),
                    n.e("916758"),
                    n.e("147864"),
                    n.e("793438"),
                    n.e("122990"),
                    n.e("276177"),
                    n.e("305557"),
                    n.e("36227"),
                    n.e("50097"),
                    n.e("850488"),
                    n.e("484189"),
                    n.e("883952"),
                    n.e("229666"),
                    n.e("92295"),
                    n.e("589916"),
                    n.e("460773"),
                    n.e("159957"),
                    n.e("458273"),
                    n.e("208018"),
                    n.e("968763"),
                    n.e("278045"),
                    n.e("26001"),
                    n.e("838056"),
                    n.e("414591"),
                    n.e("652111"),
                    n.e("93461"),
                    n.e("577894"),
                    n.e("203930"),
                    n.e("935948"),
                    n.e("896804"),
                    n.e("708536"),
                    n.e("120379"),
                    n.e("903663"),
                    n.e("411353"),
                    n.e("508829"),
                    n.e("824547"),
                    n.e("963203"),
                    n.e("295998"),
                    n.e("275133"),
                    n.e("819193"),
                    n.e("437961"),
                    n.e("201243"),
                    n.e("215920"),
                    n.e("951811"),
                    n.e("36877"),
                    n.e("711617"),
                    n.e("228850"),
                    n.e("908081"),
                    n.e("527687"),
                    n.e("904774"),
                    n.e("78601"),
                    n.e("295175"),
                    n.e("574678"),
                    n.e("829260"),
                    n.e("806295"),
                    n.e("342234"),
                    n.e("81189"),
                    n.e("66580"),
                    n.e("496268"),
                    n.e("248836"),
                    n.e("741111"),
                    n.e("200203"),
                    n.e("489523"),
                    n.e("249629"),
                    n.e("726294"),
                    n.e("780407"),
                    n.e("127659"),
                    n.e("327198"),
                    n.e("267255"),
                    n.e("132737"),
                    n.e("781949"),
                    n.e("356675"),
                    n.e("504098"),
                    n.e("492383"),
                    n.e("920593"),
                    n.e("98972"),
                    n.e("431649"),
                    n.e("604172"),
                    n.e("276814"),
                    n.e("568881"),
                    n.e("341701"),
                    n.e("562999"),
                    n.e("283230"),
                    n.e("42834"),
                    n.e("225612"),
                    n.e("468083"),
                    n.e("866568"),
                    n.e("548730"),
                    n.e("871467"),
                    n.e("350949"),
                    n.e("270591"),
                    n.e("825947"),
                    n.e("51892"),
                    n.e("763096"),
                    n.e("841838"),
                    n.e("472789"),
                    n.e("967874"),
                    n.e("137937"),
                    n.e("14712"),
                    n.e("760989"),
                    n.e("827335"),
                    n.e("369501"),
                    n.e("303710"),
                    n.e("949013"),
                    n.e("860003"),
                    n.e("396325"),
                    n.e("808979"),
                    n.e("33448"),
                    n.e("79216"),
                    n.e("645830"),
                    n.e("512162"),
                    n.e("733771"),
                    n.e("866008"),
                    n.e("531158"),
                    n.e("946039"),
                    n.e("995602"),
                    n.e("816589"),
                    n.e("636516"),
                    n.e("896480"),
                    n.e("614256"),
                    n.e("966598"),
                    n.e("146149"),
                    n.e("360536"),
                    n.e("986300"),
                    n.e("479006"),
                    n.e("138733"),
                    n.e("228011"),
                    n.e("759174"),
                    n.e("815852"),
                    n.e("576415"),
                    n.e("983947"),
                    n.e("944727"),
                    n.e("705871"),
                    n.e("527462"),
                    n.e("501888"),
                    n.e("186546"),
                    n.e("960816"),
                    n.e("168031"),
                    n.e("271203"),
                    n.e("175284"),
                    n.e("932011"),
                    n.e("384820"),
                    n.e("154168"),
                    n.e("506627"),
                    n.e("443256"),
                    n.e("340346"),
                    n.e("812411"),
                    n.e("888205"),
                    n.e("775951"),
                    n.e("373566"),
                    n.e("858531"),
                    n.e("815057"),
                    n.e("702846"),
                    n.e("991531"),
                    n.e("462318"),
                    n.e("523638"),
                    n.e("819305"),
                    n.e("864926"),
                    n.e("450541"),
                    n.e("647999"),
                    n.e("337886"),
                    n.e("311008"),
                    n.e("61750"),
                    n.e("220803"),
                    n.e("195782"),
                    n.e("659624"),
                    n.e("679019"),
                    n.e("262720"),
                    n.e("483518"),
                    n.e("846327"),
                    n.e("531997"),
                    n.e("809940"),
                    n.e("798384"),
                    n.e("787462"),
                    n.e("986629"),
                    n.e("943534"),
                    n.e("124564"),
                    n.e("666601"),
                    n.e("739725"),
                    n.e("912118"),
                    n.e("313052"),
                    n.e("639721"),
                    n.e("419631"),
                    n.e("82384"),
                    n.e("903820"),
                    n.e("876892"),
                    n.e("971508"),
                    n.e("816799"),
                    n.e("852694"),
                    n.e("763216"),
                    n.e("352351"),
                    n.e("421273"),
                    n.e("85216"),
                    n.e("883922"),
                    n.e("649351"),
                    n.e("483102"),
                    n.e("902552"),
                    n.e("580890"),
                    n.e("689588"),
                    n.e("524084"),
                    n.e("44264"),
                    n.e("821403"),
                    n.e("444790"),
                    n.e("310022"),
                    n.e("874913"),
                    n.e("435476"),
                    n.e("665807"),
                    n.e("258327"),
                    n.e("348072"),
                    n.e("214451"),
                    n.e("407755"),
                    n.e("993720"),
                    n.e("654658"),
                    n.e("438490"),
                    n.e("233049"),
                    n.e("569443"),
                    n.e("439518"),
                    n.e("543456"),
                    n.e("44491"),
                ]).then(n.bind(n, 907206));
                return (t) =>
                    (0, i.jsx)(e, { ...t, onClose: E.Z_, onInteraction: (0, Z.s)("UserSettingsMenu", M.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, Z.s)("AudioDeviceMenu", M.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        (this.dismissTooltips(),
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("360536"), n.e("678827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, n8.d)({ location: "Account" });
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
            }));
    };
    handleOutputAudioContextMenu = (e, t) => {
        (this.dismissTooltips(),
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("360536"), n.e("678827")]).then(n.bind(n, 385318));
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
                deviceChangedTooltipType: a,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            s =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > lO;
        i
            ? r ||
              !e ||
              t ||
              n ||
              l ||
              !s ||
              null != a ||
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                  ((this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(lM, () =>
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
                status: a,
                userTag: r,
                voiceChannel: s,
            } = this.props;
        if (null == l) return null;
        if ((0, I.A)({ activities: t, status: a, applicationStream: n, voiceChannel: s }))
            return (0, i.jsxs)(R.A, {
                hoverText: r,
                forceHover: e,
                children: [
                    (0, i.jsx)(g.A, { children: t2.Ay.humanizeStatus(a) }),
                    (0, i.jsx)(S.A, {
                        user: l,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: s,
                        textClassName: lj.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let o = t?.find((e) => {
            let { type: t } = e;
            return t === tr.$pd.CUSTOM_STATUS;
        });
        return null != o
            ? (0, i.jsxs)(R.A, {
                  hoverText: r,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(g.A, { children: t2.Ay.humanizeStatus(a) }),
                      (0, i.jsx)(J.A, { activity: o, emojiClassName: lj.Zg, className: lj.WO }),
                  ],
              })
            : null != a && a !== tr.clD.UNKNOWN && l.hasUniqueUsername()
              ? (0, i.jsx)(R.A, {
                    hoverText: r,
                    forceHover: e,
                    children: (0, i.jsx)(j, { text: t2.Ay.humanizeStatus(a) }),
                })
              : r;
    }
    renderNameTag = (e) => {
        let { currentUser: t, username: n } = this.props;
        return null == t
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", {
                          className: lj.eW,
                          children: (0, i.jsx)(ip.A, {
                              className: r()({ [lj.e8]: null != e }),
                              children: (0, i.jsx)(ei.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? en.G.ANIMATED : en.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: lj.XP,
                          children: (0, i.jsx)(ih.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let {
            badgeDirectoryNuxPopoverVariant: t,
            currentUser: n,
            dismissibleContents: l,
            isOrbchievementsEnabled: a,
        } = this.props;
        return null == n
            ? null
            : (0, i.jsx)(iX, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: n,
                  targetElementRef: this.avatarWithPopoutRef,
                  badgeDirectoryNuxPopoverVariant: t,
                  additionalDCs: l.avatar,
                  isOrbchievementsEnabled: a,
                  children: (0, i.jsx)(lL, {
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
            s = this.state.hovered;
        return null == e
            ? null
            : (0, i.jsx)(A.sk, {
                  children: (e) =>
                      (0, i.jsxs)("div", {
                          ref: this.containerRef,
                          className: r()(lj.kL, { [lj.UG]: null != n, [lj.bc]: !l, [lj.G5]: a }),
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              (0, i.jsx)(Q.A, { nameplate: t, hovered: s, placement: X.u.ACCOUNT }),
                              this.renderNameZone(e),
                              (0, i.jsx)(lk, {
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
function lk(e) {
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
            dismissibleContents: E,
            occluded: x,
            nameplate: C,
            accountContainerRef: _,
            deviceChangedTooltipType: T,
            dismissTooltips: I,
            speaking: S,
        } = e,
        y = (0, $.K)(C);
    function N() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return (0, i.jsx)(lb, {
            webBuildOverride: d,
            onClick: A,
            onContextMenu: v,
            dismissibleContents: [...E.settings, ...e],
            iconForeground: null != C ? lj.t4 : void 0,
            nameplate: C,
        });
    }
    return (0, i.jsxs)("div", {
        className: lj.Uo,
        style: y,
        children: [
            (0, i.jsx)(ld, {
                accountContainerRef: _,
                selfMute: n,
                serverMute: r,
                suppress: o,
                awaitingRemote: a,
                onMouseEnter: c,
                onMouseLeave: m,
                onClick: f,
                onContextMenu: p,
                iconForeground: null != C ? lj.t4 : void 0,
                nameplate: C,
                shouldShowSpeakingWhileMutedTooltip: u,
                shouldShowInputDeviceChangedTooltip: !u && "input" === T,
                dismissTooltips: I,
                speaking: S,
            }),
            (0, i.jsx)(i4, {
                selfDeaf: t,
                serverDeaf: s,
                onClick: h,
                onContextMenu: g,
                awaitingRemote: a,
                iconForeground: null != C ? lj.t4 : void 0,
                nameplate: C,
                shouldShowOutputDeviceChangedTooltip: "output" === T,
                dismissTooltips: I,
            }),
            null != n5.Lf
                ? (0, i.jsx)(l.Suspense, { fallback: N(), children: (0, i.jsx)(n5.Lf, { occluded: x, children: N }) })
                : N(),
        ],
    });
}
function lD(e) {
    let t = (0, u.bG)([ir.A], () => null != ir.A.getChannelId()),
        n = (0, ec.Py)(e),
        i = l.useRef(new c.Ep()),
        [a, r] = l.useState(!1);
    l.useEffect(() => {
        t &&
            n &&
            (r(!0),
            i.current.start(lw, () => {
                r(!1);
            }));
    }, [t, n]);
    let s = l.useCallback(() => {
        (r(!1), i.current.stop());
    }, []);
    return (
        (0, _.l0)(() => {
            i.current.stop();
        }),
        { shouldShowTooltip: a, dismissTooltip: s }
    );
}
function lU() {
    let e,
        t,
        n,
        a,
        r = (0, u.bG)([nx.default], () => nx.default.getCurrentUser()),
        s = (0, u.bG)([nk.default], () => nk.default.getId()),
        {
            activities: c,
            streaming: m,
            status: h,
        } = (0, u.cf)([nV.A], () => {
            let e = nV.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === tr.$pd.STREAMING;
                    }),
                status: nV.A.getStatus(),
            };
        }),
        f = (0, u.bG)([ie.A], () => ie.A.getAnyStreamForUser(s)),
        p = (0, C.A)({ userId: s }),
        g = (0, u.bG)([n2.A], () => n2.A.isUserPlayingSounds(s)),
        A = (0, u.bG)([io.A], () => io.A.getVoiceVolume(s)),
        E = t2.Ay.useUserTag(r, { decoration: "never" }),
        x = (0, u.bG)([ir.A, it.A], () => {
            let e = ir.A.getChannelId();
            return null != e ? it.A.getChannel(e) : null;
        }),
        { mute: _, selfMute: T, suppress: I } = (0, n9.A)(x),
        { selfDeaf: S, deaf: y } = (0, n4.A)(x),
        N = (0, u.bG)([F.A], () => ((0, V.kK)() ? F.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        b = (0, u.bG)([ia.Ay], () => ia.Ay.getSpeakingWhileMuted()),
        j = (0, u.bG)([H.A], () => H.A.isFullscreenInContext()),
        R = (0, u.bG)([il.A], () => il.A.hasLayers()),
        B = (0, v.useModalsStore)(v.hasAnyModalOpenSelector) || R || ic.P.isDisallowPopupsSet() || j,
        W = (0, u.bG)([el.default], () => null != el.default.getAwaitingRemoteSessionInfo()),
        z = (0, u.bG)([is.A], () => is.A.getGuildId()),
        Z = r?.avatarDecoration,
        q = (0, K.A)(Z),
        $ = t2.Ay.useName(r) ?? "",
        { analyticsLocations: X } = (0, O.Ay)(M.A.ACCOUNT),
        Q = (0, Y.r)({ user: r, guildId: void 0 }),
        { isQuestBarEmpty: J } = (0, n1.c9)(),
        et = (0, u.bG)([n3.A, nx.default, ii.A], () => {
            let e,
                t = n3.A.getSyncingWith(),
                n = n3.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = o()(Array.from(ii.A.getParty(e) ?? []))
                        .map((e) => nx.default.getUser(e))
                        .filter(nm.Vq)
                        .value()),
                i.length > 1
            );
        }),
        en = { avatar: [], settings: [] },
        ei = (0, t4.H)({ location: "Account" }) && !B,
        ec = ed.A.useIsEligible(),
        em = eu.A.coachmarkDismissibleContent,
        eh = (0, ee.u)("AccountCoachmark"),
        ef = (0, w.d)({ location: "AccountCoachmark" }),
        ep =
            ((e = (0, u.bG)([er.A], () => er.A.hasLoaded(eo.oD.PRELOADED_USER_SETTINGS))),
            (t = (0, ea.HX)(d.M.GIFT_CARDS_MARKETING_COACHMARK)),
            (n = e && !t),
            (a = (0, es.y)({ location: "AccountCoachmark", countGiftCardWallet: !1, canFetchPaymentSources: n })),
            n && a),
        eg = (function (e) {
            let { currentUserId: t, enabled: n, fetchCatalog: i = !0 } = e,
                a = n ? t : null,
                r = (0, u.bG)([U.Ay], () => null != a && U.Ay.hasCatalogFor(a), [a]),
                s = (0, u.bG)([U.Ay], () => null != a && U.Ay.hasCatalogFetchErrorFor(a), [a]),
                [o] = l.useState(() => new L.A(5 * P.A.Millis.SECOND, 5 * P.A.Millis.MINUTE)),
                d = l.useRef(null);
            l.useEffect(() => {
                if (null != a && i) {
                    if (r) return void o.succeed();
                    if (s) {
                        if (o.fails >= 3) return;
                        return (o.fail(() => (0, k.RS)(a, { isRetry: !0 })), () => o.cancel());
                    }
                    d.current !== a && ((d.current = a), (0, k.RS)(a));
                }
            }, [a, i, r, s, o]);
            let c = (0, u.bG)(
                    [U.Ay],
                    () => (null != a ? U.Ay.getBadges(a).filter((e) => G.sC.has(e.badge_id) && e.owned).length : 0),
                    [a],
                ),
                m = (0, u.yK)([U.Ay], () => (null != a ? (0, D.z)(U.Ay.getBadges(a)) : []), [a]),
                h = l.useMemo(
                    () =>
                        null != a && r
                            ? c > 0
                                ? { variant: "progress", newBadgeCount: c, badgeIconUrls: m }
                                : { variant: "no-progress" }
                            : null,
                    [a, r, c, m],
                ),
                f = i && o.fails < 3;
            return { variantProps: h, isPending: null != a && !r && (!s || f) };
        })({ currentUserId: r?.id, enabled: ef }).variantProps;
    B ||
        (eh && en.avatar.push(d.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
        null != eg && en.avatar.push(d.M.BADGE_DIRECTORY_NUX_POPOVER),
        ec && null != em && en.settings.push(em),
        ep && en.settings.push(d.M.GIFT_CARDS_MARKETING_COACHMARK),
        en.settings.push(d.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: eA, dismissTooltip: ev } = lD(i6.oh.AUDIO_INPUT),
        { shouldShowTooltip: eE, dismissTooltip: ex } = lD(i6.oh.AUDIO_OUTPUT),
        eC = l.useMemo(() => (eA ? "input" : eE ? "output" : void 0), [eA, eE]),
        e_ = l.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        ev();
                        break;
                    case "output":
                        ex();
                }
            },
            [ev, ex],
        );
    return (0, i.jsx)(O.f5, {
        value: X,
        children: (0, i.jsx)(lP, {
            currentUser: r,
            username: $,
            activities: c,
            applicationStream: f,
            voiceChannel: x,
            dismissibleContents: en,
            badgeDirectoryNuxPopoverVariant: eg,
            isOrbchievementsEnabled: ei,
            userTag: E,
            occluded: B,
            selfDeaf: S,
            selfMute: T,
            serverDeaf: y,
            serverMute: _,
            speaking: p,
            playingSoundboard: g,
            voiceDb: A,
            speakingWhileMuted: b,
            status: h,
            streaming: m,
            suppress: I,
            webBuildOverride: N,
            awaitingRemote: W,
            nameplate: Q,
            selectedGuildId: z,
            avatarDecoration: q,
            isQuestBarEmpty: J,
            isListenAlongVisible: et,
            deviceChangedTooltipType: eC,
            onDismissDeviceChangedTooltip: () => e_(eC),
        }),
    });
}
