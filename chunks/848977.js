n.d(t, { A: () => E });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(334738),
    d = n(435470),
    s = n(970278),
    u = n(152007),
    o = n(95701),
    c = n(769765),
    A = n(222823),
    g = n(652215),
    f = n(985018);
function E(e) {
    let t,
        n,
        E =
            ((t = (0, d.ed)(e.guild_id, e.id)),
            (n = (0, i.bG)([A.Ay, c.A, s.A, u.A], () => {
                if (e.isForumPost()) return A.Ay.isForumPostUnread(e.id);
                if (e.type !== g.rbe.GUILD_CATEGORY) return A.Ay.hasUnreadOrMentions(e.id);
                {
                    let t = c.A.getCategories(e.getGuildId());
                    if (null == t[e.id]) return !1;
                    if (
                        t[e.id].some((e) => {
                            let { channel: t } = e;
                            return (0, o.Z_)(t.type) && A.Ay.hasUnreadOrMentions(t.id);
                        })
                    )
                        return !0;
                    let n = new Set(t[e.id].map((e) => e.channel.id)),
                        r = s.A.getThreadsForGuild(e.guild_id);
                    for (let e in r)
                        if (n.has(e)) {
                            for (let t in r[e])
                                if (u.A.hasJoined(t) && !u.A.isMuted(t) && A.Ay.hasUnreadOrMentions(t)) return !0;
                        }
                    return !1;
                }
            }, [e])),
            e.isForumLikeChannel() ? t > 0 : n);
    return (0, r.jsx)(l.Drp, {
        id: "mark-channel-read",
        label: f.intl.string(f.t.e6RscS),
        action: function () {
            (0, a.hS)(e, {
                section: g.JJy.CHANNEL_CONTEXT_MENU,
                object: g.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: g.AnalyticsObjectTypes.ACK_MANUAL,
            });
        },
        disabled: !E,
    });
}
