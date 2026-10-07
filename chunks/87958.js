(s.d(t, { A: () => aq }), s(323874), s(14289), s(35956), s(205816));
var i,
    n,
    a,
    l,
    r,
    c = s(477900),
    o = s(582128),
    d = s(503698),
    u = s.n(d),
    m = s(806163),
    x = s(17928),
    g = s(289873),
    p = s(73153),
    f = s(73825),
    h = s(974544),
    N = s(107834),
    A = s(793574),
    j = s(688810),
    E = s(277984),
    T = s(86379),
    b = s(160946),
    C = s(545075),
    R = s(840251),
    I = s(688151);
let _ = new R.E([], I.$G.OPEN_NITRO, { location: "open nitro tab/settings" });
var v = s(611924),
    P = s(75678),
    S = s(976860),
    y = s(351906),
    D = s(287809),
    M = s(295405),
    O = s(166403),
    L = s(174459),
    U = s(474090),
    k = s(10392);
s(321073);
var G = s(269115),
    w = s(689175),
    B = s(961250),
    H = s(366505),
    F = s(321191),
    V = s(903209),
    z = s(131168),
    W = s(482589),
    Y = s(511484),
    X = s(315629),
    K = s(297264),
    J = s(834730),
    q = s(65470),
    Q = s(660183),
    Z = s(719126);
let $ = function (e) {
    let { className: t, location: s, analyticsLocation: i } = e,
        { analyticsLocations: n } = (0, j.Ay)(s);
    return (0, c.jsx)(j.f5, {
        value: n,
        children: (0, c.jsxs)(X.h, {
            className: u()(Z.kL, Z.pm, t),
            color: "purple",
            children: [
                (0, c.jsxs)("div", {
                    className: Z.FS,
                    children: [
                        (0, c.jsx)(K.D, {
                            variant: "heading-xxl/bold",
                            className: Z.R_,
                            children: Q.intl.string(Q.t.Ve9Ge6),
                        }),
                        (0, c.jsx)(J.E, { variant: "text-md/medium", children: Q.intl.string(Q.t.yQ06u1) }),
                        (0, c.jsx)("div", {
                            className: Z.SB,
                            children: (0, c.jsx)(q.A, {
                                buttonTextOverride: Q.intl.string(Q.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: i,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, c.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                    className: Z._e,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
var ee = s(877624),
    et = s(192308),
    es = s(331322),
    ei = s(403581),
    en = s(821609),
    ea = s(502572),
    el = s(775602),
    er = s(366999),
    ec = s(531260),
    eo = s(780964),
    ed = s(766075),
    eu = s(786300),
    em = s(975571),
    ex = s(158045),
    eg = s(89366),
    ep = s(881489),
    ef = s(724651),
    eh = s(732280),
    eN = s(549996),
    eA = s(172218);
function ej() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, s] = (0, o.useState)(1),
        i = (0, o.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, eA.B)(
            (e) => {
                s(e.intersectionRatio);
            },
            i,
            e,
        ),
        visibilityPercentage: t,
    };
}
var eE = s(287763);
let eT = function (e) {
    let { text: t } = e;
    return (0, c.jsx)("div", {
        className: eE.i,
        children: (0, c.jsx)(J.E, { variant: "text-sm/bold", color: "text-overlay-light", children: t }),
    });
};
var eb = s(371764),
    eC = s(103411),
    eR = s(792656),
    eI = s(536637),
    e_ = s.n(eI),
    ev = s(496431),
    eP = s(850292);
let eS = function (e) {
    let { expiresAt: t, className: s, digitTextVariant: i = "text-md/medium" } = e,
        n = (0, ev.A)(e_()(t).toDate(), 1e3);
    if (null == n) return null;
    let { days: a, hours: l, minutes: r, seconds: o } = n,
        d = [
            { unitValue: a, unitType: "days" },
            { unitValue: l, unitType: "hours" },
            { unitValue: r, unitType: "minutes" },
            { unitValue: o, unitType: "seconds" },
        ];
    return (0, c.jsxs)("div", {
        className: u()(eP.Xl, s, { [eP.a3]: "text-lg/bold" === i }),
        children: [
            (0, c.jsx)(J.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: Q.intl.string(Q.t["/ARFVE"]),
            }),
            (0, c.jsx)("div", {
                className: eP.$R,
                children: d.map((e, t) =>
                    (function (e, t, s) {
                        let i,
                            [n, a] = 1 === (i = e.unitValue.toString()).length ? ["0", i[0]] : [i[0], i[1]];
                        return (0, c.jsxs)(c.Fragment, {
                            children: [
                                (0, c.jsxs)(
                                    "div",
                                    {
                                        className: eP.bh,
                                        children: [
                                            (0, c.jsxs)("div", {
                                                className: eP.kB,
                                                children: [
                                                    (0, c.jsx)("div", {
                                                        className: eP.B2,
                                                        children: (0, c.jsx)(J.E, {
                                                            variant: s,
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: eP.B2,
                                                        children: (0, c.jsx)(J.E, {
                                                            variant: s,
                                                            color: "text-strong",
                                                            children: a,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, c.jsx)(J.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-strong",
                                                children: (function (e) {
                                                    switch (e) {
                                                        case "days":
                                                            return Q.intl.string(Q.t.ixASa2);
                                                        case "hours":
                                                            return Q.intl.string(Q.t["8sNvNn"]);
                                                        case "minutes":
                                                            return Q.intl.string(Q.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return Q.intl.string(Q.t.JhaiLW);
                                                        default:
                                                            return "";
                                                    }
                                                })(e.unitType),
                                            }),
                                        ],
                                    },
                                    e.unitType,
                                ),
                                !t &&
                                    (0, c.jsx)(J.E, {
                                        className: eP.cV,
                                        variant: "text-lg/normal",
                                        color: "text-strong",
                                        children: ":",
                                    }),
                            ],
                        });
                    })(e, t === d.length - 1, i),
                ),
            }),
        ],
    });
};
var ey = s(473702),
    eD = s(778712),
    eM = s(97808),
    eO = s(609425),
    eL = s(660184),
    eU = s(854627),
    ek = s(427262),
    eG = s(938767);
function ew() {
    let e = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        t = (0, eO.A)(),
        { avatarSrc: s, avatarDecorationSrc: i, eventHandlers: n } = (0, eU.A)({ userId: e?.id, size: eD._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, ek.mG)(e);
    return (0, c.jsxs)("div", {
        className: eG.kL,
        children: [
            (0, c.jsx)("div", {
                className: eG.my,
                children: (0, c.jsx)(eM.eu, {
                    src: s,
                    avatarDecoration: i,
                    size: eD._3.SIZE_56,
                    "aria-label": a,
                    ...n,
                }),
            }),
            (0, c.jsx)("div", { className: eG.QC, children: (0, c.jsx)(eL.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var eB = s(707554),
    eH = s(628154);
let eF = function (e) {
    let { className: t, color: s = "text-strong", responsive: i = !0, variant: n = "nitro-lg", children: a } = e;
    return (0, c.jsx)(eB.F, {
        forceLevel: 1,
        children: (0, c.jsx)(K.D, { className: u()(eH.w, t, i && eH.n), variant: n, color: s, children: a }),
    });
};
var eV = s(508770),
    ez = s(815996),
    eW = s(557284),
    eY = s(744413),
    eX = s(478016),
    eK = s(318254),
    eJ = s(661531),
    eq = s(626031),
    eQ = s(197630);
s(232198);
var eZ = s(652215),
    e$ = s(957457);
function e0(e) {
    let { nRewardsGranted: t, referralRewardType: s, className: i } = e;
    return t < 1
        ? null
        : s === eQ.xb.ORBS
          ? (0, c.jsx)(e1, { nRewardsGranted: t, className: i })
          : s === eQ.xb.DISCOUNT
            ? (0, c.jsx)(e2, { nRewardsGranted: t, className: i })
            : null;
}
function e1(e) {
    let { nRewardsGranted: t, className: s } = e,
        i = 5e3 * t,
        [n, a] = o.useState(0);
    return (
        o.useEffect(() => {
            a(i);
        }, [i]),
        (0, c.jsxs)(es.B, {
            direction: "horizontal",
            align: "center",
            gap: 0,
            fullWidth: !1,
            className: s,
            children: [
                (0, c.jsxs)("div", {
                    className: e$.u,
                    "aria-label": String(i),
                    children: [
                        (0, c.jsx)(eK.C, { size: "xs", color: eJ.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                        (0, c.jsx)(eq.t, {
                            value: n,
                            onValueChange: eZ.tEg,
                            onValueReached: eZ.tEg,
                            targetTotalCounterTime: 800,
                            isRenderedWithoutLottieAnimation: !0,
                            textVariant: "text-sm/semibold",
                            textColor: "text-strong",
                            horizontalAlignment: "left",
                        }),
                    ],
                }),
                (0, c.jsx)(J.E, {
                    variant: "text-sm/medium",
                    color: "text-strong",
                    children: Q.intl.string(Q.t.UhguER),
                }),
            ],
        })
    );
}
function e2(e) {
    let { nRewardsGranted: t, className: s } = e;
    return (0, c.jsxs)(es.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        fullWidth: !1,
        className: s,
        "aria-label": Q.intl.formatToPlainString(Q.t["P//01n"], { discountPercent: 30, duration: t }),
        children: [
            (0, c.jsx)(eX.U, { size: "md", color: eJ.A.colors.ICON_FEEDBACK_POSITIVE }),
            (0, c.jsx)(J.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: Q.intl.format(Q.t["P//01n"], { discountPercent: 30, duration: t }),
            }),
        ],
    });
}
var e3 = s(303682),
    e6 = s(758836),
    e7 = s(558992);
function e8(e) {
    let { className: t } = e,
        {
            referralSentUsers: s,
            nReferralsSent: i,
            hasEligibleFriends: n,
            allSent: a,
            headingText: l,
            bodyText: r,
            referralStatus: o,
            isEligibleForIncentive: d,
            referralIncentiveRewardType: m,
            useAltReferralCardArt: x,
            shouldShowSpendOrbsCta: g,
        } = (0, eW.k)({ location: "PremiumNitroHomeReferralBannerTreatment" });
    return (0, c.jsxs)("div", {
        className: u()(e7.kL, t),
        children: [
            (0, c.jsx)("div", {
                className: e7.G3,
                children: (0, c.jsx)(eY.fx, {
                    nReferralsSent: i,
                    imageSize: 55,
                    backgroundClassName: e7.HP,
                    ringClassName: e7.pZ,
                    referralRewardType: m,
                    useAltReferralCardArt: d && x,
                }),
            }),
            (0, c.jsxs)("div", {
                className: u()(e7.IH, d && e7.zD),
                children: [
                    d &&
                        (0, c.jsx)("div", {
                            className: e7.aZ,
                            children: (0, c.jsx)(eV.E, { type: "beta", variant: "expressive" }),
                        }),
                    (0, c.jsxs)("div", {
                        className: e7.n4,
                        children: [
                            (0, c.jsx)(J.E, {
                                variant: d ? "text-md/bold" : "text-md/semibold",
                                color: "text-strong",
                                children: l,
                            }),
                            (0, c.jsx)(J.E, {
                                variant: d ? "text-sm/medium" : "text-md/medium",
                                color: "text-subtle",
                                children: r,
                            }),
                        ],
                    }),
                    d
                        ? (0, c.jsxs)("div", {
                              className: e7.Wp,
                              children: [
                                  (0, c.jsx)(eY.ZP, { referralSentUsers: s }),
                                  (0, c.jsx)(e0, { nRewardsGranted: o.numRewardGranted, referralRewardType: m }),
                              ],
                          })
                        : (0, c.jsx)(eY.ZP, { referralSentUsers: s, className: e7.t7 }),
                ],
            }),
            (0, c.jsx)(en.$, {
                variant: "primary",
                disabled: !g && (!1 === n || !0 === a),
                text: g ? Q.intl.string(Q.t.iw5Ccc) : Q.intl.string(Q.t.Lm2nFc),
                onClick: () =>
                    g
                        ? (0, ez.Cz)({
                              tab: e6.G2.ORBS,
                              analyticsLocations: [],
                              analyticsSource: A.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR,
                          })
                        : (0, eY.jM)({
                              startingScreen: e3.SelectFriendsModalScreens.SELECT_FRIENDS,
                              analyticsLocations: [],
                          }),
            }),
        ],
    });
}
var e5 = s(702841),
    e9 = s(676279),
    e4 = s(202091),
    te = s(717421),
    tt = s(396583),
    ts = (((i = {}).SINE = "sine"), (i.COSINE = "cosine"), i),
    ti = (((n = {}).UP = "up"), (n.DOWN = "down"), n);
let tn = (e) => {
    let {
            blurAnimationData: t,
            scaleAnimationData: s,
            yAxisAnimationData: i,
            parallaxAnimationData: n,
            animateXAxisWiggle: a = !1,
            isMotionReduced: l = !1,
            animationSpeedScale: r = 1,
            children: d,
        } = e,
        u = (0, te.z)(
            null != i ? { from: { y: 0 }, to: { y: 1 }, config: { duration: i.duration * r }, loop: !0 } : { y: 0 },
        ),
        m = i?.path === "sine" ? Math.sin : Math.cos,
        [x, g] = (0, o.useState)(1),
        p = (0, te.z)(
            null != s
                ? {
                      from: { scale: x > 0 ? s.startScale : s.endScale },
                      to: { scale: x > 0 ? s.endScale : s.startScale },
                      config: { duration: s.duration * r },
                      onRest: () => g((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [f, h] = (0, o.useState)(1),
        N = (0, te.z)(
            null != t
                ? {
                      from: { blur: f > 0 ? t.startBlurRadius : t.endBlurRadius },
                      to: { blur: f > 0 ? t.endBlurRadius : t.startBlurRadius },
                      config: { duration: t.duration * r },
                      onRest: () => h((e) => -1 * e),
                  }
                : { blur: 0 },
        ),
        A = (0, o.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * r), [r]),
        [j, E] = (0, o.useState)(0),
        [T, b] = (0, o.useState)(1),
        C = (0, te.z)({ xOffset: j, config: { tension: 10, friction: 10, duration: A } });
    return ((0, tt.A)(() => {
        (E(T * (0.5 * Math.random() * 5 + 2.5)), b((e) => -1 * e));
    }, A),
    l)
        ? d
        : (0, c.jsx)(e4.animated.div, {
              style: {
                  transform: u.y?.to((e) => {
                      if (null == i) return "translateY(0px)";
                      let t = m(e * Math.PI * 2) * i.range,
                          s = 0;
                      if (null != n) {
                          let e = n.range * (1 - n.containerVisibilityPercentage);
                          s = "up" === n.pathDirection ? -e : e;
                      }
                      return `translateY(${t + s}px)`;
                  }),
                  translateX: a ? C.xOffset.to((e) => `${e}px`) : 0,
                  scale: p.scale,
                  filter: N.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != n && n.changeOpacity ? n.containerVisibilityPercentage : 1,
              },
              children: d,
          });
};
var ta = s(382168);
let tl = function (e) {
    let {
        isMotionReduced: t,
        containerVisibilityPercentage: s,
        boltContainerClassName: i,
        carContainerClassName: n,
        hammerContainerClassName: a,
        keyContainerClassName: l,
        starContainerClassName: r,
        boltAssetClassName: o,
        carAssetClassName: d,
        hammerAssetClassName: m,
        keyAssetClassName: x,
        starAssetClassName: g,
        animationSpeedScale: p = 1,
        blurScale: f = 1,
    } = e;
    return (0, c.jsxs)(c.Fragment, {
        children: [
            null != i &&
                (0, c.jsx)("div", {
                    className: u()(ta.nJ, i),
                    children: (0, c.jsx)(tn, {
                        blurAnimationData: { startBlurRadius: 10 * f, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: ts.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: ti.UP,
                                      range: 125,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: p,
                        children: (0, c.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/ae5638c61a572593c6b03b92e80d3846e0cfe7a9e893f3faf05aecd670a4017d.png",
                            className: o,
                            alt: "",
                        }),
                    }),
                }),
            null != n &&
                (0, c.jsx)("div", {
                    className: u()(ta.IN, n),
                    children: (0, c.jsx)(tn, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: ts.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: ti.DOWN,
                                      range: 50,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: p,
                        children: (0, c.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/6cb761e3e97838c7927f738882b67bd825d5eeed89633e0af126bda5f9d4e71d.png",
                            className: d,
                            alt: "",
                        }),
                    }),
                }),
            null != a &&
                (0, c.jsx)("div", {
                    className: u()(ta.Gj, a),
                    children: (0, c.jsx)(tn, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: ts.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: ti.DOWN,
                                      range: 120,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: p,
                        children: (0, c.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/b39a5f2755e6da320fce10c8a4a10bdebef9926b671256b1681976198c5656d4.png",
                            className: m,
                            alt: "",
                        }),
                    }),
                }),
            null != l &&
                (0, c.jsx)("div", {
                    className: u()(ta.FV, l),
                    children: (0, c.jsx)(tn, {
                        blurAnimationData: { startBlurRadius: 5 * f, endBlurRadius: 0, duration: 4e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: ts.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: ti.UP,
                                      range: 200,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: p,
                        children: (0, c.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/7c23a220a6f31150648930e2ebb435aa7cc89ad57895275bed6f1900869f4de0.png",
                            className: x,
                            alt: "",
                        }),
                    }),
                }),
            null != r &&
                (0, c.jsx)("div", {
                    className: u()(ta.E1, r),
                    children: (0, c.jsx)(tn, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * f, duration: 3e3 },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: ts.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: ti.UP,
                                      range: 50,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: p,
                        children: (0, c.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/0b1a59149e615fc048010a3c7f109f8695c8b2004712e99417fcb0dec43fcb44.png",
                            className: g,
                            alt: "",
                        }),
                    }),
                }),
        ],
    });
};
var tr = s(607470);
let tc =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    to = function (e) {
        let {
            supportHEVCAlpha: t,
            isMotionReduced: s,
            containerVisibilityPercentage: i,
            containerClassName: n,
            assetClassName: a,
            animationSpeedScale: l = 1,
        } = e;
        return s
            ? (0, c.jsx)("div", {
                  className: n,
                  children: (0, c.jsx)("img", {
                      src: "https://cdn.discordapp.com/assets/content/46e72137fc3631c8024b00c33dbab5cf45740d4ab35f77bd96517830e727d0c5.png",
                      alt: "",
                      className: a,
                  }),
              })
            : (0, c.jsx)("div", {
                  className: n,
                  children: (0, c.jsx)(tn, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                      yAxisAnimationData: { range: 20, duration: 4e3, path: ts.SINE },
                      parallaxAnimationData: {
                          pathDirection: ti.UP,
                          range: 200,
                          containerVisibilityPercentage: i,
                          changeOpacity: !1,
                      },
                      animateXAxisWiggle: !0,
                      animationSpeedScale: l,
                      children: t
                          ? (0, c.jsx)("img", {
                                src: "https://cdn.discordapp.com/assets/content/082012af2fe8bfa66ce6630e1549a146738936af43a8e60c780f9976fa333d93.png",
                                alt: "",
                                className: a,
                            })
                          : (0, c.jsx)(
                                tr.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: a,
                                    children: (0, c.jsx)("source", { src: tc }),
                                },
                                tc,
                            ),
                  }),
              });
    },
    td = function (e) {
        let {
                containerVisibilityPercentage: t,
                flyingWumpusContainerClassName: s,
                flyingWumpusAssetClassName: i,
                boltContainerClassName: n,
                carContainerClassName: a,
                hammerContainerClassName: l,
                keyContainerClassName: r,
                starContainerClassName: o,
                boltAssetClassName: d,
                carAssetClassName: u,
                hammerAssetClassName: m,
                keyAssetClassName: x,
                starAssetClassName: g,
                animationSpeedScale: p = 1,
            } = e,
            f = (0, e5.bG)([el.Ay], () => el.Ay.useReducedMotion),
            h = (0, e9.TM)();
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(to, {
                    supportHEVCAlpha: h,
                    isMotionReduced: f,
                    containerVisibilityPercentage: t,
                    containerClassName: s,
                    assetClassName: i,
                    animationSpeedScale: p,
                }),
                (0, c.jsx)(tl, {
                    isMotionReduced: f,
                    containerVisibilityPercentage: t,
                    boltContainerClassName: n,
                    carContainerClassName: a,
                    hammerContainerClassName: l,
                    keyContainerClassName: r,
                    starContainerClassName: o,
                    boltAssetClassName: d,
                    carAssetClassName: u,
                    hammerAssetClassName: m,
                    keyAssetClassName: x,
                    starAssetClassName: g,
                    animationSpeedScale: p,
                }),
            ],
        });
    };
var tu = s(942663);
let tm = function (e) {
    let { containerVisibilityPercentage: t, compact: s } = e;
    return (0, c.jsx)(td, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: u()(tu.wG, s && tu.Vx),
        flyingWumpusAssetClassName: u()(tu.lu, s && tu.ov),
        boltContainerClassName: u()(tu.nJ, s && tu.Wc),
        hammerContainerClassName: u()(tu.Gj, s && tu.XA),
        keyContainerClassName: u()(tu.FV, s && tu.oZ),
        starContainerClassName: u()(tu.E1, s && tu.LN),
        boltAssetClassName: u()(tu.j7, s && tu.QN),
        hammerAssetClassName: u()(tu.Wv, s && tu.B9),
        keyAssetClassName: u()(tu.rs, s && tu.I1),
        starAssetClassName: u()(tu.OY, s && tu.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var tx = (((a = {}).MORNING = "morning"), (a.AFTERNOON = "afternoon"), (a.EVENING = "evening"), a),
    tg = s(454273);
let tp = function (e) {
    let t,
        s,
        {
            className: i,
            headingTop: n,
            showPill: a,
            buttonVisibilityRef: l,
            shouldShowReferralProgressBar: r,
            marketingBanner: o,
            heroButtons: d,
        } = e,
        { visibilityPercentageRef: m, visibilityPercentage: g } = ej(!(0, x.bG)([el.Ay], () => el.Ay.useReducedMotion)),
        p =
            ((t = { [tx.MORNING]: Q.t["Wvc/I+"], [tx.AFTERNOON]: Q.t["d+0STx"], [tx.EVENING]: Q.t.CqsxKI }),
            Q.intl.string(
                t[
                    (s = new Date().getHours()) >= 5 && s < 12
                        ? tx.MORNING
                        : s >= 12 && s < 17
                          ? tx.AFTERNOON
                          : tx.EVENING
                ],
            )),
        f = o ?? (r ? (0, c.jsx)(e8, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tg.kL, tg.Eg, i),
        ref: l,
        children: (0, c.jsxs)("div", {
            className: u()(tg.W2, tg.HQ),
            ref: m,
            children: [
                (0, c.jsxs)(es.B, {
                    align: "start",
                    gap: 32,
                    className: tg.ZU,
                    children: [
                        a && n,
                        (0, c.jsxs)(es.B, {
                            align: "start",
                            gap: "lg",
                            children: [
                                (0, c.jsxs)(es.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, c.jsx)(eF, {
                                            className: tg.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            variant: "nitro-md",
                                            children: p,
                                        }),
                                        (0, c.jsx)(ew, {}),
                                    ],
                                }),
                                d,
                            ],
                        }),
                        f,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: tg.y3,
                    children: (0, c.jsx)(tm, { containerVisibilityPercentage: g, compact: null == f }),
                }),
            ],
        }),
    });
};
var tf = s(549926);
let th = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(td, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: tf.wG,
        flyingWumpusAssetClassName: tf.lu,
        boltContainerClassName: tf.nJ,
        hammerContainerClassName: tf.Gj,
        keyContainerClassName: tf.FV,
        starContainerClassName: tf.E1,
        boltAssetClassName: tf.j7,
        hammerAssetClassName: tf.Wv,
        keyAssetClassName: tf.rs,
        starAssetClassName: tf.OY,
        animationSpeedScale: 1 / 0.7,
    });
};
var tN = s(499126);
let tA = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(td, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: tN.wG,
        flyingWumpusAssetClassName: tN.lu,
        boltContainerClassName: tN.nJ,
        hammerContainerClassName: tN.Gj,
        keyContainerClassName: tN.FV,
        starContainerClassName: tN.E1,
        boltAssetClassName: tN.j7,
        hammerAssetClassName: tN.Wv,
        keyAssetClassName: tN.rs,
        starAssetClassName: tN.OY,
        animationSpeedScale: 1 / 0.7,
    });
};
var tj = s(202541);
function tE(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, ep.Zb)(t),
        { visibilityPercentageRef: a, visibilityPercentage: l } = ej(!(0, x.bG)([el.Ay], () => el.Ay.useReducedMotion));
    return (0, c.jsx)("div", {
        className: u()(tg.kL, s),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: tg.Gs,
            ref: a,
            children: [
                (0, c.jsxs)(es.B, {
                    align: "start",
                    gap: 24,
                    className: tg.E2,
                    children: [
                        (0, c.jsxs)(es.B, {
                            align: "start",
                            gap: 12,
                            children: [
                                (0, c.jsx)(eT, { text: Q.intl.string(Q.t.yhldRB) }),
                                (0, c.jsx)(eF, { children: Q.intl.format(Q.t.FwjP6W, { days: n }) }),
                                (0, c.jsx)("div", {
                                    className: tg.X8,
                                    children: (0, c.jsx)(J.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: Q.intl.string(Q.t.Jf8KrT),
                                    }),
                                }),
                            ],
                        }),
                        (0, c.jsxs)(es.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            className: tg.oF,
                            children: [
                                (0, c.jsx)(eR.A, {
                                    size: "md",
                                    buttonTextOverride: Q.intl.string(Q.t["2+luBl"]),
                                    iconOverride: ei.t,
                                    variantOverride: "expressive",
                                }),
                                (0, c.jsx)(en.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: Q.intl.string(Q.t.Af7ye6),
                                    onClick: () => (0, ed.openUserSettings)(eo.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, c.jsx)("div", { className: tg.Hk, children: (0, c.jsx)(tA, { containerVisibilityPercentage: l }) }),
            ],
        }),
    });
}
function tT(e) {
    let {
            className: t,
            buttonVisibilityRef: i,
            userDiscountOffer: n,
            discountedPrice: a,
            premiumSubscription: l,
            analyticsLocations: r,
            headingTop: o,
            showPill: d,
            shouldShowReferralProgressBar: m,
            marketingBanner: g,
        } = e,
        { visibilityPercentageRef: p, visibilityPercentage: f } = ej(!(0, x.bG)([el.Ay], () => el.Ay.useReducedMotion)),
        h = g ?? (m ? (0, c.jsx)(e8, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tg.kL, tg.Eg, t),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: u()(tg.W2, tg.HQ),
            ref: p,
            children: [
                (0, c.jsxs)(es.B, {
                    align: "start",
                    gap: 32,
                    className: u()(tg.ZU, tg.GW),
                    children: [
                        d && o,
                        null != n.expiresAt &&
                            (0, c.jsx)(eS, { expiresAt: n.expiresAt.toISOString(), digitTextVariant: "text-lg/bold" }),
                        (0, c.jsxs)(es.B, {
                            align: "start",
                            gap: 16,
                            children: [
                                (0, c.jsx)(eF, {
                                    children: Q.intl.format(Q.t["3yZP0G"], { percent: n.discount.amount }),
                                }),
                                null != a &&
                                    (0, c.jsx)(J.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: Q.intl.format(Q.t["3Q4wCy"], {
                                            discountedPrice: a,
                                            billingPeriod: (0, ex.Ke)(n.discount.intervalType),
                                            numMonths: n.discount.intervalCount,
                                        }),
                                    }),
                            ],
                        }),
                        (0, c.jsxs)(es.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            wrap: !0,
                            children: [
                                (0, c.jsx)(en.$, {
                                    variant: "expressive",
                                    icon: ei.t,
                                    size: "md",
                                    text: Q.intl.string(Q.t.zrCzVB),
                                    onClick: () => {
                                        var e;
                                        return (
                                            (e = ey.g.CONFIRM_DISCOUNT),
                                            void (0, et.openModalLazy)(async () => {
                                                let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                    await Promise.all([
                                                        s.e("489361"),
                                                        s.e("227853"),
                                                        s.e("222969"),
                                                        s.e("515363"),
                                                        s.e("128804"),
                                                        s.e("71151"),
                                                        s.e("286615"),
                                                        s.e("311541"),
                                                        s.e("472847"),
                                                        s.e("870088"),
                                                        s.e("300641"),
                                                        s.e("747802"),
                                                        s.e("966366"),
                                                        s.e("338332"),
                                                        s.e("153302"),
                                                        s.e("758053"),
                                                        s.e("88683"),
                                                        s.e("983513"),
                                                        s.e("216806"),
                                                        s.e("310734"),
                                                        s.e("348567"),
                                                        s.e("452075"),
                                                        s.e("900277"),
                                                        s.e("127962"),
                                                        s.e("364827"),
                                                        s.e("907167"),
                                                        s.e("952372"),
                                                        s.e("861060"),
                                                        s.e("56366"),
                                                        s.e("639161"),
                                                        s.e("910486"),
                                                        s.e("678157"),
                                                        s.e("147134"),
                                                        s.e("40291"),
                                                        s.e("544571"),
                                                        s.e("729963"),
                                                        s.e("538513"),
                                                        s.e("102328"),
                                                        s.e("122990"),
                                                        s.e("50097"),
                                                        s.e("594161"),
                                                        s.e("435432"),
                                                        s.e("80347"),
                                                        s.e("680166"),
                                                    ]).then(s.bind(s, 293061));
                                                return (s) =>
                                                    (0, c.jsx)(t, {
                                                        ...s,
                                                        analyticsLocations: r,
                                                        initialStep: e,
                                                        premiumSubscription: l,
                                                    });
                                            })
                                        );
                                    },
                                }),
                                (0, c.jsx)(q.A, {
                                    variant: "secondary",
                                    size: "md",
                                    buttonTextOverride: Q.intl.string(Q.t["3KomGa"]),
                                }),
                            ],
                        }),
                        h,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: u()(tg.y3, tg.Xx),
                    children: (0, c.jsx)(th, { containerVisibilityPercentage: f }),
                }),
            ],
        }),
    });
}
function tb(e) {
    let { className: t, isInReverseTrial: s, shouldShowReferralProgressBar: i } = e,
        {
            headingTop: n,
            showPill: a,
            shouldShowChurnVariant: l,
            premiumSubscription: r,
            userDiscountOffer: o,
            discountedPrice: d,
            buttonVisibilityRef: u,
        } = tR(),
        { analyticsLocations: m } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        x = (0, eN.c)(ee.C.MARKETING_PAGE_BANNER),
        g = null != r && r.status === eZ.Dmq.CANCELED,
        p = null;
    null != x &&
        "marketingPageBanner" === x.properties.properties.oneofKind &&
        (p = (0, c.jsx)(eb.x, {
            componentId: x.id,
            promotionId: x.promotionId,
            promotionBannerMarketingComponentFields: x.properties.properties.marketingPageBanner,
        }));
    let f = (0, eh.V)(),
        h = (0, ef.O)(),
        N = (0, Y.U9)(h, tj.pe.TIER_2) ? tj.pe.TIER_2 : void 0,
        E = null != r && r.status !== eZ.Dmq.ACCOUNT_HOLD && r.hasAnyPremiumNitro,
        T = (0, ec.A)(),
        b = T.isFractionalPremiumActive && !E && null == p && !l;
    if (s) return (0, c.jsx)(tE, { fpEndsAt: T.currentEntitlementEndsAt, className: t, buttonVisibilityRef: u });
    if (!g) {
        let e = b
            ? (0, c.jsxs)("div", {
                  className: tg.UJ,
                  children: [
                      (0, c.jsx)(eR.A, { size: "md", subscriptionTier: f?.subscriptionTrial?.skuId ?? N }),
                      (0, c.jsx)(q.A, {
                          variant: "secondary",
                          size: "md",
                          buttonTextOverride: Q.intl.string(Q.t["3KomGa"]),
                      }),
                  ],
              })
            : null;
        return (0, c.jsx)(tp, {
            className: t,
            headingTop: n,
            showPill: a,
            buttonVisibilityRef: u,
            shouldShowReferralProgressBar: i,
            marketingBanner: p,
            heroButtons: e,
        });
    }
    return l && null != o && null != r
        ? (0, c.jsx)(tT, {
              className: t,
              buttonVisibilityRef: u,
              userDiscountOffer: o,
              discountedPrice: d,
              premiumSubscription: r,
              analyticsLocations: m,
              headingTop: n,
              showPill: a,
              shouldShowReferralProgressBar: i,
              marketingBanner: p,
          })
        : (0, c.jsx)(tp, {
              className: t,
              headingTop: n,
              showPill: a,
              buttonVisibilityRef: u,
              shouldShowReferralProgressBar: i,
              marketingBanner: p,
          });
}
let [tC, tR] = (0, eu.A)(),
    tI = function (e) {
        let { className: t, buttonVisibilityRef: s, userDiscountOffer: i, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, ep.ds)(),
            r = (0, eg.QQ)(),
            o = (0, x.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            d = null != o && o.status === eZ.Dmq.CANCELED && null != i,
            u = r && !d,
            m = Q.intl.string(Q.t.qYKftX),
            g = (0, eC.m)(),
            { fractionalState: p, endsAt: f } = (0, ec.A)(),
            h = (0, er.Ay)(f, er.yE.CREDITS_ENDS_IN),
            N = null;
        if (p === tj.xc.NONE || l) N = (0, c.jsx)(eT, { text: m });
        else {
            u = !0;
            let e = Q.intl.format(Q.t["yR+oDD"], {
                helpCenterLink: em.A.getArticleURL(eZ.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            N = (0, c.jsx)(ea.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: tg.YL,
                position: "right",
                children: (e) =>
                    (0, c.jsx)("div", {
                        ...e,
                        className: tg.V_,
                        children: (0, c.jsx)("div", { className: tg.eL, children: (0, c.jsx)(eT, { text: h }) }),
                    }),
            });
        }
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsx)(tC.Provider, {
                value: {
                    headingTop: N,
                    showPill: u,
                    shouldShowChurnVariant: d,
                    premiumSubscription: o,
                    userDiscountOffer: i,
                    discountedPrice: n,
                    buttonVisibilityRef: s,
                },
                children: (0, c.jsx)(tb, { className: t, isInReverseTrial: l, shouldShowReferralProgressBar: g }),
            }),
        });
    };
var t_ = s(820284),
    tv = s(742589),
    tP = s(392943),
    tS = s(285373),
    ty = s(603202),
    tD = s(673992);
let tM = function () {
    return (0, c.jsx)(t_.A, {
        section: eZ.JJy.NAVIGATION,
        children: (0, c.jsx)(tv.A, {
            className: u()(ty.TQ, tD.C$),
            transparent: !0,
            role: "navigation",
            children: (0, c.jsxs)("div", {
                className: ty.Wc,
                children: [
                    (0, c.jsxs)("div", {
                        className: tD.wk,
                        children: [
                            (0, c.jsx)(ei.t, { colorClass: tD.tr }),
                            (0, c.jsx)("span", {
                                role: "img",
                                "aria-label": Q.intl.string(Q.t.Ipxkog),
                                className: tD.Ss,
                                children: (0, c.jsx)(tP.A, { color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: ty.MQ,
                        children: [
                            (0, c.jsx)(tS.l, { size: "sm", location: A.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB }),
                            (0, c.jsx)(q.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var tO = s(325499),
    tL = s(562708),
    tU = s(885574),
    tk = s(43990),
    tG = s(993077),
    tw = s(139286),
    tB = s(872725),
    tH = s(920050),
    tF = s(51965),
    tV = s(375776),
    tz = s(727811),
    tW = s(222652),
    tY = s(553875),
    tX = s(934353);
function tK(e) {
    let { openRewardModal: t } = e,
        s = (0, tW.z)();
    if (s.kind === tW.N.SUBSCRIBE)
        return (0, c.jsxs)("div", {
            className: tX.R$,
            children: [
                (0, c.jsx)(eR.A, {
                    defaultTextOverride: s.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: tj.pe.TIER_2,
                }),
                (0, c.jsx)(en.$, { variant: "secondary", size: "md", text: Q.intl.string(Q.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        s.claimStatus === tz.P.CLAIMED
            ? { text: Q.intl.string(tY.default.Plwzgf) }
            : { text: Q.intl.string(Q.t.hvVgAZ) };
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: tX.R$,
                children: [
                    (0, c.jsx)(tF.A, {
                        variant: "overlay-primary",
                        size: "md",
                        text: s.text,
                        icon: s.icon,
                        iconPosition: s.iconPosition,
                        onClick: s.onClick,
                        disabled: s.disabled,
                        loading: s.loading,
                    }),
                    (0, c.jsx)(en.$, {
                        variant: "secondary",
                        size: "md",
                        ...i,
                        onClick: t,
                        disabled: s.requestInProgress,
                    }),
                ],
            }),
            s.claimStatus === tz.P.CLAIM_IN_PROGRESS &&
                (0, c.jsxs)("div", {
                    className: tX.ed,
                    children: [
                        (0, c.jsx)(tU.CircleInformationIcon, { size: "xs", color: "var(--text-subtle)" }),
                        (0, c.jsx)(J.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: Q.intl.string(tY.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function tJ(e) {
    let { glowing: t = !1 } = e;
    (0, tw.A)({
        type: tL.ImpressionTypes.VIEW,
        name: tL.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: tH.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: i } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_HERO_CARD),
        n = o.useCallback(() => {
            (0, et.openModalLazy)(async () => {
                let { default: e } = await Promise.all([s.e("878140"), s.e("813088")]).then(s.bind(s, 347171));
                return (t) => (0, c.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, c.jsx)(tk.N, {
        theme: eZ.NJ8.DARK,
        children: (e) =>
            (0, c.jsx)(j.f5, {
                value: i,
                children: (0, c.jsx)("div", {
                    className: u()(e, tX.kL),
                    children: (0, c.jsx)(tB.A, {
                        cardType: tG.s.CUSTOM,
                        cardClassName: tX.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, c.jsxs)("div", {
                            className: tX.XF,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: tX.j,
                                    children: [
                                        (0, c.jsx)("div", { className: tX._g }),
                                        (0, c.jsx)("div", { className: tX.$h }),
                                        (0, c.jsx)("div", { className: tX.Rv }),
                                        (0, c.jsx)("div", { className: tX.Lw }),
                                        (0, c.jsx)("div", { className: tX.mR }),
                                    ],
                                }),
                                (0, c.jsxs)("div", {
                                    className: tX.Qs,
                                    children: [
                                        (0, c.jsx)("img", {
                                            className: tX.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, c.jsx)(K.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: tX.DD,
                                            children: Q.intl.string(tY.default.RGT513),
                                        }),
                                        (0, c.jsx)(J.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: tX.h_,
                                            children: Q.intl.string(tY.default["+pTnsf"]),
                                        }),
                                        (0, c.jsx)(tK, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var tq = s(254202),
    tQ = s(112992);
function tZ(e) {
    let { className: t, containerClassName: s, glowing: i } = e,
        n = (0, tW.z)(),
        a = { isThirdPartyPerk: !0, subscriptionRequired: !0 },
        l =
            n.kind === tW.N.SUBSCRIBE
                ? a
                : {
                      ...a,
                      ctaText: n.text,
                      ctaIcon: n.icon,
                      ctaIconPosition: n.iconPosition,
                      ctaDisabled: n.disabled,
                      ctaLoading: n.loading,
                      onCtaClick: n.onClick,
                  };
    return (0, c.jsx)(tq.S, {
        id: tH.XBOX_PREMIUM_PERK_CARD_ID,
        title: Q.intl.string(tY.default.UVL9tD),
        description: Q.intl.string(tY.default["I+IXr0"]),
        ...l,
        className: t,
        containerClassName: s,
        glowing: i,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, c.jsx)("img", { src: tQ.A, alt: "Xbox Game Pass" }),
        blurTint: "#054B16",
        analyticsOptions: { thirdPartyPartner: "xbox" },
    });
}
function t$(e) {
    let { analyticsLocations: t } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, c.jsx)(j.f5, { value: t, children: (0, c.jsx)(tZ, { ...e }) });
}
var t0 = s(744082),
    t1 = s(700556),
    t2 = s(821874);
function t3(e) {
    let { id: t, sectionClassName: s, heading: i, beforeGrid: n, grid: a, gridClassName: l } = e,
        r = t2.Ui;
    return (0, c.jsxs)("div", {
        id: t,
        className: s,
        children: [
            i,
            n,
            null != a ? (0, c.jsx)("div", { className: u()(r, null != n && t1.Jx, l), children: a }) : null,
        ],
    });
}
var t6 = s(517846),
    t7 = s(509434),
    t8 = s(695366),
    t5 = s(27620),
    t9 = s(44724),
    t4 = s(371794),
    se = s(789861),
    st = s(592909),
    ss = s(398523),
    si = s(881373),
    sn = s(721157),
    sa = s(555393),
    sl = s(325652),
    sr = s(852218),
    sc = s(239016),
    so = s(280761),
    sd = s(881296),
    su = s(945810);
let sm = (0, su.mj)({
    kind: "user",
    name: "2026-09-rust-3p",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var sx = s(612413);
let sg = new Date(Date.UTC(2026, 10, 5));
var sp = s(188275),
    sf = s(310235),
    sh = s(334551),
    sN = s(287388),
    sA = s(5717),
    sj = s(762359);
let sE =
        "https://cdn.discordapp.com/assets/content/74dd725dde373bfdbced9606d5201ed2c555fc895f4da644a8de314de6906be3.webp",
    sT =
        "https://cdn.discordapp.com/assets/content/40a956d1f02220ee7fe04579320500571f21c3195af2f11afea01601f1ba28c9.svg";
var sb = s(679502),
    sC = s(762493);
let sR = "xgpp";
function sI(e) {
    let { glowingSectionId: t, glowingPerkId: s } = e,
        i = (0, tO.b)("premium_subscriber_home_rewards");
    (0, t0.A)(tj.tv);
    let {
            callOfDutyCard: n,
            expiredCallOfDutyCard: a,
            logitechCard: l,
            rustCard: r,
            steelseriesCard: d,
            youtubeCard: m,
            riotCampaignCard: x,
        } = (function () {
            let { analyticsLocations: e } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
                t = (0, so.U)(),
                s = (0, st.A0)({ location: "useHardwarePartnerPerkCards" }),
                i = (0, st.hd)({ location: "useHardwarePartnerPerkCards" }),
                n = (0, si.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
                a = ss.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
                l = (0, sx.mh)({ location: "useThirdPartyPartnerPerkCards" }),
                r = (function (e) {
                    let { location: t } = e,
                        { enabled: s } = sm.useConfig({ location: t });
                    return s;
                })({ location: "useThirdPartyPartnerPerkCards" }),
                d = null === (0, sa.N)(),
                { currentDate: u, nDaysInMonth: m } = (0, o.useMemo)(() => {
                    let e = new Date();
                    return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
                }, []);
            return (0, o.useMemo)(() => {
                let o = s
                        ? {
                              id: tH.CALL_OF_DUTY_3PP_CARD_ID,
                              title: Q.intl.string(sf.default.F0b4Z8),
                              description: Q.intl.formatToPlainString(sf.default["hworR+"], {
                                  validDates: (0, se.a1)(),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              pillText: Q.intl.formatToPlainString(sf.default.g7iyvR, { date: (0, se.mh)() }),
                              caption: (0, c.jsx)("img", { src: sT, alt: "Call of Duty: MW4" }),
                              backgroundAssetUrl: sE,
                              ctaText: Q.intl.string(sf.default.fcopjf),
                              onCtaClick: () =>
                                  (0, sc.P)({
                                      partnerIds: [sr.Bt],
                                      title: Q.intl.string(sf.default.YJsqDS),
                                      subtitle: Q.intl.format(sf.default.ieA3V0, {
                                          termsUrl:
                                              "https://support.discord.com/hc/en-us/articles/39188406147479-Nitro-Rewards",
                                      }),
                                      modalTeaser: {
                                          title: Q.intl.string(sf.default.Dkm10r),
                                          body: Q.intl.string(sf.default.LHAkT9),
                                      },
                                      analyticsLocations: e,
                                  }),
                              analyticsOptions: { thirdPartyPartner: sr.Bt },
                              ctaDisabled: d,
                              ctaLoading: d,
                          }
                        : null,
                    x = i
                        ? {
                              id: tH.CALL_OF_DUTY_3PP_EXPIRED_CARD_ID,
                              title: Q.intl.string(sf.default["IcD/7p"]),
                              description: Q.intl.formatToPlainString(sf.default.hausFi, { date: (0, se.wT)() }),
                              isThirdPartyPerk: !0,
                              phase: sl.L.EXPIRED,
                              pillText: Q.intl.string(sf.default.fxF0Jz),
                              caption: (0, c.jsx)("img", { src: sT, alt: "Call of Duty: MW4" }),
                              backgroundAssetUrl: sE,
                              analyticsOptions: { thirdPartyPartner: sr.Bt },
                          }
                        : null,
                    g = n
                        ? {
                              id: tH.LOGITECH_3PP_CARD_ID,
                              title: Q.intl.string(sh.default.OlObRa),
                              description: Q.intl.format(sh.default.ZGOJ8R, {
                                  discountPercent: si.aW,
                                  termsUrl: em.A.getArticleURL(eZ.MVz.LOGITECH_PROMOTION),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              progress: u.getDate() / m,
                              ctaText: Q.intl.string(Q.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, sc.P)({
                                      partnerIds: [sr.XY],
                                      title: Q.intl.string(sh.default["2I7nK+"]),
                                      subtitle: Q.intl.format(sh.default.W8jOD0, {
                                          termsUrl: em.A.getArticleURL(eZ.MVz.LOGITECH_PROMOTION),
                                      }),
                                      analyticsLocations: e,
                                  }),
                              blurTint: "#2E213D",
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                              caption: (0, c.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                                  alt: "Logitech",
                              }),
                              analyticsOptions: { thirdPartyPartner: sr.XY },
                              ctaDisabled: d,
                              ctaLoading: d,
                          }
                        : null,
                    p = a
                        ? {
                              id: tH.RECURRING_3P_PROMOTIONS_CARD_ID,
                              title: Q.intl.string(Q.t.m7PucM),
                              description: Q.intl.format(Q.t["1Zw6xL"], {}),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              caption: (0, c.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                              progress: u.getDate() / m,
                              ctaText: Q.intl.string(Q.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, sc.P)({
                                      partnerIds: [sr.KS],
                                      title: Q.intl.string(Q.t["7ioAjs"]),
                                      subtitle: Q.intl.format(Q.t.LOYRxB, {
                                          helpCenterLink: em.A.getArticleURL(eZ.MVz.RECURRING_PROMOTION),
                                      }),
                                      analyticsLocations: e,
                                  }),
                              blurTint: "#2E213D",
                              analyticsOptions: { thirdPartyPartner: sr.KS },
                              ctaDisabled: d,
                              ctaLoading: d,
                          }
                        : null,
                    f = r
                        ? {
                              id: tH.RUST_3PP_CARD_ID,
                              title: Q.intl.string(sA.default.gQ1ctg),
                              description: Q.intl.format(sA.default.p7LH43, {
                                  endDate: new Intl.DateTimeFormat(Q.intl.currentLocale, {
                                      day: "numeric",
                                      month: "short",
                                      timeZone: "UTC",
                                  }).format(sg),
                                  termsUrl: em.A.getArticleURL(eZ.MVz.RUST_PROMOTION),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              pillText: Q.intl.string(Q.t.y2b7CA),
                              caption: (0, c.jsx)("img", {
                                  src: (0, t4.YE)(sp.IG, "1499479228243251242", 128),
                                  alt: "Rust",
                              }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/b67b65e666d1350c52ff2abab5ac4eb205fa6545f63665aef16beeaa0efef060.webp",
                              blurTint: "#2E213D",
                              ctaText: Q.intl.string(sA.default.NmBRGV),
                              ctaIcon: t7.I,
                              ctaIconPosition: "end",
                              onCtaClick: () => (0, t9.default)({ applicationId: sp.IG }),
                              analyticsOptions: { thirdPartyPartner: "rust" },
                              ctaDisabled: d,
                              ctaLoading: d,
                          }
                        : null;
                return {
                    callOfDutyCard: o,
                    expiredCallOfDutyCard: x,
                    logitechCard: g,
                    rustCard: f,
                    steelseriesCard: p,
                    youtubeCard: l
                        ? {
                              id: tH.YOUTUBE_3PP_CARD_ID,
                              title: Q.intl.string(sj.default["BdIVB+"]),
                              description: Q.intl.format(sj.default["3jY5i3"], {
                                  helpCenterUrl: em.A.getArticleURL(eZ.MVz.YOUTUBE_PROMOTION),
                              }),
                              isThirdPartyPerk: !0,
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/e07fd53d33f374f567964ff5b7843f09bc6943288891cfed6e573df04ba9741c.webp",
                              blurTint: "#18181C",
                              caption: (0, c.jsx)("img", { src: sb.A, alt: "YouTube Premium" }),
                              ctaText: Q.intl.string(sf.default.fcopjf),
                              onCtaClick: () =>
                                  (0, sc.P)({
                                      partnerIds: [sr.NC],
                                      analyticsLocations: e,
                                      title: Q.intl.string(sj.default.TDZUui),
                                      subtitle: Q.intl.format(sj.default.BTLkvw, {
                                          helpCenterUrl: em.A.getArticleURL(eZ.MVz.YOUTUBE_PROMOTION),
                                      }),
                                      modalTeaser: {
                                          title: Q.intl.format(sj.default.J8CVYT, {
                                              helpCenterUrl: em.A.getArticleURL(
                                                  eZ.MVz.YOUTUBE_PROMOTION_CURRENT_SUBSCRIBER,
                                              ),
                                          }),
                                          titleVariant: "text-sm/medium",
                                          icon: t8.E,
                                      },
                                      onClose: () => {
                                          t5.Ay.fireSurveyAction(t6.w.YOUTUBE_3PP_MODAL_DISMISSED);
                                      },
                                  }),
                              analyticsOptions: { thirdPartyPartner: sr.NC },
                              ctaDisabled: d,
                              ctaLoading: d,
                          }
                        : null,
                    riotCampaignCard:
                        null != t
                            ? {
                                  id: tH.RIOT_CREDIT_CAMPAIGN_PERK_CARD_ID,
                                  title: Q.intl.string(sN.default.zCdMTs),
                                  description: Q.intl.formatToPlainString(sN.default["8VH2lL"], {
                                      termsUrl: em.A.getArticleURL(eZ.MVz.RIOT_CREDIT_CAMPAIGN),
                                  }),
                                  pillText:
                                      null != t.redemptionEndsAt
                                          ? Q.intl.formatToPlainString(sf.default.g7iyvR, {
                                                date: (0, sn.Sw)(t.redemptionEndsAt),
                                            })
                                          : void 0,
                                  caption: (0, c.jsx)("img", {
                                      src: "https://cdn.discordapp.com/assets/content/cef348e36782f9a2173dea37eb7a54e04a0acb4d4f7f5074c8a3f9e5d2ae6e29.svg",
                                      alt: "Riot Games",
                                  }),
                                  backgroundAssetUrl:
                                      "https://cdn.discordapp.com/assets/content/2e11a92f42a86815654f152948f20362092f082dd2215e4ad7dbfa3eacea17fd.webp",
                                  ctaText: Q.intl.string(sN.default.en2ls2),
                                  blurTint: "#310A0B",
                                  isThirdPartyPerk: !0,
                                  onCtaClick: () => {
                                      (0, sd.W)({ analyticsLocations: e });
                                  },
                                  analyticsOptions: { thirdPartyPartner: "riot" },
                              }
                            : null,
                };
            }, [t, e, s, i, u, n, m, a, r, l, d]);
        })(),
        g = i && null == m,
        p = i || null != n || null != a || null != l || null != r || null != d || null != x;
    return null != m || g || p
        ? (0, c.jsx)(t3, {
              id: sR,
              sectionClassName: u()(sC.uW, sC.Uv, sC.qr),
              heading: (0, c.jsx)(K.D, {
                  variant: "nitro-sm",
                  className: u()(t2.R_, t1.U6),
                  children: Q.intl.string(Q.t.NG1e6l),
              }),
              beforeGrid:
                  null != m
                      ? (0, c.jsx)("div", {
                            className: t1.JE,
                            children: (0, c.jsx)(tq.S, {
                                ...m,
                                backgroundAssetUrl:
                                    "https://cdn.discordapp.com/assets/content/6936886d1c55035bd3f56b7594d80dd08e7d3e859be8630f3ef667b338a1dd78.webp",
                                pillText: void 0,
                                blurTint: "#3E000C",
                                featured: !0,
                                glowing: t === sR || s === m.id,
                                autoClickCta: s === m.id,
                            }),
                        })
                      : g
                        ? (0, c.jsx)("div", { className: t1.JE, children: (0, c.jsx)(tJ, { glowing: t === sR }) })
                        : null,
              grid: p
                  ? (0, c.jsxs)(c.Fragment, {
                        children: [
                            null != x &&
                                (0, c.jsx)(tq.S, {
                                    ...x,
                                    containerClassName: t2.Nr,
                                    glowing: s === x.id,
                                    autoClickCta: s === x.id,
                                }),
                            null != n && (0, c.jsx)(tq.S, { ...n, containerClassName: t2.Nr, glowing: s === n.id }),
                            null != r && (0, c.jsx)(tq.S, { ...r, containerClassName: t2.Nr, glowing: s === r.id }),
                            i &&
                                (0, c.jsx)(t$, {
                                    containerClassName: t2.Nr,
                                    glowing: s === tH.XBOX_PREMIUM_PERK_CARD_ID,
                                }),
                            null != l && (0, c.jsx)(tq.S, { ...l, containerClassName: t2.Nr, glowing: s === l.id }),
                            null != d && (0, c.jsx)(tq.S, { ...d, containerClassName: t2.Nr, glowing: s === d.id }),
                            null != a && (0, c.jsx)(tq.S, { ...a, containerClassName: t2.Nr, glowing: s === a.id }),
                        ],
                    })
                  : null,
          })
        : null;
}
var s_ = s(313133),
    sv = s(67423);
let sP = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: l } = (0, j.Ay)(A.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        r = (0, te.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsx)(e4.animated.div, {
        className: u()(s_.iE, { [s_.q4]: !t }),
        style: r,
        children: (0, c.jsxs)("div", {
            className: s_.iJ,
            children: [
                (0, c.jsx)("img", { alt: "", src: sv, className: s_.oU }),
                (0, c.jsxs)("div", {
                    className: s_.iQ,
                    children: [
                        (0, c.jsx)(K.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: Q.intl.format(Q.t["3yZP0G"], { percent: n.discount.amount }),
                        }),
                        (0, c.jsx)(J.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: Q.intl.format(Q.t["3Q4wCy"], {
                                numMonths: n.discount.intervalCount,
                                discountedPrice: a,
                                billingPeriod: (0, ex.Ke)(n.discount.intervalType),
                            }),
                        }),
                    ],
                }),
                (0, c.jsx)(en.$, {
                    variant: "expressive",
                    icon: ei.t,
                    size: "md",
                    text: Q.intl.string(Q.t.zrCzVB),
                    onClick: () =>
                        void (0, et.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                s.e("489361"),
                                s.e("227853"),
                                s.e("222969"),
                                s.e("515363"),
                                s.e("128804"),
                                s.e("71151"),
                                s.e("286615"),
                                s.e("311541"),
                                s.e("472847"),
                                s.e("870088"),
                                s.e("300641"),
                                s.e("747802"),
                                s.e("966366"),
                                s.e("338332"),
                                s.e("153302"),
                                s.e("758053"),
                                s.e("88683"),
                                s.e("983513"),
                                s.e("216806"),
                                s.e("310734"),
                                s.e("348567"),
                                s.e("452075"),
                                s.e("900277"),
                                s.e("127962"),
                                s.e("364827"),
                                s.e("907167"),
                                s.e("952372"),
                                s.e("861060"),
                                s.e("56366"),
                                s.e("639161"),
                                s.e("910486"),
                                s.e("678157"),
                                s.e("147134"),
                                s.e("40291"),
                                s.e("544571"),
                                s.e("729963"),
                                s.e("538513"),
                                s.e("102328"),
                                s.e("122990"),
                                s.e("50097"),
                                s.e("594161"),
                                s.e("435432"),
                                s.e("80347"),
                                s.e("680166"),
                            ]).then(s.bind(s, 293061));
                            return (t) =>
                                (0, c.jsx)(e, {
                                    ...t,
                                    premiumSubscription: i,
                                    analyticsLocations: l,
                                    initialStep: ey.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var sS = s(761508),
    sy = s(480713),
    sD = s(449543),
    sM = s(197935),
    sO = s(387103);
function sL(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: sO.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sU(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/a89ff8a07704142beff857453a6c8aa15400cf711f8fe3cbbfa7ff4f0b2a334f.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sk(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/ce65064fd18fa477fe14c2d4066af96637c446e074008fb0b7599874537ce8d0.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sG = s(345394);
function sw(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: sG.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sB = s(163665);
function sH(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/2d617cf5c40353ca4ec6ac76e1a48f6781439c18db06b8cfab0f194358abe555.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sF = s(330422);
function sV(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/8a9a80f2b924da025612a160c7dc74c5e0fe675a90e3424737e6c5927739a6d0.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sz(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/3ba8fce33a4733cdbadc10ac378d1b5523b0c0961e7edc74372c159e3009727f.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sW = s(996682);
function sY(e) {
    let {
        color: t = eJ.A.colors.ICON_STRONG,
        "aria-label": s,
        "aria-hidden": i,
        role: n,
        width: a = 100,
        height: l = 80,
    } = e;
    return (0, c.jsxs)("svg", {
        ...(0, sW.A)({ "aria-label": s, "aria-hidden": i, role: n }),
        width: a,
        height: l,
        viewBox: "0 0 100 80",
        fill: t.css,
        children: [
            (0, c.jsx)("g", {
                clipPath: "url(#a)",
                children: (0, c.jsx)("path", {
                    fill: t.css,
                    d: "M69.14 40c0 5.63-4.25 9.82-9.97 9.82-5.71 0-9.96-4.19-9.96-9.82s4.25-9.82 9.96-9.82c5.72 0 9.97 4.19 9.97 9.82Zm30.43 0c0 21.87-17.94 39.3-40.4 39.3-19.26 0-35.07-12.71-39.32-30.13H11.2L7.22 30.83h12.76c1.2-4.19 3.05-8.25 5.45-11.79H4.7L.7.71h57.27C82.16.7 99.57 18.13 99.57 40Zm-19.14 0c0-11.66-9.43-20.96-21.26-20.96-11.82 0-21.25 9.3-21.25 20.96s9.43 20.96 21.25 20.96c11.83 0 21.26-9.3 21.26-20.96Z",
                }),
            }),
            (0, c.jsx)("defs", {
                children: (0, c.jsx)("clipPath", {
                    id: "a",
                    children: (0, c.jsx)("path", { fill: t.css, d: "M0 0h100v80H0z" }),
                }),
            }),
        ],
    });
}
function sX(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/1314d17fb23c01337cac4bfdaaff48c5e6ac1f515b0647f0964922b988f095c1.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sK = s(78701);
function sJ(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: sK.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sq = s(462887),
    sQ = s(736653),
    sZ = s(259065),
    s$ = s(206835),
    s0 = s(591179),
    s1 = s(462463),
    s2 = s(219882),
    s3 = s(19886),
    s6 = s(425713),
    s7 = s(696292),
    s8 = s(192444),
    s5 = s(617986),
    s9 = s(892227),
    s4 = s(81466),
    ie = s(1889),
    it = s(749012);
let is = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, H.F)();
    if (!e || null == t) return null;
    let s =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, s9.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, c.jsxs)("div", {
        className: it.kL,
        children: [
            null != s &&
                (0, c.jsxs)("div", {
                    className: it.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: it.Pf,
                            children: [
                                (0, c.jsx)(s4.CalendarIcon, { size: "sm", color: eJ.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(J.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: Q.intl.string(ie.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, c.jsx)(J.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: Q.intl.format(ie.default.xedPIb, { days: s }),
                        }),
                    ],
                }),
            null != s && t.total_rewarded_from_program > 0 && (0, c.jsx)("div", { className: it.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, c.jsxs)("div", {
                    className: it.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: it.Pf,
                            children: [
                                (0, c.jsx)(eK.C, { size: "sm", color: eJ.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(J.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: Q.intl.string(ie.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, c.jsx)(J.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: Q.intl.format(ie.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var ii = s(190107),
    ia = s(799544);
function il() {
    let { shouldShowBonusOrbsUX: e, multiplier: t } = (0, s8.lk)(ii.rE.NITRO_HOME_MARKETING),
        { isEligible: s, programReward: i } = (0, H.F)();
    return {
        nitroOrbsRewardsCard: (0, o.useMemo)(
            () =>
                !s || null == i || null == i.reward_amount || i.reward_amount <= 0
                    ? null
                    : {
                          id: tH.NITRO_ORBS_REWARDS_CARD_ID,
                          title: Q.intl.string(ie.default.hx5AFp),
                          description: Q.intl.format(ie.default.wq3CF2, { orbsCount: i.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(ia.lH, ia.yK),
                          footerContent: (0, c.jsx)(is, {}),
                          ctaText: Q.intl.string(ie.default.BxjHiu),
                          onCtaClick: () => (0, S.pX)(eZ.BVt.COLLECTIBLES_SHOP_WITH_TAB(e6.G2.ORBS)),
                      },
            [s, i],
        ),
        questOrbMultiplierCard: (0, o.useMemo)(
            () =>
                e
                    ? {
                          id: tH.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: Q.intl.string(Q.t.Csf5Ol),
                          description: Q.intl.format(Q.t.NpUfej, { bonusOrbMultiplier: t }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: Q.intl.string(Q.t.jVcuVY),
                          onCtaClick: () => (0, s5.mA)({ fromContent: s7.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: ia.Nf,
                      }
                    : null,
            [e, t],
        ),
    };
}
var ir = s(975807),
    ic = s(95035),
    io = s(989790),
    id = s(88001),
    iu = s(148155),
    im = s(817577);
function ix() {
    (0, ir.A)(id.TE);
}
function ig(e) {
    let t = (0, io.O9)(),
        i = (0, x.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        n = i?.hasActiveTrial ?? !1,
        a = (0, o.useCallback)(() => {
            n
                ? (0, et.openModalLazy)(async () => {
                      let { default: e } = await s.e("499709").then(s.bind(s, 516044));
                      return (t) => (0, c.jsx)(e, { ...t });
                  })
                : (0, P.A)({
                      subscriptionTier: tj.pe.TIER_2,
                      initialPlanId: tj.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, o.useMemo)(
        () =>
            t
                ? {
                      id: tH.PREMIUM_GROUP_CARD_ID,
                      title: Q.intl.string(iu.default.YkvksF),
                      description: (0, c.jsxs)(c.Fragment, {
                          children: [
                              Q.intl.formatToPlainString(iu.default.JlyGQj, {
                                  totalSeats: id.aw,
                                  premiumGroupProductName: (0, id.DP)(),
                              }),
                              (0, c.jsx)("div", {
                                  className: ia.LF,
                                  children: (0, c.jsx)(ic.A, {
                                      onClick: ix,
                                      children: Q.intl.string(iu.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: Q.intl.string(Q.t.oW0eUd),
                      primaryAsset: im,
                      ctaIcon: ei.t,
                      ctaIconPosition: "start",
                      ctaText: Q.intl.string(Q.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var ip = s(562819),
    ih = s(793943),
    iN = s(757036),
    iA = s(235955),
    ij = s(655752);
let iE = (0, su.mj)({
    kind: "user",
    name: "2026-08-nitro-tenure-badge-total-progress",
    defaultConfig: { measureFromStreakStart: !1 },
    variations: { 0: { measureFromStreakStart: !1 }, 1: { measureFromStreakStart: !0 } },
});
var iT = s(764231),
    ib = s(627380),
    iC = s(30084),
    iR = s(814014),
    iI = s(714206);
let i_ =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    iv =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    iP =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function iS() {
    let e,
        t,
        { analyticsLocations: s } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        i = (0, s0.X)("useWhatsNewPerkCards"),
        n = (0, s1.A)({ analyticsLocations: s }),
        a = (0, o.useCallback)(() => {
            (0, ed.openUserSettings)(eo.X.PROFILE_PANEL, { analyticsLocations: s }, () =>
                (0, sZ.L)({ analyticsLocations: s }),
            );
        }, [s]),
        l = (0, o.useCallback)(() => {
            (0, ed.openUserSettings)(eo.X.PROFILE_PANEL, { analyticsLocations: s }, () =>
                (0, ip.L)({ analyticsLocations: s }),
            );
        }, [s]),
        r = (0, o.useCallback)(() => {
            (0, ed.openUserSettings)(eo.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        d = (function (e) {
            let { fractionalState: t } = (0, ec.A)(),
                s = t === tj.xc.FP_ONLY,
                i = (0, s3.$F)(),
                n = (0, s3.Xb)(),
                a = i?.status === s3.Wo.UPCOMING || s,
                l = i?.status === s3.Wo.WITHHELD,
                r = a || l,
                c = (0, s6.N)(i?.id),
                d = (function () {
                    let e = (0, s3.$F)(),
                        t = (0, ij.P)(),
                        s = (0, s3.Xb)(),
                        i = (function (e) {
                            let { measureFromStreakStart: t } = iE.useConfig({ location: e });
                            return t;
                        })("tenure_badge_progress_bar");
                    if (null == e || null == t || null == s || e.status === s3.Wo.WITHHELD) return null;
                    let n = e_()(),
                        a = e_()(s),
                        l = i || e.status === s3.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        r = t.tenureReqNumMonths,
                        c = a.clone().add(l, "months"),
                        o = a.clone().add(r, "months").diff(c);
                    return Math.max(0, Math.min(1, (n.diff(c) - 864e5) / o));
                })(),
                m = (0, x.bG)([el.Ay], () => el.Ay.useReducedMotion) && !r,
                g = (0, ib.t)(),
                p = (0, ij.P)();
            return (0, o.useMemo)(() => {
                let t,
                    a = null != p ? Q.intl.string(p.nameUnformattedNitro) : void 0;
                null == i
                    ? s && (t = (0, iT.T)(tj.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === s3.Wo.UPCOMING
                              ? Q.intl.formatToPlainString(Q.t.a1eKDi, { days: g?.days ?? 0 })
                              : i.status === s3.Wo.WITHHELD
                                ? ((0, iT.T)(i.id, i.tenureReqNumMonths) ?? void 0)
                                : ((function (e, t) {
                                      if (null != e && null != t) {
                                          if (e.days <= 30)
                                              return Q.intl.formatToPlainString(Q.t.NEXoaI, {
                                                  days: e.days,
                                                  nextBadgeName: t,
                                              });
                                          if (e.months <= 3)
                                              return Q.intl.formatToPlainString(Q.t.KDV8oD, {
                                                  months: e.months,
                                                  nextBadgeName: t,
                                              });
                                      }
                                  })(g, a) ??
                                  (0, iT.T)(i.id, i.tenureReqNumMonths) ??
                                  void 0));
                let l = null;
                return (
                    null != c ? (l = r || m ? c.standard : c.ambientLarge) : s && (l = iI),
                    {
                        id: tH.TENURE_BADGE_CARD_ID,
                        title: null != i ? Q.intl.string(i.nameUnformattedNitro) : s ? Q.intl.string(Q.t.tx9Fvw) : "",
                        pillText: Q.intl.string(Q.t["jyYgZ+"]),
                        primaryAsset: l,
                        primaryAssetClassName: u()(iR.pq, { [iR.rX]: r, [iR.kE]: m }),
                        caption: null != n ? Q.intl.formatToPlainString(Q.t.Hu4jfi, { date: new Date(n) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: d ?? void 0,
                        ctaText: Q.intl.string(Q.t.jVcuVY),
                        onCtaClick: () => (0, iC.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, c, r, m, n, d, s, g, p, e]);
        })(s),
        { nitroOrbsRewardsCard: m, questOrbMultiplierCard: g } = il(),
        p =
            ((e = (0, iN.L)(tj.PremiumTypes.TIER_2)),
            (t = (0, s2.rX)()),
            (0, o.useMemo)(
                () =>
                    e && t
                        ? {
                              id: tH.NITRO_FILE_UPLOAD_WHATS_NEW_CARD_ID,
                              title: Q.intl.string(iA.default["/cV3ka"]),
                              description: Q.intl.string(iA.default.H523FI),
                              primaryAsset: (0, c.jsx)(sB.I, { alt: "", ariaHidden: !0 }),
                          }
                        : null,
                [e, t],
            )),
        f = ig(s);
    return (0, o.useMemo)(() => {
        let e = [
                m,
                g,
                f,
                {
                    id: tH.DISPLAY_NAME_STYLES_CARD_ID,
                    title: Q.intl.string(Q.t.OLtTrt),
                    description: Q.intl.string(Q.t["di/pXR"]),
                    onCtaClick: i ? n : a,
                    ctaText: Q.intl.string(Q.t.jVcuVY),
                    primaryAsset: i_,
                },
                {
                    id: tH.CLIENT_THEMES_CARD_ID,
                    title: Q.intl.string(Q.t.acc6h6),
                    description: Q.intl.formatToPlainString(Q.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: iP,
                    ctaText: Q.intl.string(Q.t.jVcuVY),
                    onCtaClick: () => {
                        (0, ih.nf)(ih.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: tH.PERMADECOS_CARD_ID,
                    title: Q.intl.string(Q.t.L14NZN),
                    description: Q.intl.string(Q.t.eCZkAI),
                    primaryAsset: (0, c.jsx)(sJ, { alt: "", ariaHidden: !0 }),
                    ctaText: Q.intl.string(Q.t.jVcuVY),
                    onCtaClick: i ? n : l,
                },
                {
                    id: tH.CUSTOM_APP_ICONS_CARD_ID,
                    title: Q.intl.string(Q.t["GU+wqh"]),
                    description: Q.intl.string(Q.t["1uPk1Z"]),
                    primaryAsset: iv,
                    ctaText: Q.intl.string(Q.t.y9TxXV),
                    onCtaClick: r,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            s = t ? 5 : 6;
        return (e.splice(+!!t, 0, d), null != p && e.splice(2, 0, p), e.length > s && e.splice(s, e.length - s), e);
    }, [d, m, g, p, f, a, r, l, n, i]);
}
var iy = s(355097);
let iD = "/assets/1eb1b74667b4c0f0.svg",
    iM = "/assets/983b60e4fcaf973b.svg";
var iO =
    (((l = {}).BEST_OF_NITRO = "bestof"),
    (l.APPEARANCE_STYLE = "appearance"),
    (l.UPGRADES = "upgrades"),
    (l.VIP_EXTRAS = "vip"),
    l);
let iL = [
    { id: "bestof", label: () => Q.intl.string(Q.t.q1u7nQ) },
    { id: "appearance", label: () => Q.intl.string(Q.t.CUnZkZ) },
    { id: "upgrades", label: () => Q.intl.string(Q.t.KC5q8v) },
    { id: "vip", label: () => Q.intl.string(Q.t.DjEAcv) },
];
var iU = s(18290);
function ik(e) {
    e.stopPropagation();
}
function iG(e) {
    return e.id;
}
function iw(e) {
    let { glowingPerkId: t = null } = e,
        s = (function () {
            let e = (0, sQ.DP)(),
                t = (0, s0.X)("useFavoritesPerkCards"),
                s = (0, s3.Lh)(),
                i = (0, s6.N)(s)?.standard ?? null,
                { analyticsLocations: n } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, s$.A)({ scrollPosition: iy._F.TRY_IT_OUT, analyticsLocations: n }),
                l = (0, o.useCallback)(() => {
                    (0, ed.openUserSettings)(eo.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: n });
                }, [n]),
                r = (0, o.useCallback)(() => {
                    (0, ed.openUserSettings)(eo.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: n });
                }, [n]),
                d = (0, o.useCallback)(() => {
                    (0, ed.openUserSettings)(eo.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: n });
                }, [n]),
                u = (0, o.useCallback)(() => {
                    (0, S.pX)(eZ.BVt.COLLECTIBLES_SHOP);
                }, []),
                m = (0, o.useCallback)(() => {
                    (0, ed.openUserSettings)(eo.X.SOUNDBOARD_CATEGORY, { analyticsLocations: n });
                }, [n]),
                x = (0, s1.A)({ analyticsLocations: n }),
                g = (0, o.useCallback)(() => {
                    (0, ed.openUserSettings)(eo.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, sZ.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                p = iS(),
                f = (0, o.useMemo)(() => p.map((e) => e?.id), [p]),
                { nitroOrbsRewardsCard: h, questOrbMultiplierCard: N } = il(),
                E = ig(n),
                T = (0, o.useMemo)(
                    () => [
                        {
                            id: tH.SERVER_BOOSTS_CARD_ID,
                            title: Q.intl.formatToPlainString(Q.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: Q.intl.formatToPlainString(Q.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: Q.intl.string(Q.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: (0, c.jsx)(sL, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != E ? { ...E, categories: ["bestof"] } : null,
                        {
                            id: tH.PROFILES_CARD_ID,
                            title: Q.intl.string(Q.t.xDRab3),
                            description: Q.intl.string(Q.t.yn6fWA),
                            ctaText: Q.intl.string(Q.t.jVcuVY),
                            onCtaClick: t ? x : a,
                            primaryAsset: (0, c.jsx)(sU, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tH.HD_VIDEO_CARD_ID,
                            title: Q.intl.string(Q.t["/mQ5gg"]),
                            description: Q.intl.string(Q.t["7WwAXh"]),
                            primaryAsset: (0, c.jsx)(sk, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tH.CLIENT_THEMES_CARD_ID,
                            title: Q.intl.string(Q.t.acc6h6),
                            description: Q.intl.formatToPlainString(Q.t.WQazjs, { themeCount: 20 }),
                            ctaText: Q.intl.string(Q.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: iP,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tH.MORE_EMOJIS_CARD_ID,
                            title: Q.intl.string(Q.t.D8vIDT),
                            description: Q.intl.string(Q.t.DRMecB),
                            primaryAsset: (0, c.jsx)(sw, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tH.LARGE_UPLOADS_CARD_ID,
                            title: Q.intl.string(Q.t.nL1WZV),
                            description: (0, s2.M6)({
                                legacyCopy: Q.intl.formatToPlainString(Q.t.k8LC1w, { maxSizeMb: 500 }),
                                rolloutCopy: Q.intl.formatToPlainString(Q.t.teOTfv, {
                                    maxFileSize: (0, ex.EJ)(tj.PremiumTypes.TIER_2, { useSpace: !1 }),
                                }),
                            }),
                            primaryAsset: (0, c.jsx)(sB.I, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tH.CUSTOM_APP_ICONS_CARD_ID,
                            title: Q.intl.string(Q.t["GU+wqh"]),
                            description: Q.intl.string(Q.t["1uPk1Z"]),
                            ctaText: Q.intl.string(Q.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: iv,
                            categories: ["appearance"],
                        },
                        {
                            id: tH.ENTRANCE_SOUNDS_CARD_ID,
                            title: Q.intl.string(Q.t.WJfCPi),
                            description: Q.intl.string(Q.t.liQKJR),
                            ctaText: Q.intl.string(Q.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: tH.DISPLAY_NAME_STYLES_CARD_ID,
                            title: Q.intl.string(Q.t.OLtTrt),
                            description: Q.intl.string(Q.t["di/pXR"]),
                            onCtaClick: t ? x : g,
                            ctaText: Q.intl.string(Q.t.jVcuVY),
                            primaryAsset: i_,
                            categories: ["appearance"],
                        },
                        {
                            id: tH.CUSTOM_SOUNDS_CARD_ID,
                            title: Q.intl.string(Q.t["Cu/oFd"]),
                            description: Q.intl.string(Q.t.czj2aa),
                            primaryAsset: (0, c.jsx)(sH, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tH.SPECIAL_STICKERS_CARD_ID,
                            title: Q.intl.string(Q.t.MQoVeb),
                            description: Q.intl.string(Q.t.HGCLZX),
                            primaryAsset: (0, c.jsx)("div", {
                                className: ia.Uc,
                                children: (0, c.jsx)(sF.n, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tH.SUPER_REACTIONS_CARD_ID,
                            title: Q.intl.string(Q.t.qERvAA),
                            description: Q.intl.string(Q.t.WkUWzx),
                            primaryAsset: (0, c.jsx)(sV, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tH.VIDEO_BACKGROUNDS_CARD_ID,
                            title: Q.intl.string(Q.t.ssVDYQ),
                            description: Q.intl.string(Q.t.aUSRMa),
                            primaryAsset: (0, sq.M)(e) ? iD : iM,
                            categories: ["upgrades"],
                        },
                        {
                            id: tH.EARLY_ACCESS_CARD_ID,
                            title: Q.intl.string(Q.t["g/KRY6"]),
                            description: Q.intl.string(Q.t.JzAmJc),
                            primaryAsset: (0, c.jsx)(sz, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tH.BADGE_CARD_ID,
                            title: Q.intl.string(Q.t.Bn3CtB),
                            description: Q.intl.string(Q.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, c.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, c.jsx)(sY, { color: eJ.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tH.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: Q.intl.string(Q.t["MTD+7w"]),
                            description: Q.intl.string(Q.t.Bhs0s6),
                            ctaText: Q.intl.string(Q.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, c.jsx)(sX, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != h ? { ...h, categories: ["vip"] } : null,
                        null != N ? { ...N, categories: ["vip"] } : null,
                        {
                            id: tH.PERMADECOS_CARD_ID,
                            title: Q.intl.string(Q.t.L14NZN),
                            description: Q.intl.string(Q.t.eCZkAI),
                            primaryAsset: (0, c.jsx)(sJ, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, h, N, E, a, l, r, d, u, m, g, x, t],
                );
            return (0, o.useMemo)(() => T.filter((e) => null != e && !f.includes(e.id)), [T, f]);
        })(),
        i = (0, sy.l)("premium_favorites_section"),
        n = null != t ? s.find((e) => e?.id === t) : null,
        [a, l] = (0, o.useState)(n?.categories[0] ?? iO.BEST_OF_NITRO),
        r = iL.find((e) => e.id === a)?.label(),
        d = (0, o.useMemo)(() => s.filter((e) => null != e && e.categories.includes(a)), [s, a]);
    return (0, c.jsxs)("div", {
        className: iU.uW,
        children: [
            (0, c.jsx)(K.D, { variant: "nitro-sm", children: Q.intl.string(Q.t["Uh3+CA"]) }),
            (0, c.jsx)(sS.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: a,
                onItemSelect: l,
                className: iU.Lq,
                "aria-label": Q.intl.string(Q.t["Uh3+CA"]),
                children: iL.map((e) =>
                    (0, c.jsx)(sS.V.Item, { id: e.id, className: iU.IC, children: e.label() }, e.id),
                ),
            }),
            i
                ? (0, c.jsx)(
                      sM.A,
                      {
                          "aria-label": Q.intl.formatToPlainString(Q.t.akg5nT, { filterName: r }),
                          gap: 20,
                          className: iU.jG,
                          items: d,
                          getItemKey: iG,
                          renderItem: (e, s) =>
                              (0, c.jsx)(tq.S, {
                                  ...e,
                                  glowing: t === e.id,
                                  containerClassName: iU.Ui,
                                  listItemProps: s,
                              }),
                      },
                      a,
                  )
                : (0, c.jsx)(
                      sD.A,
                      {
                          gap: 20,
                          className: iU.jG,
                          "aria-label": Q.intl.formatToPlainString(Q.t.akg5nT, { filterName: r }),
                          children: d.map((e) =>
                              (0, c.jsx)(
                                  tq.S,
                                  { ...e, glowing: t === e.id, containerClassName: iU.Ui, onFocus: ik },
                                  e.id,
                              ),
                          ),
                      },
                      a,
                  ),
        ],
    });
}
var iB = s(72979);
let iH = function (e) {
    let { className: t } = e,
        s = (0, sQ.DP)();
    return (0, c.jsx)("img", {
        className: u()(iB.D, t),
        src: (0, sq.M)(s) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var iF = s(684251);
let iV = function (e) {
    let { children: t } = e;
    return (0, c.jsxs)("div", {
        className: u()(iF.kL, iF.Gd, iF.Eg),
        children: [(0, c.jsx)(iH, {}), (0, c.jsx)(tM, {}), t],
    });
};
function iz(e) {
    let { glowingPerkId: t = null } = e,
        s = iS();
    return (0, c.jsx)(t3, {
        sectionClassName: t2.uW,
        heading: (0, c.jsx)(K.D, { variant: "nitro-sm", className: t2.R_, children: Q.intl.string(Q.t.Aw5DRm) }),
        grid: (0, c.jsx)(c.Fragment, {
            children: s.map((e, s) => {
                if (null == e) return;
                let i = 0 === s && !0 === e.featured,
                    n = t === e.id;
                return (0, c.jsx)(
                    tq.S,
                    {
                        ...e,
                        glowing: n,
                        autoClickCta: n && e.id === tH.YOUTUBE_3PP_CARD_ID,
                        featured: i,
                        containerClassName: u()(t2.Nr, { [t2.Nq]: i }),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function iW(e, t, s, i) {
    !(function (e, t, s) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            n = arguments.length > 4 ? arguments[4] : void 0,
            a = (0, x.bG)([el.Ay], () => el.Ay.useReducedMotion),
            l = o.useRef(!1);
        (o.useEffect(() => {
            if (!t || l.current) return;
            let s = { behavior: a ? "auto" : "smooth", block: i, inline: n },
                r = e();
            if (null != r && r.offsetHeight > 0) {
                ((l.current = !0), r.scrollIntoView(s));
                return;
            }
            let c = !1,
                o = null,
                d = new ResizeObserver((e) => {
                    let t = e[0];
                    null == t ||
                        !(t.contentRect.height > 0) ||
                        l.current ||
                        c ||
                        ((l.current = !0), d.disconnect(), t.target.scrollIntoView(s));
                }),
                u = performance.now();
            return (
                !(function t() {
                    if (c || performance.now() - u > 5e3) return;
                    let i = e();
                    null != i
                        ? i.offsetHeight > 0
                            ? ((l.current = !0), i.scrollIntoView(s))
                            : d.observe(i)
                        : (o = requestAnimationFrame(t));
                })(),
                () => {
                    ((c = !0), null != o && cancelAnimationFrame(o), d.disconnect());
                }
            );
        }, [t, a, i, n, ...s]),
            o.useEffect(() => {
                t || (l.current = !1);
            }, [t]));
    })(() => document.getElementById(e), t, [e], s, i);
}
var iY = s(92737);
let iX = "/assets/cd2be35d285d4675.svg",
    iK = (e) => {
        let { userId: t } = e,
            s = (0, m.zy)();
        (o.useEffect(() => {
            p.h.wait(async () => {
                let e = [(0, B.Ay)()];
                (null != t && e.push((0, V.A)(t)), await Promise.all(e));
            });
        }, [t]),
            o.useEffect(() => {
                b(!0);
            }, []),
            (0, W.j)(),
            (0, v.P)(_));
        let i = o.useRef(null),
            n = o.useRef(null),
            a = (0, x.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            { isReady: l, programReward: r } = (0, H.F)(),
            {
                scrollTargetId: d,
                glowingSectionId: f,
                glowingPerkId: h,
                scrollBlock: N,
                scrollInline: E,
            } = o.useMemo(() => {
                let e = new URLSearchParams(s.search),
                    t = e.get("perk"),
                    i = e.get(iY.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != i
                      ? { scrollTargetId: i, glowingSectionId: i, scrollBlock: "start" }
                      : {};
            }, [s.search]);
        iW(d ?? "", null != d, N, E);
        let [T, b] = o.useState(!1),
            C = (0, z.p)(),
            R = o.useRef(null),
            [I, P] = o.useState(!1),
            S = null != C && null != a && a.status === eZ.Dmq.CANCELED,
            y = (0, Y.iU)(tj.gD.PREMIUM_MONTH_TIER_2, C, a),
            D = !I && S,
            M = (0, x.bG)([F.A], () => (null != t ? F.A.getUserProfile(t) : null)),
            { analyticsLocations: U } = (0, j.Ay)(A.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [k, X] = o.useState(!1);
        return null != M && (l || null != r)
            ? (0, c.jsxs)(w.Gt, {
                  className: u()(iF.xW, iF.Gd),
                  ref: i,
                  children: [
                      (0, c.jsx)(iV, {
                          children: (0, c.jsxs)(j.f5, {
                              value: U,
                              children: [
                                  (0, c.jsx)(G.L, {
                                      innerRef: R,
                                      onChange: (e) => P(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, c.jsx)(tI, {
                                          buttonVisibilityRef: R,
                                          className: iF.v1,
                                          userDiscountOffer: C,
                                          discountedPrice: y,
                                      }),
                                  }),
                                  (0, c.jsx)(iz, { glowingPerkId: h }),
                                  (0, c.jsx)(sI, { glowingPerkId: h, glowingSectionId: f }),
                                  (0, c.jsx)(iw, { glowingPerkId: h }),
                                  (0, c.jsx)($, {
                                      className: iF.Zy,
                                      location: A.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: eZ.liQ.NITRO_HOME, section: eZ.JJy.GIFT_BANNER },
                                  }),
                                  (0, c.jsx)("div", { className: iF.hz }),
                                  (0, c.jsx)(G.L, {
                                      innerRef: n,
                                      onChange: (e) => {
                                          e &&
                                              !k &&
                                              (L.default.track(eZ.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: U,
                                              }),
                                              X(!0));
                                      },
                                      children: (0, c.jsx)("div", { ref: n, className: iF._Z }),
                                  }),
                                  (0, c.jsx)("img", {
                                      src: iX,
                                      className: iF.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: Q.intl.string(Q.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      S &&
                          null != y &&
                          (0, c.jsx)(sP, {
                              isVisible: D && T,
                              premiumSubscription: a,
                              churnDiscountOffer: C,
                              discountedPrice: y,
                          }),
                  ],
              })
            : (0, c.jsxs)("div", {
                  className: u()(iF.kL, iF.Lq, iF.TN, iF.Eg),
                  children: [(0, c.jsx)(tM, {}), (0, c.jsx)("div", { className: iF.S, children: (0, c.jsx)(g.y, {}) })],
              });
    };
var iJ = s(286320),
    iq = s(851746),
    iQ = s(727949);
let iZ = (0, su.mj)({
    name: "2026-07-plan-select-ui-redesign",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var i$ = s(543213);
let i0 =
    "https://cdn.discordapp.com/assets/content/3aa94cb4beecb43100d482e94a5a707f188e2e2315d9b15865689b51409c4d56.png";
function i1(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: i0,
        srcSet: `${i0} 1x, https://cdn.discordapp.com/assets/content/e33cdb99c455ad732bab8cc40ca15b8bf926a7e9e078cd8834edfd15e4010217.png 2x`,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var i2 = s(37537),
    i3 = s(783420),
    i6 = s(204413),
    i7 = s(245383),
    i8 = s(824069),
    i5 = s(785007),
    i9 = s(947910);
function i4(e) {
    let { value: t, planRadioOptions: s, ...i } = e,
        n = s.map((e) => {
            let s = e.value === t;
            return {
                name: (0, c.jsxs)("div", {
                    className: i9.VH,
                    children: [
                        s &&
                            null != e.badgeText &&
                            (0, c.jsx)("div", {
                                className: i9.fQ,
                                children: (0, c.jsx)(eV.E, { type: { text: e.badgeText }, variant: "brand" }),
                            }),
                        (0, c.jsxs)(es.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: i9.qU,
                            children: [
                                (0, c.jsxs)(es.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: i9.NI,
                                    children: [
                                        (0, c.jsx)(J.E, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            children: e.primaryText,
                                        }),
                                        null != e.primarySubText &&
                                            (0, c.jsx)(J.E, {
                                                variant: "text-sm/medium",
                                                color: "text-subtle",
                                                children: e.primarySubText,
                                            }),
                                    ],
                                }),
                                (0, c.jsxs)(es.B, {
                                    direction: "vertical",
                                    align: "end",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: i9.br,
                                    children: [
                                        null != e.secondaryText &&
                                            (0, c.jsx)(J.E, {
                                                tag: "span",
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                children: e.secondaryText,
                                            }),
                                        null != e.secondarySubText &&
                                            (0, c.jsx)(J.E, {
                                                tag: "span",
                                                variant: "text-sm/medium",
                                                color: "text-subtle",
                                                className: i9.yD,
                                                children: e.secondarySubText,
                                            }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                value: e.value,
                disabled: e.isDisabled,
                radioBarClassName: u()(i9.tG, { [i9.uA]: s, [i9.hy]: s && e.useGradientSelectedBorder }),
            };
        });
    return (0, c.jsx)(i5.$d, {
        ...i,
        options: n,
        value: t,
        size: i5.r9.NOT_SET,
        className: i9.ul,
        withTransparentBackground: !0,
    });
}
var ne = s(118751),
    nt = s(773669),
    ns = s(97352),
    ni = s(526292),
    nn = s(387278),
    na = s(369827),
    nl = s(803496);
function nr(e) {
    let t = (0, x.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        s = (0, na.L)(),
        i = t?.paymentSourceId ?? s,
        { priceOptions: n } = (0, nl.A)({
            activeSubscription: t,
            skuIDs: [(0, ex.mH)(e)],
            paymentSourceId: i,
            isGift: !1,
        });
    return n;
}
function nc(e, t, s, i, n) {
    return t && s?.includes(e) === !0 && null != i && null != n && i !== n;
}
function no(e) {
    let { expectedUsageInterval: t, usageInterval: s, discountDuration: i, regularPrice: n, discountedPrice: a } = e;
    return s !== t || null == n || null == a
        ? null
        : t === tj.Ff.YEAR
          ? Q.intl.format(Q.t.G88D2T, { discountedPrice: a, numYears: i, regularPrice: n })
          : Q.intl.format(Q.t["x+qUAi"], { discountedPrice: a, numMonths: i, regularPrice: n });
}
var nd = s(614488);
function nu(e) {
    let { skuId: t, selectedPlanId: s, subscribeButtonProps: i } = e,
        n = null == s || !0 === i.disabled,
        a = null == s ? "secondary" : i.variant;
    return (0, c.jsx)(i3.A, {
        subscriptionTier: t,
        initialPlanId: s,
        shouldDisallowPlanSelection: !0,
        children: (e) => {
            let { onClick: t } = e;
            return (0, c.jsx)(en.$, {
                size: "md",
                fullWidth: !0,
                icon: ei.t,
                text: i.text,
                variant: a,
                disabled: n,
                onClick: t,
            });
        },
    });
}
function nm(e) {
    let { skuId: t, className: s } = e,
        i = t === tj.pe.TIER_2,
        n = (0, sq.q)((0, sQ.Ay)()),
        a = (0, i2.c)("PlanSelectCard"),
        l = (0, eh.V)(),
        r = l?.subscriptionTrial,
        d = r?.skuId === t,
        m = i && d && null != r,
        g = (0, ef.p)(),
        {
            planRadioOptions: p,
            selectedPlanId: f,
            setSelectedPlanId: h,
            shouldSuppressDiscountCta: N,
        } = (function (e) {
            let { skuId: t } = e,
                [s, i] = o.useState(null),
                n = tj.En[t],
                a = tj.zE[t],
                l = t === tj.pe.TIER_2,
                r = nr(t),
                c = (0, eh.V)(),
                d = c?.subscriptionTrial?.skuId === t,
                { subscribedSkuId: u, isMonthlyPlanDisabled: m } = (0, x.cf)(
                    [O.A],
                    () => {
                        let e = O.A.getPremiumTypeSubscription();
                        return {
                            subscribedSkuId: (0, ex.aZ)(e),
                            isMonthlyPlanDisabled:
                                n === tj.gD.PREMIUM_MONTH_TIER_2 &&
                                null != e &&
                                [tj.gD.PREMIUM_YEAR_TIER_0, tj.gD.PREMIUM_YEAR_TIER_1].includes(e.planId),
                        };
                    },
                    [n],
                ),
                g = u === t,
                p = (0, ef.O)(),
                f = (0, ni.k5)(),
                h = (0, x.bG)([nt.default], () => nt.default.locale),
                N = (0, Y.U9)(p, t),
                A = (0, Y.N1)(n),
                j = (0, Y.N1)(a),
                [E, T] = (0, x.yK)([ns.A], () => [ns.A.get(n), ns.A.get(a)], [n, a]),
                b = null != E ? (0, ex.sS)(E, r) : null,
                C = null != T ? (0, ex.sS)(T, r) : null,
                R =
                    N && p?.discount.amount != null && !f
                        ? Q.intl.formatToPlainString(Q.t.IAybsG, {
                              discount: (0, ne.l9)(h, Number(p.discount.amount) / 100),
                          })
                        : null,
                I = p?.discount?.planIds,
                _ = nc(a, N, I, j, C),
                v = nc(n, N, I, A, b),
                P = p?.discount.userUsageLimitInterval,
                S = p?.discount.userUsageLimit ?? tj.OJ,
                y = !l || _ || v || null == T ? null : (0, nn.Cj)(T, !1, r),
                D = !v || m,
                M = (function (e) {
                    let { skuId: t, monthlyHasDiscount: s, isMonthlyPlanDisabled: i } = e;
                    return t !== tj.pe.TIER_2 ? null : s && !i ? tj.En[t] : tj.zE[t];
                })({ skuId: t, monthlyHasDiscount: v, isMonthlyPlanDisabled: m }),
                L = null == s || (s === n && m) ? M : s,
                U = [
                    {
                        value: a,
                        primaryText: Q.intl.string(Q.t["/Q4HRN"]),
                        primarySubText:
                            (_
                                ? no({
                                      expectedUsageInterval: tj.Ff.YEAR,
                                      usageInterval: P,
                                      discountDuration: S,
                                      regularPrice: C,
                                      discountedPrice: j,
                                  })
                                : null) ?? y,
                        secondaryText: _ ? j : C,
                        secondarySubText: _ ? C : null,
                        badgeText: _ ? R : null,
                        useGradientSelectedBorder: l && (d || _ || D),
                        isDisabled: g,
                    },
                    {
                        value: n,
                        primaryText: Q.intl.string(Q.t.DKzs96),
                        primarySubText: v
                            ? no({
                                  expectedUsageInterval: tj.Ff.MONTH,
                                  usageInterval: P,
                                  discountDuration: S,
                                  regularPrice: b,
                                  discountedPrice: A,
                              })
                            : null,
                        secondaryText: v ? A : b,
                        secondarySubText: v ? b : null,
                        badgeText: v ? R : null,
                        useGradientSelectedBorder: l && (d || v),
                        isDisabled: g || m,
                    },
                ],
                k = L === a ? _ : L === n && v;
            return { planRadioOptions: U, selectedPlanId: L, setSelectedPlanId: i, shouldSuppressDiscountCta: N && !k };
        })({ skuId: t }),
        A = i && null == g ? "expressive" : "secondary",
        { buttonText: j } = (0, i7.A)({ subscriptionTier: t }),
        { subscribeButtonProps: E } = (0, i6.$)({
            subscriptionTier: t,
            variantOverride: A,
            buttonTextOverride: N ? j : void 0,
        }),
        T = (0, c.jsxs)(es.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nd.Ux,
            children: [
                (0, c.jsx)(es.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nd.MY,
                    children: (0, c.jsx)(K.D, {
                        variant: a ? "nitro-md" : "display-md",
                        color: n ? "text-strong" : "text-overlay-light",
                        className: a ? nd.ck : nd.JJ,
                        children: i ? Q.intl.string(Q.t.lG6a5x) : Q.intl.string(Q.t["t9uG/o"]),
                    }),
                }),
                (0, c.jsx)(es.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nd.qT,
                    children: i
                        ? (0, c.jsx)(i$.ZP, {
                              featureSet: i$.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: "text-md/medium",
                          })
                        : (0, c.jsx)(i$.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: "text-md/medium",
                          }),
                }),
                i && (0, c.jsx)(i8.K, {}),
                m
                    ? (0, c.jsx)("div", {
                          className: nd.qS,
                          role: "separator",
                          children: (0, c.jsx)(J.E, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              className: nd.ZV,
                              children: (function (e, t) {
                                  if (null == e || null == t) return null;
                                  switch (e) {
                                      case tj.WT.DAY:
                                          if (t % 7 == 0) return Q.intl.format(Q.t["1MYPH0"], { weeks: t / 7 });
                                          return Q.intl.format(Q.t.pYfIoO, { days: t });
                                      case tj.WT.MONTH:
                                          return Q.intl.format(Q.t["96hTLe"], { months: t });
                                      case tj.WT.YEAR:
                                          return Q.intl.format(Q.t.B0ZmdG, { years: t });
                                      default:
                                          return null;
                                  }
                              })(r.interval, r.intervalCount),
                          }),
                      })
                    : (0, c.jsx)("hr", { className: nd.yF }),
                (0, c.jsxs)("div", {
                    className: nd.qr,
                    children: [
                        (0, c.jsx)(i4, { planRadioOptions: p, value: f ?? "", onChange: (e) => h(e.value) }),
                        (0, c.jsx)(nu, { skuId: t, selectedPlanId: f, subscribeButtonProps: E }),
                    ],
                }),
            ],
        }),
        b = u()(nd.Nr, s, { [nd.Fw]: i });
    return i
        ? (0, c.jsxs)(X.h, {
              color: "nitro-pink",
              className: b,
              children: [
                  (0, c.jsx)("div", {
                      className: nd.kX,
                      "aria-hidden": !0,
                      children: (0, c.jsx)(i1, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                  }),
                  T,
              ],
          })
        : (0, c.jsx)("div", { className: b, children: T });
}
function nx(e) {
    let { className: t } = e,
        s = (0, sq.q)((0, sQ.Ay)()),
        i = (0, i2.c)("PlanSelectPremiumGroupCard"),
        n = (0, ef.p)(),
        a = null != n,
        l = nr(tj.pe.TIER_2),
        r = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        { avatarSrc: o, eventHandlers: d } = (0, eU.A)({ userId: r?.id, size: eD._3.SIZE_32, animateOnHover: !0 }),
        m = (0, x.bG)([ns.A], () => ns.A.get(tj.gD.PREMIUM_GROUP_MONTH)),
        p = (0, Y.N1)(tj.gD.PREMIUM_GROUP_MONTH),
        f = a
            ? Q.intl.format(iu.default["7j70dP"], {
                  percent: n.discount?.amount,
                  premiumGroupProductName: (0, id.DP)(),
              })
            : Q.intl.string(Q.t["2pG5Ga"]),
        h = (0, c.jsx)(i3.A, {
            subscriptionTier: tj.pe.TIER_2,
            initialPlanId: tj.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, c.jsx)(en.$, {
                    size: "md",
                    fullWidth: !0,
                    icon: ei.t,
                    text: f,
                    variant: "secondary",
                    onClick: t,
                });
            },
        }),
        N = null;
    if (a && null != p) N = p;
    else if (null != m)
        try {
            N = (0, ex.sS)(m, l, !1, !1, !1);
        } catch {
            N = null;
        }
    return (0, c.jsx)("div", {
        className: u()(nd.Nr, t),
        children: (0, c.jsxs)(es.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nd.Ux,
            children: [
                (0, c.jsxs)(es.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nd.MY,
                    children: [
                        (0, c.jsx)(K.D, {
                            variant: i ? "nitro-md" : "display-md",
                            color: s ? "text-strong" : "text-overlay-light",
                            className: i ? nd.ck : nd.JJ,
                            children: Q.intl.string(iu.default.eSKiXk),
                        }),
                        null != r &&
                            (0, c.jsxs)(es.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: nd.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: nd.uA,
                                        children: (0, c.jsx)(eM.eu, {
                                            src: o,
                                            size: eD._3.SIZE_32,
                                            "aria-hidden": !0,
                                            ...d,
                                        }),
                                    }),
                                    (0, c.jsx)(es.B, {
                                        direction: "horizontal",
                                        align: "center",
                                        justify: "center",
                                        gap: 0,
                                        fullWidth: !1,
                                        className: nd.VL,
                                        children: (0, c.jsxs)(J.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-default",
                                            children: ["+", id.LM],
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
                (0, c.jsx)(es.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nd.qT,
                    children: (0, c.jsx)(i$.Lg, { isApplicationHome: !0, textVariant: "text-md/medium" }),
                }),
                (0, c.jsx)("hr", { className: nd.yF }),
                (0, c.jsxs)("div", {
                    className: nd.qr,
                    children: [
                        (0, c.jsxs)("div", {
                            className: nd.ec,
                            children: [
                                (0, c.jsx)(J.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: Q.intl.string(iu.default.SvSwga),
                                }),
                                null == N
                                    ? (0, c.jsx)(g.y, { type: g.y.Type.PULSING_ELLIPSIS })
                                    : (0, c.jsx)(J.E, {
                                          tag: "span",
                                          variant: "heading-lg/semibold",
                                          color: s ? "text-strong" : "text-overlay-light",
                                          children: N,
                                      }),
                            ],
                        }),
                        h,
                    ],
                }),
            ],
        }),
    });
}
function ng(e) {
    let { innerRef: t, className: s } = e,
        { analyticsLocations: i } = (0, j.Ay)(A.A.PREMIUM_MARKETING_TIER_CARD),
        n = (0, i$.pw)(t),
        a = (0, io.PA)(),
        l = (0, x.bG)([el.Ay], () => el.Ay.useReducedMotion),
        r = { [nd.iR]: !l };
    return (0, c.jsx)(j.f5, {
        value: i,
        children: (0, c.jsxs)(es.B, {
            direction: "vertical",
            align: "center",
            gap: 32,
            fullWidth: !0,
            className: u()(nd.oB, s),
            children: [
                (0, c.jsx)(K.D, {
                    variant: "nitro-md",
                    color: "text-strong",
                    className: nd.op,
                    children: Q.intl.string(Q.t.vLz3Zs),
                }),
                (0, c.jsxs)("div", {
                    ref: n,
                    className: u()(nd.kR, { [nd.BQ]: a }),
                    children: [
                        (0, c.jsx)(nm, { skuId: tj.pe.TIER_0, className: u()(nd.rz, r) }),
                        (0, c.jsx)(nm, { skuId: tj.pe.TIER_2, className: u()(nd.Rv, r) }),
                        a && (0, c.jsx)(nx, { className: u()(nd.zz, r) }),
                    ],
                }),
            ],
        }),
    });
}
var np = s(226830),
    nf = s(366010),
    nh = s(303136);
let nN = function (e) {
    let t,
        { className: s } = e,
        i = (0, e9.TM)(),
        n = (0, nf.q)((0, sQ.Ay)());
    return (
        (t = i
            ? n
                ? "https://cdn.discordapp.com/assets/content/06ad5b3e9274c7e75f135129da3141ef42681698d3c0cf79b8c83e8526c2064f.mov"
                : "https://cdn.discordapp.com/assets/content/e306e75bdcd95e261e8d501c2cc6674bf183ff83e53b8dcae4e7bfa98d15c273.mov"
            : n
              ? "https://cdn.discordapp.com/assets/content/2b403885861e2c1a8268fbdb8ba90a93b72fab9937dd1cdad47e68f814969dac.webm"
              : "https://cdn.discordapp.com/assets/content/5412744d944cb3bf22279ee7741dbdca87bd644fa128adcfd2d50ae56543d7c9.webm"),
        (0, c.jsx)("div", {
            className: s,
            children: (0, c.jsx)(
                nh.A,
                {
                    fallbackImage: n
                        ? "https://cdn.discordapp.com/assets/content/6ddb7f92b6f26f24c70cc7bf84e11bb423378d47cd111866af3980b332bad336.png"
                        : "https://cdn.discordapp.com/assets/content/acbc696c59f02098ff0014edaf0ded799884a3fefed7f20bcdb6cf038bba0542.png",
                    children: (0, c.jsx)("source", { src: t }),
                },
                t,
            ),
        })
    );
};
var nA =
        (((r = {}).HOME = "home"),
        (r.WHATS_NEW = "whatsNew"),
        (r.BEST_OF_NITRO = "bestOfNitro"),
        (r.PLANS = "plans"),
        (r.COMPARE = "compare"),
        r),
    nj = s(352756);
let nE = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i } = e,
        n = (0, te.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        a = { section: eZ.JJy.MARKETING_FLOATING_CTA };
    return (0, c.jsx)(e4.animated.div, {
        className: nj.i,
        style: n,
        "data-mtctest-ignore": "true",
        children: (0, c.jsxs)("div", {
            className: nj.U,
            children: [
                (0, c.jsx)(eR.A, {
                    size: "md",
                    subscriptionTier: s,
                    hasActivePromotion: !!i,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: a,
                }),
                (0, c.jsx)(q.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var nT = s(573710);
let nb = function () {
    let e = (0, e5.bG)([el.Ay], () => el.Ay.useReducedMotion);
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)("div", {
                className: nT.BI,
                children: (0, c.jsx)(tn, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: ts.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, c.jsx)("img", {
                        src: "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
                        alt: "",
                        className: nT.Q,
                    }),
                }),
            }),
            (0, c.jsx)(tl, {
                isMotionReduced: e,
                boltContainerClassName: nT.nJ,
                carContainerClassName: nT.IN,
                hammerContainerClassName: nT.Gj,
                keyContainerClassName: nT.FV,
                starContainerClassName: nT.E1,
                boltAssetClassName: nT.j7,
                carAssetClassName: nT.or,
                hammerAssetClassName: nT.Wv,
                keyAssetClassName: nT.rs,
                starAssetClassName: nT.OY,
            }),
        ],
    });
};
var nC = s(989756);
function nR(e) {
    let { ref: t, ...s } = e,
        { analyticsLocations: i } = (0, j.Ay)(A.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, c.jsx)(j.f5, {
        value: i,
        children: (0, c.jsx)("div", {
            ref: t,
            className: nC.kL,
            children: (0, c.jsxs)("div", {
                className: nC.hQ,
                children: [
                    (0, c.jsx)(nb, {}),
                    (0, c.jsx)(K.D, {
                        variant: "nitro-md",
                        color: "text-strong",
                        className: nC.RH,
                        children: Q.intl.string(Q.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
}
nR.displayName = "PremiumMarketingFooter";
var nI = s(939249);
let n_ = function (e) {
    let { navBarSections: t, activeSectionId: s } = e,
        i = {
            [nA.HOME]: Q.intl.string(Q.t.uGRXjS),
            [nA.WHATS_NEW]: Q.intl.string(Q.t["mfcR/v"]),
            [nA.BEST_OF_NITRO]: Q.intl.string(Q.t.xQKkE8),
            [nA.PLANS]: Q.intl.string(Q.t.wyNMnm),
            [nA.COMPARE]: Q.intl.string(Q.t.pwD7If),
        },
        n = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        a = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, c.jsx)(tv.A, {
        className: ty.TQ,
        transparent: !0,
        children: (0, c.jsxs)("div", {
            className: ty.Wc,
            children: [
                (0, c.jsxs)("div", {
                    className: ty.wG,
                    children: [
                        (0, c.jsx)(ei.t, { className: ty.nE, colorClass: ty.oG }),
                        (0, c.jsx)("div", {
                            className: ty.zc,
                            role: "tablist",
                            "aria-label": Q.intl.string(Q.t.O9MiXY),
                            children: a.map((e) => {
                                let t = s === e.id,
                                    n = i[e.id];
                                return (0, c.jsxs)(
                                    nI.D,
                                    {
                                        role: "tab",
                                        "aria-selected": t,
                                        className: ty.S0,
                                        onClick: e.scrollToSection,
                                        children: [
                                            (0, c.jsx)(J.E, {
                                                variant: "text-sm/medium",
                                                color: "text-strong",
                                                children: n,
                                            }),
                                            t && (0, c.jsx)("div", { className: ty.W0 }),
                                        ],
                                    },
                                    n,
                                );
                            }),
                        }),
                    ],
                }),
                (0, c.jsxs)("div", {
                    className: ty.MQ,
                    children: [
                        null != n && (0, c.jsx)(tS.l, { size: "sm", location: A.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                        (0, c.jsx)(q.A, { size: "sm", variant: "overlay-secondary" }),
                    ],
                }),
            ],
        }),
    });
};
var nv = s(713271),
    nP = s(704333),
    nS = s(414499),
    ny = s(597770),
    nD = s(500060),
    nM = s(866665),
    nO = s(406860),
    nL = s(870975),
    nU = s(698834);
function nk() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, nO.A)({ boxType: tV.$, thirdPartyPartner: "xbox" }),
        s = [
            { icon: nP.B, text: Q.intl.string(tY.default.MUypiB) },
            { icon: nS.h, text: Q.intl.string(tY.default.ec5Rdd) },
            { icon: ny.GiftIcon, text: Q.intl.string(tY.default["9t2CzW"]), tooltip: tY.default.AyECej },
            { icon: nD.o, text: Q.intl.string(tY.default.R7YJAY) },
        ];
    return (0, c.jsx)(G.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, c.jsx)("div", {
            ref: e,
            className: nU.iE,
            children: (0, c.jsxs)("div", {
                className: nU.Nr,
                children: [
                    (0, c.jsxs)("div", {
                        className: nU.j,
                        children: [
                            (0, c.jsx)("div", { className: nU._g }),
                            (0, c.jsx)("div", { className: nU.$h }),
                            (0, c.jsx)("div", { className: nU.Rv }),
                            (0, c.jsx)("div", { className: nU.Lw }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: nU.CT,
                        children: [
                            (0, c.jsxs)("div", {
                                className: nU.Qs,
                                children: [
                                    (0, c.jsxs)("div", {
                                        children: [
                                            (0, c.jsx)(K.D, {
                                                variant: "heading-xxl/bold",
                                                color: "text-strong",
                                                className: nU.R_,
                                                children: Q.intl.string(tY.default.rkt1aw),
                                            }),
                                            (0, c.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, c.jsxs)(
                                                            "div",
                                                            {
                                                                className: nU.yf,
                                                                children: [
                                                                    (0, c.jsx)(t, {
                                                                        size: "sm",
                                                                        color: "var(--icon-strong)",
                                                                    }),
                                                                    (0, c.jsx)(J.E, {
                                                                        variant: "text-md/medium",
                                                                        color: "text-strong",
                                                                        children: s,
                                                                    }),
                                                                    null != i &&
                                                                        (0, c.jsx)("div", {
                                                                            className: nU.Jn,
                                                                            children: (0, c.jsx)(nM.m, {
                                                                                text: Q.intl.string(i),
                                                                                position: "top",
                                                                                children: (0, c.jsx)(
                                                                                    tU.CircleInformationIcon,
                                                                                    {
                                                                                        size: "xxs",
                                                                                        color: "var(--icon-default)",
                                                                                    },
                                                                                ),
                                                                            }),
                                                                        }),
                                                                ],
                                                            },
                                                            s,
                                                        );
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: nU.xF,
                                                        children: (0, c.jsx)(eR.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: tj.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: nU.WE,
                                        children: (0, c.jsx)(J.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: Q.intl.format(tY.default.KDKdWi, { termsLink: (0, nL.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, c.jsx)("div", {
                                className: nU.r1,
                                children: (0, c.jsx)("img", {
                                    className: nU.wm,
                                    src: "https://cdn.discordapp.com/assets/content/183a222feae2555e7a057002bbcae445e70efa78fb204d353c9c93b4a1f210d4.png",
                                    alt: "Xbox Game Pass",
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var nG = s(750338),
    nw = s(639031),
    nB = s(505051);
function nH(e) {
    let {
        className: t,
        boxLayout: s,
        title: i,
        shouldLoadVideo: n,
        isReducedMotion: a,
        startLeftAligned: l = !1,
        highlightBento: r,
    } = e;
    return (0, c.jsxs)("div", {
        className: u()(nB.boxBackdrop, t),
        children: [
            (0, c.jsx)(K.D, {
                className: nB.bentoSectionHeader,
                variant: "nitro-md",
                color: "text-strong",
                children: i,
            }),
            null != r && (0, c.jsx)("div", { className: nB.highlightBento, children: r }),
            (0, c.jsx)("div", {
                className: nB.bentoBoxesGrid,
                children: s.map((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = nw.A0.SMALL;
                            break;
                        case 2:
                            s = nw.A0.MEDIUM;
                            break;
                        default:
                            s = nw.A0.LARGE;
                    }
                    return (0, c.jsx)(c.Fragment, {
                        children: e.map((e) =>
                            (0, c.jsx)(
                                nG.A,
                                { index: t + +!!l, ...e, size: s, shouldLoadVideo: n, isReducedMotion: a },
                                e.name,
                            ),
                        ),
                    });
                }),
            }),
        ],
    });
}
let nF = o.memo(function (e) {
        let t = (0, tO.b)("premium_marketing_bento"),
            s = (0, sx.mh)({ location: "premium_marketing_bento" }),
            i = t && !s,
            { whatsNewBoxes: n } = (0, nw.Ay)(i);
        return (0, c.jsx)(nH, {
            boxLayout: n,
            title: Q.intl.string(Q.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: i ? (0, c.jsx)(nk, {}) : null,
            ...e,
        });
    }),
    nV = o.memo(function (e) {
        let { bestOfBoxes: t } = (0, nw.Ay)();
        return (0, c.jsx)(nH, { boxLayout: t, title: Q.intl.string(Q.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    nz = (0, su.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var nW = s(236834),
    nY = s(540504);
function nX(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eU.A)({ userId: t?.id, size: eD._3.SIZE_24, animateOnHover: !0 });
    return (0, c.jsx)("div", {
        className: nY.$6,
        children: (0, c.jsxs)("div", {
            className: nY.sc,
            children: [
                (0, c.jsx)("div", {
                    className: nY.kR,
                    children: (0, c.jsx)(eM.eu, { src: s, "aria-label": t.username, size: eD._3.SIZE_32, ...i }),
                }),
                (0, c.jsx)(K.D, {
                    variant: "heading-sm/normal",
                    className: nY.FS,
                    color: "text-strong",
                    children: Q.intl.format(Q.t.IqxblS, { username: null != t.globalName ? t.globalName : t.username }),
                }),
            ],
        }),
    });
}
var nK = s(579245),
    nJ = s(369805);
let nq = function () {
    let e = (0, nJ.A)(void 0, { includesPremiumGroup: !0 });
    return null == e ? null : (0, c.jsx)(eT, { text: e });
};
function nQ() {
    let e = (0, x.bG)([ns.A], () => ns.A.getForSkuAndInterval((0, ex.mH)(tj.pe.TIER_0), tj.WT.MONTH));
    return null != e ? (0, ex.sS)(e) : "\u2026";
}
var nZ = s(508556);
let n$ = function (e) {
    let { containerVisibilityPercentage: t } = e,
        s = (0, e5.bG)([el.Ay], () => el.Ay.useReducedMotion),
        i = (0, e9.TM)();
    return (0, c.jsxs)("div", {
        "aria-hidden": !0,
        className: nZ.YU,
        children: [
            (0, c.jsx)(to, {
                supportHEVCAlpha: i,
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                containerClassName: nZ.wG,
                assetClassName: nZ.lu,
            }),
            (0, c.jsx)(tl, {
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                boltContainerClassName: nZ.nJ,
                carContainerClassName: nZ.IN,
                hammerContainerClassName: nZ.Gj,
                keyContainerClassName: nZ.FV,
                starContainerClassName: nZ.E1,
                boltAssetClassName: nZ.j7,
                carAssetClassName: nZ.or,
                hammerAssetClassName: nZ.Wv,
                keyAssetClassName: nZ.rs,
                starAssetClassName: nZ.OY,
            }),
        ],
    });
};
var n0 = s(14057);
let n1 = o.memo(function (e) {
    let { className: t, subscriptionTier: s, isEligibleForBogoPromotion: i, ref: n } = e,
        { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        l = nQ(),
        r = nz.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
        o = (0, nW.A)(),
        d = null != o,
        { visibilityPercentageRef: m, visibilityPercentage: g } = ej(!(0, x.bG)([el.Ay], () => el.Ay.useReducedMotion)),
        p = (0, iJ.b)(),
        f = !d && p.length > 0,
        h = (0, eN.c)(ee.C.MARKETING_PAGE_BANNER),
        N = null != h && "marketingPageBanner" === h.properties.properties.oneofKind,
        E = (0, ni.ar)() && !N,
        T = (0, ef.O)(),
        b = (null != T && tj.U4.includes(T.discountId)) || N;
    return (0, c.jsx)(j.f5, {
        value: a,
        children: (0, c.jsx)("div", {
            ref: n,
            className: u()(n0.kL, t),
            "data-testid": "marketing-page-hero-header",
            children: (0, c.jsx)("div", {
                ref: m,
                children: (0, c.jsxs)("div", {
                    className: n0.hQ,
                    children: [
                        (0, c.jsx)(n$, { containerVisibilityPercentage: g }),
                        E && (0, c.jsx)(nq, {}),
                        (0, c.jsx)("div", {
                            className: n0.s8,
                            children: (0, c.jsx)(eB.F, {
                                forceLevel: 1,
                                children: (0, c.jsx)(K.D, {
                                    variant: "nitro-md",
                                    color: "text-strong",
                                    className: n0.wx,
                                    children: Q.intl.string(Q.t.YCZldK),
                                }),
                            }),
                        }),
                        (0, c.jsxs)("div", {
                            className: n0.rf,
                            children: [
                                d && (0, c.jsx)("div", { className: n0.eZ, children: (0, c.jsx)(nX, { referrer: o }) }),
                                f &&
                                    (0, c.jsx)("div", {
                                        className: n0.Qn,
                                        children: (0, c.jsx)(nK.A, {
                                            textColor: "text-strong",
                                            smallerText: !1,
                                            isApplicationHome: !0,
                                            enablePremiumBrandRefresh: !0,
                                        }),
                                    }),
                                (0, c.jsxs)("div", {
                                    className: E ? n0.es : n0.UJ,
                                    children: [
                                        (0, c.jsx)(eR.A, {
                                            size: "md",
                                            fullWidth: E,
                                            hasActivePromotion: !!i,
                                            subscriptionTier: b && null == s ? tj.pe.NONE : s,
                                            buttonTextOverride: b ? Q.intl.string(Q.t["2pG5Ga"]) : void 0,
                                        }),
                                        !E && (0, c.jsx)(q.A, { variant: "secondary", size: "md" }),
                                    ],
                                }),
                                (0, c.jsx)("div", {
                                    className: n0.iQ,
                                    children: (0, c.jsx)(J.E, {
                                        color: "text-muted",
                                        variant: "text-xs/medium",
                                        children: r
                                            ? Q.intl.string(Q.t.jHqrJW)
                                            : Q.intl.format(Q.t.kt9wxs, { cheapestMonthlyPrice: l }),
                                    }),
                                }),
                                null != h &&
                                    "marketingPageBanner" === h.properties.properties.oneofKind &&
                                    (0, c.jsx)(eb.x, {
                                        componentId: h.id,
                                        promotionId: h.promotionId,
                                        promotionBannerMarketingComponentFields:
                                            h.properties.properties.marketingPageBanner,
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
        }),
    });
});
var n2 = s(820081),
    n3 = s(140735),
    n6 = s(401432),
    n7 = s(580630),
    n8 = s(795269),
    n5 = s(701974),
    n9 = s(55647),
    n4 = s(202600);
function ae(e) {
    let { includes: t } = e;
    return t
        ? (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(n2.B, { size: "sm", color: eJ.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(n3.A, { children: Q.intl.string(Q.t["tq+6t/"]) }),
              ],
          })
        : (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(n6.a, { size: "xs", color: eJ.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(n3.A, { children: Q.intl.string(Q.t.l4qZrp) }),
              ],
          });
}
function at(e) {
    let { label: t, tier0ColumnData: s, tier2ColumnData: i } = e;
    return (0, c.jsxs)("tr", {
        className: u()(n9.nM, n9.WQ),
        children: [
            (0, c.jsx)("th", {
                scope: "row",
                className: n9.nx,
                children: (0, c.jsx)(J.E, { variant: "text-md/medium", children: t }),
            }),
            (0, c.jsx)("td", {
                className: n9.Hn,
                children:
                    null != s.text
                        ? (0, c.jsx)(J.E, { variant: "text-md/medium", children: s.text })
                        : (0, c.jsx)(ae, { includes: !!s.includes }),
            }),
            (0, c.jsx)("td", {
                className: n9.Hn,
                children:
                    null != i.text
                        ? (0, c.jsx)(J.E, { variant: "text-md/medium", children: i.text })
                        : (0, c.jsx)(ae, { includes: !!i.includes }),
            }),
        ],
    });
}
function as(e) {
    let { title: t, subtitle: s, rows: i } = e;
    return (0, c.jsxs)("tbody", {
        children: [
            (0, c.jsx)("tr", {
                className: u()(n9.nM, n9.Gf),
                children: (0, c.jsxs)("td", {
                    className: n9.nx,
                    colSpan: 3,
                    children: [
                        (0, c.jsx)(K.D, { variant: "heading-lg/bold", children: t }),
                        null != s && (0, c.jsx)(J.E, { variant: "text-xs/medium", children: s }),
                    ],
                }),
            }),
            i.map((e) => (0, c.jsx)(at, { ...e }, e.id)),
        ],
    });
}
function ai(e) {
    let { premiumType: t, priceString: s } = e,
        i = t === tj.PremiumTypes.TIER_0 ? Q.intl.string(Q.t.tUbSDK) : Q.intl.string(Q.t.Ipxkog);
    return (0, c.jsxs)("div", {
        className: n9.nn,
        children: [
            (0, c.jsxs)("div", {
                className: n9.KS,
                children: [
                    (0, c.jsx)(ei.t, { colorClass: n9.oG }),
                    (0, c.jsx)(K.D, { variant: "heading-sm/semibold", children: i }),
                ],
            }),
            (0, c.jsx)(K.D, { variant: "heading-sm/semibold", children: s }),
        ],
    });
}
function an(e) {
    let { tier0Price: t, tier2Price: s, shouldUseDiscountPrice: i, tier2DiscountedPriceString: n } = e,
        a = i ? n : (0, n7.$g)(s.amount, s.currency);
    return (0, c.jsx)("thead", {
        children: (0, c.jsxs)("tr", {
            className: n9.U1,
            children: [
                (0, c.jsx)("th", {
                    scope: "col",
                    className: n9.Cr,
                    children: (0, c.jsx)(K.D, { variant: "heading-xl/bold", children: Q.intl.string(Q.t.ED4UVD) }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: n9.Hn,
                    children: (0, c.jsx)(ai, {
                        premiumType: tj.PremiumTypes.TIER_0,
                        priceString: (0, n7.$g)(t.amount, t.currency),
                    }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: n9.Hn,
                    children: (0, c.jsx)(ai, { premiumType: tj.PremiumTypes.TIER_2, priceString: a }),
                }),
            ],
        }),
    });
}
let aa = function (e) {
        let t,
            { className: s, hidePill: i = !1, selectedPlanTier: n = tj.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            l = (0, eh.V)(),
            r = l?.subscriptionTrial?.skuId,
            d = (0, ef.O)(),
            m = (0, Y.YJ)(d),
            x = null != d && (0, Y.U9)(d, tj.pe.TIER_2) && m === tj.gD.PREMIUM_MONTH_TIER_2,
            g = (0, Y.N1)(m),
            p = null != g ? `${g}/${(0, ex.FJ)(tj.WT.MONTH)}` : "",
            f = (0, ex.JM)(tj.gD.PREMIUM_MONTH_TIER_0),
            h = (0, ex.JM)(tj.gD.PREMIUM_MONTH_TIER_2),
            N = (function () {
                let e = (0, tO.b)("premium_marketing_comparison"),
                    t = [
                        {
                            id: 10,
                            label: Q.intl.string(Q.t["svn/YX"]),
                            tier0ColumnData: { includes: !0 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 7,
                            label: Q.intl.string(Q.t.ID5B6Z),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 13,
                            label: Q.intl.string(Q.t["PBUrx/"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 22,
                            label: Q.intl.string(n5.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    s = null,
                    i = [],
                    { shouldShowBonusOrbsUX: n, multiplier: a } = (0, s8.lk)(ii.rE.NITRO_HOME_MARKETING),
                    { enabled: l } = ss.A.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: r } = (0, si.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    });
                return (
                    e &&
                        ((s = {
                            id: 23,
                            title: Q.intl.string(Q.t.NG1e6l),
                            subtitle: Q.intl.format(tY.default.uJcbMv, {
                                termsLink: em.A.getArticleURL(eZ.MVz.NITRO_2_POINT_0),
                            }),
                            rows: [
                                {
                                    id: 24,
                                    label: Q.intl.string(tY.default.OpOEmk),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        }),
                        l &&
                            s.rows.push({
                                id: 25,
                                label: Q.intl.string(tY.default.Q0A42h),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        r &&
                            s.rows.push({
                                id: 26,
                                label: Q.intl.string(sh.default["gc2sa/"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        n &&
                            i.push({
                                id: 27,
                                label: Q.intl.formatToPlainString(Q.t.Uhemob, { bonusOrbMultiplier: a }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        i.push({
                            id: 28,
                            label: Q.intl.string(ie.default["20tmSN"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        })),
                    [
                        ...(null != s ? [s] : []),
                        { id: 17, title: Q.intl.string(Q.t.Ij3Zmv), rows: t },
                        {
                            id: 18,
                            title: Q.intl.string(Q.t.Wme3nX),
                            rows: [
                                {
                                    id: 0,
                                    label: Q.intl.string(Q.t.LrUABv),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 1,
                                    label: Q.intl.string(Q.t.DmfiwT),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 2,
                                    label: Q.intl.string(Q.t.Uukj4o),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 12,
                                    label: Q.intl.string(Q.t.NIKDqG),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 9,
                                    label: Q.intl.string(Q.t["5OAKhw"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        },
                        {
                            id: 19,
                            title: Q.intl.string(Q.t["6b3ydG"]),
                            rows: [
                                {
                                    id: 4,
                                    label: Q.intl.string(Q.t["ufhQC+"]),
                                    tier0ColumnData: { text: (0, ex.EJ)(tj.PremiumTypes.TIER_0) },
                                    tier2ColumnData: { text: (0, ex.EJ)(tj.PremiumTypes.TIER_2) },
                                },
                                {
                                    id: 11,
                                    label: Q.intl.string(Q.t.qQxxVc),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 3,
                                    label: Q.intl.string(Q.t["9kRJS8"]),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 21,
                                    label: Q.intl.string(Q.t["5BJqNF"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 5,
                                    label: Q.intl.string(Q.t.VwxlMw),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 6,
                                    label: Q.intl.formatToPlainString(Q.t.nyhDpw, {
                                        numBoosts: tj.M4,
                                        percentageOff: (0, n7.l9)(nt.default.locale, tj.oX / 100),
                                    }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 16,
                                    label: Q.intl.string(Q.t["93xPy3"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 8,
                                    label: Q.intl.string(Q.t.IzrZHz),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 20,
                                    label: Q.intl.string(Q.t.Rj1Qys),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                ...i,
                                {
                                    id: 15,
                                    label: Q.intl.formatToPlainString(Q.t["8crdzJ"], { maxChars: eZ.CS1 }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 14,
                                    label: Q.intl.string(Q.t["il8+nC"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        },
                    ]
                );
            })();
        if (i) t = null;
        else {
            let e = null != l ? Q.intl.string(Q.t.IBYG5U) : Q.intl.string(Q.t.TR2B4T);
            t = (0, c.jsx)(n8.R, { className: u()(n9.Io, n9.SP), text: e });
        }
        let E = r === tj.pe.TIER_0 || n === tj.PremiumTypes.TIER_0;
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsxs)("div", {
                className: u()(n9.zr, s),
                children: [
                    (0, c.jsx)(K.D, {
                        className: n9.Qw,
                        variant: "nitro-md",
                        color: "text-strong",
                        children: Q.intl.string(Q.t.DbPgAd),
                    }),
                    (0, c.jsxs)("div", {
                        className: n9.wY,
                        children: [
                            (0, c.jsxs)("div", {
                                className: u()(n9.fO, { [n9.Vd]: E, [n9.hA]: !E }),
                                children: [
                                    !E && t,
                                    (0, c.jsx)("div", { className: n9.xQ }),
                                    (0, c.jsxs)("div", {
                                        className: n9.wN,
                                        children: [
                                            (0, c.jsx)("img", { src: n4, alt: "", className: n9.kQ }),
                                            (0, c.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: n9.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, c.jsxs)("table", {
                                className: n9.tp,
                                children: [
                                    (0, c.jsx)(an, {
                                        tier0Price: f,
                                        tier2Price: h,
                                        shouldUseDiscountPrice: x,
                                        tier2DiscountedPriceString: p,
                                    }),
                                    N.map((e) => (0, o.createElement)(as, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    al = function (e) {
        let { scrollOffset: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
            s = (0, o.useCallback)(
                (e) => {
                    let s = r.current[e];
                    null != s &&
                        ((s.style.scrollMarginTop = `${t}px`),
                        s.scrollIntoView({ behavior: "smooth", block: "start" }));
                },
                [t],
            ),
            [i, n] = (0, o.useState)(Object.fromEntries(e.map((e) => [e, !1]))),
            [a, l] = (0, o.useState)(e[0]);
        (0, o.useEffect)(() => {
            let e = Object.keys(i).filter((e) => i[e]);
            e.length > 0 && l(e[0]);
        }, [i]);
        let r = (0, o.useRef)({});
        return (
            (0, o.useEffect)(() => {
                let e = new IntersectionObserver((e) => {
                    e.forEach((e) => {
                        n((t) => ({ ...t, [e.target.id]: e.isIntersecting }));
                    });
                });
                return (
                    Object.values(r.current).forEach((t) => {
                        null != t && e.observe(t);
                    }),
                    () => e.disconnect()
                );
            }, []),
            {
                navBarSections: (0, o.useMemo)(
                    () =>
                        e.reduce(
                            (e, t, i) => (
                                (e[t] = {
                                    id: t,
                                    ref: (e) => {
                                        ((r.current[t] = e), null != e && (e.id = t));
                                    },
                                    scrollToSection: () => s(t),
                                    order: i,
                                }),
                                e
                            ),
                            {},
                        ),
                    [e, s],
                ),
                activeSectionId: a,
                setActiveSectionId: l,
            }
        );
    };
var ar = s(818348),
    ac = s(773188);
function ao(e) {
    let { innerRef: t, isPlanSelectUiRedesignEnabled: s } = e;
    return s ? (0, c.jsx)(ng, { innerRef: t }) : (0, c.jsx)(np.jP, { innerRef: t });
}
let ad = () => {
    let e = (0, m.zy)();
    (0, v.P)(_);
    let t = o.useRef(null),
        s = o.useRef(null),
        i = o.useRef(null),
        n = o.useRef(null),
        a = o.useRef(null),
        l = o.useRef(null),
        r = (0, x.bG)([el.Ay], () => el.Ay.useReducedMotion),
        [d, g] = o.useState(!1),
        [p, f] = o.useState(!1),
        [h, N] = o.useState(!1),
        [E, T] = o.useState(!1),
        b = (0, x.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        C = null != b ? (0, ex.EL)(b) : null,
        R = null != C ? ex.Ay.getSkuIdForPlan(C.planId) : null,
        I = null !== R && R !== tj.pe.TIER_2 ? tj.pe.TIER_2 : null,
        { analyticsLocations: P } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
    o.useEffect(() => {
        T(!0);
    }, []);
    let S = (0, st.A0)({ location: "PremiumMarketingHome" }),
        { shouldShowBonusOrbsUX: y } = (0, s8.lk)(ii.rE.NITRO_HOME_MARKETING),
        D = y ? nv.N.COMBINED_ORBS : nv.N.ORB_REWARDS,
        M = o.useMemo(() => {
            let t = new URLSearchParams(e.search).get(iY.x);
            return "orbs" === t
                ? D
                : t === nv.N.THREE_P_PROMOTIONS
                  ? S
                      ? nv.N.CALL_OF_DUTY
                      : nv.N.THREE_P_PROMOTIONS
                  : t === nv.N.YOUTUBE
                    ? nv.N.YOUTUBE
                    : null;
        }, [S, e.search, D]);
    iW(M ?? "", null != M);
    let { navBarSections: U, activeSectionId: k } = al([nA.HOME, nA.WHATS_NEW, nA.BEST_OF_NITRO, nA.PLANS, nA.COMPARE]),
        { home: B, whatsNew: H, bestOfNitro: F, plans: V, compare: z } = U,
        W = (function (e) {
            let { location: t } = e;
            return iZ.useConfig({ location: t });
        })({ location: "PremiumMarketingHome" }),
        Y = (0, c.jsxs)("div", {
            ref: s,
            className: u()(ac.kL, ac.Gd, ac.iI, { [ac.Hq]: !r }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(nN, { className: ac.yH }),
                (0, c.jsx)(n_, { navBarSections: U, activeSectionId: k }),
                (0, c.jsxs)("div", {
                    className: ac.Qr,
                    children: [
                        (0, c.jsx)("div", {
                            className: ac.qY,
                            ref: B.ref,
                            children: (0, c.jsx)(G.L, {
                                innerRef: n,
                                onChange: (e) => g(e),
                                threshold: 0,
                                active: !0,
                                children: (0, c.jsx)(n1, { ref: n, subscriptionTier: I }),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: ac.So,
                            ref: H.ref,
                            children: (0, c.jsx)(nF, { shouldLoadVideo: E, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: ac.KQ,
                            ref: F.ref,
                            children: (0, c.jsx)(nV, { shouldLoadVideo: E, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: ac.s5,
                            ref: V.ref,
                            children: (0, c.jsx)(
                                G.L,
                                {
                                    innerRef: i,
                                    onChange: (e) => f(e),
                                    threshold: 0.1,
                                    active: !0,
                                    children: (0, c.jsx)(ao, { innerRef: i, isPlanSelectUiRedesignEnabled: W }),
                                },
                                W ? "plan-select-cards" : "tier-cards",
                            ),
                        }),
                        (0, c.jsx)("div", { className: ac.aC, ref: z.ref, children: (0, c.jsx)(aa, {}) }),
                    ],
                }),
                (0, c.jsx)(G.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !h &&
                            (L.default.track(eZ.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: P }),
                            N(!0));
                    },
                    children: (0, c.jsx)("div", { ref: a, className: ac._Z }),
                }),
                (0, c.jsx)(nR, { ref: l }),
                (0, c.jsx)(nE, { isVisible: !d && !p && E, subscriptionTier: I }),
                (0, c.jsx)(nN, { className: ac.MF }),
            ],
        });
    return (0, c.jsx)(tk.N, {
        theme: ar.NJ.DARK,
        children: (e) => (0, c.jsx)(w.Gt, { className: u()(ac.XG, e), ref: t, children: Y }),
    });
};
var au = s(862482),
    am = s(106512),
    ax = s(412260),
    ag = s(662367),
    ap = s(374403),
    af = s(396375),
    ah = s(370049);
let aN = function (e) {
    let t,
        s,
        { premiumSubscription: i, className: n, textColor: a } = e,
        l = (0, ni.ar)();
    if (null == i) return null;
    let r = null != i ? ex.Ay.getPremiumPlanItem(i) : null;
    if (
        (ex.Ay.isBoostOnlySubscription(i)
            ? (t = Q.intl.string(Q.t.Uj0md3))
            : null != r && (t = ex.Ay.getTierDisplayNameByPlanId(r.planId)),
        null == t)
    )
        return null;
    function o() {
        return (0, ed.openUserSettings)(eo.X.SUBSCRIPTIONS_PANEL);
    }
    let d = (null != r ? ex.Ay.getSkuIdForPlan(r.planId) : null) === tj.pe.TIER_1;
    return (
        (s = null != a ? a : l ? "text-overlay-light" : "text-default"),
        (0, c.jsxs)(tG.Z, {
            className: u()(ah.kL, n, { [ah.He]: l }),
            type: tG.Z.Types.CUSTOM,
            children: [
                (0, c.jsx)(t8.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: u()(ah.Kk, { [ah.Pt]: l }),
                }),
                (0, c.jsx)(J.E, {
                    variant: "text-sm/medium",
                    color: s,
                    children: d
                        ? Q.intl.format(Q.t["tYuv+T"], {
                              helpdeskArticle: em.A.getArticleURL(eZ.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: o,
                          })
                        : Q.intl.format(Q.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: o }),
                }),
            ],
        })
    );
};
var aA = s(978836);
let aj = function (e) {
    let { lifted: t = !1 } = e;
    return (0, c.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: u()(aA.zr, { [aA.N]: t }),
        children: [
            (0, c.jsx)("path", {
                d: "M1175.02 650.847C567.943 650.847 449.538 793 0 793V0H2338V529.841C1912.54 529.841 1705.84 650.847 1175.02 650.847Z",
                fill: "url(#paint0_linear_2548_770)",
            }),
            (0, c.jsx)("defs", {
                children: (0, c.jsxs)("linearGradient", {
                    id: "paint0_linear_2548_770",
                    x1: "2338",
                    y1: "-1.20115e-05",
                    x2: "2262.17",
                    y2: "975.136",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        (0, c.jsx)("stop", { className: aA.eq }),
                        (0, c.jsx)("stop", { offset: "0.339235", className: aA.l_ }),
                        (0, c.jsx)("stop", { offset: "0.492065", className: aA.sM }),
                        (0, c.jsx)("stop", { offset: "0.823236", className: aA.zi }),
                        (0, c.jsx)("stop", { offset: "0.899558", className: aA.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var aE = s(900797),
    aT = s(847374),
    ab = s(812993),
    aC = s(614268);
function aR(e) {
    let { className: t } = e;
    return (0, c.jsx)(ab.Lp, { className: u()(aC.T, t), text: Q.intl.string(Q.t.EYxi0o) });
}
var aI = s(904788),
    a_ = s(507553);
let av = "/assets/5b4fec8511c3676a.svg",
    aP = "/assets/0838bda6ecd20d91.svg";
function aS(e, t, s) {
    return (0, sq.M)(e) ? t : s;
}
var ay = s(872461);
function aD(e) {
    let { isShowingAll: t, onClick: s } = e;
    return (0, c.jsxs)(nI.D, {
        onClick: s,
        className: ay.customButton,
        children: [
            t ? Q.intl.string(Q.t.maZaN3) : Q.intl.string(Q.t["37C26f"]),
            t
                ? (0, c.jsx)(aE.t, { size: "md", color: "currentColor", className: ay.arrow })
                : (0, c.jsx)(aT.a, { size: "md", color: "currentColor", className: ay.arrow }),
        ],
    });
}
function aM(e) {
    let {
            title: t,
            description: s,
            className: i,
            imageSource: n,
            imageClassName: a,
            titleBadge: l,
            isNew: r = !1,
            isEarlyAccess: o = !1,
        } = e,
        { analyticsLocations: d } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD);
    return (0, c.jsx)(j.f5, {
        value: d,
        children: (0, c.jsxs)("div", {
            className: u()(ay.perkCard, i),
            children: [
                r
                    ? (0, c.jsx)(aI.A, {
                          className: ay.perkCardNewBadge,
                          shouldInheritBackgroundColor: !0,
                          shouldInheritTextColor: !0,
                      })
                    : null,
                o ? (0, c.jsx)(aR, { className: ay.perkCardEarlyAccessBadge }) : null,
                (0, c.jsx)("img", { src: n, alt: "", className: u()(a, ay.perksCardArt) }),
                (0, c.jsxs)("div", {
                    children: [
                        (0, c.jsxs)(K.D, {
                            variant: "heading-lg/extrabold",
                            className: ay.perkCardHeading,
                            children: [t, " ", l],
                        }),
                        (0, c.jsx)(J.E, {
                            variant: "text-sm/normal",
                            className: ay.perkCardDescription,
                            children: "function" == typeof s ? s(d) : s,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let aO = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [n, a] = o.useState(!1),
        l = (function (e) {
            let { styles: t } = e,
                i = (0, sQ.Ay)(),
                n = (0, s0.X)("usePerkCards"),
                a = (0, e5.bG)([D.default], () => {
                    let e = D.default.getCurrentUser();
                    return ex.Ay.canUsePremiumProfileCustomization(e);
                }),
                l = (0, ex.EJ)(tj.PremiumTypes.TIER_2, { useSpace: !1 });
            return {
                badge: {
                    title: Q.intl.string(Q.t.SS87rQ),
                    description: Q.intl.string(Q.t.oD6CRr),
                    imageSource: "/assets/70e295f6158d848f.png",
                    imageClassName: t.badgeImage,
                },
                badgeAlt: {
                    title: Q.intl.string(Q.t["5cYMu0"]),
                    description: Q.intl.string(Q.t.vxk9va),
                    imageSource: aS(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
                    imageClassName: t.badgeNewImage,
                },
                clientThemes: {
                    title: Q.intl.string(Q.t["/xvEMy"]),
                    description: Q.intl.string(Q.t.HKWdjj),
                    className: t.clientThemesCard,
                    imageSource: "/assets/37e0853800afb796.svg",
                    imageClassName: t.clientThemesImage,
                },
                customAppIcons: {
                    title: Q.intl.string(Q.t.OuItFi),
                    description: Q.intl.string(Q.t.mPyrE6),
                    imageSource:
                        "https://cdn.discordapp.com/assets/content/bca160c31fc5390dd2b41d90060edcc912a45f6ab3beab44ea79e16bf1f6530f.png",
                    imageClassName: t.customAppIconImage,
                },
                emoji: {
                    title: Q.intl.string(Q.t["R2IV/Q"]),
                    description: Q.intl.string(Q.t.R5Xag2),
                    imageSource: "/assets/d8edaaf5cb32248f.svg",
                    imageClassName: t.emojiImage,
                },
                guildProfile: {
                    title: Q.intl.string(Q.t.lKDhhJ),
                    description: (e) => {
                        if (n)
                            return a
                                ? Q.intl.formatToPlainString(Q.t.aj1pfZ, { onCheckItOutClick: () => {} })
                                : Q.intl.formatToPlainString(Q.t.d2oYS8, { onTryItOutClick: () => {} });
                        function t() {
                            {
                                let { openUserSettings: t } = s(766075);
                                (a_.A.setState({ scrollPosition: iy._F.TRY_IT_OUT }),
                                    t(eo.X.PROFILE_PANEL, { analyticsLocations: e }));
                            }
                        }
                        return a
                            ? Q.intl.format(Q.t.aj1pfZ, { onCheckItOutClick: t })
                            : Q.intl.format(Q.t.d2oYS8, { onTryItOutClick: t });
                    },
                    imageSource: "/assets/e1b6b45be1ce4b03.png",
                    imageClassName: t.perGuildProfilesImage,
                },
                longerMessages: {
                    title: Q.intl.string(Q.t.BUScid),
                    description: Q.intl.string(Q.t.vN6XpQ),
                    imageSource: aS(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: Q.intl.string(Q.t.Bv8Pfk),
                    description: Q.intl.string(Q.t.JMfaTU),
                    imageSource: aS(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: Q.intl.string(Q.t.Bv8Pfk),
                    description: Q.intl.string(Q.t.JMfaTU),
                    imageSource: aS(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: Q.intl.string(Q.t["lGcW+c"]),
                    description: Q.intl.string(Q.t["/fDyO+"]),
                    imageSource: aS(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: Q.intl.string(Q.t["1c+xwT"]),
                    description: Q.intl.string(Q.t.hJG8ZN),
                    imageSource: aS(i, aP, av),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: Q.intl.string(Q.t.tzdIwI),
                    description: Q.intl.string(Q.t.hJG8ZN),
                    imageSource: aS(i, aP, av),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: Q.intl.string(Q.t.tzdIwI),
                    description: Q.intl.string(Q.t.hJG8ZN),
                    imageSource: aS(i, aP, av),
                    imageClassName: t.stickersImage,
                },
                streaming: {
                    title: Q.intl.string(Q.t.RSXQYO),
                    description: Q.intl.string(Q.t.ymCPxp),
                    imageSource: "/assets/3bcdc01b26c7f691.svg",
                    imageClassName: t.streamingImage,
                },
                superReactions: {
                    title: Q.intl.string(Q.t["uZt5q/"]),
                    description: Q.intl.string(Q.t.ZK3ZoX),
                    imageSource: aS(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
                    imageClassName: t.superReactionsImage,
                },
                upload: {
                    title: Q.intl.formatToPlainString(Q.t.jqhAdL, { premiumMaxSize: l }),
                    description: Q.intl.formatToPlainString(Q.t["HI+cfm"], { premiumMaxSize: l }),
                    imageSource: "/assets/010eae6a6dbacc63.svg",
                    imageClassName: t.uploadImage,
                },
                videoBackground: {
                    title: Q.intl.string(Q.t.NaGpTf),
                    description: Q.intl.string(Q.t["A8O/Qw"]),
                    imageSource: aS(i, iD, iM),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: ay }),
        r = (0, e5.bG)([el.Ay], () => el.Ay.useReducedMotion),
        { analyticsLocations: d } = (0, j.Ay)(),
        m = [
            l.emoji,
            l.streaming,
            l.upload,
            l.customAppIcons,
            l.soundboard,
            l.videoBackground,
            l.superReactions,
            l.stickersPremiumPerk,
            l.badgeAlt,
        ];
    return (0, c.jsxs)("div", {
        className: u()(ay.perksContainer, t, {
            [ay.partiallyHidden]: i && !n,
            [ay.subscriberNitroHome]: i,
            [ay.reducedMotion]: r,
        }),
        children: [
            (0, c.jsx)(K.D, {
                variant: "heading-xxl/extrabold",
                className: ay.perksTitle,
                children: i ? Q.intl.string(Q.t.QX14gI) : Q.intl.string(Q.t.RGadQR),
            }),
            (0, c.jsx)("div", {
                className: u()(ay.perkCardContainer, { [ay.perkCardContainerExpanded]: n }),
                children: m.map((e) => null != e && (0, c.jsx)(aM, { ...e }, e.title)),
            }),
            i &&
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)("div", {
                            className: u()({ [ay.sizeGizmo]: !n, [ay.sizeGizmoExpanded]: n }),
                            children: (0, c.jsx)(aD, {
                                onClick: function () {
                                    (L.default.track(eZ.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: d,
                                        was_expanded: n,
                                    }),
                                        a(!n));
                                },
                                isShowingAll: n,
                            }),
                        }),
                        (0, c.jsx)("div", { className: u()(ay.cover, { [ay.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var aL = s(194509),
    aU = s(317587);
let ak = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: n } = e,
        a = (0, te.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: eZ.JJy.MARKETING_FLOATING_CTA },
        r = (0, sQ.Ay)(),
        o = (0, nf.M)(r);
    return (0, c.jsx)(e4.animated.div, {
        className: u()(aU.iE, { [aU.H8]: i, [aU.q4]: !t }),
        style: a,
        children: (0, c.jsxs)("div", {
            className: i ? aU.zW : aU.iJ,
            children: [
                (0, c.jsx)(af.A, {
                    color: o ? au.XD.BRAND_INVERTED : void 0,
                    className: u()(aU.x6, { [aU.Ph]: o }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: l,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: o ? void 0 : aU.PJ,
                }),
                (0, c.jsx)(aL.A, { className: aU.x6, premiumModalAnalyticsLocation: l }),
            ],
        }),
    });
};
var aG = s(386564);
function aw(e) {
    let {
            inOfferExperience: t,
            subscriptionTier: s,
            containerClassName: i,
            buttonClassName: n,
            isApplicationHome: a,
            isDarkMode: l,
            isEligibleForBogoPromotion: r,
        } = e,
        o = r
            ? (0, c.jsx)(af.A, {
                  color: l ? au.XD.BRAND_INVERTED : void 0,
                  className: u()(aG.x6, aG.Ph, n, { [aG.Sq]: t && a, [aG.MF]: a && !l }),
                  shinyButtonClassName: l ? void 0 : aG.PJ,
                  subscriptionTier: s,
                  hasActivePromotion: !0,
              })
            : (0, c.jsx)(af.A, {
                  color: l || !a ? au.XD.BRAND_INVERTED : void 0,
                  className: u()(aG.x6, aG.Ph, n, { [aG.Sq]: t && a, [aG.MF]: a && !l }),
                  subscriptionTier: s,
              }),
        d = t && a ? null : (0, c.jsx)(aL.A, { className: u()(aG.x6, n), color: a ? void 0 : au.XD.WHITE });
    return (0, c.jsxs)("div", { className: u()(aG.UD, i), children: [o, " ", d] });
}
function aB() {
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(aI.p, { className: aG.zd }),
            (0, c.jsx)(aI.p, { className: aG.G }),
            (0, c.jsx)(aI.p, { className: aG.zy }),
            (0, c.jsx)(aI.p, { className: aG.GX }),
        ],
    });
}
function aH(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        n = nQ();
    return (0, c.jsx)(J.E, {
        variant: t,
        color: i ? "text-subtle" : "text-overlay-light",
        className: u()(aG.h_, { [aG.If]: s, [aG.jn]: i }),
        children: Q.intl.format(Q.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let aF = function (e) {
    let { className: t, buttonClassName: s, subscriptionTier: i, isDarkMode: n, ref: a } = e,
        { analyticsLocations: l } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        r = (0, eg.QQ)(),
        o = (0, ni.ar)(),
        d = (0, iJ.b)().length > 0,
        m = Q.intl.string(Q.t.YCZldK);
    return (0, c.jsx)(j.f5, {
        value: l,
        children: (0, c.jsxs)("div", {
            ref: a,
            className: u()(aG.kL, t, { [aG.V1]: !o, [aG.Q4]: !o && d }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, c.jsxs)("div", {
                    className: o ? aG.I6 : aG.G1,
                    children: [
                        (0, c.jsx)(eB.F, {
                            forceLevel: 1,
                            children: (0, c.jsx)(K.D, {
                                variant: o ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: m,
                            }),
                        }),
                        d
                            ? (0, c.jsx)("div", {
                                  className: aG.DF,
                                  children: (0, c.jsx)(nK.A, { textColor: "text-overlay-light", smallerText: !o }),
                              })
                            : (0, c.jsx)(aH, {}),
                        r
                            ? (0, c.jsx)("div", {
                                  className: aG.UD,
                                  children: (0, c.jsx)(aL.A, { className: u()(aG.x6, s), color: au.XD.WHITE }),
                              })
                            : (0, c.jsx)(aw, {
                                  subscriptionTier: i,
                                  inOfferExperience: o,
                                  buttonClassName: s,
                                  isDarkMode: n,
                              }),
                        d && (0, c.jsx)(aH, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !o && (0, c.jsx)(aB, {}),
            ],
        }),
    });
};
var aV = s(22118),
    az = s(145359),
    aW = s(377770);
function aY(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, c.jsx)(aj, { lifted: t }) : null;
}
let aX = () => {
        (0, v.P)(_);
        let e = o.useRef(null),
            t = o.useRef(null),
            s = o.useRef(null),
            i = (0, sQ.Ay)(),
            n = (0, sq.M)(i),
            [a, l] = o.useState(!1),
            [r, d] = o.useState(!1),
            [m, g] = o.useState(!1),
            [p, f] = o.useState(!1),
            h = (0, x.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            N = null != h ? (0, ex.EL)(h) : null,
            E = null != N ? ex.Ay.getSkuIdForPlan(N.planId) : null,
            T = null !== E && E !== tj.pe.TIER_2 ? tj.pe.TIER_2 : null,
            b = (0, eh.V)(),
            C = b?.subscriptionTrial?.skuId,
            R = (0, ni.ar)(),
            I = (0, x.bG)([ax.A], () => {
                let e = ax.A.getMarketingComponentByType(ee.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            P = (0, ap.Q)(),
            { analyticsLocations: S } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
        o.useEffect(() => {
            f(!0);
        }, []);
        let y = (0, c.jsx)("div", {
            className: aW.dY,
            children: (0, c.jsx)(G.L, {
                innerRef: e,
                onChange: (e) => d(e),
                threshold: 0.1,
                active: !0,
                children: (0, c.jsx)(i$.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, c.jsx)(af.A, {
                        showIcon: !1,
                        subscriptionTier: tj.pe.TIER_0,
                        className: az.Ph,
                        look: au.pR.OUTLINED,
                        color: au.XD.WHITE,
                        buttonShineClassName: az.Qr,
                    }),
                    tier2CTAButton:
                        C === tj.pe.TIER_0
                            ? (0, c.jsx)(af.A, {
                                  showIcon: !1,
                                  subscriptionTier: tj.pe.TIER_2,
                                  className: az.Ph,
                                  look: au.pR.OUTLINED,
                                  color: au.XD.WHITE,
                                  buttonShineClassName: az.Qr,
                              })
                            : (0, c.jsx)(af.A, {
                                  color: au.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: tj.pe.TIER_2,
                                  className: az.Ph,
                                  textOptions: { textClassName: az.Ac },
                                  buttonShineClassName: az.Qr,
                              }),
                }),
            }),
        });
        return (0, c.jsxs)("div", {
            className: aW.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(aN, { premiumSubscription: h, className: u()(aW.R3, { [aW.aZ]: R }) }),
                R &&
                    (0, c.jsxs)("div", {
                        className: aW.n1,
                        children: [
                            (0, c.jsx)(aY, { inOfferExperience: R }),
                            (0, c.jsx)(tS.l, {
                                className: aW.ij,
                                size: "md",
                                location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                        ],
                    }),
                (0, c.jsxs)("div", {
                    className: u()({ [aW.V1]: !R }),
                    children: [
                        null != I && (0, c.jsx)(am.m, { className: aW.w$, config: I }),
                        (0, c.jsxs)("div", {
                            className: aW.iS,
                            children: [
                                !R &&
                                    (0, c.jsx)(tS.l, {
                                        className: aW.ij,
                                        size: "md",
                                        location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, c.jsx)(G.L, {
                                    innerRef: t,
                                    onChange: (e) => l(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, c.jsx)(aF, {
                                        ref: t,
                                        subscriptionTier: T,
                                        className: u()({ [aW.p7]: R, [aW.Pw]: R, [aW.Cv]: null != h }),
                                        isDarkMode: n,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != P && (0, c.jsx)("div", { className: aW.Ol, children: (0, c.jsx)(ag.I, { component: P }) }),
                y,
                (0, c.jsx)(aO, { className: aW.B_ }),
                (0, c.jsx)("div", { className: aW.aC, children: (0, c.jsx)(aV.A, { className: aW.JQ, hideCTAs: !0 }) }),
                (0, c.jsx)("div", { className: aW.hz }),
                (0, c.jsx)(ak, { isVisible: !a && !r && p, subscriptionTier: T, isApplicationHome: !1 }),
                (0, c.jsx)(G.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !m &&
                            (L.default.track(eZ.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: S }),
                            g(!0));
                    },
                    children: (0, c.jsx)("div", { ref: s, className: aW._Z }),
                }),
                (0, c.jsx)("img", {
                    src: iX,
                    className: aW.Kw,
                    width: 112,
                    height: 85,
                    alt: Q.intl.string(Q.t.X4IxWL),
                }),
            ],
        });
    },
    aK = function (e) {
        let { entrypoint: t } = e,
            s = (0, eh.V)(),
            i = (0, ef.O)({ includePremiumGroupDiscount: !0 }),
            n = (0, iQ.NF)({ trialOffer: s }),
            a = (0, iQ.Tp)(),
            l = (0, x.bG)([iq.A], () => iq.A.getReminderStateId());
        switch (
            (o.useEffect(() => {
                (!0 === n && (0, iQ.QG)(), !0 === a && (0, iQ.ne)(l), (null != s || null != i) && (0, k.u1)(s, i));
            }, [s, i, n, a, l]),
            t)
        ) {
            case tj.tU.UserSettings:
                return (0, c.jsx)(aX, {});
            case tj.tU.ApplicationStoreHome:
                return (0, c.jsx)(ad, {});
            default:
                return null;
        }
    };
var aJ = s(531296);
let aq = function (e) {
    let { entrypoint: t = tj.tU.UserSettings } = e;
    (0, v.P)(_);
    let s = (0, T.Hp)(),
        { sourceAnalyticsLocations: i, analyticsLocations: n } = (0, j.Ay)(A.A.PREMIUM_MARKETING),
        a = (0, x.bG)([O.A], () => O.A.hasFetchedSubscriptions()),
        l = (0, x.bG)([M.A], () => M.A.hasFetchedPaymentSources),
        r = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        d = r?.id,
        R = (0, eh.V)(),
        I = (0, ef.O)({ includePremiumGroupDiscount: !0 }),
        G = (0, b.Y)(tj.T7),
        [w, B] = o.useState(!0),
        H = o.useRef(0),
        F = (0, U.YE)(r, tj.PremiumTypes.TIER_2);
    ((0, iJ.b)(),
        o.useEffect(() => {
            p.h.wait(async () => {
                let e = Date.now();
                (await Promise.all([E.hP(), E.$o(), (0, f.zS)(null, null, eZ.tF5.DISCOVERY)]),
                    (H.current = Date.now() - e),
                    B(!1));
            });
        }, []),
        o.useEffect(() => {
            w ||
                L.default.track(eZ.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: i,
                    load_duration_ms: H.current,
                });
        }, [i, w]),
        o.useEffect(() => {
            s && (null != R || null != I) && (0, k.u1)(R, I);
        }, [s, R, I]));
    let V = (0, m.zy)(),
        z = o.useRef(!1),
        W = a && l && G,
        [Y, X] = o.useState(W);
    (W && !Y && X(!0),
        o.useEffect(() => {
            if (z.current || !W) return;
            let e = new URLSearchParams(V.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: tj.pe.TIER_0, nitro: tj.pe.TIER_2 },
                s = Object.hasOwn(t, e) ? t[e] : void 0;
            null != s &&
                ((z.current = !0),
                (0, S.bG)(eZ.BVt.APPLICATION_STORE),
                (0, P.A)({ subscriptionTier: s, analyticsLocations: n }));
        }, [W, V.search, n]));
    let K = (0, x.bG)([y.A], () => y.A.enabled),
        J = t === tj.tU.ApplicationStoreHome,
        q = K
            ? (0, c.jsx)(h.A, {})
            : s
              ? (0, c.jsx)(C.uK, {})
              : J && F
                ? (0, c.jsx)(j.f5, { value: n, children: (0, c.jsx)(iK, { userId: d }) })
                : Y
                  ? null
                  : (0, c.jsx)("div", { className: u()(aJ.kL, aJ.Lq), children: (0, c.jsx)(g.y, {}) });
    return null != q
        ? !K && !s && J && F
            ? q
            : (0, c.jsxs)(c.Fragment, { children: [J && (0, c.jsx)(N.A, {}), q] })
        : (0, c.jsx)(j.f5, { value: n, children: (0, c.jsx)(aK, { entrypoint: t }) });
};
