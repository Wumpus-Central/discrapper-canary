l.d(t, { FT: () => eb, EA: () => eR, vG: () => eS });
var n,
    a = l(477900),
    s = l(582128),
    r = l(536637),
    i = l.n(r),
    c = l(17928),
    o = l(939249),
    u = l(403581),
    d = l(661531),
    h = l(834730),
    m = l(922016),
    C = l(531260),
    x = l(87719),
    g = l(166403),
    f = l(158045),
    E =
        (((n = {})[(n.NONE = 0)] = "NONE"),
        (n[(n.IN_PROGRESS = 1)] = "IN_PROGRESS"),
        (n[(n.COMPLETED = 2)] = "COMPLETED"),
        (n[(n.CLAIMED = 3)] = "CLAIMED"),
        (n[(n.INELIGIBLE = 4)] = "INELIGIBLE"),
        (n[(n.ELIGIBLE = 5)] = "ELIGIBLE"),
        n),
    j = l(362862),
    b = l(761705),
    N = l(636537),
    v = l(228366),
    A = l(913122),
    p = l(652215);
async function S(e) {
    v.h.wait(() => {
        v.h.dispatch({ type: "ORB_CHALLENGE_CLAIM", achievementIdentifier: e });
    });
    try {
        let t = await N.Bo.post({ url: p.Rsh.ORB_USER_CHALLENGE_CLAIM(e), rejectWithError: !1 });
        return (
            v.h.dispatch({ type: "ORB_CHALLENGE_CLAIM_SUCCESS", achievementIdentifier: e, response: t.body }), t.body
        );
    } catch (l) {
        let t = l instanceof A.LG ? l : new A.LG(l);
        v.h.dispatch({ type: "ORB_CHALLENGE_CLAIM_FAIL", achievementIdentifier: e, error: t });
    }
}
async function R(e) {
    v.h.wait(() => {
        v.h.dispatch({ type: "ORB_CHALLENGES_LIST_FETCH" });
    });
    try {
        let t = await N.Bo.get({ url: p.Rsh.ORB_USER_CHALLENGES_LIST, rejectWithError: !1 });
        return (
            v.h.dispatch({ type: "ORB_CHALLENGES_LIST_FETCH_SUCCESS", response: t.body }),
            null != e && e(t.body),
            t.body
        );
    } catch (t) {
        let e = t instanceof A.LG ? t : new A.LG(t);
        v.h.dispatch({ type: "ORB_CHALLENGES_LIST_FETCH_FAIL", error: e });
    }
}
function L(e) {
    return {
        achievementIdentifier: e.achievement_identifier,
        title: e.title,
        orbRewardAmount: e.reward_amount,
        achievementStatus: e.status,
    };
}
let _ = new Set([null, E.NONE, E.IN_PROGRESS, E.ELIGIBLE, E.COMPLETED]);
function O() {
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
class y extends c.Ay.Store {
    static displayName = "OrbChallengesStore";
    state = O();
    constructor() {
        super(v.h, {
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
        this.state = O();
    }
    handleOrbChallengesFetchStart(e) {
        let {} = e;
        (this.state.isFetchingChallenges = !0), (this.state.fetchChallengesError = null);
    }
    handleOrbChallengesFetchSuccess(e) {
        let { response: t } = e;
        (this.state.challenges = t.achievements.map(L)),
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
            (this.state.challenges = this.state.challenges.map((e) => (e.achievementIdentifier === t ? L(l) : e)));
    }
    handleOrbChallengeClaimFail(e) {
        let { achievementIdentifier: t, error: l } = e;
        (this.state.isClaimingChallengeMap[t] = !1), (this.state.claimChallengeErrorMap[t] = l);
    }
    handleUserAchievementStateUpdate(e) {
        let { payload: t } = e;
        return "achievement_completed" === t.type && R(), !1;
    }
    get orbRewardMultiplier() {
        return this.state.orbRewardMultiplier;
    }
    get challenges() {
        return this.state.challenges;
    }
    get challengesForOrbWallet() {
        return this.state.challenges.filter((e) => _.has(e.achievementStatus));
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
let T = new y();
var k = l(503698),
    M = l.n(k),
    F = l(821609),
    I = l(404778),
    D = l(577473),
    w = l(34188),
    B = l(303136),
    P = l(626031),
    G = l(628284),
    U = l(320448),
    H = l(742967),
    W = l(642529),
    z = l(375708),
    $ = l(137484),
    V = l(427483);
function K(e) {
    let { achievementStatus: t, animationState: l = "off" } = e,
        n = t === E.COMPLETED || t === E.CLAIMED,
        s = (0, a.jsx)("div", {
            className: M()($.TK, { [$.AM]: n }),
            children: (0, a.jsx)(H.x, {
                className: $.t9,
                staticAsset:
                    "https://cdn.discordapp.com/assets/content/c25ca35dc2175b9ce33ad5bd427fb4c458cbb6cc6e8b01e592e70dd7472bfa0d.png",
                webmAsset: V.A,
                animationState: l,
                assetAltText: "",
            }),
        });
    return n ? (0, a.jsx)("div", { className: $.Zs, children: s }) : s;
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
        [u, m] = s.useState(!1),
        [C, x] = s.useState(!1);
    async function g() {
        null != i && (x(!0), await i(t).finally(() => x(!1)));
    }
    let f = null != c && r === E.NONE,
        j = M()($.of, { [$.D8]: u, [$.or]: f }),
        b = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: $.Ub,
                    children: [
                        (0, a.jsx)(K, { achievementStatus: r, animationState: u ? "on" : "off" }),
                        (0, a.jsxs)("div", {
                            className: $.Du,
                            children: [
                                (0, a.jsx)(h.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                                (0, a.jsx)(h.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: z.intl.format(r === E.COMPLETED ? W.default.mOsACs : W.default.aBVuHF, {
                                        orbAmount: n,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (function (e, t) {
                    let { isHovered: l, isClaiming: n, handleClaim: s, hasDiscoveryClick: r } = t,
                        i = (0, a.jsx)(F.$, {
                            variant: "expressive",
                            size: "md",
                            text: z.intl.string(W.default.WmfVjs),
                            loading: n,
                            onClick: s,
                        });
                    return n
                        ? i
                        : e === E.COMPLETED
                          ? l
                              ? i
                              : (0, a.jsx)(G.y, {
                                    color: d.A.colors.STATUS_POSITIVE,
                                    size: "sm",
                                    "aria-label": z.intl.string(W.default.k6h2J3),
                                })
                          : r
                            ? (0, a.jsx)(U._, { size: "sm", "aria-hidden": !0 })
                            : null;
                })(r, { isHovered: u, isClaiming: C, handleClaim: g, hasDiscoveryClick: f }),
            ],
        }),
        N = s.useMemo(() => ({ onMouseEnter: () => m(!0), onMouseLeave: () => m(!1) }), []);
    return f
        ? (0, a.jsx)(o.D, { className: j, ...N, onClick: c, "aria-label": l, children: b })
        : (0, a.jsx)("div", { className: j, ...N, children: b });
}
var Q = l(653877),
    J = l(268920),
    X = l(633217);
function Y() {
    return (0, a.jsx)("div", {
        className: Q.s,
        children: (0, a.jsx)(B.A, { src: X.A, fallbackImage: J.A, className: Q.Cb }),
    });
}
function Z(e) {
    let { nitroMultiplier: t, nitroRenewalDate: l } = e,
        n = null != l ? -1 * i()().diff(l, "days") : null;
    return (0, a.jsxs)("div", {
        className: Q.mT,
        children: [
            null != t &&
                1 !== t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)("div", {
                            className: Q.lh,
                            children: [
                                (0, a.jsx)(u.t, { size: "xxs", color: "white" }),
                                (0, a.jsxs)(h.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-overlay-light",
                                    children: [t, "x"],
                                }),
                            ],
                        }),
                        (0, a.jsx)("span", {
                            "aria-hidden": "true",
                            children: (0, a.jsx)(h.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: "\u2219",
                            }),
                        }),
                    ],
                }),
            (0, a.jsx)(h.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: z.intl.format(W.default["+kdkTi"], { days: n }),
            }),
        ],
    });
}
function ee(e) {
    let { orbBalance: t, headerTagsContent: l } = e;
    return (0, a.jsxs)("div", {
        className: Q.SZ,
        children: [
            (0, a.jsx)(Y, {}),
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(P.t, {
                        value: t,
                        onValueChange: p.tEg,
                        onValueReached: p.tEg,
                        targetTotalCounterTime: 1500,
                        className: Q.xc,
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
function et(e) {
    let { isFullWidth: t = !1, className: l } = e;
    return (0, a.jsx)(I.c, { className: M()(Q.ts, { [Q.KU]: t }, l) });
}
function el(e) {
    let { title: t, challenges: l, onClaim: n } = e;
    return (0, a.jsxs)("div", {
        className: Q.E6,
        children: [
            (0, a.jsx)(h.E, { variant: "text-sm/semibold", color: "text-muted", className: Q.zu, children: t }),
            l.map((e, t) =>
                (0, a.jsxs)(
                    s.Fragment,
                    {
                        children: [
                            t > 0 ? (0, a.jsx)(et, { className: Q.Fu }) : null,
                            (0, a.jsx)(q, { ...e, onClaim: n }),
                        ],
                    },
                    e.achievementIdentifier,
                ),
            ),
        ],
    });
}
function en(e) {
    let { onQuestsClick: t, onShopClick: l } = e;
    return (0, a.jsxs)("div", {
        className: Q.W,
        children: [
            (0, a.jsx)(F.$, {
                text: "Quests",
                variant: "secondary",
                size: "md",
                icon: { asset: D.r, type: "icon" },
                fullWidth: !0,
                onClick: t,
            }),
            (0, a.jsx)(F.$, {
                text: "Shop",
                variant: "secondary",
                size: "md",
                icon: { asset: w.U, type: "icon" },
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
        className: M()(Q.ql, Q.Ut),
        ref: c,
        children: [
            (0, a.jsx)(ee, { orbBalance: t, headerTagsContent: l }),
            o ? null : n({ onClose: () => u(!0) }),
            (0, a.jsx)(et, { isFullWidth: !0 }),
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
    eu = l(617986),
    ed = l(758836);
function eh() {
    (0, eo.Cz)({ tab: ed.G2.ORBS, analyticsLocations: [], analyticsSource: ec.A.ORBS_BALANCE_MENU });
}
function em() {
    (0, eu.mA)({ fromContent: ei.u.ORBS_BALANCE_MENU });
}
var eC = l(600676);
function ex(e) {
    let {
        title: t,
        imageUrl: l,
        imageAlt: n,
        subTextDescription: s,
        buttonText: r,
        buttonIcon: i,
        onCtaClick: c,
        onClose: o,
    } = e;
    return (0, a.jsxs)("div", {
        className: eC.Vm,
        children: [
            null != o
                ? (0, a.jsx)("div", {
                      className: eC.Fx,
                      children: (0, a.jsx)(es.K, {
                          icon: er.P,
                          "aria-label": z.intl.string(z.t.cpT0Cq),
                          variant: "icon-only",
                          size: "sm",
                          onClick: o,
                      }),
                  })
                : null,
            null != l && (0, a.jsx)("img", { alt: n, src: l, className: eC.db }),
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(h.E, { variant: "text-md/bold", color: "text-default", className: eC.L8, children: t }),
                    null != s &&
                        (0, a.jsx)(h.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            className: eC.Gd,
                            children: s,
                        }),
                    (0, a.jsx)(F.$, { text: r, size: "sm", icon: i, onClick: c }),
                ],
            }),
        ],
    });
}
function eg(e) {
    let { onClose: t } = e;
    return (0, a.jsx)(ex, {
        title: z.intl.string(W.default.o6s7yg),
        imageUrl: l(105644),
        imageAlt: z.intl.string(W.default.qa1xyr),
        subTextDescription: z.intl.string(W.default.HACucK),
        buttonText: z.intl.string(W.default.o6s7yg),
        buttonIcon: { asset: w.U, type: "icon" },
        onCtaClick: eh,
        onClose: t,
    });
}
var ef = l(123576);
let eE = [
    {
        achievementIdentifier: "challenge_1",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: E.COMPLETED,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 1 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_2",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: E.NONE,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 2 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_3",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: E.NONE,
        orbRewardAmount: 100,
    },
];
async function ej(e) {
    console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3));
}
function eb(e) {
    let { userHasPremium: t, orbBalance: l } = e;
    return (0, a.jsx)(ea, {
        orbBalance: l,
        headerTagsContent: t
            ? (0, a.jsx)(Z, { nitroMultiplier: 1.2, nitroRenewalDate: i()().add(16, "day").toDate() })
            : (0, a.jsx)(ev, {}),
        renderPrimaryCard: (e) => {
            let { onClose: t } = e;
            return (0, a.jsx)(eg, { onClose: t });
        },
        orbChallengesCard: (0, a.jsx)(el, { title: z.intl.string(W.default.H6Ny8N), challenges: eE, onClaim: ej }),
        orbWalletFooter: (0, a.jsx)(en, { onQuestsClick: em, onShopClick: eh }),
    });
}
function eN() {
    return (0, x.x)();
}
function ev() {
    return (0, a.jsxs)(o.D, {
        className: ef.X,
        onClick: eN,
        children: [
            (0, a.jsx)(u.t, { size: "xxs", color: d.A.colors.TEXT_BRAND }),
            (0, a.jsx)(h.E, {
                variant: "text-xs/medium",
                color: "text-brand",
                children: z.intl.string(W.default["pJz0/A"]),
            }),
        ],
    });
}
function eA() {
    let e = (0, c.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
        t = (0, C.A)(),
        { orbRewardMultiplier: l } = (0, c.cf)([T], () => ({ orbRewardMultiplier: T.orbRewardMultiplier }));
    if (null != e) {
        let n = (0, f.fj)(e, t);
        return (0, a.jsx)(Z, { nitroMultiplier: l, nitroRenewalDate: n });
    }
    return (0, a.jsx)(ev, {});
}
function ep() {
    let { challengesForOrbWallet: e, hasFetchedChallenges: t } = (function (e) {
        let t = (0, s.useRef)(!1),
            {
                challengesForOrbWallet: l,
                hasFetchedChallenges: n,
                isFetchingChallenges: a,
                fetchChallengesError: r,
            } = (0, c.cf)([T], () => ({
                challengesForOrbWallet: T.challengesForOrbWallet,
                hasFetchedChallenges: T.hasFetchedChallenges,
                isFetchingChallenges: T.isFetchingChallenges,
                fetchChallengesError: T.fetchChallengesError,
            })),
            i = null != e && e.shouldFetch;
        return (
            (0, s.useEffect)(() => {
                !(i && !t.current) ||
                    n ||
                    a ||
                    null != r ||
                    R(function () {
                        t.current = !0;
                    });
            }, [n, a, i, r]),
            { challengesForOrbWallet: l, hasFetchedChallenges: n, isFetchingChallenges: a, refetch: R }
        );
    })({ shouldFetch: !0 });
    return t ? (0, a.jsx)(el, { title: z.intl.string(W.default.H6Ny8N), challenges: e, onClaim: S }) : null;
}
function eS(e) {
    let { cardRef: t } = e,
        { balance: l } = (0, b.W)();
    return (0, j.H)({ location: "StatefulOrbWallet" })
        ? (0, a.jsx)(ea, {
              cardRef: t,
              orbBalance: l,
              headerTagsContent: (0, a.jsx)(eA, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return (0, a.jsx)(eg, { onClose: t });
              },
              orbChallengesCard: (0, a.jsx)(ep, {}),
              orbWalletFooter: (0, a.jsx)(en, { onQuestsClick: em, onShopClick: eh }),
          })
        : null;
}
function eR(e) {
    let { cardRef: t, targetElementRef: l, shouldShow: n } = e,
        r = s.useCallback(() => (0, a.jsx)(eS, { cardRef: t }), [t]);
    return (0, a.jsx)(m.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: r,
        position: "bottom",
        align: "right",
        shouldShow: n,
        animation: m.Y.Animation.NONE,
        targetElementRef: l,
        children: () => null,
    });
}
