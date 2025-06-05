n.d(e, { default: () => f });
var r = n(255367);
n(73800);
var c = n(442837),
    l = n(481060),
    o = n(774078),
    i = n(569984),
    a = n(497505),
    s = n(602667),
    u = n(388032),
    p = n(842054);
function d(t) {
    let { transitionState: e, onClose: n, questEnrollmentBlockedUntil: c } = t,
        { hours: i, minutes: a, seconds: s } = (0, o.Z)(c),
        d = String(i).padStart(2, '0'),
        f = String(a).padStart(2, '0'),
        b = String(s).padStart(2, '0'),
        O = ''.concat(d, ':').concat(f, ':').concat(b);
    return (0, r.jsxs)(l.Y0X, {
        transitionState: e,
        size: l.CgR.DYNAMIC,
        className: p.modal,
        parentComponent: 'QuestsMinorEnrollmentBlockModal',
        children: [
            (0, r.jsx)('div', {
                className: p.header,
                children: (0, r.jsx)(l.olH, {
                    className: p.closeBtn,
                    onClick: n
                })
            }),
            (0, r.jsx)(l.X6q, {
                variant: 'heading-lg/medium',
                className: p.title,
                children: u.intl.string(u.t['g+02d3'])
            }),
            (0, r.jsx)(l.Text, {
                variant: 'text-md/normal',
                className: p.subtext,
                children: u.intl.string(u.t.XEHDT0)
            }),
            (0, r.jsx)(l.Text, {
                variant: 'text-md/normal',
                className: p.subtext,
                children: u.intl.formatToPlainString(u.t['+5XVHx'], { countdownString: O })
            }),
            (0, r.jsx)(l.zxk, {
                className: p.ctaBtn,
                onClick: n,
                children: u.intl.string(u.t.cpT0Cg)
            })
        ]
    });
}
function f(t) {
    var { onClose: e, quest: n } = t,
        l = (function (t, e) {
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
        })(t, ['onClose', 'quest']);
    let o = (0, c.e7)([i.Z], () => i.Z.questEnrollmentBlockedUntil);
    return null == o || null == n
        ? null
        : (0, r.jsx)(s.A, {
              overrideVisibility: !0,
              questOrQuests: n,
              questContent: a.jn.QUEST_ENROLLMENT_BLOCKED_MODAL,
              children: () => {
                  var t, n;
                  return (0, r.jsx)(
                      d,
                      ((t = (function (t) {
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
                      })({}, l)),
                      (n = n =
                          {
                              onClose: e,
                              questEnrollmentBlockedUntil: o
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                          : (function (t, e) {
                                var n = Object.keys(t);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(t);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(n)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                            }),
                      t)
                  );
              }
          });
}
