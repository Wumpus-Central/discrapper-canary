n.d(t, {
    Fv: () => s,
    Kt: () => r,
    yH: () => a
});
var i = n(687476);
function r(e, t) {
    if ((null == e ? void 0 : e.roles) == null || 0 === e.roles.length || null == t) return !1;
    let n = i.Z.getSubscriptionRoles(t);
    return e.roles.some((e) => n.has(e));
}
function a(e) {
    if ((null == e ? void 0 : e.roles) == null || 0 === e.roles.length || null == e.guildId) return !1;
    let t = i.Z.getPurchasableSubscriptionRoles(e.guildId);
    return e.roles.some((e) => t.has(e));
}
function s(e, t) {
    if ((null == e ? void 0 : e.roles) == null || 0 === e.roles.length || null == e.guildId) return !1;
    if (a(e)) {
        let n = i.Z.getUserSubscriptionRoles(e.guildId),
            r = e.roles.some((e) => n.has(e)),
            a = t === e.guildId && i.Z.getUserIsAdmin(e.guildId);
        if (!(r || a)) return !0;
    }
    return !1;
}
