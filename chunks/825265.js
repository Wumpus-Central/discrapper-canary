n.d(t, { Z: () => c });
var r = n(442837),
    i = n(636850),
    l = n(514576),
    a = n(695346),
    o = n(581883),
    s = n(306680),
    u = n(85746);
function c(e, t) {
    var n;
    let { unread: c, disabled: d } = t,
        f =
            ((n = e.guild_id),
            (0, r.e7)([o.Z], () =>
                (function (e, t) {
                    var n, r;
                    let i =
                        null != t
                            ? null == e ||
                              null == (r = e.guilds[t]) ||
                              null == (n = r.mobileRedesignChannelListSettings)
                                ? void 0
                                : n.messagePreviews
                            : null;
                    return null != i && a.lL.has(i.value) ? i.value : a.Gp.getSetting();
                })(o.Z.settings.guilds, n),
            )),
        m = (0, r.e7)([s.ZP], () => null != e && s.ZP.hasUnread(e.id)),
        p = (0, i.Z)(e),
        g = d || p || f === u.Z.NONE || (f === u.Z.UNREADS && !(null != c ? c : m));
    return (0, l.Z)(e, g);
}
