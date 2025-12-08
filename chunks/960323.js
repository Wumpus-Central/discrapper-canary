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
    T = n(90794),
    E = n(756893),
    S = n(927947),
    I = n(776570),
    g = n(726985),
    _ = n(388032);
let O = (0, l.x1)(r.n.VOICE_AND_VIDEO_PANE, {
        usePredicate: () => !(0, u.BK)("LegacyVoiceAndVideoPane"),
        render: a.Z,
        buildLayout: () => [],
    }),
    N = (0, l.x1)(r.n.VOICE_AND_VIDEO_PANE, {
        usePredicate: () => (0, u.BK)("VoiceAndVideoPane"),
        buildLayout: () => [I.Z, d.W, o.V, S.d, E.g, T.d, c.g],
    }),
    A = (0, l.wf)(r.n.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => _.intl.string(_.t.B1fFpf),
        buildLayout: () => ((0, u.Ml)("VoiceAndVideoPanel") ? [N] : [O]),
    }),
    f = (0, l.m7)(r.n.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t.B1fFpf),
        getLegacySearchKey: () => ((0, u.Ml)("VoiceAndVideoPanel") ? void 0 : g.s6.VOICE_AND_VIDEO),
        icon: i.S6n,
        usePredicate: () => s.Z.isSupported(),
        buildLayout: () => [A],
    });
