n.d(t, { Z: () => p }), n(388685);
var r = n(951288),
    a = n(647438),
    i = n(442837),
    o = n(384275),
    l = n(317381),
    s = n(513202),
    c = n(367907),
    d = n(138201),
    u = n(881998),
    _ = n(981631),
    m = n(388032);
let p = (e) => {
    let { application: t, reportId: n } = e,
        [p, g] = a.useState(!1),
        f = (0, i.e7)([u.Z], () => u.Z.getNewestTokenForApplication(t.id));
    a.useEffect(() => {
        null != f && g(!0);
    }, [f]);
    let b = a.useRef(!1);
    a.useEffect(() => {
        b.current || (o.Z.fetch(), (b.current = !0));
    }, []);
    let h = (0, i.e7)([l.ZP], () => l.ZP.getSelfEmbeddedActivities()),
        x = a.useCallback(() => {
            if (
                (g(!1),
                c.ZP.trackWithMetadata(_.rMx.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: n,
                }),
                null == f)
            )
                return;
            o.Z.delete(f.id);
            let e = h.get(t.id);
            null != e &&
                s.Z.leaveActivity({
                    location: e.location,
                    applicationId: t.id,
                    showFeedback: !1,
                });
        }, [t.id, f, h, n]);
    return null == t
        ? null
        : (0, r.jsx)(d.JZ, {
              title: m.intl.string(m.t.ygG62N),
              description: m.intl.string(m.t.S51EKi),
              buttonText: p ? m.intl.string(m.t.xXpoGR) : m.intl.string(m.t.JsiUnJ),
              buttonDisabled: !p,
              onButtonPress: x,
              buttonVariant: p ? "critical-primary" : "secondary",
          });
};
