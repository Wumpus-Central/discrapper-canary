i.d(e, {
    o: () => I,
});
var n = i(311907),
    l = i(419954),
    s = i(933297),
    r = i(287809),
    u = i(780964),
    a = i(36535),
    o = i(548018),
    T = i(953410),
    A = i(102277),
    d = i(354093),
    S = i(909081),
    E = i(25894),
    _ = i(32096),
    g = i(545214),
    c = i(985018);
let I = (0, l.zZ)(u.X.ACCOUNT_AUTHENTICATION_CATEGORY, {
    useTitle: () => c.intl.string(c.t.pKSjEj),
    useInlineNotice: function () {
        return (0, n.bG)([r.default], () => {
            var t, e;
            return null != (t = null == (e = r.default.getCurrentUser()) ? void 0 : e.mfaEnabled) && t;
        })
            ? {
                  type: s.W.STRONGLY_DISCOURAGED_CUSTOM,
                  notice: a.A,
              }
            : null;
    },
    buildLayout: () => [d.L, _.A, g.k, A.v, o.c, T.g, S.T, E.C],
});
