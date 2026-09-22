(n.d(t, { g: () => lw, A: () => lD }), n(321073));
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
    f = n(922016),
    g = n(939249),
    A = n(140735),
    x = n(312138);
if (221552 == n.j) var v = n(192308);
var E = n(442433),
    C = n(820284),
    T = n(717558),
    _ = n(964486),
    S = n(220839),
    I = n(397244),
    b = n(394871),
    j = n(202091),
    N = n(866323),
    y = n(120842);
function M(e) {
    let { text: t } = e,
        n = (0, N.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, i.jsx)("div", {
        className: y.k,
        children: n((e, t) => (0, i.jsx)(j.animated.div, { className: y.H, style: e, children: t })),
    });
}
var R = n(29160),
    O = n(793574),
    k = n(688810),
    w = n(992526),
    P = n(682618),
    L = n(982240),
    D = n(70283);
let U = [D.$.STREAMING, D.$.GAME_VARIETY, D.$.GAME_TIME, D.$.ACCOUNT_AGE];
var F = n(116833),
    G = n(43105),
    V = n(375708);
function H(e) {
    let t = "progress" === e.variant,
        n = t
            ? {
                  title: V.intl.string(V.t.uwDBSq),
                  body: V.intl.formatToPlainString(V.t.Mk5nzZ, { count: e.newBadgeCount }),
              }
            : { title: V.intl.string(V.t["5GD53o"]), body: V.intl.string(V.t["2Rb7tE"]) };
    return (0, i.jsx)(G.A, {
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
            (l(Z.i.TAKE_ACTION), (0, B._)());
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
    ea = n(214881),
    es = n(302223),
    er = n(248778),
    eo = n(609425),
    ed = n(922301),
    ec = n(660184),
    eu = n(643501),
    eh = n(771527),
    em = n(552122),
    ep = n(74848),
    ef = n(607399),
    eg = n(707554),
    eA = n(224640),
    ex = n(305866),
    ev = n(364522),
    eE = n(22231),
    eC = n(812993),
    eT = n(935154),
    e_ = n(780338);
if (221552 != n.j) var v = n(192308);
var eS = n(980707),
    eI = n(877784),
    eb = n(26137),
    ej = n(473935),
    eN = n(765671),
    ey = n(643056),
    eM = n(176781),
    eR = n(320448),
    eO = n(834730),
    ek = n(993401),
    ew = n(211450);
function eP(e) {
    return (0, i.jsx)("div", {
        className: ew.wE,
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
        p = (0, ek.rE)({ action: t, onClick: n }),
        [A, x] = l.useState(!1),
        E = l.useRef(null),
        C = c ?? E,
        T = null != d,
        _ = T && m,
        S = l.useCallback(() => {
            x(!0);
        }, []),
        I = l.useCallback(() => {
            (0, v.hasAnyModalOpen)() || x(!1);
        }, []);
    function b() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: ew.iA, children: (0, i.jsx)(a, { size: "xs", color: "currentColor" }) }),
                (0, i.jsxs)("div", {
                    className: ew.$H,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(eO.E, {
                                    color: "currentColor",
                                    variant: "text-sm/medium",
                                    className: ew.W1,
                                    children: s,
                                }),
                                (0, i.jsx)(eO.E, { color: "currentColor", variant: "text-xs/medium", children: r }),
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
            (t = _
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.D, { className: ew.ef, onClick: p, children: b() }),
                          (0, i.jsx)(g.D, {
                              className: ew.ap,
                              "aria-label": V.intl.string(V.t.PdRCRg),
                              ...e,
                              onClick: S,
                              children: (0, i.jsx)(eR._, { size: "xs", color: "currentColor" }),
                          }),
                      ],
                  })
                : T
                  ? (0, i.jsxs)(g.D, {
                        className: ew.ef,
                        ...e,
                        onClick: S,
                        children: [
                            b(),
                            (0, i.jsx)("div", {
                                className: ew.ap,
                                children: (0, i.jsx)(eR._, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    })
                  : (0, i.jsx)(g.D, { className: ew.ef, onClick: p, children: b() })),
            (0, i.jsx)("div", { ref: C, className: ew.jG, children: t })
        );
    }
    return T
        ? (0, i.jsx)("li", {
              className: ew.j$,
              onMouseEnter: S,
              onMouseLeave: I,
              children: (0, i.jsx)(f.Y, {
                  targetElementRef: u ?? C,
                  align: h,
                  spacing: 0,
                  renderPopout: d,
                  shouldShow: A,
                  onRequestClose: I,
                  children: j,
              }),
          })
        : (0, i.jsx)("li", { className: ew.j$, children: j() });
}
function eD(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var eU = n(780964),
    eF = n(766075),
    eG = n(734066),
    eV = n(915725),
    eH = n(409067),
    eB = n(271597),
    eW = n(297264),
    eZ = n(475358),
    ez = n(866665),
    eK = n(408278),
    eq = n(625903),
    eY = n(404778),
    e$ = n(689175),
    eX = n(821609),
    eJ = n(532624),
    eQ = n(927813),
    e0 = n(879631),
    e1 = n(350535),
    e2 = n(974293),
    e3 = n(572164),
    e5 = n(953932),
    e7 = n(280483),
    e8 = n(890856),
    e6 = n(713517),
    e4 = n(609174),
    e9 = n(619744);
function te(e) {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        a = (0, e4.Y_)(),
        s = l.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), t?.(), (0, eB.p)({ initialEditingClipId: a.id }));
            },
            [a, t],
        );
    return (0, i.jsx)(eX.$, {
        onClick: s,
        icon: eE.PencilIcon,
        variant: n,
        size: "sm",
        text: V.intl.string(V.t.bt75uw),
        fullWidth: !0,
    });
}
var tt = n(82716),
    tn = n(585579),
    ti = n(930317),
    tl = n(285072),
    ta = n(575172);
let ts = l.memo(function (e) {
    let { clip: t, isNew: n, onClose: a, className: r } = e,
        o = l.useRef(null),
        { isHoveringOrFocusing: d } = (0, e6.A)(o),
        c = l.useCallback(() => {
            (a?.(), (0, eB.p)({ initialEditingClipId: t.id }));
        }, [t.id, a]);
    return (0, i.jsx)(e4.Cl, {
        clip: t,
        children: (0, i.jsx)(e8.s, {
            ref: o,
            "aria-label": V.intl.string(V.t.bt75uw),
            onClick: c,
            className: s()(ta.Z1, r),
            children: (0, i.jsxs)(ti.d, {
                isStatic: !0,
                children: [
                    n && (0, i.jsx)(eC.Lp, { className: ta.Ad, text: V.intl.string(V.t.y2b7CA) }),
                    (0, i.jsxs)(tl.h, {
                        isVisible: d,
                        className: ta.Lw,
                        children: [
                            (0, i.jsxs)("div", {
                                className: ta.mY,
                                children: [(0, i.jsx)(tt.z, {}), (0, i.jsx)(e9.k, {})],
                            }),
                            (0, i.jsxs)("div", {
                                className: ta.E_,
                                children: [
                                    (0, i.jsx)(te, { onBeforeEdit: a, variant: "overlay-secondary" }),
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
var tr = n(696016),
    to = n(652215),
    td = n(753070),
    tc = n(268378),
    tu = n(48127);
function th(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: a, setPopoutRef: s } = e;
    (0, e7.A)();
    let r = (0, c.yK)([eV.Ay], () => Object.values(eV.Ay.getClips())),
        o = (0, c.bG)([eV.Ay], () => eV.Ay.getSettings()),
        d = (0, c.bG)([eV.Ay], () => eV.Ay.getNewClipIds()),
        u = (0, e2.aJ)("ClipsPopout"),
        h = (0, c.bG)([eV.Ay], () => eV.Ay.getEnableAutoclipping()),
        m = (0, c.bG)([eJ.Ay], () => eJ.Ay.getKeybindForAction(to.hCu.SAVE_CLIP)),
        p = l.useCallback(
            (e) => {
                s?.(e);
            },
            [s],
        ),
        f = !o.showPovClipsInGallery,
        g = l.useMemo(() => {
            let e = r.filter((e) => e.type === tr.nQ.CLIP && "" !== e.thumbnail && (!f || !(0, eH.kD)(e)));
            return (e.sort((e, t) => t.createdAt - e.createdAt), e);
        }, [r, f]),
        A = l.useMemo(() => g.slice(0, 16), [g]),
        x = g.length > 16,
        v = null != m ? e1.dI(m.shortcut, !0) : null,
        E = [
            (0, e0.$)(o.clipsLength / eQ.A.Millis.SECOND),
            (0, td.zr)(o.clipsQuality.resolution),
            V.intl.formatToPlainString(V.t.Qb44XH, { fps: o.clipsQuality.frameRate }),
        ];
    return (
        u && E.push(V.intl.string(tc.default.XWkJoi)),
        (0, i.jsxs)("div", {
            ref: p,
            className: tu.SW,
            role: "dialog",
            "aria-label": V.intl.string(V.t.z2jK6X),
            children: [
                (0, i.jsxs)("div", {
                    className: tu.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tu.$,
                            children: [
                                (0, i.jsx)(eW.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: V.intl.string(V.t.z2jK6X),
                                }),
                                null != v && (0, i.jsx)(eZ.e, { className: tu.P, shortcut: v }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tu.$s,
                            children: [
                                (0, i.jsx)(ez.m, {
                                    text: V.intl.string(V.t["3D5yo/"]),
                                    children: (0, i.jsx)(eK.K, {
                                        onClick: () => n(),
                                        icon: eq.SettingsIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": V.intl.string(V.t["3D5yo/"]),
                                    }),
                                }),
                                (0, i.jsx)(ez.m, {
                                    text: V.intl.string(tc.default["55C2MH"]),
                                    children: (0, i.jsx)(eK.K, {
                                        onClick: () => t(),
                                        icon: eM.x,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": V.intl.string(tc.default["55C2MH"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: tu.ov,
                    children: [
                        E.map((e, t) =>
                            (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        t > 0 && (0, i.jsx)("span", { className: tu.LO, children: "\u2022" }),
                                        (0, i.jsx)(eO.E, {
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
                        u &&
                            (0, i.jsx)(eO.E, {
                                variant: "text-xs/semibold",
                                color: h ? "text-strong" : "text-feedback-critical",
                                tag: "span",
                                className: tu.wS,
                                children: h ? V.intl.string(tc.default.lTwKmt) : V.intl.string(tc.default.GNDqtf),
                            }),
                    ],
                }),
                (0, i.jsx)(eY.c, {}),
                A.length > 0
                    ? (0, i.jsxs)(e$.Ch, {
                          className: tu.Vg,
                          fade: !0,
                          disableFocusRingScope: !0,
                          children: [
                              A.map((e) => (0, i.jsx)(ts, { clip: e, isNew: d.includes(e.id), onClose: a }, e.id)),
                              x &&
                                  (0, i.jsx)("div", {
                                      className: tu.qr,
                                      children: (0, i.jsx)(eX.$, {
                                          onClick: () => t(),
                                          text: V.intl.string(tc.default["55C2MH"]),
                                          variant: "secondary",
                                          size: "sm",
                                      }),
                                  }),
                          ],
                      })
                    : (0, i.jsx)(tm, { keybindString: v }),
            ],
        })
    );
}
function tm(e) {
    let { keybindString: t } = e,
        n = (0, e3.E)();
    return (0, i.jsxs)("div", {
        className: tu.p$,
        children: [
            (0, i.jsx)(eO.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: tu.qO,
                children: V.intl.string(tc.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(eO.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: tu.CZ,
                      children: V.intl.format(tc.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, i.jsx)(
                                  eO.E,
                                  {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-positive",
                                      tag: "span",
                                      children: e,
                                  },
                                  "protip",
                              ),
                          keybind: (0, i.jsx)(eZ.e, { shortcut: t }),
                      }),
                  })
                : (0, i.jsx)(e5.A, {}),
        ],
    });
}
function tp(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        a = (0, eG.sw)(),
        s = !(0, c.bG)([eV.Ay], () => eV.Ay.getSettings().showPovClipsInGallery),
        r = (0, c.bG)(
            [eV.Ay],
            () => {
                let e = eV.Ay.getNewClipIds();
                return s
                    ? e.filter((e) => {
                          let t = eV.Ay.getClipById(e);
                          return null != t && !(0, eH.kD)(t);
                      }).length
                    : e.length;
            },
            [s],
        ),
        o = l.useCallback(
            (e) => {
                (t(), (0, eB.p)({ initialEditingClipId: e }));
            },
            [t],
        ),
        d = l.useCallback(() => {
            (t(), (0, eF.openUserSettings)(eU.X.CLIPS_PANEL));
        }, [t]);
    return a
        ? (0, i.jsx)(eL, {
              action: "PRESS_CLIPS",
              icon: eM.x,
              label: V.intl.string(V.t.z2jK6X),
              trailing: r > 0 ? (0, i.jsx)(eC.hV, { count: r }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, i.jsx)(th, { ...e, onOpenGallery: o, onOpenSettings: d, onClose: t }),
          })
        : null;
}
var tf = n(480335),
    tg = n(577390),
    tA = n(372320),
    tx = n(31956),
    tv = n(744808),
    tE = n(645507),
    tC = n(131607),
    tT = n(970931),
    t_ = n(315710),
    tS = n(789645),
    tI = n(775602),
    tb = n(832248),
    tj = n(462887),
    tN = n(736653),
    ty = n(439174),
    tM = n(158045),
    tR = n(19886),
    tO = n(202541);
function tk() {
    let e = (0, tR.Xb)(),
        t = (0, tM.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tO.sp.length - 1; t >= 0; t--) {
        let i = tO.VD[tO.sp[t]],
            l = new Date(e);
        if ((l.setMonth(e.getMonth() + i.tenureReqNumMonths), l.setHours(l.getHours() + 30), n > l.getTime()))
            if (n - l.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let tw = {
        [tO.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tO.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tO.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tO.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tO.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tO.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tO.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tO.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tP = {
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
var tL = n(570484);
let tD = l.lazy(() => Promise.all([n.e("969274"), n.e("924832")]).then(n.bind(n, 748579)));
function tU() {
    let e = (0, c.bG)([tI.Ay], () => tI.Ay.useReducedMotion),
        t = (0, tb.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tk(),
                t = (0, tj.M)((0, tN.Ay)());
            if (null == e) return null;
            let n = tw[e],
                i = tP[e],
                l = {
                    currentBadge: (0, ty.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                a = tO.sp.indexOf(e);
            if (a > 0) {
                let e = tO.sp[a - 1],
                    n = tw[e];
                ((l.prevBadge = (0, ty.e0)(e)), (l.prevBadgeTextGradient = t ? n?.dark : n?.light));
            }
            return l;
        })(),
        [a, s] = l.useState(null);
    return (null != n && null == a && s(n), e || !t || null == a) ? null : (0, i.jsx)(tF, { levelUpData: a });
}
function tF(e) {
    let { levelUpData: t } = e,
        n = l.useRef(null),
        a = l.useCallback(() => {
            tb.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, i.jsx)(t_.Ok, {
        containerRef: n,
        children: (0, i.jsxs)("div", {
            className: tL.i,
            children: [
                (0, i.jsx)("div", {
                    className: tL.b,
                    children: (0, i.jsx)(ez.m, {
                        text: V.intl.string(V.t.cpT0Cq),
                        children: (0, i.jsx)(eK.K, {
                            icon: tS.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: a,
                            "aria-label": V.intl.string(V.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, i.jsx)(l.Suspense, { fallback: null, children: (0, i.jsx)(tD, { levelUpData: t }) }),
            ],
        }),
    });
}
var tG = n(397562),
    tV = n(206835),
    tH = n(183555),
    tB = n(465318),
    tW = n(999291),
    tZ = n(402860),
    tz = n(718019),
    tK = n(365607),
    tq = n(915614),
    tY = n(744753),
    t$ = n(559506),
    tX = n(646986),
    tJ = n(657538),
    tQ = n(946356),
    t0 = n(465829),
    t1 = n(624479),
    t2 = n(206845),
    t3 = n(957565),
    t5 = n(427262),
    t7 = n(62119);
function t8(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: l } = (0, tH.NJ)();
    return t3.p5
        ? (0, i.jsx)(t2.A, {
              text: V.intl.string(V.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: t5.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => l({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(g.D, {
                      ...e,
                      className: s()(t7.c, { [t7.R]: n }),
                      "aria-label": V.intl.string(V.t.y5MwJy),
                      children: (0, i.jsx)(t1.CopyIcon, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var t6 = n(983495),
    t4 = n(442228),
    t9 = n(885386),
    ne = n(362862),
    nt = n(621466),
    nn = n(863610),
    ni = n(508770),
    nl = n(421773),
    na = n(318346),
    ns = n(923138),
    nr = n(309954),
    no = n(673125),
    nd = n(106799),
    nc = n(276130),
    nu = n(769001);
function nh(e) {
    let { popoutContainerRef: t, forceOpen: n } = e;
    (0, ns.I)({ enabled: !0 });
    let { balance: a } = (0, nr.W)(),
        r = (0, c.bG)([no.Ay], () => no.Ay.clientUnreadNotificationType),
        { isHovered: o, onMouseEnter: d, onMouseLeave: u, setIsHovered: h, cancelTimers: m } = (0, nl.A)(0, 500),
        p = l.useCallback(() => {
            (0, v.hasAnyModalOpen)() || u();
        }, [u]),
        A = l.useRef(null);
    l.useEffect(() => {
        if (o) return (document.addEventListener("mouseover", e), () => document.removeEventListener("mouseover", e));
        function e(e) {
            if ((0, v.hasAnyModalOpen)()) return;
            let t = (0, nt.vq)(e.target, Element) ? e.target : null,
                n = t?.closest(`.${ew.j$}`);
            null != n && n !== A.current && (m(), h(!1));
        }
    }, [o, m, h]);
    let x = l.useRef(!1);
    l.useEffect(() => {
        o || (x.current = !1);
    }, [o]);
    let E = l.useCallback(() => {
            (x.current ||
                ((x.current = !0),
                (0, na.Y)({
                    pageType: O.A.USER_PROFILE_ACCOUNT_POPOUT,
                    sectionType: O.A.ORB_WALLET,
                    ctaObject: O.A.ORB_WALLET_OPEN_FROM_PROFILE,
                })),
                d());
        }, [d]),
        C = (0, ek.rE)({ action: "PRESS_ORBS", onClick: E });
    l.useEffect(() => {
        n && d();
    }, [n, d]);
    let T = l.useMemo(
            () =>
                null != a
                    ? V.intl.format(V.t["8xDISf"], { balance: String(a) })
                    : (0, i.jsx)(nn.n, { dotRadius: 3.5, themed: !0, className: nu.K }),
            [a],
        ),
        _ = l.useMemo(
            () =>
                r === no.Y0.NEW_ACHIEVEMENT
                    ? (0, i.jsx)(ni.E, { type: "new", variant: "brand" })
                    : r === no.Y0.UNCLAIMED_ACHIEVEMENT
                      ? (0, i.jsx)(ni.E, { type: { text: V.intl.string(V.t.O13yhz) }, variant: "brand" })
                      : null,
            [r],
        );
    return (0, i.jsx)("li", {
        ref: A,
        className: ew.j$,
        onMouseEnter: E,
        onMouseLeave: p,
        children: (0, i.jsx)(f.Y, {
            targetElementRef: t,
            align: "center",
            spacing: 12,
            renderPopout: () =>
                (0, i.jsx)("div", { onMouseEnter: d, onMouseLeave: p, children: (0, i.jsx)(nc.vG, {}) }),
            shouldShow: o,
            onRequestClose: p,
            children: (e) =>
                (0, i.jsx)("div", {
                    className: ew.jG,
                    children: (0, i.jsxs)(g.D, {
                        className: ew.ef,
                        ...e,
                        onClick: C,
                        children: [
                            (0, i.jsx)("div", {
                                className: ew.iA,
                                children: (0, i.jsx)(nd.A, { shouldUseThemeColor: !0, customSize: 18 }),
                            }),
                            (0, i.jsx)("div", {
                                className: ew.$H,
                                children: (0, i.jsx)("div", {
                                    children: (0, i.jsx)(eO.E, {
                                        color: "currentColor",
                                        variant: "text-sm/medium",
                                        className: ew.W1,
                                        children: T,
                                    }),
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: s()(ew.ap, nu._),
                                children: [_, (0, i.jsx)(eR._, { size: "xs", color: "currentColor" })],
                            }),
                        ],
                    }),
                }),
        }),
    });
}
var nm = n(290863),
    np = n(351906),
    nf = n(403362),
    ng = n(562153),
    nA = n(661531),
    nx = n(477782),
    nv = n(628284),
    nE = n(695366),
    nC = n(363195),
    nT = n(889227),
    n_ = n(287809),
    nS = n(174459),
    nI = n(429707),
    nb = n(274303),
    nj = n(994125),
    nN = n(347853),
    ny = n(573879),
    nM = n(559117),
    nR = n(661439),
    nO = n(385113),
    nk = n(352003),
    nw = n(429913),
    nP = n(334074),
    nL = n(633075),
    nD = n(667049),
    nU = n(280450),
    nF = n(90165),
    nG = n(518477);
function nV(e) {
    let { targetElementRef: t, onClose: a } = e,
        [s, r] = l.useState(!1),
        o = (0, c.bG)([nU.default], () => nU.default.getId()),
        { eligibleApplications: d, markAsDismissed: h } = (function () {
            let e = (0, c.yK)([nO.A], () => nO.A.getFeaturedApplicationIds());
            ((0, nk.A)(e),
                l.useEffect(() => {
                    (0, nR.X)();
                }, []));
            let t = (0, c.bG)([nU.default], () => nU.default.getId()),
                n = (0, nD.A)(t),
                i = l.useMemo(() => n.filter((e) => e instanceof nL.R), [n]),
                a = (0, nw.A)(e),
                s = l.useMemo(() => a.filter(nf.Vq), [a]),
                r = (0, c.cf)([nF.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = s.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = nF.A.getLastPlayedDateTime(e));
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
                { eligibleToShow: d, markAsDismissed: h } = (0, nP.hj)({
                    applications: o,
                    dismissibleContent: u.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: nP.SH,
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
                n.e("393514"),
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
                n.e("607468"),
                n.e("440636"),
                n.e("649975"),
                n.e("890516"),
                n.e("479234"),
                n.e("807007"),
                n.e("162775"),
                n.e("128804"),
                n.e("60882"),
                n.e("71151"),
                n.e("765073"),
                n.e("790484"),
                n.e("211004"),
                n.e("269714"),
                n.e("62849"),
                n.e("489020"),
                n.e("670058"),
                n.e("527798"),
                n.e("829172"),
                n.e("322497"),
                n.e("249918"),
                n.e("507140"),
                n.e("32776"),
                n.e("290608"),
                n.e("759086"),
                n.e("520641"),
                n.e("148758"),
                n.e("36026"),
                n.e("294387"),
                n.e("119766"),
                n.e("589154"),
                n.e("679157"),
                n.e("1955"),
                n.e("341161"),
                n.e("401696"),
                n.e("202985"),
                n.e("455021"),
                n.e("812196"),
                n.e("661630"),
                n.e("470126"),
                n.e("227853"),
                n.e("286615"),
                n.e("70866"),
                n.e("311541"),
                n.e("472847"),
                n.e("986735"),
                n.e("586662"),
                n.e("758053"),
                n.e("247471"),
                n.e("889002"),
                n.e("709976"),
                n.e("750955"),
                n.e("953343"),
                n.e("405763"),
                n.e("686731"),
                n.e("807432"),
                n.e("873532"),
                n.e("279774"),
                n.e("307158"),
                n.e("410470"),
                n.e("295570"),
                n.e("765208"),
                n.e("711562"),
                n.e("906470"),
                n.e("661157"),
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
                n.e("548938"),
                n.e("258407"),
                n.e("894292"),
                n.e("153302"),
                n.e("836576"),
                n.e("661779"),
                n.e("923981"),
                n.e("750370"),
                n.e("686809"),
                n.e("636909"),
                n.e("466592"),
                n.e("73946"),
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
                n.e("377109"),
                n.e("74886"),
                n.e("713273"),
                n.e("376053"),
                n.e("491760"),
                n.e("972006"),
                n.e("974051"),
                n.e("323589"),
                n.e("348567"),
                n.e("452075"),
                n.e("900277"),
                n.e("127962"),
                n.e("76428"),
                n.e("77473"),
                n.e("863232"),
                n.e("364827"),
                n.e("25279"),
                n.e("907167"),
                n.e("517888"),
                n.e("784569"),
                n.e("811133"),
                n.e("861060"),
                n.e("959880"),
                n.e("174016"),
                n.e("910471"),
                n.e("11301"),
                n.e("952372"),
                n.e("262156"),
                n.e("960235"),
                n.e("425412"),
                n.e("77333"),
                n.e("910486"),
                n.e("56366"),
                n.e("147662"),
                n.e("265607"),
                n.e("331988"),
                n.e("544571"),
                n.e("40291"),
                n.e("402368"),
                n.e("733115"),
                n.e("397270"),
                n.e("834552"),
                n.e("190779"),
                n.e("373122"),
                n.e("217951"),
                n.e("221856"),
                n.e("293159"),
                n.e("755936"),
                n.e("798233"),
                n.e("172503"),
                n.e("833703"),
                n.e("256274"),
                n.e("362931"),
                n.e("745959"),
                n.e("858529"),
                n.e("481987"),
                n.e("595653"),
                n.e("958038"),
                n.e("171202"),
                n.e("346802"),
                n.e("576909"),
                n.e("406174"),
                n.e("715555"),
                n.e("708757"),
                n.e("993103"),
                n.e("585968"),
                n.e("776273"),
                n.e("407170"),
                n.e("572963"),
                n.e("307575"),
                n.e("554241"),
                n.e("724303"),
                n.e("521930"),
                n.e("53102"),
                n.e("875842"),
                n.e("88599"),
                n.e("95340"),
                n.e("171273"),
                n.e("437065"),
                n.e("709640"),
                n.e("952548"),
                n.e("229787"),
                n.e("979483"),
                n.e("553984"),
                n.e("943780"),
                n.e("884601"),
                n.e("782969"),
                n.e("817905"),
                n.e("375767"),
                n.e("981004"),
                n.e("428967"),
                n.e("886246"),
                n.e("859546"),
                n.e("608032"),
                n.e("477970"),
                n.e("523276"),
                n.e("386317"),
                n.e("729963"),
                n.e("812042"),
                n.e("102328"),
                n.e("830938"),
                n.e("563983"),
                n.e("821924"),
                n.e("147864"),
                n.e("50097"),
                n.e("638257"),
                n.e("252229"),
                n.e("93461"),
                n.e("36877"),
                n.e("203930"),
                n.e("903663"),
                n.e("604172"),
                n.e("489523"),
                n.e("829260"),
                n.e("327198"),
                n.e("504098"),
                n.e("983168"),
                n.e("582486"),
                n.e("134504"),
                n.e("280098"),
                n.e("908608"),
                n.e("741786"),
                n.e("704374"),
                n.e("553683"),
                n.e("723934"),
                n.e("571294"),
                n.e("967293"),
                n.e("186546"),
                n.e("247339"),
                n.e("347430"),
                n.e("342090"),
                n.e("736637"),
                n.e("443256"),
                n.e("182816"),
                n.e("819119"),
                n.e("373566"),
                n.e("529225"),
                n.e("646038"),
                n.e("286470"),
                n.e("653308"),
                n.e("754876"),
                n.e("414501"),
                n.e("64500"),
                n.e("486825"),
                n.e("23398"),
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
        : (0, i.jsx)(G.A, {
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
                          (r(!0),
                              (0, tZ.openUserProfileModal)({ userId: o, tabSection: nG.RP.WIDGETS })
                                  .then(() => {
                                      let e = d.map((e) => e.id);
                                      ((0, v.openModalLazy)(
                                          async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("376053"),
                                                  n.e("491760"),
                                                  n.e("487697"),
                                                  n.e("504098"),
                                                  n.e("723934"),
                                                  n.e("182816"),
                                                  n.e("56438"),
                                              ]).then(n.bind(n, 709013));
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
                                          a());
                                  })
                                  .finally(() => r(!1)));
                      },
                  },
              ],
          });
}
var nH = n(461213),
    nB = n(818348),
    nW = n(709516);
function nZ() {
    let e = (0, c.bG)([nH.A], () => nH.A.getStatus()),
        t = (0, t5.MU)(e) ?? "",
        n = e === nB.cl.INVISIBLE || e === nB.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: nW.k,
        children: [
            (0, i.jsxs)(A.A, { tag: "div", children: [V.intl.string(V.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(ez.m, {
                    text: V.intl.string(V.t.L99HQm),
                    children: (0, i.jsx)(nE.E, {
                        size: "xs",
                        color: nA.A.colors.STATUS_WARNING,
                        "aria-label": V.intl.string(V.t.L99HQm),
                    }),
                }),
        ],
    });
}
var nz = n(146901),
    nK = n(827827);
let nq = [
        { duration: 15 * eQ.A.Millis.MINUTE, label: () => V.intl.string(V.t["8ot6gv"]) },
        { duration: eQ.A.Millis.HOUR, label: () => V.intl.string(V.t.UMWBZr) },
        { duration: 8 * eQ.A.Millis.HOUR, label: () => V.intl.string(V.t.EpAXPC) },
        { duration: eQ.A.Millis.DAY, label: () => V.intl.string(V.t["755t4q"]) },
        { duration: 3 * eQ.A.Millis.DAY, label: () => V.intl.string(V.t["f3/1ch"]) },
        { duration: void 0, label: () => V.intl.string(V.t["46dqJY"]) },
    ],
    nY = "forever";
function n$(e) {
    let { status: t, currentStatus: n, description: l } = e,
        a = t !== to.clD.ONLINE,
        s = (0, i.jsx)(i.Fragment, {
            children: nq.map((e) => {
                let { duration: l, label: a } = e;
                return (0, i.jsx)(
                    nx.Dr,
                    {
                        id: `${t}-${l}`,
                        label: a(),
                        action: () => (0, nK.A)({ nextStatus: t, prevStatus: n, durationMillis: l }),
                        dontCloseOnAction: !0,
                    },
                    l ?? nY,
                );
            }),
        });
    return (0, i.jsx)(nx.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: a,
        label: (0, t5.MU)(t),
        subtext: l,
        iconLeft: () => (0, i.jsx)(eT.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, nK.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: a ? s : void 0,
    });
}
function nX(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, nz._)(e);
    return "today" === t
        ? V.intl.formatToPlainString(V.t.ZxxHIO, { timeString: i })
        : V.intl.formatToPlainString(V.t["9OFjSe"], { dateString: n, timeString: i });
}
var nJ = n(996988),
    nQ = n(207634),
    n0 = n(47453);
function n1(e) {
    let { currentUser: t, onClose: n, setPopoutRef: a, highlightBadge: r, openedAt: o, className: d } = e,
        h = __OVERLAY__,
        f = (0, tW.Ay)(t.id, void 0),
        { analyticsLocations: g } = (0, k.Ay)(O.A.USER_PROFILE_ACCOUNT_POPOUT),
        x = (0, tH.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 });
    (0, tG.A)(g, f, nG.R7.ACCOUNT_POPOUT);
    let { ref: E } = (0, eN.Ay)(),
        { isHoveringOrFocusing: C, isHovering: T } = (0, e6.A)(E);
    (l.useEffect(() => {
        a?.(E.current);
    }, [E, a]),
        l.useEffect(
            () => (
                tb.A.setState({ isOpen: !0 }),
                () => tb.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1, shouldOpenOrbsWallet: !1 })
            ),
            [],
        ));
    let _ = (0, c.bG)([nm.A], () => nm.A.getStatus(t.id)),
        S = nX(t9.CY.useSetting()),
        I = (0, c.bG)([np.A], () => np.A.hidePersonalInformation),
        b = (0, tT.kB)(),
        j = t9.Q_.useSetting(),
        N = (function (e) {
            let t = t9.CY.useSetting(),
                n = (0, tT.kB)(),
                l = t9.Jr.useSetting();
            function a(i) {
                let l = nX(t);
                if (e === i && null != l) return l;
                switch (i) {
                    case to.clD.DND:
                        return n ? V.intl.string(V.t.day5A6) : V.intl.string(V.t["tq/fMK"]);
                    case to.clD.INVISIBLE:
                        return V.intl.string(V.t.zPc6Mc);
                    default:
                        return;
                }
            }
            let s = (0, i.jsx)(i.Fragment, {
                    children: nq.map((t) => {
                        let { duration: n, label: l } = t;
                        return (0, i.jsx)(
                            nx.Dr,
                            {
                                id: `${e}-${n}`,
                                label: l(),
                                action: () => {
                                    (0, tT.ES)(!0, n);
                                },
                                dontCloseOnAction: !0,
                            },
                            n ?? nY,
                        );
                    }),
                }),
                r = n$({ status: to.clD.ONLINE, currentStatus: e }),
                o = n$({ status: to.clD.IDLE, currentStatus: e, description: a(to.clD.IDLE) }),
                d = n$({ status: to.clD.DND, currentStatus: e, description: a(to.clD.DND) }),
                c = n$({ status: to.clD.INVISIBLE, currentStatus: e, description: a(to.clD.INVISIBLE) });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    r,
                    (0, i.jsx)(nx.bX, {}, "menu-separator-statuses"),
                    o,
                    d,
                    c,
                    n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(nx.bX, {}, "menu-separator-statuses"),
                                  (0, i.jsx)(
                                      nx.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: V.intl.string(V.t.gJRnwK),
                                          iconLeft: e_.BellSlashIcon,
                                          leadingAccessory: { type: "icon", icon: e_.BellSlashIcon },
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
                                              (0, tT.ES)(!n);
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
        })(_),
        y = (function (e) {
            let t = (0, c.bG)([n_.default], () => n_.default.getCurrentUser()),
                n = (0, c.bG)([np.A], () => np.A.hidePersonalInformation),
                l = (0, c.bG)([nC.A], () => (0, tj.M)(nC.A.theme)),
                { multiAccountUsers: a } = (0, nj.K)(),
                s = a.map((a) => {
                    let s = new nT.A(a),
                        r = s.id === t?.id,
                        o = a.tokenStatus === nb.U.INVALID,
                        d = n ? null : `#${s.discriminator}`;
                    return (0, i.jsx)(
                        nx.Dr,
                        {
                            id: s.id,
                            focusedClassName: nM.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: nM.ci,
                                    children: [
                                        (0, i.jsx)(m.eu, {
                                            src: s.getAvatarURL(void 0, 40),
                                            size: p._3.SIZE_24,
                                            "aria-label": a.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: nM.DD,
                                            children: [
                                                (0, i.jsx)(eO.E, {
                                                    className: nM.gE,
                                                    variant: "text-sm/normal",
                                                    children: t5.Ay.getUserTag(s, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !s.hasUniqueUsername() &&
                                                    (0, i.jsx)(eO.E, {
                                                        className: nM.df,
                                                        variant: "text-sm/normal",
                                                        children: d,
                                                    }),
                                            ],
                                        }),
                                        r &&
                                            (0, i.jsx)(nv.y, {
                                                size: "sm",
                                                color: t
                                                    ? nA.A.unsafe_rawColors.WHITE.css
                                                    : nA.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? nA.A.unsafe_rawColors.BRAND_500.css
                                                        : nA.A.unsafe_rawColors.WHITE.css,
                                                className: nM.s0,
                                            }),
                                        o &&
                                            (0, i.jsx)(nE.E, {
                                                color: nA.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? nA.A.unsafe_rawColors.BRAND_500.css
                                                        : nA.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: nM.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, nN.A)();
                                else {
                                    var n;
                                    (n = s.id) !== t?.id &&
                                        (nS.default.track(to.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: to.JJy.USER_PROFILE },
                                        }),
                                        nI.Mx(n, void 0, ny.WX.MULTI_ACCOUNT_MENU));
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
                            (0, i.jsx)(nx.bX, {}),
                            (0, i.jsx)(nx.Dr, {
                                id: "manage-accounts",
                                label: V.intl.string(V.t.WbFpq4),
                                action: () => {
                                    (e?.(), (0, nN.A)());
                                },
                            }),
                        ],
                    }),
                ),
                s
            );
        })(n),
        M = (0, tV.A)({ analyticsLocations: g }),
        R = (0, tM.TW)(t),
        P = (0, w.J)({ location: "UserProfileAccountPopout" }),
        L = (0, ey.d)({ location: "UserProfileAccountPopout" }),
        D = l.useRef(null),
        U = l.useRef(null),
        F = (0, tA.A)(f?.profileFrame?.skuId),
        G = (0, tg.A)(f?.profileFrame?.skuId);
    (0, tx.A)({ skuId: f?.profileFrame?.skuId, openedAt: o, context: x, analyticsLocations: g });
    let H = l.useRef((0, tb.A)((e) => e.shouldRenderTenureLevelUp)),
        W = l.useMemo(() => (0, tE.A)(), []),
        [z, K] = l.useState(() => tb.A.getState().shouldRenderTenureLevelUp);
    function q(e) {
        (n?.(), (0, tZ.openUserProfileModal)({ customStatusPrompt: W, sourceAnalyticsLocations: g, ...x, ...e }));
    }
    l.useEffect(() => {
        let e = setTimeout(() => {
            K(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let Y = f?.widgets != null && f.widgets.length > 0,
        $ = l.useCallback(() => {
            n();
        }, [n]),
        X = l.useCallback(() => {
            (M(), $());
        }, [M, $]),
        J = (0, er.ux)("UserProfileAccountPopout"),
        Q = tB.A.useConfig({ location: "UserProfileAccountPopout" }).enabled,
        ee = (0, ne.H)({ location: "UserProfileAccountPopout" }),
        et = (0, tb.A)((e) => e.shouldOpenOrbsWallet),
        [en, ei] = (0, tC.kn)(
            [
                J ? u.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE : void 0,
                Q ? u.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK : void 0,
            ].filter(nf.Vq),
            void 0,
            !0,
        ),
        el = l.useId();
    return (0, i.jsx)(k.f5, {
        value: g,
        children: (0, i.jsx)(tH.of, {
            value: x,
            openedAt: o,
            fetchStartedAt: f?.fetchStartedAt,
            fetchEndedAt: f?.fetchEndedAt,
            isLoaded: f?.isLoaded,
            children: (0, i.jsxs)(ex.l, {
                ref: E,
                "aria-labelledby": el,
                className: s()(ew.jC, d),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(A.A, { children: (0, i.jsx)(eg.H, { id: el, children: V.intl.string(V.t["5fWB8U"]) }) }),
                    (0, i.jsxs)(eg.F, {
                        children: [
                            (0, i.jsxs)(tQ.A, {
                                className: ew.BK,
                                user: t,
                                displayProfile: f,
                                themeType: nJ.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: n0.wx,
                                        children: [
                                            (0, i.jsx)(tq.A, { user: t, displayProfile: f, themeType: nJ.d.POPOUT }),
                                            (0, i.jsx)(tz.A, {
                                                user: t,
                                                displayProfile: f,
                                                avatarSize: nQ.T[nJ.d.POPOUT].avatarSize,
                                                onOpenProfile: h ? void 0 : q,
                                            }),
                                            (0, i.jsx)(t6.A, {
                                                ref: D,
                                                user: t,
                                                themeType: nJ.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: W,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(ev.Ip, {
                                        className: ew.rf,
                                        style: { pointerEvents: z ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(t$.A, { userId: t.id }),
                                            (0, i.jsx)(t0.Ay, {
                                                className: ew.eF,
                                                user: t,
                                                displayName: ng.Ay.getName(void 0, null, t),
                                                onClickName: h ? void 0 : q,
                                                displayNameTrailing: (0, i.jsx)(t8, { user: t, isVisible: C }),
                                                pronouns: f?.pronouns,
                                                trailing: (0, i.jsx)(tK.A, {
                                                    displayProfile: f,
                                                    themeType: nJ.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != r ? (e) => e === r : void 0,
                                                    shouldGlowTenureBadge: H.current,
                                                }),
                                            }),
                                            (0, i.jsx)(tY.A, { isPremiumUser: R, onInteraction: n }),
                                            (0, i.jsx)(t4.A, {
                                                userId: t.id,
                                                userBio: f?.bio,
                                                hidePersonalInformation: I,
                                                onClose: n,
                                            }),
                                            Y &&
                                                (0, i.jsx)(tJ.A, {
                                                    user: t,
                                                    widgets: f?.widgets,
                                                    onOpenUserProfileModal: q,
                                                }),
                                            (0, i.jsx)(tX.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: q,
                                                onClose: n,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: ew.T_,
                                                children: [
                                                    (0, i.jsx)(tQ.A.Overlay, {
                                                        className: ew.g0,
                                                        children: (0, i.jsxs)(eD, {
                                                            children: [
                                                                (0, i.jsx)(eL, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: V.intl.string(V.t.s5vZlQ),
                                                                    icon: eE.PencilIcon,
                                                                    trailing:
                                                                        null != en
                                                                            ? (0, i.jsx)(eC.Lp, {
                                                                                  text: V.intl.string(V.t.y2b7CA),
                                                                                  "aria-hidden": !0,
                                                                              })
                                                                            : null,
                                                                    onClick: () => {
                                                                        (en ===
                                                                            u.M
                                                                                .DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE &&
                                                                            ei(Z.i.TAKE_ACTION),
                                                                            X());
                                                                    },
                                                                    ref: U,
                                                                }),
                                                                (0, i.jsx)(eL, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(nZ, {}),
                                                                    sublabel: null != S && S,
                                                                    icon: () =>
                                                                        (0, i.jsx)(eT.nW, { status: _, size: 12 }),
                                                                    trailing:
                                                                        (b || _ === to.clD.DND) &&
                                                                        (0, i.jsx)(e_.BellSlashIcon, { size: "xxs" }),
                                                                    renderSubmenu: ef.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(eP, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: ew.hQ,
                                                                                  "aria-label": V.intl.string(
                                                                                      V.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: N,
                                                                              });
                                                                          },
                                                                    onClick: ef.Fr
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
                                                                                                      eA.d,
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
                                                                                                          i.jsx)(eS.W, {
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
                                                                                                                  N,
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
                                                                    L &&
                                                                    (0, i.jsx)(eL, {
                                                                        action: "PRESS_VIEW_BADGES",
                                                                        icon: eI.q,
                                                                        label: V.intl.string(V.t.l6w3Vj),
                                                                        onClick: () => {
                                                                            (n(),
                                                                                (0, B._)({
                                                                                    viewingCurrentUserBadges: !0,
                                                                                }));
                                                                        },
                                                                    }),
                                                                (0, i.jsx)(tp, { onClose: n, popoutContainerRef: E }),
                                                                ee &&
                                                                    (0, i.jsx)(nh, {
                                                                        popoutContainerRef: E,
                                                                        forceOpen: et,
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(tQ.A.Overlay, {
                                                        className: ew.g0,
                                                        children: (0, i.jsxs)(eD, {
                                                            children: [
                                                                (0, i.jsx)(eL, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eb.r,
                                                                    label: V.intl.string(V.t.oMNyYN),
                                                                    onClick: () => {
                                                                        (n(), (0, nN.A)());
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(eP, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": V.intl.string(V.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: y,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    t3.p5 &&
                                                                    j &&
                                                                    (0, i.jsx)(eL, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: ej.L,
                                                                        label: V.intl.string(V.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            ((0, t3.C)(t.id), n());
                                                                        },
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    f?.profileEffect != null &&
                                        !H.current &&
                                        (0, i.jsx)(tf.A, { skuId: f.profileEffect.skuId, isHovering: T }),
                                    null != F && (0, i.jsx)(tv.A, { frame: F, fadeIn: G }),
                                ],
                            }),
                            (0, i.jsx)(nV, { targetElementRef: U, onClose: n }),
                            (0, i.jsx)(tU, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var n2 = n(201805),
    n3 = n(655116),
    n5 = n(438140),
    n7 = n(106531),
    n8 = n(454719),
    n6 = n(342296),
    n4 = n(852712),
    n9 = n(389960),
    ie = n(173660),
    it = n(25578),
    ii = n(763827),
    il = n(499156),
    ia = n(731854);
let is = 2.5 * eQ.A.Millis.SECOND,
    ir = +eQ.A.Millis.HOUR;
var io = n(459838),
    id = n(485296);
let ic = 3 * eQ.A.Millis.SECOND,
    iu = +eQ.A.Millis.DAY;
var ih = n(616356),
    im = n(734057),
    ip = n(629016),
    ig = n(186111),
    iA = n(967198),
    ix = n(486020),
    iv = n(625494),
    iE = n(536194),
    iC = n(19575),
    iT = n(994314),
    i_ = n(485599),
    iS = n(206248);
function iI(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: l, position: a, shouldShow: s = !0, children: r } = e,
        o = (0, eG.sw)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r,
            s && o
                ? (0, i.jsx)(iS.H, {
                      targetElementRef: t,
                      title: V.intl.string(tc.default.Qn21R6),
                      body: V.intl.string(tc.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: a,
                      caretConfig: { align: "center" },
                      action: {
                          text: V.intl.string(V.t.RzWDqY),
                          onClick: function () {
                              (n(Z.i.TAKE_ACTION), l());
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
var ib = n(379848),
    ij = n(626584),
    iN = n(757036),
    iy = n(591179),
    iM = n(531685),
    iR = n(259065),
    iO = n(701974);
let ik = new ij.A("DisplayNameStylesFlywheelCoachmark");
function iw(e) {
    let { markAsDismissed: t, targetElementRef: n, children: a } = e,
        { analyticsLocations: s } = (0, k.Ay)(),
        r = (0, l.useRef)(null),
        o = (0, c.bG)([iM.A], () => iM.A.isFocused()),
        d = (0, iN.L)(tO.PremiumTypes.TIER_2),
        u = (0, iy.X)("DisplayNameStylesFlywheelCoachmark"),
        h = (0, l.useCallback)(() => {
            t(Z.i.TAKE_ACTION);
            let e = n_.default.getCurrentUser();
            u && null != e
                ? (0, tZ.openUserProfileModal)({
                      userId: e.id,
                      sourceAnalyticsLocations: s,
                      onModalOpen: () => {
                          (0, iR.L)({ analyticsLocations: s, stackingBehavior: "stack" });
                      },
                  })
                : (0, eF.openUserSettings)(eU.X.PROFILE_PANEL, { analyticsLocations: s }, () => {
                      (0, iR.L)({ analyticsLocations: s });
                  });
        }, [t, s, u]),
        m = (0, l.useCallback)(() => {
            t(Z.i.USER_DISMISS);
        }, [t]);
    (0, l.useEffect)(() => {
        o && r.current?.paused ? r.current?.play().catch(ik.error) : o || r.current?.pause();
    }, [o]);
    let p = d ? [V.intl.string(iO.default.TyUdka)] : [V.intl.string(iO.default.dluV0R)];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            a,
            (0, i.jsx)(G.A, {
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
                title: V.intl.string(iO.default.cYwrp8),
                body: p,
                actions: [{ text: V.intl.string(V.t["4P5I8V"]), variant: "primary", onClick: h }],
            }),
        ],
    });
}
var iP = n(45780),
    iL = n(696451),
    iD = n(71393),
    iU = n(685073),
    iF = n(228366);
let iG = { lastSeenInfos: {} },
    iV = iG;
class iH extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        iV = e ?? iG;
    }
    getState() {
        return iV;
    }
    getGuildLastSeenInfo(e) {
        return iV.lastSeenInfos[e] ?? null;
    }
}
let iB = new iH(iF.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        iV.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        iV = iG;
    },
});
var iW = n(514661);
let iZ = new ij.A("GuildTagAvailableCoachmark");
function iz(e) {
    let t = (0, c.bG)([iD.A], () => iD.A.getGuild(e.guildId));
    function n(n) {
        (t?.profile?.tag != null &&
            iF.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n));
    }
    let { isAdopting: l, onAdoptTag: a, onEditProfile: s } = (0, iW.A)(t?.id ?? null, () => n(Z.i.TAKE_ACTION));
    if (null == t || !(0, iU.q0)(t))
        return (iZ.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children);
    let r = [
        { text: V.intl.string(V.t.jwEaiX), loading: l, onClick: a, variant: "primary" },
        { text: V.intl.string(V.t.s5vZlQ), onClick: s, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(G.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: F.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
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
function iK(e) {
    let t = (0, c.bG)([iD.A], () => iD.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: l, onAdoptTag: a, onEditProfile: s } = (0, iW.A)(t?.id ?? null, () => n(Z.i.TAKE_ACTION));
    if (null == t || !(0, iU.q0)(t))
        return (iZ.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children);
    let r = [
        { text: V.intl.string(V.t.jwEaiX), loading: l, onClick: a, variant: "primary" },
        { text: V.intl.string(V.t.s5vZlQ), onClick: s, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(G.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: F.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
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
var iq = n(843010),
    iY = n(764231),
    i$ = n(425713);
function iX(e) {
    let { groupName: t, targetElementRef: n } = e,
        l = tk(),
        a = (0, c.bG)([tI.Ay], () => tI.Ay.useReducedMotion),
        s = (0, tb.A)((e) => e.isOpen),
        r = (0, iq.G)();
    return a || null == l || s || r
        ? null
        : (0, i.jsx)(ib.zJ, {
              contentType: u.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: a } = e;
                  return (0, i.jsx)(iJ, {
                      recentlyLeveledTenureBadge: l,
                      markAsDismissed: a,
                      targetElementRef: n,
                      shouldShow: t === u.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function iJ(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: a, shouldShow: s } = e,
        r = tO.sp.indexOf(t),
        o = (0, i$.I)(tO.sp[r > 0 ? r - 1 : r]).ambient,
        d = (0, l.useCallback)(() => {
            (n(Z.i.TAKE_ACTION),
                tb.A.setState({ shouldRenderTenureLevelUp: !0 }),
                iv._.dispatch(to.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
        }, [n]),
        c = (0, l.useCallback)(() => {
            n(Z.i.USER_DISMISS);
        }, [n]),
        u = tO.VD[t],
        h = V.intl.formatToPlainString(V.t.ewkaVR, {
            timeMilestone: (0, iY.T)(u.id, u.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        m = [{ text: V.intl.string(V.t.RzWDqY), variant: "primary", onClick: d }];
    return (0, i.jsx)(G.A, {
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
var iQ = n(764014);
function i0(e) {
    let { targetElementRef: t } = e,
        n = (0, tb.A)((e) => e.isOpen),
        [l, a] = (0, tC.kn)(n ? [] : [u.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK], Z.m.ACCOUNT_NAME_ZONE, !0);
    return l === u.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK
        ? (0, i.jsx)(G.A, {
              targetElementRef: t,
              graphic: { type: "image", src: iQ.A },
              position: "top",
              alignmentStrategy: "edge",
              align: "left",
              caretConfig: { align: "start" },
              title: V.intl.string(V.t["Q+dH5r"]),
              body: V.intl.string(V.t.YKJw4W),
              onRequestClose: () => a(Z.i.USER_DISMISS),
              actions: [
                  {
                      text: V.intl.string(V.t.dcOuei),
                      onClick: function () {
                          (a(Z.i.TAKE_ACTION),
                              tb.A.setState({ shouldOpenOrbsWallet: !0 }),
                              iv._.dispatch(to.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
                      },
                  },
              ],
          })
        : null;
}
function i1(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, n2.c9)(),
        l = null != e.targetElementRef.current && t && n,
        [a, s] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, iP.G$)(u.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? to.dJq),
                l = (0, c.bG)(
                    [iD.A, n_.default, iL.Ay],
                    () => {
                        if (null === e) return !1;
                        let t = iD.A.getGuild(e);
                        if (void 0 === t || !(0, iU.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                        let n = n_.default.getCurrentUser();
                        if (
                            void 0 === n ||
                            (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                        )
                            return !1;
                        let i = iL.Ay.getMember(e, n.id);
                        return null != i && !i.isPending;
                    },
                    [e],
                );
            return (0, tC.ww)(l && n && !i ? [u.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? to.eGj);
        })(e.guildId, { shouldShow: l }),
        [r, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                l = i?.identityGuildId ?? null,
                a = (0, c.bG)([iB], () => (null === l ? null : iB.getGuildLastSeenInfo(l))),
                s = (0, c.bG)([iD.A], () => iD.A.getGuild(l)?.profile?.tag),
                r = null != s && i?.identityGuildId === l && i?.tag === null,
                o = null != l && a?.tag === s,
                d = null !== l && r && !o;
            return (0, tC.Wl)(d && n ? u.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: l });
    return l
        ? a === u.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(iK, {
                  guildId: e.guildId,
                  onDismiss: s,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : r === u.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(iz, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(iX, { groupName: Z.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        e.isOrbchievementsEnabled && (0, i.jsx)(i0, { targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(ib.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: Z.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: l } = t;
                                switch (n) {
                                    case u.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK:
                                        return (0, i.jsx)(iw, {
                                            markAsDismissed: l,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case u.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, i.jsx)(iI, {
                                            markAsDismissed: l,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: eB.p,
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
var i2 = n(615675),
    i3 = n(900797),
    i5 = n(847374),
    i7 = n(348858),
    i8 = n(617354),
    i6 = n(829773),
    i4 = n(42473),
    i9 = n(516171),
    le = n(577755);
function lt(e) {
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
            events: { onMouseEnter: g, onMouseLeave: A },
        } = (0, i7.I)(h ? "undeafen" : "deafen"),
        x = n ? i2.T : m,
        { name: v } = (0, ep.x5)(ia.oh.AUDIO_OUTPUT),
        E = (0, i8.A)(t, n, a),
        { analyticsLocations: C } = (0, k.Ay)(O.A.AUDIO_OUTPUT_BUTTON),
        T = l.useRef(null);
    return (
        l.useEffect(() => () => p(), [h, p]),
        (0, i.jsx)(k.f5, {
            value: C,
            children: (0, i.jsx)(f.Y, {
                targetElementRef: T,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        u(),
                        (0, i.jsx)(k.f5, {
                            value: C,
                            children: (0, i.jsx)(i6.A, {
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
                animation: f.Y.Animation.FADE,
                spacing: 4,
                children: (e, t) => {
                    let { onClick: l } = e,
                        { isShown: u } = t,
                        m = u ? i3.t : i5.a;
                    return (0, i.jsxs)("div", {
                        ref: T,
                        className: s()(i9.Lh, { [i9.v8]: h, [i9.q6]: u }),
                        children: [
                            (0, i.jsx)(i4.A, {
                                "aria-checked": h,
                                "aria-label": V.intl.string(V.t.wjcRFX),
                                className: i9.eT,
                                disabled: a,
                                icon: (0, i.jsx)(x, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: h ? nA.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: h ? le.o : void 0,
                                innerClassName: s()({ [le.T]: n }),
                                onClick: r,
                                onContextMenu: l,
                                onMouseEnter: g,
                                onMouseLeave: A,
                                plated: null != d,
                                redGlow: h,
                                role: "switch",
                                tooltipText: E,
                            }),
                            (0, i.jsx)(i4.A, {
                                className: s()(i9.UT, { [i9.q6]: u }),
                                disabled: a,
                                icon: (0, i.jsx)(m, {
                                    className: i9.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: h ? nA.A.colors.ICON_VOICE_MUTED : "currentColor",
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
var ln = n(666654),
    li = n(523875),
    ll = n(993719);
let la = {};
class ls extends c.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return la[e] ?? !1;
    }
}
let lr = new ls(iF.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        la[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        la[t] = !1;
    },
});
var lo = n(362823),
    ld = n(980923),
    lc = n(573549),
    lu = n(222176),
    lh = n(973324);
function lm(e) {
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
            shouldShowSpeakingWhileMutedTooltip: g,
            shouldShowSpeakingWhilePTTTooltip: A,
            shouldShowInputDeviceChangedTooltip: x,
            shouldShowPTTJoinTooltip: v,
            dismissTooltips: E,
            speaking: C,
        } = e,
        { showPTTIconIndicator: T } = il.A.useConfig({ location: "MicrophoneButton" }),
        _ = (0, c.bG)([it.Ay], () => it.Ay.getMode() === ia.TB.PUSH_TO_TALK),
        S = (0, c.bG)([it.Ay], () => it.Ay.getSettings().modeOptions.shortcut),
        I = (0, c.bG)([lr], () => lr.getIsTutorialActive(lo.v.MUTE_TUTORIAL)),
        b = (0, c.bG)([ii.A], () => null != ii.A.getChannelId()),
        { name: j } = (0, ep.x5)(ia.oh.AUDIO_INPUT),
        { enabledInputProfiles: N } = (0, n4.d)({ location: "MicrophoneButton" }),
        y = l.useRef(null),
        M = n || r || a,
        R = (0, li.L)(M ? "unmute" : "mute"),
        { analyticsLocations: w } = (0, k.Ay)(O.A.AUDIO_INPUT_BUTTON),
        { Component: P, events: L, play: D } = R,
        U = a || r ? ln.O : P;
    l.useEffect(() => () => D(), [M, D]);
    let F = (0, ld.A)(n, a, r, o);
    t = g
        ? { tooltipType: "green_void_do_not_use", tooltipText: V.intl.string(V.t["29gnR4"]), tooltipForceOpen: !0 }
        : v || A
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: V.intl.format(V.t.c1qUOQ, { keybind: e1.dI(S).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: F };
    let H = T && _ && b,
        B = M ? nA.A.colors.ICON_VOICE_MUTED : "currentColor",
        W = l.useCallback(() => {
            (m(), I && ll.N(lo.v.MUTE_TUTORIAL));
        }, [m, I]);
    return (0, i.jsxs)(k.f5, {
        value: w,
        children: [
            (0, i.jsx)(f.Y, {
                targetElementRef: y,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        E(),
                        (0, i.jsx)(k.f5, {
                            value: w,
                            children: (0, i.jsx)(i6.A, {
                                onInteraction: (0, Q.s)("AudioDeviceMenu", O.A.ACCOUNT),
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
                        r = a ? i3.t : i5.a;
                    return (0, i.jsxs)("div", {
                        ref: y,
                        className: s()(i9.Lh, { [i9.v8]: M, [i9.q6]: a }),
                        children: [
                            (0, i.jsx)(i4.A, {
                                "aria-checked": M,
                                "aria-label": V.intl.string(V.t.w4m945),
                                className: i9.eT,
                                disabled: o,
                                icon: (0, i.jsx)(U, { size: "custom", width: 20, height: 20, color: B, className: d }),
                                onClick: W,
                                onContextMenu: l,
                                onMouseEnter: () => {
                                    (u(), L.onMouseEnter());
                                },
                                onMouseLeave: () => {
                                    (h(), L.onMouseLeave());
                                },
                                plated: null != p,
                                redGlow: M,
                                role: "switch",
                                ...t,
                                children: H ? (0, i.jsx)("div", { className: s()(lu.U, { [lu.z]: C }) }) : null,
                            }),
                            (0, i.jsx)(i4.A, {
                                "aria-label": x
                                    ? V.intl.formatToPlainString(V.t["18wnuD"], { inputDeviceName: j })
                                    : V.intl.string(V.t.fRzCbB),
                                className: s()(i9.UT, { [i9.q6]: a }),
                                disabled: o,
                                icon: (0, i.jsx)(r, {
                                    className: i9.$$,
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
                                    ? V.intl.formatToPlainString(V.t["18wnuD"], { inputDeviceName: j })
                                    : void 0,
                                tooltipShouldShow: !a,
                                tooltipText: x
                                    ? V.intl.format(V.t["18wnuD"], { inputDeviceName: j })
                                    : V.intl.string(V.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(G.A, {
                targetElementRef: y,
                shouldShow: I,
                graphic: { type: "image", src: lh.A },
                onRequestClose: () => {
                    ll.N(lo.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: V.intl.string(lc.default.VG4zAf),
                body: V.intl.string(lc.default["8VIRzR"]),
            }),
        ],
    });
}
var lp = n(935399),
    lf = n(505312),
    lg = n(848847);
function lA(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        { analyticsLocations: l } = (0, k.Ay)(O.A.HOLIDAY_COACHMARK);
    return (0, i.jsx)(G.A, {
        targetElementRef: n,
        align: "center",
        position: "top",
        caretConfig: { align: "end" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/f5c1292fad8b7f3e1381e1a235d5f9ce22d791176d5f2fbd4d3dc461d1f895c0.png",
        },
        title: V.intl.string(V.t.Mjs8KR),
        body: V.intl.string(V.t.U0INks),
        actions: [
            {
                text: V.intl.string(V.t.NENZhS),
                onClick: () => {
                    ((0, eF.openUserSettings)(eU.X.NOTIFICATION_HOLIDAY_SOUNDPACK, { analyticsLocations: l }),
                        t(Z.i.TAKE_ACTION));
                },
            },
        ],
        gradientColor: "purple",
        onRequestClose: () => t(Z.i.USER_DISMISS),
    });
}
var lx = n(88001),
    lv = n(148155),
    lE = n(438705);
function lC(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: a } = e,
        s = l.useCallback(() => {
            (a(), (0, eF.openUserSettings)(eU.X.SUBSCRIPTIONS_PANEL));
        }, [a]);
    return (0, i.jsx)(G.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: lE },
        shouldShow: n,
        title: V.intl.format(lv.default.bx8sR9, { premiumGroupProductName: (0, lx.DP)() }),
        body: V.intl.format(lv.default.Pw4OFZ, { premiumGroupProductName: (0, lx.DP)() }),
        onRequestClose: a,
        actions: [{ text: V.intl.string(lv.default.DD26QR), onClick: s }],
    });
}
var lT = n(873298),
    l_ = n(840387);
function lS(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        a = (0, l_.Z)(),
        s = t9.KP.useSetting(),
        r = a && s !== lT.KP.FRIENDS_AND_ALL_GUILDS,
        o = (0, l.useCallback)(() => {
            (t(Z.i.TAKE_ACTION), (0, eF.openUserSettings)(eU.X.PROFILE_PRIVACY_CATEGORY));
        }, [t]),
        d = (0, l.useCallback)(() => {
            t(Z.i.USER_DISMISS);
        }, [t]),
        c = r
            ? s === lT.KP.FRIENDS_ONLY
                ? V.intl.string(V.t["/hogEy"])
                : V.intl.string(V.t["6hEfm1"])
            : V.intl.string(V.t.bnNxW1);
    return (0, i.jsx)(G.A, {
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
var lI = n(415443);
function lb(e) {
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
    (0, lp.Ay)(() => {
        function e() {
            return p(!0);
        }
        return (
            iv._.subscribe(to.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                iv._.unsubscribe(to.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let f = l.useCallback(() => {
            (p(!1), s());
        }, [s]),
        g = eh.A.coachmarkDismissibleContent;
    if (null != a) {
        let e = (0, lI.A)("1790114270381", !0);
        t =
            null != e
                ? V.intl.formatToPlainString(V.t.wve4kg, { webBuildOverride: a.id, builtAt: e })
                : V.intl.formatToPlainString(V.t.Gzh6ZP, { webBuildOverride: a.id });
    } else t = V.intl.string(V.t.cduTBL);
    let A = eq.SettingsIcon,
        x = (0, lf.w)();
    return (
        (A = null != a ? lg.H : x.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(i4.A, {
                    ref: h,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: f,
                    onContextMenu: r,
                    "aria-label": V.intl.string(V.t.cduTBL),
                    icon: (0, i.jsx)(A, { size: "refresh_sm", color: "currentColor", className: d }),
                    ...x.events,
                    plated: null != c,
                }),
                (0, i.jsx)(lC, { targetElementRef: h, shouldShow: m, onDismiss: () => p(!1) }),
                (0, i.jsx)(ib.Ay, {
                    contentTypes: o,
                    groupName: Z.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === u.M.TINY_BRONCO && null != n5.PL
                            ? (0, i.jsx)(l.Suspense, {
                                  fallback: null,
                                  children: (0, i.jsx)(n5.PL, { markAsDismissed: n, targetElementRef: h }),
                              })
                            : t === u.M.PRIVATE_PROFILE_COACHMARK
                              ? (0, i.jsx)(lS, { markAsDismissed: n, targetElementRef: h })
                              : null != g && t === g
                                ? (0, i.jsx)(lA, { markAsDismissed: n, targetElementRef: h })
                                : null;
                    },
                }),
            ],
        })
    );
}
var lj = n(358285);
let lN = iC.Ay.getEnableHardwareAcceleration() ? m.Js : m.eu,
    ly = 2.5 * eQ.A.Millis.SECOND,
    lM = 2 * eQ.A.Millis.MINUTE,
    lR = 2 * eQ.A.Millis.MINUTE,
    lO = 5 * eQ.A.Millis.SECOND;
function lk(e) {
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
        E = t ?? v,
        T = (0, ix.F_)({ avatarDecoration: A, size: (0, et.Te)(p._3.SIZE_32) }),
        _ = (0, eo.A)(),
        {
            updateOpenPopoutRef: I,
            highlightBadge: b,
            setHighlightBadge: j,
        } = (function () {
            let e = l.useRef(null),
                t = l.useCallback((t) => {
                    e.current = () => {
                        (t.onMouseDown(), t.onClick());
                    };
                }, []),
                [n, i] = l.useState(),
                [a, s] = l.useState(!1);
            return (
                (0, S.A)(() => s(!0), 750),
                l.useEffect(() => {
                    function t(t) {
                        let { highlightBadge: n } = t;
                        (null != n && i(n), e.current?.());
                    }
                    return (
                        iv._.subscribe(to.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            iv._.unsubscribe(to.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: a ? n : void 0, setHighlightBadge: i }
            );
        })(),
        N = (0, ei.K)(m);
    return null == o
        ? null
        : (0, i.jsx)(C.A, {
              object: to.ZSU.AVATAR,
              children: (0, i.jsx)(n6.A, {
                  user: o,
                  targetElementRef: E,
                  clickTrap: !0,
                  preload: () =>
                      (0, n8.A)(o.id, o.getAvatarURL(void 0, n6.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: l } = e;
                      return (0, i.jsx)(n1, {
                          currentUser: o,
                          highlightBadge: b,
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
                      (u(), j(void 0));
                  },
                  children: (e) => {
                      I(e);
                      let { onMouseEnter: t, onMouseDown: l, ...u } = e;
                      return (0, i.jsxs)("div", {
                          ref: E,
                          style: N,
                          onMouseEnter: t,
                          onMouseDown: l,
                          onClick: (t) => {
                              (e.onClick?.(t), c?.(t));
                          },
                          className: s()(lj.Q9, { [lj.ZQ]: null != m }),
                          children: [
                              (0, i.jsx)(g.D, {
                                  ...u,
                                  onClick: (t) => {
                                      (t.stopPropagation(), e.onClick?.(t), c?.(t));
                                  },
                                  "aria-label": V.intl.string(V.t["5fWB8U"]),
                                  focusProps: { ringTarget: E },
                                  className: lj.$n,
                                  "data-jump-section": x,
                              }),
                              (0, i.jsx)(lN, {
                                  size: p._3.SIZE_32,
                                  src: o.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: T,
                                  status: r ? to.clD.STREAMING : d,
                                  isSpeaking: n,
                                  voiceDb: a,
                                  className: lj.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: lj.oM, children: h(_) }),
                          ],
                      });
                  },
              }),
          });
}
class lw extends l.PureComponent {
    speakingWhileMutedTooltipTimeout = new h.Ep();
    speakingWhilePTTTooltipTimeout = new h.Ep();
    speakingWhilePTTInactiveBackoff = new d.A(lR, null, !1);
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
        (a !== i && this.handleOccludedChanged(),
            l !== t && this.handleSpeakingWhileMutedChanged(),
            s !== n && this.handleSpeakingWhilePTTChanged());
    }
    componentWillUnmount() {
        (this.speakingWhileMutedTooltipTimeout.stop(), this.speakingWhilePTTTooltipTimeout.stop());
    }
    handleToggleSelfMute = () => {
        let { serverMute: e, suppress: t, selfMute: n } = this.props;
        ((0, X.A)(e, t, to.JJy.ACCOUNT_PANEL), (0, J.X)(O.A.ACCOUNT, J.O.MIC, n));
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        ((0, $.A)(e, to.JJy.ACCOUNT_PANEL), (0, J.X)(O.A.ACCOUNT, J.O.DEAFEN, !t));
    };
    handleOpenAccountSettings = () => {
        (this.dismissTooltips(),
            ii.A.isConnected() ? (0, eF.openUserSettings)(eU.X.VOICE_AND_VIDEO_PANEL) : (0, eF.openUserSettings)());
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("618416"),
                    n.e("366313"),
                    n.e("262564"),
                    n.e("71866"),
                    n.e("891473"),
                    n.e("679157"),
                    n.e("1955"),
                    n.e("341161"),
                    n.e("401696"),
                    n.e("202985"),
                    n.e("455021"),
                    n.e("812196"),
                    n.e("661630"),
                    n.e("470126"),
                    n.e("162775"),
                    n.e("128804"),
                    n.e("60882"),
                    n.e("71151"),
                    n.e("227853"),
                    n.e("286615"),
                    n.e("70866"),
                    n.e("311541"),
                    n.e("472847"),
                    n.e("986735"),
                    n.e("586662"),
                    n.e("758053"),
                    n.e("247471"),
                    n.e("889002"),
                    n.e("709976"),
                    n.e("750955"),
                    n.e("953343"),
                    n.e("405763"),
                    n.e("686731"),
                    n.e("807432"),
                    n.e("873532"),
                    n.e("279774"),
                    n.e("307158"),
                    n.e("410470"),
                    n.e("295570"),
                    n.e("765208"),
                    n.e("711562"),
                    n.e("906470"),
                    n.e("661157"),
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
                    n.e("548938"),
                    n.e("258407"),
                    n.e("894292"),
                    n.e("153302"),
                    n.e("836576"),
                    n.e("661779"),
                    n.e("923981"),
                    n.e("750370"),
                    n.e("686809"),
                    n.e("636909"),
                    n.e("466592"),
                    n.e("73946"),
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
                    n.e("768289"),
                    n.e("772565"),
                    n.e("533781"),
                    n.e("737853"),
                    n.e("225307"),
                    n.e("332165"),
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
                    n.e("74336"),
                    n.e("978898"),
                    n.e("406322"),
                    n.e("942571"),
                    n.e("464759"),
                    n.e("763343"),
                    n.e("194704"),
                    n.e("684290"),
                    n.e("403643"),
                    n.e("166741"),
                    n.e("270076"),
                    n.e("703728"),
                    n.e("519435"),
                    n.e("10985"),
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
                    n.e("167275"),
                    n.e("529366"),
                    n.e("990185"),
                    n.e("444038"),
                    n.e("849162"),
                    n.e("660201"),
                    n.e("323589"),
                    n.e("179301"),
                    n.e("918347"),
                    n.e("358574"),
                    n.e("689521"),
                    n.e("398791"),
                    n.e("10886"),
                    n.e("196689"),
                    n.e("343298"),
                    n.e("592268"),
                    n.e("852197"),
                    n.e("553627"),
                    n.e("59599"),
                    n.e("46238"),
                    n.e("736919"),
                    n.e("459257"),
                    n.e("790484"),
                    n.e("765073"),
                    n.e("631323"),
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
                    n.e("903758"),
                    n.e("76283"),
                    n.e("792513"),
                    n.e("292699"),
                    n.e("377016"),
                    n.e("226867"),
                    n.e("754366"),
                    n.e("657682"),
                    n.e("600336"),
                    n.e("535413"),
                    n.e("172413"),
                    n.e("145006"),
                    n.e("799951"),
                    n.e("302458"),
                    n.e("556436"),
                    n.e("280574"),
                    n.e("806600"),
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
                    n.e("132839"),
                    n.e("873943"),
                    n.e("152263"),
                    n.e("28636"),
                    n.e("207322"),
                    n.e("622936"),
                    n.e("216947"),
                    n.e("301850"),
                    n.e("926787"),
                    n.e("870423"),
                    n.e("94233"),
                    n.e("464838"),
                    n.e("772699"),
                    n.e("40074"),
                    n.e("733814"),
                    n.e("202342"),
                    n.e("988435"),
                    n.e("377476"),
                    n.e("403032"),
                    n.e("746309"),
                    n.e("883221"),
                    n.e("384236"),
                    n.e("64640"),
                    n.e("368991"),
                    n.e("223213"),
                    n.e("520641"),
                    n.e("377109"),
                    n.e("656997"),
                    n.e("828849"),
                    n.e("74886"),
                    n.e("713273"),
                    n.e("944121"),
                    n.e("245851"),
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
                    n.e("704570"),
                    n.e("595944"),
                    n.e("45374"),
                    n.e("10058"),
                    n.e("802273"),
                    n.e("30482"),
                    n.e("56886"),
                    n.e("48055"),
                    n.e("388474"),
                    n.e("774188"),
                    n.e("280999"),
                    n.e("362079"),
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
                    n.e("951589"),
                    n.e("257073"),
                    n.e("179028"),
                    n.e("29489"),
                    n.e("269714"),
                    n.e("445380"),
                    n.e("926018"),
                    n.e("440065"),
                    n.e("213217"),
                    n.e("680015"),
                    n.e("585005"),
                    n.e("684986"),
                    n.e("527302"),
                    n.e("423538"),
                    n.e("700572"),
                    n.e("14775"),
                    n.e("446761"),
                    n.e("718269"),
                    n.e("530166"),
                    n.e("594045"),
                    n.e("348567"),
                    n.e("452075"),
                    n.e("900277"),
                    n.e("450503"),
                    n.e("127962"),
                    n.e("503376"),
                    n.e("494822"),
                    n.e("926132"),
                    n.e("76428"),
                    n.e("77473"),
                    n.e("863232"),
                    n.e("364827"),
                    n.e("25279"),
                    n.e("907167"),
                    n.e("517888"),
                    n.e("784569"),
                    n.e("811133"),
                    n.e("861060"),
                    n.e("959880"),
                    n.e("174016"),
                    n.e("910471"),
                    n.e("11301"),
                    n.e("952372"),
                    n.e("262156"),
                    n.e("960235"),
                    n.e("425412"),
                    n.e("77333"),
                    n.e("910486"),
                    n.e("56366"),
                    n.e("147662"),
                    n.e("265607"),
                    n.e("331988"),
                    n.e("544571"),
                    n.e("40291"),
                    n.e("402368"),
                    n.e("733115"),
                    n.e("397270"),
                    n.e("834552"),
                    n.e("190779"),
                    n.e("373122"),
                    n.e("217951"),
                    n.e("221856"),
                    n.e("293159"),
                    n.e("755936"),
                    n.e("798233"),
                    n.e("172503"),
                    n.e("833703"),
                    n.e("256274"),
                    n.e("362931"),
                    n.e("745959"),
                    n.e("858529"),
                    n.e("481987"),
                    n.e("595653"),
                    n.e("958038"),
                    n.e("171202"),
                    n.e("346802"),
                    n.e("576909"),
                    n.e("406174"),
                    n.e("715555"),
                    n.e("708757"),
                    n.e("993103"),
                    n.e("585968"),
                    n.e("481647"),
                    n.e("393336"),
                    n.e("776273"),
                    n.e("776602"),
                    n.e("140402"),
                    n.e("407170"),
                    n.e("811310"),
                    n.e("21921"),
                    n.e("572963"),
                    n.e("307575"),
                    n.e("391763"),
                    n.e("554241"),
                    n.e("724303"),
                    n.e("521930"),
                    n.e("913823"),
                    n.e("393766"),
                    n.e("53102"),
                    n.e("187110"),
                    n.e("139970"),
                    n.e("676418"),
                    n.e("875842"),
                    n.e("675706"),
                    n.e("940258"),
                    n.e("401518"),
                    n.e("198329"),
                    n.e("571210"),
                    n.e("858164"),
                    n.e("292583"),
                    n.e("302969"),
                    n.e("586127"),
                    n.e("427032"),
                    n.e("122722"),
                    n.e("173764"),
                    n.e("166495"),
                    n.e("9205"),
                    n.e("308555"),
                    n.e("25949"),
                    n.e("146070"),
                    n.e("88599"),
                    n.e("836863"),
                    n.e("854622"),
                    n.e("95340"),
                    n.e("807936"),
                    n.e("88342"),
                    n.e("344502"),
                    n.e("617249"),
                    n.e("171273"),
                    n.e("437065"),
                    n.e("179049"),
                    n.e("709640"),
                    n.e("362422"),
                    n.e("590365"),
                    n.e("989088"),
                    n.e("952548"),
                    n.e("470068"),
                    n.e("817989"),
                    n.e("311802"),
                    n.e("931319"),
                    n.e("37977"),
                    n.e("698965"),
                    n.e("720590"),
                    n.e("691671"),
                    n.e("992738"),
                    n.e("147626"),
                    n.e("613867"),
                    n.e("979483"),
                    n.e("164776"),
                    n.e("553984"),
                    n.e("943780"),
                    n.e("203589"),
                    n.e("884601"),
                    n.e("782969"),
                    n.e("817905"),
                    n.e("294857"),
                    n.e("480830"),
                    n.e("179745"),
                    n.e("96680"),
                    n.e("375767"),
                    n.e("280854"),
                    n.e("335395"),
                    n.e("981004"),
                    n.e("428967"),
                    n.e("154469"),
                    n.e("886246"),
                    n.e("945413"),
                    n.e("146844"),
                    n.e("163235"),
                    n.e("859546"),
                    n.e("486672"),
                    n.e("75029"),
                    n.e("632756"),
                    n.e("564850"),
                    n.e("608032"),
                    n.e("170104"),
                    n.e("491793"),
                    n.e("477970"),
                    n.e("868214"),
                    n.e("902564"),
                    n.e("179303"),
                    n.e("67878"),
                    n.e("758946"),
                    n.e("214285"),
                    n.e("235313"),
                    n.e("248330"),
                    n.e("91450"),
                    n.e("795752"),
                    n.e("588070"),
                    n.e("803332"),
                    n.e("938149"),
                    n.e("408362"),
                    n.e("741678"),
                    n.e("772401"),
                    n.e("523276"),
                    n.e("852617"),
                    n.e("102698"),
                    n.e("204744"),
                    n.e("386317"),
                    n.e("737021"),
                    n.e("818465"),
                    n.e("971430"),
                    n.e("760083"),
                    n.e("976516"),
                    n.e("400501"),
                    n.e("985794"),
                    n.e("767837"),
                    n.e("473384"),
                    n.e("453147"),
                    n.e("282783"),
                    n.e("432209"),
                    n.e("305557"),
                    n.e("859991"),
                    n.e("729963"),
                    n.e("368062"),
                    n.e("793438"),
                    n.e("36227"),
                    n.e("709371"),
                    n.e("310235"),
                    n.e("812042"),
                    n.e("102328"),
                    n.e("844780"),
                    n.e("830938"),
                    n.e("987478"),
                    n.e("563983"),
                    n.e("821924"),
                    n.e("147864"),
                    n.e("50097"),
                    n.e("638257"),
                    n.e("436564"),
                    n.e("603998"),
                    n.e("939171"),
                    n.e("692513"),
                    n.e("550033"),
                    n.e("252229"),
                    n.e("229666"),
                    n.e("589916"),
                    n.e("460773"),
                    n.e("458273"),
                    n.e("93461"),
                    n.e("208018"),
                    n.e("968763"),
                    n.e("278045"),
                    n.e("883952"),
                    n.e("159957"),
                    n.e("26001"),
                    n.e("414591"),
                    n.e("652111"),
                    n.e("838056"),
                    n.e("708536"),
                    n.e("120379"),
                    n.e("411353"),
                    n.e("36877"),
                    n.e("824547"),
                    n.e("203930"),
                    n.e("896804"),
                    n.e("903663"),
                    n.e("295998"),
                    n.e("508829"),
                    n.e("275133"),
                    n.e("819193"),
                    n.e("480945"),
                    n.e("201243"),
                    n.e("935948"),
                    n.e("897073"),
                    n.e("228850"),
                    n.e("464704"),
                    n.e("78601"),
                    n.e("215920"),
                    n.e("342234"),
                    n.e("81189"),
                    n.e("496268"),
                    n.e("604172"),
                    n.e("200203"),
                    n.e("904774"),
                    n.e("489523"),
                    n.e("249629"),
                    n.e("726294"),
                    n.e("780407"),
                    n.e("574678"),
                    n.e("267255"),
                    n.e("829260"),
                    n.e("806295"),
                    n.e("781949"),
                    n.e("321455"),
                    n.e("98972"),
                    n.e("967279"),
                    n.e("437961"),
                    n.e("127659"),
                    n.e("734546"),
                    n.e("327198"),
                    n.e("132737"),
                    n.e("341701"),
                    n.e("66580"),
                    n.e("504098"),
                    n.e("983168"),
                    n.e("840985"),
                    n.e("431649"),
                    n.e("468083"),
                    n.e("548730"),
                    n.e("871467"),
                    n.e("825947"),
                    n.e("51892"),
                    n.e("841838"),
                    n.e("44317"),
                    n.e("283230"),
                    n.e("225612"),
                    n.e("139103"),
                    n.e("472789"),
                    n.e("137937"),
                    n.e("760989"),
                    n.e("827335"),
                    n.e("303710"),
                    n.e("993616"),
                    n.e("949013"),
                    n.e("276814"),
                    n.e("146149"),
                    n.e("860003"),
                    n.e("396325"),
                    n.e("33448"),
                    n.e("482178"),
                    n.e("79216"),
                    n.e("645830"),
                    n.e("808979"),
                    n.e("512162"),
                    n.e("733771"),
                    n.e("866008"),
                    n.e("925501"),
                    n.e("946039"),
                    n.e("995602"),
                    n.e("816589"),
                    n.e("544901"),
                    n.e("929569"),
                    n.e("896480"),
                    n.e("986300"),
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
                    n.e("271203"),
                    n.e("175284"),
                    n.e("384820"),
                    n.e("966598"),
                    n.e("506627"),
                    n.e("443256"),
                    n.e("360536"),
                    n.e("864926"),
                    n.e("228011"),
                    n.e("373566"),
                    n.e("407408"),
                    n.e("815057"),
                    n.e("702846"),
                    n.e("991531"),
                    n.e("462318"),
                    n.e("470556"),
                    n.e("450541"),
                    n.e("647999"),
                    n.e("337886"),
                    n.e("46416"),
                    n.e("61750"),
                    n.e("195782"),
                    n.e("262720"),
                    n.e("483518"),
                    n.e("846327"),
                    n.e("531997"),
                    n.e("787462"),
                    n.e("798384"),
                    n.e("986629"),
                    n.e("354902"),
                    n.e("113582"),
                    n.e("124564"),
                    n.e("666601"),
                    n.e("754876"),
                    n.e("313052"),
                    n.e("639721"),
                    n.e("419631"),
                    n.e("82384"),
                    n.e("876892"),
                    n.e("971508"),
                    n.e("816799"),
                    n.e("888205"),
                    n.e("852694"),
                    n.e("196752"),
                    n.e("632482"),
                    n.e("162883"),
                    n.e("540976"),
                    n.e("85216"),
                    n.e("883922"),
                    n.e("649351"),
                    n.e("483102"),
                    n.e("902552"),
                    n.e("580890"),
                    n.e("689588"),
                    n.e("524084"),
                    n.e("44264"),
                    n.e("444790"),
                    n.e("310022"),
                    n.e("874913"),
                    n.e("435476"),
                    n.e("665807"),
                    n.e("258327"),
                    n.e("214451"),
                    n.e("407755"),
                    n.e("993720"),
                    n.e("654658"),
                    n.e("14748"),
                    n.e("233049"),
                    n.e("443184"),
                    n.e("821403"),
                    n.e("569443"),
                    n.e("439518"),
                    n.e("543456"),
                    n.e("44491"),
                ]).then(n.bind(n, 907206));
                return (t) =>
                    (0, i.jsx)(e, { ...t, onClose: E.Z_, onInteraction: (0, Q.s)("UserSettingsMenu", O.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, Q.s)("AudioDeviceMenu", O.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        (this.dismissTooltips(),
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("360536"), n.e("678827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, n4.d)({ location: "Account" });
                    return (0, i.jsx)(k.f5, {
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
                    (0, i.jsx)(k.f5, {
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
        (this.setState({
            hoveringOnMute: !0,
            shouldShowSpeakingWhileMutedTooltip: !1,
            shouldShowSpeakingWhilePTTTooltip: !1,
        }),
            this.speakingWhileMutedTooltipTimeout.stop(),
            this.speakingWhilePTTTooltipTimeout.stop());
    };
    handleMouseLeaveMute = () => {
        this.setState({ hoveringOnMute: !1 });
    };
    dismissSpeakingWhileMutedTooltip = () => {
        (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }), this.speakingWhileMutedTooltipTimeout.stop());
    };
    dismissSpeakingWhilePTTTooltip = () => {
        (this.setState({ shouldShowSpeakingWhilePTTTooltip: !1 }), this.speakingWhilePTTTooltipTimeout.stop());
    };
    dismissTooltips = () => {
        (this.props.onDismissDeviceChangedTooltip?.(),
            this.props.dismissPTTJoinTooltip?.(),
            this.dismissSpeakingWhileMutedTooltip(),
            this.dismissSpeakingWhilePTTTooltip());
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
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > lM;
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
                  ((this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(ly, () =>
                          this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                      ));
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
                  ((this.lastSpeakingWhilePTTNotificationTime = performance.now()),
                      this.speakingWhilePTTInactiveBackoff.fail(),
                      this.speakingWhilePTTTooltipTimeout.start(ly, () =>
                          this.setState({ shouldShowSpeakingWhilePTTTooltip: !1 }),
                      ));
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
        if ((0, I.A)({ activities: t, status: a, applicationStream: n, voiceChannel: r }))
            return (0, i.jsxs)(R.A, {
                hoverText: s,
                forceHover: e,
                children: [
                    (0, i.jsx)(A.A, { children: t5.Ay.humanizeStatus(a) }),
                    (0, i.jsx)(b.A, {
                        user: l,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: r,
                        textClassName: lj.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let o = t?.find((e) => {
            let { type: t } = e;
            return t === to.$pd.CUSTOM_STATUS;
        });
        return null != o
            ? (0, i.jsxs)(R.A, {
                  hoverText: s,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(A.A, { children: t5.Ay.humanizeStatus(a) }),
                      (0, i.jsx)(es.A, { activity: o, emojiClassName: lj.Zg, className: lj.WO }),
                  ],
              })
            : null != a && a !== to.clD.UNKNOWN && l.hasUniqueUsername()
              ? (0, i.jsx)(R.A, {
                    hoverText: s,
                    forceHover: e,
                    children: (0, i.jsx)(M, { text: t5.Ay.humanizeStatus(a) }),
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
                          className: lj.eW,
                          children: (0, i.jsx)(i_.A, {
                              className: s()({ [lj.e8]: null != e }),
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
                          className: lj.XP,
                          children: (0, i.jsx)(iT.A, { children: this.renderStatus() }),
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
            : (0, i.jsx)(i1, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: n,
                  targetElementRef: this.avatarWithPopoutRef,
                  badgeDirectoryNuxPopoverVariant: t,
                  additionalDCs: l.avatar,
                  isOrbchievementsEnabled: a,
                  children: (0, i.jsx)(lk, {
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
            : (0, i.jsx)(x.sk, {
                  children: (e) =>
                      (0, i.jsxs)("div", {
                          ref: this.containerRef,
                          className: s()(lj.kL, { [lj.UG]: null != n, [lj.bc]: !l, [lj.G5]: a }),
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              (0, i.jsx)(ea.A, { nameplate: t, hovered: r, placement: el.u.ACCOUNT }),
                              this.renderNameZone(e),
                              (0, i.jsx)(lP, {
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
function lP(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: a,
            serverMute: s,
            serverDeaf: r,
            suppress: o,
            shouldShowSpeakingWhileMutedTooltip: d,
            shouldShowSpeakingWhilePTTTooltip: c,
            webBuildOverride: u,
            handleMouseEnterMute: h,
            handleMouseLeaveMute: m,
            handleToggleSelfDeaf: p,
            handleToggleSelfMute: f,
            handleInputAudioContextMenu: g,
            handleOutputAudioContextMenu: A,
            handleOpenAccountSettings: x,
            handleOpenSettingsContextMenu: v,
            dismissibleContents: E,
            occluded: C,
            nameplate: T,
            accountContainerRef: _,
            deviceChangedTooltipType: S,
            shouldShowPTTJoinTooltip: I = !1,
            dismissTooltips: b,
            speaking: j,
        } = e,
        N = (0, ei.K)(T);
    function y() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return (0, i.jsx)(lb, {
            webBuildOverride: u,
            onClick: x,
            onContextMenu: v,
            dismissibleContents: [...E.settings, ...e],
            iconForeground: null != T ? lj.t4 : void 0,
            nameplate: T,
        });
    }
    return (0, i.jsxs)("div", {
        className: lj.Uo,
        style: N,
        children: [
            (0, i.jsx)(lm, {
                accountContainerRef: _,
                selfMute: n,
                serverMute: s,
                suppress: o,
                awaitingRemote: a,
                onMouseEnter: h,
                onMouseLeave: m,
                onClick: f,
                onContextMenu: g,
                iconForeground: null != T ? lj.t4 : void 0,
                nameplate: T,
                shouldShowSpeakingWhileMutedTooltip: d,
                shouldShowInputDeviceChangedTooltip: !d && "input" === S,
                shouldShowSpeakingWhilePTTTooltip: c,
                shouldShowPTTJoinTooltip: I,
                dismissTooltips: b,
                speaking: j,
            }),
            (0, i.jsx)(lt, {
                selfDeaf: t,
                serverDeaf: r,
                onClick: p,
                onContextMenu: A,
                awaitingRemote: a,
                iconForeground: null != T ? lj.t4 : void 0,
                nameplate: T,
                shouldShowOutputDeviceChangedTooltip: "output" === S,
                dismissTooltips: b,
            }),
            null != n5.Lf
                ? (0, i.jsx)(l.Suspense, { fallback: y(), children: (0, i.jsx)(n5.Lf, { occluded: C, children: y }) })
                : y(),
        ],
    });
}
function lL(e) {
    let t = (0, c.bG)([ii.A], () => null != ii.A.getChannelId()),
        n = (0, ep.Py)(e),
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
        (s(!1), i.current.stop());
    }, []);
    return (
        (0, _.l0)(() => {
            i.current.stop();
        }),
        { shouldShowTooltip: a, dismissTooltip: r }
    );
}
function lD() {
    let e = (0, c.bG)([n_.default], () => n_.default.getCurrentUser()),
        t = (0, c.bG)([nU.default], () => nU.default.getId()),
        {
            activities: n,
            streaming: a,
            status: s,
        } = (0, c.cf)([nH.A], () => {
            let e = nH.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === to.$pd.STREAMING;
                    }),
                status: nH.A.getStatus(),
            };
        }),
        r = (0, c.bG)([ih.A], () => ih.A.getAnyStreamForUser(t)),
        d = (0, T.A)({ userId: t }),
        m = (0, c.bG)([id.A], () => id.A.getVoiceVolume(t)),
        p = t5.Ay.useUserTag(e, { decoration: "never" }),
        f = (0, c.bG)([ii.A, im.A], () => {
            let e = ii.A.getChannelId();
            return null != e ? im.A.getChannel(e) : null;
        }),
        { mute: g, selfMute: A, suppress: x } = (0, ie.A)(f),
        { selfDeaf: E, deaf: C } = (0, n9.A)(f),
        S = (0, c.bG)([K.A], () => ((0, q.kK)() ? K.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        I = (0, c.bG)([it.Ay], () => it.Ay.getSpeakingWhileMuted()),
        b = (0, c.bG)([Y.A], () => Y.A.isFullscreenInContext()),
        j = (0, c.bG)([ig.A], () => ig.A.hasLayers()),
        N = (0, v.useModalsStore)(v.hasAnyModalOpenSelector) || j || iE.P.isDisallowPopupsSet() || b,
        y = (0, c.bG)([eu.default], () => null != eu.default.getAwaitingRemoteSessionInfo()),
        M = (0, c.bG)([iA.A], () => iA.A.getGuildId()),
        R = e?.avatarDecoration,
        D = (0, ee.A)(R),
        F = t5.Ay.useName(e) ?? "",
        { analyticsLocations: G } = (0, k.Ay)(O.A.ACCOUNT),
        V = (0, en.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: H } = (0, n2.c9)(),
        B = (0, c.bG)([n3.A, n_.default, ip.A], () => {
            let e,
                t = n3.A.getSyncingWith(),
                n = n3.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = o()(Array.from(ip.A.getParty(e) ?? []))
                        .map((e) => n_.default.getUser(e))
                        .filter(nf.Vq)
                        .value()),
                i.length > 1
            );
        }),
        Z = { avatar: [], settings: [] },
        z = (0, ne.H)({ location: "Account" }) && !N,
        $ = (0, n7.lX)("AccountCoachmark"),
        X = em.A.useIsEligible(),
        J = eh.A.coachmarkDismissibleContent,
        Q = (0, er.ux)("AccountCoachmark"),
        et = (0, w.J)({ location: "AccountCoachmark" }),
        ei = (function (e) {
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
        })({ currentUserId: e?.id, enabled: et });
    !N &&
        (Q && Z.avatar.push(u.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
        null != ei && Z.avatar.push(u.M.BADGE_DIRECTORY_NUX_POPOVER),
        X && null != J && Z.settings.push(J),
        $ && Z.settings.push(u.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: el, dismissTooltip: ea } = lL(ia.oh.AUDIO_INPUT),
        { shouldShowTooltip: es, dismissTooltip: eo } = lL(ia.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: ed, dismissTooltip: ec } = (function () {
            let [e, t] = l.useState(!1),
                n = (0, c.bG)([it.Ay], () => it.Ay.getMode() === ia.TB.PUSH_TO_TALK),
                i = (0, c.bG)(
                    [ii.A],
                    () => null != ii.A.getChannelId() && (ii.A.getDuration() ?? Number.MAX_VALUE) < is,
                ),
                [a, s] = l.useState(!1),
                { showPTTJoinTooltip: r } = il.A.useConfig({ location: "usePTTJoinTooltip" }),
                o = l.useRef(new h.Ep()),
                d = l.useRef(new h.Ep());
            l.useEffect(() => {
                if (i && n && !e) {
                    if ((il.A.getConfig({ location: "usePTTJoinTooltip:couldDisplayTooltip" }), !r)) return;
                    (s(!0),
                        t(!0),
                        d.current.start(ir, () => {
                            t(!1);
                        }),
                        o.current.start(is, () => {
                            s(!1);
                        }));
                }
                i || s(!1);
            }, [i, n, r, e]);
            let u = l.useCallback(() => {
                (s(!1), o.current.stop());
            }, []);
            return (
                (0, _.l0)(() => {
                    (o.current.stop(), d.current.stop());
                }),
                { shouldShowTooltip: a, dismissTooltip: u }
            );
        })(),
        ep = (function () {
            let { showPTTSpeakingIndicator: e } = il.A.useConfig({ location: "useSpeakingWhilePTT" }),
                [t, n] = l.useState(!1),
                i = (0, c.bG)([it.Ay], () => it.Ay.getMode() === ia.TB.PUSH_TO_TALK),
                a = (0, c.bG)([ii.A], () => ii.A.getRTCConnectionId()),
                s = (0, c.bG)([it.Ay], () => {
                    let e = it.Ay.getModeOptions().updatedAt;
                    return null != e && Date.now() - e < iu;
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
                        let a = (i & ia.ME.VOICE) === ia.ME.VOICE,
                            s = id.A.isCurrentUserPTTActive();
                        a && !s
                            ? ++t >= 6 &&
                              (n(!0),
                              l.start(ic, () => {
                                  n(!1);
                              }))
                            : (t = 0);
                    }
                    return (
                        s && e && i && null != a && it.Ay.getMediaEngine().on(io.bg.VoiceActivity, o),
                        () => {
                            (it.Ay.getMediaEngine().removeListener(io.bg.VoiceActivity, o), l.stop());
                        }
                    );
                }, [e, i, s, a]),
                t
            );
        })(),
        ef = l.useMemo(() => (el ? "input" : es ? "output" : void 0), [el, es]),
        eg = l.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        ea();
                        break;
                    case "output":
                        eo();
                }
            },
            [ea, eo],
        );
    return (0, i.jsx)(k.f5, {
        value: G,
        children: (0, i.jsx)(lw, {
            currentUser: e,
            username: F,
            activities: n,
            applicationStream: r,
            voiceChannel: f,
            dismissibleContents: Z,
            badgeDirectoryNuxPopoverVariant: ei,
            isOrbchievementsEnabled: z,
            userTag: p,
            occluded: N,
            selfDeaf: E,
            selfMute: A,
            serverDeaf: C,
            serverMute: g,
            speaking: d,
            voiceDb: m,
            speakingWhileMuted: I,
            speakingWhilePTTInactive: ep,
            status: s,
            streaming: a,
            suppress: x,
            webBuildOverride: S,
            awaitingRemote: y,
            nameplate: V,
            selectedGuildId: M,
            avatarDecoration: D,
            isQuestBarEmpty: H,
            isListenAlongVisible: B,
            deviceChangedTooltipType: ef,
            onDismissDeviceChangedTooltip: () => eg(ef),
            shouldShowPTTJoinTooltip: ed,
            dismissPTTJoinTooltip: ec,
        }),
    });
}
