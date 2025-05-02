n.d(t, {
    GC: () => O,
    RR: () => y,
    Wb: () => b
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
    _ = n(755278);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = new a.Z('ConnectionStore'),
    b = new d.Z(),
    y = new f.Z(b),
    O = new _.Z(b);
(b.handleIdentify = () => {
    let e = s.default.getToken();
    if ((E.verbose('handleIdentify called', { hasToken: null != e }), null == e)) return null;
    let t = o.default.getState();
    return {
        token: e,
        properties: g(h({}, l.default.getSuperProperties()), {
            client_app_state: t,
            is_fast_connect: !1
        }),
        presence: y.getInitialState()
    };
}),
    (0, u.isDesktop)() &&
        i.Z.remotePowerMonitor.on('resume', () => {
            b.expeditedHeartbeat(5000, 'power monitor resumed');
        }),
    c.Z.addOfflineCallback(() => {
        b.networkStateChange(15000, 'network detected offline.', !1);
    }),
    c.Z.addOnlineCallback(() => {
        b.networkStateChange(5000, 'network detected online.');
    }),
    b.on('disconnect', (e) => {
        let { code: t, reason: n } = e;
        r.Z.dispatch({
            type: 'CONNECTION_CLOSED',
            code: t,
            reason: n
        });
    }),
    b.on('close', (e) => {
        let { code: t, reason: n } = e;
        r.Z.dispatch({
            type: 'CONNECTION_INTERRUPTED',
            code: t,
            reason: n
        });
    });
