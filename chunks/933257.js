n.d(t, { _: () => m, s: () => A });
var i = n(627968),
    s = n(311907),
    l = n(419954),
    a = n(287809),
    r = n(780964),
    o = n(770252),
    d = n(417628),
    u = n(935781),
    c = n(516664),
    g = n(985018);
let m = (0, l.zZ)(r.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [c.m, u.N] }),
    _ = (0, l.E2)(r.X.ACCOUNT_REMOVAL_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.ZKsIks), g.intl.string(g.t.jf5GGb), g.intl.string(g.t["8lQ2rR"])],
        Component: function () {
            let e = (0, s.bG)([a.default], () => a.default.getCurrentUser());
            return null == e
                ? null
                : (0, i.jsx)(o.A, {
                      currentUser: e,
                      handleDisableAccount: () => (0, d.c)(!1),
                      handleDeleteAccount: () => (0, d.c)(!0),
                  });
        },
    }),
    A = (0, l.zZ)(r.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [_] });
