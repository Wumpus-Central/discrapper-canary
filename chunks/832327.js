n.r(t), n.d(t, { default: () => io }), n(321073);
var i,
    s,
    l = n(627968),
    a = n(64700),
    r = n(922139),
    o = n(942381),
    d = n(17928),
    u = n(554146),
    c = n(451988),
    A = n(43105),
    E = n(900797),
    h = n(847374),
    g = n(922016),
    I = n(192308),
    _ = n(228366),
    N = n(442433),
    m = n(475743),
    C = n(793574),
    S = n(688810),
    T = n(285059),
    p = n(63995);
n(113783);
var M = n(518769),
    O = n(446600),
    L = n(624265);
n(616356);
var f = n(734057),
    R = n(576705),
    x = n(607567),
    G = n(988794);
let U = { hiddenEventsAndStages: [] };
class D extends d.Ay.PersistedStore {
    static displayName = "LiveChannelNoticesStore";
    static persistKey = "liveChannelNotices_v2";
    initialize(e) {
        null != e && null != e.hiddenEventsAndStages && (U = e);
    }
    isLiveChannelNoticeHidden(e) {
        let { eventId: t, stageId: n } = e;
        return (
            !!(null != n && U.hiddenEventsAndStages.includes(`stage-${n}`)) ||
            (null != t && U.hiddenEventsAndStages.includes(`event-${t}`))
        );
    }
    getState() {
        return U;
    }
}
let b = new D(_.h, {
    LIVE_CHANNEL_NOTICE_HIDE: function (e) {
        let { eventId: t, stageId: n } = e;
        null != t
            ? U.hiddenEventsAndStages.push(`event-${t}`)
            : null != n && U.hiddenEventsAndStages.push(`stage-${n}`);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = `event-${t.id}`;
        U.hiddenEventsAndStages.includes(n) &&
            (t.status === G.XG.CANCELED || t.status === G.XG.COMPLETED) &&
            (U.hiddenEventsAndStages = U.hiddenEventsAndStages.filter((e) => e !== n));
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = `event-${t.id}`;
        U.hiddenEventsAndStages.includes(n) &&
            (U.hiddenEventsAndStages = U.hiddenEventsAndStages.filter((e) => e !== n));
    },
    STAGE_INSTANCE_DELETE: function (e) {
        let { instance: t } = e,
            n = `stage-${t.id}`;
        U.hiddenEventsAndStages.includes(n) &&
            (U.hiddenEventsAndStages = U.hiddenEventsAndStages.filter((e) => e !== n));
    },
});
var y = n(508654);
n(818348);
var P = n(600975),
    v = n(652215);
let H = (0, P.C)({
        kind: "guild",
        id: "2021-10_study_group",
        label: "Student hub study group",
        defaultConfig: { enableStudyGroup: !1 },
        treatments: [{ id: 1, label: "Enables study group sidebar", config: { enableStudyGroup: !0 } }],
    }),
    j = (e) => (
        a.useEffect(() => {
            null != e &&
                e.features.has(v.GuildFeatures.HUB) &&
                H.trackExposure({ guildId: e.id, location: "467c32_1" });
        }, [e]),
        H.useExperiment(
            { guildId: e?.id ?? v.dJq, location: "467c32_2" },
            { autoTrackExposure: !1, disable: null == e || !e.features.has(v.GuildFeatures.HUB) },
        )
    );
var B = n(320426),
    w = n(915043),
    k = n(506774),
    X = n(498642),
    V = n(71393),
    F = n(124759);
let K = "publicUpsellChannelNoticeGuilds",
    W = new Set();
class Y extends d.Ay.Store {
    static displayName = "EnablePublicGuildUpsellNoticeStore";
    initialize() {
        this.waitFor(R.A, V.A, X.A), this.syncWith([R.A, V.A, X.A], v.tEg), (W = new Set(k.w.get(K)) ?? new Set());
    }
    isVisible(e) {
        if (null == e) return;
        let t = X.A.getMemberCount(e.id);
        return (
            !W.has(e.id) &&
            null != t &&
            t >= F.dH &&
            R.A.can(v.xBc.ADMINISTRATOR, e) &&
            !e.features.has(v.GuildFeatures.COMMUNITY)
        );
    }
}
let z = new Y(_.h, {
    PUBLIC_UPSELL_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!W.has(t)) return W.add(t), k.w.set(K, W), !0;
    },
});
var Z = n(992250);
let Q = { MAX_MEMBER_COUNT: new Set() };
class q extends d.Ay.Store {
    static displayName = "MaxMemberCountChannelNoticeStore";
    initialize() {
        this.waitFor(R.A, V.A, X.A),
            this.syncWith([R.A, V.A, X.A], v.tEg),
            k.w.remove(v.n5X.MAX_MEMBER_COUNT_100),
            k.w.remove(v.n5X.MAX_MEMBER_COUNT_250),
            (Q[v.n5X.MAX_MEMBER_COUNT] = new Set(k.w.get(v.n5X.MAX_MEMBER_COUNT)) ?? new Set());
    }
    isVisible(e) {
        if (null == e) return !1;
        let t = X.A.getMemberCount(e.id) ?? 0,
            n = R.A.can(v.xBc.ADMINISTRATOR, e);
        return !Q[v.n5X.MAX_MEMBER_COUNT].has(e.id) && n && e.maxMembers > 0 && e.maxMembers - t <= 1e4;
    }
}
let $ = new q(_.h, {
    MAX_MEMBER_COUNT_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!Q[v.n5X.MAX_MEMBER_COUNT].has(t))
            return Q[v.n5X.MAX_MEMBER_COUNT].add(t), k.w.set(v.n5X.MAX_MEMBER_COUNT, Q[v.n5X.MAX_MEMBER_COUNT]), !0;
    },
});
var J =
    (((i = {})[(i.ENABLE_PUBLIC_GUILD = 0)] = "ENABLE_PUBLIC_GUILD"),
    (i[(i.MAX_MEMBER_COUNT = 1)] = "MAX_MEMBER_COUNT"),
    (i[(i.GUILD_LIVE_CHANNEL = 2)] = "GUILD_LIVE_CHANNEL"),
    (i[(i.GUILD_MFA_WARNING = 3)] = "GUILD_MFA_WARNING"),
    (i[(i.COMMANDS_MIGRATION = 4)] = "COMMANDS_MIGRATION"),
    (i[(i.APPLICATION_SUBSCRIPTION_EXPIRATION = 5)] = "APPLICATION_SUBSCRIPTION_EXPIRATION"),
    (i[(i.HUB_STUDY_ROOM = 6)] = "HUB_STUDY_ROOM"),
    (i[(i.CLAN_UPSELL = 7)] = "CLAN_UPSELL"),
    i);
function ee(e) {
    let t = e?.id ?? v.dJq,
        n = (0, d.bG)([z], () => z.isVisible(e)),
        i = (0, d.bG)([$], () => $.isVisible(e)),
        s = (function (e) {
            let t = (0, L.Ay)(e),
                n = f.A.getChannel(t[0]?.id),
                i = (0, d.bG)([O.A], () => O.A.getStageInstanceByChannel(n?.id), [n]),
                s = (0, y.BP)(e),
                { isStageNoticeHidden: l, isEventNoticeHidden: a } = (0, d.cf)(
                    [b],
                    () => ({
                        isStageNoticeHidden: b.isLiveChannelNoticeHidden({ stageId: i?.id }),
                        isEventNoticeHidden: b.isLiveChannelNoticeHidden({ eventId: s?.id }),
                    }),
                    [i, s],
                );
            if (null != s)
                if (null != i) return !l;
                else return !a;
            return null != i && !l;
        })(t),
        l = (0, d.bG)([Z.A], () => Z.A.isVisible(e)),
        r = B.A.useShouldShowChannelNotice(t),
        o = (0, w.$s)(e),
        { enableStudyGroup: u } = j(e),
        c = o.length > 0,
        A = u && !e?.features.has(v.GuildFeatures.HUB),
        E = (0, y.WG)(t);
    if (
        (a.useEffect(() => {
            T.A.getGuildEventsForCurrentUser(t);
        }, [t]),
        n)
    )
        return 0;
    if (i) return 1;
    if (s || null != E) return 2;
    if (l) return 3;
    if (r) return 4;
    else if (c) return 5;
    else if (A) return 6;
    return null;
}
var et = n(558845),
    en = n(826673),
    ei = n(131607),
    es = n(313281),
    el = n(5180),
    ea = n(250719),
    er = n(3026),
    eo = n(72152),
    ed = n(15073),
    eu = n(174459),
    ec = n(488926),
    eA = n(45780),
    eE = n(49999),
    eh = n(567305),
    eg = n(555325),
    eI = n(469993),
    e_ = n(260509),
    eN = n(287809),
    em = n(568185);
let eC = "hasSeenGuildTemplatePromotionTooltip",
    eS = {},
    eT = !0 === k.w.get(eC);
function ep(e) {
    let { guildId: t } = e;
    eS = { ...eS, [t]: !1 };
}
class eM extends d.Ay.Store {
    static displayName = "GuildTemplateTooltipStore";
    shouldShowGuildTemplateDirtyTooltip(e) {
        return eS[e] ?? !1;
    }
    shouldShowGuildTemplatePromotionTooltip() {
        return !eT;
    }
}
let eO = new eM(_.h, {
    GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH: function (e) {
        let { guildTemplate: t } = e;
        eS = { ...eS, [t.source_guild_id]: t.is_dirty || !1 };
    },
    GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE: function () {
        k.w.set(eC, !0), (eT = !0);
    },
    GUILD_TEMPLATE_SYNC_SUCCESS: function (e) {
        eS = { ...eS, [e.guildTemplate.source_guild_id]: !1 };
    },
    GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE: ep,
    GUILD_TEMPLATE_DELETE_SUCCESS: ep,
});
var eL = n(875317),
    ef = n(181880),
    eR = n(285406),
    ex = n(663066),
    eG = n(488803),
    eU = n(764322),
    eD = n(661881),
    eb = n(379229),
    ey = n(229548),
    eP = n(139032),
    ev = n(52260),
    eH = n(363487),
    ej = n(342220),
    eB = n(320989),
    ew = n(728321),
    ek = n(79858),
    eX = n(72314),
    eV = n(919638),
    eF = n(808728),
    eK = n(186111),
    eW = n(584569),
    eY = n(763827),
    ez = n(428262),
    eZ = n(885631),
    eQ = n(156867),
    eq = n(83297),
    e$ = n(562708),
    eJ = n(702841),
    e0 = n(139286),
    e1 = n(468689),
    e3 = n(375708),
    e6 = n(330766);
function e8(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e,
        s = (0, eJ.bG)([V.A, eN.default], () => {
            let e = eN.default.getCurrentUser(),
                n = V.A.getGuild(t);
            return null != n && (0, e_.bM)(n, e);
        });
    return (
        (0, e0.A)({
            type: e$.ImpressionTypes.POPOUT,
            name: e$.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
            properties: { guild_id: t, is_owner: s },
        }),
        (0, l.jsx)(A.A, {
            targetElementRef: i,
            title: e3.intl.string(e3.t.C0m4rQ),
            body: e3.intl.string(e3.t.zOHfEX),
            graphic: { type: "image", src: e6 },
            actions: [
                {
                    text: e3.intl.string(e3.t.OgQQbG),
                    variant: "primary",
                    onClick: () => {
                        e1.A.open(t, v.BEX.ROLE_SUBSCRIPTIONS);
                    },
                },
            ],
            onRequestClose: () => n(eE.i.USER_DISMISS),
            position: "bottom",
            caretConfig: { align: "center" },
        })
    );
}
var e2 = n(338854);
function e7(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, l.jsx)(e2.H, {
        targetElementRef: i,
        title: e3.intl.string(e3.t.gCgirr),
        body: e3.intl.string(e3.t.fLMZFw),
        assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
        action: {
            text: e3.intl.string(e3.t.BQq86h),
            variant: "primary",
            onClick: () => {
                e1.A.open(t, v.BEX.ROLE_SUBSCRIPTIONS, void 0, v.nd0.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
            },
        },
        onRequestClose: () => n(eE.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
var e4 = n(834730),
    e5 = n(821609),
    e9 = n(383470);
function te(e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsxs)("div", {
        className: e9.kL,
        children: [
            (0, l.jsx)("div", { className: e9.Wn }),
            (0, l.jsx)(e4.E, { variant: "text-sm/normal", className: e9.Qs, children: e3.intl.string(e3.t.rdzeVP) }),
            (0, l.jsx)(e5.$, {
                variant: "overlay-primary",
                text: e3.intl.string(e3.t["NX+WJN"]),
                fullWidth: !0,
                onClick: () => {
                    t(eE.i.AUTO);
                },
            }),
        ],
    });
}
var tt = n(696943);
function tn(e) {
    let { guild: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, l.jsx)(A.A, {
        targetElementRef: i,
        title: e3.intl.string(e3.t.Hgd22r),
        body: e3.intl.string(e3.t.SorTPA),
        graphic: { type: "image", src: "/assets/d611c6cf03ca4eff.svg" },
        actions: [
            {
                text: e3.intl.string(e3.t["9l+df7"]),
                variant: "primary",
                onClick: (e) => {
                    e1.A.open(t.id, v.BEX.DISCOVERY_LANDING_PAGE);
                },
            },
        ],
        onRequestClose: () => n(eE.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
function ti(e) {
    let { renderPopout: t, renderGuildHeaderDropdownButton: n } = e,
        i = a.useRef(null);
    return (0, l.jsx)(g.Y, {
        targetElementRef: i,
        renderPopout: () =>
            (0, l.jsx)("div", { onClick: (e) => e.stopPropagation(), children: "function" == typeof t ? t(i) : t }),
        position: "bottom",
        align: "center",
        animation: g.Y.Animation.TRANSLATE,
        shouldShow: !0,
        children: () => (0, l.jsx)("div", { ref: i, children: n() }),
    });
}
let ts = a.memo(function (e) {
    let { contentDescriptor: t, guild: n, renderGuildHeaderDropdownButton: i } = e,
        { contentType: s, data: a, markAsDismissed: r } = t,
        o = { position: "bottom", align: "center", caretConfig: { align: "center" } };
    return (0, l.jsx)(l.Fragment, {
        children: (() => {
            switch (s) {
                case u.M.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, l.jsx)(ti, {
                        renderPopout: (e) =>
                            (0, l.jsx)(tt.UB, { guildId: n.id, markAsDismissed: r, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_NEW_GAMES_COACHMARK:
                    return (0, l.jsx)(ti, {
                        renderPopout: (e) =>
                            (0, l.jsx)(tt.YX, { guildId: n.id, markAsDismissed: r, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_PRICING_CHANGE_COACHMARK:
                    return (0, l.jsx)(ti, {
                        renderPopout: (e) =>
                            (0, l.jsx)(tt.Ns, { guildId: n.id, markAsDismissed: r, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK:
                    return (0, l.jsx)(ti, {
                        renderPopout: (e) => (0, l.jsx)(tt.K8, { guildId: n.id, markAsDismissed: r, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.BOOST_TO_UNLOCK_COACHMARK: {
                    let e = a?.featuredPowerup;
                    if (null == e) return i();
                    return (0, l.jsx)(ti, {
                        renderPopout: (t) =>
                            (0, l.jsx)(tt.Gw, {
                                type: eb.o.BOOST_TO_UNLOCK,
                                guildId: n.id,
                                powerup: e,
                                markAsDismissed: r,
                                channelRowRef: t,
                                ...o,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                }
                case u.M.EXPIRING_POWERUP_COACHMARK: {
                    let e = a?.featuredExpiringPowerup;
                    if (null == e) return i();
                    return (0, l.jsx)(ti, {
                        renderPopout: (t) =>
                            (0, l.jsx)(tt.Mr, {
                                type: eb.o.EXPIRING_PERK,
                                guildId: n.id,
                                featuredExpiringPowerup: e,
                                markAsDismissed: r,
                                channelRowRef: t,
                                ...o,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                }
                case u.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                    return (0, l.jsx)(ti, {
                        renderPopout: (e) => (0, l.jsx)(e8, { guildId: n.id, markAsDismissed: r, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, l.jsx)(ti, {
                        renderPopout: (e) => (0, l.jsx)(tn, { guild: n, markAsDismissed: r, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, l.jsx)(ti, {
                        renderPopout: (0, l.jsx)(te, { markAsDismissed: r }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, l.jsx)(ti, {
                        renderPopout: (e) => (0, l.jsx)(e7, { guildId: n.id, markAsDismissed: r, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                default:
                    return i();
            }
        })(),
    });
});
var tl = n(735438),
    ta = n.n(tl),
    tr = n(862482),
    to = n(939249),
    td = n(789645),
    tu = n(534514),
    tc = n(95561),
    tA = n(284245);
let tE = ta().debounce(tc.Ay.trackWithMetadata, 500),
    th = (e) => {
        let {
            guild: t,
            title: n,
            message: i,
            image: s,
            type: r,
            imageMarginX: o,
            imageMarginTop: d,
            trackingSource: u,
            undismissable: c,
            onDismissed: A,
            onClick: E,
            cta: h,
            ctaColor: g,
        } = e;
        a.useEffect(() => {
            tE(v.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: r, guild_id: t.id });
        }, [t.id, r]);
        let I = null;
        "function" == typeof h
            ? (I = h())
            : null != h &&
              (I = (0, l.jsx)(tr.$n, {
                  "data-migration-pending": !0,
                  className: tA.HM,
                  size: tr.$n.Sizes.SMALL,
                  onClick: () => {
                      null != r &&
                          eu.default.track(v.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: u,
                              guild_id: t.id,
                              notice_type: r,
                          }),
                          E?.();
                  },
                  fullWidth: !0,
                  color: g,
                  children: h,
              }));
        let _ = null != o ? `${o}px` : "16px";
        return (0, l.jsxs)("div", {
            className: tA.kX,
            children: [
                !0 === c
                    ? null
                    : (0, l.jsx)(to.D, {
                          onClick: () => {
                              tc.Ay.trackWithMetadata(v.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: r }), A?.();
                          },
                          className: tA.VN,
                          "aria-label": e3.intl.string(e3.t.WAI6xu),
                          children: (0, l.jsx)(td.P, { size: "md", color: "currentColor", className: tA.ut }),
                      }),
                null != s &&
                    (0, l.jsx)("div", {
                        className: tA.ZS,
                        style: { marginTop: `${d}px`, marginLeft: _, marginRight: _ },
                        children: "string" == typeof s ? (0, l.jsx)("img", { className: tA.Sl, src: s, alt: "" }) : s,
                    }),
                (0, l.jsxs)("div", {
                    className: tA.iU,
                    children: [
                        null != n
                            ? (0, l.jsx)(tu.D, { variant: "heading-md/semibold", className: tA.DD, children: n })
                            : null,
                        (0, l.jsx)(e4.E, { variant: "text-sm/normal", children: i }),
                        I,
                    ],
                }),
            ],
        });
    };
var tg = n(975571);
function tI(e) {
    let { guild: t, markAsDismissed: n } = e;
    return (0, l.jsx)(th, {
        image: "/assets/061504eb3d226883.png",
        guild: t,
        onDismissed: () => n(eE.i.UNKNOWN),
        onClick: () => {
            open(tg.A.getArticleURL(v.MVz.CONNECTION_DETAILS)), n(eE.i.UNKNOWN);
        },
        title: e3.intl.string(e3.t.YMgaJt),
        message: e3.intl.string(e3.t["AV/9eW"]),
        cta: e3.intl.string(e3.t.hvVgAZ),
        trackingSource: v.kZU.LINKED_ROLES_ADMIN_NUX,
        type: v.n5X.LINKED_ROLES_ADMIN,
    });
}
var t_ = n(158390),
    tN = n(636537),
    tm = n(927813);
let tC = null;
class tS extends d.Ay.Store {
    static displayName = "UnclaimedGamesStore";
    getMap() {
        return tC;
    }
    getUnclaimedGameIdsForGuild(e) {
        return tC?.[e] ?? [];
    }
    hasUnclaimedGames(e) {
        let t = tC?.[e];
        return null != t && t.length > 0;
    }
    getGuildIdsWithUnclaimedGames() {
        if (null == tC) return [];
        let e = tC;
        return Object.keys(e).filter((t) => (e[t] ?? []).length > 0);
    }
}
let tT = new tS(_.h, {
        LOGOUT: function () {
            tC = null;
        },
        UNCLAIMED_GAMES_FETCH_SUCCESS: function (e) {
            let { guildIdToGameIds: t } = e;
            tC = t;
        },
    }),
    tp = [];
async function tM() {
    let { body: e } = await tN.Bo.get({ url: v.Rsh.UNCLAIMED_GAMES, oldFormErrors: !0, rejectWithError: !1 });
    _.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH_SUCCESS", guildIdToGameIds: e });
}
let tO = (0, d.UT)(tT, {
    getQueryId: (e) => (e ? "unclaimed-games" : null),
    get: () => tT.getMap(),
    load: () => tM(),
    staleAfter: tm.A.Seconds.DAY,
    retryConfig: { backoff: () => new t_.A(5 * tm.A.Millis.MINUTE), maxRetries: 10 },
});
function tL(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { data: n } = tO(t);
    return n?.[e] ?? tp;
}
let tf = (0, P.C)({
    kind: "guild",
    id: "2026-02_game_claim_coachmark",
    label: "Game Claim Coachmark",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Game Claim Coachmark", config: { enabled: !0 } }],
});
var tR = n(509434),
    tx = n(975807),
    tG = n(201438),
    tU = n(194362),
    tD = n(307301),
    tb = n(661531),
    ty = n(841352);
function tP(e) {
    let { imageSrc: t } = e;
    return (0, l.jsxs)("div", {
        className: ty.kL,
        children: [
            (0, l.jsx)("div", { className: ty.j3, children: (0, l.jsx)("img", { className: ty.Su, src: t, alt: "" }) }),
            (0, l.jsx)("div", {
                className: ty.gm,
                children: (0, l.jsx)("div", {
                    className: ty.WA,
                    children: (0, l.jsx)(tD.j, { size: "sm", color: tb.A.colors.TEXT_BRAND }),
                }),
            }),
        ],
    });
}
var tv = n(140461);
function tH(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = tL(t.id)[0] ?? null,
        { coverImageUrl: s, gameName: a } = (0, tG.A)(i, e3.intl.string(e3.t.VQq92a));
    if (null == s) return null;
    let r = t.features.has(v.GuildFeatures.VERIFIED) ? e3.intl.string(e3.t.uUARXe) : e3.intl.string(e3.t["0Dx29f"]);
    return (0, l.jsx)(th, {
        guild: t,
        onDismissed: () => n(eE.i.USER_DISMISS),
        title: e3.intl.format(e3.t.Q11WTQ, { gameName: a }),
        message: r,
        cta: (0, l.jsxs)("span", {
            className: tv.m,
            children: [e3.intl.string(e3.t["2u6ZlY"]), (0, l.jsx)(tR.I, { size: "xs", color: "currentColor" })],
        }),
        type: v.n5X.GAME_CLAIM,
        image: (0, l.jsx)(tP, { imageSrc: s }),
        imageMarginX: 60,
        onClick: async () => {
            n(eE.i.TAKE_ACTION);
            let e = await (0, tU.a)(v.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tx.A)(e);
        },
    });
}
var tj = n(631305),
    tB = n(473145),
    tw = n(625633);
function tk(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = (0, tB.Os)(t, v.TVA.TIER_2),
        { analyticsLocations: s } = (0, S.Ay)(C.A.GUILD_BANNER_NOTICE);
    return (0, l.jsx)(th, {
        guild: t,
        onDismissed: () => n(eE.i.UNKNOWN),
        cta: e3.intl.string(e3.t.oPAx73),
        message: e3.intl.format(e3.t.AcaNYw, { boostsNeeded: i }),
        type: v.n5X.GUILD_BANNER,
        image: "/assets/f7ead7c3a969ed19.png",
        onClick: () =>
            (0, tj.A)({
                analyticsLocations: s,
                analyticsSourceLocation: { section: v.JJy.CHANNEL_NOTICE, object: v.ZSU.SERVER_BANNER_TOOLTIP },
                guild: t,
                perks: (0, tw.QR)(),
            }),
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var tX = n(85829);
class tV extends a.PureComponent {
    handleButtonClick = () => {
        let { guild: e } = this.props;
        (0, tX.K4)({ guildId: e.id, location: { section: v.JJy.CHANNEL_NOTICE, object: v.ZSU.SERVER_STATUS_CTA } });
    };
    render() {
        let { guild: e, memberCount: t, markAsDismissed: n } = this.props;
        return (0, l.jsx)(th, {
            guild: e,
            onDismissed: () => n(eE.i.UNKNOWN),
            onClick: this.handleButtonClick,
            message: null == t || t < 30 ? e3.intl.string(e3.t.hlitVQ) : e3.intl.string(e3.t.XHtaDD),
            cta: e3.intl.string(e3.t["vqb+H1"]),
            trackingSource: v.kZU.GUILD_SUBSCRIPTION_NOTICE,
            type: v.n5X.GUILD_BOOSTING,
            image: "/assets/9b7fadd75ade640d.svg",
            imageMarginX: 26,
        });
    }
}
let tF = d.Ay.connectStores([X.A], (e) => {
    let { guild: t } = e;
    return { memberCount: X.A.getMemberCount(t.id) };
})(tV);
var tK = n(503698),
    tW = n.n(tK),
    tY = n(933832),
    tz = n(782603),
    tZ = n(81466),
    tQ = n(116085),
    tq = n(597601),
    t$ = n(451394),
    tJ = n(104171),
    t0 = n(47167),
    t1 = n(713654),
    t3 = n(976860),
    t6 = n(790535),
    t8 = n(110618),
    t2 = n(495544),
    t7 = n(309010),
    t4 = n(312006),
    t5 = n(403362),
    t9 = n(707592),
    ne = n(698441),
    nt = n(935159),
    nn = n(11550),
    ni = n(435328),
    ns = n(563312),
    nl = n(9448),
    na = n(647090),
    nr = n(666394),
    no = n(28164);
let nd = a.memo(function (e) {
    let {
        heading: t,
        location: n,
        locationIcon: i,
        details: s,
        detailsIcon: a,
        topic: r,
        onClickCloseIcon: o,
        children: d,
    } = e;
    return (0, l.jsxs)("div", {
        className: no.kX,
        children: [
            (0, l.jsxs)("div", {
                className: tW()(no.fI, no.pF),
                children: [
                    (0, l.jsx)("div", { className: no.Ok }),
                    (0, l.jsx)(e4.E, {
                        color: "text-feedback-positive",
                        variant: "text-xs/semibold",
                        className: no.U4,
                        children: t,
                    }),
                    null != o &&
                        (0, l.jsx)(to.D, {
                            onClick: o,
                            className: no.ut,
                            "aria-label": e3.intl.string(e3.t.cpT0Cq),
                            children: (0, l.jsx)(td.P, { size: "xs", color: "currentColor" }),
                        }),
                ],
            }),
            (0, l.jsx)(tu.D, { color: "text-strong", variant: "heading-md/semibold", className: no.eq, children: r }),
            (0, l.jsxs)("div", {
                className: tW()(no.fI, no.pF),
                children: [
                    i,
                    (0, l.jsx)(e4.E, { color: "none", variant: "text-xs/normal", className: no.HA, children: n }),
                    null != s &&
                        null != a &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(e4.E, {
                                    className: no.hY,
                                    color: "none",
                                    variant: "text-xs/normal",
                                    children: "\u2022",
                                }),
                                a,
                                (0, l.jsx)(e4.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: no.zH,
                                    children: s,
                                }),
                            ],
                        }),
                ],
            }),
            d,
        ],
    });
});
function nu(e) {
    let { guildEvent: t, channel: n } = e,
        i = (0, t0.Ay)(n),
        s = (0, d.yK)(
            [x.Ay],
            () =>
                x.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        a = (0, t1.gU)(n);
    return (0, l.jsx)(nd, {
        onClickCloseIcon: () => (0, nt.iF)({ eventId: t?.id }),
        heading: e3.intl.string(e3.t["X2K3/4"]),
        topic: t.name,
        location: i,
        locationIcon: null != a ? (0, l.jsx)(a, { size: "xs", color: "currentColor", className: no.uE }) : null,
        children: (0, l.jsx)(nN, { channel: n, speakers: s, voiceType: 1 }),
    });
}
function nc(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, na.G3)(t),
        s = (0, d.bG)([ne.Ay], () => ne.Ay.isInterestedInEventRecurrence(t.id, i), [t.id, i]),
        a = (0, d.bG)([nn.A], () => nn.A.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return (
        s || null != a || (0, nt.pE)(t.id),
        (0, l.jsx)(e5.$, {
            onClick: function () {
                (0, nr.A)(t.id, null, t.guild_id, () => setTimeout(() => (0, nt.Lx)(t.id), 1e3)),
                    eu.default.track(v.HAw.CHANNEL_NOTICE_CTA_CLICKED, { guild_id: t.guild_id, notice_type: n });
            },
            text: e3.intl.string(e3.t.DlcqlU),
            icon: s ? tY.A : tz.X,
            variant: s ? "secondary" : "primary",
            size: "sm",
            fullWidth: !0,
        })
    );
}
function nA(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, nl.oF)(t),
        s = null != i ? (0, ni.l)(i, !0) : null,
        r = (0, nl.WN)(t),
        o = (0, t0.Ay)(r),
        d = (0, t1.gU)(r),
        { startTime: u, endTime: c } = (0, ns.Ay)(t),
        { startDateTimeString: A, upcomingEvent: E, diffMinutes: h } = (0, na.CC)(u.toISOString(), c?.toISOString()),
        g = E
            ? h > 0
                ? e3.intl.formatToPlainString(e3.t.PQlCWk, { minutes: h })
                : e3.intl.string(e3.t.WINqKV)
            : e3.intl.formatToPlainString(e3.t.DC6h3G, { date: A });
    return (
        a.useEffect(() => {
            eu.default.track(v.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: n, guild_id: t.guild_id });
        }, [t, n]),
        (0, l.jsxs)("div", {
            className: no.kX,
            children: [
                (0, l.jsxs)("div", {
                    className: no.fI,
                    children: [
                        (0, l.jsx)(to.D, {
                            onClick: () => (0, t9.uR)({ eventId: t.id }),
                            className: no.oP,
                            children: (0, l.jsx)(e4.E, {
                                color: "text-strong",
                                variant: "text-md/semibold",
                                className: no.eq,
                                children: t.name,
                            }),
                        }),
                        (0, l.jsx)(to.D, {
                            onClick: () => {
                                eu.default.track(v.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: n, guild_id: t.guild_id }),
                                    (0, nt.Lx)(t.id);
                            },
                            className: no.ut,
                            "aria-label": e3.intl.string(e3.t.cpT0Cq),
                            children: (0, l.jsx)(td.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tW()(no.fI, no.pF),
                    children: [
                        (0, l.jsx)(tZ.C, {
                            size: "custom",
                            color: "currentColor",
                            className: no.uE,
                            width: 16,
                            height: 16,
                        }),
                        (0, l.jsx)(e4.E, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            className: no.Sv,
                            children: g,
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tW()(no.fI, no.pF),
                    children: [
                        null != d
                            ? (0, l.jsx)(d, { size: "xs", color: "currentColor", className: no.uE })
                            : (0, l.jsx)(tQ.B, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 16,
                                  height: 16,
                                  className: no.uE,
                              }),
                        (0, l.jsx)(e4.E, {
                            color: "none",
                            variant: "text-xs/normal",
                            className: no.HA,
                            children: o ?? s,
                        }),
                    ],
                }),
                (0, l.jsx)(nc, { guildEvent: t, noticeType: n }),
            ],
        })
    );
}
function nE(e) {
    let { guildEvent: t } = e,
        n = (0, nl.oF)(t);
    return null == n
        ? null
        : (0, l.jsx)(nd, {
              onClickCloseIcon: () => (0, nt.iF)({ eventId: t?.id }),
              heading: e3.intl.string(e3.t["1+boPi"]),
              topic: t.name,
              location: (0, ni.l)(n, !0),
              locationIcon: (0, l.jsx)(tQ.B, {
                  size: "custom",
                  color: "currentColor",
                  width: 16,
                  height: 16,
                  className: no.uE,
              }),
              children: (0, l.jsx)(nh, { guildEvent: t }),
          });
}
function nh(e) {
    let { guildEvent: t } = e,
        n = a.useCallback(() => {
            (0, t9.uR)({ eventId: t.id });
        }, [t]);
    return (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: no.PD,
        children: (0, l.jsx)(e5.$, {
            variant: "active",
            size: "sm",
            text: e3.intl.string(e3.t.z4FcDs),
            fullWidth: !0,
            onClick: n,
        }),
    });
}
function ng(e) {
    let { channel: t, label: n } = e;
    return (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: no.PD,
        children: (0, l.jsx)(e5.$, {
            variant: "active",
            size: "sm",
            text: n,
            fullWidth: !0,
            onClick: () => {
                null != t && null != t.getGuildId() && ((0, t6.av)(t), (0, t3.uh)(t.getGuildId(), t.id));
            },
        }),
    });
}
function nI(e) {
    let { stageInstance: t, channel: n } = e,
        i = (0, t0.Ay)(n),
        s = (0, d.yK)([p.A], () => [...new Set(p.A.getMutableParticipants(n.id, M.ip.SPEAKER).map((e) => e.user))], [
            n.id,
        ]),
        a = (0, d.bG)([p.A], () => p.A.getParticipantCount(n.id, M.ip.AUDIENCE), [n.id]),
        r = e3.intl.formatToPlainString(e3.t["+v2pN2"], { count: `${a}` });
    return (0, l.jsx)(nd, {
        onClickCloseIcon: () => (0, nt.iF)({ stageId: t?.id }),
        heading: e3.intl.string(e3.t["X2K3/4"]),
        location: i,
        details: r,
        detailsIcon: (0, l.jsx)(tq.L, {
            size: "custom",
            color: "currentColor",
            width: 14,
            height: 14,
            className: no.uE,
        }),
        locationIcon: (0, l.jsx)(t$.q, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: no.uE,
        }),
        topic: t.topic,
        children: (0, l.jsx)(nN, { channel: n, speakers: s, voiceType: 2 }),
    });
}
var n_ = (((s = {})[(s.VOICE = 1)] = "VOICE"), (s[(s.STAGE = 2)] = "STAGE"), (s[(s.STUDY_ROOM = 3)] = "STUDY_ROOM"), s);
function nN(e) {
    var t;
    let { channel: n, speakers: i, voiceType: s } = e,
        r = n.getGuildId(),
        o = a.useMemo(() => i.slice(0, 3), [i]),
        u = (0, d.bG)([R.A], () => R.A.can(v.xBc.CONNECT, n)),
        c =
            ((t = n.id),
            (0, d.bG)([t2.default, t7.A, t4.Ay], () => {
                let e = t2.default.getId();
                return t7.A.getVoiceChannelId() === t ? t4.Ay.getPermissionsForUser(e, t) : null;
            }, [t])),
        A = e3.intl.string(e3.t.VJlc0S);
    switch (s) {
        case 1:
            A = e3.intl.string(e3.t.VJlc0S);
            break;
        case 2:
            (A = e3.intl.string(e3.t.ZYO5OK)),
                c?.speaker ? (A = e3.intl.string(e3.t["/cnSFc"])) : null != c && (A = e3.intl.string(e3.t.btSGOj));
            break;
        case 3:
            A = e3.intl.string(e3.t.wBoE6L);
            break;
        default:
            (0, t5.xb)(s);
    }
    return null == r
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  o.length > 0
                      ? (0, l.jsxs)("div", {
                            className: tW()(no.fI, no.pF),
                            children: [
                                (0, l.jsx)(tJ.Ay, { guildId: r, users: o, showUserPopout: !0, size: tJ.DN.SIZE_16 }),
                                (0, l.jsx)(e4.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: no.c8,
                                    children: (0, t8.c)(r, o, n?.id, i.length),
                                }),
                            ],
                        })
                      : null,
                  u && null == c && (0, l.jsx)(ng, { channel: n, label: A }),
              ],
          });
}
let nm = a.memo(function (e) {
    var t;
    let n,
        i,
        s,
        { guild: a } = e,
        r = ((t = a.id), (n = (0, y.r2)(t)), (i = (0, L.Ay)(t)), (s = f.A.getChannel(i[0]?.id)), n ?? s),
        o = (0, y.BP)(a.id),
        u = (0, y.WG)(a.id),
        c = (0, d.bG)([O.A], () => O.A.getStageInstanceByChannel(r?.id), [r]),
        { isStageNoticeHidden: A, isEventNoticeHidden: E } = (0, d.cf)(
            [b],
            () => ({
                isStageNoticeHidden: b.isLiveChannelNoticeHidden({ stageId: c?.id }),
                isEventNoticeHidden: b.isLiveChannelNoticeHidden({ eventId: o?.id }),
            }),
            [c, o],
        ),
        h = null,
        g = null != c && null != r && !A;
    null == o || E
        ? g && (h = (0, l.jsx)(nI, { stageInstance: c, channel: r }))
        : o.entity_type === G.Ps.STAGE_INSTANCE && g
          ? (h = (0, l.jsx)(nI, { stageInstance: c, channel: r }))
          : o.entity_type === G.Ps.EXTERNAL
            ? (h = (0, l.jsx)(nE, { guildEvent: o }))
            : o.entity_type === G.Ps.VOICE && null != r && (h = (0, l.jsx)(nu, { guildEvent: o, channel: r }));
    let I = a.features.has(v.GuildFeatures.COMMUNITY);
    if (null == h && null != u && !I) {
        let { upcomingEvent: e, noticeType: t } = u;
        h = (0, l.jsx)(nA, { guildEvent: e, noticeType: t });
    }
    return h;
});
function nC(e) {
    let { guild: t, markAsDismissed: i } = e;
    return (0, l.jsx)(th, {
        guild: t,
        onDismissed: () => i(eE.i.UNKNOWN),
        onClick: function () {
            (0, I.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("33287"),
                    n.e("97804"),
                    n.e("7265"),
                    n.e("97641"),
                    n.e("90496"),
                ]).then(n.bind(n, 401155));
                return (t) => (0, l.jsx)(e, { ...t });
            });
        },
        message: e3.intl.string(e3.t["1+hiP6"]),
        cta: e3.intl.string(e3.t.hvVgAZ),
        trackingSource: v.kZU.HUB_LINK_NOTICE,
        type: v.n5X.HUB_LINK,
        image: "/assets/fe7f670e6ffe6cf6.svg",
    });
}
var nS = n(717421),
    nT = n(450510);
let np = (e) => {
    let { channel: t, guild: n } = e;
    return (0, l.jsx)(th, {
        guild: n,
        onDismissed: () => {
            (0, nT.sF)(nT._2.HUB_STUDY_ROOM_NOTICE);
        },
        onClick: () => {
            (0, nT.sF)(nT._2.HUB_STUDY_ROOM_NOTICE),
                null != t && null != t.getGuildId() && ((0, t6.av)(t), (0, t3.uh)(t.getGuildId(), t.id));
        },
        title: e3.intl.string(e3.t["4Y2AS7"]),
        message: e3.intl.string(e3.t.wTsxTS),
        cta: e3.intl.string(e3.t.wBoE6L),
        image: "/assets/0b9061ca8185c832.svg",
        type: v.n5X.HUB_STUDY_ROOM,
    });
};
var nM = n(994190);
let nO = function (e) {
    let { name: t, channel: n } = e,
        i = (0, d.yK)(
            [x.Ay],
            () =>
                x.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        s = (0, t1.gU)(n);
    return (0, l.jsx)(nd, {
        heading: e3.intl.string(e3.t["X2K3/4"]),
        topic: t,
        location: e3.intl.string(e3.t.LZA6Na),
        locationIcon: null != s ? (0, l.jsx)(s, { size: "xs", color: "currentColor", className: nM.K }) : null,
        children: (0, l.jsx)(nN, { channel: n, speakers: i, voiceType: n_.STUDY_ROOM }),
    });
};
var nL = n(48686);
function nf(e) {
    let { channel: t, guild: n } = e,
        i = (0, d.bG)([nT.HP], () => nT.HP.hasHotspot(nT._2.HUB_STUDY_ROOM_NOTICE)),
        s = (0, nL.Q)(t.guild_id),
        a = (0, t0.Ay)(t),
        o = (0, nS.z)({ maxHeight: 300 * !s, overflow: "hidden", delay: 400 });
    return (0, l.jsx)(r.animated.div, {
        style: o,
        children: i
            ? (0, l.jsx)(np, { channel: t, guild: n })
            : (0, l.jsx)(nO, { name: `\u{1F4DA}\u{2615} ${a}`, channel: t }),
    });
}
let nR = function (e) {
    let { guild: t } = e,
        n = (0, d.bG)([eF.Ay], () => eF.Ay.getChannels(t.id)[eF.vM][0]),
        i = (0, d.bG)([R.A], () => null != n && R.A.can(v.xBc.CONNECT, n.channel));
    return t.features.has(v.GuildFeatures.HUB) && null != n && i
        ? (0, l.jsx)(nf, { channel: n.channel, guild: t })
        : null;
};
function nx(e) {
    let { guild: t } = e,
        n = () => B.A.dismissNotice(t.id);
    return (0, l.jsx)(th, {
        guild: t,
        onDismissed: n,
        cta: e3.intl.string(e3.t.RzWDqY),
        message: e3.intl.format(e3.t["kQ/MDl"], {}),
        type: v.n5X.COMMANDS_MIGRATION,
        image: "/assets/ab63b30e9bc8855c.svg",
        onClick: () => {
            n(), e1.A.open(t.id, v.BEX.INTEGRATIONS);
        },
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var nG = n(587895),
    nU = n(143582);
function nD(e) {
    let t,
        { guild: n } = e,
        i = (0, w.$s)(n),
        s = () => (0, nU.Hc)(n.id),
        r = a.useMemo(() => new Set(i.map((e) => e.applicationId)), [i]),
        o = (0, d.yK)([nG.A], () => {
            let e = [];
            for (let t of r) {
                let n = nG.A.getApplication(t);
                null != n && e.push(n);
            }
            return e;
        }, [r]);
    return 0 === o.length
        ? null
        : ((t =
              1 === o.length
                  ? e3.intl.formatToPlainString(e3.t["Egq+G/"], { a: o[0].name })
                  : 2 === o.length
                    ? e3.intl.formatToPlainString(e3.t.LxU9R3, { a: o[0].name, b: o[1].name })
                    : 3 === o.length
                      ? e3.intl.formatToPlainString(e3.t.crKXMC, { a: o[0].name, b: o[1].name, c: o[2].name })
                      : e3.intl.string(e3.t.MvfowF)),
          (0, l.jsx)(th, {
              guild: n,
              onDismissed: s,
              message: t,
              type: v.n5X.APPLICATION_SUBSCRIPTION_EXPIRATION,
              image: "/assets/eaaec668caed688e.svg",
              onClick: () => {
                  s(), e1.A.open(n.id, v.BEX.INTEGRATIONS);
              },
              imageMarginTop: 6,
              imageMarginX: 46,
              cta: e3.intl.string(e3.t.Rr3MAe),
          }));
}
var nb = n(628287);
let ny = (e) => {
    let { guild: t } = e,
        n = a.useCallback(() => {
            var e;
            (e = t.id), _.h.dispatch({ type: "PUBLIC_UPSELL_NOTICE_DISMISS", guildId: e });
        }, [t.id]);
    return (0, l.jsx)(th, {
        guild: t,
        onDismissed: n,
        onClick: () => e1.A.open(t.id, v.BEX.COMMUNITY),
        message: e3.intl.string(e3.t["2klD0Z"]),
        trackingSource: v.kZU.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
        type: v.n5X.PUBLIC_UPSELL,
        image: nb,
        cta: e3.intl.string(e3.t.hvVgAZ),
    });
};
var nP = n(536194),
    nv = n(780964),
    nH = n(766075);
class nj extends a.PureComponent {
    render() {
        return (0, l.jsx)(th, {
            guild: this.props.guild,
            onClick: () => (0, nH.openUserSettings)(nv.X.ACCOUNT_PANEL),
            message: e3.intl.format(e3.t["oCd+at"], {}),
            cta: e3.intl.string(e3.t["8dCrV9"]),
            trackingSource: v.kZU.GUILD_MFA_WARNING,
            type: v.n5X.MFA_WARNING,
            image: "/assets/74690dbe995fcda0.svg",
            imageMarginX: 54,
            undismissable: !0,
        });
    }
}
var nB = n(493336);
class nw extends a.PureComponent {
    handleInvite = () => {
        let { guild: e } = this.props;
        (0, I.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("82314"),
                n.e("80339"),
                n.e("59957"),
                n.e("28136"),
                n.e("16084"),
                n.e("22547"),
            ]).then(n.bind(n, 1310));
            return (n) => (0, l.jsx)(t, { ...n, guild: e, source: v.PE1.INVITE_NOTICE });
        });
    };
    handleClose = () => {
        let e = t7.A.getChannelId(),
            t = e3.intl.formatToPlainString(e3.t.DEn7nu, { invitePeople: e3.intl.string(e3.t.Sd8Ixw) });
        this.props.markAsDismissed(eE.i.UNKNOWN), null != e && nB.A.sendBotMessage(e, t);
    };
    render() {
        let e = `${e3.intl.string(e3.t.VWqWZQ)}
${e3.intl.string(e3.t["0Lgb/K"])}`;
        return (0, l.jsx)(th, {
            guild: this.props.guild,
            onDismissed: this.handleClose,
            onClick: this.handleInvite,
            message: e,
            cta: e3.intl.string(e3.t.Sd8Ixw),
            trackingSource: v.kZU.INVITE_NOTICE,
            type: v.n5X.INVITE,
            image: "/assets/f59ed15bef9f5c18.svg",
            imageMarginX: 46,
        });
    }
}
let nk = (e) => {
    let { guild: t } = e,
        n = a.useCallback(() => {
            var e;
            (e = t.id), _.h.dispatch({ type: "MAX_MEMBER_COUNT_NOTICE_DISMISS", guildId: e });
        }, [t.id]);
    return (0, l.jsx)(th, {
        guild: t,
        onDismissed: n,
        message: e3.intl.format(e3.t["+QqO3U"], {
            maxMemberCount: t.maxMembers,
            maxMembersUrl: tg.A.getArticleURL(v.MVz.MAX_MEMBERS),
        }),
        type: v.n5X.MAX_MEMBER_COUNT,
        image: "/assets/5cc728db4badfc0e.svg",
        imageMarginX: 61,
    });
};
var nX = n(475358),
    nV = n(675704),
    nF = n(793322);
let nK = (e) => {
    let t = (0, l.jsx)(nX.e, { shortcut: nV.R.binds["0"], keyClassName: tA.Eb });
    return (0, l.jsx)(th, {
        guild: e.guild,
        onDismissed: () => e.markAsDismissed(eE.i.UNKNOWN),
        onClick: () => (0, nF.WU)("CHANNEL_NOTICE"),
        message: e3.intl.string(e3.t.Qhk8cs),
        cta: t,
        trackingSource: v.kZU.QUICK_SWITCHER_NOTICE,
        type: v.n5X.QUICKSWITCHER,
        image: "/assets/1b763dab67be227b.svg",
        imageMarginX: 50,
    });
};
var nW = n(174768);
class nY extends d.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(V.A), this.syncWith([V.A], v.tEg);
    }
    channelNoticePredicate(e, t) {
        return !e.features.has(v.GuildFeatures.BANNER) && Date.now() - t >= v.D2K;
    }
}
let nz = new nY(_.h);
class nZ extends d.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(R.A), this.syncWith([R.A], v.tEg);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= v.D2K && R.A.can(v.xBc.MANAGE_GUILD, e);
    }
}
let nQ = new nZ(_.h);
var nq = n(731667);
function n$() {
    return !0;
}
class nJ extends d.Ay.Store {
    static displayName = "InviteNoticeStore";
    initialize() {
        this.waitFor(R.A), this.syncWith([R.A], n$);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= v.D2K && R.A.can(v.xBc.ADMINISTRATOR, e);
    }
}
let n0 = new nJ(_.h),
    n1 = "lastHiddenChannelNotice",
    n3 = [
        { type: v.n5X.CLAN_ADMIN_UPSELL, dismissibleContentType: u.M.CHANNEL_LIST_CLAN_ADMIN_UPSELL },
        {
            type: v.n5X.GUILD_BOOSTING,
            store: nQ,
            dismissibleContentType: u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION,
        },
        { type: v.n5X.GUILD_BANNER, store: nz, dismissibleContentType: u.M.CHANNEL_NOTICE_GUILD_BANNER },
        { type: v.n5X.INVITE, store: n0, dismissibleContentType: u.M.CHANNEL_NOTICE_INVITE },
        { type: v.n5X.HUB_LINK, store: nq.A, dismissibleContentType: u.M.CHANNEL_NOTICE_HUBLINK },
        { type: v.n5X.QUICKSWITCHER, store: nW.A, dismissibleContentType: u.M.CHANNEL_NOTICE_QUICKSWITCHER },
        { type: v.n5X.LINKED_ROLES_ADMIN, dismissibleContentType: u.M.LINKED_ROLE_ADMIN_GUILD },
        { type: v.n5X.GAME_CLAIM, dismissibleContentType: u.M.GAME_CLAIM_COACHMARK },
    ],
    n6 = n3.map((e) => e.store).filter(t5.Vq),
    n8 = new Set([u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, u.M.CHANNEL_NOTICE_GUILD_BANNER]);
function n2(e) {
    e.stopPropagation();
}
let n7 = [];
function n4(e) {
    var t, n;
    let i,
        s,
        r,
        o,
        c,
        { guild: A } = e,
        [E, h] = a.useState(k.w.get(n1) ?? 0),
        g =
            ((n = t = A.id),
            (i = tf.useExperiment(
                { guildId: n, location: "useCanShowGameClaimCoachmark" },
                { autoTrackExposure: !1 },
            ).enabled),
            (s = (0, d.bG)([R.A], () => R.A.canWithPartialContext(v.xBc.ADMINISTRATOR, { guildId: t }), [t])),
            (o = (function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return tL(e, t).length > 0;
            })(t, (r = i && s))),
            (c = r && o),
            a.useMemo(() => {
                let e = [];
                return c && e.push(u.M.GAME_CLAIM_COACHMARK), e.length > 0 ? e : n7;
            }, [c])),
        [I, _] = (0, ei.ww)(g, A.id, eE.m.CHANNEL_NOTICES, !0),
        N = null != I,
        m = (0, d.yK)(
            n6,
            () =>
                N
                    ? []
                    : n3
                          .filter((e) => {
                              let { dismissibleContentType: t, store: n } = e;
                              return !0 === n?.channelNoticePredicate(A, E) && !n8.has(t);
                          })
                          .map((e) => e.dismissibleContentType),
            [A, E, N],
        ),
        [C, S] = (0, ei.kn)(m, eE.m.CHANNEL_NOTICES),
        T = I ?? C,
        p = null != I ? _ : S,
        M = a.useCallback(() => {
            var e;
            (e = Date.now()), k.w.set(n1, e), h(e), p(eE.i.UNKNOWN);
        }, [p]),
        O = (() => {
            switch (T) {
                case u.M.CHANNEL_NOTICE_HUBLINK:
                    return (0, l.jsx)(nC, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_INVITE:
                    return (0, l.jsx)(nw, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                    return (0, l.jsx)(tF, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_QUICKSWITCHER:
                    return (0, l.jsx)(nK, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_GUILD_BANNER:
                    return (0, l.jsx)(tk, { guild: A, markAsDismissed: M });
                case u.M.LINKED_ROLE_ADMIN_GUILD:
                    return (0, l.jsx)(tI, { guild: A, markAsDismissed: () => p(eE.i.UNKNOWN) });
                case u.M.GAME_CLAIM_COACHMARK:
                    return (0, l.jsx)(tH, { guild: A, markAsDismissed: p });
                default:
                    return null;
            }
        })();
    return null == O ? null : (0, l.jsx)("div", { onContextMenu: n2, children: O });
}
let n5 = (e) => {
    let { guild: t } = e;
    switch (ee(t)) {
        case J.ENABLE_PUBLIC_GUILD:
            return (0, l.jsx)(ny, { guild: t });
        case J.MAX_MEMBER_COUNT:
            return (0, l.jsx)(nk, { guild: t });
        case J.GUILD_LIVE_CHANNEL:
            return (0, l.jsx)(nm, { guild: t });
        case J.GUILD_MFA_WARNING:
            return (0, l.jsx)(nj, { guild: t });
        case J.COMMANDS_MIGRATION:
            return (0, l.jsx)(nx, { guild: t });
        case J.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, l.jsx)(nD, { guild: t });
        case J.HUB_STUDY_ROOM:
            return (0, l.jsx)(nR, { guild: t });
    }
    return nP.P.isDisallowPopupsSet() ? null : (0, l.jsx)(n4, { guild: e.guild });
};
var n9 = n(532233);
function ie(e) {
    let { guild: t, setHasSubheader: n } = e,
        i = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            let e = i.current;
            null != e && n(e.childNodes.length > 0);
        }),
        (0, l.jsx)("div", { className: n9.k, ref: i, children: (0, l.jsx)(n5, { guild: t }) })
    );
}
var it = n(66933),
    ii = n(846930),
    is = n(153822);
let il = "server-settings",
    ia = { origin: { x: -8, y: -48 }, targetWidth: 40, targetHeight: 40, offset: { x: 0, y: 0 } };
class ir extends a.PureComponent {
    historyUnlisten = () => {};
    guildHeaderRef = a.createRef();
    guildHeaderDropdownButtonRef = a.createRef();
    static getDerivedStateFromProps(e) {
        let { guild: t, hasChannelNotice: n } = e;
        return null == t || null == t.banner || n ? { renderBanner: !1, bannerVisible: !1 } : null;
    }
    showTimeout = new c.Ep();
    state = {
        controller: new r.Controller({ value: 1, immediate: !0 }),
        renderBanner: !1,
        bannerVisible: !1,
        communityInfoVisible: !1,
        shouldShowSubscribeTooltip: !1,
        bannerVisibleHeight: 88,
        hasGuildSubheader: !1,
    };
    componentDidMount() {
        this.setAnimatedValue(0),
            _.h.subscribe("LAYER_PUSH", this.closeAllHeaderNotices),
            (this.historyUnlisten = eB.A.addRouteChangeListener(this.handleHistoryChange));
        let { location: e } = eB.A.getHistory();
        e.state?.shouldShowSubscribeTooltip &&
            this.showTimeout.start(1e3, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
    }
    componentWillUnmount() {
        this.showTimeout.stop(),
            this.state.controller.dispose(),
            this.historyUnlisten(),
            _.h.unsubscribe("LAYER_PUSH", this.closeAllHeaderNotices);
    }
    getGuildBannerHash() {
        let { guild: e, hasChannelNotice: t } = this.props;
        return null == e || t ? null : e.banner;
    }
    handleHistoryChange = (e) => {
        null != e.state &&
            e.state.shouldShowSubscribeTooltip &&
            this.showTimeout.start(1e3, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
    };
    handleHeaderMenuToggle = (e) => {
        let { isHeaderPopoutOpen: t } = this.props;
        e.stopPropagation(), (0, eo.Z)(!t), this.closeAllHeaderNotices();
    };
    handleContextMenu = (e) => {
        let { guild: t, hasFavoritesAccess: i } = this.props;
        if (null != t) {
            if ((0, el.ai)(t.id)) {
                if (!i) return;
                (0, N.L3)(e, async () => {
                    let { default: e } = await n.e("60497").then(n.bind(n, 908424));
                    return (t) => (0, l.jsx)(e, { ...t, navId: "favorites-channel-list-context" });
                });
                return;
            }
            (0, N.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("9004"), n.e("19690"), n.e("45322"), n.e("10758")]).then(
                    n.bind(n, 455557),
                );
                return (n) => (0, l.jsx)(e, { ...n, guild: t });
            });
        }
    };
    handleHeaderContextMenu = (e) => {
        let { guild: t } = this.props;
        if (null != t) {
            if ((0, el.ai)(t.id)) return void this.props.onFavoriteGuildContextMenu(e);
            (0, N.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("71455"),
                    n.e("84287"),
                    n.e("1780"),
                    n.e("43683"),
                    n.e("64578"),
                    n.e("60361"),
                    n.e("76486"),
                    n.e("89982"),
                    n.e("88014"),
                    n.e("51437"),
                    n.e("76821"),
                    n.e("10581"),
                    n.e("67696"),
                    n.e("90629"),
                    n.e("8886"),
                    n.e("6212"),
                    n.e("53637"),
                    n.e("39655"),
                    n.e("78220"),
                    n.e("11262"),
                    n.e("16227"),
                    n.e("37520"),
                    n.e("33973"),
                    n.e("44125"),
                    n.e("37634"),
                    n.e("812"),
                    n.e("99115"),
                    n.e("72386"),
                    n.e("30541"),
                    n.e("74187"),
                    n.e("62279"),
                    n.e("44667"),
                    n.e("42157"),
                    n.e("96636"),
                    n.e("85917"),
                    n.e("53727"),
                    n.e("57034"),
                    n.e("85948"),
                    n.e("12940"),
                    n.e("52443"),
                    n.e("11266"),
                    n.e("75954"),
                    n.e("45976"),
                    n.e("60654"),
                    n.e("70179"),
                    n.e("97690"),
                    n.e("87103"),
                    n.e("52865"),
                    n.e("57215"),
                    n.e("22535"),
                    n.e("2499"),
                    n.e("94970"),
                    n.e("48997"),
                    n.e("70486"),
                    n.e("59135"),
                    n.e("83140"),
                    n.e("18670"),
                    n.e("33238"),
                    n.e("8641"),
                    n.e("59204"),
                    n.e("8736"),
                    n.e("97242"),
                    n.e("98795"),
                    n.e("65123"),
                    n.e("23549"),
                    n.e("83566"),
                    n.e("86283"),
                    n.e("84183"),
                    n.e("28510"),
                    n.e("8502"),
                    n.e("58493"),
                    n.e("58376"),
                    n.e("64460"),
                    n.e("21194"),
                    n.e("99272"),
                    n.e("20993"),
                    n.e("69164"),
                    n.e("92116"),
                    n.e("84200"),
                    n.e("33217"),
                    n.e("80050"),
                    n.e("37502"),
                    n.e("93751"),
                    n.e("46819"),
                    n.e("97127"),
                    n.e("17738"),
                    n.e("61312"),
                    n.e("57328"),
                    n.e("44135"),
                    n.e("79555"),
                    n.e("82393"),
                    n.e("39328"),
                    n.e("48845"),
                    n.e("34383"),
                    n.e("83185"),
                    n.e("79247"),
                    n.e("41069"),
                    n.e("37261"),
                    n.e("69337"),
                    n.e("62965"),
                    n.e("47587"),
                    n.e("78777"),
                    n.e("64379"),
                    n.e("79465"),
                    n.e("83314"),
                    n.e("32129"),
                    n.e("85776"),
                    n.e("83671"),
                    n.e("63980"),
                    n.e("76900"),
                    n.e("54210"),
                    n.e("73099"),
                    n.e("47199"),
                    n.e("78381"),
                    n.e("8794"),
                    n.e("98824"),
                    n.e("78230"),
                    n.e("11002"),
                    n.e("47170"),
                    n.e("33174"),
                    n.e("84923"),
                    n.e("70613"),
                    n.e("25870"),
                    n.e("76831"),
                    n.e("37870"),
                    n.e("93083"),
                    n.e("77335"),
                    n.e("8177"),
                    n.e("41027"),
                    n.e("37351"),
                    n.e("22671"),
                    n.e("36518"),
                    n.e("79785"),
                    n.e("46757"),
                    n.e("90324"),
                    n.e("20578"),
                    n.e("36592"),
                    n.e("26543"),
                    n.e("82314"),
                    n.e("80339"),
                    n.e("38977"),
                    n.e("20802"),
                    n.e("91474"),
                    n.e("17566"),
                    n.e("19402"),
                    n.e("49681"),
                    n.e("96382"),
                    n.e("22687"),
                    n.e("62052"),
                    n.e("63202"),
                    n.e("82596"),
                    n.e("28367"),
                    n.e("93103"),
                    n.e("81647"),
                    n.e("76602"),
                    n.e("21921"),
                    n.e("9233"),
                    n.e("91763"),
                    n.e("52511"),
                    n.e("40402"),
                    n.e("93766"),
                    n.e("42724"),
                    n.e("39970"),
                    n.e("76418"),
                    n.e("40258"),
                    n.e("86127"),
                    n.e("66495"),
                    n.e("8555"),
                    n.e("28095"),
                    n.e("88599"),
                    n.e("75842"),
                    n.e("36863"),
                    n.e("71210"),
                    n.e("72789"),
                    n.e("50117"),
                    n.e("46070"),
                    n.e("17249"),
                    n.e("71273"),
                    n.e("53917"),
                    n.e("79049"),
                    n.e("9640"),
                    n.e("62422"),
                    n.e("90365"),
                    n.e("88342"),
                    n.e("98765"),
                    n.e("52548"),
                    n.e("67861"),
                    n.e("1518"),
                    n.e("15186"),
                    n.e("37977"),
                    n.e("47626"),
                    n.e("23354"),
                    n.e("28083"),
                    n.e("82644"),
                    n.e("89421"),
                    n.e("53984"),
                    n.e("43780"),
                    n.e("20590"),
                    n.e("65437"),
                    n.e("74810"),
                    n.e("80830"),
                    n.e("79745"),
                    n.e("3589"),
                    n.e("80854"),
                    n.e("35395"),
                    n.e("96325"),
                    n.e("46844"),
                    n.e("63235"),
                    n.e("45413"),
                    n.e("86672"),
                    n.e("90664"),
                    n.e("64850"),
                    n.e("70104"),
                    n.e("2564"),
                    n.e("47417"),
                    n.e("19558"),
                    n.e("58946"),
                    n.e("48330"),
                    n.e("14285"),
                    n.e("3332"),
                    n.e("8362"),
                    n.e("72401"),
                    n.e("52617"),
                    n.e("4744"),
                    n.e("37021"),
                    n.e("81314"),
                    n.e("501"),
                    n.e("86243"),
                    n.e("67837"),
                    n.e("73384"),
                    n.e("82783"),
                    n.e("62862"),
                    n.e("5043"),
                    n.e("39171"),
                    n.e("93438"),
                    n.e("83952"),
                    n.e("44780"),
                    n.e("95340"),
                    n.e("44567"),
                    n.e("5557"),
                    n.e("62718"),
                    n.e("1812"),
                    n.e("92128"),
                    n.e("9004"),
                    n.e("89916"),
                    n.e("92295"),
                    n.e("49145"),
                    n.e("60773"),
                    n.e("68763"),
                    n.e("59957"),
                    n.e("99549"),
                    n.e("29666"),
                    n.e("58273"),
                    n.e("8018"),
                    n.e("20930"),
                    n.e("74610"),
                    n.e("26001"),
                    n.e("30997"),
                    n.e("14591"),
                    n.e("52111"),
                    n.e("57458"),
                    n.e("38601"),
                    n.e("1243"),
                    n.e("93336"),
                    n.e("15920"),
                    n.e("28136"),
                    n.e("69495"),
                    n.e("3930"),
                    n.e("3663"),
                    n.e("27659"),
                    n.e("68530"),
                    n.e("16084"),
                    n.e("43116"),
                    n.e("66580"),
                    n.e("78046"),
                    n.e("83230"),
                    n.e("82486"),
                    n.e("73669"),
                    n.e("10943"),
                    n.e("7775"),
                    n.e("61058"),
                    n.e("50342"),
                    n.e("93993"),
                    n.e("33097"),
                    n.e("3710"),
                    n.e("45830"),
                    n.e("22547"),
                    n.e("77602"),
                    n.e("10262"),
                    n.e("95602"),
                    n.e("46313"),
                    n.e("41786"),
                    n.e("34409"),
                    n.e("29569"),
                    n.e("36002"),
                    n.e("87995"),
                    n.e("91643"),
                    n.e("63726"),
                    n.e("71329"),
                    n.e("56373"),
                    n.e("42749"),
                    n.e("56026"),
                    n.e("16301"),
                    n.e("22191"),
                    n.e("25961"),
                    n.e("74333"),
                    n.e("8364"),
                    n.e("66147"),
                    n.e("89541"),
                    n.e("74337"),
                    n.e("52823"),
                    n.e("56967"),
                    n.e("47011"),
                    n.e("31203"),
                    n.e("66913"),
                    n.e("71719"),
                    n.e("19690"),
                    n.e("13848"),
                    n.e("39214"),
                    n.e("99108"),
                    n.e("88307"),
                    n.e("14878"),
                    n.e("26508"),
                    n.e("42935"),
                    n.e("73091"),
                    n.e("69178"),
                    n.e("86692"),
                    n.e("16373"),
                    n.e("81398"),
                    n.e("24484"),
                    n.e("44943"),
                    n.e("32347"),
                    n.e("8458"),
                    n.e("11810"),
                    n.e("91977"),
                    n.e("90152"),
                    n.e("46570"),
                    n.e("87973"),
                    n.e("57197"),
                    n.e("14863"),
                    n.e("60165"),
                    n.e("71167"),
                    n.e("12390"),
                    n.e("13446"),
                    n.e("6410"),
                    n.e("61309"),
                    n.e("94529"),
                    n.e("39799"),
                    n.e("17699"),
                    n.e("57032"),
                    n.e("45322"),
                    n.e("94832"),
                    n.e("26386"),
                    n.e("65338"),
                    n.e("94171"),
                    n.e("74572"),
                ]).then(n.bind(n, 860417));
                return (n) => (0, l.jsx)(e, { ...n, guild: t });
            });
        }
    };
    closeAllHeaderNotices = () => {
        this.handleCloseSubscribeTooltip(),
            this.handleCloseTemplateDirtyTooltip(),
            this.handleCloseStudentHubPrivacySettingsTooltip();
    };
    handleCloseStudentHubPrivacySettingsTooltip = () => {
        let e = (0, en.k8)(u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
            t = this.props.guild?.features.has(v.GuildFeatures.HUB);
        !e && t && (0, en.Dr)(u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: eE.i.AUTO });
    };
    handleCloseSubscribeTooltip = () => {
        this.showTimeout.stop(),
            this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
    };
    handleCloseTemplateDirtyTooltip = () => {
        let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
        null != e && t && em.A.hideGuildTemplateDirtyTooltip(e.id);
    };
    renderMenuPopout = async () => {
        let { default: e } = await Promise.all([
            n.e("95340"),
            n.e("9004"),
            n.e("43116"),
            n.e("56373"),
            n.e("19690"),
            n.e("13446"),
            n.e("17699"),
            n.e("57032"),
            n.e("9242"),
            n.e("93829"),
            n.e("9111"),
        ]).then(n.bind(n, 342218));
        return (t) => {
            let { closePopout: n } = t,
                { guild: i } = this.props;
            return null != i && (0, l.jsx)(e, { onClose: n, guild: i });
        };
    };
    renderGuildHeaderUpsellPopout = (e) => {
        let { guild: t, guildHeaderContentDescriptor: n } = this.props;
        return null == t || null == n
            ? this.renderGuildHeaderDropdownButton(e)
            : (0, l.jsx)(ts, {
                  contentDescriptor: n,
                  guild: t,
                  renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e),
              });
    };
    renderGuildHeaderDropdownButton = (e) => {
        let t = e ? E.t : h.a;
        return (0, l.jsx)(t, { ref: this.guildHeaderDropdownButtonRef, size: "xs", color: "currentColor" });
    };
    renderGuildHeaderNotices(e) {
        let { showGuildTemplateDirtyTooltip: t, showGuildHeaderTutorial: n, anyLayerOpen: i } = this.props,
            { shouldShowSubscribeTooltip: s } = this.state;
        return n
            ? (0, l.jsx)("div", {
                  onClick: (t) => (e ? null : t.stopPropagation()),
                  children: (0, l.jsx)(ew.A, {
                      tutorialId: il,
                      position: "bottom",
                      inlineSpecs: ia,
                      children: this.renderGuildHeaderDropdownButton(e),
                  }),
              })
            : t
              ? (0, l.jsxs)(l.Fragment, {
                    children: [
                        this.renderGuildHeaderDropdownButton(e),
                        !e &&
                            !i &&
                            (0, l.jsx)(A.A, {
                                targetElementRef: this.guildHeaderDropdownButtonRef,
                                title: e3.intl.string(e3.t.Rk2RJk),
                                body: e3.intl.string(e3.t.sFSrFH),
                                onRequestClose: this.handleCloseTemplateDirtyTooltip,
                                position: "bottom",
                                caretConfig: { align: "center" },
                            }),
                    ],
                })
              : i || e
                ? this.renderGuildHeaderDropdownButton(e)
                : s
                  ? (0, l.jsxs)(l.Fragment, {
                        children: [
                            this.renderGuildHeaderDropdownButton(e),
                            (0, l.jsx)(A.A, {
                                targetElementRef: this.guildHeaderDropdownButtonRef,
                                title: e3.intl.string(e3.t.Q3qa4x),
                                body: e3.intl.string(e3.t.UyHD4O),
                                onRequestClose: this.handleCloseSubscribeTooltip,
                                position: "bottom",
                                caretConfig: { align: "center" },
                            }),
                        ],
                    })
                  : this.renderGuildHeaderUpsellPopout(e);
    }
    renderGuildHeader(e) {
        let {
                guild: t,
                isHeaderPopoutOpen: n,
                showGuildHeaderTutorial: i,
                showGuildTemplateDirtyTooltip: s,
                isGuildHeaderDismissibleTooltipShown: a,
                headerAnalyticsLocations: r,
            } = this.props,
            {
                controller: o,
                renderBanner: d,
                bannerVisible: u,
                bannerVisibleHeight: c,
                communityInfoVisible: A,
            } = this.state,
            E = i || s || a;
        return null == t
            ? null
            : (0, l.jsx)(S.f5, {
                  value: r,
                  children: (0, l.jsx)(g.Q, {
                      targetElementRef: this.guildHeaderRef,
                      renderPopout: this.renderMenuPopout,
                      position: "bottom",
                      align: "center",
                      animation: g.Y.Animation.SCALE,
                      shouldShow: n,
                      onRequestClose: () => {
                          (0, eo.Z)(!1);
                      },
                      spacing: 4,
                      children: (i) => {
                          let { onClick: s, ...a } = i;
                          return (0, l.jsx)(eq.Ay, {
                              ref: this.guildHeaderRef,
                              guild: t,
                              controller: o,
                              renderBanner: d,
                              hasSubheader: e,
                              bannerVisible: u,
                              communityInfoVisible: A,
                              guildBanner: this.getGuildBannerHash(),
                              onClick: this.handleHeaderMenuToggle,
                              onContextMenu: this.handleHeaderContextMenu,
                              disableBannerAnimation: E,
                              animationOverlayHeight: c,
                              ...a,
                              children: this.renderGuildHeaderNotices(n),
                          });
                      },
                  }),
              });
    }
    setAnimatedValue(e) {
        let { guild: t } = this.props,
            n = null != this.getGuildBannerHash(),
            i = null != t && (0, eZ.A)(t);
        null != t && (n || i) && (n ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForGuildInfo(e));
    }
    setAnimatedValueForBanner = (e) => {
        let {
            renderBanner: t,
            communityInfoVisible: n,
            bannerVisible: i,
            bannerVisibleHeight: s,
            controller: l,
        } = this.state;
        ((e >= 88 && i) || (e < 88 && !i)) && (i = !i),
            ((e >= 88 && !t) || (e < 88 && t)) && (t = !t),
            (s = Math.max(88 - e, 0)),
            (n = i),
            (t !== this.state.renderBanner ||
                i !== this.state.bannerVisible ||
                s !== this.state.bannerVisibleHeight ||
                n !== this.state.communityInfoVisible) &&
                this.setState({ renderBanner: t, bannerVisible: i, bannerVisibleHeight: s, communityInfoVisible: n }),
            l.update({ value: Math.min(1, Math.max(0, 1 - e / 88)), immediate: !0 }).start();
    };
    setAnimatedValueForGuildInfo(e) {
        let { communityInfoVisible: t, controller: n } = this.state;
        ((e >= 20 && t) || (e < 20 && !t)) && (t = !t),
            t !== this.state.communityInfoVisible && this.setState({ communityInfoVisible: t }),
            n.update({ value: Math.min(1, Math.max(0, 1 - e / 20)), immediate: !0 }).start();
    }
    pinBannerOrGuildInfo = (e) => {
        let { scrollTop: t } = e;
        this.setAnimatedValue(t);
    };
    renderChannelList() {
        let { isUnavailable: e, guild: t, selectedChannel: n, enableStudyGroup: i, ...s } = this.props;
        if (e || null == t)
            return (0, l.jsx)(ii.A, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        {
            if (t.features.has(v.GuildFeatures.HUB) && !i)
                return (0, l.jsx)("div", {
                    className: is.r0,
                    children: (0, l.jsx)(eR.A, { guild: t, channel: n ?? eF.Ay.getDefaultChannel(t.id) }),
                });
            let e = (0, el.ai)(t.id) ? eQ.T : eQ.B;
            return (0, l.jsx)(e, {
                guild: t,
                ...s,
                guildBanner: this.getGuildBannerHash(),
                hasGuildSubheader: this.state.hasGuildSubheader,
                onScroll:
                    null != t && (null != this.getGuildBannerHash() || (0, eZ.A)(t)) ? this.pinBannerOrGuildInfo : null,
            });
        }
    }
    render() {
        let { guild: e } = this.props,
            t = (0, el.YC)(e);
        return (0, l.jsxs)("nav", {
            className: is.kL,
            onContextMenu: this.handleContextMenu,
            "aria-label": e3.intl.formatToPlainString(e3.t.nj5gAZ, { guildName: t ?? "" }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, l.jsx)(ie, { guild: e, setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }) }),
                this.renderChannelList(),
            ],
        });
    }
}
function io(e) {
    let t,
        i,
        s,
        r,
        c,
        A,
        E,
        h,
        g,
        _,
        N,
        T,
        p,
        M,
        O,
        { guildId: L, hideSelectedChannel: x, selectedChannelId: G } = e,
        U = (0, er.$)("favorite-guild-header-context"),
        { hasAccess: D } = (0, es.TW)("ConnectedGuildSidebar"),
        b = (0, d.bG)([V.A], () => V.A.getGuild(L)),
        y = (0, ea.A)(L),
        P = (0, d.bG)([eX.A], () => eX.A.getGuildDimensions(L).scrollTo),
        H = (0, d.bG)([eY.A], () => eY.A.getChannelId()),
        B = (0, d.bG)([R.A], () => R.A.can(v.xBc.MANAGE_GUILD, b)),
        w = (0, d.bG)([eV.A], () => eV.A.isUnavailable(L)),
        k = (0, d.bG)([eN.default], () => eN.default.getCurrentUser()),
        { enableStudyGroup: X } = j(b),
        K = (0, et.Ay)((e) => e.currentlyShown.has(u.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [W, Y] = a.useState(!K),
        z = (0, m.A)(L),
        { analyticsLocations: Z } = (0, S.Ay)(C.A.GUILD_HEADER);
    a.useEffect(() => {
        L !== z && Y(!K);
    }, [L, z, K]);
    let [Q, q] = (0, et.Ay)(
            (e) => [
                n3.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(eE.m.GUILD_HEADER_TOOLTIPS),
            ],
            o.x,
        ),
        $ = ee(b),
        J = (0, I.useModalsStore)(I.hasAnyModalOpenSelector),
        em = (0, d.bG)([eK.A], () => eK.A.hasLayers()),
        eC = (0, ex.xr)((e) => e.fullScreenLayers.length > 0),
        eS = (0, d.bG)([ek.A], () => ek.A.shouldShow(il)),
        eT =
            ((t = (0, d.bG)([V.A], () => V.A.getGuild(L))),
            (i = (0, d.bG)([eN.default], () => eN.default.getCurrentUser())),
            (s = null != t && (0, e_.bM)(t, i)),
            (r = (0, eI.oS)()),
            s &&
                (t?.features.has(v.GuildFeatures.COMMUNITY) ?? !1) &&
                r &&
                !(
                    t?.features.has(v.GuildFeatures.CREATOR_MONETIZABLE) ||
                    t?.features.has(v.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL) ||
                    t?.features.has(v.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)
                )),
        ep = b?.features.has(v.GuildFeatures.HUB) === !0,
        eM = B && b?.features.has(v.GuildFeatures.DISCOVERABLE) === !0,
        eR = (0, d.bG)(
            [eO, eK.A],
            () => null != b && null != k && B && !eK.A.hasLayers() && eO.shouldShowGuildTemplateDirtyTooltip(L),
        ),
        eB = (0, d.bG)([f.A], () => f.A.getChannel(G)),
        { isPopoutOpen: ew } = (0, eo.S)(),
        eF = b?.features.has(v.GuildFeatures.COMMUNITY) ?? !1,
        eZ = ez.Ay.isNewUser(k),
        eQ = W && !eZ;
    (c = (0, ed.TZ)(b)),
        (A = F.dR.some((e) => !(0, el.ai)(b?.id) && ec.Ib(e, b))),
        (E = b?.defaultMessageNotifications === v.orn.ALL_MESSAGES),
        (h = (0, eA.G$)(u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, b?.id ?? v.dJq)),
        (g = c && (A || E) && !h),
        (_ = a.useCallback(() => {
            (0, eA._$)(u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, b?.id ?? v.dJq, !0, eE.i.DISMISS);
        }, [b])),
        (N = a.useRef(!1)),
        a.useEffect(() => {
            g &&
                !N.current &&
                ((0, I.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("98031"), n.e("52823"), n.e("42446")]).then(
                            n.bind(n, 653981),
                        );
                        return (t) =>
                            (0, l.jsx)(e, {
                                guild: b,
                                canEveryoneModerate: A,
                                isDefaultNotificationsAllMessages: E,
                                ...t,
                            });
                    },
                    { onCloseCallback: _ },
                ),
                eu.default.track(v.HAw.DISMISSIBLE_CONTENT_SHOWN, {
                    type: u.V[u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
                    guild_id: b?.id ?? v.dJq,
                }),
                (N.current = !0));
        }, [A, b, _, E, g]);
    let eq = (0, en.JZ)(u.M.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        e$ =
            ((T = (0, d.bG)([V.A], () => V.A.getGuild(L))),
            (p = (0, eh._Y)(L)),
            (M =
                T?.features.has(v.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) === !0 &&
                T?.features.has(v.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !1),
            (O = (0, eg.X9)(T)),
            M && O && p);
    (function (e, t) {
        let { isNuxOpen: n, openNux: i } = t,
            s = (0, eL.Kb)(e, "GuildThemeNuxTrigger"),
            [l, r] = (0, ei.kn)(null != s ? [u.M.GUILD_THEME_NUX] : [], eE.m.GUILD_THEME_NUX),
            o = l === u.M.GUILD_THEME_NUX,
            d = a.useRef(!1);
        a.useEffect(() => {
            d.current = !1;
        }, [e]),
            a.useEffect(() => {
                if (!o || n || d.current) return;
                let t = setTimeout(() => {
                    d.current = !0;
                    let t = !1;
                    Promise.resolve(
                        i({
                            guildId: e,
                            markAsDismissed: (e) => {
                                t || ((t = !0), r(e, !0));
                            },
                        }),
                    ).catch(() => {
                        d.current = !1;
                    });
                }, 2e3);
                return () => clearTimeout(t);
            }, [o, n, e, r, i]);
    })(L, {
        isNuxOpen: (0, I.useHasModalOpen)(ef.u),
        openNux: a.useCallback((e) => {
            let { guildId: t, markAsDismissed: i } = e;
            return (0, I.openModalLazy)(
                async () => {
                    let e = await Promise.resolve().then(n.bind(n, 181880));
                    return (n) =>
                        (0, l.jsx)(e.default, {
                            guildId: t,
                            markAsDismissed: i,
                            transitionState: n.transitionState,
                            onClose: n.onClose,
                        });
                },
                { modalKey: ef.u, onCloseCallback: () => i(eE.i.USER_DISMISS) },
            );
        }, []),
    });
    let eJ = (0, d.bG)([eY.A], () => eY.A.getChannelId()),
        e0 = (0, d.bG)([eW.A], () => eW.A.desyncedVoiceStatesCount),
        e1 = (0, eH.A)(L);
    it.A.useConfig({ guildId: L, location: "guild_sidebar" });
    let e3 = (0, eG.C$)(L, "GuildSidebar"),
        e6 = (0, d.bG)([V.A], () => V.A.getGuild(L)?.features.has(v.GuildFeatures.GAME_SERVERS) ?? !1, [L]),
        e8 = e3 && !e6 && !1 === e1,
        e2 = (0, eD.J)("GuildSidebar"),
        e7 = (0, eU.S)(L, "GuildSidebar"),
        e4 = e3 && !e6 && e7 && !1 === e1,
        e5 = (0, ej.A)(),
        e9 = (0, eP.A)(L),
        te = !1 === e1 && e5 && null != e9,
        tt = (0, ev.A)(L),
        tn = !1 === e1 && e5 && null != tt,
        ti = [];
    ep && ti.push(u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        eT && ti.push(u.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
        eM && ti.push(u.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
        !1 === e1 && ti.push(u.M.GUILD_POWERUP_PERKS_COACHMARK),
        e8 && ti.push(u.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK),
        e4 && ti.push(u.M.GAME_SERVER_PRICING_CHANGE_COACHMARK),
        e$ && ti.push(u.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
    let [ts, tl] = (0, ei.kn)(ti, eE.m.GUILD_HEADER_TOOLTIPS),
        [ta, tr] = (0, ey.vB)(e2 && e3 && !1 === e1 && !(0, el.ai)(L), eE.m.GUILD_HEADER_TOOLTIPS),
        [to, td] = (0, ei.D8)(
            te ? u.M.BOOST_TO_UNLOCK_COACHMARK : null,
            L,
            { cooldownDurationMs: eb.bW, numTimesToRecur: 5 },
            eE.m.GUILD_HEADER_TOOLTIPS,
        ),
        [tu, tc] = (0, ei.D8)(
            tn ? u.M.EXPIRING_POWERUP_COACHMARK : null,
            L,
            { cooldownDurationMs: eb.mD },
            eE.m.GUILD_HEADER_TOOLTIPS,
        ),
        tA = a.useMemo(
            () =>
                null != ts
                    ? { contentType: ts, data: null, markAsDismissed: tl }
                    : ta === u.M.GAME_SERVER_NEW_GAMES_COACHMARK
                      ? { contentType: ta, data: null, markAsDismissed: tr }
                      : to === u.M.BOOST_TO_UNLOCK_COACHMARK && null != e9
                        ? { contentType: to, data: { featuredPowerup: e9 }, markAsDismissed: td }
                        : tu === u.M.EXPIRING_POWERUP_COACHMARK && null != tt
                          ? { contentType: tu, data: { featuredExpiringPowerup: tt }, markAsDismissed: tc }
                          : null,
            [ts, ta, to, tu, e9, tt, tl, tr, td, tc],
        );
    return (0, l.jsx)(ir, {
        guildId: L,
        hideSelectedChannel: x,
        guild: b,
        scrollToChannel: P,
        selectedChannelId: x ? null : G,
        selectedChannel: eB,
        selectedVoiceChannelId: H,
        voiceStates: y,
        rtcConnectedChannelId: eJ,
        rtcDesyncedVoiceStatesCount: e0,
        isUnavailable: w,
        user: k,
        hasChannelNotice: null != $ || Q,
        anyLayerOpen: J || em || eC,
        showGuildHeaderTutorial: eS,
        showGuildTemplateDirtyTooltip: eR,
        showNewUnreadsBar: eF,
        isHeaderPopoutOpen: ew,
        enableStudyGroup: X,
        isGuildHeaderDismissibleTooltipShown: q,
        canShowCoachMarkAtBottom: W,
        headerAnalyticsLocations: Z,
        isTutorialHighlightDismissed: eq,
        shouldRenderBurstCoachmark: eQ,
        guildHeaderContentDescriptor: tA,
        onFavoriteGuildContextMenu: U,
        hasFavoritesAccess: D,
    });
}
