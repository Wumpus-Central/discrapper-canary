n.d(t, {
    GG: () => x,
    Rw: () => O,
    SI: () => S,
    Vq: () => f,
    a1: () => _,
    kG: () => b,
    y3: () => E
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
    m = n(494450),
    g = n(474936);
function p(e) {
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
    let e = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        t = (0, m.l)(null == e ? void 0 : e.id);
    return null != t ? t : null;
}
let _ = (e) =>
    (0, l.e7)([o.Z], () => {
        if (null == e) return null;
        let t = o.Z.getUserProfile(e);
        return null == t ? void 0 : t.premiumSince;
    });
function x() {
    let e = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        t = (0, u.M5)(e, g.p9.TIER_2),
        n = (0, l.e7)(
            [d.ZP],
            () => {
                let e = d.ZP.getPremiumSubscription();
                return null != e && t ? e.premiumSince : null;
            },
            [t]
        ),
        i = _(null == e ? void 0 : e.id);
    return null != n ? n : i;
}
let E = () => {
        let e = Object.values(g.vK),
            t = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
            n = (0, l.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription());
        if (!(0, u.M5)(t, g.p9.TIER_2) || null == n || null == n.premiumSince) return null;
        let i = s()(),
            r = s()(n.premiumSince).add(1, 'day'),
            a = i.diff(r, 'months');
        return e.reduce((e, t) => {
            let { id: n, tenureReqNumMonths: i } = t;
            return a >= i ? n : e;
        }, null);
    },
    C = () => {
        let e = b(),
            t = (0, l.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription());
        return null == e || null == t || null == t.premiumSince ? null : (0, a.RZ)(e, t.premiumSince);
    },
    j = () => {
        let e = x(),
            t = Object.values(g.vK);
        if (null == e || null == t) return null;
        let n = s()().diff(e, 'days'),
            i = t[0],
            r = 30 * i.tenureReqNumMonths - n;
        return r <= 0
            ? null
            : h(p({}, i), {
                  daysLeft: r,
                  status: 'upcoming'
              });
    },
    O = () => {
        let e = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
            t = S(null == e ? void 0 : e.id),
            n = C(),
            i = j();
        return null != t
            ? h(p({}, t), {
                  earnedOnDate: n,
                  status: 'earned'
              })
            : null != i
              ? i
              : null;
    },
    S = (e) => {
        let t = (0, m.l)(e);
        return null == t ? null : g.vK[t];
    };
