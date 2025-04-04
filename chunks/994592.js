n.d(t, {
    j0: () => p,
    mY: () => _,
    on: () => f
}),
    n(47120);
var r = n(442837),
    i = n(652515),
    o = n(200876),
    a = n(674180),
    s = n(160404),
    l = n(430824),
    c = n(772021),
    u = n(981631);
function d(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.Z, s.Z],
        r = t.getGuild(e);
    if (null == r) return !1;
    let i = (0, o.l)(r),
        a = r.hasFeature(u.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    return !!((i && a) || n.isViewingServerShop(e));
}
function f(e, t) {
    return !!d(e) || (0, c.U)(e, t);
}
function _(e) {
    let t = (0, c.Z)(e),
        n = (0, r.e7)([l.Z, s.Z], () => d(e, [l.Z, s.Z]), [e]),
        { shouldHideGuildPurchaseEntryPoints: i } = (0, a.uP)(e);
    return !i && (n || t);
}
function p(e) {
    let t = _(e),
        n = (0, i.RF)(e, 'useShowRoleSubscriptionsInChannelList');
    return t && !n;
}
