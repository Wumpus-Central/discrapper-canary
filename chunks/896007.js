n.d(t, {
    ZP: () => h,
    vE: () => f,
}),
    n(539854);
var r = n(223892),
    i = n(738774),
    l = n(676317),
    a = n(923726),
    s = n(144507),
    o = n(823379),
    c = n(146305),
    d = n(981631),
    u = n(388032);
let { getSectionDefinition: g } = c.Z,
    m = "HEADER",
    p = "DIVIDER";
function f(e) {
    var t, n;
    let {
            guild: c,
            canManageGuild: f,
            canViewAuditLog: h,
            canManageRoles: b,
            canManageBans: x,
            canAccessMembersPage: j,
            canViewGuildAnalytics: v,
            isOwner: _,
            isGuildAdmin: C,
            canManageGuildExpressions: O,
        } = e,
        y = () =>
            (0, s.X$)({
                guild: c,
                isOwner: _,
                canManageGuildRoleSubscriptions: (0, s.H2)(c),
                isMonetizationWaitlistEnabledForGuild: (0, r.mG)(c.id),
                isGuildEligibleForRoleSubscriptions: (0, a.kT)(c.id),
                isExpeditedMonetizationOnboardingGuild: (0, r.Rw)(c),
                isUserInCreatorMonetizationEligibleCountry: (0, r.DB)(),
                shouldRestrictUpdatingRoleSubscriptionSettings: (0, i.cu)(c.id),
            }),
        E =
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
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
    N.push({
        section: m,
        label: "" !== c.name ? c.name : u.intl.string(u.t["154/bG"]),
    }),
        N.push(g(d.pNK.PROFILE, E)),
        N.push(g(d.pNK.TAG, E)),
        N.push(g(d.pNK.ENGAGEMENT, E)),
        N.push(g(d.pNK.BOOST_PERKS, E)),
        O &&
            (N.push({ section: p }),
            N.push({
                section: m,
                label: u.intl.string(u.t.m6lkGx),
            }),
            N.push(g(d.pNK.EMOJI, E)),
            N.push(g(d.pNK.STICKERS, E)),
            N.push(g(d.pNK.SOUNDBOARD, E))),
        (f || b || j || C) &&
            (N.push({ section: p }),
            N.push({
                section: m,
                label: u.intl.string(u.t.bMAKMD),
            }),
            N.push(g(d.pNK.MEMBERS, E)),
            N.push(g(d.pNK.ROLES, E)),
            N.push(g(d.pNK.INVITES, E)),
            N.push(g(d.pNK.ACCESS, E))),
        N.push({ section: p }),
        N.push({
            section: m,
            label: u.intl.string(u.t.wF3KJy),
        }),
        N.push(g(d.pNK.INTEGRATIONS, E)),
        N.push(g(d.pNK.APP_DIRECTORY, E));
    let I = !c.features.has(d.GuildFeatures.COMMUNITY) && ((0, l.Nb)(c.id) || (0, l.ze)(c.id));
    (f || h || x || I) &&
        (N.push({ section: p }),
        N.push({
            section: m,
            label: u.intl.string(u.t["5tbTdX"]),
        }),
        N.push(g(d.pNK.SAFETY, E)),
        N.push(g(d.pNK.MODERATION, E)),
        N.push(g(d.pNK.AUDIT_LOG, E)),
        N.push(g(d.pNK.BANS, E)),
        N.push(g(d.pNK.GUILD_AUTOMOD, E)));
    let S = c.features.has(d.GuildFeatures.COMMUNITY) && v,
        T = y();
    return (
        (f || S || T) &&
            (N.push({ section: p }),
            N.push(g(d.pNK.COMMUNITY, E)),
            N.push(g(d.pNK.ONBOARDING, E)),
            N.push(g(d.pNK.ANALYTICS, E)),
            N.push(g(d.pNK.COMMUNITY_WELCOME, E)),
            N.push(g(d.pNK.DISCOVERY_LANDING_PAGE, E)),
            N.push(g(d.pNK.ROLE_SUBSCRIPTIONS, E)),
            N.push(g(d.pNK.GUILD_PRODUCTS, E)),
            N.push(g(d.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, E))),
        N.push({ section: p }),
        N.push(g(d.pNK.GUILD_PREMIUM, E)),
        N.push(g(d.pNK.GUILD_TEMPLATES, E)),
        N.push(g(d.pNK.DELETE, E)),
        N.filter(o.lm)
    );
}
let h = { generateSections: f };
