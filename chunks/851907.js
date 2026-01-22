n.d(t, {
    Ay: () => p,
    LU: () => h,
    xi: () => m,
}),
    n(938796);
var r = n(665260),
    i = n(311907),
    a = n(587895),
    s = n(87001),
    o = n(646865),
    l = n(933958),
    c = n(969151),
    u = n(108959),
    d = n(5867),
    f = n(652215);

function p(e) {
    var t;
    let { application: n, channelId: i } = e;
    if (null != n && (0, r.Lt)(null != (t = n.flags) ? t : 0, f.gfo.EMBEDDED)) {
        if (s.A.getWindowOpen(f.MLl.ACTIVITY_POPOUT) && l.Ay.getActivityPanelMode() === d.Gd.ACTIVITY_POPOUT_WINDOW)
            return f.MLl.ACTIVITY_POPOUT;
        if (s.A.getWindowOpen(f.MLl.CHANNEL_CALL_POPOUT) && (0, u.A)(i) && !(0, o.f)())
            return f.MLl.CHANNEL_CALL_POPOUT;
    }
}

function _(e) {
    let { channelId: t, EmbeddedActivitiesStore: n, ApplicationStore: r } = e,
        i = n.getSelfEmbeddedActivityForChannel(t),
        a = r.getApplication(null == i ? void 0 : i.applicationId);
    if (null != a)
        return p({
            application: a,
            channelId: t,
        });
}

function h(e) {
    let { applicationId: t } = e,
        n = l.Ay.getCurrentEmbeddedActivity();
    if (null == n || n.applicationId !== t) return;
    let r = a.A.getApplication(t);
    if (null != r)
        return p({
            application: r,
            channelId: (0, c.H)(n.location),
        });
}

function m(e) {
    let { channelId: t } = e;
    return (0, i.bG)([s.A, l.Ay, a.A], () => {
        let e = _({
            channelId: null != t ? t : l.Ay.getConnectedActivityChannelId(),
            EmbeddedActivitiesStore: l.Ay,
            ApplicationStore: a.A,
        });
        return null != e ? s.A.getWindow(e) : void 0;
    });
}
