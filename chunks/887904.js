n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(557239),
    l = n(388032);
function o(e) {
    let { guildFriendsEnabled: t } = a.Z.useExperiment({ location: 'useFriendsItem' }, { autoTrackExposure: !1 });
    return t
        ? (0, i.jsx)(r.sNh, {
              id: 'friends',
              label: l.NW.string(l.t.kYxEcH),
              icon: r.iFz,
              action: () => {
                  (0, r.ZDy)(async () => {
                      let { default: t } = await n.e('62635').then(n.bind(n, 564232));
                      return (n) =>
                          (0, i.jsx)(
                              t,
                              (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          i = Object.keys(n);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (i = i.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          i.forEach(function (t) {
                                              var i;
                                              (i = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: i,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = i);
                                          });
                                  }
                                  return e;
                              })({ guild: e }, n)
                          );
                  });
              }
          })
        : null;
}
