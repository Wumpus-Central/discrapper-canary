t.d(n, { A: () => p });
var r = t(477900);
t(582128);
var i = t(17928),
    a = t(477782),
    d = t(334738),
    l = t(435470),
    s = t(970278),
    u = t(152007),
    o = t(95701),
    A = t(769765),
    c = t(573163);
let h = (0, t(945810).mj)({
    name: "2026-08-mark-channel-unread",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var f = t(626584),
    g = t(439147),
    _ = t(734057),
    y = t(935208);
let C = new f.A("markChannelUnread");
var b = t(652215),
    k = t(375708);
function p(e) {
    let n,
        t,
        f =
            ((n = (0, l.ed)(e.guild_id, e.id)),
            (t = (0, i.bG)([c.Ay, A.A, s.A, u.A], () => {
                if (e.isForumPost()) return c.Ay.isForumPostUnread(e.id);
                if (e.type !== b.rbe.GUILD_CATEGORY) return c.Ay.hasUnreadOrMentions(e.id);
                {
                    let n = A.A.getCategories(e.getGuildId());
                    if (null == n[e.id]) return !1;
                    let t = n[e.id].filter((e) => {
                        let { channel: n } = e;
                        return (0, o.Z_)(n.type);
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
                            r = s.A.getThreadsForParent(t, n.id);
                        for (let e in r)
                            if (u.A.hasJoined(e) && !u.A.isMuted(e) && c.Ay.hasUnreadOrMentions(e)) return !0;
                    }
                    return !1;
                }
            }, [e])),
            e.isForumLikeChannel() ? n > 0 : t),
        p = (0, i.bG)([c.Ay], () => c.Ay.canBeUnread(e.id) && c.Ay.hasLastMessage(e.id) && !e.isCategory());
    return h.useConfig({ location: "channel_context_menu" }).enabled && !f && p
        ? (0, r.jsx)(a.Dr, {
              id: "mark-channel-unread",
              label: k.intl.string(k.t.RpE9k7),
              action: function () {
                  !(function (e) {
                      let n = c.Cr.get(e).lastMessageId;
                      if (null == n) return;
                      let t = y.default.atPreviousMillisecond(n),
                          r = _.A.getChannel(e),
                          i = +!!(0, c.rr)(r);
                      C.log("Marking channel unread", { channelId: e, messageId: n }), (0, g.z)(e, t, i);
                  })(e.id);
              },
          })
        : (0, r.jsx)(a.Dr, {
              id: "mark-channel-read",
              label: k.intl.string(k.t.e6RscS),
              action: function () {
                  (0, d.hS)(e, {
                      section: b.JJy.CHANNEL_CONTEXT_MENU,
                      object: b.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                      objectType: b.AnalyticsObjectTypes.ACK_MANUAL,
                  });
              },
              disabled: !f,
          });
}
