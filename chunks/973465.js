n.d(t, { Z: () => m });
var r = n(54381),
    i = n(442837),
    a = n(906732),
    o = n(670863),
    s = n(72897),
    l = n(988306),
    c = n(131951),
    u = n(626135),
    d = n(106388),
    f = n(981631),
    p = n(65154),
    _ = n(388032);
function m() {
    let e = (0, i.e7)([c.Z], () => c.Z.isVideoAvailable()),
        { id: t } = (0, s.p6)(p.h7.VIDEO_INPUT),
        { analyticsLocations: n } = (0, a.ZP)();
    return (0, r.jsx)(o.j, {
        label: _.intl.string(_.t.FsQ3OR),
        deviceType: p.h7.VIDEO_INPUT,
        location: "UserSettingsCameraSelect",
        isDisabled: !e,
        showAllDevices: !0,
        helperText: (0, l.O)()
            ? _.intl.format(_.t.aJYgRt, {
                  onCameraSettingsClick: () => {
                      d.Z.setState({ previewEnabled: !1 }),
                          window.open((0, l.u)(t)),
                          u.default.track(f.rMx.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: n });
                  },
              })
            : void 0,
    });
}
