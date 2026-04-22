n.d(t, { A: () => eb });
var i = n(627968),
    l = n(110259),
    s = n(554146),
    r = n(314116),
    a = n(192308),
    o = n(241326),
    d = n(398590),
    c = n(361739),
    u = n(448564),
    m = n(611371),
    g = n(979816),
    h = n(774780),
    x = n(591552),
    _ = n(961973),
    p = n(440293),
    A = n(84763),
    E = n(567305),
    f = n(739455),
    j = n(599167),
    N = n(7891),
    I = n(450510),
    C = n(521427),
    b = n(383272),
    v = n(861410),
    S = n(433522),
    T = n(287809),
    y = n(203982),
    R = n(403362),
    L = n(997509),
    D = n(555337),
    O = n(723278),
    G = n(282625),
    M = n(423981),
    k = n(925622),
    U = n(123488),
    w = n(758246),
    P = n(53656),
    B = n(826292),
    F = n(352821),
    H = n(132514),
    V = n(287479),
    z = n(400812),
    W = n(72533),
    Y = n(291444),
    K = n(239741),
    X = n(396816),
    Z = n(807165),
    J = n(454516),
    q = n(155008),
    Q = n(965033),
    $ = n(737331),
    ee = n(771935),
    et = n(647171),
    en = n(378831),
    ei = n(113266),
    el = n(91534),
    es = n(984562),
    er = n(997418),
    ea = n(314737),
    eo = n(660834),
    ed = n(365701),
    ec = n(712367),
    eu = n(533350),
    em = n(251838),
    eg = n(239484),
    eh = n(933137),
    ex = n(234721),
    e_ = n(306846),
    ep = n(824451),
    eA = n(215194),
    eE = n(489154),
    ef = n(652215),
    ej = n(124759),
    eN = n(412848),
    eI = n(985018),
    eC = n(486072);
let eb = {
    getSectionDefinition: function (e, t) {
        let eb = (0, p.$)(t.guild.id),
            ev =
                !1 === t.guild.features.has(ef.GuildFeatures.CREATOR_MONETIZABLE) &&
                !1 === t.guild.features.has(ef.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
            eS =
                eb && ev
                    ? {
                          label: (0, i.jsx)("div", { className: eC.vf, children: eI.intl.string(eI.t.Tn7Koo) }),
                          ariaLabel: eI.intl.string(eI.t.Tn7Koo),
                      }
                    : {
                          label: (0, i.jsx)("div", { className: eC.vf, children: eI.intl.string(eI.t["KzCF/6"]) }),
                          ariaLabel: eI.intl.string(eI.t["KzCF/6"]),
                      },
            eT = t.guild.features.has(ef.GuildFeatures.COMMUNITY) && t.canViewGuildAnalytics;
        switch (e) {
            case ef.BEX.PROFILE:
                return {
                    section: ef.BEX.PROFILE,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_PROFILE,
                    label: eI.intl.string(eI.t.txdaxf),
                    ariaLabel: eI.intl.string(eI.t.txdaxf),
                    element: eA.A,
                    type: c.Py.SCROLLABLE_CUSTOM,
                    notice: { stores: [D.A], element: eE.A },
                };
            case ef.BEX.TAG:
                return {
                    section: ef.BEX.TAG,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_TAG,
                    label: eI.intl.string(eI.t["2QmKZ2"]),
                    ariaLabel: eI.intl.string(eI.t["2QmKZ2"]),
                    element: es.A,
                    predicate: () => t.canManageGuild,
                    notice: { stores: [D.A], element: er.A },
                };
            case ef.BEX.GUILD_THEME:
                return {
                    section: ef.BEX.GUILD_THEME,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_GUILD_THEME,
                    label: eI.intl.string(eN.default["/6NbRv"]),
                    ariaLabel: eI.intl.string(eN.default["/6NbRv"]),
                    element: en.A,
                    predicate: () => t.canManageGuild && (0, b.Qs)(t.guild.id, "getSectionDefinition"),
                };
            case ef.BEX.ENGAGEMENT:
                return {
                    section: ef.BEX.ENGAGEMENT,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT,
                    label: eI.intl.string(eI.t["6TAHbx"]),
                    ariaLabel: eI.intl.string(eI.t["6TAHbx"]),
                    element: eu.A,
                    notice: { stores: [D.A], element: em.y },
                };
            case ef.BEX.BOOST_PERKS:
                return {
                    section: ef.BEX.BOOST_PERKS,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS,
                    label: eI.intl.string(eI.t.UKgg5N),
                    ariaLabel: eI.intl.string(eI.t.UKgg5N),
                    element: ee.H,
                    notice: { stores: [D.A, $.A], element: et.l },
                };
            case ef.BEX.INVITES:
                return {
                    section: ef.BEX.INVITES,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_INVITES_V2,
                    label: eI.intl.string(eI.t.YOt3Om),
                    ariaLabel: eI.intl.string(eI.t.YOt3Om),
                    element: eg.A,
                    type: c.Py.CUSTOM,
                    predicate: () => t.canManageGuild,
                };
            case ef.BEX.ROLES:
                return {
                    section: ef.BEX.ROLES,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_ROLES,
                    label: eI.intl.string(eI.t["LPJmL/"]),
                    element: Z.A,
                    type: c.Py.MINIMAL,
                    ariaLabel: eI.intl.string(eI.t.KXcEC9),
                    notice: { stores: [X.A], element: Z.W },
                    predicate: () => t.canManageRoles,
                };
            case ef.BEX.EMOJI:
                return {
                    section: ef.BEX.EMOJI,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: eI.intl.string(eI.t.sMOuuS),
                    element: ea.Ay,
                    predicate: () => t.canManageGuildExpressions,
                };
            case ef.BEX.STICKERS:
                return {
                    section: ef.BEX.STICKERS,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: eI.intl.string(eI.t.R5nQkS),
                    ariaLabel: eI.intl.string(eI.t.R5nQkS),
                    element: el.A,
                    predicate: () => t.canManageGuildExpressions,
                };
            case ef.BEX.SOUNDBOARD:
                return {
                    section: ef.BEX.SOUNDBOARD,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: eI.intl.string(eI.t.OWQNYr),
                    ariaLabel: eI.intl.string(eI.t.OWQNYr),
                    element: ei.A,
                    predicate: () => t.canManageGuildExpressions,
                };
            case ef.BEX.OFFICIAL_MESSAGES:
                return {
                    section: ef.BEX.OFFICIAL_MESSAGES,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_OFFICIAL_MESSAGES,
                    label: eI.intl.string(eI.t.xHEzFh),
                    ariaLabel: eI.intl.string(eI.t.xHEzFh),
                    element: ep.Ay,
                    predicate: () => t.canManageGuild && (0, C.GP)(t.guild, "getSectionDefinition"),
                    notice: { stores: [D.A], element: ep.wF },
                };
            case ef.BEX.GUILD_TEMPLATES:
                return {
                    section: ef.BEX.GUILD_TEMPLATES,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                    label: (0, i.jsx)(ec.A, { showDirtyIndicator: t.showDirtyGuildTemplateIndicator }),
                    ariaLabel: eI.intl.string(eI.t.KUw7Ss),
                    element: ed.Ay,
                    notice: { stores: [ed.Jx], element: ed.lz },
                    predicate: () => t.canManageGuild,
                };
            case ef.BEX.ACCESS:
                return {
                    section: ef.BEX.ACCESS,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_ACCESS,
                    label: eI.intl.string(eI.t.YJlvBM),
                    element: eh.y,
                    notice: { stores: [e_.A], element: ex.G },
                    predicate: () => t.canManageGuild,
                    ariaLabel: eI.intl.string(eI.t.YJlvBM),
                };
            case ef.BEX.INTEGRATIONS:
                return {
                    section: ef.BEX.INTEGRATIONS,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: eI.intl.string(eI.t.CIsNZw),
                    ariaLabel: eI.intl.string(eI.t.CIsNZw),
                    element: B.A,
                    notice: { stores: [P.default, D.A], element: B.K },
                    predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels,
                };
            case ef.BEX.APP_DIRECTORY:
                return {
                    section: ef.BEX.APP_DIRECTORY,
                    label: (0, i.jsx)(O.L, {}),
                    ariaLabel: eI.intl.string(eI.t.AKcFUj),
                    onClick: () => {
                        (0, O.N)({ guildId: t.guild.id, section: e });
                    },
                };
            case ef.BEX.SAFETY:
                return {
                    section: ef.BEX.SAFETY,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_SAFETY,
                    label: eI.intl.string(eI.t["suhY+Y"]),
                    ariaLabel: eI.intl.string(eI.t["suhY+Y"]),
                    element: q.A,
                    newIndicatorDismissibleContentTypes: [s.M.COMMUNITY_GUILD_SETTINGS_SAFETY],
                    predicate: () => t.canManageGuild && t.guild.features.has(ef.GuildFeatures.COMMUNITY),
                };
            case ef.BEX.MODERATION:
                return {
                    section: ef.BEX.MODERATION,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_MODERATION,
                    label: eI.intl.string(eI.t["suhY+Y"]),
                    element: Q.Ay,
                    predicate: () => t.canManageGuild && !t.guild.features.has(ef.GuildFeatures.COMMUNITY),
                };
            case ef.BEX.GUILD_AUTOMOD:
                return {
                    section: ef.BEX.GUILD_AUTOMOD,
                    label: (0, i.jsx)("div", { className: eC.o2, children: eI.intl.string(eI.t.uRelgx) }),
                    ariaLabel: eI.intl.string(eI.t.uRelgx),
                    element: h.A,
                    newIndicatorDismissibleContentTypes: null,
                    predicate: () =>
                        !t.guild.features.has(ef.GuildFeatures.COMMUNITY) &&
                        ((0, g.hX)(t.guild.id) || (0, g.i_)(t.guild.id)),
                };
            case ef.BEX.AUDIT_LOG:
                return {
                    section: ef.BEX.AUDIT_LOG,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                    label: eI.intl.string(eI.t.SPWLyT),
                    element: G.A,
                    type: c.Py.CUSTOM,
                    predicate: () => t.canViewAuditLog,
                };
            case ef.BEX.BANS:
                return {
                    section: ef.BEX.BANS,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_BANS,
                    label: eI.intl.string(eI.t.ZbeITS),
                    element: J.A,
                    predicate: () => t.canManageBans,
                };
            case ef.BEX.COMMUNITY:
                let ey = eI.intl.string(eI.t.ElKTeb);
                return (
                    t.guild.features.has(ef.GuildFeatures.COMMUNITY) && (ey = eI.intl.string(eI.t["8nY2LE"])),
                    {
                        section: ef.BEX.COMMUNITY,
                        impressionName: t.guild.features.has(ef.GuildFeatures.COMMUNITY)
                            ? l.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW
                            : l.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                        label: ey,
                        element: k.A,
                        ariaLabel: ey,
                        newIndicator:
                            !t.guild.features.has(ef.GuildFeatures.COMMUNITY) &&
                            null != t.memberCount &&
                            t.memberCount >= ej.dH &&
                            I.HP.hasHotspot(I._2.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                        notice: { stores: [D.A], element: k.L },
                    }
                );
            case ef.BEX.ONBOARDING:
                return {
                    section: ef.BEX.ONBOARDING,
                    label: eI.intl.string(eI.t["LdxCK/"]),
                    element: Y.A,
                    ariaLabel: eI.intl.string(eI.t["LdxCK/"]),
                    newIndicatorDismissibleContentTypes: t.onboardingEnabled
                        ? null
                        : [s.M.COMMUNITY_ONBOARDING_NEW_BADGE],
                    notice: { stores: [V.A, H.A, F.A], element: K.A },
                    predicate: () => (0, _.rs)(t.guild.id),
                    decoration: (function (e, t) {
                        if (x.A.getEnabled(e)) return eI.intl.string(eI.t.pPSmxg).toUpperCase();
                        if ((0, W.o)(e)) return eI.intl.string(eI.t["HDF4o/"]).toUpperCase();
                        let n = z.ti,
                            i = n.findIndex((e) => e === t);
                        if (-1 !== i)
                            return eI.intl.formatToPlainString(eI.t["5r28iW"], { count: i + 1, total: n.length });
                    })(t.guild.id, t.onboardingStep),
                };
            case ef.BEX.ANALYTICS:
                return {
                    section: ef.BEX.ANALYTICS,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                    label: eI.intl.string(eI.t["0wWfUG"]),
                    ariaLabel: eI.intl.string(eI.t["0wWfUG"]),
                    element: M.A,
                    predicate: () => eT,
                };
            case ef.BEX.DISCOVERY_LANDING_PAGE:
                return {
                    section: ef.BEX.DISCOVERY_LANDING_PAGE,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                    label: (0, i.jsxs)("div", {
                        className: eC.o2,
                        children: [eI.intl.string(eI.t.kGlQGF), " ", (0, i.jsx)(m.A, {})],
                    }),
                    ariaLabel: eI.intl.string(eI.t.kGlQGF),
                    element: w.A,
                    notice: { stores: [D.A], element: w.j },
                    type: c.Py.CUSTOM,
                    predicate: () =>
                        t.canManageGuild &&
                        (t.guild.features.has(ef.GuildFeatures.DISCOVERABLE) || !!t.guildMetadata?.isPublished),
                };
            case ef.BEX.COMMUNITY_WELCOME:
                return {
                    section: ef.BEX.COMMUNITY_WELCOME,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                    label: eI.intl.string(eI.t["2rkmDr"]),
                    ariaLabel: eI.intl.string(eI.t["2rkmDr"]),
                    element: U.A,
                    notice: { stores: [v.A], element: S.A },
                    predicate: () =>
                        t.canManageGuild &&
                        t.guild.features.has(ef.GuildFeatures.COMMUNITY) &&
                        !t.welcomeScreenEmpty &&
                        !t.guild.features.has(ef.GuildFeatures.GUILD_SERVER_GUIDE),
                };
            case ef.BEX.ROLE_SUBSCRIPTIONS:
                return {
                    ...eS,
                    section: ef.BEX.ROLE_SUBSCRIPTIONS,
                    element: j.A,
                    type: c.Py.CUSTOM,
                    predicate: () =>
                        t.monetizationPredicate() &&
                        ((0, E.hA)(t.guild) || u.A.hasSeenCreatorOnboardingForGuild(t.guild.id)),
                    newIndicatorDismissibleContentTypes: (0, f.aV)(t.guild)
                        ? [s.M.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE]
                        : null,
                };
            case ef.BEX.GUILD_PRODUCTS:
                return {
                    section: ef.BEX.GUILD_PRODUCTS,
                    label: eI.intl.string(eI.t.X6h2gz),
                    ariaLabel: eI.intl.string(eI.t.X6h2gz),
                    element: A.A,
                    predicate: () => t.monetizationPredicate() && (0, p.$)(t.guild.id) && (0, E.hA)(t.guild),
                };
            case ef.BEX.ROLE_SUBSCRIPTIONS_STORE_PAGE:
                return {
                    section: ef.BEX.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    impressionName: l.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                    newIndicator: 2022 === new Date().getFullYear(),
                    label: eI.intl.string(eI.t.ipTYsk),
                    ariaLabel: eI.intl.string(eI.t.ipTYsk),
                    element: N.A,
                    predicate: () => t.monetizationPredicate() && (0, E.hA)(t.guild),
                };
            case ef.BEX.MEMBERS:
                return {
                    section: ef.BEX.MEMBERS,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                    label: (0, i.jsx)(eo.Q$, {}),
                    ariaLabel: eI.intl.string(eI.t["9Oq93m"]),
                    element: eo.Ay,
                    type: c.Py.CUSTOM,
                    predicate: () => t.canAccessMembersPage,
                    onClick: () => {
                        (0, eo.N8)();
                    },
                };
            case ef.BEX.DELETE:
                return {
                    section: ef.BEX.DELETE,
                    onClick() {
                        let e = T.default.getCurrentUser();
                        if (null == e) return;
                        let { name: l } = t.guild,
                            s = () => {
                                y._.subscribeOnce(ef.jej.LAYER_POP_COMPLETE, () => {
                                    L.A.deleteGuild(t.guild.id);
                                }),
                                    (0, d.jH)();
                            };
                        e.mfaEnabled
                            ? (0, r.A)({
                                  title: eI.intl.formatToPlainString(eI.t.us7mC1, { name: l }),
                                  subtitle: eI.intl.format(eI.t["Zuo+Vd"], { name: l }),
                                  confirmText: eI.intl.string(eI.t.l3hWP6),
                                  onConfirm: s,
                              })
                            : (0, a.openModalLazy)(async () => {
                                  let { default: e } = await n.e("45199").then(n.bind(n, 310482));
                                  return (t) => (0, i.jsx)(e, { ...t, onConfirm: s, guildName: l });
                              });
                    },
                    label: eI.intl.string(eI.t.l3hWP6),
                    ariaLabel: eI.intl.string(eI.t.l3hWP6),
                    icon: (0, i.jsx)(o.u, { size: "xs", color: "currentColor" }),
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
                (0, R.xb)(e);
        }
    },
};
