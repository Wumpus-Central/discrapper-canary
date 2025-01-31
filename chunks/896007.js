n.d(t, {
    ZP: () => x,
    vE: () => g
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
    let { guild: t, canManageGuild: n, canViewAuditLog: c, canManageRoles: g, canManageWebhooks: x, canUnlinkChannels: p, canManageBans: _, canAccessMembersPage: C, canViewGuildAnalytics: f, isOwner: v, isOwnerWithRequiredMfaLevel: N, canAccessClanSettings: j, isGuildSettingsFoundationEnabled: I, isGuildAdmin: E, canManageGuildExpressions: b } = e,
        T = () =>
            (0, a.X$)({
                guild: t,
                isOwner: v,
                canManageGuildRoleSubscriptions: (0, a.H2)(t),
                isMonetizationWaitlistEnabledForGuild: (0, i.mG)(t.id),
                isGuildEligibleForRoleSubscriptions: (0, s.kT)(t.id),
                isExpeditedMonetizationOnboardingGuild: (0, i.Rw)(t),
                isUserInCreatorMonetizationEligibleCountry: (0, i.DB)(),
                shouldRestrictUpdatingRoleSubscriptionSettings: (0, r.cu)(t.id)
            }),
        S = {
            ...e,
            monetizationPredicate: T
        };
    if (I) {
        let e = [];
        e.push(m(d.pNK.PROFILE, S)),
            e.push(m(d.pNK.TAG, S)),
            e.push(m(d.pNK.LAYOUT, S)),
            e.push(m(d.pNK.ENGAGEMENT, S)),
            b &&
                (e.push({ section: h.DIVIDER }),
                e.push({
                    section: h.HEADER,
                    label: u.intl.string(u.t.m6lkGx)
                }),
                e.push(m(d.pNK.EMOJI, S)),
                e.push(m(d.pNK.STICKERS, S)),
                e.push(m(d.pNK.SOUNDBOARD, S))),
            (n || g || C || E) &&
                (e.push({ section: h.DIVIDER }),
                e.push({
                    section: h.HEADER,
                    label: u.intl.string(u.t.bMAKMD)
                }),
                e.push(m(d.pNK.MEMBERS, S)),
                e.push(m(d.pNK.ROLES, S)),
                e.push(m(d.pNK.INVITES, S)),
                e.push(m(d.pNK.ACCESS, S))),
            e.push({ section: h.DIVIDER }),
            e.push({
                section: h.HEADER,
                label: u.intl.string(u.t.wF3KJy)
            }),
            e.push(m(d.pNK.INTEGRATIONS, S)),
            e.push(m(d.pNK.APP_DIRECTORY, S));
        let i = !t.hasFeature(d.oNc.COMMUNITY) && ((0, l.Nb)(t.id) || (0, l.ze)(t.id));
        (n || c || _ || i) &&
            (e.push({ section: h.DIVIDER }),
            e.push({
                section: h.HEADER,
                label: u.intl.string(u.t['5tbTdX'])
            }),
            e.push(m(d.pNK.SAFETY, S)),
            e.push(m(d.pNK.MODERATION, S)),
            e.push(m(d.pNK.AUDIT_LOG, S)),
            e.push(m(d.pNK.BANS, S)),
            e.push(m(d.pNK.GUILD_AUTOMOD, S)));
        let r = t.hasFeature(d.oNc.COMMUNITY) && f,
            s = T();
        return (n || r || s) && (e.push({ section: h.DIVIDER }), e.push(m(d.pNK.COMMUNITY, S)), e.push(m(d.pNK.ONBOARDING, S)), e.push(m(d.pNK.ANALYTICS, S)), e.push(m(d.pNK.COMMUNITY_WELCOME, S)), e.push(m(d.pNK.ROLE_SUBSCRIPTIONS, S)), e.push(m(d.pNK.GUILD_PRODUCTS, S)), e.push(m(d.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, S))), e.push({ section: h.DIVIDER }), e.push(m(d.pNK.GUILD_TEMPLATES, S)), e.push(m(d.pNK.WIDGET, S)), e.push(m(d.pNK.DELETE, S)), e.filter(o.lm);
    }
    return [
        {
            section: h.HEADER,
            label: '' !== t.toString() ? t.toString() : u.intl.string(u.t['154/bG'])
        },
        m(d.pNK.OVERVIEW, S),
        m(d.pNK.ROLES, S),
        m(d.pNK.EMOJI, S),
        m(d.pNK.STICKERS, S),
        m(d.pNK.SOUNDBOARD, S),
        m(d.pNK.WIDGET, S),
        m(d.pNK.GUILD_TEMPLATES, S),
        m(d.pNK.VANITY_URL, S),
        m(d.pNK.ACCESS, S),
        {
            section: h.DIVIDER,
            predicate: () => n || x || p
        },
        {
            section: h.HEADER,
            label: u.intl.string(u.t.PHjkRE),
            predicate: () => n || x || p
        },
        m(d.pNK.INTEGRATIONS, S),
        m(d.pNK.APP_DIRECTORY, S),
        {
            section: h.DIVIDER,
            predicate: () => n
        },
        {
            section: h.HEADER,
            label: u.intl.string(u.t['5tbTdX']),
            predicate: () => n
        },
        m(d.pNK.SAFETY, S),
        m(d.pNK.MODERATION, S),
        m(d.pNK.GUILD_AUTOMOD, S),
        m(d.pNK.AUDIT_LOG, S),
        m(d.pNK.BANS, S),
        {
            section: h.DIVIDER,
            predicate: () => n || f
        },
        {
            section: h.HEADER,
            label: u.intl.string(u.t['1g9A/f']),
            predicate: () => !j && (n || f)
        },
        m(d.pNK.CLAN, S),
        m(d.pNK.COMMUNITY, S),
        m(d.pNK.ONBOARDING, S),
        m(d.pNK.ANALYTICS, S),
        m(d.pNK.DISCOVERY, S),
        m(d.pNK.DISCOVERY_LANDING_PAGE, S),
        m(d.pNK.COMMUNITY_WELCOME, S),
        {
            section: h.DIVIDER,
            predicate: T
        },
        {
            section: h.HEADER,
            label: u.intl.string(u.t.mbn3bW),
            predicate: T
        },
        m(d.pNK.ROLE_SUBSCRIPTIONS, S),
        m(d.pNK.GUILD_PRODUCTS, S),
        m(d.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, S),
        { section: h.DIVIDER },
        m(d.pNK.GUILD_PREMIUM, S),
        { section: h.DIVIDER },
        {
            section: h.HEADER,
            label: u.intl.string(u.t['+OecxM'])
        },
        m(d.pNK.MEMBERS, S),
        m(d.pNK.INSTANT_INVITES, S),
        {
            section: h.DIVIDER,
            predicate: () => N
        },
        m(d.pNK.DELETE, S)
    ].filter(o.lm);
}
let x = { generateSections: g };
