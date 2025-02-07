n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(846027),
    o = n(920321),
    l = n(131951),
    u = n(388032);
function c(e) {
    var t;
    let n = (0, o.Z)(),
        c = (0, r.e7)([l.Z], () => l.Z.getVideoDeviceId()),
        d =
            null ===
                (t = Object.values(n).find((e) => {
                    let { id: t } = e;
                    return t === c;
                })) || void 0 === t
                ? void 0
                : t.name,
        f = Object.values(n).map((e) => {
            let { id: t, disabled: n, name: r } = e;
            return (0, i.jsx)(
                a.k5B,
                {
                    group: 'video-devices',
                    id: 'video-device-'.concat(t),
                    disabled: n,
                    label: r,
                    checked: t === c,
                    action: () => s.Z.setVideoDevice(t)
                },
                'video-device-'.concat(t)
            );
        });
    return e
        ? (0, i.jsx)(a.sNh, {
              id: 'video-devices',
              label: u.intl.string(u.t.F122Gx),
              subtext: d,
              children: f
          })
        : (0, i.jsx)(a.kSQ, {
              label: u.intl.string(u.t.F122Gx),
              children: f
          });
}
