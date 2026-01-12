n.d(t, {
    ZP: () => p,
    vE: () => b,
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
    f = "HEADER",
    m = "DIVIDER";
function b(e) {
    var t, n;
    let {
            guild: c,
            canManageGuild: b,
            canViewAuditLog: p,
            canManageRoles: h,
            canManageBans: x,
            canAccessMembersPage: j,
            canViewGuildAnalytics: v,
            isOwner: O,
            isGuildAdmin: y,
            canManageGuildExpressions: C,
        } = e,
        N = () =>
            (0, s.X$)({
                guild: c,
                isOwner: O,
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
            (n = n = { monetizationPredicate: N }),
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
        I = [];
    I.push({
        section: f,
        label: "" !== c.name ? c.name : u.intl.string(u.t["154/bL"]),
    }),
        I.push(g(d.pNK.PROFILE, E)),
        I.push(g(d.pNK.TAG, E)),
        I.push(g(d.pNK.ENGAGEMENT, E)),
        I.push(g(d.pNK.BOOST_PERKS, E)),
        C &&
            (I.push({ section: m }),
            I.push({
                section: f,
                label: u.intl.string(u.t.m6lkGy),
            }),
            I.push(g(d.pNK.EMOJI, E)),
            I.push(g(d.pNK.STICKERS, E)),
            I.push(g(d.pNK.SOUNDBOARD, E))),
        (b || h || j || y) &&
            (I.push({ section: m }),
            I.push({
                section: f,
                label: u.intl.string(u.t.bMAKMK),
            }),
            I.push(g(d.pNK.MEMBERS, E)),
            I.push(g(d.pNK.ROLES, E)),
            I.push(g(d.pNK.INVITES, E)),
            I.push(g(d.pNK.ACCESS, E))),
        I.push({ section: m }),
        I.push({
            section: f,
            label: u.intl.string(u.t.wF3KJy),
        }),
        I.push(g(d.pNK.INTEGRATIONS, E)),
        I.push(g(d.pNK.APP_DIRECTORY, E));
    let S = !c.features.has(d.GuildFeatures.COMMUNITY) && ((0, l.Nb)(c.id) || (0, l.ze)(c.id));
    (b || p || x || S) &&
        (I.push({ section: m }),
        I.push({
            section: f,
            label: u.intl.string(u.t["5tbTdV"]),
        }),
        I.push(g(d.pNK.SAFETY, E)),
        I.push(g(d.pNK.MODERATION, E)),
        I.push(g(d.pNK.AUDIT_LOG, E)),
        I.push(g(d.pNK.BANS, E)),
        I.push(g(d.pNK.GUILD_AUTOMOD, E)));
    let _ = c.features.has(d.GuildFeatures.COMMUNITY) && v,
        T = N();
    return (
        (b || _ || T) &&
            (I.push({ section: m }),
            I.push(g(d.pNK.COMMUNITY, E)),
            I.push(g(d.pNK.ONBOARDING, E)),
            I.push(g(d.pNK.ANALYTICS, E)),
            I.push(g(d.pNK.COMMUNITY_WELCOME, E)),
            I.push(g(d.pNK.DISCOVERY_LANDING_PAGE, E)),
            I.push(g(d.pNK.ROLE_SUBSCRIPTIONS, E)),
            I.push(g(d.pNK.GUILD_PRODUCTS, E)),
            I.push(g(d.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, E))),
        I.push({ section: m }),
        I.push(g(d.pNK.GUILD_TEMPLATES, E)),
        I.push(g(d.pNK.DELETE, E)),
        I.filter(o.lm)
    );
}
let p = { generateSections: b };
