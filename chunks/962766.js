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
    p = s(228366),
    h = s(73825),
    f = s(974544),
    N = s(107834),
    A = s(793574),
    j = s(688810),
    E = s(277984),
    b = s(86379),
    T = s(160946),
    R = s(545075),
    C = s(840251),
    I = s(688151);
let _ = new C.E([], I.$G.OPEN_NITRO, { location: "open nitro tab/settings" });
var v = s(611924),
    P = s(75678),
    S = s(976860),
    y = s(351906),
    D = s(287809),
    M = s(295405),
    O = s(166403),
    L = s(174459),
    k = s(474090),
    U = s(10392);
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
    Z = s(65470),
    q = s(375708),
    Q = s(719126);
let $ = function (e) {
    let { className: t, location: s, analyticsLocation: i } = e,
        { analyticsLocations: n } = (0, j.Ay)(s);
    return (0, c.jsx)(j.f5, {
        value: n,
        children: (0, c.jsxs)(X.h, {
            className: u()(Q.kL, Q.pm, t),
            color: "purple",
            children: [
                (0, c.jsxs)("div", {
                    className: Q.FS,
                    children: [
                        (0, c.jsx)(K.D, {
                            variant: "heading-xxl/bold",
                            className: Q.R_,
                            children: q.intl.string(q.t.Ve9Ge6),
                        }),
                        (0, c.jsx)(J.E, { variant: "text-md/medium", children: q.intl.string(q.t.yQ06u1) }),
                        (0, c.jsx)("div", {
                            className: Q.SB,
                            children: (0, c.jsx)(Z.A, {
                                buttonTextOverride: q.intl.string(q.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: i,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, c.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                    className: Q._e,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
var ee = s(877624),
    et = s(502572),
    es = s(192308),
    ei = s(331322),
    en = s(403581),
    ea = s(821609),
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
    eh = s(724651),
    ef = s(732280),
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
let eb = function (e) {
    let { text: t } = e;
    return (0, c.jsx)("div", {
        className: eE.i,
        children: (0, c.jsx)(J.E, { variant: "text-sm/bold", color: "text-overlay-light", children: t }),
    });
};
var eT = s(371764),
    eR = s(103411),
    eC = s(792656),
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
                children: q.intl.string(q.t["/ARFVE"]),
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
                                                            return q.intl.string(q.t.ixASa2);
                                                        case "hours":
                                                            return q.intl.string(q.t["8sNvNn"]);
                                                        case "minutes":
                                                            return q.intl.string(q.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return q.intl.string(q.t.JhaiLW);
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
    ek = s(854627),
    eU = s(427262),
    eG = s(938767);
function ew() {
    let e = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        t = (0, eO.A)(),
        { avatarSrc: s, avatarDecorationSrc: i, eventHandlers: n } = (0, ek.A)({ userId: e?.id, size: eD._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, eU.mG)(e);
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
    ez = s(839534),
    eW = s(851746),
    eY = s(326084),
    eX = s(197630),
    eK = s(664654);
s(232198);
var eJ = s(652215),
    eZ = s(879416),
    eq = s(144165),
    eQ = s(590251),
    e$ = s(607470),
    e0 = s(212737),
    e1 = s(162907);
let e2 =
    "https://cdn.discordapp.com/assets/content/f94d752e86f195c300db953fbe5c704cbf0c696dcbb0b3e389cd60e8a633a942.png";
var e3 = s(188828);
let e6 =
    "https://cdn.discordapp.com/assets/content/ceb223833c25175aadddac32ce46fd1c60f4455860c6be9017c8d5993dce01c9.png";
var e7 = s(764014),
    e5 = s(484252);
let e8 =
    "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg";
function e9(e) {
    let { user: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, ek.A)({ userId: t.id, size: eD._3.SIZE_24 });
    return (0, c.jsx)(
        eM.eu,
        { className: e1.bj, src: s, "aria-label": (0, eU.mG)(t), size: eD._3.SIZE_24, ...i },
        t.id,
    );
}
function e4(e) {
    let { slotIndex: t } = e;
    return (0, c.jsx)("div", { className: e1.p, children: t });
}
function te(e) {
    let { referralSentUsers: t, className: s } = e;
    return (0, c.jsx)("div", {
        className: u()(e1.L$, s),
        children: (function () {
            let e = [];
            for (let s = 0; s < eK.Z; s++)
                if (t?.[s] !== void 0) {
                    let i = (0, c.jsx)(e9, { user: t[s] }, t[s].id);
                    e.push(i);
                } else {
                    let t = (0, c.jsx)(e4, { slotIndex: s + 1 }, s);
                    e.push(t);
                }
            return e;
        })(),
    });
}
let tt = { width: 200, height: 160 },
    ts = { width: 100, height: 60 },
    ti = { width: 60, height: 40 };
function tn(e) {
    let {
            nReferralsSent: t,
            imageSize: s = 93,
            backgroundClassName: i,
            ringClassName: n,
            referralRewardType: a = null,
            useAltReferralCardArt: l = !1,
        } = e,
        r = (0, x.bG)([el.Ay], () => el.Ay.useReducedMotion),
        {
            src: o,
            srcSet: d,
            dimensions: u,
        } = l
            ? a === eX.xb.ORBS
                ? { src: e6, srcSet: `${e6} 1x, ${e7.A} 2x`, dimensions: r ? ts : tt }
                : a === eX.xb.DISCOUNT
                  ? { src: e2, srcSet: `${e2} 1x, ${e3.A} 2x`, dimensions: ti }
                  : { src: e8, srcSet: void 0, dimensions: null }
            : { src: e8, srcSet: void 0, dimensions: null },
        m = u?.width ?? s,
        g = u?.height ?? s;
    return (0, c.jsx)(eQ.a, {
        percent: 33.3 * t,
        colorOverride: "#53ac66",
        background: i ?? e1.cq,
        strokeSize: 0.8,
        ringColorOverrideClassName: n ?? e1.e0,
        overlayClassName: t === eK.Z ? e1.ys : void 0,
        children:
            a === eX.xb.ORBS && l && !r
                ? (0, c.jsx)(e$.A, {
                      className: e1.HF,
                      width: m,
                      height: g,
                      autoPlay: !0,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      controls: !1,
                      children: (0, c.jsx)("source", { src: e5.A, type: "video/webm" }),
                  })
                : null != d
                  ? (0, c.jsx)("img", { src: o, srcSet: d, alt: "", role: "presentation", width: m, height: g })
                  : (0, c.jsx)(eq._, { src: o, height: g, width: m, zoomable: !1 }),
    });
}
var ta = s(478016),
    tl = s(318254),
    tr = s(661531),
    tc = s(626031),
    to = s(957457);
function td(e) {
    let { nRewardsGranted: t, referralRewardType: s, className: i } = e;
    return t < 1
        ? null
        : s === eX.xb.ORBS
          ? (0, c.jsx)(tu, { nRewardsGranted: t, className: i })
          : s === eX.xb.DISCOUNT
            ? (0, c.jsx)(tm, { nRewardsGranted: t, className: i })
            : null;
}
function tu(e) {
    let { nRewardsGranted: t, className: s } = e,
        i = 5e3 * t,
        [n, a] = o.useState(0);
    return (
        o.useEffect(() => {
            a(i);
        }, [i]),
        (0, c.jsxs)(ei.B, {
            direction: "horizontal",
            align: "center",
            gap: 0,
            fullWidth: !1,
            className: s,
            children: [
                (0, c.jsxs)("div", {
                    className: to.u,
                    "aria-label": String(i),
                    children: [
                        (0, c.jsx)(tl.C, { size: "xs", color: tr.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                        (0, c.jsx)(tc.t, {
                            value: n,
                            onValueChange: eJ.tEg,
                            onValueReached: eJ.tEg,
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
                    children: q.intl.string(q.t.UhguER),
                }),
            ],
        })
    );
}
function tm(e) {
    let { nRewardsGranted: t, className: s } = e;
    return (0, c.jsxs)(ei.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        fullWidth: !1,
        className: s,
        "aria-label": q.intl.formatToPlainString(q.t["P//01n"], { discountPercent: 30, duration: t }),
        children: [
            (0, c.jsx)(ta.U, { size: "md", color: tr.A.colors.ICON_FEEDBACK_POSITIVE }),
            (0, c.jsx)(J.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: q.intl.format(q.t["P//01n"], { discountPercent: 30, duration: t }),
            }),
        ],
    });
}
var tx = s(758836),
    tg = s(558992);
function tp(e) {
    let { className: t } = e,
        {
            referralSentUsers: i,
            nReferralsSent: n,
            hasEligibleFriends: a,
            allSent: l,
            headingText: r,
            bodyText: o,
            referralStatus: d,
            isEligibleForIncentive: m,
            referralIncentiveRewardType: g,
            useAltReferralCardArt: p,
            shouldShowSpendOrbsCta: h,
        } = (function () {
            let e,
                t,
                s,
                { location: i = "PremiumNitroHomeReferralBanner" } =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { referralSentUsers: n } = (0, eK.J)(),
                a = (0, x.bG)([eW.A], () => eW.A.getRecipientStatus()),
                l = !1 !== (0, x.bG)([eW.A], () => eW.A.getHasEligibleFriends()),
                {
                    isEligibleForIncentive: r,
                    referralRewardType: c,
                    useAltReferralCardArt: o,
                } = (0, eZ.x)({ location: i }),
                d = r ? c : null,
                u =
                    ((e = 0),
                    (t = 0),
                    (s = 0),
                    a.forEach((i) => {
                        i === eY.aK.REFERRER_REWARD_GRANTED
                            ? (e++, t++, s++)
                            : i === eY.aK.CONVERTED
                              ? (t++, s++)
                              : i === eY.aK.REDEEMED && s++;
                    }),
                    { numRewardGranted: e, numConverted: t, numRedeemed: s, numSent: a.size }),
                m = a.size === eK.Z,
                g = (function (e, t, s) {
                    let i = em.A.getArticleURL(eJ.MVz.REFERRAL_PROGRAM);
                    if (!e) return q.intl.format(q.t["zWhX/Q"], { helpdeskArticle: i });
                    if (null != s)
                        return t.numRewardGranted === eK.Z
                            ? s === eX.xb.ORBS
                                ? q.intl.format(q.t.OluhLp, { helpdeskArticle: i })
                                : q.intl.format(q.t["8BYihN"], { helpdeskArticle: i })
                            : t.numSent === eK.Z
                              ? s === eX.xb.ORBS
                                  ? q.intl.format(q.t["1aV1j9"], { helpdeskArticle: i })
                                  : q.intl.format(q.t.QNrPuS, { helpdeskArticle: i })
                              : e
                                ? s === eX.xb.ORBS
                                    ? q.intl.format(q.t.cfE0uG, { numOrbs: 5e3, helpdeskArticle: i })
                                    : q.intl.format(q.t["+fcvlI"], { helpdeskArticle: i })
                                : q.intl.format(q.t["a0+Jwv"], { helpdeskArticle: i });
                    return t.numSent === eK.Z
                        ? t.numRedeemed === eK.Z
                            ? q.intl.format(q.t["1aEjsH"], { helpdeskArticle: i })
                            : q.intl.format(q.t["+u3AOO"], { helpdeskArticle: i })
                        : q.intl.format(q.t["omMr+V"], { helpdeskArticle: i });
                })(l, u, d),
                p =
                    d === eX.xb.ORBS
                        ? q.intl.string(q.t.tAlkl4)
                        : d === eX.xb.DISCOUNT
                          ? q.intl.formatToPlainString(q.t["/JJ9I5"], { discountPercent: 30 })
                          : q.intl.string(q.t.USo4s7),
                h = d === eX.xb.ORBS && u.numSent === eK.Z && u.numConverted >= 1;
            return {
                referralSentUsers: n,
                nReferralsSent: u.numSent,
                hasEligibleFriends: l,
                allSent: m,
                headingText: p,
                bodyText: g,
                referralStatus: u,
                isEligibleForIncentive: r,
                referralIncentiveRewardType: d,
                useAltReferralCardArt: o,
                shouldShowSpendOrbsCta: h,
            };
        })({ location: "PremiumNitroHomeReferralBannerTreatment" });
    return (0, c.jsxs)("div", {
        className: u()(tg.kL, t),
        children: [
            (0, c.jsx)("div", {
                className: tg.G3,
                children: (0, c.jsx)(tn, {
                    nReferralsSent: n,
                    imageSize: 55,
                    backgroundClassName: tg.HP,
                    ringClassName: tg.pZ,
                    referralRewardType: g,
                    useAltReferralCardArt: m && p,
                }),
            }),
            (0, c.jsxs)("div", {
                className: u()(tg.IH, m && tg.zD),
                children: [
                    m &&
                        (0, c.jsx)("div", {
                            className: tg.aZ,
                            children: (0, c.jsx)(eV.E, { type: "beta", variant: "expressive" }),
                        }),
                    (0, c.jsxs)("div", {
                        className: tg.n4,
                        children: [
                            (0, c.jsx)(J.E, {
                                variant: m ? "text-md/bold" : "text-md/semibold",
                                color: "text-strong",
                                children: r,
                            }),
                            (0, c.jsx)(J.E, {
                                variant: m ? "text-sm/medium" : "text-md/medium",
                                color: "text-subtle",
                                children: o,
                            }),
                        ],
                    }),
                    m
                        ? (0, c.jsxs)("div", {
                              className: tg.Wp,
                              children: [
                                  (0, c.jsx)(te, { referralSentUsers: i }),
                                  (0, c.jsx)(td, { nRewardsGranted: d.numRewardGranted, referralRewardType: g }),
                              ],
                          })
                        : (0, c.jsx)(te, { referralSentUsers: i, className: tg.t7 }),
                ],
            }),
            (0, c.jsx)(ea.$, {
                variant: "primary",
                disabled: !h && (!1 === a || !0 === l),
                text: h ? q.intl.string(q.t.iw5Ccc) : q.intl.string(q.t.Lm2nFc),
                onClick: () =>
                    h
                        ? (0, ez.Cz)({
                              tab: tx.G2.ORBS,
                              analyticsLocations: [],
                              analyticsSource: A.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR,
                          })
                        : (function (e) {
                              let { startingScreen: t, analyticsLocations: i } = e;
                              (L.default.track(eJ.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
                                  (0, es.openModalLazy)(async () => {
                                      let { default: e } = await Promise.resolve().then(s.bind(s, 212737));
                                      return (s) => (0, c.jsx)(e, { ...s, startingScreen: t });
                                  }));
                          })({ startingScreen: e0.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
            }),
        ],
    });
}
var th = s(702841),
    tf = s(676279),
    tN = s(202091),
    tA = s(717421),
    tj = s(396583),
    tE = (((i = {}).SINE = "sine"), (i.COSINE = "cosine"), i),
    tb = (((n = {}).UP = "up"), (n.DOWN = "down"), n);
let tT = (e) => {
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
        u = (0, tA.z)(
            null != i ? { from: { y: 0 }, to: { y: 1 }, config: { duration: i.duration * r }, loop: !0 } : { y: 0 },
        ),
        m = i?.path === "sine" ? Math.sin : Math.cos,
        [x, g] = (0, o.useState)(1),
        p = (0, tA.z)(
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
        N = (0, tA.z)(
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
        [j, E] = (0, o.useState)(0),
        [b, T] = (0, o.useState)(1),
        R = (0, tA.z)({ xOffset: j, config: { tension: 10, friction: 10, duration: A } });
    return ((0, tj.A)(() => {
        (E(b * (0.5 * Math.random() * 5 + 2.5)), T((e) => -1 * e));
    }, A),
    l)
        ? d
        : (0, c.jsx)(tN.animated.div, {
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
                  translateX: a ? R.xOffset.to((e) => `${e}px`) : 0,
                  scale: p.scale,
                  filter: N.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != n && n.changeOpacity ? n.containerVisibilityPercentage : 1,
              },
              children: d,
          });
};
var tR = s(382168);
let tC = function (e) {
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
        } = e;
        return (0, c.jsxs)(c.Fragment, {
            children: [
                null != i &&
                    (0, c.jsx)("div", {
                        className: u()(tR.nJ, i),
                        children: (0, c.jsx)(tT, {
                            blurAnimationData: { startBlurRadius: 10 * h, endBlurRadius: 0, duration: 3e3 },
                            scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                            yAxisAnimationData: { range: 15, duration: 6e3, path: tE.COSINE },
                            parallaxAnimationData:
                                null != s
                                    ? {
                                          pathDirection: tb.UP,
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
                        className: u()(tR.IN, n),
                        children: (0, c.jsx)(tT, {
                            yAxisAnimationData: { range: 15, duration: 6e3, path: tE.COSINE },
                            parallaxAnimationData:
                                null != s
                                    ? {
                                          pathDirection: tb.DOWN,
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
                        className: u()(tR.Gj, a),
                        children: (0, c.jsx)(tT, {
                            yAxisAnimationData: { range: 15, duration: 6e3, path: tE.SINE },
                            parallaxAnimationData:
                                null != s
                                    ? {
                                          pathDirection: tb.DOWN,
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
                        className: u()(tR.FV, l),
                        children: (0, c.jsx)(tT, {
                            blurAnimationData: { startBlurRadius: 5 * h, endBlurRadius: 0, duration: 4e3 },
                            scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                            yAxisAnimationData: { range: 15, duration: 6e3, path: tE.SINE },
                            parallaxAnimationData:
                                null != s
                                    ? {
                                          pathDirection: tb.UP,
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
                        className: u()(tR.E1, r),
                        children: (0, c.jsx)(tT, {
                            blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * h, duration: 3e3 },
                            scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                            yAxisAnimationData: { range: 20, duration: 4e3, path: tE.COSINE },
                            parallaxAnimationData:
                                null != s
                                    ? {
                                          pathDirection: tb.UP,
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
    },
    tI =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    t_ = function (e) {
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
                  children: (0, c.jsx)(tT, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                      yAxisAnimationData: { range: 20, duration: 4e3, path: tE.SINE },
                      parallaxAnimationData: {
                          pathDirection: tb.UP,
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
                                e$.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: a,
                                    children: (0, c.jsx)("source", { src: tI }),
                                },
                                tI,
                            ),
                  }),
              });
    },
    tv = function (e) {
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
            h = (0, th.bG)([el.Ay], () => el.Ay.useReducedMotion),
            f = (0, tf.TM)();
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(t_, {
                    supportHEVCAlpha: f,
                    isMotionReduced: h,
                    containerVisibilityPercentage: t,
                    containerClassName: s,
                    assetClassName: i,
                    animationSpeedScale: p,
                }),
                (0, c.jsx)(tC, {
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
var tP = s(942663);
let tS = function (e) {
    let { containerVisibilityPercentage: t, compact: s } = e;
    return (0, c.jsx)(tv, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: u()(tP.wG, s && tP.Vx),
        flyingWumpusAssetClassName: u()(tP.lu, s && tP.ov),
        boltContainerClassName: u()(tP.nJ, s && tP.Wc),
        hammerContainerClassName: u()(tP.Gj, s && tP.XA),
        keyContainerClassName: u()(tP.FV, s && tP.oZ),
        starContainerClassName: u()(tP.E1, s && tP.LN),
        boltAssetClassName: u()(tP.j7, s && tP.QN),
        hammerAssetClassName: u()(tP.Wv, s && tP.B9),
        keyAssetClassName: u()(tP.rs, s && tP.I1),
        starAssetClassName: u()(tP.OY, s && tP.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var ty = (((a = {}).MORNING = "morning"), (a.AFTERNOON = "afternoon"), (a.EVENING = "evening"), a),
    tD = s(454273);
let tM = function (e) {
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
            ((t = { [ty.MORNING]: q.t["Wvc/I+"], [ty.AFTERNOON]: q.t["d+0STx"], [ty.EVENING]: q.t.CqsxKI }),
            q.intl.string(
                t[
                    (s = new Date().getHours()) >= 5 && s < 12
                        ? ty.MORNING
                        : s >= 12 && s < 17
                          ? ty.AFTERNOON
                          : ty.EVENING
                ],
            )),
        h = o ?? (r ? (0, c.jsx)(tp, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tD.kL, tD.Eg, i),
        ref: l,
        children: (0, c.jsxs)("div", {
            className: u()(tD.W2, tD.HQ),
            ref: m,
            children: [
                (0, c.jsxs)(ei.B, {
                    align: "start",
                    gap: 32,
                    className: tD.ZU,
                    children: [
                        a && n,
                        (0, c.jsxs)(ei.B, {
                            align: "start",
                            gap: "lg",
                            children: [
                                (0, c.jsxs)(ei.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, c.jsx)(eF, {
                                            className: tD.z_,
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
                        h,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: tD.y3,
                    children: (0, c.jsx)(tS, { containerVisibilityPercentage: g, compact: null == h }),
                }),
            ],
        }),
    });
};
var tO = s(549926);
let tL = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(tv, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: tO.wG,
        flyingWumpusAssetClassName: tO.lu,
        boltContainerClassName: tO.nJ,
        hammerContainerClassName: tO.Gj,
        keyContainerClassName: tO.FV,
        starContainerClassName: tO.E1,
        boltAssetClassName: tO.j7,
        hammerAssetClassName: tO.Wv,
        keyAssetClassName: tO.rs,
        starAssetClassName: tO.OY,
        animationSpeedScale: 1 / 0.7,
    });
};
var tk = s(499126);
let tU = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(tv, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: tk.wG,
        flyingWumpusAssetClassName: tk.lu,
        boltContainerClassName: tk.nJ,
        hammerContainerClassName: tk.Gj,
        keyContainerClassName: tk.FV,
        starContainerClassName: tk.E1,
        boltAssetClassName: tk.j7,
        hammerAssetClassName: tk.Wv,
        keyAssetClassName: tk.rs,
        starAssetClassName: tk.OY,
        animationSpeedScale: 1 / 0.7,
    });
};
var tG = s(202541);
function tw(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, ep.Zb)(t),
        { visibilityPercentageRef: a, visibilityPercentage: l } = ej(!(0, x.bG)([el.Ay], () => el.Ay.useReducedMotion));
    return (0, c.jsx)("div", {
        className: u()(tD.kL, s),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: tD.Gs,
            ref: a,
            children: [
                (0, c.jsxs)(ei.B, {
                    align: "start",
                    gap: 24,
                    className: tD.E2,
                    children: [
                        (0, c.jsxs)(ei.B, {
                            align: "start",
                            gap: 12,
                            children: [
                                (0, c.jsx)(eb, { text: q.intl.string(q.t.yhldRB) }),
                                (0, c.jsx)(eF, { children: q.intl.format(q.t.FwjP6W, { days: n }) }),
                                (0, c.jsx)("div", {
                                    className: tD.X8,
                                    children: (0, c.jsx)(J.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: q.intl.string(q.t.Jf8KrT),
                                    }),
                                }),
                            ],
                        }),
                        (0, c.jsxs)(ei.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            className: tD.oF,
                            children: [
                                (0, c.jsx)(eC.A, {
                                    size: "md",
                                    buttonTextOverride: q.intl.string(q.t["2+luBl"]),
                                    iconOverride: en.t,
                                    variantOverride: "expressive",
                                }),
                                (0, c.jsx)(ea.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: q.intl.string(q.t.Af7ye6),
                                    onClick: () => (0, ed.openUserSettings)(eo.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, c.jsx)("div", { className: tD.Hk, children: (0, c.jsx)(tU, { containerVisibilityPercentage: l }) }),
            ],
        }),
    });
}
function tB(e) {
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
        { visibilityPercentageRef: p, visibilityPercentage: h } = ej(!(0, x.bG)([el.Ay], () => el.Ay.useReducedMotion)),
        f = g ?? (m ? (0, c.jsx)(tp, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tD.kL, tD.Eg, t),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: u()(tD.W2, tD.HQ),
            ref: p,
            children: [
                (0, c.jsxs)(ei.B, {
                    align: "start",
                    gap: 32,
                    className: u()(tD.ZU, tD.GW),
                    children: [
                        d && o,
                        null != n.expiresAt &&
                            (0, c.jsx)(eS, { expiresAt: n.expiresAt.toISOString(), digitTextVariant: "text-lg/bold" }),
                        (0, c.jsxs)(ei.B, {
                            align: "start",
                            gap: 16,
                            children: [
                                (0, c.jsx)(eF, {
                                    children: q.intl.format(q.t["3yZP0G"], { percent: n.discount.amount }),
                                }),
                                null != a &&
                                    (0, c.jsx)(J.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: q.intl.format(q.t["3Q4wCy"], {
                                            discountedPrice: a,
                                            billingPeriod: (0, ex.Ke)(n.discount.intervalType),
                                            numMonths: n.discount.intervalCount,
                                        }),
                                    }),
                            ],
                        }),
                        (0, c.jsxs)(ei.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            wrap: !0,
                            children: [
                                (0, c.jsx)(ea.$, {
                                    variant: "expressive",
                                    icon: en.t,
                                    size: "md",
                                    text: q.intl.string(q.t.zrCzVB),
                                    onClick: () => {
                                        var e;
                                        return (
                                            (e = ey.g.CONFIRM_DISCOUNT),
                                            void (0, es.openModalLazy)(async () => {
                                                let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                    await Promise.all([
                                                        s.e("489361"),
                                                        s.e("227853"),
                                                        s.e("470126"),
                                                        s.e("128804"),
                                                        s.e("71151"),
                                                        s.e("286615"),
                                                        s.e("311541"),
                                                        s.e("472847"),
                                                        s.e("986735"),
                                                        s.e("718368"),
                                                        s.e("258407"),
                                                        s.e("153302"),
                                                        s.e("758053"),
                                                        s.e("836576"),
                                                        s.e("983513"),
                                                        s.e("216806"),
                                                        s.e("310734"),
                                                        s.e("348567"),
                                                        s.e("452075"),
                                                        s.e("900277"),
                                                        s.e("127962"),
                                                        s.e("364827"),
                                                        s.e("907167"),
                                                        s.e("861060"),
                                                        s.e("952372"),
                                                        s.e("425412"),
                                                        s.e("910486"),
                                                        s.e("56366"),
                                                        s.e("265607"),
                                                        s.e("544571"),
                                                        s.e("40291"),
                                                        s.e("729963"),
                                                        s.e("102328"),
                                                        s.e("563983"),
                                                        s.e("50097"),
                                                        s.e("40286"),
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
                                (0, c.jsx)(Z.A, {
                                    variant: "secondary",
                                    size: "md",
                                    buttonTextOverride: q.intl.string(q.t["3KomGa"]),
                                }),
                            ],
                        }),
                        f,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: u()(tD.y3, tD.Xx),
                    children: (0, c.jsx)(tL, { containerVisibilityPercentage: h }),
                }),
            ],
        }),
    });
}
function tH(e) {
    let { className: t, isInReverseTrial: s, shouldShowReferralProgressBar: i } = e,
        {
            headingTop: n,
            showPill: a,
            shouldShowChurnVariant: l,
            premiumSubscription: r,
            userDiscountOffer: o,
            discountedPrice: d,
            buttonVisibilityRef: u,
        } = tV(),
        { analyticsLocations: m } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        x = (0, eN.c)(ee.C.MARKETING_PAGE_BANNER),
        g = null != r && r.status === eJ.Dmq.CANCELED,
        p = null;
    null != x &&
        "marketingPageBanner" === x.properties.properties.oneofKind &&
        (p = (0, c.jsx)(eT.x, {
            componentId: x.id,
            promotionId: x.promotionId,
            promotionBannerMarketingComponentFields: x.properties.properties.marketingPageBanner,
        }));
    let h = (0, ef.V)(),
        f = (0, eh.O)(),
        N = (0, Y.U9)(f, tG.pe.TIER_2) ? tG.pe.TIER_2 : void 0,
        E = null != r && r.status !== eJ.Dmq.ACCOUNT_HOLD && r.hasAnyPremiumNitro,
        b = (0, ec.A)(),
        T = b.isFractionalPremiumActive && !E && null == p && !l;
    if (s) return (0, c.jsx)(tw, { fpEndsAt: b.currentEntitlementEndsAt, className: t, buttonVisibilityRef: u });
    if (!g) {
        let e = T
            ? (0, c.jsxs)("div", {
                  className: tD.UJ,
                  children: [
                      (0, c.jsx)(eC.A, { size: "md", subscriptionTier: h?.subscriptionTrial?.skuId ?? N }),
                      (0, c.jsx)(Z.A, {
                          variant: "secondary",
                          size: "md",
                          buttonTextOverride: q.intl.string(q.t["3KomGa"]),
                      }),
                  ],
              })
            : null;
        return (0, c.jsx)(tM, {
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
        ? (0, c.jsx)(tB, {
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
        : (0, c.jsx)(tM, {
              className: t,
              headingTop: n,
              showPill: a,
              buttonVisibilityRef: u,
              shouldShowReferralProgressBar: i,
              marketingBanner: p,
          });
}
let [tF, tV] = (0, eu.A)(),
    tz = function (e) {
        let { className: t, buttonVisibilityRef: s, userDiscountOffer: i, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, ep.ds)(),
            r = (0, eg.QQ)(),
            o = (0, x.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            d = null != o && o.status === eJ.Dmq.CANCELED && null != i,
            u = r && !d,
            m = q.intl.string(q.t.qYKftX),
            g = (0, eR.m)(),
            { fractionalState: p, endsAt: h } = (0, ec.A)(),
            f = (0, er.Ay)(h, er.yE.CREDITS_ENDS_IN),
            N = null;
        if (p === tG.xc.NONE || l) N = (0, c.jsx)(eb, { text: m });
        else {
            u = !0;
            let e = q.intl.format(q.t["yR+oDD"], {
                helpCenterLink: em.A.getArticleURL(eJ.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            N = (0, c.jsx)(et.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: tD.YL,
                position: "right",
                children: (e) =>
                    (0, c.jsx)("div", {
                        ...e,
                        className: tD.V_,
                        children: (0, c.jsx)("div", { className: tD.eL, children: (0, c.jsx)(eb, { text: f }) }),
                    }),
            });
        }
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsx)(tF.Provider, {
                value: {
                    headingTop: N,
                    showPill: u,
                    shouldShowChurnVariant: d,
                    premiumSubscription: o,
                    userDiscountOffer: i,
                    discountedPrice: n,
                    buttonVisibilityRef: s,
                },
                children: (0, c.jsx)(tH, { className: t, isInReverseTrial: l, shouldShowReferralProgressBar: g }),
            }),
        });
    };
var tW = s(820284),
    tY = s(742589),
    tX = s(392943),
    tK = s(285373),
    tJ = s(603202),
    tZ = s(673992);
let tq = function () {
    return (0, c.jsx)(tW.A, {
        section: eJ.JJy.NAVIGATION,
        children: (0, c.jsx)(tY.A, {
            className: u()(tJ.TQ, tZ.C$),
            transparent: !0,
            role: "navigation",
            children: (0, c.jsxs)("div", {
                className: tJ.Wc,
                children: [
                    (0, c.jsxs)("div", {
                        className: tZ.wk,
                        children: [
                            (0, c.jsx)(en.t, { colorClass: tZ.tr }),
                            (0, c.jsx)("span", {
                                role: "img",
                                "aria-label": q.intl.string(q.t.Ipxkog),
                                className: tZ.Ss,
                                children: (0, c.jsx)(tX.A, { color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: tJ.MQ,
                        children: [
                            (0, c.jsx)(tK.l, { size: "sm", location: A.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB }),
                            (0, c.jsx)(Z.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var tQ = s(325499),
    t$ = s(562708),
    t0 = s(885574),
    t1 = s(43990),
    t2 = s(993077),
    t3 = s(139286),
    t6 = s(872725),
    t7 = s(920050),
    t5 = s(51965),
    t8 = s(375776),
    t9 = s(727811),
    t4 = s(222652),
    se = s(553875),
    st = s(934353);
function ss(e) {
    let { openRewardModal: t } = e,
        s = (0, t4.z)();
    if (s.kind === t4.N.SUBSCRIBE)
        return (0, c.jsxs)("div", {
            className: st.R$,
            children: [
                (0, c.jsx)(eC.A, {
                    defaultTextOverride: s.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: tG.pe.TIER_2,
                }),
                (0, c.jsx)(ea.$, { variant: "secondary", size: "md", text: q.intl.string(q.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        s.claimStatus === t9.P.CLAIMED
            ? { text: q.intl.string(se.default.Plwzgf) }
            : { text: q.intl.string(q.t.hvVgAZ) };
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: st.R$,
                children: [
                    (0, c.jsx)(t5.A, {
                        variant: "overlay-primary",
                        size: "md",
                        text: s.text,
                        icon: s.icon,
                        iconPosition: s.iconPosition,
                        onClick: s.onClick,
                        disabled: s.disabled,
                        loading: s.loading,
                    }),
                    (0, c.jsx)(ea.$, {
                        variant: "secondary",
                        size: "md",
                        ...i,
                        onClick: t,
                        disabled: s.requestInProgress,
                    }),
                ],
            }),
            s.claimStatus === t9.P.CLAIM_IN_PROGRESS &&
                (0, c.jsxs)("div", {
                    className: st.ed,
                    children: [
                        (0, c.jsx)(t0.CircleInformationIcon, { size: "xs", color: "var(--text-subtle)" }),
                        (0, c.jsx)(J.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: q.intl.string(se.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function si(e) {
    let { glowing: t = !1 } = e;
    (0, t3.A)({
        type: t$.ImpressionTypes.VIEW,
        name: t$.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: t7.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: i } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_HERO_CARD),
        n = o.useCallback(() => {
            (0, es.openModalLazy)(async () => {
                let { default: e } = await Promise.all([s.e("878140"), s.e("813088")]).then(s.bind(s, 347171));
                return (t) => (0, c.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, c.jsx)(t1.N, {
        theme: eJ.NJ8.DARK,
        children: (e) =>
            (0, c.jsx)(j.f5, {
                value: i,
                children: (0, c.jsx)("div", {
                    className: u()(e, st.kL),
                    children: (0, c.jsx)(t6.A, {
                        cardType: t2.s.CUSTOM,
                        cardClassName: st.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, c.jsxs)("div", {
                            className: st.XF,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: st.j,
                                    children: [
                                        (0, c.jsx)("div", { className: st._g }),
                                        (0, c.jsx)("div", { className: st.$h }),
                                        (0, c.jsx)("div", { className: st.Rv }),
                                        (0, c.jsx)("div", { className: st.Lw }),
                                        (0, c.jsx)("div", { className: st.mR }),
                                    ],
                                }),
                                (0, c.jsxs)("div", {
                                    className: st.Qs,
                                    children: [
                                        (0, c.jsx)("img", {
                                            className: st.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, c.jsx)(K.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: st.DD,
                                            children: q.intl.string(se.default.RGT513),
                                        }),
                                        (0, c.jsx)(J.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: st.h_,
                                            children: q.intl.string(se.default["+pTnsf"]),
                                        }),
                                        (0, c.jsx)(ss, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var sn = s(744064);
function sa(e) {
    let { className: t, containerClassName: s } = e,
        i = (0, t4.z)(),
        n = { isThirdPartyPerk: !0, subscriptionRequired: !0 },
        a =
            i.kind === t4.N.SUBSCRIBE
                ? n
                : {
                      ...n,
                      ctaText: i.text,
                      ctaIcon: i.icon,
                      ctaIconPosition: i.iconPosition,
                      ctaDisabled: i.disabled,
                      ctaLoading: i.loading,
                      onCtaClick: i.onClick,
                  };
    return (0, c.jsx)(sn.S, {
        id: t7.XBOX_PREMIUM_PERK_CARD_ID,
        title: q.intl.string(se.default.UVL9tD),
        description: q.intl.string(se.default["I+IXr0"]),
        ...a,
        className: t,
        containerClassName: s,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, c.jsx)("img", {
            src: "https://cdn.discordapp.com/assets/content/faf904a149b90411034912085118d871e8cd3d44110f7a6ad22d84afd7bee524.png",
            width: 130,
            height: 16,
            alt: "Xbox Game Pass",
        }),
        blurTint: "#054B16",
        analyticsOptions: { thirdPartyPartner: "xbox" },
    });
}
function sl(e) {
    let { analyticsLocations: t } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, c.jsx)(j.f5, { value: t, children: (0, c.jsx)(sa, { ...e }) });
}
var sr = s(700556),
    sc = s(821874);
function so(e) {
    let { id: t, sectionClassName: s, heading: i, beforeGrid: n, grid: a, gridClassName: l } = e,
        r = sc.Ui;
    return (0, c.jsxs)("div", {
        id: t,
        className: s,
        children: [
            i,
            n,
            null != a ? (0, c.jsx)("div", { className: u()(r, null != n && sr.Jx, l), children: a }) : null,
        ],
    });
}
var sd = s(517846),
    su = s(695366),
    sm = s(27620),
    sx = s(789861),
    sg = s(592909),
    sp = s(398523),
    sh = s(881373),
    sf = s(555393),
    sN = s(852218),
    sA = s(951780),
    sj = s(612413),
    sE = s(310235),
    sb = s(334551),
    sT = s(762359);
let sR =
        "https://cdn.discordapp.com/assets/content/74dd725dde373bfdbced9606d5201ed2c555fc895f4da644a8de314de6906be3.webp",
    sC =
        "https://cdn.discordapp.com/assets/content/40a956d1f02220ee7fe04579320500571f21c3195af2f11afea01601f1ba28c9.svg";
var sI = s(762493);
let s_ = "xgpp";
function sv(e) {
    let { glowingSectionId: t, glowingPerkId: s } = e,
        i = (0, tQ.b)("premium_subscriber_home_rewards"),
        {
            callOfDutyCard: n,
            expiredCallOfDutyCard: a,
            logitechCard: l,
            steelseriesCard: r,
            youtubeCard: d,
        } = (function () {
            let { analyticsLocations: e } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
                t = (0, sg.A0)({ location: "useHardwarePartnerPerkCards" }),
                s = (0, sg.hd)({ location: "useHardwarePartnerPerkCards" }),
                i = (0, sh.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
                n = sp.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
                a = (0, sj.mh)({ location: "useThirdPartyPartnerPerkCards" }),
                l = null === (0, sf.N)(),
                { currentDate: r, nDaysInMonth: d } = (0, o.useMemo)(() => {
                    let e = new Date();
                    return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
                }, []);
            return (0, o.useMemo)(() => {
                let o = t
                        ? {
                              id: t7.CALL_OF_DUTY_3PP_CARD_ID,
                              title: q.intl.string(sE.default.F0b4Z8),
                              description: q.intl.formatToPlainString(sE.default["hworR+"], {
                                  validDates: (0, sx.a1)(),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              pillText: q.intl.formatToPlainString(sE.default.g7iyvR, { date: (0, sx.mh)() }),
                              caption: (0, c.jsx)("img", { src: sC, alt: "Call of Duty: MW4" }),
                              backgroundAssetUrl: sR,
                              ctaText: q.intl.string(sE.default.fcopjf),
                              onCtaClick: () =>
                                  (0, sA.P)({
                                      partnerIds: [sN.Bt],
                                      title: q.intl.string(sE.default.YJsqDS),
                                      subtitle: q.intl.format(sE.default.ieA3V0, {
                                          termsUrl:
                                              "https://support.discord.com/hc/en-us/articles/39188406147479-Nitro-Rewards",
                                      }),
                                      modalTeaser: {
                                          title: q.intl.string(sE.default.Dkm10r),
                                          body: q.intl.string(sE.default.LHAkT9),
                                      },
                                      analyticsLocations: e,
                                  }),
                              analyticsOptions: { thirdPartyPartner: sN.Bt },
                              ctaDisabled: l,
                              ctaLoading: l,
                          }
                        : null,
                    u = s
                        ? {
                              id: t7.CALL_OF_DUTY_3PP_EXPIRED_CARD_ID,
                              title: q.intl.string(sE.default["IcD/7p"]),
                              description: q.intl.formatToPlainString(sE.default.hausFi, { date: (0, sx.wT)() }),
                              isThirdPartyPerk: !0,
                              expired: !0,
                              pillText: q.intl.string(sE.default.fxF0Jz),
                              caption: (0, c.jsx)("img", { src: sC, alt: "Call of Duty: MW4" }),
                              backgroundAssetUrl: sR,
                              analyticsOptions: { thirdPartyPartner: sN.Bt },
                          }
                        : null,
                    m = i
                        ? {
                              id: t7.LOGITECH_3PP_CARD_ID,
                              title: q.intl.string(sb.default.OlObRa),
                              description: q.intl.format(sb.default.ZGOJ8R, {
                                  discountPercent: sh.aW,
                                  termsUrl: em.A.getArticleURL(eJ.MVz.LOGITECH_PROMOTION),
                              }),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              progress: r.getDate() / d,
                              ctaText: q.intl.string(q.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, sA.P)({
                                      partnerIds: [sN.XY],
                                      title: q.intl.string(sb.default["2I7nK+"]),
                                      subtitle: q.intl.format(sb.default.W8jOD0, {
                                          termsUrl: em.A.getArticleURL(eJ.MVz.LOGITECH_PROMOTION),
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
                              analyticsOptions: { thirdPartyPartner: sN.XY },
                              ctaDisabled: l,
                              ctaLoading: l,
                          }
                        : null,
                    x = n
                        ? {
                              id: t7.RECURRING_3P_PROMOTIONS_CARD_ID,
                              title: q.intl.string(q.t.m7PucM),
                              description: q.intl.format(q.t["1Zw6xL"], {}),
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              caption: (0, c.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                              progress: r.getDate() / d,
                              ctaText: q.intl.string(q.t.w7s5Qr),
                              onCtaClick: () =>
                                  (0, sA.P)({
                                      partnerIds: [sN.KS],
                                      title: q.intl.string(q.t["7ioAjs"]),
                                      subtitle: q.intl.format(q.t.LOYRxB, {
                                          helpCenterLink: em.A.getArticleURL(eJ.MVz.RECURRING_PROMOTION),
                                      }),
                                      analyticsLocations: e,
                                  }),
                              blurTint: "#2E213D",
                              analyticsOptions: { thirdPartyPartner: sN.KS },
                              ctaDisabled: l,
                              ctaLoading: l,
                          }
                        : null;
                return {
                    callOfDutyCard: o,
                    expiredCallOfDutyCard: u,
                    logitechCard: m,
                    steelseriesCard: x,
                    youtubeCard: a
                        ? {
                              id: t7.YOUTUBE_3PP_CARD_ID,
                              title: q.intl.string(sT.default["NNPh/j"]),
                              description: q.intl.format(sT.default.MrgHvR, {
                                  helpCenterUrl: em.A.getArticleURL(eJ.MVz.YOUTUBE_PROMOTION),
                              }),
                              isThirdPartyPerk: !0,
                              backgroundAssetUrl:
                                  "https://cdn.discordapp.com/assets/content/e07fd53d33f374f567964ff5b7843f09bc6943288891cfed6e573df04ba9741c.webp",
                              blurTint: "#18181C",
                              caption: (0, c.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/1db181f0a98c20928da64ee63fe3184fd6b60f1b7d4c4fb69560aeb802b55c28.svg",
                                  alt: "YouTube Premium",
                              }),
                              ctaText: q.intl.string(sE.default.fcopjf),
                              onCtaClick: () =>
                                  (0, sA.P)({
                                      partnerIds: [sN.NC],
                                      analyticsLocations: e,
                                      title: q.intl.string(sT.default.TDZUui),
                                      subtitle: q.intl.format(sT.default.BTLkvw, {
                                          helpCenterUrl: em.A.getArticleURL(eJ.MVz.YOUTUBE_PROMOTION),
                                      }),
                                      modalTeaser: {
                                          title: q.intl.format(sT.default.J8CVYT, {
                                              helpCenterUrl: em.A.getArticleURL(
                                                  eJ.MVz.YOUTUBE_PROMOTION_CURRENT_SUBSCRIBER,
                                              ),
                                          }),
                                          titleVariant: "text-sm/medium",
                                          icon: su.E,
                                      },
                                      onClose: () => {
                                          sm.Ay.fireSurveyAction(sd.w.YOUTUBE_3PP_MODAL_DISMISSED);
                                      },
                                  }),
                              analyticsOptions: { thirdPartyPartner: sN.NC },
                              ctaDisabled: l,
                              ctaLoading: l,
                          }
                        : null,
                };
            }, [e, t, s, r, i, d, n, a, l]);
        })(),
        m = null != n || null != a || null != l || null != r || null != d;
    return i || m
        ? (0, c.jsx)(so, {
              id: s_,
              sectionClassName: u()(sI.uW, sI.Uv, sI.qr),
              heading: (0, c.jsx)(K.D, {
                  variant: "nitro-sm",
                  className: u()(sc.R_, sr.U6),
                  children: q.intl.string(q.t.NG1e6l),
              }),
              beforeGrid: i
                  ? (0, c.jsx)("div", { className: sr.JE, children: (0, c.jsx)(si, { glowing: t === s_ }) })
                  : null,
              grid: m
                  ? (0, c.jsxs)(c.Fragment, {
                        children: [
                            null != n && (0, c.jsx)(sn.S, { ...n, containerClassName: sc.Nr, glowing: s === n.id }),
                            null != d &&
                                (0, c.jsx)(sn.S, {
                                    ...d,
                                    containerClassName: sc.Nr,
                                    glowing: s === d.id,
                                    autoClickCta: s === d.id,
                                }),
                            i && (0, c.jsx)(sl, { containerClassName: sc.Nr }),
                            null != l && (0, c.jsx)(sn.S, { ...l, containerClassName: sc.Nr, glowing: s === l.id }),
                            null != r && (0, c.jsx)(sn.S, { ...r, containerClassName: sc.Nr, glowing: s === r.id }),
                            null != a && (0, c.jsx)(sn.S, { ...a, containerClassName: sc.Nr, glowing: s === a.id }),
                        ],
                    })
                  : null,
          })
        : null;
}
var sP = s(313133),
    sS = s(67423);
let sy = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: l } = (0, j.Ay)(A.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        r = (0, tA.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsx)(tN.animated.div, {
        className: u()(sP.iE, { [sP.q4]: !t }),
        style: r,
        children: (0, c.jsxs)("div", {
            className: sP.iJ,
            children: [
                (0, c.jsx)("img", { alt: "", src: sS, className: sP.oU }),
                (0, c.jsxs)("div", {
                    className: sP.iQ,
                    children: [
                        (0, c.jsx)(K.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: q.intl.format(q.t["3yZP0G"], { percent: n.discount.amount }),
                        }),
                        (0, c.jsx)(J.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: q.intl.format(q.t["3Q4wCy"], {
                                numMonths: n.discount.intervalCount,
                                discountedPrice: a,
                                billingPeriod: (0, ex.Ke)(n.discount.intervalType),
                            }),
                        }),
                    ],
                }),
                (0, c.jsx)(ea.$, {
                    variant: "expressive",
                    icon: en.t,
                    size: "md",
                    text: q.intl.string(q.t.zrCzVB),
                    onClick: () =>
                        void (0, es.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                s.e("489361"),
                                s.e("227853"),
                                s.e("470126"),
                                s.e("128804"),
                                s.e("71151"),
                                s.e("286615"),
                                s.e("311541"),
                                s.e("472847"),
                                s.e("986735"),
                                s.e("718368"),
                                s.e("258407"),
                                s.e("153302"),
                                s.e("758053"),
                                s.e("836576"),
                                s.e("983513"),
                                s.e("216806"),
                                s.e("310734"),
                                s.e("348567"),
                                s.e("452075"),
                                s.e("900277"),
                                s.e("127962"),
                                s.e("364827"),
                                s.e("907167"),
                                s.e("861060"),
                                s.e("952372"),
                                s.e("425412"),
                                s.e("910486"),
                                s.e("56366"),
                                s.e("265607"),
                                s.e("544571"),
                                s.e("40291"),
                                s.e("729963"),
                                s.e("102328"),
                                s.e("563983"),
                                s.e("50097"),
                                s.e("40286"),
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
var sD = s(761508),
    sM = s(449543),
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
function sk(e) {
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
function sU(e) {
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
        src: "https://cdn.discordapp.com/assets/content/a0a5fdb2c9735632e0cadb26af7aa33929c63981e559ef0337cacced2cab2d09.svg",
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
        color: t = tr.A.colors.ICON_STRONG,
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
var sZ = s(462887),
    sq = s(736653),
    sQ = s(259065),
    s$ = s(206835),
    s0 = s(591179),
    s1 = s(462463),
    s2 = s(219882),
    s3 = s(19886),
    s6 = s(425713),
    s7 = s(696292),
    s5 = s(192444),
    s8 = s(617986),
    s9 = s(892227),
    s4 = s(81466),
    ie = s(1889),
    it = s(749012);
let is = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, H.F)({ location: "NitroOrbsWhatsNewCardFooter" });
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
                                (0, c.jsx)(s4.CalendarIcon, { size: "sm", color: tr.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(J.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: q.intl.string(ie.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, c.jsx)(J.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: q.intl.format(ie.default.xedPIb, { days: s }),
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
                                (0, c.jsx)(tl.C, { size: "sm", color: tr.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(J.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: q.intl.string(ie.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, c.jsx)(J.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: q.intl.format(ie.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var ii = s(190107),
    ia = s(799544);
function il(e) {
    let { shouldShowBonusOrbsUX: t, multiplier: s } = (0, s5.lk)(ii.rE.NITRO_HOME_MARKETING),
        { isEligible: i, programReward: n } = (0, H.F)({ location: e });
    return {
        nitroOrbsRewardsCard: (0, o.useMemo)(
            () =>
                !i || null == n || null == n.reward_amount || n.reward_amount <= 0
                    ? null
                    : {
                          id: t7.NITRO_ORBS_REWARDS_CARD_ID,
                          title: q.intl.string(ie.default.hx5AFp),
                          description: q.intl.format(ie.default.wq3CF2, { orbsCount: n.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(ia.lH, ia.yK),
                          footerContent: (0, c.jsx)(is, {}),
                          ctaText: q.intl.string(ie.default.BxjHiu),
                          onCtaClick: () => (0, S.pX)(eJ.BVt.COLLECTIBLES_SHOP_WITH_TAB(tx.G2.ORBS)),
                      },
            [i, n],
        ),
        questOrbMultiplierCard: (0, o.useMemo)(
            () =>
                t
                    ? {
                          id: t7.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: q.intl.string(q.t.Csf5Ol),
                          description: q.intl.format(q.t.NpUfej, { bonusOrbMultiplier: s }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: q.intl.string(q.t.jVcuVY),
                          onCtaClick: () => (0, s8.mA)({ fromContent: s7.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: ia.Nf,
                      }
                    : null,
            [t, s],
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
                ? (0, es.openModalLazy)(async () => {
                      let { default: e } = await s.e("499709").then(s.bind(s, 516044));
                      return (t) => (0, c.jsx)(e, { ...t });
                  })
                : (0, P.A)({
                      subscriptionTier: tG.pe.TIER_2,
                      initialPlanId: tG.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, o.useMemo)(
        () =>
            t
                ? {
                      id: t7.PREMIUM_GROUP_CARD_ID,
                      title: q.intl.string(iu.default.YkvksF),
                      description: (0, c.jsxs)(c.Fragment, {
                          children: [
                              q.intl.formatToPlainString(iu.default.JlyGQj, {
                                  totalSeats: id.aw,
                                  premiumGroupProductName: (0, id.DP)(),
                              }),
                              (0, c.jsx)("div", {
                                  className: ia.LF,
                                  children: (0, c.jsx)(ic.A, {
                                      onClick: ix,
                                      children: q.intl.string(iu.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: q.intl.string(q.t.oW0eUd),
                      primaryAsset: im,
                      ctaIcon: en.t,
                      ctaIconPosition: "start",
                      ctaText: q.intl.string(q.t.IJI7yk),
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
    ij = s(655752),
    iE = s(945810);
let ib = (0, iE.mj)({
    kind: "user",
    name: "2026-08-nitro-tenure-badge-total-progress",
    defaultConfig: { measureFromStreakStart: !1 },
    variations: { 0: { measureFromStreakStart: !1 }, 1: { measureFromStreakStart: !0 } },
});
var iT = s(764231),
    iR = s(627380),
    iC = s(30084),
    iI = s(814014),
    i_ = s(714206);
let iv =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    iP =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    iS =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function iy() {
    let e,
        t,
        { analyticsLocations: s } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        i = (0, s0.X)("useWhatsNewPerkCards"),
        n = (0, s1.A)({ analyticsLocations: s }),
        a = (0, o.useCallback)(() => {
            (0, ed.openUserSettings)(eo.X.PROFILE_PANEL, { analyticsLocations: s }, () =>
                (0, sQ.L)({ analyticsLocations: s }),
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
                s = t === tG.xc.FP_ONLY,
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
                            let { measureFromStreakStart: t } = ib.useConfig({ location: e });
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
                g = (0, iR.t)(),
                p = (0, ij.P)();
            return (0, o.useMemo)(() => {
                let t,
                    a = null != p ? q.intl.string(p.nameUnformattedNitro) : void 0;
                null == i
                    ? s && (t = (0, iT.T)(tG.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === s3.Wo.UPCOMING
                              ? q.intl.formatToPlainString(q.t.a1eKDi, { days: g?.days ?? 0 })
                              : i.status === s3.Wo.WITHHELD
                                ? ((0, iT.T)(i.id, i.tenureReqNumMonths) ?? void 0)
                                : ((function (e, t) {
                                      if (null != e && null != t) {
                                          if (e.days <= 30)
                                              return q.intl.formatToPlainString(q.t.NEXoaI, {
                                                  days: e.days,
                                                  nextBadgeName: t,
                                              });
                                          if (e.months <= 3)
                                              return q.intl.formatToPlainString(q.t.KDV8oD, {
                                                  months: e.months,
                                                  nextBadgeName: t,
                                              });
                                      }
                                  })(g, a) ??
                                  (0, iT.T)(i.id, i.tenureReqNumMonths) ??
                                  void 0));
                let l = null;
                return (
                    null != c ? (l = r || m ? c.standard : c.ambientLarge) : s && (l = i_),
                    {
                        id: t7.TENURE_BADGE_CARD_ID,
                        title: null != i ? q.intl.string(i.nameUnformattedNitro) : s ? q.intl.string(q.t.tx9Fvw) : "",
                        pillText: q.intl.string(q.t["jyYgZ+"]),
                        primaryAsset: l,
                        primaryAssetClassName: u()(iI.pq, { [iI.rX]: r, [iI.kE]: m }),
                        caption: null != n ? q.intl.formatToPlainString(q.t.Hu4jfi, { date: new Date(n) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: d ?? void 0,
                        ctaText: q.intl.string(q.t.jVcuVY),
                        onCtaClick: () => (0, iC.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, c, r, m, n, d, s, g, p, e]);
        })(s),
        { nitroOrbsRewardsCard: m, questOrbMultiplierCard: g } = il("useWhatsNewPerkCards"),
        p =
            ((e = (0, iN.L)(tG.PremiumTypes.TIER_2)),
            (t = (0, s2.rX)()),
            (0, o.useMemo)(
                () =>
                    e && t
                        ? {
                              id: t7.NITRO_FILE_UPLOAD_WHATS_NEW_CARD_ID,
                              title: q.intl.string(iA.default["/cV3ka"]),
                              description: q.intl.string(iA.default.H523FI),
                              primaryAsset: (0, c.jsx)(sB.I, { alt: "", ariaHidden: !0 }),
                          }
                        : null,
                [e, t],
            )),
        h = ig(s);
    return (0, o.useMemo)(() => {
        let e = [
                m,
                g,
                h,
                {
                    id: t7.DISPLAY_NAME_STYLES_CARD_ID,
                    title: q.intl.string(q.t.OLtTrt),
                    description: q.intl.string(q.t["di/pXR"]),
                    onCtaClick: i ? n : a,
                    ctaText: q.intl.string(q.t.jVcuVY),
                    primaryAsset: iv,
                },
                {
                    id: t7.CLIENT_THEMES_CARD_ID,
                    title: q.intl.string(q.t.acc6h6),
                    description: q.intl.formatToPlainString(q.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: iS,
                    ctaText: q.intl.string(q.t.jVcuVY),
                    onCtaClick: () => {
                        (0, ih.nf)(ih.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: t7.PERMADECOS_CARD_ID,
                    title: q.intl.string(q.t.L14NZN),
                    description: q.intl.string(q.t.eCZkAI),
                    primaryAsset: (0, c.jsx)(sJ, { alt: "", ariaHidden: !0 }),
                    ctaText: q.intl.string(q.t.jVcuVY),
                    onCtaClick: i ? n : l,
                },
                {
                    id: t7.CUSTOM_APP_ICONS_CARD_ID,
                    title: q.intl.string(q.t["GU+wqh"]),
                    description: q.intl.string(q.t["1uPk1Z"]),
                    primaryAsset: iP,
                    ctaText: q.intl.string(q.t.y9TxXV),
                    onCtaClick: r,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            s = t ? 5 : 6;
        return (e.splice(+!!t, 0, d), null != p && e.splice(2, 0, p), e.length > s && e.splice(s, e.length - s), e);
    }, [d, m, g, p, h, a, r, l, n, i]);
}
var iD = s(355097);
let iM = "/assets/1eb1b74667b4c0f0.svg",
    iO = "/assets/983b60e4fcaf973b.svg";
var iL =
    (((l = {}).BEST_OF_NITRO = "bestof"),
    (l.APPEARANCE_STYLE = "appearance"),
    (l.UPGRADES = "upgrades"),
    (l.VIP_EXTRAS = "vip"),
    l);
let ik = [
    { id: "bestof", label: () => q.intl.string(q.t.q1u7nQ) },
    { id: "appearance", label: () => q.intl.string(q.t.CUnZkZ) },
    { id: "upgrades", label: () => q.intl.string(q.t.KC5q8v) },
    { id: "vip", label: () => q.intl.string(q.t.DjEAcv) },
];
var iU = s(18290);
function iG(e) {
    e.stopPropagation();
}
function iw(e) {
    let { glowingPerkId: t = null } = e,
        s = (function () {
            let e = (0, sq.DP)(),
                t = (0, s0.X)("useFavoritesPerkCards"),
                s = (0, s3.Lh)(),
                i = (0, s6.N)(s)?.standard ?? null,
                { analyticsLocations: n } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, s$.A)({ scrollPosition: iD._F.TRY_IT_OUT, analyticsLocations: n }),
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
                    (0, S.pX)(eJ.BVt.COLLECTIBLES_SHOP);
                }, []),
                m = (0, o.useCallback)(() => {
                    (0, ed.openUserSettings)(eo.X.SOUNDBOARD_CATEGORY, { analyticsLocations: n });
                }, [n]),
                x = (0, s1.A)({ analyticsLocations: n }),
                g = (0, o.useCallback)(() => {
                    (0, ed.openUserSettings)(eo.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, sQ.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                p = iy(),
                h = (0, o.useMemo)(() => p.map((e) => e?.id), [p]),
                { nitroOrbsRewardsCard: f, questOrbMultiplierCard: N } = il("useFavoritesPerkCards"),
                E = ig(n),
                b = (0, o.useMemo)(
                    () => [
                        {
                            id: t7.SERVER_BOOSTS_CARD_ID,
                            title: q.intl.formatToPlainString(q.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: q.intl.formatToPlainString(q.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: q.intl.string(q.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: (0, c.jsx)(sL, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != E ? { ...E, categories: ["bestof"] } : null,
                        {
                            id: t7.PROFILES_CARD_ID,
                            title: q.intl.string(q.t.xDRab3),
                            description: q.intl.string(q.t.yn6fWA),
                            ctaText: q.intl.string(q.t.jVcuVY),
                            onCtaClick: t ? x : a,
                            primaryAsset: (0, c.jsx)(sk, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: t7.HD_VIDEO_CARD_ID,
                            title: q.intl.string(q.t["/mQ5gg"]),
                            description: q.intl.string(q.t["7WwAXh"]),
                            primaryAsset: (0, c.jsx)(sU, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: t7.CLIENT_THEMES_CARD_ID,
                            title: q.intl.string(q.t.acc6h6),
                            description: q.intl.formatToPlainString(q.t.WQazjs, { themeCount: 20 }),
                            ctaText: q.intl.string(q.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: iS,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: t7.MORE_EMOJIS_CARD_ID,
                            title: q.intl.string(q.t.D8vIDT),
                            description: q.intl.string(q.t.DRMecB),
                            primaryAsset: (0, c.jsx)(sw, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: t7.LARGE_UPLOADS_CARD_ID,
                            title: q.intl.string(q.t.nL1WZV),
                            description: (0, s2.M6)({
                                legacyCopy: q.intl.formatToPlainString(q.t.k8LC1w, { maxSizeMb: 500 }),
                                rolloutCopy: q.intl.formatToPlainString(q.t.teOTfv, {
                                    maxFileSize: (0, ex.EJ)(tG.PremiumTypes.TIER_2, { useSpace: !1 }),
                                }),
                            }),
                            primaryAsset: (0, c.jsx)(sB.I, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: t7.CUSTOM_APP_ICONS_CARD_ID,
                            title: q.intl.string(q.t["GU+wqh"]),
                            description: q.intl.string(q.t["1uPk1Z"]),
                            ctaText: q.intl.string(q.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: iP,
                            categories: ["appearance"],
                        },
                        {
                            id: t7.ENTRANCE_SOUNDS_CARD_ID,
                            title: q.intl.string(q.t.WJfCPi),
                            description: q.intl.string(q.t.liQKJR),
                            ctaText: q.intl.string(q.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: t7.DISPLAY_NAME_STYLES_CARD_ID,
                            title: q.intl.string(q.t.OLtTrt),
                            description: q.intl.string(q.t["di/pXR"]),
                            onCtaClick: t ? x : g,
                            ctaText: q.intl.string(q.t.jVcuVY),
                            primaryAsset: iv,
                            categories: ["appearance"],
                        },
                        {
                            id: t7.CUSTOM_SOUNDS_CARD_ID,
                            title: q.intl.string(q.t["Cu/oFd"]),
                            description: q.intl.string(q.t.czj2aa),
                            primaryAsset: (0, c.jsx)(sH, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: t7.SPECIAL_STICKERS_CARD_ID,
                            title: q.intl.string(q.t.MQoVeb),
                            description: q.intl.string(q.t.HGCLZX),
                            primaryAsset: (0, c.jsx)("div", {
                                className: ia.Uc,
                                children: (0, c.jsx)(sF.n, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: t7.SUPER_REACTIONS_CARD_ID,
                            title: q.intl.string(q.t.qERvAA),
                            description: q.intl.string(q.t.WkUWzx),
                            primaryAsset: (0, c.jsx)(sV, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: t7.VIDEO_BACKGROUNDS_CARD_ID,
                            title: q.intl.string(q.t.ssVDYQ),
                            description: q.intl.string(q.t.aUSRMa),
                            primaryAsset: (0, sZ.M)(e) ? iM : iO,
                            categories: ["upgrades"],
                        },
                        {
                            id: t7.EARLY_ACCESS_CARD_ID,
                            title: q.intl.string(q.t["g/KRY6"]),
                            description: q.intl.string(q.t.JzAmJc),
                            primaryAsset: (0, c.jsx)(sz, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: t7.BADGE_CARD_ID,
                            title: q.intl.string(q.t.Bn3CtB),
                            description: q.intl.string(q.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, c.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, c.jsx)(sY, { color: tr.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: t7.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: q.intl.string(q.t["MTD+7w"]),
                            description: q.intl.string(q.t.Bhs0s6),
                            ctaText: q.intl.string(q.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, c.jsx)(sX, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != f ? { ...f, categories: ["vip"] } : null,
                        null != N ? { ...N, categories: ["vip"] } : null,
                        {
                            id: t7.PERMADECOS_CARD_ID,
                            title: q.intl.string(q.t.L14NZN),
                            description: q.intl.string(q.t.eCZkAI),
                            primaryAsset: (0, c.jsx)(sJ, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, f, N, E, a, l, r, d, u, m, g, x, t],
                );
            return (0, o.useMemo)(() => b.filter((e) => null != e && !h.includes(e.id)), [b, h]);
        })(),
        i = null != t ? s.find((e) => e?.id === t) : null,
        [n, a] = (0, o.useState)(i?.categories[0] ?? iL.BEST_OF_NITRO),
        l = (0, o.useMemo)(() => s.filter((e) => null != e && e.categories.includes(n)), [s, n]);
    return (0, c.jsxs)("div", {
        className: iU.uW,
        children: [
            (0, c.jsx)(K.D, { variant: "nitro-sm", children: q.intl.string(q.t["Uh3+CA"]) }),
            (0, c.jsx)(sD.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: iU.Lq,
                "aria-label": q.intl.string(q.t["Uh3+CA"]),
                children: ik.map((e) =>
                    (0, c.jsx)(sD.V.Item, { id: e.id, className: iU.IC, children: e.label() }, e.id),
                ),
            }),
            (0, c.jsx)(
                sM.A,
                {
                    gap: 20,
                    className: iU.jG,
                    children: l.map((e) => {
                        if (null != e)
                            return (0, c.jsx)(
                                sn.S,
                                { ...e, glowing: t === e.id, containerClassName: iU.Ui, onFocus: iG },
                                e.id,
                            );
                    }),
                },
                n,
            ),
        ],
    });
}
var iB = s(72979);
let iH = function (e) {
    let { className: t } = e,
        s = (0, sq.DP)();
    return (0, c.jsx)("img", {
        className: u()(iB.D, t),
        src: (0, sZ.M)(s) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var iF = s(684251);
let iV = function (e) {
    let { children: t } = e;
    return (0, c.jsxs)("div", {
        className: u()(iF.kL, iF.Gd, iF.Eg),
        children: [(0, c.jsx)(iH, {}), (0, c.jsx)(tq, {}), t],
    });
};
function iz(e) {
    let { glowingPerkId: t = null } = e,
        s = iy();
    return (0, c.jsx)(so, {
        sectionClassName: sc.uW,
        heading: (0, c.jsx)(K.D, { variant: "nitro-sm", className: sc.R_, children: q.intl.string(q.t.Aw5DRm) }),
        grid: (0, c.jsx)(c.Fragment, {
            children: s.map((e, s) => {
                if (null == e) return;
                let i = 0 === s && !0 === e.featured,
                    n = t === e.id;
                return (0, c.jsx)(
                    sn.S,
                    {
                        ...e,
                        glowing: n,
                        autoClickCta: n && e.id === t7.YOUTUBE_3PP_CARD_ID,
                        featured: i,
                        containerClassName: u()(sc.Nr, { [sc.Nq]: i }),
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
                T(!0);
            }, []),
            (0, W.j)(),
            (0, v.P)(_));
        let i = o.useRef(null),
            n = o.useRef(null),
            a = (0, x.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            { isReady: l, programReward: r } = (0, H.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: d,
                glowingSectionId: h,
                glowingPerkId: f,
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
        let [b, T] = o.useState(!1),
            R = (0, z.p)(),
            C = o.useRef(null),
            [I, P] = o.useState(!1),
            S = null != R && null != a && a.status === eJ.Dmq.CANCELED,
            y = (0, Y.iU)(tG.gD.PREMIUM_MONTH_TIER_2, R, a),
            D = !I && S,
            M = (0, x.bG)([F.A], () => (null != t ? F.A.getUserProfile(t) : null)),
            { analyticsLocations: k } = (0, j.Ay)(A.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [U, X] = o.useState(!1);
        return null != M && (l || null != r)
            ? (0, c.jsxs)(w.Gt, {
                  className: u()(iF.xW, iF.Gd),
                  ref: i,
                  children: [
                      (0, c.jsx)(iV, {
                          children: (0, c.jsxs)(j.f5, {
                              value: k,
                              children: [
                                  (0, c.jsx)(G.L, {
                                      innerRef: C,
                                      onChange: (e) => P(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, c.jsx)(tz, {
                                          buttonVisibilityRef: C,
                                          className: iF.v1,
                                          userDiscountOffer: R,
                                          discountedPrice: y,
                                      }),
                                  }),
                                  (0, c.jsx)(iz, { glowingPerkId: f }),
                                  (0, c.jsx)(sv, { glowingPerkId: f, glowingSectionId: h }),
                                  (0, c.jsx)(iw, { glowingPerkId: f }),
                                  (0, c.jsx)($, {
                                      className: iF.Zy,
                                      location: A.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: eJ.liQ.NITRO_HOME, section: eJ.JJy.GIFT_BANNER },
                                  }),
                                  (0, c.jsx)("div", { className: iF.hz }),
                                  (0, c.jsx)(G.L, {
                                      innerRef: n,
                                      onChange: (e) => {
                                          e &&
                                              !U &&
                                              (L.default.track(eJ.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: k,
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
                                      alt: q.intl.string(q.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      S &&
                          null != y &&
                          (0, c.jsx)(sy, {
                              isVisible: D && b,
                              premiumSubscription: a,
                              churnDiscountOffer: R,
                              discountedPrice: y,
                          }),
                  ],
              })
            : (0, c.jsxs)("div", {
                  className: u()(iF.kL, iF.Lq, iF.TN, iF.Eg),
                  children: [(0, c.jsx)(tq, {}), (0, c.jsx)("div", { className: iF.S, children: (0, c.jsx)(g.y, {}) })],
              });
    };
var iJ = s(286320),
    iZ = s(727949),
    iq = s(440005),
    iQ = s(26508);
let i$ = (0, iE.mj)({
    name: "2026-07-plan-select-ui-redesign",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var i0 = s(297346);
let i1 =
    "https://cdn.discordapp.com/assets/content/3aa94cb4beecb43100d482e94a5a707f188e2e2315d9b15865689b51409c4d56.png";
function i2(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: l },
        src: i1,
        srcSet: `${i1} 1x, https://cdn.discordapp.com/assets/content/e33cdb99c455ad732bab8cc40ca15b8bf926a7e9e078cd8834edfd15e4010217.png 2x`,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var i3 = s(37537),
    i6 = s(783420),
    i7 = s(204413),
    i5 = s(245383),
    i8 = s(824069),
    i9 = s(785007),
    i4 = s(947910);
function ne(e) {
    let { value: t, planRadioOptions: s, ...i } = e,
        n = s.map((e) => {
            let s = e.value === t;
            return {
                name: (0, c.jsxs)("div", {
                    className: i4.VH,
                    children: [
                        s &&
                            null != e.badgeText &&
                            (0, c.jsx)("div", {
                                className: i4.fQ,
                                children: (0, c.jsx)(eV.E, { type: { text: e.badgeText }, variant: "brand" }),
                            }),
                        (0, c.jsxs)(ei.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: i4.qU,
                            children: [
                                (0, c.jsxs)(ei.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: i4.NI,
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
                                (0, c.jsxs)(ei.B, {
                                    direction: "vertical",
                                    align: "end",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: i4.br,
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
                                                className: i4.yD,
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
                radioBarClassName: u()(i4.tG, { [i4.uA]: s, [i4.hy]: s && e.useGradientSelectedBorder }),
            };
        });
    return (0, c.jsx)(i9.$d, {
        ...i,
        options: n,
        value: t,
        size: i9.r9.NOT_SET,
        className: i4.ul,
        withTransparentBackground: !0,
    });
}
var nt = s(118751),
    ns = s(773669),
    ni = s(97352),
    nn = s(526292),
    na = s(186223),
    nl = s(369827),
    nr = s(803496);
function nc(e) {
    let t = (0, x.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        s = (0, nl.L)(),
        i = t?.paymentSourceId ?? s,
        { priceOptions: n } = (0, nr.A)({
            activeSubscription: t,
            skuIDs: [(0, ex.mH)(e)],
            paymentSourceId: i,
            isGift: !1,
        });
    return n;
}
function no(e, t, s, i, n) {
    return t && s?.includes(e) === !0 && null != i && null != n && i !== n;
}
function nd(e) {
    let { expectedUsageInterval: t, usageInterval: s, discountDuration: i, regularPrice: n, discountedPrice: a } = e;
    return s !== t || null == n || null == a
        ? null
        : t === tG.Ff.YEAR
          ? q.intl.format(q.t.G88D2T, { discountedPrice: a, numYears: i, regularPrice: n })
          : q.intl.format(q.t["x+qUAi"], { discountedPrice: a, numMonths: i, regularPrice: n });
}
var nu = s(614488);
function nm(e) {
    let { skuId: t, selectedPlanId: s, subscribeButtonProps: i } = e,
        n = null == s || !0 === i.disabled,
        a = null == s ? "secondary" : i.variant;
    return (0, c.jsx)(i6.A, {
        subscriptionTier: t,
        initialPlanId: s,
        shouldDisallowPlanSelection: !0,
        children: (e) => {
            let { onClick: t } = e;
            return (0, c.jsx)(ea.$, {
                size: "md",
                fullWidth: !0,
                icon: en.t,
                text: i.text,
                variant: a,
                disabled: n,
                onClick: t,
            });
        },
    });
}
function nx(e) {
    let { skuId: t, className: s } = e,
        i = t === tG.pe.TIER_2,
        n = (0, sZ.q)((0, sq.Ay)()),
        a = (0, i3.c)("PlanSelectCard"),
        l = (0, ef.V)(),
        r = l?.subscriptionTrial,
        d = r?.skuId === t,
        m = i && d && null != r,
        g = (0, eh.p)(),
        {
            planRadioOptions: p,
            selectedPlanId: h,
            setSelectedPlanId: f,
            shouldSuppressDiscountCta: N,
        } = (function (e) {
            let { skuId: t } = e,
                [s, i] = o.useState(null),
                n = tG.En[t],
                a = tG.zE[t],
                l = t === tG.pe.TIER_2,
                r = nc(t),
                c = (0, ef.V)(),
                d = c?.subscriptionTrial?.skuId === t,
                { subscribedSkuId: u, isMonthlyPlanDisabled: m } = (0, x.cf)(
                    [O.A],
                    () => {
                        let e = O.A.getPremiumTypeSubscription();
                        return {
                            subscribedSkuId: (0, ex.aZ)(e),
                            isMonthlyPlanDisabled:
                                n === tG.gD.PREMIUM_MONTH_TIER_2 &&
                                null != e &&
                                [tG.gD.PREMIUM_YEAR_TIER_0, tG.gD.PREMIUM_YEAR_TIER_1].includes(e.planId),
                        };
                    },
                    [n],
                ),
                g = u === t,
                p = (0, eh.O)(),
                h = (0, nn.k5)(),
                f = (0, x.bG)([ns.default], () => ns.default.locale),
                N = (0, Y.U9)(p, t),
                A = (0, Y.N1)(n),
                j = (0, Y.N1)(a),
                [E, b] = (0, x.yK)([ni.A], () => [ni.A.get(n), ni.A.get(a)], [n, a]),
                T = null != E ? (0, ex.sS)(E, r) : null,
                R = null != b ? (0, ex.sS)(b, r) : null,
                C =
                    N && p?.discount.amount != null && !h
                        ? q.intl.formatToPlainString(q.t.IAybsG, {
                              discount: (0, nt.l9)(f, Number(p.discount.amount) / 100),
                          })
                        : null,
                I = p?.discount?.planIds,
                _ = no(a, N, I, j, R),
                v = no(n, N, I, A, T),
                P = p?.discount.userUsageLimitInterval,
                S = p?.discount.userUsageLimit ?? tG.OJ,
                y = !l || _ || v || null == b ? null : (0, na.Cj)(b, !1, r),
                D = !v || m,
                M = (function (e) {
                    let { skuId: t, monthlyHasDiscount: s, isMonthlyPlanDisabled: i } = e;
                    return t !== tG.pe.TIER_2 ? null : s && !i ? tG.En[t] : tG.zE[t];
                })({ skuId: t, monthlyHasDiscount: v, isMonthlyPlanDisabled: m }),
                L = null == s || (s === n && m) ? M : s,
                k = [
                    {
                        value: a,
                        primaryText: q.intl.string(q.t["/Q4HRN"]),
                        primarySubText:
                            (_
                                ? nd({
                                      expectedUsageInterval: tG.Ff.YEAR,
                                      usageInterval: P,
                                      discountDuration: S,
                                      regularPrice: R,
                                      discountedPrice: j,
                                  })
                                : null) ?? y,
                        secondaryText: _ ? j : R,
                        secondarySubText: _ ? R : null,
                        badgeText: _ ? C : null,
                        useGradientSelectedBorder: l && (d || _ || D),
                        isDisabled: g,
                    },
                    {
                        value: n,
                        primaryText: q.intl.string(q.t.DKzs96),
                        primarySubText: v
                            ? nd({
                                  expectedUsageInterval: tG.Ff.MONTH,
                                  usageInterval: P,
                                  discountDuration: S,
                                  regularPrice: T,
                                  discountedPrice: A,
                              })
                            : null,
                        secondaryText: v ? A : T,
                        secondarySubText: v ? T : null,
                        badgeText: v ? C : null,
                        useGradientSelectedBorder: l && (d || v),
                        isDisabled: g || m,
                    },
                ],
                U = L === a ? _ : L === n && v;
            return { planRadioOptions: k, selectedPlanId: L, setSelectedPlanId: i, shouldSuppressDiscountCta: N && !U };
        })({ skuId: t }),
        A = i && null == g ? "expressive" : "secondary",
        { buttonText: j } = (0, i5.A)({ subscriptionTier: t }),
        { subscribeButtonProps: E } = (0, i7.$)({
            subscriptionTier: t,
            variantOverride: A,
            buttonTextOverride: N ? j : void 0,
        }),
        b = (0, c.jsxs)(ei.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nu.Ux,
            children: [
                (0, c.jsx)(ei.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nu.MY,
                    children: (0, c.jsx)(K.D, {
                        variant: a ? "nitro-md" : "display-md",
                        color: n ? "text-strong" : "text-overlay-light",
                        className: a ? nu.ck : nu.JJ,
                        children: i ? q.intl.string(q.t.lG6a5x) : q.intl.string(q.t["t9uG/o"]),
                    }),
                }),
                (0, c.jsx)(ei.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nu.qT,
                    children: i
                        ? (0, c.jsx)(i0.ZP, {
                              featureSet: i0.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: "text-md/medium",
                          })
                        : (0, c.jsx)(i0.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: "text-md/medium",
                          }),
                }),
                i && (0, c.jsx)(i8.K, {}),
                m
                    ? (0, c.jsx)("div", {
                          className: nu.qS,
                          role: "separator",
                          children: (0, c.jsx)(J.E, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              className: nu.ZV,
                              children: (function (e, t) {
                                  if (null == e || null == t) return null;
                                  switch (e) {
                                      case tG.WT.DAY:
                                          if (t % 7 == 0) return q.intl.format(q.t["1MYPH0"], { weeks: t / 7 });
                                          return q.intl.format(q.t.pYfIoO, { days: t });
                                      case tG.WT.MONTH:
                                          return q.intl.format(q.t["96hTLe"], { months: t });
                                      case tG.WT.YEAR:
                                          return q.intl.format(q.t.B0ZmdG, { years: t });
                                      default:
                                          return null;
                                  }
                              })(r.interval, r.intervalCount),
                          }),
                      })
                    : (0, c.jsx)("hr", { className: nu.yF }),
                (0, c.jsxs)("div", {
                    className: nu.qr,
                    children: [
                        (0, c.jsx)(ne, { planRadioOptions: p, value: h ?? "", onChange: (e) => f(e.value) }),
                        (0, c.jsx)(nm, { skuId: t, selectedPlanId: h, subscribeButtonProps: E }),
                    ],
                }),
            ],
        }),
        T = u()(nu.Nr, s, { [nu.Fw]: i });
    return i
        ? (0, c.jsxs)(X.h, {
              color: "nitro-pink",
              className: T,
              children: [
                  (0, c.jsx)("div", {
                      className: nu.kX,
                      "aria-hidden": !0,
                      children: (0, c.jsx)(i2, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                  }),
                  b,
              ],
          })
        : (0, c.jsx)("div", { className: T, children: b });
}
function ng(e) {
    let { className: t } = e,
        s = (0, sZ.q)((0, sq.Ay)()),
        i = (0, i3.c)("PlanSelectPremiumGroupCard"),
        n = (0, eh.p)(),
        a = null != n,
        l = nc(tG.pe.TIER_2),
        r = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        { avatarSrc: o, eventHandlers: d } = (0, ek.A)({ userId: r?.id, size: eD._3.SIZE_32, animateOnHover: !0 }),
        m = (0, x.bG)([ni.A], () => ni.A.get(tG.gD.PREMIUM_GROUP_MONTH)),
        p = (0, Y.N1)(tG.gD.PREMIUM_GROUP_MONTH),
        h = a
            ? q.intl.format(iu.default["7j70dP"], {
                  percent: n.discount?.amount,
                  premiumGroupProductName: (0, id.DP)(),
              })
            : q.intl.string(q.t["2pG5Ga"]),
        f = (0, c.jsx)(i6.A, {
            subscriptionTier: tG.pe.TIER_2,
            initialPlanId: tG.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, c.jsx)(ea.$, {
                    size: "md",
                    fullWidth: !0,
                    icon: en.t,
                    text: h,
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
        className: u()(nu.Nr, t),
        children: (0, c.jsxs)(ei.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nu.Ux,
            children: [
                (0, c.jsxs)(ei.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nu.MY,
                    children: [
                        (0, c.jsx)(K.D, {
                            variant: i ? "nitro-md" : "display-md",
                            color: s ? "text-strong" : "text-overlay-light",
                            className: i ? nu.ck : nu.JJ,
                            children: q.intl.string(iu.default.eSKiXk),
                        }),
                        null != r &&
                            (0, c.jsxs)(ei.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: nu.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: nu.uA,
                                        children: (0, c.jsx)(eM.eu, {
                                            src: o,
                                            size: eD._3.SIZE_32,
                                            "aria-hidden": !0,
                                            ...d,
                                        }),
                                    }),
                                    (0, c.jsx)(ei.B, {
                                        direction: "horizontal",
                                        align: "center",
                                        justify: "center",
                                        gap: 0,
                                        fullWidth: !1,
                                        className: nu.VL,
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
                (0, c.jsx)(ei.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nu.qT,
                    children: (0, c.jsx)(i0.Lg, { isApplicationHome: !0, textVariant: "text-md/medium" }),
                }),
                (0, c.jsx)("hr", { className: nu.yF }),
                (0, c.jsxs)("div", {
                    className: nu.qr,
                    children: [
                        (0, c.jsxs)("div", {
                            className: nu.ec,
                            children: [
                                (0, c.jsx)(J.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: q.intl.string(iu.default.SvSwga),
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
                        f,
                    ],
                }),
            ],
        }),
    });
}
function np(e) {
    let { innerRef: t, className: s } = e,
        { analyticsLocations: i } = (0, j.Ay)(A.A.PREMIUM_MARKETING_TIER_CARD),
        n = (0, i0.pw)(t),
        a = (0, io.PA)(),
        l = (0, x.bG)([el.Ay], () => el.Ay.useReducedMotion),
        r = { [nu.iR]: !l };
    return (0, c.jsx)(j.f5, {
        value: i,
        children: (0, c.jsxs)(ei.B, {
            direction: "vertical",
            align: "center",
            gap: 32,
            fullWidth: !0,
            className: u()(nu.oB, s),
            children: [
                (0, c.jsx)(K.D, {
                    variant: "nitro-md",
                    color: "text-strong",
                    className: nu.op,
                    children: q.intl.string(q.t.vLz3Zs),
                }),
                (0, c.jsxs)("div", {
                    ref: n,
                    className: u()(nu.kR, { [nu.BQ]: a }),
                    children: [
                        (0, c.jsx)(nx, { skuId: tG.pe.TIER_0, className: u()(nu.rz, r) }),
                        (0, c.jsx)(nx, { skuId: tG.pe.TIER_2, className: u()(nu.Rv, r) }),
                        a && (0, c.jsx)(ng, { className: u()(nu.zz, r) }),
                    ],
                }),
            ],
        }),
    });
}
var nh = s(735668),
    nf = s(366010),
    nN = s(303136);
let nA = function (e) {
    let t,
        { className: s } = e,
        i = (0, tf.TM)(),
        n = (0, nf.q)((0, sq.Ay)());
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
                nN.A,
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
var nj =
        (((r = {}).HOME = "home"),
        (r.WHATS_NEW = "whatsNew"),
        (r.BEST_OF_NITRO = "bestOfNitro"),
        (r.PLANS = "plans"),
        (r.COMPARE = "compare"),
        r),
    nE = s(352756);
let nb = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i } = e,
        n = (0, tA.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        a = { section: eJ.JJy.MARKETING_FLOATING_CTA };
    return (0, c.jsx)(tN.animated.div, {
        className: nE.i,
        style: n,
        "data-mtctest-ignore": "true",
        children: (0, c.jsxs)("div", {
            className: nE.U,
            children: [
                (0, c.jsx)(eC.A, {
                    size: "md",
                    subscriptionTier: s,
                    hasActivePromotion: !!i,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: a,
                }),
                (0, c.jsx)(Z.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var nT = s(573710);
let nR = function () {
    let e = (0, th.bG)([el.Ay], () => el.Ay.useReducedMotion);
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)("div", {
                className: nT.BI,
                children: (0, c.jsx)(tT, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: tE.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, c.jsx)("img", {
                        src: "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
                        alt: "",
                        className: nT.Q,
                    }),
                }),
            }),
            (0, c.jsx)(tC, {
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
let nI = o.forwardRef((e, t) => {
    let { analyticsLocations: s } = (0, j.Ay)(A.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, c.jsx)(j.f5, {
        value: s,
        children: (0, c.jsx)("div", {
            ref: t,
            className: nC.kL,
            children: (0, c.jsxs)("div", {
                className: nC.hQ,
                children: [
                    (0, c.jsx)(nR, {}),
                    (0, c.jsx)(K.D, {
                        variant: "nitro-md",
                        color: "text-strong",
                        className: nC.RH,
                        children: q.intl.string(q.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
});
nI.displayName = "PremiumMarketingFooter";
var n_ = s(939249);
let nv = function (e) {
    let { navBarSections: t, activeSectionId: s } = e,
        i = {
            [nj.HOME]: q.intl.string(q.t.uGRXjS),
            [nj.WHATS_NEW]: q.intl.string(q.t["mfcR/v"]),
            [nj.BEST_OF_NITRO]: q.intl.string(q.t.xQKkE8),
            [nj.PLANS]: q.intl.string(q.t.wyNMnm),
            [nj.COMPARE]: q.intl.string(q.t.pwD7If),
        },
        n = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        a = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, c.jsx)(tY.A, {
        className: tJ.TQ,
        transparent: !0,
        children: (0, c.jsxs)("div", {
            className: tJ.Wc,
            children: [
                (0, c.jsxs)("div", {
                    className: tJ.wG,
                    children: [
                        (0, c.jsx)(en.t, { className: tJ.nE, colorClass: tJ.oG }),
                        (0, c.jsx)("div", {
                            className: tJ.zc,
                            role: "tablist",
                            "aria-label": q.intl.string(q.t.O9MiXY),
                            children: a.map((e) => {
                                let t = s === e.id,
                                    n = i[e.id];
                                return (0, c.jsxs)(
                                    n_.D,
                                    {
                                        role: "tab",
                                        "aria-selected": t,
                                        className: tJ.S0,
                                        onClick: e.scrollToSection,
                                        children: [
                                            (0, c.jsx)(J.E, {
                                                variant: "text-sm/medium",
                                                color: "text-strong",
                                                children: n,
                                            }),
                                            t && (0, c.jsx)("div", { className: tJ.W0 }),
                                        ],
                                    },
                                    n,
                                );
                            }),
                        }),
                    ],
                }),
                (0, c.jsxs)("div", {
                    className: tJ.MQ,
                    children: [
                        null != n && (0, c.jsx)(tK.l, { size: "sm", location: A.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                        (0, c.jsx)(Z.A, { size: "sm", variant: "overlay-secondary" }),
                    ],
                }),
            ],
        }),
    });
};
var nP = s(704333),
    nS = s(414499),
    ny = s(597770),
    nD = s(500060),
    nM = s(866665),
    nO = s(406860),
    nL = s(870975),
    nk = s(698834);
function nU() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, nO.A)({ boxType: t8.$, thirdPartyPartner: "xbox" }),
        s = [
            { icon: nP.B, text: q.intl.string(se.default.MUypiB) },
            { icon: nS.h, text: q.intl.string(se.default.ec5Rdd) },
            { icon: ny.GiftIcon, text: q.intl.string(se.default["9t2CzW"]), tooltip: se.default.AyECej },
            { icon: nD.o, text: q.intl.string(se.default.R7YJAY) },
        ];
    return (0, c.jsx)(G.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, c.jsx)("div", {
            ref: e,
            className: nk.iE,
            children: (0, c.jsxs)("div", {
                className: nk.Nr,
                children: [
                    (0, c.jsxs)("div", {
                        className: nk.j,
                        children: [
                            (0, c.jsx)("div", { className: nk._g }),
                            (0, c.jsx)("div", { className: nk.$h }),
                            (0, c.jsx)("div", { className: nk.Rv }),
                            (0, c.jsx)("div", { className: nk.Lw }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: nk.CT,
                        children: [
                            (0, c.jsxs)("div", {
                                className: nk.Qs,
                                children: [
                                    (0, c.jsxs)("div", {
                                        children: [
                                            (0, c.jsx)(K.D, {
                                                variant: "heading-xxl/bold",
                                                color: "text-strong",
                                                className: nk.R_,
                                                children: q.intl.string(se.default.rkt1aw),
                                            }),
                                            (0, c.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, c.jsxs)(
                                                            "div",
                                                            {
                                                                className: nk.yf,
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
                                                                            className: nk.Jn,
                                                                            children: (0, c.jsx)(nM.m, {
                                                                                text: q.intl.string(i),
                                                                                position: "top",
                                                                                children: (0, c.jsx)(
                                                                                    t0.CircleInformationIcon,
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
                                                        className: nk.xF,
                                                        children: (0, c.jsx)(eC.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: tG.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: nk.WE,
                                        children: (0, c.jsx)(J.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: q.intl.format(se.default.KDKdWi, { termsLink: (0, nL.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, c.jsx)("div", {
                                className: nk.r1,
                                children: (0, c.jsx)("img", {
                                    className: nk.wm,
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
    nw = s(173038),
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
        let t = (0, tQ.b)("premium_marketing_bento"),
            { whatsNewBoxes: s } = (0, nw.Ay)(t);
        return (0, c.jsx)(nH, {
            boxLayout: s,
            title: q.intl.string(q.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: t ? (0, c.jsx)(nU, {}) : null,
            ...e,
        });
    }),
    nV = o.memo(function (e) {
        let { bestOfBoxes: t } = (0, nw.Ay)();
        return (0, c.jsx)(nH, { boxLayout: t, title: q.intl.string(q.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    nz = (0, iE.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var nW = s(236834),
    nY = s(540504);
function nX(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, ek.A)({ userId: t?.id, size: eD._3.SIZE_24, animateOnHover: !0 });
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
                    children: q.intl.format(q.t.IqxblS, { username: null != t.globalName ? t.globalName : t.username }),
                }),
            ],
        }),
    });
}
var nK = s(579245),
    nJ = s(369805);
let nZ = function () {
    let e = (0, nJ.A)(void 0, { includesPremiumGroup: !0 });
    return null == e ? null : (0, c.jsx)(eb, { text: e });
};
function nq() {
    let e = (0, x.bG)([ni.A], () => ni.A.getForSkuAndInterval((0, ex.mH)(tG.pe.TIER_0), tG.WT.MONTH));
    return null != e ? (0, ex.sS)(e) : "\u2026";
}
var nQ = s(508556);
let n$ = function (e) {
    let { containerVisibilityPercentage: t } = e,
        s = (0, th.bG)([el.Ay], () => el.Ay.useReducedMotion),
        i = (0, tf.TM)();
    return (0, c.jsxs)("div", {
        "aria-hidden": !0,
        className: nQ.YU,
        children: [
            (0, c.jsx)(t_, {
                supportHEVCAlpha: i,
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                containerClassName: nQ.wG,
                assetClassName: nQ.lu,
            }),
            (0, c.jsx)(tC, {
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                boltContainerClassName: nQ.nJ,
                carContainerClassName: nQ.IN,
                hammerContainerClassName: nQ.Gj,
                keyContainerClassName: nQ.FV,
                starContainerClassName: nQ.E1,
                boltAssetClassName: nQ.j7,
                carAssetClassName: nQ.or,
                hammerAssetClassName: nQ.Wv,
                keyAssetClassName: nQ.rs,
                starAssetClassName: nQ.OY,
            }),
        ],
    });
};
var n0 = s(14057);
let n1 = o.memo(
    o.forwardRef(function (e, t) {
        let { className: s, subscriptionTier: i, isEligibleForBogoPromotion: n } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            l = nq(),
            r = nz.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
            o = (0, nW.A)(),
            d = null != o,
            { visibilityPercentageRef: m, visibilityPercentage: g } = ej(
                !(0, x.bG)([el.Ay], () => el.Ay.useReducedMotion),
            ),
            p = (0, iJ.b)(),
            h = !d && p.length > 0,
            f = (0, eN.c)(ee.C.MARKETING_PAGE_BANNER),
            N = null != f && "marketingPageBanner" === f.properties.properties.oneofKind,
            E = (0, nn.ar)() && !N,
            b = (0, eh.O)(),
            T = (null != b && tG.U4.includes(b.discountId)) || N;
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsx)("div", {
                ref: t,
                className: u()(n0.kL, s),
                "data-testid": "marketing-page-hero-header",
                children: (0, c.jsx)("div", {
                    ref: m,
                    children: (0, c.jsxs)("div", {
                        className: n0.hQ,
                        children: [
                            (0, c.jsx)(n$, { containerVisibilityPercentage: g }),
                            E && (0, c.jsx)(nZ, {}),
                            (0, c.jsx)("div", {
                                className: n0.s8,
                                children: (0, c.jsx)(eB.F, {
                                    forceLevel: 1,
                                    children: (0, c.jsx)(K.D, {
                                        variant: "nitro-md",
                                        color: "text-strong",
                                        className: n0.wx,
                                        children: q.intl.string(q.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, c.jsxs)("div", {
                                className: n0.rf,
                                children: [
                                    d &&
                                        (0, c.jsx)("div", {
                                            className: n0.eZ,
                                            children: (0, c.jsx)(nX, { referrer: o }),
                                        }),
                                    h &&
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
                                            (0, c.jsx)(eC.A, {
                                                size: "md",
                                                fullWidth: E,
                                                hasActivePromotion: !!n,
                                                subscriptionTier: T && null == i ? tG.pe.NONE : i,
                                                buttonTextOverride: T ? q.intl.string(q.t["2pG5Ga"]) : void 0,
                                            }),
                                            !E && (0, c.jsx)(Z.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: n0.iQ,
                                        children: (0, c.jsx)(J.E, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: r
                                                ? q.intl.string(q.t.jHqrJW)
                                                : q.intl.format(q.t.kt9wxs, { cheapestMonthlyPrice: l }),
                                        }),
                                    }),
                                    null != f &&
                                        "marketingPageBanner" === f.properties.properties.oneofKind &&
                                        (0, c.jsx)(eT.x, {
                                            componentId: f.id,
                                            promotionId: f.promotionId,
                                            promotionBannerMarketingComponentFields:
                                                f.properties.properties.marketingPageBanner,
                                        }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
        });
    }),
);
var n2 = s(820081),
    n3 = s(140735),
    n6 = s(401432),
    n7 = s(580630),
    n5 = s(795269),
    n8 = s(84483),
    n9 = s(701974),
    n4 = s(55647),
    ae = s(202600);
function at(e) {
    let { includes: t } = e;
    return t
        ? (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(n2.B, { size: "sm", color: tr.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(n3.A, { children: q.intl.string(q.t["tq+6t/"]) }),
              ],
          })
        : (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(n6.a, { size: "xs", color: tr.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(n3.A, { children: q.intl.string(q.t.l4qZrp) }),
              ],
          });
}
function as(e) {
    let { label: t, tier0ColumnData: s, tier2ColumnData: i } = e;
    return (0, c.jsxs)("tr", {
        className: u()(n4.nM, n4.WQ),
        children: [
            (0, c.jsx)("th", {
                scope: "row",
                className: n4.nx,
                children: (0, c.jsx)(J.E, { variant: "text-md/medium", children: t }),
            }),
            (0, c.jsx)("td", {
                className: n4.Hn,
                children:
                    null != s.text
                        ? (0, c.jsx)(J.E, { variant: "text-md/medium", children: s.text })
                        : (0, c.jsx)(at, { includes: !!s.includes }),
            }),
            (0, c.jsx)("td", {
                className: n4.Hn,
                children:
                    null != i.text
                        ? (0, c.jsx)(J.E, { variant: "text-md/medium", children: i.text })
                        : (0, c.jsx)(at, { includes: !!i.includes }),
            }),
        ],
    });
}
function ai(e) {
    let { title: t, subtitle: s, rows: i } = e;
    return (0, c.jsxs)("tbody", {
        children: [
            (0, c.jsx)("tr", {
                className: u()(n4.nM, n4.Gf),
                children: (0, c.jsxs)("td", {
                    className: n4.nx,
                    colSpan: 3,
                    children: [
                        (0, c.jsx)(K.D, { variant: "heading-lg/bold", children: t }),
                        null != s && (0, c.jsx)(J.E, { variant: "text-xs/medium", children: s }),
                    ],
                }),
            }),
            i.map((e) => (0, c.jsx)(as, { ...e }, e.id)),
        ],
    });
}
function an(e) {
    let { premiumType: t, priceString: s } = e,
        i = t === tG.PremiumTypes.TIER_0 ? q.intl.string(q.t.tUbSDK) : q.intl.string(q.t.Ipxkog);
    return (0, c.jsxs)("div", {
        className: n4.nn,
        children: [
            (0, c.jsxs)("div", {
                className: n4.KS,
                children: [
                    (0, c.jsx)(en.t, { colorClass: n4.oG }),
                    (0, c.jsx)(K.D, { variant: "heading-sm/semibold", children: i }),
                ],
            }),
            (0, c.jsx)(K.D, { variant: "heading-sm/semibold", children: s }),
        ],
    });
}
function aa(e) {
    let { tier0Price: t, tier2Price: s, shouldUseDiscountPrice: i, tier2DiscountedPriceString: n } = e,
        a = i ? n : (0, n7.$g)(s.amount, s.currency);
    return (0, c.jsx)("thead", {
        children: (0, c.jsxs)("tr", {
            className: n4.U1,
            children: [
                (0, c.jsx)("th", {
                    scope: "col",
                    className: n4.Cr,
                    children: (0, c.jsx)(K.D, { variant: "heading-xl/bold", children: q.intl.string(q.t.ED4UVD) }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: n4.Hn,
                    children: (0, c.jsx)(an, {
                        premiumType: tG.PremiumTypes.TIER_0,
                        priceString: (0, n7.$g)(t.amount, t.currency),
                    }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: n4.Hn,
                    children: (0, c.jsx)(an, { premiumType: tG.PremiumTypes.TIER_2, priceString: a }),
                }),
            ],
        }),
    });
}
let al = function (e) {
        let t,
            { className: s, hidePill: i = !1, selectedPlanTier: n = tG.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            l = (0, ef.V)(),
            r = l?.subscriptionTrial?.skuId,
            d = (0, eh.O)(),
            m = (0, Y.YJ)(d),
            x = null != d && (0, Y.U9)(d, tG.pe.TIER_2) && m === tG.gD.PREMIUM_MONTH_TIER_2,
            g = (0, Y.N1)(m),
            p = null != g ? `${g}/${(0, ex.FJ)(tG.WT.MONTH)}` : "",
            h = (0, ex.JM)(tG.gD.PREMIUM_MONTH_TIER_0),
            f = (0, ex.JM)(tG.gD.PREMIUM_MONTH_TIER_2),
            N = (function () {
                let e = (0, tQ.b)("premium_marketing_comparison"),
                    t = [
                        {
                            id: 10,
                            label: q.intl.string(q.t["svn/YX"]),
                            tier0ColumnData: { includes: !0 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 7,
                            label: q.intl.string(q.t.ID5B6Z),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 13,
                            label: q.intl.string(q.t["PBUrx/"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 22,
                            label: q.intl.string(n9.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    s = null,
                    i = [],
                    { shouldShowBonusOrbsUX: n, multiplier: a } = (0, s5.lk)(ii.rE.NITRO_HOME_MARKETING),
                    { enabled: l } = sp.A.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: r } = (0, sh.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    }),
                    { isInTreatment: c } = (0, n8.uX)("premium_marketing_comparison");
                return (
                    e &&
                        ((s = {
                            id: 23,
                            title: q.intl.string(q.t.NG1e6l),
                            subtitle: q.intl.format(se.default.uJcbMv, {
                                termsLink: em.A.getArticleURL(eJ.MVz.NITRO_2_POINT_0),
                            }),
                            rows: [
                                {
                                    id: 24,
                                    label: q.intl.string(se.default.OpOEmk),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        }),
                        l &&
                            s.rows.push({
                                id: 25,
                                label: q.intl.string(se.default.Q0A42h),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        r &&
                            s.rows.push({
                                id: 26,
                                label: q.intl.string(sb.default["gc2sa/"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        n &&
                            i.push({
                                id: 27,
                                label: q.intl.formatToPlainString(q.t.Uhemob, { bonusOrbMultiplier: a }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        c &&
                            i.push({
                                id: 28,
                                label: q.intl.string(ie.default["20tmSN"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            })),
                    [
                        ...(null != s ? [s] : []),
                        { id: 17, title: q.intl.string(q.t.Ij3Zmv), rows: t },
                        {
                            id: 18,
                            title: q.intl.string(q.t.Wme3nX),
                            rows: [
                                {
                                    id: 0,
                                    label: q.intl.string(q.t.LrUABv),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 1,
                                    label: q.intl.string(q.t.DmfiwT),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 2,
                                    label: q.intl.string(q.t.Uukj4o),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 12,
                                    label: q.intl.string(q.t.NIKDqG),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 9,
                                    label: q.intl.string(q.t["5OAKhw"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        },
                        {
                            id: 19,
                            title: q.intl.string(q.t["6b3ydG"]),
                            rows: [
                                {
                                    id: 4,
                                    label: q.intl.string(q.t["ufhQC+"]),
                                    tier0ColumnData: { text: (0, ex.EJ)(tG.PremiumTypes.TIER_0) },
                                    tier2ColumnData: { text: (0, ex.EJ)(tG.PremiumTypes.TIER_2) },
                                },
                                {
                                    id: 11,
                                    label: q.intl.string(q.t.qQxxVc),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 3,
                                    label: q.intl.string(q.t["9kRJS8"]),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 21,
                                    label: q.intl.string(q.t["5BJqNF"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 5,
                                    label: q.intl.string(q.t.VwxlMw),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 6,
                                    label: q.intl.formatToPlainString(q.t.nyhDpw, {
                                        numBoosts: tG.M4,
                                        percentageOff: (0, n7.l9)(ns.default.locale, tG.oX / 100),
                                    }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 16,
                                    label: q.intl.string(q.t["93xPy3"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 8,
                                    label: q.intl.string(q.t.IzrZHz),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 20,
                                    label: q.intl.string(q.t.Rj1Qys),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                ...i,
                                {
                                    id: 15,
                                    label: q.intl.formatToPlainString(q.t["8crdzJ"], { maxChars: eJ.CS1 }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 14,
                                    label: q.intl.string(q.t["il8+nC"]),
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
            let e = null != l ? q.intl.string(q.t.IBYG5U) : q.intl.string(q.t.TR2B4T);
            t = (0, c.jsx)(n5.R, { className: u()(n4.Io, n4.SP), text: e });
        }
        let E = r === tG.pe.TIER_0 || n === tG.PremiumTypes.TIER_0;
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsxs)("div", {
                className: u()(n4.zr, s),
                children: [
                    (0, c.jsx)(K.D, {
                        className: n4.Qw,
                        variant: "nitro-md",
                        color: "text-strong",
                        children: q.intl.string(q.t.DbPgAd),
                    }),
                    (0, c.jsxs)("div", {
                        className: n4.wY,
                        children: [
                            (0, c.jsxs)("div", {
                                className: u()(n4.fO, { [n4.Vd]: E, [n4.hA]: !E }),
                                children: [
                                    !E && t,
                                    (0, c.jsx)("div", { className: n4.xQ }),
                                    (0, c.jsxs)("div", {
                                        className: n4.wN,
                                        children: [
                                            (0, c.jsx)("img", { src: ae, alt: "", className: n4.kQ }),
                                            (0, c.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: n4.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, c.jsxs)("table", {
                                className: n4.tp,
                                children: [
                                    (0, c.jsx)(aa, {
                                        tier0Price: h,
                                        tier2Price: f,
                                        shouldUseDiscountPrice: x,
                                        tier2DiscountedPriceString: p,
                                    }),
                                    N.map((e) => (0, o.createElement)(ai, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    ar = function (e) {
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
var ac = s(818348),
    ao = s(773188);
function ad(e) {
    let { innerRef: t, isPlanSelectUiRedesignEnabled: s } = e;
    return s ? (0, c.jsx)(np, { innerRef: t }) : (0, c.jsx)(nh.jP, { innerRef: t });
}
let au = () => {
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
        [p, h] = o.useState(!1),
        [f, N] = o.useState(!1),
        [E, b] = o.useState(!1),
        T = (0, x.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        R = null != T ? (0, ex.EL)(T) : null,
        C = null != R ? ex.Ay.getSkuIdForPlan(R.planId) : null,
        I = null !== C && C !== tG.pe.TIER_2 ? tG.pe.TIER_2 : null,
        { analyticsLocations: P } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
    o.useEffect(() => {
        b(!0);
    }, []);
    let S = (0, sg.A0)({ location: "PremiumMarketingHome" }),
        y = (0, iQ.DK)(iq.W.NITRO, "PremiumMarketingHome"),
        { shouldShowBonusOrbsUX: D } = (0, s5.lk)(ii.rE.NITRO_HOME_MARKETING),
        M = y && D ? nw.NI.COMBINED_ORBS : D ? nw.NI.ORB_MULTIPLIER : y ? nw.NI.ORB_REWARDS : null,
        k = o.useMemo(() => {
            let t = new URLSearchParams(e.search).get("section");
            return "orbs" === t
                ? M
                : t === nw.NI.THREE_P_PROMOTIONS
                  ? S
                      ? nw.NI.CALL_OF_DUTY
                      : nw.NI.THREE_P_PROMOTIONS
                  : null;
        }, [S, e.search, M]);
    iW(k ?? "", null != k);
    let { navBarSections: U, activeSectionId: B } = ar([nj.HOME, nj.WHATS_NEW, nj.BEST_OF_NITRO, nj.PLANS, nj.COMPARE]),
        { home: H, whatsNew: F, bestOfNitro: V, plans: z, compare: W } = U,
        Y = (function (e) {
            let { location: t } = e;
            return i$.useConfig({ location: t });
        })({ location: "PremiumMarketingHome" }),
        X = (0, c.jsxs)("div", {
            ref: s,
            className: u()(ao.kL, ao.Gd, ao.iI, { [ao.Hq]: !r }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(nA, { className: ao.yH }),
                (0, c.jsx)(nv, { navBarSections: U, activeSectionId: B }),
                (0, c.jsxs)("div", {
                    className: ao.Qr,
                    children: [
                        (0, c.jsx)("div", {
                            className: ao.qY,
                            ref: H.ref,
                            children: (0, c.jsx)(G.L, {
                                innerRef: n,
                                onChange: (e) => g(e),
                                threshold: 0,
                                active: !0,
                                children: (0, c.jsx)(n1, { ref: n, subscriptionTier: I }),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: ao.So,
                            ref: F.ref,
                            children: (0, c.jsx)(nF, { shouldLoadVideo: E, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: ao.KQ,
                            ref: V.ref,
                            children: (0, c.jsx)(nV, { shouldLoadVideo: E, isReducedMotion: r }),
                        }),
                        (0, c.jsx)("div", {
                            className: ao.s5,
                            ref: z.ref,
                            children: (0, c.jsx)(
                                G.L,
                                {
                                    innerRef: i,
                                    onChange: (e) => h(e),
                                    threshold: 0.1,
                                    active: !0,
                                    children: (0, c.jsx)(ad, { innerRef: i, isPlanSelectUiRedesignEnabled: Y }),
                                },
                                Y ? "plan-select-cards" : "tier-cards",
                            ),
                        }),
                        (0, c.jsx)("div", { className: ao.aC, ref: W.ref, children: (0, c.jsx)(al, {}) }),
                    ],
                }),
                (0, c.jsx)(G.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !f &&
                            (L.default.track(eJ.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: P }),
                            N(!0));
                    },
                    children: (0, c.jsx)("div", { ref: a, className: ao._Z }),
                }),
                (0, c.jsx)(nI, { ref: l }),
                (0, c.jsx)(nb, { isVisible: !d && !p && E, subscriptionTier: I }),
                (0, c.jsx)(nA, { className: ao.MF }),
            ],
        });
    return (0, c.jsx)(t1.N, {
        theme: ac.NJ.DARK,
        children: (e) => (0, c.jsx)(w.Gt, { className: u()(ao.XG, e), ref: t, children: X }),
    });
};
var am = s(862482),
    ax = s(106512),
    ag = s(412260),
    ap = s(662367),
    ah = s(374403),
    af = s(396375),
    aN = s(370049);
let aA = function (e) {
    let t,
        s,
        { premiumSubscription: i, className: n, textColor: a } = e,
        l = (0, nn.ar)();
    if (null == i) return null;
    let r = null != i ? ex.Ay.getPremiumPlanItem(i) : null;
    if (
        (ex.Ay.isBoostOnlySubscription(i)
            ? (t = q.intl.string(q.t.Uj0md3))
            : null != r && (t = ex.Ay.getTierDisplayNameByPlanId(r.planId)),
        null == t)
    )
        return null;
    function o() {
        return (0, ed.openUserSettings)(eo.X.SUBSCRIPTIONS_PANEL);
    }
    let d = (null != r ? ex.Ay.getSkuIdForPlan(r.planId) : null) === tG.pe.TIER_1;
    return (
        (s = null != a ? a : l ? "text-overlay-light" : "text-default"),
        (0, c.jsxs)(t2.Z, {
            className: u()(aN.kL, n, { [aN.He]: l }),
            type: t2.Z.Types.CUSTOM,
            children: [
                (0, c.jsx)(su.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: u()(aN.Kk, { [aN.Pt]: l }),
                }),
                (0, c.jsx)(J.E, {
                    variant: "text-sm/medium",
                    color: s,
                    children: d
                        ? q.intl.format(q.t["tYuv+T"], {
                              helpdeskArticle: em.A.getArticleURL(eJ.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: o,
                          })
                        : q.intl.format(q.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: o }),
                }),
            ],
        })
    );
};
var aj = s(978836);
let aE = function (e) {
    let { lifted: t = !1 } = e;
    return (0, c.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: u()(aj.zr, { [aj.N]: t }),
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
                        (0, c.jsx)("stop", { className: aj.eq }),
                        (0, c.jsx)("stop", { offset: "0.339235", className: aj.l_ }),
                        (0, c.jsx)("stop", { offset: "0.492065", className: aj.sM }),
                        (0, c.jsx)("stop", { offset: "0.823236", className: aj.zi }),
                        (0, c.jsx)("stop", { offset: "0.899558", className: aj.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var ab = s(900797),
    aT = s(847374),
    aR = s(812993),
    aC = s(614268);
function aI(e) {
    let { className: t } = e;
    return (0, c.jsx)(aR.Lp, { className: u()(aC.T, t), text: q.intl.string(q.t.EYxi0o) });
}
var a_ = s(904788),
    av = s(507553);
let aP = "/assets/5b4fec8511c3676a.svg",
    aS = "/assets/0838bda6ecd20d91.svg";
function ay(e, t, s) {
    return (0, sZ.M)(e) ? t : s;
}
var aD = s(872461);
function aM(e) {
    let { isShowingAll: t, onClick: s } = e;
    return (0, c.jsxs)(n_.D, {
        onClick: s,
        className: aD.customButton,
        children: [
            t ? q.intl.string(q.t.maZaN3) : q.intl.string(q.t["37C26f"]),
            t
                ? (0, c.jsx)(ab.t, { size: "md", color: "currentColor", className: aD.arrow })
                : (0, c.jsx)(aT.a, { size: "md", color: "currentColor", className: aD.arrow }),
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
        } = e,
        { analyticsLocations: d } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD);
    return (0, c.jsx)(j.f5, {
        value: d,
        children: (0, c.jsxs)("div", {
            className: u()(aD.perkCard, i),
            children: [
                r
                    ? (0, c.jsx)(a_.A, {
                          className: aD.perkCardNewBadge,
                          shouldInheritBackgroundColor: !0,
                          shouldInheritTextColor: !0,
                      })
                    : null,
                o ? (0, c.jsx)(aI, { className: aD.perkCardEarlyAccessBadge }) : null,
                (0, c.jsx)("img", { src: n, alt: "", className: u()(a, aD.perksCardArt) }),
                (0, c.jsxs)("div", {
                    children: [
                        (0, c.jsxs)(K.D, {
                            variant: "heading-lg/extrabold",
                            className: aD.perkCardHeading,
                            children: [t, " ", l],
                        }),
                        (0, c.jsx)(J.E, {
                            variant: "text-sm/normal",
                            className: aD.perkCardDescription,
                            children: "function" == typeof s ? s(d) : s,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let aL = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [n, a] = o.useState(!1),
        l = (function (e) {
            let { styles: t } = e,
                i = (0, sq.Ay)(),
                n = (0, s0.X)("usePerkCards"),
                a = (0, th.bG)([D.default], () => {
                    let e = D.default.getCurrentUser();
                    return ex.Ay.canUsePremiumProfileCustomization(e);
                }),
                l = (0, ex.EJ)(tG.PremiumTypes.TIER_2, { useSpace: !1 });
            return {
                badge: {
                    title: q.intl.string(q.t.SS87rQ),
                    description: q.intl.string(q.t.oD6CRr),
                    imageSource: "/assets/70e295f6158d848f.png",
                    imageClassName: t.badgeImage,
                },
                badgeAlt: {
                    title: q.intl.string(q.t["5cYMu0"]),
                    description: q.intl.string(q.t.vxk9va),
                    imageSource: ay(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
                    imageClassName: t.badgeNewImage,
                },
                clientThemes: {
                    title: q.intl.string(q.t["/xvEMy"]),
                    description: q.intl.string(q.t.HKWdjj),
                    className: t.clientThemesCard,
                    imageSource: "/assets/37e0853800afb796.svg",
                    imageClassName: t.clientThemesImage,
                },
                customAppIcons: {
                    title: q.intl.string(q.t.OuItFi),
                    description: q.intl.string(q.t.mPyrE6),
                    imageSource:
                        "https://cdn.discordapp.com/assets/content/bca160c31fc5390dd2b41d90060edcc912a45f6ab3beab44ea79e16bf1f6530f.png",
                    imageClassName: t.customAppIconImage,
                },
                emoji: {
                    title: q.intl.string(q.t["R2IV/Q"]),
                    description: q.intl.string(q.t.R5Xag2),
                    imageSource: "/assets/d8edaaf5cb32248f.svg",
                    imageClassName: t.emojiImage,
                },
                guildProfile: {
                    title: q.intl.string(q.t.lKDhhJ),
                    description: (e) => {
                        if (n)
                            return a
                                ? q.intl.formatToPlainString(q.t.aj1pfZ, { onCheckItOutClick: () => {} })
                                : q.intl.formatToPlainString(q.t.d2oYS8, { onTryItOutClick: () => {} });
                        function t() {
                            {
                                let { openUserSettings: t } = s(766075);
                                (av.A.setState({ scrollPosition: iD._F.TRY_IT_OUT }),
                                    t(eo.X.PROFILE_PANEL, { analyticsLocations: e }));
                            }
                        }
                        return a
                            ? q.intl.format(q.t.aj1pfZ, { onCheckItOutClick: t })
                            : q.intl.format(q.t.d2oYS8, { onTryItOutClick: t });
                    },
                    imageSource: "/assets/e1b6b45be1ce4b03.png",
                    imageClassName: t.perGuildProfilesImage,
                },
                longerMessages: {
                    title: q.intl.string(q.t.BUScid),
                    description: q.intl.string(q.t.vN6XpQ),
                    imageSource: ay(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: q.intl.string(q.t.Bv8Pfk),
                    description: q.intl.string(q.t.JMfaTU),
                    imageSource: ay(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: q.intl.string(q.t.Bv8Pfk),
                    description: q.intl.string(q.t.JMfaTU),
                    imageSource: ay(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: q.intl.string(q.t["lGcW+c"]),
                    description: q.intl.string(q.t["/fDyO+"]),
                    imageSource: ay(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: q.intl.string(q.t["1c+xwT"]),
                    description: q.intl.string(q.t.hJG8ZN),
                    imageSource: ay(i, aS, aP),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: q.intl.string(q.t.tzdIwI),
                    description: q.intl.string(q.t.hJG8ZN),
                    imageSource: ay(i, aS, aP),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: q.intl.string(q.t.tzdIwI),
                    description: q.intl.string(q.t.hJG8ZN),
                    imageSource: ay(i, aS, aP),
                    imageClassName: t.stickersImage,
                },
                streaming: {
                    title: q.intl.string(q.t.RSXQYO),
                    description: q.intl.string(q.t.ymCPxp),
                    imageSource: "/assets/3bcdc01b26c7f691.svg",
                    imageClassName: t.streamingImage,
                },
                superReactions: {
                    title: q.intl.string(q.t["uZt5q/"]),
                    description: q.intl.string(q.t.ZK3ZoX),
                    imageSource: ay(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
                    imageClassName: t.superReactionsImage,
                },
                upload: {
                    title: q.intl.formatToPlainString(q.t.jqhAdL, { premiumMaxSize: l }),
                    description: q.intl.formatToPlainString(q.t["HI+cfm"], { premiumMaxSize: l }),
                    imageSource: "/assets/010eae6a6dbacc63.svg",
                    imageClassName: t.uploadImage,
                },
                videoBackground: {
                    title: q.intl.string(q.t.NaGpTf),
                    description: q.intl.string(q.t["A8O/Qw"]),
                    imageSource: ay(i, iM, iO),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: aD }),
        r = (0, th.bG)([el.Ay], () => el.Ay.useReducedMotion),
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
        className: u()(aD.perksContainer, t, {
            [aD.partiallyHidden]: i && !n,
            [aD.subscriberNitroHome]: i,
            [aD.reducedMotion]: r,
        }),
        children: [
            (0, c.jsx)(K.D, {
                variant: "heading-xxl/extrabold",
                className: aD.perksTitle,
                children: i ? q.intl.string(q.t.QX14gI) : q.intl.string(q.t.RGadQR),
            }),
            (0, c.jsx)("div", {
                className: u()(aD.perkCardContainer, { [aD.perkCardContainerExpanded]: n }),
                children: m.map((e) => null != e && (0, c.jsx)(aO, { ...e }, e.title)),
            }),
            i &&
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)("div", {
                            className: u()({ [aD.sizeGizmo]: !n, [aD.sizeGizmoExpanded]: n }),
                            children: (0, c.jsx)(aM, {
                                onClick: function () {
                                    (L.default.track(eJ.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
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
var ak = s(194509),
    aU = s(317587);
let aG = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: n } = e,
        a = (0, tA.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: eJ.JJy.MARKETING_FLOATING_CTA },
        r = (0, sq.Ay)(),
        o = (0, nf.M)(r);
    return (0, c.jsx)(tN.animated.div, {
        className: u()(aU.iE, { [aU.H8]: i, [aU.q4]: !t }),
        style: a,
        children: (0, c.jsxs)("div", {
            className: i ? aU.zW : aU.iJ,
            children: [
                (0, c.jsx)(af.A, {
                    color: o ? am.XD.BRAND_INVERTED : void 0,
                    className: u()(aU.x6, { [aU.Ph]: o }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: l,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: o ? void 0 : aU.PJ,
                }),
                (0, c.jsx)(ak.A, { className: aU.x6, premiumModalAnalyticsLocation: l }),
            ],
        }),
    });
};
var aw = s(386564);
function aB(e) {
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
                  color: l ? am.XD.BRAND_INVERTED : void 0,
                  className: u()(aw.x6, aw.Ph, n, { [aw.Sq]: t && a, [aw.MF]: a && !l }),
                  shinyButtonClassName: l ? void 0 : aw.PJ,
                  subscriptionTier: s,
                  hasActivePromotion: !0,
              })
            : (0, c.jsx)(af.A, {
                  color: l || !a ? am.XD.BRAND_INVERTED : void 0,
                  className: u()(aw.x6, aw.Ph, n, { [aw.Sq]: t && a, [aw.MF]: a && !l }),
                  subscriptionTier: s,
              }),
        d = t && a ? null : (0, c.jsx)(ak.A, { className: u()(aw.x6, n), color: a ? void 0 : am.XD.WHITE });
    return (0, c.jsxs)("div", { className: u()(aw.UD, i), children: [o, " ", d] });
}
function aH() {
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(a_.p, { className: aw.zd }),
            (0, c.jsx)(a_.p, { className: aw.G }),
            (0, c.jsx)(a_.p, { className: aw.zy }),
            (0, c.jsx)(a_.p, { className: aw.GX }),
        ],
    });
}
function aF(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        n = nq();
    return (0, c.jsx)(J.E, {
        variant: t,
        color: i ? "text-subtle" : "text-overlay-light",
        className: u()(aw.h_, { [aw.If]: s, [aw.jn]: i }),
        children: q.intl.format(q.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let aV = o.forwardRef(function (e, t) {
    let { className: s, buttonClassName: i, subscriptionTier: n, isDarkMode: a } = e,
        { analyticsLocations: l } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        r = (0, eg.QQ)(),
        o = (0, nn.ar)(),
        d = (0, iJ.b)().length > 0,
        m = q.intl.string(q.t.YCZldK);
    return (0, c.jsx)(j.f5, {
        value: l,
        children: (0, c.jsxs)("div", {
            ref: t,
            className: u()(aw.kL, s, { [aw.V1]: !o, [aw.Q4]: !o && d }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, c.jsxs)("div", {
                    className: o ? aw.I6 : aw.G1,
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
                                  className: aw.DF,
                                  children: (0, c.jsx)(nK.A, { textColor: "text-overlay-light", smallerText: !o }),
                              })
                            : (0, c.jsx)(aF, {}),
                        r
                            ? (0, c.jsx)("div", {
                                  className: aw.UD,
                                  children: (0, c.jsx)(ak.A, { className: u()(aw.x6, i), color: am.XD.WHITE }),
                              })
                            : (0, c.jsx)(aB, {
                                  subscriptionTier: n,
                                  inOfferExperience: o,
                                  buttonClassName: i,
                                  isDarkMode: a,
                              }),
                        d && (0, c.jsx)(aF, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !o && (0, c.jsx)(aH, {}),
            ],
        }),
    });
});
var az = s(22118),
    aW = s(145359),
    aY = s(377770);
function aX(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, c.jsx)(aE, { lifted: t }) : null;
}
let aK = () => {
        (0, v.P)(_);
        let e = o.useRef(null),
            t = o.useRef(null),
            s = o.useRef(null),
            i = (0, sq.Ay)(),
            n = (0, sZ.M)(i),
            [a, l] = o.useState(!1),
            [r, d] = o.useState(!1),
            [m, g] = o.useState(!1),
            [p, h] = o.useState(!1),
            f = (0, x.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            N = null != f ? (0, ex.EL)(f) : null,
            E = null != N ? ex.Ay.getSkuIdForPlan(N.planId) : null,
            b = null !== E && E !== tG.pe.TIER_2 ? tG.pe.TIER_2 : null,
            T = (0, ef.V)(),
            R = T?.subscriptionTrial?.skuId,
            C = (0, nn.ar)(),
            I = (0, x.bG)([ag.A], () => {
                let e = ag.A.getMarketingComponentByType(ee.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            P = (0, ah.Q)(),
            { analyticsLocations: S } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
        o.useEffect(() => {
            h(!0);
        }, []);
        let y = (0, c.jsx)("div", {
            className: aY.dY,
            children: (0, c.jsx)(G.L, {
                innerRef: e,
                onChange: (e) => d(e),
                threshold: 0.1,
                active: !0,
                children: (0, c.jsx)(i0.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, c.jsx)(af.A, {
                        showIcon: !1,
                        subscriptionTier: tG.pe.TIER_0,
                        className: aW.Ph,
                        look: am.pR.OUTLINED,
                        color: am.XD.WHITE,
                        buttonShineClassName: aW.Qr,
                    }),
                    tier2CTAButton:
                        R === tG.pe.TIER_0
                            ? (0, c.jsx)(af.A, {
                                  showIcon: !1,
                                  subscriptionTier: tG.pe.TIER_2,
                                  className: aW.Ph,
                                  look: am.pR.OUTLINED,
                                  color: am.XD.WHITE,
                                  buttonShineClassName: aW.Qr,
                              })
                            : (0, c.jsx)(af.A, {
                                  color: am.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: tG.pe.TIER_2,
                                  className: aW.Ph,
                                  textOptions: { textClassName: aW.Ac },
                                  buttonShineClassName: aW.Qr,
                              }),
                }),
            }),
        });
        return (0, c.jsxs)("div", {
            className: aY.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(aA, { premiumSubscription: f, className: u()(aY.R3, { [aY.aZ]: C }) }),
                C &&
                    (0, c.jsxs)("div", {
                        className: aY.n1,
                        children: [
                            (0, c.jsx)(aX, { inOfferExperience: C }),
                            (0, c.jsx)(tK.l, {
                                className: aY.ij,
                                size: "md",
                                location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                        ],
                    }),
                (0, c.jsxs)("div", {
                    className: u()({ [aY.V1]: !C }),
                    children: [
                        null != I && (0, c.jsx)(ax.m, { className: aY.w$, config: I }),
                        (0, c.jsxs)("div", {
                            className: aY.iS,
                            children: [
                                !C &&
                                    (0, c.jsx)(tK.l, {
                                        className: aY.ij,
                                        size: "md",
                                        location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, c.jsx)(G.L, {
                                    innerRef: t,
                                    onChange: (e) => l(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, c.jsx)(aV, {
                                        ref: t,
                                        subscriptionTier: b,
                                        className: u()({ [aY.p7]: C, [aY.Pw]: C, [aY.Cv]: null != f }),
                                        isDarkMode: n,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != P && (0, c.jsx)("div", { className: aY.Ol, children: (0, c.jsx)(ap.I, { component: P }) }),
                y,
                (0, c.jsx)(aL, { className: aY.B_ }),
                (0, c.jsx)("div", { className: aY.aC, children: (0, c.jsx)(az.A, { className: aY.JQ, hideCTAs: !0 }) }),
                (0, c.jsx)("div", { className: aY.hz }),
                (0, c.jsx)(aG, { isVisible: !a && !r && p, subscriptionTier: b, isApplicationHome: !1 }),
                (0, c.jsx)(G.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !m &&
                            (L.default.track(eJ.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: S }),
                            g(!0));
                    },
                    children: (0, c.jsx)("div", { ref: s, className: aY._Z }),
                }),
                (0, c.jsx)("img", {
                    src: iX,
                    className: aY.Kw,
                    width: 112,
                    height: 85,
                    alt: q.intl.string(q.t.X4IxWL),
                }),
            ],
        });
    },
    aJ = function (e) {
        let { entrypoint: t } = e,
            s = (0, ef.V)(),
            i = (0, eh.O)({ includePremiumGroupDiscount: !0 }),
            n = (0, iZ.NF)({ trialOffer: s }),
            a = (0, iZ.Tp)(),
            l = (0, x.bG)([eW.A], () => eW.A.getReminderStateId());
        switch (
            (o.useEffect(() => {
                (!0 === n && (0, iZ.QG)(), !0 === a && (0, iZ.ne)(l), (null != s || null != i) && (0, U.u1)(s, i));
            }, [s, i, n, a, l]),
            t)
        ) {
            case tG.tU.UserSettings:
                return (0, c.jsx)(aK, {});
            case tG.tU.ApplicationStoreHome:
                return (0, c.jsx)(au, {});
            default:
                return null;
        }
    };
var aZ = s(531296);
let aq = function (e) {
    let { entrypoint: t = tG.tU.UserSettings } = e;
    (0, v.P)(_);
    let s = (0, b.Hp)(),
        { sourceAnalyticsLocations: i, analyticsLocations: n } = (0, j.Ay)(A.A.PREMIUM_MARKETING),
        a = (0, x.bG)([O.A], () => O.A.hasFetchedSubscriptions()),
        l = (0, x.bG)([M.A], () => M.A.hasFetchedPaymentSources),
        r = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        d = r?.id,
        C = (0, ef.V)(),
        I = (0, eh.O)({ includePremiumGroupDiscount: !0 }),
        G = (0, T.Y)(tG.T7),
        [w, B] = o.useState(!0),
        H = o.useRef(0),
        F = (0, k.YE)(r, tG.PremiumTypes.TIER_2);
    ((0, iJ.b)(),
        o.useEffect(() => {
            p.h.wait(async () => {
                let e = Date.now();
                (await Promise.all([E.hP(), E.$o(), (0, h.zS)(null, null, eJ.tF5.DISCOVERY)]),
                    (H.current = Date.now() - e),
                    B(!1));
            });
        }, []),
        o.useEffect(() => {
            w ||
                L.default.track(eJ.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: i,
                    load_duration_ms: H.current,
                });
        }, [i, w]),
        o.useEffect(() => {
            s && (null != C || null != I) && (0, U.u1)(C, I);
        }, [s, C, I]));
    let V = (0, m.zy)(),
        z = o.useRef(!1),
        W = a && l && G,
        [Y, X] = o.useState(W);
    (W && !Y && X(!0),
        o.useEffect(() => {
            if (z.current || !W) return;
            let e = new URLSearchParams(V.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: tG.pe.TIER_0, nitro: tG.pe.TIER_2 },
                s = Object.hasOwn(t, e) ? t[e] : void 0;
            null != s &&
                ((z.current = !0),
                (0, S.bG)(eJ.BVt.APPLICATION_STORE),
                (0, P.A)({ subscriptionTier: s, analyticsLocations: n }));
        }, [W, V.search, n]));
    let K = (0, x.bG)([y.A], () => y.A.enabled),
        J = t === tG.tU.ApplicationStoreHome,
        Z = K
            ? (0, c.jsx)(f.A, {})
            : s
              ? (0, c.jsx)(R.uK, {})
              : J && F
                ? (0, c.jsx)(j.f5, { value: n, children: (0, c.jsx)(iK, { userId: d }) })
                : Y
                  ? null
                  : (0, c.jsx)("div", { className: u()(aZ.kL, aZ.Lq), children: (0, c.jsx)(g.y, {}) });
    return null != Z
        ? !K && !s && J && F
            ? Z
            : (0, c.jsxs)(c.Fragment, { children: [J && (0, c.jsx)(N.A, {}), Z] })
        : (0, c.jsx)(j.f5, { value: n, children: (0, c.jsx)(aJ, { entrypoint: t }) });
};
