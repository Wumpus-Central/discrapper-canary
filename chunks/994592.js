n.d(t, {
    j0: () => p,
    mY: () => _,
    on: () => f
}),
    n(47120);
var i = n(442837),
    r = n(652515),
    a = n(200876),
    s = n(674180),
    o = n(160404),
    l = n(430824),
    u = n(772021),
    c = n(981631);
function d(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.Z, o.Z],
        i = t.getGuild(e);
    if (null == i) return !1;
    let r = (0, a.l)(i),
        s = i.hasFeature(c.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    return !!((r && s) || n.isViewingServerShop(e));
}
function f(e, t) {
    return !!d(e) || (0, u.U)(e, t);
}
function _(e) {
    let t = (0, u.Z)(e),
        n = (0, i.e7)([l.Z, o.Z], () => d(e, [l.Z, o.Z]), [e]),
        { shouldHideGuildPurchaseEntryPoints: r } = (0, s.uP)(e);
    return !r && (n || t);
}
function p(e) {
    let t = _(e),
        n = (0, r.RF)(e, 'useShowRoleSubscriptionsInChannelList');
    return t && !n;
}
