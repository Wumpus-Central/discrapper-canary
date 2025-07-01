(n.d(t, { Z: () => g }), n(388685));
var r = n(255367),
    a = n(73800),
    i = n(442837),
    l = n(481060),
    o = n(384275),
    s = n(317381),
    c = n(513202),
    d = n(367907),
    u = n(138201),
    m = n(881998),
    p = n(981631),
    _ = n(388032);
let g = (e) => {
    let { application: t, reportId: n } = e,
        [g, b] = a.useState(!1),
        x = (0, i.e7)([m.Z], () => {
            let e = m.Z.getApps();
            return null != e ? e.find((e) => e.application.id === t.id) : null;
        });
    a.useEffect(() => {
        null != x && b(!0);
    }, [x]);
    let h = a.useRef(!1);
    a.useEffect(() => {
        h.current || (o.Z.fetch(), (h.current = !0));
    }, []);
    let f = (0, i.e7)([s.ZP], () => s.ZP.getSelfEmbeddedActivities()),
        v = a.useCallback(() => {
            if (
                (b(!1),
                d.ZP.trackWithMetadata(p.rMx.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: n
                }),
                null == x)
            )
                return;
            o.Z.delete(x.id);
            let e = f.get(t.id);
            null != e &&
                c.Z.leaveActivity({
                    location: e.location,
                    applicationId: t.id,
                    showFeedback: !1
                });
        }, [t.id, x, f, n]);
    return null == t
        ? null
        : (0, r.jsx)(u.ZP, {
              title: _.intl.string(_.t.ygG62N),
              description: _.intl.string(_.t.S51EKi),
              buttonText: g ? _.intl.string(_.t.xXpoGR) : _.intl.string(_.t.JsiUnJ),
              buttonDisabled: !g,
              buttonColor: g ? l.zxk.Colors.RED : l.zxk.Colors.WHITE,
              buttonLook: g ? l.zxk.Looks.FILLED : l.zxk.Looks.LINK,
              onButtonPress: v
          });
};
