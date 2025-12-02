n.d(e, { K: () => Z });
var i = n(657707),
    l = n(509613),
    s = n(131951),
    r = n(313789),
    u = n(526665),
    a = n(604224),
    o = n(901567),
    c = n(279362),
    d = n(264413),
    E = n(556080),
    S = n(90794),
    I = n(756893),
    T = n(927947),
    g = n(776570),
    _ = n(726985),
    O = n(388032);
let N = (0, l.x1)(r.n.VOICE_AND_VIDEO_PANE, {
        buildLayout: () => [],
        render: a.Z,
        usePredicate: () => !(0, u.BK)("LegacyVoiceAndVideoPane"),
    }),
    A = (0, l.x1)(r.n.VOICE_AND_VIDEO_PANE, {
        buildLayout: () => [g.Z, E.Z, d.Z, o.Z, T.Z, I.Z, S.Z, c.Z],
        usePredicate: () => (0, u.BK)("VoiceAndVideoPane"),
    }),
    f = (0, l.wf)(r.n.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => O.intl.string(O.t.B1fFpf),
        buildLayout: () => ((0, u.Ml)("VoiceAndVideoPanel") ? [A] : [N]),
    }),
    Z = (0, l.m7)(r.n.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        icon: i.S6n,
        useTitle: () => O.intl.string(O.t.B1fFpf),
        usePredicate: () => s.Z.isSupported(),
        getLegacySearchKey: () => ((0, u.Ml)("VoiceAndVideoPanel") ? void 0 : _.s6.VOICE_AND_VIDEO),
        buildLayout: () => [f],
    });
