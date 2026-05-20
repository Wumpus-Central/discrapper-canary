t.d(a, { A: () => u });
var n = t(627968);
t(64700);
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
                        let { default: e } = await Promise.all([t.e("40175"), t.e("28020")]).then(t.bind(t, 395199));
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
                                      t.e("8516"),
                                      t.e("11585"),
                                      t.e("3589"),
                                      t.e("89916"),
                                      t.e("60773"),
                                      t.e("8018"),
                                      t.e("20379"),
                                      t.e("19193"),
                                      t.e("7775"),
                                      t.e("58608"),
                                      t.e("70195"),
                                      t.e("37038"),
                                  ]).then(t.bind(t, 946430));
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
                                      t.e("8516"),
                                      t.e("11585"),
                                      t.e("3589"),
                                      t.e("89916"),
                                      t.e("60773"),
                                      t.e("8018"),
                                      t.e("20379"),
                                      t.e("19193"),
                                      t.e("7775"),
                                      t.e("58608"),
                                      t.e("70195"),
                                      t.e("37038"),
                                  ]).then(t.bind(t, 946430));
                                  return (t) =>
                                      (0, n.jsx)(a, { ...t, channelType: s.rbe.GUILD_CATEGORY, guildId: e.id });
                              }),
                      },
                      "create-category",
                  ),
              ]
            : null;
}
