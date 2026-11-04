var a = n(477900);
n(582128);
var i = n(855986),
    l = n(477782),
    r = n(192308),
    c = n(5180),
    d = n(576705),
    s = n(652215),
    o = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, i.bG)([d.A], () => d.A.can(s.xBc.MANAGE_CHANNELS, e));
            return __OVERLAY__
                ? null
                : (0, c.ai)(e.id)
                  ? (0, a.jsx)(l.Dr, {
                        id: "create-category",
                        label: o.intl.string(o.t["ISN+NM"]),
                        action: () =>
                            (0, r.mM)(async () => {
                                let { default: e } = await n.e(303956).then(n.bind(n, 703551));
                                return (t) => (0, a.jsx)(e, { ...t });
                            }),
                    })
                  : t
                    ? [
                          (0, a.jsx)(
                              l.Dr,
                              {
                                  id: "create-channel",
                                  label: o.intl.string(o.t["fUYU+j"]),
                                  action: () =>
                                      (0, r.mM)(async () => {
                                          let { default: t } = await Promise.all([
                                              n.e(377476),
                                              n.e(597622),
                                              n.e(746309),
                                              n.e(778799),
                                              n.e(844780),
                                              n.e(470068),
                                              n.e(203589),
                                              n.e(692513),
                                              n.e(460773),
                                              n.e(208018),
                                              n.e(589916),
                                              n.e(298107),
                                              n.e(526778),
                                              n.e(819193),
                                              n.e(507775),
                                              n.e(524521),
                                              n.e(358608),
                                              n.e(637038),
                                              n.e(640317),
                                          ]).then(n.bind(n, 410380));
                                          return (n) =>
                                              (0, a.jsx)(t, { ...n, channelType: s.rbe.GUILD_TEXT, guildId: e.id });
                                      }),
                              },
                              "create-channel",
                          ),
                          (0, a.jsx)(
                              l.Dr,
                              {
                                  id: "create-category",
                                  label: o.intl.string(o.t["ISN+NM"]),
                                  action: () =>
                                      (0, r.mM)(async () => {
                                          let { default: t } = await Promise.all([
                                              n.e(377476),
                                              n.e(597622),
                                              n.e(746309),
                                              n.e(778799),
                                              n.e(844780),
                                              n.e(470068),
                                              n.e(203589),
                                              n.e(692513),
                                              n.e(460773),
                                              n.e(208018),
                                              n.e(589916),
                                              n.e(298107),
                                              n.e(526778),
                                              n.e(819193),
                                              n.e(507775),
                                              n.e(524521),
                                              n.e(358608),
                                              n.e(637038),
                                              n.e(640317),
                                          ]).then(n.bind(n, 410380));
                                          return (n) =>
                                              (0, a.jsx)(t, { ...n, channelType: s.rbe.GUILD_CATEGORY, guildId: e.id });
                                      }),
                              },
                              "create-category",
                          ),
                      ]
                    : null;
        },
    },
);
