(s.d(t, { A: () => rd }), s(323874), s(14289), s(35956), s(205816));
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
    "https://cdn.discordapp.com/assets/content/b56ad561e631257c1b2d6df674de1baa304710fe81885084e07c119b5a87127e.png";
function eT(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: eE,
        srcSet: `${eE} 1x, https://cdn.discordapp.com/assets/content/0d8192495ed73de2381103f061bb6a13f481d93f60e26090c2776f6329bd1bc3.png 2x`,
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
function e7() {
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
var e6 = s(212737),
    e5 = s(162907);
let e8 =
        "https://cdn.discordapp.com/assets/content/7932c6a6c499ae3ae7d3c3bc398778b62517d38df2c179320dc872062c73d5e9.png",
    e9 =
        "https://cdn.discordapp.com/assets/content/23f043bae7978056c72b82e7a4af6618d2fdb874c40857f580b0978b3b48ab0b.png",
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
                      srcSet: `${e9} 1x, https://cdn.discordapp.com/assets/content/5189110776398f40547893b913eee3ec5107abb10086a4c587a072bc001a04e6.png 2x`,
                      dimensions: tn,
                  }
                : a === eq.xb.DISCOUNT
                  ? {
                        src: e8,
                        srcSet: `${e8} 1x, https://cdn.discordapp.com/assets/content/945caab9e3f5f20d5f81c3ee82c9e83ef6be4e2ca5690550a6a44582fa6aadc3.png 2x`,
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
        { referralSentUsers: s, nReferralsSent: i, hasEligibleFriends: n, allSent: a, bodyText: r } = e7();
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
                            te({ startingScreen: e6.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
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
        } = e7({ location: "PremiumNitroHomeReferralBannerTreatment" });
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
                        : te({ startingScreen: e6.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
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
let t7 = function () {
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
var t6 = s(202541);
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
            s.e("870088"),
            s.e("989649"),
            s.e("853458"),
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
            s.e("910486"),
            s.e("56366"),
            s.e("797595"),
            s.e("641248"),
            s.e("544571"),
            s.e("40291"),
            s.e("729963"),
            s.e("392075"),
            s.e("102328"),
            s.e("790417"),
            s.e("50097"),
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
                    children: [(0, c.jsx)(eT, { alt: "", width: "100%", height: "auto" }), (0, c.jsx)(t7, {})],
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
        _ = (0, es.U9)(v, t6.pe.TIER_2) ? t6.pe.TIER_2 : void 0,
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
        if (p === t6.xc.NONE || r) b = (0, c.jsx)(eV, { text: m });
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
    sE = s(553875),
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
                    subscriptionTier: t6.pe.TIER_2,
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
var sO = s(695366),
    sM = s(789861),
    sL = s(592909),
    sk = s(398523),
    sU = s(881373),
    sG = s(555393),
    sw = s(852218),
    sB = s(923650),
    sH = s(612413),
    sF = s(310235),
    sV = s(334551),
    sz = s(762359);
let sW =
        "https://cdn.discordapp.com/assets/content/74dd725dde373bfdbced9606d5201ed2c555fc895f4da644a8de314de6906be3.webp",
    sY =
        "https://cdn.discordapp.com/assets/content/40a956d1f02220ee7fe04579320500571f21c3195af2f11afea01601f1ba28c9.svg",
    sK =
        "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg";
function sX() {
    let { analyticsLocations: e } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, sL.A0)({ location: "useHardwarePartnerPerkCards" }),
        s = (0, sL.hd)({ location: "useHardwarePartnerPerkCards" }),
        i = (0, sU.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        n = sk.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        a = (0, sH.mh)({ location: "useThirdPartyPartnerPerkCards" }),
        r = null === (0, sG.N)(),
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
                      title: eg.intl.string(sF.default.F0b4Z8),
                      description: eg.intl.formatToPlainString(sF.default["hworR+"], { validDates: (0, sM.a1)() }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: eg.intl.formatToPlainString(sF.default.g7iyvR, { date: (0, sM.mh)() }),
                      caption: (0, c.jsx)("img", { src: sY, alt: "Call of Duty: MW4" }),
                      backgroundAssetUrl: sW,
                      ctaText: eg.intl.string(sF.default.fcopjf),
                      onCtaClick: () =>
                          (0, sB.P)({
                              partnerIds: [sw.Bt],
                              title: eg.intl.string(sF.default.YJsqDS),
                              subtitle: eg.intl.format(sF.default.ieA3V0, {
                                  termsUrl:
                                      "https://support.discord.com/hc/en-us/articles/39188406147479-Nitro-Rewards",
                              }),
                              modalTeaser: {
                                  title: eg.intl.string(sF.default.Dkm10r),
                                  body: eg.intl.string(sF.default.LHAkT9),
                              },
                              analyticsLocations: e,
                          }),
                      analyticsOptions: { thirdPartyPartner: sw.Bt },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
            x = s
                ? {
                      id: sN.CALL_OF_DUTY_3PP_EXPIRED_CARD_ID,
                      title: eg.intl.string(sF.default["IcD/7p"]),
                      description: eg.intl.formatToPlainString(sF.default.hausFi, { date: (0, sM.wT)() }),
                      isThirdPartyPerk: !0,
                      expired: !0,
                      pillText: eg.intl.string(sF.default.fxF0Jz),
                      caption: (0, c.jsx)("img", { src: sY, alt: "Call of Duty: MW4" }),
                      backgroundAssetUrl: sW,
                      analyticsOptions: { thirdPartyPartner: sw.Bt },
                  }
                : null,
            g = i
                ? {
                      id: sN.LOGITECH_3PP_CARD_ID,
                      title: eg.intl.string(sV.default.OlObRa),
                      description: eg.intl.format(sV.default.ZGOJ8R, {
                          discountPercent: sU.aW,
                          termsUrl: eO.A.getArticleURL(e2.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      progress: d.getDate() / u,
                      ctaText: eg.intl.string(eg.t.w7s5Qr),
                      onCtaClick: () =>
                          (0, sB.P)({
                              partnerIds: [sw.XY],
                              title: eg.intl.string(sV.default["2I7nK+"]),
                              subtitle: eg.intl.format(sV.default.W8jOD0, {
                                  termsUrl: eO.A.getArticleURL(e2.MVz.LOGITECH_PROMOTION),
                              }),
                              analyticsLocations: e,
                          }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl: sK,
                      pillText: o,
                      caption: (0, c.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: sw.XY },
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
                          (0, sB.P)({
                              partnerIds: [sw.KS],
                              title: eg.intl.string(eg.t["7ioAjs"]),
                              subtitle: eg.intl.format(eg.t.LOYRxB, {
                                  helpCenterLink: eO.A.getArticleURL(e2.MVz.RECURRING_PROMOTION),
                              }),
                              analyticsLocations: e,
                          }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: sw.KS },
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
                      title: eg.intl.string(sz.default["NNPh/j"]),
                      description: eg.intl.format(sz.default.MrgHvR, {
                          helpCenterUrl: eO.A.getArticleURL(e2.MVz.YOUTUBE_PROMOTION),
                      }),
                      isThirdPartyPerk: !0,
                      pillText: o,
                      backgroundAssetUrl: sK,
                      blurTint: "#2E213D",
                      caption: "YouTube Premium",
                      ctaText: eg.intl.string(sF.default.fcopjf),
                      onCtaClick: () =>
                          (0, sB.P)({
                              partnerIds: [sw.NC],
                              analyticsLocations: e,
                              title: eg.intl.string(sz.default.TDZUui),
                              subtitle: eg.intl.format(sz.default.BTLkvw, {
                                  helpCenterUrl: eO.A.getArticleURL(e2.MVz.YOUTUBE_PROMOTION),
                              }),
                              modalTeaser: {
                                  title: eg.intl.format(sz.default.J8CVYT, {
                                      helpCenterUrl: eO.A.getArticleURL(e2.MVz.YOUTUBE_PROMOTION),
                                  }),
                                  icon: sO.E,
                              },
                          }),
                      analyticsOptions: { thirdPartyPartner: sw.NC },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
        };
    }, [l, e, t, s, d, i, u, n, a, r]);
}
var sZ = s(762493);
let sJ = "xgpp";
function sQ(e) {
    let { glowingSectionId: t, glowingPerkId: s } = e,
        i = (0, su.b)("premium_subscriber_home_rewards"),
        { callOfDutyCard: n, expiredCallOfDutyCard: a, logitechCard: r, steelseriesCard: l, youtubeCard: o } = sX();
    if (!i) return null;
    let d = null != n || null != a || null != r || null != l || null != o;
    return (0, c.jsx)(sD, {
        id: sJ,
        sectionClassName: u()(sZ.uW, sZ.Uv, sZ.qr),
        heading: (0, c.jsx)(el.D, {
            variant: "nitro-sm",
            className: u()(sy.R_, sP.U6),
            children: eg.intl.string(eg.t.NG1e6l),
        }),
        beforeGrid: (0, c.jsx)("div", { className: sP.JE, children: (0, c.jsx)(sI, { glowing: t === sJ }) }),
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
var sq = s(313133),
    s$ = s(67423);
let s0 = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: r } = (0, j.Ay)(A.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        l = (0, ea.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsx)(ei.animated.div, {
        className: u()(sq.iE, { [sq.q4]: !t }),
        style: l,
        children: (0, c.jsxs)("div", {
            className: sq.iJ,
            children: [
                (0, c.jsx)("img", { alt: "", src: s$, className: sq.oU }),
                (0, c.jsxs)("div", {
                    className: sq.iQ,
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
                                s.e("870088"),
                                s.e("989649"),
                                s.e("853458"),
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
                                s.e("910486"),
                                s.e("56366"),
                                s.e("797595"),
                                s.e("641248"),
                                s.e("544571"),
                                s.e("40291"),
                                s.e("729963"),
                                s.e("392075"),
                                s.e("102328"),
                                s.e("790417"),
                                s.e("50097"),
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
var s1 = s(761508),
    s2 = s(449543),
    s3 = s(387103);
function s7(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: s3.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function s6(e) {
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
function s5(e) {
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
var s8 = s(345394);
function s9(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: s8.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var s4 = s(163665);
function ie(e) {
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
function it(e) {
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
function is(e) {
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
function ii(e) {
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
var ia = s(996682);
function ir(e) {
    let {
        color: t = en.A.colors.ICON_STRONG,
        "aria-label": s,
        "aria-hidden": i,
        role: n,
        width: a = 100,
        height: r = 80,
    } = e;
    return (0, c.jsxs)("svg", {
        ...(0, ia.A)({ "aria-label": s, "aria-hidden": i, role: n }),
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
function il(e) {
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
var ic = s(78701);
function io(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: ic.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var id = s(462887),
    iu = s(736653),
    im = s(259065),
    ix = s(206835),
    ig = s(591179),
    ip = s(462463),
    ih = s(219882),
    iN = s(19886),
    iA = s(425713),
    ij = s(696292),
    ib = s(192444),
    iC = s(617986),
    iE = s(892227),
    iT = s(81466),
    iR = s(1889),
    iI = s(749012);
let iv = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, Z.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let s =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, iE.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, c.jsxs)("div", {
        className: iI.kL,
        children: [
            null != s &&
                (0, c.jsxs)("div", {
                    className: iI.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: iI.Pf,
                            children: [
                                (0, c.jsx)(iT.CalendarIcon, { size: "sm", color: en.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(ec.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: eg.intl.string(iR.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: eg.intl.format(iR.default.xedPIb, { days: s }),
                        }),
                    ],
                }),
            null != s && t.total_rewarded_from_program > 0 && (0, c.jsx)("div", { className: iI.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, c.jsxs)("div", {
                    className: iI.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: iI.Pf,
                            children: [
                                (0, c.jsx)(tR.C, { size: "sm", color: en.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(ec.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: eg.intl.string(iR.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: eg.intl.format(iR.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var i_ = s(190107),
    iS = s(799544);
function iP(e) {
    let { shouldShowBonusOrbsUX: t, multiplier: s } = (0, ib.lk)(i_.rE.NITRO_HOME_MARKETING),
        { isEligible: i, programReward: n } = (0, Z.F)({ location: e });
    return {
        nitroOrbsRewardsCard: (0, o.useMemo)(
            () =>
                !i || null == n || null == n.reward_amount || n.reward_amount <= 0
                    ? null
                    : {
                          id: sN.NITRO_ORBS_REWARDS_CARD_ID,
                          title: eg.intl.string(iR.default.hx5AFp),
                          description: eg.intl.format(iR.default.wq3CF2, { orbsCount: n.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(iS.lH, iS.yK),
                          footerContent: (0, c.jsx)(iv, {}),
                          ctaText: eg.intl.string(iR.default.BxjHiu),
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
                          onCtaClick: () => (0, iC.mA)({ fromContent: ij.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: iS.Nf,
                      }
                    : null,
            [t, s],
        ),
    };
}
var iy = s(975807),
    iD = s(95035),
    iO = s(989790),
    iM = s(88001),
    iL = s(148155),
    ik = s(817577);
function iU() {
    (0, iy.A)(iM.TE);
}
function iG(e) {
    let t = (0, iO.O9)(),
        i = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        n = i?.hasActiveTrial ?? !1,
        a = (0, o.useCallback)(() => {
            n
                ? (0, eI.openModalLazy)(async () => {
                      let { default: e } = await s.e("499709").then(s.bind(s, 516044));
                      return (t) => (0, c.jsx)(e, { ...t });
                  })
                : (0, S.A)({
                      subscriptionTier: t6.pe.TIER_2,
                      initialPlanId: t6.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, o.useMemo)(
        () =>
            t
                ? {
                      id: sN.PREMIUM_GROUP_CARD_ID,
                      title: eg.intl.string(iL.default.YkvksF),
                      description: (0, c.jsxs)(c.Fragment, {
                          children: [
                              eg.intl.formatToPlainString(iL.default.JlyGQj, {
                                  totalSeats: iM.aw,
                                  premiumGroupProductName: (0, iM.DP)(),
                              }),
                              (0, c.jsx)("div", {
                                  className: iS.LF,
                                  children: (0, c.jsx)(iD.A, {
                                      onClick: iU,
                                      children: eg.intl.string(iL.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: eg.intl.string(eg.t.oW0eUd),
                      primaryAsset: ik,
                      ctaIcon: ed.t,
                      ctaIconPosition: "start",
                      ctaText: eg.intl.string(eg.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var iw = s(562819),
    iB = s(793943),
    iH = s(241988),
    iF = s(757036),
    iV = s(235955),
    iz = s(655752);
let iW = (0, w.mj)({
    kind: "user",
    name: "2026-08-nitro-tenure-badge-total-progress",
    defaultConfig: { measureFromStreakStart: !1 },
    variations: { 0: { measureFromStreakStart: !1 }, 1: { measureFromStreakStart: !0 } },
});
var iY = s(764231),
    iK = s(627380),
    iX = s(30084),
    iZ = s(814014),
    iJ = s(714206);
let iQ =
        "https://cdn.discordapp.com/assets/content/cd580e29aa6ad4aa731dba64c23331d6bc556ad2e236ec1b5781206f6e71cb50.svg",
    iq =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    i$ =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function i0() {
    let e,
        t,
        s,
        i,
        n,
        { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        r = (0, ig.X)("useWhatsNewPerkCards"),
        { callOfDutyCard: l, expiredCallOfDutyCard: d, logitechCard: m, steelseriesCard: g, youtubeCard: f } = sX(),
        p = (0, su.b)("premium_subscriber_home_rewards"),
        h = (0, ip.A)({ analyticsLocations: a }),
        N = (0, o.useCallback)(() => {
            (0, ey.openUserSettings)(eP.X.PROFILE_PANEL, { analyticsLocations: a }, () =>
                (0, im.L)({ analyticsLocations: a }),
            );
        }, [a]),
        b = (0, o.useCallback)(() => {
            (0, ey.openUserSettings)(eP.X.PROFILE_PANEL, { analyticsLocations: a }, () =>
                (0, iw.L)({ analyticsLocations: a }),
            );
        }, [a]),
        C = (0, o.useCallback)(() => {
            (0, ey.openUserSettings)(eP.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        E = (function (e) {
            let { fractionalState: t } = (0, eS.A)(),
                s = t === t6.xc.FP_ONLY,
                i = (0, iN.$F)(),
                n = (0, iN.Xb)(),
                a = i?.status === iN.Wo.UPCOMING || s,
                r = i?.status === iN.Wo.WITHHELD,
                l = a || r,
                c = (0, iA.N)(i?.id),
                d = (function () {
                    let e = (0, iN.$F)(),
                        t = (0, iz.P)(),
                        s = (0, iN.Xb)(),
                        i = (function (e) {
                            let { measureFromStreakStart: t } = iW.useConfig({ location: e });
                            return t;
                        })("tenure_badge_progress_bar");
                    if (null == e || null == t || null == s || e.status === iN.Wo.WITHHELD) return null;
                    let n = td()(),
                        a = td()(s),
                        r = i || e.status === iN.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        l = t.tenureReqNumMonths,
                        c = a.clone().add(r, "months"),
                        o = a.clone().add(l, "months").diff(c);
                    return Math.max(0, Math.min(1, (n.diff(c) - 864e5) / o));
                })(),
                m = (0, x.bG)([ev.Ay], () => ev.Ay.useReducedMotion) && !l,
                g = (0, iK.t)(),
                f = (0, iz.P)();
            return (0, o.useMemo)(() => {
                let t,
                    a = null != f ? eg.intl.string(f.nameUnformattedNitro) : void 0;
                null == i
                    ? s && (t = (0, iY.T)(t6.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === iN.Wo.UPCOMING
                              ? eg.intl.formatToPlainString(eg.t.a1eKDi, { days: g?.days ?? 0 })
                              : i.status === iN.Wo.WITHHELD
                                ? ((0, iY.T)(i.id, i.tenureReqNumMonths) ?? void 0)
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
                                  (0, iY.T)(i.id, i.tenureReqNumMonths) ??
                                  void 0));
                let r = null;
                return (
                    null != c ? (r = l || m ? c.standard : c.ambientLarge) : s && (r = iJ),
                    {
                        id: sN.TENURE_BADGE_CARD_ID,
                        title:
                            null != i ? eg.intl.string(i.nameUnformattedNitro) : s ? eg.intl.string(eg.t.tx9Fvw) : "",
                        pillText: eg.intl.string(eg.t["jyYgZ+"]),
                        primaryAsset: r,
                        primaryAssetClassName: u()(iZ.pq, { [iZ.rX]: l, [iZ.kE]: m }),
                        caption: null != n ? eg.intl.formatToPlainString(eg.t.Hu4jfi, { date: new Date(n) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: d ?? void 0,
                        ctaText: eg.intl.string(eg.t.jVcuVY),
                        onCtaClick: () => (0, iX.D)({ analyticsLocations: e }),
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
                                  src: iH,
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
        { nitroOrbsRewardsCard: R, questOrbMultiplierCard: I } = iP("useWhatsNewPerkCards"),
        v =
            ((i = (0, iF.L)(t6.PremiumTypes.TIER_2)),
            (n = (0, ih.rX)()),
            (0, o.useMemo)(
                () =>
                    i && n
                        ? {
                              id: sN.NITRO_FILE_UPLOAD_WHATS_NEW_CARD_ID,
                              title: eg.intl.string(iV.default["/cV3ka"]),
                              description: eg.intl.string(iV.default.H523FI),
                              primaryAsset: (0, c.jsx)(s4.I, { alt: "", ariaHidden: !0 }),
                          }
                        : null,
                [i, n],
            )),
        _ = iG(a);
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
                    primaryAsset: iQ,
                },
                {
                    id: sN.CLIENT_THEMES_CARD_ID,
                    title: eg.intl.string(eg.t.acc6h6),
                    description: eg.intl.formatToPlainString(eg.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: i$,
                    ctaText: eg.intl.string(eg.t.jVcuVY),
                    onCtaClick: () => {
                        (0, iB.nf)(iB.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: sN.PERMADECOS_CARD_ID,
                    title: eg.intl.string(eg.t.L14NZN),
                    description: eg.intl.string(eg.t.eCZkAI),
                    primaryAsset: (0, c.jsx)(io, { alt: "", ariaHidden: !0 }),
                    ctaText: eg.intl.string(eg.t.jVcuVY),
                    onCtaClick: r ? h : b,
                },
                {
                    id: sN.CUSTOM_APP_ICONS_CARD_ID,
                    title: eg.intl.string(eg.t["GU+wqh"]),
                    description: eg.intl.string(eg.t["1uPk1Z"]),
                    primaryAsset: iq,
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
var i1 = s(355097);
let i2 = "/assets/1eb1b74667b4c0f0.svg",
    i3 = "/assets/983b60e4fcaf973b.svg";
var i7 =
    (((r = {}).BEST_OF_NITRO = "bestof"),
    (r.APPEARANCE_STYLE = "appearance"),
    (r.UPGRADES = "upgrades"),
    (r.VIP_EXTRAS = "vip"),
    r);
let i6 = [
    { id: "bestof", label: () => eg.intl.string(eg.t.q1u7nQ) },
    { id: "appearance", label: () => eg.intl.string(eg.t.CUnZkZ) },
    { id: "upgrades", label: () => eg.intl.string(eg.t.KC5q8v) },
    { id: "vip", label: () => eg.intl.string(eg.t.DjEAcv) },
];
var i5 = s(18290);
function i8(e) {
    e.stopPropagation();
}
function i9(e) {
    let { glowingPerkId: t = null } = e,
        s = (function () {
            let e = (0, iu.DP)(),
                t = (0, ig.X)("useFavoritesPerkCards"),
                s = (0, iN.Lh)(),
                i = (0, iA.N)(s)?.standard ?? null,
                { analyticsLocations: n } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, ix.A)({ scrollPosition: i1._F.TRY_IT_OUT, analyticsLocations: n }),
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
                x = (0, ip.A)({ analyticsLocations: n }),
                g = (0, o.useCallback)(() => {
                    (0, ey.openUserSettings)(eP.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, im.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                f = i0(),
                p = (0, o.useMemo)(() => f.map((e) => e?.id), [f]),
                { nitroOrbsRewardsCard: h, questOrbMultiplierCard: N } = iP("useFavoritesPerkCards"),
                b = iG(n),
                C = (0, o.useMemo)(
                    () => [
                        {
                            id: sN.SERVER_BOOSTS_CARD_ID,
                            title: eg.intl.formatToPlainString(eg.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: eg.intl.formatToPlainString(eg.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: eg.intl.string(eg.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: (0, c.jsx)(s7, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != b ? { ...b, categories: ["bestof"] } : null,
                        {
                            id: sN.PROFILES_CARD_ID,
                            title: eg.intl.string(eg.t.xDRab3),
                            description: eg.intl.string(eg.t.yn6fWA),
                            ctaText: eg.intl.string(eg.t.jVcuVY),
                            onCtaClick: t ? x : a,
                            primaryAsset: (0, c.jsx)(s6, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: sN.HD_VIDEO_CARD_ID,
                            title: eg.intl.string(eg.t["/mQ5gg"]),
                            description: eg.intl.string(eg.t["7WwAXh"]),
                            primaryAsset: (0, c.jsx)(s5, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: sN.CLIENT_THEMES_CARD_ID,
                            title: eg.intl.string(eg.t.acc6h6),
                            description: eg.intl.formatToPlainString(eg.t.WQazjs, { themeCount: 20 }),
                            ctaText: eg.intl.string(eg.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: i$,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: sN.MORE_EMOJIS_CARD_ID,
                            title: eg.intl.string(eg.t.D8vIDT),
                            description: eg.intl.string(eg.t.DRMecB),
                            primaryAsset: (0, c.jsx)(s9, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: sN.LARGE_UPLOADS_CARD_ID,
                            title: eg.intl.string(eg.t.nL1WZV),
                            description: (0, ih.M6)({
                                legacyCopy: eg.intl.formatToPlainString(eg.t.k8LC1w, { maxSizeMb: 500 }),
                                rolloutCopy: eg.intl.formatToPlainString(eg.t.teOTfv, {
                                    maxFileSize: (0, eM.EJ)(t6.PremiumTypes.TIER_2, { useSpace: !1 }),
                                }),
                            }),
                            primaryAsset: (0, c.jsx)(s4.I, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: sN.CUSTOM_APP_ICONS_CARD_ID,
                            title: eg.intl.string(eg.t["GU+wqh"]),
                            description: eg.intl.string(eg.t["1uPk1Z"]),
                            ctaText: eg.intl.string(eg.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: iq,
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
                            primaryAsset: iQ,
                            categories: ["appearance"],
                        },
                        {
                            id: sN.CUSTOM_SOUNDS_CARD_ID,
                            title: eg.intl.string(eg.t["Cu/oFd"]),
                            description: eg.intl.string(eg.t.czj2aa),
                            primaryAsset: (0, c.jsx)(ie, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: sN.SPECIAL_STICKERS_CARD_ID,
                            title: eg.intl.string(eg.t.MQoVeb),
                            description: eg.intl.string(eg.t.HGCLZX),
                            primaryAsset: (0, c.jsx)("div", {
                                className: iS.Uc,
                                children: (0, c.jsx)(it, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: sN.SUPER_REACTIONS_CARD_ID,
                            title: eg.intl.string(eg.t.qERvAA),
                            description: eg.intl.string(eg.t.WkUWzx),
                            primaryAsset: (0, c.jsx)(is, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: sN.VIDEO_BACKGROUNDS_CARD_ID,
                            title: eg.intl.string(eg.t.ssVDYQ),
                            description: eg.intl.string(eg.t.aUSRMa),
                            primaryAsset: (0, id.M)(e) ? i2 : i3,
                            categories: ["upgrades"],
                        },
                        {
                            id: sN.EARLY_ACCESS_CARD_ID,
                            title: eg.intl.string(eg.t["g/KRY6"]),
                            description: eg.intl.string(eg.t.JzAmJc),
                            primaryAsset: (0, c.jsx)(ii, { alt: "", ariaHidden: !0 }),
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
                                    : (0, c.jsx)(ir, { color: en.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: sN.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: eg.intl.string(eg.t["MTD+7w"]),
                            description: eg.intl.string(eg.t.Bhs0s6),
                            ctaText: eg.intl.string(eg.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, c.jsx)(il, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != h ? { ...h, categories: ["vip"] } : null,
                        null != N ? { ...N, categories: ["vip"] } : null,
                        {
                            id: sN.PERMADECOS_CARD_ID,
                            title: eg.intl.string(eg.t.L14NZN),
                            description: eg.intl.string(eg.t.eCZkAI),
                            primaryAsset: (0, c.jsx)(io, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, h, N, b, a, r, l, d, u, m, g, x, t],
                );
            return (0, o.useMemo)(() => C.filter((e) => null != e && !p.includes(e.id)), [C, p]);
        })(),
        i = null != t ? s.find((e) => e?.id === t) : null,
        [n, a] = (0, o.useState)(i?.categories[0] ?? i7.BEST_OF_NITRO),
        r = (0, o.useMemo)(() => s.filter((e) => null != e && e.categories.includes(n)), [s, n]);
    return (0, c.jsxs)("div", {
        className: i5.uW,
        children: [
            (0, c.jsx)(el.D, { variant: "nitro-sm", children: eg.intl.string(eg.t["Uh3+CA"]) }),
            (0, c.jsx)(s1.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: i5.Lq,
                "aria-label": eg.intl.string(eg.t["Uh3+CA"]),
                children: i6.map((e) =>
                    (0, c.jsx)(s1.V.Item, { id: e.id, className: i5.IC, children: e.label() }, e.id),
                ),
            }),
            (0, c.jsx)(
                s2.A,
                {
                    gap: 20,
                    className: i5.jG,
                    children: r.map((e) => {
                        if (null != e)
                            return (0, c.jsx)(
                                sv.S,
                                { ...e, glowing: t === e.id, containerClassName: i5.Ui, onFocus: i8 },
                                e.id,
                            );
                    }),
                },
                n,
            ),
        ],
    });
}
var i4 = s(72979);
let ne = function (e) {
    let { className: t } = e,
        s = (0, iu.DP)();
    return (0, c.jsx)("img", {
        className: u()(i4.D, t),
        src: (0, id.M)(s) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var nt = s(684251);
let ns = function (e) {
    let {
        shouldRenderNitroHomeHeaderExperiment: t,
        shouldRenderNitroHomeFollowup: s,
        gradientOffsetBottom: i,
        children: n,
    } = e;
    return t || s
        ? (0, c.jsxs)("div", {
              className: u()(nt.kL, nt.Gd, nt.Eg),
              children: [(0, c.jsx)(ne, {}), (0, c.jsx)(sd, {}), n],
          })
        : (0, c.jsx)(eN.h, { color: "nitro-pink", className: u()(nt.kL, nt.Gd), offsetBottom: i, children: n });
};
function ni(e) {
    let { glowingPerkId: t = null } = e,
        s = i0();
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
function nn(e, t, s, i) {
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
var na = s(92737);
let nr = "/assets/cd2be35d285d4675.svg",
    nl = (e) => {
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
                    s = e.get(na.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != s
                      ? { scrollTargetId: s, glowingSectionId: s, scrollBlock: "start" }
                      : {};
            }, [a.search]);
        nn(N ?? "", null != N, E, T);
        let [R, I] = o.useState(!1),
            S = (0, ee.p)(),
            P = o.useRef(null),
            [y, D] = o.useState(!1),
            O = null != S && null != d && d.status === e2.Dmq.CANCELED,
            k = (0, es.iU)(t6.gD.PREMIUM_MONTH_TIER_2, S, d),
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
                  className: u()(nt.xW, nt.Gd),
                  ref: r,
                  children: [
                      (0, c.jsx)(ns, {
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
                                          className: nt.v1,
                                          userDiscountOffer: S,
                                          discountedPrice: k,
                                      }),
                                  }),
                                  (0, c.jsx)(ni, { glowingPerkId: C }),
                                  (0, c.jsx)(sQ, { glowingPerkId: C, glowingSectionId: b }),
                                  (0, c.jsx)(i9, { glowingPerkId: C }),
                                  (0, c.jsx)(eb, {
                                      className: nt.Zy,
                                      location: A.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: e2.liQ.NITRO_HOME, section: e2.JJy.GIFT_BANNER },
                                  }),
                                  (0, c.jsx)("div", { className: nt.hz }),
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
                                      children: (0, c.jsx)("div", { ref: l, className: nt._Z }),
                                  }),
                                  (0, c.jsx)("img", {
                                      src: nr,
                                      className: nt.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: eg.intl.string(eg.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      O &&
                          null != k &&
                          (0, c.jsx)(s0, {
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
                    className: u()(nt.kL, nt.Lq, nt.TN, nt.Eg),
                    children: [
                        (0, c.jsx)(sd, {}),
                        (0, c.jsx)("div", { className: nt.S, children: (0, c.jsx)(g.y, {}) }),
                    ],
                })
              : (0, c.jsx)("div", { className: u()(nt.kL, nt.Lq), children: (0, c.jsx)(g.y, {}) });
    };
var nc = s(286320),
    no = s(727949),
    nd = s(440005),
    nu = s(26508);
let nm = (0, w.mj)({
    name: "2026-07-plan-select-ui-redesign",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var nx = s(860839);
let ng =
    "https://cdn.discordapp.com/assets/content/dfb187cfa9d267774f50c4f67cb7628658cefc11db41c6a04c08fc5aadc9dbcc.png";
function nf(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: ng,
        srcSet: `${ng} 1x, https://cdn.discordapp.com/assets/content/adb910c257d7510b97da4dccb2a4cea5f3a3fc6eb225dbfbbef0dd9d2a1971bf.png 2x`,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var np = s(37537),
    nh = s(783420),
    nN = s(204413),
    nA = s(245383),
    nj = s(824069),
    nb = s(785007),
    nC = s(947910);
function nE(e) {
    let { value: t, planRadioOptions: s, ...i } = e,
        n = s.map((e) => {
            let s = e.value === t;
            return {
                name: (0, c.jsxs)("div", {
                    className: nC.VH,
                    children: [
                        s &&
                            null != e.badgeText &&
                            (0, c.jsx)("div", {
                                className: nC.fQ,
                                children: (0, c.jsx)(tC.E, { type: { text: e.badgeText }, variant: "brand" }),
                            }),
                        (0, c.jsxs)(er.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            className: nC.qU,
                            children: [
                                (0, c.jsxs)(er.B, {
                                    direction: "vertical",
                                    align: "start",
                                    gap: 4,
                                    fullWidth: !1,
                                    className: nC.NI,
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
                                    className: nC.br,
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
                                                className: nC.yD,
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
                radioBarClassName: u()(nC.tG, { [nC.uA]: s, [nC.hy]: s && e.useGradientSelectedBorder }),
            };
        });
    return (0, c.jsx)(nb.$d, {
        ...i,
        options: n,
        value: t,
        size: nb.r9.NOT_SET,
        className: nC.ul,
        withTransparentBackground: !0,
    });
}
var nT = s(773669),
    nR = s(97352),
    nI = s(252424),
    nv = s(526292),
    n_ = s(186223),
    nS = s(369827),
    nP = s(803496);
function ny(e) {
    let t = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        s = (0, nS.L)(),
        i = t?.paymentSourceId ?? s,
        { priceOptions: n } = (0, nP.A)({
            activeSubscription: t,
            skuIDs: [(0, eM.mH)(e)],
            paymentSourceId: i,
            isGift: !1,
        });
    return n;
}
function nD(e, t, s, i, n) {
    return t && s?.includes(e) === !0 && null != i && null != n && i !== n;
}
function nO(e) {
    let { expectedUsageInterval: t, usageInterval: s, discountDuration: i, regularPrice: n, discountedPrice: a } = e;
    return s !== t || null == n || null == a
        ? null
        : t === t6.Ff.YEAR
          ? eg.intl.format(eg.t.G88D2T, { discountedPrice: a, numYears: i, regularPrice: n })
          : eg.intl.format(eg.t["x+qUAi"], { discountedPrice: a, numMonths: i, regularPrice: n });
}
var nM = s(614488);
function nL(e) {
    let { skuId: t, selectedPlanId: s, subscribeButtonProps: i } = e,
        n = null == s || !0 === i.disabled,
        a = null == s ? "secondary" : i.variant;
    return (0, c.jsx)(nh.A, {
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
function nk(e) {
    let { skuId: t, className: s } = e,
        i = t === t6.pe.TIER_2,
        n = (0, id.q)((0, iu.Ay)()),
        a = (0, np.c)("PlanSelectCard"),
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
                n = t6.En[t],
                a = t6.zE[t],
                r = t === t6.pe.TIER_2,
                l = ny(t),
                c = (0, eG.V)(),
                d = c?.subscriptionTrial?.skuId === t,
                { subscribedSkuId: u, isMonthlyPlanDisabled: m } = (0, x.cf)(
                    [M.A],
                    () => {
                        let e = M.A.getPremiumTypeSubscription();
                        return {
                            subscribedSkuId: (0, eM.aZ)(e),
                            isMonthlyPlanDisabled:
                                n === t6.gD.PREMIUM_MONTH_TIER_2 &&
                                null != e &&
                                [t6.gD.PREMIUM_YEAR_TIER_0, t6.gD.PREMIUM_YEAR_TIER_1].includes(e.planId),
                        };
                    },
                    [n],
                ),
                g = u === t,
                f = (0, eU.O)(),
                p = (0, nv.k5)(),
                h = (0, x.bG)([nT.default], () => nT.default.locale),
                N = (0, es.U9)(f, t),
                A = (0, es.N1)(n),
                j = (0, es.N1)(a),
                [b, C] = (0, x.yK)([nR.A], () => [nR.A.get(n), nR.A.get(a)], [n, a]),
                E = null != b ? (0, eM.sS)(b, l) : null,
                T = null != C ? (0, eM.sS)(C, l) : null,
                R =
                    N && f?.discount.amount != null && !p
                        ? eg.intl.formatToPlainString(eg.t.IAybsG, {
                              discount: (0, nI.l9)(h, Number(f.discount.amount) / 100),
                          })
                        : null,
                I = f?.discount?.planIds,
                v = nD(a, N, I, j, T),
                _ = nD(n, N, I, A, E),
                S = f?.discount.userUsageLimitInterval,
                P = f?.discount.userUsageLimit ?? t6.OJ,
                y = !r || v || _ || null == C ? null : (0, n_.Cj)(C, !1, l),
                D = !_ || m,
                O = (function (e) {
                    let { skuId: t, monthlyHasDiscount: s, isMonthlyPlanDisabled: i } = e;
                    return t !== t6.pe.TIER_2 ? null : s && !i ? t6.En[t] : t6.zE[t];
                })({ skuId: t, monthlyHasDiscount: _, isMonthlyPlanDisabled: m }),
                L = null == s || (s === n && m) ? O : s,
                k = [
                    {
                        value: a,
                        primaryText: eg.intl.string(eg.t["/Q4HRN"]),
                        primarySubText:
                            (v
                                ? nO({
                                      expectedUsageInterval: t6.Ff.YEAR,
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
                            ? nO({
                                  expectedUsageInterval: t6.Ff.MONTH,
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
        { buttonText: j } = (0, nA.A)({ subscriptionTier: t }),
        { subscribeButtonProps: b } = (0, nN.$)({
            subscriptionTier: t,
            variantOverride: A,
            buttonTextOverride: N ? j : void 0,
        }),
        C = (0, c.jsxs)(er.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nM.Ux,
            children: [
                (0, c.jsx)(er.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nM.MY,
                    children: (0, c.jsx)(el.D, {
                        variant: a ? "nitro-md" : "display-md",
                        color: n ? "text-strong" : "text-overlay-light",
                        className: a ? nM.ck : nM.JJ,
                        children: i ? eg.intl.string(eg.t.lG6a5x) : eg.intl.string(eg.t["t9uG/o"]),
                    }),
                }),
                (0, c.jsx)(er.B, {
                    direction: "vertical",
                    gap: 0,
                    fullWidth: !0,
                    className: nM.qT,
                    children: i
                        ? (0, c.jsx)(nx.ZP, {
                              featureSet: nx.Nz.DEFAULT,
                              isApplicationHome: !0,
                              enablePremiumBrandRefresh: !0,
                              textVariant: "text-md/medium",
                          })
                        : (0, c.jsx)(nx.nH, {
                              enablePremiumBrandRefresh: !0,
                              isApplicationHome: !0,
                              textVariant: "text-md/medium",
                          }),
                }),
                i && (0, c.jsx)(nj.K, {}),
                m
                    ? (0, c.jsx)("div", {
                          className: nM.qS,
                          role: "separator",
                          children: (0, c.jsx)(ec.E, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              className: nM.ZV,
                              children: (function (e, t) {
                                  if (null == e || null == t) return null;
                                  switch (e) {
                                      case t6.WT.DAY:
                                          if (t % 7 == 0) return eg.intl.format(eg.t["1MYPH0"], { weeks: t / 7 });
                                          return eg.intl.format(eg.t.pYfIoO, { days: t });
                                      case t6.WT.MONTH:
                                          return eg.intl.format(eg.t["96hTLe"], { months: t });
                                      case t6.WT.YEAR:
                                          return eg.intl.format(eg.t.B0ZmdG, { years: t });
                                      default:
                                          return null;
                                  }
                              })(l.interval, l.intervalCount),
                          }),
                      })
                    : (0, c.jsx)("hr", { className: nM.yF }),
                (0, c.jsxs)("div", {
                    className: nM.qr,
                    children: [
                        (0, c.jsx)(nE, { planRadioOptions: f, value: p ?? "", onChange: (e) => h(e.value) }),
                        (0, c.jsx)(nL, { skuId: t, selectedPlanId: p, subscribeButtonProps: b }),
                    ],
                }),
            ],
        }),
        E = u()(nM.Nr, s, { [nM.Fw]: i });
    return i
        ? (0, c.jsxs)(eN.h, {
              color: "nitro-pink",
              className: E,
              children: [
                  (0, c.jsx)("div", {
                      className: nM.kX,
                      "aria-hidden": !0,
                      children: (0, c.jsx)(nf, { alt: "", ariaHidden: !0, width: "100%", height: "auto" }),
                  }),
                  C,
              ],
          })
        : (0, c.jsx)("div", { className: E, children: C });
}
function nU(e) {
    let { className: t } = e,
        s = (0, id.q)((0, iu.Ay)()),
        i = (0, np.c)("PlanSelectPremiumGroupCard"),
        n = (0, eU.p)(),
        a = null != n,
        r = ny(t6.pe.TIER_2),
        l = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        { avatarSrc: o, eventHandlers: d } = (0, eJ.A)({ userId: l?.id, size: eY._3.SIZE_32, animateOnHover: !0 }),
        m = (0, x.bG)([nR.A], () => nR.A.get(t6.gD.PREMIUM_GROUP_MONTH)),
        f = (0, es.N1)(t6.gD.PREMIUM_GROUP_MONTH),
        p = a
            ? eg.intl.format(iL.default["7j70dP"], {
                  percent: n.discount?.amount,
                  premiumGroupProductName: (0, iM.DP)(),
              })
            : eg.intl.string(eg.t["2pG5Ga"]),
        h = (0, c.jsx)(nh.A, {
            subscriptionTier: t6.pe.TIER_2,
            initialPlanId: t6.gD.PREMIUM_GROUP_MONTH,
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
        className: u()(nM.Nr, t),
        children: (0, c.jsxs)(er.B, {
            direction: "vertical",
            gap: 0,
            fullWidth: !0,
            className: nM.Ux,
            children: [
                (0, c.jsxs)(er.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    fullWidth: !0,
                    className: nM.MY,
                    children: [
                        (0, c.jsx)(el.D, {
                            variant: i ? "nitro-md" : "display-md",
                            color: s ? "text-strong" : "text-overlay-light",
                            className: i ? nM.ck : nM.JJ,
                            children: eg.intl.string(iL.default.eSKiXk),
                        }),
                        null != l &&
                            (0, c.jsxs)(er.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 0,
                                fullWidth: !1,
                                className: nM.DD,
                                "aria-hidden": !0,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: nM.uA,
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
                                        className: nM.VL,
                                        children: (0, c.jsxs)(ec.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-default",
                                            children: ["+", iM.LM],
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
                    className: nM.qT,
                    children: (0, c.jsx)(nx.Lg, { isApplicationHome: !0, textVariant: "text-md/medium" }),
                }),
                (0, c.jsx)("hr", { className: nM.yF }),
                (0, c.jsxs)("div", {
                    className: nM.qr,
                    children: [
                        (0, c.jsxs)("div", {
                            className: nM.ec,
                            children: [
                                (0, c.jsx)(ec.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: eg.intl.string(iL.default.SvSwga),
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
function nG(e) {
    let { innerRef: t, className: s } = e,
        { analyticsLocations: i } = (0, j.Ay)(A.A.PREMIUM_MARKETING_TIER_CARD),
        n = (0, nx.pw)(t),
        a = (0, iO.PA)(),
        r = (0, x.bG)([ev.Ay], () => ev.Ay.useReducedMotion),
        l = { [nM.iR]: !r };
    return (0, c.jsx)(j.f5, {
        value: i,
        children: (0, c.jsxs)(er.B, {
            direction: "vertical",
            align: "center",
            gap: 32,
            fullWidth: !0,
            className: u()(nM.oB, s),
            children: [
                (0, c.jsx)(el.D, {
                    variant: "nitro-md",
                    color: "text-strong",
                    className: nM.op,
                    children: eg.intl.string(eg.t.vLz3Zs),
                }),
                (0, c.jsxs)("div", {
                    ref: n,
                    className: u()(nM.kR, { [nM.BQ]: a }),
                    children: [
                        (0, c.jsx)(nk, { skuId: t6.pe.TIER_0, className: u()(nM.rz, l) }),
                        (0, c.jsx)(nk, { skuId: t6.pe.TIER_2, className: u()(nM.Rv, l) }),
                        a && (0, c.jsx)(nU, { className: u()(nM.zz, l) }),
                    ],
                }),
            ],
        }),
    });
}
var nw = s(226830),
    nB = s(366010),
    nH = s(303136);
let nF = function (e) {
    let t,
        { className: s } = e,
        i = (0, tL.TM)(),
        n = (0, nB.q)((0, iu.Ay)());
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
                nH.A,
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
var nV =
        (((l = {}).HOME = "home"),
        (l.WHATS_NEW = "whatsNew"),
        (l.BEST_OF_NITRO = "bestOfNitro"),
        (l.PLANS = "plans"),
        (l.COMPARE = "compare"),
        l),
    nz = s(352756);
let nW = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i } = e,
        n = (0, ea.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        a = { section: e2.JJy.MARKETING_FLOATING_CTA };
    return (0, c.jsx)(ei.animated.div, {
        className: nz.i,
        style: n,
        "data-mtctest-ignore": "true",
        children: (0, c.jsxs)("div", {
            className: nz.U,
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
var nY = s(573710);
let nK = function () {
    let e = (0, tM.bG)([ev.Ay], () => ev.Ay.useReducedMotion);
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)("div", {
                className: nY.BI,
                children: (0, c.jsx)(tw, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: tU.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, c.jsx)("img", { src: tq, alt: "", className: nY.Q }),
                }),
            }),
            (0, c.jsx)(tH, {
                isMotionReduced: e,
                boltContainerClassName: nY.nJ,
                carContainerClassName: nY.IN,
                hammerContainerClassName: nY.Gj,
                keyContainerClassName: nY.FV,
                starContainerClassName: nY.E1,
                boltAssetClassName: nY.j7,
                carAssetClassName: nY.or,
                hammerAssetClassName: nY.Wv,
                keyAssetClassName: nY.rs,
                starAssetClassName: nY.OY,
            }),
        ],
    });
};
var nX = s(989756);
let nZ = o.forwardRef((e, t) => {
    let { analyticsLocations: s } = (0, j.Ay)(A.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, c.jsx)(j.f5, {
        value: s,
        children: (0, c.jsx)("div", {
            ref: t,
            className: nX.kL,
            children: (0, c.jsxs)("div", {
                className: nX.hQ,
                children: [
                    (0, c.jsx)(nK, {}),
                    (0, c.jsx)(el.D, {
                        variant: "nitro-md",
                        color: "text-strong",
                        className: nX.RH,
                        children: eg.intl.string(eg.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
});
nZ.displayName = "PremiumMarketingFooter";
var nJ = s(939249);
let nQ = function (e) {
    let { navBarSections: t, activeSectionId: s } = e,
        i = {
            [nV.HOME]: eg.intl.string(eg.t.uGRXjS),
            [nV.WHATS_NEW]: eg.intl.string(eg.t["mfcR/v"]),
            [nV.BEST_OF_NITRO]: eg.intl.string(eg.t.xQKkE8),
            [nV.PLANS]: eg.intl.string(eg.t.wyNMnm),
            [nV.COMPARE]: eg.intl.string(eg.t.pwD7If),
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
                                    nJ.D,
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
var nq = s(704333),
    n$ = s(414499),
    n0 = s(597770),
    n1 = s(500060),
    n2 = s(866665),
    n3 = s(406860),
    n7 = s(870975),
    n6 = s(698834);
function n5() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, n3.A)({ boxType: sj.$, thirdPartyPartner: "xbox" }),
        s = [
            { icon: nq.B, text: eg.intl.string(sE.default.MUypiB) },
            { icon: n$.h, text: eg.intl.string(sE.default.ec5Rdd) },
            { icon: n0.GiftIcon, text: eg.intl.string(sE.default["9t2CzW"]), tooltip: sE.default.AyECej },
            { icon: n1.o, text: eg.intl.string(sE.default.R7YJAY) },
        ];
    return (0, c.jsx)(W.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, c.jsx)("div", {
            ref: e,
            className: n6.iE,
            children: (0, c.jsxs)("div", {
                className: n6.Nr,
                children: [
                    (0, c.jsxs)("div", {
                        className: n6.j,
                        children: [
                            (0, c.jsx)("div", { className: n6._g }),
                            (0, c.jsx)("div", { className: n6.$h }),
                            (0, c.jsx)("div", { className: n6.Rv }),
                            (0, c.jsx)("div", { className: n6.Lw }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: n6.CT,
                        children: [
                            (0, c.jsxs)("div", {
                                className: n6.Qs,
                                children: [
                                    (0, c.jsxs)("div", {
                                        children: [
                                            (0, c.jsx)(el.D, {
                                                variant: "heading-xxl/bold",
                                                color: "text-strong",
                                                className: n6.R_,
                                                children: eg.intl.string(sE.default.rkt1aw),
                                            }),
                                            (0, c.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, c.jsxs)(
                                                            "div",
                                                            {
                                                                className: n6.yf,
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
                                                                            className: n6.Jn,
                                                                            children: (0, c.jsx)(n2.m, {
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
                                                        className: n6.xF,
                                                        children: (0, c.jsx)(tc.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: t6.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: n6.WE,
                                        children: (0, c.jsx)(ec.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: eg.intl.format(sE.default.KDKdWi, { termsLink: (0, n7.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, c.jsx)("div", {
                                className: n6.r1,
                                children: (0, c.jsx)("img", {
                                    className: n6.wm,
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
var n8 = s(750338),
    n9 = s(19290),
    n4 = s(505051);
function ae(e) {
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
        className: u()(n4.boxBackdrop, t),
        children: [
            (0, c.jsx)(el.D, {
                className: n4.bentoSectionHeader,
                variant: "nitro-md",
                color: "text-strong",
                children: i,
            }),
            null != l && (0, c.jsx)("div", { className: n4.highlightBento, children: l }),
            (0, c.jsx)("div", {
                className: n4.bentoBoxesGrid,
                children: s.map((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = n9.A0.SMALL;
                            break;
                        case 2:
                            s = n9.A0.MEDIUM;
                            break;
                        default:
                            s = n9.A0.LARGE;
                    }
                    return (0, c.jsx)(c.Fragment, {
                        children: e.map((e) =>
                            (0, c.jsx)(
                                n8.A,
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
let at = o.memo(function (e) {
        let t = (0, su.b)("premium_marketing_bento"),
            { whatsNewBoxes: s } = (0, n9.Ay)(t);
        return (0, c.jsx)(ae, {
            boxLayout: s,
            title: eg.intl.string(eg.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: t ? (0, c.jsx)(n5, {}) : null,
            ...e,
        });
    }),
    as = o.memo(function (e) {
        let { bestOfBoxes: t } = (0, n9.Ay)();
        return (0, c.jsx)(ae, { boxLayout: t, title: eg.intl.string(eg.t.EnzW2H), startLeftAligned: !0, ...e });
    }),
    ai = (0, w.mj)({
        kind: "user",
        name: "2026-07-onyx",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var an = s(236834),
    aa = s(540504);
function ar(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eJ.A)({ userId: t?.id, size: eY._3.SIZE_24, animateOnHover: !0 });
    return (0, c.jsx)("div", {
        className: aa.$6,
        children: (0, c.jsxs)("div", {
            className: aa.sc,
            children: [
                (0, c.jsx)("div", {
                    className: aa.kR,
                    children: (0, c.jsx)(eK.eu, { src: s, "aria-label": t.username, size: eY._3.SIZE_32, ...i }),
                }),
                (0, c.jsx)(el.D, {
                    variant: "heading-sm/normal",
                    className: aa.FS,
                    color: "text-strong",
                    children: eg.intl.format(eg.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var al = s(579245),
    ac = s(369805);
let ao = function () {
    let e = (0, ac.A)(void 0, { includesPremiumGroup: !0 });
    return null == e ? null : (0, c.jsx)(eV, { text: e });
};
function ad() {
    let e = (0, x.bG)([nR.A], () => nR.A.getForSkuAndInterval((0, eM.mH)(t6.pe.TIER_0), t6.WT.MONTH));
    return null != e ? (0, eM.sS)(e) : "\u2026";
}
var au = s(508556);
let am = function (e) {
    let { containerVisibilityPercentage: t } = e,
        s = (0, tM.bG)([ev.Ay], () => ev.Ay.useReducedMotion),
        i = (0, tL.TM)();
    return (0, c.jsxs)("div", {
        "aria-hidden": !0,
        className: au.YU,
        children: [
            (0, c.jsx)(tz, {
                supportHEVCAlpha: i,
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                containerClassName: au.wG,
                assetClassName: au.lu,
            }),
            (0, c.jsx)(tH, {
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                boltContainerClassName: au.nJ,
                carContainerClassName: au.IN,
                hammerContainerClassName: au.Gj,
                keyContainerClassName: au.FV,
                starContainerClassName: au.E1,
                boltAssetClassName: au.j7,
                carAssetClassName: au.or,
                hammerAssetClassName: au.Wv,
                keyAssetClassName: au.rs,
                starAssetClassName: au.OY,
            }),
        ],
    });
};
var ax = s(14057);
let ag = o.memo(
    o.forwardRef(function (e, t) {
        let { className: s, subscriptionTier: i, isEligibleForBogoPromotion: n } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            r = ad(),
            l = ai.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
            o = (0, an.A)(),
            d = null != o,
            { visibilityPercentageRef: m, visibilityPercentage: g } = eH(
                !(0, x.bG)([ev.Ay], () => ev.Ay.useReducedMotion),
            ),
            f = (0, nc.b)(),
            p = !d && f.length > 0,
            h = (0, ew.c)(eC.C.MARKETING_PAGE_BANNER),
            N = null != h && "marketingPageBanner" === h.properties.properties.oneofKind,
            b = (0, nv.ar)() && !N,
            C = (0, eU.O)(),
            E = (null != C && t6.U4.includes(C.discountId)) || N;
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsx)("div", {
                ref: t,
                className: u()(ax.kL, s),
                "data-testid": "marketing-page-hero-header",
                children: (0, c.jsx)("div", {
                    ref: m,
                    children: (0, c.jsxs)("div", {
                        className: ax.hQ,
                        children: [
                            (0, c.jsx)(am, { containerVisibilityPercentage: g }),
                            b && (0, c.jsx)(ao, {}),
                            (0, c.jsx)("div", {
                                className: ax.s8,
                                children: (0, c.jsx)(tA.F, {
                                    forceLevel: 1,
                                    children: (0, c.jsx)(el.D, {
                                        variant: "nitro-md",
                                        color: "text-strong",
                                        className: ax.wx,
                                        children: eg.intl.string(eg.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, c.jsxs)("div", {
                                className: ax.rf,
                                children: [
                                    d &&
                                        (0, c.jsx)("div", {
                                            className: ax.eZ,
                                            children: (0, c.jsx)(ar, { referrer: o }),
                                        }),
                                    p &&
                                        (0, c.jsx)("div", {
                                            className: ax.Qn,
                                            children: (0, c.jsx)(al.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, c.jsxs)("div", {
                                        className: b ? ax.es : ax.UJ,
                                        children: [
                                            (0, c.jsx)(tc.A, {
                                                size: "md",
                                                fullWidth: b,
                                                hasActivePromotion: !!n,
                                                subscriptionTier: E && null == i ? t6.pe.NONE : i,
                                                buttonTextOverride: E ? eg.intl.string(eg.t["2pG5Ga"]) : void 0,
                                            }),
                                            !b && (0, c.jsx)(eA.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: ax.iQ,
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
var af = s(820081),
    ap = s(140735),
    ah = s(401432),
    aN = s(580630),
    aA = s(795269),
    aj = s(84483),
    ab = s(701974),
    aC = s(55647),
    aE = s(202600);
function aT(e) {
    let { includes: t } = e;
    return t
        ? (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(af.B, { size: "sm", color: en.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(ap.A, { children: eg.intl.string(eg.t["tq+6t/"]) }),
              ],
          })
        : (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(ah.a, { size: "xs", color: en.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(ap.A, { children: eg.intl.string(eg.t.l4qZrp) }),
              ],
          });
}
function aR(e) {
    let { label: t, tier0ColumnData: s, tier2ColumnData: i } = e;
    return (0, c.jsxs)("tr", {
        className: u()(aC.nM, aC.WQ),
        children: [
            (0, c.jsx)("th", {
                scope: "row",
                className: aC.nx,
                children: (0, c.jsx)(ec.E, { variant: "text-md/medium", children: t }),
            }),
            (0, c.jsx)("td", {
                className: aC.Hn,
                children:
                    null != s.text
                        ? (0, c.jsx)(ec.E, { variant: "text-md/medium", children: s.text })
                        : (0, c.jsx)(aT, { includes: !!s.includes }),
            }),
            (0, c.jsx)("td", {
                className: aC.Hn,
                children:
                    null != i.text
                        ? (0, c.jsx)(ec.E, { variant: "text-md/medium", children: i.text })
                        : (0, c.jsx)(aT, { includes: !!i.includes }),
            }),
        ],
    });
}
function aI(e) {
    let { title: t, subtitle: s, rows: i } = e;
    return (0, c.jsxs)("tbody", {
        children: [
            (0, c.jsx)("tr", {
                className: u()(aC.nM, aC.Gf),
                children: (0, c.jsxs)("td", {
                    className: aC.nx,
                    colSpan: 3,
                    children: [
                        (0, c.jsx)(el.D, { variant: "heading-lg/bold", children: t }),
                        null != s && (0, c.jsx)(ec.E, { variant: "text-xs/medium", children: s }),
                    ],
                }),
            }),
            i.map((e) => (0, c.jsx)(aR, { ...e }, e.id)),
        ],
    });
}
function av(e) {
    let { premiumType: t, priceString: s } = e,
        i = t === t6.PremiumTypes.TIER_0 ? eg.intl.string(eg.t.tUbSDK) : eg.intl.string(eg.t.Ipxkog);
    return (0, c.jsxs)("div", {
        className: aC.nn,
        children: [
            (0, c.jsxs)("div", {
                className: aC.KS,
                children: [
                    (0, c.jsx)(ed.t, { colorClass: aC.oG }),
                    (0, c.jsx)(el.D, { variant: "heading-sm/semibold", children: i }),
                ],
            }),
            (0, c.jsx)(el.D, { variant: "heading-sm/semibold", children: s }),
        ],
    });
}
function a_(e) {
    let { tier0Price: t, tier2Price: s, shouldUseDiscountPrice: i, tier2DiscountedPriceString: n } = e,
        a = i ? n : (0, aN.$g)(s.amount, s.currency);
    return (0, c.jsx)("thead", {
        children: (0, c.jsxs)("tr", {
            className: aC.U1,
            children: [
                (0, c.jsx)("th", {
                    scope: "col",
                    className: aC.Cr,
                    children: (0, c.jsx)(el.D, { variant: "heading-xl/bold", children: eg.intl.string(eg.t.ED4UVD) }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: aC.Hn,
                    children: (0, c.jsx)(av, {
                        premiumType: t6.PremiumTypes.TIER_0,
                        priceString: (0, aN.$g)(t.amount, t.currency),
                    }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: aC.Hn,
                    children: (0, c.jsx)(av, { premiumType: t6.PremiumTypes.TIER_2, priceString: a }),
                }),
            ],
        }),
    });
}
let aS = function (e) {
        let t,
            { className: s, hidePill: i = !1, selectedPlanTier: n = t6.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: a } = (0, j.Ay)(A.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            r = (0, eG.V)(),
            l = r?.subscriptionTrial?.skuId,
            d = (0, eU.O)(),
            m = (0, es.YJ)(d),
            x = null != d && (0, es.U9)(d, t6.pe.TIER_2) && m === t6.gD.PREMIUM_MONTH_TIER_2,
            g = (0, es.N1)(m),
            f = null != g ? `${g}/${(0, eM.FJ)(t6.WT.MONTH)}` : "",
            p = (0, eM.JM)(t6.gD.PREMIUM_MONTH_TIER_0),
            h = (0, eM.JM)(t6.gD.PREMIUM_MONTH_TIER_2),
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
                            label: eg.intl.string(ab.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    s = null,
                    i = [],
                    { shouldShowBonusOrbsUX: n, multiplier: a } = (0, ib.lk)(i_.rE.NITRO_HOME_MARKETING),
                    { enabled: r } = sk.A.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: l } = (0, sU.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    }),
                    { isInTreatment: c } = (0, aj.uX)("premium_marketing_comparison");
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
                                label: eg.intl.string(sV.default["gc2sa/"]),
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
                                label: eg.intl.string(iR.default["20tmSN"]),
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
                                    tier0ColumnData: { text: (0, eM.EJ)(t6.PremiumTypes.TIER_0) },
                                    tier2ColumnData: { text: (0, eM.EJ)(t6.PremiumTypes.TIER_2) },
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
                                        numBoosts: t6.M4,
                                        percentageOff: (0, aN.l9)(nT.default.locale, t6.oX / 100),
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
            t = (0, c.jsx)(aA.R, { className: u()(aC.Io, aC.SP), text: e });
        }
        let b = l === t6.pe.TIER_0 || n === t6.PremiumTypes.TIER_0;
        return (0, c.jsx)(j.f5, {
            value: a,
            children: (0, c.jsxs)("div", {
                className: u()(aC.zr, s),
                children: [
                    (0, c.jsx)(el.D, {
                        className: aC.Qw,
                        variant: "nitro-md",
                        color: "text-strong",
                        children: eg.intl.string(eg.t.DbPgAd),
                    }),
                    (0, c.jsxs)("div", {
                        className: aC.wY,
                        children: [
                            (0, c.jsxs)("div", {
                                className: u()(aC.fO, { [aC.Vd]: b, [aC.hA]: !b }),
                                children: [
                                    !b && t,
                                    (0, c.jsx)("div", { className: aC.xQ }),
                                    (0, c.jsxs)("div", {
                                        className: aC.wN,
                                        children: [
                                            (0, c.jsx)("img", { src: aE, alt: "", className: aC.kQ }),
                                            (0, c.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: aC.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, c.jsxs)("table", {
                                className: aC.tp,
                                children: [
                                    (0, c.jsx)(a_, {
                                        tier0Price: p,
                                        tier2Price: h,
                                        shouldUseDiscountPrice: x,
                                        tier2DiscountedPriceString: f,
                                    }),
                                    N.map((e) => (0, o.createElement)(aI, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    aP = function (e) {
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
var ay = s(818348),
    aD = s(773188);
function aO(e) {
    let { innerRef: t, isPlanSelectUiRedesignEnabled: s } = e;
    return s ? (0, c.jsx)(nG, { innerRef: t }) : (0, c.jsx)(nw.jP, { innerRef: t });
}
let aM = () => {
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
        I = null !== R && R !== t6.pe.TIER_2 ? t6.pe.TIER_2 : null,
        S = (0, eL.cg)(),
        { analyticsLocations: P } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
    o.useEffect(() => {
        C(!0);
    }, []);
    let y = (0, sL.A0)({ location: "PremiumMarketingHome" }),
        D = (0, nu.DK)(nd.W.NITRO, "PremiumMarketingHome"),
        { shouldShowBonusOrbsUX: O } = (0, ib.lk)(i_.rE.NITRO_HOME_MARKETING),
        k = D && O ? n9.NI.COMBINED_ORBS : O ? n9.NI.ORB_MULTIPLIER : D ? n9.NI.ORB_REWARDS : null,
        U = o.useMemo(() => {
            let t = new URLSearchParams(e.search).get("section");
            return "orbs" === t
                ? k
                : t === n9.NI.THREE_P_PROMOTIONS
                  ? y
                      ? n9.NI.CALL_OF_DUTY
                      : n9.NI.THREE_P_PROMOTIONS
                  : null;
        }, [y, e.search, k]);
    nn(U ?? "", null != U);
    let { navBarSections: G, activeSectionId: w } = aP([nV.HOME, nV.WHATS_NEW, nV.BEST_OF_NITRO, nV.PLANS, nV.COMPARE]),
        { home: B, whatsNew: H, bestOfNitro: F, plans: V, compare: z } = G,
        K = (function (e) {
            let { location: t } = e;
            return nm.useConfig({ location: t });
        })({ location: "PremiumMarketingHome" }),
        X = (0, c.jsxs)("div", {
            ref: s,
            className: u()(aD.kL, aD.Gd, aD.iI, { [aD.Hq]: !l }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(nF, { className: aD.yH }),
                (0, c.jsx)(nQ, { navBarSections: G, activeSectionId: w }),
                (0, c.jsxs)("div", {
                    className: aD.Qr,
                    children: [
                        (0, c.jsx)("div", {
                            className: aD.qY,
                            ref: B.ref,
                            children: (0, c.jsx)(W.L, {
                                innerRef: n,
                                onChange: (e) => g(e),
                                threshold: 0,
                                active: !0,
                                children: (0, c.jsx)(ag, {
                                    ref: n,
                                    subscriptionTier: I,
                                    isEligibleForBogoPromotion: S,
                                }),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: aD.So,
                            ref: H.ref,
                            children: (0, c.jsx)(at, { shouldLoadVideo: b, isReducedMotion: l }),
                        }),
                        (0, c.jsx)("div", {
                            className: aD.KQ,
                            ref: F.ref,
                            children: (0, c.jsx)(as, { shouldLoadVideo: b, isReducedMotion: l }),
                        }),
                        (0, c.jsx)("div", {
                            className: aD.s5,
                            ref: V.ref,
                            children: (0, c.jsx)(
                                W.L,
                                {
                                    innerRef: i,
                                    onChange: (e) => p(e),
                                    threshold: 0.1,
                                    active: !0,
                                    children: (0, c.jsx)(aO, { innerRef: i, isPlanSelectUiRedesignEnabled: K }),
                                },
                                K ? "plan-select-cards" : "tier-cards",
                            ),
                        }),
                        (0, c.jsx)("div", { className: aD.aC, ref: z.ref, children: (0, c.jsx)(aS, {}) }),
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
                    children: (0, c.jsx)("div", { ref: a, className: aD._Z }),
                }),
                (0, c.jsx)(nZ, { ref: r }),
                (0, c.jsx)(nW, { isVisible: !d && !f && b, subscriptionTier: I, isEligibleForBogoPromotion: S }),
                (0, c.jsx)(nF, { className: aD.MF }),
            ],
        });
    return (0, c.jsx)(sg.N, {
        theme: ay.NJ.DARK,
        children: (e) => (0, c.jsx)(Y.Gt, { className: u()(aD.XG, e), ref: t, children: X }),
    });
};
var aL = s(862482),
    ak = s(412260),
    aU = s(662367),
    aG = s(374403),
    aw = s(396375),
    aB = s(815846),
    aH = s(370049);
let aF = function (e) {
    let t,
        s,
        { premiumSubscription: i, className: n, textColor: a } = e,
        r = (0, nv.ar)();
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
    let d = (null != l ? eM.Ay.getSkuIdForPlan(l.planId) : null) === t6.pe.TIER_1;
    return (
        (s = null != a ? a : r ? "text-overlay-light" : "text-default"),
        (0, c.jsxs)(sf.Z, {
            className: u()(aH.kL, n, { [aH.He]: r }),
            type: sf.Z.Types.CUSTOM,
            children: [
                (0, c.jsx)(sO.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: u()(aH.Kk, { [aH.Pt]: r }),
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
var aV = s(978836);
let az = function (e) {
    let { lifted: t = !1 } = e;
    return (0, c.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: u()(aV.zr, { [aV.N]: t }),
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
                        (0, c.jsx)("stop", { className: aV.eq }),
                        (0, c.jsx)("stop", { offset: "0.339235", className: aV.l_ }),
                        (0, c.jsx)("stop", { offset: "0.492065", className: aV.sM }),
                        (0, c.jsx)("stop", { offset: "0.823236", className: aV.zi }),
                        (0, c.jsx)("stop", { offset: "0.899558", className: aV.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var aW = s(900797),
    aY = s(847374),
    aK = s(812993),
    aX = s(614268);
function aZ(e) {
    let { className: t } = e;
    return (0, c.jsx)(aK.Lp, { className: u()(aX.T, t), text: eg.intl.string(eg.t.EYxi0o) });
}
var aJ = s(904788),
    aQ = s(507553);
let aq = "/assets/5b4fec8511c3676a.svg",
    a$ = "/assets/0838bda6ecd20d91.svg";
function a0(e, t, s) {
    return (0, id.M)(e) ? t : s;
}
var a1 = s(872461);
function a2(e) {
    let { isShowingAll: t, onClick: s } = e;
    return (0, c.jsxs)(nJ.D, {
        onClick: s,
        className: a1.customButton,
        children: [
            t ? eg.intl.string(eg.t.maZaN3) : eg.intl.string(eg.t["37C26f"]),
            t
                ? (0, c.jsx)(aW.t, { size: "md", color: "currentColor", className: a1.arrow })
                : (0, c.jsx)(aY.a, { size: "md", color: "currentColor", className: a1.arrow }),
        ],
    });
}
function a3(e) {
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
            className: u()(a1.perkCard, i),
            children: [
                l
                    ? (0, c.jsx)(aJ.A, {
                          className: a1.perkCardNewBadge,
                          shouldInheritBackgroundColor: !0,
                          shouldInheritTextColor: !0,
                      })
                    : null,
                o ? (0, c.jsx)(aZ, { className: a1.perkCardEarlyAccessBadge }) : null,
                (0, c.jsx)("img", { src: n, alt: "", className: u()(a, a1.perksCardArt) }),
                (0, c.jsxs)("div", {
                    children: [
                        (0, c.jsxs)(el.D, {
                            variant: "heading-lg/extrabold",
                            className: a1.perkCardHeading,
                            children: [t, " ", r],
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/normal",
                            className: a1.perkCardDescription,
                            children: "function" == typeof s ? s(d) : s,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let a7 = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [n, a] = o.useState(!1),
        r = (function (e) {
            let { styles: t } = e,
                i = (0, iu.Ay)(),
                n = (0, ig.X)("usePerkCards"),
                a = (0, tM.bG)([D.default], () => {
                    let e = D.default.getCurrentUser();
                    return eM.Ay.canUsePremiumProfileCustomization(e);
                }),
                r = (0, eM.EJ)(t6.PremiumTypes.TIER_2, { useSpace: !1 });
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
                    imageSource: a0(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
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
                                (aQ.A.setState({ scrollPosition: i1._F.TRY_IT_OUT }),
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
                    imageSource: a0(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: eg.intl.string(eg.t.Bv8Pfk),
                    description: eg.intl.string(eg.t.JMfaTU),
                    imageSource: a0(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: eg.intl.string(eg.t.Bv8Pfk),
                    description: eg.intl.string(eg.t.JMfaTU),
                    imageSource: a0(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: eg.intl.string(eg.t["lGcW+c"]),
                    description: eg.intl.string(eg.t["/fDyO+"]),
                    imageSource: a0(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: eg.intl.string(eg.t["1c+xwT"]),
                    description: eg.intl.string(eg.t.hJG8ZN),
                    imageSource: a0(i, a$, aq),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: eg.intl.string(eg.t.tzdIwI),
                    description: eg.intl.string(eg.t.hJG8ZN),
                    imageSource: a0(i, a$, aq),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: eg.intl.string(eg.t.tzdIwI),
                    description: eg.intl.string(eg.t.hJG8ZN),
                    imageSource: a0(i, a$, aq),
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
                    imageSource: a0(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
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
                    imageSource: a0(i, i2, i3),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: a1 }),
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
        className: u()(a1.perksContainer, t, {
            [a1.partiallyHidden]: i && !n,
            [a1.subscriberNitroHome]: i,
            [a1.reducedMotion]: l,
        }),
        children: [
            (0, c.jsx)(el.D, {
                variant: "heading-xxl/extrabold",
                className: a1.perksTitle,
                children: i ? eg.intl.string(eg.t.QX14gI) : eg.intl.string(eg.t.RGadQR),
            }),
            (0, c.jsx)("div", {
                className: u()(a1.perkCardContainer, { [a1.perkCardContainerExpanded]: n }),
                children: m.map((e) => null != e && (0, c.jsx)(a3, { ...e }, e.title)),
            }),
            i &&
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)("div", {
                            className: u()({ [a1.sizeGizmo]: !n, [a1.sizeGizmoExpanded]: n }),
                            children: (0, c.jsx)(a2, {
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
                        (0, c.jsx)("div", { className: u()(a1.cover, { [a1.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var a6 = s(194509),
    a5 = s(317587);
let a8 = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: n } = e,
        a = (0, ea.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        r = { section: e2.JJy.MARKETING_FLOATING_CTA },
        l = (0, iu.Ay)(),
        o = (0, nB.M)(l);
    return (0, c.jsx)(ei.animated.div, {
        className: u()(a5.iE, { [a5.H8]: i, [a5.q4]: !t }),
        style: a,
        children: (0, c.jsxs)("div", {
            className: i ? a5.zW : a5.iJ,
            children: [
                (0, c.jsx)(aw.A, {
                    color: o ? aL.XD.BRAND_INVERTED : void 0,
                    className: u()(a5.x6, { [a5.Ph]: o }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: r,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: o ? void 0 : a5.PJ,
                }),
                (0, c.jsx)(a6.A, { className: a5.x6, premiumModalAnalyticsLocation: r }),
            ],
        }),
    });
};
var a9 = s(386564);
function a4(e) {
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
            ? (0, c.jsx)(aw.A, {
                  color: r ? aL.XD.BRAND_INVERTED : void 0,
                  className: u()(a9.x6, a9.Ph, n, { [a9.Sq]: t && a, [a9.MF]: a && !r }),
                  shinyButtonClassName: r ? void 0 : a9.PJ,
                  subscriptionTier: s,
                  hasActivePromotion: !0,
              })
            : (0, c.jsx)(aw.A, {
                  color: r || !a ? aL.XD.BRAND_INVERTED : void 0,
                  className: u()(a9.x6, a9.Ph, n, { [a9.Sq]: t && a, [a9.MF]: a && !r }),
                  subscriptionTier: s,
              }),
        d = t && a ? null : (0, c.jsx)(a6.A, { className: u()(a9.x6, n), color: a ? void 0 : aL.XD.WHITE });
    return (0, c.jsxs)("div", { className: u()(a9.UD, i), children: [o, " ", d] });
}
function re() {
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(aJ.p, { className: a9.zd }),
            (0, c.jsx)(aJ.p, { className: a9.G }),
            (0, c.jsx)(aJ.p, { className: a9.zy }),
            (0, c.jsx)(aJ.p, { className: a9.GX }),
        ],
    });
}
function rt(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        n = ad();
    return (0, c.jsx)(ec.E, {
        variant: t,
        color: i ? "text-subtle" : "text-overlay-light",
        className: u()(a9.h_, { [a9.If]: s, [a9.jn]: i }),
        children: eg.intl.format(eg.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let rs = o.forwardRef(function (e, t) {
    let { className: s, buttonClassName: i, subscriptionTier: n, isDarkMode: a } = e,
        { analyticsLocations: r } = (0, j.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        l = (0, ek.QQ)(),
        o = (0, nv.ar)(),
        d = (0, eL.cg)(),
        m = (0, nc.b)().length > 0,
        x = eg.intl.string(eg.t.YCZldK);
    return (0, c.jsx)(j.f5, {
        value: r,
        children: (0, c.jsxs)("div", {
            ref: t,
            className: u()(a9.kL, s, { [a9.V1]: !o, [a9.Q4]: !o && m }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, c.jsxs)("div", {
                    className: o ? a9.I6 : a9.G1,
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
                                  className: a9.DF,
                                  children: (0, c.jsx)(al.A, { textColor: "text-overlay-light", smallerText: !o }),
                              })
                            : (0, c.jsx)(rt, {}),
                        d || l
                            ? (0, c.jsx)("div", {
                                  className: a9.UD,
                                  children: (0, c.jsx)(a6.A, { className: u()(a9.x6, i), color: aL.XD.WHITE }),
                              })
                            : (0, c.jsx)(a4, {
                                  subscriptionTier: n,
                                  inOfferExperience: o,
                                  buttonClassName: i,
                                  isDarkMode: a,
                              }),
                        m && (0, c.jsx)(rt, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !o && (0, c.jsx)(re, {}),
            ],
        }),
    });
});
var ri = s(22118),
    rn = s(145359),
    ra = s(377770);
function rr(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, c.jsx)(az, { lifted: t }) : null;
}
let rl = () => {
        (0, _.P)(v);
        let e = o.useRef(null),
            t = o.useRef(null),
            s = o.useRef(null),
            i = (0, iu.Ay)(),
            n = (0, id.M)(i),
            [a, r] = o.useState(!1),
            [l, d] = o.useState(!1),
            [m, g] = o.useState(!1),
            [f, p] = o.useState(!1),
            h = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
            N = null != h ? (0, eM.EL)(h) : null,
            b = null != N ? eM.Ay.getSkuIdForPlan(N.planId) : null,
            C = null !== b && b !== t6.pe.TIER_2 ? t6.pe.TIER_2 : null,
            E = (0, eG.V)(),
            T = E?.subscriptionTrial?.skuId,
            R = (0, nv.ar)(),
            I = (0, eL.cg)(),
            S = I ?? !1,
            P = (0, x.bG)([ak.A], () => {
                let e = ak.A.getMarketingComponentByType(eC.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            y = (0, aG.Q)(),
            { analyticsLocations: D } = (0, j.Ay)(A.A.PREMIUM_MARKETING);
        o.useEffect(() => {
            p(!0);
        }, []);
        let O = (0, c.jsx)("div", {
            className: ra.dY,
            children: (0, c.jsx)(W.L, {
                innerRef: e,
                onChange: (e) => d(e),
                threshold: 0.1,
                active: !0,
                children: (0, c.jsx)(nx.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, c.jsx)(aw.A, {
                        showIcon: !1,
                        subscriptionTier: t6.pe.TIER_0,
                        className: rn.Ph,
                        look: aL.pR.OUTLINED,
                        color: aL.XD.WHITE,
                        buttonShineClassName: rn.Qr,
                    }),
                    tier2CTAButton:
                        T === t6.pe.TIER_0
                            ? (0, c.jsx)(aw.A, {
                                  showIcon: !1,
                                  subscriptionTier: t6.pe.TIER_2,
                                  className: rn.Ph,
                                  look: aL.pR.OUTLINED,
                                  color: aL.XD.WHITE,
                                  buttonShineClassName: rn.Qr,
                              })
                            : (0, c.jsx)(aw.A, {
                                  color: aL.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: t6.pe.TIER_2,
                                  className: rn.Ph,
                                  hasActivePromotion: S,
                                  textOptions: { textClassName: rn.Ac },
                                  buttonShineClassName: rn.Qr,
                              }),
                }),
            }),
        });
        return (0, c.jsxs)("div", {
            className: ra.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(aF, { premiumSubscription: h, className: u()(ra.R3, { [ra.aZ]: R }) }),
                R &&
                    (0, c.jsxs)("div", {
                        className: ra.n1,
                        children: [
                            (0, c.jsx)(rr, { inOfferExperience: R }),
                            (0, c.jsx)(sl.l, {
                                className: ra.ij,
                                size: "md",
                                location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                        ],
                    }),
                (0, c.jsxs)("div", {
                    className: u()({ [ra.V1]: !R }),
                    children: [
                        null != P && (0, c.jsx)(aB.c, { className: ra.w$, config: P }),
                        (0, c.jsxs)("div", {
                            className: ra.iS,
                            children: [
                                !R &&
                                    (0, c.jsx)(sl.l, {
                                        className: ra.ij,
                                        size: "md",
                                        location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, c.jsx)(W.L, {
                                    innerRef: t,
                                    onChange: (e) => r(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, c.jsx)(rs, {
                                        ref: t,
                                        subscriptionTier: C,
                                        className: u()({ [ra.p7]: R, [ra.Pw]: R, [ra.AG]: I, [ra.Cv]: null != h }),
                                        isDarkMode: n,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != y && (0, c.jsx)("div", { className: ra.Ol, children: (0, c.jsx)(aU.I, { component: y }) }),
                O,
                (0, c.jsx)(a7, { className: ra.B_ }),
                (0, c.jsx)("div", { className: ra.aC, children: (0, c.jsx)(ri.A, { className: ra.JQ, hideCTAs: !0 }) }),
                (0, c.jsx)("div", { className: ra.hz }),
                (0, c.jsx)(a8, {
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
                    children: (0, c.jsx)("div", { ref: s, className: ra._Z }),
                }),
                (0, c.jsx)("img", {
                    src: nr,
                    className: ra.Kw,
                    width: 112,
                    height: 85,
                    alt: eg.intl.string(eg.t.X4IxWL),
                }),
            ],
        });
    },
    rc = function (e) {
        let { entrypoint: t } = e,
            s = (0, eG.V)(),
            i = (0, eU.O)({ includePremiumGroupDiscount: !0 }),
            n = (0, no.NF)({ trialOffer: s }),
            a = (0, no.Tp)(),
            r = (0, x.bG)([e$.A], () => e$.A.getReminderStateId());
        switch (
            (o.useEffect(() => {
                (!0 === n && (0, no.QG)(), !0 === a && (0, no.ne)(r), (null != s || null != i) && (0, G.u1)(s, i));
            }, [s, i, n, a, r]),
            t)
        ) {
            case t6.tU.UserSettings:
                return (0, c.jsx)(rl, {});
            case t6.tU.ApplicationStoreHome:
                return (0, c.jsx)(aM, {});
            default:
                return null;
        }
    };
var ro = s(531296);
let rd = function (e) {
    let { entrypoint: t = t6.tU.UserSettings } = e;
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
        z = (0, E.Y)(t6.T7),
        [W, Y] = o.useState(!0),
        K = o.useRef(0),
        X = (0, k.YE)(I, t6.PremiumTypes.TIER_2),
        Z = (0, x.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        J = null != Z && Z.status === e2.Dmq.CANCELED;
    ((0, nc.b)(),
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
            let t = { nitro_basic: t6.pe.TIER_0, nitro: t6.pe.TIER_2 },
                s = Object.hasOwn(t, e) ? t[e] : void 0;
            null != s &&
                ((q.current = !0),
                (0, P.bG)(e2.BVt.APPLICATION_STORE),
                (0, S.A)({ subscriptionTier: s, analyticsLocations: l }));
        }, [$, Q.search, l]));
    let es = (0, x.bG)([y.A], () => y.A.enabled),
        ei = t === t6.tU.ApplicationStoreHome,
        en = es
            ? (0, c.jsx)(h.A, {})
            : s
              ? (0, c.jsx)(T.uK, {})
              : ei && X
                ? (0, c.jsx)(j.f5, { value: l, children: (0, c.jsx)(nl, { userId: w }) })
                : ee
                  ? null
                  : (0, c.jsx)("div", { className: u()(ro.kL, ro.Lq), children: (0, c.jsx)(g.y, {}) });
    if (null != en) {
        let e = !es && !s && ei && X;
        return (i && e && !a && !J) || (n && e && (a || J))
            ? en
            : (0, c.jsxs)(c.Fragment, { children: [ei && (0, c.jsx)(N.A, {}), en] });
    }
    return (0, c.jsx)(j.f5, { value: l, children: (0, c.jsx)(rc, { entrypoint: t }) });
};
