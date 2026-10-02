n.d(t, { Ay: () => A, LU: () => h, xi: () => I });
var i = n(991690),
    r = n(17928),
    a = n(587895),
    s = n(878014),
    l = n(567249),
    o = n(646865),
    d = n(933958),
    c = n(969151),
    u = n(108959),
    _ = n(5867),
    E = n(652215);
function A(e) {
    let { application: t, channelId: n } = e;
    if (null != t && (0, s.W)(t, i.U.MAIN)) {
        if (l.A.getWindowOpen(E.MLl.ACTIVITY_POPOUT) && d.Ay.getActivityPanelMode() === _.Gd.ACTIVITY_POPOUT_WINDOW)
            return E.MLl.ACTIVITY_POPOUT;
        if (l.A.getWindowOpen(E.MLl.CHANNEL_CALL_POPOUT) && (0, u.A)(n) && !(0, o.f)())
            return E.MLl.CHANNEL_CALL_POPOUT;
    }
}
function h(e) {
    let { applicationId: t } = e,
        n = d.Ay.getCurrentEmbeddedActivity();
    if (null == n || n.applicationId !== t) return;
    let i = a.A.getApplication(t);
    if (null != i) return A({ application: i, channelId: (0, c.H)(n.location) });
}
function I(e) {
    let { channelId: t } = e;
    return (0, r.bG)([l.A, d.Ay, a.A], () => {
        let e = (function (e) {
            let { channelId: t, EmbeddedActivitiesStore: n, ApplicationStore: i } = e,
                r = n.getSelfEmbeddedActivityForChannel(t),
                a = i.getApplication(r?.applicationId);
            if (null != a) return A({ application: a, channelId: t });
        })({
            channelId: t ?? d.Ay.getConnectedActivityChannelId(),
            EmbeddedActivitiesStore: d.Ay,
            ApplicationStore: a.A,
        });
        return null != e ? l.A.getWindow(e) : void 0;
    });
}
