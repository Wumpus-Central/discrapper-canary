n.d(t, {
    GG: () => _,
    Rw: () => E,
    SI: () => v,
    Vq: () => f,
    a1: () => x,
    kG: () => b,
    y3: () => j
});
var i,
    r = n(913527),
    s = n.n(r),
    a = n(442837),
    l = n(291175),
    o = n(621853),
    c = n(594174),
    d = n(78839),
    u = n(111361),
    m = n(494450),
    p = n(474936);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function h(e, t) {
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
var f = (((i = {}).UPCOMING = 'upcoming'), (i.EARNED = 'earned'), i);
function b() {
    let e = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        t = (0, m.l)(null == e ? void 0 : e.id);
    return null != t ? t : null;
}
let x = (e) =>
    (0, a.e7)([o.Z], () => {
        if (null == e) return null;
        let t = o.Z.getUserProfile(e);
        return null == t ? void 0 : t.premiumSince;
    });
function _() {
    let e = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        t = (0, u.M5)(e, p.p9.TIER_2),
        n = (0, a.e7)(
            [d.Z],
            () => {
                let e = d.Z.getPremiumSubscription();
                return null != e && t ? e.premiumSince : null;
            },
            [t]
        ),
        i = x(null == e ? void 0 : e.id);
    return null != n ? n : i;
}
let j = () => {
        let e = Object.values(p.vK),
            t = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
            n = (0, a.e7)([d.Z], () => d.Z.getPremiumTypeSubscription());
        if (!(0, u.M5)(t, p.p9.TIER_2) || null == n || null == n.premiumSince) return null;
        let i = s()(),
            r = s()(n.premiumSince).add(1, 'day'),
            l = i.diff(r, 'months');
        return e.reduce((e, t) => {
            let { id: n, tenureReqNumMonths: i } = t;
            return l >= i ? n : e;
        }, null);
    },
    O = () => {
        let e = b(),
            t = (0, a.e7)([d.Z], () => d.Z.getPremiumTypeSubscription());
        return null == e || null == t || null == t.premiumSince ? null : (0, l.RZ)(e, t.premiumSince);
    },
    C = () => {
        let e = _(),
            t = Object.values(p.vK);
        if (null == e || null == t) return null;
        let n = s()().diff(e, 'days'),
            i = t[0],
            r = 30 * i.tenureReqNumMonths - n;
        return r <= 0
            ? null
            : h(g({}, i), {
                  daysLeft: r,
                  status: 'upcoming'
              });
    },
    E = () => {
        let e = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
            t = v(null == e ? void 0 : e.id),
            n = O(),
            i = C();
        return null != t
            ? h(g({}, t), {
                  earnedOnDate: n,
                  status: 'earned'
              })
            : null != i
              ? i
              : null;
    },
    v = (e) => {
        let t = (0, m.l)(e);
        return null == t ? null : p.vK[t];
    };
