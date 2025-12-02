n.d(e, { K: () => f });
var i = n(657707),
    l = n(509613),
    s = n(131951),
    r = n(313789),
    u = n(526665),
    a = n(604224),
    o = n(901567),
    c = n(279362),
    d = n(556080),
    E = n(90794),
    S = n(756893),
    I = n(927947),
    T = n(776570),
    g = n(726985),
    _ = n(388032);
let O = (0, l.x1)(r.n.VOICE_AND_VIDEO_PANE, {
        buildLayout: () => [],
        render: a.Z,
        usePredicate: () => !(0, u.BK)("LegacyVoiceAndVideoPane"),
    }),
    N = (0, l.x1)(r.n.VOICE_AND_VIDEO_PANE, {
        buildLayout: () => [T.Z, d.Z, o.Z, I.Z, S.Z, E.Z, c.Z],
        usePredicate: () => (0, u.BK)("VoiceAndVideoPane"),
    }),
    A = (0, l.wf)(r.n.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => _.intl.string(_.t.B1fFpf),
        buildLayout: () => ((0, u.Ml)("VoiceAndVideoPanel") ? [N] : [O]),
    }),
    f = (0, l.m7)(r.n.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        icon: i.S6n,
        useTitle: () => _.intl.string(_.t.B1fFpf),
        usePredicate: () => s.Z.isSupported(),
        getLegacySearchKey: () => ((0, u.Ml)("VoiceAndVideoPanel") ? void 0 : g.s6.VOICE_AND_VIDEO),
        buildLayout: () => [A],
    });
