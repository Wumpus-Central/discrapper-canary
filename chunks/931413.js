n.d(t, { A: () => N });
var i = n(627968),
    s = n(989349),
    l = n.n(s),
    a = n(417597),
    r = n(270003),
    d = n(243721),
    o = n(691885),
    c = n(832712),
    u = n(71393),
    h = n(543465),
    g = n(477427),
    m = n(769591),
    x = n(355097),
    A = n(985018);
function N(e) {
    var t;
    let { guildId: n } = e,
        s = (0, a.bG)([u.A], () => u.A.getGuild(n)),
        N = (0, a.bG)([h.Ay], () => h.Ay.isMuted(n)),
        j = (0, a.bG)([h.Ay], () => h.Ay.getMuteConfig(n));
    return null == s
        ? null
        : (0, i.jsxs)(r.n, {
              children: [
                  (0, i.jsx)(d.d, {
                      label: A.intl.format(A.t["J+7D9E"], { name: s.name }),
                      description: A.intl.string(A.t.IngcUv),
                      checked: N,
                      onChange: (e) => {
                          c.A.updateGuildNotificationSettings(n, { muted: e }, g.G_.muted(e));
                      },
                  }),
                  N &&
                      (0, i.jsx)(o.l, {
                          label: A.intl.string(A.t.Ztu2Yo),
                          description:
                              null == (t = j) || null == t.end_time
                                  ? null
                                  : A.intl.formatToPlainString(A.t.j7h4AJ, {
                                        endTime: new Date(t.end_time).toLocaleString(A.intl.currentLocale, {
                                            month: "numeric",
                                            day: "numeric",
                                            hour: "numeric",
                                            minute: "2-digit",
                                        }),
                                    }),
                          onSelectionChange: (e) => {
                              let t = e > 0 ? l()().add(e, "second").toISOString() : null;
                              c.A.updateGuildNotificationSettings(
                                  n,
                                  { mute_config: { selected_time_window: e, end_time: t }, muted: !0 },
                                  g.fd.Muted,
                              );
                          },
                          options: (0, m.b8)(),
                          value: j?.selected_time_window ?? x.Xx.ALWAYS,
                          selectionMode: "single",
                          fullWidth: !0,
                      }),
              ],
          });
}
