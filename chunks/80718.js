n.d(t, {
    A: () => p,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    a = n(311907),
    i = n(824552),
    s = n(933958),
    o = n(869003),
    c = n(58149),
    d = n(632738),
    u = n(546183),
    m = n(652215),
    b = n(985018);
let p = (e) => {
    let { application: t, reportId: n } = e,
        [p, x] = r.useState(!1),
        g = (0, a.bG)([u.default], () => u.default.getNewestTokenForApplication(t.id));
    r.useEffect(() => {
        null != g && x(!0);
    }, [g]);
    let f = r.useRef(!1);
    r.useEffect(() => {
        f.current || (i.A.fetch(), (f.current = !0));
    }, []);
    let v = (0, a.bG)([s.Ay], () => s.Ay.getSelfEmbeddedActivities()),
        h = r.useCallback(() => {
            if (
                (x(!1),
                c.Ay.trackWithMetadata(m.HAw.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: n,
                }),
                null == g)
            )
                return;
            i.A.delete(g.id);
            let e = v.get(t.id);
            null != e &&
                o.A.leaveActivity({
                    location: e.location,
                    applicationId: t.id,
                    showFeedback: !1,
                });
        }, [t.id, g, v, n]);
    return null == t
        ? null
        : (0, l.jsx)(d.PQ, {
              title: b.intl.string(b.t.ygG62M),
              description: b.intl.string(b.t.S51EKg),
              buttonText: p ? b.intl.string(b.t.xXpoGV) : b.intl.string(b.t.JsiUnL),
              buttonDisabled: !p,
              onButtonPress: h,
              buttonVariant: p ? "critical-primary" : "secondary",
          });
};
