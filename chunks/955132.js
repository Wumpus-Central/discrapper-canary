n.d(t, {
    GC: () => m,
    RR: () => h,
    Wb: () => p
});
var i = n(570140),
    r = n(579806),
    a = n(710845),
    s = n(314897),
    o = n(626135),
    l = n(931619),
    u = n(358085),
    c = n(548570),
    d = n(616810),
    f = n(755278);
let _ = new a.Z('ConnectionStore'),
    p = new c.Z(),
    h = new d.Z(p),
    m = new f.Z(p);
(p.handleIdentify = () => {
    let e = s.default.getToken();
    return (_.verbose('handleIdentify called', { hasToken: null != e }), null == e)
        ? null
        : {
              token: e,
              properties: o.default.getSuperProperties(),
              presence: h.getInitialState()
          };
}),
    (0, u.isDesktop)() &&
        r.Z.remotePowerMonitor.on('resume', () => {
            p.expeditedHeartbeat(5000, 'power monitor resumed');
        }),
    l.Z.addOfflineCallback(() => {
        p.networkStateChange(15000, 'network detected offline.', !1);
    }),
    l.Z.addOnlineCallback(() => {
        p.networkStateChange(5000, 'network detected online.');
    }),
    p.on('disconnect', (e) => {
        let { code: t, reason: n } = e;
        i.Z.dispatch({
            type: 'CONNECTION_CLOSED',
            code: t,
            reason: n
        });
    }),
    p.on('close', (e) => {
        let { code: t, reason: n } = e;
        i.Z.dispatch({
            type: 'CONNECTION_INTERRUPTED',
            code: t,
            reason: n
        });
    });
