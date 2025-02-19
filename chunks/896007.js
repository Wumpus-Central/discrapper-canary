n.d(t, {
    ZP: () => h,
    vE: () => g
}),
    n(653041);
var r = n(223892),
    i = n(738774),
    s = n(676317),
    a = n(923726),
    l = n(144507),
    o = n(823379),
    c = n(146305),
    d = n(981631),
    u = n(388032);
let { getSectionDefinition: m } = c.Z,
    p = {
        HEADER: 'HEADER',
        DIVIDER: 'DIVIDER'
    };
function g(e) {
    var t, n;
    let { guild: c, canManageGuild: g, canViewAuditLog: h, canManageRoles: f, canManageWebhooks: b, canUnlinkChannels: x, canManageBans: j, canAccessMembersPage: N, canViewGuildAnalytics: v, isOwner: _, isOwnerWithRequiredMfaLevel: O, canAccessClanSettings: y, isGuildSettingsFoundationEnabled: C, isGuildAdmin: I, canManageGuildExpressions: E } = e,
        S = () =>
            (0, l.X$)({
                guild: c,
                isOwner: _,
                canManageGuildRoleSubscriptions: (0, l.H2)(c),
                isMonetizationWaitlistEnabledForGuild: (0, r.mG)(c.id),
                isGuildEligibleForRoleSubscriptions: (0, a.kT)(c.id),
                isExpeditedMonetizationOnboardingGuild: (0, r.Rw)(c),
                isUserInCreatorMonetizationEligibleCountry: (0, r.DB)(),
                shouldRestrictUpdatingRoleSubscriptionSettings: (0, i.cu)(c.id)
            }),
        T =
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
            (n = n = { monetizationPredicate: S }),
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
        e.push(m(d.pNK.PROFILE, T)),
            e.push(m(d.pNK.TAG, T)),
            e.push(m(d.pNK.ENGAGEMENT, T)),
            E &&
                (e.push({ section: p.DIVIDER }),
                e.push({
                    section: p.HEADER,
                    label: u.NW.string(u.t.m6lkGx)
                }),
                e.push(m(d.pNK.EMOJI, T)),
                e.push(m(d.pNK.STICKERS, T)),
                e.push(m(d.pNK.SOUNDBOARD, T))),
            (g || f || N || I) &&
                (e.push({ section: p.DIVIDER }),
                e.push({
                    section: p.HEADER,
                    label: u.NW.string(u.t.bMAKMD)
                }),
                e.push(m(d.pNK.MEMBERS, T)),
                e.push(m(d.pNK.ROLES, T)),
                e.push(m(d.pNK.INVITES, T)),
                e.push(m(d.pNK.ACCESS, T))),
            e.push({ section: p.DIVIDER }),
            e.push({
                section: p.HEADER,
                label: u.NW.string(u.t.wF3KJy)
            }),
            e.push(m(d.pNK.INTEGRATIONS, T)),
            e.push(m(d.pNK.APP_DIRECTORY, T));
        let t = !c.hasFeature(d.oNc.COMMUNITY) && ((0, s.Nb)(c.id) || (0, s.ze)(c.id));
        (g || h || j || t) &&
            (e.push({ section: p.DIVIDER }),
            e.push({
                section: p.HEADER,
                label: u.NW.string(u.t['5tbTdX'])
            }),
            e.push(m(d.pNK.SAFETY, T)),
            e.push(m(d.pNK.MODERATION, T)),
            e.push(m(d.pNK.AUDIT_LOG, T)),
            e.push(m(d.pNK.BANS, T)),
            e.push(m(d.pNK.GUILD_AUTOMOD, T)));
        let n = c.hasFeature(d.oNc.COMMUNITY) && v,
            r = S();
        return (g || n || r) && (e.push({ section: p.DIVIDER }), e.push(m(d.pNK.COMMUNITY, T)), e.push(m(d.pNK.ONBOARDING, T)), e.push(m(d.pNK.ANALYTICS, T)), e.push(m(d.pNK.COMMUNITY_WELCOME, T)), e.push(m(d.pNK.ROLE_SUBSCRIPTIONS, T)), e.push(m(d.pNK.GUILD_PRODUCTS, T)), e.push(m(d.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, T))), e.push({ section: p.DIVIDER }), e.push(m(d.pNK.GUILD_PREMIUM, T)), e.push(m(d.pNK.GUILD_TEMPLATES, T)), e.push(m(d.pNK.DELETE, T)), e.filter(o.lm);
    }
    return [
        {
            section: p.HEADER,
            label: '' !== c.toString() ? c.toString() : u.NW.string(u.t['154/bG'])
        },
        m(d.pNK.OVERVIEW, T),
        m(d.pNK.ROLES, T),
        m(d.pNK.EMOJI, T),
        m(d.pNK.STICKERS, T),
        m(d.pNK.SOUNDBOARD, T),
        m(d.pNK.WIDGET, T),
        m(d.pNK.GUILD_TEMPLATES, T),
        m(d.pNK.VANITY_URL, T),
        m(d.pNK.ACCESS, T),
        {
            section: p.DIVIDER,
            predicate: () => g || b || x
        },
        {
            section: p.HEADER,
            label: u.NW.string(u.t.PHjkRE),
            predicate: () => g || b || x
        },
        m(d.pNK.INTEGRATIONS, T),
        m(d.pNK.APP_DIRECTORY, T),
        {
            section: p.DIVIDER,
            predicate: () => g
        },
        {
            section: p.HEADER,
            label: u.NW.string(u.t['5tbTdX']),
            predicate: () => g
        },
        m(d.pNK.SAFETY, T),
        m(d.pNK.MODERATION, T),
        m(d.pNK.GUILD_AUTOMOD, T),
        m(d.pNK.AUDIT_LOG, T),
        m(d.pNK.BANS, T),
        {
            section: p.DIVIDER,
            predicate: () => g || v
        },
        {
            section: p.HEADER,
            label: u.NW.string(u.t['1g9A/f']),
            predicate: () => !y && (g || v)
        },
        m(d.pNK.CLAN, T),
        m(d.pNK.COMMUNITY, T),
        m(d.pNK.ONBOARDING, T),
        m(d.pNK.ANALYTICS, T),
        m(d.pNK.DISCOVERY, T),
        m(d.pNK.DISCOVERY_LANDING_PAGE, T),
        m(d.pNK.COMMUNITY_WELCOME, T),
        {
            section: p.DIVIDER,
            predicate: S
        },
        {
            section: p.HEADER,
            label: u.NW.string(u.t.mbn3bW),
            predicate: S
        },
        m(d.pNK.ROLE_SUBSCRIPTIONS, T),
        m(d.pNK.GUILD_PRODUCTS, T),
        m(d.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, T),
        { section: p.DIVIDER },
        m(d.pNK.GUILD_PREMIUM, T),
        { section: p.DIVIDER },
        {
            section: p.HEADER,
            label: u.NW.string(u.t['+OecxM'])
        },
        m(d.pNK.MEMBERS, T),
        m(d.pNK.INSTANT_INVITES, T),
        {
            section: p.DIVIDER,
            predicate: () => O
        },
        m(d.pNK.DELETE, T)
    ].filter(o.lm);
}
let h = { generateSections: g };
