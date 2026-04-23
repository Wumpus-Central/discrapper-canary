n.d(t, { A: () => E });
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(477782),
    a = n(334738),
    u = n(435470),
    o = n(970278),
    d = n(152007),
    s = n(95701),
    c = n(769765),
    _ = n(222823),
    h = n(652215),
    A = n(985018);
function E(e) {
    let t,
        n,
        E =
            ((t = (0, u.ed)(e.guild_id, e.id)),
            (n = (0, l.bG)([_.Ay, c.A, o.A, d.A], () => {
                if (e.isForumPost()) return _.Ay.isForumPostUnread(e.id);
                if (e.type !== h.rbe.GUILD_CATEGORY) return _.Ay.hasUnreadOrMentions(e.id);
                {
                    let t = c.A.getCategories(e.getGuildId());
                    if (null == t[e.id]) return !1;
                    let n = t[e.id].filter((e) => {
                        let { channel: t } = e;
                        return (0, s.Z_)(t.type);
                    });
                    if (
                        n.some((e) => {
                            let { channel: t } = e;
                            return _.Ay.hasUnreadOrMentions(t.id);
                        })
                    )
                        return !0;
                    for (let { channel: t } of n) {
                        let n = t.guild_id ?? e.guild_id,
                            r = o.A.getThreadsForParent(n, t.id);
                        for (let e in r)
                            if (d.A.hasJoined(e) && !d.A.isMuted(e) && _.Ay.hasUnreadOrMentions(e)) return !0;
                    }
                    return !1;
                }
            }, [e])),
            e.isForumLikeChannel() ? t > 0 : n);
    return (0, r.jsx)(i.Dr, {
        id: "mark-channel-read",
        label: A.intl.string(A.t.e6RscS),
        action: function () {
            (0, a.hS)(e, {
                section: h.JJy.CHANNEL_CONTEXT_MENU,
                object: h.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: h.AnalyticsObjectTypes.ACK_MANUAL,
            });
        },
        disabled: !E,
    });
}
