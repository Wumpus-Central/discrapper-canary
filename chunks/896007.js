n.d(t, {
    vE: function () {
        return f;
    }
}),
    n(47120);
var i = n(223892),
    r = n(738774),
    l = n(676317),
    a = n(637853),
    s = n(923726),
    o = n(144507),
    c = n(823379),
    d = n(600553),
    u = n(146305),
    m = n(981631),
    h = n(388032);
let { getSectionDefinition: g } = u.Z,
    x = {
        HEADER: 'HEADER',
        DIVIDER: 'DIVIDER'
    };
function p(e) {
    return '' !== e.toString() ? e.toString() : h.intl.string(h.t['154/bG']);
}
function f(e) {
    let { guild: t, canManageGuild: n, canViewAuditLog: u, canManageRoles: f, canManageWebhooks: C, canManageBans: v, canAccessMembersPage: _, canViewGuildAnalytics: N, isOwner: I, isOwnerWithRequiredMfaLevel: T, welcomeScreenEmpty: j, guildMetadata: b, canAccessClanSettings: S } = e,
        E = d.$.getCurrentConfig({
            guildId: t.id,
            location: 'generateSections'
        }).enabled,
        R = () =>
            (0, o.X$)({
                guild: t,
                isOwner: I,
                canManageGuildRoleSubscriptions: (0, o.H2)(t),
                isMonetizationWaitlistEnabledForGuild: (0, i.mG)(t.id),
                isGuildEligibleForRoleSubscriptions: (0, s.kT)(t.id),
                isExpeditedMonetizationOnboardingGuild: (0, i.Rw)(t),
                isUserInCreatorMonetizationEligibleCountry: (0, i.DB)(),
                shouldRestrictUpdatingRoleSubscriptionSettings: (0, r.cu)(t.id)
            }),
        y = {
            ...e,
            monetizationPredicate: R
        };
    if (E) {
        let e = [
                { section: x.DIVIDER },
                {
                    section: x.HEADER,
                    label: h.intl.string(h.t.zrSbNj)
                },
                g(m.pNK.EMOJI, y),
                g(m.pNK.STICKERS, y),
                g(m.pNK.SOUNDBOARD, y),
                g(m.pNK.APP_DIRECTORY, y),
                g(m.pNK.INTEGRATIONS, y)
            ],
            i =
                f || _ || n
                    ? [
                          { section: x.DIVIDER },
                          {
                              section: x.HEADER,
                              label: h.intl.string(h.t.WqkqPj)
                          },
                          g(m.pNK.ROLES, y),
                          g(m.pNK.MEMBERS, y),
                          g(m.pNK.INSTANT_INVITES, y),
                          g(m.pNK.ACCESS, y)
                      ]
                    : [],
            r = t.hasFeature(m.oNc.COMMUNITY),
            s = !r && ((0, l.Nb)(t.id) || (0, l.ze)(t.id)),
            o =
                (n && r) || (n && !r) || s || u || v
                    ? [
                          { section: x.DIVIDER },
                          {
                              section: x.HEADER,
                              label: h.intl.string(h.t['02hvfn'])
                          },
                          g(m.pNK.SAFETY, y),
                          g(m.pNK.MODERATION, y),
                          g(m.pNK.GUILD_AUTOMOD, y),
                          g(m.pNK.AUDIT_LOG, y),
                          g(m.pNK.BANS, y)
                      ]
                    : [],
            d = (0, a.wC)(t.id),
            C = n && (t.hasFeature(m.oNc.DISCOVERABLE) || !!(null == b ? void 0 : b.isPublished)),
            I = n && !j && !t.hasFeature(m.oNc.GUILD_SERVER_GUIDE),
            E =
                r && (n || d || (r && N) || C || I)
                    ? [
                          { section: x.DIVIDER },
                          {
                              section: x.HEADER,
                              label: h.intl.string(h.t['1g9A/f'])
                          },
                          g(m.pNK.COMMUNITY, y),
                          g(m.pNK.ONBOARDING, y),
                          g(m.pNK.ANALYTICS, y),
                          g(m.pNK.DISCOVERY, y),
                          g(m.pNK.DISCOVERY_LANDING_PAGE, y),
                          g(m.pNK.COMMUNITY_WELCOME, y)
                      ]
                    : [],
            A = R()
                ? [
                      { section: x.DIVIDER },
                      {
                          section: x.HEADER,
                          label: h.intl.string(h.t.mbn3bW)
                      },
                      g(m.pNK.ROLE_SUBSCRIPTIONS, y),
                      g(m.pNK.GUILD_PRODUCTS, y),
                      g(m.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, y)
                  ]
                : [],
            Z = n && !t.hasFeature(m.oNc.COMMUNITY),
            L = (null != S && S) || Z || n ? [{ section: x.DIVIDER }, g(m.pNK.CLAN, y), g(m.pNK.COMMUNITY, y), g(m.pNK.DISCOVERY, y), g(m.pNK.WIDGET, y), g(m.pNK.VANITY_URL, y), g(m.pNK.GUILD_TEMPLATES, y)] : [];
        return [
            {
                section: x.HEADER,
                label: p(t)
            },
            g(m.pNK.OVERVIEW, y),
            ...e,
            ...i,
            ...o,
            ...E,
            ...A,
            { section: x.DIVIDER },
            g(m.pNK.GUILD_PREMIUM, y),
            ...L,
            {
                section: x.DIVIDER,
                predicate: () => T
            },
            g(m.pNK.DELETE, y)
        ].filter(c.lm);
    }
    return [
        {
            section: x.HEADER,
            label: p(t)
        },
        g(m.pNK.OVERVIEW, y),
        g(m.pNK.ROLES, y),
        g(m.pNK.EMOJI, y),
        g(m.pNK.STICKERS, y),
        g(m.pNK.SOUNDBOARD, y),
        g(m.pNK.WIDGET, y),
        g(m.pNK.GUILD_TEMPLATES, y),
        g(m.pNK.VANITY_URL, y),
        g(m.pNK.ACCESS, y),
        {
            section: x.DIVIDER,
            predicate: () => n || C
        },
        {
            section: x.HEADER,
            label: h.intl.string(h.t.PHjkRE),
            predicate: () => n || C
        },
        g(m.pNK.INTEGRATIONS, y),
        g(m.pNK.APP_DIRECTORY, y),
        {
            section: x.DIVIDER,
            predicate: () => n
        },
        {
            section: x.HEADER,
            label: h.intl.string(h.t['5tbTdX']),
            predicate: () => n
        },
        g(m.pNK.SAFETY, y),
        g(m.pNK.MODERATION, y),
        g(m.pNK.GUILD_AUTOMOD, y),
        g(m.pNK.AUDIT_LOG, y),
        g(m.pNK.BANS, y),
        {
            section: x.DIVIDER,
            predicate: () => n || N
        },
        {
            section: x.HEADER,
            label: h.intl.string(h.t['1g9A/f']),
            predicate: () => !S && (n || N)
        },
        g(m.pNK.CLAN, y),
        g(m.pNK.COMMUNITY, y),
        g(m.pNK.ONBOARDING, y),
        g(m.pNK.ANALYTICS, y),
        g(m.pNK.DISCOVERY, y),
        g(m.pNK.DISCOVERY_LANDING_PAGE, y),
        g(m.pNK.COMMUNITY_WELCOME, y),
        {
            section: x.DIVIDER,
            predicate: R
        },
        {
            section: x.HEADER,
            label: h.intl.string(h.t.mbn3bW),
            predicate: R
        },
        g(m.pNK.ROLE_SUBSCRIPTIONS, y),
        g(m.pNK.GUILD_PRODUCTS, y),
        g(m.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, y),
        { section: x.DIVIDER },
        g(m.pNK.GUILD_PREMIUM, y),
        { section: x.DIVIDER },
        {
            section: x.HEADER,
            label: h.intl.string(h.t['+OecxM'])
        },
        g(m.pNK.MEMBERS, y),
        g(m.pNK.INSTANT_INVITES, y),
        {
            section: x.DIVIDER,
            predicate: () => T
        },
        g(m.pNK.DELETE, y)
    ].filter(c.lm);
}
t.ZP = { generateSections: f };
