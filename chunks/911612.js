i.d(t, { A: () => u });
var n = i(627968);
i(64700);
var s = i(17928),
    l = i(477782),
    a = i(192308),
    r = i(5180),
    d = i(576705),
    o = i(652215),
    c = i(985018);
function u(e) {
    let t = (0, s.bG)([d.A], () => d.A.can(o.xBc.MANAGE_CHANNELS, e));
    return __OVERLAY__
        ? null
        : (0, r.ai)(e.id)
          ? (0, n.jsx)(l.Dr, {
                id: "create-category",
                label: c.intl.string(c.t["ISN+NM"]),
                action: () =>
                    (0, a.openModalLazy)(async () => {
                        let { default: e } = await i.e("28020").then(i.bind(i, 395199));
                        return (t) => (0, n.jsx)(e, { ...t });
                    }),
            })
          : t
            ? [
                  (0, n.jsx)(
                      l.Dr,
                      {
                          id: "create-channel",
                          label: c.intl.string(c.t["fUYU+j"]),
                          action: () =>
                              (0, a.openModalLazy)(async () => {
                                  let { default: t } = await Promise.all([
                                      i.e("42282"),
                                      i.e("9431"),
                                      i.e("36126"),
                                  ]).then(i.bind(i, 113194));
                                  return (i) => (0, n.jsx)(t, { ...i, channelType: o.rbe.GUILD_TEXT, guildId: e.id });
                              }),
                      },
                      "create-channel",
                  ),
                  (0, n.jsx)(
                      l.Dr,
                      {
                          id: "create-category",
                          label: c.intl.string(c.t["ISN+NM"]),
                          action: () =>
                              (0, a.openModalLazy)(async () => {
                                  let { default: t } = await Promise.all([
                                      i.e("42282"),
                                      i.e("9431"),
                                      i.e("36126"),
                                  ]).then(i.bind(i, 113194));
                                  return (i) =>
                                      (0, n.jsx)(t, { ...i, channelType: o.rbe.GUILD_CATEGORY, guildId: e.id });
                              }),
                      },
                      "create-category",
                  ),
              ]
            : null;
}
