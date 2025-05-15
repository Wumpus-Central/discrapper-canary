n.d(t, {
    Fv: () => o,
    Kt: () => i,
    yH: () => a
});
var r = n(687476);
function i(e, t) {
    if ((null == e ? void 0 : e.roles) == null || 0 === e.roles.length || null == t) return !1;
    let n = r.Z.getSubscriptionRoles(t);
    return e.roles.some((e) => n.has(e));
}
function a(e) {
    if ((null == e ? void 0 : e.roles) == null || 0 === e.roles.length || null == e.guildId) return !1;
    let t = r.Z.getPurchasableSubscriptionRoles(e.guildId);
    return e.roles.some((e) => t.has(e));
}
function o(e, t) {
    if ((null == e ? void 0 : e.roles) == null || 0 === e.roles.length || null == e.guildId) return !1;
    if (a(e)) {
        let n = r.Z.getUserSubscriptionRoles(e.guildId),
            i = e.roles.some((e) => n.has(e)),
            a = t === e.guildId && r.Z.getUserIsAdmin(e.guildId);
        if (!(i || a)) return !0;
    }
    return !1;
}
