i.d(e, { o: () => c });
var n = i(311907),
    l = i(419954),
    s = i(933297),
    r = i(287809),
    u = i(780964),
    a = i(36535),
    o = i(548018),
    T = i(953410),
    A = i(102277),
    S = i(354093),
    E = i(909081),
    d = i(25894),
    _ = i(32096),
    I = i(545214),
    g = i(985018);
let c = (0, l.zZ)(u.X.ACCOUNT_AUTHENTICATION_CATEGORY, {
    useTitle: () => g.intl.string(g.t.pKSjEj),
    useNotice: function () {
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
    buildLayout: () => [S.L, _.A, I.k, A.v, o.c, T.g, E.T, d.C],
});
