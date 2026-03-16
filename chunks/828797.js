n.d(t, { o: () => E });
var i = n(311907),
    s = n(419954),
    l = n(933297),
    a = n(287809),
    r = n(780964),
    o = n(358776),
    d = n(199499),
    c = n(548018),
    u = n(953410),
    _ = n(102277),
    m = n(354093),
    g = n(909081),
    A = n(25894),
    h = n(237948),
    x = n(32096),
    p = n(545214),
    T = n(985018);
let E = (0, s.zZ)(r.X.ACCOUNT_AUTHENTICATION_CATEGORY, {
    useTitle: () => T.intl.string(T.t.pKSjEj),
    useInlineNotice: function () {
        return (0, i.bG)([a.default], () => a.default.getCurrentUser()?.mfaEnabled ?? !1)
            ? { type: l.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: d.A }
            : null;
    },
    buildLayout: () => [
        m.L,
        x.A,
        p.k,
        _.v,
        c.c,
        u.g,
        g.T,
        A.C,
        ...((0, o.pC)("AccountAuthenticationCategory") ? [h.w] : []),
    ],
});
