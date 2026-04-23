n.d(t, { A: () => h });
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(824552),
    s = n(933958),
    d = n(869003),
    o = n(58149),
    c = n(632738),
    u = n(546183),
    _ = n(652215),
    m = n(985018);
let h = (e) => {
    let { application: t, reportId: n } = e,
        [h, g] = a.useState(!1),
        p = (0, i.bG)([u.default], () => u.default.getNewestTokenForApplication(t.id));
    a.useEffect(() => {
        null != p && g(!0);
    }, [p]);
    let x = a.useRef(!1);
    a.useEffect(() => {
        x.current || (r.A.fetch(), (x.current = !0));
    }, []);
    let A = (0, i.bG)([s.Ay], () => s.Ay.getSelfEmbeddedActivities()),
        f = a.useCallback(() => {
            if (
                (g(!1),
                o.Ay.trackWithMetadata(_.HAw.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: n,
                }),
                null == p)
            )
                return;
            r.A.delete(p.id);
            let e = A.get(t.id);
            null != e && d.A.leaveActivity({ location: e.location, applicationId: t.id, showFeedback: !1 });
        }, [t.id, p, A, n]);
    return null == t
        ? null
        : (0, l.jsx)(c.PQ, {
              title: m.intl.string(m.t.ygG62M),
              description: m.intl.string(m.t.S51EKg),
              buttonText: h ? m.intl.string(m.t.xXpoGV) : m.intl.string(m.t.JsiUnL),
              buttonDisabled: !h,
              onButtonPress: f,
              buttonVariant: h ? "critical-primary" : "secondary",
          });
};
