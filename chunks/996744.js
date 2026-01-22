n.d(t, {
    Cg: () => f,
    Lb: () => d,
}),
    n(896048);
var r = n(311907),
    i = n(600975),
    a = n(734057),
    s = n(309010),
    o = n(723702);
let l = new Set(["943265993613008967"]),
    c = (0, i.C)({
        kind: "user",
        id: "2024-10_flamingo",
        label: "Flamingo",
        defaultConfig: {
            enabled: !1,
            isTester: !1,
        },
        treatments: [
            {
                id: 1,
                label: "Enabled - Treatment 1",
                config: {
                    enabled: !0,
                    isTester: !1,
                },
            },
            {
                id: 2,
                label: "Enabled - Treatment 2",
                config: {
                    enabled: !0,
                    isTester: !1,
                },
            },
            {
                id: 3,
                label: "Enabled - Treatment 3",
                config: {
                    enabled: !0,
                    isTester: !1,
                },
            },
            {
                id: 4,
                label: "Enabled - Tester",
                config: {
                    enabled: !0,
                    isTester: !0,
                },
            },
        ],
    }),
    u = () => (0, o.isWindows)() || (0, o.isMac)();

function d(e) {
    let { location: t, autoTrackExposure: n } = e;
    if (__OVERLAY__ || !u()) return !1;
    let { enabled: r } = c.getCurrentConfig(
        {
            location: t,
        },
        {
            autoTrackExposure: n,
        },
    );
    return r;
}

function f(e) {
    let { location: t, autoTrackExposure: n } = e,
        { enabled: i, isTester: o } = c.useExperiment(
            {
                location: t,
            },
            {
                autoTrackExposure: n,
            },
        ),
        d = (0, r.bG)([s.A, a.A], () => a.A.getChannel(s.A.getVoiceChannelId())),
        f = !o || (null != d && l.has(d.guild_id));
    return !__OVERLAY__ && i && u() && f;
}
