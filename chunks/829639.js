(s.d(t, { A: () => rm }), s(323874), s(14289), s(35956), s(205816));
var i,
    n,
    a,
    r,
    l,
    c = s(477900),
    o = s(582128),
    d = s(503698),
    u = s.n(d),
    m = s(806163),
    x = s(17928),
    g = s(289873),
    f = s(228366),
    p = s(73825),
    h = s(974544),
    N = s(107834),
    A = s(793574),
    j = s(688810),
    b = s(277984),
    C = s(86379),
    E = s(160946),
    T = s(545075),
    R = s(840251),
    I = s(688151);
let v = new R.E([], I.$G.OPEN_NITRO, { location: "open nitro tab/settings" });
var _ = s(611924),
    S = s(75678),
    P = s(976860),
    y = s(351906),
    D = s(287809),
    O = s(295405),
    M = s(166403),
    L = s(174459),
    k = s(474090),
    U = s(881489),
    G = s(10392),
    w = s(945810);
let B = (0, w.mj)({
    name: "2026-05-nitro-home-header",
    kind: "user",
    defaultConfig: { treatment: "control" },
    variations: {
        0: { treatment: "control" },
        1: { treatment: "treatment_a" },
        2: { treatment: "treatment_b" },
        3: { treatment: "treatment_c" },
    },
});
function H(e) {
    let t = B.useConfig({ location: e });
    return { treatment: t.treatment, isInNitroHomeHeaderTreatment: "control" !== t.treatment };
}
let F = (0, w.mj)({
    kind: "user",
    name: "2026-07-nitro-home-header-followup",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function V(e) {
    let { enabled: t } = F.useConfig({ location: e });
    return t;
}
s(321073);
var z = s(554146),
    W = s(269115),
    Y = s(689175),
    K = s(131607),
    X = s(961250),
    Z = s(366505),
    J = s(321191),
    Q = s(903209),
    q = s(927813),
    $ = s(107857),
    ee = s(131168),
    et = s(482589),
    es = s(511484),
    ei = s(479669),
    en = s(661531),
    ea = s(717421),
    er = s(331322),
    el = s(297264),
    ec = s(834730),
    eo = s(821609),
    ed = s(403581),
    eu = s(815021),
    em = s(576243),
    ex = s(49999),
    eg = s(375708),
    ef = s(862068);
function ep(e) {
    let { premiumSubscription: t, content: s, markAsDismissed: i } = e,
        { analyticsLocations: n } = (0, j.Ay)(A.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        a = (0, ea.z)({
            from: { transform: "translateY(64px)", opacity: 0 },
            to: { transform: "translateY(0)", opacity: 1 },
        });
    return (0, c.jsx)(ei.animated.div, {
        className: ef.iE,
        style: a,
        children: (0, c.jsxs)("div", {
            className: ef.iJ,
            children: [
                (0, c.jsx)(em.A, { size: 64, iconSize: 40, color: en.A.colors.WHITE }),
                (0, c.jsxs)("div", {
                    className: ef.qX,
                    children: [
                        (0, c.jsxs)(er.B, {
                            direction: "vertical",
                            gap: 4,
                            fullWidth: !1,
                            className: ef.iQ,
                            children: [
                                (0, c.jsx)(el.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: s.title,
                                }),
                                (0, c.jsx)(ec.E, { variant: "text-sm/medium", color: "text-muted", children: s.body }),
                            ],
                        }),
                        (0, c.jsx)(eo.$, {
                            variant: "expressive",
                            icon: ed.t,
                            size: "md",
                            text: s.cta,
                            onClick: function () {
                                (i(ex.i.TAKE_ACTION),
                                    (0, S.A)({
                                        subscription: t,
                                        initialPlanId: s.yearlyPlanId,
                                        analyticsLocations: n,
                                    }));
                            },
                        }),
                    ],
                }),
                (0, c.jsx)(eu.J, {
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": eg.intl.string(eg.t.WAI6xu),
                    onClick: () => i(ex.i.USER_DISMISS),
                }),
            ],
        }),
    });
}
var eh = s(428331),
    eN = s(315629),
    eA = s(65470),
    ej = s(719126);
let eb = function (e) {
    let { className: t, location: s, analyticsLocation: i } = e,
        { analyticsLocations: n } = (0, j.Ay)(s);
    return (0, c.jsx)(j.f5, {
        value: n,
        children: (0, c.jsxs)(eN.h, {
            className: u()(ej.kL, ej.pm, t),
            color: "purple",
            children: [
                (0, c.jsxs)("div", {
                    className: ej.FS,
                    children: [
                        (0, c.jsx)(el.D, {
                            variant: "heading-xxl/bold",
                            className: ej.R_,
                            children: eg.intl.string(eg.t.Ve9Ge6),
                        }),
                        (0, c.jsx)(ec.E, { variant: "text-md/medium", children: eg.intl.string(eg.t.yQ06u1) }),
                        (0, c.jsx)("div", {
                            className: ej.SB,
                            children: (0, c.jsx)(eA.A, {
                                buttonTextOverride: eg.intl.string(eg.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: i,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, c.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                    className: ej._e,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
var eC = s(877624);
let eE =
    "https://cdn.discordapp.com/assets/content/cb0071c273cdfb73732c42fd7bb4f97df58b363ce25d539147211a6bf26bb5b3.png";
function eT(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: eE,
        srcSet: `${eE} 1x, https://cdn.discordapp.com/assets/content/5c0ab98610e9aa5f1564d303516953a1a18c39231c6349f350ac1310f4d1e51b.png 2x`,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var eR = s(502572),
    eI = s(192308),
    ev = s(775602),
    e_ = s(366999),
    eS = s(531260),
    eP = s(780964),
    ey = s(766075),
    eD = s(786300),
    eO = s(975571),
    eM = s(158045),
    eL = s(725018),
    ek = s(89366),
    eU = s(724651),
    eG = s(732280),
    ew = s(549996),
    eB = s(172218);
function eH() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, s] = (0, o.useState)(1),
        i = (0, o.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, eB.B)(
            (e) => {
                s(e.intersectionRatio);
            },
            i,
            e,
        ),
        visibilityPercentage: t,
    };
}
var eF = s(287763);
let eV = function (e) {
    let { text: t } = e;
    return (0, c.jsx)("div", {
        className: eF.i,
        children: (0, c.jsx)(ec.E, { variant: "text-sm/bold", color: "text-overlay-light", children: t }),
    });
};
var ez = s(371764),
    eW = s(103411),
    eY = s(778712),
    eK = s(97808),
    eX = s(590251),
    eZ = s(144165),
    eJ = s(854627),
    eQ = s(427262),
    eq = s(197630),
    e$ = s(851746),
    e0 = s(326084),
    e1 = s(664654);
s(232198);
var e2 = s(652215),
    e3 = s(879416);
function e6() {
    let e,
        t,
        s,
        { location: i = "PremiumNitroHomeReferralBanner" } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { referralSentUsers: n } = (0, e1.J)(),
        a = (0, x.bG)([e$.A], () => e$.A.getRecipientStatus()),
        r = !1 !== (0, x.bG)([e$.A], () => e$.A.getHasEligibleFriends()),
        { isEligibleForIncentive: l, referralRewardType: c, useAltReferralCardArt: o } = (0, e3.x)({ location: i }),
        d = l ? c : null,
        u =
            ((e = 0),
            (t = 0),
            (s = 0),
            a.forEach((i) => {
                i === e0.aK.REFERRER_REWARD_GRANTED
                    ? (e++, t++, s++)
                    : i === e0.aK.CONVERTED
                      ? (t++, s++)
                      : i === e0.aK.REDEEMED && s++;
            }),
            { numRewardGranted: e, numConverted: t, numRedeemed: s, numSent: a.size }),
        m = a.size === e1.Z,
        g = (function (e, t, s) {
            let i = eO.A.getArticleURL(e2.MVz.REFERRAL_PROGRAM);
            if (null != s)
                return t.numRewardGranted === e1.Z
                    ? s === eq.xb.ORBS
                        ? eg.intl.format(eg.t.OluhLp, { helpdeskArticle: i })
                        : eg.intl.format(eg.t["8BYihN"], { helpdeskArticle: i })
                    : t.numSent === e1.Z
                      ? s === eq.xb.ORBS
                          ? eg.intl.format(eg.t["1aV1j9"], { helpdeskArticle: i })
                          : eg.intl.format(eg.t.QNrPuS, { helpdeskArticle: i })
                      : e
                        ? s === eq.xb.ORBS
                            ? eg.intl.format(eg.t.cfE0uG, { numOrbs: 5e3, helpdeskArticle: i })
                            : eg.intl.format(eg.t["+fcvlI"], { helpdeskArticle: i })
                        : eg.intl.format(eg.t["a0+Jwv"], { helpdeskArticle: i });
            return e
                ? t.numSent === e1.Z
                    ? t.numRedeemed === e1.Z
                        ? eg.intl.format(eg.t["1aEjsH"], { helpdeskArticle: i })
                        : eg.intl.format(eg.t["+u3AOO"], { helpdeskArticle: i })
                    : eg.intl.format(eg.t["omMr+V"], { helpdeskArticle: i })
                : eg.intl.format(eg.t["zWhX/Q"], { helpdeskArticle: i });
        })(r, u, d),
        f =
            d === eq.xb.ORBS
                ? eg.intl.string(eg.t.tAlkl4)
                : d === eq.xb.DISCOUNT
                  ? eg.intl.formatToPlainString(eg.t["/JJ9I5"], { discountPercent: 30 })
                  : eg.intl.string(eg.t.USo4s7),
        p = d === eq.xb.ORBS && u.numSent === e1.Z && u.numConverted >= 1;
    return {
        referralSentUsers: n,
        nReferralsSent: u.numSent,
        hasEligibleFriends: r,
        allSent: m,
        headingText: f,
        bodyText: g,
        referralStatus: u,
        isEligibleForIncentive: l,
        referralIncentiveRewardType: d,
        useAltReferralCardArt: o,
        shouldShowSpendOrbsCta: p,
    };
}
var e7 = s(212737),
    e5 = s(162907);
let e8 =
        "https://cdn.discordapp.com/assets/content/f94d752e86f195c300db953fbe5c704cbf0c696dcbb0b3e389cd60e8a633a942.png",
    e9 =
        "https://cdn.discordapp.com/assets/content/ceb223833c25175aadddac32ce46fd1c60f4455860c6be9017c8d5993dce01c9.png",
    e4 =
        "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg";
function te(e) {
    let { startingScreen: t, analyticsLocations: i } = e;
    (L.default.track(e2.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
        (0, eI.openModalLazy)(async () => {
            let { default: e } = await Promise.resolve().then(s.bind(s, 212737));
            return (s) => (0, c.jsx)(e, { ...s, startingScreen: t });
        }));
}
function tt(e) {
    let { user: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eJ.A)({ userId: t.id, size: eY._3.SIZE_24 });
    return (0, c.jsx)(
        eK.eu,
        { className: e5.bj, src: s, "aria-label": (0, eQ.mG)(t), size: eY._3.SIZE_24, ...i },
        t.id,
    );
}
function ts(e) {
    let { slotIndex: t } = e;
    return (0, c.jsx)("div", { className: e5.p, children: t });
}
function ti(e) {
    let { referralSentUsers: t, className: s } = e;
    return (0, c.jsx)("div", {
        className: u()(e5.L$, s),
        children: (function () {
            let e = [];
            for (let s = 0; s < e1.Z; s++)
                if (t?.[s] !== void 0) {
                    let i = (0, c.jsx)(tt, { user: t[s] }, t[s].id);
                    e.push(i);
                } else {
                    let t = (0, c.jsx)(ts, { slotIndex: s + 1 }, s);
                    e.push(t);
                }
            return e;
        })(),
    });
}
let tn = { width: 142, height: 80 },
    ta = { width: 90, height: 60 };
function tr(e) {
    let {
            nReferralsSent: t,
            imageSize: s = 93,
            backgroundClassName: i,
            ringClassName: n,
            referralRewardType: a = null,
            useAltReferralCardArt: r = !1,
        } = e,
        {
            src: l,
            srcSet: o,
            dimensions: d,
        } = r
            ? a === eq.xb.ORBS
                ? {
                      src: e9,
                      srcSet: `${e9} 1x, https://cdn.discordapp.com/assets/content/419e2d501b25943940a58157c174bce6883f02782cd8a9781952c00442687423.png 2x`,
                      dimensions: tn,
                  }
                : a === eq.xb.DISCOUNT
                  ? {
                        src: e8,
                        srcSet: `${e8} 1x, https://cdn.discordapp.com/assets/content/8cc73daf7f08781c95990f10ae70b57225b9a132eab3301475ff942fb1823709.png 2x`,
                        dimensions: ta,
                    }
                  : { src: e4, srcSet: void 0, dimensions: null }
            : { src: e4, srcSet: void 0, dimensions: null },
        u = d?.width ?? s,
        m = d?.height ?? s;
    return (0, c.jsx)(eX.a, {
        percent: 33.3 * t,
        colorOverride: "#53ac66",
        background: i ?? e5.cq,
        strokeSize: 0.8,
        ringColorOverrideClassName: n ?? e5.e0,
        overlayClassName: t === e1.Z ? e5.ys : void 0,
        children:
            null != o
                ? (0, c.jsx)("img", { src: l, srcSet: o, alt: "", role: "presentation", width: u, height: m })
                : (0, c.jsx)(eZ._, { src: l, height: m, width: u, zoomable: !1 }),
    });
}
function tl(e) {
    let { className: t } = e,
        { referralSentUsers: s, nReferralsSent: i, hasEligibleFriends: n, allSent: a, bodyText: r } = e6();
    return (0, c.jsxs)("div", {
        className: u()(e5.kL, t),
        children: [
            (0, c.jsx)("div", { className: e5.G3, children: (0, c.jsx)(tr, { nReferralsSent: i }) }),
            (0, c.jsxs)("div", {
                className: e5.IH,
                children: [
                    (0, c.jsx)(ti, { referralSentUsers: s, className: e5.GV }),
                    (0, c.jsxs)("div", {
                        className: e5.n4,
                        children: [
                            (0, c.jsx)(el.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: eg.intl.string(eg.t.USo4s7),
                            }),
                            (0, c.jsx)(ec.E, { variant: "text-md/medium", color: "text-subtle", children: r }),
                        ],
                    }),
                    (0, c.jsx)(eo.$, {
                        variant: "primary",
                        disabled: !1 === n || !0 === a,
                        text: eg.intl.string(eg.t.Lm2nFc),
                        onClick: () =>
                            te({ startingScreen: e7.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
                    }),
                ],
            }),
        ],
    });
}
var tc = s(792656),
    to = s(536637),
    td = s.n(to),
    tu = s(496431),
    tm = s(850292);
let tx = function (e) {
    let { expiresAt: t, className: s, digitTextVariant: i = "text-md/medium" } = e,
        n = (0, tu.A)(td()(t).toDate(), 1e3);
    if (null == n) return null;
    let { days: a, hours: r, minutes: l, seconds: o } = n,
        d = [
            { unitValue: a, unitType: "days" },
            { unitValue: r, unitType: "hours" },
            { unitValue: l, unitType: "minutes" },
            { unitValue: o, unitType: "seconds" },
        ];
    return (0, c.jsxs)("div", {
        className: u()(tm.Xl, s, { [tm.a3]: "text-lg/bold" === i }),
        children: [
            (0, c.jsx)(ec.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: eg.intl.string(eg.t["/ARFVE"]),
            }),
            (0, c.jsx)("div", {
                className: tm.$R,
                children: d.map((e, t) =>
                    (function (e, t, s) {
                        let i,
                            [n, a] = 1 === (i = e.unitValue.toString()).length ? ["0", i[0]] : [i[0], i[1]];
                        return (0, c.jsxs)(c.Fragment, {
                            children: [
                                (0, c.jsxs)(
                                    "div",
                                    {
                                        className: tm.bh,
                                        children: [
                                            (0, c.jsxs)("div", {
                                                className: tm.kB,
                                                children: [
                                                    (0, c.jsx)("div", {
                                                        className: tm.B2,
                                                        children: (0, c.jsx)(ec.E, {
                                                            variant: s,
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: tm.B2,
                                                        children: (0, c.jsx)(ec.E, {
                                                            variant: s,
                                                            color: "text-strong",
                                                            children: a,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, c.jsx)(ec.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-strong",
                                                children: (function (e) {
                                                    switch (e) {
                                                        case "days":
                                                            return eg.intl.string(eg.t.ixASa2);
                                                        case "hours":
                                                            return eg.intl.string(eg.t["8sNvNn"]);
                                                        case "minutes":
                                                            return eg.intl.string(eg.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return eg.intl.string(eg.t.JhaiLW);
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
                                    (0, c.jsx)(ec.E, {
                                        className: tm.cV,
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
var tg = s(473702),
    tf = s(609425),
    tp = s(660184),
    th = s(938767);
function tN() {
    let e = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        t = (0, tf.A)(),
        { avatarSrc: s, avatarDecorationSrc: i, eventHandlers: n } = (0, eJ.A)({ userId: e?.id, size: eY._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, eQ.mG)(e);
    return (0, c.jsxs)("div", {
        className: th.kL,
        children: [
            (0, c.jsx)("div", {
                className: th.my,
                children: (0, c.jsx)(eK.eu, {
                    src: s,
                    avatarDecoration: i,
                    size: eY._3.SIZE_56,
                    "aria-label": a,
                    ...n,
                }),
            }),
            (0, c.jsx)("div", { className: th.QC, children: (0, c.jsx)(tp.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var tA = s(707554),
    tj = s(628154);
let tb = function (e) {
    let { className: t, color: s = "text-strong", responsive: i = !0, variant: n = "nitro-lg", children: a } = e;
    return (0, c.jsx)(tA.F, {
        forceLevel: 1,
        children: (0, c.jsx)(el.D, { className: u()(tj.w, t, i && tj.n), variant: n, color: s, children: a }),
    });
};
var tC = s(508770),
    tE = s(839534),
    tT = s(478016),
    tR = s(318254),
    tI = s(626031),
    tv = s(957457);
function t_(e) {
    let { nRewardsGranted: t, referralRewardType: s, className: i } = e;
    return t < 1
        ? null
        : s === eq.xb.ORBS
          ? (0, c.jsx)(tS, { nRewardsGranted: t, className: i })
          : s === eq.xb.DISCOUNT
            ? (0, c.jsx)(tP, { nRewardsGranted: t, className: i })
            : null;
}
function tS(e) {
    let { nRewardsGranted: t, className: s } = e,
        i = 5e3 * t,
        [n, a] = o.useState(0);
    return (
        o.useEffect(() => {
            a(i);
        }, [i]),
        (0, c.jsxs)(er.B, {
            direction: "horizontal",
            align: "center",
            gap: 4,
            fullWidth: !1,
            className: s,
            children: [
                (0, c.jsxs)("div", {
                    className: tv.u,
                    "aria-label": String(i),
                    children: [
                        (0, c.jsx)(tR.C, { size: "xs", color: en.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                        (0, c.jsx)(tI.t, {
                            value: n,
                            onValueChange: e2.tEg,
                            onValueReached: e2.tEg,
                            targetTotalCounterTime: 800,
                            isRenderedWithoutLottieAnimation: !0,
                            textVariant: "text-sm/semibold",
                            textColor: "text-strong",
                            horizontalAlignment: "left",
                        }),
                    ],
                }),
                (0, c.jsx)(ec.E, {
                    variant: "text-sm/medium",
                    color: "text-strong",
                    children: eg.intl.string(eg.t.UhguER),
                }),
            ],
        })
    );
}
function tP(e) {
    let { nRewardsGranted: t, className: s } = e;
    return (0, c.jsxs)(er.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        fullWidth: !1,
        className: s,
        "aria-label": eg.intl.formatToPlainString(eg.t["P//01n"], { discountPercent: 30, duration: t }),
        children: [
            (0, c.jsx)(tT.U, { size: "xs", color: en.A.colors.ICON_FEEDBACK_POSITIVE }),
            (0, c.jsx)(ec.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eg.intl.format(eg.t["P//01n"], { discountPercent: 30, duration: t }),
            }),
        ],
    });
}
var ty = s(758836),
    tD = s(558992);
function tO(e) {
    let { className: t } = e,
        {
            referralSentUsers: s,
            nReferralsSent: i,
            hasEligibleFriends: n,
            allSent: a,
            headingText: r,
            bodyText: l,
            referralStatus: o,
            isEligibleForIncentive: d,
            referralIncentiveRewardType: m,
            useAltReferralCardArt: x,
            shouldShowSpendOrbsCta: g,
        } = e6({ location: "PremiumNitroHomeReferralBannerTreatment" });
    return (0, c.jsxs)("div", {
        className: u()(tD.kL, t),
        children: [
            (0, c.jsx)("div", {
                className: tD.G3,
                children: (0, c.jsx)(tr, {
                    nReferralsSent: i,
                    imageSize: 65,
                    backgroundClassName: tD.HP,
                    ringClassName: tD.pZ,
                    referralRewardType: m,
                    useAltReferralCardArt: d && x,
                }),
            }),
            (0, c.jsxs)("div", {
                className: u()(tD.IH, d && tD.zD),
                children: [
                    d &&
                        (0, c.jsx)("div", {
                            className: tD.aZ,
                            children: (0, c.jsx)(tC.E, { type: "beta", variant: "expressive" }),
                        }),
                    (0, c.jsxs)("div", {
                        className: tD.n4,
                        children: [
                            (0, c.jsx)(el.D, {
                                variant: d ? "heading-lg/bold" : "heading-lg/semibold",
                                color: "text-strong",
                                children: r,
                            }),
                            (0, c.jsx)(ec.E, {
                                variant: d ? "text-sm/medium" : "text-md/medium",
                                color: "text-subtle",
                                children: l,
                            }),
                        ],
                    }),
                    d
                        ? (0, c.jsxs)("div", {
                              className: tD.Wp,
                              children: [
                                  (0, c.jsx)(ti, { referralSentUsers: s }),
                                  (0, c.jsx)(t_, { nRewardsGranted: o.numRewardGranted, referralRewardType: m }),
                              ],
                          })
                        : (0, c.jsx)(ti, { referralSentUsers: s, className: tD.t7 }),
                ],
            }),
            (0, c.jsx)(eo.$, {
                variant: "primary",
                disabled: !g && (!1 === n || !0 === a),
                text: g ? eg.intl.string(eg.t.iw5Ccc) : eg.intl.string(eg.t.Lm2nFc),
                onClick: () =>
                    g
                        ? (0, tE.Cz)({
                              tab: ty.G2.ORBS,
                              analyticsLocations: [],
                              analyticsSource: A.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR,
                          })
                        : te({ startingScreen: e7.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
            }),
        ],
    });
}
var tM = s(702841),
    tL = s(676279),
    tk = s(396583),
    tU = (((i = {}).SINE = "sine"), (i.COSINE = "cosine"), i),
    tG = (((n = {}).UP = "up"), (n.DOWN = "down"), n);
let tw = (e) => {
    let {
            blurAnimationData: t,
            scaleAnimationData: s,
            yAxisAnimationData: i,
            parallaxAnimationData: n,
            animateXAxisWiggle: a = !1,
            isMotionReduced: r = !1,
            animationSpeedScale: l = 1,
            children: d,
        } = e,
        u = (0, ea.z)(
            null != i ? { from: { y: 0 }, to: { y: 1 }, config: { duration: i.duration * l }, loop: !0 } : { y: 0 },
        ),
        m = i?.path === "sine" ? Math.sin : Math.cos,
        [x, g] = (0, o.useState)(1),
        f = (0, ea.z)(
            null != s
                ? {
                      from: { scale: x > 0 ? s.startScale : s.endScale },
                      to: { scale: x > 0 ? s.endScale : s.startScale },
                      config: { duration: s.duration * l },
                      onRest: () => g((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [p, h] = (0, o.useState)(1),
        N = (0, ea.z)(
            null != t
                ? {
                      from: { blur: p > 0 ? t.startBlurRadius : t.endBlurRadius },
                      to: { blur: p > 0 ? t.endBlurRadius : t.startBlurRadius },
                      config: { duration: t.duration * l },
                      onRest: () => h((e) => -1 * e),
                  }
                : { blur: 0 },
        ),
        A = (0, o.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * l), [l]),
        [j, b] = (0, o.useState)(0),
        [C, E] = (0, o.useState)(1),
        T = (0, ea.z)({ xOffset: j, config: { tension: 10, friction: 10, duration: A } });
    return ((0, tk.A)(() => {
        (b(C * (0.5 * Math.random() * 5 + 2.5)), E((e) => -1 * e));
    }, A),
    r)
        ? d
        : (0, c.jsx)(ei.animated.div, {
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
                  translateX: a ? T.xOffset.to((e) => `${e}px`) : 0,
                  scale: f.scale,
                  filter: N.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != n && n.changeOpacity ? n.containerVisibilityPercentage : 1,
              },
              children: d,
          });
};
var tB = s(382168);
let tH = function (e) {
    let {
        isMotionReduced: t,
        containerVisibilityPercentage: s,
        boltContainerClassName: i,
        carContainerClassName: n,
        hammerContainerClassName: a,
        keyContainerClassName: r,
        starContainerClassName: l,
        boltAssetClassName: o,
        carAssetClassName: d,
        hammerAssetClassName: m,
        keyAssetClassName: x,
        starAssetClassName: g,
        animationSpeedScale: f = 1,
        blurScale: p = 1,
    } = e;
    return (0, c.jsxs)(c.Fragment, {
        children: [
            null != i &&
                (0, c.jsx)("div", {
                    className: u()(tB.nJ, i),
                    children: (0, c.jsx)(tw, {
                        blurAnimationData: { startBlurRadius: 10 * p, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tU.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tG.UP,
                                      range: 125,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: f,
                        children: (0, c.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/ae5638c61a572593c6b03b92e80d3846e0cfe7a9e893f3faf05aecd670a4017d.png",
                            className: o,
                            alt: "",
                        }),
                    }),
                }),
            null != n &&
                (0, c.jsx)("div", {
                    className: u()(tB.IN, n),
                    children: (0, c.jsx)(tw, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tU.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tG.DOWN,
                                      range: 50,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: f,
                        children: (0, c.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/6cb761e3e97838c7927f738882b67bd825d5eeed89633e0af126bda5f9d4e71d.png",
                            className: d,
                            alt: "",
                        }),
                    }),
                }),
            null != a &&
                (0, c.jsx)("div", {
                    className: u()(tB.Gj, a),
                    children: (0, c.jsx)(tw, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tU.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tG.DOWN,
                                      range: 120,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: f,
                        children: (0, c.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/b39a5f2755e6da320fce10c8a4a10bdebef9926b671256b1681976198c5656d4.png",
                            className: m,
                            alt: "",
                        }),
                    }),
                }),
            null != r &&
                (0, c.jsx)("div", {
                    className: u()(tB.FV, r),
                    children: (0, c.jsx)(tw, {
                        blurAnimationData: { startBlurRadius: 5 * p, endBlurRadius: 0, duration: 4e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tU.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tG.UP,
                                      range: 200,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: f,
                        children: (0, c.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/7c23a220a6f31150648930e2ebb435aa7cc89ad57895275bed6f1900869f4de0.png",
                            className: x,
                            alt: "",
                        }),
                    }),
                }),
            null != l &&
                (0, c.jsx)("div", {
                    className: u()(tB.E1, l),
                    children: (0, c.jsx)(tw, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * p, duration: 3e3 },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: tU.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tG.UP,
                                      range: 50,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: f,
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
var tF = s(607470);
let tV =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    tz = function (e) {
        let {
            supportHEVCAlpha: t,
            isMotionReduced: s,
            containerVisibilityPercentage: i,
            containerClassName: n,
            assetClassName: a,
            animationSpeedScale: r = 1,
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
                  children: (0, c.jsx)(tw, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                      yAxisAnimationData: { range: 20, duration: 4e3, path: tU.SINE },
                      parallaxAnimationData: {
                          pathDirection: tG.UP,
                          range: 200,
                          containerVisibilityPercentage: i,
                          changeOpacity: !1,
                      },
                      animateXAxisWiggle: !0,
                      animationSpeedScale: r,
                      children: t
                          ? (0, c.jsx)("img", {
                                src: "https://cdn.discordapp.com/assets/content/082012af2fe8bfa66ce6630e1549a146738936af43a8e60c780f9976fa333d93.png",
                                alt: "",
                                className: a,
                            })
                          : (0, c.jsx)(
                                tF.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: a,
                                    children: (0, c.jsx)("source", { src: tV }),
                                },
                                tV,
                            ),
                  }),
              });
    },
    tW = function (e) {
        let {
                containerVisibilityPercentage: t,
                flyingWumpusContainerClassName: s,
                flyingWumpusAssetClassName: i,
                boltContainerClassName: n,
                carContainerClassName: a,
                hammerContainerClassName: r,
                keyContainerClassName: l,
                starContainerClassName: o,
                boltAssetClassName: d,
                carAssetClassName: u,
                hammerAssetClassName: m,
                keyAssetClassName: x,
                starAssetClassName: g,
                animationSpeedScale: f = 1,
            } = e,
            p = (0, tM.bG)([ev.Ay], () => ev.Ay.useReducedMotion),
            h = (0, tL.TM)();
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(tz, {
                    supportHEVCAlpha: h,
                    isMotionReduced: p,
                    containerVisibilityPercentage: t,
                    containerClassName: s,
                    assetClassName: i,
                    animationSpeedScale: f,
                }),
                (0, c.jsx)(tH, {
                    isMotionReduced: p,
                    containerVisibilityPercentage: t,
                    boltContainerClassName: n,
                    carContainerClassName: a,
                    hammerContainerClassName: r,
                    keyContainerClassName: l,
                    starContainerClassName: o,
                    boltAssetClassName: d,
                    carAssetClassName: u,
                    hammerAssetClassName: m,
                    keyAssetClassName: x,
                    starAssetClassName: g,
                    animationSpeedScale: f,
                }),
            ],
        });
    };
var tY = s(942663);
let tK = function (e) {
    let { containerVisibilityPercentage: t, compact: s } = e;
    return (0, c.jsx)(tW, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: u()(tY.wG, s && tY.Vx),
        flyingWumpusAssetClassName: u()(tY.lu, s && tY.ov),
        boltContainerClassName: u()(tY.nJ, s && tY.Wc),
        hammerContainerClassName: u()(tY.Gj, s && tY.XA),
        keyContainerClassName: u()(tY.FV, s && tY.oZ),
        starContainerClassName: u()(tY.E1, s && tY.LN),
        boltAssetClassName: u()(tY.j7, s && tY.QN),
        hammerAssetClassName: u()(tY.Wv, s && tY.B9),
        keyAssetClassName: u()(tY.rs, s && tY.I1),
        starAssetClassName: u()(tY.OY, s && tY.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var tX = (((a = {}).MORNING = "morning"), (a.AFTERNOON = "afternoon"), (a.EVENING = "evening"), a),
    tZ = s(454273);
let tJ = function (e) {
    let t,
        s,
        {
            className: i,
            headingTop: n,
            showPill: a,
            buttonVisibilityRef: r,
            shouldShowReferralProgressBar: l,
            marketingBanner: o,
            heroButtons: d,
        } = e,
        { visibilityPercentageRef: m, visibilityPercentage: g } = eH(!(0, x.bG)([ev.Ay], () => ev.Ay.useReducedMotion)),
        f =
            ((t = { [tX.MORNING]: eg.t["Wvc/I+"], [tX.AFTERNOON]: eg.t["d+0STx"], [tX.EVENING]: eg.t.CqsxKI }),
            eg.intl.string(
                t[
                    (s = new Date().getHours()) >= 5 && s < 12
                        ? tX.MORNING
                        : s >= 12 && s < 17
                          ? tX.AFTERNOON
                          : tX.EVENING
                ],
            )),
        p = o ?? (l ? (0, c.jsx)(tO, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tZ.kL, tZ.Eg, i),
        ref: r,
        children: (0, c.jsxs)("div", {
            className: u()(tZ.W2, tZ.HQ),
            ref: m,
            children: [
                (0, c.jsxs)(er.B, {
                    align: "start",
                    gap: 32,
                    className: tZ.ZU,
                    children: [
                        a && n,
                        (0, c.jsxs)(er.B, {
                            align: "start",
                            gap: "lg",
                            children: [
                                (0, c.jsxs)(er.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, c.jsx)(tb, {
                                            className: tZ.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            variant: "nitro-md",
                                            children: f,
                                        }),
                                        (0, c.jsx)(tN, {}),
                                    ],
                                }),
                                d,
                            ],
                        }),
                        p,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: tZ.y3,
                    children: (0, c.jsx)(tK, { containerVisibilityPercentage: g, compact: null == p }),
                }),
            ],
        }),
    });
};
var tQ = s(924864);
let tq =
        "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
    t$ = function (e) {
        let { containerVisibilityPercentage: t } = e,
            s = (0, tM.bG)([ev.Ay], () => ev.Ay.useReducedMotion);
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)("div", {
                    className: tQ.BI,
                    children: (0, c.jsx)(tw, {
                        scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: tU.SINE },
                        animateXAxisWiggle: !0,
                        isMotionReduced: s,
                        parallaxAnimationData: {
                            pathDirection: tG.UP,
                            range: 125,
                            containerVisibilityPercentage: t,
                            changeOpacity: !0,
                        },
                        animationSpeedScale: 2,
                        children: (0, c.jsx)("img", { src: tq, alt: "", className: tQ.Q }),
                    }),
                }),
                (0, c.jsx)(tH, {
                    isMotionReduced: s,
                    containerVisibilityPercentage: t,
                    hammerContainerClassName: tQ.Gj,
                    keyContainerClassName: tQ.FV,
                    starContainerClassName: tQ.E1,
                    hammerAssetClassName: tQ.Wv,
                    keyAssetClassName: tQ.rs,
                    starAssetClassName: tQ.OY,
                    animationSpeedScale: 2,
                }),
            ],
        });
    };
var t0 = s(549926);
let t1 = function (e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(tW, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: t0.wG,
        flyingWumpusAssetClassName: t0.lu,
        boltContainerClassName: t0.nJ,
        hammerContainerClassName: t0.Gj,
        keyContainerClassName: t0.FV,
        starContainerClassName: t0.E1,
        boltAssetClassName: t0.j7,
        hammerAssetClassName: t0.Wv,
        keyAssetClassName: t0.rs,
        starAssetClassName: t0.OY,
        animationSpeedScale: 1 / 0.7,
    });
};
var t2 = s(499126);
function t3(e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(tW, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: t2.wG,
        flyingWumpusAssetClassName: t2.lu,
        boltContainerClassName: t2.nJ,
        hammerContainerClassName: t2.Gj,
        keyContainerClassName: t2.FV,
        starContainerClassName: t2.E1,
        boltAssetClassName: t2.j7,
        hammerAssetClassName: t2.Wv,
        keyAssetClassName: t2.rs,
        starAssetClassName: t2.OY,
        animationSpeedScale: 1 / 0.7,
    });
}
let t6 = function () {
    let e = (0, tM.bG)([ev.Ay], () => ev.Ay.useReducedMotion);
    return (0, c.jsx)(tH, {
        isMotionReduced: e,
        blurScale: 0.4,
        starContainerClassName: t2.cI,
        hammerContainerClassName: t2.qg,
        keyContainerClassName: t2.h2,
        boltContainerClassName: t2.Bz,
        starAssetClassName: t2.ks,
        hammerAssetClassName: t2.GY,
        keyAssetClassName: t2.p4,
        boltAssetClassName: t2.vy,
    });
};
var t7 = s(202541);
function t5(e, t, i) {
    (0, eI.openModalLazy)(async () => {
        let { PremiumBrandRefreshSubscriptionCancellationModal: n } = await Promise.all([
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
            s.e("992789"),
            s.e("952372"),
            s.e("425412"),
            s.e("716460"),
            s.e("264572"),
            s.e("265607"),
            s.e("544571"),
            s.e("206028"),
            s.e("102328"),
            s.e("852556"),
            s.e("76027"),
            s.e("594161"),
            s.e("435432"),
            s.e("80347"),
            s.e("680166"),
        ]).then(s.bind(s, 293061));
        return (s) => (0, c.jsx)(n, { ...s, analyticsLocations: e, initialStep: i, premiumSubscription: t });
    });
}
function t8(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, U.Zb)(t);
    return (0, c.jsx)("div", {
        className: u()(tZ.kL, s),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: tZ.ap,
            children: [
                (0, c.jsxs)(er.B, {
                    align: "start",
                    gap: 32,
                    children: [
                        (0, c.jsx)(eV, { text: eg.intl.string(eg.t.yhldRB) }),
                        (0, c.jsxs)(er.B, {
                            align: "start",
                            gap: 12,
                            className: tZ.rG,
                            children: [
                                (0, c.jsx)(tb, { children: eg.intl.format(eg.t.FwjP6W, { days: n }) }),
                                (0, c.jsx)(ec.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: eg.intl.string(eg.t.Jf8KrT),
                                }),
                            ],
                        }),
                        (0, c.jsxs)(er.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            children: [
                                (0, c.jsx)(tc.A, {
                                    size: "md",
                                    buttonTextOverride: eg.intl.string(eg.t["2+luBl"]),
                                    iconOverride: ed.t,
                                    variantOverride: "expressive",
                                }),
                                (0, c.jsx)(eo.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: eg.intl.string(eg.t.Af7ye6),
                                    onClick: () => (0, ey.openUserSettings)(eP.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, c.jsxs)("div", {
                    className: tZ.Hk,
                    children: [(0, c.jsx)(eT, { alt: "", width: "100%", height: "auto" }), (0, c.jsx)(t6, {})],
                }),
            ],
        }),
    });
}
function t9(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, U.Zb)(t),
        { visibilityPercentageRef: a, visibilityPercentage: r } = eH(!(0, x.bG)([ev.Ay], () => ev.Ay.useReducedMotion));
    return (0, c.jsx)("div", {
        className: u()(tZ.kL, s),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: tZ.Gs,
            ref: a,
            children: [
                (0, c.jsxs)(er.B, {
                    align: "start",
                    gap: 24,
                    className: tZ.E2,
                    children: [
                        (0, c.jsxs)(er.B, {
                            align: "start",
                            gap: 12,
                            children: [
                                (0, c.jsx)(eV, { text: eg.intl.string(eg.t.yhldRB) }),
                                (0, c.jsx)(tb, { children: eg.intl.format(eg.t.FwjP6W, { days: n }) }),
                                (0, c.jsx)("div", {
                                    className: tZ.X8,
                                    children: (0, c.jsx)(ec.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: eg.intl.string(eg.t.Jf8KrT),
                                    }),
                                }),
                            ],
                        }),
                        (0, c.jsxs)(er.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            className: tZ.oF,
                            children: [
                                (0, c.jsx)(tc.A, {
                                    size: "md",
                                    buttonTextOverride: eg.intl.string(eg.t["2+luBl"]),
                                    iconOverride: ed.t,
                                    variantOverride: "expressive",
                                }),
                                (0, c.jsx)(eo.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: eg.intl.string(eg.t.Af7ye6),
                                    onClick: () => (0, ey.openUserSettings)(eP.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, c.jsx)("div", { className: tZ.Tg, children: (0, c.jsx)(t3, { containerVisibilityPercentage: r }) }),
            ],
        }),
    });
}
function t4(e) {
    let {
            className: t,
            buttonVisibilityRef: s,
            userDiscountOffer: i,
            discountedPrice: n,
            premiumSubscription: a,
            analyticsLocations: r,
            headingTop: l,
            showPill: o,
            shouldShowReferralProgressBar: d,
            marketingBanner: m,
        } = e,
        { visibilityPercentageRef: g, visibilityPercentage: f } = eH(!(0, x.bG)([ev.Ay], () => ev.Ay.useReducedMotion)),
        p = m ?? (d ? (0, c.jsx)(tO, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tZ.kL, tZ.Eg, t),
        ref: s,
        children: (0, c.jsxs)("div", {
            className: u()(tZ.W2, tZ.HQ),
            ref: g,
            children: [
                (0, c.jsxs)(er.B, {
                    align: "start",
                    gap: 32,
                    className: u()(tZ.ZU, tZ.GW),
                    children: [
                        o && l,
                        null != i.expiresAt &&
                            (0, c.jsx)(tx, { expiresAt: i.expiresAt.toISOString(), digitTextVariant: "text-lg/bold" }),
                        (0, c.jsxs)(er.B, {
                            align: "start",
                            gap: 16,
                            children: [
                                (0, c.jsx)(tb, {
                                    children: eg.intl.format(eg.t["3yZP0G"], { percent: i.discount.amount }),
                                }),
                                null != n &&
                                    (0, c.jsx)(ec.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: eg.intl.format(eg.t["3Q4wCy"], {
                                            discountedPrice: n,
                                            billingPeriod: (0, eM.Ke)(i.discount.intervalType),
                                            numMonths: i.discount.intervalCount,
                                        }),
                                    }),
                            ],
                        }),
                        (0, c.jsxs)(er.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            wrap: !0,
                            children: [
                                (0, c.jsx)(eo.$, {
                                    variant: "expressive",
                                    icon: ed.t,
                                    size: "md",
                                    text: eg.intl.string(eg.t.zrCzVB),
                                    onClick: () => t5(r, a, tg.g.CONFIRM_DISCOUNT),
                                }),
                                (0, c.jsx)(eA.A, {
                                    variant: "secondary",
                                    size: "md",
                                    buttonTextOverride: eg.intl.string(eg.t["3KomGa"]),
                                }),
                            ],
                        }),
                        p,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: u()(tZ.y3, tZ.Xx),
                    children: (0, c.jsx)(t1, { containerVisibilityPercentage: f }),
                }),
            ],
        }),
    });
}
function se(e) {
    let { className: t, isInReverseTrial: s, shouldShowReferralProgressBar: i } = e,
        {
            headingText: n,
            headingTop: a,
            showPill: r,
            shouldShowChurnVariant: l,
            premiumSubscription: o,
            userDiscountOffer: d,
            discountedPrice: m,
            buttonVisibilityRef: g,
        } = ss(),
        { isInNitroHomeHeaderTreatment: f } = H("subscriber_home_hero"),
        p = V("subscriber_home_hero"),
        { analyticsLocations: h } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        N = (0, ew.c)(eC.C.MARKETING_PAGE_BANNER),
        b = (0, eL.cg)(),
        C = null != o && o.status === e2.Dmq.CANCELED,
        E = f && !C,
        T = null;
    null != N &&
        "marketingPageBanner" === N.properties.properties.oneofKind &&
        (T = (0, c.jsx)(ez.x, {
            componentId: N.id,
            promotionId: N.promotionId,
            promotionBannerMarketingComponentFields: N.properties.properties.marketingPageBanner,
        }));
    let R = T;
    null == R && i && !E && (R = (0, c.jsx)(tl, {}));
    let I = (0, eG.V)(),
        v = (0, eU.O)(),
        _ = (0, es.U9)(v, t7.pe.TIER_2) ? t7.pe.TIER_2 : void 0,
        S = null != o && o.status !== e2.Dmq.ACCOUNT_HOLD && o.hasAnyPremiumNitro,
        P = (0, eS.A)(),
        y = P.isFractionalPremiumActive && !S && null == R && !l,
        { visibilityPercentageRef: D, visibilityPercentage: O } = eH(!(0, x.bG)([ev.Ay], () => ev.Ay.useReducedMotion));
    if (s)
        return p
            ? (0, c.jsx)(t9, { fpEndsAt: P.currentEntitlementEndsAt, className: t, buttonVisibilityRef: g })
            : (0, c.jsx)(t8, { fpEndsAt: P.currentEntitlementEndsAt, className: t, buttonVisibilityRef: g });
    if (E) {
        let e = y
            ? (0, c.jsxs)("div", {
                  className: tZ.UJ,
                  children: [
                      (0, c.jsx)(tc.A, {
                          size: "md",
                          hasActivePromotion: !!b,
                          subscriptionTier: I?.subscriptionTrial?.skuId ?? _,
                      }),
                      (0, c.jsx)(eA.A, {
                          variant: "secondary",
                          size: "md",
                          buttonTextOverride: eg.intl.string(eg.t["3KomGa"]),
                      }),
                  ],
              })
            : null;
        return (0, c.jsx)(tJ, {
            className: t,
            headingTop: a,
            showPill: r,
            buttonVisibilityRef: g,
            shouldShowReferralProgressBar: i,
            marketingBanner: T,
            heroButtons: e,
        });
    }
    return p && C
        ? l && null != d && null != o
            ? (0, c.jsx)(t4, {
                  className: t,
                  buttonVisibilityRef: g,
                  userDiscountOffer: d,
                  discountedPrice: m,
                  premiumSubscription: o,
                  analyticsLocations: h,
                  headingTop: a,
                  showPill: r,
                  shouldShowReferralProgressBar: i,
                  marketingBanner: T,
              })
            : (0, c.jsx)(tJ, {
                  className: t,
                  headingTop: a,
                  showPill: r,
                  buttonVisibilityRef: g,
                  shouldShowReferralProgressBar: i,
                  marketingBanner: T,
              })
        : (0, c.jsx)("div", {
              className: u()(tZ.kL, t),
              "data-testid": "subscriber-nitro-home-hero-header",
              ref: g,
              children: (0, c.jsxs)("div", {
                  className: tZ.Qs,
                  ref: D,
                  children: [
                      r && a,
                      (0, c.jsxs)("div", {
                          className: tZ.N1,
                          children: [
                              (0, c.jsx)(t$, { containerVisibilityPercentage: O }),
                              l &&
                                  d?.expiresAt != null &&
                                  (0, c.jsx)(tx, { expiresAt: d.expiresAt.toISOString(), className: tZ.IZ }),
                              (0, c.jsx)(tb, {
                                  children:
                                      l && null != d
                                          ? eg.intl.format(eg.t["3yZP0G"], { percent: d.discount.amount })
                                          : n,
                              }),
                              l &&
                                  null != d &&
                                  null != m &&
                                  (0, c.jsx)(ec.E, {
                                      className: tZ.jG,
                                      variant: "text-sm/medium",
                                      color: "text-strong",
                                      children: eg.intl.format(eg.t["3Q4wCy"], {
                                          discountedPrice: m,
                                          billingPeriod: (0, eM.Ke)(d.discount.intervalType),
                                          numMonths: d.discount.intervalCount,
                                      }),
                                  }),
                          ],
                      }),
                      (0, c.jsxs)("div", {
                          className: y || l ? tZ.UJ : void 0,
                          children: [
                              y &&
                                  (0, c.jsx)(tc.A, {
                                      size: "md",
                                      hasActivePromotion: !!b,
                                      subscriptionTier: I?.subscriptionTrial?.skuId ?? _,
                                  }),
                              l &&
                                  null != o &&
                                  (0, c.jsx)(eo.$, {
                                      variant: "expressive",
                                      icon: ed.t,
                                      size: "md",
                                      text: eg.intl.string(eg.t.zrCzVB),
                                      onClick: () => t5(h, o, tg.g.CONFIRM_DISCOUNT),
                                  }),
                              (0, c.jsx)(eA.A, {
                                  variant: y || l ? "secondary" : "expressive",
                                  size: "md",
                                  buttonTextOverride: eg.intl.string(eg.t["3KomGa"]),
                              }),
                          ],
                      }),
                      R,
                  ],
              }),
          });
}
let [st, ss] = (0, eD.A)(),
    si = function (e) {
        let { className: t, buttonVisibilityRef: s, userDiscountOffer: i, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            r = (0, U.ds)(),
            l = (0, ek.QQ)(),
            o = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            d = null != o && o.status === e2.Dmq.CANCELED && null != i,
            u = l && !d,
            m = eg.intl.string(eg.t.qYKftX),
            g = (0, eW.m)(),
            f = eg.intl.string(eg.t.ifwQZb),
            { fractionalState: p, endsAt: h } = (0, eS.A)(),
            N = (0, e_.Ay)(h, e_.yE.CREDITS_ENDS_IN),
            b = null;
        if (p === t7.xc.NONE || r) b = (0, c.jsx)(eV, { text: m });
        else {
            u = !0;
            let e = eg.intl.format(eg.t["yR+oDD"], {
                helpCenterLink: eO.A.getArticleURL(e2.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            b = (0, c.jsx)(eR.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: tZ.YL,
                position: "right",
                children: (e) =>
                    (0, c.jsx)("div", {
                        ...e,
                        className: tZ.V_,
                        children: (0, c.jsx)("div", { className: tZ.eL, children: (0, c.jsx)(eV, { text: N }) }),
                    }),
            });
        }
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsx)(st.Provider, {
                value: {
                    headingText: f,
                    headingTop: b,
                    showPill: u,
                    shouldShowChurnVariant: d,
                    premiumSubscription: o,
                    userDiscountOffer: i,
                    discountedPrice: n,
                    buttonVisibilityRef: s,
                },
                children: (0, c.jsx)(se, { className: t, isInReverseTrial: r, shouldShowReferralProgressBar: g }),
            }),
        });
    };
var sn = s(820284),
    sa = s(742589),
    sr = s(392943),
    sl = s(285373),
    sc = s(603202),
    so = s(673992);
let sd = function () {
    return (0, c.jsx)(sn.A, {
        section: e2.JJy.NAVIGATION,
        children: (0, c.jsx)(sa.A, {
            className: u()(sc.TQ, so.C$),
            transparent: !0,
            role: "navigation",
            children: (0, c.jsxs)("div", {
                className: sc.Wc,
                children: [
                    (0, c.jsxs)("div", {
                        className: so.wk,
                        children: [
                            (0, c.jsx)(ed.t, { colorClass: so.tr }),
                            (0, c.jsx)("span", {
                                role: "img",
                                "aria-label": eg.intl.string(eg.t.Ipxkog),
                                className: so.Ss,
                                children: (0, c.jsx)(sr.A, { color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: sc.MQ,
                        children: [
                            (0, c.jsx)(sl.l, { size: "sm", location: A.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB }),
                            (0, c.jsx)(eA.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var su = s(325499),
    sm = s(562708),
    sx = s(885574),
    sg = s(43990),
    sf = s(993077),
    sp = s(139286),
    sh = s(872725),
    sN = s(920050),
    sA = s(51965),
    sj = s(375776),
    sb = s(727811),
    sC = s(222652),
    sE = s(428685),
    sT = s(934353);
function sR(e) {
    let { openRewardModal: t } = e,
        s = (0, sC.z)();
    if (s.kind === sC.N.SUBSCRIBE)
        return (0, c.jsxs)("div", {
            className: sT.R$,
            children: [
                (0, c.jsx)(tc.A, {
                    defaultTextOverride: s.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: t7.pe.TIER_2,
                }),
                (0, c.jsx)(eo.$, { variant: "secondary", size: "md", text: eg.intl.string(eg.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        s.claimStatus === sb.P.CLAIMED
            ? { text: eg.intl.string(sE.default.Plwzgf) }
            : { text: eg.intl.string(eg.t.hvVgAZ) };
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: sT.R$,
                children: [
                    (0, c.jsx)(sA.A, {
                        variant: "overlay-primary",
                        size: "md",
                        text: s.text,
                        icon: s.icon,
                        iconPosition: s.iconPosition,
                        onClick: s.onClick,
                        disabled: s.disabled,
                        loading: s.loading,
                    }),
                    (0, c.jsx)(eo.$, {
                        variant: "secondary",
                        size: "md",
                        ...i,
                        onClick: t,
                        disabled: s.requestInProgress,
                    }),
                ],
            }),
            s.claimStatus === sb.P.CLAIM_IN_PROGRESS &&
                (0, c.jsxs)("div", {
                    className: sT.ed,
                    children: [
                        (0, c.jsx)(sx.CircleInformationIcon, { size: "xs", color: "var(--text-subtle)" }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: eg.intl.string(sE.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function sI(e) {
    let { glowing: t = !1 } = e;
    (0, sp.A)({
        type: sm.ImpressionTypes.VIEW,
        name: sm.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: sN.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: i } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_HERO_CARD),
        n = o.useCallback(() => {
            (0, eI.openModalLazy)(async () => {
                let { default: e } = await Promise.all([s.e("878140"), s.e("813088")]).then(s.bind(s, 347171));
                return (t) => (0, c.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, c.jsx)(sg.N, {
        theme: e2.NJ8.DARK,
        children: (e) =>
            (0, c.jsx)(j.f5, {
                value: i,
                children: (0, c.jsx)("div", {
                    className: u()(e, sT.kL),
                    children: (0, c.jsx)(sh.A, {
                        cardType: sf.s.CUSTOM,
                        cardClassName: sT.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, c.jsxs)("div", {
                            className: sT.XF,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: sT.j,
                                    children: [
                                        (0, c.jsx)("div", { className: sT._g }),
                                        (0, c.jsx)("div", { className: sT.$h }),
                                        (0, c.jsx)("div", { className: sT.Rv }),
                                        (0, c.jsx)("div", { className: sT.Lw }),
                                        (0, c.jsx)("div", { className: sT.mR }),
                                    ],
                                }),
                                (0, c.jsxs)("div", {
                                    className: sT.Qs,
                                    children: [
                                        (0, c.jsx)("img", {
                                            className: sT.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, c.jsx)(el.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: sT.DD,
                                            children: eg.intl.string(sE.default.RGT513),
                                        }),
                                        (0, c.jsx)(ec.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: sT.h_,
                                            children: eg.intl.string(sE.default["+pTnsf"]),
                                        }),
                                        (0, c.jsx)(sR, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var sv = s(744064);
function s_(e) {
    let { className: t, containerClassName: s } = e,
        i = (0, sC.z)(),
        n = { isThirdPartyPerk: !0, subscriptionRequired: !0 },
        a =
            i.kind === sC.N.SUBSCRIBE
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
    return (0, c.jsx)(sv.S, {
        id: sN.XBOX_PREMIUM_PERK_CARD_ID,
        title: eg.intl.string(sE.default.UVL9tD),
        description: eg.intl.string(sE.default["I+IXr0"]),
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
function sS(e) {
    let { analyticsLocations: t } = (0, j.Ay)(A.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, c.jsx)(j.f5, { value: t, children: (0, c.jsx)(s_, { ...e }) });
}
var sP = s(700556),
    sy = s(821874);
function sD(e) {
    let { id: t, sectionClassName: s, heading: i, beforeGrid: n, grid: a, gridClassName: r } = e,
        l = sy.Ui;
    return (0, c.jsxs)("div", {
        id: t,
        className: s,
        children: [
            i,
            n,
            null != a ? (0, c.jsx)("div", { className: u()(l, null != n && sP.Jx, r), children: a }) : null,
        ],
    });
}
var sO = s(517846),
    sM = s(695366),
    sL = s(27620),
    sk = s(789861),
    sU = s(592909),
    sG = s(398523),
    sw = s(881373),
    sB = s(555393),
    sH = s(852218),
    sF = s(923650),
    sV = s(612413),
    sz = s(14429),
    sW = s(810889),
    sY = s(264865);
let sK =
        "https://cdn.discordapp.com/assets/content/74dd725dde373bfdbced9606d5201ed2c555fc895f4da644a8de314de6906be3.webp",
    sX =
        "https://cdn.discordapp.com/assets/content/40a956d1f02220ee7fe04579320500571f21c3195af2f11afea01601f1ba28c9.svg",
    sZ =
        "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg";
function sJ() {
    let { analyticsLocations: e } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, sU.A0)({ location: "useHardwarePartnerPerkCards" }),
        s = (0, sU.hd)({ location: "useHardwarePartnerPerkCards" }),
        i = (0, sw.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        n = sG.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        a = (0, sV.mh)({ location: "useThirdPartyPartnerPerkCards" }),
        r = null === (0, sB.N)(),
        l = (0, su.b)("useHardwarePartnerPerkCards"),
        { currentDate: d, nDaysInMonth: u } = (0, o.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, o.useMemo)(() => {
        let o = l ? void 0 : eg.intl.string(eg.t.y2b7CA),
            m = t
                ? {
                      id: sN.CALL_OF_DUTY_3PP_CARD_ID,
                      title: eg.intl.string(sz.default.F0b4Z8),
                      description: eg.intl.formatToPlainString(sz.default["hworR+"], { validDates: (0, sk.a1)() }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: eg.intl.formatToPlainString(sz.default.g7iyvR, { date: (0, sk.mh)() }),
                      caption: (0, c.jsx)("img", { src: sX, alt: "Call of Duty: MW4" }),
                      backgroundAssetUrl: sK,
                      ctaText: eg.intl.string(sz.default.fcopjf),
                      onCtaClick: () =>
                          (0, sF.P)({
                              partnerIds: [sH.Bt],
                              title: eg.intl.string(sz.default.YJsqDS),
                              subtitle: eg.intl.format(sz.default.ieA3V0, {
                                  termsUrl:
                                      "https://support.discord.com/hc/en-us/articles/39188406147479-Nitro-Rewards",
                              }),
                              modalTeaser: {
                                  title: eg.intl.string(sz.default.Dkm10r),
                                  body: eg.intl.string(sz.default.LHAkT9),
                              },
                              analyticsLocations: e,
                          }),
                      analyticsOptions: { thirdPartyPartner: sH.Bt },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
            x = s
                ? {
                      id: sN.CALL_OF_DUTY_3PP_EXPIRED_CARD_ID,
                      title: eg.intl.string(sz.default["IcD/7p"]),
                      description: eg.intl.formatToPlainString(sz.default.hausFi, { date: (0, sk.wT)() }),
                      isThirdPartyPerk: !0,
                      expired: !0,
                      pillText: eg.intl.string(sz.default.fxF0Jz),
                      caption: (0, c.jsx)("img", { src: sX, alt: "Call of Duty: MW4" }),
                      backgroundAssetUrl: sK,
                      analyticsOptions: { thirdPartyPartner: sH.Bt },
                  }
                : null,
            g = i
                ? {
                      id: sN.LOGITECH_3PP_CARD_ID,
                      title: eg.intl.string(sW.default.OlObRa),
                      description: eg.intl.format(sW.default.ZGOJ8R, {
                          discountPercent: sw.aW,
                          termsUrl: eO.A.getArticleURL(e2.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      progress: d.getDate() / u,
                      ctaText: eg.intl.string(eg.t.w7s5Qr),
                      onCtaClick: () =>
                          (0, sF.P)({
                              partnerIds: [sH.XY],
                              title: eg.intl.string(sW.default["2I7nK+"]),
                              subtitle: eg.intl.format(sW.default.W8jOD0, {
                                  termsUrl: eO.A.getArticleURL(e2.MVz.LOGITECH_PROMOTION),
                              }),
                              analyticsLocations: e,
                          }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl: sZ,
                      pillText: o,
                      caption: (0, c.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: sH.XY },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
            f = n
                ? {
                      id: sN.RECURRING_3P_PROMOTIONS_CARD_ID,
                      title: eg.intl.string(eg.t.m7PucM),
                      description: eg.intl.format(eg.t["1Zw6xL"], {}),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: o,
                      caption: (0, c.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                      progress: d.getDate() / u,
                      ctaText: eg.intl.string(eg.t.w7s5Qr),
                      onCtaClick: () =>
                          (0, sF.P)({
                              partnerIds: [sH.KS],
                              title: eg.intl.string(eg.t["7ioAjs"]),
                              subtitle: eg.intl.format(eg.t.LOYRxB, {
                                  helpCenterLink: eO.A.getArticleURL(e2.MVz.RECURRING_PROMOTION),
                              }),
                              analyticsLocations: e,
                          }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: sH.KS },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null;
        return {
            callOfDutyCard: m,
            expiredCallOfDutyCard: x,
            logitechCard: g,
            steelseriesCard: f,
            youtubeCard: a
                ? {
                      id: sN.YOUTUBE_3PP_CARD_ID,
                      title: eg.intl.string(sY.default["NNPh/j"]),
                      description: eg.intl.format(sY.default.MrgHvR, {
                          helpCenterUrl: eO.A.getArticleURL(e2.MVz.YOUTUBE_PROMOTION),
                      }),
                      isThirdPartyPerk: !0,
                      pillText: o,
                      backgroundAssetUrl: sZ,
                      blurTint: "#2E213D",
                      caption: "YouTube Premium",
                      ctaText: eg.intl.string(sz.default.fcopjf),
                      onCtaClick: () =>
                          (0, sF.P)({
                              partnerIds: [sH.NC],
                              analyticsLocations: e,
                              title: eg.intl.string(sY.default.TDZUui),
                              subtitle: eg.intl.format(sY.default.BTLkvw, {
                                  helpCenterUrl: eO.A.getArticleURL(e2.MVz.YOUTUBE_PROMOTION),
                              }),
                              modalTeaser: {
                                  title: eg.intl.format(sY.default.J8CVYT, {
                                      helpCenterUrl: eO.A.getArticleURL(e2.MVz.YOUTUBE_PROMOTION),
                                  }),
                                  icon: sM.E,
                              },
                              onClose: () => {
                                  sL.Ay.fireSurveyAction(sO.w.YOUTUBE_3PP_MODAL_DISMISSED);
                              },
                          }),
                      analyticsOptions: { thirdPartyPartner: sH.NC },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
        };
    }, [l, e, t, s, d, i, u, n, a, r]);
}
var sQ = s(762493);
let sq = "xgpp";
function s$(e) {
    let { glowingSectionId: t, glowingPerkId: s } = e,
        i = (0, su.b)("premium_subscriber_home_rewards"),
        { callOfDutyCard: n, expiredCallOfDutyCard: a, logitechCard: r, steelseriesCard: l, youtubeCard: o } = sJ();
    if (!i) return null;
    let d = null != n || null != a || null != r || null != l || null != o;
    return (0, c.jsx)(sD, {
        id: sq,
        sectionClassName: u()(sQ.uW, sQ.Uv, sQ.qr),
        heading: (0, c.jsx)(el.D, {
            variant: "nitro-sm",
            className: u()(sy.R_, sP.U6),
            children: eg.intl.string(eg.t.NG1e6l),
        }),
        beforeGrid: (0, c.jsx)("div", { className: sP.JE, children: (0, c.jsx)(sI, { glowing: t === sq }) }),
        grid: d
            ? (0, c.jsxs)(c.Fragment, {
                  children: [
                      null != n && (0, c.jsx)(sv.S, { ...n, containerClassName: sy.Nr, glowing: s === n.id }),
                      (0, c.jsx)(sS, { containerClassName: sy.Nr }),
                      null != o &&
                          (0, c.jsx)(sv.S, {
                              ...o,
                              containerClassName: sy.Nr,
                              glowing: s === o.id,
                              autoClickCta: s === o.id,
                          }),
                      null != r && (0, c.jsx)(sv.S, { ...r, containerClassName: sy.Nr, glowing: s === r.id }),
                      null != l && (0, c.jsx)(sv.S, { ...l, containerClassName: sy.Nr, glowing: s === l.id }),
                      null != a && (0, c.jsx)(sv.S, { ...a, containerClassName: sy.Nr, glowing: s === a.id }),
                  ],
              })
            : null,
    });
}
var s0 = s(313133),
    s1 = s(67423);
let s2 = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: r } = (0, j.Ay)(A.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        l = (0, ea.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsx)(ei.animated.div, {
        className: u()(s0.iE, { [s0.q4]: !t }),
        style: l,
        children: (0, c.jsxs)("div", {
            className: s0.iJ,
            children: [
                (0, c.jsx)("img", { alt: "", src: s1, className: s0.oU }),
                (0, c.jsxs)("div", {
                    className: s0.iQ,
                    children: [
                        (0, c.jsx)(el.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: eg.intl.format(eg.t["3yZP0G"], { percent: n.discount.amount }),
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: eg.intl.format(eg.t["3Q4wCy"], {
                                numMonths: n.discount.intervalCount,
                                discountedPrice: a,
                                billingPeriod: (0, eM.Ke)(n.discount.intervalType),
                            }),
                        }),
                    ],
                }),
                (0, c.jsx)(eo.$, {
                    variant: "expressive",
                    icon: ed.t,
                    size: "md",
                    text: eg.intl.string(eg.t.zrCzVB),
                    onClick: () =>
                        void (0, eI.openModalLazy)(async () => {
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
                                s.e("992789"),
                                s.e("952372"),
                                s.e("425412"),
                                s.e("716460"),
                                s.e("264572"),
                                s.e("265607"),
                                s.e("544571"),
                                s.e("206028"),
                                s.e("102328"),
                                s.e("852556"),
                                s.e("76027"),
                                s.e("594161"),
                                s.e("435432"),
                                s.e("80347"),
                                s.e("680166"),
                            ]).then(s.bind(s, 293061));
                            return (t) =>
                                (0, c.jsx)(e, {
                                    ...t,
                                    premiumSubscription: i,
                                    analyticsLocations: r,
                                    initialStep: tg.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var s3 = s(761508),
    s6 = s(449543),
    s7 = s(387103);
function s5(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: s7.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function s8(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/a89ff8a07704142beff857453a6c8aa15400cf711f8fe3cbbfa7ff4f0b2a334f.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function s9(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/ce65064fd18fa477fe14c2d4066af96637c446e074008fb0b7599874537ce8d0.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var s4 = s(345394);
function ie(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: s4.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var it = s(163665);
function is(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/a0a5fdb2c9735632e0cadb26af7aa33929c63981e559ef0337cacced2cab2d09.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function ii(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/c561ce5c9866c0bdb3f8c9dc43164f873414c3d905d1ab4beace8020dc4933fc.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function ia(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/8a9a80f2b924da025612a160c7dc74c5e0fe675a90e3424737e6c5927739a6d0.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function ir(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/3ba8fce33a4733cdbadc10ac378d1b5523b0c0961e7edc74372c159e3009727f.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var il = s(996682);
function ic(e) {
    let {
        color: t = en.A.colors.ICON_STRONG,
        "aria-label": s,
        "aria-hidden": i,
        role: n,
        width: a = 100,
        height: r = 80,
    } = e;
    return (0, c.jsxs)("svg", {
        ...(0, il.A)({ "aria-label": s, "aria-hidden": i, role: n }),
        width: a,
        height: r,
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
function io(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/1314d17fb23c01337cac4bfdaaff48c5e6ac1f515b0647f0964922b988f095c1.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var id = s(78701);
function iu(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: id.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var im = s(462887),
    ix = s(736653),
    ig = s(259065),
    ip = s(206835),
    ih = s(591179),
    iN = s(462463),
    iA = s(219882),
    ij = s(19886),
    ib = s(425713),
    iC = s(696292),
    iE = s(192444),
    iT = s(617986),
    iR = s(892227),
    iI = s(81466),
    iv = s(249755),
    i_ = s(749012);
let iS = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, Z.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let s =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, iR.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, c.jsxs)("div", {
        className: i_.kL,
        children: [
            null != s &&
                (0, c.jsxs)("div", {
                    className: i_.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: i_.Pf,
                            children: [
                                (0, c.jsx)(iI.CalendarIcon, { size: "sm", color: en.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(ec.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: eg.intl.string(iv.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: eg.intl.format(iv.default.xedPIb, { days: s }),
                        }),
                    ],
                }),
            null != s && t.total_rewarded_from_program > 0 && (0, c.jsx)("div", { className: i_.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, c.jsxs)("div", {
                    className: i_.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: i_.Pf,
                            children: [
                                (0, c.jsx)(tR.C, { size: "sm", color: en.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(ec.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: eg.intl.string(iv.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: eg.intl.format(iv.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var iP = s(190107),
    iy = s(799544);
function iD(e) {
    let { shouldShowBonusOrbsUX: t, multiplier: s } = (0, iE.lk)(iP.rE.NITRO_HOME_MARKETING),
        { isEligible: i, programReward: n } = (0, Z.F)({ location: e });
    return {
        nitroOrbsRewardsCard: (0, o.useMemo)(
            () =>
                !i || null == n || null == n.reward_amount || n.reward_amount <= 0
                    ? null
                    : {
                          id: sN.NITRO_ORBS_REWARDS_CARD_ID,
                          title: eg.intl.string(iv.default.hx5AFp),
                          description: eg.intl.format(iv.default.wq3CF2, { orbsCount: n.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(iy.lH, iy.yK),
                          footerContent: (0, c.jsx)(iS, {}),
                          ctaText: eg.intl.string(iv.default.BxjHiu),
                          onCtaClick: () => (0, P.pX)(e2.BVt.COLLECTIBLES_SHOP_WITH_TAB(ty.G2.ORBS)),
                      },
            [i, n],
        ),
        questOrbMultiplierCard: (0, o.useMemo)(
            () =>
                t
                    ? {
                          id: sN.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: eg.intl.string(eg.t.Csf5Ol),
                          description: eg.intl.format(eg.t.NpUfej, { bonusOrbMultiplier: s }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: eg.intl.string(eg.t.jVcuVY),
                          onCtaClick: () => (0, iT.mA)({ fromContent: iC.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: iy.Nf,
                      }
                    : null,
            [t, s],
        ),
    };
}
var iO = s(975807),
    iM = s(95035),
    iL = s(989790),
    ik = s(88001),
    iU = s(259589),
    iG = s(817577);
function iw() {
    (0, iO.A)(ik.TE);
}
function iB(e) {
    let t = (0, iL.O9)(),
        i = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        n = i?.hasActiveTrial ?? !1,
        a = (0, o.useCallback)(() => {
            n
                ? (0, eI.openModalLazy)(async () => {
                      let { default: e } = await s.e("499709").then(s.bind(s, 516044));
                      return (t) => (0, c.jsx)(e, { ...t });
                  })
                : (0, S.A)({
                      subscriptionTier: t7.pe.TIER_2,
                      initialPlanId: t7.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, o.useMemo)(
        () =>
            t
                ? {
                      id: sN.PREMIUM_GROUP_CARD_ID,
                      title: eg.intl.string(iU.default.YkvksF),
                      description: (0, c.jsxs)(c.Fragment, {
                          children: [
                              eg.intl.formatToPlainString(iU.default.JlyGQj, {
                                  totalSeats: ik.aw,
                                  premiumGroupProductName: (0, ik.DP)(),
                              }),
                              (0, c.jsx)("div", {
                                  className: iy.LF,
                                  children: (0, c.jsx)(iM.A, {
                                      onClick: iw,
                                      children: eg.intl.string(iU.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: eg.intl.string(eg.t.oW0eUd),
                      primaryAsset: iG,
                      ctaIcon: ed.t,
                      ctaIconPosition: "start",
                      ctaText: eg.intl.string(eg.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var iH = s(562819),
    iF = s(793943),
    iV = s(241988),
    iz = s(757036),
    iW = s(473933),
    iY = s(655752);
let iK = (0, w.mj)({
    kind: "user",
    name: "2026-08-nitro-tenure-badge-total-progress",
    defaultConfig: { measureFromStreakStart: !1 },
    variations: { 0: { measureFromStreakStart: !1 }, 1: { measureFromStreakStart: !0 } },
});
var iX = s(764231),
    iZ = s(627380),
    iJ = s(30084),
    iQ = s(814014),
    iq = s(714206);
let i$ =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    i0 =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    i1 =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function i2() {
    let e,
        t,
        s,
        i,
        n,
        { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        r = (0, ih.X)("useWhatsNewPerkCards"),
        { callOfDutyCard: l, expiredCallOfDutyCard: d, logitechCard: m, steelseriesCard: g, youtubeCard: f } = sJ(),
        p = (0, su.b)("premium_subscriber_home_rewards"),
        h = (0, iN.A)({ analyticsLocations: a }),
        N = (0, o.useCallback)(() => {
            (0, ey.openUserSettings)(eP.X.PROFILE_PANEL, { analyticsLocations: a }, () =>
                (0, ig.L)({ analyticsLocations: a }),
            );
        }, [a]),
        b = (0, o.useCallback)(() => {
            (0, ey.openUserSettings)(eP.X.PROFILE_PANEL, { analyticsLocations: a }, () =>
                (0, iH.L)({ analyticsLocations: a }),
            );
        }, [a]),
        C = (0, o.useCallback)(() => {
            (0, ey.openUserSettings)(eP.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        E = (function (e) {
            let { fractionalState: t } = (0, eS.A)(),
                s = t === t7.xc.FP_ONLY,
                i = (0, ij.$F)(),
                n = (0, ij.Xb)(),
                a = i?.status === ij.Wo.UPCOMING || s,
                r = i?.status === ij.Wo.WITHHELD,
                l = a || r,
                c = (0, ib.N)(i?.id),
                d = (function () {
                    let e = (0, ij.$F)(),
                        t = (0, iY.P)(),
                        s = (0, ij.Xb)(),
                        i = (function (e) {
                            let { measureFromStreakStart: t } = iK.useConfig({ location: e });
                            return t;
                        })("tenure_badge_progress_bar");
                    if (null == e || null == t || null == s || e.status === ij.Wo.WITHHELD) return null;
                    let n = td()(),
                        a = td()(s),
                        r = i || e.status === ij.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        l = t.tenureReqNumMonths,
                        c = a.clone().add(r, "months"),
                        o = a.clone().add(l, "months").diff(c);
                    return Math.max(0, Math.min(1, (n.diff(c) - 864e5) / o));
                })(),
                m = (0, x.bG)([ev.Ay], () => ev.Ay.useReducedMotion) && !l,
                g = (0, iZ.t)(),
                f = (0, iY.P)();
            return (0, o.useMemo)(() => {
                let t,
                    a = null != f ? eg.intl.string(f.nameUnformattedNitro) : void 0;
                null == i
                    ? s && (t = (0, iX.T)(t7.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === ij.Wo.UPCOMING
                              ? eg.intl.formatToPlainString(eg.t.a1eKDi, { days: g?.days ?? 0 })
                              : i.status === ij.Wo.WITHHELD
                                ? ((0, iX.T)(i.id, i.tenureReqNumMonths) ?? void 0)
                                : ((function (e, t) {
                                      if (null != e && null != t) {
                                          if (e.days <= 30)
                                              return eg.intl.formatToPlainString(eg.t.NEXoaI, {
                                                  days: e.days,
                                                  nextBadgeName: t,
                                              });
                                          if (e.months <= 3)
                                              return eg.intl.formatToPlainString(eg.t.KDV8oD, {
                                                  months: e.months,
                                                  nextBadgeName: t,
                                              });
                                      }
                                  })(g, a) ??
                                  (0, iX.T)(i.id, i.tenureReqNumMonths) ??
                                  void 0));
                let r = null;
                return (
                    null != c ? (r = l || m ? c.standard : c.ambientLarge) : s && (r = iq),
                    {
                        id: sN.TENURE_BADGE_CARD_ID,
                        title:
                            null != i ? eg.intl.string(i.nameUnformattedNitro) : s ? eg.intl.string(eg.t.tx9Fvw) : "",
                        pillText: eg.intl.string(eg.t["jyYgZ+"]),
                        primaryAsset: r,
                        primaryAssetClassName: u()(iQ.pq, { [iQ.rX]: l, [iQ.kE]: m }),
                        caption: null != n ? eg.intl.formatToPlainString(eg.t.Hu4jfi, { date: new Date(n) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: d ?? void 0,
                        ctaText: eg.intl.string(eg.t.jVcuVY),
                        onCtaClick: () => (0, iJ.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, c, l, m, n, d, s, g, f, e]);
        })(a),
        T =
            ((e = (0, $.TF)({ location: "useWhatsNewPerkCards" })),
            (t = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription())),
            (s = (0, eh.q)(t, e === $.Iz.NITRO_HOME_TILE)),
            (0, o.useMemo)(
                () =>
                    null == s
                        ? null
                        : {
                              id: sN.MONTHLY_TO_YEARLY_UPSELL_CARD_ID,
                              title: s.title,
                              description: s.body,
                              pillText: s.badge,
                              primaryAsset: (0, c.jsx)("img", {
                                  src: iV,
                                  alt: "",
                                  "aria-hidden": !0,
                                  style: { width: 157 },
                                  draggable: !1,
                              }),
                              ctaIcon: ed.t,
                              ctaIconPosition: "start",
                              ctaText: s.cta,
                              onCtaClick: () =>
                                  (0, S.A)({ subscription: t, initialPlanId: s.yearlyPlanId, analyticsLocations: a }),
                          },
                [a, s, t],
            )),
        { nitroOrbsRewardsCard: R, questOrbMultiplierCard: I } = iD("useWhatsNewPerkCards"),
        v =
            ((i = (0, iz.L)(t7.PremiumTypes.TIER_2)),
            (n = (0, iA.rX)()),
            (0, o.useMemo)(
                () =>
                    i && n
                        ? {
                              id: sN.NITRO_FILE_UPLOAD_WHATS_NEW_CARD_ID,
                              title: eg.intl.string(iW.default["/cV3ka"]),
                              description: eg.intl.string(iW.default.H523FI),
                              primaryAsset: (0, c.jsx)(it.I, { alt: "", ariaHidden: !0 }),
                          }
                        : null,
                [i, n],
            )),
        _ = iB(a);
    return (0, o.useMemo)(() => {
        let e = [
                p ? null : l,
                p ? null : f,
                p ? null : m,
                p ? null : g,
                p ? null : d,
                R,
                I,
                _,
                {
                    id: sN.DISPLAY_NAME_STYLES_CARD_ID,
                    title: eg.intl.string(eg.t.OLtTrt),
                    description: eg.intl.string(eg.t["di/pXR"]),
                    onCtaClick: r ? h : N,
                    ctaText: eg.intl.string(eg.t.jVcuVY),
                    primaryAsset: i$,
                },
                {
                    id: sN.CLIENT_THEMES_CARD_ID,
                    title: eg.intl.string(eg.t.acc6h6),
                    description: eg.intl.formatToPlainString(eg.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: i1,
                    ctaText: eg.intl.string(eg.t.jVcuVY),
                    onCtaClick: () => {
                        (0, iF.nf)(iF.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: sN.PERMADECOS_CARD_ID,
                    title: eg.intl.string(eg.t.L14NZN),
                    description: eg.intl.string(eg.t.eCZkAI),
                    primaryAsset: (0, c.jsx)(iu, { alt: "", ariaHidden: !0 }),
                    ctaText: eg.intl.string(eg.t.jVcuVY),
                    onCtaClick: r ? h : b,
                },
                {
                    id: sN.CUSTOM_APP_ICONS_CARD_ID,
                    title: eg.intl.string(eg.t["GU+wqh"]),
                    description: eg.intl.string(eg.t["1uPk1Z"]),
                    primaryAsset: i0,
                    ctaText: eg.intl.string(eg.t.y9TxXV),
                    onCtaClick: C,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            s = t ? 5 : 6;
        return (
            e.splice(+!!t, 0, E),
            null != T && e.splice(1, 0, T),
            null != v && e.splice(2, 0, v),
            e.length > s && e.splice(s, e.length - s),
            e
        );
    }, [E, T, R, I, v, _, N, C, b, h, r, l, d, m, g, f, p]);
}
var i3 = s(355097);
let i6 = "/assets/1eb1b74667b4c0f0.svg",
    i7 = "/assets/983b60e4fcaf973b.svg";
var i5 =
    (((r = {}).BEST_OF_NITRO = "bestof"),
    (r.APPEARANCE_STYLE = "appearance"),
    (r.UPGRADES = "upgrades"),
    (r.VIP_EXTRAS = "vip"),
    r);
let i8 = [
    { id: "bestof", label: () => eg.intl.string(eg.t.q1u7nQ) },
    { id: "appearance", label: () => eg.intl.string(eg.t.CUnZkZ) },
    { id: "upgrades", label: () => eg.intl.string(eg.t.KC5q8v) },
    { id: "vip", label: () => eg.intl.string(eg.t.DjEAcv) },
];
var i9 = s(18290);
function i4(e) {
    e.stopPropagation();
}
function ne(e) {
    let { glowingPerkId: t = null } = e,
        s = (function () {
            let e = (0, ix.DP)(),
                t = (0, ih.X)("useFavoritesPerkCards"),
                s = (0, ij.Lh)(),
                i = (0, ib.N)(s)?.standard ?? null,
                { analyticsLocations: n } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, ip.A)({ scrollPosition: i3._F.TRY_IT_OUT, analyticsLocations: n }),
                r = (0, o.useCallback)(() => {
                    (0, ey.openUserSettings)(eP.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: n });
                }, [n]),
                l = (0, o.useCallback)(() => {
                    (0, ey.openUserSettings)(eP.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: n });
                }, [n]),
                d = (0, o.useCallback)(() => {
                    (0, ey.openUserSettings)(eP.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: n });
                }, [n]),
                u = (0, o.useCallback)(() => {
                    (0, P.pX)(e2.BVt.COLLECTIBLES_SHOP);
                }, []),
                m = (0, o.useCallback)(() => {
                    (0, ey.openUserSettings)(eP.X.SOUNDBOARD_CATEGORY, { analyticsLocations: n });
                }, [n]),
                x = (0, iN.A)({ analyticsLocations: n }),
                g = (0, o.useCallback)(() => {
                    (0, ey.openUserSettings)(eP.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, ig.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                f = i2(),
                p = (0, o.useMemo)(() => f.map((e) => e?.id), [f]),
                { nitroOrbsRewardsCard: h, questOrbMultiplierCard: N } = iD("useFavoritesPerkCards"),
                b = iB(n),
                C = (0, o.useMemo)(
                    () => [
                        {
                            id: sN.SERVER_BOOSTS_CARD_ID,
                            title: eg.intl.formatToPlainString(eg.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: eg.intl.formatToPlainString(eg.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: eg.intl.string(eg.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: (0, c.jsx)(s5, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != b ? { ...b, categories: ["bestof"] } : null,
                        {
                            id: sN.PROFILES_CARD_ID,
                            title: eg.intl.string(eg.t.xDRab3),
                            description: eg.intl.string(eg.t.yn6fWA),
                            ctaText: eg.intl.string(eg.t.jVcuVY),
                            onCtaClick: t ? x : a,
                            primaryAsset: (0, c.jsx)(s8, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: sN.HD_VIDEO_CARD_ID,
                            title: eg.intl.string(eg.t["/mQ5gg"]),
                            description: eg.intl.string(eg.t["7WwAXh"]),
                            primaryAsset: (0, c.jsx)(s9, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: sN.CLIENT_THEMES_CARD_ID,
                            title: eg.intl.string(eg.t.acc6h6),
                            description: eg.intl.formatToPlainString(eg.t.WQazjs, { themeCount: 20 }),
                            ctaText: eg.intl.string(eg.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: i1,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: sN.MORE_EMOJIS_CARD_ID,
                            title: eg.intl.string(eg.t.D8vIDT),
                            description: eg.intl.string(eg.t.DRMecB),
                            primaryAsset: (0, c.jsx)(ie, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: sN.LARGE_UPLOADS_CARD_ID,
                            title: eg.intl.string(eg.t.nL1WZV),
                            description: (0, iA.M6)({
                                legacyCopy: eg.intl.formatToPlainString(eg.t.k8LC1w, { maxSizeMb: 500 }),
                                rolloutCopy: eg.intl.formatToPlainString(eg.t.teOTfv, {
                                    maxFileSize: (0, eM.EJ)(t7.PremiumTypes.TIER_2, { useSpace: !1 }),
                                }),
                            }),
                            primaryAsset: (0, c.jsx)(it.I, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: sN.CUSTOM_APP_ICONS_CARD_ID,
                            title: eg.intl.string(eg.t["GU+wqh"]),
                            description: eg.intl.string(eg.t["1uPk1Z"]),
                            ctaText: eg.intl.string(eg.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: i0,
                            categories: ["appearance"],
                        },
                        {
                            id: sN.ENTRANCE_SOUNDS_CARD_ID,
                            title: eg.intl.string(eg.t.WJfCPi),
                            description: eg.intl.string(eg.t.liQKJR),
                            ctaText: eg.intl.string(eg.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: sN.DISPLAY_NAME_STYLES_CARD_ID,
                            title: eg.intl.string(eg.t.OLtTrt),
                            description: eg.intl.string(eg.t["di/pXR"]),
                            onCtaClick: t ? x : g,
                            ctaText: eg.intl.string(eg.t.jVcuVY),
                            primaryAsset: i$,
                            categories: ["appearance"],
                        },
                        {
                            id: sN.CUSTOM_SOUNDS_CARD_ID,
                            title: eg.intl.string(eg.t["Cu/oFd"]),
                            description: eg.intl.string(eg.t.czj2aa),
                            primaryAsset: (0, c.jsx)(is, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: sN.SPECIAL_STICKERS_CARD_ID,
                            title: eg.intl.string(eg.t.MQoVeb),
                            description: eg.intl.string(eg.t.HGCLZX),
                            primaryAsset: (0, c.jsx)("div", {
                                className: iy.Uc,
                                children: (0, c.jsx)(ii, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: sN.SUPER_REACTIONS_CARD_ID,
                            title: eg.intl.string(eg.t.qERvAA),
                            description: eg.intl.string(eg.t.WkUWzx),
                            primaryAsset: (0, c.jsx)(ia, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: sN.VIDEO_BACKGROUNDS_CARD_ID,
                            title: eg.intl.string(eg.t.ssVDYQ),
                            description: eg.intl.string(eg.t.aUSRMa),
                            primaryAsset: (0, im.M)(e) ? i6 : i7,
                            categories: ["upgrades"],
                        },
                        {
                            id: sN.EARLY_ACCESS_CARD_ID,
                            title: eg.intl.string(eg.t["g/KRY6"]),
                            description: eg.intl.string(eg.t.JzAmJc),
                            primaryAsset: (0, c.jsx)(ir, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: sN.BADGE_CARD_ID,
                            title: eg.intl.string(eg.t.Bn3CtB),
                            description: eg.intl.string(eg.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, c.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, c.jsx)(ic, { color: en.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: sN.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: eg.intl.string(eg.t["MTD+7w"]),
                            description: eg.intl.string(eg.t.Bhs0s6),
                            ctaText: eg.intl.string(eg.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, c.jsx)(io, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != h ? { ...h, categories: ["vip"] } : null,
                        null != N ? { ...N, categories: ["vip"] } : null,
                        {
                            id: sN.PERMADECOS_CARD_ID,
                            title: eg.intl.string(eg.t.L14NZN),
                            description: eg.intl.string(eg.t.eCZkAI),
                            primaryAsset: (0, c.jsx)(iu, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, h, N, b, a, r, l, d, u, m, g, x, t],
                );
            return (0, o.useMemo)(() => C.filter((e) => null != e && !p.includes(e.id)), [C, p]);
        })(),
        i = null != t ? s.find((e) => e?.id === t) : null,
        [n, a] = (0, o.useState)(i?.categories[0] ?? i5.BEST_OF_NITRO),
        r = (0, o.useMemo)(() => s.filter((e) => null != e && e.categories.includes(n)), [s, n]);
    return (0, c.jsxs)("div", {
        className: i9.uW,
        children: [
            (0, c.jsx)(el.D, { variant: "nitro-sm", children: eg.intl.string(eg.t["Uh3+CA"]) }),
            (0, c.jsx)(s3.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: i9.Lq,
                "aria-label": eg.intl.string(eg.t["Uh3+CA"]),
                children: i8.map((e) =>
                    (0, c.jsx)(s3.V.Item, { id: e.id, className: i9.IC, children: e.label() }, e.id),
                ),
            }),
            (0, c.jsx)(
                s6.A,
                {
                    gap: 20,
                    className: i9.jG,
                    children: r.map((e) => {
                        if (null != e)
                            return (0, c.jsx)(
                                sv.S,
                                { ...e, glowing: t === e.id, containerClassName: i9.Ui, onFocus: i4 },
                                e.id,
                            );
                    }),
                },
                n,
            ),
        ],
    });
}
var nt = s(72979);
let ns = function (e) {
    let { className: t } = e,
        s = (0, ix.DP)();
    return (0, c.jsx)("img", {
        className: u()(nt.D, t),
        src: (0, im.M)(s) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var ni = s(684251);
let nn = function (e) {
    let {
        shouldRenderNitroHomeHeaderExperiment: t,
        shouldRenderNitroHomeFollowup: s,
        gradientOffsetBottom: i,
        children: n,
    } = e;
    return t || s
        ? (0, c.jsxs)("div", {
              className: u()(ni.kL, ni.Gd, ni.Eg),
              children: [(0, c.jsx)(ns, {}), (0, c.jsx)(sd, {}), n],
          })
        : (0, c.jsx)(eN.h, { color: "nitro-pink", className: u()(ni.kL, ni.Gd), offsetBottom: i, children: n });
};
function na(e) {
    let { glowingPerkId: t = null } = e,
        s = i2();
    return (0, c.jsx)(sD, {
        sectionClassName: sy.uW,
        heading: (0, c.jsx)(el.D, { variant: "nitro-sm", className: sy.R_, children: eg.intl.string(eg.t.Aw5DRm) }),
        grid: (0, c.jsx)(c.Fragment, {
            children: s.map((e, s) => {
                if (null == e) return;
                let i = 0 === s && !0 === e.featured,
                    n = t === e.id;
                return (0, c.jsx)(
                    sv.S,
                    {
                        ...e,
                        glowing: n,
                        autoClickCta: n && e.id === sN.YOUTUBE_3PP_CARD_ID,
                        featured: i,
                        containerClassName: u()(sy.Nr, { [sy.Nq]: i }),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function nr(e, t, s, i) {
    !(function (e, t, s) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            n = arguments.length > 4 ? arguments[4] : void 0,
            a = (0, x.bG)([ev.Ay], () => ev.Ay.useReducedMotion),
            r = o.useRef(!1);
        (o.useEffect(() => {
            if (!t || r.current) return;
            let s = { behavior: a ? "auto" : "smooth", block: i, inline: n },
                l = e();
            if (null != l && l.offsetHeight > 0) {
                ((r.current = !0), l.scrollIntoView(s));
                return;
            }
            let c = !1,
                o = null,
                d = new ResizeObserver((e) => {
                    let t = e[0];
                    null == t ||
                        !(t.contentRect.height > 0) ||
                        r.current ||
                        c ||
                        ((r.current = !0), d.disconnect(), t.target.scrollIntoView(s));
                }),
                u = performance.now();
            return (
                !(function t() {
                    if (c || performance.now() - u > 5e3) return;
                    let i = e();
                    null != i
                        ? i.offsetHeight > 0
                            ? ((r.current = !0), i.scrollIntoView(s))
                            : d.observe(i)
                        : (o = requestAnimationFrame(t));
                })(),
                () => {
                    ((c = !0), null != o && cancelAnimationFrame(o), d.disconnect());
                }
            );
        }, [t, a, i, n, ...s]),
            o.useEffect(() => {
                t || (r.current = !1);
            }, [t]));
    })(() => document.getElementById(e), t, [e], s, i);
}
var nl = s(92737);
let nc = "/assets/cd2be35d285d4675.svg",
    no = (e) => {
        let { userId: t } = e,
            s = (0, U.ds)(),
            { isInNitroHomeHeaderTreatment: i } = H("nitro_member_hub_header"),
            n = V("nitro_member_hub_header"),
            a = (0, m.zy)();
        (o.useEffect(() => {
            f.h.wait(async () => {
                let e = [(0, X.Ay)()];
                (null != t && e.push((0, Q.A)(t)), await Promise.all(e));
            });
        }, [t]),
            o.useEffect(() => {
                I(!0);
            }, []),
            (0, et.j)(),
            (0, _.P)(v));
        let r = o.useRef(null),
            l = o.useRef(null),
            d = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            { isReady: p, programReward: h } = (0, Z.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: N,
                glowingSectionId: b,
                glowingPerkId: C,
                scrollBlock: E,
                scrollInline: T,
            } = o.useMemo(() => {
                let e = new URLSearchParams(a.search),
                    t = e.get("perk"),
                    s = e.get(nl.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != s
                      ? { scrollTargetId: s, glowingSectionId: s, scrollBlock: "start" }
                      : {};
            }, [a.search]);
        nr(N ?? "", null != N, E, T);
        let [R, I] = o.useState(!1),
            S = (0, ee.p)(),
            P = o.useRef(null),
            [y, D] = o.useState(!1),
            O = null != S && null != d && d.status === e2.Dmq.CANCELED,
            k = (0, es.iU)(t7.gD.PREMIUM_MONTH_TIER_2, S, d),
            G = !y && O,
            w = null != (0, x.bG)([J.A], () => (null != t ? J.A.getUserProfile(t) : null)) && (p || null != h),
            B = (0, $.TF)({ location: "PremiumSubscriberHome" }),
            F = (0, eh.q)(d, B === $.Iz.STICKY_BAR),
            [ei, en] = (0, K.iP)(
                null != F && w && d?.id != null ? z.M.MONTHLY_TO_YEARLY_UPSELL_STICKY_BAR : null,
                d?.id ?? "",
                { cooldownDurationMs: q.A.Millis.DAYS_30 },
                void 0,
                !0,
            ),
            ea = null != d && d.status === e2.Dmq.CANCELED,
            er = i && !s && !ea,
            el = n && (s || ea),
            { analyticsLocations: ec } = (0, j.Ay)(A.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [eo, ed] = o.useState(!1);
        return w
            ? (0, c.jsxs)(Y.Gt, {
                  className: u()(ni.xW, ni.Gd),
                  ref: r,
                  children: [
                      (0, c.jsx)(nn, {
                          shouldRenderNitroHomeHeaderExperiment: er,
                          shouldRenderNitroHomeFollowup: el,
                          gradientOffsetBottom: s && !n ? 0.55 : 0.8,
                          children: (0, c.jsxs)(j.f5, {
                              value: ec,
                              children: [
                                  (0, c.jsx)(W.L, {
                                      innerRef: P,
                                      onChange: (e) => D(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, c.jsx)(si, {
                                          buttonVisibilityRef: P,
                                          className: ni.v1,
                                          userDiscountOffer: S,
                                          discountedPrice: k,
                                      }),
                                  }),
                                  (0, c.jsx)(na, { glowingPerkId: C }),
                                  (0, c.jsx)(s$, { glowingPerkId: C, glowingSectionId: b }),
                                  (0, c.jsx)(ne, { glowingPerkId: C }),
                                  (0, c.jsx)(eb, {
                                      className: ni.Zy,
                                      location: A.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: e2.liQ.NITRO_HOME, section: e2.JJy.GIFT_BANNER },
                                  }),
                                  (0, c.jsx)("div", { className: ni.hz }),
                                  (0, c.jsx)(W.L, {
                                      innerRef: l,
                                      onChange: (e) => {
                                          e &&
                                              !eo &&
                                              (L.default.track(e2.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: ec,
                                              }),
                                              ed(!0));
                                      },
                                      children: (0, c.jsx)("div", { ref: l, className: ni._Z }),
                                  }),
                                  (0, c.jsx)("img", {
                                      src: nc,
                                      className: ni.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: eg.intl.string(eg.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      O &&
                          null != k &&
                          (0, c.jsx)(s2, {
                              isVisible: G && R,
                              premiumSubscription: d,
                              churnDiscountOffer: S,
                              discountedPrice: k,
                          }),
                      null != ei &&
                          null != F &&
                          null != d &&
                          (0, c.jsx)(ep, { premiumSubscription: d, content: F, markAsDismissed: en }),
                  ],
              })
            : er || el
              ? (0, c.jsxs)("div", {
                    className: u()(ni.kL, ni.Lq, ni.TN, ni.Eg),
                    children: [
                        (0, c.jsx)(sd, {}),
                        (0, c.jsx)("div", { className: ni.S, children: (0, c.jsx)(g.y, {}) }),
                    ],
                })
              : (0, c.jsx)("div", { className: u()(ni.kL, ni.Lq), children: (0, c.jsx)(g.y, {}) });
    };
var nd = s(286320),
    nu = s(727949),
    nm = s(440005),
    nx = s(26508);
let ng = (0, w.mj)({
    name: "2026-07-plan-select-ui-redesign",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var nf = s(860839);
let np =
    "https://cdn.discordapp.com/assets/content/3aa94cb4beecb43100d482e94a5a707f188e2e2315d9b15865689b51409c4d56.png";
function nh(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: np,
        srcSet: `${np} 1x, https://cdn.discordapp.com/assets/content/e33cdb99c455ad732bab8cc40ca15b8bf926a7e9e078cd8834edfd15e4010217.png 2x`,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var nN = s(37537),
    nA = s(783420),
    nj = s(204413),
    nb = s(245383),
    nC = s(824069),
    nE = s(785007),
    nT = s(947910);
function nR(e) {
    let { value: t, planRadioOptions: s, ...i } = e,
        n = s.map((e) => {
            let s = e.value === t;
            return {
                name: (0, c.jsxs)("div", {
                    className: nT.VH,
                    children: [
                        s &&
                            null != e.badgeText &&
                            (0, c.jsx)("div", {
                                className: nT.fQ,
                                children: (0, c.jsx)(tC.E, { type: { text: e.badgeText }, variant: "brand" }),
                            }),
                        (0, c.jsxs)(er.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: nT.qU,
                            children: [
                                (0, c.jsxs)(er.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nT.NI,
                                    children: [
                                        (0, c.jsx)(ec.E, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            children: e.primaryText,
                                        }),
                                        null != e.primarySubText &&
                                            (0, c.jsx)(ec.E, {
                                                variant: "text-sm/medium",
                                                color: "text-subtle",
                                                children: e.primarySubText,
                                            }),
                                    ],
                                }),
                                (0, c.jsxs)(er.B, {
                                    direction: "vertical",
                                    align: "end",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nT.br,
                                    children: [
                                        null != e.secondaryText &&
                                            (0, c.jsx)(ec.E, {
                                                tag: "span",
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                children: e.secondaryText,
                                            }),
                                        null != e.secondarySubText &&
                                            (0, c.jsx)(ec.E, {
                                                tag: "span",
                                                variant: "text-sm/medium",
                                                color: "text-subtle",
                                                className: nT.yD,
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
                radioBarClassName: u()(nT.tG, { [nT.uA]: s, [nT.hy]: s && e.useGradientSelectedBorder }),
            };
        });
    return (0, c.jsx)(nE.$d, {
        ...i,
        options: n,
        value: t,
        size: nE.r9.NOT_SET,
        className: nT.ul,
        withTransparentBackground: !0,
    });
}
var nI = s(773669),
    nv = s(97352),
    n_ = s(252424),
    nS = s(526292),
    nP = s(186223),
    ny = s(369827),
    nD = s(803496);
function nO(e) {
    let t = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        s = (0, ny.L)(),
        i = t?.paymentSourceId ?? s,
        { priceOptions: n } = (0, nD.A)({
            activeSubscription: t,
            skuIDs: [(0, eM.mH)(e)],
            paymentSourceId: i,
            isGift: !1,
        });
    return n;
}
function nM(e, t, s, i, n) {
    return t && s?.includes(e) === !0 && null != i && null != n && i !== n;
}
function nL(e) {
    let { expectedUsageInterval: t, usageInterval: s, discountDuration: i, regularPrice: n, discountedPrice: a } = e;
    return s !== t || null == n || null == a
        ? null
        : t === t7.Ff.YEAR
          ? eg.intl.format(eg.t.G88D2T, { discountedPrice: a, numYears: i, regularPrice: n })
          : eg.intl.format(eg.t["x+qUAi"], { discountedPrice: a, numMonths: i, regularPrice: n });
}
var nk = s(614488);
function nU(e) {
    let { skuId: t, selectedPlanId: s, subscribeButtonProps: i } = e,
        n = null == s || !0 === i.disabled,
        a = null == s ? "secondary" : i.variant;
    return (0, c.jsx)(nA.A, {
        subscriptionTier: t,
        initialPlanId: s,
        shouldDisallowPlanSelection: !0,
        children: (e) => {
            let { onClick: t } = e;
            return (0, c.jsx)(eo.$, {
                size: "md",
                fullWidth: !0,
                icon: ed.t,
                text: i.text,
                variant: a,
                disabled: n,
                onClick: t,
            });
        },
    });
}
function nG(e) {
    let { skuId: t, className: s } = e,
        i = t === t7.pe.TIER_2,
        n = (0, im.q)((0, ix.Ay)()),
        a = (0, nN.c)("PlanSelectCard"),
        r = (0, eG.V)(),
        l = r?.subscriptionTrial,
        d = l?.skuId === t,
        m = i && d && null != l,
        g = (0, eU.p)(),
        {
            planRadioOptions: f,
            selectedPlanId: p,
            setSelectedPlanId: h,
            shouldSuppressDiscountCta: N,
        } = (function (e) {
            let { skuId: t } = e,
                [s, i] = o.useState(null),
                n = t7.En[t],
                a = t7.zE[t],
                r = t === t7.pe.TIER_2,
                l = nO(t),
                c = (0, eG.V)(),
                d = c?.subscriptionTrial?.skuId === t,
                { subscribedSkuId: u, isMonthlyPlanDisabled: m } = (0, x.cf)(
                    [M.A],
                    () => {
                        let e = M.A.getPremiumTypeSubscription();
                        return {
                            subscribedSkuId: (0, eM.aZ)(e),
                            isMonthlyPlanDisabled:
                                n === t7.gD.PREMIUM_MONTH_TIER_2 &&
                                null != e &&
                                [t7.gD.PREMIUM_YEAR_TIER_0, t7.gD.PREMIUM_YEAR_TIER_1].includes(e.planId),
                        };
                    },
                    [n],
                ),
                g = u === t,
                f = (0, eU.O)(),
                p = (0, nS.k5)(),
                h = (0, x.bG)([nI.default], () => nI.default.locale),
                N = (0, es.U9)(f, t),
                A = (0, es.N1)(n),
                j = (0, es.N1)(a),
                [b, C] = (0, x.yK)([nv.A], () => [nv.A.get(n), nv.A.get(a)], [n, a]),
                E = null != b ? (0, eM.sS)(b, l) : null,
                T = null != C ? (0, eM.sS)(C, l) : null,
                R =
                    N && f?.discount.amount != null && !p
                        ? eg.intl.formatToPlainString(eg.t.IAybsG, {
                              discount: (0, n_.l9)(h, Number(f.discount.amount) / 100),
                          })
                        : null,
                I = f?.discount?.planIds,
                v = nM(a, N, I, j, T),
                _ = nM(n, N, I, A, E),
                S = f?.discount.userUsageLimitInterval,
                P = f?.discount.userUsageLimit ?? t7.OJ,
                y = !r || v || _ || null == C ? null : (0, nP.Cj)(C, !1, l),
                D = !_ || m,
                O = (function (e) {
                    let { skuId: t, monthlyHasDiscount: s, isMonthlyPlanDisabled: i } = e;
                    return t !== t7.pe.TIER_2 ? null : s && !i ? t7.En[t] : t7.zE[t];
                })({ skuId: t, monthlyHasDiscount: _, isMonthlyPlanDisabled: m }),
                L = null == s || (s === n && m) ? O : s,
                k = [
                    {
                        value: a,
                        primaryText: eg.intl.string(eg.t["/Q4HRN"]),
                        primarySubText:
                            (v
                                ? nL({
                                      expectedUsageInterval: t7.Ff.YEAR,
                                      usageInterval: S,
                                      discountDuration: P,
                                      regularPrice: T,
                                      discountedPrice: j,
                                  })
                                : null) ?? y,
                        secondaryText: v ? j : T,
                        secondarySubText: v ? T : null,
                        badgeText: v ? R : null,
                        useGradientSelectedBorder: r && (d || v || D),
                        isDisabled: g,
                    },
                    {
                        value: n,
                        primaryText: eg.intl.string(eg.t.DKzs96),
                        primarySubText: _
                            ? nL({
                                  expectedUsageInterval: t7.Ff.MONTH,
                                  usageInterval: S,
                                  discountDuration: P,
                                  regularPrice: E,
                                  discountedPrice: A,
                              })
                            : null,
                        secondaryText: _ ? A : E,
                        secondarySubText: _ ? E : null,
                        badgeText: _ ? R : null,
                        useGradientSelectedBorder: r && (d || _),
                        isDisabled: g || m,
                    },
                ],
                U = L === a ? v : L === n && _;
            return { planRadioOptions: k, selectedPlanId: L, setSelectedPlanId: i, shouldSuppressDiscountCta: N && !U };
        })({ skuId: t }),
        A = i && null == g ? "expressive" : "secondary",
        { buttonText: j } = (0, nb.A)({ subscriptionTier: t }),
        { subscribeButtonProps: b } = (0, nj.$)({
            subscriptionTier: t,
            variantOverride: A,
            buttonTextOverride: N ? j : void 0,
        }),
        C = (0, c.jsxs)(er.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nk.Ux,
            children: [
                (0, c.jsx)(er.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nk.MY,
                    children: (0, c.jsx)(el.D, {
                        variant: a ? "nitro-md" : "display-md",
                        color: n ? "text-strong" : "text-overlay-light",
                        className: a ? nk.ck : nk.JJ,
                        children: i ? eg.intl.string(eg.t.lG6a5x) : eg.intl.string(eg.t["t9uG/o"]),
                    }),
                }),
                (0, c.jsx)(er.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nk.qT,
                    children: i
                        ? (0, c.jsx)(nf.ZP, {
                              featureSet: nf.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: "text-md/medium",
                          })
                        : (0, c.jsx)(nf.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: "text-md/medium",
                          }),
                }),
                i && (0, c.jsx)(nC.K, {}),
                m
                    ? (0, c.jsx)("div", {
                          className: nk.qS,
                          role: "separator",
                          children: (0, c.jsx)(ec.E, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              className: nk.ZV,
                              children: (function (e, t) {
                                  if (null == e || null == t) return null;
                                  switch (e) {
                                      case t7.WT.DAY:
                                          if (t % 7 == 0) return eg.intl.format(eg.t["1MYPH0"], { weeks: t / 7 });
                                          return eg.intl.format(eg.t.pYfIoO, { days: t });
                                      case t7.WT.MONTH:
                                          return eg.intl.format(eg.t["96hTLe"], { months: t });
                                      case t7.WT.YEAR:
                                          return eg.intl.format(eg.t.B0ZmdG, { years: t });
                                      default:
                                          return null;
                                  }
                              })(l.interval, l.intervalCount),
                          }),
                      })
                    : (0, c.jsx)("hr", { className: nk.yF }),
                (0, c.jsxs)("div", {
                    className: nk.qr,
                    children: [
                        (0, c.jsx)(nR, { planRadioOptions: f, value: p ?? "", onChange: (e) => h(e.value) }),
                        (0, c.jsx)(nU, { skuId: t, selectedPlanId: p, subscribeButtonProps: b }),
                    ],
                }),
            ],
        }),
        E = u()(nk.Nr, s, { [nk.Fw]: i });
    return i
        ? (0, c.jsxs)(eN.h, {
              color: "nitro-pink",
              className: E,
              children: [
                  (0, c.jsx)("div", {
                      className: nk.kX,
                      "aria-hidden": !0,
                      children: (0, c.jsx)(nh, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                  }),
                  C,
              ],
          })
        : (0, c.jsx)("div", { className: E, children: C });
}
function nw(e) {
    let { className: t } = e,
        s = (0, im.q)((0, ix.Ay)()),
        i = (0, nN.c)("PlanSelectPremiumGroupCard"),
        n = (0, eU.p)(),
        a = null != n,
        r = nO(t7.pe.TIER_2),
        l = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        { avatarSrc: o, eventHandlers: d } = (0, eJ.A)({ userId: l?.id, size: eY._3.SIZE_32, animateOnHover: !0 }),
        m = (0, x.bG)([nv.A], () => nv.A.get(t7.gD.PREMIUM_GROUP_MONTH)),
        f = (0, es.N1)(t7.gD.PREMIUM_GROUP_MONTH),
        p = a
            ? eg.intl.format(iU.default["7j70dP"], {
                  percent: n.discount?.amount,
                  premiumGroupProductName: (0, ik.DP)(),
              })
            : eg.intl.string(eg.t["2pG5Ga"]),
        h = (0, c.jsx)(nA.A, {
            subscriptionTier: t7.pe.TIER_2,
            initialPlanId: t7.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, c.jsx)(eo.$, {
                    size: "md",
                    fullWidth: !0,
                    icon: ed.t,
                    text: p,
                    variant: "secondary",
                    onClick: t,
                });
            },
        }),
        N = null;
    if (a && null != f) N = f;
    else if (null != m)
        try {
            N = (0, eM.sS)(m, r, !1, !1, !1);
        } catch {
            N = null;
        }
    return (0, c.jsx)("div", {
        className: u()(nk.Nr, t),
        children: (0, c.jsxs)(er.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nk.Ux,
            children: [
                (0, c.jsxs)(er.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nk.MY,
                    children: [
                        (0, c.jsx)(el.D, {
                            variant: i ? "nitro-md" : "display-md",
                            color: s ? "text-strong" : "text-overlay-light",
                            className: i ? nk.ck : nk.JJ,
                            children: eg.intl.string(iU.default.eSKiXk),
                        }),
                        null != l &&
                            (0, c.jsxs)(er.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: nk.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: nk.uA,
                                        children: (0, c.jsx)(eK.eu, {
                                            src: o,
                                            size: eY._3.SIZE_32,
                                            "aria-hidden": !0,
                                            ...d,
                                        }),
                                    }),
                                    (0, c.jsx)(er.B, {
                                        direction: "horizontal",
                                        align: "center",
                                        justify: "center",
                                        gap: 0,
                                        fullWidth: !1,
                                        className: nk.VL,
                                        children: (0, c.jsxs)(ec.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-default",
                                            children: ["+", ik.LM],
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
                (0, c.jsx)(er.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nk.qT,
                    children: (0, c.jsx)(nf.Lg, { isApplicationHome: !0, textVariant: "text-md/medium" }),
                }),
                (0, c.jsx)("hr", { className: nk.yF }),
                (0, c.jsxs)("div", {
                    className: nk.qr,
                    children: [
                        (0, c.jsxs)("div", {
                            className: nk.ec,
                            children: [
                                (0, c.jsx)(ec.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: eg.intl.string(iU.default.SvSwga),
                                }),
                                null == N
                                    ? (0, c.jsx)(g.y, { type: g.y.Type.PULSING_ELLIPSIS })
                                    : (0, c.jsx)(ec.E, {
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
function nB(e) {
    let { innerRef: t, className: s } = e,
        { analyticsLocations: i } = (0, j.Ay)(A.A.PREMIUM_MARKETING_TIER_CARD),
        n = (0, nf.pw)(t),
        a = (0, iL.PA)(),
        r = (0, x.bG)([ev.Ay], () => ev.Ay.useReducedMotion),
        l = { [nk.iR]: !r };
    return (0, c.jsx)(j.f5, {
        value: i,
        children: (0, c.jsxs)(er.B, {
            direction: "vertical",
            align: "center",
            gap: 32,
            fullWidth: !0,
            className: u()(nk.oB, s),
            children: [
                (0, c.jsx)(el.D, {
                    variant: "nitro-md",
                    color: "text-strong",
                    className: nk.op,
                    children: eg.intl.string(eg.t.vLz3Zs),
                }),
                (0, c.jsxs)("div", {
                    ref: n,
                    className: u()(nk.kR, { [nk.BQ]: a }),
                    children: [
                        (0, c.jsx)(nG, { skuId: t7.pe.TIER_0, className: u()(nk.rz, l) }),
                        (0, c.jsx)(nG, { skuId: t7.pe.TIER_2, className: u()(nk.Rv, l) }),
                        a && (0, c.jsx)(nw, { className: u()(nk.zz, l) }),
                    ],
                }),
            ],
        }),
    });
}
var nH = s(226830),
    nF = s(366010),
    nV = s(303136);
let nz = function (e) {
    let t,
        { className: s } = e,
        i = (0, tL.TM)(),
        n = (0, nF.q)((0, ix.Ay)());
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
                nV.A,
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
var nW =
        (((l = {}).HOME = "home"),
        (l.WHATS_NEW = "whatsNew"),
        (l.BEST_OF_NITRO = "bestOfNitro"),
        (l.PLANS = "plans"),
        (l.COMPARE = "compare"),
        l),
    nY = s(352756);
let nK = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i } = e,
        n = (0, ea.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        a = { section: e2.JJy.MARKETING_FLOATING_CTA };
    return (0, c.jsx)(ei.animated.div, {
        className: nY.i,
        style: n,
        "data-mtctest-ignore": "true",
        children: (0, c.jsxs)("div", {
            className: nY.U,
            children: [
                (0, c.jsx)(tc.A, {
                    size: "md",
                    subscriptionTier: s,
                    hasActivePromotion: !!i,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: a,
                }),
                (0, c.jsx)(eA.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var nX = s(573710);
let nZ = function () {
    let e = (0, tM.bG)([ev.Ay], () => ev.Ay.useReducedMotion);
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)("div", {
                className: nX.BI,
                children: (0, c.jsx)(tw, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: tU.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, c.jsx)("img", { src: tq, alt: "", className: nX.Q }),
                }),
            }),
            (0, c.jsx)(tH, {
                isMotionReduced: e,
                boltContainerClassName: nX.nJ,
                carContainerClassName: nX.IN,
                hammerContainerClassName: nX.Gj,
                keyContainerClassName: nX.FV,
                starContainerClassName: nX.E1,
                boltAssetClassName: nX.j7,
                carAssetClassName: nX.or,
                hammerAssetClassName: nX.Wv,
                keyAssetClassName: nX.rs,
                starAssetClassName: nX.OY,
            }),
        ],
    });
};
var nJ = s(989756);
let nQ = o.forwardRef((e, t) => {
    let { analyticsLocations: s } = (0, j.Ay)(A.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, c.jsx)(j.f5, {
        value: s,
        children: (0, c.jsx)("div", {
            ref: t,
            className: nJ.kL,
            children: (0, c.jsxs)("div", {
                className: nJ.hQ,
                children: [
                    (0, c.jsx)(nZ, {}),
                    (0, c.jsx)(el.D, {
                        variant: "nitro-md",
                        color: "text-strong",
                        className: nJ.RH,
                        children: eg.intl.string(eg.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
});
nQ.displayName = "PremiumMarketingFooter";
var nq = s(939249);
let n$ = function (e) {
    let { navBarSections: t, activeSectionId: s } = e,
        i = {
            [nW.HOME]: eg.intl.string(eg.t.uGRXjS),
            [nW.WHATS_NEW]: eg.intl.string(eg.t["mfcR/v"]),
            [nW.BEST_OF_NITRO]: eg.intl.string(eg.t.xQKkE8),
            [nW.PLANS]: eg.intl.string(eg.t.wyNMnm),
            [nW.COMPARE]: eg.intl.string(eg.t.pwD7If),
        },
        n = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        a = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, c.jsx)(sa.A, {
        className: sc.TQ,
        transparent: !0,
        children: (0, c.jsxs)("div", {
            className: sc.Wc,
            children: [
                (0, c.jsxs)("div", {
                    className: sc.wG,
                    children: [
                        (0, c.jsx)(ed.t, { className: sc.nE, colorClass: sc.oG }),
                        (0, c.jsx)("div", {
                            className: sc.zc,
                            role: "tablist",
                            "aria-label": eg.intl.string(eg.t.O9MiXY),
                            children: a.map((e) => {
                                let t = s === e.id,
                                    n = i[e.id];
                                return (0, c.jsxs)(
                                    nq.D,
                                    {
                                        role: "tab",
                                        "aria-selected": t,
                                        className: sc.S0,
                                        onClick: e.scrollToSection,
                                        children: [
                                            (0, c.jsx)(ec.E, {
                                                variant: "text-sm/medium",
                                                color: "text-strong",
                                                children: n,
                                            }),
                                            t && (0, c.jsx)("div", { className: sc.W0 }),
                                        ],
                                    },
                                    n,
                                );
                            }),
                        }),
                    ],
                }),
                (0, c.jsxs)("div", {
                    className: sc.MQ,
                    children: [
                        null != n && (0, c.jsx)(sl.l, { size: "sm", location: A.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                        (0, c.jsx)(eA.A, { size: "sm", variant: "overlay-secondary" }),
                    ],
                }),
            ],
        }),
    });
};
var n0 = s(704333),
    n1 = s(414499),
    n2 = s(597770),
    n3 = s(500060),
    n6 = s(866665),
    n7 = s(406860),
    n5 = s(870975),
    n8 = s(698834);
function n9() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, n7.A)({ boxType: sj.$, thirdPartyPartner: "xbox" }),
        s = [
            { icon: n0.B, text: eg.intl.string(sE.default.MUypiB) },
            { icon: n1.h, text: eg.intl.string(sE.default.ec5Rdd) },
            { icon: n2.GiftIcon, text: eg.intl.string(sE.default["9t2CzW"]), tooltip: sE.default.AyECej },
            { icon: n3.o, text: eg.intl.string(sE.default.R7YJAY) },
        ];
    return (0, c.jsx)(W.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, c.jsx)("div", {
            ref: e,
            className: n8.iE,
            children: (0, c.jsxs)("div", {
                className: n8.Nr,
                children: [
                    (0, c.jsxs)("div", {
                        className: n8.j,
                        children: [
                            (0, c.jsx)("div", { className: n8._g }),
                            (0, c.jsx)("div", { className: n8.$h }),
                            (0, c.jsx)("div", { className: n8.Rv }),
                            (0, c.jsx)("div", { className: n8.Lw }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: n8.CT,
                        children: [
                            (0, c.jsxs)("div", {
                                className: n8.Qs,
                                children: [
                                    (0, c.jsxs)("div", {
                                        children: [
                                            (0, c.jsx)(el.D, {
                                                variant: "heading-xxl/bold",
                                                color: "text-strong",
                                                className: n8.R_,
                                                children: eg.intl.string(sE.default.rkt1aw),
                                            }),
                                            (0, c.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, c.jsxs)(
                                                            "div",
                                                            {
                                                                className: n8.yf,
                                                                children: [
                                                                    (0, c.jsx)(t, {
                                                                        size: "sm",
                                                                        color: "var(--icon-strong)",
                                                                    }),
                                                                    (0, c.jsx)(ec.E, {
                                                                        variant: "text-md/medium",
                                                                        color: "text-strong",
                                                                        children: s,
                                                                    }),
                                                                    null != i &&
                                                                        (0, c.jsx)("div", {
                                                                            className: n8.Jn,
                                                                            children: (0, c.jsx)(n6.m, {
                                                                                text: eg.intl.string(i),
                                                                                position: "top",
                                                                                children: (0, c.jsx)(
                                                                                    sx.CircleInformationIcon,
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
                                                        className: n8.xF,
                                                        children: (0, c.jsx)(tc.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: t7.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: n8.WE,
                                        children: (0, c.jsx)(ec.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: eg.intl.format(sE.default.KDKdWi, { termsLink: (0, n5.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, c.jsx)("div", {
                                className: n8.r1,
                                children: (0, c.jsx)("img", {
                                    className: n8.wm,
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
var n4 = s(750338),
    ae = s(19290),
    at = s(505051);
function as(e) {
    let {
        className: t,
        boxLayout: s,
        title: i,
        shouldLoadVideo: n,
        isReducedMotion: a,
        startLeftAligned: r = !1,
        highlightBento: l,
    } = e;
    return (0, c.jsxs)("div", {
        className: u()(at.boxBackdrop, t),
        children: [
            (0, c.jsx)(el.D, {
                className: at.bentoSectionHeader,
                variant: "nitro-md",
                color: "text-strong",
                children: i,
            }),
            null != l && (0, c.jsx)("div", { className: at.highlightBento, children: l }),
            (0, c.jsx)("div", {
                className: at.bentoBoxesGrid,
                children: s.map((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = ae.A0.SMALL;
                            break;
                        case 2:
                            s = ae.A0.MEDIUM;
                            break;
                        default:
                            s = ae.A0.LARGE;
                    }
                    return (0, c.jsx)(c.Fragment, {
                        children: e.map((e) =>
                            (0, c.jsx)(
                                n4.A,
                                { index: t + +!!r, ...e, size: s, shouldLoadVideo: n, isReducedMotion: a },
                                e.name,
                            ),
                        ),
                    });
                }),
            }),
        ],
    });
}
let ai = o.memo(function (e) {
        let t = (0, su.b)("premium_marketing_bento"),
            { whatsNewBoxes: s } = (0, ae.Ay)(t);
        return (0, c.jsx)(as, {
            boxLayout: s,
            title: eg.intl.string(eg.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: t ? (0, c.jsx)(n9, {}) : null,
            ...e,
        });
    }),
    an = o.memo(function (e) {
        let { bestOfBoxes: t } = (0, ae.Ay)();
        return (0, c.jsx)(as, { boxLayout: t, title: eg.intl.string(eg.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    aa = (0, w.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var ar = s(236834),
    al = s(540504);
function ac(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eJ.A)({ userId: t?.id, size: eY._3.SIZE_24, animateOnHover: !0 });
    return (0, c.jsx)("div", {
        className: al.$6,
        children: (0, c.jsxs)("div", {
            className: al.sc,
            children: [
                (0, c.jsx)("div", {
                    className: al.kR,
                    children: (0, c.jsx)(eK.eu, { src: s, "aria-label": t.username, size: eY._3.SIZE_32, ...i }),
                }),
                (0, c.jsx)(el.D, {
                    variant: "heading-sm/normal",
                    className: al.FS,
                    color: "text-strong",
                    children: eg.intl.format(eg.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var ao = s(579245),
    ad = s(369805);
let au = function () {
    let e = (0, ad.A)(void 0, { includesPremiumGroup: !0 });
    return null == e ? null : (0, c.jsx)(eV, { text: e });
};
function am() {
    let e = (0, x.bG)([nv.A], () => nv.A.getForSkuAndInterval((0, eM.mH)(t7.pe.TIER_0), t7.WT.MONTH));
    return null != e ? (0, eM.sS)(e) : "\u2026";
}
var ax = s(508556);
let ag = function (e) {
    let { containerVisibilityPercentage: t } = e,
        s = (0, tM.bG)([ev.Ay], () => ev.Ay.useReducedMotion),
        i = (0, tL.TM)();
    return (0, c.jsxs)("div", {
        "aria-hidden": !0,
        className: ax.YU,
        children: [
            (0, c.jsx)(tz, {
                supportHEVCAlpha: i,
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                containerClassName: ax.wG,
                assetClassName: ax.lu,
            }),
            (0, c.jsx)(tH, {
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                boltContainerClassName: ax.nJ,
                carContainerClassName: ax.IN,
                hammerContainerClassName: ax.Gj,
                keyContainerClassName: ax.FV,
                starContainerClassName: ax.E1,
                boltAssetClassName: ax.j7,
                carAssetClassName: ax.or,
                hammerAssetClassName: ax.Wv,
                keyAssetClassName: ax.rs,
                starAssetClassName: ax.OY,
            }),
        ],
    });
};
var af = s(14057);
let ap = o.memo(
    o.forwardRef(function (e, t) {
        let { className: s, subscriptionTier: i, isEligibleForBogoPromotion: n } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            r = am(),
            l = aa.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
            o = (0, ar.A)(),
            d = null != o,
            { visibilityPercentageRef: m, visibilityPercentage: g } = eH(
                !(0, x.bG)([ev.Ay], () => ev.Ay.useReducedMotion),
            ),
            f = (0, nd.b)(),
            p = !d && f.length > 0,
            h = (0, ew.c)(eC.C.MARKETING_PAGE_BANNER),
            N = null != h && "marketingPageBanner" === h.properties.properties.oneofKind,
            b = (0, nS.ar)() && !N,
            C = (0, eU.O)(),
            E = (null != C && t7.U4.includes(C.discountId)) || N;
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsx)("div", {
                ref: t,
                className: u()(af.kL, s),
                "data-testid": "marketing-page-hero-header",
                children: (0, c.jsx)("div", {
                    ref: m,
                    children: (0, c.jsxs)("div", {
                        className: af.hQ,
                        children: [
                            (0, c.jsx)(ag, { containerVisibilityPercentage: g }),
                            b && (0, c.jsx)(au, {}),
                            (0, c.jsx)("div", {
                                className: af.s8,
                                children: (0, c.jsx)(tA.F, {
                                    forceLevel: 1,
                                    children: (0, c.jsx)(el.D, {
                                        variant: "nitro-md",
                                        color: "text-strong",
                                        className: af.wx,
                                        children: eg.intl.string(eg.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, c.jsxs)("div", {
                                className: af.rf,
                                children: [
                                    d &&
                                        (0, c.jsx)("div", {
                                            className: af.eZ,
                                            children: (0, c.jsx)(ac, { referrer: o }),
                                        }),
                                    p &&
                                        (0, c.jsx)("div", {
                                            className: af.Qn,
                                            children: (0, c.jsx)(ao.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, c.jsxs)("div", {
                                        className: b ? af.es : af.UJ,
                                        children: [
                                            (0, c.jsx)(tc.A, {
                                                size: "md",
                                                fullWidth: b,
                                                hasActivePromotion: !!n,
                                                subscriptionTier: E && null == i ? t7.pe.NONE : i,
                                                buttonTextOverride: E ? eg.intl.string(eg.t["2pG5Ga"]) : void 0,
                                            }),
                                            !b && (0, c.jsx)(eA.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: af.iQ,
                                        children: (0, c.jsx)(ec.E, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: l
                                                ? eg.intl.string(eg.t.jHqrJW)
                                                : eg.intl.format(eg.t.kt9wxs, { cheapestMonthlyPrice: r }),
                                        }),
                                    }),
                                    null != h &&
                                        "marketingPageBanner" === h.properties.properties.oneofKind &&
                                        (0, c.jsx)(ez.x, {
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
    }),
);
var ah = s(820081),
    aN = s(140735),
    aA = s(401432),
    aj = s(580630),
    ab = s(795269),
    aC = s(84483),
    aE = s(763052),
    aT = s(55647),
    aR = s(202600);
function aI(e) {
    let { includes: t } = e;
    return t
        ? (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(ah.B, { size: "sm", color: en.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(aN.A, { children: eg.intl.string(eg.t["tq+6t/"]) }),
              ],
          })
        : (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(aA.a, { size: "xs", color: en.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(aN.A, { children: eg.intl.string(eg.t.l4qZrp) }),
              ],
          });
}
function av(e) {
    let { label: t, tier0ColumnData: s, tier2ColumnData: i } = e;
    return (0, c.jsxs)("tr", {
        className: u()(aT.nM, aT.WQ),
        children: [
            (0, c.jsx)("th", {
                scope: "row",
                className: aT.nx,
                children: (0, c.jsx)(ec.E, { variant: "text-md/medium", children: t }),
            }),
            (0, c.jsx)("td", {
                className: aT.Hn,
                children:
                    null != s.text
                        ? (0, c.jsx)(ec.E, { variant: "text-md/medium", children: s.text })
                        : (0, c.jsx)(aI, { includes: !!s.includes }),
            }),
            (0, c.jsx)("td", {
                className: aT.Hn,
                children:
                    null != i.text
                        ? (0, c.jsx)(ec.E, { variant: "text-md/medium", children: i.text })
                        : (0, c.jsx)(aI, { includes: !!i.includes }),
            }),
        ],
    });
}
function a_(e) {
    let { title: t, subtitle: s, rows: i } = e;
    return (0, c.jsxs)("tbody", {
        children: [
            (0, c.jsx)("tr", {
                className: u()(aT.nM, aT.Gf),
                children: (0, c.jsxs)("td", {
                    className: aT.nx,
                    colSpan: 3,
                    children: [
                        (0, c.jsx)(el.D, { variant: "heading-lg/bold", children: t }),
                        null != s && (0, c.jsx)(ec.E, { variant: "text-xs/medium", children: s }),
                    ],
                }),
            }),
            i.map((e) => (0, c.jsx)(av, { ...e }, e.id)),
        ],
    });
}
function aS(e) {
    let { premiumType: t, priceString: s } = e,
        i = t === t7.PremiumTypes.TIER_0 ? eg.intl.string(eg.t.tUbSDK) : eg.intl.string(eg.t.Ipxkog);
    return (0, c.jsxs)("div", {
        className: aT.nn,
        children: [
            (0, c.jsxs)("div", {
                className: aT.KS,
                children: [
                    (0, c.jsx)(ed.t, { colorClass: aT.oG }),
                    (0, c.jsx)(el.D, { variant: "heading-sm/semibold", children: i }),
                ],
            }),
            (0, c.jsx)(el.D, { variant: "heading-sm/semibold", children: s }),
        ],
    });
}
function aP(e) {
    let { tier0Price: t, tier2Price: s, shouldUseDiscountPrice: i, tier2DiscountedPriceString: n } = e,
        a = i ? n : (0, aj.$g)(s.amount, s.currency);
    return (0, c.jsx)("thead", {
        children: (0, c.jsxs)("tr", {
            className: aT.U1,
            children: [
                (0, c.jsx)("th", {
                    scope: "col",
                    className: aT.Cr,
                    children: (0, c.jsx)(el.D, { variant: "heading-xl/bold", children: eg.intl.string(eg.t.ED4UVD) }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: aT.Hn,
                    children: (0, c.jsx)(aS, {
                        premiumType: t7.PremiumTypes.TIER_0,
                        priceString: (0, aj.$g)(t.amount, t.currency),
                    }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: aT.Hn,
                    children: (0, c.jsx)(aS, { premiumType: t7.PremiumTypes.TIER_2, priceString: a }),
                }),
            ],
        }),
    });
}
let ay = function (e) {
        let t,
            { className: s, hidePill: i = !1, selectedPlanTier: n = t7.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            r = (0, eG.V)(),
            l = r?.subscriptionTrial?.skuId,
            d = (0, eU.O)(),
            m = (0, es.YJ)(d),
            x = null != d && (0, es.U9)(d, t7.pe.TIER_2) && m === t7.gD.PREMIUM_MONTH_TIER_2,
            g = (0, es.N1)(m),
            f = null != g ? `${g}/${(0, eM.FJ)(t7.WT.MONTH)}` : "",
            p = (0, eM.JM)(t7.gD.PREMIUM_MONTH_TIER_0),
            h = (0, eM.JM)(t7.gD.PREMIUM_MONTH_TIER_2),
            N = (function () {
                let e = (0, su.b)("premium_marketing_comparison"),
                    t = [
                        {
                            id: 10,
                            label: eg.intl.string(eg.t["svn/YX"]),
                            tier0ColumnData: { includes: !0 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 7,
                            label: eg.intl.string(eg.t.ID5B6Z),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 13,
                            label: eg.intl.string(eg.t["PBUrx/"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 22,
                            label: eg.intl.string(aE.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    s = null,
                    i = [],
                    { shouldShowBonusOrbsUX: n, multiplier: a } = (0, iE.lk)(iP.rE.NITRO_HOME_MARKETING),
                    { enabled: r } = sG.A.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: l } = (0, sw.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    }),
                    { isInTreatment: c } = (0, aC.uX)("premium_marketing_comparison");
                return (
                    e &&
                        ((s = {
                            id: 23,
                            title: eg.intl.string(eg.t.NG1e6l),
                            subtitle: eg.intl.format(sE.default.uJcbMv, {
                                termsLink: eO.A.getArticleURL(e2.MVz.NITRO_2_POINT_0),
                            }),
                            rows: [
                                {
                                    id: 24,
                                    label: eg.intl.string(sE.default.OpOEmk),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        }),
                        r &&
                            s.rows.push({
                                id: 25,
                                label: eg.intl.string(sE.default.Q0A42h),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        l &&
                            s.rows.push({
                                id: 26,
                                label: eg.intl.string(sW.default["gc2sa/"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        n &&
                            i.push({
                                id: 27,
                                label: eg.intl.formatToPlainString(eg.t.Uhemob, { bonusOrbMultiplier: a }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        c &&
                            i.push({
                                id: 28,
                                label: eg.intl.string(iv.default["20tmSN"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            })),
                    [
                        ...(null != s ? [s] : []),
                        { id: 17, title: eg.intl.string(eg.t.Ij3Zmv), rows: t },
                        {
                            id: 18,
                            title: eg.intl.string(eg.t.Wme3nX),
                            rows: [
                                {
                                    id: 0,
                                    label: eg.intl.string(eg.t.LrUABv),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 1,
                                    label: eg.intl.string(eg.t.DmfiwT),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 2,
                                    label: eg.intl.string(eg.t.Uukj4o),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 12,
                                    label: eg.intl.string(eg.t.NIKDqG),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 9,
                                    label: eg.intl.string(eg.t["5OAKhw"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        },
                        {
                            id: 19,
                            title: eg.intl.string(eg.t["6b3ydG"]),
                            rows: [
                                {
                                    id: 4,
                                    label: eg.intl.string(eg.t["ufhQC+"]),
                                    tier0ColumnData: { text: (0, eM.EJ)(t7.PremiumTypes.TIER_0) },
                                    tier2ColumnData: { text: (0, eM.EJ)(t7.PremiumTypes.TIER_2) },
                                },
                                {
                                    id: 11,
                                    label: eg.intl.string(eg.t.qQxxVc),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 3,
                                    label: eg.intl.string(eg.t["9kRJS8"]),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 21,
                                    label: eg.intl.string(eg.t["5BJqNF"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 5,
                                    label: eg.intl.string(eg.t.VwxlMw),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 6,
                                    label: eg.intl.formatToPlainString(eg.t.nyhDpw, {
                                        numBoosts: t7.M4,
                                        percentageOff: (0, aj.l9)(nI.default.locale, t7.oX / 100),
                                    }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 16,
                                    label: eg.intl.string(eg.t["93xPy3"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 8,
                                    label: eg.intl.string(eg.t.IzrZHz),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 20,
                                    label: eg.intl.string(eg.t.Rj1Qys),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                ...i,
                                {
                                    id: 15,
                                    label: eg.intl.formatToPlainString(eg.t["8crdzJ"], { maxChars: e2.CS1 }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 14,
                                    label: eg.intl.string(eg.t["il8+nC"]),
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
            let e = null != r ? eg.intl.string(eg.t.IBYG5U) : eg.intl.string(eg.t.TR2B4T);
            t = (0, c.jsx)(ab.R, { className: u()(aT.Io, aT.SP), text: e });
        }
        let b = l === t7.pe.TIER_0 || n === t7.PremiumTypes.TIER_0;
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsxs)("div", {
                className: u()(aT.zr, s),
                children: [
                    (0, c.jsx)(el.D, {
                        className: aT.Qw,
                        variant: "nitro-md",
                        color: "text-strong",
                        children: eg.intl.string(eg.t.DbPgAd),
                    }),
                    (0, c.jsxs)("div", {
                        className: aT.wY,
                        children: [
                            (0, c.jsxs)("div", {
                                className: u()(aT.fO, { [aT.Vd]: b, [aT.hA]: !b }),
                                children: [
                                    !b && t,
                                    (0, c.jsx)("div", { className: aT.xQ }),
                                    (0, c.jsxs)("div", {
                                        className: aT.wN,
                                        children: [
                                            (0, c.jsx)("img", { src: aR, alt: "", className: aT.kQ }),
                                            (0, c.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: aT.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, c.jsxs)("table", {
                                className: aT.tp,
                                children: [
                                    (0, c.jsx)(aP, {
                                        tier0Price: p,
                                        tier2Price: h,
                                        shouldUseDiscountPrice: x,
                                        tier2DiscountedPriceString: f,
                                    }),
                                    N.map((e) => (0, o.createElement)(a_, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    aD = function (e) {
        let { scrollOffset: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
            s = (0, o.useCallback)(
                (e) => {
                    let s = l.current[e];
                    null != s &&
                        ((s.style.scrollMarginTop = `${t}px`),
                        s.scrollIntoView({ behavior: "smooth", block: "start" }));
                },
                [t],
            ),
            [i, n] = (0, o.useState)(Object.fromEntries(e.map((e) => [e, !1]))),
            [a, r] = (0, o.useState)(e[0]);
        (0, o.useEffect)(() => {
            let e = Object.keys(i).filter((e) => i[e]);
            e.length > 0 && r(e[0]);
        }, [i]);
        let l = (0, o.useRef)({});
        return (
            (0, o.useEffect)(() => {
                let e = new IntersectionObserver((e) => {
                    e.forEach((e) => {
                        n((t) => ({ ...t, [e.target.id]: e.isIntersecting }));
                    });
                });
                return (
                    Object.values(l.current).forEach((t) => {
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
                                        ((l.current[t] = e), null != e && (e.id = t));
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
                setActiveSectionId: r,
            }
        );
    };
var aO = s(818348),
    aM = s(773188);
function aL(e) {
    let { innerRef: t, isPlanSelectUiRedesignEnabled: s } = e;
    return s ? (0, c.jsx)(nB, { innerRef: t }) : (0, c.jsx)(nH.jP, { innerRef: t });
}
let ak = () => {
    let e = (0, m.zy)();
    (0, _.P)(v);
    let t = o.useRef(null),
        s = o.useRef(null),
        i = o.useRef(null),
        n = o.useRef(null),
        a = o.useRef(null),
        r = o.useRef(null),
        l = (0, x.bG)([ev.Ay], () => ev.Ay.useReducedMotion),
        [d, g] = o.useState(!1),
        [f, p] = o.useState(!1),
        [h, N] = o.useState(!1),
        [b, C] = o.useState(!1),
        E = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        T = null != E ? (0, eM.EL)(E) : null,
        R = null != T ? eM.Ay.getSkuIdForPlan(T.planId) : null,
        I = null !== R && R !== t7.pe.TIER_2 ? t7.pe.TIER_2 : null,
        S = (0, eL.cg)(),
        { analyticsLocations: P } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
    o.useEffect(() => {
        C(!0);
    }, []);
    let y = (0, sU.A0)({ location: "PremiumMarketingHome" }),
        D = (0, nx.DK)(nm.W.NITRO, "PremiumMarketingHome"),
        { shouldShowBonusOrbsUX: O } = (0, iE.lk)(iP.rE.NITRO_HOME_MARKETING),
        k = D && O ? ae.NI.COMBINED_ORBS : O ? ae.NI.ORB_MULTIPLIER : D ? ae.NI.ORB_REWARDS : null,
        U = o.useMemo(() => {
            let t = new URLSearchParams(e.search).get("section");
            return "orbs" === t
                ? k
                : t === ae.NI.THREE_P_PROMOTIONS
                  ? y
                      ? ae.NI.CALL_OF_DUTY
                      : ae.NI.THREE_P_PROMOTIONS
                  : null;
        }, [y, e.search, k]);
    nr(U ?? "", null != U);
    let { navBarSections: G, activeSectionId: w } = aD([nW.HOME, nW.WHATS_NEW, nW.BEST_OF_NITRO, nW.PLANS, nW.COMPARE]),
        { home: B, whatsNew: H, bestOfNitro: F, plans: V, compare: z } = G,
        K = (function (e) {
            let { location: t } = e;
            return ng.useConfig({ location: t });
        })({ location: "PremiumMarketingHome" }),
        X = (0, c.jsxs)("div", {
            ref: s,
            className: u()(aM.kL, aM.Gd, aM.iI, { [aM.Hq]: !l }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(nz, { className: aM.yH }),
                (0, c.jsx)(n$, { navBarSections: G, activeSectionId: w }),
                (0, c.jsxs)("div", {
                    className: aM.Qr,
                    children: [
                        (0, c.jsx)("div", {
                            className: aM.qY,
                            ref: B.ref,
                            children: (0, c.jsx)(W.L, {
                                innerRef: n,
                                onChange: (e) => g(e),
                                threshold: 0,
                                active: !0,
                                children: (0, c.jsx)(ap, {
                                    ref: n,
                                    subscriptionTier: I,
                                    isEligibleForBogoPromotion: S,
                                }),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: aM.So,
                            ref: H.ref,
                            children: (0, c.jsx)(ai, { shouldLoadVideo: b, isReducedMotion: l }),
                        }),
                        (0, c.jsx)("div", {
                            className: aM.KQ,
                            ref: F.ref,
                            children: (0, c.jsx)(an, { shouldLoadVideo: b, isReducedMotion: l }),
                        }),
                        (0, c.jsx)("div", {
                            className: aM.s5,
                            ref: V.ref,
                            children: (0, c.jsx)(
                                W.L,
                                {
                                    innerRef: i,
                                    onChange: (e) => p(e),
                                    threshold: 0.1,
                                    active: !0,
                                    children: (0, c.jsx)(aL, { innerRef: i, isPlanSelectUiRedesignEnabled: K }),
                                },
                                K ? "plan-select-cards" : "tier-cards",
                            ),
                        }),
                        (0, c.jsx)("div", { className: aM.aC, ref: z.ref, children: (0, c.jsx)(ay, {}) }),
                    ],
                }),
                (0, c.jsx)(W.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !h &&
                            (L.default.track(e2.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: P }),
                            N(!0));
                    },
                    children: (0, c.jsx)("div", { ref: a, className: aM._Z }),
                }),
                (0, c.jsx)(nQ, { ref: r }),
                (0, c.jsx)(nK, { isVisible: !d && !f && b, subscriptionTier: I, isEligibleForBogoPromotion: S }),
                (0, c.jsx)(nz, { className: aM.MF }),
            ],
        });
    return (0, c.jsx)(sg.N, {
        theme: aO.NJ.DARK,
        children: (e) => (0, c.jsx)(Y.Gt, { className: u()(aM.XG, e), ref: t, children: X }),
    });
};
var aU = s(862482),
    aG = s(412260),
    aw = s(662367),
    aB = s(374403),
    aH = s(396375),
    aF = s(815846),
    aV = s(370049);
let az = function (e) {
    let t,
        s,
        { premiumSubscription: i, className: n, textColor: a } = e,
        r = (0, nS.ar)();
    if (null == i) return null;
    let l = null != i ? eM.Ay.getPremiumPlanItem(i) : null;
    if (
        (eM.Ay.isBoostOnlySubscription(i)
            ? (t = eg.intl.string(eg.t.Uj0md3))
            : null != l && (t = eM.Ay.getTierDisplayNameByPlanId(l.planId)),
        null == t)
    )
        return null;
    function o() {
        return (0, ey.openUserSettings)(eP.X.SUBSCRIPTIONS_PANEL);
    }
    let d = (null != l ? eM.Ay.getSkuIdForPlan(l.planId) : null) === t7.pe.TIER_1;
    return (
        (s = null != a ? a : r ? "text-overlay-light" : "text-default"),
        (0, c.jsxs)(sf.Z, {
            className: u()(aV.kL, n, { [aV.He]: r }),
            type: sf.Z.Types.CUSTOM,
            children: [
                (0, c.jsx)(sM.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: u()(aV.Kk, { [aV.Pt]: r }),
                }),
                (0, c.jsx)(ec.E, {
                    variant: "text-sm/medium",
                    color: s,
                    children: d
                        ? eg.intl.format(eg.t["tYuv+T"], {
                              helpdeskArticle: eO.A.getArticleURL(e2.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: o,
                          })
                        : eg.intl.format(eg.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: o }),
                }),
            ],
        })
    );
};
var aW = s(978836);
let aY = function (e) {
    let { lifted: t = !1 } = e;
    return (0, c.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: u()(aW.zr, { [aW.N]: t }),
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
                        (0, c.jsx)("stop", { className: aW.eq }),
                        (0, c.jsx)("stop", { offset: "0.339235", className: aW.l_ }),
                        (0, c.jsx)("stop", { offset: "0.492065", className: aW.sM }),
                        (0, c.jsx)("stop", { offset: "0.823236", className: aW.zi }),
                        (0, c.jsx)("stop", { offset: "0.899558", className: aW.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var aK = s(900797),
    aX = s(847374),
    aZ = s(812993),
    aJ = s(614268);
function aQ(e) {
    let { className: t } = e;
    return (0, c.jsx)(aZ.Lp, { className: u()(aJ.T, t), text: eg.intl.string(eg.t.EYxi0o) });
}
var aq = s(904788),
    a$ = s(507553);
let a0 = "/assets/5b4fec8511c3676a.svg",
    a1 = "/assets/0838bda6ecd20d91.svg";
function a2(e, t, s) {
    return (0, im.M)(e) ? t : s;
}
var a3 = s(872461);
function a6(e) {
    let { isShowingAll: t, onClick: s } = e;
    return (0, c.jsxs)(nq.D, {
        onClick: s,
        className: a3.customButton,
        children: [
            t ? eg.intl.string(eg.t.maZaN3) : eg.intl.string(eg.t["37C26f"]),
            t
                ? (0, c.jsx)(aK.t, { size: "md", color: "currentColor", className: a3.arrow })
                : (0, c.jsx)(aX.a, { size: "md", color: "currentColor", className: a3.arrow }),
        ],
    });
}
function a7(e) {
    let {
            title: t,
            description: s,
            className: i,
            imageSource: n,
            imageClassName: a,
            titleBadge: r,
            isNew: l = !1,
            isEarlyAccess: o = !1,
        } = e,
        { analyticsLocations: d } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD);
    return (0, c.jsx)(j.f5, {
        value: d,
        children: (0, c.jsxs)("div", {
            className: u()(a3.perkCard, i),
            children: [
                l
                    ? (0, c.jsx)(aq.A, {
                          className: a3.perkCardNewBadge,
                          shouldInheritBackgroundColor: !0,
                          shouldInheritTextColor: !0,
                      })
                    : null,
                o ? (0, c.jsx)(aQ, { className: a3.perkCardEarlyAccessBadge }) : null,
                (0, c.jsx)("img", { src: n, alt: "", className: u()(a, a3.perksCardArt) }),
                (0, c.jsxs)("div", {
                    children: [
                        (0, c.jsxs)(el.D, {
                            variant: "heading-lg/extrabold",
                            className: a3.perkCardHeading,
                            children: [t, " ", r],
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/normal",
                            className: a3.perkCardDescription,
                            children: "function" == typeof s ? s(d) : s,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let a5 = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [n, a] = o.useState(!1),
        r = (function (e) {
            let { styles: t } = e,
                i = (0, ix.Ay)(),
                n = (0, ih.X)("usePerkCards"),
                a = (0, tM.bG)([D.default], () => {
                    let e = D.default.getCurrentUser();
                    return eM.Ay.canUsePremiumProfileCustomization(e);
                }),
                r = (0, eM.EJ)(t7.PremiumTypes.TIER_2, { useSpace: !1 });
            return {
                badge: {
                    title: eg.intl.string(eg.t.SS87rQ),
                    description: eg.intl.string(eg.t.oD6CRr),
                    imageSource: "/assets/70e295f6158d848f.png",
                    imageClassName: t.badgeImage,
                },
                badgeAlt: {
                    title: eg.intl.string(eg.t["5cYMu0"]),
                    description: eg.intl.string(eg.t.vxk9va),
                    imageSource: a2(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
                    imageClassName: t.badgeNewImage,
                },
                clientThemes: {
                    title: eg.intl.string(eg.t["/xvEMy"]),
                    description: eg.intl.string(eg.t.HKWdjj),
                    className: t.clientThemesCard,
                    imageSource: "/assets/37e0853800afb796.svg",
                    imageClassName: t.clientThemesImage,
                },
                customAppIcons: {
                    title: eg.intl.string(eg.t.OuItFi),
                    description: eg.intl.string(eg.t.mPyrE6),
                    imageSource:
                        "https://cdn.discordapp.com/assets/content/bca160c31fc5390dd2b41d90060edcc912a45f6ab3beab44ea79e16bf1f6530f.png",
                    imageClassName: t.customAppIconImage,
                },
                emoji: {
                    title: eg.intl.string(eg.t["R2IV/Q"]),
                    description: eg.intl.string(eg.t.R5Xag2),
                    imageSource: "/assets/d8edaaf5cb32248f.svg",
                    imageClassName: t.emojiImage,
                },
                guildProfile: {
                    title: eg.intl.string(eg.t.lKDhhJ),
                    description: (e) => {
                        if (n)
                            return a
                                ? eg.intl.formatToPlainString(eg.t.aj1pfZ, { onCheckItOutClick: () => {} })
                                : eg.intl.formatToPlainString(eg.t.d2oYS8, { onTryItOutClick: () => {} });
                        function t() {
                            {
                                let { openUserSettings: t } = s(766075);
                                (a$.A.setState({ scrollPosition: i3._F.TRY_IT_OUT }),
                                    t(eP.X.PROFILE_PANEL, { analyticsLocations: e }));
                            }
                        }
                        return a
                            ? eg.intl.format(eg.t.aj1pfZ, { onCheckItOutClick: t })
                            : eg.intl.format(eg.t.d2oYS8, { onTryItOutClick: t });
                    },
                    imageSource: "/assets/e1b6b45be1ce4b03.png",
                    imageClassName: t.perGuildProfilesImage,
                },
                longerMessages: {
                    title: eg.intl.string(eg.t.BUScid),
                    description: eg.intl.string(eg.t.vN6XpQ),
                    imageSource: a2(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: eg.intl.string(eg.t.Bv8Pfk),
                    description: eg.intl.string(eg.t.JMfaTU),
                    imageSource: a2(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: eg.intl.string(eg.t.Bv8Pfk),
                    description: eg.intl.string(eg.t.JMfaTU),
                    imageSource: a2(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: eg.intl.string(eg.t["lGcW+c"]),
                    description: eg.intl.string(eg.t["/fDyO+"]),
                    imageSource: a2(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: eg.intl.string(eg.t["1c+xwT"]),
                    description: eg.intl.string(eg.t.hJG8ZN),
                    imageSource: a2(i, a1, a0),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: eg.intl.string(eg.t.tzdIwI),
                    description: eg.intl.string(eg.t.hJG8ZN),
                    imageSource: a2(i, a1, a0),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: eg.intl.string(eg.t.tzdIwI),
                    description: eg.intl.string(eg.t.hJG8ZN),
                    imageSource: a2(i, a1, a0),
                    imageClassName: t.stickersImage,
                },
                streaming: {
                    title: eg.intl.string(eg.t.RSXQYO),
                    description: eg.intl.string(eg.t.ymCPxp),
                    imageSource: "/assets/3bcdc01b26c7f691.svg",
                    imageClassName: t.streamingImage,
                },
                superReactions: {
                    title: eg.intl.string(eg.t["uZt5q/"]),
                    description: eg.intl.string(eg.t.ZK3ZoX),
                    imageSource: a2(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
                    imageClassName: t.superReactionsImage,
                },
                upload: {
                    title: eg.intl.formatToPlainString(eg.t.jqhAdL, { premiumMaxSize: r }),
                    description: eg.intl.formatToPlainString(eg.t["HI+cfm"], { premiumMaxSize: r }),
                    imageSource: "/assets/010eae6a6dbacc63.svg",
                    imageClassName: t.uploadImage,
                },
                videoBackground: {
                    title: eg.intl.string(eg.t.NaGpTf),
                    description: eg.intl.string(eg.t["A8O/Qw"]),
                    imageSource: a2(i, i6, i7),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: a3 }),
        l = (0, tM.bG)([ev.Ay], () => ev.Ay.useReducedMotion),
        { analyticsLocations: d } = (0, j.Ay)(),
        m = [
            r.emoji,
            r.streaming,
            r.upload,
            r.customAppIcons,
            r.soundboard,
            r.videoBackground,
            r.superReactions,
            r.stickersPremiumPerk,
            r.badgeAlt,
        ];
    return (0, c.jsxs)("div", {
        className: u()(a3.perksContainer, t, {
            [a3.partiallyHidden]: i && !n,
            [a3.subscriberNitroHome]: i,
            [a3.reducedMotion]: l,
        }),
        children: [
            (0, c.jsx)(el.D, {
                variant: "heading-xxl/extrabold",
                className: a3.perksTitle,
                children: i ? eg.intl.string(eg.t.QX14gI) : eg.intl.string(eg.t.RGadQR),
            }),
            (0, c.jsx)("div", {
                className: u()(a3.perkCardContainer, { [a3.perkCardContainerExpanded]: n }),
                children: m.map((e) => null != e && (0, c.jsx)(a7, { ...e }, e.title)),
            }),
            i &&
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)("div", {
                            className: u()({ [a3.sizeGizmo]: !n, [a3.sizeGizmoExpanded]: n }),
                            children: (0, c.jsx)(a6, {
                                onClick: function () {
                                    (L.default.track(e2.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: d,
                                        was_expanded: n,
                                    }),
                                        a(!n));
                                },
                                isShowingAll: n,
                            }),
                        }),
                        (0, c.jsx)("div", { className: u()(a3.cover, { [a3.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var a8 = s(194509),
    a9 = s(317587);
let a4 = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: n } = e,
        a = (0, ea.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        r = { section: e2.JJy.MARKETING_FLOATING_CTA },
        l = (0, ix.Ay)(),
        o = (0, nF.M)(l);
    return (0, c.jsx)(ei.animated.div, {
        className: u()(a9.iE, { [a9.H8]: i, [a9.q4]: !t }),
        style: a,
        children: (0, c.jsxs)("div", {
            className: i ? a9.zW : a9.iJ,
            children: [
                (0, c.jsx)(aH.A, {
                    color: o ? aU.XD.BRAND_INVERTED : void 0,
                    className: u()(a9.x6, { [a9.Ph]: o }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: r,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: o ? void 0 : a9.PJ,
                }),
                (0, c.jsx)(a8.A, { className: a9.x6, premiumModalAnalyticsLocation: r }),
            ],
        }),
    });
};
var re = s(386564);
function rt(e) {
    let {
            inOfferExperience: t,
            subscriptionTier: s,
            containerClassName: i,
            buttonClassName: n,
            isApplicationHome: a,
            isDarkMode: r,
            isEligibleForBogoPromotion: l,
        } = e,
        o = l
            ? (0, c.jsx)(aH.A, {
                  color: r ? aU.XD.BRAND_INVERTED : void 0,
                  className: u()(re.x6, re.Ph, n, { [re.Sq]: t && a, [re.MF]: a && !r }),
                  shinyButtonClassName: r ? void 0 : re.PJ,
                  subscriptionTier: s,
                  hasActivePromotion: !0,
              })
            : (0, c.jsx)(aH.A, {
                  color: r || !a ? aU.XD.BRAND_INVERTED : void 0,
                  className: u()(re.x6, re.Ph, n, { [re.Sq]: t && a, [re.MF]: a && !r }),
                  subscriptionTier: s,
              }),
        d = t && a ? null : (0, c.jsx)(a8.A, { className: u()(re.x6, n), color: a ? void 0 : aU.XD.WHITE });
    return (0, c.jsxs)("div", { className: u()(re.UD, i), children: [o, " ", d] });
}
function rs() {
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(aq.p, { className: re.zd }),
            (0, c.jsx)(aq.p, { className: re.G }),
            (0, c.jsx)(aq.p, { className: re.zy }),
            (0, c.jsx)(aq.p, { className: re.GX }),
        ],
    });
}
function ri(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        n = am();
    return (0, c.jsx)(ec.E, {
        variant: t,
        color: i ? "text-subtle" : "text-overlay-light",
        className: u()(re.h_, { [re.If]: s, [re.jn]: i }),
        children: eg.intl.format(eg.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let rn = o.forwardRef(function (e, t) {
    let { className: s, buttonClassName: i, subscriptionTier: n, isDarkMode: a } = e,
        { analyticsLocations: r } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        l = (0, ek.QQ)(),
        o = (0, nS.ar)(),
        d = (0, eL.cg)(),
        m = (0, nd.b)().length > 0,
        x = eg.intl.string(eg.t.YCZldK);
    return (0, c.jsx)(j.f5, {
        value: r,
        children: (0, c.jsxs)("div", {
            ref: t,
            className: u()(re.kL, s, { [re.V1]: !o, [re.Q4]: !o && m }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, c.jsxs)("div", {
                    className: o ? re.I6 : re.G1,
                    children: [
                        (0, c.jsx)(tA.F, {
                            forceLevel: 1,
                            children: (0, c.jsx)(el.D, {
                                variant: o ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: x,
                            }),
                        }),
                        m
                            ? (0, c.jsx)("div", {
                                  className: re.DF,
                                  children: (0, c.jsx)(ao.A, { textColor: "text-overlay-light", smallerText: !o }),
                              })
                            : (0, c.jsx)(ri, {}),
                        d || l
                            ? (0, c.jsx)("div", {
                                  className: re.UD,
                                  children: (0, c.jsx)(a8.A, { className: u()(re.x6, i), color: aU.XD.WHITE }),
                              })
                            : (0, c.jsx)(rt, {
                                  subscriptionTier: n,
                                  inOfferExperience: o,
                                  buttonClassName: i,
                                  isDarkMode: a,
                              }),
                        m && (0, c.jsx)(ri, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !o && (0, c.jsx)(rs, {}),
            ],
        }),
    });
});
var ra = s(22118),
    rr = s(145359),
    rl = s(377770);
function rc(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, c.jsx)(aY, { lifted: t }) : null;
}
let ro = () => {
        (0, _.P)(v);
        let e = o.useRef(null),
            t = o.useRef(null),
            s = o.useRef(null),
            i = (0, ix.Ay)(),
            n = (0, im.M)(i),
            [a, r] = o.useState(!1),
            [l, d] = o.useState(!1),
            [m, g] = o.useState(!1),
            [f, p] = o.useState(!1),
            h = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            N = null != h ? (0, eM.EL)(h) : null,
            b = null != N ? eM.Ay.getSkuIdForPlan(N.planId) : null,
            C = null !== b && b !== t7.pe.TIER_2 ? t7.pe.TIER_2 : null,
            E = (0, eG.V)(),
            T = E?.subscriptionTrial?.skuId,
            R = (0, nS.ar)(),
            I = (0, eL.cg)(),
            S = I ?? !1,
            P = (0, x.bG)([aG.A], () => {
                let e = aG.A.getMarketingComponentByType(eC.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            y = (0, aB.Q)(),
            { analyticsLocations: D } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
        o.useEffect(() => {
            p(!0);
        }, []);
        let O = (0, c.jsx)("div", {
            className: rl.dY,
            children: (0, c.jsx)(W.L, {
                innerRef: e,
                onChange: (e) => d(e),
                threshold: 0.1,
                active: !0,
                children: (0, c.jsx)(nf.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, c.jsx)(aH.A, {
                        showIcon: !1,
                        subscriptionTier: t7.pe.TIER_0,
                        className: rr.Ph,
                        look: aU.pR.OUTLINED,
                        color: aU.XD.WHITE,
                        buttonShineClassName: rr.Qr,
                    }),
                    tier2CTAButton:
                        T === t7.pe.TIER_0
                            ? (0, c.jsx)(aH.A, {
                                  showIcon: !1,
                                  subscriptionTier: t7.pe.TIER_2,
                                  className: rr.Ph,
                                  look: aU.pR.OUTLINED,
                                  color: aU.XD.WHITE,
                                  buttonShineClassName: rr.Qr,
                              })
                            : (0, c.jsx)(aH.A, {
                                  color: aU.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: t7.pe.TIER_2,
                                  className: rr.Ph,
                                  hasActivePromotion: S,
                                  textOptions: { textClassName: rr.Ac },
                                  buttonShineClassName: rr.Qr,
                              }),
                }),
            }),
        });
        return (0, c.jsxs)("div", {
            className: rl.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(az, { premiumSubscription: h, className: u()(rl.R3, { [rl.aZ]: R }) }),
                R &&
                    (0, c.jsxs)("div", {
                        className: rl.n1,
                        children: [
                            (0, c.jsx)(rc, { inOfferExperience: R }),
                            (0, c.jsx)(sl.l, {
                                className: rl.ij,
                                size: "md",
                                location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                        ],
                    }),
                (0, c.jsxs)("div", {
                    className: u()({ [rl.V1]: !R }),
                    children: [
                        null != P && (0, c.jsx)(aF.c, { className: rl.w$, config: P }),
                        (0, c.jsxs)("div", {
                            className: rl.iS,
                            children: [
                                !R &&
                                    (0, c.jsx)(sl.l, {
                                        className: rl.ij,
                                        size: "md",
                                        location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, c.jsx)(W.L, {
                                    innerRef: t,
                                    onChange: (e) => r(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, c.jsx)(rn, {
                                        ref: t,
                                        subscriptionTier: C,
                                        className: u()({ [rl.p7]: R, [rl.Pw]: R, [rl.AG]: I, [rl.Cv]: null != h }),
                                        isDarkMode: n,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != y && (0, c.jsx)("div", { className: rl.Ol, children: (0, c.jsx)(aw.I, { component: y }) }),
                O,
                (0, c.jsx)(a5, { className: rl.B_ }),
                (0, c.jsx)("div", { className: rl.aC, children: (0, c.jsx)(ra.A, { className: rl.JQ, hideCTAs: !0 }) }),
                (0, c.jsx)("div", { className: rl.hz }),
                (0, c.jsx)(a4, {
                    isVisible: !a && !l && f,
                    subscriptionTier: C,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: I,
                }),
                (0, c.jsx)(W.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !m &&
                            (L.default.track(e2.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: D }),
                            g(!0));
                    },
                    children: (0, c.jsx)("div", { ref: s, className: rl._Z }),
                }),
                (0, c.jsx)("img", {
                    src: nc,
                    className: rl.Kw,
                    width: 112,
                    height: 85,
                    alt: eg.intl.string(eg.t.X4IxWL),
                }),
            ],
        });
    },
    rd = function (e) {
        let { entrypoint: t } = e,
            s = (0, eG.V)(),
            i = (0, eU.O)({ includePremiumGroupDiscount: !0 }),
            n = (0, nu.NF)({ trialOffer: s }),
            a = (0, nu.Tp)(),
            r = (0, x.bG)([e$.A], () => e$.A.getReminderStateId());
        switch (
            (o.useEffect(() => {
                (!0 === n && (0, nu.QG)(), !0 === a && (0, nu.ne)(r), (null != s || null != i) && (0, G.u1)(s, i));
            }, [s, i, n, a, r]),
            t)
        ) {
            case t7.tU.UserSettings:
                return (0, c.jsx)(ro, {});
            case t7.tU.ApplicationStoreHome:
                return (0, c.jsx)(ak, {});
            default:
                return null;
        }
    };
var ru = s(531296);
let rm = function (e) {
    let { entrypoint: t = t7.tU.UserSettings } = e;
    (0, _.P)(v);
    let s = (0, C.Hp)(),
        { isInNitroHomeHeaderTreatment: i } = H("nitro_member_hub_header"),
        n = V("nitro_member_hub_header"),
        a = (0, U.ds)(),
        { sourceAnalyticsLocations: r, analyticsLocations: l } = (0, j.Ay)(A.A.PREMIUM_MARKETING),
        d = (0, x.bG)([M.A], () => M.A.hasFetchedSubscriptions()),
        R = (0, x.bG)([O.A], () => O.A.hasFetchedPaymentSources),
        I = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        w = I?.id,
        B = (0, eG.V)(),
        F = (0, eU.O)({ includePremiumGroupDiscount: !0 }),
        z = (0, E.Y)(t7.T7),
        [W, Y] = o.useState(!0),
        K = o.useRef(0),
        X = (0, k.YE)(I, t7.PremiumTypes.TIER_2),
        Z = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        J = null != Z && Z.status === e2.Dmq.CANCELED;
    ((0, nd.b)(),
        o.useEffect(() => {
            f.h.wait(async () => {
                let e = Date.now();
                (await Promise.all([b.hP(), b.$o(), (0, p.zS)(null, null, e2.tF5.DISCOVERY)]),
                    (K.current = Date.now() - e),
                    Y(!1));
            });
        }, []),
        o.useEffect(() => {
            W ||
                L.default.track(e2.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: r,
                    load_duration_ms: K.current,
                });
        }, [r, W]),
        o.useEffect(() => {
            s && (null != B || null != F) && (0, G.u1)(B, F);
        }, [s, B, F]));
    let Q = (0, m.zy)(),
        q = o.useRef(!1),
        $ = d && R && z,
        [ee, et] = o.useState($);
    ($ && !ee && et(!0),
        o.useEffect(() => {
            if (q.current || !$) return;
            let e = new URLSearchParams(Q.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: t7.pe.TIER_0, nitro: t7.pe.TIER_2 },
                s = Object.hasOwn(t, e) ? t[e] : void 0;
            null != s &&
                ((q.current = !0),
                (0, P.bG)(e2.BVt.APPLICATION_STORE),
                (0, S.A)({ subscriptionTier: s, analyticsLocations: l }));
        }, [$, Q.search, l]));
    let es = (0, x.bG)([y.A], () => y.A.enabled),
        ei = t === t7.tU.ApplicationStoreHome,
        en = es
            ? (0, c.jsx)(h.A, {})
            : s
              ? (0, c.jsx)(T.uK, {})
              : ei && X
                ? (0, c.jsx)(j.f5, { value: l, children: (0, c.jsx)(no, { userId: w }) })
                : ee
                  ? null
                  : (0, c.jsx)("div", { className: u()(ru.kL, ru.Lq), children: (0, c.jsx)(g.y, {}) });
    if (null != en) {
        let e = !es && !s && ei && X;
        return (i && e && !a && !J) || (n && e && (a || J))
            ? en
            : (0, c.jsxs)(c.Fragment, { children: [ei && (0, c.jsx)(N.A, {}), en] });
    }
    return (0, c.jsx)(j.f5, { value: l, children: (0, c.jsx)(rd, { entrypoint: t }) });
};
