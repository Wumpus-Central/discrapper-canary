n.d(t, {
    ZP: () => f,
    vE: () => h,
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
let { getSectionDefinition: m } = c.Z,
    g = "HEADER",
    p = "DIVIDER";
function h(e) {
    var t, n;
    let {
            guild: c,
            canManageGuild: h,
            canViewAuditLog: f,
            canManageRoles: b,
            canManageBans: x,
            canAccessMembersPage: j,
            canViewGuildAnalytics: v,
            isOwner: _,
            isGuildAdmin: O,
            canManageGuildExpressions: y,
        } = e,
        C = () =>
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
        I = [];
    I.push({
        section: g,
        label: "" !== c.name ? c.name : u.intl.string(u.t["154/bG"]),
    }),
        I.push(m(d.pNK.PROFILE, N)),
        I.push(m(d.pNK.TAG, N)),
        I.push(m(d.pNK.ENGAGEMENT, N)),
        I.push(m(d.pNK.BOOST_PERKS, N)),
        y &&
            (I.push({ section: p }),
            I.push({
                section: g,
                label: u.intl.string(u.t.m6lkGx),
            }),
            I.push(m(d.pNK.EMOJI, N)),
            I.push(m(d.pNK.STICKERS, N)),
            I.push(m(d.pNK.SOUNDBOARD, N))),
        (h || b || j || O) &&
            (I.push({ section: p }),
            I.push({
                section: g,
                label: u.intl.string(u.t.bMAKMD),
            }),
            I.push(m(d.pNK.MEMBERS, N)),
            I.push(m(d.pNK.ROLES, N)),
            I.push(m(d.pNK.INVITES, N)),
            I.push(m(d.pNK.ACCESS, N))),
        I.push({ section: p }),
        I.push({
            section: g,
            label: u.intl.string(u.t.wF3KJy),
        }),
        I.push(m(d.pNK.INTEGRATIONS, N)),
        I.push(m(d.pNK.APP_DIRECTORY, N));
    let E = !c.features.has(d.oNc.COMMUNITY) && ((0, l.Nb)(c.id) || (0, l.ze)(c.id));
    (h || f || x || E) &&
        (I.push({ section: p }),
        I.push({
            section: g,
            label: u.intl.string(u.t["5tbTdX"]),
        }),
        I.push(m(d.pNK.SAFETY, N)),
        I.push(m(d.pNK.MODERATION, N)),
        I.push(m(d.pNK.AUDIT_LOG, N)),
        I.push(m(d.pNK.BANS, N)),
        I.push(m(d.pNK.GUILD_AUTOMOD, N)));
    let S = c.features.has(d.oNc.COMMUNITY) && v,
        T = C();
    return (
        (h || S || T) &&
            (I.push({ section: p }),
            I.push(m(d.pNK.COMMUNITY, N)),
            I.push(m(d.pNK.ONBOARDING, N)),
            I.push(m(d.pNK.ANALYTICS, N)),
            I.push(m(d.pNK.COMMUNITY_WELCOME, N)),
            I.push(m(d.pNK.DISCOVERY_LANDING_PAGE, N)),
            I.push(m(d.pNK.ROLE_SUBSCRIPTIONS, N)),
            I.push(m(d.pNK.GUILD_PRODUCTS, N)),
            I.push(m(d.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, N))),
        I.push({ section: p }),
        I.push(m(d.pNK.GUILD_PREMIUM, N)),
        I.push(m(d.pNK.GUILD_TEMPLATES, N)),
        I.push(m(d.pNK.DELETE, N)),
        I.filter(o.lm)
    );
}
let f = { generateSections: h };
