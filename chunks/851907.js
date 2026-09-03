n.d(t, { Ay: () => E, LU: () => A, xi: () => h });
var i = n(17928),
    r = n(587895),
    a = n(20015),
    s = n(567249),
    l = n(646865),
    o = n(933958),
    d = n(969151),
    c = n(108959),
    u = n(5867),
    _ = n(652215);
function E(e) {
    let { application: t, channelId: n } = e;
    if (null != t && (0, a.n)(t, _.gfo.EMBEDDED)) {
        if (s.A.getWindowOpen(_.MLl.ACTIVITY_POPOUT) && o.Ay.getActivityPanelMode() === u.Gd.ACTIVITY_POPOUT_WINDOW)
            return _.MLl.ACTIVITY_POPOUT;
        if (s.A.getWindowOpen(_.MLl.CHANNEL_CALL_POPOUT) && (0, c.A)(n) && !(0, l.f)())
            return _.MLl.CHANNEL_CALL_POPOUT;
    }
}
function A(e) {
    let { applicationId: t } = e,
        n = o.Ay.getCurrentEmbeddedActivity();
    if (null == n || n.applicationId !== t) return;
    let i = r.A.getApplication(t);
    if (null != i) return E({ application: i, channelId: (0, d.H)(n.location) });
}
function h(e) {
    let { channelId: t } = e;
    return (0, i.bG)([s.A, o.Ay, r.A], () => {
        let e = (function (e) {
            let { channelId: t, EmbeddedActivitiesStore: n, ApplicationStore: i } = e,
                r = n.getSelfEmbeddedActivityForChannel(t),
                a = i.getApplication(r?.applicationId);
            if (null != a) return E({ application: a, channelId: t });
        })({
            channelId: t ?? o.Ay.getConnectedActivityChannelId(),
            EmbeddedActivitiesStore: o.Ay,
            ApplicationStore: r.A,
        });
        return null != e ? s.A.getWindow(e) : void 0;
    });
}
