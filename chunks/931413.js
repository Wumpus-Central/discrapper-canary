n.d(t, { A: () => x });
var i = n(627968),
    l = n(989349),
    s = n.n(l),
    r = n(417597),
    a = n(397927),
    d = n(832712),
    o = n(71393),
    c = n(543465),
    u = n(477427),
    g = n(769591),
    h = n(815968),
    m = n(985018);
function x(e) {
    var t, n;
    let { guildId: l } = e,
        x = (0, r.bG)([o.A], () => o.A.getGuild(l)),
        j = (0, r.bG)([c.Ay], () => c.Ay.isMuted(l)),
        p = (0, r.bG)([c.Ay], () => c.Ay.getMuteConfig(l));
    return null == x
        ? null
        : (0, i.jsxs)(a.nVY, {
              children: [
                  (0, i.jsx)(a.dOG, {
                      label: m.intl.format(m.t["J+7D9E"], { name: x.name }),
                      description: m.intl.string(m.t.IngcUv),
                      checked: j,
                      onChange: (e) => {
                          d.A.updateGuildNotificationSettings(l, { muted: e }, u.G_.muted(e));
                      },
                  }),
                  j &&
                      (0, i.jsx)(a.l6P, {
                          label: m.intl.string(m.t.Ztu2Yo),
                          description:
                              null == (n = p) || null == n.end_time
                                  ? null
                                  : m.intl.formatToPlainString(m.t.j7h4AJ, {
                                        endTime: new Date(n.end_time).toLocaleString(m.intl.currentLocale, {
                                            month: "numeric",
                                            day: "numeric",
                                            hour: "numeric",
                                            minute: "2-digit",
                                        }),
                                    }),
                          onSelectionChange: (e) => {
                              let t = e > 0 ? s()().add(e, "second").toISOString() : null;
                              d.A.updateGuildNotificationSettings(
                                  l,
                                  {
                                      mute_config: {
                                          selected_time_window: e,
                                          end_time: t,
                                      },
                                      muted: !0,
                                  },
                                  u.fd.Muted,
                              );
                          },
                          options: (0, g.b8)(),
                          value: null != (t = null == p ? void 0 : p.selected_time_window) ? t : h.Xx.ALWAYS,
                          selectionMode: "single",
                          fullWidth: !0,
                      }),
              ],
          });
}
