n.d(t, { Z: () => l });
var r = n(951288);
n(647438);
var i = n(722932),
    a = n(824690),
    o = n(674343),
    s = n(388032);
function l() {
    let { volume: e, onVolumeChange: t } = (0, a.Z)();
    return (0, i.X0)({ location: "UserSettingsSoundmojiVolume" })
        ? (0, r.jsx)(o.Z, {
              title: s.intl.string(s.t.w9Hq8P),
              description: s.intl.string(s.t.INenzc),
              label: s.intl.string(s.t["2JbvKy"]),
              volume: e,
              onVolumeChange: t,
          })
        : null;
}
