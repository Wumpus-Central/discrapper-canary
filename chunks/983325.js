l.d(t, { Yc: () => eS, vG: () => eO, FT: () => ep, EA: () => ey });
var n,
    a = l(477900),
    s = l(582128),
    r = l(892227),
    i = l(17928),
    c = l(922016),
    o = l(757036),
    u = l(366505),
    d = l(166403),
    h =
        (((n = {})[(n.NONE = 0)] = "NONE"),
        (n[(n.IN_PROGRESS = 1)] = "IN_PROGRESS"),
        (n[(n.COMPLETED = 2)] = "COMPLETED"),
        (n[(n.CLAIMED = 3)] = "CLAIMED"),
        (n[(n.INELIGIBLE = 4)] = "INELIGIBLE"),
        (n[(n.ELIGIBLE = 5)] = "ELIGIBLE"),
        n),
    m = l(362862),
    C = l(761705),
    f = l(636537),
    x = l(228366),
    g = l(913122),
    E = l(652215);
async function b(e) {
    x.h.wait(() => {
        x.h.dispatch({ type: "ORB_CHALLENGE_CLAIM", achievementIdentifier: e });
    });
    try {
        let t = await f.Bo.post({ url: E.Rsh.ORB_USER_CHALLENGE_CLAIM(e), rejectWithError: !1 });
        return (
            x.h.dispatch({ type: "ORB_CHALLENGE_CLAIM_SUCCESS", achievementIdentifier: e, response: t.body }), t.body
        );
    } catch (l) {
        let t = l instanceof g.LG ? l : new g.LG(l);
        x.h.dispatch({ type: "ORB_CHALLENGE_CLAIM_FAIL", achievementIdentifier: e, error: t });
    }
}
async function j(e) {
    x.h.wait(() => {
        x.h.dispatch({ type: "ORB_CHALLENGES_LIST_FETCH" });
    });
    try {
        let t = await f.Bo.get({ url: E.Rsh.ORB_USER_CHALLENGES_LIST, rejectWithError: !1 });
        return (
            x.h.dispatch({ type: "ORB_CHALLENGES_LIST_FETCH_SUCCESS", response: t.body }),
            null != e && e(t.body),
            t.body
        );
    } catch (t) {
        let e = t instanceof g.LG ? t : new g.LG(t);
        x.h.dispatch({ type: "ORB_CHALLENGES_LIST_FETCH_FAIL", error: e });
    }
}
function v(e) {
    return {
        achievementIdentifier: e.achievement_identifier,
        title: e.title,
        orbRewardAmount: e.reward_amount,
        achievementStatus: e.status,
    };
}
let N = new Set([null, h.NONE, h.IN_PROGRESS, h.ELIGIBLE, h.COMPLETED]);
function A() {
    return {
        challenges: [],
        isFetchingChallenges: !1,
        hasFetchedChallenges: !1,
        fetchChallengesError: null,
        isClaimingChallengeMap: {},
        claimChallengeErrorMap: {},
        orbRewardMultiplier: null,
    };
}
class p extends i.Ay.Store {
    static displayName = "OrbChallengesStore";
    state = A();
    constructor() {
        super(x.h, {
            ORB_CHALLENGES_LIST_FETCH: (e) => this.handleOrbChallengesFetchStart(e),
            ORB_CHALLENGES_LIST_FETCH_SUCCESS: (e) => this.handleOrbChallengesFetchSuccess(e),
            ORB_CHALLENGES_LIST_FETCH_FAIL: (e) => this.handleOrbChallengesFetchFail(e),
            ORB_CHALLENGE_CLAIM: (e) => this.handleOrbChallengeClaim(e),
            ORB_CHALLENGE_CLAIM_SUCCESS: (e) => this.handleOrbChallengeClaimSuccess(e),
            ORB_CHALLENGE_CLAIM_FAIL: (e) => this.handleOrbChallengeClaimFail(e),
            USER_DISCORD_ACHIEVEMENT_STATE_UPDATE: (e) => this.handleUserAchievementStateUpdate(e),
            LOGIN_SUCCESS: () => this.handleReset(),
        });
    }
    handleReset() {
        this.state = A();
    }
    handleOrbChallengesFetchStart(e) {
        let {} = e;
        (this.state.isFetchingChallenges = !0), (this.state.fetchChallengesError = null);
    }
    handleOrbChallengesFetchSuccess(e) {
        let { response: t } = e;
        (this.state.challenges = t.achievements.map(v)),
            (this.state.orbRewardMultiplier = t.orb_multiplier),
            (this.state.hasFetchedChallenges = !0),
            (this.state.isFetchingChallenges = !1);
    }
    handleOrbChallengesFetchFail(e) {
        let { error: t } = e;
        (this.state.fetchChallengesError = t), (this.state.isFetchingChallenges = !1);
    }
    handleOrbChallengeClaim(e) {
        let { achievementIdentifier: t } = e;
        (this.state.isClaimingChallengeMap[t] = !0), (this.state.claimChallengeErrorMap[t] = null);
    }
    handleOrbChallengeClaimSuccess(e) {
        let { achievementIdentifier: t, response: l } = e;
        (this.state.isClaimingChallengeMap[t] = !1),
            (this.state.claimChallengeErrorMap[t] = null),
            (this.state.challenges = this.state.challenges.map((e) => (e.achievementIdentifier === t ? v(l) : e)));
    }
    handleOrbChallengeClaimFail(e) {
        let { achievementIdentifier: t, error: l } = e;
        (this.state.isClaimingChallengeMap[t] = !1), (this.state.claimChallengeErrorMap[t] = l);
    }
    handleUserAchievementStateUpdate(e) {
        let { payload: t } = e;
        return "achievement_completed" === t.type && j(), !1;
    }
    get orbRewardMultiplier() {
        return this.state.orbRewardMultiplier;
    }
    get challenges() {
        return this.state.challenges;
    }
    get challengesForOrbWallet() {
        return this.state.challenges.filter((e) => N.has(e.achievementStatus));
    }
    get hasFetchedChallenges() {
        return this.state.hasFetchedChallenges;
    }
    get isFetchingChallenges() {
        return this.state.isFetchingChallenges;
    }
    get fetchChallengesError() {
        return this.state.fetchChallengesError;
    }
}
let S = new p();
var L = l(503698),
    R = l.n(L),
    _ = l(821609),
    O = l(661531),
    y = l(403581),
    T = l(834730),
    k = l(404778),
    M = l(577473),
    F = l(34188),
    I = l(303136),
    w = l(626031),
    D = l(628284),
    B = l(320448),
    P = l(318254),
    U = l(939249),
    G = l(742967),
    H = l(642529),
    W = l(375708),
    z = l(137484),
    V = l(427483);
function $(e) {
    let { achievementStatus: t, animationState: l = "off" } = e,
        n = t === h.COMPLETED || t === h.CLAIMED,
        s = (0, a.jsx)("div", {
            className: R()(z.TK, { [z.AM]: n }),
            children: (0, a.jsx)(G.x, {
                className: z.t9,
                staticAsset:
                    "https://cdn.discordapp.com/assets/content/c25ca35dc2175b9ce33ad5bd427fb4c458cbb6cc6e8b01e592e70dd7472bfa0d.png",
                webmAsset: V.A,
                animationState: l,
                assetAltText: "",
            }),
        });
    return n ? (0, a.jsx)("div", { className: z.Zs, children: s }) : s;
}
function q(e) {
    let {
            achievementIdentifier: t,
            title: l,
            orbRewardAmount: n,
            achievementStatus: r,
            onClaim: i,
            onDiscoveryClick: c,
        } = e,
        [o, u] = s.useState(!1),
        [d, m] = s.useState(!1);
    async function C() {
        null != i && (m(!0), await i(t).finally(() => m(!1)));
    }
    let f = null != c && r === h.NONE,
        x = R()(z.of, { [z.D8]: o, [z.or]: f }),
        g = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: z.Ub,
                    children: [
                        (0, a.jsx)($, { achievementStatus: r, animationState: o ? "on" : "off" }),
                        (0, a.jsxs)("div", {
                            className: z.Du,
                            children: [
                                (0, a.jsx)(T.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                                (0, a.jsx)(T.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: W.intl.format(r === h.COMPLETED ? H.default.h2qWpS : H.default.B8Fxns, {
                                        orbAmount: n,
                                        orbIconHook: () =>
                                            (0, a.jsx)(P.C, { className: z.fN, size: "xs", color: "currentColor" }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (function (e, t) {
                    let { isHovered: l, isClaiming: n, handleClaim: s, hasDiscoveryClick: r } = t,
                        i = (0, a.jsx)(_.$, {
                            variant: "expressive",
                            size: "md",
                            text: W.intl.string(H.default.WmfVjs),
                            loading: n,
                            onClick: s,
                        });
                    return n
                        ? i
                        : e === h.COMPLETED
                          ? l
                              ? i
                              : (0, a.jsx)(D.y, {
                                    color: O.A.colors.STATUS_POSITIVE,
                                    size: "sm",
                                    "aria-label": W.intl.string(H.default.k6h2J3),
                                })
                          : r
                            ? (0, a.jsx)(B._, { size: "sm", "aria-hidden": !0 })
                            : null;
                })(r, { isHovered: o, isClaiming: d, handleClaim: C, hasDiscoveryClick: f }),
            ],
        }),
        E = s.useMemo(() => ({ onMouseEnter: () => u(!0), onMouseLeave: () => u(!1) }), []);
    return f
        ? (0, a.jsx)(U.D, { className: x, ...E, onClick: c, "aria-label": l, children: g })
        : (0, a.jsx)("div", { className: x, ...E, children: g });
}
var K = l(653877),
    Y = l(268920),
    J = l(633217);
function Q() {
    return (0, a.jsx)("div", {
        className: K.s,
        children: (0, a.jsx)(I.A, { src: J.A, fallbackImage: Y.A, className: K.Cb }),
    });
}
function X(e) {
    let { nitroIconColor: t = O.A.colors.TEXT_MUTED, text: l } = e;
    return (0, a.jsxs)("div", {
        className: K.SY,
        children: [
            (0, a.jsx)(y.t, { size: "xxs", color: t }),
            (0, a.jsx)(T.E, { variant: "text-xs/medium", color: "text-muted", children: l }),
        ],
    });
}
function Z(e) {
    let { orbBalance: t, headerTagsContent: l } = e;
    return (0, a.jsxs)("div", {
        className: K.SZ,
        children: [
            (0, a.jsx)(Q, {}),
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(w.t, {
                        value: t,
                        onValueChange: E.tEg,
                        onValueReached: E.tEg,
                        targetTotalCounterTime: 1500,
                        className: K.xc,
                        textVariant: "display-md",
                        textColor: "text-strong",
                        horizontalAlignment: "left",
                        isRenderedWithoutLottieAnimation: !0,
                    }),
                    l,
                ],
            }),
        ],
    });
}
function ee(e) {
    let { isFullWidth: t = !1, className: l } = e;
    return (0, a.jsx)(k.c, { className: R()(K.ts, { [K.KU]: t }, l) });
}
function et(e) {
    let { text: t } = e;
    return (0, a.jsxs)("div", {
        className: K.lh,
        children: [
            (0, a.jsx)(y.t, { size: "xxs", color: "white" }),
            (0, a.jsx)(T.E, { variant: "text-xs/semibold", color: "text-overlay-light", children: t }),
        ],
    });
}
function el(e) {
    let { title: t, challenges: l, onClaim: n, badgeText: r } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: K.E6,
                children:
                    l.length > 0
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: K.$b,
                                      children: [
                                          (0, a.jsx)(T.E, {
                                              variant: "text-sm/medium",
                                              color: "text-muted",
                                              children: t,
                                          }),
                                          null != r && (0, a.jsx)(et, { text: r }),
                                      ],
                                  }),
                                  l.map((e, t) =>
                                      (0, a.jsxs)(
                                          s.Fragment,
                                          {
                                              children: [
                                                  t > 0 ? (0, a.jsx)(ee, { className: K.Fu }) : null,
                                                  (0, a.jsx)(q, { ...e, onClaim: n }),
                                              ],
                                          },
                                          e.achievementIdentifier,
                                      ),
                                  ),
                              ],
                          })
                        : (0, a.jsxs)("div", {
                              className: K.AZ,
                              children: [
                                  (0, a.jsx)(T.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: W.intl.string(H.default.xOP5OP),
                                  }),
                                  (0, a.jsx)(T.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: W.intl.string(H.default.XW2CuY),
                                  }),
                              ],
                          }),
            }),
            0 === l.length ? (0, a.jsx)(ee, { isFullWidth: !0 }) : null,
        ],
    });
}
function en(e) {
    let { onQuestsClick: t, onShopClick: l } = e;
    return (0, a.jsxs)("div", {
        className: K.W,
        children: [
            (0, a.jsx)(_.$, {
                text: "Quests",
                variant: "secondary",
                size: "md",
                icon: { asset: M.r, type: "icon" },
                fullWidth: !0,
                onClick: t,
            }),
            (0, a.jsx)(_.$, {
                text: "Shop",
                variant: "secondary",
                size: "md",
                icon: { asset: F.U, type: "icon" },
                fullWidth: !0,
                onClick: l,
            }),
        ],
    });
}
function ea(e) {
    let {
            orbBalance: t,
            headerTagsContent: l,
            renderPrimaryCard: n,
            orbChallengesCard: r,
            orbWalletFooter: i,
            cardRef: c,
        } = e,
        [o, u] = s.useState(!1);
    return (0, a.jsxs)("div", {
        className: R()(K.ql, K.Ut),
        ref: c,
        children: [
            (0, a.jsx)(Z, { orbBalance: t, headerTagsContent: l }),
            o ? null : n({ onClose: () => u(!0) }),
            (0, a.jsx)(ee, { isFullWidth: !0 }),
            r,
            i,
        ],
    });
}
var es = l(408278),
    er = l(789645),
    ei = l(696292),
    ec = l(793574),
    eo = l(839534),
    eu = l(87719),
    ed = l(617986),
    eh = l(758836);
function em() {
    (0, eo.Cz)({ tab: eh.G2.ORBS, analyticsLocations: [], analyticsSource: ec.A.ORBS_BALANCE_MENU });
}
function eC() {
    (0, ed.mA)({ fromContent: ei.u.ORBS_BALANCE_MENU });
}
function ef() {
    return (0, eu.x)();
}
var ex = l(600676);
function eg(e) {
    let {
        title: t,
        imageUrl: l,
        imageAlt: n,
        subTextDescription: s,
        buttonText: r,
        buttonIcon: i,
        buttonVariant: c,
        onCtaClick: o,
        onClose: u,
        className: d,
    } = e;
    return (0, a.jsxs)("div", {
        className: R()(ex.Vm, d),
        children: [
            null != u
                ? (0, a.jsx)("div", {
                      className: ex.Fx,
                      children: (0, a.jsx)(es.K, {
                          icon: er.P,
                          "aria-label": W.intl.string(W.t.cpT0Cq),
                          variant: "icon-only",
                          size: "sm",
                          onClick: u,
                      }),
                  })
                : null,
            null != l && (0, a.jsx)("img", { alt: n, src: l, className: ex.db }),
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(T.E, { variant: "text-md/bold", color: "text-default", className: ex.L8, children: t }),
                    null != s &&
                        (0, a.jsx)(T.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            className: ex.Gd,
                            children: s,
                        }),
                    (0, a.jsx)(_.$, { text: r, size: "sm", icon: i, onClick: o, variant: c }),
                ],
            }),
        ],
    });
}
function eE(e) {
    let { onClose: t } = e;
    return (0, a.jsx)(eg, {
        title: W.intl.string(H.default.o6s7yg),
        imageUrl: l(105644),
        imageAlt: W.intl.string(H.default.qa1xyr),
        subTextDescription: W.intl.string(H.default.HACucK),
        buttonText: W.intl.string(H.default.o6s7yg),
        buttonIcon: { asset: F.U, type: "icon" },
        onCtaClick: em,
        onClose: t,
    });
}
function eb(e) {
    let { onClose: t } = e,
        { orbRewardMultiplier: n } = (0, i.cf)([S], () => ({ orbRewardMultiplier: S.orbRewardMultiplier }));
    return (0, a.jsx)(eg, {
        title: W.intl.string(H.default.ZqCAos),
        imageUrl: l(780361),
        imageAlt: W.intl.string(H.default.FkfrRH),
        subTextDescription: W.intl.format(H.default["Ba/7wO"], { multiplier: n }),
        buttonText: W.intl.string(H.default.U9UQJE),
        buttonIcon: { asset: y.t, type: "icon" },
        buttonVariant: "expressive",
        onCtaClick: ef,
        onClose: t,
        className: ex.ml,
    });
}
var ej = l(202541);
let ev = [
    {
        achievementIdentifier: "challenge_1",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: h.COMPLETED,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 1 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_2",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: h.NONE,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 2 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_3",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: h.NONE,
        orbRewardAmount: 100,
    },
];
async function eN(e) {
    console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3));
}
function eA(e) {
    let { userHasPremium: t, onClose: l, orbBalance: n } = e;
    return t ? (null != n && n >= 1400 ? (0, a.jsx)(eE, { onClose: l }) : null) : (0, a.jsx)(eb, { onClose: l });
}
function ep(e) {
    let { userHasPremium: t, orbBalance: l, hasNoChallenges: n } = e;
    return (0, a.jsx)(ea, {
        orbBalance: l,
        headerTagsContent: t
            ? (0, a.jsx)(X, { text: W.intl.format(H.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: n } = e;
            return eA({ userHasPremium: t, onClose: n, orbBalance: l });
        },
        orbChallengesCard: (0, a.jsx)(el, {
            title: W.intl.string(H.default.H6Ny8N),
            badgeText: W.intl.format(t ? H.default.OHLdjq : H.default.WOMrJf, { multiplier: 1.2 }),
            challenges: n ? [] : ev,
            onClaim: eN,
        }),
        orbWalletFooter: (0, a.jsx)(en, { onQuestsClick: eC, onShopClick: em }),
    });
}
function eS(e) {
    let { userHasPremium: t, orbBalance: l } = e;
    return (0, a.jsx)(ep, { userHasPremium: t, orbBalance: l, hasNoChallenges: !0 });
}
function eL() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, u.F)({ location: "OrbWallet" });
    if (!e || null == t) return null;
    let l = Math.max(1, (0, r.default)(new Date(t.next_reward_date), new Date()));
    return (0, a.jsx)(X, { text: W.intl.format(H.default["04j3XV"], { orbAmount: t.reward_amount, days: l }) });
}
function eR() {
    return null != (0, i.bG)([d.A], () => d.A.getPremiumTypeSubscription()) ? (0, a.jsx)(eL, {}) : null;
}
function e_() {
    let { challengesForOrbWallet: e, hasFetchedChallenges: t } = (function (e) {
            let t = (0, s.useRef)(!1),
                {
                    challengesForOrbWallet: l,
                    hasFetchedChallenges: n,
                    isFetchingChallenges: a,
                    fetchChallengesError: r,
                } = (0, i.cf)([S], () => ({
                    challengesForOrbWallet: S.challengesForOrbWallet,
                    hasFetchedChallenges: S.hasFetchedChallenges,
                    isFetchingChallenges: S.isFetchingChallenges,
                    fetchChallengesError: S.fetchChallengesError,
                })),
                c = null != e && e.shouldFetch;
            return (
                (0, s.useEffect)(() => {
                    !(c && !t.current) ||
                        n ||
                        a ||
                        null != r ||
                        j(function () {
                            t.current = !0;
                        });
                }, [n, a, c, r]),
                { challengesForOrbWallet: l, hasFetchedChallenges: n, isFetchingChallenges: a, refetch: j }
            );
        })({ shouldFetch: !0 }),
        l = (0, o.L)(ej.PremiumTypes.TIER_2),
        { orbRewardMultiplier: n } = (0, i.cf)([S], () => ({ orbRewardMultiplier: S.orbRewardMultiplier }));
    return t
        ? (0, a.jsx)(el, {
              title: W.intl.string(H.default.H6Ny8N),
              challenges: e,
              onClaim: b,
              badgeText: W.intl.format(l ? H.default.OHLdjq : H.default.WOMrJf, { multiplier: n }),
          })
        : null;
}
function eO(e) {
    let { cardRef: t } = e,
        { balance: l } = (0, C.W)(),
        n = (0, m.H)({ location: "StatefulOrbWallet" }),
        s = (0, o.L)(ej.PremiumTypes.TIER_2);
    return n
        ? (0, a.jsx)(ea, {
              cardRef: t,
              orbBalance: l,
              headerTagsContent: (0, a.jsx)(eR, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return eA({ userHasPremium: s, onClose: t, orbBalance: l });
              },
              orbChallengesCard: (0, a.jsx)(e_, {}),
              orbWalletFooter: (0, a.jsx)(en, { onQuestsClick: eC, onShopClick: em }),
          })
        : null;
}
function ey(e) {
    let { cardRef: t, targetElementRef: l, shouldShow: n } = e,
        r = s.useCallback(() => (0, a.jsx)(eO, { cardRef: t }), [t]);
    return (0, a.jsx)(c.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: r,
        position: "bottom",
        align: "right",
        shouldShow: n,
        animation: c.Y.Animation.NONE,
        targetElementRef: l,
        children: () => null,
    });
}
