n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(722932),
    s = n(824690),
    a = n(674343),
    l = n(388032);
function o() {
    let { volume: e, onVolumeChange: t } = (0, s.Z)();
    return (0, r.X0)({ location: 'UserSettingsSoundmojiVolume' })
        ? (0, i.jsx)(a.Z, {
              title: l.intl.string(l.t.w9Hq8P),
              description: l.intl.string(l.t.INenzc),
              label: l.intl.string(l.t['2JbvKy']),
              volume: e,
              onVolumeChange: t
          })
        : null;
}
