"use strict";
n.d(t, { A: () => eC });
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
    A = n(84763),
    p = n(567305),
    f = n(739455),
    j = n(599167),
    N = n(7891),
    E = n(450510),
    T = n(521427),
    C = n(383272),
    I = n(861410),
    b = n(433522),
    v = n(287809),
    S = n(203982),
    y = n(403362),
    R = n(997509),
    O = n(555337),
    G = n(723278),
    L = n(282625),
    D = n(423981),
    M = n(925622),
    k = n(123488),
    U = n(758246),
    P = n(53656),
    w = n(826292),
    B = n(352821),
    F = n(132514),
    H = n(287479),
    V = n(400812),
    z = n(72533),
    W = n(291444),
    K = n(239741),
    Y = n(396816),
    X = n(807165),
    J = n(454516),
    Z = n(155008),
    q = n(965033),
    Q = n(737331),
    $ = n(771935),
    ee = n(647171),
    et = n(378831),
    en = n(113266),
    ei = n(91534),
    es = n(984562),
    el = n(997418),
    er = n(314737),
    ea = n(660834),
    eo = n(365701),
    ed = n(712367),
    ec = n(533350),
    eu = n(251838),
    em = n(239484),
    eg = n(933137),
    ex = n(234721),
    eh = n(306846),
    e_ = n(824451),
    eA = n(215194),
    ep = n(489154),
    ef = n(652215),
    ej = n(124759),
    eN = n(412848),
    eE = n(985018),
    eT = n(486072);
let eC = {
    getSectionDefinition: function (e, t) {
        let eC = (0, _.$)(t.guild.id),
            eI =
                !1 === t.guild.features.has(ef.GuildFeatures.CREATOR_MONETIZABLE) &&
                !1 === t.guild.features.has(ef.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
            eb =
                eC && eI
                    ? {
                          label: (0, i.jsx)("div", { className: eT.vf, children: eE.intl.string(eE.t.Tn7Koo) }),
                          ariaLabel: eE.intl.string(eE.t.Tn7Koo),
                      }
                    : {
                          label: (0, i.jsx)("div", { className: eT.vf, children: eE.intl.string(eE.t["KzCF/6"]) }),
                          ariaLabel: eE.intl.string(eE.t["KzCF/6"]),
                      },
            ev = t.guild.features.has(ef.GuildFeatures.COMMUNITY) && t.canViewGuildAnalytics;
        switch (e) {
            case ef.BEX.PROFILE:
                return {
                    section: ef.BEX.PROFILE,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_PROFILE,
                    label: eE.intl.string(eE.t.txdaxf),
                    ariaLabel: eE.intl.string(eE.t.txdaxf),
                    element: eA.A,
                    type: d.Py.SCROLLABLE_CUSTOM,
                    notice: { stores: [O.A], element: ep.A },
                };
            case ef.BEX.TAG:
                return {
                    section: ef.BEX.TAG,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_TAG,
                    label: eE.intl.string(eE.t["2QmKZ2"]),
                    ariaLabel: eE.intl.string(eE.t["2QmKZ2"]),
                    element: es.A,
                    predicate: () => t.canManageGuild,
                    notice: { stores: [O.A], element: el.A },
                };
            case ef.BEX.GUILD_THEME:
                return {
                    section: ef.BEX.GUILD_THEME,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_GUILD_THEME,
                    label: eE.intl.string(eN.default["/6NbRv"]),
                    ariaLabel: eE.intl.string(eN.default["/6NbRv"]),
                    element: et.A,
                    predicate: () => t.canManageGuild && (0, C.Qs)(t.guild.id, "getSectionDefinition"),
                };
            case ef.BEX.ENGAGEMENT:
                return {
                    section: ef.BEX.ENGAGEMENT,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT,
                    label: eE.intl.string(eE.t["6TAHbx"]),
                    ariaLabel: eE.intl.string(eE.t["6TAHbx"]),
                    element: ec.A,
                    notice: { stores: [O.A], element: eu.y },
                };
            case ef.BEX.BOOST_PERKS:
                return {
                    section: ef.BEX.BOOST_PERKS,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS,
                    label: eE.intl.string(eE.t.UKgg5N),
                    ariaLabel: eE.intl.string(eE.t.UKgg5N),
                    element: $.H,
                    notice: { stores: [O.A, Q.A], element: ee.l },
                };
            case ef.BEX.INVITES:
                return {
                    section: ef.BEX.INVITES,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_INVITES_V2,
                    label: eE.intl.string(eE.t.YOt3Om),
                    ariaLabel: eE.intl.string(eE.t.YOt3Om),
                    element: em.A,
                    type: d.Py.CUSTOM,
                    predicate: () => t.canManageGuild,
                };
            case ef.BEX.ROLES:
                return {
                    section: ef.BEX.ROLES,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_ROLES,
                    label: eE.intl.string(eE.t["LPJmL/"]),
                    element: X.A,
                    type: d.Py.MINIMAL,
                    ariaLabel: eE.intl.string(eE.t.KXcEC9),
                    notice: { stores: [Y.A], element: X.W },
                    predicate: () => t.canManageRoles,
                };
            case ef.BEX.EMOJI:
                return {
                    section: ef.BEX.EMOJI,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: eE.intl.string(eE.t.sMOuuS),
                    element: er.Ay,
                    predicate: () => t.canManageGuildExpressions,
                };
            case ef.BEX.STICKERS:
                return {
                    section: ef.BEX.STICKERS,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: eE.intl.string(eE.t.R5nQkS),
                    ariaLabel: eE.intl.string(eE.t.R5nQkS),
                    element: ei.A,
                    predicate: () => t.canManageGuildExpressions,
                };
            case ef.BEX.SOUNDBOARD:
                return {
                    section: ef.BEX.SOUNDBOARD,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: eE.intl.string(eE.t.OWQNYr),
                    ariaLabel: eE.intl.string(eE.t.OWQNYr),
                    element: en.A,
                    predicate: () => t.canManageGuildExpressions,
                };
            case ef.BEX.OFFICIAL_MESSAGES:
                return {
                    section: ef.BEX.OFFICIAL_MESSAGES,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_OFFICIAL_MESSAGES,
                    label: eE.intl.string(eE.t.xHEzFh),
                    ariaLabel: eE.intl.string(eE.t.xHEzFh),
                    element: e_.Ay,
                    predicate: () => t.canManageGuild && (0, T.GP)(t.guild, "getSectionDefinition"),
                    notice: { stores: [O.A], element: e_.wF },
                };
            case ef.BEX.GUILD_TEMPLATES:
                return {
                    section: ef.BEX.GUILD_TEMPLATES,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                    label: (0, i.jsx)(ed.A, { showDirtyIndicator: t.showDirtyGuildTemplateIndicator }),
                    ariaLabel: eE.intl.string(eE.t.KUw7Ss),
                    element: eo.Ay,
                    notice: { stores: [eo.Jx], element: eo.lz },
                    predicate: () => t.canManageGuild,
                };
            case ef.BEX.ACCESS:
                return {
                    section: ef.BEX.ACCESS,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_ACCESS,
                    label: eE.intl.string(eE.t.YJlvBM),
                    element: eg.y,
                    notice: { stores: [eh.A], element: ex.G },
                    predicate: () => t.canManageGuild,
                    ariaLabel: eE.intl.string(eE.t.YJlvBM),
                };
            case ef.BEX.INTEGRATIONS:
                return {
                    section: ef.BEX.INTEGRATIONS,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: eE.intl.string(eE.t.CIsNZw),
                    ariaLabel: eE.intl.string(eE.t.CIsNZw),
                    element: w.A,
                    notice: { stores: [P.default, O.A], element: w.K },
                    predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels,
                };
            case ef.BEX.APP_DIRECTORY:
                return {
                    section: ef.BEX.APP_DIRECTORY,
                    label: (0, i.jsx)(G.L, {}),
                    ariaLabel: eE.intl.string(eE.t.AKcFUj),
                    onClick: () => {
                        (0, G.N)({ guildId: t.guild.id, section: e });
                    },
                };
            case ef.BEX.SAFETY:
                return {
                    section: ef.BEX.SAFETY,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_SAFETY,
                    label: eE.intl.string(eE.t["suhY+Y"]),
                    ariaLabel: eE.intl.string(eE.t["suhY+Y"]),
                    element: Z.A,
                    newIndicatorDismissibleContentTypes: [l.M.COMMUNITY_GUILD_SETTINGS_SAFETY],
                    predicate: () => t.canManageGuild && t.guild.features.has(ef.GuildFeatures.COMMUNITY),
                };
            case ef.BEX.MODERATION:
                return {
                    section: ef.BEX.MODERATION,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_MODERATION,
                    label: eE.intl.string(eE.t["suhY+Y"]),
                    element: q.Ay,
                    predicate: () => t.canManageGuild && !t.guild.features.has(ef.GuildFeatures.COMMUNITY),
                };
            case ef.BEX.GUILD_AUTOMOD:
                return {
                    section: ef.BEX.GUILD_AUTOMOD,
                    label: (0, i.jsx)("div", { className: eT.o2, children: eE.intl.string(eE.t.uRelgx) }),
                    ariaLabel: eE.intl.string(eE.t.uRelgx),
                    element: g.A,
                    newIndicatorDismissibleContentTypes: null,
                    predicate: () =>
                        !t.guild.features.has(ef.GuildFeatures.COMMUNITY) &&
                        ((0, m.hX)(t.guild.id) || (0, m.i_)(t.guild.id)),
                };
            case ef.BEX.AUDIT_LOG:
                return {
                    section: ef.BEX.AUDIT_LOG,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                    label: eE.intl.string(eE.t.SPWLyT),
                    element: L.A,
                    type: d.Py.CUSTOM,
                    predicate: () => t.canViewAuditLog,
                };
            case ef.BEX.BANS:
                return {
                    section: ef.BEX.BANS,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_BANS,
                    label: eE.intl.string(eE.t.ZbeITS),
                    element: J.A,
                    predicate: () => t.canManageBans,
                };
            case ef.BEX.COMMUNITY:
                let eS = eE.intl.string(eE.t.ElKTeb);
                return (
                    t.guild.features.has(ef.GuildFeatures.COMMUNITY) && (eS = eE.intl.string(eE.t["8nY2LE"])),
                    {
                        section: ef.BEX.COMMUNITY,
                        impressionName: t.guild.features.has(ef.GuildFeatures.COMMUNITY)
                            ? s.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW
                            : s.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                        label: eS,
                        element: M.A,
                        ariaLabel: eS,
                        newIndicator:
                            !t.guild.features.has(ef.GuildFeatures.COMMUNITY) &&
                            null != t.memberCount &&
                            t.memberCount >= ej.dH &&
                            E.HP.hasHotspot(E._2.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                        notice: { stores: [O.A], element: M.L },
                    }
                );
            case ef.BEX.ONBOARDING:
                return {
                    section: ef.BEX.ONBOARDING,
                    label: eE.intl.string(eE.t["LdxCK/"]),
                    element: W.A,
                    ariaLabel: eE.intl.string(eE.t["LdxCK/"]),
                    newIndicatorDismissibleContentTypes: t.onboardingEnabled
                        ? null
                        : [l.M.COMMUNITY_ONBOARDING_NEW_BADGE],
                    notice: { stores: [H.A, F.A, B.A], element: K.A },
                    predicate: () => (0, h.rs)(t.guild.id),
                    decoration: (function (e, t) {
                        if (x.A.getEnabled(e)) return eE.intl.string(eE.t.pPSmxg).toUpperCase();
                        if ((0, z.o)(e)) return eE.intl.string(eE.t["HDF4o/"]).toUpperCase();
                        let n = V.ti,
                            i = n.findIndex((e) => e === t);
                        if (-1 !== i)
                            return eE.intl.formatToPlainString(eE.t["5r28iW"], { count: i + 1, total: n.length });
                    })(t.guild.id, t.onboardingStep),
                };
            case ef.BEX.ANALYTICS:
                return {
                    section: ef.BEX.ANALYTICS,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                    label: eE.intl.string(eE.t["0wWfUG"]),
                    ariaLabel: eE.intl.string(eE.t["0wWfUG"]),
                    element: D.A,
                    predicate: () => ev,
                };
            case ef.BEX.DISCOVERY_LANDING_PAGE:
                return {
                    section: ef.BEX.DISCOVERY_LANDING_PAGE,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                    label: (0, i.jsxs)("div", {
                        className: eT.o2,
                        children: [eE.intl.string(eE.t.kGlQGF), " ", (0, i.jsx)(u.A, {})],
                    }),
                    ariaLabel: eE.intl.string(eE.t.kGlQGF),
                    element: U.A,
                    notice: { stores: [O.A], element: U.j },
                    type: d.Py.CUSTOM,
                    predicate: () =>
                        t.canManageGuild &&
                        (t.guild.features.has(ef.GuildFeatures.DISCOVERABLE) || !!t.guildMetadata?.isPublished),
                };
            case ef.BEX.COMMUNITY_WELCOME:
                return {
                    section: ef.BEX.COMMUNITY_WELCOME,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                    label: eE.intl.string(eE.t["2rkmDr"]),
                    ariaLabel: eE.intl.string(eE.t["2rkmDr"]),
                    element: k.A,
                    notice: { stores: [I.A], element: b.A },
                    predicate: () =>
                        t.canManageGuild &&
                        t.guild.features.has(ef.GuildFeatures.COMMUNITY) &&
                        !t.welcomeScreenEmpty &&
                        !t.guild.features.has(ef.GuildFeatures.GUILD_SERVER_GUIDE),
                };
            case ef.BEX.ROLE_SUBSCRIPTIONS:
                return {
                    ...eb,
                    section: ef.BEX.ROLE_SUBSCRIPTIONS,
                    element: j.A,
                    type: d.Py.CUSTOM,
                    predicate: () =>
                        t.monetizationPredicate() &&
                        ((0, p.hA)(t.guild) || c.A.hasSeenCreatorOnboardingForGuild(t.guild.id)),
                    newIndicatorDismissibleContentTypes: (0, f.aV)(t.guild)
                        ? [l.M.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE]
                        : null,
                };
            case ef.BEX.GUILD_PRODUCTS:
                return {
                    section: ef.BEX.GUILD_PRODUCTS,
                    label: eE.intl.string(eE.t.X6h2gz),
                    ariaLabel: eE.intl.string(eE.t.X6h2gz),
                    element: A.A,
                    predicate: () => t.monetizationPredicate() && (0, _.$)(t.guild.id) && (0, p.hA)(t.guild),
                };
            case ef.BEX.ROLE_SUBSCRIPTIONS_STORE_PAGE:
                return {
                    section: ef.BEX.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    impressionName: s.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                    newIndicator: 2022 === new Date().getFullYear(),
                    label: eE.intl.string(eE.t.ipTYsk),
                    ariaLabel: eE.intl.string(eE.t.ipTYsk),
                    element: N.A,
                    predicate: () => t.monetizationPredicate() && (0, p.hA)(t.guild),
                };
            case ef.BEX.MEMBERS:
                return {
                    section: ef.BEX.MEMBERS,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                    label: (0, i.jsx)(ea.Q$, {}),
                    ariaLabel: eE.intl.string(eE.t["9Oq93m"]),
                    element: ea.Ay,
                    type: d.Py.CUSTOM,
                    predicate: () => t.canAccessMembersPage,
                    onClick: () => {
                        (0, ea.N8)();
                    },
                };
            case ef.BEX.DELETE:
                return {
                    section: ef.BEX.DELETE,
                    onClick() {
                        let e = v.default.getCurrentUser();
                        if (null == e) return;
                        let { name: s } = t.guild,
                            l = () => {
                                S._.subscribeOnce(ef.jej.LAYER_POP_COMPLETE, () => {
                                    R.A.deleteGuild(t.guild.id);
                                }),
                                    (0, o.jH)();
                            };
                        e.mfaEnabled
                            ? (0, r.A)({
                                  title: eE.intl.formatToPlainString(eE.t.us7mC1, { name: s }),
                                  subtitle: eE.intl.format(eE.t["Zuo+Vd"], { name: s }),
                                  confirmText: eE.intl.string(eE.t.l3hWP6),
                                  onConfirm: l,
                              })
                            : (0, a.mMO)(async () => {
                                  let { default: e } = await n.e("45199").then(n.bind(n, 310482));
                                  return (t) => (0, i.jsx)(e, { ...t, onConfirm: l, guildName: s });
                              });
                    },
                    label: eE.intl.string(eE.t.l3hWP6),
                    ariaLabel: eE.intl.string(eE.t.l3hWP6),
                    icon: (0, i.jsx)(a.ucK, { size: "xs", color: "currentColor" }),
                    variant: "destructive",
                    predicate: () => t.isOwnerWithRequiredMfaLevel,
                };
            case ef.BEX.LANDING:
            case ef.BEX.MEMBER_EDIT:
            case ef.BEX.MEMBER_TIMEOUT:
            case ef.BEX.MEMBER_KICK:
            case ef.BEX.MEMBER_BAN:
            case ef.BEX.CHANNELS:
            case ef.BEX.ROLE_EDIT:
            case ef.BEX.ROLE_PERMISSIONS:
            case ef.BEX.MEMBER_VERIFICATION:
            case ef.BEX.INTEGRATION_SETTINGS:
            case ef.BEX.SECURITY:
            case ef.BEX.AUDIT_LOG_FILTER:
            case ef.BEX.ROLE_SUBSCRIPTIONS_TIER_EDIT:
            case ef.BEX.VANITY_URL:
            case ef.BEX.INSTANT_INVITES:
            case ef.BEX.OVERVIEW:
            case ef.BEX.WEBHOOKS:
            case ef.BEX.EDIT_WEBHOOK:
            case ef.BEX.INTEGRATION_PLATFORM:
            case ef.BEX.LOBBIES_LINKED:
            case ef.BEX.EDIT_LINKED_LOBBY:
            case ef.BEX.CHANNELS_FOLLOWED:
            case ef.BEX.COMMUNITY_INTRO:
            case ef.BEX.ROLE_EDIT_REFRESH:
            case ef.BEX.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION:
            case ef.BEX.ROLE_SUBSCRIPTIONS_BASIC:
            case ef.BEX.ROLE_SUBSCRIPTIONS_TIERS:
            case ef.BEX.ROLE_SUBSCRIPTIONS_PAYMENTS:
            case ef.BEX.ROLE_SUBSCRIPTIONS_EMOJIS:
            case ef.BEX.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION:
                return null;
            default:
                (0, y.xb)(e);
        }
    },
};
