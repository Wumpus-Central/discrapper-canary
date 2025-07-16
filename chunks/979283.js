n.d(t, { O: () => o });
var r = n(818083),
    i = n(427164);
let l = (0, r.B)({
        kind: 'user',
        id: '2025-07_camera_toggle_sound',
        label: 'Camera Toggle Sound',
        defaultConfig: {
            enabled: !1,
            inExperiment: !1
        },
        treatments: [
            {
                id: 0,
                label: 'Sound does not play when camera is toggled',
                config: {
                    enabled: !1,
                    inExperiment: !0
                }
            },
            {
                id: 1,
                label: 'Sound plays when camera is toggled',
                config: {
                    enabled: !0,
                    inExperiment: !0
                }
            }
        ]
    }),
    a = (0, i.le)({
        name: '2025-07-camera-toggle-sound',
        kind: 'user',
        defaultConfig: {
            enabled: !1,
            inExperiment: !1
        },
        variations: {
            0: {
                enabled: !1,
                inExperiment: !0
            },
            1: {
                enabled: !0,
                inExperiment: !0
            }
        }
    });
function o() {
    let { enabled: e, inExperiment: t } = l.getCurrentConfig({ location: 'soundpacks' }, { autoTrackExposure: !0 });
    if (t) return e;
    let { enabled: n } = a.getConfig({ location: 'soundpacks' });
    return n;
}
