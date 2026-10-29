(n.r(t), n.d(t, { default: () => iu }), n(321073));
var i,
    s = n(477900),
    l = n(582128),
    a = n(941143),
    r = n(17928),
    o = n(554146),
    d = n(451988),
    u = n(43105),
    c = n(900797),
    A = n(847374),
    h = n(265872),
    E = n(192308),
    m = n(73153),
    g = n(442433),
    I = n(793574),
    C = n(688810),
    _ = n(285059),
    N = n(63995);
n(113783);
var p = n(518769),
    S = n(446600),
    T = n(624265);
n(616356);
var M = n(734057),
    f = n(576705),
    R = n(607567),
    x = n(988794);
let L = { hiddenEventsAndStages: [] };
class D extends r.Ay.PersistedStore {
    static displayName = "LiveChannelNoticesStore";
    static persistKey = "liveChannelNotices_v2";
    initialize(e) {
        null != e && null != e.hiddenEventsAndStages && (L = e);
    }
    isLiveChannelNoticeHidden(e) {
        let { eventId: t, stageId: n } = e;
        return (
            !!(null != n && L.hiddenEventsAndStages.includes(`stage-${n}`)) ||
            (null != t && L.hiddenEventsAndStages.includes(`event-${t}`))
        );
    }
    getState() {
        return L;
    }
}
let O = new D(m.h, {
    LIVE_CHANNEL_NOTICE_HIDE: function (e) {
        let { eventId: t, stageId: n } = e;
        null != t
            ? L.hiddenEventsAndStages.push(`event-${t}`)
            : null != n && L.hiddenEventsAndStages.push(`stage-${n}`);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = `event-${t.id}`;
        L.hiddenEventsAndStages.includes(n) &&
            (t.status === x.XG.CANCELED || t.status === x.XG.COMPLETED) &&
            (L.hiddenEventsAndStages = L.hiddenEventsAndStages.filter((e) => e !== n));
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = `event-${t.id}`;
        L.hiddenEventsAndStages.includes(n) &&
            (L.hiddenEventsAndStages = L.hiddenEventsAndStages.filter((e) => e !== n));
    },
    STAGE_INSTANCE_DELETE: function (e) {
        let { instance: t } = e,
            n = `stage-${t.id}`;
        L.hiddenEventsAndStages.includes(n) &&
            (L.hiddenEventsAndStages = L.hiddenEventsAndStages.filter((e) => e !== n));
    },
});
var G = n(508654);
n(818348);
var b = n(320426),
    U = n(915043),
    y = n(506774),
    H = n(498642),
    P = n(71393),
    v = n(124759),
    j = n(652215);
let B = "publicUpsellChannelNoticeGuilds",
    w = new Set();
class k extends r.Ay.Store {
    static displayName = "EnablePublicGuildUpsellNoticeStore";
    initialize() {
        (this.waitFor(f.A, P.A, H.A), this.syncWith([f.A, P.A, H.A], j.tEg), (w = new Set(y.w.get(B)) ?? new Set()));
    }
    isVisible(e) {
        if (null == e) return;
        let t = H.A.getMemberCount(e.id);
        return (
            !w.has(e.id) &&
            null != t &&
            t >= v.dH &&
            f.A.can(j.xBc.ADMINISTRATOR, e) &&
            !e.features.has(j.GuildFeatures.COMMUNITY)
        );
    }
}
let X = new k(m.h, {
    PUBLIC_UPSELL_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!w.has(t)) return (w.add(t), y.w.set(B, w), !0);
    },
});
var V = n(992250);
let K = { MAX_MEMBER_COUNT: new Set() };
class F extends r.Ay.Store {
    static displayName = "MaxMemberCountChannelNoticeStore";
    initialize() {
        (this.waitFor(f.A, P.A, H.A),
            this.syncWith([f.A, P.A, H.A], j.tEg),
            y.w.remove(j.n5X.MAX_MEMBER_COUNT_100),
            y.w.remove(j.n5X.MAX_MEMBER_COUNT_250),
            (K[j.n5X.MAX_MEMBER_COUNT] = new Set(y.w.get(j.n5X.MAX_MEMBER_COUNT)) ?? new Set()));
    }
    isVisible(e) {
        if (null == e) return !1;
        let t = H.A.getMemberCount(e.id) ?? 0,
            n = f.A.can(j.xBc.ADMINISTRATOR, e);
        return !K[j.n5X.MAX_MEMBER_COUNT].has(e.id) && n && e.maxMembers > 0 && e.maxMembers - t <= 1e4;
    }
}
let W = new F(m.h, {
    MAX_MEMBER_COUNT_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!K[j.n5X.MAX_MEMBER_COUNT].has(t))
            return (K[j.n5X.MAX_MEMBER_COUNT].add(t), y.w.set(j.n5X.MAX_MEMBER_COUNT, K[j.n5X.MAX_MEMBER_COUNT]), !0);
    },
});
var z =
    (((i = {})[(i.ENABLE_PUBLIC_GUILD = 0)] = "ENABLE_PUBLIC_GUILD"),
    (i[(i.MAX_MEMBER_COUNT = 1)] = "MAX_MEMBER_COUNT"),
    (i[(i.GUILD_LIVE_CHANNEL = 2)] = "GUILD_LIVE_CHANNEL"),
    (i[(i.GUILD_MFA_WARNING = 3)] = "GUILD_MFA_WARNING"),
    (i[(i.COMMANDS_MIGRATION = 4)] = "COMMANDS_MIGRATION"),
    (i[(i.APPLICATION_SUBSCRIPTION_EXPIRATION = 5)] = "APPLICATION_SUBSCRIPTION_EXPIRATION"),
    (i[(i.CLAN_UPSELL = 6)] = "CLAN_UPSELL"),
    i);
function Y(e) {
    let t = e?.id ?? j.dJq,
        n = (0, r.bG)([X], () => X.isVisible(e)),
        i = (0, r.bG)([W], () => W.isVisible(e)),
        s = (function (e) {
            let t = (0, T.Ay)(e),
                n = M.A.getChannel(t[0]?.id),
                i = (0, r.bG)([S.A], () => S.A.getStageInstanceByChannel(n?.id), [n]),
                s = (0, G.BP)(e),
                { isStageNoticeHidden: l, isEventNoticeHidden: a } = (0, r.cf)(
                    [O],
                    () => ({
                        isStageNoticeHidden: O.isLiveChannelNoticeHidden({ stageId: i?.id }),
                        isEventNoticeHidden: O.isLiveChannelNoticeHidden({ eventId: s?.id }),
                    }),
                    [i, s],
                );
            if (null != s)
                if (null != i) return !l;
                else return !a;
            return null != i && !l;
        })(t),
        a = (0, r.bG)([V.A], () => V.A.isVisible(e)),
        o = b.A.useShouldShowChannelNotice(t),
        d = (0, U.$s)(e).length > 0,
        u = (0, G.WG)(t);
    if (
        (l.useEffect(() => {
            _.A.getGuildEventsForCurrentUser(t);
        }, [t]),
        n)
    )
        return 0;
    if (i) return 1;
    if (s || null != u) return 2;
    if (a) return 3;
    if (o) return 4;
    else if (d) return 5;
    return null;
}
var q = n(47899),
    Q = n(826673),
    Z = n(131607),
    $ = n(5180),
    J = n(826320),
    ee = n(428784),
    et = n(831617),
    en = n(72152),
    ei = n(877624),
    es = n(549996),
    el = n(49999),
    ea = n(600975);
let er = (0, ea.C)({
    kind: "guild",
    id: "2022-11_default_disable_mass_mention",
    label: "Disable mass mentions for communities by default",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
});
var eo = n(174459),
    ed = n(488926),
    eu = n(45780),
    ec = n(567305),
    eA = n(555325),
    eh = n(469993),
    eE = n(260509),
    em = n(287809),
    eg = n(568185);
let eI = "hasSeenGuildTemplatePromotionTooltip",
    eC = {},
    e_ = !0 === y.w.get(eI);
function eN(e) {
    let { guildId: t } = e;
    eC = { ...eC, [t]: !1 };
}
class ep extends r.Ay.Store {
    static displayName = "GuildTemplateTooltipStore";
    shouldShowGuildTemplateDirtyTooltip(e) {
        return eC[e] ?? !1;
    }
    shouldShowGuildTemplatePromotionTooltip() {
        return !e_;
    }
}
let eS = new ep(m.h, {
    GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH: function (e) {
        let { guildTemplate: t } = e;
        eC = { ...eC, [t.source_guild_id]: t.is_dirty || !1 };
    },
    GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE: function () {
        (y.w.set(eI, !0), (e_ = !0));
    },
    GUILD_TEMPLATE_SYNC_SUCCESS: function (e) {
        eC = { ...eC, [e.guildTemplate.source_guild_id]: !1 };
    },
    GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE: eN,
    GUILD_TEMPLATE_DELETE_SUCCESS: eN,
});
var eT = n(875317),
    eM = n(181880),
    ef = n(285406),
    eR = n(361158),
    ex = n(659092),
    eL = n(379229),
    eD = n(229548),
    eO = n(139032),
    eG = n(128313),
    eb = n(363487),
    eU = n(342220),
    ey = n(383272),
    eH = n(414133),
    eP = n(864310),
    ev = n(972829),
    ej = n(568065),
    eB = n(320989),
    ew = n(728321),
    ek = n(79858),
    eX = n(72314),
    eV = n(919638),
    eK = n(808728),
    eF = n(186111),
    eW = n(584569),
    ez = n(763827),
    eY = n(24482),
    eq = n(885631),
    eQ = n(476041),
    eZ = n(420344),
    e$ = n(206248),
    eJ = n(498470),
    e0 = n(807098),
    e1 = n(637706),
    e3 = n(788883),
    e6 = n(7667);
function e8(e) {
    let { guildId: t, componentId: n, promotionId: i, coachmark: a, targetElementRef: r, markAsDismissed: d } = e,
        { analyticsLocations: u } = (0, C.Ay)(),
        c = (0, e0.T)(a.asset),
        { terms: A } = (0, e6.A)(i),
        h = l.useCallback(() => {
            d(el.i.DISMISS);
        }, [d]),
        E = l.useCallback(() => {
            ((0, eJ.h)({
                buttonAction: a.button?.buttonAction,
                deeplinkSection: a.button?.deeplinkSection,
                applicationId: a.button?.navigableStorefrontApplicationId?.value,
                guildId: t,
                analyticsLocation: { page: j.liQ.GUILD_CHANNEL, section: j.JJy.GUILD_HEADER },
                analyticsLocations: u,
            })(),
                d(el.i.TAKE_ACTION));
        }, [a.button, t, u, d]),
        m = (0, e1.C)(a.helpArticle, ""),
        g = [a.body, A].filter((e) => "" !== e).join(" "),
        { icon: I } = (0, eJ.x)({ buttonAction: a.button?.buttonAction }),
        _ = a.button?.copy ?? "";
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(e3.A, {
                componentType: ei.C.GUILD_HEADER_COACHMARK,
                componentId: n,
                promotionId: i,
                dismissibleContent: o.M.GUILD_HEADER_COACHMARK,
            }),
            (0, s.jsx)(e$.H, {
                targetElementRef: r,
                title: a.header,
                body: g,
                assetUrl: c ?? "",
                disableMediaViewer: !0,
                action: "" !== _ ? { text: _, variant: "primary", icon: I, iconPosition: "start", onClick: E } : void 0,
                textLink: null != m ? { text: m.linkText, link: m.url } : void 0,
                onRequestClose: h,
                position: "bottom",
                caretConfig: { align: "center" },
            }),
        ],
    });
}
var e2 = n(562708),
    e5 = n(702841),
    e7 = n(139286),
    e4 = n(468689),
    e9 = n(105292),
    te = n(330766);
function tt(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e,
        l = (0, e5.bG)([P.A, em.default], () => {
            let e = em.default.getCurrentUser(),
                n = P.A.getGuild(t);
            return null != n && (0, eE.bM)(n, e);
        });
    return (
        (0, e7.A)({
            type: e2.ImpressionTypes.POPOUT,
            name: e2.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
            properties: { guild_id: t, is_owner: l },
        }),
        (0, s.jsx)(u.A, {
            targetElementRef: i,
            title: e9.intl.string(e9.t.C0m4rQ),
            body: e9.intl.string(e9.t.zOHfEX),
            graphic: { type: "image", src: te },
            actions: [
                {
                    text: e9.intl.string(e9.t.OgQQbG),
                    variant: "primary",
                    onClick: function () {
                        e4.A.open(t, j.BEX.ROLE_SUBSCRIPTIONS);
                    },
                },
            ],
            onRequestClose: () => n(el.i.USER_DISMISS),
            position: "bottom",
            caretConfig: { align: "center" },
        })
    );
}
function tn(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, s.jsx)(e$.H, {
        targetElementRef: i,
        title: e9.intl.string(e9.t.gCgirr),
        body: e9.intl.string(e9.t.fLMZFw),
        assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
        action: {
            text: e9.intl.string(e9.t.BQq86h),
            variant: "primary",
            onClick: function () {
                e4.A.open(t, j.BEX.ROLE_SUBSCRIPTIONS, void 0, j.nd0.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
            },
        },
        onRequestClose: () => n(el.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
var ti = n(834730),
    ts = n(821609),
    tl = n(736759);
function ta(e) {
    let { markAsDismissed: t } = e;
    return (0, s.jsxs)("div", {
        className: tl.kL,
        children: [
            (0, s.jsx)("div", { className: tl.Wn }),
            (0, s.jsx)(ti.E, { variant: "text-sm/normal", className: tl.Qs, children: e9.intl.string(e9.t.rdzeVP) }),
            (0, s.jsx)(ts.$, {
                variant: "overlay-primary",
                text: e9.intl.string(e9.t["NX+WJN"]),
                fullWidth: !0,
                onClick: function () {
                    t(el.i.AUTO);
                },
            }),
        ],
    });
}
var tr = n(696943);
function to(e) {
    let { guild: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, s.jsx)(u.A, {
        targetElementRef: i,
        title: e9.intl.string(e9.t.Hgd22r),
        body: e9.intl.string(e9.t.SorTPA),
        graphic: { type: "image", src: "/assets/d611c6cf03ca4eff.svg" },
        actions: [
            {
                text: e9.intl.string(e9.t["9l+df7"]),
                variant: "primary",
                onClick: function (e) {
                    e4.A.open(t.id, j.BEX.DISCOVERY_LANDING_PAGE);
                },
            },
        ],
        onRequestClose: () => n(el.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
function td(e) {
    let { renderPopout: t, renderGuildHeaderDropdownButton: n } = e,
        i = l.useRef(null);
    return (0, s.jsx)(h.Y, {
        targetElementRef: i,
        renderPopout: () =>
            (0, s.jsx)("div", {
                onClick: (e) => e.stopPropagation(),
                onKeyPress: (e) => e.stopPropagation(),
                children: "function" == typeof t ? t(i) : t,
            }),
        position: "bottom",
        align: "center",
        animation: h.Y.Animation.TRANSLATE,
        shouldShow: !0,
        children: () => (0, s.jsx)("div", { ref: i, children: n() }),
    });
}
let tu = l.memo(function (e) {
    let { contentDescriptor: t, guild: n, renderGuildHeaderDropdownButton: i } = e,
        { contentType: l, data: a, markAsDismissed: r } = t,
        d = { position: "bottom", align: "center", caretConfig: { align: "center" } };
    return (0, s.jsx)(s.Fragment, {
        children: (function () {
            switch (l) {
                case o.M.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, s.jsx)(td, {
                        renderPopout: (e) =>
                            (0, s.jsx)(tr.UB, { guildId: n.id, markAsDismissed: r, channelRowRef: e, ...d }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case o.M.GAME_SERVER_NEW_GAMES_COACHMARK:
                    return (0, s.jsx)(td, {
                        renderPopout: (e) =>
                            (0, s.jsx)(tr.YX, { guildId: n.id, markAsDismissed: r, channelRowRef: e, ...d }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case o.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK:
                    return (0, s.jsx)(td, {
                        renderPopout: (e) => (0, s.jsx)(tr.K8, { guildId: n.id, markAsDismissed: r, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case o.M.GUILD_THEME_MEMBER_COACHMARK:
                    return (0, s.jsx)(td, {
                        renderPopout: (e) => (0, s.jsx)(tr.Gz, { guildId: n.id, markAsDismissed: r, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case o.M.BOOST_TO_UNLOCK_COACHMARK: {
                    let e = a?.featuredPowerup;
                    if (null == e) return i();
                    return (0, s.jsx)(td, {
                        renderPopout: (t) =>
                            (0, s.jsx)(tr.Gw, {
                                type: eL.o.BOOST_TO_UNLOCK,
                                guildId: n.id,
                                powerup: e,
                                markAsDismissed: r,
                                channelRowRef: t,
                                ...d,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                }
                case o.M.EXPIRING_POWERUP_COACHMARK: {
                    let e = a?.featuredExpiringPowerup;
                    if (null == e) return i();
                    return (0, s.jsx)(td, {
                        renderPopout: (t) =>
                            (0, s.jsx)(tr.Mr, {
                                type: eL.o.EXPIRING_PERK,
                                guildId: n.id,
                                featuredExpiringPowerup: e,
                                markAsDismissed: r,
                                channelRowRef: t,
                                ...d,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                }
                case o.M.GUILD_HEADER_COACHMARK: {
                    let e = a?.marketingComponent;
                    if (null == e) return i();
                    return (0, s.jsx)(td, {
                        renderPopout: (t) =>
                            (0, s.jsx)(e8, {
                                guildId: n.id,
                                componentId: e.componentId,
                                promotionId: e.promotionId,
                                coachmark: e.coachmark,
                                targetElementRef: t,
                                markAsDismissed: r,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                }
                case o.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                    return (0, s.jsx)(td, {
                        renderPopout: (e) => (0, s.jsx)(tt, { guildId: n.id, markAsDismissed: r, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case o.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, s.jsx)(td, {
                        renderPopout: (e) => (0, s.jsx)(to, { guild: n, markAsDismissed: r, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, s.jsx)(td, {
                        renderPopout: (0, s.jsx)(ta, { markAsDismissed: r }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case o.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, s.jsx)(td, {
                        renderPopout: (e) => (0, s.jsx)(tn, { guildId: n.id, markAsDismissed: r, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                default:
                    return i();
            }
        })(),
    });
});
var tc = n(256787),
    tA = n(158390),
    th = n(636537),
    tE = n(927813);
let tm = null;
class tg extends r.Ay.Store {
    static displayName = "UnclaimedGamesStore";
    getMap() {
        return tm;
    }
    getUnclaimedGameIdsForGuild(e) {
        return tm?.[e] ?? [];
    }
    hasUnclaimedGames(e) {
        let t = tm?.[e];
        return null != t && t.length > 0;
    }
    getGuildIdsWithUnclaimedGames() {
        if (null == tm) return [];
        let e = tm;
        return Object.keys(e).filter((t) => (e[t] ?? []).length > 0);
    }
}
let tI = new tg(m.h, {
        LOGOUT: function () {
            tm = null;
        },
        UNCLAIMED_GAMES_FETCH_SUCCESS: function (e) {
            let { guildIdToGameIds: t } = e;
            tm = t;
        },
    }),
    tC = [];
async function t_() {
    let { body: e } = await th.Bo.get({ url: j.Rsh.UNCLAIMED_GAMES, oldFormErrors: !0, rejectWithError: !1 });
    m.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH_SUCCESS", guildIdToGameIds: e });
}
let tN = (0, r.UT)(tI, {
    getQueryId: (e) => (e ? "unclaimed-games" : null),
    get: () => tI.getMap(),
    load: () => t_(),
    staleAfter: tE.A.Seconds.DAY,
    retryConfig: { backoff: () => new tA.A(5 * tE.A.Millis.MINUTE), maxRetries: 10 },
});
function tp(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { data: n } = tN(t);
    return n?.[e] ?? tC;
}
let tS = (0, ea.C)({
    kind: "guild",
    id: "2026-02_game_claim_coachmark",
    label: "Game Claim Coachmark",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Game Claim Coachmark", config: { enabled: !0 } }],
});
var tT = n(509434),
    tM = n(975807),
    tf = n(435558),
    tR = n.n(tf),
    tx = n(862482),
    tL = n(939249),
    tD = n(789645),
    tO = n(297264),
    tG = n(666860),
    tb = n(446406);
let tU = tR().debounce(tG.Ay.trackWithMetadata, 500),
    ty = function (e) {
        let {
            guild: t,
            title: n,
            message: i,
            image: a,
            type: r,
            imageMarginX: o,
            imageMarginTop: d,
            trackingSource: u,
            undismissable: c,
            onDismissed: A,
            onClick: h,
            cta: E,
            ctaColor: m,
        } = e;
        l.useEffect(() => {
            tU(j.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: r, guild_id: t.id });
        }, [t.id, r]);
        let g = null;
        "function" == typeof E
            ? (g = E())
            : null != E &&
              (g = (0, s.jsx)(tx.$n, {
                  "data-migration-pending": !0,
                  className: tb.HM,
                  size: tx.$n.Sizes.SMALL,
                  onClick: function () {
                      (null != r &&
                          eo.default.track(j.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: u,
                              guild_id: t.id,
                              notice_type: r,
                          }),
                          h?.());
                  },
                  fullWidth: !0,
                  color: m,
                  children: E,
              }));
        let I = null != o ? `${o}px` : "16px";
        return (0, s.jsxs)("div", {
            className: tb.kX,
            children: [
                !0 === c
                    ? null
                    : (0, s.jsx)(tL.D, {
                          onClick: function () {
                              (tG.Ay.trackWithMetadata(j.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: r }), A?.());
                          },
                          className: tb.VN,
                          "aria-label": e9.intl.string(e9.t.WAI6xu),
                          children: (0, s.jsx)(tD.P, { size: "md", color: "currentColor", className: tb.ut }),
                      }),
                null != a &&
                    (0, s.jsx)("div", {
                        className: tb.ZS,
                        style: { marginTop: `${d}px`, marginLeft: I, marginRight: I },
                        children: "string" == typeof a ? (0, s.jsx)("img", { className: tb.Sl, src: a, alt: "" }) : a,
                    }),
                (0, s.jsxs)("div", {
                    className: tb.iU,
                    children: [
                        null != n
                            ? (0, s.jsx)(tO.D, { variant: "heading-md/semibold", className: tb.DD, children: n })
                            : null,
                        (0, s.jsx)(ti.E, { variant: "text-sm/normal", children: i }),
                        g,
                    ],
                }),
            ],
        });
    };
var tH = n(201438),
    tP = n(194362),
    tv = n(661531),
    tj = n(307301),
    tB = n(701115);
function tw(e) {
    let { imageSrc: t } = e;
    return (0, s.jsxs)("div", {
        className: tB.kL,
        children: [
            (0, s.jsx)("div", { className: tB.j3, children: (0, s.jsx)("img", { className: tB.Su, src: t, alt: "" }) }),
            (0, s.jsx)("div", {
                className: tB.gm,
                children: (0, s.jsx)("div", {
                    className: tB.WA,
                    children: (0, s.jsx)(tj.j, { size: "sm", color: tv.A.colors.TEXT_BRAND }),
                }),
            }),
        ],
    });
}
var tk = n(63142);
function tX(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = tp(t.id)[0] ?? null,
        { coverImageUrl: l, gameName: a } = (0, tH.A)(i, e9.intl.string(e9.t.VQq92a));
    if (null == l) return null;
    let r = t.features.has(j.GuildFeatures.VERIFIED) ? e9.intl.string(e9.t.uUARXe) : e9.intl.string(e9.t["0Dx29f"]);
    return (0, s.jsx)(ty, {
        guild: t,
        onDismissed: () => n(el.i.USER_DISMISS),
        title: e9.intl.format(e9.t.Q11WTQ, { gameName: a }),
        message: r,
        cta: (0, s.jsxs)("span", {
            className: tk.m,
            children: [e9.intl.string(e9.t["2u6ZlY"]), (0, s.jsx)(tT.I, { size: "xs", color: "currentColor" })],
        }),
        type: j.n5X.GAME_CLAIM,
        image: (0, s.jsx)(tw, { imageSrc: l }),
        imageMarginX: 60,
        onClick: async () => {
            n(el.i.TAKE_ACTION);
            let e = await (0, tP.a)(j.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tM.A)(e);
        },
    });
}
var tV = n(631305),
    tK = n(473145),
    tF = n(625633);
function tW(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = (0, tK.Os)(t, j.TVA.TIER_2),
        { analyticsLocations: l } = (0, C.Ay)(I.A.GUILD_BANNER_NOTICE);
    return (0, s.jsx)(ty, {
        guild: t,
        onDismissed: () => n(el.i.UNKNOWN),
        cta: e9.intl.string(e9.t.oPAx73),
        message: e9.intl.format(e9.t.AcaNYw, { boostsNeeded: i }),
        type: j.n5X.GUILD_BANNER,
        image: "/assets/f7ead7c3a969ed19.png",
        onClick: () =>
            (0, tV.A)({
                analyticsLocations: l,
                analyticsSourceLocation: { section: j.JJy.CHANNEL_NOTICE, object: j.ZSU.SERVER_BANNER_TOOLTIP },
                guild: t,
                perks: (0, tF.QR)(),
            }),
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var tz = n(464120);
class tY extends l.PureComponent {
    handleButtonClick = () => {
        let { guild: e } = this.props;
        (0, tz.K4)({ guildId: e.id, location: { section: j.JJy.CHANNEL_NOTICE, object: j.ZSU.SERVER_STATUS_CTA } });
    };
    render() {
        let { guild: e, memberCount: t, markAsDismissed: n } = this.props;
        return (0, s.jsx)(ty, {
            guild: e,
            onDismissed: () => n(el.i.USER_DISMISS),
            onClick: this.handleButtonClick,
            message: null == t || t < 30 ? e9.intl.string(e9.t.hlitVQ) : e9.intl.string(e9.t.XHtaDD),
            cta: e9.intl.string(e9.t["vqb+H1"]),
            trackingSource: j.kZU.GUILD_SUBSCRIPTION_NOTICE,
            type: j.n5X.GUILD_BOOSTING,
            image: "/assets/9b7fadd75ade640d.svg",
            imageMarginX: 26,
        });
    }
}
let tq = r.Ay.connectStores([H.A], (e) => {
    let { guild: t } = e;
    return { memberCount: H.A.getMemberCount(t.id) };
})(tY);
var tQ = n(503698),
    tZ = n.n(tQ),
    t$ = n(933832),
    tJ = n(782603),
    t0 = n(81466),
    t1 = n(116085),
    t3 = n(597601),
    t6 = n(451394),
    t8 = n(104171),
    t2 = n(47167),
    t5 = n(713654),
    t7 = n(976860),
    t4 = n(747376),
    t9 = n(110618),
    ne = n(280450),
    nt = n(309010),
    nn = n(312006),
    ni = n(403362),
    ns = n(707592),
    nl = n(698441),
    na = n(935159),
    nr = n(11550),
    no = n(435328),
    nd = n(563312),
    nu = n(9448),
    nc = n(974930),
    nA = n(666394),
    nh = n(659463);
let nE = l.memo(function (e) {
    let {
        heading: t,
        location: n,
        locationIcon: i,
        details: l,
        detailsIcon: a,
        topic: r,
        onClickCloseIcon: o,
        children: d,
    } = e;
    return (0, s.jsxs)("div", {
        className: nh.kX,
        children: [
            (0, s.jsxs)("div", {
                className: tZ()(nh.fI, nh.pF),
                children: [
                    (0, s.jsx)("div", { className: nh.Ok }),
                    (0, s.jsx)(ti.E, {
                        color: "text-feedback-positive",
                        variant: "text-xs/semibold",
                        className: nh.U4,
                        children: t,
                    }),
                    null != o &&
                        (0, s.jsx)(tL.D, {
                            onClick: o,
                            className: nh.ut,
                            "aria-label": e9.intl.string(e9.t.cpT0Cq),
                            children: (0, s.jsx)(tD.P, { size: "xs", color: "currentColor" }),
                        }),
                ],
            }),
            (0, s.jsx)(tO.D, { color: "text-strong", variant: "heading-md/semibold", className: nh.eq, children: r }),
            (0, s.jsxs)("div", {
                className: tZ()(nh.fI, nh.pF),
                children: [
                    i,
                    (0, s.jsx)(ti.E, { color: "none", variant: "text-xs/normal", className: nh.HA, children: n }),
                    null != l &&
                        null != a &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)(ti.E, {
                                    className: nh.hY,
                                    color: "none",
                                    variant: "text-xs/normal",
                                    children: "\u2022",
                                }),
                                a,
                                (0, s.jsx)(ti.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: nh.zH,
                                    children: l,
                                }),
                            ],
                        }),
                ],
            }),
            d,
        ],
    });
});
function nm(e) {
    let { guildEvent: t, channel: n } = e,
        i = (0, t2.Ay)(n),
        l = (0, r.yK)(
            [R.Ay],
            () =>
                R.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        a = (0, t5.gU)(n);
    return (0, s.jsx)(nE, {
        onClickCloseIcon: () => (0, na.iF)({ eventId: t?.id }),
        heading: e9.intl.string(e9.t["X2K3/4"]),
        topic: t.name,
        location: i,
        locationIcon: null != a ? (0, s.jsx)(a, { size: "xs", color: "currentColor", className: nh.uE }) : null,
        children: (0, s.jsx)(nS, { channel: n, speakers: l, voiceType: 1 }),
    });
}
function ng(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, nc.G3)(t),
        l = (0, r.bG)([nl.Ay], () => nl.Ay.isInterestedInEventRecurrence(t.id, i), [t.id, i]),
        a = (0, r.bG)([nr.A], () => nr.A.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return (
        l || null != a || (0, na.pE)(t.id),
        (0, s.jsx)(ts.$, {
            onClick: function () {
                ((0, nA.A)(t.id, null, t.guild_id, () => setTimeout(() => (0, na.Lx)(t.id), 1e3)),
                    eo.default.track(j.HAw.CHANNEL_NOTICE_CTA_CLICKED, { guild_id: t.guild_id, notice_type: n }));
            },
            text: e9.intl.string(e9.t.DlcqlU),
            icon: l ? t$.CheckmarkLargeIcon : tJ.BellIcon,
            variant: l ? "secondary" : "primary",
            size: "sm",
            fullWidth: !0,
        })
    );
}
function nI(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, nu.oF)(t),
        a = null != i ? (0, no.y)(i, !0) : null,
        r = (0, nu.WN)(t),
        o = (0, t2.Ay)(r),
        d = (0, t5.gU)(r),
        { startTime: u, endTime: c } = (0, nd.Ay)(t),
        { startDateTimeString: A, upcomingEvent: h, diffMinutes: E } = (0, nc.CC)(u.toISOString(), c?.toISOString()),
        m = h
            ? E > 0
                ? e9.intl.formatToPlainString(e9.t.PQlCWk, { minutes: E })
                : e9.intl.string(e9.t.WINqKV)
            : e9.intl.formatToPlainString(e9.t.DC6h3G, { date: A });
    return (
        l.useEffect(() => {
            eo.default.track(j.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: n, guild_id: t.guild_id });
        }, [t, n]),
        (0, s.jsxs)("div", {
            className: nh.kX,
            children: [
                (0, s.jsxs)("div", {
                    className: nh.fI,
                    children: [
                        (0, s.jsx)(tL.D, {
                            onClick: () => (0, ns.uR)({ eventId: t.id }),
                            className: nh.oP,
                            children: (0, s.jsx)(ti.E, {
                                color: "text-strong",
                                variant: "text-md/semibold",
                                className: nh.eq,
                                children: t.name,
                            }),
                        }),
                        (0, s.jsx)(tL.D, {
                            onClick: () => {
                                (eo.default.track(j.HAw.CHANNEL_NOTICE_CLOSED, {
                                    notice_type: n,
                                    guild_id: t.guild_id,
                                }),
                                    (0, na.Lx)(t.id));
                            },
                            className: nh.ut,
                            "aria-label": e9.intl.string(e9.t.cpT0Cq),
                            children: (0, s.jsx)(tD.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: tZ()(nh.fI, nh.pF),
                    children: [
                        (0, s.jsx)(t0.CalendarIcon, {
                            size: "custom",
                            color: "currentColor",
                            className: nh.uE,
                            width: 16,
                            height: 16,
                        }),
                        (0, s.jsx)(ti.E, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            className: nh.Sv,
                            children: m,
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: tZ()(nh.fI, nh.pF),
                    children: [
                        null != d
                            ? (0, s.jsx)(d, { size: "xs", color: "currentColor", className: nh.uE })
                            : (0, s.jsx)(t1.B, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 16,
                                  height: 16,
                                  className: nh.uE,
                              }),
                        (0, s.jsx)(ti.E, {
                            color: "none",
                            variant: "text-xs/normal",
                            className: nh.HA,
                            children: o ?? a,
                        }),
                    ],
                }),
                (0, s.jsx)(ng, { guildEvent: t, noticeType: n }),
            ],
        })
    );
}
function nC(e) {
    let { guildEvent: t } = e,
        n = (0, nu.oF)(t);
    return null == n
        ? null
        : (0, s.jsx)(nE, {
              onClickCloseIcon: () => (0, na.iF)({ eventId: t?.id }),
              heading: e9.intl.string(e9.t["1+boPi"]),
              topic: t.name,
              location: (0, no.y)(n, !0),
              locationIcon: (0, s.jsx)(t1.B, {
                  size: "custom",
                  color: "currentColor",
                  width: 16,
                  height: 16,
                  className: nh.uE,
              }),
              children: (0, s.jsx)(n_, { guildEvent: t }),
          });
}
function n_(e) {
    let { guildEvent: t } = e,
        n = l.useCallback(() => {
            (0, ns.uR)({ eventId: t.id });
        }, [t]);
    return (0, s.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: nh.PD,
        children: (0, s.jsx)(ts.$, {
            variant: "active",
            size: "sm",
            text: e9.intl.string(e9.t.z4FcDs),
            fullWidth: !0,
            onClick: n,
        }),
    });
}
function nN(e) {
    let { channel: t, label: n } = e;
    return (0, s.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: nh.PD,
        children: (0, s.jsx)(ts.$, {
            variant: "active",
            size: "sm",
            text: n,
            fullWidth: !0,
            onClick: function () {
                null != t && null != t.getGuildId() && ((0, t4.av)(t), (0, t7.uh)(t.getGuildId(), t.id));
            },
        }),
    });
}
function np(e) {
    let { stageInstance: t, channel: n } = e,
        i = (0, t2.Ay)(n),
        l = (0, r.yK)([N.A], () => [...new Set(N.A.getMutableParticipants(n.id, p.ip.SPEAKER).map((e) => e.user))], [
            n.id,
        ]),
        a = (0, r.bG)([N.A], () => N.A.getParticipantCount(n.id, p.ip.AUDIENCE), [n.id]),
        o = e9.intl.formatToPlainString(e9.t["+v2pN2"], { count: `${a}` });
    return (0, s.jsx)(nE, {
        onClickCloseIcon: () => (0, na.iF)({ stageId: t?.id }),
        heading: e9.intl.string(e9.t["X2K3/4"]),
        location: i,
        details: o,
        detailsIcon: (0, s.jsx)(t3.L, {
            size: "custom",
            color: "currentColor",
            width: 14,
            height: 14,
            className: nh.uE,
        }),
        locationIcon: (0, s.jsx)(t6.q, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: nh.uE,
        }),
        topic: t.topic,
        children: (0, s.jsx)(nS, { channel: n, speakers: l, voiceType: 2 }),
    });
}
function nS(e) {
    var t;
    let { channel: n, speakers: i, voiceType: a } = e,
        o = n.getGuildId(),
        d = l.useMemo(() => i.slice(0, 3), [i]),
        u = (0, r.bG)([f.A], () => f.A.can(j.xBc.CONNECT, n)),
        c =
            ((t = n.id),
            (0, r.bG)(
                [ne.default, nt.Ay, nn.Ay],
                () => {
                    let e = ne.default.getId();
                    return nt.Ay.getVoiceChannelId() === t ? nn.Ay.getPermissionsForUser(e, t) : null;
                },
                [t],
            )),
        A = e9.intl.string(e9.t.VJlc0S);
    switch (a) {
        case 1:
            A = e9.intl.string(e9.t.VJlc0S);
            break;
        case 2:
            ((A = e9.intl.string(e9.t.ZYO5OK)),
                c?.speaker ? (A = e9.intl.string(e9.t["/cnSFc"])) : null != c && (A = e9.intl.string(e9.t.btSGOj)));
            break;
        case 3:
            A = e9.intl.string(e9.t.wBoE6L);
            break;
        default:
            (0, ni.xb)(a);
    }
    return null == o
        ? null
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  d.length > 0
                      ? (0, s.jsxs)("div", {
                            className: tZ()(nh.fI, nh.pF),
                            children: [
                                (0, s.jsx)(t8.Ay, { guildId: o, users: d, showUserPopout: !0, size: t8.DN.SIZE_16 }),
                                (0, s.jsx)(ti.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: nh.c8,
                                    children: (0, t9.c)(o, d, n?.id, i.length),
                                }),
                            ],
                        })
                      : null,
                  u && null == c && (0, s.jsx)(nN, { channel: n, label: A }),
              ],
          });
}
let nT = l.memo(function (e) {
    var t;
    let n,
        i,
        l,
        { guild: a } = e,
        o = ((t = a.id), (n = (0, G.r2)(t)), (i = (0, T.Ay)(t)), (l = M.A.getChannel(i[0]?.id)), n ?? l),
        d = (0, G.BP)(a.id),
        u = (0, G.WG)(a.id),
        c = (0, r.bG)([S.A], () => S.A.getStageInstanceByChannel(o?.id), [o]),
        { isStageNoticeHidden: A, isEventNoticeHidden: h } = (0, r.cf)(
            [O],
            () => ({
                isStageNoticeHidden: O.isLiveChannelNoticeHidden({ stageId: c?.id }),
                isEventNoticeHidden: O.isLiveChannelNoticeHidden({ eventId: d?.id }),
            }),
            [c, d],
        ),
        E = null,
        m = null != c && null != o && !A;
    null == d || h
        ? m && (E = (0, s.jsx)(np, { stageInstance: c, channel: o }))
        : d.entity_type === x.Ps.STAGE_INSTANCE && m
          ? (E = (0, s.jsx)(np, { stageInstance: c, channel: o }))
          : d.entity_type === x.Ps.EXTERNAL
            ? (E = (0, s.jsx)(nC, { guildEvent: d }))
            : d.entity_type === x.Ps.VOICE && null != o && (E = (0, s.jsx)(nm, { guildEvent: d, channel: o }));
    let g = a.features.has(j.GuildFeatures.COMMUNITY);
    if (null == E && null != u && !g) {
        let { upcomingEvent: e, noticeType: t } = u;
        E = (0, s.jsx)(nI, { guildEvent: e, noticeType: t });
    }
    return E;
});
var nM = n(62617);
function nf(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: a, width: r, height: o, className: d, style: u } = e,
        c = l.useMemo(
            () => (0, nM.H)({ width: r, height: o, intrinsicWidth: 288, intrinsicHeight: 162, style: u }),
            [r, o, u],
        );
    return (0, s.jsx)("img", {
        style: c,
        src: "https://cdn.discordapp.com/assets/content/22b530628b0360931343feee81e79f9e43c02bf07c24cb4ee9f657b3ec8a0e6c.svg",
        className: (0, nM.Z)(d),
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
var nR = n(863888);
function nx(e) {
    let { guild: t, markAsDismissed: i } = e;
    return (0, s.jsx)(ty, {
        guild: t,
        onDismissed: () => i(el.i.UNKNOWN),
        onClick: function () {
            (0, E.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("144909"),
                    n.e("197804"),
                    n.e("807265"),
                    n.e("797641"),
                    n.e("890496"),
                ]).then(n.bind(n, 401155));
                return (t) => (0, s.jsx)(e, { ...t });
            });
        },
        message: e9.intl.string(e9.t["1+hiP6"]),
        cta: e9.intl.string(e9.t.hvVgAZ),
        trackingSource: j.kZU.HUB_LINK_NOTICE,
        type: j.n5X.HUB_LINK,
        image: (0, s.jsx)("div", { className: nR.b, children: (0, s.jsx)(nf, { alt: "", ariaHidden: !0 }) }),
    });
}
function nL(e) {
    let { guild: t } = e;
    function n() {
        return b.A.dismissNotice(t.id);
    }
    return (0, s.jsx)(ty, {
        guild: t,
        onDismissed: n,
        cta: e9.intl.string(e9.t.RzWDqY),
        message: e9.intl.format(e9.t["kQ/MDl"], {}),
        type: j.n5X.COMMANDS_MIGRATION,
        image: "/assets/ab63b30e9bc8855c.svg",
        onClick: () => {
            (n(), e4.A.open(t.id, j.BEX.INTEGRATIONS));
        },
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var nD = n(587895),
    nO = n(143582);
function nG(e) {
    let t,
        { guild: n } = e,
        i = (0, U.$s)(n);
    function a() {
        return (0, nO.Hc)(n.id);
    }
    let o = l.useMemo(() => new Set(i.map((e) => e.applicationId)), [i]),
        d = (0, r.yK)(
            [nD.A],
            () => {
                let e = [];
                for (let t of o) {
                    let n = nD.A.getApplication(t);
                    null != n && e.push(n);
                }
                return e;
            },
            [o],
        );
    return 0 === d.length
        ? null
        : ((t =
              1 === d.length
                  ? e9.intl.formatToPlainString(e9.t["Egq+G/"], { a: d[0].name })
                  : 2 === d.length
                    ? e9.intl.formatToPlainString(e9.t.LxU9R3, { a: d[0].name, b: d[1].name })
                    : 3 === d.length
                      ? e9.intl.formatToPlainString(e9.t.crKXMC, { a: d[0].name, b: d[1].name, c: d[2].name })
                      : e9.intl.string(e9.t.MvfowF)),
          (0, s.jsx)(ty, {
              guild: n,
              onDismissed: a,
              message: t,
              type: j.n5X.APPLICATION_SUBSCRIPTION_EXPIRATION,
              image: "/assets/eaaec668caed688e.svg",
              onClick: () => {
                  (a(), e4.A.open(n.id, j.BEX.INTEGRATIONS));
              },
              imageMarginTop: 6,
              imageMarginX: 46,
              cta: e9.intl.string(e9.t.Rr3MAe),
          }));
}
function nb(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: a, width: r, height: o, className: d, style: u } = e,
        c = l.useMemo(
            () => (0, nM.H)({ width: r, height: o, intrinsicWidth: 288, intrinsicHeight: 123, style: u }),
            [r, o, u],
        );
    return (0, s.jsx)("img", {
        style: c,
        src: "https://cdn.discordapp.com/assets/content/5eaa226d911a51611c1b456eb404180953cb0c515bc70e9b09fa5f10d8383a94.svg",
        className: (0, nM.Z)(d),
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
let nU = function (e) {
    let { guild: t } = e,
        n = l.useCallback(() => {
            var e;
            ((e = t.id), m.h.dispatch({ type: "PUBLIC_UPSELL_NOTICE_DISMISS", guildId: e }));
        }, [t.id]);
    return (0, s.jsx)(ty, {
        guild: t,
        onDismissed: n,
        onClick: () => e4.A.open(t.id, j.BEX.COMMUNITY),
        message: e9.intl.string(e9.t["2klD0Z"]),
        trackingSource: j.kZU.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
        type: j.n5X.PUBLIC_UPSELL,
        image: (0, s.jsx)(nb, { alt: "", ariaHidden: !0, width: "100%" }),
        cta: e9.intl.string(e9.t.hvVgAZ),
    });
};
var ny = n(536194),
    nH = n(780964),
    nP = n(766075);
class nv extends l.PureComponent {
    render() {
        return (0, s.jsx)(ty, {
            guild: this.props.guild,
            onClick: () => (0, nP.openUserSettings)(nH.X.ACCOUNT_PANEL),
            message: e9.intl.format(e9.t["oCd+at"], {}),
            cta: e9.intl.string(e9.t["8dCrV9"]),
            trackingSource: j.kZU.GUILD_MFA_WARNING,
            type: j.n5X.MFA_WARNING,
            image: "/assets/74690dbe995fcda0.svg",
            imageMarginX: 54,
            undismissable: !0,
        });
    }
}
function nj(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: a, width: r, height: o, className: d, style: u } = e,
        c = l.useMemo(
            () => (0, nM.H)({ width: r, height: o, intrinsicWidth: 288, intrinsicHeight: 192, style: u }),
            [r, o, u],
        );
    return (0, s.jsx)("img", {
        style: c,
        src: "https://cdn.discordapp.com/assets/content/dc82534138c63ce764672d1e10188ceb29febbcf73dad31c313f8a4b41dcff96.svg",
        className: (0, nM.Z)(d),
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
var nB = n(148494),
    nw = n(476952);
class nk extends l.PureComponent {
    handleInvite = () => {
        let { guild: e } = this.props;
        (0, E.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("683621"),
                n.e("711162"),
                n.e("159957"),
                n.e("728136"),
                n.e("216084"),
                n.e("284819"),
            ]).then(n.bind(n, 405342));
            return (n) => (0, s.jsx)(t, { ...n, guild: e, source: j.PE1.INVITE_NOTICE });
        });
    };
    handleClose = () => {
        let e = nt.Ay.getChannelId(),
            t = e9.intl.formatToPlainString(e9.t.DEn7nu, { invitePeople: e9.intl.string(e9.t.Sd8Ixw) });
        (this.props.markAsDismissed(el.i.UNKNOWN), null != e && nB.A.sendBotMessage(e, t));
    };
    render() {
        let e = `${e9.intl.string(e9.t.VWqWZQ)}
${e9.intl.string(e9.t["0Lgb/K"])}`;
        return (0, s.jsx)(ty, {
            guild: this.props.guild,
            onDismissed: this.handleClose,
            onClick: this.handleInvite,
            message: e,
            cta: e9.intl.string(e9.t.Sd8Ixw),
            trackingSource: j.kZU.INVITE_NOTICE,
            type: j.n5X.INVITE,
            image: (0, s.jsx)("div", {
                className: nw.b,
                children: (0, s.jsx)(nj, { alt: "", ariaHidden: !0, width: 126, height: 84 }),
            }),
            imageMarginX: 46,
        });
    }
}
var nX = n(975571);
let nV = function (e) {
    let { guild: t } = e,
        n = l.useCallback(() => {
            var e;
            ((e = t.id), m.h.dispatch({ type: "MAX_MEMBER_COUNT_NOTICE_DISMISS", guildId: e }));
        }, [t.id]);
    return (0, s.jsx)(ty, {
        guild: t,
        onDismissed: n,
        message: e9.intl.format(e9.t["+QqO3U"], {
            maxMemberCount: t.maxMembers,
            maxMembersUrl: nX.A.getArticleURL(j.MVz.MAX_MEMBERS),
        }),
        type: j.n5X.MAX_MEMBER_COUNT,
        image: "/assets/5cc728db4badfc0e.svg",
        imageMarginX: 61,
    });
};
var nK = n(475358),
    nF = n(675704),
    nW = n(793322);
let nz = function (e) {
    let t = (0, s.jsx)(nK.e, { shortcut: nF.R.binds["0"], keyClassName: tb.Eb });
    return (0, s.jsx)(ty, {
        guild: e.guild,
        onDismissed: () => e.markAsDismissed(el.i.UNKNOWN),
        onClick: () => (0, nW.WU)("CHANNEL_NOTICE"),
        message: e9.intl.string(e9.t.Qhk8cs),
        cta: t,
        trackingSource: j.kZU.QUICK_SWITCHER_NOTICE,
        type: j.n5X.QUICKSWITCHER,
        image: "/assets/1b763dab67be227b.svg",
        imageMarginX: 50,
    });
};
var nY = n(174768);
class nq extends r.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        (this.waitFor(P.A), this.syncWith([P.A], j.tEg));
    }
    channelNoticePredicate(e, t) {
        return !e.features.has(j.GuildFeatures.BANNER) && Date.now() - t >= j.D2K;
    }
}
let nQ = new nq(m.h);
class nZ extends r.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        (this.waitFor(f.A), this.syncWith([f.A], j.tEg));
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= j.D2K && f.A.can(j.xBc.MANAGE_GUILD, e);
    }
}
let n$ = new nZ(m.h);
var nJ = n(731667);
function n0() {
    return !0;
}
class n1 extends r.Ay.Store {
    static displayName = "InviteNoticeStore";
    initialize() {
        (this.waitFor(f.A), this.syncWith([f.A], n0));
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= j.D2K && f.A.can(j.xBc.ADMINISTRATOR, e);
    }
}
let n3 = new n1(m.h),
    n6 = "lastHiddenChannelNotice",
    n8 = [
        {
            type: j.n5X.GUILD_BOOSTING,
            store: n$,
            dismissibleContentType: o.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION,
        },
        { type: j.n5X.GUILD_BANNER, store: nQ, dismissibleContentType: o.M.CHANNEL_NOTICE_GUILD_BANNER },
        { type: j.n5X.INVITE, store: n3, dismissibleContentType: o.M.CHANNEL_NOTICE_INVITE },
        { type: j.n5X.HUB_LINK, store: nJ.A, dismissibleContentType: o.M.CHANNEL_NOTICE_HUBLINK },
        { type: j.n5X.QUICKSWITCHER, store: nY.A, dismissibleContentType: o.M.CHANNEL_NOTICE_QUICKSWITCHER },
        { type: j.n5X.GAME_CLAIM, dismissibleContentType: o.M.GAME_CLAIM_COACHMARK },
    ],
    n2 = n8.map((e) => e.store).filter(ni.Vq),
    n5 = new Set([o.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, o.M.CHANNEL_NOTICE_GUILD_BANNER]);
function n7(e) {
    e.stopPropagation();
}
let n4 = [];
function n9(e) {
    var t, n;
    let i,
        a,
        d,
        u,
        c,
        { guild: A } = e,
        [h, E] = l.useState(y.w.get(n6) ?? 0),
        m =
            ((n = t = A.id),
            (i = tS.useExperiment(
                { guildId: n, location: "useCanShowGameClaimCoachmark" },
                { autoTrackExposure: !1 },
            ).enabled),
            (a = (0, r.bG)([f.A], () => f.A.canWithPartialContext(j.xBc.ADMINISTRATOR, { guildId: t }), [t])),
            (u = (function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return tp(e, t).length > 0;
            })(t, (d = i && a))),
            (c = d && u),
            l.useMemo(() => {
                let e = [];
                return (c && e.push(o.M.GAME_CLAIM_COACHMARK), e.length > 0 ? e : n4);
            }, [c])),
        [g, I] = (0, Z.ww)(m, A.id, el.m.CHANNEL_NOTICES, !0),
        C = null != g,
        _ = (0, r.yK)(
            n2,
            () =>
                C
                    ? []
                    : n8
                          .filter((e) => {
                              let { dismissibleContentType: t, store: n } = e;
                              return !0 === n?.channelNoticePredicate(A, h) && !n5.has(t);
                          })
                          .map((e) => e.dismissibleContentType)
                          .filter(tc.Jq),
            [A, h, C],
        ),
        [N, p] = (0, Z.kn)(_, { groupName: el.m.CHANNEL_NOTICES }),
        S = g ?? N,
        T = null != g ? I : p,
        M = l.useCallback(
            function () {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : el.i.UNKNOWN;
                ((e = Date.now()), y.w.set(n6, e), E(e), T(t));
            },
            [T],
        ),
        R = (() => {
            switch (S) {
                case o.M.CHANNEL_NOTICE_HUBLINK:
                    return (0, s.jsx)(nx, { guild: A, markAsDismissed: M });
                case o.M.CHANNEL_NOTICE_INVITE:
                    return (0, s.jsx)(nk, { guild: A, markAsDismissed: M });
                case o.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                    return (0, s.jsx)(tq, { guild: A, markAsDismissed: M });
                case o.M.CHANNEL_NOTICE_QUICKSWITCHER:
                    return (0, s.jsx)(nz, { guild: A, markAsDismissed: M });
                case o.M.CHANNEL_NOTICE_GUILD_BANNER:
                    return (0, s.jsx)(tW, { guild: A, markAsDismissed: M });
                case o.M.GAME_CLAIM_COACHMARK:
                    return (0, s.jsx)(tX, { guild: A, markAsDismissed: T });
                default:
                    return null;
            }
        })();
    return null == R ? null : (0, s.jsx)("div", { onContextMenu: n7, children: R });
}
let ie = function (e) {
    let { guild: t } = e;
    switch (Y(t)) {
        case z.ENABLE_PUBLIC_GUILD:
            return (0, s.jsx)(nU, { guild: t });
        case z.MAX_MEMBER_COUNT:
            return (0, s.jsx)(nV, { guild: t });
        case z.GUILD_LIVE_CHANNEL:
            return (0, s.jsx)(nT, { guild: t });
        case z.GUILD_MFA_WARNING:
            return (0, s.jsx)(nv, { guild: t });
        case z.COMMANDS_MIGRATION:
            return (0, s.jsx)(nL, { guild: t });
        case z.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, s.jsx)(nG, { guild: t });
    }
    return ny.P.isDisallowPopupsSet() ? null : (0, s.jsx)(n9, { guild: e.guild });
};
var it = n(883476);
function ii(e) {
    let { guild: t, setHasSubheader: n } = e,
        i = l.useRef(null);
    return (
        l.useLayoutEffect(() => {
            let e = i.current;
            null != e && n(e.childNodes.length > 0);
        }),
        (0, s.jsx)("div", { className: it.k, ref: i, children: (0, s.jsx)(ie, { guild: t }) })
    );
}
var is = n(66933),
    il = n(846930),
    ia = n(168095);
let ir = "server-settings",
    io = { origin: { x: -8, y: -48 }, targetWidth: 40, targetHeight: 40, offset: { x: 0, y: 0 } };
class id extends l.PureComponent {
    historyUnlisten = () => {};
    guildHeaderRef = l.createRef();
    guildHeaderDropdownButtonRef = l.createRef();
    static getDerivedStateFromProps(e) {
        let { guild: t, hasChannelNotice: n } = e;
        return null == t || null == t.banner || n ? { renderBanner: !1, bannerVisible: !1 } : null;
    }
    showTimeout = new d.Ep();
    state = {
        controller: new a.Controller({ value: 1, immediate: !0 }),
        renderBanner: !1,
        bannerVisible: !1,
        communityInfoVisible: !1,
        shouldShowSubscribeTooltip: !1,
        bannerVisibleHeight: 88,
        hasGuildSubheader: !1,
    };
    componentDidMount() {
        (this.setAnimatedValue(0),
            m.h.subscribe("LAYER_PUSH", this.closeAllHeaderNotices),
            (this.historyUnlisten = eB.A.addRouteChangeListener(this.handleHistoryChange)));
        let { location: e } = eB.A.getHistory();
        e.state?.shouldShowSubscribeTooltip &&
            this.showTimeout.start(1e3, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
    }
    componentWillUnmount() {
        (this.showTimeout.stop(),
            this.state.controller.dispose(),
            this.historyUnlisten(),
            m.h.unsubscribe("LAYER_PUSH", this.closeAllHeaderNotices));
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
        (e.stopPropagation(), (0, en.Z)(!t), this.closeAllHeaderNotices());
    };
    handleContextMenu = (e) => {
        let { guild: t } = this.props;
        if (null != t) {
            if ((0, $.ai)(t.id))
                return void (0, g.L3)(e, async () => {
                    let { default: e } = await n.e("879948").then(n.bind(n, 329671));
                    return (t) => (0, s.jsx)(e, { ...t, navId: "favorites-channel-list-context" });
                });
            (0, g.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("309004"),
                    n.e("419690"),
                    n.e("845322"),
                    n.e("110758"),
                ]).then(n.bind(n, 455557));
                return (n) => (0, s.jsx)(e, { ...n, guild: t });
            });
        }
    };
    handleHeaderContextMenu = (e) => {
        let { guild: t } = this.props;
        if (null != t) {
            if ((0, $.ai)(t.id)) return void this.props.onFavoriteGuildContextMenu(e);
            (0, g.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("203112"),
                    n.e("876364"),
                    n.e("135144"),
                    n.e("996907"),
                    n.e("816027"),
                    n.e("562772"),
                    n.e("8159"),
                    n.e("24312"),
                    n.e("361922"),
                    n.e("179028"),
                    n.e("403032"),
                    n.e("684290"),
                    n.e("295570"),
                    n.e("301850"),
                    n.e("936875"),
                    n.e("862179"),
                    n.e("722784"),
                    n.e("326794"),
                    n.e("906470"),
                    n.e("860350"),
                    n.e("774550"),
                    n.e("923981"),
                    n.e("839460"),
                    n.e("706073"),
                    n.e("227512"),
                    n.e("262564"),
                    n.e("71866"),
                    n.e("891473"),
                    n.e("412117"),
                    n.e("263406"),
                    n.e("1955"),
                    n.e("341161"),
                    n.e("410526"),
                    n.e("202985"),
                    n.e("603619"),
                    n.e("175927"),
                    n.e("470126"),
                    n.e("149697"),
                    n.e("128804"),
                    n.e("60882"),
                    n.e("71151"),
                    n.e("227853"),
                    n.e("286615"),
                    n.e("735042"),
                    n.e("311541"),
                    n.e("795854"),
                    n.e("870088"),
                    n.e("300641"),
                    n.e("571163"),
                    n.e("586662"),
                    n.e("831377"),
                    n.e("709976"),
                    n.e("750955"),
                    n.e("953343"),
                    n.e("279774"),
                    n.e("763945"),
                    n.e("261204"),
                    n.e("686731"),
                    n.e("807432"),
                    n.e("873532"),
                    n.e("590088"),
                    n.e("807003"),
                    n.e("46083"),
                    n.e("152133"),
                    n.e("747802"),
                    n.e("626353"),
                    n.e("71169"),
                    n.e("736663"),
                    n.e("419121"),
                    n.e("489020"),
                    n.e("919789"),
                    n.e("669130"),
                    n.e("802890"),
                    n.e("82937"),
                    n.e("987221"),
                    n.e("157064"),
                    n.e("156957"),
                    n.e("918786"),
                    n.e("701335"),
                    n.e("257935"),
                    n.e("724086"),
                    n.e("358937"),
                    n.e("448738"),
                    n.e("206189"),
                    n.e("804439"),
                    n.e("84978"),
                    n.e("894292"),
                    n.e("153302"),
                    n.e("88683"),
                    n.e("363874"),
                    n.e("750370"),
                    n.e("972281"),
                    n.e("307107"),
                    n.e("896622"),
                    n.e("466592"),
                    n.e("73946"),
                    n.e("282050"),
                    n.e("440727"),
                    n.e("387970"),
                    n.e("847445"),
                    n.e("547510"),
                    n.e("966366"),
                    n.e("983513"),
                    n.e("76928"),
                    n.e("355502"),
                    n.e("528311"),
                    n.e("411938"),
                    n.e("653383"),
                    n.e("122026"),
                    n.e("31159"),
                    n.e("952068"),
                    n.e("768289"),
                    n.e("772565"),
                    n.e("533781"),
                    n.e("328276"),
                    n.e("592000"),
                    n.e("524434"),
                    n.e("854326"),
                    n.e("984"),
                    n.e("226229"),
                    n.e("981833"),
                    n.e("614929"),
                    n.e("570473"),
                    n.e("516497"),
                    n.e("24774"),
                    n.e("670870"),
                    n.e("684231"),
                    n.e("570690"),
                    n.e("886631"),
                    n.e("435860"),
                    n.e("426782"),
                    n.e("406322"),
                    n.e("942571"),
                    n.e("464759"),
                    n.e("763343"),
                    n.e("194704"),
                    n.e("274461"),
                    n.e("830560"),
                    n.e("526575"),
                    n.e("267387"),
                    n.e("816348"),
                    n.e("165291"),
                    n.e("109383"),
                    n.e("818291"),
                    n.e("243794"),
                    n.e("519435"),
                    n.e("10985"),
                    n.e("171206"),
                    n.e("975366"),
                    n.e("828178"),
                    n.e("45036"),
                    n.e("974119"),
                    n.e("434683"),
                    n.e("920955"),
                    n.e("505928"),
                    n.e("752657"),
                    n.e("747973"),
                    n.e("314001"),
                    n.e("885251"),
                    n.e("857871"),
                    n.e("529366"),
                    n.e("990185"),
                    n.e("487834"),
                    n.e("849162"),
                    n.e("660201"),
                    n.e("770925"),
                    n.e("179301"),
                    n.e("918347"),
                    n.e("689521"),
                    n.e("10886"),
                    n.e("84993"),
                    n.e("343298"),
                    n.e("592268"),
                    n.e("374962"),
                    n.e("553627"),
                    n.e("59599"),
                    n.e("46238"),
                    n.e("736919"),
                    n.e("440636"),
                    n.e("568960"),
                    n.e("459257"),
                    n.e("790484"),
                    n.e("339715"),
                    n.e("985301"),
                    n.e("981059"),
                    n.e("631323"),
                    n.e("464452"),
                    n.e("714144"),
                    n.e("458855"),
                    n.e("305161"),
                    n.e("845486"),
                    n.e("58353"),
                    n.e("17256"),
                    n.e("377016"),
                    n.e("385504"),
                    n.e("269714"),
                    n.e("331696"),
                    n.e("249918"),
                    n.e("865429"),
                    n.e("806391"),
                    n.e("817298"),
                    n.e("707551"),
                    n.e("726399"),
                    n.e("424216"),
                    n.e("840100"),
                    n.e("742258"),
                    n.e("173896"),
                    n.e("57358"),
                    n.e("580305"),
                    n.e("722765"),
                    n.e("33909"),
                    n.e("249169"),
                    n.e("754596"),
                    n.e("191601"),
                    n.e("232000"),
                    n.e("21486"),
                    n.e("304419"),
                    n.e("622936"),
                    n.e("45268"),
                    n.e("617281"),
                    n.e("733199"),
                    n.e("804510"),
                    n.e("655327"),
                    n.e("335532"),
                    n.e("138545"),
                    n.e("536490"),
                    n.e("771137"),
                    n.e("403655"),
                    n.e("212037"),
                    n.e("577154"),
                    n.e("877730"),
                    n.e("611899"),
                    n.e("527552"),
                    n.e("903758"),
                    n.e("768071"),
                    n.e("96922"),
                    n.e("769266"),
                    n.e("487873"),
                    n.e("765626"),
                    n.e("683302"),
                    n.e("660608"),
                    n.e("744554"),
                    n.e("118203"),
                    n.e("331212"),
                    n.e("638259"),
                    n.e("635958"),
                    n.e("207998"),
                    n.e("683621"),
                    n.e("711162"),
                    n.e("275179"),
                    n.e("289789"),
                    n.e("116125"),
                    n.e("977412"),
                    n.e("19385"),
                    n.e("692811"),
                    n.e("348567"),
                    n.e("452075"),
                    n.e("900277"),
                    n.e("249681"),
                    n.e("70484"),
                    n.e("905581"),
                    n.e("62052"),
                    n.e("771657"),
                    n.e("122218"),
                    n.e("76428"),
                    n.e("834552"),
                    n.e("993103"),
                    n.e("863232"),
                    n.e("708757"),
                    n.e("517888"),
                    n.e("959880"),
                    n.e("174016"),
                    n.e("907167"),
                    n.e("910471"),
                    n.e("11301"),
                    n.e("710284"),
                    n.e("861060"),
                    n.e("364827"),
                    n.e("77333"),
                    n.e("217229"),
                    n.e("477175"),
                    n.e("960235"),
                    n.e("585968"),
                    n.e("402040"),
                    n.e("198329"),
                    n.e("678157"),
                    n.e("942374"),
                    n.e("147134"),
                    n.e("331988"),
                    n.e("10866"),
                    n.e("236850"),
                    n.e("40291"),
                    n.e("733115"),
                    n.e("397270"),
                    n.e("190779"),
                    n.e("373122"),
                    n.e("715881"),
                    n.e("221856"),
                    n.e("186212"),
                    n.e("755936"),
                    n.e("46322"),
                    n.e("899843"),
                    n.e("904448"),
                    n.e("833703"),
                    n.e("55252"),
                    n.e("692990"),
                    n.e("362931"),
                    n.e("393336"),
                    n.e("745959"),
                    n.e("858529"),
                    n.e("481987"),
                    n.e("595653"),
                    n.e("958038"),
                    n.e("532039"),
                    n.e("719466"),
                    n.e("234503"),
                    n.e("413846"),
                    n.e("576909"),
                    n.e("27355"),
                    n.e("481647"),
                    n.e("776273"),
                    n.e("776602"),
                    n.e("391763"),
                    n.e("305692"),
                    n.e("704434"),
                    n.e("140402"),
                    n.e("28102"),
                    n.e("21921"),
                    n.e("407170"),
                    n.e("811310"),
                    n.e("844780"),
                    n.e("571210"),
                    n.e("676418"),
                    n.e("770291"),
                    n.e("166495"),
                    n.e("307575"),
                    n.e("88342"),
                    n.e("323624"),
                    n.e("187110"),
                    n.e("854461"),
                    n.e("942724"),
                    n.e("139970"),
                    n.e("393766"),
                    n.e("940258"),
                    n.e("521930"),
                    n.e("308555"),
                    n.e("292583"),
                    n.e("153251"),
                    n.e("173764"),
                    n.e("554241"),
                    n.e("311802"),
                    n.e("724303"),
                    n.e("25949"),
                    n.e("53102"),
                    n.e("836863"),
                    n.e("941526"),
                    n.e("146070"),
                    n.e("344502"),
                    n.e("617249"),
                    n.e("88599"),
                    n.e("179049"),
                    n.e("854622"),
                    n.e("95340"),
                    n.e("362422"),
                    n.e("807936"),
                    n.e("590365"),
                    n.e("37977"),
                    n.e("136149"),
                    n.e("333097"),
                    n.e("470068"),
                    n.e("354044"),
                    n.e("817989"),
                    n.e("437065"),
                    n.e("720590"),
                    n.e("709640"),
                    n.e("533746"),
                    n.e("147626"),
                    n.e("613867"),
                    n.e("952548"),
                    n.e("917298"),
                    n.e("203589"),
                    n.e("636373"),
                    n.e("294857"),
                    n.e("726033"),
                    n.e("480830"),
                    n.e("179745"),
                    n.e("64504"),
                    n.e("676156"),
                    n.e("553984"),
                    n.e("335395"),
                    n.e("884601"),
                    n.e("782969"),
                    n.e("154469"),
                    n.e("945413"),
                    n.e("146844"),
                    n.e("255580"),
                    n.e("163235"),
                    n.e("212055"),
                    n.e("14035"),
                    n.e("564850"),
                    n.e("504370"),
                    n.e("170104"),
                    n.e("491793"),
                    n.e("474610"),
                    n.e("299854"),
                    n.e("902564"),
                    n.e("608557"),
                    n.e("428967"),
                    n.e("903839"),
                    n.e("525013"),
                    n.e("953858"),
                    n.e("758946"),
                    n.e("214285"),
                    n.e("248330"),
                    n.e("247660"),
                    n.e("731503"),
                    n.e("803332"),
                    n.e("859546"),
                    n.e("42942"),
                    n.e("432805"),
                    n.e("938149"),
                    n.e("408362"),
                    n.e("608032"),
                    n.e("852617"),
                    n.e("477970"),
                    n.e("204744"),
                    n.e("737021"),
                    n.e("818465"),
                    n.e("773534"),
                    n.e("649362"),
                    n.e("971430"),
                    n.e("976516"),
                    n.e("41332"),
                    n.e("400501"),
                    n.e("985794"),
                    n.e("732194"),
                    n.e("767837"),
                    n.e("473384"),
                    n.e("893349"),
                    n.e("368062"),
                    n.e("859991"),
                    n.e("556868"),
                    n.e("386317"),
                    n.e("709371"),
                    n.e("599719"),
                    n.e("691461"),
                    n.e("218203"),
                    n.e("136204"),
                    n.e("726511"),
                    n.e("868214"),
                    n.e("939171"),
                    n.e("202622"),
                    n.e("661814"),
                    n.e("96680"),
                    n.e("448399"),
                    n.e("916758"),
                    n.e("713567"),
                    n.e("612287"),
                    n.e("588070"),
                    n.e("793438"),
                    n.e("305557"),
                    n.e("36227"),
                    n.e("104202"),
                    n.e("850488"),
                    n.e("947802"),
                    n.e("449145"),
                    n.e("444567"),
                    n.e("309004"),
                    n.e("229666"),
                    n.e("848625"),
                    n.e("92295"),
                    n.e("589916"),
                    n.e("695170"),
                    n.e("460773"),
                    n.e("883952"),
                    n.e("159957"),
                    n.e("82814"),
                    n.e("540715"),
                    n.e("458273"),
                    n.e("208018"),
                    n.e("968763"),
                    n.e("278045"),
                    n.e("26001"),
                    n.e("430997"),
                    n.e("174192"),
                    n.e("414591"),
                    n.e("652111"),
                    n.e("434786"),
                    n.e("203930"),
                    n.e("982730"),
                    n.e("360318"),
                    n.e("708536"),
                    n.e("903663"),
                    n.e("411353"),
                    n.e("49716"),
                    n.e("506045"),
                    n.e("618706"),
                    n.e("439089"),
                    n.e("800872"),
                    n.e("728136"),
                    n.e("452531"),
                    n.e("343116"),
                    n.e("201243"),
                    n.e("215920"),
                    n.e("573330"),
                    n.e("65393"),
                    n.e("338601"),
                    n.e("368530"),
                    n.e("216084"),
                    n.e("66580"),
                    n.e("978046"),
                    n.e("127659"),
                    n.e("428235"),
                    n.e("610943"),
                    n.e("283230"),
                    n.e("582486"),
                    n.e("387634"),
                    n.e("273669"),
                    n.e("846308"),
                    n.e("507775"),
                    n.e("284819"),
                    n.e("466147"),
                    n.e("50342"),
                    n.e("369501"),
                    n.e("303710"),
                    n.e("256373"),
                    n.e("161058"),
                    n.e("134504"),
                    n.e("908608"),
                    n.e("409391"),
                    n.e("645830"),
                    n.e("479971"),
                    n.e("810262"),
                    n.e("741786"),
                    n.e("995602"),
                    n.e("346313"),
                    n.e("463726"),
                    n.e("553203"),
                    n.e("897975"),
                    n.e("115368"),
                    n.e("636002"),
                    n.e("343233"),
                    n.e("614256"),
                    n.e("756684"),
                    n.e("419690"),
                    n.e("806354"),
                    n.e("359702"),
                    n.e("708364"),
                    n.e("452823"),
                    n.e("556967"),
                    n.e("647011"),
                    n.e("205896"),
                    n.e("269178"),
                    n.e("553584"),
                    n.e("466913"),
                    n.e("983947"),
                    n.e("71719"),
                    n.e("213848"),
                    n.e("588307"),
                    n.e("514878"),
                    n.e("676376"),
                    n.e("842935"),
                    n.e("73091"),
                    n.e("37786"),
                    n.e("886692"),
                    n.e("916373"),
                    n.e("528038"),
                    n.e("81398"),
                    n.e("518480"),
                    n.e("925172"),
                    n.e("167275"),
                    n.e("8458"),
                    n.e("11810"),
                    n.e("591977"),
                    n.e("890152"),
                    n.e("174337"),
                    n.e("646570"),
                    n.e("287973"),
                    n.e("357197"),
                    n.e("314863"),
                    n.e("623386"),
                    n.e("560165"),
                    n.e("712390"),
                    n.e("71167"),
                    n.e("113446"),
                    n.e("306410"),
                    n.e("161309"),
                    n.e("694529"),
                    n.e("303807"),
                    n.e("143330"),
                    n.e("995210"),
                    n.e("998611"),
                    n.e("317699"),
                    n.e("257032"),
                    n.e("952831"),
                    n.e("845322"),
                    n.e("114748"),
                    n.e("426386"),
                    n.e("204665"),
                    n.e("588860"),
                ]).then(n.bind(n, 237600));
                return (n) => (0, s.jsx)(e, { ...n, guild: t });
            });
        }
    };
    closeAllHeaderNotices = () => {
        (this.handleCloseSubscribeTooltip(),
            this.handleCloseTemplateDirtyTooltip(),
            this.handleCloseStudentHubPrivacySettingsTooltip());
    };
    handleCloseStudentHubPrivacySettingsTooltip = () => {
        let e = (0, Q.k8)(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
            t = this.props.guild?.features.has(j.GuildFeatures.HUB);
        !e && t && (0, Q.Dr)(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: el.i.AUTO });
    };
    handleCloseSubscribeTooltip = () => {
        (this.showTimeout.stop(),
            this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 }));
    };
    handleCloseTemplateDirtyTooltip = () => {
        let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
        null != e && t && eg.A.hideGuildTemplateDirtyTooltip(e.id);
    };
    renderMenuPopout = async () => {
        let { default: e } = await Promise.all([
            n.e("95340"),
            n.e("309004"),
            n.e("343116"),
            n.e("256373"),
            n.e("419690"),
            n.e("113446"),
            n.e("317699"),
            n.e("257032"),
            n.e("610124"),
            n.e("193829"),
            n.e("809111"),
        ]).then(n.bind(n, 342218));
        return (t) => {
            let { closePopout: n } = t,
                { guild: i } = this.props;
            return null != i && (0, s.jsx)(e, { onClose: n, guild: i });
        };
    };
    renderGuildHeaderUpsellPopout = (e) => {
        let { guild: t, guildHeaderContentDescriptor: n } = this.props;
        return null == t || null == n
            ? this.renderGuildHeaderDropdownButton(e)
            : (0, s.jsx)(tu, {
                  contentDescriptor: n,
                  guild: t,
                  renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e),
              });
    };
    renderGuildHeaderDropdownButton = (e) => {
        let t = e ? c.t : A.a;
        return (0, s.jsx)(t, { ref: this.guildHeaderDropdownButtonRef, size: "xs", color: "currentColor" });
    };
    renderGuildHeaderNotices(e) {
        let {
                guildId: t,
                showGuildTemplateDirtyTooltip: n,
                showGuildHeaderTutorial: i,
                showPriorityHeaderNotice: l,
                anyLayerOpen: a,
            } = this.props,
            { shouldShowSubscribeTooltip: r } = this.state;
        return i
            ? (0, s.jsx)("div", {
                  onClick: (t) => (e ? null : t.stopPropagation()),
                  children: (0, s.jsx)(ew.A, {
                      tutorialId: ir,
                      position: "bottom",
                      inlineSpecs: io,
                      children: this.renderGuildHeaderDropdownButton(e),
                  }),
              })
            : l
              ? (0, s.jsxs)(s.Fragment, {
                    children: [
                        this.renderGuildHeaderDropdownButton(e),
                        !e &&
                            !a &&
                            (0, s.jsx)(ex.Hd, { guildId: t, targetElementRef: this.guildHeaderDropdownButtonRef }),
                    ],
                })
              : n
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          this.renderGuildHeaderDropdownButton(e),
                          !e &&
                              !a &&
                              (0, s.jsx)(u.A, {
                                  targetElementRef: this.guildHeaderDropdownButtonRef,
                                  title: e9.intl.string(e9.t.Rk2RJk),
                                  body: e9.intl.string(e9.t.sFSrFH),
                                  onRequestClose: this.handleCloseTemplateDirtyTooltip,
                                  position: "bottom",
                                  caretConfig: { align: "center" },
                              }),
                      ],
                  })
                : a || e
                  ? this.renderGuildHeaderDropdownButton(e)
                  : r
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              this.renderGuildHeaderDropdownButton(e),
                              (0, s.jsx)(u.A, {
                                  targetElementRef: this.guildHeaderDropdownButtonRef,
                                  title: e9.intl.string(e9.t.Q3qa4x),
                                  body: e9.intl.string(e9.t.UyHD4O),
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
                showGuildTemplateDirtyTooltip: l,
                showPriorityHeaderNotice: a,
                isGuildHeaderDismissibleTooltipShown: r,
                headerAnalyticsLocations: o,
            } = this.props,
            {
                controller: d,
                renderBanner: u,
                bannerVisible: c,
                bannerVisibleHeight: A,
                communityInfoVisible: E,
            } = this.state,
            m = i || a || l || r;
        return null == t
            ? null
            : (0, s.jsx)(C.f5, {
                  value: o,
                  children: (0, s.jsx)(h.Q, {
                      targetElementRef: this.guildHeaderRef,
                      renderPopout: this.renderMenuPopout,
                      position: "bottom",
                      align: "center",
                      animation: h.Y.Animation.SCALE,
                      shouldShow: n,
                      onRequestClose: () => {
                          (0, en.Z)(!1);
                      },
                      spacing: 4,
                      children: (i) => {
                          let { onClick: l, ...a } = i;
                          return (0, s.jsx)(eZ.Ay, {
                              ref: this.guildHeaderRef,
                              guild: t,
                              controller: d,
                              renderBanner: u,
                              hasSubheader: e,
                              bannerVisible: c,
                              communityInfoVisible: E,
                              guildBanner: this.getGuildBannerHash(),
                              onClick: this.handleHeaderMenuToggle,
                              onContextMenu: this.handleHeaderContextMenu,
                              disableBannerAnimation: m,
                              animationOverlayHeight: A,
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
            i = null != t && (0, eq.A)(t);
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
        (((e >= 88 && i) || (e < 88 && !i)) && (i = !i),
            ((e >= 88 && !t) || (e < 88 && t)) && (t = !t),
            (s = Math.max(88 - e, 0)),
            (n = i),
            (t !== this.state.renderBanner ||
                i !== this.state.bannerVisible ||
                s !== this.state.bannerVisibleHeight ||
                n !== this.state.communityInfoVisible) &&
                this.setState({ renderBanner: t, bannerVisible: i, bannerVisibleHeight: s, communityInfoVisible: n }),
            l.update({ value: Math.min(1, Math.max(0, 1 - e / 88)), immediate: !0 }).start());
    };
    setAnimatedValueForGuildInfo(e) {
        let { communityInfoVisible: t, controller: n } = this.state;
        (((e >= 20 && t) || (e < 20 && !t)) && (t = !t),
            t !== this.state.communityInfoVisible && this.setState({ communityInfoVisible: t }),
            n.update({ value: Math.min(1, Math.max(0, 1 - e / 20)), immediate: !0 }).start());
    }
    pinBannerOrGuildInfo = (e) => {
        let { scrollTop: t } = e;
        this.setAnimatedValue(t);
    };
    renderChannelList() {
        let { isUnavailable: e, guild: t, selectedChannel: n, ...i } = this.props;
        if (e || null == t)
            return (0, s.jsx)(il.A, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        {
            if (t.features.has(j.GuildFeatures.HUB))
                return (0, s.jsx)("div", {
                    className: ia.r0,
                    children: (0, s.jsx)(ef.A, { guild: t, channel: n ?? eK.Ay.getDefaultChannel(t.id) }),
                });
            let e = (0, $.ai)(t.id) ? J.A : eQ.B;
            return (0, s.jsx)(e, {
                guild: t,
                ...i,
                guildBanner: this.getGuildBannerHash(),
                hasGuildSubheader: this.state.hasGuildSubheader,
                onScroll:
                    null != t && (null != this.getGuildBannerHash() || (0, eq.A)(t)) ? this.pinBannerOrGuildInfo : null,
            });
        }
    }
    render() {
        let { guild: e } = this.props,
            t = (0, $.YC)(e);
        return (0, s.jsxs)("nav", {
            className: ia.kL,
            onContextMenu: this.handleContextMenu,
            "aria-label": e9.intl.formatToPlainString(e9.t.nj5gAZ, { guildName: t ?? "" }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, s.jsx)(ii, { guild: e, setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }) }),
                this.renderChannelList(),
            ],
        });
    }
}
function iu(e) {
    let t,
        i,
        a,
        d,
        u,
        c,
        A,
        h,
        m,
        g,
        _,
        N,
        p,
        S,
        T,
        { guildId: x, hideSelectedChannel: L, selectedChannelId: D } = e,
        O = (0, ee.$)("favorite-guild-header-context"),
        G = (0, r.bG)([P.A], () => P.A.getGuild(x)),
        b = (0, r.bG)([R.Ay], () => R.Ay.getVoiceStates(x), [x]),
        U = (0, r.bG)([eX.A], () => eX.A.getGuildDimensions(x).scrollTo),
        y = (0, r.bG)([ez.A], () => ez.A.getChannelId()),
        H = (0, r.bG)([f.A], () => f.A.can(j.xBc.MANAGE_GUILD, G)),
        B = (0, r.bG)([eV.A], () => eV.A.isUnavailable(x)),
        w = (0, r.bG)([em.default], () => em.default.getCurrentUser()),
        { analyticsLocations: k } = (0, C.Ay)(I.A.GUILD_HEADER),
        X = (0, q.Ay)((e) => n8.some((t) => e.currentlyShown.has(t.dismissibleContentType))),
        V = Y(G),
        K = (0, E.useModalsStore)(E.hasAnyModalOpenSelector),
        F = (0, r.bG)([eF.A], () => eF.A.hasLayers()),
        W = (0, eR.xr)((e) => e.fullScreenLayers.length > 0),
        z = (0, r.bG)([ek.A], () => ek.A.shouldShow(ir)),
        Q =
            ((t = (0, r.bG)([P.A], () => P.A.getGuild(x))),
            (i = (0, r.bG)([em.default], () => em.default.getCurrentUser())),
            (a = null != t && (0, eE.bM)(t, i)),
            (d = (0, eh.oS)()),
            a &&
                (t?.features.has(j.GuildFeatures.COMMUNITY) ?? !1) &&
                d &&
                !(
                    t?.features.has(j.GuildFeatures.CREATOR_MONETIZABLE) ||
                    t?.features.has(j.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL) ||
                    t?.features.has(j.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)
                )),
        J = G?.features.has(j.GuildFeatures.HUB) === !0,
        ea = H && G?.features.has(j.GuildFeatures.DISCOVERABLE) === !0,
        eg = (0, r.bG)(
            [eS, eF.A],
            () => null != G && null != w && H && !eF.A.hasLayers() && eS.shouldShowGuildTemplateDirtyTooltip(x),
        ),
        eI = (0, r.bG)([M.A], () => M.A.getChannel(D)),
        { isPopoutOpen: eC } = (0, en.S)(),
        e_ = G?.features.has(j.GuildFeatures.COMMUNITY) ?? !1,
        eN = eY.Ay.isNewUser(w);
    ((u = (function (e) {
        let t = (0, r.bG)([f.A], () => f.A.can(j.xBc.MANAGE_GUILD, e)),
            { enabled: n } = er.useExperiment(
                { guildId: e?.id ?? j.dJq, location: "dd4beb_3" },
                { autoTrackExposure: !0 },
            );
        if (null == e) return !1;
        let i = e.features.has(j.GuildFeatures.COMMUNITY);
        return t && i && n;
    })(G)),
        (c = v.dR.some((e) => !(0, $.ai)(G?.id) && ed.Ib(e, G))),
        (A = G?.defaultMessageNotifications === j.orn.ALL_MESSAGES),
        (h = (0, eu.G$)(o.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, G?.id ?? j.dJq)),
        (m = u && (c || A) && !h),
        (g = l.useCallback(() => {
            (0, eu._$)(o.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, G?.id ?? j.dJq, !0, el.i.DISMISS);
        }, [G])),
        (_ = l.useRef(!1)),
        l.useEffect(() => {
            m &&
                !_.current &&
                ((0, E.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("942068"),
                            n.e("553203"),
                            n.e("452823"),
                            n.e("442446"),
                        ]).then(n.bind(n, 653981));
                        return (t) =>
                            (0, s.jsx)(e, {
                                guild: G,
                                canEveryoneModerate: c,
                                isDefaultNotificationsAllMessages: A,
                                ...t,
                            });
                    },
                    { onCloseCallback: g },
                ),
                eo.default.track(j.HAw.DISMISSIBLE_CONTENT_SHOWN, {
                    type: o.V[o.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
                    guild_id: G?.id ?? j.dJq,
                }),
                (_.current = !0));
        }, [c, G, g, A, m]));
    let ep =
        ((N = (0, r.bG)([P.A], () => P.A.getGuild(x))),
        (p = (0, ec._Y)(x)),
        (S =
            N?.features.has(j.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) === !0 &&
            N?.features.has(j.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !1),
        (T = (0, eA.X9)(N)),
        S && T && p);
    (function (e, t) {
        let { isNuxOpen: n, openNux: i } = t,
            s = (0, eT.Kb)(e, "GuildThemeNuxTrigger"),
            [a, r] = (0, Z.kn)(null != s ? [o.M.GUILD_THEME_NUX] : [], { groupName: el.m.GUILD_THEME_NUX }),
            d = a === o.M.GUILD_THEME_NUX,
            u = l.useRef(!1);
        (l.useEffect(() => {
            u.current = !1;
        }, [e]),
            l.useEffect(() => {
                if (!d || n || u.current) return;
                let t = setTimeout(() => {
                    u.current = !0;
                    let t = !1;
                    Promise.resolve(
                        i({
                            guildId: e,
                            markAsDismissed: (e) => {
                                t || ((t = !0), r(e, !0));
                            },
                        }),
                    ).catch(() => {
                        u.current = !1;
                    });
                }, 2e3);
                return () => clearTimeout(t);
            }, [d, n, e, r, i]));
    })(x, {
        isNuxOpen: (0, E.useHasModalOpen)(eM.u),
        openNux: l.useCallback((e) => {
            let { guildId: t, markAsDismissed: i } = e;
            return (0, E.openModalLazy)(
                async () => {
                    let e = await Promise.resolve().then(n.bind(n, 181880));
                    return (n) =>
                        (0, s.jsx)(e.default, {
                            guildId: t,
                            markAsDismissed: i,
                            transitionState: n.transitionState,
                            onClose: n.onClose,
                        });
                },
                { modalKey: eM.u, onCloseCallback: () => i(el.i.USER_DISMISS) },
            );
        }, []),
    });
    let ef = (0, r.bG)([ez.A], () => ez.A.getChannelId()),
        eB = (0, r.bG)([eW.A], () => eW.A.desyncedVoiceStatesCount),
        ew = (0, eb.A)(x),
        eK = (0, $.ai)(x) ? null : ew,
        eq =
            (function (e) {
                let t = (0, eb.A)(e),
                    n = (0, ey.DD)(e, "useShouldShowGuildThemeMemberCoachmark"),
                    i = (0, eH.OS)("useShouldShowGuildThemeMemberCoachmark"),
                    s = (0, ey.lY)(e, "useShouldShowGuildThemeMemberCoachmark"),
                    l = (0, ev.A)(e),
                    { available: a, isLoading: r } = (0, eP.A)(e);
                if (r) return !1;
                let o = a < ej.fe;
                return n && i && !s && o && !l && !1 === t;
            })(x) && !(0, $.ai)(x);
    is.A.useConfig({ guildId: x, location: "guild_sidebar" });
    let eQ = (0, et.C$)(x, "GuildSidebar"),
        eZ = (0, r.bG)([P.A], () => P.A.getGuild(x)?.features.has(j.GuildFeatures.GAME_SERVERS) ?? !1, [x]),
        e$ = eQ && !eZ && !1 === eK,
        eJ = (0, eU.A)(),
        e0 = (0, eO.A)(x),
        e1 = !1 === eK && eJ && null != e0,
        e3 = (0, eG.A)(x),
        e6 = !1 === eK && eJ && null != e3,
        e8 = [];
    (J && e8.push(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        Q && e8.push(o.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
        ea && e8.push(o.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
        !1 === eK && e8.push(o.M.GUILD_POWERUP_PERKS_COACHMARK),
        eq && e8.push(o.M.GUILD_THEME_MEMBER_COACHMARK),
        e$ && e8.push(o.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK),
        ep && e8.push(o.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL));
    let e2 = (0, q.uW)([
            ...e8,
            o.M.GUILD_HEADER_COACHMARK,
            o.M.GAME_SERVER_NEW_GAMES_COACHMARK,
            o.M.BOOST_TO_UNLOCK_COACHMARK,
            o.M.EXPIRING_POWERUP_COACHMARK,
        ]),
        e5 = (0, ex.Dq)(G) && !e2,
        e7 = (function (e) {
            let t = (0, es.c)(ei.C.GUILD_HEADER_COACHMARK),
                n =
                    null != t && "guildHeaderCoachmark" === t.properties.properties.oneofKind
                        ? t.properties.properties.guildHeaderCoachmark
                        : null,
                i = null != e && !(0, $.ai)(e),
                [s, l] = (0, Z.Cc)(
                    null != n && i ? o.M.GUILD_HEADER_COACHMARK : null,
                    t?.promotionId ?? "",
                    el.m.GUILD_HEADER_TOOLTIPS,
                );
            return {
                shouldShow: null != n && i && s === o.M.GUILD_HEADER_COACHMARK,
                componentId: t?.id ?? "",
                promotionId: t?.promotionId ?? "",
                coachmark: n,
                markAsDismissed: l,
            };
        })(e5 ? null : x),
        [e4, e9] = (0, Z.kn)(e5 ? [] : e8, { groupName: el.m.GUILD_HEADER_TOOLTIPS }),
        [te, tt] = (0, eD.vB)(eQ && !1 === eK && !(0, $.ai)(x) && !e5, el.m.GUILD_HEADER_TOOLTIPS),
        [tn, ti] = (0, Z.D8)(
            e1 && !e5 ? o.M.BOOST_TO_UNLOCK_COACHMARK : null,
            x,
            { cooldownDurationMs: eL.bW, numTimesToRecur: 5 },
            el.m.GUILD_HEADER_TOOLTIPS,
        ),
        [ts, tl] = (0, Z.D8)(
            e6 && !e5 ? o.M.EXPIRING_POWERUP_COACHMARK : null,
            x,
            { cooldownDurationMs: eL.mD },
            el.m.GUILD_HEADER_TOOLTIPS,
        ),
        ta = l.useMemo(
            () =>
                e7.shouldShow && null != e7.coachmark
                    ? {
                          contentType: o.M.GUILD_HEADER_COACHMARK,
                          data: {
                              marketingComponent: {
                                  componentId: e7.componentId,
                                  promotionId: e7.promotionId,
                                  coachmark: e7.coachmark,
                              },
                          },
                          markAsDismissed: e7.markAsDismissed,
                      }
                    : null != e4
                      ? { contentType: e4, data: null, markAsDismissed: e9 }
                      : te === o.M.GAME_SERVER_NEW_GAMES_COACHMARK
                        ? { contentType: te, data: null, markAsDismissed: tt }
                        : tn === o.M.BOOST_TO_UNLOCK_COACHMARK && null != e0
                          ? { contentType: tn, data: { featuredPowerup: e0 }, markAsDismissed: ti }
                          : ts === o.M.EXPIRING_POWERUP_COACHMARK && null != e3
                            ? { contentType: ts, data: { featuredExpiringPowerup: e3 }, markAsDismissed: tl }
                            : null,
            [
                e7.shouldShow,
                e7.coachmark,
                e7.componentId,
                e7.promotionId,
                e7.markAsDismissed,
                e4,
                te,
                tn,
                ts,
                e0,
                e3,
                e9,
                tt,
                ti,
                tl,
            ],
        );
    return (0, s.jsx)(id, {
        guildId: x,
        hideSelectedChannel: L,
        guild: G,
        scrollToChannel: U,
        selectedChannelId: L ? null : D,
        selectedChannel: eI,
        selectedVoiceChannelId: y,
        voiceStates: b,
        rtcConnectedChannelId: ef,
        rtcDesyncedVoiceStatesCount: eB,
        isUnavailable: B,
        user: w,
        hasChannelNotice: null != V || X,
        anyLayerOpen: K || F || W,
        showGuildHeaderTutorial: z,
        showPriorityHeaderNotice: e5,
        showGuildTemplateDirtyTooltip: eg,
        showNewUnreadsBar: e_,
        isHeaderPopoutOpen: eC,
        isGuildHeaderDismissibleTooltipShown: e2,
        headerAnalyticsLocations: k,
        shouldRenderBurstCoachmark: !eN,
        guildHeaderContentDescriptor: ta,
        onFavoriteGuildContextMenu: O,
    });
}
