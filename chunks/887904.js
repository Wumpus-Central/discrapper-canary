t.d(e, {
    Z: function () {
        return o;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    a = t(557239),
    r = t(388032);
function o(n) {
    let { guildFriendsEnabled: e } = a.Z.useExperiment({ location: 'useFriendsItem' }, { autoTrackExposure: !1 });
    return e
        ? (0, i.jsx)(l.MenuItem, {
              id: 'friends',
              label: r.intl.string(r.t.kYxEcH),
              icon: l.FriendsIcon,
              action: () => {
                  (0, l.openModalLazy)(async () => {
                      let { default: e } = await t.e('62635').then(t.bind(t, 564232));
                      return (t) =>
                          (0, i.jsx)(e, {
                              guild: n,
                              ...t
                          });
                  });
              }
          })
        : null;
}
