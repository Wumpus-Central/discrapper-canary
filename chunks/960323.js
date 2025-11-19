n.d(e, { K: () => C });
var i = n(657707),
    l = n(509613),
    u = n(131951),
    r = n(313789),
    s = n(526665),
    a = n(604224),
    o = n(901567),
    c = n(98022),
    E = n(279362),
    S = n(264413),
    T = n(556080),
    d = n(90794),
    I = n(756893),
    O = n(927947),
    g = n(776570),
    _ = n(726985),
    N = n(388032);
let A = (0, l.x1)(r.n.VOICE_AND_VIDEO_PANE, {
        buildLayout: () => [],
        render: a.Z,
        usePredicate: () => !(0, s.BK)("LegacyVoiceAndVideoPane"),
    }),
    f = (0, l.x1)(r.n.VOICE_AND_VIDEO_PANE, {
        buildLayout: () => [g.Z, T.Z, S.Z, o.Z, O.Z, I.Z, d.Z, c.Z, E.Z],
        usePredicate: () => (0, s.BK)("VoiceAndVideoPane"),
    }),
    Z = (0, l.wf)(r.n.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => N.intl.string(N.t.B1fFpf),
        buildLayout: () => ((0, s.Ml)("VoiceAndVideoPanel") ? [f] : [A]),
    }),
    C = (0, l.m7)(r.n.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        icon: i.S6n,
        useTitle: () => N.intl.string(N.t.B1fFpf),
        usePredicate: () => u.Z.isSupported(),
        getLegacySearchKey: () => ((0, s.Ml)("VoiceAndVideoPanel") ? void 0 : _.s6.VOICE_AND_VIDEO),
        buildLayout: () => [Z],
    });
