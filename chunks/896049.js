n.d(e, { K: () => N });
var i = n(924628),
    l = n(915009),
    s = n(509613),
    u = n(970013),
    r = n(480294),
    a = n(313789),
    o = n(116233),
    T = n(717773),
    S = n(196863),
    c = n(947199),
    E = n(950820),
    d = n(625944),
    _ = n(380640),
    g = n(613852),
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
    buildLayout: () => [g.Q, _.M, d.W, E.T, T.P, S.I, c.Z],
});
