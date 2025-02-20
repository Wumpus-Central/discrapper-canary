n.d(t, {
    GC: () => m,
    RR: () => h,
    Wb: () => _
});
var r = n(570140),
    i = n(579806),
    o = n(710845),
    a = n(314897),
    s = n(626135),
    l = n(931619),
    c = n(358085),
    u = n(548570),
    d = n(616810),
    f = n(755278);
let p = new o.Z('ConnectionStore'),
    _ = new u.Z(),
    h = new d.Z(_),
    m = new f.Z(_);
(_.handleIdentify = () => {
    let e = a.default.getToken();
    return (p.verbose('handleIdentify called', { hasToken: null != e }), null == e)
        ? null
        : {
              token: e,
              properties: s.default.getSuperProperties(),
              presence: h.getInitialState()
          };
}),
    (0, c.isDesktop)() &&
        i.Z.remotePowerMonitor.on('resume', () => {
            _.expeditedHeartbeat(5000, 'power monitor resumed');
        }),
    l.Z.addOfflineCallback(() => {
        _.networkStateChange(15000, 'network detected offline.', !1);
    }),
    l.Z.addOnlineCallback(() => {
        _.networkStateChange(5000, 'network detected online.');
    }),
    _.on('disconnect', (e) => {
        let { code: t, reason: n } = e;
        r.Z.dispatch({
            type: 'CONNECTION_CLOSED',
            code: t,
            reason: n
        });
    }),
    _.on('close', (e) => {
        let { code: t, reason: n } = e;
        r.Z.dispatch({
            type: 'CONNECTION_INTERRUPTED',
            code: t,
            reason: n
        });
    });
