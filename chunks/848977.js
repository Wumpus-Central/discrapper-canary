t.d(n, { A: () => h });
var r = t(627968);
t(64700);
var i = t(311907),
    l = t(397927),
    a = t(334738),
    d = t(435470),
    s = t(970278),
    u = t(152007),
    o = t(95701),
    c = t(769765),
    A = t(222823),
    g = t(652215),
    f = t(985018);
function h(e) {
    let n,
        t,
        h =
            ((n = (0, d.ed)(e.guild_id, e.id)),
            (t = (0, i.bG)([A.Ay, c.A, s.A, u.A], () => {
                if (e.isForumPost()) return A.Ay.isForumPostUnread(e.id);
                if (e.type !== g.rbe.GUILD_CATEGORY) return A.Ay.hasUnreadOrMentions(e.id);
                {
                    let n = c.A.getCategories(e.getGuildId());
                    if (null == n[e.id]) return !1;
                    let t = n[e.id].filter((e) => {
                        let { channel: n } = e;
                        return (0, o.Z_)(n.type);
                    });
                    if (
                        t.some((e) => {
                            let { channel: n } = e;
                            return A.Ay.hasUnreadOrMentions(n.id);
                        })
                    )
                        return !0;
                    for (let { channel: n } of t) {
                        let t = n.guild_id ?? e.guild_id,
                            r = s.A.getThreadsForParent(t, n.id);
                        for (let e in r)
                            if (u.A.hasJoined(e) && !u.A.isMuted(e) && A.Ay.hasUnreadOrMentions(e)) return !0;
                    }
                    return !1;
                }
            }, [e])),
            e.isForumLikeChannel() ? n > 0 : t);
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
        disabled: !h,
    });
}
