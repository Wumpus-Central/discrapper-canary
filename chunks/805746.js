n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(442837),
    a = n(384275),
    s = n(317381),
    o = n(513202),
    c = n(367907),
    d = n(138201),
    u = n(881998),
    m = n(981631),
    b = n(388032);
let p = (e) => {
    let { application: t, reportId: n } = e,
        [p, g] = l.useState(!1),
        f = (0, i.e7)([u.default], () => u.default.getNewestTokenForApplication(t.id));
    l.useEffect(() => {
        null != f && g(!0);
    }, [f]);
    let x = l.useRef(!1);
    l.useEffect(() => {
        x.current || (a.Z.fetch(), (x.current = !0));
    }, []);
    let h = (0, i.e7)([s.ZP], () => s.ZP.getSelfEmbeddedActivities()),
        v = l.useCallback(() => {
            if (
                (g(!1),
                c.ZP.trackWithMetadata(m.rMx.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: n,
                }),
                null == f)
            )
                return;
            a.Z.delete(f.id);
            let e = h.get(t.id);
            null != e &&
                o.Z.leaveActivity({
                    location: e.location,
                    applicationId: t.id,
                    showFeedback: !1,
                });
        }, [t.id, f, h, n]);
    return null == t
        ? null
        : (0, r.jsx)(d.JZ, {
              title: b.intl.string(b.t.ygG62M),
              description: b.intl.string(b.t.S51EKg),
              buttonText: p ? b.intl.string(b.t.xXpoGV) : b.intl.string(b.t.JsiUnL),
              buttonDisabled: !p,
              onButtonPress: v,
              buttonVariant: p ? "critical-primary" : "secondary",
          });
};
