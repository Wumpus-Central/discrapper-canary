n.d(t, { Z: () => c });
var i = n(442837),
    l = n(292556),
    s = n(419363),
    o = n(509613),
    a = n(292959),
    r = n(981631),
    u = n(388032);
let c = (0, o.J9)("TextToSpeechNotifications", {
    useTitle: () => u.intl.string(u.t.VIm5MD),
    useSubtitle: () => u.intl.string(u.t["+4dnAw"]),
    useValue: () => (0, i.e7)([a.Z], () => a.Z.getTTSType()),
    setValue: (e) => l.default.setTTSType(e),
    usePredicate: () => s.Zh,
    useOptions: () => [
        {
            name: u.intl.string(u.t.B1AGeH),
            value: r.PrB.ALL_CHANNELS,
        },
        {
            name: u.intl.string(u.t.uM2rNj),
            value: r.PrB.SELECTED_CHANNEL,
        },
        {
            name: u.intl.string(u.t.DYO5Oj),
            value: r.PrB.NEVER,
        },
    ],
});
