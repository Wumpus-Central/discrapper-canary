n.d(t, { Z: () => g }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(442837),
    a = n(384275),
    s = n(317381),
    o = n(513202),
    d = n(367907),
    c = n(138201),
    u = n(881998),
    m = n(981631),
    p = n(388032);
let g = (e) => {
    let { application: t, reportId: n } = e,
        [g, _] = l.useState(!1),
        x = (0, i.e7)([u.default], () => u.default.getNewestTokenForApplication(t.id));
    l.useEffect(() => {
        null != x && _(!0);
    }, [x]);
    let h = l.useRef(!1);
    l.useEffect(() => {
        h.current || (a.Z.fetch(), (h.current = !0));
    }, []);
    let b = (0, i.e7)([s.ZP], () => s.ZP.getSelfEmbeddedActivities()),
        f = l.useCallback(() => {
            if (
                (_(!1),
                d.ZP.trackWithMetadata(m.rMx.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: n,
                }),
                null == x)
            )
                return;
            a.Z.delete(x.id);
            let e = b.get(t.id);
            null != e &&
                o.Z.leaveActivity({
                    location: e.location,
                    applicationId: t.id,
                    showFeedback: !1,
                });
        }, [t.id, x, b, n]);
    return null == t
        ? null
        : (0, r.jsx)(c.JZ, {
              title: p.intl.string(p.t.ygG62M),
              description: p.intl.string(p.t.S51EKg),
              buttonText: g ? p.intl.string(p.t.xXpoGV) : p.intl.string(p.t.JsiUnL),
              buttonDisabled: !g,
              onButtonPress: f,
              buttonVariant: g ? "critical-primary" : "secondary",
          });
};
