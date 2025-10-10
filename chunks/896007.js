n.d(t, {
    ZP: () => h,
    vE: () => f,
}),
    n(539854);
var r = n(223892),
    i = n(738774),
    l = n(676317),
    s = n(923726),
    a = n(144507),
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
            canManageRoles: x,
            canManageBans: b,
            canAccessMembersPage: j,
            canViewGuildAnalytics: _,
            isOwner: v,
            isGuildAdmin: C,
            canManageGuildExpressions: O,
        } = e,
        y = () =>
            (0, a.X$)({
                guild: c,
                isOwner: v,
                canManageGuildRoleSubscriptions: (0, a.H2)(c),
                isMonetizationWaitlistEnabledForGuild: (0, r.mG)(c.id),
                isGuildEligibleForRoleSubscriptions: (0, s.kT)(c.id),
                isExpeditedMonetizationOnboardingGuild: (0, r.Rw)(c),
                isUserInCreatorMonetizationEligibleCountry: (0, r.DB)(),
                shouldRestrictUpdatingRoleSubscriptionSettings: (0, i.cu)(c.id),
            }),
        N =
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
        E = [];
    E.push({
        section: m,
        label: "" !== c.name ? c.name : u.intl.string(u.t["154/bG"]),
    }),
        E.push(g(d.pNK.PROFILE, N)),
        E.push(g(d.pNK.TAG, N)),
        E.push(g(d.pNK.ENGAGEMENT, N)),
        E.push(g(d.pNK.BOOST_PERKS, N)),
        O &&
            (E.push({ section: p }),
            E.push({
                section: m,
                label: u.intl.string(u.t.m6lkGx),
            }),
            E.push(g(d.pNK.EMOJI, N)),
            E.push(g(d.pNK.STICKERS, N)),
            E.push(g(d.pNK.SOUNDBOARD, N))),
        (f || x || j || C) &&
            (E.push({ section: p }),
            E.push({
                section: m,
                label: u.intl.string(u.t.bMAKMD),
            }),
            E.push(g(d.pNK.MEMBERS, N)),
            E.push(g(d.pNK.ROLES, N)),
            E.push(g(d.pNK.INVITES, N)),
            E.push(g(d.pNK.ACCESS, N))),
        E.push({ section: p }),
        E.push({
            section: m,
            label: u.intl.string(u.t.wF3KJy),
        }),
        E.push(g(d.pNK.INTEGRATIONS, N)),
        E.push(g(d.pNK.APP_DIRECTORY, N));
    let I = !c.features.has(d.oNc.COMMUNITY) && ((0, l.Nb)(c.id) || (0, l.ze)(c.id));
    (f || h || b || I) &&
        (E.push({ section: p }),
        E.push({
            section: m,
            label: u.intl.string(u.t["5tbTdX"]),
        }),
        E.push(g(d.pNK.SAFETY, N)),
        E.push(g(d.pNK.MODERATION, N)),
        E.push(g(d.pNK.AUDIT_LOG, N)),
        E.push(g(d.pNK.BANS, N)),
        E.push(g(d.pNK.GUILD_AUTOMOD, N)));
    let S = c.features.has(d.oNc.COMMUNITY) && _,
        T = y();
    return (
        (f || S || T) &&
            (E.push({ section: p }),
            E.push(g(d.pNK.COMMUNITY, N)),
            E.push(g(d.pNK.ONBOARDING, N)),
            E.push(g(d.pNK.ANALYTICS, N)),
            E.push(g(d.pNK.COMMUNITY_WELCOME, N)),
            E.push(g(d.pNK.DISCOVERY_LANDING_PAGE, N)),
            E.push(g(d.pNK.ROLE_SUBSCRIPTIONS, N)),
            E.push(g(d.pNK.GUILD_PRODUCTS, N)),
            E.push(g(d.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, N))),
        E.push({ section: p }),
        E.push(g(d.pNK.GUILD_PREMIUM, N)),
        E.push(g(d.pNK.GUILD_TEMPLATES, N)),
        E.push(g(d.pNK.DELETE, N)),
        E.filter(o.lm)
    );
}
let h = { generateSections: f };
