i.d(e, { rC: () => g });
var n = i(627968),
    l = i(934551),
    s = i(734066),
    r = i(953336),
    u = i(314695),
    a = i(419954),
    o = i(780964),
    T = i(358776),
    A = i(467758),
    S = i(269420),
    E = i(531525),
    d = i(985018);
let _ = (0, a.t_)(o.X.CLIPS_PANEL, {
        useTitle: () => d.intl.string(d.t.z2jK6X),
        useBadge: () => (0, n.jsx)(r.A, {}),
        usePredicate: () => !(0, T.$m)("LegacyClipsPane"),
        StronglyDiscouragedCustomComponent: u.A,
        buildLayout: () => [],
    }),
    I = (0, a.t_)(o.X.CLIPS_PANEL, {
        useTitle: () => d.intl.string(d.t.z2jK6X),
        useBadge: () => (0, n.jsx)(r.A, {}),
        usePredicate: () => {
            let t = (0, T.$m)("ClipsPanel"),
                e = (0, s.sw)();
            return t && e;
        },
        buildLayout: () => [S.K, A.W],
    }),
    g = (0, a.i4)(o.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => d.intl.string(d.t.z2jK6X),
        icon: l.ClipsIcon,
        getLegacySearchKey: () => ((0, T.qz)("ClipsPanel") ? void 0 : E.H.CLIPS),
        buildLayout: () => ((0, T.qz)("ClipsPanel") ? [I] : [_]),
    });
