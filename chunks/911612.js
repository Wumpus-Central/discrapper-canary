n.d(a, { A: () => u });
var t = n(477900);
n(582128);
var l = n(17928),
    i = n(477782),
    r = n(192308),
    c = n(5180),
    d = n(576705),
    s = n(652215),
    o = n(375708);
function u(e) {
    let a = (0, l.bG)([d.A], () => d.A.can(s.xBc.MANAGE_CHANNELS, e));
    return __OVERLAY__
        ? null
        : (0, c.ai)(e.id)
          ? (0, t.jsx)(i.Dr, {
                id: "create-category",
                label: o.intl.string(o.t["ISN+NM"]),
                action: () =>
                    (0, r.openModalLazy)(async () => {
                        let { default: e } = await n.e("303956").then(n.bind(n, 703551));
                        return (a) => (0, t.jsx)(e, { ...a });
                    }),
            })
          : a
            ? [
                  (0, t.jsx)(
                      i.Dr,
                      {
                          id: "create-channel",
                          label: o.intl.string(o.t["fUYU+j"]),
                          action: () =>
                              (0, r.openModalLazy)(async () => {
                                  let { default: a } = await Promise.all([
                                      n.e("377476"),
                                      n.e("766811"),
                                      n.e("746309"),
                                      n.e("778799"),
                                      n.e("203589"),
                                      n.e("692513"),
                                      n.e("589916"),
                                      n.e("460773"),
                                      n.e("208018"),
                                      n.e("120379"),
                                      n.e("993199"),
                                      n.e("819193"),
                                      n.e("507775"),
                                      n.e("662068"),
                                      n.e("358608"),
                                      n.e("221500"),
                                      n.e("637038"),
                                  ]).then(n.bind(n, 684343));
                                  return (n) => (0, t.jsx)(a, { ...n, channelType: s.rbe.GUILD_TEXT, guildId: e.id });
                              }),
                      },
                      "create-channel",
                  ),
                  (0, t.jsx)(
                      i.Dr,
                      {
                          id: "create-category",
                          label: o.intl.string(o.t["ISN+NM"]),
                          action: () =>
                              (0, r.openModalLazy)(async () => {
                                  let { default: a } = await Promise.all([
                                      n.e("377476"),
                                      n.e("766811"),
                                      n.e("746309"),
                                      n.e("778799"),
                                      n.e("203589"),
                                      n.e("692513"),
                                      n.e("589916"),
                                      n.e("460773"),
                                      n.e("208018"),
                                      n.e("120379"),
                                      n.e("993199"),
                                      n.e("819193"),
                                      n.e("507775"),
                                      n.e("662068"),
                                      n.e("358608"),
                                      n.e("221500"),
                                      n.e("637038"),
                                  ]).then(n.bind(n, 684343));
                                  return (n) =>
                                      (0, t.jsx)(a, { ...n, channelType: s.rbe.GUILD_CATEGORY, guildId: e.id });
                              }),
                      },
                      "create-category",
                  ),
              ]
            : null;
}
