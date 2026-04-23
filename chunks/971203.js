n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(477782),
    r = n(956793),
    o = n(58149),
    c = n(378570),
    d = n(345942),
    u = n(576705),
    m = n(231608),
    A = n(954571),
    h = n(652215),
    x = n(985018);
function p(e) {
    let t = s.useContext(A.AnalyticsContext),
        n = e.voiceChannels[0],
        p = (0, l.bG)([u.A], () => null != n && u.A.can(h.xBc.CONNECT, n.channel));
    return null == n
        ? null
        : [
              (0, i.jsx)(
                  a.Dr,
                  {
                      id: "join-voice",
                      action: function () {
                          (0, c.iN)(n.channel.id),
                              r.default.selectVoiceChannel(n.channel.id),
                              o.Ay.trackWithMetadata(h.HAw.ACTIVITY_FEED_VOICE_CHANNEL_VISITED, {
                                  source: { ...t.location, object: h.ZSU.LIST_ITEM },
                                  guild_id: n.guild.id,
                                  channel_id: n.channel.id,
                                  ...(0, m.o)(e),
                              });
                      },
                      label: x.intl.string(x.t["8yOlh9"]),
                      disabled: !p,
                  },
                  "join-voice",
              ),
              (0, i.jsx)(
                  a.Dr,
                  {
                      id: "goto-server",
                      action: function () {
                          (0, d.u)(n.guild.id),
                              o.Ay.trackWithMetadata(h.HAw.ACTIVITY_FEED_GUILD_VISITED, {
                                  source: { ...t.location, object: h.ZSU.LIST_ITEM },
                                  guild_id: n.guild.id,
                                  af_recently_played: !1,
                                  ...(0, m.o)(e),
                              });
                      },
                      label: x.intl.string(x.t.RGgqm1),
                  },
                  "goto-server",
              ),
          ];
}
