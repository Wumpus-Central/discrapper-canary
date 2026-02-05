i.d(e, { o: () => C });
var n = i(311907),
    l = i(419954),
    s = i(933297),
    r = i(287809),
    a = i(780964),
    u = i(358776),
    o = i(36535),
    d = i(548018),
    T = i(953410),
    A = i(102277),
    S = i(354093),
    E = i(909081),
    g = i(25894),
    _ = i(237948),
    c = i(32096),
    I = i(545214),
    N = i(985018);
let C = (0, l.zZ)(a.X.ACCOUNT_AUTHENTICATION_CATEGORY, {
    useTitle: () => N.intl.string(N.t.pKSjEj),
    useInlineNotice: function () {
        return (0, n.bG)([r.default], () => r.default.getCurrentUser()?.mfaEnabled ?? !1)
            ? { type: s.W.STRONGLY_DISCOURAGED_CUSTOM, notice: o.A }
            : null;
    },
    buildLayout: () => [
        S.L,
        c.A,
        I.k,
        A.v,
        d.c,
        T.g,
        E.T,
        g.C,
        ...((0, u.pC)("AccountAuthenticationCategory") ? [_.w] : []),
    ],
});
