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
    _ = n(981631),
    m = n(388032);
let p = (e) => {
    let { application: t, reportId: n } = e,
        [p, g] = i.useState(!1),
        f = (0, l.e7)([u.Z], () => u.Z.getNewestTokenForApplication(t.id));
    i.useEffect(() => {
        null != f && g(!0);
    }, [f]);
    let h = i.useRef(!1);
    i.useEffect(() => {
        h.current || (a.Z.fetch(), (h.current = !0));
    }, []);
    let b = (0, l.e7)([o.ZP], () => o.ZP.getSelfEmbeddedActivities()),
        x = i.useCallback(() => {
            if (
                (g(!1),
                c.ZP.trackWithMetadata(_.rMx.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: n,
                }),
                null == f)
            )
                return;
            a.Z.delete(f.id);
            let e = b.get(t.id);
            null != e &&
                s.Z.leaveActivity({
                    location: e.location,
                    applicationId: t.id,
                    showFeedback: !1,
                });
        }, [t.id, f, b, n]);
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
