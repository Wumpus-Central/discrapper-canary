i.d(t, { A: () => c });
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(397927),
    r = i(576705),
    a = i(652215),
    d = i(349828),
    o = i(985018);
function c(e) {
    let t = (0, l.bG)([r.A], () => r.A.can(a.xBc.MANAGE_CHANNELS, e));
    return __OVERLAY__
        ? null
        : e.id === d.V
          ? (0, n.jsx)(s.Drp, {
                id: "create-category",
                label: o.intl.string(o.t["ISN+NM"]),
                action: () =>
                    (0, s.mMO)(async () => {
                        let { default: e } = await i.e("28020").then(i.bind(i, 395199));
                        return (t) => (0, n.jsx)(e, { ...t });
                    }),
            })
          : t
            ? [
                  (0, n.jsx)(
                      s.Drp,
                      {
                          id: "create-channel",
                          label: o.intl.string(o.t["fUYU+j"]),
                          action: () =>
                              (0, s.mMO)(async () => {
                                  let { default: t } = await Promise.all([
                                      i.e("8018"),
                                      i.e("93142"),
                                      i.e("64233"),
                                      i.e("76738"),
                                  ]).then(i.bind(i, 409200));
                                  return (i) => (0, n.jsx)(t, { ...i, channelType: a.rbe.GUILD_TEXT, guildId: e.id });
                              }),
                      },
                      "create-channel",
                  ),
                  (0, n.jsx)(
                      s.Drp,
                      {
                          id: "create-category",
                          label: o.intl.string(o.t["ISN+NM"]),
                          action: () =>
                              (0, s.mMO)(async () => {
                                  let { default: t } = await Promise.all([
                                      i.e("8018"),
                                      i.e("93142"),
                                      i.e("64233"),
                                      i.e("76738"),
                                  ]).then(i.bind(i, 409200));
                                  return (i) =>
                                      (0, n.jsx)(t, { ...i, channelType: a.rbe.GUILD_CATEGORY, guildId: e.id });
                              }),
                      },
                      "create-category",
                  ),
              ]
            : null;
}
