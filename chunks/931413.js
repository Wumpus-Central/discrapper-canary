i.d(t, { A: () => m });
var n = i(627968),
    s = i(989349),
    l = i.n(s),
    a = i(417597),
    r = i(397927),
    d = i(832712),
    o = i(71393),
    c = i(543465),
    u = i(477427),
    g = i(769591),
    h = i(815968),
    x = i(985018);
function m(e) {
    var t;
    let { guildId: i } = e,
        s = (0, a.bG)([o.A], () => o.A.getGuild(i)),
        m = (0, a.bG)([c.Ay], () => c.Ay.isMuted(i)),
        A = (0, a.bG)([c.Ay], () => c.Ay.getMuteConfig(i));
    return null == s
        ? null
        : (0, n.jsxs)(r.nVY, {
              children: [
                  (0, n.jsx)(r.dOG, {
                      label: x.intl.format(x.t["J+7D9E"], { name: s.name }),
                      description: x.intl.string(x.t.IngcUv),
                      checked: m,
                      onChange: (e) => {
                          d.A.updateGuildNotificationSettings(i, { muted: e }, u.G_.muted(e));
                      },
                  }),
                  m &&
                      (0, n.jsx)(r.l6P, {
                          label: x.intl.string(x.t.Ztu2Yo),
                          description:
                              null == (t = A) || null == t.end_time
                                  ? null
                                  : x.intl.formatToPlainString(x.t.j7h4AJ, {
                                        endTime: new Date(t.end_time).toLocaleString(x.intl.currentLocale, {
                                            month: "numeric",
                                            day: "numeric",
                                            hour: "numeric",
                                            minute: "2-digit",
                                        }),
                                    }),
                          onSelectionChange: (e) => {
                              let t = e > 0 ? l()().add(e, "second").toISOString() : null;
                              d.A.updateGuildNotificationSettings(
                                  i,
                                  { mute_config: { selected_time_window: e, end_time: t }, muted: !0 },
                                  u.fd.Muted,
                              );
                          },
                          options: (0, g.b8)(),
                          value: A?.selected_time_window ?? h.Xx.ALWAYS,
                          selectionMode: "single",
                          fullWidth: !0,
                      }),
              ],
          });
}
