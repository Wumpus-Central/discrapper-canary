n.d(t, {
    ZP: () => h,
    vE: () => p
}),
    n(539854);
var r = n(223892),
    i = n(738774),
    l = n(676317),
    s = n(923726),
    a = n(144507),
    o = n(823379),
    c = n(146305),
    u = n(981631),
    d = n(388032);
let { getSectionDefinition: m } = c.Z,
    g = {
        HEADER: 'HEADER',
        DIVIDER: 'DIVIDER'
    };
function p(e) {
    var t, n;
    let { guild: c, canManageGuild: p, canViewAuditLog: h, canManageRoles: f, canManageBans: x, canAccessMembersPage: b, canViewGuildAnalytics: j, isOwner: _, isGuildAdmin: v, canManageGuildExpressions: O } = e,
        C = () =>
            (0, a.X$)({
                guild: c,
                isOwner: _,
                canManageGuildRoleSubscriptions: (0, a.H2)(c),
                isMonetizationWaitlistEnabledForGuild: (0, r.mG)(c.id),
                isGuildEligibleForRoleSubscriptions: (0, s.kT)(c.id),
                isExpeditedMonetizationOnboardingGuild: (0, r.Rw)(c),
                isUserInCreatorMonetizationEligibleCountry: (0, r.DB)(),
                shouldRestrictUpdatingRoleSubscriptionSettings: (0, i.cu)(c.id)
            }),
        y =
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
            (n = n = { monetizationPredicate: C }),
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
    N.push({
        section: g.HEADER,
        label: '' !== c.toString() ? c.toString() : d.intl.string(d.t['154/bG'])
    }),
        N.push(m(u.pNK.PROFILE, y)),
        N.push(m(u.pNK.TAG, y)),
        N.push(m(u.pNK.ENGAGEMENT, y)),
        N.push(m(u.pNK.BOOST_PERKS, y)),
        O &&
            (N.push({ section: g.DIVIDER }),
            N.push({
                section: g.HEADER,
                label: d.intl.string(d.t.m6lkGx)
            }),
            N.push(m(u.pNK.EMOJI, y)),
            N.push(m(u.pNK.STICKERS, y)),
            N.push(m(u.pNK.SOUNDBOARD, y))),
        (p || f || b || v) &&
            (N.push({ section: g.DIVIDER }),
            N.push({
                section: g.HEADER,
                label: d.intl.string(d.t.bMAKMD)
            }),
            N.push(m(u.pNK.MEMBERS, y)),
            N.push(m(u.pNK.ROLES, y)),
            N.push(m(u.pNK.INVITES, y)),
            N.push(m(u.pNK.ACCESS, y))),
        N.push({ section: g.DIVIDER }),
        N.push({
            section: g.HEADER,
            label: d.intl.string(d.t.wF3KJy)
        }),
        N.push(m(u.pNK.INTEGRATIONS, y)),
        N.push(m(u.pNK.APP_DIRECTORY, y));
    let I = !c.hasFeature(u.oNc.COMMUNITY) && ((0, l.Nb)(c.id) || (0, l.ze)(c.id));
    (p || h || x || I) &&
        (N.push({ section: g.DIVIDER }),
        N.push({
            section: g.HEADER,
            label: d.intl.string(d.t['5tbTdX'])
        }),
        N.push(m(u.pNK.SAFETY, y)),
        N.push(m(u.pNK.MODERATION, y)),
        N.push(m(u.pNK.AUDIT_LOG, y)),
        N.push(m(u.pNK.BANS, y)),
        N.push(m(u.pNK.GUILD_AUTOMOD, y)));
    let E = c.hasFeature(u.oNc.COMMUNITY) && j,
        S = C();
    return (p || E || S) && (N.push({ section: g.DIVIDER }), N.push(m(u.pNK.COMMUNITY, y)), N.push(m(u.pNK.ONBOARDING, y)), N.push(m(u.pNK.ANALYTICS, y)), N.push(m(u.pNK.COMMUNITY_WELCOME, y)), N.push(m(u.pNK.DISCOVERY_LANDING_PAGE, y)), N.push(m(u.pNK.ROLE_SUBSCRIPTIONS, y)), N.push(m(u.pNK.GUILD_PRODUCTS, y)), N.push(m(u.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, y))), N.push({ section: g.DIVIDER }), N.push(m(u.pNK.GUILD_PREMIUM, y)), N.push(m(u.pNK.GUILD_TEMPLATES, y)), N.push(m(u.pNK.DELETE, y)), N.filter(o.lm);
}
let h = { generateSections: p };
