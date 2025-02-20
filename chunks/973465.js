n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(846027),
    o = n(906732),
    c = n(920321),
    d = n(131951),
    u = n(388032);
function m() {
    let e = (0, c.Z)(),
        { currentDeviceId: t, isVideoAvailable: n } = (0, s.cj)([d.Z], () => ({
            currentDeviceId: d.Z.getVideoDeviceId(),
            isVideoAvailable: d.Z.isVideoAvailable()
        })),
        { analyticsLocations: m } = (0, o.ZP)(),
        g = i.useMemo(
            () =>
                Object.values(e).map((e) => {
                    let { id: t, name: n } = e;
                    return {
                        value: t,
                        label: n
                    };
                }),
            [e]
        );
    return (0, r.jsx)(a.xJW, {
        title: u.NW.string(u.t.FsQ3OT),
        children: (0, r.jsx)(a.q4e, {
            placeholder: u.NW.string(u.t['t9eQ/v']),
            options: g,
            value: t,
            isDisabled: !n,
            onChange: (e) => l.Z.setVideoDevice(e, { analyticsLocations: m }),
            'aria-label': u.NW.string(u.t['t9eQ/v'])
        })
    });
}
