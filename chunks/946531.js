n.d(t, { _: () => m });
var i = n(627968),
    s = n(64700),
    l = n(123292),
    a = n(311907),
    r = n(700062),
    o = n(419954),
    d = n(287809),
    u = n(780964),
    c = n(652215),
    g = n(985018);
let m = (0, o.Tf)(u.X.SMS_AUTH_DISABLE_BUTTON, {
    useTitle: () => g.intl.string(g.t.lQsY7B),
    useSubtitle: function () {
        let [e, t] = s.useState(!1),
            n = (0, a.bG)([d.default], () => d.default.getCurrentUser()?.phone);
        return null == n
            ? null
            : g.intl.format(e ? g.t["xDBk/I"] : g.t.bnKdnl, {
                  phone: e ? n : n.slice(-4),
                  toggleButton: () =>
                      (0, i.jsx)(l.Q, {
                          text: e ? g.intl.string(g.t.fgq1gs) : g.intl.string(g.t.dcztdU),
                          onClick: () => t(!e),
                      }),
              });
    },
    useLabel: () => g.intl.string(g.t.N86XcP),
    useVariant: () => "critical-secondary",
    usePredicate: () => (0, a.bG)([d.default], () => d.default.getCurrentUser()?.hasFlag(c.nhx.MFA_SMS) ?? !1),
    onClick: () => (0, r.Zm)(),
});
