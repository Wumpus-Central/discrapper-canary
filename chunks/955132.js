n.d(t, {
    GC: () => v,
    RR: () => O,
    Wb: () => y
});
var r = n(570140),
    i = n(579806),
    o = n(15624),
    a = n(710845),
    s = n(314897),
    l = n(626135),
    c = n(931619),
    u = n(358085),
    d = n(548570),
    f = n(616810),
    _ = n(755278),
    p = n(58);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = new a.Z('ConnectionStore'),
    y = new d.Z(),
    O = new f.Z(y),
    v = new _.Z(y);
(y.handleIdentify = () => {
    let e = s.default.getToken();
    if ((b.verbose('handleIdentify called', { hasToken: null != e }), null == e)) return null;
    let t = o.Z.getState(),
        n = p.Z.getLatestTaskRunOn(),
        r = null != n ? (Date.now() - n) / 1000 : null,
        i = {
            token: e,
            properties: E(m({}, l.default.getSuperProperties()), {
                client_app_state: t,
                is_fast_connect: !1,
                latest_headless_tasks: p.Z.getHeadlessTasks(),
                latest_headless_task_run_seconds_before: r
            }),
            presence: O.getInitialState()
        };
    return p.Z.clear(), i;
}),
    (0, u.isDesktop)() &&
        i.Z.remotePowerMonitor.on('resume', () => {
            y.expeditedHeartbeat(5000, 'power monitor resumed');
        }),
    c.Z.addOfflineCallback(() => {
        p.Z.recordStartHeadlessTask('GatewaySocket.offline'), y.networkStateChange(15000, 'network detected offline.', !1);
    }),
    c.Z.addOnlineCallback(() => {
        p.Z.recordStartHeadlessTask('GatewaySocket.online'), y.networkStateChange(5000, 'network detected online.');
    }),
    y.on('disconnect', (e) => {
        let { code: t, reason: n } = e;
        r.Z.dispatch({
            type: 'CONNECTION_CLOSED',
            code: t,
            reason: n
        });
    }),
    y.on('close', (e) => {
        let { code: t, reason: n } = e;
        r.Z.dispatch({
            type: 'CONNECTION_INTERRUPTED',
            code: t,
            reason: n
        });
    });
