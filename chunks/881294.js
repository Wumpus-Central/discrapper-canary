n.d(t, {
    nu: () => p,
    qF: () => h,
    rf: () => m,
    zZ: () => u
}),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(301563);
var r = n(860911),
    a = n(442837),
    i = n(703656),
    l = n(314897),
    o = n(594174),
    s = n(626135),
    c = n(258971),
    d = n(981631);
function u(e, t) {
    var n, r, a;
    let i = c.z8.getField('sessionId'),
        l = c.z8.getField('guildId'),
        d = null == (n = c.z8.getField('entrypoint')) ? void 0 : n.name,
        u = o.default.getCurrentUser();
    return s.default.track(
        e,
        ((r = (function (e) {
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
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, t)),
        (a = a =
            {
                guild_id: l,
                directory_session_id: i,
                source: d,
                user_id: null == u ? void 0 : u.id
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(a)).forEach(function (e) {
                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e));
              }),
        r)
    );
}
function p() {
    return (0, a.e7)([l.default], () => l.default.isAuthenticated());
}
function m() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new URL(location.href);
    for (let n in e) {
        let r = e[n];
        t.searchParams.set(n, r);
    }
    let n = t.pathname + t.search,
        a = (0, r.Ui)(n, !1);
    (0, i.uL)(a);
}
function h() {
    let e = new URL(location.href),
        t = '?redirect_to='.concat(encodeURIComponent(e.pathname + e.search));
    (0, i.uL)(d.Z5c.REGISTER + t);
}
