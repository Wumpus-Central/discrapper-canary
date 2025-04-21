n.d(e, { default: () => f });
var r = n(200651);
n(192379);
var c = n(442837),
    l = n(481060),
    o = n(774078),
    a = n(569984),
    i = n(388032),
    s = n(842054);
function u(t) {
    let { transitionState: e, onClose: n, questEnrollmentBlockedUntil: c } = t,
        { hours: a, minutes: u, seconds: f } = (0, o.Z)(c),
        p = String(a).padStart(2, '0'),
        b = String(u).padStart(2, '0'),
        d = String(f).padStart(2, '0'),
        O = ''.concat(p, ':').concat(b, ':').concat(d);
    return (0, r.jsxs)(l.Y0X, {
        transitionState: e,
        size: l.CgR.DYNAMIC,
        className: s.modal,
        children: [
            (0, r.jsx)('div', {
                className: s.header,
                children: (0, r.jsx)(l.olH, {
                    className: s.closeBtn,
                    onClick: n
                })
            }),
            (0, r.jsx)(l.X6q, {
                variant: 'heading-lg/medium',
                className: s.title,
                children: i.intl.string(i.t['g+02d3'])
            }),
            (0, r.jsx)(l.Text, {
                variant: 'text-md/normal',
                className: s.subtext,
                children: i.intl.string(i.t.XEHDT0)
            }),
            (0, r.jsx)(l.Text, {
                variant: 'text-md/normal',
                className: s.subtext,
                children: i.intl.formatToPlainString(i.t['+5XVHx'], { countdownString: O })
            }),
            (0, r.jsx)(l.zxk, {
                className: s.ctaBtn,
                onClick: n,
                children: i.intl.string(i.t.cpT0Cg)
            })
        ]
    });
}
function f(t) {
    var e,
        n,
        { onClose: l } = t,
        o = (function (t, e) {
            if (null == t) return {};
            var n,
                r,
                c = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        r,
                        c = {},
                        l = Object.keys(t);
                    for (r = 0; r < l.length; r++) (n = l[r]), e.indexOf(n) >= 0 || (c[n] = t[n]);
                    return c;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(t);
                for (r = 0; r < l.length; r++) (n = l[r]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (c[n] = t[n]);
            }
            return c;
        })(t, ['onClose']);
    let i = (0, c.e7)([a.Z], () => a.Z.questEnrollmentBlockedUntil);
    return null == i
        ? null
        : (0, r.jsx)(
              u,
              ((e = (function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? arguments[e] : {},
                          r = Object.keys(n);
                      'function' == typeof Object.getOwnPropertySymbols &&
                          (r = r.concat(
                              Object.getOwnPropertySymbols(n).filter(function (t) {
                                  return Object.getOwnPropertyDescriptor(n, t).enumerable;
                              })
                          )),
                          r.forEach(function (e) {
                              var r;
                              (r = n[e]),
                                  e in t
                                      ? Object.defineProperty(t, e, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        })
                                      : (t[e] = r);
                          });
                  }
                  return t;
              })({}, o)),
              (n = n =
                  {
                      onClose: l,
                      questEnrollmentBlockedUntil: i
                  }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                  : (function (t, e) {
                        var n = Object.keys(t);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(t);
                            n.push.apply(n, r);
                        }
                        return n;
                    })(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    }),
              e)
          );
}
