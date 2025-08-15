n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    a = n(647438),
    i = n(442837),
    l = n(384275),
    o = n(317381),
    s = n(513202),
    c = n(367907),
    d = n(138201),
    u = n(881998),
    m = n(981631),
    p = n(388032);
let _ = (e) => {
    let { application: t, reportId: n } = e,
        [_, g] = a.useState(!1),
        b = (0, i.e7)([u.Z], () => u.Z.getNewestTokenForApplication(t.id));
    a.useEffect(() => {
        null != b && g(!0);
    }, [b]);
    let h = a.useRef(!1);
    a.useEffect(() => {
        h.current || (l.Z.fetch(), (h.current = !0));
    }, []);
    let x = (0, i.e7)([o.ZP], () => o.ZP.getSelfEmbeddedActivities()),
        f = a.useCallback(() => {
            if (
                (g(!1),
                c.ZP.trackWithMetadata(m.rMx.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: n,
                }),
                null == b)
            )
                return;
            l.Z.delete(b.id);
            let e = x.get(t.id);
            null != e &&
                s.Z.leaveActivity({
                    location: e.location,
                    applicationId: t.id,
                    showFeedback: !1,
                });
        }, [t.id, b, x, n]);
    return null == t
        ? null
        : (0, r.jsx)(d.JZ, {
              title: p.intl.string(p.t.ygG62N),
              description: p.intl.string(p.t.S51EKi),
              buttonText: _ ? p.intl.string(p.t.xXpoGR) : p.intl.string(p.t.JsiUnJ),
              buttonDisabled: !_,
              onButtonPress: f,
              buttonVariant: _ ? "critical-primary" : "secondary",
          });
};
