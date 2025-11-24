n.d(e, { K: () => C });
var i = n(657707),
    r = n(509613),
    l = n(131951),
    u = n(313789),
    s = n(526665),
    a = n(604224),
    o = n(901567),
    c = n(279362),
    E = n(264413),
    d = n(556080),
    S = n(90794),
    T = n(756893),
    I = n(927947),
    O = n(776570),
    g = n(726985),
    _ = n(388032);
let N = (0, r.x1)(u.n.VOICE_AND_VIDEO_PANE, {
        buildLayout: () => [],
        render: a.Z,
        usePredicate: () => !(0, s.BK)("LegacyVoiceAndVideoPane"),
    }),
    f = (0, r.x1)(u.n.VOICE_AND_VIDEO_PANE, {
        buildLayout: () => [O.Z, d.Z, E.Z, o.Z, I.Z, T.Z, S.Z, c.Z],
        usePredicate: () => (0, s.BK)("VoiceAndVideoPane"),
    }),
    A = (0, r.wf)(u.n.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => _.intl.string(_.t.B1fFpf),
        buildLayout: () => ((0, s.Ml)("VoiceAndVideoPanel") ? [f] : [N]),
    }),
    C = (0, r.m7)(u.n.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        icon: i.S6n,
        useTitle: () => _.intl.string(_.t.B1fFpf),
        usePredicate: () => l.Z.isSupported(),
        getLegacySearchKey: () => ((0, s.Ml)("VoiceAndVideoPanel") ? void 0 : g.s6.VOICE_AND_VIDEO),
        buildLayout: () => [A],
    });
