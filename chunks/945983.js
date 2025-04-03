r.d(t, { Z: () => g }), r(977457);
var n = r(200651),
    l = r(192379),
    i = r(913527),
    o = r.n(i),
    a = r(442837),
    d = r(481060),
    s = r(87051),
    c = r(776568),
    u = r(818083),
    b = r(9156),
    f = r(621600),
    p = r(388032);
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
    let { enabled: r } = j.useExperiment({ location: '74d87e_1' }, { autoTrackExposure: !1 }),
        i = (0, a.cj)([b.ZP], () => Object.fromEntries(e.map((e) => [e, b.ZP.isMuted(e)])), [e]),
        u = l.useCallback(
            (r) => {
                let n = Object.fromEntries(
                    e
                        .filter((e) => !i[e])
                        .map((e) => [
                            e,
                            {
                                muted: !0,
                                mute_config:
                                    null != r
                                        ? {
                                              selected_time_window: r,
                                              end_time: r > 0 ? o()().add(r, 'second').toISOString() : null
                                          }
                                        : void 0
                            }
                        ])
                );
                s.Z.updateGuildNotificationSettingsBulk(n, f.ZB.Muted, t);
            },
            [e, t, i]
        ),
        g = l.useCallback(() => {
            s.Z.updateGuildNotificationSettingsBulk(Object.fromEntries(e.filter((e) => i[e]).map((e) => [e, { muted: !1 }])), f.ZB.Unmuted, t);
        }, [e, t, i]);
    return r
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(d.sNh, {
                      id: 'mute-folder',
                      label: p.NW.string(p.t.vBTk2N),
                      action: () => u(),
                      children: (0, c.k)().map((e) => {
                          let { value: t, label: r } = e;
                          return (0, n.jsx)(
                              d.sNh,
                              {
                                  id: ''.concat(t),
                                  label: r,
                                  action: () => u(t)
                              },
                              t
                          );
                      })
                  }),
                  (0, n.jsx)(d.sNh, {
                      id: 'unmute-folder',
                      label: p.NW.string(p.t.VFDdkZ),
                      action: g
                  })
              ]
          })
        : null;
}
