n.d(e, { K: () => L });
var i = n(657707),
    l = n(509613),
    r = n(131951),
    u = n(313789),
    s = n(526665),
    a = n(604224),
    o = n(901567),
    c = n(98022),
    E = n(279362),
    d = n(264413),
    S = n(556080),
    T = n(90794),
    O = n(756893),
    g = n(927947),
    I = n(776570),
    _ = n(726985),
    A = n(388032);
let N = (0, l.x1)(u.n.VOICE_AND_VIDEO_PANE, {
        buildLayout: () => [],
        render: a.Z,
        usePredicate: () => !(0, s.BK)("LegacyVoiceAndVideoPane"),
    }),
    f = (0, l.x1)(u.n.VOICE_AND_VIDEO_PANE, {
        buildLayout: () => [I.Z, S.Z, d.Z, o.Z, g.Z, O.Z, T.Z, c.Z, E.Z],
        usePredicate: () => (0, s.BK)("VoiceAndVideoPane"),
    }),
    b = (0, l.wf)(u.n.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => A.intl.string(A.t.B1fFpf),
        buildLayout: () => ((0, s.Ml)("VoiceAndVideoPanel") ? [f] : [N]),
    }),
    L = (0, l.m7)(u.n.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        icon: i.S6n,
        useTitle: () => A.intl.string(A.t.B1fFpf),
        usePredicate: () => r.Z.isSupported(),
        getLegacySearchKey: () => ((0, s.Ml)("VoiceAndVideoPanel") ? void 0 : _.s6.VOICE_AND_VIDEO),
        buildLayout: () => [b],
    });
