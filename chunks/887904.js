t.d(n, { Z: () => d });
var i = t(200651);
t(192379);
var l = t(481060),
    a = t(557239),
    r = t(388032);
function d(e) {
    let { guildFriendsEnabled: n } = a.Z.useExperiment({ location: 'useFriendsItem' }, { autoTrackExposure: !1 });
    return n
        ? (0, i.jsx)(l.sNh, {
              id: 'friends',
              label: r.intl.string(r.t.kYxEcH),
              icon: l.iFz,
              action: () => {
                  (0, l.ZDy)(async () => {
                      let { default: n } = await t.e('62635').then(t.bind(t, 564232));
                      return (t) =>
                          (0, i.jsx)(n, {
                              guild: e,
                              ...t
                          });
                  });
              }
          })
        : null;
}
