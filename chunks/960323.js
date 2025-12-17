n.d(e, { K: () => O });
var i = n(657707),
    l = n(509613),
    s = n(131951),
    u = n(313789),
    r = n(526665),
    a = n(604224),
    o = n(901567),
    S = n(279362),
    T = n(556080),
    c = n(90794),
    E = n(756893),
    d = n(927947),
    g = n(776570),
    _ = n(726985),
    I = n(388032);
let N = (0, l.wf)(u.n.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => I.intl.string(I.t.B1fFpf),
        StronglyDiscouragedCustomComponent: a.Z,
        buildLayout: () => [],
    }),
    A = (0, l.wf)(u.n.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => I.intl.string(I.t.B1fFpf),
        buildLayout: () => [g.Z, T.W, o.V, d.d, E.g, c.d, S.g],
    }),
    O = (0, l.m7)(u.n.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => I.intl.string(I.t.B1fFpf),
        usePredicate: () => s.Z.isSupported(),
        icon: i.S6n,
        getLegacySearchKey: () => ((0, r.Ml)("VoiceAndVideoPanel") ? void 0 : _.s6.VOICE_AND_VIDEO),
        buildLayout: () => [(0, r.Ml)("VoiceAndVideoPanel") ? A : N],
    });
