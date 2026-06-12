i.d(t, { A: () => f });
var r = i(627968);
i(64700);
var n = i(17928),
    d = i(477782),
    s = i(334738),
    a = i(435470),
    u = i(970278),
    l = i(152007),
    o = i(95701),
    A = i(769765),
    c = i(222823),
    h = i(652215),
    _ = i(375708);
function f(e) {
    let t,
        i,
        f =
            ((t = (0, a.ed)(e.guild_id, e.id)),
            (i = (0, n.bG)([c.Ay, A.A, u.A, l.A], () => {
                if (e.isForumPost()) return c.Ay.isForumPostUnread(e.id);
                if (e.type !== h.rbe.GUILD_CATEGORY) return c.Ay.hasUnreadOrMentions(e.id);
                {
                    let t = A.A.getCategories(e.getGuildId());
                    if (null == t[e.id]) return !1;
                    let i = t[e.id].filter((e) => {
                        let { channel: t } = e;
                        return (0, o.Z_)(t.type);
                    });
                    if (
                        i.some((e) => {
                            let { channel: t } = e;
                            return c.Ay.hasUnreadOrMentions(t.id);
                        })
                    )
                        return !0;
                    for (let { channel: t } of i) {
                        let i = t.guild_id ?? e.guild_id,
                            r = u.A.getThreadsForParent(i, t.id);
                        for (let e in r)
                            if (l.A.hasJoined(e) && !l.A.isMuted(e) && c.Ay.hasUnreadOrMentions(e)) return !0;
                    }
                    return !1;
                }
            }, [e])),
            e.isForumLikeChannel() ? t > 0 : i);
    return (0, r.jsx)(d.Dr, {
        id: "mark-channel-read",
        label: _.intl.string(_.t.e6RscS),
        action: function () {
            (0, s.hS)(e, {
                section: h.JJy.CHANNEL_CONTEXT_MENU,
                object: h.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: h.AnalyticsObjectTypes.ACK_MANUAL,
            });
        },
        disabled: !f,
    });
}
