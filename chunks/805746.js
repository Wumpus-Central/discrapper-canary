(n.d(t, { Z: () => b }), n(388685));
var r = n(255367),
    a = n(73800),
    i = n(442837),
    o = n(755721),
    l = n(384275),
    s = n(317381),
    c = n(513202),
    d = n(367907),
    u = n(138201),
    m = n(881998),
    p = n(981631),
    _ = n(388032);
let b = (e) => {
    let { application: t, reportId: n } = e,
        [b, g] = a.useState(!1),
        x = (0, i.e7)([m.Z], () => m.Z.getNewestTokenForApplication(t.id));
    a.useEffect(() => {
        null != x && g(!0);
    }, [x]);
    let h = a.useRef(!1);
    a.useEffect(() => {
        h.current || (l.Z.fetch(), (h.current = !0));
    }, []);
    let f = (0, i.e7)([s.ZP], () => s.ZP.getSelfEmbeddedActivities()),
        v = a.useCallback(() => {
            if (
                (g(!1),
                d.ZP.trackWithMetadata(p.rMx.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: n
                }),
                null == x)
            )
                return;
            l.Z.delete(x.id);
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
              buttonText: b ? _.intl.string(_.t.xXpoGR) : _.intl.string(_.t.JsiUnJ),
              buttonDisabled: !b,
              buttonColor: b ? o.zx.Colors.RED : o.zx.Colors.WHITE,
              buttonLook: b ? o.zx.Looks.FILLED : o.zx.Looks.LINK,
              onButtonPress: v
          });
};
