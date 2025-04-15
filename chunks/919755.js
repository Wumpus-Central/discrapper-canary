n.d(t, { Z: () => u }), n(388685);
var r = n(442837),
    i = n(592125),
    l = n(496675),
    o = n(306680),
    s = n(9156),
    a = n(709054),
    c = n(231338);
function u(e) {
    return (0, r.cj)([i.Z, o.ZP, s.ZP, l.Z], () =>
        a.default.keys(e).reduce(
            (e, t) => {
                let n = i.Z.getChannel(t),
                    r = null == n ? void 0 : n.isGuildVocal();
                return (e.badge = e.badge + o.ZP.getMentionCount(t)), (e.unread = e.unread || (!r && l.Z.can(c.Pl.VIEW_CHANNEL, n) && o.ZP.hasUnread(t) && !s.ZP.isChannelMuted(null == n ? void 0 : n.getGuildId(), t))), e;
            },
            {
                badge: 0,
                unread: !1
            }
        )
    );
}
