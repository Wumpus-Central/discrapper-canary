var i = n(636194),
    r = n(71393),
    a = n(867164),
    s = n(652215);
function l(e) {
    return null != e && e.includes(a.t.NEW_PURCHASES_DISABLED);
}
function o(e) {
    return null != e && e.includes(a.t.SETTINGS_READ_ONLY);
}
n.d(
    t,
    {},
    {
        EM: function (e) {
            return null != e && e.includes(a.t.REAPPLICATION_DISABLED);
        },
        Y5: l,
        a1: o,
        mk: function (e) {
            if (null == e) return !1;
            let t = i.A.getMonetizationRestrictionsFetchState(e),
                n = i.A.getMonetizationRestrictions(e),
                a = r.A.getGuild(e);
            return t === i.e.FETCHED ? o(n) : (a?.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) ?? !0);
        },
        tE: function (e) {
            if (null == e) return !1;
            let t = i.A.getMonetizationRestrictionsFetchState(e),
                n = i.A.getMonetizationRestrictions(e),
                a = r.A.getGuild(e);
            return t === i.e.FETCHED ? l(n) : (a?.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) ?? !0);
        },
    },
);
