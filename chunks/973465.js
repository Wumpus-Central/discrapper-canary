n.d(t, { Z: () => m });
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(846027),
    o = n(906732),
    c = n(920321),
    d = n(131951),
    u = n(388032);
function m() {
    let e = (0, c.Z)(),
        { currentDeviceId: t, isVideoAvailable: n } = (0, r.cj)([d.Z], () => ({
            currentDeviceId: d.Z.getVideoDeviceId(),
            isVideoAvailable: d.Z.isVideoAvailable()
        })),
        { analyticsLocations: m } = (0, o.ZP)(),
        h = s.useMemo(
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
    return (0, i.jsx)(l.xJW, {
        title: u.intl.string(u.t.FsQ3OT),
        children: (0, i.jsx)(l.q4e, {
            placeholder: u.intl.string(u.t['t9eQ/v']),
            options: h,
            value: t,
            isDisabled: !n,
            onChange: (e) => a.Z.setVideoDevice(e, { analyticsLocations: m }),
            'aria-label': u.intl.string(u.t['t9eQ/v'])
        })
    });
}
