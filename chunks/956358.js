n.d(t, { d: () => l });
var r = n(818083),
    i = n(427164),
    a = n(846573);
let o = (0, r.B)({
        kind: 'user',
        id: '2025-07_desktop_skipped_updates',
        label: 'Optional desktop updates at startup',
        defaultConfig: { allowOptionalDesktopUpdates: !1 },
        treatments: [
            {
                id: 1,
                label: 'Allow optional desktop updates',
                config: { allowOptionalDesktopUpdates: !0 }
            }
        ]
    }),
    s = (0, i.le)({
        name: '2025-07-desktop-skipped-updates',
        kind: 'user',
        defaultConfig: { allowOptionalDesktopUpdates: !1 },
        variations: { 1: { allowOptionalDesktopUpdates: !0 } }
    });
function l(e) {
    let { location: t } = e,
        { isInHoldout: n } = a.X.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return (
        n || s.getConfig({ location: t }),
        o.getCurrentConfig(
            { location: t },
            {
                disable: n,
                autoTrackExposure: !0
            }
        )
    );
}
