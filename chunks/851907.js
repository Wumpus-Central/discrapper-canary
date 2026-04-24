"use strict";
n.d(t, { Ay: () => E, LU: () => h, xi: () => m });
var i = n(17928),
    r = n(587895),
    s = n(20015),
    a = n(567249),
    o = n(646865),
    l = n(933958),
    _ = n(969151),
    d = n(108959),
    u = n(5867),
    c = n(652215);
function E(e) {
    let { application: t, channelId: n } = e;
    if (null != t && (0, s.n)(t, c.gfo.EMBEDDED)) {
        if (a.A.getWindowOpen(c.MLl.ACTIVITY_POPOUT) && l.Ay.getActivityPanelMode() === u.Gd.ACTIVITY_POPOUT_WINDOW)
            return c.MLl.ACTIVITY_POPOUT;
        if (a.A.getWindowOpen(c.MLl.CHANNEL_CALL_POPOUT) && (0, d.A)(n) && !(0, o.f)())
            return c.MLl.CHANNEL_CALL_POPOUT;
    }
}
function h(e) {
    let { applicationId: t } = e,
        n = l.Ay.getCurrentEmbeddedActivity();
    if (null == n || n.applicationId !== t) return;
    let i = r.A.getApplication(t);
    if (null != i) return E({ application: i, channelId: (0, _.H)(n.location) });
}
function m(e) {
    let { channelId: t } = e;
    return (0, i.bG)([a.A, l.Ay, r.A], () => {
        let e = (function (e) {
            let { channelId: t, EmbeddedActivitiesStore: n, ApplicationStore: i } = e,
                r = n.getSelfEmbeddedActivityForChannel(t),
                s = i.getApplication(r?.applicationId);
            if (null != s) return E({ application: s, channelId: t });
        })({
            channelId: t ?? l.Ay.getConnectedActivityChannelId(),
            EmbeddedActivitiesStore: l.Ay,
            ApplicationStore: r.A,
        });
        return null != e ? a.A.getWindow(e) : void 0;
    });
}
