n.d(t, {
    Oh: () => p,
    l8: () => f,
    vz: () => _,
}),
    n(896048);
var r = n(311907),
    i = n(491026),
    a = n(936555),
    s = n(465932),
    o = n(164956),
    l = n(71393),
    c = n(217976),
    u = n(652215);

function d(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.A, o.A],
        r = t.getGuild(e);
    if (null == r) return !1;
    let i = (0, a.w)(r),
        s = r.features.has(u.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    return !!((i && s) || n.isViewingServerShop(e));
}

function f(e, t) {
    return !!d(e) || (0, c.I)(e, t);
}

function p(e) {
    let t = (0, c.A)(e),
        n = (0, r.bG)([l.A, o.A], () => d(e, [l.A, o.A]), [e]),
        { shouldHideGuildPurchaseEntryPoints: i } = (0, s.MH)(e);
    return !i && (n || t);
}

function _(e) {
    let t = p(e),
        n = (0, i.YZ)(e, "useShowRoleSubscriptionsInChannelList");
    return t && !n;
}
