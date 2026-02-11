"use strict";
n.d(t, { Ay: () => f, LU: () => h, xi: () => m });
var r = n(311907),
    i = n(587895),
    a = n(20015),
    s = n(87001),
    o = n(646865),
    l = n(933958),
    u = n(969151),
    c = n(108959),
    d = n(5867),
    _ = n(652215);
function f(e) {
    let { application: t, channelId: n } = e;
    if (null != t && (0, a.n)(t, _.gfo.EMBEDDED)) {
        if (s.A.getWindowOpen(_.MLl.ACTIVITY_POPOUT) && l.Ay.getActivityPanelMode() === d.Gd.ACTIVITY_POPOUT_WINDOW)
            return _.MLl.ACTIVITY_POPOUT;
        if (s.A.getWindowOpen(_.MLl.CHANNEL_CALL_POPOUT) && (0, c.A)(n) && !(0, o.f)())
            return _.MLl.CHANNEL_CALL_POPOUT;
    }
}
function p(e) {
    let { channelId: t, EmbeddedActivitiesStore: n, ApplicationStore: r } = e,
        i = n.getSelfEmbeddedActivityForChannel(t),
        a = r.getApplication(i?.applicationId);
    if (null != a) return f({ application: a, channelId: t });
}
function h(e) {
    let { applicationId: t } = e,
        n = l.Ay.getCurrentEmbeddedActivity();
    if (null == n || n.applicationId !== t) return;
    let r = i.A.getApplication(t);
    if (null != r) return f({ application: r, channelId: (0, u.H)(n.location) });
}
function m(e) {
    let { channelId: t } = e;
    return (0, r.bG)([s.A, l.Ay, i.A], () => {
        let e = p({
            channelId: t ?? l.Ay.getConnectedActivityChannelId(),
            EmbeddedActivitiesStore: l.Ay,
            ApplicationStore: i.A,
        });
        return null != e ? s.A.getWindow(e) : void 0;
    });
}
