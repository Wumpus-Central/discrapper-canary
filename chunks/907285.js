n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    o = n(846027),
    s = n(920321),
    l = n(131951),
    c = n(388032);
function u(e) {
    var t;
    let n = (0, s.Z)(),
        u = (0, i.e7)([l.Z], () => l.Z.getVideoDeviceId()),
        d =
            null ==
            (t = Object.values(n).find((e) => {
                let { id: t } = e;
                return t === u;
            }))
                ? void 0
                : t.name,
        f = Object.values(n).map((e) => {
            let { id: t, disabled: n, name: i } = e;
            return (0, r.jsx)(
                a.k5B,
                {
                    group: 'video-devices',
                    id: 'video-device-'.concat(t),
                    disabled: n,
                    label: i,
                    checked: t === u,
                    action: () => o.Z.setVideoDevice(t)
                },
                'video-device-'.concat(t)
            );
        });
    return e
        ? (0, r.jsx)(a.sNh, {
              id: 'video-devices',
              label: c.intl.string(c.t.F122Gx),
              subtext: d,
              children: f
          })
        : (0, r.jsx)(a.kSQ, {
              label: c.intl.string(c.t.F122Gx),
              children: f
          });
}
