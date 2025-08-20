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
        E = [];
    E.push({
        section: g,
        label: "" !== c.name ? c.name : u.intl.string(u.t["154/bG"]),
    }),
        E.push(m(d.pNK.PROFILE, N)),
        E.push(m(d.pNK.TAG, N)),
        E.push(m(d.pNK.ENGAGEMENT, N)),
        E.push(m(d.pNK.BOOST_PERKS, N)),
        y &&
            (E.push({ section: p }),
            E.push({
                section: g,
                label: u.intl.string(u.t.m6lkGx),
            }),
            E.push(m(d.pNK.EMOJI, N)),
            E.push(m(d.pNK.STICKERS, N)),
            E.push(m(d.pNK.SOUNDBOARD, N))),
        (h || b || j || O) &&
            (E.push({ section: p }),
            E.push({
                section: g,
                label: u.intl.string(u.t.bMAKMD),
            }),
            E.push(m(d.pNK.MEMBERS, N)),
            E.push(m(d.pNK.ROLES, N)),
            E.push(m(d.pNK.INVITES, N)),
            E.push(m(d.pNK.ACCESS, N))),
        E.push({ section: p }),
        E.push({
            section: g,
            label: u.intl.string(u.t.wF3KJy),
        }),
        E.push(m(d.pNK.INTEGRATIONS, N)),
        E.push(m(d.pNK.APP_DIRECTORY, N));
    let I = !c.features.has(d.oNc.COMMUNITY) && ((0, l.Nb)(c.id) || (0, l.ze)(c.id));
    (h || f || x || I) &&
        (E.push({ section: p }),
        E.push({
            section: g,
            label: u.intl.string(u.t["5tbTdX"]),
        }),
        E.push(m(d.pNK.SAFETY, N)),
        E.push(m(d.pNK.MODERATION, N)),
        E.push(m(d.pNK.AUDIT_LOG, N)),
        E.push(m(d.pNK.BANS, N)),
        E.push(m(d.pNK.GUILD_AUTOMOD, N)));
    let S = c.features.has(d.oNc.COMMUNITY) && v,
        T = C();
    return (
        (h || S || T) &&
            (E.push({ section: p }),
            E.push(m(d.pNK.COMMUNITY, N)),
            E.push(m(d.pNK.ONBOARDING, N)),
            E.push(m(d.pNK.ANALYTICS, N)),
            E.push(m(d.pNK.COMMUNITY_WELCOME, N)),
            E.push(m(d.pNK.DISCOVERY_LANDING_PAGE, N)),
            E.push(m(d.pNK.ROLE_SUBSCRIPTIONS, N)),
            E.push(m(d.pNK.GUILD_PRODUCTS, N)),
            E.push(m(d.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, N))),
        E.push({ section: p }),
        E.push(m(d.pNK.GUILD_PREMIUM, N)),
        E.push(m(d.pNK.GUILD_TEMPLATES, N)),
        E.push(m(d.pNK.DELETE, N)),
        E.filter(o.lm)
    );
}
let f = { generateSections: h };
