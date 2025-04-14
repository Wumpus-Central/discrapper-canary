n.d(t, { Z: () => f }), n(388685);
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
    x = n(585483),
    p = n(981631),
    b = n(388032);
let f = (e) => {
    let { application: t, reportId: n } = e,
        [f, h] = l.useState(!1),
        _ = (0, i.e7)([m.Z], () => {
            let e = m.Z.getApps();
            return null != e ? e.find((e) => e.application.id === t.id) : null;
        });
    l.useEffect(() => {
        null != _ && h(!0);
    }, [_]);
    let g = l.useRef(!1);
    l.useEffect(() => {
        g.current || (o.Z.fetch(), (g.current = !0));
    }, []);
    let v = (0, i.e7)([s.ZP], () => s.ZP.getSelfEmbeddedActivities()),
        j = l.useCallback(() => {
            if (
                (h(!1),
                d.ZP.trackWithMetadata(p.rMx.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: n
                }),
                null == _)
            )
                return;
            o.Z.delete(_.id), x.S.safeDispatch(p.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { applicationId: t.id });
            let e = v.get(t.id);
            null != e &&
                c.Z.leaveActivity({
                    location: e.location,
                    applicationId: t.id,
                    showFeedback: !1
                });
        }, [t.id, _, v, n]);
    return null == t
        ? null
        : (0, r.jsx)(u.ZP, {
              title: b.NW.string(b.t.ygG62N),
              description: b.NW.string(b.t.S51EKi),
              buttonText: f ? b.NW.string(b.t.xXpoGR) : b.NW.string(b.t.JsiUnJ),
              buttonDisabled: !f,
              buttonColor: f ? a.zxk.Colors.RED : a.zxk.Colors.WHITE,
              buttonLook: f ? a.zxk.Looks.FILLED : a.zxk.Looks.LINK,
              onButtonPress: j
          });
};
