n.d(t, {
    GG: () => E,
    Rw: () => S,
    SI: () => v,
    Vq: () => b,
    a1: () => x,
    kG: () => _,
    y3: () => C
});
var i,
    r = n(913527),
    s = n.n(r),
    l = n(442837),
    a = n(291175),
    o = n(621853),
    c = n(594174),
    d = n(78839),
    u = n(111361),
    m = n(943180),
    g = n(494450),
    p = n(474936);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var b = (((i = {}).UPCOMING = 'upcoming'), (i.EARNED = 'earned'), i);
function _() {
    let e = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        t = (0, g.l)(null == e ? void 0 : e.id);
    return null != t ? t : null;
}
let x = (e) =>
    (0, l.e7)([o.Z], () => {
        if (null == e) return null;
        let t = o.Z.getUserProfile(e);
        return null == t ? void 0 : t.premiumSince;
    });
function E() {
    let e = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        t = (0, u.M5)(e, p.p9.TIER_2),
        n = (0, l.e7)(
            [d.ZP],
            () => {
                let e = d.ZP.getPremiumSubscription();
                return null != e && t ? e.premiumSince : null;
            },
            [t]
        ),
        i = x(null == e ? void 0 : e.id);
    return null != n ? n : i;
}
let C = () => {
        let e = Object.values(p.vK),
            t = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
            n = (0, l.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription());
        if (!(0, u.M5)(t, p.p9.TIER_2) || null == n || null == n.premiumSince) return null;
        let i = s()(),
            r = s()(n.premiumSince).add(1, 'day'),
            a = i.diff(r, 'months');
        return e.reduce((e, t) => {
            let { id: n, tenureReqNumMonths: i } = t;
            return a >= i ? n : e;
        }, null);
    },
    j = () => {
        let e = _(),
            t = (0, l.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription());
        return null == e || null == t || null == t.premiumSince ? null : (0, a.RZ)(e, t.premiumSince);
    },
    O = () => {
        let { enabled: e } = (0, m.D)(),
            t = E(),
            n = Object.values(p.vK);
        if (!e || null == t || null == n) return null;
        let i = s()().diff(t, 'days'),
            r = n[0],
            l = 30 * r.tenureReqNumMonths - i;
        return l <= 0
            ? null
            : f(h({}, r), {
                  daysLeft: l,
                  status: 'upcoming'
              });
    },
    S = () => {
        let e = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
            t = v(null == e ? void 0 : e.id),
            n = j(),
            i = O();
        return null != t
            ? f(h({}, t), {
                  earnedOnDate: n,
                  status: 'earned'
              })
            : null != i
              ? i
              : null;
    },
    v = (e) => {
        let t = (0, g.l)(e);
        return null == t ? null : p.vK[t];
    };
