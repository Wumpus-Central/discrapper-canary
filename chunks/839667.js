(s.d(t, { A: () => a6 }), s(323874), s(14289), s(35956), s(205816));
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
    x = s(855986),
    g = s(289873),
    p = s(73825),
    h = s(369143),
    f = s(107834),
    N = s(793574),
    A = s(688810),
    b = s(669815),
    j = s(86379),
    E = s(160946),
    T = s(500597),
    C = s(840251),
    I = s(688151);
let R = new C.E([], I.$G.OPEN_NITRO, { location: "open nitro tab/settings" });
var v = s(611924),
    _ = s(778705),
    y = s(976860),
    P = s(351906),
    S = s(287809),
    D = s(295405),
    M = s(166403),
    O = s(129230),
    k = s(474090),
    L = s(739053),
    U = s(831259),
    G = s(516521),
    w = s(961250),
    B = s(622886),
    H = s(851767),
    F = s(917445),
    V = s(131168),
    W = s(482589),
    z = s(511484),
    Y = s(175020),
    X = s(517352),
    K = s(192308),
    Z = s(331322),
    q = s(834730),
    J = s(403581),
    Q = s(821609),
    $ = s(502572),
    ee = s(775602),
    et = s(366999),
    es = s(531260),
    ei = s(780964),
    en = s(766075),
    ea = s(786300),
    el = s(975571),
    er = s(448645),
    ec = s(89366),
    eo = s(881489),
    ed = s(423814),
    eu = s(77528),
    em = s(641436),
    ex = s(172218);
function eg() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, s] = (0, o.useState)(1),
        i = (0, o.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, ex.B)(
            (e) => {
                s(e.intersectionRatio);
            },
            i,
            e,
        ),
        visibilityPercentage: t,
    };
}
var ep = s(287763);
let eh = function (e) {
    let { text: t } = e;
    return (0, c.jsx)("div", {
        className: ep.i,
        children: (0, c.jsx)(q.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t }),
    });
};
var ef = s(371764),
    eN = s(103411),
    eA = s(65470),
    eb = s(792656),
    ej = s(536637),
    eE = s.n(ej),
    eT = s(496431),
    eC = s(792996),
    eI = s(850292);
let eR = function (e) {
    let { expiresAt: t, className: s, digitTextVariant: i = "body-md/medium" } = e,
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
        className: u()(eI.Xl, s, { [eI.a3]: "body-lg/semibold" === i }),
        children: [
            (0, c.jsx)(q.E, {
                variant: "body-sm/semibold",
                color: "text-strong",
                children: eC.intl.string(eC.t["/ARFVE"]),
            }),
            (0, c.jsx)("div", {
                className: eI.$R,
                children: d.map((e, t) =>
                    (function (e, t, s) {
                        let i,
                            [n, a] = 1 === (i = e.unitValue.toString()).length ? ["0", i[0]] : [i[0], i[1]];
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
                                                        children: (0, c.jsx)(q.E, {
                                                            variant: s,
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: eI.B2,
                                                        children: (0, c.jsx)(q.E, {
                                                            variant: s,
                                                            color: "text-strong",
                                                            children: a,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, c.jsx)(q.E, {
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
                                    (0, c.jsx)(q.E, {
                                        className: eI.cV,
                                        variant: "body-lg/normal",
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
var ev = s(473702),
    e_ = s(778712),
    ey = s(97808),
    eP = s(609425),
    eS = s(16371),
    eD = s(854627),
    eM = s(427262),
    eO = s(938767);
function ek() {
    let e = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        t = (0, eP.A)(),
        { avatarSrc: s, avatarDecorationSrc: i, eventHandlers: n } = (0, eD.A)({ userId: e?.id, size: e_._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, eM.mG)(e);
    return (0, c.jsxs)("div", {
        className: eO.kL,
        children: [
            (0, c.jsx)("div", {
                className: eO.my,
                children: (0, c.jsx)(ey.eu, {
                    src: s,
                    avatarDecoration: i,
                    size: e_._3.SIZE_56,
                    "aria-label": a,
                    ...n,
                }),
            }),
            (0, c.jsx)("div", { className: eO.QC, children: (0, c.jsx)(eS.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var eL = s(707554),
    eU = s(534514);
let eG = function (e) {
    let { className: t, color: s = "text-strong", variant: i = "nitro-lg", children: n } = e;
    return (0, c.jsx)(eL.F, {
        forceLevel: 1,
        children: (0, c.jsx)(eU.D, { className: t, variant: i, color: s, children: n }),
    });
};
var ew = s(805251),
    eB = s(969935),
    eH = s(132506),
    eF = s(610709),
    eV = s(478016),
    eW = s(318254),
    ez = s(646514),
    eY = s(626031),
    eX = s(197630);
s(232198);
var eK = s(652215),
    eZ = s(957457);
function eq(e) {
    let { nRewardsGranted: t, referralRewardType: s, className: i } = e;
    return t < 1
        ? null
        : s === eX.xb.ORBS
          ? (0, c.jsx)(eJ, { nRewardsGranted: t, className: i })
          : s === eX.xb.DISCOUNT
            ? (0, c.jsx)(eQ, { nRewardsGranted: t, className: i })
            : null;
}
function eJ(e) {
    let { nRewardsGranted: t, className: s } = e,
        i = 5e3 * t,
        [n, a] = o.useState(0);
    return (
        o.useEffect(() => {
            a(i);
        }, [i]),
        (0, c.jsxs)(Z.B, {
            direction: "horizontal",
            align: "center",
            gap: 0,
            fullWidth: !1,
            className: s,
            children: [
                (0, c.jsxs)("div", {
                    className: eZ.u,
                    "aria-label": String(i),
                    children: [
                        (0, c.jsx)(eW.OrbsIcon, { size: "xs", color: ez.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                        (0, c.jsx)(eY.t, {
                            value: n,
                            onValueChange: eK.tEg,
                            onValueReached: eK.tEg,
                            targetTotalCounterTime: 800,
                            isRenderedWithoutLottieAnimation: !0,
                            textVariant: "body-sm/semibold",
                            textColor: "text-strong",
                            horizontalAlignment: "left",
                        }),
                    ],
                }),
                (0, c.jsx)(q.E, {
                    variant: "body-sm/medium",
                    color: "text-strong",
                    children: eC.intl.string(eC.t.UhguER),
                }),
            ],
        })
    );
}
function eQ(e) {
    let { nRewardsGranted: t, className: s } = e;
    return (0, c.jsxs)(Z.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        fullWidth: !1,
        className: s,
        "aria-label": eC.intl.formatToPlainString(eC.t["P//01n"], { discountPercent: 30, duration: t }),
        children: [
            (0, c.jsx)(eV.CheckmarkSmallIcon, { size: "md", color: ez.A.colors.ICON_FEEDBACK_POSITIVE }),
            (0, c.jsx)(q.E, {
                variant: "body-sm/medium",
                color: "text-strong",
                children: eC.intl.format(eC.t["P//01n"], { discountPercent: 30, duration: t }),
            }),
        ],
    });
}
var e$ = s(303682),
    e0 = s(758836),
    e1 = s(558992);
function e2(e) {
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
        } = (0, eH.k)({ location: "PremiumNitroHomeReferralBannerTreatment" });
    return (0, c.jsxs)("div", {
        className: u()(e1.kL, t),
        children: [
            (0, c.jsx)("div", {
                className: e1.G3,
                children: (0, c.jsx)(eF.fx, {
                    nReferralsSent: i,
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
                            (0, c.jsx)(q.E, { variant: "body-md/semibold", color: "text-strong", children: l }),
                            (0, c.jsx)(q.E, {
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
                                  (0, c.jsx)(eF.ZP, { referralSentUsers: s }),
                                  (0, c.jsx)(eq, { nRewardsGranted: o.numRewardGranted, referralRewardType: m }),
                              ],
                          })
                        : (0, c.jsx)(eF.ZP, { referralSentUsers: s, className: e1.t7 }),
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
var e3 = s(164636),
    e6 = s(676279),
    e7 = s(120692),
    e5 = s(717421),
    e8 = s(396583),
    e9 = (((i = {}).SINE = "sine"), (i.COSINE = "cosine"), i),
    e4 = (((n = {}).UP = "up"), (n.DOWN = "down"), n);
let te = (e) => {
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
        u = (0, e5.z)(
            null != i ? { from: { y: 0 }, to: { y: 1 }, config: { duration: i.duration * r }, loop: !0 } : { y: 0 },
        ),
        m = i?.path === "sine" ? Math.sin : Math.cos,
        [x, g] = (0, o.useState)(1),
        p = (0, e5.z)(
            null != s
                ? {
                      from: { scale: x > 0 ? s.startScale : s.endScale },
                      to: { scale: x > 0 ? s.endScale : s.startScale },
                      config: { duration: s.duration * r },
                      onRest: () => g((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [h, f] = (0, o.useState)(1),
        N = (0, e5.z)(
            null != t
                ? {
                      from: { blur: h > 0 ? t.startBlurRadius : t.endBlurRadius },
                      to: { blur: h > 0 ? t.endBlurRadius : t.startBlurRadius },
                      config: { duration: t.duration * r },
                      onRest: () => f((e) => -1 * e),
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
var tt = s(382168);
let ts = function (e) {
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
        blurScale: h = 1,
        animateStar: f = !0,
    } = e;
    return (0, c.jsxs)(c.Fragment, {
        children: [
            null != i &&
                (0, c.jsx)("div", {
                    className: u()(tt.nJ, i),
                    children: (0, c.jsx)(te, {
                        blurAnimationData: { startBlurRadius: 10 * h, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e9.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: e4.UP,
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
                    className: u()(tt.IN, n),
                    children: (0, c.jsx)(te, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e9.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: e4.DOWN,
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
                    className: u()(tt.Gj, a),
                    children: (0, c.jsx)(te, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e9.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: e4.DOWN,
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
                    className: u()(tt.FV, l),
                    children: (0, c.jsx)(te, {
                        blurAnimationData: { startBlurRadius: 5 * h, endBlurRadius: 0, duration: 4e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e9.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: e4.UP,
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
                    className: u()(tt.E1, r),
                    children: (0, c.jsx)(te, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * h, duration: 3e3 },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: e9.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: e4.UP,
                                      range: 50,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t || !f,
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
var ti = s(607470),
    tn = s(562915);
let ta =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    tl = function (e) {
        let {
                supportHEVCAlpha: t,
                isMotionReduced: s,
                containerVisibilityPercentage: i,
                containerClassName: n,
                assetClassName: a,
                animationSpeedScale: l = 1,
                variant: r = "default",
            } = e,
            o = "settings" === r;
        return s || o
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
                                ti.A,
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
            h = (0, e3.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
            f = (0, e6.TM)();
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(tl, {
                    supportHEVCAlpha: f,
                    isMotionReduced: h,
                    containerVisibilityPercentage: t,
                    containerClassName: s,
                    assetClassName: i,
                    animationSpeedScale: p,
                }),
                (0, c.jsx)(ts, {
                    isMotionReduced: h,
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
var tc = s(942663);
let to = function (e) {
    let { containerVisibilityPercentage: t, compact: s } = e;
    return (0, c.jsx)(tr, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: u()(tc.wG, s && tc.Vx),
        flyingWumpusAssetClassName: u()(tc.lu, s && tc.ov),
        boltContainerClassName: u()(tc.nJ, s && tc.Wc),
        hammerContainerClassName: u()(tc.Gj, s && tc.XA),
        keyContainerClassName: u()(tc.FV, s && tc.oZ),
        starContainerClassName: u()(tc.E1, s && tc.LN),
        boltAssetClassName: u()(tc.j7, s && tc.QN),
        hammerAssetClassName: u()(tc.Wv, s && tc.B9),
        keyAssetClassName: u()(tc.rs, s && tc.I1),
        starAssetClassName: u()(tc.OY, s && tc.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var td = (((a = {}).MORNING = "morning"), (a.AFTERNOON = "afternoon"), (a.EVENING = "evening"), a),
    tu = s(454273);
let tm = function (e) {
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
        { visibilityPercentageRef: m, visibilityPercentage: g } = eg(!(0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion)),
        p =
            ((t = { [td.MORNING]: eC.t["Wvc/I+"], [td.AFTERNOON]: eC.t["d+0STx"], [td.EVENING]: eC.t.CqsxKI }),
            eC.intl.string(
                t[
                    (s = new Date().getHours()) >= 5 && s < 12
                        ? td.MORNING
                        : s >= 12 && s < 17
                          ? td.AFTERNOON
                          : td.EVENING
                ],
            )),
        h = o ?? (r ? (0, c.jsx)(e2, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tu.kL, tu.Eg, i),
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
                                        (0, c.jsx)(ek, {}),
                                    ],
                                }),
                                d,
                            ],
                        }),
                        h,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: tu.y3,
                    children: (0, c.jsx)(to, { containerVisibilityPercentage: g, compact: null == h }),
                }),
            ],
        }),
    });
};
var tx = s(549926);
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
var tp = s(499126);
let th = function (e) {
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
var tf = s(682901);
function tN(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, eo.Zb)(t),
        { visibilityPercentageRef: a, visibilityPercentage: l } = eg(!(0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion));
    return (0, c.jsx)("div", {
        className: u()(tu.kL, s),
        ref: i,
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
                                (0, c.jsx)(eh, { text: eC.intl.string(eC.t.yhldRB) }),
                                (0, c.jsx)(eG, { children: eC.intl.format(eC.t.FwjP6W, { days: n }) }),
                                (0, c.jsx)("div", {
                                    className: tu.X8,
                                    children: (0, c.jsx)(q.E, {
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
                                    iconOverride: J.NitroWheelIcon,
                                    variantOverride: "expressive",
                                }),
                                (0, c.jsx)(Q.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: eC.intl.string(eC.t.Af7ye6),
                                    onClick: () => (0, en.openUserSettings)(ei.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, c.jsx)("div", { className: tu.Hk, children: (0, c.jsx)(th, { containerVisibilityPercentage: l }) }),
            ],
        }),
    });
}
function tA(e) {
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
        { visibilityPercentageRef: p, visibilityPercentage: h } = eg(!(0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion)),
        f = g ?? (m ? (0, c.jsx)(e2, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tu.kL, tu.Eg, t),
        ref: i,
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
                                    (0, c.jsx)(q.E, {
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
                                    icon: J.NitroWheelIcon,
                                    size: "md",
                                    text: eC.intl.string(eC.t.zrCzVB),
                                    onClick: () => {
                                        var e;
                                        return (
                                            (e = ev.g.CONFIRM_DISCOUNT),
                                            void (0, K.mM)(async () => {
                                                let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                    await Promise.all([
                                                        s.e(489361),
                                                        s.e(227853),
                                                        s.e(470126),
                                                        s.e(149697),
                                                        s.e(128804),
                                                        s.e(60882),
                                                        s.e(71151),
                                                        s.e(286615),
                                                        s.e(735042),
                                                        s.e(311541),
                                                        s.e(274227),
                                                        s.e(870088),
                                                        s.e(300641),
                                                        s.e(747802),
                                                        s.e(966366),
                                                        s.e(795345),
                                                        s.e(153302),
                                                        s.e(807003),
                                                        s.e(88683),
                                                        s.e(983513),
                                                        s.e(216806),
                                                        s.e(310734),
                                                        s.e(324469),
                                                        s.e(70379),
                                                        s.e(417333),
                                                        s.e(127962),
                                                        s.e(295507),
                                                        s.e(959880),
                                                        s.e(174016),
                                                        s.e(22921),
                                                        s.e(11301),
                                                        s.e(861060),
                                                        s.e(364827),
                                                        s.e(626565),
                                                        s.e(486137),
                                                        s.e(80421),
                                                        s.e(206027),
                                                        s.e(393471),
                                                        s.e(177641),
                                                        s.e(678157),
                                                        s.e(223219),
                                                        s.e(40291),
                                                        s.e(544571),
                                                        s.e(523276),
                                                        s.e(812042),
                                                        s.e(729963),
                                                        s.e(830938),
                                                        s.e(538513),
                                                        s.e(325047),
                                                        s.e(50097),
                                                        s.e(594161),
                                                        s.e(435432),
                                                        s.e(80347),
                                                        s.e(830554),
                                                    ]).then(s.bind(s, 673761));
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
                                (0, c.jsx)(eA.A, {
                                    variant: "secondary",
                                    size: "md",
                                    buttonTextOverride: eC.intl.string(eC.t["3KomGa"]),
                                }),
                            ],
                        }),
                        f,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: u()(tu.y3, tu.Xx),
                    children: (0, c.jsx)(tg, { containerVisibilityPercentage: h }),
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
        } = tE(),
        { analyticsLocations: m } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        x = (0, em.u)(X.oW.MARKETING_PAGE_BANNER),
        g = null != r && r.status === eK.Dmq.CANCELED,
        p = null;
    if (null != x) {
        let { surface: e, id: t, promotionId: s, componentType: i } = x;
        p = (0, c.jsx)(ef.x, {
            componentId: t,
            componentType: i,
            promotionId: s,
            promotionBannerMarketingComponentFields: e,
        });
    }
    let h = (0, eu.V)(),
        f = (0, ed.O)(),
        b = (0, z.U9)(f, tf.pe.TIER_2) ? tf.pe.TIER_2 : void 0,
        j = null != r && r.status !== eK.Dmq.ACCOUNT_HOLD && r.hasAnyPremiumNitro,
        E = (0, es.A)(),
        T = E.isFractionalPremiumActive && !j && null == p && !l;
    if (s) return (0, c.jsx)(tN, { fpEndsAt: E.currentEntitlementEndsAt, className: t, buttonVisibilityRef: u });
    if (!g) {
        let e = T
            ? (0, c.jsxs)("div", {
                  className: tu.UJ,
                  children: [
                      (0, c.jsx)(eb.A, { size: "md", subscriptionTier: h?.subscriptionTrial?.skuId ?? b }),
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
            shouldShowReferralProgressBar: i,
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
              shouldShowReferralProgressBar: i,
              marketingBanner: p,
          })
        : (0, c.jsx)(tm, {
              className: t,
              headingTop: n,
              showPill: a,
              buttonVisibilityRef: u,
              shouldShowReferralProgressBar: i,
              marketingBanner: p,
          });
}
let [tj, tE] = (0, ea.A)(),
    tT = function (e) {
        let { className: t, buttonVisibilityRef: s, userDiscountOffer: i, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, eo.ds)(),
            r = (0, ec.QQ)(),
            d = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            u = null != d && d.status === eK.Dmq.CANCELED && null != i,
            m = r && !u,
            g = eC.intl.string(eC.t.qYKftX),
            p = (0, eN.m)(),
            { fractionalState: h, endsAt: f } = (0, es.A)(),
            b = (0, et.Ay)(f, et.yE.CREDITS_ENDS_IN),
            j = h !== tf.xc.NONE && !l;
        j && (m = !0);
        let E = o.useMemo(() => {
                if (!j) return (0, c.jsx)(eh, { text: g });
                let e = eC.intl.format(eC.t["yR+oDD"], {
                    helpCenterLink: el.A.getArticleURL(eK.MVz.FRACTIONAL_PREMIUM_ABOUT),
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
                            children: (0, c.jsx)("div", { className: tu.eL, children: (0, c.jsx)(eh, { text: b }) }),
                        }),
                });
            }, [j, g, b]),
            T = o.useMemo(
                () => ({
                    headingTop: E,
                    showPill: m,
                    shouldShowChurnVariant: u,
                    premiumSubscription: d,
                    userDiscountOffer: i,
                    discountedPrice: n,
                    buttonVisibilityRef: s,
                }),
                [E, m, u, d, i, n, s],
            );
        return (0, c.jsx)(A.f5, {
            value: a,
            children: (0, c.jsx)(tj.Provider, {
                value: T,
                children: (0, c.jsx)(tb, { className: t, isInReverseTrial: l, shouldShowReferralProgressBar: p }),
            }),
        });
    };
var tC = s(820284),
    tI = s(742589),
    tR = s(392943),
    tv = s(521440),
    t_ = s(603202),
    ty = s(673992);
let tP = function () {
    return (0, c.jsx)(tC.A, {
        section: eK.JJy.NAVIGATION,
        children: (0, c.jsx)(tI.A, {
            className: u()(t_.TQ, ty.C$),
            transparent: !0,
            role: "navigation",
            children: (0, c.jsxs)("div", {
                className: t_.Wc,
                children: [
                    (0, c.jsxs)("div", {
                        className: ty.wk,
                        children: [
                            (0, c.jsx)(J.NitroWheelIcon, { colorClass: ty.tr }),
                            (0, c.jsx)("span", {
                                role: "img",
                                "aria-label": eC.intl.string(eC.t.Ipxkog),
                                className: ty.Ss,
                                children: (0, c.jsx)(tR.A, { color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: t_.MQ,
                        children: [
                            (0, c.jsx)(tv.l, { size: "sm", location: N.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB }),
                            (0, c.jsx)(eA.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var tS = s(325499),
    tD = s(613412),
    tM = s(885574),
    tO = s(43990),
    tk = s(993077),
    tL = s(139286),
    tU = s(872725),
    tG = s(920050),
    tw = s(51965),
    tB = s(375776),
    tH = s(727811),
    tF = s(222652),
    tV = s(831768),
    tW = s(934353);
function tz(e) {
    let { openRewardModal: t } = e,
        s = (0, tF.z)();
    if (s.kind === tF.N.SUBSCRIBE)
        return (0, c.jsxs)("div", {
            className: tW.R$,
            children: [
                (0, c.jsx)(eb.A, {
                    defaultTextOverride: s.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: tf.pe.TIER_2,
                }),
                (0, c.jsx)(Q.$, { variant: "secondary", size: "md", text: eC.intl.string(eC.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        s.claimStatus === tH.P.CLAIMED
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
                        text: s.text,
                        icon: s.icon,
                        iconPosition: s.iconPosition,
                        onClick: s.onClick,
                        disabled: s.disabled,
                        loading: s.loading,
                    }),
                    (0, c.jsx)(Q.$, {
                        variant: "secondary",
                        size: "md",
                        ...i,
                        onClick: t,
                        disabled: s.requestInProgress,
                    }),
                ],
            }),
            s.claimStatus === tH.P.CLAIM_IN_PROGRESS &&
                (0, c.jsxs)("div", {
                    className: tW.ed,
                    children: [
                        (0, c.jsx)(tM.CircleInformationIcon, { size: "xs", color: "var(--text-subtle)" }),
                        (0, c.jsx)(q.E, {
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
    let { analyticsLocations: i } = (0, A.Ay)(N.A.CROISSANT_PREMIUM_HERO_CARD),
        n = o.useCallback(() => {
            (0, K.mM)(async () => {
                let { default: e } = await Promise.all([s.e(878140), s.e(532203)]).then(s.bind(s, 15654));
                return (t) => (0, c.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, c.jsx)(tO.N, {
        theme: eK.NJ8.DARK,
        children: (e) =>
            (0, c.jsx)(A.f5, {
                value: i,
                children: (0, c.jsx)("div", {
                    className: u()(e, tW.kL),
                    children: (0, c.jsx)(tU.A, {
                        cardType: tk.s.CUSTOM,
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
                                        (0, c.jsx)(eU.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: tW.DD,
                                            children: eC.intl.string(tV.default.RGT513),
                                        }),
                                        (0, c.jsx)(q.E, {
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
var tX = s(706778),
    tK = s(7684),
    tZ = s(112992);
let tq = () =>
    (0, c.jsxs)("div", {
        className: tK.X,
        children: [
            (0, c.jsx)("div", {
                className: tK.W,
                children: (0, c.jsx)(tM.CircleInformationIcon, { size: "xxs", color: ez.A.colors.ICON_MUTED }),
            }),
            (0, c.jsx)(q.E, {
                variant: "body-xs/medium",
                color: "text-subtle",
                children: eC.intl.string(tV.default.Fs74z9),
            }),
        ],
    });
function tJ(e) {
    let { className: t, containerClassName: s, glowing: i } = e,
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
    return (0, c.jsx)(tX.S, {
        id: tG.XBOX_PREMIUM_PERK_CARD_ID,
        title: eC.intl.string(tV.default.UVL9tD),
        description: eC.intl.string(tV.default["I+IXr0"]),
        ...l,
        footerContent: r ? (0, c.jsx)(tq, {}) : void 0,
        className: t,
        containerClassName: s,
        glowing: i,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, c.jsx)("img", { src: tZ.A, alt: "Xbox Game Pass" }),
        blurTint: "#054B16",
        analyticsOptions: { thirdPartyPartner: "xbox" },
    });
}
function tQ(e) {
    let { analyticsLocations: t } = (0, A.Ay)(N.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, c.jsx)(A.f5, { value: t, children: (0, c.jsx)(tJ, { ...e }) });
}
var t$ = s(744082);
s(321073);
var t0 = s(44724),
    t1 = s(852218),
    t2 = s(945810);
let t3 = (0, t2.mj)({
        kind: "user",
        name: "2026-10-bloons-bf-deal",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    t6 = (0, t2.mj)({
        kind: "user",
        name: "2026-10-rust-bf-deal",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    t7 = new Date("2026-12-01T08:00:00Z");
var t5 = s(188275),
    t8 = s(662240),
    t9 = s(51381),
    t4 = s(261995),
    se = s(722793),
    st = s(700556),
    ss = s(821874);
function si(e) {
    let { id: t, sectionClassName: s, heading: i, beforeGrid: n, grid: a, gridClassName: l } = e,
        r = ss.Ui;
    return (0, c.jsxs)("div", {
        id: t,
        className: s,
        children: [
            i,
            n,
            null != a ? (0, c.jsx)("div", { className: u()(r, null != n && st.Jx, l), children: a }) : null,
        ],
    });
}
var sn = s(517846),
    sa = s(509434),
    sl = s(669700),
    sr = s(371794);
let sc = new Date(Date.UTC(2026, 9, 23)),
    so = (0, t2.mj)({
        kind: "user",
        name: "2026-07-call-of-duty-3pp-expired",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var sd = s(398523),
    su = s(881373),
    sm = s(555393),
    sx = s(325652),
    sg = s(52530),
    sp = s(670328);
let sh = (0, t2.mj)({
    kind: "user",
    name: "2026-09-rust-3p",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var sf = s(612413);
let sN = new Date(Date.UTC(2026, 10, 5));
var sA = s(749962),
    sb = s(691450),
    sj = s(647024),
    sE = s(524698),
    sT = s(635088),
    sC = s(679502),
    sI = s(762493);
let sR = "xgpp";
function sv(e) {
    let { card: t, backgroundAssetUrl: s, blurTint: i, glowing: n, autoClickCta: a } = e;
    return (0, c.jsx)("div", {
        className: st.JE,
        children: (0, c.jsx)(tX.S, {
            ...t,
            backgroundAssetUrl: s,
            blurTint: i ?? void 0,
            pillText: void 0,
            featured: !0,
            glowing: n,
            autoClickCta: a,
        }),
    });
}
function s_(e) {
    let { glowingSectionId: t, glowingPerkId: s } = e,
        i = (0, tS.b)("premium_subscriber_home_rewards");
    (0, t$.A)(tf.tv);
    let {
            expiredCallOfDutyCard: n,
            logitechCard: a,
            rustCard: l,
            steelseriesCard: r,
            youtubeCard: d,
            macaronCard: m,
            codeBlurpleCard: x,
        } = (function () {
            let e,
                t,
                { analyticsLocations: s } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
                i = ((e = (0, sg.eh)()), (t = (0, sg.fR)()), null != e ? e : t),
                n = (function (e) {
                    let { location: t } = e,
                        { enabled: s } = so.useConfig({ location: t });
                    return s;
                })({ location: "useHardwarePartnerPerkCards" }),
                a = (0, su.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
                l = sd.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
                r = (0, sf.mh)({ location: "useThirdPartyPartnerPerkCards" }),
                d = (function (e) {
                    let { location: t } = e,
                        { enabled: s } = sh.useConfig({ location: t });
                    return s;
                })({ location: "useThirdPartyPartnerPerkCards" }),
                u = null === (0, sm.N)(),
                m = (0, t4.fY)({ location: "useThirdPartyPartnerPerkCards" }),
                { currentDate: x, nDaysInMonth: g } = (0, o.useMemo)(() => {
                    let e = new Date();
                    return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
                }, []);
            return (0, o.useMemo)(() => {
                let e =
                        n && null == i
                            ? {
                                  id: tG.CALL_OF_DUTY_3PP_EXPIRED_CARD_ID,
                                  title: eC.intl.string(sA.default["IcD/7p"]),
                                  description: eC.intl.formatToPlainString(sA.default.hausFi, {
                                      date: new Intl.DateTimeFormat(eC.intl.currentLocale, {
                                          day: "numeric",
                                          month: "long",
                                          timeZone: "UTC",
                                      }).format(sc),
                                  }),
                                  isThirdPartyPerk: !0,
                                  phase: sx.L.EXPIRED,
                                  pillText: eC.intl.string(sA.default.fxF0Jz),
                                  caption: (0, c.jsx)("img", { src: sT.A, alt: "Call of Duty: MW4" }),
                                  backgroundAssetUrl:
                                      "https://cdn.discordapp.com/assets/content/74dd725dde373bfdbced9606d5201ed2c555fc895f4da644a8de314de6906be3.webp",
                              }
                            : null,
                    t = a
                        ? {
                              id: tG.LOGITECH_3PP_CARD_ID,
                              title: eC.intl.string(sb.default.OlObRa),
                              description: eC.intl.format(sb.default.ZGOJ8R, {
                                  discountPercent: 30,
                                  termsUrl: el.A.getArticleURL(eK.MVz.LOGITECH_PROMOTION),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              progress: x.getDate() / g,
                              ctaText: eC.intl.string(eC.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, sp.P)({
                                      partnerIds: [t1.XY],
                                      title: eC.intl.string(sb.default["2I7nK+"]),
                                      subtitle: eC.intl.format(sb.default.W8jOD0, {
                                          termsUrl: el.A.getArticleURL(eK.MVz.LOGITECH_PROMOTION),
                                      }),
                                      analyticsLocations: s,
                                  }),
                              blurTint: "#2E213D",
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                              caption: (0, c.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                                  alt: "Logitech",
                              }),
                              analyticsOptions: { thirdPartyPartner: t1.XY },
                              ctaDisabled: u,
                              ctaLoading: u,
                          }
                        : null,
                    o = l
                        ? {
                              id: tG.RECURRING_3P_PROMOTIONS_CARD_ID,
                              title: eC.intl.string(eC.t.m7PucM),
                              description: eC.intl.format(eC.t["1Zw6xL"], {}),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              caption: (0, c.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                              progress: x.getDate() / g,
                              ctaText: eC.intl.string(eC.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, sp.P)({
                                      partnerIds: [t1.KS],
                                      title: eC.intl.string(eC.t["7ioAjs"]),
                                      subtitle: eC.intl.format(eC.t.LOYRxB, {
                                          helpCenterLink: el.A.getArticleURL(eK.MVz.RECURRING_PROMOTION),
                                      }),
                                      analyticsLocations: s,
                                  }),
                              blurTint: "#2E213D",
                              analyticsOptions: { thirdPartyPartner: t1.KS },
                              ctaDisabled: u,
                              ctaLoading: u,
                          }
                        : null;
                return {
                    expiredCallOfDutyCard: e,
                    logitechCard: t,
                    rustCard: d
                        ? {
                              id: tG.RUST_3PP_CARD_ID,
                              title: eC.intl.string(sj.default.gQ1ctg),
                              description: eC.intl.format(sj.default.p7LH43, {
                                  endDate: new Intl.DateTimeFormat(eC.intl.currentLocale, {
                                      day: "numeric",
                                      month: "short",
                                      timeZone: "UTC",
                                  }).format(sN),
                                  termsUrl: (0, t5.X3)(t5.IG),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              pillText: eC.intl.string(eC.t.y2b7CA),
                              caption: (0, c.jsx)("img", {
                                  src: (0, sr.YE)(t5.IG, "1499479228243251242", 128),
                                  alt: "Rust",
                              }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/b67b65e666d1350c52ff2abab5ac4eb205fa6545f63665aef16beeaa0efef060.webp",
                              blurTint: "#2E213D",
                              ctaText: eC.intl.string(sj.default.NmBRGV),
                              ctaIcon: sa.LinkExternalSmallIcon,
                              ctaIconPosition: "end",
                              onCtaClick: () => (0, t0.default)({ applicationId: t5.IG }),
                              analyticsOptions: { thirdPartyPartner: "rust" },
                              ctaDisabled: u,
                              ctaLoading: u,
                          }
                        : null,
                    steelseriesCard: o,
                    youtubeCard: r
                        ? {
                              id: tG.YOUTUBE_3PP_CARD_ID,
                              title: eC.intl.string(sE.default["BdIVB+"]),
                              description: eC.intl.format(sE.default["3jY5i3"], {
                                  helpCenterUrl: el.A.getArticleURL(eK.MVz.YOUTUBE_PROMOTION),
                              }),
                              isThirdPartyPerk: !0,
                              subscriptionRequired: !0,
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/e07fd53d33f374f567964ff5b7843f09bc6943288891cfed6e573df04ba9741c.webp",
                              blurTint: "#18181C",
                              caption: (0, c.jsx)("img", { src: sC.A, alt: "YouTube Premium" }),
                              ctaText: eC.intl.string(sA.default.fcopjf),
                              onCtaClick: () =>
                                  (0, sp.P)({
                                      partnerIds: [t1.NC],
                                      analyticsLocations: s,
                                      title: eC.intl.string(sE.default.TDZUui),
                                      subtitle: eC.intl.format(sE.default.BTLkvw, {
                                          helpCenterUrl: el.A.getArticleURL(eK.MVz.YOUTUBE_PROMOTION),
                                      }),
                                      onClose: () => {
                                          sl.Ay.fireSurveyAction(sn.w.YOUTUBE_3PP_MODAL_DISMISSED);
                                      },
                                  }),
                              analyticsOptions: { thirdPartyPartner: t1.NC },
                              ctaDisabled: u,
                              ctaLoading: u,
                          }
                        : null,
                    macaronCard: m,
                    codeBlurpleCard: i,
                };
            }, [m, i, s, n, x, a, g, l, d, r, u]);
        })(),
        g = (function () {
            let { enabled: e } = t3.useConfig({ location: "useBfDealPerkCards" }),
                { enabled: t } = t6.useConfig({ location: "useBfDealPerkCards" }),
                [s, i] = (0, o.useState)(() => Date.now() >= t7.getTime());
            return (
                (0, e8.A)(() => i(Date.now() >= t7.getTime()), s ? null : 1e3),
                (0, o.useMemo)(() => {
                    if (s) return [];
                    let i = {
                            pillText: eC.intl.string(t8.default["/3OubH"]),
                            primaryAssetClassName: t9.b,
                            backgroundAssetUrl:
                                "https://cdn.discordapp.com/assets/content/30e0a852cb8971330e230eb2f8ab13ba6581186581bba0eef71a872d1ac0fe21.webp",
                            blurTint: "#28306F",
                        },
                        n = new Intl.DateTimeFormat(eC.intl.currentLocale, {
                            day: "numeric",
                            month: "short",
                            timeZone: "America/Los_Angeles",
                        }).format(new Date(t7.getTime() - 1)),
                        a = [];
                    return (
                        e &&
                            a.push({
                                ...i,
                                id: tG.BLOONS_BF_DEAL_CARD_ID,
                                title: eC.intl.string(t8.default.NF9Ryp),
                                description: eC.intl.formatToPlainString(t8.default["h+Us1O"], { endDate: n }),
                                caption: (0, c.jsx)("img", {
                                    src: "https://cdn.discordapp.com/assets/content/f185d9d0cb340031712ecd4cee958428dc6097958f949e0699d187fa47f11555.png",
                                    alt: "Bloons TD 6",
                                }),
                                primaryAsset:
                                    "https://cdn.discordapp.com/assets/content/ecbec08e7405e277e4e71c2309b3b5579285aac7c30e2f7f554789b8e9ab1c10.webp",
                                ctaText: eC.intl.string(t8.default.ywzvyl),
                                onCtaClick: () => (0, t0.default)({ applicationId: t5.S3 }),
                                analyticsOptions: { thirdPartyPartner: "bloons" },
                            }),
                        t &&
                            a.push({
                                ...i,
                                id: tG.RUST_BF_DEAL_CARD_ID,
                                title: eC.intl.string(t8.default.zrFadr),
                                description: eC.intl.formatToPlainString(t8.default.rEq6H1, { endDate: n }),
                                caption: (0, c.jsx)("img", {
                                    src: "https://cdn.discordapp.com/assets/content/9e70ce7e67a94bd3cae677a9e3db28ff52134461ced6a3f32c66468cd20270b8.png",
                                    alt: "Rust",
                                }),
                                primaryAsset:
                                    "https://cdn.discordapp.com/assets/content/445b4bea97235a430ab723083ec215cc5c30e3a0981265202aadb7b430f26fe1.webp",
                                ctaText: eC.intl.string(t8.default.LlyBqh),
                                onCtaClick: () => (0, t0.default)({ applicationId: t5.IG }),
                                analyticsOptions: { thirdPartyPartner: "rust" },
                            }),
                        a
                    );
                }, [e, t, s])
            );
        })(),
        { phase: p } = (0, t4.vc)({ location: "NitroRewardsSection" }),
        h =
            null != m
                ? {
                      card: m,
                      backgroundAssetUrl:
                          p === se.H.PHASE_ONE
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
        f = null != h ? h.card.id : null,
        b = i && null == h,
        j =
            i ||
            g.length > 0 ||
            null != n ||
            null != a ||
            null != l ||
            null != r ||
            null != x ||
            (null != m && m.id !== f) ||
            (null != d && d.id !== f),
        E = null;
    return (null != h
        ? (E = (0, c.jsx)(sv, {
              card: h.card,
              backgroundAssetUrl: h.backgroundAssetUrl,
              blurTint: h.blurTint,
              glowing: t === sR || s === h.card.id,
              autoClickCta: s === h.card.id,
          }))
        : b && (E = (0, c.jsx)("div", { className: st.JE, children: (0, c.jsx)(tY, { glowing: t === sR }) })),
    null != E || j)
        ? (0, c.jsx)(si, {
              id: sR,
              sectionClassName: u()(sI.uW, sI.Uv, sI.qr),
              heading: (0, c.jsx)(eU.D, {
                  variant: "nitro-sm",
                  className: u()(ss.R_, st.U6),
                  children: eC.intl.string(eC.t.NG1e6l),
              }),
              beforeGrid: E,
              grid: j
                  ? (0, c.jsxs)(c.Fragment, {
                        children: [
                            g.map((e) =>
                                (0, c.jsx)(tX.S, { ...e, containerClassName: ss.Nr, glowing: s === e.id }, e.id),
                            ),
                            null != x && (0, c.jsx)(tX.S, { ...x, containerClassName: ss.Nr, glowing: s === x.id }),
                            null != m &&
                                m.id !== f &&
                                (0, c.jsx)(tX.S, {
                                    ...m,
                                    containerClassName: ss.Nr,
                                    glowing: s === m.id,
                                    autoClickCta: s === m.id,
                                }),
                            null != d &&
                                d.id !== f &&
                                (0, c.jsx)(tX.S, {
                                    ...d,
                                    containerClassName: ss.Nr,
                                    glowing: s === d.id,
                                    autoClickCta: s === d.id,
                                }),
                            null != l && (0, c.jsx)(tX.S, { ...l, containerClassName: ss.Nr, glowing: s === l.id }),
                            i &&
                                (0, c.jsx)(tQ, {
                                    containerClassName: ss.Nr,
                                    glowing: s === tG.XBOX_PREMIUM_PERK_CARD_ID,
                                }),
                            null != a && (0, c.jsx)(tX.S, { ...a, containerClassName: ss.Nr, glowing: s === a.id }),
                            null != r && (0, c.jsx)(tX.S, { ...r, containerClassName: ss.Nr, glowing: s === r.id }),
                            null != n && (0, c.jsx)(tX.S, { ...n, containerClassName: ss.Nr, glowing: s === n.id }),
                        ],
                    })
                  : null,
          })
        : null;
}
var sy = s(313133),
    sP = s(67423);
let sS = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: l } = (0, A.Ay)(N.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        r = (0, e5.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsx)(e7.animated.div, {
        className: u()(sy.iE, { [sy.q4]: !t }),
        style: r,
        children: (0, c.jsxs)("div", {
            className: sy.iJ,
            children: [
                (0, c.jsx)("img", { alt: "", src: sP, className: sy.oU }),
                (0, c.jsxs)("div", {
                    className: sy.iQ,
                    children: [
                        (0, c.jsx)(eU.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            children: eC.intl.format(eC.t["3yZP0G"], { percent: n.discount.amount }),
                        }),
                        (0, c.jsx)(q.E, {
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
                    icon: J.NitroWheelIcon,
                    size: "md",
                    text: eC.intl.string(eC.t.zrCzVB),
                    onClick: () =>
                        void (0, K.mM)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                s.e(489361),
                                s.e(227853),
                                s.e(470126),
                                s.e(149697),
                                s.e(128804),
                                s.e(60882),
                                s.e(71151),
                                s.e(286615),
                                s.e(735042),
                                s.e(311541),
                                s.e(274227),
                                s.e(870088),
                                s.e(300641),
                                s.e(747802),
                                s.e(966366),
                                s.e(795345),
                                s.e(153302),
                                s.e(807003),
                                s.e(88683),
                                s.e(983513),
                                s.e(216806),
                                s.e(310734),
                                s.e(324469),
                                s.e(70379),
                                s.e(417333),
                                s.e(127962),
                                s.e(295507),
                                s.e(959880),
                                s.e(174016),
                                s.e(22921),
                                s.e(11301),
                                s.e(861060),
                                s.e(364827),
                                s.e(626565),
                                s.e(486137),
                                s.e(80421),
                                s.e(206027),
                                s.e(393471),
                                s.e(177641),
                                s.e(678157),
                                s.e(223219),
                                s.e(40291),
                                s.e(544571),
                                s.e(523276),
                                s.e(812042),
                                s.e(729963),
                                s.e(830938),
                                s.e(538513),
                                s.e(325047),
                                s.e(50097),
                                s.e(594161),
                                s.e(435432),
                                s.e(80347),
                                s.e(830554),
                            ]).then(s.bind(s, 673761));
                            return (t) =>
                                (0, c.jsx)(e, {
                                    ...t,
                                    premiumSubscription: i,
                                    analyticsLocations: l,
                                    initialStep: ev.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var sD = s(761508),
    sM = s(151869),
    sO = s(62617),
    sk = s(387103);
function sL(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sO.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: sk.A,
        className: (0, sO.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
let sU =
    "https://cdn.discordapp.com/assets/content/a89ff8a07704142beff857453a6c8aa15400cf711f8fe3cbbfa7ff4f0b2a334f.svg";
function sG(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sO.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: sU,
        className: (0, sO.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sw = s(93712);
function sB(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sO.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: sw.A,
        className: (0, sO.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sH = s(345394);
function sF(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sO.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: sH.A,
        className: (0, sO.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sV = s(78211);
function sW(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sO.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/2d617cf5c40353ca4ec6ac76e1a48f6781439c18db06b8cfab0f194358abe555.svg",
        className: (0, sO.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sz = s(95278);
function sY(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sO.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/8a9a80f2b924da025612a160c7dc74c5e0fe675a90e3424737e6c5927739a6d0.svg",
        className: (0, sO.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sX(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sO.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/3ba8fce33a4733cdbadc10ac378d1b5523b0c0961e7edc74372c159e3009727f.svg",
        className: (0, sO.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sK = s(996682);
function sZ(e) {
    let { color: t = ez.A.colors.ICON_STRONG, "aria-label": s, "aria-hidden": i, role: n, width: a, height: l } = e,
        r = o.useMemo(() => (0, sO.H)({ width: a, height: l, intrinsicWidth: 100, intrinsicHeight: 80 }), [a, l]);
    return (0, c.jsxs)("svg", {
        ...(0, sK.A)({ "aria-label": s, "aria-hidden": i, role: n }),
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
function sq(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sO.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/1314d17fb23c01337cac4bfdaaff48c5e6ac1f515b0647f0964922b988f095c1.svg",
        className: (0, sO.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sJ = s(78701);
function sQ(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sO.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: sJ.A,
        className: (0, sO.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var s$ = s(462887),
    s0 = s(736653),
    s1 = s(259065),
    s2 = s(206835),
    s3 = s(591179),
    s6 = s(462463),
    s7 = s(219882),
    s5 = s(105909),
    s8 = s(208223),
    s9 = s(696292),
    s4 = s(914313),
    ie = s(321538),
    it = s(892227),
    is = s(81466),
    ii = s(17268),
    ia = s(749012);
let il = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, B.F)();
    if (!e || null == t) return null;
    let s =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, it.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, c.jsxs)("div", {
        className: ia.kL,
        children: [
            null != s &&
                (0, c.jsxs)("div", {
                    className: ia.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: ia.Pf,
                            children: [
                                (0, c.jsx)(is.CalendarIcon, { size: "sm", color: ez.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(q.E, {
                                    variant: "body-sm/medium",
                                    color: "text-default",
                                    children: eC.intl.string(ii.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, c.jsx)(q.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: eC.intl.format(ii.default.xedPIb, { days: s }),
                        }),
                    ],
                }),
            null != s && t.total_rewarded_from_program > 0 && (0, c.jsx)("div", { className: ia.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, c.jsxs)("div", {
                    className: ia.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: ia.Pf,
                            children: [
                                (0, c.jsx)(eW.OrbsIcon, { size: "sm", color: ez.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(q.E, {
                                    variant: "body-sm/medium",
                                    color: "text-default",
                                    children: eC.intl.string(ii.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, c.jsx)(q.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: eC.intl.format(ii.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var ir = s(221596),
    ic = s(799544);
function io() {
    let { shouldShowBonusOrbsUX: e, multiplier: t } = (0, s4.lk)(ir.rE.NITRO_HOME_MARKETING),
        { isEligible: s, programReward: i } = (0, B.F)();
    return {
        nitroOrbsRewardsCard: (0, o.useMemo)(
            () =>
                !s || null == i || null == i.reward_amount || i.reward_amount <= 0
                    ? null
                    : {
                          id: tG.NITRO_ORBS_REWARDS_CARD_ID,
                          title: eC.intl.string(ii.default.hx5AFp),
                          description: eC.intl.format(ii.default.wq3CF2, { orbsCount: i.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(ic.lH, ic.yK),
                          footerContent: (0, c.jsx)(il, {}),
                          ctaText: eC.intl.string(ii.default.BxjHiu),
                          onCtaClick: () => (0, y.pX)(eK.BVt.COLLECTIBLES_SHOP_WITH_TAB(e0.G2.ORBS)),
                      },
            [s, i],
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
                          onCtaClick: () => (0, ie.mA)({ fromContent: s9.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: ic.Nf,
                      }
                    : null,
            [e, t],
        ),
    };
}
var id = s(975807),
    iu = s(95035),
    im = s(728666),
    ix = s(88001),
    ig = s(107198),
    ip = s(817577);
function ih() {
    (0, id.A)(ix.TE);
}
function iN(e) {
    let t = (0, im.O9)(),
        i = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        n = i?.hasActiveTrial ?? !1,
        a = (0, o.useCallback)(() => {
            n
                ? (0, K.mM)(async () => {
                      let { default: e } = await s.e(499709).then(s.bind(s, 516044));
                      return (t) => (0, c.jsx)(e, { ...t });
                  })
                : (0, _.A)({
                      subscriptionTier: tf.pe.TIER_2,
                      initialPlanId: tf.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, o.useMemo)(
        () =>
            t
                ? {
                      id: tG.PREMIUM_GROUP_CARD_ID,
                      title: eC.intl.string(ig.default.YkvksF),
                      description: (0, c.jsxs)(c.Fragment, {
                          children: [
                              eC.intl.formatToPlainString(ig.default.JlyGQj, {
                                  totalSeats: 6,
                                  premiumGroupProductName: (0, ix.DP)(),
                              }),
                              (0, c.jsx)("div", {
                                  className: ic.LF,
                                  children: (0, c.jsx)(iu.A, {
                                      onClick: ih,
                                      children: eC.intl.string(ig.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: eC.intl.string(eC.t.oW0eUd),
                      primaryAsset: ip,
                      ctaIcon: J.NitroWheelIcon,
                      ctaIconPosition: "start",
                      ctaText: eC.intl.string(eC.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var iA = s(562819),
    ib = s(793943);
function ij(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sO.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/ac90213f9a3f3f98cf59e4facc50679f1f12906a230249dfb9d42266f7fa2034.svg",
        className: (0, sO.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var iE = s(818349),
    iT = s(419490),
    iC = s(898105),
    iI = s(572164),
    iR = s(271597),
    iv = s(815460),
    i_ = s(683825);
function iy() {
    "auto" === (0, iE.r)((0, iI.T)(), iT.Ay.getEnableAutoclipping())
        ? (0, iR.p)()
        : (0, iv.C)({ variant: "mode_picker", source: "nitro_home_perk_card" });
}
var iP = s(757036),
    iS = s(621488),
    iD = s(70283),
    iM = s(643056),
    iO = s(470739);
let ik = (0, t2.mj)({
    name: "2026-10-nitro-home-badge-directory",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var iL = s(655752),
    iU = s(764231),
    iG = s(627380),
    iw = s(30084),
    iB = s(814014),
    iH = s(714206);
let iF =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    iV =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    iW =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function iz() {
    let e,
        t,
        s,
        i,
        n,
        a,
        l,
        r,
        d,
        m,
        g,
        p,
        h,
        f,
        b,
        j,
        { analyticsLocations: E } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
        T = (0, s3.X)("useWhatsNewPerkCards"),
        C = (0, s6.A)({ analyticsLocations: E }),
        I = (0, o.useCallback)(() => {
            (0, en.openUserSettings)(ei.X.PROFILE_PANEL, { analyticsLocations: E }, () =>
                (0, s1.L)({ analyticsLocations: E }),
            );
        }, [E]),
        R = (0, o.useCallback)(() => {
            (0, en.openUserSettings)(ei.X.PROFILE_PANEL, { analyticsLocations: E }, () =>
                (0, iA.L)({ analyticsLocations: E }),
            );
        }, [E]),
        v = (0, o.useCallback)(() => {
            (0, en.openUserSettings)(ei.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        _ =
            ((e = (0, x.bG)([S.default], () => S.default.getCurrentUser())),
            (t = e?.isFractionalPremiumWithNoStandardSub() ?? !1),
            (s = (function (e) {
                let { location: t } = e;
                return ik.useConfig({ location: t }).enabled;
            })({ location: "useTenureBadgePerkCard" })),
            (i = (0, iM.d)({ location: "useTenureBadgePerkCard" })),
            (n = (0, s5.$F)()),
            (a = (0, s5.Xb)()),
            (l = n?.status === s5.Wo.UPCOMING || t),
            (r = n?.status === s5.Wo.WITHHELD),
            (d = l || r),
            (m = (0, s8.N)(n?.id)),
            (g = (function () {
                let e = (0, s5.$F)(),
                    t = (0, iL.P)(),
                    s = (0, s5.Xb)();
                if (null == e || null == t || null == s || e.status === s5.Wo.WITHHELD) return null;
                let i = eE()(),
                    n = eE()(s),
                    a = t.tenureReqNumMonths,
                    l = n.clone(),
                    r = n.clone().add(a, "months").diff(l);
                return Math.max(0, Math.min(1, (i.diff(l) - 864e5) / r));
            })()),
            (p = (0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion) && !d),
            (h = (0, iG.t)()),
            (f = (0, iL.P)()),
            (0, o.useMemo)(() => {
                let e,
                    l = null != f ? eC.intl.string(f.nameUnformattedNitro) : void 0;
                null == n
                    ? t && (e = (0, iU.T)(tf.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (e =
                          n.status === s5.Wo.UPCOMING
                              ? eC.intl.formatToPlainString(eC.t.a1eKDi, { days: h?.days ?? 0 })
                              : n.status === s5.Wo.WITHHELD
                                ? ((0, iU.T)(n.id, n.tenureReqNumMonths) ?? void 0)
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
                                  })(h, l) ??
                                  (0, iU.T)(n.id, n.tenureReqNumMonths) ??
                                  void 0));
                let r = null;
                return (
                    null != m ? (r = d || p ? m.standard : m.ambientLarge) : t && (r = iH),
                    {
                        id: tG.TENURE_BADGE_CARD_ID,
                        title:
                            null != n ? eC.intl.string(n.nameUnformattedNitro) : t ? eC.intl.string(eC.t.tx9Fvw) : "",
                        pillText: eC.intl.string(eC.t["jyYgZ+"]),
                        primaryAsset: r,
                        primaryAssetClassName: u()(iB.pq, { [iB.rX]: d, [iB.kE]: p }),
                        caption: null != a ? eC.intl.formatToPlainString(eC.t.Hu4jfi, { date: new Date(a) }) : void 0,
                        description: e,
                        subscriptionRequired: !0,
                        progress: g ?? void 0,
                        ctaText: eC.intl.string(eC.t.jVcuVY),
                        onCtaClick: () => {
                            s && i
                                ? (0, iO.openBadgeDirectoryModal)({ initialBadgeId: iD.$.PREMIUM_TENURE })
                                : (0, iw.D)({ analyticsLocations: E });
                        },
                    }
                );
            }, [n, m, d, p, a, g, t, h, f, E, s, i])),
        { nitroOrbsRewardsCard: y, questOrbMultiplierCard: P } = io(),
        D =
            ((b = (0, iP.L)(tf.PremiumTypes.TIER_2)),
            (j = (0, s7.rX)()),
            (0, o.useMemo)(
                () =>
                    b && j
                        ? {
                              id: tG.NITRO_FILE_UPLOAD_WHATS_NEW_CARD_ID,
                              title: eC.intl.string(iS.default["/cV3ka"]),
                              description: eC.intl.string(iS.default.H523FI),
                              primaryAsset: (0, c.jsx)(sV.I, { alt: "", ariaHidden: !0 }),
                          }
                        : null,
                [b, j],
            )),
        M = iN(E),
        O = (function () {
            let { enabled: e } = (0, iC.r)("useAutoclipsPerkCard");
            return (0, o.useMemo)(
                () =>
                    e
                        ? {
                              id: tG.AUTOCLIPS_CARD_ID,
                              title: eC.intl.string(i_.default["5VA1HL"]),
                              description: eC.intl.string(i_.default.TvE3md),
                              primaryAsset: (0, c.jsx)(ij, { alt: "", ariaHidden: !0 }),
                              ctaText: eC.intl.string(eC.t.RzWDqY),
                              onCtaClick: iy,
                          }
                        : null,
                [e],
            );
        })();
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
                    primaryAsset: iF,
                },
                {
                    id: tG.CLIENT_THEMES_CARD_ID,
                    title: eC.intl.string(eC.t.acc6h6),
                    description: eC.intl.formatToPlainString(eC.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: iW,
                    ctaText: eC.intl.string(eC.t.jVcuVY),
                    onCtaClick: () => {
                        (0, ib.nf)(ib.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: tG.PERMADECOS_CARD_ID,
                    title: eC.intl.string(eC.t.L14NZN),
                    description: eC.intl.string(eC.t.eCZkAI),
                    primaryAsset: (0, c.jsx)(sQ, { alt: "", ariaHidden: !0 }),
                    ctaText: eC.intl.string(eC.t.jVcuVY),
                    onCtaClick: T ? C : R,
                },
                {
                    id: tG.CUSTOM_APP_ICONS_CARD_ID,
                    title: eC.intl.string(eC.t["GU+wqh"]),
                    description: eC.intl.string(eC.t["1uPk1Z"]),
                    primaryAsset: iV,
                    ctaText: eC.intl.string(eC.t.y9TxXV),
                    onCtaClick: v,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            s = t ? 5 : 6;
        return (
            e.splice(+!!t, 0, _),
            null != D && e.splice(2, 0, D),
            null != O && e.splice(2, 0, O),
            e.length > s && e.splice(s, e.length - s),
            e
        );
    }, [_, y, P, D, O, M, I, v, R, C, T]);
}
var iY = s(355097);
let iX = "/assets/1eb1b74667b4c0f0.svg",
    iK = "/assets/983b60e4fcaf973b.svg";
var iZ =
    (((l = {}).BEST_OF_NITRO = "bestof"),
    (l.APPEARANCE_STYLE = "appearance"),
    (l.UPGRADES = "upgrades"),
    (l.VIP_EXTRAS = "vip"),
    l);
let iq = [
    { id: "bestof", label: () => eC.intl.string(eC.t.q1u7nQ) },
    { id: "appearance", label: () => eC.intl.string(eC.t.CUnZkZ) },
    { id: "upgrades", label: () => eC.intl.string(eC.t.KC5q8v) },
    { id: "vip", label: () => eC.intl.string(eC.t.DjEAcv) },
];
var iJ = s(18290);
function iQ(e) {
    return e.id;
}
function i$(e) {
    let { glowingPerkId: t = null } = e,
        s = (function () {
            let e = (0, s0.DP)(),
                t = (0, s3.X)("useFavoritesPerkCards"),
                s = (0, s5.Lh)(),
                i = (0, s8.N)(s)?.standard ?? null,
                { analyticsLocations: n } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, s2.A)({ scrollPosition: iY._F.TRY_IT_OUT, analyticsLocations: n }),
                l = (0, o.useCallback)(() => {
                    (0, en.openUserSettings)(ei.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: n });
                }, [n]),
                r = (0, o.useCallback)(() => {
                    (0, en.openUserSettings)(ei.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: n });
                }, [n]),
                d = (0, o.useCallback)(() => {
                    (0, en.openUserSettings)(ei.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: n });
                }, [n]),
                u = (0, o.useCallback)(() => {
                    (0, y.pX)(eK.BVt.COLLECTIBLES_SHOP);
                }, []),
                m = (0, o.useCallback)(() => {
                    (0, en.openUserSettings)(ei.X.SOUNDBOARD_CATEGORY, { analyticsLocations: n });
                }, [n]),
                x = (0, s6.A)({ analyticsLocations: n }),
                g = (0, o.useCallback)(() => {
                    (0, en.openUserSettings)(ei.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, s1.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                p = iz(),
                h = (0, o.useMemo)(() => p.map((e) => e?.id), [p]),
                { nitroOrbsRewardsCard: f, questOrbMultiplierCard: b } = io(),
                j = iN(n),
                E = (0, o.useMemo)(
                    () => [
                        {
                            id: tG.SERVER_BOOSTS_CARD_ID,
                            title: eC.intl.formatToPlainString(eC.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: eC.intl.formatToPlainString(eC.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: eC.intl.string(eC.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: (0, c.jsx)(sL, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != j ? { ...j, categories: ["bestof"] } : null,
                        {
                            id: tG.PROFILES_CARD_ID,
                            title: eC.intl.string(eC.t.xDRab3),
                            description: eC.intl.string(eC.t.yn6fWA),
                            ctaText: eC.intl.string(eC.t.jVcuVY),
                            onCtaClick: t ? x : a,
                            primaryAsset: (0, c.jsx)(sG, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tG.HD_VIDEO_CARD_ID,
                            title: eC.intl.string(eC.t["/mQ5gg"]),
                            description: eC.intl.string(eC.t["7WwAXh"]),
                            primaryAsset: (0, c.jsx)(sB, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tG.CLIENT_THEMES_CARD_ID,
                            title: eC.intl.string(eC.t.acc6h6),
                            description: eC.intl.formatToPlainString(eC.t.WQazjs, { themeCount: 20 }),
                            ctaText: eC.intl.string(eC.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: iW,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tG.MORE_EMOJIS_CARD_ID,
                            title: eC.intl.string(eC.t.D8vIDT),
                            description: eC.intl.string(eC.t.DRMecB),
                            primaryAsset: (0, c.jsx)(sF, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tG.LARGE_UPLOADS_CARD_ID,
                            title: eC.intl.string(eC.t.nL1WZV),
                            description: (0, s7.M6)({
                                legacyCopy: eC.intl.formatToPlainString(eC.t.k8LC1w, { maxSizeMb: 500 }),
                                rolloutCopy: eC.intl.formatToPlainString(eC.t.teOTfv, {
                                    maxFileSize: (0, er.EJ)(tf.PremiumTypes.TIER_2, { useSpace: !1 }),
                                }),
                            }),
                            primaryAsset: (0, c.jsx)(sV.I, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tG.CUSTOM_APP_ICONS_CARD_ID,
                            title: eC.intl.string(eC.t["GU+wqh"]),
                            description: eC.intl.string(eC.t["1uPk1Z"]),
                            ctaText: eC.intl.string(eC.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: iV,
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
                            primaryAsset: iF,
                            categories: ["appearance"],
                        },
                        {
                            id: tG.CUSTOM_SOUNDS_CARD_ID,
                            title: eC.intl.string(eC.t["Cu/oFd"]),
                            description: eC.intl.string(eC.t.czj2aa),
                            primaryAsset: (0, c.jsx)(sW, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tG.SPECIAL_STICKERS_CARD_ID,
                            title: eC.intl.string(eC.t.MQoVeb),
                            description: eC.intl.string(eC.t.HGCLZX),
                            primaryAsset: (0, c.jsx)("div", {
                                className: ic.Uc,
                                children: (0, c.jsx)(sz.n, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tG.SUPER_REACTIONS_CARD_ID,
                            title: eC.intl.string(eC.t.qERvAA),
                            description: eC.intl.string(eC.t.WkUWzx),
                            primaryAsset: (0, c.jsx)(sY, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tG.VIDEO_BACKGROUNDS_CARD_ID,
                            title: eC.intl.string(eC.t.ssVDYQ),
                            description: eC.intl.string(eC.t.aUSRMa),
                            primaryAsset: (0, s$.M)(e) ? iX : iK,
                            categories: ["upgrades"],
                        },
                        {
                            id: tG.EARLY_ACCESS_CARD_ID,
                            title: eC.intl.string(eC.t["g/KRY6"]),
                            description: eC.intl.string(eC.t.JzAmJc),
                            primaryAsset: (0, c.jsx)(sX, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tG.BADGE_CARD_ID,
                            title: eC.intl.string(eC.t.Bn3CtB),
                            description: eC.intl.string(eC.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, c.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, c.jsx)(sZ, { color: ez.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tG.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: eC.intl.string(eC.t["MTD+7w"]),
                            description: eC.intl.string(eC.t.Bhs0s6),
                            ctaText: eC.intl.string(eC.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, c.jsx)(sq, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != f ? { ...f, categories: ["vip"] } : null,
                        null != b ? { ...b, categories: ["vip"] } : null,
                        {
                            id: tG.PERMADECOS_CARD_ID,
                            title: eC.intl.string(eC.t.L14NZN),
                            description: eC.intl.string(eC.t.eCZkAI),
                            primaryAsset: (0, c.jsx)(sQ, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, f, b, j, a, l, r, d, u, m, g, x, t],
                );
            return (0, o.useMemo)(() => E.filter((e) => null != e && !h.includes(e.id)), [E, h]);
        })(),
        i = null != t ? s.find((e) => e?.id === t) : null,
        [n, a] = (0, o.useState)(i?.categories[0] ?? iZ.BEST_OF_NITRO),
        l = iq.find((e) => e.id === n)?.label(),
        r = s.filter((e) => null != e && e.categories.includes(n));
    return (0, c.jsxs)("div", {
        className: iJ.uW,
        children: [
            (0, c.jsx)(eU.D, { variant: "nitro-sm", children: eC.intl.string(eC.t["Uh3+CA"]) }),
            (0, c.jsx)(sD.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: iJ.Lq,
                "aria-label": eC.intl.string(eC.t["Uh3+CA"]),
                children: iq.map((e) =>
                    (0, c.jsx)(sD.V.Item, { id: e.id, className: iJ.IC, children: e.label() }, e.id),
                ),
            }),
            (0, c.jsx)(
                sM.A,
                {
                    "aria-label": eC.intl.formatToPlainString(eC.t.akg5nT, { filterName: l }),
                    gap: 20,
                    className: iJ.jG,
                    items: r,
                    getItemKey: iQ,
                    renderItem: (e, s) =>
                        (0, c.jsx)(tX.S, { ...e, glowing: t === e.id, containerClassName: iJ.Ui, listItemProps: s }),
                },
                n,
            ),
        ],
    });
}
var i0 = s(72979);
let i1 = function (e) {
    let { className: t } = e,
        s = (0, s0.DP)();
    return (0, c.jsx)("img", {
        className: u()(i0.D, t),
        src: (0, s$.M)(s) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var i2 = s(684251);
let i3 = function (e) {
    let { children: t } = e;
    return (0, c.jsxs)("div", {
        className: u()(i2.kL, i2.Gd, i2.Eg),
        children: [(0, c.jsx)(i1, {}), (0, c.jsx)(tP, {}), t],
    });
};
function i6(e) {
    let { glowingPerkId: t = null } = e,
        s = iz();
    return (0, c.jsx)(si, {
        sectionClassName: ss.uW,
        heading: (0, c.jsx)(eU.D, { variant: "nitro-sm", className: ss.R_, children: eC.intl.string(eC.t.Aw5DRm) }),
        grid: (0, c.jsx)(c.Fragment, {
            children: s.map((e, s) => {
                if (null == e) return;
                let i = 0 === s && !0 === e.featured,
                    n = t === e.id;
                return (0, c.jsx)(
                    tX.S,
                    {
                        ...e,
                        glowing: n,
                        autoClickCta: n && e.id === tG.YOUTUBE_3PP_CARD_ID,
                        featured: i,
                        containerClassName: u()(ss.Nr, { [ss.Nq]: i }),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function i7(e, t, s, i) {
    !(function (e, t, s) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            n = arguments.length > 4 ? arguments[4] : void 0,
            a = (0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
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
var i5 = s(92737);
let i8 = "/assets/cd2be35d285d4675.svg",
    i9 = (e) => {
        let { userId: t } = e,
            s = (0, m.zy)();
        (o.useEffect(() => {
            ((0, w.Ay)(), null != t && (0, F.A)(t));
        }, [t]),
            o.useEffect(() => {
                E(!0);
            }, []),
            (0, W.j)(),
            (0, v.P)(R));
        let i = o.useRef(null),
            n = o.useRef(null),
            a = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            { isReady: l, programReward: r } = (0, B.F)(),
            {
                scrollTargetId: d,
                glowingSectionId: p,
                glowingPerkId: h,
                scrollBlock: f,
                scrollInline: b,
            } = o.useMemo(() => {
                let e = new URLSearchParams(s.search),
                    t = e.get("perk"),
                    i = e.get(i5.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != i
                      ? { scrollTargetId: i, glowingSectionId: i, scrollBlock: "start" }
                      : {};
            }, [s.search]);
        i7(d ?? "", null != d, f, b);
        let [j, E] = o.useState(!1),
            T = (0, V.p)(),
            C = o.useRef(null),
            [I, _] = o.useState(!1),
            y = null != T && null != a && a.status === eK.Dmq.CANCELED,
            P = (0, z.iU)(tf.gD.PREMIUM_MONTH_TIER_2, T, a),
            S = !I && y,
            D = (0, x.bG)([H.A], () => (null != t ? H.A.getUserProfile(t) : null)),
            { analyticsLocations: k } = (0, A.Ay)(N.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [L, X] = o.useState(!1);
        return null != D && (l || null != r)
            ? (0, c.jsxs)(G.Gt, {
                  className: u()(i2.xW, i2.Gd),
                  ref: i,
                  children: [
                      (0, c.jsx)(i3, {
                          children: (0, c.jsxs)(A.f5, {
                              value: k,
                              children: [
                                  (0, c.jsx)(U.L, {
                                      innerRef: C,
                                      onChange: (e) => _(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, c.jsx)(tT, {
                                          buttonVisibilityRef: C,
                                          className: i2.v1,
                                          userDiscountOffer: T,
                                          discountedPrice: P,
                                      }),
                                  }),
                                  (0, c.jsx)(i6, { glowingPerkId: h }),
                                  (0, c.jsx)(s_, { glowingPerkId: h, glowingSectionId: p }),
                                  (0, c.jsx)(i$, { glowingPerkId: h }),
                                  (0, c.jsx)(Y.A, {
                                      className: i2.Zy,
                                      location: N.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: eK.liQ.NITRO_HOME, section: eK.JJy.GIFT_BANNER },
                                  }),
                                  (0, c.jsx)("div", { className: i2.hz }),
                                  (0, c.jsx)(U.L, {
                                      innerRef: n,
                                      onChange: (e) => {
                                          e &&
                                              !L &&
                                              (O.default.track(eK.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: k,
                                              }),
                                              X(!0));
                                      },
                                      children: (0, c.jsx)("div", { ref: n, className: i2._Z }),
                                  }),
                                  (0, c.jsx)("img", {
                                      src: i8,
                                      className: i2.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: eC.intl.string(eC.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      y &&
                          null != P &&
                          (0, c.jsx)(sS, {
                              isVisible: S && j,
                              premiumSubscription: a,
                              churnDiscountOffer: T,
                              discountedPrice: P,
                          }),
                  ],
              })
            : (0, c.jsxs)("div", {
                  className: u()(i2.kL, i2.Lq, i2.TN, i2.Eg),
                  children: [(0, c.jsx)(tP, {}), (0, c.jsx)("div", { className: i2.S, children: (0, c.jsx)(g.y, {}) })],
              });
    };
var i4 = s(589152),
    ne = s(851746),
    nt = s(727949),
    ns = s(543213);
let ni =
    "https://cdn.discordapp.com/assets/content/3aa94cb4beecb43100d482e94a5a707f188e2e2315d9b15865689b51409c4d56.png";
var nn = s(185062);
let na = `${ni} 1x, https://cdn.discordapp.com/assets/content/e33cdb99c455ad732bab8cc40ca15b8bf926a7e9e078cd8834edfd15e4010217.png 2x, ${nn.A} 3x`;
function nl(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, sO.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: ni,
        srcSet: na,
        className: (0, sO.Z)(r),
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var nr = s(315629),
    nc = s(783420),
    no = s(204413),
    nd = s(572079),
    nu = s(824069),
    nm = s(785007),
    nx = s(947910);
function ng(e) {
    let { value: t, planRadioOptions: s, className: i, ...n } = e,
        a = s.map((e) => {
            let s = e.value === t;
            return {
                name: (0, c.jsxs)("div", {
                    className: nx.VH,
                    children: [
                        s &&
                            null != e.badgeText &&
                            (0, c.jsx)("div", {
                                className: nx.fQ,
                                children: (0, c.jsx)(ew.E, { type: { text: e.badgeText }, variant: "primary" }),
                            }),
                        (0, c.jsxs)(Z.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: nx.qU,
                            children: [
                                (0, c.jsxs)(Z.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nx.NI,
                                    children: [
                                        (0, c.jsx)(q.E, {
                                            variant: "body-md/semibold",
                                            color: "text-strong",
                                            children: e.primaryText,
                                        }),
                                        null != e.primarySubText &&
                                            (0, c.jsx)(q.E, {
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
                                    className: nx.br,
                                    children: [
                                        null != e.secondaryText &&
                                            (0, c.jsx)(q.E, {
                                                tag: "span",
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                children: e.secondaryText,
                                            }),
                                        null != e.secondarySubText &&
                                            (0, c.jsx)(q.E, {
                                                tag: "span",
                                                variant: "body-sm/medium",
                                                color: "text-subtle",
                                                className: nx.yD,
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
                radioBarClassName: u()(nx.tG, { [nx.uA]: s, [nx.hy]: s && e.useGradientSelectedBorder }),
            };
        });
    return (0, c.jsx)(nm.$d, {
        ...n,
        options: a,
        value: t,
        size: nm.r9.NOT_SET,
        className: u()(nx.ul, i),
        withTransparentBackground: !0,
    });
}
var np = s(118751),
    nh = s(773669),
    nf = s(97352),
    nN = s(526292),
    nA = s(387278),
    nb = s(369827),
    nj = s(803496);
function nE(e) {
    let t = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        s = (0, nb.L)(),
        i = t?.paymentSourceId ?? s,
        { priceOptions: n } = (0, nj.A)({
            activeSubscription: t,
            skuIDs: [(0, er.mH)(e)],
            paymentSourceId: i,
            isGift: !1,
        });
    return n;
}
function nT(e, t, s, i, n) {
    return t && s?.includes(e) === !0 && null != i && null != n && i !== n;
}
function nC(e) {
    let { expectedUsageInterval: t, usageInterval: s, discountDuration: i, regularPrice: n, discountedPrice: a } = e;
    return s !== t || null == n || null == a
        ? null
        : t === tf.Ff.YEAR
          ? eC.intl.format(eC.t.G88D2T, { discountedPrice: a, numYears: i, regularPrice: n })
          : eC.intl.format(eC.t["x+qUAi"], { discountedPrice: a, numMonths: i, regularPrice: n });
}
var nI = s(614488);
function nR(e) {
    let { skuId: t, selectedPlanId: s, subscribeButtonProps: i } = e,
        n = null == s || !0 === i.disabled,
        a = null == s ? "secondary" : i.variant;
    return (0, c.jsx)(nc.A, {
        subscriptionTier: t,
        initialPlanId: s,
        shouldDisallowPlanSelection: !0,
        children: (e) => {
            let { onClick: t } = e;
            return (0, c.jsx)(Q.$, {
                size: "md",
                fullWidth: !0,
                icon: J.NitroWheelIcon,
                text: i.text,
                variant: a,
                disabled: n,
                onClick: t,
            });
        },
    });
}
function nv(e) {
    let { skuId: t, className: s, variant: i = "default" } = e,
        n = t === tf.pe.TIER_2,
        a = "settings" === i,
        l = (0, s$.q)((0, s0.Ay)()),
        r = (0, eu.V)(),
        d = r?.subscriptionTrial,
        m = d?.skuId === t,
        g = n && m && null != d,
        {
            planRadioOptions: p,
            selectedPlanId: h,
            setSelectedPlanId: f,
            shouldSuppressDiscountCta: N,
        } = (function (e) {
            let { skuId: t } = e,
                [s, i] = o.useState(null),
                n = tf.En[t],
                a = tf.zE[t],
                l = t === tf.pe.TIER_2,
                r = nE(t),
                c = (0, eu.V)(),
                d = c?.subscriptionTrial?.skuId === t,
                { subscribedSkuId: u, isMonthlyPlanDisabled: m } = (0, x.cf)(
                    [M.A],
                    () => {
                        let e = M.A.getPremiumTypeSubscription();
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
                g = u === t,
                p = (0, ed.O)(),
                h = (0, nN.k5)(),
                f = (0, x.bG)([nh.default], () => nh.default.locale),
                N = (0, z.U9)(p, t),
                A = (0, z.N1)(n),
                b = (0, z.N1)(a),
                [j, E] = (0, x.yK)([nf.A], () => [nf.A.get(n), nf.A.get(a)], [n, a]),
                T = null != j ? (0, er.sS)(j, r) : null,
                C = null != E ? (0, er.sS)(E, r) : null,
                I =
                    N && p?.discount.amount != null && !h
                        ? eC.intl.formatToPlainString(eC.t.IAybsG, {
                              discount: (0, np.l9)(f, Number(p.discount.amount) / 100),
                          })
                        : null,
                R = p?.discount?.planIds,
                v = nT(a, N, R, b, C),
                _ = nT(n, N, R, A, T),
                y = p?.discount.userUsageLimitInterval,
                P = p?.discount.userUsageLimit ?? 1,
                S = !l || v || _ || null == E ? null : (0, nA.Cj)(E, !1, r),
                D = !_ || m,
                O = (function (e) {
                    let { skuId: t, monthlyHasDiscount: s, isMonthlyPlanDisabled: i } = e;
                    return t !== tf.pe.TIER_2 ? null : s && !i ? tf.En[t] : tf.zE[t];
                })({ skuId: t, monthlyHasDiscount: _, isMonthlyPlanDisabled: m }),
                k = null == s || (s === n && m) ? O : s,
                L = [
                    {
                        value: a,
                        primaryText: eC.intl.string(eC.t["/Q4HRN"]),
                        primarySubText:
                            (v
                                ? nC({
                                      expectedUsageInterval: tf.Ff.YEAR,
                                      usageInterval: y,
                                      discountDuration: P,
                                      regularPrice: C,
                                      discountedPrice: b,
                                  })
                                : null) ?? S,
                        secondaryText: v ? b : C,
                        secondarySubText: v ? C : null,
                        badgeText: v ? I : null,
                        useGradientSelectedBorder: l && (d || v || D),
                        isDisabled: g,
                    },
                    {
                        value: n,
                        primaryText: eC.intl.string(eC.t.DKzs96),
                        primarySubText: _
                            ? nC({
                                  expectedUsageInterval: tf.Ff.MONTH,
                                  usageInterval: y,
                                  discountDuration: P,
                                  regularPrice: T,
                                  discountedPrice: A,
                              })
                            : null,
                        secondaryText: _ ? A : T,
                        secondarySubText: _ ? T : null,
                        badgeText: _ ? I : null,
                        useGradientSelectedBorder: l && (d || _),
                        isDisabled: g || m,
                    },
                ],
                U = k === a ? v : k === n && _;
            return { planRadioOptions: L, selectedPlanId: k, setSelectedPlanId: i, shouldSuppressDiscountCta: N && !U };
        })({ skuId: t }),
        A = n ? "expressive" : "secondary",
        { buttonText: b } = (0, nd.A)({ subscriptionTier: t }),
        { subscribeButtonProps: j } = (0, no.$)({
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
                    className: nI.MY,
                    children: (0, c.jsx)(eU.D, {
                        variant: "nitro-md",
                        color: l ? "text-strong" : "text-overlay-light",
                        className: nI.ck,
                        children: n ? eC.intl.string(eC.t.lG6a5x) : eC.intl.string(eC.t["t9uG/o"]),
                    }),
                }),
                (0, c.jsx)(Z.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nI.qT,
                    children: n
                        ? (0, c.jsx)(ns.ZP, {
                              featureSet: ns.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: a ? "body-sm/medium" : "body-md/medium",
                          })
                        : (0, c.jsx)(ns.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: a ? "body-sm/medium" : "body-md/medium",
                          }),
                }),
                n && (0, c.jsx)(nu.K, {}),
            ],
        }),
        T = (0, c.jsxs)(Z.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nI.Ux,
            children: [
                a ? (0, c.jsx)("div", { className: nI.zI, children: E }) : E,
                g
                    ? (0, c.jsx)("div", {
                          className: nI.qS,
                          role: "separator",
                          children: (0, c.jsx)(q.E, {
                              variant: "body-md/semibold",
                              color: "text-strong",
                              className: nI.ZV,
                              children: (function (e, t) {
                                  if (null == e || null == t) return null;
                                  switch (e) {
                                      case tf.WT.DAY:
                                          if (t % 7 == 0) return eC.intl.format(eC.t["1MYPH0"], { weeks: t / 7 });
                                          return eC.intl.format(eC.t.pYfIoO, { days: t });
                                      case tf.WT.MONTH:
                                          return eC.intl.format(eC.t["96hTLe"], { months: t });
                                      case tf.WT.YEAR:
                                          return eC.intl.format(eC.t.B0ZmdG, { years: t });
                                      default:
                                          return null;
                                  }
                              })(d.interval, d.intervalCount),
                          }),
                      })
                    : (0, c.jsx)("hr", { className: nI.yF }),
                (0, c.jsxs)("div", {
                    className: nI.qr,
                    children: [
                        (0, c.jsx)(ng, {
                            className: a ? nI.US : void 0,
                            planRadioOptions: p,
                            value: h ?? "",
                            onChange: (e) => f(e.value),
                        }),
                        (0, c.jsx)(nR, { skuId: t, selectedPlanId: h, subscribeButtonProps: j }),
                    ],
                }),
            ],
        }),
        C = u()(nI.Nr, s, { [nI.Fw]: n });
    return n
        ? (0, c.jsxs)(nr.h, {
              color: "nitro-pink",
              className: C,
              children: [
                  !a &&
                      (0, c.jsx)("div", {
                          className: nI.kX,
                          "aria-hidden": !0,
                          children: (0, c.jsx)(nl, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                      }),
                  T,
              ],
          })
        : (0, c.jsx)("div", { className: C, children: T });
}
function n_(e) {
    let { className: t } = e,
        s = (0, s$.q)((0, s0.Ay)()),
        i = nE(tf.pe.TIER_2),
        n = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        { avatarSrc: a, eventHandlers: l } = (0, eD.A)({ userId: n?.id, size: e_._3.SIZE_32, animateOnHover: !0 }),
        r = (0, x.bG)([nf.A], () => nf.A.get(tf.gD.PREMIUM_GROUP_MONTH)),
        o = eC.intl.string(eC.t["2pG5Ga"]),
        d = (0, c.jsx)(nc.A, {
            subscriptionTier: tf.pe.TIER_2,
            initialPlanId: tf.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, c.jsx)(Q.$, {
                    size: "md",
                    fullWidth: !0,
                    icon: J.NitroWheelIcon,
                    text: o,
                    variant: "secondary",
                    onClick: t,
                });
            },
        }),
        m = null;
    if (null != r)
        try {
            m = (0, er.sS)(r, i, !1, !1, !1);
        } catch {
            m = null;
        }
    return (0, c.jsx)("div", {
        className: u()(nI.Nr, t),
        children: (0, c.jsxs)(Z.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nI.Ux,
            children: [
                (0, c.jsxs)(Z.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nI.MY,
                    children: [
                        (0, c.jsx)(eU.D, {
                            variant: "nitro-md",
                            color: s ? "text-strong" : "text-overlay-light",
                            className: nI.ck,
                            children: eC.intl.string(ig.default.eSKiXk),
                        }),
                        null != n &&
                            (0, c.jsxs)(Z.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: nI.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: nI.uA,
                                        children: (0, c.jsx)(ey.eu, {
                                            src: a,
                                            size: e_._3.SIZE_32,
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
                                        className: nI.VL,
                                        children: (0, c.jsxs)(q.E, {
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
                    className: nI.qT,
                    children: (0, c.jsx)(ns.Lg, { isApplicationHome: !0, textVariant: "body-md/medium" }),
                }),
                (0, c.jsx)("hr", { className: nI.yF }),
                (0, c.jsxs)("div", {
                    className: nI.qr,
                    children: [
                        (0, c.jsxs)("div", {
                            className: nI.ec,
                            children: [
                                (0, c.jsx)(q.E, {
                                    variant: "body-md/semibold",
                                    color: "text-strong",
                                    children: eC.intl.string(ig.default.SvSwga),
                                }),
                                null == m
                                    ? (0, c.jsx)(g.y, { type: g.y.Type.PULSING_ELLIPSIS })
                                    : (0, c.jsx)(q.E, {
                                          tag: "span",
                                          variant: "heading-lg/semibold",
                                          color: s ? "text-strong" : "text-overlay-light",
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
function ny(e) {
    let { innerRef: t, className: s, variant: i = "default" } = e,
        n = "settings" === i,
        { analyticsLocations: a } = (0, A.Ay)(N.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, ns.pw)(t),
        r = (0, im.PA)(),
        o = !n && r,
        d = (0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        m = { [nI.iR]: !d && !n };
    return (0, c.jsx)(A.f5, {
        value: a,
        children: (0, c.jsxs)(Z.B, {
            direction: "vertical",
            align: n ? "stretch" : "center",
            gap: 32,
            fullWidth: !0,
            className: u()(nI.oB, s, { [nI.W0]: n }),
            children: [
                (0, c.jsx)(eU.D, {
                    variant: n ? "heading-xl/semibold" : "nitro-md",
                    color: "text-strong",
                    className: nI.op,
                    children: eC.intl.string(eC.t.vLz3Zs),
                }),
                (0, c.jsxs)("div", {
                    ref: l,
                    className: u()(nI.kR, { [nI.BQ]: o }),
                    children: [
                        (0, c.jsx)(nv, { skuId: tf.pe.TIER_0, className: u()(nI.rz, m), variant: i }),
                        (0, c.jsx)(nv, { skuId: tf.pe.TIER_2, className: u()(nI.Rv, m), variant: i }),
                        o && (0, c.jsx)(n_, { className: u()(nI.zz, m) }),
                    ],
                }),
            ],
        }),
    });
}
var nP = s(366010),
    nS = s(303136);
let nD = function (e) {
    let t,
        { className: s } = e,
        i = (0, e6.TM)(),
        n = (0, nP.q)((0, s0.Ay)());
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
                nS.A,
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
var nM =
        (((r = {}).HOME = "home"),
        (r.WHATS_NEW = "whatsNew"),
        (r.BEST_OF_NITRO = "bestOfNitro"),
        (r.PLANS = "plans"),
        (r.COMPARE = "compare"),
        r),
    nO = s(352756);
let nk = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i, variant: n = "default" } = e,
        a = "settings" === n,
        l = (0, e5.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        r = { section: eK.JJy.MARKETING_FLOATING_CTA };
    return (0, c.jsx)(e7.animated.div, {
        className: u()(nO.iE, { [nO.W0]: a }),
        "aria-hidden": a ? !t : void 0,
        inert: a ? !t : void 0,
        style: l,
        "data-mtctest-ignore": "true",
        children: (0, c.jsxs)("div", {
            className: nO.UD,
            children: [
                (0, c.jsx)(eb.A, {
                    enableMarketingSubscribeCopyTest: !a,
                    size: "md",
                    subscriptionTier: s,
                    hasActivePromotion: !!i,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: r,
                }),
                (0, c.jsx)(eA.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var nL = s(573710);
let nU = function () {
    let e = (0, e3.bG)([ee.Ay], () => ee.Ay.useReducedMotion);
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)("div", {
                className: nL.BI,
                children: (0, c.jsx)(te, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: e9.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, c.jsx)("img", {
                        src: "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
                        alt: "",
                        className: nL.Q,
                    }),
                }),
            }),
            (0, c.jsx)(ts, {
                isMotionReduced: e,
                boltContainerClassName: nL.nJ,
                carContainerClassName: nL.IN,
                hammerContainerClassName: nL.Gj,
                keyContainerClassName: nL.FV,
                starContainerClassName: nL.E1,
                boltAssetClassName: nL.j7,
                carAssetClassName: nL.or,
                hammerAssetClassName: nL.Wv,
                keyAssetClassName: nL.rs,
                starAssetClassName: nL.OY,
            }),
        ],
    });
};
var nG = s(989756);
function nw(e) {
    let { ref: t, ...s } = e,
        { analyticsLocations: i } = (0, A.Ay)(N.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, c.jsx)(A.f5, {
        value: i,
        children: (0, c.jsx)("div", {
            ref: t,
            className: nG.kL,
            children: (0, c.jsxs)("div", {
                className: nG.hQ,
                children: [
                    (0, c.jsx)(nU, {}),
                    (0, c.jsx)(eU.D, {
                        variant: "nitro-md",
                        color: "text-strong",
                        className: nG.RH,
                        children: eC.intl.string(eC.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
}
nw.displayName = "PremiumMarketingFooter";
var nB = s(939249);
let nH = function (e) {
    let { navBarSections: t, activeSectionId: s } = e,
        i = {
            [nM.HOME]: eC.intl.string(eC.t.uGRXjS),
            [nM.WHATS_NEW]: eC.intl.string(eC.t["mfcR/v"]),
            [nM.BEST_OF_NITRO]: eC.intl.string(eC.t.xQKkE8),
            [nM.PLANS]: eC.intl.string(eC.t.wyNMnm),
            [nM.COMPARE]: eC.intl.string(eC.t.pwD7If),
        },
        n = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        a = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, c.jsx)(tI.A, {
        className: t_.TQ,
        transparent: !0,
        children: (0, c.jsxs)("div", {
            className: t_.Wc,
            children: [
                (0, c.jsxs)("div", {
                    className: t_.wG,
                    children: [
                        (0, c.jsx)(J.NitroWheelIcon, { className: t_.nE, colorClass: t_.oG }),
                        (0, c.jsx)("div", {
                            className: t_.zc,
                            role: "tablist",
                            "aria-label": eC.intl.string(eC.t.O9MiXY),
                            children: a.map((e) => {
                                let t = s === e.id,
                                    n = i[e.id];
                                return (0, c.jsxs)(
                                    nB.D,
                                    {
                                        role: "tab",
                                        "aria-selected": t,
                                        className: t_.S0,
                                        onClick: e.scrollToSection,
                                        children: [
                                            (0, c.jsx)(q.E, {
                                                variant: "body-sm/medium",
                                                color: "text-strong",
                                                children: n,
                                            }),
                                            t && (0, c.jsx)("div", { className: t_.W0 }),
                                        ],
                                    },
                                    n,
                                );
                            }),
                        }),
                    ],
                }),
                (0, c.jsxs)("div", {
                    className: t_.MQ,
                    children: [
                        null != n && (0, c.jsx)(tv.l, { size: "sm", location: N.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                        (0, c.jsx)(eA.A, { size: "sm", variant: "overlay-secondary" }),
                    ],
                }),
            ],
        }),
    });
};
var nF = s(713271),
    nV = s(704333),
    nW = s(414499),
    nz = s(597770),
    nY = s(500060),
    nX = s(866665),
    nK = s(406860),
    nZ = s(870975),
    nq = s(698834);
function nJ() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, nK.A)({ boxType: tB.$, thirdPartyPartner: "xbox" }),
        s = [
            { icon: nV.ServerGridIcon, text: eC.intl.string(tV.default.MUypiB) },
            { icon: nW.CloudIcon, text: eC.intl.string(tV.default.ec5Rdd) },
            { icon: nz.GiftIcon, text: eC.intl.string(tV.default["9t2CzW"]), tooltip: tV.default.AyECej },
            { icon: nY.ScreenStreamIcon, text: eC.intl.string(tV.default.R7YJAY) },
        ];
    return (0, c.jsx)(U.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, c.jsx)("div", {
            ref: e,
            className: nq.iE,
            children: (0, c.jsxs)("div", {
                className: nq.Nr,
                children: [
                    (0, c.jsxs)("div", {
                        className: nq.j,
                        children: [
                            (0, c.jsx)("div", { className: nq._g }),
                            (0, c.jsx)("div", { className: nq.$h }),
                            (0, c.jsx)("div", { className: nq.Rv }),
                            (0, c.jsx)("div", { className: nq.Lw }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: nq.CT,
                        children: [
                            (0, c.jsxs)("div", {
                                className: nq.Qs,
                                children: [
                                    (0, c.jsxs)("div", {
                                        children: [
                                            (0, c.jsx)(eU.D, {
                                                variant: "heading-xxl/semibold",
                                                color: "text-strong",
                                                className: nq.R_,
                                                children: eC.intl.string(tV.default.rkt1aw),
                                            }),
                                            (0, c.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, c.jsxs)(
                                                            "div",
                                                            {
                                                                className: nq.yf,
                                                                children: [
                                                                    (0, c.jsx)(t, {
                                                                        size: "sm",
                                                                        color: "var(--icon-strong)",
                                                                    }),
                                                                    (0, c.jsx)(q.E, {
                                                                        variant: "body-md/medium",
                                                                        color: "text-strong",
                                                                        children: s,
                                                                    }),
                                                                    null != i &&
                                                                        (0, c.jsx)("div", {
                                                                            className: nq.Jn,
                                                                            children: (0, c.jsx)(nX.m, {
                                                                                text: eC.intl.string(i),
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
                                                            s,
                                                        );
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: nq.xF,
                                                        children: (0, c.jsx)(eb.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: tf.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: nq.WE,
                                        children: (0, c.jsx)(q.E, {
                                            variant: "body-xs/medium",
                                            color: "text-link",
                                            children: eC.intl.format(tV.default.KDKdWi, { termsLink: (0, nZ.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, c.jsx)("div", {
                                className: nq.r1,
                                children: (0, c.jsx)("img", {
                                    className: nq.wm,
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
var nQ = s(886205),
    n$ = s(65154),
    n0 = s(382702);
function n1() {}
function n2() {
    return (0, c.jsxs)("div", {
        className: n0.Nr,
        children: [
            (0, c.jsxs)("div", {
                className: n0.pq,
                children: [
                    (0, c.jsxs)("div", {
                        className: n0.Z,
                        children: [
                            (0, c.jsx)("div", {
                                children: (0, c.jsx)(ew.E, {
                                    type: "early_access",
                                    variant: "expressive",
                                    icon: J.NitroWheelIcon,
                                }),
                            }),
                            (0, c.jsx)(eU.D, {
                                variant: "heading-xxl/semibold",
                                color: "text-strong",
                                children: eC.intl.string(i_.default.MtIbFp),
                            }),
                            (0, c.jsx)(q.E, {
                                variant: "body-md/normal",
                                color: "text-subtle",
                                children: eC.intl.string(i_.default.hXM4Ae),
                            }),
                        ],
                    }),
                    (0, c.jsx)(Q.$, {
                        variant: "secondary",
                        size: "md",
                        icon: n$.CirclePlayIcon,
                        text: eC.intl.string(i_.default.wNHvBT),
                        onClick: n1,
                    }),
                ],
            }),
            (0, c.jsx)("div", {
                className: n0.LY,
                children: (0, c.jsx)(ij, { alt: "", ariaHidden: !0, width: "100%", height: "100%", className: n0.ot }),
            }),
        ],
    });
}
var n3 = s(750338),
    n6 = s(221168),
    n7 = s(505051);
function n5(e) {
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
        className: u()(n7.boxBackdrop, t),
        children: [
            (0, c.jsx)(eU.D, {
                className: n7.bentoSectionHeader,
                variant: "nitro-md",
                color: "text-strong",
                children: i,
            }),
            null != r && (0, c.jsx)("div", { className: n7.highlightBento, children: r }),
            (0, c.jsx)("div", {
                className: n7.bentoBoxesGrid,
                children: s.flatMap((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = n6.A0.SMALL;
                            break;
                        case 2:
                            s = n6.A0.MEDIUM;
                            break;
                        default:
                            s = n6.A0.LARGE;
                    }
                    return e.map((e) =>
                        (0, c.jsx)(
                            n3.A,
                            { index: t + +!!l, ...e, size: s, shouldLoadVideo: n, isReducedMotion: a },
                            e.name,
                        ),
                    );
                }),
            }),
        ],
    });
}
let n8 = o.memo(function (e) {
        let t = (0, tS.b)("premium_marketing_bento"),
            s = (0, sf.mh)({ location: "premium_marketing_bento" }),
            { enabled: i } = (0, t4.vc)({ location: "premium_marketing_bento" }),
            { enabled: n } = nQ.A.useConfig({ location: "premium_marketing_bento" }),
            a = t && !s && !(i && n),
            { whatsNewBoxes: l } = (0, n6.Ay)(a),
            r = (function () {
                let e = (0, x.bG)([S.default], () => (0, er.YE)(S.default.getCurrentUser(), tf.PremiumTypes.TIER_2)),
                    { enabled: t } = (0, iC.r)("premium_marketing_whats_new");
                return !e && t;
            })();
        return (0, c.jsx)(n5, {
            boxLayout: l,
            title: eC.intl.string(eC.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento:
                r || a
                    ? (0, c.jsxs)(c.Fragment, { children: [r && (0, c.jsx)(n2, {}), a && (0, c.jsx)(nJ, {})] })
                    : null,
            ...e,
        });
    }),
    n9 = o.memo(function (e) {
        let { bestOfBoxes: t } = (0, n6.Ay)();
        return (0, c.jsx)(n5, { boxLayout: t, title: eC.intl.string(eC.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    n4 = (0, t2.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var ae = s(236834),
    at = s(540504);
function as(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eD.A)({ userId: t?.id, size: e_._3.SIZE_24, animateOnHover: !0 });
    return (0, c.jsx)("div", {
        className: at.$6,
        children: (0, c.jsxs)("div", {
            className: at.sc,
            children: [
                (0, c.jsx)("div", {
                    className: at.kR,
                    children: (0, c.jsx)(ey.eu, { src: s, "aria-label": t.username, size: e_._3.SIZE_32, ...i }),
                }),
                (0, c.jsx)(eU.D, {
                    variant: "heading-xs/medium",
                    className: at.FS,
                    color: "text-strong",
                    children: eC.intl.format(eC.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var ai = s(579245),
    an = s(369805);
let aa = function () {
    let e = (0, an.A)();
    return null == e ? null : (0, c.jsx)(eh, { text: e });
};
function al() {
    let e = (0, x.bG)([nf.A], () => nf.A.getForSkuAndInterval((0, er.mH)(tf.pe.TIER_0), tf.WT.MONTH));
    return null != e ? (0, er.sS)(e) : "\u2026";
}
var ar = s(508556);
let ac = function (e) {
    let { containerVisibilityPercentage: t, variant: s = "default" } = e,
        i = "settings" === s,
        n = (0, e3.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        a = (0, e6.TM)();
    return (0, c.jsxs)("div", {
        "aria-hidden": !0,
        className: u()(ar.YU, { [ar.W0]: i }),
        children: [
            (0, c.jsx)(tl, {
                supportHEVCAlpha: a,
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                containerClassName: ar.wG,
                assetClassName: ar.lu,
                variant: s,
            }),
            (0, c.jsx)(ts, {
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                boltContainerClassName: ar.nJ,
                carContainerClassName: ar.IN,
                hammerContainerClassName: ar.Gj,
                keyContainerClassName: ar.FV,
                starContainerClassName: ar.E1,
                boltAssetClassName: ar.j7,
                carAssetClassName: ar.or,
                hammerAssetClassName: ar.Wv,
                keyAssetClassName: ar.rs,
                starAssetClassName: ar.OY,
                animateStar: !i,
            }),
        ],
    });
};
var ao = s(14057);
let ad = o.memo(function (e) {
    let { className: t, subscriptionTier: s, isEligibleForBogoPromotion: i, ref: n, variant: a = "default" } = e,
        l = "settings" === a,
        { analyticsLocations: r } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        o = al(),
        d = n4.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
        m = (0, ae.A)(),
        g = null != m,
        { visibilityPercentageRef: p, visibilityPercentage: h } = eg(!(0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion)),
        f = (0, i4.b)(),
        b = !g && f.length > 0,
        j = (0, em.u)(X.oW.MARKETING_PAGE_BANNER),
        E = null != j,
        T = (0, nN.ar)() && !E,
        C = (0, ed.O)(),
        I = (null != C && tf.U4.includes(C.discountId)) || E;
    return (0, c.jsx)(A.f5, {
        value: r,
        children: (0, c.jsxs)("div", {
            ref: n,
            className: u()(ao.kL, t, { [ao.W0]: l }),
            "data-testid": "marketing-page-hero-header",
            children: [
                l && (0, c.jsx)(nD, { className: ao.kv }),
                (0, c.jsx)("div", {
                    ref: p,
                    children: (0, c.jsxs)("div", {
                        className: ao.hQ,
                        children: [
                            (0, c.jsx)(ac, { containerVisibilityPercentage: h, variant: a }),
                            T && (0, c.jsx)(aa, {}),
                            (0, c.jsx)("div", {
                                className: ao.s8,
                                children: (0, c.jsx)(eL.F, {
                                    forceLevel: 1,
                                    children: (0, c.jsx)(eU.D, {
                                        variant: "nitro-md",
                                        color: "text-strong",
                                        className: l ? void 0 : ao.wx,
                                        children: eC.intl.string(eC.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, c.jsxs)("div", {
                                className: ao.rf,
                                children: [
                                    g &&
                                        (0, c.jsx)("div", {
                                            className: ao.eZ,
                                            children: (0, c.jsx)(as, { referrer: m }),
                                        }),
                                    b &&
                                        (0, c.jsx)("div", {
                                            className: ao.Qn,
                                            children: (0, c.jsx)(ai.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, c.jsxs)("div", {
                                        className: T ? ao.es : ao.UJ,
                                        children: [
                                            (0, c.jsx)(eb.A, {
                                                enableMarketingSubscribeCopyTest: !l,
                                                size: "md",
                                                fullWidth: T,
                                                hasActivePromotion: !!i,
                                                subscriptionTier: I && null == s ? tf.pe.NONE : s,
                                                buttonTextOverride: I ? eC.intl.string(eC.t["2pG5Ga"]) : void 0,
                                            }),
                                            !T && (0, c.jsx)(eA.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: ao.iQ,
                                        children: (0, c.jsx)(q.E, {
                                            color: "text-muted",
                                            variant: "body-xs/medium",
                                            children: d
                                                ? eC.intl.string(eC.t.jHqrJW)
                                                : eC.intl.format(eC.t.kt9wxs, { cheapestMonthlyPrice: o }),
                                        }),
                                    }),
                                    E &&
                                        (0, c.jsx)(ef.x, {
                                            componentId: j.id,
                                            componentType: j.componentType,
                                            promotionId: j.promotionId,
                                            promotionBannerMarketingComponentFields: j.surface,
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
var au = s(812537);
let am = function (e) {
    let { scrollOffset: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
        s = (0, o.useCallback)(
            (e) => {
                let s = r.current[e];
                null != s &&
                    ((s.style.scrollMarginTop = `${t}px`), s.scrollIntoView({ behavior: "smooth", block: "start" }));
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
var ax = s(818348),
    ag = s(773188);
let ap = () => {
    let e = (0, m.zy)();
    (0, v.P)(R);
    let t = o.useRef(null),
        s = o.useRef(null),
        i = o.useRef(null),
        n = o.useRef(null),
        a = o.useRef(null),
        l = o.useRef(null),
        r = (0, x.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        [d, g] = o.useState(!1),
        [p, h] = o.useState(!1),
        [f, b] = o.useState(!1),
        [j, E] = o.useState(!1),
        T = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        C = null != T ? (0, er.EL)(T) : null,
        I = null != C ? er.Ay.getSkuIdForPlan(C.planId) : null,
        _ = null !== I && I !== tf.pe.TIER_2 ? tf.pe.TIER_2 : null,
        { analyticsLocations: y } = (0, A.Ay)(N.A.PREMIUM_MARKETING);
    o.useEffect(() => {
        E(!0);
    }, []);
    let { shouldShowBonusOrbsUX: P } = (0, s4.lk)(ir.rE.NITRO_HOME_MARKETING),
        S = P ? nF.N.COMBINED_ORBS : nF.N.ORB_REWARDS,
        D = o.useMemo(() => {
            let t = new URLSearchParams(e.search).get(i5.x);
            return "orbs" === t
                ? S
                : t === nF.N.THREE_P_PROMOTIONS
                  ? nF.N.THREE_P_PROMOTIONS
                  : t === nF.N.YOUTUBE
                    ? nF.N.YOUTUBE
                    : null;
        }, [e.search, S]);
    i7(D ?? "", null != D);
    let { navBarSections: k, activeSectionId: L } = am([nM.HOME, nM.WHATS_NEW, nM.BEST_OF_NITRO, nM.PLANS, nM.COMPARE]),
        { home: w, whatsNew: B, bestOfNitro: H, plans: F, compare: V } = k,
        W = (0, c.jsxs)("div", {
            ref: s,
            className: u()(ag.kL, ag.Gd, ag.iI, { [ag.Hq]: !r }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(nD, { className: ag.yH }),
                (0, c.jsx)(nH, { navBarSections: k, activeSectionId: L }),
                (0, c.jsxs)("div", {
                    className: ag.Qr,
                    children: [
                        (0, c.jsx)("div", {
                            className: ag.qY,
                            ref: w.ref,
                            children: (0, c.jsx)(U.L, {
                                innerRef: n,
                                onChange: (e) => g(e),
                                threshold: 0,
                                active: !0,
                                children: (0, c.jsx)(ad, { ref: n, subscriptionTier: _ }),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: ag.So,
                            ref: B.ref,
                            children: (0, c.jsx)(n8, { shouldLoadVideo: j, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: ag.KQ,
                            ref: H.ref,
                            children: (0, c.jsx)(n9, { shouldLoadVideo: j, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: ag.qc,
                            ref: F.ref,
                            children: (0, c.jsx)(U.L, {
                                innerRef: i,
                                onChange: (e) => h(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, c.jsx)(ny, { innerRef: i }),
                            }),
                        }),
                        (0, c.jsx)("div", { className: ag.aC, ref: V.ref, children: (0, c.jsx)(au.A, {}) }),
                    ],
                }),
                (0, c.jsx)(U.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !f &&
                            (O.default.track(eK.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: y }),
                            b(!0));
                    },
                    children: (0, c.jsx)("div", { ref: a, className: ag._Z }),
                }),
                (0, c.jsx)(nw, { ref: l }),
                (0, c.jsx)(nk, { isVisible: !d && !p && j, subscriptionTier: _ }),
                (0, c.jsx)(nD, { className: ag.MF }),
            ],
        });
    return (0, c.jsx)(tO.N, {
        theme: ax.NJ.DARK,
        children: (e) => (0, c.jsx)(G.Gt, { className: u()(ag.XG, e), ref: t, children: W }),
    });
};
var ah = s(862482),
    af = s(300349),
    aN = s(106512),
    aA = s(412260),
    ab = s(662367),
    aj = s(374403),
    aE = s(396375),
    aT = s(900797),
    aC = s(847374),
    aI = s(614268);
function aR(e) {
    let { className: t } = e;
    return (0, c.jsx)("div", {
        className: u()(aI.i, t),
        children: (0, c.jsx)(ew.E, { type: "early_access", variant: "premium" }),
    });
}
var av = s(536071),
    a_ = s(729934);
let ay = "/assets/5b4fec8511c3676a.svg",
    aP = "/assets/0838bda6ecd20d91.svg";
function aS(e, t, s) {
    return (0, s$.M)(e) ? t : s;
}
var aD = s(872461);
function aM(e) {
    let { isShowingAll: t, onClick: s } = e;
    return (0, c.jsxs)(nB.D, {
        onClick: s,
        className: aD.customButton,
        children: [
            t ? eC.intl.string(eC.t.maZaN3) : eC.intl.string(eC.t["37C26f"]),
            t
                ? (0, c.jsx)(aT.ChevronSmallUpIcon, { size: "md", color: "currentColor", className: aD.arrow })
                : (0, c.jsx)(aC.ChevronSmallDownIcon, { size: "md", color: "currentColor", className: aD.arrow }),
        ],
    });
}
function aO(e) {
    let {
            title: t,
            description: s,
            className: i,
            imageSource: n,
            imageClassName: a,
            titleBadge: l,
            isNew: r = !1,
            isEarlyAccess: o = !1,
            variant: d = "default",
        } = e,
        { analyticsLocations: m } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
        x = (0, c.jsx)("img", { src: n, alt: "", className: u()(a, aD.perksCardArt) }),
        g = "settings" === d;
    return (0, c.jsx)(A.f5, {
        value: m,
        children: (0, c.jsxs)("div", {
            className: u()(aD.perkCard, i, { [aD.settingsCard]: g }),
            children: [
                r ? (0, c.jsx)(av.A, { className: aD.perkCardNewBadge }) : null,
                o ? (0, c.jsx)(aR, { className: aD.perkCardEarlyAccessBadge }) : null,
                g
                    ? (0, c.jsx)(Z.B, {
                          direction: "horizontal",
                          align: "center",
                          justify: "center",
                          gap: 0,
                          padding: 24,
                          className: aD.settingsArt,
                          children: x,
                      })
                    : x,
                (0, c.jsxs)("div", {
                    className: g ? aD.settingsText : void 0,
                    children: [
                        (0, c.jsxs)(eU.D, {
                            variant: g ? "heading-sm/semibold" : "heading-lg/semibold",
                            className: aD.perkCardHeading,
                            children: [t, " ", l],
                        }),
                        (0, c.jsx)(q.E, {
                            variant: g ? "body-xs/normal" : "body-sm/normal",
                            color: g ? "text-muted" : void 0,
                            lineClamp: g ? 1 : void 0,
                            className: aD.perkCardDescription,
                            children: "function" == typeof s ? s(m) : s,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let ak = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [n, a] = o.useState(!1),
        l = (function (e) {
            let { styles: t } = e,
                i = (0, s0.Ay)(),
                n = (0, s3.X)("usePerkCards"),
                a = (0, e3.bG)([S.default], () => {
                    let e = S.default.getCurrentUser();
                    return er.Ay.canUsePremiumProfileCustomization(e);
                }),
                l = (0, er.EJ)(tf.PremiumTypes.TIER_2, { useSpace: !1 });
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
                    imageSource: aS(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
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
                                let { openUserSettings: t } = s(766075);
                                (a_.A.setState({ scrollPosition: iY._F.TRY_IT_OUT }),
                                    t(ei.X.PROFILE_PANEL, { analyticsLocations: e }));
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
                    imageSource: aS(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: eC.intl.string(eC.t.Bv8Pfk),
                    description: eC.intl.string(eC.t.JMfaTU),
                    imageSource: aS(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: eC.intl.string(eC.t.Bv8Pfk),
                    description: eC.intl.string(eC.t.JMfaTU),
                    imageSource: aS(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: eC.intl.string(eC.t["lGcW+c"]),
                    description: eC.intl.string(eC.t["/fDyO+"]),
                    imageSource: aS(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: eC.intl.string(eC.t["1c+xwT"]),
                    description: eC.intl.string(eC.t.hJG8ZN),
                    imageSource: aS(i, aP, ay),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: eC.intl.string(eC.t.tzdIwI),
                    description: eC.intl.string(eC.t.hJG8ZN),
                    imageSource: aS(i, aP, ay),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: eC.intl.string(eC.t.tzdIwI),
                    description: eC.intl.string(eC.t.hJG8ZN),
                    imageSource: aS(i, aP, ay),
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
                    imageSource: aS(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
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
                    imageSource: aS(i, iX, iK),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: aD }),
        r = (0, e3.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        { analyticsLocations: d } = (0, A.Ay)();
    return (0, c.jsxs)("div", {
        className: u()(aD.perksContainer, t, {
            [aD.partiallyHidden]: i && !n,
            [aD.subscriberNitroHome]: i,
            [aD.reducedMotion]: r,
        }),
        children: [
            (0, c.jsx)(eU.D, {
                variant: "heading-xxl/semibold",
                className: aD.perksTitle,
                children: i ? eC.intl.string(eC.t.QX14gI) : eC.intl.string(eC.t.RGadQR),
            }),
            (0, c.jsx)("div", {
                className: u()(aD.perkCardContainer, { [aD.perkCardContainerExpanded]: n }),
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
                    return null != t && (0, c.jsx)(aO, { ...t }, e);
                }),
            }),
            i &&
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)("div", {
                            className: u()({ [aD.sizeGizmo]: !n, [aD.sizeGizmoExpanded]: n }),
                            children: (0, c.jsx)(aM, {
                                onClick: function () {
                                    (O.default.track(eK.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: d,
                                        was_expanded: n,
                                    }),
                                        a(!n));
                                },
                                isShowingAll: n,
                            }),
                        }),
                        (0, c.jsx)("div", { className: u()(aD.cover, { [aD.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var aL = s(615939);
let aU = o.memo(function (e) {
    let { className: t } = e,
        s = [
            {
                id: tG.MORE_EMOJIS_CARD_ID,
                title: eC.intl.string(eC.t["R2IV/Q"]),
                description: eC.intl.string(eC.t.DRMecB),
                imageSource: sH.A,
            },
            {
                id: tG.HD_VIDEO_CARD_ID,
                title: eC.intl.string(eC.t["/mQ5gg"]),
                description: eC.intl.string(eC.t["7WwAXh"]),
                imageSource: sw.A,
            },
            {
                id: tG.LARGE_UPLOADS_CARD_ID,
                title: eC.intl.string(eC.t.nL1WZV),
                description: (0, s7.M6)({
                    legacyCopy: eC.intl.formatToPlainString(eC.t.k8LC1w, { maxSizeMb: 500 }),
                    rolloutCopy: eC.intl.formatToPlainString(eC.t.teOTfv, {
                        maxFileSize: (0, er.EJ)(tf.PremiumTypes.TIER_2, { useSpace: !1 }),
                    }),
                }),
                imageSource: aL.A,
            },
            {
                id: tG.PROFILES_CARD_ID,
                title: eC.intl.string(eC.t.KcyDwF),
                description: eC.intl.string(eC.t.Mt3U1W),
                imageSource: sU,
            },
        ];
    return (0, c.jsxs)(Z.B, {
        gap: 16,
        className: u()(aD.settingsPerks, t),
        children: [
            (0, c.jsx)(eU.D, { variant: "heading-xl/semibold", children: eC.intl.string(eC.t.q1u7nQ) }),
            (0, c.jsx)(eL.F, {
                children: (0, c.jsx)("div", {
                    className: aD.settingsGrid,
                    children: s.map((e) => (0, c.jsx)(aO, { ...e, variant: "settings" }, e.id)),
                }),
            }),
        ],
    });
});
var aG = s(695366),
    aw = s(370049);
let aB = function (e) {
    let t,
        s,
        { premiumSubscription: i, className: n, textColor: a } = e,
        l = (0, nN.ar)();
    if (null == i) return null;
    let r = null != i ? er.Ay.getPremiumPlanItem(i) : null;
    if (
        (er.Ay.isBoostOnlySubscription(i)
            ? (t = eC.intl.string(eC.t.Uj0md3))
            : null != r && (t = er.Ay.getTierDisplayNameByPlanId(r.planId)),
        null == t)
    )
        return null;
    function o() {
        return (0, en.openUserSettings)(ei.X.SUBSCRIPTIONS_PANEL);
    }
    let d = (null != r ? er.Ay.getSkuIdForPlan(r.planId) : null) === tf.pe.TIER_1;
    return (
        (s = null != a ? a : l ? "text-overlay-light" : "text-default"),
        (0, c.jsxs)(tk.Z, {
            className: u()(aw.kL, n, { [aw.He]: l }),
            type: tk.Z.Types.CUSTOM,
            children: [
                (0, c.jsx)(aG.CircleErrorIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: u()(aw.Kk, { [aw.Pt]: l }),
                }),
                (0, c.jsx)(q.E, {
                    variant: "body-sm/medium",
                    color: s,
                    children: d
                        ? eC.intl.format(eC.t["tYuv+T"], {
                              helpdeskArticle: el.A.getArticleURL(eK.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: o,
                          })
                        : eC.intl.format(eC.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: o }),
                }),
            ],
        })
    );
};
var aH = s(978836);
let aF = function (e) {
    let { lifted: t = !1 } = e;
    return (0, c.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: u()(aH.zr, { [aH.N]: t }),
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
                        (0, c.jsx)("stop", { className: aH.eq }),
                        (0, c.jsx)("stop", { offset: "0.339235", className: aH.l_ }),
                        (0, c.jsx)("stop", { offset: "0.492065", className: aH.sM }),
                        (0, c.jsx)("stop", { offset: "0.823236", className: aH.zi }),
                        (0, c.jsx)("stop", { offset: "0.899558", className: aH.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var aV = s(194509),
    aW = s(317587);
let az = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: n } = e,
        a = (0, e5.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: eK.JJy.MARKETING_FLOATING_CTA },
        r = (0, s0.Ay)(),
        o = (0, nP.M)(r);
    return (0, c.jsx)(e7.animated.div, {
        className: u()(aW.iE, { [aW.H8]: i, [aW.q4]: !t }),
        style: a,
        children: (0, c.jsxs)("div", {
            className: i ? aW.zW : aW.iJ,
            children: [
                (0, c.jsx)(aE.A, {
                    color: o ? ah.XD.BRAND_INVERTED : void 0,
                    className: u()(aW.x6, { [aW.Ph]: o }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: l,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: o ? void 0 : aW.PJ,
                }),
                (0, c.jsx)(aV.A, { className: aW.x6, premiumModalAnalyticsLocation: l }),
            ],
        }),
    });
};
var aY = s(386564);
function aX(e) {
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
            ? (0, c.jsx)(aE.A, {
                  color: l ? ah.XD.BRAND_INVERTED : void 0,
                  className: u()(aY.x6, aY.Ph, n, { [aY.Sq]: t && a, [aY.MF]: a && !l }),
                  shinyButtonClassName: l ? void 0 : aY.PJ,
                  subscriptionTier: s,
                  hasActivePromotion: !0,
              })
            : (0, c.jsx)(aE.A, {
                  color: l || !a ? ah.XD.BRAND_INVERTED : void 0,
                  className: u()(aY.x6, aY.Ph, n, { [aY.Sq]: t && a, [aY.MF]: a && !l }),
                  subscriptionTier: s,
              }),
        d = t && a ? null : (0, c.jsx)(aV.A, { className: u()(aY.x6, n), color: a ? void 0 : ah.XD.WHITE });
    return (0, c.jsxs)("div", { className: u()(aY.UD, i), children: [o, " ", d] });
}
function aK() {
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(av.p, { className: aY.zd }),
            (0, c.jsx)(av.p, { className: aY.G }),
            (0, c.jsx)(av.p, { className: aY.zy }),
            (0, c.jsx)(av.p, { className: aY.GX }),
        ],
    });
}
function aZ(e) {
    let { variant: t = "body-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        n = al();
    return (0, c.jsx)(q.E, {
        variant: t,
        color: i ? "text-subtle" : "text-overlay-light",
        className: u()(aY.h_, { [aY.If]: s, [aY.jn]: i }),
        children: eC.intl.format(eC.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let aq = function (e) {
    let { className: t, buttonClassName: s, subscriptionTier: i, isDarkMode: n, ref: a } = e,
        { analyticsLocations: l } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        r = (0, ec.QQ)(),
        o = (0, nN.ar)(),
        d = (0, i4.b)().length > 0,
        m = eC.intl.string(eC.t.YCZldK);
    return (0, c.jsx)(A.f5, {
        value: l,
        children: (0, c.jsxs)("div", {
            ref: a,
            className: u()(aY.kL, t, { [aY.V1]: !o, [aY.Q4]: !o && d }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, c.jsxs)("div", {
                    className: o ? aY.I6 : aY.G1,
                    children: [
                        (0, c.jsx)(eL.F, {
                            forceLevel: 1,
                            children: (0, c.jsx)(eU.D, {
                                variant: o ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: m,
                            }),
                        }),
                        d
                            ? (0, c.jsx)("div", {
                                  className: aY.DF,
                                  children: (0, c.jsx)(ai.A, { textColor: "text-overlay-light", smallerText: !o }),
                              })
                            : (0, c.jsx)(aZ, {}),
                        r
                            ? (0, c.jsx)("div", {
                                  className: aY.UD,
                                  children: (0, c.jsx)(aV.A, { className: u()(aY.x6, s), color: ah.XD.WHITE }),
                              })
                            : (0, c.jsx)(aX, {
                                  subscriptionTier: i,
                                  inOfferExperience: o,
                                  buttonClassName: s,
                                  isDarkMode: n,
                              }),
                        d && (0, c.jsx)(aZ, { variant: "body-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !o && (0, c.jsx)(aK, {}),
            ],
        }),
    });
};
var aJ = s(403227),
    aQ = s(145359),
    a$ = s(377770);
function a0(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, c.jsx)(aF, { lifted: t }) : null;
}
let a1 = () => {
        let { enabled: e } = af.A.useConfig({ location: "PremiumMarketingHomeSettingsPage" });
        (0, v.P)(R);
        let t = o.useRef(null),
            s = o.useRef(null),
            i = o.useRef(null),
            n = (0, s0.Ay)(),
            a = (0, s$.M)(n),
            [l, r] = o.useState(!1),
            [d, m] = o.useState(!1),
            [g, p] = o.useState(!1),
            h = !l && !d,
            [f, b] = o.useState(!1),
            j = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            E = null != j ? (0, er.EL)(j) : null,
            T = null != E ? er.Ay.getSkuIdForPlan(E.planId) : null,
            C = null !== T && T !== tf.pe.TIER_2 ? tf.pe.TIER_2 : null,
            I = (0, eu.V)(),
            _ = I?.subscriptionTrial?.skuId,
            y = (0, nN.ar)(),
            P = !e && y,
            S = (0, x.bG)([aA.A], () => {
                let e = aA.A.getMarketingComponentBySurface(X.oW.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e ? null : e.surface;
            }),
            D = (0, aj.Q)(),
            { analyticsLocations: k } = (0, A.Ay)(N.A.PREMIUM_MARKETING);
        o.useEffect(() => {
            b(!0);
        }, []);
        let L = e
            ? (0, c.jsx)("div", {
                  className: a$.OE,
                  children: (0, c.jsx)(U.L, {
                      innerRef: t,
                      onChange: m,
                      threshold: 0.1,
                      active: !0,
                      children: (0, c.jsx)(ny, { innerRef: t, variant: "settings" }),
                  }),
              })
            : (0, c.jsx)("div", {
                  className: a$.dY,
                  children: (0, c.jsx)(U.L, {
                      innerRef: t,
                      onChange: (e) => m(e),
                      threshold: 0.1,
                      active: !0,
                      children: (0, c.jsx)(ns.qu, {
                          innerRef: t,
                          tier0CTAButton: (0, c.jsx)(aE.A, {
                              showIcon: !1,
                              subscriptionTier: tf.pe.TIER_0,
                              className: aQ.Ph,
                              look: ah.pR.OUTLINED,
                              color: ah.XD.WHITE,
                              buttonShineClassName: aQ.Qr,
                          }),
                          tier2CTAButton:
                              _ === tf.pe.TIER_0
                                  ? (0, c.jsx)(aE.A, {
                                        showIcon: !1,
                                        subscriptionTier: tf.pe.TIER_2,
                                        className: aQ.Ph,
                                        look: ah.pR.OUTLINED,
                                        color: ah.XD.WHITE,
                                        buttonShineClassName: aQ.Qr,
                                    })
                                  : (0, c.jsx)(aE.A, {
                                        color: ah.XD.BRAND_INVERTED,
                                        showIcon: !1,
                                        subscriptionTier: tf.pe.TIER_2,
                                        className: aQ.Ph,
                                        textOptions: { textClassName: aQ.Ac },
                                        buttonShineClassName: aQ.Qr,
                                    }),
                      }),
                  }),
              });
        return (0, c.jsxs)("div", {
            className: u()(a$.kL, { [a$.N4]: e }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(aB, {
                    premiumSubscription: j,
                    textColor: e ? "text-default" : void 0,
                    className: u()(a$.R3, { [a$.aZ]: y }),
                }),
                P &&
                    (0, c.jsxs)("div", {
                        className: a$.n1,
                        children: [
                            (0, c.jsx)(a0, { inOfferExperience: y }),
                            (0, c.jsx)(tv.l, {
                                className: a$.ij,
                                size: "md",
                                location: N.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                        ],
                    }),
                (0, c.jsxs)("div", {
                    className: u()({ [a$.V1]: !P }),
                    children: [
                        null != S && (0, c.jsx)(aN.m, { className: a$.w$, config: S }),
                        (0, c.jsxs)("div", {
                            className: a$.iS,
                            children: [
                                !P &&
                                    (0, c.jsx)(tv.l, {
                                        className: a$.ij,
                                        size: "md",
                                        location: N.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, c.jsx)(U.L, {
                                    innerRef: s,
                                    onChange: (e) => r(e),
                                    threshold: 0,
                                    active: !0,
                                    children: e
                                        ? (0, c.jsx)(ad, { ref: s, subscriptionTier: C, variant: "settings" })
                                        : (0, c.jsx)(aq, {
                                              ref: s,
                                              subscriptionTier: C,
                                              className: u()({ [a$.p7]: y, [a$.Pw]: y, [a$.Cv]: null != j }),
                                              isDarkMode: a,
                                          }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != D && (0, c.jsx)("div", { className: a$.Ol, children: (0, c.jsx)(ab.I, { component: D }) }),
                L,
                e ? (0, c.jsx)(aU, { className: a$.OE }) : (0, c.jsx)(ak, { className: a$.B_ }),
                (0, c.jsx)("div", {
                    className: a$.aC,
                    children: e
                        ? (0, c.jsx)(au.A, { variant: "settings" })
                        : (0, c.jsx)(aJ.A, { className: a$.JQ, hideCTAs: !0 }),
                }),
                (0, c.jsx)("div", { className: a$.hz }),
                e
                    ? (0, c.jsx)(nk, { isVisible: h && f, subscriptionTier: C, variant: "settings" })
                    : (0, c.jsx)(az, { isVisible: h && f, subscriptionTier: C, isApplicationHome: !1 }),
                (0, c.jsx)(U.L, {
                    innerRef: i,
                    onChange: (e) => {
                        e &&
                            !g &&
                            (O.default.track(eK.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: k }),
                            p(!0));
                    },
                    children: (0, c.jsx)("div", { ref: i, className: a$._Z }),
                }),
                (0, c.jsx)("img", {
                    src: i8,
                    className: a$.Kw,
                    width: 112,
                    height: 85,
                    alt: eC.intl.string(eC.t.X4IxWL),
                }),
            ],
        });
    },
    a2 = function (e) {
        let { entrypoint: t } = e,
            s = (0, eu.V)(),
            i = (0, ed.O)(),
            n = (0, nt.NF)({ trialOffer: s }),
            a = (0, nt.Tp)(),
            l = (0, x.bG)([ne.A], () => ne.A.getReminderStateId());
        switch (
            (o.useEffect(() => {
                (!0 === n && (0, nt.QG)(), !0 === a && (0, nt.ne)(l), (null != s || null != i) && (0, L.u1)(s, i));
            }, [s, i, n, a, l]),
            t)
        ) {
            case tf.tU.UserSettings:
                return (0, c.jsx)(a1, {});
            case tf.tU.ApplicationStoreHome:
                return (0, c.jsx)(ap, {});
            default:
                return null;
        }
    };
var a3 = s(531296);
let a6 = function (e) {
    let { entrypoint: t = tf.tU.UserSettings } = e;
    (0, v.P)(R);
    let s = (0, j.Hp)(),
        { sourceAnalyticsLocations: i, analyticsLocations: n } = (0, A.Ay)(N.A.PREMIUM_MARKETING),
        a = (0, x.bG)([M.A], () => M.A.hasFetchedSubscriptions()),
        l = (0, x.bG)([D.A], () => D.A.hasFetchedPaymentSources),
        r = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        d = r?.id,
        C = (0, eu.V)(),
        I = (0, ed.O)(),
        U = (0, E.Y)(tf.T7),
        [G, w] = o.useState(!0),
        B = o.useRef(0),
        H = (0, k.YE)(r, tf.PremiumTypes.TIER_2);
    ((0, i4.b)(),
        o.useEffect(() => {
            !(async function () {
                let e = Date.now();
                (await Promise.all([b.hP(), b.$o(), (0, p.zS)(null, null, eK.tF5.DISCOVERY)]),
                    (B.current = Date.now() - e),
                    w(!1));
            })();
        }, []),
        o.useEffect(() => {
            G ||
                O.default.track(eK.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: i,
                    load_duration_ms: B.current,
                });
        }, [i, G]),
        o.useEffect(() => {
            s && (null != C || null != I) && (0, L.u1)(C, I);
        }, [s, C, I]));
    let F = (0, m.zy)(),
        V = o.useRef(!1),
        W = a && l && U,
        [z, Y] = o.useState(W);
    (W && !z && Y(!0),
        o.useEffect(() => {
            if (V.current || !W) return;
            let e = new URLSearchParams(F.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: tf.pe.TIER_0, nitro: tf.pe.TIER_2 },
                s = Object.hasOwn(t, e) ? t[e] : void 0;
            null != s &&
                ((V.current = !0),
                (0, y.bG)(eK.BVt.APPLICATION_STORE),
                (0, _.A)({ subscriptionTier: s, analyticsLocations: n }));
        }, [W, F.search, n]));
    let X = (0, x.bG)([P.A], () => P.A.enabled),
        K = t === tf.tU.ApplicationStoreHome,
        Z = X
            ? (0, c.jsx)(h.A, {})
            : s
              ? (0, c.jsx)(T.uK, {})
              : K && H
                ? (0, c.jsx)(A.f5, { value: n, children: (0, c.jsx)(i9, { userId: d }) })
                : z
                  ? null
                  : (0, c.jsx)("div", { className: u()(a3.kL, a3.Lq), children: (0, c.jsx)(g.y, {}) });
    return null != Z
        ? !X && !s && K && H
            ? Z
            : (0, c.jsxs)(c.Fragment, { children: [K && (0, c.jsx)(f.A, {}), Z] })
        : (0, c.jsx)(A.f5, { value: n, children: (0, c.jsx)(a2, { entrypoint: t }) });
};
