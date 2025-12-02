n.d(e, { K: () => b });
var i = n(657707),
    r = n(509613),
    l = n(131951),
    s = n(313789),
    u = n(526665),
    a = n(604224),
    o = n(901567),
    c = n(279362),
    d = n(264413),
    E = n(556080),
    S = n(90794),
    T = n(756893),
    I = n(927947),
    g = n(776570),
    O = n(726985),
    _ = n(388032);
let N = (0, r.x1)(s.n.VOICE_AND_VIDEO_PANE, {
        buildLayout: () => [],
        render: a.Z,
        usePredicate: () => !(0, u.BK)("LegacyVoiceAndVideoPane"),
    }),
    f = (0, r.x1)(s.n.VOICE_AND_VIDEO_PANE, {
        buildLayout: () => [g.Z, E.Z, d.Z, o.Z, I.Z, T.Z, S.Z, c.Z],
        usePredicate: () => (0, u.BK)("VoiceAndVideoPane"),
    }),
    A = (0, r.wf)(s.n.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => _.intl.string(_.t.B1fFpf),
        buildLayout: () => ((0, u.Ml)("VoiceAndVideoPanel") ? [f] : [N]),
    }),
    b = (0, r.m7)(s.n.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        icon: i.S6n,
        useTitle: () => _.intl.string(_.t.B1fFpf),
        usePredicate: () => l.Z.isSupported(),
        getLegacySearchKey: () => ((0, u.Ml)("VoiceAndVideoPanel") ? void 0 : O.s6.VOICE_AND_VIDEO),
        buildLayout: () => [A],
    });
