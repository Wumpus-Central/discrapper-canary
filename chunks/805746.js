var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(442837),
    l = r(481060),
    u = r(384275),
    c = r(317381),
    d = r(513202),
    f = r(367907),
    p = r(138201),
    h = r(881998),
    _ = r(585483),
    m = r(981631),
    g = r(388032);
let E = (e) => {
    let { application: n, reportId: r } = e,
        [i, E] = o.useState(!1),
        v = (0, s.e7)([h.Z], () => {
            let e = h.Z.getApps();
            return null != e ? e.find((e) => e.application.id === n.id) : null;
        });
    o.useEffect(() => {
        null != v && E(!0);
    }, [v]);
    let y = o.useRef(!1);
    o.useEffect(() => {
        !y.current && (u.Z.fetch(), (y.current = !0));
    }, []);
    let b = (0, s.e7)([c.ZP], () => c.ZP.getSelfEmbeddedActivities()),
        I = o.useCallback(() => {
            if (
                (E(!1),
                f.ZP.trackWithMetadata(m.rMx.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: n.id,
                    report_id: r
                }),
                null == v)
            )
                return;
            u.Z.delete(v.id), _.S.safeDispatch(m.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { applicationId: n.id });
            let e = b.get(n.id);
            null != e &&
                d.Z.leaveActivity({
                    location: e.location,
                    applicationId: n.id,
                    showFeedback: !1
                });
        }, [n.id, v, b, r]);
    return null == n
        ? null
        : (0, a.jsx)(p.ZP, {
              title: g.intl.string(g.t.ygG62N),
              description: g.intl.string(g.t.S51EKi),
              buttonText: i ? g.intl.string(g.t.xXpoGR) : g.intl.string(g.t.JsiUnJ),
              buttonDisabled: !i,
              buttonColor: i ? l.Button.Colors.RED : l.Button.Colors.WHITE,
              buttonLook: i ? l.Button.Looks.FILLED : l.Button.Looks.LINK,
              onButtonPress: I
          });
};
n.Z = E;
