n.d(t, { A: () => g }), n(896048);
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(334738),
    o = n(435470),
    s = n(970278),
    d = n(152007),
    c = n(95701),
    u = n(769765),
    A = n(222823),
    f = n(652215),
    b = n(985018);
function g(e) {
    let t,
        n,
        g =
            ((t = (0, o.ed)(e.guild_id, e.id)),
            (n = (0, i.bG)([A.Ay, u.A, s.A, d.A], () => {
                if (e.isForumPost()) return A.Ay.isForumPostUnread(e.id);
                if (e.type !== f.rbe.GUILD_CATEGORY) return A.Ay.hasUnreadOrMentions(e.id);
                {
                    let t = u.A.getCategories(e.getGuildId());
                    if (null == t[e.id]) return !1;
                    if (
                        t[e.id].some((e) => {
                            let { channel: t } = e;
                            return (0, c.Z_)(t.type) && A.Ay.hasUnreadOrMentions(t.id);
                        })
                    )
                        return !0;
                    let n = new Set(t[e.id].map((e) => e.channel.id)),
                        r = s.A.getThreadsForGuild(e.guild_id);
                    for (let e in r)
                        if (n.has(e)) {
                            for (let t in r[e])
                                if (d.A.hasJoined(t) && !d.A.isMuted(t) && A.Ay.hasUnreadOrMentions(t)) return !0;
                        }
                    return !1;
                }
            }, [e])),
            e.isForumLikeChannel() ? t > 0 : n);
    return (0, r.jsx)(l.Drp, {
        id: "mark-channel-read",
        label: b.intl.string(b.t.e6RscS),
        action: function () {
            (0, a.hS)(e, {
                section: f.JJy.CHANNEL_CONTEXT_MENU,
                object: f.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: f.AnalyticsObjectTypes.ACK_MANUAL,
            });
        },
        disabled: !g,
    });
}
