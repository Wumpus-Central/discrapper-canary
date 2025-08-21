n.d(t, { Z: () => p }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(384275),
    o = n(317381),
    s = n(513202),
    c = n(367907),
    d = n(138201),
    u = n(881998),
    m = n(981631),
    _ = n(388032);
let p = (e) => {
    let { application: t, reportId: n } = e,
        [p, x] = i.useState(!1),
        g = (0, l.e7)([u.Z], () => u.Z.getNewestTokenForApplication(t.id));
    i.useEffect(() => {
        null != g && x(!0);
    }, [g]);
    let f = i.useRef(!1);
    i.useEffect(() => {
        f.current || (a.Z.fetch(), (f.current = !0));
    }, []);
    let b = (0, l.e7)([o.ZP], () => o.ZP.getSelfEmbeddedActivities()),
        h = i.useCallback(() => {
            if (
                (x(!1),
                c.ZP.trackWithMetadata(m.rMx.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: n,
                }),
                null == g)
            )
                return;
            a.Z.delete(g.id);
            let e = b.get(t.id);
            null != e &&
                s.Z.leaveActivity({
                    location: e.location,
                    applicationId: t.id,
                    showFeedback: !1,
                });
        }, [t.id, g, b, n]);
    return null == t
        ? null
        : (0, r.jsx)(d.JZ, {
              title: _.intl.string(_.t.ygG62N),
              description: _.intl.string(_.t.S51EKi),
              buttonText: p ? _.intl.string(_.t.xXpoGR) : _.intl.string(_.t.JsiUnJ),
              buttonDisabled: !p,
              onButtonPress: h,
              buttonVariant: p ? "critical-primary" : "secondary",
          });
};
