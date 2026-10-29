(i.d(t, { A: () => a2 }), i(323874), i(14289), i(35956), i(205816));
var s,
    n,
    a,
    l,
    r,
    c = i(477900),
    o = i(582128),
    d = i(503698),
    u = i.n(d),
    m = i(806163),
    x = i(17928),
    g = i(289873),
    p = i(73825),
    f = i(643891),
    h = i(107834),
    N = i(793574),
    A = i(688810),
    j = i(277984),
    E = i(86379),
    b = i(160946),
    T = i(545075),
    C = i(840251),
    R = i(688151);
let I = new C.E([], R.$G.OPEN_NITRO, { location: "open nitro tab/settings" });
var _ = i(611924),
    v = i(75678),
    P = i(976860),
    y = i(351906),
    S = i(287809),
    D = i(295405),
    M = i(166403),
    O = i(174459),
    U = i(474090),
    L = i(10392),
    k = i(269115),
    G = i(689175),
    w = i(961250),
    B = i(366505),
    H = i(321191),
    F = i(903209),
    V = i(131168),
    W = i(482589),
    z = i(511484),
    Y = i(315629),
    X = i(297264),
    K = i(834730),
    Z = i(65470),
    J = i(105292),
    q = i(719126);
let Q = function (e) {
    let { className: t, location: i, analyticsLocation: s } = e,
        { analyticsLocations: n } = (0, A.Ay)(i);
    return (0, c.jsx)(A.f5, {
        value: n,
        children: (0, c.jsxs)(Y.h, {
            className: u()(q.kL, q.pm, t),
            color: "purple",
            children: [
                (0, c.jsxs)("div", {
                    className: q.FS,
                    children: [
                        (0, c.jsx)(X.D, {
                            variant: "heading-xxl/bold",
                            className: q.R_,
                            children: J.intl.string(J.t.Ve9Ge6),
                        }),
                        (0, c.jsx)(K.E, { variant: "text-md/medium", children: J.intl.string(J.t.yQ06u1) }),
                        (0, c.jsx)("div", {
                            className: q.SB,
                            children: (0, c.jsx)(Z.A, {
                                buttonTextOverride: J.intl.string(J.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: s,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, c.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                    className: q._e,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
var $ = i(877624),
    ee = i(192308),
    et = i(331322),
    ei = i(403581),
    es = i(821609),
    en = i(502572),
    ea = i(775602),
    el = i(366999),
    er = i(531260),
    ec = i(780964),
    eo = i(766075),
    ed = i(786300),
    eu = i(975571),
    em = i(24482),
    ex = i(89366),
    eg = i(881489),
    ep = i(724651),
    ef = i(732280),
    eh = i(549996),
    eN = i(172218);
function eA() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, i] = (0, o.useState)(1),
        s = (0, o.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, eN.B)(
            (e) => {
                i(e.intersectionRatio);
            },
            s,
            e,
        ),
        visibilityPercentage: t,
    };
}
var ej = i(287763);
let eE = function (e) {
    let { text: t } = e;
    return (0, c.jsx)("div", {
        className: ej.i,
        children: (0, c.jsx)(K.E, { variant: "text-sm/bold", color: "text-overlay-light", children: t }),
    });
};
var eb = i(371764),
    eT = i(103411),
    eC = i(792656),
    eR = i(536637),
    eI = i.n(eR),
    e_ = i(496431),
    ev = i(850292);
let eP = function (e) {
    let { expiresAt: t, className: i, digitTextVariant: s = "text-md/medium" } = e,
        n = (0, e_.A)(eI()(t).toDate(), 1e3);
    if (null == n) return null;
    let { days: a, hours: l, minutes: r, seconds: o } = n,
        d = [
            { unitValue: a, unitType: "days" },
            { unitValue: l, unitType: "hours" },
            { unitValue: r, unitType: "minutes" },
            { unitValue: o, unitType: "seconds" },
        ];
    return (0, c.jsxs)("div", {
        className: u()(ev.Xl, i, { [ev.a3]: "text-lg/bold" === s }),
        children: [
            (0, c.jsx)(K.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: J.intl.string(J.t["/ARFVE"]),
            }),
            (0, c.jsx)("div", {
                className: ev.$R,
                children: d.map((e, t) =>
                    (function (e, t, i) {
                        let s,
                            [n, a] = 1 === (s = e.unitValue.toString()).length ? ["0", s[0]] : [s[0], s[1]];
                        return (0, c.jsxs)(c.Fragment, {
                            children: [
                                (0, c.jsxs)(
                                    "div",
                                    {
                                        className: ev.bh,
                                        children: [
                                            (0, c.jsxs)("div", {
                                                className: ev.kB,
                                                children: [
                                                    (0, c.jsx)("div", {
                                                        className: ev.B2,
                                                        children: (0, c.jsx)(K.E, {
                                                            variant: i,
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: ev.B2,
                                                        children: (0, c.jsx)(K.E, {
                                                            variant: i,
                                                            color: "text-strong",
                                                            children: a,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, c.jsx)(K.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-strong",
                                                children: (function (e) {
                                                    switch (e) {
                                                        case "days":
                                                            return J.intl.string(J.t.ixASa2);
                                                        case "hours":
                                                            return J.intl.string(J.t["8sNvNn"]);
                                                        case "minutes":
                                                            return J.intl.string(J.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return J.intl.string(J.t.JhaiLW);
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
                                    (0, c.jsx)(K.E, {
                                        className: ev.cV,
                                        variant: "text-lg/normal",
                                        color: "text-strong",
                                        children: ":",
                                    }),
                            ],
                        });
                    })(e, t === d.length - 1, s),
                ),
            }),
        ],
    });
};
var ey = i(473702),
    eS = i(778712),
    eD = i(97808),
    eM = i(609425),
    eO = i(660184),
    eU = i(854627),
    eL = i(427262),
    ek = i(938767);
function eG() {
    let e = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        t = (0, eM.A)(),
        { avatarSrc: i, avatarDecorationSrc: s, eventHandlers: n } = (0, eU.A)({ userId: e?.id, size: eS._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, eL.mG)(e);
    return (0, c.jsxs)("div", {
        className: ek.kL,
        children: [
            (0, c.jsx)("div", {
                className: ek.my,
                children: (0, c.jsx)(eD.eu, {
                    src: i,
                    avatarDecoration: s,
                    size: eS._3.SIZE_56,
                    "aria-label": a,
                    ...n,
                }),
            }),
            (0, c.jsx)("div", { className: ek.QC, children: (0, c.jsx)(eO.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var ew = i(707554),
    eB = i(628154);
let eH = function (e) {
    let { className: t, color: i = "text-strong", responsive: s = !0, variant: n = "nitro-lg", children: a } = e;
    return (0, c.jsx)(ew.F, {
        forceLevel: 1,
        children: (0, c.jsx)(X.D, { className: u()(eB.w, t, s && eB.n), variant: n, color: i, children: a }),
    });
};
var eF = i(62010),
    eV = i(815996),
    eW = i(557284),
    ez = i(744413),
    eY = i(478016),
    eX = i(318254),
    eK = i(661531),
    eZ = i(626031),
    eJ = i(197630);
i(232198);
var eq = i(652215),
    eQ = i(957457);
function e$(e) {
    let { nRewardsGranted: t, referralRewardType: i, className: s } = e;
    return t < 1
        ? null
        : i === eJ.xb.ORBS
          ? (0, c.jsx)(e0, { nRewardsGranted: t, className: s })
          : i === eJ.xb.DISCOUNT
            ? (0, c.jsx)(e1, { nRewardsGranted: t, className: s })
            : null;
}
function e0(e) {
    let { nRewardsGranted: t, className: i } = e,
        s = 5e3 * t,
        [n, a] = o.useState(0);
    return (
        o.useEffect(() => {
            a(s);
        }, [s]),
        (0, c.jsxs)(et.B, {
            direction: "horizontal",
            align: "center",
            gap: 0,
            fullWidth: !1,
            className: i,
            children: [
                (0, c.jsxs)("div", {
                    className: eQ.u,
                    "aria-label": String(s),
                    children: [
                        (0, c.jsx)(eX.C, { size: "xs", color: eK.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                        (0, c.jsx)(eZ.t, {
                            value: n,
                            onValueChange: eq.tEg,
                            onValueReached: eq.tEg,
                            targetTotalCounterTime: 800,
                            isRenderedWithoutLottieAnimation: !0,
                            textVariant: "text-sm/semibold",
                            textColor: "text-strong",
                            horizontalAlignment: "left",
                        }),
                    ],
                }),
                (0, c.jsx)(K.E, {
                    variant: "text-sm/medium",
                    color: "text-strong",
                    children: J.intl.string(J.t.UhguER),
                }),
            ],
        })
    );
}
function e1(e) {
    let { nRewardsGranted: t, className: i } = e;
    return (0, c.jsxs)(et.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        fullWidth: !1,
        className: i,
        "aria-label": J.intl.formatToPlainString(J.t["P//01n"], { discountPercent: 30, duration: t }),
        children: [
            (0, c.jsx)(eY.U, { size: "md", color: eK.A.colors.ICON_FEEDBACK_POSITIVE }),
            (0, c.jsx)(K.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: J.intl.format(J.t["P//01n"], { discountPercent: 30, duration: t }),
            }),
        ],
    });
}
var e2 = i(303682),
    e3 = i(758836),
    e7 = i(558992);
function e6(e) {
    let { className: t } = e,
        {
            referralSentUsers: i,
            nReferralsSent: s,
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
                children: (0, c.jsx)(ez.fx, {
                    nReferralsSent: s,
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
                            children: (0, c.jsx)(eF.E, { type: "beta", variant: "expressive" }),
                        }),
                    (0, c.jsxs)("div", {
                        className: e7.n4,
                        children: [
                            (0, c.jsx)(K.E, {
                                variant: d ? "text-md/bold" : "text-md/semibold",
                                color: "text-strong",
                                children: l,
                            }),
                            (0, c.jsx)(K.E, {
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
                                  (0, c.jsx)(ez.ZP, { referralSentUsers: i }),
                                  (0, c.jsx)(e$, { nRewardsGranted: o.numRewardGranted, referralRewardType: m }),
                              ],
                          })
                        : (0, c.jsx)(ez.ZP, { referralSentUsers: i, className: e7.t7 }),
                ],
            }),
            (0, c.jsx)(es.$, {
                variant: "primary",
                disabled: !g && (!1 === n || !0 === a),
                text: g ? J.intl.string(J.t.iw5Ccc) : J.intl.string(J.t.Lm2nFc),
                onClick: () =>
                    g
                        ? (0, eV.Cz)({
                              tab: e3.G2.ORBS,
                              analyticsLocations: [],
                              analyticsSource: N.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR,
                          })
                        : (0, ez.jM)({
                              startingScreen: e2.SelectFriendsModalScreens.SELECT_FRIENDS,
                              analyticsLocations: [],
                          }),
            }),
        ],
    });
}
var e8 = i(702841),
    e5 = i(676279),
    e9 = i(399513),
    e4 = i(717421),
    te = i(396583),
    tt = (((s = {}).SINE = "sine"), (s.COSINE = "cosine"), s),
    ti = (((n = {}).UP = "up"), (n.DOWN = "down"), n);
let ts = (e) => {
    let {
            blurAnimationData: t,
            scaleAnimationData: i,
            yAxisAnimationData: s,
            parallaxAnimationData: n,
            animateXAxisWiggle: a = !1,
            isMotionReduced: l = !1,
            animationSpeedScale: r = 1,
            children: d,
        } = e,
        u = (0, e4.z)(
            null != s ? { from: { y: 0 }, to: { y: 1 }, config: { duration: s.duration * r }, loop: !0 } : { y: 0 },
        ),
        m = s?.path === "sine" ? Math.sin : Math.cos,
        [x, g] = (0, o.useState)(1),
        p = (0, e4.z)(
            null != i
                ? {
                      from: { scale: x > 0 ? i.startScale : i.endScale },
                      to: { scale: x > 0 ? i.endScale : i.startScale },
                      config: { duration: i.duration * r },
                      onRest: () => g((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [f, h] = (0, o.useState)(1),
        N = (0, e4.z)(
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
        [b, T] = (0, o.useState)(1),
        C = (0, e4.z)({ xOffset: j, config: { tension: 10, friction: 10, duration: A } });
    return ((0, te.A)(() => {
        (E(b * (0.5 * Math.random() * 5 + 2.5)), T((e) => -1 * e));
    }, A),
    l)
        ? d
        : (0, c.jsx)(e9.animated.div, {
              style: {
                  transform: u.y?.to((e) => {
                      if (null == s) return "translateY(0px)";
                      let t = m(e * Math.PI * 2) * s.range,
                          i = 0;
                      if (null != n) {
                          let e = n.range * (1 - n.containerVisibilityPercentage);
                          i = "up" === n.pathDirection ? -e : e;
                      }
                      return `translateY(${t + i}px)`;
                  }),
                  translateX: a ? C.xOffset.to((e) => `${e}px`) : 0,
                  scale: p.scale,
                  filter: N.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != n && n.changeOpacity ? n.containerVisibilityPercentage : 1,
              },
              children: d,
          });
};
var tn = i(382168);
let ta = function (e) {
    let {
        isMotionReduced: t,
        containerVisibilityPercentage: i,
        boltContainerClassName: s,
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
            null != s &&
                (0, c.jsx)("div", {
                    className: u()(tn.nJ, s),
                    children: (0, c.jsx)(ts, {
                        blurAnimationData: { startBlurRadius: 10 * f, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tt.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: ti.UP,
                                      range: 125,
                                      containerVisibilityPercentage: i,
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
                    className: u()(tn.IN, n),
                    children: (0, c.jsx)(ts, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tt.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: ti.DOWN,
                                      range: 50,
                                      containerVisibilityPercentage: i,
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
                    className: u()(tn.Gj, a),
                    children: (0, c.jsx)(ts, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tt.SINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: ti.DOWN,
                                      range: 120,
                                      containerVisibilityPercentage: i,
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
                    className: u()(tn.FV, l),
                    children: (0, c.jsx)(ts, {
                        blurAnimationData: { startBlurRadius: 5 * f, endBlurRadius: 0, duration: 4e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tt.SINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: ti.UP,
                                      range: 200,
                                      containerVisibilityPercentage: i,
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
                    className: u()(tn.E1, r),
                    children: (0, c.jsx)(ts, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * f, duration: 3e3 },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: tt.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: ti.UP,
                                      range: 50,
                                      containerVisibilityPercentage: i,
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
var tl = i(607470);
let tr =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    tc = function (e) {
        let {
            supportHEVCAlpha: t,
            isMotionReduced: i,
            containerVisibilityPercentage: s,
            containerClassName: n,
            assetClassName: a,
            animationSpeedScale: l = 1,
        } = e;
        return i
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
                  children: (0, c.jsx)(ts, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                      yAxisAnimationData: { range: 20, duration: 4e3, path: tt.SINE },
                      parallaxAnimationData: {
                          pathDirection: ti.UP,
                          range: 200,
                          containerVisibilityPercentage: s,
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
                                tl.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: a,
                                    children: (0, c.jsx)("source", { src: tr }),
                                },
                                tr,
                            ),
                  }),
              });
    },
    to = function (e) {
        let {
                containerVisibilityPercentage: t,
                flyingWumpusContainerClassName: i,
                flyingWumpusAssetClassName: s,
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
            f = (0, e8.bG)([ea.Ay], () => ea.Ay.useReducedMotion),
            h = (0, e5.TM)();
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(tc, {
                    supportHEVCAlpha: h,
                    isMotionReduced: f,
                    containerVisibilityPercentage: t,
                    containerClassName: i,
                    assetClassName: s,
                    animationSpeedScale: p,
                }),
                (0, c.jsx)(ta, {
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
var td = i(942663);
let tu = function (e) {
    let { containerVisibilityPercentage: t, compact: i } = e;
    return (0, c.jsx)(to, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: u()(td.wG, i && td.Vx),
        flyingWumpusAssetClassName: u()(td.lu, i && td.ov),
        boltContainerClassName: u()(td.nJ, i && td.Wc),
        hammerContainerClassName: u()(td.Gj, i && td.XA),
        keyContainerClassName: u()(td.FV, i && td.oZ),
        starContainerClassName: u()(td.E1, i && td.LN),
        boltAssetClassName: u()(td.j7, i && td.QN),
        hammerAssetClassName: u()(td.Wv, i && td.B9),
        keyAssetClassName: u()(td.rs, i && td.I1),
        starAssetClassName: u()(td.OY, i && td.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var tm = (((a = {}).MORNING = "morning"), (a.AFTERNOON = "afternoon"), (a.EVENING = "evening"), a),
    tx = i(454273);
let tg = function (e) {
    let t,
        i,
        {
            className: s,
            headingTop: n,
            showPill: a,
            buttonVisibilityRef: l,
            shouldShowReferralProgressBar: r,
            marketingBanner: o,
            heroButtons: d,
        } = e,
        { visibilityPercentageRef: m, visibilityPercentage: g } = eA(!(0, x.bG)([ea.Ay], () => ea.Ay.useReducedMotion)),
        p =
            ((t = { [tm.MORNING]: J.t["Wvc/I+"], [tm.AFTERNOON]: J.t["d+0STx"], [tm.EVENING]: J.t.CqsxKI }),
            J.intl.string(
                t[
                    (i = new Date().getHours()) >= 5 && i < 12
                        ? tm.MORNING
                        : i >= 12 && i < 17
                          ? tm.AFTERNOON
                          : tm.EVENING
                ],
            )),
        f = o ?? (r ? (0, c.jsx)(e6, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tx.kL, tx.Eg, s),
        ref: l,
        children: (0, c.jsxs)("div", {
            className: u()(tx.W2, tx.HQ),
            ref: m,
            children: [
                (0, c.jsxs)(et.B, {
                    align: "start",
                    gap: 32,
                    className: tx.ZU,
                    children: [
                        a && n,
                        (0, c.jsxs)(et.B, {
                            align: "start",
                            gap: "lg",
                            children: [
                                (0, c.jsxs)(et.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, c.jsx)(eH, {
                                            className: tx.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            variant: "nitro-md",
                                            children: p,
                                        }),
                                        (0, c.jsx)(eG, {}),
                                    ],
                                }),
                                d,
                            ],
                        }),
                        f,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: tx.y3,
                    children: (0, c.jsx)(tu, { containerVisibilityPercentage: g, compact: null == f }),
                }),
            ],
        }),
    });
};
var tp = i(549926);
let tf = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(to, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: tp.wG,
        flyingWumpusAssetClassName: tp.lu,
        boltContainerClassName: tp.nJ,
        hammerContainerClassName: tp.Gj,
        keyContainerClassName: tp.FV,
        starContainerClassName: tp.E1,
        boltAssetClassName: tp.j7,
        hammerAssetClassName: tp.Wv,
        keyAssetClassName: tp.rs,
        starAssetClassName: tp.OY,
        animationSpeedScale: 1 / 0.7,
    });
};
var th = i(499126);
let tN = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(to, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: th.wG,
        flyingWumpusAssetClassName: th.lu,
        boltContainerClassName: th.nJ,
        hammerContainerClassName: th.Gj,
        keyContainerClassName: th.FV,
        starContainerClassName: th.E1,
        boltAssetClassName: th.j7,
        hammerAssetClassName: th.Wv,
        keyAssetClassName: th.rs,
        starAssetClassName: th.OY,
        animationSpeedScale: 1 / 0.7,
    });
};
var tA = i(202541);
function tj(e) {
    let { fpEndsAt: t, className: i, buttonVisibilityRef: s } = e,
        n = (0, eg.Zb)(t),
        { visibilityPercentageRef: a, visibilityPercentage: l } = eA(!(0, x.bG)([ea.Ay], () => ea.Ay.useReducedMotion));
    return (0, c.jsx)("div", {
        className: u()(tx.kL, i),
        ref: s,
        children: (0, c.jsxs)("div", {
            className: tx.Gs,
            ref: a,
            children: [
                (0, c.jsxs)(et.B, {
                    align: "start",
                    gap: 24,
                    className: tx.E2,
                    children: [
                        (0, c.jsxs)(et.B, {
                            align: "start",
                            gap: 12,
                            children: [
                                (0, c.jsx)(eE, { text: J.intl.string(J.t.yhldRB) }),
                                (0, c.jsx)(eH, { children: J.intl.format(J.t.FwjP6W, { days: n }) }),
                                (0, c.jsx)("div", {
                                    className: tx.X8,
                                    children: (0, c.jsx)(K.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: J.intl.string(J.t.Jf8KrT),
                                    }),
                                }),
                            ],
                        }),
                        (0, c.jsxs)(et.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            className: tx.oF,
                            children: [
                                (0, c.jsx)(eC.A, {
                                    size: "md",
                                    buttonTextOverride: J.intl.string(J.t["2+luBl"]),
                                    iconOverride: ei.t,
                                    variantOverride: "expressive",
                                }),
                                (0, c.jsx)(es.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: J.intl.string(J.t.Af7ye6),
                                    onClick: () => (0, eo.openUserSettings)(ec.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, c.jsx)("div", { className: tx.Hk, children: (0, c.jsx)(tN, { containerVisibilityPercentage: l }) }),
            ],
        }),
    });
}
function tE(e) {
    let {
            className: t,
            buttonVisibilityRef: s,
            userDiscountOffer: n,
            discountedPrice: a,
            premiumSubscription: l,
            analyticsLocations: r,
            headingTop: o,
            showPill: d,
            shouldShowReferralProgressBar: m,
            marketingBanner: g,
        } = e,
        { visibilityPercentageRef: p, visibilityPercentage: f } = eA(!(0, x.bG)([ea.Ay], () => ea.Ay.useReducedMotion)),
        h = g ?? (m ? (0, c.jsx)(e6, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tx.kL, tx.Eg, t),
        ref: s,
        children: (0, c.jsxs)("div", {
            className: u()(tx.W2, tx.HQ),
            ref: p,
            children: [
                (0, c.jsxs)(et.B, {
                    align: "start",
                    gap: 32,
                    className: u()(tx.ZU, tx.GW),
                    children: [
                        d && o,
                        null != n.expiresAt &&
                            (0, c.jsx)(eP, { expiresAt: n.expiresAt.toISOString(), digitTextVariant: "text-lg/bold" }),
                        (0, c.jsxs)(et.B, {
                            align: "start",
                            gap: 16,
                            children: [
                                (0, c.jsx)(eH, {
                                    children: J.intl.format(J.t["3yZP0G"], { percent: n.discount.amount }),
                                }),
                                null != a &&
                                    (0, c.jsx)(K.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: J.intl.format(J.t["3Q4wCy"], {
                                            discountedPrice: a,
                                            billingPeriod: (0, em.Ke)(n.discount.intervalType),
                                            numMonths: n.discount.intervalCount,
                                        }),
                                    }),
                            ],
                        }),
                        (0, c.jsxs)(et.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            wrap: !0,
                            children: [
                                (0, c.jsx)(es.$, {
                                    variant: "expressive",
                                    icon: ei.t,
                                    size: "md",
                                    text: J.intl.string(J.t.zrCzVB),
                                    onClick: () => {
                                        var e;
                                        return (
                                            (e = ey.g.CONFIRM_DISCOUNT),
                                            void (0, ee.openModalLazy)(async () => {
                                                let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                    await Promise.all([
                                                        i.e("489361"),
                                                        i.e("227853"),
                                                        i.e("470126"),
                                                        i.e("149697"),
                                                        i.e("128804"),
                                                        i.e("60882"),
                                                        i.e("71151"),
                                                        i.e("286615"),
                                                        i.e("70866"),
                                                        i.e("311541"),
                                                        i.e("795854"),
                                                        i.e("870088"),
                                                        i.e("300641"),
                                                        i.e("747802"),
                                                        i.e("966366"),
                                                        i.e("84978"),
                                                        i.e("153302"),
                                                        i.e("807003"),
                                                        i.e("88683"),
                                                        i.e("983513"),
                                                        i.e("216806"),
                                                        i.e("310734"),
                                                        i.e("348567"),
                                                        i.e("452075"),
                                                        i.e("900277"),
                                                        i.e("127962"),
                                                        i.e("517888"),
                                                        i.e("959880"),
                                                        i.e("174016"),
                                                        i.e("907167"),
                                                        i.e("11301"),
                                                        i.e("861060"),
                                                        i.e("364827"),
                                                        i.e("217229"),
                                                        i.e("910486"),
                                                        i.e("678157"),
                                                        i.e("147134"),
                                                        i.e("40291"),
                                                        i.e("544571"),
                                                        i.e("523276"),
                                                        i.e("812042"),
                                                        i.e("729963"),
                                                        i.e("830938"),
                                                        i.e("538513"),
                                                        i.e("56366"),
                                                        i.e("122990"),
                                                        i.e("50097"),
                                                        i.e("594161"),
                                                        i.e("435432"),
                                                        i.e("80347"),
                                                        i.e("680166"),
                                                    ]).then(i.bind(i, 293061));
                                                return (i) =>
                                                    (0, c.jsx)(t, {
                                                        ...i,
                                                        analyticsLocations: r,
                                                        initialStep: e,
                                                        premiumSubscription: l,
                                                    });
                                            })
                                        );
                                    },
                                }),
                                (0, c.jsx)(Z.A, {
                                    variant: "secondary",
                                    size: "md",
                                    buttonTextOverride: J.intl.string(J.t["3KomGa"]),
                                }),
                            ],
                        }),
                        h,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: u()(tx.y3, tx.Xx),
                    children: (0, c.jsx)(tf, { containerVisibilityPercentage: f }),
                }),
            ],
        }),
    });
}
function tb(e) {
    let { className: t, isInReverseTrial: i, shouldShowReferralProgressBar: s } = e,
        {
            headingTop: n,
            showPill: a,
            shouldShowChurnVariant: l,
            premiumSubscription: r,
            userDiscountOffer: o,
            discountedPrice: d,
            buttonVisibilityRef: u,
        } = tC(),
        { analyticsLocations: m } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        x = (0, eh.c)($.C.MARKETING_PAGE_BANNER),
        g = null != r && r.status === eq.Dmq.CANCELED,
        p = null;
    null != x &&
        "marketingPageBanner" === x.properties.properties.oneofKind &&
        (p = (0, c.jsx)(eb.x, {
            componentId: x.id,
            promotionId: x.promotionId,
            promotionBannerMarketingComponentFields: x.properties.properties.marketingPageBanner,
        }));
    let f = (0, ef.V)(),
        h = (0, ep.O)(),
        j = (0, z.U9)(h, tA.pe.TIER_2) ? tA.pe.TIER_2 : void 0,
        E = null != r && r.status !== eq.Dmq.ACCOUNT_HOLD && r.hasAnyPremiumNitro,
        b = (0, er.A)(),
        T = b.isFractionalPremiumActive && !E && null == p && !l;
    if (i) return (0, c.jsx)(tj, { fpEndsAt: b.currentEntitlementEndsAt, className: t, buttonVisibilityRef: u });
    if (!g) {
        let e = T
            ? (0, c.jsxs)("div", {
                  className: tx.UJ,
                  children: [
                      (0, c.jsx)(eC.A, { size: "md", subscriptionTier: f?.subscriptionTrial?.skuId ?? j }),
                      (0, c.jsx)(Z.A, {
                          variant: "secondary",
                          size: "md",
                          buttonTextOverride: J.intl.string(J.t["3KomGa"]),
                      }),
                  ],
              })
            : null;
        return (0, c.jsx)(tg, {
            className: t,
            headingTop: n,
            showPill: a,
            buttonVisibilityRef: u,
            shouldShowReferralProgressBar: s,
            marketingBanner: p,
            heroButtons: e,
        });
    }
    return l && null != o && null != r
        ? (0, c.jsx)(tE, {
              className: t,
              buttonVisibilityRef: u,
              userDiscountOffer: o,
              discountedPrice: d,
              premiumSubscription: r,
              analyticsLocations: m,
              headingTop: n,
              showPill: a,
              shouldShowReferralProgressBar: s,
              marketingBanner: p,
          })
        : (0, c.jsx)(tg, {
              className: t,
              headingTop: n,
              showPill: a,
              buttonVisibilityRef: u,
              shouldShowReferralProgressBar: s,
              marketingBanner: p,
          });
}
let [tT, tC] = (0, ed.A)(),
    tR = function (e) {
        let { className: t, buttonVisibilityRef: i, userDiscountOffer: s, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, eg.ds)(),
            r = (0, ex.QQ)(),
            d = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            u = null != d && d.status === eq.Dmq.CANCELED && null != s,
            m = r && !u,
            g = J.intl.string(J.t.qYKftX),
            p = (0, eT.m)(),
            { fractionalState: f, endsAt: h } = (0, er.A)(),
            j = (0, el.Ay)(h, el.yE.CREDITS_ENDS_IN),
            E = f !== tA.xc.NONE && !l;
        E && (m = !0);
        let b = o.useMemo(() => {
                if (!E) return (0, c.jsx)(eE, { text: g });
                let e = J.intl.format(J.t["yR+oDD"], {
                    helpCenterLink: eu.A.getArticleURL(eq.MVz.FRACTIONAL_PREMIUM_ABOUT),
                });
                return (0, c.jsx)(en.A, {
                    text: e,
                    "aria-label": e.toString(),
                    tooltipClassName: tx.YL,
                    position: "right",
                    children: (e) =>
                        (0, c.jsx)("div", {
                            ...e,
                            className: tx.V_,
                            children: (0, c.jsx)("div", { className: tx.eL, children: (0, c.jsx)(eE, { text: j }) }),
                        }),
                });
            }, [E, g, j]),
            T = o.useMemo(
                () => ({
                    headingTop: b,
                    showPill: m,
                    shouldShowChurnVariant: u,
                    premiumSubscription: d,
                    userDiscountOffer: s,
                    discountedPrice: n,
                    buttonVisibilityRef: i,
                }),
                [b, m, u, d, s, n, i],
            );
        return (0, c.jsx)(A.f5, {
            value: a,
            children: (0, c.jsx)(tT.Provider, {
                value: T,
                children: (0, c.jsx)(tb, { className: t, isInReverseTrial: l, shouldShowReferralProgressBar: p }),
            }),
        });
    };
var tI = i(820284),
    t_ = i(742589),
    tv = i(392943),
    tP = i(285373),
    ty = i(603202),
    tS = i(673992);
let tD = function () {
    return (0, c.jsx)(tI.A, {
        section: eq.JJy.NAVIGATION,
        children: (0, c.jsx)(t_.A, {
            className: u()(ty.TQ, tS.C$),
            transparent: !0,
            role: "navigation",
            children: (0, c.jsxs)("div", {
                className: ty.Wc,
                children: [
                    (0, c.jsxs)("div", {
                        className: tS.wk,
                        children: [
                            (0, c.jsx)(ei.t, { colorClass: tS.tr }),
                            (0, c.jsx)("span", {
                                role: "img",
                                "aria-label": J.intl.string(J.t.Ipxkog),
                                className: tS.Ss,
                                children: (0, c.jsx)(tv.A, { color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: ty.MQ,
                        children: [
                            (0, c.jsx)(tP.l, { size: "sm", location: N.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB }),
                            (0, c.jsx)(Z.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var tM = i(325499),
    tO = i(562708),
    tU = i(885574),
    tL = i(43990),
    tk = i(993077),
    tG = i(139286),
    tw = i(872725),
    tB = i(920050),
    tH = i(51965),
    tF = i(375776),
    tV = i(727811),
    tW = i(222652),
    tz = i(553875),
    tY = i(934353);
function tX(e) {
    let { openRewardModal: t } = e,
        i = (0, tW.z)();
    if (i.kind === tW.N.SUBSCRIBE)
        return (0, c.jsxs)("div", {
            className: tY.R$,
            children: [
                (0, c.jsx)(eC.A, {
                    defaultTextOverride: i.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: tA.pe.TIER_2,
                }),
                (0, c.jsx)(es.$, { variant: "secondary", size: "md", text: J.intl.string(J.t.hvVgAZ), onClick: t }),
            ],
        });
    let s =
        i.claimStatus === tV.P.CLAIMED
            ? { text: J.intl.string(tz.default.Plwzgf) }
            : { text: J.intl.string(J.t.hvVgAZ) };
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: tY.R$,
                children: [
                    (0, c.jsx)(tH.A, {
                        variant: "overlay-primary",
                        size: "md",
                        text: i.text,
                        icon: i.icon,
                        iconPosition: i.iconPosition,
                        onClick: i.onClick,
                        disabled: i.disabled,
                        loading: i.loading,
                    }),
                    (0, c.jsx)(es.$, {
                        variant: "secondary",
                        size: "md",
                        ...s,
                        onClick: t,
                        disabled: i.requestInProgress,
                    }),
                ],
            }),
            i.claimStatus === tV.P.CLAIM_IN_PROGRESS &&
                (0, c.jsxs)("div", {
                    className: tY.ed,
                    children: [
                        (0, c.jsx)(tU.CircleInformationIcon, { size: "xs", color: "var(--text-subtle)" }),
                        (0, c.jsx)(K.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: J.intl.string(tz.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function tK(e) {
    let { glowing: t = !1 } = e;
    (0, tG.A)({
        type: tO.ImpressionTypes.VIEW,
        name: tO.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: tB.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: s } = (0, A.Ay)(N.A.CROISSANT_PREMIUM_HERO_CARD),
        n = o.useCallback(() => {
            (0, ee.openModalLazy)(async () => {
                let { default: e } = await Promise.all([i.e("878140"), i.e("813088")]).then(i.bind(i, 347171));
                return (t) => (0, c.jsx)(e, { ...t, sourceAnalyticsLocations: s });
            });
        }, [s]);
    return (0, c.jsx)(tL.N, {
        theme: eq.NJ8.DARK,
        children: (e) =>
            (0, c.jsx)(A.f5, {
                value: s,
                children: (0, c.jsx)("div", {
                    className: u()(e, tY.kL),
                    children: (0, c.jsx)(tw.A, {
                        cardType: tk.s.CUSTOM,
                        cardClassName: tY.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, c.jsxs)("div", {
                            className: tY.XF,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: tY.j,
                                    children: [
                                        (0, c.jsx)("div", { className: tY._g }),
                                        (0, c.jsx)("div", { className: tY.$h }),
                                        (0, c.jsx)("div", { className: tY.Rv }),
                                        (0, c.jsx)("div", { className: tY.Lw }),
                                        (0, c.jsx)("div", { className: tY.mR }),
                                    ],
                                }),
                                (0, c.jsxs)("div", {
                                    className: tY.Qs,
                                    children: [
                                        (0, c.jsx)("img", {
                                            className: tY.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, c.jsx)(X.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: tY.DD,
                                            children: J.intl.string(tz.default.RGT513),
                                        }),
                                        (0, c.jsx)(K.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: tY.h_,
                                            children: J.intl.string(tz.default["+pTnsf"]),
                                        }),
                                        (0, c.jsx)(tX, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var tZ = i(254202),
    tJ = i(112992);
function tq(e) {
    let { className: t, containerClassName: i, glowing: s } = e,
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
    return (0, c.jsx)(tZ.S, {
        id: tB.XBOX_PREMIUM_PERK_CARD_ID,
        title: J.intl.string(tz.default.UVL9tD),
        description: J.intl.string(tz.default["I+IXr0"]),
        ...l,
        className: t,
        containerClassName: i,
        glowing: s,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, c.jsx)("img", { src: tJ.A, alt: "Xbox Game Pass" }),
        blurTint: "#054B16",
        analyticsOptions: { thirdPartyPartner: "xbox" },
    });
}
function tQ(e) {
    let { analyticsLocations: t } = (0, A.Ay)(N.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, c.jsx)(A.f5, { value: t, children: (0, c.jsx)(tq, { ...e }) });
}
var t$ = i(744082),
    t0 = i(261995),
    t1 = i(722793),
    t2 = i(700556),
    t3 = i(821874);
function t7(e) {
    let { id: t, sectionClassName: i, heading: s, beforeGrid: n, grid: a, gridClassName: l } = e,
        r = t3.Ui;
    return (0, c.jsxs)("div", {
        id: t,
        className: i,
        children: [
            s,
            n,
            null != a ? (0, c.jsx)("div", { className: u()(r, null != n && t2.Jx, l), children: a }) : null,
        ],
    });
}
var t6 = i(517846),
    t8 = i(509434),
    t5 = i(695366),
    t9 = i(27620),
    t4 = i(44724),
    ie = i(371794);
let it = new Date(Date.UTC(2026, 9, 23));
var ii = i(945810);
let is = (0, ii.mj)({
    kind: "user",
    name: "2026-07-call-of-duty-3pp-expired",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ia = i(398523),
    il = i(881373),
    ir = i(721157),
    ic = i(555393),
    io = i(325652),
    id = i(852218),
    iu = i(52530),
    im = i(164832),
    ix = i(280761),
    ig = i(881296);
let ip = (0, ii.mj)({
    kind: "user",
    name: "2026-09-rust-3p",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ih = i(612413);
let iN = new Date(Date.UTC(2026, 10, 5));
var iA = i(188275),
    ij = i(310235),
    iE = i(334551),
    ib = i(287388),
    iT = i(5717),
    iC = i(762359),
    iR = i(635088),
    iI = i(679502),
    i_ = i(762493);
let iv = "xgpp";
function iP(e) {
    let { card: t, backgroundAssetUrl: i, blurTint: s, glowing: n, autoClickCta: a } = e;
    return (0, c.jsx)("div", {
        className: t2.JE,
        children: (0, c.jsx)(tZ.S, {
            ...t,
            backgroundAssetUrl: i,
            blurTint: s ?? void 0,
            pillText: void 0,
            featured: !0,
            glowing: n,
            autoClickCta: a,
        }),
    });
}
function iy(e) {
    let { glowingSectionId: t, glowingPerkId: i } = e,
        s = (0, tM.b)("premium_subscriber_home_rewards");
    (0, t$.A)(tA.tv);
    let {
            expiredCallOfDutyCard: n,
            logitechCard: a,
            rustCard: l,
            steelseriesCard: r,
            youtubeCard: d,
            riotCampaignCard: m,
            macaronCard: x,
            codeBlurpleCard: g,
        } = (function () {
            let e,
                t,
                { analyticsLocations: i } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
                s = ((e = (0, iu.eh)()), (t = (0, iu.fR)()), null != e ? e : t),
                n = (0, ix.U)(),
                a = (function (e) {
                    let { location: t } = e,
                        { enabled: i } = is.useConfig({ location: t });
                    return i;
                })({ location: "useHardwarePartnerPerkCards" }),
                l = (0, il.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
                r = ia.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
                d = (0, ih.mh)({ location: "useThirdPartyPartnerPerkCards" }),
                u = (function (e) {
                    let { location: t } = e,
                        { enabled: i } = ip.useConfig({ location: t });
                    return i;
                })({ location: "useThirdPartyPartnerPerkCards" }),
                m = null === (0, ic.N)(),
                x = (0, t0.fY)({ location: "useThirdPartyPartnerPerkCards" }),
                { currentDate: g, nDaysInMonth: p } = (0, o.useMemo)(() => {
                    let e = new Date();
                    return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
                }, []);
            return (0, o.useMemo)(() => {
                let e =
                        a && null == s
                            ? {
                                  id: tB.CALL_OF_DUTY_3PP_EXPIRED_CARD_ID,
                                  title: J.intl.string(ij.default["IcD/7p"]),
                                  description: J.intl.formatToPlainString(ij.default.hausFi, {
                                      date: new Intl.DateTimeFormat(J.intl.currentLocale, {
                                          day: "numeric",
                                          month: "long",
                                          timeZone: "UTC",
                                      }).format(it),
                                  }),
                                  isThirdPartyPerk: !0,
                                  phase: io.L.EXPIRED,
                                  pillText: J.intl.string(ij.default.fxF0Jz),
                                  caption: (0, c.jsx)("img", { src: iR.A, alt: "Call of Duty: MW4" }),
                                  backgroundAssetUrl:
                                      "https://cdn.discordapp.com/assets/content/74dd725dde373bfdbced9606d5201ed2c555fc895f4da644a8de314de6906be3.webp",
                              }
                            : null,
                    t = l
                        ? {
                              id: tB.LOGITECH_3PP_CARD_ID,
                              title: J.intl.string(iE.default.OlObRa),
                              description: J.intl.format(iE.default.ZGOJ8R, {
                                  discountPercent: il.aW,
                                  termsUrl: eu.A.getArticleURL(eq.MVz.LOGITECH_PROMOTION),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              progress: g.getDate() / p,
                              ctaText: J.intl.string(J.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, im.P)({
                                      partnerIds: [id.XY],
                                      title: J.intl.string(iE.default["2I7nK+"]),
                                      subtitle: J.intl.format(iE.default.W8jOD0, {
                                          termsUrl: eu.A.getArticleURL(eq.MVz.LOGITECH_PROMOTION),
                                      }),
                                      analyticsLocations: i,
                                  }),
                              blurTint: "#2E213D",
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                              caption: (0, c.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                                  alt: "Logitech",
                              }),
                              analyticsOptions: { thirdPartyPartner: id.XY },
                              ctaDisabled: m,
                              ctaLoading: m,
                          }
                        : null,
                    o = r
                        ? {
                              id: tB.RECURRING_3P_PROMOTIONS_CARD_ID,
                              title: J.intl.string(J.t.m7PucM),
                              description: J.intl.format(J.t["1Zw6xL"], {}),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              caption: (0, c.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                              progress: g.getDate() / p,
                              ctaText: J.intl.string(J.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, im.P)({
                                      partnerIds: [id.KS],
                                      title: J.intl.string(J.t["7ioAjs"]),
                                      subtitle: J.intl.format(J.t.LOYRxB, {
                                          helpCenterLink: eu.A.getArticleURL(eq.MVz.RECURRING_PROMOTION),
                                      }),
                                      analyticsLocations: i,
                                  }),
                              blurTint: "#2E213D",
                              analyticsOptions: { thirdPartyPartner: id.KS },
                              ctaDisabled: m,
                              ctaLoading: m,
                          }
                        : null,
                    f = u
                        ? {
                              id: tB.RUST_3PP_CARD_ID,
                              title: J.intl.string(iT.default.gQ1ctg),
                              description: J.intl.format(iT.default.p7LH43, {
                                  endDate: new Intl.DateTimeFormat(J.intl.currentLocale, {
                                      day: "numeric",
                                      month: "short",
                                      timeZone: "UTC",
                                  }).format(iN),
                                  termsUrl: eu.A.getArticleURL(eq.MVz.RUST_PROMOTION),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              pillText: J.intl.string(J.t.y2b7CA),
                              caption: (0, c.jsx)("img", {
                                  src: (0, ie.YE)(iA.IG, "1499479228243251242", 128),
                                  alt: "Rust",
                              }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/b67b65e666d1350c52ff2abab5ac4eb205fa6545f63665aef16beeaa0efef060.webp",
                              blurTint: "#2E213D",
                              ctaText: J.intl.string(iT.default.NmBRGV),
                              ctaIcon: t8.I,
                              ctaIconPosition: "end",
                              onCtaClick: () => (0, t4.default)({ applicationId: iA.IG }),
                              analyticsOptions: { thirdPartyPartner: "rust" },
                              ctaDisabled: m,
                              ctaLoading: m,
                          }
                        : null;
                return {
                    expiredCallOfDutyCard: e,
                    logitechCard: t,
                    rustCard: f,
                    steelseriesCard: o,
                    youtubeCard: d
                        ? {
                              id: tB.YOUTUBE_3PP_CARD_ID,
                              title: J.intl.string(iC.default["BdIVB+"]),
                              description: J.intl.format(iC.default["3jY5i3"], {
                                  helpCenterUrl: eu.A.getArticleURL(eq.MVz.YOUTUBE_PROMOTION),
                              }),
                              isThirdPartyPerk: !0,
                              subscriptionRequired: !0,
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/e07fd53d33f374f567964ff5b7843f09bc6943288891cfed6e573df04ba9741c.webp",
                              blurTint: "#18181C",
                              caption: (0, c.jsx)("img", { src: iI.A, alt: "YouTube Premium" }),
                              ctaText: J.intl.string(ij.default.fcopjf),
                              onCtaClick: () =>
                                  (0, im.P)({
                                      partnerIds: [id.NC],
                                      analyticsLocations: i,
                                      title: J.intl.string(iC.default.TDZUui),
                                      subtitle: J.intl.format(iC.default.BTLkvw, {
                                          helpCenterUrl: eu.A.getArticleURL(eq.MVz.YOUTUBE_PROMOTION),
                                      }),
                                      modalTeaser: {
                                          title: J.intl.format(iC.default.J8CVYT, {
                                              helpCenterUrl: eu.A.getArticleURL(
                                                  eq.MVz.YOUTUBE_PROMOTION_CURRENT_SUBSCRIBER,
                                              ),
                                          }),
                                          titleVariant: "text-sm/medium",
                                          icon: t5.E,
                                      },
                                      onClose: () => {
                                          t9.Ay.fireSurveyAction(t6.w.YOUTUBE_3PP_MODAL_DISMISSED);
                                      },
                                  }),
                              analyticsOptions: { thirdPartyPartner: id.NC },
                              ctaDisabled: m,
                              ctaLoading: m,
                          }
                        : null,
                    riotCampaignCard:
                        null != n
                            ? {
                                  id: tB.RIOT_CREDIT_CAMPAIGN_PERK_CARD_ID,
                                  title: J.intl.string(ib.default.zCdMTs),
                                  description: J.intl.formatToPlainString(ib.default["8VH2lL"], {
                                      termsUrl: eu.A.getArticleURL(eq.MVz.RIOT_CREDIT_CAMPAIGN),
                                  }),
                                  pillText:
                                      null != n.redemptionEndsAt
                                          ? J.intl.formatToPlainString(ij.default.g7iyvR, {
                                                date: (0, ir.Sw)(n.redemptionEndsAt),
                                            })
                                          : void 0,
                                  caption: (0, c.jsx)("img", {
                                      src: "https://cdn.discordapp.com/assets/content/cef348e36782f9a2173dea37eb7a54e04a0acb4d4f7f5074c8a3f9e5d2ae6e29.svg",
                                      alt: "Riot Games",
                                  }),
                                  backgroundAssetUrl:
                                      "https://cdn.discordapp.com/assets/content/2e11a92f42a86815654f152948f20362092f082dd2215e4ad7dbfa3eacea17fd.webp",
                                  ctaText: J.intl.string(ib.default.en2ls2),
                                  blurTint: "#310A0B",
                                  isThirdPartyPerk: !0,
                                  onCtaClick: () => {
                                      (0, ig.W)({ analyticsLocations: i });
                                  },
                                  analyticsOptions: { thirdPartyPartner: "riot" },
                              }
                            : null,
                    macaronCard: x,
                    codeBlurpleCard: s,
                };
            }, [x, s, n, i, a, g, l, p, r, u, d, m]);
        })(),
        { phase: p } = (0, t0.vc)({ location: "NitroRewardsSection" }),
        f =
            null != x
                ? {
                      card: x,
                      backgroundAssetUrl:
                          p === t1.H.PHASE_ONE
                              ? "https://cdn.discordapp.com/assets/content/dacaa1d04c91ae0beefcbce25518899d11a943e10437ded70a6d594a03cf9535.png"
                              : "https://cdn.discordapp.com/assets/content/d6bc70e4b19392250948d59f11fcdb7360b2ed7fa636f8d9ab30c199a728a7c6.png",
                      blurTint: "#001E73",
                  }
                : null != d
                  ? {
                        card: d,
                        backgroundAssetUrl:
                            "https://cdn.discordapp.com/assets/content/6936886d1c55035bd3f56b7594d80dd08e7d3e859be8630f3ef667b338a1dd78.webp",
                        blurTint: "#3E000C",
                    }
                  : null,
        h = null != f ? f.card.id : null,
        j = s && null == f,
        E =
            s ||
            null != n ||
            null != a ||
            null != l ||
            null != r ||
            null != m ||
            null != g ||
            (null != x && x.id !== h) ||
            (null != d && d.id !== h),
        b = null;
    return (null != f
        ? (b = (0, c.jsx)(iP, {
              card: f.card,
              backgroundAssetUrl: f.backgroundAssetUrl,
              blurTint: f.blurTint,
              glowing: t === iv || i === f.card.id,
              autoClickCta: i === f.card.id,
          }))
        : j && (b = (0, c.jsx)("div", { className: t2.JE, children: (0, c.jsx)(tK, { glowing: t === iv }) })),
    null != b || E)
        ? (0, c.jsx)(t7, {
              id: iv,
              sectionClassName: u()(i_.uW, i_.Uv, i_.qr),
              heading: (0, c.jsx)(X.D, {
                  variant: "nitro-sm",
                  className: u()(t3.R_, t2.U6),
                  children: J.intl.string(J.t.NG1e6l),
              }),
              beforeGrid: b,
              grid: E
                  ? (0, c.jsxs)(c.Fragment, {
                        children: [
                            null != g && (0, c.jsx)(tZ.S, { ...g, containerClassName: t3.Nr, glowing: i === g.id }),
                            null != m &&
                                (0, c.jsx)(tZ.S, {
                                    ...m,
                                    containerClassName: t3.Nr,
                                    glowing: i === m.id,
                                    autoClickCta: i === m.id,
                                }),
                            null != x &&
                                x.id !== h &&
                                (0, c.jsx)(tZ.S, {
                                    ...x,
                                    containerClassName: t3.Nr,
                                    glowing: i === x.id,
                                    autoClickCta: i === x.id,
                                }),
                            null != d &&
                                d.id !== h &&
                                (0, c.jsx)(tZ.S, {
                                    ...d,
                                    containerClassName: t3.Nr,
                                    glowing: i === d.id,
                                    autoClickCta: i === d.id,
                                }),
                            null != l && (0, c.jsx)(tZ.S, { ...l, containerClassName: t3.Nr, glowing: i === l.id }),
                            s &&
                                (0, c.jsx)(tQ, {
                                    containerClassName: t3.Nr,
                                    glowing: i === tB.XBOX_PREMIUM_PERK_CARD_ID,
                                }),
                            null != a && (0, c.jsx)(tZ.S, { ...a, containerClassName: t3.Nr, glowing: i === a.id }),
                            null != r && (0, c.jsx)(tZ.S, { ...r, containerClassName: t3.Nr, glowing: i === r.id }),
                            null != n && (0, c.jsx)(tZ.S, { ...n, containerClassName: t3.Nr, glowing: i === n.id }),
                        ],
                    })
                  : null,
          })
        : null;
}
var iS = i(313133),
    iD = i(67423);
let iM = function (e) {
    let { isVisible: t, premiumSubscription: s, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: l } = (0, A.Ay)(N.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        r = (0, e4.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsx)(e9.animated.div, {
        className: u()(iS.iE, { [iS.q4]: !t }),
        style: r,
        children: (0, c.jsxs)("div", {
            className: iS.iJ,
            children: [
                (0, c.jsx)("img", { alt: "", src: iD, className: iS.oU }),
                (0, c.jsxs)("div", {
                    className: iS.iQ,
                    children: [
                        (0, c.jsx)(X.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: J.intl.format(J.t["3yZP0G"], { percent: n.discount.amount }),
                        }),
                        (0, c.jsx)(K.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: J.intl.format(J.t["3Q4wCy"], {
                                numMonths: n.discount.intervalCount,
                                discountedPrice: a,
                                billingPeriod: (0, em.Ke)(n.discount.intervalType),
                            }),
                        }),
                    ],
                }),
                (0, c.jsx)(es.$, {
                    variant: "expressive",
                    icon: ei.t,
                    size: "md",
                    text: J.intl.string(J.t.zrCzVB),
                    onClick: () =>
                        void (0, ee.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                i.e("489361"),
                                i.e("227853"),
                                i.e("470126"),
                                i.e("149697"),
                                i.e("128804"),
                                i.e("60882"),
                                i.e("71151"),
                                i.e("286615"),
                                i.e("70866"),
                                i.e("311541"),
                                i.e("795854"),
                                i.e("870088"),
                                i.e("300641"),
                                i.e("747802"),
                                i.e("966366"),
                                i.e("84978"),
                                i.e("153302"),
                                i.e("807003"),
                                i.e("88683"),
                                i.e("983513"),
                                i.e("216806"),
                                i.e("310734"),
                                i.e("348567"),
                                i.e("452075"),
                                i.e("900277"),
                                i.e("127962"),
                                i.e("517888"),
                                i.e("959880"),
                                i.e("174016"),
                                i.e("907167"),
                                i.e("11301"),
                                i.e("861060"),
                                i.e("364827"),
                                i.e("217229"),
                                i.e("910486"),
                                i.e("678157"),
                                i.e("147134"),
                                i.e("40291"),
                                i.e("544571"),
                                i.e("523276"),
                                i.e("812042"),
                                i.e("729963"),
                                i.e("830938"),
                                i.e("538513"),
                                i.e("56366"),
                                i.e("122990"),
                                i.e("50097"),
                                i.e("594161"),
                                i.e("435432"),
                                i.e("80347"),
                                i.e("680166"),
                            ]).then(i.bind(i, 293061));
                            return (t) =>
                                (0, c.jsx)(e, {
                                    ...t,
                                    premiumSubscription: s,
                                    analyticsLocations: l,
                                    initialStep: ey.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var iO = i(761508),
    iU = i(480713),
    iL = i(449543),
    ik = i(197935),
    iG = i(62617),
    iw = i(387103);
function iB(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iG.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: iw.A,
        className: (0, iG.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
function iH(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iG.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/a89ff8a07704142beff857453a6c8aa15400cf711f8fe3cbbfa7ff4f0b2a334f.svg",
        className: (0, iG.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iF = i(93712);
function iV(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iG.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: iF.A,
        className: (0, iG.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iW = i(345394);
function iz(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iG.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: iW.A,
        className: (0, iG.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iY = i(163665);
function iX(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iG.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/2d617cf5c40353ca4ec6ac76e1a48f6781439c18db06b8cfab0f194358abe555.svg",
        className: (0, iG.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iK = i(330422);
function iZ(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iG.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/8a9a80f2b924da025612a160c7dc74c5e0fe675a90e3424737e6c5927739a6d0.svg",
        className: (0, iG.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
function iJ(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iG.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/3ba8fce33a4733cdbadc10ac378d1b5523b0c0961e7edc74372c159e3009727f.svg",
        className: (0, iG.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iq = i(996682);
function iQ(e) {
    let { color: t = eK.A.colors.ICON_STRONG, "aria-label": i, "aria-hidden": s, role: n, width: a, height: l } = e,
        r = o.useMemo(() => (0, iG.H)({ width: a, height: l, intrinsicWidth: 100, intrinsicHeight: 80 }), [a, l]);
    return (0, c.jsxs)("svg", {
        ...(0, iq.A)({ "aria-label": i, "aria-hidden": s, role: n }),
        style: r,
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
function i$(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iG.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/1314d17fb23c01337cac4bfdaaff48c5e6ac1f515b0647f0964922b988f095c1.svg",
        className: (0, iG.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var i0 = i(78701);
function i1(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iG.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: i0.A,
        className: (0, iG.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var i2 = i(462887),
    i3 = i(736653),
    i7 = i(259065),
    i6 = i(206835),
    i8 = i(591179),
    i5 = i(462463),
    i9 = i(219882),
    i4 = i(19886),
    se = i(425713),
    st = i(696292),
    si = i(192444),
    ss = i(617986),
    sn = i(892227),
    sa = i(81466),
    sl = i(1889),
    sr = i(749012);
let sc = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, B.F)();
    if (!e || null == t) return null;
    let i =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, sn.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, c.jsxs)("div", {
        className: sr.kL,
        children: [
            null != i &&
                (0, c.jsxs)("div", {
                    className: sr.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: sr.Pf,
                            children: [
                                (0, c.jsx)(sa.CalendarIcon, { size: "sm", color: eK.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(K.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: J.intl.string(sl.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, c.jsx)(K.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: J.intl.format(sl.default.xedPIb, { days: i }),
                        }),
                    ],
                }),
            null != i && t.total_rewarded_from_program > 0 && (0, c.jsx)("div", { className: sr.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, c.jsxs)("div", {
                    className: sr.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: sr.Pf,
                            children: [
                                (0, c.jsx)(eX.C, { size: "sm", color: eK.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(K.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: J.intl.string(sl.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, c.jsx)(K.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: J.intl.format(sl.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var so = i(190107),
    sd = i(799544);
function su() {
    let { shouldShowBonusOrbsUX: e, multiplier: t } = (0, si.lk)(so.rE.NITRO_HOME_MARKETING),
        { isEligible: i, programReward: s } = (0, B.F)();
    return {
        nitroOrbsRewardsCard: (0, o.useMemo)(
            () =>
                !i || null == s || null == s.reward_amount || s.reward_amount <= 0
                    ? null
                    : {
                          id: tB.NITRO_ORBS_REWARDS_CARD_ID,
                          title: J.intl.string(sl.default.hx5AFp),
                          description: J.intl.format(sl.default.wq3CF2, { orbsCount: s.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(sd.lH, sd.yK),
                          footerContent: (0, c.jsx)(sc, {}),
                          ctaText: J.intl.string(sl.default.BxjHiu),
                          onCtaClick: () => (0, P.pX)(eq.BVt.COLLECTIBLES_SHOP_WITH_TAB(e3.G2.ORBS)),
                      },
            [i, s],
        ),
        questOrbMultiplierCard: (0, o.useMemo)(
            () =>
                e
                    ? {
                          id: tB.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: J.intl.string(J.t.Csf5Ol),
                          description: J.intl.format(J.t.NpUfej, { bonusOrbMultiplier: t }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: J.intl.string(J.t.jVcuVY),
                          onCtaClick: () => (0, ss.mA)({ fromContent: st.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: sd.Nf,
                      }
                    : null,
            [e, t],
        ),
    };
}
var sm = i(975807),
    sx = i(95035),
    sg = i(989790),
    sp = i(88001),
    sf = i(148155),
    sh = i(817577);
function sN() {
    (0, sm.A)(sp.TE);
}
function sA(e) {
    let t = (0, sg.O9)(),
        s = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        n = s?.hasActiveTrial ?? !1,
        a = (0, o.useCallback)(() => {
            n
                ? (0, ee.openModalLazy)(async () => {
                      let { default: e } = await i.e("499709").then(i.bind(i, 516044));
                      return (t) => (0, c.jsx)(e, { ...t });
                  })
                : (0, v.A)({
                      subscriptionTier: tA.pe.TIER_2,
                      initialPlanId: tA.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, o.useMemo)(
        () =>
            t
                ? {
                      id: tB.PREMIUM_GROUP_CARD_ID,
                      title: J.intl.string(sf.default.YkvksF),
                      description: (0, c.jsxs)(c.Fragment, {
                          children: [
                              J.intl.formatToPlainString(sf.default.JlyGQj, {
                                  totalSeats: sp.aw,
                                  premiumGroupProductName: (0, sp.DP)(),
                              }),
                              (0, c.jsx)("div", {
                                  className: sd.LF,
                                  children: (0, c.jsx)(sx.A, {
                                      onClick: sN,
                                      children: J.intl.string(sf.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: J.intl.string(J.t.oW0eUd),
                      primaryAsset: sh,
                      ctaIcon: ei.t,
                      ctaIconPosition: "start",
                      ctaText: J.intl.string(J.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var sj = i(562819),
    sE = i(793943),
    sb = i(757036),
    sT = i(235955),
    sC = i(70283),
    sR = i(643056),
    sI = i(470739);
let s_ = (0, ii.mj)({
    name: "2026-10-nitro-home-badge-directory",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var sv = i(655752);
let sP = (0, ii.mj)({
    kind: "user",
    name: "2026-08-nitro-tenure-badge-total-progress",
    defaultConfig: { measureFromStreakStart: !1 },
    variations: { 0: { measureFromStreakStart: !1 }, 1: { measureFromStreakStart: !0 } },
});
var sy = i(764231),
    sS = i(627380),
    sD = i(30084),
    sM = i(814014),
    sO = i(714206);
let sU =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    sL =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    sk =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function sG() {
    let e,
        t,
        i,
        s,
        n,
        a,
        l,
        r,
        d,
        m,
        g,
        p,
        f,
        h,
        j,
        E,
        { analyticsLocations: b } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
        T = (0, i8.X)("useWhatsNewPerkCards"),
        C = (0, i5.A)({ analyticsLocations: b }),
        R = (0, o.useCallback)(() => {
            (0, eo.openUserSettings)(ec.X.PROFILE_PANEL, { analyticsLocations: b }, () =>
                (0, i7.L)({ analyticsLocations: b }),
            );
        }, [b]),
        I = (0, o.useCallback)(() => {
            (0, eo.openUserSettings)(ec.X.PROFILE_PANEL, { analyticsLocations: b }, () =>
                (0, sj.L)({ analyticsLocations: b }),
            );
        }, [b]),
        _ = (0, o.useCallback)(() => {
            (0, eo.openUserSettings)(ec.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        v =
            ((e = (0, x.bG)([S.default], () => S.default.getCurrentUser())),
            (t = e?.isFractionalPremiumWithNoStandardSub() ?? !1),
            (i = (function (e) {
                let { location: t } = e;
                return s_.useConfig({ location: t }).enabled;
            })({ location: "useTenureBadgePerkCard" })),
            (s = (0, sR.d)({ location: "useTenureBadgePerkCard" })),
            (n = (0, i4.$F)()),
            (a = (0, i4.Xb)()),
            (l = n?.status === i4.Wo.UPCOMING || t),
            (r = n?.status === i4.Wo.WITHHELD),
            (d = l || r),
            (m = (0, se.N)(n?.id)),
            (g = (function () {
                let e = (0, i4.$F)(),
                    t = (0, sv.P)(),
                    i = (0, i4.Xb)(),
                    s = (function (e) {
                        let { measureFromStreakStart: t } = sP.useConfig({ location: e });
                        return t;
                    })("tenure_badge_progress_bar");
                if (null == e || null == t || null == i || e.status === i4.Wo.WITHHELD) return null;
                let n = eI()(),
                    a = eI()(i),
                    l = s || e.status === i4.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                    r = t.tenureReqNumMonths,
                    c = a.clone().add(l, "months"),
                    o = a.clone().add(r, "months").diff(c);
                return Math.max(0, Math.min(1, (n.diff(c) - 864e5) / o));
            })()),
            (p = (0, x.bG)([ea.Ay], () => ea.Ay.useReducedMotion) && !d),
            (f = (0, sS.t)()),
            (h = (0, sv.P)()),
            (0, o.useMemo)(() => {
                let e,
                    l = null != h ? J.intl.string(h.nameUnformattedNitro) : void 0;
                null == n
                    ? t && (e = (0, sy.T)(tA.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (e =
                          n.status === i4.Wo.UPCOMING
                              ? J.intl.formatToPlainString(J.t.a1eKDi, { days: f?.days ?? 0 })
                              : n.status === i4.Wo.WITHHELD
                                ? ((0, sy.T)(n.id, n.tenureReqNumMonths) ?? void 0)
                                : ((function (e, t) {
                                      if (null != e && null != t) {
                                          if (e.days <= 30)
                                              return J.intl.formatToPlainString(J.t.NEXoaI, {
                                                  days: e.days,
                                                  nextBadgeName: t,
                                              });
                                          if (e.months <= 3)
                                              return J.intl.formatToPlainString(J.t.KDV8oD, {
                                                  months: e.months,
                                                  nextBadgeName: t,
                                              });
                                      }
                                  })(f, l) ??
                                  (0, sy.T)(n.id, n.tenureReqNumMonths) ??
                                  void 0));
                let r = null;
                return (
                    null != m ? (r = d || p ? m.standard : m.ambientLarge) : t && (r = sO),
                    {
                        id: tB.TENURE_BADGE_CARD_ID,
                        title: null != n ? J.intl.string(n.nameUnformattedNitro) : t ? J.intl.string(J.t.tx9Fvw) : "",
                        pillText: J.intl.string(J.t["jyYgZ+"]),
                        primaryAsset: r,
                        primaryAssetClassName: u()(sM.pq, { [sM.rX]: d, [sM.kE]: p }),
                        caption: null != a ? J.intl.formatToPlainString(J.t.Hu4jfi, { date: new Date(a) }) : void 0,
                        description: e,
                        subscriptionRequired: !0,
                        progress: g ?? void 0,
                        ctaText: J.intl.string(J.t.jVcuVY),
                        onCtaClick: () => {
                            i && s
                                ? (0, sI.openBadgeDirectoryModal)({ initialBadgeId: sC.$.PREMIUM_TENURE })
                                : (0, sD.D)({ analyticsLocations: b });
                        },
                    }
                );
            }, [n, m, d, p, a, g, t, f, h, b, i, s])),
        { nitroOrbsRewardsCard: P, questOrbMultiplierCard: y } = su(),
        D =
            ((j = (0, sb.L)(tA.PremiumTypes.TIER_2)),
            (E = (0, i9.rX)()),
            (0, o.useMemo)(
                () =>
                    j && E
                        ? {
                              id: tB.NITRO_FILE_UPLOAD_WHATS_NEW_CARD_ID,
                              title: J.intl.string(sT.default["/cV3ka"]),
                              description: J.intl.string(sT.default.H523FI),
                              primaryAsset: (0, c.jsx)(iY.I, { alt: "", ariaHidden: !0 }),
                          }
                        : null,
                [j, E],
            )),
        M = sA(b);
    return (0, o.useMemo)(() => {
        let e = [
                P,
                y,
                M,
                {
                    id: tB.DISPLAY_NAME_STYLES_CARD_ID,
                    title: J.intl.string(J.t.OLtTrt),
                    description: J.intl.string(J.t["di/pXR"]),
                    onCtaClick: T ? C : R,
                    ctaText: J.intl.string(J.t.jVcuVY),
                    primaryAsset: sU,
                },
                {
                    id: tB.CLIENT_THEMES_CARD_ID,
                    title: J.intl.string(J.t.acc6h6),
                    description: J.intl.formatToPlainString(J.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: sk,
                    ctaText: J.intl.string(J.t.jVcuVY),
                    onCtaClick: () => {
                        (0, sE.nf)(sE.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: tB.PERMADECOS_CARD_ID,
                    title: J.intl.string(J.t.L14NZN),
                    description: J.intl.string(J.t.eCZkAI),
                    primaryAsset: (0, c.jsx)(i1, { alt: "", ariaHidden: !0 }),
                    ctaText: J.intl.string(J.t.jVcuVY),
                    onCtaClick: T ? C : I,
                },
                {
                    id: tB.CUSTOM_APP_ICONS_CARD_ID,
                    title: J.intl.string(J.t["GU+wqh"]),
                    description: J.intl.string(J.t["1uPk1Z"]),
                    primaryAsset: sL,
                    ctaText: J.intl.string(J.t.y9TxXV),
                    onCtaClick: _,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            i = t ? 5 : 6;
        return (e.splice(+!!t, 0, v), null != D && e.splice(2, 0, D), e.length > i && e.splice(i, e.length - i), e);
    }, [v, P, y, D, M, R, _, I, C, T]);
}
var sw = i(355097);
let sB = "/assets/1eb1b74667b4c0f0.svg",
    sH = "/assets/983b60e4fcaf973b.svg";
var sF =
    (((l = {}).BEST_OF_NITRO = "bestof"),
    (l.APPEARANCE_STYLE = "appearance"),
    (l.UPGRADES = "upgrades"),
    (l.VIP_EXTRAS = "vip"),
    l);
let sV = [
    { id: "bestof", label: () => J.intl.string(J.t.q1u7nQ) },
    { id: "appearance", label: () => J.intl.string(J.t.CUnZkZ) },
    { id: "upgrades", label: () => J.intl.string(J.t.KC5q8v) },
    { id: "vip", label: () => J.intl.string(J.t.DjEAcv) },
];
var sW = i(18290);
function sz(e) {
    e.stopPropagation();
}
function sY(e) {
    return e.id;
}
function sX(e) {
    let { glowingPerkId: t = null } = e,
        i = (function () {
            let e = (0, i3.DP)(),
                t = (0, i8.X)("useFavoritesPerkCards"),
                i = (0, i4.Lh)(),
                s = (0, se.N)(i)?.standard ?? null,
                { analyticsLocations: n } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, i6.A)({ scrollPosition: sw._F.TRY_IT_OUT, analyticsLocations: n }),
                l = (0, o.useCallback)(() => {
                    (0, eo.openUserSettings)(ec.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: n });
                }, [n]),
                r = (0, o.useCallback)(() => {
                    (0, eo.openUserSettings)(ec.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: n });
                }, [n]),
                d = (0, o.useCallback)(() => {
                    (0, eo.openUserSettings)(ec.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: n });
                }, [n]),
                u = (0, o.useCallback)(() => {
                    (0, P.pX)(eq.BVt.COLLECTIBLES_SHOP);
                }, []),
                m = (0, o.useCallback)(() => {
                    (0, eo.openUserSettings)(ec.X.SOUNDBOARD_CATEGORY, { analyticsLocations: n });
                }, [n]),
                x = (0, i5.A)({ analyticsLocations: n }),
                g = (0, o.useCallback)(() => {
                    (0, eo.openUserSettings)(ec.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, i7.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                p = sG(),
                f = (0, o.useMemo)(() => p.map((e) => e?.id), [p]),
                { nitroOrbsRewardsCard: h, questOrbMultiplierCard: j } = su(),
                E = sA(n),
                b = (0, o.useMemo)(
                    () => [
                        {
                            id: tB.SERVER_BOOSTS_CARD_ID,
                            title: J.intl.formatToPlainString(J.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: J.intl.formatToPlainString(J.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: J.intl.string(J.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: (0, c.jsx)(iB, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != E ? { ...E, categories: ["bestof"] } : null,
                        {
                            id: tB.PROFILES_CARD_ID,
                            title: J.intl.string(J.t.xDRab3),
                            description: J.intl.string(J.t.yn6fWA),
                            ctaText: J.intl.string(J.t.jVcuVY),
                            onCtaClick: t ? x : a,
                            primaryAsset: (0, c.jsx)(iH, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tB.HD_VIDEO_CARD_ID,
                            title: J.intl.string(J.t["/mQ5gg"]),
                            description: J.intl.string(J.t["7WwAXh"]),
                            primaryAsset: (0, c.jsx)(iV, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tB.CLIENT_THEMES_CARD_ID,
                            title: J.intl.string(J.t.acc6h6),
                            description: J.intl.formatToPlainString(J.t.WQazjs, { themeCount: 20 }),
                            ctaText: J.intl.string(J.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: sk,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tB.MORE_EMOJIS_CARD_ID,
                            title: J.intl.string(J.t.D8vIDT),
                            description: J.intl.string(J.t.DRMecB),
                            primaryAsset: (0, c.jsx)(iz, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tB.LARGE_UPLOADS_CARD_ID,
                            title: J.intl.string(J.t.nL1WZV),
                            description: (0, i9.M6)({
                                legacyCopy: J.intl.formatToPlainString(J.t.k8LC1w, { maxSizeMb: 500 }),
                                rolloutCopy: J.intl.formatToPlainString(J.t.teOTfv, {
                                    maxFileSize: (0, em.EJ)(tA.PremiumTypes.TIER_2, { useSpace: !1 }),
                                }),
                            }),
                            primaryAsset: (0, c.jsx)(iY.I, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tB.CUSTOM_APP_ICONS_CARD_ID,
                            title: J.intl.string(J.t["GU+wqh"]),
                            description: J.intl.string(J.t["1uPk1Z"]),
                            ctaText: J.intl.string(J.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: sL,
                            categories: ["appearance"],
                        },
                        {
                            id: tB.ENTRANCE_SOUNDS_CARD_ID,
                            title: J.intl.string(J.t.WJfCPi),
                            description: J.intl.string(J.t.liQKJR),
                            ctaText: J.intl.string(J.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: tB.DISPLAY_NAME_STYLES_CARD_ID,
                            title: J.intl.string(J.t.OLtTrt),
                            description: J.intl.string(J.t["di/pXR"]),
                            onCtaClick: t ? x : g,
                            ctaText: J.intl.string(J.t.jVcuVY),
                            primaryAsset: sU,
                            categories: ["appearance"],
                        },
                        {
                            id: tB.CUSTOM_SOUNDS_CARD_ID,
                            title: J.intl.string(J.t["Cu/oFd"]),
                            description: J.intl.string(J.t.czj2aa),
                            primaryAsset: (0, c.jsx)(iX, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tB.SPECIAL_STICKERS_CARD_ID,
                            title: J.intl.string(J.t.MQoVeb),
                            description: J.intl.string(J.t.HGCLZX),
                            primaryAsset: (0, c.jsx)("div", {
                                className: sd.Uc,
                                children: (0, c.jsx)(iK.n, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tB.SUPER_REACTIONS_CARD_ID,
                            title: J.intl.string(J.t.qERvAA),
                            description: J.intl.string(J.t.WkUWzx),
                            primaryAsset: (0, c.jsx)(iZ, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tB.VIDEO_BACKGROUNDS_CARD_ID,
                            title: J.intl.string(J.t.ssVDYQ),
                            description: J.intl.string(J.t.aUSRMa),
                            primaryAsset: (0, i2.M)(e) ? sB : sH,
                            categories: ["upgrades"],
                        },
                        {
                            id: tB.EARLY_ACCESS_CARD_ID,
                            title: J.intl.string(J.t["g/KRY6"]),
                            description: J.intl.string(J.t.JzAmJc),
                            primaryAsset: (0, c.jsx)(iJ, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tB.BADGE_CARD_ID,
                            title: J.intl.string(J.t.Bn3CtB),
                            description: J.intl.string(J.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != s
                                    ? (0, c.jsx)("img", { src: s, alt: "", width: 160, draggable: "false" })
                                    : (0, c.jsx)(iQ, { color: eK.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tB.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: J.intl.string(J.t["MTD+7w"]),
                            description: J.intl.string(J.t.Bhs0s6),
                            ctaText: J.intl.string(J.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, c.jsx)(i$, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != h ? { ...h, categories: ["vip"] } : null,
                        null != j ? { ...j, categories: ["vip"] } : null,
                        {
                            id: tB.PERMADECOS_CARD_ID,
                            title: J.intl.string(J.t.L14NZN),
                            description: J.intl.string(J.t.eCZkAI),
                            primaryAsset: (0, c.jsx)(i1, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, s, h, j, E, a, l, r, d, u, m, g, x, t],
                );
            return (0, o.useMemo)(() => b.filter((e) => null != e && !f.includes(e.id)), [b, f]);
        })(),
        s = (0, iU.l)("premium_favorites_section"),
        n = null != t ? i.find((e) => e?.id === t) : null,
        [a, l] = (0, o.useState)(n?.categories[0] ?? sF.BEST_OF_NITRO),
        r = sV.find((e) => e.id === a)?.label(),
        d = (0, o.useMemo)(() => i.filter((e) => null != e && e.categories.includes(a)), [i, a]);
    return (0, c.jsxs)("div", {
        className: sW.uW,
        children: [
            (0, c.jsx)(X.D, { variant: "nitro-sm", children: J.intl.string(J.t["Uh3+CA"]) }),
            (0, c.jsx)(iO.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: a,
                onItemSelect: l,
                className: sW.Lq,
                "aria-label": J.intl.string(J.t["Uh3+CA"]),
                children: sV.map((e) =>
                    (0, c.jsx)(iO.V.Item, { id: e.id, className: sW.IC, children: e.label() }, e.id),
                ),
            }),
            s
                ? (0, c.jsx)(
                      ik.A,
                      {
                          "aria-label": J.intl.formatToPlainString(J.t.akg5nT, { filterName: r }),
                          gap: 20,
                          className: sW.jG,
                          items: d,
                          getItemKey: sY,
                          renderItem: (e, i) =>
                              (0, c.jsx)(tZ.S, {
                                  ...e,
                                  glowing: t === e.id,
                                  containerClassName: sW.Ui,
                                  listItemProps: i,
                              }),
                      },
                      a,
                  )
                : (0, c.jsx)(
                      iL.A,
                      {
                          gap: 20,
                          className: sW.jG,
                          "aria-label": J.intl.formatToPlainString(J.t.akg5nT, { filterName: r }),
                          children: d.map((e) =>
                              (0, c.jsx)(
                                  tZ.S,
                                  { ...e, glowing: t === e.id, containerClassName: sW.Ui, onFocus: sz },
                                  e.id,
                              ),
                          ),
                      },
                      a,
                  ),
        ],
    });
}
var sK = i(72979);
let sZ = function (e) {
    let { className: t } = e,
        i = (0, i3.DP)();
    return (0, c.jsx)("img", {
        className: u()(sK.D, t),
        src: (0, i2.M)(i) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var sJ = i(684251);
let sq = function (e) {
    let { children: t } = e;
    return (0, c.jsxs)("div", {
        className: u()(sJ.kL, sJ.Gd, sJ.Eg),
        children: [(0, c.jsx)(sZ, {}), (0, c.jsx)(tD, {}), t],
    });
};
function sQ(e) {
    let { glowingPerkId: t = null } = e,
        i = sG();
    return (0, c.jsx)(t7, {
        sectionClassName: t3.uW,
        heading: (0, c.jsx)(X.D, { variant: "nitro-sm", className: t3.R_, children: J.intl.string(J.t.Aw5DRm) }),
        grid: (0, c.jsx)(c.Fragment, {
            children: i.map((e, i) => {
                if (null == e) return;
                let s = 0 === i && !0 === e.featured,
                    n = t === e.id;
                return (0, c.jsx)(
                    tZ.S,
                    {
                        ...e,
                        glowing: n,
                        autoClickCta: n && e.id === tB.YOUTUBE_3PP_CARD_ID,
                        featured: s,
                        containerClassName: u()(t3.Nr, { [t3.Nq]: s }),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function s$(e, t, i, s) {
    !(function (e, t, i) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            n = arguments.length > 4 ? arguments[4] : void 0,
            a = (0, x.bG)([ea.Ay], () => ea.Ay.useReducedMotion),
            l = o.useRef(!1);
        (o.useEffect(() => {
            if (!t || l.current) return;
            let i = { behavior: a ? "auto" : "smooth", block: s, inline: n },
                r = e();
            if (null != r && r.offsetHeight > 0) {
                ((l.current = !0), r.scrollIntoView(i));
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
                        ((l.current = !0), d.disconnect(), t.target.scrollIntoView(i));
                }),
                u = performance.now();
            return (
                !(function t() {
                    if (c || performance.now() - u > 5e3) return;
                    let s = e();
                    null != s
                        ? s.offsetHeight > 0
                            ? ((l.current = !0), s.scrollIntoView(i))
                            : d.observe(s)
                        : (o = requestAnimationFrame(t));
                })(),
                () => {
                    ((c = !0), null != o && cancelAnimationFrame(o), d.disconnect());
                }
            );
        }, [t, a, s, n, ...i]),
            o.useEffect(() => {
                t || (l.current = !1);
            }, [t]));
    })(() => document.getElementById(e), t, [e], i, s);
}
var s0 = i(92737);
let s1 = "/assets/cd2be35d285d4675.svg",
    s2 = (e) => {
        let { userId: t } = e,
            i = (0, m.zy)();
        (o.useEffect(() => {
            ((0, w.Ay)(), null != t && (0, F.A)(t));
        }, [t]),
            o.useEffect(() => {
                b(!0);
            }, []),
            (0, W.j)(),
            (0, _.P)(I));
        let s = o.useRef(null),
            n = o.useRef(null),
            a = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            { isReady: l, programReward: r } = (0, B.F)(),
            {
                scrollTargetId: d,
                glowingSectionId: p,
                glowingPerkId: f,
                scrollBlock: h,
                scrollInline: j,
            } = o.useMemo(() => {
                let e = new URLSearchParams(i.search),
                    t = e.get("perk"),
                    s = e.get(s0.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != s
                      ? { scrollTargetId: s, glowingSectionId: s, scrollBlock: "start" }
                      : {};
            }, [i.search]);
        s$(d ?? "", null != d, h, j);
        let [E, b] = o.useState(!1),
            T = (0, V.p)(),
            C = o.useRef(null),
            [R, v] = o.useState(!1),
            P = null != T && null != a && a.status === eq.Dmq.CANCELED,
            y = (0, z.iU)(tA.gD.PREMIUM_MONTH_TIER_2, T, a),
            S = !R && P,
            D = (0, x.bG)([H.A], () => (null != t ? H.A.getUserProfile(t) : null)),
            { analyticsLocations: U } = (0, A.Ay)(N.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [L, Y] = o.useState(!1);
        return null != D && (l || null != r)
            ? (0, c.jsxs)(G.Gt, {
                  className: u()(sJ.xW, sJ.Gd),
                  ref: s,
                  children: [
                      (0, c.jsx)(sq, {
                          children: (0, c.jsxs)(A.f5, {
                              value: U,
                              children: [
                                  (0, c.jsx)(k.L, {
                                      innerRef: C,
                                      onChange: (e) => v(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, c.jsx)(tR, {
                                          buttonVisibilityRef: C,
                                          className: sJ.v1,
                                          userDiscountOffer: T,
                                          discountedPrice: y,
                                      }),
                                  }),
                                  (0, c.jsx)(sQ, { glowingPerkId: f }),
                                  (0, c.jsx)(iy, { glowingPerkId: f, glowingSectionId: p }),
                                  (0, c.jsx)(sX, { glowingPerkId: f }),
                                  (0, c.jsx)(Q, {
                                      className: sJ.Zy,
                                      location: N.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: eq.liQ.NITRO_HOME, section: eq.JJy.GIFT_BANNER },
                                  }),
                                  (0, c.jsx)("div", { className: sJ.hz }),
                                  (0, c.jsx)(k.L, {
                                      innerRef: n,
                                      onChange: (e) => {
                                          e &&
                                              !L &&
                                              (O.default.track(eq.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: U,
                                              }),
                                              Y(!0));
                                      },
                                      children: (0, c.jsx)("div", { ref: n, className: sJ._Z }),
                                  }),
                                  (0, c.jsx)("img", {
                                      src: s1,
                                      className: sJ.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: J.intl.string(J.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      P &&
                          null != y &&
                          (0, c.jsx)(iM, {
                              isVisible: S && E,
                              premiumSubscription: a,
                              churnDiscountOffer: T,
                              discountedPrice: y,
                          }),
                  ],
              })
            : (0, c.jsxs)("div", {
                  className: u()(sJ.kL, sJ.Lq, sJ.TN, sJ.Eg),
                  children: [(0, c.jsx)(tD, {}), (0, c.jsx)("div", { className: sJ.S, children: (0, c.jsx)(g.y, {}) })],
              });
    };
var s3 = i(286320),
    s7 = i(851746),
    s6 = i(727949),
    s8 = i(543213);
let s5 =
        "https://cdn.discordapp.com/assets/content/3aa94cb4beecb43100d482e94a5a707f188e2e2315d9b15865689b51409c4d56.png",
    s9 = `${s5} 1x, https://cdn.discordapp.com/assets/content/e33cdb99c455ad732bab8cc40ca15b8bf926a7e9e078cd8834edfd15e4010217.png 2x, https://cdn.discordapp.com/assets/content/4e7462093b85c105a20baea89e1e03ef3ad3cb15eac1aa3a9579569427b68c60.png 3x`;
function s4(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iG.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: s5,
        srcSet: s9,
        className: (0, iG.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var ne = i(37537),
    nt = i(783420),
    ni = i(204413),
    ns = i(245383),
    nn = i(824069),
    na = i(785007),
    nl = i(947910);
function nr(e) {
    let { value: t, planRadioOptions: i, ...s } = e,
        n = i.map((e) => {
            let i = e.value === t;
            return {
                name: (0, c.jsxs)("div", {
                    className: nl.VH,
                    children: [
                        i &&
                            null != e.badgeText &&
                            (0, c.jsx)("div", {
                                className: nl.fQ,
                                children: (0, c.jsx)(eF.E, { type: { text: e.badgeText }, variant: "primary" }),
                            }),
                        (0, c.jsxs)(et.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: nl.qU,
                            children: [
                                (0, c.jsxs)(et.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nl.NI,
                                    children: [
                                        (0, c.jsx)(K.E, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            children: e.primaryText,
                                        }),
                                        null != e.primarySubText &&
                                            (0, c.jsx)(K.E, {
                                                variant: "text-sm/medium",
                                                color: "text-subtle",
                                                children: e.primarySubText,
                                            }),
                                    ],
                                }),
                                (0, c.jsxs)(et.B, {
                                    direction: "vertical",
                                    align: "end",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nl.br,
                                    children: [
                                        null != e.secondaryText &&
                                            (0, c.jsx)(K.E, {
                                                tag: "span",
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                children: e.secondaryText,
                                            }),
                                        null != e.secondarySubText &&
                                            (0, c.jsx)(K.E, {
                                                tag: "span",
                                                variant: "text-sm/medium",
                                                color: "text-subtle",
                                                className: nl.yD,
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
                radioBarClassName: u()(nl.tG, { [nl.uA]: i, [nl.hy]: i && e.useGradientSelectedBorder }),
            };
        });
    return (0, c.jsx)(na.$d, {
        ...s,
        options: n,
        value: t,
        size: na.r9.NOT_SET,
        className: nl.ul,
        withTransparentBackground: !0,
    });
}
var nc = i(118751),
    no = i(773669),
    nd = i(97352),
    nu = i(526292),
    nm = i(387278),
    nx = i(369827),
    ng = i(803496);
function np(e) {
    let t = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        i = (0, nx.L)(),
        s = t?.paymentSourceId ?? i,
        { priceOptions: n } = (0, ng.A)({
            activeSubscription: t,
            skuIDs: [(0, em.mH)(e)],
            paymentSourceId: s,
            isGift: !1,
        });
    return n;
}
function nf(e, t, i, s, n) {
    return t && i?.includes(e) === !0 && null != s && null != n && s !== n;
}
function nh(e) {
    let { expectedUsageInterval: t, usageInterval: i, discountDuration: s, regularPrice: n, discountedPrice: a } = e;
    return i !== t || null == n || null == a
        ? null
        : t === tA.Ff.YEAR
          ? J.intl.format(J.t.G88D2T, { discountedPrice: a, numYears: s, regularPrice: n })
          : J.intl.format(J.t["x+qUAi"], { discountedPrice: a, numMonths: s, regularPrice: n });
}
var nN = i(614488);
function nA(e) {
    let { skuId: t, selectedPlanId: i, subscribeButtonProps: s } = e,
        n = null == i || !0 === s.disabled,
        a = null == i ? "secondary" : s.variant;
    return (0, c.jsx)(nt.A, {
        subscriptionTier: t,
        initialPlanId: i,
        shouldDisallowPlanSelection: !0,
        children: (e) => {
            let { onClick: t } = e;
            return (0, c.jsx)(es.$, {
                size: "md",
                fullWidth: !0,
                icon: ei.t,
                text: s.text,
                variant: a,
                disabled: n,
                onClick: t,
            });
        },
    });
}
function nj(e) {
    let { skuId: t, className: i } = e,
        s = t === tA.pe.TIER_2,
        n = (0, i2.q)((0, i3.Ay)()),
        a = (0, ne.c)("PlanSelectCard"),
        l = (0, ef.V)(),
        r = l?.subscriptionTrial,
        d = r?.skuId === t,
        m = s && d && null != r,
        g = (0, ep.p)(),
        {
            planRadioOptions: p,
            selectedPlanId: f,
            setSelectedPlanId: h,
            shouldSuppressDiscountCta: N,
        } = (function (e) {
            let { skuId: t } = e,
                [i, s] = o.useState(null),
                n = tA.En[t],
                a = tA.zE[t],
                l = t === tA.pe.TIER_2,
                r = np(t),
                c = (0, ef.V)(),
                d = c?.subscriptionTrial?.skuId === t,
                { subscribedSkuId: u, isMonthlyPlanDisabled: m } = (0, x.cf)(
                    [M.A],
                    () => {
                        let e = M.A.getPremiumTypeSubscription();
                        return {
                            subscribedSkuId: (0, em.aZ)(e),
                            isMonthlyPlanDisabled:
                                n === tA.gD.PREMIUM_MONTH_TIER_2 &&
                                null != e &&
                                [tA.gD.PREMIUM_YEAR_TIER_0, tA.gD.PREMIUM_YEAR_TIER_1].includes(e.planId),
                        };
                    },
                    [n],
                ),
                g = u === t,
                p = (0, ep.O)(),
                f = (0, nu.k5)(),
                h = (0, x.bG)([no.default], () => no.default.locale),
                N = (0, z.U9)(p, t),
                A = (0, z.N1)(n),
                j = (0, z.N1)(a),
                [E, b] = (0, x.yK)([nd.A], () => [nd.A.get(n), nd.A.get(a)], [n, a]),
                T = null != E ? (0, em.sS)(E, r) : null,
                C = null != b ? (0, em.sS)(b, r) : null,
                R =
                    N && p?.discount.amount != null && !f
                        ? J.intl.formatToPlainString(J.t.IAybsG, {
                              discount: (0, nc.l9)(h, Number(p.discount.amount) / 100),
                          })
                        : null,
                I = p?.discount?.planIds,
                _ = nf(a, N, I, j, C),
                v = nf(n, N, I, A, T),
                P = p?.discount.userUsageLimitInterval,
                y = p?.discount.userUsageLimit ?? tA.OJ,
                S = !l || _ || v || null == b ? null : (0, nm.Cj)(b, !1, r),
                D = !v || m,
                O = (function (e) {
                    let { skuId: t, monthlyHasDiscount: i, isMonthlyPlanDisabled: s } = e;
                    return t !== tA.pe.TIER_2 ? null : i && !s ? tA.En[t] : tA.zE[t];
                })({ skuId: t, monthlyHasDiscount: v, isMonthlyPlanDisabled: m }),
                U = null == i || (i === n && m) ? O : i,
                L = [
                    {
                        value: a,
                        primaryText: J.intl.string(J.t["/Q4HRN"]),
                        primarySubText:
                            (_
                                ? nh({
                                      expectedUsageInterval: tA.Ff.YEAR,
                                      usageInterval: P,
                                      discountDuration: y,
                                      regularPrice: C,
                                      discountedPrice: j,
                                  })
                                : null) ?? S,
                        secondaryText: _ ? j : C,
                        secondarySubText: _ ? C : null,
                        badgeText: _ ? R : null,
                        useGradientSelectedBorder: l && (d || _ || D),
                        isDisabled: g,
                    },
                    {
                        value: n,
                        primaryText: J.intl.string(J.t.DKzs96),
                        primarySubText: v
                            ? nh({
                                  expectedUsageInterval: tA.Ff.MONTH,
                                  usageInterval: P,
                                  discountDuration: y,
                                  regularPrice: T,
                                  discountedPrice: A,
                              })
                            : null,
                        secondaryText: v ? A : T,
                        secondarySubText: v ? T : null,
                        badgeText: v ? R : null,
                        useGradientSelectedBorder: l && (d || v),
                        isDisabled: g || m,
                    },
                ],
                k = U === a ? _ : U === n && v;
            return { planRadioOptions: L, selectedPlanId: U, setSelectedPlanId: s, shouldSuppressDiscountCta: N && !k };
        })({ skuId: t }),
        A = s && null == g ? "expressive" : "secondary",
        { buttonText: j } = (0, ns.A)({ subscriptionTier: t }),
        { subscribeButtonProps: E } = (0, ni.$)({
            subscriptionTier: t,
            variantOverride: A,
            buttonTextOverride: N ? j : void 0,
        }),
        b = (0, c.jsxs)(et.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nN.Ux,
            children: [
                (0, c.jsx)(et.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nN.MY,
                    children: (0, c.jsx)(X.D, {
                        variant: a ? "nitro-md" : "display-md",
                        color: n ? "text-strong" : "text-overlay-light",
                        className: a ? nN.ck : nN.JJ,
                        children: s ? J.intl.string(J.t.lG6a5x) : J.intl.string(J.t["t9uG/o"]),
                    }),
                }),
                (0, c.jsx)(et.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nN.qT,
                    children: s
                        ? (0, c.jsx)(s8.ZP, {
                              featureSet: s8.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: "text-md/medium",
                          })
                        : (0, c.jsx)(s8.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: "text-md/medium",
                          }),
                }),
                s && (0, c.jsx)(nn.K, {}),
                m
                    ? (0, c.jsx)("div", {
                          className: nN.qS,
                          role: "separator",
                          children: (0, c.jsx)(K.E, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              className: nN.ZV,
                              children: (function (e, t) {
                                  if (null == e || null == t) return null;
                                  switch (e) {
                                      case tA.WT.DAY:
                                          if (t % 7 == 0) return J.intl.format(J.t["1MYPH0"], { weeks: t / 7 });
                                          return J.intl.format(J.t.pYfIoO, { days: t });
                                      case tA.WT.MONTH:
                                          return J.intl.format(J.t["96hTLe"], { months: t });
                                      case tA.WT.YEAR:
                                          return J.intl.format(J.t.B0ZmdG, { years: t });
                                      default:
                                          return null;
                                  }
                              })(r.interval, r.intervalCount),
                          }),
                      })
                    : (0, c.jsx)("hr", { className: nN.yF }),
                (0, c.jsxs)("div", {
                    className: nN.qr,
                    children: [
                        (0, c.jsx)(nr, { planRadioOptions: p, value: f ?? "", onChange: (e) => h(e.value) }),
                        (0, c.jsx)(nA, { skuId: t, selectedPlanId: f, subscribeButtonProps: E }),
                    ],
                }),
            ],
        }),
        T = u()(nN.Nr, i, { [nN.Fw]: s });
    return s
        ? (0, c.jsxs)(Y.h, {
              color: "nitro-pink",
              className: T,
              children: [
                  (0, c.jsx)("div", {
                      className: nN.kX,
                      "aria-hidden": !0,
                      children: (0, c.jsx)(s4, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                  }),
                  b,
              ],
          })
        : (0, c.jsx)("div", { className: T, children: b });
}
function nE(e) {
    let { className: t } = e,
        i = (0, i2.q)((0, i3.Ay)()),
        s = (0, ne.c)("PlanSelectPremiumGroupCard"),
        n = (0, ep.p)(),
        a = null != n,
        l = np(tA.pe.TIER_2),
        r = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        { avatarSrc: o, eventHandlers: d } = (0, eU.A)({ userId: r?.id, size: eS._3.SIZE_32, animateOnHover: !0 }),
        m = (0, x.bG)([nd.A], () => nd.A.get(tA.gD.PREMIUM_GROUP_MONTH)),
        p = (0, z.N1)(tA.gD.PREMIUM_GROUP_MONTH),
        f = a
            ? J.intl.format(sf.default["7j70dP"], {
                  percent: n.discount?.amount,
                  premiumGroupProductName: (0, sp.DP)(),
              })
            : J.intl.string(J.t["2pG5Ga"]),
        h = (0, c.jsx)(nt.A, {
            subscriptionTier: tA.pe.TIER_2,
            initialPlanId: tA.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, c.jsx)(es.$, {
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
            N = (0, em.sS)(m, l, !1, !1, !1);
        } catch {
            N = null;
        }
    return (0, c.jsx)("div", {
        className: u()(nN.Nr, t),
        children: (0, c.jsxs)(et.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nN.Ux,
            children: [
                (0, c.jsxs)(et.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nN.MY,
                    children: [
                        (0, c.jsx)(X.D, {
                            variant: s ? "nitro-md" : "display-md",
                            color: i ? "text-strong" : "text-overlay-light",
                            className: s ? nN.ck : nN.JJ,
                            children: J.intl.string(sf.default.eSKiXk),
                        }),
                        null != r &&
                            (0, c.jsxs)(et.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: nN.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: nN.uA,
                                        children: (0, c.jsx)(eD.eu, {
                                            src: o,
                                            size: eS._3.SIZE_32,
                                            "aria-hidden": !0,
                                            ...d,
                                        }),
                                    }),
                                    (0, c.jsx)(et.B, {
                                        direction: "horizontal",
                                        align: "center",
                                        justify: "center",
                                        gap: 0,
                                        fullWidth: !1,
                                        className: nN.VL,
                                        children: (0, c.jsxs)(K.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-default",
                                            children: ["+", sp.LM],
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
                (0, c.jsx)(et.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nN.qT,
                    children: (0, c.jsx)(s8.Lg, { isApplicationHome: !0, textVariant: "text-md/medium" }),
                }),
                (0, c.jsx)("hr", { className: nN.yF }),
                (0, c.jsxs)("div", {
                    className: nN.qr,
                    children: [
                        (0, c.jsxs)("div", {
                            className: nN.ec,
                            children: [
                                (0, c.jsx)(K.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: J.intl.string(sf.default.SvSwga),
                                }),
                                null == N
                                    ? (0, c.jsx)(g.y, { type: g.y.Type.PULSING_ELLIPSIS })
                                    : (0, c.jsx)(K.E, {
                                          tag: "span",
                                          variant: "heading-lg/semibold",
                                          color: i ? "text-strong" : "text-overlay-light",
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
function nb(e) {
    let { innerRef: t, className: i } = e,
        { analyticsLocations: s } = (0, A.Ay)(N.A.PREMIUM_MARKETING_TIER_CARD),
        n = (0, s8.pw)(t),
        a = (0, sg.PA)(),
        l = (0, x.bG)([ea.Ay], () => ea.Ay.useReducedMotion),
        r = { [nN.iR]: !l };
    return (0, c.jsx)(A.f5, {
        value: s,
        children: (0, c.jsxs)(et.B, {
            direction: "vertical",
            align: "center",
            gap: 32,
            fullWidth: !0,
            className: u()(nN.oB, i),
            children: [
                (0, c.jsx)(X.D, {
                    variant: "nitro-md",
                    color: "text-strong",
                    className: nN.op,
                    children: J.intl.string(J.t.vLz3Zs),
                }),
                (0, c.jsxs)("div", {
                    ref: n,
                    className: u()(nN.kR, { [nN.BQ]: a }),
                    children: [
                        (0, c.jsx)(nj, { skuId: tA.pe.TIER_0, className: u()(nN.rz, r) }),
                        (0, c.jsx)(nj, { skuId: tA.pe.TIER_2, className: u()(nN.Rv, r) }),
                        a && (0, c.jsx)(nE, { className: u()(nN.zz, r) }),
                    ],
                }),
            ],
        }),
    });
}
var nT = i(366010),
    nC = i(303136);
let nR = function (e) {
    let t,
        { className: i } = e,
        s = (0, e5.TM)(),
        n = (0, nT.q)((0, i3.Ay)());
    return (
        (t = s
            ? n
                ? "https://cdn.discordapp.com/assets/content/06ad5b3e9274c7e75f135129da3141ef42681698d3c0cf79b8c83e8526c2064f.mov"
                : "https://cdn.discordapp.com/assets/content/e306e75bdcd95e261e8d501c2cc6674bf183ff83e53b8dcae4e7bfa98d15c273.mov"
            : n
              ? "https://cdn.discordapp.com/assets/content/2b403885861e2c1a8268fbdb8ba90a93b72fab9937dd1cdad47e68f814969dac.webm"
              : "https://cdn.discordapp.com/assets/content/5412744d944cb3bf22279ee7741dbdca87bd644fa128adcfd2d50ae56543d7c9.webm"),
        (0, c.jsx)("div", {
            className: i,
            children: (0, c.jsx)(
                nC.A,
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
var nI =
        (((r = {}).HOME = "home"),
        (r.WHATS_NEW = "whatsNew"),
        (r.BEST_OF_NITRO = "bestOfNitro"),
        (r.PLANS = "plans"),
        (r.COMPARE = "compare"),
        r),
    n_ = i(352756);
let nv = function (e) {
    let { isVisible: t, subscriptionTier: i, isEligibleForBogoPromotion: s } = e,
        n = (0, e4.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        a = { section: eq.JJy.MARKETING_FLOATING_CTA };
    return (0, c.jsx)(e9.animated.div, {
        className: n_.i,
        style: n,
        "data-mtctest-ignore": "true",
        children: (0, c.jsxs)("div", {
            className: n_.U,
            children: [
                (0, c.jsx)(eC.A, {
                    size: "md",
                    subscriptionTier: i,
                    hasActivePromotion: !!s,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: a,
                }),
                (0, c.jsx)(Z.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var nP = i(573710);
let ny = function () {
    let e = (0, e8.bG)([ea.Ay], () => ea.Ay.useReducedMotion);
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)("div", {
                className: nP.BI,
                children: (0, c.jsx)(ts, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: tt.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, c.jsx)("img", {
                        src: "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
                        alt: "",
                        className: nP.Q,
                    }),
                }),
            }),
            (0, c.jsx)(ta, {
                isMotionReduced: e,
                boltContainerClassName: nP.nJ,
                carContainerClassName: nP.IN,
                hammerContainerClassName: nP.Gj,
                keyContainerClassName: nP.FV,
                starContainerClassName: nP.E1,
                boltAssetClassName: nP.j7,
                carAssetClassName: nP.or,
                hammerAssetClassName: nP.Wv,
                keyAssetClassName: nP.rs,
                starAssetClassName: nP.OY,
            }),
        ],
    });
};
var nS = i(989756);
function nD(e) {
    let { ref: t, ...i } = e,
        { analyticsLocations: s } = (0, A.Ay)(N.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, c.jsx)(A.f5, {
        value: s,
        children: (0, c.jsx)("div", {
            ref: t,
            className: nS.kL,
            children: (0, c.jsxs)("div", {
                className: nS.hQ,
                children: [
                    (0, c.jsx)(ny, {}),
                    (0, c.jsx)(X.D, {
                        variant: "nitro-md",
                        color: "text-strong",
                        className: nS.RH,
                        children: J.intl.string(J.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
}
nD.displayName = "PremiumMarketingFooter";
var nM = i(939249);
let nO = function (e) {
    let { navBarSections: t, activeSectionId: i } = e,
        s = {
            [nI.HOME]: J.intl.string(J.t.uGRXjS),
            [nI.WHATS_NEW]: J.intl.string(J.t["mfcR/v"]),
            [nI.BEST_OF_NITRO]: J.intl.string(J.t.xQKkE8),
            [nI.PLANS]: J.intl.string(J.t.wyNMnm),
            [nI.COMPARE]: J.intl.string(J.t.pwD7If),
        },
        n = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        a = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, c.jsx)(t_.A, {
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
                            "aria-label": J.intl.string(J.t.O9MiXY),
                            children: a.map((e) => {
                                let t = i === e.id,
                                    n = s[e.id];
                                return (0, c.jsxs)(
                                    nM.D,
                                    {
                                        role: "tab",
                                        "aria-selected": t,
                                        className: ty.S0,
                                        onClick: e.scrollToSection,
                                        children: [
                                            (0, c.jsx)(K.E, {
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
                        null != n && (0, c.jsx)(tP.l, { size: "sm", location: N.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                        (0, c.jsx)(Z.A, { size: "sm", variant: "overlay-secondary" }),
                    ],
                }),
            ],
        }),
    });
};
var nU = i(713271),
    nL = i(704333),
    nk = i(414499),
    nG = i(597770),
    nw = i(500060),
    nB = i(866665),
    nH = i(406860),
    nF = i(870975),
    nV = i(698834);
function nW() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, nH.A)({ boxType: tF.$, thirdPartyPartner: "xbox" }),
        i = [
            { icon: nL.B, text: J.intl.string(tz.default.MUypiB) },
            { icon: nk.h, text: J.intl.string(tz.default.ec5Rdd) },
            { icon: nG.GiftIcon, text: J.intl.string(tz.default["9t2CzW"]), tooltip: tz.default.AyECej },
            { icon: nw.o, text: J.intl.string(tz.default.R7YJAY) },
        ];
    return (0, c.jsx)(k.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, c.jsx)("div", {
            ref: e,
            className: nV.iE,
            children: (0, c.jsxs)("div", {
                className: nV.Nr,
                children: [
                    (0, c.jsxs)("div", {
                        className: nV.j,
                        children: [
                            (0, c.jsx)("div", { className: nV._g }),
                            (0, c.jsx)("div", { className: nV.$h }),
                            (0, c.jsx)("div", { className: nV.Rv }),
                            (0, c.jsx)("div", { className: nV.Lw }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: nV.CT,
                        children: [
                            (0, c.jsxs)("div", {
                                className: nV.Qs,
                                children: [
                                    (0, c.jsxs)("div", {
                                        children: [
                                            (0, c.jsx)(X.D, {
                                                variant: "heading-xxl/bold",
                                                color: "text-strong",
                                                className: nV.R_,
                                                children: J.intl.string(tz.default.rkt1aw),
                                            }),
                                            (0, c.jsxs)("div", {
                                                children: [
                                                    i.map((e) => {
                                                        let { icon: t, text: i, tooltip: s } = e;
                                                        return (0, c.jsxs)(
                                                            "div",
                                                            {
                                                                className: nV.yf,
                                                                children: [
                                                                    (0, c.jsx)(t, {
                                                                        size: "sm",
                                                                        color: "var(--icon-strong)",
                                                                    }),
                                                                    (0, c.jsx)(K.E, {
                                                                        variant: "text-md/medium",
                                                                        color: "text-strong",
                                                                        children: i,
                                                                    }),
                                                                    null != s &&
                                                                        (0, c.jsx)("div", {
                                                                            className: nV.Jn,
                                                                            children: (0, c.jsx)(nB.m, {
                                                                                text: J.intl.string(s),
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
                                                            i,
                                                        );
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: nV.xF,
                                                        children: (0, c.jsx)(eC.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: tA.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: nV.WE,
                                        children: (0, c.jsx)(K.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: J.intl.format(tz.default.KDKdWi, { termsLink: (0, nF.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, c.jsx)("div", {
                                className: nV.r1,
                                children: (0, c.jsx)("img", {
                                    className: nV.wm,
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
var nz = i(886205),
    nY = i(750338),
    nX = i(610557),
    nK = i(505051);
function nZ(e) {
    let {
        className: t,
        boxLayout: i,
        title: s,
        shouldLoadVideo: n,
        isReducedMotion: a,
        startLeftAligned: l = !1,
        highlightBento: r,
    } = e;
    return (0, c.jsxs)("div", {
        className: u()(nK.boxBackdrop, t),
        children: [
            (0, c.jsx)(X.D, {
                className: nK.bentoSectionHeader,
                variant: "nitro-md",
                color: "text-strong",
                children: s,
            }),
            null != r && (0, c.jsx)("div", { className: nK.highlightBento, children: r }),
            (0, c.jsx)("div", {
                className: nK.bentoBoxesGrid,
                children: i.flatMap((e, t) => {
                    let i;
                    switch (e.length) {
                        case 3:
                            i = nX.A0.SMALL;
                            break;
                        case 2:
                            i = nX.A0.MEDIUM;
                            break;
                        default:
                            i = nX.A0.LARGE;
                    }
                    return e.map((e) =>
                        (0, c.jsx)(
                            nY.A,
                            { index: t + +!!l, ...e, size: i, shouldLoadVideo: n, isReducedMotion: a },
                            e.name,
                        ),
                    );
                }),
            }),
        ],
    });
}
let nJ = o.memo(function (e) {
        let t = (0, tM.b)("premium_marketing_bento"),
            i = (0, ih.mh)({ location: "premium_marketing_bento" }),
            { enabled: s } = (0, t0.vc)({ location: "premium_marketing_bento" }),
            { enabled: n } = nz.A.useConfig({ location: "premium_marketing_bento" }),
            a = t && !i && !(s && n),
            { whatsNewBoxes: l } = (0, nX.Ay)(a);
        return (0, c.jsx)(nZ, {
            boxLayout: l,
            title: J.intl.string(J.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: a ? (0, c.jsx)(nW, {}) : null,
            ...e,
        });
    }),
    nq = o.memo(function (e) {
        let { bestOfBoxes: t } = (0, nX.Ay)();
        return (0, c.jsx)(nZ, { boxLayout: t, title: J.intl.string(J.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    nQ = (0, ii.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var n$ = i(236834),
    n0 = i(540504);
function n1(e) {
    let { referrer: t } = e,
        { avatarSrc: i, eventHandlers: s } = (0, eU.A)({ userId: t?.id, size: eS._3.SIZE_24, animateOnHover: !0 });
    return (0, c.jsx)("div", {
        className: n0.$6,
        children: (0, c.jsxs)("div", {
            className: n0.sc,
            children: [
                (0, c.jsx)("div", {
                    className: n0.kR,
                    children: (0, c.jsx)(eD.eu, { src: i, "aria-label": t.username, size: eS._3.SIZE_32, ...s }),
                }),
                (0, c.jsx)(X.D, {
                    variant: "heading-sm/normal",
                    className: n0.FS,
                    color: "text-strong",
                    children: J.intl.format(J.t.IqxblS, { username: null != t.globalName ? t.globalName : t.username }),
                }),
            ],
        }),
    });
}
var n2 = i(579245),
    n3 = i(369805);
let n7 = function () {
    let e = (0, n3.A)(void 0, { includesPremiumGroup: !0 });
    return null == e ? null : (0, c.jsx)(eE, { text: e });
};
function n6() {
    let e = (0, x.bG)([nd.A], () => nd.A.getForSkuAndInterval((0, em.mH)(tA.pe.TIER_0), tA.WT.MONTH));
    return null != e ? (0, em.sS)(e) : "\u2026";
}
var n8 = i(508556);
let n5 = function (e) {
    let { containerVisibilityPercentage: t } = e,
        i = (0, e8.bG)([ea.Ay], () => ea.Ay.useReducedMotion),
        s = (0, e5.TM)();
    return (0, c.jsxs)("div", {
        "aria-hidden": !0,
        className: n8.YU,
        children: [
            (0, c.jsx)(tc, {
                supportHEVCAlpha: s,
                isMotionReduced: i,
                containerVisibilityPercentage: t,
                containerClassName: n8.wG,
                assetClassName: n8.lu,
            }),
            (0, c.jsx)(ta, {
                isMotionReduced: i,
                containerVisibilityPercentage: t,
                boltContainerClassName: n8.nJ,
                carContainerClassName: n8.IN,
                hammerContainerClassName: n8.Gj,
                keyContainerClassName: n8.FV,
                starContainerClassName: n8.E1,
                boltAssetClassName: n8.j7,
                carAssetClassName: n8.or,
                hammerAssetClassName: n8.Wv,
                keyAssetClassName: n8.rs,
                starAssetClassName: n8.OY,
            }),
        ],
    });
};
var n9 = i(14057);
let n4 = o.memo(function (e) {
    let { className: t, subscriptionTier: i, isEligibleForBogoPromotion: s, ref: n } = e,
        { analyticsLocations: a } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        l = n6(),
        r = nQ.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
        o = (0, n$.A)(),
        d = null != o,
        { visibilityPercentageRef: m, visibilityPercentage: g } = eA(!(0, x.bG)([ea.Ay], () => ea.Ay.useReducedMotion)),
        p = (0, s3.b)(),
        f = !d && p.length > 0,
        h = (0, eh.c)($.C.MARKETING_PAGE_BANNER),
        j = null != h && "marketingPageBanner" === h.properties.properties.oneofKind,
        E = (0, nu.ar)() && !j,
        b = (0, ep.O)(),
        T = (null != b && tA.U4.includes(b.discountId)) || j;
    return (0, c.jsx)(A.f5, {
        value: a,
        children: (0, c.jsx)("div", {
            ref: n,
            className: u()(n9.kL, t),
            "data-testid": "marketing-page-hero-header",
            children: (0, c.jsx)("div", {
                ref: m,
                children: (0, c.jsxs)("div", {
                    className: n9.hQ,
                    children: [
                        (0, c.jsx)(n5, { containerVisibilityPercentage: g }),
                        E && (0, c.jsx)(n7, {}),
                        (0, c.jsx)("div", {
                            className: n9.s8,
                            children: (0, c.jsx)(ew.F, {
                                forceLevel: 1,
                                children: (0, c.jsx)(X.D, {
                                    variant: "nitro-md",
                                    color: "text-strong",
                                    className: n9.wx,
                                    children: J.intl.string(J.t.YCZldK),
                                }),
                            }),
                        }),
                        (0, c.jsxs)("div", {
                            className: n9.rf,
                            children: [
                                d && (0, c.jsx)("div", { className: n9.eZ, children: (0, c.jsx)(n1, { referrer: o }) }),
                                f &&
                                    (0, c.jsx)("div", {
                                        className: n9.Qn,
                                        children: (0, c.jsx)(n2.A, {
                                            textColor: "text-strong",
                                            smallerText: !1,
                                            isApplicationHome: !0,
                                            enablePremiumBrandRefresh: !0,
                                        }),
                                    }),
                                (0, c.jsxs)("div", {
                                    className: E ? n9.es : n9.UJ,
                                    children: [
                                        (0, c.jsx)(eC.A, {
                                            size: "md",
                                            fullWidth: E,
                                            hasActivePromotion: !!s,
                                            subscriptionTier: T && null == i ? tA.pe.NONE : i,
                                            buttonTextOverride: T ? J.intl.string(J.t["2pG5Ga"]) : void 0,
                                        }),
                                        !E && (0, c.jsx)(Z.A, { variant: "secondary", size: "md" }),
                                    ],
                                }),
                                (0, c.jsx)("div", {
                                    className: n9.iQ,
                                    children: (0, c.jsx)(K.E, {
                                        color: "text-muted",
                                        variant: "text-xs/medium",
                                        children: r
                                            ? J.intl.string(J.t.jHqrJW)
                                            : J.intl.format(J.t.kt9wxs, { cheapestMonthlyPrice: l }),
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
var ae = i(820081),
    at = i(140735),
    ai = i(401432),
    as = i(580630),
    an = i(795269);
i(321073);
var aa = i(701974),
    al = i(55647),
    ar = i(202600);
function ac(e) {
    let { includes: t } = e;
    return t
        ? (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(ae.B, { size: "sm", color: eK.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(at.A, { children: J.intl.string(J.t["tq+6t/"]) }),
              ],
          })
        : (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(ai.a, { size: "xs", color: eK.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(at.A, { children: J.intl.string(J.t.l4qZrp) }),
              ],
          });
}
function ao(e) {
    let { label: t, tier0ColumnData: i, tier2ColumnData: s } = e;
    return (0, c.jsxs)("tr", {
        className: u()(al.nM, al.WQ),
        children: [
            (0, c.jsx)("th", {
                scope: "row",
                className: al.nx,
                children: (0, c.jsx)(K.E, { variant: "text-md/medium", children: t }),
            }),
            (0, c.jsx)("td", {
                className: al.Hn,
                children:
                    null != i.text
                        ? (0, c.jsx)(K.E, { variant: "text-md/medium", children: i.text })
                        : (0, c.jsx)(ac, { includes: !!i.includes }),
            }),
            (0, c.jsx)("td", {
                className: al.Hn,
                children:
                    null != s.text
                        ? (0, c.jsx)(K.E, { variant: "text-md/medium", children: s.text })
                        : (0, c.jsx)(ac, { includes: !!s.includes }),
            }),
        ],
    });
}
function ad(e) {
    let { title: t, subtitle: i, rows: s } = e;
    return (0, c.jsxs)("tbody", {
        children: [
            (0, c.jsx)("tr", {
                className: u()(al.nM, al.Gf),
                children: (0, c.jsxs)("td", {
                    className: al.nx,
                    colSpan: 3,
                    children: [
                        (0, c.jsx)(X.D, { variant: "heading-lg/bold", children: t }),
                        null != i && (0, c.jsx)(K.E, { variant: "text-xs/medium", children: i }),
                    ],
                }),
            }),
            s.map((e) => (0, c.jsx)(ao, { ...e }, e.id)),
        ],
    });
}
function au(e) {
    let { premiumType: t, priceString: i } = e,
        s = t === tA.PremiumTypes.TIER_0 ? J.intl.string(J.t.tUbSDK) : J.intl.string(J.t.Ipxkog);
    return (0, c.jsxs)("div", {
        className: al.nn,
        children: [
            (0, c.jsxs)("div", {
                className: al.KS,
                children: [
                    (0, c.jsx)(ei.t, { colorClass: al.oG }),
                    (0, c.jsx)(X.D, { variant: "heading-sm/semibold", children: s }),
                ],
            }),
            (0, c.jsx)(X.D, { variant: "heading-sm/semibold", children: i }),
        ],
    });
}
function am(e) {
    let { tier0Price: t, tier2Price: i, shouldUseDiscountPrice: s, tier2DiscountedPriceString: n } = e,
        a = s ? n : (0, as.$g)(i.amount, i.currency);
    return (0, c.jsx)("thead", {
        children: (0, c.jsxs)("tr", {
            className: al.U1,
            children: [
                (0, c.jsx)("th", {
                    scope: "col",
                    className: al.Cr,
                    children: (0, c.jsx)(X.D, { variant: "heading-xl/bold", children: J.intl.string(J.t.ED4UVD) }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: al.Hn,
                    children: (0, c.jsx)(au, {
                        premiumType: tA.PremiumTypes.TIER_0,
                        priceString: (0, as.$g)(t.amount, t.currency),
                    }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: al.Hn,
                    children: (0, c.jsx)(au, { premiumType: tA.PremiumTypes.TIER_2, priceString: a }),
                }),
            ],
        }),
    });
}
let ax = function (e) {
        let t,
            { className: i, hidePill: s = !1, selectedPlanTier: n = tA.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: a } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            l = (0, ef.V)(),
            r = l?.subscriptionTrial?.skuId,
            d = (0, ep.O)(),
            m = (0, z.YJ)(d),
            x = null != d && (0, z.U9)(d, tA.pe.TIER_2) && m === tA.gD.PREMIUM_MONTH_TIER_2,
            g = (0, z.N1)(m),
            p = null != g ? `${g}/${(0, em.FJ)(tA.WT.MONTH)}` : "",
            f = (0, em.JM)(tA.gD.PREMIUM_MONTH_TIER_0),
            h = (0, em.JM)(tA.gD.PREMIUM_MONTH_TIER_2),
            j = (function () {
                let e = (0, tM.b)("premium_marketing_comparison"),
                    t = [
                        {
                            id: 10,
                            label: J.intl.string(J.t["svn/YX"]),
                            tier0ColumnData: { includes: !0 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 7,
                            label: J.intl.string(J.t.ID5B6Z),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 13,
                            label: J.intl.string(J.t["PBUrx/"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 22,
                            label: J.intl.string(aa.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    i = null,
                    s = [],
                    { shouldShowBonusOrbsUX: n, multiplier: a } = (0, si.lk)(so.rE.NITRO_HOME_MARKETING),
                    { enabled: l } = ia.A.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: r } = (0, il.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    });
                return (
                    e &&
                        ((i = {
                            id: 23,
                            title: J.intl.string(J.t.NG1e6l),
                            subtitle: J.intl.format(tz.default.uJcbMv, {
                                termsLink: eu.A.getArticleURL(eq.MVz.NITRO_2_POINT_0),
                            }),
                            rows: [
                                {
                                    id: 24,
                                    label: J.intl.string(tz.default.OpOEmk),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        }),
                        l &&
                            i.rows.push({
                                id: 25,
                                label: J.intl.string(tz.default.Q0A42h),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        r &&
                            i.rows.push({
                                id: 26,
                                label: J.intl.string(iE.default["gc2sa/"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        n &&
                            s.push({
                                id: 27,
                                label: J.intl.formatToPlainString(J.t.Uhemob, { bonusOrbMultiplier: a }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        s.push({
                            id: 28,
                            label: J.intl.string(sl.default["20tmSN"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        })),
                    [
                        ...(null != i ? [i] : []),
                        { id: 17, title: J.intl.string(J.t.Ij3Zmv), rows: t },
                        {
                            id: 18,
                            title: J.intl.string(J.t.Wme3nX),
                            rows: [
                                {
                                    id: 0,
                                    label: J.intl.string(J.t.LrUABv),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 1,
                                    label: J.intl.string(J.t.DmfiwT),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 2,
                                    label: J.intl.string(J.t.Uukj4o),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 12,
                                    label: J.intl.string(J.t.NIKDqG),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 9,
                                    label: J.intl.string(J.t["5OAKhw"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        },
                        {
                            id: 19,
                            title: J.intl.string(J.t["6b3ydG"]),
                            rows: [
                                {
                                    id: 4,
                                    label: J.intl.string(J.t["ufhQC+"]),
                                    tier0ColumnData: { text: (0, em.EJ)(tA.PremiumTypes.TIER_0) },
                                    tier2ColumnData: { text: (0, em.EJ)(tA.PremiumTypes.TIER_2) },
                                },
                                {
                                    id: 11,
                                    label: J.intl.string(J.t.qQxxVc),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 3,
                                    label: J.intl.string(J.t["9kRJS8"]),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 21,
                                    label: J.intl.string(J.t["5BJqNF"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 5,
                                    label: J.intl.string(J.t.VwxlMw),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 6,
                                    label: J.intl.formatToPlainString(J.t.nyhDpw, {
                                        numBoosts: tA.M4,
                                        percentageOff: (0, as.l9)(no.default.locale, tA.oX / 100),
                                    }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 16,
                                    label: J.intl.string(J.t["93xPy3"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 8,
                                    label: J.intl.string(J.t.IzrZHz),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 20,
                                    label: J.intl.string(J.t.Rj1Qys),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                ...s,
                                {
                                    id: 15,
                                    label: J.intl.formatToPlainString(J.t["8crdzJ"], { maxChars: eq.CS1 }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 14,
                                    label: J.intl.string(J.t["il8+nC"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        },
                    ]
                );
            })();
        if (s) t = null;
        else {
            let e = null != l ? J.intl.string(J.t.IBYG5U) : J.intl.string(J.t.TR2B4T);
            t = (0, c.jsx)(an.R, { className: u()(al.Io, al.SP), text: e });
        }
        let E = r === tA.pe.TIER_0 || n === tA.PremiumTypes.TIER_0;
        return (0, c.jsx)(A.f5, {
            value: a,
            children: (0, c.jsxs)("div", {
                className: u()(al.zr, i),
                children: [
                    (0, c.jsx)(X.D, {
                        className: al.Qw,
                        variant: "nitro-md",
                        color: "text-strong",
                        children: J.intl.string(J.t.DbPgAd),
                    }),
                    (0, c.jsxs)("div", {
                        className: al.wY,
                        children: [
                            (0, c.jsxs)("div", {
                                className: u()(al.fO, { [al.Vd]: E, [al.hA]: !E }),
                                children: [
                                    !E && t,
                                    (0, c.jsx)("div", { className: al.xQ }),
                                    (0, c.jsxs)("div", {
                                        className: al.wN,
                                        children: [
                                            (0, c.jsx)("img", { src: ar, alt: "", className: al.kQ }),
                                            (0, c.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: al.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, c.jsxs)("table", {
                                className: al.tp,
                                children: [
                                    (0, c.jsx)(am, {
                                        tier0Price: f,
                                        tier2Price: h,
                                        shouldUseDiscountPrice: x,
                                        tier2DiscountedPriceString: p,
                                    }),
                                    j.map((e) => (0, o.createElement)(ad, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    ag = function (e) {
        let { scrollOffset: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
            i = (0, o.useCallback)(
                (e) => {
                    let i = r.current[e];
                    null != i &&
                        ((i.style.scrollMarginTop = `${t}px`),
                        i.scrollIntoView({ behavior: "smooth", block: "start" }));
                },
                [t],
            ),
            [s, n] = (0, o.useState)(Object.fromEntries(e.map((e) => [e, !1]))),
            [a, l] = (0, o.useState)(e[0]);
        (0, o.useEffect)(() => {
            let e = Object.keys(s).filter((e) => s[e]);
            e.length > 0 && l(e[0]);
        }, [s]);
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
                            (e, t, s) => (
                                (e[t] = {
                                    id: t,
                                    ref: (e) => {
                                        ((r.current[t] = e), null != e && (e.id = t));
                                    },
                                    scrollToSection: () => i(t),
                                    order: s,
                                }),
                                e
                            ),
                            {},
                        ),
                    [e, i],
                ),
                activeSectionId: a,
                setActiveSectionId: l,
            }
        );
    };
var ap = i(818348),
    af = i(773188);
let ah = () => {
    let e = (0, m.zy)();
    (0, _.P)(I);
    let t = o.useRef(null),
        i = o.useRef(null),
        s = o.useRef(null),
        n = o.useRef(null),
        a = o.useRef(null),
        l = o.useRef(null),
        r = (0, x.bG)([ea.Ay], () => ea.Ay.useReducedMotion),
        [d, g] = o.useState(!1),
        [p, f] = o.useState(!1),
        [h, j] = o.useState(!1),
        [E, b] = o.useState(!1),
        T = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        C = null != T ? (0, em.EL)(T) : null,
        R = null != C ? em.Ay.getSkuIdForPlan(C.planId) : null,
        v = null !== R && R !== tA.pe.TIER_2 ? tA.pe.TIER_2 : null,
        { analyticsLocations: P } = (0, A.Ay)(N.A.PREMIUM_MARKETING);
    o.useEffect(() => {
        b(!0);
    }, []);
    let { shouldShowBonusOrbsUX: y } = (0, si.lk)(so.rE.NITRO_HOME_MARKETING),
        S = y ? nU.N.COMBINED_ORBS : nU.N.ORB_REWARDS,
        D = o.useMemo(() => {
            let t = new URLSearchParams(e.search).get(s0.x);
            return "orbs" === t
                ? S
                : t === nU.N.THREE_P_PROMOTIONS
                  ? nU.N.THREE_P_PROMOTIONS
                  : t === nU.N.YOUTUBE
                    ? nU.N.YOUTUBE
                    : null;
        }, [e.search, S]);
    s$(D ?? "", null != D);
    let { navBarSections: U, activeSectionId: L } = ag([nI.HOME, nI.WHATS_NEW, nI.BEST_OF_NITRO, nI.PLANS, nI.COMPARE]),
        { home: w, whatsNew: B, bestOfNitro: H, plans: F, compare: V } = U,
        W = (0, c.jsxs)("div", {
            ref: i,
            className: u()(af.kL, af.Gd, af.iI, { [af.Hq]: !r }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(nR, { className: af.yH }),
                (0, c.jsx)(nO, { navBarSections: U, activeSectionId: L }),
                (0, c.jsxs)("div", {
                    className: af.Qr,
                    children: [
                        (0, c.jsx)("div", {
                            className: af.qY,
                            ref: w.ref,
                            children: (0, c.jsx)(k.L, {
                                innerRef: n,
                                onChange: (e) => g(e),
                                threshold: 0,
                                active: !0,
                                children: (0, c.jsx)(n4, { ref: n, subscriptionTier: v }),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: af.So,
                            ref: B.ref,
                            children: (0, c.jsx)(nJ, { shouldLoadVideo: E, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: af.KQ,
                            ref: H.ref,
                            children: (0, c.jsx)(nq, { shouldLoadVideo: E, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: af.qc,
                            ref: F.ref,
                            children: (0, c.jsx)(k.L, {
                                innerRef: s,
                                onChange: (e) => f(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, c.jsx)(nb, { innerRef: s }),
                            }),
                        }),
                        (0, c.jsx)("div", { className: af.aC, ref: V.ref, children: (0, c.jsx)(ax, {}) }),
                    ],
                }),
                (0, c.jsx)(k.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !h &&
                            (O.default.track(eq.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: P }),
                            j(!0));
                    },
                    children: (0, c.jsx)("div", { ref: a, className: af._Z }),
                }),
                (0, c.jsx)(nD, { ref: l }),
                (0, c.jsx)(nv, { isVisible: !d && !p && E, subscriptionTier: v }),
                (0, c.jsx)(nR, { className: af.MF }),
            ],
        });
    return (0, c.jsx)(tL.N, {
        theme: ap.NJ.DARK,
        children: (e) => (0, c.jsx)(G.Gt, { className: u()(af.XG, e), ref: t, children: W }),
    });
};
var aN = i(862482),
    aA = i(106512),
    aj = i(412260),
    aE = i(662367),
    ab = i(374403),
    aT = i(396375),
    aC = i(370049);
let aR = function (e) {
    let t,
        i,
        { premiumSubscription: s, className: n, textColor: a } = e,
        l = (0, nu.ar)();
    if (null == s) return null;
    let r = null != s ? em.Ay.getPremiumPlanItem(s) : null;
    if (
        (em.Ay.isBoostOnlySubscription(s)
            ? (t = J.intl.string(J.t.Uj0md3))
            : null != r && (t = em.Ay.getTierDisplayNameByPlanId(r.planId)),
        null == t)
    )
        return null;
    function o() {
        return (0, eo.openUserSettings)(ec.X.SUBSCRIPTIONS_PANEL);
    }
    let d = (null != r ? em.Ay.getSkuIdForPlan(r.planId) : null) === tA.pe.TIER_1;
    return (
        (i = null != a ? a : l ? "text-overlay-light" : "text-default"),
        (0, c.jsxs)(tk.Z, {
            className: u()(aC.kL, n, { [aC.He]: l }),
            type: tk.Z.Types.CUSTOM,
            children: [
                (0, c.jsx)(t5.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: u()(aC.Kk, { [aC.Pt]: l }),
                }),
                (0, c.jsx)(K.E, {
                    variant: "text-sm/medium",
                    color: i,
                    children: d
                        ? J.intl.format(J.t["tYuv+T"], {
                              helpdeskArticle: eu.A.getArticleURL(eq.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: o,
                          })
                        : J.intl.format(J.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: o }),
                }),
            ],
        })
    );
};
var aI = i(978836);
let a_ = function (e) {
    let { lifted: t = !1 } = e;
    return (0, c.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: u()(aI.zr, { [aI.N]: t }),
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
                        (0, c.jsx)("stop", { className: aI.eq }),
                        (0, c.jsx)("stop", { offset: "0.339235", className: aI.l_ }),
                        (0, c.jsx)("stop", { offset: "0.492065", className: aI.sM }),
                        (0, c.jsx)("stop", { offset: "0.823236", className: aI.zi }),
                        (0, c.jsx)("stop", { offset: "0.899558", className: aI.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var av = i(900797),
    aP = i(847374),
    ay = i(614268);
function aS(e) {
    let { className: t } = e;
    return (0, c.jsx)("div", {
        className: u()(ay.i, t),
        children: (0, c.jsx)(eF.E, { type: "early_access", variant: "premium" }),
    });
}
var aD = i(904788),
    aM = i(507553);
let aO = "/assets/5b4fec8511c3676a.svg",
    aU = "/assets/0838bda6ecd20d91.svg";
function aL(e, t, i) {
    return (0, i2.M)(e) ? t : i;
}
var ak = i(872461);
function aG(e) {
    let { isShowingAll: t, onClick: i } = e;
    return (0, c.jsxs)(nM.D, {
        onClick: i,
        className: ak.customButton,
        children: [
            t ? J.intl.string(J.t.maZaN3) : J.intl.string(J.t["37C26f"]),
            t
                ? (0, c.jsx)(av.t, { size: "md", color: "currentColor", className: ak.arrow })
                : (0, c.jsx)(aP.a, { size: "md", color: "currentColor", className: ak.arrow }),
        ],
    });
}
function aw(e) {
    let {
            title: t,
            description: i,
            className: s,
            imageSource: n,
            imageClassName: a,
            titleBadge: l,
            isNew: r = !1,
            isEarlyAccess: o = !1,
        } = e,
        { analyticsLocations: d } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD);
    return (0, c.jsx)(A.f5, {
        value: d,
        children: (0, c.jsxs)("div", {
            className: u()(ak.perkCard, s),
            children: [
                r ? (0, c.jsx)(aD.A, { className: ak.perkCardNewBadge }) : null,
                o ? (0, c.jsx)(aS, { className: ak.perkCardEarlyAccessBadge }) : null,
                (0, c.jsx)("img", { src: n, alt: "", className: u()(a, ak.perksCardArt) }),
                (0, c.jsxs)("div", {
                    children: [
                        (0, c.jsxs)(X.D, {
                            variant: "heading-lg/extrabold",
                            className: ak.perkCardHeading,
                            children: [t, " ", l],
                        }),
                        (0, c.jsx)(K.E, {
                            variant: "text-sm/normal",
                            className: ak.perkCardDescription,
                            children: "function" == typeof i ? i(d) : i,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let aB = function (e) {
    let { className: t, isSubscriberNitroHome: s = !1 } = e,
        [n, a] = o.useState(!1),
        l = (function (e) {
            let { styles: t } = e,
                s = (0, i3.Ay)(),
                n = (0, i8.X)("usePerkCards"),
                a = (0, e8.bG)([S.default], () => {
                    let e = S.default.getCurrentUser();
                    return em.Ay.canUsePremiumProfileCustomization(e);
                }),
                l = (0, em.EJ)(tA.PremiumTypes.TIER_2, { useSpace: !1 });
            return {
                badge: {
                    title: J.intl.string(J.t.SS87rQ),
                    description: J.intl.string(J.t.oD6CRr),
                    imageSource: "/assets/70e295f6158d848f.png",
                    imageClassName: t.badgeImage,
                },
                badgeAlt: {
                    title: J.intl.string(J.t["5cYMu0"]),
                    description: J.intl.string(J.t.vxk9va),
                    imageSource: aL(s, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
                    imageClassName: t.badgeNewImage,
                },
                clientThemes: {
                    title: J.intl.string(J.t["/xvEMy"]),
                    description: J.intl.string(J.t.HKWdjj),
                    className: t.clientThemesCard,
                    imageSource: "/assets/37e0853800afb796.svg",
                    imageClassName: t.clientThemesImage,
                },
                customAppIcons: {
                    title: J.intl.string(J.t.OuItFi),
                    description: J.intl.string(J.t.mPyrE6),
                    imageSource:
                        "https://cdn.discordapp.com/assets/content/bca160c31fc5390dd2b41d90060edcc912a45f6ab3beab44ea79e16bf1f6530f.png",
                    imageClassName: t.customAppIconImage,
                },
                emoji: {
                    title: J.intl.string(J.t["R2IV/Q"]),
                    description: J.intl.string(J.t.R5Xag2),
                    imageSource: "/assets/d8edaaf5cb32248f.svg",
                    imageClassName: t.emojiImage,
                },
                guildProfile: {
                    title: J.intl.string(J.t.lKDhhJ),
                    description: (e) => {
                        if (n)
                            return a
                                ? J.intl.formatToPlainString(J.t.aj1pfZ, { onCheckItOutClick: () => {} })
                                : J.intl.formatToPlainString(J.t.d2oYS8, { onTryItOutClick: () => {} });
                        function t() {
                            {
                                let { openUserSettings: t } = i(766075);
                                (aM.A.setState({ scrollPosition: sw._F.TRY_IT_OUT }),
                                    t(ec.X.PROFILE_PANEL, { analyticsLocations: e }));
                            }
                        }
                        return a
                            ? J.intl.format(J.t.aj1pfZ, { onCheckItOutClick: t })
                            : J.intl.format(J.t.d2oYS8, { onTryItOutClick: t });
                    },
                    imageSource: "/assets/e1b6b45be1ce4b03.png",
                    imageClassName: t.perGuildProfilesImage,
                },
                longerMessages: {
                    title: J.intl.string(J.t.BUScid),
                    description: J.intl.string(J.t.vN6XpQ),
                    imageSource: aL(s, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: J.intl.string(J.t.Bv8Pfk),
                    description: J.intl.string(J.t.JMfaTU),
                    imageSource: aL(s, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: J.intl.string(J.t.Bv8Pfk),
                    description: J.intl.string(J.t.JMfaTU),
                    imageSource: aL(s, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: J.intl.string(J.t["lGcW+c"]),
                    description: J.intl.string(J.t["/fDyO+"]),
                    imageSource: aL(s, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: J.intl.string(J.t["1c+xwT"]),
                    description: J.intl.string(J.t.hJG8ZN),
                    imageSource: aL(s, aU, aO),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: J.intl.string(J.t.tzdIwI),
                    description: J.intl.string(J.t.hJG8ZN),
                    imageSource: aL(s, aU, aO),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: J.intl.string(J.t.tzdIwI),
                    description: J.intl.string(J.t.hJG8ZN),
                    imageSource: aL(s, aU, aO),
                    imageClassName: t.stickersImage,
                },
                streaming: {
                    title: J.intl.string(J.t.RSXQYO),
                    description: J.intl.string(J.t.ymCPxp),
                    imageSource: "/assets/3bcdc01b26c7f691.svg",
                    imageClassName: t.streamingImage,
                },
                superReactions: {
                    title: J.intl.string(J.t["uZt5q/"]),
                    description: J.intl.string(J.t.ZK3ZoX),
                    imageSource: aL(s, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
                    imageClassName: t.superReactionsImage,
                },
                upload: {
                    title: J.intl.formatToPlainString(J.t.jqhAdL, { premiumMaxSize: l }),
                    description: J.intl.formatToPlainString(J.t["HI+cfm"], { premiumMaxSize: l }),
                    imageSource: "/assets/010eae6a6dbacc63.svg",
                    imageClassName: t.uploadImage,
                },
                videoBackground: {
                    title: J.intl.string(J.t.NaGpTf),
                    description: J.intl.string(J.t["A8O/Qw"]),
                    imageSource: aL(s, sB, sH),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: ak }),
        r = (0, e8.bG)([ea.Ay], () => ea.Ay.useReducedMotion),
        { analyticsLocations: d } = (0, A.Ay)();
    return (0, c.jsxs)("div", {
        className: u()(ak.perksContainer, t, {
            [ak.partiallyHidden]: s && !n,
            [ak.subscriberNitroHome]: s,
            [ak.reducedMotion]: r,
        }),
        children: [
            (0, c.jsx)(X.D, {
                variant: "heading-xxl/extrabold",
                className: ak.perksTitle,
                children: s ? J.intl.string(J.t.QX14gI) : J.intl.string(J.t.RGadQR),
            }),
            (0, c.jsx)("div", {
                className: u()(ak.perkCardContainer, { [ak.perkCardContainerExpanded]: n }),
                children: [
                    "emoji",
                    "streaming",
                    "upload",
                    "customAppIcons",
                    "soundboard",
                    "videoBackground",
                    "superReactions",
                    "stickersPremiumPerk",
                    "badgeAlt",
                ].map((e) => {
                    let t = l[e];
                    return null != t && (0, c.jsx)(aw, { ...t }, e);
                }),
            }),
            s &&
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)("div", {
                            className: u()({ [ak.sizeGizmo]: !n, [ak.sizeGizmoExpanded]: n }),
                            children: (0, c.jsx)(aG, {
                                onClick: function () {
                                    (O.default.track(eq.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: d,
                                        was_expanded: n,
                                    }),
                                        a(!n));
                                },
                                isShowingAll: n,
                            }),
                        }),
                        (0, c.jsx)("div", { className: u()(ak.cover, { [ak.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var aH = i(194509),
    aF = i(317587);
let aV = function (e) {
    let { isVisible: t, subscriptionTier: i, isApplicationHome: s, isEligibleForBogoPromotion: n } = e,
        a = (0, e4.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: eq.JJy.MARKETING_FLOATING_CTA },
        r = (0, i3.Ay)(),
        o = (0, nT.M)(r);
    return (0, c.jsx)(e9.animated.div, {
        className: u()(aF.iE, { [aF.H8]: s, [aF.q4]: !t }),
        style: a,
        children: (0, c.jsxs)("div", {
            className: s ? aF.zW : aF.iJ,
            children: [
                (0, c.jsx)(aT.A, {
                    color: o ? aN.XD.BRAND_INVERTED : void 0,
                    className: u()(aF.x6, { [aF.Ph]: o }),
                    subscriptionTier: i,
                    premiumModalAnalyticsLocation: l,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: o ? void 0 : aF.PJ,
                }),
                (0, c.jsx)(aH.A, { className: aF.x6, premiumModalAnalyticsLocation: l }),
            ],
        }),
    });
};
var aW = i(386564);
function az(e) {
    let {
            inOfferExperience: t,
            subscriptionTier: i,
            containerClassName: s,
            buttonClassName: n,
            isApplicationHome: a,
            isDarkMode: l,
            isEligibleForBogoPromotion: r,
        } = e,
        o = r
            ? (0, c.jsx)(aT.A, {
                  color: l ? aN.XD.BRAND_INVERTED : void 0,
                  className: u()(aW.x6, aW.Ph, n, { [aW.Sq]: t && a, [aW.MF]: a && !l }),
                  shinyButtonClassName: l ? void 0 : aW.PJ,
                  subscriptionTier: i,
                  hasActivePromotion: !0,
              })
            : (0, c.jsx)(aT.A, {
                  color: l || !a ? aN.XD.BRAND_INVERTED : void 0,
                  className: u()(aW.x6, aW.Ph, n, { [aW.Sq]: t && a, [aW.MF]: a && !l }),
                  subscriptionTier: i,
              }),
        d = t && a ? null : (0, c.jsx)(aH.A, { className: u()(aW.x6, n), color: a ? void 0 : aN.XD.WHITE });
    return (0, c.jsxs)("div", { className: u()(aW.UD, s), children: [o, " ", d] });
}
function aY() {
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(aD.p, { className: aW.zd }),
            (0, c.jsx)(aD.p, { className: aW.G }),
            (0, c.jsx)(aD.p, { className: aW.zy }),
            (0, c.jsx)(aD.p, { className: aW.GX }),
        ],
    });
}
function aX(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: i = !0, isApplicationHome: s } = e,
        n = n6();
    return (0, c.jsx)(K.E, {
        variant: t,
        color: s ? "text-subtle" : "text-overlay-light",
        className: u()(aW.h_, { [aW.If]: i, [aW.jn]: s }),
        children: J.intl.format(J.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let aK = function (e) {
    let { className: t, buttonClassName: i, subscriptionTier: s, isDarkMode: n, ref: a } = e,
        { analyticsLocations: l } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        r = (0, ex.QQ)(),
        o = (0, nu.ar)(),
        d = (0, s3.b)().length > 0,
        m = J.intl.string(J.t.YCZldK);
    return (0, c.jsx)(A.f5, {
        value: l,
        children: (0, c.jsxs)("div", {
            ref: a,
            className: u()(aW.kL, t, { [aW.V1]: !o, [aW.Q4]: !o && d }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, c.jsxs)("div", {
                    className: o ? aW.I6 : aW.G1,
                    children: [
                        (0, c.jsx)(ew.F, {
                            forceLevel: 1,
                            children: (0, c.jsx)(X.D, {
                                variant: o ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: m,
                            }),
                        }),
                        d
                            ? (0, c.jsx)("div", {
                                  className: aW.DF,
                                  children: (0, c.jsx)(n2.A, { textColor: "text-overlay-light", smallerText: !o }),
                              })
                            : (0, c.jsx)(aX, {}),
                        r
                            ? (0, c.jsx)("div", {
                                  className: aW.UD,
                                  children: (0, c.jsx)(aH.A, { className: u()(aW.x6, i), color: aN.XD.WHITE }),
                              })
                            : (0, c.jsx)(az, {
                                  subscriptionTier: s,
                                  inOfferExperience: o,
                                  buttonClassName: i,
                                  isDarkMode: n,
                              }),
                        d && (0, c.jsx)(aX, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !o && (0, c.jsx)(aY, {}),
            ],
        }),
    });
};
var aZ = i(22118),
    aJ = i(145359),
    aq = i(377770);
function aQ(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, c.jsx)(a_, { lifted: t }) : null;
}
let a$ = () => {
        (0, _.P)(I);
        let e = o.useRef(null),
            t = o.useRef(null),
            i = o.useRef(null),
            s = (0, i3.Ay)(),
            n = (0, i2.M)(s),
            [a, l] = o.useState(!1),
            [r, d] = o.useState(!1),
            [m, g] = o.useState(!1),
            [p, f] = o.useState(!1),
            h = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            j = null != h ? (0, em.EL)(h) : null,
            E = null != j ? em.Ay.getSkuIdForPlan(j.planId) : null,
            b = null !== E && E !== tA.pe.TIER_2 ? tA.pe.TIER_2 : null,
            T = (0, ef.V)(),
            C = T?.subscriptionTrial?.skuId,
            R = (0, nu.ar)(),
            v = (0, x.bG)([aj.A], () => {
                let e = aj.A.getMarketingComponentByType($.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            P = (0, ab.Q)(),
            { analyticsLocations: y } = (0, A.Ay)(N.A.PREMIUM_MARKETING);
        o.useEffect(() => {
            f(!0);
        }, []);
        let S = (0, c.jsx)("div", {
            className: aq.dY,
            children: (0, c.jsx)(k.L, {
                innerRef: e,
                onChange: (e) => d(e),
                threshold: 0.1,
                active: !0,
                children: (0, c.jsx)(s8.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, c.jsx)(aT.A, {
                        showIcon: !1,
                        subscriptionTier: tA.pe.TIER_0,
                        className: aJ.Ph,
                        look: aN.pR.OUTLINED,
                        color: aN.XD.WHITE,
                        buttonShineClassName: aJ.Qr,
                    }),
                    tier2CTAButton:
                        C === tA.pe.TIER_0
                            ? (0, c.jsx)(aT.A, {
                                  showIcon: !1,
                                  subscriptionTier: tA.pe.TIER_2,
                                  className: aJ.Ph,
                                  look: aN.pR.OUTLINED,
                                  color: aN.XD.WHITE,
                                  buttonShineClassName: aJ.Qr,
                              })
                            : (0, c.jsx)(aT.A, {
                                  color: aN.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: tA.pe.TIER_2,
                                  className: aJ.Ph,
                                  textOptions: { textClassName: aJ.Ac },
                                  buttonShineClassName: aJ.Qr,
                              }),
                }),
            }),
        });
        return (0, c.jsxs)("div", {
            className: aq.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(aR, { premiumSubscription: h, className: u()(aq.R3, { [aq.aZ]: R }) }),
                R &&
                    (0, c.jsxs)("div", {
                        className: aq.n1,
                        children: [
                            (0, c.jsx)(aQ, { inOfferExperience: R }),
                            (0, c.jsx)(tP.l, {
                                className: aq.ij,
                                size: "md",
                                location: N.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                        ],
                    }),
                (0, c.jsxs)("div", {
                    className: u()({ [aq.V1]: !R }),
                    children: [
                        null != v && (0, c.jsx)(aA.m, { className: aq.w$, config: v }),
                        (0, c.jsxs)("div", {
                            className: aq.iS,
                            children: [
                                !R &&
                                    (0, c.jsx)(tP.l, {
                                        className: aq.ij,
                                        size: "md",
                                        location: N.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, c.jsx)(k.L, {
                                    innerRef: t,
                                    onChange: (e) => l(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, c.jsx)(aK, {
                                        ref: t,
                                        subscriptionTier: b,
                                        className: u()({ [aq.p7]: R, [aq.Pw]: R, [aq.Cv]: null != h }),
                                        isDarkMode: n,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != P && (0, c.jsx)("div", { className: aq.Ol, children: (0, c.jsx)(aE.I, { component: P }) }),
                S,
                (0, c.jsx)(aB, { className: aq.B_ }),
                (0, c.jsx)("div", { className: aq.aC, children: (0, c.jsx)(aZ.A, { className: aq.JQ, hideCTAs: !0 }) }),
                (0, c.jsx)("div", { className: aq.hz }),
                (0, c.jsx)(aV, { isVisible: !a && !r && p, subscriptionTier: b, isApplicationHome: !1 }),
                (0, c.jsx)(k.L, {
                    innerRef: i,
                    onChange: (e) => {
                        e &&
                            !m &&
                            (O.default.track(eq.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: y }),
                            g(!0));
                    },
                    children: (0, c.jsx)("div", { ref: i, className: aq._Z }),
                }),
                (0, c.jsx)("img", {
                    src: s1,
                    className: aq.Kw,
                    width: 112,
                    height: 85,
                    alt: J.intl.string(J.t.X4IxWL),
                }),
            ],
        });
    },
    a0 = function (e) {
        let { entrypoint: t } = e,
            i = (0, ef.V)(),
            s = (0, ep.O)({ includePremiumGroupDiscount: !0 }),
            n = (0, s6.NF)({ trialOffer: i }),
            a = (0, s6.Tp)(),
            l = (0, x.bG)([s7.A], () => s7.A.getReminderStateId());
        switch (
            (o.useEffect(() => {
                (!0 === n && (0, s6.QG)(), !0 === a && (0, s6.ne)(l), (null != i || null != s) && (0, L.u1)(i, s));
            }, [i, s, n, a, l]),
            t)
        ) {
            case tA.tU.UserSettings:
                return (0, c.jsx)(a$, {});
            case tA.tU.ApplicationStoreHome:
                return (0, c.jsx)(ah, {});
            default:
                return null;
        }
    };
var a1 = i(531296);
let a2 = function (e) {
    let { entrypoint: t = tA.tU.UserSettings } = e;
    (0, _.P)(I);
    let i = (0, E.Hp)(),
        { sourceAnalyticsLocations: s, analyticsLocations: n } = (0, A.Ay)(N.A.PREMIUM_MARKETING),
        a = (0, x.bG)([M.A], () => M.A.hasFetchedSubscriptions()),
        l = (0, x.bG)([D.A], () => D.A.hasFetchedPaymentSources),
        r = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        d = r?.id,
        C = (0, ef.V)(),
        R = (0, ep.O)({ includePremiumGroupDiscount: !0 }),
        k = (0, b.Y)(tA.T7),
        [G, w] = o.useState(!0),
        B = o.useRef(0),
        H = (0, U.YE)(r, tA.PremiumTypes.TIER_2);
    ((0, s3.b)(),
        o.useEffect(() => {
            !(async function () {
                let e = Date.now();
                (await Promise.all([j.hP(), j.$o(), (0, p.zS)(null, null, eq.tF5.DISCOVERY)]),
                    (B.current = Date.now() - e),
                    w(!1));
            })();
        }, []),
        o.useEffect(() => {
            G ||
                O.default.track(eq.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: s,
                    load_duration_ms: B.current,
                });
        }, [s, G]),
        o.useEffect(() => {
            i && (null != C || null != R) && (0, L.u1)(C, R);
        }, [i, C, R]));
    let F = (0, m.zy)(),
        V = o.useRef(!1),
        W = a && l && k,
        [z, Y] = o.useState(W);
    (W && !z && Y(!0),
        o.useEffect(() => {
            if (V.current || !W) return;
            let e = new URLSearchParams(F.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: tA.pe.TIER_0, nitro: tA.pe.TIER_2 },
                i = Object.hasOwn(t, e) ? t[e] : void 0;
            null != i &&
                ((V.current = !0),
                (0, P.bG)(eq.BVt.APPLICATION_STORE),
                (0, v.A)({ subscriptionTier: i, analyticsLocations: n }));
        }, [W, F.search, n]));
    let X = (0, x.bG)([y.A], () => y.A.enabled),
        K = t === tA.tU.ApplicationStoreHome,
        Z = X
            ? (0, c.jsx)(f.A, {})
            : i
              ? (0, c.jsx)(T.uK, {})
              : K && H
                ? (0, c.jsx)(A.f5, { value: n, children: (0, c.jsx)(s2, { userId: d }) })
                : z
                  ? null
                  : (0, c.jsx)("div", { className: u()(a1.kL, a1.Lq), children: (0, c.jsx)(g.y, {}) });
    return null != Z
        ? !X && !i && K && H
            ? Z
            : (0, c.jsxs)(c.Fragment, { children: [K && (0, c.jsx)(h.A, {}), Z] })
        : (0, c.jsx)(A.f5, { value: n, children: (0, c.jsx)(a0, { entrypoint: t }) });
};
