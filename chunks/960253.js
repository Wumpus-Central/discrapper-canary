n.d(t, { Oh: () => u, l8: () => E, vz: () => A });
var i = n(17928),
    a = n(936555),
    r = n(465932),
    s = n(440293),
    l = n(164956),
    o = n(71393),
    d = n(217976),
    c = n(652215);
function _(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.A, l.A],
        i = t.getGuild(e);
    if (null == i) return !1;
    let r = (0, a.w)(i),
        s = i.features.has(c.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    return !!((r && s) || n.isViewingServerShop(e));
}
function E(e, t) {
    return !!_(e) || (0, d.I)(e, t);
}
function u(e) {
    let t = (0, d.A)(e),
        n = (0, i.bG)([o.A, l.A], () => _(e, [o.A, l.A]), [e]),
        { shouldHideGuildPurchaseEntryPoints: a } = (0, r.MH)(e);
    return !a && (n || t);
}
function A(e) {
    let t = u(e),
        n = (0, s.w)(e);
    return t && !n;
}
