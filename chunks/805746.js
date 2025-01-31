n.d(t, { Z: () => m }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(384275),
    l = n(317381),
    u = n(513202),
    c = n(367907),
    d = n(138201),
    f = n(881998),
    _ = n(585483),
    p = n(981631),
    h = n(388032);
let m = (e) => {
    let { application: t, reportId: n } = e,
        [m, g] = r.useState(!1),
        E = (0, a.e7)([f.Z], () => {
            let e = f.Z.getApps();
            return null != e ? e.find((e) => e.application.id === t.id) : null;
        });
    r.useEffect(() => {
        null != E && g(!0);
    }, [E]);
    let v = r.useRef(!1);
    r.useEffect(() => {
        v.current || (o.Z.fetch(), (v.current = !0));
    }, []);
    let y = (0, a.e7)([l.ZP], () => l.ZP.getSelfEmbeddedActivities()),
        I = r.useCallback(() => {
            if (
                (g(!1),
                c.ZP.trackWithMetadata(p.rMx.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: n
                }),
                null == E)
            )
                return;
            o.Z.delete(E.id), _.S.safeDispatch(p.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { applicationId: t.id });
            let e = y.get(t.id);
            null != e &&
                u.Z.leaveActivity({
                    location: e.location,
                    applicationId: t.id,
                    showFeedback: !1
                });
        }, [t.id, E, y, n]);
    return null == t
        ? null
        : (0, i.jsx)(d.ZP, {
              title: h.intl.string(h.t.ygG62N),
              description: h.intl.string(h.t.S51EKi),
              buttonText: m ? h.intl.string(h.t.xXpoGR) : h.intl.string(h.t.JsiUnJ),
              buttonDisabled: !m,
              buttonColor: m ? s.zxk.Colors.RED : s.zxk.Colors.WHITE,
              buttonLook: m ? s.zxk.Looks.FILLED : s.zxk.Looks.LINK,
              onButtonPress: I
          });
};
