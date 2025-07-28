(n.d(t, {
    ZP: () => h,
    vE: () => p
}),
    n(539854));
var r = n(223892),
    i = n(738774),
    l = n(676317),
    a = n(923726),
    s = n(144507),
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
    let { guild: c, canManageGuild: p, canViewAuditLog: h, canManageRoles: f, canManageBans: x, canAccessMembersPage: b, canViewGuildAnalytics: j, isOwner: v, isGuildAdmin: _, canManageGuildExpressions: O } = e,
        y = () =>
            (0, s.X$)({
                guild: c,
                isOwner: v,
                canManageGuildRoleSubscriptions: (0, s.H2)(c),
                isMonetizationWaitlistEnabledForGuild: (0, r.mG)(c.id),
                isGuildEligibleForRoleSubscriptions: (0, a.kT)(c.id),
                isExpeditedMonetizationOnboardingGuild: (0, r.Rw)(c),
                isUserInCreatorMonetizationEligibleCountry: (0, r.DB)(),
                shouldRestrictUpdatingRoleSubscriptionSettings: (0, i.cu)(c.id)
            }),
        C =
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            ((r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r));
                        }));
                }
                return e;
            })({}, e)),
            (n = n = { monetizationPredicate: y }),
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
            t),
        N = [];
    (N.push({
        section: g.HEADER,
        label: '' !== c.name ? c.name : u.intl.string(u.t['154/bG'])
    }),
        N.push(m(d.pNK.PROFILE, C)),
        N.push(m(d.pNK.TAG, C)),
        N.push(m(d.pNK.ENGAGEMENT, C)),
        N.push(m(d.pNK.BOOST_PERKS, C)),
        O &&
            (N.push({ section: g.DIVIDER }),
            N.push({
                section: g.HEADER,
                label: u.intl.string(u.t.m6lkGx)
            }),
            N.push(m(d.pNK.EMOJI, C)),
            N.push(m(d.pNK.STICKERS, C)),
            N.push(m(d.pNK.SOUNDBOARD, C))),
        (p || f || b || _) &&
            (N.push({ section: g.DIVIDER }),
            N.push({
                section: g.HEADER,
                label: u.intl.string(u.t.bMAKMD)
            }),
            N.push(m(d.pNK.MEMBERS, C)),
            N.push(m(d.pNK.ROLES, C)),
            N.push(m(d.pNK.INVITES, C)),
            N.push(m(d.pNK.ACCESS, C))),
        N.push({ section: g.DIVIDER }),
        N.push({
            section: g.HEADER,
            label: u.intl.string(u.t.wF3KJy)
        }),
        N.push(m(d.pNK.INTEGRATIONS, C)),
        N.push(m(d.pNK.APP_DIRECTORY, C)));
    let I = !c.features.has(d.oNc.COMMUNITY) && ((0, l.Nb)(c.id) || (0, l.ze)(c.id));
    (p || h || x || I) &&
        (N.push({ section: g.DIVIDER }),
        N.push({
            section: g.HEADER,
            label: u.intl.string(u.t['5tbTdX'])
        }),
        N.push(m(d.pNK.SAFETY, C)),
        N.push(m(d.pNK.MODERATION, C)),
        N.push(m(d.pNK.AUDIT_LOG, C)),
        N.push(m(d.pNK.BANS, C)),
        N.push(m(d.pNK.GUILD_AUTOMOD, C)));
    let E = c.features.has(d.oNc.COMMUNITY) && j,
        S = y();
    return ((p || E || S) && (N.push({ section: g.DIVIDER }), N.push(m(d.pNK.COMMUNITY, C)), N.push(m(d.pNK.ONBOARDING, C)), N.push(m(d.pNK.ANALYTICS, C)), N.push(m(d.pNK.COMMUNITY_WELCOME, C)), N.push(m(d.pNK.DISCOVERY_LANDING_PAGE, C)), N.push(m(d.pNK.ROLE_SUBSCRIPTIONS, C)), N.push(m(d.pNK.GUILD_PRODUCTS, C)), N.push(m(d.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, C))), N.push({ section: g.DIVIDER }), N.push(m(d.pNK.GUILD_PREMIUM, C)), N.push(m(d.pNK.GUILD_TEMPLATES, C)), N.push(m(d.pNK.DELETE, C)), N.filter(o.lm));
}
let h = { generateSections: p };
