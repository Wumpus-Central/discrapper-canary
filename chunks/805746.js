n.d(t, { Z: () => v }), n(47120);
var l = n(200651),
    i = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(384275),
    o = n(317381),
    d = n(513202),
    c = n(367907),
    u = n(138201),
    m = n(881998),
    x = n(585483),
    _ = n(981631),
    h = n(388032);
let v = (e) => {
    let { application: t, reportId: n } = e,
        [v, g] = i.useState(!1),
        p = (0, r.e7)([m.Z], () => {
            let e = m.Z.getApps();
            return null != e ? e.find((e) => e.application.id === t.id) : null;
        });
    i.useEffect(() => {
        null != p && g(!0);
    }, [p]);
    let f = i.useRef(!1);
    i.useEffect(() => {
        f.current || (s.Z.fetch(), (f.current = !0));
    }, []);
    let b = (0, r.e7)([o.ZP], () => o.ZP.getSelfEmbeddedActivities()),
        Z = i.useCallback(() => {
            if (
                (g(!1),
                c.ZP.trackWithMetadata(_.rMx.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: n
                }),
                null == p)
            )
                return;
            s.Z.delete(p.id), x.S.safeDispatch(_.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { applicationId: t.id });
            let e = b.get(t.id);
            null != e &&
                d.Z.leaveActivity({
                    location: e.location,
                    applicationId: t.id,
                    showFeedback: !1
                });
        }, [t.id, p, b, n]);
    return null == t
        ? null
        : (0, l.jsx)(u.ZP, {
              title: h.intl.string(h.t.ygG62N),
              description: h.intl.string(h.t.S51EKi),
              buttonText: v ? h.intl.string(h.t.xXpoGR) : h.intl.string(h.t.JsiUnJ),
              buttonDisabled: !v,
              buttonColor: v ? a.zxk.Colors.RED : a.zxk.Colors.WHITE,
              buttonLook: v ? a.zxk.Looks.FILLED : a.zxk.Looks.LINK,
              onButtonPress: Z
          });
};
