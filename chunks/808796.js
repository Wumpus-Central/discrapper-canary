(i.d(t, { A: () => lh }), i(323874), i(14289), i(35956), i(205816));
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
    h = i(73825),
    p = i(369143),
    f = i(107834),
    N = i(793574),
    A = i(688810),
    j = i(669815),
    b = i(86379),
    E = i(160946),
    T = i(500597),
    I = i(840251),
    C = i(688151);
let R = new I.E([], C.$G.OPEN_NITRO, { location: "open nitro tab/settings" });
var v = i(611924),
    _ = i(778705),
    y = i(976860),
    P = i(351906),
    S = i(287809),
    D = i(295405),
    M = i(166403),
    O = i(129230),
    k = i(474090),
    L = i(739053),
    U = i(831259),
    G = i(516521),
    w = i(961250),
    B = i(622886),
    H = i(851767),
    F = i(917445),
    V = i(131168),
    W = i(511484),
    z = i(175020),
    X = i(517352),
    Y = i(192308),
    K = i(331322),
    q = i(834730),
    Z = i(403581),
    J = i(821609),
    Q = i(502572),
    $ = i(775602),
    ee = i(366999),
    et = i(531260),
    ei = i(780964),
    es = i(766075),
    en = i(786300),
    ea = i(975571),
    el = i(448645),
    er = i(89366),
    ec = i(881489),
    eo = i(423814),
    ed = i(77528),
    eu = i(641436),
    em = i(172218);
function ex() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, i] = (0, o.useState)(1),
        s = (0, o.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, em.B)(
            (e) => {
                i(e.intersectionRatio);
            },
            s,
            e,
        ),
        visibilityPercentage: t,
    };
}
var eg = i(287763);
let eh = function (e) {
    let { text: t } = e;
    return (0, c.jsx)("div", {
        className: eg.i,
        children: (0, c.jsx)(q.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t }),
    });
};
var ep = i(371764),
    ef = i(103411),
    eN = i(65470),
    eA = i(792656),
    ej = i(536637),
    eb = i.n(ej),
    eE = i(496431),
    eT = i(792996),
    eI = i(850292);
let eC = function (e) {
    let { expiresAt: t, className: i, digitTextVariant: s = "body-md/medium" } = e,
        n = (0, eE.A)(eb()(t).toDate(), 1e3);
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
            (0, c.jsx)(q.E, {
                variant: "body-sm/semibold",
                color: "text-strong",
                children: eT.intl.string(eT.t["/ARFVE"]),
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
                                                        children: (0, c.jsx)(q.E, {
                                                            variant: i,
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: eI.B2,
                                                        children: (0, c.jsx)(q.E, {
                                                            variant: i,
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
                                                            return eT.intl.string(eT.t.ixASa2);
                                                        case "hours":
                                                            return eT.intl.string(eT.t["8sNvNn"]);
                                                        case "minutes":
                                                            return eT.intl.string(eT.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return eT.intl.string(eT.t.JhaiLW);
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
                    })(e, t === d.length - 1, s),
                ),
            }),
        ],
    });
};
var eR = i(473702),
    ev = i(778712),
    e_ = i(97808),
    ey = i(609425),
    eP = i(16371),
    eS = i(854627),
    eD = i(427262),
    eM = i(938767);
function eO() {
    let e = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        t = (0, ey.A)(),
        { avatarSrc: i, avatarDecorationSrc: s, eventHandlers: n } = (0, eS.A)({ userId: e?.id, size: ev._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, eD.mG)(e);
    return (0, c.jsxs)("div", {
        className: eM.kL,
        children: [
            (0, c.jsx)("div", {
                className: eM.my,
                children: (0, c.jsx)(e_.eu, {
                    src: i,
                    avatarDecoration: s,
                    size: ev._3.SIZE_56,
                    "aria-label": a,
                    ...n,
                }),
            }),
            (0, c.jsx)("div", { className: eM.QC, children: (0, c.jsx)(eP.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var ek = i(707554),
    eL = i(534514);
let eU = function (e) {
    let { className: t, color: i = "text-strong", variant: s = "nitro-lg", children: n } = e;
    return (0, c.jsx)(ek.F, {
        forceLevel: 1,
        children: (0, c.jsx)(eL.D, { className: t, variant: s, color: i, children: n }),
    });
};
var eG = i(805251),
    ew = i(969935),
    eB = i(132506),
    eH = i(610709),
    eF = i(478016),
    eV = i(318254),
    eW = i(646514),
    ez = i(626031),
    eX = i(197630);
i(232198);
var eY = i(652215),
    eK = i(957457);
function eq(e) {
    let { nRewardsGranted: t, referralRewardType: i, className: s } = e;
    return t < 1
        ? null
        : i === eX.xb.ORBS
          ? (0, c.jsx)(eZ, { nRewardsGranted: t, className: s })
          : i === eX.xb.DISCOUNT
            ? (0, c.jsx)(eJ, { nRewardsGranted: t, className: s })
            : null;
}
function eZ(e) {
    let { nRewardsGranted: t, className: i } = e,
        s = 5e3 * t,
        [n, a] = o.useState(0);
    return (
        o.useEffect(() => {
            a(s);
        }, [s]),
        (0, c.jsxs)(K.B, {
            direction: "horizontal",
            align: "center",
            gap: 0,
            fullWidth: !1,
            className: i,
            children: [
                (0, c.jsxs)("div", {
                    className: eK.u,
                    "aria-label": String(s),
                    children: [
                        (0, c.jsx)(eV.OrbsIcon, { size: "xs", color: eW.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                        (0, c.jsx)(ez.t, {
                            value: n,
                            onValueChange: eY.tEg,
                            onValueReached: eY.tEg,
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
                    children: eT.intl.string(eT.t.UhguER),
                }),
            ],
        })
    );
}
function eJ(e) {
    let { nRewardsGranted: t, className: i } = e;
    return (0, c.jsxs)(K.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        fullWidth: !1,
        className: i,
        "aria-label": eT.intl.formatToPlainString(eT.t["P//01n"], { discountPercent: 30, duration: t }),
        children: [
            (0, c.jsx)(eF.CheckmarkSmallIcon, { size: "md", color: eW.A.colors.ICON_FEEDBACK_POSITIVE }),
            (0, c.jsx)(q.E, {
                variant: "body-sm/medium",
                color: "text-strong",
                children: eT.intl.format(eT.t["P//01n"], { discountPercent: 30, duration: t }),
            }),
        ],
    });
}
var eQ = i(303682),
    e$ = i(758836),
    e0 = i(558992);
function e1(e) {
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
        } = (0, eB.k)({ location: "PremiumNitroHomeReferralBannerTreatment" });
    return (0, c.jsxs)("div", {
        className: u()(e0.kL, t),
        children: [
            (0, c.jsx)("div", {
                className: e0.G3,
                children: (0, c.jsx)(eH.fx, {
                    nReferralsSent: s,
                    imageSize: 55,
                    backgroundClassName: e0.HP,
                    ringClassName: e0.pZ,
                    referralRewardType: m,
                    useAltReferralCardArt: d && x,
                }),
            }),
            (0, c.jsxs)("div", {
                className: u()(e0.IH, d && e0.zD),
                children: [
                    d &&
                        (0, c.jsx)("div", {
                            className: e0.aZ,
                            children: (0, c.jsx)(eG.E, { type: "beta", variant: "expressive" }),
                        }),
                    (0, c.jsxs)("div", {
                        className: e0.n4,
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
                              className: e0.Wp,
                              children: [
                                  (0, c.jsx)(eH.ZP, { referralSentUsers: i }),
                                  (0, c.jsx)(eq, { nRewardsGranted: o.numRewardGranted, referralRewardType: m }),
                              ],
                          })
                        : (0, c.jsx)(eH.ZP, { referralSentUsers: i, className: e0.t7 }),
                ],
            }),
            (0, c.jsx)(J.$, {
                variant: "primary",
                disabled: !g && (!1 === n || !0 === a),
                text: g ? eT.intl.string(eT.t.iw5Ccc) : eT.intl.string(eT.t.Lm2nFc),
                onClick: () =>
                    g
                        ? (0, ew.Cz)({
                              tab: e$.G2.ORBS,
                              analyticsLocations: [],
                              analyticsSource: N.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR,
                          })
                        : (0, eH.jM)({
                              startingScreen: eQ.SelectFriendsModalScreens.SELECT_FRIENDS,
                              analyticsLocations: [],
                          }),
            }),
        ],
    });
}
var e2 = i(164636),
    e3 = i(676279),
    e6 = i(120692),
    e7 = i(717421),
    e8 = i(396583),
    e5 = (((s = {}).SINE = "sine"), (s.COSINE = "cosine"), s),
    e9 = (((n = {}).UP = "up"), (n.DOWN = "down"), n);
let e4 = (e) => {
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
        u = (0, e7.z)(
            null != s ? { from: { y: 0 }, to: { y: 1 }, config: { duration: s.duration * r }, loop: !0 } : { y: 0 },
        ),
        m = s?.path === "sine" ? Math.sin : Math.cos,
        [x, g] = (0, o.useState)(1),
        h = (0, e7.z)(
            null != i
                ? {
                      from: { scale: x > 0 ? i.startScale : i.endScale },
                      to: { scale: x > 0 ? i.endScale : i.startScale },
                      config: { duration: i.duration * r },
                      onRest: () => g((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [p, f] = (0, o.useState)(1),
        N = (0, e7.z)(
            null != t
                ? {
                      from: { blur: p > 0 ? t.startBlurRadius : t.endBlurRadius },
                      to: { blur: p > 0 ? t.endBlurRadius : t.startBlurRadius },
                      config: { duration: t.duration * r },
                      onRest: () => f((e) => -1 * e),
                  }
                : { blur: 0 },
        ),
        A = (0, o.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * r), [r]),
        [j, b] = (0, o.useState)(0),
        [E, T] = (0, o.useState)(1),
        I = (0, e7.z)({ xOffset: j, config: { tension: 10, friction: 10, duration: A } });
    return ((0, e8.A)(() => {
        (b(E * (0.5 * Math.random() * 5 + 2.5)), T((e) => -1 * e));
    }, A),
    l)
        ? d
        : (0, c.jsx)(e6.animated.div, {
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
                  scale: h.scale,
                  filter: N.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != n && n.changeOpacity ? n.containerVisibilityPercentage : 1,
              },
              children: d,
          });
};
var te = i(382168);
let tt = function (e) {
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
        animationSpeedScale: h = 1,
        blurScale: p = 1,
        animateStar: f = !0,
    } = e;
    return (0, c.jsxs)(c.Fragment, {
        children: [
            null != s &&
                (0, c.jsx)("div", {
                    className: u()(te.nJ, s),
                    children: (0, c.jsx)(e4, {
                        blurAnimationData: { startBlurRadius: 10 * p, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e5.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: e9.UP,
                                      range: 125,
                                      containerVisibilityPercentage: i,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: h,
                        children: (0, c.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/ae5638c61a572593c6b03b92e80d3846e0cfe7a9e893f3faf05aecd670a4017d.png",
                            className: o,
                            alt: "",
                        }),
                    }),
                }),
            null != n &&
                (0, c.jsx)("div", {
                    className: u()(te.IN, n),
                    children: (0, c.jsx)(e4, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e5.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: e9.DOWN,
                                      range: 50,
                                      containerVisibilityPercentage: i,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: h,
                        children: (0, c.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/6cb761e3e97838c7927f738882b67bd825d5eeed89633e0af126bda5f9d4e71d.png",
                            className: d,
                            alt: "",
                        }),
                    }),
                }),
            null != a &&
                (0, c.jsx)("div", {
                    className: u()(te.Gj, a),
                    children: (0, c.jsx)(e4, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e5.SINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: e9.DOWN,
                                      range: 120,
                                      containerVisibilityPercentage: i,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: h,
                        children: (0, c.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/b39a5f2755e6da320fce10c8a4a10bdebef9926b671256b1681976198c5656d4.png",
                            className: m,
                            alt: "",
                        }),
                    }),
                }),
            null != l &&
                (0, c.jsx)("div", {
                    className: u()(te.FV, l),
                    children: (0, c.jsx)(e4, {
                        blurAnimationData: { startBlurRadius: 5 * p, endBlurRadius: 0, duration: 4e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: e5.SINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: e9.UP,
                                      range: 200,
                                      containerVisibilityPercentage: i,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: h,
                        children: (0, c.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/7c23a220a6f31150648930e2ebb435aa7cc89ad57895275bed6f1900869f4de0.png",
                            className: x,
                            alt: "",
                        }),
                    }),
                }),
            null != r &&
                (0, c.jsx)("div", {
                    className: u()(te.E1, r),
                    children: (0, c.jsx)(e4, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * p, duration: 3e3 },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: e5.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: e9.UP,
                                      range: 50,
                                      containerVisibilityPercentage: i,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t || !f,
                        animationSpeedScale: h,
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
var ti = i(607470),
    ts = i(562915);
let tn =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    ta = function (e) {
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
                          ? ts.A
                          : "https://cdn.discordapp.com/assets/content/46e72137fc3631c8024b00c33dbab5cf45740d4ab35f77bd96517830e727d0c5.png",
                      alt: "",
                      className: a,
                  }),
              })
            : (0, c.jsx)("div", {
                  className: n,
                  children: (0, c.jsx)(e4, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                      yAxisAnimationData: { range: 20, duration: 4e3, path: e5.SINE },
                      parallaxAnimationData: {
                          pathDirection: e9.UP,
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
                                ti.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: a,
                                    children: (0, c.jsx)("source", { src: tn }),
                                },
                                tn,
                            ),
                  }),
              });
    },
    tl = function (e) {
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
                animationSpeedScale: h = 1,
            } = e,
            p = (0, e2.bG)([$.Ay], () => $.Ay.useReducedMotion),
            f = (0, e3.TM)();
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(ta, {
                    supportHEVCAlpha: f,
                    isMotionReduced: p,
                    containerVisibilityPercentage: t,
                    containerClassName: i,
                    assetClassName: s,
                    animationSpeedScale: h,
                }),
                (0, c.jsx)(tt, {
                    isMotionReduced: p,
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
                    animationSpeedScale: h,
                }),
            ],
        });
    };
var tr = i(942663);
let tc = function (e) {
    let { containerVisibilityPercentage: t, compact: i } = e;
    return (0, c.jsx)(tl, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: u()(tr.wG, i && tr.Vx),
        flyingWumpusAssetClassName: u()(tr.lu, i && tr.ov),
        boltContainerClassName: u()(tr.nJ, i && tr.Wc),
        hammerContainerClassName: u()(tr.Gj, i && tr.XA),
        keyContainerClassName: u()(tr.FV, i && tr.oZ),
        starContainerClassName: u()(tr.E1, i && tr.LN),
        boltAssetClassName: u()(tr.j7, i && tr.QN),
        hammerAssetClassName: u()(tr.Wv, i && tr.B9),
        keyAssetClassName: u()(tr.rs, i && tr.I1),
        starAssetClassName: u()(tr.OY, i && tr.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var to = (((a = {}).MORNING = "morning"), (a.AFTERNOON = "afternoon"), (a.EVENING = "evening"), a),
    td = i(454273);
let tu = function (e) {
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
        { visibilityPercentageRef: m, visibilityPercentage: g } = ex(!(0, x.bG)([$.Ay], () => $.Ay.useReducedMotion)),
        h =
            ((t = { [to.MORNING]: eT.t["Wvc/I+"], [to.AFTERNOON]: eT.t["d+0STx"], [to.EVENING]: eT.t.CqsxKI }),
            eT.intl.string(
                t[
                    (i = new Date().getHours()) >= 5 && i < 12
                        ? to.MORNING
                        : i >= 12 && i < 17
                          ? to.AFTERNOON
                          : to.EVENING
                ],
            )),
        p = o ?? (r ? (0, c.jsx)(e1, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(td.kL, td.Eg, s),
        ref: l,
        children: (0, c.jsxs)("div", {
            className: u()(td.W2, td.HQ),
            ref: m,
            children: [
                (0, c.jsxs)(K.B, {
                    align: "start",
                    gap: 32,
                    className: td.ZU,
                    children: [
                        a && n,
                        (0, c.jsxs)(K.B, {
                            align: "start",
                            gap: "lg",
                            children: [
                                (0, c.jsxs)(K.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, c.jsx)(eU, { color: "text-default", variant: "nitro-md", children: h }),
                                        (0, c.jsx)(eO, {}),
                                    ],
                                }),
                                d,
                            ],
                        }),
                        p,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: td.y3,
                    children: (0, c.jsx)(tc, { containerVisibilityPercentage: g, compact: null == p }),
                }),
            ],
        }),
    });
};
var tm = i(549926);
let tx = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(tl, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: tm.wG,
        flyingWumpusAssetClassName: tm.lu,
        boltContainerClassName: tm.nJ,
        hammerContainerClassName: tm.Gj,
        keyContainerClassName: tm.FV,
        starContainerClassName: tm.E1,
        boltAssetClassName: tm.j7,
        hammerAssetClassName: tm.Wv,
        keyAssetClassName: tm.rs,
        starAssetClassName: tm.OY,
        animationSpeedScale: 1 / 0.7,
    });
};
var tg = i(499126);
let th = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(tl, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: tg.wG,
        flyingWumpusAssetClassName: tg.lu,
        boltContainerClassName: tg.nJ,
        hammerContainerClassName: tg.Gj,
        keyContainerClassName: tg.FV,
        starContainerClassName: tg.E1,
        boltAssetClassName: tg.j7,
        hammerAssetClassName: tg.Wv,
        keyAssetClassName: tg.rs,
        starAssetClassName: tg.OY,
        animationSpeedScale: 1 / 0.7,
    });
};
var tp = i(682901);
function tf(e) {
    let { fpEndsAt: t, className: i, buttonVisibilityRef: s } = e,
        n = (0, ec.Zb)(t),
        { visibilityPercentageRef: a, visibilityPercentage: l } = ex(!(0, x.bG)([$.Ay], () => $.Ay.useReducedMotion));
    return (0, c.jsx)("div", {
        className: u()(td.kL, i),
        ref: s,
        children: (0, c.jsxs)("div", {
            className: td.Gs,
            ref: a,
            children: [
                (0, c.jsxs)(K.B, {
                    align: "start",
                    gap: 24,
                    className: td.E2,
                    children: [
                        (0, c.jsxs)(K.B, {
                            align: "start",
                            gap: 12,
                            children: [
                                (0, c.jsx)(eh, { text: eT.intl.string(eT.t.yhldRB) }),
                                (0, c.jsx)(eU, { children: eT.intl.format(eT.t.FwjP6W, { days: n }) }),
                                (0, c.jsx)("div", {
                                    className: td.X8,
                                    children: (0, c.jsx)(q.E, {
                                        variant: "body-md/medium",
                                        color: "text-default",
                                        children: eT.intl.string(eT.t.Jf8KrT),
                                    }),
                                }),
                            ],
                        }),
                        (0, c.jsxs)(K.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            className: td.oF,
                            children: [
                                (0, c.jsx)(eA.A, {
                                    size: "md",
                                    buttonTextOverride: eT.intl.string(eT.t["2+luBl"]),
                                    iconOverride: Z.NitroWheelIcon,
                                    variantOverride: "expressive",
                                }),
                                (0, c.jsx)(J.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: eT.intl.string(eT.t.Af7ye6),
                                    onClick: () => (0, es.openUserSettings)(ei.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, c.jsx)("div", { className: td.Hk, children: (0, c.jsx)(th, { containerVisibilityPercentage: l }) }),
            ],
        }),
    });
}
function tN(e) {
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
        { visibilityPercentageRef: h, visibilityPercentage: p } = ex(!(0, x.bG)([$.Ay], () => $.Ay.useReducedMotion)),
        f = g ?? (m ? (0, c.jsx)(e1, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(td.kL, td.Eg, t),
        ref: s,
        children: (0, c.jsxs)("div", {
            className: u()(td.W2, td.HQ),
            ref: h,
            children: [
                (0, c.jsxs)(K.B, {
                    align: "start",
                    gap: 32,
                    className: u()(td.ZU, td.GW),
                    children: [
                        d && o,
                        null != n.expiresAt &&
                            (0, c.jsx)(eC, {
                                expiresAt: n.expiresAt.toISOString(),
                                digitTextVariant: "body-lg/semibold",
                            }),
                        (0, c.jsxs)(K.B, {
                            align: "start",
                            gap: 16,
                            children: [
                                (0, c.jsx)(eU, {
                                    children: eT.intl.format(eT.t["3yZP0G"], { percent: n.discount.amount }),
                                }),
                                null != a &&
                                    (0, c.jsx)(q.E, {
                                        variant: "body-md/medium",
                                        color: "text-default",
                                        children: eT.intl.format(eT.t["3Q4wCy"], {
                                            discountedPrice: a,
                                            billingPeriod: (0, el.Ke)(n.discount.intervalType),
                                            numMonths: n.discount.intervalCount,
                                        }),
                                    }),
                            ],
                        }),
                        (0, c.jsxs)(K.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            wrap: !0,
                            children: [
                                (0, c.jsx)(J.$, {
                                    variant: "expressive",
                                    icon: Z.NitroWheelIcon,
                                    size: "md",
                                    text: eT.intl.string(eT.t.zrCzVB),
                                    onClick: () => {
                                        var e;
                                        return (
                                            (e = eR.g.CONFIRM_DISCOUNT),
                                            void (0, Y.mM)(async () => {
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
                                (0, c.jsx)(eN.A, {
                                    variant: "secondary",
                                    size: "md",
                                    buttonTextOverride: eT.intl.string(eT.t["3KomGa"]),
                                }),
                            ],
                        }),
                        f,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: u()(td.y3, td.Xx),
                    children: (0, c.jsx)(tx, { containerVisibilityPercentage: p }),
                }),
            ],
        }),
    });
}
function tA(e) {
    let { className: t, isInReverseTrial: i, shouldShowReferralProgressBar: s } = e,
        {
            headingTop: n,
            showPill: a,
            shouldShowChurnVariant: l,
            premiumSubscription: r,
            userDiscountOffer: o,
            discountedPrice: d,
            buttonVisibilityRef: u,
        } = tb(),
        { analyticsLocations: m } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        x = (0, eu.uF)(X.oW.MARKETING_PAGE_BANNER),
        g = null != r && r.status === eY.Dmq.CANCELED,
        h = null;
    if (null != x) {
        let { surface: e, id: t, promotionId: i, componentType: s } = x;
        h = (0, c.jsx)(ep.x, {
            componentId: t,
            componentType: s,
            promotionId: i,
            promotionBannerMarketingComponentFields: e,
        });
    }
    let p = (0, ed.V)(),
        f = (0, eo.O)(),
        j = (0, W.U9)(f, tp.pe.TIER_2) ? tp.pe.TIER_2 : void 0,
        b = null != r && r.status !== eY.Dmq.ACCOUNT_HOLD && r.hasAnyPremiumNitro,
        E = (0, et.A)(),
        T = E.isFractionalPremiumActive && !b && null == h && !l;
    if (i) return (0, c.jsx)(tf, { fpEndsAt: E.currentEntitlementEndsAt, className: t, buttonVisibilityRef: u });
    if (!g) {
        let e = T
            ? (0, c.jsxs)("div", {
                  className: td.UJ,
                  children: [
                      (0, c.jsx)(eA.A, { size: "md", subscriptionTier: p?.subscriptionTrial?.skuId ?? j }),
                      (0, c.jsx)(eN.A, {
                          variant: "secondary",
                          size: "md",
                          buttonTextOverride: eT.intl.string(eT.t["3KomGa"]),
                      }),
                  ],
              })
            : null;
        return (0, c.jsx)(tu, {
            className: t,
            headingTop: n,
            showPill: a,
            buttonVisibilityRef: u,
            shouldShowReferralProgressBar: s,
            marketingBanner: h,
            heroButtons: e,
        });
    }
    return l && null != o && null != r
        ? (0, c.jsx)(tN, {
              className: t,
              buttonVisibilityRef: u,
              userDiscountOffer: o,
              discountedPrice: d,
              premiumSubscription: r,
              analyticsLocations: m,
              headingTop: n,
              showPill: a,
              shouldShowReferralProgressBar: s,
              marketingBanner: h,
          })
        : (0, c.jsx)(tu, {
              className: t,
              headingTop: n,
              showPill: a,
              buttonVisibilityRef: u,
              shouldShowReferralProgressBar: s,
              marketingBanner: h,
          });
}
let [tj, tb] = (0, en.A)(),
    tE = function (e) {
        let { className: t, buttonVisibilityRef: i, userDiscountOffer: s, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, ec.ds)(),
            r = (0, er.QQ)(),
            d = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            u = null != d && d.status === eY.Dmq.CANCELED && null != s,
            m = r && !u,
            g = eT.intl.string(eT.t.qYKftX),
            h = (0, ef.m)(),
            { fractionalState: p, endsAt: f } = (0, et.A)(),
            j = (0, ee.Ay)(f, ee.yE.CREDITS_ENDS_IN),
            b = p !== tp.xc.NONE && !l;
        b && (m = !0);
        let E = o.useMemo(() => {
                if (!b) return (0, c.jsx)(eh, { text: g });
                let e = eT.intl.format(eT.t["yR+oDD"], {
                    helpCenterLink: ea.A.getArticleURL(eY.MVz.FRACTIONAL_PREMIUM_ABOUT),
                });
                return (0, c.jsx)(Q.A, {
                    text: e,
                    "aria-label": e.toString(),
                    tooltipClassName: td.YL,
                    position: "right",
                    children: (e) =>
                        (0, c.jsx)("div", {
                            ...e,
                            className: td.V_,
                            children: (0, c.jsx)("div", { className: td.eL, children: (0, c.jsx)(eh, { text: j }) }),
                        }),
                });
            }, [b, g, j]),
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
                children: (0, c.jsx)(tA, { className: t, isInReverseTrial: l, shouldShowReferralProgressBar: h }),
            }),
        });
    };
var tT = i(435558),
    tI = i(308588),
    tC = i(24197),
    tR = i(28863),
    tv = i(212245),
    t_ = i(19191),
    ty = i(597758),
    tP = i(412260),
    tS = i(316511);
function tD(e) {
    return null != e.effectiveEndDate ? e.effectiveEndDate.getTime() + 1 : null;
}
function tM(e, t) {
    let i = e.filter((e) => e > t);
    return i.length > 0 ? Math.min(...i) : null;
}
var tO = i(706778),
    tk = i(498470),
    tL = i(807098),
    tU = i(92551),
    tG = i(637706),
    tw = i(788883),
    tB = i(700556),
    tH = i(821874);
function tF(e) {
    let { id: t, sectionClassName: i, heading: s, beforeGrid: n, grid: a, gridClassName: l } = e,
        r = tH.Ui;
    return (0, c.jsxs)("div", {
        id: t,
        className: i,
        children: [
            s,
            n,
            null != a ? (0, c.jsx)("div", { className: u()(r, null != n && tB.Jx, l), children: a }) : null,
        ],
    });
}
var tV = i(477106),
    tW = i(762493);
function tz(e) {
    let { component: t } = e,
        i = (function (e) {
            if ("nitroHomeSectionHeader" !== e.properties.properties.oneofKind) return null;
            let { nitroHomeSectionHeader: t } = e.properties.properties,
                i = e.getFormatVariableValues(eT.intl.currentLocale),
                s = (0, tU.n)(t.header, i),
                n = (0, tU.n)(t.subheader, i),
                a = s.ok ? s.content.trim() : "",
                l = n.ok ? n.content.trim() : "";
            return "" === a && "" === l ? null : { header: a, subheader: l };
        })(t);
    if (null == i) return null;
    let { header: s, subheader: n } = i,
        a = (0, tG.C)(t.surface.helpArticle, "");
    return (0, c.jsxs)(K.B, {
        gap: 8,
        className: tH.R_,
        children: [
            (0, c.jsx)(tw.A, { componentType: t.componentType, componentId: t.id, promotionId: t.promotionId }),
            "" !== s && (0, c.jsx)(eL.D, { variant: "nitro-sm", className: tB.U6, children: s }),
            ("" !== n || null != a) &&
                (0, c.jsxs)(q.E, {
                    variant: "body-md/medium",
                    color: "text-subtle",
                    children: [
                        n,
                        null != a &&
                            (0, c.jsxs)(c.Fragment, {
                                children: [
                                    "" !== n && " ",
                                    (0, c.jsx)(tR.Anchor, { href: a.url, children: a.linkText }),
                                ],
                            }),
                    ],
                }),
        ],
    });
}
function tX(e) {
    let { component: t } = e,
        { button: i, background: s, foreground: n, thirdPartyLogo: a } = t.surface,
        l = t.surface.description.trim(),
        { analyticsLocations: r } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
        d = (0, tv.p)(),
        u = (0, tL.T)(s),
        m = null != u && "" !== u,
        x = (0, tL.T)(n, m),
        g = (0, tL.T)(a, m),
        h = (function (e) {
            if (null == e || e.buttonAction === tI.dz.UNSPECIFIED) return;
            let t = e.copy.trim();
            return "" !== t ? t : void 0;
        })(i),
        p = o.useMemo(
            () =>
                null != i
                    ? (0, tk.h)({
                          buttonAction: i.buttonAction,
                          deeplinkSection: i.deeplinkSection,
                          applicationId: i.navigableStorefrontApplicationId?.value,
                          shopCollectionId: i.shopCollectionId?.value,
                          giftModalDestination: i.giftModalDestination,
                          analyticsLocations: r,
                          analyticsLocation: d.location,
                      })
                    : void 0,
            [d.location, r, i],
        );
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(tw.A, { componentType: t.componentType, componentId: t.id, promotionId: t.promotionId }),
            (0, c.jsx)(tO.S, {
                id: `nitro-perk-card-${t.id}`,
                title: t.surface.header.trim(),
                description: "" !== l ? l : void 0,
                caption: null != g && "" !== g ? (0, c.jsx)("img", { src: g, alt: "" }) : void 0,
                primaryAsset: x ?? void 0,
                backgroundAssetUrl: m ? u : void 0,
                ctaText: h,
                onCtaClick: null != h ? p : void 0,
                containerClassName: tH.Nr,
            }),
        ],
    });
}
function tY() {
    var e;
    let t,
        i,
        s,
        n,
        a,
        l,
        r = (0, eu.uF)(X.oW.NITRO_HOME_SECTION_HEADER),
        d =
            ((e = X.oW.NITRO_PERK_CARD),
            o.useEffect(() => {
                (0, ty.BE)();
            }, []),
            (t = (0, x.yK)([tP.A, t_.A], () =>
                tP.A.getActiveMarketingComponentsBySurfaceUnprioritized(e).filter((e) =>
                    (0, tS.A)(tP.A.getMarketingPromotionForEligibility(e.promotionId), t_.A),
                ),
            )),
            (i = (0, x.yK)([tP.A], () => t.map((e) => tP.A.getMarketingPromotionForEligibility(e.promotionId)), [t])),
            (s = o.useMemo(
                () => [...i.map((e) => e?.endDate.getTime() ?? null), ...t.map(tD)].filter((e) => null != e),
                [t, i],
            )),
            (n = o.useCallback(() => tM(s, Date.now()), [s])),
            (a = o.useCallback(
                (e) => {
                    let t;
                    return (
                        !(function i() {
                            let n = Date.now(),
                                a = tM(s, n);
                            null == a ||
                                a - n >= eu.Th ||
                                (t = setTimeout(() => {
                                    (i(), e());
                                }, a - n));
                        })(),
                        () => clearTimeout(t)
                    );
                },
                [s],
            )),
            (l = o.useSyncExternalStore(a, n, n)),
            o.useMemo(
                () =>
                    t.filter((e, t) => {
                        var s;
                        return ((s = i[t]), !(null != s && (null == l || s.endDate.getTime() < l)));
                    }),
                [t, i, l],
            )),
        m = o.useMemo(() => {
            let e;
            return (
                (e = d.filter((e) => {
                    let { surface: t } = e;
                    return "" !== t.header.trim() && t.placements.includes(tC.U.NITRO_HOME);
                })),
                (0, tT.sortBy)(e, (e) => {
                    let { surface: t } = e;
                    return 0 === t.position ? 1 / 0 : t.position;
                })
            );
        }, [d]);
    return 0 === m.length
        ? null
        : (0, c.jsx)(tF, {
              sectionClassName: u()(tW.uW, tW.Uv, tW.qr),
              heading: null != r ? (0, c.jsx)(tz, { component: r }) : null,
              gridClassName: tV.V,
              grid: m.map((e) => (0, c.jsx)(tX, { component: e }, e.id)),
          });
}
var tK = i(820284),
    tq = i(742589),
    tZ = i(392943),
    tJ = i(521440),
    tQ = i(603202),
    t$ = i(673992);
let t0 = function () {
    return (0, c.jsx)(tK.A, {
        section: eY.JJy.NAVIGATION,
        children: (0, c.jsx)(tq.A, {
            className: u()(tQ.TQ, t$.C$),
            transparent: !0,
            role: "navigation",
            children: (0, c.jsxs)("div", {
                className: tQ.Wc,
                children: [
                    (0, c.jsxs)("div", {
                        className: t$.wk,
                        children: [
                            (0, c.jsx)(Z.NitroWheelIcon, { colorClass: t$.tr }),
                            (0, c.jsx)("span", {
                                role: "img",
                                "aria-label": eT.intl.string(eT.t.Ipxkog),
                                className: t$.Ss,
                                children: (0, c.jsx)(tZ.A, { color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: tQ.MQ,
                        children: [
                            (0, c.jsx)(tJ.l, { size: "sm", location: N.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB }),
                            (0, c.jsx)(eN.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var t1 = i(325499),
    t2 = i(613412),
    t3 = i(885574),
    t6 = i(43990),
    t7 = i(993077),
    t8 = i(139286),
    t5 = i(872725),
    t9 = i(920050),
    t4 = i(51965),
    ie = i(375776),
    it = i(727811),
    ii = i(222652),
    is = i(831768),
    ia = i(934353);
function il(e) {
    let { openRewardModal: t } = e,
        i = (0, ii.z)();
    if (i.kind === ii.N.SUBSCRIBE)
        return (0, c.jsxs)("div", {
            className: ia.R$,
            children: [
                (0, c.jsx)(eA.A, {
                    defaultTextOverride: i.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: tp.pe.TIER_2,
                }),
                (0, c.jsx)(J.$, { variant: "secondary", size: "md", text: eT.intl.string(eT.t.hvVgAZ), onClick: t }),
            ],
        });
    let s =
        i.claimStatus === it.P.CLAIMED
            ? { text: eT.intl.string(is.default.Plwzgf) }
            : { text: eT.intl.string(eT.t.hvVgAZ) };
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: ia.R$,
                children: [
                    (0, c.jsx)(t4.A, {
                        variant: "overlay-primary",
                        size: "md",
                        text: i.text,
                        icon: i.icon,
                        iconPosition: i.iconPosition,
                        onClick: i.onClick,
                        disabled: i.disabled,
                        loading: i.loading,
                    }),
                    (0, c.jsx)(J.$, {
                        variant: "secondary",
                        size: "md",
                        ...s,
                        onClick: t,
                        disabled: i.requestInProgress,
                    }),
                ],
            }),
            i.claimStatus === it.P.CLAIM_IN_PROGRESS &&
                (0, c.jsxs)("div", {
                    className: ia.ed,
                    children: [
                        (0, c.jsx)(t3.CircleInformationIcon, { size: "xs", color: "var(--text-subtle)" }),
                        (0, c.jsx)(q.E, {
                            variant: "body-xs/medium",
                            color: "text-subtle",
                            children: eT.intl.string(is.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function ir(e) {
    let { glowing: t = !1 } = e;
    (0, t8.A)({
        type: t2.ImpressionTypes.VIEW,
        name: t2.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: t9.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: s } = (0, A.Ay)(N.A.CROISSANT_PREMIUM_HERO_CARD),
        n = o.useCallback(() => {
            (0, Y.mM)(async () => {
                let { default: e } = await Promise.all([i.e(878140), i.e(532203)]).then(i.bind(i, 15654));
                return (t) => (0, c.jsx)(e, { ...t, sourceAnalyticsLocations: s });
            });
        }, [s]);
    return (0, c.jsx)(t6.N, {
        theme: eY.NJ8.DARK,
        children: (e) =>
            (0, c.jsx)(A.f5, {
                value: s,
                children: (0, c.jsx)("div", {
                    className: u()(e, ia.kL),
                    children: (0, c.jsx)(t5.A, {
                        cardType: t7.s.CUSTOM,
                        cardClassName: ia.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, c.jsxs)("div", {
                            className: ia.XF,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: ia.j,
                                    children: [
                                        (0, c.jsx)("div", { className: ia._g }),
                                        (0, c.jsx)("div", { className: ia.$h }),
                                        (0, c.jsx)("div", { className: ia.Rv }),
                                        (0, c.jsx)("div", { className: ia.Lw }),
                                        (0, c.jsx)("div", { className: ia.mR }),
                                    ],
                                }),
                                (0, c.jsxs)("div", {
                                    className: ia.Qs,
                                    children: [
                                        (0, c.jsx)("img", {
                                            className: ia.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, c.jsx)(eL.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: ia.DD,
                                            children: eT.intl.string(is.default.RGT513),
                                        }),
                                        (0, c.jsx)(q.E, {
                                            variant: "body-md/normal",
                                            color: "text-strong",
                                            className: ia.h_,
                                            children: eT.intl.string(is.default["+pTnsf"]),
                                        }),
                                        (0, c.jsx)(il, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var ic = i(7684),
    io = i(112992);
let id = () =>
    (0, c.jsxs)("div", {
        className: ic.X,
        children: [
            (0, c.jsx)("div", {
                className: ic.W,
                children: (0, c.jsx)(t3.CircleInformationIcon, { size: "xxs", color: eW.A.colors.ICON_MUTED }),
            }),
            (0, c.jsx)(q.E, {
                variant: "body-xs/medium",
                color: "text-subtle",
                children: eT.intl.string(is.default.Fs74z9),
            }),
        ],
    });
function iu(e) {
    let { className: t, containerClassName: i, glowing: s } = e,
        n = (0, ii.z)(),
        a = { isThirdPartyPerk: !0, subscriptionRequired: !0 },
        l =
            n.kind === ii.N.SUBSCRIBE
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
        r = n.kind === ii.N.DEFAULT && n.claimStatus === it.P.CLAIM_IN_PROGRESS;
    return (0, c.jsx)(tO.S, {
        id: t9.XBOX_PREMIUM_PERK_CARD_ID,
        title: eT.intl.string(is.default.UVL9tD),
        description: eT.intl.string(is.default["I+IXr0"]),
        ...l,
        footerContent: r ? (0, c.jsx)(id, {}) : void 0,
        className: t,
        containerClassName: i,
        glowing: s,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, c.jsx)("img", { src: io.A, alt: "Xbox Game Pass" }),
        blurTint: "#054B16",
        analyticsOptions: { thirdPartyPartner: "xbox" },
    });
}
function im(e) {
    let { analyticsLocations: t } = (0, A.Ay)(N.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, c.jsx)(A.f5, { value: t, children: (0, c.jsx)(iu, { ...e }) });
}
var ix = i(744082),
    ig = i(261995),
    ih = i(722793),
    ip = i(517846),
    iN = i(669700),
    iA = i(398523),
    ij = i(881373),
    ib = i(555393),
    iE = i(852218),
    iT = i(52530),
    iI = i(116420),
    iC = i(88210),
    iR = i(612413);
i(675772);
var iv = i(749962),
    i_ = i(691450),
    iy = i(116716),
    iP = i(12947),
    iS = i(524698),
    iD = i(45116),
    iM = i(679502);
let iO = "xgpp";
function ik(e) {
    let { card: t, backgroundAssetUrl: i, blurTint: s, glowing: n, autoClickCta: a } = e;
    return (0, c.jsx)("div", {
        className: tB.JE,
        children: (0, c.jsx)(tO.S, {
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
        s = (0, t1.b)("premium_subscriber_home_rewards");
    (0, ix.A)(tp.tv);
    let {
            logitechCard: n,
            steelseriesCard: a,
            youtubeCard: l,
            voicemodCard: r,
            macaronCard: d,
            codeBlurpleCard: m,
        } = (function () {
            let e,
                t,
                { analyticsLocations: i } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
                s = ((e = (0, iT.eh)()), (t = (0, iT.fR)()), null != e ? e : t),
                n = (0, ij.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
                a = iA.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
                l = (0, iR.mh)({ location: "useThirdPartyPartnerPerkCards" }),
                { enabled: r } = iI.A.useConfig({ location: "useThirdPartyPartnerPerkCards" }),
                d = (0, x.bG)([tP.A], () => tP.A.getPromotionsByPartner(iE.uV).recurring.length > 0),
                u = null === (0, ib.N)(),
                m = (0, ig.fY)({ location: "useThirdPartyPartnerPerkCards" }),
                { currentDate: g, nDaysInMonth: h } = (0, o.useMemo)(() => {
                    let e = new Date();
                    return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
                }, []);
            return (0, o.useMemo)(() => {
                let e = n
                        ? {
                              id: t9.LOGITECH_3PP_CARD_ID,
                              title: eT.intl.string(i_.default.OlObRa),
                              description: eT.intl.format(i_.default.ZGOJ8R, {
                                  discountPercent: 30,
                                  termsUrl: ea.A.getArticleURL(eY.MVz.LOGITECH_PROMOTION),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              progress: g.getDate() / h,
                              ctaText: eT.intl.string(eT.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, iC.P)({
                                      partnerIds: [iE.XY],
                                      title: eT.intl.string(i_.default["2I7nK+"]),
                                      subtitle: eT.intl.format(i_.default.W8jOD0, {
                                          termsUrl: ea.A.getArticleURL(eY.MVz.LOGITECH_PROMOTION),
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
                              analyticsOptions: { thirdPartyPartner: iE.XY },
                              ctaDisabled: u,
                              ctaLoading: u,
                          }
                        : null,
                    t = a
                        ? {
                              id: t9.RECURRING_3P_PROMOTIONS_CARD_ID,
                              title: eT.intl.string(eT.t.m7PucM),
                              description: eT.intl.format(eT.t["1Zw6xL"], {}),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              caption: (0, c.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                              progress: g.getDate() / h,
                              ctaText: eT.intl.string(eT.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, iC.P)({
                                      partnerIds: [iE.KS],
                                      title: eT.intl.string(eT.t["7ioAjs"]),
                                      subtitle: eT.intl.format(eT.t.LOYRxB, {
                                          helpCenterLink: ea.A.getArticleURL(eY.MVz.RECURRING_PROMOTION),
                                      }),
                                      analyticsLocations: i,
                                  }),
                              blurTint: "#2E213D",
                              analyticsOptions: { thirdPartyPartner: iE.KS },
                              ctaDisabled: u,
                              ctaLoading: u,
                          }
                        : null;
                return {
                    logitechCard: e,
                    steelseriesCard: t,
                    youtubeCard: l
                        ? {
                              id: t9.YOUTUBE_3PP_CARD_ID,
                              title: eT.intl.string(iS.default["BdIVB+"]),
                              description: eT.intl.format(iS.default["cCl3+a"], {
                                  discountPercentage: 20,
                                  months: 6,
                                  helpCenterUrl: ea.A.getArticleURL(eY.MVz.YOUTUBE_PROMOTION),
                              }),
                              isThirdPartyPerk: !0,
                              subscriptionRequired: !0,
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/e07fd53d33f374f567964ff5b7843f09bc6943288891cfed6e573df04ba9741c.webp",
                              blurTint: "#18181C",
                              caption: (0, c.jsx)("img", { src: iM.A, alt: "YouTube Premium" }),
                              ctaText: eT.intl.string(iv.default.fcopjf),
                              onCtaClick: () =>
                                  (0, iC.P)({
                                      partnerIds: [iE.NC],
                                      analyticsLocations: i,
                                      title: eT.intl.string(iS.default.TDZUui),
                                      subtitle: eT.intl.format(iS.default.dueYf1, {
                                          helpCenterUrl: ea.A.getArticleURL(eY.MVz.YOUTUBE_PROMOTION),
                                      }),
                                      onClose: () => {
                                          iN.Ay.fireSurveyAction(ip.w.YOUTUBE_3PP_MODAL_DISMISSED);
                                      },
                                  }),
                              analyticsOptions: { thirdPartyPartner: iE.NC },
                              ctaDisabled: u,
                              ctaLoading: u,
                          }
                        : null,
                    voicemodCard:
                        r && d
                            ? {
                                  id: t9.VOICEMOD_3PP_CARD_ID,
                                  title: eT.intl.string(iP.default.pkGxhZ),
                                  description: eT.intl.string(iP.default.Gspm9q),
                                  pillText: eT.intl.string(eT.t.y2b7CA),
                                  subscriptionRequired: !0,
                                  isThirdPartyPerk: !0,
                                  caption: (0, c.jsx)("img", { src: iD.A, alt: "Voicemod" }),
                                  backgroundAssetUrl:
                                      "https://cdn.discordapp.com/assets/content/d78c7ca47e2f2bf66dcc2fb12a7b190392672d4c44d6138f26b011f8bd923fff.png",
                                  progress: g.getDate() / h,
                                  ctaText: eT.intl.string(iy.default.vlafDc),
                                  onCtaClick: () =>
                                      (0, iC.P)({
                                          partnerIds: [iE.uV],
                                          title: eT.intl.string(iP.default.AX5oOl),
                                          subtitle: eT.intl.format(iy.default.fqtaGq, {
                                              termsUrl: ea.A.getArticleURL(eY.MVz.VOICEMOD_PROMOTION),
                                          }),
                                          analyticsLocations: i,
                                      }),
                                  analyticsOptions: { thirdPartyPartner: iE.uV },
                                  ctaDisabled: u,
                                  ctaLoading: u,
                              }
                            : null,
                    macaronCard: m,
                    codeBlurpleCard: s,
                };
            }, [m, s, i, g, n, h, a, l, r, d, u]);
        })(),
        { phase: g } = (0, ig.vc)({ location: "NitroRewardsSection" }),
        h =
            null != d
                ? {
                      card: d,
                      backgroundAssetUrl:
                          g === ih.H.PHASE_ONE
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
        p = null != h ? h.card.id : null,
        f = s && null == h,
        j =
            s ||
            null != n ||
            null != a ||
            null != m ||
            (null != d && d.id !== p) ||
            (null != l && l.id !== p) ||
            null != r,
        b = null;
    return (null != h
        ? (b = (0, c.jsx)(ik, {
              card: h.card,
              backgroundAssetUrl: h.backgroundAssetUrl,
              blurTint: h.blurTint,
              glowing: t === iO || i === h.card.id,
              autoClickCta: i === h.card.id,
          }))
        : f && (b = (0, c.jsx)("div", { className: tB.JE, children: (0, c.jsx)(ir, { glowing: t === iO }) })),
    null != b || j)
        ? (0, c.jsx)(tF, {
              id: iO,
              sectionClassName: u()(tW.uW, tW.Uv, tW.qr),
              heading: (0, c.jsx)(eL.D, {
                  variant: "nitro-sm",
                  className: u()(tH.R_, tB.U6),
                  children: eT.intl.string(eT.t.NG1e6l),
              }),
              beforeGrid: b,
              grid: j
                  ? (0, c.jsxs)(c.Fragment, {
                        children: [
                            null != r && (0, c.jsx)(tO.S, { ...r, containerClassName: tH.Nr, glowing: i === r.id }),
                            null != m && (0, c.jsx)(tO.S, { ...m, containerClassName: tH.Nr, glowing: i === m.id }),
                            null != d &&
                                d.id !== p &&
                                (0, c.jsx)(tO.S, {
                                    ...d,
                                    containerClassName: tH.Nr,
                                    glowing: i === d.id,
                                    autoClickCta: i === d.id,
                                }),
                            null != l &&
                                l.id !== p &&
                                (0, c.jsx)(tO.S, {
                                    ...l,
                                    containerClassName: tH.Nr,
                                    glowing: i === l.id,
                                    autoClickCta: i === l.id,
                                }),
                            s &&
                                (0, c.jsx)(im, {
                                    containerClassName: tH.Nr,
                                    glowing: i === t9.XBOX_PREMIUM_PERK_CARD_ID,
                                }),
                            null != n && (0, c.jsx)(tO.S, { ...n, containerClassName: tH.Nr, glowing: i === n.id }),
                            null != a && (0, c.jsx)(tO.S, { ...a, containerClassName: tH.Nr, glowing: i === a.id }),
                        ],
                    })
                  : null,
          })
        : null;
}
var iU = i(313133),
    iG = i(67423);
let iw = function (e) {
    let { isVisible: t, premiumSubscription: s, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: l } = (0, A.Ay)(N.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        r = (0, e7.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsx)(e6.animated.div, {
        className: u()(iU.iE, { [iU.q4]: !t }),
        style: r,
        children: (0, c.jsxs)("div", {
            className: iU.iJ,
            children: [
                (0, c.jsx)("img", { alt: "", src: iG, className: iU.oU }),
                (0, c.jsxs)("div", {
                    className: iU.iQ,
                    children: [
                        (0, c.jsx)(eL.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            children: eT.intl.format(eT.t["3yZP0G"], { percent: n.discount.amount }),
                        }),
                        (0, c.jsx)(q.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: eT.intl.format(eT.t["3Q4wCy"], {
                                numMonths: n.discount.intervalCount,
                                discountedPrice: a,
                                billingPeriod: (0, el.Ke)(n.discount.intervalType),
                            }),
                        }),
                    ],
                }),
                (0, c.jsx)(J.$, {
                    variant: "expressive",
                    icon: Z.NitroWheelIcon,
                    size: "md",
                    text: eT.intl.string(eT.t.zrCzVB),
                    onClick: () =>
                        void (0, Y.mM)(async () => {
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
                                (0, c.jsx)(e, {
                                    ...t,
                                    premiumSubscription: s,
                                    analyticsLocations: l,
                                    initialStep: eR.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var iB = i(761508),
    iH = i(151869),
    iF = i(62617),
    iV = i(387103);
function iW(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iF.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: iV.A,
        className: (0, iF.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
let iz =
    "https://cdn.discordapp.com/assets/content/a89ff8a07704142beff857453a6c8aa15400cf711f8fe3cbbfa7ff4f0b2a334f.svg";
function iX(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iF.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: iz,
        className: (0, iF.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iY = i(93712);
function iK(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iF.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: iY.A,
        className: (0, iF.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iq = i(345394);
function iZ(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iF.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: iq.A,
        className: (0, iF.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var iJ = i(78211);
function iQ(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iF.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/2d617cf5c40353ca4ec6ac76e1a48f6781439c18db06b8cfab0f194358abe555.svg",
        className: (0, iF.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var i$ = i(95278);
function i0(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iF.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/8a9a80f2b924da025612a160c7dc74c5e0fe675a90e3424737e6c5927739a6d0.svg",
        className: (0, iF.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
function i1(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iF.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/3ba8fce33a4733cdbadc10ac378d1b5523b0c0961e7edc74372c159e3009727f.svg",
        className: (0, iF.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var i2 = i(996682);
function i3(e) {
    let { color: t = eW.A.colors.ICON_STRONG, "aria-label": i, "aria-hidden": s, role: n, width: a, height: l } = e,
        r = o.useMemo(() => (0, iF.H)({ width: a, height: l, intrinsicWidth: 100, intrinsicHeight: 80 }), [a, l]);
    return (0, c.jsxs)("svg", {
        ...(0, i2.A)({ "aria-label": i, "aria-hidden": s, role: n }),
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
function i6(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iF.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/1314d17fb23c01337cac4bfdaaff48c5e6ac1f515b0647f0964922b988f095c1.svg",
        className: (0, iF.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var i7 = i(78701);
function i8(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iF.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: i7.A,
        className: (0, iF.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var i5 = i(462887),
    i9 = i(736653),
    i4 = i(259065),
    se = i(206835),
    st = i(591179),
    si = i(462463),
    ss = i(219882),
    sn = i(105909),
    sa = i(208223),
    sl = i(696292),
    sr = i(914313),
    sc = i(321538),
    so = i(892227),
    sd = i(81466),
    su = i(17268),
    sm = i(749012);
let sx = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, B.F)();
    if (!e || null == t) return null;
    let i =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, so.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, c.jsxs)("div", {
        className: sm.kL,
        children: [
            null != i &&
                (0, c.jsxs)("div", {
                    className: sm.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: sm.Pf,
                            children: [
                                (0, c.jsx)(sd.CalendarIcon, { size: "sm", color: eW.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(q.E, {
                                    variant: "body-sm/medium",
                                    color: "text-default",
                                    children: eT.intl.string(su.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, c.jsx)(q.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: eT.intl.format(su.default.xedPIb, { days: i }),
                        }),
                    ],
                }),
            null != i && t.total_rewarded_from_program > 0 && (0, c.jsx)("div", { className: sm.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, c.jsxs)("div", {
                    className: sm.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: sm.Pf,
                            children: [
                                (0, c.jsx)(eV.OrbsIcon, { size: "sm", color: eW.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(q.E, {
                                    variant: "body-sm/medium",
                                    color: "text-default",
                                    children: eT.intl.string(su.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, c.jsx)(q.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: eT.intl.format(su.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var sg = i(403362),
    sh = i(286348),
    sp = i(923079),
    sf = i(631502),
    sN = i(221596),
    sA = i(799544);
function sj() {
    var e;
    let t,
        { shouldShowBonusOrbsUX: i, multiplier: s } = (0, sr.lk)(sN.rE.NITRO_HOME_MARKETING),
        { isEligible: n, programReward: a } = (0, B.F)();
    return {
        nitroOrbsRewardsCard:
            ((e = (0, o.useMemo)(
                () =>
                    !n || null == a || null == a.reward_amount || a.reward_amount <= 0
                        ? null
                        : {
                              id: t9.NITRO_ORBS_REWARDS_CARD_ID,
                              title: eT.intl.string(su.default.hx5AFp),
                              description: eT.intl.format(su.default.wq3CF2, { orbsCount: a.reward_amount }),
                              primaryAsset: "/assets/8f530451dce1ccc0.svg",
                              primaryAssetClassName: u()(sA.lH, sA.yK),
                              footerContent: (0, c.jsx)(sx, {}),
                              ctaText: eT.intl.string(su.default.BxjHiu),
                              onCtaClick: () => (0, y.pX)(eY.BVt.COLLECTIBLES_SHOP_WITH_TAB(e$.G2.ORBS)),
                          },
                [n, a],
            )),
            (t = (0, sp.A)({ location: "useNorbsNitroOrbsRewardsCard" })),
            (0, o.useMemo)(() => {
                if (null == e) return null;
                switch (t) {
                    case sp.m.DEFAULT:
                        return e;
                    case sp.m.DEPRECATED_XBOX:
                    case sp.m.REMOVED:
                    case sp.m.REMOVED_XBOX:
                        return null;
                    case sp.m.DEPRECATED:
                        return {
                            ...e,
                            title: eT.intl.string(sf.default.LG4Fft),
                            description: eT.intl.format(sf.default["69NJ0X"], { date: sh.Ds }),
                            pillText: eT.intl.formatToPlainString(eT.t["7D8r4F"], {
                                expiryDate: sh.Ds.toLocaleDateString(eT.intl.currentLocale, {
                                    month: "short",
                                    day: "numeric",
                                }),
                            }),
                            footerContent: void 0,
                        };
                    default:
                        return (0, sg.xb)(t);
                }
            }, [e, t])),
        questOrbMultiplierCard: (0, o.useMemo)(
            () =>
                i
                    ? {
                          id: t9.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: eT.intl.string(eT.t.Csf5Ol),
                          description: eT.intl.format(eT.t.NpUfej, { bonusOrbMultiplier: s }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: eT.intl.string(eT.t.jVcuVY),
                          onCtaClick: () => (0, sc.mA)({ fromContent: sl.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: sA.Nf,
                      }
                    : null,
            [i, s],
        ),
    };
}
var sb = i(975807),
    sE = i(95035),
    sT = i(728666),
    sI = i(88001),
    sC = i(107198),
    sR = i(817577);
function sv() {
    (0, sb.A)(sI.TE);
}
function s_(e) {
    let t = (0, sT.O9)(),
        s = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        n = s?.hasActiveTrial ?? !1,
        a = (0, o.useCallback)(() => {
            n
                ? (0, Y.mM)(async () => {
                      let { default: e } = await i.e(499709).then(i.bind(i, 516044));
                      return (t) => (0, c.jsx)(e, { ...t });
                  })
                : (0, _.A)({
                      subscriptionTier: tp.pe.TIER_2,
                      initialPlanId: tp.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, o.useMemo)(
        () =>
            t
                ? {
                      id: t9.PREMIUM_GROUP_CARD_ID,
                      title: eT.intl.string(sC.default.YkvksF),
                      description: (0, c.jsxs)(c.Fragment, {
                          children: [
                              eT.intl.formatToPlainString(sC.default.JlyGQj, {
                                  totalSeats: 6,
                                  premiumGroupProductName: (0, sI.DP)(),
                              }),
                              (0, c.jsx)("div", {
                                  className: sA.LF,
                                  children: (0, c.jsx)(sE.A, {
                                      onClick: sv,
                                      children: eT.intl.string(sC.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: eT.intl.string(eT.t.oW0eUd),
                      primaryAsset: sR,
                      ctaIcon: Z.NitroWheelIcon,
                      ctaIconPosition: "start",
                      ctaText: eT.intl.string(eT.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var sy = i(562819),
    sP = i(793943),
    sS = i(169099),
    sD = i(506988),
    sM = i(590202),
    sO = i(332560),
    sk = i(62234),
    sL = i(324061),
    sU = i(701256),
    sG = i(804564),
    sw = i(818349),
    sB = i(419490),
    sH = i(424739),
    sF = i(572164),
    sV = i(271597),
    sW = i(815460),
    sz = i(464132),
    sX = i(683825);
function sY() {
    "auto" === (0, sw.r)((0, sF.T)(), sB.Ay.getEnableAutoclipping())
        ? (0, sV.p)()
        : (0, sW.C)({ variant: "mode_picker", source: "nitro_home_perk_card" });
}
var sK = i(757036),
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
        d,
        m,
        g,
        h,
        p,
        f,
        j,
        b,
        E,
        T,
        I,
        { analyticsLocations: C } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
        R = (0, st.X)("useWhatsNewPerkCards"),
        v = (0, si.A)({ analyticsLocations: C }),
        _ = (0, o.useCallback)(() => {
            (0, es.openUserSettings)(ei.X.PROFILE_PANEL, { analyticsLocations: C }, () =>
                (0, i4.L)({ analyticsLocations: C }),
            );
        }, [C]),
        y = (0, o.useCallback)(() => {
            (0, es.openUserSettings)(ei.X.PROFILE_PANEL, { analyticsLocations: C }, () =>
                (0, sy.L)({ analyticsLocations: C }),
            );
        }, [C]),
        P = (0, o.useCallback)(() => {
            (0, es.openUserSettings)(ei.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        D =
            ((e = (0, x.bG)([S.default], () => S.default.getCurrentUser())),
            (t = e?.isFractionalPremiumWithNoStandardSub() ?? !1),
            (i = (function (e) {
                let { location: t } = e;
                return s0.useConfig({ location: t }).enabled;
            })({ location: "useTenureBadgePerkCard" })),
            (s = (0, sJ.d)({ location: "useTenureBadgePerkCard" })),
            (n = (0, sn.$F)()),
            (a = (0, sn.Xb)()),
            (l = n?.status === sn.Wo.UPCOMING || t),
            (r = n?.status === sn.Wo.WITHHELD),
            (d = l || r),
            (m = (0, sa.N)(n?.id)),
            (g = (function () {
                let e = (0, sn.$F)(),
                    t = (0, s1.P)(),
                    i = (0, sn.Xb)();
                if (null == e || null == t || null == i || e.status === sn.Wo.WITHHELD) return null;
                let s = eb()(),
                    n = eb()(i),
                    a = t.tenureReqNumMonths,
                    l = n.clone(),
                    r = n.clone().add(a, "months").diff(l);
                return Math.max(0, Math.min(1, (s.diff(l) - 864e5) / r));
            })()),
            (h = (0, x.bG)([$.Ay], () => $.Ay.useReducedMotion) && !d),
            (p = (0, s3.t)()),
            (f = (0, s1.P)()),
            (0, o.useMemo)(() => {
                let e,
                    l = null != f ? eT.intl.string(f.nameUnformattedNitro) : void 0;
                null == n
                    ? t && (e = (0, s2.T)(tp.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (e =
                          n.status === sn.Wo.UPCOMING
                              ? eT.intl.formatToPlainString(eT.t.a1eKDi, { days: p?.days ?? 0 })
                              : n.status === sn.Wo.WITHHELD
                                ? ((0, s2.T)(n.id, n.tenureReqNumMonths) ?? void 0)
                                : ((function (e, t) {
                                      if (null != e && null != t) {
                                          if (e.days <= 30)
                                              return eT.intl.formatToPlainString(eT.t.NEXoaI, {
                                                  days: e.days,
                                                  nextBadgeName: t,
                                              });
                                          if (e.months <= 3)
                                              return eT.intl.formatToPlainString(eT.t.KDV8oD, {
                                                  months: e.months,
                                                  nextBadgeName: t,
                                              });
                                      }
                                  })(p, l) ??
                                  (0, s2.T)(n.id, n.tenureReqNumMonths) ??
                                  void 0));
                let r = null;
                return (
                    null != m ? (r = d || h ? m.standard : m.ambientLarge) : t && (r = s8),
                    {
                        id: t9.TENURE_BADGE_CARD_ID,
                        title:
                            null != n ? eT.intl.string(n.nameUnformattedNitro) : t ? eT.intl.string(eT.t.tx9Fvw) : "",
                        pillText: eT.intl.string(eT.t["jyYgZ+"]),
                        primaryAsset: r,
                        primaryAssetClassName: u()(s7.pq, { [s7.rX]: d, [s7.kE]: h }),
                        caption: null != a ? eT.intl.formatToPlainString(eT.t.Hu4jfi, { date: new Date(a) }) : void 0,
                        description: e,
                        subscriptionRequired: !0,
                        progress: g ?? void 0,
                        ctaText: eT.intl.string(eT.t.jVcuVY),
                        onCtaClick: () => {
                            i && s
                                ? (0, sQ.openBadgeDirectoryModal)({ initialBadgeId: sZ.$.PREMIUM_TENURE })
                                : (0, s6.D)({ analyticsLocations: C });
                        },
                    }
                );
            }, [n, m, d, h, a, g, t, p, f, C, i, s])),
        { nitroOrbsRewardsCard: M, questOrbMultiplierCard: O } = sj(),
        k =
            ((j = (0, sK.L)(tp.PremiumTypes.TIER_2)),
            (b = (0, ss.rX)()),
            (0, o.useMemo)(
                () =>
                    j && b
                        ? {
                              id: t9.NITRO_FILE_UPLOAD_WHATS_NEW_CARD_ID,
                              title: eT.intl.string(sq.default["/cV3ka"]),
                              description: eT.intl.string(sq.default.H523FI),
                              primaryAsset: (0, c.jsx)(iJ.I, { alt: "", ariaHidden: !0 }),
                          }
                        : null,
                [j, b],
            )),
        L = s_(C),
        U =
            ((E = (0, sH.H)("autoclips_ea:nitro_home_tile")),
            (T = "auto" === (0, sz.U)().value),
            (0, o.useMemo)(
                () =>
                    E
                        ? {
                              id: t9.AUTOCLIPS_CARD_ID,
                              title: eT.intl.string(sX.default["5VA1HL"]),
                              description: eT.intl.string(sX.default.TvE3md),
                              primaryAsset: (0, c.jsx)(sG.f, { alt: "", ariaHidden: !0 }),
                              ctaText: eT.intl.string(T ? eT.t.RzWDqY : eT.t.uw9zI7),
                              ctaVariant: T ? "secondary" : void 0,
                              onCtaClick: sY,
                          }
                        : null,
                [E, T],
            )),
        G =
            ((I = (0, sL.A)("useHexagonCampaignWhatsNewPerkCard")),
            o.useMemo(
                () =>
                    I
                        ? {
                              id: t9.HEXAGON_CAMPAIGN_CARD_ID,
                              pillText: eT.intl.string(eT.t.y2b7CA),
                              title: eT.intl.string(sU.default["fShp/D"]),
                              description: eT.intl.string(sU.default.MDycja),
                              primaryAsset: (0, c.jsx)(sS.r, { alt: "", ariaHidden: !0, width: 256 }),
                              ctaText: eT.intl.string(eT.t.uw9zI7),
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
    return (0, o.useMemo)(() => {
        let e = [
                M,
                O,
                L,
                {
                    id: t9.DISPLAY_NAME_STYLES_CARD_ID,
                    title: eT.intl.string(eT.t.OLtTrt),
                    description: eT.intl.string(eT.t["di/pXR"]),
                    onCtaClick: R ? v : _,
                    ctaText: eT.intl.string(eT.t.jVcuVY),
                    primaryAsset: s5,
                },
                {
                    id: t9.CLIENT_THEMES_CARD_ID,
                    title: eT.intl.string(eT.t.acc6h6),
                    description: eT.intl.formatToPlainString(eT.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: s4,
                    ctaText: eT.intl.string(eT.t.jVcuVY),
                    onCtaClick: () => {
                        (0, sP.nf)(sP.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: t9.PERMADECOS_CARD_ID,
                    title: eT.intl.string(eT.t.L14NZN),
                    description: eT.intl.string(eT.t.eCZkAI),
                    primaryAsset: (0, c.jsx)(i8, { alt: "", ariaHidden: !0 }),
                    ctaText: eT.intl.string(eT.t.jVcuVY),
                    onCtaClick: R ? v : y,
                },
                {
                    id: t9.CUSTOM_APP_ICONS_CARD_ID,
                    title: eT.intl.string(eT.t["GU+wqh"]),
                    description: eT.intl.string(eT.t["1uPk1Z"]),
                    primaryAsset: s9,
                    ctaText: eT.intl.string(eT.t.y9TxXV),
                    onCtaClick: P,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            i = t ? 5 : 6;
        return (
            e.splice(+!!t, 0, D),
            null != k && e.splice(2, 0, k),
            null != U && e.splice(2, 0, U),
            null != G && e.splice(Math.min(2, e.length), 0, G),
            e.length > i && e.splice(i, e.length - i),
            e
        );
    }, [D, M, O, k, U, L, G, _, P, y, v, R]);
}
var nt = i(355097);
let ni = "/assets/1eb1b74667b4c0f0.svg",
    ns = "/assets/983b60e4fcaf973b.svg";
var nn =
    (((l = {}).BEST_OF_NITRO = "bestof"),
    (l.APPEARANCE_STYLE = "appearance"),
    (l.UPGRADES = "upgrades"),
    (l.VIP_EXTRAS = "vip"),
    l);
let na = [
    { id: "bestof", label: () => eT.intl.string(eT.t.q1u7nQ) },
    { id: "appearance", label: () => eT.intl.string(eT.t.CUnZkZ) },
    { id: "upgrades", label: () => eT.intl.string(eT.t.KC5q8v) },
    { id: "vip", label: () => eT.intl.string(eT.t.DjEAcv) },
];
var nl = i(18290);
function nr(e) {
    return e.id;
}
function nc(e) {
    let { glowingPerkId: t = null } = e,
        i = (function () {
            let e = (0, i9.DP)(),
                t = (0, st.X)("useFavoritesPerkCards"),
                i = (0, sn.Lh)(),
                s = (0, sa.N)(i)?.standard ?? null,
                { analyticsLocations: n } = (0, A.Ay)(N.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, se.A)({ scrollPosition: nt._F.TRY_IT_OUT, analyticsLocations: n }),
                l = (0, o.useCallback)(() => {
                    (0, es.openUserSettings)(ei.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: n });
                }, [n]),
                r = (0, o.useCallback)(() => {
                    (0, es.openUserSettings)(ei.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: n });
                }, [n]),
                d = (0, o.useCallback)(() => {
                    (0, es.openUserSettings)(ei.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: n });
                }, [n]),
                u = (0, o.useCallback)(() => {
                    (0, y.pX)(eY.BVt.COLLECTIBLES_SHOP);
                }, []),
                m = (0, o.useCallback)(() => {
                    (0, es.openUserSettings)(ei.X.SOUNDBOARD_CATEGORY, { analyticsLocations: n });
                }, [n]),
                x = (0, si.A)({ analyticsLocations: n }),
                g = (0, o.useCallback)(() => {
                    (0, es.openUserSettings)(ei.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, i4.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                h = ne(),
                p = (0, o.useMemo)(() => h.map((e) => e?.id), [h]),
                { nitroOrbsRewardsCard: f, questOrbMultiplierCard: j } = sj(),
                b = s_(n),
                E = (0, o.useMemo)(
                    () => [
                        {
                            id: t9.SERVER_BOOSTS_CARD_ID,
                            title: eT.intl.formatToPlainString(eT.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: eT.intl.formatToPlainString(eT.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: eT.intl.string(eT.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: (0, c.jsx)(iW, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != b ? { ...b, categories: ["bestof"] } : null,
                        {
                            id: t9.PROFILES_CARD_ID,
                            title: eT.intl.string(eT.t.xDRab3),
                            description: eT.intl.string(eT.t.yn6fWA),
                            ctaText: eT.intl.string(eT.t.jVcuVY),
                            onCtaClick: t ? x : a,
                            primaryAsset: (0, c.jsx)(iX, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: t9.HD_VIDEO_CARD_ID,
                            title: eT.intl.string(eT.t["/mQ5gg"]),
                            description: eT.intl.string(eT.t["7WwAXh"]),
                            primaryAsset: (0, c.jsx)(iK, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: t9.CLIENT_THEMES_CARD_ID,
                            title: eT.intl.string(eT.t.acc6h6),
                            description: eT.intl.formatToPlainString(eT.t.WQazjs, { themeCount: 20 }),
                            ctaText: eT.intl.string(eT.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: s4,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: t9.MORE_EMOJIS_CARD_ID,
                            title: eT.intl.string(eT.t.D8vIDT),
                            description: eT.intl.string(eT.t.DRMecB),
                            primaryAsset: (0, c.jsx)(iZ, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: t9.LARGE_UPLOADS_CARD_ID,
                            title: eT.intl.string(eT.t.nL1WZV),
                            description: (0, ss.M6)({
                                legacyCopy: eT.intl.formatToPlainString(eT.t.k8LC1w, { maxSizeMb: 500 }),
                                rolloutCopy: eT.intl.formatToPlainString(eT.t.teOTfv, {
                                    maxFileSize: (0, el.EJ)(tp.PremiumTypes.TIER_2, { useSpace: !1 }),
                                }),
                            }),
                            primaryAsset: (0, c.jsx)(iJ.I, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: t9.CUSTOM_APP_ICONS_CARD_ID,
                            title: eT.intl.string(eT.t["GU+wqh"]),
                            description: eT.intl.string(eT.t["1uPk1Z"]),
                            ctaText: eT.intl.string(eT.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: s9,
                            categories: ["appearance"],
                        },
                        {
                            id: t9.ENTRANCE_SOUNDS_CARD_ID,
                            title: eT.intl.string(eT.t.WJfCPi),
                            description: eT.intl.string(eT.t.liQKJR),
                            ctaText: eT.intl.string(eT.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: t9.DISPLAY_NAME_STYLES_CARD_ID,
                            title: eT.intl.string(eT.t.OLtTrt),
                            description: eT.intl.string(eT.t["di/pXR"]),
                            onCtaClick: t ? x : g,
                            ctaText: eT.intl.string(eT.t.jVcuVY),
                            primaryAsset: s5,
                            categories: ["appearance"],
                        },
                        {
                            id: t9.CUSTOM_SOUNDS_CARD_ID,
                            title: eT.intl.string(eT.t["Cu/oFd"]),
                            description: eT.intl.string(eT.t.czj2aa),
                            primaryAsset: (0, c.jsx)(iQ, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: t9.SPECIAL_STICKERS_CARD_ID,
                            title: eT.intl.string(eT.t.MQoVeb),
                            description: eT.intl.string(eT.t.HGCLZX),
                            primaryAsset: (0, c.jsx)("div", {
                                className: sA.Uc,
                                children: (0, c.jsx)(i$.n, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: t9.SUPER_REACTIONS_CARD_ID,
                            title: eT.intl.string(eT.t.qERvAA),
                            description: eT.intl.string(eT.t.WkUWzx),
                            primaryAsset: (0, c.jsx)(i0, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: t9.VIDEO_BACKGROUNDS_CARD_ID,
                            title: eT.intl.string(eT.t.ssVDYQ),
                            description: eT.intl.string(eT.t.aUSRMa),
                            primaryAsset: (0, i5.M)(e) ? ni : ns,
                            categories: ["upgrades"],
                        },
                        {
                            id: t9.EARLY_ACCESS_CARD_ID,
                            title: eT.intl.string(eT.t["g/KRY6"]),
                            description: eT.intl.string(eT.t.JzAmJc),
                            primaryAsset: (0, c.jsx)(i1, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: t9.BADGE_CARD_ID,
                            title: eT.intl.string(eT.t.Bn3CtB),
                            description: eT.intl.string(eT.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != s
                                    ? (0, c.jsx)("img", { src: s, alt: "", width: 160, draggable: "false" })
                                    : (0, c.jsx)(i3, { color: eW.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: t9.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: eT.intl.string(eT.t["MTD+7w"]),
                            description: eT.intl.string(eT.t.Bhs0s6),
                            ctaText: eT.intl.string(eT.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, c.jsx)(i6, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != f ? { ...f, categories: ["vip"] } : null,
                        null != j ? { ...j, categories: ["vip"] } : null,
                        {
                            id: t9.PERMADECOS_CARD_ID,
                            title: eT.intl.string(eT.t.L14NZN),
                            description: eT.intl.string(eT.t.eCZkAI),
                            primaryAsset: (0, c.jsx)(i8, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, s, f, j, b, a, l, r, d, u, m, g, x, t],
                );
            return (0, o.useMemo)(() => E.filter((e) => null != e && !p.includes(e.id)), [E, p]);
        })(),
        s = null != t ? i.find((e) => e?.id === t) : null,
        [n, a] = (0, o.useState)(s?.categories[0] ?? nn.BEST_OF_NITRO),
        l = na.find((e) => e.id === n)?.label(),
        r = i.filter((e) => null != e && e.categories.includes(n));
    return (0, c.jsxs)("div", {
        className: nl.uW,
        children: [
            (0, c.jsx)(eL.D, { variant: "nitro-sm", children: eT.intl.string(eT.t["Uh3+CA"]) }),
            (0, c.jsx)(iB.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: nl.Lq,
                "aria-label": eT.intl.string(eT.t["Uh3+CA"]),
                children: na.map((e) =>
                    (0, c.jsx)(iB.V.Item, { id: e.id, className: nl.IC, children: e.label() }, e.id),
                ),
            }),
            (0, c.jsx)(
                iH.A,
                {
                    "aria-label": eT.intl.formatToPlainString(eT.t.akg5nT, { filterName: l }),
                    gap: 20,
                    className: nl.jG,
                    items: r,
                    getItemKey: nr,
                    renderItem: (e, i) =>
                        (0, c.jsx)(tO.S, { ...e, glowing: t === e.id, containerClassName: nl.Ui, listItemProps: i }),
                },
                n,
            ),
        ],
    });
}
var no = i(72979);
let nd = function (e) {
    let { className: t } = e,
        i = (0, i9.DP)();
    return (0, c.jsx)("img", {
        className: u()(no.D, t),
        src: (0, i5.M)(i) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var nu = i(684251);
let nm = function (e) {
    let { children: t } = e;
    return (0, c.jsxs)("div", {
        className: u()(nu.kL, nu.Gd, nu.Eg),
        children: [(0, c.jsx)(nd, {}), (0, c.jsx)(t0, {}), t],
    });
};
function nx(e) {
    let { glowingPerkId: t = null } = e,
        i = ne();
    return (0, c.jsx)(tF, {
        sectionClassName: tH.uW,
        heading: (0, c.jsx)(eL.D, { variant: "nitro-sm", className: tH.R_, children: eT.intl.string(eT.t.Aw5DRm) }),
        grid: (0, c.jsx)(c.Fragment, {
            children: i.map((e, i) => {
                if (null == e) return;
                let s = 0 === i && !0 === e.featured,
                    n = t === e.id;
                return (0, c.jsx)(
                    tO.S,
                    {
                        ...e,
                        glowing: n,
                        autoClickCta: n && e.id === t9.YOUTUBE_3PP_CARD_ID,
                        featured: s,
                        containerClassName: u()(tH.Nr, { [tH.Nq]: s }),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function ng(e, t, i, s) {
    !(function (e, t, i) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            n = arguments.length > 4 ? arguments[4] : void 0,
            a = (0, x.bG)([$.Ay], () => $.Ay.useReducedMotion),
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
var nh = i(92737);
let np = "/assets/cd2be35d285d4675.svg",
    nf = (e) => {
        let { userId: t } = e,
            i = (0, m.zy)();
        (o.useEffect(() => {
            ((0, w.Ay)(), null != t && (0, F.A)(t));
        }, [t]),
            o.useEffect(() => {
                E(!0);
            }, []),
            (0, v.P)(R));
        let s = o.useRef(null),
            n = o.useRef(null),
            a = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            { isReady: l, programReward: r } = (0, B.F)(),
            {
                scrollTargetId: d,
                glowingSectionId: h,
                glowingPerkId: p,
                scrollBlock: f,
                scrollInline: j,
            } = o.useMemo(() => {
                let e = new URLSearchParams(i.search),
                    t = e.get("perk"),
                    s = e.get(nh.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != s
                      ? { scrollTargetId: s, glowingSectionId: s, scrollBlock: "start" }
                      : {};
            }, [i.search]);
        ng(d ?? "", null != d, f, j);
        let [b, E] = o.useState(!1),
            T = (0, V.p)(),
            I = o.useRef(null),
            [C, _] = o.useState(!1),
            y = null != T && null != a && a.status === eY.Dmq.CANCELED,
            P = (0, W.iU)(tp.gD.PREMIUM_MONTH_TIER_2, T, a),
            S = !C && y,
            D = (0, x.bG)([H.A], () => (null != t ? H.A.getUserProfile(t) : null)),
            { analyticsLocations: k } = (0, A.Ay)(N.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [L, X] = o.useState(!1);
        return null != D && (l || null != r)
            ? (0, c.jsxs)(G.Gt, {
                  className: u()(nu.xW, nu.Gd),
                  ref: s,
                  children: [
                      (0, c.jsx)(nm, {
                          children: (0, c.jsxs)(A.f5, {
                              value: k,
                              children: [
                                  (0, c.jsx)(U.L, {
                                      innerRef: I,
                                      onChange: (e) => _(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, c.jsx)(tE, {
                                          buttonVisibilityRef: I,
                                          className: nu.v1,
                                          userDiscountOffer: T,
                                          discountedPrice: P,
                                      }),
                                  }),
                                  (0, c.jsx)(tY, {}),
                                  (0, c.jsx)(nx, { glowingPerkId: p }),
                                  (0, c.jsx)(iL, { glowingPerkId: p, glowingSectionId: h }),
                                  (0, c.jsx)(nc, { glowingPerkId: p }),
                                  (0, c.jsx)(z.A, {
                                      className: nu.Zy,
                                      location: N.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: eY.liQ.NITRO_HOME, section: eY.JJy.GIFT_BANNER },
                                  }),
                                  (0, c.jsx)("div", { className: nu.hz }),
                                  (0, c.jsx)(U.L, {
                                      innerRef: n,
                                      onChange: (e) => {
                                          e &&
                                              !L &&
                                              (O.default.track(eY.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: k,
                                              }),
                                              X(!0));
                                      },
                                      children: (0, c.jsx)("div", { ref: n, className: nu._Z }),
                                  }),
                                  (0, c.jsx)("img", {
                                      src: np,
                                      className: nu.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: eT.intl.string(eT.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      y &&
                          null != P &&
                          (0, c.jsx)(iw, {
                              isVisible: S && b,
                              premiumSubscription: a,
                              churnDiscountOffer: T,
                              discountedPrice: P,
                          }),
                  ],
              })
            : (0, c.jsxs)("div", {
                  className: u()(nu.kL, nu.Lq, nu.TN, nu.Eg),
                  children: [(0, c.jsx)(t0, {}), (0, c.jsx)("div", { className: nu.S, children: (0, c.jsx)(g.y, {}) })],
              });
    };
var nN = i(589152),
    nA = i(851746),
    nj = i(727949),
    nb = i(926239);
let nE =
    "https://cdn.discordapp.com/assets/content/3aa94cb4beecb43100d482e94a5a707f188e2e2315d9b15865689b51409c4d56.png";
var nT = i(185062);
let nI = `${nE} 1x, https://cdn.discordapp.com/assets/content/e33cdb99c455ad732bab8cc40ca15b8bf926a7e9e078cd8834edfd15e4010217.png 2x, ${nT.A} 3x`;
function nC(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: a, height: l, className: r, style: d } = e,
        u = o.useMemo(
            () => (0, iF.H)({ width: a, height: l, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
            [a, l, d],
        );
    return (0, c.jsx)("img", {
        style: u,
        src: nE,
        srcSet: nI,
        className: (0, iF.Z)(r),
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var nR = i(315629),
    nv = i(783420),
    n_ = i(204413),
    ny = i(572079),
    nP = i(824069),
    nS = i(785007),
    nD = i(947910);
function nM(e) {
    let { value: t, planRadioOptions: i, className: s, ...n } = e,
        a = i.map((e) => {
            let i = e.value === t;
            return {
                name: (0, c.jsxs)("div", {
                    className: nD.VH,
                    children: [
                        i &&
                            null != e.badgeText &&
                            (0, c.jsx)("div", {
                                className: nD.fQ,
                                children: (0, c.jsx)(eG.E, { type: { text: e.badgeText }, variant: "primary" }),
                            }),
                        (0, c.jsxs)(K.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: nD.qU,
                            children: [
                                (0, c.jsxs)(K.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nD.NI,
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
                                (0, c.jsxs)(K.B, {
                                    direction: "vertical",
                                    align: "end",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nD.br,
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
                                                className: nD.yD,
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
                radioBarClassName: u()(nD.tG, { [nD.uA]: i, [nD.hy]: i && e.useGradientSelectedBorder }),
            };
        });
    return (0, c.jsx)(nS.$d, {
        ...n,
        options: a,
        value: t,
        size: nS.r9.NOT_SET,
        className: u()(nD.ul, s),
        withTransparentBackground: !0,
    });
}
var nO = i(118751),
    nk = i(773669),
    nL = i(97352),
    nU = i(526292),
    nG = i(387278),
    nw = i(369827),
    nB = i(803496);
function nH(e) {
    let t = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        i = (0, nw.L)(),
        s = t?.paymentSourceId ?? i,
        { priceOptions: n } = (0, nB.A)({
            activeSubscription: t,
            skuIDs: [(0, el.mH)(e)],
            paymentSourceId: s,
            isGift: !1,
        });
    return n;
}
function nF(e, t, i, s, n) {
    return t && i?.includes(e) === !0 && null != s && null != n && s !== n;
}
function nV(e) {
    let { expectedUsageInterval: t, usageInterval: i, discountDuration: s, regularPrice: n, discountedPrice: a } = e;
    return i !== t || null == n || null == a
        ? null
        : t === tp.Ff.YEAR
          ? eT.intl.format(eT.t.G88D2T, { discountedPrice: a, numYears: s, regularPrice: n })
          : eT.intl.format(eT.t["x+qUAi"], { discountedPrice: a, numMonths: s, regularPrice: n });
}
var nW = i(614488);
function nz(e) {
    let { skuId: t, selectedPlanId: i, subscribeButtonProps: s } = e,
        n = null == i || !0 === s.disabled,
        a = null == i ? "secondary" : s.variant;
    return (0, c.jsx)(nv.A, {
        subscriptionTier: t,
        initialPlanId: i,
        shouldDisallowPlanSelection: !0,
        children: (e) => {
            let { onClick: t } = e;
            return (0, c.jsx)(J.$, {
                size: "md",
                fullWidth: !0,
                icon: Z.NitroWheelIcon,
                text: s.text,
                variant: a,
                disabled: n,
                onClick: t,
            });
        },
    });
}
function nX(e) {
    let { skuId: t, className: i, variant: s = "default" } = e,
        n = t === tp.pe.TIER_2,
        a = "settings" === s,
        l = (0, i5.q)((0, i9.Ay)()),
        r = (0, ed.V)(),
        d = r?.subscriptionTrial,
        m = d?.skuId === t,
        g = n && m && null != d,
        {
            planRadioOptions: h,
            selectedPlanId: p,
            setSelectedPlanId: f,
            shouldSuppressDiscountCta: N,
        } = (function (e) {
            let { skuId: t } = e,
                [i, s] = o.useState(null),
                n = tp.En[t],
                a = tp.zE[t],
                l = t === tp.pe.TIER_2,
                r = nH(t),
                c = (0, ed.V)(),
                d = c?.subscriptionTrial?.skuId === t,
                { subscribedSkuId: u, isMonthlyPlanDisabled: m } = (0, x.cf)(
                    [M.A],
                    () => {
                        let e = M.A.getPremiumTypeSubscription();
                        return {
                            subscribedSkuId: (0, el.aZ)(e),
                            isMonthlyPlanDisabled:
                                n === tp.gD.PREMIUM_MONTH_TIER_2 &&
                                null != e &&
                                [tp.gD.PREMIUM_YEAR_TIER_0, tp.gD.PREMIUM_YEAR_TIER_1].includes(e.planId),
                        };
                    },
                    [n],
                ),
                g = u === t,
                h = (0, eo.O)(),
                p = (0, nU.k5)(),
                f = (0, x.bG)([nk.default], () => nk.default.locale),
                N = (0, W.U9)(h, t),
                A = (0, W.N1)(n),
                j = (0, W.N1)(a),
                [b, E] = (0, x.yK)([nL.A], () => [nL.A.get(n), nL.A.get(a)], [n, a]),
                T = null != b ? (0, el.sS)(b, r) : null,
                I = null != E ? (0, el.sS)(E, r) : null,
                C =
                    N && h?.discount.amount != null && !p
                        ? eT.intl.formatToPlainString(eT.t.IAybsG, {
                              discount: (0, nO.l9)(f, Number(h.discount.amount) / 100),
                          })
                        : null,
                R = h?.discount?.planIds,
                v = nF(a, N, R, j, I),
                _ = nF(n, N, R, A, T),
                y = h?.discount.userUsageLimitInterval,
                P = h?.discount.userUsageLimit ?? 1,
                S = !l || v || _ || null == E ? null : (0, nG.Cj)(E, !1, r),
                D = !_ || m,
                O = (function (e) {
                    let { skuId: t, monthlyHasDiscount: i, isMonthlyPlanDisabled: s } = e;
                    return t !== tp.pe.TIER_2 ? null : i && !s ? tp.En[t] : tp.zE[t];
                })({ skuId: t, monthlyHasDiscount: _, isMonthlyPlanDisabled: m }),
                k = null == i || (i === n && m) ? O : i,
                L = [
                    {
                        value: a,
                        primaryText: eT.intl.string(eT.t["/Q4HRN"]),
                        primarySubText:
                            (v
                                ? nV({
                                      expectedUsageInterval: tp.Ff.YEAR,
                                      usageInterval: y,
                                      discountDuration: P,
                                      regularPrice: I,
                                      discountedPrice: j,
                                  })
                                : null) ?? S,
                        secondaryText: v ? j : I,
                        secondarySubText: v ? I : null,
                        badgeText: v ? C : null,
                        useGradientSelectedBorder: l && (d || v || D),
                        isDisabled: g,
                    },
                    {
                        value: n,
                        primaryText: eT.intl.string(eT.t.DKzs96),
                        primarySubText: _
                            ? nV({
                                  expectedUsageInterval: tp.Ff.MONTH,
                                  usageInterval: y,
                                  discountDuration: P,
                                  regularPrice: T,
                                  discountedPrice: A,
                              })
                            : null,
                        secondaryText: _ ? A : T,
                        secondarySubText: _ ? T : null,
                        badgeText: _ ? C : null,
                        useGradientSelectedBorder: l && (d || _),
                        isDisabled: g || m,
                    },
                ],
                U = k === a ? v : k === n && _;
            return { planRadioOptions: L, selectedPlanId: k, setSelectedPlanId: s, shouldSuppressDiscountCta: N && !U };
        })({ skuId: t }),
        A = n ? "expressive" : "secondary",
        { buttonText: j } = (0, ny.A)({ subscriptionTier: t }),
        { subscribeButtonProps: b } = (0, n_.$)({
            subscriptionTier: t,
            variantOverride: A,
            buttonTextOverride: N ? j : void 0,
        }),
        E = (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(K.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nW.MY,
                    children: (0, c.jsx)(eL.D, {
                        variant: "nitro-md",
                        color: l ? "text-strong" : "text-overlay-light",
                        className: nW.ck,
                        children: n ? eT.intl.string(eT.t.lG6a5x) : eT.intl.string(eT.t["t9uG/o"]),
                    }),
                }),
                (0, c.jsx)(K.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nW.qT,
                    children: n
                        ? (0, c.jsx)(nb.ZP, {
                              featureSet: nb.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: a ? "body-sm/medium" : "body-md/medium",
                          })
                        : (0, c.jsx)(nb.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: a ? "body-sm/medium" : "body-md/medium",
                          }),
                }),
                n && (0, c.jsx)(nP.K, {}),
            ],
        }),
        T = (0, c.jsxs)(K.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nW.Ux,
            children: [
                a ? (0, c.jsx)("div", { className: nW.zI, children: E }) : E,
                g
                    ? (0, c.jsx)("div", {
                          className: nW.qS,
                          role: "separator",
                          children: (0, c.jsx)(q.E, {
                              variant: "body-md/semibold",
                              color: "text-strong",
                              className: nW.ZV,
                              children: (function (e, t) {
                                  if (null == e || null == t) return null;
                                  switch (e) {
                                      case tp.WT.DAY:
                                          if (t % 7 == 0) return eT.intl.format(eT.t["1MYPH0"], { weeks: t / 7 });
                                          return eT.intl.format(eT.t.pYfIoO, { days: t });
                                      case tp.WT.MONTH:
                                          return eT.intl.format(eT.t["96hTLe"], { months: t });
                                      case tp.WT.YEAR:
                                          return eT.intl.format(eT.t.B0ZmdG, { years: t });
                                      default:
                                          return null;
                                  }
                              })(d.interval, d.intervalCount),
                          }),
                      })
                    : (0, c.jsx)("hr", { className: nW.yF }),
                (0, c.jsxs)("div", {
                    className: nW.qr,
                    children: [
                        (0, c.jsx)(nM, {
                            className: a ? nW.US : void 0,
                            planRadioOptions: h,
                            value: p ?? "",
                            onChange: (e) => f(e.value),
                        }),
                        (0, c.jsx)(nz, { skuId: t, selectedPlanId: p, subscribeButtonProps: b }),
                    ],
                }),
            ],
        }),
        I = u()(nW.Nr, i, { [nW.Fw]: n });
    return n
        ? (0, c.jsxs)(nR.h, {
              color: "nitro-pink",
              className: I,
              children: [
                  !a &&
                      (0, c.jsx)("div", {
                          className: nW.kX,
                          "aria-hidden": !0,
                          children: (0, c.jsx)(nC, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                      }),
                  T,
              ],
          })
        : (0, c.jsx)("div", { className: I, children: T });
}
function nY(e) {
    let { className: t } = e,
        i = (0, i5.q)((0, i9.Ay)()),
        s = nH(tp.pe.TIER_2),
        n = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        { avatarSrc: a, eventHandlers: l } = (0, eS.A)({ userId: n?.id, size: ev._3.SIZE_32, animateOnHover: !0 }),
        r = (0, x.bG)([nL.A], () => nL.A.get(tp.gD.PREMIUM_GROUP_MONTH)),
        o = eT.intl.string(eT.t["2pG5Ga"]),
        d = (0, c.jsx)(nv.A, {
            subscriptionTier: tp.pe.TIER_2,
            initialPlanId: tp.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, c.jsx)(J.$, {
                    size: "md",
                    fullWidth: !0,
                    icon: Z.NitroWheelIcon,
                    text: o,
                    variant: "secondary",
                    onClick: t,
                });
            },
        }),
        m = null;
    if (null != r)
        try {
            m = (0, el.sS)(r, s, !1, !1, !1);
        } catch {
            m = null;
        }
    return (0, c.jsx)("div", {
        className: u()(nW.Nr, t),
        children: (0, c.jsxs)(K.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nW.Ux,
            children: [
                (0, c.jsxs)(K.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nW.MY,
                    children: [
                        (0, c.jsx)(eL.D, {
                            variant: "nitro-md",
                            color: i ? "text-strong" : "text-overlay-light",
                            className: nW.ck,
                            children: eT.intl.string(sC.default.eSKiXk),
                        }),
                        null != n &&
                            (0, c.jsxs)(K.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: nW.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: nW.uA,
                                        children: (0, c.jsx)(e_.eu, {
                                            src: a,
                                            size: ev._3.SIZE_32,
                                            "aria-hidden": !0,
                                            ...l,
                                        }),
                                    }),
                                    (0, c.jsx)(K.B, {
                                        direction: "horizontal",
                                        align: "center",
                                        justify: "center",
                                        gap: 0,
                                        fullWidth: !1,
                                        className: nW.VL,
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
                (0, c.jsx)(K.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nW.qT,
                    children: (0, c.jsx)(nb.Lg, { isApplicationHome: !0, textVariant: "body-md/medium" }),
                }),
                (0, c.jsx)("hr", { className: nW.yF }),
                (0, c.jsxs)("div", {
                    className: nW.qr,
                    children: [
                        (0, c.jsxs)("div", {
                            className: nW.ec,
                            children: [
                                (0, c.jsx)(q.E, {
                                    variant: "body-md/semibold",
                                    color: "text-strong",
                                    children: eT.intl.string(sC.default.SvSwga),
                                }),
                                null == m
                                    ? (0, c.jsx)(g.y, { type: g.y.Type.PULSING_ELLIPSIS })
                                    : (0, c.jsx)(q.E, {
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
function nK(e) {
    let { innerRef: t, className: i, variant: s = "default" } = e,
        n = "settings" === s,
        { analyticsLocations: a } = (0, A.Ay)(N.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, nb.pw)(t),
        r = (0, sT.PA)(),
        o = !n && r,
        d = (0, x.bG)([$.Ay], () => $.Ay.useReducedMotion),
        m = { [nW.iR]: !d && !n };
    return (0, c.jsx)(A.f5, {
        value: a,
        children: (0, c.jsxs)(K.B, {
            direction: "vertical",
            align: n ? "stretch" : "center",
            gap: 32,
            fullWidth: !0,
            className: u()(nW.oB, i, { [nW.W0]: n }),
            children: [
                (0, c.jsx)(eL.D, {
                    variant: n ? "heading-xl/semibold" : "nitro-md",
                    color: "text-strong",
                    className: nW.op,
                    children: eT.intl.string(eT.t.vLz3Zs),
                }),
                (0, c.jsxs)("div", {
                    ref: l,
                    className: u()(nW.kR, { [nW.BQ]: o }),
                    children: [
                        (0, c.jsx)(nX, { skuId: tp.pe.TIER_0, className: u()(nW.rz, m), variant: s }),
                        (0, c.jsx)(nX, { skuId: tp.pe.TIER_2, className: u()(nW.Rv, m), variant: s }),
                        o && (0, c.jsx)(nY, { className: u()(nW.zz, m) }),
                    ],
                }),
            ],
        }),
    });
}
var nq = i(366010),
    nZ = i(303136);
let nJ = function (e) {
    let t,
        { className: i } = e,
        s = (0, e3.TM)(),
        n = (0, nq.q)((0, i9.Ay)());
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
                nZ.A,
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
var nQ =
        (((r = {}).HOME = "home"),
        (r.WHATS_NEW = "whatsNew"),
        (r.BEST_OF_NITRO = "bestOfNitro"),
        (r.PLANS = "plans"),
        (r.COMPARE = "compare"),
        r),
    n$ = i(352756);
let n0 = function (e) {
    let { isVisible: t, subscriptionTier: i, isEligibleForBogoPromotion: s, variant: n = "default" } = e,
        a = "settings" === n,
        l = (0, e7.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        r = { section: eY.JJy.MARKETING_FLOATING_CTA };
    return (0, c.jsx)(e6.animated.div, {
        className: u()(n$.iE, { [n$.W0]: a }),
        "aria-hidden": a ? !t : void 0,
        inert: a ? !t : void 0,
        style: l,
        "data-mtctest-ignore": "true",
        children: (0, c.jsxs)("div", {
            className: n$.UD,
            children: [
                (0, c.jsx)(eA.A, {
                    enableMarketingSubscribeCopyTest: !a,
                    size: "md",
                    subscriptionTier: i,
                    hasActivePromotion: !!s,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: r,
                }),
                (0, c.jsx)(eN.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var n1 = i(573710);
let n2 = function () {
    let e = (0, e2.bG)([$.Ay], () => $.Ay.useReducedMotion);
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)("div", {
                className: n1.BI,
                children: (0, c.jsx)(e4, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: e5.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, c.jsx)("img", {
                        src: "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
                        alt: "",
                        className: n1.Q,
                    }),
                }),
            }),
            (0, c.jsx)(tt, {
                isMotionReduced: e,
                boltContainerClassName: n1.nJ,
                carContainerClassName: n1.IN,
                hammerContainerClassName: n1.Gj,
                keyContainerClassName: n1.FV,
                starContainerClassName: n1.E1,
                boltAssetClassName: n1.j7,
                carAssetClassName: n1.or,
                hammerAssetClassName: n1.Wv,
                keyAssetClassName: n1.rs,
                starAssetClassName: n1.OY,
            }),
        ],
    });
};
var n3 = i(989756);
function n6(e) {
    let { ref: t, ...i } = e,
        { analyticsLocations: s } = (0, A.Ay)(N.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, c.jsx)(A.f5, {
        value: s,
        children: (0, c.jsx)("div", {
            ref: t,
            className: n3.kL,
            children: (0, c.jsxs)("div", {
                className: n3.hQ,
                children: [
                    (0, c.jsx)(n2, {}),
                    (0, c.jsx)(eL.D, {
                        variant: "nitro-md",
                        color: "text-strong",
                        className: n3.RH,
                        children: eT.intl.string(eT.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
}
n6.displayName = "PremiumMarketingFooter";
var n7 = i(939249);
let n8 = function (e) {
    let { navBarSections: t, activeSectionId: i } = e,
        s = {
            [nQ.HOME]: eT.intl.string(eT.t.uGRXjS),
            [nQ.WHATS_NEW]: eT.intl.string(eT.t["mfcR/v"]),
            [nQ.BEST_OF_NITRO]: eT.intl.string(eT.t.xQKkE8),
            [nQ.PLANS]: eT.intl.string(eT.t.wyNMnm),
            [nQ.COMPARE]: eT.intl.string(eT.t.pwD7If),
        },
        n = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        a = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, c.jsx)(tq.A, {
        className: tQ.TQ,
        transparent: !0,
        children: (0, c.jsxs)("div", {
            className: tQ.Wc,
            children: [
                (0, c.jsxs)("div", {
                    className: tQ.wG,
                    children: [
                        (0, c.jsx)(Z.NitroWheelIcon, { className: tQ.nE, colorClass: tQ.oG }),
                        (0, c.jsx)("div", {
                            className: tQ.zc,
                            role: "tablist",
                            "aria-label": eT.intl.string(eT.t.O9MiXY),
                            children: a.map((e) => {
                                let t = i === e.id,
                                    n = s[e.id];
                                return (0, c.jsxs)(
                                    n7.D,
                                    {
                                        role: "tab",
                                        "aria-selected": t,
                                        className: tQ.S0,
                                        onClick: e.scrollToSection,
                                        children: [
                                            (0, c.jsx)(q.E, {
                                                variant: "body-sm/medium",
                                                color: "text-strong",
                                                children: n,
                                            }),
                                            t && (0, c.jsx)("div", { className: tQ.W0 }),
                                        ],
                                    },
                                    n,
                                );
                            }),
                        }),
                    ],
                }),
                (0, c.jsxs)("div", {
                    className: tQ.MQ,
                    children: [
                        null != n && (0, c.jsx)(tJ.l, { size: "sm", location: N.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                        (0, c.jsx)(eN.A, { size: "sm", variant: "overlay-secondary" }),
                    ],
                }),
            ],
        }),
    });
};
var n5 = i(713271),
    n9 = i(704333),
    n4 = i(414499),
    ae = i(597770),
    at = i(500060),
    ai = i(866665),
    as = i(406860),
    an = i(870975),
    aa = i(698834);
function al() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, as.A)({ boxType: ie.$, thirdPartyPartner: "xbox" }),
        i = [
            { icon: n9.ServerGridIcon, text: eT.intl.string(is.default.MUypiB) },
            { icon: n4.CloudIcon, text: eT.intl.string(is.default.ec5Rdd) },
            { icon: ae.GiftIcon, text: eT.intl.string(is.default["9t2CzW"]), tooltip: is.default.AyECej },
            { icon: at.ScreenStreamIcon, text: eT.intl.string(is.default.R7YJAY) },
        ];
    return (0, c.jsx)(U.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, c.jsx)("div", {
            ref: e,
            className: aa.iE,
            children: (0, c.jsxs)("div", {
                className: aa.Nr,
                children: [
                    (0, c.jsxs)("div", {
                        className: aa.j,
                        children: [
                            (0, c.jsx)("div", { className: aa._g }),
                            (0, c.jsx)("div", { className: aa.$h }),
                            (0, c.jsx)("div", { className: aa.Rv }),
                            (0, c.jsx)("div", { className: aa.Lw }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: aa.CT,
                        children: [
                            (0, c.jsxs)("div", {
                                className: aa.Qs,
                                children: [
                                    (0, c.jsxs)("div", {
                                        children: [
                                            (0, c.jsx)(eL.D, {
                                                variant: "heading-xxl/semibold",
                                                color: "text-strong",
                                                className: aa.R_,
                                                children: eT.intl.string(is.default.rkt1aw),
                                            }),
                                            (0, c.jsxs)("div", {
                                                children: [
                                                    i.map((e) => {
                                                        let { icon: t, text: i, tooltip: s } = e;
                                                        return (0, c.jsxs)(
                                                            "div",
                                                            {
                                                                className: aa.yf,
                                                                children: [
                                                                    (0, c.jsx)(t, {
                                                                        size: "sm",
                                                                        color: "var(--icon-strong)",
                                                                    }),
                                                                    (0, c.jsx)(q.E, {
                                                                        variant: "body-md/medium",
                                                                        color: "text-strong",
                                                                        children: i,
                                                                    }),
                                                                    null != s &&
                                                                        (0, c.jsx)("div", {
                                                                            className: aa.Jn,
                                                                            children: (0, c.jsx)(ai.m, {
                                                                                text: eT.intl.string(s),
                                                                                position: "top",
                                                                                children: (0, c.jsx)(
                                                                                    t3.CircleInformationIcon,
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
                                                        className: aa.xF,
                                                        children: (0, c.jsx)(eA.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: tp.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: aa.WE,
                                        children: (0, c.jsx)(q.E, {
                                            variant: "body-xs/medium",
                                            color: "text-link",
                                            children: eT.intl.format(is.default.KDKdWi, { termsLink: (0, an.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, c.jsx)("div", {
                                className: aa.r1,
                                children: (0, c.jsx)("img", {
                                    className: aa.wm,
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
var ar = i(886205),
    ac = i(65154),
    ao = i(805573),
    ad = i(14868),
    au = i(382702),
    am = i(148289);
function ax() {
    let { trackViewed: e, trackInteracted: t } = (0, ao.r)(
        tp.e.AUTOCLIPS_EA_NITRO_MARKETING_CARD_UPSELL,
        N.A.CLIPS_EA_NITRO_MARKETING_CARD,
    );
    return (
        o.useEffect(() => e(), [e]),
        (0, c.jsxs)("div", {
            className: au.Nr,
            children: [
                (0, c.jsxs)("div", {
                    className: au.pq,
                    children: [
                        (0, c.jsxs)("div", {
                            className: au.Z,
                            children: [
                                (0, c.jsx)("div", {
                                    children: (0, c.jsx)(eG.E, {
                                        type: "early_access",
                                        variant: "expressive",
                                        icon: Z.NitroWheelIcon,
                                    }),
                                }),
                                (0, c.jsx)(eL.D, {
                                    variant: "heading-xxl/semibold",
                                    color: "text-strong",
                                    children: eT.intl.string(sX.default.MtIbFp),
                                }),
                                (0, c.jsx)(q.E, {
                                    variant: "body-md/normal",
                                    color: "text-subtle",
                                    children: eT.intl.string(sX.default.hXM4Ae),
                                }),
                            ],
                        }),
                        (0, c.jsx)(J.$, {
                            variant: "secondary",
                            size: "md",
                            icon: ac.CirclePlayIcon,
                            text: eT.intl.string(sX.default.wNHvBT),
                            onClick: function () {
                                (t("watch_video"), (0, ad.z)("ClipsEarlyAccessCard"));
                            },
                        }),
                    ],
                }),
                (0, c.jsx)("div", {
                    className: au.LY,
                    children: (0, c.jsx)("img", { className: au.ot, src: am.A, alt: "", "aria-hidden": !0 }),
                }),
            ],
        })
    );
}
var ag = i(734066),
    ah = i(750338),
    ap = i(186961),
    af = i(505051);
function aN(e) {
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
        className: u()(af.boxBackdrop, t),
        children: [
            (0, c.jsx)(eL.D, {
                className: af.bentoSectionHeader,
                variant: "nitro-md",
                color: "text-strong",
                children: s,
            }),
            null != r && (0, c.jsx)("div", { className: af.highlightBento, children: r }),
            (0, c.jsx)("div", {
                className: af.bentoBoxesGrid,
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
                        (0, c.jsx)(
                            ah.A,
                            { index: t + +!!l, ...e, size: i, shouldLoadVideo: n, isReducedMotion: a },
                            e.name,
                        ),
                    );
                }),
            }),
        ],
    });
}
let aA = o.memo(function (e) {
        let t,
            i = (0, t1.b)("premium_marketing_bento"),
            s = (0, iR.mh)({ location: "premium_marketing_bento" }),
            { enabled: n } = (0, ig.vc)({ location: "premium_marketing_bento" }),
            { enabled: a } = ar.A.useConfig({ location: "premium_marketing_bento" }),
            l = i && !s && !(n && a),
            { whatsNewBoxes: r } = (0, ap.Ay)(l),
            o = ((t = (0, ag.Vl)()), (0, sH.H)("autoclips_ea:nitro_marketing_card", !t));
        return (0, c.jsx)(aN, {
            boxLayout: r,
            title: eT.intl.string(eT.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento:
                o || l
                    ? (0, c.jsxs)(c.Fragment, { children: [o && (0, c.jsx)(ax, {}), l && (0, c.jsx)(al, {})] })
                    : null,
            ...e,
        });
    }),
    aj = o.memo(function (e) {
        let { bestOfBoxes: t } = (0, ap.Ay)();
        return (0, c.jsx)(aN, { boxLayout: t, title: eT.intl.string(eT.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    ab = (0, s$.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var aE = i(236834),
    aT = i(540504);
function aI(e) {
    let { referrer: t } = e,
        { avatarSrc: i, eventHandlers: s } = (0, eS.A)({ userId: t?.id, size: ev._3.SIZE_24, animateOnHover: !0 });
    return (0, c.jsx)("div", {
        className: aT.$6,
        children: (0, c.jsxs)("div", {
            className: aT.sc,
            children: [
                (0, c.jsx)("div", {
                    className: aT.kR,
                    children: (0, c.jsx)(e_.eu, { src: i, "aria-label": t.username, size: ev._3.SIZE_32, ...s }),
                }),
                (0, c.jsx)(eL.D, {
                    variant: "heading-xs/medium",
                    className: aT.FS,
                    color: "text-strong",
                    children: eT.intl.format(eT.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var aC = i(579245),
    aR = i(369805);
let av = function () {
    let e = (0, aR.A)();
    return null == e ? null : (0, c.jsx)(eh, { text: e });
};
function a_() {
    let e = (0, x.bG)([nL.A], () => nL.A.getForSkuAndInterval((0, el.mH)(tp.pe.TIER_0), tp.WT.MONTH));
    return null != e ? (0, el.sS)(e) : "\u2026";
}
var ay = i(508556);
let aP = function (e) {
    let { containerVisibilityPercentage: t, variant: i = "default" } = e,
        s = "settings" === i,
        n = (0, e2.bG)([$.Ay], () => $.Ay.useReducedMotion),
        a = (0, e3.TM)();
    return (0, c.jsxs)("div", {
        "aria-hidden": !0,
        className: u()(ay.YU, { [ay.W0]: s }),
        children: [
            (0, c.jsx)(ta, {
                supportHEVCAlpha: a,
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                containerClassName: ay.wG,
                assetClassName: ay.lu,
                variant: i,
            }),
            (0, c.jsx)(tt, {
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                boltContainerClassName: ay.nJ,
                carContainerClassName: ay.IN,
                hammerContainerClassName: ay.Gj,
                keyContainerClassName: ay.FV,
                starContainerClassName: ay.E1,
                boltAssetClassName: ay.j7,
                carAssetClassName: ay.or,
                hammerAssetClassName: ay.Wv,
                keyAssetClassName: ay.rs,
                starAssetClassName: ay.OY,
                animateStar: !s,
            }),
        ],
    });
};
var aS = i(14057);
let aD = o.memo(function (e) {
    let { className: t, subscriptionTier: i, isEligibleForBogoPromotion: s, ref: n, variant: a = "default" } = e,
        l = "settings" === a,
        { analyticsLocations: r } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        o = a_(),
        d = ab.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
        m = (0, aE.A)(),
        g = null != m,
        { visibilityPercentageRef: h, visibilityPercentage: p } = ex(!(0, x.bG)([$.Ay], () => $.Ay.useReducedMotion)),
        f = (0, nN.b)(),
        j = !g && f.length > 0,
        b = (0, eu.uF)(X.oW.MARKETING_PAGE_BANNER),
        E = null != b,
        T = (0, nU.ar)() && !E,
        I = (0, eo.O)(),
        C = (null != I && tp.U4.includes(I.discountId)) || E;
    return (0, c.jsx)(A.f5, {
        value: r,
        children: (0, c.jsxs)("div", {
            ref: n,
            className: u()(aS.kL, t, { [aS.W0]: l }),
            "data-testid": "marketing-page-hero-header",
            children: [
                l && (0, c.jsx)(nJ, { className: aS.kv }),
                (0, c.jsx)("div", {
                    ref: h,
                    children: (0, c.jsxs)("div", {
                        className: aS.hQ,
                        children: [
                            (0, c.jsx)(aP, { containerVisibilityPercentage: p, variant: a }),
                            T && (0, c.jsx)(av, {}),
                            (0, c.jsx)("div", {
                                className: aS.s8,
                                children: (0, c.jsx)(ek.F, {
                                    forceLevel: 1,
                                    children: (0, c.jsx)(eL.D, {
                                        variant: "nitro-md",
                                        color: "text-strong",
                                        className: l ? void 0 : aS.wx,
                                        children: eT.intl.string(eT.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, c.jsxs)("div", {
                                className: aS.rf,
                                children: [
                                    g &&
                                        (0, c.jsx)("div", {
                                            className: aS.eZ,
                                            children: (0, c.jsx)(aI, { referrer: m }),
                                        }),
                                    j &&
                                        (0, c.jsx)("div", {
                                            className: aS.Qn,
                                            children: (0, c.jsx)(aC.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, c.jsxs)("div", {
                                        className: T ? aS.es : aS.UJ,
                                        children: [
                                            (0, c.jsx)(eA.A, {
                                                enableMarketingSubscribeCopyTest: !l,
                                                size: "md",
                                                fullWidth: T,
                                                hasActivePromotion: !!s,
                                                subscriptionTier: C && null == i ? tp.pe.NONE : i,
                                                buttonTextOverride: C ? eT.intl.string(eT.t["2pG5Ga"]) : void 0,
                                            }),
                                            !T && (0, c.jsx)(eN.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: aS.iQ,
                                        children: (0, c.jsx)(q.E, {
                                            color: "text-muted",
                                            variant: "body-xs/medium",
                                            children: d
                                                ? eT.intl.string(eT.t.jHqrJW)
                                                : eT.intl.format(eT.t.kt9wxs, { cheapestMonthlyPrice: o }),
                                        }),
                                    }),
                                    E &&
                                        (0, c.jsx)(ep.x, {
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
var aM = i(812537);
let aO = function (e) {
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
var ak = i(818348),
    aL = i(773188);
let aU = () => {
    let e = (0, m.zy)();
    (0, v.P)(R);
    let t = o.useRef(null),
        i = o.useRef(null),
        s = o.useRef(null),
        n = o.useRef(null),
        a = o.useRef(null),
        l = o.useRef(null),
        r = (0, x.bG)([$.Ay], () => $.Ay.useReducedMotion),
        [d, g] = o.useState(!1),
        [h, p] = o.useState(!1),
        [f, j] = o.useState(!1),
        [b, E] = o.useState(!1),
        T = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        I = null != T ? (0, el.EL)(T) : null,
        C = null != I ? el.Ay.getSkuIdForPlan(I.planId) : null,
        _ = null !== C && C !== tp.pe.TIER_2 ? tp.pe.TIER_2 : null,
        { analyticsLocations: y } = (0, A.Ay)(N.A.PREMIUM_MARKETING);
    o.useEffect(() => {
        E(!0);
    }, []);
    let { shouldShowBonusOrbsUX: P } = (0, sr.lk)(sN.rE.NITRO_HOME_MARKETING),
        S = P ? n5.N.ORB_MULTIPLIER : null,
        D = o.useMemo(() => {
            let t = new URLSearchParams(e.search).get(nh.x);
            return "orbs" === t
                ? S
                : t === n5.N.THREE_P_PROMOTIONS
                  ? n5.N.THREE_P_PROMOTIONS
                  : t === n5.N.YOUTUBE
                    ? n5.N.YOUTUBE
                    : null;
        }, [e.search, S]);
    ng(D ?? "", null != D);
    let { navBarSections: k, activeSectionId: L } = aO([nQ.HOME, nQ.WHATS_NEW, nQ.BEST_OF_NITRO, nQ.PLANS, nQ.COMPARE]),
        { home: w, whatsNew: B, bestOfNitro: H, plans: F, compare: V } = k,
        W = (0, c.jsxs)("div", {
            ref: i,
            className: u()(aL.kL, aL.Gd, aL.iI, { [aL.Hq]: !r }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(nJ, { className: aL.yH }),
                (0, c.jsx)(n8, { navBarSections: k, activeSectionId: L }),
                (0, c.jsxs)("div", {
                    className: aL.Qr,
                    children: [
                        (0, c.jsx)("div", {
                            className: aL.qY,
                            ref: w.ref,
                            children: (0, c.jsx)(U.L, {
                                innerRef: n,
                                onChange: (e) => g(e),
                                threshold: 0,
                                active: !0,
                                children: (0, c.jsx)(aD, { ref: n, subscriptionTier: _ }),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: aL.So,
                            ref: B.ref,
                            children: (0, c.jsx)(aA, { shouldLoadVideo: b, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: aL.KQ,
                            ref: H.ref,
                            children: (0, c.jsx)(aj, { shouldLoadVideo: b, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: aL.qc,
                            ref: F.ref,
                            children: (0, c.jsx)(U.L, {
                                innerRef: s,
                                onChange: (e) => p(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, c.jsx)(nK, { innerRef: s }),
                            }),
                        }),
                        (0, c.jsx)("div", { className: aL.aC, ref: V.ref, children: (0, c.jsx)(aM.A, {}) }),
                    ],
                }),
                (0, c.jsx)(U.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !f &&
                            (O.default.track(eY.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: y }),
                            j(!0));
                    },
                    children: (0, c.jsx)("div", { ref: a, className: aL._Z }),
                }),
                (0, c.jsx)(n6, { ref: l }),
                (0, c.jsx)(n0, { isVisible: !d && !h && b, subscriptionTier: _ }),
                (0, c.jsx)(nJ, { className: aL.MF }),
            ],
        });
    return (0, c.jsx)(t6.N, {
        theme: ak.NJ.DARK,
        children: (e) => (0, c.jsx)(G.Gt, { className: u()(aL.XG, e), ref: t, children: W }),
    });
};
var aG = i(862482),
    aw = i(300349),
    aB = i(106512),
    aH = i(662367),
    aF = i(374403),
    aV = i(396375),
    aW = i(900797),
    az = i(847374),
    aX = i(614268);
function aY(e) {
    let { className: t } = e;
    return (0, c.jsx)("div", {
        className: u()(aX.i, t),
        children: (0, c.jsx)(eG.E, { type: "early_access", variant: "premium" }),
    });
}
var aK = i(536071),
    aq = i(729934);
let aZ = "/assets/5b4fec8511c3676a.svg",
    aJ = "/assets/0838bda6ecd20d91.svg";
function aQ(e, t, i) {
    return (0, i5.M)(e) ? t : i;
}
var a$ = i(872461);
function a0(e) {
    let { isShowingAll: t, onClick: i } = e;
    return (0, c.jsxs)(n7.D, {
        onClick: i,
        className: a$.customButton,
        children: [
            t ? eT.intl.string(eT.t.maZaN3) : eT.intl.string(eT.t["37C26f"]),
            t
                ? (0, c.jsx)(aW.ChevronSmallUpIcon, { size: "md", color: "currentColor", className: a$.arrow })
                : (0, c.jsx)(az.ChevronSmallDownIcon, { size: "md", color: "currentColor", className: a$.arrow }),
        ],
    });
}
function a1(e) {
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
        x = (0, c.jsx)("img", { src: n, alt: "", className: u()(a, a$.perksCardArt) }),
        g = "settings" === d;
    return (0, c.jsx)(A.f5, {
        value: m,
        children: (0, c.jsxs)("div", {
            className: u()(a$.perkCard, s, { [a$.settingsCard]: g }),
            children: [
                r ? (0, c.jsx)(aK.A, { className: a$.perkCardNewBadge }) : null,
                o ? (0, c.jsx)(aY, { className: a$.perkCardEarlyAccessBadge }) : null,
                g
                    ? (0, c.jsx)(K.B, {
                          direction: "horizontal",
                          align: "center",
                          justify: "center",
                          gap: 0,
                          padding: 24,
                          className: a$.settingsArt,
                          children: x,
                      })
                    : x,
                (0, c.jsxs)("div", {
                    className: g ? a$.settingsText : void 0,
                    children: [
                        (0, c.jsxs)(eL.D, {
                            variant: g ? "heading-sm/semibold" : "heading-lg/semibold",
                            className: a$.perkCardHeading,
                            children: [t, " ", l],
                        }),
                        (0, c.jsx)(q.E, {
                            variant: g ? "body-xs/normal" : "body-sm/normal",
                            color: g ? "text-muted" : void 0,
                            lineClamp: g ? 1 : void 0,
                            className: a$.perkCardDescription,
                            children: "function" == typeof i ? i(m) : i,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let a2 = function (e) {
    let { className: t, isSubscriberNitroHome: s = !1 } = e,
        [n, a] = o.useState(!1),
        l = (function (e) {
            let { styles: t } = e,
                s = (0, i9.Ay)(),
                n = (0, st.X)("usePerkCards"),
                a = (0, e2.bG)([S.default], () => {
                    let e = S.default.getCurrentUser();
                    return el.Ay.canUsePremiumProfileCustomization(e);
                }),
                l = (0, el.EJ)(tp.PremiumTypes.TIER_2, { useSpace: !1 });
            return {
                badge: {
                    title: eT.intl.string(eT.t.SS87rQ),
                    description: eT.intl.string(eT.t.oD6CRr),
                    imageSource: "/assets/70e295f6158d848f.png",
                    imageClassName: t.badgeImage,
                },
                badgeAlt: {
                    title: eT.intl.string(eT.t["5cYMu0"]),
                    description: eT.intl.string(eT.t.vxk9va),
                    imageSource: aQ(s, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
                    imageClassName: t.badgeNewImage,
                },
                clientThemes: {
                    title: eT.intl.string(eT.t["/xvEMy"]),
                    description: eT.intl.string(eT.t.HKWdjj),
                    className: t.clientThemesCard,
                    imageSource: "/assets/37e0853800afb796.svg",
                    imageClassName: t.clientThemesImage,
                },
                customAppIcons: {
                    title: eT.intl.string(eT.t.OuItFi),
                    description: eT.intl.string(eT.t.mPyrE6),
                    imageSource:
                        "https://cdn.discordapp.com/assets/content/bca160c31fc5390dd2b41d90060edcc912a45f6ab3beab44ea79e16bf1f6530f.png",
                    imageClassName: t.customAppIconImage,
                },
                emoji: {
                    title: eT.intl.string(eT.t["R2IV/Q"]),
                    description: eT.intl.string(eT.t.R5Xag2),
                    imageSource: "/assets/d8edaaf5cb32248f.svg",
                    imageClassName: t.emojiImage,
                },
                guildProfile: {
                    title: eT.intl.string(eT.t.lKDhhJ),
                    description: (e) => {
                        if (n)
                            return a
                                ? eT.intl.formatToPlainString(eT.t.aj1pfZ, { onCheckItOutClick: () => {} })
                                : eT.intl.formatToPlainString(eT.t.d2oYS8, { onTryItOutClick: () => {} });
                        function t() {
                            {
                                let { openUserSettings: t } = i(766075);
                                (aq.A.setState({ scrollPosition: nt._F.TRY_IT_OUT }),
                                    t(ei.X.PROFILE_PANEL, { analyticsLocations: e }));
                            }
                        }
                        return a
                            ? eT.intl.format(eT.t.aj1pfZ, { onCheckItOutClick: t })
                            : eT.intl.format(eT.t.d2oYS8, { onTryItOutClick: t });
                    },
                    imageSource: "/assets/e1b6b45be1ce4b03.png",
                    imageClassName: t.perGuildProfilesImage,
                },
                longerMessages: {
                    title: eT.intl.string(eT.t.BUScid),
                    description: eT.intl.string(eT.t.vN6XpQ),
                    imageSource: aQ(s, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: eT.intl.string(eT.t.Bv8Pfk),
                    description: eT.intl.string(eT.t.JMfaTU),
                    imageSource: aQ(s, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: eT.intl.string(eT.t.Bv8Pfk),
                    description: eT.intl.string(eT.t.JMfaTU),
                    imageSource: aQ(s, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: eT.intl.string(eT.t["lGcW+c"]),
                    description: eT.intl.string(eT.t["/fDyO+"]),
                    imageSource: aQ(s, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: eT.intl.string(eT.t["1c+xwT"]),
                    description: eT.intl.string(eT.t.hJG8ZN),
                    imageSource: aQ(s, aJ, aZ),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: eT.intl.string(eT.t.tzdIwI),
                    description: eT.intl.string(eT.t.hJG8ZN),
                    imageSource: aQ(s, aJ, aZ),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: eT.intl.string(eT.t.tzdIwI),
                    description: eT.intl.string(eT.t.hJG8ZN),
                    imageSource: aQ(s, aJ, aZ),
                    imageClassName: t.stickersImage,
                },
                streaming: {
                    title: eT.intl.string(eT.t.RSXQYO),
                    description: eT.intl.string(eT.t.ymCPxp),
                    imageSource: "/assets/3bcdc01b26c7f691.svg",
                    imageClassName: t.streamingImage,
                },
                superReactions: {
                    title: eT.intl.string(eT.t["uZt5q/"]),
                    description: eT.intl.string(eT.t.ZK3ZoX),
                    imageSource: aQ(s, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
                    imageClassName: t.superReactionsImage,
                },
                upload: {
                    title: eT.intl.formatToPlainString(eT.t.jqhAdL, { premiumMaxSize: l }),
                    description: eT.intl.formatToPlainString(eT.t["HI+cfm"], { premiumMaxSize: l }),
                    imageSource: "/assets/010eae6a6dbacc63.svg",
                    imageClassName: t.uploadImage,
                },
                videoBackground: {
                    title: eT.intl.string(eT.t.NaGpTf),
                    description: eT.intl.string(eT.t["A8O/Qw"]),
                    imageSource: aQ(s, ni, ns),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: a$ }),
        r = (0, e2.bG)([$.Ay], () => $.Ay.useReducedMotion),
        { analyticsLocations: d } = (0, A.Ay)();
    return (0, c.jsxs)("div", {
        className: u()(a$.perksContainer, t, {
            [a$.partiallyHidden]: s && !n,
            [a$.subscriberNitroHome]: s,
            [a$.reducedMotion]: r,
        }),
        children: [
            (0, c.jsx)(eL.D, {
                variant: "heading-xxl/semibold",
                className: a$.perksTitle,
                children: s ? eT.intl.string(eT.t.QX14gI) : eT.intl.string(eT.t.RGadQR),
            }),
            (0, c.jsx)("div", {
                className: u()(a$.perkCardContainer, { [a$.perkCardContainerExpanded]: n }),
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
                    return null != t && (0, c.jsx)(a1, { ...t }, e);
                }),
            }),
            s &&
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)("div", {
                            className: u()({ [a$.sizeGizmo]: !n, [a$.sizeGizmoExpanded]: n }),
                            children: (0, c.jsx)(a0, {
                                onClick: function () {
                                    (O.default.track(eY.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: d,
                                        was_expanded: n,
                                    }),
                                        a(!n));
                                },
                                isShowingAll: n,
                            }),
                        }),
                        (0, c.jsx)("div", { className: u()(a$.cover, { [a$.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var a3 = i(615939);
let a6 = o.memo(function (e) {
    let { className: t } = e,
        i = [
            {
                id: t9.MORE_EMOJIS_CARD_ID,
                title: eT.intl.string(eT.t["R2IV/Q"]),
                description: eT.intl.string(eT.t.DRMecB),
                imageSource: iq.A,
            },
            {
                id: t9.HD_VIDEO_CARD_ID,
                title: eT.intl.string(eT.t["/mQ5gg"]),
                description: eT.intl.string(eT.t["7WwAXh"]),
                imageSource: iY.A,
            },
            {
                id: t9.LARGE_UPLOADS_CARD_ID,
                title: eT.intl.string(eT.t.nL1WZV),
                description: (0, ss.M6)({
                    legacyCopy: eT.intl.formatToPlainString(eT.t.k8LC1w, { maxSizeMb: 500 }),
                    rolloutCopy: eT.intl.formatToPlainString(eT.t.teOTfv, {
                        maxFileSize: (0, el.EJ)(tp.PremiumTypes.TIER_2, { useSpace: !1 }),
                    }),
                }),
                imageSource: a3.A,
            },
            {
                id: t9.PROFILES_CARD_ID,
                title: eT.intl.string(eT.t.KcyDwF),
                description: eT.intl.string(eT.t.Mt3U1W),
                imageSource: iz,
            },
        ];
    return (0, c.jsxs)(K.B, {
        gap: 16,
        className: u()(a$.settingsPerks, t),
        children: [
            (0, c.jsx)(eL.D, { variant: "heading-xl/semibold", children: eT.intl.string(eT.t.q1u7nQ) }),
            (0, c.jsx)(ek.F, {
                children: (0, c.jsx)("div", {
                    className: a$.settingsGrid,
                    children: i.map((e) => (0, c.jsx)(a1, { ...e, variant: "settings" }, e.id)),
                }),
            }),
        ],
    });
});
var a7 = i(695366),
    a8 = i(370049);
let a5 = function (e) {
    let t,
        i,
        { premiumSubscription: s, className: n, textColor: a } = e,
        l = (0, nU.ar)();
    if (null == s) return null;
    let r = null != s ? el.Ay.getPremiumPlanItem(s) : null;
    if (
        (el.Ay.isBoostOnlySubscription(s)
            ? (t = eT.intl.string(eT.t.Uj0md3))
            : null != r && (t = el.Ay.getTierDisplayNameByPlanId(r.planId)),
        null == t)
    )
        return null;
    function o() {
        return (0, es.openUserSettings)(ei.X.SUBSCRIPTIONS_PANEL);
    }
    let d = (null != r ? el.Ay.getSkuIdForPlan(r.planId) : null) === tp.pe.TIER_1;
    return (
        (i = null != a ? a : l ? "text-overlay-light" : "text-default"),
        (0, c.jsxs)(t7.Z, {
            className: u()(a8.kL, n, { [a8.He]: l }),
            type: t7.Z.Types.CUSTOM,
            children: [
                (0, c.jsx)(a7.CircleErrorIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: u()(a8.Kk, { [a8.Pt]: l }),
                }),
                (0, c.jsx)(q.E, {
                    variant: "body-sm/medium",
                    color: i,
                    children: d
                        ? eT.intl.format(eT.t["tYuv+T"], {
                              helpdeskArticle: ea.A.getArticleURL(eY.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: o,
                          })
                        : eT.intl.format(eT.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: o }),
                }),
            ],
        })
    );
};
var a9 = i(978836);
let a4 = function (e) {
    let { lifted: t = !1 } = e;
    return (0, c.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: u()(a9.zr, { [a9.N]: t }),
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
                        (0, c.jsx)("stop", { className: a9.eq }),
                        (0, c.jsx)("stop", { offset: "0.339235", className: a9.l_ }),
                        (0, c.jsx)("stop", { offset: "0.492065", className: a9.sM }),
                        (0, c.jsx)("stop", { offset: "0.823236", className: a9.zi }),
                        (0, c.jsx)("stop", { offset: "0.899558", className: a9.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var le = i(194509),
    lt = i(317587);
let li = function (e) {
    let { isVisible: t, subscriptionTier: i, isApplicationHome: s, isEligibleForBogoPromotion: n } = e,
        a = (0, e7.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: eY.JJy.MARKETING_FLOATING_CTA },
        r = (0, i9.Ay)(),
        o = (0, nq.M)(r);
    return (0, c.jsx)(e6.animated.div, {
        className: u()(lt.iE, { [lt.H8]: s, [lt.q4]: !t }),
        style: a,
        children: (0, c.jsxs)("div", {
            className: s ? lt.zW : lt.iJ,
            children: [
                (0, c.jsx)(aV.A, {
                    color: o ? aG.XD.BRAND_INVERTED : void 0,
                    className: u()(lt.x6, { [lt.Ph]: o }),
                    subscriptionTier: i,
                    premiumModalAnalyticsLocation: l,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: o ? void 0 : lt.PJ,
                }),
                (0, c.jsx)(le.A, { className: lt.x6, premiumModalAnalyticsLocation: l }),
            ],
        }),
    });
};
var ls = i(386564);
function ln(e) {
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
            ? (0, c.jsx)(aV.A, {
                  color: l ? aG.XD.BRAND_INVERTED : void 0,
                  className: u()(ls.x6, ls.Ph, n, { [ls.Sq]: t && a, [ls.MF]: a && !l }),
                  shinyButtonClassName: l ? void 0 : ls.PJ,
                  subscriptionTier: i,
                  hasActivePromotion: !0,
              })
            : (0, c.jsx)(aV.A, {
                  color: l || !a ? aG.XD.BRAND_INVERTED : void 0,
                  className: u()(ls.x6, ls.Ph, n, { [ls.Sq]: t && a, [ls.MF]: a && !l }),
                  subscriptionTier: i,
              }),
        d = t && a ? null : (0, c.jsx)(le.A, { className: u()(ls.x6, n), color: a ? void 0 : aG.XD.WHITE });
    return (0, c.jsxs)("div", { className: u()(ls.UD, s), children: [o, " ", d] });
}
function la() {
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(aK.p, { className: ls.zd }),
            (0, c.jsx)(aK.p, { className: ls.G }),
            (0, c.jsx)(aK.p, { className: ls.zy }),
            (0, c.jsx)(aK.p, { className: ls.GX }),
        ],
    });
}
function ll(e) {
    let { variant: t = "body-lg/normal", withBottomMargin: i = !0, isApplicationHome: s } = e,
        n = a_();
    return (0, c.jsx)(q.E, {
        variant: t,
        color: s ? "text-subtle" : "text-overlay-light",
        className: u()(ls.h_, { [ls.If]: i, [ls.jn]: s }),
        children: eT.intl.format(eT.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let lr = function (e) {
    let { className: t, buttonClassName: i, subscriptionTier: s, isDarkMode: n, ref: a } = e,
        { analyticsLocations: l } = (0, A.Ay)(N.A.PREMIUM_MARKETING_HERO_CTA),
        r = (0, er.QQ)(),
        o = (0, nU.ar)(),
        d = (0, nN.b)().length > 0,
        m = eT.intl.string(eT.t.YCZldK);
    return (0, c.jsx)(A.f5, {
        value: l,
        children: (0, c.jsxs)("div", {
            ref: a,
            className: u()(ls.kL, t, { [ls.V1]: !o, [ls.Q4]: !o && d }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, c.jsxs)("div", {
                    className: o ? ls.I6 : ls.G1,
                    children: [
                        (0, c.jsx)(ek.F, {
                            forceLevel: 1,
                            children: (0, c.jsx)(eL.D, {
                                variant: o ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: m,
                            }),
                        }),
                        d
                            ? (0, c.jsx)("div", {
                                  className: ls.DF,
                                  children: (0, c.jsx)(aC.A, { textColor: "text-overlay-light", smallerText: !o }),
                              })
                            : (0, c.jsx)(ll, {}),
                        r
                            ? (0, c.jsx)("div", {
                                  className: ls.UD,
                                  children: (0, c.jsx)(le.A, { className: u()(ls.x6, i), color: aG.XD.WHITE }),
                              })
                            : (0, c.jsx)(ln, {
                                  subscriptionTier: s,
                                  inOfferExperience: o,
                                  buttonClassName: i,
                                  isDarkMode: n,
                              }),
                        d && (0, c.jsx)(ll, { variant: "body-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !o && (0, c.jsx)(la, {}),
            ],
        }),
    });
};
var lc = i(403227),
    lo = i(367740),
    ld = i(377770);
function lu(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, c.jsx)(a4, { lifted: t }) : null;
}
let lm = () => {
        let { enabled: e } = aw.A.useConfig({ location: "PremiumMarketingHomeSettingsPage" });
        (0, v.P)(R);
        let t = o.useRef(null),
            i = o.useRef(null),
            s = o.useRef(null),
            n = (0, i9.Ay)(),
            a = (0, i5.M)(n),
            [l, r] = o.useState(!1),
            [d, m] = o.useState(!1),
            [g, h] = o.useState(!1),
            p = !l && !d,
            [f, j] = o.useState(!1),
            b = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            E = null != b ? (0, el.EL)(b) : null,
            T = null != E ? el.Ay.getSkuIdForPlan(E.planId) : null,
            I = null !== T && T !== tp.pe.TIER_2 ? tp.pe.TIER_2 : null,
            C = (0, ed.V)(),
            _ = C?.subscriptionTrial?.skuId,
            y = (0, nU.ar)(),
            P = !e && y,
            S = (0, x.bG)([tP.A], () => {
                let e = tP.A.getMarketingComponentBySurface(X.oW.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e ? null : e.surface;
            }),
            D = (0, aF.Q)(),
            { analyticsLocations: k } = (0, A.Ay)(N.A.PREMIUM_MARKETING);
        o.useEffect(() => {
            j(!0);
        }, []);
        let L = e
            ? (0, c.jsx)("div", {
                  className: ld.OE,
                  children: (0, c.jsx)(U.L, {
                      innerRef: t,
                      onChange: m,
                      threshold: 0.1,
                      active: !0,
                      children: (0, c.jsx)(nK, { innerRef: t, variant: "settings" }),
                  }),
              })
            : (0, c.jsx)("div", {
                  className: ld.dY,
                  children: (0, c.jsx)(U.L, {
                      innerRef: t,
                      onChange: (e) => m(e),
                      threshold: 0.1,
                      active: !0,
                      children: (0, c.jsx)(nb.qu, {
                          innerRef: t,
                          tier0CTAButton: (0, c.jsx)(aV.A, {
                              showIcon: !1,
                              subscriptionTier: tp.pe.TIER_0,
                              className: lo.Ph,
                              look: aG.pR.OUTLINED,
                              color: aG.XD.WHITE,
                              buttonShineClassName: lo.Qr,
                          }),
                          tier2CTAButton:
                              _ === tp.pe.TIER_0
                                  ? (0, c.jsx)(aV.A, {
                                        showIcon: !1,
                                        subscriptionTier: tp.pe.TIER_2,
                                        className: lo.Ph,
                                        look: aG.pR.OUTLINED,
                                        color: aG.XD.WHITE,
                                        buttonShineClassName: lo.Qr,
                                    })
                                  : (0, c.jsx)(aV.A, {
                                        color: aG.XD.BRAND_INVERTED,
                                        showIcon: !1,
                                        subscriptionTier: tp.pe.TIER_2,
                                        className: lo.Ph,
                                        textOptions: { textClassName: lo.Ac },
                                        buttonShineClassName: lo.Qr,
                                    }),
                      }),
                  }),
              });
        return (0, c.jsxs)("div", {
            className: u()(ld.kL, { [ld.N4]: e }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(a5, {
                    premiumSubscription: b,
                    textColor: e ? "text-default" : void 0,
                    className: u()(ld.R3, { [ld.aZ]: y }),
                }),
                P &&
                    (0, c.jsxs)("div", {
                        className: ld.n1,
                        children: [
                            (0, c.jsx)(lu, { inOfferExperience: y }),
                            (0, c.jsx)(tJ.l, {
                                className: ld.ij,
                                size: "md",
                                location: N.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                        ],
                    }),
                (0, c.jsxs)("div", {
                    className: u()({ [ld.V1]: !P }),
                    children: [
                        null != S && (0, c.jsx)(aB.m, { className: ld.w$, config: S }),
                        (0, c.jsxs)("div", {
                            className: ld.iS,
                            children: [
                                !P &&
                                    (0, c.jsx)(tJ.l, {
                                        className: ld.ij,
                                        size: "md",
                                        location: N.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, c.jsx)(U.L, {
                                    innerRef: i,
                                    onChange: (e) => r(e),
                                    threshold: 0,
                                    active: !0,
                                    children: e
                                        ? (0, c.jsx)(aD, { ref: i, subscriptionTier: I, variant: "settings" })
                                        : (0, c.jsx)(lr, {
                                              ref: i,
                                              subscriptionTier: I,
                                              className: u()({ [ld.p7]: y, [ld.Pw]: y, [ld.Cv]: null != b }),
                                              isDarkMode: a,
                                          }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != D && (0, c.jsx)("div", { className: ld.Ol, children: (0, c.jsx)(aH.I, { component: D }) }),
                L,
                e ? (0, c.jsx)(a6, { className: ld.OE }) : (0, c.jsx)(a2, { className: ld.B_ }),
                (0, c.jsx)("div", {
                    className: ld.aC,
                    children: e
                        ? (0, c.jsx)(aM.A, { variant: "settings" })
                        : (0, c.jsx)(lc.A, { className: ld.JQ, hideCTAs: !0 }),
                }),
                (0, c.jsx)("div", { className: ld.hz }),
                e
                    ? (0, c.jsx)(n0, { isVisible: p && f, subscriptionTier: I, variant: "settings" })
                    : (0, c.jsx)(li, { isVisible: p && f, subscriptionTier: I, isApplicationHome: !1 }),
                (0, c.jsx)(U.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !g &&
                            (O.default.track(eY.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: k }),
                            h(!0));
                    },
                    children: (0, c.jsx)("div", { ref: s, className: ld._Z }),
                }),
                (0, c.jsx)("img", {
                    src: np,
                    className: ld.Kw,
                    width: 112,
                    height: 85,
                    alt: eT.intl.string(eT.t.X4IxWL),
                }),
            ],
        });
    },
    lx = function (e) {
        let { entrypoint: t } = e,
            i = (0, ed.V)(),
            s = (0, eo.O)(),
            n = (0, nj.NF)({ trialOffer: i }),
            a = (0, nj.Tp)(),
            l = (0, x.bG)([nA.A], () => nA.A.getReminderStateId());
        switch (
            (o.useEffect(() => {
                (!0 === n && (0, nj.QG)(), !0 === a && (0, nj.ne)(l), (null != i || null != s) && (0, L.u1)(i, s));
            }, [i, s, n, a, l]),
            t)
        ) {
            case tp.tU.UserSettings:
                return (0, c.jsx)(lm, {});
            case tp.tU.ApplicationStoreHome:
                return (0, c.jsx)(aU, {});
            default:
                return null;
        }
    };
var lg = i(531296);
let lh = function (e) {
    let { entrypoint: t = tp.tU.UserSettings } = e;
    (0, v.P)(R);
    let i = (0, b.Hp)(),
        { sourceAnalyticsLocations: s, analyticsLocations: n } = (0, A.Ay)(N.A.PREMIUM_MARKETING),
        a = (0, x.bG)([M.A], () => M.A.hasFetchedSubscriptions()),
        l = (0, x.bG)([D.A], () => D.A.hasFetchedPaymentSources),
        r = (0, x.bG)([S.default], () => S.default.getCurrentUser()),
        d = r?.id,
        I = (0, ed.V)(),
        C = (0, eo.O)(),
        U = (0, E.Y)(tp.T7),
        [G, w] = o.useState(!0),
        B = o.useRef(0),
        H = (0, k.YE)(r, tp.PremiumTypes.TIER_2);
    ((0, nN.b)(),
        o.useEffect(() => {
            !(async function () {
                let e = Date.now();
                (await Promise.all([j.hP(), j.$o(), (0, h.zS)(null, null, eY.tF5.DISCOVERY)]),
                    (B.current = Date.now() - e),
                    w(!1));
            })();
        }, []),
        o.useEffect(() => {
            G ||
                O.default.track(eY.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: s,
                    load_duration_ms: B.current,
                });
        }, [s, G]),
        o.useEffect(() => {
            i && (null != I || null != C) && (0, L.u1)(I, C);
        }, [i, I, C]));
    let F = (0, m.zy)(),
        V = o.useRef(!1),
        W = a && l && U,
        [z, X] = o.useState(W);
    (W && !z && X(!0),
        o.useEffect(() => {
            if (V.current || !W) return;
            let e = new URLSearchParams(F.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: tp.pe.TIER_0, nitro: tp.pe.TIER_2 },
                i = Object.hasOwn(t, e) ? t[e] : void 0;
            null != i &&
                ((V.current = !0),
                (0, y.bG)(eY.BVt.APPLICATION_STORE),
                (0, _.A)({ subscriptionTier: i, analyticsLocations: n }));
        }, [W, F.search, n]));
    let Y = (0, x.bG)([P.A], () => P.A.enabled),
        K = t === tp.tU.ApplicationStoreHome,
        q = Y
            ? (0, c.jsx)(p.A, {})
            : i
              ? (0, c.jsx)(T.uK, {})
              : K && H
                ? (0, c.jsx)(A.f5, { value: n, children: (0, c.jsx)(nf, { userId: d }) })
                : z
                  ? null
                  : (0, c.jsx)("div", { className: u()(lg.kL, lg.Lq), children: (0, c.jsx)(g.y, {}) });
    return null != q
        ? !Y && !i && K && H
            ? q
            : (0, c.jsxs)(c.Fragment, { children: [K && (0, c.jsx)(f.A, {}), q] })
        : (0, c.jsx)(A.f5, { value: n, children: (0, c.jsx)(lx, { entrypoint: t }) });
};
