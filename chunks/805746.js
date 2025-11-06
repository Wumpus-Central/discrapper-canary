n.d(t, { Z: () => g }), n(388685);
var r = n(951288),
    i = n(647438),
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
        h = (0, l.e7)([u.default], () => u.default.getNewestTokenForApplication(t.id));
    i.useEffect(() => {
        null != h && _(!0);
    }, [h]);
    let b = i.useRef(!1);
    i.useEffect(() => {
        b.current || (a.Z.fetch(), (b.current = !0));
    }, []);
    let x = (0, l.e7)([s.ZP], () => s.ZP.getSelfEmbeddedActivities()),
        f = i.useCallback(() => {
            if (
                (_(!1),
                c.ZP.trackWithMetadata(m.rMx.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: n,
                }),
                null == h)
            )
                return;
            a.Z.delete(h.id);
            let e = x.get(t.id);
            null != e &&
                o.Z.leaveActivity({
                    location: e.location,
                    applicationId: t.id,
                    showFeedback: !1,
                });
        }, [t.id, h, x, n]);
    return null == t
        ? null
        : (0, r.jsx)(d.JZ, {
              title: p.intl.string(p.t.ygG62M),
              description: p.intl.string(p.t.S51EKg),
              buttonText: g ? p.intl.string(p.t.xXpoGV) : p.intl.string(p.t.JsiUnL),
              buttonDisabled: !g,
              onButtonPress: f,
              buttonVariant: g ? "critical-primary" : "secondary",
          });
};
