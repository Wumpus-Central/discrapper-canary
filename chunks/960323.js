n.d(e, { K: () => C });
var i = n(657707),
    l = n(509613),
    s = n(131951),
    u = n(313789),
    r = n(526665),
    a = n(604224),
    o = n(901567),
    c = n(279362),
    d = n(556080),
    S = n(90794),
    T = n(756893),
    E = n(927947),
    g = n(776570),
    I = n(726985),
    _ = n(388032);
let O = (0, l.x1)(u.n.VOICE_AND_VIDEO_PANE, {
        usePredicate: () => !(0, r.BK)("LegacyVoiceAndVideoPane"),
        StronglyDiscouragedCustomComponent: a.Z,
        buildLayout: () => [],
    }),
    N = (0, l.x1)(u.n.VOICE_AND_VIDEO_PANE, {
        usePredicate: () => (0, r.BK)("VoiceAndVideoPane"),
        buildLayout: () => [g.Z, d.W, o.V, E.d, T.g, S.d, c.g],
    }),
    A = (0, l.wf)(u.n.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => _.intl.string(_.t.B1fFpf),
        buildLayout: () => ((0, r.Ml)("VoiceAndVideoPanel") ? [N] : [O]),
    }),
    C = (0, l.m7)(u.n.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t.B1fFpf),
        getLegacySearchKey: () => ((0, r.Ml)("VoiceAndVideoPanel") ? void 0 : I.s6.VOICE_AND_VIDEO),
        icon: i.S6n,
        usePredicate: () => s.Z.isSupported(),
        buildLayout: () => [A],
    });
