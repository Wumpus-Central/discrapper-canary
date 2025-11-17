n.d(t, { Z: () => l });
var r = n(54381);
n(473749);
var i = n(722932),
    a = n(824690),
    o = n(674343),
    s = n(388032);
function l() {
    let { volume: e, onVolumeChange: t } = (0, a.Z)();
    return (0, i.X0)({ location: "UserSettingsSoundmojiVolume" })
        ? (0, r.jsx)(o.Z, {
              label: s.intl.string(s.t["2JbvKw"]),
              description: s.intl.string(s.t.INenzY),
              volume: e,
              onVolumeChange: t,
          })
        : null;
}
