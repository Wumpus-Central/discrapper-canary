n.d(e, { K: () => A });
var i = n(657707),
    l = n(509613),
    s = n(131951),
    r = n(313789),
    u = n(526665),
    a = n(604224),
    o = n(901567),
    c = n(279362),
    d = n(556080),
    g = n(90794),
    S = n(756893),
    T = n(927947),
    E = n(776570),
    I = n(726985),
    _ = n(388032);
let O = (0, l.wf)(r.n.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => _.intl.string(_.t.B1fFpf),
        StronglyDiscouragedCustomComponent: a.Z,
        buildLayout: () => [],
    }),
    N = (0, l.wf)(r.n.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => _.intl.string(_.t.B1fFpf),
        buildLayout: () => [E.Z, d.W, o.V, T.d, S.g, g.d, c.g],
    }),
    A = (0, l.m7)(r.n.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t.B1fFpf),
        usePredicate: () => s.Z.isSupported(),
        icon: i.S6n,
        getLegacySearchKey: () => ((0, u.Ml)("VoiceAndVideoPanel") ? void 0 : I.s6.VOICE_AND_VIDEO),
        buildLayout: () => [(0, u.Ml)("VoiceAndVideoPanel") ? N : O],
    });
