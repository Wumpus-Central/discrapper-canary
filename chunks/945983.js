t.d(l, { Z: () => h });
var i = t(200651),
    n = t(192379),
    d = t(913527),
    r = t.n(d),
    a = t(442837),
    s = t(481060),
    o = t(87051),
    u = t(776568),
    c = t(818083),
    f = t(9156),
    m = t(621600),
    b = t(388032);
let g = (0, c.B)({
    kind: 'user',
    id: '2022-02_guild_folder_mute',
    label: 'Guild Folder Mute',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function h(e, l) {
    let { enabled: t } = g.useExperiment({ location: '74d87e_1' }, { autoTrackExposure: !1 }),
        d = (0, a.cj)([f.ZP], () => Object.fromEntries(e.map((e) => [e, f.ZP.isMuted(e)])), [e]),
        c = n.useCallback(
            (t) => {
                let i = Object.fromEntries(
                    e
                        .filter((e) => !d[e])
                        .map((e) => [
                            e,
                            {
                                muted: !0,
                                mute_config:
                                    null != t
                                        ? {
                                              selected_time_window: t,
                                              end_time: t > 0 ? r()().add(t, 'second').toISOString() : null
                                          }
                                        : void 0
                            }
                        ])
                );
                o.Z.updateGuildNotificationSettingsBulk(i, m.ZB.Muted, l);
            },
            [e, l, d]
        ),
        h = n.useCallback(() => {
            o.Z.updateGuildNotificationSettingsBulk(Object.fromEntries(e.filter((e) => d[e]).map((e) => [e, { muted: !1 }])), m.ZB.Unmuted, l);
        }, [e, l, d]);
    return t
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(s.sNh, {
                      id: 'mute-folder',
                      label: b.intl.string(b.t.vBTk2N),
                      action: () => c(),
                      children: (0, u.k)().map((e) => {
                          let { value: l, label: t } = e;
                          return (0, i.jsx)(
                              s.sNh,
                              {
                                  id: ''.concat(l),
                                  label: t,
                                  action: () => c(l)
                              },
                              l
                          );
                      })
                  }),
                  (0, i.jsx)(s.sNh, {
                      id: 'unmute-folder',
                      label: b.intl.string(b.t.VFDdkZ),
                      action: h
                  })
              ]
          })
        : null;
}
