"use strict";
n.d(t, { Ay: () => f, LU: () => E, xi: () => h });
var r = n(311907),
    i = n(587895),
    s = n(20015),
    a = n(87001),
    o = n(646865),
    l = n(933958),
    u = n(969151),
    d = n(108959),
    c = n(5867),
    _ = n(652215);
function f(e) {
    let { application: t, channelId: n } = e;
    if (null != t && (0, s.n)(t, _.gfo.EMBEDDED)) {
        if (a.A.getWindowOpen(_.MLl.ACTIVITY_POPOUT) && l.Ay.getActivityPanelMode() === c.Gd.ACTIVITY_POPOUT_WINDOW)
            return _.MLl.ACTIVITY_POPOUT;
        if (a.A.getWindowOpen(_.MLl.CHANNEL_CALL_POPOUT) && (0, d.A)(n) && !(0, o.f)())
            return _.MLl.CHANNEL_CALL_POPOUT;
    }
}
function E(e) {
    let { applicationId: t } = e,
        n = l.Ay.getCurrentEmbeddedActivity();
    if (null == n || n.applicationId !== t) return;
    let r = i.A.getApplication(t);
    if (null != r) return f({ application: r, channelId: (0, u.H)(n.location) });
}
function h(e) {
    let { channelId: t } = e;
    return (0, r.bG)([a.A, l.Ay, i.A], () => {
        let e = (function (e) {
            let { channelId: t, EmbeddedActivitiesStore: n, ApplicationStore: r } = e,
                i = n.getSelfEmbeddedActivityForChannel(t),
                s = r.getApplication(i?.applicationId);
            if (null != s) return f({ application: s, channelId: t });
        })({
            channelId: t ?? l.Ay.getConnectedActivityChannelId(),
            EmbeddedActivitiesStore: l.Ay,
            ApplicationStore: i.A,
        });
        return null != e ? a.A.getWindow(e) : void 0;
    });
}
