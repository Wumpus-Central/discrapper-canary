n.d(t, {
    EM: () => d,
    Y5: () => o,
    a1: () => c,
    mk: () => u,
    tE: () => l,
});
var r = n(636194),
    i = n(71393),
    a = n(867164),
    s = n(652215);
function o(e) {
    return null != e && e.includes(a.t.NEW_PURCHASES_DISABLED);
}
function l(e) {
    var t;
    if (null == e) return !1;
    let n = r.A.getMonetizationRestrictionsFetchState(e),
        a = r.A.getMonetizationRestrictions(e),
        l = i.A.getGuild(e);
    return n === r.e.FETCHED
        ? o(a)
        : null == (t = null == l ? void 0 : l.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || t;
}
function c(e) {
    return null != e && e.includes(a.t.SETTINGS_READ_ONLY);
}
function u(e) {
    var t;
    if (null == e) return !1;
    let n = r.A.getMonetizationRestrictionsFetchState(e),
        a = r.A.getMonetizationRestrictions(e),
        o = i.A.getGuild(e);
    return n === r.e.FETCHED
        ? c(a)
        : null == (t = null == o ? void 0 : o.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || t;
}
function d(e) {
    return null != e && e.includes(a.t.REAPPLICATION_DISABLED);
}
