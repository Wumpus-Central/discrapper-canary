"use strict";
n.d(t, { A: () => eN });
var i = n(627968),
    s = n(110259),
    l = n(554146),
    r = n(314116),
    a = n(397927),
    o = n(398590),
    d = n(361739),
    c = n(448564),
    u = n(611371),
    m = n(979816),
    g = n(774780),
    x = n(591552),
    h = n(961973),
    _ = n(440293),
    p = n(84763),
    A = n(567305),
    f = n(739455),
    j = n(599167),
    N = n(7891),
    E = n(450510),
    C = n(472282),
    b = n(861410),
    T = n(433522),
    I = n(287809),
    v = n(203982),
    S = n(403362),
    y = n(997509),
    R = n(555337),
    O = n(723278),
    G = n(282625),
    L = n(423981),
    D = n(925622),
    M = n(123488),
    k = n(758246),
    U = n(53656),
    P = n(826292),
    w = n(352821),
    B = n(132514),
    F = n(287479),
    H = n(400812),
    V = n(72533),
    z = n(291444),
    W = n(239741),
    K = n(396816),
    Y = n(807165),
    X = n(454516),
    J = n(155008),
    q = n(965033),
    Z = n(737331),
    Q = n(771935),
    $ = n(647171),
    ee = n(113266),
    et = n(91534),
    en = n(984562),
    ei = n(997418),
    es = n(314737),
    el = n(660834),
    er = n(365701),
    ea = n(712367),
    eo = n(533350),
    ed = n(251838),
    ec = n(239484),
    eu = n(933137),
    em = n(234721),
    eg = n(306846),
    ex = n(824451),
    eh = n(215194),
    e_ = n(489154),
    ep = n(652215),
    eA = n(124759),
    ef = n(985018),
    ej = n(610696);
let eN = {
    getSectionDefinition: function (e, t) {
        let eN = (0, _.$)(t.guild.id),
            eE =
                !1 === t.guild.features.has(ep.GuildFeatures.CREATOR_MONETIZABLE) &&
                !1 === t.guild.features.has(ep.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
            eC =
                eN && eE
                    ? {
                          label: (0, i.jsx)("div", { className: ej.vf, children: ef.intl.string(ef.t.Tn7Koo) }),
                          ariaLabel: ef.intl.string(ef.t.Tn7Koo),
                      }
                    : {
                          label: (0, i.jsx)("div", { className: ej.vf, children: ef.intl.string(ef.t["KzCF/6"]) }),
                          ariaLabel: ef.intl.string(ef.t["KzCF/6"]),
                      },
            eb = t.guild.features.has(ep.GuildFeatures.COMMUNITY) && t.canViewGuildAnalytics;
        switch (e) {
            case ep.BEX.PROFILE:
                return {
                    section: ep.BEX.PROFILE,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_PROFILE,
                    label: ef.intl.string(ef.t.txdaxf),
                    ariaLabel: ef.intl.string(ef.t.txdaxf),
                    element: eh.A,
                    type: d.Py.SCROLLABLE_CUSTOM,
                    notice: { stores: [R.A], element: e_.A },
                };
            case ep.BEX.TAG:
                return {
                    section: ep.BEX.TAG,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_TAG,
                    label: ef.intl.string(ef.t["2QmKZ2"]),
                    ariaLabel: ef.intl.string(ef.t["2QmKZ2"]),
                    element: en.A,
                    predicate: () => t.canManageGuild,
                    notice: { stores: [R.A], element: ei.A },
                };
            case ep.BEX.ENGAGEMENT:
                return {
                    section: ep.BEX.ENGAGEMENT,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT,
                    label: ef.intl.string(ef.t["6TAHbx"]),
                    ariaLabel: ef.intl.string(ef.t["6TAHbx"]),
                    element: eo.A,
                    notice: { stores: [R.A], element: ed.y },
                };
            case ep.BEX.BOOST_PERKS:
                return {
                    section: ep.BEX.BOOST_PERKS,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS,
                    label: ef.intl.string(ef.t.UKgg5N),
                    ariaLabel: ef.intl.string(ef.t.UKgg5N),
                    element: Q.H,
                    notice: { stores: [R.A, Z.A], element: $.l },
                };
            case ep.BEX.INVITES:
                return {
                    section: ep.BEX.INVITES,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_INVITES_V2,
                    label: ef.intl.string(ef.t.YOt3Om),
                    ariaLabel: ef.intl.string(ef.t.YOt3Om),
                    element: ec.A,
                    type: d.Py.CUSTOM,
                    predicate: () => t.canManageGuild,
                };
            case ep.BEX.ROLES:
                return {
                    section: ep.BEX.ROLES,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_ROLES,
                    label: ef.intl.string(ef.t["LPJmL/"]),
                    element: Y.A,
                    type: d.Py.MINIMAL,
                    ariaLabel: ef.intl.string(ef.t.KXcEC9),
                    notice: { stores: [K.A], element: Y.W },
                    predicate: () => t.canManageRoles,
                };
            case ep.BEX.EMOJI:
                return {
                    section: ep.BEX.EMOJI,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: ef.intl.string(ef.t.sMOuuS),
                    element: es.Ay,
                    predicate: () => t.canManageGuildExpressions,
                };
            case ep.BEX.STICKERS:
                return {
                    section: ep.BEX.STICKERS,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: ef.intl.string(ef.t.R5nQkS),
                    ariaLabel: ef.intl.string(ef.t.R5nQkS),
                    element: et.A,
                    predicate: () => t.canManageGuildExpressions,
                };
            case ep.BEX.SOUNDBOARD:
                return {
                    section: ep.BEX.SOUNDBOARD,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: ef.intl.string(ef.t.OWQNYr),
                    ariaLabel: ef.intl.string(ef.t.OWQNYr),
                    element: ee.A,
                    predicate: () => t.canManageGuildExpressions,
                };
            case ep.BEX.OFFICIAL_MESSAGES:
                return {
                    section: ep.BEX.OFFICIAL_MESSAGES,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_OFFICIAL_MESSAGES,
                    label: ef.intl.string(ef.t.xHEzFh),
                    ariaLabel: ef.intl.string(ef.t.xHEzFh),
                    element: ex.Ay,
                    predicate: () =>
                        t.canManageGuild &&
                        t.guild.features.has(ep.GuildFeatures.VERIFIED) &&
                        C.A.getCurrentConfig({ guildId: t.guild.id, location: "getSectionDefinition" }).enabled,
                    notice: { stores: [R.A], element: ex.wF },
                };
            case ep.BEX.GUILD_TEMPLATES:
                return {
                    section: ep.BEX.GUILD_TEMPLATES,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                    label: (0, i.jsx)(ea.A, { showDirtyIndicator: t.showDirtyGuildTemplateIndicator }),
                    ariaLabel: ef.intl.string(ef.t.KUw7Ss),
                    element: er.Ay,
                    notice: { stores: [er.Jx], element: er.lz },
                    predicate: () => t.canManageGuild,
                };
            case ep.BEX.ACCESS:
                return {
                    section: ep.BEX.ACCESS,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_ACCESS,
                    label: ef.intl.string(ef.t.YJlvBM),
                    element: eu.y,
                    notice: { stores: [eg.A], element: em.G },
                    predicate: () => t.canManageGuild,
                    ariaLabel: ef.intl.string(ef.t.YJlvBM),
                };
            case ep.BEX.INTEGRATIONS:
                return {
                    section: ep.BEX.INTEGRATIONS,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: ef.intl.string(ef.t.CIsNZw),
                    ariaLabel: ef.intl.string(ef.t.CIsNZw),
                    element: P.A,
                    notice: { stores: [U.default, R.A], element: P.K },
                    predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels,
                };
            case ep.BEX.APP_DIRECTORY:
                return {
                    section: ep.BEX.APP_DIRECTORY,
                    label: (0, i.jsx)(O.L, {}),
                    ariaLabel: ef.intl.string(ef.t.AKcFUj),
                    onClick: () => {
                        (0, O.N)({ guildId: t.guild.id, section: e });
                    },
                };
            case ep.BEX.SAFETY:
                return {
                    section: ep.BEX.SAFETY,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_SAFETY,
                    label: ef.intl.string(ef.t["suhY+Y"]),
                    ariaLabel: ef.intl.string(ef.t["suhY+Y"]),
                    element: J.A,
                    newIndicatorDismissibleContentTypes: [l.M.COMMUNITY_GUILD_SETTINGS_SAFETY],
                    predicate: () => t.canManageGuild && t.guild.features.has(ep.GuildFeatures.COMMUNITY),
                };
            case ep.BEX.MODERATION:
                return {
                    section: ep.BEX.MODERATION,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_MODERATION,
                    label: ef.intl.string(ef.t["suhY+Y"]),
                    element: q.Ay,
                    predicate: () => t.canManageGuild && !t.guild.features.has(ep.GuildFeatures.COMMUNITY),
                };
            case ep.BEX.GUILD_AUTOMOD:
                return {
                    section: ep.BEX.GUILD_AUTOMOD,
                    label: (0, i.jsx)("div", { className: ej.o2, children: ef.intl.string(ef.t.uRelgx) }),
                    ariaLabel: ef.intl.string(ef.t.uRelgx),
                    element: g.A,
                    newIndicatorDismissibleContentTypes: null,
                    predicate: () =>
                        !t.guild.features.has(ep.GuildFeatures.COMMUNITY) &&
                        ((0, m.hX)(t.guild.id) || (0, m.i_)(t.guild.id)),
                };
            case ep.BEX.AUDIT_LOG:
                return {
                    section: ep.BEX.AUDIT_LOG,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                    label: ef.intl.string(ef.t.SPWLyT),
                    element: G.A,
                    type: d.Py.CUSTOM,
                    predicate: () => t.canViewAuditLog,
                };
            case ep.BEX.BANS:
                return {
                    section: ep.BEX.BANS,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_BANS,
                    label: ef.intl.string(ef.t.ZbeITS),
                    element: X.A,
                    predicate: () => t.canManageBans,
                };
            case ep.BEX.COMMUNITY:
                let eT = ef.intl.string(ef.t.ElKTeb);
                return (
                    t.guild.features.has(ep.GuildFeatures.COMMUNITY) && (eT = ef.intl.string(ef.t["8nY2LE"])),
                    {
                        section: ep.BEX.COMMUNITY,
                        impressionName: t.guild.features.has(ep.GuildFeatures.COMMUNITY)
                            ? s.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW
                            : s.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                        label: eT,
                        element: D.A,
                        ariaLabel: eT,
                        newIndicator:
                            !t.guild.features.has(ep.GuildFeatures.COMMUNITY) &&
                            null != t.memberCount &&
                            t.memberCount >= eA.dH &&
                            E.HP.hasHotspot(E._2.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                        notice: { stores: [R.A], element: D.L },
                    }
                );
            case ep.BEX.ONBOARDING:
                return {
                    section: ep.BEX.ONBOARDING,
                    label: ef.intl.string(ef.t["LdxCK/"]),
                    element: z.A,
                    ariaLabel: ef.intl.string(ef.t["LdxCK/"]),
                    newIndicatorDismissibleContentTypes: t.onboardingEnabled
                        ? null
                        : [l.M.COMMUNITY_ONBOARDING_NEW_BADGE],
                    notice: { stores: [F.A, B.A, w.A], element: W.A },
                    predicate: () => (0, h.rs)(t.guild.id),
                    decoration: (function (e, t) {
                        if (x.A.getEnabled(e)) return ef.intl.string(ef.t.pPSmxg).toUpperCase();
                        if ((0, V.o)(e)) return ef.intl.string(ef.t["HDF4o/"]).toUpperCase();
                        let n = H.ti,
                            i = n.findIndex((e) => e === t);
                        if (-1 !== i)
                            return ef.intl.formatToPlainString(ef.t["5r28iW"], { count: i + 1, total: n.length });
                    })(t.guild.id, t.onboardingStep),
                };
            case ep.BEX.ANALYTICS:
                return {
                    section: ep.BEX.ANALYTICS,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                    label: ef.intl.string(ef.t["0wWfUG"]),
                    ariaLabel: ef.intl.string(ef.t["0wWfUG"]),
                    element: L.A,
                    predicate: () => eb,
                };
            case ep.BEX.DISCOVERY_LANDING_PAGE:
                return {
                    section: ep.BEX.DISCOVERY_LANDING_PAGE,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                    label: (0, i.jsxs)("div", {
                        className: ej.o2,
                        children: [ef.intl.string(ef.t.kGlQGF), " ", (0, i.jsx)(u.A, {})],
                    }),
                    ariaLabel: ef.intl.string(ef.t.kGlQGF),
                    element: k.A,
                    notice: { stores: [R.A], element: k.j },
                    type: d.Py.CUSTOM,
                    predicate: () =>
                        t.canManageGuild &&
                        (t.guild.features.has(ep.GuildFeatures.DISCOVERABLE) || !!t.guildMetadata?.isPublished),
                };
            case ep.BEX.COMMUNITY_WELCOME:
                return {
                    section: ep.BEX.COMMUNITY_WELCOME,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                    label: ef.intl.string(ef.t["2rkmDr"]),
                    ariaLabel: ef.intl.string(ef.t["2rkmDr"]),
                    element: M.A,
                    notice: { stores: [b.A], element: T.A },
                    predicate: () =>
                        t.canManageGuild &&
                        t.guild.features.has(ep.GuildFeatures.COMMUNITY) &&
                        !t.welcomeScreenEmpty &&
                        !t.guild.features.has(ep.GuildFeatures.GUILD_SERVER_GUIDE),
                };
            case ep.BEX.ROLE_SUBSCRIPTIONS:
                return {
                    ...eC,
                    section: ep.BEX.ROLE_SUBSCRIPTIONS,
                    element: j.A,
                    type: d.Py.CUSTOM,
                    predicate: () =>
                        t.monetizationPredicate() &&
                        ((0, A.hA)(t.guild) || c.A.hasSeenCreatorOnboardingForGuild(t.guild.id)),
                    newIndicatorDismissibleContentTypes: (0, f.aV)(t.guild)
                        ? [l.M.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE]
                        : null,
                };
            case ep.BEX.GUILD_PRODUCTS:
                return {
                    section: ep.BEX.GUILD_PRODUCTS,
                    label: ef.intl.string(ef.t.X6h2gz),
                    ariaLabel: ef.intl.string(ef.t.X6h2gz),
                    element: p.A,
                    predicate: () => t.monetizationPredicate() && (0, _.$)(t.guild.id) && (0, A.hA)(t.guild),
                };
            case ep.BEX.ROLE_SUBSCRIPTIONS_STORE_PAGE:
                return {
                    section: ep.BEX.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    impressionName: s.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                    newIndicator: 2022 === new Date().getFullYear(),
                    label: ef.intl.string(ef.t.ipTYsk),
                    ariaLabel: ef.intl.string(ef.t.ipTYsk),
                    element: N.A,
                    predicate: () => t.monetizationPredicate() && (0, A.hA)(t.guild),
                };
            case ep.BEX.MEMBERS:
                return {
                    section: ep.BEX.MEMBERS,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                    label: (0, i.jsx)(el.Q$, {}),
                    ariaLabel: ef.intl.string(ef.t["9Oq93m"]),
                    element: el.Ay,
                    type: d.Py.CUSTOM,
                    predicate: () => t.canAccessMembersPage,
                    onClick: () => {
                        (0, el.N8)();
                    },
                };
            case ep.BEX.DELETE:
                return {
                    section: ep.BEX.DELETE,
                    onClick() {
                        let e = I.default.getCurrentUser();
                        if (null == e) return;
                        let { name: s } = t.guild,
                            l = () => {
                                v._.subscribeOnce(ep.jej.LAYER_POP_COMPLETE, () => {
                                    y.A.deleteGuild(t.guild.id);
                                }),
                                    (0, o.jH)();
                            };
                        e.mfaEnabled
                            ? (0, r.A)({
                                  title: ef.intl.formatToPlainString(ef.t.us7mC1, { name: s }),
                                  subtitle: ef.intl.format(ef.t["Zuo+Vd"], { name: s }),
                                  confirmText: ef.intl.string(ef.t.l3hWP6),
                                  onConfirm: l,
                              })
                            : (0, a.mMO)(async () => {
                                  let { default: e } = await n.e("45199").then(n.bind(n, 310482));
                                  return (t) => (0, i.jsx)(e, { ...t, onConfirm: l, guildName: s });
                              });
                    },
                    label: ef.intl.string(ef.t.l3hWP6),
                    ariaLabel: ef.intl.string(ef.t.l3hWP6),
                    icon: (0, i.jsx)(a.ucK, { size: "xs", color: "currentColor" }),
                    variant: "destructive",
                    predicate: () => t.isOwnerWithRequiredMfaLevel,
                };
            case ep.BEX.LANDING:
            case ep.BEX.MEMBER_EDIT:
            case ep.BEX.MEMBER_TIMEOUT:
            case ep.BEX.MEMBER_KICK:
            case ep.BEX.MEMBER_BAN:
            case ep.BEX.CHANNELS:
            case ep.BEX.ROLE_EDIT:
            case ep.BEX.ROLE_PERMISSIONS:
            case ep.BEX.MEMBER_VERIFICATION:
            case ep.BEX.INTEGRATION_SETTINGS:
            case ep.BEX.SECURITY:
            case ep.BEX.AUDIT_LOG_FILTER:
            case ep.BEX.ROLE_SUBSCRIPTIONS_TIER_EDIT:
            case ep.BEX.VANITY_URL:
            case ep.BEX.INSTANT_INVITES:
            case ep.BEX.OVERVIEW:
            case ep.BEX.WEBHOOKS:
            case ep.BEX.EDIT_WEBHOOK:
            case ep.BEX.INTEGRATION_PLATFORM:
            case ep.BEX.LOBBIES_LINKED:
            case ep.BEX.EDIT_LINKED_LOBBY:
            case ep.BEX.CHANNELS_FOLLOWED:
            case ep.BEX.COMMUNITY_INTRO:
            case ep.BEX.ROLE_EDIT_REFRESH:
            case ep.BEX.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION:
            case ep.BEX.ROLE_SUBSCRIPTIONS_BASIC:
            case ep.BEX.ROLE_SUBSCRIPTIONS_TIERS:
            case ep.BEX.ROLE_SUBSCRIPTIONS_PAYMENTS:
            case ep.BEX.ROLE_SUBSCRIPTIONS_EMOJIS:
            case ep.BEX.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION:
                return null;
            default:
                (0, S.xb)(e);
        }
    },
};
