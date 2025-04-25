n.d(t, { Z: () => _ }), n(388685);
var r = n(200651),
    l = n(192379),
    i = n(442837),
    a = n(481060),
    o = n(384275),
    s = n(317381),
    c = n(513202),
    d = n(367907),
    u = n(138201),
    m = n(881998),
    p = n(585483),
    x = n(981631),
    b = n(388032);
let _ = (e) => {
    let { application: t, reportId: n } = e,
        [_, h] = l.useState(!1),
        f = (0, i.e7)([m.Z], () => {
            let e = m.Z.getApps();
            return null != e ? e.find((e) => e.application.id === t.id) : null;
        });
    l.useEffect(() => {
        null != f && h(!0);
    }, [f]);
    let g = l.useRef(!1);
    l.useEffect(() => {
        g.current || (o.Z.fetch(), (g.current = !0));
    }, []);
    let v = (0, i.e7)([s.ZP], () => s.ZP.getSelfEmbeddedActivities()),
        j = l.useCallback(() => {
            if (
                (h(!1),
                d.ZP.trackWithMetadata(x.rMx.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: n
                }),
                null == f)
            )
                return;
            o.Z.delete(f.id), p.S.safeDispatch(x.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { applicationId: t.id });
            let e = v.get(t.id);
            null != e &&
                c.Z.leaveActivity({
                    location: e.location,
                    applicationId: t.id,
                    showFeedback: !1
                });
        }, [t.id, f, v, n]);
    return null == t
        ? null
        : (0, r.jsx)(u.ZP, {
              title: b.intl.string(b.t.ygG62N),
              description: b.intl.string(b.t.S51EKi),
              buttonText: _ ? b.intl.string(b.t.xXpoGR) : b.intl.string(b.t.JsiUnJ),
              buttonDisabled: !_,
              buttonColor: _ ? a.zxk.Colors.RED : a.zxk.Colors.WHITE,
              buttonLook: _ ? a.zxk.Looks.FILLED : a.zxk.Looks.LINK,
              onButtonPress: j
          });
};
