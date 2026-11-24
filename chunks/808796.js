(i.d(t, { A: () => lx }), i(323874), i(14289), i(35956), i(205816));
var s,
    n,
    a,
    l,
    r,
    c,
    o = i(477900),
    d = i(582128),
    u = i(503698),
    m = i.n(u),
    x = i(806163),
    g = i(855986),
    p = i(289873),
    h = i(73825),
    f = i(369143),
    N = i(107834),
    A = i(793574),
    j = i(688810),
    b = i(669815),
    E = i(86379),
    T = i(160946),
    I = i(500597),
    C = i(840251),
    R = i(688151);
let v = new C.E([], R.$G.OPEN_NITRO, { location: "open nitro tab/settings" });
var _ = i(611924),
    y = i(778705),
    P = i(976860),
    S = i(351906),
    D = i(287809),
    M = i(295405),
    O = i(166403),
    k = i(129230),
    U = i(474090),
    L = i(739053),
    G = i(831259),
    w = i(516521),
    B = i(961250),
    H = i(622886),
    F = i(851767),
    V = i(917445),
    W = i(131168),
    z = i(511484),
    Y = i(175020),
    K = i(517352),
    X = i(192308),
    q = i(331322),
    Z = i(834730),
    J = i(403581),
    Q = i(821609),
    $ = i(502572),
    ee = i(775602),
    et = i(366999),
    ei = i(531260),
    es = i(780964),
    en = i(766075),
    ea = i(786300),
    el = i(975571),
    er = i(448645),
    ec = i(89366),
    eo = i(881489),
    ed = i(423814),
    eu = i(77528),
    em = i(641436),
    ex = i(172218);
function eg() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, i] = (0, d.useState)(1),
        s = (0, d.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
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
let eh = function (e) {
    let { text: t } = e;
    return (0, o.jsx)("div", {
        className: ep.i,
        children: (0, o.jsx)(Z.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t }),
    });
};
var ef = i(371764),
    eN = i(103411),
    eA = i(65470),
    ej = i(792656),
    eb = i(536637),
    eE = i.n(eb),
    eT = i(496431),
    eI = i(792996),
    eC = i(850292);
let eR = function (e) {
    let { expiresAt: t, className: i, digitTextVariant: s = "body-md/medium" } = e,
        n = (0, eT.A)(eE()(t).toDate(), 1e3);
    if (null == n) return null;
    let { days: a, hours: l, minutes: r, seconds: c } = n,
        d = [
            { unitValue: a, unitType: "days" },
            { unitValue: l, unitType: "hours" },
            { unitValue: r, unitType: "minutes" },
            { unitValue: c, unitType: "seconds" },
        ];
    return (0, o.jsxs)("div", {
        className: m()(eC.Xl, i, { [eC.a3]: "body-lg/semibold" === s }),
        children: [
            (0, o.jsx)(Z.E, {
                variant: "body-sm/semibold",
                color: "text-strong",
                children: eI.intl.string(eI.t["/ARFVE"]),
            }),
            (0, o.jsx)("div", {
                className: eC.$R,
                children: d.map((e, t) =>
                    (function (e, t, i) {
                        let s,
                            [n, a] = 1 === (s = e.unitValue.toString()).length ? ["0", s[0]] : [s[0], s[1]];
                        return (0, o.jsxs)(o.Fragment, {
                            children: [
                                (0, o.jsxs)(
                                    "div",
                                    {
                                        className: eC.bh,
                                        children: [
                                            (0, o.jsxs)("div", {
                                                className: eC.kB,
                                                children: [
                                                    (0, o.jsx)("div", {
                                                        className: eC.B2,
                                                        children: (0, o.jsx)(Z.E, {
                                                            variant: i,
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                    (0, o.jsx)("div", {
                                                        className: eC.B2,
                                                        children: (0, o.jsx)(Z.E, {
                                                            variant: i,
                                                            color: "text-strong",
                                                            children: a,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, o.jsx)(Z.E, {
                                                variant: "body-xs/semibold",
                                                color: "text-strong",
                                                children: (function (e) {
                                                    switch (e) {
                                                        case "days":
                                                            return eI.intl.string(eI.t.ixASa2);
                                                        case "hours":
                                                            return eI.intl.string(eI.t["8sNvNn"]);
                                                        case "minutes":
                                                            return eI.intl.string(eI.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return eI.intl.string(eI.t.JhaiLW);
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
                                    (0, o.jsx)(Z.E, {
                                        className: eC.cV,
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
var ev = i(473702),
    e_ = i(778712),
    ey = i(97808),
    eP = i(609425),
    eS = i(16371),
    eD = i(854627),
    eM = i(427262),
    eO = i(938767);
function ek() {
    let e = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        t = (0, eP.A)(),
        { avatarSrc: i, avatarDecorationSrc: s, eventHandlers: n } = (0, eD.A)({ userId: e?.id, size: e_._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, eM.mG)(e);
    return (0, o.jsxs)("div", {
        className: eO.kL,
        children: [
            (0, o.jsx)("div", {
                className: eO.my,
                children: (0, o.jsx)(ey.eu, {
                    src: i,
                    avatarDecoration: s,
                    size: e_._3.SIZE_56,
                    "aria-label": a,
                    ...n,
                }),
            }),
            (0, o.jsx)("div", { className: eO.QC, children: (0, o.jsx)(eS.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var eU = i(707554),
    eL = i(534514);
let eG = function (e) {
    let { className: t, color: i = "text-strong", variant: s = "nitro-lg", children: n } = e;
    return (0, o.jsx)(eU.F, {
        forceLevel: 1,
        children: (0, o.jsx)(eL.D, { className: t, variant: s, color: i, children: n }),
    });
};
var ew = i(805251),
    eB = i(969935),
    eH = i(132506),
    eF = i(610709),
    eV = i(478016),
    eW = i(318254),
    ez = i(646514),
    eY = i(626031),
    eK = i(197630);
i(232198);
var eX = i(652215),
    eq = i(957457);
function eZ(e) {
    let { nRewardsGranted: t, referralRewardType: i, className: s } = e;
    return t < 1
        ? null
        : i === eK.xb.ORBS
          ? (0, o.jsx)(eJ, { nRewardsGranted: t, className: s })
          : i === eK.xb.DISCOUNT
            ? (0, o.jsx)(eQ, { nRewardsGranted: t, className: s })
            : null;
}
function eJ(e) {
    let { nRewardsGranted: t, className: i } = e,
        s = 5e3 * t,
        [n, a] = d.useState(0);
    return (
        d.useEffect(() => {
            a(s);
        }, [s]),
        (0, o.jsxs)(q.B, {
            direction: "horizontal",
            align: "center",
            gap: 0,
            fullWidth: !1,
            className: i,
            children: [
                (0, o.jsxs)("div", {
                    className: eq.u,
                    "aria-label": String(s),
                    children: [
                        (0, o.jsx)(eW.OrbsIcon, { size: "xs", color: ez.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                        (0, o.jsx)(eY.t, {
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
                (0, o.jsx)(Z.E, {
                    variant: "body-sm/medium",
                    color: "text-strong",
                    children: eI.intl.string(eI.t.UhguER),
                }),
            ],
        })
    );
}
function eQ(e) {
    let { nRewardsGranted: t, className: i } = e;
    return (0, o.jsxs)(q.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        fullWidth: !1,
        className: i,
        "aria-label": eI.intl.formatToPlainString(eI.t["P//01n"], { discountPercent: 30, duration: t }),
        children: [
            (0, o.jsx)(eV.CheckmarkSmallIcon, { size: "md", color: ez.A.colors.ICON_FEEDBACK_POSITIVE }),
            (0, o.jsx)(Z.E, {
                variant: "body-sm/medium",
                color: "text-strong",
                children: eI.intl.format(eI.t["P//01n"], { discountPercent: 30, duration: t }),
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
            referralStatus: c,
            isEligibleForIncentive: d,
            referralIncentiveRewardType: u,
            useAltReferralCardArt: x,
            shouldShowSpendOrbsCta: g,
        } = (0, eH.k)({ location: "PremiumNitroHomeReferralBannerTreatment" });
    return (0, o.jsxs)("div", {
        className: m()(e1.kL, t),
        children: [
            (0, o.jsx)("div", {
                className: e1.G3,
                children: (0, o.jsx)(eF.fx, {
                    nReferralsSent: s,
                    imageSize: 55,
                    backgroundClassName: e1.HP,
                    ringClassName: e1.pZ,
                    referralRewardType: u,
                    useAltReferralCardArt: d && x,
                }),
            }),
            (0, o.jsxs)("div", {
                className: m()(e1.IH, d && e1.zD),
                children: [
                    d &&
                        (0, o.jsx)("div", {
                            className: e1.aZ,
                            children: (0, o.jsx)(ew.E, { type: "beta", variant: "expressive" }),
                        }),
                    (0, o.jsxs)("div", {
                        className: e1.n4,
                        children: [
                            (0, o.jsx)(Z.E, { variant: "body-md/semibold", color: "text-strong", children: l }),
                            (0, o.jsx)(Z.E, {
                                variant: d ? "body-sm/medium" : "body-md/medium",
                                color: "text-subtle",
                                children: r,
                            }),
                        ],
                    }),
                    d
                        ? (0, o.jsxs)("div", {
                              className: e1.Wp,
                              children: [
                                  (0, o.jsx)(eF.ZP, { referralSentUsers: i }),
                                  (0, o.jsx)(eZ, { nRewardsGranted: c.numRewardGranted, referralRewardType: u }),
                              ],
                          })
                        : (0, o.jsx)(eF.ZP, { referralSentUsers: i, className: e1.t7 }),
                ],
            }),
            (0, o.jsx)(Q.$, {
                variant: "primary",
                disabled: !g && (!1 === n || !0 === a),
                text: g ? eI.intl.string(eI.t.iw5Ccc) : eI.intl.string(eI.t.Lm2nFc),
                onClick: () =>
                    g
                        ? (0, eB.Cz)({
                              tab: e0.G2.ORBS,
                              analyticsLocations: [],
                              analyticsSource: A.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR,
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
    e7 = i(156150),
    e8 = i(717421),
    e5 = i(396583),
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
            children: c,
        } = e,
        u = (0, e8.z)(
            null != s ? { from: { y: 0 }, to: { y: 1 }, config: { duration: s.duration * r }, loop: !0 } : { y: 0 },
        ),
        m = s?.path === "sine" ? Math.sin : Math.cos,
        [x, g] = (0, d.useState)(1),
        p = (0, e8.z)(
            null != i
                ? {
                      from: { scale: x > 0 ? i.startScale : i.endScale },
                      to: { scale: x > 0 ? i.endScale : i.startScale },
                      config: { duration: i.duration * r },
                      onRest: () => g((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [h, f] = (0, d.useState)(1),
        N = (0, e8.z)(
            null != t
                ? {
                      from: { blur: h > 0 ? t.startBlurRadius : t.endBlurRadius },
                      to: { blur: h > 0 ? t.endBlurRadius : t.startBlurRadius },
                      config: { duration: t.duration * r },
                      onRest: () => f((e) => -1 * e),
                  }
                : { blur: 0 },
        ),
        A = (0, d.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * r), [r]),
        [j, b] = (0, d.useState)(0),
        [E, T] = (0, d.useState)(1),
        I = (0, e8.z)({ xOffset: j, config: { tension: 10, friction: 10, duration: A } });
    return ((0, e5.A)(() => {
        (b(E * (0.5 * Math.random() * 5 + 2.5)), T((e) => -1 * e));
    }, A),
    l)
        ? c
        : (0, o.jsx)(e7.animated.div, {
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
                  translateX: a ? I.xOffset.to((e) => `${e}px`) : 0,
                  scale: p.scale,
                  filter: N.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != n && n.changeOpacity ? n.containerVisibilityPercentage : 1,
              },
              children: c,
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
        boltAssetClassName: c,
        carAssetClassName: d,
        hammerAssetClassName: u,
        keyAssetClassName: x,
        starAssetClassName: g,
        animationSpeedScale: p = 1,
        blurScale: h = 1,
        animateStar: f = !0,
    } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            null != s &&
                (0, o.jsx)("div", {
                    className: m()(tt.nJ, s),
                    children: (0, o.jsx)(te, {
                        blurAnimationData: { startBlurRadius: 10 * h, endBlurRadius: 0, duration: 3e3 },
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
                        children: (0, o.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/ae5638c61a572593c6b03b92e80d3846e0cfe7a9e893f3faf05aecd670a4017d.png",
                            className: c,
                            alt: "",
                        }),
                    }),
                }),
            null != n &&
                (0, o.jsx)("div", {
                    className: m()(tt.IN, n),
                    children: (0, o.jsx)(te, {
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
                        children: (0, o.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/6cb761e3e97838c7927f738882b67bd825d5eeed89633e0af126bda5f9d4e71d.png",
                            className: d,
                            alt: "",
                        }),
                    }),
                }),
            null != a &&
                (0, o.jsx)("div", {
                    className: m()(tt.Gj, a),
                    children: (0, o.jsx)(te, {
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
                        children: (0, o.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/b39a5f2755e6da320fce10c8a4a10bdebef9926b671256b1681976198c5656d4.png",
                            className: u,
                            alt: "",
                        }),
                    }),
                }),
            null != l &&
                (0, o.jsx)("div", {
                    className: m()(tt.FV, l),
                    children: (0, o.jsx)(te, {
                        blurAnimationData: { startBlurRadius: 5 * h, endBlurRadius: 0, duration: 4e3 },
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
                        children: (0, o.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/7c23a220a6f31150648930e2ebb435aa7cc89ad57895275bed6f1900869f4de0.png",
                            className: x,
                            alt: "",
                        }),
                    }),
                }),
            null != r &&
                (0, o.jsx)("div", {
                    className: m()(tt.E1, r),
                    children: (0, o.jsx)(te, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * h, duration: 3e3 },
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
                        isMotionReduced: t || !f,
                        animationSpeedScale: p,
                        children: (0, o.jsx)("img", {
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
            c = "settings" === r;
        return i || c
            ? (0, o.jsx)("div", {
                  className: n,
                  children: (0, o.jsx)("img", {
                      src: c
                          ? tn.A
                          : "https://cdn.discordapp.com/assets/content/46e72137fc3631c8024b00c33dbab5cf45740d4ab35f77bd96517830e727d0c5.png",
                      alt: "",
                      className: a,
                  }),
              })
            : (0, o.jsx)("div", {
                  className: n,
                  children: (0, o.jsx)(te, {
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
                          ? (0, o.jsx)("img", {
                                src: "https://cdn.discordapp.com/assets/content/082012af2fe8bfa66ce6630e1549a146738936af43a8e60c780f9976fa333d93.png",
                                alt: "",
                                className: a,
                            })
                          : (0, o.jsx)(
                                ts.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: a,
                                    children: (0, o.jsx)("source", { src: ta }),
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
                starContainerClassName: c,
                boltAssetClassName: d,
                carAssetClassName: u,
                hammerAssetClassName: m,
                keyAssetClassName: x,
                starAssetClassName: g,
                animationSpeedScale: p = 1,
            } = e,
            h = (0, e3.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
            f = (0, e6.TM)();
        return (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(tl, {
                    supportHEVCAlpha: f,
                    isMotionReduced: h,
                    containerVisibilityPercentage: t,
                    containerClassName: i,
                    assetClassName: s,
                    animationSpeedScale: p,
                }),
                (0, o.jsx)(ti, {
                    isMotionReduced: h,
                    containerVisibilityPercentage: t,
                    boltContainerClassName: n,
                    carContainerClassName: a,
                    hammerContainerClassName: l,
                    keyContainerClassName: r,
                    starContainerClassName: c,
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
    return (0, o.jsx)(tr, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: m()(tc.wG, i && tc.Vx),
        flyingWumpusAssetClassName: m()(tc.lu, i && tc.ov),
        boltContainerClassName: m()(tc.nJ, i && tc.Wc),
        hammerContainerClassName: m()(tc.Gj, i && tc.XA),
        keyContainerClassName: m()(tc.FV, i && tc.oZ),
        starContainerClassName: m()(tc.E1, i && tc.LN),
        boltAssetClassName: m()(tc.j7, i && tc.QN),
        hammerAssetClassName: m()(tc.Wv, i && tc.B9),
        keyAssetClassName: m()(tc.rs, i && tc.I1),
        starAssetClassName: m()(tc.OY, i && tc.b$),
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
            marketingBanner: c,
            heroButtons: d,
        } = e,
        { visibilityPercentageRef: u, visibilityPercentage: x } = eg(!(0, g.bG)([ee.Ay], () => ee.Ay.useReducedMotion)),
        p =
            ((t = { [td.MORNING]: eI.t["Wvc/I+"], [td.AFTERNOON]: eI.t["d+0STx"], [td.EVENING]: eI.t.CqsxKI }),
            eI.intl.string(
                t[
                    (i = new Date().getHours()) >= 5 && i < 12
                        ? td.MORNING
                        : i >= 12 && i < 17
                          ? td.AFTERNOON
                          : td.EVENING
                ],
            )),
        h = c ?? (r ? (0, o.jsx)(e2, {}) : null);
    return (0, o.jsx)("div", {
        className: m()(tu.kL, tu.Eg, s),
        ref: l,
        children: (0, o.jsxs)("div", {
            className: m()(tu.W2, tu.HQ),
            ref: u,
            children: [
                (0, o.jsxs)(q.B, {
                    align: "start",
                    gap: 32,
                    className: tu.ZU,
                    children: [
                        a && n,
                        (0, o.jsxs)(q.B, {
                            align: "start",
                            gap: "lg",
                            children: [
                                (0, o.jsxs)(q.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, o.jsx)(eG, { color: "text-default", variant: "nitro-md", children: p }),
                                        (0, o.jsx)(ek, {}),
                                    ],
                                }),
                                d,
                            ],
                        }),
                        h,
                    ],
                }),
                (0, o.jsx)("div", {
                    className: tu.y3,
                    children: (0, o.jsx)(to, { containerVisibilityPercentage: x, compact: null == h }),
                }),
            ],
        }),
    });
};
var tx = i(549926);
let tg = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, o.jsx)(tr, {
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
let th = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, o.jsx)(tr, {
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
var tf = i(682901);
function tN(e) {
    let { fpEndsAt: t, className: i, buttonVisibilityRef: s } = e,
        n = (0, eo.Zb)(t),
        { visibilityPercentageRef: a, visibilityPercentage: l } = eg(!(0, g.bG)([ee.Ay], () => ee.Ay.useReducedMotion));
    return (0, o.jsx)("div", {
        className: m()(tu.kL, i),
        ref: s,
        children: (0, o.jsxs)("div", {
            className: tu.Gs,
            ref: a,
            children: [
                (0, o.jsxs)(q.B, {
                    align: "start",
                    gap: 24,
                    className: tu.E2,
                    children: [
                        (0, o.jsxs)(q.B, {
                            align: "start",
                            gap: 12,
                            children: [
                                (0, o.jsx)(eh, { text: eI.intl.string(eI.t.yhldRB) }),
                                (0, o.jsx)(eG, { children: eI.intl.format(eI.t.FwjP6W, { days: n }) }),
                                (0, o.jsx)("div", {
                                    className: tu.X8,
                                    children: (0, o.jsx)(Z.E, {
                                        variant: "body-md/medium",
                                        color: "text-default",
                                        children: eI.intl.string(eI.t.Jf8KrT),
                                    }),
                                }),
                            ],
                        }),
                        (0, o.jsxs)(q.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            className: tu.oF,
                            children: [
                                (0, o.jsx)(ej.A, {
                                    size: "md",
                                    buttonTextOverride: eI.intl.string(eI.t["2+luBl"]),
                                    iconOverride: J.NitroWheelIcon,
                                    variantOverride: "expressive",
                                }),
                                (0, o.jsx)(Q.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: eI.intl.string(eI.t.Af7ye6),
                                    onClick: () => (0, en.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, o.jsx)("div", { className: tu.Hk, children: (0, o.jsx)(th, { containerVisibilityPercentage: l }) }),
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
            headingTop: c,
            showPill: d,
            shouldShowReferralProgressBar: u,
            marketingBanner: x,
        } = e,
        { visibilityPercentageRef: p, visibilityPercentage: h } = eg(!(0, g.bG)([ee.Ay], () => ee.Ay.useReducedMotion)),
        f = x ?? (u ? (0, o.jsx)(e2, {}) : null);
    return (0, o.jsx)("div", {
        className: m()(tu.kL, tu.Eg, t),
        ref: s,
        children: (0, o.jsxs)("div", {
            className: m()(tu.W2, tu.HQ),
            ref: p,
            children: [
                (0, o.jsxs)(q.B, {
                    align: "start",
                    gap: 32,
                    className: m()(tu.ZU, tu.GW),
                    children: [
                        d && c,
                        null != n.expiresAt &&
                            (0, o.jsx)(eR, {
                                expiresAt: n.expiresAt.toISOString(),
                                digitTextVariant: "body-lg/semibold",
                            }),
                        (0, o.jsxs)(q.B, {
                            align: "start",
                            gap: 16,
                            children: [
                                (0, o.jsx)(eG, {
                                    children: eI.intl.format(eI.t["3yZP0G"], { percent: n.discount.amount }),
                                }),
                                null != a &&
                                    (0, o.jsx)(Z.E, {
                                        variant: "body-md/medium",
                                        color: "text-default",
                                        children: eI.intl.format(eI.t["3Q4wCy"], {
                                            discountedPrice: a,
                                            billingPeriod: (0, er.Ke)(n.discount.intervalType),
                                            numMonths: n.discount.intervalCount,
                                        }),
                                    }),
                            ],
                        }),
                        (0, o.jsxs)(q.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            wrap: !0,
                            children: [
                                (0, o.jsx)(Q.$, {
                                    variant: "expressive",
                                    icon: J.NitroWheelIcon,
                                    size: "md",
                                    text: eI.intl.string(eI.t.zrCzVB),
                                    onClick: () => {
                                        var e;
                                        return (
                                            (e = ev.g.CONFIRM_DISCOUNT),
                                            void (0, X.mM)(async () => {
                                                let { default: t } = await Promise.all([
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
                                                    i.e(795854),
                                                    i.e(870088),
                                                    i.e(300641),
                                                    i.e(747802),
                                                    i.e(966366),
                                                    i.e(795345),
                                                    i.e(153302),
                                                    i.e(807003),
                                                    i.e(88683),
                                                    i.e(983513),
                                                    i.e(216806),
                                                    i.e(363094),
                                                    i.e(324469),
                                                    i.e(70379),
                                                    i.e(417333),
                                                    i.e(127962),
                                                    i.e(517888),
                                                    i.e(959880),
                                                    i.e(174016),
                                                    i.e(22921),
                                                    i.e(11301),
                                                    i.e(861060),
                                                    i.e(364827),
                                                    i.e(626565),
                                                    i.e(486137),
                                                    i.e(80421),
                                                    i.e(206027),
                                                    i.e(393471),
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
                                                    i.e(320272),
                                                    i.e(594161),
                                                    i.e(435432),
                                                    i.e(492618),
                                                    i.e(80347),
                                                    i.e(52513),
                                                ]).then(i.bind(i, 336888));
                                                return (i) =>
                                                    (0, o.jsx)(t, {
                                                        ...i,
                                                        analyticsLocations: r,
                                                        initialStep: e,
                                                        premiumSubscription: l,
                                                    });
                                            })
                                        );
                                    },
                                }),
                                (0, o.jsx)(eA.A, {
                                    variant: "secondary",
                                    size: "md",
                                    buttonTextOverride: eI.intl.string(eI.t["3KomGa"]),
                                }),
                            ],
                        }),
                        f,
                    ],
                }),
                (0, o.jsx)("div", {
                    className: m()(tu.y3, tu.Xx),
                    children: (0, o.jsx)(tg, { containerVisibilityPercentage: h }),
                }),
            ],
        }),
    });
}
function tj(e) {
    let { className: t, isInReverseTrial: i, shouldShowReferralProgressBar: s } = e,
        {
            headingTop: n,
            showPill: a,
            shouldShowChurnVariant: l,
            premiumSubscription: r,
            userDiscountOffer: c,
            discountedPrice: d,
            buttonVisibilityRef: u,
        } = tE(),
        { analyticsLocations: m } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        x = (0, em.uF)(K.oW.MARKETING_PAGE_BANNER),
        g = null != r && r.status === eX.Dmq.CANCELED,
        p = null;
    if (null != x) {
        let { surface: e, id: t, promotionId: i, componentType: s } = x;
        p = (0, o.jsx)(ef.x, {
            componentId: t,
            componentType: s,
            promotionId: i,
            promotionBannerMarketingComponentFields: e,
        });
    }
    let h = (0, eu.V)(),
        f = (0, ed.O)(),
        N = (0, z.U9)(f, tf.pe.TIER_2) ? tf.pe.TIER_2 : void 0,
        b = null != r && r.status !== eX.Dmq.ACCOUNT_HOLD && r.hasAnyPremiumNitro,
        E = (0, ei.A)(),
        T = E.isFractionalPremiumActive && !b && null == p && !l;
    if (i) return (0, o.jsx)(tN, { fpEndsAt: E.currentEntitlementEndsAt, className: t, buttonVisibilityRef: u });
    if (!g) {
        let e = T
            ? (0, o.jsxs)("div", {
                  className: tu.UJ,
                  children: [
                      (0, o.jsx)(ej.A, { size: "md", subscriptionTier: h?.subscriptionTrial?.skuId ?? N }),
                      (0, o.jsx)(eA.A, {
                          variant: "secondary",
                          size: "md",
                          buttonTextOverride: eI.intl.string(eI.t["3KomGa"]),
                      }),
                  ],
              })
            : null;
        return (0, o.jsx)(tm, {
            className: t,
            headingTop: n,
            showPill: a,
            buttonVisibilityRef: u,
            shouldShowReferralProgressBar: s,
            marketingBanner: p,
            heroButtons: e,
        });
    }
    return l && null != c && null != r
        ? (0, o.jsx)(tA, {
              className: t,
              buttonVisibilityRef: u,
              userDiscountOffer: c,
              discountedPrice: d,
              premiumSubscription: r,
              analyticsLocations: m,
              headingTop: n,
              showPill: a,
              shouldShowReferralProgressBar: s,
              marketingBanner: p,
          })
        : (0, o.jsx)(tm, {
              className: t,
              headingTop: n,
              showPill: a,
              buttonVisibilityRef: u,
              shouldShowReferralProgressBar: s,
              marketingBanner: p,
          });
}
let [tb, tE] = (0, ea.A)(),
    tT = function (e) {
        let { className: t, buttonVisibilityRef: i, userDiscountOffer: s, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, eo.ds)(),
            r = (0, ec.QQ)(),
            c = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            u = null != c && c.status === eX.Dmq.CANCELED && null != s,
            m = r && !u,
            x = eI.intl.string(eI.t.qYKftX),
            p = (0, eN.m)(),
            { fractionalState: h, endsAt: f } = (0, ei.A)(),
            N = (0, et.Ay)(f, et.yE.CREDITS_ENDS_IN),
            b = h !== tf.xc.NONE && !l;
        b && (m = !0);
        let E = d.useMemo(() => {
                if (!b) return (0, o.jsx)(eh, { text: x });
                let e = eI.intl.format(eI.t["yR+oDD"], {
                    helpCenterLink: el.A.getArticleURL(eX.MVz.FRACTIONAL_PREMIUM_ABOUT),
                });
                return (0, o.jsx)($.A, {
                    text: e,
                    "aria-label": e.toString(),
                    tooltipClassName: tu.YL,
                    position: "right",
                    children: (e) =>
                        (0, o.jsx)("div", {
                            ...e,
                            className: tu.V_,
                            children: (0, o.jsx)("div", { className: tu.eL, children: (0, o.jsx)(eh, { text: N }) }),
                        }),
                });
            }, [b, x, N]),
            T = d.useMemo(
                () => ({
                    headingTop: E,
                    showPill: m,
                    shouldShowChurnVariant: u,
                    premiumSubscription: c,
                    userDiscountOffer: s,
                    discountedPrice: n,
                    buttonVisibilityRef: i,
                }),
                [E, m, u, c, s, n, i],
            );
        return (0, o.jsx)(j.f5, {
            value: a,
            children: (0, o.jsx)(tb.Provider, {
                value: T,
                children: (0, o.jsx)(tj, { className: t, isInReverseTrial: l, shouldShowReferralProgressBar: p }),
            }),
        });
    };
var tI = i(435558),
    tC = i(308588),
    tR = i(24197),
    tv = i(28863),
    t_ = i(212245),
    ty = i(19191),
    tP = i(597758),
    tS = i(412260),
    tD = i(316511);
function tM(e) {
    return null != e.effectiveEndDate ? e.effectiveEndDate.getTime() + 1 : null;
}
function tO(e, t) {
    let i = e.filter((e) => e > t);
    return i.length > 0 ? Math.min(...i) : null;
}
var tk = i(706778),
    tU = i(498470),
    tL = i(807098),
    tG = i(92551),
    tw = i(637706),
    tB = i(788883),
    tH = i(700556),
    tF = i(821874);
function tV(e) {
    let { id: t, sectionClassName: i, heading: s, beforeGrid: n, grid: a, gridClassName: l } = e,
        r = tF.Ui;
    return (0, o.jsxs)("div", {
        id: t,
        className: i,
        children: [
            s,
            n,
            null != a ? (0, o.jsx)("div", { className: m()(r, null != n && tH.Jx, l), children: a }) : null,
        ],
    });
}
var tW = i(477106),
    tz = i(762493);
function tY(e) {
    let { component: t } = e,
        i = (function (e) {
            if ("nitroHomeSectionHeader" !== e.properties.properties.oneofKind) return null;
            let { nitroHomeSectionHeader: t } = e.properties.properties,
                i = e.getFormatVariableValues(eI.intl.currentLocale),
                s = (0, tG.n)(t.header, i),
                n = (0, tG.n)(t.subheader, i),
                a = s.ok ? s.content.trim() : "",
                l = n.ok ? n.content.trim() : "";
            return "" === a && "" === l ? null : { header: a, subheader: l };
        })(t);
    if (null == i) return null;
    let { header: s, subheader: n } = i,
        a = (0, tw.C)(t.surface.helpArticle, "");
    return (0, o.jsxs)(q.B, {
        gap: 8,
        className: tF.R_,
        children: [
            (0, o.jsx)(tB.A, { componentType: t.componentType, componentId: t.id, promotionId: t.promotionId }),
            "" !== s && (0, o.jsx)(eL.D, { variant: "nitro-sm", className: tH.U6, children: s }),
            ("" !== n || null != a) &&
                (0, o.jsxs)(Z.E, {
                    variant: "body-md/medium",
                    color: "text-subtle",
                    children: [
                        n,
                        null != a &&
                            (0, o.jsxs)(o.Fragment, {
                                children: [
                                    "" !== n && " ",
                                    (0, o.jsx)(tv.Anchor, { href: a.url, children: a.linkText }),
                                ],
                            }),
                    ],
                }),
        ],
    });
}
function tK(e) {
    let { component: t } = e,
        { button: i, background: s, foreground: n, thirdPartyLogo: a } = t.surface,
        l = t.surface.description.trim(),
        { analyticsLocations: r } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        c = (0, t_.p)(),
        u = (0, tL.T)(s),
        m = null != u && "" !== u,
        x = (0, tL.T)(n, m),
        g = (0, tL.T)(a, m),
        p = (function (e) {
            if (null == e || e.buttonAction === tC.dz.UNSPECIFIED) return;
            let t = e.copy.trim();
            return "" !== t ? t : void 0;
        })(i),
        h = d.useMemo(
            () =>
                null != i
                    ? (0, tU.h)({
                          buttonAction: i.buttonAction,
                          deeplinkSection: i.deeplinkSection,
                          applicationId: i.navigableStorefrontApplicationId?.value,
                          shopCollectionId: i.shopCollectionId?.value,
                          giftModalDestination: i.giftModalDestination,
                          analyticsLocations: r,
                          analyticsLocation: c.location,
                      })
                    : void 0,
            [c.location, r, i],
        );
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(tB.A, { componentType: t.componentType, componentId: t.id, promotionId: t.promotionId }),
            (0, o.jsx)(tk.S, {
                id: `nitro-perk-card-${t.id}`,
                title: t.surface.header.trim(),
                description: "" !== l ? l : void 0,
                caption: null != g && "" !== g ? (0, o.jsx)("img", { src: g, alt: "" }) : void 0,
                primaryAsset: x ?? void 0,
                backgroundAssetUrl: m ? u : void 0,
                ctaText: p,
                onCtaClick: null != p ? h : void 0,
                containerClassName: tF.Nr,
            }),
        ],
    });
}
function tX() {
    var e;
    let t,
        i,
        s,
        n,
        a,
        l,
        r = (0, em.uF)(K.oW.NITRO_HOME_SECTION_HEADER),
        c =
            ((e = K.oW.NITRO_PERK_CARD),
            d.useEffect(() => {
                (0, tP.BE)();
            }, []),
            (t = (0, g.yK)([tS.A, ty.A], () =>
                tS.A.getActiveMarketingComponentsBySurfaceUnprioritized(e).filter((e) =>
                    (0, tD.A)(tS.A.getMarketingPromotionForEligibility(e.promotionId), ty.A),
                ),
            )),
            (i = (0, g.yK)([tS.A], () => t.map((e) => tS.A.getMarketingPromotionForEligibility(e.promotionId)), [t])),
            (s = d.useMemo(
                () => [...i.map((e) => e?.endDate.getTime() ?? null), ...t.map(tM)].filter((e) => null != e),
                [t, i],
            )),
            (n = d.useCallback(() => tO(s, Date.now()), [s])),
            (a = d.useCallback(
                (e) => {
                    let t;
                    return (
                        !(function i() {
                            let n = Date.now(),
                                a = tO(s, n);
                            null == a ||
                                a - n >= em.Th ||
                                (t = setTimeout(() => {
                                    (i(), e());
                                }, a - n));
                        })(),
                        () => clearTimeout(t)
                    );
                },
                [s],
            )),
            (l = d.useSyncExternalStore(a, n, n)),
            d.useMemo(
                () =>
                    t.filter((e, t) => {
                        var s;
                        return ((s = i[t]), !(null != s && (null == l || s.endDate.getTime() < l)));
                    }),
                [t, i, l],
            )),
        u = d.useMemo(() => {
            let e;
            return (
                (e = c.filter((e) => {
                    let { surface: t } = e;
                    return "" !== t.header.trim() && t.placements.includes(tR.U.NITRO_HOME);
                })),
                (0, tI.sortBy)(e, (e) => {
                    let { surface: t } = e;
                    return 0 === t.position ? 1 / 0 : t.position;
                })
            );
        }, [c]);
    return 0 === u.length
        ? null
        : (0, o.jsx)(tV, {
              sectionClassName: m()(tz.uW, tz.Uv, tz.qr),
              heading: null != r ? (0, o.jsx)(tY, { component: r }) : null,
              gridClassName: tW.V,
              grid: u.map((e) => (0, o.jsx)(tK, { component: e }, e.id)),
          });
}
var tq = i(820284),
    tZ = i(742589),
    tJ = i(392943),
    tQ = i(521440),
    t$ = i(603202),
    t0 = i(673992);
let t1 = function () {
    return (0, o.jsx)(tq.A, {
        section: eX.JJy.NAVIGATION,
        children: (0, o.jsx)(tZ.A, {
            className: m()(t$.TQ, t0.C$),
            transparent: !0,
            role: "navigation",
            children: (0, o.jsxs)("div", {
                className: t$.Wc,
                children: [
                    (0, o.jsxs)("div", {
                        className: t0.wk,
                        children: [
                            (0, o.jsx)(J.NitroWheelIcon, { colorClass: t0.tr }),
                            (0, o.jsx)("span", {
                                role: "img",
                                "aria-label": eI.intl.string(eI.t.Ipxkog),
                                className: t0.Ss,
                                children: (0, o.jsx)(tJ.A, { color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, o.jsxs)("div", {
                        className: t$.MQ,
                        children: [
                            (0, o.jsx)(tQ.l, { size: "sm", location: A.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB }),
                            (0, o.jsx)(eA.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var t2 = i(325499),
    t3 = i(613412),
    t6 = i(885574),
    t7 = i(43990),
    t8 = i(993077),
    t5 = i(139286),
    t9 = i(872725),
    t4 = i(920050),
    ie = i(51965),
    it = i(375776),
    ii = i(727811),
    is = i(222652),
    ia = i(831768),
    il = i(934353);
function ir(e) {
    let { openRewardModal: t } = e,
        i = (0, is.z)();
    if (i.kind === is.N.SUBSCRIBE)
        return (0, o.jsxs)("div", {
            className: il.R$,
            children: [
                (0, o.jsx)(ej.A, {
                    defaultTextOverride: i.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: tf.pe.TIER_2,
                }),
                (0, o.jsx)(Q.$, { variant: "secondary", size: "md", text: eI.intl.string(eI.t.hvVgAZ), onClick: t }),
            ],
        });
    let s =
        i.claimStatus === ii.P.CLAIMED
            ? { text: eI.intl.string(ia.default.Plwzgf) }
            : { text: eI.intl.string(eI.t.hvVgAZ) };
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)("div", {
                className: il.R$,
                children: [
                    (0, o.jsx)(ie.A, {
                        variant: "overlay-primary",
                        size: "md",
                        text: i.text,
                        icon: i.icon,
                        iconPosition: i.iconPosition,
                        onClick: i.onClick,
                        disabled: i.disabled,
                        loading: i.loading,
                    }),
                    (0, o.jsx)(Q.$, {
                        variant: "secondary",
                        size: "md",
                        ...s,
                        onClick: t,
                        disabled: i.requestInProgress,
                    }),
                ],
            }),
            i.claimStatus === ii.P.CLAIM_IN_PROGRESS &&
                (0, o.jsxs)("div", {
                    className: il.ed,
                    children: [
                        (0, o.jsx)(t6.CircleInformationIcon, { size: "xs", color: "var(--text-subtle)" }),
                        (0, o.jsx)(Z.E, {
                            variant: "body-xs/medium",
                            color: "text-subtle",
                            children: eI.intl.string(ia.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function ic(e) {
    let { glowing: t = !1 } = e;
    (0, t5.A)({
        type: t3.ImpressionTypes.VIEW,
        name: t3.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: t4.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: s } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_HERO_CARD),
        n = d.useCallback(() => {
            (0, X.mM)(async () => {
                let { default: e } = await Promise.all([i.e(878140), i.e(532203)]).then(i.bind(i, 15654));
                return (t) => (0, o.jsx)(e, { ...t, sourceAnalyticsLocations: s });
            });
        }, [s]);
    return (0, o.jsx)(t7.N, {
        theme: eX.NJ8.DARK,
        children: (e) =>
            (0, o.jsx)(j.f5, {
                value: s,
                children: (0, o.jsx)("div", {
                    className: m()(e, il.kL),
                    children: (0, o.jsx)(t9.A, {
                        cardType: t8.s.CUSTOM,
                        cardClassName: il.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, o.jsxs)("div", {
                            className: il.XF,
                            children: [
                                (0, o.jsxs)("div", {
                                    className: il.j,
                                    children: [
                                        (0, o.jsx)("div", { className: il._g }),
                                        (0, o.jsx)("div", { className: il.$h }),
                                        (0, o.jsx)("div", { className: il.Rv }),
                                        (0, o.jsx)("div", { className: il.Lw }),
                                        (0, o.jsx)("div", { className: il.mR }),
                                    ],
                                }),
                                (0, o.jsxs)("div", {
                                    className: il.Qs,
                                    children: [
                                        (0, o.jsx)("img", {
                                            className: il.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, o.jsx)(eL.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: il.DD,
                                            children: eI.intl.string(ia.default.RGT513),
                                        }),
                                        (0, o.jsx)(Z.E, {
                                            variant: "body-md/normal",
                                            color: "text-strong",
                                            className: il.h_,
                                            children: eI.intl.string(ia.default["+pTnsf"]),
                                        }),
                                        (0, o.jsx)(ir, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var io = i(7684),
    id = i(112992);
let iu = () =>
    (0, o.jsxs)("div", {
        className: io.X,
        children: [
            (0, o.jsx)("div", {
                className: io.W,
                children: (0, o.jsx)(t6.CircleInformationIcon, { size: "xxs", color: ez.A.colors.ICON_MUTED }),
            }),
            (0, o.jsx)(Z.E, {
                variant: "body-xs/medium",
                color: "text-subtle",
                children: eI.intl.string(ia.default.Fs74z9),
            }),
        ],
    });
function im(e) {
    let { className: t, containerClassName: i, glowing: s } = e,
        n = (0, is.z)(),
        a = { isThirdPartyPerk: !0, subscriptionRequired: !0 },
        l =
            n.kind === is.N.SUBSCRIBE
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
        r = n.kind === is.N.DEFAULT && n.claimStatus === ii.P.CLAIM_IN_PROGRESS;
    return (0, o.jsx)(tk.S, {
        id: t4.XBOX_PREMIUM_PERK_CARD_ID,
        title: eI.intl.string(ia.default.UVL9tD),
        description: eI.intl.string(ia.default["I+IXr0"]),
        ...l,
        footerContent: r ? (0, o.jsx)(iu, {}) : void 0,
        className: t,
        containerClassName: i,
        glowing: s,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, o.jsx)("img", { src: id.A, alt: "Xbox Game Pass" }),
        blurTint: "#054B16",
        analyticsOptions: { thirdPartyPartner: "xbox" },
    });
}
function ix(e) {
    let { analyticsLocations: t } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, o.jsx)(j.f5, { value: t, children: (0, o.jsx)(im, { ...e }) });
}
var ig = i(744082),
    ip = i(261995),
    ih = i(722793),
    iN = i(517846),
    iA = i(669700),
    ij = i(398523),
    ib = i(881373),
    iE = i(555393),
    iT = i(852218),
    iI = i(52530),
    iC = i(116420),
    iR = i(88210),
    iv = i(612413);
i(675772);
var i_ = i(749962),
    iy = i(691450),
    iP = i(116716),
    iS = i(12947),
    iD = i(524698),
    iM = i(45116),
    iO = i(679502);
let ik = "xgpp";
function iU(e) {
    let { card: t, backgroundAssetUrl: i, blurTint: s, glowing: n, autoClickCta: a } = e;
    return (0, o.jsx)("div", {
        className: tH.JE,
        children: (0, o.jsx)(tk.S, {
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
function iL(e) {
    let { glowingSectionId: t, glowingPerkId: i } = e,
        s = (0, t2.b)("premium_subscriber_home_rewards");
    (0, ig.A)(tf.tv);
    let {
            logitechCard: n,
            steelseriesCard: a,
            youtubeCard: l,
            voicemodCard: r,
            macaronCard: c,
            codeBlurpleCard: u,
        } = (function () {
            let e,
                t,
                { analyticsLocations: i } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
                s = ((e = (0, iI.eh)()), (t = (0, iI.fR)()), null != e ? e : t),
                n = (0, ib.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
                a = ij.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
                l = (0, iv.mh)({ location: "useThirdPartyPartnerPerkCards" }),
                { enabled: r } = iC.A.useConfig({ location: "useThirdPartyPartnerPerkCards" }),
                c = (0, g.bG)([tS.A], () => tS.A.getPromotionsByPartner(iT.uV).recurring.length > 0),
                u = null === (0, iE.N)(),
                m = (0, ip.fY)({ location: "useThirdPartyPartnerPerkCards" }),
                { currentDate: x, nDaysInMonth: p } = (0, d.useMemo)(() => {
                    let e = new Date();
                    return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
                }, []);
            return (0, d.useMemo)(() => {
                let e = n
                        ? {
                              id: t4.LOGITECH_3PP_CARD_ID,
                              title: eI.intl.string(iy.default.OlObRa),
                              description: eI.intl.format(iy.default.ZGOJ8R, {
                                  discountPercent: 30,
                                  termsUrl: el.A.getArticleURL(eX.MVz.LOGITECH_PROMOTION),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              progress: x.getDate() / p,
                              ctaText: eI.intl.string(eI.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, iR.P)({
                                      partnerIds: [iT.XY],
                                      title: eI.intl.string(iy.default["2I7nK+"]),
                                      subtitle: eI.intl.format(iy.default.W8jOD0, {
                                          termsUrl: el.A.getArticleURL(eX.MVz.LOGITECH_PROMOTION),
                                      }),
                                      analyticsLocations: i,
                                  }),
                              blurTint: "#2E213D",
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                              caption: (0, o.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                                  alt: "Logitech",
                              }),
                              analyticsOptions: { thirdPartyPartner: iT.XY },
                              ctaDisabled: u,
                              ctaLoading: u,
                          }
                        : null,
                    t = a
                        ? {
                              id: t4.RECURRING_3P_PROMOTIONS_CARD_ID,
                              title: eI.intl.string(eI.t.m7PucM),
                              description: eI.intl.format(eI.t["1Zw6xL"], {}),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              caption: (0, o.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                              progress: x.getDate() / p,
                              ctaText: eI.intl.string(eI.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, iR.P)({
                                      partnerIds: [iT.KS],
                                      title: eI.intl.string(eI.t["7ioAjs"]),
                                      subtitle: eI.intl.format(eI.t.LOYRxB, {
                                          helpCenterLink: el.A.getArticleURL(eX.MVz.RECURRING_PROMOTION),
                                      }),
                                      analyticsLocations: i,
                                  }),
                              blurTint: "#2E213D",
                              analyticsOptions: { thirdPartyPartner: iT.KS },
                              ctaDisabled: u,
                              ctaLoading: u,
                          }
                        : null;
                return {
                    logitechCard: e,
                    steelseriesCard: t,
                    youtubeCard: l
                        ? {
                              id: t4.YOUTUBE_3PP_CARD_ID,
                              title: eI.intl.string(iD.default["BdIVB+"]),
                              description: eI.intl.format(iD.default["cCl3+a"], {
                                  discountPercentage: 20,
                                  months: 6,
                                  helpCenterUrl: el.A.getArticleURL(eX.MVz.YOUTUBE_PROMOTION),
                              }),
                              isThirdPartyPerk: !0,
                              subscriptionRequired: !0,
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/e07fd53d33f374f567964ff5b7843f09bc6943288891cfed6e573df04ba9741c.webp",
                              blurTint: "#18181C",
                              caption: (0, o.jsx)("img", { src: iO.A, alt: "YouTube Premium" }),
                              ctaText: eI.intl.string(i_.default.fcopjf),
                              onCtaClick: () =>
                                  (0, iR.P)({
                                      partnerIds: [iT.NC],
                                      analyticsLocations: i,
                                      title: eI.intl.string(iD.default.TDZUui),
                                      subtitle: eI.intl.format(iD.default.dueYf1, {
                                          helpCenterUrl: el.A.getArticleURL(eX.MVz.YOUTUBE_PROMOTION),
                                      }),
                                      onClose: () => {
                                          iA.Ay.fireSurveyAction(iN.w.YOUTUBE_3PP_MODAL_DISMISSED);
                                      },
                                  }),
                              analyticsOptions: { thirdPartyPartner: iT.NC },
                              ctaDisabled: u,
                              ctaLoading: u,
                          }
                        : null,
                    voicemodCard:
                        r && c
                            ? {
                                  id: t4.VOICEMOD_3PP_CARD_ID,
                                  title: eI.intl.string(iS.default.pkGxhZ),
                                  description: eI.intl.string(iS.default.Gspm9q),
                                  pillText: eI.intl.string(eI.t.y2b7CA),
                                  subscriptionRequired: !0,
                                  isThirdPartyPerk: !0,
                                  caption: (0, o.jsx)("img", { src: iM.A, alt: "Voicemod" }),
                                  backgroundAssetUrl:
                                      "https://cdn.discordapp.com/assets/content/d78c7ca47e2f2bf66dcc2fb12a7b190392672d4c44d6138f26b011f8bd923fff.png",
                                  progress: x.getDate() / p,
                                  ctaText: eI.intl.string(iP.default.vlafDc),
                                  onCtaClick: () =>
                                      (0, iR.P)({
                                          partnerIds: [iT.uV],
                                          title: eI.intl.string(iS.default.AX5oOl),
                                          subtitle: eI.intl.format(iP.default.fqtaGq, {
                                              termsUrl: el.A.getArticleURL(eX.MVz.VOICEMOD_PROMOTION),
                                          }),
                                          analyticsLocations: i,
                                      }),
                                  analyticsOptions: { thirdPartyPartner: iT.uV },
                                  ctaDisabled: u,
                                  ctaLoading: u,
                              }
                            : null,
                    macaronCard: m,
                    codeBlurpleCard: s,
                };
            }, [m, s, i, x, n, p, a, l, r, c, u]);
        })(),
        { phase: x } = (0, ip.vc)({ location: "NitroRewardsSection" }),
        p =
            null != c
                ? {
                      card: c,
                      backgroundAssetUrl:
                          x === ih.H.PHASE_ONE
                              ? "https://cdn.discordapp.com/assets/content/dacaa1d04c91ae0beefcbce25518899d11a943e10437ded70a6d594a03cf9535.png"
                              : "https://cdn.discordapp.com/assets/content/d6bc70e4b19392250948d59f11fcdb7360b2ed7fa636f8d9ab30c199a728a7c6.png",
                      blurTint: "#001E73",
                  }
                : null != l
                  ? {
                        card: l,
                        backgroundAssetUrl:
                            "https://cdn.discordapp.com/assets/content/6936886d1c55035bd3f56b7594d80dd08e7d3e859be8630f3ef667b338a1dd78.webp",
                        blurTint: "#3E000C",
                    }
                  : null,
        h = null != p ? p.card.id : null,
        f = s && null == p,
        N =
            s ||
            null != n ||
            null != a ||
            null != u ||
            (null != c && c.id !== h) ||
            (null != l && l.id !== h) ||
            null != r,
        b = null;
    return (null != p
        ? (b = (0, o.jsx)(iU, {
              card: p.card,
              backgroundAssetUrl: p.backgroundAssetUrl,
              blurTint: p.blurTint,
              glowing: t === ik || i === p.card.id,
              autoClickCta: i === p.card.id,
          }))
        : f && (b = (0, o.jsx)("div", { className: tH.JE, children: (0, o.jsx)(ic, { glowing: t === ik }) })),
    null != b || N)
        ? (0, o.jsx)(tV, {
              id: ik,
              sectionClassName: m()(tz.uW, tz.Uv, tz.qr),
              heading: (0, o.jsx)(eL.D, {
                  variant: "nitro-sm",
                  className: m()(tF.R_, tH.U6),
                  children: eI.intl.string(eI.t.NG1e6l),
              }),
              beforeGrid: b,
              grid: N
                  ? (0, o.jsxs)(o.Fragment, {
                        children: [
                            null != r && (0, o.jsx)(tk.S, { ...r, containerClassName: tF.Nr, glowing: i === r.id }),
                            null != u && (0, o.jsx)(tk.S, { ...u, containerClassName: tF.Nr, glowing: i === u.id }),
                            null != c &&
                                c.id !== h &&
                                (0, o.jsx)(tk.S, {
                                    ...c,
                                    containerClassName: tF.Nr,
                                    glowing: i === c.id,
                                    autoClickCta: i === c.id,
                                }),
                            null != l &&
                                l.id !== h &&
                                (0, o.jsx)(tk.S, {
                                    ...l,
                                    containerClassName: tF.Nr,
                                    glowing: i === l.id,
                                    autoClickCta: i === l.id,
                                }),
                            s &&
                                (0, o.jsx)(ix, {
                                    containerClassName: tF.Nr,
                                    glowing: i === t4.XBOX_PREMIUM_PERK_CARD_ID,
                                }),
                            null != n && (0, o.jsx)(tk.S, { ...n, containerClassName: tF.Nr, glowing: i === n.id }),
                            null != a && (0, o.jsx)(tk.S, { ...a, containerClassName: tF.Nr, glowing: i === a.id }),
                        ],
                    })
                  : null,
          })
        : null;
}
var iG = i(313133),
    iw = i(67423);
let iB = function (e) {
    let { isVisible: t, premiumSubscription: s, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: l } = (0, j.Ay)(A.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        r = (0, e8.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, o.jsx)(e7.animated.div, {
        className: m()(iG.iE, { [iG.q4]: !t }),
        style: r,
        children: (0, o.jsxs)("div", {
            className: iG.iJ,
            children: [
                (0, o.jsx)("img", { alt: "", src: iw, className: iG.oU }),
                (0, o.jsxs)("div", {
                    className: iG.iQ,
                    children: [
                        (0, o.jsx)(eL.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            children: eI.intl.format(eI.t["3yZP0G"], { percent: n.discount.amount }),
                        }),
                        (0, o.jsx)(Z.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: eI.intl.format(eI.t["3Q4wCy"], {
                                numMonths: n.discount.intervalCount,
                                discountedPrice: a,
                                billingPeriod: (0, er.Ke)(n.discount.intervalType),
                            }),
                        }),
                    ],
                }),
                (0, o.jsx)(Q.$, {
                    variant: "expressive",
                    icon: J.NitroWheelIcon,
                    size: "md",
                    text: eI.intl.string(eI.t.zrCzVB),
                    onClick: () =>
                        void (0, X.mM)(async () => {
                            let { default: e } = await Promise.all([
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
                                i.e(795854),
                                i.e(870088),
                                i.e(300641),
                                i.e(747802),
                                i.e(966366),
                                i.e(795345),
                                i.e(153302),
                                i.e(807003),
                                i.e(88683),
                                i.e(983513),
                                i.e(216806),
                                i.e(363094),
                                i.e(324469),
                                i.e(70379),
                                i.e(417333),
                                i.e(127962),
                                i.e(517888),
                                i.e(959880),
                                i.e(174016),
                                i.e(22921),
                                i.e(11301),
                                i.e(861060),
                                i.e(364827),
                                i.e(626565),
                                i.e(486137),
                                i.e(80421),
                                i.e(206027),
                                i.e(393471),
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
                                i.e(320272),
                                i.e(594161),
                                i.e(435432),
                                i.e(492618),
                                i.e(80347),
                                i.e(52513),
                            ]).then(i.bind(i, 336888));
                            return (t) =>
                                (0, o.jsx)(e, {
                                    ...t,
                                    premiumSubscription: s,
                                    analyticsLocations: l,
                                    initialStep: ev.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var iH = i(761508),
    iF = i(151869),
    iV = i(62617),
    iW = i(387103);
function iz(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        u = d.useMemo(
            () => (0, iV.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
        src: iW.A,
        className: (0, iV.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
let iY =
    "https://cdn.discordapp.com/assets/content/a89ff8a07704142beff857453a6c8aa15400cf711f8fe3cbbfa7ff4f0b2a334f.svg";
function iK(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        u = d.useMemo(
            () => (0, iV.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
        src: iY,
        className: (0, iV.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iX = i(93712);
function iq(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        u = d.useMemo(
            () => (0, iV.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
        src: iX.A,
        className: (0, iV.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iZ = i(345394);
function iJ(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        u = d.useMemo(
            () => (0, iV.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
        src: iZ.A,
        className: (0, iV.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iQ = i(78211);
function i$(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        u = d.useMemo(
            () => (0, iV.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/2d617cf5c40353ca4ec6ac76e1a48f6781439c18db06b8cfab0f194358abe555.svg",
        className: (0, iV.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var i0 = i(95278);
function i1(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        u = d.useMemo(
            () => (0, iV.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/8a9a80f2b924da025612a160c7dc74c5e0fe675a90e3424737e6c5927739a6d0.svg",
        className: (0, iV.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
function i2(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        u = d.useMemo(
            () => (0, iV.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/3ba8fce33a4733cdbadc10ac378d1b5523b0c0961e7edc74372c159e3009727f.svg",
        className: (0, iV.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var i3 = i(996682);
function i6(e) {
    let { color: t = ez.A.colors.ICON_STRONG, "aria-label": i, "aria-hidden": s, role: n, width: a, height: l } = e,
        r = d.useMemo(() => (0, iV.H)({ width: a, height: l, intrinsicWidth: 100, intrinsicHeight: 80 }), [a, l]);
    return (0, o.jsxs)("svg", {
        ...(0, i3.A)({ "aria-label": i, "aria-hidden": s, role: n }),
        style: r,
        viewBox: "0 0 100 80",
        fill: t.css,
        children: [
            (0, o.jsx)("g", {
                clipPath: "url(#a)",
                children: (0, o.jsx)("path", {
                    fill: t.css,
                    d: "M69.14 40c0 5.63-4.25 9.82-9.97 9.82-5.71 0-9.96-4.19-9.96-9.82s4.25-9.82 9.96-9.82c5.72 0 9.97 4.19 9.97 9.82Zm30.43 0c0 21.87-17.94 39.3-40.4 39.3-19.26 0-35.07-12.71-39.32-30.13H11.2L7.22 30.83h12.76c1.2-4.19 3.05-8.25 5.45-11.79H4.7L.7.71h57.27C82.16.7 99.57 18.13 99.57 40Zm-19.14 0c0-11.66-9.43-20.96-21.26-20.96-11.82 0-21.25 9.3-21.25 20.96s9.43 20.96 21.25 20.96c11.83 0 21.26-9.3 21.26-20.96Z",
                }),
            }),
            (0, o.jsx)("defs", {
                children: (0, o.jsx)("clipPath", {
                    id: "a",
                    children: (0, o.jsx)("path", { fill: t.css, d: "M0 0h100v80H0z" }),
                }),
            }),
        ],
    });
}
function i7(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        u = d.useMemo(
            () => (0, iV.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/1314d17fb23c01337cac4bfdaaff48c5e6ac1f515b0647f0964922b988f095c1.svg",
        className: (0, iV.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var i8 = i(78701);
function i5(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        u = d.useMemo(
            () => (0, iV.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
        src: i8.A,
        className: (0, iV.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var i9 = i(462887),
    i4 = i(736653),
    se = i(462463),
    st = i(219882),
    si = i(105909),
    ss = i(208223),
    sn = i(731738),
    sa = i(913379),
    sl = i(403362),
    sr = i(286348),
    sc = i(923079),
    so = i(631502),
    sd = (((l = {}).WHATS_NEW = "whats_new"), (l.FAVORITES = "favorites"), l),
    su = i(696292),
    sm = i(914313),
    sx = i(321538),
    sg = i(892227),
    sp = i(81466),
    sh = i(17268),
    sf = i(749012);
let sN = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, H.F)();
    if (!e || null == t) return null;
    let i =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, sg.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, o.jsxs)("div", {
        className: sf.kL,
        children: [
            null != i &&
                (0, o.jsxs)("div", {
                    className: sf.nM,
                    children: [
                        (0, o.jsxs)("div", {
                            className: sf.Pf,
                            children: [
                                (0, o.jsx)(sp.CalendarIcon, { size: "sm", color: ez.A.colors.TEXT_DEFAULT }),
                                (0, o.jsx)(Z.E, {
                                    variant: "body-sm/medium",
                                    color: "text-default",
                                    children: eI.intl.string(sh.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, o.jsx)(Z.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: eI.intl.format(sh.default.xedPIb, { days: i }),
                        }),
                    ],
                }),
            null != i && t.total_rewarded_from_program > 0 && (0, o.jsx)("div", { className: sf.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, o.jsxs)("div", {
                    className: sf.nM,
                    children: [
                        (0, o.jsxs)("div", {
                            className: sf.Pf,
                            children: [
                                (0, o.jsx)(eW.OrbsIcon, { size: "sm", color: ez.A.colors.TEXT_DEFAULT }),
                                (0, o.jsx)(Z.E, {
                                    variant: "body-sm/medium",
                                    color: "text-default",
                                    children: eI.intl.string(sh.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, o.jsx)(Z.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: eI.intl.format(sh.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var sA = i(221596),
    sj = i(799544);
function sb(e) {
    var t;
    let i,
        s,
        n,
        a,
        l,
        r,
        { shouldShowBonusOrbsUX: c, multiplier: u } = (0, sm.lk)(sA.rE.NITRO_HOME_MARKETING),
        { isEligible: x, programReward: p } = (0, H.F)();
    return {
        nitroOrbsRewardsCard:
            ((t = (0, d.useMemo)(
                () =>
                    !x || null == p || null == p.reward_amount || p.reward_amount <= 0
                        ? null
                        : {
                              id: t4.NITRO_ORBS_REWARDS_CARD_ID,
                              title: eI.intl.string(sh.default.hx5AFp),
                              description: eI.intl.format(sh.default.wq3CF2, { orbsCount: p.reward_amount }),
                              primaryAsset: "/assets/8f530451dce1ccc0.svg",
                              primaryAssetClassName: m()(sj.lH, sj.yK),
                              footerContent: (0, o.jsx)(sN, {}),
                              ctaText: eI.intl.string(sh.default.BxjHiu),
                              onCtaClick: () => (0, P.pX)(eX.BVt.COLLECTIBLES_SHOP_WITH_TAB(e0.G2.ORBS)),
                          },
                [x, p],
            )),
            (i = (0, sc.A)({ location: "useNorbsNitroOrbsRewardsCard" })),
            (s = (0, g.bG)([D.default], () => D.default.getCurrentUser())),
            (n = s?.perks != null),
            (l = null != (a = s?.premiumType) ? String(a) : "none"),
            (r = null != t),
            (0, d.useEffect)(() => {
                r &&
                    null != e &&
                    sa.A.increment({
                        name: sn.K.NORBS_NITRO_ORBS_CARD_STATE,
                        tags: [`experience:${i}`, `surface:${e}`, `perks_loaded:${n}`, `premium_tier:${l}`],
                    });
            }, [r, e, i, n, l]),
            (0, d.useMemo)(() => {
                if (null == t) return null;
                switch (i) {
                    case sc.m.DEFAULT:
                        return t;
                    case sc.m.DEPRECATED_XBOX:
                    case sc.m.REMOVED:
                    case sc.m.REMOVED_XBOX:
                        return null;
                    case sc.m.DEPRECATED:
                        return {
                            ...t,
                            title: eI.intl.string(so.default.LG4Fft),
                            description: eI.intl.format(so.default["69NJ0X"], { date: sr.Ds }),
                            pillText: eI.intl.formatToPlainString(eI.t["7D8r4F"], {
                                expiryDate: sr.Ds.toLocaleDateString(eI.intl.currentLocale, {
                                    month: "short",
                                    day: "numeric",
                                }),
                            }),
                            footerContent: void 0,
                        };
                    default:
                        return (0, sl.xb)(i);
                }
            }, [t, i])),
        questOrbMultiplierCard: (0, d.useMemo)(
            () =>
                c
                    ? {
                          id: t4.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: eI.intl.string(eI.t.Csf5Ol),
                          description: eI.intl.format(eI.t.NpUfej, { bonusOrbMultiplier: u }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: eI.intl.string(eI.t.jVcuVY),
                          onCtaClick: () => (0, sx.mA)({ fromContent: su.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: sj.Nf,
                      }
                    : null,
            [c, u],
        ),
    };
}
var sE = i(975807),
    sT = i(95035),
    sI = i(728666),
    sC = i(88001),
    sR = i(107198),
    sv = i(817577);
function s_() {
    (0, sE.A)(sC.TE);
}
function sy(e) {
    let t = (0, sI.O9)(),
        s = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        n = s?.hasActiveTrial ?? !1,
        a = (0, d.useCallback)(() => {
            n
                ? (0, X.mM)(async () => {
                      let { default: e } = await i.e(499709).then(i.bind(i, 516044));
                      return (t) => (0, o.jsx)(e, { ...t });
                  })
                : (0, y.A)({
                      subscriptionTier: tf.pe.TIER_2,
                      initialPlanId: tf.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, d.useMemo)(
        () =>
            t
                ? {
                      id: t4.PREMIUM_GROUP_CARD_ID,
                      title: eI.intl.string(sR.default.YkvksF),
                      description: (0, o.jsxs)(o.Fragment, {
                          children: [
                              eI.intl.formatToPlainString(sR.default.JlyGQj, {
                                  totalSeats: 6,
                                  premiumGroupProductName: (0, sC.DP)(),
                              }),
                              (0, o.jsx)("div", {
                                  className: sj.LF,
                                  children: (0, o.jsx)(sT.A, {
                                      onClick: s_,
                                      children: eI.intl.string(sR.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: eI.intl.string(eI.t.oW0eUd),
                      primaryAsset: sv,
                      ctaIcon: J.NitroWheelIcon,
                      ctaIconPosition: "start",
                      ctaText: eI.intl.string(eI.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var sP = i(793943),
    sS = i(169099),
    sD = i(506988),
    sM = i(590202),
    sO = i(332560),
    sk = i(62234),
    sU = i(324061),
    sL = i(701256),
    sG = i(804564),
    sw = i(818349),
    sB = i(419490),
    sH = i(424739),
    sF = i(572164),
    sV = i(271597),
    sW = i(815460),
    sz = i(464132),
    sY = i(683825);
function sK() {
    "auto" === (0, sw.r)((0, sF.T)(), sB.Ay.getEnableAutoclipping())
        ? (0, sV.p)()
        : (0, sW.C)({ variant: "mode_picker", source: "nitro_home_perk_card" });
}
var sX = i(757036),
    sq = i(621488),
    sZ = i(70283),
    sJ = i(643056),
    sQ = i(470739),
    s$ = i(945810);
let s0 = (0, s$.mj)({
    name: "2026-10-nitro-home-badge-directory",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var s1 = i(655752),
    s2 = i(764231),
    s3 = i(627380),
    s6 = i(30084),
    s7 = i(814014),
    s8 = i(714206);
let s5 =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    s9 =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    s4 =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function ne() {
    let e,
        t,
        i,
        s,
        n,
        a,
        l,
        r,
        c,
        u,
        x,
        p,
        h,
        f,
        N,
        b,
        E,
        T,
        I,
        { shouldCountOrbsCardState: C = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { analyticsLocations: R } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        v = (0, se.A)({ analyticsLocations: R }),
        _ = (0, se.A)({ analyticsLocations: R, shouldOpenDisplayNameStyles: !0 }),
        y = (0, d.useCallback)(() => {
            (0, en.openUserSettings)(es.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        P =
            ((e = (0, g.bG)([D.default], () => D.default.getCurrentUser())),
            (t = e?.isFractionalPremiumWithNoStandardSub() ?? !1),
            (i = (function (e) {
                let { location: t } = e;
                return s0.useConfig({ location: t }).enabled;
            })({ location: "useTenureBadgePerkCard" })),
            (s = (0, sJ.d)({ location: "useTenureBadgePerkCard" })),
            (n = (0, si.$F)()),
            (a = (0, si.Xb)()),
            (l = n?.status === si.Wo.UPCOMING || t),
            (r = n?.status === si.Wo.WITHHELD),
            (c = l || r),
            (u = (0, ss.N)(n?.id)),
            (x = (function () {
                let e = (0, si.$F)(),
                    t = (0, s1.P)(),
                    i = (0, si.Xb)();
                if (null == e || null == t || null == i || e.status === si.Wo.WITHHELD) return null;
                let s = eE()(),
                    n = eE()(i),
                    a = t.tenureReqNumMonths,
                    l = n.clone(),
                    r = n.clone().add(a, "months").diff(l);
                return Math.max(0, Math.min(1, (s.diff(l) - 864e5) / r));
            })()),
            (p = (0, g.bG)([ee.Ay], () => ee.Ay.useReducedMotion) && !c),
            (h = (0, s3.t)()),
            (f = (0, s1.P)()),
            (0, d.useMemo)(() => {
                let e,
                    l = null != f ? eI.intl.string(f.nameUnformattedNitro) : void 0;
                null == n
                    ? t && (e = (0, s2.T)(tf.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (e =
                          n.status === si.Wo.UPCOMING
                              ? eI.intl.formatToPlainString(eI.t.a1eKDi, { days: h?.days ?? 0 })
                              : n.status === si.Wo.WITHHELD
                                ? ((0, s2.T)(n.id, n.tenureReqNumMonths) ?? void 0)
                                : ((function (e, t) {
                                      if (null != e && null != t) {
                                          if (e.days <= 30)
                                              return eI.intl.formatToPlainString(eI.t.NEXoaI, {
                                                  days: e.days,
                                                  nextBadgeName: t,
                                              });
                                          if (e.months <= 3)
                                              return eI.intl.formatToPlainString(eI.t.KDV8oD, {
                                                  months: e.months,
                                                  nextBadgeName: t,
                                              });
                                      }
                                  })(h, l) ??
                                  (0, s2.T)(n.id, n.tenureReqNumMonths) ??
                                  void 0));
                let r = null;
                return (
                    null != u ? (r = c || p ? u.standard : u.ambientLarge) : t && (r = s8),
                    {
                        id: t4.TENURE_BADGE_CARD_ID,
                        title:
                            null != n ? eI.intl.string(n.nameUnformattedNitro) : t ? eI.intl.string(eI.t.tx9Fvw) : "",
                        pillText: eI.intl.string(eI.t["jyYgZ+"]),
                        primaryAsset: r,
                        primaryAssetClassName: m()(s7.pq, { [s7.rX]: c, [s7.kE]: p }),
                        caption: null != a ? eI.intl.formatToPlainString(eI.t.Hu4jfi, { date: new Date(a) }) : void 0,
                        description: e,
                        subscriptionRequired: !0,
                        progress: x ?? void 0,
                        ctaText: eI.intl.string(eI.t.jVcuVY),
                        onCtaClick: () => {
                            i && s
                                ? (0, sQ.openBadgeDirectoryModal)({ initialBadgeId: sZ.$.PREMIUM_TENURE })
                                : (0, s6.D)({ analyticsLocations: R });
                        },
                    }
                );
            }, [n, u, c, p, a, x, t, h, f, R, i, s])),
        { nitroOrbsRewardsCard: S, questOrbMultiplierCard: M } = sb(C ? sd.WHATS_NEW : null),
        O =
            ((N = (0, sX.L)(tf.PremiumTypes.TIER_2)),
            (b = (0, st.rX)()),
            (0, d.useMemo)(
                () =>
                    N && b
                        ? {
                              id: t4.NITRO_FILE_UPLOAD_WHATS_NEW_CARD_ID,
                              title: eI.intl.string(sq.default["/cV3ka"]),
                              description: eI.intl.string(sq.default.H523FI),
                              primaryAsset: (0, o.jsx)(iQ.I, { alt: "", ariaHidden: !0 }),
                          }
                        : null,
                [N, b],
            )),
        k = sy(R),
        U =
            ((E = (0, sH.H)("autoclips_ea:nitro_home_tile")),
            (T = "auto" === (0, sz.U)().value),
            (0, d.useMemo)(
                () =>
                    E
                        ? {
                              id: t4.AUTOCLIPS_CARD_ID,
                              title: eI.intl.string(sY.default["5VA1HL"]),
                              description: eI.intl.string(sY.default.TvE3md),
                              primaryAsset: (0, o.jsx)(sG.f, { alt: "", ariaHidden: !0 }),
                              ctaText: eI.intl.string(T ? eI.t.RzWDqY : eI.t.uw9zI7),
                              ctaVariant: T ? "secondary" : void 0,
                              onCtaClick: sK,
                          }
                        : null,
                [E, T],
            )),
        L =
            ((I = (0, sU.A)("useHexagonCampaignWhatsNewPerkCard")),
            d.useMemo(
                () =>
                    I
                        ? {
                              id: t4.HEXAGON_CAMPAIGN_CARD_ID,
                              pillText: eI.intl.string(eI.t.y2b7CA),
                              title: eI.intl.string(sL.default["fShp/D"]),
                              description: eI.intl.string(sL.default.MDycja),
                              primaryAsset: (0, o.jsx)(sS.r, { alt: "", ariaHidden: !0, width: 256 }),
                              ctaText: eI.intl.string(eI.t.uw9zI7),
                              onCtaClick: () => {
                                  ((0, sO.iM)({
                                      content: sD.uF.NITRO_HOME_PERK_CARD,
                                      questContentCTA: sM.Cy.OPEN_AD_PERK_MODAL,
                                  }),
                                      (0, sk.v6)());
                              },
                          }
                        : null,
                [I],
            ));
    return (0, d.useMemo)(() => {
        let e = [
                S,
                M,
                k,
                {
                    id: t4.DISPLAY_NAME_STYLES_CARD_ID,
                    title: eI.intl.string(eI.t.OLtTrt),
                    description: eI.intl.string(eI.t["di/pXR"]),
                    onCtaClick: _,
                    ctaText: eI.intl.string(eI.t.jVcuVY),
                    primaryAsset: s5,
                },
                {
                    id: t4.CLIENT_THEMES_CARD_ID,
                    title: eI.intl.string(eI.t.acc6h6),
                    description: eI.intl.formatToPlainString(eI.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: s4,
                    ctaText: eI.intl.string(eI.t.jVcuVY),
                    onCtaClick: () => {
                        (0, sP.nf)(sP.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: t4.PERMADECOS_CARD_ID,
                    title: eI.intl.string(eI.t.L14NZN),
                    description: eI.intl.string(eI.t.eCZkAI),
                    primaryAsset: (0, o.jsx)(i5, { alt: "", ariaHidden: !0 }),
                    ctaText: eI.intl.string(eI.t.jVcuVY),
                    onCtaClick: v,
                },
                {
                    id: t4.CUSTOM_APP_ICONS_CARD_ID,
                    title: eI.intl.string(eI.t["GU+wqh"]),
                    description: eI.intl.string(eI.t["1uPk1Z"]),
                    primaryAsset: s9,
                    ctaText: eI.intl.string(eI.t.y9TxXV),
                    onCtaClick: y,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            i = t ? 5 : 6;
        return (
            e.splice(+!!t, 0, P),
            null != O && e.splice(2, 0, O),
            null != U && e.splice(2, 0, U),
            null != L && e.splice(Math.min(2, e.length), 0, L),
            e.length > i && e.splice(i, e.length - i),
            e
        );
    }, [P, S, M, O, U, k, L, y, v, _]);
}
let nt = "/assets/1eb1b74667b4c0f0.svg",
    ni = "/assets/983b60e4fcaf973b.svg";
var ns =
    (((r = {}).BEST_OF_NITRO = "bestof"),
    (r.APPEARANCE_STYLE = "appearance"),
    (r.UPGRADES = "upgrades"),
    (r.VIP_EXTRAS = "vip"),
    r);
let nn = [
    { id: "bestof", label: () => eI.intl.string(eI.t.q1u7nQ) },
    { id: "appearance", label: () => eI.intl.string(eI.t.CUnZkZ) },
    { id: "upgrades", label: () => eI.intl.string(eI.t.KC5q8v) },
    { id: "vip", label: () => eI.intl.string(eI.t.DjEAcv) },
];
var na = i(18290);
function nl(e) {
    return e.id;
}
function nr(e) {
    let { glowingPerkId: t = null } = e,
        i = (function () {
            let e = (0, i4.DP)(),
                t = (0, si.Lh)(),
                i = (0, ss.N)(t)?.standard ?? null,
                { analyticsLocations: s } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
                n = (0, d.useCallback)(() => {
                    (0, en.openUserSettings)(es.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: s });
                }, [s]),
                a = (0, d.useCallback)(() => {
                    (0, en.openUserSettings)(es.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: s });
                }, [s]),
                l = (0, d.useCallback)(() => {
                    (0, en.openUserSettings)(es.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: s });
                }, [s]),
                r = (0, d.useCallback)(() => {
                    (0, P.pX)(eX.BVt.COLLECTIBLES_SHOP);
                }, []),
                c = (0, d.useCallback)(() => {
                    (0, en.openUserSettings)(es.X.SOUNDBOARD_CATEGORY, { analyticsLocations: s });
                }, [s]),
                u = (0, se.A)({ analyticsLocations: s }),
                m = (0, se.A)({ analyticsLocations: s, shouldOpenDisplayNameStyles: !0 }),
                x = ne({ shouldCountOrbsCardState: !1 }),
                g = (0, d.useMemo)(() => x.map((e) => e?.id), [x]),
                { nitroOrbsRewardsCard: p, questOrbMultiplierCard: h } = sb(sd.FAVORITES),
                f = sy(s),
                N = (0, d.useMemo)(
                    () => [
                        {
                            id: t4.SERVER_BOOSTS_CARD_ID,
                            title: eI.intl.formatToPlainString(eI.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: eI.intl.formatToPlainString(eI.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: eI.intl.string(eI.t.jVcuVY),
                            onCtaClick: a,
                            primaryAsset: (0, o.jsx)(iz, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != f ? { ...f, categories: ["bestof"] } : null,
                        {
                            id: t4.PROFILES_CARD_ID,
                            title: eI.intl.string(eI.t.xDRab3),
                            description: eI.intl.string(eI.t.yn6fWA),
                            ctaText: eI.intl.string(eI.t.jVcuVY),
                            onCtaClick: u,
                            primaryAsset: (0, o.jsx)(iK, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: t4.HD_VIDEO_CARD_ID,
                            title: eI.intl.string(eI.t["/mQ5gg"]),
                            description: eI.intl.string(eI.t["7WwAXh"]),
                            primaryAsset: (0, o.jsx)(iq, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: t4.CLIENT_THEMES_CARD_ID,
                            title: eI.intl.string(eI.t.acc6h6),
                            description: eI.intl.formatToPlainString(eI.t.WQazjs, { themeCount: 20 }),
                            ctaText: eI.intl.string(eI.t.jVcuVY),
                            onCtaClick: n,
                            primaryAsset: s4,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: t4.MORE_EMOJIS_CARD_ID,
                            title: eI.intl.string(eI.t.D8vIDT),
                            description: eI.intl.string(eI.t.DRMecB),
                            primaryAsset: (0, o.jsx)(iJ, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: t4.LARGE_UPLOADS_CARD_ID,
                            title: eI.intl.string(eI.t.nL1WZV),
                            description: (0, st.M6)({
                                legacyCopy: eI.intl.formatToPlainString(eI.t.k8LC1w, { maxSizeMb: 500 }),
                                rolloutCopy: eI.intl.formatToPlainString(eI.t.teOTfv, {
                                    maxFileSize: (0, er.EJ)(tf.PremiumTypes.TIER_2, { useSpace: !1 }),
                                }),
                            }),
                            primaryAsset: (0, o.jsx)(iQ.I, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: t4.CUSTOM_APP_ICONS_CARD_ID,
                            title: eI.intl.string(eI.t["GU+wqh"]),
                            description: eI.intl.string(eI.t["1uPk1Z"]),
                            ctaText: eI.intl.string(eI.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: s9,
                            categories: ["appearance"],
                        },
                        {
                            id: t4.ENTRANCE_SOUNDS_CARD_ID,
                            title: eI.intl.string(eI.t.WJfCPi),
                            description: eI.intl.string(eI.t.liQKJR),
                            ctaText: eI.intl.string(eI.t.jVcuVY),
                            onCtaClick: c,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: t4.DISPLAY_NAME_STYLES_CARD_ID,
                            title: eI.intl.string(eI.t.OLtTrt),
                            description: eI.intl.string(eI.t["di/pXR"]),
                            onCtaClick: m,
                            ctaText: eI.intl.string(eI.t.jVcuVY),
                            primaryAsset: s5,
                            categories: ["appearance"],
                        },
                        {
                            id: t4.CUSTOM_SOUNDS_CARD_ID,
                            title: eI.intl.string(eI.t["Cu/oFd"]),
                            description: eI.intl.string(eI.t.czj2aa),
                            primaryAsset: (0, o.jsx)(i$, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: t4.SPECIAL_STICKERS_CARD_ID,
                            title: eI.intl.string(eI.t.MQoVeb),
                            description: eI.intl.string(eI.t.HGCLZX),
                            primaryAsset: (0, o.jsx)("div", {
                                className: sj.Uc,
                                children: (0, o.jsx)(i0.n, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: t4.SUPER_REACTIONS_CARD_ID,
                            title: eI.intl.string(eI.t.qERvAA),
                            description: eI.intl.string(eI.t.WkUWzx),
                            primaryAsset: (0, o.jsx)(i1, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: t4.VIDEO_BACKGROUNDS_CARD_ID,
                            title: eI.intl.string(eI.t.ssVDYQ),
                            description: eI.intl.string(eI.t.aUSRMa),
                            primaryAsset: (0, i9.M)(e) ? nt : ni,
                            categories: ["upgrades"],
                        },
                        {
                            id: t4.EARLY_ACCESS_CARD_ID,
                            title: eI.intl.string(eI.t["g/KRY6"]),
                            description: eI.intl.string(eI.t.JzAmJc),
                            primaryAsset: (0, o.jsx)(i2, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: t4.BADGE_CARD_ID,
                            title: eI.intl.string(eI.t.Bn3CtB),
                            description: eI.intl.string(eI.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, o.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, o.jsx)(i6, { color: ez.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: t4.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: eI.intl.string(eI.t["MTD+7w"]),
                            description: eI.intl.string(eI.t.Bhs0s6),
                            ctaText: eI.intl.string(eI.t.dBJVnZ),
                            onCtaClick: r,
                            primaryAsset: (0, o.jsx)(i7, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != p ? { ...p, categories: ["vip"] } : null,
                        null != h ? { ...h, categories: ["vip"] } : null,
                        {
                            id: t4.PERMADECOS_CARD_ID,
                            title: eI.intl.string(eI.t.L14NZN),
                            description: eI.intl.string(eI.t.eCZkAI),
                            primaryAsset: (0, o.jsx)(i5, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, p, h, f, n, a, l, r, c, u, m],
                );
            return (0, d.useMemo)(() => N.filter((e) => null != e && !g.includes(e.id)), [N, g]);
        })(),
        s = null != t ? i.find((e) => e?.id === t) : null,
        [n, a] = (0, d.useState)(s?.categories[0] ?? ns.BEST_OF_NITRO),
        l = nn.find((e) => e.id === n)?.label(),
        r = i.filter((e) => null != e && e.categories.includes(n));
    return (0, o.jsxs)("div", {
        className: na.uW,
        children: [
            (0, o.jsx)(eL.D, { variant: "nitro-sm", children: eI.intl.string(eI.t["Uh3+CA"]) }),
            (0, o.jsx)(iH.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: na.Lq,
                "aria-label": eI.intl.string(eI.t["Uh3+CA"]),
                children: nn.map((e) =>
                    (0, o.jsx)(iH.V.Item, { id: e.id, className: na.IC, children: e.label() }, e.id),
                ),
            }),
            (0, o.jsx)(
                iF.A,
                {
                    "aria-label": eI.intl.formatToPlainString(eI.t.akg5nT, { filterName: l }),
                    gap: 20,
                    className: na.jG,
                    items: r,
                    getItemKey: nl,
                    renderItem: (e, i) =>
                        (0, o.jsx)(tk.S, { ...e, glowing: t === e.id, containerClassName: na.Ui, listItemProps: i }),
                },
                n,
            ),
        ],
    });
}
var nc = i(72979);
let no = function (e) {
    let { className: t } = e,
        i = (0, i4.DP)();
    return (0, o.jsx)("img", {
        className: m()(nc.D, t),
        src: (0, i9.M)(i) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var nd = i(684251);
let nu = function (e) {
    let { children: t } = e;
    return (0, o.jsxs)("div", {
        className: m()(nd.kL, nd.Gd, nd.Eg),
        children: [(0, o.jsx)(no, {}), (0, o.jsx)(t1, {}), t],
    });
};
function nm(e) {
    let { glowingPerkId: t = null } = e,
        i = ne();
    return (0, o.jsx)(tV, {
        sectionClassName: tF.uW,
        heading: (0, o.jsx)(eL.D, { variant: "nitro-sm", className: tF.R_, children: eI.intl.string(eI.t.Aw5DRm) }),
        grid: (0, o.jsx)(o.Fragment, {
            children: i.map((e, i) => {
                if (null == e) return;
                let s = 0 === i && !0 === e.featured,
                    n = t === e.id;
                return (0, o.jsx)(
                    tk.S,
                    {
                        ...e,
                        glowing: n,
                        autoClickCta: n && e.id === t4.YOUTUBE_3PP_CARD_ID,
                        featured: s,
                        containerClassName: m()(tF.Nr, { [tF.Nq]: s }),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function nx(e, t, i, s) {
    !(function (e, t, i) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            n = arguments.length > 4 ? arguments[4] : void 0,
            a = (0, g.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
            l = d.useRef(!1);
        (d.useEffect(() => {
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
            d.useEffect(() => {
                t || (l.current = !1);
            }, [t]));
    })(() => document.getElementById(e), t, [e], i, s);
}
var ng = i(92737);
let np = "/assets/cd2be35d285d4675.svg",
    nh = (e) => {
        let { userId: t } = e,
            i = (0, x.zy)();
        (d.useEffect(() => {
            ((0, B.Ay)(), null != t && (0, V.A)(t));
        }, [t]),
            d.useEffect(() => {
                E(!0);
            }, []),
            (0, _.P)(v));
        let s = d.useRef(null),
            n = d.useRef(null),
            a = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            { isReady: l, programReward: r } = (0, H.F)(),
            {
                scrollTargetId: c,
                glowingSectionId: u,
                glowingPerkId: h,
                scrollBlock: f,
                scrollInline: N,
            } = d.useMemo(() => {
                let e = new URLSearchParams(i.search),
                    t = e.get("perk"),
                    s = e.get(ng.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != s
                      ? { scrollTargetId: s, glowingSectionId: s, scrollBlock: "start" }
                      : {};
            }, [i.search]);
        nx(c ?? "", null != c, f, N);
        let [b, E] = d.useState(!1),
            T = (0, W.p)(),
            I = d.useRef(null),
            [C, R] = d.useState(!1),
            y = null != T && null != a && a.status === eX.Dmq.CANCELED,
            P = (0, z.iU)(tf.gD.PREMIUM_MONTH_TIER_2, T, a),
            S = !C && y,
            D = (0, g.bG)([F.A], () => (null != t ? F.A.getUserProfile(t) : null)),
            { analyticsLocations: M } = (0, j.Ay)(A.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [U, L] = d.useState(!1);
        return null != D && (l || null != r)
            ? (0, o.jsxs)(w.Gt, {
                  className: m()(nd.xW, nd.Gd),
                  ref: s,
                  children: [
                      (0, o.jsx)(nu, {
                          children: (0, o.jsxs)(j.f5, {
                              value: M,
                              children: [
                                  (0, o.jsx)(G.L, {
                                      innerRef: I,
                                      onChange: (e) => R(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, o.jsx)(tT, {
                                          buttonVisibilityRef: I,
                                          className: nd.v1,
                                          userDiscountOffer: T,
                                          discountedPrice: P,
                                      }),
                                  }),
                                  (0, o.jsx)(tX, {}),
                                  (0, o.jsx)(nm, { glowingPerkId: h }),
                                  (0, o.jsx)(iL, { glowingPerkId: h, glowingSectionId: u }),
                                  (0, o.jsx)(nr, { glowingPerkId: h }),
                                  (0, o.jsx)(Y.A, {
                                      className: nd.Zy,
                                      location: A.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: eX.liQ.NITRO_HOME, section: eX.JJy.GIFT_BANNER },
                                  }),
                                  (0, o.jsx)("div", { className: nd.hz }),
                                  (0, o.jsx)(G.L, {
                                      innerRef: n,
                                      onChange: (e) => {
                                          e &&
                                              !U &&
                                              (k.default.track(eX.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: M,
                                              }),
                                              L(!0));
                                      },
                                      children: (0, o.jsx)("div", { ref: n, className: nd._Z }),
                                  }),
                                  (0, o.jsx)("img", {
                                      src: np,
                                      className: nd.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: eI.intl.string(eI.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      y &&
                          null != P &&
                          (0, o.jsx)(iB, {
                              isVisible: S && b,
                              premiumSubscription: a,
                              churnDiscountOffer: T,
                              discountedPrice: P,
                          }),
                  ],
              })
            : (0, o.jsxs)("div", {
                  className: m()(nd.kL, nd.Lq, nd.TN, nd.Eg),
                  children: [(0, o.jsx)(t1, {}), (0, o.jsx)("div", { className: nd.S, children: (0, o.jsx)(p.y, {}) })],
              });
    };
var nf = i(589152),
    nN = i(851746),
    nA = i(727949),
    nj = i(926239);
let nb =
    "https://cdn.discordapp.com/assets/content/3aa94cb4beecb43100d482e94a5a707f188e2e2315d9b15865689b51409c4d56.png";
var nE = i(185062);
let nT = `${nb} 1x, https://cdn.discordapp.com/assets/content/e33cdb99c455ad732bab8cc40ca15b8bf926a7e9e078cd8834edfd15e4010217.png 2x, ${nE.A} 3x`;
function nI(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: c } = e,
        u = d.useMemo(
            () => (0, iV.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: c }),
            [a, l, c],
        );
    return (0, o.jsx)("img", {
        style: u,
        src: nb,
        srcSet: nT,
        className: (0, iV.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var nC = i(315629),
    nR = i(783420),
    nv = i(204413),
    n_ = i(572079),
    ny = i(824069),
    nP = i(785007),
    nS = i(947910);
function nD(e) {
    let { value: t, planRadioOptions: i, className: s, ...n } = e,
        a = i.map((e) => {
            let i = e.value === t;
            return {
                name: (0, o.jsxs)("div", {
                    className: nS.VH,
                    children: [
                        i &&
                            null != e.badgeText &&
                            (0, o.jsx)("div", {
                                className: nS.fQ,
                                children: (0, o.jsx)(ew.E, { type: { text: e.badgeText }, variant: "primary" }),
                            }),
                        (0, o.jsxs)(q.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: nS.qU,
                            children: [
                                (0, o.jsxs)(q.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nS.NI,
                                    children: [
                                        (0, o.jsx)(Z.E, {
                                            variant: "body-md/semibold",
                                            color: "text-strong",
                                            children: e.primaryText,
                                        }),
                                        null != e.primarySubText &&
                                            (0, o.jsx)(Z.E, {
                                                variant: "body-sm/medium",
                                                color: "text-subtle",
                                                children: e.primarySubText,
                                            }),
                                    ],
                                }),
                                (0, o.jsxs)(q.B, {
                                    direction: "vertical",
                                    align: "end",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nS.br,
                                    children: [
                                        null != e.secondaryText &&
                                            (0, o.jsx)(Z.E, {
                                                tag: "span",
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                children: e.secondaryText,
                                            }),
                                        null != e.secondarySubText &&
                                            (0, o.jsx)(Z.E, {
                                                tag: "span",
                                                variant: "body-sm/medium",
                                                color: "text-subtle",
                                                className: nS.yD,
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
                radioBarClassName: m()(nS.tG, { [nS.uA]: i, [nS.hy]: i && e.useGradientSelectedBorder }),
            };
        });
    return (0, o.jsx)(nP.$d, {
        ...n,
        options: a,
        value: t,
        size: nP.r9.NOT_SET,
        className: m()(nS.ul, s),
        withTransparentBackground: !0,
    });
}
var nM = i(118751),
    nO = i(773669),
    nk = i(97352),
    nU = i(526292),
    nL = i(387278),
    nG = i(369827),
    nw = i(803496);
function nB(e) {
    let t = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        i = (0, nG.L)(),
        s = t?.paymentSourceId ?? i,
        { priceOptions: n } = (0, nw.A)({
            activeSubscription: t,
            skuIDs: [(0, er.mH)(e)],
            paymentSourceId: s,
            isGift: !1,
        });
    return n;
}
function nH(e, t, i, s, n) {
    return t && i?.includes(e) === !0 && null != s && null != n && s !== n;
}
function nF(e) {
    let { expectedUsageInterval: t, usageInterval: i, discountDuration: s, regularPrice: n, discountedPrice: a } = e;
    return i !== t || null == n || null == a
        ? null
        : t === tf.Ff.YEAR
          ? eI.intl.format(eI.t.G88D2T, { discountedPrice: a, numYears: s, regularPrice: n })
          : eI.intl.format(eI.t["x+qUAi"], { discountedPrice: a, numMonths: s, regularPrice: n });
}
var nV = i(614488);
function nW(e) {
    let { skuId: t, selectedPlanId: i, subscribeButtonProps: s } = e,
        n = null == i || !0 === s.disabled,
        a = null == i ? "secondary" : s.variant;
    return (0, o.jsx)(nR.A, {
        subscriptionTier: t,
        initialPlanId: i,
        shouldDisallowPlanSelection: !0,
        children: (e) => {
            let { onClick: t } = e;
            return (0, o.jsx)(Q.$, {
                size: "md",
                fullWidth: !0,
                icon: J.NitroWheelIcon,
                text: s.text,
                variant: a,
                disabled: n,
                onClick: t,
            });
        },
    });
}
function nz(e) {
    let { skuId: t, className: i, variant: s = "default" } = e,
        n = t === tf.pe.TIER_2,
        a = "settings" === s,
        l = (0, i9.q)((0, i4.Ay)()),
        r = (0, eu.V)(),
        c = r?.subscriptionTrial,
        u = c?.skuId === t,
        x = n && u && null != c,
        {
            planRadioOptions: p,
            selectedPlanId: h,
            setSelectedPlanId: f,
            shouldSuppressDiscountCta: N,
        } = (function (e) {
            let { skuId: t } = e,
                [i, s] = d.useState(null),
                n = tf.En[t],
                a = tf.zE[t],
                l = t === tf.pe.TIER_2,
                r = nB(t),
                c = (0, eu.V)(),
                o = c?.subscriptionTrial?.skuId === t,
                { subscribedSkuId: u, isMonthlyPlanDisabled: m } = (0, g.cf)(
                    [O.A],
                    () => {
                        let e = O.A.getPremiumTypeSubscription();
                        return {
                            subscribedSkuId: (0, er.aZ)(e),
                            isMonthlyPlanDisabled:
                                n === tf.gD.PREMIUM_MONTH_TIER_2 &&
                                null != e &&
                                [tf.gD.PREMIUM_YEAR_TIER_0, tf.gD.PREMIUM_YEAR_TIER_1].includes(e.planId),
                        };
                    },
                    [n],
                ),
                x = u === t,
                p = (0, ed.O)(),
                h = (0, nU.k5)(),
                f = (0, g.bG)([nO.default], () => nO.default.locale),
                N = (0, z.U9)(p, t),
                A = (0, z.N1)(n),
                j = (0, z.N1)(a),
                [b, E] = (0, g.yK)([nk.A], () => [nk.A.get(n), nk.A.get(a)], [n, a]),
                T = null != b ? (0, er.sS)(b, r) : null,
                I = null != E ? (0, er.sS)(E, r) : null,
                C =
                    N && p?.discount.amount != null && !h
                        ? eI.intl.formatToPlainString(eI.t.IAybsG, {
                              discount: (0, nM.l9)(f, Number(p.discount.amount) / 100),
                          })
                        : null,
                R = p?.discount?.planIds,
                v = nH(a, N, R, j, I),
                _ = nH(n, N, R, A, T),
                y = p?.discount.userUsageLimitInterval,
                P = p?.discount.userUsageLimit ?? 1,
                S = !l || v || _ || null == E ? null : (0, nL.Cj)(E, !1, r),
                D = !_ || m,
                M = (function (e) {
                    let { skuId: t, monthlyHasDiscount: i, isMonthlyPlanDisabled: s } = e;
                    return t !== tf.pe.TIER_2 ? null : i && !s ? tf.En[t] : tf.zE[t];
                })({ skuId: t, monthlyHasDiscount: _, isMonthlyPlanDisabled: m }),
                k = null == i || (i === n && m) ? M : i,
                U = [
                    {
                        value: a,
                        primaryText: eI.intl.string(eI.t["/Q4HRN"]),
                        primarySubText:
                            (v
                                ? nF({
                                      expectedUsageInterval: tf.Ff.YEAR,
                                      usageInterval: y,
                                      discountDuration: P,
                                      regularPrice: I,
                                      discountedPrice: j,
                                  })
                                : null) ?? S,
                        secondaryText: v ? j : I,
                        secondarySubText: v ? I : null,
                        badgeText: v ? C : null,
                        useGradientSelectedBorder: l && (o || v || D),
                        isDisabled: x,
                    },
                    {
                        value: n,
                        primaryText: eI.intl.string(eI.t.DKzs96),
                        primarySubText: _
                            ? nF({
                                  expectedUsageInterval: tf.Ff.MONTH,
                                  usageInterval: y,
                                  discountDuration: P,
                                  regularPrice: T,
                                  discountedPrice: A,
                              })
                            : null,
                        secondaryText: _ ? A : T,
                        secondarySubText: _ ? T : null,
                        badgeText: _ ? C : null,
                        useGradientSelectedBorder: l && (o || _),
                        isDisabled: x || m,
                    },
                ],
                L = k === a ? v : k === n && _;
            return { planRadioOptions: U, selectedPlanId: k, setSelectedPlanId: s, shouldSuppressDiscountCta: N && !L };
        })({ skuId: t }),
        A = n ? "expressive" : "secondary",
        { buttonText: j } = (0, n_.A)({ subscriptionTier: t }),
        { subscribeButtonProps: b } = (0, nv.$)({
            subscriptionTier: t,
            variantOverride: A,
            buttonTextOverride: N ? j : void 0,
        }),
        E = (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(q.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nV.MY,
                    children: (0, o.jsx)(eL.D, {
                        variant: "nitro-md",
                        color: l ? "text-strong" : "text-overlay-light",
                        className: nV.ck,
                        children: n ? eI.intl.string(eI.t.lG6a5x) : eI.intl.string(eI.t["t9uG/o"]),
                    }),
                }),
                (0, o.jsx)(q.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nV.qT,
                    children: n
                        ? (0, o.jsx)(nj.ZP, {
                              featureSet: nj.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: a ? "body-sm/medium" : "body-md/medium",
                          })
                        : (0, o.jsx)(nj.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: a ? "body-sm/medium" : "body-md/medium",
                          }),
                }),
                n && (0, o.jsx)(ny.K, {}),
            ],
        }),
        T = (0, o.jsxs)(q.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nV.Ux,
            children: [
                a ? (0, o.jsx)("div", { className: nV.zI, children: E }) : E,
                x
                    ? (0, o.jsx)("div", {
                          className: nV.qS,
                          role: "separator",
                          children: (0, o.jsx)(Z.E, {
                              variant: "body-md/semibold",
                              color: "text-strong",
                              className: nV.ZV,
                              children: (function (e, t) {
                                  if (null == e || null == t) return null;
                                  switch (e) {
                                      case tf.WT.DAY:
                                          if (t % 7 == 0) return eI.intl.format(eI.t["1MYPH0"], { weeks: t / 7 });
                                          return eI.intl.format(eI.t.pYfIoO, { days: t });
                                      case tf.WT.MONTH:
                                          return eI.intl.format(eI.t["96hTLe"], { months: t });
                                      case tf.WT.YEAR:
                                          return eI.intl.format(eI.t.B0ZmdG, { years: t });
                                      default:
                                          return null;
                                  }
                              })(c.interval, c.intervalCount),
                          }),
                      })
                    : (0, o.jsx)("hr", { className: nV.yF }),
                (0, o.jsxs)("div", {
                    className: nV.qr,
                    children: [
                        (0, o.jsx)(nD, {
                            className: a ? nV.US : void 0,
                            planRadioOptions: p,
                            value: h ?? "",
                            onChange: (e) => f(e.value),
                        }),
                        (0, o.jsx)(nW, { skuId: t, selectedPlanId: h, subscribeButtonProps: b }),
                    ],
                }),
            ],
        }),
        I = m()(nV.Nr, i, { [nV.Fw]: n });
    return n
        ? (0, o.jsxs)(nC.h, {
              color: "nitro-pink",
              className: I,
              children: [
                  !a &&
                      (0, o.jsx)("div", {
                          className: nV.kX,
                          "aria-hidden": !0,
                          children: (0, o.jsx)(nI, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                      }),
                  T,
              ],
          })
        : (0, o.jsx)("div", { className: I, children: T });
}
function nY(e) {
    let { className: t } = e,
        i = (0, i9.q)((0, i4.Ay)()),
        s = nB(tf.pe.TIER_2),
        n = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        { avatarSrc: a, eventHandlers: l } = (0, eD.A)({ userId: n?.id, size: e_._3.SIZE_32, animateOnHover: !0 }),
        r = (0, g.bG)([nk.A], () => nk.A.get(tf.gD.PREMIUM_GROUP_MONTH)),
        c = eI.intl.string(eI.t["2pG5Ga"]),
        d = (0, o.jsx)(nR.A, {
            subscriptionTier: tf.pe.TIER_2,
            initialPlanId: tf.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, o.jsx)(Q.$, {
                    size: "md",
                    fullWidth: !0,
                    icon: J.NitroWheelIcon,
                    text: c,
                    variant: "secondary",
                    onClick: t,
                });
            },
        }),
        u = null;
    if (null != r)
        try {
            u = (0, er.sS)(r, s, !1, !1, !1);
        } catch {
            u = null;
        }
    return (0, o.jsx)("div", {
        className: m()(nV.Nr, t),
        children: (0, o.jsxs)(q.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nV.Ux,
            children: [
                (0, o.jsxs)(q.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nV.MY,
                    children: [
                        (0, o.jsx)(eL.D, {
                            variant: "nitro-md",
                            color: i ? "text-strong" : "text-overlay-light",
                            className: nV.ck,
                            children: eI.intl.string(sR.default.eSKiXk),
                        }),
                        null != n &&
                            (0, o.jsxs)(q.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: nV.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, o.jsx)("div", {
                                        className: nV.uA,
                                        children: (0, o.jsx)(ey.eu, {
                                            src: a,
                                            size: e_._3.SIZE_32,
                                            "aria-hidden": !0,
                                            ...l,
                                        }),
                                    }),
                                    (0, o.jsx)(q.B, {
                                        direction: "horizontal",
                                        align: "center",
                                        justify: "center",
                                        gap: 0,
                                        fullWidth: !1,
                                        className: nV.VL,
                                        children: (0, o.jsxs)(Z.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-default",
                                            children: ["+", 5],
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
                (0, o.jsx)(q.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nV.qT,
                    children: (0, o.jsx)(nj.Lg, { isApplicationHome: !0, textVariant: "body-md/medium" }),
                }),
                (0, o.jsx)("hr", { className: nV.yF }),
                (0, o.jsxs)("div", {
                    className: nV.qr,
                    children: [
                        (0, o.jsxs)("div", {
                            className: nV.ec,
                            children: [
                                (0, o.jsx)(Z.E, {
                                    variant: "body-md/semibold",
                                    color: "text-strong",
                                    children: eI.intl.string(sR.default.SvSwga),
                                }),
                                null == u
                                    ? (0, o.jsx)(p.y, { type: p.y.Type.PULSING_ELLIPSIS })
                                    : (0, o.jsx)(Z.E, {
                                          tag: "span",
                                          variant: "heading-lg/semibold",
                                          color: i ? "text-strong" : "text-overlay-light",
                                          children: u,
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
function nK(e) {
    let { innerRef: t, className: i, variant: s = "default" } = e,
        n = "settings" === s,
        { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, nj.pw)(t),
        r = (0, sI.PA)(),
        c = !n && r,
        d = (0, g.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        u = { [nV.iR]: !d && !n };
    return (0, o.jsx)(j.f5, {
        value: a,
        children: (0, o.jsxs)(q.B, {
            direction: "vertical",
            align: n ? "stretch" : "center",
            gap: 32,
            fullWidth: !0,
            className: m()(nV.oB, i, { [nV.W0]: n }),
            children: [
                (0, o.jsx)(eL.D, {
                    variant: n ? "heading-xl/semibold" : "nitro-md",
                    color: "text-strong",
                    className: nV.op,
                    children: eI.intl.string(eI.t.vLz3Zs),
                }),
                (0, o.jsxs)("div", {
                    ref: l,
                    className: m()(nV.kR, { [nV.BQ]: c }),
                    children: [
                        (0, o.jsx)(nz, { skuId: tf.pe.TIER_0, className: m()(nV.rz, u), variant: s }),
                        (0, o.jsx)(nz, { skuId: tf.pe.TIER_2, className: m()(nV.Rv, u), variant: s }),
                        c && (0, o.jsx)(nY, { className: m()(nV.zz, u) }),
                    ],
                }),
            ],
        }),
    });
}
var nX = i(366010),
    nq = i(303136);
let nZ = function (e) {
    let t,
        { className: i } = e,
        s = (0, e6.TM)(),
        n = (0, nX.q)((0, i4.Ay)());
    return (
        (t = s
            ? n
                ? "https://cdn.discordapp.com/assets/content/06ad5b3e9274c7e75f135129da3141ef42681698d3c0cf79b8c83e8526c2064f.mov"
                : "https://cdn.discordapp.com/assets/content/e306e75bdcd95e261e8d501c2cc6674bf183ff83e53b8dcae4e7bfa98d15c273.mov"
            : n
              ? "https://cdn.discordapp.com/assets/content/2b403885861e2c1a8268fbdb8ba90a93b72fab9937dd1cdad47e68f814969dac.webm"
              : "https://cdn.discordapp.com/assets/content/5412744d944cb3bf22279ee7741dbdca87bd644fa128adcfd2d50ae56543d7c9.webm"),
        (0, o.jsx)("div", {
            className: i,
            children: (0, o.jsx)(
                nq.A,
                {
                    fallbackImage: n
                        ? "https://cdn.discordapp.com/assets/content/6ddb7f92b6f26f24c70cc7bf84e11bb423378d47cd111866af3980b332bad336.png"
                        : "https://cdn.discordapp.com/assets/content/acbc696c59f02098ff0014edaf0ded799884a3fefed7f20bcdb6cf038bba0542.png",
                    children: (0, o.jsx)("source", { src: t }),
                },
                t,
            ),
        })
    );
};
var nJ =
        (((c = {}).HOME = "home"),
        (c.WHATS_NEW = "whatsNew"),
        (c.BEST_OF_NITRO = "bestOfNitro"),
        (c.PLANS = "plans"),
        (c.COMPARE = "compare"),
        c),
    nQ = i(352756);
let n$ = function (e) {
    let { isVisible: t, subscriptionTier: i, isEligibleForBogoPromotion: s, variant: n = "default" } = e,
        a = "settings" === n,
        l = (0, e8.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        r = { section: eX.JJy.MARKETING_FLOATING_CTA };
    return (0, o.jsx)(e7.animated.div, {
        className: m()(nQ.iE, { [nQ.W0]: a }),
        "aria-hidden": a ? !t : void 0,
        inert: a ? !t : void 0,
        style: l,
        "data-mtctest-ignore": "true",
        children: (0, o.jsxs)("div", {
            className: nQ.UD,
            children: [
                (0, o.jsx)(ej.A, {
                    enableMarketingSubscribeCopyTest: !a,
                    size: "md",
                    subscriptionTier: i,
                    hasActivePromotion: !!s,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: r,
                }),
                (0, o.jsx)(eA.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var n0 = i(573710);
let n1 = function () {
    let e = (0, e3.bG)([ee.Ay], () => ee.Ay.useReducedMotion);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)("div", {
                className: n0.BI,
                children: (0, o.jsx)(te, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: e9.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, o.jsx)("img", {
                        src: "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
                        alt: "",
                        className: n0.Q,
                    }),
                }),
            }),
            (0, o.jsx)(ti, {
                isMotionReduced: e,
                boltContainerClassName: n0.nJ,
                carContainerClassName: n0.IN,
                hammerContainerClassName: n0.Gj,
                keyContainerClassName: n0.FV,
                starContainerClassName: n0.E1,
                boltAssetClassName: n0.j7,
                carAssetClassName: n0.or,
                hammerAssetClassName: n0.Wv,
                keyAssetClassName: n0.rs,
                starAssetClassName: n0.OY,
            }),
        ],
    });
};
var n2 = i(989756);
function n3(e) {
    let { ref: t, ...i } = e,
        { analyticsLocations: s } = (0, j.Ay)(A.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, o.jsx)(j.f5, {
        value: s,
        children: (0, o.jsx)("div", {
            ref: t,
            className: n2.kL,
            children: (0, o.jsxs)("div", {
                className: n2.hQ,
                children: [
                    (0, o.jsx)(n1, {}),
                    (0, o.jsx)(eL.D, {
                        variant: "nitro-md",
                        color: "text-strong",
                        className: n2.RH,
                        children: eI.intl.string(eI.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
}
n3.displayName = "PremiumMarketingFooter";
var n6 = i(939249);
let n7 = function (e) {
    let { navBarSections: t, activeSectionId: i } = e,
        s = {
            [nJ.HOME]: eI.intl.string(eI.t.uGRXjS),
            [nJ.WHATS_NEW]: eI.intl.string(eI.t["mfcR/v"]),
            [nJ.BEST_OF_NITRO]: eI.intl.string(eI.t.xQKkE8),
            [nJ.PLANS]: eI.intl.string(eI.t.wyNMnm),
            [nJ.COMPARE]: eI.intl.string(eI.t.pwD7If),
        },
        n = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        a = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, o.jsx)(tZ.A, {
        className: t$.TQ,
        transparent: !0,
        children: (0, o.jsxs)("div", {
            className: t$.Wc,
            children: [
                (0, o.jsxs)("div", {
                    className: t$.wG,
                    children: [
                        (0, o.jsx)(J.NitroWheelIcon, { className: t$.nE, colorClass: t$.oG }),
                        (0, o.jsx)("div", {
                            className: t$.zc,
                            role: "tablist",
                            "aria-label": eI.intl.string(eI.t.O9MiXY),
                            children: a.map((e) => {
                                let t = i === e.id,
                                    n = s[e.id];
                                return (0, o.jsxs)(
                                    n6.D,
                                    {
                                        role: "tab",
                                        "aria-selected": t,
                                        className: t$.S0,
                                        onClick: e.scrollToSection,
                                        children: [
                                            (0, o.jsx)(Z.E, {
                                                variant: "body-sm/medium",
                                                color: "text-strong",
                                                children: n,
                                            }),
                                            t && (0, o.jsx)("div", { className: t$.W0 }),
                                        ],
                                    },
                                    n,
                                );
                            }),
                        }),
                    ],
                }),
                (0, o.jsxs)("div", {
                    className: t$.MQ,
                    children: [
                        null != n && (0, o.jsx)(tQ.l, { size: "sm", location: A.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                        (0, o.jsx)(eA.A, { size: "sm", variant: "overlay-secondary" }),
                    ],
                }),
            ],
        }),
    });
};
var n8 = i(713271),
    n5 = i(704333),
    n9 = i(414499),
    n4 = i(597770),
    ae = i(500060),
    at = i(866665),
    ai = i(406860),
    as = i(870975),
    an = i(698834);
function aa() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, ai.A)({ boxType: it.$, thirdPartyPartner: "xbox" }),
        i = [
            { icon: n5.ServerGridIcon, text: eI.intl.string(ia.default.MUypiB) },
            { icon: n9.CloudIcon, text: eI.intl.string(ia.default.ec5Rdd) },
            { icon: n4.GiftIcon, text: eI.intl.string(ia.default["9t2CzW"]), tooltip: ia.default.AyECej },
            { icon: ae.ScreenStreamIcon, text: eI.intl.string(ia.default.R7YJAY) },
        ];
    return (0, o.jsx)(G.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, o.jsx)("div", {
            ref: e,
            className: an.iE,
            children: (0, o.jsxs)("div", {
                className: an.Nr,
                children: [
                    (0, o.jsxs)("div", {
                        className: an.j,
                        children: [
                            (0, o.jsx)("div", { className: an._g }),
                            (0, o.jsx)("div", { className: an.$h }),
                            (0, o.jsx)("div", { className: an.Rv }),
                            (0, o.jsx)("div", { className: an.Lw }),
                        ],
                    }),
                    (0, o.jsxs)("div", {
                        className: an.CT,
                        children: [
                            (0, o.jsxs)("div", {
                                className: an.Qs,
                                children: [
                                    (0, o.jsxs)("div", {
                                        children: [
                                            (0, o.jsx)(eL.D, {
                                                variant: "heading-xxl/semibold",
                                                color: "text-strong",
                                                className: an.R_,
                                                children: eI.intl.string(ia.default.rkt1aw),
                                            }),
                                            (0, o.jsxs)("div", {
                                                children: [
                                                    i.map((e) => {
                                                        let { icon: t, text: i, tooltip: s } = e;
                                                        return (0, o.jsxs)(
                                                            "div",
                                                            {
                                                                className: an.yf,
                                                                children: [
                                                                    (0, o.jsx)(t, {
                                                                        size: "sm",
                                                                        color: "var(--icon-strong)",
                                                                    }),
                                                                    (0, o.jsx)(Z.E, {
                                                                        variant: "body-md/medium",
                                                                        color: "text-strong",
                                                                        children: i,
                                                                    }),
                                                                    null != s &&
                                                                        (0, o.jsx)("div", {
                                                                            className: an.Jn,
                                                                            children: (0, o.jsx)(at.m, {
                                                                                text: eI.intl.string(s),
                                                                                position: "top",
                                                                                children: (0, o.jsx)(
                                                                                    t6.CircleInformationIcon,
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
                                                    (0, o.jsx)("div", {
                                                        className: an.xF,
                                                        children: (0, o.jsx)(ej.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: tf.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, o.jsx)("div", {
                                        className: an.WE,
                                        children: (0, o.jsx)(Z.E, {
                                            variant: "body-xs/medium",
                                            color: "text-link",
                                            children: eI.intl.format(ia.default.KDKdWi, { termsLink: (0, as.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, o.jsx)("div", {
                                className: an.r1,
                                children: (0, o.jsx)("img", {
                                    className: an.wm,
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
var al = i(886205),
    ar = i(65154),
    ac = i(805573),
    ao = i(257920),
    ad = i(382702),
    au = i(763180);
function am() {
    let { trackViewed: e, trackInteracted: t } = (0, ac.r)(
        tf.e.AUTOCLIPS_EA_NITRO_MARKETING_CARD_UPSELL,
        A.A.CLIPS_EA_NITRO_MARKETING_CARD,
    );
    return (
        d.useEffect(() => e(), [e]),
        (0, o.jsxs)("div", {
            className: ad.Nr,
            children: [
                (0, o.jsxs)("div", {
                    className: ad.pq,
                    children: [
                        (0, o.jsxs)("div", {
                            className: ad.Z,
                            children: [
                                (0, o.jsx)("div", {
                                    children: (0, o.jsx)(ew.E, {
                                        type: "early_access",
                                        variant: "expressive",
                                        icon: J.NitroWheelIcon,
                                    }),
                                }),
                                (0, o.jsx)(eL.D, {
                                    variant: "heading-xxl/semibold",
                                    color: "text-strong",
                                    children: eI.intl.string(sY.default.MtIbFp),
                                }),
                                (0, o.jsx)(Z.E, {
                                    variant: "body-md/normal",
                                    color: "text-subtle",
                                    children: eI.intl.string(sY.default.hXM4Ae),
                                }),
                            ],
                        }),
                        (0, o.jsx)(Q.$, {
                            variant: "secondary",
                            size: "md",
                            icon: ar.CirclePlayIcon,
                            text: eI.intl.string(sY.default.wNHvBT),
                            onClick: function () {
                                (t("watch_video"), (0, ao.z)("ClipsEarlyAccessCard"));
                            },
                        }),
                    ],
                }),
                (0, o.jsx)("div", {
                    className: ad.LY,
                    children: (0, o.jsx)("img", { className: ad.ot, src: au.A, alt: "", "aria-hidden": !0 }),
                }),
            ],
        })
    );
}
var ax = i(734066),
    ag = i(750338),
    ap = i(186961),
    ah = i(505051);
function af(e) {
    let {
        className: t,
        boxLayout: i,
        title: s,
        shouldLoadVideo: n,
        isReducedMotion: a,
        startLeftAligned: l = !1,
        highlightBento: r,
    } = e;
    return (0, o.jsxs)("div", {
        className: m()(ah.boxBackdrop, t),
        children: [
            (0, o.jsx)(eL.D, {
                className: ah.bentoSectionHeader,
                variant: "nitro-md",
                color: "text-strong",
                children: s,
            }),
            null != r && (0, o.jsx)("div", { className: ah.highlightBento, children: r }),
            (0, o.jsx)("div", {
                className: ah.bentoBoxesGrid,
                children: i.flatMap((e, t) => {
                    let i;
                    switch (e.length) {
                        case 3:
                            i = ap.A0.SMALL;
                            break;
                        case 2:
                            i = ap.A0.MEDIUM;
                            break;
                        default:
                            i = ap.A0.LARGE;
                    }
                    return e.map((e) =>
                        (0, o.jsx)(
                            ag.A,
                            { index: t + +!!l, ...e, size: i, shouldLoadVideo: n, isReducedMotion: a },
                            e.name,
                        ),
                    );
                }),
            }),
        ],
    });
}
let aN = d.memo(function (e) {
        let t,
            i = (0, t2.b)("premium_marketing_bento"),
            s = (0, iv.mh)({ location: "premium_marketing_bento" }),
            { enabled: n } = (0, ip.vc)({ location: "premium_marketing_bento" }),
            { enabled: a } = al.A.useConfig({ location: "premium_marketing_bento" }),
            l = i && !s && !(n && a),
            { whatsNewBoxes: r } = (0, ap.Ay)(l),
            c = ((t = (0, ax.Vl)()), (0, sH.H)("autoclips_ea:nitro_marketing_card", !t));
        return (0, o.jsx)(af, {
            boxLayout: r,
            title: eI.intl.string(eI.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento:
                c || l
                    ? (0, o.jsxs)(o.Fragment, { children: [c && (0, o.jsx)(am, {}), l && (0, o.jsx)(aa, {})] })
                    : null,
            ...e,
        });
    }),
    aA = d.memo(function (e) {
        let { bestOfBoxes: t } = (0, ap.Ay)();
        return (0, o.jsx)(af, { boxLayout: t, title: eI.intl.string(eI.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    aj = (0, s$.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var ab = i(236834),
    aE = i(540504);
function aT(e) {
    let { referrer: t } = e,
        { avatarSrc: i, eventHandlers: s } = (0, eD.A)({ userId: t?.id, size: e_._3.SIZE_24, animateOnHover: !0 });
    return (0, o.jsx)("div", {
        className: aE.$6,
        children: (0, o.jsxs)("div", {
            className: aE.sc,
            children: [
                (0, o.jsx)("div", {
                    className: aE.kR,
                    children: (0, o.jsx)(ey.eu, { src: i, "aria-label": t.username, size: e_._3.SIZE_32, ...s }),
                }),
                (0, o.jsx)(eL.D, {
                    variant: "heading-xs/medium",
                    className: aE.FS,
                    color: "text-strong",
                    children: eI.intl.format(eI.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var aI = i(579245),
    aC = i(369805);
let aR = function () {
    let e = (0, aC.A)();
    return null == e ? null : (0, o.jsx)(eh, { text: e });
};
function av() {
    let e = (0, g.bG)([nk.A], () => nk.A.getForSkuAndInterval((0, er.mH)(tf.pe.TIER_0), tf.WT.MONTH));
    return null != e ? (0, er.sS)(e) : "\u2026";
}
var a_ = i(508556);
let ay = function (e) {
    let { containerVisibilityPercentage: t, variant: i = "default" } = e,
        s = "settings" === i,
        n = (0, e3.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        a = (0, e6.TM)();
    return (0, o.jsxs)("div", {
        "aria-hidden": !0,
        className: m()(a_.YU, { [a_.W0]: s }),
        children: [
            (0, o.jsx)(tl, {
                supportHEVCAlpha: a,
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                containerClassName: a_.wG,
                assetClassName: a_.lu,
                variant: i,
            }),
            (0, o.jsx)(ti, {
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                boltContainerClassName: a_.nJ,
                carContainerClassName: a_.IN,
                hammerContainerClassName: a_.Gj,
                keyContainerClassName: a_.FV,
                starContainerClassName: a_.E1,
                boltAssetClassName: a_.j7,
                carAssetClassName: a_.or,
                hammerAssetClassName: a_.Wv,
                keyAssetClassName: a_.rs,
                starAssetClassName: a_.OY,
                animateStar: !s,
            }),
        ],
    });
};
var aP = i(14057);
let aS = d.memo(function (e) {
    let { className: t, subscriptionTier: i, isEligibleForBogoPromotion: s, ref: n, variant: a = "default" } = e,
        l = "settings" === a,
        { analyticsLocations: r } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        c = av(),
        d = aj.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
        u = (0, ab.A)(),
        x = null != u,
        { visibilityPercentageRef: p, visibilityPercentage: h } = eg(!(0, g.bG)([ee.Ay], () => ee.Ay.useReducedMotion)),
        f = (0, nf.b)(),
        N = !x && f.length > 0,
        b = (0, em.uF)(K.oW.MARKETING_PAGE_BANNER),
        E = null != b,
        T = (0, nU.ar)() && !E,
        I = (0, ed.O)(),
        C = (null != I && tf.U4.includes(I.discountId)) || E;
    return (0, o.jsx)(j.f5, {
        value: r,
        children: (0, o.jsxs)("div", {
            ref: n,
            className: m()(aP.kL, t, { [aP.W0]: l }),
            "data-testid": "marketing-page-hero-header",
            children: [
                l && (0, o.jsx)(nZ, { className: aP.kv }),
                (0, o.jsx)("div", {
                    ref: p,
                    children: (0, o.jsxs)("div", {
                        className: aP.hQ,
                        children: [
                            (0, o.jsx)(ay, { containerVisibilityPercentage: h, variant: a }),
                            T && (0, o.jsx)(aR, {}),
                            (0, o.jsx)("div", {
                                className: aP.s8,
                                children: (0, o.jsx)(eU.F, {
                                    forceLevel: 1,
                                    children: (0, o.jsx)(eL.D, {
                                        variant: "nitro-md",
                                        color: "text-strong",
                                        className: l ? void 0 : aP.wx,
                                        children: eI.intl.string(eI.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, o.jsxs)("div", {
                                className: aP.rf,
                                children: [
                                    x &&
                                        (0, o.jsx)("div", {
                                            className: aP.eZ,
                                            children: (0, o.jsx)(aT, { referrer: u }),
                                        }),
                                    N &&
                                        (0, o.jsx)("div", {
                                            className: aP.Qn,
                                            children: (0, o.jsx)(aI.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, o.jsxs)("div", {
                                        className: T ? aP.es : aP.UJ,
                                        children: [
                                            (0, o.jsx)(ej.A, {
                                                enableMarketingSubscribeCopyTest: !l,
                                                size: "md",
                                                fullWidth: T,
                                                hasActivePromotion: !!s,
                                                subscriptionTier: C && null == i ? tf.pe.NONE : i,
                                                buttonTextOverride: C ? eI.intl.string(eI.t["2pG5Ga"]) : void 0,
                                            }),
                                            !T && (0, o.jsx)(eA.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, o.jsx)("div", {
                                        className: aP.iQ,
                                        children: (0, o.jsx)(Z.E, {
                                            color: "text-muted",
                                            variant: "body-xs/medium",
                                            children: d
                                                ? eI.intl.string(eI.t.jHqrJW)
                                                : eI.intl.format(eI.t.kt9wxs, { cheapestMonthlyPrice: c }),
                                        }),
                                    }),
                                    E &&
                                        (0, o.jsx)(ef.x, {
                                            componentId: b.id,
                                            componentType: b.componentType,
                                            promotionId: b.promotionId,
                                            promotionBannerMarketingComponentFields: b.surface,
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
var aD = i(812537);
let aM = function (e) {
    let { scrollOffset: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
        i = (0, d.useCallback)(
            (e) => {
                let i = r.current[e];
                null != i &&
                    ((i.style.scrollMarginTop = `${t}px`), i.scrollIntoView({ behavior: "smooth", block: "start" }));
            },
            [t],
        ),
        [s, n] = (0, d.useState)(Object.fromEntries(e.map((e) => [e, !1]))),
        [a, l] = (0, d.useState)(e[0]);
    (0, d.useEffect)(() => {
        let e = Object.keys(s).filter((e) => s[e]);
        e.length > 0 && l(e[0]);
    }, [s]);
    let r = (0, d.useRef)({});
    return (
        (0, d.useEffect)(() => {
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
            navBarSections: (0, d.useMemo)(
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
var aO = i(818348),
    ak = i(773188);
let aU = () => {
    let e = (0, x.zy)();
    (0, _.P)(v);
    let t = d.useRef(null),
        i = d.useRef(null),
        s = d.useRef(null),
        n = d.useRef(null),
        a = d.useRef(null),
        l = d.useRef(null),
        r = (0, g.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        [c, u] = d.useState(!1),
        [p, h] = d.useState(!1),
        [f, N] = d.useState(!1),
        [b, E] = d.useState(!1),
        T = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        I = null != T ? (0, er.EL)(T) : null,
        C = null != I ? er.Ay.getSkuIdForPlan(I.planId) : null,
        R = null !== C && C !== tf.pe.TIER_2 ? tf.pe.TIER_2 : null,
        { analyticsLocations: y } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
    d.useEffect(() => {
        E(!0);
    }, []);
    let { shouldShowBonusOrbsUX: P } = (0, sm.lk)(sA.rE.NITRO_HOME_MARKETING),
        S = P ? n8.N.ORB_MULTIPLIER : null,
        D = d.useMemo(() => {
            let t = new URLSearchParams(e.search).get(ng.x);
            return "orbs" === t
                ? S
                : t === n8.N.THREE_P_PROMOTIONS
                  ? n8.N.THREE_P_PROMOTIONS
                  : t === n8.N.YOUTUBE
                    ? n8.N.YOUTUBE
                    : null;
        }, [e.search, S]);
    nx(D ?? "", null != D);
    let { navBarSections: M, activeSectionId: U } = aM([nJ.HOME, nJ.WHATS_NEW, nJ.BEST_OF_NITRO, nJ.PLANS, nJ.COMPARE]),
        { home: L, whatsNew: B, bestOfNitro: H, plans: F, compare: V } = M,
        W = (0, o.jsxs)("div", {
            ref: i,
            className: m()(ak.kL, ak.Gd, ak.iI, { [ak.Hq]: !r }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, o.jsx)(nZ, { className: ak.yH }),
                (0, o.jsx)(n7, { navBarSections: M, activeSectionId: U }),
                (0, o.jsxs)("div", {
                    className: ak.Qr,
                    children: [
                        (0, o.jsx)("div", {
                            className: ak.qY,
                            ref: L.ref,
                            children: (0, o.jsx)(G.L, {
                                innerRef: n,
                                onChange: (e) => u(e),
                                threshold: 0,
                                active: !0,
                                children: (0, o.jsx)(aS, { ref: n, subscriptionTier: R }),
                            }),
                        }),
                        (0, o.jsx)("div", {
                            className: ak.So,
                            ref: B.ref,
                            children: (0, o.jsx)(aN, { shouldLoadVideo: b, isReducedMotion: r }),
                        }),
                        (0, o.jsx)("div", {
                            className: ak.KQ,
                            ref: H.ref,
                            children: (0, o.jsx)(aA, { shouldLoadVideo: b, isReducedMotion: r }),
                        }),
                        (0, o.jsx)("div", {
                            className: ak.qc,
                            ref: F.ref,
                            children: (0, o.jsx)(G.L, {
                                innerRef: s,
                                onChange: (e) => h(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, o.jsx)(nK, { innerRef: s }),
                            }),
                        }),
                        (0, o.jsx)("div", { className: ak.aC, ref: V.ref, children: (0, o.jsx)(aD.A, {}) }),
                    ],
                }),
                (0, o.jsx)(G.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !f &&
                            (k.default.track(eX.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: y }),
                            N(!0));
                    },
                    children: (0, o.jsx)("div", { ref: a, className: ak._Z }),
                }),
                (0, o.jsx)(n3, { ref: l }),
                (0, o.jsx)(n$, { isVisible: !c && !p && b, subscriptionTier: R }),
                (0, o.jsx)(nZ, { className: ak.MF }),
            ],
        });
    return (0, o.jsx)(t7.N, {
        theme: aO.NJ.DARK,
        children: (e) => (0, o.jsx)(w.Gt, { className: m()(ak.XG, e), ref: t, children: W }),
    });
};
var aL = i(862482),
    aG = i(300349),
    aw = i(106512),
    aB = i(662367),
    aH = i(374403),
    aF = i(396375),
    aV = i(900797),
    aW = i(847374),
    az = i(614268);
function aY(e) {
    let { className: t } = e;
    return (0, o.jsx)("div", {
        className: m()(az.i, t),
        children: (0, o.jsx)(ew.E, { type: "early_access", variant: "premium" }),
    });
}
var aK = i(536071);
let aX = "/assets/5b4fec8511c3676a.svg",
    aq = "/assets/0838bda6ecd20d91.svg";
function aZ(e, t, i) {
    return (0, i9.M)(e) ? t : i;
}
var aJ = i(872461);
function aQ(e) {
    let { isShowingAll: t, onClick: i } = e;
    return (0, o.jsxs)(n6.D, {
        onClick: i,
        className: aJ.customButton,
        children: [
            t ? eI.intl.string(eI.t.maZaN3) : eI.intl.string(eI.t["37C26f"]),
            t
                ? (0, o.jsx)(aV.ChevronSmallUpIcon, { size: "md", color: "currentColor", className: aJ.arrow })
                : (0, o.jsx)(aW.ChevronSmallDownIcon, { size: "md", color: "currentColor", className: aJ.arrow }),
        ],
    });
}
function a$(e) {
    let {
            title: t,
            description: i,
            className: s,
            imageSource: n,
            imageClassName: a,
            titleBadge: l,
            isNew: r = !1,
            isEarlyAccess: c = !1,
            variant: d = "default",
        } = e,
        { analyticsLocations: u } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        x = (0, o.jsx)("img", { src: n, alt: "", className: m()(a, aJ.perksCardArt) }),
        g = "settings" === d;
    return (0, o.jsx)(j.f5, {
        value: u,
        children: (0, o.jsxs)("div", {
            className: m()(aJ.perkCard, s, { [aJ.settingsCard]: g }),
            children: [
                r ? (0, o.jsx)(aK.A, { className: aJ.perkCardNewBadge }) : null,
                c ? (0, o.jsx)(aY, { className: aJ.perkCardEarlyAccessBadge }) : null,
                g
                    ? (0, o.jsx)(q.B, {
                          direction: "horizontal",
                          align: "center",
                          justify: "center",
                          gap: 0,
                          padding: 24,
                          className: aJ.settingsArt,
                          children: x,
                      })
                    : x,
                (0, o.jsxs)("div", {
                    className: g ? aJ.settingsText : void 0,
                    children: [
                        (0, o.jsxs)(eL.D, {
                            variant: g ? "heading-sm/semibold" : "heading-lg/semibold",
                            className: aJ.perkCardHeading,
                            children: [t, " ", l],
                        }),
                        (0, o.jsx)(Z.E, {
                            variant: g ? "body-xs/normal" : "body-sm/normal",
                            color: g ? "text-muted" : void 0,
                            lineClamp: g ? 1 : void 0,
                            className: aJ.perkCardDescription,
                            children: "function" == typeof i ? i(u) : i,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let a0 = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [s, n] = d.useState(!1),
        a = (function (e) {
            let { styles: t } = e,
                i = (0, i4.Ay)(),
                s = (0, e3.bG)([D.default], () => {
                    let e = D.default.getCurrentUser();
                    return er.Ay.canUsePremiumProfileCustomization(e);
                }),
                n = (0, er.EJ)(tf.PremiumTypes.TIER_2, { useSpace: !1 });
            return {
                badge: {
                    title: eI.intl.string(eI.t.SS87rQ),
                    description: eI.intl.string(eI.t.oD6CRr),
                    imageSource: "/assets/70e295f6158d848f.png",
                    imageClassName: t.badgeImage,
                },
                badgeAlt: {
                    title: eI.intl.string(eI.t["5cYMu0"]),
                    description: eI.intl.string(eI.t.vxk9va),
                    imageSource: aZ(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
                    imageClassName: t.badgeNewImage,
                },
                clientThemes: {
                    title: eI.intl.string(eI.t["/xvEMy"]),
                    description: eI.intl.string(eI.t.HKWdjj),
                    className: t.clientThemesCard,
                    imageSource: "/assets/37e0853800afb796.svg",
                    imageClassName: t.clientThemesImage,
                },
                customAppIcons: {
                    title: eI.intl.string(eI.t.OuItFi),
                    description: eI.intl.string(eI.t.mPyrE6),
                    imageSource:
                        "https://cdn.discordapp.com/assets/content/bca160c31fc5390dd2b41d90060edcc912a45f6ab3beab44ea79e16bf1f6530f.png",
                    imageClassName: t.customAppIconImage,
                },
                emoji: {
                    title: eI.intl.string(eI.t["R2IV/Q"]),
                    description: eI.intl.string(eI.t.R5Xag2),
                    imageSource: "/assets/d8edaaf5cb32248f.svg",
                    imageClassName: t.emojiImage,
                },
                guildProfile: {
                    title: eI.intl.string(eI.t.lKDhhJ),
                    description: () =>
                        s
                            ? eI.intl.formatToPlainString(eI.t.aj1pfZ, { onCheckItOutClick: () => {} })
                            : eI.intl.formatToPlainString(eI.t.d2oYS8, { onTryItOutClick: () => {} }),
                    imageSource: "/assets/e1b6b45be1ce4b03.png",
                    imageClassName: t.perGuildProfilesImage,
                },
                longerMessages: {
                    title: eI.intl.string(eI.t.BUScid),
                    description: eI.intl.string(eI.t.vN6XpQ),
                    imageSource: aZ(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: eI.intl.string(eI.t.Bv8Pfk),
                    description: eI.intl.string(eI.t.JMfaTU),
                    imageSource: aZ(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: eI.intl.string(eI.t.Bv8Pfk),
                    description: eI.intl.string(eI.t.JMfaTU),
                    imageSource: aZ(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: eI.intl.string(eI.t["lGcW+c"]),
                    description: eI.intl.string(eI.t["/fDyO+"]),
                    imageSource: aZ(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: eI.intl.string(eI.t["1c+xwT"]),
                    description: eI.intl.string(eI.t.hJG8ZN),
                    imageSource: aZ(i, aq, aX),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: eI.intl.string(eI.t.tzdIwI),
                    description: eI.intl.string(eI.t.hJG8ZN),
                    imageSource: aZ(i, aq, aX),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: eI.intl.string(eI.t.tzdIwI),
                    description: eI.intl.string(eI.t.hJG8ZN),
                    imageSource: aZ(i, aq, aX),
                    imageClassName: t.stickersImage,
                },
                streaming: {
                    title: eI.intl.string(eI.t.RSXQYO),
                    description: eI.intl.string(eI.t.ymCPxp),
                    imageSource: "/assets/3bcdc01b26c7f691.svg",
                    imageClassName: t.streamingImage,
                },
                superReactions: {
                    title: eI.intl.string(eI.t["uZt5q/"]),
                    description: eI.intl.string(eI.t.ZK3ZoX),
                    imageSource: aZ(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
                    imageClassName: t.superReactionsImage,
                },
                upload: {
                    title: eI.intl.formatToPlainString(eI.t.jqhAdL, { premiumMaxSize: n }),
                    description: eI.intl.formatToPlainString(eI.t["HI+cfm"], { premiumMaxSize: n }),
                    imageSource: "/assets/010eae6a6dbacc63.svg",
                    imageClassName: t.uploadImage,
                },
                videoBackground: {
                    title: eI.intl.string(eI.t.NaGpTf),
                    description: eI.intl.string(eI.t["A8O/Qw"]),
                    imageSource: aZ(i, nt, ni),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: aJ }),
        l = (0, e3.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        { analyticsLocations: r } = (0, j.Ay)();
    return (0, o.jsxs)("div", {
        className: m()(aJ.perksContainer, t, {
            [aJ.partiallyHidden]: i && !s,
            [aJ.subscriberNitroHome]: i,
            [aJ.reducedMotion]: l,
        }),
        children: [
            (0, o.jsx)(eL.D, {
                variant: "heading-xxl/semibold",
                className: aJ.perksTitle,
                children: i ? eI.intl.string(eI.t.QX14gI) : eI.intl.string(eI.t.RGadQR),
            }),
            (0, o.jsx)("div", {
                className: m()(aJ.perkCardContainer, { [aJ.perkCardContainerExpanded]: s }),
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
                    let t = a[e];
                    return null != t && (0, o.jsx)(a$, { ...t }, e);
                }),
            }),
            i &&
                (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)("div", {
                            className: m()({ [aJ.sizeGizmo]: !s, [aJ.sizeGizmoExpanded]: s }),
                            children: (0, o.jsx)(aQ, {
                                onClick: function () {
                                    (k.default.track(eX.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: r,
                                        was_expanded: s,
                                    }),
                                        n(!s));
                                },
                                isShowingAll: s,
                            }),
                        }),
                        (0, o.jsx)("div", { className: m()(aJ.cover, { [aJ.hidden]: s }) }),
                    ],
                }),
        ],
    });
};
var a1 = i(615939);
let a2 = d.memo(function (e) {
    let { className: t } = e,
        i = [
            {
                id: t4.MORE_EMOJIS_CARD_ID,
                title: eI.intl.string(eI.t["R2IV/Q"]),
                description: eI.intl.string(eI.t.DRMecB),
                imageSource: iZ.A,
            },
            {
                id: t4.HD_VIDEO_CARD_ID,
                title: eI.intl.string(eI.t["/mQ5gg"]),
                description: eI.intl.string(eI.t["7WwAXh"]),
                imageSource: iX.A,
            },
            {
                id: t4.LARGE_UPLOADS_CARD_ID,
                title: eI.intl.string(eI.t.nL1WZV),
                description: (0, st.M6)({
                    legacyCopy: eI.intl.formatToPlainString(eI.t.k8LC1w, { maxSizeMb: 500 }),
                    rolloutCopy: eI.intl.formatToPlainString(eI.t.teOTfv, {
                        maxFileSize: (0, er.EJ)(tf.PremiumTypes.TIER_2, { useSpace: !1 }),
                    }),
                }),
                imageSource: a1.A,
            },
            {
                id: t4.PROFILES_CARD_ID,
                title: eI.intl.string(eI.t.KcyDwF),
                description: eI.intl.string(eI.t.Mt3U1W),
                imageSource: iY,
            },
        ];
    return (0, o.jsxs)(q.B, {
        gap: 16,
        className: m()(aJ.settingsPerks, t),
        children: [
            (0, o.jsx)(eL.D, { variant: "heading-xl/semibold", children: eI.intl.string(eI.t.q1u7nQ) }),
            (0, o.jsx)(eU.F, {
                children: (0, o.jsx)("div", {
                    className: aJ.settingsGrid,
                    children: i.map((e) => (0, o.jsx)(a$, { ...e, variant: "settings" }, e.id)),
                }),
            }),
        ],
    });
});
var a3 = i(695366),
    a6 = i(370049);
let a7 = function (e) {
    let t,
        i,
        { premiumSubscription: s, className: n, textColor: a } = e,
        l = (0, nU.ar)();
    if (null == s) return null;
    let r = null != s ? er.Ay.getPremiumPlanItem(s) : null;
    if (
        (er.Ay.isBoostOnlySubscription(s)
            ? (t = eI.intl.string(eI.t.Uj0md3))
            : null != r && (t = er.Ay.getTierDisplayNameByPlanId(r.planId)),
        null == t)
    )
        return null;
    function c() {
        return (0, en.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL);
    }
    let d = (null != r ? er.Ay.getSkuIdForPlan(r.planId) : null) === tf.pe.TIER_1;
    return (
        (i = null != a ? a : l ? "text-overlay-light" : "text-default"),
        (0, o.jsxs)(t8.Z, {
            className: m()(a6.kL, n, { [a6.He]: l }),
            type: t8.Z.Types.CUSTOM,
            children: [
                (0, o.jsx)(a3.CircleErrorIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: m()(a6.Kk, { [a6.Pt]: l }),
                }),
                (0, o.jsx)(Z.E, {
                    variant: "body-sm/medium",
                    color: i,
                    children: d
                        ? eI.intl.format(eI.t["tYuv+T"], {
                              helpdeskArticle: el.A.getArticleURL(eX.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: c,
                          })
                        : eI.intl.format(eI.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: c }),
                }),
            ],
        })
    );
};
var a8 = i(978836);
let a5 = function (e) {
    let { lifted: t = !1 } = e;
    return (0, o.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: m()(a8.zr, { [a8.N]: t }),
        children: [
            (0, o.jsx)("path", {
                d: "M1175.02 650.847C567.943 650.847 449.538 793 0 793V0H2338V529.841C1912.54 529.841 1705.84 650.847 1175.02 650.847Z",
                fill: "url(#paint0_linear_2548_770)",
            }),
            (0, o.jsx)("defs", {
                children: (0, o.jsxs)("linearGradient", {
                    id: "paint0_linear_2548_770",
                    x1: "2338",
                    y1: "-1.20115e-05",
                    x2: "2262.17",
                    y2: "975.136",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        (0, o.jsx)("stop", { className: a8.eq }),
                        (0, o.jsx)("stop", { offset: "0.339235", className: a8.l_ }),
                        (0, o.jsx)("stop", { offset: "0.492065", className: a8.sM }),
                        (0, o.jsx)("stop", { offset: "0.823236", className: a8.zi }),
                        (0, o.jsx)("stop", { offset: "0.899558", className: a8.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var a9 = i(194509),
    a4 = i(317587);
let le = function (e) {
    let { isVisible: t, subscriptionTier: i, isApplicationHome: s, isEligibleForBogoPromotion: n } = e,
        a = (0, e8.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: eX.JJy.MARKETING_FLOATING_CTA },
        r = (0, i4.Ay)(),
        c = (0, nX.M)(r);
    return (0, o.jsx)(e7.animated.div, {
        className: m()(a4.iE, { [a4.H8]: s, [a4.q4]: !t }),
        style: a,
        children: (0, o.jsxs)("div", {
            className: s ? a4.zW : a4.iJ,
            children: [
                (0, o.jsx)(aF.A, {
                    color: c ? aL.XD.BRAND_INVERTED : void 0,
                    className: m()(a4.x6, { [a4.Ph]: c }),
                    subscriptionTier: i,
                    premiumModalAnalyticsLocation: l,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: c ? void 0 : a4.PJ,
                }),
                (0, o.jsx)(a9.A, { className: a4.x6, premiumModalAnalyticsLocation: l }),
            ],
        }),
    });
};
var lt = i(386564);
function li(e) {
    let {
            inOfferExperience: t,
            subscriptionTier: i,
            containerClassName: s,
            buttonClassName: n,
            isApplicationHome: a,
            isDarkMode: l,
            isEligibleForBogoPromotion: r,
        } = e,
        c = r
            ? (0, o.jsx)(aF.A, {
                  color: l ? aL.XD.BRAND_INVERTED : void 0,
                  className: m()(lt.x6, lt.Ph, n, { [lt.Sq]: t && a, [lt.MF]: a && !l }),
                  shinyButtonClassName: l ? void 0 : lt.PJ,
                  subscriptionTier: i,
                  hasActivePromotion: !0,
              })
            : (0, o.jsx)(aF.A, {
                  color: l || !a ? aL.XD.BRAND_INVERTED : void 0,
                  className: m()(lt.x6, lt.Ph, n, { [lt.Sq]: t && a, [lt.MF]: a && !l }),
                  subscriptionTier: i,
              }),
        d = t && a ? null : (0, o.jsx)(a9.A, { className: m()(lt.x6, n), color: a ? void 0 : aL.XD.WHITE });
    return (0, o.jsxs)("div", { className: m()(lt.UD, s), children: [c, " ", d] });
}
function ls() {
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(aK.p, { className: lt.zd }),
            (0, o.jsx)(aK.p, { className: lt.G }),
            (0, o.jsx)(aK.p, { className: lt.zy }),
            (0, o.jsx)(aK.p, { className: lt.GX }),
        ],
    });
}
function ln(e) {
    let { variant: t = "body-lg/normal", withBottomMargin: i = !0, isApplicationHome: s } = e,
        n = av();
    return (0, o.jsx)(Z.E, {
        variant: t,
        color: s ? "text-subtle" : "text-overlay-light",
        className: m()(lt.h_, { [lt.If]: i, [lt.jn]: s }),
        children: eI.intl.format(eI.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let la = function (e) {
    let { className: t, buttonClassName: i, subscriptionTier: s, isDarkMode: n, ref: a } = e,
        { analyticsLocations: l } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        r = (0, ec.QQ)(),
        c = (0, nU.ar)(),
        d = (0, nf.b)().length > 0,
        u = eI.intl.string(eI.t.YCZldK);
    return (0, o.jsx)(j.f5, {
        value: l,
        children: (0, o.jsxs)("div", {
            ref: a,
            className: m()(lt.kL, t, { [lt.V1]: !c, [lt.Q4]: !c && d }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, o.jsxs)("div", {
                    className: c ? lt.I6 : lt.G1,
                    children: [
                        (0, o.jsx)(eU.F, {
                            forceLevel: 1,
                            children: (0, o.jsx)(eL.D, {
                                variant: c ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: u,
                            }),
                        }),
                        d
                            ? (0, o.jsx)("div", {
                                  className: lt.DF,
                                  children: (0, o.jsx)(aI.A, { textColor: "text-overlay-light", smallerText: !c }),
                              })
                            : (0, o.jsx)(ln, {}),
                        r
                            ? (0, o.jsx)("div", {
                                  className: lt.UD,
                                  children: (0, o.jsx)(a9.A, { className: m()(lt.x6, i), color: aL.XD.WHITE }),
                              })
                            : (0, o.jsx)(li, {
                                  subscriptionTier: s,
                                  inOfferExperience: c,
                                  buttonClassName: i,
                                  isDarkMode: n,
                              }),
                        d && (0, o.jsx)(ln, { variant: "body-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !c && (0, o.jsx)(ls, {}),
            ],
        }),
    });
};
var ll = i(403227),
    lr = i(367740),
    lc = i(377770);
function lo(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, o.jsx)(a5, { lifted: t }) : null;
}
let ld = () => {
        let { enabled: e } = aG.A.useConfig({ location: "PremiumMarketingHomeSettingsPage" });
        (0, _.P)(v);
        let t = d.useRef(null),
            i = d.useRef(null),
            s = d.useRef(null),
            n = (0, i4.Ay)(),
            a = (0, i9.M)(n),
            [l, r] = d.useState(!1),
            [c, u] = d.useState(!1),
            [x, p] = d.useState(!1),
            h = !l && !c,
            [f, N] = d.useState(!1),
            b = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            E = null != b ? (0, er.EL)(b) : null,
            T = null != E ? er.Ay.getSkuIdForPlan(E.planId) : null,
            I = null !== T && T !== tf.pe.TIER_2 ? tf.pe.TIER_2 : null,
            C = (0, eu.V)(),
            R = C?.subscriptionTrial?.skuId,
            y = (0, nU.ar)(),
            P = !e && y,
            S = (0, g.bG)([tS.A], () => {
                let e = tS.A.getMarketingComponentBySurface(K.oW.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e ? null : e.surface;
            }),
            D = (0, aH.Q)(),
            { analyticsLocations: M } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
        d.useEffect(() => {
            N(!0);
        }, []);
        let U = e
            ? (0, o.jsx)("div", {
                  className: lc.OE,
                  children: (0, o.jsx)(G.L, {
                      innerRef: t,
                      onChange: u,
                      threshold: 0.1,
                      active: !0,
                      children: (0, o.jsx)(nK, { innerRef: t, variant: "settings" }),
                  }),
              })
            : (0, o.jsx)("div", {
                  className: lc.dY,
                  children: (0, o.jsx)(G.L, {
                      innerRef: t,
                      onChange: (e) => u(e),
                      threshold: 0.1,
                      active: !0,
                      children: (0, o.jsx)(nj.qu, {
                          innerRef: t,
                          tier0CTAButton: (0, o.jsx)(aF.A, {
                              showIcon: !1,
                              subscriptionTier: tf.pe.TIER_0,
                              className: lr.Ph,
                              look: aL.pR.OUTLINED,
                              color: aL.XD.WHITE,
                              buttonShineClassName: lr.Qr,
                          }),
                          tier2CTAButton:
                              R === tf.pe.TIER_0
                                  ? (0, o.jsx)(aF.A, {
                                        showIcon: !1,
                                        subscriptionTier: tf.pe.TIER_2,
                                        className: lr.Ph,
                                        look: aL.pR.OUTLINED,
                                        color: aL.XD.WHITE,
                                        buttonShineClassName: lr.Qr,
                                    })
                                  : (0, o.jsx)(aF.A, {
                                        color: aL.XD.BRAND_INVERTED,
                                        showIcon: !1,
                                        subscriptionTier: tf.pe.TIER_2,
                                        className: lr.Ph,
                                        textOptions: { textClassName: lr.Ac },
                                        buttonShineClassName: lr.Qr,
                                    }),
                      }),
                  }),
              });
        return (0, o.jsxs)("div", {
            className: m()(lc.kL, { [lc.N4]: e }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, o.jsx)(a7, {
                    premiumSubscription: b,
                    textColor: e ? "text-default" : void 0,
                    className: m()(lc.R3, { [lc.aZ]: y }),
                }),
                P &&
                    (0, o.jsxs)("div", {
                        className: lc.n1,
                        children: [
                            (0, o.jsx)(lo, { inOfferExperience: y }),
                            (0, o.jsx)(tQ.l, {
                                className: lc.ij,
                                size: "md",
                                location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                        ],
                    }),
                (0, o.jsxs)("div", {
                    className: m()({ [lc.V1]: !P }),
                    children: [
                        null != S && (0, o.jsx)(aw.m, { className: lc.w$, config: S }),
                        (0, o.jsxs)("div", {
                            className: lc.iS,
                            children: [
                                !P &&
                                    (0, o.jsx)(tQ.l, {
                                        className: lc.ij,
                                        size: "md",
                                        location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, o.jsx)(G.L, {
                                    innerRef: i,
                                    onChange: (e) => r(e),
                                    threshold: 0,
                                    active: !0,
                                    children: e
                                        ? (0, o.jsx)(aS, { ref: i, subscriptionTier: I, variant: "settings" })
                                        : (0, o.jsx)(la, {
                                              ref: i,
                                              subscriptionTier: I,
                                              className: m()({ [lc.p7]: y, [lc.Pw]: y, [lc.Cv]: null != b }),
                                              isDarkMode: a,
                                          }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != D && (0, o.jsx)("div", { className: lc.Ol, children: (0, o.jsx)(aB.I, { component: D }) }),
                U,
                e ? (0, o.jsx)(a2, { className: lc.OE }) : (0, o.jsx)(a0, { className: lc.B_ }),
                (0, o.jsx)("div", {
                    className: lc.aC,
                    children: e
                        ? (0, o.jsx)(aD.A, { variant: "settings" })
                        : (0, o.jsx)(ll.A, { className: lc.JQ, hideCTAs: !0 }),
                }),
                (0, o.jsx)("div", { className: lc.hz }),
                e
                    ? (0, o.jsx)(n$, { isVisible: h && f, subscriptionTier: I, variant: "settings" })
                    : (0, o.jsx)(le, { isVisible: h && f, subscriptionTier: I, isApplicationHome: !1 }),
                (0, o.jsx)(G.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !x &&
                            (k.default.track(eX.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: M }),
                            p(!0));
                    },
                    children: (0, o.jsx)("div", { ref: s, className: lc._Z }),
                }),
                (0, o.jsx)("img", {
                    src: np,
                    className: lc.Kw,
                    width: 112,
                    height: 85,
                    alt: eI.intl.string(eI.t.X4IxWL),
                }),
            ],
        });
    },
    lu = function (e) {
        let { entrypoint: t } = e,
            i = (0, eu.V)(),
            s = (0, ed.O)(),
            n = (0, nA.NF)({ trialOffer: i }),
            a = (0, nA.Tp)(),
            l = (0, g.bG)([nN.A], () => nN.A.getReminderStateId());
        switch (
            (d.useEffect(() => {
                (!0 === n && (0, nA.QG)(), !0 === a && (0, nA.ne)(l), (null != i || null != s) && (0, L.u1)(i, s));
            }, [i, s, n, a, l]),
            t)
        ) {
            case tf.tU.UserSettings:
                return (0, o.jsx)(ld, {});
            case tf.tU.ApplicationStoreHome:
                return (0, o.jsx)(aU, {});
            default:
                return null;
        }
    };
var lm = i(531296);
let lx = function (e) {
    let { entrypoint: t = tf.tU.UserSettings } = e;
    (0, _.P)(v);
    let i = (0, E.Hp)(),
        { sourceAnalyticsLocations: s, analyticsLocations: n } = (0, j.Ay)(A.A.PREMIUM_MARKETING),
        a = (0, g.bG)([O.A], () => O.A.hasFetchedSubscriptions()),
        l = (0, g.bG)([M.A], () => M.A.hasFetchedPaymentSources),
        r = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        c = r?.id,
        u = (0, eu.V)(),
        C = (0, ed.O)(),
        R = (0, T.Y)(tf.T7),
        [G, w] = d.useState(!0),
        B = d.useRef(0),
        H = (0, U.YE)(r, tf.PremiumTypes.TIER_2);
    ((0, nf.b)(),
        d.useEffect(() => {
            !(async function () {
                let e = Date.now();
                (await Promise.all([b.hP(), b.$o(), (0, h.zS)(null, null, eX.tF5.DISCOVERY)]),
                    (B.current = Date.now() - e),
                    w(!1));
            })();
        }, []),
        d.useEffect(() => {
            G ||
                k.default.track(eX.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: s,
                    load_duration_ms: B.current,
                });
        }, [s, G]),
        d.useEffect(() => {
            i && (null != u || null != C) && (0, L.u1)(u, C);
        }, [i, u, C]));
    let F = (0, x.zy)(),
        V = d.useRef(!1),
        W = a && l && R,
        [z, Y] = d.useState(W);
    (W && !z && Y(!0),
        d.useEffect(() => {
            if (V.current || !W) return;
            let e = new URLSearchParams(F.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: tf.pe.TIER_0, nitro: tf.pe.TIER_2 },
                i = Object.hasOwn(t, e) ? t[e] : void 0;
            null != i &&
                ((V.current = !0),
                (0, P.bG)(eX.BVt.APPLICATION_STORE),
                (0, y.A)({ subscriptionTier: i, analyticsLocations: n }));
        }, [W, F.search, n]));
    let K = (0, g.bG)([S.A], () => S.A.enabled),
        X = t === tf.tU.ApplicationStoreHome,
        q = K
            ? (0, o.jsx)(f.A, {})
            : i
              ? (0, o.jsx)(I.uK, {})
              : X && H
                ? (0, o.jsx)(j.f5, { value: n, children: (0, o.jsx)(nh, { userId: c }) })
                : z
                  ? null
                  : (0, o.jsx)("div", { className: m()(lm.kL, lm.Lq), children: (0, o.jsx)(p.y, {}) });
    return null != q
        ? !K && !i && X && H
            ? q
            : (0, o.jsxs)(o.Fragment, { children: [X && (0, o.jsx)(N.A, {}), q] })
        : (0, o.jsx)(j.f5, { value: n, children: (0, o.jsx)(lu, { entrypoint: t }) });
};
