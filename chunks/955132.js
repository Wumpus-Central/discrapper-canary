n.d(t, {
    GC: () => y,
    RR: () => b,
    Wb: () => E
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
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = new o.Z('ConnectionStore'),
    E = new u.Z(),
    b = new d.Z(E),
    y = new f.Z(E);
(E.handleIdentify = () => {
    let e = a.default.getToken();
    if ((g.verbose('handleIdentify called', { hasToken: null != e }), null == e)) return null;
    let t = null;
    return {
        token: e,
        properties: m(p({}, s.default.getSuperProperties()), {
            client_app_state: t,
            is_fast_connect: !1
        }),
        presence: b.getInitialState()
    };
}),
    (0, c.isDesktop)() &&
        i.Z.remotePowerMonitor.on('resume', () => {
            E.expeditedHeartbeat(5000, 'power monitor resumed');
        }),
    l.Z.addOfflineCallback(() => {
        E.networkStateChange(15000, 'network detected offline.', !1);
    }),
    l.Z.addOnlineCallback(() => {
        E.networkStateChange(5000, 'network detected online.');
    }),
    E.on('disconnect', (e) => {
        let { code: t, reason: n } = e;
        r.Z.dispatch({
            type: 'CONNECTION_CLOSED',
            code: t,
            reason: n
        });
    }),
    E.on('close', (e) => {
        let { code: t, reason: n } = e;
        r.Z.dispatch({
            type: 'CONNECTION_INTERRUPTED',
            code: t,
            reason: n
        });
    });
