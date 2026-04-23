n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(17928),
    l = n(477782),
    a = n(334738),
    d = n(435470),
    s = n(970278),
    u = n(152007),
    o = n(95701),
    c = n(769765),
    A = n(222823),
    g = n(652215),
    f = n(985018);
function h(e) {
    let t,
        n,
        h =
            ((t = (0, d.ed)(e.guild_id, e.id)),
            (n = (0, i.bG)([A.Ay, c.A, s.A, u.A], () => {
                if (e.isForumPost()) return A.Ay.isForumPostUnread(e.id);
                if (e.type !== g.rbe.GUILD_CATEGORY) return A.Ay.hasUnreadOrMentions(e.id);
                {
                    let t = c.A.getCategories(e.getGuildId());
                    if (null == t[e.id]) return !1;
                    let n = t[e.id].filter((e) => {
                        let { channel: t } = e;
                        return (0, o.Z_)(t.type);
                    });
                    if (
                        n.some((e) => {
                            let { channel: t } = e;
                            return A.Ay.hasUnreadOrMentions(t.id);
                        })
                    )
                        return !0;
                    for (let { channel: t } of n) {
                        let n = t.guild_id ?? e.guild_id,
                            r = s.A.getThreadsForParent(n, t.id);
                        for (let e in r)
                            if (u.A.hasJoined(e) && !u.A.isMuted(e) && A.Ay.hasUnreadOrMentions(e)) return !0;
                    }
                    return !1;
                }
            }, [e])),
            e.isForumLikeChannel() ? t > 0 : n);
    return (0, r.jsx)(l.Dr, {
        id: "mark-channel-read",
        label: f.intl.string(f.t.e6RscS),
        action: function () {
            (0, a.hS)(e, {
                section: g.JJy.CHANNEL_CONTEXT_MENU,
                object: g.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: g.AnalyticsObjectTypes.ACK_MANUAL,
            });
        },
        disabled: !h,
    });
}
