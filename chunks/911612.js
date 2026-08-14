t.d(a, { A: () => u });
var n = t(477900);
t(582128);
var l = t(17928),
    i = t(477782),
    r = t(192308),
    c = t(5180),
    d = t(576705),
    s = t(652215),
    o = t(375708);
function u(e) {
    let a = (0, l.bG)([d.A], () => d.A.can(s.xBc.MANAGE_CHANNELS, e));
    return __OVERLAY__
        ? null
        : (0, c.ai)(e.id)
          ? (0, n.jsx)(i.Dr, {
                id: "create-category",
                label: o.intl.string(o.t["ISN+NM"]),
                action: () =>
                    (0, r.openModalLazy)(async () => {
                        let { default: e } = await t.e("303956").then(t.bind(t, 703551));
                        return (a) => (0, n.jsx)(e, { ...a });
                    }),
            })
          : a
            ? [
                  (0, n.jsx)(
                      i.Dr,
                      {
                          id: "create-channel",
                          label: o.intl.string(o.t["fUYU+j"]),
                          action: () =>
                              (0, r.openModalLazy)(async () => {
                                  let { default: a } = await Promise.all([
                                      t.e("598574"),
                                      t.e("451272"),
                                      t.e("999726"),
                                      t.e("436865"),
                                      t.e("203589"),
                                      t.e("692513"),
                                      t.e("589916"),
                                      t.e("460773"),
                                      t.e("208018"),
                                      t.e("120379"),
                                      t.e("777487"),
                                      t.e("819193"),
                                      t.e("507775"),
                                      t.e("358608"),
                                      t.e("528034"),
                                      t.e("637038"),
                                  ]).then(t.bind(t, 333369));
                                  return (t) => (0, n.jsx)(a, { ...t, channelType: s.rbe.GUILD_TEXT, guildId: e.id });
                              }),
                      },
                      "create-channel",
                  ),
                  (0, n.jsx)(
                      i.Dr,
                      {
                          id: "create-category",
                          label: o.intl.string(o.t["ISN+NM"]),
                          action: () =>
                              (0, r.openModalLazy)(async () => {
                                  let { default: a } = await Promise.all([
                                      t.e("598574"),
                                      t.e("451272"),
                                      t.e("999726"),
                                      t.e("436865"),
                                      t.e("203589"),
                                      t.e("692513"),
                                      t.e("589916"),
                                      t.e("460773"),
                                      t.e("208018"),
                                      t.e("120379"),
                                      t.e("777487"),
                                      t.e("819193"),
                                      t.e("507775"),
                                      t.e("358608"),
                                      t.e("528034"),
                                      t.e("637038"),
                                  ]).then(t.bind(t, 333369));
                                  return (t) =>
                                      (0, n.jsx)(a, { ...t, channelType: s.rbe.GUILD_CATEGORY, guildId: e.id });
                              }),
                      },
                      "create-category",
                  ),
              ]
            : null;
}
