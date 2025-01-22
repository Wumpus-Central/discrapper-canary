r.d(n, {
    Fv: function () {
        return s;
    },
    Kt: function () {
        return a;
    },
    yH: function () {
        return o;
    }
});
var i = r(687476);
function a(e, n) {
    if ((null == e ? void 0 : e.roles) == null || 0 === e.roles.length || null == n) return !1;
    let r = i.Z.getSubscriptionRoles(n);
    return e.roles.some((e) => r.has(e));
}
function o(e) {
    if ((null == e ? void 0 : e.roles) == null || 0 === e.roles.length || null == e.guildId) return !1;
    let n = i.Z.getPurchasableSubscriptionRoles(e.guildId);
    return e.roles.some((e) => n.has(e));
}
function s(e, n) {
    if ((null == e ? void 0 : e.roles) == null || 0 === e.roles.length || null == e.guildId) return !1;
    if (o(e)) {
        let r = i.Z.getUserSubscriptionRoles(e.guildId),
            a = e.roles.some((e) => r.has(e)),
            o = n === e.guildId && i.Z.getUserIsAdmin(e.guildId);
        if (!(a || o)) return !0;
    }
    return !1;
}
