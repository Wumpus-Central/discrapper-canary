"use strict";
n.d(t, { A: () => p });
var a = n(627968),
    i = n(64700),
    r = n(311907),
    l = n(824552),
    s = n(933958),
    d = n(869003),
    o = n(58149),
    c = n(632738),
    u = n(546183),
    _ = n(652215),
    m = n(985018);
let p = (e) => {
    let { application: t, reportId: n } = e,
        [p, h] = i.useState(!1),
        g = (0, r.bG)([u.default], () => u.default.getNewestTokenForApplication(t.id));
    i.useEffect(() => {
        null != g && h(!0);
    }, [g]);
    let f = i.useRef(!1);
    i.useEffect(() => {
        f.current || (l.A.fetch(), (f.current = !0));
    }, []);
    let b = (0, r.bG)([s.Ay], () => s.Ay.getSelfEmbeddedActivities()),
        A = i.useCallback(() => {
            if (
                (h(!1),
                o.Ay.trackWithMetadata(_.HAw.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: n,
                }),
                null == g)
            )
                return;
            l.A.delete(g.id);
            let e = b.get(t.id);
            null != e && d.A.leaveActivity({ location: e.location, applicationId: t.id, showFeedback: !1 });
        }, [t.id, g, b, n]);
    return null == t
        ? null
        : (0, a.jsx)(c.PQ, {
              title: m.intl.string(m.t.ygG62M),
              description: m.intl.string(m.t.S51EKg),
              buttonText: p ? m.intl.string(m.t.xXpoGV) : m.intl.string(m.t.JsiUnL),
              buttonDisabled: !p,
              onButtonPress: A,
              buttonVariant: p ? "critical-primary" : "secondary",
          });
};
