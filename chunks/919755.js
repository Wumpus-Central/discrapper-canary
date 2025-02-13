n.d(t, { Z: () => d }), n(47120), n(724458);
var i = n(442837),
    l = n(592125),
    r = n(496675),
    o = n(306680),
    a = n(9156),
    s = n(709054),
    c = n(231338);
function d(e) {
    return (0, i.cj)([l.Z, o.ZP, a.ZP, r.Z], () =>
        s.default.keys(e).reduce(
            (e, t) => {
                let n = l.Z.getChannel(t),
                    i = null == n ? void 0 : n.isGuildVocal();
                return (e.badge = e.badge + o.ZP.getMentionCount(t)), (e.unread = e.unread || (!i && r.Z.can(c.Pl.VIEW_CHANNEL, n) && o.ZP.hasUnread(t) && !a.ZP.isChannelMuted(null == n ? void 0 : n.getGuildId(), t))), e;
            },
            {
                badge: 0,
                unread: !1
            }
        )
    );
}
