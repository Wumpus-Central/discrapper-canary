n.d(t, {
    ZP: () => h,
    vE: () => p
}),
    n(539854);
var r = n(223892),
    i = n(738774),
    s = n(676317),
    l = n(923726),
    a = n(144507),
    o = n(823379),
    c = n(146305),
    d = n(981631),
    u = n(388032);
let { getSectionDefinition: m } = c.Z,
    g = {
        HEADER: 'HEADER',
        DIVIDER: 'DIVIDER'
    };
function p(e) {
    var t, n;
    let { guild: c, canManageGuild: p, canViewAuditLog: h, canManageRoles: f, canManageWebhooks: x, canUnlinkChannels: b, canManageBans: j, canAccessMembersPage: N, canViewGuildAnalytics: _, isOwner: v, isOwnerWithRequiredMfaLevel: O, isGuildSettingsFoundationEnabled: C, isGuildAdmin: y, canManageGuildExpressions: I } = e,
        E = () =>
            (0, a.X$)({
                guild: c,
                isOwner: v,
                canManageGuildRoleSubscriptions: (0, a.H2)(c),
                isMonetizationWaitlistEnabledForGuild: (0, r.mG)(c.id),
                isGuildEligibleForRoleSubscriptions: (0, l.kT)(c.id),
                isExpeditedMonetizationOnboardingGuild: (0, r.Rw)(c),
                isUserInCreatorMonetizationEligibleCountry: (0, r.DB)(),
                shouldRestrictUpdatingRoleSubscriptionSettings: (0, i.cu)(c.id)
            }),
        S =
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, e)),
            (n = n = { monetizationPredicate: E }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t);
    if (C) {
        let e = [];
        e.push(m(d.pNK.PROFILE, S)),
            e.push(m(d.pNK.TAG, S)),
            e.push(m(d.pNK.ENGAGEMENT, S)),
            e.push(m(d.pNK.BOOST_PERKS, S)),
            I &&
                (e.push({ section: g.DIVIDER }),
                e.push({
                    section: g.HEADER,
                    label: u.NW.string(u.t.m6lkGx)
                }),
                e.push(m(d.pNK.EMOJI, S)),
                e.push(m(d.pNK.STICKERS, S)),
                e.push(m(d.pNK.SOUNDBOARD, S))),
            (p || f || N || y) &&
                (e.push({ section: g.DIVIDER }),
                e.push({
                    section: g.HEADER,
                    label: u.NW.string(u.t.bMAKMD)
                }),
                e.push(m(d.pNK.MEMBERS, S)),
                e.push(m(d.pNK.ROLES, S)),
                e.push(m(d.pNK.INVITES, S)),
                e.push(m(d.pNK.ACCESS, S))),
            e.push({ section: g.DIVIDER }),
            e.push({
                section: g.HEADER,
                label: u.NW.string(u.t.wF3KJy)
            }),
            e.push(m(d.pNK.INTEGRATIONS, S)),
            e.push(m(d.pNK.APP_DIRECTORY, S));
        let t = !c.hasFeature(d.oNc.COMMUNITY) && ((0, s.Nb)(c.id) || (0, s.ze)(c.id));
        (p || h || j || t) &&
            (e.push({ section: g.DIVIDER }),
            e.push({
                section: g.HEADER,
                label: u.NW.string(u.t['5tbTdX'])
            }),
            e.push(m(d.pNK.SAFETY, S)),
            e.push(m(d.pNK.MODERATION, S)),
            e.push(m(d.pNK.AUDIT_LOG, S)),
            e.push(m(d.pNK.BANS, S)),
            e.push(m(d.pNK.GUILD_AUTOMOD, S)));
        let n = c.hasFeature(d.oNc.COMMUNITY) && _,
            r = E();
        return (p || n || r) && (e.push({ section: g.DIVIDER }), e.push(m(d.pNK.COMMUNITY, S)), e.push(m(d.pNK.ONBOARDING, S)), e.push(m(d.pNK.ANALYTICS, S)), e.push(m(d.pNK.COMMUNITY_WELCOME, S)), e.push(m(d.pNK.DISCOVERY_LANDING_PAGE, S)), e.push(m(d.pNK.ROLE_SUBSCRIPTIONS, S)), e.push(m(d.pNK.GUILD_PRODUCTS, S)), e.push(m(d.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, S))), e.push({ section: g.DIVIDER }), e.push(m(d.pNK.GUILD_PREMIUM, S)), e.push(m(d.pNK.GUILD_TEMPLATES, S)), e.push(m(d.pNK.DELETE, S)), e.filter(o.lm);
    }
    return [
        {
            section: g.HEADER,
            label: '' !== c.toString() ? c.toString() : u.NW.string(u.t['154/bG'])
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
            section: g.DIVIDER,
            predicate: () => p || x || b
        },
        {
            section: g.HEADER,
            label: u.NW.string(u.t.PHjkRE),
            predicate: () => p || x || b
        },
        m(d.pNK.INTEGRATIONS, S),
        m(d.pNK.APP_DIRECTORY, S),
        {
            section: g.DIVIDER,
            predicate: () => p
        },
        {
            section: g.HEADER,
            label: u.NW.string(u.t['5tbTdX']),
            predicate: () => p
        },
        m(d.pNK.SAFETY, S),
        m(d.pNK.MODERATION, S),
        m(d.pNK.GUILD_AUTOMOD, S),
        m(d.pNK.AUDIT_LOG, S),
        m(d.pNK.BANS, S),
        {
            section: g.DIVIDER,
            predicate: () => p || _
        },
        {
            section: g.HEADER,
            label: u.NW.string(u.t['1g9A/f']),
            predicate: () => p || _
        },
        m(d.pNK.COMMUNITY, S),
        m(d.pNK.ONBOARDING, S),
        m(d.pNK.ANALYTICS, S),
        m(d.pNK.DISCOVERY_LANDING_PAGE, S),
        m(d.pNK.COMMUNITY_WELCOME, S),
        {
            section: g.DIVIDER,
            predicate: E
        },
        {
            section: g.HEADER,
            label: u.NW.string(u.t.mbn3bW),
            predicate: E
        },
        m(d.pNK.ROLE_SUBSCRIPTIONS, S),
        m(d.pNK.GUILD_PRODUCTS, S),
        m(d.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, S),
        { section: g.DIVIDER },
        m(d.pNK.GUILD_PREMIUM, S),
        { section: g.DIVIDER },
        {
            section: g.HEADER,
            label: u.NW.string(u.t['+OecxM'])
        },
        m(d.pNK.MEMBERS, S),
        m(d.pNK.INSTANT_INVITES, S),
        {
            section: g.DIVIDER,
            predicate: () => O
        },
        m(d.pNK.DELETE, S)
    ].filter(o.lm);
}
let h = { generateSections: p };
