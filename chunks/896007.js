n.d(t, {
    vE: function () {
        return g;
    }
}),
    n(653041);
var i = n(223892),
    r = n(738774),
    l = n(676317),
    s = n(923726),
    a = n(144507),
    o = n(823379),
    c = n(146305),
    d = n(981631),
    u = n(388032);
let { getSectionDefinition: m } = c.Z,
    h = {
        HEADER: 'HEADER',
        DIVIDER: 'DIVIDER'
    };
function g(e) {
    var t, n, c;
    let { guild: g, canManageGuild: x, canViewAuditLog: p, canManageRoles: f, canManageWebhooks: C, canUnlinkChannels: v, canManageBans: N, canAccessMembersPage: _, canViewGuildAnalytics: I, isOwner: T, isOwnerWithRequiredMfaLevel: j, canAccessClanSettings: b, isGuildSettingsFoundationEnabled: E, isGuildAdmin: S, canManageGuildExpressions: R } = e;
    let y =
            ((t = g),
            (n = T),
            () =>
                (0, a.X$)({
                    guild: t,
                    isOwner: n,
                    canManageGuildRoleSubscriptions: (0, a.H2)(t),
                    isMonetizationWaitlistEnabledForGuild: (0, i.mG)(t.id),
                    isGuildEligibleForRoleSubscriptions: (0, s.kT)(t.id),
                    isExpeditedMonetizationOnboardingGuild: (0, i.Rw)(t),
                    isUserInCreatorMonetizationEligibleCountry: (0, i.DB)(),
                    shouldRestrictUpdatingRoleSubscriptionSettings: (0, r.cu)(t.id)
                })),
        A = {
            ...e,
            monetizationPredicate: y
        };
    if (E) {
        let e = [];
        e.push(m(d.pNK.PROFILE, A)), e.push(m(d.pNK.TAG, A)), e.push(m(d.pNK.LAYOUT, A)), e.push(m(d.pNK.ENGAGEMENT, A));
        R &&
            (e.push({ section: h.DIVIDER }),
            e.push({
                section: h.HEADER,
                label: u.intl.string(u.t.m6lkGx)
            }),
            e.push(m(d.pNK.EMOJI, A)),
            e.push(m(d.pNK.STICKERS, A)),
            e.push(m(d.pNK.SOUNDBOARD, A)));
        (x || f || _ || S) &&
            (e.push({ section: h.DIVIDER }),
            e.push({
                section: h.HEADER,
                label: u.intl.string(u.t.bMAKMD)
            }),
            e.push(m(d.pNK.MEMBERS, A)),
            e.push(m(d.pNK.ROLES, A)),
            e.push(m(d.pNK.INVITES, A)),
            e.push(m(d.pNK.ACCESS, A))),
            e.push({ section: h.DIVIDER }),
            e.push({
                section: h.HEADER,
                label: u.intl.string(u.t.wF3KJy)
            }),
            e.push(m(d.pNK.INTEGRATIONS, A)),
            e.push(m(d.pNK.APP_DIRECTORY, A));
        let t = !g.hasFeature(d.oNc.COMMUNITY) && ((0, l.Nb)(g.id) || (0, l.ze)(g.id));
        (x || p || N || t) &&
            (e.push({ section: h.DIVIDER }),
            e.push({
                section: h.HEADER,
                label: u.intl.string(u.t['5tbTdX'])
            }),
            e.push(m(d.pNK.SAFETY, A)),
            e.push(m(d.pNK.MODERATION, A)),
            e.push(m(d.pNK.AUDIT_LOG, A)),
            e.push(m(d.pNK.BANS, A)),
            e.push(m(d.pNK.GUILD_AUTOMOD, A)));
        let n = g.hasFeature(d.oNc.COMMUNITY) && I,
            i = y();
        return (x || n || i) && (e.push({ section: h.DIVIDER }), e.push(m(d.pNK.COMMUNITY, A)), e.push(m(d.pNK.ONBOARDING, A)), e.push(m(d.pNK.ANALYTICS, A)), e.push(m(d.pNK.COMMUNITY_WELCOME, A)), e.push(m(d.pNK.ROLE_SUBSCRIPTIONS, A)), e.push(m(d.pNK.GUILD_PRODUCTS, A)), e.push(m(d.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, A))), e.push({ section: h.DIVIDER }), e.push(m(d.pNK.GUILD_TEMPLATES, A)), e.push(m(d.pNK.WIDGET, A)), e.push(m(d.pNK.DELETE, A)), e.filter(o.lm);
    }
    return [
        {
            section: h.HEADER,
            label: '' !== (c = g).toString() ? c.toString() : u.intl.string(u.t['154/bG'])
        },
        m(d.pNK.OVERVIEW, A),
        m(d.pNK.ROLES, A),
        m(d.pNK.EMOJI, A),
        m(d.pNK.STICKERS, A),
        m(d.pNK.SOUNDBOARD, A),
        m(d.pNK.WIDGET, A),
        m(d.pNK.GUILD_TEMPLATES, A),
        m(d.pNK.VANITY_URL, A),
        m(d.pNK.ACCESS, A),
        {
            section: h.DIVIDER,
            predicate: () => x || C || v
        },
        {
            section: h.HEADER,
            label: u.intl.string(u.t.PHjkRE),
            predicate: () => x || C || v
        },
        m(d.pNK.INTEGRATIONS, A),
        m(d.pNK.APP_DIRECTORY, A),
        {
            section: h.DIVIDER,
            predicate: () => x
        },
        {
            section: h.HEADER,
            label: u.intl.string(u.t['5tbTdX']),
            predicate: () => x
        },
        m(d.pNK.SAFETY, A),
        m(d.pNK.MODERATION, A),
        m(d.pNK.GUILD_AUTOMOD, A),
        m(d.pNK.AUDIT_LOG, A),
        m(d.pNK.BANS, A),
        {
            section: h.DIVIDER,
            predicate: () => x || I
        },
        {
            section: h.HEADER,
            label: u.intl.string(u.t['1g9A/f']),
            predicate: () => !b && (x || I)
        },
        m(d.pNK.CLAN, A),
        m(d.pNK.COMMUNITY, A),
        m(d.pNK.ONBOARDING, A),
        m(d.pNK.ANALYTICS, A),
        m(d.pNK.DISCOVERY, A),
        m(d.pNK.DISCOVERY_LANDING_PAGE, A),
        m(d.pNK.COMMUNITY_WELCOME, A),
        {
            section: h.DIVIDER,
            predicate: y
        },
        {
            section: h.HEADER,
            label: u.intl.string(u.t.mbn3bW),
            predicate: y
        },
        m(d.pNK.ROLE_SUBSCRIPTIONS, A),
        m(d.pNK.GUILD_PRODUCTS, A),
        m(d.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, A),
        { section: h.DIVIDER },
        m(d.pNK.GUILD_PREMIUM, A),
        { section: h.DIVIDER },
        {
            section: h.HEADER,
            label: u.intl.string(u.t['+OecxM'])
        },
        m(d.pNK.MEMBERS, A),
        m(d.pNK.INSTANT_INVITES, A),
        {
            section: h.DIVIDER,
            predicate: () => j
        },
        m(d.pNK.DELETE, A)
    ].filter(o.lm);
}
t.ZP = { generateSections: g };
