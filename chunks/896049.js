n.d(e, { K: () => N });
var i = n(924628),
    l = n(915009),
    s = n(509613),
    u = n(970013),
    r = n(480294),
    a = n(313789),
    o = n(116233),
    S = n(717773),
    T = n(196863),
    c = n(947199),
    E = n(950820),
    d = n(625944),
    g = n(380640),
    _ = n(613852),
    I = n(388032);
let N = (0, s.k4)(a.n.DATA_USAGE_CATEGORY, {
    useTitle: () => I.intl.string(I.t.SRZyHg),
    useNotice: () =>
        (0, l.LN)()
            ? {
                  type: u.v.STRONGLY_DISCOURAGED_CUSTOM,
                  notice: o.Z,
              }
            : null,
    initialize: () => {
        r.Z.fetchedConsents || (0, i.I)();
    },
    buildLayout: () => [_.Q, g.M, d.W, E.T, S.P, T.I, c.Z],
});
