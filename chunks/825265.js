n.d(t, {
    X: () => c,
    Z: () => d,
});
var r = n(442837),
    i = n(636850),
    l = n(514576),
    a = n(695346),
    o = n(581883),
    s = n(306680),
    u = n(85746);
function c(e) {
    return (0, r.e7)([o.Z], () =>
        (function (e, t) {
            var n, r;
            let i =
                null != t
                    ? null == e || null == (r = e.guilds[t]) || null == (n = r.mobileRedesignChannelListSettings)
                        ? void 0
                        : n.messagePreviews
                    : null;
            return null != i && a.lL.has(i.value) ? i.value : a.Gp.getSetting();
        })(o.Z.settings.guilds, e),
    );
}
function d(e, t) {
    let { unread: n, disabled: a } = t,
        o = c(e.guild_id),
        d = (0, r.e7)([s.ZP], () => null != e && s.ZP.hasUnread(e.id)),
        f = (0, i.Z)(e),
        p = a || f || o === u.Z.NONE || (o === u.Z.UNREADS && !(null != n ? n : d));
    return (0, l.Z)(e, p);
}
