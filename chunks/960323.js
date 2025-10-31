n.d(e, { K: () => A });
var i = n(657707),
    l = n(509613),
    r = n(131951),
    u = n(313789),
    s = n(526665),
    a = n(604224),
    o = n(901567),
    c = n(98022),
    d = n(90794),
    E = n(756893),
    O = n(927947),
    T = n(776570),
    S = n(726985),
    g = n(388032);
let I = (0, l.x1)(u.n.VOICE_AND_VIDEO_PANE, {
        buildLayout: () => [],
        render: a.Z,
        usePredicate: () => !(0, s.BK)("LegacyVoiceAndVideoPane"),
    }),
    y = (0, l.x1)(u.n.VOICE_AND_VIDEO_PANE, {
        buildLayout: () => [T.Z, o.Z, O.Z, E.Z, d.Z, c.Z],
        usePredicate: () => (0, s.BK)("VoiceAndVideoPane"),
    }),
    b = (0, l.wf)(u.n.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => g.intl.string(g.t.B1fFpf),
        buildLayout: () => ((0, s.Ml)("VoiceAndVideoPanel") ? [y] : [I]),
    }),
    A = (0, l.m7)(u.n.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        icon: i.S6n,
        useTitle: () => g.intl.string(g.t.B1fFpf),
        usePredicate: () => r.Z.isSupported(),
        legacySearchKey: S.s6.VOICE_AND_VIDEO,
        buildLayout: () => [b],
    });
