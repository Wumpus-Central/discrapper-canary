t.d(e, { default: () => r });
var i = t(58149),
    u = t(734057),
    a = t(458294),
    n = t(71393),
    l = t(543465),
    s = t(652215);
function r(d, e) {
    let t = u.A.getChannel(d);
    (0, i.zV)(s.HAw.ACK_MESSAGES, {
        channel_id: d,
        guild_id: null == t ? void 0 : t.getGuildId(),
        location: e,
        guild_unread_statuses: n.A.getGuildsArray().map((d) => {
            let e = a.default.hasUnread(d.id),
                t = a.default.getMentionCount(d.id),
                i = l.Ay.isMuted(d.id),
                u = l.Ay.resolveGuildUnreadSetting(d);
            return `${d.id},${e},${t},${i},${u}`;
        }),
    });
}
