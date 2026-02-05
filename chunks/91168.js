"use strict";
n.d(t, { A: () => ef });
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
    _ = n(130978),
    A = n(84763),
    p = n(567305),
    f = n(739455),
    j = n(599167),
    N = n(7891),
    E = n(450510),
    b = n(861410),
    T = n(433522),
    C = n(287809),
    I = n(203982),
    v = n(403362),
    S = n(997509),
    y = n(555337),
    R = n(723278),
    O = n(282625),
    G = n(423981),
    L = n(925622),
    D = n(123488),
    M = n(758246),
    k = n(53656),
    U = n(826292),
    P = n(352821),
    w = n(132514),
    B = n(287479),
    F = n(400812),
    H = n(72533),
    V = n(291444),
    z = n(239741),
    W = n(396816),
    K = n(807165),
    Y = n(454516),
    X = n(155008),
    J = n(965033),
    Z = n(737331),
    Q = n(771935),
    q = n(647171),
    $ = n(113266),
    ee = n(91534),
    et = n(984562),
    en = n(997418),
    ei = n(314737),
    es = n(660834),
    el = n(365701),
    er = n(712367),
    ea = n(533350),
    eo = n(251838),
    ed = n(239484),
    ec = n(933137),
    eu = n(234721),
    em = n(306846),
    eg = n(215194),
    ex = n(489154),
    eh = n(652215),
    e_ = n(124759),
    eA = n(985018),
    ep = n(453263);
let ef = {
    getSectionDefinition: function (e, t) {
        let ef = (0, _.$)(t.guild.id, "guild_settings"),
            ej =
                !1 === t.guild.features.has(eh.GuildFeatures.CREATOR_MONETIZABLE) &&
                !1 === t.guild.features.has(eh.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
            eN =
                ef && ej
                    ? {
                          label: (0, i.jsx)("div", { className: ep.vf, children: eA.intl.string(eA.t.Tn7Koo) }),
                          ariaLabel: eA.intl.string(eA.t.Tn7Koo),
                      }
                    : {
                          label: (0, i.jsx)("div", { className: ep.vf, children: eA.intl.string(eA.t["KzCF/6"]) }),
                          ariaLabel: eA.intl.string(eA.t["KzCF/6"]),
                      },
            eE = t.guild.features.has(eh.GuildFeatures.COMMUNITY) && t.canViewGuildAnalytics;
        switch (e) {
            case eh.BEX.PROFILE:
                return {
                    section: eh.BEX.PROFILE,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_PROFILE,
                    label: eA.intl.string(eA.t.txdaxf),
                    ariaLabel: eA.intl.string(eA.t.txdaxf),
                    element: eg.A,
                    type: d.Py.SCROLLABLE_CUSTOM,
                    notice: { stores: [y.A], element: ex.A },
                };
            case eh.BEX.TAG:
                return {
                    section: eh.BEX.TAG,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_TAG,
                    label: eA.intl.string(eA.t["2QmKZ2"]),
                    ariaLabel: eA.intl.string(eA.t["2QmKZ2"]),
                    element: et.A,
                    predicate: () => t.canManageGuild,
                    notice: { stores: [y.A], element: en.A },
                };
            case eh.BEX.ENGAGEMENT:
                return {
                    section: eh.BEX.ENGAGEMENT,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT,
                    label: eA.intl.string(eA.t["6TAHbx"]),
                    ariaLabel: eA.intl.string(eA.t["6TAHbx"]),
                    element: ea.A,
                    notice: { stores: [y.A], element: eo.y },
                };
            case eh.BEX.BOOST_PERKS:
                return {
                    section: eh.BEX.BOOST_PERKS,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS,
                    label: eA.intl.string(eA.t.UKgg5N),
                    ariaLabel: eA.intl.string(eA.t.UKgg5N),
                    element: Q.H,
                    notice: { stores: [y.A, Z.A], element: q.l },
                };
            case eh.BEX.INVITES:
                return {
                    section: eh.BEX.INVITES,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_INVITES_V2,
                    label: eA.intl.string(eA.t.YOt3Om),
                    ariaLabel: eA.intl.string(eA.t.YOt3Om),
                    element: ed.A,
                    type: d.Py.CUSTOM,
                    predicate: () => t.canManageGuild,
                };
            case eh.BEX.ROLES:
                return {
                    section: eh.BEX.ROLES,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_ROLES,
                    label: eA.intl.string(eA.t["LPJmL/"]),
                    element: K.A,
                    type: d.Py.MINIMAL,
                    ariaLabel: eA.intl.string(eA.t.KXcEC9),
                    notice: { stores: [W.A], element: K.W },
                    predicate: () => t.canManageRoles,
                    icon: t.permissionMigrationAvailable ? (0, i.jsx)("div", { className: ep.Vx }) : void 0,
                };
            case eh.BEX.EMOJI:
                return {
                    section: eh.BEX.EMOJI,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: eA.intl.string(eA.t.sMOuuS),
                    element: ei.Ay,
                    predicate: () => t.canManageGuildExpressions,
                };
            case eh.BEX.STICKERS:
                return {
                    section: eh.BEX.STICKERS,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: eA.intl.string(eA.t.R5nQkS),
                    ariaLabel: eA.intl.string(eA.t.R5nQkS),
                    element: ee.A,
                    predicate: () => t.canManageGuildExpressions,
                };
            case eh.BEX.SOUNDBOARD:
                return {
                    section: eh.BEX.SOUNDBOARD,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: eA.intl.string(eA.t.OWQNYr),
                    ariaLabel: eA.intl.string(eA.t.OWQNYr),
                    element: $.A,
                    predicate: () => t.canManageGuildExpressions,
                };
            case eh.BEX.GUILD_TEMPLATES:
                return {
                    section: eh.BEX.GUILD_TEMPLATES,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                    label: (0, i.jsx)(er.A, { showDirtyIndicator: t.showDirtyGuildTemplateIndicator }),
                    ariaLabel: eA.intl.string(eA.t.KUw7Ss),
                    element: el.Ay,
                    notice: { stores: [el.Jx], element: el.lz },
                    predicate: () => t.canManageGuild,
                };
            case eh.BEX.ACCESS:
                return {
                    section: eh.BEX.ACCESS,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_ACCESS,
                    label: eA.intl.string(eA.t.YJlvBM),
                    element: ec.y,
                    notice: { stores: [em.A], element: eu.G },
                    predicate: () => t.canManageGuild,
                    ariaLabel: eA.intl.string(eA.t.YJlvBM),
                };
            case eh.BEX.INTEGRATIONS:
                return {
                    section: eh.BEX.INTEGRATIONS,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: eA.intl.string(eA.t.CIsNZw),
                    ariaLabel: eA.intl.string(eA.t.CIsNZw),
                    element: U.A,
                    notice: { stores: [k.default, y.A], element: U.K },
                    predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels,
                };
            case eh.BEX.APP_DIRECTORY:
                return {
                    section: eh.BEX.APP_DIRECTORY,
                    label: (0, i.jsx)(R.L, {}),
                    ariaLabel: eA.intl.string(eA.t.AKcFUj),
                    onClick: () => {
                        (0, R.N)({ guildId: t.guild.id, section: e });
                    },
                };
            case eh.BEX.SAFETY:
                return {
                    section: eh.BEX.SAFETY,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_SAFETY,
                    label: eA.intl.string(eA.t["suhY+Y"]),
                    ariaLabel: eA.intl.string(eA.t["suhY+Y"]),
                    element: X.A,
                    newIndicatorDismissibleContentTypes: [l.M.COMMUNITY_GUILD_SETTINGS_SAFETY],
                    predicate: () => t.canManageGuild && t.guild.features.has(eh.GuildFeatures.COMMUNITY),
                };
            case eh.BEX.MODERATION:
                return {
                    section: eh.BEX.MODERATION,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_MODERATION,
                    label: eA.intl.string(eA.t["suhY+Y"]),
                    element: J.Ay,
                    predicate: () => t.canManageGuild && !t.guild.features.has(eh.GuildFeatures.COMMUNITY),
                };
            case eh.BEX.GUILD_AUTOMOD:
                return {
                    section: eh.BEX.GUILD_AUTOMOD,
                    label: (0, i.jsx)("div", { className: ep.o2, children: eA.intl.string(eA.t.uRelgx) }),
                    ariaLabel: eA.intl.string(eA.t.uRelgx),
                    element: g.A,
                    newIndicatorDismissibleContentTypes: null,
                    predicate: () =>
                        !t.guild.features.has(eh.GuildFeatures.COMMUNITY) &&
                        ((0, m.hX)(t.guild.id) || (0, m.i_)(t.guild.id)),
                };
            case eh.BEX.AUDIT_LOG:
                return {
                    section: eh.BEX.AUDIT_LOG,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                    label: eA.intl.string(eA.t.SPWLyT),
                    element: O.A,
                    type: d.Py.CUSTOM,
                    predicate: () => t.canViewAuditLog,
                };
            case eh.BEX.BANS:
                return {
                    section: eh.BEX.BANS,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_BANS,
                    label: eA.intl.string(eA.t.ZbeITS),
                    element: Y.A,
                    predicate: () => t.canManageBans,
                };
            case eh.BEX.COMMUNITY:
                let eb = eA.intl.string(eA.t.ElKTeb);
                return (
                    t.guild.features.has(eh.GuildFeatures.COMMUNITY) && (eb = eA.intl.string(eA.t["8nY2LE"])),
                    {
                        section: eh.BEX.COMMUNITY,
                        impressionName: t.guild.features.has(eh.GuildFeatures.COMMUNITY)
                            ? s.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW
                            : s.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                        label: eb,
                        element: L.A,
                        ariaLabel: eb,
                        newIndicator:
                            !t.guild.features.has(eh.GuildFeatures.COMMUNITY) &&
                            null != t.memberCount &&
                            t.memberCount >= e_.dH &&
                            E.HP.hasHotspot(E._2.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                        notice: { stores: [y.A], element: L.L },
                    }
                );
            case eh.BEX.ONBOARDING:
                return {
                    section: eh.BEX.ONBOARDING,
                    label: eA.intl.string(eA.t["LdxCK/"]),
                    element: V.A,
                    ariaLabel: eA.intl.string(eA.t["LdxCK/"]),
                    newIndicatorDismissibleContentTypes: t.onboardingEnabled
                        ? null
                        : [l.M.COMMUNITY_ONBOARDING_NEW_BADGE],
                    notice: { stores: [B.A, w.A, P.A], element: z.A },
                    predicate: () => (0, h.rs)(t.guild.id),
                    decoration: (function (e, t) {
                        if (x.A.getEnabled(e)) return eA.intl.string(eA.t.pPSmxg).toUpperCase();
                        if ((0, H.o)(e)) return eA.intl.string(eA.t["HDF4o/"]).toUpperCase();
                        let n = F.ti,
                            i = n.findIndex((e) => e === t);
                        if (-1 !== i)
                            return eA.intl.formatToPlainString(eA.t["5r28iW"], { count: i + 1, total: n.length });
                    })(t.guild.id, t.onboardingStep),
                };
            case eh.BEX.ANALYTICS:
                return {
                    section: eh.BEX.ANALYTICS,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                    label: eA.intl.string(eA.t["0wWfUG"]),
                    ariaLabel: eA.intl.string(eA.t["0wWfUG"]),
                    element: G.A,
                    predicate: () => eE,
                };
            case eh.BEX.DISCOVERY_LANDING_PAGE:
                return {
                    section: eh.BEX.DISCOVERY_LANDING_PAGE,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                    label: (0, i.jsxs)("div", {
                        className: ep.o2,
                        children: [eA.intl.string(eA.t.kGlQGF), " ", (0, i.jsx)(u.A, {})],
                    }),
                    ariaLabel: eA.intl.string(eA.t.kGlQGF),
                    element: M.A,
                    notice: { stores: [y.A], element: M.j },
                    type: d.Py.CUSTOM,
                    predicate: () =>
                        t.canManageGuild &&
                        (t.guild.features.has(eh.GuildFeatures.DISCOVERABLE) || !!t.guildMetadata?.isPublished),
                };
            case eh.BEX.COMMUNITY_WELCOME:
                return {
                    section: eh.BEX.COMMUNITY_WELCOME,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                    label: eA.intl.string(eA.t["2rkmDr"]),
                    ariaLabel: eA.intl.string(eA.t["2rkmDr"]),
                    element: D.A,
                    notice: { stores: [b.A], element: T.A },
                    predicate: () =>
                        t.canManageGuild &&
                        t.guild.features.has(eh.GuildFeatures.COMMUNITY) &&
                        !t.welcomeScreenEmpty &&
                        !t.guild.features.has(eh.GuildFeatures.GUILD_SERVER_GUIDE),
                };
            case eh.BEX.ROLE_SUBSCRIPTIONS:
                return {
                    ...eN,
                    section: eh.BEX.ROLE_SUBSCRIPTIONS,
                    element: j.A,
                    type: d.Py.CUSTOM,
                    predicate: () =>
                        t.monetizationPredicate() &&
                        ((0, p.hA)(t.guild) || c.A.hasSeenCreatorOnboardingForGuild(t.guild.id)),
                    newIndicatorDismissibleContentTypes: (0, f.aV)(t.guild)
                        ? [l.M.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE]
                        : null,
                };
            case eh.BEX.GUILD_PRODUCTS:
                return {
                    section: eh.BEX.GUILD_PRODUCTS,
                    label: eA.intl.string(eA.t.X6h2gz),
                    ariaLabel: eA.intl.string(eA.t.X6h2gz),
                    element: A.A,
                    predicate: () =>
                        t.monetizationPredicate() &&
                        (0, _.$)(t.guild.id, "guild_product_settings_predicate") &&
                        (0, p.hA)(t.guild),
                };
            case eh.BEX.ROLE_SUBSCRIPTIONS_STORE_PAGE:
                return {
                    section: eh.BEX.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    impressionName: s.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                    newIndicator: 2022 === new Date().getFullYear(),
                    label: eA.intl.string(eA.t.ipTYsk),
                    ariaLabel: eA.intl.string(eA.t.ipTYsk),
                    element: N.A,
                    predicate: () => t.monetizationPredicate() && (0, p.hA)(t.guild),
                };
            case eh.BEX.MEMBERS:
                return {
                    section: eh.BEX.MEMBERS,
                    impressionName: s.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                    label: (0, i.jsx)(es.Q$, {}),
                    ariaLabel: eA.intl.string(eA.t["9Oq93m"]),
                    element: es.Ay,
                    type: d.Py.CUSTOM,
                    predicate: () => t.canAccessMembersPage,
                    onClick: () => {
                        (0, es.N8)();
                    },
                };
            case eh.BEX.DELETE:
                return {
                    section: eh.BEX.DELETE,
                    onClick() {
                        let e = C.default.getCurrentUser();
                        if (null == e) return;
                        let { name: s } = t.guild,
                            l = () => {
                                I._.subscribeOnce(eh.jej.LAYER_POP_COMPLETE, () => {
                                    S.A.deleteGuild(t.guild.id);
                                }),
                                    (0, o.jH)();
                            };
                        e.mfaEnabled
                            ? (0, r.A)({
                                  title: eA.intl.formatToPlainString(eA.t.us7mC1, { name: s }),
                                  subtitle: eA.intl.format(eA.t["Zuo+Vd"], { name: s }),
                                  confirmText: eA.intl.string(eA.t.l3hWP6),
                                  onConfirm: l,
                              })
                            : (0, a.mMO)(async () => {
                                  let { default: e } = await n.e("45199").then(n.bind(n, 310482));
                                  return (t) => (0, i.jsx)(e, { ...t, onConfirm: l, guildName: s });
                              });
                    },
                    label: eA.intl.string(eA.t.l3hWP6),
                    ariaLabel: eA.intl.string(eA.t.l3hWP6),
                    icon: (0, i.jsx)(a.ucK, { size: "xs", color: "currentColor" }),
                    variant: "destructive",
                    predicate: () => t.isOwnerWithRequiredMfaLevel,
                };
            case eh.BEX.LANDING:
            case eh.BEX.MEMBER_EDIT:
            case eh.BEX.MEMBER_TIMEOUT:
            case eh.BEX.MEMBER_KICK:
            case eh.BEX.MEMBER_BAN:
            case eh.BEX.CHANNELS:
            case eh.BEX.ROLE_EDIT:
            case eh.BEX.ROLE_PERMISSIONS:
            case eh.BEX.MEMBER_VERIFICATION:
            case eh.BEX.INTEGRATION_SETTINGS:
            case eh.BEX.SECURITY:
            case eh.BEX.AUDIT_LOG_FILTER:
            case eh.BEX.ROLE_SUBSCRIPTIONS_TIER_EDIT:
            case eh.BEX.VANITY_URL:
            case eh.BEX.INSTANT_INVITES:
            case eh.BEX.OVERVIEW:
            case eh.BEX.WEBHOOKS:
            case eh.BEX.EDIT_WEBHOOK:
            case eh.BEX.INTEGRATION_PLATFORM:
            case eh.BEX.LOBBIES_LINKED:
            case eh.BEX.EDIT_LINKED_LOBBY:
            case eh.BEX.CHANNELS_FOLLOWED:
            case eh.BEX.COMMUNITY_INTRO:
            case eh.BEX.ROLE_EDIT_REFRESH:
            case eh.BEX.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION:
            case eh.BEX.ROLE_SUBSCRIPTIONS_BASIC:
            case eh.BEX.ROLE_SUBSCRIPTIONS_TIERS:
            case eh.BEX.ROLE_SUBSCRIPTIONS_PAYMENTS:
            case eh.BEX.ROLE_SUBSCRIPTIONS_EMOJIS:
            case eh.BEX.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION:
                return null;
            default:
                (0, v.xb)(e);
        }
    },
};
