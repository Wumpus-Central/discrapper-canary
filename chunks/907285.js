n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(846027),
    o = n(131951);
function l() {
    let e = (0, r.e7)([o.Z], () => Object.values(o.Z.getVideoDevices())),
        t = (0, r.e7)([o.Z], () => o.Z.getVideoDeviceId());
    return e.map((e) => {
        let { id: n, disabled: r, name: o } = e;
        return (0, i.jsx)(
            a.k5B,
            {
                group: 'video-devices',
                id: 'video-device-'.concat(n),
                disabled: r,
                label: o,
                checked: n === t,
                action: () => s.Z.setVideoDevice(n)
            },
            'video-device-'.concat(n)
        );
    });
}
