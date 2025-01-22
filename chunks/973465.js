n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(846027),
    o = n(906732),
    c = n(131951),
    d = n(388032);
function u() {
    let e = (0, s.Wu)([c.Z], () => Object.values(c.Z.getVideoDevices())),
        t = (0, s.e7)([c.Z], () => c.Z.getVideoDeviceId()),
        { analyticsLocations: n } = (0, o.ZP)(),
        u = r.useMemo(
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
    return (0, i.jsx)(a.FormItem, {
        title: d.intl.string(d.t.FsQ3OT),
        children: (0, i.jsx)(a.SingleSelect, {
            placeholder: d.intl.string(d.t['t9eQ/v']),
            options: u,
            value: t,
            onChange: (e) => l.Z.setVideoDevice(e, { analyticsLocations: n }),
            'aria-label': d.intl.string(d.t['t9eQ/v'])
        })
    });
}
