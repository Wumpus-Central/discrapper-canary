"use strict";
n.d(t, { EM: () => u, Y5: () => l, a1: () => d, mk: () => c, tE: () => o });
var i = n(636194),
    r = n(71393),
    a = n(867164),
    s = n(652215);
function l(e) {
    return null != e && e.includes(a.t.NEW_PURCHASES_DISABLED);
}
function o(e) {
    if (null == e) return !1;
    let t = i.A.getMonetizationRestrictionsFetchState(e),
        n = i.A.getMonetizationRestrictions(e),
        a = r.A.getGuild(e);
    return t === i.e.FETCHED ? l(n) : (a?.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) ?? !0);
}
function d(e) {
    return null != e && e.includes(a.t.SETTINGS_READ_ONLY);
}
function c(e) {
    if (null == e) return !1;
    let t = i.A.getMonetizationRestrictionsFetchState(e),
        n = i.A.getMonetizationRestrictions(e),
        a = r.A.getGuild(e);
    return t === i.e.FETCHED ? d(n) : (a?.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) ?? !0);
}
function u(e) {
    return null != e && e.includes(a.t.REAPPLICATION_DISABLED);
}
