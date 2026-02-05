"use strict";
n.d(t, { EM: () => d, Y5: () => o, a1: () => u, mk: () => c, tE: () => l });
var r = n(636194),
    i = n(71393),
    a = n(867164),
    s = n(652215);
function o(e) {
    return null != e && e.includes(a.t.NEW_PURCHASES_DISABLED);
}
function l(e) {
    if (null == e) return !1;
    let t = r.A.getMonetizationRestrictionsFetchState(e),
        n = r.A.getMonetizationRestrictions(e),
        a = i.A.getGuild(e);
    return t === r.e.FETCHED ? o(n) : (a?.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) ?? !0);
}
function u(e) {
    return null != e && e.includes(a.t.SETTINGS_READ_ONLY);
}
function c(e) {
    if (null == e) return !1;
    let t = r.A.getMonetizationRestrictionsFetchState(e),
        n = r.A.getMonetizationRestrictions(e),
        a = i.A.getGuild(e);
    return t === r.e.FETCHED ? u(n) : (a?.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) ?? !0);
}
function d(e) {
    return null != e && e.includes(a.t.REAPPLICATION_DISABLED);
}
