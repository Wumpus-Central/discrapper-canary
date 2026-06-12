"use strict";
n.d(t, { EM: () => d, Y5: () => o, a1: () => u, mk: () => c, tE: () => l });
var i = n(636194),
    r = n(71393),
    s = n(867164),
    a = n(652215);
function o(e) {
    return null != e && e.includes(s.t.NEW_PURCHASES_DISABLED);
}
function l(e) {
    if (null == e) return !1;
    let t = i.A.getMonetizationRestrictionsFetchState(e),
        n = i.A.getMonetizationRestrictions(e),
        s = r.A.getGuild(e);
    return t === i.e.FETCHED ? o(n) : (s?.features.has(a.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) ?? !0);
}
function u(e) {
    return null != e && e.includes(s.t.SETTINGS_READ_ONLY);
}
function c(e) {
    if (null == e) return !1;
    let t = i.A.getMonetizationRestrictionsFetchState(e),
        n = i.A.getMonetizationRestrictions(e),
        s = r.A.getGuild(e);
    return t === i.e.FETCHED ? u(n) : (s?.features.has(a.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) ?? !0);
}
function d(e) {
    return null != e && e.includes(s.t.REAPPLICATION_DISABLED);
}
