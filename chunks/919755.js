n.d(t, { Z: () => u }), n(388685);
var r = n(442837),
    i = n(592125),
    l = n(496675),
    a = n(306680),
    o = n(9156),
    s = n(709054),
    c = n(231338);
function u(e) {
    return (0, r.cj)([i.Z, a.ZP, o.ZP, l.Z], () =>
        s.default.keys(e).reduce(
            (e, t) => {
                let n = i.Z.getChannel(t),
                    r = null == n ? void 0 : n.isGuildVocal();
                return (
                    (e.badge = e.badge + a.ZP.getMentionCount(t)),
                    (e.unread =
                        e.unread ||
                        (!r &&
                            l.Z.can(c.Pl.VIEW_CHANNEL, n) &&
                            a.ZP.hasUnread(t) &&
                            !o.ZP.isChannelMuted(null == n ? void 0 : n.getGuildId(), t))),
                    e
                );
            },
            {
                badge: 0,
                unread: !1,
            },
        ),
    );
}
