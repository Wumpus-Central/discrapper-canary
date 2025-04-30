n.d(t, { Z: () => b }), n(388685);
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
    p = n(981631),
    x = n(388032);
let b = (e) => {
    let { application: t, reportId: n } = e,
        [b, _] = l.useState(!1),
        f = (0, i.e7)([m.Z], () => {
            let e = m.Z.getApps();
            return null != e ? e.find((e) => e.application.id === t.id) : null;
        });
    l.useEffect(() => {
        null != f && _(!0);
    }, [f]);
    let h = l.useRef(!1);
    l.useEffect(() => {
        h.current || (o.Z.fetch(), (h.current = !0));
    }, []);
    let g = (0, i.e7)([s.ZP], () => s.ZP.getSelfEmbeddedActivities()),
        v = l.useCallback(() => {
            if (
                (_(!1),
                d.ZP.trackWithMetadata(p.rMx.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: n
                }),
                null == f)
            )
                return;
            o.Z.delete(f.id);
            let e = g.get(t.id);
            null != e &&
                c.Z.leaveActivity({
                    location: e.location,
                    applicationId: t.id,
                    showFeedback: !1
                });
        }, [t.id, f, g, n]);
    return null == t
        ? null
        : (0, r.jsx)(u.ZP, {
              title: x.intl.string(x.t.ygG62N),
              description: x.intl.string(x.t.S51EKi),
              buttonText: b ? x.intl.string(x.t.xXpoGR) : x.intl.string(x.t.JsiUnJ),
              buttonDisabled: !b,
              buttonColor: b ? a.zxk.Colors.RED : a.zxk.Colors.WHITE,
              buttonLook: b ? a.zxk.Looks.FILLED : a.zxk.Looks.LINK,
              onButtonPress: v
          });
};
