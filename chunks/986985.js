n.d(t, { Z: () => c });
var i = n(442837),
    l = n(292556),
    s = n(419363),
    o = n(509613),
    r = n(292959),
    a = n(981631),
    u = n(388032);
let c = (0, o.J9)("TextToSpeechNotifications", {
    useTitle: () => u.intl.string(u.t.VIm5MD),
    useSubtitle: () => u.intl.string(u.t["+4dnAw"]),
    useValue: () => (0, i.e7)([r.Z], () => r.Z.getTTSType()),
    setValue: (e) => l.default.setTTSType(e),
    usePredicate: () => s.Zh,
    useOptions: () => [
        {
            name: u.intl.string(u.t.B1AGeH),
            value: a.PrB.ALL_CHANNELS,
        },
        {
            name: u.intl.string(u.t.uM2rNj),
            value: a.PrB.SELECTED_CHANNEL,
        },
        {
            name: u.intl.string(u.t.DYO5Oj),
            value: a.PrB.NEVER,
        },
    ],
});
