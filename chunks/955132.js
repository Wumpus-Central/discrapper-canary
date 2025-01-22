r.d(n, {
    GC: function () {
        return g;
    },
    RR: function () {
        return m;
    },
    Wb: function () {
        return _;
    }
});
var i = r(570140),
    a = r(579806),
    o = r(710845),
    s = r(314897),
    l = r(626135),
    u = r(931619),
    c = r(358085),
    d = r(548570),
    f = r(616810),
    p = r(755278);
let h = new o.Z('ConnectionStore'),
    _ = new d.Z(),
    m = new f.Z(_),
    g = new p.Z(_);
_.handleIdentify = () => {
    let e = s.default.getToken();
    return (h.verbose('handleIdentify called', { hasToken: null != e }), null == e)
        ? null
        : {
              token: e,
              properties: l.default.getSuperProperties(),
              presence: m.getInitialState()
          };
};
(0, c.isDesktop)() &&
    a.Z.remotePowerMonitor.on('resume', () => {
        _.expeditedHeartbeat(5000, 'power monitor resumed');
    }),
    u.Z.addOfflineCallback(() => {
        _.networkStateChange(15000, 'network detected offline.', !1);
    }),
    u.Z.addOnlineCallback(() => {
        _.networkStateChange(5000, 'network detected online.');
    }),
    _.on('disconnect', (e) => {
        let { code: n, reason: r } = e;
        i.Z.dispatch({
            type: 'CONNECTION_CLOSED',
            code: n,
            reason: r
        });
    }),
    _.on('close', (e) => {
        let { code: n, reason: r } = e;
        i.Z.dispatch({
            type: 'CONNECTION_INTERRUPTED',
            code: n,
            reason: r
        });
    });
