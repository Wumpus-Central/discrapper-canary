n.d(t, { Ay: () => u, LU: () => I, xi: () => A });
var i = n(17928),
    r = n(587895),
    a = n(20015),
    s = n(567249),
    _ = n(646865),
    l = n(933958),
    o = n(969151),
    E = n(108959),
    d = n(5867),
    c = n(652215);
function u(e) {
    let { application: t, channelId: n } = e;
    if (null != t && (0, a.n)(t, c.gfo.EMBEDDED)) {
        if (s.A.getWindowOpen(c.MLl.ACTIVITY_POPOUT) && l.Ay.getActivityPanelMode() === d.Gd.ACTIVITY_POPOUT_WINDOW)
            return c.MLl.ACTIVITY_POPOUT;
        if (s.A.getWindowOpen(c.MLl.CHANNEL_CALL_POPOUT) && (0, E.A)(n) && !(0, _.f)())
            return c.MLl.CHANNEL_CALL_POPOUT;
    }
}
function I(e) {
    let { applicationId: t } = e,
        n = l.Ay.getCurrentEmbeddedActivity();
    if (null == n || n.applicationId !== t) return;
    let i = r.A.getApplication(t);
    if (null != i) return u({ application: i, channelId: (0, o.H)(n.location) });
}
function A(e) {
    let { channelId: t } = e;
    return (0, i.bG)([s.A, l.Ay, r.A], () => {
        let e = (function (e) {
            let { channelId: t, EmbeddedActivitiesStore: n, ApplicationStore: i } = e,
                r = n.getSelfEmbeddedActivityForChannel(t),
                a = i.getApplication(r?.applicationId);
            if (null != a) return u({ application: a, channelId: t });
        })({
            channelId: t ?? l.Ay.getConnectedActivityChannelId(),
            EmbeddedActivitiesStore: l.Ay,
            ApplicationStore: r.A,
        });
        return null != e ? s.A.getWindow(e) : void 0;
    });
}
