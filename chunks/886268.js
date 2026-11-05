(i.d(t, { A: () => aW }), i(323874), i(14289), i(35956), i(205816));
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
    x = i(855986),
    g = i(289873),
    p = i(73825),
    f = i(369143),
    h = i(107834),
    N = i(793574),
    A = i(688810),
    b = i(781300),
    j = i(86379),
    E = i(160946),
    T = i(500597),
    C = i(840251),
    I = i(688151);
let R = new C.E([], I.$G.OPEN_NITRO, { location: "open nitro tab/settings" });
var _ = i(611924),
    v = i(778705),
    y = i(976860),
    P = i(351906),
    S = i(287809),
    D = i(295405),
    M = i(166403),
    O = i(129230),
    U = i(474090),
    L = i(739053),
    k = i(831259),
    G = i(516521),
    w = i(961250),
    B = i(622886),
    H = i(851767),
    F = i(917445),
    V = i(131168),
    W = i(482589),
    z = i(511484),
    Y = i(175020),
    K = i(877624),
    X = i(192308),
    Z = i(331322),
    J = i(834730),
    q = i(403581),
    Q = i(821609),
    $ = i(502572),
    ee = i(775602),
    et = i(366999),
    ei = i(531260),
    es = i(780964),
    en = i(766075),
    ea = i(786300),
    el = i(975571),
    er = i(722178),
    ec = i(89366),
    eo = i(881489),
    ed = i(423814),
    eu = i(77528),
    em = i(549996),
    ex = i(172218);
function eg() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, i] = (0, o.useState)(1),
        s = (0, o.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, ex.B)(
            (e) => {
                i(e.intersectionRatio);
            },
            s,
            e,
        ),
        visibilityPercentage: t,
    };
}
var ep = i(287763);
let ef = function (e) {
    let { text: t } = e;
    return (0, c.jsx)("div", {
        className: ep.i,
        children: (0, c.jsx)(J.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t }),
    });
};
var eh = i(371764),
    eN = i(103411),
    eA = i(65470),
    eb = i(792656),
    ej = i(536637),
    eE = i.n(ej),
    eT = i(496431),
    eC = i(792996),
    eI = i(850292);
let eR = function (e) {
    let { expiresAt: t, className: i, digitTextVariant: s = "body-md/medium" } = e,
        n = (0, eT.A)(eE()(t).toDate(), 1e3);
    if (null == n) return null;
    let { days: a, hours: l, minutes: r, seconds: o } = n,
        d = [
            { unitValue: a, unitType: "days" },
            { unitValue: l, unitType: "hours" },
            { unitValue: r, unitType: "minutes" },
            { unitValue: o, unitType: "seconds" },
        ];
    return (0, c.jsxs)("div", {
        className: u()(eI.Xl, i, { [eI.a3]: "body-lg/semibold" === s }),
        children: [
            (0, c.jsx)(J.E, {
                variant: "body-sm/semibold",
                color: "text-strong",
                children: eC.intl.string(eC.t["/ARFVE"]),
            }),
            (0, c.jsx)("div", {
                className: eI.$R,
                children: d.map((e, t) =>
                    (function (e, t, i) {
                        let s,
                            [n, a] = 1 === (s = e.unitValue.toString()).length ? ["0", s[0]] : [s[0], s[1]];
                        return (0, c.jsxs)(c.Fragment, {
                            children: [
                                (0, c.jsxs)(
                                    "div",
                                    {
                                        className: eI.bh,
                                        children: [
                                            (0, c.jsxs)("div", {
                                                className: eI.kB,
                                                children: [
                                                    (0, c.jsx)("div", {
                                                        className: eI.B2,
                                                        children: (0, c.jsx)(J.E, {
                                                            variant: i,
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: eI.B2,
                                                        children: (0, c.jsx)(J.E, {
                                                            variant: i,
                                                            color: "text-strong",
                                                            children: a,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, c.jsx)(J.E, {
                                                variant: "body-xs/semibold",
                                                color: "text-strong",
                                                children: (function (e) {
                                                    switch (e) {
                                                        case "days":
                                                            return eC.intl.string(eC.t.ixASa2);
                                                        case "hours":
                                                            return eC.intl.string(eC.t["8sNvNn"]);
                                                        case "minutes":
                                                            return eC.intl.string(eC.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return eC.intl.string(eC.t.JhaiLW);
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
                                        className: eI.cV,
                                        variant: "body-lg/normal",
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
var e_ = i(473702),
    ev = i(778712),
    ey = i(97808),
    eP = i(609425),
    eS = i(16371),
    eD = i(854627),
    eM = i(427262),
    eO = i(938767);
function eU() {
    let e = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        t = (0, eP.A)(),
        { avatarSrc: i, avatarDecorationSrc: s, eventHandlers: n } = (0, eD.A)({ userId: e?.id, size: ev._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, eM.mG)(e);
    return (0, c.jsxs)("div", {
        className: eO.kL,
        children: [
            (0, c.jsx)("div", {
                className: eO.my,
                children: (0, c.jsx)(ey.eu, {
                    src: i,
                    avatarDecoration: s,
                    size: ev._3.SIZE_56,
                    "aria-label": a,
                    ...n,
                }),
            }),
            (0, c.jsx)("div", { className: eO.QC, children: (0, c.jsx)(eS.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var eL = i(707554),
    ek = i(534514);
let eG = function (e) {
    let { className: t, color: i = "text-strong", variant: s = "nitro-lg", children: n } = e;
    return (0, c.jsx)(eL.F, {
        forceLevel: 1,
        children: (0, c.jsx)(ek.D, { className: t, variant: s, color: i, children: n }),
    });
};
var ew = i(805251),
    eB = i(110676),
    eH = i(132506),
    eF = i(610709),
    eV = i(478016),
    eW = i(318254),
    ez = i(646514),
    eY = i(626031),
    eK = i(197630);
i(232198);
var eX = i(652215),
    eZ = i(957457);
function eJ(e) {
    let { nRewardsGranted: t, referralRewardType: i, className: s } = e;
    return t < 1
        ? null
        : i === eK.xb.ORBS
          ? (0, c.jsx)(eq, { nRewardsGranted: t, className: s })
          : i === eK.xb.DISCOUNT
            ? (0, c.jsx)(eQ, { nRewardsGranted: t, className: s })
            : null;
}
function eq(e) {
    let { nRewardsGranted: t, className: i } = e,
        s = 5e3 * t,
        [n, a] = o.useState(0);
    return (
        o.useEffect(() => {
            a(s);
        }, [s]),
        (0, c.jsxs)(Z.B, {
            direction: "horizontal",
            align: "center",
            gap: 0,
            fullWidth: !1,
            className: i,
            children: [
                (0, c.jsxs)("div", {
                    className: eZ.u,
                    "aria-label": String(s),
                    children: [
                        (0, c.jsx)(eW.C, { size: "xs", color: ez.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                        (0, c.jsx)(eY.t, {
                            value: n,
                            onValueChange: eX.tEg,
                            onValueReached: eX.tEg,
                            targetTotalCounterTime: 800,
                            isRenderedWithoutLottieAnimation: !0,
                            textVariant: "body-sm/semibold",
                            textColor: "text-strong",
                            horizontalAlignment: "left",
                        }),
                    ],
                }),
                (0, c.jsx)(J.E, {
                    variant: "body-sm/medium",
                    color: "text-strong",
                    children: eC.intl.string(eC.t.UhguER),
                }),
            ],
        })
    );
}
function eQ(e) {
    let { nRewardsGranted: t, className: i } = e;
    return (0, c.jsxs)(Z.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        fullWidth: !1,
        className: i,
        "aria-label": eC.intl.formatToPlainString(eC.t["P//01n"], { discountPercent: 30, duration: t }),
        children: [
            (0, c.jsx)(eV.U, { size: "md", color: ez.A.colors.ICON_FEEDBACK_POSITIVE }),
            (0, c.jsx)(J.E, {
                variant: "body-sm/medium",
                color: "text-strong",
                children: eC.intl.format(eC.t["P//01n"], { discountPercent: 30, duration: t }),
            }),
        ],
    });
}
var e$ = i(303682),
    e0 = i(758836),
    e1 = i(558992);
function e2(e) {
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
        } = (0, eH.k)({ location: "PremiumNitroHomeReferralBannerTreatment" });
    return (0, c.jsxs)("div", {
        className: u()(e1.kL, t),
        children: [
            (0, c.jsx)("div", {
                className: e1.G3,
                children: (0, c.jsx)(eF.fx, {
                    nReferralsSent: s,
                    imageSize: 55,
                    backgroundClassName: e1.HP,
                    ringClassName: e1.pZ,
                    referralRewardType: m,
                    useAltReferralCardArt: d && x,
                }),
            }),
            (0, c.jsxs)("div", {
                className: u()(e1.IH, d && e1.zD),
                children: [
                    d &&
                        (0, c.jsx)("div", {
                            className: e1.aZ,
                            children: (0, c.jsx)(ew.E, { type: "beta", variant: "expressive" }),
                        }),
                    (0, c.jsxs)("div", {
                        className: e1.n4,
                        children: [
                            (0, c.jsx)(J.E, { variant: "body-md/semibold", color: "text-strong", children: l }),
                            (0, c.jsx)(J.E, {
                                variant: d ? "body-sm/medium" : "body-md/medium",
                                color: "text-subtle",
                                children: r,
                            }),
                        ],
                    }),
                    d
                        ? (0, c.jsxs)("div", {
                              className: e1.Wp,
                              children: [
                                  (0, c.jsx)(eF.ZP, { referralSentUsers: i }),
                                  (0, c.jsx)(eJ, { nRewardsGranted: o.numRewardGranted, referralRewardType: m }),
                              ],
                          })
                        : (0, c.jsx)(eF.ZP, { referralSentUsers: i, className: e1.t7 }),
                ],
            }),
            (0, c.jsx)(Q.$, {
                variant: "primary",
                disabled: !g && (!1 === n || !0 === a),
                text: g ? eC.intl.string(eC.t.iw5Ccc) : eC.intl.string(eC.t.Lm2nFc),
                onClick: () =>
                    g
                        ? (0, eB.Cz)({
                              tab: e0.G2.ORBS,
                              analyticsLocations: [],
                              analyticsSource: N.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR,
                          })
                        : (0, eF.jM)({
                              startingScreen: e$.SelectFriendsModalScreens.SELECT_FRIENDS,
                              analyticsLocations: [],
                          }),
            }),
        ],
    });
}
var e3 = i(164636),
    e6 = i(676279),
    e7 = i(120692),
    e5 = i(717421),
    e8 = i(396583),
    e9 = (((s = {}).SINE = "sine"), (s.COSINE = "cosine"), s),
    e4 = (((n = {}).UP = "up"), (n.DOWN = "down"), n);
let te = (e) => {
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
        u = (0, e5.z)(
            null != s ? { from: { y: 0 }, to: { y: 1 }, config: { duration: s.duration * r }, loop: !0 } : { y: 0 },
        ),
        m = s?.path === "sine" ? Math.sin : Math.cos,
        [x, g] = (0, o.useState)(1),
        p = (0, e5.z)(
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
        N = (0, e5.z)(
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
        [b, j] = (0, o.useState)(0),
        [E, T] = (0, o.useState)(1),
        C = (0, e5.z)({ xOffset: b, config: { tension: 10, friction: 10, duration: A } });
    return ((0, e8.A)(() => {
        (j(E * (0.5 * Math.random() * 5 + 2.5)), T((e) => -1 * e));
    }, A),
    l)
        ? d
        : (0, c.jsx)(e7.animated.div, {
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
var tt = i(382168);
let ti = function (e) {
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
        animateStar: h = !0,
    } = e;
    return (0, c.jsxs)(c.Fragment, {
        children: [
            null != s &&
                (0, c.jsx)("div", {
                    className: u()(tt.nJ, s),
                    children: (0, c.jsx)(te, {
                        blurAnimationData: { startBlurRadius: 10 * f, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e9.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: e4.UP,
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
                    className: u()(tt.IN, n),
                    children: (0, c.jsx)(te, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e9.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: e4.DOWN,
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
                    className: u()(tt.Gj, a),
                    children: (0, c.jsx)(te, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e9.SINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: e4.DOWN,
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
                    className: u()(tt.FV, l),
                    children: (0, c.jsx)(te, {
                        blurAnimationData: { startBlurRadius: 5 * f, endBlurRadius: 0, duration: 4e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e9.SINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: e4.UP,
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
                    className: u()(tt.E1, r),
                    children: (0, c.jsx)(te, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * f, duration: 3e3 },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: e9.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: e4.UP,
                                      range: 50,
                                      containerVisibilityPercentage: i,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t || !h,
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
var ts = i(607470),
    tn = i(562915);
let ta =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    tl = function (e) {
        let {
                supportHEVCAlpha: t,
                isMotionReduced: i,
                containerVisibilityPercentage: s,
                containerClassName: n,
                assetClassName: a,
                animationSpeedScale: l = 1,
                variant: r = "default",
            } = e,
            o = "settings" === r;
        return i || o
            ? (0, c.jsx)("div", {
                  className: n,
                  children: (0, c.jsx)("img", {
                      src: o
                          ? tn.A
                          : "https://cdn.discordapp.com/assets/content/46e72137fc3631c8024b00c33dbab5cf45740d4ab35f77bd96517830e727d0c5.png",
                      alt: "",
                      className: a,
                  }),
              })
            : (0, c.jsx)("div", {
                  className: n,
                  children: (0, c.jsx)(te, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                      yAxisAnimationData: { range: 20, duration: 4e3, path: e9.SINE },
                      parallaxAnimationData: {
                          pathDirection: e4.UP,
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
                                ts.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: a,
                                    children: (0, c.jsx)("source", { src: ta }),
                                },
                                ta,
                            ),
                  }),
              });
    },
    tr = function (e) {
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
            f = (0, e3.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
            h = (0, e6.TM)();
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(tl, {
                    supportHEVCAlpha: h,
                    isMotionReduced: f,
                    containerVisibilityPercentage: t,
                    containerClassName: i,
                    assetClassName: s,
                    animationSpeedScale: p,
                }),
                (0, c.jsx)(ti, {
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
var tc = i(942663);
let to = function (e) {
    let { containerVisibilityPercentage: t, compact: i } = e;
    return (0, c.jsx)(tr, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: u()(tc.wG, i && tc.Vx),
        flyingWumpusAssetClassName: u()(tc.lu, i && tc.ov),
        boltContainerClassName: u()(tc.nJ, i && tc.Wc),
        hammerContainerClassName: u()(tc.Gj, i && tc.XA),
        keyContainerClassName: u()(tc.FV, i && tc.oZ),
        starContainerClassName: u()(tc.E1, i && tc.LN),
        boltAssetClassName: u()(tc.j7, i && tc.QN),
        hammerAssetClassName: u()(tc.Wv, i && tc.B9),
        keyAssetClassName: u()(tc.rs, i && tc.I1),
        starAssetClassName: u()(tc.OY, i && tc.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var td = (((a = {}).MORNING = "morning"), (a.AFTERNOON = "afternoon"), (a.EVENING = "evening"), a),
    tu = i(454273);
let tm = function (e) {
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
        { visibilityPercentageRef: m, visibilityPercentage: g } = eg(!(0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion)),
        p =
            ((t = { [td.MORNING]: eC.t["Wvc/I+"], [td.AFTERNOON]: eC.t["d+0STx"], [td.EVENING]: eC.t.CqsxKI }),
            eC.intl.string(
                t[
                    (i = new Date().getHours()) >= 5 && i < 12
                        ? td.MORNING
                        : i >= 12 && i < 17
                          ? td.AFTERNOON
                          : td.EVENING
                ],
            )),
        f = o ?? (r ? (0, c.jsx)(e2, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tu.kL, tu.Eg, s),
        ref: l,
        children: (0, c.jsxs)("div", {
            className: u()(tu.W2, tu.HQ),
            ref: m,
            children: [
                (0, c.jsxs)(Z.B, {
                    align: "start",
                    gap: 32,
                    className: tu.ZU,
                    children: [
                        a && n,
                        (0, c.jsxs)(Z.B, {
                            align: "start",
                            gap: "lg",
                            children: [
                                (0, c.jsxs)(Z.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, c.jsx)(eG, { color: "text-default", variant: "nitro-md", children: p }),
                                        (0, c.jsx)(eU, {}),
                                    ],
                                }),
                                d,
                            ],
                        }),
                        f,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: tu.y3,
                    children: (0, c.jsx)(to, { containerVisibilityPercentage: g, compact: null == f }),
                }),
            ],
        }),
    });
};
var tx = i(549926);
let tg = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(tr, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: tx.wG,
        flyingWumpusAssetClassName: tx.lu,
        boltContainerClassName: tx.nJ,
        hammerContainerClassName: tx.Gj,
        keyContainerClassName: tx.FV,
        starContainerClassName: tx.E1,
        boltAssetClassName: tx.j7,
        hammerAssetClassName: tx.Wv,
        keyAssetClassName: tx.rs,
        starAssetClassName: tx.OY,
        animationSpeedScale: 1 / 0.7,
    });
};
var tp = i(499126);
let tf = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(tr, {
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
var th = i(682901);
function tN(e) {
    let { fpEndsAt: t, className: i, buttonVisibilityRef: s } = e,
        n = (0, eo.Zb)(t),
        { visibilityPercentageRef: a, visibilityPercentage: l } = eg(!(0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion));
    return (0, c.jsx)("div", {
        className: u()(tu.kL, i),
        ref: s,
        children: (0, c.jsxs)("div", {
            className: tu.Gs,
            ref: a,
            children: [
                (0, c.jsxs)(Z.B, {
                    align: "start",
                    gap: 24,
                    className: tu.E2,
                    children: [
                        (0, c.jsxs)(Z.B, {
                            align: "start",
                            gap: 12,
                            children: [
                                (0, c.jsx)(ef, { text: eC.intl.string(eC.t.yhldRB) }),
                                (0, c.jsx)(eG, { children: eC.intl.format(eC.t.FwjP6W, { days: n }) }),
                                (0, c.jsx)("div", {
                                    className: tu.X8,
                                    children: (0, c.jsx)(J.E, {
                                        variant: "body-md/medium",
                                        color: "text-default",
                                        children: eC.intl.string(eC.t.Jf8KrT),
                                    }),
                                }),
                            ],
                        }),
                        (0, c.jsxs)(Z.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            className: tu.oF,
                            children: [
                                (0, c.jsx)(eb.A, {
                                    size: "md",
                                    buttonTextOverride: eC.intl.string(eC.t["2+luBl"]),
                                    iconOverride: q.t,
                                    variantOverride: "expressive",
                                }),
                                (0, c.jsx)(Q.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: eC.intl.string(eC.t.Af7ye6),
                                    onClick: () => (0, en.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, c.jsx)("div", { className: tu.Hk, children: (0, c.jsx)(tf, { containerVisibilityPercentage: l }) }),
            ],
        }),
    });
}
function tA(e) {
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
        { visibilityPercentageRef: p, visibilityPercentage: f } = eg(!(0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion)),
        h = g ?? (m ? (0, c.jsx)(e2, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tu.kL, tu.Eg, t),
        ref: s,
        children: (0, c.jsxs)("div", {
            className: u()(tu.W2, tu.HQ),
            ref: p,
            children: [
                (0, c.jsxs)(Z.B, {
                    align: "start",
                    gap: 32,
                    className: u()(tu.ZU, tu.GW),
                    children: [
                        d && o,
                        null != n.expiresAt &&
                            (0, c.jsx)(eR, {
                                expiresAt: n.expiresAt.toISOString(),
                                digitTextVariant: "body-lg/semibold",
                            }),
                        (0, c.jsxs)(Z.B, {
                            align: "start",
                            gap: 16,
                            children: [
                                (0, c.jsx)(eG, {
                                    children: eC.intl.format(eC.t["3yZP0G"], { percent: n.discount.amount }),
                                }),
                                null != a &&
                                    (0, c.jsx)(J.E, {
                                        variant: "body-md/medium",
                                        color: "text-default",
                                        children: eC.intl.format(eC.t["3Q4wCy"], {
                                            discountedPrice: a,
                                            billingPeriod: (0, er.Ke)(n.discount.intervalType),
                                            numMonths: n.discount.intervalCount,
                                        }),
                                    }),
                            ],
                        }),
                        (0, c.jsxs)(Z.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            wrap: !0,
                            children: [
                                (0, c.jsx)(Q.$, {
                                    variant: "expressive",
                                    icon: q.t,
                                    size: "md",
                                    text: eC.intl.string(eC.t.zrCzVB),
                                    onClick: () => {
                                        var e;
                                        return (
                                            (e = e_.g.CONFIRM_DISCOUNT),
                                            void (0, X.mM)(async () => {
                                                let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                    await Promise.all([
                                                        i.e(489361),
                                                        i.e(227853),
                                                        i.e(470126),
                                                        i.e(149697),
                                                        i.e(128804),
                                                        i.e(60882),
                                                        i.e(71151),
                                                        i.e(286615),
                                                        i.e(735042),
                                                        i.e(311541),
                                                        i.e(274227),
                                                        i.e(870088),
                                                        i.e(300641),
                                                        i.e(747802),
                                                        i.e(966366),
                                                        i.e(84978),
                                                        i.e(153302),
                                                        i.e(807003),
                                                        i.e(88683),
                                                        i.e(983513),
                                                        i.e(216806),
                                                        i.e(310734),
                                                        i.e(324469),
                                                        i.e(70379),
                                                        i.e(417333),
                                                        i.e(127962),
                                                        i.e(295507),
                                                        i.e(959880),
                                                        i.e(174016),
                                                        i.e(22921),
                                                        i.e(11301),
                                                        i.e(861060),
                                                        i.e(364827),
                                                        i.e(626565),
                                                        i.e(177641),
                                                        i.e(678157),
                                                        i.e(223219),
                                                        i.e(40291),
                                                        i.e(544571),
                                                        i.e(523276),
                                                        i.e(812042),
                                                        i.e(729963),
                                                        i.e(830938),
                                                        i.e(538513),
                                                        i.e(325047),
                                                        i.e(50097),
                                                        i.e(594161),
                                                        i.e(435432),
                                                        i.e(80347),
                                                        i.e(830554),
                                                    ]).then(i.bind(i, 673761));
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
                                (0, c.jsx)(eA.A, {
                                    variant: "secondary",
                                    size: "md",
                                    buttonTextOverride: eC.intl.string(eC.t["3KomGa"]),
                                }),
                            ],
                        }),
                        h,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: u()(tu.y3, tu.Xx),
                    children: (0, c.jsx)(tg, { containerVisibilityPercentage: f }),
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
        } = tE(),
        { analyticsLocations: m } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        x = (0, em.c)(K.C.MARKETING_PAGE_BANNER),
        g = null != r && r.status === eX.Dmq.CANCELED,
        p = null;
    null != x &&
        "marketingPageBanner" === x.properties.properties.oneofKind &&
        (p = (0, c.jsx)(eh.x, {
            componentId: x.id,
            promotionId: x.promotionId,
            promotionBannerMarketingComponentFields: x.properties.properties.marketingPageBanner,
        }));
    let f = (0, eu.V)(),
        h = (0, ed.O)(),
        b = (0, z.U9)(h, th.pe.TIER_2) ? th.pe.TIER_2 : void 0,
        j = null != r && r.status !== eX.Dmq.ACCOUNT_HOLD && r.hasAnyPremiumNitro,
        E = (0, ei.A)(),
        T = E.isFractionalPremiumActive && !j && null == p && !l;
    if (i) return (0, c.jsx)(tN, { fpEndsAt: E.currentEntitlementEndsAt, className: t, buttonVisibilityRef: u });
    if (!g) {
        let e = T
            ? (0, c.jsxs)("div", {
                  className: tu.UJ,
                  children: [
                      (0, c.jsx)(eb.A, { size: "md", subscriptionTier: f?.subscriptionTrial?.skuId ?? b }),
                      (0, c.jsx)(eA.A, {
                          variant: "secondary",
                          size: "md",
                          buttonTextOverride: eC.intl.string(eC.t["3KomGa"]),
                      }),
                  ],
              })
            : null;
        return (0, c.jsx)(tm, {
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
        ? (0, c.jsx)(tA, {
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
        : (0, c.jsx)(tm, {
              className: t,
              headingTop: n,
              showPill: a,
              buttonVisibilityRef: u,
              shouldShowReferralProgressBar: s,
              marketingBanner: p,
          });
}
let [tj, tE] = (0, ea.A)(),
    tT = function (e) {
        let { className: t, buttonVisibilityRef: i, userDiscountOffer: s, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, eo.ds)(),
            r = (0, ec.QQ)(),
            d = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            u = null != d && d.status === eX.Dmq.CANCELED && null != s,
            m = r && !u,
            g = eC.intl.string(eC.t.qYKftX),
            p = (0, eN.m)(),
            { fractionalState: f, endsAt: h } = (0, ei.A)(),
            b = (0, et.Ay)(h, et.yE.CREDITS_ENDS_IN),
            j = f !== th.xc.NONE && !l;
        j && (m = !0);
        let E = o.useMemo(() => {
                if (!j) return (0, c.jsx)(ef, { text: g });
                let e = eC.intl.format(eC.t["yR+oDD"], {
                    helpCenterLink: el.A.getArticleURL(eX.MVz.FRACTIONAL_PREMIUM_ABOUT),
                });
                return (0, c.jsx)($.A, {
                    text: e,
                    "aria-label": e.toString(),
                    tooltipClassName: tu.YL,
                    position: "right",
                    children: (e) =>
                        (0, c.jsx)("div", {
                            ...e,
                            className: tu.V_,
                            children: (0, c.jsx)("div", { className: tu.eL, children: (0, c.jsx)(ef, { text: b }) }),
                        }),
                });
            }, [j, g, b]),
            T = o.useMemo(
                () => ({
                    headingTop: E,
                    showPill: m,
                    shouldShowChurnVariant: u,
                    premiumSubscription: d,
                    userDiscountOffer: s,
                    discountedPrice: n,
                    buttonVisibilityRef: i,
                }),
                [E, m, u, d, s, n, i],
            );
        return (0, c.jsx)(A.f5, {
            value: a,
            children: (0, c.jsx)(tj.Provider, {
                value: T,
                children: (0, c.jsx)(tb, { className: t, isInReverseTrial: l, shouldShowReferralProgressBar: p }),
            }),
        });
    };
var tC = i(820284),
    tI = i(742589),
    tR = i(392943),
    t_ = i(521440),
    tv = i(603202),
    ty = i(673992);
let tP = function () {
    return (0, c.jsx)(tC.A, {
        section: eX.JJy.NAVIGATION,
        children: (0, c.jsx)(tI.A, {
            className: u()(tv.TQ, ty.C$),
            transparent: !0,
            role: "navigation",
            children: (0, c.jsxs)("div", {
                className: tv.Wc,
                children: [
                    (0, c.jsxs)("div", {
                        className: ty.wk,
                        children: [
                            (0, c.jsx)(q.t, { colorClass: ty.tr }),
                            (0, c.jsx)("span", {
                                role: "img",
                                "aria-label": eC.intl.string(eC.t.Ipxkog),
                                className: ty.Ss,
                                children: (0, c.jsx)(tR.A, { color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: tv.MQ,
                        children: [
                            (0, c.jsx)(t_.l, { size: "sm", location: N.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB }),
                            (0, c.jsx)(eA.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var tS = i(325499),
    tD = i(613412),
    tM = i(885574),
    tO = i(43990),
    tU = i(993077),
    tL = i(139286),
    tk = i(872725),
    tG = i(920050),
    tw = i(51965),
    tB = i(375776),
    tH = i(727811),
    tF = i(222652),
    tV = i(831768),
    tW = i(934353);
function tz(e) {
    let { openRewardModal: t } = e,
        i = (0, tF.z)();
    if (i.kind === tF.N.SUBSCRIBE)
        return (0, c.jsxs)("div", {
            className: tW.R$,
            children: [
                (0, c.jsx)(eb.A, {
                    defaultTextOverride: i.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: th.pe.TIER_2,
                }),
                (0, c.jsx)(Q.$, { variant: "secondary", size: "md", text: eC.intl.string(eC.t.hvVgAZ), onClick: t }),
            ],
        });
    let s =
        i.claimStatus === tH.P.CLAIMED
            ? { text: eC.intl.string(tV.default.Plwzgf) }
            : { text: eC.intl.string(eC.t.hvVgAZ) };
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: tW.R$,
                children: [
                    (0, c.jsx)(tw.A, {
                        variant: "overlay-primary",
                        size: "md",
                        text: i.text,
                        icon: i.icon,
                        iconPosition: i.iconPosition,
                        onClick: i.onClick,
                        disabled: i.disabled,
                        loading: i.loading,
                    }),
                    (0, c.jsx)(Q.$, {
                        variant: "secondary",
                        size: "md",
                        ...s,
                        onClick: t,
                        disabled: i.requestInProgress,
                    }),
                ],
            }),
            i.claimStatus === tH.P.CLAIM_IN_PROGRESS &&
                (0, c.jsxs)("div", {
                    className: tW.ed,
                    children: [
                        (0, c.jsx)(tM.CircleInformationIcon, { size: "xs", color: "var(--text-subtle)" }),
                        (0, c.jsx)(J.E, {
                            variant: "body-xs/medium",
                            color: "text-subtle",
                            children: eC.intl.string(tV.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function tY(e) {
    let { glowing: t = !1 } = e;
    (0, tL.A)({
        type: tD.ImpressionTypes.VIEW,
        name: tD.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: tG.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: s } = (0, A.Ay)(N.A.CROISSANT_PREMIUM_HERO_CARD),
        n = o.useCallback(() => {
            (0, X.mM)(async () => {
                let { default: e } = await Promise.all([i.e(878140), i.e(532203)]).then(i.bind(i, 15654));
                return (t) => (0, c.jsx)(e, { ...t, sourceAnalyticsLocations: s });
            });
        }, [s]);
    return (0, c.jsx)(tO.N, {
        theme: eX.NJ8.DARK,
        children: (e) =>
            (0, c.jsx)(A.f5, {
                value: s,
                children: (0, c.jsx)("div", {
                    className: u()(e, tW.kL),
                    children: (0, c.jsx)(tk.A, {
                        cardType: tU.s.CUSTOM,
                        cardClassName: tW.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, c.jsxs)("div", {
                            className: tW.XF,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: tW.j,
                                    children: [
                                        (0, c.jsx)("div", { className: tW._g }),
                                        (0, c.jsx)("div", { className: tW.$h }),
                                        (0, c.jsx)("div", { className: tW.Rv }),
                                        (0, c.jsx)("div", { className: tW.Lw }),
                                        (0, c.jsx)("div", { className: tW.mR }),
                                    ],
                                }),
                                (0, c.jsxs)("div", {
                                    className: tW.Qs,
                                    children: [
                                        (0, c.jsx)("img", {
                                            className: tW.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, c.jsx)(ek.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: tW.DD,
                                            children: eC.intl.string(tV.default.RGT513),
                                        }),
                                        (0, c.jsx)(J.E, {
                                            variant: "body-md/normal",
                                            color: "text-strong",
                                            className: tW.h_,
                                            children: eC.intl.string(tV.default["+pTnsf"]),
                                        }),
                                        (0, c.jsx)(tz, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var tK = i(706778),
    tX = i(7684),
    tZ = i(112992);
let tJ = () =>
    (0, c.jsxs)("div", {
        className: tX.X,
        children: [
            (0, c.jsx)("div", {
                className: tX.W,
                children: (0, c.jsx)(tM.CircleInformationIcon, { size: "xxs", color: ez.A.colors.ICON_MUTED }),
            }),
            (0, c.jsx)(J.E, {
                variant: "body-xs/medium",
                color: "text-subtle",
                children: eC.intl.string(tV.default.Fs74z9),
            }),
        ],
    });
function tq(e) {
    let { className: t, containerClassName: i, glowing: s } = e,
        n = (0, tF.z)(),
        a = { isThirdPartyPerk: !0, subscriptionRequired: !0 },
        l =
            n.kind === tF.N.SUBSCRIBE
                ? a
                : {
                      ...a,
                      ctaText: n.text,
                      ctaIcon: n.icon,
                      ctaIconPosition: n.iconPosition,
                      ctaDisabled: n.disabled,
                      ctaLoading: n.loading,
                      onCtaClick: n.onClick,
                  },
        r = n.kind === tF.N.DEFAULT && n.claimStatus === tH.P.CLAIM_IN_PROGRESS;
    return (0, c.jsx)(tK.S, {
        id: tG.XBOX_PREMIUM_PERK_CARD_ID,
        title: eC.intl.string(tV.default.UVL9tD),
        description: eC.intl.string(tV.default["I+IXr0"]),
        ...l,
        footerContent: r ? (0, c.jsx)(tJ, {}) : void 0,
        className: t,
        containerClassName: i,
        glowing: s,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, c.jsx)("img", { src: tZ.A, alt: "Xbox Game Pass" }),
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
function t6(e) {
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
var t7 = i(517846),
    t5 = i(509434),
    t8 = i(669700),
    t9 = i(44724),
    t4 = i(371794);
let ie = new Date(Date.UTC(2026, 9, 23));
var it = i(945810);
let ii = (0, it.mj)({
    kind: "user",
    name: "2026-07-call-of-duty-3pp-expired",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var is = i(398523),
    ia = i(881373),
    il = i(721157),
    ir = i(555393),
    ic = i(325652),
    io = i(852218),
    id = i(52530),
    iu = i(452417),
    im = i(280761),
    ix = i(38297);
let ig = (0, it.mj)({
    kind: "user",
    name: "2026-09-rust-3p",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ip = i(612413);
let ih = new Date(Date.UTC(2026, 10, 5));
var iN = i(188275),
    iA = i(749962),
    ib = i(691450),
    ij = i(700755),
    iE = i(647024),
    iT = i(524698),
    iC = i(635088),
    iI = i(679502),
    iR = i(762493);
let i_ = "xgpp";
function iv(e) {
    let { card: t, backgroundAssetUrl: i, blurTint: s, glowing: n, autoClickCta: a } = e;
    return (0, c.jsx)("div", {
        className: t2.JE,
        children: (0, c.jsx)(tK.S, {
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
        s = (0, tS.b)("premium_subscriber_home_rewards");
    (0, t$.A)(th.tv);
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
                s = ((e = (0, id.eh)()), (t = (0, id.fR)()), null != e ? e : t),
                n = (0, im.U)(),
                a = (function (e) {
                    let { location: t } = e,
                        { enabled: i } = ii.useConfig({ location: t });
                    return i;
                })({ location: "useHardwarePartnerPerkCards" }),
                l = (0, ia.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
                r = is.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
                d = (0, ip.mh)({ location: "useThirdPartyPartnerPerkCards" }),
                u = (function (e) {
                    let { location: t } = e,
                        { enabled: i } = ig.useConfig({ location: t });
                    return i;
                })({ location: "useThirdPartyPartnerPerkCards" }),
                m = null === (0, ir.N)(),
                x = (0, t0.fY)({ location: "useThirdPartyPartnerPerkCards" }),
                { currentDate: g, nDaysInMonth: p } = (0, o.useMemo)(() => {
                    let e = new Date();
                    return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
                }, []);
            return (0, o.useMemo)(() => {
                let e =
                        a && null == s
                            ? {
                                  id: tG.CALL_OF_DUTY_3PP_EXPIRED_CARD_ID,
                                  title: eC.intl.string(iA.default["IcD/7p"]),
                                  description: eC.intl.formatToPlainString(iA.default.hausFi, {
                                      date: new Intl.DateTimeFormat(eC.intl.currentLocale, {
                                          day: "numeric",
                                          month: "long",
                                          timeZone: "UTC",
                                      }).format(ie),
                                  }),
                                  isThirdPartyPerk: !0,
                                  phase: ic.L.EXPIRED,
                                  pillText: eC.intl.string(iA.default.fxF0Jz),
                                  caption: (0, c.jsx)("img", { src: iC.A, alt: "Call of Duty: MW4" }),
                                  backgroundAssetUrl:
                                      "https://cdn.discordapp.com/assets/content/74dd725dde373bfdbced9606d5201ed2c555fc895f4da644a8de314de6906be3.webp",
                              }
                            : null,
                    t = l
                        ? {
                              id: tG.LOGITECH_3PP_CARD_ID,
                              title: eC.intl.string(ib.default.OlObRa),
                              description: eC.intl.format(ib.default.ZGOJ8R, {
                                  discountPercent: 30,
                                  termsUrl: el.A.getArticleURL(eX.MVz.LOGITECH_PROMOTION),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              progress: g.getDate() / p,
                              ctaText: eC.intl.string(eC.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, iu.P)({
                                      partnerIds: [io.XY],
                                      title: eC.intl.string(ib.default["2I7nK+"]),
                                      subtitle: eC.intl.format(ib.default.W8jOD0, {
                                          termsUrl: el.A.getArticleURL(eX.MVz.LOGITECH_PROMOTION),
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
                              analyticsOptions: { thirdPartyPartner: io.XY },
                              ctaDisabled: m,
                              ctaLoading: m,
                          }
                        : null,
                    o = r
                        ? {
                              id: tG.RECURRING_3P_PROMOTIONS_CARD_ID,
                              title: eC.intl.string(eC.t.m7PucM),
                              description: eC.intl.format(eC.t["1Zw6xL"], {}),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              caption: (0, c.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                              progress: g.getDate() / p,
                              ctaText: eC.intl.string(eC.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, iu.P)({
                                      partnerIds: [io.KS],
                                      title: eC.intl.string(eC.t["7ioAjs"]),
                                      subtitle: eC.intl.format(eC.t.LOYRxB, {
                                          helpCenterLink: el.A.getArticleURL(eX.MVz.RECURRING_PROMOTION),
                                      }),
                                      analyticsLocations: i,
                                  }),
                              blurTint: "#2E213D",
                              analyticsOptions: { thirdPartyPartner: io.KS },
                              ctaDisabled: m,
                              ctaLoading: m,
                          }
                        : null,
                    f = u
                        ? {
                              id: tG.RUST_3PP_CARD_ID,
                              title: eC.intl.string(iE.default.gQ1ctg),
                              description: eC.intl.format(iE.default.p7LH43, {
                                  endDate: new Intl.DateTimeFormat(eC.intl.currentLocale, {
                                      day: "numeric",
                                      month: "short",
                                      timeZone: "UTC",
                                  }).format(ih),
                                  termsUrl: el.A.getArticleURL(eX.MVz.RUST_PROMOTION),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              pillText: eC.intl.string(eC.t.y2b7CA),
                              caption: (0, c.jsx)("img", {
                                  src: (0, t4.YE)(iN.IG, "1499479228243251242", 128),
                                  alt: "Rust",
                              }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/b67b65e666d1350c52ff2abab5ac4eb205fa6545f63665aef16beeaa0efef060.webp",
                              blurTint: "#2E213D",
                              ctaText: eC.intl.string(iE.default.NmBRGV),
                              ctaIcon: t5.I,
                              ctaIconPosition: "end",
                              onCtaClick: () => (0, t9.default)({ applicationId: iN.IG }),
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
                              id: tG.YOUTUBE_3PP_CARD_ID,
                              title: eC.intl.string(iT.default["BdIVB+"]),
                              description: eC.intl.format(iT.default["3jY5i3"], {
                                  helpCenterUrl: el.A.getArticleURL(eX.MVz.YOUTUBE_PROMOTION),
                              }),
                              isThirdPartyPerk: !0,
                              subscriptionRequired: !0,
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/e07fd53d33f374f567964ff5b7843f09bc6943288891cfed6e573df04ba9741c.webp",
                              blurTint: "#18181C",
                              caption: (0, c.jsx)("img", { src: iI.A, alt: "YouTube Premium" }),
                              ctaText: eC.intl.string(iA.default.fcopjf),
                              onCtaClick: () =>
                                  (0, iu.P)({
                                      partnerIds: [io.NC],
                                      analyticsLocations: i,
                                      title: eC.intl.string(iT.default.TDZUui),
                                      subtitle: eC.intl.format(iT.default.BTLkvw, {
                                          helpCenterUrl: el.A.getArticleURL(eX.MVz.YOUTUBE_PROMOTION),
                                      }),
                                      onClose: () => {
                                          t8.Ay.fireSurveyAction(t7.w.YOUTUBE_3PP_MODAL_DISMISSED);
                                      },
                                  }),
                              analyticsOptions: { thirdPartyPartner: io.NC },
                              ctaDisabled: m,
                              ctaLoading: m,
                          }
                        : null,
                    riotCampaignCard:
                        null != n
                            ? {
                                  id: tG.RIOT_CREDIT_CAMPAIGN_PERK_CARD_ID,
                                  title: eC.intl.string(ij.default.zCdMTs),
                                  description: eC.intl.formatToPlainString(ij.default["8VH2lL"], {
                                      termsUrl: el.A.getArticleURL(eX.MVz.RIOT_CREDIT_CAMPAIGN),
                                  }),
                                  pillText:
                                      null != n.redemptionEndsAt
                                          ? eC.intl.formatToPlainString(iA.default.g7iyvR, {
                                                date: (0, il.Sw)(n.redemptionEndsAt),
                                            })
                                          : void 0,
                                  caption: (0, c.jsx)("img", {
                                      src: "https://cdn.discordapp.com/assets/content/cef348e36782f9a2173dea37eb7a54e04a0acb4d4f7f5074c8a3f9e5d2ae6e29.svg",
                                      alt: "Riot Games",
                                  }),
                                  backgroundAssetUrl:
                                      "https://cdn.discordapp.com/assets/content/2e11a92f42a86815654f152948f20362092f082dd2215e4ad7dbfa3eacea17fd.webp",
                                  ctaText: eC.intl.string(ij.default.en2ls2),
                                  blurTint: "#310A0B",
                                  isThirdPartyPerk: !0,
                                  onCtaClick: () => {
                                      (0, ix.W)({ analyticsLocations: i });
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
        b = s && null == f,
        j =
            s ||
            null != n ||
            null != a ||
            null != l ||
            null != r ||
            null != m ||
            null != g ||
            (null != x && x.id !== h) ||
            (null != d && d.id !== h),
        E = null;
    return (null != f
        ? (E = (0, c.jsx)(iv, {
              card: f.card,
              backgroundAssetUrl: f.backgroundAssetUrl,
              blurTint: f.blurTint,
              glowing: t === i_ || i === f.card.id,
              autoClickCta: i === f.card.id,
          }))
        : b && (E = (0, c.jsx)("div", { className: t2.JE, children: (0, c.jsx)(tY, { glowing: t === i_ }) })),
    null != E || j)
        ? (0, c.jsx)(t6, {
              id: i_,
              sectionClassName: u()(iR.uW, iR.Uv, iR.qr),
              heading: (0, c.jsx)(ek.D, {
                  variant: "nitro-sm",
                  className: u()(t3.R_, t2.U6),
                  children: eC.intl.string(eC.t.NG1e6l),
              }),
              beforeGrid: E,
              grid: j
                  ? (0, c.jsxs)(c.Fragment, {
                        children: [
                            null != g && (0, c.jsx)(tK.S, { ...g, containerClassName: t3.Nr, glowing: i === g.id }),
                            null != m &&
                                (0, c.jsx)(tK.S, {
                                    ...m,
                                    containerClassName: t3.Nr,
                                    glowing: i === m.id,
                                    autoClickCta: i === m.id,
                                }),
                            null != x &&
                                x.id !== h &&
                                (0, c.jsx)(tK.S, {
                                    ...x,
                                    containerClassName: t3.Nr,
                                    glowing: i === x.id,
                                    autoClickCta: i === x.id,
                                }),
                            null != d &&
                                d.id !== h &&
                                (0, c.jsx)(tK.S, {
                                    ...d,
                                    containerClassName: t3.Nr,
                                    glowing: i === d.id,
                                    autoClickCta: i === d.id,
                                }),
                            null != l && (0, c.jsx)(tK.S, { ...l, containerClassName: t3.Nr, glowing: i === l.id }),
                            s &&
                                (0, c.jsx)(tQ, {
                                    containerClassName: t3.Nr,
                                    glowing: i === tG.XBOX_PREMIUM_PERK_CARD_ID,
                                }),
                            null != a && (0, c.jsx)(tK.S, { ...a, containerClassName: t3.Nr, glowing: i === a.id }),
                            null != r && (0, c.jsx)(tK.S, { ...r, containerClassName: t3.Nr, glowing: i === r.id }),
                            null != n && (0, c.jsx)(tK.S, { ...n, containerClassName: t3.Nr, glowing: i === n.id }),
                        ],
                    })
                  : null,
          })
        : null;
}
var iP = i(313133),
    iS = i(67423);
let iD = function (e) {
    let { isVisible: t, premiumSubscription: s, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: l } = (0, A.Ay)(N.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        r = (0, e5.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsx)(e7.animated.div, {
        className: u()(iP.iE, { [iP.q4]: !t }),
        style: r,
        children: (0, c.jsxs)("div", {
            className: iP.iJ,
            children: [
                (0, c.jsx)("img", { alt: "", src: iS, className: iP.oU }),
                (0, c.jsxs)("div", {
                    className: iP.iQ,
                    children: [
                        (0, c.jsx)(ek.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            children: eC.intl.format(eC.t["3yZP0G"], { percent: n.discount.amount }),
                        }),
                        (0, c.jsx)(J.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: eC.intl.format(eC.t["3Q4wCy"], {
                                numMonths: n.discount.intervalCount,
                                discountedPrice: a,
                                billingPeriod: (0, er.Ke)(n.discount.intervalType),
                            }),
                        }),
                    ],
                }),
                (0, c.jsx)(Q.$, {
                    variant: "expressive",
                    icon: q.t,
                    size: "md",
                    text: eC.intl.string(eC.t.zrCzVB),
                    onClick: () =>
                        void (0, X.mM)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                i.e(489361),
                                i.e(227853),
                                i.e(470126),
                                i.e(149697),
                                i.e(128804),
                                i.e(60882),
                                i.e(71151),
                                i.e(286615),
                                i.e(735042),
                                i.e(311541),
                                i.e(274227),
                                i.e(870088),
                                i.e(300641),
                                i.e(747802),
                                i.e(966366),
                                i.e(84978),
                                i.e(153302),
                                i.e(807003),
                                i.e(88683),
                                i.e(983513),
                                i.e(216806),
                                i.e(310734),
                                i.e(324469),
                                i.e(70379),
                                i.e(417333),
                                i.e(127962),
                                i.e(295507),
                                i.e(959880),
                                i.e(174016),
                                i.e(22921),
                                i.e(11301),
                                i.e(861060),
                                i.e(364827),
                                i.e(626565),
                                i.e(177641),
                                i.e(678157),
                                i.e(223219),
                                i.e(40291),
                                i.e(544571),
                                i.e(523276),
                                i.e(812042),
                                i.e(729963),
                                i.e(830938),
                                i.e(538513),
                                i.e(325047),
                                i.e(50097),
                                i.e(594161),
                                i.e(435432),
                                i.e(80347),
                                i.e(830554),
                            ]).then(i.bind(i, 673761));
                            return (t) =>
                                (0, c.jsx)(e, {
                                    ...t,
                                    premiumSubscription: s,
                                    analyticsLocations: l,
                                    initialStep: e_.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var iM = i(761508),
    iO = i(151869),
    iU = i(62617),
    iL = i(387103);
function ik(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iU.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: iL.A,
        className: (0, iU.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
let iG =
    "https://cdn.discordapp.com/assets/content/a89ff8a07704142beff857453a6c8aa15400cf711f8fe3cbbfa7ff4f0b2a334f.svg";
function iw(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iU.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: iG,
        className: (0, iU.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iB = i(93712);
function iH(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iU.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: iB.A,
        className: (0, iU.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iF = i(345394);
function iV(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iU.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: iF.A,
        className: (0, iU.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iW = i(78211);
function iz(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iU.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/2d617cf5c40353ca4ec6ac76e1a48f6781439c18db06b8cfab0f194358abe555.svg",
        className: (0, iU.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iY = i(95278);
function iK(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iU.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/8a9a80f2b924da025612a160c7dc74c5e0fe675a90e3424737e6c5927739a6d0.svg",
        className: (0, iU.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
function iX(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iU.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/3ba8fce33a4733cdbadc10ac378d1b5523b0c0961e7edc74372c159e3009727f.svg",
        className: (0, iU.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iZ = i(996682);
function iJ(e) {
    let { color: t = ez.A.colors.ICON_STRONG, "aria-label": i, "aria-hidden": s, role: n, width: a, height: l } = e,
        r = o.useMemo(() => (0, iU.H)({ width: a, height: l, intrinsicWidth: 100, intrinsicHeight: 80 }), [a, l]);
    return (0, c.jsxs)("svg", {
        ...(0, iZ.A)({ "aria-label": i, "aria-hidden": s, role: n }),
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
function iq(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iU.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/1314d17fb23c01337cac4bfdaaff48c5e6ac1f515b0647f0964922b988f095c1.svg",
        className: (0, iU.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iQ = i(78701);
function i$(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iU.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: iQ.A,
        className: (0, iU.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var i0 = i(462887),
    i1 = i(736653),
    i2 = i(259065),
    i3 = i(206835),
    i6 = i(591179),
    i7 = i(462463),
    i5 = i(219882),
    i8 = i(105909),
    i9 = i(208223),
    i4 = i(696292),
    se = i(914313),
    st = i(321538),
    si = i(892227),
    ss = i(81466),
    sn = i(17268),
    sa = i(749012);
let sl = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, B.F)();
    if (!e || null == t) return null;
    let i =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, si.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, c.jsxs)("div", {
        className: sa.kL,
        children: [
            null != i &&
                (0, c.jsxs)("div", {
                    className: sa.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: sa.Pf,
                            children: [
                                (0, c.jsx)(ss.CalendarIcon, { size: "sm", color: ez.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(J.E, {
                                    variant: "body-sm/medium",
                                    color: "text-default",
                                    children: eC.intl.string(sn.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, c.jsx)(J.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: eC.intl.format(sn.default.xedPIb, { days: i }),
                        }),
                    ],
                }),
            null != i && t.total_rewarded_from_program > 0 && (0, c.jsx)("div", { className: sa.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, c.jsxs)("div", {
                    className: sa.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: sa.Pf,
                            children: [
                                (0, c.jsx)(eW.C, { size: "sm", color: ez.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(J.E, {
                                    variant: "body-sm/medium",
                                    color: "text-default",
                                    children: eC.intl.string(sn.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, c.jsx)(J.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: eC.intl.format(sn.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var sr = i(221596),
    sc = i(799544);
function so() {
    let { shouldShowBonusOrbsUX: e, multiplier: t } = (0, se.lk)(sr.rE.NITRO_HOME_MARKETING),
        { isEligible: i, programReward: s } = (0, B.F)();
    return {
        nitroOrbsRewardsCard: (0, o.useMemo)(
            () =>
                !i || null == s || null == s.reward_amount || s.reward_amount <= 0
                    ? null
                    : {
                          id: tG.NITRO_ORBS_REWARDS_CARD_ID,
                          title: eC.intl.string(sn.default.hx5AFp),
                          description: eC.intl.format(sn.default.wq3CF2, { orbsCount: s.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(sc.lH, sc.yK),
                          footerContent: (0, c.jsx)(sl, {}),
                          ctaText: eC.intl.string(sn.default.BxjHiu),
                          onCtaClick: () => (0, y.pX)(eX.BVt.COLLECTIBLES_SHOP_WITH_TAB(e0.G2.ORBS)),
                      },
            [i, s],
        ),
        questOrbMultiplierCard: (0, o.useMemo)(
            () =>
                e
                    ? {
                          id: tG.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: eC.intl.string(eC.t.Csf5Ol),
                          description: eC.intl.format(eC.t.NpUfej, { bonusOrbMultiplier: t }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: eC.intl.string(eC.t.jVcuVY),
                          onCtaClick: () => (0, st.mA)({ fromContent: i4.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: sc.Nf,
                      }
                    : null,
            [e, t],
        ),
    };
}
var sd = i(975807),
    su = i(95035),
    sm = i(728666),
    sx = i(88001),
    sg = i(107198),
    sp = i(817577);
function sf() {
    (0, sd.A)(sx.TE);
}
function sh(e) {
    let t = (0, sm.O9)(),
        s = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        n = s?.hasActiveTrial ?? !1,
        a = (0, o.useCallback)(() => {
            n
                ? (0, X.mM)(async () => {
                      let { default: e } = await i.e(499709).then(i.bind(i, 516044));
                      return (t) => (0, c.jsx)(e, { ...t });
                  })
                : (0, v.A)({
                      subscriptionTier: th.pe.TIER_2,
                      initialPlanId: th.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, o.useMemo)(
        () =>
            t
                ? {
                      id: tG.PREMIUM_GROUP_CARD_ID,
                      title: eC.intl.string(sg.default.YkvksF),
                      description: (0, c.jsxs)(c.Fragment, {
                          children: [
                              eC.intl.formatToPlainString(sg.default.JlyGQj, {
                                  totalSeats: 6,
                                  premiumGroupProductName: (0, sx.DP)(),
                              }),
                              (0, c.jsx)("div", {
                                  className: sc.LF,
                                  children: (0, c.jsx)(su.A, {
                                      onClick: sf,
                                      children: eC.intl.string(sg.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: eC.intl.string(eC.t.oW0eUd),
                      primaryAsset: sp,
                      ctaIcon: q.t,
                      ctaIconPosition: "start",
                      ctaText: eC.intl.string(eC.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var sN = i(562819),
    sA = i(793943),
    sb = i(757036),
    sj = i(621488),
    sE = i(70283),
    sT = i(643056),
    sC = i(470739);
let sI = (0, it.mj)({
    name: "2026-10-nitro-home-badge-directory",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var sR = i(655752),
    s_ = i(764231),
    sv = i(627380),
    sy = i(30084),
    sP = i(814014),
    sS = i(714206);
let sD =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    sM =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    sO =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function sU() {
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
        b,
        j,
        { analyticsLocations: E } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
        T = (0, i6.X)("useWhatsNewPerkCards"),
        C = (0, i7.A)({ analyticsLocations: E }),
        I = (0, o.useCallback)(() => {
            (0, en.openUserSettings)(es.X.PROFILE_PANEL, { analyticsLocations: E }, () =>
                (0, i2.L)({ analyticsLocations: E }),
            );
        }, [E]),
        R = (0, o.useCallback)(() => {
            (0, en.openUserSettings)(es.X.PROFILE_PANEL, { analyticsLocations: E }, () =>
                (0, sN.L)({ analyticsLocations: E }),
            );
        }, [E]),
        _ = (0, o.useCallback)(() => {
            (0, en.openUserSettings)(es.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        v =
            ((e = (0, x.bG)([S.default], () => S.default.getCurrentUser())),
            (t = e?.isFractionalPremiumWithNoStandardSub() ?? !1),
            (i = (function (e) {
                let { location: t } = e;
                return sI.useConfig({ location: t }).enabled;
            })({ location: "useTenureBadgePerkCard" })),
            (s = (0, sT.d)({ location: "useTenureBadgePerkCard" })),
            (n = (0, i8.$F)()),
            (a = (0, i8.Xb)()),
            (l = n?.status === i8.Wo.UPCOMING || t),
            (r = n?.status === i8.Wo.WITHHELD),
            (d = l || r),
            (m = (0, i9.N)(n?.id)),
            (g = (function () {
                let e = (0, i8.$F)(),
                    t = (0, sR.P)(),
                    i = (0, i8.Xb)();
                if (null == e || null == t || null == i || e.status === i8.Wo.WITHHELD) return null;
                let s = eE()(),
                    n = eE()(i),
                    a = t.tenureReqNumMonths,
                    l = n.clone(),
                    r = n.clone().add(a, "months").diff(l);
                return Math.max(0, Math.min(1, (s.diff(l) - 864e5) / r));
            })()),
            (p = (0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion) && !d),
            (f = (0, sv.t)()),
            (h = (0, sR.P)()),
            (0, o.useMemo)(() => {
                let e,
                    l = null != h ? eC.intl.string(h.nameUnformattedNitro) : void 0;
                null == n
                    ? t && (e = (0, s_.T)(th.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (e =
                          n.status === i8.Wo.UPCOMING
                              ? eC.intl.formatToPlainString(eC.t.a1eKDi, { days: f?.days ?? 0 })
                              : n.status === i8.Wo.WITHHELD
                                ? ((0, s_.T)(n.id, n.tenureReqNumMonths) ?? void 0)
                                : ((function (e, t) {
                                      if (null != e && null != t) {
                                          if (e.days <= 30)
                                              return eC.intl.formatToPlainString(eC.t.NEXoaI, {
                                                  days: e.days,
                                                  nextBadgeName: t,
                                              });
                                          if (e.months <= 3)
                                              return eC.intl.formatToPlainString(eC.t.KDV8oD, {
                                                  months: e.months,
                                                  nextBadgeName: t,
                                              });
                                      }
                                  })(f, l) ??
                                  (0, s_.T)(n.id, n.tenureReqNumMonths) ??
                                  void 0));
                let r = null;
                return (
                    null != m ? (r = d || p ? m.standard : m.ambientLarge) : t && (r = sS),
                    {
                        id: tG.TENURE_BADGE_CARD_ID,
                        title:
                            null != n ? eC.intl.string(n.nameUnformattedNitro) : t ? eC.intl.string(eC.t.tx9Fvw) : "",
                        pillText: eC.intl.string(eC.t["jyYgZ+"]),
                        primaryAsset: r,
                        primaryAssetClassName: u()(sP.pq, { [sP.rX]: d, [sP.kE]: p }),
                        caption: null != a ? eC.intl.formatToPlainString(eC.t.Hu4jfi, { date: new Date(a) }) : void 0,
                        description: e,
                        subscriptionRequired: !0,
                        progress: g ?? void 0,
                        ctaText: eC.intl.string(eC.t.jVcuVY),
                        onCtaClick: () => {
                            i && s
                                ? (0, sC.openBadgeDirectoryModal)({ initialBadgeId: sE.$.PREMIUM_TENURE })
                                : (0, sy.D)({ analyticsLocations: E });
                        },
                    }
                );
            }, [n, m, d, p, a, g, t, f, h, E, i, s])),
        { nitroOrbsRewardsCard: y, questOrbMultiplierCard: P } = so(),
        D =
            ((b = (0, sb.L)(th.PremiumTypes.TIER_2)),
            (j = (0, i5.rX)()),
            (0, o.useMemo)(
                () =>
                    b && j
                        ? {
                              id: tG.NITRO_FILE_UPLOAD_WHATS_NEW_CARD_ID,
                              title: eC.intl.string(sj.default["/cV3ka"]),
                              description: eC.intl.string(sj.default.H523FI),
                              primaryAsset: (0, c.jsx)(iW.I, { alt: "", ariaHidden: !0 }),
                          }
                        : null,
                [b, j],
            )),
        M = sh(E);
    return (0, o.useMemo)(() => {
        let e = [
                y,
                P,
                M,
                {
                    id: tG.DISPLAY_NAME_STYLES_CARD_ID,
                    title: eC.intl.string(eC.t.OLtTrt),
                    description: eC.intl.string(eC.t["di/pXR"]),
                    onCtaClick: T ? C : I,
                    ctaText: eC.intl.string(eC.t.jVcuVY),
                    primaryAsset: sD,
                },
                {
                    id: tG.CLIENT_THEMES_CARD_ID,
                    title: eC.intl.string(eC.t.acc6h6),
                    description: eC.intl.formatToPlainString(eC.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: sO,
                    ctaText: eC.intl.string(eC.t.jVcuVY),
                    onCtaClick: () => {
                        (0, sA.nf)(sA.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: tG.PERMADECOS_CARD_ID,
                    title: eC.intl.string(eC.t.L14NZN),
                    description: eC.intl.string(eC.t.eCZkAI),
                    primaryAsset: (0, c.jsx)(i$, { alt: "", ariaHidden: !0 }),
                    ctaText: eC.intl.string(eC.t.jVcuVY),
                    onCtaClick: T ? C : R,
                },
                {
                    id: tG.CUSTOM_APP_ICONS_CARD_ID,
                    title: eC.intl.string(eC.t["GU+wqh"]),
                    description: eC.intl.string(eC.t["1uPk1Z"]),
                    primaryAsset: sM,
                    ctaText: eC.intl.string(eC.t.y9TxXV),
                    onCtaClick: _,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            i = t ? 5 : 6;
        return (e.splice(+!!t, 0, v), null != D && e.splice(2, 0, D), e.length > i && e.splice(i, e.length - i), e);
    }, [v, y, P, D, M, I, _, R, C, T]);
}
var sL = i(355097);
let sk = "/assets/1eb1b74667b4c0f0.svg",
    sG = "/assets/983b60e4fcaf973b.svg";
var sw =
    (((l = {}).BEST_OF_NITRO = "bestof"),
    (l.APPEARANCE_STYLE = "appearance"),
    (l.UPGRADES = "upgrades"),
    (l.VIP_EXTRAS = "vip"),
    l);
let sB = [
    { id: "bestof", label: () => eC.intl.string(eC.t.q1u7nQ) },
    { id: "appearance", label: () => eC.intl.string(eC.t.CUnZkZ) },
    { id: "upgrades", label: () => eC.intl.string(eC.t.KC5q8v) },
    { id: "vip", label: () => eC.intl.string(eC.t.DjEAcv) },
];
var sH = i(18290);
function sF(e) {
    return e.id;
}
function sV(e) {
    let { glowingPerkId: t = null } = e,
        i = (function () {
            let e = (0, i1.DP)(),
                t = (0, i6.X)("useFavoritesPerkCards"),
                i = (0, i8.Lh)(),
                s = (0, i9.N)(i)?.standard ?? null,
                { analyticsLocations: n } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, i3.A)({ scrollPosition: sL._F.TRY_IT_OUT, analyticsLocations: n }),
                l = (0, o.useCallback)(() => {
                    (0, en.openUserSettings)(es.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: n });
                }, [n]),
                r = (0, o.useCallback)(() => {
                    (0, en.openUserSettings)(es.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: n });
                }, [n]),
                d = (0, o.useCallback)(() => {
                    (0, en.openUserSettings)(es.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: n });
                }, [n]),
                u = (0, o.useCallback)(() => {
                    (0, y.pX)(eX.BVt.COLLECTIBLES_SHOP);
                }, []),
                m = (0, o.useCallback)(() => {
                    (0, en.openUserSettings)(es.X.SOUNDBOARD_CATEGORY, { analyticsLocations: n });
                }, [n]),
                x = (0, i7.A)({ analyticsLocations: n }),
                g = (0, o.useCallback)(() => {
                    (0, en.openUserSettings)(es.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, i2.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                p = sU(),
                f = (0, o.useMemo)(() => p.map((e) => e?.id), [p]),
                { nitroOrbsRewardsCard: h, questOrbMultiplierCard: b } = so(),
                j = sh(n),
                E = (0, o.useMemo)(
                    () => [
                        {
                            id: tG.SERVER_BOOSTS_CARD_ID,
                            title: eC.intl.formatToPlainString(eC.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: eC.intl.formatToPlainString(eC.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: eC.intl.string(eC.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: (0, c.jsx)(ik, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != j ? { ...j, categories: ["bestof"] } : null,
                        {
                            id: tG.PROFILES_CARD_ID,
                            title: eC.intl.string(eC.t.xDRab3),
                            description: eC.intl.string(eC.t.yn6fWA),
                            ctaText: eC.intl.string(eC.t.jVcuVY),
                            onCtaClick: t ? x : a,
                            primaryAsset: (0, c.jsx)(iw, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tG.HD_VIDEO_CARD_ID,
                            title: eC.intl.string(eC.t["/mQ5gg"]),
                            description: eC.intl.string(eC.t["7WwAXh"]),
                            primaryAsset: (0, c.jsx)(iH, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tG.CLIENT_THEMES_CARD_ID,
                            title: eC.intl.string(eC.t.acc6h6),
                            description: eC.intl.formatToPlainString(eC.t.WQazjs, { themeCount: 20 }),
                            ctaText: eC.intl.string(eC.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: sO,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tG.MORE_EMOJIS_CARD_ID,
                            title: eC.intl.string(eC.t.D8vIDT),
                            description: eC.intl.string(eC.t.DRMecB),
                            primaryAsset: (0, c.jsx)(iV, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tG.LARGE_UPLOADS_CARD_ID,
                            title: eC.intl.string(eC.t.nL1WZV),
                            description: (0, i5.M6)({
                                legacyCopy: eC.intl.formatToPlainString(eC.t.k8LC1w, { maxSizeMb: 500 }),
                                rolloutCopy: eC.intl.formatToPlainString(eC.t.teOTfv, {
                                    maxFileSize: (0, er.EJ)(th.PremiumTypes.TIER_2, { useSpace: !1 }),
                                }),
                            }),
                            primaryAsset: (0, c.jsx)(iW.I, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tG.CUSTOM_APP_ICONS_CARD_ID,
                            title: eC.intl.string(eC.t["GU+wqh"]),
                            description: eC.intl.string(eC.t["1uPk1Z"]),
                            ctaText: eC.intl.string(eC.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: sM,
                            categories: ["appearance"],
                        },
                        {
                            id: tG.ENTRANCE_SOUNDS_CARD_ID,
                            title: eC.intl.string(eC.t.WJfCPi),
                            description: eC.intl.string(eC.t.liQKJR),
                            ctaText: eC.intl.string(eC.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: tG.DISPLAY_NAME_STYLES_CARD_ID,
                            title: eC.intl.string(eC.t.OLtTrt),
                            description: eC.intl.string(eC.t["di/pXR"]),
                            onCtaClick: t ? x : g,
                            ctaText: eC.intl.string(eC.t.jVcuVY),
                            primaryAsset: sD,
                            categories: ["appearance"],
                        },
                        {
                            id: tG.CUSTOM_SOUNDS_CARD_ID,
                            title: eC.intl.string(eC.t["Cu/oFd"]),
                            description: eC.intl.string(eC.t.czj2aa),
                            primaryAsset: (0, c.jsx)(iz, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tG.SPECIAL_STICKERS_CARD_ID,
                            title: eC.intl.string(eC.t.MQoVeb),
                            description: eC.intl.string(eC.t.HGCLZX),
                            primaryAsset: (0, c.jsx)("div", {
                                className: sc.Uc,
                                children: (0, c.jsx)(iY.n, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tG.SUPER_REACTIONS_CARD_ID,
                            title: eC.intl.string(eC.t.qERvAA),
                            description: eC.intl.string(eC.t.WkUWzx),
                            primaryAsset: (0, c.jsx)(iK, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tG.VIDEO_BACKGROUNDS_CARD_ID,
                            title: eC.intl.string(eC.t.ssVDYQ),
                            description: eC.intl.string(eC.t.aUSRMa),
                            primaryAsset: (0, i0.M)(e) ? sk : sG,
                            categories: ["upgrades"],
                        },
                        {
                            id: tG.EARLY_ACCESS_CARD_ID,
                            title: eC.intl.string(eC.t["g/KRY6"]),
                            description: eC.intl.string(eC.t.JzAmJc),
                            primaryAsset: (0, c.jsx)(iX, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tG.BADGE_CARD_ID,
                            title: eC.intl.string(eC.t.Bn3CtB),
                            description: eC.intl.string(eC.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != s
                                    ? (0, c.jsx)("img", { src: s, alt: "", width: 160, draggable: "false" })
                                    : (0, c.jsx)(iJ, { color: ez.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tG.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: eC.intl.string(eC.t["MTD+7w"]),
                            description: eC.intl.string(eC.t.Bhs0s6),
                            ctaText: eC.intl.string(eC.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, c.jsx)(iq, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != h ? { ...h, categories: ["vip"] } : null,
                        null != b ? { ...b, categories: ["vip"] } : null,
                        {
                            id: tG.PERMADECOS_CARD_ID,
                            title: eC.intl.string(eC.t.L14NZN),
                            description: eC.intl.string(eC.t.eCZkAI),
                            primaryAsset: (0, c.jsx)(i$, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, s, h, b, j, a, l, r, d, u, m, g, x, t],
                );
            return (0, o.useMemo)(() => E.filter((e) => null != e && !f.includes(e.id)), [E, f]);
        })(),
        s = null != t ? i.find((e) => e?.id === t) : null,
        [n, a] = (0, o.useState)(s?.categories[0] ?? sw.BEST_OF_NITRO),
        l = sB.find((e) => e.id === n)?.label(),
        r = i.filter((e) => null != e && e.categories.includes(n));
    return (0, c.jsxs)("div", {
        className: sH.uW,
        children: [
            (0, c.jsx)(ek.D, { variant: "nitro-sm", children: eC.intl.string(eC.t["Uh3+CA"]) }),
            (0, c.jsx)(iM.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: sH.Lq,
                "aria-label": eC.intl.string(eC.t["Uh3+CA"]),
                children: sB.map((e) =>
                    (0, c.jsx)(iM.V.Item, { id: e.id, className: sH.IC, children: e.label() }, e.id),
                ),
            }),
            (0, c.jsx)(
                iO.A,
                {
                    "aria-label": eC.intl.formatToPlainString(eC.t.akg5nT, { filterName: l }),
                    gap: 20,
                    className: sH.jG,
                    items: r,
                    getItemKey: sF,
                    renderItem: (e, i) =>
                        (0, c.jsx)(tK.S, { ...e, glowing: t === e.id, containerClassName: sH.Ui, listItemProps: i }),
                },
                n,
            ),
        ],
    });
}
var sW = i(72979);
let sz = function (e) {
    let { className: t } = e,
        i = (0, i1.DP)();
    return (0, c.jsx)("img", {
        className: u()(sW.D, t),
        src: (0, i0.M)(i) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var sY = i(684251);
let sK = function (e) {
    let { children: t } = e;
    return (0, c.jsxs)("div", {
        className: u()(sY.kL, sY.Gd, sY.Eg),
        children: [(0, c.jsx)(sz, {}), (0, c.jsx)(tP, {}), t],
    });
};
function sX(e) {
    let { glowingPerkId: t = null } = e,
        i = sU();
    return (0, c.jsx)(t6, {
        sectionClassName: t3.uW,
        heading: (0, c.jsx)(ek.D, { variant: "nitro-sm", className: t3.R_, children: eC.intl.string(eC.t.Aw5DRm) }),
        grid: (0, c.jsx)(c.Fragment, {
            children: i.map((e, i) => {
                if (null == e) return;
                let s = 0 === i && !0 === e.featured,
                    n = t === e.id;
                return (0, c.jsx)(
                    tK.S,
                    {
                        ...e,
                        glowing: n,
                        autoClickCta: n && e.id === tG.YOUTUBE_3PP_CARD_ID,
                        featured: s,
                        containerClassName: u()(t3.Nr, { [t3.Nq]: s }),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function sZ(e, t, i, s) {
    !(function (e, t, i) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            n = arguments.length > 4 ? arguments[4] : void 0,
            a = (0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
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
var sJ = i(92737);
let sq = "/assets/cd2be35d285d4675.svg",
    sQ = (e) => {
        let { userId: t } = e,
            i = (0, m.zy)();
        (o.useEffect(() => {
            ((0, w.Ay)(), null != t && (0, F.A)(t));
        }, [t]),
            o.useEffect(() => {
                E(!0);
            }, []),
            (0, W.j)(),
            (0, _.P)(R));
        let s = o.useRef(null),
            n = o.useRef(null),
            a = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            { isReady: l, programReward: r } = (0, B.F)(),
            {
                scrollTargetId: d,
                glowingSectionId: p,
                glowingPerkId: f,
                scrollBlock: h,
                scrollInline: b,
            } = o.useMemo(() => {
                let e = new URLSearchParams(i.search),
                    t = e.get("perk"),
                    s = e.get(sJ.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != s
                      ? { scrollTargetId: s, glowingSectionId: s, scrollBlock: "start" }
                      : {};
            }, [i.search]);
        sZ(d ?? "", null != d, h, b);
        let [j, E] = o.useState(!1),
            T = (0, V.p)(),
            C = o.useRef(null),
            [I, v] = o.useState(!1),
            y = null != T && null != a && a.status === eX.Dmq.CANCELED,
            P = (0, z.iU)(th.gD.PREMIUM_MONTH_TIER_2, T, a),
            S = !I && y,
            D = (0, x.bG)([H.A], () => (null != t ? H.A.getUserProfile(t) : null)),
            { analyticsLocations: U } = (0, A.Ay)(N.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [L, K] = o.useState(!1);
        return null != D && (l || null != r)
            ? (0, c.jsxs)(G.Gt, {
                  className: u()(sY.xW, sY.Gd),
                  ref: s,
                  children: [
                      (0, c.jsx)(sK, {
                          children: (0, c.jsxs)(A.f5, {
                              value: U,
                              children: [
                                  (0, c.jsx)(k.L, {
                                      innerRef: C,
                                      onChange: (e) => v(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, c.jsx)(tT, {
                                          buttonVisibilityRef: C,
                                          className: sY.v1,
                                          userDiscountOffer: T,
                                          discountedPrice: P,
                                      }),
                                  }),
                                  (0, c.jsx)(sX, { glowingPerkId: f }),
                                  (0, c.jsx)(iy, { glowingPerkId: f, glowingSectionId: p }),
                                  (0, c.jsx)(sV, { glowingPerkId: f }),
                                  (0, c.jsx)(Y.A, {
                                      className: sY.Zy,
                                      location: N.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: eX.liQ.NITRO_HOME, section: eX.JJy.GIFT_BANNER },
                                  }),
                                  (0, c.jsx)("div", { className: sY.hz }),
                                  (0, c.jsx)(k.L, {
                                      innerRef: n,
                                      onChange: (e) => {
                                          e &&
                                              !L &&
                                              (O.default.track(eX.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: U,
                                              }),
                                              K(!0));
                                      },
                                      children: (0, c.jsx)("div", { ref: n, className: sY._Z }),
                                  }),
                                  (0, c.jsx)("img", {
                                      src: sq,
                                      className: sY.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: eC.intl.string(eC.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      y &&
                          null != P &&
                          (0, c.jsx)(iD, {
                              isVisible: S && j,
                              premiumSubscription: a,
                              churnDiscountOffer: T,
                              discountedPrice: P,
                          }),
                  ],
              })
            : (0, c.jsxs)("div", {
                  className: u()(sY.kL, sY.Lq, sY.TN, sY.Eg),
                  children: [(0, c.jsx)(tP, {}), (0, c.jsx)("div", { className: sY.S, children: (0, c.jsx)(g.y, {}) })],
              });
    };
var s$ = i(589152),
    s0 = i(851746),
    s1 = i(727949),
    s2 = i(543213);
let s3 =
    "https://cdn.discordapp.com/assets/content/3aa94cb4beecb43100d482e94a5a707f188e2e2315d9b15865689b51409c4d56.png";
var s6 = i(185062);
let s7 = `${s3} 1x, https://cdn.discordapp.com/assets/content/e33cdb99c455ad732bab8cc40ca15b8bf926a7e9e078cd8834edfd15e4010217.png 2x, ${s6.A} 3x`;
function s5(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iU.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: s3,
        srcSet: s7,
        className: (0, iU.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var s8 = i(315629),
    s9 = i(783420),
    s4 = i(204413),
    ne = i(572079),
    nt = i(824069),
    ni = i(785007),
    ns = i(947910);
function nn(e) {
    let { value: t, planRadioOptions: i, className: s, ...n } = e,
        a = i.map((e) => {
            let i = e.value === t;
            return {
                name: (0, c.jsxs)("div", {
                    className: ns.VH,
                    children: [
                        i &&
                            null != e.badgeText &&
                            (0, c.jsx)("div", {
                                className: ns.fQ,
                                children: (0, c.jsx)(ew.E, { type: { text: e.badgeText }, variant: "primary" }),
                            }),
                        (0, c.jsxs)(Z.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: ns.qU,
                            children: [
                                (0, c.jsxs)(Z.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: ns.NI,
                                    children: [
                                        (0, c.jsx)(J.E, {
                                            variant: "body-md/semibold",
                                            color: "text-strong",
                                            children: e.primaryText,
                                        }),
                                        null != e.primarySubText &&
                                            (0, c.jsx)(J.E, {
                                                variant: "body-sm/medium",
                                                color: "text-subtle",
                                                children: e.primarySubText,
                                            }),
                                    ],
                                }),
                                (0, c.jsxs)(Z.B, {
                                    direction: "vertical",
                                    align: "end",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: ns.br,
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
                                                variant: "body-sm/medium",
                                                color: "text-subtle",
                                                className: ns.yD,
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
                radioBarClassName: u()(ns.tG, { [ns.uA]: i, [ns.hy]: i && e.useGradientSelectedBorder }),
            };
        });
    return (0, c.jsx)(ni.$d, {
        ...n,
        options: a,
        value: t,
        size: ni.r9.NOT_SET,
        className: u()(ns.ul, s),
        withTransparentBackground: !0,
    });
}
var na = i(118751),
    nl = i(773669),
    nr = i(97352),
    nc = i(526292),
    no = i(387278),
    nd = i(369827),
    nu = i(803496);
function nm(e) {
    let t = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        i = (0, nd.L)(),
        s = t?.paymentSourceId ?? i,
        { priceOptions: n } = (0, nu.A)({
            activeSubscription: t,
            skuIDs: [(0, er.mH)(e)],
            paymentSourceId: s,
            isGift: !1,
        });
    return n;
}
function nx(e, t, i, s, n) {
    return t && i?.includes(e) === !0 && null != s && null != n && s !== n;
}
function ng(e) {
    let { expectedUsageInterval: t, usageInterval: i, discountDuration: s, regularPrice: n, discountedPrice: a } = e;
    return i !== t || null == n || null == a
        ? null
        : t === th.Ff.YEAR
          ? eC.intl.format(eC.t.G88D2T, { discountedPrice: a, numYears: s, regularPrice: n })
          : eC.intl.format(eC.t["x+qUAi"], { discountedPrice: a, numMonths: s, regularPrice: n });
}
var np = i(614488);
function nf(e) {
    let { skuId: t, selectedPlanId: i, subscribeButtonProps: s } = e,
        n = null == i || !0 === s.disabled,
        a = null == i ? "secondary" : s.variant;
    return (0, c.jsx)(s9.A, {
        subscriptionTier: t,
        initialPlanId: i,
        shouldDisallowPlanSelection: !0,
        children: (e) => {
            let { onClick: t } = e;
            return (0, c.jsx)(Q.$, {
                size: "md",
                fullWidth: !0,
                icon: q.t,
                text: s.text,
                variant: a,
                disabled: n,
                onClick: t,
            });
        },
    });
}
function nh(e) {
    let { skuId: t, className: i, variant: s = "default" } = e,
        n = t === th.pe.TIER_2,
        a = "settings" === s,
        l = (0, i0.q)((0, i1.Ay)()),
        r = (0, eu.V)(),
        d = r?.subscriptionTrial,
        m = d?.skuId === t,
        g = n && m && null != d,
        {
            planRadioOptions: p,
            selectedPlanId: f,
            setSelectedPlanId: h,
            shouldSuppressDiscountCta: N,
        } = (function (e) {
            let { skuId: t } = e,
                [i, s] = o.useState(null),
                n = th.En[t],
                a = th.zE[t],
                l = t === th.pe.TIER_2,
                r = nm(t),
                c = (0, eu.V)(),
                d = c?.subscriptionTrial?.skuId === t,
                { subscribedSkuId: u, isMonthlyPlanDisabled: m } = (0, x.cf)(
                    [M.A],
                    () => {
                        let e = M.A.getPremiumTypeSubscription();
                        return {
                            subscribedSkuId: (0, er.aZ)(e),
                            isMonthlyPlanDisabled:
                                n === th.gD.PREMIUM_MONTH_TIER_2 &&
                                null != e &&
                                [th.gD.PREMIUM_YEAR_TIER_0, th.gD.PREMIUM_YEAR_TIER_1].includes(e.planId),
                        };
                    },
                    [n],
                ),
                g = u === t,
                p = (0, ed.O)(),
                f = (0, nc.k5)(),
                h = (0, x.bG)([nl.default], () => nl.default.locale),
                N = (0, z.U9)(p, t),
                A = (0, z.N1)(n),
                b = (0, z.N1)(a),
                [j, E] = (0, x.yK)([nr.A], () => [nr.A.get(n), nr.A.get(a)], [n, a]),
                T = null != j ? (0, er.sS)(j, r) : null,
                C = null != E ? (0, er.sS)(E, r) : null,
                I =
                    N && p?.discount.amount != null && !f
                        ? eC.intl.formatToPlainString(eC.t.IAybsG, {
                              discount: (0, na.l9)(h, Number(p.discount.amount) / 100),
                          })
                        : null,
                R = p?.discount?.planIds,
                _ = nx(a, N, R, b, C),
                v = nx(n, N, R, A, T),
                y = p?.discount.userUsageLimitInterval,
                P = p?.discount.userUsageLimit ?? 1,
                S = !l || _ || v || null == E ? null : (0, no.Cj)(E, !1, r),
                D = !v || m,
                O = (function (e) {
                    let { skuId: t, monthlyHasDiscount: i, isMonthlyPlanDisabled: s } = e;
                    return t !== th.pe.TIER_2 ? null : i && !s ? th.En[t] : th.zE[t];
                })({ skuId: t, monthlyHasDiscount: v, isMonthlyPlanDisabled: m }),
                U = null == i || (i === n && m) ? O : i,
                L = [
                    {
                        value: a,
                        primaryText: eC.intl.string(eC.t["/Q4HRN"]),
                        primarySubText:
                            (_
                                ? ng({
                                      expectedUsageInterval: th.Ff.YEAR,
                                      usageInterval: y,
                                      discountDuration: P,
                                      regularPrice: C,
                                      discountedPrice: b,
                                  })
                                : null) ?? S,
                        secondaryText: _ ? b : C,
                        secondarySubText: _ ? C : null,
                        badgeText: _ ? I : null,
                        useGradientSelectedBorder: l && (d || _ || D),
                        isDisabled: g,
                    },
                    {
                        value: n,
                        primaryText: eC.intl.string(eC.t.DKzs96),
                        primarySubText: v
                            ? ng({
                                  expectedUsageInterval: th.Ff.MONTH,
                                  usageInterval: y,
                                  discountDuration: P,
                                  regularPrice: T,
                                  discountedPrice: A,
                              })
                            : null,
                        secondaryText: v ? A : T,
                        secondarySubText: v ? T : null,
                        badgeText: v ? I : null,
                        useGradientSelectedBorder: l && (d || v),
                        isDisabled: g || m,
                    },
                ],
                k = U === a ? _ : U === n && v;
            return { planRadioOptions: L, selectedPlanId: U, setSelectedPlanId: s, shouldSuppressDiscountCta: N && !k };
        })({ skuId: t }),
        A = n ? "expressive" : "secondary",
        { buttonText: b } = (0, ne.A)({ subscriptionTier: t }),
        { subscribeButtonProps: j } = (0, s4.$)({
            subscriptionTier: t,
            variantOverride: A,
            buttonTextOverride: N ? b : void 0,
        }),
        E = (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(Z.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: np.MY,
                    children: (0, c.jsx)(ek.D, {
                        variant: "nitro-md",
                        color: l ? "text-strong" : "text-overlay-light",
                        className: np.ck,
                        children: n ? eC.intl.string(eC.t.lG6a5x) : eC.intl.string(eC.t["t9uG/o"]),
                    }),
                }),
                (0, c.jsx)(Z.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: np.qT,
                    children: n
                        ? (0, c.jsx)(s2.ZP, {
                              featureSet: s2.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: a ? "body-sm/medium" : "body-md/medium",
                          })
                        : (0, c.jsx)(s2.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: a ? "body-sm/medium" : "body-md/medium",
                          }),
                }),
                n && (0, c.jsx)(nt.K, {}),
            ],
        }),
        T = (0, c.jsxs)(Z.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: np.Ux,
            children: [
                a ? (0, c.jsx)("div", { className: np.zI, children: E }) : E,
                g
                    ? (0, c.jsx)("div", {
                          className: np.qS,
                          role: "separator",
                          children: (0, c.jsx)(J.E, {
                              variant: "body-md/semibold",
                              color: "text-strong",
                              className: np.ZV,
                              children: (function (e, t) {
                                  if (null == e || null == t) return null;
                                  switch (e) {
                                      case th.WT.DAY:
                                          if (t % 7 == 0) return eC.intl.format(eC.t["1MYPH0"], { weeks: t / 7 });
                                          return eC.intl.format(eC.t.pYfIoO, { days: t });
                                      case th.WT.MONTH:
                                          return eC.intl.format(eC.t["96hTLe"], { months: t });
                                      case th.WT.YEAR:
                                          return eC.intl.format(eC.t.B0ZmdG, { years: t });
                                      default:
                                          return null;
                                  }
                              })(d.interval, d.intervalCount),
                          }),
                      })
                    : (0, c.jsx)("hr", { className: np.yF }),
                (0, c.jsxs)("div", {
                    className: np.qr,
                    children: [
                        (0, c.jsx)(nn, {
                            className: a ? np.US : void 0,
                            planRadioOptions: p,
                            value: f ?? "",
                            onChange: (e) => h(e.value),
                        }),
                        (0, c.jsx)(nf, { skuId: t, selectedPlanId: f, subscribeButtonProps: j }),
                    ],
                }),
            ],
        }),
        C = u()(np.Nr, i, { [np.Fw]: n });
    return n
        ? (0, c.jsxs)(s8.h, {
              color: "nitro-pink",
              className: C,
              children: [
                  !a &&
                      (0, c.jsx)("div", {
                          className: np.kX,
                          "aria-hidden": !0,
                          children: (0, c.jsx)(s5, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                      }),
                  T,
              ],
          })
        : (0, c.jsx)("div", { className: C, children: T });
}
function nN(e) {
    let { className: t } = e,
        i = (0, i0.q)((0, i1.Ay)()),
        s = nm(th.pe.TIER_2),
        n = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        { avatarSrc: a, eventHandlers: l } = (0, eD.A)({ userId: n?.id, size: ev._3.SIZE_32, animateOnHover: !0 }),
        r = (0, x.bG)([nr.A], () => nr.A.get(th.gD.PREMIUM_GROUP_MONTH)),
        o = eC.intl.string(eC.t["2pG5Ga"]),
        d = (0, c.jsx)(s9.A, {
            subscriptionTier: th.pe.TIER_2,
            initialPlanId: th.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, c.jsx)(Q.$, {
                    size: "md",
                    fullWidth: !0,
                    icon: q.t,
                    text: o,
                    variant: "secondary",
                    onClick: t,
                });
            },
        }),
        m = null;
    if (null != r)
        try {
            m = (0, er.sS)(r, s, !1, !1, !1);
        } catch {
            m = null;
        }
    return (0, c.jsx)("div", {
        className: u()(np.Nr, t),
        children: (0, c.jsxs)(Z.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: np.Ux,
            children: [
                (0, c.jsxs)(Z.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: np.MY,
                    children: [
                        (0, c.jsx)(ek.D, {
                            variant: "nitro-md",
                            color: i ? "text-strong" : "text-overlay-light",
                            className: np.ck,
                            children: eC.intl.string(sg.default.eSKiXk),
                        }),
                        null != n &&
                            (0, c.jsxs)(Z.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: np.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: np.uA,
                                        children: (0, c.jsx)(ey.eu, {
                                            src: a,
                                            size: ev._3.SIZE_32,
                                            "aria-hidden": !0,
                                            ...l,
                                        }),
                                    }),
                                    (0, c.jsx)(Z.B, {
                                        direction: "horizontal",
                                        align: "center",
                                        justify: "center",
                                        gap: 0,
                                        fullWidth: !1,
                                        className: np.VL,
                                        children: (0, c.jsxs)(J.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-default",
                                            children: ["+", 5],
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
                (0, c.jsx)(Z.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: np.qT,
                    children: (0, c.jsx)(s2.Lg, { isApplicationHome: !0, textVariant: "body-md/medium" }),
                }),
                (0, c.jsx)("hr", { className: np.yF }),
                (0, c.jsxs)("div", {
                    className: np.qr,
                    children: [
                        (0, c.jsxs)("div", {
                            className: np.ec,
                            children: [
                                (0, c.jsx)(J.E, {
                                    variant: "body-md/semibold",
                                    color: "text-strong",
                                    children: eC.intl.string(sg.default.SvSwga),
                                }),
                                null == m
                                    ? (0, c.jsx)(g.y, { type: g.y.Type.PULSING_ELLIPSIS })
                                    : (0, c.jsx)(J.E, {
                                          tag: "span",
                                          variant: "heading-lg/semibold",
                                          color: i ? "text-strong" : "text-overlay-light",
                                          children: m,
                                      }),
                            ],
                        }),
                        d,
                    ],
                }),
            ],
        }),
    });
}
function nA(e) {
    let { innerRef: t, className: i, variant: s = "default" } = e,
        n = "settings" === s,
        { analyticsLocations: a } = (0, A.Ay)(N.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, s2.pw)(t),
        r = (0, sm.PA)(),
        o = !n && r,
        d = (0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        m = { [np.iR]: !d && !n };
    return (0, c.jsx)(A.f5, {
        value: a,
        children: (0, c.jsxs)(Z.B, {
            direction: "vertical",
            align: n ? "stretch" : "center",
            gap: 32,
            fullWidth: !0,
            className: u()(np.oB, i, { [np.W0]: n }),
            children: [
                (0, c.jsx)(ek.D, {
                    variant: n ? "heading-xl/semibold" : "nitro-md",
                    color: "text-strong",
                    className: np.op,
                    children: eC.intl.string(eC.t.vLz3Zs),
                }),
                (0, c.jsxs)("div", {
                    ref: l,
                    className: u()(np.kR, { [np.BQ]: o }),
                    children: [
                        (0, c.jsx)(nh, { skuId: th.pe.TIER_0, className: u()(np.rz, m), variant: s }),
                        (0, c.jsx)(nh, { skuId: th.pe.TIER_2, className: u()(np.Rv, m), variant: s }),
                        o && (0, c.jsx)(nN, { className: u()(np.zz, m) }),
                    ],
                }),
            ],
        }),
    });
}
var nb = i(366010),
    nj = i(303136);
let nE = function (e) {
    let t,
        { className: i } = e,
        s = (0, e6.TM)(),
        n = (0, nb.q)((0, i1.Ay)());
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
                nj.A,
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
var nT =
        (((r = {}).HOME = "home"),
        (r.WHATS_NEW = "whatsNew"),
        (r.BEST_OF_NITRO = "bestOfNitro"),
        (r.PLANS = "plans"),
        (r.COMPARE = "compare"),
        r),
    nC = i(352756);
let nI = function (e) {
    let { isVisible: t, subscriptionTier: i, isEligibleForBogoPromotion: s, variant: n = "default" } = e,
        a = "settings" === n,
        l = (0, e5.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        r = { section: eX.JJy.MARKETING_FLOATING_CTA };
    return (0, c.jsx)(e7.animated.div, {
        className: u()(nC.iE, { [nC.W0]: a }),
        "aria-hidden": a ? !t : void 0,
        inert: a ? !t : void 0,
        style: l,
        "data-mtctest-ignore": "true",
        children: (0, c.jsxs)("div", {
            className: nC.UD,
            children: [
                (0, c.jsx)(eb.A, {
                    enableMarketingSubscribeCopyTest: !a,
                    size: "md",
                    subscriptionTier: i,
                    hasActivePromotion: !!s,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: r,
                }),
                (0, c.jsx)(eA.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var nR = i(573710);
let n_ = function () {
    let e = (0, e3.bG)([ee.Ay], () => ee.Ay.useReducedMotion);
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)("div", {
                className: nR.BI,
                children: (0, c.jsx)(te, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: e9.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, c.jsx)("img", {
                        src: "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
                        alt: "",
                        className: nR.Q,
                    }),
                }),
            }),
            (0, c.jsx)(ti, {
                isMotionReduced: e,
                boltContainerClassName: nR.nJ,
                carContainerClassName: nR.IN,
                hammerContainerClassName: nR.Gj,
                keyContainerClassName: nR.FV,
                starContainerClassName: nR.E1,
                boltAssetClassName: nR.j7,
                carAssetClassName: nR.or,
                hammerAssetClassName: nR.Wv,
                keyAssetClassName: nR.rs,
                starAssetClassName: nR.OY,
            }),
        ],
    });
};
var nv = i(989756);
function ny(e) {
    let { ref: t, ...i } = e,
        { analyticsLocations: s } = (0, A.Ay)(N.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, c.jsx)(A.f5, {
        value: s,
        children: (0, c.jsx)("div", {
            ref: t,
            className: nv.kL,
            children: (0, c.jsxs)("div", {
                className: nv.hQ,
                children: [
                    (0, c.jsx)(n_, {}),
                    (0, c.jsx)(ek.D, {
                        variant: "nitro-md",
                        color: "text-strong",
                        className: nv.RH,
                        children: eC.intl.string(eC.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
}
ny.displayName = "PremiumMarketingFooter";
var nP = i(939249);
let nS = function (e) {
    let { navBarSections: t, activeSectionId: i } = e,
        s = {
            [nT.HOME]: eC.intl.string(eC.t.uGRXjS),
            [nT.WHATS_NEW]: eC.intl.string(eC.t["mfcR/v"]),
            [nT.BEST_OF_NITRO]: eC.intl.string(eC.t.xQKkE8),
            [nT.PLANS]: eC.intl.string(eC.t.wyNMnm),
            [nT.COMPARE]: eC.intl.string(eC.t.pwD7If),
        },
        n = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        a = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, c.jsx)(tI.A, {
        className: tv.TQ,
        transparent: !0,
        children: (0, c.jsxs)("div", {
            className: tv.Wc,
            children: [
                (0, c.jsxs)("div", {
                    className: tv.wG,
                    children: [
                        (0, c.jsx)(q.t, { className: tv.nE, colorClass: tv.oG }),
                        (0, c.jsx)("div", {
                            className: tv.zc,
                            role: "tablist",
                            "aria-label": eC.intl.string(eC.t.O9MiXY),
                            children: a.map((e) => {
                                let t = i === e.id,
                                    n = s[e.id];
                                return (0, c.jsxs)(
                                    nP.D,
                                    {
                                        role: "tab",
                                        "aria-selected": t,
                                        className: tv.S0,
                                        onClick: e.scrollToSection,
                                        children: [
                                            (0, c.jsx)(J.E, {
                                                variant: "body-sm/medium",
                                                color: "text-strong",
                                                children: n,
                                            }),
                                            t && (0, c.jsx)("div", { className: tv.W0 }),
                                        ],
                                    },
                                    n,
                                );
                            }),
                        }),
                    ],
                }),
                (0, c.jsxs)("div", {
                    className: tv.MQ,
                    children: [
                        null != n && (0, c.jsx)(t_.l, { size: "sm", location: N.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                        (0, c.jsx)(eA.A, { size: "sm", variant: "overlay-secondary" }),
                    ],
                }),
            ],
        }),
    });
};
var nD = i(713271),
    nM = i(704333),
    nO = i(414499),
    nU = i(597770),
    nL = i(500060),
    nk = i(866665),
    nG = i(406860),
    nw = i(870975),
    nB = i(698834);
function nH() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, nG.A)({ boxType: tB.$, thirdPartyPartner: "xbox" }),
        i = [
            { icon: nM.B, text: eC.intl.string(tV.default.MUypiB) },
            { icon: nO.h, text: eC.intl.string(tV.default.ec5Rdd) },
            { icon: nU.GiftIcon, text: eC.intl.string(tV.default["9t2CzW"]), tooltip: tV.default.AyECej },
            { icon: nL.o, text: eC.intl.string(tV.default.R7YJAY) },
        ];
    return (0, c.jsx)(k.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, c.jsx)("div", {
            ref: e,
            className: nB.iE,
            children: (0, c.jsxs)("div", {
                className: nB.Nr,
                children: [
                    (0, c.jsxs)("div", {
                        className: nB.j,
                        children: [
                            (0, c.jsx)("div", { className: nB._g }),
                            (0, c.jsx)("div", { className: nB.$h }),
                            (0, c.jsx)("div", { className: nB.Rv }),
                            (0, c.jsx)("div", { className: nB.Lw }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: nB.CT,
                        children: [
                            (0, c.jsxs)("div", {
                                className: nB.Qs,
                                children: [
                                    (0, c.jsxs)("div", {
                                        children: [
                                            (0, c.jsx)(ek.D, {
                                                variant: "heading-xxl/semibold",
                                                color: "text-strong",
                                                className: nB.R_,
                                                children: eC.intl.string(tV.default.rkt1aw),
                                            }),
                                            (0, c.jsxs)("div", {
                                                children: [
                                                    i.map((e) => {
                                                        let { icon: t, text: i, tooltip: s } = e;
                                                        return (0, c.jsxs)(
                                                            "div",
                                                            {
                                                                className: nB.yf,
                                                                children: [
                                                                    (0, c.jsx)(t, {
                                                                        size: "sm",
                                                                        color: "var(--icon-strong)",
                                                                    }),
                                                                    (0, c.jsx)(J.E, {
                                                                        variant: "body-md/medium",
                                                                        color: "text-strong",
                                                                        children: i,
                                                                    }),
                                                                    null != s &&
                                                                        (0, c.jsx)("div", {
                                                                            className: nB.Jn,
                                                                            children: (0, c.jsx)(nk.m, {
                                                                                text: eC.intl.string(s),
                                                                                position: "top",
                                                                                children: (0, c.jsx)(
                                                                                    tM.CircleInformationIcon,
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
                                                        className: nB.xF,
                                                        children: (0, c.jsx)(eb.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: th.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: nB.WE,
                                        children: (0, c.jsx)(J.E, {
                                            variant: "body-xs/medium",
                                            color: "text-link",
                                            children: eC.intl.format(tV.default.KDKdWi, { termsLink: (0, nw.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, c.jsx)("div", {
                                className: nB.r1,
                                children: (0, c.jsx)("img", {
                                    className: nB.wm,
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
var nF = i(886205),
    nV = i(750338),
    nW = i(221168),
    nz = i(505051);
function nY(e) {
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
        className: u()(nz.boxBackdrop, t),
        children: [
            (0, c.jsx)(ek.D, {
                className: nz.bentoSectionHeader,
                variant: "nitro-md",
                color: "text-strong",
                children: s,
            }),
            null != r && (0, c.jsx)("div", { className: nz.highlightBento, children: r }),
            (0, c.jsx)("div", {
                className: nz.bentoBoxesGrid,
                children: i.flatMap((e, t) => {
                    let i;
                    switch (e.length) {
                        case 3:
                            i = nW.A0.SMALL;
                            break;
                        case 2:
                            i = nW.A0.MEDIUM;
                            break;
                        default:
                            i = nW.A0.LARGE;
                    }
                    return e.map((e) =>
                        (0, c.jsx)(
                            nV.A,
                            { index: t + +!!l, ...e, size: i, shouldLoadVideo: n, isReducedMotion: a },
                            e.name,
                        ),
                    );
                }),
            }),
        ],
    });
}
let nK = o.memo(function (e) {
        let t = (0, tS.b)("premium_marketing_bento"),
            i = (0, ip.mh)({ location: "premium_marketing_bento" }),
            { enabled: s } = (0, t0.vc)({ location: "premium_marketing_bento" }),
            { enabled: n } = nF.A.useConfig({ location: "premium_marketing_bento" }),
            a = t && !i && !(s && n),
            { whatsNewBoxes: l } = (0, nW.Ay)(a);
        return (0, c.jsx)(nY, {
            boxLayout: l,
            title: eC.intl.string(eC.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: a ? (0, c.jsx)(nH, {}) : null,
            ...e,
        });
    }),
    nX = o.memo(function (e) {
        let { bestOfBoxes: t } = (0, nW.Ay)();
        return (0, c.jsx)(nY, { boxLayout: t, title: eC.intl.string(eC.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    nZ = (0, it.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var nJ = i(236834),
    nq = i(540504);
function nQ(e) {
    let { referrer: t } = e,
        { avatarSrc: i, eventHandlers: s } = (0, eD.A)({ userId: t?.id, size: ev._3.SIZE_24, animateOnHover: !0 });
    return (0, c.jsx)("div", {
        className: nq.$6,
        children: (0, c.jsxs)("div", {
            className: nq.sc,
            children: [
                (0, c.jsx)("div", {
                    className: nq.kR,
                    children: (0, c.jsx)(ey.eu, { src: i, "aria-label": t.username, size: ev._3.SIZE_32, ...s }),
                }),
                (0, c.jsx)(ek.D, {
                    variant: "heading-xs/medium",
                    className: nq.FS,
                    color: "text-strong",
                    children: eC.intl.format(eC.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var n$ = i(579245),
    n0 = i(369805);
let n1 = function () {
    let e = (0, n0.A)();
    return null == e ? null : (0, c.jsx)(ef, { text: e });
};
function n2() {
    let e = (0, x.bG)([nr.A], () => nr.A.getForSkuAndInterval((0, er.mH)(th.pe.TIER_0), th.WT.MONTH));
    return null != e ? (0, er.sS)(e) : "\u2026";
}
var n3 = i(508556);
let n6 = function (e) {
    let { containerVisibilityPercentage: t, variant: i = "default" } = e,
        s = "settings" === i,
        n = (0, e3.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        a = (0, e6.TM)();
    return (0, c.jsxs)("div", {
        "aria-hidden": !0,
        className: u()(n3.YU, { [n3.W0]: s }),
        children: [
            (0, c.jsx)(tl, {
                supportHEVCAlpha: a,
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                containerClassName: n3.wG,
                assetClassName: n3.lu,
                variant: i,
            }),
            (0, c.jsx)(ti, {
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                boltContainerClassName: n3.nJ,
                carContainerClassName: n3.IN,
                hammerContainerClassName: n3.Gj,
                keyContainerClassName: n3.FV,
                starContainerClassName: n3.E1,
                boltAssetClassName: n3.j7,
                carAssetClassName: n3.or,
                hammerAssetClassName: n3.Wv,
                keyAssetClassName: n3.rs,
                starAssetClassName: n3.OY,
                animateStar: !s,
            }),
        ],
    });
};
var n7 = i(14057);
let n5 = o.memo(function (e) {
    let { className: t, subscriptionTier: i, isEligibleForBogoPromotion: s, ref: n, variant: a = "default" } = e,
        l = "settings" === a,
        { analyticsLocations: r } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        o = n2(),
        d = nZ.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
        m = (0, nJ.A)(),
        g = null != m,
        { visibilityPercentageRef: p, visibilityPercentage: f } = eg(!(0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion)),
        h = (0, s$.b)(),
        b = !g && h.length > 0,
        j = (0, em.c)(K.C.MARKETING_PAGE_BANNER),
        E = null != j && "marketingPageBanner" === j.properties.properties.oneofKind,
        T = (0, nc.ar)() && !E,
        C = (0, ed.O)(),
        I = (null != C && th.U4.includes(C.discountId)) || E;
    return (0, c.jsx)(A.f5, {
        value: r,
        children: (0, c.jsxs)("div", {
            ref: n,
            className: u()(n7.kL, t, { [n7.W0]: l }),
            "data-testid": "marketing-page-hero-header",
            children: [
                l && (0, c.jsx)(nE, { className: n7.kv }),
                (0, c.jsx)("div", {
                    ref: p,
                    children: (0, c.jsxs)("div", {
                        className: n7.hQ,
                        children: [
                            (0, c.jsx)(n6, { containerVisibilityPercentage: f, variant: a }),
                            T && (0, c.jsx)(n1, {}),
                            (0, c.jsx)("div", {
                                className: n7.s8,
                                children: (0, c.jsx)(eL.F, {
                                    forceLevel: 1,
                                    children: (0, c.jsx)(ek.D, {
                                        variant: "nitro-md",
                                        color: "text-strong",
                                        className: l ? void 0 : n7.wx,
                                        children: eC.intl.string(eC.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, c.jsxs)("div", {
                                className: n7.rf,
                                children: [
                                    g &&
                                        (0, c.jsx)("div", {
                                            className: n7.eZ,
                                            children: (0, c.jsx)(nQ, { referrer: m }),
                                        }),
                                    b &&
                                        (0, c.jsx)("div", {
                                            className: n7.Qn,
                                            children: (0, c.jsx)(n$.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, c.jsxs)("div", {
                                        className: T ? n7.es : n7.UJ,
                                        children: [
                                            (0, c.jsx)(eb.A, {
                                                enableMarketingSubscribeCopyTest: !l,
                                                size: "md",
                                                fullWidth: T,
                                                hasActivePromotion: !!s,
                                                subscriptionTier: I && null == i ? th.pe.NONE : i,
                                                buttonTextOverride: I ? eC.intl.string(eC.t["2pG5Ga"]) : void 0,
                                            }),
                                            !T && (0, c.jsx)(eA.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: n7.iQ,
                                        children: (0, c.jsx)(J.E, {
                                            color: "text-muted",
                                            variant: "body-xs/medium",
                                            children: d
                                                ? eC.intl.string(eC.t.jHqrJW)
                                                : eC.intl.format(eC.t.kt9wxs, { cheapestMonthlyPrice: o }),
                                        }),
                                    }),
                                    null != j &&
                                        "marketingPageBanner" === j.properties.properties.oneofKind &&
                                        (0, c.jsx)(eh.x, {
                                            componentId: j.id,
                                            promotionId: j.promotionId,
                                            promotionBannerMarketingComponentFields:
                                                j.properties.properties.marketingPageBanner,
                                        }),
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
});
var n8 = i(812537);
let n9 = function (e) {
    let { scrollOffset: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
        i = (0, o.useCallback)(
            (e) => {
                let i = r.current[e];
                null != i &&
                    ((i.style.scrollMarginTop = `${t}px`), i.scrollIntoView({ behavior: "smooth", block: "start" }));
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
var n4 = i(818348),
    ae = i(773188);
let at = () => {
    let e = (0, m.zy)();
    (0, _.P)(R);
    let t = o.useRef(null),
        i = o.useRef(null),
        s = o.useRef(null),
        n = o.useRef(null),
        a = o.useRef(null),
        l = o.useRef(null),
        r = (0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        [d, g] = o.useState(!1),
        [p, f] = o.useState(!1),
        [h, b] = o.useState(!1),
        [j, E] = o.useState(!1),
        T = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        C = null != T ? (0, er.EL)(T) : null,
        I = null != C ? er.Ay.getSkuIdForPlan(C.planId) : null,
        v = null !== I && I !== th.pe.TIER_2 ? th.pe.TIER_2 : null,
        { analyticsLocations: y } = (0, A.Ay)(N.A.PREMIUM_MARKETING);
    o.useEffect(() => {
        E(!0);
    }, []);
    let { shouldShowBonusOrbsUX: P } = (0, se.lk)(sr.rE.NITRO_HOME_MARKETING),
        S = P ? nD.N.COMBINED_ORBS : nD.N.ORB_REWARDS,
        D = o.useMemo(() => {
            let t = new URLSearchParams(e.search).get(sJ.x);
            return "orbs" === t
                ? S
                : t === nD.N.THREE_P_PROMOTIONS
                  ? nD.N.THREE_P_PROMOTIONS
                  : t === nD.N.YOUTUBE
                    ? nD.N.YOUTUBE
                    : null;
        }, [e.search, S]);
    sZ(D ?? "", null != D);
    let { navBarSections: U, activeSectionId: L } = n9([nT.HOME, nT.WHATS_NEW, nT.BEST_OF_NITRO, nT.PLANS, nT.COMPARE]),
        { home: w, whatsNew: B, bestOfNitro: H, plans: F, compare: V } = U,
        W = (0, c.jsxs)("div", {
            ref: i,
            className: u()(ae.kL, ae.Gd, ae.iI, { [ae.Hq]: !r }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(nE, { className: ae.yH }),
                (0, c.jsx)(nS, { navBarSections: U, activeSectionId: L }),
                (0, c.jsxs)("div", {
                    className: ae.Qr,
                    children: [
                        (0, c.jsx)("div", {
                            className: ae.qY,
                            ref: w.ref,
                            children: (0, c.jsx)(k.L, {
                                innerRef: n,
                                onChange: (e) => g(e),
                                threshold: 0,
                                active: !0,
                                children: (0, c.jsx)(n5, { ref: n, subscriptionTier: v }),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: ae.So,
                            ref: B.ref,
                            children: (0, c.jsx)(nK, { shouldLoadVideo: j, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: ae.KQ,
                            ref: H.ref,
                            children: (0, c.jsx)(nX, { shouldLoadVideo: j, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: ae.qc,
                            ref: F.ref,
                            children: (0, c.jsx)(k.L, {
                                innerRef: s,
                                onChange: (e) => f(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, c.jsx)(nA, { innerRef: s }),
                            }),
                        }),
                        (0, c.jsx)("div", { className: ae.aC, ref: V.ref, children: (0, c.jsx)(n8.A, {}) }),
                    ],
                }),
                (0, c.jsx)(k.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !h &&
                            (O.default.track(eX.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: y }),
                            b(!0));
                    },
                    children: (0, c.jsx)("div", { ref: a, className: ae._Z }),
                }),
                (0, c.jsx)(ny, { ref: l }),
                (0, c.jsx)(nI, { isVisible: !d && !p && j, subscriptionTier: v }),
                (0, c.jsx)(nE, { className: ae.MF }),
            ],
        });
    return (0, c.jsx)(tO.N, {
        theme: n4.NJ.DARK,
        children: (e) => (0, c.jsx)(G.Gt, { className: u()(ae.XG, e), ref: t, children: W }),
    });
};
var ai = i(862482),
    as = i(300349),
    an = i(106512),
    aa = i(412260),
    al = i(662367),
    ar = i(374403),
    ac = i(396375),
    ao = i(900797),
    ad = i(847374),
    au = i(614268);
function am(e) {
    let { className: t } = e;
    return (0, c.jsx)("div", {
        className: u()(au.i, t),
        children: (0, c.jsx)(ew.E, { type: "early_access", variant: "premium" }),
    });
}
var ax = i(536071),
    ag = i(729934);
let ap = "/assets/5b4fec8511c3676a.svg",
    af = "/assets/0838bda6ecd20d91.svg";
function ah(e, t, i) {
    return (0, i0.M)(e) ? t : i;
}
var aN = i(872461);
function aA(e) {
    let { isShowingAll: t, onClick: i } = e;
    return (0, c.jsxs)(nP.D, {
        onClick: i,
        className: aN.customButton,
        children: [
            t ? eC.intl.string(eC.t.maZaN3) : eC.intl.string(eC.t["37C26f"]),
            t
                ? (0, c.jsx)(ao.t, { size: "md", color: "currentColor", className: aN.arrow })
                : (0, c.jsx)(ad.a, { size: "md", color: "currentColor", className: aN.arrow }),
        ],
    });
}
function ab(e) {
    let {
            title: t,
            description: i,
            className: s,
            imageSource: n,
            imageClassName: a,
            titleBadge: l,
            isNew: r = !1,
            isEarlyAccess: o = !1,
            variant: d = "default",
        } = e,
        { analyticsLocations: m } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
        x = (0, c.jsx)("img", { src: n, alt: "", className: u()(a, aN.perksCardArt) }),
        g = "settings" === d;
    return (0, c.jsx)(A.f5, {
        value: m,
        children: (0, c.jsxs)("div", {
            className: u()(aN.perkCard, s, { [aN.settingsCard]: g }),
            children: [
                r ? (0, c.jsx)(ax.A, { className: aN.perkCardNewBadge }) : null,
                o ? (0, c.jsx)(am, { className: aN.perkCardEarlyAccessBadge }) : null,
                g
                    ? (0, c.jsx)(Z.B, {
                          direction: "horizontal",
                          align: "center",
                          justify: "center",
                          gap: 0,
                          padding: 24,
                          className: aN.settingsArt,
                          children: x,
                      })
                    : x,
                (0, c.jsxs)("div", {
                    className: g ? aN.settingsText : void 0,
                    children: [
                        (0, c.jsxs)(ek.D, {
                            variant: g ? "heading-sm/semibold" : "heading-lg/semibold",
                            className: aN.perkCardHeading,
                            children: [t, " ", l],
                        }),
                        (0, c.jsx)(J.E, {
                            variant: g ? "body-xs/normal" : "body-sm/normal",
                            color: g ? "text-muted" : void 0,
                            lineClamp: g ? 1 : void 0,
                            className: aN.perkCardDescription,
                            children: "function" == typeof i ? i(m) : i,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let aj = function (e) {
    let { className: t, isSubscriberNitroHome: s = !1 } = e,
        [n, a] = o.useState(!1),
        l = (function (e) {
            let { styles: t } = e,
                s = (0, i1.Ay)(),
                n = (0, i6.X)("usePerkCards"),
                a = (0, e3.bG)([S.default], () => {
                    let e = S.default.getCurrentUser();
                    return er.Ay.canUsePremiumProfileCustomization(e);
                }),
                l = (0, er.EJ)(th.PremiumTypes.TIER_2, { useSpace: !1 });
            return {
                badge: {
                    title: eC.intl.string(eC.t.SS87rQ),
                    description: eC.intl.string(eC.t.oD6CRr),
                    imageSource: "/assets/70e295f6158d848f.png",
                    imageClassName: t.badgeImage,
                },
                badgeAlt: {
                    title: eC.intl.string(eC.t["5cYMu0"]),
                    description: eC.intl.string(eC.t.vxk9va),
                    imageSource: ah(s, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
                    imageClassName: t.badgeNewImage,
                },
                clientThemes: {
                    title: eC.intl.string(eC.t["/xvEMy"]),
                    description: eC.intl.string(eC.t.HKWdjj),
                    className: t.clientThemesCard,
                    imageSource: "/assets/37e0853800afb796.svg",
                    imageClassName: t.clientThemesImage,
                },
                customAppIcons: {
                    title: eC.intl.string(eC.t.OuItFi),
                    description: eC.intl.string(eC.t.mPyrE6),
                    imageSource:
                        "https://cdn.discordapp.com/assets/content/bca160c31fc5390dd2b41d90060edcc912a45f6ab3beab44ea79e16bf1f6530f.png",
                    imageClassName: t.customAppIconImage,
                },
                emoji: {
                    title: eC.intl.string(eC.t["R2IV/Q"]),
                    description: eC.intl.string(eC.t.R5Xag2),
                    imageSource: "/assets/d8edaaf5cb32248f.svg",
                    imageClassName: t.emojiImage,
                },
                guildProfile: {
                    title: eC.intl.string(eC.t.lKDhhJ),
                    description: (e) => {
                        if (n)
                            return a
                                ? eC.intl.formatToPlainString(eC.t.aj1pfZ, { onCheckItOutClick: () => {} })
                                : eC.intl.formatToPlainString(eC.t.d2oYS8, { onTryItOutClick: () => {} });
                        function t() {
                            {
                                let { openUserSettings: t } = i(766075);
                                (ag.A.setState({ scrollPosition: sL._F.TRY_IT_OUT }),
                                    t(es.X.PROFILE_PANEL, { analyticsLocations: e }));
                            }
                        }
                        return a
                            ? eC.intl.format(eC.t.aj1pfZ, { onCheckItOutClick: t })
                            : eC.intl.format(eC.t.d2oYS8, { onTryItOutClick: t });
                    },
                    imageSource: "/assets/e1b6b45be1ce4b03.png",
                    imageClassName: t.perGuildProfilesImage,
                },
                longerMessages: {
                    title: eC.intl.string(eC.t.BUScid),
                    description: eC.intl.string(eC.t.vN6XpQ),
                    imageSource: ah(s, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: eC.intl.string(eC.t.Bv8Pfk),
                    description: eC.intl.string(eC.t.JMfaTU),
                    imageSource: ah(s, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: eC.intl.string(eC.t.Bv8Pfk),
                    description: eC.intl.string(eC.t.JMfaTU),
                    imageSource: ah(s, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: eC.intl.string(eC.t["lGcW+c"]),
                    description: eC.intl.string(eC.t["/fDyO+"]),
                    imageSource: ah(s, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: eC.intl.string(eC.t["1c+xwT"]),
                    description: eC.intl.string(eC.t.hJG8ZN),
                    imageSource: ah(s, af, ap),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: eC.intl.string(eC.t.tzdIwI),
                    description: eC.intl.string(eC.t.hJG8ZN),
                    imageSource: ah(s, af, ap),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: eC.intl.string(eC.t.tzdIwI),
                    description: eC.intl.string(eC.t.hJG8ZN),
                    imageSource: ah(s, af, ap),
                    imageClassName: t.stickersImage,
                },
                streaming: {
                    title: eC.intl.string(eC.t.RSXQYO),
                    description: eC.intl.string(eC.t.ymCPxp),
                    imageSource: "/assets/3bcdc01b26c7f691.svg",
                    imageClassName: t.streamingImage,
                },
                superReactions: {
                    title: eC.intl.string(eC.t["uZt5q/"]),
                    description: eC.intl.string(eC.t.ZK3ZoX),
                    imageSource: ah(s, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
                    imageClassName: t.superReactionsImage,
                },
                upload: {
                    title: eC.intl.formatToPlainString(eC.t.jqhAdL, { premiumMaxSize: l }),
                    description: eC.intl.formatToPlainString(eC.t["HI+cfm"], { premiumMaxSize: l }),
                    imageSource: "/assets/010eae6a6dbacc63.svg",
                    imageClassName: t.uploadImage,
                },
                videoBackground: {
                    title: eC.intl.string(eC.t.NaGpTf),
                    description: eC.intl.string(eC.t["A8O/Qw"]),
                    imageSource: ah(s, sk, sG),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: aN }),
        r = (0, e3.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        { analyticsLocations: d } = (0, A.Ay)();
    return (0, c.jsxs)("div", {
        className: u()(aN.perksContainer, t, {
            [aN.partiallyHidden]: s && !n,
            [aN.subscriberNitroHome]: s,
            [aN.reducedMotion]: r,
        }),
        children: [
            (0, c.jsx)(ek.D, {
                variant: "heading-xxl/semibold",
                className: aN.perksTitle,
                children: s ? eC.intl.string(eC.t.QX14gI) : eC.intl.string(eC.t.RGadQR),
            }),
            (0, c.jsx)("div", {
                className: u()(aN.perkCardContainer, { [aN.perkCardContainerExpanded]: n }),
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
                    return null != t && (0, c.jsx)(ab, { ...t }, e);
                }),
            }),
            s &&
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)("div", {
                            className: u()({ [aN.sizeGizmo]: !n, [aN.sizeGizmoExpanded]: n }),
                            children: (0, c.jsx)(aA, {
                                onClick: function () {
                                    (O.default.track(eX.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: d,
                                        was_expanded: n,
                                    }),
                                        a(!n));
                                },
                                isShowingAll: n,
                            }),
                        }),
                        (0, c.jsx)("div", { className: u()(aN.cover, { [aN.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var aE = i(615939);
let aT = o.memo(function (e) {
    let { className: t } = e,
        i = [
            {
                id: tG.MORE_EMOJIS_CARD_ID,
                title: eC.intl.string(eC.t["R2IV/Q"]),
                description: eC.intl.string(eC.t.DRMecB),
                imageSource: iF.A,
            },
            {
                id: tG.HD_VIDEO_CARD_ID,
                title: eC.intl.string(eC.t["/mQ5gg"]),
                description: eC.intl.string(eC.t["7WwAXh"]),
                imageSource: iB.A,
            },
            {
                id: tG.LARGE_UPLOADS_CARD_ID,
                title: eC.intl.string(eC.t.nL1WZV),
                description: (0, i5.M6)({
                    legacyCopy: eC.intl.formatToPlainString(eC.t.k8LC1w, { maxSizeMb: 500 }),
                    rolloutCopy: eC.intl.formatToPlainString(eC.t.teOTfv, {
                        maxFileSize: (0, er.EJ)(th.PremiumTypes.TIER_2, { useSpace: !1 }),
                    }),
                }),
                imageSource: aE.A,
            },
            {
                id: tG.PROFILES_CARD_ID,
                title: eC.intl.string(eC.t.KcyDwF),
                description: eC.intl.string(eC.t.Mt3U1W),
                imageSource: iG,
            },
        ];
    return (0, c.jsxs)(Z.B, {
        gap: 16,
        className: u()(aN.settingsPerks, t),
        children: [
            (0, c.jsx)(ek.D, { variant: "heading-xl/semibold", children: eC.intl.string(eC.t.q1u7nQ) }),
            (0, c.jsx)(eL.F, {
                children: (0, c.jsx)("div", {
                    className: aN.settingsGrid,
                    children: i.map((e) => (0, c.jsx)(ab, { ...e, variant: "settings" }, e.id)),
                }),
            }),
        ],
    });
});
var aC = i(695366),
    aI = i(370049);
let aR = function (e) {
    let t,
        i,
        { premiumSubscription: s, className: n, textColor: a } = e,
        l = (0, nc.ar)();
    if (null == s) return null;
    let r = null != s ? er.Ay.getPremiumPlanItem(s) : null;
    if (
        (er.Ay.isBoostOnlySubscription(s)
            ? (t = eC.intl.string(eC.t.Uj0md3))
            : null != r && (t = er.Ay.getTierDisplayNameByPlanId(r.planId)),
        null == t)
    )
        return null;
    function o() {
        return (0, en.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL);
    }
    let d = (null != r ? er.Ay.getSkuIdForPlan(r.planId) : null) === th.pe.TIER_1;
    return (
        (i = null != a ? a : l ? "text-overlay-light" : "text-default"),
        (0, c.jsxs)(tU.Z, {
            className: u()(aI.kL, n, { [aI.He]: l }),
            type: tU.Z.Types.CUSTOM,
            children: [
                (0, c.jsx)(aC.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: u()(aI.Kk, { [aI.Pt]: l }),
                }),
                (0, c.jsx)(J.E, {
                    variant: "body-sm/medium",
                    color: i,
                    children: d
                        ? eC.intl.format(eC.t["tYuv+T"], {
                              helpdeskArticle: el.A.getArticleURL(eX.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: o,
                          })
                        : eC.intl.format(eC.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: o }),
                }),
            ],
        })
    );
};
var a_ = i(978836);
let av = function (e) {
    let { lifted: t = !1 } = e;
    return (0, c.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: u()(a_.zr, { [a_.N]: t }),
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
                        (0, c.jsx)("stop", { className: a_.eq }),
                        (0, c.jsx)("stop", { offset: "0.339235", className: a_.l_ }),
                        (0, c.jsx)("stop", { offset: "0.492065", className: a_.sM }),
                        (0, c.jsx)("stop", { offset: "0.823236", className: a_.zi }),
                        (0, c.jsx)("stop", { offset: "0.899558", className: a_.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var ay = i(194509),
    aP = i(317587);
let aS = function (e) {
    let { isVisible: t, subscriptionTier: i, isApplicationHome: s, isEligibleForBogoPromotion: n } = e,
        a = (0, e5.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: eX.JJy.MARKETING_FLOATING_CTA },
        r = (0, i1.Ay)(),
        o = (0, nb.M)(r);
    return (0, c.jsx)(e7.animated.div, {
        className: u()(aP.iE, { [aP.H8]: s, [aP.q4]: !t }),
        style: a,
        children: (0, c.jsxs)("div", {
            className: s ? aP.zW : aP.iJ,
            children: [
                (0, c.jsx)(ac.A, {
                    color: o ? ai.XD.BRAND_INVERTED : void 0,
                    className: u()(aP.x6, { [aP.Ph]: o }),
                    subscriptionTier: i,
                    premiumModalAnalyticsLocation: l,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: o ? void 0 : aP.PJ,
                }),
                (0, c.jsx)(ay.A, { className: aP.x6, premiumModalAnalyticsLocation: l }),
            ],
        }),
    });
};
var aD = i(386564);
function aM(e) {
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
            ? (0, c.jsx)(ac.A, {
                  color: l ? ai.XD.BRAND_INVERTED : void 0,
                  className: u()(aD.x6, aD.Ph, n, { [aD.Sq]: t && a, [aD.MF]: a && !l }),
                  shinyButtonClassName: l ? void 0 : aD.PJ,
                  subscriptionTier: i,
                  hasActivePromotion: !0,
              })
            : (0, c.jsx)(ac.A, {
                  color: l || !a ? ai.XD.BRAND_INVERTED : void 0,
                  className: u()(aD.x6, aD.Ph, n, { [aD.Sq]: t && a, [aD.MF]: a && !l }),
                  subscriptionTier: i,
              }),
        d = t && a ? null : (0, c.jsx)(ay.A, { className: u()(aD.x6, n), color: a ? void 0 : ai.XD.WHITE });
    return (0, c.jsxs)("div", { className: u()(aD.UD, s), children: [o, " ", d] });
}
function aO() {
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(ax.p, { className: aD.zd }),
            (0, c.jsx)(ax.p, { className: aD.G }),
            (0, c.jsx)(ax.p, { className: aD.zy }),
            (0, c.jsx)(ax.p, { className: aD.GX }),
        ],
    });
}
function aU(e) {
    let { variant: t = "body-lg/normal", withBottomMargin: i = !0, isApplicationHome: s } = e,
        n = n2();
    return (0, c.jsx)(J.E, {
        variant: t,
        color: s ? "text-subtle" : "text-overlay-light",
        className: u()(aD.h_, { [aD.If]: i, [aD.jn]: s }),
        children: eC.intl.format(eC.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let aL = function (e) {
    let { className: t, buttonClassName: i, subscriptionTier: s, isDarkMode: n, ref: a } = e,
        { analyticsLocations: l } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        r = (0, ec.QQ)(),
        o = (0, nc.ar)(),
        d = (0, s$.b)().length > 0,
        m = eC.intl.string(eC.t.YCZldK);
    return (0, c.jsx)(A.f5, {
        value: l,
        children: (0, c.jsxs)("div", {
            ref: a,
            className: u()(aD.kL, t, { [aD.V1]: !o, [aD.Q4]: !o && d }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, c.jsxs)("div", {
                    className: o ? aD.I6 : aD.G1,
                    children: [
                        (0, c.jsx)(eL.F, {
                            forceLevel: 1,
                            children: (0, c.jsx)(ek.D, {
                                variant: o ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: m,
                            }),
                        }),
                        d
                            ? (0, c.jsx)("div", {
                                  className: aD.DF,
                                  children: (0, c.jsx)(n$.A, { textColor: "text-overlay-light", smallerText: !o }),
                              })
                            : (0, c.jsx)(aU, {}),
                        r
                            ? (0, c.jsx)("div", {
                                  className: aD.UD,
                                  children: (0, c.jsx)(ay.A, { className: u()(aD.x6, i), color: ai.XD.WHITE }),
                              })
                            : (0, c.jsx)(aM, {
                                  subscriptionTier: s,
                                  inOfferExperience: o,
                                  buttonClassName: i,
                                  isDarkMode: n,
                              }),
                        d && (0, c.jsx)(aU, { variant: "body-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !o && (0, c.jsx)(aO, {}),
            ],
        }),
    });
};
var ak = i(403227),
    aG = i(145359),
    aw = i(377770);
function aB(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, c.jsx)(av, { lifted: t }) : null;
}
let aH = () => {
        let { enabled: e } = as.A.useConfig({ location: "PremiumMarketingHomeSettingsPage" });
        (0, _.P)(R);
        let t = o.useRef(null),
            i = o.useRef(null),
            s = o.useRef(null),
            n = (0, i1.Ay)(),
            a = (0, i0.M)(n),
            [l, r] = o.useState(!1),
            [d, m] = o.useState(!1),
            [g, p] = o.useState(!1),
            f = !l && !d,
            [h, b] = o.useState(!1),
            j = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            E = null != j ? (0, er.EL)(j) : null,
            T = null != E ? er.Ay.getSkuIdForPlan(E.planId) : null,
            C = null !== T && T !== th.pe.TIER_2 ? th.pe.TIER_2 : null,
            I = (0, eu.V)(),
            v = I?.subscriptionTrial?.skuId,
            y = (0, nc.ar)(),
            P = !e && y,
            S = (0, x.bG)([aa.A], () => {
                let e = aa.A.getMarketingComponentByType(K.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            D = (0, ar.Q)(),
            { analyticsLocations: U } = (0, A.Ay)(N.A.PREMIUM_MARKETING);
        o.useEffect(() => {
            b(!0);
        }, []);
        let L = e
            ? (0, c.jsx)("div", {
                  className: aw.OE,
                  children: (0, c.jsx)(k.L, {
                      innerRef: t,
                      onChange: m,
                      threshold: 0.1,
                      active: !0,
                      children: (0, c.jsx)(nA, { innerRef: t, variant: "settings" }),
                  }),
              })
            : (0, c.jsx)("div", {
                  className: aw.dY,
                  children: (0, c.jsx)(k.L, {
                      innerRef: t,
                      onChange: (e) => m(e),
                      threshold: 0.1,
                      active: !0,
                      children: (0, c.jsx)(s2.qu, {
                          innerRef: t,
                          tier0CTAButton: (0, c.jsx)(ac.A, {
                              showIcon: !1,
                              subscriptionTier: th.pe.TIER_0,
                              className: aG.Ph,
                              look: ai.pR.OUTLINED,
                              color: ai.XD.WHITE,
                              buttonShineClassName: aG.Qr,
                          }),
                          tier2CTAButton:
                              v === th.pe.TIER_0
                                  ? (0, c.jsx)(ac.A, {
                                        showIcon: !1,
                                        subscriptionTier: th.pe.TIER_2,
                                        className: aG.Ph,
                                        look: ai.pR.OUTLINED,
                                        color: ai.XD.WHITE,
                                        buttonShineClassName: aG.Qr,
                                    })
                                  : (0, c.jsx)(ac.A, {
                                        color: ai.XD.BRAND_INVERTED,
                                        showIcon: !1,
                                        subscriptionTier: th.pe.TIER_2,
                                        className: aG.Ph,
                                        textOptions: { textClassName: aG.Ac },
                                        buttonShineClassName: aG.Qr,
                                    }),
                      }),
                  }),
              });
        return (0, c.jsxs)("div", {
            className: u()(aw.kL, { [aw.N4]: e }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(aR, {
                    premiumSubscription: j,
                    textColor: e ? "text-default" : void 0,
                    className: u()(aw.R3, { [aw.aZ]: y }),
                }),
                P &&
                    (0, c.jsxs)("div", {
                        className: aw.n1,
                        children: [
                            (0, c.jsx)(aB, { inOfferExperience: y }),
                            (0, c.jsx)(t_.l, {
                                className: aw.ij,
                                size: "md",
                                location: N.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                        ],
                    }),
                (0, c.jsxs)("div", {
                    className: u()({ [aw.V1]: !P }),
                    children: [
                        null != S && (0, c.jsx)(an.m, { className: aw.w$, config: S }),
                        (0, c.jsxs)("div", {
                            className: aw.iS,
                            children: [
                                !P &&
                                    (0, c.jsx)(t_.l, {
                                        className: aw.ij,
                                        size: "md",
                                        location: N.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, c.jsx)(k.L, {
                                    innerRef: i,
                                    onChange: (e) => r(e),
                                    threshold: 0,
                                    active: !0,
                                    children: e
                                        ? (0, c.jsx)(tO.N, {
                                              theme: n4.NJ.DARK,
                                              children: (e) =>
                                                  (0, c.jsx)("div", {
                                                      className: e,
                                                      children: (0, c.jsx)(n5, {
                                                          ref: i,
                                                          subscriptionTier: C,
                                                          variant: "settings",
                                                      }),
                                                  }),
                                          })
                                        : (0, c.jsx)(aL, {
                                              ref: i,
                                              subscriptionTier: C,
                                              className: u()({ [aw.p7]: y, [aw.Pw]: y, [aw.Cv]: null != j }),
                                              isDarkMode: a,
                                          }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != D && (0, c.jsx)("div", { className: aw.Ol, children: (0, c.jsx)(al.I, { component: D }) }),
                L,
                e ? (0, c.jsx)(aT, { className: aw.OE }) : (0, c.jsx)(aj, { className: aw.B_ }),
                (0, c.jsx)("div", {
                    className: aw.aC,
                    children: e
                        ? (0, c.jsx)(n8.A, { variant: "settings" })
                        : (0, c.jsx)(ak.A, { className: aw.JQ, hideCTAs: !0 }),
                }),
                (0, c.jsx)("div", { className: aw.hz }),
                e
                    ? (0, c.jsx)(nI, { isVisible: f && h, subscriptionTier: C, variant: "settings" })
                    : (0, c.jsx)(aS, { isVisible: f && h, subscriptionTier: C, isApplicationHome: !1 }),
                (0, c.jsx)(k.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !g &&
                            (O.default.track(eX.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: U }),
                            p(!0));
                    },
                    children: (0, c.jsx)("div", { ref: s, className: aw._Z }),
                }),
                (0, c.jsx)("img", {
                    src: sq,
                    className: aw.Kw,
                    width: 112,
                    height: 85,
                    alt: eC.intl.string(eC.t.X4IxWL),
                }),
            ],
        });
    },
    aF = function (e) {
        let { entrypoint: t } = e,
            i = (0, eu.V)(),
            s = (0, ed.O)(),
            n = (0, s1.NF)({ trialOffer: i }),
            a = (0, s1.Tp)(),
            l = (0, x.bG)([s0.A], () => s0.A.getReminderStateId());
        switch (
            (o.useEffect(() => {
                (!0 === n && (0, s1.QG)(), !0 === a && (0, s1.ne)(l), (null != i || null != s) && (0, L.u1)(i, s));
            }, [i, s, n, a, l]),
            t)
        ) {
            case th.tU.UserSettings:
                return (0, c.jsx)(aH, {});
            case th.tU.ApplicationStoreHome:
                return (0, c.jsx)(at, {});
            default:
                return null;
        }
    };
var aV = i(531296);
let aW = function (e) {
    let { entrypoint: t = th.tU.UserSettings } = e;
    (0, _.P)(R);
    let i = (0, j.Hp)(),
        { sourceAnalyticsLocations: s, analyticsLocations: n } = (0, A.Ay)(N.A.PREMIUM_MARKETING),
        a = (0, x.bG)([M.A], () => M.A.hasFetchedSubscriptions()),
        l = (0, x.bG)([D.A], () => D.A.hasFetchedPaymentSources),
        r = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        d = r?.id,
        C = (0, eu.V)(),
        I = (0, ed.O)(),
        k = (0, E.Y)(th.T7),
        [G, w] = o.useState(!0),
        B = o.useRef(0),
        H = (0, U.YE)(r, th.PremiumTypes.TIER_2);
    ((0, s$.b)(),
        o.useEffect(() => {
            !(async function () {
                let e = Date.now();
                (await Promise.all([b.hP(), b.$o(), (0, p.zS)(null, null, eX.tF5.DISCOVERY)]),
                    (B.current = Date.now() - e),
                    w(!1));
            })();
        }, []),
        o.useEffect(() => {
            G ||
                O.default.track(eX.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: s,
                    load_duration_ms: B.current,
                });
        }, [s, G]),
        o.useEffect(() => {
            i && (null != C || null != I) && (0, L.u1)(C, I);
        }, [i, C, I]));
    let F = (0, m.zy)(),
        V = o.useRef(!1),
        W = a && l && k,
        [z, Y] = o.useState(W);
    (W && !z && Y(!0),
        o.useEffect(() => {
            if (V.current || !W) return;
            let e = new URLSearchParams(F.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: th.pe.TIER_0, nitro: th.pe.TIER_2 },
                i = Object.hasOwn(t, e) ? t[e] : void 0;
            null != i &&
                ((V.current = !0),
                (0, y.bG)(eX.BVt.APPLICATION_STORE),
                (0, v.A)({ subscriptionTier: i, analyticsLocations: n }));
        }, [W, F.search, n]));
    let K = (0, x.bG)([P.A], () => P.A.enabled),
        X = t === th.tU.ApplicationStoreHome,
        Z = K
            ? (0, c.jsx)(f.A, {})
            : i
              ? (0, c.jsx)(T.uK, {})
              : X && H
                ? (0, c.jsx)(A.f5, { value: n, children: (0, c.jsx)(sQ, { userId: d }) })
                : z
                  ? null
                  : (0, c.jsx)("div", { className: u()(aV.kL, aV.Lq), children: (0, c.jsx)(g.y, {}) });
    return null != Z
        ? !K && !i && X && H
            ? Z
            : (0, c.jsxs)(c.Fragment, { children: [X && (0, c.jsx)(h.A, {}), Z] })
        : (0, c.jsx)(A.f5, { value: n, children: (0, c.jsx)(aF, { entrypoint: t }) });
};
