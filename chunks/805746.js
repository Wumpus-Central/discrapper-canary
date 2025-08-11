n.d(t, { Z: () => g }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(384275),
    s = n(317381),
    o = n(513202),
    c = n(367907),
    d = n(138201),
    u = n(881998),
    m = n(981631),
    p = n(388032);
let g = (e) => {
    let { application: t, reportId: n } = e,
        [g, _] = i.useState(!1),
        b = (0, l.e7)([u.Z], () => u.Z.getNewestTokenForApplication(t.id));
    i.useEffect(() => {
        null != b && _(!0);
    }, [b]);
    let h = i.useRef(!1);
    i.useEffect(() => {
        h.current || (a.Z.fetch(), (h.current = !0));
    }, []);
    let x = (0, l.e7)([s.ZP], () => s.ZP.getSelfEmbeddedActivities()),
        f = i.useCallback(() => {
            if (
                (_(!1),
                c.ZP.trackWithMetadata(m.rMx.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: n,
                }),
                null == b)
            )
                return;
            a.Z.delete(b.id);
            let e = x.get(t.id);
            null != e &&
                o.Z.leaveActivity({
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
              buttonText: g ? p.intl.string(p.t.xXpoGR) : p.intl.string(p.t.JsiUnJ),
              buttonDisabled: !g,
              onButtonPress: f,
              buttonVariant: g ? "critical-primary" : "secondary",
          });
};
