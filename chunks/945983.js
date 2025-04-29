n.d(t, { Z: () => g }), n(467055);
var r = n(255367),
    l = n(73800),
    i = n(913527),
    o = n.n(i),
    a = n(442837),
    d = n(481060),
    s = n(87051),
    c = n(776568),
    u = n(818083),
    b = n(9156),
    f = n(621600),
    p = n(388032);
let j = (0, u.B)({
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
function g(e, t) {
    let { enabled: n } = j.useExperiment({ location: '74d87e_1' }, { autoTrackExposure: !1 }),
        i = (0, a.cj)([b.ZP], () => Object.fromEntries(e.map((e) => [e, b.ZP.isMuted(e)])), [e]),
        u = l.useCallback(
            (n) => {
                let r = Object.fromEntries(
                    e
                        .filter((e) => !i[e])
                        .map((e) => [
                            e,
                            {
                                muted: !0,
                                mute_config:
                                    null != n
                                        ? {
                                              selected_time_window: n,
                                              end_time: n > 0 ? o()().add(n, 'second').toISOString() : null
                                          }
                                        : void 0
                            }
                        ])
                );
                s.Z.updateGuildNotificationSettingsBulk(r, f.ZB.Muted, t);
            },
            [e, t, i]
        ),
        g = l.useCallback(() => {
            s.Z.updateGuildNotificationSettingsBulk(Object.fromEntries(e.filter((e) => i[e]).map((e) => [e, { muted: !1 }])), f.ZB.Unmuted, t);
        }, [e, t, i]);
    return n
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(d.sNh, {
                      id: 'mute-folder',
                      label: p.intl.string(p.t.vBTk2N),
                      action: () => u(),
                      children: (0, c.k)().map((e) => {
                          let { value: t, label: n } = e;
                          return (0, r.jsx)(
                              d.sNh,
                              {
                                  id: ''.concat(t),
                                  label: n,
                                  action: () => u(t)
                              },
                              t
                          );
                      })
                  }),
                  (0, r.jsx)(d.sNh, {
                      id: 'unmute-folder',
                      label: p.intl.string(p.t.VFDdkZ),
                      action: g
                  })
              ]
          })
        : null;
}
