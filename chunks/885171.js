s.d(t, { A: () => aT }), s(323874), s(14289), s(35956);
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
    g = s(17928),
    x = s(289873),
    f = s(228366),
    p = s(73825),
    h = s(974544),
    N = s(107834),
    A = s(793574),
    C = s(688810),
    j = s(277984),
    E = s(86379),
    b = s(160946),
    R = s(545075),
    _ = s(840251),
    I = s(688151);
let T = new _.E([], I.$G.OPEN_NITRO, { location: "open nitro tab/settings" });
var v = s(611924),
    P = s(532794),
    S = s(976860),
    y = s(351906),
    D = s(287809),
    M = s(295405),
    O = s(166403),
    L = s(174459),
    k = s(474090),
    U = s(881489),
    G = s(945960),
    w = s(945810);
let H = (0, w.mj)({
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
function F(e) {
    let t = H.useConfig({ location: e });
    return { treatment: t.treatment, isInNitroHomeHeaderTreatment: "control" !== t.treatment };
}
s(321073);
var B = s(554146),
    V = s(269115),
    z = s(689175),
    W = s(131607),
    K = s(961250),
    X = s(366505),
    Y = s(321191),
    Q = s(903209),
    Z = s(927813),
    q = s(107857);
let J = (0, w.mj)({
    kind: "user",
    name: "2026-07-nitro-home-header-followup",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function $(e) {
    let { enabled: t } = J.useConfig({ location: e });
    return t;
}
var ee = s(131168),
    et = s(482589),
    es = s(410516),
    ei = s(461376),
    en = s(661531),
    ea = s(717421),
    er = s(331322),
    el = s(297264),
    ec = s(834730),
    eo = s(821609),
    ed = s(403581),
    eu = s(815021),
    em = s(576243),
    eg = s(49999),
    ex = s(375708),
    ef = s(33125);
function ep(e) {
    let { premiumSubscription: t, content: s, markAsDismissed: i } = e,
        { analyticsLocations: n } = (0, C.Ay)(A.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
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
                                i(eg.i.TAKE_ACTION),
                                    (0, P.A)({ subscription: t, initialPlanId: s.yearlyPlanId, analyticsLocations: n });
                            },
                        }),
                    ],
                }),
                (0, c.jsx)(eu.J, {
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": ex.intl.string(ex.t.WAI6xu),
                    onClick: () => i(eg.i.USER_DISMISS),
                }),
            ],
        }),
    });
}
var eh = s(962008),
    eN = s(315629),
    eA = s(65470),
    eC = s(871261);
let ej = function (e) {
    let { className: t, location: s, analyticsLocation: i } = e,
        { analyticsLocations: n } = (0, C.Ay)(s);
    return (0, c.jsx)(C.f5, {
        value: n,
        children: (0, c.jsxs)(eN.h, {
            className: u()(eC.kL, eC.pm, t),
            color: "purple",
            children: [
                (0, c.jsxs)("div", {
                    className: eC.FS,
                    children: [
                        (0, c.jsx)(el.D, {
                            variant: "heading-xxl/bold",
                            className: eC.R_,
                            children: ex.intl.string(ex.t.Ve9Ge6),
                        }),
                        (0, c.jsx)(ec.E, { variant: "text-md/medium", children: ex.intl.string(ex.t.yQ06u1) }),
                        (0, c.jsx)("div", {
                            className: eC.SB,
                            children: (0, c.jsx)(eA.A, {
                                buttonTextOverride: ex.intl.string(ex.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: i,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, c.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                    className: eC._e,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
var eE = s(877624);
let eb =
    "https://cdn.discordapp.com/assets/content/b56ad561e631257c1b2d6df674de1baa304710fe81885084e07c119b5a87127e.png";
function eR(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: eb,
        srcSet: `${eb} 1x, https://cdn.discordapp.com/assets/content/0d8192495ed73de2381103f061bb6a13f481d93f60e26090c2776f6329bd1bc3.png 2x`,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var e_ = s(502572),
    eI = s(192308),
    eT = s(775602),
    ev = s(366999),
    eP = s(531260),
    eS = s(780964),
    ey = s(766075),
    eD = s(786300),
    eM = s(975571),
    eO = s(428262),
    eL = s(960851),
    ek = s(89366),
    eU = s(422936),
    eG = s(732280),
    ew = s(549996),
    eH = s(172218);
function eF() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, s] = (0, o.useState)(1),
        i = (0, o.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, eH.B)(
            (e) => {
                s(e.intersectionRatio);
            },
            i,
            e,
        ),
        visibilityPercentage: t,
    };
}
var eB = s(949804);
let eV = function (e) {
    let { text: t } = e;
    return (0, c.jsx)("div", {
        className: eB.i,
        children: (0, c.jsx)(ec.E, { variant: "text-sm/bold", color: "text-overlay-light", children: t }),
    });
};
var ez = s(371764),
    eW = s(103411),
    eK = s(778712),
    eX = s(97808),
    eY = s(590251),
    eQ = s(144165),
    eZ = s(854627),
    eq = s(427262),
    eJ = s(851746),
    e$ = s(326084),
    e0 = s(664654),
    e1 = s(652215);
function e2() {
    var e, t, s;
    let { referralSentUsers: i } = (0, e0.J)(),
        n = (0, g.bG)([eJ.A], () => eJ.A.getRecipientStatus()),
        a = (0, g.bG)([eJ.A], () => eJ.A.getHasEligibleFriends()),
        r = n.size === e0.Z,
        l =
            ((e = !1 !== a),
            (t = i.length),
            (s = n.size === e0.Z && [...n.values()].every((e) => e === e$.aK.REDEEMED)),
            e
                ? t === e0.Z
                    ? s
                        ? ex.intl.format(ex.t["1aEjsH"], {
                              helpdeskArticle: eM.A.getArticleURL(e1.MVz.REFERRAL_PROGRAM),
                          })
                        : ex.intl.format(ex.t["+u3AOO"], {
                              helpdeskArticle: eM.A.getArticleURL(e1.MVz.REFERRAL_PROGRAM),
                          })
                    : ex.intl.format(ex.t["omMr+V"], { helpdeskArticle: eM.A.getArticleURL(e1.MVz.REFERRAL_PROGRAM) })
                : ex.intl.format(ex.t["zWhX/Q"], { helpdeskArticle: eM.A.getArticleURL(e1.MVz.REFERRAL_PROGRAM) }));
    return { referralSentUsers: i, nReferralsSent: n.size, hasEligibleFriends: a, allSent: r, bodyText: l };
}
var e6 = s(212737),
    e3 = s(901532);
function e7(e) {
    let { startingScreen: t, analyticsLocations: i } = e;
    L.default.track(e1.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
        (0, eI.openModalLazy)(async () => {
            let { default: e } = await Promise.resolve().then(s.bind(s, 212737));
            return (s) => (0, c.jsx)(e, { ...s, startingScreen: t });
        });
}
function e9(e) {
    let { user: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eZ.A)({ userId: t.id, size: eK._3.SIZE_24 });
    return (0, c.jsx)(
        eX.eu,
        { className: e3.bj, src: s, "aria-label": (0, eq.mG)(t), size: eK._3.SIZE_24, ...i },
        t.id,
    );
}
function e5(e) {
    let { slotIndex: t } = e;
    return (0, c.jsx)("div", { className: e3.p, children: t });
}
function e8(e) {
    let { referralSentUsers: t, className: s } = e;
    return (0, c.jsx)("div", {
        className: u()(e3.L$, s),
        children: (function () {
            let e = [];
            for (let s = 0; s < e0.Z; s++)
                if (t?.[s] !== void 0) {
                    let i = (0, c.jsx)(e9, { user: t[s] }, t[s].id);
                    e.push(i);
                } else {
                    let t = (0, c.jsx)(e5, { slotIndex: s + 1 }, s);
                    e.push(t);
                }
            return e;
        })(),
    });
}
function e4(e) {
    let { nReferralsSent: t, imageSize: s = 93, backgroundClassName: i, ringClassName: n } = e;
    return (0, c.jsx)(eY.a, {
        percent: 33.3 * t,
        colorOverride: "#53ac66",
        background: i ?? e3.cq,
        strokeSize: 0.8,
        ringColorOverrideClassName: n ?? e3.e0,
        overlayClassName: t === e0.Z ? e3.ys : void 0,
        children: (0, c.jsx)(eQ._, {
            src: "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg",
            height: s,
            width: s,
            zoomable: !1,
        }),
    });
}
function te(e) {
    let { className: t } = e,
        { referralSentUsers: s, nReferralsSent: i, hasEligibleFriends: n, allSent: a, bodyText: r } = e2();
    return (0, c.jsxs)("div", {
        className: u()(e3.kL, t),
        children: [
            (0, c.jsx)("div", { className: e3.G3, children: (0, c.jsx)(e4, { nReferralsSent: i }) }),
            (0, c.jsxs)("div", {
                className: e3.IH,
                children: [
                    (0, c.jsx)(e8, { referralSentUsers: s, className: e3.GV }),
                    (0, c.jsxs)("div", {
                        className: e3.n4,
                        children: [
                            (0, c.jsx)(el.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: ex.intl.string(ex.t.USo4s7),
                            }),
                            (0, c.jsx)(ec.E, { variant: "text-md/medium", color: "text-subtle", children: r }),
                        ],
                    }),
                    (0, c.jsx)(eo.$, {
                        variant: "primary",
                        disabled: !1 === n || !0 === a,
                        text: ex.intl.string(ex.t.Lm2nFc),
                        onClick: () =>
                            e7({ startingScreen: e6.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
                    }),
                ],
            }),
        ],
    });
}
var tt = s(792656),
    ts = s(989349),
    ti = s.n(ts),
    tn = s(496431),
    ta = s(499449);
let tr = function (e) {
    let { expiresAt: t, className: s } = e,
        i = (0, tn.A)(ti()(t).toDate(), 1e3);
    if (null == i) return null;
    let { days: n, hours: a, minutes: r, seconds: l } = i,
        o = [
            { unitValue: n, unitType: "days" },
            { unitValue: a, unitType: "hours" },
            { unitValue: r, unitType: "minutes" },
            { unitValue: l, unitType: "seconds" },
        ];
    return (0, c.jsxs)("div", {
        className: u()(ta.Xl, s),
        children: [
            (0, c.jsx)(ec.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: ex.intl.string(ex.t["/ARFVE"]),
            }),
            (0, c.jsx)("div", {
                className: ta.$R,
                children: o.map((e, t) =>
                    (function (e, t) {
                        let s,
                            [i, n] = 1 === (s = e.unitValue.toString()).length ? ["0", s[0]] : [s[0], s[1]];
                        return (0, c.jsxs)(c.Fragment, {
                            children: [
                                (0, c.jsxs)(
                                    "div",
                                    {
                                        className: ta.bh,
                                        children: [
                                            (0, c.jsxs)("div", {
                                                className: ta.kB,
                                                children: [
                                                    (0, c.jsx)("div", {
                                                        className: ta.B2,
                                                        children: (0, c.jsx)(ec.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: i,
                                                        }),
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: ta.B2,
                                                        children: (0, c.jsx)(ec.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: n,
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
                                                            return ex.intl.string(ex.t.ixASa2);
                                                        case "hours":
                                                            return ex.intl.string(ex.t["8sNvNn"]);
                                                        case "minutes":
                                                            return ex.intl.string(ex.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return ex.intl.string(ex.t.JhaiLW);
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
                                        className: ta.cV,
                                        variant: "text-lg/normal",
                                        color: "text-strong",
                                        children: ":",
                                    }),
                            ],
                        });
                    })(e, t === o.length - 1),
                ),
            }),
        ],
    });
};
var tl = s(473702),
    tc = s(609425),
    to = s(660184),
    td = s(16716);
function tu() {
    let e = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        t = (0, tc.A)(),
        { avatarSrc: s, avatarDecorationSrc: i, eventHandlers: n } = (0, eZ.A)({ userId: e?.id, size: eK._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, eq.mG)(e);
    return (0, c.jsxs)("div", {
        className: td.kL,
        children: [
            (0, c.jsx)("div", {
                className: td.my,
                children: (0, c.jsx)(eX.eu, {
                    src: s,
                    avatarDecoration: i,
                    size: eK._3.SIZE_56,
                    "aria-label": a,
                    ...n,
                }),
            }),
            (0, c.jsx)("div", { className: td.QC, children: (0, c.jsx)(to.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var tm = s(707554),
    tg = s(155199);
let tx = function (e) {
    let { className: t, color: s = "text-strong", responsive: i = !0, children: n } = e;
    return (0, c.jsx)(tm.F, {
        forceLevel: 1,
        children: (0, c.jsx)(el.D, {
            className: u()(tg.w, t, i && tg.n),
            variant: "display-md",
            color: s,
            children: n,
        }),
    });
};
var tf = s(728277);
function tp(e) {
    let { className: t } = e,
        { referralSentUsers: s, nReferralsSent: i, hasEligibleFriends: n, allSent: a, bodyText: r } = e2();
    return (0, c.jsxs)("div", {
        className: u()(tf.kL, t),
        children: [
            (0, c.jsx)("div", {
                className: tf.G3,
                children: (0, c.jsx)(e4, {
                    nReferralsSent: i,
                    imageSize: 65,
                    backgroundClassName: tf.HP,
                    ringClassName: tf.pZ,
                }),
            }),
            (0, c.jsxs)("div", {
                className: tf.IH,
                children: [
                    (0, c.jsxs)("div", {
                        className: tf.n4,
                        children: [
                            (0, c.jsx)(el.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: ex.intl.string(ex.t.USo4s7),
                            }),
                            (0, c.jsx)(ec.E, { variant: "text-md/medium", color: "text-subtle", children: r }),
                        ],
                    }),
                    (0, c.jsx)(e8, { referralSentUsers: s, className: tf.t7 }),
                ],
            }),
            (0, c.jsx)(eo.$, {
                variant: "primary",
                disabled: !1 === n || !0 === a,
                text: ex.intl.string(ex.t.Lm2nFc),
                onClick: () =>
                    e7({ startingScreen: e6.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
            }),
        ],
    });
}
var th = s(702841),
    tN = s(676279),
    tA = s(396583),
    tC = (((i = {}).SINE = "sine"), (i.COSINE = "cosine"), i),
    tj = (((n = {}).UP = "up"), (n.DOWN = "down"), n);
let tE = (e) => {
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
        [g, x] = (0, o.useState)(1),
        f = (0, ea.z)(
            null != s
                ? {
                      from: { scale: g > 0 ? s.startScale : s.endScale },
                      to: { scale: g > 0 ? s.endScale : s.startScale },
                      config: { duration: s.duration * l },
                      onRest: () => x((e) => -1 * e),
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
        [C, j] = (0, o.useState)(0),
        [E, b] = (0, o.useState)(1),
        R = (0, ea.z)({ xOffset: C, config: { tension: 10, friction: 10, duration: A } });
    return ((0, tA.A)(() => {
        j(E * (0.5 * Math.random() * 5 + 2.5)), b((e) => -1 * e);
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
                  translateX: a ? R.xOffset.to((e) => `${e}px`) : 0,
                  scale: f.scale,
                  filter: N.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != n && n.changeOpacity ? n.containerVisibilityPercentage : 1,
              },
              children: d,
          });
};
var tb = s(181195);
let tR = function (e) {
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
        keyAssetClassName: g,
        starAssetClassName: x,
        animationSpeedScale: f = 1,
        blurScale: p = 1,
    } = e;
    return (0, c.jsxs)(c.Fragment, {
        children: [
            null != i &&
                (0, c.jsx)("div", {
                    className: u()(tb.nJ, i),
                    children: (0, c.jsx)(tE, {
                        blurAnimationData: { startBlurRadius: 10 * p, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tC.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tj.UP,
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
                    className: u()(tb.IN, n),
                    children: (0, c.jsx)(tE, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tC.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tj.DOWN,
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
                    className: u()(tb.Gj, a),
                    children: (0, c.jsx)(tE, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tC.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tj.DOWN,
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
                    className: u()(tb.FV, r),
                    children: (0, c.jsx)(tE, {
                        blurAnimationData: { startBlurRadius: 5 * p, endBlurRadius: 0, duration: 4e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: tC.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tj.UP,
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
                            className: g,
                            alt: "",
                        }),
                    }),
                }),
            null != l &&
                (0, c.jsx)("div", {
                    className: u()(tb.E1, l),
                    children: (0, c.jsx)(tE, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * p, duration: 3e3 },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: tC.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: tj.UP,
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
                            className: x,
                            alt: "",
                        }),
                    }),
                }),
        ],
    });
};
var t_ = s(607470);
let tI =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    tT = function (e) {
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
                  children: (0, c.jsx)(tE, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                      yAxisAnimationData: { range: 20, duration: 4e3, path: tC.SINE },
                      parallaxAnimationData: {
                          pathDirection: tj.UP,
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
                                t_.A,
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
                hammerContainerClassName: r,
                keyContainerClassName: l,
                starContainerClassName: o,
                boltAssetClassName: d,
                carAssetClassName: u,
                hammerAssetClassName: m,
                keyAssetClassName: g,
                starAssetClassName: x,
                animationSpeedScale: f = 1,
            } = e,
            p = (0, th.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
            h = (0, tN.TM)();
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(tT, {
                    supportHEVCAlpha: h,
                    isMotionReduced: p,
                    containerVisibilityPercentage: t,
                    containerClassName: s,
                    assetClassName: i,
                    animationSpeedScale: f,
                }),
                (0, c.jsx)(tR, {
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
                    keyAssetClassName: g,
                    starAssetClassName: x,
                    animationSpeedScale: f,
                }),
            ],
        });
    };
var tP = s(776540);
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
    tD = s(884888);
let tM = function (e) {
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
        { visibilityPercentageRef: m, visibilityPercentage: x } = eF(!(0, g.bG)([eT.Ay], () => eT.Ay.useReducedMotion)),
        f =
            ((t = { [ty.MORNING]: ex.t["Wvc/I+"], [ty.AFTERNOON]: ex.t["d+0STx"], [ty.EVENING]: ex.t.CqsxKI }),
            ex.intl.string(
                t[
                    (s = new Date().getHours()) >= 5 && s < 12
                        ? ty.MORNING
                        : s >= 12 && s < 17
                          ? ty.AFTERNOON
                          : ty.EVENING
                ],
            )),
        p = o ?? (l ? (0, c.jsx)(tp, {}) : null);
    return (0, c.jsx)("div", {
        className: u()(tD.kL, tD.Eg, i),
        ref: r,
        children: (0, c.jsxs)("div", {
            className: u()(tD.W2, tD.HQ),
            ref: m,
            children: [
                (0, c.jsxs)(er.B, {
                    align: "start",
                    gap: 32,
                    className: tD.ZU,
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
                                        (0, c.jsx)(tx, {
                                            className: tD.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            children: f,
                                        }),
                                        (0, c.jsx)(tu, {}),
                                    ],
                                }),
                                d,
                            ],
                        }),
                        p,
                    ],
                }),
                (0, c.jsx)("div", {
                    className: tD.y3,
                    children: (0, c.jsx)(tS, { containerVisibilityPercentage: x, compact: null == p }),
                }),
            ],
        }),
    });
};
var tO = s(460508);
let tL =
        "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
    tk = function (e) {
        let { containerVisibilityPercentage: t } = e,
            s = (0, th.bG)([eT.Ay], () => eT.Ay.useReducedMotion);
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)("div", {
                    className: tO.BI,
                    children: (0, c.jsx)(tE, {
                        scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: tC.SINE },
                        animateXAxisWiggle: !0,
                        isMotionReduced: s,
                        parallaxAnimationData: {
                            pathDirection: tj.UP,
                            range: 125,
                            containerVisibilityPercentage: t,
                            changeOpacity: !0,
                        },
                        animationSpeedScale: 2,
                        children: (0, c.jsx)("img", { src: tL, alt: "", className: tO.Q }),
                    }),
                }),
                (0, c.jsx)(tR, {
                    isMotionReduced: s,
                    containerVisibilityPercentage: t,
                    hammerContainerClassName: tO.Gj,
                    keyContainerClassName: tO.FV,
                    starContainerClassName: tO.E1,
                    hammerAssetClassName: tO.Wv,
                    keyAssetClassName: tO.rs,
                    starAssetClassName: tO.OY,
                    animationSpeedScale: 2,
                }),
            ],
        });
    };
var tU = s(219351);
function tG(e) {
    let { containerVisibilityPercentage: t } = e;
    return (0, c.jsx)(tv, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: tU.wG,
        flyingWumpusAssetClassName: tU.lu,
        boltContainerClassName: tU.nJ,
        hammerContainerClassName: tU.Gj,
        keyContainerClassName: tU.FV,
        starContainerClassName: tU.E1,
        boltAssetClassName: tU.j7,
        hammerAssetClassName: tU.Wv,
        keyAssetClassName: tU.rs,
        starAssetClassName: tU.OY,
        animationSpeedScale: 1 / 0.7,
    });
}
let tw = function () {
    let e = (0, th.bG)([eT.Ay], () => eT.Ay.useReducedMotion);
    return (0, c.jsx)(tR, {
        isMotionReduced: e,
        blurScale: 0.4,
        starContainerClassName: tU.cI,
        hammerContainerClassName: tU.qg,
        keyContainerClassName: tU.h2,
        boltContainerClassName: tU.Bz,
        starAssetClassName: tU.ks,
        hammerAssetClassName: tU.GY,
        keyAssetClassName: tU.p4,
        boltAssetClassName: tU.vy,
    });
};
var tH = s(202541);
function tF(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, U.Zb)(t);
    return (0, c.jsx)("div", {
        className: u()(tD.kL, s),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: tD.ap,
            children: [
                (0, c.jsxs)(er.B, {
                    align: "start",
                    gap: 32,
                    children: [
                        (0, c.jsx)(eV, { text: ex.intl.string(ex.t.yhldRB) }),
                        (0, c.jsxs)(er.B, {
                            align: "start",
                            gap: 12,
                            className: tD.rG,
                            children: [
                                (0, c.jsx)(tx, { children: ex.intl.format(ex.t.FwjP6W, { days: n }) }),
                                (0, c.jsx)(ec.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: ex.intl.string(ex.t.Jf8KrT),
                                }),
                            ],
                        }),
                        (0, c.jsxs)(er.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            children: [
                                (0, c.jsx)(tt.A, {
                                    size: "md",
                                    buttonTextOverride: ex.intl.string(ex.t["2+luBl"]),
                                    iconOverride: ed.t,
                                    variantOverride: "expressive",
                                }),
                                (0, c.jsx)(eo.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: ex.intl.string(ex.t.Af7ye6),
                                    onClick: () => (0, ey.openUserSettings)(eS.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, c.jsxs)("div", {
                    className: tD.Hk,
                    children: [(0, c.jsx)(eR, { alt: "", width: "100%", height: "auto" }), (0, c.jsx)(tw, {})],
                }),
            ],
        }),
    });
}
function tB(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, U.Zb)(t),
        { visibilityPercentageRef: a, visibilityPercentage: r } = eF(!(0, g.bG)([eT.Ay], () => eT.Ay.useReducedMotion));
    return (0, c.jsx)("div", {
        className: u()(tD.kL, s),
        ref: i,
        children: (0, c.jsxs)("div", {
            className: tD.Gs,
            ref: a,
            children: [
                (0, c.jsxs)(er.B, {
                    align: "start",
                    gap: 24,
                    className: tD.E2,
                    children: [
                        (0, c.jsxs)(er.B, {
                            align: "start",
                            gap: 12,
                            children: [
                                (0, c.jsx)(eV, { text: ex.intl.string(ex.t.yhldRB) }),
                                (0, c.jsx)(tx, { children: ex.intl.format(ex.t.FwjP6W, { days: n }) }),
                                (0, c.jsx)("div", {
                                    className: tD.X8,
                                    children: (0, c.jsx)(ec.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: ex.intl.string(ex.t.Jf8KrT),
                                    }),
                                }),
                            ],
                        }),
                        (0, c.jsxs)(er.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            className: tD.oF,
                            children: [
                                (0, c.jsx)(tt.A, {
                                    size: "md",
                                    buttonTextOverride: ex.intl.string(ex.t["2+luBl"]),
                                    iconOverride: ed.t,
                                    variantOverride: "expressive",
                                }),
                                (0, c.jsx)(eo.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: ex.intl.string(ex.t.Af7ye6),
                                    onClick: () => (0, ey.openUserSettings)(eS.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, c.jsx)("div", { className: tD.Tg, children: (0, c.jsx)(tG, { containerVisibilityPercentage: r }) }),
            ],
        }),
    });
}
function tV(e) {
    let { className: t, isInReverseTrial: i, shouldShowReferralProgressBar: n } = e,
        {
            headingText: a,
            headingTop: r,
            showPill: l,
            shouldShowChurnVariant: o,
            premiumSubscription: d,
            userDiscountOffer: m,
            discountedPrice: x,
            buttonVisibilityRef: f,
        } = tW(),
        { isInNitroHomeHeaderTreatment: p } = F("subscriber_home_hero"),
        h = $("subscriber_home_hero"),
        { analyticsLocations: N } = (0, C.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        j = (0, ew.c)(eE.C.MARKETING_PAGE_BANNER),
        E = (0, eL.cg)(),
        b = null != d && d.status === e1.Dmq.CANCELED,
        R = p && !b,
        _ = null;
    null != j &&
        "marketingPageBanner" === j.properties.properties.oneofKind &&
        (_ = (0, c.jsx)(ez.x, {
            componentId: j.id,
            promotionBannerMarketingComponentFields: j.properties.properties.marketingPageBanner,
        }));
    let I = _;
    null == I && n && !R && (I = (0, c.jsx)(te, {}));
    let T = (0, eG.V)(),
        v = (0, eU.O)(),
        P = (0, es.U9)(v, tH.pe.TIER_2) ? tH.pe.TIER_2 : void 0,
        S = null != d && d.status !== e1.Dmq.ACCOUNT_HOLD && d.hasAnyPremiumNitro,
        y = (0, eP.A)(),
        D = y.isFractionalPremiumActive && !S && null == I && !o,
        { visibilityPercentageRef: M, visibilityPercentage: O } = eF(!(0, g.bG)([eT.Ay], () => eT.Ay.useReducedMotion));
    if (i)
        return h
            ? (0, c.jsx)(tB, { fpEndsAt: y.currentEntitlementEndsAt, className: t, buttonVisibilityRef: f })
            : (0, c.jsx)(tF, { fpEndsAt: y.currentEntitlementEndsAt, className: t, buttonVisibilityRef: f });
    if (R) {
        let e = D
            ? (0, c.jsxs)("div", {
                  className: tD.UJ,
                  children: [
                      (0, c.jsx)(tt.A, {
                          size: "md",
                          hasActivePromotion: !!E,
                          subscriptionTier: T?.subscription_trial?.sku_id ?? P,
                      }),
                      (0, c.jsx)(eA.A, {
                          variant: "secondary",
                          size: "md",
                          buttonTextOverride: ex.intl.string(ex.t["3KomGa"]),
                      }),
                  ],
              })
            : null;
        return (0, c.jsx)(tM, {
            className: t,
            headingTop: r,
            showPill: l,
            buttonVisibilityRef: f,
            shouldShowReferralProgressBar: n,
            marketingBanner: _,
            heroButtons: e,
        });
    }
    return (0, c.jsx)("div", {
        className: u()(tD.kL, t),
        "data-testid": "subscriber-nitro-home-hero-header",
        ref: f,
        children: (0, c.jsxs)("div", {
            className: tD.Qs,
            ref: M,
            children: [
                l && r,
                (0, c.jsxs)("div", {
                    className: tD.N1,
                    children: [
                        (0, c.jsx)(tk, { containerVisibilityPercentage: O }),
                        o &&
                            m?.expiresAt != null &&
                            (0, c.jsx)(tr, { expiresAt: m.expiresAt.toISOString(), className: tD.IZ }),
                        (0, c.jsx)(tx, {
                            children:
                                o && null != m ? ex.intl.format(ex.t["3yZP0G"], { percent: m.discount.amount }) : a,
                        }),
                        o &&
                            null != m &&
                            null != x &&
                            (0, c.jsx)(ec.E, {
                                className: tD.jG,
                                variant: "text-sm/medium",
                                color: "text-strong",
                                children: ex.intl.format(ex.t["3Q4wCy"], {
                                    discountedPrice: x,
                                    billingPeriod: (0, eO.Ke)(m.discount.userUsageLimitInterval),
                                    numMonths: m.discount.userUsageLimit,
                                }),
                            }),
                    ],
                }),
                (0, c.jsxs)("div", {
                    className: D || o ? tD.UJ : void 0,
                    children: [
                        D &&
                            (0, c.jsx)(tt.A, {
                                size: "md",
                                hasActivePromotion: !!E,
                                subscriptionTier: T?.subscription_trial?.sku_id ?? P,
                            }),
                        o &&
                            null != d &&
                            (0, c.jsx)(eo.$, {
                                variant: "expressive",
                                icon: ed.t,
                                size: "md",
                                text: ex.intl.string(ex.t.zrCzVB),
                                onClick: () => {
                                    var e;
                                    return (
                                        (e = tl.g.CONFIRM_DISCOUNT),
                                        void (0, eI.openModalLazy)(async () => {
                                            let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                await Promise.all([
                                                    s.e("91170"),
                                                    s.e("42394"),
                                                    s.e("23102"),
                                                    s.e("2285"),
                                                    s.e("97726"),
                                                    s.e("44459"),
                                                    s.e("98986"),
                                                    s.e("18379"),
                                                    s.e("60411"),
                                                    s.e("93637"),
                                                    s.e("80197"),
                                                    s.e("61275"),
                                                    s.e("30072"),
                                                    s.e("26572"),
                                                    s.e("18629"),
                                                    s.e("48132"),
                                                    s.e("64729"),
                                                    s.e("5549"),
                                                    s.e("62332"),
                                                    s.e("8607"),
                                                    s.e("27962"),
                                                    s.e("64827"),
                                                    s.e("7167"),
                                                    s.e("61060"),
                                                    s.e("40135"),
                                                    s.e("6338"),
                                                    s.e("47834"),
                                                    s.e("97595"),
                                                    s.e("55112"),
                                                    s.e("44571"),
                                                    s.e("40291"),
                                                    s.e("29963"),
                                                    s.e("92075"),
                                                    s.e("63123"),
                                                    s.e("50097"),
                                                    s.e("65689"),
                                                    s.e("94161"),
                                                    s.e("13051"),
                                                    s.e("80347"),
                                                    s.e("80166"),
                                                ]).then(s.bind(s, 293061));
                                            return (s) =>
                                                (0, c.jsx)(t, {
                                                    ...s,
                                                    analyticsLocations: N,
                                                    initialStep: e,
                                                    premiumSubscription: d,
                                                });
                                        })
                                    );
                                },
                            }),
                        (0, c.jsx)(eA.A, {
                            variant: D || o ? "secondary" : "expressive",
                            size: "md",
                            buttonTextOverride: ex.intl.string(ex.t["3KomGa"]),
                        }),
                    ],
                }),
                I,
            ],
        }),
    });
}
let [tz, tW] = (0, eD.A)(),
    tK = function (e) {
        let { className: t, buttonVisibilityRef: s, userDiscountOffer: i, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, C.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            r = (0, U.ds)(),
            l = (0, ek.QQ)(),
            o = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            d = null != o && o.status === e1.Dmq.CANCELED && null != i,
            u = l && !d,
            m = ex.intl.string(ex.t.qYKftX),
            x = (0, eW.m)(),
            f = ex.intl.string(ex.t.ifwQZb),
            { fractionalState: p, endsAt: h } = (0, eP.A)(),
            N = (0, ev.Ay)(h, ev.yE.CREDITS_ENDS_IN),
            j = null;
        if (p === tH.xc.NONE || r) j = (0, c.jsx)(eV, { text: m });
        else {
            u = !0;
            let e = ex.intl.format(ex.t["yR+oDD"], {
                helpCenterLink: eM.A.getArticleURL(e1.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            j = (0, c.jsx)(e_.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: tD.YL,
                position: "right",
                children: (e) =>
                    (0, c.jsx)("div", {
                        ...e,
                        className: tD.V_,
                        children: (0, c.jsx)("div", { className: tD.eL, children: (0, c.jsx)(eV, { text: N }) }),
                    }),
            });
        }
        return (0, c.jsx)(C.f5, {
            value: a,
            children: (0, c.jsx)(tz.Provider, {
                value: {
                    headingText: f,
                    headingTop: j,
                    showPill: u,
                    shouldShowChurnVariant: d,
                    premiumSubscription: o,
                    userDiscountOffer: i,
                    discountedPrice: n,
                    buttonVisibilityRef: s,
                },
                children: (0, c.jsx)(tV, { className: t, isInReverseTrial: r, shouldShowReferralProgressBar: x }),
            }),
        });
    };
var tX = s(820284),
    tY = s(742589),
    tQ = s(909536),
    tZ = s(392943),
    tq = s(876587),
    tJ = s(400669),
    t$ = s(590319),
    t0 = s(897351);
let t1 = function () {
    let e = (0, tQ.Gh)("nitro_home_header"),
        t = o.useRef(null);
    return (0, c.jsxs)(tX.A, {
        section: e1.JJy.NAVIGATION,
        children: [
            (0, c.jsx)(tY.A, {
                className: u()(t$.TQ, t0.C$),
                transparent: !0,
                role: "navigation",
                children: (0, c.jsxs)("div", {
                    className: t$.Wc,
                    children: [
                        (0, c.jsxs)("div", {
                            className: t0.wk,
                            children: [
                                (0, c.jsx)(ed.t, { colorClass: t0.tr }),
                                (0, c.jsx)("span", {
                                    role: "img",
                                    "aria-label": ex.intl.string(ex.t.Ipxkog),
                                    className: t0.Ss,
                                    children: (0, c.jsx)(tZ.A, { color: "currentColor" }),
                                }),
                            ],
                        }),
                        e &&
                            (0, c.jsxs)("div", {
                                className: t$.MQ,
                                children: [
                                    (0, c.jsx)(tJ.l, {
                                        ref: t,
                                        size: "sm",
                                        location: A.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB,
                                    }),
                                    (0, c.jsx)(eA.A, { size: "sm", variant: "overlay-secondary" }),
                                ],
                            }),
                    ],
                }),
            }),
            e && (0, c.jsx)(tq.O, { targetElementRef: t, body: ex.intl.string(ex.t.EqUw7K) }),
        ],
    });
};
var t2 = s(325499),
    t6 = s(562708),
    t3 = s(885574),
    t7 = s(43990),
    t9 = s(993077),
    t5 = s(139286),
    t8 = s(872725),
    t4 = s(920050),
    se = s(51965),
    st = s(375776),
    ss = s(727811),
    si = s(222652),
    sn = s(933287),
    sa = s(355982);
function sr(e) {
    let { openRewardModal: t } = e,
        s = (0, si.z)();
    if (s.kind === si.N.SUBSCRIBE)
        return (0, c.jsxs)("div", {
            className: sa.R$,
            children: [
                (0, c.jsx)(tt.A, {
                    defaultTextOverride: s.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: tH.pe.TIER_2,
                }),
                (0, c.jsx)(eo.$, { variant: "secondary", size: "md", text: ex.intl.string(ex.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        s.claimStatus === ss.P.CLAIMED
            ? { text: ex.intl.string(sn.default.Plwzgf) }
            : { text: ex.intl.string(ex.t.hvVgAZ) };
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: sa.R$,
                children: [
                    (0, c.jsx)(se.A, {
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
            s.claimStatus === ss.P.CLAIM_IN_PROGRESS &&
                (0, c.jsxs)("div", {
                    className: sa.ed,
                    children: [
                        (0, c.jsx)(t3.m, { size: "xs", color: "var(--text-subtle)" }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: ex.intl.string(sn.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function sl(e) {
    let { glowing: t = !1 } = e;
    (0, t5.A)({
        type: t6.ImpressionTypes.VIEW,
        name: t6.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: t4.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: i } = (0, C.Ay)(A.A.CROISSANT_PREMIUM_HERO_CARD),
        n = o.useCallback(() => {
            (0, eI.openModalLazy)(async () => {
                let { default: e } = await Promise.all([s.e("52283"), s.e("13088")]).then(s.bind(s, 347171));
                return (t) => (0, c.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, c.jsx)(t7.N, {
        theme: e1.NJ8.DARKER,
        children: (e) =>
            (0, c.jsx)(C.f5, {
                value: i,
                children: (0, c.jsx)("div", {
                    className: u()(e, sa.kL),
                    children: (0, c.jsx)(t8.A, {
                        cardType: t9.s.CUSTOM,
                        cardClassName: sa.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, c.jsxs)("div", {
                            className: sa.XF,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: sa.j,
                                    children: [
                                        (0, c.jsx)("div", { className: sa._g }),
                                        (0, c.jsx)("div", { className: sa.$h }),
                                        (0, c.jsx)("div", { className: sa.Rv }),
                                        (0, c.jsx)("div", { className: sa.Lw }),
                                        (0, c.jsx)("div", { className: sa.mR }),
                                    ],
                                }),
                                (0, c.jsxs)("div", {
                                    className: sa.Qs,
                                    children: [
                                        (0, c.jsx)("img", {
                                            className: sa.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, c.jsx)(el.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: sa.DD,
                                            children: ex.intl.string(sn.default.RGT513),
                                        }),
                                        (0, c.jsx)(ec.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: sa.h_,
                                            children: ex.intl.string(sn.default["+pTnsf"]),
                                        }),
                                        (0, c.jsx)(sr, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var sc = s(744064);
function so(e) {
    let { className: t, containerClassName: s } = e,
        i = (0, si.z)(),
        n = { isThirdPartyPerk: !0, subscriptionRequired: !0 },
        a =
            i.kind === si.N.SUBSCRIBE
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
    return (0, c.jsx)(sc.S, {
        id: t4.XBOX_PREMIUM_PERK_CARD_ID,
        title: ex.intl.string(sn.default.UVL9tD),
        description: ex.intl.string(sn.default["I+IXr0"]),
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
function sd(e) {
    let { analyticsLocations: t } = (0, C.Ay)(A.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, c.jsx)(C.f5, { value: t, children: (0, c.jsx)(so, { ...e }) });
}
var su = s(54471),
    sm = s(574377);
function sg(e) {
    let { id: t, sectionClassName: s, heading: i, beforeGrid: n, grid: a, gridClassName: r } = e,
        l = sm.Ui;
    return (0, c.jsxs)("div", {
        id: t,
        className: s,
        children: [
            i,
            n,
            null != a ? (0, c.jsx)("div", { className: u()(l, null != n && su.Jx, r), children: a }) : null,
        ],
    });
}
var sx = s(789861),
    sf = s(592909),
    sp = s(149995),
    sh = s(398523),
    sN = s(881373),
    sA = s(581921),
    sC = s(555393),
    sj = s(852218),
    sE = s(161319),
    sb = s(806343),
    sR = s(962995);
function s_() {
    let { analyticsLocations: e } = (0, C.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, sf.A0)({ location: "useHardwarePartnerPerkCards" }),
        s = (0, sN.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        i = sh.Ay.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        n = (0, sp.Zk)({ location: "useHardwarePartnerPerkCards" }),
        a = (0, sp.S9)({ location: "useHardwarePartnerPerkCards" }),
        r = null === (0, sC.N)(),
        l = (0, t2.b)("useHardwarePartnerPerkCards"),
        { currentDate: d, nDaysInMonth: u } = (0, o.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, o.useMemo)(() => {
        let o = l ? void 0 : ex.intl.string(ex.t.y2b7CA),
            m = t
                ? {
                      id: t4.CALL_OF_DUTY_3PP_CARD_ID,
                      title: ex.intl.string(sb.default.F0b4Z8),
                      description: ex.intl.formatToPlainString(sb.default["hworR+"], { validDates: (0, sx.a)() }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: ex.intl.formatToPlainString(sb.default.g7iyvR, { date: (0, sx.m)() }),
                      caption: (0, c.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/40a956d1f02220ee7fe04579320500571f21c3195af2f11afea01601f1ba28c9.svg",
                          alt: "Call of Duty: MW4",
                      }),
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/74dd725dde373bfdbced9606d5201ed2c555fc895f4da644a8de314de6906be3.webp",
                      ctaText: ex.intl.string(sb.default.fcopjf),
                      analyticsOptions: { thirdPartyPartner: sj.Bt },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
            g = s
                ? {
                      id: t4.LOGITECH_3PP_CARD_ID,
                      title: ex.intl.string(sR.default.OlObRa),
                      description: ex.intl.format(sR.default.ZGOJ8R, {
                          discountPercent: sN.aW,
                          termsUrl: eM.A.getArticleURL(e1.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      progress: d.getDate() / u,
                      ctaText: ex.intl.string(ex.t.w7s5Qr),
                      onCtaClick: () => (0, sA.P)({ partnerId: sj.XY, analyticsLocations: e }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                      pillText: o,
                      caption: (0, c.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: sj.XY },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null;
        return {
            callOfDutyCard: m,
            logitechCard: g,
            steelseriesCard: i
                ? {
                      id: t4.RECURRING_3P_PROMOTIONS_CARD_ID,
                      title: ex.intl.string(ex.t.m7PucM),
                      description: n
                          ? a
                              ? ex.intl.format(ex.t["1Zw6xL"], {})
                              : ex.intl.format(ex.t.KWdCO0, {})
                          : ex.intl.format(ex.t.zh1X7u, {}),
                      descriptionNote:
                          !a && n
                              ? ex.intl.format(ex.t.vblnHk, {
                                    partnerName: sj.CD[sj.Cs].label,
                                    helpdeskArticle: eM.A.getArticleURL(e1.MVz.RECURRING_PROMOTION),
                                })
                              : void 0,
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: o,
                      caption: (0, c.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                      progress: d.getDate() / u,
                      ctaText: ex.intl.string(ex.t.w7s5Qr),
                      onCtaClick: () => (0, sE.u)({ analyticsLocations: e, partnerIds: [sj.KS, sj.Cs], isLocked: !1 }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: sj.KS },
                      ctaDisabled: r,
                      ctaLoading: r,
                  }
                : null,
        };
    }, [l, e, t, d, s, u, i, n, a, r]);
}
var sI = s(166634);
let sT = "xgpp";
function sv(e) {
    let { glowingSectionId: t, glowingPerkId: s } = e,
        i = (0, t2.b)("premium_subscriber_home_rewards"),
        { callOfDutyCard: n, logitechCard: a, steelseriesCard: r } = s_();
    if (!i) return null;
    let l = null != n || null != a || null != r;
    return (0, c.jsx)(sg, {
        id: sT,
        sectionClassName: u()(sI.uW, sI.Uv, sI.qr),
        heading: (0, c.jsx)(el.D, {
            variant: "display-sm",
            className: u()(sm.R_, su.U6),
            children: ex.intl.string(ex.t.NG1e6l),
        }),
        beforeGrid: (0, c.jsx)("div", { className: su.JE, children: (0, c.jsx)(sl, { glowing: t === sT }) }),
        grid: l
            ? (0, c.jsxs)(c.Fragment, {
                  children: [
                      null != n && (0, c.jsx)(sc.S, { ...n, containerClassName: sm.Nr, glowing: s === n.id }),
                      (0, c.jsx)(sd, { containerClassName: sm.Nr }),
                      null != a && (0, c.jsx)(sc.S, { ...a, containerClassName: sm.Nr, glowing: s === a.id }),
                      null != r && (0, c.jsx)(sc.S, { ...r, containerClassName: sm.Nr, glowing: s === r.id }),
                  ],
              })
            : null,
    });
}
var sP = s(687636),
    sS = s(67423);
let sy = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: r } = (0, C.Ay)(A.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        l = (0, ea.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, c.jsx)(ei.animated.div, {
        className: u()(sP.iE, { [sP.q4]: !t }),
        style: l,
        children: (0, c.jsxs)("div", {
            className: sP.iJ,
            children: [
                (0, c.jsx)("img", { alt: "", src: sS, className: sP.oU }),
                (0, c.jsxs)("div", {
                    className: sP.iQ,
                    children: [
                        (0, c.jsx)(el.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: ex.intl.format(ex.t["3yZP0G"], { percent: n.discount.amount }),
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ex.intl.format(ex.t["3Q4wCy"], {
                                numMonths: n.discount.userUsageLimit,
                                discountedPrice: a,
                                billingPeriod: (0, eO.Ke)(n.discount.userUsageLimitInterval),
                            }),
                        }),
                    ],
                }),
                (0, c.jsx)(eo.$, {
                    variant: "expressive",
                    icon: ed.t,
                    size: "md",
                    text: ex.intl.string(ex.t.zrCzVB),
                    onClick: () =>
                        void (0, eI.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                s.e("91170"),
                                s.e("42394"),
                                s.e("23102"),
                                s.e("2285"),
                                s.e("97726"),
                                s.e("44459"),
                                s.e("98986"),
                                s.e("18379"),
                                s.e("60411"),
                                s.e("93637"),
                                s.e("80197"),
                                s.e("61275"),
                                s.e("30072"),
                                s.e("26572"),
                                s.e("18629"),
                                s.e("48132"),
                                s.e("64729"),
                                s.e("5549"),
                                s.e("62332"),
                                s.e("8607"),
                                s.e("27962"),
                                s.e("64827"),
                                s.e("7167"),
                                s.e("61060"),
                                s.e("40135"),
                                s.e("6338"),
                                s.e("47834"),
                                s.e("97595"),
                                s.e("55112"),
                                s.e("44571"),
                                s.e("40291"),
                                s.e("29963"),
                                s.e("92075"),
                                s.e("63123"),
                                s.e("50097"),
                                s.e("65689"),
                                s.e("94161"),
                                s.e("13051"),
                                s.e("80347"),
                                s.e("80166"),
                            ]).then(s.bind(s, 293061));
                            return (t) =>
                                (0, c.jsx)(e, {
                                    ...t,
                                    premiumSubscription: i,
                                    analyticsLocations: r,
                                    initialStep: tl.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var sD = s(761508),
    sM = s(449543);
function sO(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/6d779a647553609440933a7e61163ab29257c093f92f89c4e093aa704202b616.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sL(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/04ab9089123de23616e764a3900f6921afd4c27ec80a269fdf3e63f1194b9e91.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sk(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/69ee0dc56ebf82df912bebde51a2c563664d558b202a449b3305d124522a8c02.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sU = s(345394);
function sG(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: sU.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sw(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/99d7cc7de43e9470f6069d92affd0da42348d45fbc589845c5383c6cac0cec80.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sH(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/2ecc2b23e1377a539b6c1239f12ee35af7adb0d0bd4fe3a6ffbfebd5192012a2.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sF(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/20143999f39840372ade2c69bee2bdd603f4b9a727eb6bcdbfad86f20e74bf72.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sB(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/6f0f6136e77c9315a9a7a22848681c5d891cb654ae638cde5f70ad8b6c0ebec5.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function sV(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/783fc3c55009354503196f7148987b044b815cae11b18c3748065e96813a64bb.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sz = s(996682);
function sW(e) {
    let {
        color: t = en.A.colors.ICON_STRONG,
        "aria-label": s,
        "aria-hidden": i,
        role: n,
        width: a = 100,
        height: r = 80,
    } = e;
    return (0, c.jsxs)("svg", {
        ...(0, sz.A)({ "aria-label": s, "aria-hidden": i, role: n }),
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
function sK(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 162 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/c5c4c5e6fbe803dac72eb3409b2f59e39feae5753c34c0d9a1c01164ec541788.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sX = s(78701);
function sY(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: r = 192 } = e;
    return (0, c.jsx)("img", {
        style: { width: a, height: r },
        src: sX.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var sQ = s(462887),
    sZ = s(736653),
    sq = s(259065),
    sJ = s(206835),
    s$ = s(591179),
    s0 = s(462463),
    s1 = s(878784),
    s2 = s(425713),
    s6 = s(696292),
    s3 = s(192444),
    s7 = s(617986),
    s9 = s(892227),
    s5 = s(81466),
    s8 = s(318254),
    s4 = s(490285),
    ie = s(165815);
let it = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, X.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let s =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, s9.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, c.jsxs)("div", {
        className: ie.kL,
        children: [
            null != s &&
                (0, c.jsxs)("div", {
                    className: ie.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: ie.Pf,
                            children: [
                                (0, c.jsx)(s5.C, { size: "sm", color: en.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(ec.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: ex.intl.string(s4.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ex.intl.format(s4.default.xedPIb, { days: s }),
                        }),
                    ],
                }),
            null != s && t.total_rewarded_from_program > 0 && (0, c.jsx)("div", { className: ie.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, c.jsxs)("div", {
                    className: ie.nM,
                    children: [
                        (0, c.jsxs)("div", {
                            className: ie.Pf,
                            children: [
                                (0, c.jsx)(s8.C, { size: "sm", color: en.A.colors.TEXT_DEFAULT }),
                                (0, c.jsx)(ec.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: ex.intl.string(s4.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ex.intl.format(s4.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var is = s(758836),
    ii = s(190107),
    ia = s(55684);
function ir(e) {
    let { shouldShowBonusOrbsUX: t, multiplier: s } = (0, s3.lk)(ii.rE.NITRO_HOME_MARKETING),
        { isEligible: i, programReward: n } = (0, X.F)({ location: e });
    return {
        nitroOrbsRewardsCard: (0, o.useMemo)(
            () =>
                !i || null == n || null == n.reward_amount || n.reward_amount <= 0
                    ? null
                    : {
                          id: t4.NITRO_ORBS_REWARDS_CARD_ID,
                          title: ex.intl.string(s4.default.hx5AFp),
                          description: ex.intl.format(s4.default.wq3CF2, { orbsCount: n.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(ia.lH, ia.yK),
                          footerContent: (0, c.jsx)(it, {}),
                          ctaText: ex.intl.string(s4.default.BxjHiu),
                          onCtaClick: () => (0, S.pX)(e1.BVt.COLLECTIBLES_SHOP_WITH_TAB(is.G2.ORBS)),
                      },
            [i, n],
        ),
        questOrbMultiplierCard: (0, o.useMemo)(
            () =>
                t
                    ? {
                          id: t4.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: ex.intl.string(ex.t.Csf5Ol),
                          description: ex.intl.format(ex.t.NpUfej, { bonusOrbMultiplier: s }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: ex.intl.string(ex.t.jVcuVY),
                          onCtaClick: () => (0, s7.mA)({ fromContent: s6.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: ia.Nf,
                      }
                    : null,
            [t, s],
        ),
    };
}
var il = s(975807),
    ic = s(95035),
    io = s(862990),
    id = s(88001),
    iu = s(466919),
    im = s(817577);
function ig() {
    (0, il.A)(id.TE);
}
function ix(e) {
    let t = (0, io.O9)(),
        i = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        n = i?.hasActiveTrial ?? !1,
        a = (0, o.useCallback)(() => {
            n
                ? (0, eI.openModalLazy)(async () => {
                      let { default: e } = await s.e("99709").then(s.bind(s, 516044));
                      return (t) => (0, c.jsx)(e, { ...t });
                  })
                : (0, P.A)({
                      subscriptionTier: tH.pe.TIER_2,
                      initialPlanId: tH.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, o.useMemo)(
        () =>
            t
                ? {
                      id: t4.PREMIUM_GROUP_CARD_ID,
                      title: ex.intl.string(iu.default.YkvksF),
                      description: (0, c.jsxs)(c.Fragment, {
                          children: [
                              ex.intl.formatToPlainString(iu.default.JlyGQj, {
                                  totalSeats: id.aw,
                                  premiumGroupProductName: (0, id.DP)(),
                              }),
                              (0, c.jsx)("div", {
                                  className: ia.LF,
                                  children: (0, c.jsx)(ic.A, {
                                      onClick: ig,
                                      children: ex.intl.string(iu.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: ex.intl.string(ex.t.oW0eUd),
                      primaryAsset: im,
                      ctaIcon: ed.t,
                      ctaIconPosition: "start",
                      ctaText: ex.intl.string(ex.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var ip = s(562819),
    ih = s(892035),
    iN = s(793943),
    iA = s(241988),
    iC = s(655752),
    ij = s(764231),
    iE = s(627380),
    ib = s(30084),
    iR = s(111881),
    i_ = s(714206);
let iI =
        "https://cdn.discordapp.com/assets/content/0722a293c878afdc8718373a6436d7fa1f06014597d138d824d7bb5da55d3d7f.svg",
    iT =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    iv =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function iP() {
    let e,
        t,
        s,
        { analyticsLocations: i } = (0, C.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
        n = (0, s$.X)("useWhatsNewPerkCards"),
        { callOfDutyCard: a, logitechCard: r, steelseriesCard: l } = s_(),
        d = (0, t2.b)("premium_subscriber_home_rewards"),
        { showEaPremiumMarketing: m } = (0, ih.z$)("useWhatsNewPerkCards"),
        x = (0, s0.A)({ analyticsLocations: i }),
        f = (0, o.useCallback)(() => {
            (0, ey.openUserSettings)(eS.X.PROFILE_PANEL, { analyticsLocations: i }, () =>
                (0, sq.L)({ analyticsLocations: i }),
            );
        }, [i]),
        p = (0, o.useCallback)(() => {
            (0, ey.openUserSettings)(eS.X.PROFILE_PANEL, { analyticsLocations: i }, () =>
                (0, ip.L)({ analyticsLocations: i }),
            );
        }, [i]),
        h = (0, o.useCallback)(() => {
            (0, ey.openUserSettings)(eS.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        N = (function (e) {
            let { fractionalState: t } = (0, eP.A)(),
                s = t === tH.xc.FP_ONLY,
                i = (0, s1.$F)(),
                n = (0, s1.Xb)(),
                a = i?.status === s1.Wo.UPCOMING || s,
                r = (0, s2.N)(i?.id),
                l = (function () {
                    let e = (0, s1.$F)(),
                        t = (0, iC.P)(),
                        s = (0, s1.Xb)();
                    if (null == e || null == t || null == s) return null;
                    let i = ti()(),
                        n = ti()(s),
                        a = e.status === s1.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        r = t.tenureReqNumMonths,
                        l = n.clone().add(a, "months"),
                        c = n.clone().add(r, "months").diff(l);
                    return Math.max(0, Math.min(1, (i.diff(l) - 864e5) / c));
                })(),
                c = (0, g.bG)([eT.Ay], () => eT.Ay.useReducedMotion) && !a,
                d = (0, iE.t)(),
                m = (0, iC.P)();
            return (0, o.useMemo)(() => {
                let t,
                    o = null != m ? ex.intl.string(m.nameUnformattedNitro) : void 0;
                null == i
                    ? s && (t = (0, ij.T)(tH.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === s1.Wo.UPCOMING
                              ? ex.intl.formatToPlainString(ex.t.a1eKDi, { days: d?.days ?? 0 })
                              : ((function (e, t) {
                                    if (null != e && null != t) {
                                        if (e.days <= 30)
                                            return ex.intl.formatToPlainString(ex.t.NEXoaI, {
                                                days: e.days,
                                                nextBadgeName: t,
                                            });
                                        if (e.months <= 3)
                                            return ex.intl.formatToPlainString(ex.t.KDV8oD, {
                                                months: e.months,
                                                nextBadgeName: t,
                                            });
                                    }
                                })(d, o) ??
                                (0, ij.T)(i.id, i.tenureReqNumMonths) ??
                                void 0));
                let g = null;
                return (
                    null != r ? (g = a || c ? r.standard : r.ambientLarge) : s && (g = i_),
                    {
                        id: t4.TENURE_BADGE_CARD_ID,
                        title:
                            null != i ? ex.intl.string(i.nameUnformattedNitro) : s ? ex.intl.string(ex.t.tx9Fvw) : "",
                        pillText: ex.intl.string(ex.t["jyYgZ+"]),
                        primaryAsset: g,
                        primaryAssetClassName: u()(iR.pq, { [iR.n6]: a, [iR.kE]: c }),
                        caption: null != n ? ex.intl.formatToPlainString(ex.t.Hu4jfi, { date: new Date(n) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: l ?? void 0,
                        ctaText: ex.intl.string(ex.t.jVcuVY),
                        onCtaClick: () => (0, ib.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, r, a, c, n, l, s, d, m, e]);
        })(i),
        j =
            ((e = (0, q.TF)({ location: "useWhatsNewPerkCards" })),
            (t = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription())),
            (s = (0, eh.q)(t, e === q.Iz.NITRO_HOME_TILE)),
            (0, o.useMemo)(
                () =>
                    null == s
                        ? null
                        : {
                              id: t4.MONTHLY_TO_YEARLY_UPSELL_CARD_ID,
                              title: s.title,
                              description: s.body,
                              pillText: s.badge,
                              primaryAsset: (0, c.jsx)("img", {
                                  src: iA,
                                  alt: "",
                                  "aria-hidden": !0,
                                  style: { width: 157 },
                                  draggable: !1,
                              }),
                              ctaIcon: ed.t,
                              ctaIconPosition: "start",
                              ctaText: s.cta,
                              onCtaClick: () =>
                                  (0, P.A)({ subscription: t, initialPlanId: s.yearlyPlanId, analyticsLocations: i }),
                          },
                [i, s, t],
            )),
        { nitroOrbsRewardsCard: E, questOrbMultiplierCard: b } = ir("useWhatsNewPerkCards"),
        R = ix(i);
    return (0, o.useMemo)(() => {
        let e = [
                d ? null : a,
                d ? null : r,
                d ? null : l,
                E,
                b,
                R,
                {
                    id: t4.DISPLAY_NAME_STYLES_CARD_ID,
                    title: ex.intl.string(ex.t.OLtTrt),
                    description: ex.intl.string(ex.t["di/pXR"]),
                    onCtaClick: n ? x : f,
                    ctaText: ex.intl.string(ex.t.jVcuVY),
                    primaryAsset: iI,
                },
                {
                    id: t4.CLIENT_THEMES_CARD_ID,
                    title: ex.intl.string(ex.t.acc6h6),
                    description: ex.intl.formatToPlainString(ex.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: iv,
                    ctaText: ex.intl.string(ex.t.jVcuVY),
                    onCtaClick: () => {
                        (0, iN.nf)(iN.HP.CUSTOM_THEME);
                    },
                },
                m
                    ? null
                    : {
                          id: t4.PERMADECOS_CARD_ID,
                          title: ex.intl.string(ex.t.L14NZN),
                          description: ex.intl.string(ex.t.eCZkAI),
                          primaryAsset: (0, c.jsx)(sY, { alt: "", ariaHidden: !0 }),
                          ctaText: ex.intl.string(ex.t.jVcuVY),
                          onCtaClick: n ? x : p,
                      },
                {
                    id: t4.CUSTOM_APP_ICONS_CARD_ID,
                    title: ex.intl.string(ex.t["GU+wqh"]),
                    description: ex.intl.string(ex.t["1uPk1Z"]),
                    primaryAsset: iT,
                    ctaText: ex.intl.string(ex.t.y9TxXV),
                    onCtaClick: h,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            s = t ? 5 : 6;
        if ((e.splice(+!!t, 0, N), null != j && e.splice(1, 0, j), m)) {
            let t = null != j ? 2 : 1;
            e.splice(t, 0, {
                id: t4.PROFILE_FRAMES_CARD_ID,
                title: ex.intl.string(ex.t.SGBDnu),
                description: ex.intl.string(ex.t.cMgegQ),
                pillText: ex.intl.string(ex.t.y2b7CA),
                primaryAsset:
                    "https://cdn.discordapp.com/assets/content/3ec210ddc834d1d72f1f84bd5bb0f7a76897b85c34b3602fea04cc0c74462a22.png",
                primaryAssetClassName: u()(ia.lH, ia.yK),
                ctaText: ex.intl.string(ex.t.jVcuVY),
                onCtaClick: () => (0, S.pX)(e1.BVt.COLLECTIBLES_SHOP_WITH_TAB(is.G2.PROFILE_FRAMES)),
            });
        }
        return e.length > s && e.splice(s, e.length - s), e;
    }, [N, j, E, b, R, f, h, p, x, n, a, r, l, d, m]);
}
var iS = s(355097);
let iy = "/assets/1eb1b74667b4c0f0.svg",
    iD = "/assets/983b60e4fcaf973b.svg";
var iM =
    (((r = {}).BEST_OF_NITRO = "bestof"),
    (r.APPEARANCE_STYLE = "appearance"),
    (r.UPGRADES = "upgrades"),
    (r.VIP_EXTRAS = "vip"),
    r);
let iO = [
    { id: "bestof", label: () => ex.intl.string(ex.t.q1u7nQ) },
    { id: "appearance", label: () => ex.intl.string(ex.t.CUnZkZ) },
    { id: "upgrades", label: () => ex.intl.string(ex.t.KC5q8v) },
    { id: "vip", label: () => ex.intl.string(ex.t.DjEAcv) },
];
var iL = s(631255);
function ik(e) {
    e.stopPropagation();
}
function iU(e) {
    let { glowingPerkId: t = null } = e,
        s = (function () {
            let e = (0, sZ.DP)(),
                t = (0, s$.X)("useFavoritesPerkCards"),
                s = (0, s1.Lh)(),
                i = (0, s2.N)(s)?.standard ?? null,
                { analyticsLocations: n } = (0, C.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, sJ.A)({ scrollPosition: iS._F.TRY_IT_OUT, analyticsLocations: n }),
                r = (0, o.useCallback)(() => {
                    (0, ey.openUserSettings)(eS.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: n });
                }, [n]),
                l = (0, o.useCallback)(() => {
                    (0, ey.openUserSettings)(eS.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: n });
                }, [n]),
                d = (0, o.useCallback)(() => {
                    (0, ey.openUserSettings)(eS.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: n });
                }, [n]),
                u = (0, o.useCallback)(() => {
                    (0, S.pX)(e1.BVt.COLLECTIBLES_SHOP);
                }, []),
                m = (0, o.useCallback)(() => {
                    (0, ey.openUserSettings)(eS.X.SOUNDBOARD_CATEGORY, { analyticsLocations: n });
                }, [n]),
                g = (0, s0.A)({ analyticsLocations: n }),
                x = (0, o.useCallback)(() => {
                    (0, ey.openUserSettings)(eS.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, sq.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                f = iP(),
                p = (0, o.useMemo)(() => f.map((e) => e?.id), [f]),
                { nitroOrbsRewardsCard: h, questOrbMultiplierCard: N } = ir("useFavoritesPerkCards"),
                j = ix(n),
                E = (0, o.useMemo)(
                    () => [
                        {
                            id: t4.SERVER_BOOSTS_CARD_ID,
                            title: ex.intl.formatToPlainString(ex.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: ex.intl.formatToPlainString(ex.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: (0, c.jsx)(sO, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != j ? { ...j, categories: ["bestof"] } : null,
                        {
                            id: t4.PROFILES_CARD_ID,
                            title: ex.intl.string(ex.t.xDRab3),
                            description: ex.intl.string(ex.t.yn6fWA),
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: t ? g : a,
                            primaryAsset: (0, c.jsx)(sL, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: t4.HD_VIDEO_CARD_ID,
                            title: ex.intl.string(ex.t["/mQ5gg"]),
                            description: ex.intl.string(ex.t["7WwAXh"]),
                            primaryAsset: (0, c.jsx)(sk, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: t4.CLIENT_THEMES_CARD_ID,
                            title: ex.intl.string(ex.t.acc6h6),
                            description: ex.intl.formatToPlainString(ex.t.WQazjs, { themeCount: 20 }),
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: iv,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: t4.MORE_EMOJIS_CARD_ID,
                            title: ex.intl.string(ex.t.D8vIDT),
                            description: ex.intl.string(ex.t.DRMecB),
                            primaryAsset: (0, c.jsx)(sG, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: t4.LARGE_UPLOADS_CARD_ID,
                            title: ex.intl.string(ex.t.nL1WZV),
                            description: ex.intl.formatToPlainString(ex.t.k8LC1w, { maxSizeMb: 500 }),
                            primaryAsset: (0, c.jsx)(sw, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: t4.CUSTOM_APP_ICONS_CARD_ID,
                            title: ex.intl.string(ex.t["GU+wqh"]),
                            description: ex.intl.string(ex.t["1uPk1Z"]),
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: iT,
                            categories: ["appearance"],
                        },
                        {
                            id: t4.ENTRANCE_SOUNDS_CARD_ID,
                            title: ex.intl.string(ex.t.WJfCPi),
                            description: ex.intl.string(ex.t.liQKJR),
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: t4.DISPLAY_NAME_STYLES_CARD_ID,
                            title: ex.intl.string(ex.t.OLtTrt),
                            description: ex.intl.string(ex.t["di/pXR"]),
                            onCtaClick: t ? g : x,
                            ctaText: ex.intl.string(ex.t.jVcuVY),
                            primaryAsset: iI,
                            categories: ["appearance"],
                        },
                        {
                            id: t4.CUSTOM_SOUNDS_CARD_ID,
                            title: ex.intl.string(ex.t["Cu/oFd"]),
                            description: ex.intl.string(ex.t.czj2aa),
                            primaryAsset: (0, c.jsx)(sH, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: t4.SPECIAL_STICKERS_CARD_ID,
                            title: ex.intl.string(ex.t.MQoVeb),
                            description: ex.intl.string(ex.t.HGCLZX),
                            primaryAsset: (0, c.jsx)("div", {
                                className: ia.Uc,
                                children: (0, c.jsx)(sF, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: t4.SUPER_REACTIONS_CARD_ID,
                            title: ex.intl.string(ex.t.qERvAA),
                            description: ex.intl.string(ex.t.WkUWzx),
                            primaryAsset: (0, c.jsx)(sB, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: t4.VIDEO_BACKGROUNDS_CARD_ID,
                            title: ex.intl.string(ex.t.ssVDYQ),
                            description: ex.intl.string(ex.t.aUSRMa),
                            primaryAsset: (0, sQ.M)(e) ? iy : iD,
                            categories: ["upgrades"],
                        },
                        {
                            id: t4.EARLY_ACCESS_CARD_ID,
                            title: ex.intl.string(ex.t["g/KRY6"]),
                            description: ex.intl.string(ex.t.JzAmJc),
                            primaryAsset: (0, c.jsx)(sV, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: t4.BADGE_CARD_ID,
                            title: ex.intl.string(ex.t.Bn3CtB),
                            description: ex.intl.string(ex.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, c.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, c.jsx)(sW, { color: en.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: t4.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: ex.intl.string(ex.t["MTD+7w"]),
                            description: ex.intl.string(ex.t.Bhs0s6),
                            ctaText: ex.intl.string(ex.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, c.jsx)(sK, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != h ? { ...h, categories: ["vip"] } : null,
                        null != N ? { ...N, categories: ["vip"] } : null,
                        {
                            id: t4.PERMADECOS_CARD_ID,
                            title: ex.intl.string(ex.t.L14NZN),
                            description: ex.intl.string(ex.t.eCZkAI),
                            primaryAsset: (0, c.jsx)(sY, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, h, N, j, a, r, l, d, u, m, x, g, t],
                );
            return (0, o.useMemo)(() => E.filter((e) => null != e && !p.includes(e.id)), [E, p]);
        })(),
        i = null != t ? s.find((e) => e?.id === t) : null,
        [n, a] = (0, o.useState)(i?.categories[0] ?? iM.BEST_OF_NITRO),
        r = (0, o.useMemo)(() => s.filter((e) => null != e && e.categories.includes(n)), [s, n]);
    return (0, c.jsxs)("div", {
        className: iL.uW,
        children: [
            (0, c.jsx)(el.D, { variant: "display-sm", className: iL.R_, children: ex.intl.string(ex.t["Uh3+CA"]) }),
            (0, c.jsx)(sD.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: iL.Lq,
                "aria-label": ex.intl.string(ex.t["Uh3+CA"]),
                children: iO.map((e) =>
                    (0, c.jsx)(sD.V.Item, { id: e.id, className: iL.IC, children: e.label() }, e.id),
                ),
            }),
            (0, c.jsx)(
                sM.A,
                {
                    gap: 20,
                    className: iL.jG,
                    children: r.map((e) => {
                        if (null != e)
                            return (0, c.jsx)(
                                sc.S,
                                { ...e, glowing: t === e.id, containerClassName: iL.Ui, onFocus: ik },
                                e.id,
                            );
                    }),
                },
                n,
            ),
        ],
    });
}
var iG = s(411450);
let iw = function (e) {
    let { className: t } = e,
        s = (0, sZ.DP)();
    return (0, c.jsx)("img", {
        className: u()(iG.D, t),
        src: (0, sQ.M)(s) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var iH = s(300758);
let iF = function (e) {
    let { shouldRenderNitroHomeHeaderExperiment: t, gradientOffsetBottom: s, children: i } = e;
    return t
        ? (0, c.jsxs)("div", {
              className: u()(iH.kL, iH.Gd, iH.Eg),
              children: [(0, c.jsx)(iw, {}), (0, c.jsx)(t1, {}), i],
          })
        : (0, c.jsx)(eN.h, { color: "nitro-pink", className: u()(iH.kL, iH.Gd), offsetBottom: s, children: i });
};
function iB(e) {
    let { glowingPerkId: t = null } = e,
        s = iP();
    return (0, c.jsx)(sg, {
        sectionClassName: sm.uW,
        heading: (0, c.jsx)(el.D, { variant: "display-sm", className: sm.R_, children: ex.intl.string(ex.t.Aw5DRm) }),
        grid: (0, c.jsx)(c.Fragment, {
            children: s.map((e, s) => {
                if (null == e) return;
                let i = 0 === s && !0 === e.featured;
                return (0, c.jsx)(
                    sc.S,
                    { ...e, glowing: t === e.id, featured: i, containerClassName: u()(sm.Nr, { [sm.Nq]: i }) },
                    e.id,
                );
            }),
        }),
    });
}
function iV(e, t, s, i) {
    !(function (e, t, s) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            n = arguments.length > 4 ? arguments[4] : void 0,
            a = (0, g.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
            r = o.useRef(!1);
        o.useEffect(() => {
            if (!t || r.current) return;
            let s = { behavior: a ? "auto" : "smooth", block: i, inline: n },
                l = e();
            if (null != l && l.offsetHeight > 0) {
                (r.current = !0), l.scrollIntoView(s);
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
                    (c = !0), null != o && cancelAnimationFrame(o), d.disconnect();
                }
            );
        }, [t, a, i, n, ...s]),
            o.useEffect(() => {
                t || (r.current = !1);
            }, [t]);
    })(() => document.getElementById(e), t, [e], s, i);
}
var iz = s(92737);
let iW = "/assets/cd2be35d285d4675.svg",
    iK = (e) => {
        let { userId: t } = e,
            s = (0, U.ds)(),
            { isInNitroHomeHeaderTreatment: i } = F("nitro_member_hub_header"),
            n = $("nitro_member_hub_header"),
            a = (0, m.zy)();
        o.useEffect(() => {
            f.h.wait(async () => {
                let e = [(0, K.Ay)()];
                null != t && e.push((0, Q.A)(t)), await Promise.all(e);
            });
        }, [t]),
            o.useEffect(() => {
                I(!0);
            }, []),
            (0, et.j)(),
            (0, v.P)(T);
        let r = o.useRef(null),
            l = o.useRef(null),
            d = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            { isReady: p, programReward: h } = (0, X.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: N,
                glowingSectionId: j,
                glowingPerkId: E,
                scrollBlock: b,
                scrollInline: R,
            } = o.useMemo(() => {
                let e = new URLSearchParams(a.search),
                    t = e.get("perk"),
                    s = e.get(iz.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != s
                      ? { scrollTargetId: s, glowingSectionId: s, scrollBlock: "start" }
                      : {};
            }, [a.search]);
        iV(N ?? "", null != N, b, R);
        let [_, I] = o.useState(!1),
            P = (0, ee.p)(),
            S = o.useRef(null),
            [y, D] = o.useState(!1),
            M = null != P && null != d && d.status === e1.Dmq.CANCELED,
            k = (0, es.iU)(tH.gD.PREMIUM_MONTH_TIER_2, P, d),
            G = !y && M,
            w = null != (0, g.bG)([Y.A], () => (null != t ? Y.A.getUserProfile(t) : null)) && (p || null != h),
            H = (0, q.TF)({ location: "PremiumSubscriberHome" }),
            J = (0, eh.q)(d, H === q.Iz.STICKY_BAR),
            [ei, en] = (0, W.iP)(
                null != J && w && d?.id != null ? B.M.MONTHLY_TO_YEARLY_UPSELL_STICKY_BAR : null,
                d?.id ?? "",
                { cooldownDurationMs: Z.A.Millis.DAYS_30 },
                void 0,
                !0,
            ),
            ea = null != d && d.status === e1.Dmq.CANCELED,
            er = i && !s && !ea,
            { analyticsLocations: el } = (0, C.Ay)(A.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [ec, eo] = o.useState(!1);
        return w
            ? (0, c.jsxs)(z.Gt, {
                  className: u()(iH.xW, iH.Gd),
                  ref: r,
                  children: [
                      (0, c.jsx)(iF, {
                          shouldRenderNitroHomeHeaderExperiment: er,
                          gradientOffsetBottom: s && !n ? 0.55 : 0.8,
                          children: (0, c.jsxs)(C.f5, {
                              value: el,
                              children: [
                                  (0, c.jsx)(V.L, {
                                      innerRef: S,
                                      onChange: (e) => D(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, c.jsx)(tK, {
                                          buttonVisibilityRef: S,
                                          className: iH.v1,
                                          userDiscountOffer: P,
                                          discountedPrice: k,
                                      }),
                                  }),
                                  (0, c.jsx)(iB, { glowingPerkId: E }),
                                  (0, c.jsx)(sv, { glowingPerkId: E, glowingSectionId: j }),
                                  (0, c.jsx)(iU, { glowingPerkId: E }),
                                  (0, c.jsx)(ej, {
                                      className: iH.Zy,
                                      location: A.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: e1.liQ.NITRO_HOME, section: e1.JJy.GIFT_BANNER },
                                  }),
                                  (0, c.jsx)("div", { className: iH.hz }),
                                  (0, c.jsx)(V.L, {
                                      innerRef: l,
                                      onChange: (e) => {
                                          e &&
                                              !ec &&
                                              (L.default.track(e1.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: el,
                                              }),
                                              eo(!0));
                                      },
                                      children: (0, c.jsx)("div", { ref: l, className: iH._Z }),
                                  }),
                                  (0, c.jsx)("img", {
                                      src: iW,
                                      className: iH.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: ex.intl.string(ex.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      M &&
                          null != k &&
                          (0, c.jsx)(sy, {
                              isVisible: G && _,
                              premiumSubscription: d,
                              churnDiscountOffer: P,
                              discountedPrice: k,
                          }),
                      null != ei &&
                          null != J &&
                          null != d &&
                          (0, c.jsx)(ep, { premiumSubscription: d, content: J, markAsDismissed: en }),
                  ],
              })
            : er
              ? (0, c.jsxs)("div", {
                    className: u()(iH.kL, iH.Lq, iH.TN, iH.Eg),
                    children: [
                        (0, c.jsx)(t1, {}),
                        (0, c.jsx)("div", { className: iH.S, children: (0, c.jsx)(x.y, {}) }),
                    ],
                })
              : (0, c.jsx)("div", { className: u()(iH.kL, iH.Lq), children: (0, c.jsx)(x.y, {}) });
    };
var iX = s(286320),
    iY = s(727949),
    iQ = s(440005),
    iZ = s(26508),
    iq = s(968066),
    iJ = s(366010),
    i$ = s(303136);
let i0 = function (e) {
    let t,
        { className: s } = e,
        i = (0, tN.TM)(),
        n = (0, iJ.q)((0, sZ.Ay)());
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
                i$.A,
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
var i1 =
        (((l = {}).HOME = "home"),
        (l.WHATS_NEW = "whatsNew"),
        (l.BEST_OF_NITRO = "bestOfNitro"),
        (l.PLANS = "plans"),
        (l.COMPARE = "compare"),
        l),
    i2 = s(5571);
let i6 = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i } = e,
        n = (0, ea.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        a = { section: e1.JJy.MARKETING_FLOATING_CTA };
    return (0, c.jsx)(ei.animated.div, {
        className: i2.i,
        style: n,
        "data-mtctest-ignore": "true",
        children: (0, c.jsxs)("div", {
            className: i2.U,
            children: [
                (0, c.jsx)(tt.A, {
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
var i3 = s(685661);
let i7 = function () {
    let e = (0, th.bG)([eT.Ay], () => eT.Ay.useReducedMotion);
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)("div", {
                className: i3.BI,
                children: (0, c.jsx)(tE, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: tC.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, c.jsx)("img", { src: tL, alt: "", className: i3.Q }),
                }),
            }),
            (0, c.jsx)(tR, {
                isMotionReduced: e,
                boltContainerClassName: i3.nJ,
                carContainerClassName: i3.IN,
                hammerContainerClassName: i3.Gj,
                keyContainerClassName: i3.FV,
                starContainerClassName: i3.E1,
                boltAssetClassName: i3.j7,
                carAssetClassName: i3.or,
                hammerAssetClassName: i3.Wv,
                keyAssetClassName: i3.rs,
                starAssetClassName: i3.OY,
            }),
        ],
    });
};
var i9 = s(502701);
let i5 = o.forwardRef((e, t) => {
    let { analyticsLocations: s } = (0, C.Ay)(A.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, c.jsx)(C.f5, {
        value: s,
        children: (0, c.jsx)("div", {
            ref: t,
            className: i9.kL,
            children: (0, c.jsxs)("div", {
                className: i9.hQ,
                children: [
                    (0, c.jsx)(i7, {}),
                    (0, c.jsx)(el.D, {
                        variant: "display-md",
                        color: "text-strong",
                        className: i9.RH,
                        children: ex.intl.string(ex.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
});
i5.displayName = "PremiumMarketingFooter";
var i8 = s(939249);
let i4 = function (e) {
    let { navBarSections: t, activeSectionId: s, isAnimationComplete: i } = e,
        n = {
            [i1.HOME]: ex.intl.string(ex.t.uGRXjS),
            [i1.WHATS_NEW]: ex.intl.string(ex.t["mfcR/v"]),
            [i1.BEST_OF_NITRO]: ex.intl.string(ex.t.xQKkE8),
            [i1.PLANS]: ex.intl.string(ex.t.wyNMnm),
            [i1.COMPARE]: ex.intl.string(ex.t.pwD7If),
        },
        a = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        r = (0, tQ.Gh)("premium_marketing_nav_bar") && null != a,
        l = o.useRef(null),
        d = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, c.jsxs)(tY.A, {
        className: t$.TQ,
        transparent: !0,
        children: [
            (0, c.jsxs)("div", {
                className: t$.Wc,
                children: [
                    (0, c.jsxs)("div", {
                        className: t$.wG,
                        children: [
                            (0, c.jsx)(ed.t, { className: t$.nE, colorClass: t$.oG }),
                            (0, c.jsx)("div", {
                                className: t$.zc,
                                role: "tablist",
                                "aria-label": ex.intl.string(ex.t.O9MiXY),
                                children: d.map((e) => {
                                    let t = s === e.id,
                                        i = n[e.id];
                                    return (0, c.jsxs)(
                                        i8.D,
                                        {
                                            role: "tab",
                                            "aria-selected": t,
                                            className: t$.S0,
                                            onClick: e.scrollToSection,
                                            children: [
                                                (0, c.jsx)(ec.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-strong",
                                                    children: i,
                                                }),
                                                t && (0, c.jsx)("div", { className: t$.W0 }),
                                            ],
                                        },
                                        i,
                                    );
                                }),
                            }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: t$.MQ,
                        children: [
                            r &&
                                (0, c.jsx)(tJ.l, { ref: l, size: "sm", location: A.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                            (0, c.jsx)(eA.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
            r && i && (0, c.jsx)(tq.O, { targetElementRef: l }),
        ],
    });
};
var ne = s(704333),
    nt = s(414499),
    ns = s(597770),
    ni = s(500060),
    nn = s(866665),
    na = s(406860),
    nr = s(870975),
    nl = s(900485);
function nc() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, na.A)({ boxType: st.$, thirdPartyPartner: "xbox" }),
        s = [
            { icon: ne.B, text: ex.intl.string(sn.default.MUypiB) },
            { icon: nt.h, text: ex.intl.string(sn.default.ec5Rdd) },
            { icon: ns.o, text: ex.intl.string(sn.default["9t2CzW"]), tooltip: sn.default.AyECej },
            { icon: ni.o, text: ex.intl.string(sn.default.R7YJAY) },
        ];
    return (0, c.jsx)(V.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, c.jsx)("div", {
            ref: e,
            className: nl.iE,
            children: (0, c.jsxs)("div", {
                className: nl.Nr,
                children: [
                    (0, c.jsxs)("div", {
                        className: nl.j,
                        children: [
                            (0, c.jsx)("div", { className: nl._g }),
                            (0, c.jsx)("div", { className: nl.$h }),
                            (0, c.jsx)("div", { className: nl.Rv }),
                            (0, c.jsx)("div", { className: nl.Lw }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: nl.CT,
                        children: [
                            (0, c.jsxs)("div", {
                                className: nl.Qs,
                                children: [
                                    (0, c.jsxs)("div", {
                                        children: [
                                            (0, c.jsx)(el.D, {
                                                variant: "heading-xxl/bold",
                                                color: "text-strong",
                                                className: nl.R_,
                                                children: ex.intl.string(sn.default.rkt1aw),
                                            }),
                                            (0, c.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, c.jsxs)(
                                                            "div",
                                                            {
                                                                className: nl.yf,
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
                                                                            className: nl.Jn,
                                                                            children: (0, c.jsx)(nn.m, {
                                                                                text: ex.intl.string(i),
                                                                                position: "top",
                                                                                children: (0, c.jsx)(t3.m, {
                                                                                    size: "xxs",
                                                                                    color: "var(--icon-default)",
                                                                                }),
                                                                            }),
                                                                        }),
                                                                ],
                                                            },
                                                            s,
                                                        );
                                                    }),
                                                    (0, c.jsx)("div", {
                                                        className: nl.xF,
                                                        children: (0, c.jsx)(tt.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: tH.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: nl.WE,
                                        children: (0, c.jsx)(ec.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: ex.intl.format(sn.default.KDKdWi, { termsLink: (0, nr.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, c.jsx)("div", {
                                className: nl.r1,
                                children: (0, c.jsx)("img", {
                                    className: nl.wm,
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
var no = s(750338),
    nd = s(387640),
    nu = s(950228);
function nm(e) {
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
        className: u()(nu.boxBackdrop, t),
        children: [
            (0, c.jsx)(el.D, {
                className: nu.bentoSectionHeader,
                variant: "display-md",
                color: "text-strong",
                children: i,
            }),
            null != l && (0, c.jsx)("div", { className: nu.highlightBento, children: l }),
            (0, c.jsx)("div", {
                className: nu.bentoBoxesGrid,
                children: s.map((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = nd.A0.SMALL;
                            break;
                        case 2:
                            s = nd.A0.MEDIUM;
                            break;
                        default:
                            s = nd.A0.LARGE;
                    }
                    return (0, c.jsx)(c.Fragment, {
                        children: e.map((e) =>
                            (0, c.jsx)(
                                no.A,
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
let ng = o.memo(function (e) {
        let t = (0, t2.b)("premium_marketing_bento"),
            { whatsNewBoxes: s } = (0, nd.Ay)(t);
        return (0, c.jsx)(nm, {
            boxLayout: s,
            title: ex.intl.string(ex.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: t ? (0, c.jsx)(nc, {}) : null,
            ...e,
        });
    }),
    nx = o.memo(function (e) {
        let { bestOfBoxes: t } = (0, nd.Ay)();
        return (0, c.jsx)(nm, { boxLayout: t, title: ex.intl.string(ex.t.EnzW2H), startLeftAligned: !0, ...e });
    });
var nf = s(526292);
let np = (0, w.mj)({
    kind: "user",
    name: "2026-07-onyx",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var nh = s(236834),
    nN = s(167805);
function nA(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, eZ.A)({ userId: t?.id, size: eK._3.SIZE_24, animateOnHover: !0 });
    return (0, c.jsx)("div", {
        className: nN.$6,
        children: (0, c.jsxs)("div", {
            className: nN.sc,
            children: [
                (0, c.jsx)("div", {
                    className: nN.kR,
                    children: (0, c.jsx)(eX.eu, { src: s, "aria-label": t.username, size: eK._3.SIZE_32, ...i }),
                }),
                (0, c.jsx)(el.D, {
                    variant: "heading-sm/normal",
                    className: nN.FS,
                    color: "text-strong",
                    children: ex.intl.format(ex.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var nC = s(579245),
    nj = s(369805);
let nE = function () {
    let e = (0, nj.A)(void 0, { includesPremiumGroup: !0 });
    return null == e ? null : (0, c.jsx)(eV, { text: e });
};
var nb = s(97352);
function nR() {
    let e = (0, g.bG)([nb.A], () => nb.A.getForSkuAndInterval((0, eO.mH)(tH.pe.TIER_0), tH.WT.MONTH));
    return null != e ? (0, eO.sS)(e) : "\u2026";
}
var n_ = s(857681);
let nI = function (e) {
    let { containerVisibilityPercentage: t } = e,
        s = (0, th.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        i = (0, tN.TM)();
    return (0, c.jsxs)("div", {
        "aria-hidden": !0,
        className: n_.YU,
        children: [
            (0, c.jsx)(tT, {
                supportHEVCAlpha: i,
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                containerClassName: n_.wG,
                assetClassName: n_.lu,
            }),
            (0, c.jsx)(tR, {
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                boltContainerClassName: n_.nJ,
                carContainerClassName: n_.IN,
                hammerContainerClassName: n_.Gj,
                keyContainerClassName: n_.FV,
                starContainerClassName: n_.E1,
                boltAssetClassName: n_.j7,
                carAssetClassName: n_.or,
                hammerAssetClassName: n_.Wv,
                keyAssetClassName: n_.rs,
                starAssetClassName: n_.OY,
            }),
        ],
    });
};
var nT = s(507256);
let nv = o.memo(
    o.forwardRef(function (e, t) {
        let { className: s, subscriptionTier: i, isEligibleForBogoPromotion: n } = e,
            { analyticsLocations: a } = (0, C.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
            r = nR(),
            l = np.useConfig({ location: "PremiumBrandRefreshMarketingHeroHeading" }).enabled,
            o = (0, nh.A)(),
            d = null != o,
            { visibilityPercentageRef: m, visibilityPercentage: x } = eF(
                !(0, g.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
            ),
            f = (0, iX.b)(),
            p = !d && f.length > 0,
            h = (0, ew.c)(eE.C.MARKETING_PAGE_BANNER),
            N = null != h && "marketingPageBanner" === h.properties.properties.oneofKind,
            j = (0, nf.ar)() && !N,
            E = (0, eU.O)(),
            b = (null != E && tH.U4.includes(E.discountId)) || N;
        return (0, c.jsx)(C.f5, {
            value: a,
            children: (0, c.jsx)("div", {
                ref: t,
                className: u()(nT.kL, s),
                "data-testid": "marketing-page-hero-header",
                children: (0, c.jsx)("div", {
                    ref: m,
                    children: (0, c.jsxs)("div", {
                        className: nT.hQ,
                        children: [
                            (0, c.jsx)(nI, { containerVisibilityPercentage: x }),
                            j && (0, c.jsx)(nE, {}),
                            (0, c.jsx)("div", {
                                className: nT.s8,
                                children: (0, c.jsx)(tm.F, {
                                    forceLevel: 1,
                                    children: (0, c.jsx)(el.D, {
                                        variant: "display-md",
                                        color: "text-strong",
                                        className: nT.wx,
                                        children: ex.intl.string(ex.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, c.jsxs)("div", {
                                className: nT.rf,
                                children: [
                                    d &&
                                        (0, c.jsx)("div", {
                                            className: nT.eZ,
                                            children: (0, c.jsx)(nA, { referrer: o }),
                                        }),
                                    p &&
                                        (0, c.jsx)("div", {
                                            className: nT.Qn,
                                            children: (0, c.jsx)(nC.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, c.jsxs)("div", {
                                        className: j ? nT.es : nT.UJ,
                                        children: [
                                            (0, c.jsx)(tt.A, {
                                                size: "md",
                                                fullWidth: j,
                                                hasActivePromotion: !!n,
                                                subscriptionTier: b && null == i ? tH.pe.NONE : i,
                                                buttonTextOverride: b ? ex.intl.string(ex.t["2pG5Ga"]) : void 0,
                                            }),
                                            !j && (0, c.jsx)(eA.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, c.jsx)("div", {
                                        className: nT.iQ,
                                        children: (0, c.jsx)(ec.E, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: l
                                                ? ex.intl.string(ex.t.jHqrJW)
                                                : ex.intl.format(ex.t.kt9wxs, { cheapestMonthlyPrice: r }),
                                        }),
                                    }),
                                    null != h &&
                                        "marketingPageBanner" === h.properties.properties.oneofKind &&
                                        (0, c.jsx)(ez.x, {
                                            componentId: h.id,
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
var nP = s(820081),
    nS = s(140735),
    ny = s(401432),
    nD = s(580630),
    nM = s(795269),
    nO = s(773669),
    nL = s(84483),
    nk = s(864386),
    nU = s(509826),
    nG = s(202600);
function nw(e) {
    let { includes: t } = e;
    return t
        ? (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(nP.B, { size: "sm", color: en.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(nS.A, { children: ex.intl.string(ex.t["tq+6t/"]) }),
              ],
          })
        : (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(ny.a, { size: "xs", color: en.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, c.jsx)(nS.A, { children: ex.intl.string(ex.t.l4qZrp) }),
              ],
          });
}
function nH(e) {
    let { label: t, tier0ColumnData: s, tier2ColumnData: i } = e;
    return (0, c.jsxs)("tr", {
        className: u()(nU.nM, nU.WQ),
        children: [
            (0, c.jsx)("th", {
                scope: "row",
                className: nU.nx,
                children: (0, c.jsx)(ec.E, { variant: "text-md/medium", children: t }),
            }),
            (0, c.jsx)("td", {
                className: nU.Hn,
                children:
                    null != s.text
                        ? (0, c.jsx)(ec.E, { variant: "text-md/medium", children: s.text })
                        : (0, c.jsx)(nw, { includes: !!s.includes }),
            }),
            (0, c.jsx)("td", {
                className: nU.Hn,
                children:
                    null != i.text
                        ? (0, c.jsx)(ec.E, { variant: "text-md/medium", children: i.text })
                        : (0, c.jsx)(nw, { includes: !!i.includes }),
            }),
        ],
    });
}
function nF(e) {
    let { title: t, subtitle: s, rows: i } = e;
    return (0, c.jsxs)("tbody", {
        children: [
            (0, c.jsx)("tr", {
                className: u()(nU.nM, nU.Gf),
                children: (0, c.jsxs)("td", {
                    className: nU.nx,
                    colSpan: 3,
                    children: [
                        (0, c.jsx)(el.D, { variant: "heading-lg/bold", children: t }),
                        null != s && (0, c.jsx)(ec.E, { variant: "text-xs/medium", children: s }),
                    ],
                }),
            }),
            i.map((e) => (0, c.jsx)(nH, { ...e }, e.id)),
        ],
    });
}
function nB(e) {
    let { premiumType: t, priceString: s } = e,
        i = t === tH.PremiumTypes.TIER_0 ? ex.intl.string(ex.t.tUbSDK) : ex.intl.string(ex.t.Ipxkog);
    return (0, c.jsxs)("div", {
        className: nU.nn,
        children: [
            (0, c.jsxs)("div", {
                className: nU.KS,
                children: [
                    (0, c.jsx)(ed.t, { colorClass: nU.oG }),
                    (0, c.jsx)(el.D, { variant: "heading-sm/semibold", children: i }),
                ],
            }),
            (0, c.jsx)(el.D, { variant: "heading-sm/semibold", children: s }),
        ],
    });
}
function nV(e) {
    let { tier0Price: t, tier2Price: s, shouldUseDiscountPrice: i, tier2DiscountedPriceString: n } = e,
        a = i ? n : (0, nD.$g)(s.amount, s.currency);
    return (0, c.jsx)("thead", {
        children: (0, c.jsxs)("tr", {
            className: nU.U1,
            children: [
                (0, c.jsx)("th", {
                    scope: "col",
                    className: nU.Cr,
                    children: (0, c.jsx)(el.D, { variant: "heading-xl/bold", children: ex.intl.string(ex.t.ED4UVD) }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: nU.Hn,
                    children: (0, c.jsx)(nB, {
                        premiumType: tH.PremiumTypes.TIER_0,
                        priceString: (0, nD.$g)(t.amount, t.currency),
                    }),
                }),
                (0, c.jsx)("th", {
                    scope: "col",
                    className: nU.Hn,
                    children: (0, c.jsx)(nB, { premiumType: tH.PremiumTypes.TIER_2, priceString: a }),
                }),
            ],
        }),
    });
}
let nz = function (e) {
        let t,
            { className: s, hidePill: i = !1, selectedPlanTier: n = tH.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: a } = (0, C.Ay)(A.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            r = (0, eG.V)(),
            l = r?.subscription_trial?.sku_id,
            d = (0, eU.O)(),
            m = (0, es.YJ)(d),
            g = null != d && (0, es.U9)(d, tH.pe.TIER_2) && m === tH.gD.PREMIUM_MONTH_TIER_2,
            x = (0, es.N1)(m),
            f = null != x ? `${x}/${(0, eO.FJ)(tH.WT.MONTH)}` : "",
            p = (0, eO.JM)(tH.gD.PREMIUM_MONTH_TIER_0),
            h = (0, eO.JM)(tH.gD.PREMIUM_MONTH_TIER_2),
            N = (function () {
                let e = (0, t2.b)("premium_marketing_comparison"),
                    t = [
                        {
                            id: 10,
                            label: ex.intl.string(ex.t["svn/YX"]),
                            tier0ColumnData: { includes: !0 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 7,
                            label: ex.intl.string(ex.t.ID5B6Z),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 13,
                            label: ex.intl.string(ex.t["PBUrx/"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 22,
                            label: ex.intl.string(nk.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    s = null,
                    i = [],
                    { shouldShowBonusOrbsUX: n, multiplier: a } = (0, s3.lk)(ii.rE.NITRO_HOME_MARKETING),
                    { enabled: r } = sh.Ay.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: l } = (0, sN.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    }),
                    { isInTreatment: c } = (0, nL.uX)("premium_marketing_comparison");
                return (
                    e &&
                        ((s = {
                            id: 23,
                            title: ex.intl.string(ex.t.NG1e6l),
                            subtitle: ex.intl.format(sn.default.uJcbMv, {
                                termsLink: eM.A.getArticleURL(e1.MVz.NITRO_2_POINT_0),
                            }),
                            rows: [
                                {
                                    id: 24,
                                    label: ex.intl.string(sn.default.OpOEmk),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        }),
                        r &&
                            s.rows.push({
                                id: 25,
                                label: ex.intl.string(sn.default.Q0A42h),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        l &&
                            s.rows.push({
                                id: 26,
                                label: ex.intl.string(sR.default["gc2sa/"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        n &&
                            i.push({
                                id: 27,
                                label: ex.intl.formatToPlainString(ex.t.Uhemob, { bonusOrbMultiplier: a }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        c &&
                            i.push({
                                id: 28,
                                label: ex.intl.string(s4.default["20tmSN"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            })),
                    [
                        ...(null != s ? [s] : []),
                        { id: 17, title: ex.intl.string(ex.t.Ij3Zmv), rows: t },
                        {
                            id: 18,
                            title: ex.intl.string(ex.t.Wme3nX),
                            rows: [
                                {
                                    id: 0,
                                    label: ex.intl.string(ex.t.LrUABv),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 1,
                                    label: ex.intl.string(ex.t.DmfiwT),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 2,
                                    label: ex.intl.string(ex.t.Uukj4o),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 12,
                                    label: ex.intl.string(ex.t.NIKDqG),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 9,
                                    label: ex.intl.string(ex.t["5OAKhw"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        },
                        {
                            id: 19,
                            title: ex.intl.string(ex.t["6b3ydG"]),
                            rows: [
                                {
                                    id: 4,
                                    label: ex.intl.string(ex.t["ufhQC+"]),
                                    tier0ColumnData: { text: (0, eO.EJ)(tH.PremiumTypes.TIER_0) },
                                    tier2ColumnData: { text: (0, eO.EJ)(tH.PremiumTypes.TIER_2) },
                                },
                                {
                                    id: 11,
                                    label: ex.intl.string(ex.t.qQxxVc),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 3,
                                    label: ex.intl.string(ex.t["9kRJS8"]),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 21,
                                    label: ex.intl.string(ex.t["5BJqNF"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 5,
                                    label: ex.intl.string(ex.t.VwxlMw),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 6,
                                    label: ex.intl.formatToPlainString(ex.t.nyhDpw, {
                                        numBoosts: tH.M4,
                                        percentageOff: (0, nD.l9)(nO.default.locale, tH.oX / 100),
                                    }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 16,
                                    label: ex.intl.string(ex.t["93xPy3"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 8,
                                    label: ex.intl.string(ex.t.IzrZHz),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 20,
                                    label: ex.intl.string(ex.t.Rj1Qys),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                ...i,
                                {
                                    id: 15,
                                    label: ex.intl.formatToPlainString(ex.t["8crdzJ"], { maxChars: e1.CS1 }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 14,
                                    label: ex.intl.string(ex.t["il8+nC"]),
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
            let e = null != r ? ex.intl.string(ex.t.IBYG5U) : ex.intl.string(ex.t.TR2B4T);
            t = (0, c.jsx)(nM.R, { className: u()(nU.Io, nU.SP), text: e });
        }
        let j = l === tH.pe.TIER_0 || n === tH.PremiumTypes.TIER_0;
        return (0, c.jsx)(C.f5, {
            value: a,
            children: (0, c.jsxs)("div", {
                className: u()(nU.zr, s),
                children: [
                    (0, c.jsx)(el.D, {
                        className: nU.Qw,
                        variant: "display-md",
                        color: "text-strong",
                        children: ex.intl.string(ex.t.DbPgAd),
                    }),
                    (0, c.jsxs)("div", {
                        className: nU.wY,
                        children: [
                            (0, c.jsxs)("div", {
                                className: u()(nU.fO, { [nU.Vd]: j, [nU.hA]: !j }),
                                children: [
                                    !j && t,
                                    (0, c.jsx)("div", { className: nU.xQ }),
                                    (0, c.jsxs)("div", {
                                        className: nU.wN,
                                        children: [
                                            (0, c.jsx)("img", { src: nG, alt: "", className: nU.kQ }),
                                            (0, c.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: nU.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, c.jsxs)("table", {
                                className: nU.tp,
                                children: [
                                    (0, c.jsx)(nV, {
                                        tier0Price: p,
                                        tier2Price: h,
                                        shouldUseDiscountPrice: g,
                                        tier2DiscountedPriceString: f,
                                    }),
                                    N.map((e) => (0, o.createElement)(nF, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    nW = function (e) {
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
                                        (l.current[t] = e), null != e && (e.id = t);
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
var nK = s(818348),
    nX = s(952661);
let nY = () => {
    let e = (0, m.zy)();
    (0, v.P)(T);
    let t = o.useRef(null),
        s = o.useRef(null),
        i = o.useRef(null),
        n = o.useRef(null),
        a = o.useRef(null),
        r = o.useRef(null),
        l = (0, g.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        [d, x] = o.useState(l);
    o.useEffect(() => {
        if (l) return void x(!0);
        let e = s.current;
        if (null != e) return e.addEventListener("animationend", t), () => e.removeEventListener("animationend", t);
        function t(t) {
            t.target === e && x(!0);
        }
    }, [l]);
    let [f, p] = o.useState(!1),
        [h, N] = o.useState(!1),
        [j, E] = o.useState(!1),
        [b, R] = o.useState(!1),
        _ = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        I = null != _ ? (0, eO.EL)(_) : null,
        P = null != I ? eO.Ay.getSkuIdForPlan(I.planId) : null,
        S = null !== P && P !== tH.pe.TIER_2 ? tH.pe.TIER_2 : null,
        y = (0, eL.cg)(),
        { analyticsLocations: D } = (0, C.Ay)(A.A.PREMIUM_MARKETING);
    o.useEffect(() => {
        R(!0);
    }, []);
    let M = (0, sf.A0)({ location: "PremiumMarketingHome" }),
        k = (0, iZ.DK)(iQ.W.NITRO, "PremiumMarketingHome"),
        { shouldShowBonusOrbsUX: U } = (0, s3.lk)(ii.rE.NITRO_HOME_MARKETING),
        G = k && U ? nd.NI.COMBINED_ORBS : U ? nd.NI.ORB_MULTIPLIER : k ? nd.NI.ORB_REWARDS : null,
        w = o.useMemo(() => {
            let t = new URLSearchParams(e.search).get("section");
            return "orbs" === t
                ? G
                : t === nd.NI.THREE_P_PROMOTIONS
                  ? M
                      ? nd.NI.CALL_OF_DUTY
                      : nd.NI.THREE_P_PROMOTIONS
                  : null;
        }, [M, e.search, G]);
    iV(w ?? "", null != w);
    let { navBarSections: H, activeSectionId: F } = nW([i1.HOME, i1.WHATS_NEW, i1.BEST_OF_NITRO, i1.PLANS, i1.COMPARE]),
        { home: B, whatsNew: W, bestOfNitro: K, plans: X, compare: Y } = H,
        Q = (0, c.jsxs)("div", {
            ref: s,
            className: u()(nX.kL, nX.Gd, nX.iI, { [nX.Hq]: !l }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(i0, { className: nX.yH }),
                (0, c.jsx)(i4, { navBarSections: H, activeSectionId: F, isAnimationComplete: d }),
                (0, c.jsxs)("div", {
                    className: nX.Qr,
                    children: [
                        (0, c.jsx)("div", {
                            className: nX.qY,
                            ref: B.ref,
                            children: (0, c.jsx)(V.L, {
                                innerRef: n,
                                onChange: (e) => p(e),
                                threshold: 0,
                                active: !0,
                                children: (0, c.jsx)(nv, {
                                    ref: n,
                                    subscriptionTier: S,
                                    isEligibleForBogoPromotion: y,
                                }),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: nX.So,
                            ref: W.ref,
                            children: (0, c.jsx)(ng, { shouldLoadVideo: b, isReducedMotion: l }),
                        }),
                        (0, c.jsx)("div", {
                            className: nX.KQ,
                            ref: K.ref,
                            children: (0, c.jsx)(nx, { shouldLoadVideo: b, isReducedMotion: l }),
                        }),
                        (0, c.jsx)("div", {
                            className: nX.s5,
                            ref: X.ref,
                            children: (0, c.jsx)(V.L, {
                                innerRef: i,
                                onChange: (e) => N(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, c.jsx)(iq.jP, { innerRef: i }),
                            }),
                        }),
                        (0, c.jsx)("div", { className: nX.aC, ref: Y.ref, children: (0, c.jsx)(nz, {}) }),
                    ],
                }),
                (0, c.jsx)(V.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !j &&
                            (L.default.track(e1.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: D }),
                            E(!0));
                    },
                    children: (0, c.jsx)("div", { ref: a, className: nX._Z }),
                }),
                (0, c.jsx)(i5, { ref: r }),
                (0, c.jsx)(i6, { isVisible: !f && !h && b, subscriptionTier: S, isEligibleForBogoPromotion: y }),
                (0, c.jsx)(i0, { className: nX.MF }),
            ],
        });
    return (0, c.jsx)(t7.N, {
        theme: nK.NJ.DARKER,
        children: (e) => (0, c.jsx)(z.Gt, { className: u()(nX.XG, e), ref: t, children: Q }),
    });
};
var nQ = s(862482),
    nZ = s(412260),
    nq = s(662367),
    nJ = s(374403),
    n$ = s(396375),
    n0 = s(815846),
    n1 = s(860839),
    n2 = s(695366),
    n6 = s(107736);
let n3 = function (e) {
    let t,
        s,
        { premiumSubscription: i, className: n, textColor: a } = e,
        r = (0, nf.ar)();
    if (null == i) return null;
    let l = null != i ? eO.Ay.getPremiumPlanItem(i) : null;
    if (
        (eO.Ay.isBoostOnlySubscription(i)
            ? (t = ex.intl.string(ex.t.Uj0md3))
            : null != l && (t = eO.Ay.getTierDisplayNameByPlanId(l.planId)),
        null == t)
    )
        return null;
    function o() {
        return (0, ey.openUserSettings)(eS.X.SUBSCRIPTIONS_PANEL);
    }
    let d = (null != l ? eO.Ay.getSkuIdForPlan(l.planId) : null) === tH.pe.TIER_1;
    return (
        (s = null != a ? a : r ? "text-overlay-light" : "text-default"),
        (0, c.jsxs)(t9.Z, {
            className: u()(n6.kL, n, { [n6.He]: r }),
            type: t9.Z.Types.CUSTOM,
            children: [
                (0, c.jsx)(n2.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: u()(n6.Kk, { [n6.Pt]: r }),
                }),
                (0, c.jsx)(ec.E, {
                    variant: "text-sm/medium",
                    color: s,
                    children: d
                        ? ex.intl.format(ex.t["tYuv+T"], {
                              helpdeskArticle: eM.A.getArticleURL(e1.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: o,
                          })
                        : ex.intl.format(ex.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: o }),
                }),
            ],
        })
    );
};
var n7 = s(697335);
let n9 = function (e) {
    let { lifted: t = !1 } = e;
    return (0, c.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: u()(n7.zr, { [n7.N]: t }),
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
                        (0, c.jsx)("stop", { className: n7.eq }),
                        (0, c.jsx)("stop", { offset: "0.339235", className: n7.l_ }),
                        (0, c.jsx)("stop", { offset: "0.492065", className: n7.sM }),
                        (0, c.jsx)("stop", { offset: "0.823236", className: n7.zi }),
                        (0, c.jsx)("stop", { offset: "0.899558", className: n7.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var n5 = s(900797),
    n8 = s(847374),
    n4 = s(812993),
    ae = s(504041);
function at(e) {
    let { className: t } = e;
    return (0, c.jsx)(n4.Lp, { className: u()(ae.T, t), text: ex.intl.string(ex.t.EYxi0o) });
}
var as = s(904788),
    ai = s(507553),
    an = s(255438);
let aa = "/assets/5b4fec8511c3676a.svg",
    ar = "/assets/0838bda6ecd20d91.svg";
function al(e, t, s) {
    return (0, sQ.M)(e) ? t : s;
}
var ac = s(365742);
function ao(e) {
    let { isShowingAll: t, onClick: s } = e;
    return (0, c.jsxs)(i8.D, {
        onClick: s,
        className: ac.customButton,
        children: [
            t ? ex.intl.string(ex.t.maZaN3) : ex.intl.string(ex.t["37C26f"]),
            t
                ? (0, c.jsx)(n5.t, { size: "md", color: "currentColor", className: ac.arrow })
                : (0, c.jsx)(n8.a, { size: "md", color: "currentColor", className: ac.arrow }),
        ],
    });
}
function ad(e) {
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
        { analyticsLocations: d } = (0, C.Ay)(A.A.PREMIUM_MARKETING_PERK_CARD);
    return (0, c.jsx)(C.f5, {
        value: d,
        children: (0, c.jsxs)("div", {
            className: u()(ac.perkCard, i),
            children: [
                l
                    ? (0, c.jsx)(as.A, {
                          className: ac.perkCardNewBadge,
                          shouldInheritBackgroundColor: !0,
                          shouldInheritTextColor: !0,
                      })
                    : null,
                o ? (0, c.jsx)(at, { className: ac.perkCardEarlyAccessBadge }) : null,
                (0, c.jsx)("img", { src: n, alt: "", className: u()(a, ac.perksCardArt) }),
                (0, c.jsxs)("div", {
                    children: [
                        (0, c.jsxs)(el.D, {
                            variant: "heading-lg/extrabold",
                            className: ac.perkCardHeading,
                            children: [t, " ", r],
                        }),
                        (0, c.jsx)(ec.E, {
                            variant: "text-sm/normal",
                            className: ac.perkCardDescription,
                            children: "function" == typeof s ? s(d) : s,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let au = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [n, a] = o.useState(!1),
        r = (function (e) {
            let { styles: t } = e,
                i = (0, sZ.Ay)(),
                n = (0, s$.X)("usePerkCards"),
                a = (0, th.bG)([D.default], () => {
                    let e = D.default.getCurrentUser();
                    return eO.Ay.canUsePremiumProfileCustomization(e);
                }),
                r = (0, an.Xq)(tH.f3 / 1024, { useKibibytes: !0 });
            return {
                badge: {
                    title: ex.intl.string(ex.t.SS87rQ),
                    description: ex.intl.string(ex.t.oD6CRr),
                    imageSource: "/assets/70e295f6158d848f.png",
                    imageClassName: t.badgeImage,
                },
                badgeAlt: {
                    title: ex.intl.string(ex.t["5cYMu0"]),
                    description: ex.intl.string(ex.t.vxk9va),
                    imageSource: al(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
                    imageClassName: t.badgeNewImage,
                },
                clientThemes: {
                    title: ex.intl.string(ex.t["/xvEMy"]),
                    description: ex.intl.string(ex.t.HKWdjj),
                    className: t.clientThemesCard,
                    imageSource: "/assets/37e0853800afb796.svg",
                    imageClassName: t.clientThemesImage,
                },
                customAppIcons: {
                    title: ex.intl.string(ex.t.OuItFi),
                    description: ex.intl.string(ex.t.mPyrE6),
                    imageSource:
                        "https://cdn.discordapp.com/assets/content/bca160c31fc5390dd2b41d90060edcc912a45f6ab3beab44ea79e16bf1f6530f.png",
                    imageClassName: t.customAppIconImage,
                },
                emoji: {
                    title: ex.intl.string(ex.t["R2IV/Q"]),
                    description: ex.intl.string(ex.t.R5Xag2),
                    imageSource: "/assets/d8edaaf5cb32248f.svg",
                    imageClassName: t.emojiImage,
                },
                guildProfile: {
                    title: ex.intl.string(ex.t.lKDhhJ),
                    description: (e) => {
                        if (n)
                            return a
                                ? ex.intl.formatToPlainString(ex.t.aj1pfZ, { onCheckItOutClick: () => {} })
                                : ex.intl.formatToPlainString(ex.t.d2oYS8, { onTryItOutClick: () => {} });
                        function t() {
                            {
                                let { openUserSettings: t } = s(766075);
                                ai.A.setState({ scrollPosition: iS._F.TRY_IT_OUT }),
                                    t(eS.X.PROFILE_PANEL, { analyticsLocations: e });
                            }
                        }
                        return a
                            ? ex.intl.format(ex.t.aj1pfZ, { onCheckItOutClick: t })
                            : ex.intl.format(ex.t.d2oYS8, { onTryItOutClick: t });
                    },
                    imageSource: "/assets/e1b6b45be1ce4b03.png",
                    imageClassName: t.perGuildProfilesImage,
                },
                longerMessages: {
                    title: ex.intl.string(ex.t.BUScid),
                    description: ex.intl.string(ex.t.vN6XpQ),
                    imageSource: al(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: ex.intl.string(ex.t.Bv8Pfk),
                    description: ex.intl.string(ex.t.JMfaTU),
                    imageSource: al(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: ex.intl.string(ex.t.Bv8Pfk),
                    description: ex.intl.string(ex.t.JMfaTU),
                    imageSource: al(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: ex.intl.string(ex.t["lGcW+c"]),
                    description: ex.intl.string(ex.t["/fDyO+"]),
                    imageSource: al(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: ex.intl.string(ex.t["1c+xwT"]),
                    description: ex.intl.string(ex.t.hJG8ZN),
                    imageSource: al(i, ar, aa),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: ex.intl.string(ex.t.tzdIwI),
                    description: ex.intl.string(ex.t.hJG8ZN),
                    imageSource: al(i, ar, aa),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: ex.intl.string(ex.t.tzdIwI),
                    description: ex.intl.string(ex.t.hJG8ZN),
                    imageSource: al(i, ar, aa),
                    imageClassName: t.stickersImage,
                },
                streaming: {
                    title: ex.intl.string(ex.t.RSXQYO),
                    description: ex.intl.string(ex.t.ymCPxp),
                    imageSource: "/assets/3bcdc01b26c7f691.svg",
                    imageClassName: t.streamingImage,
                },
                superReactions: {
                    title: ex.intl.string(ex.t["uZt5q/"]),
                    description: ex.intl.string(ex.t.ZK3ZoX),
                    imageSource: al(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
                    imageClassName: t.superReactionsImage,
                },
                upload: {
                    title: ex.intl.formatToPlainString(ex.t.jqhAdL, { premiumMaxSize: r }),
                    description: ex.intl.formatToPlainString(ex.t["HI+cfm"], { premiumMaxSize: r }),
                    imageSource: "/assets/010eae6a6dbacc63.svg",
                    imageClassName: t.uploadImage,
                },
                videoBackground: {
                    title: ex.intl.string(ex.t.NaGpTf),
                    description: ex.intl.string(ex.t["A8O/Qw"]),
                    imageSource: al(i, iy, iD),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: ac }),
        l = (0, th.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        { analyticsLocations: d } = (0, C.Ay)(),
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
        className: u()(ac.perksContainer, t, {
            [ac.partiallyHidden]: i && !n,
            [ac.subscriberNitroHome]: i,
            [ac.reducedMotion]: l,
        }),
        children: [
            (0, c.jsx)(el.D, {
                variant: "heading-xxl/extrabold",
                className: ac.perksTitle,
                children: i ? ex.intl.string(ex.t.QX14gI) : ex.intl.string(ex.t.RGadQR),
            }),
            (0, c.jsx)("div", {
                className: u()(ac.perkCardContainer, { [ac.perkCardContainerExpanded]: n }),
                children: m.map((e) => null != e && (0, c.jsx)(ad, { ...e }, e.title)),
            }),
            i &&
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)("div", {
                            className: u()({ [ac.sizeGizmo]: !n, [ac.sizeGizmoExpanded]: n }),
                            children: (0, c.jsx)(ao, {
                                onClick: function () {
                                    L.default.track(e1.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: d,
                                        was_expanded: n,
                                    }),
                                        a(!n);
                                },
                                isShowingAll: n,
                            }),
                        }),
                        (0, c.jsx)("div", { className: u()(ac.cover, { [ac.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var am = s(194509),
    ag = s(222214);
let ax = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: n } = e,
        a = (0, ea.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        r = { section: e1.JJy.MARKETING_FLOATING_CTA },
        l = (0, sZ.Ay)(),
        o = (0, iJ.M)(l);
    return (0, c.jsx)(ei.animated.div, {
        className: u()(ag.iE, { [ag.H8]: i, [ag.q4]: !t }),
        style: a,
        children: (0, c.jsxs)("div", {
            className: i ? ag.zW : ag.iJ,
            children: [
                (0, c.jsx)(n$.A, {
                    color: o ? nQ.XD.BRAND_INVERTED : void 0,
                    className: u()(ag.x6, { [ag.Ph]: o }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: r,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: o ? void 0 : ag.PJ,
                }),
                (0, c.jsx)(am.A, { className: ag.x6, premiumModalAnalyticsLocation: r }),
            ],
        }),
    });
};
var af = s(93805);
function ap(e) {
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
            ? (0, c.jsx)(n$.A, {
                  color: r ? nQ.XD.BRAND_INVERTED : void 0,
                  className: u()(af.x6, af.Ph, n, { [af.Sq]: t && a, [af.MF]: a && !r }),
                  shinyButtonClassName: r ? void 0 : af.PJ,
                  subscriptionTier: s,
                  hasActivePromotion: !0,
              })
            : (0, c.jsx)(n$.A, {
                  color: r || !a ? nQ.XD.BRAND_INVERTED : void 0,
                  className: u()(af.x6, af.Ph, n, { [af.Sq]: t && a, [af.MF]: a && !r }),
                  subscriptionTier: s,
              }),
        d = t && a ? null : (0, c.jsx)(am.A, { className: u()(af.x6, n), color: a ? void 0 : nQ.XD.WHITE });
    return (0, c.jsxs)("div", { className: u()(af.UD, i), children: [o, " ", d] });
}
function ah() {
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(as.p, { className: af.zd }),
            (0, c.jsx)(as.p, { className: af.G }),
            (0, c.jsx)(as.p, { className: af.zy }),
            (0, c.jsx)(as.p, { className: af.GX }),
        ],
    });
}
function aN(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        n = nR();
    return (0, c.jsx)(ec.E, {
        variant: t,
        color: i ? "text-subtle" : "text-overlay-light",
        className: u()(af.h_, { [af.If]: s, [af.jn]: i }),
        children: ex.intl.format(ex.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let aA = o.forwardRef(function (e, t) {
    let { className: s, buttonClassName: i, subscriptionTier: n, isDarkMode: a } = e,
        { analyticsLocations: r } = (0, C.Ay)(A.A.PREMIUM_MARKETING_HERO_CTA),
        l = (0, ek.QQ)(),
        o = (0, nf.ar)(),
        d = (0, eL.cg)(),
        m = (0, iX.b)().length > 0,
        g = ex.intl.string(ex.t.YCZldK);
    return (0, c.jsx)(C.f5, {
        value: r,
        children: (0, c.jsxs)("div", {
            ref: t,
            className: u()(af.kL, s, { [af.V1]: !o, [af.Q4]: !o && m }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, c.jsxs)("div", {
                    className: o ? af.I6 : af.G1,
                    children: [
                        (0, c.jsx)(tm.F, {
                            forceLevel: 1,
                            children: (0, c.jsx)(el.D, {
                                variant: o ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: g,
                            }),
                        }),
                        m
                            ? (0, c.jsx)("div", {
                                  className: af.DF,
                                  children: (0, c.jsx)(nC.A, { textColor: "text-overlay-light", smallerText: !o }),
                              })
                            : (0, c.jsx)(aN, {}),
                        d || l
                            ? (0, c.jsx)("div", {
                                  className: af.UD,
                                  children: (0, c.jsx)(am.A, { className: u()(af.x6, i), color: nQ.XD.WHITE }),
                              })
                            : (0, c.jsx)(ap, {
                                  subscriptionTier: n,
                                  inOfferExperience: o,
                                  buttonClassName: i,
                                  isDarkMode: a,
                              }),
                        m && (0, c.jsx)(aN, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !o && (0, c.jsx)(ah, {}),
            ],
        }),
    });
});
var aC = s(22118),
    aj = s(918676),
    aE = s(967603);
function ab(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, c.jsx)(n9, { lifted: t }) : null;
}
let aR = () => {
        (0, v.P)(T);
        let e = o.useRef(null),
            t = o.useRef(null),
            s = o.useRef(null),
            i = (0, sZ.Ay)(),
            n = (0, sQ.M)(i),
            [a, r] = o.useState(!1),
            [l, d] = o.useState(!1),
            [m, x] = o.useState(!1),
            [f, p] = o.useState(!1),
            h = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            N = null != h ? (0, eO.EL)(h) : null,
            j = null != N ? eO.Ay.getSkuIdForPlan(N.planId) : null,
            E = null !== j && j !== tH.pe.TIER_2 ? tH.pe.TIER_2 : null,
            b = (0, eG.V)(),
            R = b?.subscription_trial?.sku_id,
            _ = (0, nf.ar)(),
            I = (0, eL.cg)(),
            P = (0, tQ.Gh)("premium-marketing-settings-page"),
            S = I ?? !1,
            y = (0, g.bG)([nZ.A], () => {
                let e = nZ.A.getMarketingComponentByType(eE.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            D = (0, nJ.Q)(),
            { analyticsLocations: M } = (0, C.Ay)(A.A.PREMIUM_MARKETING);
        o.useEffect(() => {
            p(!0);
        }, []);
        let k = (0, c.jsx)("div", {
            className: aE.dY,
            children: (0, c.jsx)(V.L, {
                innerRef: e,
                onChange: (e) => d(e),
                threshold: 0.1,
                active: !0,
                children: (0, c.jsx)(n1.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, c.jsx)(n$.A, {
                        showIcon: !1,
                        subscriptionTier: tH.pe.TIER_0,
                        className: aj.Ph,
                        look: nQ.pR.OUTLINED,
                        color: nQ.XD.WHITE,
                        buttonShineClassName: aj.Qr,
                    }),
                    tier2CTAButton:
                        R === tH.pe.TIER_0
                            ? (0, c.jsx)(n$.A, {
                                  showIcon: !1,
                                  subscriptionTier: tH.pe.TIER_2,
                                  className: aj.Ph,
                                  look: nQ.pR.OUTLINED,
                                  color: nQ.XD.WHITE,
                                  buttonShineClassName: aj.Qr,
                              })
                            : (0, c.jsx)(n$.A, {
                                  color: nQ.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: tH.pe.TIER_2,
                                  className: aj.Ph,
                                  hasActivePromotion: S,
                                  textOptions: { textClassName: aj.Ac },
                                  buttonShineClassName: aj.Qr,
                              }),
                }),
            }),
        });
        return (0, c.jsxs)("div", {
            className: aE.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, c.jsx)(n3, { premiumSubscription: h, className: u()(aE.R3, { [aE.aZ]: _ }) }),
                _ &&
                    (0, c.jsxs)("div", {
                        className: aE.n1,
                        children: [
                            (0, c.jsx)(ab, { inOfferExperience: _ }),
                            P &&
                                (0, c.jsx)(tJ.l, {
                                    className: aE.ij,
                                    size: "md",
                                    location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                    forceDarkTheme: !0,
                                }),
                        ],
                    }),
                (0, c.jsxs)("div", {
                    className: u()({ [aE.V1]: !_ }),
                    children: [
                        null != y && (0, c.jsx)(n0.c, { className: aE.w$, config: y }),
                        (0, c.jsxs)("div", {
                            className: aE.iS,
                            children: [
                                P &&
                                    !_ &&
                                    (0, c.jsx)(tJ.l, {
                                        className: aE.ij,
                                        size: "md",
                                        location: A.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, c.jsx)(V.L, {
                                    innerRef: t,
                                    onChange: (e) => r(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, c.jsx)(aA, {
                                        ref: t,
                                        subscriptionTier: E,
                                        className: u()({ [aE.p7]: _, [aE.Pw]: _, [aE.AG]: I, [aE.Cv]: null != h }),
                                        isDarkMode: n,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != D && (0, c.jsx)("div", { className: aE.Ol, children: (0, c.jsx)(nq.I, { component: D }) }),
                k,
                (0, c.jsx)(au, { className: aE.B_ }),
                (0, c.jsx)("div", { className: aE.aC, children: (0, c.jsx)(aC.A, { className: aE.JQ, hideCTAs: !0 }) }),
                (0, c.jsx)("div", { className: aE.hz }),
                (0, c.jsx)(ax, {
                    isVisible: !a && !l && f,
                    subscriptionTier: E,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: I,
                }),
                (0, c.jsx)(V.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !m &&
                            (L.default.track(e1.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: M }),
                            x(!0));
                    },
                    children: (0, c.jsx)("div", { ref: s, className: aE._Z }),
                }),
                (0, c.jsx)("img", {
                    src: iW,
                    className: aE.Kw,
                    width: 112,
                    height: 85,
                    alt: ex.intl.string(ex.t.X4IxWL),
                }),
            ],
        });
    },
    a_ = function (e) {
        let { entrypoint: t } = e,
            s = (0, eG.V)(),
            i = (0, eU.O)({ includePremiumGroupDiscount: !0 }),
            n = (0, iY.NF)({ trialOffer: s }),
            a = (0, iY.Tp)(),
            r = (0, g.bG)([eJ.A], () => eJ.A.getReminderStateId());
        switch (
            (o.useEffect(() => {
                !0 === n && (0, iY.QG)(), !0 === a && (0, iY.ne)(r), (null != s || null != i) && (0, G.u1)(s, i);
            }, [s, i, n, a, r]),
            t)
        ) {
            case tH.tU.UserSettings:
                return (0, c.jsx)(aR, {});
            case tH.tU.ApplicationStoreHome:
                return (0, c.jsx)(nY, {});
            default:
                return null;
        }
    };
var aI = s(738783);
let aT = function (e) {
    let { entrypoint: t = tH.tU.UserSettings } = e;
    (0, v.P)(T);
    let s = (0, E.Hp)(),
        { isInNitroHomeHeaderTreatment: i } = F("nitro_member_hub_header"),
        n = (0, U.ds)(),
        { sourceAnalyticsLocations: a, analyticsLocations: r } = (0, C.Ay)(A.A.PREMIUM_MARKETING),
        l = (0, g.bG)([O.A], () => O.A.hasFetchedSubscriptions()),
        d = (0, g.bG)([M.A], () => M.A.hasFetchedPaymentSources),
        _ = (0, g.bG)([D.default], () => D.default.getCurrentUser()),
        I = _?.id,
        w = (0, eG.V)(),
        H = (0, eU.O)({ includePremiumGroupDiscount: !0 }),
        B = (0, b.Y)(tH.T7),
        [V, z] = o.useState(!0),
        W = o.useRef(0),
        K = (0, k.YE)(_, tH.PremiumTypes.TIER_2),
        X = (0, g.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        Y = null != X && X.status === e1.Dmq.CANCELED;
    (0, iX.b)(),
        o.useEffect(() => {
            f.h.wait(async () => {
                let e = Date.now();
                await Promise.all([j.hP(), j.$o(), (0, p.zS)(null, null, e1.tF5.DISCOVERY)]),
                    (W.current = Date.now() - e),
                    z(!1);
            });
        }, []),
        o.useEffect(() => {
            V ||
                L.default.track(e1.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: a,
                    load_duration_ms: W.current,
                });
        }, [a, V]),
        o.useEffect(() => {
            s && (null != w || null != H) && (0, G.u1)(w, H);
        }, [s, w, H]);
    let Q = (0, m.zy)(),
        Z = o.useRef(!1),
        q = l && d && B,
        [J, $] = o.useState(q);
    q && !J && $(!0),
        o.useEffect(() => {
            if (Z.current || !q) return;
            let e = new URLSearchParams(Q.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: tH.pe.TIER_0, nitro: tH.pe.TIER_2 }[e];
            null != t &&
                ((Z.current = !0),
                (0, S.bG)(e1.BVt.APPLICATION_STORE),
                (0, P.A)({ subscriptionTier: t, analyticsLocations: r }));
        }, [q, Q.search, r]);
    let ee = (0, g.bG)([y.A], () => y.A.enabled),
        et = t === tH.tU.ApplicationStoreHome,
        es = ee
            ? (0, c.jsx)(h.A, {})
            : s
              ? (0, c.jsx)(R.uK, {})
              : et && K
                ? (0, c.jsx)(C.f5, { value: r, children: (0, c.jsx)(iK, { userId: I }) })
                : J
                  ? null
                  : (0, c.jsx)("div", { className: u()(aI.kL, aI.Lq), children: (0, c.jsx)(x.y, {}) });
    if (null != es) {
        let e = !ee && !s && et && K;
        return i && e && !n && !Y ? es : (0, c.jsxs)(c.Fragment, { children: [et && (0, c.jsx)(N.A, {}), es] });
    }
    return (0, c.jsx)(C.f5, { value: r, children: (0, c.jsx)(a_, { entrypoint: t }) });
};
