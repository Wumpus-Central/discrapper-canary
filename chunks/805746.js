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
    x = n(981631),
    p = n(388032);
let b = (e) => {
    let { application: t, reportId: n } = e,
        [b, _] = l.useState(!1),
        h = (0, i.e7)([m.Z], () => {
            let e = m.Z.getApps();
            return null != e ? e.find((e) => e.application.id === t.id) : null;
        });
    l.useEffect(() => {
        null != h && _(!0);
    }, [h]);
    let f = l.useRef(!1);
    l.useEffect(() => {
        f.current || (o.Z.fetch(), (f.current = !0));
    }, []);
    let g = (0, i.e7)([s.ZP], () => s.ZP.getSelfEmbeddedActivities()),
        v = l.useCallback(() => {
            if (
                (_(!1),
                d.ZP.trackWithMetadata(x.rMx.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: n
                }),
                null == h)
            )
                return;
            o.Z.delete(h.id);
            let e = g.get(t.id);
            null != e &&
                c.Z.leaveActivity({
                    location: e.location,
                    applicationId: t.id,
                    showFeedback: !1
                });
        }, [t.id, h, g, n]);
    return null == t
        ? null
        : (0, r.jsx)(u.ZP, {
              title: p.intl.string(p.t.ygG62N),
              description: p.intl.string(p.t.S51EKi),
              buttonText: b ? p.intl.string(p.t.xXpoGR) : p.intl.string(p.t.JsiUnJ),
              buttonDisabled: !b,
              buttonColor: b ? a.zxk.Colors.RED : a.zxk.Colors.WHITE,
              buttonLook: b ? a.zxk.Looks.FILLED : a.zxk.Looks.LINK,
              onButtonPress: v
          });
};
