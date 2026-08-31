t.d(n, { A: () => y });
var i = t(477900);
t(582128);
var r = t(17928),
    a = t(477782),
    d = t(334738),
    s = t(435470),
    l = t(970278),
    o = t(152007),
    u = t(95701),
    A = t(769765),
    c = t(573163);
let h = (0, t(945810).mj)({
    name: "2026-08-mark-channel-unread",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var _ = t(439147),
    f = t(652215),
    g = t(375708);
function y(e) {
    let n,
        t,
        y =
            ((n = (0, s.ed)(e.guild_id, e.id)),
            (t = (0, r.bG)([c.Ay, A.A, l.A, o.A], () => {
                if (e.isForumPost()) return c.Ay.isForumPostUnread(e.id);
                if (e.type !== f.rbe.GUILD_CATEGORY) return c.Ay.hasUnreadOrMentions(e.id);
                {
                    let n = A.A.getCategories(e.getGuildId());
                    if (null == n[e.id]) return !1;
                    let t = n[e.id].filter((e) => {
                        let { channel: n } = e;
                        return (0, u.Z_)(n.type);
                    });
                    if (
                        t.some((e) => {
                            let { channel: n } = e;
                            return c.Ay.hasUnreadOrMentions(n.id);
                        })
                    )
                        return !0;
                    for (let { channel: n } of t) {
                        let t = n.guild_id ?? e.guild_id,
                            i = l.A.getThreadsForParent(t, n.id);
                        for (let e in i)
                            if (o.A.hasJoined(e) && !o.A.isMuted(e) && c.Ay.hasUnreadOrMentions(e)) return !0;
                    }
                    return !1;
                }
            }, [e])),
            e.isForumLikeChannel() ? n > 0 : t),
        b = (0, r.bG)([c.Ay], () => c.Ay.canBeUnread(e.id) && c.Ay.hasLastMessage(e.id) && !e.isCategory());
    return h.useConfig({ location: "channel_context_menu" }).enabled && !y && b
        ? (0, i.jsx)(a.Dr, {
              id: "mark-channel-unread",
              label: g.intl.string(g.t.RpE9k7),
              action: function () {
                  var n;
                  let t;
                  (n = e.id), null != (t = c.Cr.get(n).lastMessageId) && (0, _.A)(n, t);
              },
          })
        : (0, i.jsx)(a.Dr, {
              id: "mark-channel-read",
              label: g.intl.string(g.t.e6RscS),
              action: function () {
                  (0, d.hS)(e, {
                      section: f.JJy.CHANNEL_CONTEXT_MENU,
                      object: f.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                      objectType: f.AnalyticsObjectTypes.ACK_MANUAL,
                  });
              },
              disabled: !y,
          });
}
