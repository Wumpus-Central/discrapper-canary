n.d(t, {
    GC: () => I,
    RR: () => v,
    Wb: () => O
});
var r = n(570140),
    i = n(579806),
    a = n(15624),
    o = n(710845),
    s = n(314897),
    l = n(626135),
    c = n(931619),
    u = n(358085),
    d = n(548570),
    f = n(616810),
    _ = n(755278),
    p = n(866483),
    h = n(58);
function m(e, t, n) {
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
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            }));
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = new o.Z('ConnectionStore'),
    O = new d.Z(),
    v = new f.Z(O),
    I = new _.Z(O);
((O.handleIdentify = () => {
    let e = s.default.getToken();
    if ((y.verbose('handleIdentify called', { hasToken: null != e }), null == e)) return null;
    let t = a.Z.getState(),
        n = h.Z.getLatestTaskRunOn(),
        r = null != n ? (Date.now() - n) / 1000 : null,
        i = {
            token: e,
            properties: b(g({}, l.default.getSuperProperties()), {
                client_app_state: t,
                is_fast_connect: !1,
                latest_headless_tasks: h.Z.getHeadlessTasks(),
                latest_headless_task_run_seconds_before: r,
                gateway_connect_reasons: p.Pf()
            }),
            presence: v.getInitialState()
        };
    return (h.Z.clear(), i);
}),
    (0, u.isDesktop)() &&
        i.Z.remotePowerMonitor.on('resume', () => {
            O.expeditedHeartbeat(5000, 'power monitor resumed');
        }),
    c.Z.addOfflineCallback(() => {
        (h.Z.recordStartHeadlessTask('GatewaySocket.offline'), O.networkStateChange(15000, 'network detected offline.', !1));
    }),
    c.Z.addOnlineCallback(() => {
        (h.Z.recordStartHeadlessTask('GatewaySocket.online'), O.networkStateChange(5000, 'network detected online.'));
    }),
    O.on('disconnect', (e) => {
        let { code: t, reason: n } = e;
        r.Z.dispatch({
            type: 'CONNECTION_CLOSED',
            code: t,
            reason: n
        });
    }),
    O.on('close', (e) => {
        let { code: t, reason: n } = e;
        r.Z.dispatch({
            type: 'CONNECTION_INTERRUPTED',
            code: t,
            reason: n
        });
    }));
