n.d(e, { v: () => N });
var i = n(442837),
    l = n(509613),
    s = n(970013),
    u = n(594174),
    r = n(313789),
    a = n(562436),
    o = n(857314),
    T = n(716856),
    S = n(442639),
    c = n(341968),
    E = n(743725),
    d = n(374509),
    g = n(968021),
    _ = n(921356),
    I = n(388032);
let N = (0, l.k4)(r.n.ACCOUNT_AUTHENTICATION_CATEGORY, {
    useTitle: () => I.intl.string(I.t.pKSjEj),
    useNotice: function () {
        return (0, i.e7)([u.default], () => {
            var t, e;
            return null != (e = null == (t = u.default.getCurrentUser()) ? void 0 : t.mfaEnabled) && e;
        })
            ? {
                  type: s.v.STRONGLY_DISCOURAGED_CUSTOM,
                  notice: a.Z,
              }
            : null;
    },
    buildLayout: () => [c.W, g.M, _.a, S.g, o.D, T.o, E.c, d.g],
});
