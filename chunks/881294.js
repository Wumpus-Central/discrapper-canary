n.d(t, {
    nu: () => p,
    qF: () => h,
    rf: () => m,
    zZ: () => u,
}),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685),
    n(35282);
var a = n(860911),
    r = n(442837),
    i = n(703656),
    l = n(314897),
    s = n(594174),
    o = n(626135),
    c = n(258971),
    d = n(981631);
function u(e, t) {
    var n, a, r;
    let i = c.z8.getField("sessionId"),
        l = c.z8.getField("guildId"),
        d = null == (n = c.z8.getField("entrypoint")) ? void 0 : n.name,
        u = s.default.getCurrentUser(),
        p =
            ((a = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (a = a.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        a.forEach(function (t) {
                            var a;
                            (a = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: a,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = a);
                        });
                }
                return e;
            })({}, t)),
            (r = r =
                {
                    guild_id: l,
                    directory_session_id: i,
                    source: d,
                    user_id: null == u ? void 0 : u.id,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var a = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, a);
                      }
                      return n;
                  })(Object(r)).forEach(function (e) {
                      Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(r, e));
                  }),
            a);
    return o.default.track(e, p);
}
function p() {
    return (0, r.e7)([l.default], () => l.default.isAuthenticated());
}
function m() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new URL(location.href);
    for (let n in e) {
        let a = e[n];
        t.searchParams.set(n, a);
    }
    let n = t.pathname + t.search,
        r = (0, a.Ui)(n, !1);
    (0, i.uL)(r);
}
function h() {
    let e = new URL(location.href),
        t = "?redirect_to=".concat(encodeURIComponent(e.pathname + e.search));
    (0, i.uL)(d.Z5c.REGISTER + t);
}
