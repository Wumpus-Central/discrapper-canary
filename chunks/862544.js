e.d(d, {
    default: () => s,
});
var a = e(58149),
    n = e(734057),
    i = e(458294),
    u = e(71393),
    c = e(543465),
    l = e(652215);

function s(t, d) {
    let e = n.A.getChannel(t);
    (0, a.zV)(l.HAw.ACK_MESSAGES, {
        channel_id: t,
        guild_id: null == e ? void 0 : e.getGuildId(),
        location: d,
        guild_unread_statuses: u.A.getGuildsArray().map((t) => {
            let d = i.default.hasUnread(t.id),
                e = i.default.getMentionCount(t.id),
                a = c.Ay.isMuted(t.id),
                n = c.Ay.resolveGuildUnreadSetting(t);
            return "".concat(t.id, ",").concat(d, ",").concat(e, ",").concat(a, ",").concat(n);
        }),
    });
}
