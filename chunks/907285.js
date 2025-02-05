n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(846027),
    o = n(131951),
    l = n(388032);
function u(e) {
    var t;
    let n = (0, r.e7)([o.Z], () => Object.values(o.Z.getVideoDevices())),
        u = (0, r.e7)([o.Z], () => o.Z.getVideoDeviceId()),
        c =
            null ===
                (t = n.find((e) => {
                    let { id: t } = e;
                    return t === u;
                })) || void 0 === t
                ? void 0
                : t.name,
        d = n.map((e) => {
            let { id: t, disabled: n, name: r } = e;
            return (0, i.jsx)(
                a.k5B,
                {
                    group: 'video-devices',
                    id: 'video-device-'.concat(t),
                    disabled: n,
                    label: r,
                    checked: t === u,
                    action: () => s.Z.setVideoDevice(t)
                },
                'video-device-'.concat(t)
            );
        });
    return e
        ? (0, i.jsx)(a.sNh, {
              id: 'video-devices',
              label: l.intl.string(l.t.F122Gx),
              subtext: c,
              children: d
          })
        : (0, i.jsx)(a.kSQ, {
              label: l.intl.string(l.t.F122Gx),
              children: d
          });
}
