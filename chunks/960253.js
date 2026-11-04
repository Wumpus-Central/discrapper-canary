var i = n(855986),
    r = n(936555),
    a = n(465932),
    s = n(440293),
    l = n(164956),
    o = n(71393),
    d = n(217976),
    c = n(652215);
function u(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.A, l.A],
        i = t.getGuild(e);
    if (null == i) return !1;
    let a = (0, r.w)(i),
        s = i.features.has(c.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    return !!((a && s) || n.isViewingServerShop(e));
}
function _(e) {
    let t = (0, d.A)(e),
        n = (0, i.bG)([o.A, l.A], () => u(e, [o.A, l.A]), [e]),
        { shouldHideGuildPurchaseEntryPoints: r } = (0, a.MH)(e);
    return !r && (n || t);
}
n.d(
    t,
    {},
    {
        Oh: _,
        l8: function (e, t) {
            return !!u(e) || (0, d.I)(e, t);
        },
        vz: function (e) {
            let t = _(e),
                n = (0, s.w)(e);
            return t && !n;
        },
    },
);
