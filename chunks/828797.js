i.d(e, { o: () => I });
var n = i(311907),
    l = i(419954),
    s = i(933297),
    r = i(287809),
    a = i(780964),
    u = i(36535),
    o = i(548018),
    d = i(953410),
    T = i(102277),
    A = i(354093),
    S = i(909081),
    E = i(25894),
    g = i(32096),
    _ = i(545214),
    c = i(985018);
let I = (0, l.zZ)(a.X.ACCOUNT_AUTHENTICATION_CATEGORY, {
    useTitle: () => c.intl.string(c.t.pKSjEj),
    useInlineNotice: function () {
        return (0, n.bG)([r.default], () => r.default.getCurrentUser()?.mfaEnabled ?? !1)
            ? { type: s.W.STRONGLY_DISCOURAGED_CUSTOM, notice: u.A }
            : null;
    },
    buildLayout: () => [A.L, g.A, _.k, T.v, o.c, d.g, S.T, E.C],
});
