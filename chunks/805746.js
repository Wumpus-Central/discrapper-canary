(n.d(t, { Z: () => x }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(442837),
    a = n(755721),
    s = n(384275),
    o = n(317381),
    c = n(513202),
    d = n(367907),
    u = n(138201),
    m = n(881998),
    p = n(981631),
    g = n(388032);
let x = (e) => {
    let { application: t, reportId: n } = e,
        [x, _] = l.useState(!1),
        b = (0, i.e7)([m.Z], () => m.Z.getNewestTokenForApplication(t.id));
    l.useEffect(() => {
        null != b && _(!0);
    }, [b]);
    let h = l.useRef(!1);
    l.useEffect(() => {
        h.current || (s.Z.fetch(), (h.current = !0));
    }, []);
    let f = (0, i.e7)([o.ZP], () => o.ZP.getSelfEmbeddedActivities()),
        v = l.useCallback(() => {
            if (
                (_(!1),
                d.ZP.trackWithMetadata(p.rMx.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: n
                }),
                null == b)
            )
                return;
            s.Z.delete(b.id);
            let e = f.get(t.id);
            null != e &&
                c.Z.leaveActivity({
                    location: e.location,
                    applicationId: t.id,
                    showFeedback: !1
                });
        }, [t.id, b, f, n]);
    return null == t
        ? null
        : (0, r.jsx)(u.ZP, {
              title: g.intl.string(g.t.ygG62N),
              description: g.intl.string(g.t.S51EKi),
              buttonText: x ? g.intl.string(g.t.xXpoGR) : g.intl.string(g.t.JsiUnJ),
              buttonDisabled: !x,
              buttonColor: x ? a.zx.Colors.RED : a.zx.Colors.WHITE,
              buttonLook: x ? a.zx.Looks.FILLED : a.zx.Looks.LINK,
              onButtonPress: v
          });
};
