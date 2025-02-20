n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(722932),
    s = n(824690),
    a = n(674343),
    l = n(388032);
function o(e) {
    let { refreshStyles: t = !1 } = e,
        { volume: n, onVolumeChange: o } = (0, s.Z)();
    return (0, i.X0)({ location: 'UserSettingsSoundmojiVolume' })
        ? (0, r.jsx)(a.Z, {
              title: l.NW.string(l.t.w9Hq8P),
              description: l.NW.string(l.t.INenzc),
              label: l.NW.string(l.t['2JbvKy']),
              volume: n,
              onVolumeChange: o,
              refreshStyles: t
          })
        : null;
}
