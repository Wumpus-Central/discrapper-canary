n.d(t, { A: () => x });
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(824552),
    s = n(933958),
    d = n(869003),
    o = n(58149),
    u = n(632738),
    c = n(546183),
    m = n(652215),
    _ = n(985018);
let x = (e) => {
    let { application: t, reportId: n } = e,
        [x, g] = a.useState(!1),
        h = (0, i.bG)([c.default], () => c.default.getNewestTokenForApplication(t.id));
    a.useEffect(() => {
        null != h && g(!0);
    }, [h]);
    let p = a.useRef(!1);
    a.useEffect(() => {
        p.current || (r.A.fetch(), (p.current = !0));
    }, []);
    let A = (0, i.bG)([s.Ay], () => s.Ay.getSelfEmbeddedActivities()),
        b = a.useCallback(() => {
            if (
                (g(!1),
                o.Ay.trackWithMetadata(m.HAw.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: n,
                }),
                null == h)
            )
                return;
            r.A.delete(h.id);
            let e = A.get(t.id);
            null != e && d.A.leaveActivity({ location: e.location, applicationId: t.id, showFeedback: !1 });
        }, [t.id, h, A, n]);
    return null == t
        ? null
        : (0, l.jsx)(u.PQ, {
              title: _.intl.string(_.t.ygG62M),
              description: _.intl.string(_.t.S51EKg),
              buttonText: x ? _.intl.string(_.t.xXpoGV) : _.intl.string(_.t.JsiUnL),
              buttonDisabled: !x,
              onButtonPress: b,
              buttonVariant: x ? "critical-primary" : "secondary",
          });
};
