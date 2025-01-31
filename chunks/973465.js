n.d(t, { Z: () => u });
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(846027),
    o = n(906732),
    c = n(131951),
    d = n(388032);
function u() {
    let e = (0, r.Wu)([c.Z], () => Object.values(c.Z.getVideoDevices())),
        t = (0, r.e7)([c.Z], () => c.Z.getVideoDeviceId()),
        { analyticsLocations: n } = (0, o.ZP)(),
        u = s.useMemo(
            () =>
                e.map((e) => {
                    let { id: t, name: n } = e;
                    return {
                        value: t,
                        label: n
                    };
                }),
            [e]
        );
    return (0, i.jsx)(l.xJW, {
        title: d.intl.string(d.t.FsQ3OT),
        children: (0, i.jsx)(l.q4e, {
            placeholder: d.intl.string(d.t['t9eQ/v']),
            options: u,
            value: t,
            onChange: (e) => a.Z.setVideoDevice(e, { analyticsLocations: n }),
            'aria-label': d.intl.string(d.t['t9eQ/v'])
        })
    });
}
