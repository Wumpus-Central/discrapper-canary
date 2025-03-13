n.d(t, {
    Hu: () => f,
    wt: () => d
}),
    n(47120);
var r = n(442837),
    i = n(818083),
    o = n(592125),
    a = n(944486),
    s = n(358085);
let l = new Set(['943265993613008967']),
    c = (0, i.B)({
        kind: 'user',
        id: '2024-10_flamingo',
        label: 'Flamingo',
        defaultConfig: {
            enabled: !1,
            isTester: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Enabled - Treatment 1',
                config: {
                    enabled: !0,
                    isTester: !1
                }
            },
            {
                id: 2,
                label: 'Enabled - Treatment 2',
                config: {
                    enabled: !0,
                    isTester: !1
                }
            },
            {
                id: 3,
                label: 'Enabled - Treatment 3',
                config: {
                    enabled: !0,
                    isTester: !1
                }
            },
            {
                id: 4,
                label: 'Enabled - Tester',
                config: {
                    enabled: !0,
                    isTester: !0
                }
            }
        ]
    }),
    u = () => (0, s.isWindows)() || (0, s.isMac)();
function d(e) {
    let { location: t, autoTrackExposure: n } = e,
        { enabled: r } = c.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return r && u();
}
function f(e) {
    let { location: t, autoTrackExposure: n } = e,
        { enabled: i, isTester: s } = c.useExperiment({ location: t }, { autoTrackExposure: n }),
        d = (0, r.e7)([a.Z, o.Z], () => o.Z.getChannel(a.Z.getVoiceChannelId())),
        f = !s || (null != d && l.has(d.guild_id));
    return i && u() && f;
}
