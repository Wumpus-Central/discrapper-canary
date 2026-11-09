(n.d(t, { g: () => l9, A: () => rt }), n(321073));
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
    b = n(964486),
    y = n(220839),
    T = n(397244),
    S = n(342312),
    I = n(160808),
    N = n(120692),
    j = n(866323),
    R = n(120842);
function O(e) {
    let { text: t } = e,
        n = (0, j.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, i.jsx)("div", {
        className: R.k,
        children: n((e, t) => (0, i.jsx)(N.animated.div, { className: R.H, style: e, children: t })),
    });
}
var M = n(29160),
    P = n(793574),
    k = n(688810),
    L = n(643056),
    D = n(139523),
    w = n(521502),
    U = n(380610),
    G = n(628983),
    F = n(18235),
    B = n(183184),
    H = n(384059),
    V = n(480890),
    W = n(601255),
    K = n(562819),
    z = n(449582),
    Y = n(351952),
    q = n(88686),
    Q = n(214881),
    $ = n(945810),
    X = n(417869),
    Z = n(153488),
    J = n(652215);
let ee = new Set([J.fg2.PLAYSTATION, J.fg2.PLAYSTATION_STAGING, J.fg2.XBOX]),
    et = (0, $.mj)({
        name: "2026-11-console-connection-coachmark",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 }, 2: { enabled: !0 }, 3: { enabled: !0 } },
    });
var en = n(302223),
    ei = n(609425),
    el = n(922301),
    er = n(16371),
    ea = n(643501),
    es = n(826673),
    eo = n(617617),
    eu = n(798091),
    ec = n(355097),
    ed = n(382633),
    em = n(552122),
    ef = n(74848),
    ep = n(607399),
    eh = n(305866),
    eg = n(707554),
    eA = n(95362),
    eC = n(22231),
    eE = n(805251),
    ex = n(935154),
    ev = n(780338);
if (221552 != n.j) var E = n(192308);
var e_ = n(224640),
    eb = n(165862),
    ey = n(877784),
    eT = n(26137),
    eS = n(473935),
    eI = n(765671),
    eN = n(470739),
    ej = n(142617),
    eR = n(289873),
    eO = n(366056),
    eM = n(477782),
    eP = n(320448),
    ek = n(834730),
    eL = n(993401),
    eD = n(792996),
    ew = n(211450);
function eU(e) {
    return (0, i.jsx)("div", {
        className: ew.wE,
        children: (0, i.jsx)(eb.W, {
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
        p = (0, eL.rE)({ action: t, onClick: n }),
        [A, C] = l.useState(!1),
        x = l.useRef(null),
        v = c ?? x,
        _ = null != u,
        b = _ && f,
        y = l.useCallback(() => {
            C(!0);
        }, []),
        T = l.useCallback(() => {
            (0, E.ue)() || C(!1);
        }, []);
    function S() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: ew.iA, children: (0, i.jsx)(r, { size: "xs", color: "currentColor" }) }),
                (0, i.jsxs)("div", {
                    className: ew.$H,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(ek.E, {
                                    color: "currentColor",
                                    variant: "body-sm/medium",
                                    className: ew.W1,
                                    children: a,
                                }),
                                (0, i.jsx)(ek.E, { color: "currentColor", variant: "body-xs/medium", children: s }),
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
            (t = b
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.D, { className: ew.ef, onClick: p, children: S() }),
                          (0, i.jsx)(g.D, {
                              className: ew.ap,
                              "aria-label": eD.intl.string(eD.t.PdRCRg),
                              ...e,
                              onClick: y,
                              children: (0, i.jsx)(eP.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                          }),
                      ],
                  })
                : _
                  ? (0, i.jsxs)(g.D, {
                        className: ew.ef,
                        ...e,
                        onClick: y,
                        children: [
                            S(),
                            (0, i.jsx)("div", {
                                className: ew.ap,
                                children: (0, i.jsx)(eP.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    })
                  : (0, i.jsx)(g.D, { className: ew.ef, onClick: p, children: S() })),
            (0, i.jsx)("div", { ref: v, className: ew.jG, children: t })
        );
    }
    return _
        ? (0, i.jsx)("li", {
              className: ew.j$,
              onMouseEnter: y,
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
        : (0, i.jsx)("li", { className: ew.j$, children: I() });
}
function eF(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var eB = n(719718),
    eH = n(978728),
    eV = n(796104),
    eW = n(148295),
    eK = n(858899);
function ez(e, t) {
    (0, eK.P0)({ text: e, variant: "success" === t ? "success" : "critical" });
}
var eY = n(96494);
function eq(e, t, n) {
    return { id: e, label: t, action: () => (0, eH.D)("qa_menu", n !== eW.S.NO_PERSONAL_DATA, n) };
}
let eQ = [
        eq("open", eY.default.yLZjcu),
        {
            id: "reset",
            label: eY.default["2DL3aX"],
            action: async () => {
                (await (0, eV.sm)())
                    ? ez(eD.intl.string(eD.t.i4jeWR), "success")
                    : ez(eD.intl.string(eD.t.fEptJP), "failure");
            },
        },
        eq("open-fake-data", eY.default.kPBZ5M, eW.S.DEFAULT),
        eq("open-global-stats", eY.default.UwiUbM, eW.S.NO_PERSONAL_DATA),
        eq("open-zero-stats", eY.default.BYW9oX, eW.S.ZERO_DATA),
    ],
    e$ = ["reset"];
var eX = n(852717),
    eZ = n(641214);
function eJ() {
    return (0, i.jsx)(eR.y, { type: eR.t.SPINNING_CIRCLE_SIMPLE, className: eZ.u1, itemClassName: eZ.$N });
}
function e0(e) {
    let { onClose: t } = e,
        n = (0, ej.hF)("CheckpointUserStatusMenuItem"),
        l = (function (e) {
            switch (e) {
                case "off":
                    return [];
                case "reset_only":
                    return eQ.filter((e) => e$.includes(e.id));
                case "all":
                    return eQ;
            }
        })(n),
        r = (0, c.bG)([eB.A], () => eB.A.isFetching);
    return (0, i.jsx)(eG, {
        icon: r ? eJ : eO.ExperimentalCheckpointIcon,
        label: eD.intl.string(eX.default["8hclXY"]),
        sublabel: (0, i.jsx)("span", { className: eZ.$B, children: eD.intl.string(eX.default.BFc4lY) }),
        onClick: async function () {
            (await (0, eH.D)("user_profile_account_popout"), t());
        },
        renderSubmenu:
            "off" !== n
                ? (e) => {
                      let { closePopout: n } = e;
                      return (0, i.jsx)(eU, {
                          navId: "checkpoint-qa-submenu",
                          "aria-label": eD.intl.string(eY.default["9dS734"]),
                          className: eZ.gn,
                          onClose: n,
                          children: l.map((e) =>
                              (0, i.jsx)(
                                  eM.Dr,
                                  {
                                      id: e.id,
                                      label: eD.intl.string(e.label),
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
var e1 = n(176781),
    e2 = n(812993),
    e3 = n(780964),
    e6 = n(766075),
    e8 = n(734066),
    e7 = n(419490),
    e5 = n(409067),
    e9 = n(271597),
    e4 = n(534514),
    te = n(475358),
    tt = n(866665),
    tn = n(408278),
    ti = n(625903),
    tl = n(404778),
    tr = n(516521),
    ta = n(821609),
    ts = n(532624),
    to = n(927813),
    tu = n(879631),
    tc = n(350535),
    td = n(341923),
    tm = n(572164),
    tf = n(953932),
    tp = n(280483),
    th = n(890856),
    tg = n(713517),
    tA = n(609174),
    tC = n(151184);
function tE(e) {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        r = (0, tA.Y_)(),
        a = l.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), t?.(), (0, e9.p)({ initialEditingClipId: r.id }));
            },
            [r, t],
        );
    return (0, i.jsx)(ta.$, {
        onClick: a,
        icon: eC.PencilIcon,
        variant: n,
        size: "sm",
        text: eD.intl.string(eD.t.bt75uw),
        fullWidth: !0,
    });
}
var tx = n(82716),
    tv = n(449397),
    t_ = n(399053),
    tb = n(285072),
    ty = n(575172);
let tT = l.memo(function (e) {
    let { clip: t, isNew: n, onClose: r, className: s } = e,
        o = l.useRef(null),
        { isHoveringOrFocusing: u } = (0, tg.A)(o),
        c = l.useCallback(() => {
            (r?.(), (0, e9.p)({ initialEditingClipId: t.id }));
        }, [t.id, r]);
    return (0, i.jsx)(tA.Cl, {
        clip: t,
        children: (0, i.jsx)(th.s, {
            ref: o,
            "aria-label": eD.intl.string(eD.t.bt75uw),
            onClick: c,
            className: a()(ty.Z1, s),
            children: (0, i.jsxs)(t_.d, {
                isStatic: !0,
                children: [
                    n &&
                        (0, i.jsx)("div", {
                            className: ty.Ad,
                            children: (0, i.jsx)(eE.E, { type: "new", variant: "primary" }),
                        }),
                    (0, i.jsxs)(tb.h, {
                        isVisible: u,
                        className: ty.Lw,
                        children: [
                            (0, i.jsxs)("div", {
                                className: ty.mY,
                                children: [(0, i.jsx)(tx.z, {}), (0, i.jsx)(tC.k, {})],
                            }),
                            (0, i.jsxs)("div", {
                                className: ty.E_,
                                children: [
                                    (0, i.jsx)(tE, { onBeforeEdit: r, variant: "overlay-secondary" }),
                                    (0, i.jsx)(tv.e, {}),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
var tS = n(696016),
    tI = n(753070),
    tN = n(683825),
    tj = n(48127);
function tR(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: r, setPopoutRef: a } = e;
    (0, tp.A)();
    let s = (0, c.yK)([e7.Ay], () => Object.values(e7.Ay.getClips())),
        o = (0, c.bG)([e7.Ay], () => e7.Ay.getSettings()),
        u = (0, c.bG)([e7.Ay], () => e7.Ay.getNewClipIds()),
        d = (0, td.H)(),
        m = (0, c.bG)([e7.Ay], () => e7.Ay.getEnableAutoclipping()),
        f = (0, c.bG)([ts.Ay], () => ts.Ay.getKeybindForAction(J.hCu.SAVE_CLIP)),
        p = l.useCallback(
            (e) => {
                a?.(e);
            },
            [a],
        ),
        h = !o.showPovClipsInGallery,
        g = l.useMemo(() => {
            let e = s.filter((e) => e.type === tS.nQ.CLIP && "" !== e.thumbnail && (!h || !(0, e5.kD)(e)));
            return (e.sort((e, t) => t.createdAt - e.createdAt), e);
        }, [s, h]),
        A = l.useMemo(() => g.slice(0, 16), [g]),
        C = g.length > 16,
        E = null != f ? tc.dI(f.shortcut, !0) : null,
        x = [
            (0, tu.$)(o.clipsLength / to.A.Millis.SECOND),
            (0, tI.zr)(o.clipsQuality.resolution),
            eD.intl.formatToPlainString(eD.t.Qb44XH, { fps: o.clipsQuality.frameRate }),
        ];
    return (
        d && x.push(eD.intl.string(tN.default.XWkJoi)),
        (0, i.jsxs)("div", {
            ref: p,
            className: tj.SW,
            role: "dialog",
            "aria-label": eD.intl.string(eD.t.z2jK6X),
            children: [
                (0, i.jsxs)("div", {
                    className: tj.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tj.$,
                            children: [
                                (0, i.jsx)(e4.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    children: eD.intl.string(eD.t.z2jK6X),
                                }),
                                null != E && (0, i.jsx)(te.e, { className: tj.P, shortcut: E }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tj.$s,
                            children: [
                                (0, i.jsx)(tt.m, {
                                    text: eD.intl.string(eD.t["3D5yo/"]),
                                    children: (0, i.jsx)(tn.K, {
                                        onClick: () => n(),
                                        icon: ti.SettingsIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eD.intl.string(eD.t["3D5yo/"]),
                                    }),
                                }),
                                (0, i.jsx)(tt.m, {
                                    text: eD.intl.string(tN.default["55C2MH"]),
                                    children: (0, i.jsx)(tn.K, {
                                        onClick: () => t(),
                                        icon: e1.ClipsIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eD.intl.string(tN.default["55C2MH"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: tj.ov,
                    children: [
                        x.map((e, t) =>
                            (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        t > 0 && (0, i.jsx)("span", { className: tj.LO, children: "\u2022" }),
                                        (0, i.jsx)(ek.E, {
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
                        d &&
                            (0, i.jsx)(ek.E, {
                                variant: "body-xs/semibold",
                                color: m ? "text-strong" : "text-feedback-critical",
                                tag: "span",
                                className: tj.wS,
                                children: m ? eD.intl.string(tN.default.lTwKmt) : eD.intl.string(tN.default.GNDqtf),
                            }),
                    ],
                }),
                (0, i.jsx)(tl.c, {}),
                A.length > 0
                    ? (0, i.jsxs)(tr.Ch, {
                          className: tj.Vg,
                          fade: !0,
                          disableFocusRingScope: !0,
                          children: [
                              A.map((e) => (0, i.jsx)(tT, { clip: e, isNew: u.includes(e.id), onClose: r }, e.id)),
                              C &&
                                  (0, i.jsx)("div", {
                                      className: tj.qr,
                                      children: (0, i.jsx)(ta.$, {
                                          onClick: () => t(),
                                          text: eD.intl.string(tN.default["55C2MH"]),
                                          variant: "secondary",
                                          size: "sm",
                                      }),
                                  }),
                          ],
                      })
                    : (0, i.jsx)(tO, { keybindString: E }),
            ],
        })
    );
}
function tO(e) {
    let { keybindString: t } = e,
        n = (0, tm.E)();
    return (0, i.jsxs)("div", {
        className: tj.p$,
        children: [
            (0, i.jsx)(ek.E, {
                variant: "body-md/medium",
                color: "text-default",
                className: tj.qO,
                children: eD.intl.string(tN.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(ek.E, {
                      variant: "body-sm/medium",
                      color: "text-muted",
                      className: tj.CZ,
                      children: eD.intl.format(tN.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, i.jsx)(
                                  ek.E,
                                  {
                                      variant: "body-sm/medium",
                                      color: "text-feedback-positive",
                                      tag: "span",
                                      children: e,
                                  },
                                  "protip",
                              ),
                          keybind: (0, i.jsx)(te.e, { shortcut: t }, "keybind"),
                      }),
                  })
                : (0, i.jsx)(tf.A, {}),
        ],
    });
}
function tM(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        r = (0, e8.sw)(),
        a = !(0, c.bG)([e7.Ay], () => e7.Ay.getSettings().showPovClipsInGallery),
        s = (0, c.bG)(
            [e7.Ay],
            () => {
                let e = e7.Ay.getNewClipIds();
                return a
                    ? e.filter((e) => {
                          let t = e7.Ay.getClipById(e);
                          return null != t && !(0, e5.kD)(t);
                      }).length
                    : e.length;
            },
            [a],
        ),
        o = l.useCallback(
            (e) => {
                (t(), (0, e9.p)({ initialEditingClipId: e }));
            },
            [t],
        ),
        u = l.useCallback(() => {
            (t(), (0, e6.openUserSettings)(e3.X.CLIPS_PANEL));
        }, [t]);
    return r
        ? (0, i.jsx)(eG, {
              action: "PRESS_CLIPS",
              icon: e1.ClipsIcon,
              label: eD.intl.string(eD.t.z2jK6X),
              trailing: s > 0 ? (0, i.jsx)(e2.hV, { count: s }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, i.jsx)(tR, { ...e, onOpenGallery: o, onOpenSettings: u, onClose: t }),
          })
        : null;
}
var tP = n(971217),
    tk = n(577390),
    tL = n(287727),
    tD = n(31956),
    tw = n(744808),
    tU = n(645507),
    tG = n(263775),
    tF = n(970931),
    tB = n(315710),
    tH = n(789645),
    tV = n(775602),
    tW = n(832248),
    tK = n(462887),
    tz = n(736653),
    tY = n(439174),
    tq = n(722178),
    tQ = n(105909),
    t$ = n(682901);
function tX() {
    let e = (0, tQ.Xb)(),
        t = (0, tq.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = t$.sp.length - 1; t >= 0; t--) {
        let i = t$.VD[t$.sp[t]],
            l = new Date(e);
        if ((l.setMonth(l.getMonth() + i.tenureReqNumMonths), l.setHours(l.getHours() + 30), n > l.getTime()))
            if (n - l.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let tZ = {
        [t$.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [t$.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [t$.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [t$.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [t$.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [t$.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [t$.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [t$.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tJ = {
        [t$.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [t$.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [t$.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [t$.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [t$.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [t$.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [t$.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [t$.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var t0 = n(570484);
let t1 = l.lazy(() => Promise.all([n.e(969274), n.e(924832)]).then(n.bind(n, 748579)));
function t2() {
    let e = (0, c.bG)([tV.Ay], () => tV.Ay.useReducedMotion),
        t = (0, tW.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tX(),
                t = (0, tK.M)((0, tz.Ay)());
            if (null == e) return null;
            let n = tZ[e],
                i = tJ[e],
                l = {
                    currentBadge: (0, tY.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                r = t$.sp.indexOf(e);
            if (r > 0) {
                let e = t$.sp[r - 1],
                    n = tZ[e];
                ((l.prevBadge = (0, tY.e0)(e)), (l.prevBadgeTextGradient = t ? n?.dark : n?.light));
            }
            return l;
        })(),
        [r, a] = l.useState(null);
    return (null != n && null == r && a(n), e || !t || null == r) ? null : (0, i.jsx)(t3, { levelUpData: r });
}
function t3(e) {
    let { levelUpData: t } = e,
        n = l.useRef(null),
        r = l.useCallback(() => {
            tW.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, i.jsx)(tB.Ok, {
        containerRef: n,
        children: (0, i.jsxs)("div", {
            className: t0.i,
            children: [
                (0, i.jsx)("div", {
                    className: t0.b,
                    children: (0, i.jsx)(tt.m, {
                        text: eD.intl.string(eD.t.cpT0Cq),
                        children: (0, i.jsx)(tn.K, {
                            icon: tH.XSmallIcon,
                            variant: "secondary",
                            size: "sm",
                            onClick: r,
                            "aria-label": eD.intl.string(eD.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, i.jsx)(l.Suspense, { fallback: null, children: (0, i.jsx)(t1, { levelUpData: t }) }),
            ],
        }),
    });
}
var t6 = n(397562),
    t8 = n(206835),
    t7 = n(183555),
    t5 = n(465318),
    t9 = n(527212),
    t4 = n(702476),
    ne = n(718019),
    nt = n(567556),
    nn = n(915614),
    ni = n(560296),
    nl = n(559506),
    nr = n(646986),
    na = n(312294),
    ns = n(946356),
    no = n(465829),
    nu = n(624479),
    nc = n(206845),
    nd = n(957565),
    nm = n(427262),
    nf = n(62119);
function np(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: l } = (0, t7.NJ)();
    return nd.p5
        ? (0, i.jsx)(nc.A, {
              text: eD.intl.string(eD.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: nm.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => l({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(g.D, {
                      ...e,
                      className: a()(nf.c, { [nf.R]: n }),
                      "aria-label": eD.intl.string(eD.t.y5MwJy),
                      children: (0, i.jsx)(nu.CopyIcon, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var nh = n(680581),
    ng = n(442228),
    nA = n(253932),
    nC = n(362862),
    nE = n(621466),
    nx = n(318254),
    nv = n(863610),
    n_ = n(421773),
    nb = n(318346),
    ny = n(923138),
    nT = n(309954),
    nS = n(673125),
    nI = n(150849),
    nN = n(769001);
function nj(e) {
    let { popoutContainerRef: t, scrollerRef: n, shouldScrollIntoView: r, onCloseAccountPopout: s } = e;
    (0, ny.I)({ enabled: !0 });
    let { balance: o } = (0, nT.W)(),
        u = (0, c.bG)([nS.Ay], () =>
            nS.Ay.userOpenedWalletViaProfileDCF ? nS.Y0.NEW_ACHIEVEMENT : nS.Ay.clientUnreadNotificationType,
        );
    l.useEffect(
        () => () => {
            nS.Ay.setUserOpenedWalletViaProfileDCF(!1);
        },
        [],
    );
    let { isHovered: d, onMouseEnter: m, onMouseLeave: f, setIsHovered: p, cancelTimers: A } = (0, n_.A)(0, 500),
        C = l.useCallback(() => {
            (0, E.ue)() || f();
        }, [f]),
        x = l.useRef(null),
        v = l.useRef(null),
        _ = l.useRef(null),
        b = l.useCallback(
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
                let t = (0, nE.vq)(e.target, Element) ? e.target : null,
                    n = t?.closest(`.${ew.j$}`);
                null != n && n !== x.current && (A(), p(!1));
            }
        }, [d, A, p]));
    let y = l.useRef(!1);
    l.useEffect(() => {
        d || (y.current = !1);
    }, [d]);
    let T = l.useCallback(() => {
            (y.current ||
                ((y.current = !0),
                (0, nb.Y)({
                    pageType: P.A.USER_PROFILE_ACCOUNT_POPOUT,
                    sectionType: P.A.ORB_WALLET,
                    ctaObject: P.A.ORB_WALLET_OPEN_FROM_PROFILE,
                })),
                m());
        }, [m]),
        S = (0, eL.rE)({ action: "PRESS_ORBS", onClick: T });
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
                    ? eD.intl.format(eD.t["8xDISf"], { balance: String(o) })
                    : (0, i.jsx)(nv.n, { dotRadius: 3.5, themed: !0, className: nN.K }),
            [o],
        ),
        N = l.useMemo(
            () =>
                u === nS.Y0.NEW_ACHIEVEMENT
                    ? (0, i.jsx)(eE.E, { type: "new", variant: "primary" })
                    : u === nS.Y0.UNCLAIMED_ACHIEVEMENT
                      ? (0, i.jsx)(eE.E, { type: { text: eD.intl.string(eD.t.O13yhz) }, variant: "primary" })
                      : null,
            [u],
        ),
        j = l.useCallback(() => {
            (A(), p(!1), s());
        }, [A, p, s]),
        R = l.useCallback(
            (e) => {
                let { relatedTarget: t } = e;
                (0, nE.vq)(t, Node) && null != x.current && x.current.contains(t) && A();
            },
            [A],
        );
    return (0, i.jsx)("li", {
        ref: x,
        className: ew.j$,
        onMouseEnter: T,
        onMouseLeave: C,
        children: (0, i.jsx)(h.Y, {
            targetElementRef: t,
            align: "bottom",
            spacing: -16,
            renderPopout: () =>
                (0, i.jsx)("div", {
                    ref: b,
                    onMouseEnter: m,
                    onMouseLeave: R,
                    children: (0, i.jsx)(nI.vG, { onCloseWallet: j, returnRef: v, isProfilePopout: !0 }),
                }),
            shouldShow: d,
            onRequestClose: C,
            children: (e) =>
                (0, i.jsx)("div", {
                    className: ew.jG,
                    children: (0, i.jsxs)(g.D, {
                        innerRef: v,
                        className: ew.ef,
                        ...e,
                        onClick: S,
                        children: [
                            (0, i.jsx)("div", {
                                className: ew.iA,
                                children: (0, i.jsx)(nx.OrbsIcon, { color: "currentColor", size: "xs" }),
                            }),
                            (0, i.jsx)("div", {
                                className: ew.$H,
                                children: (0, i.jsx)("div", {
                                    children: (0, i.jsx)(ek.E, {
                                        color: "currentColor",
                                        variant: "body-sm/medium",
                                        className: ew.W1,
                                        children: I,
                                    }),
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: a()(ew.ap, nN._),
                                children: [
                                    N,
                                    (0, i.jsx)(eP.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                                ],
                            }),
                        ],
                    }),
                }),
        }),
    });
}
var nR = n(290863),
    nO = n(351906),
    nM = n(403362),
    nP = n(562153),
    nk = n(646514),
    nL = n(628284),
    nD = n(695366),
    nw = n(413599),
    nU = n(619019),
    nG = n(287809),
    nF = n(129230),
    nB = n(429707),
    nH = n(274303),
    nV = n(994125),
    nW = n(347853),
    nK = n(573879),
    nz = n(559117),
    nY = n(43105),
    nq = n(661439),
    nQ = n(385113),
    n$ = n(352003),
    nX = n(429913),
    nZ = n(334074),
    nJ = n(633075),
    n0 = n(667049),
    n1 = n(46653),
    n2 = n(90165),
    n3 = n(49999),
    n6 = n(518477);
function n8(e) {
    let { targetElementRef: t, onClose: r } = e,
        [a, s] = l.useState(!1),
        o = (0, c.bG)([n1.default], () => n1.default.getId()),
        { eligibleApplications: u, markAsDismissed: m } = (function () {
            let e = (0, c.yK)([nQ.A], () => nQ.A.getFeaturedApplicationIds());
            ((0, n$.A)(e),
                l.useEffect(() => {
                    (0, nq.X)();
                }, []));
            let t = (0, c.bG)([n1.default], () => n1.default.getId()),
                n = (0, n0.A)(t),
                i = l.useMemo(() => n.filter((e) => e instanceof nJ.R), [n]),
                r = (0, nX.A)(e),
                a = l.useMemo(() => r.filter(nM.Vq), [r]),
                s = (0, c.cf)([n2.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = a.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = n2.A.getLastPlayedDateTime(e));
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
                { eligibleToShow: u, markAsDismissed: m } = (0, nZ.hj)({
                    applications: o,
                    dismissibleContent: d.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: nZ.SH,
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
                n.e(918221),
                n.e(504374),
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
                n.e(883316),
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
                n.e(973973),
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
                n.e(787412),
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
                n.e(880672),
                n.e(999873),
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
                n.e(47497),
                n.e(803410),
                n.e(677407),
                n.e(550260),
                n.e(365705),
                n.e(69658),
                n.e(634786),
                n.e(469709),
                n.e(569443),
                n.e(49282),
                n.e(235683),
                n.e(936572),
            ]).then(n.bind(n, 148540));
    }, [u.length]),
    0 === u.length)
        ? null
        : (0, i.jsx)(nY.A, {
              targetElementRef: t,
              position: "right",
              gradientColor: "blue",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/c7446f4156b0cb7fde3b34dd50bb48a7f4699c72a5b2e42ba16091f8c8a93a13.svg",
              },
              title: eD.intl.string(eD.t.HMWL9c),
              body: eD.intl.string(eD.t["9hfy3A"]),
              onRequestClose: () =>
                  m(
                      u.map((e) => e.id),
                      n3.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: eD.intl.string(eD.t.VSLDly),
                      loading: a,
                      onClick: function () {
                          (s(!0),
                              (0, t4.openUserProfileModal)({ userId: o, tabSection: n6.RP.WIDGETS })
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
                                                  n.e(880672),
                                                  n.e(504098),
                                                  n.e(181162),
                                                  n.e(547298),
                                                  n.e(720161),
                                                  n.e(47497),
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
                                              n3.i.TAKE_ACTION,
                                          ),
                                          r());
                                  })
                                  .finally(() => s(!1)));
                      },
                  },
              ],
          });
}
var n7 = n(894768),
    n5 = n(818348),
    n9 = n(709516);
function n4() {
    let e = (0, c.bG)([n7.A], () => n7.A.getStatus()),
        t = (0, nm.MU)(e) ?? "",
        n = e === n5.cl.INVISIBLE || e === n5.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: n9.k,
        children: [
            (0, i.jsxs)(A.A, { tag: "div", children: [eD.intl.string(eD.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(tt.m, {
                    text: eD.intl.string(eD.t.L99HQm),
                    children: (0, i.jsx)(nD.CircleErrorIcon, {
                        size: "xs",
                        color: nk.A.colors.STATUS_WARNING,
                        "aria-label": eD.intl.string(eD.t.L99HQm),
                    }),
                }),
        ],
    });
}
var ie = n(146901),
    it = n(827827);
let ii = [
        { duration: 15 * to.A.Millis.MINUTE, label: () => eD.intl.string(eD.t["8ot6gv"]) },
        { duration: to.A.Millis.HOUR, label: () => eD.intl.string(eD.t.UMWBZr) },
        { duration: 8 * to.A.Millis.HOUR, label: () => eD.intl.string(eD.t.EpAXPC) },
        { duration: to.A.Millis.DAY, label: () => eD.intl.string(eD.t["755t4q"]) },
        { duration: 3 * to.A.Millis.DAY, label: () => eD.intl.string(eD.t["f3/1ch"]) },
        { duration: void 0, label: () => eD.intl.string(eD.t["46dqJY"]) },
    ],
    il = "forever";
function ir(e) {
    let { status: t, currentStatus: n, description: l } = e,
        r = t !== J.clD.ONLINE,
        a = (0, i.jsx)(i.Fragment, {
            children: ii.map((e) => {
                let { duration: l, label: r } = e;
                return (0, i.jsx)(
                    eM.Dr,
                    {
                        id: `${t}-${l}`,
                        label: r(),
                        action: () => (0, it.A)({ nextStatus: t, prevStatus: n, durationMillis: l }),
                        dontCloseOnAction: !0,
                    },
                    l ?? il,
                );
            }),
        });
    return (0, i.jsx)(eM.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: r,
        label: (0, nm.MU)(t),
        subtext: l,
        iconLeft: () => (0, i.jsx)(ex.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, it.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: r ? a : void 0,
    });
}
function ia(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, ie._)(e);
    return "today" === t
        ? eD.intl.formatToPlainString(eD.t.ZxxHIO, { timeString: i })
        : eD.intl.formatToPlainString(eD.t["9OFjSe"], { dateString: n, timeString: i });
}
var is = n(996988),
    io = n(207634),
    iu = n(47453);
function ic(e) {
    let { currentUser: t, onClose: n, setPopoutRef: r, highlightBadge: s, openedAt: o, className: u } = e,
        m = __OVERLAY__,
        h = (0, t9.Ay)(t.id, void 0),
        { analyticsLocations: g } = (0, k.Ay)(P.A.USER_PROFILE_ACCOUNT_POPOUT),
        C = (0, t7.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 });
    (0, t6.A)(g, h, n6.R7.ACCOUNT_POPOUT);
    let { ref: x } = (0, eI.Ay)(),
        { isHoveringOrFocusing: v, isHovering: _ } = (0, tg.A)(x);
    (l.useEffect(() => {
        r?.(x.current);
    }, [x, r]),
        l.useEffect(
            () => (
                tW.A.setState({ isOpen: !0 }),
                () => tW.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1, shouldScrollToOrbsMenuItem: !1 })
            ),
            [],
        ));
    let b = (0, c.bG)([nR.A], () => nR.A.getStatus(t.id)),
        y = ia(nA.CY.useSetting()),
        T = (0, c.bG)([nO.A], () => nO.A.hidePersonalInformation),
        S = (0, tF.kB)(),
        I = nA.Q_.useSetting(),
        N = (function (e) {
            let t = nA.CY.useSetting(),
                n = (0, tF.kB)(),
                l = nA.Jr.useSetting();
            function r(i) {
                let l = ia(t);
                if (e === i && null != l) return l;
                switch (i) {
                    case J.clD.DND:
                        return n ? eD.intl.string(eD.t.day5A6) : eD.intl.string(eD.t["tq/fMK"]);
                    case J.clD.INVISIBLE:
                        return eD.intl.string(eD.t.zPc6Mc);
                    default:
                        return;
                }
            }
            let a = (0, i.jsx)(i.Fragment, {
                    children: ii.map((t) => {
                        let { duration: n, label: l } = t;
                        return (0, i.jsx)(
                            eM.Dr,
                            {
                                id: `${e}-${n}`,
                                label: l(),
                                action: () => {
                                    (0, tF.ES)(!0, n);
                                },
                                dontCloseOnAction: !0,
                            },
                            n ?? il,
                        );
                    }),
                }),
                s = ir({ status: J.clD.ONLINE, currentStatus: e }),
                o = ir({ status: J.clD.IDLE, currentStatus: e, description: r(J.clD.IDLE) }),
                u = ir({ status: J.clD.DND, currentStatus: e, description: r(J.clD.DND) }),
                c = ir({ status: J.clD.INVISIBLE, currentStatus: e, description: r(J.clD.INVISIBLE) });
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
                                          label: eD.intl.string(eD.t.gJRnwK),
                                          iconLeft: ev.BellSlashIcon,
                                          leadingAccessory: { type: "icon", icon: ev.BellSlashIcon },
                                          badge: { text: eD.intl.string(eD.t.ApAu9f) },
                                          subtext:
                                              null != l && "0" !== l
                                                  ? eD.intl.format(eD.t.BWD8fs, {
                                                        endTime: new Date(Number(l)).toLocaleString(
                                                            eD.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : eD.intl.string(eD.t["Br1q+x"]),
                                          action: () => {
                                              (0, tF.ES)(!n);
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
        })(b),
        j = (function (e) {
            let t = (0, c.bG)([nG.default], () => nG.default.getCurrentUser()),
                n = (0, c.bG)([nO.A], () => nO.A.hidePersonalInformation),
                l = (0, c.bG)([nw.A], () => (0, tK.M)(nw.A.theme)),
                { multiAccountUsers: r } = (0, nV.K)(),
                a = r.map((r) => {
                    let a = new nU.A(r),
                        s = a.id === t?.id,
                        o = r.tokenStatus === nH.U.INVALID,
                        u = n ? null : `#${a.discriminator}`;
                    return (0, i.jsx)(
                        eM.Dr,
                        {
                            id: a.id,
                            focusedClassName: nz.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: nz.ci,
                                    children: [
                                        (0, i.jsx)(f.eu, {
                                            src: a.getAvatarURL(void 0, 40),
                                            size: p._3.SIZE_24,
                                            "aria-label": r.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: nz.DD,
                                            children: [
                                                (0, i.jsx)(ek.E, {
                                                    className: nz.gE,
                                                    variant: "body-sm/normal",
                                                    children: nm.Ay.getUserTag(a, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !a.hasUniqueUsername() &&
                                                    (0, i.jsx)(ek.E, {
                                                        className: nz.df,
                                                        variant: "body-sm/normal",
                                                        children: u,
                                                    }),
                                            ],
                                        }),
                                        s &&
                                            (0, i.jsx)(nL.CircleCheckIcon, {
                                                size: "sm",
                                                color: t
                                                    ? nk.A.unsafe_rawColors.WHITE.css
                                                    : nk.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? nk.A.unsafe_rawColors.BRAND_500.css
                                                        : nk.A.unsafe_rawColors.WHITE.css,
                                                className: nz.s0,
                                            }),
                                        o &&
                                            (0, i.jsx)(nD.CircleErrorIcon, {
                                                color: nk.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? nk.A.unsafe_rawColors.BRAND_500.css
                                                        : nk.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: nz.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, nW.A)();
                                else {
                                    var n;
                                    (n = a.id) !== t?.id &&
                                        (nF.default.track(J.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: J.JJy.USER_PROFILE },
                                        }),
                                        nB.Mx(n, void 0, nK.WX.MULTI_ACCOUNT_MENU));
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
                                label: eD.intl.string(eD.t.WbFpq4),
                                action: () => {
                                    (e?.(), (0, nW.A)());
                                },
                            }),
                        ],
                    }),
                ),
                a
            );
        })(n),
        R = (0, t8.A)({ analyticsLocations: g }),
        O = (0, tq.TW)(t),
        M = (0, L.d)({ location: "UserProfileAccountPopout" }),
        D = l.useRef(null),
        w = l.useRef(null),
        U = l.useRef(null),
        G = (0, tL.A)(h?.profileFrame?.skuId),
        F = (0, tk.A)(h?.profileFrame?.skuId);
    (0, tD.A)({ skuId: h?.profileFrame?.skuId, openedAt: o, context: C, analyticsLocations: g });
    let B = l.useRef((0, tW.A)((e) => e.shouldRenderTenureLevelUp)),
        H = l.useMemo(() => (0, tU.A)(), []),
        [V, W] = l.useState(() => tW.A.getState().shouldRenderTenureLevelUp);
    function K(e) {
        (n?.(), (0, t4.openUserProfileModal)({ customStatusPrompt: H, sourceAnalyticsLocations: g, ...C, ...e }));
    }
    l.useEffect(() => {
        let e = setTimeout(() => {
            W(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let z = h?.widgets != null && h.widgets.length > 0,
        Y = l.useCallback(() => {
            n();
        }, [n]),
        q = l.useCallback(() => {
            (R(), Y());
        }, [R, Y]),
        Q = t5.A.useConfig({ location: "UserProfileAccountPopout" }).enabled,
        $ = (0, nC.Hy)({ location: "UserProfileAccountPopout" }),
        X = (0, ej.FX)("UserProfileAccountPopout"),
        Z = (0, tW.A)((e) => e.shouldScrollToOrbsMenuItem),
        [ee, et] = (0, tG.kn)(
            [
                d.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE,
                Q ? d.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK : void 0,
            ].filter(nM.Vq),
            { groupName: void 0, bypassAutoDismiss: !0 },
        ),
        en = l.useId();
    return (0, i.jsx)(k.f5, {
        value: g,
        children: (0, i.jsx)(t7.of, {
            value: C,
            openedAt: o,
            fetchStartedAt: h?.fetchStartedAt,
            fetchEndedAt: h?.fetchEndedAt,
            isLoaded: h?.isLoaded,
            children: (0, i.jsxs)(eh.l, {
                ref: x,
                "aria-labelledby": en,
                className: a()(ew.jC, u),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(A.A, {
                        children: (0, i.jsx)(eg.H, { id: en, children: eD.intl.string(eD.t["5fWB8U"]) }),
                    }),
                    (0, i.jsxs)(eg.F, {
                        children: [
                            (0, i.jsxs)(ns.A, {
                                className: ew.BK,
                                user: t,
                                displayProfile: h,
                                themeType: is.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: iu.wx,
                                        children: [
                                            (0, i.jsx)(nn.A, { user: t, displayProfile: h, themeType: is.d.POPOUT }),
                                            (0, i.jsx)(ne.A, {
                                                user: t,
                                                displayProfile: h,
                                                avatarSize: io.T[is.d.POPOUT].avatarSize,
                                                onOpenProfile: m ? void 0 : K,
                                            }),
                                            (0, i.jsx)(nh.A, {
                                                ref: D,
                                                user: t,
                                                themeType: is.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: H,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(eA.Ip, {
                                        ref: U,
                                        className: ew.rf,
                                        style: { pointerEvents: V ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(nl.A, { userId: t.id }),
                                            (0, i.jsx)(no.Ay, {
                                                className: ew.eF,
                                                user: t,
                                                displayName: nP.Ay.getName(void 0, null, t),
                                                onClickName: m ? void 0 : K,
                                                displayNameTrailing: (0, i.jsx)(np, { user: t, isVisible: v }),
                                                pronouns: h?.pronouns,
                                                trailing: (0, i.jsx)(nt.A, {
                                                    displayProfile: h,
                                                    themeType: is.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != s ? (e) => e === s : void 0,
                                                    shouldGlowTenureBadge: B.current,
                                                }),
                                            }),
                                            (0, i.jsx)(ni.A, { isPremiumUser: O, onInteraction: n }),
                                            (0, i.jsx)(ng.A, {
                                                userId: t.id,
                                                userBio: h?.bio,
                                                hidePersonalInformation: T,
                                                onClose: n,
                                            }),
                                            z &&
                                                (0, i.jsx)(na.A, {
                                                    user: t,
                                                    widgets: h?.widgets,
                                                    onOpenUserProfileModal: K,
                                                }),
                                            (0, i.jsx)(nr.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: K,
                                                onClose: n,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: ew.T_,
                                                children: [
                                                    X &&
                                                        (0, i.jsx)(ns.A.Overlay, {
                                                            className: ew.g0,
                                                            children: (0, i.jsx)(eF, {
                                                                children: (0, i.jsx)(e0, { onClose: n }),
                                                            }),
                                                        }),
                                                    (0, i.jsx)(ns.A.Overlay, {
                                                        className: ew.g0,
                                                        children: (0, i.jsxs)(eF, {
                                                            children: [
                                                                (0, i.jsx)(eG, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: eD.intl.string(eD.t.s5vZlQ),
                                                                    icon: eC.PencilIcon,
                                                                    trailing:
                                                                        null != ee
                                                                            ? (0, i.jsx)("div", {
                                                                                  className: ew.IO,
                                                                                  "aria-hidden": !0,
                                                                                  children: (0, i.jsx)(eE.E, {
                                                                                      type: "new",
                                                                                      variant: "primary",
                                                                                  }),
                                                                              })
                                                                            : null,
                                                                    onClick: () => {
                                                                        (ee ===
                                                                            d.M
                                                                                .DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE &&
                                                                            et(n3.i.TAKE_ACTION),
                                                                            q());
                                                                    },
                                                                    ref: w,
                                                                }),
                                                                (0, i.jsx)(eG, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(n4, {}),
                                                                    sublabel: null != y && y,
                                                                    icon: () =>
                                                                        (0, i.jsx)(ex.nW, { status: b, size: 12 }),
                                                                    trailing:
                                                                        (S || b === J.clD.DND) &&
                                                                        (0, i.jsx)(ev.BellSlashIcon, { size: "xxs" }),
                                                                    renderSubmenu: ep.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(eU, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: ew.hQ,
                                                                                  "aria-label": eD.intl.string(
                                                                                      eD.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: N,
                                                                              });
                                                                          },
                                                                    onClick: ep.Fr
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
                                                                                                      e_.d,
                                                                                                      {
                                                                                                          onClose: t,
                                                                                                          ...n,
                                                                                                          size: "sm",
                                                                                                          "aria-label":
                                                                                                              eD.intl.string(
                                                                                                                  eD.t[
                                                                                                                      "3Uj+2p"
                                                                                                                  ],
                                                                                                              ),
                                                                                                          children: (0,
                                                                                                          i.jsx)(eb.W, {
                                                                                                              "data-menu-migrated":
                                                                                                                  !0,
                                                                                                              navId: "set-status-submenu-mobile-web",
                                                                                                              variant:
                                                                                                                  "fixed",
                                                                                                              "aria-label":
                                                                                                                  eD.intl.string(
                                                                                                                      eD
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
                                                                M &&
                                                                    (0, i.jsx)(eG, {
                                                                        action: "PRESS_VIEW_BADGES",
                                                                        icon: ey.RibbonIcon,
                                                                        label: eD.intl.string(eD.t.l6w3Vj),
                                                                        onClick: () => {
                                                                            (n(),
                                                                                (0, eN.openBadgeDirectoryModal)({
                                                                                    viewingCurrentUserBadges: !0,
                                                                                }));
                                                                        },
                                                                    }),
                                                                (0, i.jsx)(tM, { onClose: n, popoutContainerRef: x }),
                                                                $ &&
                                                                    (0, i.jsx)(nj, {
                                                                        popoutContainerRef: x,
                                                                        scrollerRef: U,
                                                                        shouldScrollIntoView: Z,
                                                                        onCloseAccountPopout: n,
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(ns.A.Overlay, {
                                                        className: ew.g0,
                                                        children: (0, i.jsxs)(eF, {
                                                            children: [
                                                                (0, i.jsx)(eG, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eT.UserCircleIcon,
                                                                    label: eD.intl.string(eD.t.oMNyYN),
                                                                    onClick: () => {
                                                                        (n(), (0, nW.A)());
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(eU, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": eD.intl.string(eD.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: j,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    nd.p5 &&
                                                                    I &&
                                                                    (0, i.jsx)(eG, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eS.IdIcon,
                                                                        label: eD.intl.string(eD.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            ((0, nd.C)(t.id), n());
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
                                        (0, i.jsx)(tP.A, { skuId: h.profileEffect.skuId, isHovering: _ }),
                                    null != G && (0, i.jsx)(tw.A, { frame: G, fadeIn: F }),
                                ],
                            }),
                            (0, i.jsx)(n8, { targetElementRef: w, onClose: n }),
                            (0, i.jsx)(t2, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var id = n(201805),
    im = n(209932),
    ip = n(655116),
    ih = n(365958),
    ig = n(342296),
    iA = n(852712),
    iC = n(389960),
    iE = n(173660),
    ix = n(616356),
    iv = n(734057),
    i_ = n(629016),
    ib = n(186111),
    iy = n(754712),
    iT = n(495867),
    iS = n(967198),
    iI = n(485296),
    iN = n(486020),
    ij = n(188567),
    iR = n(536194),
    iO = n(253400),
    iM = n(994314),
    iP = n(485599),
    ik = n(116833);
function iL(e) {
    let t = "progress" === e.variant,
        n = t
            ? {
                  title: eD.intl.string(eD.t.uwDBSq),
                  body: eD.intl.formatToPlainString(eD.t.Mk5nzZ, { count: e.newBadgeCount }),
              }
            : { title: eD.intl.string(eD.t["5GD53o"]), body: eD.intl.string(eD.t["2Rb7tE"]) };
    return (0, i.jsx)(nY.A, {
        targetElementRef: e.targetElementRef,
        shouldShow: !0,
        position: "top",
        alignmentStrategy: "edge",
        align: "left",
        caretConfig: { align: "start" },
        size: "lg",
        graphic: {
            type: "dynamic",
            component: ik.DynamicGraphicComponent.BADGE_DIRECTORY_NUX,
            props: { hasProgress: t, badgeIconUrls: t ? e.badgeIconUrls : void 0 },
        },
        title: n.title,
        body: n.body,
        actions: [{ variant: "primary", text: eD.intl.string(eD.t.pHo9tZ), onClick: e.onPrimaryAction }],
        onRequestClose: e.onRequestClose,
    });
}
function iD(e) {
    let { variantProps: t, targetElementRef: n, markAsDismissed: l } = e;
    return (0, i.jsx)(iL, {
        ...t,
        onPrimaryAction: () => {
            (l(n3.i.TAKE_ACTION), (0, eN.openBadgeDirectoryModal)());
        },
        onRequestClose: () => l(n3.i.USER_DISMISS),
        targetElementRef: n,
    });
}
var iw = n(206248);
function iU(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: l, position: r, shouldShow: a = !0, children: s } = e,
        o = (0, e8.sw)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s,
            a && o
                ? (0, i.jsx)(iw.H, {
                      targetElementRef: t,
                      title: eD.intl.string(tN.default.Qn21R6),
                      body: eD.intl.string(tN.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: r,
                      caretConfig: { align: "center" },
                      action: {
                          text: eD.intl.string(eD.t.RzWDqY),
                          onClick: function () {
                              (n(n3.i.TAKE_ACTION), l());
                          },
                      },
                      onRequestClose: function () {
                          n(n3.i.USER_DISMISS);
                      },
                  })
                : null,
        ],
    });
}
var iG = n(379848),
    iF = n(626584),
    iB = n(757036),
    iH = n(591179),
    iV = n(531685),
    iW = n(259065),
    iK = n(842671),
    iz = n(78294);
let iY = new iF.A("DisplayNameStylesFlywheelCoachmark");
function iq(e) {
    let { markAsDismissed: t, targetElementRef: n, children: r } = e,
        { analyticsLocations: a } = (0, k.Ay)(),
        s = (0, l.useRef)(null),
        o = (0, c.bG)([iV.A], () => iV.A.isFocused()),
        u = (0, iB.L)(t$.PremiumTypes.TIER_2),
        d = (0, iH.X)("DisplayNameStylesFlywheelCoachmark"),
        m = (0, l.useCallback)(() => {
            t(n3.i.TAKE_ACTION);
            let e = nG.default.getCurrentUser();
            d && null != e
                ? (0, t4.openUserProfileModal)({
                      userId: e.id,
                      sourceAnalyticsLocations: a,
                      onModalOpen: () => {
                          (0, iW.L)({ analyticsLocations: a, stackingBehavior: "stack" });
                      },
                  })
                : (0, e6.openUserSettings)(e3.X.PROFILE_PANEL, { analyticsLocations: a }, () => {
                      (0, iW.L)({ analyticsLocations: a });
                  });
        }, [t, a, d]),
        f = (0, l.useCallback)(() => {
            t(n3.i.USER_DISMISS);
        }, [t]);
    (0, l.useEffect)(() => {
        o && s.current?.paused ? s.current?.play().catch(iY.error) : o || s.current?.pause();
    }, [o]);
    let p = u ? [eD.intl.string(iK.default.TyUdka)] : [eD.intl.string(iK.default.dluV0R)];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r,
            (0, i.jsx)(nY.A, {
                targetElementRef: n,
                shouldShow: !0,
                onRequestClose: f,
                align: "right",
                position: "top",
                caretConfig: { align: "center" },
                gradientColor: "nitro-pink",
                graphic: { type: "video", ref: s, src: iz.A, aspectRatio: "21/9", loop: !0 },
                size: "lg",
                title: eD.intl.string(iK.default.cYwrp8),
                body: p,
                actions: [{ text: eD.intl.string(eD.t["4P5I8V"]), variant: "primary", onClick: m }],
            }),
        ],
    });
}
var iQ = n(45780),
    i$ = n(696451),
    iX = n(71393),
    iZ = n(685073),
    iJ = n(73153);
let i0 = { lastSeenInfos: {} },
    i1 = i0;
class i2 extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        i1 = e ?? i0;
    }
    getState() {
        return i1;
    }
    getGuildLastSeenInfo(e) {
        return i1.lastSeenInfos[e] ?? null;
    }
}
let i3 = new i2(iJ.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        i1.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        i1 = i0;
    },
});
var i6 = n(514661);
let i8 = new iF.A("GuildTagAvailableCoachmark");
function i7(e) {
    let t = (0, c.bG)([iX.A], () => iX.A.getGuild(e.guildId));
    function n(n) {
        (t?.profile?.tag != null &&
            iJ.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n));
    }
    let { isAdopting: l, onAdoptTag: r, onEditProfile: a } = (0, i6.A)(t?.id ?? null, () => n(n3.i.TAKE_ACTION));
    if (null == t || !(0, iZ.q0)(t))
        return (i8.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children);
    let s = [
        { text: eD.intl.string(eD.t.jwEaiX), loading: l, onClick: r, variant: "primary" },
        { text: eD.intl.string(eD.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(nY.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: ik.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: eD.intl.formatToPlainString(eD.t["m/Tc3n"], { guildName: t.name }),
                body: eD.intl.string(eD.t.DrAXIr),
                actions: s,
                size: "md",
                onRequestClose: () => n(n3.i.USER_DISMISS),
            }),
        ],
    });
}
function i5(e) {
    let t = (0, c.bG)([iX.A], () => iX.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: l, onAdoptTag: r, onEditProfile: a } = (0, i6.A)(t?.id ?? null, () => n(n3.i.TAKE_ACTION));
    if (null == t || !(0, iZ.q0)(t))
        return (i8.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children);
    let s = [
        { text: eD.intl.string(eD.t.jwEaiX), loading: l, onClick: r, variant: "primary" },
        { text: eD.intl.string(eD.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(nY.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: ik.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: eD.intl.formatToPlainString(eD.t.VFqnyU, { guildName: t.name }),
                body: eD.intl.string(eD.t.DrAXIr),
                actions: s,
                size: "md",
                onRequestClose: () => n(n3.i.USER_DISMISS),
            }),
        ],
    });
}
var i9 = n(843010),
    i4 = n(764231),
    le = n(208223);
function lt(e) {
    let { groupName: t, targetElementRef: n } = e,
        l = tX(),
        r = (0, c.bG)([tV.Ay], () => tV.Ay.useReducedMotion),
        a = (0, tW.A)((e) => e.isOpen),
        s = (0, i9.G)();
    return r || null == l || a || s
        ? null
        : (0, i.jsx)(iG.zJ, {
              contentType: d.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: r } = e;
                  return (0, i.jsx)(ln, {
                      recentlyLeveledTenureBadge: l,
                      markAsDismissed: r,
                      targetElementRef: n,
                      shouldShow: t === d.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function ln(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: r, shouldShow: a } = e,
        s = t$.sp.indexOf(t),
        o = (0, le.I)(t$.sp[s > 0 ? s - 1 : s]).ambient,
        u = (0, l.useCallback)(() => {
            (n(n3.i.TAKE_ACTION),
                tW.A.setState({ shouldRenderTenureLevelUp: !0 }),
                ij._.dispatch(J.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
        }, [n]),
        c = (0, l.useCallback)(() => {
            n(n3.i.USER_DISMISS);
        }, [n]),
        d = t$.VD[t],
        m = eD.intl.formatToPlainString(eD.t.ewkaVR, {
            timeMilestone: (0, i4.T)(d.id, d.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        f = [{ text: eD.intl.string(eD.t.RzWDqY), variant: "primary", onClick: u }];
    return (0, i.jsx)(nY.A, {
        targetElementRef: r,
        onRequestClose: c,
        shouldShow: a,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: eD.intl.string(eD.t.VoDxsV),
        body: m,
        actions: f,
    });
}
var li = n(764014);
function ll(e) {
    let { targetElementRef: t } = e,
        n = (0, tW.A)((e) => e.isOpen),
        [l, r] = (0, tG.kn)(n ? [] : [d.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK], {
            groupName: n3.m.ACCOUNT_NAME_ZONE,
            bypassAutoDismiss: !0,
        });
    return l === d.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK
        ? (0, i.jsx)(nY.A, {
              targetElementRef: t,
              graphic: { type: "image", src: li.A },
              position: "top",
              alignmentStrategy: "edge",
              align: "left",
              caretConfig: { align: "start" },
              title: eD.intl.string(eD.t["Q+dH5r"]),
              body: eD.intl.string(eD.t.YKJw4W),
              onRequestClose: () => r(n3.i.USER_DISMISS),
              actions: [
                  {
                      text: eD.intl.string(eD.t.dcOuei),
                      onClick: function () {
                          (r(n3.i.TAKE_ACTION),
                              tW.A.setState({ shouldScrollToOrbsMenuItem: !0 }),
                              nS.Ay.setUserOpenedWalletViaProfileDCF(!0),
                              ij._.dispatch(J.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
                      },
                  },
              ],
          })
        : null;
}
function lr(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, id.c9)(),
        l = null != e.targetElementRef.current && t && n,
        [r, a] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, iQ.G$)(d.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? ""),
                l = (0, c.bG)(
                    [iX.A, nG.default, i$.Ay],
                    () => {
                        if (null === e) return !1;
                        let t = iX.A.getGuild(e);
                        if (void 0 === t || !(0, iZ.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                        let n = nG.default.getCurrentUser();
                        if (
                            void 0 === n ||
                            (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                        )
                            return !1;
                        let i = i$.Ay.getMember(e, n.id);
                        return null != i && !i.isPending;
                    },
                    [e],
                );
            return (0, tG.ww)(l && n && !i ? [d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? "null");
        })(e.guildId, { shouldShow: l }),
        [s, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                l = i?.identityGuildId ?? null,
                r = (0, c.bG)([i3], () => (null === l ? null : i3.getGuildLastSeenInfo(l))),
                a = (0, c.bG)([iX.A], () => iX.A.getGuild(l)?.profile?.tag),
                s = null != a && i?.identityGuildId === l && i?.tag === null,
                o = null != l && r?.tag === a,
                u = null !== l && s && !o;
            return (0, tG.Wl)(u && n ? d.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: l });
    return l
        ? r === d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(i5, {
                  guildId: e.guildId,
                  onDismiss: a,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : s === d.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(i7, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(lt, { groupName: n3.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        e.isOrbchievementsEnabled && (0, i.jsx)(ll, { targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(iG.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: n3.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: l } = t;
                                switch (n) {
                                    case d.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK:
                                        return (0, i.jsx)(iq, {
                                            markAsDismissed: l,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case d.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, i.jsx)(iU, {
                                            markAsDismissed: l,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: e9.p,
                                            children: e.children,
                                        });
                                    case d.M.BADGE_DIRECTORY_NUX_POPOVER:
                                        return (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                e.children,
                                                (0, i.jsx)(iD, {
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
var la = n(348858),
    ls = n(615675),
    lo = n(900797),
    lu = n(847374),
    lc = n(617354),
    ld = n(96020),
    lm = n(42473),
    lf = n(731854),
    lp = n(516171),
    lh = n(577755);
function lg(e) {
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
        } = (0, la.I)(m ? "undeafen" : "deafen"),
        C = n ? ls.HeadphonesDenyIcon : f,
        { name: E } = (0, ef.x5)(lf.oh.AUDIO_OUTPUT),
        x = (0, lc.A)(t, n, r),
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
                            children: (0, i.jsx)(ld.A, {
                                onInteraction: (0, V.s)("AudioDeviceMenu", P.A.ACCOUNT),
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
                        f = d ? lo.ChevronSmallUpIcon : lu.ChevronSmallDownIcon;
                    return (0, i.jsxs)("div", {
                        ref: _,
                        className: a()(lp.Lh, { [lp.v8]: m, [lp.q6]: d }),
                        children: [
                            (0, i.jsx)(lm.A, {
                                "aria-checked": m,
                                "aria-label": eD.intl.string(eD.t.wjcRFX),
                                className: lp.eT,
                                disabled: r,
                                icon: (0, i.jsx)(C, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: m ? nk.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: m ? lh.o : void 0,
                                innerClassName: a()({ [lh.T]: n }),
                                onClick: s,
                                onContextMenu: l,
                                onMouseEnter: g,
                                onMouseLeave: A,
                                plated: null != u,
                                redGlow: m,
                                role: "switch",
                                tooltipText: x,
                            }),
                            (0, i.jsx)(lm.A, {
                                className: a()(lp.UT, { [lp.q6]: d }),
                                disabled: r,
                                icon: (0, i.jsx)(f, {
                                    className: lp.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: m ? nk.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: l,
                                onContextMenu: l,
                                plated: null != u,
                                redGlow: m,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? eD.intl.formatToPlainString(eD.t["f+DDY/"], { outputDeviceName: E })
                                    : void 0,
                                tooltipShouldShow: !d,
                                tooltipText: c
                                    ? eD.intl.format(eD.t["f+DDY/"], { outputDeviceName: E })
                                    : eD.intl.string(eD.t.aA4Vce),
                                "aria-label": c
                                    ? eD.intl.formatToPlainString(eD.t["f+DDY/"], { outputDeviceName: E })
                                    : eD.intl.string(eD.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var lA = n(523875),
    lC = n(666654),
    lE = n(993719);
let lx = {};
class lv extends c.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return lx[e] ?? !1;
    }
}
let l_ = new lv(iJ.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        lx[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        lx[t] = !1;
    },
});
var lb = n(362823),
    ly = n(980923),
    lT = n(796262),
    lS = n(222176),
    lI = n(973324);
function lN(e) {
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
        _ = (0, c.bG)([iy.Ay], () => iy.Ay.getMode() === lf.TB.PUSH_TO_TALK),
        b = (0, c.bG)([iy.Ay], () => iy.Ay.getSettings().modeOptions.shortcut),
        y = (0, c.bG)([l_], () => l_.getIsTutorialActive(lb.v.MUTE_TUTORIAL)),
        T = (0, c.bG)([iT.A], () => null != iT.A.getChannelId()),
        { name: S } = (0, ef.x5)(lf.oh.AUDIO_INPUT),
        { enabledInputProfiles: I } = (0, iA.d)({ location: "MicrophoneButton" }),
        N = l.useRef(null),
        j = n || s || r,
        R = (0, lA.L)(j ? "unmute" : "mute"),
        { analyticsLocations: O } = (0, k.Ay)(P.A.AUDIO_INPUT_BUTTON),
        { Component: M, events: L, play: D } = R,
        w = r || s ? lC.MicrophoneDenyIcon : M;
    l.useEffect(() => () => D(), [j, D]);
    let U = (0, ly.A)(n, r, s, o);
    t = g
        ? { tooltipType: "green_void_do_not_use", tooltipText: eD.intl.string(eD.t["29gnR4"]), tooltipForceOpen: !0 }
        : E || A
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: eD.intl.format(eD.t.c1qUOQ, { keybind: tc.dI(b).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: U };
    let G = _ && T,
        F = j ? nk.A.colors.ICON_VOICE_MUTED : "currentColor",
        B = l.useCallback(() => {
            (f(), y && lE.N(lb.v.MUTE_TUTORIAL));
        }, [f, y]);
    return (0, i.jsxs)(k.f5, {
        value: O,
        children: [
            (0, i.jsx)(h.Y, {
                targetElementRef: N,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        x(),
                        (0, i.jsx)(k.f5, {
                            value: O,
                            children: (0, i.jsx)(ld.A, {
                                onInteraction: (0, V.s)("AudioDeviceMenu", P.A.ACCOUNT),
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
                        s = r ? lo.ChevronSmallUpIcon : lu.ChevronSmallDownIcon;
                    return (0, i.jsxs)("div", {
                        ref: N,
                        className: a()(lp.Lh, { [lp.v8]: j, [lp.q6]: r }),
                        children: [
                            (0, i.jsx)(lm.A, {
                                "aria-checked": j,
                                "aria-label": eD.intl.string(eD.t.w4m945),
                                className: lp.eT,
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
                                redGlow: j,
                                role: "switch",
                                ...t,
                                children: G ? (0, i.jsx)("div", { className: a()(lS.U, { [lS.z]: v }) }) : null,
                            }),
                            (0, i.jsx)(lm.A, {
                                "aria-label": C
                                    ? eD.intl.formatToPlainString(eD.t["18wnuD"], { inputDeviceName: S })
                                    : eD.intl.string(eD.t.fRzCbB),
                                className: a()(lp.UT, { [lp.q6]: r }),
                                disabled: o,
                                icon: (0, i.jsx)(s, {
                                    className: lp.$$,
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
                                redGlow: j,
                                tooltipType: C ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: C,
                                tooltipPositionKey: C
                                    ? eD.intl.formatToPlainString(eD.t["18wnuD"], { inputDeviceName: S })
                                    : void 0,
                                tooltipShouldShow: !r,
                                tooltipText: C
                                    ? eD.intl.format(eD.t["18wnuD"], { inputDeviceName: S })
                                    : eD.intl.string(eD.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(nY.A, {
                targetElementRef: N,
                shouldShow: y,
                graphic: { type: "image", src: lI.A },
                onRequestClose: () => {
                    lE.N(lb.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: eD.intl.string(lT.default.VG4zAf),
                body: eD.intl.string(lT.default["8VIRzR"]),
            }),
        ],
    });
}
var lj = n(935399),
    lR = n(505312),
    lO = n(848847),
    lM = n(22363),
    lP = n(802516),
    lk = n(573648),
    lL = n(128232),
    lD = n(277657),
    lw = n(690364),
    lU = n(522978);
let lG = "console_connection_coachmark",
    lF = new iF.A("ConsoleConnectionCoachmark");
function lB(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        r = l.useMemo(() => {
            function e(e) {
                (!(async function (e) {
                    let t;
                    e === J.fg2.XBOX ? lw.x() : lL.x();
                    try {
                        t = await (0, lD.V)(e);
                    } catch (t) {
                        (lF.error("Error starting console sign-in; falling back to the link modal", t),
                            (0, lU.A)({ platformType: e, location: lG }));
                        return;
                    }
                    e === J.fg2.XBOX ? lw.t([lG], t) : lL.t([lG], e, t);
                })(e),
                    t(n3.i.TAKE_ACTION));
            }
            return [
                {
                    text: lk.A.get(J.fg2.PLAYSTATION).name,
                    icon: lM.PlaystationNeutralIcon,
                    variant: "secondary",
                    onClick: () => e(J.fg2.PLAYSTATION),
                },
                {
                    text: lk.A.get(J.fg2.XBOX).name,
                    icon: lP.XboxNeutralIcon,
                    variant: "secondary",
                    onClick: () => e(J.fg2.XBOX),
                },
            ];
        }, [t]),
        a = l.useCallback(() => {
            t(n3.i.USER_DISMISS);
        }, [t]);
    return (0, i.jsx)(nY.A, {
        targetElementRef: n,
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/f5860f559ea2857185a554648b2a0b140e16bea35ed1dff11b697afd49ee2447.png",
            aspectRatio: "2/1",
        },
        title: eD.intl.string(eD.t.ZCib6v),
        body: eD.intl.string(eD.t.ikWQ2x),
        position: "top",
        caretConfig: { align: "end" },
        actions: r,
        onRequestClose: a,
    });
}
var lH = n(975807),
    lV = n(425565),
    lW = n(321671);
function lK(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        r = l.useMemo(
            () => [
                {
                    text: eD.intl.string(lW.default["j4n5/K"]),
                    variant: "primary",
                    onClick: () => {
                        ((0, lH.A)(lV.C), t(n3.i.TAKE_ACTION));
                    },
                },
            ],
            [t],
        ),
        a = l.useCallback(() => {
            t(n3.i.USER_DISMISS);
        }, [t]);
    return (0, i.jsx)(nY.A, {
        targetElementRef: n,
        size: "video",
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/147b33df1db170b53e140d7ad45552731aa0b9b16b7a7358cb9916634167ee02.png",
            aspectRatio: "16/9",
        },
        title: eD.intl.string(lW.default.tmst3F),
        body: eD.intl.string(lW.default.sJHQqC),
        position: "top",
        caretConfig: { align: "end" },
        actions: r,
        onRequestClose: a,
    });
}
function lz(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        { analyticsLocations: l } = (0, k.Ay)(P.A.HOLIDAY_COACHMARK);
    return (0, i.jsx)(nY.A, {
        targetElementRef: n,
        align: "center",
        position: "top",
        caretConfig: { align: "end" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/f5c1292fad8b7f3e1381e1a235d5f9ce22d791176d5f2fbd4d3dc461d1f895c0.png",
        },
        title: eD.intl.string(eD.t.Mjs8KR),
        body: eD.intl.string(eD.t.U0INks),
        actions: [
            {
                text: eD.intl.string(eD.t.NENZhS),
                onClick: () => {
                    ((0, e6.openUserSettings)(e3.X.NOTIFICATION_HOLIDAY_SOUNDPACK, { analyticsLocations: l }),
                        t(n3.i.TAKE_ACTION));
                },
            },
        ],
        gradientColor: "purple",
        onRequestClose: () => t(n3.i.USER_DISMISS),
    });
}
var lY = n(88001),
    lq = n(107198),
    lQ = n(438705);
function l$(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: r } = e,
        a = l.useCallback(() => {
            (r(), (0, e6.openUserSettings)(e3.X.SUBSCRIPTIONS_PANEL));
        }, [r]);
    return (0, i.jsx)(nY.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: lQ },
        shouldShow: n,
        title: eD.intl.format(lq.default.bx8sR9, { premiumGroupProductName: (0, lY.DP)() }),
        body: eD.intl.format(lq.default.Pw4OFZ, { premiumGroupProductName: (0, lY.DP)() }),
        onRequestClose: r,
        actions: [{ text: eD.intl.string(lq.default.DD26QR), onClick: a }],
    });
}
var lX = n(873298),
    lZ = n(840387);
function lJ(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        r = (0, lZ.Z)(),
        a = nA.KP.useSetting(),
        s = r && a !== lX.KP.FRIENDS_AND_ALL_GUILDS,
        o = l.useCallback(() => {
            (t(n3.i.TAKE_ACTION), (0, e6.openUserSettings)(e3.X.PROFILE_PRIVACY_CATEGORY));
        }, [t]),
        u = l.useCallback(() => {
            t(n3.i.USER_DISMISS);
        }, [t]),
        c = s
            ? a === lX.KP.FRIENDS_ONLY
                ? eD.intl.string(eD.t["/hogEy"])
                : eD.intl.string(eD.t["6hEfm1"])
            : eD.intl.string(eD.t.bnNxW1);
    return (0, i.jsx)(nY.A, {
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
        title: eD.intl.string(eD.t.Ve4nS1),
        body: c,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: eD.intl.string(eD.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
var l0 = n(415443);
function l1(e) {
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
    (0, lj.Ay)(() => {
        function e() {
            return p(!0);
        }
        return (
            ij._.subscribe(J.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                ij._.unsubscribe(J.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let h = l.useCallback(() => {
            (p(!1), a());
        }, [a]),
        g = ed.A.coachmarkDismissibleContent;
    if (null != r) {
        let e = (0, l0.A)("1794262422800", !0);
        t =
            null != e
                ? eD.intl.formatToPlainString(eD.t.wve4kg, { webBuildOverride: r.id, builtAt: e })
                : eD.intl.formatToPlainString(eD.t.Gzh6ZP, { webBuildOverride: r.id });
    } else t = eD.intl.string(eD.t.cduTBL);
    let A = ti.SettingsIcon,
        C = (0, lR.w)();
    return (
        (A = null != r ? lO.SettingsInfoIcon : C.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(lm.A, {
                    ref: m,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: h,
                    onContextMenu: s,
                    "aria-label": eD.intl.string(eD.t.cduTBL),
                    icon: (0, i.jsx)(A, { size: "refresh_sm", color: "currentColor", className: u }),
                    ...C.events,
                    plated: null != c,
                }),
                (0, i.jsx)(l$, { targetElementRef: m, shouldShow: f, onDismiss: () => p(!1) }),
                (0, i.jsx)(iG.Ay, {
                    contentTypes: o,
                    groupName: n3.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === d.M.TINY_BRONCO && null != I.hm
                            ? (0, i.jsx)(l.Suspense, {
                                  fallback: null,
                                  children: (0, i.jsx)(I.hm, { markAsDismissed: n, targetElementRef: m }),
                              })
                            : t === d.M.PRIVATE_PROFILE_COACHMARK
                              ? (0, i.jsx)(lJ, { markAsDismissed: n, targetElementRef: m })
                              : t === d.M.GIFT_CARDS_MARKETING_COACHMARK
                                ? (0, i.jsx)(lK, { markAsDismissed: n, targetElementRef: m })
                                : t === d.M.CONSOLE_CONNECTION_COACHMARK
                                  ? (0, i.jsx)(lB, { markAsDismissed: n, targetElementRef: m })
                                  : null != g && t === g
                                    ? (0, i.jsx)(lz, { markAsDismissed: n, targetElementRef: m })
                                    : null;
                    },
                }),
            ],
        })
    );
}
var l2 = n(358285);
let l3 = iO.Ay.getEnableHardwareAcceleration() ? f.Js : f.eu,
    l6 = 2.5 * to.A.Millis.SECOND,
    l8 = 2 * to.A.Millis.MINUTE,
    l7 = 5 * to.A.Millis.SECOND;
function l5(e) {
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
        b = (0, iN.F_)({ avatarDecoration: C, size: (0, K.Te)(p._3.SIZE_32) }),
        T = (0, ei.A)(),
        {
            updateOpenPopoutRef: S,
            highlightBadge: I,
            setHighlightBadge: N,
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
                (0, y.A)(() => a(!0), 750),
                l.useEffect(() => {
                    function t(t) {
                        let { highlightBadge: n } = t;
                        (null != n && i(n), e.current?.());
                    }
                    return (
                        ij._.subscribe(J.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            ij._.unsubscribe(J.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: r ? n : void 0, setHighlightBadge: i }
            );
        })(),
        j = (0, Y.K)(A);
    return null == u
        ? null
        : (0, i.jsx)(v.A, {
              object: J.ZSU.AVATAR,
              children: (0, i.jsx)(ig.A, {
                  user: u,
                  targetElementRef: _,
                  clickTrap: !0,
                  preload: () =>
                      (0, ih.A)(u.id, u.getAvatarURL(void 0, ig.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: l } = e;
                      return (0, i.jsx)(ic, {
                          currentUser: u,
                          highlightBadge: I,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: l,
                          className: l2.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: h.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      (m(), N(void 0));
                  },
                  children: (e) => {
                      S(e);
                      let { onMouseEnter: t, onMouseDown: l, ...m } = e;
                      return (0, i.jsxs)("div", {
                          ref: _,
                          style: j,
                          onMouseEnter: t,
                          onMouseDown: l,
                          onClick: (t) => {
                              (e.onClick?.(t), d?.(t));
                          },
                          className: a()(l2.Q9, { [l2.ZQ]: null != A }),
                          children: [
                              (0, i.jsx)(g.D, {
                                  ...m,
                                  onClick: (t) => {
                                      (t.stopPropagation(), e.onClick?.(t), d?.(t));
                                  },
                                  "aria-label": eD.intl.string(eD.t["5fWB8U"]),
                                  focusProps: { ringTarget: _ },
                                  className: l2.$n,
                                  "data-jump-section": E,
                              }),
                              (0, i.jsx)(l3, {
                                  size: p._3.SIZE_32,
                                  src: u.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: b,
                                  status: o ? J.clD.STREAMING : c,
                                  voiceStatus: (0, p.n$)(n, r),
                                  voiceDb: s,
                                  className: l2.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: l2.oM, children: f(T) }),
                          ],
                      });
                  },
              }),
          });
}
class l9 extends l.PureComponent {
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
        ((0, B.A)(e, t, J.JJy.ACCOUNT_PANEL), (0, H.XJ)(P.A.ACCOUNT, H.OP.MIC, n));
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        ((0, F.A)(e, J.JJy.ACCOUNT_PANEL), (0, H.XJ)(P.A.ACCOUNT, H.OP.DEAFEN, !t));
    };
    handleOpenAccountSettings = () => {
        (this.dismissTooltips(),
            iT.A.isConnected() ? (0, e6.openUserSettings)(e3.X.VOICE_AND_VIDEO_PANEL) : (0, e6.openUserSettings)());
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
                    n.e(195707),
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
                    n.e(847131),
                    n.e(572430),
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
                    n.e(918221),
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
                    n.e(436753),
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
                    n.e(883316),
                    n.e(49571),
                    n.e(577885),
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
                    n.e(689567),
                    n.e(319056),
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
                    n.e(973973),
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
                    n.e(787412),
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
                    n.e(795365),
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
                    n.e(56520),
                    n.e(945413),
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
                    n.e(256769),
                    n.e(620656),
                    n.e(902564),
                    n.e(495786),
                    n.e(428967),
                    n.e(30441),
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
                    n.e(102698),
                    n.e(125964),
                    n.e(737021),
                    n.e(775951),
                    n.e(254506),
                    n.e(874342),
                    n.e(138830),
                    n.e(709333),
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
                    n.e(877745),
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
                    n.e(480945),
                    n.e(819193),
                    n.e(276297),
                    n.e(365011),
                    n.e(780611),
                    n.e(201243),
                    n.e(950535),
                    n.e(215920),
                    n.e(246969),
                    n.e(880672),
                    n.e(269786),
                    n.e(688138),
                    n.e(228850),
                    n.e(437961),
                    n.e(999873),
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
                    n.e(101851),
                    n.e(146149),
                    n.e(360536),
                    n.e(986300),
                    n.e(686774),
                    n.e(138733),
                    n.e(228011),
                    n.e(759174),
                    n.e(175284),
                    n.e(538733),
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
                    n.e(967102),
                    n.e(220803),
                    n.e(195782),
                    n.e(659624),
                    n.e(646191),
                    n.e(262720),
                    n.e(454085),
                    n.e(483518),
                    n.e(185928),
                    n.e(462155),
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
                    n.e(582153),
                    n.e(313052),
                    n.e(639721),
                    n.e(419631),
                    n.e(82384),
                    n.e(956814),
                    n.e(903820),
                    n.e(876892),
                    n.e(334624),
                    n.e(971508),
                    n.e(816799),
                    n.e(356675),
                    n.e(381752),
                    n.e(352351),
                    n.e(734090),
                    n.e(311525),
                    n.e(671710),
                    n.e(483102),
                    n.e(704457),
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
                    n.e(488292),
                    n.e(239734),
                    n.e(515818),
                    n.e(645671),
                    n.e(214451),
                    n.e(993720),
                    n.e(800916),
                    n.e(654658),
                    n.e(908977),
                    n.e(233049),
                    n.e(569443),
                    n.e(809548),
                    n.e(543456),
                    n.e(96857),
                ]).then(n.bind(n, 230016));
                return (t) =>
                    (0, i.jsx)(e, { ...t, onClose: x.Z_, onInteraction: (0, V.s)("UserSettingsMenu", P.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, V.s)("AudioDeviceMenu", P.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        (this.dismissTooltips(),
            (0, x.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e(360536), n.e(678827)]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, iA.d)({ location: "Account" });
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
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > l8;
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
                      this.speakingWhileMutedTooltipTimeout.start(l6, () =>
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
            return (0, i.jsxs)(M.A, {
                hoverText: a,
                forceHover: e,
                children: [
                    (0, i.jsx)(A.A, { children: nm.Ay.humanizeStatus(r) }),
                    (0, i.jsx)(S.A, {
                        user: l,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: s,
                        textClassName: l2.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let o = t?.find((e) => {
            let { type: t } = e;
            return t === u.$.CUSTOM_STATUS;
        });
        return null != o
            ? (0, i.jsxs)(M.A, {
                  hoverText: a,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(A.A, { children: nm.Ay.humanizeStatus(r) }),
                      (0, i.jsx)(en.A, { activity: o, emojiClassName: l2.Zg, className: l2.WO }),
                  ],
              })
            : null != r && r !== J.clD.UNKNOWN && l.hasUniqueUsername()
              ? (0, i.jsx)(M.A, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(O, { text: nm.Ay.humanizeStatus(r) }),
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
                          className: l2.eW,
                          children: (0, i.jsx)(iP.A, {
                              className: a()({ [l2.e8]: null != e }),
                              children: (0, i.jsx)(er.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? el.G.ANIMATED : el.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: l2.XP,
                          children: (0, i.jsx)(iM.A, { children: this.renderStatus() }),
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
            : (0, i.jsx)(lr, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: n,
                  targetElementRef: this.avatarWithPopoutRef,
                  badgeDirectoryNuxPopoverVariant: t,
                  additionalDCs: l.avatar,
                  isOrbchievementsEnabled: r,
                  children: (0, i.jsx)(l5, {
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
                          className: a()(l2.kL, { [l2.UG]: null != n, [l2.bc]: !l, [l2.G5]: r }),
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              (0, i.jsx)(Q.A, { nameplate: t, hovered: s, placement: q.u.ACCOUNT }),
                              this.renderNameZone(e),
                              (0, i.jsx)(l4, {
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
function l4(e) {
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
            deviceChangedTooltipType: b,
            dismissTooltips: y,
            speaking: T,
        } = e,
        S = (0, Y.K)(v);
    function N() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return (0, i.jsx)(l1, {
            webBuildOverride: c,
            onClick: A,
            onContextMenu: C,
            dismissibleContents: [...E.settings, ...e],
            iconForeground: null != v ? l2.t4 : void 0,
            nameplate: v,
        });
    }
    return (0, i.jsxs)("div", {
        className: l2.Uo,
        style: S,
        children: [
            (0, i.jsx)(lN, {
                accountContainerRef: _,
                selfMute: n,
                serverMute: a,
                suppress: o,
                awaitingRemote: r,
                onMouseEnter: d,
                onMouseLeave: m,
                onClick: p,
                onContextMenu: h,
                iconForeground: null != v ? l2.t4 : void 0,
                nameplate: v,
                shouldShowSpeakingWhileMutedTooltip: u,
                shouldShowInputDeviceChangedTooltip: !u && "input" === b,
                dismissTooltips: y,
                speaking: T,
            }),
            (0, i.jsx)(lg, {
                selfDeaf: t,
                serverDeaf: s,
                onClick: f,
                onContextMenu: g,
                awaitingRemote: r,
                iconForeground: null != v ? l2.t4 : void 0,
                nameplate: v,
                shouldShowOutputDeviceChangedTooltip: "output" === b,
                dismissTooltips: y,
            }),
            null != I.hE
                ? (0, i.jsx)(l.Suspense, { fallback: N(), children: (0, i.jsx)(I.hE, { occluded: x, children: N }) })
                : N(),
        ],
    });
}
function re(e) {
    let t = (0, c.bG)([iT.A], () => null != iT.A.getChannelId()),
        n = (0, ef.Py)(e),
        i = l.useRef(new m.Ep()),
        [r, a] = l.useState(!1);
    l.useEffect(() => {
        t &&
            n &&
            (a(!0),
            i.current.start(l7, () => {
                a(!1);
            }));
    }, [t, n]);
    let s = l.useCallback(() => {
        (a(!1), i.current.stop());
    }, []);
    return (
        (0, b.l0)(() => {
            i.current.stop();
        }),
        { shouldShowTooltip: r, dismissTooltip: s }
    );
}
function rt() {
    let e,
        t,
        n,
        r,
        a = (0, c.bG)([nG.default], () => nG.default.getCurrentUser()),
        s = (0, c.bG)([n1.default], () => n1.default.getId()),
        {
            activities: m,
            streaming: f,
            status: p,
        } = (0, c.cf)([n7.A], () => {
            let e = n7.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === u.$.STREAMING;
                    }),
                status: n7.A.getStatus(),
            };
        }),
        h = (0, c.bG)([ix.A], () => ix.A.getAnyStreamForUser(s)),
        g = (0, _.A)({ userId: s }),
        A = (0, c.bG)([im.A], () => im.A.isUserPlayingSounds(s)),
        C = (0, c.bG)([iI.A], () => iI.A.getVoiceVolume(s)),
        x = nm.Ay.useUserTag(a, { decoration: "never" }),
        v = (0, c.bG)([iT.A, iv.A], () => {
            let e = iT.A.getChannelId();
            return null != e ? iv.A.getChannel(e) : null;
        }),
        { mute: b, selfMute: y, suppress: T } = (0, iE.A)(v),
        { selfDeaf: S, deaf: I } = (0, iC.A)(v),
        N = (0, c.bG)([w.A], () => ((0, U.kK)() ? w.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        j = (0, c.bG)([iy.Ay], () => iy.Ay.getSpeakingWhileMuted()),
        R = (0, c.bG)([G.A], () => G.A.isFullscreenInContext()),
        O = (0, c.bG)([ib.A], () => ib.A.hasLayers()),
        M = (0, E.re)(E.DX) || O || iR.P.isDisallowPopupsSet() || R,
        F = (0, c.bG)([ea.default], () => null != ea.default.getAwaitingRemoteSessionInfo()),
        B = (0, c.bG)([iS.A], () => iS.A.getGuildId()),
        H = a?.avatarDecoration,
        V = (0, W.A)(H),
        K = nm.Ay.useName(a) ?? "",
        { analyticsLocations: Y } = (0, k.Ay)(P.A.ACCOUNT),
        q = (0, z.r)({ user: a, guildId: void 0 }),
        { isQuestBarEmpty: Q } = (0, id.c9)(),
        $ = (0, c.bG)([ip.A, nG.default, i_.A], () => {
            let e,
                t = ip.A.getSyncingWith(),
                n = ip.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = o()(Array.from(i_.A.getParty(e) ?? []))
                        .map((e) => nG.default.getUser(e))
                        .filter(nM.Vq)
                        .value()),
                i.length > 1
            );
        }),
        en = { avatar: [], settings: [] },
        ei = (0, nC.Hy)({ location: "Account" }) && !M,
        el = em.A.useIsEligible(),
        er = ed.A.coachmarkDismissibleContent,
        ef = (0, L.d)({ location: "AccountCoachmark" }),
        ep =
            ((e = (0, c.bG)([eo.A], () => eo.A.hasLoaded(ec.oD.PRELOADED_USER_SETTINGS))),
            (t = (0, es.HX)(d.M.GIFT_CARDS_MARKETING_COACHMARK)),
            (n = e && !t),
            (r = (0, eu.y)({ location: "AccountCoachmark", countGiftCardWallet: !0, canFetchPaymentSources: n })),
            n && r),
        eh = (function (e) {
            let { enabled: t } = et.useConfig({ location: e }),
                n = (0, c.bG)(
                    [X.A],
                    () =>
                        !X.A.isFetching() &&
                        !X.A.getAccounts().some((e) => {
                            let { type: t } = e;
                            return ee.has(t);
                        }),
                ),
                i = (0, c.bG)([Z.A], () => Z.A.hasConsented(J.YAq.PERSONALIZATION));
            return t && n && i;
        })("AccountCoachmark"),
        eg = (0, D.b)({ currentUserId: a?.id, enabled: ef });
    M ||
        (en.avatar.push(d.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
        null != eg && en.avatar.push(d.M.BADGE_DIRECTORY_NUX_POPOVER),
        el && null != er && en.settings.push(er),
        ep && en.settings.push(d.M.GIFT_CARDS_MARKETING_COACHMARK),
        eh && en.settings.push(d.M.CONSOLE_CONNECTION_COACHMARK),
        en.settings.push(d.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: eA, dismissTooltip: eC } = re(lf.oh.AUDIO_INPUT),
        { shouldShowTooltip: eE, dismissTooltip: ex } = re(lf.oh.AUDIO_OUTPUT),
        ev = l.useMemo(() => (eA ? "input" : eE ? "output" : void 0), [eA, eE]),
        e_ = l.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        eC();
                        break;
                    case "output":
                        ex();
                }
            },
            [eC, ex],
        );
    return (0, i.jsx)(k.f5, {
        value: Y,
        children: (0, i.jsx)(l9, {
            currentUser: a,
            username: K,
            activities: m,
            applicationStream: h,
            voiceChannel: v,
            dismissibleContents: en,
            badgeDirectoryNuxPopoverVariant: eg,
            isOrbchievementsEnabled: ei,
            userTag: x,
            occluded: M,
            selfDeaf: S,
            selfMute: y,
            serverDeaf: I,
            serverMute: b,
            speaking: g,
            playingSoundboard: A,
            voiceDb: C,
            speakingWhileMuted: j,
            status: p,
            streaming: f,
            suppress: T,
            webBuildOverride: N,
            awaitingRemote: F,
            nameplate: q,
            selectedGuildId: B,
            avatarDecoration: V,
            isQuestBarEmpty: Q,
            isListenAlongVisible: $,
            deviceChangedTooltipType: ev,
            onDismissDeviceChangedTooltip: () => e_(ev),
        }),
    });
}
